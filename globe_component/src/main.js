import * as THREE from "three";
import { Streamlit, withStreamlitConnection } from "streamlit-component-lib";
import "./style.css";

const root = document.querySelector("#root");
root.innerHTML = `
  <section class="globe-shell">
    <canvas id="globe-canvas"></canvas>
    <div class="globe-copy">
      <div class="globe-kicker">LOCATION ORBIT / 3D FIELD SELECTOR</div>
      <h2>Choose your field<br><em>from the planet.</em></h2>
      <p>Drag to orbit. Click the Earth to set a precise forecast location.</p>
    </div>
    <div class="globe-readout" id="readout">READY / AWAITING LOCATION</div>
    <div class="globe-hint">DRAG TO ROTATE &nbsp; · &nbsp; SCROLL TO ZOOM &nbsp; · &nbsp; CLICK TO PIN</div>
  </section>
`;

const canvas = document.querySelector("#globe-canvas");
const readout = document.querySelector("#readout");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
camera.position.set(0, 0, 4.25);
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0x081611, 1);

const globe = new THREE.Group();
scene.add(globe);
const textureLoader = new THREE.TextureLoader();
const earthTexture = textureLoader.load("https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg");
const earth = new THREE.Mesh(
  new THREE.SphereGeometry(1.3, 64, 64),
  new THREE.MeshPhongMaterial({ map: earthTexture, shininess: 12, specular: 0x335544 })
);
globe.add(earth);
const atmosphere = new THREE.Mesh(
  new THREE.SphereGeometry(1.37, 64, 64),
  new THREE.MeshBasicMaterial({ color: 0x70d9b0, transparent: true, opacity: 0.12, side: THREE.BackSide })
);
globe.add(atmosphere);
const starGeometry = new THREE.BufferGeometry();
const starPositions = [];
for (let i = 0; i < 900; i += 1) {
  const radius = 6 + Math.random() * 5;
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos((Math.random() * 2) - 1);
  starPositions.push(radius * Math.sin(phi) * Math.cos(theta), radius * Math.sin(phi) * Math.sin(theta), radius * Math.cos(phi));
}
starGeometry.setAttribute("position", new THREE.Float32BufferAttribute(starPositions, 3));
scene.add(new THREE.Points(starGeometry, new THREE.PointsMaterial({ color: 0xa8e5c0, size: 0.018, transparent: true, opacity: 0.8 })));
scene.add(new THREE.AmbientLight(0x9bcbb3, 1.15));
const sun = new THREE.DirectionalLight(0xffffff, 2.1);
sun.position.set(4, 2, 5);
scene.add(sun);

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
let dragging = false;
let moved = false;
let lastX = 0;
let lastY = 0;
let selectedPin = null;

function resize() {
  const rect = canvas.getBoundingClientRect();
  renderer.setSize(rect.width, rect.height, false);
  camera.aspect = rect.width / Math.max(rect.height, 1);
  camera.updateProjectionMatrix();
  Streamlit.setFrameHeight(Math.max(420, rect.height));
}

function placePin(latitude, longitude) {
  if (selectedPin) globe.remove(selectedPin);
  const phi = (90 - latitude) * Math.PI / 180;
  const theta = (longitude + 180) * Math.PI / 180;
  const pinPosition = new THREE.Vector3(-1.31 * Math.sin(phi) * Math.cos(theta), 1.31 * Math.cos(phi), 1.31 * Math.sin(phi) * Math.sin(theta));
  selectedPin = new THREE.Mesh(new THREE.SphereGeometry(0.045, 16, 16), new THREE.MeshBasicMaterial({ color: 0xffc45c }));
  selectedPin.position.copy(pinPosition);
  globe.add(selectedPin);
}

function emitLocation(latitude, longitude) {
  const lat = Number(latitude.toFixed(5));
  const lon = Number(longitude.toFixed(5));
  readout.textContent = `PINNED / ${lat.toFixed(5)}° LAT  ${lon.toFixed(5)}° LON`;
  placePin(lat, lon);
  Streamlit.setComponentValue({ latitude: lat, longitude: lon, source: "threejs-globe" });
}

canvas.addEventListener("pointerdown", (event) => {
  dragging = true; moved = false; lastX = event.clientX; lastY = event.clientY; canvas.setPointerCapture(event.pointerId);
});
canvas.addEventListener("pointermove", (event) => {
  if (!dragging) return;
  const dx = event.clientX - lastX; const dy = event.clientY - lastY;
  if (Math.abs(dx) + Math.abs(dy) > 2) moved = true;
  globe.rotation.y += dx * 0.006; globe.rotation.x = Math.max(-0.55, Math.min(0.55, globe.rotation.x + dy * 0.004));
  lastX = event.clientX; lastY = event.clientY;
});
canvas.addEventListener("pointerup", (event) => {
  dragging = false;
  if (moved) return;
  const rect = canvas.getBoundingClientRect();
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  const hit = raycaster.intersectObject(earth)[0];
  if (!hit) return;
  const local = globe.worldToLocal(hit.point.clone()).normalize();
  const latitude = 90 - Math.acos(local.y) * 180 / Math.PI;
  const longitude = Math.atan2(local.z, -local.x) * 180 / Math.PI - 180;
  emitLocation(latitude, ((longitude + 540) % 360) - 180);
});
canvas.addEventListener("wheel", (event) => {
  event.preventDefault();
  camera.position.z = Math.max(2.8, Math.min(6.2, camera.position.z + event.deltaY * 0.0025));
}, { passive: false });

function animate() {
  requestAnimationFrame(animate);
  if (!dragging) globe.rotation.y += 0.0007;
  renderer.render(scene, camera);
}
window.addEventListener("resize", resize);
resize();
animate();
Streamlit.setComponentReady();
Streamlit.setFrameHeight(640);
Streamlit.events.addEventListener(Streamlit.RENDER_EVENT, (event) => {
  const args = event.detail.args || {};
  if (typeof args.latitude === "number" && typeof args.longitude === "number") {
    placePin(args.latitude, args.longitude);
    const label = args.location_name ? `${args.location_name} / ` : "";
    readout.textContent = `${label}${args.latitude.toFixed(5)}° LAT  ${args.longitude.toFixed(5)}° LON`;
  }
});
withStreamlitConnection(() => {});
