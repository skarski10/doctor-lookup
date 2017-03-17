var apiKey = require('./../.env').apiKey;
var getDoctors = require('./../js/doctor.js').getDoctorsModule;
var getDoctor = require('./../js/doctor.js').getDoctorModule;


function doctorInfo(image, bio, degree) {
  console.log(image);
  $('#image').html("<img src='" + image + "'>");
  $('#degree').text(degree);
  $('#bio').text(bio);
}

function doctorLanguages(languages){
  $("#languages").empty();
  languages.forEach(function(language) {
    console.log(language.name);
    $("#languages").append(language.name + " | ");
  });
}

function allDoctors(results){
  $("#doctors").empty();
  $("#practice").empty();
  results.data.forEach(function(result) {
    var name = result.profile.first_name + " " + result.profile.last_name;
    $('#doctors').append("<br><button id=\"" + name + "\" class='btn btn-primary doctor-info' type='button' value=\"" + name + "\">" + name + "</button><br>");
  });
  $('.doctor-info').click(function() {
    $('#result').show();
    $("#search").hide();
    $('#doctor-name').text($(this).val());
    var nameArray = $(this).val().split(' ');
    // console.log(nameArray[0]);
    getDoctor(nameArray[0], nameArray[1], doctorInfo, doctorLanguages);
  });
}


$(document).ready(function() {
  $('form').submit(function() {
    event.preventDefault();
    getDoctors($('#symptom').val(), allDoctors);
  });
  $("#close").click(function(){
    $("#search").show();
   $("#result").hide();
 })
});
