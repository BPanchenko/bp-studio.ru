
import {
    THREE,
    scene
} from '../init.js'

const COLORS = [ 0x7fcabf, 0xf8d9a2 , 0xf2a39c ]

export default function () {
    scene.add(initSquare1())
    scene.add(initSquare2())
    scene.add(initSquare3())
}

function initSquare1() {

    let material = new THREE.MeshBasicMaterial({
        color: COLORS[0],
        opacity: 1
    })

    material.blending = THREE.CustomBlending
    material.blendEquation = THREE.AddEquation
    material.blendDst = THREE.ZeroFactor
    material.blendSrc = THREE.DstColorFactor

    let mesh = new THREE.Mesh(
        new THREE.ShapeGeometry(
            new THREE.Shape([
                new THREE.Vector2( -0.4067796610169492 , -0.7966101694915254 ),
                new THREE.Vector2( -0.4067796610169492 , -0.3954802259887006 ),
                new THREE.Vector2( -0.0056497175141243 , -0.3954802259887006 ),
                new THREE.Vector2( -0.0056497175141243 , -0.7966101694915254 ),
                new THREE.Vector2( -0.4067796610169492 , -0.7966101694915254 )
            ])
        ),
        material
    )

    mesh.renderOrder = 3

    return mesh
}

function initSquare2() {

    let mesh = new THREE.Mesh(
        new THREE.ShapeGeometry(
            new THREE.Shape([
                new THREE.Vector2( -0.2062146892655367 , 0.9774011299435028 ),
                new THREE.Vector2( 0.480225988700565 , 0.9774011299435028 ),
                new THREE.Vector2( 0.480225988700565 , -0.596045197740113 ),
                new THREE.Vector2( -0.2062146892655367 , -0.596045197740113 ),
                new THREE.Vector2( -0.2062146892655367 , 0.9774011299435028 )
            ])
        ),
        new THREE.MeshBasicMaterial({
            color: COLORS[1],
            opacity: 1
        })
    )

    mesh.renderOrder = 2

    return mesh
}

function initSquare3() {

    let material = new THREE.MeshBasicMaterial({
        color: COLORS[2],
        opacity: 1
    })

    material.blending = THREE.CustomBlending
    material.blendEquation = THREE.AddEquation
    material.blendDst = THREE.ZeroFactor
    material.blendSrc = THREE.DstColorFactor

    let mesh = new THREE.Mesh(
        new THREE.ShapeGeometry(
            new THREE.Shape([
                new THREE.Vector2( 0.3983050847457627 , 0.9774011299435028 ),
                new THREE.Vector2( 1.067796610169492 , 0.9774011299435028 ),
                new THREE.Vector2( 1.067796610169492 , -1.081920903954802 ),
                new THREE.Vector2( 0.3983050847457627 , -1.081920903954802 ),
                new THREE.Vector2( 0.3983050847457627 , 0.9774011299435028 )
            ])
        ),
        material
    )

    mesh.renderOrder = 3

    return mesh
}