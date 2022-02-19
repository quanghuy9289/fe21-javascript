var $ = function(id) {
  return document.getElementById(id);
}
var tasks = [];

var displayTaskList = function() {
  if(tasks.length === 0) {
    tasks = getStorege('task_10');
  }
    displaySortedTaskList(tasks, $('tasks'), deleteFromTaskList)
  $('task').focus();
}

var addTask = function() {
  var task = $('task');
  if(task === "") {
    alert('Please enter a task')
  }else{
    tasks.push(capitalizeTask(task.value));
    setStorage('task_10', tasks);
    displayTaskList();
  }
}

var deleteFromTaskList = function() {
  deleteTaskList(tasks, this.id);
  setStorage('task_10', tasks);
  displayTaskList();
}

var clearTask = function(){
  tasks.length = 0;
  clearStorage('task_10');
  $('tasks').innerHTML = "";
  $('task').focus();
}


window.onload = function() {
  $('add_task').onclick = addTask;
  $('clear_tasks').onclick = clearTask;
  displayTaskList();
}