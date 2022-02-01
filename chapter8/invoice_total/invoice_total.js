'use strict';
var $ = function (id) {
    return document.getElementById(id);
};


var calculateDiscountPercent = function(customerType,invoiceSubtotal) {
    var discountPercent = 0;
    if (customerType == 'regular') {
        if (invoiceSubtotal < 100) {
            discountPercent = .0;
        } else if (invoiceSubtotal < 250) {
            discountPercent = .1;
        } else if (invoiceSubtotal < 500) {
            discountPercent = .25;
        } else if (invoiceSubtotal >= 500) {
            discountPercent = .3;
        }
    } else if (customerType == 'loyalty') {
        discountPercent = .3;
    } else if (customerType == 'honored') {
        if (invoiceSubtotal < 500) {
            discountPercent = .4;
        } else if (invoiceSubtotal >= 500) {
            discountPercent = .5;
        }
    }
    return discountPercent;
};

var processEntries = function () {
    var discountAmount;
    var invoiceTotal;
    var discountPercent;

    var customerType = $('type').value;
    var invoiceSubtotal = parseFloat($('subtotal').value);
    invoiceSubtotal = (isNaN(invoiceSubtotal) || invoiceSubtotal <=0 ) ? alert('Vui lòng nhập số >0!') : invoiceSubtotal;
    $('subtotal').value = invoiceSubtotal.toFixed(2);

    discountPercent = calculateDiscountPercent(customerType,invoiceSubtotal);

    discountAmount = invoiceSubtotal * discountPercent;

    var invoiceTotal = invoiceSubtotal - discountAmount;

    $('percent').value = (discountPercent * 100).toFixed(2);
    $('amount').value = discountAmount.toFixed(2);
    $('total').value = invoiceTotal.toFixed(2);
};

window.onload = function () {
    $('calculate').onclick = processEntries;
    $('type').focus();
};