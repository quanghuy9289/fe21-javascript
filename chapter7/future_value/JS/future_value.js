var $ = function(id) {
    return document.getElementById(id);
}

var getRandomNumber = function(max) {
    var random;
    if (!isNaN(max)) {
        random = Math.random();
        random = Math.floor(random * max);
        random = random + 1;
    }
    return random;
}

function getDate() {
    var currentDate = new Date();

    var month = currentDate.getMonth() + 1;
    month = (month<10) ? '0' + month : month;
    var day = currentDate.getDate();
    day = (day<10) ? '0' + day : day;
    var year = currentDate.getFullYear();
    var dateString = "Today is " + day + '/' + month + '/' + year + ' at';
    
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    dateString += " " + hours + ':' + minutes;
    return dateString;
    
}

var calculateFV = function(investment,rate,years) {
    var futureValue = investment;
    for (var i = 1; i <= years; i++) {
        futureValue += (futureValue *rate / 100);
        if (futureValue == Infinity) {
            alert ('future Value = ' + futureValue + '\n i = ' + i);
            i = years;
        }
    }
    futureValue = futureValue.toFixed(2);
    return futureValue;
}

var processEntries = function() {

    var futureValue;
    var investment = getRandomNumber(5000);
    $('investment').value = investment;
    var rate = getRandomNumber(15);
    $('annual_rate').value = rate;
    var years = getRandomNumber(50);
    $('years').value = years;

    futureValue = calculateFV(investment,rate,years);
    $('future_value').value = futureValue;
}

window.onload = function() {
    $('calculate').onclick = processEntries;
    $('date').firstChild.nodeValue = getDate();
    $('investment').focus();
}