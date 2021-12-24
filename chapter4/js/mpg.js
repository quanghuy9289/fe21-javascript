"use strict";
var $ = function (id) {
    return document.getElementById(id);
}
function calculateMpg(miles, gallons) {
    var mpg = (miles / gallons);
    mpg = mpg.toFixed(1);
    return mpg;
}
var clearEntries = function(){
    $("miles").value="";
    $("gallons").value=""; 
    $("mpg").value="";
    $("miles_error").firstChild.nodeValue = "*";
    $("gallons_error").firstChild.nodeValue = "*";
}
function handlerCalculate() {
    var miles = parseFloat($("miles").value);
    var gallons = parseFloat($("gallons").value);
//   validate
    if(isNaN(miles))
    {
        $("miles_error").firstChild.nodeValue = "Miles must be numeric";
    }
    else if(miles <= 0){
        $("miles_error").firstChild.nodeValue = "Miles must be greater than zero"
    }
    else if(isNaN(gallons)){
        $("gallons_error").firstChild.nodeValue = "Gallons must be numeric";
    }
    else if(gallons <= 0){
        $("gallons_error").firstChild.nodeValue = "Gallons must be greater than zero"
    }
    else{
        $("miles_error").firstChild.nodeValue = "";
        $("gallons_error").firstChild.nodeValue = "";
        $("mpg").value = calculateMpg(miles,gallons);
    }
}
window.onload = function(){
    $("calculate").onclick = handlerCalculate;
    $("clear_entries").onclick = clearEntries;
    $("miles").ondblclick = clearEntries;
    $("miles").focus();
}