var withTasks = ["get married","eat a meal with people"];

var withoutTasks = ["frolick in public parks naked"];


function gen(){

  if ($("#switch").is(':checked')) {
    // Checked
    $("#task").text(withTasks[Math.floor(Math.random() * withTasks.length)].concat("."));
  } else {
    // Unchecked
    $("#task").text(withoutTasks[Math.floor(Math.random() * withoutTasks.length)].concat("."));
  };
};

$(function() {
  $("#switch").prop('checked', true);
  gen();
});
