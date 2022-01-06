"use strict";
var $ = function (id) {
  return document.getElementById(id);
};
var processEntries = function () {
  var header = "";
  var html = "";
  var required = "<span>Required Field</span>";
  var msg = "Please review your entries and complete all required fields";
  var email = $("email").value;
  var phone = $("phone").value;
  var country = $("country").value;
  var stateString = "";
  var states = "";
  var contact = "Text";
  var commentString = "";
  var comment = $("comment").value;

  if ($("cmbEmail").checked) {
    contact = "Email";
  }
  if ($("cmbPhone").checked) {
    contact = "Mobile phone";
  }
  if ($("dont").checked) {
    contact = "Don't contact me";
  }
  var term = $("term").checked;

  if (email == "") {
    email = required;
    header = msg;
  }
  if (phone == "") {
    phone = required;
    header = msg;
  }
  if (country == "Select an option") {
    country = required;
    header = msg;
  }
  if (country == "USA") {
    stateString = "<tr><td>States: ";
    states = $("states").value;
  }
  if (term == false) {
    term = required;
    header = msg;
  } else {
    term = "I accept";
  }
  if (comment.length != 0) {
    commentString = "<tr><td>Comment length: ";
    var commentLength = comment.length;
  } else {
    var commentLength = "";
  }
  $("registrationHeader").firstChild.nodeValue = header;
  if (header == msg) {
    html = html + "<tr><td>Email: " + email + "</td></tr>";
    html = html + "<tr><td>Phone: " + phone + "</td><tr>";
    html = html + "<tr><td>Country: " + country + "</td></tr>";
    html = html + stateString + states + "</td></tr>";
    html = html + "<tr><td>Contact me by: " + contact + "</td></tr>";
    html = html + "<tr><td>Terms: " + term + "</td></tr>";
    html = html + commentString + commentLength + "</td></tr>";
    $("registrationInfo").innerHTML = html;
  } else {
    $("registrationInfo").innerHTML = "";
    $("registrationForm").submit();
  }
};
var USAStates = function () {
  var countryValue = $("country").value;
  if (countryValue == "USA") {
    $("USA").setAttribute("class", "form-group form-inline open");
    $("states").setAttribute("name", "States");
  } else {
    $("USA").setAttribute("class", "form-group form-inline close");
  }
};
var resetForm = function () {
  $("registrationForm").reset();
  $("registrationHeader").firstChild.nodeValue = "";
  $("registrationInfo").innerHTML = "";
  $("email").focus();
};
window.onload = function () {
  $("register").onclick = processEntries;
  $("resetForm").onclick = resetForm;
  $("email").focus();
  $("country").onchange = USAStates;
};
