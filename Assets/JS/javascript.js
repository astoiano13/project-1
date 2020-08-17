<<<<<<< HEAD
  
=======
>>>>>>> c2a64892bfeaf116fe27ffdd2ce38451a9971be4
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

<<<<<<< HEAD
=======
var queryURL = "https://api.spoonacular.com/recipes/random?number=10&apiKey=27be25798ebc4f7dabda934b43c15633"

$("#startButton").on("click", function () {

    $.ajax(settings).done(function (response) {
        console.log(response);

    });

    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function (response) {
            console.log(response);
        })
})
>>>>>>> c2a64892bfeaf116fe27ffdd2ce38451a9971be4
