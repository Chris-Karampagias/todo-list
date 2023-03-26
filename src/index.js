const checkTodo = document.querySelector(".todo-buttons").firstElementChild;

checkTodo.addEventListener("click", () => {
  checkTodo.classList.toggle("todo-checked");
});
