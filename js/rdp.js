const apiKeyW = '453e76b47d31a5d94e87e19b3143c6ec';


function getCityName() {
    const city = localStorage.getItem('city');
    return city;
}

function outputCityName() {
    const city = getCityName();
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
    const $currentOutput = $('.current-report');
    const cityName = currentData.name; // Retrieve city name from currentData
    console.log(cityName); // Log the city name for verification

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
        if (forcastObj.dt_txt.includes('12:00')) return true;
    });
console.log(filtered)
    filtered.forEach(function (forcastObj) {
        $forcastOutput.append(`
                <div class="cell">
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


//=============================ticketmaster API CALL================================


const apiKeyT = `6u8xMx7g5bxawimcRO173VA4aimxbY63`;

let selectedGenre = '';

// Function to handle modal submit
$('#submit-btn').on('click', function () {
    selectedGenre = $('.genre-input').val();
    console.log('Selected genre:', selectedGenre);

})


// Function to fetch event data
function getEventData(startDateTime, endDateTime) {
    const city = localStorage.getItem('city')
    const genre = localStorage.getItem('genre')
    
    const url = `https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKeyT}&locale=*&startDateTime=${startDateTime}&endDateTime=${endDateTime}&city=${city}&classificationName=${genre}`;
    return $.get(url);
}

// Function to output events with a limit of 10
function outputEvents(eventData, outputSelector) {
    const $eventOutput = $(outputSelector);
    const allEvents = eventData._embedded?.events 
   
    if (allEvents){
        const sortedEvents = allEvents.sort(function(eventA, eventB){
       
            return dayjs(eventA.dates.start.dateTime).valueOf() - dayjs(eventB.dates.start.dateTime).valueOf()
        })
    
        sortedEvents.forEach(function (eventObj) {
            // const militaryTime = eventObj.dates.start.localTime;
            // const standardTime = militaryToStandardTime(militaryTime);
            const date = dayjs(eventObj.dates.start.dateTime)
    
            $eventOutput.append(`
                <h2 class="mt-2" >Event Name: ${eventObj.name}</h2>
                <h2 class="my-2">Event Date: ${date.format('MMMM DD, YYYY')}</h2>
                <h2 class="mb-2">Event Time: ${date.format('hh:mm a')}</h2>
                <aside class="separate-line"></aside>
            `);
        });
    }   else {
        $eventOutput.html('<h2>No Events Found Within That Range</h2>')
    }

    
}

const startDate = new Date(localStorage.getItem('start-date'));
const endDate = new Date(localStorage.getItem('end-date'));

const start = dayjs(startDate).format('YYYY-MM-DDTHH:mm:ss');
const end = dayjs(endDate).format('YYYY-MM-DDTHH:mm:ss');

// Fetch and output events for different time frames with a limit of 10
getEventData(start + 'Z', end + 'Z')
    .then(function (eventData) {
        outputEvents(eventData, '.top-events');
    });

