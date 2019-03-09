const request = require('request');

let apiKey = '392e5b9bd00f4c5c35a0533f7abbac5d';
let city = 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body);
    let message = `It's ${weather.main.temp} centigrade in ${weather.name}!`;
    console.log(message);
  }
});