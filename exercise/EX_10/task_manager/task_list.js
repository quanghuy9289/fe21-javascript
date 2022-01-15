"use strict";
var $ = function(id) { return document.getElementById(id); }

var tasks= []

var displayTaskList = function() {
    // get task from storage
    if(tasks.length === 0){
        tasks = getStorage("tasks_10");
    }   

    //display sorted task with delete links
    displaySortedTaskList(tasks, $("tasks"), deleteFromTaskList);

    // set focus on task text box
    $("task").focus();
 
}

var addToTaskList = function(){
    var task = $("task");
    if(task.value===""){
        alert("Please enter a task");

    } else {
        // add task to array and local storage
        tasks.push(capitalizeTask(task.value));
        setStorage("tasks_10", tasks);
        localStorage.tasks = tasks.join("|");

        //clear task text box and re-display tasks
        task.value = "";
        displayTaskList();
 
    }
}

var deleteFromTaskList = function(){
    deleteTask(tasks, this.id); 
    setStorage("tasks_10", tasks);
    displayTaskList();
}

var clearTaskList = function(){
    tasks.length = 0;
    clearStorage("tasks_10");
     
    $("tasks").innerHTML ="";
    $("task").focus();
}
window.onload = function() {
    $("add_task").onclick = addToTaskList;
    $("clear_tasks").onclick = clearTaskList;
    displayTaskList();
}