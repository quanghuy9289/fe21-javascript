"use strict";
var Task = function (task, date) {
  this.text = task;
  this.date = new Date(date);
};
Task.prototype.isValid = function () {
  if (this.text === "") {
    return false;
  }
  var dt = new Date(this.date);
  if (dt === "" || dt.toString() === "Invalid Date") {
    return false;
  }
  return true;
};
Task.prototype.toJSON = function () {
  var m = this.date.getMonth() + 1;
  var d = this.date.getDate();
  var y = this.date.getFullYear();

  this.shortDate = m + "/" + d + "/" + y;
  this.text = this.text.capitalize();
  return this;
};