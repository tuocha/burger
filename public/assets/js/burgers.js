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
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  
  $(".change-status").on("click", function(event) {

    var id = $(this).data("id");
    var newDevouredState = {
      devoured: 1
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        $('.move[data-id='+id+']').appendTo(".devoured");

        // Reload the page to get the updated list
        // location.reload();
      }
    );
  });


})