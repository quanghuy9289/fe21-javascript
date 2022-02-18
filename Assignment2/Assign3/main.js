"use strict";

var userList = [];
var arrLength;

function inputArray() {
    arrLength = parseInt(prompt("Enter array length: "));
    for (var i = 0; i < arrLength; i++) {
        userList[i] = prompt("Enter " + (i + 1) + "th elements of this array: ");
        if (userList[i] == "") {
            alert("Please do not leave it blank");
        }
    }
}

function outputArray() {
    var strU;
    for (var i = 0; i < userList.length; i++) {
        if (userList[i] !== undefined) {
            strU += userList[i] + ", ";
        }
    }
    document.write("The elements in array are: " + strU);
}
function sortArrayDESC() {
    userList.sort();
    document.write("<br>Array after sorting ascending:" + userList);
}

inputArray();
outputArray();
sortArrayDESC();