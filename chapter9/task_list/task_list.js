'use strict';

var $ = function(id) {
    return document.getElementById(id);
}

var tasks = [];
// var sortDirection = 'ASC';

var displayTaskList = function() {
    var list = '';

    if (tasks.length === 0) {
        var storage = localStorage.getItem('tasks') || '';

        if (storage.length > 0) {
            tasks = storage.split('|');
        }
    }

    if (tasks.length > 0) {
        tasks.sort();
        list = tasks.join('\n');
    }

    $('task_list').value = list;
    $('task').focus();
}

var addToTaskList = function() {
    var task = $('task');
    if (task.value === '') {
        alert('Please enter a task.');
    } else {
        tasks.push(task.value);
        localStorage.tasks = tasks.join("|");

        tasks.value ="";
        displayTaskList();
    }
}

var clearTaskList = function() {
    tasks.length = 0;
    localStorage.tasks = "";
    $('task_list').value = "";
    $('task').focus();

}

window.onload = function () {
    $('add_task').onclick = addToTaskList;
    $('clear_tasks').onclick = clearTaskList;
    displayTaskList();
}
