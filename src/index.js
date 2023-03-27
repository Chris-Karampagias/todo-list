/* eslint-disable quotes */
import { addProjectToStorage } from "./data-manipulation";
import { getTodoModalData } from "./dom-manipulation";

const projectModal = document.querySelector(".project-modal");
const addProjectButton = document.querySelector(".add-project");
const submitProjectButton = document.querySelector(".submit-button-project");
addProjectButton.addEventListener("click", () => {
  projectModal.showModal();
});

submitProjectButton.addEventListener("click", addProjectToStorage);
/* const todoModal = document.querySelector(".todo-modal");
const submitTodoButton = document.querySelector(".submit-button-todo");
const addTodoButton = document.querySelector(".add-todo");
addTodoButton.addEventListener("click", () => {
  todoModal.showModal();
});

submitTodoButton.addEventListener("click", getTodoModalData); */

console.table(localStorage);
