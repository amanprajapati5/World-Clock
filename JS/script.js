 // ============================================
// WORLD CLOCK
// ============================================


// ─────────────────────────────────────────────
// City Data
// ─────────────────────────────────────────────

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


// ─────────────────────────────────────────────
// App State
// ─────────────────────────────────────────────

let selectedCity = cities[0];

let displayedCities = cities;

let favoriteCities = JSON.parse(
    localStorage.getItem("favoriteCities")
) || [];


// ─────────────────────────────────────────────
// UTC Offset
// ─────────────────────────────────────────────

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


// ─────────────────────────────────────────────
// Main Clock
// ─────────────────────────────────────────────

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


    let timeElement = document.getElementById("time");
    let dateElement = document.getElementById("date");
    let locationElement = document.querySelector(".location-name");
    let clockInfo = document.getElementById("clockInfo");


    if (timeElement) {
        timeElement.textContent = time;
    }


    if (dateElement) {
        dateElement.textContent = date;
    }


    if (locationElement) {
        locationElement.textContent =
            `${selectedCity.flag} ${selectedCity.name}, ${selectedCity.country}`;
    }


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


    if (clockInfo) {
        clockInfo.textContent =
            `${dayNight} · ${getUTCOffset(selectedCity.timeZone)}`;
    }
}


// ─────────────────────────────────────────────
// Show City Cards
// ─────────────────────────────────────────────

function showCities(list) {

    let countryList =
        document.getElementById("countryList");


    if (!countryList) {
        return;
    }


    countryList.innerHTML = "";


    if (list.length === 0) {

        countryList.innerHTML = `
            <div class="no-results">

                <div class="no-results-icon">
                    🔍
                </div>

                <h3>No cities found</h3>

                <p>
                    Try searching with another city or country.
                </p>

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


        let isFavorite =
            favoriteCities.includes(city.name);


        let favoriteIcon =
            isFavorite ? "★" : "☆";


        countryList.innerHTML += `

            <div
                class="country-card ${selectedClass}"
                onclick="selectCity('${city.name}')"
            >

                <div class="city-details">

                    <div class="city-title">

                        <span class="city-flag">
                            ${city.flag}
                        </span>

                        <span>
                            ${city.name}
                        </span>

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


                <div class="city-right">

                    <div class="city-time">
                        ${time}
                    </div>


                    <button
                        type="button"
                        class="favorite-btn"
                        onclick="toggleFavorite(event, '${city.name}')"
                    >
                        ${favoriteIcon}
                    </button>

                </div>

            </div>
        `;
    });
}


// ─────────────────────────────────────────────
// Select City
// ─────────────────────────────────────────────

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


// ─────────────────────────────────────────────
// Browse Button
// ─────────────────────────────────────────────

let browseBtn =
    document.getElementById("browseBtn");


if (browseBtn) {

    browseBtn.addEventListener("click", function() {

        let section =
            document.getElementById("countrySection");


        if (section) {
            section.style.display = "block";
        }


        displayedCities = cities;


        let search =
            document.getElementById("search");


        if (search) {
            search.value = "";
        }


        let resultCount =
            document.getElementById("resultCount");


        if (resultCount) {
            resultCount.textContent = "";
        }


        let suggestions =
            document.getElementById("searchSuggestions");


        if (suggestions) {
            suggestions.innerHTML = "";
        }


        showCities(displayedCities);

        showSearchHistory();

        showFavorites();
    });
}


// ─────────────────────────────────────────────
// Search
// ─────────────────────────────────────────────

let searchInput =
    document.getElementById("search");


if (searchInput) {

    searchInput.addEventListener("input", function() {

        let searchText =
            this.value.trim().toLowerCase();


        let filteredCities =
            cities.filter(function(city) {

                let cityName =
                    city.name.toLowerCase();

                let countryName =
                    city.country.toLowerCase();


                return (
                    cityName.includes(searchText) ||
                    countryName.includes(searchText)
                );
            });


        displayedCities = filteredCities;


        // Result Count

        let resultCount =
            document.getElementById("resultCount");


        if (resultCount) {

            if (searchText === "") {

                resultCount.textContent = "";

            } else if (filteredCities.length === 1) {

                resultCount.textContent =
                    "1 city found";

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

                            <span>
                                ${city.flag}
                            </span>

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
}


// ─────────────────────────────────────────────
// Search Suggestion
// ─────────────────────────────────────────────

function selectSuggestion(cityName) {

    let selected =
        cities.find(function(city) {
            return city.name === cityName;
        });


    if (!selected) {
        return;
    }


    selectedCity = selected;

    displayedCities = [selected];


    let search =
        document.getElementById("search");


    if (search) {
        search.value = selected.name;
    }


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


// ─────────────────────────────────────────────
// Search History
// ─────────────────────────────────────────────

function saveSearch(cityName) {

    let searchHistory = JSON.parse(
        localStorage.getItem("searchHistory")
    ) || [];


    searchHistory =
        searchHistory.filter(function(city) {
            return city !== cityName;
        });


    searchHistory.unshift(cityName);


    searchHistory =
        searchHistory.slice(0, 5);


    localStorage.setItem(
        "searchHistory",
        JSON.stringify(searchHistory)
    );
}


// ─────────────────────────────────────────────
// Show Search History
// ─────────────────────────────────────────────

function showSearchHistory() {

    let historyBox =
        document.getElementById("searchHistory");


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

                <span>
                    ${cityName}
                </span>

            </div>

        `;
    });
}


