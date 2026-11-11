

const textInput = document.getElementById('searchInput');
textInput.addEventListener('change', doSearch);

const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', doSearch);

const mainDisplay = document.getElementById('wikiSearch');


async function doSearch() {
    const searchTerm = textInput.value;
    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchTerm}&format=json&origin=*`;

    mainDisplay.innerHTML = 'Loading...';

    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    mainDisplay.innerHTML = '';
    for (let result of json.query.search) {

        console.log(result);
        mainDisplay.innerHTML += `
      <section>
        <h2>${result.title}</h2>
        <p>${result.snippet}</p>
        <div>Word Count: ${result.wordcount}</div>

        <hr>
      </section>
    `;
    }
}

document.body.style.backgroundColor = "lightblue";