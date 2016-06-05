var withTasks = ["get married","eat a meal with people"];

var withoutTasks = ["frolick in public parks naked",
"dress how you like without being judged"];


function gen(){

  if ($("#switch").is(':checked')) {
    // Humanity on
    $("body").css("background-color", "#d7d7d7");
    $("body").css("color", "#424242");
    $("a").css("color", "#424242");
    $("#task").text(withTasks[Math.floor(Math.random() * withTasks.length)].concat("."));
  } else {
    // Humanity off
    $("body").css("background-color", "#424242");
    $("body").css("color", "#d7d7d7");
    $("a").css("color", "#d7d7d7");
    $("#task").text(withoutTasks[Math.floor(Math.random() * withoutTasks.length)].concat("."));
  };
};

$(function() {
  $("#switch").prop('checked', true);
  gen();
});
