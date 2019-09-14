
import * as THREE from './three.module.js'

const PRINCIPLES_PATH = "/principles.json"

const ELEMS = initElems()


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
    ELEMS.principleTitle.innerHTML = data.title
    ELEMS.principleText.innerHTML = data.text

}

fetchPrinciple().then(renderPrinciple)


/* Helpers
 ========================================================================== */

function initElems() {
    return {
        principleTitle: document.querySelector('.js-principle-title'),
        principleText: document.querySelector('.js-principle-text')
    };
}