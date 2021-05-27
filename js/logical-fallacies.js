{
    const DATA_PATH = "/data/logical-fallacies.json"
    const TPL = document.querySelector('.js-tpl-fallacy')

    document.addEventListener("DOMContentLoaded", async event => {
        let listContainer = document.querySelector('.js-list')
        let response = await fetchData()
        renderList(listContainer, response)
    })

    async function fetchData() {
        let response = await fetch(DATA_PATH).then(response => response.json())
        let result = shuffle(response.data)
        return result
    }

    function createItemElement(item) {
        let content = document.importNode(TPL.content, true)
        content.querySelector('.js-title').innerHTML = item.title
        content.querySelector('.js-description').innerHTML = item.description
        content.querySelector('.js-example').innerHTML = item.example

        let elem = document.createElement('section')
        elem.classList.add('o-fallacy')
        elem.appendChild(content)

        return (item.elem = elem)
    }

    function getItemElement(item) {
        return item.elem ?? createItemElement(item)
    }

    function renderList(container, list) {
        list.forEach(item => container.appendChild(getItemElement(item)))
        return container
    }

    function shuffle(arr) {
        let j, t
        for (let i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random()*(i + 1))
            t = arr[j]; arr[j] = arr[i]; arr[i] = t
        }
        return arr
    }
}