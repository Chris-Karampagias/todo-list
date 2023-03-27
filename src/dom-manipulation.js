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

function displayLocalStorageProjects() {
  const leftContainer = document.querySelector(".left-container");
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project-container");
  for (const key of Object.keys(localStorage)) {
    const project = document.createElement("div");
    project.classList.add("project");
    const projectTitle = document.createElement("div");
    projectTitle.classList.add("project-title");
    projectTitle.textContent = key;
    project.append(projectTitle);
    if (key != "Today" && key != "Anytime" && key != "Upcoming") {
      const deleteProjectButton = document.createElement("button");
      deleteProjectButton.classList.add("delete-project");
      deleteProjectButton.textContent = "✕";
      project.append(deleteProjectButton);
    }
    projectContainer.append(project);
    leftContainer.prepend(projectContainer);
  }
}

export { getTodoModalData, getProjectModalName, displayLocalStorageProjects };
