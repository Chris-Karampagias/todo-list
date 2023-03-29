/* eslint-disable eqeqeq */
function getTodoModalData() {
  const title = document.getElementById("title-form").value;
  const duedate = document.getElementById("duedate-form").value;
  const priority = document.getElementById("priority-form").value;
  const description = document.getElementById("description").value;
  return {
    title,
    duedate,
    priority,
    description,
  };
}

function getProjectModalName() {
  if (document.getElementById("project-name").value != "") {
    return document.getElementById("project-name").value;
  }
  return "Empty";
}

export { getProjectModalName, getTodoModalData };
