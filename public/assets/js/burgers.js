$(function() {

$(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger").val().trim(),
      devoured: 0
    };
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  
  $(".change-status").on("click", function(event) {
    var id = $(this).data("id");
    var newStatus = $(this).data("newStatus");

    var newDevouredState = {
      devoured: newStatus
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed status to", newStatus);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


})