var $ = function(id) {
  return document.getElementById(id);
}

var addTask = function() {
  var taskTextbox = $('task');
  var newTask = new Task(task.value);
  if(newTask.isValid()) {
    taskList.add(newTask);
    taskList.save();
    taskList.display();
    taskTextbox.value = "";
  }else {
    alert('Please enter a task')
  }
  taskTextbox.focus();
}

var editTasklist = function() {
  var newText = prompt('Enter your new task to edit');
  if(newText) {
    taskList.edit(taskList.tasks, this.title, newText);
    taskList.save();
    taskList.display();
    $('task').focus;
  }else{
    alert('The text must be valid');
  }
}

var clearTask = function() {
  taskList.clear();
  $('task').focus;
}

var deleteTaskList = function() {
  taskList.delete(tasks, this.id);
  taskList.save();
  taskList.display();
}

window.onload = function() {
  $('add_task').onclick = addTask;
  $('clear_tasks').onclick = clearTask;

  taskList.displayDiv = $('tasks');
  taskList.editClickHandler = editTasklist;
  taskList.deleteClickHandler = deleteTaskList;
  taskList.load();
  taskList.display();
  $('task').focus();
}