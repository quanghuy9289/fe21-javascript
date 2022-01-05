var $ = function (id) {
    return document.getElementById(id);
}
var getRandomNumber = function (max) {
    var random;
    if (!isNaN(max)) {
        random = Math.random(); //value >= 0.0 and < 1.0
        random = Math.floor(random * max); //value is an integer between 0 and max - 1
        random = random + 1; //value is an integer between 1 and max
    }
    return random;
}
var calculateFV = function (investment, rate, years) {
    var futureValue = investment;
    var i;
    for (i = 1; i <= years; i++) {
        futureValue += futureValue * rate / 100;
    }
    futureValue = futureValue.toFixed(2);
    if (futureValue == Infinity) {
        alert("i= " + i);
    }
    alert("Javascript's maximum value is: " + Number.MAX_VALUE);
    return futureValue;
}

var formatFV = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

var getDate = function () {
    const date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();

    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }

    var formatDate = "To day is " + day + "/" + month + "/" + year + " at " + hour + ":" + minute;
    return formatDate;
}

var processEntries = function () {
    // var investment = parseFloat($("investment").value);
    // var rate = parseFloat($("annual_rate").value);
    // var years = parseInt($("years").value);
    var investment = getRandomNumber(50000);
    var rate = getRandomNumber(15);
    var years = getRandomNumber(50);

    if (isNaN(investment) || investment <= 0) {
        alert("Must be > 0");
    }
    else if (isNaN(rate) || rate <= 0) {
        alert("Must be > 0");
    }
    else if (isNaN(years) || years <= 0) {
        alert("Must be > 0");
        allValid = false;
    }
    else {
        $("investment").value = investment;
        $("annual_rate").value = rate;
        $("years").value = years;
        $("future_value").value = formatFV.format(calculateFV(investment, rate, years));
    }
}

window.onload = function () {
    $("calculate").onclick = processEntries;
    $("investment").focus();
    $("date").firstChild.nodeValue = getDate();
}