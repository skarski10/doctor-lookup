var apiKey = require('./../.env').apiKey;

getDoctors = function(medicalIssue, allDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(results) {
      console.log(results);
      allDoctors(results);
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.getDoctorsModule = getDoctors;
