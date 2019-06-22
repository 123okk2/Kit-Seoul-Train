module.exports.function = function runAPI (toStation, desStation) {
  var http = require('http');
  var config = require('config');
  var console = require('console');
  
  var forApiToStation = toStation[toStation.length-1] == '역' ? 
      forApiToStation = toStation.substr(0, toStation.length-1) : toStation;
  var forApiDesStation = desStation[desStation.length-1] == '역' ?
      forApiDesStation = desStation.substr(0, desStation.length-1) : desStation;
  
  var encodedTo = encodeURI( forApiToStation );
  var encodedDes = encodeURI ( forApiDesStation );
  
  var url = "http://swopenapi.seoul.go.kr/api/subway/sample/json/realtimeStationArrival/0/5/" + encodedTo; 
  
  var response = http.getUrl(url);
    
  var mainJson = JSON.parse(response);
  
  if (mainJson.hasOwnProperty('errorMessage'))
    mainJson = mainJson.errorMessage;
  
  var runTime = parseInt(mainJson.status);
   
  console.log(forApiToStation, forApiDesStation);
  console.log(mainJson);
  
  return {
    to : toStation,
    des : desStation,
    result : runTime
  }
}
