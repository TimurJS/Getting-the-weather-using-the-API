// Request parameters
const param = {
    'url': 'http://api.openweathermap.org/data/2.5/', // url request
    'appid': 'e7c729aeb4210a7eab0a9956cfcd718e',      // API key
}

// City identifiers for requests
const cities = {
    703448: 'Kyiv',
    687700: 'Zaporizhzhya',
    702550: 'Lviv',
    709930: 'Dnipro',
    706483: 'Kharkiv',
}

// Filling the select with cities
const select = document.createElement('select');
select.classList.add('current-city');

for (let key in cities) {
    const option = document.createElement('option');
    option.value = key;
    option.text = cities[key];
    option.classList.add('select-text');
    select.appendChild(option);
}

document.querySelector('.weather-select').appendChild(select);

// Getting a response to request
function getWeather() {
    const cityId = document.querySelector('.current-city').value;
    fetch(`${param.url}weather?id=${cityId}&appid=${param.appid}`)
        .then((weather) => {
            return weather.json();
        })
        .then(showWeather);
}

// Output of data to the page
function showWeather(data) {
    document.querySelector('.city').textContent = data.name;
    document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp - 273)} &#176C`;
    document.querySelector('.wind').innerHTML = `${Math.round(data.wind.speed)} m/s`;
    document.querySelector('.humidity').innerHTML = `${data.main.humidity}&#37`;
    document.querySelector('.pressure').innerHTML = `${data.main.pressure} GPa`;
}

getWeather();
document.querySelector('.current-city').onchange = getWeather;