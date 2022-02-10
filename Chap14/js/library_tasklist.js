"use strict";
var createTaskList = function (div, handler) {
  var tasks = [];
  var storage = getStorage("tasks");
  var sort = function () {
    tasks.sort();
  };
  var getTasks = function (storageString) {
    return storageString === "" ? [] : storageString.split("|");
  };
  var setTasks = function (arr) {
    return Array.isArray(arr) ? arr.join("|") : arr;
  };
  return {
    load: function () {
      if (tasks.length === 0) {
        tasks = storage.get(getTasks);
      }
      return this;
    },
    save: function () {
      storage.set(tasks, setTasks);
      return this;
    },
    add: function (task) {
      tasks.push(task);
      return this;
    },
    delete: function (i) {
      sort();
      tasks.splice(i, 1);
      return this;
    },
    clear: function () {
      tasks.length = 0;
      storage.clear();
      div.innerHTML = "";
      return this;
    },
    display: function () {
      sort();
      var html = "";
      for (var i in tasks) {
        html = html.concat("<p>");
        html = html.concat(
          "<a href='#' title='",
          i,
          "'><i class='fas fa-trash'></i>Delete</a>"
        );
        html = html.concat("<span>", tasks[i].toString(), "</span>");
        html = html.concat("</p>");
      }
      div.innerHTML = html;
      var links = div.getElementsByTagName("a");
      for (var i = 0; i < links.length; i++) {
        links[i].onclick = handler;
      }
      return this;
    },
  };
};

// var tasklist = {
//     tasks: [],
//     storage: getTaskStorage("tasks"),
//     displayDiv: null,
//     deleteClickHandler: null,
//     load: function() {
//         if (this.tasks.length === 0) {
//             tasklist.tasks = this.storage.get();
//         }
//         return this;
//     },
//     save: function() {
//         this.storage.set(this.tasks);
//         return this;
//     },
//     sort: function() {
//         this.tasks.sort();
//         return this;
//     },
//     add: function(task) {
//         this.tasks.push(task.toString());
//         return this;
//     },
//     delete: function(i) {
//         this.sort();
//         this.tasks.splice(i, 1);
//         return this;
//     },
//     edit: function(i, newTaskEdit) {
//         this.sort();
//         this.tasks.splice(i, 1, newTaskEdit.toString());
//         return this;
//     },
//     clear: function() {
//         this.tasks.length = 0;
//         this.storage.clear();
//         this.displayDiv.innerHTML = "";
//         return this;
//     },
//     display: function() {
//         var html = "";
//         this.sort();
//         for (var i in this.tasks) {
//             html = html.concat("<p>");
//             html = html.concat("<a href='#' class='delete' title='", i, "'><i class='fas fa-trash'></i>Delete</a>");
//             html = html.concat("<a href='#' class='edit' title='", i, "'><i class='fas fa-edit'></i>Edit</a>");
//             html = html.concat(this.tasks[i]);
//             html = html.concat("</p>");
//         }
//         this.displayDiv.innerHTML = html;
//         var links = this.displayDiv.getElementsByTagName("a");
//         for (var i = 0; i < links.length; i++) {
//             if (links[i].lastChild.nodeValue === "Delete") {
//                 links[i].onclick = this.deleteClickHandler;
//             } else {
//                 links[i].onclick = this.editClickHandler;
//             }
//         }
//         return this;
//     }
// }
