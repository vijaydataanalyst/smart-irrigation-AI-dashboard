import * as maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { Streamlit, withStreamlitConnection } from "streamlit-component-lib";
import "./style.css";

const root = document.querySelector("#root");
root.innerHTML = `
  <section class="globe-shell">
    <div id="globe-canvas"></div>
    <div class="globe-copy">
      <div class="globe-kicker">3D PLANET OBSERVATION • FIELD LOCATOR</div>
      <h2>Choose your field<br><em>from the planet.</em></h2>
      <p>Drag to orbit Earth. Click anywhere on terrain to set precision field coordinates.</p>
    </div>
    <div class="globe-readout" id="readout">TELEMETRY READY • AWAITING TARGET</div>
    <div class="place-rail" id="place-rail">
      <div class="place-rail-header">
        <strong>SAVED FIELD NETWORK</strong>
        <span class="count-badge" id="field-count">0</span>
      </div>
      <div id="field-list"></div>
    </div>
    <div class="globe-hint">DRAG TO ORBIT &nbsp; • &nbsp; SCROLL TO ZOOM &nbsp; • &nbsp; CLICK TERRAIN TO PIN FIELD</div>
  </section>
`;

const readout = document.querySelector("#readout");
const fieldList = document.querySelector("#field-list");
const fieldCountBadge = document.querySelector("#field-count");

const map = new maplibregl.Map({
  container: 'globe-canvas',
  style: {
    version: 8,
    sources: {
      'esri-dark-base': {
        type: 'raster',
        tiles: [
          'https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
        ],
        tileSize: 256,
        attribution: '&copy; Esri, HERE, Garmin, OpenStreetMap'
      },
      'esri-dark-ref': {
        type: 'raster',
        tiles: [
          'https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}'
        ],
        tileSize: 256
      }
    },
    layers: [
      {
        id: 'esri-dark-base-layer',
        type: 'raster',
        source: 'esri-dark-base',
        minzoom: 0,
        maxzoom: 18
      },
      {
        id: 'esri-dark-ref-layer',
        type: 'raster',
        source: 'esri-dark-ref',
        minzoom: 0,
        maxzoom: 18
      }
    ]
  },
  center: [78.9629, 20.5937],
  zoom: 1.8,
  minZoom: 1,
  maxZoom: 18,
  pitch: 0,
});

let isMapLoaded = false;
let currentFieldPoints = [];
let currentTarget = { lat: 20.5937, lon: 78.9629, name: "", id: null };
let activeMarker = null;

// Helper: Check if coordinate is on the visible facing hemisphere of the 3D globe
function isCoordVisible(targetLon, targetLat) {
  const center = map.getCenter();
  const toRad = Math.PI / 180;
  const lat1 = center.lat * toRad;
  const lon1 = center.lng * toRad;
  const lat2 = targetLat * toRad;
  const lon2 = targetLon * toRad;
  
  const cosDistance = Math.sin(lat1) * Math.sin(lat2) + 
                      Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1);
  return cosDistance > 0.15;
}

function updateMarkerOcclusion() {
  if (!activeMarker) return;
  const el = activeMarker.getElement();
  if (!el) return;
  if (isCoordVisible(currentTarget.lon, currentTarget.lat)) {
    el.style.opacity = '1';
    el.style.pointerEvents = 'auto';
  } else {
    el.style.opacity = '0';
    el.style.pointerEvents = 'none';
  }
}

map.on('move', updateMarkerOcclusion);
map.on('rotate', updateMarkerOcclusion);

function renderTargetBeacon(lat, lon, labelText = "") {
  if (activeMarker) {
    activeMarker.remove();
  }

  const el = document.createElement('div');
  el.className = 'target-beacon-wrapper';
  const displayTitle = labelText || "Selected Location";
  
  el.innerHTML = `
    <div class="target-beacon-pulse"></div>
    <div class="target-beacon-pin">
      <div class="target-beacon-bubble">
        <span class="badge-sub">📍 TARGET FIELD</span>
        <span class="badge-name">${displayTitle}</span>
        <span class="badge-coords">${lat.toFixed(4)}° N, ${lon.toFixed(4)}° E</span>
      </div>
      <div class="target-beacon-point"></div>
    </div>
  `;

  activeMarker = new maplibregl.Marker({ element: el, anchor: 'bottom' })
    .setLngLat([lon, lat])
    .addTo(map);

  updateMarkerOcclusion();
}

function setupNativeGlobeLayers() {
  map.setProjection({ type: 'globe' });

  // 1. Saved Fields GeoJSON Source
  if (!map.getSource('saved-fields')) {
    map.addSource('saved-fields', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: []
      }
    });

    // Outer aura glow
    map.addLayer({
      id: 'saved-fields-glow',
      type: 'circle',
      source: 'saved-fields',
      paint: {
        'circle-radius': ['interpolate', ['linear'], ['zoom'], 1, 9, 6, 16, 12, 22],
        'circle-color': '#38e078',
        'circle-opacity': 0.35,
        'circle-blur': 0.75
      }
    });

    // Core green dot
    map.addLayer({
      id: 'saved-fields-core',
      type: 'circle',
      source: 'saved-fields',
      paint: {
        'circle-radius': ['interpolate', ['linear'], ['zoom'], 1, 5, 6, 8, 12, 11],
        'circle-color': '#a6f28f',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#050807',
        'circle-opacity': 1.0
      }
    });

    // Label layer on globe
    map.addLayer({
      id: 'saved-fields-label',
      type: 'symbol',
      source: 'saved-fields',
      layout: {
        'text-field': ['get', 'name'],
        'text-size': 11,
        'text-offset': [0, 1.3],
        'text-anchor': 'top',
        'text-allow-overlap': false
      },
      paint: {
        'text-color': '#eff9eb',
        'text-halo-color': '#050807',
        'text-halo-width': 2
      }
    });
  }

  // Layer click handlers
  map.on('click', 'saved-fields-core', (e) => {
    if (e.features && e.features.length > 0) {
      const feat = e.features[0];
      const coords = feat.geometry.coordinates;
      const fId = feat.properties?.id;
      emitLocation(coords[1], coords[0], feat.properties?.name, fId);
      flyToLocation(coords[1], coords[0]);
    }
  });

  map.on('mouseenter', 'saved-fields-core', () => {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseleave', 'saved-fields-core', () => {
    map.getCanvas().style.cursor = '';
  });

  isMapLoaded = true;

  if (currentFieldPoints.length > 0) {
    updateNativeFieldPoints(currentFieldPoints);
  }
  if (currentTarget.lat && currentTarget.lon) {
    renderTargetBeacon(currentTarget.lat, currentTarget.lon, currentTarget.name);
  }
}

