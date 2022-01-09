var $ = function (id) {
  return document.getElementById(id);
  };
  
  var handleJoinList = function () {
  
      var firstName = $("firstName").value;
      var lastName = $("lastName").value;
      var email = $("email").value;
      var email2 = $("email2").value;
      var country = $("country").value;
      var terms = $("terms").checked;
      var isValid = true;
  
      if (firstName == "") {
          $("firstName").nextElementSibling.firstChild.nodeValue = "This field is required";
          isValid = false;
      } else {
          $("firstName").nextElementSibling.firstChild.nodeValue = "";
      }
  
      if (lastName == "") {
          $("lastName").nextElementSibling.firstChild.nodeValue = "This field is required";
          isValid = false;
      } else {
          $("lastName").nextElementSibling.firstChild.nodeValue = "";
      }
  
  
      if (email == "") {
          $("email").nextElementSibling.firstChild.nodeValue = "This field is required";
          isValid = false;
      } else {
          $("email").nextElementSibling.firstChild.nodeValue = "";
      }
  
      if (email2 == "") {
          $("email2").nextElementSibling.firstChild.nodeValue = "This field is required";
          isValid = false;
      } else {
          if (email2 != email) {
              $("email2").nextElementSibling.firstChild.nodeValue = "Re-enter email must to match with email";
              isValid = false;
          } else {
              $("email2").nextElementSibling.firstChild.nodeValue = "";
          }
      }
  
      if (country == "") {
          $("country").nextElementSibling.firstChild.nodeValue = "This field is required";
          isValid = false;
      } else {
          $("country").nextElementSibling.firstChild.nodeValue = "";
      }
  
      if (terms == "") {
          $("terms").nextElementSibling.firstChild.nodeValue = "This field is required";
          isValid = false;
      } else {
          $("terms").nextElementSibling.firstChild.nodeValue = "";
      }
  
      if (isValid == true) {
          alert("Register successfully");
          $("register_form").submit();
      }
  };
  
  var resetForm = function(){
  
      $("firstName").nextElementSibling.firstChild.nodeValue = "*";
      $("lastName").nextElementSibling.firstChild.nodeValue = "*";
      $("email").nextElementSibling.firstChild.nodeValue = "*";
      $("email2").nextElementSibling.firstChild.nodeValue = "*";
      $("country").nextElementSibling.firstChild.nodeValue = "*";
      $("terms").nextElementSibling.firstChild.nodeValue = "*";
      $("email").focus();
  }
  
  window.onload = function () {
      $("register").onclick = handleJoinList;
      $("reset").onclick = resetForm;
  };