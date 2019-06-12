// app that displays animal gifs on input
// empty array for storing inputs/gifs
var gifArray;
var searchTerms = [];
// grab search input and store in searchTerms array

// delete text in buttons-view before adding new text
function renderButtons() {

    // $("#buttons-view").empty();
    // Loop through the array of gifs, make buttons for each gif in array
    for (i = 0; i < searchTerms.length; i++) {
        var button = $("<button>");
        // button.text(searchTerms[i]);
        button.attr("class", "gifBtn");
        $("#buttons-view").append(button);
    }
    // only works after gifs have been generated?
    $(".gifBtn").on("click", function (event) {
        console.log($(this).text())
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerms[i] + "&api_key=vhCJlVOgblzc6OCgihCPSyI30TEXkdqj";
        // var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=cats"
        // ajax for calling to giphy api

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            // After data comes back from the request
            .then(function (response) {
                console.log(queryURL);

                console.log(response);
                // storing the data from the AJAX request in the results variable
                var results = response.data;

                // Looping through each result item
                for (var i = 0; i < results.length; i++) {

                    // Creating and storing a div tag
                    var gifDiv = $("<div>");

                    // Creating a paragraph tag with the result item's rating
                    // var p = $("<p>").text("Rating: " + results[i].rating);

                    // Creating and storing an image tag
                    var animalImage = $("<img>");
                    // Setting the src attribute of the image to a property pulled off the result item
                    animalImage.attr("src", results[i].images.url);

                    // Appending the paragraph and image tag to the animalDiv
                    gifDiv.append(p);
                    gifDiv.append(animalImage);

                    // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
                    $("#gifs-appear-here").prepend(animalDiv);
                }
            });

    })
}


// pause/play gifs
$(".gif").on("click", function () {

    var state = $(this).attr("data-state")

    var play = $(this)[0].dataset.animate;

    if (state === "still") {
        $(this).attr("src", play);
        $(this).attr("data-state", "animate");

    }

    var pause = $(this)[0].dataset.still;

    if (state === "animate") {
        $(this).attr("src", pause);
        $(this).attr("data-state", "still");
    }
})
// display images to div
console.log(searchTerms);
