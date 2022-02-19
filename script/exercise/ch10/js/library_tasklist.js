var sortTaskList = function(tasks) {
    var isArray = Array.isArray(tasks);
    if(isArray) {
        tasks.sort();
    }
    return isArray;
}

var displaySortedTaskList = function(tasks, divEle, handler) {
    var html = "";
    var isArray = sortTaskList(tasks);
    if(isArray) {
        for(var i in tasks) {
            html = html.concat("<p>");
            html = html.concat("<a class ='delete' href='#' id='", i, "'>Delete</a>");
            html = html.concat("<a class ='edit' href='#' id='", i, "'>Edit</a>");
            html = html.concat(" " + tasks[i]);
            html = html.concat("</p>");
        }
        divEle.innerHTML = html;

        var links = document.getElementsByClassName('delete');
        for(var i = 0; i < links.length; i++) {
            links[i].onclick = handler;
        }
        var links = document.getElementsByClassName('edit');
        for(var i = 0; i < links.length; i++) {
            links[i].onclick = handler;
        }
    }
}

var deleteTaskList = function(tasks, i) {
    var isArray = sortTaskList(tasks);
    if(isArray) {
        tasks.splice(i, 1);
    }
}

var editTaskList = function(tasks, i) {
    var isArray = sortTaskList(tasks);
    var newText = prompt('Enter your new task to edit');
    if(isArray && newText !== null && newText.length > 0){
        tasks.splice(i, 1, capitalizeTask(tasks))
    }
}

var capitalizeTask = function(task) {
    var first = task.substring(0, 1);
    return first.toUpperCase() + task.substring(1);
}