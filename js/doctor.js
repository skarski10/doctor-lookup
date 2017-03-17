var apiKey = require('./../.env').apiKey;

var getDoctors = function(medicalIssue, allDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)

   .then(function(results) {
      // console.log(results);
      allDoctors(results);
    })
   .fail(function(error){
      console.log("fail");
    });
};
var getDoctor = function(first, last, doctorInfo, doctorLanguages) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?first_name=' + first + '&last_name=' + last + '&skip=0&limit=10&user_key=' + apiKey)

   .then(function(results) {
     var currentDoctor = results.data[0];
     var doctorProfile = currentDoctor.profile;
     console.log(currentDoctor);
     doctorLanguages(doctorProfile.languages);
     if (currentDoctor.educations.length > 0) {
       doctorInfo(doctorProfile.image_url, doctorProfile.bio, currentDoctor.educations[0].school);
     } else {
       doctorInfo(doctorProfile.image_url);
       }
   })
   .fail(function(error){
      console.log("fail");
    });
};

exports.getDoctorsModule = getDoctors;
exports.getDoctorModule = getDoctor;
