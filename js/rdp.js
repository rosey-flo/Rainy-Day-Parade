//THIS AREA WILL BE THE KEYS TO OUR TWO API DATABASES (OPENWEATHERMAP AND TICKETMASTER)
/*
const apiKey = `0b2d18998cc2c1478342de38040d8e6f`

const urlW = `https://pro.openweathermap.org/data/2.5/forecast/climate?${variablename}&appid=${apiKey}&units=imperial`
*/

//================MUSIC GENRE ID 1 WEEK ==============//

function fetchEventData() {
    const apiKeyT = `qKWzXfaxaHnvqJQfnyFKmzJ8AjfSh2qk`;
    
    // Ticketmaster API endpoint for events discovery
    const firsturl = `https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKeyT}&locale=*&startDateTime=2024-07-04T13:52:00Z&endDateTime=2024-07-11T13:53:00Z&classificationName=music`;

    
    // Fetch data from the API
    fetch(firsturl)
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

    

    https://app.ticketmaster.com/discovery/v2/events?apikey=qKWzXfaxaHnvqJQfnyFKmzJ8AjfSh2qk&locale=*&startDateTime=2024-07-19T13:52:00Z&endDateTime=2024-07-31T13:53:00Z&page=3&classificationName=music

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