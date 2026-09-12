let cities = [
    {
        name: "New Delhi",
        country: "India",
        flag: "🇮🇳",
        timeZone: "Asia/Kolkata",
        zone: "IST"
    },
    {
        name: "Mumbai",
        country: "India",
        flag: "🇮🇳",
        timeZone: "Asia/Kolkata",
        zone: "IST"
    },
    {
        name: "Bengaluru",
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
        name: "Paris",
        country: "France",
        flag: "🇫🇷",
        timeZone: "Europe/Paris",
        zone: "CET/CEST"
    },
    {
        name: "Berlin",
        country: "Germany",
        flag: "🇩🇪",
        timeZone: "Europe/Berlin",
        zone: "CET/CEST"
    },
    {
        name: "Rome",
        country: "Italy",
        flag: "🇮🇹",
        timeZone: "Europe/Rome",
        zone: "CET/CEST"
    },
    {
        name: "Madrid",
        country: "Spain",
        flag: "🇪🇸",
        timeZone: "Europe/Madrid",
        zone: "CET/CEST"
    },
    {
        name: "Moscow",
        country: "Russia",
        flag: "🇷🇺",
        timeZone: "Europe/Moscow",
        zone: "MSK"
    },
    {
        name: "Istanbul",
        country: "Turkey",
        flag: "🇹🇷",
        timeZone: "Europe/Istanbul",
        zone: "TRT"
    },
    {
        name: "Dubai",
        country: "UAE",
        flag: "🇦🇪",
        timeZone: "Asia/Dubai",
        zone: "GST"
    },
    {
        name: "Riyadh",
        country: "Saudi Arabia",
        flag: "🇸🇦",
        timeZone: "Asia/Riyadh",
        zone: "AST"
    },
    {
        name: "Doha",
        country: "Qatar",
        flag: "🇶🇦",
        timeZone: "Asia/Qatar",
        zone: "AST"
    },
    {
        name: "Tokyo",
        country: "Japan",
        flag: "🇯🇵",
        timeZone: "Asia/Tokyo",
        zone: "JST"
    },
    {
        name: "Seoul",
        country: "South Korea",
        flag: "🇰🇷",
        timeZone: "Asia/Seoul",
        zone: "KST"
    },
    {
        name: "Beijing",
        country: "China",
        flag: "🇨🇳",
        timeZone: "Asia/Shanghai",
        zone: "CST"
    },
    {
        name: "Hong Kong",
        country: "Hong Kong",
        flag: "🇭🇰",
        timeZone: "Asia/Hong_Kong",
        zone: "HKT"
    },
    {
        name: "Singapore",
        country: "Singapore",
        flag: "🇸🇬",
        timeZone: "Asia/Singapore",
        zone: "SGT"
    },
    {
        name: "Bangkok",
        country: "Thailand",
        flag: "🇹🇭",
        timeZone: "Asia/Bangkok",
        zone: "ICT"
    },
    {
        name: "Jakarta",
        country: "Indonesia",
        flag: "🇮🇩",
        timeZone: "Asia/Jakarta",
        zone: "WIB"
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
        name: "Chicago",
        country: "USA",
        flag: "🇺🇸",
        timeZone: "America/Chicago",
        zone: "CST/CDT"
    },
    {
        name: "San Francisco",
        country: "USA",
        flag: "🇺🇸",
        timeZone: "America/Los_Angeles",
        zone: "PST/PDT"
    },
    {
        name: "Toronto",
        country: "Canada",
        flag: "🇨🇦",
        timeZone: "America/Toronto",
        zone: "EST/EDT"
    },
    {
        name: "Vancouver",
        country: "Canada",
        flag: "🇨🇦",
        timeZone: "America/Vancouver",
        zone: "PST/PDT"
    },
    {
        name: "Mexico City",
        country: "Mexico",
        flag: "🇲🇽",
        timeZone: "America/Mexico_City",
        zone: "CST/CDT"
    },
    {
        name: "São Paulo",
        country: "Brazil",
        flag: "🇧🇷",
        timeZone: "America/Sao_Paulo",
        zone: "BRT"
    },
    {
        name: "Buenos Aires",
        country: "Argentina",
        flag: "🇦🇷",
        timeZone: "America/Argentina/Buenos_Aires",
        zone: "ART"
    },
    {
        name: "Sydney",
        country: "Australia",
        flag: "🇦🇺",
        timeZone: "Australia/Sydney",
        zone: "AEST/AEDT"
    },
    {
        name: "Melbourne",
        country: "Australia",
        flag: "🇦🇺",
        timeZone: "Australia/Melbourne",
        zone: "AEST/AEDT"
    },
    {
        name: "Auckland",
        country: "New Zealand",
        flag: "🇳🇿",
        timeZone: "Pacific/Auckland",
        zone: "NZST/NZDT"
    },
    {
        name: "Cape Town",
        country: "South Africa",
        flag: "🇿🇦",
        timeZone: "Africa/Johannesburg",
        zone: "SAST"
    },
    {
        name: "Cairo",
        country: "Egypt",
        flag: "🇪🇬",
        timeZone: "Africa/Cairo",
        zone: "EET/EEST"
    },
    {
        name: "Nairobi",
        country: "Kenya",
        flag: "🇰🇪",
        timeZone: "Africa/Nairobi",
        zone: "EAT"
    }
];

let selectedCity = cities[0];
let displayedCities = cities;



// Get UTC Offset

function getUTCOffset(timeZone) {

    let timeZoneName = new Intl.DateTimeFormat("en-US", {
        timeZone: timeZone,
        timeZoneName: "longOffset"
    })
        .formatToParts(new Date())
        .find(function(part) {
            return part.type === "timeZoneName";
        }).value;

    if (timeZoneName === "GMT") {
        return "UTC +00:00";
    }

    return timeZoneName.replace("GMT", "UTC ");
}



