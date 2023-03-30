/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data-manipulation.js":
/*!**********************************!*\
  !*** ./src/data-manipulation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProjectToStorage\": () => (/* binding */ addProjectToStorage),\n/* harmony export */   \"addTodoStorage\": () => (/* binding */ addTodoStorage),\n/* harmony export */   \"deleteTodoStorage\": () => (/* binding */ deleteTodoStorage),\n/* harmony export */   \"deselectPreviousProjectStorage\": () => (/* binding */ deselectPreviousProjectStorage),\n/* harmony export */   \"removeProjectFromStorage\": () => (/* binding */ removeProjectFromStorage),\n/* harmony export */   \"selectProjectStorage\": () => (/* binding */ selectProjectStorage),\n/* harmony export */   \"setTodayAsDefaultStorage\": () => (/* binding */ setTodayAsDefaultStorage)\n/* harmony export */ });\n/* harmony import */ var _modal_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-data */ \"./src/modal-data.js\");\n/* eslint-disable no-plusplus */\n/* eslint-disable eqeqeq */\n\n\nfunction addProjectToStorage() {\n  const projectName = (0,_modal_data__WEBPACK_IMPORTED_MODULE_0__.getProjectModalName)();\n  if (projectName == \"Empty\") return;\n  const array = JSON.parse(localStorage.getItem(\"array\"));\n  const obj = { projectName, selected: false, todos: [] };\n  array.push(obj);\n  const stringified = JSON.stringify(array);\n  localStorage.setItem(\"array\", stringified);\n}\n\nfunction deselectPreviousProjectStorage() {\n  const array = JSON.parse(localStorage.getItem(\"array\"));\n  for (let i = 0; i < array.length; i++) {\n    if (array[i].selected == true) {\n      array[i].selected = false;\n    }\n  }\n  const stringified = JSON.stringify(array);\n  localStorage.setItem(\"array\", stringified);\n}\n\nfunction selectProjectStorage(e) {\n  const name = e.target.textContent;\n  const array = JSON.parse(localStorage.getItem(\"array\"));\n  for (let i = 0; i < array.length; i++) {\n    if (array[i].projectName == name) {\n      array[i].selected = true;\n    }\n  }\n  const stringified = JSON.stringify(array);\n  localStorage.setItem(\"array\", stringified);\n}\n\nfunction setTodayAsDefaultStorage() {\n  const array = JSON.parse(localStorage.getItem(\"array\"));\n  for (let i = 0; i < array.length; i++) {\n    if (array[i].projectName == \"Today\") {\n      array[i].selected = true;\n    }\n    if (array[i].projectName != \"Today\" && array[i].selected == true) {\n      array[i].selected = false;\n    }\n  }\n  const stringified = JSON.stringify(array);\n  localStorage.setItem(\"array\", stringified);\n}\n\nfunction removeProjectFromStorage(e) {\n  const name = e.target.previousElementSibling.textContent;\n  const array = JSON.parse(localStorage.getItem(\"array\"));\n  for (let i = 0; i < array.length; i++) {\n    if (array[i].projectName == name) {\n      array.splice(i, 1);\n    }\n  }\n  const stringified = JSON.stringify(array);\n  localStorage.setItem(\"array\", stringified);\n}\n\nfunction Todo(title, duedate, priority, description) {\n  return { title, duedate, priority, description };\n}\n\nfunction createTodo() {\n  const { title, duedate, priority, description } = (0,_modal_data__WEBPACK_IMPORTED_MODULE_0__.getTodoModalData)();\n  const todoObj = Todo(title, duedate, priority, description);\n  return todoObj;\n}\n\nfunction addTodoStorage() {\n  const todo = createTodo();\n  const array = JSON.parse(localStorage.getItem(\"array\"));\n  for (let i = 0; i < array.length; i++) {\n    if (array[i].selected == true) {\n      array[i].todos.push(todo);\n    }\n  }\n  const stringified = JSON.stringify(array);\n  localStorage.setItem(\"array\", stringified);\n}\n\nfunction deleteTodoStorage(e) {\n  let element = e.target.parentElement;\n  while (!element.classList.contains(\"todo-info\")) {\n    element = element.previousElementSibling;\n  }\n  const name = element.firstElementChild.textContent;\n  const array = JSON.parse(localStorage.getItem(\"array\"));\n  for (let i = 0; i < array.length; i++) {\n    if (array[i].selected == true) {\n      const todosList = array[i].todos;\n      for (let j = 0; j < todosList.length; j++) {\n        if (todosList[j].title == name) {\n          todosList.splice(j, 1);\n        }\n      }\n    }\n  }\n  const stringified = JSON.stringify(array);\n  localStorage.setItem(\"array\", stringified);\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/data-manipulation.js?");

