module.exports.function = function runAPI (station) {
  const stationFilter = require('./utils/stationName.js');
  var http = require('http');
  var config = require('config');
  var console = require('console');
  
  console.log(typeof(station.toList.to));
  
  var encodedTo = encodeURI( String(station.toList.to[0]) );
  var encodedDes = encodeURI ( String(station.desList.des[0]) );
  
  var url = "http://swopenapi.seoul.go.kr/api/subway/sample/json/realtimeStationArrival/0/5/" + encodedTo; 
  
  var response = http.getUrl(url);
    
  var mainJson = JSON.parse(response);
  
  if (mainJson.hasOwnProperty('errorMessage'))
    mainJson = mainJson.errorMessage;
  
  var runTime = parseInt(mainJson.status);

  console.log(station.toList.to[0], station.toList.des[0])
  
  return {
    to : station.toList.to[0],
    des : station.desList.des[0],
    result : runTime
  }
}
