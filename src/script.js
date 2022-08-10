import "./style.css";
import * as THREE from "three";
import gsap from "gsap";

// Cursor
const cursor = {
  x: 0,
  y: 0,
};

window.addEventListener("mousemove", (e) => {
  cursor.x = e.clientX / sizes.width - 0.5;
  cursor.y = - (e.clientY / sizes.width - 0.5)
  console.log(cursor.x, cursor.y);
});

// scene
const scene = new THREE.Scene();

const group = new THREE.Group();
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);

group.add(cube1);

// sizes
const sizes = {
  width: 800,
  height: 600,
};

// camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);

// const aspectRatio = sizes.width / sizes.height

// const camera = new THREE.OrthographicCamera(-1 * aspectRatio, 1 * aspectRatio, 1, -1, 0.1, 100)
// camera.position.x = 2
// camera.position.y = 2
camera.position.z = 3;
camera.lookAt(cube1.position);
scene.add(camera);

// axes helper
// const axesHelper = new THREE.AxesHelper();
// scene.add(axesHelper);

// renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Clock
const clock = new THREE.Clock();

// animation
const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // render animation here
  // cube1.position.x += 0.01
  // cube1.rotation.y = elapsedTime;

  // update camera
  camera.position.y = cursor.y * 3
  camera.position.x = cursor.x * 3
  camera.lookAt(new THREE.Vector3())

  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
