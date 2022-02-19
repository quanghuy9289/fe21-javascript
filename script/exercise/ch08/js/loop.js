var $ = document.querySelector.bind(document);

var getRandomNumber = function(max) {
    var random;
    if (!isNaN(max)) {
        random = Math.random(); 
        random = Math.floor(random * max);
        random = random + 1; 
    }
    return random;
};


var averageRolls = function() {
	var total = 0;
	var count = 0;
	var max = -Infinity;
	var rolls;
	
	while ( count < 10000 ) {
		rolls = 1;
		while ( getRandomNumber(6) !== 6 ) {
			rolls++;
		}
		total += rolls;
		count++;
		if ( rolls > max ) max = rolls;
	}
	var average = total / count;
	alert ("Average rolls: " + average.toFixed(0) + "\n\nMax rolls: " + max);
}

var displayFactors = function() {
	var number = $("#number").value;
	var factors = "";
	for ( var i = 1; i < number; i++ ) {
		if ( number % i === 0 ) {
			factors +=  i + " ";
		}
	}
	alert("Factors of ".concat(number, ": ", factors));
}

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


var determineIfPrime = function() {
	var number = $("#number").value;
	var prime = isPrime(number);
	var message;
	for ( var i = 2; i < number; i++ ) {
		if ( number % i === 0 ) prime = false;
	}
	if (prime) {
	    message = number + " is prime.";
	} else {
	    message = number + " is not prime.";
	}
	alert(message);
}

var getPrimeNumbers = function () {
	var number = $("#number").value;
	var count = 0;
	var display = "";
	for (var i = 2; i <= number; i++) {
	  if (isPrime(i)) {
		display += i + " ";
		count++;
	  }
	}
	$("#count").value = count;
	$("#primes").value = display;
};


var processEntries = function() {
	
	displayFactors();
	getPrimeNumbers();
}

window.onload = function() {
	$("#calculate").onclick = processEntries;
	$("#number").focus();
};