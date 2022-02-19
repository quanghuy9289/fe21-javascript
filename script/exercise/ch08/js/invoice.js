var $ = document.querySelector.bind(document);

var calculateDiscountPercent = function (customerType, subtotal) {
    var discountPercent = 0;
    // if(customerType = "r") {
    //     if(subtotal < 100) {
    //         discountPercent = 0;
    //     }else if(subtotal > 100 && subtotal < 250) {
    //         discountPercent = 0.1;
    //     }else if(subtotal > 250 && subtotal < 500) {
    //         discountPercent = 0.25;
    //     }else if(subtotal >= 500) {
    //         discountPercent = 0.3;
    //     }
    // }else if(customerType = "l") {
    //     discountPercent = 0.3;
    // }else if(customerType = "h") {
    //     if(subtotal >= 500) {
    //         discountPercent = 0.5;
    //     }else {
    //         discountPercent = 0.4;
    //     }
    // }
    // return discountPercent;
    switch(customerType){
        case 'r':
            if(subtotal < 100) {
                discountPercent = 0;
            }else if(subtotal > 100 && subtotal < 250) {
                discountPercent = 0.1;
            }else if(subtotal > 250 && subtotal < 500) {
                discountPercent = 0.25;
            }else if(subtotal >= 500 && subtotal < 1000) {
                discountPercent = 0.3;
            }else {
                discountPercent = 0.4
            }
            break;
        case 'l':
            discountPercent = 0.3;
            break;
        case 'h':
            if(subtotal >= 500) {
                discountPercent = 0.5;
            }else {
                discountPercent = 0.4;
            }
            break;
        case 'e':
            discountPercent = 0.5;
            break;    
    }
    return discountPercent;
}

var processEntries = function () {

    var customerType = $("#type").value;
    var subtotal = $("#subtotal").value;

    var discountPercent = calculateDiscountPercent(customerType, subtotal);

    $("#percent").value = (discountPercent * 100).toFixed(1);
    $("#discount").value = (subtotal * discountPercent).toFixed(1);
    $("#total").value = (subtotal - (subtotal * discountPercent)).toFixed(1);
    $("#type").focus();
}

window.onload = function() {
    $("#calculate").onclick = processEntries;
    $("#type").focus();
}