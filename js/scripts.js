//Scripts
// Get and store Geo Location lat/long coordinates
navigator.geolocation.getCurrentPosition( 
  
  function(position) {
  
  // wait a few seconds to receive location
  var lat = position.coords.latitude;
  var long = position.coords.longitude;
  
  console.log( lat, long); 

  
});

$('button').click();



// Get and store Geo Location lat/long coordinates
navigator.geolocation.getCurrentPosition( 
  
  function(position) {
  
  // wait a few seconds to receive location
  var lat = position.coords.latitude;
  var long = position.coords.longitude;
  
  console.log( lat, long); 

});