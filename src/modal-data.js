/* eslint-disable eqeqeq */

function reverseDate(date) {
  const array = date.split("-");
  array.reverse();
  const reversedDate = array.join("-");
  return reversedDate;
}

function resetTodoInputs() {
  const title = document.getElementById("title-form");
  const duedate = document.getElementById("duedate-form");
  const priority = document.getElementById("priority-form");
  const description = document.getElementById("description");
  title.value = "";
  duedate.value = "";
  priority.value = "";
  description.value = "";
}

function getTodoModalData() {
  const title = document.getElementById("title-form").value;
  const duedate = document.getElementById("duedate-form").value;
  const duedateReversed = reverseDate(duedate);
  const priority = document.getElementById("priority-form").value;
  const description = document.getElementById("description").value;
  resetTodoInputs(title, duedate, priority, description);
  return {
    title,
    duedateReversed,
    priority,
    description,
  };
}

function getEditedTodoModalData() {
  const duedate = document.getElementById("duedate-form-edited").value;
  const duedateReversed = reverseDate(duedate);
  const priority = document.getElementById("priority-form-edited").value;
  const description = document.getElementById("description-edited").value;
  return {
    duedateReversed,
    priority,
    description,
  };
}

function resetProjectInput() {
  const name = document.getElementById("project-name");
  name.value = "";
}

function getProjectModalName() {
  if (document.getElementById("project-name").value != "") {
    return document.getElementById("project-name").value;
  }
  return "Empty";
}

export {
  resetTodoInputs,
  resetProjectInput,
  reverseDate,
  getProjectModalName,
  getTodoModalData,
  getEditedTodoModalData,
};
