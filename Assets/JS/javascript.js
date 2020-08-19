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
    
var queryURL = "https://api.spoonacular.com/recipes/random?number=5&tags=entree&apiKey=9d13b70d65dd4784af123551069fb0d9"

function renderRecipes() {
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            $("#recipes").empty();
            $(".more").removeClass("is-hidden")
            console.log(response);
            var results = response.recipes;
            // Looping over every result item
            for (var i = 0; i < results.length; i++) {  
                var recipe = results[i];
                console.log(recipe);

                if (recipe) {

                    var recipeDiv = $("<div>")
                    var titleHeading = $("<h3>")
                    var linkToFood = $("<a target='_blank'>").text(recipe.title).attr("href", recipe.sourceUrl)
                    var imageOfFood = $("<img>").attr("src" , recipe.image)
                    titleHeading.append(linkToFood)
                    recipeDiv.append(titleHeading)
                    recipeDiv.append(imageOfFood)
                    $("#recipes").append(recipeDiv);
                }
            }
        })
}
$("#startButton").on("click", function () {
    $(this).addClass("is-hidden")
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
