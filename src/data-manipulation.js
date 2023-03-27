import { getTodoModalData, getProjectModalName } from "./dom-manipulation";

function addProjectToStorage() {
  const projectName = getProjectModalName();
  localStorage.setItem(projectName, "[]");
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

/* Need to get back to this one after I figure out how to get the currently selected project */
/* function addTodoToStorage(){
    const todo = createTodo(); 

} */

export { addProjectToStorage };
