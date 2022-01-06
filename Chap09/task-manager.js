"use strict";
var $ = function (id) {
  return document.getElementById(id);
};
var tasks = [];
var sortDirection = "ASC";
var displayTaskList = function () {
  var list = "";
  if (tasks.length === 0) {
    var storage = localStorage.getItem("tasks") || "";
    if (storage.length > 0) tasks = storage.split("|");
  }
  if (tasks.length > 0) {
    sortDirection === "ASC" ? tasks.sort() : tasks.reverse();
    // tasks.sort();
    list = tasks.join("\n");
  }
  var session = sessionStorage.getItem("Name");
  $("name").firstChild.nodeValue =
    session === null || session === "" ? "Tasks" : session + "'s Tasks";
  $("taskList").value = list;
  $("task").focus();
};
var addTaskList = function () {
  var task = $("task");
  if (task.value === "") alert("Please enter a task");
  else {
    tasks.push(task.value);
    localStorage.tasks = tasks.join("|");
    task.value = "";
    displayTaskList();
  }
};
var clearTaskList = function () {
  tasks.length = 0;
  localStorage.tasks = "";
  $("taskList").value = "";
  $("task").focus();
};
var deleteTask = function () {
  var deleteIndex = prompt("What the index number of the task to delete ?");
  if (!isNaN(deleteIndex) && deleteIndex >= 0) {
    tasks.splice(deleteIndex, 1);
    localStorage.tasks = tasks.join("|");
    displayTaskList();
  }
};
var toggleSort = function () {
  sortDirection = sortDirection === "ASC" ? "DESC" : "ASC";
  displayTaskList();
};
var setName = function () {
  var nameTask = prompt("What is your name ?");
  sessionStorage.setItem("Name", nameTask);
  displayTaskList();
};
var importantTasks = function (element) {
  var lower = element.toLowerCase();
  var index = lower.indexOf("important!");
  element = index !== -1 ? true : false;
  return element;
};
var filterTasks = function () {
  var filtered = tasks.filter(importantTasks);
  $("taskList").value = filtered.join("\n");
};
window.onload = function () {
  $("addTask").onclick = addTaskList;
  $("clearTasks").onclick = clearTaskList;
  $("deleteTask").onclick = deleteTask;
  $("toggleSort").onclick = toggleSort;
  $("setName").onclick = setName;
  $("filterTasks").onclick = filterTasks;
  displayTaskList();
};
