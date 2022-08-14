### Getting the weather data using an API. [Open Weather](https://openweathermap.org/), weather forecasts, a site.

The application uses __Fetch API__ to retrieve weather data from an __OpenWeather web application server__. Data gathering request occurs when there is a change in the city selection field, or when the page loads in. The __getWeather() function__ is called to get and to display the weather data after the page is loaded or when a city selection changes. 
If the request is successful, data is passed into the __showWeather() function__. The purpose of that function is to display the gathered information on the page. Currently, we are able to get weather data for five different cities.

To do this, object __"cities"__ has a pre-recorded collection of city IDs for which requests will be sent. Additionally, the object mentioned above also stores data for the proper functioning of the city selector. Cities IDs are gathered from the OpenWeather web application via accessing their IDs archive located on their web site. 

__Repository link:__ https://github.com/TimurJS/Getting-the-weather-using-the-API.git \
__GitHub profile:__ https://github.com/TimurJS