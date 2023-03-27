function getTodoModalData() {
  const title = document.getElementById("title-form").value;
  const dueDate = document.getElementById("duedate-form").value;
  const priority = document.getElementById("priority-form").value;
  const description = document.getElementById("priority-form").value;
  return {
    title,
    dueDate,
    priority,
    description,
  };
}

function getProjectModalName() {
  return document.getElementById("project-name").value;
}

export { getTodoModalData, getProjectModalName };
