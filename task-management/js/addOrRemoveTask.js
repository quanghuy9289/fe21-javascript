"use strict";
const $ = (id) => document.getElementById(id);

let taskList = [];
const LOCAL_STORAGE = "taskList";

const addNewTasks = () => {
  let value = $("task").value.trim();
  if (!value) {
    alert("Please enter a task");
  } else {
    taskList.push(value);
    showTaskList(taskList, delElement);
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(taskList));
    //clean value after click button addNewTasks
    $("task").value = "";
  }
};

const clearTasks = () => {
  taskList = [];
  showTaskList();
  localStorage.clear(LOCAL_STORAGE);
};

const delElement = (index) => {
  taskList.splice(index.target.id, 1);
  showTaskList(taskList, delElement);
  localStorage.setItem(LOCAL_STORAGE, JSON.stringify(taskList));
};

window.onload = () => {
  $("add_task").onclick = addNewTasks;
  $("clear_tasks").onclick = clearTasks;
  let data = JSON.parse(localStorage.getItem(LOCAL_STORAGE));
  if (data) {
    taskList = data;
  } else {
    taskList = [];
  }
  showTaskList(taskList, delElement);
};
