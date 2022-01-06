var sortTaskList = function (tasks) {
  var isArray = Array.isArray(tasks);
  if (isArray) tasks.sort();
  return isArray;
};
var displaySortedTaskList = function (
  tasks,
  divEle,
  deleteHandler,
  editHandler
) {
  var html = "";
  var isArray = sortTaskList(tasks);
  if (isArray) {
    for (var i in tasks) {
      html = html.concat("<p>");
      html = html.concat(
        "<a href='#' id='",
        i,
        "'><i class='fas fa-trash mr-1'></i>Delete</a>"
      );
      html = html.concat(
        " <span id='",
        i,
        "'><i class='fas fa-edit mr-1'></i>Edit</span>"
      );
      html = html.concat("&nbsp;&nbsp;" + tasks[i]);
      html = html.concat("</p>");
    }
    divEle.innerHTML = html;
    var links = divEle.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
      links[i].onclick = deleteHandler;
    }
    var span = divEle.getElementsByTagName("span");
    for (var i = 0; i < span.length; i++) {
      span[i].onclick = editHandler;
    }
  }
};
var editTask = function (tasks, i) {
  var isArray = sortTaskList(tasks);
  var newText = prompt("Enter your new task to edit");
  if (isArray && newText !== null && newText.length > 0) {
    tasks.splice(i, 1, capitalizeTask(newText));
  }
};
var deleteTask = function () {
  var isArray = sortTaskList(arguments[0]);
  if (isArray) tasks.splice(arguments[1], 1);
  sortTaskList.call(undefined, arguments[0]);
};
var capitalizeTask = function (task) {
  var first = task.substring(0, 1);
  return first.toUpperCase() + task.substring(1);
};
