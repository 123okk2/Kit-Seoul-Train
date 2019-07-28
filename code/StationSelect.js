module.exports.function = function stationSelect (toStation, desStation) {
  const stationFilter = require('./utils/stationName.js');
  var http = require('http');
  var config = require('config');
  var console = require('console');
  
  
  var forApiToStation = toStation[toStation.length-1] == '역' ? 
      forApiToStation = toStation.substr(0, toStation.length-1) : toStation;
  var forApiDesStation = desStation[desStation.length-1] == '역' ?
      forApiDesStation = desStation.substr(0, desStation.length-1) : desStation;
  
  
  let toRecogList = stationFilter(forApiToStation);
  let desRecogList = stationFilter(forApiDesStation);
    
  if (toRecogList.length == 0 || desRecogList.length == 0)
    throw new NotFoundException();
  
  return {
    toList : toRecogList,
    desList : desRecogList
  }
}
