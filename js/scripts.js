$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["item1", "item2", "item3", "item4"];
    var answers = [];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val().toUpperCase();
      answers.push(userInput);
    });

    answers.sort();
    $("#result ul").append("<li>" + answers[0] + "</li>");
    $("#result ul").append("<li>" + answers[1] + "</li>");
    $("#result ul").append("<li>" + answers[2] + "</li>");
    $("#result ul").append("<li>" + answers[3] + "</li>");

    $("#result").show();
    $("#blanks").hide();

    event.preventDefault();
  });
});
