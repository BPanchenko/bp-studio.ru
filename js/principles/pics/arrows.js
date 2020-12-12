
import {
    THREE,
    scene
} from '../init.js'

const COLORS = [0x87c4be, 0xbb3907];

export default function () {
    scene.add(initBiggerArrow())
    scene.add(initSmallerArrow())
}

function initBiggerArrow() {

    let pts = [
        new THREE.Vector2( 0.923728813559322 , 0.7768361581920904 ),
        new THREE.Vector2( -0.5084745762711864 , 0.7768361581920904 ),
        new THREE.Vector2( -0.0451977401129944 , 0.3050847457627119 ),
        new THREE.Vector2( -0.7514124293785311 , -0.403954802259887 ),
        new THREE.Vector2( -0.2598870056497175 , -0.8983050847457627 ),
        new THREE.Vector2( 0.4519774011299435 , -0.1892655367231638 ),
        new THREE.Vector2( 0.923728813559322 , -0.6553672316384181 ),
        new THREE.Vector2( 0.923728813559322 , 0.7768361581920904 )
    ]

    let shape = new THREE.Shape(pts)
    let geometry = new THREE.ShapeGeometry(shape)
    let material = new THREE.MeshBasicMaterial({
        color: COLORS[0]
    })
    let mesh = new THREE.Mesh(geometry, material)

    return mesh
}

function initSmallerArrow() {
    let pts = [
        new THREE.Vector2( -0.2598870056497175 , -0.8983050847457627 ),
        new THREE.Vector2( 0.3813559322033898 , -0.8983050847457627 ),
        new THREE.Vector2( 0.172316384180791 , -0.6864406779661017 ),
        new THREE.Vector2( 0.8305084745762712 , -0.0254237288135593 ),
        new THREE.Vector2( 0.6242937853107345 , 0.1836158192090395 ),
        new THREE.Vector2( -0.0367231638418079 , -0.480225988700565 ),
        new THREE.Vector2( -0.2598870056497175 , -0.1949152542372881 ),
        new THREE.Vector2( -0.2598870056497175 , -0.8983050847457627 )
    ]

    let shape = new THREE.Shape(pts)
    let geometry = new THREE.ShapeGeometry(shape)
    let material = new THREE.MeshBasicMaterial( {
        color: COLORS[1],
        opacity: 0.7
    } )

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
    
    let mesh = new THREE.Mesh(geometry, material)

    return mesh
}