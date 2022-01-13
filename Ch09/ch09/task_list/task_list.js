"use strict";
var $ = function (id) { return document.getElementById(id); };

var tasks = [];
var sortDirection = "ASC";
var taskName;

var displayTaskList = function () {
    var list = "";
    var name = "";
    // if there are no tasks in tasks array, check storage
    if (tasks.length === 0) {
        // get tasks from storage or empty string if nothing in storage
        var storage = localStorage.getItem("tasks") || "";

        // if not empty, convert to array and store in global tasks variable
        if (storage.length > 0) { tasks = storage.split("|"); }
    }

    // if there are tasks in array, sort and create tasks string
    if (tasks.length > 0) {
        // tasks.sort();
        if (sortDirection == "ASC") {
            tasks.sort();
        } else {
            tasks.sort().reverse();
        }
        list = tasks.join("\n");
    }

    if (taskName != "") {
        var sStorage = sessionStorage.getItem("taskName") || ""; // goi sessionStorage với tên taskName
        name = sStorage + "'s ";// nối chuỗi 
    } else {
        name = "";
    }
    // display tasks string and set focus on task text box
    $("name").firstChild.nodeValue = name;
    $("task_list").value = list;
    $("task").focus();
}

var addToTaskList = function () {
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

var clearTaskList = function () {
    tasks.length = 0;
    localStorage.tasks = "";
    $("task_list").value = "";
    $("task").focus();
}

var deleteTask = function () {

    var deleteIndex = prompt("Enter index number to delete: ");
    if (isNaN(deleteIndex) || deleteIndex > tasks.length) {
        alert("Please enter number and number must be less " + tasks.length);
    } else {
        deleteIndex = parseInt(deleteIndex);
        tasks.splice(deleteIndex, 1);
        localStorage.tasks = tasks.join("|");
        displayTaskList();
    }
}

var toggleSort = function () {
    if (sortDirection == "ASC") {// thay đổi kiểu sort khi bấm nút sort
        sortDirection = "DESC";
    } else {
        sortDirection = "ASC";
    }
    displayTaskList();
}

var setName = function () {
    taskName = prompt("Input name of task");
    sessionStorage.taskName = taskName;// đẩy taskName và ssessionStorage
    displayTaskList();
}

var filterTasks = function () { //(12) I don't understand the assignment requirements
    var filtered = [];
    console.log(typeof (filtered));
    for (var i = 0; i < tasks.length; i++) {
        if (importantTask(tasks[i]) == true) {
            filtered.push(tasks[i]);
        }
    }
    var list = "";
    list = filtered.join("\n");// join method don't word -> should just show  one element to see result 
    $("task_list").value = list;
};

// chuyển important thành lower và kiểm tra có phải important khum
var importantTask = function (element) {
    var lower = element.toLowerCase();
    if (lower.indexOf("important!") == 0) {// dùng indexof để kiểm tra có phần tử important trong chuỗi không/ kiểm tra inportant ở vị trí 0 trong chuổi
        return true;
    }
    return false;
}
window.onload = function () {
    $("add_task").onclick = addToTaskList;
    $("clear_tasks").onclick = clearTaskList;
    $("delete_task").onclick = deleteTask;
    $("toggle_sort").onclick = toggleSort;
    $("set_name").onclick = setName;
    $("filter_tasks").onclick = filterTasks;
    displayTaskList();
}