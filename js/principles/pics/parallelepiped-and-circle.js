
import {
    THREE,
    scene
} from '../init.js'

const COLORS = [ 0xf5a09a , 0xf28857 ]

export default function () {
    scene.add(initParallelepiped())
    scene.add(initCircle())
}

function initParallelepiped() {
    let pts = [
        new THREE.Vector2( -0.480225988700565 , -0.6242937853107345 ),
        new THREE.Vector2( -1.344632768361582 , -0.6242937853107345 ),
        new THREE.Vector2( 0.2542372881355932 , 0.9774011299435028 ),
        new THREE.Vector2( 1.11864406779661 , 0.980225988700565 ),
        new THREE.Vector2( -0.480225988700565 , -0.6242937853107345 )
    ]

    let shape = new THREE.Shape(pts)
    let geometry = new THREE.ShapeGeometry(shape)

    let material = new THREE.MeshBasicMaterial({
        color: COLORS[0],
        opacity: 1
    })

    material.blending = THREE.CustomBlending
    material.blendEquation = THREE.AddEquation
    material.blendDst = THREE.ZeroFactor
    material.blendSrc = THREE.DstColorFactor
    
    let mesh = new THREE.Mesh(geometry, material)
    mesh.renderOrder = 2

    return mesh
}

function initCircle() {
    let geometry = new THREE.CircleGeometry( 0.3757062146892655, 128 )
    let material = new THREE.MeshBasicMaterial({
        color: COLORS[1],
        opacity: 1
    })

    let mesh = new THREE.Mesh( geometry, material )

    mesh.matrix.setPosition( -0.480225988700565 , -0.6242937853107345 , 0 )
    mesh.matrixAutoUpdate = false
    mesh.renderOrder = 1

    return mesh
}