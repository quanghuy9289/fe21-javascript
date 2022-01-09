var $ = function(id) { return document.getElementById(id); };

var getRandomNumber = function(max) {
    var random;
    if (!isNaN(max)) {
        random = Math.random(); //value >= 0.0 and < 1.0
        random = Math.floor(random * max); //value is an integer between 0 and max - 1
        random = random + 1; //value is an integer between 1 and max
    }
    return random;
};

// average rolls for a 6
var averageRolls = function() {
	var total = 0;
	var count = 0;
	var max = -Infinity;
	var rolls;
	
	for (count; count < 10000; count++) {
		rolls = 0;
		do {
			rolls++;
		} while (getRandomNumber(6) !== 6);
		total += rolls;
		if (rolls > max) max = rolls;
	}
	var average = total / count;
	alert ("Average rolls: " + average.toFixed(0) + "\n\nMax rolls: " + max);
};

// display factors
var displayFactors = function() {
	var number = $("number").value;
	var factors = "";
	for ( var i = 1; i < number; i++ ) {
		if ( number % i === 0 ) {
			factors +=  i + " ";
		}
	}
	alert("Factors of ".concat(number, ": ", factors));
};

// determine if a number is prime
var determineIfPrime = function () {
	var number = $("number").value;
	var prime = isPrime(number);
	var message;
	if (prime) {
		message = number + " is prime.";
	} else {
		message = number + " is not prime.";
	}
	alert(message);
};
  
var isPrime = function (number) {
	var prime = true;
	for (var i = 2; i < number; i++) {
	  if (number % i == 0) {
		prime = false;
		break;
	  }
	}
	return prime;
};

var getPrimeNumbers = function () {
	var number = $("number").value;
	var count = 0;
	var display = "";
	for (var i = 2; i <= number; i++) {
	  if (isPrime(i)) {
		display += i + " ";
		count++;
	  }
	}
	$("count").value = count;
	$("primes").value = display;
};

var processEntries = function() {
	displayFactors();
	getPrimeNumbers();
};

window.onload = function() {
	$("calculate").onclick = processEntries;
	$("number").focus();
};