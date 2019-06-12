// app that displays animal gifs on input
// empty array for storing inputs/gifs

// grab search input and store in searchTerms array
var topics = ["test1", "test2", "test3", "test5", "test6", "test7", "test8", "test9", "test10"]


$('#add-gif').on('click', function () {
    $('#image-input').each(function () {
        topics.push($(this).val());
        console.log(topics);
    });
});



// function addTo() {
//     topics.push($("#image-input").val());
// }

// makes buttons for each item in array
for (var i = 0; i < topics.length; i++) {
    var newBtn = $("<button>" + topics[i] + "</button>");

    newBtn.text = topics[i];
    newBtn.attr("class", "newBtn");
    $("#gif-dump").append(newBtn);
}


// delete text in buttons-view before adding new text
// $("#buttons-view").empty();


$(".newBtn").on("click", function () {
    // ajax for calling to giphy api
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=vhCJlVOgblzc6OCgihCPSyI30TEXkdqj";

    // need another function to display images?

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After data comes back from the request
        .then(function (response) {

            // console.log(response.data);
            // storing the data from the AJAX request in the topics variable
            // var searchImage = response.data.url;


            // Looping through each result item
            for (var i = 0; i < topics.length; i++) {

                // Creating and storing a div tag
                // var gifDiv = $("<div>");

                // Creating a paragraph tag with the result item's rating
                // var p = $("<p>").text("Rating: " + topics[i].rating);

                // Creating and storing an image tag
                var imageUrl = (response).data.image_original_url;

                var searchImage = $("<img>").attr("src", imageUrl);
                // Setting the src attribute of the image to a property pulled off the result item
                // searchImage.attr("src", imageUrl);

                // gifDiv.append(searchImage);

                // Prependng to the HTML page in the "#gif-dump" div
                $("#gif-dump").prepend(response);

            }
            $(".newBtn").append(searchImage);


        });
});

// pause/play gifs
