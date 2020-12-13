const DATA_PATH = "/logical-fallacies.json"

function createItemElement(item) {
    let elem = document.createElement('div')
    elem.classList.add('item-container')
    return (item.elem = elem)
}

async function fetchData() {
    let result = await fetch(DATA_PATH).then(response => response.json())
    return result
}

function getItemElement(item) {
    return item.elem ?? createItemElement(item)
}

function renderList(list) {
    list.forEach(item => item => container.appendChild(getItemElement(item)));
    return listContainer;
}

fetchData().then(responseJson => renderList(responseJson.data))
