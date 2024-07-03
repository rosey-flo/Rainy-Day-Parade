//THIS AREA WILL BE THE KEYS TO OUR TWO API DATABASES (OPENWEATHERMAP AND TICKETMASTER)
/*
const apiKey = `0b2d18998cc2c1478342de38040d8e6f`

const urlW = `https://pro.openweathermap.org/data/2.5/forecast/climate?${variablename}&appid=${apiKey}&units=imperial`
*/
const apiKeyT = `qKWzXfaxaHnvqJQfnyFKmzJ8AjfSh2qk`

consturlTcity = `https://app.ticketmaster.com/discovery/v2/classifications/genres/sanvanah`

consturlTvenues = `https://app.ticketmaster.com/discovery/v2/venues/{id}`

$.get ("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=qKWzXfaxaHnvqJQfnyFKmzJ8AjfSh2qk")

.then(function(data){
console.log(data);
});
console.log('hello');


//TO DO: Select Elements: Use jQuery selectors to target the necessary elements on the landing page where the user input will be collected.



// Retrieve city-input from localStorage
let cityInput = JSON.parse(localStorage.getItem("city"));