const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", (request, response) => {
  response.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/", (request, response) => {

  var num1 = Number(request.body.num1);
  var num2 = Number(request.body.num2);

  var result = num1 + num2;

  response.send("The result of the calculation is " + result);
});

app.post("/bmicalculator", (request, response) => {

  var weight = Number(request.body.w);
  var height = Number(request.body.h);

  var calcBmi = weight / (height) ** 2;

  response.send("Your BMI is " + calcBmi);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});