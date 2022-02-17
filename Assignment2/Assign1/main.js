"use strict";

var intNumbers = [];

function inputArray() {
    for (var i = 0; i < 10; i++) {
        intNumbers[i] = parseInt(prompt("Enter " + (i + 1) + "th elements of this array: "));
        if (isNaN(intNumbers[i])) {
            alert("Please enter a number!!");
        } else if (intNumbers[i] == "") {
            alert("Please do not leave it blank");
        }
    }
}

function outputArray() {
    var strU;
    for (var i = 0; i < intNumbers.length; i++) {
        if (intNumbers[i] !== undefined) {
            strU += intNumbers[i] + " ";
        }
    }
    document.write("The elements in array are: " + strU);
}

function findElementInArray() {
    var a = parseInt(prompt("Enter a number you want to find: "));
    var check = 0;
    for (var i = 0; i < intNumbers.length; i++) {
        if (a == intNumbers[i]) {
            document.write(a + " stands at position " + (i + 1) + " in the array");
            check++;
        }
    }
    if (check == 0) {
        document.write("can't find " + a + " in array");
    }
}

function maxNumberInArr() {
    var maxNumber;
    for (var i = 0; i < intNumbers.length; i++) {
        if (intNumbers[i] > intNumbers[i + 1]) {
            maxNumber = intNumbers[i];
        } else {
            maxNumber = intNumbers[i]
        }
    }
    document.write("<br> Max number in array is: " + maxNumber);
}

function sumAllElementInArray() {
    var sum = 0;
    for (var i = 0; i < intNumbers.length; i++) {
        sum += intNumbers[i];
    }
    document.write("<br> sum of elements in array is: " + sum);
}

function sortArrayDESC() {
    intNumbers.sort(function (a, b) { return b - a });
    document.write("Array after sorting ascending:" + intNumbers);
}

inputArray(inputArray);
var chooseFunction = parseInt(prompt("select 1 function to perform: 1- print the array, 2- print the largest number in the array, 3- sum the elements in the array, 4- sort the array in descending, 5- find a number in array."));
if (isNaN(chooseFunction)) {
    alert("Please enter a number!!");
} else if (chooseFunction == "") {
    alert("Please do not leave it blank");
} else if (chooseFunction == 1) {
    outputArray();
} else if (chooseFunction == 2) {
    maxNumberInArr();
} else if (chooseFunction == 3) {
    sumAllElementInArray();
} else if (chooseFunction == 4) {
    sortArrayDESC();
} else if (chooseFunction == 5) {
    findElementInArray()
} else {
    alert("Invalid value!");
}




