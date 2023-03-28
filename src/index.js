/* eslint-disable quotes */
import {
  addProjectToStorage,
  removeProjectFromStorage,
} from "./data-manipulation";
import {
  getTodoModalData,
  displayLocalStorageProjects,
  displayAddButtons,
  findSelectedProjectName,
  refreshProjectListeners,
} from "./dom-manipulation";

displayLocalStorageProjects();
displayAddButtons();

const projectModal = document.querySelector(".project-modal");
const addProjectButton = document.querySelector(".add-project");
const submitProjectButton = document.querySelector(".submit-button-project");
addProjectButton.addEventListener("click", () => {
  projectModal.showModal();
});

window.addEventListener("load", () => {
  refreshProjectListeners();
});

submitProjectButton.addEventListener("click", () => {
  addProjectToStorage();
  displayLocalStorageProjects();
  refreshProjectListeners();
});

/* const todoModal = document.querySelector(".todo-modal");
const submitTodoButton = document.querySelector(".submit-button-todo");
const addTodoButton = document.querySelector(".add-todo");
addTodoButton.addEventListener("click", () => {
  todoModal.showModal();
});

submitTodoButton.addEventListener("click", getTodoModalData); */
