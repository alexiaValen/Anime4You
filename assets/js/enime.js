var popularBtn = document.getElementById('popular-btn');
var popularContainer = document.getElementById('popular');

function getPopular() {
    // fetch request gets a list of all the repos for the node.js organization
    var requestUrl = 'https://api.enime.moe/popular';

    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        //title, coverImage, description, 
        console.log(data.data[0].title.english);
        console.log(data.data[0].coverImage);
        console.log(data.data[0].description);
        //Loop over the data to generate a table, each table row will have a link to the repo url
        for (var i = 0; i < data.data.length; i++) {
          // Creating elements, 
          var title = document.createElement('h1');
          var img = document.createElement('img');
          var description = document.createElement('p');

            //clear any other populated data
            animeShowsContainer.textContent = '';
            imagesContainer.textContent = '';
            quotesContainer.textContent = '';
            charactersContainer.textContent = '';
  
          // Setting the text of data and adding classes to variables
          title.textContent = data.data[i].title.english;
          title.classList = 'enime-title title is-one';
          img.src = data.data[i].coverImage;
          img.classList = 'enime-img';
          description.innerHTML = data.data[i].description;
          description.classList = 'enime-description';
          // Appending the link 
          popularContainer.appendChild(title);
          popularContainer.appendChild(img);
          popularContainer.appendChild(description);
        }
      });
}

popularBtn.addEventListener('click', getPopular);