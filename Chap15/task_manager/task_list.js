"use strict";
(function () {
  const $ = function (id) {
    return document.getElementById(id);
  };
  const addToTaskList = function () {
    const taskTextbox = $("task");
    const newTask = new Task(taskTextbox.value);
    if (newTask.isValid()) {
      tasklist.add(newTask).save().display();
      taskTextbox.value = "";
    } else {
      alert("Please enter a task.");
    }
    taskTextbox.focus();
  };

  const clearTaskList = function () {
    tasklist.clear();
    $("task").focus();
  };

  const deleteFromTaskList = function () {
    tasklist.delete(this.title).save().display(); // 'this' = clicked link
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
})(); //IIFE
