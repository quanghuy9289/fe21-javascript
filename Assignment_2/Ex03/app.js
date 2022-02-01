"use strict";

var $ = function(id) {
    return document.getElementById(id);
}

var userNameArr = []

var processEntries = function () {
    var userName = $('user_name').value;
    userNameArr.push(userName );
    
    userNameArr.sort();
    displayUserNameArr();
    $('user_name').value = "";
    $('user_name').focus();
}

var displayUserNameArr = function () {
    $('name_list').value = userNameArr;
}

var clearUserNameArr = function () {
    userNameArr.length = 0;
    $('name_list').value = "";
    $('user_name').value = "";
}


window.onload = function () {
    $('calculate').onclick = processEntries;
    $('clear').onclick = clearUserNameArr;
    $('user_name').focus();
}