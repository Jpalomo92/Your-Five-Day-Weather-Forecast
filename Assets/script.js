//Were going to use two APIs - the main one pulling the weather and the location API converting the name of location to Lat and Long

const app = {

    init: () => {
    document
        .getElementById('btnGet')
        .addEventListener('click', app.fetchWeather);

    document
        .getElementById('btnHistory')
        .addEventListener('click', app.fetchWeather);

    },

    fetchWeather: (ev) => {
        let lat = ;
        let lon = ;
        let key = '9fa04325f51ba78620a903a47345447d';
        let lang = 'en';
        let units = 'imperial';
        let url =
    }
}
var requestUrl = '';

var responseText = document.getElementById('');

function getApi(requestUrlArg) {
  fetch(requestUrlArg).then(function (response) {
    console.log(response);
    if (response.status === 200) {
      responseText.textContent = response.status;
    }
    return response.json();
  });
}

app.init();