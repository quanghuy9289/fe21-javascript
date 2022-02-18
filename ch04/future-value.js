var $ = function (id) {
  return document.getElementById(id);
};
var processEntries = function () {
  var investment = parseFloat($("investment").value);
  var rate = parseFloat($("annual_rate").value);
  var years = parseInt($("years").value);
  var isValid = true;

  if (
    isNaN(investment) ||
    investment <= 0 ||
    isNaN(rate) ||
    rate <= 0 ||
    isNaN(years) ||
    years <= 0
  ) {
    alert("Please enter valid entries");
  } else {
    $("future_value").value = calculate(investment, rate, years).toFixed(2);
  }
  if (investment == 0 || investment >= 100000) {
    $("investment_error").firstChild.nodeValue =
      "This field must be greater than 0 and less than 100000.";
    $("future_value").value = "";
  }
  if (rate == 0 || rate >= 15) {
    $("rate_error").firstChild.nodeValue =
      "This field must be greater than 0 and less than 15.";
    $("future_value").value = "";
  }
  if (years == 0 || years >= 50) {
    $("years_error").firstChild.nodeValue =
      "This field must be greater than 0 and less than 50.";
    $("future_value").value = "";
  }
};

var calculate = function (investment, rate, years) {
  var futureValue = investment;
  for (var i = 1; i <= years; i++) {
    futureValue = futureValue + (futureValue * rate) / 100;
  }
  return parseInt(futureValue);
};

window.onload = function () {
  $("calculate").onclick = processEntries;
  $("investment").focus();
};