// ─────────────────────────────────────────────
// Favorites
// ─────────────────────────────────────────────

function toggleFavorite(event, cityName) {

    event.stopPropagation();


    let cityIndex =
        favoriteCities.indexOf(cityName);


    if (cityIndex === -1) {

        favoriteCities.push(cityName);

    } else {

        favoriteCities.splice(cityIndex, 1);
    }


    localStorage.setItem(
        "favoriteCities",
        JSON.stringify(favoriteCities)
    );


    showCities(displayedCities);

    showFavorites();
}


// ─────────────────────────────────────────────
// Show Favorites
// ─────────────────────────────────────────────

function showFavorites() {

    let favoritesList =
        document.getElementById("favoritesList");


    if (!favoritesList) {
        return;
    }


    favoritesList.innerHTML = "";


    if (favoriteCities.length === 0) {

        favoritesList.innerHTML = `

            <div class="empty-favorites">

                <div>☆</div>

                <p>
                    No favorite cities yet.
                </p>

                <span>
                    Click the star on a city to save it.
                </span>

            </div>

        `;

        return;
    }


    favoriteCities.forEach(function(cityName) {

        let city =
            cities.find(function(city) {
                return city.name === cityName;
            });


        if (!city) {
            return;
        }


        let time = new Date().toLocaleTimeString("en-US", {
            timeZone: city.timeZone,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });


        favoritesList.innerHTML += `

            <div
                class="favorite-card"
                onclick="selectCity('${city.name}')"
            >

                <div class="favorite-city">

                    <span class="city-flag">
                        ${city.flag}
                    </span>


                    <div>

                        <div class="favorite-city-name">
                            ${city.name}
                        </div>

                        <div class="favorite-country">
                            ${city.country}
                        </div>

                    </div>

                </div>


                <div class="favorite-time">
                    ${time}
                </div>

            </div>

        `;
    });
}


// ─────────────────────────────────────────────
// Theme System
// ─────────────────────────────────────────────

let themeBtn =
    document.getElementById("themeBtn");


function applyTheme() {

    let savedTheme =
        localStorage.getItem("theme");


    if (savedTheme === "light") {

        document.body.classList.add(
            "light-theme"
        );

        if (themeBtn) {
            themeBtn.textContent = "☀️";
        }

    } else {

        document.body.classList.remove(
            "light-theme"
        );

        if (themeBtn) {
            themeBtn.textContent = "🌙";
        }
    }
}


applyTheme();


if (themeBtn) {

    themeBtn.addEventListener("click", function() {

        document.body.classList.toggle(
            "light-theme"
        );


        let isLight =
            document.body.classList.contains(
                "light-theme"
            );


        if (isLight) {

            themeBtn.textContent = "☀️";

            localStorage.setItem(
                "theme",
                "light"
            );

        } else {

            themeBtn.textContent = "🌙";

            localStorage.setItem(
                "theme",
                "dark"
            );
        }
    });
}


// ─────────────────────────────────────────────
// Initial Setup
// ─────────────────────────────────────────────

updateMainClock();

showSearchHistory();

showFavorites();


// ─────────────────────────────────────────────
// Live Update
// ─────────────────────────────────────────────

setInterval(function() {

    updateMainClock();


    let countrySection =
        document.getElementById("countrySection");


    if (
        countrySection &&
        countrySection.style.display === "block"
    ) {

        showCities(displayedCities);

        showFavorites();
    }

}, 1000);