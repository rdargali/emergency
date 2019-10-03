
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
      

      //Function To Display Popup
function div_show() {
    document.getElementById('abc').style.display = "block";
    }
    // Validating Empty Field



    
    //Function To Display Popup
    function div_show() {
    document.getElementById('abc').style.display = "block";
    }
    //Function to Hide Popup
    function div_hide(){
    document.getElementById('abc').style.display = "none";
    }

    

function redirect(){

    alert('Your Information has been sent to 911!');

    setTimeout(function(){
        window.location.href="http://127.0.0.1:5500/emergency/ontheway.html"
    }, 2000);
}