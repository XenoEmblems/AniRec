var request = require('request');
var logger  = require('morgan');
var baseUrl = "https://anilist.co/api/";
var parameters = {
    grant_type    : "client_credentials",
    client_id     :  "xenoemblems-t53ld",
    client_secret :  "rTsDrPyOiS1pjnWmhlCCcHn"
};

var apiReturn = request({
  uri: baseUrl + "auth/access_token",
  method: 'POST',
  qs: parameters,
}, function(error, response, body) {
  if (!error) {
    console.log(body);
    // callback(null, body);
  } else if (error) {
    console.log("Oopsie");
    // callback(error);
  }

});
console.log(apiReturn);