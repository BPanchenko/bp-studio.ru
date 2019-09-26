
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
let getAndRenderPrinciple = _.flow([getRandomItem, renderPrinciple])

async function fetchPrinciples() {
    principlesList = await fetch(PRINCIPLES_PATH)
        .then(response => response.json())
        .then(json => json.data.filter(d => d.enable))
    return principlesList
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
        ELEMS.principleTitle.classList.add(CLS.bigger);
    } else {
        ELEMS.principleTitle.classList.remove(CLS.bigger);
    }

    ELEMS.principleTitle.innerHTML = data.title
    ELEMS.principleText.innerHTML = data.text

    // picture

    for( var i = scene.children.length - 1; i >= 0; i--) scene.remove(scene.children[i])
    getRandomItem(picsList)()
    renderScene()

}

fetchPrinciples().then(getAndRenderPrinciple)

// TODO: 
// 1) получение данных с сервера выполнять только когда их нет в приложении;
// 2) после получения случайного принципа, перед визуализацией, удалять его из массива.

/* DOM Events
 ========================================================================== */

document.body.addEventListener('click', evt => getAndRenderPrinciple(principlesList), false);