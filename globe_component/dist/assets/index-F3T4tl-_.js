(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ol="170",Kp=0,Fu=1,Zp=2,md=1,Jp=2,pi=3,Xi=0,$e=1,yi=2,Gi=0,ts=1,Nu=2,Ou=3,Bu=4,Qp=5,fr=100,tm=101,em=102,nm=103,im=104,rm=200,sm=201,om=202,am=203,Dc=204,Lc=205,cm=206,lm=207,um=208,hm=209,dm=210,fm=211,pm=212,mm=213,gm=214,Pc=0,Uc=1,Fc=2,cs=3,Nc=4,Oc=5,Bc=6,zc=7,Bl=0,_m=1,vm=2,Wi=0,ym=1,Sm=2,xm=3,bm=4,Mm=5,Em=6,wm=7,gd=300,ls=301,us=302,Vc=303,kc=304,Da=306,Hc=1e3,mr=1001,Gc=1002,Nn=1003,Tm=1004,go=1005,Zn=1006,Ha=1007,gr=1008,Ai=1009,_d=1010,vd=1011,Ws=1012,zl=1013,wr=1014,bi=1015,Qs=1016,Vl=1017,kl=1018,hs=1020,yd=35902,Sd=1021,xd=1022,Fn=1023,bd=1024,Md=1025,es=1026,ds=1027,Ed=1028,Hl=1029,wd=1030,Gl=1031,Wl=1033,Ho=33776,Go=33777,Wo=33778,Xo=33779,Wc=35840,Xc=35841,jc=35842,Yc=35843,$c=36196,qc=37492,Kc=37496,Zc=37808,Jc=37809,Qc=37810,tl=37811,el=37812,nl=37813,il=37814,rl=37815,sl=37816,ol=37817,al=37818,cl=37819,ll=37820,ul=37821,jo=36492,hl=36494,dl=36495,Td=36283,fl=36284,pl=36285,ml=36286,Am=3200,Rm=3201,Ad=0,Im=1,Hi="",bn="srgb",xs="srgb-linear",La="linear",ve="srgb",Dr=7680,zu=519,Cm=512,Dm=513,Lm=514,Rd=515,Pm=516,Um=517,Fm=518,Nm=519,Vu=35044,ku="300 es",Mi=2e3,ea=2001;class bs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ga=Math.PI/180,gl=180/Math.PI;function to(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]).toLowerCase()}function tn(n,t,e){return Math.max(t,Math.min(e,n))}function Om(n,t){return(n%t+t)%t}function Wa(n,t,e){return(1-e)*n+e*t}function Cs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ze(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ce{constructor(t=0,e=0){ce.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(tn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,i,r,s,o,a,c,l){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l)}set(t,e,i,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],y=r[0],m=r[3],d=r[6],T=r[1],E=r[4],x=r[7],A=r[2],I=r[5],R=r[8];return s[0]=o*y+a*T+c*A,s[3]=o*m+a*E+c*I,s[6]=o*d+a*x+c*R,s[1]=l*y+u*T+h*A,s[4]=l*m+u*E+h*I,s[7]=l*d+u*x+h*R,s[2]=f*y+p*T+g*A,s[5]=f*m+p*E+g*I,s[8]=f*d+p*x+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*s,p=l*s-o*c,g=e*h+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return t[0]=h*y,t[1]=(r*l-u*i)*y,t[2]=(a*i-r*o)*y,t[3]=f*y,t[4]=(u*e-r*c)*y,t[5]=(r*s-a*e)*y,t[6]=p*y,t[7]=(i*c-l*e)*y,t[8]=(o*e-i*s)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Xa.makeScale(t,e)),this}rotate(t){return this.premultiply(Xa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xa=new Ht;function Id(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Xs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Bm(){const n=Xs("canvas");return n.style.display="block",n}const Hu={};function Os(n){n in Hu||(Hu[n]=!0,console.warn(n))}function zm(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function Vm(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function km(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ie={enabled:!0,workingColorSpace:xs,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ve&&(n.r=Ei(n.r),n.g=Ei(n.g),n.b=Ei(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ve&&(n.r=ns(n.r),n.g=ns(n.g),n.b=ns(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Hi?La:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ei(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ns(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Gu=[.64,.33,.3,.6,.15,.06],Wu=[.2126,.7152,.0722],Xu=[.3127,.329],ju=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yu=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[xs]:{primaries:Gu,whitePoint:Xu,transfer:La,toXYZ:ju,fromXYZ:Yu,luminanceCoefficients:Wu,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:Gu,whitePoint:Xu,transfer:ve,toXYZ:ju,fromXYZ:Yu,luminanceCoefficients:Wu,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}});let Lr;class Hm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Lr===void 0&&(Lr=Xs("canvas")),Lr.width=t.width,Lr.height=t.height;const i=Lr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Lr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ei(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ei(e[i]/255)*255):e[i]=Ei(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Gm=0;class Cd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=to(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ja(r[o].image)):s.push(ja(r[o]))}else s=ja(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function ja(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Hm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wm=0;class qe extends bs{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,i=mr,r=mr,s=Zn,o=gr,a=Fn,c=Ai,l=qe.DEFAULT_ANISOTROPY,u=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=to(),this.name="",this.source=new Cd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hc:t.x=t.x-Math.floor(t.x);break;case mr:t.x=t.x<0?0:1;break;case Gc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hc:t.y=t.y-Math.floor(t.y);break;case mr:t.y=t.y<0?0:1;break;case Gc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=gd;qe.DEFAULT_ANISOTROPY=1;class Le{constructor(t=0,e=0,i=0,r=1){Le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],g=c[9],y=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(l+1)/2,x=(p+1)/2,A=(d+1)/2,I=(u+f)/4,R=(h+y)/4,N=(g+m)/4;return E>x&&E>A?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=I/i,s=R/i):x>A?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=I/r,s=N/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=R/s,r=N/s),this.set(i,r,s,e),this}let T=Math.sqrt((m-g)*(m-g)+(h-y)*(h-y)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-y)/T,this.z=(f-u)/T,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xm extends bs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new qe(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Cd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tr extends Xm{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Dd extends qe{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class jm extends qe{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eo{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],y=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=y;return}if(h!==y||c!==f||l!==p||u!==g){let m=1-a;const d=c*f+l*p+u*g+h*y,T=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){const A=Math.sqrt(E),I=Math.atan2(A,d*T);m=Math.sin(m*I)/A,a=Math.sin(a*I)/A}const x=a*T;if(c=c*m+f*x,l=l*m+p*x,u=u*m+g*x,h=h*m+y*x,m===1-a){const A=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=A,l*=A,u*=A,h*=A}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+u*h+c*p-l*f,t[e+1]=c*g+u*f+l*h-a*p,t[e+2]=l*g+u*p+a*f-c*h,t[e+3]=u*g-a*h-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),f=c(i/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"YZX":this._x=f*u*h+l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h-f*p*g;break;case"XZY":this._x=f*u*h-l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(tn(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,i=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($u.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($u.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*i),u=2*(a*e-s*r),h=2*(s*i-o*e);return this.x=e+c*l+o*h-a*u,this.y=i+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ya.copy(this).projectOnVector(t),this.sub(Ya)}reflect(t){return this.sub(Ya.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(tn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ya=new z,$u=new eo;class no{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Cn):Cn.fromBufferAttribute(s,o),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_o.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_o.copy(i.boundingBox)),_o.applyMatrix4(t.matrixWorld),this.union(_o)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ds),vo.subVectors(this.max,Ds),Pr.subVectors(t.a,Ds),Ur.subVectors(t.b,Ds),Fr.subVectors(t.c,Ds),Pi.subVectors(Ur,Pr),Ui.subVectors(Fr,Ur),rr.subVectors(Pr,Fr);let e=[0,-Pi.z,Pi.y,0,-Ui.z,Ui.y,0,-rr.z,rr.y,Pi.z,0,-Pi.x,Ui.z,0,-Ui.x,rr.z,0,-rr.x,-Pi.y,Pi.x,0,-Ui.y,Ui.x,0,-rr.y,rr.x,0];return!$a(e,Pr,Ur,Fr,vo)||(e=[1,0,0,0,1,0,0,0,1],!$a(e,Pr,Ur,Fr,vo))?!1:(yo.crossVectors(Pi,Ui),e=[yo.x,yo.y,yo.z],$a(e,Pr,Ur,Fr,vo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const li=[new z,new z,new z,new z,new z,new z,new z,new z],Cn=new z,_o=new no,Pr=new z,Ur=new z,Fr=new z,Pi=new z,Ui=new z,rr=new z,Ds=new z,vo=new z,yo=new z,sr=new z;function $a(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){sr.fromArray(n,s);const a=r.x*Math.abs(sr.x)+r.y*Math.abs(sr.y)+r.z*Math.abs(sr.z),c=t.dot(sr),l=e.dot(sr),u=i.dot(sr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Ym=new no,Ls=new z,qa=new z;class Pa{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Ym.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ls.subVectors(t,this.center);const e=Ls.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Ls,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ls.copy(t.center).add(qa)),this.expandByPoint(Ls.copy(t.center).sub(qa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new z,Ka=new z,So=new z,Fi=new z,Za=new z,xo=new z,Ja=new z;class Xl{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ui.copy(this.origin).addScaledVector(this.direction,e),ui.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Ka.copy(t).add(e).multiplyScalar(.5),So.copy(e).sub(t).normalize(),Fi.copy(this.origin).sub(Ka);const s=t.distanceTo(e)*.5,o=-this.direction.dot(So),a=Fi.dot(this.direction),c=-Fi.dot(So),l=Fi.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*c-a,f=o*a-c,g=s*u,h>=0)if(f>=-g)if(f<=g){const y=1/u;h*=y,f*=y,p=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ka).addScaledVector(So,f),p}intersectSphere(t,e){ui.subVectors(t.center,this.origin);const i=ui.dot(this.direction),r=ui.dot(ui)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,r=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,r=(t.min.x-f.x)*l),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,ui)!==null}intersectTriangle(t,e,i,r,s){Za.subVectors(e,t),xo.subVectors(i,t),Ja.crossVectors(Za,xo);let o=this.direction.dot(Ja),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fi.subVectors(this.origin,t);const c=a*this.direction.dot(xo.crossVectors(Fi,xo));if(c<0)return null;const l=a*this.direction.dot(Za.cross(Fi));if(l<0||c+l>o)return null;const u=-a*Fi.dot(Ja);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Re{constructor(t,e,i,r,s,o,a,c,l,u,h,f,p,g,y,m){Re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l,u,h,f,p,g,y,m)}set(t,e,i,r,s,o,a,c,l,u,h,f,p,g,y,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Re().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Nr.setFromMatrixColumn(t,0).length(),s=1/Nr.setFromMatrixColumn(t,1).length(),o=1/Nr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*u,p=o*h,g=a*u,y=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=p+g*l,e[5]=f-y*l,e[9]=-a*c,e[2]=y-f*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*u,p=c*h,g=l*u,y=l*h;e[0]=f+y*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=y+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*u,p=c*h,g=l*u,y=l*h;e[0]=f-y*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=y-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*u,p=o*h,g=a*u,y=a*h;e[0]=c*u,e[4]=g*l-p,e[8]=f*l+y,e[1]=c*h,e[5]=y*l+f,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,p=o*l,g=a*c,y=a*l;e[0]=c*u,e[4]=y-f*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*h+g,e[10]=f-y*h}else if(t.order==="XZY"){const f=o*c,p=o*l,g=a*c,y=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+y,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=y*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($m,t,qm)}lookAt(t,e,i){const r=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),Ni.crossVectors(i,un),Ni.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Ni.crossVectors(i,un)),Ni.normalize(),bo.crossVectors(un,Ni),r[0]=Ni.x,r[4]=bo.x,r[8]=un.x,r[1]=Ni.y,r[5]=bo.y,r[9]=un.y,r[2]=Ni.z,r[6]=bo.z,r[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],y=i[6],m=i[10],d=i[14],T=i[3],E=i[7],x=i[11],A=i[15],I=r[0],R=r[4],N=r[8],b=r[12],S=r[1],C=r[5],X=r[9],H=r[13],J=r[2],Q=r[6],$=r[10],tt=r[14],G=r[3],at=r[7],ft=r[11],xt=r[15];return s[0]=o*I+a*S+c*J+l*G,s[4]=o*R+a*C+c*Q+l*at,s[8]=o*N+a*X+c*$+l*ft,s[12]=o*b+a*H+c*tt+l*xt,s[1]=u*I+h*S+f*J+p*G,s[5]=u*R+h*C+f*Q+p*at,s[9]=u*N+h*X+f*$+p*ft,s[13]=u*b+h*H+f*tt+p*xt,s[2]=g*I+y*S+m*J+d*G,s[6]=g*R+y*C+m*Q+d*at,s[10]=g*N+y*X+m*$+d*ft,s[14]=g*b+y*H+m*tt+d*xt,s[3]=T*I+E*S+x*J+A*G,s[7]=T*R+E*C+x*Q+A*at,s[11]=T*N+E*X+x*$+A*ft,s[15]=T*b+E*H+x*tt+A*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],y=t[7],m=t[11],d=t[15];return g*(+s*c*h-r*l*h-s*a*f+i*l*f+r*a*p-i*c*p)+y*(+e*c*p-e*l*f+s*o*f-r*o*p+r*l*u-s*c*u)+m*(+e*l*h-e*a*p-s*o*h+i*o*p+s*a*u-i*l*u)+d*(-r*a*u-e*c*h+e*a*f+r*o*h-i*o*f+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],y=t[13],m=t[14],d=t[15],T=h*m*l-y*f*l+y*c*p-a*m*p-h*c*d+a*f*d,E=g*f*l-u*m*l-g*c*p+o*m*p+u*c*d-o*f*d,x=u*y*l-g*h*l+g*a*p-o*y*p-u*a*d+o*h*d,A=g*h*c-u*y*c-g*a*f+o*y*f+u*a*m-o*h*m,I=e*T+i*E+r*x+s*A;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/I;return t[0]=T*R,t[1]=(y*f*s-h*m*s-y*r*p+i*m*p+h*r*d-i*f*d)*R,t[2]=(a*m*s-y*c*s+y*r*l-i*m*l-a*r*d+i*c*d)*R,t[3]=(h*c*s-a*f*s-h*r*l+i*f*l+a*r*p-i*c*p)*R,t[4]=E*R,t[5]=(u*m*s-g*f*s+g*r*p-e*m*p-u*r*d+e*f*d)*R,t[6]=(g*c*s-o*m*s-g*r*l+e*m*l+o*r*d-e*c*d)*R,t[7]=(o*f*s-u*c*s+u*r*l-e*f*l-o*r*p+e*c*p)*R,t[8]=x*R,t[9]=(g*h*s-u*y*s-g*i*p+e*y*p+u*i*d-e*h*d)*R,t[10]=(o*y*s-g*a*s+g*i*l-e*y*l-o*i*d+e*a*d)*R,t[11]=(u*a*s-o*h*s-u*i*l+e*h*l+o*i*p-e*a*p)*R,t[12]=A*R,t[13]=(u*y*r-g*h*r+g*i*f-e*y*f-u*i*m+e*h*m)*R,t[14]=(g*a*r-o*y*r-g*i*c+e*y*c+o*i*m-e*a*m)*R,t[15]=(o*h*r-u*a*r+u*i*c-e*h*c-o*i*f+e*a*f)*R,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,h=a+a,f=s*l,p=s*u,g=s*h,y=o*u,m=o*h,d=a*h,T=c*l,E=c*u,x=c*h,A=i.x,I=i.y,R=i.z;return r[0]=(1-(y+d))*A,r[1]=(p+x)*A,r[2]=(g-E)*A,r[3]=0,r[4]=(p-x)*I,r[5]=(1-(f+d))*I,r[6]=(m+T)*I,r[7]=0,r[8]=(g+E)*R,r[9]=(m-T)*R,r[10]=(1-(f+y))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Nr.set(r[0],r[1],r[2]).length();const o=Nr.set(r[4],r[5],r[6]).length(),a=Nr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Dn.copy(this);const l=1/s,u=1/o,h=1/a;return Dn.elements[0]*=l,Dn.elements[1]*=l,Dn.elements[2]*=l,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=h,Dn.elements[9]*=h,Dn.elements[10]*=h,e.setFromRotationMatrix(Dn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=Mi){const c=this.elements,l=2*s/(e-t),u=2*s/(i-r),h=(e+t)/(e-t),f=(i+r)/(i-r);let p,g;if(a===Mi)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ea)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=Mi){const c=this.elements,l=1/(e-t),u=1/(i-r),h=1/(o-s),f=(e+t)*l,p=(i+r)*u;let g,y;if(a===Mi)g=(o+s)*h,y=-2*h;else if(a===ea)g=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Nr=new z,Dn=new Re,$m=new z(0,0,0),qm=new z(1,1,1),Ni=new z,bo=new z,un=new z,qu=new Re,Ku=new eo;class ni{constructor(t=0,e=0,i=0,r=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(tn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return qu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ku.setFromEuler(this),this.setFromQuaternion(Ku,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class jl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Km=0;const Zu=new z,Or=new eo,hi=new Re,Mo=new z,Ps=new z,Zm=new z,Jm=new eo,Ju=new z(1,0,0),Qu=new z(0,1,0),th=new z(0,0,1),eh={type:"added"},Qm={type:"removed"},Br={type:"childadded",child:null},Qa={type:"childremoved",child:null};class Ve extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=to(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DEFAULT_UP.clone();const t=new z,e=new ni,i=new eo,r=new z(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Re},normalMatrix:{value:new Ht}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=Ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Or.setFromAxisAngle(t,e),this.quaternion.multiply(Or),this}rotateOnWorldAxis(t,e){return Or.setFromAxisAngle(t,e),this.quaternion.premultiply(Or),this}rotateX(t){return this.rotateOnAxis(Ju,t)}rotateY(t){return this.rotateOnAxis(Qu,t)}rotateZ(t){return this.rotateOnAxis(th,t)}translateOnAxis(t,e){return Zu.copy(t).applyQuaternion(this.quaternion),this.position.add(Zu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ju,t)}translateY(t){return this.translateOnAxis(Qu,t)}translateZ(t){return this.translateOnAxis(th,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Mo.copy(t):Mo.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Ps,Mo,this.up):hi.lookAt(Mo,Ps,this.up),this.quaternion.setFromRotationMatrix(hi),r&&(hi.extractRotation(r.matrixWorld),Or.setFromRotationMatrix(hi),this.quaternion.premultiply(Or.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(eh),Br.child=t,this.dispatchEvent(Br),Br.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qm),Qa.child=t,this.dispatchEvent(Qa),Qa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(eh),Br.child=t,this.dispatchEvent(Br),Br.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,t,Zm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,Jm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(t.shapes,h)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Ve.DEFAULT_UP=new z(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new z,di=new z,tc=new z,fi=new z,zr=new z,Vr=new z,nh=new z,ec=new z,nc=new z,ic=new z,rc=new Le,sc=new Le,oc=new Le;class Un{constructor(t=new z,e=new z,i=new z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Ln.subVectors(t,e),r.cross(Ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Ln.subVectors(r,e),di.subVectors(i,e),tc.subVectors(t,e);const o=Ln.dot(Ln),a=Ln.dot(di),c=Ln.dot(tc),l=di.dot(di),u=di.dot(tc),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-p-g,g,p)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(t,e,i,r,s,o,a,c){return this.getBarycoord(t,e,i,r,fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,fi.x),c.addScaledVector(o,fi.y),c.addScaledVector(a,fi.z),c)}static getInterpolatedAttribute(t,e,i,r,s,o){return rc.setScalar(0),sc.setScalar(0),oc.setScalar(0),rc.fromBufferAttribute(t,e),sc.fromBufferAttribute(t,i),oc.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(rc,s.x),o.addScaledVector(sc,s.y),o.addScaledVector(oc,s.z),o}static isFrontFacing(t,e,i,r){return Ln.subVectors(i,e),di.subVectors(t,e),Ln.cross(di).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Ln.cross(di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Un.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;zr.subVectors(r,i),Vr.subVectors(s,i),ec.subVectors(t,i);const c=zr.dot(ec),l=Vr.dot(ec);if(c<=0&&l<=0)return e.copy(i);nc.subVectors(t,r);const u=zr.dot(nc),h=Vr.dot(nc);if(u>=0&&h<=u)return e.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(zr,o);ic.subVectors(t,s);const p=zr.dot(ic),g=Vr.dot(ic);if(g>=0&&p<=g)return e.copy(s);const y=p*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(Vr,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return nh.subVectors(s,r),a=(h-u)/(h-u+(p-g)),e.copy(r).addScaledVector(nh,a);const d=1/(m+y+f);return o=y*d,a=f*d,e.copy(i).addScaledVector(zr,o).addScaledVector(Vr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},Eo={h:0,s:0,l:0};function ac(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class re{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=bn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,ie.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=ie.workingColorSpace){if(t=Om(t,1),e=tn(e,0,1),i=tn(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=ac(o,s,t+1/3),this.g=ac(o,s,t),this.b=ac(o,s,t-1/3)}return ie.toWorkingColorSpace(this,r),this}setStyle(t,e=bn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=bn){const i=Ld[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ei(t.r),this.g=Ei(t.g),this.b=Ei(t.b),this}copyLinearToSRGB(t){return this.r=ns(t.r),this.g=ns(t.g),this.b=ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=bn){return ie.fromWorkingColorSpace(Ge.copy(this),t),Math.round(tn(Ge.r*255,0,255))*65536+Math.round(tn(Ge.g*255,0,255))*256+Math.round(tn(Ge.b*255,0,255))}getHexString(t=bn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Ge.copy(this),e);const i=Ge.r,r=Ge.g,s=Ge.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=bn){ie.fromWorkingColorSpace(Ge.copy(this),t);const e=Ge.r,i=Ge.g,r=Ge.b;return t!==bn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Oi),this.setHSL(Oi.h+t,Oi.s+e,Oi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Oi),t.getHSL(Eo);const i=Wa(Oi.h,Eo.h,e),r=Wa(Oi.s,Eo.s,e),s=Wa(Oi.l,Eo.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ge=new re;re.NAMES=Ld;let tg=0;class Ms extends bs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=to(),this.name="",this.blending=ts,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dc,this.blendDst=Lc,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(i.blending=this.blending),this.side!==Xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Dc&&(i.blendSrc=this.blendSrc),this.blendDst!==Lc&&(i.blendDst=this.blendDst),this.blendEquation!==fr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Dr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Dr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class io extends Ms{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=Bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pe=new z,wo=new ce;class ti{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Vu,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)wo.fromBufferAttribute(this,e),wo.applyMatrix3(t),this.setXY(e,wo.x,wo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Cs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ze(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),i=Ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),i=Ze(i,this.array),r=Ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),i=Ze(i,this.array),r=Ze(r,this.array),s=Ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vu&&(t.usage=this.usage),t}}class Pd extends ti{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ud extends ti{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class On extends ti{constructor(t,e,i){super(new Float32Array(t),e,i)}}let eg=0;const Sn=new Re,cc=new Ve,kr=new z,hn=new no,Us=new no,ze=new z;class oi extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=to(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Id(t)?Ud:Pd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ht().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Sn.makeRotationFromQuaternion(t),this.applyMatrix4(Sn),this}rotateX(t){return Sn.makeRotationX(t),this.applyMatrix4(Sn),this}rotateY(t){return Sn.makeRotationY(t),this.applyMatrix4(Sn),this}rotateZ(t){return Sn.makeRotationZ(t),this.applyMatrix4(Sn),this}translate(t,e,i){return Sn.makeTranslation(t,e,i),this.applyMatrix4(Sn),this}scale(t,e,i){return Sn.makeScale(t,e,i),this.applyMatrix4(Sn),this}lookAt(t){return cc.lookAt(t),cc.updateMatrix(),this.applyMatrix4(cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new On(i,3))}else{for(let i=0,r=e.count;i<r;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new no);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Us.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(hn.min,Us.min),hn.expandByPoint(ze),ze.addVectors(hn.max,Us.max),hn.expandByPoint(ze)):(hn.expandByPoint(Us.min),hn.expandByPoint(Us.max))}hn.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)ze.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(ze));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ze.fromBufferAttribute(a,l),c&&(kr.fromBufferAttribute(t,l),ze.add(kr)),r=Math.max(r,i.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ti(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let N=0;N<i.count;N++)a[N]=new z,c[N]=new z;const l=new z,u=new z,h=new z,f=new ce,p=new ce,g=new ce,y=new z,m=new z;function d(N,b,S){l.fromBufferAttribute(i,N),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,S),f.fromBufferAttribute(s,N),p.fromBufferAttribute(s,b),g.fromBufferAttribute(s,S),u.sub(l),h.sub(l),p.sub(f),g.sub(f);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(C),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(C),a[N].add(y),a[b].add(y),a[S].add(y),c[N].add(m),c[b].add(m),c[S].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let N=0,b=T.length;N<b;++N){const S=T[N],C=S.start,X=S.count;for(let H=C,J=C+X;H<J;H+=3)d(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const E=new z,x=new z,A=new z,I=new z;function R(N){A.fromBufferAttribute(r,N),I.copy(A);const b=a[N];E.copy(b),E.sub(A.multiplyScalar(A.dot(b))).normalize(),x.crossVectors(I,b);const C=x.dot(c[N])<0?-1:1;o.setXYZW(N,E.x,E.y,E.z,C)}for(let N=0,b=T.length;N<b;++N){const S=T[N],C=S.start,X=S.count;for(let H=C,J=C+X;H<J;H+=3)R(t.getX(H+0)),R(t.getX(H+1)),R(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ti(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new z,s=new z,o=new z,a=new z,c=new z,l=new z,u=new z,h=new z;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),y=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let p=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?p=c[y]*a.data.stride+a.offset:p=c[y]*u;for(let d=0;d<u;d++)f[g++]=l[p++]}return new ti(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new oi,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,i);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],p=t(f,i);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const p=l[h];u.push(p.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ih=new Re,or=new Xl,To=new Pa,rh=new z,Ao=new z,Ro=new z,Io=new z,lc=new z,Co=new z,sh=new z,Do=new z;class mn extends Ve{constructor(t=new oi,e=new io){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Co.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(lc.fromBufferAttribute(h,t),o?Co.addScaledVector(lc,u):Co.addScaledVector(lc.sub(e),u))}e.add(Co)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),To.copy(i.boundingSphere),To.applyMatrix4(s),or.copy(t.ray).recast(t.near),!(To.containsPoint(or.origin)===!1&&(or.intersectSphere(To,rh)===null||or.origin.distanceToSquared(rh)>(t.far-t.near)**2))&&(ih.copy(s).invert(),or.copy(t.ray).applyMatrix4(ih),!(i.boundingBox!==null&&or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,or)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){const m=f[g],d=o[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=T,A=E;x<A;x+=3){const I=a.getX(x),R=a.getX(x+1),N=a.getX(x+2);r=Lo(this,d,t,i,l,u,h,I,R,N),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,d=y;m<d;m+=3){const T=a.getX(m),E=a.getX(m+1),x=a.getX(m+2);r=Lo(this,o,t,i,l,u,h,T,E,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){const m=f[g],d=o[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let x=T,A=E;x<A;x+=3){const I=x,R=x+1,N=x+2;r=Lo(this,d,t,i,l,u,h,I,R,N),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let m=g,d=y;m<d;m+=3){const T=m,E=m+1,x=m+2;r=Lo(this,o,t,i,l,u,h,T,E,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function ng(n,t,e,i,r,s,o,a){let c;if(t.side===$e?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side===Xi,a),c===null)return null;Do.copy(a),Do.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Do);return l<e.near||l>e.far?null:{distance:l,point:Do.clone(),object:n}}function Lo(n,t,e,i,r,s,o,a,c,l){n.getVertexPosition(a,Ao),n.getVertexPosition(c,Ro),n.getVertexPosition(l,Io);const u=ng(n,t,e,i,Ao,Ro,Io,sh);if(u){const h=new z;Un.getBarycoord(sh,Ao,Ro,Io,h),r&&(u.uv=Un.getInterpolatedAttribute(r,a,c,l,h,new ce)),s&&(u.uv1=Un.getInterpolatedAttribute(s,a,c,l,h,new ce)),o&&(u.normal=Un.getInterpolatedAttribute(o,a,c,l,h,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new z,materialIndex:0};Un.getNormal(Ao,Ro,Io,f.normal),u.face=f,u.barycoord=h}return u}class ro extends oi{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new On(l,3)),this.setAttribute("normal",new On(u,3)),this.setAttribute("uv",new On(h,2));function g(y,m,d,T,E,x,A,I,R,N,b){const S=x/R,C=A/N,X=x/2,H=A/2,J=I/2,Q=R+1,$=N+1;let tt=0,G=0;const at=new z;for(let ft=0;ft<$;ft++){const xt=ft*C-H;for(let Wt=0;Wt<Q;Wt++){const $t=Wt*S-X;at[y]=$t*T,at[m]=xt*E,at[d]=J,l.push(at.x,at.y,at.z),at[y]=0,at[m]=0,at[d]=I>0?1:-1,u.push(at.x,at.y,at.z),h.push(Wt/R),h.push(1-ft/N),tt+=1}}for(let ft=0;ft<N;ft++)for(let xt=0;xt<R;xt++){const Wt=f+xt+Q*ft,$t=f+xt+Q*(ft+1),j=f+(xt+1)+Q*(ft+1),w=f+(xt+1)+Q*ft;c.push(Wt,$t,w),c.push($t,j,w),G+=6}a.addGroup(p,G,b),p+=G,f+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ro(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function fs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function We(n){const t={};for(let e=0;e<n.length;e++){const i=fs(n[e]);for(const r in i)t[r]=i[r]}return t}function ig(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Fd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const rg={clone:fs,merge:We};var sg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,og=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends Ms{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sg,this.fragmentShader=og,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fs(t.uniforms),this.uniformsGroups=ig(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Nd extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=Mi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new z,oh=new ce,ah=new ce;class En extends Nd{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=gl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ga*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gl*2*Math.atan(Math.tan(Ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z)}getViewSize(t,e){return this.getViewBounds(t,oh,ah),e.subVectors(ah,oh)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ga*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Hr=-90,Gr=1;class ag extends Ve{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new En(Hr,Gr,t,e);r.layers=this.layers,this.add(r);const s=new En(Hr,Gr,t,e);s.layers=this.layers,this.add(s);const o=new En(Hr,Gr,t,e);o.layers=this.layers,this.add(o);const a=new En(Hr,Gr,t,e);a.layers=this.layers,this.add(a);const c=new En(Hr,Gr,t,e);c.layers=this.layers,this.add(c);const l=new En(Hr,Gr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ea)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Od extends qe{constructor(t,e,i,r,s,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:ls,super(t,e,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class cg extends Tr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Od(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Zn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ro(5,5,5),s=new ji({name:"CubemapFromEquirect",uniforms:fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$e,blending:Gi});s.uniforms.tEquirect.value=e;const o=new mn(r,s),a=e.minFilter;return e.minFilter===gr&&(e.minFilter=Zn),new ag(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const uc=new z,lg=new z,ug=new Ht;class hr{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=uc.subVectors(i,e).cross(lg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(uc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||ug.getNormalMatrix(t),r=this.coplanarPoint(uc).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new Pa,Po=new z;class Yl{constructor(t=new hr,e=new hr,i=new hr,r=new hr,s=new hr,o=new hr){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Mi){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],h=r[6],f=r[7],p=r[8],g=r[9],y=r[10],m=r[11],d=r[12],T=r[13],E=r[14],x=r[15];if(i[0].setComponents(c-s,f-l,m-p,x-d).normalize(),i[1].setComponents(c+s,f+l,m+p,x+d).normalize(),i[2].setComponents(c+o,f+u,m+g,x+T).normalize(),i[3].setComponents(c-o,f-u,m-g,x-T).normalize(),i[4].setComponents(c-a,f-h,m-y,x-E).normalize(),e===Mi)i[5].setComponents(c+a,f+h,m+y,x+E).normalize();else if(e===ea)i[5].setComponents(a,h,y,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(t){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(t.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Po.x=r.normal.x>0?t.max.x:t.min.x,Po.y=r.normal.y>0?t.max.y:t.min.y,Po.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Po)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bd(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function hg(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],y=h[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,h[f]=y)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const y=h[p];n.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class Ua extends oi{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=t/a,f=e/c,p=[],g=[],y=[],m=[];for(let d=0;d<u;d++){const T=d*f-o;for(let E=0;E<l;E++){const x=E*h-s;g.push(x,-T,0),y.push(0,0,1),m.push(E/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let T=0;T<a;T++){const E=T+l*d,x=T+l*(d+1),A=T+1+l*(d+1),I=T+1+l*d;p.push(E,x,I),p.push(x,A,I)}this.setIndex(p),this.setAttribute("position",new On(g,3)),this.setAttribute("normal",new On(y,3)),this.setAttribute("uv",new On(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ua(t.width,t.height,t.widthSegments,t.heightSegments)}}var dg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_g=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Tg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ug=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Fg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ng=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Og=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$g=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,t_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,e_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,n_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,r_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,s_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,o_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,a_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,u_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,h_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,d_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,f_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,p_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,__=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,y_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,x_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,E_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,w_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,T_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,R_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,C_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,D_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,U_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,F_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,N_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,B_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,V_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,k_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,G_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,W_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,X_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Y_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,q_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,K_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Z_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Q_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ev=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ov=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_v=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ev=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Av=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Nv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ov=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jt={alphahash_fragment:dg,alphahash_pars_fragment:fg,alphamap_fragment:pg,alphamap_pars_fragment:mg,alphatest_fragment:gg,alphatest_pars_fragment:_g,aomap_fragment:vg,aomap_pars_fragment:yg,batching_pars_vertex:Sg,batching_vertex:xg,begin_vertex:bg,beginnormal_vertex:Mg,bsdfs:Eg,iridescence_fragment:wg,bumpmap_pars_fragment:Tg,clipping_planes_fragment:Ag,clipping_planes_pars_fragment:Rg,clipping_planes_pars_vertex:Ig,clipping_planes_vertex:Cg,color_fragment:Dg,color_pars_fragment:Lg,color_pars_vertex:Pg,color_vertex:Ug,common:Fg,cube_uv_reflection_fragment:Ng,defaultnormal_vertex:Og,displacementmap_pars_vertex:Bg,displacementmap_vertex:zg,emissivemap_fragment:Vg,emissivemap_pars_fragment:kg,colorspace_fragment:Hg,colorspace_pars_fragment:Gg,envmap_fragment:Wg,envmap_common_pars_fragment:Xg,envmap_pars_fragment:jg,envmap_pars_vertex:Yg,envmap_physical_pars_fragment:r_,envmap_vertex:$g,fog_vertex:qg,fog_pars_vertex:Kg,fog_fragment:Zg,fog_pars_fragment:Jg,gradientmap_pars_fragment:Qg,lightmap_pars_fragment:t_,lights_lambert_fragment:e_,lights_lambert_pars_fragment:n_,lights_pars_begin:i_,lights_toon_fragment:s_,lights_toon_pars_fragment:o_,lights_phong_fragment:a_,lights_phong_pars_fragment:c_,lights_physical_fragment:l_,lights_physical_pars_fragment:u_,lights_fragment_begin:h_,lights_fragment_maps:d_,lights_fragment_end:f_,logdepthbuf_fragment:p_,logdepthbuf_pars_fragment:m_,logdepthbuf_pars_vertex:g_,logdepthbuf_vertex:__,map_fragment:v_,map_pars_fragment:y_,map_particle_fragment:S_,map_particle_pars_fragment:x_,metalnessmap_fragment:b_,metalnessmap_pars_fragment:M_,morphinstance_vertex:E_,morphcolor_vertex:w_,morphnormal_vertex:T_,morphtarget_pars_vertex:A_,morphtarget_vertex:R_,normal_fragment_begin:I_,normal_fragment_maps:C_,normal_pars_fragment:D_,normal_pars_vertex:L_,normal_vertex:P_,normalmap_pars_fragment:U_,clearcoat_normal_fragment_begin:F_,clearcoat_normal_fragment_maps:N_,clearcoat_pars_fragment:O_,iridescence_pars_fragment:B_,opaque_fragment:z_,packing:V_,premultiplied_alpha_fragment:k_,project_vertex:H_,dithering_fragment:G_,dithering_pars_fragment:W_,roughnessmap_fragment:X_,roughnessmap_pars_fragment:j_,shadowmap_pars_fragment:Y_,shadowmap_pars_vertex:$_,shadowmap_vertex:q_,shadowmask_pars_fragment:K_,skinbase_vertex:Z_,skinning_pars_vertex:J_,skinning_vertex:Q_,skinnormal_vertex:tv,specularmap_fragment:ev,specularmap_pars_fragment:nv,tonemapping_fragment:iv,tonemapping_pars_fragment:rv,transmission_fragment:sv,transmission_pars_fragment:ov,uv_pars_fragment:av,uv_pars_vertex:cv,uv_vertex:lv,worldpos_vertex:uv,background_vert:hv,background_frag:dv,backgroundCube_vert:fv,backgroundCube_frag:pv,cube_vert:mv,cube_frag:gv,depth_vert:_v,depth_frag:vv,distanceRGBA_vert:yv,distanceRGBA_frag:Sv,equirect_vert:xv,equirect_frag:bv,linedashed_vert:Mv,linedashed_frag:Ev,meshbasic_vert:wv,meshbasic_frag:Tv,meshlambert_vert:Av,meshlambert_frag:Rv,meshmatcap_vert:Iv,meshmatcap_frag:Cv,meshnormal_vert:Dv,meshnormal_frag:Lv,meshphong_vert:Pv,meshphong_frag:Uv,meshphysical_vert:Fv,meshphysical_frag:Nv,meshtoon_vert:Ov,meshtoon_frag:Bv,points_vert:zv,points_frag:Vv,shadow_vert:kv,shadow_frag:Hv,sprite_vert:Gv,sprite_frag:Wv},ot={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Wn={basic:{uniforms:We([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:We([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new re(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:We([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:We([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:We([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new re(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:We([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:We([ot.points,ot.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:We([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:We([ot.common,ot.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:We([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:We([ot.sprite,ot.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:We([ot.common,ot.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:We([ot.lights,ot.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Wn.physical={uniforms:We([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Uo={r:0,b:0,g:0},cr=new ni,Xv=new Re;function jv(n,t,e,i,r,s,o){const a=new re(0);let c=s===!0?0:1,l,u,h=null,f=0,p=null;function g(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?e:t).get(E)),E}function y(T){let E=!1;const x=g(T);x===null?d(a,c):x&&x.isColor&&(d(x,1),E=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,E){const x=g(E);x&&(x.isCubeTexture||x.mapping===Da)?(u===void 0&&(u=new mn(new ro(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:fs(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,I,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),cr.copy(E.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Xv.makeRotationFromEuler(cr)),u.material.toneMapped=ie.getTransfer(x.colorSpace)!==ve,(h!==x||f!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new mn(new Ua(2,2),new ji({name:"BackgroundMaterial",uniforms:fs(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ie.getTransfer(x.colorSpace)!==ve,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,h=x,f=x.version,p=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function d(T,E){T.getRGB(Uo,Fd(n)),i.buffers.color.setClear(Uo.r,Uo.g,Uo.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(T,E=1){a.set(T),c=E,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,d(a,c)},render:y,addToRenderList:m}}function Yv(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(S,C,X,H,J){let Q=!1;const $=h(H,X,C);s!==$&&(s=$,l(s.object)),Q=p(S,H,X,J),Q&&g(S,H,X,J),J!==null&&t.update(J,n.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,x(S,C,X,H),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,C,X){const H=X.wireframe===!0;let J=i[S.id];J===void 0&&(J={},i[S.id]=J);let Q=J[C.id];Q===void 0&&(Q={},J[C.id]=Q);let $=Q[H];return $===void 0&&($=f(c()),Q[H]=$),$}function f(S){const C=[],X=[],H=[];for(let J=0;J<e;J++)C[J]=0,X[J]=0,H[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:X,attributeDivisors:H,object:S,attributes:{},index:null}}function p(S,C,X,H){const J=s.attributes,Q=C.attributes;let $=0;const tt=X.getAttributes();for(const G in tt)if(tt[G].location>=0){const ft=J[G];let xt=Q[G];if(xt===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(xt=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(xt=S.instanceColor)),ft===void 0||ft.attribute!==xt||xt&&ft.data!==xt.data)return!0;$++}return s.attributesNum!==$||s.index!==H}function g(S,C,X,H){const J={},Q=C.attributes;let $=0;const tt=X.getAttributes();for(const G in tt)if(tt[G].location>=0){let ft=Q[G];ft===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(ft=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(ft=S.instanceColor));const xt={};xt.attribute=ft,ft&&ft.data&&(xt.data=ft.data),J[G]=xt,$++}s.attributes=J,s.attributesNum=$,s.index=H}function y(){const S=s.newAttributes;for(let C=0,X=S.length;C<X;C++)S[C]=0}function m(S){d(S,0)}function d(S,C){const X=s.newAttributes,H=s.enabledAttributes,J=s.attributeDivisors;X[S]=1,H[S]===0&&(n.enableVertexAttribArray(S),H[S]=1),J[S]!==C&&(n.vertexAttribDivisor(S,C),J[S]=C)}function T(){const S=s.newAttributes,C=s.enabledAttributes;for(let X=0,H=C.length;X<H;X++)C[X]!==S[X]&&(n.disableVertexAttribArray(X),C[X]=0)}function E(S,C,X,H,J,Q,$){$===!0?n.vertexAttribIPointer(S,C,X,J,Q):n.vertexAttribPointer(S,C,X,H,J,Q)}function x(S,C,X,H){y();const J=H.attributes,Q=X.getAttributes(),$=C.defaultAttributeValues;for(const tt in Q){const G=Q[tt];if(G.location>=0){let at=J[tt];if(at===void 0&&(tt==="instanceMatrix"&&S.instanceMatrix&&(at=S.instanceMatrix),tt==="instanceColor"&&S.instanceColor&&(at=S.instanceColor)),at!==void 0){const ft=at.normalized,xt=at.itemSize,Wt=t.get(at);if(Wt===void 0)continue;const $t=Wt.buffer,j=Wt.type,w=Wt.bytesPerElement,O=j===n.INT||j===n.UNSIGNED_INT||at.gpuType===zl;if(at.isInterleavedBufferAttribute){const Y=at.data,rt=Y.stride,st=at.offset;if(Y.isInstancedInterleavedBuffer){for(let bt=0;bt<G.locationSize;bt++)d(G.location+bt,Y.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let bt=0;bt<G.locationSize;bt++)m(G.location+bt);n.bindBuffer(n.ARRAY_BUFFER,$t);for(let bt=0;bt<G.locationSize;bt++)E(G.location+bt,xt/G.locationSize,j,ft,rt*w,(st+xt/G.locationSize*bt)*w,O)}else{if(at.isInstancedBufferAttribute){for(let Y=0;Y<G.locationSize;Y++)d(G.location+Y,at.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Y=0;Y<G.locationSize;Y++)m(G.location+Y);n.bindBuffer(n.ARRAY_BUFFER,$t);for(let Y=0;Y<G.locationSize;Y++)E(G.location+Y,xt/G.locationSize,j,ft,xt*w,xt/G.locationSize*Y*w,O)}}else if($!==void 0){const ft=$[tt];if(ft!==void 0)switch(ft.length){case 2:n.vertexAttrib2fv(G.location,ft);break;case 3:n.vertexAttrib3fv(G.location,ft);break;case 4:n.vertexAttrib4fv(G.location,ft);break;default:n.vertexAttrib1fv(G.location,ft)}}}}T()}function A(){N();for(const S in i){const C=i[S];for(const X in C){const H=C[X];for(const J in H)u(H[J].object),delete H[J];delete C[X]}delete i[S]}}function I(S){if(i[S.id]===void 0)return;const C=i[S.id];for(const X in C){const H=C[X];for(const J in H)u(H[J].object),delete H[J];delete C[X]}delete i[S.id]}function R(S){for(const C in i){const X=i[C];if(X[S.id]===void 0)continue;const H=X[S.id];for(const J in H)u(H[J].object),delete H[J];delete X[S.id]}}function N(){b(),o=!0,s!==r&&(s=r,l(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:I,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:T}}function $v(n,t,e){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),e.update(u,i,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,i,1)}function c(l,u,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,h);let g=0;for(let y=0;y<h;y++)g+=u[y]*f[y];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function qv(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Fn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const N=R===Qs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Ai&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==bi&&!N)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:A,maxSamples:I}}function Kv(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new hr,a=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const T=s?0:i,E=T*4;let x=d.clippingState||null;c.value=x,x=u(g,f,E,p);for(let A=0;A!==E;++A)x[A]=e[A];d.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,p,g){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=c.value,g!==!0||m===null){const d=p+y*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,x=p;E!==y;++E,x+=4)o.copy(h[E]).applyMatrix4(T,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function Zv(n){let t=new WeakMap;function e(o,a){return a===Vc?o.mapping=ls:a===kc&&(o.mapping=us),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Vc||a===kc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new cg(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class zd extends Nd{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Zr=4,ch=[.125,.215,.35,.446,.526,.582],pr=20,hc=new zd,lh=new re;let dc=null,fc=0,pc=0,mc=!1;const dr=(1+Math.sqrt(5))/2,Wr=1/dr,uh=[new z(-dr,Wr,0),new z(dr,Wr,0),new z(-Wr,0,dr),new z(Wr,0,dr),new z(0,dr,-Wr),new z(0,dr,Wr),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class hh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){dc=this._renderer.getRenderTarget(),fc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(dc,fc,pc),this._renderer.xr.enabled=mc,t.scissorTest=!1,Fo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ls||t.mapping===us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dc=this._renderer.getRenderTarget(),fc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:Qs,format:Fn,colorSpace:xs,depthBuffer:!1},r=dh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dh(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jv(s)),this._blurMaterial=Qv(s,t,e)}return r}_compileMaterial(t){const e=new mn(this._lodPlanes[0],t);this._renderer.compile(e,hc)}_sceneToCubeUV(t,e,i,r){const a=new En(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(lh),u.toneMapping=Wi,u.autoClear=!1;const p=new io({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),g=new mn(new ro,p);let y=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,y=!0):(p.color.copy(lh),y=!0);for(let d=0;d<6;d++){const T=d%3;T===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):T===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));const E=this._cubeSize;Fo(r,T*E,d>2?E:0,E,E),u.setRenderTarget(r),y&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===ls||t.mapping===us;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new mn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Fo(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,hc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=uh[(r-s-1)%uh.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new mn(this._lodPlanes[r],l),f=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*pr-1),y=s/g,m=isFinite(s)?1+Math.floor(u*y):pr;m>pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${pr}`);const d=[];let T=0;for(let R=0;R<pr;++R){const N=R/y,b=Math.exp(-N*N/2);d.push(b),R===0?T+=b:R<m&&(T+=2*b)}for(let R=0;R<d.length;R++)d[R]=d[R]/T;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-i;const x=this._sizeLods[r],A=3*x*(r>E-Zr?r-E+Zr:0),I=4*(this._cubeSize-x);Fo(e,A,I,3*x,2*x),c.setRenderTarget(e),c.render(h,hc)}}function Jv(n){const t=[],e=[],i=[];let r=n;const s=n-Zr+1+ch.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>n-Zr?c=ch[o-n+Zr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,y=3,m=2,d=1,T=new Float32Array(y*g*p),E=new Float32Array(m*g*p),x=new Float32Array(d*g*p);for(let I=0;I<p;I++){const R=I%3*2/3-1,N=I>2?0:-1,b=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];T.set(b,y*g*I),E.set(f,m*g*I);const S=[I,I,I,I,I,I];x.set(S,d*g*I)}const A=new oi;A.setAttribute("position",new ti(T,y)),A.setAttribute("uv",new ti(E,m)),A.setAttribute("faceIndex",new ti(x,d)),t.push(A),r>Zr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function dh(n,t,e){const i=new Tr(n,t,e);return i.texture.mapping=Da,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fo(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Qv(n,t,e){const i=new Float32Array(pr),r=new z(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function fh(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function ph(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function $l(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ty(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Vc||c===kc,u=c===ls||c===us;if(l||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new hh(n)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&r(p)?(e===null&&(e=new hh(n)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function ey(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Os("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ny(n,t,e,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const y=f.morphAttributes[g];for(let m=0,d=y.length;m<d;m++)t.remove(y[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(t.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const y=p[g];for(let m=0,d=y.length;m<d;m++)t.update(y[m],n.ARRAY_BUFFER)}}function l(h){const f=[],p=h.index,g=h.attributes.position;let y=0;if(p!==null){const T=p.array;y=p.version;for(let E=0,x=T.length;E<x;E+=3){const A=T[E+0],I=T[E+1],R=T[E+2];f.push(A,I,I,R,R,A)}}else if(g!==void 0){const T=g.array;y=g.version;for(let E=0,x=T.length/3-1;E<x;E+=3){const A=E+0,I=E+1,R=E+2;f.push(A,I,I,R,R,A)}}else return;const m=new(Id(f)?Ud:Pd)(f,1);m.version=y;const d=s.get(h);d&&t.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function iy(n,t,e){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,p){n.drawElements(i,p,s,f*o),e.update(p,i,1)}function l(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,f*o,g),e.update(p,i,g))}function u(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,i,1)}function h(f,p,g,y){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/o,p[d],y[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,y,0,g);let d=0;for(let T=0;T<g;T++)d+=p[T]*y[T];e.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function ry(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function sy(n,t,e){const i=new WeakMap,r=new Le;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let S=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),y===!0&&(x=2),m===!0&&(x=3);let A=a.attributes.position.count*x,I=1;A>t.maxTextureSize&&(I=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const R=new Float32Array(A*I*4*h),N=new Dd(R,A,I,h);N.type=bi,N.needsUpdate=!0;const b=x*4;for(let C=0;C<h;C++){const X=d[C],H=T[C],J=E[C],Q=A*I*4*C;for(let $=0;$<X.count;$++){const tt=$*b;g===!0&&(r.fromBufferAttribute(X,$),R[Q+tt+0]=r.x,R[Q+tt+1]=r.y,R[Q+tt+2]=r.z,R[Q+tt+3]=0),y===!0&&(r.fromBufferAttribute(H,$),R[Q+tt+4]=r.x,R[Q+tt+5]=r.y,R[Q+tt+6]=r.z,R[Q+tt+7]=0),m===!0&&(r.fromBufferAttribute(J,$),R[Q+tt+8]=r.x,R[Q+tt+9]=r.y,R[Q+tt+10]=r.z,R[Q+tt+11]=J.itemSize===4?r.w:1)}}f={count:h,texture:N,size:new ce(A,I)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const y=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",y),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function oy(n,t,e,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=t.get(c,u);if(r.get(h)!==l&&(t.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class Vd extends qe{constructor(t,e,i,r,s,o,a,c,l,u=es){if(u!==es&&u!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===es&&(i=wr),i===void 0&&u===ds&&(i=hs),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Nn,this.minFilter=c!==void 0?c:Nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const kd=new qe,mh=new Vd(1,1),Hd=new Dd,Gd=new jm,Wd=new Od,gh=[],_h=[],vh=new Float32Array(16),yh=new Float32Array(9),Sh=new Float32Array(4);function Es(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=gh[r];if(s===void 0&&(s=new Float32Array(r),gh[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Oe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Be(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Fa(n,t){let e=_h[t];e===void 0&&(e=new Int32Array(t),_h[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function ay(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function cy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2fv(this.addr,t),Be(e,t)}}function ly(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;n.uniform3fv(this.addr,t),Be(e,t)}}function uy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4fv(this.addr,t),Be(e,t)}}function hy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;Sh.set(i),n.uniformMatrix2fv(this.addr,!1,Sh),Be(e,i)}}function dy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;yh.set(i),n.uniformMatrix3fv(this.addr,!1,yh),Be(e,i)}}function fy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Oe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,i))return;vh.set(i),n.uniformMatrix4fv(this.addr,!1,vh),Be(e,i)}}function py(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function my(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2iv(this.addr,t),Be(e,t)}}function gy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3iv(this.addr,t),Be(e,t)}}function _y(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4iv(this.addr,t),Be(e,t)}}function vy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function yy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;n.uniform2uiv(this.addr,t),Be(e,t)}}function Sy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;n.uniform3uiv(this.addr,t),Be(e,t)}}function xy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;n.uniform4uiv(this.addr,t),Be(e,t)}}function by(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(mh.compareFunction=Rd,s=mh):s=kd,e.setTexture2D(t||s,r)}function My(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Gd,r)}function Ey(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Wd,r)}function wy(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Hd,r)}function Ty(n){switch(n){case 5126:return ay;case 35664:return cy;case 35665:return ly;case 35666:return uy;case 35674:return hy;case 35675:return dy;case 35676:return fy;case 5124:case 35670:return py;case 35667:case 35671:return my;case 35668:case 35672:return gy;case 35669:case 35673:return _y;case 5125:return vy;case 36294:return yy;case 36295:return Sy;case 36296:return xy;case 35678:case 36198:case 36298:case 36306:case 35682:return by;case 35679:case 36299:case 36307:return My;case 35680:case 36300:case 36308:case 36293:return Ey;case 36289:case 36303:case 36311:case 36292:return wy}}function Ay(n,t){n.uniform1fv(this.addr,t)}function Ry(n,t){const e=Es(t,this.size,2);n.uniform2fv(this.addr,e)}function Iy(n,t){const e=Es(t,this.size,3);n.uniform3fv(this.addr,e)}function Cy(n,t){const e=Es(t,this.size,4);n.uniform4fv(this.addr,e)}function Dy(n,t){const e=Es(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Ly(n,t){const e=Es(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Py(n,t){const e=Es(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Uy(n,t){n.uniform1iv(this.addr,t)}function Fy(n,t){n.uniform2iv(this.addr,t)}function Ny(n,t){n.uniform3iv(this.addr,t)}function Oy(n,t){n.uniform4iv(this.addr,t)}function By(n,t){n.uniform1uiv(this.addr,t)}function zy(n,t){n.uniform2uiv(this.addr,t)}function Vy(n,t){n.uniform3uiv(this.addr,t)}function ky(n,t){n.uniform4uiv(this.addr,t)}function Hy(n,t,e){const i=this.cache,r=t.length,s=Fa(e,r);Oe(i,s)||(n.uniform1iv(this.addr,s),Be(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||kd,s[o])}function Gy(n,t,e){const i=this.cache,r=t.length,s=Fa(e,r);Oe(i,s)||(n.uniform1iv(this.addr,s),Be(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Gd,s[o])}function Wy(n,t,e){const i=this.cache,r=t.length,s=Fa(e,r);Oe(i,s)||(n.uniform1iv(this.addr,s),Be(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Wd,s[o])}function Xy(n,t,e){const i=this.cache,r=t.length,s=Fa(e,r);Oe(i,s)||(n.uniform1iv(this.addr,s),Be(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Hd,s[o])}function jy(n){switch(n){case 5126:return Ay;case 35664:return Ry;case 35665:return Iy;case 35666:return Cy;case 35674:return Dy;case 35675:return Ly;case 35676:return Py;case 5124:case 35670:return Uy;case 35667:case 35671:return Fy;case 35668:case 35672:return Ny;case 35669:case 35673:return Oy;case 5125:return By;case 36294:return zy;case 36295:return Vy;case 36296:return ky;case 35678:case 36198:case 36298:case 36306:case 35682:return Hy;case 35679:case 36299:case 36307:return Gy;case 35680:case 36300:case 36308:case 36293:return Wy;case 36289:case 36303:case 36311:case 36292:return Xy}}class Yy{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Ty(e.type)}}class $y{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jy(e.type)}}class qy{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const gc=/(\w+)(\])?(\[|\.)?/g;function xh(n,t){n.seq.push(t),n.map[t.id]=t}function Ky(n,t,e){const i=n.name,r=i.length;for(gc.lastIndex=0;;){const s=gc.exec(i),o=gc.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){xh(e,l===void 0?new Yy(a,n,t):new $y(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new qy(a),xh(e,h)),e=h}}}class Yo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Ky(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function bh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Zy=37297;let Jy=0;function Qy(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Mh=new Ht;function t0(n){ie._getMatrix(Mh,ie.workingColorSpace,n);const t=`mat3( ${Mh.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(n)){case La:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Eh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Qy(n.getShaderSource(t),o)}else return r}function e0(n,t){const e=t0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function n0(n,t){let e;switch(t){case ym:e="Linear";break;case Sm:e="Reinhard";break;case xm:e="Cineon";break;case bm:e="ACESFilmic";break;case Em:e="AgX";break;case wm:e="Neutral";break;case Mm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const No=new z;function i0(){ie.getLuminanceCoefficients(No);const n=No.x.toFixed(4),t=No.y.toFixed(4),e=No.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bs).join(`
`)}function s0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function o0(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Bs(n){return n!==""}function wh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Th(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const a0=/^[ \t]*#include +<([\w\d./]+)>/gm;function _l(n){return n.replace(a0,l0)}const c0=new Map;function l0(n,t){let e=jt[t];if(e===void 0){const i=c0.get(t);if(i!==void 0)e=jt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return _l(e)}const u0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ah(n){return n.replace(u0,h0)}function h0(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Rh(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function d0(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===md?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Jp?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===pi&&(t="SHADOWMAP_TYPE_VSM"),t}function f0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ls:case us:t="ENVMAP_TYPE_CUBE";break;case Da:t="ENVMAP_TYPE_CUBE_UV";break}return t}function p0(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case us:t="ENVMAP_MODE_REFRACTION";break}return t}function m0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Bl:t="ENVMAP_BLENDING_MULTIPLY";break;case _m:t="ENVMAP_BLENDING_MIX";break;case vm:t="ENVMAP_BLENDING_ADD";break}return t}function g0(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function _0(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=d0(e),l=f0(e),u=p0(e),h=m0(e),f=g0(e),p=r0(e),g=s0(s),y=r.createProgram();let m,d,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Bs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Bs).join(`
`),d.length>0&&(d+=`
`)):(m=[Rh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),d=[Rh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wi?"#define TONE_MAPPING":"",e.toneMapping!==Wi?jt.tonemapping_pars_fragment:"",e.toneMapping!==Wi?n0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,e0("linearToOutputTexel",e.outputColorSpace),i0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bs).join(`
`)),o=_l(o),o=wh(o,e),o=Th(o,e),a=_l(a),a=wh(a,e),a=Th(a,e),o=Ah(o),a=Ah(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===ku?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ku?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=T+m+o,x=T+d+a,A=bh(r,r.VERTEX_SHADER,E),I=bh(r,r.FRAGMENT_SHADER,x);r.attachShader(y,A),r.attachShader(y,I),e.index0AttributeName!==void 0?r.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function R(C){if(n.debug.checkShaderErrors){const X=r.getProgramInfoLog(y).trim(),H=r.getShaderInfoLog(A).trim(),J=r.getShaderInfoLog(I).trim();let Q=!0,$=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,A,I);else{const tt=Eh(r,A,"vertex"),G=Eh(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+X+`
`+tt+`
`+G)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(H===""||J==="")&&($=!1);$&&(C.diagnostics={runnable:Q,programLog:X,vertexShader:{log:H,prefix:m},fragmentShader:{log:J,prefix:d}})}r.deleteShader(A),r.deleteShader(I),N=new Yo(r,y),b=o0(r,y)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,Zy)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jy++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=I,this}let v0=0;class y0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new S0(t),e.set(t,i)),i}}class S0{constructor(t){this.id=v0++,this.code=t,this.usedTimes=0}}function x0(n,t,e,i,r,s,o){const a=new jl,c=new y0,l=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,S,C,X,H){const J=X.fog,Q=H.geometry,$=b.isMeshStandardMaterial?X.environment:null,tt=(b.isMeshStandardMaterial?e:t).get(b.envMap||$),G=tt&&tt.mapping===Da?tt.image.height:null,at=g[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const ft=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,xt=ft!==void 0?ft.length:0;let Wt=0;Q.morphAttributes.position!==void 0&&(Wt=1),Q.morphAttributes.normal!==void 0&&(Wt=2),Q.morphAttributes.color!==void 0&&(Wt=3);let $t,j,w,O;if(at){const ge=Wn[at];$t=ge.vertexShader,j=ge.fragmentShader}else $t=b.vertexShader,j=b.fragmentShader,c.update(b),w=c.getVertexShaderID(b),O=c.getFragmentShaderID(b);const Y=n.getRenderTarget(),rt=n.state.buffers.depth.getReversed(),st=H.isInstancedMesh===!0,bt=H.isBatchedMesh===!0,qt=!!b.map,_t=!!b.matcap,Kt=!!tt,D=!!b.aoMap,vn=!!b.lightMap,Qt=!!b.bumpMap,te=!!b.normalMap,Tt=!!b.displacementMap,Ee=!!b.emissiveMap,wt=!!b.metalnessMap,M=!!b.roughnessMap,_=b.anisotropy>0,B=b.clearcoat>0,K=b.dispersion>0,et=b.iridescence>0,q=b.sheen>0,Mt=b.transmission>0,lt=_&&!!b.anisotropyMap,pt=B&&!!b.clearcoatMap,ne=B&&!!b.clearcoatNormalMap,nt=B&&!!b.clearcoatRoughnessMap,mt=et&&!!b.iridescenceMap,At=et&&!!b.iridescenceThicknessMap,It=q&&!!b.sheenColorMap,gt=q&&!!b.sheenRoughnessMap,ee=!!b.specularMap,Xt=!!b.specularColorMap,xe=!!b.specularIntensityMap,L=Mt&&!!b.transmissionMap,ct=Mt&&!!b.thicknessMap,W=!!b.gradientMap,Z=!!b.alphaMap,dt=b.alphaTest>0,ut=!!b.alphaHash,Vt=!!b.extensions;let De=Wi;b.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(De=n.toneMapping);const ke={shaderID:at,shaderType:b.type,shaderName:b.name,vertexShader:$t,fragmentShader:j,defines:b.defines,customVertexShaderID:w,customFragmentShaderID:O,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:bt,batchingColor:bt&&H._colorsTexture!==null,instancing:st,instancingColor:st&&H.instanceColor!==null,instancingMorph:st&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Y===null?n.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:xs,alphaToCoverage:!!b.alphaToCoverage,map:qt,matcap:_t,envMap:Kt,envMapMode:Kt&&tt.mapping,envMapCubeUVHeight:G,aoMap:D,lightMap:vn,bumpMap:Qt,normalMap:te,displacementMap:f&&Tt,emissiveMap:Ee,normalMapObjectSpace:te&&b.normalMapType===Im,normalMapTangentSpace:te&&b.normalMapType===Ad,metalnessMap:wt,roughnessMap:M,anisotropy:_,anisotropyMap:lt,clearcoat:B,clearcoatMap:pt,clearcoatNormalMap:ne,clearcoatRoughnessMap:nt,dispersion:K,iridescence:et,iridescenceMap:mt,iridescenceThicknessMap:At,sheen:q,sheenColorMap:It,sheenRoughnessMap:gt,specularMap:ee,specularColorMap:Xt,specularIntensityMap:xe,transmission:Mt,transmissionMap:L,thicknessMap:ct,gradientMap:W,opaque:b.transparent===!1&&b.blending===ts&&b.alphaToCoverage===!1,alphaMap:Z,alphaTest:dt,alphaHash:ut,combine:b.combine,mapUv:qt&&y(b.map.channel),aoMapUv:D&&y(b.aoMap.channel),lightMapUv:vn&&y(b.lightMap.channel),bumpMapUv:Qt&&y(b.bumpMap.channel),normalMapUv:te&&y(b.normalMap.channel),displacementMapUv:Tt&&y(b.displacementMap.channel),emissiveMapUv:Ee&&y(b.emissiveMap.channel),metalnessMapUv:wt&&y(b.metalnessMap.channel),roughnessMapUv:M&&y(b.roughnessMap.channel),anisotropyMapUv:lt&&y(b.anisotropyMap.channel),clearcoatMapUv:pt&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:ne&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:At&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:It&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:gt&&y(b.sheenRoughnessMap.channel),specularMapUv:ee&&y(b.specularMap.channel),specularColorMapUv:Xt&&y(b.specularColorMap.channel),specularIntensityMapUv:xe&&y(b.specularIntensityMap.channel),transmissionMapUv:L&&y(b.transmissionMap.channel),thicknessMapUv:ct&&y(b.thicknessMap.channel),alphaMapUv:Z&&y(b.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(te||_),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Q.attributes.uv&&(qt||Z),fog:!!J,useFog:b.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:rt,skinning:H.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Wt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:De,decodeVideoTexture:qt&&b.map.isVideoTexture===!0&&ie.getTransfer(b.map.colorSpace)===ve,decodeVideoTextureEmissive:Ee&&b.emissiveMap.isVideoTexture===!0&&ie.getTransfer(b.emissiveMap.colorSpace)===ve,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===yi,flipSided:b.side===$e,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Vt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&b.extensions.multiDraw===!0||bt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ke.vertexUv1s=l.has(1),ke.vertexUv2s=l.has(2),ke.vertexUv3s=l.has(3),l.clear(),ke}function d(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const C in b.defines)S.push(C),S.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(T(S,b),E(S,b),S.push(n.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function T(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function E(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){const S=g[b.type];let C;if(S){const X=Wn[S];C=rg.clone(X.uniforms)}else C=b.uniforms;return C}function A(b,S){let C;for(let X=0,H=u.length;X<H;X++){const J=u[X];if(J.cacheKey===S){C=J,++C.usedTimes;break}}return C===void 0&&(C=new _0(n,S,b,s),u.push(C)),C}function I(b){if(--b.usedTimes===0){const S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function R(b){c.remove(b)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:A,releaseProgram:I,releaseShaderCache:R,programs:u,dispose:N}}function b0(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function M0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Ih(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ch(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(h,f,p,g,y,m){let d=n[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:y,group:m},n[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=y,d.group=m),t++,d}function a(h,f,p,g,y,m){const d=o(h,f,p,g,y,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):e.push(d)}function c(h,f,p,g,y,m){const d=o(h,f,p,g,y,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):e.unshift(d)}function l(h,f){e.length>1&&e.sort(h||M0),i.length>1&&i.sort(f||Ih),r.length>1&&r.sort(f||Ih)}function u(){for(let h=t,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function E0(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Ch,n.set(i,[o])):r>=s.length?(o=new Ch,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function w0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new re};break;case"SpotLight":e={position:new z,direction:new z,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new re,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new re,groundColor:new re};break;case"RectAreaLight":e={color:new re,position:new z,halfWidth:new z,halfHeight:new z};break}return n[t.id]=e,e}}}function T0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let A0=0;function R0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function I0(n){const t=new w0,e=T0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new z);const r=new z,s=new Re,o=new Re;function a(l){let u=0,h=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,g=0,y=0,m=0,d=0,T=0,E=0,x=0,A=0,I=0,R=0;l.sort(R0);for(let b=0,S=l.length;b<S;b++){const C=l[b],X=C.color,H=C.intensity,J=C.distance,Q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=X.r*H,h+=X.g*H,f+=X.b*H;else if(C.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(C.sh.coefficients[$],H);R++}else if(C.isDirectionalLight){const $=t.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const tt=C.shadow,G=e.get(C);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=C.shadow.matrix,T++}i.directional[p]=$,p++}else if(C.isSpotLight){const $=t.get(C);$.position.setFromMatrixPosition(C.matrixWorld),$.color.copy(X).multiplyScalar(H),$.distance=J,$.coneCos=Math.cos(C.angle),$.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),$.decay=C.decay,i.spot[y]=$;const tt=C.shadow;if(C.map&&(i.spotLightMap[A]=C.map,A++,tt.updateMatrices(C),C.castShadow&&I++),i.spotLightMatrix[y]=tt.matrix,C.castShadow){const G=e.get(C);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,i.spotShadow[y]=G,i.spotShadowMap[y]=Q,x++}y++}else if(C.isRectAreaLight){const $=t.get(C);$.color.copy(X).multiplyScalar(H),$.halfWidth.set(C.width*.5,0,0),$.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=$,m++}else if(C.isPointLight){const $=t.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),$.distance=C.distance,$.decay=C.decay,C.castShadow){const tt=C.shadow,G=e.get(C);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,G.shadowCameraNear=tt.camera.near,G.shadowCameraFar=tt.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=C.shadow.matrix,E++}i.point[g]=$,g++}else if(C.isHemisphereLight){const $=t.get(C);$.skyColor.copy(C.color).multiplyScalar(H),$.groundColor.copy(C.groundColor).multiplyScalar(H),i.hemi[d]=$,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const N=i.hash;(N.directionalLength!==p||N.pointLength!==g||N.spotLength!==y||N.rectAreaLength!==m||N.hemiLength!==d||N.numDirectionalShadows!==T||N.numPointShadows!==E||N.numSpotShadows!==x||N.numSpotMaps!==A||N.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=x+A-I,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=R,N.directionalLength=p,N.pointLength=g,N.spotLength=y,N.rectAreaLength=m,N.hemiLength=d,N.numDirectionalShadows=T,N.numPointShadows=E,N.numSpotShadows=x,N.numSpotMaps=A,N.numLightProbes=R,i.version=A0++)}function c(l,u){let h=0,f=0,p=0,g=0,y=0;const m=u.matrixWorldInverse;for(let d=0,T=l.length;d<T;d++){const E=l[d];if(E.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(E.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const x=i.hemi[y];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:a,setupView:c,state:i}}function Dh(n){const t=new I0(n),e=[],i=[];function r(u){l.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function C0(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Dh(n),t.set(r,[a])):s>=o.length?(a=new Dh(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class D0 extends Ms{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Am,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class L0 extends Ms{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const P0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function F0(n,t,e){let i=new Yl;const r=new ce,s=new ce,o=new Le,a=new D0({depthPacking:Rm}),c=new L0,l={},u=e.maxTextureSize,h={[Xi]:$e,[$e]:Xi,[yi]:yi},f=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:P0,fragmentShader:U0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new oi;g.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new mn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=md;let d=this.type;this.render=function(I,R,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const b=n.getRenderTarget(),S=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),X=n.state;X.setBlending(Gi),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const H=d!==pi&&this.type===pi,J=d===pi&&this.type!==pi;for(let Q=0,$=I.length;Q<$;Q++){const tt=I[Q],G=tt.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const at=G.getFrameExtents();if(r.multiply(at),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/at.x),r.x=s.x*at.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/at.y),r.y=s.y*at.y,G.mapSize.y=s.y)),G.map===null||H===!0||J===!0){const xt=this.type!==pi?{minFilter:Nn,magFilter:Nn}:{};G.map!==null&&G.map.dispose(),G.map=new Tr(r.x,r.y,xt),G.map.texture.name=tt.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const ft=G.getViewportCount();for(let xt=0;xt<ft;xt++){const Wt=G.getViewport(xt);o.set(s.x*Wt.x,s.y*Wt.y,s.x*Wt.z,s.y*Wt.w),X.viewport(o),G.updateMatrices(tt,xt),i=G.getFrustum(),x(R,N,G.camera,tt,this.type)}G.isPointLightShadow!==!0&&this.type===pi&&T(G,N),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(b,S,C)};function T(I,R){const N=t.update(y);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Tr(r.x,r.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(R,null,N,f,y,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(R,null,N,p,y,null)}function E(I,R,N,b){let S=null;const C=N.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(C!==void 0)S=C;else if(S=N.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const X=S.uuid,H=R.uuid;let J=l[X];J===void 0&&(J={},l[X]=J);let Q=J[H];Q===void 0&&(Q=S.clone(),J[H]=Q,R.addEventListener("dispose",A)),S=Q}if(S.visible=R.visible,S.wireframe=R.wireframe,b===pi?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:h[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const X=n.properties.get(S);X.light=N}return S}function x(I,R,N,b,S){if(I.visible===!1)return;if(I.layers.test(R.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&S===pi)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,I.matrixWorld);const H=t.update(I),J=I.material;if(Array.isArray(J)){const Q=H.groups;for(let $=0,tt=Q.length;$<tt;$++){const G=Q[$],at=J[G.materialIndex];if(at&&at.visible){const ft=E(I,at,b,S);I.onBeforeShadow(n,I,R,N,H,ft,G),n.renderBufferDirect(N,null,H,ft,I,G),I.onAfterShadow(n,I,R,N,H,ft,G)}}}else if(J.visible){const Q=E(I,J,b,S);I.onBeforeShadow(n,I,R,N,H,Q,null),n.renderBufferDirect(N,null,H,Q,I,null),I.onAfterShadow(n,I,R,N,H,Q,null)}}const X=I.children;for(let H=0,J=X.length;H<J;H++)x(X[H],R,N,b,S)}function A(I){I.target.removeEventListener("dispose",A);for(const N in l){const b=l[N],S=I.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const N0={[Pc]:Uc,[Fc]:Bc,[Nc]:zc,[cs]:Oc,[Uc]:Pc,[Bc]:Fc,[zc]:Nc,[Oc]:cs};function O0(n,t){function e(){let L=!1;const ct=new Le;let W=null;const Z=new Le(0,0,0,0);return{setMask:function(dt){W!==dt&&!L&&(n.colorMask(dt,dt,dt,dt),W=dt)},setLocked:function(dt){L=dt},setClear:function(dt,ut,Vt,De,ke){ke===!0&&(dt*=De,ut*=De,Vt*=De),ct.set(dt,ut,Vt,De),Z.equals(ct)===!1&&(n.clearColor(dt,ut,Vt,De),Z.copy(ct))},reset:function(){L=!1,W=null,Z.set(-1,0,0,0)}}}function i(){let L=!1,ct=!1,W=null,Z=null,dt=null;return{setReversed:function(ut){if(ct!==ut){const Vt=t.get("EXT_clip_control");ct?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);const De=dt;dt=null,this.setClear(De)}ct=ut},getReversed:function(){return ct},setTest:function(ut){ut?Y(n.DEPTH_TEST):rt(n.DEPTH_TEST)},setMask:function(ut){W!==ut&&!L&&(n.depthMask(ut),W=ut)},setFunc:function(ut){if(ct&&(ut=N0[ut]),Z!==ut){switch(ut){case Pc:n.depthFunc(n.NEVER);break;case Uc:n.depthFunc(n.ALWAYS);break;case Fc:n.depthFunc(n.LESS);break;case cs:n.depthFunc(n.LEQUAL);break;case Nc:n.depthFunc(n.EQUAL);break;case Oc:n.depthFunc(n.GEQUAL);break;case Bc:n.depthFunc(n.GREATER);break;case zc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=ut}},setLocked:function(ut){L=ut},setClear:function(ut){dt!==ut&&(ct&&(ut=1-ut),n.clearDepth(ut),dt=ut)},reset:function(){L=!1,W=null,Z=null,dt=null,ct=!1}}}function r(){let L=!1,ct=null,W=null,Z=null,dt=null,ut=null,Vt=null,De=null,ke=null;return{setTest:function(ge){L||(ge?Y(n.STENCIL_TEST):rt(n.STENCIL_TEST))},setMask:function(ge){ct!==ge&&!L&&(n.stencilMask(ge),ct=ge)},setFunc:function(ge,Rn,ai){(W!==ge||Z!==Rn||dt!==ai)&&(n.stencilFunc(ge,Rn,ai),W=ge,Z=Rn,dt=ai)},setOp:function(ge,Rn,ai){(ut!==ge||Vt!==Rn||De!==ai)&&(n.stencilOp(ge,Rn,ai),ut=ge,Vt=Rn,De=ai)},setLocked:function(ge){L=ge},setClear:function(ge){ke!==ge&&(n.clearStencil(ge),ke=ge)},reset:function(){L=!1,ct=null,W=null,Z=null,dt=null,ut=null,Vt=null,De=null,ke=null}}}const s=new e,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,y=!1,m=null,d=null,T=null,E=null,x=null,A=null,I=null,R=new re(0,0,0),N=0,b=!1,S=null,C=null,X=null,H=null,J=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,tt=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(G)[1]),$=tt>=1):G.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),$=tt>=2);let at=null,ft={};const xt=n.getParameter(n.SCISSOR_BOX),Wt=n.getParameter(n.VIEWPORT),$t=new Le().fromArray(xt),j=new Le().fromArray(Wt);function w(L,ct,W,Z){const dt=new Uint8Array(4),ut=n.createTexture();n.bindTexture(L,ut),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Vt=0;Vt<W;Vt++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ct,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,dt):n.texImage2D(ct+Vt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,dt);return ut}const O={};O[n.TEXTURE_2D]=w(n.TEXTURE_2D,n.TEXTURE_2D,1),O[n.TEXTURE_CUBE_MAP]=w(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),O[n.TEXTURE_2D_ARRAY]=w(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),O[n.TEXTURE_3D]=w(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Y(n.DEPTH_TEST),o.setFunc(cs),Qt(!1),te(Fu),Y(n.CULL_FACE),D(Gi);function Y(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function rt(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function st(L,ct){return h[L]!==ct?(n.bindFramebuffer(L,ct),h[L]=ct,L===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ct),L===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ct),!0):!1}function bt(L,ct){let W=p,Z=!1;if(L){W=f.get(ct),W===void 0&&(W=[],f.set(ct,W));const dt=L.textures;if(W.length!==dt.length||W[0]!==n.COLOR_ATTACHMENT0){for(let ut=0,Vt=dt.length;ut<Vt;ut++)W[ut]=n.COLOR_ATTACHMENT0+ut;W.length=dt.length,Z=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,Z=!0);Z&&n.drawBuffers(W)}function qt(L){return g!==L?(n.useProgram(L),g=L,!0):!1}const _t={[fr]:n.FUNC_ADD,[tm]:n.FUNC_SUBTRACT,[em]:n.FUNC_REVERSE_SUBTRACT};_t[nm]=n.MIN,_t[im]=n.MAX;const Kt={[rm]:n.ZERO,[sm]:n.ONE,[om]:n.SRC_COLOR,[Dc]:n.SRC_ALPHA,[dm]:n.SRC_ALPHA_SATURATE,[um]:n.DST_COLOR,[cm]:n.DST_ALPHA,[am]:n.ONE_MINUS_SRC_COLOR,[Lc]:n.ONE_MINUS_SRC_ALPHA,[hm]:n.ONE_MINUS_DST_COLOR,[lm]:n.ONE_MINUS_DST_ALPHA,[fm]:n.CONSTANT_COLOR,[pm]:n.ONE_MINUS_CONSTANT_COLOR,[mm]:n.CONSTANT_ALPHA,[gm]:n.ONE_MINUS_CONSTANT_ALPHA};function D(L,ct,W,Z,dt,ut,Vt,De,ke,ge){if(L===Gi){y===!0&&(rt(n.BLEND),y=!1);return}if(y===!1&&(Y(n.BLEND),y=!0),L!==Qp){if(L!==m||ge!==b){if((d!==fr||x!==fr)&&(n.blendEquation(n.FUNC_ADD),d=fr,x=fr),ge)switch(L){case ts:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nu:n.blendFunc(n.ONE,n.ONE);break;case Ou:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ts:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ou:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,E=null,A=null,I=null,R.set(0,0,0),N=0,m=L,b=ge}return}dt=dt||ct,ut=ut||W,Vt=Vt||Z,(ct!==d||dt!==x)&&(n.blendEquationSeparate(_t[ct],_t[dt]),d=ct,x=dt),(W!==T||Z!==E||ut!==A||Vt!==I)&&(n.blendFuncSeparate(Kt[W],Kt[Z],Kt[ut],Kt[Vt]),T=W,E=Z,A=ut,I=Vt),(De.equals(R)===!1||ke!==N)&&(n.blendColor(De.r,De.g,De.b,ke),R.copy(De),N=ke),m=L,b=!1}function vn(L,ct){L.side===yi?rt(n.CULL_FACE):Y(n.CULL_FACE);let W=L.side===$e;ct&&(W=!W),Qt(W),L.blending===ts&&L.transparent===!1?D(Gi):D(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const Z=L.stencilWrite;a.setTest(Z),Z&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ee(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Y(n.SAMPLE_ALPHA_TO_COVERAGE):rt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(L){S!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),S=L)}function te(L){L!==Kp?(Y(n.CULL_FACE),L!==C&&(L===Fu?n.cullFace(n.BACK):L===Zp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):rt(n.CULL_FACE),C=L}function Tt(L){L!==X&&($&&n.lineWidth(L),X=L)}function Ee(L,ct,W){L?(Y(n.POLYGON_OFFSET_FILL),(H!==ct||J!==W)&&(n.polygonOffset(ct,W),H=ct,J=W)):rt(n.POLYGON_OFFSET_FILL)}function wt(L){L?Y(n.SCISSOR_TEST):rt(n.SCISSOR_TEST)}function M(L){L===void 0&&(L=n.TEXTURE0+Q-1),at!==L&&(n.activeTexture(L),at=L)}function _(L,ct,W){W===void 0&&(at===null?W=n.TEXTURE0+Q-1:W=at);let Z=ft[W];Z===void 0&&(Z={type:void 0,texture:void 0},ft[W]=Z),(Z.type!==L||Z.texture!==ct)&&(at!==W&&(n.activeTexture(W),at=W),n.bindTexture(L,ct||O[L]),Z.type=L,Z.texture=ct)}function B(){const L=ft[at];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Mt(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function At(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function It(L){$t.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),$t.copy(L))}function gt(L){j.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),j.copy(L))}function ee(L,ct){let W=l.get(ct);W===void 0&&(W=new WeakMap,l.set(ct,W));let Z=W.get(L);Z===void 0&&(Z=n.getUniformBlockIndex(ct,L.name),W.set(L,Z))}function Xt(L,ct){const Z=l.get(ct).get(L);c.get(ct)!==Z&&(n.uniformBlockBinding(ct,Z,L.__bindingPointIndex),c.set(ct,Z))}function xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},at=null,ft={},h={},f=new WeakMap,p=[],g=null,y=!1,m=null,d=null,T=null,E=null,x=null,A=null,I=null,R=new re(0,0,0),N=0,b=!1,S=null,C=null,X=null,H=null,J=null,$t.set(0,0,n.canvas.width,n.canvas.height),j.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Y,disable:rt,bindFramebuffer:st,drawBuffers:bt,useProgram:qt,setBlending:D,setMaterial:vn,setFlipSided:Qt,setCullFace:te,setLineWidth:Tt,setPolygonOffset:Ee,setScissorTest:wt,activeTexture:M,bindTexture:_,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:et,texImage2D:mt,texImage3D:At,updateUBOMapping:ee,uniformBlockBinding:Xt,texStorage2D:ne,texStorage3D:nt,texSubImage2D:q,texSubImage3D:Mt,compressedTexSubImage2D:lt,compressedTexSubImage3D:pt,scissor:It,viewport:gt,reset:xe}}function Lh(n,t,e,i){const r=B0(i);switch(e){case Sd:return n*t;case bd:return n*t;case Md:return n*t*2;case Ed:return n*t/r.components*r.byteLength;case Hl:return n*t/r.components*r.byteLength;case wd:return n*t*2/r.components*r.byteLength;case Gl:return n*t*2/r.components*r.byteLength;case xd:return n*t*3/r.components*r.byteLength;case Fn:return n*t*4/r.components*r.byteLength;case Wl:return n*t*4/r.components*r.byteLength;case Ho:case Go:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Wo:case Xo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Xc:case Yc:return Math.max(n,16)*Math.max(t,8)/4;case Wc:case jc:return Math.max(n,8)*Math.max(t,8)/2;case $c:case qc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Kc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Zc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Jc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Qc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case tl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case el:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case nl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case il:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case rl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case sl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ol:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case al:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case cl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ll:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ul:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case jo:case hl:case dl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Td:case fl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case pl:case ml:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function B0(n){switch(n){case Ai:case _d:return{byteLength:1,components:1};case Ws:case vd:case Qs:return{byteLength:2,components:1};case Vl:case kl:return{byteLength:2,components:4};case wr:case zl:case bi:return{byteLength:4,components:1};case yd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function z0(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ce,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,_){return p?new OffscreenCanvas(M,_):Xs("canvas")}function y(M,_,B){let K=1;const et=wt(M);if((et.width>B||et.height>B)&&(K=B/Math.max(et.width,et.height)),K<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const q=Math.floor(K*et.width),Mt=Math.floor(K*et.height);h===void 0&&(h=g(q,Mt));const lt=_?g(q,Mt):h;return lt.width=q,lt.height=Mt,lt.getContext("2d").drawImage(M,0,0,q,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+q+"x"+Mt+")."),lt}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),M;return M}function m(M){return M.generateMipmaps}function d(M){n.generateMipmap(M)}function T(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(M,_,B,K,et=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let q=_;if(_===n.RED&&(B===n.FLOAT&&(q=n.R32F),B===n.HALF_FLOAT&&(q=n.R16F),B===n.UNSIGNED_BYTE&&(q=n.R8)),_===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.R8UI),B===n.UNSIGNED_SHORT&&(q=n.R16UI),B===n.UNSIGNED_INT&&(q=n.R32UI),B===n.BYTE&&(q=n.R8I),B===n.SHORT&&(q=n.R16I),B===n.INT&&(q=n.R32I)),_===n.RG&&(B===n.FLOAT&&(q=n.RG32F),B===n.HALF_FLOAT&&(q=n.RG16F),B===n.UNSIGNED_BYTE&&(q=n.RG8)),_===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RG8UI),B===n.UNSIGNED_SHORT&&(q=n.RG16UI),B===n.UNSIGNED_INT&&(q=n.RG32UI),B===n.BYTE&&(q=n.RG8I),B===n.SHORT&&(q=n.RG16I),B===n.INT&&(q=n.RG32I)),_===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RGB8UI),B===n.UNSIGNED_SHORT&&(q=n.RGB16UI),B===n.UNSIGNED_INT&&(q=n.RGB32UI),B===n.BYTE&&(q=n.RGB8I),B===n.SHORT&&(q=n.RGB16I),B===n.INT&&(q=n.RGB32I)),_===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),B===n.UNSIGNED_INT&&(q=n.RGBA32UI),B===n.BYTE&&(q=n.RGBA8I),B===n.SHORT&&(q=n.RGBA16I),B===n.INT&&(q=n.RGBA32I)),_===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),_===n.RGBA){const Mt=et?La:ie.getTransfer(K);B===n.FLOAT&&(q=n.RGBA32F),B===n.HALF_FLOAT&&(q=n.RGBA16F),B===n.UNSIGNED_BYTE&&(q=Mt===ve?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function x(M,_){let B;return M?_===null||_===wr||_===hs?B=n.DEPTH24_STENCIL8:_===bi?B=n.DEPTH32F_STENCIL8:_===Ws&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===wr||_===hs?B=n.DEPTH_COMPONENT24:_===bi?B=n.DEPTH_COMPONENT32F:_===Ws&&(B=n.DEPTH_COMPONENT16),B}function A(M,_){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==Nn&&M.minFilter!==Zn?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function I(M){const _=M.target;_.removeEventListener("dispose",I),N(_),_.isVideoTexture&&u.delete(_)}function R(M){const _=M.target;_.removeEventListener("dispose",R),S(_)}function N(M){const _=i.get(M);if(_.__webglInit===void 0)return;const B=M.source,K=f.get(B);if(K){const et=K[_.__cacheKey];et.usedTimes--,et.usedTimes===0&&b(M),Object.keys(K).length===0&&f.delete(B)}i.remove(M)}function b(M){const _=i.get(M);n.deleteTexture(_.__webglTexture);const B=M.source,K=f.get(B);delete K[_.__cacheKey],o.memory.textures--}function S(M){const _=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(_.__webglFramebuffer[K]))for(let et=0;et<_.__webglFramebuffer[K].length;et++)n.deleteFramebuffer(_.__webglFramebuffer[K][et]);else n.deleteFramebuffer(_.__webglFramebuffer[K]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[K])}else{if(Array.isArray(_.__webglFramebuffer))for(let K=0;K<_.__webglFramebuffer.length;K++)n.deleteFramebuffer(_.__webglFramebuffer[K]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let K=0;K<_.__webglColorRenderbuffer.length;K++)_.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const B=M.textures;for(let K=0,et=B.length;K<et;K++){const q=i.get(B[K]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(B[K])}i.remove(M)}let C=0;function X(){C=0}function H(){const M=C;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),C+=1,M}function J(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function Q(M,_){const B=i.get(M);if(M.isVideoTexture&&Tt(M),M.isRenderTargetTexture===!1&&M.version>0&&B.__version!==M.version){const K=M.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(B,M,_);return}}e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+_)}function $(M,_){const B=i.get(M);if(M.version>0&&B.__version!==M.version){j(B,M,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+_)}function tt(M,_){const B=i.get(M);if(M.version>0&&B.__version!==M.version){j(B,M,_);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+_)}function G(M,_){const B=i.get(M);if(M.version>0&&B.__version!==M.version){w(B,M,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+_)}const at={[Hc]:n.REPEAT,[mr]:n.CLAMP_TO_EDGE,[Gc]:n.MIRRORED_REPEAT},ft={[Nn]:n.NEAREST,[Tm]:n.NEAREST_MIPMAP_NEAREST,[go]:n.NEAREST_MIPMAP_LINEAR,[Zn]:n.LINEAR,[Ha]:n.LINEAR_MIPMAP_NEAREST,[gr]:n.LINEAR_MIPMAP_LINEAR},xt={[Cm]:n.NEVER,[Nm]:n.ALWAYS,[Dm]:n.LESS,[Rd]:n.LEQUAL,[Lm]:n.EQUAL,[Fm]:n.GEQUAL,[Pm]:n.GREATER,[Um]:n.NOTEQUAL};function Wt(M,_){if(_.type===bi&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Zn||_.magFilter===Ha||_.magFilter===go||_.magFilter===gr||_.minFilter===Zn||_.minFilter===Ha||_.minFilter===go||_.minFilter===gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,at[_.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,at[_.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,at[_.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,ft[_.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,ft[_.minFilter]),_.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,xt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Nn||_.minFilter!==go&&_.minFilter!==gr||_.type===bi&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(M,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function $t(M,_){let B=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",I));const K=_.source;let et=f.get(K);et===void 0&&(et={},f.set(K,et));const q=J(_);if(q!==M.__cacheKey){et[q]===void 0&&(et[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),et[q].usedTimes++;const Mt=et[M.__cacheKey];Mt!==void 0&&(et[M.__cacheKey].usedTimes--,Mt.usedTimes===0&&b(_)),M.__cacheKey=q,M.__webglTexture=et[q].texture}return B}function j(M,_,B){let K=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(K=n.TEXTURE_3D);const et=$t(M,_),q=_.source;e.bindTexture(K,M.__webglTexture,n.TEXTURE0+B);const Mt=i.get(q);if(q.version!==Mt.__version||et===!0){e.activeTexture(n.TEXTURE0+B);const lt=ie.getPrimaries(ie.workingColorSpace),pt=_.colorSpace===Hi?null:ie.getPrimaries(_.colorSpace),ne=_.colorSpace===Hi||lt===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let nt=y(_.image,!1,r.maxTextureSize);nt=Ee(_,nt);const mt=s.convert(_.format,_.colorSpace),At=s.convert(_.type);let It=E(_.internalFormat,mt,At,_.colorSpace,_.isVideoTexture);Wt(K,_);let gt;const ee=_.mipmaps,Xt=_.isVideoTexture!==!0,xe=Mt.__version===void 0||et===!0,L=q.dataReady,ct=A(_,nt);if(_.isDepthTexture)It=x(_.format===ds,_.type),xe&&(Xt?e.texStorage2D(n.TEXTURE_2D,1,It,nt.width,nt.height):e.texImage2D(n.TEXTURE_2D,0,It,nt.width,nt.height,0,mt,At,null));else if(_.isDataTexture)if(ee.length>0){Xt&&xe&&e.texStorage2D(n.TEXTURE_2D,ct,It,ee[0].width,ee[0].height);for(let W=0,Z=ee.length;W<Z;W++)gt=ee[W],Xt?L&&e.texSubImage2D(n.TEXTURE_2D,W,0,0,gt.width,gt.height,mt,At,gt.data):e.texImage2D(n.TEXTURE_2D,W,It,gt.width,gt.height,0,mt,At,gt.data);_.generateMipmaps=!1}else Xt?(xe&&e.texStorage2D(n.TEXTURE_2D,ct,It,nt.width,nt.height),L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,nt.width,nt.height,mt,At,nt.data)):e.texImage2D(n.TEXTURE_2D,0,It,nt.width,nt.height,0,mt,At,nt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Xt&&xe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ct,It,ee[0].width,ee[0].height,nt.depth);for(let W=0,Z=ee.length;W<Z;W++)if(gt=ee[W],_.format!==Fn)if(mt!==null)if(Xt){if(L)if(_.layerUpdates.size>0){const dt=Lh(gt.width,gt.height,_.format,_.type);for(const ut of _.layerUpdates){const Vt=gt.data.subarray(ut*dt/gt.data.BYTES_PER_ELEMENT,(ut+1)*dt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,ut,gt.width,gt.height,1,mt,Vt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,gt.width,gt.height,nt.depth,mt,gt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,W,It,gt.width,gt.height,nt.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?L&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,gt.width,gt.height,nt.depth,mt,At,gt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,W,It,gt.width,gt.height,nt.depth,0,mt,At,gt.data)}else{Xt&&xe&&e.texStorage2D(n.TEXTURE_2D,ct,It,ee[0].width,ee[0].height);for(let W=0,Z=ee.length;W<Z;W++)gt=ee[W],_.format!==Fn?mt!==null?Xt?L&&e.compressedTexSubImage2D(n.TEXTURE_2D,W,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(n.TEXTURE_2D,W,It,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?L&&e.texSubImage2D(n.TEXTURE_2D,W,0,0,gt.width,gt.height,mt,At,gt.data):e.texImage2D(n.TEXTURE_2D,W,It,gt.width,gt.height,0,mt,At,gt.data)}else if(_.isDataArrayTexture)if(Xt){if(xe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ct,It,nt.width,nt.height,nt.depth),L)if(_.layerUpdates.size>0){const W=Lh(nt.width,nt.height,_.format,_.type);for(const Z of _.layerUpdates){const dt=nt.data.subarray(Z*W/nt.data.BYTES_PER_ELEMENT,(Z+1)*W/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,nt.width,nt.height,1,mt,At,dt)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,mt,At,nt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,It,nt.width,nt.height,nt.depth,0,mt,At,nt.data);else if(_.isData3DTexture)Xt?(xe&&e.texStorage3D(n.TEXTURE_3D,ct,It,nt.width,nt.height,nt.depth),L&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,mt,At,nt.data)):e.texImage3D(n.TEXTURE_3D,0,It,nt.width,nt.height,nt.depth,0,mt,At,nt.data);else if(_.isFramebufferTexture){if(xe)if(Xt)e.texStorage2D(n.TEXTURE_2D,ct,It,nt.width,nt.height);else{let W=nt.width,Z=nt.height;for(let dt=0;dt<ct;dt++)e.texImage2D(n.TEXTURE_2D,dt,It,W,Z,0,mt,At,null),W>>=1,Z>>=1}}else if(ee.length>0){if(Xt&&xe){const W=wt(ee[0]);e.texStorage2D(n.TEXTURE_2D,ct,It,W.width,W.height)}for(let W=0,Z=ee.length;W<Z;W++)gt=ee[W],Xt?L&&e.texSubImage2D(n.TEXTURE_2D,W,0,0,mt,At,gt):e.texImage2D(n.TEXTURE_2D,W,It,mt,At,gt);_.generateMipmaps=!1}else if(Xt){if(xe){const W=wt(nt);e.texStorage2D(n.TEXTURE_2D,ct,It,W.width,W.height)}L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,mt,At,nt)}else e.texImage2D(n.TEXTURE_2D,0,It,mt,At,nt);m(_)&&d(K),Mt.__version=q.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function w(M,_,B){if(_.image.length!==6)return;const K=$t(M,_),et=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+B);const q=i.get(et);if(et.version!==q.__version||K===!0){e.activeTexture(n.TEXTURE0+B);const Mt=ie.getPrimaries(ie.workingColorSpace),lt=_.colorSpace===Hi?null:ie.getPrimaries(_.colorSpace),pt=_.colorSpace===Hi||Mt===lt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const ne=_.isCompressedTexture||_.image[0].isCompressedTexture,nt=_.image[0]&&_.image[0].isDataTexture,mt=[];for(let Z=0;Z<6;Z++)!ne&&!nt?mt[Z]=y(_.image[Z],!0,r.maxCubemapSize):mt[Z]=nt?_.image[Z].image:_.image[Z],mt[Z]=Ee(_,mt[Z]);const At=mt[0],It=s.convert(_.format,_.colorSpace),gt=s.convert(_.type),ee=E(_.internalFormat,It,gt,_.colorSpace),Xt=_.isVideoTexture!==!0,xe=q.__version===void 0||K===!0,L=et.dataReady;let ct=A(_,At);Wt(n.TEXTURE_CUBE_MAP,_);let W;if(ne){Xt&&xe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ct,ee,At.width,At.height);for(let Z=0;Z<6;Z++){W=mt[Z].mipmaps;for(let dt=0;dt<W.length;dt++){const ut=W[dt];_.format!==Fn?It!==null?Xt?L&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,dt,0,0,ut.width,ut.height,It,ut.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,dt,ee,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,dt,0,0,ut.width,ut.height,It,gt,ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,dt,ee,ut.width,ut.height,0,It,gt,ut.data)}}}else{if(W=_.mipmaps,Xt&&xe){W.length>0&&ct++;const Z=wt(mt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ct,ee,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(nt){Xt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,mt[Z].width,mt[Z].height,It,gt,mt[Z].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ee,mt[Z].width,mt[Z].height,0,It,gt,mt[Z].data);for(let dt=0;dt<W.length;dt++){const Vt=W[dt].image[Z].image;Xt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,dt+1,0,0,Vt.width,Vt.height,It,gt,Vt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,dt+1,ee,Vt.width,Vt.height,0,It,gt,Vt.data)}}else{Xt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,It,gt,mt[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ee,It,gt,mt[Z]);for(let dt=0;dt<W.length;dt++){const ut=W[dt];Xt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,dt+1,0,0,It,gt,ut.image[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,dt+1,ee,It,gt,ut.image[Z])}}}m(_)&&d(n.TEXTURE_CUBE_MAP),q.__version=et.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function O(M,_,B,K,et,q){const Mt=s.convert(B.format,B.colorSpace),lt=s.convert(B.type),pt=E(B.internalFormat,Mt,lt,B.colorSpace),ne=i.get(_),nt=i.get(B);if(nt.__renderTarget=_,!ne.__hasExternalTextures){const mt=Math.max(1,_.width>>q),At=Math.max(1,_.height>>q);et===n.TEXTURE_3D||et===n.TEXTURE_2D_ARRAY?e.texImage3D(et,q,pt,mt,At,_.depth,0,Mt,lt,null):e.texImage2D(et,q,pt,mt,At,0,Mt,lt,null)}e.bindFramebuffer(n.FRAMEBUFFER,M),te(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,et,nt.__webglTexture,0,Qt(_)):(et===n.TEXTURE_2D||et>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,et,nt.__webglTexture,q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Y(M,_,B){if(n.bindRenderbuffer(n.RENDERBUFFER,M),_.depthBuffer){const K=_.depthTexture,et=K&&K.isDepthTexture?K.type:null,q=x(_.stencilBuffer,et),Mt=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=Qt(_);te(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt,q,_.width,_.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,q,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,q,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Mt,n.RENDERBUFFER,M)}else{const K=_.textures;for(let et=0;et<K.length;et++){const q=K[et],Mt=s.convert(q.format,q.colorSpace),lt=s.convert(q.type),pt=E(q.internalFormat,Mt,lt,q.colorSpace),ne=Qt(_);B&&te(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,pt,_.width,_.height):te(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,pt,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,pt,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function rt(M,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(_.depthTexture);K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Q(_.depthTexture,0);const et=K.__webglTexture,q=Qt(_);if(_.depthTexture.format===es)te(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0);else if(_.depthTexture.format===ds)te(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function st(M){const _=i.get(M),B=M.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==M.depthTexture){const K=M.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),K){const et=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,K.removeEventListener("dispose",et)};K.addEventListener("dispose",et),_.__depthDisposeCallback=et}_.__boundDepthTexture=K}if(M.depthTexture&&!_.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");rt(_.__webglFramebuffer,M)}else if(B){_.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[K]),_.__webglDepthbuffer[K]===void 0)_.__webglDepthbuffer[K]=n.createRenderbuffer(),Y(_.__webglDepthbuffer[K],M,!1);else{const et=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,q)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Y(_.__webglDepthbuffer,M,!1);else{const K=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,et=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,et),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,et)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function bt(M,_,B){const K=i.get(M);_!==void 0&&O(K.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&st(M)}function qt(M){const _=M.texture,B=i.get(M),K=i.get(_);M.addEventListener("dispose",R);const et=M.textures,q=M.isWebGLCubeRenderTarget===!0,Mt=et.length>1;if(Mt||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=_.version,o.memory.textures++),q){B.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[lt]=[];for(let pt=0;pt<_.mipmaps.length;pt++)B.__webglFramebuffer[lt][pt]=n.createFramebuffer()}else B.__webglFramebuffer[lt]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let lt=0;lt<_.mipmaps.length;lt++)B.__webglFramebuffer[lt]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Mt)for(let lt=0,pt=et.length;lt<pt;lt++){const ne=i.get(et[lt]);ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture(),o.memory.textures++)}if(M.samples>0&&te(M)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let lt=0;lt<et.length;lt++){const pt=et[lt];B.__webglColorRenderbuffer[lt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[lt]);const ne=s.convert(pt.format,pt.colorSpace),nt=s.convert(pt.type),mt=E(pt.internalFormat,ne,nt,pt.colorSpace,M.isXRRenderTarget===!0),At=Qt(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,At,mt,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,B.__webglColorRenderbuffer[lt])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Y(B.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Wt(n.TEXTURE_CUBE_MAP,_);for(let lt=0;lt<6;lt++)if(_.mipmaps&&_.mipmaps.length>0)for(let pt=0;pt<_.mipmaps.length;pt++)O(B.__webglFramebuffer[lt][pt],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,pt);else O(B.__webglFramebuffer[lt],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(_)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let lt=0,pt=et.length;lt<pt;lt++){const ne=et[lt],nt=i.get(ne);e.bindTexture(n.TEXTURE_2D,nt.__webglTexture),Wt(n.TEXTURE_2D,ne),O(B.__webglFramebuffer,M,ne,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,0),m(ne)&&d(n.TEXTURE_2D)}e.unbindTexture()}else{let lt=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(lt=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(lt,K.__webglTexture),Wt(lt,_),_.mipmaps&&_.mipmaps.length>0)for(let pt=0;pt<_.mipmaps.length;pt++)O(B.__webglFramebuffer[pt],M,_,n.COLOR_ATTACHMENT0,lt,pt);else O(B.__webglFramebuffer,M,_,n.COLOR_ATTACHMENT0,lt,0);m(_)&&d(lt),e.unbindTexture()}M.depthBuffer&&st(M)}function _t(M){const _=M.textures;for(let B=0,K=_.length;B<K;B++){const et=_[B];if(m(et)){const q=T(M),Mt=i.get(et).__webglTexture;e.bindTexture(q,Mt),d(q),e.unbindTexture()}}}const Kt=[],D=[];function vn(M){if(M.samples>0){if(te(M)===!1){const _=M.textures,B=M.width,K=M.height;let et=n.COLOR_BUFFER_BIT;const q=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=i.get(M),lt=_.length>1;if(lt)for(let pt=0;pt<_.length;pt++)e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let pt=0;pt<_.length;pt++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(et|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(et|=n.STENCIL_BUFFER_BIT)),lt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[pt]);const ne=i.get(_[pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,B,K,0,0,B,K,et,n.NEAREST),c===!0&&(Kt.length=0,D.length=0,Kt.push(n.COLOR_ATTACHMENT0+pt),M.depthBuffer&&M.resolveDepthBuffer===!1&&(Kt.push(q),D.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Kt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),lt)for(let pt=0;pt<_.length;pt++){e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[pt]);const ne=i.get(_[pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,ne,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){const _=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Qt(M){return Math.min(r.maxSamples,M.samples)}function te(M){const _=i.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Tt(M){const _=o.render.frame;u.get(M)!==_&&(u.set(M,_),M.update())}function Ee(M,_){const B=M.colorSpace,K=M.format,et=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||B!==xs&&B!==Hi&&(ie.getTransfer(B)===ve?(K!==Fn||et!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),_}function wt(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=X,this.setTexture2D=Q,this.setTexture2DArray=$,this.setTexture3D=tt,this.setTextureCube=G,this.rebindTextures=bt,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=vn,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=O,this.useMultisampledRTT=te}function V0(n,t){function e(i,r=Hi){let s;const o=ie.getTransfer(r);if(i===Ai)return n.UNSIGNED_BYTE;if(i===Vl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===kl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===yd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_d)return n.BYTE;if(i===vd)return n.SHORT;if(i===Ws)return n.UNSIGNED_SHORT;if(i===zl)return n.INT;if(i===wr)return n.UNSIGNED_INT;if(i===bi)return n.FLOAT;if(i===Qs)return n.HALF_FLOAT;if(i===Sd)return n.ALPHA;if(i===xd)return n.RGB;if(i===Fn)return n.RGBA;if(i===bd)return n.LUMINANCE;if(i===Md)return n.LUMINANCE_ALPHA;if(i===es)return n.DEPTH_COMPONENT;if(i===ds)return n.DEPTH_STENCIL;if(i===Ed)return n.RED;if(i===Hl)return n.RED_INTEGER;if(i===wd)return n.RG;if(i===Gl)return n.RG_INTEGER;if(i===Wl)return n.RGBA_INTEGER;if(i===Ho||i===Go||i===Wo||i===Xo)if(o===ve)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ho)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ho)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Go)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wc||i===Xc||i===jc||i===Yc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Wc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Yc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$c||i===qc||i===Kc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===$c||i===qc)return o===ve?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Kc)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Zc||i===Jc||i===Qc||i===tl||i===el||i===nl||i===il||i===rl||i===sl||i===ol||i===al||i===cl||i===ll||i===ul)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Zc)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jc)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qc)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===tl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===el)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===il)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===rl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ol)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===al)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===cl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ll)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ul)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jo||i===hl||i===dl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===jo)return o===ve?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===dl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Td||i===fl||i===pl||i===ml)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===jo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===fl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===pl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ml)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class k0 extends En{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Jr extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const H0={type:"move"};class _c{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const y of t.hand.values()){const m=e.getJointPose(y,i),d=this._getHandJoint(l,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(H0)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Jr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const G0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class X0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new qe,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ji({vertexShader:G0,fragmentShader:W0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new mn(new Ua(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class j0 extends bs{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,g=null;const y=new X0,m=e.getContextAttributes();let d=null,T=null;const E=[],x=[],A=new ce;let I=null;const R=new En;R.viewport=new Le;const N=new En;N.viewport=new Le;const b=[R,N],S=new k0;let C=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let w=E[j];return w===void 0&&(w=new _c,E[j]=w),w.getTargetRaySpace()},this.getControllerGrip=function(j){let w=E[j];return w===void 0&&(w=new _c,E[j]=w),w.getGripSpace()},this.getHand=function(j){let w=E[j];return w===void 0&&(w=new _c,E[j]=w),w.getHandSpace()};function H(j){const w=x.indexOf(j.inputSource);if(w===-1)return;const O=E[w];O!==void 0&&(O.update(j.inputSource,j.frame,l||o),O.dispatchEvent({type:j.type,data:j.inputSource}))}function J(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",Q);for(let j=0;j<E.length;j++){const w=x[j];w!==null&&(x[j]=null,E[j].disconnect(w))}C=null,X=null,y.reset(),t.setRenderTarget(d),p=null,f=null,h=null,r=null,T=null,$t.stop(),i.isPresenting=!1,t.setPixelRatio(I),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(d=t.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",J),r.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(A),r.renderState.layers===void 0){const w={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,w),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new Tr(p.framebufferWidth,p.framebufferHeight,{format:Fn,type:Ai,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let w=null,O=null,Y=null;m.depth&&(Y=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,w=m.stencil?ds:es,O=m.stencil?hs:wr);const rt={colorFormat:e.RGBA8,depthFormat:Y,scaleFactor:s};h=new XRWebGLBinding(r,e),f=h.createProjectionLayer(rt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),T=new Tr(f.textureWidth,f.textureHeight,{format:Fn,type:Ai,depthTexture:new Vd(f.textureWidth,f.textureHeight,O,void 0,void 0,void 0,void 0,void 0,void 0,w),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),$t.setContext(r),$t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Q(j){for(let w=0;w<j.removed.length;w++){const O=j.removed[w],Y=x.indexOf(O);Y>=0&&(x[Y]=null,E[Y].disconnect(O))}for(let w=0;w<j.added.length;w++){const O=j.added[w];let Y=x.indexOf(O);if(Y===-1){for(let st=0;st<E.length;st++)if(st>=x.length){x.push(O),Y=st;break}else if(x[st]===null){x[st]=O,Y=st;break}if(Y===-1)break}const rt=E[Y];rt&&rt.connect(O)}}const $=new z,tt=new z;function G(j,w,O){$.setFromMatrixPosition(w.matrixWorld),tt.setFromMatrixPosition(O.matrixWorld);const Y=$.distanceTo(tt),rt=w.projectionMatrix.elements,st=O.projectionMatrix.elements,bt=rt[14]/(rt[10]-1),qt=rt[14]/(rt[10]+1),_t=(rt[9]+1)/rt[5],Kt=(rt[9]-1)/rt[5],D=(rt[8]-1)/rt[0],vn=(st[8]+1)/st[0],Qt=bt*D,te=bt*vn,Tt=Y/(-D+vn),Ee=Tt*-D;if(w.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ee),j.translateZ(Tt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),rt[10]===-1)j.projectionMatrix.copy(w.projectionMatrix),j.projectionMatrixInverse.copy(w.projectionMatrixInverse);else{const wt=bt+Tt,M=qt+Tt,_=Qt-Ee,B=te+(Y-Ee),K=_t*qt/M*wt,et=Kt*qt/M*wt;j.projectionMatrix.makePerspective(_,B,K,et,wt,M),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function at(j,w){w===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(w.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let w=j.near,O=j.far;y.texture!==null&&(y.depthNear>0&&(w=y.depthNear),y.depthFar>0&&(O=y.depthFar)),S.near=N.near=R.near=w,S.far=N.far=R.far=O,(C!==S.near||X!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,X=S.far),R.layers.mask=j.layers.mask|2,N.layers.mask=j.layers.mask|4,S.layers.mask=R.layers.mask|N.layers.mask;const Y=j.parent,rt=S.cameras;at(S,Y);for(let st=0;st<rt.length;st++)at(rt[st],Y);rt.length===2?G(S,R,N):S.projectionMatrix.copy(R.projectionMatrix),ft(j,S,Y)};function ft(j,w,O){O===null?j.matrix.copy(w.matrixWorld):(j.matrix.copy(O.matrixWorld),j.matrix.invert(),j.matrix.multiply(w.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(w.projectionMatrix),j.projectionMatrixInverse.copy(w.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=gl*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(j){c=j,f!==null&&(f.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let xt=null;function Wt(j,w){if(u=w.getViewerPose(l||o),g=w,u!==null){const O=u.views;p!==null&&(t.setRenderTargetFramebuffer(T,p.framebuffer),t.setRenderTarget(T));let Y=!1;O.length!==S.cameras.length&&(S.cameras.length=0,Y=!0);for(let st=0;st<O.length;st++){const bt=O[st];let qt=null;if(p!==null)qt=p.getViewport(bt);else{const Kt=h.getViewSubImage(f,bt);qt=Kt.viewport,st===0&&(t.setRenderTargetTextures(T,Kt.colorTexture,f.ignoreDepthValues?void 0:Kt.depthStencilTexture),t.setRenderTarget(T))}let _t=b[st];_t===void 0&&(_t=new En,_t.layers.enable(st),_t.viewport=new Le,b[st]=_t),_t.matrix.fromArray(bt.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(bt.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(qt.x,qt.y,qt.width,qt.height),st===0&&(S.matrix.copy(_t.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Y===!0&&S.cameras.push(_t)}const rt=r.enabledFeatures;if(rt&&rt.includes("depth-sensing")){const st=h.getDepthInformation(O[0]);st&&st.isValid&&st.texture&&y.init(t,st,r.renderState)}}for(let O=0;O<E.length;O++){const Y=x[O],rt=E[O];Y!==null&&rt!==void 0&&rt.update(Y,w,l||o)}xt&&xt(j,w),w.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:w}),g=null}const $t=new Bd;$t.setAnimationLoop(Wt),this.setAnimationLoop=function(j){xt=j},this.dispose=function(){}}}const lr=new ni,Y0=new Re;function $0(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Fd(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,T,E,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),y(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,T,E):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===$e&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===$e&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const T=t.get(d),E=T.envMap,x=T.envMapRotation;E&&(m.envMap.value=E,lr.copy(x),lr.x*=-1,lr.y*=-1,lr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),m.envMapRotation.value.setFromMatrix4(Y0.makeRotationFromEuler(lr)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,T,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*T,m.scale.value=E*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,T){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===$e&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){const T=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function q0(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,E){const x=E.program;i.uniformBlockBinding(T,x)}function l(T,E){let x=r[T.id];x===void 0&&(g(T),x=u(T),r[T.id]=x,T.addEventListener("dispose",m));const A=E.program;i.updateUBOMapping(T,A);const I=t.render.frame;s[T.id]!==I&&(f(T),s[T.id]=I)}function u(T){const E=h();T.__bindingPointIndex=E;const x=n.createBuffer(),A=T.__size,I=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,A,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,x),x}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const E=r[T.id],x=T.uniforms,A=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let I=0,R=x.length;I<R;I++){const N=Array.isArray(x[I])?x[I]:[x[I]];for(let b=0,S=N.length;b<S;b++){const C=N[b];if(p(C,I,b,A)===!0){const X=C.__offset,H=Array.isArray(C.value)?C.value:[C.value];let J=0;for(let Q=0;Q<H.length;Q++){const $=H[Q],tt=y($);typeof $=="number"||typeof $=="boolean"?(C.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,X+J,C.__data)):$.isMatrix3?(C.__data[0]=$.elements[0],C.__data[1]=$.elements[1],C.__data[2]=$.elements[2],C.__data[3]=0,C.__data[4]=$.elements[3],C.__data[5]=$.elements[4],C.__data[6]=$.elements[5],C.__data[7]=0,C.__data[8]=$.elements[6],C.__data[9]=$.elements[7],C.__data[10]=$.elements[8],C.__data[11]=0):($.toArray(C.__data,J),J+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(T,E,x,A){const I=T.value,R=E+"_"+x;if(A[R]===void 0)return typeof I=="number"||typeof I=="boolean"?A[R]=I:A[R]=I.clone(),!0;{const N=A[R];if(typeof I=="number"||typeof I=="boolean"){if(N!==I)return A[R]=I,!0}else if(N.equals(I)===!1)return N.copy(I),!0}return!1}function g(T){const E=T.uniforms;let x=0;const A=16;for(let R=0,N=E.length;R<N;R++){const b=Array.isArray(E[R])?E[R]:[E[R]];for(let S=0,C=b.length;S<C;S++){const X=b[S],H=Array.isArray(X.value)?X.value:[X.value];for(let J=0,Q=H.length;J<Q;J++){const $=H[J],tt=y($),G=x%A,at=G%tt.boundary,ft=G+at;x+=at,ft!==0&&A-ft<tt.storage&&(x+=A-ft),X.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=x,x+=tt.storage}}}const I=x%A;return I>0&&(x+=A-I),T.__size=x,T.__cache={},this}function y(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){const E=T.target;E.removeEventListener("dispose",m);const x=o.indexOf(E.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function d(){for(const T in r)n.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:c,update:l,dispose:d}}class K0{constructor(t={}){const{canvas:e=Bm(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),y=new Int32Array(4);let m=null,d=null;const T=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this.toneMapping=Wi,this.toneMappingExposure=1;const x=this;let A=!1,I=0,R=0,N=null,b=-1,S=null;const C=new Le,X=new Le;let H=null;const J=new re(0);let Q=0,$=e.width,tt=e.height,G=1,at=null,ft=null;const xt=new Le(0,0,$,tt),Wt=new Le(0,0,$,tt);let $t=!1;const j=new Yl;let w=!1,O=!1;const Y=new Re,rt=new Re,st=new z,bt=new Le,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function Kt(){return N===null?G:1}let D=i;function vn(v,P){return e.getContext(v,P)}try{const v={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ol}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",ut,!1),D===null){const P="webgl2";if(D=vn(P,v),D===null)throw vn(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Qt,te,Tt,Ee,wt,M,_,B,K,et,q,Mt,lt,pt,ne,nt,mt,At,It,gt,ee,Xt,xe,L;function ct(){Qt=new ey(D),Qt.init(),Xt=new V0(D,Qt),te=new qv(D,Qt,t,Xt),Tt=new O0(D,Qt),te.reverseDepthBuffer&&f&&Tt.buffers.depth.setReversed(!0),Ee=new ry(D),wt=new b0,M=new z0(D,Qt,Tt,wt,te,Xt,Ee),_=new Zv(x),B=new ty(x),K=new hg(D),xe=new Yv(D,K),et=new ny(D,K,Ee,xe),q=new oy(D,et,K,Ee),It=new sy(D,te,M),nt=new Kv(wt),Mt=new x0(x,_,B,Qt,te,xe,nt),lt=new $0(x,wt),pt=new E0,ne=new C0(Qt),At=new jv(x,_,B,Tt,q,p,c),mt=new F0(x,q,te),L=new q0(D,Ee,te,Tt),gt=new $v(D,Qt,Ee),ee=new iy(D,Qt,Ee),Ee.programs=Mt.programs,x.capabilities=te,x.extensions=Qt,x.properties=wt,x.renderLists=pt,x.shadowMap=mt,x.state=Tt,x.info=Ee}ct();const W=new j0(x,D);this.xr=W,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const v=Qt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Qt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(v){v!==void 0&&(G=v,this.setSize($,tt,!1))},this.getSize=function(v){return v.set($,tt)},this.setSize=function(v,P,V=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=v,tt=P,e.width=Math.floor(v*G),e.height=Math.floor(P*G),V===!0&&(e.style.width=v+"px",e.style.height=P+"px"),this.setViewport(0,0,v,P)},this.getDrawingBufferSize=function(v){return v.set($*G,tt*G).floor()},this.setDrawingBufferSize=function(v,P,V){$=v,tt=P,G=V,e.width=Math.floor(v*V),e.height=Math.floor(P*V),this.setViewport(0,0,v,P)},this.getCurrentViewport=function(v){return v.copy(C)},this.getViewport=function(v){return v.copy(xt)},this.setViewport=function(v,P,V,k){v.isVector4?xt.set(v.x,v.y,v.z,v.w):xt.set(v,P,V,k),Tt.viewport(C.copy(xt).multiplyScalar(G).round())},this.getScissor=function(v){return v.copy(Wt)},this.setScissor=function(v,P,V,k){v.isVector4?Wt.set(v.x,v.y,v.z,v.w):Wt.set(v,P,V,k),Tt.scissor(X.copy(Wt).multiplyScalar(G).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(v){Tt.setScissorTest($t=v)},this.setOpaqueSort=function(v){at=v},this.setTransparentSort=function(v){ft=v},this.getClearColor=function(v){return v.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(v=!0,P=!0,V=!0){let k=0;if(v){let U=!1;if(N!==null){const it=N.texture.format;U=it===Wl||it===Gl||it===Hl}if(U){const it=N.texture.type,ht=it===Ai||it===wr||it===Ws||it===hs||it===Vl||it===kl,vt=At.getClearColor(),yt=At.getClearAlpha(),Ct=vt.r,kt=vt.g,St=vt.b;ht?(g[0]=Ct,g[1]=kt,g[2]=St,g[3]=yt,D.clearBufferuiv(D.COLOR,0,g)):(y[0]=Ct,y[1]=kt,y[2]=St,y[3]=yt,D.clearBufferiv(D.COLOR,0,y))}else k|=D.COLOR_BUFFER_BIT}P&&(k|=D.DEPTH_BUFFER_BIT),V&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),pt.dispose(),ne.dispose(),wt.dispose(),_.dispose(),B.dispose(),q.dispose(),xe.dispose(),L.dispose(),Mt.dispose(),W.dispose(),W.removeEventListener("sessionstart",Au),W.removeEventListener("sessionend",Ru),ir.stop()};function Z(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const v=Ee.autoReset,P=mt.enabled,V=mt.autoUpdate,k=mt.needsUpdate,U=mt.type;ct(),Ee.autoReset=v,mt.enabled=P,mt.autoUpdate=V,mt.needsUpdate=k,mt.type=U}function ut(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Vt(v){const P=v.target;P.removeEventListener("dispose",Vt),De(P)}function De(v){ke(v),wt.remove(v)}function ke(v){const P=wt.get(v).programs;P!==void 0&&(P.forEach(function(V){Mt.releaseProgram(V)}),v.isShaderMaterial&&Mt.releaseShaderCache(v))}this.renderBufferDirect=function(v,P,V,k,U,it){P===null&&(P=qt);const ht=U.isMesh&&U.matrixWorld.determinant()<0,vt=Yp(v,P,V,k,U);Tt.setMaterial(k,ht);let yt=V.index,Ct=1;if(k.wireframe===!0){if(yt=et.getWireframeAttribute(V),yt===void 0)return;Ct=2}const kt=V.drawRange,St=V.attributes.position;let se=kt.start*Ct,be=(kt.start+kt.count)*Ct;it!==null&&(se=Math.max(se,it.start*Ct),be=Math.min(be,(it.start+it.count)*Ct)),yt!==null?(se=Math.max(se,0),be=Math.min(be,yt.count)):St!=null&&(se=Math.max(se,0),be=Math.min(be,St.count));const we=be-se;if(we<0||we===1/0)return;xe.setup(U,k,vt,V,yt);let Ke,le=gt;if(yt!==null&&(Ke=K.get(yt),le=ee,le.setIndex(Ke)),U.isMesh)k.wireframe===!0?(Tt.setLineWidth(k.wireframeLinewidth*Kt()),le.setMode(D.LINES)):le.setMode(D.TRIANGLES);else if(U.isLine){let Et=k.linewidth;Et===void 0&&(Et=1),Tt.setLineWidth(Et*Kt()),U.isLineSegments?le.setMode(D.LINES):U.isLineLoop?le.setMode(D.LINE_LOOP):le.setMode(D.LINE_STRIP)}else U.isPoints?le.setMode(D.POINTS):U.isSprite&&le.setMode(D.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)le.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))le.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Et=U._multiDrawStarts,ci=U._multiDrawCounts,ue=U._multiDrawCount,In=yt?K.get(yt).bytesPerElement:1,Cr=wt.get(k).currentProgram.getUniforms();for(let ln=0;ln<ue;ln++)Cr.setValue(D,"_gl_DrawID",ln),le.render(Et[ln]/In,ci[ln])}else if(U.isInstancedMesh)le.renderInstances(se,we,U.count);else if(V.isInstancedBufferGeometry){const Et=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ci=Math.min(V.instanceCount,Et);le.renderInstances(se,we,ci)}else le.render(se,we)};function ge(v,P,V){v.transparent===!0&&v.side===yi&&v.forceSinglePass===!1?(v.side=$e,v.needsUpdate=!0,mo(v,P,V),v.side=Xi,v.needsUpdate=!0,mo(v,P,V),v.side=yi):mo(v,P,V)}this.compile=function(v,P,V=null){V===null&&(V=v),d=ne.get(V),d.init(P),E.push(d),V.traverseVisible(function(U){U.isLight&&U.layers.test(P.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),v!==V&&v.traverseVisible(function(U){U.isLight&&U.layers.test(P.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();const k=new Set;return v.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const it=U.material;if(it)if(Array.isArray(it))for(let ht=0;ht<it.length;ht++){const vt=it[ht];ge(vt,V,U),k.add(vt)}else ge(it,V,U),k.add(it)}),E.pop(),d=null,k},this.compileAsync=function(v,P,V=null){const k=this.compile(v,P,V);return new Promise(U=>{function it(){if(k.forEach(function(ht){wt.get(ht).currentProgram.isReady()&&k.delete(ht)}),k.size===0){U(v);return}setTimeout(it,10)}Qt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let Rn=null;function ai(v){Rn&&Rn(v)}function Au(){ir.stop()}function Ru(){ir.start()}const ir=new Bd;ir.setAnimationLoop(ai),typeof self<"u"&&ir.setContext(self),this.setAnimationLoop=function(v){Rn=v,W.setAnimationLoop(v),v===null?ir.stop():ir.start()},W.addEventListener("sessionstart",Au),W.addEventListener("sessionend",Ru),this.render=function(v,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(P),P=W.getCamera()),v.isScene===!0&&v.onBeforeRender(x,v,P,N),d=ne.get(v,E.length),d.init(P),E.push(d),rt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),j.setFromProjectionMatrix(rt),O=this.localClippingEnabled,w=nt.init(this.clippingPlanes,O),m=pt.get(v,T.length),m.init(),T.push(m),W.enabled===!0&&W.isPresenting===!0){const it=x.xr.getDepthSensingMesh();it!==null&&ka(it,P,-1/0,x.sortObjects)}ka(v,P,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(at,ft),_t=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,_t&&At.addToRenderList(m,v),this.info.render.frame++,w===!0&&nt.beginShadows();const V=d.state.shadowsArray;mt.render(V,v,P),w===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,U=m.transmissive;if(d.setupLights(),P.isArrayCamera){const it=P.cameras;if(U.length>0)for(let ht=0,vt=it.length;ht<vt;ht++){const yt=it[ht];Cu(k,U,v,yt)}_t&&At.render(v);for(let ht=0,vt=it.length;ht<vt;ht++){const yt=it[ht];Iu(m,v,yt,yt.viewport)}}else U.length>0&&Cu(k,U,v,P),_t&&At.render(v),Iu(m,v,P);N!==null&&(M.updateMultisampleRenderTarget(N),M.updateRenderTargetMipmap(N)),v.isScene===!0&&v.onAfterRender(x,v,P),xe.resetDefaultState(),b=-1,S=null,E.pop(),E.length>0?(d=E[E.length-1],w===!0&&nt.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function ka(v,P,V,k){if(v.visible===!1)return;if(v.layers.test(P.layers)){if(v.isGroup)V=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(P);else if(v.isLight)d.pushLight(v),v.castShadow&&d.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||j.intersectsSprite(v)){k&&bt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(rt);const ht=q.update(v),vt=v.material;vt.visible&&m.push(v,ht,vt,V,bt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||j.intersectsObject(v))){const ht=q.update(v),vt=v.material;if(k&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),bt.copy(v.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),bt.copy(ht.boundingSphere.center)),bt.applyMatrix4(v.matrixWorld).applyMatrix4(rt)),Array.isArray(vt)){const yt=ht.groups;for(let Ct=0,kt=yt.length;Ct<kt;Ct++){const St=yt[Ct],se=vt[St.materialIndex];se&&se.visible&&m.push(v,ht,se,V,bt.z,St)}}else vt.visible&&m.push(v,ht,vt,V,bt.z,null)}}const it=v.children;for(let ht=0,vt=it.length;ht<vt;ht++)ka(it[ht],P,V,k)}function Iu(v,P,V,k){const U=v.opaque,it=v.transmissive,ht=v.transparent;d.setupLightsView(V),w===!0&&nt.setGlobalState(x.clippingPlanes,V),k&&Tt.viewport(C.copy(k)),U.length>0&&po(U,P,V),it.length>0&&po(it,P,V),ht.length>0&&po(ht,P,V),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function Cu(v,P,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[k.id]===void 0&&(d.state.transmissionRenderTarget[k.id]=new Tr(1,1,{generateMipmaps:!0,type:Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float")?Qs:Ai,minFilter:gr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const it=d.state.transmissionRenderTarget[k.id],ht=k.viewport||C;it.setSize(ht.z,ht.w);const vt=x.getRenderTarget();x.setRenderTarget(it),x.getClearColor(J),Q=x.getClearAlpha(),Q<1&&x.setClearColor(16777215,.5),x.clear(),_t&&At.render(V);const yt=x.toneMapping;x.toneMapping=Wi;const Ct=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),d.setupLightsView(k),w===!0&&nt.setGlobalState(x.clippingPlanes,k),po(v,V,k),M.updateMultisampleRenderTarget(it),M.updateRenderTargetMipmap(it),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let St=0,se=P.length;St<se;St++){const be=P[St],we=be.object,Ke=be.geometry,le=be.material,Et=be.group;if(le.side===yi&&we.layers.test(k.layers)){const ci=le.side;le.side=$e,le.needsUpdate=!0,Du(we,V,k,Ke,le,Et),le.side=ci,le.needsUpdate=!0,kt=!0}}kt===!0&&(M.updateMultisampleRenderTarget(it),M.updateRenderTargetMipmap(it))}x.setRenderTarget(vt),x.setClearColor(J,Q),Ct!==void 0&&(k.viewport=Ct),x.toneMapping=yt}function po(v,P,V){const k=P.isScene===!0?P.overrideMaterial:null;for(let U=0,it=v.length;U<it;U++){const ht=v[U],vt=ht.object,yt=ht.geometry,Ct=k===null?ht.material:k,kt=ht.group;vt.layers.test(V.layers)&&Du(vt,P,V,yt,Ct,kt)}}function Du(v,P,V,k,U,it){v.onBeforeRender(x,P,V,k,U,it),v.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(x,P,V,k,v,it),U.transparent===!0&&U.side===yi&&U.forceSinglePass===!1?(U.side=$e,U.needsUpdate=!0,x.renderBufferDirect(V,P,k,U,v,it),U.side=Xi,U.needsUpdate=!0,x.renderBufferDirect(V,P,k,U,v,it),U.side=yi):x.renderBufferDirect(V,P,k,U,v,it),v.onAfterRender(x,P,V,k,U,it)}function mo(v,P,V){P.isScene!==!0&&(P=qt);const k=wt.get(v),U=d.state.lights,it=d.state.shadowsArray,ht=U.state.version,vt=Mt.getParameters(v,U.state,it,P,V),yt=Mt.getProgramCacheKey(vt);let Ct=k.programs;k.environment=v.isMeshStandardMaterial?P.environment:null,k.fog=P.fog,k.envMap=(v.isMeshStandardMaterial?B:_).get(v.envMap||k.environment),k.envMapRotation=k.environment!==null&&v.envMap===null?P.environmentRotation:v.envMapRotation,Ct===void 0&&(v.addEventListener("dispose",Vt),Ct=new Map,k.programs=Ct);let kt=Ct.get(yt);if(kt!==void 0){if(k.currentProgram===kt&&k.lightsStateVersion===ht)return Pu(v,vt),kt}else vt.uniforms=Mt.getUniforms(v),v.onBeforeCompile(vt,x),kt=Mt.acquireProgram(vt,yt),Ct.set(yt,kt),k.uniforms=vt.uniforms;const St=k.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(St.clippingPlanes=nt.uniform),Pu(v,vt),k.needsLights=qp(v),k.lightsStateVersion=ht,k.needsLights&&(St.ambientLightColor.value=U.state.ambient,St.lightProbe.value=U.state.probe,St.directionalLights.value=U.state.directional,St.directionalLightShadows.value=U.state.directionalShadow,St.spotLights.value=U.state.spot,St.spotLightShadows.value=U.state.spotShadow,St.rectAreaLights.value=U.state.rectArea,St.ltc_1.value=U.state.rectAreaLTC1,St.ltc_2.value=U.state.rectAreaLTC2,St.pointLights.value=U.state.point,St.pointLightShadows.value=U.state.pointShadow,St.hemisphereLights.value=U.state.hemi,St.directionalShadowMap.value=U.state.directionalShadowMap,St.directionalShadowMatrix.value=U.state.directionalShadowMatrix,St.spotShadowMap.value=U.state.spotShadowMap,St.spotLightMatrix.value=U.state.spotLightMatrix,St.spotLightMap.value=U.state.spotLightMap,St.pointShadowMap.value=U.state.pointShadowMap,St.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=kt,k.uniformsList=null,kt}function Lu(v){if(v.uniformsList===null){const P=v.currentProgram.getUniforms();v.uniformsList=Yo.seqWithValue(P.seq,v.uniforms)}return v.uniformsList}function Pu(v,P){const V=wt.get(v);V.outputColorSpace=P.outputColorSpace,V.batching=P.batching,V.batchingColor=P.batchingColor,V.instancing=P.instancing,V.instancingColor=P.instancingColor,V.instancingMorph=P.instancingMorph,V.skinning=P.skinning,V.morphTargets=P.morphTargets,V.morphNormals=P.morphNormals,V.morphColors=P.morphColors,V.morphTargetsCount=P.morphTargetsCount,V.numClippingPlanes=P.numClippingPlanes,V.numIntersection=P.numClipIntersection,V.vertexAlphas=P.vertexAlphas,V.vertexTangents=P.vertexTangents,V.toneMapping=P.toneMapping}function Yp(v,P,V,k,U){P.isScene!==!0&&(P=qt),M.resetTextureUnits();const it=P.fog,ht=k.isMeshStandardMaterial?P.environment:null,vt=N===null?x.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:xs,yt=(k.isMeshStandardMaterial?B:_).get(k.envMap||ht),Ct=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,kt=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),St=!!V.morphAttributes.position,se=!!V.morphAttributes.normal,be=!!V.morphAttributes.color;let we=Wi;k.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(we=x.toneMapping);const Ke=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,le=Ke!==void 0?Ke.length:0,Et=wt.get(k),ci=d.state.lights;if(w===!0&&(O===!0||v!==S)){const yn=v===S&&k.id===b;nt.setState(k,v,yn)}let ue=!1;k.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==ci.state.version||Et.outputColorSpace!==vt||U.isBatchedMesh&&Et.batching===!1||!U.isBatchedMesh&&Et.batching===!0||U.isBatchedMesh&&Et.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Et.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Et.instancing===!1||!U.isInstancedMesh&&Et.instancing===!0||U.isSkinnedMesh&&Et.skinning===!1||!U.isSkinnedMesh&&Et.skinning===!0||U.isInstancedMesh&&Et.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Et.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Et.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Et.instancingMorph===!1&&U.morphTexture!==null||Et.envMap!==yt||k.fog===!0&&Et.fog!==it||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==nt.numPlanes||Et.numIntersection!==nt.numIntersection)||Et.vertexAlphas!==Ct||Et.vertexTangents!==kt||Et.morphTargets!==St||Et.morphNormals!==se||Et.morphColors!==be||Et.toneMapping!==we||Et.morphTargetsCount!==le)&&(ue=!0):(ue=!0,Et.__version=k.version);let In=Et.currentProgram;ue===!0&&(In=mo(k,P,U));let Cr=!1,ln=!1,Rs=!1;const Te=In.getUniforms(),Vn=Et.uniforms;if(Tt.useProgram(In.program)&&(Cr=!0,ln=!0,Rs=!0),k.id!==b&&(b=k.id,ln=!0),Cr||S!==v){Tt.buffers.depth.getReversed()?(Y.copy(v.projectionMatrix),Vm(Y),km(Y),Te.setValue(D,"projectionMatrix",Y)):Te.setValue(D,"projectionMatrix",v.projectionMatrix),Te.setValue(D,"viewMatrix",v.matrixWorldInverse);const Di=Te.map.cameraPosition;Di!==void 0&&Di.setValue(D,st.setFromMatrixPosition(v.matrixWorld)),te.logarithmicDepthBuffer&&Te.setValue(D,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Te.setValue(D,"isOrthographic",v.isOrthographicCamera===!0),S!==v&&(S=v,ln=!0,Rs=!0)}if(U.isSkinnedMesh){Te.setOptional(D,U,"bindMatrix"),Te.setOptional(D,U,"bindMatrixInverse");const yn=U.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Te.setValue(D,"boneTexture",yn.boneTexture,M))}U.isBatchedMesh&&(Te.setOptional(D,U,"batchingTexture"),Te.setValue(D,"batchingTexture",U._matricesTexture,M),Te.setOptional(D,U,"batchingIdTexture"),Te.setValue(D,"batchingIdTexture",U._indirectTexture,M),Te.setOptional(D,U,"batchingColorTexture"),U._colorsTexture!==null&&Te.setValue(D,"batchingColorTexture",U._colorsTexture,M));const Is=V.morphAttributes;if((Is.position!==void 0||Is.normal!==void 0||Is.color!==void 0)&&It.update(U,V,In),(ln||Et.receiveShadow!==U.receiveShadow)&&(Et.receiveShadow=U.receiveShadow,Te.setValue(D,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Vn.envMap.value=yt,Vn.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&P.environment!==null&&(Vn.envMapIntensity.value=P.environmentIntensity),ln&&(Te.setValue(D,"toneMappingExposure",x.toneMappingExposure),Et.needsLights&&$p(Vn,Rs),it&&k.fog===!0&&lt.refreshFogUniforms(Vn,it),lt.refreshMaterialUniforms(Vn,k,G,tt,d.state.transmissionRenderTarget[v.id]),Yo.upload(D,Lu(Et),Vn,M)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Yo.upload(D,Lu(Et),Vn,M),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Te.setValue(D,"center",U.center),Te.setValue(D,"modelViewMatrix",U.modelViewMatrix),Te.setValue(D,"normalMatrix",U.normalMatrix),Te.setValue(D,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const yn=k.uniformsGroups;for(let Di=0,Li=yn.length;Di<Li;Di++){const Uu=yn[Di];L.update(Uu,In),L.bind(Uu,In)}}return In}function $p(v,P){v.ambientLightColor.needsUpdate=P,v.lightProbe.needsUpdate=P,v.directionalLights.needsUpdate=P,v.directionalLightShadows.needsUpdate=P,v.pointLights.needsUpdate=P,v.pointLightShadows.needsUpdate=P,v.spotLights.needsUpdate=P,v.spotLightShadows.needsUpdate=P,v.rectAreaLights.needsUpdate=P,v.hemisphereLights.needsUpdate=P}function qp(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(v,P,V){wt.get(v.texture).__webglTexture=P,wt.get(v.depthTexture).__webglTexture=V;const k=wt.get(v);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=V===void 0,k.__autoAllocateDepthBuffer||Qt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,P){const V=wt.get(v);V.__webglFramebuffer=P,V.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(v,P=0,V=0){N=v,I=P,R=V;let k=!0,U=null,it=!1,ht=!1;if(v){const yt=wt.get(v);if(yt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(D.FRAMEBUFFER,null),k=!1;else if(yt.__webglFramebuffer===void 0)M.setupRenderTarget(v);else if(yt.__hasExternalTextures)M.rebindTextures(v,wt.get(v.texture).__webglTexture,wt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const St=v.depthTexture;if(yt.__boundDepthTexture!==St){if(St!==null&&wt.has(St)&&(v.width!==St.image.width||v.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(v)}}const Ct=v.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(ht=!0);const kt=wt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(kt[P])?U=kt[P][V]:U=kt[P],it=!0):v.samples>0&&M.useMultisampledRTT(v)===!1?U=wt.get(v).__webglMultisampledFramebuffer:Array.isArray(kt)?U=kt[V]:U=kt,C.copy(v.viewport),X.copy(v.scissor),H=v.scissorTest}else C.copy(xt).multiplyScalar(G).floor(),X.copy(Wt).multiplyScalar(G).floor(),H=$t;if(Tt.bindFramebuffer(D.FRAMEBUFFER,U)&&k&&Tt.drawBuffers(v,U),Tt.viewport(C),Tt.scissor(X),Tt.setScissorTest(H),it){const yt=wt.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+P,yt.__webglTexture,V)}else if(ht){const yt=wt.get(v.texture),Ct=P||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,yt.__webglTexture,V||0,Ct)}b=-1},this.readRenderTargetPixels=function(v,P,V,k,U,it,ht){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=wt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ht!==void 0&&(vt=vt[ht]),vt){Tt.bindFramebuffer(D.FRAMEBUFFER,vt);try{const yt=v.texture,Ct=yt.format,kt=yt.type;if(!te.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=v.width-k&&V>=0&&V<=v.height-U&&D.readPixels(P,V,k,U,Xt.convert(Ct),Xt.convert(kt),it)}finally{const yt=N!==null?wt.get(N).__webglFramebuffer:null;Tt.bindFramebuffer(D.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(v,P,V,k,U,it,ht){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=wt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ht!==void 0&&(vt=vt[ht]),vt){const yt=v.texture,Ct=yt.format,kt=yt.type;if(!te.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=v.width-k&&V>=0&&V<=v.height-U){Tt.bindFramebuffer(D.FRAMEBUFFER,vt);const St=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,St),D.bufferData(D.PIXEL_PACK_BUFFER,it.byteLength,D.STREAM_READ),D.readPixels(P,V,k,U,Xt.convert(Ct),Xt.convert(kt),0);const se=N!==null?wt.get(N).__webglFramebuffer:null;Tt.bindFramebuffer(D.FRAMEBUFFER,se);const be=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await zm(D,be,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,St),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,it),D.deleteBuffer(St),D.deleteSync(be),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,P=null,V=0){v.isTexture!==!0&&(Os("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,v=arguments[1]);const k=Math.pow(2,-V),U=Math.floor(v.image.width*k),it=Math.floor(v.image.height*k),ht=P!==null?P.x:0,vt=P!==null?P.y:0;M.setTexture2D(v,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,ht,vt,U,it),Tt.unbindTexture()},this.copyTextureToTexture=function(v,P,V=null,k=null,U=0){v.isTexture!==!0&&(Os("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,v=arguments[1],P=arguments[2],U=arguments[3]||0,V=null);let it,ht,vt,yt,Ct,kt,St,se,be;const we=v.isCompressedTexture?v.mipmaps[U]:v.image;V!==null?(it=V.max.x-V.min.x,ht=V.max.y-V.min.y,vt=V.isBox3?V.max.z-V.min.z:1,yt=V.min.x,Ct=V.min.y,kt=V.isBox3?V.min.z:0):(it=we.width,ht=we.height,vt=we.depth||1,yt=0,Ct=0,kt=0),k!==null?(St=k.x,se=k.y,be=k.z):(St=0,se=0,be=0);const Ke=Xt.convert(P.format),le=Xt.convert(P.type);let Et;P.isData3DTexture?(M.setTexture3D(P,0),Et=D.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(M.setTexture2DArray(P,0),Et=D.TEXTURE_2D_ARRAY):(M.setTexture2D(P,0),Et=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,P.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,P.unpackAlignment);const ci=D.getParameter(D.UNPACK_ROW_LENGTH),ue=D.getParameter(D.UNPACK_IMAGE_HEIGHT),In=D.getParameter(D.UNPACK_SKIP_PIXELS),Cr=D.getParameter(D.UNPACK_SKIP_ROWS),ln=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,we.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,we.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,yt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ct),D.pixelStorei(D.UNPACK_SKIP_IMAGES,kt);const Rs=v.isDataArrayTexture||v.isData3DTexture,Te=P.isDataArrayTexture||P.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){const Vn=wt.get(v),Is=wt.get(P),yn=wt.get(Vn.__renderTarget),Di=wt.get(Is.__renderTarget);Tt.bindFramebuffer(D.READ_FRAMEBUFFER,yn.__webglFramebuffer),Tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let Li=0;Li<vt;Li++)Rs&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,wt.get(v).__webglTexture,U,kt+Li),v.isDepthTexture?(Te&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,wt.get(P).__webglTexture,U,be+Li),D.blitFramebuffer(yt,Ct,it,ht,St,se,it,ht,D.DEPTH_BUFFER_BIT,D.NEAREST)):Te?D.copyTexSubImage3D(Et,U,St,se,be+Li,yt,Ct,it,ht):D.copyTexSubImage2D(Et,U,St,se,be+Li,yt,Ct,it,ht);Tt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Te?v.isDataTexture||v.isData3DTexture?D.texSubImage3D(Et,U,St,se,be,it,ht,vt,Ke,le,we.data):P.isCompressedArrayTexture?D.compressedTexSubImage3D(Et,U,St,se,be,it,ht,vt,Ke,we.data):D.texSubImage3D(Et,U,St,se,be,it,ht,vt,Ke,le,we):v.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,U,St,se,it,ht,Ke,le,we.data):v.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,U,St,se,we.width,we.height,Ke,we.data):D.texSubImage2D(D.TEXTURE_2D,U,St,se,it,ht,Ke,le,we);D.pixelStorei(D.UNPACK_ROW_LENGTH,ci),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ue),D.pixelStorei(D.UNPACK_SKIP_PIXELS,In),D.pixelStorei(D.UNPACK_SKIP_ROWS,Cr),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ln),U===0&&P.generateMipmaps&&D.generateMipmap(Et),Tt.unbindTexture()},this.copyTextureToTexture3D=function(v,P,V=null,k=null,U=0){return v.isTexture!==!0&&(Os("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,k=arguments[1]||null,v=arguments[2],P=arguments[3],U=arguments[4]||0),Os('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,P,V,k,U)},this.initRenderTarget=function(v){wt.get(v).__webglFramebuffer===void 0&&M.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?M.setTextureCube(v,0):v.isData3DTexture?M.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?M.setTexture2DArray(v,0):M.setTexture2D(v,0),Tt.unbindTexture()},this.resetState=function(){I=0,R=0,N=null,Tt.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}class Z0 extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Xd extends Ms{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ph=new Re,vl=new Xl,Oo=new Pa,Bo=new z;class J0 extends Ve{constructor(t=new oi,e=new Xd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Oo.copy(i.boundingSphere),Oo.applyMatrix4(r),Oo.radius+=s,t.ray.intersectsSphere(Oo)===!1)return;Ph.copy(r).invert(),vl.copy(t.ray).applyMatrix4(Ph);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,h=i.attributes.position;if(l!==null){const f=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=f,y=p;g<y;g++){const m=l.getX(g);Bo.fromBufferAttribute(h,m),Uh(Bo,m,c,r,t,e,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,y=p;g<y;g++)Bo.fromBufferAttribute(h,g),Uh(Bo,g,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Uh(n,t,e,i,r,s,o){const a=vl.distanceSqToPoint(n);if(a<e){const c=new z;vl.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class ws extends oi{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new z,f=new z,p=[],g=[],y=[],m=[];for(let d=0;d<=i;d++){const T=[],E=d/i;let x=0;d===0&&o===0?x=.5/e:d===i&&c===Math.PI&&(x=-.5/e);for(let A=0;A<=e;A++){const I=A/e;h.x=-t*Math.cos(r+I*s)*Math.sin(o+E*a),h.y=t*Math.cos(o+E*a),h.z=t*Math.sin(r+I*s)*Math.sin(o+E*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),m.push(I+x,1-E),T.push(l++)}u.push(T)}for(let d=0;d<i;d++)for(let T=0;T<e;T++){const E=u[d][T+1],x=u[d][T],A=u[d+1][T],I=u[d+1][T+1];(d!==0||o>0)&&p.push(E,x,I),(d!==i-1||c<Math.PI)&&p.push(x,A,I)}this.setIndex(p),this.setAttribute("position",new On(g,3)),this.setAttribute("normal",new On(y,3)),this.setAttribute("uv",new On(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ws(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Q0 extends Ms{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new re(16777215),this.specular=new re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ad,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=Bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Fh={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class tS{constructor(t,e,i){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const eS=new tS;class ql{constructor(t){this.manager=t!==void 0?t:eS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ql.DEFAULT_MATERIAL_NAME="__DEFAULT";class nS extends ql{constructor(t){super(t)}load(t,e,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Fh.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=Xs("img");function c(){u(),Fh.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(h){u(),r&&r(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class iS extends ql{constructor(t){super(t)}load(t,e,i,r){const s=new qe,o=new nS(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},i,r),s}}class jd extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new re(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const vc=new Re,Nh=new z,Oh=new z;class rS{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yl,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Nh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nh),Oh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Oh),e.updateMatrixWorld(),vc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(vc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class sS extends rS{constructor(){super(new zd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oS extends jd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new sS}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class aS extends jd{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Bh=new Re;class cS{constructor(t,e,i=0,r=1/0){this.ray=new Xl(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new jl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Bh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bh),this}intersectObject(t,e=!0,i=[]){return yl(t,this,i,e),i.sort(zh),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)yl(t[r],this,i,e);return i.sort(zh),i}}function zh(n,t){return n.distance-t.distance}function yl(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)yl(s[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ol}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ol);function Yd(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var yc={exports:{}},he={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vh;function lS(){if(Vh)return he;Vh=1;var n=typeof Symbol=="function"&&Symbol.for,t=n?Symbol.for("react.element"):60103,e=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,r=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,o=n?Symbol.for("react.provider"):60109,a=n?Symbol.for("react.context"):60110,c=n?Symbol.for("react.async_mode"):60111,l=n?Symbol.for("react.concurrent_mode"):60111,u=n?Symbol.for("react.forward_ref"):60112,h=n?Symbol.for("react.suspense"):60113,f=n?Symbol.for("react.suspense_list"):60120,p=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,y=n?Symbol.for("react.block"):60121,m=n?Symbol.for("react.fundamental"):60117,d=n?Symbol.for("react.responder"):60118,T=n?Symbol.for("react.scope"):60119;function E(A){if(typeof A=="object"&&A!==null){var I=A.$$typeof;switch(I){case t:switch(A=A.type,A){case c:case l:case i:case s:case r:case h:return A;default:switch(A=A&&A.$$typeof,A){case a:case u:case g:case p:case o:return A;default:return I}}case e:return I}}}function x(A){return E(A)===l}return he.AsyncMode=c,he.ConcurrentMode=l,he.ContextConsumer=a,he.ContextProvider=o,he.Element=t,he.ForwardRef=u,he.Fragment=i,he.Lazy=g,he.Memo=p,he.Portal=e,he.Profiler=s,he.StrictMode=r,he.Suspense=h,he.isAsyncMode=function(A){return x(A)||E(A)===c},he.isConcurrentMode=x,he.isContextConsumer=function(A){return E(A)===a},he.isContextProvider=function(A){return E(A)===o},he.isElement=function(A){return typeof A=="object"&&A!==null&&A.$$typeof===t},he.isForwardRef=function(A){return E(A)===u},he.isFragment=function(A){return E(A)===i},he.isLazy=function(A){return E(A)===g},he.isMemo=function(A){return E(A)===p},he.isPortal=function(A){return E(A)===e},he.isProfiler=function(A){return E(A)===s},he.isStrictMode=function(A){return E(A)===r},he.isSuspense=function(A){return E(A)===h},he.isValidElementType=function(A){return typeof A=="string"||typeof A=="function"||A===i||A===l||A===s||A===r||A===h||A===f||typeof A=="object"&&A!==null&&(A.$$typeof===g||A.$$typeof===p||A.$$typeof===o||A.$$typeof===a||A.$$typeof===u||A.$$typeof===m||A.$$typeof===d||A.$$typeof===T||A.$$typeof===y)},he.typeOf=E,he}var kh;function uS(){return kh||(kh=1,yc.exports=lS()),yc.exports}var Sc,Hh;function hS(){if(Hh)return Sc;Hh=1;var n=uS(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},e={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},r={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[n.ForwardRef]=i,s[n.Memo]=r;function o(g){return n.isMemo(g)?r:s[g.$$typeof]||t}var a=Object.defineProperty,c=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,f=Object.prototype;function p(g,y,m){if(typeof y!="string"){if(f){var d=h(y);d&&d!==f&&p(g,d,m)}var T=c(y);l&&(T=T.concat(l(y)));for(var E=o(g),x=o(y),A=0;A<T.length;++A){var I=T[A];if(!e[I]&&!(m&&m[I])&&!(x&&x[I])&&!(E&&E[I])){var R=u(y,I);try{a(g,I,R)}catch{}}}}return g}return Sc=p,Sc}var dS=hS();const fS=Yd(dS);var xc={exports:{}},de={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var bc,Gh;function pS(){if(Gh)return bc;Gh=1;var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable;function i(s){if(s==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(s)}function r(){try{if(!Object.assign)return!1;var s=new String("abc");if(s[5]="de",Object.getOwnPropertyNames(s)[0]==="5")return!1;for(var o={},a=0;a<10;a++)o["_"+String.fromCharCode(a)]=a;var c=Object.getOwnPropertyNames(o).map(function(u){return o[u]});if(c.join("")!=="0123456789")return!1;var l={};return"abcdefghijklmnopqrst".split("").forEach(function(u){l[u]=u}),Object.keys(Object.assign({},l)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return bc=r()?Object.assign:function(s,o){for(var a,c=i(s),l,u=1;u<arguments.length;u++){a=Object(arguments[u]);for(var h in a)t.call(a,h)&&(c[h]=a[h]);if(n){l=n(a);for(var f=0;f<l.length;f++)e.call(a,l[f])&&(c[l[f]]=a[l[f]])}}return c},bc}/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wh;function mS(){if(Wh)return de;Wh=1;var n=pS(),t=typeof Symbol=="function"&&Symbol.for,e=t?Symbol.for("react.element"):60103,i=t?Symbol.for("react.portal"):60106,r=t?Symbol.for("react.fragment"):60107,s=t?Symbol.for("react.strict_mode"):60108,o=t?Symbol.for("react.profiler"):60114,a=t?Symbol.for("react.provider"):60109,c=t?Symbol.for("react.context"):60110,l=t?Symbol.for("react.forward_ref"):60112,u=t?Symbol.for("react.suspense"):60113,h=t?Symbol.for("react.memo"):60115,f=t?Symbol.for("react.lazy"):60116,p=typeof Symbol=="function"&&Symbol.iterator;function g(w){for(var O="https://reactjs.org/docs/error-decoder.html?invariant="+w,Y=1;Y<arguments.length;Y++)O+="&args[]="+encodeURIComponent(arguments[Y]);return"Minified React error #"+w+"; visit "+O+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function d(w,O,Y){this.props=w,this.context=O,this.refs=m,this.updater=Y||y}d.prototype.isReactComponent={},d.prototype.setState=function(w,O){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error(g(85));this.updater.enqueueSetState(this,w,O,"setState")},d.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function T(){}T.prototype=d.prototype;function E(w,O,Y){this.props=w,this.context=O,this.refs=m,this.updater=Y||y}var x=E.prototype=new T;x.constructor=E,n(x,d.prototype),x.isPureReactComponent=!0;var A={current:null},I=Object.prototype.hasOwnProperty,R={key:!0,ref:!0,__self:!0,__source:!0};function N(w,O,Y){var rt,st={},bt=null,qt=null;if(O!=null)for(rt in O.ref!==void 0&&(qt=O.ref),O.key!==void 0&&(bt=""+O.key),O)I.call(O,rt)&&!R.hasOwnProperty(rt)&&(st[rt]=O[rt]);var _t=arguments.length-2;if(_t===1)st.children=Y;else if(1<_t){for(var Kt=Array(_t),D=0;D<_t;D++)Kt[D]=arguments[D+2];st.children=Kt}if(w&&w.defaultProps)for(rt in _t=w.defaultProps,_t)st[rt]===void 0&&(st[rt]=_t[rt]);return{$$typeof:e,type:w,key:bt,ref:qt,props:st,_owner:A.current}}function b(w,O){return{$$typeof:e,type:w.type,key:O,ref:w.ref,props:w.props,_owner:w._owner}}function S(w){return typeof w=="object"&&w!==null&&w.$$typeof===e}function C(w){var O={"=":"=0",":":"=2"};return"$"+(""+w).replace(/[=:]/g,function(Y){return O[Y]})}var X=/\/+/g,H=[];function J(w,O,Y,rt){if(H.length){var st=H.pop();return st.result=w,st.keyPrefix=O,st.func=Y,st.context=rt,st.count=0,st}return{result:w,keyPrefix:O,func:Y,context:rt,count:0}}function Q(w){w.result=null,w.keyPrefix=null,w.func=null,w.context=null,w.count=0,10>H.length&&H.push(w)}function $(w,O,Y,rt){var st=typeof w;(st==="undefined"||st==="boolean")&&(w=null);var bt=!1;if(w===null)bt=!0;else switch(st){case"string":case"number":bt=!0;break;case"object":switch(w.$$typeof){case e:case i:bt=!0}}if(bt)return Y(rt,w,O===""?"."+G(w,0):O),1;if(bt=0,O=O===""?".":O+":",Array.isArray(w))for(var qt=0;qt<w.length;qt++){st=w[qt];var _t=O+G(st,qt);bt+=$(st,_t,Y,rt)}else if(w===null||typeof w!="object"?_t=null:(_t=p&&w[p]||w["@@iterator"],_t=typeof _t=="function"?_t:null),typeof _t=="function")for(w=_t.call(w),qt=0;!(st=w.next()).done;)st=st.value,_t=O+G(st,qt++),bt+=$(st,_t,Y,rt);else if(st==="object")throw Y=""+w,Error(g(31,Y==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":Y,""));return bt}function tt(w,O,Y){return w==null?0:$(w,"",O,Y)}function G(w,O){return typeof w=="object"&&w!==null&&w.key!=null?C(w.key):O.toString(36)}function at(w,O){w.func.call(w.context,O,w.count++)}function ft(w,O,Y){var rt=w.result,st=w.keyPrefix;w=w.func.call(w.context,O,w.count++),Array.isArray(w)?xt(w,rt,Y,function(bt){return bt}):w!=null&&(S(w)&&(w=b(w,st+(!w.key||O&&O.key===w.key?"":(""+w.key).replace(X,"$&/")+"/")+Y)),rt.push(w))}function xt(w,O,Y,rt,st){var bt="";Y!=null&&(bt=(""+Y).replace(X,"$&/")+"/"),O=J(O,bt,rt,st),tt(w,ft,O),Q(O)}var Wt={current:null};function $t(){var w=Wt.current;if(w===null)throw Error(g(321));return w}var j={ReactCurrentDispatcher:Wt,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:A,IsSomeRendererActing:{current:!1},assign:n};return de.Children={map:function(w,O,Y){if(w==null)return w;var rt=[];return xt(w,rt,null,O,Y),rt},forEach:function(w,O,Y){if(w==null)return w;O=J(null,null,O,Y),tt(w,at,O),Q(O)},count:function(w){return tt(w,function(){return null},null)},toArray:function(w){var O=[];return xt(w,O,null,function(Y){return Y}),O},only:function(w){if(!S(w))throw Error(g(143));return w}},de.Component=d,de.Fragment=r,de.Profiler=o,de.PureComponent=E,de.StrictMode=s,de.Suspense=u,de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j,de.cloneElement=function(w,O,Y){if(w==null)throw Error(g(267,w));var rt=n({},w.props),st=w.key,bt=w.ref,qt=w._owner;if(O!=null){if(O.ref!==void 0&&(bt=O.ref,qt=A.current),O.key!==void 0&&(st=""+O.key),w.type&&w.type.defaultProps)var _t=w.type.defaultProps;for(Kt in O)I.call(O,Kt)&&!R.hasOwnProperty(Kt)&&(rt[Kt]=O[Kt]===void 0&&_t!==void 0?_t[Kt]:O[Kt])}var Kt=arguments.length-2;if(Kt===1)rt.children=Y;else if(1<Kt){_t=Array(Kt);for(var D=0;D<Kt;D++)_t[D]=arguments[D+2];rt.children=_t}return{$$typeof:e,type:w.type,key:st,ref:bt,props:rt,_owner:qt}},de.createContext=function(w,O){return O===void 0&&(O=null),w={$$typeof:c,_calculateChangedBits:O,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider={$$typeof:a,_context:w},w.Consumer=w},de.createElement=N,de.createFactory=function(w){var O=N.bind(null,w);return O.type=w,O},de.createRef=function(){return{current:null}},de.forwardRef=function(w){return{$$typeof:l,render:w}},de.isValidElement=S,de.lazy=function(w){return{$$typeof:f,_ctor:w,_status:-1,_result:null}},de.memo=function(w,O){return{$$typeof:h,type:w,compare:O===void 0?null:O}},de.useCallback=function(w,O){return $t().useCallback(w,O)},de.useContext=function(w,O){return $t().useContext(w,O)},de.useDebugValue=function(){},de.useEffect=function(w,O){return $t().useEffect(w,O)},de.useImperativeHandle=function(w,O,Y){return $t().useImperativeHandle(w,O,Y)},de.useLayoutEffect=function(w,O){return $t().useLayoutEffect(w,O)},de.useMemo=function(w,O){return $t().useMemo(w,O)},de.useReducer=function(w,O,Y){return $t().useReducer(w,O,Y)},de.useRef=function(w){return $t().useRef(w)},de.useState=function(w){return $t().useState(w)},de.version="16.14.0",de}var Xh;function gS(){return Xh||(Xh=1,xc.exports=mS()),xc.exports}var _S=gS();const jr=Yd(_S);function Rt(n,t,e,i){function r(s){return s instanceof e?s:new e(function(o){o(s)})}return new(e||(e=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(h){o(h)}}function c(u){try{l(i.throw(u))}catch(h){o(h)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,t||[])).next())})}function jh(n){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&n[t],i=0;if(e)return e.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Gt(n){return this instanceof Gt?(this.v=n,this):new Gt(n)}function Jn(n,t,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(n,t||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(p){return function(g){return Promise.resolve(g).then(p,h)}}function a(p,g){i[p]&&(r[p]=function(y){return new Promise(function(m,d){s.push([p,y,m,d])>1||c(p,y)})},g&&(r[p]=g(r[p])))}function c(p,g){try{l(i[p](g))}catch(y){f(s[0][3],y)}}function l(p){p.value instanceof Gt?Promise.resolve(p.value.v).then(u,h):f(s[0][2],p)}function u(p){c("next",p)}function h(p){c("throw",p)}function f(p,g){p(g),s.shift(),s.length&&c(s[0][0],s[0][1])}}function $o(n){var t,e;return t={},i("next"),i("throw",function(r){throw r}),i("return"),t[Symbol.iterator]=function(){return this},t;function i(r,s){t[r]=n[r]?function(o){return(e=!e)?{value:Gt(n[r](o)),done:!1}:s?s(o):o}:s}}function Mr(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=n[Symbol.asyncIterator],e;return t?t.call(n):(n=typeof jh=="function"?jh(n):n[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(s){e[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}const vS=new TextDecoder("utf-8"),Sl=n=>vS.decode(n),yS=new TextEncoder,Kl=n=>yS.encode(n),[dM,SS]=(()=>{const n=()=>{throw new Error("BigInt is not available in this environment")};function t(){throw n()}return t.asIntN=()=>{throw n()},t.asUintN=()=>{throw n()},typeof BigInt<"u"?[BigInt,!0]:[t,!1]})(),[so]=(()=>{const n=()=>{throw new Error("BigInt64Array is not available in this environment")};class t{static get BYTES_PER_ELEMENT(){return 8}static of(){throw n()}static from(){throw n()}constructor(){throw n()}}return typeof BigInt64Array<"u"?[BigInt64Array,!0]:[t,!1]})(),[oo]=(()=>{const n=()=>{throw new Error("BigUint64Array is not available in this environment")};class t{static get BYTES_PER_ELEMENT(){return 8}static of(){throw n()}static from(){throw n()}constructor(){throw n()}}return typeof BigUint64Array<"u"?[BigUint64Array,!0]:[t,!1]})(),xS=n=>typeof n=="number",$d=n=>typeof n=="boolean",Fe=n=>typeof n=="function",on=n=>n!=null&&Object(n)===n,Yi=n=>on(n)&&Fe(n.then),ao=n=>on(n)&&Fe(n[Symbol.iterator]),Ts=n=>on(n)&&Fe(n[Symbol.asyncIterator]),xl=n=>on(n)&&on(n.schema),qd=n=>on(n)&&"done"in n&&"value"in n,Kd=n=>on(n)&&Fe(n.stat)&&xS(n.fd),Zd=n=>on(n)&&Zl(n.body),Na=n=>"_getDOMStream"in n&&"_getNodeStream"in n,bS=n=>on(n)&&Fe(n.abort)&&Fe(n.getWriter)&&!Na(n),Zl=n=>on(n)&&Fe(n.cancel)&&Fe(n.getReader)&&!Na(n),MS=n=>on(n)&&Fe(n.end)&&Fe(n.write)&&$d(n.writable)&&!Na(n),Jd=n=>on(n)&&Fe(n.read)&&Fe(n.pipe)&&$d(n.readable)&&!Na(n),ES=n=>on(n)&&Fe(n.clear)&&Fe(n.bytes)&&Fe(n.position)&&Fe(n.setPosition)&&Fe(n.capacity)&&Fe(n.getBufferIdentifier)&&Fe(n.createLong),Jl=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:ArrayBuffer;function wS(n){const t=n[0]?[n[0]]:[];let e,i,r,s;for(let o,a,c=0,l=0,u=n.length;++c<u;){if(o=t[l],a=n[c],!o||!a||o.buffer!==a.buffer||a.byteOffset<o.byteOffset){a&&(t[++l]=a);continue}if({byteOffset:e,byteLength:r}=o,{byteOffset:i,byteLength:s}=a,e+r<i||i+s<e){a&&(t[++l]=a);continue}t[l]=new Uint8Array(o.buffer,e,i-e+s)}return t}function Yh(n,t,e=0,i=t.byteLength){const r=n.byteLength,s=new Uint8Array(n.buffer,n.byteOffset,r),o=new Uint8Array(t.buffer,t.byteOffset,Math.min(i,r));return s.set(o,e),n}function ii(n,t){const e=wS(n),i=e.reduce((u,h)=>u+h.byteLength,0);let r,s,o,a=0,c=-1;const l=Math.min(t||Number.POSITIVE_INFINITY,i);for(const u=e.length;++c<u;){if(r=e[c],s=r.subarray(0,Math.min(r.length,l-a)),l<=a+s.length){s.length<r.length?e[c]=r.subarray(s.length):s.length===r.length&&c++,o?Yh(o,s,a):o=s;break}Yh(o||(o=new Uint8Array(l)),s,a),a+=s.length}return[o||new Uint8Array(0),e.slice(c),i-(o?o.byteLength:0)]}function ye(n,t){let e=qd(t)?t.value:t;return e instanceof n?n===Uint8Array?new n(e.buffer,e.byteOffset,e.byteLength):e:e?(typeof e=="string"&&(e=Kl(e)),e instanceof ArrayBuffer?new n(e):e instanceof Jl?new n(e):ES(e)?ye(n,e.bytes()):ArrayBuffer.isView(e)?e.byteLength<=0?new n(0):new n(e.buffer,e.byteOffset,e.byteLength/n.BYTES_PER_ELEMENT):n.from(e)):new n(0)}const Fs=n=>ye(Int32Array,n),oe=n=>ye(Uint8Array,n),bl=n=>(n.next(),n);function*TS(n,t){const e=function*(r){yield r},i=typeof t=="string"||ArrayBuffer.isView(t)||t instanceof ArrayBuffer||t instanceof Jl?e(t):ao(t)?t:e(t);return yield*bl((function*(r){let s=null;do s=r.next(yield ye(n,s));while(!s.done)})(i[Symbol.iterator]())),new n}const AS=n=>TS(Uint8Array,n);function Qd(n,t){return Jn(this,arguments,function*(){if(Yi(t))return yield Gt(yield Gt(yield*$o(Mr(Qd(n,yield Gt(t))))));const i=function(o){return Jn(this,arguments,function*(){yield yield Gt(yield Gt(o))})},r=function(o){return Jn(this,arguments,function*(){yield Gt(yield*$o(Mr(bl((function*(a){let c=null;do c=a.next(yield c==null?void 0:c.value);while(!c.done)})(o[Symbol.iterator]())))))})},s=typeof t=="string"||ArrayBuffer.isView(t)||t instanceof ArrayBuffer||t instanceof Jl?i(t):ao(t)?r(t):Ts(t)?t:i(t);return yield Gt(yield*$o(Mr(bl((function(o){return Jn(this,arguments,function*(){let a=null;do a=yield Gt(o.next(yield yield Gt(ye(n,a))));while(!a.done)})})(s[Symbol.asyncIterator]()))))),yield Gt(new n)})}const RS=n=>Qd(Uint8Array,n);function Ql(n,t,e){if(n!==0){e=e.slice(0,t+1);for(let i=-1;++i<=t;)e[i]+=n}return e}function IS(n,t){let e=0;const i=n.length;if(i!==t.length)return!1;if(i>0)do if(n[e]!==t[e])return!1;while(++e<i);return!0}const Mn={fromIterable(n){return zo(CS(n))},fromAsyncIterable(n){return zo(DS(n))},fromDOMStream(n){return zo(LS(n))},fromNodeStream(n){return zo(US(n))},toDOMStream(n,t){throw new Error('"toDOMStream" not available in this environment')},toNodeStream(n,t){throw new Error('"toNodeStream" not available in this environment')}},zo=n=>(n.next(),n);function*CS(n){let t,e=!1,i=[],r,s,o,a=0;function c(){return s==="peek"?ii(i,o)[0]:([r,i,a]=ii(i,o),r)}({cmd:s,size:o}=yield null);const l=AS(n)[Symbol.iterator]();try{do if({done:t,value:r}=Number.isNaN(o-a)?l.next():l.next(o-a),!t&&r.byteLength>0&&(i.push(r),a+=r.byteLength),t||o<=a)do({cmd:s,size:o}=yield c());while(o<a);while(!t)}catch(u){(e=!0)&&typeof l.throw=="function"&&l.throw(u)}finally{e===!1&&typeof l.return=="function"&&l.return(null)}return null}function DS(n){return Jn(this,arguments,function*(){let e,i=!1,r=[],s,o,a,c=0;function l(){return o==="peek"?ii(r,a)[0]:([s,r,c]=ii(r,a),s)}({cmd:o,size:a}=yield yield Gt(null));const u=RS(n)[Symbol.asyncIterator]();try{do if({done:e,value:s}=Number.isNaN(a-c)?yield Gt(u.next()):yield Gt(u.next(a-c)),!e&&s.byteLength>0&&(r.push(s),c+=s.byteLength),e||a<=c)do({cmd:o,size:a}=yield yield Gt(l()));while(a<c);while(!e)}catch(h){(i=!0)&&typeof u.throw=="function"&&(yield Gt(u.throw(h)))}finally{i===!1&&typeof u.return=="function"&&(yield Gt(u.return(new Uint8Array(0))))}return yield Gt(null)})}function LS(n){return Jn(this,arguments,function*(){let e=!1,i=!1,r=[],s,o,a,c=0;function l(){return o==="peek"?ii(r,a)[0]:([s,r,c]=ii(r,a),s)}({cmd:o,size:a}=yield yield Gt(null));const u=new PS(n);try{do if({done:e,value:s}=Number.isNaN(a-c)?yield Gt(u.read()):yield Gt(u.read(a-c)),!e&&s.byteLength>0&&(r.push(oe(s)),c+=s.byteLength),e||a<=c)do({cmd:o,size:a}=yield yield Gt(l()));while(a<c);while(!e)}catch(h){(i=!0)&&(yield Gt(u.cancel(h)))}finally{i===!1?yield Gt(u.cancel()):n.locked&&u.releaseLock()}return yield Gt(null)})}class PS{constructor(t){this.source=t,this.reader=null,this.reader=this.source.getReader(),this.reader.closed.catch(()=>{})}get closed(){return this.reader?this.reader.closed.catch(()=>{}):Promise.resolve()}releaseLock(){this.reader&&this.reader.releaseLock(),this.reader=null}cancel(t){return Rt(this,void 0,void 0,function*(){const{reader:e,source:i}=this;e&&(yield e.cancel(t).catch(()=>{})),i&&i.locked&&this.releaseLock()})}read(t){return Rt(this,void 0,void 0,function*(){if(t===0)return{done:this.reader==null,value:new Uint8Array(0)};const e=yield this.reader.read();return!e.done&&(e.value=oe(e)),e})}}const Mc=(n,t)=>{const e=r=>i([t,r]);let i;return[t,e,new Promise(r=>(i=r)&&n.once(t,e))]};function US(n){return Jn(this,arguments,function*(){const e=[];let i="error",r=!1,s=null,o,a,c=0,l=[],u;function h(){return o==="peek"?ii(l,a)[0]:([u,l,c]=ii(l,a),u)}if({cmd:o,size:a}=yield yield Gt(null),n.isTTY)return yield yield Gt(new Uint8Array(0)),yield Gt(null);try{e[0]=Mc(n,"end"),e[1]=Mc(n,"error");do{if(e[2]=Mc(n,"readable"),[i,s]=yield Gt(Promise.race(e.map(p=>p[2]))),i==="error")break;if((r=i==="end")||(Number.isFinite(a-c)?(u=oe(n.read(a-c)),u.byteLength<a-c&&(u=oe(n.read()))):u=oe(n.read()),u.byteLength>0&&(l.push(u),c+=u.byteLength)),r||a<=c)do({cmd:o,size:a}=yield yield Gt(h()));while(a<c)}while(!r)}finally{yield Gt(f(e,i==="error"?s:null))}return yield Gt(null);function f(p,g){return u=l=null,new Promise((y,m)=>{for(const[d,T]of p)n.off(d,T);try{const d=n.destroy;d&&d.call(n,g),g=void 0}catch(d){g=d||g}finally{g!=null?m(g):y()}})}})}var pn;(function(n){n[n.V1=0]="V1",n[n.V2=1]="V2",n[n.V3=2]="V3",n[n.V4=3]="V4",n[n.V5=4]="V5"})(pn||(pn={}));var gn;(function(n){n[n.Sparse=0]="Sparse",n[n.Dense=1]="Dense"})(gn||(gn={}));var sn;(function(n){n[n.HALF=0]="HALF",n[n.SINGLE=1]="SINGLE",n[n.DOUBLE=2]="DOUBLE"})(sn||(sn={}));var Ri;(function(n){n[n.DAY=0]="DAY",n[n.MILLISECOND=1]="MILLISECOND"})(Ri||(Ri={}));var ae;(function(n){n[n.SECOND=0]="SECOND",n[n.MILLISECOND=1]="MILLISECOND",n[n.MICROSECOND=2]="MICROSECOND",n[n.NANOSECOND=3]="NANOSECOND"})(ae||(ae={}));var $i;(function(n){n[n.YEAR_MONTH=0]="YEAR_MONTH",n[n.DAY_TIME=1]="DAY_TIME",n[n.MONTH_DAY_NANO=2]="MONTH_DAY_NANO"})($i||($i={}));var fe;(function(n){n[n.NONE=0]="NONE",n[n.Schema=1]="Schema",n[n.DictionaryBatch=2]="DictionaryBatch",n[n.RecordBatch=3]="RecordBatch",n[n.Tensor=4]="Tensor",n[n.SparseTensor=5]="SparseTensor"})(fe||(fe={}));var F;(function(n){n[n.NONE=0]="NONE",n[n.Null=1]="Null",n[n.Int=2]="Int",n[n.Float=3]="Float",n[n.Binary=4]="Binary",n[n.Utf8=5]="Utf8",n[n.Bool=6]="Bool",n[n.Decimal=7]="Decimal",n[n.Date=8]="Date",n[n.Time=9]="Time",n[n.Timestamp=10]="Timestamp",n[n.Interval=11]="Interval",n[n.List=12]="List",n[n.Struct=13]="Struct",n[n.Union=14]="Union",n[n.FixedSizeBinary=15]="FixedSizeBinary",n[n.FixedSizeList=16]="FixedSizeList",n[n.Map=17]="Map",n[n.Dictionary=-1]="Dictionary",n[n.Int8=-2]="Int8",n[n.Int16=-3]="Int16",n[n.Int32=-4]="Int32",n[n.Int64=-5]="Int64",n[n.Uint8=-6]="Uint8",n[n.Uint16=-7]="Uint16",n[n.Uint32=-8]="Uint32",n[n.Uint64=-9]="Uint64",n[n.Float16=-10]="Float16",n[n.Float32=-11]="Float32",n[n.Float64=-12]="Float64",n[n.DateDay=-13]="DateDay",n[n.DateMillisecond=-14]="DateMillisecond",n[n.TimestampSecond=-15]="TimestampSecond",n[n.TimestampMillisecond=-16]="TimestampMillisecond",n[n.TimestampMicrosecond=-17]="TimestampMicrosecond",n[n.TimestampNanosecond=-18]="TimestampNanosecond",n[n.TimeSecond=-19]="TimeSecond",n[n.TimeMillisecond=-20]="TimeMillisecond",n[n.TimeMicrosecond=-21]="TimeMicrosecond",n[n.TimeNanosecond=-22]="TimeNanosecond",n[n.DenseUnion=-23]="DenseUnion",n[n.SparseUnion=-24]="SparseUnion",n[n.IntervalDayTime=-25]="IntervalDayTime",n[n.IntervalYearMonth=-26]="IntervalYearMonth"})(F||(F={}));var gi;(function(n){n[n.OFFSET=0]="OFFSET",n[n.DATA=1]="DATA",n[n.VALIDITY=2]="VALIDITY",n[n.TYPE=3]="TYPE"})(gi||(gi={}));const FS=void 0;function js(n){if(n===null)return"null";if(n===FS)return"undefined";switch(typeof n){case"number":return`${n}`;case"bigint":return`${n}`;case"string":return`"${n}"`}return typeof n[Symbol.toPrimitive]=="function"?n[Symbol.toPrimitive]("string"):ArrayBuffer.isView(n)?n instanceof so||n instanceof oo?`[${[...n].map(t=>js(t))}]`:`[${n}]`:ArrayBuffer.isView(n)?`[${n}]`:JSON.stringify(n,(t,e)=>typeof e=="bigint"?`${e}`:e)}const NS=Symbol.for("isArrowBigNum");function zn(n,...t){return t.length===0?Object.setPrototypeOf(ye(this.TypedArray,n),this.constructor.prototype):Object.setPrototypeOf(new this.TypedArray(n,...t),this.constructor.prototype)}zn.prototype[NS]=!0;zn.prototype.toJSON=function(){return`"${Er(this)}"`};zn.prototype.valueOf=function(){return tf(this)};zn.prototype.toString=function(){return Er(this)};zn.prototype[Symbol.toPrimitive]=function(n="default"){switch(n){case"number":return tf(this);case"string":return Er(this);case"default":return Ml(this)}return Er(this)};function is(...n){return zn.apply(this,n)}function rs(...n){return zn.apply(this,n)}function Ys(...n){return zn.apply(this,n)}Object.setPrototypeOf(is.prototype,Object.create(Int32Array.prototype));Object.setPrototypeOf(rs.prototype,Object.create(Uint32Array.prototype));Object.setPrototypeOf(Ys.prototype,Object.create(Uint32Array.prototype));Object.assign(is.prototype,zn.prototype,{constructor:is,signed:!0,TypedArray:Int32Array,BigIntArray:so});Object.assign(rs.prototype,zn.prototype,{constructor:rs,signed:!1,TypedArray:Uint32Array,BigIntArray:oo});Object.assign(Ys.prototype,zn.prototype,{constructor:Ys,signed:!0,TypedArray:Uint32Array,BigIntArray:oo});function tf(n){const{buffer:t,byteOffset:e,length:i,signed:r}=n,s=new oo(t,e,i),o=r&&s[s.length-1]&BigInt(1)<<BigInt(63);let a=BigInt(o?1:0),c=BigInt(0);if(o){for(const l of s)a+=~l*(BigInt(1)<<BigInt(32)*c++);a*=BigInt(-1)}else for(const l of s)a+=l*(BigInt(1)<<BigInt(32)*c++);return a}let Er,Ml;SS?(Ml=(n=>n.byteLength===8?new n.BigIntArray(n.buffer,n.byteOffset,1)[0]:Ec(n)),Er=(n=>n.byteLength===8?`${new n.BigIntArray(n.buffer,n.byteOffset,1)[0]}`:Ec(n))):(Er=Ec,Ml=Er);function Ec(n){let t="";const e=new Uint32Array(2);let i=new Uint16Array(n.buffer,n.byteOffset,n.byteLength/2);const r=new Uint32Array((i=new Uint16Array(i).reverse()).buffer);let s=-1;const o=i.length-1;do{for(e[0]=i[s=0];s<o;)i[s++]=e[1]=e[0]/10,e[0]=(e[0]-e[1]*10<<16)+i[s];i[s]=e[1]=e[0]/10,e[0]=e[0]-e[1]*10,t=`${e[0]}${t}`}while(r[0]||r[1]||r[2]||r[3]);return t??"0"}class tu{static new(t,e){switch(e){case!0:return new is(t);case!1:return new rs(t)}switch(t.constructor){case Int8Array:case Int16Array:case Int32Array:case so:return new is(t)}return t.byteLength===16?new Ys(t):new rs(t)}static signed(t){return new is(t)}static unsigned(t){return new rs(t)}static decimal(t){return new Ys(t)}constructor(t,e){return tu.new(t,e)}}var ef,nf,rf,sf,of,af,cf,lf,uf,hf,df,ff,pf,mf,gf,_f,vf,yf,Sf;class Dt{static isNull(t){return(t==null?void 0:t.typeId)===F.Null}static isInt(t){return(t==null?void 0:t.typeId)===F.Int}static isFloat(t){return(t==null?void 0:t.typeId)===F.Float}static isBinary(t){return(t==null?void 0:t.typeId)===F.Binary}static isUtf8(t){return(t==null?void 0:t.typeId)===F.Utf8}static isBool(t){return(t==null?void 0:t.typeId)===F.Bool}static isDecimal(t){return(t==null?void 0:t.typeId)===F.Decimal}static isDate(t){return(t==null?void 0:t.typeId)===F.Date}static isTime(t){return(t==null?void 0:t.typeId)===F.Time}static isTimestamp(t){return(t==null?void 0:t.typeId)===F.Timestamp}static isInterval(t){return(t==null?void 0:t.typeId)===F.Interval}static isList(t){return(t==null?void 0:t.typeId)===F.List}static isStruct(t){return(t==null?void 0:t.typeId)===F.Struct}static isUnion(t){return(t==null?void 0:t.typeId)===F.Union}static isFixedSizeBinary(t){return(t==null?void 0:t.typeId)===F.FixedSizeBinary}static isFixedSizeList(t){return(t==null?void 0:t.typeId)===F.FixedSizeList}static isMap(t){return(t==null?void 0:t.typeId)===F.Map}static isDictionary(t){return(t==null?void 0:t.typeId)===F.Dictionary}static isDenseUnion(t){return Dt.isUnion(t)&&t.mode===gn.Dense}static isSparseUnion(t){return Dt.isUnion(t)&&t.mode===gn.Sparse}get typeId(){return F.NONE}}ef=Symbol.toStringTag;Dt[ef]=(n=>(n.children=null,n.ArrayType=Array,n[Symbol.toStringTag]="DataType"))(Dt.prototype);let qi=class extends Dt{toString(){return"Null"}get typeId(){return F.Null}};nf=Symbol.toStringTag;qi[nf]=(n=>n[Symbol.toStringTag]="Null")(qi.prototype);class Ki extends Dt{constructor(t,e){super(),this.isSigned=t,this.bitWidth=e}get typeId(){return F.Int}get ArrayType(){switch(this.bitWidth){case 8:return this.isSigned?Int8Array:Uint8Array;case 16:return this.isSigned?Int16Array:Uint16Array;case 32:return this.isSigned?Int32Array:Uint32Array;case 64:return this.isSigned?so:oo}throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`)}toString(){return`${this.isSigned?"I":"Ui"}nt${this.bitWidth}`}}rf=Symbol.toStringTag;Ki[rf]=(n=>(n.isSigned=null,n.bitWidth=null,n[Symbol.toStringTag]="Int"))(Ki.prototype);class $s extends Ki{constructor(){super(!0,32)}get ArrayType(){return Int32Array}}Object.defineProperty($s.prototype,"ArrayType",{value:Int32Array});class qs extends Dt{constructor(t){super(),this.precision=t}get typeId(){return F.Float}get ArrayType(){switch(this.precision){case sn.HALF:return Uint16Array;case sn.SINGLE:return Float32Array;case sn.DOUBLE:return Float64Array}throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`)}toString(){return`Float${this.precision<<5||16}`}}sf=Symbol.toStringTag;qs[sf]=(n=>(n.precision=null,n[Symbol.toStringTag]="Float"))(qs.prototype);let na=class extends Dt{constructor(){super()}get typeId(){return F.Binary}toString(){return"Binary"}};of=Symbol.toStringTag;na[of]=(n=>(n.ArrayType=Uint8Array,n[Symbol.toStringTag]="Binary"))(na.prototype);let ia=class extends Dt{constructor(){super()}get typeId(){return F.Utf8}toString(){return"Utf8"}};af=Symbol.toStringTag;ia[af]=(n=>(n.ArrayType=Uint8Array,n[Symbol.toStringTag]="Utf8"))(ia.prototype);let ra=class extends Dt{constructor(){super()}get typeId(){return F.Bool}toString(){return"Bool"}};cf=Symbol.toStringTag;ra[cf]=(n=>(n.ArrayType=Uint8Array,n[Symbol.toStringTag]="Bool"))(ra.prototype);let sa=class extends Dt{constructor(t,e,i=128){super(),this.scale=t,this.precision=e,this.bitWidth=i}get typeId(){return F.Decimal}toString(){return`Decimal[${this.precision}e${this.scale>0?"+":""}${this.scale}]`}};lf=Symbol.toStringTag;sa[lf]=(n=>(n.scale=null,n.precision=null,n.ArrayType=Uint32Array,n[Symbol.toStringTag]="Decimal"))(sa.prototype);class oa extends Dt{constructor(t){super(),this.unit=t}get typeId(){return F.Date}toString(){return`Date${(this.unit+1)*32}<${Ri[this.unit]}>`}}uf=Symbol.toStringTag;oa[uf]=(n=>(n.unit=null,n.ArrayType=Int32Array,n[Symbol.toStringTag]="Date"))(oa.prototype);class Ks extends Dt{constructor(t,e){super(),this.unit=t,this.bitWidth=e}get typeId(){return F.Time}toString(){return`Time${this.bitWidth}<${ae[this.unit]}>`}get ArrayType(){switch(this.bitWidth){case 32:return Int32Array;case 64:return so}throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`)}}hf=Symbol.toStringTag;Ks[hf]=(n=>(n.unit=null,n.bitWidth=null,n[Symbol.toStringTag]="Time"))(Ks.prototype);class aa extends Dt{constructor(t,e){super(),this.unit=t,this.timezone=e}get typeId(){return F.Timestamp}toString(){return`Timestamp<${ae[this.unit]}${this.timezone?`, ${this.timezone}`:""}>`}}df=Symbol.toStringTag;aa[df]=(n=>(n.unit=null,n.timezone=null,n.ArrayType=Int32Array,n[Symbol.toStringTag]="Timestamp"))(aa.prototype);class ca extends Dt{constructor(t){super(),this.unit=t}get typeId(){return F.Interval}toString(){return`Interval<${$i[this.unit]}>`}}ff=Symbol.toStringTag;ca[ff]=(n=>(n.unit=null,n.ArrayType=Int32Array,n[Symbol.toStringTag]="Interval"))(ca.prototype);let la=class extends Dt{constructor(t){super(),this.children=[t]}get typeId(){return F.List}toString(){return`List<${this.valueType}>`}get valueType(){return this.children[0].type}get valueField(){return this.children[0]}get ArrayType(){return this.valueType.ArrayType}};pf=Symbol.toStringTag;la[pf]=(n=>(n.children=null,n[Symbol.toStringTag]="List"))(la.prototype);class je extends Dt{constructor(t){super(),this.children=t}get typeId(){return F.Struct}toString(){return`Struct<{${this.children.map(t=>`${t.name}:${t.type}`).join(", ")}}>`}}mf=Symbol.toStringTag;je[mf]=(n=>(n.children=null,n[Symbol.toStringTag]="Struct"))(je.prototype);class ua extends Dt{constructor(t,e,i){super(),this.mode=t,this.children=i,this.typeIds=e=Int32Array.from(e),this.typeIdToChildIndex=e.reduce((r,s,o)=>(r[s]=o)&&r||r,Object.create(null))}get typeId(){return F.Union}toString(){return`${this[Symbol.toStringTag]}<${this.children.map(t=>`${t.type}`).join(" | ")}>`}}gf=Symbol.toStringTag;ua[gf]=(n=>(n.mode=null,n.typeIds=null,n.children=null,n.typeIdToChildIndex=null,n.ArrayType=Int8Array,n[Symbol.toStringTag]="Union"))(ua.prototype);let ha=class extends Dt{constructor(t){super(),this.byteWidth=t}get typeId(){return F.FixedSizeBinary}toString(){return`FixedSizeBinary[${this.byteWidth}]`}};_f=Symbol.toStringTag;ha[_f]=(n=>(n.byteWidth=null,n.ArrayType=Uint8Array,n[Symbol.toStringTag]="FixedSizeBinary"))(ha.prototype);let da=class extends Dt{constructor(t,e){super(),this.listSize=t,this.children=[e]}get typeId(){return F.FixedSizeList}get valueType(){return this.children[0].type}get valueField(){return this.children[0]}get ArrayType(){return this.valueType.ArrayType}toString(){return`FixedSizeList[${this.listSize}]<${this.valueType}>`}};vf=Symbol.toStringTag;da[vf]=(n=>(n.children=null,n.listSize=null,n[Symbol.toStringTag]="FixedSizeList"))(da.prototype);class fa extends Dt{constructor(t,e=!1){super(),this.children=[t],this.keysSorted=e}get typeId(){return F.Map}get keyType(){return this.children[0].type.children[0].type}get valueType(){return this.children[0].type.children[1].type}get childType(){return this.children[0].type}toString(){return`Map<{${this.children[0].type.children.map(t=>`${t.name}:${t.type}`).join(", ")}}>`}}yf=Symbol.toStringTag;fa[yf]=(n=>(n.children=null,n.keysSorted=null,n[Symbol.toStringTag]="Map_"))(fa.prototype);const OS=(n=>()=>++n)(-1);class ps extends Dt{constructor(t,e,i,r){super(),this.indices=e,this.dictionary=t,this.isOrdered=r||!1,this.id=i==null?OS():typeof i=="number"?i:i.low}get typeId(){return F.Dictionary}get children(){return this.dictionary.children}get valueType(){return this.dictionary}get ArrayType(){return this.dictionary.ArrayType}toString(){return`Dictionary<${this.indices}, ${this.dictionary}>`}}Sf=Symbol.toStringTag;ps[Sf]=(n=>(n.id=null,n.indices=null,n.isOrdered=null,n.dictionary=null,n[Symbol.toStringTag]="Dictionary"))(ps.prototype);function _i(n){const t=n;switch(n.typeId){case F.Decimal:return n.bitWidth/32;case F.Timestamp:return 2;case F.Date:return 1+t.unit;case F.Interval:return 1+t.unit;case F.FixedSizeList:return t.listSize;case F.FixedSizeBinary:return t.byteWidth;default:return 1}}class Jt{visitMany(t,...e){return t.map((i,r)=>this.visit(i,...e.map(s=>s[r])))}visit(...t){return this.getVisitFn(t[0],!1).apply(this,t)}getVisitFn(t,e=!0){return BS(this,t,e)}getVisitFnByTypeId(t,e=!0){return Yr(this,t,e)}visitNull(t,...e){return null}visitBool(t,...e){return null}visitInt(t,...e){return null}visitFloat(t,...e){return null}visitUtf8(t,...e){return null}visitBinary(t,...e){return null}visitFixedSizeBinary(t,...e){return null}visitDate(t,...e){return null}visitTimestamp(t,...e){return null}visitTime(t,...e){return null}visitDecimal(t,...e){return null}visitList(t,...e){return null}visitStruct(t,...e){return null}visitUnion(t,...e){return null}visitDictionary(t,...e){return null}visitInterval(t,...e){return null}visitFixedSizeList(t,...e){return null}visitMap(t,...e){return null}}function BS(n,t,e=!0){return typeof t=="number"?Yr(n,t,e):typeof t=="string"&&t in F?Yr(n,F[t],e):t&&t instanceof Dt?Yr(n,$h(t),e):t!=null&&t.type&&t.type instanceof Dt?Yr(n,$h(t.type),e):Yr(n,F.NONE,e)}function Yr(n,t,e=!0){let i=null;switch(t){case F.Null:i=n.visitNull;break;case F.Bool:i=n.visitBool;break;case F.Int:i=n.visitInt;break;case F.Int8:i=n.visitInt8||n.visitInt;break;case F.Int16:i=n.visitInt16||n.visitInt;break;case F.Int32:i=n.visitInt32||n.visitInt;break;case F.Int64:i=n.visitInt64||n.visitInt;break;case F.Uint8:i=n.visitUint8||n.visitInt;break;case F.Uint16:i=n.visitUint16||n.visitInt;break;case F.Uint32:i=n.visitUint32||n.visitInt;break;case F.Uint64:i=n.visitUint64||n.visitInt;break;case F.Float:i=n.visitFloat;break;case F.Float16:i=n.visitFloat16||n.visitFloat;break;case F.Float32:i=n.visitFloat32||n.visitFloat;break;case F.Float64:i=n.visitFloat64||n.visitFloat;break;case F.Utf8:i=n.visitUtf8;break;case F.Binary:i=n.visitBinary;break;case F.FixedSizeBinary:i=n.visitFixedSizeBinary;break;case F.Date:i=n.visitDate;break;case F.DateDay:i=n.visitDateDay||n.visitDate;break;case F.DateMillisecond:i=n.visitDateMillisecond||n.visitDate;break;case F.Timestamp:i=n.visitTimestamp;break;case F.TimestampSecond:i=n.visitTimestampSecond||n.visitTimestamp;break;case F.TimestampMillisecond:i=n.visitTimestampMillisecond||n.visitTimestamp;break;case F.TimestampMicrosecond:i=n.visitTimestampMicrosecond||n.visitTimestamp;break;case F.TimestampNanosecond:i=n.visitTimestampNanosecond||n.visitTimestamp;break;case F.Time:i=n.visitTime;break;case F.TimeSecond:i=n.visitTimeSecond||n.visitTime;break;case F.TimeMillisecond:i=n.visitTimeMillisecond||n.visitTime;break;case F.TimeMicrosecond:i=n.visitTimeMicrosecond||n.visitTime;break;case F.TimeNanosecond:i=n.visitTimeNanosecond||n.visitTime;break;case F.Decimal:i=n.visitDecimal;break;case F.List:i=n.visitList;break;case F.Struct:i=n.visitStruct;break;case F.Union:i=n.visitUnion;break;case F.DenseUnion:i=n.visitDenseUnion||n.visitUnion;break;case F.SparseUnion:i=n.visitSparseUnion||n.visitUnion;break;case F.Dictionary:i=n.visitDictionary;break;case F.Interval:i=n.visitInterval;break;case F.IntervalDayTime:i=n.visitIntervalDayTime||n.visitInterval;break;case F.IntervalYearMonth:i=n.visitIntervalYearMonth||n.visitInterval;break;case F.FixedSizeList:i=n.visitFixedSizeList;break;case F.Map:i=n.visitMap;break}if(typeof i=="function")return i;if(!e)return()=>null;throw new Error(`Unrecognized type '${F[t]}'`)}function $h(n){switch(n.typeId){case F.Null:return F.Null;case F.Int:{const{bitWidth:t,isSigned:e}=n;switch(t){case 8:return e?F.Int8:F.Uint8;case 16:return e?F.Int16:F.Uint16;case 32:return e?F.Int32:F.Uint32;case 64:return e?F.Int64:F.Uint64}return F.Int}case F.Float:switch(n.precision){case sn.HALF:return F.Float16;case sn.SINGLE:return F.Float32;case sn.DOUBLE:return F.Float64}return F.Float;case F.Binary:return F.Binary;case F.Utf8:return F.Utf8;case F.Bool:return F.Bool;case F.Decimal:return F.Decimal;case F.Time:switch(n.unit){case ae.SECOND:return F.TimeSecond;case ae.MILLISECOND:return F.TimeMillisecond;case ae.MICROSECOND:return F.TimeMicrosecond;case ae.NANOSECOND:return F.TimeNanosecond}return F.Time;case F.Timestamp:switch(n.unit){case ae.SECOND:return F.TimestampSecond;case ae.MILLISECOND:return F.TimestampMillisecond;case ae.MICROSECOND:return F.TimestampMicrosecond;case ae.NANOSECOND:return F.TimestampNanosecond}return F.Timestamp;case F.Date:switch(n.unit){case Ri.DAY:return F.DateDay;case Ri.MILLISECOND:return F.DateMillisecond}return F.Date;case F.Interval:switch(n.unit){case $i.DAY_TIME:return F.IntervalDayTime;case $i.YEAR_MONTH:return F.IntervalYearMonth}return F.Interval;case F.Map:return F.Map;case F.List:return F.List;case F.Struct:return F.Struct;case F.Union:switch(n.mode){case gn.Dense:return F.DenseUnion;case gn.Sparse:return F.SparseUnion}return F.Union;case F.FixedSizeBinary:return F.FixedSizeBinary;case F.FixedSizeList:return F.FixedSizeList;case F.Dictionary:return F.Dictionary}throw new Error(`Unrecognized type '${F[n.typeId]}'`)}Jt.prototype.visitInt8=null;Jt.prototype.visitInt16=null;Jt.prototype.visitInt32=null;Jt.prototype.visitInt64=null;Jt.prototype.visitUint8=null;Jt.prototype.visitUint16=null;Jt.prototype.visitUint32=null;Jt.prototype.visitUint64=null;Jt.prototype.visitFloat16=null;Jt.prototype.visitFloat32=null;Jt.prototype.visitFloat64=null;Jt.prototype.visitDateDay=null;Jt.prototype.visitDateMillisecond=null;Jt.prototype.visitTimestampSecond=null;Jt.prototype.visitTimestampMillisecond=null;Jt.prototype.visitTimestampMicrosecond=null;Jt.prototype.visitTimestampNanosecond=null;Jt.prototype.visitTimeSecond=null;Jt.prototype.visitTimeMillisecond=null;Jt.prototype.visitTimeMicrosecond=null;Jt.prototype.visitTimeNanosecond=null;Jt.prototype.visitDenseUnion=null;Jt.prototype.visitSparseUnion=null;Jt.prototype.visitIntervalDayTime=null;Jt.prototype.visitIntervalYearMonth=null;const xf=new Float64Array(1),Xr=new Uint32Array(xf.buffer);function bf(n){const t=(n&31744)>>10,e=(n&1023)/1024,i=Math.pow(-1,(n&32768)>>15);switch(t){case 31:return i*(e?Number.NaN:1/0);case 0:return i*(e?6103515625e-14*e:0)}return i*Math.pow(2,t-15)*(1+e)}function zS(n){if(n!==n)return 32256;xf[0]=n;const t=(Xr[1]&2147483648)>>16&65535;let e=Xr[1]&2146435072,i=0;return e>=1089470464?Xr[0]>0?e=31744:(e=(e&2080374784)>>16,i=(Xr[1]&1048575)>>10):e<=1056964608?(i=1048576+(Xr[1]&1048575),i=1048576+(i<<(e>>20)-998)>>21,e=0):(e=e-1056964608>>10,i=(Xr[1]&1048575)+512>>10),t|e|i&65535}class Nt extends Jt{}function zt(n){return(t,e,i)=>{if(t.setValid(e,i!=null))return n(t,e,i)}}const VS=(n,t,e)=>{n[t]=Math.trunc(e/864e5)},eu=(n,t,e)=>{n[t]=Math.trunc(e%4294967296),n[t+1]=Math.trunc(e/4294967296)},kS=(n,t,e)=>{n[t]=Math.trunc(e*1e3%4294967296),n[t+1]=Math.trunc(e*1e3/4294967296)},HS=(n,t,e)=>{n[t]=Math.trunc(e*1e6%4294967296),n[t+1]=Math.trunc(e*1e6/4294967296)},Mf=(n,t,e,i)=>{if(e+1<t.length){const{[e]:r,[e+1]:s}=t;n.set(i.subarray(0,s-r),r)}},GS=({offset:n,values:t},e,i)=>{const r=n+e;i?t[r>>3]|=1<<r%8:t[r>>3]&=~(1<<r%8)},Ii=({values:n},t,e)=>{n[t]=e},nu=({values:n},t,e)=>{n[t]=e},Ef=({values:n},t,e)=>{n[t]=zS(e)},WS=(n,t,e)=>{switch(n.type.precision){case sn.HALF:return Ef(n,t,e);case sn.SINGLE:case sn.DOUBLE:return nu(n,t,e)}},wf=({values:n},t,e)=>{VS(n,t,e.valueOf())},Tf=({values:n},t,e)=>{eu(n,t*2,e.valueOf())},XS=({stride:n,values:t},e,i)=>{t.set(i.subarray(0,n),n*e)},jS=({values:n,valueOffsets:t},e,i)=>Mf(n,t,e,i),YS=({values:n,valueOffsets:t},e,i)=>{Mf(n,t,e,Kl(i))},$S=(n,t,e)=>{n.type.unit===Ri.DAY?wf(n,t,e):Tf(n,t,e)},Af=({values:n},t,e)=>eu(n,t*2,e/1e3),Rf=({values:n},t,e)=>eu(n,t*2,e),If=({values:n},t,e)=>kS(n,t*2,e),Cf=({values:n},t,e)=>HS(n,t*2,e),qS=(n,t,e)=>{switch(n.type.unit){case ae.SECOND:return Af(n,t,e);case ae.MILLISECOND:return Rf(n,t,e);case ae.MICROSECOND:return If(n,t,e);case ae.NANOSECOND:return Cf(n,t,e)}},Df=({values:n},t,e)=>{n[t]=e},Lf=({values:n},t,e)=>{n[t]=e},Pf=({values:n},t,e)=>{n[t]=e},Uf=({values:n},t,e)=>{n[t]=e},KS=(n,t,e)=>{switch(n.type.unit){case ae.SECOND:return Df(n,t,e);case ae.MILLISECOND:return Lf(n,t,e);case ae.MICROSECOND:return Pf(n,t,e);case ae.NANOSECOND:return Uf(n,t,e)}},ZS=({values:n,stride:t},e,i)=>{n.set(i.subarray(0,t),t*e)},JS=(n,t,e)=>{const i=n.children[0],r=n.valueOffsets,s=An.getVisitFn(i);if(Array.isArray(e))for(let o=-1,a=r[t],c=r[t+1];a<c;)s(i,a++,e[++o]);else for(let o=-1,a=r[t],c=r[t+1];a<c;)s(i,a++,e.get(++o))},QS=(n,t,e)=>{const i=n.children[0],{valueOffsets:r}=n,s=An.getVisitFn(i);let{[t]:o,[t+1]:a}=r;const c=e instanceof Map?e.entries():Object.entries(e);for(const l of c)if(s(i,o,l),++o>=a)break},tx=(n,t)=>(e,i,r,s)=>i&&e(i,n,t[s]),ex=(n,t)=>(e,i,r,s)=>i&&e(i,n,t.get(s)),nx=(n,t)=>(e,i,r,s)=>i&&e(i,n,t.get(r.name)),ix=(n,t)=>(e,i,r,s)=>i&&e(i,n,t[r.name]),rx=(n,t,e)=>{const i=n.type.children.map(s=>An.getVisitFn(s.type)),r=e instanceof Map?nx(t,e):e instanceof pe?ex(t,e):Array.isArray(e)?tx(t,e):ix(t,e);n.type.children.forEach((s,o)=>r(i[o],n.children[o],s,o))},sx=(n,t,e)=>{n.type.mode===gn.Dense?Ff(n,t,e):Nf(n,t,e)},Ff=(n,t,e)=>{const i=n.type.typeIdToChildIndex[n.typeIds[t]],r=n.children[i];An.visit(r,n.valueOffsets[t],e)},Nf=(n,t,e)=>{const i=n.type.typeIdToChildIndex[n.typeIds[t]],r=n.children[i];An.visit(r,t,e)},ox=(n,t,e)=>{var i;(i=n.dictionary)===null||i===void 0||i.set(n.values[t],e)},ax=(n,t,e)=>{n.type.unit===$i.DAY_TIME?Of(n,t,e):Bf(n,t,e)},Of=({values:n},t,e)=>{n.set(e.subarray(0,2),2*t)},Bf=({values:n},t,e)=>{n[t]=e[0]*12+e[1]%12},cx=(n,t,e)=>{const{stride:i}=n,r=n.children[0],s=An.getVisitFn(r);if(Array.isArray(e))for(let o=-1,a=t*i;++o<i;)s(r,a+o,e[o]);else for(let o=-1,a=t*i;++o<i;)s(r,a+o,e.get(o))};Nt.prototype.visitBool=zt(GS);Nt.prototype.visitInt=zt(Ii);Nt.prototype.visitInt8=zt(Ii);Nt.prototype.visitInt16=zt(Ii);Nt.prototype.visitInt32=zt(Ii);Nt.prototype.visitInt64=zt(Ii);Nt.prototype.visitUint8=zt(Ii);Nt.prototype.visitUint16=zt(Ii);Nt.prototype.visitUint32=zt(Ii);Nt.prototype.visitUint64=zt(Ii);Nt.prototype.visitFloat=zt(WS);Nt.prototype.visitFloat16=zt(Ef);Nt.prototype.visitFloat32=zt(nu);Nt.prototype.visitFloat64=zt(nu);Nt.prototype.visitUtf8=zt(YS);Nt.prototype.visitBinary=zt(jS);Nt.prototype.visitFixedSizeBinary=zt(XS);Nt.prototype.visitDate=zt($S);Nt.prototype.visitDateDay=zt(wf);Nt.prototype.visitDateMillisecond=zt(Tf);Nt.prototype.visitTimestamp=zt(qS);Nt.prototype.visitTimestampSecond=zt(Af);Nt.prototype.visitTimestampMillisecond=zt(Rf);Nt.prototype.visitTimestampMicrosecond=zt(If);Nt.prototype.visitTimestampNanosecond=zt(Cf);Nt.prototype.visitTime=zt(KS);Nt.prototype.visitTimeSecond=zt(Df);Nt.prototype.visitTimeMillisecond=zt(Lf);Nt.prototype.visitTimeMicrosecond=zt(Pf);Nt.prototype.visitTimeNanosecond=zt(Uf);Nt.prototype.visitDecimal=zt(ZS);Nt.prototype.visitList=zt(JS);Nt.prototype.visitStruct=zt(rx);Nt.prototype.visitUnion=zt(sx);Nt.prototype.visitDenseUnion=zt(Ff);Nt.prototype.visitSparseUnion=zt(Nf);Nt.prototype.visitDictionary=zt(ox);Nt.prototype.visitInterval=zt(ax);Nt.prototype.visitIntervalDayTime=zt(Of);Nt.prototype.visitIntervalYearMonth=zt(Bf);Nt.prototype.visitFixedSizeList=zt(cx);Nt.prototype.visitMap=zt(QS);const An=new Nt,Pn=Symbol.for("parent"),ss=Symbol.for("rowIndex");class iu{constructor(t,e){return this[Pn]=t,this[ss]=e,new Proxy(this,new ux)}toArray(){return Object.values(this.toJSON())}toJSON(){const t=this[ss],e=this[Pn],i=e.type.children,r={};for(let s=-1,o=i.length;++s<o;)r[i[s].name]=an.visit(e.children[s],t);return r}toString(){return`{${[...this].map(([t,e])=>`${js(t)}: ${js(e)}`).join(", ")}}`}[Symbol.for("nodejs.util.inspect.custom")](){return this.toString()}[Symbol.iterator](){return new lx(this[Pn],this[ss])}}class lx{constructor(t,e){this.childIndex=0,this.children=t.children,this.rowIndex=e,this.childFields=t.type.children,this.numChildren=this.childFields.length}[Symbol.iterator](){return this}next(){const t=this.childIndex;return t<this.numChildren?(this.childIndex=t+1,{done:!1,value:[this.childFields[t].name,an.visit(this.children[t],this.rowIndex)]}):{done:!0,value:null}}}Object.defineProperties(iu.prototype,{[Symbol.toStringTag]:{enumerable:!1,configurable:!1,value:"Row"},[Pn]:{writable:!0,enumerable:!1,configurable:!1,value:null},[ss]:{writable:!0,enumerable:!1,configurable:!1,value:-1}});class ux{isExtensible(){return!1}deleteProperty(){return!1}preventExtensions(){return!0}ownKeys(t){return t[Pn].type.children.map(e=>e.name)}has(t,e){return t[Pn].type.children.findIndex(i=>i.name===e)!==-1}getOwnPropertyDescriptor(t,e){if(t[Pn].type.children.findIndex(i=>i.name===e)!==-1)return{writable:!0,enumerable:!0,configurable:!0}}get(t,e){if(Reflect.has(t,e))return t[e];const i=t[Pn].type.children.findIndex(r=>r.name===e);if(i!==-1){const r=an.visit(t[Pn].children[i],t[ss]);return Reflect.set(t,e,r),r}}set(t,e,i){const r=t[Pn].type.children.findIndex(s=>s.name===e);return r!==-1?(An.visit(t[Pn].children[r],t[ss],i),Reflect.set(t,e,i)):Reflect.has(t,e)||typeof e=="symbol"?Reflect.set(t,e,i):!1}}class Lt extends Jt{}function Ot(n){return(t,e)=>t.getValid(e)?n(t,e):null}const hx=(n,t)=>864e5*n[t],ru=(n,t)=>4294967296*n[t+1]+(n[t]>>>0),dx=(n,t)=>4294967296*(n[t+1]/1e3)+(n[t]>>>0)/1e3,fx=(n,t)=>4294967296*(n[t+1]/1e6)+(n[t]>>>0)/1e6,zf=n=>new Date(n),px=(n,t)=>zf(hx(n,t)),mx=(n,t)=>zf(ru(n,t)),gx=(n,t)=>null,Vf=(n,t,e)=>{if(e+1>=t.length)return null;const i=t[e],r=t[e+1];return n.subarray(i,r)},_x=({offset:n,values:t},e)=>{const i=n+e;return(t[i>>3]&1<<i%8)!==0},kf=({values:n},t)=>px(n,t),Hf=({values:n},t)=>mx(n,t*2),tr=({stride:n,values:t},e)=>t[n*e],vx=({stride:n,values:t},e)=>bf(t[n*e]),Gf=({values:n},t)=>n[t],yx=({stride:n,values:t},e)=>t.subarray(n*e,n*(e+1)),Sx=({values:n,valueOffsets:t},e)=>Vf(n,t,e),xx=({values:n,valueOffsets:t},e)=>{const i=Vf(n,t,e);return i!==null?Sl(i):null},bx=({values:n},t)=>n[t],Mx=({type:n,values:t},e)=>n.precision!==sn.HALF?t[e]:bf(t[e]),Ex=(n,t)=>n.type.unit===Ri.DAY?kf(n,t):Hf(n,t),Wf=({values:n},t)=>1e3*ru(n,t*2),Xf=({values:n},t)=>ru(n,t*2),jf=({values:n},t)=>dx(n,t*2),Yf=({values:n},t)=>fx(n,t*2),wx=(n,t)=>{switch(n.type.unit){case ae.SECOND:return Wf(n,t);case ae.MILLISECOND:return Xf(n,t);case ae.MICROSECOND:return jf(n,t);case ae.NANOSECOND:return Yf(n,t)}},$f=({values:n},t)=>n[t],qf=({values:n},t)=>n[t],Kf=({values:n},t)=>n[t],Zf=({values:n},t)=>n[t],Tx=(n,t)=>{switch(n.type.unit){case ae.SECOND:return $f(n,t);case ae.MILLISECOND:return qf(n,t);case ae.MICROSECOND:return Kf(n,t);case ae.NANOSECOND:return Zf(n,t)}},Ax=({values:n,stride:t},e)=>tu.decimal(n.subarray(t*e,t*(e+1))),Rx=(n,t)=>{const{valueOffsets:e,stride:i,children:r}=n,{[t*i]:s,[t*i+1]:o}=e,c=r[0].slice(s,o-s);return new pe([c])},Ix=(n,t)=>{const{valueOffsets:e,children:i}=n,{[t]:r,[t+1]:s}=e,o=i[0];return new su(o.slice(r,s-r))},Cx=(n,t)=>new iu(n,t),Dx=(n,t)=>n.type.mode===gn.Dense?Jf(n,t):Qf(n,t),Jf=(n,t)=>{const e=n.type.typeIdToChildIndex[n.typeIds[t]],i=n.children[e];return an.visit(i,n.valueOffsets[t])},Qf=(n,t)=>{const e=n.type.typeIdToChildIndex[n.typeIds[t]],i=n.children[e];return an.visit(i,t)},Lx=(n,t)=>{var e;return(e=n.dictionary)===null||e===void 0?void 0:e.get(n.values[t])},Px=(n,t)=>n.type.unit===$i.DAY_TIME?tp(n,t):ep(n,t),tp=({values:n},t)=>n.subarray(2*t,2*(t+1)),ep=({values:n},t)=>{const e=n[t],i=new Int32Array(2);return i[0]=Math.trunc(e/12),i[1]=Math.trunc(e%12),i},Ux=(n,t)=>{const{stride:e,children:i}=n,s=i[0].slice(t*e,e);return new pe([s])};Lt.prototype.visitNull=Ot(gx);Lt.prototype.visitBool=Ot(_x);Lt.prototype.visitInt=Ot(bx);Lt.prototype.visitInt8=Ot(tr);Lt.prototype.visitInt16=Ot(tr);Lt.prototype.visitInt32=Ot(tr);Lt.prototype.visitInt64=Ot(Gf);Lt.prototype.visitUint8=Ot(tr);Lt.prototype.visitUint16=Ot(tr);Lt.prototype.visitUint32=Ot(tr);Lt.prototype.visitUint64=Ot(Gf);Lt.prototype.visitFloat=Ot(Mx);Lt.prototype.visitFloat16=Ot(vx);Lt.prototype.visitFloat32=Ot(tr);Lt.prototype.visitFloat64=Ot(tr);Lt.prototype.visitUtf8=Ot(xx);Lt.prototype.visitBinary=Ot(Sx);Lt.prototype.visitFixedSizeBinary=Ot(yx);Lt.prototype.visitDate=Ot(Ex);Lt.prototype.visitDateDay=Ot(kf);Lt.prototype.visitDateMillisecond=Ot(Hf);Lt.prototype.visitTimestamp=Ot(wx);Lt.prototype.visitTimestampSecond=Ot(Wf);Lt.prototype.visitTimestampMillisecond=Ot(Xf);Lt.prototype.visitTimestampMicrosecond=Ot(jf);Lt.prototype.visitTimestampNanosecond=Ot(Yf);Lt.prototype.visitTime=Ot(Tx);Lt.prototype.visitTimeSecond=Ot($f);Lt.prototype.visitTimeMillisecond=Ot(qf);Lt.prototype.visitTimeMicrosecond=Ot(Kf);Lt.prototype.visitTimeNanosecond=Ot(Zf);Lt.prototype.visitDecimal=Ot(Ax);Lt.prototype.visitList=Ot(Rx);Lt.prototype.visitStruct=Ot(Cx);Lt.prototype.visitUnion=Ot(Dx);Lt.prototype.visitDenseUnion=Ot(Jf);Lt.prototype.visitSparseUnion=Ot(Qf);Lt.prototype.visitDictionary=Ot(Lx);Lt.prototype.visitInterval=Ot(Px);Lt.prototype.visitIntervalDayTime=Ot(tp);Lt.prototype.visitIntervalYearMonth=Ot(ep);Lt.prototype.visitFixedSizeList=Ot(Ux);Lt.prototype.visitMap=Ot(Ix);const an=new Lt,Xn=Symbol.for("keys"),os=Symbol.for("vals");class su{constructor(t){return this[Xn]=new pe([t.children[0]]).memoize(),this[os]=t.children[1],new Proxy(this,new Nx)}[Symbol.iterator](){return new Fx(this[Xn],this[os])}get size(){return this[Xn].length}toArray(){return Object.values(this.toJSON())}toJSON(){const t=this[Xn],e=this[os],i={};for(let r=-1,s=t.length;++r<s;)i[t.get(r)]=an.visit(e,r);return i}toString(){return`{${[...this].map(([t,e])=>`${js(t)}: ${js(e)}`).join(", ")}}`}[Symbol.for("nodejs.util.inspect.custom")](){return this.toString()}}class Fx{constructor(t,e){this.keys=t,this.vals=e,this.keyIndex=0,this.numKeys=t.length}[Symbol.iterator](){return this}next(){const t=this.keyIndex;return t===this.numKeys?{done:!0,value:null}:(this.keyIndex++,{done:!1,value:[this.keys.get(t),an.visit(this.vals,t)]})}}class Nx{isExtensible(){return!1}deleteProperty(){return!1}preventExtensions(){return!0}ownKeys(t){return t[Xn].toArray().map(String)}has(t,e){return t[Xn].includes(e)}getOwnPropertyDescriptor(t,e){if(t[Xn].indexOf(e)!==-1)return{writable:!0,enumerable:!0,configurable:!0}}get(t,e){if(Reflect.has(t,e))return t[e];const i=t[Xn].indexOf(e);if(i!==-1){const r=an.visit(Reflect.get(t,os),i);return Reflect.set(t,e,r),r}}set(t,e,i){const r=t[Xn].indexOf(e);return r!==-1?(An.visit(Reflect.get(t,os),r,i),Reflect.set(t,e,i)):Reflect.has(t,e)?Reflect.set(t,e,i):!1}}Object.defineProperties(su.prototype,{[Symbol.toStringTag]:{enumerable:!1,configurable:!1,value:"Row"},[Xn]:{writable:!0,enumerable:!1,configurable:!1,value:null},[os]:{writable:!0,enumerable:!1,configurable:!1,value:null}});let qh;function np(n,t,e,i){const{length:r=0}=n;let s=typeof t!="number"?0:t,o=typeof e!="number"?r:e;return s<0&&(s=(s%r+r)%r),o<0&&(o=(o%r+r)%r),o<s&&(qh=s,s=o,o=qh),o>r&&(o=r),i?i(n,s,o):[s,o]}const Kh=n=>n!==n;function As(n){if(typeof n!=="object"||n===null)return Kh(n)?Kh:e=>e===n;if(n instanceof Date){const e=n.valueOf();return i=>i instanceof Date?i.valueOf()===e:!1}return ArrayBuffer.isView(n)?e=>e?IS(n,e):!1:n instanceof Map?Bx(n):Array.isArray(n)?Ox(n):n instanceof pe?zx(n):Vx(n,!0)}function Ox(n){const t=[];for(let e=-1,i=n.length;++e<i;)t[e]=As(n[e]);return Oa(t)}function Bx(n){let t=-1;const e=[];for(const i of n.values())e[++t]=As(i);return Oa(e)}function zx(n){const t=[];for(let e=-1,i=n.length;++e<i;)t[e]=As(n.get(e));return Oa(t)}function Vx(n,t=!1){const e=Object.keys(n);if(!t&&e.length===0)return()=>!1;const i=[];for(let r=-1,s=e.length;++r<s;)i[r]=As(n[e[r]]);return Oa(i,e)}function Oa(n,t){return e=>{if(!e||typeof e!="object")return!1;switch(e.constructor){case Array:return kx(n,e);case Map:return Zh(n,e,e.keys());case su:case iu:case Object:case void 0:return Zh(n,e,t||Object.keys(e))}return e instanceof pe?Hx(n,e):!1}}function kx(n,t){const e=n.length;if(t.length!==e)return!1;for(let i=-1;++i<e;)if(!n[i](t[i]))return!1;return!0}function Hx(n,t){const e=n.length;if(t.length!==e)return!1;for(let i=-1;++i<e;)if(!n[i](t.get(i)))return!1;return!0}function Zh(n,t,e){const i=e[Symbol.iterator](),r=t instanceof Map?t.keys():Object.keys(t)[Symbol.iterator](),s=t instanceof Map?t.values():Object.values(t)[Symbol.iterator]();let o=0;const a=n.length;let c=s.next(),l=i.next(),u=r.next();for(;o<a&&!l.done&&!u.done&&!c.done&&!(l.value!==u.value||!n[o](c.value));++o,l=i.next(),u=r.next(),c=s.next());return o===a&&l.done&&u.done&&c.done?!0:(i.return&&i.return(),r.return&&r.return(),s.return&&s.return(),!1)}function ip(n,t,e,i){return(e&1<<i)!==0}function Gx(n,t,e,i){return(e&1<<i)>>i}function ou(n,t,e){const i=e.byteLength+7&-8;if(n>0||e.byteLength<i){const r=new Uint8Array(i);return r.set(n%8===0?e.subarray(n>>3):pa(new au(e,n,t,null,ip)).subarray(0,i)),r}return e}function pa(n){const t=[];let e=0,i=0,r=0;for(const o of n)o&&(r|=1<<i),++i===8&&(t[e++]=r,r=i=0);(e===0||i>0)&&(t[e++]=r);const s=new Uint8Array(t.length+7&-8);return s.set(t),s}class au{constructor(t,e,i,r,s){this.bytes=t,this.length=i,this.context=r,this.get=s,this.bit=e%8,this.byteIndex=e>>3,this.byte=t[this.byteIndex++],this.index=0}next(){return this.index<this.length?(this.bit===8&&(this.bit=0,this.byte=this.bytes[this.byteIndex++]),{value:this.get(this.context,this.index++,this.byte,this.bit++)}):{done:!0,value:null}}[Symbol.iterator](){return this}}function El(n,t,e){if(e-t<=0)return 0;if(e-t<8){let s=0;for(const o of new au(n,t,e-t,n,Gx))s+=o;return s}const i=e>>3<<3,r=t+(t%8===0?0:8-t%8);return El(n,t,r)+El(n,i,e)+Wx(n,r>>3,i-r>>3)}function Wx(n,t,e){let i=0,r=Math.trunc(t);const s=new DataView(n.buffer,n.byteOffset,n.byteLength),o=e===void 0?n.byteLength:r+e;for(;o-r>=4;)i+=wc(s.getUint32(r)),r+=4;for(;o-r>=2;)i+=wc(s.getUint16(r)),r+=2;for(;o-r>=1;)i+=wc(s.getUint8(r)),r+=1;return i}function wc(n){let t=Math.trunc(n);return t=t-(t>>>1&1431655765),t=(t&858993459)+(t>>>2&858993459),(t+(t>>>4)&252645135)*16843009>>>24}const Xx=-1;class Me{constructor(t,e,i,r,s,o=[],a){this.type=t,this.children=o,this.dictionary=a,this.offset=Math.floor(Math.max(e||0,0)),this.length=Math.floor(Math.max(i||0,0)),this._nullCount=Math.floor(Math.max(r||0,-1));let c;s instanceof Me?(this.stride=s.stride,this.values=s.values,this.typeIds=s.typeIds,this.nullBitmap=s.nullBitmap,this.valueOffsets=s.valueOffsets):(this.stride=_i(t),s&&((c=s[0])&&(this.valueOffsets=c),(c=s[1])&&(this.values=c),(c=s[2])&&(this.nullBitmap=c),(c=s[3])&&(this.typeIds=c))),this.nullable=this._nullCount!==0&&this.nullBitmap&&this.nullBitmap.byteLength>0}get typeId(){return this.type.typeId}get ArrayType(){return this.type.ArrayType}get buffers(){return[this.valueOffsets,this.values,this.nullBitmap,this.typeIds]}get byteLength(){let t=0;const{valueOffsets:e,values:i,nullBitmap:r,typeIds:s}=this;return e&&(t+=e.byteLength),i&&(t+=i.byteLength),r&&(t+=r.byteLength),s&&(t+=s.byteLength),this.children.reduce((o,a)=>o+a.byteLength,t)}get nullCount(){let t=this._nullCount,e;return t<=Xx&&(e=this.nullBitmap)&&(this._nullCount=t=this.length-El(e,this.offset,this.offset+this.length)),t}getValid(t){if(this.nullable&&this.nullCount>0){const e=this.offset+t;return(this.nullBitmap[e>>3]&1<<e%8)!==0}return!0}setValid(t,e){if(!this.nullable)return e;if(!this.nullBitmap||this.nullBitmap.byteLength<=t>>3){const{nullBitmap:c}=this._changeLengthAndBackfillNullBitmap(this.length);Object.assign(this,{nullBitmap:c,_nullCount:0})}const{nullBitmap:i,offset:r}=this,s=r+t>>3,o=(r+t)%8,a=i[s]>>o&1;return e?a===0&&(i[s]|=1<<o,this._nullCount=this.nullCount+1):a===1&&(i[s]&=~(1<<o),this._nullCount=this.nullCount-1),e}clone(t=this.type,e=this.offset,i=this.length,r=this._nullCount,s=this,o=this.children){return new Me(t,e,i,r,s,o,this.dictionary)}slice(t,e){const{stride:i,typeId:r,children:s}=this,o=+(this._nullCount===0)-1,a=r===16?i:1,c=this._sliceBuffers(t,e,i,r);return this.clone(this.type,this.offset+t,e,o,c,s.length===0||this.valueOffsets?s:this._sliceChildren(s,a*t,a*e))}_changeLengthAndBackfillNullBitmap(t){if(this.typeId===F.Null)return this.clone(this.type,0,t,0);const{length:e,nullCount:i}=this,r=new Uint8Array((t+63&-64)>>3).fill(255,0,e>>3);r[e>>3]=(1<<e-(e&-8))-1,i>0&&r.set(ou(this.offset,e,this.nullBitmap),0);const s=this.buffers;return s[gi.VALIDITY]=r,this.clone(this.type,0,t,i+(t-e),s)}_sliceBuffers(t,e,i,r){let s;const{buffers:o}=this;return(s=o[gi.TYPE])&&(o[gi.TYPE]=s.subarray(t,t+e)),(s=o[gi.OFFSET])&&(o[gi.OFFSET]=s.subarray(t,t+e+1))||(s=o[gi.DATA])&&(o[gi.DATA]=r===6?s:s.subarray(i*t,i*(t+e))),o}_sliceChildren(t,e,i){return t.map(r=>r.slice(e,i))}}Me.prototype.children=Object.freeze([]);class ks extends Jt{visit(t){return this.getVisitFn(t.type).call(this,t)}visitNull(t){const{["type"]:e,["offset"]:i=0,["length"]:r=0}=t;return new Me(e,i,r,0)}visitBool(t){const{["type"]:e,["offset"]:i=0}=t,r=oe(t.nullBitmap),s=ye(e.ArrayType,t.data),{["length"]:o=s.length>>3,["nullCount"]:a=t.nullBitmap?-1:0}=t;return new Me(e,i,o,a,[void 0,s,r])}visitInt(t){const{["type"]:e,["offset"]:i=0}=t,r=oe(t.nullBitmap),s=ye(e.ArrayType,t.data),{["length"]:o=s.length,["nullCount"]:a=t.nullBitmap?-1:0}=t;return new Me(e,i,o,a,[void 0,s,r])}visitFloat(t){const{["type"]:e,["offset"]:i=0}=t,r=oe(t.nullBitmap),s=ye(e.ArrayType,t.data),{["length"]:o=s.length,["nullCount"]:a=t.nullBitmap?-1:0}=t;return new Me(e,i,o,a,[void 0,s,r])}visitUtf8(t){const{["type"]:e,["offset"]:i=0}=t,r=oe(t.data),s=oe(t.nullBitmap),o=Fs(t.valueOffsets),{["length"]:a=o.length-1,["nullCount"]:c=t.nullBitmap?-1:0}=t;return new Me(e,i,a,c,[o,r,s])}visitBinary(t){const{["type"]:e,["offset"]:i=0}=t,r=oe(t.data),s=oe(t.nullBitmap),o=Fs(t.valueOffsets),{["length"]:a=o.length-1,["nullCount"]:c=t.nullBitmap?-1:0}=t;return new Me(e,i,a,c,[o,r,s])}visitFixedSizeBinary(t){const{["type"]:e,["offset"]:i=0}=t,r=oe(t.nullBitmap),s=ye(e.ArrayType,t.data),{["length"]:o=s.length/_i(e),["nullCount"]:a=t.nullBitmap?-1:0}=t;return new Me(e,i,o,a,[void 0,s,r])}visitDate(t){const{["type"]:e,["offset"]:i=0}=t,r=oe(t.nullBitmap),s=ye(e.ArrayType,t.data),{["length"]:o=s.length/_i(e),["nullCount"]:a=t.nullBitmap?-1:0}=t;return new Me(e,i,o,a,[void 0,s,r])}visitTimestamp(t){const{["type"]:e,["offset"]:i=0}=t,r=oe(t.nullBitmap),s=ye(e.ArrayType,t.data),{["length"]:o=s.length/_i(e),["nullCount"]:a=t.nullBitmap?-1:0}=t;return new Me(e,i,o,a,[void 0,s,r])}visitTime(t){const{["type"]:e,["offset"]:i=0}=t,r=oe(t.nullBitmap),s=ye(e.ArrayType,t.data),{["length"]:o=s.length/_i(e),["nullCount"]:a=t.nullBitmap?-1:0}=t;return new Me(e,i,o,a,[void 0,s,r])}visitDecimal(t){const{["type"]:e,["offset"]:i=0}=t,r=oe(t.nullBitmap),s=ye(e.ArrayType,t.data),{["length"]:o=s.length/_i(e),["nullCount"]:a=t.nullBitmap?-1:0}=t;return new Me(e,i,o,a,[void 0,s,r])}visitList(t){const{["type"]:e,["offset"]:i=0,["child"]:r}=t,s=oe(t.nullBitmap),o=Fs(t.valueOffsets),{["length"]:a=o.length-1,["nullCount"]:c=t.nullBitmap?-1:0}=t;return new Me(e,i,a,c,[o,void 0,s],[r])}visitStruct(t){const{["type"]:e,["offset"]:i=0,["children"]:r=[]}=t,s=oe(t.nullBitmap),{length:o=r.reduce((c,{length:l})=>Math.max(c,l),0),nullCount:a=t.nullBitmap?-1:0}=t;return new Me(e,i,o,a,[void 0,void 0,s],r)}visitUnion(t){const{["type"]:e,["offset"]:i=0,["children"]:r=[]}=t,s=oe(t.nullBitmap),o=ye(e.ArrayType,t.typeIds),{["length"]:a=o.length,["nullCount"]:c=t.nullBitmap?-1:0}=t;if(Dt.isSparseUnion(e))return new Me(e,i,a,c,[void 0,void 0,s,o],r);const l=Fs(t.valueOffsets);return new Me(e,i,a,c,[l,void 0,s,o],r)}visitDictionary(t){const{["type"]:e,["offset"]:i=0}=t,r=oe(t.nullBitmap),s=ye(e.indices.ArrayType,t.data),{["dictionary"]:o=new pe([new ks().visit({type:e.dictionary})])}=t,{["length"]:a=s.length,["nullCount"]:c=t.nullBitmap?-1:0}=t;return new Me(e,i,a,c,[void 0,s,r],[],o)}visitInterval(t){const{["type"]:e,["offset"]:i=0}=t,r=oe(t.nullBitmap),s=ye(e.ArrayType,t.data),{["length"]:o=s.length/_i(e),["nullCount"]:a=t.nullBitmap?-1:0}=t;return new Me(e,i,o,a,[void 0,s,r])}visitFixedSizeList(t){const{["type"]:e,["offset"]:i=0,["child"]:r=new ks().visit({type:e.valueType})}=t,s=oe(t.nullBitmap),{["length"]:o=r.length/_i(e),["nullCount"]:a=t.nullBitmap?-1:0}=t;return new Me(e,i,o,a,[void 0,void 0,s],[r])}visitMap(t){const{["type"]:e,["offset"]:i=0,["child"]:r=new ks().visit({type:e.childType})}=t,s=oe(t.nullBitmap),o=Fs(t.valueOffsets),{["length"]:a=o.length-1,["nullCount"]:c=t.nullBitmap?-1:0}=t;return new Me(e,i,a,c,[o,void 0,s],[r])}}function Zt(n){return new ks().visit(n)}class Jh{constructor(t=0,e){this.numChunks=t,this.getChunkIterator=e,this.chunkIndex=0,this.chunkIterator=this.getChunkIterator(0)}next(){for(;this.chunkIndex<this.numChunks;){const t=this.chunkIterator.next();if(!t.done)return t;++this.chunkIndex<this.numChunks&&(this.chunkIterator=this.getChunkIterator(this.chunkIndex))}return{done:!0,value:null}}[Symbol.iterator](){return this}}function rp(n){return n.reduce((t,e)=>t+e.nullCount,0)}function sp(n){return n.reduce((t,e,i)=>(t[i+1]=t[i]+e.length,t),new Uint32Array(n.length+1))}function op(n,t,e,i){const r=[];for(let s=-1,o=n.length;++s<o;){const a=n[s],c=t[s],{length:l}=a;if(c>=i)break;if(e>=c+l)continue;if(c>=e&&c+l<=i){r.push(a);continue}const u=Math.max(0,e-c),h=Math.min(i-c,l);r.push(a.slice(u,h-u))}return r.length===0&&r.push(n[0].slice(0,0)),r}function cu(n,t,e,i){let r=0,s=0,o=t.length-1;do{if(r>=o-1)return e<t[o]?i(n,r,e-t[r]):null;s=r+Math.trunc((o-r)*.5),e<t[s]?o=s:r=s}while(r<o)}function lu(n,t){return n.getValid(t)}function as(n){function t(e,i,r){return n(e[i],r)}return function(e){const i=this.data;return cu(i,this._offsets,e,t)}}function ap(n){let t;function e(i,r,s){return n(i[r],s,t)}return function(i,r){const s=this.data;t=r;const o=cu(s,this._offsets,i,e);return t=void 0,o}}function cp(n){let t;function e(i,r,s){let o=s,a=0,c=0;for(let l=r-1,u=i.length;++l<u;){const h=i[l];if(~(a=n(h,t,o)))return c+a;o=0,c+=h.length}return-1}return function(i,r){t=i;const s=this.data,o=typeof r!="number"?e(s,0,0):cu(s,this._offsets,r,e);return t=void 0,o}}class Pt extends Jt{}function jx(n,t){return t===null&&n.length>0?0:-1}function Yx(n,t){const{nullBitmap:e}=n;if(!e||n.nullCount<=0)return-1;let i=0;for(const r of new au(e,n.offset+(t||0),n.length,e,ip)){if(!r)return i;++i}return-1}function Yt(n,t,e){if(t===void 0)return-1;if(t===null)return Yx(n,e);const i=an.getVisitFn(n),r=As(t);for(let s=(e||0)-1,o=n.length;++s<o;)if(r(i(n,s)))return s;return-1}function lp(n,t,e){const i=an.getVisitFn(n),r=As(t);for(let s=(e||0)-1,o=n.length;++s<o;)if(r(i(n,s)))return s;return-1}Pt.prototype.visitNull=jx;Pt.prototype.visitBool=Yt;Pt.prototype.visitInt=Yt;Pt.prototype.visitInt8=Yt;Pt.prototype.visitInt16=Yt;Pt.prototype.visitInt32=Yt;Pt.prototype.visitInt64=Yt;Pt.prototype.visitUint8=Yt;Pt.prototype.visitUint16=Yt;Pt.prototype.visitUint32=Yt;Pt.prototype.visitUint64=Yt;Pt.prototype.visitFloat=Yt;Pt.prototype.visitFloat16=Yt;Pt.prototype.visitFloat32=Yt;Pt.prototype.visitFloat64=Yt;Pt.prototype.visitUtf8=Yt;Pt.prototype.visitBinary=Yt;Pt.prototype.visitFixedSizeBinary=Yt;Pt.prototype.visitDate=Yt;Pt.prototype.visitDateDay=Yt;Pt.prototype.visitDateMillisecond=Yt;Pt.prototype.visitTimestamp=Yt;Pt.prototype.visitTimestampSecond=Yt;Pt.prototype.visitTimestampMillisecond=Yt;Pt.prototype.visitTimestampMicrosecond=Yt;Pt.prototype.visitTimestampNanosecond=Yt;Pt.prototype.visitTime=Yt;Pt.prototype.visitTimeSecond=Yt;Pt.prototype.visitTimeMillisecond=Yt;Pt.prototype.visitTimeMicrosecond=Yt;Pt.prototype.visitTimeNanosecond=Yt;Pt.prototype.visitDecimal=Yt;Pt.prototype.visitList=Yt;Pt.prototype.visitStruct=Yt;Pt.prototype.visitUnion=Yt;Pt.prototype.visitDenseUnion=lp;Pt.prototype.visitSparseUnion=lp;Pt.prototype.visitDictionary=Yt;Pt.prototype.visitInterval=Yt;Pt.prototype.visitIntervalDayTime=Yt;Pt.prototype.visitIntervalYearMonth=Yt;Pt.prototype.visitFixedSizeList=Yt;Pt.prototype.visitMap=Yt;const ma=new Pt;class Ut extends Jt{}function Bt(n){const{type:t}=n;if(n.nullCount===0&&n.stride===1&&(t.typeId===F.Timestamp||t instanceof Ki&&t.bitWidth!==64||t instanceof Ks&&t.bitWidth!==64||t instanceof qs&&t.precision!==sn.HALF))return new Jh(n.data.length,i=>{const r=n.data[i];return r.values.subarray(0,r.length)[Symbol.iterator]()});let e=0;return new Jh(n.data.length,i=>{const s=n.data[i].length,o=n.slice(e,e+s);return e+=s,new $x(o)})}class $x{constructor(t){this.vector=t,this.index=0}next(){return this.index<this.vector.length?{value:this.vector.get(this.index++)}:{done:!0,value:null}}[Symbol.iterator](){return this}}Ut.prototype.visitNull=Bt;Ut.prototype.visitBool=Bt;Ut.prototype.visitInt=Bt;Ut.prototype.visitInt8=Bt;Ut.prototype.visitInt16=Bt;Ut.prototype.visitInt32=Bt;Ut.prototype.visitInt64=Bt;Ut.prototype.visitUint8=Bt;Ut.prototype.visitUint16=Bt;Ut.prototype.visitUint32=Bt;Ut.prototype.visitUint64=Bt;Ut.prototype.visitFloat=Bt;Ut.prototype.visitFloat16=Bt;Ut.prototype.visitFloat32=Bt;Ut.prototype.visitFloat64=Bt;Ut.prototype.visitUtf8=Bt;Ut.prototype.visitBinary=Bt;Ut.prototype.visitFixedSizeBinary=Bt;Ut.prototype.visitDate=Bt;Ut.prototype.visitDateDay=Bt;Ut.prototype.visitDateMillisecond=Bt;Ut.prototype.visitTimestamp=Bt;Ut.prototype.visitTimestampSecond=Bt;Ut.prototype.visitTimestampMillisecond=Bt;Ut.prototype.visitTimestampMicrosecond=Bt;Ut.prototype.visitTimestampNanosecond=Bt;Ut.prototype.visitTime=Bt;Ut.prototype.visitTimeSecond=Bt;Ut.prototype.visitTimeMillisecond=Bt;Ut.prototype.visitTimeMicrosecond=Bt;Ut.prototype.visitTimeNanosecond=Bt;Ut.prototype.visitDecimal=Bt;Ut.prototype.visitList=Bt;Ut.prototype.visitStruct=Bt;Ut.prototype.visitUnion=Bt;Ut.prototype.visitDenseUnion=Bt;Ut.prototype.visitSparseUnion=Bt;Ut.prototype.visitDictionary=Bt;Ut.prototype.visitInterval=Bt;Ut.prototype.visitIntervalDayTime=Bt;Ut.prototype.visitIntervalYearMonth=Bt;Ut.prototype.visitFixedSizeList=Bt;Ut.prototype.visitMap=Bt;const uu=new Ut,qx=(n,t)=>n+t;class er extends Jt{visitNull(t,e){return 0}visitInt(t,e){return t.type.bitWidth/8}visitFloat(t,e){return t.type.ArrayType.BYTES_PER_ELEMENT}visitBool(t,e){return 1/8}visitDecimal(t,e){return t.type.bitWidth/8}visitDate(t,e){return(t.type.unit+1)*4}visitTime(t,e){return t.type.bitWidth/8}visitTimestamp(t,e){return t.type.unit===ae.SECOND?4:8}visitInterval(t,e){return(t.type.unit+1)*4}visitStruct(t,e){return t.children.reduce((i,r)=>i+ri.visit(r,e),0)}visitFixedSizeBinary(t,e){return t.type.byteWidth}visitMap(t,e){return 8+t.children.reduce((i,r)=>i+ri.visit(r,e),0)}visitDictionary(t,e){var i;return t.type.indices.bitWidth/8+(((i=t.dictionary)===null||i===void 0?void 0:i.getByteLength(t.values[e]))||0)}}const Kx=({valueOffsets:n},t)=>8+(n[t+1]-n[t]),Zx=({valueOffsets:n},t)=>8+(n[t+1]-n[t]),Jx=({valueOffsets:n,stride:t,children:e},i)=>{const r=e[0],{[i*t]:s}=n,{[i*t+1]:o}=n,a=ri.getVisitFn(r.type),c=r.slice(s,o-s);let l=8;for(let u=-1,h=o-s;++u<h;)l+=a(c,u);return l},Qx=({stride:n,children:t},e)=>{const i=t[0],r=i.slice(e*n,n),s=ri.getVisitFn(i.type);let o=0;for(let a=-1,c=r.length;++a<c;)o+=s(r,a);return o},tb=(n,t)=>n.type.mode===gn.Dense?up(n,t):hp(n,t),up=({type:n,children:t,typeIds:e,valueOffsets:i},r)=>{const s=n.typeIdToChildIndex[e[r]];return 8+ri.visit(t[s],i[r])},hp=({children:n},t)=>4+ri.visitMany(n,n.map(()=>t)).reduce(qx,0);er.prototype.visitUtf8=Kx;er.prototype.visitBinary=Zx;er.prototype.visitList=Jx;er.prototype.visitFixedSizeList=Qx;er.prototype.visitUnion=tb;er.prototype.visitDenseUnion=up;er.prototype.visitSparseUnion=hp;const ri=new er;var dp;const fp={},pp={};class pe{constructor(t){var e,i,r;const s=t[0]instanceof pe?t.flatMap(a=>a.data):t;if(s.length===0||s.some(a=>!(a instanceof Me)))throw new TypeError("Vector constructor expects an Array of Data instances.");const o=(e=s[0])===null||e===void 0?void 0:e.type;switch(s.length){case 0:this._offsets=[0];break;case 1:{const{get:a,set:c,indexOf:l,byteLength:u}=fp[o.typeId],h=s[0];this.isValid=f=>lu(h,f),this.get=f=>a(h,f),this.set=(f,p)=>c(h,f,p),this.indexOf=f=>l(h,f),this.getByteLength=f=>u(h,f),this._offsets=[0,h.length];break}default:Object.setPrototypeOf(this,pp[o.typeId]),this._offsets=sp(s);break}this.data=s,this.type=o,this.stride=_i(o),this.numChildren=(r=(i=o.children)===null||i===void 0?void 0:i.length)!==null&&r!==void 0?r:0,this.length=this._offsets[this._offsets.length-1]}get byteLength(){return this._byteLength===-1&&(this._byteLength=this.data.reduce((t,e)=>t+e.byteLength,0)),this._byteLength}get nullCount(){return this._nullCount===-1&&(this._nullCount=rp(this.data)),this._nullCount}get ArrayType(){return this.type.ArrayType}get[Symbol.toStringTag](){return`${this.VectorName}<${this.type[Symbol.toStringTag]}>`}get VectorName(){return`${F[this.type.typeId]}Vector`}isValid(t){return!1}get(t){return null}set(t,e){}indexOf(t,e){return-1}includes(t,e){return this.indexOf(t,e)>0}getByteLength(t){return 0}[Symbol.iterator](){return uu.visit(this)}concat(...t){return new pe(this.data.concat(t.flatMap(e=>e.data).flat(Number.POSITIVE_INFINITY)))}slice(t,e){return new pe(np(this,t,e,({data:i,_offsets:r},s,o)=>op(i,r,s,o)))}toJSON(){return[...this]}toArray(){const{type:t,data:e,length:i,stride:r,ArrayType:s}=this;switch(t.typeId){case F.Int:case F.Float:case F.Decimal:case F.Time:case F.Timestamp:switch(e.length){case 0:return new s;case 1:return e[0].values.subarray(0,i*r);default:return e.reduce((o,{values:a,length:c})=>(o.array.set(a.subarray(0,c*r),o.offset),o.offset+=c*r,o),{array:new s(i*r),offset:0}).array}}return[...this]}toString(){return`[${[...this].join(",")}]`}getChild(t){var e;return this.getChildAt((e=this.type.children)===null||e===void 0?void 0:e.findIndex(i=>i.name===t))}getChildAt(t){return t>-1&&t<this.numChildren?new pe(this.data.map(({children:e})=>e[t])):null}get isMemoized(){return Dt.isDictionary(this.type)?this.data[0].dictionary.isMemoized:!1}memoize(){if(Dt.isDictionary(this.type)){const t=new ga(this.data[0].dictionary),e=this.data.map(i=>{const r=i.clone();return r.dictionary=t,r});return new pe(e)}return new ga(this)}unmemoize(){if(Dt.isDictionary(this.type)&&this.isMemoized){const t=this.data[0].dictionary.unmemoize(),e=this.data.map(i=>{const r=i.clone();return r.dictionary=t,r});return new pe(e)}return this}}dp=Symbol.toStringTag;pe[dp]=(n=>{n.type=Dt.prototype,n.data=[],n.length=0,n.stride=1,n.numChildren=0,n._nullCount=-1,n._byteLength=-1,n._offsets=new Uint32Array([0]),n[Symbol.isConcatSpreadable]=!0;const t=Object.keys(F).map(e=>F[e]).filter(e=>typeof e=="number"&&e!==F.NONE);for(const e of t){const i=an.getVisitFnByTypeId(e),r=An.getVisitFnByTypeId(e),s=ma.getVisitFnByTypeId(e),o=ri.getVisitFnByTypeId(e);fp[e]={get:i,set:r,indexOf:s,byteLength:o},pp[e]=Object.create(n,{isValid:{value:as(lu)},get:{value:as(an.getVisitFnByTypeId(e))},set:{value:ap(An.getVisitFnByTypeId(e))},indexOf:{value:cp(ma.getVisitFnByTypeId(e))},getByteLength:{value:as(ri.getVisitFnByTypeId(e))}})}return"Vector"})(pe.prototype);class ga extends pe{constructor(t){super(t.data);const e=this.get,i=this.set,r=this.slice,s=new Array(this.length);Object.defineProperty(this,"get",{value(o){const a=s[o];if(a!==void 0)return a;const c=e.call(this,o);return s[o]=c,c}}),Object.defineProperty(this,"set",{value(o,a){i.call(this,o,a),s[o]=a}}),Object.defineProperty(this,"slice",{value:(o,a)=>new ga(r.call(this,o,a))}),Object.defineProperty(this,"isMemoized",{value:!0}),Object.defineProperty(this,"unmemoize",{value:()=>new pe(this.data)}),Object.defineProperty(this,"memoize",{value:()=>this})}}class wl{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}offset(){return this.bb.readInt64(this.bb_pos)}metaDataLength(){return this.bb.readInt32(this.bb_pos+8)}bodyLength(){return this.bb.readInt64(this.bb_pos+16)}static sizeOf(){return 24}static createBlock(t,e,i,r){return t.prep(8,24),t.writeInt64(r),t.pad(4),t.writeInt32(i),t.writeInt64(e),t.offset()}}const Tc=2,jn=4,Si=4,Se=4,Vi=new Int32Array(2),Qh=new Float32Array(Vi.buffer),td=new Float64Array(Vi.buffer),Vo=new Uint16Array(new Uint8Array([1,0]).buffer)[0]===1;let wi=class Tl{constructor(t,e){this.low=t|0,this.high=e|0}static create(t,e){return t==0&&e==0?Tl.ZERO:new Tl(t,e)}toFloat64(){return(this.low>>>0)+this.high*4294967296}equals(t){return this.low==t.low&&this.high==t.high}};wi.ZERO=new wi(0,0);var Al;(function(n){n[n.UTF8_BYTES=1]="UTF8_BYTES",n[n.UTF16_STRING=2]="UTF16_STRING"})(Al||(Al={}));let ms=class mp{constructor(t){this.bytes_=t,this.position_=0}static allocate(t){return new mp(new Uint8Array(t))}clear(){this.position_=0}bytes(){return this.bytes_}position(){return this.position_}setPosition(t){this.position_=t}capacity(){return this.bytes_.length}readInt8(t){return this.readUint8(t)<<24>>24}readUint8(t){return this.bytes_[t]}readInt16(t){return this.readUint16(t)<<16>>16}readUint16(t){return this.bytes_[t]|this.bytes_[t+1]<<8}readInt32(t){return this.bytes_[t]|this.bytes_[t+1]<<8|this.bytes_[t+2]<<16|this.bytes_[t+3]<<24}readUint32(t){return this.readInt32(t)>>>0}readInt64(t){return new wi(this.readInt32(t),this.readInt32(t+4))}readUint64(t){return new wi(this.readUint32(t),this.readUint32(t+4))}readFloat32(t){return Vi[0]=this.readInt32(t),Qh[0]}readFloat64(t){return Vi[Vo?0:1]=this.readInt32(t),Vi[Vo?1:0]=this.readInt32(t+4),td[0]}writeInt8(t,e){this.bytes_[t]=e}writeUint8(t,e){this.bytes_[t]=e}writeInt16(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8}writeUint16(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8}writeInt32(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8,this.bytes_[t+2]=e>>16,this.bytes_[t+3]=e>>24}writeUint32(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8,this.bytes_[t+2]=e>>16,this.bytes_[t+3]=e>>24}writeInt64(t,e){this.writeInt32(t,e.low),this.writeInt32(t+4,e.high)}writeUint64(t,e){this.writeUint32(t,e.low),this.writeUint32(t+4,e.high)}writeFloat32(t,e){Qh[0]=e,this.writeInt32(t,Vi[0])}writeFloat64(t,e){td[0]=e,this.writeInt32(t,Vi[Vo?0:1]),this.writeInt32(t+4,Vi[Vo?1:0])}getBufferIdentifier(){if(this.bytes_.length<this.position_+jn+Si)throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");let t="";for(let e=0;e<Si;e++)t+=String.fromCharCode(this.readInt8(this.position_+jn+e));return t}__offset(t,e){const i=t-this.readInt32(t);return e<this.readInt16(i)?this.readInt16(i+e):0}__union(t,e){return t.bb_pos=e+this.readInt32(e),t.bb=this,t}__string(t,e){t+=this.readInt32(t);const i=this.readInt32(t);let r="",s=0;if(t+=jn,e===Al.UTF8_BYTES)return this.bytes_.subarray(t,t+i);for(;s<i;){let o;const a=this.readUint8(t+s++);if(a<192)o=a;else{const c=this.readUint8(t+s++);if(a<224)o=(a&31)<<6|c&63;else{const l=this.readUint8(t+s++);if(a<240)o=(a&15)<<12|(c&63)<<6|l&63;else{const u=this.readUint8(t+s++);o=(a&7)<<18|(c&63)<<12|(l&63)<<6|u&63}}}o<65536?r+=String.fromCharCode(o):(o-=65536,r+=String.fromCharCode((o>>10)+55296,(o&1023)+56320))}return r}__union_with_string(t,e){return typeof t=="string"?this.__string(e):this.__union(t,e)}__indirect(t){return t+this.readInt32(t)}__vector(t){return t+this.readInt32(t)+jn}__vector_len(t){return this.readInt32(t+this.readInt32(t))}__has_identifier(t){if(t.length!=Si)throw new Error("FlatBuffers: file identifier must be length "+Si);for(let e=0;e<Si;e++)if(t.charCodeAt(e)!=this.readInt8(this.position()+jn+e))return!1;return!0}createLong(t,e){return wi.create(t,e)}createScalarList(t,e){const i=[];for(let r=0;r<e;++r)t(r)!==null&&i.push(t(r));return i}createObjList(t,e){const i=[];for(let r=0;r<e;++r){const s=t(r);s!==null&&i.push(s.unpack())}return i}},gp=class _p{constructor(t){this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null;let e;t?e=t:e=1024,this.bb=ms.allocate(e),this.space=e}clear(){this.bb.clear(),this.space=this.bb.capacity(),this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null}forceDefaults(t){this.force_defaults=t}dataBuffer(){return this.bb}asUint8Array(){return this.bb.bytes().subarray(this.bb.position(),this.bb.position()+this.offset())}prep(t,e){t>this.minalign&&(this.minalign=t);const i=~(this.bb.capacity()-this.space+e)+1&t-1;for(;this.space<i+t+e;){const r=this.bb.capacity();this.bb=_p.growByteBuffer(this.bb),this.space+=this.bb.capacity()-r}this.pad(i)}pad(t){for(let e=0;e<t;e++)this.bb.writeInt8(--this.space,0)}writeInt8(t){this.bb.writeInt8(this.space-=1,t)}writeInt16(t){this.bb.writeInt16(this.space-=2,t)}writeInt32(t){this.bb.writeInt32(this.space-=4,t)}writeInt64(t){this.bb.writeInt64(this.space-=8,t)}writeFloat32(t){this.bb.writeFloat32(this.space-=4,t)}writeFloat64(t){this.bb.writeFloat64(this.space-=8,t)}addInt8(t){this.prep(1,0),this.writeInt8(t)}addInt16(t){this.prep(2,0),this.writeInt16(t)}addInt32(t){this.prep(4,0),this.writeInt32(t)}addInt64(t){this.prep(8,0),this.writeInt64(t)}addFloat32(t){this.prep(4,0),this.writeFloat32(t)}addFloat64(t){this.prep(8,0),this.writeFloat64(t)}addFieldInt8(t,e,i){(this.force_defaults||e!=i)&&(this.addInt8(e),this.slot(t))}addFieldInt16(t,e,i){(this.force_defaults||e!=i)&&(this.addInt16(e),this.slot(t))}addFieldInt32(t,e,i){(this.force_defaults||e!=i)&&(this.addInt32(e),this.slot(t))}addFieldInt64(t,e,i){(this.force_defaults||!e.equals(i))&&(this.addInt64(e),this.slot(t))}addFieldFloat32(t,e,i){(this.force_defaults||e!=i)&&(this.addFloat32(e),this.slot(t))}addFieldFloat64(t,e,i){(this.force_defaults||e!=i)&&(this.addFloat64(e),this.slot(t))}addFieldOffset(t,e,i){(this.force_defaults||e!=i)&&(this.addOffset(e),this.slot(t))}addFieldStruct(t,e,i){e!=i&&(this.nested(e),this.slot(t))}nested(t){if(t!=this.offset())throw new Error("FlatBuffers: struct must be serialized inline.")}notNested(){if(this.isNested)throw new Error("FlatBuffers: object serialization must not be nested.")}slot(t){this.vtable!==null&&(this.vtable[t]=this.offset())}offset(){return this.bb.capacity()-this.space}static growByteBuffer(t){const e=t.capacity();if(e&3221225472)throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");const i=e<<1,r=ms.allocate(i);return r.setPosition(i-e),r.bytes().set(t.bytes(),i-e),r}addOffset(t){this.prep(jn,0),this.writeInt32(this.offset()-t+jn)}startObject(t){this.notNested(),this.vtable==null&&(this.vtable=[]),this.vtable_in_use=t;for(let e=0;e<t;e++)this.vtable[e]=0;this.isNested=!0,this.object_start=this.offset()}endObject(){if(this.vtable==null||!this.isNested)throw new Error("FlatBuffers: endObject called without startObject");this.addInt32(0);const t=this.offset();let e=this.vtable_in_use-1;for(;e>=0&&this.vtable[e]==0;e--);const i=e+1;for(;e>=0;e--)this.addInt16(this.vtable[e]!=0?t-this.vtable[e]:0);const r=2;this.addInt16(t-this.object_start);const s=(i+r)*Tc;this.addInt16(s);let o=0;const a=this.space;t:for(e=0;e<this.vtables.length;e++){const c=this.bb.capacity()-this.vtables[e];if(s==this.bb.readInt16(c)){for(let l=Tc;l<s;l+=Tc)if(this.bb.readInt16(a+l)!=this.bb.readInt16(c+l))continue t;o=this.vtables[e];break}}return o?(this.space=this.bb.capacity()-t,this.bb.writeInt32(this.space,o-t)):(this.vtables.push(this.offset()),this.bb.writeInt32(this.bb.capacity()-t,this.offset()-t)),this.isNested=!1,t}finish(t,e,i){const r=i?Se:0;if(e){const s=e;if(this.prep(this.minalign,jn+Si+r),s.length!=Si)throw new Error("FlatBuffers: file identifier must be length "+Si);for(let o=Si-1;o>=0;o--)this.writeInt8(s.charCodeAt(o))}this.prep(this.minalign,jn+r),this.addOffset(t),r&&this.addInt32(this.bb.capacity()-this.space),this.bb.setPosition(this.space)}finishSizePrefixed(t,e){this.finish(t,e,!0)}requiredField(t,e){const i=this.bb.capacity()-t,r=i-this.bb.readInt32(i);if(!(this.bb.readInt16(r+e)!=0))throw new Error("FlatBuffers: field "+e+" must be set")}startVector(t,e,i){this.notNested(),this.vector_num_elems=e,this.prep(jn,t*e),this.prep(i,t*e)}endVector(){return this.writeInt32(this.vector_num_elems),this.offset()}createSharedString(t){if(!t)return 0;if(this.string_maps||(this.string_maps=new Map),this.string_maps.has(t))return this.string_maps.get(t);const e=this.createString(t);return this.string_maps.set(t,e),e}createString(t){if(!t)return 0;let e;if(t instanceof Uint8Array)e=t;else{e=[];let i=0;for(;i<t.length;){let r;const s=t.charCodeAt(i++);if(s<55296||s>=56320)r=s;else{const o=t.charCodeAt(i++);r=(s<<10)+o+-56613888}r<128?e.push(r):(r<2048?e.push(r>>6&31|192):(r<65536?e.push(r>>12&15|224):e.push(r>>18&7|240,r>>12&63|128),e.push(r>>6&63|128)),e.push(r&63|128))}}this.addInt8(0),this.startVector(1,e.length,1),this.bb.setPosition(this.space-=e.length);for(let i=0,r=this.space,s=this.bb.bytes();i<e.length;i++)s[r++]=e[i];return this.endVector()}createLong(t,e){return wi.create(t,e)}createObjectOffset(t){return t===null?0:typeof t=="string"?this.createString(t):t.pack(this)}createObjectOffsetList(t){const e=[];for(let i=0;i<t.length;++i){const r=t[i];if(r!==null)e.push(this.createObjectOffset(r));else throw new Error("FlatBuffers: Argument for createObjectOffsetList cannot contain null.")}return e}createStructOffsetList(t,e){return e(this,t.length),this.createObjectOffsetList(t),this.endVector()}};class Ne{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsKeyValue(t,e){return(e||new Ne).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsKeyValue(t,e){return t.setPosition(t.position()+Se),(e||new Ne).__init(t.readInt32(t.position())+t.position(),t)}key(t){const e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__string(this.bb_pos+e,t):null}value(t){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__string(this.bb_pos+e,t):null}static startKeyValue(t){t.startObject(2)}static addKey(t,e){t.addFieldOffset(0,e,0)}static addValue(t,e){t.addFieldOffset(1,e,0)}static endKeyValue(t){return t.endObject()}static createKeyValue(t,e,i){return Ne.startKeyValue(t),Ne.addKey(t,e),Ne.addValue(t,i),Ne.endKeyValue(t)}}var gs;(function(n){n[n.V1=0]="V1",n[n.V2=1]="V2",n[n.V3=2]="V3",n[n.V4=3]="V4",n[n.V5=4]="V5"})(gs||(gs={}));var _s;(function(n){n[n.Little=0]="Little",n[n.Big=1]="Big"})(_s||(_s={}));var _a;(function(n){n[n.DenseArray=0]="DenseArray"})(_a||(_a={}));class fn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsInt(t,e){return(e||new fn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsInt(t,e){return t.setPosition(t.position()+Se),(e||new fn).__init(t.readInt32(t.position())+t.position(),t)}bitWidth(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}isSigned(){const t=this.bb.__offset(this.bb_pos,6);return t?!!this.bb.readInt8(this.bb_pos+t):!1}static startInt(t){t.startObject(2)}static addBitWidth(t,e){t.addFieldInt32(0,e,0)}static addIsSigned(t,e){t.addFieldInt8(1,+e,0)}static endInt(t){return t.endObject()}static createInt(t,e,i){return fn.startInt(t),fn.addBitWidth(t,e),fn.addIsSigned(t,i),fn.endInt(t)}}class xi{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDictionaryEncoding(t,e){return(e||new xi).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDictionaryEncoding(t,e){return t.setPosition(t.position()+Se),(e||new xi).__init(t.readInt32(t.position())+t.position(),t)}id(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt64(this.bb_pos+t):this.bb.createLong(0,0)}indexType(t){const e=this.bb.__offset(this.bb_pos,6);return e?(t||new fn).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}isOrdered(){const t=this.bb.__offset(this.bb_pos,8);return t?!!this.bb.readInt8(this.bb_pos+t):!1}dictionaryKind(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.readInt16(this.bb_pos+t):_a.DenseArray}static startDictionaryEncoding(t){t.startObject(4)}static addId(t,e){t.addFieldInt64(0,e,t.createLong(0,0))}static addIndexType(t,e){t.addFieldOffset(1,e,0)}static addIsOrdered(t,e){t.addFieldInt8(2,+e,0)}static addDictionaryKind(t,e){t.addFieldInt16(3,e,_a.DenseArray)}static endDictionaryEncoding(t){return t.endObject()}}class _r{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsBinary(t,e){return(e||new _r).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsBinary(t,e){return t.setPosition(t.position()+Se),(e||new _r).__init(t.readInt32(t.position())+t.position(),t)}static startBinary(t){t.startObject(0)}static endBinary(t){return t.endObject()}static createBinary(t){return _r.startBinary(t),_r.endBinary(t)}}class vr{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsBool(t,e){return(e||new vr).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsBool(t,e){return t.setPosition(t.position()+Se),(e||new vr).__init(t.readInt32(t.position())+t.position(),t)}static startBool(t){t.startObject(0)}static endBool(t){return t.endObject()}static createBool(t){return vr.startBool(t),vr.endBool(t)}}var va;(function(n){n[n.DAY=0]="DAY",n[n.MILLISECOND=1]="MILLISECOND"})(va||(va={}));let qo=class $r{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDate(t,e){return(e||new $r).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDate(t,e){return t.setPosition(t.position()+Se),(e||new $r).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):va.MILLISECOND}static startDate(t){t.startObject(1)}static addUnit(t,e){t.addFieldInt16(0,e,va.MILLISECOND)}static endDate(t){return t.endObject()}static createDate(t,e){return $r.startDate(t),$r.addUnit(t,e),$r.endDate(t)}};class Qe{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDecimal(t,e){return(e||new Qe).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDecimal(t,e){return t.setPosition(t.position()+Se),(e||new Qe).__init(t.readInt32(t.position())+t.position(),t)}precision(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}scale(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readInt32(this.bb_pos+t):0}bitWidth(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.readInt32(this.bb_pos+t):128}static startDecimal(t){t.startObject(3)}static addPrecision(t,e){t.addFieldInt32(0,e,0)}static addScale(t,e){t.addFieldInt32(1,e,0)}static addBitWidth(t,e){t.addFieldInt32(2,e,128)}static endDecimal(t){return t.endObject()}static createDecimal(t,e,i,r){return Qe.startDecimal(t),Qe.addPrecision(t,e),Qe.addScale(t,i),Qe.addBitWidth(t,r),Qe.endDecimal(t)}}var vs;(function(n){n[n.SECOND=0]="SECOND",n[n.MILLISECOND=1]="MILLISECOND",n[n.MICROSECOND=2]="MICROSECOND",n[n.NANOSECOND=3]="NANOSECOND"})(vs||(vs={}));class Yn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFixedSizeBinary(t,e){return(e||new Yn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFixedSizeBinary(t,e){return t.setPosition(t.position()+Se),(e||new Yn).__init(t.readInt32(t.position())+t.position(),t)}byteWidth(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}static startFixedSizeBinary(t){t.startObject(1)}static addByteWidth(t,e){t.addFieldInt32(0,e,0)}static endFixedSizeBinary(t){return t.endObject()}static createFixedSizeBinary(t,e){return Yn.startFixedSizeBinary(t),Yn.addByteWidth(t,e),Yn.endFixedSizeBinary(t)}}class $n{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFixedSizeList(t,e){return(e||new $n).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFixedSizeList(t,e){return t.setPosition(t.position()+Se),(e||new $n).__init(t.readInt32(t.position())+t.position(),t)}listSize(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}static startFixedSizeList(t){t.startObject(1)}static addListSize(t,e){t.addFieldInt32(0,e,0)}static endFixedSizeList(t){return t.endObject()}static createFixedSizeList(t,e){return $n.startFixedSizeList(t),$n.addListSize(t,e),$n.endFixedSizeList(t)}}var ya;(function(n){n[n.HALF=0]="HALF",n[n.SINGLE=1]="SINGLE",n[n.DOUBLE=2]="DOUBLE"})(ya||(ya={}));class qn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFloatingPoint(t,e){return(e||new qn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFloatingPoint(t,e){return t.setPosition(t.position()+Se),(e||new qn).__init(t.readInt32(t.position())+t.position(),t)}precision(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):ya.HALF}static startFloatingPoint(t){t.startObject(1)}static addPrecision(t,e){t.addFieldInt16(0,e,ya.HALF)}static endFloatingPoint(t){return t.endObject()}static createFloatingPoint(t,e){return qn.startFloatingPoint(t),qn.addPrecision(t,e),qn.endFloatingPoint(t)}}var Sa;(function(n){n[n.YEAR_MONTH=0]="YEAR_MONTH",n[n.DAY_TIME=1]="DAY_TIME",n[n.MONTH_DAY_NANO=2]="MONTH_DAY_NANO"})(Sa||(Sa={}));class Kn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsInterval(t,e){return(e||new Kn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsInterval(t,e){return t.setPosition(t.position()+Se),(e||new Kn).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Sa.YEAR_MONTH}static startInterval(t){t.startObject(1)}static addUnit(t,e){t.addFieldInt16(0,e,Sa.YEAR_MONTH)}static endInterval(t){return t.endObject()}static createInterval(t,e){return Kn.startInterval(t),Kn.addUnit(t,e),Kn.endInterval(t)}}class yr{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsList(t,e){return(e||new yr).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsList(t,e){return t.setPosition(t.position()+Se),(e||new yr).__init(t.readInt32(t.position())+t.position(),t)}static startList(t){t.startObject(0)}static endList(t){return t.endObject()}static createList(t){return yr.startList(t),yr.endList(t)}}let Ko=class qr{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsMap(t,e){return(e||new qr).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsMap(t,e){return t.setPosition(t.position()+Se),(e||new qr).__init(t.readInt32(t.position())+t.position(),t)}keysSorted(){const t=this.bb.__offset(this.bb_pos,4);return t?!!this.bb.readInt8(this.bb_pos+t):!1}static startMap(t){t.startObject(1)}static addKeysSorted(t,e){t.addFieldInt8(0,+e,0)}static endMap(t){return t.endObject()}static createMap(t,e){return qr.startMap(t),qr.addKeysSorted(t,e),qr.endMap(t)}};class Sr{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsNull(t,e){return(e||new Sr).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsNull(t,e){return t.setPosition(t.position()+Se),(e||new Sr).__init(t.readInt32(t.position())+t.position(),t)}static startNull(t){t.startObject(0)}static endNull(t){return t.endObject()}static createNull(t){return Sr.startNull(t),Sr.endNull(t)}}class xr{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsStruct_(t,e){return(e||new xr).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsStruct_(t,e){return t.setPosition(t.position()+Se),(e||new xr).__init(t.readInt32(t.position())+t.position(),t)}static startStruct_(t){t.startObject(0)}static endStruct_(t){return t.endObject()}static createStruct_(t){return xr.startStruct_(t),xr.endStruct_(t)}}class wn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsTime(t,e){return(e||new wn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsTime(t,e){return t.setPosition(t.position()+Se),(e||new wn).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):vs.MILLISECOND}bitWidth(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readInt32(this.bb_pos+t):32}static startTime(t){t.startObject(2)}static addUnit(t,e){t.addFieldInt16(0,e,vs.MILLISECOND)}static addBitWidth(t,e){t.addFieldInt32(1,e,32)}static endTime(t){return t.endObject()}static createTime(t,e,i){return wn.startTime(t),wn.addUnit(t,e),wn.addBitWidth(t,i),wn.endTime(t)}}class Tn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsTimestamp(t,e){return(e||new Tn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsTimestamp(t,e){return t.setPosition(t.position()+Se),(e||new Tn).__init(t.readInt32(t.position())+t.position(),t)}unit(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):vs.SECOND}timezone(t){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__string(this.bb_pos+e,t):null}static startTimestamp(t){t.startObject(2)}static addUnit(t,e){t.addFieldInt16(0,e,vs.SECOND)}static addTimezone(t,e){t.addFieldOffset(1,e,0)}static endTimestamp(t){return t.endObject()}static createTimestamp(t,e,i){return Tn.startTimestamp(t),Tn.addUnit(t,e),Tn.addTimezone(t,i),Tn.endTimestamp(t)}}var xa;(function(n){n[n.Sparse=0]="Sparse",n[n.Dense=1]="Dense"})(xa||(xa={}));class en{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsUnion(t,e){return(e||new en).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsUnion(t,e){return t.setPosition(t.position()+Se),(e||new en).__init(t.readInt32(t.position())+t.position(),t)}mode(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):xa.Sparse}typeIds(t){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readInt32(this.bb.__vector(this.bb_pos+e)+t*4):0}typeIdsLength(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}typeIdsArray(){const t=this.bb.__offset(this.bb_pos,6);return t?new Int32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}static startUnion(t){t.startObject(2)}static addMode(t,e){t.addFieldInt16(0,e,xa.Sparse)}static addTypeIds(t,e){t.addFieldOffset(1,e,0)}static createTypeIdsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addInt32(e[i]);return t.endVector()}static startTypeIdsVector(t,e){t.startVector(4,e,4)}static endUnion(t){return t.endObject()}static createUnion(t,e,i){return en.startUnion(t),en.addMode(t,e),en.addTypeIds(t,i),en.endUnion(t)}}class br{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsUtf8(t,e){return(e||new br).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsUtf8(t,e){return t.setPosition(t.position()+Se),(e||new br).__init(t.readInt32(t.position())+t.position(),t)}static startUtf8(t){t.startObject(0)}static endUtf8(t){return t.endObject()}static createUtf8(t){return br.startUtf8(t),br.endUtf8(t)}}var Ie;(function(n){n[n.NONE=0]="NONE",n[n.Null=1]="Null",n[n.Int=2]="Int",n[n.FloatingPoint=3]="FloatingPoint",n[n.Binary=4]="Binary",n[n.Utf8=5]="Utf8",n[n.Bool=6]="Bool",n[n.Decimal=7]="Decimal",n[n.Date=8]="Date",n[n.Time=9]="Time",n[n.Timestamp=10]="Timestamp",n[n.Interval=11]="Interval",n[n.List=12]="List",n[n.Struct_=13]="Struct_",n[n.Union=14]="Union",n[n.FixedSizeBinary=15]="FixedSizeBinary",n[n.FixedSizeList=16]="FixedSizeList",n[n.Map=17]="Map",n[n.Duration=18]="Duration",n[n.LargeBinary=19]="LargeBinary",n[n.LargeUtf8=20]="LargeUtf8",n[n.LargeList=21]="LargeList"})(Ie||(Ie={}));let xn=class Zo{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsField(t,e){return(e||new Zo).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsField(t,e){return t.setPosition(t.position()+Se),(e||new Zo).__init(t.readInt32(t.position())+t.position(),t)}name(t){const e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__string(this.bb_pos+e,t):null}nullable(){const t=this.bb.__offset(this.bb_pos,6);return t?!!this.bb.readInt8(this.bb_pos+t):!1}typeType(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.readUint8(this.bb_pos+t):Ie.NONE}type(t){const e=this.bb.__offset(this.bb_pos,10);return e?this.bb.__union(t,this.bb_pos+e):null}dictionary(t){const e=this.bb.__offset(this.bb_pos,12);return e?(t||new xi).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}children(t,e){const i=this.bb.__offset(this.bb_pos,14);return i?(e||new Zo).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}childrenLength(){const t=this.bb.__offset(this.bb_pos,14);return t?this.bb.__vector_len(this.bb_pos+t):0}customMetadata(t,e){const i=this.bb.__offset(this.bb_pos,16);return i?(e||new Ne).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){const t=this.bb.__offset(this.bb_pos,16);return t?this.bb.__vector_len(this.bb_pos+t):0}static startField(t){t.startObject(7)}static addName(t,e){t.addFieldOffset(0,e,0)}static addNullable(t,e){t.addFieldInt8(1,+e,0)}static addTypeType(t,e){t.addFieldInt8(2,e,Ie.NONE)}static addType(t,e){t.addFieldOffset(3,e,0)}static addDictionary(t,e){t.addFieldOffset(4,e,0)}static addChildren(t,e){t.addFieldOffset(5,e,0)}static createChildrenVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startChildrenVector(t,e){t.startVector(4,e,4)}static addCustomMetadata(t,e){t.addFieldOffset(6,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static endField(t){return t.endObject()}},Hn=class mi{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsSchema(t,e){return(e||new mi).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsSchema(t,e){return t.setPosition(t.position()+Se),(e||new mi).__init(t.readInt32(t.position())+t.position(),t)}endianness(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):_s.Little}fields(t,e){const i=this.bb.__offset(this.bb_pos,6);return i?(e||new xn).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}fieldsLength(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}customMetadata(t,e){const i=this.bb.__offset(this.bb_pos,8);return i?(e||new Ne).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}features(t){const e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readInt64(this.bb.__vector(this.bb_pos+e)+t*8):this.bb.createLong(0,0)}featuresLength(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.__vector_len(this.bb_pos+t):0}static startSchema(t){t.startObject(4)}static addEndianness(t,e){t.addFieldInt16(0,e,_s.Little)}static addFields(t,e){t.addFieldOffset(1,e,0)}static createFieldsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startFieldsVector(t,e){t.startVector(4,e,4)}static addCustomMetadata(t,e){t.addFieldOffset(2,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static addFeatures(t,e){t.addFieldOffset(3,e,0)}static createFeaturesVector(t,e){t.startVector(8,e.length,8);for(let i=e.length-1;i>=0;i--)t.addInt64(e[i]);return t.endVector()}static startFeaturesVector(t,e){t.startVector(8,e,8)}static endSchema(t){return t.endObject()}static finishSchemaBuffer(t,e){t.finish(e)}static finishSizePrefixedSchemaBuffer(t,e){t.finish(e,void 0,!0)}static createSchema(t,e,i,r,s){return mi.startSchema(t),mi.addEndianness(t,e),mi.addFields(t,i),mi.addCustomMetadata(t,r),mi.addFeatures(t,s),mi.endSchema(t)}};class dn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFooter(t,e){return(e||new dn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFooter(t,e){return t.setPosition(t.position()+Se),(e||new dn).__init(t.readInt32(t.position())+t.position(),t)}version(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):gs.V1}schema(t){const e=this.bb.__offset(this.bb_pos,6);return e?(t||new Hn).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}dictionaries(t,e){const i=this.bb.__offset(this.bb_pos,8);return i?(e||new wl).__init(this.bb.__vector(this.bb_pos+i)+t*24,this.bb):null}dictionariesLength(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}recordBatches(t,e){const i=this.bb.__offset(this.bb_pos,10);return i?(e||new wl).__init(this.bb.__vector(this.bb_pos+i)+t*24,this.bb):null}recordBatchesLength(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.__vector_len(this.bb_pos+t):0}customMetadata(t,e){const i=this.bb.__offset(this.bb_pos,12);return i?(e||new Ne).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){const t=this.bb.__offset(this.bb_pos,12);return t?this.bb.__vector_len(this.bb_pos+t):0}static startFooter(t){t.startObject(5)}static addVersion(t,e){t.addFieldInt16(0,e,gs.V1)}static addSchema(t,e){t.addFieldOffset(1,e,0)}static addDictionaries(t,e){t.addFieldOffset(2,e,0)}static startDictionariesVector(t,e){t.startVector(24,e,8)}static addRecordBatches(t,e){t.addFieldOffset(3,e,0)}static startRecordBatchesVector(t,e){t.startVector(24,e,8)}static addCustomMetadata(t,e){t.addFieldOffset(4,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static endFooter(t){return t.endObject()}static finishFooterBuffer(t,e){t.finish(e)}static finishSizePrefixedFooterBuffer(t,e){t.finish(e,void 0,!0)}}class me{constructor(t=[],e,i){this.fields=t||[],this.metadata=e||new Map,i||(i=Rl(t)),this.dictionaries=i}get[Symbol.toStringTag](){return"Schema"}get names(){return this.fields.map(t=>t.name)}toString(){return`Schema<{ ${this.fields.map((t,e)=>`${e}: ${t}`).join(", ")} }>`}select(t){const e=new Set(t),i=this.fields.filter(r=>e.has(r.name));return new me(i,this.metadata)}selectAt(t){const e=t.map(i=>this.fields[i]).filter(Boolean);return new me(e,this.metadata)}assign(...t){const e=t[0]instanceof me?t[0]:Array.isArray(t[0])?new me(t[0]):new me(t),i=[...this.fields],r=ko(ko(new Map,this.metadata),e.metadata),s=e.fields.filter(a=>{const c=i.findIndex(l=>l.name===a.name);return~c?(i[c]=a.clone({metadata:ko(ko(new Map,i[c].metadata),a.metadata)}))&&!1:!0}),o=Rl(s,new Map);return new me([...i,...s],r,new Map([...this.dictionaries,...o]))}}me.prototype.fields=null;me.prototype.metadata=null;me.prototype.dictionaries=null;class Ae{constructor(t,e,i=!1,r){this.name=t,this.type=e,this.nullable=i,this.metadata=r||new Map}static new(...t){let[e,i,r,s]=t;return t[0]&&typeof t[0]=="object"&&({name:e}=t[0],i===void 0&&(i=t[0].type),r===void 0&&(r=t[0].nullable),s===void 0&&(s=t[0].metadata)),new Ae(`${e}`,i,r,s)}get typeId(){return this.type.typeId}get[Symbol.toStringTag](){return"Field"}toString(){return`${this.name}: ${this.type}`}clone(...t){let[e,i,r,s]=t;return!t[0]||typeof t[0]!="object"?[e=this.name,i=this.type,r=this.nullable,s=this.metadata]=t:{name:e=this.name,type:i=this.type,nullable:r=this.nullable,metadata:s=this.metadata}=t[0],Ae.new(e,i,r,s)}}Ae.prototype.type=null;Ae.prototype.name=null;Ae.prototype.nullable=null;Ae.prototype.metadata=null;function ko(n,t){return new Map([...n||new Map,...t||new Map])}function Rl(n,t=new Map){for(let e=-1,i=n.length;++e<i;){const s=n[e].type;if(Dt.isDictionary(s)){if(!t.has(s.id))t.set(s.id,s.dictionary);else if(t.get(s.id)!==s.dictionary)throw new Error("Cannot create Schema containing two different dictionaries with the same Id")}s.children&&s.children.length>0&&Rl(s.children,t)}return t}var ed=wi,eb=gp,nb=ms;class Zs{constructor(t,e=pn.V4,i,r){this.schema=t,this.version=e,i&&(this._recordBatches=i),r&&(this._dictionaryBatches=r)}static decode(t){t=new nb(oe(t));const e=dn.getRootAsFooter(t),i=me.decode(e.schema());return new ib(i,e)}static encode(t){const e=new eb,i=me.encode(e,t.schema);dn.startRecordBatchesVector(e,t.numRecordBatches);for(const o of[...t.recordBatches()].slice().reverse())Zi.encode(e,o);const r=e.endVector();dn.startDictionariesVector(e,t.numDictionaries);for(const o of[...t.dictionaryBatches()].slice().reverse())Zi.encode(e,o);const s=e.endVector();return dn.startFooter(e),dn.addSchema(e,i),dn.addVersion(e,pn.V4),dn.addRecordBatches(e,r),dn.addDictionaries(e,s),dn.finishFooterBuffer(e,dn.endFooter(e)),e.asUint8Array()}get numRecordBatches(){return this._recordBatches.length}get numDictionaries(){return this._dictionaryBatches.length}*recordBatches(){for(let t,e=-1,i=this.numRecordBatches;++e<i;)(t=this.getRecordBatch(e))&&(yield t)}*dictionaryBatches(){for(let t,e=-1,i=this.numDictionaries;++e<i;)(t=this.getDictionaryBatch(e))&&(yield t)}getRecordBatch(t){return t>=0&&t<this.numRecordBatches&&this._recordBatches[t]||null}getDictionaryBatch(t){return t>=0&&t<this.numDictionaries&&this._dictionaryBatches[t]||null}}class ib extends Zs{constructor(t,e){super(t,e.version()),this._footer=e}get numRecordBatches(){return this._footer.recordBatchesLength()}get numDictionaries(){return this._footer.dictionariesLength()}getRecordBatch(t){if(t>=0&&t<this.numRecordBatches){const e=this._footer.recordBatches(t);if(e)return Zi.decode(e)}return null}getDictionaryBatch(t){if(t>=0&&t<this.numDictionaries){const e=this._footer.dictionaries(t);if(e)return Zi.decode(e)}return null}}class Zi{constructor(t,e,i){this.metaDataLength=t,this.offset=typeof i=="number"?i:i.low,this.bodyLength=typeof e=="number"?e:e.low}static decode(t){return new Zi(t.metaDataLength(),t.bodyLength(),t.offset())}static encode(t,e){const{metaDataLength:i}=e,r=new ed(e.offset,0),s=new ed(e.bodyLength,0);return wl.createBlock(t,r,i,s)}}const Ce=Object.freeze({done:!0,value:void 0});class nd{constructor(t){this._json=t}get schema(){return this._json.schema}get batches(){return this._json.batches||[]}get dictionaries(){return this._json.dictionaries||[]}}class hu{tee(){return this._getDOMStream().tee()}pipe(t,e){return this._getNodeStream().pipe(t,e)}pipeTo(t,e){return this._getDOMStream().pipeTo(t,e)}pipeThrough(t,e){return this._getDOMStream().pipeThrough(t,e)}_getDOMStream(){return this._DOMStream||(this._DOMStream=this.toDOMStream())}_getNodeStream(){return this._nodeStream||(this._nodeStream=this.toNodeStream())}}class rb extends hu{constructor(){super(),this._values=[],this.resolvers=[],this._closedPromise=new Promise(t=>this._closedPromiseResolve=t)}get closed(){return this._closedPromise}cancel(t){return Rt(this,void 0,void 0,function*(){yield this.return(t)})}write(t){this._ensureOpen()&&(this.resolvers.length<=0?this._values.push(t):this.resolvers.shift().resolve({done:!1,value:t}))}abort(t){this._closedPromiseResolve&&(this.resolvers.length<=0?this._error={error:t}:this.resolvers.shift().reject({done:!0,value:t}))}close(){if(this._closedPromiseResolve){const{resolvers:t}=this;for(;t.length>0;)t.shift().resolve(Ce);this._closedPromiseResolve(),this._closedPromiseResolve=void 0}}[Symbol.asyncIterator](){return this}toDOMStream(t){return Mn.toDOMStream(this._closedPromiseResolve||this._error?this:this._values,t)}toNodeStream(t){return Mn.toNodeStream(this._closedPromiseResolve||this._error?this:this._values,t)}throw(t){return Rt(this,void 0,void 0,function*(){return yield this.abort(t),Ce})}return(t){return Rt(this,void 0,void 0,function*(){return yield this.close(),Ce})}read(t){return Rt(this,void 0,void 0,function*(){return(yield this.next(t,"read")).value})}peek(t){return Rt(this,void 0,void 0,function*(){return(yield this.next(t,"peek")).value})}next(...t){return this._values.length>0?Promise.resolve({done:!1,value:this._values.shift()}):this._error?Promise.reject({done:!0,value:this._error.error}):this._closedPromiseResolve?new Promise((e,i)=>{this.resolvers.push({resolve:e,reject:i})}):Promise.resolve(Ce)}_ensureOpen(){if(this._closedPromiseResolve)return!0;throw new Error("AsyncQueue is closed")}}class Jo extends rb{write(t){if((t=oe(t)).byteLength>0)return super.write(t)}toString(t=!1){return t?Sl(this.toUint8Array(!0)):this.toUint8Array(!1).then(Sl)}toUint8Array(t=!1){return t?ii(this._values)[0]:Rt(this,void 0,void 0,function*(){var e,i;const r=[];let s=0;try{for(var o=Mr(this),a;a=yield o.next(),!a.done;){const c=a.value;r.push(c),s+=c.byteLength}}catch(c){e={error:c}}finally{try{a&&!a.done&&(i=o.return)&&(yield i.call(o))}finally{if(e)throw e.error}}return ii(r,s)[0]})}}class ba{constructor(t){t&&(this.source=new sb(Mn.fromIterable(t)))}[Symbol.iterator](){return this}next(t){return this.source.next(t)}throw(t){return this.source.throw(t)}return(t){return this.source.return(t)}peek(t){return this.source.peek(t)}read(t){return this.source.read(t)}}class ys{constructor(t){t instanceof ys?this.source=t.source:t instanceof Jo?this.source=new ur(Mn.fromAsyncIterable(t)):Jd(t)?this.source=new ur(Mn.fromNodeStream(t)):Zl(t)?this.source=new ur(Mn.fromDOMStream(t)):Zd(t)?this.source=new ur(Mn.fromDOMStream(t.body)):ao(t)?this.source=new ur(Mn.fromIterable(t)):Yi(t)?this.source=new ur(Mn.fromAsyncIterable(t)):Ts(t)&&(this.source=new ur(Mn.fromAsyncIterable(t)))}[Symbol.asyncIterator](){return this}next(t){return this.source.next(t)}throw(t){return this.source.throw(t)}return(t){return this.source.return(t)}get closed(){return this.source.closed}cancel(t){return this.source.cancel(t)}peek(t){return this.source.peek(t)}read(t){return this.source.read(t)}}class sb{constructor(t){this.source=t}cancel(t){this.return(t)}peek(t){return this.next(t,"peek").value}read(t){return this.next(t,"read").value}next(t,e="read"){return this.source.next({cmd:e,size:t})}throw(t){return Object.create(this.source.throw&&this.source.throw(t)||Ce)}return(t){return Object.create(this.source.return&&this.source.return(t)||Ce)}}class ur{constructor(t){this.source=t,this._closedPromise=new Promise(e=>this._closedPromiseResolve=e)}cancel(t){return Rt(this,void 0,void 0,function*(){yield this.return(t)})}get closed(){return this._closedPromise}read(t){return Rt(this,void 0,void 0,function*(){return(yield this.next(t,"read")).value})}peek(t){return Rt(this,void 0,void 0,function*(){return(yield this.next(t,"peek")).value})}next(t,e="read"){return Rt(this,void 0,void 0,function*(){return yield this.source.next({cmd:e,size:t})})}throw(t){return Rt(this,void 0,void 0,function*(){const e=this.source.throw&&(yield this.source.throw(t))||Ce;return this._closedPromiseResolve&&this._closedPromiseResolve(),this._closedPromiseResolve=void 0,Object.create(e)})}return(t){return Rt(this,void 0,void 0,function*(){const e=this.source.return&&(yield this.source.return(t))||Ce;return this._closedPromiseResolve&&this._closedPromiseResolve(),this._closedPromiseResolve=void 0,Object.create(e)})}}class id extends ba{constructor(t,e){super(),this.position=0,this.buffer=oe(t),this.size=typeof e>"u"?this.buffer.byteLength:e}readInt32(t){const{buffer:e,byteOffset:i}=this.readAt(t,4);return new DataView(e,i).getInt32(0,!0)}seek(t){return this.position=Math.min(t,this.size),t<this.size}read(t){const{buffer:e,size:i,position:r}=this;return e&&r<i?(typeof t!="number"&&(t=Number.POSITIVE_INFINITY),this.position=Math.min(i,r+Math.min(i-r,t)),e.subarray(r,this.position)):null}readAt(t,e){const i=this.buffer,r=Math.min(this.size,t+e);return i?i.subarray(t,r):new Uint8Array(e)}close(){this.buffer&&(this.buffer=null)}throw(t){return this.close(),{done:!0,value:t}}return(t){return this.close(),{done:!0,value:t}}}class Ma extends ys{constructor(t,e){super(),this.position=0,this._handle=t,typeof e=="number"?this.size=e:this._pending=Rt(this,void 0,void 0,function*(){this.size=(yield t.stat()).size,delete this._pending})}readInt32(t){return Rt(this,void 0,void 0,function*(){const{buffer:e,byteOffset:i}=yield this.readAt(t,4);return new DataView(e,i).getInt32(0,!0)})}seek(t){return Rt(this,void 0,void 0,function*(){return this._pending&&(yield this._pending),this.position=Math.min(t,this.size),t<this.size})}read(t){return Rt(this,void 0,void 0,function*(){this._pending&&(yield this._pending);const{_handle:e,size:i,position:r}=this;if(e&&r<i){typeof t!="number"&&(t=Number.POSITIVE_INFINITY);let s=r,o=0,a=0;const c=Math.min(i,s+Math.min(i-s,t)),l=new Uint8Array(Math.max(0,(this.position=c)-s));for(;(s+=a)<c&&(o+=a)<l.byteLength;)({bytesRead:a}=yield e.read(l,o,l.byteLength-o,s));return l}return null})}readAt(t,e){return Rt(this,void 0,void 0,function*(){this._pending&&(yield this._pending);const{_handle:i,size:r}=this;if(i&&t+e<r){const s=Math.min(r,t+e),o=new Uint8Array(s-t);return(yield i.read(o,0,e,t)).buffer}return new Uint8Array(e)})}close(){return Rt(this,void 0,void 0,function*(){const t=this._handle;this._handle=null,t&&(yield t.close())})}throw(t){return Rt(this,void 0,void 0,function*(){return yield this.close(),{done:!0,value:t}})}return(t){return Rt(this,void 0,void 0,function*(){return yield this.close(),{done:!0,value:t}})}}const ob=65536;function Qr(n){return n<0&&(n=4294967295+n+1),`0x${n.toString(16)}`}const Ss=8,du=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8];class vp{constructor(t){this.buffer=t}high(){return this.buffer[1]}low(){return this.buffer[0]}_times(t){const e=new Uint32Array([this.buffer[1]>>>16,this.buffer[1]&65535,this.buffer[0]>>>16,this.buffer[0]&65535]),i=new Uint32Array([t.buffer[1]>>>16,t.buffer[1]&65535,t.buffer[0]>>>16,t.buffer[0]&65535]);let r=e[3]*i[3];this.buffer[0]=r&65535;let s=r>>>16;return r=e[2]*i[3],s+=r,r=e[3]*i[2]>>>0,s+=r,this.buffer[0]+=s<<16,this.buffer[1]=s>>>0<r?ob:0,this.buffer[1]+=s>>>16,this.buffer[1]+=e[1]*i[3]+e[2]*i[2]+e[3]*i[1],this.buffer[1]+=e[0]*i[3]+e[1]*i[2]+e[2]*i[1]+e[3]*i[0]<<16,this}_plus(t){const e=this.buffer[0]+t.buffer[0]>>>0;this.buffer[1]+=t.buffer[1],e<this.buffer[0]>>>0&&++this.buffer[1],this.buffer[0]=e}lessThan(t){return this.buffer[1]<t.buffer[1]||this.buffer[1]===t.buffer[1]&&this.buffer[0]<t.buffer[0]}equals(t){return this.buffer[1]===t.buffer[1]&&this.buffer[0]==t.buffer[0]}greaterThan(t){return t.lessThan(this)}hex(){return`${Qr(this.buffer[1])} ${Qr(this.buffer[0])}`}}class _e extends vp{times(t){return this._times(t),this}plus(t){return this._plus(t),this}static from(t,e=new Uint32Array(2)){return _e.fromString(typeof t=="string"?t:t.toString(),e)}static fromNumber(t,e=new Uint32Array(2)){return _e.fromString(t.toString(),e)}static fromString(t,e=new Uint32Array(2)){const i=t.length,r=new _e(e);for(let s=0;s<i;){const o=Ss<i-s?Ss:i-s,a=new _e(new Uint32Array([Number.parseInt(t.slice(s,s+o),10),0])),c=new _e(new Uint32Array([du[o],0]));r.times(c),r.plus(a),s+=o}return r}static convertArray(t){const e=new Uint32Array(t.length*2);for(let i=-1,r=t.length;++i<r;)_e.from(t[i],new Uint32Array(e.buffer,e.byteOffset+2*i*4,2));return e}static multiply(t,e){return new _e(new Uint32Array(t.buffer)).times(e)}static add(t,e){return new _e(new Uint32Array(t.buffer)).plus(e)}}class Je extends vp{negate(){return this.buffer[0]=~this.buffer[0]+1,this.buffer[1]=~this.buffer[1],this.buffer[0]==0&&++this.buffer[1],this}times(t){return this._times(t),this}plus(t){return this._plus(t),this}lessThan(t){const e=this.buffer[1]<<0,i=t.buffer[1]<<0;return e<i||e===i&&this.buffer[0]<t.buffer[0]}static from(t,e=new Uint32Array(2)){return Je.fromString(typeof t=="string"?t:t.toString(),e)}static fromNumber(t,e=new Uint32Array(2)){return Je.fromString(t.toString(),e)}static fromString(t,e=new Uint32Array(2)){const i=t.startsWith("-"),r=t.length,s=new Je(e);for(let o=i?1:0;o<r;){const a=Ss<r-o?Ss:r-o,c=new Je(new Uint32Array([Number.parseInt(t.slice(o,o+a),10),0])),l=new Je(new Uint32Array([du[a],0]));s.times(l),s.plus(c),o+=a}return i?s.negate():s}static convertArray(t){const e=new Uint32Array(t.length*2);for(let i=-1,r=t.length;++i<r;)Je.from(t[i],new Uint32Array(e.buffer,e.byteOffset+2*i*4,2));return e}static multiply(t,e){return new Je(new Uint32Array(t.buffer)).times(e)}static add(t,e){return new Je(new Uint32Array(t.buffer)).plus(e)}}class Gn{constructor(t){this.buffer=t}high(){return new Je(new Uint32Array(this.buffer.buffer,this.buffer.byteOffset+8,2))}low(){return new Je(new Uint32Array(this.buffer.buffer,this.buffer.byteOffset,2))}negate(){return this.buffer[0]=~this.buffer[0]+1,this.buffer[1]=~this.buffer[1],this.buffer[2]=~this.buffer[2],this.buffer[3]=~this.buffer[3],this.buffer[0]==0&&++this.buffer[1],this.buffer[1]==0&&++this.buffer[2],this.buffer[2]==0&&++this.buffer[3],this}times(t){const e=new _e(new Uint32Array([this.buffer[3],0])),i=new _e(new Uint32Array([this.buffer[2],0])),r=new _e(new Uint32Array([this.buffer[1],0])),s=new _e(new Uint32Array([this.buffer[0],0])),o=new _e(new Uint32Array([t.buffer[3],0])),a=new _e(new Uint32Array([t.buffer[2],0])),c=new _e(new Uint32Array([t.buffer[1],0])),l=new _e(new Uint32Array([t.buffer[0],0]));let u=_e.multiply(s,l);this.buffer[0]=u.low();const h=new _e(new Uint32Array([u.high(),0]));return u=_e.multiply(r,l),h.plus(u),u=_e.multiply(s,c),h.plus(u),this.buffer[1]=h.low(),this.buffer[3]=h.lessThan(u)?1:0,this.buffer[2]=h.high(),new _e(new Uint32Array(this.buffer.buffer,this.buffer.byteOffset+8,2)).plus(_e.multiply(i,l)).plus(_e.multiply(r,c)).plus(_e.multiply(s,a)),this.buffer[3]+=_e.multiply(e,l).plus(_e.multiply(i,c)).plus(_e.multiply(r,a)).plus(_e.multiply(s,o)).low(),this}plus(t){const e=new Uint32Array(4);return e[3]=this.buffer[3]+t.buffer[3]>>>0,e[2]=this.buffer[2]+t.buffer[2]>>>0,e[1]=this.buffer[1]+t.buffer[1]>>>0,e[0]=this.buffer[0]+t.buffer[0]>>>0,e[0]<this.buffer[0]>>>0&&++e[1],e[1]<this.buffer[1]>>>0&&++e[2],e[2]<this.buffer[2]>>>0&&++e[3],this.buffer[3]=e[3],this.buffer[2]=e[2],this.buffer[1]=e[1],this.buffer[0]=e[0],this}hex(){return`${Qr(this.buffer[3])} ${Qr(this.buffer[2])} ${Qr(this.buffer[1])} ${Qr(this.buffer[0])}`}static multiply(t,e){return new Gn(new Uint32Array(t.buffer)).times(e)}static add(t,e){return new Gn(new Uint32Array(t.buffer)).plus(e)}static from(t,e=new Uint32Array(4)){return Gn.fromString(typeof t=="string"?t:t.toString(),e)}static fromNumber(t,e=new Uint32Array(4)){return Gn.fromString(t.toString(),e)}static fromString(t,e=new Uint32Array(4)){const i=t.startsWith("-"),r=t.length,s=new Gn(e);for(let o=i?1:0;o<r;){const a=Ss<r-o?Ss:r-o,c=new Gn(new Uint32Array([Number.parseInt(t.slice(o,o+a),10),0,0,0])),l=new Gn(new Uint32Array([du[a],0,0,0]));s.times(l),s.plus(c),o+=a}return i?s.negate():s}static convertArray(t){const e=new Uint32Array(t.length*4);for(let i=-1,r=t.length;++i<r;)Gn.from(t[i],new Uint32Array(e.buffer,e.byteOffset+16*i,4));return e}}class yp extends Jt{constructor(t,e,i,r){super(),this.nodesIndex=-1,this.buffersIndex=-1,this.bytes=t,this.nodes=e,this.buffers=i,this.dictionaries=r}visit(t){return super.visit(t instanceof Ae?t.type:t)}visitNull(t,{length:e}=this.nextFieldNode()){return Zt({type:t,length:e})}visitBool(t,{length:e,nullCount:i}=this.nextFieldNode()){return Zt({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitInt(t,{length:e,nullCount:i}=this.nextFieldNode()){return Zt({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitFloat(t,{length:e,nullCount:i}=this.nextFieldNode()){return Zt({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitUtf8(t,{length:e,nullCount:i}=this.nextFieldNode()){return Zt({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),data:this.readData(t)})}visitBinary(t,{length:e,nullCount:i}=this.nextFieldNode()){return Zt({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),data:this.readData(t)})}visitFixedSizeBinary(t,{length:e,nullCount:i}=this.nextFieldNode()){return Zt({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitDate(t,{length:e,nullCount:i}=this.nextFieldNode()){return Zt({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitTimestamp(t,{length:e,nullCount:i}=this.nextFieldNode()){return Zt({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitTime(t,{length:e,nullCount:i}=this.nextFieldNode()){return Zt({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitDecimal(t,{length:e,nullCount:i}=this.nextFieldNode()){return Zt({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitList(t,{length:e,nullCount:i}=this.nextFieldNode()){return Zt({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),child:this.visit(t.children[0])})}visitStruct(t,{length:e,nullCount:i}=this.nextFieldNode()){return Zt({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),children:this.visitMany(t.children)})}visitUnion(t){return t.mode===gn.Sparse?this.visitSparseUnion(t):this.visitDenseUnion(t)}visitDenseUnion(t,{length:e,nullCount:i}=this.nextFieldNode()){return Zt({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),typeIds:this.readTypeIds(t),valueOffsets:this.readOffsets(t),children:this.visitMany(t.children)})}visitSparseUnion(t,{length:e,nullCount:i}=this.nextFieldNode()){return Zt({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),typeIds:this.readTypeIds(t),children:this.visitMany(t.children)})}visitDictionary(t,{length:e,nullCount:i}=this.nextFieldNode()){return Zt({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t.indices),dictionary:this.readDictionary(t)})}visitInterval(t,{length:e,nullCount:i}=this.nextFieldNode()){return Zt({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitFixedSizeList(t,{length:e,nullCount:i}=this.nextFieldNode()){return Zt({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),child:this.visit(t.children[0])})}visitMap(t,{length:e,nullCount:i}=this.nextFieldNode()){return Zt({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),child:this.visit(t.children[0])})}nextFieldNode(){return this.nodes[++this.nodesIndex]}nextBufferRange(){return this.buffers[++this.buffersIndex]}readNullBitmap(t,e,i=this.nextBufferRange()){return e>0&&this.readData(t,i)||new Uint8Array(0)}readOffsets(t,e){return this.readData(t,e)}readTypeIds(t,e){return this.readData(t,e)}readData(t,{length:e,offset:i}=this.nextBufferRange()){return this.bytes.subarray(i,i+e)}readDictionary(t){return this.dictionaries.get(t.id)}}class ab extends yp{constructor(t,e,i,r){super(new Uint8Array(0),e,i,r),this.sources=t}readNullBitmap(t,e,{offset:i}=this.nextBufferRange()){return e<=0?new Uint8Array(0):pa(this.sources[i])}readOffsets(t,{offset:e}=this.nextBufferRange()){return ye(Uint8Array,ye(Int32Array,this.sources[e]))}readTypeIds(t,{offset:e}=this.nextBufferRange()){return ye(Uint8Array,ye(t.ArrayType,this.sources[e]))}readData(t,{offset:e}=this.nextBufferRange()){const{sources:i}=this;return Dt.isTimestamp(t)||(Dt.isInt(t)||Dt.isTime(t))&&t.bitWidth===64||Dt.isDate(t)&&t.unit===Ri.MILLISECOND?ye(Uint8Array,Je.convertArray(i[e])):Dt.isDecimal(t)?ye(Uint8Array,Gn.convertArray(i[e])):Dt.isBinary(t)||Dt.isFixedSizeBinary(t)?cb(i[e]):Dt.isBool(t)?pa(i[e]):Dt.isUtf8(t)?Kl(i[e].join("")):ye(Uint8Array,ye(t.ArrayType,i[e].map(r=>+r)))}}function cb(n){const t=n.join(""),e=new Uint8Array(t.length/2);for(let i=0;i<t.length;i+=2)e[i>>1]=Number.parseInt(t.slice(i,i+2),16);return e}class Ft extends Jt{compareSchemas(t,e){return t===e||e instanceof t.constructor&&this.compareManyFields(t.fields,e.fields)}compareManyFields(t,e){return t===e||Array.isArray(t)&&Array.isArray(e)&&t.length===e.length&&t.every((i,r)=>this.compareFields(i,e[r]))}compareFields(t,e){return t===e||e instanceof t.constructor&&t.name===e.name&&t.nullable===e.nullable&&this.visit(t.type,e.type)}}function cn(n,t){return t instanceof n.constructor}function co(n,t){return n===t||cn(n,t)}function Ci(n,t){return n===t||cn(n,t)&&n.bitWidth===t.bitWidth&&n.isSigned===t.isSigned}function Ba(n,t){return n===t||cn(n,t)&&n.precision===t.precision}function lb(n,t){return n===t||cn(n,t)&&n.byteWidth===t.byteWidth}function fu(n,t){return n===t||cn(n,t)&&n.unit===t.unit}function lo(n,t){return n===t||cn(n,t)&&n.unit===t.unit&&n.timezone===t.timezone}function uo(n,t){return n===t||cn(n,t)&&n.unit===t.unit&&n.bitWidth===t.bitWidth}function ub(n,t){return n===t||cn(n,t)&&n.children.length===t.children.length&&Ji.compareManyFields(n.children,t.children)}function hb(n,t){return n===t||cn(n,t)&&n.children.length===t.children.length&&Ji.compareManyFields(n.children,t.children)}function pu(n,t){return n===t||cn(n,t)&&n.mode===t.mode&&n.typeIds.every((e,i)=>e===t.typeIds[i])&&Ji.compareManyFields(n.children,t.children)}function db(n,t){return n===t||cn(n,t)&&n.id===t.id&&n.isOrdered===t.isOrdered&&Ji.visit(n.indices,t.indices)&&Ji.visit(n.dictionary,t.dictionary)}function mu(n,t){return n===t||cn(n,t)&&n.unit===t.unit}function fb(n,t){return n===t||cn(n,t)&&n.listSize===t.listSize&&n.children.length===t.children.length&&Ji.compareManyFields(n.children,t.children)}function pb(n,t){return n===t||cn(n,t)&&n.keysSorted===t.keysSorted&&n.children.length===t.children.length&&Ji.compareManyFields(n.children,t.children)}Ft.prototype.visitNull=co;Ft.prototype.visitBool=co;Ft.prototype.visitInt=Ci;Ft.prototype.visitInt8=Ci;Ft.prototype.visitInt16=Ci;Ft.prototype.visitInt32=Ci;Ft.prototype.visitInt64=Ci;Ft.prototype.visitUint8=Ci;Ft.prototype.visitUint16=Ci;Ft.prototype.visitUint32=Ci;Ft.prototype.visitUint64=Ci;Ft.prototype.visitFloat=Ba;Ft.prototype.visitFloat16=Ba;Ft.prototype.visitFloat32=Ba;Ft.prototype.visitFloat64=Ba;Ft.prototype.visitUtf8=co;Ft.prototype.visitBinary=co;Ft.prototype.visitFixedSizeBinary=lb;Ft.prototype.visitDate=fu;Ft.prototype.visitDateDay=fu;Ft.prototype.visitDateMillisecond=fu;Ft.prototype.visitTimestamp=lo;Ft.prototype.visitTimestampSecond=lo;Ft.prototype.visitTimestampMillisecond=lo;Ft.prototype.visitTimestampMicrosecond=lo;Ft.prototype.visitTimestampNanosecond=lo;Ft.prototype.visitTime=uo;Ft.prototype.visitTimeSecond=uo;Ft.prototype.visitTimeMillisecond=uo;Ft.prototype.visitTimeMicrosecond=uo;Ft.prototype.visitTimeNanosecond=uo;Ft.prototype.visitDecimal=co;Ft.prototype.visitList=ub;Ft.prototype.visitStruct=hb;Ft.prototype.visitUnion=pu;Ft.prototype.visitDenseUnion=pu;Ft.prototype.visitSparseUnion=pu;Ft.prototype.visitDictionary=db;Ft.prototype.visitInterval=mu;Ft.prototype.visitIntervalDayTime=mu;Ft.prototype.visitIntervalYearMonth=mu;Ft.prototype.visitFixedSizeList=fb;Ft.prototype.visitMap=pb;const Ji=new Ft;function Il(n,t){return Ji.compareSchemas(n,t)}function Ac(n,t){return mb(n,t.map(e=>e.data.concat()))}function mb(n,t){const e=[...n.fields],i=[],r={numBatches:t.reduce((h,f)=>Math.max(h,f.length),0)};let s=0,o=0,a=-1;const c=t.length;let l,u=[];for(;r.numBatches-- >0;){for(o=Number.POSITIVE_INFINITY,a=-1;++a<c;)u[a]=l=t[a].shift(),o=Math.min(o,l?l.length:o);Number.isFinite(o)&&(u=gb(e,o,u,t,r),o>0&&(i[s++]=Zt({type:new je(e),length:o,nullCount:0,children:u.slice()})))}return[n=n.assign(e),i.map(h=>new nn(n,h))]}function gb(n,t,e,i,r){var s;const o=(t+63&-64)>>3;for(let a=-1,c=i.length;++a<c;){const l=e[a],u=l==null?void 0:l.length;if(u>=t)u===t?e[a]=l:(e[a]=l.slice(0,t),r.numBatches=Math.max(r.numBatches,i[a].unshift(l.slice(t,u-t))));else{const h=n[a];n[a]=h.clone({nullable:!0}),e[a]=(s=l==null?void 0:l._changeLengthAndBackfillNullBitmap(t))!==null&&s!==void 0?s:Zt({type:h.type,length:t,nullCount:t,nullBitmap:new Uint8Array(o)})}}return e}var Sp;class Xe{constructor(...t){var e,i;if(t.length===0)return this.batches=[],this.schema=new me([]),this._offsets=[0],this;let r,s;t[0]instanceof me&&(r=t.shift()),t[t.length-1]instanceof Uint32Array&&(s=t.pop());const o=c=>{if(c){if(c instanceof nn)return[c];if(c instanceof Xe)return c.batches;if(c instanceof Me){if(c.type instanceof je)return[new nn(new me(c.type.children),c)]}else{if(Array.isArray(c))return c.flatMap(l=>o(l));if(typeof c[Symbol.iterator]=="function")return[...c].flatMap(l=>o(l));if(typeof c=="object"){const l=Object.keys(c),u=l.map(p=>new pe([c[p]])),h=new me(l.map((p,g)=>new Ae(String(p),u[g].type))),[,f]=Ac(h,u);return f.length===0?[new nn(c)]:f}}}return[]},a=t.flatMap(c=>o(c));if(r=(i=r??((e=a[0])===null||e===void 0?void 0:e.schema))!==null&&i!==void 0?i:new me([]),!(r instanceof me))throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");for(const c of a){if(!(c instanceof nn))throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");if(!Il(r,c.schema))throw new TypeError("Table and inner RecordBatch schemas must be equivalent.")}this.schema=r,this.batches=a,this._offsets=s??sp(this.data)}get data(){return this.batches.map(({data:t})=>t)}get numCols(){return this.schema.fields.length}get numRows(){return this.data.reduce((t,e)=>t+e.length,0)}get nullCount(){return this._nullCount===-1&&(this._nullCount=rp(this.data)),this._nullCount}isValid(t){return!1}get(t){return null}set(t,e){}indexOf(t,e){return-1}getByteLength(t){return 0}[Symbol.iterator](){return this.batches.length>0?uu.visit(new pe(this.data)):new Array(0)[Symbol.iterator]()}toArray(){return[...this]}toString(){return`[
  ${this.toArray().join(`,
  `)}
]`}concat(...t){const e=this.schema,i=this.data.concat(t.flatMap(({data:r})=>r));return new Xe(e,i.map(r=>new nn(e,r)))}slice(t,e){const i=this.schema;[t,e]=np({length:this.numRows},t,e);const r=op(this.data,this._offsets,t,e);return new Xe(i,r.map(s=>new nn(i,s)))}getChild(t){return this.getChildAt(this.schema.fields.findIndex(e=>e.name===t))}getChildAt(t){if(t>-1&&t<this.schema.fields.length){const e=this.data.map(i=>i.children[t]);if(e.length===0){const{type:i}=this.schema.fields[t],r=Zt({type:i,length:0,nullCount:0});e.push(r._changeLengthAndBackfillNullBitmap(this.numRows))}return new pe(e)}return null}setChild(t,e){var i;return this.setChildAt((i=this.schema.fields)===null||i===void 0?void 0:i.findIndex(r=>r.name===t),e)}setChildAt(t,e){let i=this.schema,r=[...this.batches];if(t>-1&&t<this.numCols){e||(e=new pe([Zt({type:new qi,length:this.numRows})]));const s=i.fields.slice(),o=s[t].clone({type:e.type}),a=this.schema.fields.map((c,l)=>this.getChildAt(l));[s[t],a[t]]=[o,e],[i,r]=Ac(i,a)}return new Xe(i,r)}select(t){const e=this.schema.fields.reduce((i,r,s)=>i.set(r.name,s),new Map);return this.selectAt(t.map(i=>e.get(i)).filter(i=>i>-1))}selectAt(t){const e=this.schema.selectAt(t),i=this.batches.map(r=>r.selectAt(t));return new Xe(e,i)}assign(t){const e=this.schema.fields,[i,r]=t.schema.fields.reduce((a,c,l)=>{const[u,h]=a,f=e.findIndex(p=>p.name===c.name);return~f?h[f]=l:u.push(l),a},[[],[]]),s=this.schema.assign(t.schema),o=[...e.map((a,c)=>[c,r[c]]).map(([a,c])=>c===void 0?this.getChildAt(a):t.getChildAt(c)),...i.map(a=>t.getChildAt(a))].filter(Boolean);return new Xe(...Ac(s,o))}}Sp=Symbol.toStringTag;Xe[Sp]=(n=>(n.schema=null,n.batches=[],n._offsets=new Uint32Array([0]),n._nullCount=-1,n[Symbol.isConcatSpreadable]=!0,n.isValid=as(lu),n.get=as(an.getVisitFn(F.Struct)),n.set=ap(An.getVisitFn(F.Struct)),n.indexOf=cp(ma.getVisitFn(F.Struct)),n.getByteLength=as(ri.getVisitFn(F.Struct)),"Table"))(Xe.prototype);var xp;let nn=class zs{constructor(...t){switch(t.length){case 2:{if([this.schema]=t,!(this.schema instanceof me))throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");if([,this.data=Zt({nullCount:0,type:new je(this.schema.fields),children:this.schema.fields.map(e=>Zt({type:e.type,nullCount:0}))})]=t,!(this.data instanceof Me))throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");[this.schema,this.data]=rd(this.schema,this.data.children);break}case 1:{const[e]=t,{fields:i,children:r,length:s}=Object.keys(e).reduce((c,l,u)=>(c.children[u]=e[l],c.length=Math.max(c.length,e[l].length),c.fields[u]=Ae.new({name:l,type:e[l].type,nullable:!0}),c),{length:0,fields:new Array,children:new Array}),o=new me(i),a=Zt({type:new je(i),length:s,children:r,nullCount:0});[this.schema,this.data]=rd(o,a.children,s);break}default:throw new TypeError("RecordBatch constructor expects an Object mapping names to child Data, or a [Schema, Data] pair.")}}get dictionaries(){return this._dictionaries||(this._dictionaries=bp(this.schema.fields,this.data.children))}get numCols(){return this.schema.fields.length}get numRows(){return this.data.length}get nullCount(){return this.data.nullCount}isValid(t){return this.data.getValid(t)}get(t){return an.visit(this.data,t)}set(t,e){return An.visit(this.data,t,e)}indexOf(t,e){return ma.visit(this.data,t,e)}getByteLength(t){return ri.visit(this.data,t)}[Symbol.iterator](){return uu.visit(new pe([this.data]))}toArray(){return[...this]}concat(...t){return new Xe(this.schema,[this,...t])}slice(t,e){const[i]=new pe([this.data]).slice(t,e).data;return new zs(this.schema,i)}getChild(t){var e;return this.getChildAt((e=this.schema.fields)===null||e===void 0?void 0:e.findIndex(i=>i.name===t))}getChildAt(t){return t>-1&&t<this.schema.fields.length?new pe([this.data.children[t]]):null}setChild(t,e){var i;return this.setChildAt((i=this.schema.fields)===null||i===void 0?void 0:i.findIndex(r=>r.name===t),e)}setChildAt(t,e){let i=this.schema,r=this.data;if(t>-1&&t<this.numCols){e||(e=new pe([Zt({type:new qi,length:this.numRows})]));const s=i.fields.slice(),o=r.children.slice(),a=s[t].clone({type:e.type});[s[t],o[t]]=[a,e.data[0]],i=new me(s,new Map(this.schema.metadata)),r=Zt({type:new je(s),children:o})}return new zs(i,r)}select(t){const e=this.schema.select(t),i=new je(e.fields),r=[];for(const s of t){const o=this.schema.fields.findIndex(a=>a.name===s);~o&&(r[o]=this.data.children[o])}return new zs(e,Zt({type:i,length:this.numRows,children:r}))}selectAt(t){const e=this.schema.selectAt(t),i=t.map(s=>this.data.children[s]).filter(Boolean),r=Zt({type:new je(e.fields),length:this.numRows,children:i});return new zs(e,r)}};xp=Symbol.toStringTag;nn[xp]=(n=>(n._nullCount=-1,n[Symbol.isConcatSpreadable]=!0,"RecordBatch"))(nn.prototype);function rd(n,t,e=t.reduce((i,r)=>Math.max(i,r.length),0)){var i;const r=[...n.fields],s=[...t],o=(e+63&-64)>>3;for(const[a,c]of n.fields.entries()){const l=t[a];(!l||l.length!==e)&&(r[a]=c.clone({nullable:!0}),s[a]=(i=l==null?void 0:l._changeLengthAndBackfillNullBitmap(e))!==null&&i!==void 0?i:Zt({type:c.type,length:e,nullCount:e,nullBitmap:new Uint8Array(o)}))}return[n.assign(r),Zt({type:new je(r),length:e,children:s})]}function bp(n,t,e=new Map){for(let i=-1,r=n.length;++i<r;){const o=n[i].type,a=t[i];if(Dt.isDictionary(o)){if(!e.has(o.id))a.dictionary&&e.set(o.id,a.dictionary);else if(e.get(o.id)!==a.dictionary)throw new Error("Cannot create Schema containing two different dictionaries with the same Id")}o.children&&o.children.length>0&&bp(o.children,a.children,e)}return e}class gu extends nn{constructor(t){const e=t.fields.map(r=>Zt({type:r.type})),i=Zt({type:new je(t.fields),nullCount:0,children:e});super(t,i)}}var Ea;(function(n){n[n.BUFFER=0]="BUFFER"})(Ea||(Ea={}));var wa;(function(n){n[n.LZ4_FRAME=0]="LZ4_FRAME",n[n.ZSTD=1]="ZSTD"})(wa||(wa={}));class ki{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsBodyCompression(t,e){return(e||new ki).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsBodyCompression(t,e){return t.setPosition(t.position()+Se),(e||new ki).__init(t.readInt32(t.position())+t.position(),t)}codec(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt8(this.bb_pos+t):wa.LZ4_FRAME}method(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readInt8(this.bb_pos+t):Ea.BUFFER}static startBodyCompression(t){t.startObject(2)}static addCodec(t,e){t.addFieldInt8(0,e,wa.LZ4_FRAME)}static addMethod(t,e){t.addFieldInt8(1,e,Ea.BUFFER)}static endBodyCompression(t){return t.endObject()}static createBodyCompression(t,e,i){return ki.startBodyCompression(t),ki.addCodec(t,e),ki.addMethod(t,i),ki.endBodyCompression(t)}}class Mp{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}offset(){return this.bb.readInt64(this.bb_pos)}length(){return this.bb.readInt64(this.bb_pos+8)}static sizeOf(){return 16}static createBuffer(t,e,i){return t.prep(8,16),t.writeInt64(i),t.writeInt64(e),t.offset()}}let Ep=class{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}length(){return this.bb.readInt64(this.bb_pos)}nullCount(){return this.bb.readInt64(this.bb_pos+8)}static sizeOf(){return 16}static createFieldNode(t,e,i){return t.prep(8,16),t.writeInt64(i),t.writeInt64(e),t.offset()}},vi=class Cl{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsRecordBatch(t,e){return(e||new Cl).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsRecordBatch(t,e){return t.setPosition(t.position()+Se),(e||new Cl).__init(t.readInt32(t.position())+t.position(),t)}length(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt64(this.bb_pos+t):this.bb.createLong(0,0)}nodes(t,e){const i=this.bb.__offset(this.bb_pos,6);return i?(e||new Ep).__init(this.bb.__vector(this.bb_pos+i)+t*16,this.bb):null}nodesLength(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}buffers(t,e){const i=this.bb.__offset(this.bb_pos,8);return i?(e||new Mp).__init(this.bb.__vector(this.bb_pos+i)+t*16,this.bb):null}buffersLength(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}compression(t){const e=this.bb.__offset(this.bb_pos,10);return e?(t||new ki).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}static startRecordBatch(t){t.startObject(4)}static addLength(t,e){t.addFieldInt64(0,e,t.createLong(0,0))}static addNodes(t,e){t.addFieldOffset(1,e,0)}static startNodesVector(t,e){t.startVector(16,e,8)}static addBuffers(t,e){t.addFieldOffset(2,e,0)}static startBuffersVector(t,e){t.startVector(16,e,8)}static addCompression(t,e){t.addFieldOffset(3,e,0)}static endRecordBatch(t){return t.endObject()}},Kr=class Dl{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDictionaryBatch(t,e){return(e||new Dl).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDictionaryBatch(t,e){return t.setPosition(t.position()+Se),(e||new Dl).__init(t.readInt32(t.position())+t.position(),t)}id(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt64(this.bb_pos+t):this.bb.createLong(0,0)}data(t){const e=this.bb.__offset(this.bb_pos,6);return e?(t||new vi).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}isDelta(){const t=this.bb.__offset(this.bb_pos,8);return t?!!this.bb.readInt8(this.bb_pos+t):!1}static startDictionaryBatch(t){t.startObject(3)}static addId(t,e){t.addFieldInt64(0,e,t.createLong(0,0))}static addData(t,e){t.addFieldOffset(1,e,0)}static addIsDelta(t,e){t.addFieldInt8(2,+e,0)}static endDictionaryBatch(t){return t.endObject()}};var Ta;(function(n){n[n.NONE=0]="NONE",n[n.Schema=1]="Schema",n[n.DictionaryBatch=2]="DictionaryBatch",n[n.RecordBatch=3]="RecordBatch",n[n.Tensor=4]="Tensor",n[n.SparseTensor=5]="SparseTensor"})(Ta||(Ta={}));let zi=class kn{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsMessage(t,e){return(e||new kn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsMessage(t,e){return t.setPosition(t.position()+Se),(e||new kn).__init(t.readInt32(t.position())+t.position(),t)}version(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):gs.V1}headerType(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readUint8(this.bb_pos+t):Ta.NONE}header(t){const e=this.bb.__offset(this.bb_pos,8);return e?this.bb.__union(t,this.bb_pos+e):null}bodyLength(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.readInt64(this.bb_pos+t):this.bb.createLong(0,0)}customMetadata(t,e){const i=this.bb.__offset(this.bb_pos,12);return i?(e||new Ne).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){const t=this.bb.__offset(this.bb_pos,12);return t?this.bb.__vector_len(this.bb_pos+t):0}static startMessage(t){t.startObject(5)}static addVersion(t,e){t.addFieldInt16(0,e,gs.V1)}static addHeaderType(t,e){t.addFieldInt8(1,e,Ta.NONE)}static addHeader(t,e){t.addFieldOffset(2,e,0)}static addBodyLength(t,e){t.addFieldInt64(3,e,t.createLong(0,0))}static addCustomMetadata(t,e){t.addFieldOffset(4,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static endMessage(t){return t.endObject()}static finishMessageBuffer(t,e){t.finish(e)}static finishSizePrefixedMessageBuffer(t,e){t.finish(e,void 0,!0)}static createMessage(t,e,i,r,s,o){return kn.startMessage(t),kn.addVersion(t,e),kn.addHeaderType(t,i),kn.addHeader(t,r),kn.addBodyLength(t,s),kn.addCustomMetadata(t,o),kn.endMessage(t)}};var _b=wi;class vb extends Jt{visit(t,e){return t==null||e==null?void 0:super.visit(t,e)}visitNull(t,e){return Sr.startNull(e),Sr.endNull(e)}visitInt(t,e){return fn.startInt(e),fn.addBitWidth(e,t.bitWidth),fn.addIsSigned(e,t.isSigned),fn.endInt(e)}visitFloat(t,e){return qn.startFloatingPoint(e),qn.addPrecision(e,t.precision),qn.endFloatingPoint(e)}visitBinary(t,e){return _r.startBinary(e),_r.endBinary(e)}visitBool(t,e){return vr.startBool(e),vr.endBool(e)}visitUtf8(t,e){return br.startUtf8(e),br.endUtf8(e)}visitDecimal(t,e){return Qe.startDecimal(e),Qe.addScale(e,t.scale),Qe.addPrecision(e,t.precision),Qe.addBitWidth(e,t.bitWidth),Qe.endDecimal(e)}visitDate(t,e){return qo.startDate(e),qo.addUnit(e,t.unit),qo.endDate(e)}visitTime(t,e){return wn.startTime(e),wn.addUnit(e,t.unit),wn.addBitWidth(e,t.bitWidth),wn.endTime(e)}visitTimestamp(t,e){const i=t.timezone&&e.createString(t.timezone)||void 0;return Tn.startTimestamp(e),Tn.addUnit(e,t.unit),i!==void 0&&Tn.addTimezone(e,i),Tn.endTimestamp(e)}visitInterval(t,e){return Kn.startInterval(e),Kn.addUnit(e,t.unit),Kn.endInterval(e)}visitList(t,e){return yr.startList(e),yr.endList(e)}visitStruct(t,e){return xr.startStruct_(e),xr.endStruct_(e)}visitUnion(t,e){en.startTypeIdsVector(e,t.typeIds.length);const i=en.createTypeIdsVector(e,t.typeIds);return en.startUnion(e),en.addMode(e,t.mode),en.addTypeIds(e,i),en.endUnion(e)}visitDictionary(t,e){const i=this.visit(t.indices,e);return xi.startDictionaryEncoding(e),xi.addId(e,new _b(t.id,0)),xi.addIsOrdered(e,t.isOrdered),i!==void 0&&xi.addIndexType(e,i),xi.endDictionaryEncoding(e)}visitFixedSizeBinary(t,e){return Yn.startFixedSizeBinary(e),Yn.addByteWidth(e,t.byteWidth),Yn.endFixedSizeBinary(e)}visitFixedSizeList(t,e){return $n.startFixedSizeList(e),$n.addListSize(e,t.listSize),$n.endFixedSizeList(e)}visitMap(t,e){return Ko.startMap(e),Ko.addKeysSorted(e,t.keysSorted),Ko.endMap(e)}}const Rc=new vb;function yb(n,t=new Map){return new me(xb(n,t),Qo(n.customMetadata),t)}function wp(n){return new _n(n.count,Tp(n.columns),Ap(n.columns))}function Sb(n){return new si(wp(n.data),n.id,n.isDelta)}function xb(n,t){return(n.fields||[]).filter(Boolean).map(e=>Ae.fromJSON(e,t))}function sd(n,t){return(n.children||[]).filter(Boolean).map(e=>Ae.fromJSON(e,t))}function Tp(n){return(n||[]).reduce((t,e)=>[...t,new Ir(e.count,bb(e.VALIDITY)),...Tp(e.children)],[])}function Ap(n,t=[]){for(let e=-1,i=(n||[]).length;++e<i;){const r=n[e];r.VALIDITY&&t.push(new Qn(t.length,r.VALIDITY.length)),r.TYPE&&t.push(new Qn(t.length,r.TYPE.length)),r.OFFSET&&t.push(new Qn(t.length,r.OFFSET.length)),r.DATA&&t.push(new Qn(t.length,r.DATA.length)),t=Ap(r.children,t)}return t}function bb(n){return(n||[]).reduce((t,e)=>t+ +(e===0),0)}function Mb(n,t){let e,i,r,s,o,a;return!t||!(s=n.dictionary)?(o=ad(n,sd(n,t)),r=new Ae(n.name,o,n.nullable,Qo(n.customMetadata))):t.has(e=s.id)?(i=(i=s.indexType)?od(i):new $s,a=new ps(t.get(e),i,e,s.isOrdered),r=new Ae(n.name,a,n.nullable,Qo(n.customMetadata))):(i=(i=s.indexType)?od(i):new $s,t.set(e,o=ad(n,sd(n,t))),a=new ps(o,i,e,s.isOrdered),r=new Ae(n.name,a,n.nullable,Qo(n.customMetadata))),r||null}function Qo(n){return new Map(Object.entries(n||{}))}function od(n){return new Ki(n.isSigned,n.bitWidth)}function ad(n,t){const e=n.type.name;switch(e){case"NONE":return new qi;case"null":return new qi;case"binary":return new na;case"utf8":return new ia;case"bool":return new ra;case"list":return new la((t||[])[0]);case"struct":return new je(t||[]);case"struct_":return new je(t||[])}switch(e){case"int":{const i=n.type;return new Ki(i.isSigned,i.bitWidth)}case"floatingpoint":{const i=n.type;return new qs(sn[i.precision])}case"decimal":{const i=n.type;return new sa(i.scale,i.precision,i.bitWidth)}case"date":{const i=n.type;return new oa(Ri[i.unit])}case"time":{const i=n.type;return new Ks(ae[i.unit],i.bitWidth)}case"timestamp":{const i=n.type;return new aa(ae[i.unit],i.timezone)}case"interval":{const i=n.type;return new ca($i[i.unit])}case"union":{const i=n.type;return new ua(gn[i.mode],i.typeIds||[],t||[])}case"fixedsizebinary":{const i=n.type;return new ha(i.byteWidth)}case"fixedsizelist":{const i=n.type;return new da(i.listSize,(t||[])[0])}case"map":{const i=n.type;return new fa((t||[])[0],i.keysSorted)}}throw new Error(`Unrecognized type: "${e}"`)}var Ar=wi,Eb=gp,wb=ms;class Ye{constructor(t,e,i,r){this._version=e,this._headerType=i,this.body=new Uint8Array(0),r&&(this._createHeader=()=>r),this._bodyLength=typeof t=="number"?t:t.low}static fromJSON(t,e){const i=new Ye(0,pn.V4,e);return i._createHeader=Tb(t,e),i}static decode(t){t=new wb(oe(t));const e=zi.getRootAsMessage(t),i=e.bodyLength(),r=e.version(),s=e.headerType(),o=new Ye(i,r,s);return o._createHeader=Ab(e,s),o}static encode(t){const e=new Eb;let i=-1;return t.isSchema()?i=me.encode(e,t.header()):t.isRecordBatch()?i=_n.encode(e,t.header()):t.isDictionaryBatch()&&(i=si.encode(e,t.header())),zi.startMessage(e),zi.addVersion(e,pn.V4),zi.addHeader(e,i),zi.addHeaderType(e,t.headerType),zi.addBodyLength(e,new Ar(t.bodyLength,0)),zi.finishMessageBuffer(e,zi.endMessage(e)),e.asUint8Array()}static from(t,e=0){if(t instanceof me)return new Ye(0,pn.V4,fe.Schema,t);if(t instanceof _n)return new Ye(e,pn.V4,fe.RecordBatch,t);if(t instanceof si)return new Ye(e,pn.V4,fe.DictionaryBatch,t);throw new Error(`Unrecognized Message header: ${t}`)}get type(){return this.headerType}get version(){return this._version}get headerType(){return this._headerType}get bodyLength(){return this._bodyLength}header(){return this._createHeader()}isSchema(){return this.headerType===fe.Schema}isRecordBatch(){return this.headerType===fe.RecordBatch}isDictionaryBatch(){return this.headerType===fe.DictionaryBatch}}class _n{constructor(t,e,i){this._nodes=e,this._buffers=i,this._length=typeof t=="number"?t:t.low}get nodes(){return this._nodes}get length(){return this._length}get buffers(){return this._buffers}}class si{constructor(t,e,i=!1){this._data=t,this._isDelta=i,this._id=typeof e=="number"?e:e.low}get id(){return this._id}get data(){return this._data}get isDelta(){return this._isDelta}get length(){return this.data.length}get nodes(){return this.data.nodes}get buffers(){return this.data.buffers}}class Qn{constructor(t,e){this.offset=typeof t=="number"?t:t.low,this.length=typeof e=="number"?e:e.low}}class Ir{constructor(t,e){this.length=typeof t=="number"?t:t.low,this.nullCount=typeof e=="number"?e:e.low}}function Tb(n,t){return(()=>{switch(t){case fe.Schema:return me.fromJSON(n);case fe.RecordBatch:return _n.fromJSON(n);case fe.DictionaryBatch:return si.fromJSON(n)}throw new Error(`Unrecognized Message type: { name: ${fe[t]}, type: ${t} }`)})}function Ab(n,t){return(()=>{switch(t){case fe.Schema:return me.decode(n.header(new Hn));case fe.RecordBatch:return _n.decode(n.header(new vi),n.version());case fe.DictionaryBatch:return si.decode(n.header(new Kr),n.version())}throw new Error(`Unrecognized Message type: { name: ${fe[t]}, type: ${t} }`)})}Ae.encode=Bb;Ae.decode=Nb;Ae.fromJSON=Mb;me.encode=Ob;me.decode=Rb;me.fromJSON=yb;_n.encode=zb;_n.decode=Ib;_n.fromJSON=wp;si.encode=Vb;si.decode=Cb;si.fromJSON=Sb;Ir.encode=kb;Ir.decode=Lb;Qn.encode=Hb;Qn.decode=Db;function Rb(n,t=new Map){const e=Fb(n,t);return new me(e,ta(n),t)}function Ib(n,t=pn.V4){if(n.compression()!==null)throw new Error("Record batch compression not implemented");return new _n(n.length(),Pb(n),Ub(n,t))}function Cb(n,t=pn.V4){return new si(_n.decode(n.data(),t),n.id(),n.isDelta())}function Db(n){return new Qn(n.offset(),n.length())}function Lb(n){return new Ir(n.length(),n.nullCount())}function Pb(n){const t=[];for(let e,i=-1,r=-1,s=n.nodesLength();++i<s;)(e=n.nodes(i))&&(t[++r]=Ir.decode(e));return t}function Ub(n,t){const e=[];for(let i,r=-1,s=-1,o=n.buffersLength();++r<o;)(i=n.buffers(r))&&(t<pn.V4&&(i.bb_pos+=8*(r+1)),e[++s]=Qn.decode(i));return e}function Fb(n,t){const e=[];for(let i,r=-1,s=-1,o=n.fieldsLength();++r<o;)(i=n.fields(r))&&(e[++s]=Ae.decode(i,t));return e}function cd(n,t){const e=[];for(let i,r=-1,s=-1,o=n.childrenLength();++r<o;)(i=n.children(r))&&(e[++s]=Ae.decode(i,t));return e}function Nb(n,t){let e,i,r,s,o,a;return!t||!(a=n.dictionary())?(r=ud(n,cd(n,t)),i=new Ae(n.name(),r,n.nullable(),ta(n))):t.has(e=a.id().low)?(s=(s=a.indexType())?ld(s):new $s,o=new ps(t.get(e),s,e,a.isOrdered()),i=new Ae(n.name(),o,n.nullable(),ta(n))):(s=(s=a.indexType())?ld(s):new $s,t.set(e,r=ud(n,cd(n,t))),o=new ps(r,s,e,a.isOrdered()),i=new Ae(n.name(),o,n.nullable(),ta(n))),i||null}function ta(n){const t=new Map;if(n)for(let e,i,r=-1,s=Math.trunc(n.customMetadataLength());++r<s;)(e=n.customMetadata(r))&&(i=e.key())!=null&&t.set(i,e.value());return t}function ld(n){return new Ki(n.isSigned(),n.bitWidth())}function ud(n,t){const e=n.typeType();switch(e){case Ie.NONE:return new qi;case Ie.Null:return new qi;case Ie.Binary:return new na;case Ie.Utf8:return new ia;case Ie.Bool:return new ra;case Ie.List:return new la((t||[])[0]);case Ie.Struct_:return new je(t||[])}switch(e){case Ie.Int:{const i=n.type(new fn);return new Ki(i.isSigned(),i.bitWidth())}case Ie.FloatingPoint:{const i=n.type(new qn);return new qs(i.precision())}case Ie.Decimal:{const i=n.type(new Qe);return new sa(i.scale(),i.precision(),i.bitWidth())}case Ie.Date:{const i=n.type(new qo);return new oa(i.unit())}case Ie.Time:{const i=n.type(new wn);return new Ks(i.unit(),i.bitWidth())}case Ie.Timestamp:{const i=n.type(new Tn);return new aa(i.unit(),i.timezone())}case Ie.Interval:{const i=n.type(new Kn);return new ca(i.unit())}case Ie.Union:{const i=n.type(new en);return new ua(i.mode(),i.typeIdsArray()||[],t||[])}case Ie.FixedSizeBinary:{const i=n.type(new Yn);return new ha(i.byteWidth())}case Ie.FixedSizeList:{const i=n.type(new $n);return new da(i.listSize(),(t||[])[0])}case Ie.Map:{const i=n.type(new Ko);return new fa((t||[])[0],i.keysSorted())}}throw new Error(`Unrecognized type: "${Ie[e]}" (${e})`)}function Ob(n,t){const e=t.fields.map(s=>Ae.encode(n,s));Hn.startFieldsVector(n,e.length);const i=Hn.createFieldsVector(n,e),r=t.metadata&&t.metadata.size>0?Hn.createCustomMetadataVector(n,[...t.metadata].map(([s,o])=>{const a=n.createString(`${s}`),c=n.createString(`${o}`);return Ne.startKeyValue(n),Ne.addKey(n,a),Ne.addValue(n,c),Ne.endKeyValue(n)})):-1;return Hn.startSchema(n),Hn.addFields(n,i),Hn.addEndianness(n,Gb?_s.Little:_s.Big),r!==-1&&Hn.addCustomMetadata(n,r),Hn.endSchema(n)}function Bb(n,t){let e=-1,i=-1,r=-1;const s=t.type;let o=t.typeId;Dt.isDictionary(s)?(o=s.dictionary.typeId,r=Rc.visit(s,n),i=Rc.visit(s.dictionary,n)):i=Rc.visit(s,n);const a=(s.children||[]).map(u=>Ae.encode(n,u)),c=xn.createChildrenVector(n,a),l=t.metadata&&t.metadata.size>0?xn.createCustomMetadataVector(n,[...t.metadata].map(([u,h])=>{const f=n.createString(`${u}`),p=n.createString(`${h}`);return Ne.startKeyValue(n),Ne.addKey(n,f),Ne.addValue(n,p),Ne.endKeyValue(n)})):-1;return t.name&&(e=n.createString(t.name)),xn.startField(n),xn.addType(n,i),xn.addTypeType(n,o),xn.addChildren(n,c),xn.addNullable(n,!!t.nullable),e!==-1&&xn.addName(n,e),r!==-1&&xn.addDictionary(n,r),l!==-1&&xn.addCustomMetadata(n,l),xn.endField(n)}function zb(n,t){const e=t.nodes||[],i=t.buffers||[];vi.startNodesVector(n,e.length);for(const o of e.slice().reverse())Ir.encode(n,o);const r=n.endVector();vi.startBuffersVector(n,i.length);for(const o of i.slice().reverse())Qn.encode(n,o);const s=n.endVector();return vi.startRecordBatch(n),vi.addLength(n,new Ar(t.length,0)),vi.addNodes(n,r),vi.addBuffers(n,s),vi.endRecordBatch(n)}function Vb(n,t){const e=_n.encode(n,t.data);return Kr.startDictionaryBatch(n),Kr.addId(n,new Ar(t.id,0)),Kr.addIsDelta(n,t.isDelta),Kr.addData(n,e),Kr.endDictionaryBatch(n)}function kb(n,t){return Ep.createFieldNode(n,new Ar(t.length,0),new Ar(t.nullCount,0))}function Hb(n,t){return Mp.createBuffer(n,new Ar(t.offset,0),new Ar(t.length,0))}const Gb=(()=>{const n=new ArrayBuffer(2);return new DataView(n).setInt16(0,256,!0),new Int16Array(n)[0]===256})(),_u=n=>`Expected ${fe[n]} Message in stream, but was null or length 0.`,vu=n=>`Header pointer of flatbuffer-encoded ${fe[n]} Message is null or length 0.`,Rp=(n,t)=>`Expected to read ${n} metadata bytes, but only read ${t}.`,Ip=(n,t)=>`Expected to read ${n} bytes for message body, but only read ${t}.`;class Cp{constructor(t){this.source=t instanceof ba?t:new ba(t)}[Symbol.iterator](){return this}next(){let t;return(t=this.readMetadataLength()).done||t.value===-1&&(t=this.readMetadataLength()).done||(t=this.readMetadata(t.value)).done?Ce:t}throw(t){return this.source.throw(t)}return(t){return this.source.return(t)}readMessage(t){let e;if((e=this.next()).done)return null;if(t!=null&&e.value.headerType!==t)throw new Error(_u(t));return e.value}readMessageBody(t){if(t<=0)return new Uint8Array(0);const e=oe(this.source.read(t));if(e.byteLength<t)throw new Error(Ip(t,e.byteLength));return e.byteOffset%8===0&&e.byteOffset+e.byteLength<=e.buffer.byteLength?e:e.slice()}readSchema(t=!1){const e=fe.Schema,i=this.readMessage(e),r=i==null?void 0:i.header();if(t&&!r)throw new Error(vu(e));return r}readMetadataLength(){const t=this.source.read(za),e=t&&new ms(t),i=(e==null?void 0:e.readInt32(0))||0;return{done:i===0,value:i}}readMetadata(t){const e=this.source.read(t);if(!e)return Ce;if(e.byteLength<t)throw new Error(Rp(t,e.byteLength));return{done:!1,value:Ye.decode(e)}}}class Wb{constructor(t,e){this.source=t instanceof ys?t:Kd(t)?new Ma(t,e):new ys(t)}[Symbol.asyncIterator](){return this}next(){return Rt(this,void 0,void 0,function*(){let t;return(t=yield this.readMetadataLength()).done||t.value===-1&&(t=yield this.readMetadataLength()).done||(t=yield this.readMetadata(t.value)).done?Ce:t})}throw(t){return Rt(this,void 0,void 0,function*(){return yield this.source.throw(t)})}return(t){return Rt(this,void 0,void 0,function*(){return yield this.source.return(t)})}readMessage(t){return Rt(this,void 0,void 0,function*(){let e;if((e=yield this.next()).done)return null;if(t!=null&&e.value.headerType!==t)throw new Error(_u(t));return e.value})}readMessageBody(t){return Rt(this,void 0,void 0,function*(){if(t<=0)return new Uint8Array(0);const e=oe(yield this.source.read(t));if(e.byteLength<t)throw new Error(Ip(t,e.byteLength));return e.byteOffset%8===0&&e.byteOffset+e.byteLength<=e.buffer.byteLength?e:e.slice()})}readSchema(t=!1){return Rt(this,void 0,void 0,function*(){const e=fe.Schema,i=yield this.readMessage(e),r=i==null?void 0:i.header();if(t&&!r)throw new Error(vu(e));return r})}readMetadataLength(){return Rt(this,void 0,void 0,function*(){const t=yield this.source.read(za),e=t&&new ms(t),i=(e==null?void 0:e.readInt32(0))||0;return{done:i===0,value:i}})}readMetadata(t){return Rt(this,void 0,void 0,function*(){const e=yield this.source.read(t);if(!e)return Ce;if(e.byteLength<t)throw new Error(Rp(t,e.byteLength));return{done:!1,value:Ye.decode(e)}})}}class Xb extends Cp{constructor(t){super(new Uint8Array(0)),this._schema=!1,this._body=[],this._batchIndex=0,this._dictionaryIndex=0,this._json=t instanceof nd?t:new nd(t)}next(){const{_json:t}=this;if(!this._schema)return this._schema=!0,{done:!1,value:Ye.fromJSON(t.schema,fe.Schema)};if(this._dictionaryIndex<t.dictionaries.length){const e=t.dictionaries[this._dictionaryIndex++];return this._body=e.data.columns,{done:!1,value:Ye.fromJSON(e,fe.DictionaryBatch)}}if(this._batchIndex<t.batches.length){const e=t.batches[this._batchIndex++];return this._body=e.columns,{done:!1,value:Ye.fromJSON(e,fe.RecordBatch)}}return this._body=[],Ce}readMessageBody(t){return e(this._body);function e(i){return(i||[]).reduce((r,s)=>[...r,...s.VALIDITY&&[s.VALIDITY]||[],...s.TYPE&&[s.TYPE]||[],...s.OFFSET&&[s.OFFSET]||[],...s.DATA&&[s.DATA]||[],...e(s.children)],[])}}readMessage(t){let e;if((e=this.next()).done)return null;if(t!=null&&e.value.headerType!==t)throw new Error(_u(t));return e.value}readSchema(){const t=fe.Schema,e=this.readMessage(t),i=e==null?void 0:e.header();if(!e||!i)throw new Error(vu(t));return i}}const za=4,Ll="ARROW1",Js=new Uint8Array(Ll.length);for(let n=0;n<Ll.length;n+=1)Js[n]=Ll.codePointAt(n);function yu(n,t=0){for(let e=-1,i=Js.length;++e<i;)if(Js[e]!==n[t+e])return!1;return!0}const ho=Js.length,Dp=ho+za,jb=ho*2+za;class Ti extends hu{constructor(t){super(),this._impl=t}get closed(){return this._impl.closed}get schema(){return this._impl.schema}get autoDestroy(){return this._impl.autoDestroy}get dictionaries(){return this._impl.dictionaries}get numDictionaries(){return this._impl.numDictionaries}get numRecordBatches(){return this._impl.numRecordBatches}get footer(){return this._impl.isFile()?this._impl.footer:null}isSync(){return this._impl.isSync()}isAsync(){return this._impl.isAsync()}isFile(){return this._impl.isFile()}isStream(){return this._impl.isStream()}next(){return this._impl.next()}throw(t){return this._impl.throw(t)}return(t){return this._impl.return(t)}cancel(){return this._impl.cancel()}reset(t){return this._impl.reset(t),this._DOMStream=void 0,this._nodeStream=void 0,this}open(t){const e=this._impl.open(t);return Yi(e)?e.then(()=>this):this}readRecordBatch(t){return this._impl.isFile()?this._impl.readRecordBatch(t):null}[Symbol.iterator](){return this._impl[Symbol.iterator]()}[Symbol.asyncIterator](){return this._impl[Symbol.asyncIterator]()}toDOMStream(){return Mn.toDOMStream(this.isSync()?{[Symbol.iterator]:()=>this}:{[Symbol.asyncIterator]:()=>this})}toNodeStream(){return Mn.toNodeStream(this.isSync()?{[Symbol.iterator]:()=>this}:{[Symbol.asyncIterator]:()=>this},{objectMode:!0})}static throughNode(t){throw new Error('"throughNode" not available in this environment')}static throughDOM(t,e){throw new Error('"throughDOM" not available in this environment')}static from(t){return t instanceof Ti?t:xl(t)?Kb(t):Kd(t)?Qb(t):Yi(t)?Rt(this,void 0,void 0,function*(){return yield Ti.from(yield t)}):Zd(t)||Zl(t)||Jd(t)||Ts(t)?Jb(new ys(t)):Zb(new ba(t))}static readAll(t){return t instanceof Ti?t.isSync()?hd(t):dd(t):xl(t)||ArrayBuffer.isView(t)||ao(t)||qd(t)?hd(t):dd(t)}}class Aa extends Ti{constructor(t){super(t),this._impl=t}readAll(){return[...this]}[Symbol.iterator](){return this._impl[Symbol.iterator]()}[Symbol.asyncIterator](){return Jn(this,arguments,function*(){yield Gt(yield*$o(Mr(this[Symbol.iterator]())))})}}class Ra extends Ti{constructor(t){super(t),this._impl=t}readAll(){var t,e;return Rt(this,void 0,void 0,function*(){const i=new Array;try{for(var r=Mr(this),s;s=yield r.next(),!s.done;){const o=s.value;i.push(o)}}catch(o){t={error:o}}finally{try{s&&!s.done&&(e=r.return)&&(yield e.call(r))}finally{if(t)throw t.error}}return i})}[Symbol.iterator](){throw new Error("AsyncRecordBatchStreamReader is not Iterable")}[Symbol.asyncIterator](){return this._impl[Symbol.asyncIterator]()}}class Lp extends Aa{constructor(t){super(t),this._impl=t}}class Yb extends Ra{constructor(t){super(t),this._impl=t}}class Pp{constructor(t=new Map){this.closed=!1,this.autoDestroy=!0,this._dictionaryIndex=0,this._recordBatchIndex=0,this.dictionaries=t}get numDictionaries(){return this._dictionaryIndex}get numRecordBatches(){return this._recordBatchIndex}isSync(){return!1}isAsync(){return!1}isFile(){return!1}isStream(){return!1}reset(t){return this._dictionaryIndex=0,this._recordBatchIndex=0,this.schema=t,this.dictionaries=new Map,this}_loadRecordBatch(t,e){const i=this._loadVectors(t,e,this.schema.fields),r=Zt({type:new je(this.schema.fields),length:t.length,children:i});return new nn(this.schema,r)}_loadDictionaryBatch(t,e){const{id:i,isDelta:r}=t,{dictionaries:s,schema:o}=this,a=s.get(i);if(r||!a){const c=o.dictionaries.get(i),l=this._loadVectors(t.data,e,[c]);return(a&&r?a.concat(new pe(l)):new pe(l)).memoize()}return a.memoize()}_loadVectors(t,e,i){return new yp(e,t.nodes,t.buffers,this.dictionaries).visitMany(i)}}class Ia extends Pp{constructor(t,e){super(e),this._reader=xl(t)?new Xb(this._handle=t):new Cp(this._handle=t)}isSync(){return!0}isStream(){return!0}[Symbol.iterator](){return this}cancel(){!this.closed&&(this.closed=!0)&&(this.reset()._reader.return(),this._reader=null,this.dictionaries=null)}open(t){return this.closed||(this.autoDestroy=Fp(this,t),this.schema||(this.schema=this._reader.readSchema())||this.cancel()),this}throw(t){return!this.closed&&this.autoDestroy&&(this.closed=!0)?this.reset()._reader.throw(t):Ce}return(t){return!this.closed&&this.autoDestroy&&(this.closed=!0)?this.reset()._reader.return(t):Ce}next(){if(this.closed)return Ce;let t;const{_reader:e}=this;for(;t=this._readNextMessageAndValidate();)if(t.isSchema())this.reset(t.header());else if(t.isRecordBatch()){this._recordBatchIndex++;const i=t.header(),r=e.readMessageBody(t.bodyLength);return{done:!1,value:this._loadRecordBatch(i,r)}}else if(t.isDictionaryBatch()){this._dictionaryIndex++;const i=t.header(),r=e.readMessageBody(t.bodyLength),s=this._loadDictionaryBatch(i,r);this.dictionaries.set(i.id,s)}return this.schema&&this._recordBatchIndex===0?(this._recordBatchIndex++,{done:!1,value:new gu(this.schema)}):this.return()}_readNextMessageAndValidate(t){return this._reader.readMessage(t)}}class Ca extends Pp{constructor(t,e){super(e),this._reader=new Wb(this._handle=t)}isAsync(){return!0}isStream(){return!0}[Symbol.asyncIterator](){return this}cancel(){return Rt(this,void 0,void 0,function*(){!this.closed&&(this.closed=!0)&&(yield this.reset()._reader.return(),this._reader=null,this.dictionaries=null)})}open(t){return Rt(this,void 0,void 0,function*(){return this.closed||(this.autoDestroy=Fp(this,t),this.schema||(this.schema=yield this._reader.readSchema())||(yield this.cancel())),this})}throw(t){return Rt(this,void 0,void 0,function*(){return!this.closed&&this.autoDestroy&&(this.closed=!0)?yield this.reset()._reader.throw(t):Ce})}return(t){return Rt(this,void 0,void 0,function*(){return!this.closed&&this.autoDestroy&&(this.closed=!0)?yield this.reset()._reader.return(t):Ce})}next(){return Rt(this,void 0,void 0,function*(){if(this.closed)return Ce;let t;const{_reader:e}=this;for(;t=yield this._readNextMessageAndValidate();)if(t.isSchema())yield this.reset(t.header());else if(t.isRecordBatch()){this._recordBatchIndex++;const i=t.header(),r=yield e.readMessageBody(t.bodyLength);return{done:!1,value:this._loadRecordBatch(i,r)}}else if(t.isDictionaryBatch()){this._dictionaryIndex++;const i=t.header(),r=yield e.readMessageBody(t.bodyLength),s=this._loadDictionaryBatch(i,r);this.dictionaries.set(i.id,s)}return this.schema&&this._recordBatchIndex===0?(this._recordBatchIndex++,{done:!1,value:new gu(this.schema)}):yield this.return()})}_readNextMessageAndValidate(t){return Rt(this,void 0,void 0,function*(){return yield this._reader.readMessage(t)})}}class Up extends Ia{constructor(t,e){super(t instanceof id?t:new id(t),e)}get footer(){return this._footer}get numDictionaries(){return this._footer?this._footer.numDictionaries:0}get numRecordBatches(){return this._footer?this._footer.numRecordBatches:0}isSync(){return!0}isFile(){return!0}open(t){if(!this.closed&&!this._footer){this.schema=(this._footer=this._readFooter()).schema;for(const e of this._footer.dictionaryBatches())e&&this._readDictionaryBatch(this._dictionaryIndex++)}return super.open(t)}readRecordBatch(t){var e;if(this.closed)return null;this._footer||this.open();const i=(e=this._footer)===null||e===void 0?void 0:e.getRecordBatch(t);if(i&&this._handle.seek(i.offset)){const r=this._reader.readMessage(fe.RecordBatch);if(r!=null&&r.isRecordBatch()){const s=r.header(),o=this._reader.readMessageBody(r.bodyLength);return this._loadRecordBatch(s,o)}}return null}_readDictionaryBatch(t){var e;const i=(e=this._footer)===null||e===void 0?void 0:e.getDictionaryBatch(t);if(i&&this._handle.seek(i.offset)){const r=this._reader.readMessage(fe.DictionaryBatch);if(r!=null&&r.isDictionaryBatch()){const s=r.header(),o=this._reader.readMessageBody(r.bodyLength),a=this._loadDictionaryBatch(s,o);this.dictionaries.set(s.id,a)}}}_readFooter(){const{_handle:t}=this,e=t.size-Dp,i=t.readInt32(e),r=t.readAt(e-i,i);return Zs.decode(r)}_readNextMessageAndValidate(t){var e;if(this._footer||this.open(),this._footer&&this._recordBatchIndex<this.numRecordBatches){const i=(e=this._footer)===null||e===void 0?void 0:e.getRecordBatch(this._recordBatchIndex);if(i&&this._handle.seek(i.offset))return this._reader.readMessage(t)}return null}}class $b extends Ca{constructor(t,...e){const i=typeof e[0]!="number"?e.shift():void 0,r=e[0]instanceof Map?e.shift():void 0;super(t instanceof Ma?t:new Ma(t,i),r)}get footer(){return this._footer}get numDictionaries(){return this._footer?this._footer.numDictionaries:0}get numRecordBatches(){return this._footer?this._footer.numRecordBatches:0}isFile(){return!0}isAsync(){return!0}open(t){const e=Object.create(null,{open:{get:()=>super.open}});return Rt(this,void 0,void 0,function*(){if(!this.closed&&!this._footer){this.schema=(this._footer=yield this._readFooter()).schema;for(const i of this._footer.dictionaryBatches())i&&(yield this._readDictionaryBatch(this._dictionaryIndex++))}return yield e.open.call(this,t)})}readRecordBatch(t){var e;return Rt(this,void 0,void 0,function*(){if(this.closed)return null;this._footer||(yield this.open());const i=(e=this._footer)===null||e===void 0?void 0:e.getRecordBatch(t);if(i&&(yield this._handle.seek(i.offset))){const r=yield this._reader.readMessage(fe.RecordBatch);if(r!=null&&r.isRecordBatch()){const s=r.header(),o=yield this._reader.readMessageBody(r.bodyLength);return this._loadRecordBatch(s,o)}}return null})}_readDictionaryBatch(t){var e;return Rt(this,void 0,void 0,function*(){const i=(e=this._footer)===null||e===void 0?void 0:e.getDictionaryBatch(t);if(i&&(yield this._handle.seek(i.offset))){const r=yield this._reader.readMessage(fe.DictionaryBatch);if(r!=null&&r.isDictionaryBatch()){const s=r.header(),o=yield this._reader.readMessageBody(r.bodyLength),a=this._loadDictionaryBatch(s,o);this.dictionaries.set(s.id,a)}}})}_readFooter(){return Rt(this,void 0,void 0,function*(){const{_handle:t}=this;t._pending&&(yield t._pending);const e=t.size-Dp,i=yield t.readInt32(e),r=yield t.readAt(e-i,i);return Zs.decode(r)})}_readNextMessageAndValidate(t){return Rt(this,void 0,void 0,function*(){if(this._footer||(yield this.open()),this._footer&&this._recordBatchIndex<this.numRecordBatches){const e=this._footer.getRecordBatch(this._recordBatchIndex);if(e&&(yield this._handle.seek(e.offset)))return yield this._reader.readMessage(t)}return null})}}class qb extends Ia{constructor(t,e){super(t,e)}_loadVectors(t,e,i){return new ab(e,t.nodes,t.buffers,this.dictionaries).visitMany(i)}}function Fp(n,t){return t&&typeof t.autoDestroy=="boolean"?t.autoDestroy:n.autoDestroy}function*hd(n){const t=Ti.from(n);try{if(!t.open({autoDestroy:!1}).closed)do yield t;while(!t.reset().open().closed)}finally{t.cancel()}}function dd(n){return Jn(this,arguments,function*(){const e=yield Gt(Ti.from(n));try{if(!(yield Gt(e.open({autoDestroy:!1}))).closed)do yield yield Gt(e);while(!(yield Gt(e.reset().open())).closed)}finally{yield Gt(e.cancel())}})}function Kb(n){return new Aa(new qb(n))}function Zb(n){const t=n.peek(ho+7&-8);return t&&t.byteLength>=4?yu(t)?new Lp(new Up(n.read())):new Aa(new Ia(n)):new Aa(new Ia((function*(){})()))}function Jb(n){return Rt(this,void 0,void 0,function*(){const t=yield n.peek(ho+7&-8);return t&&t.byteLength>=4?yu(t)?new Lp(new Up(yield n.read())):new Ra(new Ca(n)):new Ra(new Ca((function(){return Jn(this,arguments,function*(){})})()))})}function Qb(n){return Rt(this,void 0,void 0,function*(){const{size:t}=yield n.stat(),e=new Ma(n,t);return t>=jb&&yu(yield e.readAt(0,ho+7&-8))?new Yb(new $b(e)):new Ra(new Ca(e))})}class Ue extends Jt{constructor(){super(),this._byteLength=0,this._nodes=[],this._buffers=[],this._bufferRegions=[]}static assemble(...t){const e=r=>r.flatMap(s=>Array.isArray(s)?e(s):s instanceof nn?s.data.children:s.data),i=new Ue;return i.visitMany(e(t)),i}visit(t){if(t instanceof pe)return this.visitMany(t.data),this;const{type:e}=t;if(!Dt.isDictionary(e)){const{length:i,nullCount:r}=t;if(i>2147483647)throw new RangeError("Cannot write arrays larger than 2^31 - 1 in length");Dt.isNull(e)||Bn.call(this,r<=0?new Uint8Array(0):ou(t.offset,i,t.nullBitmap)),this.nodes.push(new Ir(i,r))}return super.visit(t)}visitNull(t){return this}visitDictionary(t){return this.visit(t.clone(t.type.indices))}get nodes(){return this._nodes}get buffers(){return this._buffers}get byteLength(){return this._byteLength}get bufferRegions(){return this._bufferRegions}}function Bn(n){const t=n.byteLength+7&-8;return this.buffers.push(n),this.bufferRegions.push(new Qn(this._byteLength,t)),this._byteLength+=t,this}function tM(n){const{type:t,length:e,typeIds:i,valueOffsets:r}=n;if(Bn.call(this,i),t.mode===gn.Sparse)return Pl.call(this,n);if(t.mode===gn.Dense){if(n.offset<=0)return Bn.call(this,r),Pl.call(this,n);{const s=i.reduce((u,h)=>Math.max(u,h),i[0]),o=new Int32Array(s+1),a=new Int32Array(s+1).fill(-1),c=new Int32Array(e),l=Ql(-r[0],e,r);for(let u,h,f=-1;++f<e;)(h=a[u=i[f]])===-1&&(h=a[u]=l[u]),c[f]=l[f]-h,++o[u];Bn.call(this,c);for(let u,h=-1,f=t.children.length;++h<f;)if(u=n.children[h]){const p=t.typeIds[h],g=Math.min(e,o[p]);this.visit(u.slice(a[p],g))}}}return this}function eM(n){let t;return n.nullCount>=n.length?Bn.call(this,new Uint8Array(0)):(t=n.values)instanceof Uint8Array?Bn.call(this,ou(n.offset,n.length,t)):Bn.call(this,pa(n.values))}function nr(n){return Bn.call(this,n.values.subarray(0,n.length*n.stride))}function Np(n){const{length:t,values:e,valueOffsets:i}=n,r=i[0],s=i[t],o=Math.min(s-r,e.byteLength-r);return Bn.call(this,Ql(-i[0],t,i)),Bn.call(this,e.subarray(r,r+o)),this}function Su(n){const{length:t,valueOffsets:e}=n;return e&&Bn.call(this,Ql(e[0],t,e)),this.visit(n.children[0])}function Pl(n){return this.visitMany(n.type.children.map((t,e)=>n.children[e]).filter(Boolean))[0]}Ue.prototype.visitBool=eM;Ue.prototype.visitInt=nr;Ue.prototype.visitFloat=nr;Ue.prototype.visitUtf8=Np;Ue.prototype.visitBinary=Np;Ue.prototype.visitFixedSizeBinary=nr;Ue.prototype.visitDate=nr;Ue.prototype.visitTimestamp=nr;Ue.prototype.visitTime=nr;Ue.prototype.visitDecimal=nr;Ue.prototype.visitList=Su;Ue.prototype.visitStruct=Pl;Ue.prototype.visitUnion=tM;Ue.prototype.visitInterval=nr;Ue.prototype.visitFixedSizeList=Su;Ue.prototype.visitMap=Su;class Op extends hu{constructor(t){super(),this._position=0,this._started=!1,this._sink=new Jo,this._schema=null,this._dictionaryBlocks=[],this._recordBatchBlocks=[],this._dictionaryDeltaOffsets=new Map,on(t)||(t={autoDestroy:!0,writeLegacyIpcFormat:!1}),this._autoDestroy=typeof t.autoDestroy=="boolean"?t.autoDestroy:!0,this._writeLegacyIpcFormat=typeof t.writeLegacyIpcFormat=="boolean"?t.writeLegacyIpcFormat:!1}static throughNode(t){throw new Error('"throughNode" not available in this environment')}static throughDOM(t,e){throw new Error('"throughDOM" not available in this environment')}toString(t=!1){return this._sink.toString(t)}toUint8Array(t=!1){return this._sink.toUint8Array(t)}writeAll(t){return Yi(t)?t.then(e=>this.writeAll(e)):Ts(t)?Eu(this,t):Mu(this,t)}get closed(){return this._sink.closed}[Symbol.asyncIterator](){return this._sink[Symbol.asyncIterator]()}toDOMStream(t){return this._sink.toDOMStream(t)}toNodeStream(t){return this._sink.toNodeStream(t)}close(){return this.reset()._sink.close()}abort(t){return this.reset()._sink.abort(t)}finish(){return this._autoDestroy?this.close():this.reset(this._sink,this._schema),this}reset(t=this._sink,e=null){return t===this._sink||t instanceof Jo?this._sink=t:(this._sink=new Jo,t&&bS(t)?this.toDOMStream({type:"bytes"}).pipeTo(t):t&&MS(t)&&this.toNodeStream({objectMode:!1}).pipe(t)),this._started&&this._schema&&this._writeFooter(this._schema),this._started=!1,this._dictionaryBlocks=[],this._recordBatchBlocks=[],this._dictionaryDeltaOffsets=new Map,(!e||!Il(e,this._schema))&&(e==null?(this._position=0,this._schema=null):(this._started=!0,this._schema=e,this._writeSchema(e))),this}write(t){let e=null;if(this._sink){if(t==null)return this.finish()&&void 0;if(t instanceof Xe&&!(e=t.schema))return this.finish()&&void 0;if(t instanceof nn&&!(e=t.schema))return this.finish()&&void 0}else throw new Error("RecordBatchWriter is closed");if(e&&!Il(e,this._schema)){if(this._started&&this._autoDestroy)return this.close();this.reset(this._sink,e)}t instanceof nn?t instanceof gu||this._writeRecordBatch(t):t instanceof Xe?this.writeAll(t.batches):ao(t)&&this.writeAll(t)}_writeMessage(t,e=8){const i=e-1,r=Ye.encode(t),s=r.byteLength,o=this._writeLegacyIpcFormat?4:8,a=s+o+i&~i,c=a-s-o;return t.headerType===fe.RecordBatch?this._recordBatchBlocks.push(new Zi(a,t.bodyLength,this._position)):t.headerType===fe.DictionaryBatch&&this._dictionaryBlocks.push(new Zi(a,t.bodyLength,this._position)),this._writeLegacyIpcFormat||this._write(Int32Array.of(-1)),this._write(Int32Array.of(a-o)),s>0&&this._write(r),this._writePadding(c)}_write(t){if(this._started){const e=oe(t);e&&e.byteLength>0&&(this._sink.write(e),this._position+=e.byteLength)}return this}_writeSchema(t){return this._writeMessage(Ye.from(t))}_writeFooter(t){return this._writeLegacyIpcFormat?this._write(Int32Array.of(0)):this._write(Int32Array.of(-1,0))}_writeMagic(){return this._write(Js)}_writePadding(t){return t>0?this._write(new Uint8Array(t)):this}_writeRecordBatch(t){const{byteLength:e,nodes:i,bufferRegions:r,buffers:s}=Ue.assemble(t),o=new _n(t.numRows,i,r),a=Ye.from(o,e);return this._writeDictionaries(t)._writeMessage(a)._writeBodyBuffers(s)}_writeDictionaryBatch(t,e,i=!1){this._dictionaryDeltaOffsets.set(e,t.length+(this._dictionaryDeltaOffsets.get(e)||0));const{byteLength:r,nodes:s,bufferRegions:o,buffers:a}=Ue.assemble(new pe([t])),c=new _n(t.length,s,o),l=new si(c,e,i),u=Ye.from(l,r);return this._writeMessage(u)._writeBodyBuffers(a)}_writeBodyBuffers(t){let e,i,r;for(let s=-1,o=t.length;++s<o;)(e=t[s])&&(i=e.byteLength)>0&&(this._write(e),(r=(i+7&-8)-i)>0&&this._writePadding(r));return this}_writeDictionaries(t){for(let[e,i]of t.dictionaries){let r=this._dictionaryDeltaOffsets.get(e)||0;if(r===0||(i=i==null?void 0:i.slice(r)).length>0)for(const s of i.data)this._writeDictionaryBatch(s,e,r>0),r+=s.length}return this}}class xu extends Op{static writeAll(t,e){const i=new xu(e);return Yi(t)?t.then(r=>i.writeAll(r)):Ts(t)?Eu(i,t):Mu(i,t)}}class bu extends Op{static writeAll(t){const e=new bu;return Yi(t)?t.then(i=>e.writeAll(i)):Ts(t)?Eu(e,t):Mu(e,t)}constructor(){super(),this._autoDestroy=!0}_writeSchema(t){return this._writeMagic()._writePadding(2)}_writeFooter(t){const e=Zs.encode(new Zs(t,pn.V4,this._recordBatchBlocks,this._dictionaryBlocks));return super._writeFooter(t)._write(e)._write(Int32Array.of(e.byteLength))._writeMagic()}}function Mu(n,t){let e=t;t instanceof Xe&&(e=t.batches,n.reset(void 0,t.schema));for(const i of e)n.write(i);return n.finish()}function Eu(n,t){var e,i,r,s;return Rt(this,void 0,void 0,function*(){try{for(e=Mr(t);i=yield e.next(),!i.done;){const o=i.value;n.write(o)}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=e.return)&&(yield s.call(e))}finally{if(r)throw r.error}}return n.finish()})}function Vs(n){const t=Ti.from(n);return Yi(t)?t.then(e=>Vs(e)):t.isAsync()?t.readAll().then(e=>new Xe(e)):new Xe(t.readAll())}function Ic(n,t="stream"){return(t==="stream"?xu:bu).writeAll(n).toUint8Array(!0)}var fd=(function(){function n(t,e,i,r){var s=this;this.getCell=function(o,a){var c=o<s.headerRows&&a<s.headerColumns,l=o>=s.headerRows&&a<s.headerColumns,u=o<s.headerRows&&a>=s.headerColumns;if(c){var h=["blank"];return a>0&&h.push("level"+o),{type:"blank",classNames:h.join(" "),content:""}}else if(u){var f=a-s.headerColumns,h=["col_heading","level"+o,"col"+f];return{type:"columns",classNames:h.join(" "),content:s.getContent(s.columnsTable,f,o)}}else if(l){var p=o-s.headerRows,h=["row_heading","level"+a,"row"+p];return{type:"index",id:"T_".concat(s.uuid,"level").concat(a,"_row").concat(p),classNames:h.join(" "),content:s.getContent(s.indexTable,p,a)}}else{var p=o-s.headerRows,f=a-s.headerColumns,h=["data","row"+p,"col"+f],g=s.styler?s.getContent(s.styler.displayValuesTable,p,f):s.getContent(s.dataTable,p,f);return{type:"data",id:"T_".concat(s.uuid,"row").concat(p,"_col").concat(f),classNames:h.join(" "),content:g}}},this.getContent=function(o,a,c){var l=o.getChildAt(c);if(l===null)return"";var u=s.getColumnTypeId(o,c);switch(u){case F.Timestamp:return s.nanosToDate(l.get(a));default:return l.get(a)}},this.dataTable=Vs(t),this.indexTable=Vs(e),this.columnsTable=Vs(i),this.styler=r?{caption:r.caption,displayValuesTable:Vs(r.displayValues),styles:r.styles,uuid:r.uuid}:void 0}return Object.defineProperty(n.prototype,"rows",{get:function(){return this.indexTable.numRows+this.columnsTable.numCols},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"columns",{get:function(){return this.indexTable.numCols+this.columnsTable.numRows},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"headerRows",{get:function(){return this.rows-this.dataRows},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"headerColumns",{get:function(){return this.columns-this.dataColumns},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"dataRows",{get:function(){return this.dataTable.numRows},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"dataColumns",{get:function(){return this.dataTable.numCols},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"uuid",{get:function(){return this.styler&&this.styler.uuid},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"caption",{get:function(){return this.styler&&this.styler.caption},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"styles",{get:function(){return this.styler&&this.styler.styles},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"table",{get:function(){return this.dataTable},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"index",{get:function(){return this.indexTable},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"columnTable",{get:function(){return this.columnsTable},enumerable:!1,configurable:!0}),n.prototype.serialize=function(){return{data:Ic(this.dataTable),index:Ic(this.indexTable),columns:Ic(this.columnsTable)}},n.prototype.getColumnTypeId=function(t,e){return t.schema.fields[e].type.typeId},n.prototype.nanosToDate=function(t){return new Date(t/1e6)},n})(),Hs=function(){return Hs=Object.assign||function(n){for(var t,e=1,i=arguments.length;e<i;e++){t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Hs.apply(this,arguments)},Gs;(function(n){n.COMPONENT_READY="streamlit:componentReady",n.SET_COMPONENT_VALUE="streamlit:setComponentValue",n.SET_FRAME_HEIGHT="streamlit:setFrameHeight"})(Gs||(Gs={}));var rn=(function(){function n(){}return n.API_VERSION=1,n.RENDER_EVENT="streamlit:render",n.events=new EventTarget,n.registeredMessageListener=!1,n.setComponentReady=function(){n.registeredMessageListener||(window.addEventListener("message",n.onMessageEvent),n.registeredMessageListener=!0),n.sendBackMsg(Gs.COMPONENT_READY,{apiVersion:n.API_VERSION})},n.setFrameHeight=function(t){t===void 0&&(t=document.body.scrollHeight),t!==n.lastFrameHeight&&(n.lastFrameHeight=t,n.sendBackMsg(Gs.SET_FRAME_HEIGHT,{height:t}))},n.setComponentValue=function(t){var e;t instanceof fd?(e="dataframe",t=t.serialize()):iM(t)?(e="bytes",t=new Uint8Array(t.buffer)):t instanceof ArrayBuffer?(e="bytes",t=new Uint8Array(t)):e="json",n.sendBackMsg(Gs.SET_COMPONENT_VALUE,{value:t,dataType:e})},n.onMessageEvent=function(t){var e=t.data.type;switch(e){case n.RENDER_EVENT:n.onRenderMessage(t.data);break}},n.onRenderMessage=function(t){var e=t.args;e==null&&(console.error("Got null args in onRenderMessage. This should never happen"),e={});var i=t.dfs&&t.dfs.length>0?n.argsDataframeToObject(t.dfs):{};e=Hs(Hs({},e),i);var r=!!t.disabled,s=t.theme;s&&nM(s);var o={disabled:r,args:e,theme:s},a=new CustomEvent(n.RENDER_EVENT,{detail:o});n.events.dispatchEvent(a)},n.argsDataframeToObject=function(t){var e=t.map(function(i){var r=i.key,s=i.value;return[r,n.toArrowTable(s)]});return Object.fromEntries(e)},n.toArrowTable=function(t){var e,i=(e=t.data,e.data),r=e.index,s=e.columns,o=e.styler;return new fd(i,r,s,o)},n.sendBackMsg=function(t,e){window.parent.postMessage(Hs({isStreamlitMessage:!0,type:t},e),"*")},n})(),nM=function(n){var t=document.createElement("style");document.head.appendChild(t),t.innerHTML=`
    :root {
      --primary-color: `.concat(n.primaryColor,`;
      --background-color: `).concat(n.backgroundColor,`;
      --secondary-background-color: `).concat(n.secondaryBackgroundColor,`;
      --text-color: `).concat(n.textColor,`;
      --font: `).concat(n.font,`;
    }

    body {
      background-color: var(--background-color);
      color: var(--text-color);
    }
  `)};function iM(n){var t=!1;try{t=n instanceof BigInt64Array||n instanceof BigUint64Array}catch{}return n instanceof Int8Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray||n instanceof Int16Array||n instanceof Uint16Array||n instanceof Int32Array||n instanceof Uint32Array||n instanceof Float32Array||n instanceof Float64Array||t}var Bp=(function(){var n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,r){i.__proto__=r}||function(i,r){for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(i[s]=r[s])},n(t,e)};return function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");n(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}})();(function(n){Bp(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.componentDidMount=function(){rn.setFrameHeight()},t.prototype.componentDidUpdate=function(){rn.setFrameHeight()},t})(jr.PureComponent);function rM(n){var t=(function(e){Bp(i,e);function i(r){var s=e.call(this,r)||this;return s.componentDidMount=function(){rn.events.addEventListener(rn.RENDER_EVENT,s.onRenderEvent),rn.setComponentReady()},s.componentDidUpdate=function(){s.state.componentError!=null&&rn.setFrameHeight()},s.componentWillUnmount=function(){rn.events.removeEventListener(rn.RENDER_EVENT,s.onRenderEvent)},s.onRenderEvent=function(o){s.setState({renderData:o.detail})},s.state={renderData:void 0,componentError:void 0},s}return i.prototype.render=function(){return this.state.componentError!=null?jr.createElement("div",null,jr.createElement("h1",null,"Component Error"),jr.createElement("span",null,this.state.componentError.message)):this.state.renderData==null?null:jr.createElement(n,{width:window.innerWidth,disabled:this.state.renderData.disabled,args:this.state.renderData.args,theme:this.state.renderData.theme})},i.getDerivedStateFromError=function(r){return{componentError:r}},i})(jr.PureComponent);return fS(t,n)}const sM=document.querySelector("#root");sM.innerHTML=`
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
`;const Qi=document.querySelector("#globe-canvas"),zp=document.querySelector("#readout"),fo=new Z0,Rr=new En(35,1,.1,100);Rr.position.set(0,0,4.25);const Va=new K0({canvas:Qi,antialias:!0,alpha:!0});Va.setPixelRatio(Math.min(window.devicePixelRatio,2));Va.setClearColor(529937,1);const ei=new Jr;fo.add(ei);const Ul=new Jr;ei.add(Ul);const oM=new iS,aM=oM.load("https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg"),Vp=new mn(new ws(1.3,64,64),new Q0({map:aM,shininess:12,specular:3364164}));ei.add(Vp);const cM=new mn(new ws(1.37,64,64),new io({color:7395760,transparent:!0,opacity:.12,side:$e}));ei.add(cM);const kp=new oi,Hp=[];for(let n=0;n<900;n+=1){const t=6+Math.random()*5,e=Math.random()*Math.PI*2,i=Math.acos(Math.random()*2-1);Hp.push(t*Math.sin(i)*Math.cos(e),t*Math.sin(i)*Math.sin(e),t*Math.cos(i))}kp.setAttribute("position",new On(Hp,3));fo.add(new J0(kp,new Xd({color:11068864,size:.018,transparent:!0,opacity:.8})));fo.add(new aS(10210227,1.15));const Gp=new oS(16777215,2.1);Gp.position.set(4,2,5);fo.add(Gp);const pd=new cS,Cc=new ce;let wu=!1,Tu=!1,Fl=0,Nl=0,Ns=null;function Wp(){const n=Qi.getBoundingClientRect();Va.setSize(n.width,n.height,!1),Rr.aspect=n.width/Math.max(n.height,1),Rr.updateProjectionMatrix(),rn.setFrameHeight(Math.max(420,n.height))}function Xp(n,t){Ns&&ei.remove(Ns);const e=(90-n)*Math.PI/180,i=(t+180)*Math.PI/180,r=new z(-1.31*Math.sin(e)*Math.cos(i),1.31*Math.cos(e),1.31*Math.sin(e)*Math.sin(i));Ns=new mn(new ws(.045,16,16),new io({color:16761948})),Ns.position.copy(r),ei.add(Ns)}function lM(n,t,e=1.33){const i=(90-n)*Math.PI/180,r=(t+180)*Math.PI/180;return new z(-e*Math.sin(i)*Math.cos(r),e*Math.cos(i),e*Math.sin(i)*Math.sin(r))}function uM(n=[]){Ul.clear(),n.forEach(t=>{const e=new mn(new ws(.025,12,12),new io({color:9364364}));e.position.copy(lM(t.latitude,t.longitude)),Ul.add(e)})}function hM(n,t){const e=Number(n.toFixed(5)),i=Number(t.toFixed(5));zp.textContent=`PINNED / ${e.toFixed(5)}° LAT  ${i.toFixed(5)}° LON`,Xp(e,i),rn.setComponentValue({latitude:e,longitude:i,source:"threejs-globe"})}Qi.addEventListener("pointerdown",n=>{wu=!0,Tu=!1,Fl=n.clientX,Nl=n.clientY,Qi.setPointerCapture(n.pointerId)});Qi.addEventListener("pointermove",n=>{if(!wu)return;const t=n.clientX-Fl,e=n.clientY-Nl;Math.abs(t)+Math.abs(e)>2&&(Tu=!0),ei.rotation.y+=t*.006,ei.rotation.x=Math.max(-.55,Math.min(.55,ei.rotation.x+e*.004)),Fl=n.clientX,Nl=n.clientY});Qi.addEventListener("pointerup",n=>{if(wu=!1,Tu)return;const t=Qi.getBoundingClientRect();Cc.x=(n.clientX-t.left)/t.width*2-1,Cc.y=-((n.clientY-t.top)/t.height)*2+1,pd.setFromCamera(Cc,Rr);const e=pd.intersectObject(Vp)[0];if(!e)return;const i=ei.worldToLocal(e.point.clone()).normalize(),r=90-Math.acos(i.y)*180/Math.PI,s=Math.atan2(i.z,-i.x)*180/Math.PI-180;hM(r,(s+540)%360-180)});Qi.addEventListener("wheel",n=>{n.preventDefault(),Rr.position.z=Math.max(2.8,Math.min(6.2,Rr.position.z+n.deltaY*.0025))},{passive:!1});function jp(){requestAnimationFrame(jp),Va.render(fo,Rr)}window.addEventListener("resize",Wp);Wp();jp();rn.setComponentReady();rn.setFrameHeight(760);rn.events.addEventListener(rn.RENDER_EVENT,n=>{const t=n.detail.args||{};if(typeof t.latitude=="number"&&typeof t.longitude=="number"){Xp(t.latitude,t.longitude),uM(t.field_points||[]);const e=t.location_name?`${t.location_name} / `:"";zp.textContent=`${e}${t.latitude.toFixed(5)}° LAT  ${t.longitude.toFixed(5)}° LON`}});rM(()=>{});