// Update Main Clock


function updateMainClock() {

    let now = new Date();

    let time = now.toLocaleTimeString("en-US", {
        timeZone: selectedCity.timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    let date = now.toLocaleDateString("en-US", {
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
            .formatToParts(now)
            .find(function(part) {
                return part.type === "hour";
            }).value
    );


    let dayNight =
        hour >= 6 && hour < 18
            ? "☀️ Day"
            : "🌙 Night";


    document.getElementById("clockInfo").textContent =
        `${dayNight} · ${getUTCOffset(selectedCity.timeZone)}`;
}


// Show City Cards


function showCities(list) {

    let countryList = document.getElementById("countryList");

    countryList.innerHTML = "";


    // No results
    if (list.length === 0) {

        countryList.innerHTML = `
            <div class="no-results">
                <div class="no-results-icon">🔍</div>
                <h3>No cities found</h3>
                <p>Try searching with another city or country.</p>
            </div>
        `;

        return;
    }


    list.forEach(function(city) {

        let now = new Date();


        let time = now.toLocaleTimeString("en-US", {
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
                .formatToParts(now)
                .find(function(part) {
                    return part.type === "hour";
                }).value
        );


        let dayNight =
            hour >= 6 && hour < 18
                ? "☀️ Day"
                : "🌙 Night";


        let selectedClass =
            selectedCity.name === city.name
                ? "selected-city"
                : "";


        countryList.innerHTML += `
            <div
                class="country-card ${selectedClass}"
                onclick="selectCity('${city.name}')"
            >

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



// Select City


function selectCity(cityName) {

    let city = cities.find(function(city) {
        return city.name === cityName;
    });


    if (!city) {
        return;
    }


    selectedCity = city;

    updateMainClock();

    showCities(displayedCities);
}



// Browse World Time


document.getElementById("browseBtn").addEventListener("click", function() {

    let section = document.getElementById("countrySection");

    section.style.display = "block";


    displayedCities = cities;

    showCities(displayedCities);

    showSearchHistory();

});



// Search


document.getElementById("search").addEventListener("input", function() {

    let searchText = this.value.trim().toLowerCase();


    let filteredCities = cities.filter(function(city) {

        let cityName = city.name.toLowerCase();

        let countryName = city.country.toLowerCase();


        return (
            cityName.includes(searchText) ||
            countryName.includes(searchText)
        );
    });


    displayedCities = filteredCities;


    //Result Count 

    let resultCount =
        document.getElementById("resultCount");


    if (resultCount) {

        if (searchText === "") {

            resultCount.textContent = "";

        } else if (filteredCities.length === 1) {

            resultCount.textContent = "1 city found";

        } else {

            resultCount.textContent =
                `${filteredCities.length} cities found`;
        }
    }


    // Suggestions 

    let suggestions =
        document.getElementById("searchSuggestions");


    if (suggestions) {

        suggestions.innerHTML = "";


        if (searchText !== "") {

            let suggestionCities =
                filteredCities.slice(0, 5);


            suggestionCities.forEach(function(city) {

                suggestions.innerHTML += `
                    <div
                        class="suggestion-item"
                        onclick="selectSuggestion('${city.name}')"
                    >
                        <span>${city.flag}</span>
                        <span>
                            ${city.name}, ${city.country}
                        </span>
                    </div>
                `;
            });
        }
    }


    showCities(displayedCities);

});


// Select Search Suggestion


function selectSuggestion(cityName) {

    let selected = cities.find(function(city) {

        return city.name === cityName;

    });


    if (!selected) {
        return;
    }


    selectedCity = selected;

    displayedCities = [selected];


    document.getElementById("search").value =
        selected.name;


    let suggestions =
        document.getElementById("searchSuggestions");


    if (suggestions) {
        suggestions.innerHTML = "";
    }


    let resultCount =
        document.getElementById("resultCount");


    if (resultCount) {
        resultCount.textContent = "1 city found";
    }


    saveSearch(cityName);

    showSearchHistory();

    showCities(displayedCities);

    updateMainClock();
}



// Save Search History


function saveSearch(cityName) {

    let searchHistory = JSON.parse(
        localStorage.getItem("searchHistory")
    ) || [];


    // Remove duplicate
    searchHistory = searchHistory.filter(function(city) {

        return city !== cityName;

    });


    // Add newest search at beginning
    searchHistory.unshift(cityName);


    // Keep only latest 5
    searchHistory = searchHistory.slice(0, 5);


    localStorage.setItem(
        "searchHistory",
        JSON.stringify(searchHistory)
    );
}


// Show Search History


function showSearchHistory() {

    let historyBox =
        document.getElementById("searchHistory");


    // Prevent JavaScript error
    if (!historyBox) {
        return;
    }


    let searchHistory = JSON.parse(
        localStorage.getItem("searchHistory")
    ) || [];


    if (searchHistory.length === 0) {

        historyBox.innerHTML = "";

        return;
    }


    historyBox.innerHTML = `
        <div class="history-title">
            Recent Searches
        </div>
    `;


    searchHistory.forEach(function(cityName) {

        historyBox.innerHTML += `
            <div
                class="history-item"
                onclick="selectSuggestion('${cityName}')"
            >
                <span>🕘</span>
                <span>${cityName}</span>
            </div>
        `;
    });
}



// Initial Setup


updateMainClock();

showSearchHistory();


// Live Update


setInterval(function() {

    updateMainClock();


    let countrySection =
        document.getElementById("countrySection");


    if (
        countrySection &&
        countrySection.style.display === "block"
    ) {

        showCities(displayedCities);
    }


}, 1000);