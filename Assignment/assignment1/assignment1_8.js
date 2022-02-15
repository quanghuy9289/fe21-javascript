var calculateDayofMonth = function(month) {
    return new Date(2022, month, 0).getDate();
};
var displayNumberDay = function(month) {
    switch (month) {
        case 1:
            document.write("number of days in month 1 of the current year is " + calculateDayofMonth(1))
            break;
        case 2:
            document.write("number of days in month 2 of the current year is " + calculateDayofMonth(2))
            break;
        case 3:
            document.write("number of days in month 3 of the current year is " + calculateDayofMonth(3))
            break;
        case 4:
            document.write("number of days in month 4 of the current year is " + calculateDayofMonth(4))
            break;
        case 5:
            document.write("number of days in month 5 of the current year is " + calculateDayofMonth(5))
            break;
        case 6:
            document.write("number of days in month 6 of the current year is " + calculateDayofMonth(6))
            break;
        case 7:
            document.write("number of days in month 7 of the current year is " + calculateDayofMonth(7))
            break;
        case 8:
            document.write("number of days in month 8 of the current year is " + calculateDayofMonth(8))
            break;
        case 9:
            document.write("number of days in month 9 of the current year is " + calculateDayofMonth(9))
            break;
        case 10:
            document.write("number of days in month 10 of the current year is " + calculateDayofMonth(10))
            break;
        case 11:
            document.write("number of days in month 11 of the current year is " + calculateDayofMonth(11))
            break;
        case 12:
            document.write("number of days in month 12 of the current year is " + calculateDayofMonth(12))
            break;
        default:
            break;
    }
}
var input = parseInt(prompt("Enter a number n from 1 to 12"));
(input > 12 || input < 1) ? alert("Enter a number n from 1 to 12") : (displayNumberDay(input));
    
