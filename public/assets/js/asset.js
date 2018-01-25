// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-status").on("click", function(event) {
    var id = $(this).data("id");
    var newSleep = $(this).data("newsleep");

    var newDrinkState = {
      drank: newState
    };

    // Send the PUT request.
    $.ajax("/api/smoothies/" + id, {
      type: "PUT",
      data: newDrinkState
    }).then(
      function() {
        console.log("changed drink to", newState);
        location.reload();
      }
    );
  });

  $(".waves-effect waves-light btn addsmoothie").on("submit", function(event) {
    event.preventDefault();

    var newSmoothie = {
      name: $("#ca").val().trim(),
      // drank: $("[name=drank]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/smoothies", {
      type: "POST",
      data: newSmoothie
    }).then(
      function() {
        console.log("created new smoothie!");
        location.reload();
      }
    );
  });

  $(".delete-smoothie").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/smoothies/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("deleted smoothie", id);
        location.reload();
      }
    );
  });
});
