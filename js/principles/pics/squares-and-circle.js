
import {
    THREE,
    scene
} from '../init.js'

const COLORS = new Map([
    ['circle', 0xef9ead ],
    ['biggerSquare', 0xef9ead ],
    ['smallerSquare', 0x22a67d ]
])

export default function () {
    scene.add(initCircle())
    scene.add(initSmallerSquare())
    scene.add(initBiggerSquare())
}

function initCircle() {

    let mesh = new THREE.Mesh(
        new THREE.CircleGeometry( 0.1977401129943503 , 128 ),
        new THREE.MeshBasicMaterial({
            color: COLORS.get('circle'),
            opacity: 1
        })
    )

    mesh.matrix.setPosition( -0.9209039548022599 , 0.5706214689265537 , 0 )
    mesh.matrixAutoUpdate = false
    mesh.renderOrder = 1

    return mesh
}

function initSmallerSquare() {

    let material = new THREE.MeshBasicMaterial({
        color: COLORS.get('smallerSquare'),
        opacity: 0.78
    })

    material.blending = THREE.CustomBlending
    material.blendEquation = THREE.AddEquation
    material.blendDst = THREE.ZeroFactor
    material.blendSrc = THREE.DstColorFactor

    let mesh = new THREE.Mesh(
        new THREE.ShapeGeometry(
            new THREE.Shape([
                new THREE.Vector2( -0.9209039548022599 , 0.5706214689265537 ),
                new THREE.Vector2( 0.0819209039548023 , 0.5706214689265537 ),
                new THREE.Vector2( 0.0819209039548023 , -0.3587570621468927 ),
                new THREE.Vector2( -0.9209039548022599 , -0.3587570621468927 ),
                new THREE.Vector2( -0.9209039548022599 , 0.5706214689265537 )
            ])
        ),
        material
    )

    mesh.renderOrder = 3

    return mesh
}

function initBiggerSquare() {

    let mesh = new THREE.Mesh(
        new THREE.ShapeGeometry(
            new THREE.Shape([
                new THREE.Vector2( -0.3220338983050847 , 0.7711864406779661 ),
                new THREE.Vector2( 1.194915254237288 , 0.768361581920904 ),
                new THREE.Vector2( 1.194915254237288 , -0.7768361581920904 ),
                new THREE.Vector2( -0.3220338983050847 , -0.7768361581920904 ),
                new THREE.Vector2( -0.3220338983050847 , 0.7711864406779661 )
            ])
        ),
        new THREE.MeshBasicMaterial({
            color: COLORS.get('biggerSquare'),
            opacity: 1
        })
    )

    mesh.renderOrder = 2

    return mesh
}