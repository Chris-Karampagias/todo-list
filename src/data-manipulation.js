/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
import { getTodoModalData, getProjectModalName } from "./dom-manipulation";

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

class Todo {
  constructor(title, duedate, priority, description) {
    this.title = title;
    this.duedate = duedate;
    this.priority = priority;
    this.description = description;
  }
}

function createTodo() {
  const { title, duedate, priority, description } = getTodoModalData();
  const todoObj = new Todo(title, duedate, priority, description);
  return todoObj;
}

function addTodoStorage() {
  const todo = createTodo();
  const array = JSON.parse(localStorage.getItem("array"));
  for (let i = 0; i < array.length; i++) {
    if (array[i].selected == true) {
      array[i].todos.push(todo);
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
};
