var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://coin-flip1.p.rapidapi.com/headstails",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "coin-flip1.p.rapidapi.com",
        "x-rapidapi-key": "5ae58be4c0mshda02cb58666e66dp1c926ejsnd57384ad94f9"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});


var APIKey = "27be25798ebc4f7dabda934b43c15633";
var queryURL = "https://api.spoonacular.com/recipes/random" + APIKey;


$.ajax({
    url: queryURL,
    method: "GET"
})

    .then(function (response) {
        // Log the queryURL
        console.log(queryURL);
        // Log the resulting object
        console.log(response);
    });