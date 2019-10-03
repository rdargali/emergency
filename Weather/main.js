

function getWeather () {
    fetch ('https:cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/3fcc451edcabf896a9d04e1468f76ebf/29.7604,-95.3698')
    .then((response => {
         response.json();
    .then( json => { 
        console.log(json.currently.summary)
        console.log(json.summary.temperature)

    }
    
    
getWeather()



function getRepos() {
    return fetch('https://api.github.com/users/stackabuse/repos')
      .then((response) => {
          return response.json();
      }).then((response) => {
          return response.data;
      }).then((repos) => {
          return repos.filter((repo) => {
              return repo.created_at > '2019-06-01';
          });
      }).then((repos) => {
          return repos.filter((repo) => {
              return repo.stargazers_count > 1;
          });
      });
}

