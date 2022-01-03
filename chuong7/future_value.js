var $ = function(id) {
    return document.getElementById(id);
}
var getRandomNumber = function(max) {
    var random;
    if (!isNaN(max)) {
        random = Math.random(); //value >= 0.0 and < 1.0
        random = Math.floor(random * max); //value is an integer between 0 and max - 1
        random = random + 1; //value is an integer between 1 and max
    }
    return random;
}
var calculateFV = function(investment,rate,years) {
    var futureValue = investment;
    for (var i = 1; i <= years; i++ ) {
        futureValue += futureValue * rate / 100;
        if(Number.isFinite(futureValue) === false) {
            alert("Future Value = " + futureValue + "\n i = " + i);
            i = years;
        }
    }
    alert("The maximum value for a JS number is " + Number.MAX_VALUE);
    futureValue = futureValue.toFixed(2);
	return futureValue;
}

var formatFV = function(future_value){
    var point = future_value.indexOf(".");
    var cents = future_value.substring(point + 1);
    var hundreds = future_value.substring(point - 3 , point);
    var thousands = "";
    var milions = "";
    var format = "";
    if(point < 6){
        thousands = future_value.substring(0,point - 3);
        milions = "";
    }
    else{
        thousands = future_value.substring(point - 6,point - 3);
        milions = future_value.substring(0,point - 6);
    }
    if(point >= 7){
        format = "$" + milions + ","  + thousands + "," + hundreds + "." + cents;
    }
    else {
        format = "$" + thousands + "," + hundreds + "." + cents;
    }
    return format;
}
var getDate = function(){
    var current = new Date();
    var date = "Today is " + current.getDate() + "/" + (current.getMonth() + 1) + "/" + current.getFullYear() + " at " + 
    current.getHours() + ":" + (current.getMinutes() > 9 ? current.getMinutes() : "0" + current.getMinutes()) ;
    return date;
}
var processEntries = function() {
    // var investment = parseFloat( $("investment").value );
    // var rate = parseFloat( $("annual_rate").value );
    // var years = parseInt( $("years").value );
    var investment = getRandomNumber(50000);
    var rate =getRandomNumber(15);
    var years = getRandomNumber(50);
    var futureValue;
    
    $("investment").value = investment;
    $("annual_rate").value = rate;
    $("years").value = years;
    
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
        futureValue	= calculateFV(investment,rate,years);
        $("future_value").value	= formatFV(futureValue)
	}
}

window.onload = function() {
    $("calculate").onclick = processEntries;
    $("investment").focus();
    $("date").firstChild.nodeValue = getDate();
}