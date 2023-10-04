// 15ac5048abbab01d8350c025c1d102cf

// api.openweathermap.org/data/2.5/forecast?q=London&appid={15ac5048abbab01d8350c025c1d102cf}

var searchButton = document.getElementById("search-button")
var searchBar = document.getElementById("search-bar")

var day1 = document.getElementById("day-1")
var day2 = document.getElementById("day-2")
var day3 = document.getElementById("day-3")
var day4 = document.getElementById("day-4")
var day5 = document.getElementById("day-5")
var day1Condition = document.getElementById("day-1-condition")
var day2Condition = document.getElementById("day-2-condition")
var day3Condition = document.getElementById("day-3-condition")
var day4Condition = document.getElementById("day-4-condition")
var day5Condition = document.getElementById("day-5-condition")
var day1Temperature = document.getElementById("day-1-temperature")
var day2Temperature = document.getElementById("day-2-temperature")
var day3Temperature = document.getElementById("day-3-temperature")
var day4Temperature = document.getElementById("day-4-temperature")
var day5Temperature = document.getElementById("day-5-temperature")
var day1Humidity = document.getElementById("day-1-Humidity")
var day2Humidity = document.getElementById("day-2-Humidity")
var day3Humidity = document.getElementById("day-3-Humidity")
var day4Humidity = document.getElementById("day-4-Humidity")
var day5Humidity = document.getElementById("day-5-Humidity")
var day1Windspeed = document.getElementById("day-1-windspeed")
var day2Windspeed = document.getElementById("day-2-windspeed")
var day3Windspeed = document.getElementById("day-3-windspeed")
var day4Windspeed = document.getElementById("day-4-windspeed")
var day5Windspeed = document.getElementById("day-5-windspeed")

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
function locationSearch(event) {
    event.preventDefault()
    var userSearch = searchBar.value.trim()
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + userSearch + "&units=imperial&appid=15ac5048abbab01d8350c025c1d102cf"
    fetch(requestUrl)
        .then(response => response.json())
        .then(function (data) {
            console.log(data)
            generateWeather(data)
            })
var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + userSearch + "&units=imperial&appid=15ac5048abbab01d8350c025c1d102cf"
fetch(requestUrl)
    .then(response => response.json())
    .then(function (data) {
        console.log(data)
    }
    )
}
function generateWeather(data) {
    var condition1 = data[11]
    var temperature1 = data[6].main[3]
    var humidity1 = data[6].main[1]
    var windspeed1 = data[12].speed[1]
    day1Condition.textContent = condition1.value
    day1Temperature.textContent = temperature1.value
    day1Humidity.textContent = humidity1.value
    day1Windspeed.textContent = windspeed1.value

}




searchButton.addEventListener("click", locationSearch)