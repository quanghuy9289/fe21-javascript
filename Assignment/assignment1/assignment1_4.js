"use strict";
var a = parseInt(prompt("nhap a"),0);
var b = parseInt(prompt("nhap b"),0);
var c = parseInt(prompt("nhap c"),0);
var x,x1,x2,delta;
(function bac2(a,b,c){
    if(a==0){
        if(b==0){
            if(c==0){
            alert("phương trình vô số nghiệm")
            }
            else{
                alert("phương trình vô nghiệm")
            }
        }
        else{
            var x = (-c/b).toFixed(2);
            alert("phương trình có nghiệm duy nhất: x = " + x)
        }
    }
    else{
        var delta = (b*b) - (4*a*c);
        if(delta<0){
            alert("phương trình vô nghiệm")
        }
        else if(delta==0){
            x1 = x2 = (-b/(2*a)).toFixed(2);
            alert("phương trình có nghiệm kép x1 = x2" + x1);
        }
        else{
            x1 = ((-b + Math.sqrt(delta)) / (2*a)).toFixed(2);
            x2 = ((-b - Math.sqrt(delta)) / (2*a)).toFixed(2);
            alert("phương trình có 2 nghiệm phân biệt x1 = " + x1 + "\nx2 = " + x2);
        }
    }
    return;
})(a,b,c)
// bac2(a,b,c);
