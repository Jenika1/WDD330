//import { getJSON, getLocation } from './utilities.js';
import QuakesController from './QuakesContoller.js';
// const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';
// let promiseLocation = getLocation();
// promiseLocation.then(function(l) {console.log(l)
// //buildURL(l);
//     return l;
// });

// function buildURL(l) {
//     let latitude = l.coords.latitude;
//     let longitude = l.coords.longitude;
//  let url = baseUrl + "&latitude=" + latitude + "&longitude=" + longitude + "&maxradiuskm=100";
// console.log(url); 
 
// return getJSON(url);
// }

let quake = new QuakesController('#quakeList');
quake.init();
