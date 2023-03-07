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



