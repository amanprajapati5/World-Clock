 let cities = [
    {
        name: "New Delhi",
        country: "India",
        flag: "🇮🇳",
        timeZone: "Asia/Kolkata",
        zone: "IST"
    },
    {
        name: "London",
        country: "United Kingdom",
        flag: "🇬🇧",
        timeZone: "Europe/London",
        zone: "GMT/BST"
    },
    {
        name: "New York",
        country: "USA",
        flag: "🇺🇸",
        timeZone: "America/New_York",
        zone: "EST/EDT"
    },
    {
        name: "Los Angeles",
        country: "USA",
        flag: "🇺🇸",
        timeZone: "America/Los_Angeles",
        zone: "PST/PDT"
    },
    {
        name: "Dubai",
        country: "UAE",
        flag: "🇦🇪",
        timeZone: "Asia/Dubai",
        zone: "GST"
    },
    {
        name: "Tokyo",
        country: "Japan",
        flag: "🇯🇵",
        timeZone: "Asia/Tokyo",
        zone: "JST"
    },
    {
        name: "Singapore",
        country: "Singapore",
        flag: "🇸🇬",
        timeZone: "Asia/Singapore",
        zone: "SGT"
    },
    {
        name: "Sydney",
        country: "Australia",
        flag: "🇦🇺",
        timeZone: "Australia/Sydney",
        zone: "AEST/AEDT"
    },
    {
        name: "Paris",
        country: "France",
        flag: "🇫🇷",
        timeZone: "Europe/Paris",
        zone: "CET/CEST"
    },
    {
        name: "Moscow",
        country: "Russia",
        flag: "🇷🇺",
        timeZone: "Europe/Moscow",
        zone: "MSK"
    }
];

let selectedCity = cities[0];
let displayedCities = cities;


function updateMainClock() {

    let time = new Date().toLocaleTimeString("en-US", {
        timeZone: selectedCity.timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    let date = new Date().toLocaleDateString("en-US", {
        timeZone: selectedCity.timeZone,
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    document.getElementById("time").textContent = time;

    document.getElementById("date").textContent = date;

    document.querySelector(".location-name").textContent =
        `${selectedCity.flag} ${selectedCity.name}, ${selectedCity.country}`;

  let hour = Number(
    new Intl.DateTimeFormat("en-US", {
        timeZone: selectedCity.timeZone,
        hour: "2-digit",
        hour12: false
    })
    .formatToParts(new Date())
    .find(function(part) {
        return part.type === "hour";
    }).value
);

let dayNight = hour >= 6 && hour < 18 ? "☀️ Day" : "🌙 Night";

document.getElementById("clockInfo").textContent =
    `${dayNight} · ${getUTCOffset(selectedCity.timeZone)}`;
}


function showCities(list) {

    let countryList = document.getElementById("countryList");

    countryList.innerHTML = "";

    list.forEach(function(city) {

        let time = new Date().toLocaleTimeString("en-US", {
            timeZone: city.timeZone,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });

       let hour = Number(
    new Intl.DateTimeFormat("en-US", {
        timeZone: city.timeZone,
        hour: "2-digit",
        hour12: false
    })
    .formatToParts(new Date())
    .find(function(part) {
        return part.type === "hour";
    }).value
);

let dayNight = hour >= 6 && hour < 18 ? "☀️ Day" : "🌙 Night";

        countryList.innerHTML += `
            <div class="country-card ${selectedCity.name === city.name ? "selected-city" : ""}" onclick="selectCity('${city.name}')">

                <div class="city-details">

                    <div class="city-title">
                        <span class="city-flag">${city.flag}</span>
                        <span>${city.name}</span>
                    </div>

                    <div class="city-country">
                        ${city.country}
                    </div>

                    <div class="city-zone">
                     ${getUTCOffset(city.timeZone)}
                    </div>

                    <div class="city-day-night">
                        ${dayNight}
                    </div>

                </div>

                <div class="city-time">
                    ${time}
                </div>

            </div>
        `;
    });
}

function selectCity(cityName) {

    selectedCity = cities.find(function(city) {
        return city.name === cityName;
    });

    updateMainClock();
}

function getUTCOffset(timeZone) {

    let date = new Date();

    let utcTime = date.toLocaleString("en-US", {
        timeZone: "UTC"
    });

    let cityTime = date.toLocaleString("en-US", {
        timeZone: timeZone
    });

    let utcDate = new Date(utcTime);
    let cityDate = new Date(cityTime);

    let difference = (cityDate - utcDate) / (1000 * 60);

    let hours = Math.floor(Math.abs(difference) / 60);
    let minutes = Math.abs(difference) % 60;

    let sign = difference >= 0 ? "+" : "-";

    return `UTC ${sign}${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}


document.getElementById("browseBtn").addEventListener("click", function() { 
 
    let section = document.getElementById("countrySection"); 
 
    section.style.display = "block"; 

    displayedCities = cities;
 
    showCities(displayedCities); 
 
});


document.getElementById("search").addEventListener("input", function() {

    let searchText = this.value.toLowerCase();

    let filteredCities = cities.filter(function(city) {

        return (
            city.name.toLowerCase().includes(searchText) ||
            city.country.toLowerCase().includes(searchText)
        );

    });

    displayedCities = filteredCities;

    showCities(displayedCities);

});

updateMainClock();

setInterval(function() {

    updateMainClock();

    if (countrySection.style.display === "block") {
        showCities(displayedCities);
    }

}, 1000);