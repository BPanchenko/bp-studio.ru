const DATA_PATH = "/logical-fallacies.json"

async function fetchData() {
    let result = await fetch(DATA_PATH).then(response => response.json())
    return result
}

fetchData().then(data => console.log(data))
