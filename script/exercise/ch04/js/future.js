var $ = document.querySelector.bind(document);


var processEntries = function() {
    var investment = parseFloat($('#investment').value);
    var rate = parseFloat($('#annual').value);
    var year = parseFloat($('#year').value);

    if(isNaN(investment)){
        $('#check1').innerHTML = 'Investment must be numeric'
    }else if(investment <= 0 || investment > 100000) {
        $('#check1').innerHTML = 'Investment must be greater than 0 or equal to 100000'
    }else {
        $("#check1").innerHTML = "";
        if(isNaN(rate)) {
            $('#check2').innerHTML = 'Rate must be numeric'
        }else if(rate <= 0 || rate > 15) {
            $('#check2').innerHTML = 'Rate must be greater than 0 or equal to 15'
        }else {
            $("#check2").innerHTML = "";
            if(isNaN(year)) {
                $('#check3').innerHTML = 'Year must be numeric'
            }else if(year <= 0 || year > 50) {
                $('#check3').innerHTML = 'Year must be greater than 0 or equal to 50'
            }else {
                $('#check3').innerHTML = "";
                $('#futureValue').value = calCulFV(investment, rate, year);
            }
        }
    }
}

var calCulFV = function(investment, rate, year) { 
    var futureValue = investment;
    for (var i=1; i <= year; i++) {
        var interest = investment*(rate / 100);
        investment += interest;
        futureValue = investment;
    }
    futureValue = futureValue.toFixed(2);
    return futureValue;
}

var clearEntry = function() {
    $('#investment').value = '';
    $('#annual').value = '';
    $('#year').value = '';
    $('#futureValue').value = '';
    $('#check1').innerHTML = '';
    $('#check2').innerHTML = '';
    $('#check3').innerHTML = '';
    $('#investment').focus();
}
window.onload = function() {
    $('#caculate').onclick = processEntries;
    $('#clear').onclick = clearEntry;
    $('#investment').focus();
    
}

