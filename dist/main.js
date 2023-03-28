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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProjectToStorage\": () => (/* binding */ addProjectToStorage),\n/* harmony export */   \"removeProjectFromStorage\": () => (/* binding */ removeProjectFromStorage)\n/* harmony export */ });\n/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manipulation */ \"./src/dom-manipulation.js\");\n\n\nfunction addProjectToStorage() {\n  const projectName = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.getProjectModalName)();\n  const array = JSON.parse(localStorage.getItem(\"array\"));\n  const obj = { projectName };\n  array.push(obj);\n  const stringified = JSON.stringify(array);\n  localStorage.setItem(\"array\", stringified);\n}\n\nclass Todo {\n  constructor(title, duedate, priority, description) {\n    this.title = title;\n    this.duedate = duedate;\n    this.priority = priority;\n    this.description = description;\n  }\n}\n\nfunction createTodo() {\n  const { title, duedate, priority, description } = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.getTodoModalData)();\n  const todoObj = new Todo(title, duedate, priority, description);\n  return todoObj;\n}\n\nfunction removeProjectFromStorage(e) {\n  const name = e.target.previousElementSibling.textContent;\n  const array = JSON.parse(localStorage.getItem(\"array\"));\n  for (let i = 0; i < array.length; i++) {\n    if (array[i].projectName == name) {\n      array.splice(i, 1);\n    }\n  }\n  const stringified = JSON.stringify(array);\n  localStorage.setItem(\"array\", stringified);\n}\n\n/* Need to get back to this one after I figure out how to get the currently selected project */\n/* function addTodoToStorage(){\n    const todo = createTodo(); \n\n} */\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/data-manipulation.js?");

/***/ }),

