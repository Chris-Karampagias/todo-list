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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProjectToStorage\": () => (/* binding */ addProjectToStorage)\n/* harmony export */ });\n/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manipulation */ \"./src/dom-manipulation.js\");\n\n\nfunction addProjectToStorage() {\n  const projectName = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.getProjectModalName)();\n  localStorage.setItem(projectName, \"[]\");\n}\n\nclass Todo {\n  constructor(title, duedate, priority, description) {\n    this.title = title;\n    this.duedate = duedate;\n    this.priority = priority;\n    this.description = description;\n  }\n}\n\nfunction createTodo() {\n  const { title, duedate, priority, description } = (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_0__.getTodoModalData)();\n  const todoObj = new Todo(title, duedate, priority, description);\n  return todoObj;\n}\n\n/* Need to get back to this one after I figure out how to get the currently selected project */\n/* function addTodoToStorage(){\n    const todo = createTodo(); \n\n} */\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/data-manipulation.js?");

/***/ }),

/***/ "./src/dom-manipulation.js":
/*!*********************************!*\
  !*** ./src/dom-manipulation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayLocalStorageProjects\": () => (/* binding */ displayLocalStorageProjects),\n/* harmony export */   \"getProjectModalName\": () => (/* binding */ getProjectModalName),\n/* harmony export */   \"getTodoModalData\": () => (/* binding */ getTodoModalData)\n/* harmony export */ });\nfunction getTodoModalData() {\n  const title = document.getElementById(\"title-form\").value;\n  const dueDate = document.getElementById(\"duedate-form\").value;\n  const priority = document.getElementById(\"priority-form\").value;\n  const description = document.getElementById(\"priority-form\").value;\n  return {\n    title,\n    dueDate,\n    priority,\n    description,\n  };\n}\n\nfunction getProjectModalName() {\n  return document.getElementById(\"project-name\").value;\n}\n\nfunction displayLocalStorageProjects() {\n  const leftContainer = document.querySelector(\".left-container\");\n  const projectContainer = document.createElement(\"div\");\n  projectContainer.classList.add(\"project-container\");\n  for (const key of Object.keys(localStorage)) {\n    const project = document.createElement(\"div\");\n    project.classList.add(\"project\");\n    const projectTitle = document.createElement(\"div\");\n    projectTitle.classList.add(\"project-title\");\n    projectTitle.textContent = key;\n    project.append(projectTitle);\n    if (key != \"Today\" && key != \"Anytime\" && key != \"Upcoming\") {\n      const deleteProjectButton = document.createElement(\"button\");\n      deleteProjectButton.classList.add(\"delete-project\");\n      deleteProjectButton.textContent = \"✕\";\n      project.append(deleteProjectButton);\n    }\n    projectContainer.append(project);\n    leftContainer.prepend(projectContainer);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/dom-manipulation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-manipulation */ \"./src/data-manipulation.js\");\n/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-manipulation */ \"./src/dom-manipulation.js\");\n/* eslint-disable quotes */\n\n\n\nconst projectModal = document.querySelector(\".project-modal\");\nconst addProjectButton = document.querySelector(\".add-project\");\nconst submitProjectButton = document.querySelector(\".submit-button-project\");\naddProjectButton.addEventListener(\"click\", () => {\n  projectModal.showModal();\n});\n\nsubmitProjectButton.addEventListener(\"click\", _data_manipulation__WEBPACK_IMPORTED_MODULE_0__.addProjectToStorage);\n/* const todoModal = document.querySelector(\".todo-modal\");\nconst submitTodoButton = document.querySelector(\".submit-button-todo\");\nconst addTodoButton = document.querySelector(\".add-todo\");\naddTodoButton.addEventListener(\"click\", () => {\n  todoModal.showModal();\n});\n\nsubmitTodoButton.addEventListener(\"click\", getTodoModalData); */\n\n(0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.displayLocalStorageProjects)();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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