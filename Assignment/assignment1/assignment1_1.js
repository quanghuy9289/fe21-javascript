var a = 1;
var b = 2;
var c;
if(isNaN(a) || isNaN(b)){
    alert("a or b not a number");
}
else {
    if( a!=b ){
        c = a;
        a = b;
        b = c;
    }
    else{
        alert("a and b are equal")
    }
}

document.write("a = " + a + ", b =" + b);