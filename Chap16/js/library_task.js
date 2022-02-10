"use strict";
// var Task = function(task) {
//     this.text = task;
// }
// Task.prototype.isValid = function() {
//     if (this.text === "") {
//         return false;
//     } else {
//         return true;
//     }
// }
// Task.prototype.toString = function() {
//     return this.text.capitalize();
// }

var Task = function (date, task) {
  this.date = date;
  this.task = task;
};
Task.prototype.taskValid = function () {
  return this.task === "" ? false : true;
};
Task.prototype.dateValid = function () {
  return this.date === "" ? false : true;
};
Task.prototype.toJSON = function () {
  var date = new Date($("date").value);
  var m = date.getMonth() + 1;
  var d = date.getDate();
  var y = date.getFullYear();
  var first = this.task.substring(0, 1).toUpperCase();
  var remain = this.task.substring(1);
  return {
    date: m + "-" + d + "-" + y,
    task: first + remain,
  };
};
