/* eslint-disable quotes */
import {
  addProjectToStorage,
  removeProjectFromStorage,
} from "./data-manipulation";
import {
  getTodoModalData,
  displayLocalStorageProjects,
  displayAddButtons,
  deselectProject,
  findSelectedProjectName,
  removeProjectFromDOM,
} from "./dom-manipulation";

displayLocalStorageProjects();
displayAddButtons();

const projectModal = document.querySelector(".project-modal");
const addProjectButton = document.querySelector(".add-project");
const submitProjectButton = document.querySelector(".submit-button-project");
addProjectButton.addEventListener("click", () => {
  projectModal.showModal();
});

submitProjectButton.addEventListener("click", () => {
  addProjectToStorage();
  displayLocalStorageProjects();
  const projectContainer = document.querySelector(".project-container");
  if (projectContainer.contains(document.querySelector(".delete-project"))) {
    const deleteProjects = document.querySelectorAll(".delete-project");
    deleteProjects.forEach((project) => {
      project.addEventListener("click", (e) => {
        removeProjectFromDOM(e);
        removeProjectFromStorage(e);
      });
    });
  }
});
/* const todoModal = document.querySelector(".todo-modal");
const submitTodoButton = document.querySelector(".submit-button-todo");
const addTodoButton = document.querySelector(".add-todo");
addTodoButton.addEventListener("click", () => {
  todoModal.showModal();
});

submitTodoButton.addEventListener("click", getTodoModalData); */

/* const deleteProject = document.querySelector(".delete-project");

deleteProject.addEventListener("click", (e) => {
  removeProjectFromDOM(e);
  removeProjectFromStorage(e);
}); */
