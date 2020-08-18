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

    // SPOONACULAR API BELOW //
    
var queryURL = "https://api.spoonacular.com/recipes/random?number=5&tags=entree&apiKey=27be25798ebc4f7dabda934b43c15633"

function renderRecipes() {
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function (response) {
            console.log(response);

            var results = response.recipes;

            // Looping over every result item
            for (var i = 0; i < results.length; i++) {  
                var recipe = results[i];
                console.log(recipe);

                // Only taking action if the photo has an appropriate rating
                if (recipe) {
                    // Creating a div for the gif
                    var recipeDiv = $("<div>");

                    // <div class="recipe">
                    //   <h3>title</h3>  
                    //   <p>description</p>
                    // </div>

                    var titleHeading = $("<h3>").text(recipe.title);
                    recipeDiv.append(titleHeading);

                //     // Storing the result item's rating
                //     var rating = results[i].rating;

                //     // Creating a paragraph tag with the result item's rating
                //     var p = $("<p>").text("Rating: " + rating);

                //     // Creating an image tag
                //     var personImage = $("<img>");

                //     // Giving the image tag an src attribute of a proprty pulled off the
                //     // result item
                //     personImage.attr("src", results[i].images.fixed_height.url);

                //     // Appending the paragraph and personImage we created to the "gifDiv" div we created
                //     gifDiv.append(p);
                //     gifDiv.append(personImage);

                //     // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                    $("#recipes").append(recipeDiv);
                }
            }
        })
}

$("#startButton").on("click", function () {

    $.ajax(settings).done(function (response) {
        console.log(response);

        if (response.outcome === "Heads") {
            $("img").removeClass("heads")
        } else {
            $("img").removeClass("tails")
            renderRecipes();
        }
    });
});