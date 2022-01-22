"use strict";
(function () {
  var $ = function (id) {
    return document.getElementById(id);
  };

  var addToTaskList = function () {
    var taskTextbox = $("task");
    var newTask = new myapp.Task(taskTextbox.value);
    if (newTask.isValid()) {
      myapp.tasklist.add(newTask).save().display();
      taskTextbox.value = "";
    } else {
      alert("Please enter a task.");
    }
    taskTextbox.focus();
  };

  var clearTaskList = function () {
    myapp.tasklist.clear();
    $("task").focus();
  };

  var deleteFromTaskList = function () {
    myapp.tasklist.delete(this.title).save().display(); // 'this' = clicked link
    $("task").focus();
  };

  window.onload = function () {
    $("add_task").onclick = addToTaskList;
    $("clear_tasks").onclick = clearTaskList;

    myapp.tasklist.displayDiv = $("tasks");
    myapp.tasklist.deleteClickHandler = deleteFromTaskList;

    myapp.tasklist.load().display();
    $("task").focus();
  };
})();