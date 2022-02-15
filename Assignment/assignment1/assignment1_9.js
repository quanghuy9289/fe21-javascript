var a = parseInt(prompt("Enter a",0));
var b = parseInt(prompt("Enter b",0));
function  greatestCommonDivisor(a,b) {
    if (a == 0 || b == 0){
        return a + b;
    }
    while (a != b){
        if (a > b){
            a -= b; 
        }else{
            b -= a;
        }
    }
    return a;
}
document.write("greatestCommonDivisor (" + a +"," + b + ") = " + greatestCommonDivisor(a,b));