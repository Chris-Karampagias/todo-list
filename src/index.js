/* eslint-disable quotes */
import {
  addTodoStorage,
  addProjectToStorage,
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

import "./style.css";

setTodayAsDefaultStorage();
displayLocalStorageProjects();
displayAddButtons();
setTodayAsDefaultDOM();
displayTodos();
refreshProjectListeners();
refreshTodoListeners();

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

submitProjectButton.addEventListener("click", () => {
  addProjectToStorage();
  displayLocalStorageProjects();
  refreshProjectListeners();
});

const todoModal = document.querySelector(".todo-modal");
const submitTodoButton = document.querySelector(".submit-button-todo");
const closeTodoModal = document.querySelector(".close-todo-modal");
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

closeTodoModal.addEventListener("click", () => {
  todoModal.close();
});
