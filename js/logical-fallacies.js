{
  const DATA_PATH = "/logical-fallacies.json"

  function createItemElement(item) {
    let elem = document.createElement('div')
    elem.classList.add('c-list__item', 'o-fallacy-container')
    return (item.elem = elem)
  }

  async function fetchData() {
    let result = await fetch(DATA_PATH).then(response => response.json())
    return result
  }

  function getItemElement(item) {
    return item.elem ?? createItemElement(item)
  }

  function renderList(container, list) {
    list.forEach(item => container.appendChild(getItemElement(item)))
    return container
  }

  document.addEventListener("DOMContentLoaded", event => {
    let listContainer = document.querySelector('.js-list')
    fetchData().then(responseJson => renderList(listContainer, responseJson.data))
  })
}