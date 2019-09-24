
import {
    CLS,
    ELEMS,
    PRINCIPLES_PATH,
    renderScene
} from './init.js'

import pics from './pics/_index.js'


/* ========================================================================
   Canvas
 ========================================================================== */

pics.parallelepipedAndCircle()
renderScene()


/* ========================================================================
   Principle: fetch & render
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

// TODO: 
// 1) получение данных с сервера выполнять только когда их нет в приложении;
// 2) после получения случайного принципа, перед визуализацией, удалять его из массива.

/* DOM Events
 ========================================================================== */

document.body.addEventListener('click', event => fetchPrinciple().then(renderPrinciple), false);