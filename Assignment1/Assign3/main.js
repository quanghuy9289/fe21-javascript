"use strict"

var $ = function (id) {
    return document.getElementById(id);
}

var simEquaProcessing = function () {

    var varA = parseFloat($("varA").value);
    var varB = parseFloat($("varB").value);

    if (isNaN(varA) || isNaN(varB)) {
        alert("please do not leave the input field blank !!");
    }
    calculate(varA, varB);

}
var calculate = function (a, b) {
    if (a == 0) {
        if (b == 0) {
            $("x").value = "The equation has infinitely many solutions";
        } else {// b != 0
            $("x").value = "The equation has no solution";
        }
    } else {
        var x;
        $("x").value = (-b / a).toFixed(2);
    }
}

window.onload = function () {
    $("calculate").onclick = simEquaProcessing;
    $("varA").focus();
}