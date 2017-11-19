
//FOR HTML MADE BUTTONS
//----------------------------------------------------
//show 10 gifs when the button is clicked
var GIFsAppear = $(".showGIF").on("click", function() {

  // Grabbing and storing the data-animal property value from the button
  var animalName = $(this).attr("data-animal");

  // Constructing a queryURL using the animal name
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animalName + "&api_key=dc6zaTOxFJmzC&limit=10";

  // Performing an AJAX request with the queryURL
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // After data comes back from the request
    .done(function(response) {
      console.log(queryURL);

      console.log(response);
      // storing the data from the AJAX request in the results variable
      var results = response.data;

      // Looping through each result item
      for (var i = 0; i < results.length; i++) {

        // Creating and storing a div tag
        var animalDiv = $("<div>");
        animalDiv.addClass("GIFsection");
        
        // Creating a paragraph tag with the result item's rating
        var p = $("<p>").text("Rating: " + results[i].rating);
        p.addClass("padding");

        // Creating and storing an image tag
        var animalImage = $("<img>");
        // Setting the src attribute of the image to a property pulled off the result item
        animalImage.attr("src", results[i].images.original_still.url);
        animalImage.attr("data-state", "still");
        animalImage.attr("data-still", results[i].images.original_still.url);
        animalImage.attr("data-animate", results[i].images.original.url);
        animalImage.addClass("dynamicGIF");
        
        // Appending the paragraph and image tag to the animalDiv
        animalDiv.append(p);
        animalDiv.append(animalImage);

        // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
        $("#GIFBoard").prepend(animalDiv);

        $(".dynamicGIF").on("click", function() {
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
        });
      }

    });
});

//FOR JQUERY MADE BUTTONS
//----------------------------------------------------
//turn text in input into button
$("#submit").on("click", function() {
  var newAnimal = ($("#searchBar").val());

  var newButton = $("#buttonDisplay").append($('<button class="showGIF" data-animal="' + newAnimal + '">' + newAnimal + '</button>'));

  //show 10 gifs when the button is clicked
  $(".showGIF").on("click", function() {

    // Grabbing and storing the data-animal property value from the button
    var animalName = $(this).attr("data-animal");

    // Constructing a queryURL using the animal name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animalName + "&api_key=dc6zaTOxFJmzC&limit=10";

    // Performing an AJAX request with the queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // After data comes back from the request
      .done(function(response) {
        console.log(queryURL);

        console.log(response);
        // storing the data from the AJAX request in the results variable
        var results = response.data;

        // Looping through each result item
        for (var i = 0; i < results.length; i++) {

          // Creating and storing a div tag
          var animalDiv = $("<div>");
          animalDiv.addClass("GIFsection");
          
          // Creating a paragraph tag with the result item's rating
          var p = $("<p>").text("Rating: " + results[i].rating);
          p.addClass("padding");

          // Creating and storing an image tag
          var animalImage = $("<img>");
          // Setting the src attribute of the image to a property pulled off the result item
        animalImage.attr("src", results[i].images.original_still.url);
        animalImage.attr("data-state", "still");
        animalImage.attr("data-still", results[i].images.original_still.url);
        animalImage.attr("data-animate", results[i].images.original.url);
        animalImage.addClass("dynamicGIF");
        
        // Appending the paragraph and image tag to the animalDiv
        animalDiv.append(p);
        animalDiv.append(animalImage);

        // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
        $("#GIFBoard").prepend(animalDiv);

        $(".dynamicGIF").on("click", function() {
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
        });
        }
      });
  });
});
