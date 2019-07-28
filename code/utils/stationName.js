module.exports = function station(input){
  const dicFile = require("../data/dictStation.js");
  const word = String(input);
  var res = new Array;
  
  dicFile.forEach(function(item){
    var keywords = item.keyword;
    var flag = false;
        
    keywords.some(function(key) {
      let trigger = key.indexOf(word) != -1;
      
      if (trigger)
          res.push( item.name);
         
      return trigger;    
    });
  });
  
  return res;
}
