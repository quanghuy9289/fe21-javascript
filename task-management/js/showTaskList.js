const showTaskList = (list, delElement) => {
  html = "";
  let sortedList = sortArrAscending(list);
  sortedList?.map((el, i) => {
    html = html.concat("<p>");
    html = html.concat("<a href='#' id='", i, "'>Delete</a>");
    html = html.concat(" " + el);
    html = html.concat("</p>");
  });
  $("task_list").innerHTML = html;
  let listTask = document.getElementsByTagName("a");
  for (var i = 0; i < listTask.length; i++) {
    listTask[i].onclick = delElement;
  }
};
