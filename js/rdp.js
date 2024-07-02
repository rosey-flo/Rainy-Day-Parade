//THIS AREA WILL BE THE KEYS TO OUR TWO API DATABASES (OPENWEATHERMAP AND TICKETMASTER)

const apiKey = `0b2d18998cc2c1478342de38040d8e6f`

const url = `https://pro.openweathermap.org/data/2.5/forecast/climate?${variablename}&appid=${apiKey}&units=imperial`

//PSUEDOCODING

//User Input Retrieval:
//Retrieve user input data (city, username, title, content) from local storage.

//Weather API Integration:
//Use the OpenWeatherMap API to fetch weather data for the chosen city for the current month.
//Extract relevant weather information such as temperature, conditions, etc.

//Event API Integration:
//Utilize an events API to fetch event data for the chosen city.
//Filter events based on weather conditions/date rage/genre of event

// Data Filtering and Presentation:
// Filter events based on weather conditions (indoor/outdoor) and date.
// Display the events in the respective sections on the webpage.

// User Interaction:
// Allow users to interact with the displayed information, potentially filtering or sorting events based on preferences.