"use strict";
var registerForm;

window.onload = function () {
  registerForm = new RegisterForm();
  registerForm.resetForm();

  $("register").onclick = function () {
    if (registerForm.validateForm()) {
      navigate.showResults();
    }
  };

  $("reset").onclick = function () {
    registerForm.resetForm();
  };

  $("back").onclick = function () {
    navigate.showForm();
    registerForm.resetForm();
  };
};
