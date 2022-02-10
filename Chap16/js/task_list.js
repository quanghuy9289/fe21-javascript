"use strict";
var $ = function (id) {
  return document.getElementById(id);
};
var addToTaskList = function () {
  var dateTextbox = $("date");
  var taskTextbox = $("task");
  var newTask = new Task(dateTextbox.value, taskTextbox.value);
  if (newTask.taskValid() && newTask.dateValid()) {
    tasklist.add(newTask).save().load().display();
  } else {
    if (newTask.taskValid()) {
      alert("Please enter a date");
    } else if (newTask.dateValid()) {
      alert("Please enter a task");
    } else {
      alert("Please enter a task and a date");
    }
  }
  taskTextbox.focus();
};
var deleteFromTaskList = function () {
  tasklist.delete(this.title).save().display();
  $("task").focus();
};
var clearTaskList = function () {
  tasklist.clear();
  $("task").focus();
};
window.onload = function () {
  $("add_task").onclick = addToTaskList;
  $("clear_tasks").onclick = clearTaskList;
  tasklist.displayDiv = $("tasks");
  tasklist.deleteClickHandler = deleteFromTaskList;
  tasklist.load().display();
  $("task").focus();
};
