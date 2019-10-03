
var summaryParagraph = document.getElementById("summary")

var icons = new Skycons({"color": "orange"});

icons.set("clear-day", Skycons.CLEAR_DAY);

icons.play();


function getWeather () {
    
    fetch ('https:cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/3fcc451edcabf896a9d04e1468f76ebf/29.7604,-95.3698')
    .then(function(response) {
        return response.json();
    }).then(function(json) { 
        var summary = json.currently.summary
        var temp = json.currently.temperature
        
        
    return `Today's forecast is ${temp} and ${summary}`
        
    }).then(function(result) {
        summaryParagraph.textContent = result
    }
    );  
}
getWeather()
// summaryParagraph.textContent = getWeather()


