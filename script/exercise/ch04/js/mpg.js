var $ = document.querySelector.bind(document);

var processEntry = function() {
var miles = parseFloat($('#miles').value);
var gallon = parseFloat($('#gallon').value);

if(isNaN(miles) || miles <= 0) {
    $('#check1').firstChild.nodeValue = '* Miles must be number';
}else if(isNaN(gallon) || gallon <= 0) {
    $('#check2').firstChild.nodeValue = '* Gallon must be greater than zero';
    
}else {
    caculate(miles, gallon)
}
}

var clearEntry = function() {
    $('#miles').value = '';
    $('#gallon').value = '';
    $('#total').value = '';
    $('#check1').firstChild.nodeValue = '';
    $('#check2').firstChild.nodeValue = '';
    $('#miles').focus();
}

var caculate = function(miles, gallon) {
    var mpg = miles / gallon;
    mpg.toFixed(1);
    $('#total').value = mpg;
}
window.onload = function() {
    $('#caculate').onclick = processEntry;
    $('#clear').onclick = clearEntry;
    $('#miles').focus();
}


