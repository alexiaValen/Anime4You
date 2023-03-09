var tableBody = document.getElementById('anime-table');
//buttons from index.html
var allCharBtn = document.getElementById('all-char-btn');
var allAnimeBtn = document.getElementById('all-anime-btn');
var tenRandomBtn = document.getElementById('ten-random-btn');


function getAllCharApi() {
  // fetch request gets a list of all the repos for the node.js organization
  var requestUrl = 'https://animechan.vercel.app/api/available/character';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      //Loop over the data to generate a table, each table row will have a link to the repo url
      for (var i = 0; i < data.length; i++) {
        // Creating elements, tablerow, tabledata, and anchor
        var createTableRow = document.createElement('tr');
        var tableData = document.createElement('td');
        var character = document.createElement('h1');

        // Setting the text of link and the href of the link
        character.textContent = data[i];

        // Appending the link to the tabledata and then appending the tabledata to the tablerow
        // The tablerow then gets appended to the tablebody
        tableData.appendChild(character);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
      }
    });
}

function getAllAnimeApi() {
  // fetch request gets a list of all the repos for the node.js organization
  var requestUrl = 'https://animechan.vercel.app/api/available/anime';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      //Loop over the data to generate a table, each table row will have a link to the repo url
      for (var i = 0; i < data.length; i++) {
        // Creating elements, tablerow, tabledata, and anchor
        var createTableRow = document.createElement('tr');
        var tableData = document.createElement('td');
        var anime = document.createElement('span');

        // Setting the text of link and the href of the link
        anime.textContent = data[i];

        // Appending the link to the tabledata and then appending the tabledata to the tablerow
        // The tablerow then gets appended to the tablebody
        tableData.appendChild(anime);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
      }
    });
}

function getTenRandomApi() {
  // fetch request gets a list of all the repos for the node.js organization
  var requestUrl = 'https://animechan.vercel.app/api/quotes';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      //Loop over the data to generate a table, each table row will have a link to the repo url
      for (var i = 0; i < data.length; i++) {
        // Creating elements, tablerow, tabledata, and anchor
        var createTableRow = document.createElement('tr');
        var tableData = document.createElement('td');
        var anime = document.createElement('h1');
        var character = document.createElement('h2');
        var quote = document.createElement('p');

        // Setting the text 
        anime.textContent = data[i].anime;
        character.textContent = data[i].character;
        quote.textContent = data[i].quote;

        // Appending the link to the tabledata and then appending the tabledata to the tablerow
        // The tablerow then gets appended to the tablebody
        tableData.appendChild(anime);
        tableData.appendChild(character);
        tableData.appendChild(quote);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
      }
    });
}


allCharBtn.addEventListener('click', getAllCharApi);
allAnimeBtn.addEventListener('click', getAllAnimeApi);
tenRandomBtn.addEventListener('click', getTenRandomApi);
