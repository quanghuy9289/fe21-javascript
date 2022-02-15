//  

function calFibonaci(n) {
   var a1 = 1;
   var a2 = 1;
   if(n==1 || n==2) return 1;
   var i = 3,a;
   document.write(a1 + "<br/>");
   document.write(a2 + "<br/>");
   while(i<=n){
       a = a1 + a2;
       a1 = a2;
       a2 = a;
       i++;
       document.write(a + "<br/>");
   } 
}
calFibonaci(6)