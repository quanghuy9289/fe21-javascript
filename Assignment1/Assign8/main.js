
var n = parseInt(prompt("Enter a month of the year: "));
var numberOfDay;
var currentYear = new Date().getFullYear();
if (isNaN(n)) {
    alert("Month mus be a number!");
} else if (n == "") {
    alert("Please enter a number of year!");
} else if (n <= 0 || n > 12) {
    alert("Month must less than 12 and greater than 0!");
}

switch (n) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12: numberOfDay = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11: numberOfDay = 30;
        break;
    case 2:
        if (((currentYear % 4 == 0) && (currentYear % 100 != 0)) || (currentYear % 400 == 0)) {
            numberOfDay = 29;
        } else {
            numberOfDay = 28;
        }
}
document.write("The number of days in month  " + n + " " + currentYear + " is " + numberOfDay + " days");