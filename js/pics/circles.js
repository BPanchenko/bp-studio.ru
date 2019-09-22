
import {
    THREE,
    scene
} from '../init.js'

const RADIUS = 0.6355932203389831

export default function () {
    scene.add(initLeftCircle())
    scene.add(initRightCircle())
}

function initLeftCircle() {
    let geometry = new THREE.CircleGeometry( RADIUS , 128 )
    let material = new THREE.MeshBasicMaterial({
        color: 0xf5885a,
        opacity: 0.9
    })

    material.blending = THREE.CustomBlending;
    material.blendEquation = THREE.AddEquation;
    material.blendDst = THREE.ZeroFactor;

    // material.blendSrc = THREE.OneFactor
    // material.blendSrc = THREE.SrcColorFactor
    // material.blendSrc = THREE.OneMinusSrcColorFactor
    // material.blendSrc = THREE.SrcAlphaFactor
    // material.blendSrc = THREE.OneMinusSrcAlphaFactor
    // material.blendSrc = THREE.DstAlphaFactor
    // material.blendSrc = THREE.OneMinusDstAlphaFactor
    material.blendSrc = THREE.DstColorFactor
    // material.blendSrc = THREE.OneMinusDstColorFactor
    // material.blendSrc = THREE.SrcAlphaSaturateFactor

    let mesh = new THREE.Mesh( geometry, material )

    mesh.matrix.setPosition( -0.3587570621468927 , 0.0564971751412429 , 0)
    mesh.matrixAutoUpdate = false
    mesh.renderOrder = 2

    return mesh
}

function initRightCircle() {
    let geometry = new THREE.CircleGeometry( RADIUS , 128 )
    let material = new THREE.MeshBasicMaterial({
        color: 0x6e669f,
        opacity: 0.8
    })

    let mesh = new THREE.Mesh( geometry, material )

    mesh.matrix.setPosition( 0.3926553672316384 , 0.0564971751412429 , 0)
    mesh.matrixAutoUpdate = false
    mesh.renderOrder = 1

    return mesh
}