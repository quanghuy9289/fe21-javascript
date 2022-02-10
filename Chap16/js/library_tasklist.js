"use strict";
var tasklist = {
  tasks: [],
  storage: getTaskStorage("tasks"),
  displayDiv: null,
  deleteClickHandler: null,
  load: function () {
    tasklist.tasks = this.storage.get();
    return this;
  },
  save: function () {
    this.storage.set(this.tasks);
    return this;
  },
  sort: function () {
    // this.tasks.sort();
    // return this;
    var text = function (a, b) {
      return a.task > b.task ? 1 : -1;
    };
    var arr = function (x, y) {
      return new Date(x.date) - new Date(y.date);
    };
    this.tasks.sort(text);
    this.tasks.sort(arr);
    return this;
  },
  add: function (task) {
    this.tasks.push(task.toJSON());
    return this;
  },
  delete: function (i) {
    this.sort();
    this.tasks.splice(i, 1);
    return this;
  },
  clear: function () {
    this.tasks.length = 0;
    this.storage.clear();
    this.displayDiv.innerHTML = "";
    return this;
  },
  display: function () {
    var html = "";
    this.sort();
    for (var i in this.tasks) {
      html = html.concat("<p>");
      html = html.concat("<a href='#'><i class='fas fa-trash'></i>Delete</a>");
      html = html.concat(this.tasks[i].date, " ");
      html = html.concat(this.tasks[i].task);
      html = html.concat("</p>");
    }
    this.displayDiv.innerHTML = html;
    var links = this.displayDiv.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
      links[i].onclick = this.deleteClickHandler;
    }
    return this;
  },
};
