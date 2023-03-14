var tableBody = document.getElementById('anime-table');
//containers
var charactersContainer = document.getElementById('character-container');
var animeShowsContainer = document.getElementById('anime-shows-container');
var imagesContainer = document.getElementById('images-container');
var quotesContainer = document.getElementById('ten-quotes-container');
//buttons from index.html
var allCharBtn = document.getElementById('all-char-btn');
var allAnimeBtn = document.getElementById('all-anime-btn');
var tenRandomBtn = document.getElementById('ten-random-btn');
var homeBtn = document.getElementById('home-btn');
//containers for saved data
var savedContainer = document.querySelector('.saved-container');
var savedAnimeUl = document.querySelector('.saved-anime-ul');
var animeTextArray = []; //For local storage


//local storage
function addToSavedList(event) {
  var animeText = event.target.parentElement.innerText;//parentNode
  console.log(animeText);
  saveToLocalStorage(animeText); 
}

function saveToLocalStorage(animeText) {
  // Only add an item to the local storage array if it isn't already there
  if (!animeTextArray.includes(animeText)) { 
  animeTextArray.push(animeText);
  localStorage.setItem('Anime Item', JSON.stringify(animeTextArray));
  }
  loadLocalStorage();
}

// To prevent duplicate lists, removing the li's from the ul first
function removeChilds(parent) {
  while (parent.lastChild) {
      parent.removeChild(parent.lastChild);
  }
}

function loadLocalStorage() {
  removeChilds(savedAnimeUl);

  if (localStorage.getItem('Anime Item') === null) {
    animeTextArray = [];
  }
  else {
    animeTextArray = JSON.parse(localStorage.getItem('Anime Item'));
}
// For each book title, add it to the list on the screen
animeTextArray.forEach((animeText) => appendSavedAnime(animeText));

      // var storedHistory = localStorage.getItem('Anime Item');//original
      // appendSavedAnime(storedHistory);//original
}

function appendSavedAnime(animeText) {
  var savedAnimeItem = document.createElement('li');

  savedAnimeItem.classList = 'saved-anime-item';
  savedAnimeItem.textContent = animeText;

  savedAnimeUl.appendChild(savedAnimeItem);
}

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
        // Creating elements
        var character = document.createElement('h1');
        //create button to save for local storage
        var saveButton = document.createElement('button');
        var iconSpan = document.createElement('span');
        var icon = document.createElement('i');
        


        //clear any other populated data
        animeShowsContainer.textContent = '';
        imagesContainer.textContent = '';
        quotesContainer.textContent = '';
        
        // Setting the text of link and the href of the link
        character.textContent = data[i];
        character.classList = "character-class";
        saveButton.textContent = 'Save';
        saveButton.classList = 'save-button';
        iconSpan.classList = 'icon is-small';
        icon.classList = 'fas fa-check'; 

        // Appending characters to container
        charactersContainer.appendChild(character);
        charactersContainer.appendChild(iconSpan);
        iconSpan.appendChild(icon);
        character.appendChild(saveButton);


        //event listener for saved button
        saveButton.addEventListener('click', addToSavedList);
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
        var anime = document.createElement('h1');

        //clear any other populated data
        charactersContainer.textContent = '';
        imagesContainer.textContent = '';
        quotesContainer.textContent = '';

        // Setting the text of link and the href of the link
        anime.textContent = data[i];
        anime.classList = "anime-class"; 

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
        quote.classList = "quote-class"; 
        anime.classList = "animeq-class"; 
        character.classList = "characterq-class"; 

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
