var apiKey = require('./../.env').apiKey;
var getDoctors = require('./../js/doctor.js').getDoctorsModule;

function allDoctors(results){
  $("#doctors").empty();
  $("#practice").empty();
  results.data.forEach(function(result) {
    $('#practice').append("<br><button id=\"" + result.profile.first_name + " " + result.profile.last_name + "\" class='btn page-info' type='button' value=\"" + "\">" + result.profile.first_name + " " + result.profile.last_name + "</button><br>");
  });
}

$(document).ready(function() {
  $('form').submit(function() {
    event.preventDefault();
    console.log($('#symptom').val());
    getDoctors($('#symptom').val(), allDoctors);
  });
});
