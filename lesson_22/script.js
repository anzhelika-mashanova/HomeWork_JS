btnTask.addEventListener('click',onClickHandler);
const cityName = document.getElementById('textInput');
const APIKey = "77f43e4f92ae24e6f8d8d241fc648f8f";
function onClickHandler() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityName.value+"&appid="+APIKey)
        .then(response => response.json())
        .then(data => addWeather(data))
        .catch(error=> errorMs(error));
}

function addWeather(weather) {
    weatherList.innerHTML="";
    let html = weatherContainer.innerHTML.replace("{{city}}",weather.name)
        .replace("{{temp}}", tempInCesium(weather.main.temp))
        .replace("{{humidity}}", weather.main.humidity)
        .replace("{{wind}}", weather.wind.speed);
    weatherList.insertAdjacentHTML("beforeend", html);
    console.log(weather);
}
function tempInCesium(kelwin){
    let celsium = kelwin-273
    return parseInt(celsium);
}
function errorMs(error){
    let errorToDisplay = document.getElementById('errorRow');
if(error){
    errorToDisplay.classList.toggle('visibility')
    errorToDisplay.textContent="town not found";
}
}