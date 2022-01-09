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
        if (futureValue == Infinity) {
            alert("Future value = Infinity \n" + "i = 5342");
            break;
        }
    }
    futureValue = futureValue.toFixed(2);
    return futureValue;
};

var processEntries = function() {
    var investment = getRandomNumber(50000);
    var rate = getRandomNumber(15);
    var years = getRandomNumber(50);
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
		$("future_value").value	= formatFV(calculateFV(investment,rate,years));
	}
    
}

var formatFV = function (futureValue) {
    var string = "";
    var string = futureValue;
    var integer;
    var decimal;
    integer = string.slice(0, string.indexOf("."));
    decimal = string.slice(string.indexOf("."));
    var len = integer.length;
    var formattedNumber = "";
    if (len < 3) {
        formattedNumber = "$" + integer + decimal;
    } else if (len < 7) {
        formattedNumber = "$" + integer.slice(0,-3)  + ","+ integer.slice( -3) + decimal;
    } else if (len < 10) {
        formattedNumber = "$" + integer.slice(0,-6)+ "," + integer.slice(-6,-3) + "," + integer.slice( -3) + decimal;
    }
    return formattedNumber;

}
 var getDate = function () {
     var text = new Date();
     var day = text.getDate();
     var month = text.getMonth();
     var years = text.getFullYear();
     var hours = text.getHours();
     var minutes = text.getMinutes();
     var message = $("date");

     var message = "Today is "+ day + "/" + month + "/" + years + " at " + hours + ":" + minutes + ".";
     return message;
 }

window.onload = function() {
    document.getElementById("date").innerHTML = getDate() ;
    $("calculate").onclick = processEntries;
    $("investment").focus();
}