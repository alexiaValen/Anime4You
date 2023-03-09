    var flickerButton = document.getElementById("flicker-btn"); 
    var imageContainer = document.getElementById("images-container"); 
    
    var apiUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1aa83de35e6048dbca83ae167d34356a&tags=anime&format=json&nojsoncallback=1’';
console.log('flickr' + apiUrl);

function searchAnimeImage() {
    var apiUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1aa83de35e6048dbca83ae167d34356a&tags=anime&format=json&nojsoncallback=1’';
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    displayImage(data);
                });
            } 
        })

}


function displayImage(data) { 
    var imageEl = document.createElement("img"); 
    var secret = data.photos.photo[5].secret; 
    var photoId = data.photos.photo[5].id;  
    var server = data.photos.photo[5].server; 

    imageEl.src = "https://live.staticflickr.com/" + server + "/" + photoId + "_" + secret + ".jpg"; 

    imageEl.classList = "flickerImage"; 
    imageContainer.appendChild(imageEl); 
}


flickerButton.addEventListener("click", searchAnimeImage); 


