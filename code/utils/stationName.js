module.exports = function station(input, tag){
  const dicFile = require("../data/dictStation.js");
  const word = String(input);
  var res = new Array;
  
  dicFile.forEach(function(item){
    var keywords = item.keyword;
    var flag = false;
        
    keywords.some(function(key) {
      let trigger = key.indexOf(word) != -1;
      
      if (trigger){
        if (tag == 'to')
          res.push( { to : item.name, toLine : item.line});
        else
          res.push( { des : item.name, desLine : item.line});
      }
         
      return trigger;    
    });
  });
  
  return res;
}
