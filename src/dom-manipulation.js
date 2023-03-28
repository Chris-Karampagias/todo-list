/* eslint-disable dot-notation */
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
  removeAllChildNodes(leftContainer);
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project-container");
  for (const value of JSON.parse(Object.values(localStorage))) {
    const project = document.createElement("div");
    project.classList.add("project");
    const projectTitle = document.createElement("div");
    projectTitle.classList.add("project-title");
    projectTitle.textContent = value.projectName;
    project.append(projectTitle);
    if (
      value.projectName !== "Today" &&
      value.projectName !== "Anytime" &&
      value.projectName !== "Upcoming"
    ) {
      const deleteProjectButton = document.createElement("button");
      deleteProjectButton.classList.add("delete-project");
      deleteProjectButton.textContent = "✕";
      project.append(deleteProjectButton);
    }
    projectContainer.append(project);
  }
  leftContainer.prepend(projectContainer);
}

function displayAddButtons() {
  const leftContainer = document.querySelector(".left-container");
  const addButtonsContainer = document.createElement("add-buttons-container");
  addButtonsContainer.classList.add("add-buttons-container");
  const addTodo = document.createElement("button");
  addTodo.classList.add("add-todo");
  addTodo.textContent = "Add Todo";
  const addProject = document.createElement("button");
  addProject.classList.add("add-project");
  addProject.textContent = "Add Project";
  addButtonsContainer.append(addTodo, addProject);
  leftContainer.append(addButtonsContainer);
}

function findSelectedProjectName() {
  let name;
  const projects = document.querySelectorAll(".project");
  projects.forEach((project) => {
    if (project.classList.contains("selected")) {
      name = project.firstElementChild.textContent;
    }
  });
  return name;
}

function deselectProject() {
  const projects = document.querySelectorAll(".project");
  projects.forEach((project) => {
    if (project.classList.contains("selected")) {
      project.classList.remove("selected");
    }
  });
}

function removeProjectFromDOM(e) {
  const projectContainer = document.querySelector(".project-container");
  projectContainer.removeChild(e.target.parentElement);
}

function removeAllChildNodes(parent) {
  while (
    parent.firstElementChild &&
    !parent.firstElementChild.classList.contains("add-buttons-container")
  ) {
    parent.removeChild(parent.firstElementChild);
  }
}

export {
  getTodoModalData,
  getProjectModalName,
  displayLocalStorageProjects,
  displayAddButtons,
  deselectProject,
  findSelectedProjectName,
  removeProjectFromDOM,
};
