var weather;
var api = ''; //add link from api.openweathermap.org
var apiKey = ''; //add apiKey
var main = ''; //add main (clear, rain, sunny)


function setup() {
  createCanvas(500,500);

  var button = select('submit');
  button.mousePressed(weatherResults); //shows results when mouse is pressed

  input = select('#city');
}

function weatherResults() {
  var url = api + input.value() + apiKey + main;
  loadJSON(url, gotData);
}

function gotData(data) {
  weather = data;
}

function draw() {
  background(); //change background color to blue
  //if it's raining in the city then draw rain
  //else if it's sunny in the city then draw sun
  //else if it's cloudy in the city then draw clouds
  //else if it's snowing in the city then draw snow
  //else the background is blue
}

function drawRain() {
  //insert code of rain falling https://editor.p5js.org/monicawen/sketches/HkU-BCJqm
}

function drawSun() {
  //insert code of sun rotating https://editor.p5js.org/monicawen/sketches/HkU-BCJqm
}

function drawCloud() {
  //insert code of clouds moving across https://editor.p5js.org/mena-landry/sketches/D7ql4Nd3V
}

function drawSnow() {
  //nsert code of snow https://p5js.org/examples/simulate-snowflakes.html
}

//<---REFERENCES--->
// Rain and Sun:
// https://editor.p5js.org/monicawen/sketches/HkU-BCJqm
// Snow:
// https://p5js.org/examples/simulate-snowflakes.html
// Cloud:
// https://editor.p5js.org/mena-landry/sketches/D7ql4Nd3V
//
// 10.5: Working with APIs in Javascript - p5.js Tutorial https://youtu.be/ecT42O6I_WI
// 10.6: API Query with User Input - p5.js Tutorial https://youtu.be/4UoUqnjUC2c
