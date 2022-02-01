"use strict";
var $ = function(id) {
    return document.getElementById(id);
}

var addToTaskList = function() {
    var taskTextBox = $("task");
    var newTask = new Task(taskTextBox.value);
    if (newTask.isValid()) {
        tasklist.add(newTask);
        tasklist.save();
        tasklist.display();
        taskTextBox.value = "";
    } else {
        alert("Please enter a task.");
    }
    taskTextBox.focus();
};

var clearTaskList = function() {
    tasklist.clear();
    $("task").focus();
};

var deleteFromTaskList = function() {
    tasklist.delete(this.title);
    tasklist.save();
    tasklist.display();
    $("task").focus();
};

window.onload = function() {
    $("add_task").onclick = addToTaskList;
    $("clear_tasks").onclick = clearTaskList;

    tasklist.displayDiv = $("tasks");
    tasklist.deleteClickHandler = deleteFromTaskList;

    tasklist.load();
    tasklist.display();

    $("task").focus();
};