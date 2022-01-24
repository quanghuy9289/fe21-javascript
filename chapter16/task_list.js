"use strict";
var $ = function(id) {
    return document.getElementById(id)
}
var addToTaskList = function() {
    var taskTextBox = $("task");
       var dateTextbox = $("date");
    var newTask = new Task(taskTextBox.value,dateTextbox.value);
    if(newTask.isValid()){
        tasklist.add(newTask).save().load().display();
        taskTextBox.value = "";
        dateTextbox.value = "";
    }
    else{
        alert("Please enter a task")
    }
    taskTextBox.focus();
}
var clearTaskList = function() {
    tasklist.clear();
    $("task").focus();
}
var deleteFromTaskList = function() {
    tasklist.delete(this.title).save().display();//'this' = clicked link
    $("task").focus();
}
window.onload = function() {
    $("add_task").onclick = addToTaskList;
    $("clear_tasks").onclick = clearTaskList;

    tasklist.displayDiv = $("tasks");
    tasklist.deleteClickHandler = deleteFromTaskList;
    tasklist.load().display();
    $("task").focus();
}