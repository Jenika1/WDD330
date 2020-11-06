const output = document.getElementById('output');
const API = `https://swapi.dev/api/people`;

function getAPI(API) {
    fetch(API)
        .then(res => res.json())
        .then(post => output.innerText = JSON.stringify(post));
}

getAPI(API);

const next = document.getElementById('next');
const prev = document.getElementById('prev');