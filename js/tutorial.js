var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//camera.position.z = 5;
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function createCube() {
  var geometry = new THREE.BoxGeometry( 1, 1, 1);
  var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  return new THREE.Mesh(geometry, material);
}

function rotateCube(cube) {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
}

function createLine() {
  var material = new THREE.LineBasicMaterial({ color: 0x0000ff });
  var geometry = new THREE.Geometry();
  geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
  geometry.vertices.push(new THREE.Vector3(0, 10, 0));
  geometry.vertices.push(new THREE.Vector3(10, 0, 0));
  geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
  return new THREE.Line(geometry, material);
}

//var cube = createCube();
//scene.add(cube);

var line = createLine();
scene.add(line);

function animate() {
  requestAnimationFrame(animate);
  //rotateCube(cube);
  renderer.render(scene, camera);
}
animate();
