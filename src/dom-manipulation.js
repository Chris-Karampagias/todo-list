/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
/* eslint-disable no-else-return */
/* eslint-disable dot-notation */
import {
  removeProjectFromStorage,
  deselectPreviousProjectStorage,
  selectProjectStorage,
} from "./data-manipulation";

function removeAllChildNodes(parent) {
  while (
    parent.firstElementChild &&
    !parent.firstElementChild.classList.contains("add-buttons-container")
  ) {
    parent.removeChild(parent.firstElementChild);
  }
}

function selectProjectDOM() {
  const projects = [...document.querySelectorAll(".project-title")];
  const array = JSON.parse(localStorage.getItem("array"));
  for (let i = 0; i < projects.length; i++) {
    if (
      array[i].projectName == projects[i].textContent &&
      array[i].selected == true
    ) {
      projects[i].classList.add("selected");
    }
  }
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
  selectProjectDOM();
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
  const projects = document.querySelectorAll(".project-name");
  projects.forEach((project) => {
    if (project.classList.contains("selected")) {
      name = project.firstElementChild.textContent;
    }
  });
  return name;
}

function deselectPreviousProjectDOM() {
  const projects = document.querySelectorAll(".project-title");
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

function checkForProjectDeleteButton(element) {
  if (
    element.contains(document.querySelector(".delete-project")) ||
    element.contains(document.querySelector(".todo-delete"))
  ) {
    return true;
  }
  return false;
}

function refreshProjectListeners() {
  const projects = document.querySelectorAll(".project-title");
  projects.forEach((project) => {
    project.addEventListener("click", (e) => {
      deselectPreviousProjectStorage();
      deselectPreviousProjectDOM();
      selectProjectStorage(e);
      selectProjectDOM();
    });
  });
  const projectsContainer = document.querySelector(".project-container");
  if (checkForProjectDeleteButton(projectsContainer)) {
    const deleteProjects = document.querySelectorAll(".delete-project");
    deleteProjects.forEach((project) => {
      project.addEventListener("click", (e) => {
        removeProjectFromDOM(e);
        removeProjectFromStorage(e);
      });
    });
  }
}

function setTodayAsDefaultDOM() {
  deselectPreviousProjectDOM();
  const projects = [...document.querySelectorAll(".project-title")];
  const array = JSON.parse(localStorage.getItem("array"));
  for (let i = 0; i < projects.length; i++) {
    if (array[i].projectName == "Today" && projects[i].textContent == "Today") {
      projects[i].classList.add("selected");
    }
  }
}

export {
  displayLocalStorageProjects,
  displayAddButtons,
  findSelectedProjectName,
  removeProjectFromDOM,
  refreshProjectListeners,
  setTodayAsDefaultDOM,
};
