
import * as THREE from './three.module.js'

const PRINCIPLES_PATH = "/principles.json"

const elems = initElems()


/* Principle: fetch & render
 ========================================================================== */

async function fetchPrinciple() {
    let principlesList = await fetch(PRINCIPLES_PATH)
        .then(response => response.json())
        .then(json => json.data.filter(d => d.enable))
    return _.sample(principlesList)
}

function renderPrinciple(data) {
    console.log(data)
}

fetchPrinciple().then(renderPrinciple)


/* Helpers
 ========================================================================== */

function initElems() {
    return {
        principleText: document.querySelector('.js-principle-text'),
        principleTitle: document.querySelector('.js-principle-title')
    };
}