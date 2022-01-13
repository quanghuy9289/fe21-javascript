"use strict"

var $ = function (id) {
    return document.getElementById(id);
}

var quaEquaProcessing = function () {

    var varA = parseFloat($("varA").value);
    var varB = parseFloat($("varB").value);
    var varC = parseFloat($("varC").value);

    if (isNaN(varA) || isNaN(varB) || isNaN(varC)) {
        alert("please do not leave the input field blank !!");
    }
    calculateQuaEqua(varA, varB, varC);

}
var calculateQuaEqua = function (a, b, c) {
    var x1, x2;
    var delta = Math.pow(b, 2) - 4 * a * c;
    if (a == 0) {
        if (b == 0) {
            $("x").value = "The equation has no solution.";
        } else {
            $("x").value = "The equation has a solution:" + (-c / b).toFixed(2);
        }
    }

    if (delta > 0) {// a = 1 ; b = 3 ; c = 1
        x1 = (-b + Math.sqrt(delta) / (2 * a));
        x2 = (-b - Math.sqrt(delta) / (2 * a));
        $("x").value = "The equation has 2 solutions: x1= " + x1.toFixed(2) + " and x2= " + x2.toFixed(2);
    } else if (delta == 0) {// a = 1 ; b = 2 ; c = 1
        x1 = (-b / (2 * a));
        $("x").value = "The equation with a double solution is:" + x1.toFixed(2);
    } else {// a = 1 ; b = 2 ; c = 3
        $("x").value = "The equation has no solution.";
    }
}

window.onload = function () {
    $("calculate").onclick = quaEquaProcessing;
    $("varA").focus();
}