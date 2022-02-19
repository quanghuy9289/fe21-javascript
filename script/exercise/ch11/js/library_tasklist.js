var taskList = {
  tasks: [],
  storage: getTaskStorage('tasks'),
  displayDiv: null,
  editClickHandler: null,
  deleteClickHandler: null,
  load: function() {
    if(this.tasks.length == 0) {
      this.tasks = this.storage.get();
    }
  },
  save: function() {
    this.storage.set(this.tasks);
  },
  sort: function() {
    this.tasks.sort();
  },
  add: function(task) {
    this.tasks.push(task.toString());
  },
  delete: function(i) {
    this.sort();
    this.tasks.splice(i, 1);
  },
  edit: function(tasks, i, newText) {
    var isArray = Array.isArray(tasks);
    if(isArray) {
      tasks.splice(i, 1, newText.toString());
    }
    return this;
  },
  clear: function() {
    this.tasks.length = 0;
    this.storage.clear();
    this.displayDiv.innerHTML = "";
  },
  display: function() {
        var html = "";
        this.sort();
        for(var i in this.tasks) {
            html = html.concat("<p>");
            html = html.concat("<a class ='delete' href='#' id='", i, "'>Delete</a>");
            html = html.concat("<a class ='edit' href='#' id='", i, "'>Edit</a>");
            html = html.concat(" " + this.tasks[i]);
            html = html.concat("</p>");
        }
        this.displayDiv.innerHTML = html;

        var links = document.getElementsByClassName('delete');
        for(var i = 0; i < links.length; i++) {
            links[i].onclick = this.deleteClickHandler;
        }
        var links = document.getElementsByClassName('edit');
        for(var i = 0; i < links.length; i++) {
            links[i].onclick = this.editClickHandler;
        }
    }

}