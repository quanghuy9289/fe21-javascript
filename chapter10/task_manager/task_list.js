"use strict";

var $ = function (id) {
    return document.getElementById(id);
}

var tasks = [];

var displayTaskList = function() {
    if (tasks.length === 0) {
        tasks = getStorage('tasks_key');
    }

    displaySortedTaskList(tasks, $('tasks'), deleteFromTaskList)

    $('task').focus();
}

var addToTaskList = function() {
    var task = $('task').value;
    if (task === "") {
        alert("Please enter a task.");
    } else {
        tasks.push(task);
        setStorage('tasks_key', tasks);

    $('task').value = "";
    displayTaskList();   
    }
}

var deleteFromTaskList = function() {
    deleteTask(tasks, this.id);
    setStorage("tasks_key", tasks);
    displayTaskList();
}

var clearTaskList = function() {
    tasks.length = 0;
    clearStorage("tasks_key");
    $('tasks').innerHTML = "";
    $('task').focus();
}

window.onload = function () {
    $('add_task').onclick = addToTaskList;
    $('clear_tasks').onclick = clearTaskList;
    displayTaskList();
}