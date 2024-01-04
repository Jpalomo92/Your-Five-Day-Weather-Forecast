//Were going to use two APIs - the main one pulling the weather and the location API converting the name of location to Lat and Long
var cityName = document.querySelector('#btnGet');
var historyCity = document.querySelector('#btnHistory');

var url ='http://api.openweathermap.org/data/2.5/forecast?q=london&appid=9fa04325f51ba78620a903a47345447d&units=imperial&lang=en';

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(data => {
    console.log(data);
    //for ( i = 0; i < data.results.length; i++) {

    }
  );

  //const app = {

   // init: () => {
    document
        .getElementById('btnGet')
        .addEventListener('click', app.fetchWeather);

    document
        .getElementById('btnHistory')
        .addEventListener('click', app.fetchWeather);

   // },

   // fetchWeather: (ev) => {
        //let city = ;
        let key ='9fa04325f51ba78620a903a47345447d';
        let lang ='en';
        var units ='imperial';
        let url ='http://api.openweathermap.org/data/2.5/forecast?q=${London}&appid=${key}&units=${units}&lang=${lang}';
       // fetch(url)
        //  .then(response=>{
         //   if(!response.ok)
        //  }

         // )
        //  .then()
         // .catch(console.error);
    
//}
//var requestUrl = '';

//var responseText = document.getElementById('');
//responseText.textContent = issues[i].title;

//function getApi(requestUrlArg) {
  //fetch(requestUrlArg).then(function (response) {
    //console.log(response);
   // if (response.status === 200) {
     // responseText.textContent = response.status;
    
    //return response.json();

//app.init();