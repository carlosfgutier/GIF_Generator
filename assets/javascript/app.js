//TO CREATE BUTTON
//-----------------------------------
$("#submit").on("click", function() {
  var newAnimal = ($("#searchBar").val());
  var newButton = $("#buttonDisplay").append($('<button class="showGIF" data-animal="' + newAnimal + '">' + newAnimal + '</button>'));
});

//TO SHOW GIFS
//-----------------------------------
$("#buttonDisplay").on("click", ".showGIF", function() {
  var animalName = $(this).attr("data-animal");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animalName + "&api_key=dc6zaTOxFJmzC&limit=10";

  $.ajax({
    url: queryURL,
    method:"GET"
  }) 

  .done(function(response) {
    var results = response.data;

    for (var i = 0; i < results.length; i++) {
      
      var animalDiv = $("<div>");
      animalDiv.addClass("GIFsection");

      var p = $("<p>").text("Rating: " + results[i].rating);
      p.addClass("padding");

      var animalImage = $("<img>");
      animalImage.attr("src", results[i].images.original_still.url);
      animalImage.attr("data-state", "still");
      animalImage.attr("data-still", results[i].images.original_still.url);
      animalImage.attr("data-animate", results[i].images.original.url);
      animalImage.addClass("dynamicGIF");
      
      animalDiv.append(p);
      animalDiv.append(animalImage)

      $("#GIFBoard").prepend(animalDiv);
    }
  }); 
});

//TO STOP AND PLAY
//-----------------------------------
$("#GIFBoard").on("click", ".dynamicGIF", function() {
  var state = $(this).attr("data-state");

  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
})
