// var emergencyButton = document.getElementById('map-event');
// console.log(emergencyButton)
// emergencyButton.addEventListener('click', function(){
//    console.log("nothing")
// });

var map, infoWindow;

      function initMap() {
          var center = {lat: -34.397, lng: 150.644}
        map = new google.maps.Map(document.getElementById('map'), {
          center: center,
          zoom: 13
        });
        infoWindow = new google.maps.InfoWindow;

        
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                title: 'Hello World!'
              });
            marker.setMap(map)
    
            // infoWindow.setPosition(pos);
            // infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }

      
      google.maps.event.addDomListener(window, 'load', initMap)
      