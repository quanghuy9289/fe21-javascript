"use strict";
var $ = function (id) {
	return document.getElementById(id);
};

try {
	calculateFV = function (investment, rate, years) {
		futureValue = investment;
		for (var i = 1; i <= years; i++) {
			futureValue += futureValue * rate / 100;
		}
		futureValue = futureValue.toFixed(2);
		throw new RangeError("Error in Future Value calculation");
		return futureValue;
	};
} catch (error) {
	// alert(error);
}


var processEntries = function () {
	var investment = parseFloat($("investment").value);
	var rate = parseFloat($("annual_rate").value);
	var years = parseInt($("years").value);
	var allValid = true;

	if (isNaN(investment)) {
		$("investment_error").firstChild.nodeValue = "Must be number";
		allValid = false;
	}
	else {
		$("investment_error").firstChild.nodeValue = "";
	}
	if (isNaN(rate)) {
		$("rate_error").firstChild.nodeValue = "Must be number";
		allValid = false;
	}
	else {
		$("rate_error").firstChild.nodeValue = "";
	}
	if (isNaN(years)) {
		$("years_error").firstChild.nodeValue = "Must be number";
		allValid = false;
	}
	else {
		$("years_error").firstChild.nodeValue = "";
	}
	if (allValid) {
		try {
			$("future_value").value = calculateFV(investment, rate, years);
		} catch (error) {
			alert(error);
		}
	}
};

window.onload = function () {
	$("calculate").onclick = processEntries;
	$("investment").focus();
};