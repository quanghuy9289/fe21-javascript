var $ = document.querySelector.bind(document);

var getRandomNumber = function(max) {
    var random;
    if (!isNaN(max)) {
        random = Math.random(); 
        random = Math.floor(random * max); 
        random = random + 1; 
    }
    return random;
}

var calCulFV = function(investment, rate, year) { 
    var futureValue = investment;
    for (var i=1; i <= year; i++) {
        futureValue += futureValue * (rate / 100);
        if(futureValue == Infinity || i == 5342) {
            alert("The input value doesn't seem to be in reality!");
            i = year;
        }
    }
    futureValue = futureValue.toFixed(2);
    return futureValue;
}

var formatFV = function(futureValue) {
	var point = futureValue.indexOf(".");
	var cents = futureValue.substring(point + 1, point + 3);
	var hundreds = futureValue.substring(point - 3, point);
	var thousands = "";
	var millions = "";
	if (point < 6) {
		thousands = futureValue.substring(0, point - 3);
		millions = "";
	}
	else {
		thousands = futureValue.substring(point - 6, point - 3);
		millions = futureValue.substring(0, point - 6);
	}
	var formatted = "";
	if (point >= 7) {
		formatted = "$" + millions + "," + thousands + "," + hundreds + "." + cents;
	}
	else {
		formatted = "$" + thousands + "," + hundreds + "." + cents;
	}
	return formatted;
}

var getDate = function (){
	var today = new Date();

	var dateString = "Today is " 
	+ today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear()
	+ " at " + today.getHours() + ":" + today.getMinutes() + ".";
	return dateString;
}

var processEntries = function() {

    var investment = getRandomNumber(50000);
    var rate = getRandomNumber(15);
    var year = getRandomNumber(50);
    var futureValue;

	if (isNaN(investment) || investment <= 0) {
		alert("Must be > 0");
	}
	else if (isNaN(rate) || rate <= 0) {
		alert("Must be > 0");
	}
	else if (isNaN(year) || year <= 0) {
		alert("Must be > 0");
		allValid = false;
	}
	else {
		futureValue	= calCulFV(investment,rate,year);
        $("#futureValue").value = formatFV(futureValue);
	}
}

window.onload = function() {
    $("#caculate").onclick = processEntries;
    $("#investment").focus();
    $("#date").innerHTML = getDate();
}