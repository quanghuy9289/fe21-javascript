"use strict";
var $ = function(id) { return document.getElementById(id); };

var tasks = [];
var sortDirection = "ASC";

var displayTaskList = function() {
    var list = "";
    // if there are no tasks in tasks array, check storage
    if (tasks.length === 0) {
        // get tasks from storage or empty string if nothing in storage
        var storage = localStorage.getItem("tasks") || "";

        // if not empty, convert to array and store in global tasks variable
        if (storage.length > 0) { tasks = storage.split("|"); }
    }
    
    // if there are tasks in array, sort and create tasks string
    if (tasks.length > 0) {
        if(sortDirection === "ASC"){
            tasks.sort();
        }else{tasks.reverse();}
    }
    list = tasks.join("\n");
    // display tasks string and set focus on task text box
    $("task_list").value = list;
    $("task").focus();
}

var addToTaskList = function() {   
    var task = $("task");
    if (task.value === "") {
        alert("Please enter a task.");
    } else {  
        // add task to array and local storage
        tasks.push(task.value);
        localStorage.tasks = tasks.join("|");

        // clear task text box and re-display tasks
        task.value = "";
        displayTaskList();
    }
}

var clearTaskList = function() {
    tasks.length = 0;
    localStorage.tasks = "";
    $("task_list").value = "";
    $("task").focus();
}

var deleteTask = function() {
    var index = 0;
    if ($("task_list").value === "") {
        alert("Please enter a task.");        
    }
    else if (index < tasks.length) {
        tasks.splice(index, 1);
        localStorage.tasks = tasks.join("|");
    }
    displayTaskList();
}

var toggleSort = function() {
    if(sortDirection === "ASC"){
        sortDirection = "DESC";
    }
    else if(sortDirection === "DESC"){
        sortDirection = "ASC";
    }
    displayTaskList();
}

var setName = function() {
    var name = prompt("please enter a name");
    if (name === "") {
        alert("Please enter employee's name");
      }
    sessionStorage.name = name;
    displayTaskList();
}

window.onload = function() {
    $("add_task").onclick = addToTaskList;
    $("clear_tasks").onclick = clearTaskList;   
    $("delete_task").onclick = deleteTask;
    $("toggle_sort").onclick = toggleSort;
    $("set_name").onclick = setName;
    displayTaskList();
}