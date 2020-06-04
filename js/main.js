
import {
    CLS,
    ELEMS,
    PRINCIPLES_PATH,
    renderScene,
    scene
} from './init.js'

import pics from './pics/_index.js'


let picsList = _.values(pics)
let principlesList
let renderPoster = _.flow([
    getRandomItem,
    renderPrinciple
])
let updatePoster = _.flow([
    getRandomItem,
    renderPrinciple
])

async function fetchPrinciples() {
    principlesList = await fetch(PRINCIPLES_PATH)
        .then(response => response.json())
        .then(json => parsePrinciples(json.data))
    return principlesList
}

function parsePrinciples(list) {
    list = list.filter(d => d.enable)
    list.forEach(d => {
        if (!/^\<p\>.+\<\/p\>$/i.test(d.text)) d.text = `<p>${d.text}</p>`
    })
    return list;
}

function getRandomItem(list) {
    let data = _.sample(list.filter(d => !d.marked))
    if (data) {
        data.marked = true
        return data
    } else {
        list.forEach(d => d.marked = false)
        return getRandomItem(list)
    }
    
}

function renderPrinciple(data) {
    
    // content

    if (data.title.length <= 14) {
        ELEMS.posterTitle.classList.add(CLS.bigger)
    } else {
        ELEMS.posterTitle.classList.remove(CLS.bigger)
    }

    ELEMS.posterTitle.innerHTML = data.title
    ELEMS.posterText.innerHTML = data.text

    // picture

    for( var i = scene.children.length - 1; i >= 0; i--) scene.remove(scene.children[i])
    getRandomItem(picsList)()
    renderScene()
    
}

fetchPrinciples().then(renderPoster)


/* DOM Events
 ========================================================================== */

document.body.addEventListener('click', evt => updatePoster(principlesList), false)
window.addEventListener('mousewheel', evt => updatePoster(principlesList), false)
