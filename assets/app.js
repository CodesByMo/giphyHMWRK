$(document).ready(function () {
    // app that displays animal gifs on input
    // empty array for storing inputs/gifs

    // grab search input and store in searchTerms array
    var topics = ["test1", "test2"];

    function renderButtons() {
        $("#gif-dump").empty();
        $("#button-div").empty();
        for (var i = 0; i < topics.length; i++) {
            var newBtn = $("<button>");
            newBtn.text(topics[i]);
            newBtn.attr("data-type", topics[i]);
            newBtn.addClass("testBtn btn btn-dark");
            $("#button-div").append(newBtn);

        }
    }
    renderButtons();

    // $('#submitButton').on('click', function () {
    //     var userType = $('#userText').val();
    //     topics.push(userType);
    //     console.log(topics);

    // });
    // console.log(topics);


    // function addTo() {
    //     topics.push($("#image-input").val());
    // }

    // makes buttons for each item in array

    /////////////////////////new/////////////////////////////////////////////
    $("#submitButton").on('click', function () {
        event.preventDefault();

        var userType = $('#userText').val();
        // var newBtn = $("<button>");
        // newBtn.text(userType);
        // newBtn.attr("data-type", userType);
        // $("#button-div").append(newBtn);
        // $("#gif-dump").empty();
        topics.push(userType);
        // console.log(topics);
        renderButtons();


    });
    console.log(topics);

    $(document).on("click", ".testBtn", function () {
        $("#gif-dump").empty();

        var dataBtn = $(this).attr("data-type");
        // ajax for calling to giphy api
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + dataBtn + "&api_key=vhCJlVOgblzc6OCgihCPSyI30TEXkdqj";

        // need another function to display images?

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            // After data comes back from the request
            .then(function (response) {
                console.log(response);

                // console.log(response.data);
                // storing the data from the AJAX request in the topics variable
                // var searchImage = response.data.url;


                // Looping through each result item
                for (var i = 0; i < 10; i++) {
                    var div = $("<div>");
                    div.addClass("col-4")
                    // div.addClass("col-8");
                    // div.css('width', '50px');
                    // div.css('height', '250px')



                    // Creating and storing an image tag
                    var imageUrl = response.data[i].images.original.url;
                    var imgRating = "Rating: " + response.data[i].rating.toUpperCase();

                    var searchImage = $("<img>").attr("src", imageUrl);
                    searchImage.css("width", "100%")
                    // searchImage.css("height", "100%")

                    // searchImage.addClass('float-left')
                    var p = $("<p>");
                    p.text(imgRating);


                    searchImage.addClass("classImg");
                    searchImage.attr("data-still", response.data[i].images.original_still.url);
                    searchImage.attr("data-animate", response.data[i].images.original.url);
                    searchImage.attr("data-state", "animate");
                    // Setting the src attribute of the image to a property pulled off the result item
                    // searchImage.attr("src", imageUrl);
                    console.log(imageUrl);
                    // gifDiv.append(searchImage);
                    div.append(searchImage, p);
                    // Prependng to the HTML page in the "#gif-dump" div
                    $("#gif-dump").append(div);

                }
                // $(".newBtn").append(searchImage);

            });

    });



    // add pausing/still


    $("body").on("click", ".classImg", function () {
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-state");
        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
        console.log(state);
    })

})







































// //  $("#add-gif").on("click", function () {
//         // ajax for calling to giphy api
//         var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=vhCJlVOgblzc6OCgihCPSyI30TEXkdqj";

//         // need another function to display images?

//         $.ajax({
//             url: queryURL,
//             method: "GET"
//         })
//             // After data comes back from the request
//             .then(function (response) {

//                 // console.log(response.data);
//                 // storing the data from the AJAX request in the topics variable
//                 // var searchImage = response.data.url;


//                 // Looping through each result item
//                 for (var i = 0; i < topics.length; i++) {

//                     // Creating and storing a div tag
//                     // var gifDiv = $("<div>");

//                     // Creating a paragraph tag with the result item's rating
//                     // var p = $("<p>").text("Rating: " + topics[i].rating);

//                     // Creating and storing an image tag
//                     var imageUrl = response.data.image_original_url;

//                     var searchImage = $("<img>").attr("src", imageUrl);
//                     // Setting the src attribute of the image to a property pulled off the result item
//                     // searchImage.attr("src", imageUrl);

//                     // gifDiv.append(searchImage);

//                     // Prependng to the HTML page in the "#gif-dump" div
//                     $("#gif-dump").prepend(response);

//                 }
//                 $(".newBtn").append(searchImage);


//             });
//     });