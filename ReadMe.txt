Getting the weather data using an API. (Open Weather, site: https://openweathermap.org/).

The application uses Fetch API to retrieve weather data from an OpenWeather web application server.
Data gathering request occurs when there is a change in the city selection field, or when the page loads in.
The getWeather() function is called to get and to display the weather data after the page is loaded or when a city selection changes. 
If the request is successful, data is passed into the showWeather() function. The purpose of that function is to display the gathered information on the page.
Currently, we are able to get weather data for five different cities.
To do this, object "cities" has a pre-recorded collection of city IDs for which requests will be sent. 
Additionally, the object mentioned above also stores data for the proper functioning of the city selector. 
Cities IDs are gathered from the OpenWeather web application via accessing their IDs archive located on their web site. 

GitHub profile: https://github.com/TimurJS
Repository link: https://github.com/TimurJS/Getting-the-weather-using-the-API.git

