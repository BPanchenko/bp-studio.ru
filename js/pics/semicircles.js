
import {
    THREE,
    scene
} from '../init.js'

const COLORS = [ 0xfba67e , 0xcce3d9 , 0xf8d9a2 ]

export default function () {
    let semicircles = [
        initSemicircle(COLORS[0]),
        initSemicircle(COLORS[1]),
        initSemicircle(COLORS[2])
    ]

    console.log(semicircles[0])
    
    semicircles[0].matrix.setPosition( -0.5 , 0 , 0)
    // semicircles[0].matrix.scale( 1 , 1 , 1)
    semicircles[0].matrixAutoUpdate = false
    // semicircles[0].updateMatrix()
    semicircles[0].renderOrder = 3
    
    semicircles[1].matrix.setPosition( 0 , 0 , 0)
    semicircles[1].matrixAutoUpdate = false
    semicircles[1].renderOrder = 2
    
    semicircles[2].matrix.setPosition( 0.5 , 0 , 0)
    semicircles[2].matrixAutoUpdate = false
    semicircles[2].renderOrder = 1

    semicircles.forEach( semi => scene.add(semi) )
}

function initSemicircle(color) {
    
    let shape = new THREE.Shape()
    shape.moveTo( 0 , -1 )
    shape.bezierCurveTo( 1.3 , -1 , 1.3 , 1, 0 , 1 )
    shape.lineTo( 0 , -1 )

    let geometry = new THREE.ShapeBufferGeometry( shape, 128 )

    let material = new THREE.MeshBasicMaterial({
        color,
        opacity: 1
    })

    material.blending = THREE.CustomBlending
    material.blendEquation = THREE.AddEquation
    material.blendSrc = THREE.DstColorFactor
    material.blendDst = THREE.ZeroFactor

    let mesh = new THREE.Mesh(
        geometry,
        material
    )

    return mesh
}