map.on('style.load', setupNativeGlobeLayers);

function flyToLocation(lat, lon) {
  const currentZoom = map.getZoom();
  const targetZoom = Math.max(currentZoom, 6.0);
  map.flyTo({
    center: [lon, lat],
    zoom: targetZoom,
    duration: 1400,
    essential: true
  });
}

function updateNativeFieldPoints(points) {
  currentFieldPoints = points;
  if (!isMapLoaded) return;

  const source = map.getSource('saved-fields');
  if (!source) return;

  const geojson = {
    type: 'FeatureCollection',
    features: points.map(pt => ({
      type: 'Feature',
      properties: {
        id: pt.id,
        name: pt.name || pt.id
      },
      geometry: {
        type: 'Point',
        coordinates: [pt.longitude, pt.latitude]
      }
    }))
  };
  source.setData(geojson);

  // Update floating list
  fieldCountBadge.textContent = String(points.length);
  fieldList.innerHTML = points.map(pt => {
    const isTarget = (currentTarget.id && pt.id === currentTarget.id) || 
      (Math.abs(pt.latitude - currentTarget.lat) < 0.005 && Math.abs(pt.longitude - currentTarget.lon) < 0.005);
    const activeClass = isTarget ? "field-item active-field" : "field-item";
    return `
      <div class="${activeClass}" data-lat="${pt.latitude}" data-lon="${pt.longitude}" data-name="${pt.name}" data-id="${pt.id}">
        <span class="field-dot"></span>
        <span style="overflow:hidden; text-overflow:ellipsis;">${pt.name}</span>
      </div>
    `;
  }).join("");

  fieldList.querySelectorAll('.field-item').forEach(item => {
    item.addEventListener('click', () => {
      const lat = parseFloat(item.dataset.lat);
      const lon = parseFloat(item.dataset.lon);
      const name = item.dataset.name;
      const fieldId = item.dataset.id;
      emitLocation(lat, lon, name, fieldId);
      flyToLocation(lat, lon);
    });
  });
}

function emitLocation(latitude, longitude, nameHint = null, fieldId = null) {
  const lat = Number(latitude.toFixed(5));
  const lon = Number(longitude.toFixed(5));
  const label = nameHint ? `${nameHint} • ` : "";
  readout.textContent = `${label}${lat.toFixed(5)}° LAT  ${lon.toFixed(5)}° LON`;

  currentTarget = { lat, lon, name: nameHint || "", id: fieldId };
  renderTargetBeacon(lat, lon, nameHint || "");
  
  if (currentFieldPoints.length > 0) {
    updateNativeFieldPoints(currentFieldPoints);
  }

  Streamlit.setComponentValue({
    latitude: lat,
    longitude: lon,
    field_id: fieldId,
    source: "maplibre-globe",
    ts: Date.now()
  });
}

map.on('click', (e) => {
  const features = map.queryRenderedFeatures(e.point, { layers: ['saved-fields-core'] });
  if (features && features.length > 0) {
    return;
  }
  emitLocation(e.lngLat.lat, e.lngLat.lng, "Pinned Location", null);
});

map.on('zoom', () => {
  const zoom = map.getZoom();
  if (zoom > 3.5) {
    if (!readout.textContent.includes('° LAT')) {
      readout.textContent = `PRECISION TERRAIN ${zoom.toFixed(1)}× / ZOOMED`;
    }
  }
});

Streamlit.setComponentReady();
Streamlit.setFrameHeight(760);

let lastKnownCoord = null;

Streamlit.events.addEventListener(Streamlit.RENDER_EVENT, (event) => {
  const args = event.detail.args || {};
  if (typeof args.latitude === "number" && typeof args.longitude === "number") {
    const newCoordKey = `${args.latitude.toFixed(4)},${args.longitude.toFixed(4)},${args.active_field_id || ''}`;
    const hasCoordChanged = (lastKnownCoord !== newCoordKey);

    currentTarget = {
      lat: args.latitude,
      lon: args.longitude,
      name: args.location_name || "",
      id: args.active_field_id || null
    };

    renderTargetBeacon(args.latitude, args.longitude, args.location_name || "");

    if (hasCoordChanged) {
      flyToLocation(args.latitude, args.longitude);
      lastKnownCoord = newCoordKey;
    }

    if (args.field_points) {
      updateNativeFieldPoints(args.field_points);
    }

    const label = args.location_name ? `${args.location_name} • ` : "";
    readout.textContent = `${label}${args.latitude.toFixed(5)}° LAT  ${args.longitude.toFixed(5)}° LON`;
  }
});

withStreamlitConnection(() => {});

const resizeObserver = new ResizeObserver(() => {
  map.resize();
  const rect = root.getBoundingClientRect();
  Streamlit.setFrameHeight(Math.max(420, rect.height));
});
resizeObserver.observe(root);
