
import * as THREE from '../lib/three.module.js'
// import Stats from '../lib/stats.module.js'

const PRINCIPLES_PATH = "/data/principles.json"

const CLS = {
    'bigger': 's-bigger'
}

const ELEMS = {
    canvasContainer: document.querySelector('.js-canvas-container'),
    poster: document.querySelector('.js-poster'),
    posterTitle: document.querySelector('.js-poster-title'),
    posterText: document.querySelector('.js-poster-text')
}

const PIC = {

    get width() { return this.__width },
    set width(val) {
        this.__width = val;
        this.__horizontalRatio = this.__width/this.__height
        this.__verticalRatio = this.__height/this.__width
    },
    
    get height() { return this.__height },
    set height(val) {
        this.__height = val
        this.__horizontalRatio = this.__width/this.__height
        this.__verticalRatio = this.__height/this.__width
    },
    
    get ratio() {
        return this.__horizontalRatio > this.__verticalRatio ? this.__horizontalRatio : this.__verticalRatio;
    },
    get orientation() {
        return this.__horizontalRatio > this.__verticalRatio ? 'horizontal' : 'vertical';
    }
}

const scene = new THREE.Scene()
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1)

scene.background = new THREE.Color(0xFDF6E5)
camera.position.set(0, 0, 10)
scene.add( camera )

// create a render and set the size
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

renderer.setClearColor(new THREE.Color(0xEEEEEE))
renderer.setSize(PIC.width, PIC.height)
renderer.shadowMap.enabled = true
ELEMS.canvasContainer.appendChild(renderer.domElement)

// let stats = new Stats()
// ELEMS.canvasContainer.appendChild(stats.dom)

window.addEventListener('resize', onWindowResize, false)

function renderScene(){
    renderer.render(scene,camera);
}

function onWindowResize() {
    PIC.width = ELEMS.canvasContainer.offsetWidth
    PIC.height = ELEMS.canvasContainer.offsetHeight

    if (PIC.orientation == 'horizontal') {
        camera.left = -PIC.ratio
        camera.right = PIC.ratio
        camera.top = 1
        camera.bottom = -1
    } else {
        camera.left = -1
        camera.right = 1
        camera.top = PIC.ratio
        camera.bottom = -PIC.ratio
    }

    camera.updateProjectionMatrix()
    renderer.setSize(PIC.width, PIC.height)
    renderScene()
}

onWindowResize()

export {
    camera,
    renderer,
    renderScene,
    scene,

    CLS,
    ELEMS,
    PIC,
    PRINCIPLES_PATH,
    THREE
}