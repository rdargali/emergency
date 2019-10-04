
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
        window.location.href="https://darroyo97.github.io/crisishelp/ontheway.html"
    }, 1000);
};

var summaryParagraph = document.getElementById("summary");




function getWeather () {
    
    fetch ('https://api.darksky.net/forecast/3fcc451edcabf896a9d04e1468f76ebf/29.7604,-95.3698')
    .then(function(response) {
        return response.json();
    }).then(function(json) { 
        var summary = json.currently.summary
        var temp = json.currently.temperature + ' F°'
        
        
    return ` ${temp} and ${summary}`
        
    }).then(function(result) {
        summaryParagraph.textContent = result
    }
    );  
}
getWeather()
// summaryParagraph.textContent = getWeather()

google.maps.event.addDomListener(window, 'load', initMap)