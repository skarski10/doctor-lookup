var apiKey = require('./../.env').apiKey;
var getDoctors = require('./../js/doctor.js').getDoctorsModule;

function allDoctors(results){
  $("#doctors").empty();
  $("#practice").empty();
  results.data.forEach(function(result) {
    $('#doctors').append("<br><button id=\"" + result.profile.first_name + " " + result.profile.last_name + "\" class='btn doctor-info' type='button' value=\"" + "\">" + result.profile.first_name + " " + result.profile.last_name + "</button><br>");
  });
  $('.doctor-info').click(function() {
    $('#result').show();
    console.log($(this).val());
    $('#doctor-name').text($(this).val());
    // getDoctor($(this).val());
  });
}

// function doctorInfo(image, degree, language) {
//   $('#image').html("<img src='" + image + "'>")
//   $('#degree').text(degree);
// }

$(document).ready(function() {
  $('form').submit(function() {
    event.preventDefault();
    getDoctors($('#symptom').val(), allDoctors);
  });
});
