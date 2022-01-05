"use strict";
var $ = function (id) { return document.getElementById(id); };

var getRandomNumber = function (max) {
	var random;
	if (!isNaN(max)) {
		random = Math.random(); //value >= 0.0 and < 1.0
		random = Math.floor(random * max); //value is an integer between 0 and max - 1
		random = random + 1; //value is an integer between 1 and max
	}
	return random;
};

// average rolls for a 6
var averageRolls = function () {
	var total = 0;
	var count = 0;
	var max = -Infinity;
	var rolls;

	for (; count < 10000; count++) {
		rolls = 1;
		do {
			rolls++;
		} while (getRandomNumber(6) !== 6);
		total += rolls;
		if (rolls > max) max = rolls;
	}
	var average = total / count;
	alert("Average rolls: " + average.toFixed(0) + "\n\nMax rolls: " + max);
}

// display factors
var displayFactors = function () {
	var number = $("number").value;
	var factors = "";
	for (var i = 1; i < number; i++) {
		if (number % i === 0) {
			factors += i + " ";
		}
	}
	alert("Factors of ".concat(number, ": ", factors));
}

// determine if a number is prime
var determineIfPrime = function () {
	var number = $("number").value;
	var message;
	isPrime(number);
	if (isPrime(number) == 0) {
		message = number + " is not prime.";
	} else {
		message = number + " is prime.";
	}
	// alert(message);
	// $("primes").value = message;
}

var isPrime = function (number) {
	var prime = true;
	for (var i = 2; i < number; i++) {
		if (number % i === 0) {
			prime = false
		} else {
			break;
		}
	}
	return (prime) ? number : 0;
}
var processEntries = function () {
	// averageRolls();
	getPrimeNumbers();
	displayFactors();
	determineIfPrime();
}

var getPrimeNumbers = function () {
	var number = $("number").value;
	var primeStr = "";
	var count = 0;
	for (var i = 0; i < number; i++) {
		if (isPrime(i)) {
			primeStr += i + " ";
			count++;
		}
	}
	$("count").value = count;
	$("primes").value = primeStr;
	console.log(primeStr);
}
window.onload = function () {
	$("calculate").onclick = processEntries;
	$("number").focus();
};
