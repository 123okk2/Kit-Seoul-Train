module.exports = function getDayCode () {
  var day = new Date();

  return day.getDay() == 0 ? "3" : (day.getDay() == 6 ? "2" : "1");
}
