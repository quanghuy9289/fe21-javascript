"use strict";
var $ = function (id) {
  return document.getElementById(id);
};
var addToTaskList = function () {
  var taskTextbox = $("task");
  var newTask = new Task(taskTextbox.value);
  if (newTask.isValid()) {
    tasklist.add(newTask).save().display();
    taskTextbox.value = "";
  } else {
    alert("Please enter a task");
  }
  taskTextbox.focus();
};
var clearTaskList = function () {
  tasklist.clear();
  $("task").focus();
};
var deleteFromTaskList = function () {
  tasklist.delete(this.title).save().display();
  $("task").focus();
};
var editFromTaskList = function () {
  var newTask = prompt(
    "Your old task is: " +
      tasklist.tasks[this.title] +
      "\nPlease enter your new task"
  );
  var newTaskEdit = new Task(newTask);
  if (newTaskEdit.isValid() && newTask !== null) {
    tasklist.edit(this.title, newTaskEdit).save().display();
  }
  $("task").focus();
};
window.onload = function () {
  $("add_task").onclick = addToTaskList;
  $("clear_tasks").onclick = clearTaskList;
  tasklist.displayDiv = $("tasks");
  tasklist.deleteClickHandler = deleteFromTaskList;
  tasklist.editClickHandler = editFromTaskList;
  tasklist.load().display();
  $("task").focus();
};
