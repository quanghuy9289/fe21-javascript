"use strict";
var sortTaskList = function (tasks) {
    var isArray = Array.isArray(tasks);
    if (isArray) {
        tasks.sort();
    }
    return isArray;
};

var displaySortedTaskList = function (tasks, div, deleteHandler, editHandler) {
    var html = "";
    var isArray = sortTaskList(tasks);

    if (isArray) {
        //create and load html string from sorted array
        for (var i in tasks) {
            html = html.concat("<p>");
            html = html.concat("<a href='#' id='", i, "'>Delete</a>");
            html = html.concat("<a href='#' title='", i, "'>Edit</a>");//create edit link and add attribute title(3)
            html = html.concat(tasks[i]);
            html = html.concat("</p>");
        }
        div.innerHTML = html;

        // get links, loop and add onclick event handler
        var links = div.getElementsByTagName("a");
        for (var i = 0; i < links.length; i++) {
            if (links[i].innerHTML === "Edit") {//can't catch this condition
                links[i].onclick = editHandler;

            } else {
                links[i].onclick = deleteHandler;
            }
        }
    }
};

var deleteTask = function (tasks, i) {
    var isArray = sortTaskList(tasks);
    if (isArray) { tasks.splice(i, 1); }
};

var editTask = function (tasks, i, newText) {// three parameters
    var isArray = Array.isArray(tasks); //(5) check array
    if (isArray) {
        tasks[i] = newText;//(5) set value to array
    }
};

var capitalizeTask = function (task) {
    var first = task.substring(0, 1);
    return first.toUpperCase() + task.substring(1);
};