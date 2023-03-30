/* eslint-disable quotes */
import {
  addProjectToStorage,
  addTodoStorage,
  setTodayAsDefaultStorage,
} from "./data-manipulation";
import {
  displayLocalStorageProjects,
  displayAddButtons,
  refreshProjectListeners,
  refreshTodoListeners,
  setTodayAsDefaultDOM,
  displayTodos,
} from "./dom-manipulation";

displayLocalStorageProjects();
displayAddButtons();
displayTodos();

const projectModal = document.querySelector(".project-modal");
const addProjectButton = document.querySelector(".add-project");
const submitProjectButton = document.querySelector(".submit-button-project");
const closeProjectModal = document.querySelector(".close-project-modal");

addProjectButton.addEventListener("click", () => {
  projectModal.showModal();
});

closeProjectModal.addEventListener("click", () => {
  projectModal.close();
});

window.addEventListener("load", () => {
  setTodayAsDefaultStorage();
  setTodayAsDefaultDOM();
  refreshProjectListeners();
  refreshTodoListeners();
});

submitProjectButton.addEventListener("click", () => {
  addProjectToStorage();
  displayLocalStorageProjects();
  refreshProjectListeners();
});

const todoModal = document.querySelector(".todo-modal");
const submitTodoButton = document.querySelector(".submit-button-todo");
const addTodoButton = document.querySelector(".add-todo");

addTodoButton.addEventListener("click", () => {
  todoModal.showModal();
});

submitTodoButton.addEventListener("click", () => {
  addTodoStorage();
  displayTodos();
  refreshProjectListeners();
  refreshTodoListeners();
});
