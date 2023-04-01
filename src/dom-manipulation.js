/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
/* eslint-disable no-else-return */
/* eslint-disable dot-notation */
import {
  removeProjectFromStorage,
  deselectPreviousProjectStorage,
  selectProjectStorage,
  deleteTodoStorage,
  setTodayAsDefaultStorage,
  changeTodoStatusStorage,
  getTodoInfo,
  updateTodoStorage,
} from "./data-manipulation";

import { getEditedTodoModalData, reverseDate } from "./modal-data";

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
  const addButtonsContainer = document.createElement("div");
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

function removeTodosFromDOM() {
  const rightContainer = document.querySelector(".right-container");
  removeAllChildNodes(rightContainer);
}

function removeProjectFromDOM(e) {
  const projectContainer = document.querySelector(".project-container");
  projectContainer.removeChild(e.target.parentElement);
  if (e.target.previousElementSibling.classList.contains("selected")) {
    removeTodosFromDOM();
  }
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

function setTodayAsDefaultDOM() {
  deselectPreviousProjectDOM();
  const projects = [...document.querySelectorAll(".project-title")];
  const array = JSON.parse(localStorage.getItem("array"));
  for (let i = 0; i < projects.length; i++) {
    if (array[i].selected == true) {
      projects[i].classList.add("selected");
    }
  }
}

function createTodoContainer(title, duedate, priority, completed) {
  const todo = document.createElement("div");
  todo.classList.add("todo");
  const todoInfo = document.createElement("div");
  todoInfo.classList.add("todo-info");
  const todoTitleContainer = document.createElement("div");
  todoTitleContainer.classList.add("title");
  const todoTitle = document.createElement("div");
  todoTitle.textContent = title;
  const expandButton = document.createElement("button");
  expandButton.classList.add("expand");
  expandButton.textContent = "▼";
  todoTitleContainer.append(todoTitle, expandButton);
  const todoDuedate = document.createElement("div");
  todoDuedate.classList.add("duedate");
  const duedateColor = document.createElement("span");
  duedateColor.classList.add("todo-detail");
  duedateColor.textContent = "Due date: ";
  const duedateSpan = document.createElement("span");
  duedateSpan.textContent = duedate;
  todoDuedate.append(duedateColor, duedateSpan);
  const todoPriority = document.createElement("div");
  todoPriority.classList.add("priority");
  const priorityColor = document.createElement("span");
  priorityColor.classList.add("todo-detail");
  priorityColor.textContent = "Priority: ";
  const prioritySpan = document.createElement("span");
  prioritySpan.textContent = priority;
  todoPriority.append(priorityColor, prioritySpan);
  todoInfo.append(todoTitleContainer, todoDuedate, todoPriority);
  const todoButtons = document.createElement("div");
  todoButtons.classList.add("todo-buttons");
  const markComplete = document.createElement("button");
  markComplete.classList.add("mark-complete");
  markComplete.textContent = "✓";
  if (completed == true) {
    markComplete.classList.add("todo-completed");
  }
  const deleteTodo = document.createElement("button");
  deleteTodo.classList.add("todo-delete");
  deleteTodo.textContent = "✕";
  todoButtons.append(markComplete, deleteTodo);
  todo.append(todoInfo, todoButtons);
  return todo;
}

function displayTodos() {
  const array = JSON.parse(localStorage.getItem("array"));
  const rightContainer = document.querySelector(".right-container");
  removeAllChildNodes(rightContainer);
  for (let i = 0; i < array.length; i++) {
    if (array[i].selected == true && array[i].todos.length != 0) {
      const todosList = array[i].todos;
      for (let j = 0; j < todosList.length; j++) {
        const [todoTitle, todoDuedate, todoPriority, todoCompleted] = [
          todosList[j].title,
          todosList[j].duedate,
          todosList[j].priority,
          todosList[j].completed,
        ];
        const todo = createTodoContainer(
          todoTitle,
          todoDuedate,
          todoPriority,
          todoCompleted
        );
        rightContainer.append(todo);
      }
      break;
    } else if (array[i].selected == true && array[i].todos.length == 0) {
      break;
    }
  }
}

function createExpandedTodoContainer(title, duedate, priority, description) {
  const todoContainer = document.createElement("div");
  todoContainer.classList.add("todo-container-expanded");
  const topContainer = document.createElement("div");
  topContainer.classList.add("top-container-expanded");
  const todoTitle = document.createElement("div");
  todoTitle.classList.add("title-expanded");
  todoTitle.textContent = title;
  topContainer.append(todoTitle);
  const bottomContainer = document.createElement("div");
  bottomContainer.classList.add("bottom-container-expanded");
  const duedateContainer = document.createElement("div");
  duedateContainer.classList.add("duedate-expanded");
  const duedateColor = document.createElement("span");
  duedateColor.classList.add("todo-detail");
  duedateColor.textContent = "Due date: ";
  const duedateSpan = document.createElement("span");
  duedateSpan.textContent = duedate;
  duedateContainer.append(duedateColor, duedateSpan);
  const priorityContainer = document.createElement("div");
  priorityContainer.classList.add("priority-expanded");
  const priorityColor = document.createElement("span");
  priorityColor.classList.add("todo-detail");
  priorityColor.textContent = "Priority: ";
  const prioritySpan = document.createElement("span");
  prioritySpan.textContent = priority;
  priorityContainer.append(priorityColor, prioritySpan);
  const descriptionContainer = document.createElement("div");
  descriptionContainer.classList.add("description");
  const descriptionColor = document.createElement("span");
  descriptionColor.classList.add("todo-detail");
  descriptionColor.textContent = "Description: ";
  const descriptionSpan = document.createElement("span");
  descriptionSpan.textContent = description;
  descriptionContainer.append(descriptionColor, descriptionSpan);
  const editTodoContainer = document.createElement("div");
  editTodoContainer.classList.add("todo-buttons-expanded");
  const editTodo = document.createElement("button");
  editTodo.classList.add("edit-todo-details");
  editTodo.textContent = "Edit Todo";
  editTodoContainer.append(editTodo);
  bottomContainer.append(
    duedateContainer,
    priorityContainer,
    descriptionContainer,
    editTodoContainer
  );
  todoContainer.append(topContainer, bottomContainer);
  return todoContainer;
}

function expandTodo(e) {
  const array = JSON.parse(localStorage.getItem("array"));
  const rightContainer = document.querySelector(".right-container");
  for (let i = 0; i < array.length; i++) {
    if (array[i].selected == true && array[i].todos.length != 0) {
      const todosList = array[i].todos;
      for (let j = 0; j < todosList.length; j++) {
        if (todosList[j].title == e.target.previousElementSibling.textContent) {
          const [todoTitle, todoDuedate, todoPriority, todoDescription] = [
            todosList[j].title,
            todosList[j].duedate,
            todosList[j].priority,
            todosList[j].description,
          ];
          const expandedTodo = createExpandedTodoContainer(
            todoTitle,
            todoDuedate,
            todoPriority,
            todoDescription
          );
          removeAllChildNodes(rightContainer);
          rightContainer.append(expandedTodo);
          break;
        }
      }
    }
  }
}

function expandTodoAfterEdit() {
  const { duedateReversed, priority, description } = getEditedTodoModalData();
  const rightContainer = document.querySelector(".right-container");
  const title = document.querySelector(".title-expanded").textContent;
  const expandedTodo = createExpandedTodoContainer(
    title,
    duedateReversed,
    priority,
    description
  );
  removeAllChildNodes(rightContainer);
  rightContainer.append(expandedTodo);
}

function populateTodoModalEdit() {
  const name = document.querySelector(".title-expanded").textContent;
  const [duedate, priority, description] = getTodoInfo(name);
  const formatedDuedate = reverseDate(duedate);
  const modalDuedate = document.getElementById("duedate-form-edited");
  const modalPriority = document.getElementById("priority-form-edited");
  const modalDescription = document.getElementById("description-edited");
  modalDuedate.value = formatedDuedate;
  modalPriority.value = priority;
  modalDescription.value = description;
}

function refreshTodoDelete() {
  const deleteTodoButtons = document.querySelectorAll(".todo-delete");
  deleteTodoButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      deleteTodoStorage(e);
      displayTodos();
      refreshTodoListeners();
    });
  });
}

