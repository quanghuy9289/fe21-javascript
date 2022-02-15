"use strict";
var arr = [2,4,12,-3,32,-14,34,101,200,15];
var $ = function(id) {
    return document.getElementById(id);
}
function print() {
    return arr.join(', ');
}
function find() {
    var number = parseInt(prompt("Enter a number you want find in array"));
    if(isNaN(number)) {
        alert("Please enter a number")
    }
    else{
        if(arr.indexOf(number) > -1) {
            return number + " is exists in array";
        }
        else{
            return number + " isn't exists in array"
        }
    }
}
function findMax() {
    var max = arr[0];
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] > max) {
            max = arr[index];
        }
    }
    return "maximum number is " + max;
}
function sumOfArray() {
    var sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }
    return "Sum of all number in array is " + sum;
}
function Sort() {
    return arr.sort(function(a,b) {return b-a}).join(", ");
}
function select() {
    var selected = $('select').value;
    switch (selected) {
        case "1":
            $("display").value = print();
            break;
        case "2":
            $("display").value = find();
            break;
        case "3":
            $("display").value = findMax();
            break;
        case "4":
            $("display").value = sumOfArray();
            break;
        case "5":
            $("display").value = Sort();
            break;
        default:
            break;
    }
}
window.onload = function() {
    $("run").onclick = select;
}