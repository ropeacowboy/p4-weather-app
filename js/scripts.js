// Note: Plugin has been updated. Use version 3.1
// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js
// Refer: http://simpleweatherjs.com

navigator.geolocation.getCurrentPosition(function(position) {
    //load weather using your lat/lng coordinates. See _loadWeather()_ below
    position.coords.latitude+','+position.coords.longitude; 
    // See latitute & longitude. Note, wait a few seconds
    console.log(position.coords.latitude+','+position.coords.longitude);
});

navigator.geolocation.getCurrentPosition(function(position){
	var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
	var latAndLong = latitude + ',' + longitude; 
  console.log(latAndLong);
	return latAndLong;
});

$.simpleWeather({
    location: 'Miami',
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
        $('.temp').text(weather.temp + '  F');
        $('.city').text(weather.city);
        $('.region').text(weather.region);
         $('h1').text(weather.currently);
        $('img').attr('src', weather.image);

    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });



