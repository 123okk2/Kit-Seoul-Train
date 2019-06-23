module.exports.function = function runAPI (station) {
  const stationFilter = require('./utils/stationName.js');
  var http = require('http');
  var config = require('config');
  var console = require('console');
  
  var encodedTo = encodeURI( station.toList.to );
  var encodedDes = encodeURI ( station.desList.des );
  
  var url = "http://swopenapi.seoul.go.kr/api/subway/sample/json/realtimeStationArrival/0/5/" + encodedTo; 
  
  var response = http.getUrl(url);
    
  var mainJson = JSON.parse(response);
  
  if (mainJson.hasOwnProperty('errorMessage'))
    mainJson = mainJson.errorMessage;
  
  var runTime = parseInt(mainJson.status);

  return {
    to : toStation,
    des : desStation,
    result : runTime
  }
}
