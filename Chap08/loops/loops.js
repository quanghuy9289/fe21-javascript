"use strict";
var $ = function (id) {
  return document.getElementById(id);
};
var isPrime = function (number) {
  var isPrime = true;
  for (var i = 2; i < number; i++) {
    if (number % i === 0) isPrime = false;
  }
  return isPrime;
};
var determinePrime = function () {
  var number = $("number").value;
  var count = 0;
  var numbersPrime = "";
  for (var i = 2; i <= number; i++) {
    if (isPrime(i) === true) {
      count++;
      numbersPrime += i + "  ";
    }
  }
  $("count").value = count;
  $("prime-numbers").value = numbersPrime;
};
window.onload = function () {
  $("calculate").onclick = determinePrime;
};
