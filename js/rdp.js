
const apiKeyW = '453e76b47d31a5d94e87e19b3143c6ec';


function getCityName () {
    const cities = JSON.parse(localStorage.getItem('cities')) || [];
    
    if(cities.length > 0){
        const mostRecentCity = cities[cities.length -1].city;
        return mostRecentCity;
    }    
}

function outputCityName (city) {
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

function getWeatherForcast (cityCoord) {
    
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${cityCoord.lat}&lon=${cityCoord.lon}&appid=${apiKeyW}&units=imperial`;

    
    return $.get(url);
}


function outputWeatherForcast (forcastData) {
    const $forcastOutput = $('.weather-report');
    
    const filtered = forcastData.list.filter(function (forcastObj) {
        if(forcastObj.dt_txt.includes('12')) return true;
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






    /*
;   // Fetch d/*a from the API
    fetch(firsturl)
        .then(response => {
            if (
            //validity!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Extract event information
            const events = data._embedded.events;

            // Create HTML to display events
            let eventHTML = '';
            events.forEach(event => {
                eventHTML += `
                    <div class="event-item">
                        <h2>${event.name}</h2>
                        <p>Date: ${event.dates.start.localDate}</p>
                        <p>Time: ${event.dates.start.localTime}</p>
                        <p>Venue: ${event._embedded.venues[0].name}</p>
                    </div>
                `;
            });

            // Display events in the top-events section
            $('.top-events').html(eventHTML);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Call fetchEventData() when the page loads
$(document).ready(function() {
    fetchEventData();
});

function fetchEventData() {
    const apiKeyT = `qKWzXfaxaHnvqJQfnyFKmzJ8AjfSh2qk`;
    
    // Ticketmaster API endpoint for events discovery
    const url = `https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKeyT}&locale=*&startDateTime=2024-07-04T13:52:00Z&endDateTime=2024-07-31T13:53:00Z&classificationName=music`;

//================MUSIC GENRE ID 2 WEEKS ==============//

    // Fetch data from the API

    const secondurl = `https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKeyT}&locale=*&startDateTime=2024-07-12T13:52:00Z&endDateTime=2024-07-18T13:53:00Z&classificationName=music`;
   

    fetch(secondurl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Extract event information
            const events = data._embedded.events;

            // Create HTML to display events
            let eventHTML = '';
            events.forEach(event => {
                eventHTML += `
                    <div class="event-item">
                        <h2>${event.name}</h2>
                        <p>Date: ${event.dates.start.localDate}</p>
                        <p>Time: ${event.dates.start.localTime}</p>
                        <p>Venue: ${event._embedded.venues[0].name}</p>
                    </div>
                `;
            });

            // Display events in the next-events section
            $('.next-events').html(eventHTML);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Call fetchEventData() when the page loads
$(document).ready(function() {
    fetchEventData();
});

//================MUSIC GENRE ID MONTH==============//

function fetchEventData() {
    const apiKeyT = `qKWzXfaxaHnvqJQfnyFKmzJ8AjfSh2qk`;
    
    // Ticketmaster API endpoint for events discovery
    const url = `https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKeyT}&locale=*&startDateTime=2024-07-04T13:52:00Z&endDateTime=2024-07-31T13:53:00Z&classificationName=music`;

    

    //https://app.ticketmaster.com/discovery/v2/events?apikey=qKWzXfaxaHnvqJQfnyFKmzJ8AjfSh2qk&locale=*&startDateTime=2024-07-19T13:52:00Z&endDateTime=2024-07-31T13:53:00Z&page=3&classificationName=music

    // Fetch data from the API
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Extract event information
            const events = data._embedded.events;

            // Create HTML to display events
            let eventHTML = '';
            events.forEach(event => {
                eventHTML += `
                    <div class="event-item">
                        <h2>${event.name}</h2>
                        <p>Date: ${event.dates.start.localDate}</p>
                        <p>Time: ${event.dates.start.localTime}</p>
                        <p>Venue: ${event._embedded.venues[0].name}</p>
                    </div>
                `;
            });

            // Display events in the indoor-events section
            $('.indoor-events').html(eventHTML);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Call fetchEventData() when the page loads
$(document).ready(function() {
    fetchEventData();
});
*/