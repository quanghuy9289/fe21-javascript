var $ = document.querySelector.bind(document);

var validate = function() {
    var email = $('#email_address').value;
    var phone = $('#phone_address').value;
    var country = $('#country').value;
    var service = $('#service').checked;
    var isValid = true

    if(email == '') {
        $('#error_email').innerHTML = 'This field is required.'
        isValid = false
    }else {
        $("#error_email").innerHTML = "";
    }if(phone == '') {
        $('#error_phone').innerHTML = 'This field is required.'
        isValid = false
    }else{
        $("#error_email").innerHTML = "";
    }if(country == 'country') {
        $('#error_country').innerHTML = 'Please select a country.'
        isValid = false
    }else{
        $("#error_country").innerHTML = "";
    }if(service == false) {
        $('#error_sevice').innerHTML = 'This box must be checked.'
    }else {
        $('#error_sevice').innerHTML = '';
    }
    if(isValid == true) {
        $('#registration_form').submit();
    }
}

var resetForm = function() {
    $('#email_address').value = '';
    $('#phone_address').value = '';
    $('#country').value = 'country';
    $('#service').checked = false;
    $('#comment').value = '';
}

window.onload = function() {
    $('#register').onclick = validate;
    $('#reset').onclick = resetForm;
    $('#email_address').focus();
}