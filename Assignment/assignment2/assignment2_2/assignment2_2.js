
var m,n,array;
function setup() {
    alert("Add a 2 dimensional array to start program");
    m = parseInt(prompt("Please enter a number"));
    n = parseInt(prompt("Please enter b number"));
    if(isNaN(m) || isNaN(n) || m <= 0 || n <= 0) {
        alert("Please enter a number invalid");
    }
    //create array
    array = new Array(n);
    for (var i = 0; i < array.length; i++) {
        array[i] = new Array(m);
    }
    for (let i = 0; i < n; i++) {
       for (var j = 0; j < m; j++) {
           array[i][j] = parseInt(prompt("Please enter a number in array[" + i + "][" + j + "]"));
       }
    }
}
var showMenu = function() {
    do {
        var menu = "Enter a number of function to run it:\n\n";
        menu += "1. Declare a 2 dimension array with n rows and m column.\n";
        menu += "2. Print array.\n";
        menu += "3. Calculate the total of elements of array.\n";
        menu += "4. Enter a number and then check it is exist in array or not.\n";
        menu += "5. sort the elements of this array by ascending.\n";
        menu += "6. Exit application.\n\n";
        var input = parseInt(prompt("Please enter 1 number"));
        if(isNaN(input) || input < 0 || input > 5) {
            alert("Please enter a number valid");
        }
        else{
            switch (input) {
                case 1: 
                    setup();
                    break;
                case 2:
                    printArray();
                    break;
                case 3:
                    calculateTotal();
                    break;
                case 4:
                    checkExist();
                    break;
                case 5:
                    sortElements();
                    break;                      
                default:
                    break;
            }
        }
    } while (input!==6);
}
var printArray = function() {
    var arr = "";
    for (let index = 0; index < n; index++) {
        arr += array[index].join(", ");
        arr += "\n";
    }
    alert("The array you entered is: \n" + arr);
}
var calculateTotal = function() {
    var sum = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            sum += array[i][j]
        }
    }
    alert("Sum of array is: " + sum);
}
var sortElements = function() {
    var sortArr = "";
    var sortSub = function(a,b) {
        return a-b;
    }
    for (let i = 0; i < n; i++) {
        sortArr += array[i].sort(sortSub).join(" ");
        sortArr += "\n";
    }
    alert("The sorted array is \n" + sortArr)
}

var checkExist = function() {
    var num = parseInt(prompt("Please enter a number you want to find."));
    if(isNaN(num))
    {
        alert("Please enter a number valid")
    }
    else{
        for (let i = 0; i < n;i++){
            if(array[i].indexOf(num) > -1){
                alert(num + " is exist in array")
            }
            else{
                alert(num + " is not exist in array")
            }
        }
    }
}

window.onload = function() {
    showMenu();
}