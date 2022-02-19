var $ = document.querySelector.bind(document);

var tasks = [];
var sortDerection = 'ASC';

var displayTaskList = function() {
    var list = '';
    if(tasks.length === 0) {
        var store = localStorage.tasks || '';
        if(store.length > 0) {
            tasks = store.split('|');
        }
    }
    if(tasks.length > 0) {
        tasks.sort();
        list = tasks.join('\n');
    }

    if(tasks.length > 0) {
        if(sortDerection === 'ASC') {
            tasks.sort();
        }else {
            tasks.sort();
            tasks.reverse();
        }
        list = tasks.join('\n');
    }

    var name = sessionStorage.name || "";
    if (name != "") {
        $("#name").innerHTML = name;      
    }

        
    $("#task_list").value = list;
    $("#task").focus();
}

var addtasks = function() {
    var task = $('#task').value;

    if(task === '') {
        alert('Please enter a task')
    }else {
        tasks.push(task);
        localStorage.tasks = tasks.join('|');
    }
    $('#task').value = '';
    displayTaskList();
}

var clearTask = function() {
    tasks.length = 0;
    localStorage.removeItem('tasks');
    $("#task_list").value = "";
    $("#task").focus();
}

var deleteTask = function() {
    var index = parseFloat(prompt('What is the index number of the task to delete?', '0'))
    if(!isNaN(index) && index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        localStorage.tasks = tasks.join('|');
        displayTaskList();
    }
}

var toggleSort = function() {
    if(sortDerection === 'ASC'){
        sortDerection = 'DESC';
    }else if(sortDerection === 'DESC') {
        sortDerection = 'ASC';
    }
    displayTaskList();
}

var setName = function() {
    var name = prompt('Give us a name', 'Name');
    if(name === ''){
        alert("Please enter a name!");
        return;
    }
    sessionStorage.name = name;
    displayTaskList();
}

var importantTask = function(e){
    var lower = e.toLowerCase();
    var index = lower.indexOf("important!");
    e = (index !== -1) ? true : false;
    return e;
}

var filterTasks = function() {
    var filtered = tasks.filter(importantTask);
    $('#task_list').value = filtered.join('\n');
}

window.onload = function() {
    $('#add_task').onclick = addtasks;
    $('#clear_tasks').onclick = clearTask;
    $('#delete_task').onclick = deleteTask;
    $('#toggle_task').onclick = toggleSort;
    $('#set_name').onclick = setName;
    $('#fillter_task').onclick = filterTasks;
    displayTaskList();
}