/***/ "./src/dom-manipulation.js":
/*!*********************************!*\
  !*** ./src/dom-manipulation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkForDeleteButton\": () => (/* binding */ checkForDeleteButton),\n/* harmony export */   \"displayAddButtons\": () => (/* binding */ displayAddButtons),\n/* harmony export */   \"displayLocalStorageProjects\": () => (/* binding */ displayLocalStorageProjects),\n/* harmony export */   \"findSelectedProjectName\": () => (/* binding */ findSelectedProjectName),\n/* harmony export */   \"getProjectModalName\": () => (/* binding */ getProjectModalName),\n/* harmony export */   \"getTodoModalData\": () => (/* binding */ getTodoModalData),\n/* harmony export */   \"refreshProjectListeners\": () => (/* binding */ refreshProjectListeners),\n/* harmony export */   \"removeProjectFromDOM\": () => (/* binding */ removeProjectFromDOM)\n/* harmony export */ });\n/* harmony import */ var _data_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-manipulation */ \"./src/data-manipulation.js\");\n/* eslint-disable dot-notation */\n\n\nfunction getTodoModalData() {\n  const title = document.getElementById(\"title-form\").value;\n  const dueDate = document.getElementById(\"duedate-form\").value;\n  const priority = document.getElementById(\"priority-form\").value;\n  const description = document.getElementById(\"priority-form\").value;\n  return {\n    title,\n    dueDate,\n    priority,\n    description,\n  };\n}\n\nfunction getProjectModalName() {\n  return document.getElementById(\"project-name\").value;\n}\n\nfunction displayLocalStorageProjects() {\n  const leftContainer = document.querySelector(\".left-container\");\n  removeAllChildNodes(leftContainer);\n  const projectContainer = document.createElement(\"div\");\n  projectContainer.classList.add(\"project-container\");\n  for (const value of JSON.parse(Object.values(localStorage))) {\n    const project = document.createElement(\"div\");\n    project.classList.add(\"project\");\n    const projectTitle = document.createElement(\"div\");\n    projectTitle.classList.add(\"project-title\");\n    projectTitle.textContent = value.projectName;\n    project.append(projectTitle);\n    if (\n      value.projectName !== \"Today\" &&\n      value.projectName !== \"Anytime\" &&\n      value.projectName !== \"Upcoming\"\n    ) {\n      const deleteProjectButton = document.createElement(\"button\");\n      deleteProjectButton.classList.add(\"delete-project\");\n      deleteProjectButton.textContent = \"✕\";\n      project.append(deleteProjectButton);\n    }\n    projectContainer.append(project);\n  }\n  leftContainer.prepend(projectContainer);\n}\n\nfunction displayAddButtons() {\n  const leftContainer = document.querySelector(\".left-container\");\n  const addButtonsContainer = document.createElement(\"add-buttons-container\");\n  addButtonsContainer.classList.add(\"add-buttons-container\");\n  const addTodo = document.createElement(\"button\");\n  addTodo.classList.add(\"add-todo\");\n  addTodo.textContent = \"Add Todo\";\n  const addProject = document.createElement(\"button\");\n  addProject.classList.add(\"add-project\");\n  addProject.textContent = \"Add Project\";\n  addButtonsContainer.append(addTodo, addProject);\n  leftContainer.append(addButtonsContainer);\n}\n\nfunction findSelectedProjectName() {\n  let name;\n  const projects = document.querySelectorAll(\".project\");\n  projects.forEach((project) => {\n    if (project.classList.contains(\"selected\")) {\n      name = project.firstElementChild.textContent;\n    }\n  });\n  return name;\n}\n\nfunction deselectPreviousProject() {\n  const projects = document.querySelectorAll(\".project-title\");\n  projects.forEach((project) => {\n    if (project.classList.contains(\"selected\")) {\n      project.classList.remove(\"selected\");\n    }\n  });\n}\n\nfunction selectProject(e) {\n  e.target.classList.toggle(\"selected\");\n}\n\nfunction removeProjectFromDOM(e) {\n  const projectContainer = document.querySelector(\".project-container\");\n  projectContainer.removeChild(e.target.parentElement);\n}\n\nfunction removeAllChildNodes(parent) {\n  while (\n    parent.firstElementChild &&\n    !parent.firstElementChild.classList.contains(\"add-buttons-container\")\n  ) {\n    parent.removeChild(parent.firstElementChild);\n  }\n}\n\nfunction checkForDeleteButton(element) {\n  if (\n    element.contains(document.querySelector(\".delete-project\")) ||\n    element.contains(document.querySelector(\".todo-delete\"))\n  ) {\n    return true;\n  }\n  return false;\n}\n\nfunction refreshProjectListeners() {\n  const projects = document.querySelectorAll(\".project-title\");\n  projects.forEach((project) => {\n    project.addEventListener(\"click\", (e) => {\n      deselectPreviousProject();\n      selectProject(e);\n    });\n  });\n  const projectsContainer = document.querySelector(\".project-container\");\n  if (checkForDeleteButton(projectsContainer)) {\n    const deleteProjects = document.querySelectorAll(\".delete-project\");\n    deleteProjects.forEach((project) => {\n      project.addEventListener(\"click\", (e) => {\n        removeProjectFromDOM(e);\n        (0,_data_manipulation__WEBPACK_IMPORTED_MODULE_0__.removeProjectFromStorage)(e);\n      });\n    });\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/dom-manipulation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-manipulation */ \"./src/data-manipulation.js\");\n/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-manipulation */ \"./src/dom-manipulation.js\");\n/* eslint-disable quotes */\n\n\n\n(0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.displayLocalStorageProjects)();\n(0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.displayAddButtons)();\n\nconst projectModal = document.querySelector(\".project-modal\");\nconst addProjectButton = document.querySelector(\".add-project\");\nconst submitProjectButton = document.querySelector(\".submit-button-project\");\naddProjectButton.addEventListener(\"click\", () => {\n  projectModal.showModal();\n});\n\nwindow.addEventListener(\"load\", () => {\n  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.refreshProjectListeners)();\n});\n\nsubmitProjectButton.addEventListener(\"click\", () => {\n  (0,_data_manipulation__WEBPACK_IMPORTED_MODULE_0__.addProjectToStorage)();\n  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.displayLocalStorageProjects)();\n  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.refreshProjectListeners)();\n});\n\n/* const todoModal = document.querySelector(\".todo-modal\");\nconst submitTodoButton = document.querySelector(\".submit-button-todo\");\nconst addTodoButton = document.querySelector(\".add-todo\");\naddTodoButton.addEventListener(\"click\", () => {\n  todoModal.showModal();\n});\n\nsubmitTodoButton.addEventListener(\"click\", getTodoModalData); */\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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