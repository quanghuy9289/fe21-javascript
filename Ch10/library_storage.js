"use strict";
var getStorage = function (key) {
    //get string from storage or an empty string if nothing in storage
    var storage = localStorage.getItem(key) || "";// get  localStorage assign to storage
    if (storage === "") { //check empty storage
        return [];
    } else {
        return storage.split("|");// storage.split("|") to -> change a string to a array with  elements are seperated by vertical sign
    }
};

var setStorage = function (key, arr) {
    if (Array.isArray(arr)) {//check is array
        var storageString = arr.join("|");// change array to a string with elements are separated by vertical sign between elements
        localStorage.setItem(key, storageString);//set localStorage
    }
};

var clearStorage = function (key) {
    localStorage.setItem(key, "");
};