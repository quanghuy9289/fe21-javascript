var a = parseFloat(prompt("nhap a = "),0);
var b = parseFloat(prompt("nhap b = "),0);
function calculate(a,b) {
    x = (-b/a).toFixed(2);
    return x;
}
document.write("x = " + calculate(a,b));