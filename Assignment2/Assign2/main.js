var twoDimeArrays = [];
var arrayLength, arrayWidth;
function inputArray() {
    arrayLength = parseInt(prompt("Enter array length: "));
    if (isNaN(arrayLength)) {
        alert("Please enter a number!!");
    } else if (arrayLength == "") {
        alert("Please do not leave it blank");
    }
    arrayWidth = parseInt(prompt("Enter array width: "));
    if (isNaN(arrayWidth)) {
        alert("Please enter a number!!");
    } else if (arrayWidth == "") {
        alert("Please do not leave it blank");
    }
    for (var i = 0; i < arrayLength; i++) {
        twoDimeArrays.push([]) // i element of array is a empty array
        for (var j = 0; j < arrayWidth; j++) {
            twoDimeArrays[i][j] = parseInt(prompt("Enter column " + j + " of row " + i));
        }
    }
}
function outputArray() {
    var strU = "2 dimensional array after import: <br>";
    for (var i = 0; i < arrayLength; i++) {
        for (var j = 0; j < arrayWidth; j++) {
            strU += twoDimeArrays[i][j] + " ";
        }
        strU += "<br>";
    }
    document.write(strU);
}
function sumOfElementsInArray() {
    var sum = 0;
    for (var i = 0; i < arrayLength; i++) {
        for (var j = 0; j < arrayWidth; j++) {
            sum += twoDimeArrays[i][j];
        }
    }
    document.write("<br>Sum of elements in array is:" + sum);
}

function findANumberInArray() {
    var n = parseInt(prompt("Enter a number you want to find: "));
    if (isNaN(n)) {
        alert("Please enter a number!!");
    } else if (n == "") {
        alert("Please do not leave it blank");
    }
    var check = 0;
    for (var i = 0; i < arrayLength; i++) {
        for (var j = 0; j < arrayWidth; j++) {
            if (n == twoDimeArrays[i][j]) {
                check++;
                document.write("<br>Number " + n + " is in array, stands at " + (j + 1) + "nd place, row " + (i + 1)); break;
            }
        }
    }
    if (check == 0) {
        document.write("<br>Can't find " + n + " in array");
    }
}
function sortArrayAsc() {
    twoDimeArrays.sort((a, b) => a[1] - b[1]);
    var strU = "<br>Array after sorting: <br>";
    for (var i = 0; i < arrayLength; i++) {
        for (var j = 0; j < arrayWidth; j++) {
            strU += twoDimeArrays[i][j] + " ";
        }
        strU += "<br>";
    }
    document.write(strU);
}

inputArray();
var choose = parseInt(prompt("Select 1 function to perform: 1- print array, 2- print sum of array, 3- find a number in array, 4- sort array."))
if (isNaN(choose)) {
    alert("Please enter a number!!");
} else if (choose == "") {
    alert("Please do not leave it blank");
} else if (choose == 1) {
    outputArray();
} else if (choose == 2) {
    sumOfElementsInArray();
} else if (choose == 3) {
    findANumberInArray();
} else if (choose == 4) {
    sortArrayAsc();

} else {
    alert("Invalid input!");
}





