const { When, Then } = require('cucumber')
const { expect } = require('chai')
var request = require('sync-request');
var returned = "";
var sended = "";
var response = "";

var stepOneDone = false;
var stepTwoDone = false;
var stepThreeDone = false;


When('I post a simple template', function () {
  sended = {
    label: "Thermometer Template",
    attrs: [
      {
        label: "temperature",
        type: "dynamic",
        value_type: "float"
      }
    ]
  };

  response = request('POST', 'http://127.0.0.1:8000/template', {
    headers: {
      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhVFZyaHhGVElZQ3NkMGk2aTlBZzVLQlBZT08yUTN5WiIsImlhdCI6MTU1MzI3ODAyMCwiZXhwIjoxNTUzMjc4NDQwLCJwcm9maWxlIjoiYWRtaW4iLCJncm91cHMiOlsxXSwidXNlcmlkIjoxLCJqdGkiOiI2N2U3MGY2NDY0Yzk3YTE4Mzk4NjQ5MWRmNmRhNGY1NCIsInNlcnZpY2UiOiJhZG1pbiIsInVzZXJuYW1lIjoiYWRtaW4ifQ.F0LBytzCm8MoodOL-vO-6-80iG2Gt3xkR0uT31gvA-Q`
    },
    json: sended
  });

  returned = JSON.parse(response.getBody('utf8'));
  
})

When('I should get a template created', function() {
  expect(response.getStatus()).to.eql(201)
  expect(returned["template"]).to.eql(sended)
})

Then('the status code should be {int}', function(number) {
  expect(this.variable).to.eql(number)
})
