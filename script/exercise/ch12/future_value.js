var $ = function(id) {
    return document.getElementById(id);
};

var calCulFV = function(investment, rate, years) {
    var futureValue = investment;
    for (var i = 1; i <= years; i++) {
        futureValue += futureValue * (rate / 100);
    }
    futureValue = futureValue.toFixed(3);
    return futureValue;
};

var processEntries = function() {
    try{
        var investment = parseFloat($('investment').value);
        var rate = parseFloat($('annual').value);
        var year = parseFloat($('year').value);

        if (isNaN(investment)) {
            throw new Error("Investment must be numberic");
        } else if (investment <= 0) {
            throw new Error("Investment must greater than 0")
        }
        if (isNaN(rate)) {
            throw new Error("Rate must be numberic");
        } else if (rate <= 0) {
            throw new Error("Rate must greater than 0");
        }
        if (isNaN(year)) {
            throw new Error("Years must be numberic")
        } else if (year <= 0) {
            throw new Error("Years must greater than 0");
        }
        $("futureValue").value = calCulFV(investment, rate, year);
    }catch (error) {
        alert(error.message);
    }

    
}

window.onload = function() {
    $("caculate").onclick = processEntries;
    $("investment").focus();
};