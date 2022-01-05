"use strict";
var $ = function (id) {
    return document.getElementById(id);
}
var compuProcessing = function () {

    // do {
    var math = parseFloat($("math").value);
    var physics = parseFloat($("physics").value);
    var chemistry = parseFloat($("chemistry").value);
    // } while (valiInput(math) && valiInput(physics) && valiInput(chemistry));

    if (isNaN(math) || isNaN(physics) || isNaN(chemistry)) {
        alert("Please do not leave the input field blank!!");
    } else if (valiInput(math) && valiInput(physics) && valiInput(chemistry)) {
        var score = calculate(math, physics, chemistry).toFixed(2);
        score = parseFloat(score);
        $("avaScore").value = score;
        if (score >= 8) {
            $("rank").value = "A";
            return rank;
        } else if (score > 6.5) {
            $("rank").value = "B";
        } else if (score > 5) {
            $("rank").value = "C";
        } else if (score < 5) {
            $("rank").value = "D";
        } else {
            var unvalid = "Enter value into invalid!";
            return unvalid;
        }
    } else {
        alert("Score only from 1 to 10 !");
    }
};

var calculate = function (math, physics, chemistry) {
    var averageScore = (math + physics + chemistry) / 3;
    return parseFloat(averageScore);
};

var valiInput = function (score) {
    if (score < 0 || score > 10) {
        return false;
    } else {
        return true;
    }
};
window.onload = function () {
    $("calculate").onclick = compuProcessing;
    $("math").focus();
}