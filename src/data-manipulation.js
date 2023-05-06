/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
import {
  getTodoModalData,
  getProjectModalName,
  getEditedTodoModalData,
} from "./modal-data";

/* Project data manipulation */

function addProjectToStorage() {
  const projectName = getProjectModalName();
  if (projectName == "Empty") return;
  const array = JSON.parse(localStorage.getItem("array"));
  const obj = { projectName, selected: false, todos: [] };
  array.push(obj);
  const stringified = JSON.stringify(array);
  localStorage.setItem("array", stringified);
}

function deselectPreviousProjectStorage() {
  const array = JSON.parse(localStorage.getItem("array"));
  for (let i = 0; i < array.length; i++) {
    if (array[i].selected == true) {
      array[i].selected = false;
    }
  }
  const stringified = JSON.stringify(array);
  localStorage.setItem("array", stringified);
}

function selectProjectStorage(e) {
  const name = e.target.textContent;
  const array = JSON.parse(localStorage.getItem("array"));
  for (let i = 0; i < array.length; i++) {
    if (array[i].projectName == name) {
      array[i].selected = true;
    }
  }
  const stringified = JSON.stringify(array);
  localStorage.setItem("array", stringified);
}

function setTodayAsDefaultStorage() {
  const array = JSON.parse(localStorage.getItem("array"));
  for (let i = 0; i < array.length; i++) {
    if (array[i].projectName == "Today") {
      array[i].selected = true;
    }
    if (array[i].projectName != "Today" && array[i].selected == true) {
      array[i].selected = false;
    }
  }
  const stringified = JSON.stringify(array);
  localStorage.setItem("array", stringified);
}

function removeProjectFromStorage(e) {
  const name = e.target.previousElementSibling.textContent;
  const array = JSON.parse(localStorage.getItem("array"));
  for (let i = 0; i < array.length; i++) {
    if (array[i].projectName == name) {
      array.splice(i, 1);
    }
  }
  const stringified = JSON.stringify(array);
  localStorage.setItem("array", stringified);
}

/* Modal data manipulation */

function Todo(title, duedate, priority, description) {
  return { title, duedate, priority, description, completed: false };
}

function createTodo() {
  const { title, duedateReversed, priority, description } = getTodoModalData();
  if (
    title == "" ||
    duedateReversed == "" ||
    priority == "" ||
    description == ""
  ) {
    return "Empty";
  }
  const todoObj = Todo(title, duedateReversed, priority, description);
  return todoObj;
}

function addTodoStorage() {
  const todo = createTodo();
  if (todo == "Empty") {
    return;
  }
  const array = JSON.parse(localStorage.getItem("array"));
  for (let i = 0; i < array.length; i++) {
    if (array[i].selected == true) {
      array[i].todos.push(todo);
    }
  }
  const stringified = JSON.stringify(array);
  localStorage.setItem("array", stringified);
}

function deleteTodoStorage(e) {
  let element = e.target.parentElement;
  while (!element.classList.contains("todo-info")) {
    element = element.previousElementSibling;
  }
  const name = element.firstElementChild.firstElementChild.textContent;
  const array = JSON.parse(localStorage.getItem("array"));
  for (let i = 0; i < array.length; i++) {
    if (array[i].selected == true) {
      const todosList = array[i].todos;
      for (let j = 0; j < todosList.length; j++) {
        if (todosList[j].title == name) {
          todosList.splice(j, 1);
        }
      }
    }
  }
  const stringified = JSON.stringify(array);
  localStorage.setItem("array", stringified);
}

function changeTodoStatusStorage(e) {
  let element = e.target.parentElement;
  while (!element.classList.contains("todo-info")) {
    element = element.previousElementSibling;
  }
  const name = element.firstElementChild.firstElementChild.textContent;
  const array = JSON.parse(localStorage.getItem("array"));
  for (let i = 0; i < array.length; i++) {
    if (array[i].selected == true) {
      const todosList = array[i].todos;
      for (let j = 0; j < todosList.length; j++) {
        if (todosList[j].title == name && todosList[j].completed == false) {
          todosList[j].completed = true;
          break;
        } else if (
          todosList[j].title == name &&
          todosList[j].completed == true
        ) {
          todosList[j].completed = false;
        }
      }
      break;
    }
  }
  const stringified = JSON.stringify(array);
  localStorage.setItem("array", stringified);
}

function getTodoInfo(name) {
  const array = JSON.parse(localStorage.getItem("array"));
  for (let i = 0; i < array.length; i++) {
    if (array[i].selected == true && array[i].todos.length != 0) {
      const todosList = array[i].todos;
      for (let j = 0; j < todosList.length; j++) {
        if (todosList[j].title == name) {
          const [todoDuedate, todoPriority, todoDescription, todoCompleted] = [
            todosList[j].duedate,
            todosList[j].priority,
            todosList[j].description,
            todosList[j].completed,
          ];
          return [todoDuedate, todoPriority, todoDescription, todoCompleted];
        }
      }
    }
  }
}

function updateTodoStorage() {
  const title = document.querySelector(".title-expanded").textContent;
  const { duedateReversed, priority, description } = getEditedTodoModalData();
  const array = JSON.parse(localStorage.getItem("array"));
  for (let i = 0; i < array.length; i++) {
    if (array[i].selected == true && array[i].todos.length != 0) {
      const todosList = array[i].todos;
      for (let j = 0; j < todosList.length; j++) {
        if (todosList[j].title == title) {
          todosList[j].duedate = duedateReversed;
          todosList[j].priority = priority;
          todosList[j].description = description;
          break;
        }
      }
      break;
    }
  }
  const stringified = JSON.stringify(array);
  localStorage.setItem("array", stringified);
}

export {
  addProjectToStorage,
  removeProjectFromStorage,
  deselectPreviousProjectStorage,
  selectProjectStorage,
  setTodayAsDefaultStorage,
  addTodoStorage,
  deleteTodoStorage,
  changeTodoStatusStorage,
  getTodoInfo,
  updateTodoStorage,
};
