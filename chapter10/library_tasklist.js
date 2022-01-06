"use strict";
var sortTaskList = function(tasks) {
    var isArray = Array.isArray(tasks);
    if (isArray) {
        tasks.sort();
    }
    return isArray;
};

var displaySortedTaskList = function(tasks, div, deleteHandler,editHandler) {
    var html = "";
    var isArray = sortTaskList(tasks);
    
    if (isArray) {
        //create and load html string from sorted array
        for (var i in tasks) {
            html = html.concat("<p>");
            html = html.concat("<a href='#' id='", i, "'>Delete</a>");
            html = html.concat("<a href='#' title='", i, "'>Edit</a>");
            html = html.concat(tasks[i]);
            html = html.concat("</p>");
        }
        div.innerHTML = html;
        
        // get links, loop and add onclick event handler
        var links = div.getElementsByTagName("a");
        for (var i = 0; i < links.length; i++) {
            if(links[i].title!="") {
                links[i].onclick = editHandler;
            }
            else if(links[i].id!=""){
                links[i].onclick = deleteHandler;
            }
        }
    } 
};

var deleteTask = function() {  
    var isArray = sortTaskList.call(this,arguments[0]);
    if (isArray) { tasks.splice(arguments[1], 1); }
};

var editTask = function(tasks, i, newText) {
    /* code goes here */
    
    if(Array.isArray(tasks)) { tasks[i] = newText; }
};

var capitalizeTask = function(task) {
    var first = task.substring(0,1);
    return first.toUpperCase() + task.substring(1);
};





