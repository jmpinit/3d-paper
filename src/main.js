import * as THREE from 'three';
import paper from 'paper';

const srcCanvas = document.createElement('canvas');
srcCanvas.width = 512;
srcCanvas.height = 512;

paper.setup(srcCanvas);

var circle = new paper.Path.Circle(new paper.Point(128-20, 128), 70);
circle.fillColor = 'red';

var circle2 = new paper.Path.Circle(new paper.Point(128+20, 128), 70);
circle2.style = {
    fillColor: 'blue',
    strokeColor: 'green',
    strokeWidth: 10
};

// Make circle2 50% transparent:
circle2.opacity = 0.5;

const canvas = document.createElement('canvas');
canvas.width = 512;
canvas.height = 512;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 500;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const texture = new THREE.Texture(canvas);
//var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var material = new THREE.MeshBasicMaterial({ map: texture });
const geometry = new THREE.BoxGeometry( 3, 3, 3);
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

camera.position.z = 5;

const render = function () {
    requestAnimationFrame( render );

    paper.view.draw();

    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(srcCanvas, 0, 0);

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    texture.needsUpdate = true;

    renderer.render(scene, camera);
};

render();