/***/ }),

/***/ "./src/dom-manipulation.js":
/*!*********************************!*\
  !*** ./src/dom-manipulation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayAddButtons\": () => (/* binding */ displayAddButtons),\n/* harmony export */   \"displayLocalStorageProjects\": () => (/* binding */ displayLocalStorageProjects),\n/* harmony export */   \"displayTodos\": () => (/* binding */ displayTodos),\n/* harmony export */   \"findSelectedProjectName\": () => (/* binding */ findSelectedProjectName),\n/* harmony export */   \"refreshProjectListeners\": () => (/* binding */ refreshProjectListeners),\n/* harmony export */   \"refreshTodoListeners\": () => (/* binding */ refreshTodoListeners),\n/* harmony export */   \"removeProjectFromDOM\": () => (/* binding */ removeProjectFromDOM),\n/* harmony export */   \"setTodayAsDefaultDOM\": () => (/* binding */ setTodayAsDefaultDOM)\n/* harmony export */ });\n/* harmony import */ var _data_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-manipulation */ \"./src/data-manipulation.js\");\n/* eslint-disable no-restricted-syntax */\n/* eslint-disable no-plusplus */\n/* eslint-disable eqeqeq */\n/* eslint-disable no-else-return */\n/* eslint-disable dot-notation */\n\n\nfunction removeAllChildNodes(parent) {\n  while (\n    parent.firstElementChild &&\n    !parent.firstElementChild.classList.contains(\"add-buttons-container\")\n  ) {\n    parent.removeChild(parent.firstElementChild);\n  }\n}\n\nfunction selectProjectDOM() {\n  const projects = [...document.querySelectorAll(\".project-title\")];\n  const array = JSON.parse(localStorage.getItem(\"array\"));\n  for (let i = 0; i < projects.length; i++) {\n    if (\n      array[i].projectName == projects[i].textContent &&\n      array[i].selected == true\n    ) {\n      projects[i].classList.add(\"selected\");\n    }\n  }\n}\n\nfunction displayLocalStorageProjects() {\n  const leftContainer = document.querySelector(\".left-container\");\n  removeAllChildNodes(leftContainer);\n  const projectContainer = document.createElement(\"div\");\n  projectContainer.classList.add(\"project-container\");\n  for (const value of JSON.parse(Object.values(localStorage))) {\n    const project = document.createElement(\"div\");\n    project.classList.add(\"project\");\n    const projectTitle = document.createElement(\"div\");\n    projectTitle.classList.add(\"project-title\");\n    projectTitle.textContent = value.projectName;\n    project.append(projectTitle);\n    if (\n      value.projectName !== \"Today\" &&\n      value.projectName !== \"Anytime\" &&\n      value.projectName !== \"Upcoming\"\n    ) {\n      const deleteProjectButton = document.createElement(\"button\");\n      deleteProjectButton.classList.add(\"delete-project\");\n      deleteProjectButton.textContent = \"✕\";\n      project.append(deleteProjectButton);\n    }\n    projectContainer.append(project);\n  }\n  leftContainer.prepend(projectContainer);\n  selectProjectDOM();\n}\n\nfunction displayAddButtons() {\n  const leftContainer = document.querySelector(\".left-container\");\n  const addButtonsContainer = document.createElement(\"div\");\n  addButtonsContainer.classList.add(\"add-buttons-container\");\n  const addTodo = document.createElement(\"button\");\n  addTodo.classList.add(\"add-todo\");\n  addTodo.textContent = \"Add Todo\";\n  const addProject = document.createElement(\"button\");\n  addProject.classList.add(\"add-project\");\n  addProject.textContent = \"Add Project\";\n  addButtonsContainer.append(addTodo, addProject);\n  leftContainer.append(addButtonsContainer);\n}\n\nfunction findSelectedProjectName() {\n  let name;\n  const projects = document.querySelectorAll(\".project-name\");\n  projects.forEach((project) => {\n    if (project.classList.contains(\"selected\")) {\n      name = project.firstElementChild.textContent;\n    }\n  });\n  return name;\n}\n\nfunction deselectPreviousProjectDOM() {\n  const projects = document.querySelectorAll(\".project-title\");\n  projects.forEach((project) => {\n    if (project.classList.contains(\"selected\")) {\n      project.classList.remove(\"selected\");\n    }\n  });\n}\n\nfunction removeTodosFromDOM() {\n  const rightContainer = document.querySelector(\".right-container\");\n  removeAllChildNodes(rightContainer);\n}\n\nfunction removeProjectFromDOM(e) {\n  const projectContainer = document.querySelector(\".project-container\");\n  projectContainer.removeChild(e.target.parentElement);\n  if (e.target.previousElementSibling.classList.contains(\"selected\")) {\n    removeTodosFromDOM();\n  }\n}\n\nfunction checkForProjectDeleteButton(element) {\n  if (\n    element.contains(document.querySelector(\".delete-project\")) ||\n    element.contains(document.querySelector(\".todo-delete\"))\n  ) {\n    return true;\n  }\n  return false;\n}\n\nfunction setTodayAsDefaultDOM() {\n  deselectPreviousProjectDOM();\n  const projects = [...document.querySelectorAll(\".project-title\")];\n  const array = JSON.parse(localStorage.getItem(\"array\"));\n  for (let i = 0; i < projects.length; i++) {\n    if (array[i].selected == true) {\n      projects[i].classList.add(\"selected\");\n    }\n  }\n}\n\nfunction createTodoContainer(title, duedate, priority) {\n  const todo = document.createElement(\"div\");\n  todo.classList.add(\"todo\");\n  const todoInfo = document.createElement(\"div\");\n  todoInfo.classList.add(\"todo-info\");\n  const todoTitle = document.createElement(\"div\");\n  todoTitle.classList.add(\"title\");\n  todoTitle.textContent = title;\n  const todoDuedate = document.createElement(\"div\");\n  todoDuedate.classList.add(\"duedate\");\n  const duedateColor = document.createElement(\"span\");\n  duedateColor.classList.add(\"todo-detail\");\n  duedateColor.textContent = \"Due date: \";\n  const duedateSpan = document.createElement(\"span\");\n  duedateSpan.textContent = duedate;\n  todoDuedate.append(duedateColor, duedateSpan);\n  const todoPriority = document.createElement(\"div\");\n  todoPriority.classList.add(\"priority\");\n  const priorityColor = document.createElement(\"span\");\n  priorityColor.classList.add(\"todo-detail\");\n  priorityColor.textContent = \"Priority: \";\n  const prioritySpan = document.createElement(\"span\");\n  prioritySpan.textContent = priority;\n  todoPriority.append(priorityColor, prioritySpan);\n  todoInfo.append(todoTitle, todoDuedate, todoPriority);\n  const todoButtons = document.createElement(\"div\");\n  todoButtons.classList.add(\"todo-buttons\");\n  const markComplete = document.createElement(\"button\");\n  markComplete.classList.add(\"mark-complete\");\n  markComplete.textContent = \"✓\";\n  const deleteTodo = document.createElement(\"button\");\n  deleteTodo.classList.add(\"todo-delete\");\n  deleteTodo.textContent = \"✕\";\n  todoButtons.append(markComplete, deleteTodo);\n  todo.append(todoInfo, todoButtons);\n  return todo;\n}\n\nfunction displayTodos() {\n  const array = JSON.parse(localStorage.getItem(\"array\"));\n  const rightContainer = document.querySelector(\".right-container\");\n  removeAllChildNodes(rightContainer);\n  rightContainer.classList.add(\"right-container\");\n  for (let i = 0; i < array.length; i++) {\n    if (array[i].selected == true && array[i].todos.length != 0) {\n      const todosList = array[i].todos;\n      for (let j = 0; j < todosList.length; j++) {\n        const [title, duedate, priority] = [\n          todosList[j].title,\n          todosList[j].duedate,\n          todosList[j].priority,\n        ];\n        const todo = createTodoContainer(title, duedate, priority);\n        rightContainer.append(todo);\n      }\n      break;\n    } else if (array[i].selected == true && array[i].todos.length == 0) {\n      break;\n    }\n  }\n}\n\nfunction refreshTodoListeners() {\n  const deleteTodoButtons = document.querySelectorAll(\".todo-delete\");\n  deleteTodoButtons.forEach((button) => {\n    button.addEventListener(\"click\", (e) => {\n      (0,_data_manipulation__WEBPACK_IMPORTED_MODULE_0__.deleteTodoStorage)(e);\n      displayTodos();\n    });\n  });\n}\n\nfunction refreshProjectListeners() {\n  const projects = document.querySelectorAll(\".project-title\");\n  projects.forEach((project) => {\n    project.addEventListener(\"click\", (e) => {\n      (0,_data_manipulation__WEBPACK_IMPORTED_MODULE_0__.deselectPreviousProjectStorage)();\n      deselectPreviousProjectDOM();\n      (0,_data_manipulation__WEBPACK_IMPORTED_MODULE_0__.selectProjectStorage)(e);\n      selectProjectDOM();\n      displayTodos();\n      refreshTodoListeners();\n    });\n  });\n  const projectsContainer = document.querySelector(\".project-container\");\n  if (checkForProjectDeleteButton(projectsContainer)) {\n    const deleteProjects = document.querySelectorAll(\".delete-project\");\n    deleteProjects.forEach((project) => {\n      project.addEventListener(\"click\", (e) => {\n        (0,_data_manipulation__WEBPACK_IMPORTED_MODULE_0__.removeProjectFromStorage)(e);\n        displayLocalStorageProjects();\n        if (e.target.previousElementSibling.classList.contains(\"selected\")) {\n          (0,_data_manipulation__WEBPACK_IMPORTED_MODULE_0__.setTodayAsDefaultStorage)();\n          setTodayAsDefaultDOM();\n          displayTodos();\n          refreshProjectListeners();\n          refreshTodoListeners();\n        }\n      });\n    });\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/dom-manipulation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-manipulation */ \"./src/data-manipulation.js\");\n/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-manipulation */ \"./src/dom-manipulation.js\");\n/* eslint-disable quotes */\n\n\n\n(0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.displayLocalStorageProjects)();\n(0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.displayAddButtons)();\n(0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.displayTodos)();\n\nconst projectModal = document.querySelector(\".project-modal\");\nconst addProjectButton = document.querySelector(\".add-project\");\nconst submitProjectButton = document.querySelector(\".submit-button-project\");\nconst closeProjectModal = document.querySelector(\".close-project-modal\");\n\naddProjectButton.addEventListener(\"click\", () => {\n  projectModal.showModal();\n});\n\ncloseProjectModal.addEventListener(\"click\", () => {\n  projectModal.close();\n});\n\nwindow.addEventListener(\"load\", () => {\n  (0,_data_manipulation__WEBPACK_IMPORTED_MODULE_0__.setTodayAsDefaultStorage)();\n  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.setTodayAsDefaultDOM)();\n  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.refreshProjectListeners)();\n  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.refreshTodoListeners)();\n});\n\nsubmitProjectButton.addEventListener(\"click\", () => {\n  (0,_data_manipulation__WEBPACK_IMPORTED_MODULE_0__.addProjectToStorage)();\n  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.displayLocalStorageProjects)();\n  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.refreshProjectListeners)();\n});\n\nconst todoModal = document.querySelector(\".todo-modal\");\nconst submitTodoButton = document.querySelector(\".submit-button-todo\");\nconst addTodoButton = document.querySelector(\".add-todo\");\n\naddTodoButton.addEventListener(\"click\", () => {\n  todoModal.showModal();\n});\n\nsubmitTodoButton.addEventListener(\"click\", () => {\n  (0,_data_manipulation__WEBPACK_IMPORTED_MODULE_0__.addTodoStorage)();\n  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.displayTodos)();\n  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.refreshProjectListeners)();\n  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.refreshTodoListeners)();\n});\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modal-data.js":
/*!***************************!*\
  !*** ./src/modal-data.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProjectModalName\": () => (/* binding */ getProjectModalName),\n/* harmony export */   \"getTodoModalData\": () => (/* binding */ getTodoModalData)\n/* harmony export */ });\n/* eslint-disable eqeqeq */\nfunction getTodoModalData() {\n  const title = document.getElementById(\"title-form\").value;\n  const duedate = document.getElementById(\"duedate-form\").value;\n  const priority = document.getElementById(\"priority-form\").value;\n  const description = document.getElementById(\"description\").value;\n  return {\n    title,\n    duedate,\n    priority,\n    description,\n  };\n}\n\nfunction getProjectModalName() {\n  if (document.getElementById(\"project-name\").value != \"\") {\n    return document.getElementById(\"project-name\").value;\n  }\n  return \"Empty\";\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modal-data.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;