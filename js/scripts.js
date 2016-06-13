// busines logic
function Place (location, landmarks, time, notes) {
  this.thisLocation = location;
  this.thisLandmarks = landmarks;
  this.thisTime = time;
  this.thisNotes = notes;
}


// user interface logic
$(document).ready(function() {
  $("form#places").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#location").val();
    var inputtedLandmarks = $("input#landmarks").val();
    var inputedTimeOfYear = $("#time").val();
    var inputedNotes = $("input#notes").val();

    var newPlace = new Place(inputtedLocation, inputtedLandmarks, inputedTimeOfYear, inputedNotes);

    $("ul#places").append("<li><span class='location'>" + newPlace.thisLocation + "</span></li>");

    $(".location").last().click(function() {
      $("#show-location").show();
      $("#show-location h2").text(newPlace.thisLocation);
      $(".landmarks").text(newPlace.thisLandmarks);
      $(".time").text(newPlace.thisTime);
      $(".notes").text(newPlace.thisNotes);
    });

    $("input#location").val("");
    $("input#landmarks").val("");
    $("#time").val("");
    $("input#notes").val("");
  });
});
