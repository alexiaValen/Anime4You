//containers
var charactersContainer = document.getElementById('character-container');
var animeShowsContainer = document.getElementById('anime-shows-container');
var imagesContainer = document.getElementById('images-container');
var quotesContainer = document.getElementById('ten-quotes-container');
var mainContainer = document.querySelector('.main');
//buttons from index.html
var allCharBtn = document.getElementById('all-char-btn');
var allAnimeBtn = document.getElementById('all-anime-btn');
var tenRandomBtn = document.getElementById('ten-random-btn');
var homeBtn = document.getElementById('home-btn');
//containers for saved data
var savedContainer = document.querySelector('.saved-container');
var savedAnimeUl = document.querySelector('.saved-anime-ul');
var animeTextArray = []; //For local storage


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

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
  popularContainer.textContent = ''
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
        var saveButton = document.createElement('button');        

        //clear any other populated data
        animeShowsContainer.textContent = '';
        imagesContainer.textContent = '';
        quotesContainer.textContent = '';
        popularContainer.textContent = '';
        imagesContainer.style.backgroundColor = 'none';
        
        // Setting the text and assigning classes if needed
        character.textContent = data[i];
        character.classList = "character-class";
        saveButton.textContent = 'Save';
        saveButton.classList = 'save-button button is-white char-save-btn';

        // Appending characters to container
        charactersContainer.appendChild(character);
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
        // Creating elements
        var anime = document.createElement('h1');
        var saveButton = document.createElement('button');

        //clear any other populated data
        charactersContainer.textContent = '';
        imagesContainer.textContent = '';
        quotesContainer.textContent = '';
        popularContainer.textContent = '';

        // Setting the text of link and the href of the link
        anime.textContent = data[i];
        anime.classList = "anime-class";
        saveButton.textContent = 'Save';
        saveButton.classList = 'save-button button is-white'; 

        // Appending
        animeShowsContainer.appendChild(anime);
        anime.appendChild(saveButton);

        //event listener for saved button
        saveButton.addEventListener('click', addToSavedList);
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
        // Creating elements
        var anime = document.createElement('h1');
        var character = document.createElement('h2');
        var quote = document.createElement('p');
        var saveButton = document.createElement('button');

        //clear any other populated data
        animeShowsContainer.textContent = '';
        imagesContainer.textContent = '';
        charactersContainer.textContent = '';
        popularContainer.textContent = '';

        // Setting the text 
        anime.textContent = data[i].anime;
        character.textContent = data[i].character;
        quote.textContent = data[i].quote;
        quote.classList = "quote-class"; 
        anime.classList = "animeq-class title is-two"; 
        character.classList = "characterq-class subtitle";

        // Appending
        quotesContainer.appendChild(anime);
        quotesContainer.appendChild(character);
        quotesContainer.appendChild(quote);
      }
    });
}

homeBtn.addEventListener('click', homeScreen);
allCharBtn.addEventListener('click', getAllCharApi);
allAnimeBtn.addEventListener('click', getAllAnimeApi);
tenRandomBtn.addEventListener('click', getTenRandomApi);
