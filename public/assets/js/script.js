// Make sure we wait to attach our handlers until the DOM is fully loaded.
/*$(function () {
  $(".devour").on("click", function (event) {
    var id = $(this).data("id");
    var newEaten = $(this).data("neweaten");

    var newEatBurger = {
      eaten: newEaten
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newEatBurger
    }).then(
      function () {
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newBurger = {
      burgers_name: $("#name").val().trim(),
      eaten: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        location.reload();
      }
    );
  });
});

*/
