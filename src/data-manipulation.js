import { getTodoModalData, getProjectModalName } from "./dom-manipulation";

function addProjectToStorage() {
  const projectName = getProjectModalName();
  const array = JSON.parse(localStorage.getItem("array"));
  const obj = { projectName };
  array.push(obj);
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

/* Need to get back to this one after I figure out how to get the currently selected project */
/* function addTodoToStorage(){
    const todo = createTodo(); 

} */

export { addProjectToStorage, removeProjectFromStorage };
