
import * as THREE from './three.module.js'
import {
    CLS,
    ELEMS,
    PIC,
    PRINCIPLES_PATH,
    renderer,
    renderScene,
    scene,
    camera
} from './init.js'


/* DOM Events
 ========================================================================== */

ELEMS.principle.addEventListener('click', event => fetchPrinciple().then(renderPrinciple));


/* ========================================================================
   Canvas
 ========================================================================== */

function renderCircle() {
    var geometry = new THREE.CircleGeometry( 0.5, 128 );
    var material = new THREE.MeshBasicMaterial( { color: 0x87c4be } );
    var circle = new THREE.Mesh( geometry, material );

    circle.matrix.setPosition(0.5,0,0);
    circle.matrixAutoUpdate = false;

    scene.add( circle );
}

function renderTriangle() {
    var triangle=new THREE.Geometry();
    triangle.vertices.push(new THREE.Vector3(0,1,0));
    triangle.vertices.push(new THREE.Vector3(-1,-1,0));
    triangle.vertices.push(new THREE.Vector3(1,-1,0));
    triangle.faces.push(new THREE.Face3(0,1,2));

    var triangleMaterial=new THREE.MeshBasicMaterial({
        color: 0xf8d9a2,
        side: THREE.DoubleSide
    });

    var triangleMesh=new THREE.Mesh(triangle,triangleMaterial);
    triangleMesh.position.set(0,0.0,4.0);

    scene.add(triangleMesh);
}

renderCircle()
renderTriangle()
renderScene()


/* ========================================================================
   Principle: fetch & render
 ========================================================================== */

async function fetchPrinciple() {
    let principlesList = await fetch(PRINCIPLES_PATH)
        .then(response => response.json())
        .then(json => json.data.filter(d => d.enable))
    return _.sample(principlesList)
}

function renderPrinciple(data) {

    if (data.title.length <= 14) {
        ELEMS.principleTitle.classList.add(CLS.bigger);
    } else {
        ELEMS.principleTitle.classList.remove(CLS.bigger);
    }

    ELEMS.principleTitle.innerHTML = data.title
    ELEMS.principleText.innerHTML = data.text

}

fetchPrinciple().then(renderPrinciple)
