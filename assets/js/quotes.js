var tableBody = document.getElementById('anime-table');
//containers
var charactersContainer = document.getElementById('character-container');
var animeShowsContainer = document.getElementById('anime-shows-container');
var imagesContainer = document.getElementById('images-container');//might need to switch for flickr js code
var quotesContainer = document.getElementById('ten-quotes-container');
//buttons from index.html
var allCharBtn = document.getElementById('all-char-btn');
var allAnimeBtn = document.getElementById('all-anime-btn');
var tenRandomBtn = document.getElementById('ten-random-btn');
var homeBtn = document.getElementById('home-btn');

function homeScreen() {
  animeShowsContainer.textContent = '';
  imagesContainer.textContent = '';
  quotesContainer.textContent = '';
  charactersContainer.textContent = '';
}


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


        //clear any other populated data
        animeShowsContainer.textContent = '';
        imagesContainer.textContent = '';
        quotesContainer.textContent = '';
        
        // Setting the text of link and the href of the link
        character.textContent = data[i];

        // Appending the link to the tabledata and then appending the tabledata to the tablerow
        // The tablerow then gets appended to the tablebody
        charactersContainer.appendChild(character);
        //createTableRow.appendChild(tableData);
        //tableBody.appendChild(createTableRow);
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

        //clear any other populated data
        charactersContainer.textContent = '';
        imagesContainer.textContent = '';
        quotesContainer.textContent = '';

        // Setting the text of link and the href of the link
        anime.textContent = data[i];

        // Appending the link to the tabledata and then appending the tabledata to the tablerow
        // The tablerow then gets appended to the tablebody
        animeShowsContainer.appendChild(anime);
        // createTableRow.appendChild(tableData);
        // tableBody.appendChild(createTableRow);
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

        //clear any other populated data
        animeShowsContainer.textContent = '';
        imagesContainer.textContent = '';
        charactersContainer.textContent = '';

        // Setting the text 
        anime.textContent = data[i].anime;
        character.textContent = data[i].character;
        quote.textContent = data[i].quote;

        // Appending the link to the tabledata and then appending the tabledata to the tablerow
        // The tablerow then gets appended to the tablebody
        quotesContainer.appendChild(anime);
        quotesContainer.appendChild(character);
        quotesContainer.appendChild(quote);
        // createTableRow.appendChild(tableData);
        // tableBody.appendChild(createTableRow);
      }
    });
}

homeBtn.addEventListener('click', homeScreen);
allCharBtn.addEventListener('click', getAllCharApi);
allAnimeBtn.addEventListener('click', getAllAnimeApi);
tenRandomBtn.addEventListener('click', getTenRandomApi);
