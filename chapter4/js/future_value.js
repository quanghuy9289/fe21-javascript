"use strict";
var $ = function(id){
    return document.getElementById(id)
}

function calculateFV(investment_amount,interest_rate,number_year){
    var future_value = investment_amount;
    for(var i=1;i<=number_year;i++){
        future_value += ((future_value * interest_rate) /100);
    }
    future_value = future_value.toFixed(2);
    return future_value;
}
var processEntries = function(){
    var investment_amount = parseFloat($("investment").value);
    var interest_rate = parseFloat($("annual_rate").value);
    var number_year = parseFloat($("years").value);
    var isValid = true;
    // validate total invesment
    if(isNaN(investment_amount)){
        $("investment_error").firstChild.nodeValue = "This field must be a valid number";
        isValid = false;
    }
    else if(investment_amount <= 0 || investment_amount > 100000){
        $("investment_error").firstChild.nodeValue = "The investment must be greater than 0 and smaller than or equal 100000";
        isValid = false;
    }
    else{
        $("investment_error").firstChild.nodeValue = "";
    }
    // validate interest rate
    if(isNaN(interest_rate)){
        $("rate_error").firstChild.nodeValue = "This field must be a valid number";
        isValid = false;
    }
    else if(interest_rate <= 0 || interest_rate > 15){
        $("rate_error").firstChild.nodeValue = "The investment must be greater than 0 and smaller than or equal 15";
        isValid = false;
    }
    else{
        $("rate_error").firstChild.nodeValue = "";
    }
    // validate year number
    if(isNaN(number_year)){
        $("years_error").firstChild.nodeValue = "This field must be a valid number";
        isValid = false;
    }
    else if(number_year <= 0 || number_year > 50){
        $("years_error").firstChild.nodeValue = "The investment must be greater than 1 and smaller than or equal 50";
        isValid = false;
    }
    else{
        $("years_error").firstChild.nodeValue = "";
    }
    if(isValid){
        $("future_value").value = calculateFV(investment_amount, interest_rate, number_year)
    }
}
window.onload = function(){
    $("calculate").onclick = processEntries;
    $("investment").focus();
}