function refreshTodoExpandEdit() {
  const todoModalEdit = document.querySelector(".todo-modal-edit");
  const submitEditedTodoButton = document.querySelector(".update-button-todo");
  const closeEditedTodoModal = document.querySelector(".close-todo-modal-edit");
  const expandButtons = document.querySelectorAll(".expand");
  expandButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      expandTodo(e);
      const editButton = document.querySelector(".edit-todo-details");
      editButton.addEventListener("click", () => {
        todoModalEdit.showModal();
        populateTodoModalEdit();
      });
    });
  });
  submitEditedTodoButton.addEventListener("click", () => {
    updateTodoStorage();
    expandTodoAfterEdit();
    refreshTodoListeners();
  });
  closeEditedTodoModal.addEventListener("click", () => {
    todoModalEdit.close();
  });
}

function refreshTodoComplete() {
  const markCompleteButtons = document.querySelectorAll(".mark-complete");
  markCompleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      changeTodoStatusStorage(e);
      displayTodos();
      refreshTodoListeners();
    });
  });
}

function refreshTodoListeners() {
  refreshTodoDelete();
  refreshTodoExpandEdit();
  refreshTodoComplete();
}

function refreshProjectListeners() {
  const projects = document.querySelectorAll(".project-title");
  projects.forEach((project) => {
    project.addEventListener("click", (e) => {
      deselectPreviousProjectStorage();
      deselectPreviousProjectDOM();
      selectProjectStorage(e);
      selectProjectDOM();
      displayTodos();
      refreshTodoListeners();
    });
  });
  const projectsContainer = document.querySelector(".project-container");
  if (checkForProjectDeleteButton(projectsContainer)) {
    const deleteProjects = document.querySelectorAll(".delete-project");
    deleteProjects.forEach((project) => {
      project.addEventListener("click", (e) => {
        removeProjectFromStorage(e);
        displayLocalStorageProjects();
        if (e.target.previousElementSibling.classList.contains("selected")) {
          /* If the project being deleted is currently selected then go back to the default project, else stay on the selected project */
          setTodayAsDefaultStorage();
          setTodayAsDefaultDOM();
        }
        displayTodos();
        refreshProjectListeners();
        refreshTodoListeners();
      });
    });
  }
}

export {
  displayLocalStorageProjects,
  displayAddButtons,
  findSelectedProjectName,
  removeProjectFromDOM,
  refreshProjectListeners,
  refreshTodoListeners,
  setTodayAsDefaultDOM,
  displayTodos,
  expandTodo,
  populateTodoModalEdit,
};
