var $ = function (id) {
  return document.getElementById(id);
};
var getRandomNumber = function (max) {
  return Math.floor(Math.random() * max) + 1;
};
var randomEntries = function () {
  $("investment").value = getRandomNumber(50000);
  $("rate").value = getRandomNumber(15);
  $("years").value = getRandomNumber(50);
  var investment = $("investment").value;
  investment = parseInt(investment);
  var rate = $("rate").value;
  rate = parseInt(rate);
  var years = $("years").value;
  years = parseInt(years);
  var futureValue = investment;
  for (var i = 1; i <= years; i++) {
    futureValue += futureValue * (rate / 100);
  }
  futureValue = futureValue.toFixed(2);
  $("futureValue").value = convert(futureValue);
};
var convert = function (futureValue) {
  var fvString = futureValue.toString();
  var count = fvString.indexOf(".");
  var hundred = "";
  var thousand = "";
  var million = "";
  if (count > 3) {
    hundred = "," + fvString.substr(count - 3, 3);
  } else {
    hundred = fvString.substring(0, count);
  }
  if (count > 6) {
    thousand = "," + fvString.substr(count - 6, 3);
    million = fvString.substr(0, count - 6);
  } else {
    thousand = fvString.substr(0, count - 3);
  }
  futureValue = "$" + million + thousand + hundred + fvString.substring(count);
  return futureValue;
};
var today = function () {
  var today = new Date();
  var date = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  $("today").innerHTML =
    "Today is " +
    date +
    "/" +
    month +
    "/" +
    year +
    " at " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds;
};
window.onload = function () {
  randomEntries();
  $("random").onclick = randomEntries;
  today();
  setInterval(today, 100);
};
