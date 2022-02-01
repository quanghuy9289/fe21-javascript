var $ = function(id) {
    return document.getElementById(id);
};

var calculateMpg = function() {
    console.log('calculateMpg function has started');
    var miles = parseFloat($('miles').value);
    var gallons = parseFloat($('gallons').value);
    console.log('miles = ' + miles);
    console.log('gallons = ' + gallons);

    if (isNaN(miles) || isNaN(gallons)) {
        $('error_message').firstChild.nodeValue = 
            'Both entries must be numeric.';
    } else if (miles < 0 || gallons < 0) {
        $('error_message').firstChild.nodeValue =
            'Positive numbers.';
    } else {
        $('error_message').firstChild.nodeValue = '';
        console.log('The data is valid and the calculation is next');
        var mpg = miles / gallons;
        console.log('mpg = ' + mpg);
        $('mpg').value = mpg.toFixed(1);
    }

};

window.onload = function() {
    $('calculate').onclick = calculateMpg;
    $('miles').focus();
};