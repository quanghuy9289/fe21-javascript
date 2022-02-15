// "use strict"
// //case 1
// var input = parseInt(prompt("please a number",0));
// function triangle(n) {
//     for(let i = 1; i <= n; i++)
//     {
//         for(let j = 1 ; j <= (n-i) ; j++){
//                 document.write(" ");
//              }
//              for (var j = 1; j <= i; j++) {
//                 document.write("*");
//              }
//             document.write("<br />");
//     }
// }
// triangle(input);
//case2
var $ = function(id) { return document.getElementById(id); };
function triangle(n) {
    var view = "";
    for(let i = 1; i <= n; i++)
    {
        for(let j = 1 ; j <= (n-i) ; j++){
           view += "&nbsp;&nbsp;";
        }
        for (var j = 1; j <= i; j++) {
           view += "*";
        }
       view += "<br />";
    }
    return view;
}
var processEntries = function() {
    var number = parseInt($("number").value);
    if(number > 0 & Number.isInteger(number)){
        $("view").innerHTML = triangle(number);
        $("error").innerHTML = "";
    }
    else{
        $("view").innerHTML = "";
        $("error").innerHTML = "invalid value";
    }
}
window.onload = function() {
    $("start").onclick = processEntries;
    $("number").focus();
}
