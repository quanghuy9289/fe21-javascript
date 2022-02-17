"use strict";
var n = parseInt(prompt("Enter a number"));

for (var i = 1; i <= n; ++i) {
    for (var j = 1; j <= i; ++j) {
        document.write("* ");
    }
    document.write("<br>");
}
