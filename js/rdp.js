
const apiKeyW = '453e76b47d31a5d94e87e19b3143c6ec';


function getCityName() {
    const cities = JSON.parse(localStorage.getItem('cities')) || [];

    if (cities.length > 0) {
        const mostRecentCity = cities[cities.length - 1].city;
        return mostRecentCity;
    } else {
        return 'Jersey City';
    }
}

function outputCityName(city) {
    city = getCityName();
    const $cityOutput = $('.city-output');

    $cityOutput.html(`
        <p>${city}</p>
        `)
}



function getCurrentweather() {
    const city = getCityName();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKeyW}&units=imperial`;

    return $.get(url);

}

function outputCurrentWeather(currentData) {
    const $currentOutput = $('.weather-report');
    console.log(currentData);

    $currentOutput.html(`
            <p>Current Temp: ${currentData.main.temp}</p>
            <p>Conditions: ${currentData.weather[0].description}</p>
            <img src="https://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png" alt="weather icon image">
        `);

    return currentData.coord;
}

function getWeatherForcast(cityCoord) {

    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${cityCoord.lat}&lon=${cityCoord.lon}&appid=${apiKeyW}&units=imperial`;


    return $.get(url);
}


function outputWeatherForcast(forcastData) {
    const $forcastOutput = $('.weather-report');

    const filtered = forcastData.list.filter(function (forcastObj) {
        if (forcastObj.dt_txt.includes('12')) return true;
    });

    filtered.forEach(function (forcastObj) {
        $forcastOutput.append(`
                <div>
                    <h2>${forcastObj.dt_txt}</h2>
                    <h3>Temp: ${forcastObj.main.temp}</h3>
                    <img src="https://openweathermap.org/img/wn/${forcastObj.weather[0].icon}@2x.png" alt="weather icon image">
                </div>
            `)
    })
}



outputCityName();
$(document).ready(function () {
    getCurrentweather()
        .then(outputCurrentWeather)
        .then(getWeatherForcast)
        .then(outputWeatherForcast)
})



//================MUSIC GENRE ID 1 WEEK ==============//

/*
const Mgenre = 'music';
const apiKeyT = `qKWzXfaxaHnvqJQfnyFKmzJ8AjfSh2qk`;

function getEventData(weekData) {
    
    const firstURL = `https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKeyT}&locale=*&startDateTime=2024-07-04T13:52:00Z&endDateTime=2024-07-11T13:53:00Z&classificationName=${Mgenre}`;
    
    return $.get(firstURL);

}

 function outputWeekEvents (eventData) {
    const $eventOutput = $('.top-events');
    const allEvents = eventData._embedded.events;
    console.log(eventData._embedded.events);

    //let weekEventsOutput = .innerHTML 
        allEvents.forEach(function(eventObj){
            $eventOutput.append(`
                <h2>Event Name: ${eventObj.name}</h2>
                <h2>Event Date: ${eventObj.dates.start.localDate}</h2>
                <h2>Event Time: ${eventObj.dates.start.localTime}</h2>


                 <aside class="separate-line"></aside>
                 `)
        });
             
 }
        

 getEventData()
.then(outputWeekEvents);

  //--------------------------------TWO WEEKS EVENTS


function getSecondEventData(secondweekData) {
    
    const secondURL = `https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKeyT}&locale=*&startDateTime=2024-07-12T13:52:00Z&endDateTime=2024-07-18T13:53:00Z&classificationName=${Mgenre}`;
    
    return $.get(secondURL);

}

 function outputSecondWeekEvents (secondEventData) {
    const $secondEventOutput = $('.next-events');
    const allEvents = secondEventData._embedded.events;
    

    //let weekEventsOutput = .innerHTML 
        allEvents.forEach(function(eventObj){
            $secondEventOutput.append(`
                <h2>Event Name: ${eventObj.name}</h2>
                <h2>Event Date: ${eventObj.dates.start.localDate}</h2>
                <h2>Event Time: ${eventObj.dates.start.localTime}</h2>


                 <aside class="separate-line"></aside>
                 `)
        });
             
 }
        

getSecondEventData()
.then(outputSecondWeekEvents);



  //--------------------------MONTH EVENTS



function getMonthEventData(monthEventData) {
    
    const monthURL = `https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKeyT}&locale=*&startDateTime=2024-07-19T13:52:00Z&endDateTime=2024-07-31T13:53:00Z&page=3&classificationName=${Mgenre}`;
    
    return $.get(monthURL);

}

 function outputMonthEvents (monthEventData) {
    const $secondeventOutput = $('.indoor-events');
    const allEvents = monthEventData._embedded.events;

    //let weekEventsOutput = .innerHTML 
        allEvents.forEach(function(eventObj){
            $secondeventOutput.append(`
                <h2>Event Name: ${eventObj.name}</h2>
                <h2>Event Date: ${eventObj.dates.start.localDate}</h2>
                <h2>Event Time: ${eventObj.dates.start.localTime}</h2>


                 <aside class="separate-line"></aside>
                 `)
        });
             
 }
        

 getMonthEventData()
   .then(outputMonthEvents);

*/


const apiKeyT = `qKWzXfaxaHnvqJQfnyFKmzJ8AjfSh2qk`;
const Mgenre = 'music';

// Function to fetch event data
function getEventData(startDateTime, endDateTime) {
    const url = `https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKeyT}&locale=*&startDateTime=${startDateTime}&endDateTime=${endDateTime}&classificationName=${Mgenre}`;
    return $.get(url);
}

// Function to output events with a limit of 10
function outputEvents(eventData, outputSelector) {
    const $eventOutput = $(outputSelector);
    const allEvents = eventData._embedded.events.slice(0, 10); // Limit to first 10 events

    allEvents.forEach(function(eventObj) {
        $eventOutput.append(`
            <h2>Event Name: ${eventObj.name}</h2>
            <h2>Event Date: ${eventObj.dates.start.localDate}</h2>
            <h2>Event Time: ${eventObj.dates.start.localTime}</h2>
            <aside class="separate-line"></aside>
        `);
    });
}

// Fetch and output events for different time frames with a limit of 10
getEventData('2024-07-04T13:52:00Z', '2024-07-11T13:53:00Z')
    .then(function(eventData) {
        outputEvents(eventData, '.top-events');
    });

getEventData('2024-07-12T13:52:00Z', '2024-07-18T13:53:00Z')
    .then(function(eventData) {
        outputEvents(eventData, '.next-events');
    });

getEventData('2024-07-19T13:52:00Z', '2024-07-31T13:53:00Z&page=3')
    .then(function(eventData) {
        outputEvents(eventData, '.indoor-events');
    });
