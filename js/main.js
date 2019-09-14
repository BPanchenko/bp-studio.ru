
import * as THREE from './three.module.js'

const PRINCIPLES_PATH = "/principles.json"

const ELEMS = initElems()
const CLS = {
    'bigger': 's-bigger'
}


/* DOM Events
 ========================================================================== */

ELEMS.principle.addEventListener('click', event => fetchPrinciple().then(renderPrinciple));


/* Principle: fetch & render
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


/* Helpers
 ========================================================================== */

function initElems() {
    return {
        principle: document.querySelector('.js-principle'),
        principleTitle: document.querySelector('.js-principle-title'),
        principleText: document.querySelector('.js-principle-text')
    };
}