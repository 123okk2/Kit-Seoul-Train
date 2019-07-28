module.exports = function getUpDown (st1, st2) {
  if(st1.substr(0,4) == 1002){
    if(parseInt(st1) - parseInt(st2) > 0)
      return "2"; // Cycle Line
  }
  else{
    if(parseInt(st1) - parseInt(st2) < 0)
      return "2"; // One Way Line
  }
  return "1";
}
