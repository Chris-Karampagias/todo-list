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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Kanit-Black.ttf */ \"./src/fonts/Kanit-Black.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: \\\"Kanit\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n:root {\\n  font-family: \\\"Kanit\\\", sans-serif;\\n  font-size: 24px;\\n}\\n\\nbody {\\n  margin: 0;\\n  padding: 0;\\n  display: flex;\\n  height: 100vh;\\n  overflow: hidden;\\n  position: relative;\\n}\\n\\n.left-container,\\n.right-container {\\n  display: flex;\\n  flex-direction: column;\\n  padding-left: 1rem;\\n  padding-top: 1rem;\\n}\\n\\n.left-container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: space-between;\\n  gap: 1rem;\\n  width: 20%;\\n  height: 100%;\\n  background-color: rgba(128, 128, 128, 0.106);\\n}\\n\\n.project-container {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1.5rem;\\n  height: 90%;\\n  margin-top: 0.5rem;\\n}\\n\\n.project {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n.selected {\\n  border-bottom: 2px solid rgba(0, 0, 0, 0.458);\\n}\\n\\n.delete-project {\\n  font-size: inherit;\\n  border: none;\\n  background-color: inherit;\\n  color: red;\\n  padding: 0;\\n  margin: 0 1rem;\\n}\\n\\n.add-buttons-container {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 1rem;\\n}\\n\\n.add-todo,\\n.add-project,\\n.edit-todo-details {\\n  font-family: inherit;\\n  margin-bottom: 2rem;\\n  width: 50%;\\n  font-size: 0.7rem;\\n  border: 1.5px solid black;\\n  border-radius: 8px;\\n  padding: 0.2rem;\\n  box-shadow: 3px 5px 6px rgba(0, 0, 0, 0.355);\\n  outline: none;\\n}\\n\\n.add-todo {\\n  margin-bottom: 0;\\n}\\n\\n.right-container {\\n  width: 80%;\\n  gap: 0.5rem;\\n}\\n\\n.todo {\\n  background-color: rgba(128, 128, 128, 0.106);\\n  width: 40%;\\n  border-radius: 8px;\\n  display: flex;\\n  justify-content: space-between;\\n  box-shadow: 3px 5px 6px rgba(0, 0, 0, 0.355);\\n}\\n\\n.todo-buttons {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: flex-end;\\n  padding: 0.2rem 0.2rem 0.2rem 0;\\n  width: 30%;\\n  gap: 0.2rem;\\n}\\n\\n.todo-buttons button {\\n  font-size: 70%;\\n  font-family: inherit;\\n  border-radius: 30px;\\n  width: 50px;\\n  padding: 0.5rem 0;\\n}\\n\\n.todo-completed {\\n  color: white;\\n  background-color: green;\\n  border-color: rgba(0, 0, 0, 0);\\n}\\n\\n.todo-delete {\\n  color: white;\\n  background-color: red;\\n  border: none;\\n}\\n\\nh1,\\nh2 {\\n  margin: 0;\\n}\\n\\n.title {\\n  font-size: 1.3rem;\\n  padding-left: 0.2rem;\\n  display: flex;\\n  gap: 0.3rem;\\n}\\n\\n.expand {\\n  background-color: inherit;\\n  font-size: 80%;\\n  border: none;\\n  outline: none;\\n  cursor: pointer;\\n}\\n\\n.duedate,\\n.priority {\\n  font-size: 0.8rem;\\n  padding-left: 0.5rem;\\n}\\n\\n.project-title {\\n  cursor: pointer;\\n}\\n\\n.todo,\\n.add-project,\\n.add-todo,\\n.form div:last-child button,\\n.todo-buttons button,\\n.edit-todo-details,\\n.delete-project {\\n  transition: all 0.2s ease-in-out;\\n  cursor: pointer;\\n}\\n\\n.todo:hover,\\n.add-project:hover,\\n.add-todo:hover,\\n.form div:last-child button:hover,\\n.todo-buttons button:hover,\\n.edit-todo-details:hover,\\n.delete-project:hover {\\n  transform: scale(1.05);\\n}\\n\\n.modal button,\\ninput,\\nselect,\\ntextarea {\\n  font-family: inherit;\\n  font-size: 80%;\\n  width: 50%;\\n  padding: 0.1rem;\\n  margin: 0;\\n  box-sizing: border-box;\\n  border: 0.5px solid black;\\n  background-color: rgba(178, 178, 178, 0.106);\\n  border-radius: 8px;\\n}\\n\\ninput:focus,\\nselect:focus,\\ntextarea:focus {\\n  border: none;\\n  box-shadow: 0 0 10px rgba(157, 157, 157, 0.615);\\n  outline: none;\\n}\\n\\n.modal {\\n  position: fixed;\\n  top: 50%;\\n  bottom: 50%;\\n  border-radius: 8px;\\n}\\n\\n.modal::backdrop {\\n  backdrop-filter: blur(5px);\\n}\\n\\n.form div {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.form div:last-child {\\n  display: flex;\\n  gap: 0.5rem;\\n  margin-top: 0.5rem;\\n}\\n\\ntextarea {\\n  width: 100%;\\n  padding: 0.2rem;\\n  height: 5rem;\\n  color: black;\\n  resize: none;\\n}\\n\\nfieldset {\\n  margin: 0;\\n  padding: 0.5rem;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 0.5rem;\\n}\\n\\n.todo-detail {\\n  color: rgb(36, 176, 207);\\n}\\n\\n.todo-container-expanded {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1rem;\\n}\\n\\n.top-container-expanded {\\n  border-bottom: 2px solid black;\\n}\\n\\n.title-expanded {\\n  font-size: 2rem;\\n}\\n\\n.bottom-container-expanded * {\\n  font-size: 1.2rem;\\n}\\n\\n.todo-buttons-expanded {\\n  display: flex;\\n  justify-content: center;\\n  margin-top: 2rem;\\n}\\n\\n.edit-todo-details {\\n  width: 30%;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/data-manipulation.js":
/*!**********************************!*\
  !*** ./src/data-manipulation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProjectToStorage\": () => (/* binding */ addProjectToStorage),\n/* harmony export */   \"addTodoStorage\": () => (/* binding */ addTodoStorage),\n/* harmony export */   \"changeTodoStatusStorage\": () => (/* binding */ changeTodoStatusStorage),\n/* harmony export */   \"deleteTodoStorage\": () => (/* binding */ deleteTodoStorage),\n/* harmony export */   \"deselectPreviousProjectStorage\": () => (/* binding */ deselectPreviousProjectStorage),\n/* harmony export */   \"getTodoInfo\": () => (/* binding */ getTodoInfo),\n/* harmony export */   \"removeProjectFromStorage\": () => (/* binding */ removeProjectFromStorage),\n/* harmony export */   \"selectProjectStorage\": () => (/* binding */ selectProjectStorage),\n/* harmony export */   \"setTodayAsDefaultStorage\": () => (/* binding */ setTodayAsDefaultStorage),\n/* harmony export */   \"updateTodoStorage\": () => (/* binding */ updateTodoStorage)\n/* harmony export */ });\n/* harmony import */ var _modal_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-data */ \"./src/modal-data.js\");\n/* eslint-disable no-plusplus */\n/* eslint-disable eqeqeq */\n\n\n/* Project data manipulation */\n\nfunction addProjectToStorage() {\n  const projectName = (0,_modal_data__WEBPACK_IMPORTED_MODULE_0__.getProjectModalName)();\n  if (projectName == \"Empty\") return;\n  const array = JSON.parse(localStorage.getItem(\"array\"));\n  const obj = { projectName, selected: false, todos: [] };\n  array.push(obj);\n  const stringified = JSON.stringify(array);\n  localStorage.setItem(\"array\", stringified);\n}\n\nfunction deselectPreviousProjectStorage() {\n  const array = JSON.parse(localStorage.getItem(\"array\"));\n  for (let i = 0; i < array.length; i++) {\n    if (array[i].selected == true) {\n      array[i].selected = false;\n    }\n  }\n  const stringified = JSON.stringify(array);\n  localStorage.setItem(\"array\", stringified);\n}\n\nfunction selectProjectStorage(e) {\n  const name = e.target.textContent;\n  const array = JSON.parse(localStorage.getItem(\"array\"));\n  for (let i = 0; i < array.length; i++) {\n    if (array[i].projectName == name) {\n      array[i].selected = true;\n    }\n  }\n  const stringified = JSON.stringify(array);\n  localStorage.setItem(\"array\", stringified);\n}\n\nfunction setTodayAsDefaultStorage() {\n  const array = JSON.parse(localStorage.getItem(\"array\"));\n  for (let i = 0; i < array.length; i++) {\n    if (array[i].projectName == \"Today\") {\n      array[i].selected = true;\n    }\n    if (array[i].projectName != \"Today\" && array[i].selected == true) {\n      array[i].selected = false;\n    }\n  }\n  const stringified = JSON.stringify(array);\n  localStorage.setItem(\"array\", stringified);\n}\n\nfunction removeProjectFromStorage(e) {\n  const name = e.target.previousElementSibling.textContent;\n  const array = JSON.parse(localStorage.getItem(\"array\"));\n  for (let i = 0; i < array.length; i++) {\n    if (array[i].projectName == name) {\n      array.splice(i, 1);\n    }\n  }\n  const stringified = JSON.stringify(array);\n  localStorage.setItem(\"array\", stringified);\n}\n\n/* Modal data manipulation */\n\nfunction Todo(title, duedate, priority, description) {\n  return { title, duedate, priority, description, completed: false };\n}\n\nfunction createTodo() {\n  const { title, duedateReversed, priority, description } = (0,_modal_data__WEBPACK_IMPORTED_MODULE_0__.getTodoModalData)();\n  const todoObj = Todo(title, duedateReversed, priority, description);\n  return todoObj;\n}\n\nfunction addTodoStorage() {\n  const todo = createTodo();\n  const array = JSON.parse(localStorage.getItem(\"array\"));\n  for (let i = 0; i < array.length; i++) {\n    if (array[i].selected == true) {\n      array[i].todos.push(todo);\n    }\n  }\n  const stringified = JSON.stringify(array);\n  localStorage.setItem(\"array\", stringified);\n}\n\nfunction deleteTodoStorage(e) {\n  let element = e.target.parentElement;\n  while (!element.classList.contains(\"todo-info\")) {\n    element = element.previousElementSibling;\n  }\n  const name = element.firstElementChild.firstElementChild.textContent;\n  const array = JSON.parse(localStorage.getItem(\"array\"));\n  for (let i = 0; i < array.length; i++) {\n    if (array[i].selected == true) {\n      const todosList = array[i].todos;\n      for (let j = 0; j < todosList.length; j++) {\n        if (todosList[j].title == name) {\n          todosList.splice(j, 1);\n        }\n      }\n    }\n  }\n  const stringified = JSON.stringify(array);\n  localStorage.setItem(\"array\", stringified);\n}\n\nfunction changeTodoStatusStorage(e) {\n  let element = e.target.parentElement;\n  while (!element.classList.contains(\"todo-info\")) {\n    element = element.previousElementSibling;\n  }\n  const name = element.firstElementChild.firstElementChild.textContent;\n  const array = JSON.parse(localStorage.getItem(\"array\"));\n  for (let i = 0; i < array.length; i++) {\n    if (array[i].selected == true) {\n      const todosList = array[i].todos;\n      for (let j = 0; j < todosList.length; j++) {\n        if (todosList[j].title == name && todosList[j].completed == false) {\n          todosList[j].completed = true;\n          break;\n        } else if (\n          todosList[j].title == name &&\n          todosList[j].completed == true\n        ) {\n          todosList[j].completed = false;\n        }\n      }\n      break;\n    }\n  }\n  const stringified = JSON.stringify(array);\n  localStorage.setItem(\"array\", stringified);\n}\n\nfunction getTodoInfo(name) {\n  const array = JSON.parse(localStorage.getItem(\"array\"));\n  for (let i = 0; i < array.length; i++) {\n    if (array[i].selected == true && array[i].todos.length != 0) {\n      const todosList = array[i].todos;\n      for (let j = 0; j < todosList.length; j++) {\n        if (todosList[j].title == name) {\n          const [todoDuedate, todoPriority, todoDescription, todoCompleted] = [\n            todosList[j].duedate,\n            todosList[j].priority,\n            todosList[j].description,\n            todosList[j].completed,\n          ];\n          return [todoDuedate, todoPriority, todoDescription, todoCompleted];\n        }\n      }\n    }\n  }\n}\n\nfunction updateTodoStorage() {\n  const title = document.querySelector(\".title-expanded\").textContent;\n  const { duedateReversed, priority, description } = (0,_modal_data__WEBPACK_IMPORTED_MODULE_0__.getEditedTodoModalData)();\n  const array = JSON.parse(localStorage.getItem(\"array\"));\n  for (let i = 0; i < array.length; i++) {\n    if (array[i].selected == true && array[i].todos.length != 0) {\n      const todosList = array[i].todos;\n      for (let j = 0; j < todosList.length; j++) {\n        if (todosList[j].title == title) {\n          todosList[j].duedate = duedateReversed;\n          todosList[j].priority = priority;\n          todosList[j].description = description;\n          break;\n        }\n      }\n      break;\n    }\n  }\n  const stringified = JSON.stringify(array);\n  localStorage.setItem(\"array\", stringified);\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/data-manipulation.js?");

/***/ }),

/***/ "./src/dom-manipulation.js":
/*!*********************************!*\
  !*** ./src/dom-manipulation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayAddButtons\": () => (/* binding */ displayAddButtons),\n/* harmony export */   \"displayLocalStorageProjects\": () => (/* binding */ displayLocalStorageProjects),\n/* harmony export */   \"displayTodos\": () => (/* binding */ displayTodos),\n/* harmony export */   \"expandTodo\": () => (/* binding */ expandTodo),\n/* harmony export */   \"findSelectedProjectName\": () => (/* binding */ findSelectedProjectName),\n/* harmony export */   \"populateTodoModalEdit\": () => (/* binding */ populateTodoModalEdit),\n/* harmony export */   \"refreshProjectListeners\": () => (/* binding */ refreshProjectListeners),\n/* harmony export */   \"refreshTodoListeners\": () => (/* binding */ refreshTodoListeners),\n/* harmony export */   \"removeProjectFromDOM\": () => (/* binding */ removeProjectFromDOM),\n/* harmony export */   \"setTodayAsDefaultDOM\": () => (/* binding */ setTodayAsDefaultDOM)\n/* harmony export */ });\n/* harmony import */ var _data_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-manipulation */ \"./src/data-manipulation.js\");\n/* harmony import */ var _modal_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-data */ \"./src/modal-data.js\");\n/* eslint-disable no-restricted-syntax */\n/* eslint-disable no-plusplus */\n/* eslint-disable eqeqeq */\n/* eslint-disable no-else-return */\n/* eslint-disable dot-notation */\n\n\n\n\nfunction removeAllChildNodes(parent) {\n  while (\n    parent.firstElementChild &&\n    !parent.firstElementChild.classList.contains(\"add-buttons-container\")\n  ) {\n    parent.removeChild(parent.firstElementChild);\n  }\n}\n\nfunction selectProjectDOM() {\n  const projects = [...document.querySelectorAll(\".project-title\")];\n  const array = JSON.parse(localStorage.getItem(\"array\"));\n  for (let i = 0; i < projects.length; i++) {\n    if (\n      array[i].projectName == projects[i].textContent &&\n      array[i].selected == true\n    ) {\n      projects[i].classList.add(\"selected\");\n    }\n  }\n}\n\nfunction displayLocalStorageProjects() {\n  const leftContainer = document.querySelector(\".left-container\");\n  removeAllChildNodes(leftContainer);\n  const projectContainer = document.createElement(\"div\");\n  projectContainer.classList.add(\"project-container\");\n  for (const value of JSON.parse(Object.values(localStorage))) {\n    const project = document.createElement(\"div\");\n    project.classList.add(\"project\");\n    const projectTitle = document.createElement(\"div\");\n    projectTitle.classList.add(\"project-title\");\n    projectTitle.textContent = value.projectName;\n    project.append(projectTitle);\n    if (\n      value.projectName !== \"Today\" &&\n      value.projectName !== \"Anytime\" &&\n      value.projectName !== \"Upcoming\"\n    ) {\n      const deleteProjectButton = document.createElement(\"button\");\n      deleteProjectButton.classList.add(\"delete-project\");\n      deleteProjectButton.textContent = \"✕\";\n      project.append(deleteProjectButton);\n    }\n    projectContainer.append(project);\n  }\n  leftContainer.prepend(projectContainer);\n  selectProjectDOM();\n}\n\nfunction displayAddButtons() {\n  const leftContainer = document.querySelector(\".left-container\");\n  const addButtonsContainer = document.createElement(\"div\");\n  addButtonsContainer.classList.add(\"add-buttons-container\");\n  const addTodo = document.createElement(\"button\");\n  addTodo.classList.add(\"add-todo\");\n  addTodo.textContent = \"Add Todo\";\n  const addProject = document.createElement(\"button\");\n  addProject.classList.add(\"add-project\");\n  addProject.textContent = \"Add Project\";\n  addButtonsContainer.append(addTodo, addProject);\n  leftContainer.append(addButtonsContainer);\n}\n\nfunction findSelectedProjectName() {\n  let name;\n  const projects = document.querySelectorAll(\".project-name\");\n  projects.forEach((project) => {\n    if (project.classList.contains(\"selected\")) {\n      name = project.firstElementChild.textContent;\n    }\n  });\n  return name;\n}\n\nfunction deselectPreviousProjectDOM() {\n  const projects = document.querySelectorAll(\".project-title\");\n  projects.forEach((project) => {\n    if (project.classList.contains(\"selected\")) {\n      project.classList.remove(\"selected\");\n    }\n  });\n}\n\nfunction removeTodosFromDOM() {\n  const rightContainer = document.querySelector(\".right-container\");\n  removeAllChildNodes(rightContainer);\n}\n\nfunction removeProjectFromDOM(e) {\n  const projectContainer = document.querySelector(\".project-container\");\n  projectContainer.removeChild(e.target.parentElement);\n  if (e.target.previousElementSibling.classList.contains(\"selected\")) {\n    removeTodosFromDOM();\n  }\n}\n\nfunction checkForProjectDeleteButton(element) {\n  if (\n    element.contains(document.querySelector(\".delete-project\")) ||\n    element.contains(document.querySelector(\".todo-delete\"))\n  ) {\n    return true;\n  }\n  return false;\n}\n\nfunction setTodayAsDefaultDOM() {\n  deselectPreviousProjectDOM();\n  const projects = [...document.querySelectorAll(\".project-title\")];\n  const array = JSON.parse(localStorage.getItem(\"array\"));\n  for (let i = 0; i < projects.length; i++) {\n    if (array[i].selected == true) {\n      projects[i].classList.add(\"selected\");\n    }\n  }\n}\n\nfunction createTodoContainer(title, duedate, priority, completed) {\n  const todo = document.createElement(\"div\");\n  todo.classList.add(\"todo\");\n  const todoInfo = document.createElement(\"div\");\n  todoInfo.classList.add(\"todo-info\");\n  const todoTitleContainer = document.createElement(\"div\");\n  todoTitleContainer.classList.add(\"title\");\n  const todoTitle = document.createElement(\"div\");\n  todoTitle.textContent = title;\n  const expandButton = document.createElement(\"button\");\n  expandButton.classList.add(\"expand\");\n  expandButton.textContent = \"▼\";\n  todoTitleContainer.append(todoTitle, expandButton);\n  const todoDuedate = document.createElement(\"div\");\n  todoDuedate.classList.add(\"duedate\");\n  const duedateColor = document.createElement(\"span\");\n  duedateColor.classList.add(\"todo-detail\");\n  duedateColor.textContent = \"Due date: \";\n  const duedateSpan = document.createElement(\"span\");\n  duedateSpan.textContent = duedate;\n  todoDuedate.append(duedateColor, duedateSpan);\n  const todoPriority = document.createElement(\"div\");\n  todoPriority.classList.add(\"priority\");\n  const priorityColor = document.createElement(\"span\");\n  priorityColor.classList.add(\"todo-detail\");\n  priorityColor.textContent = \"Priority: \";\n  const prioritySpan = document.createElement(\"span\");\n  prioritySpan.textContent = priority;\n  todoPriority.append(priorityColor, prioritySpan);\n  todoInfo.append(todoTitleContainer, todoDuedate, todoPriority);\n  const todoButtons = document.createElement(\"div\");\n  todoButtons.classList.add(\"todo-buttons\");\n  const markComplete = document.createElement(\"button\");\n  markComplete.classList.add(\"mark-complete\");\n  markComplete.textContent = \"✓\";\n  if (completed == true) {\n    markComplete.classList.add(\"todo-completed\");\n  }\n  const deleteTodo = document.createElement(\"button\");\n  deleteTodo.classList.add(\"todo-delete\");\n  deleteTodo.textContent = \"✕\";\n  todoButtons.append(markComplete, deleteTodo);\n  todo.append(todoInfo, todoButtons);\n  return todo;\n}\n\nfunction displayTodos() {\n  const array = JSON.parse(localStorage.getItem(\"array\"));\n  const rightContainer = document.querySelector(\".right-container\");\n  removeAllChildNodes(rightContainer);\n  for (let i = 0; i < array.length; i++) {\n    if (array[i].selected == true && array[i].todos.length != 0) {\n      const todosList = array[i].todos;\n      for (let j = 0; j < todosList.length; j++) {\n        const [todoTitle, todoDuedate, todoPriority, todoCompleted] = [\n          todosList[j].title,\n          todosList[j].duedate,\n          todosList[j].priority,\n          todosList[j].completed,\n        ];\n        const todo = createTodoContainer(\n          todoTitle,\n          todoDuedate,\n          todoPriority,\n          todoCompleted\n        );\n        rightContainer.append(todo);\n      }\n      break;\n    } else if (array[i].selected == true && array[i].todos.length == 0) {\n      break;\n    }\n  }\n}\n\nfunction createExpandedTodoContainer(title, duedate, priority, description) {\n  const todoContainer = document.createElement(\"div\");\n  todoContainer.classList.add(\"todo-container-expanded\");\n  const topContainer = document.createElement(\"div\");\n  topContainer.classList.add(\"top-container-expanded\");\n  const todoTitle = document.createElement(\"div\");\n  todoTitle.classList.add(\"title-expanded\");\n  todoTitle.textContent = title;\n  topContainer.append(todoTitle);\n  const bottomContainer = document.createElement(\"div\");\n  bottomContainer.classList.add(\"bottom-container-expanded\");\n  const duedateContainer = document.createElement(\"div\");\n  duedateContainer.classList.add(\"duedate-expanded\");\n  const duedateColor = document.createElement(\"span\");\n  duedateColor.classList.add(\"todo-detail\");\n  duedateColor.textContent = \"Due date: \";\n  const duedateSpan = document.createElement(\"span\");\n  duedateSpan.textContent = duedate;\n  duedateContainer.append(duedateColor, duedateSpan);\n  const priorityContainer = document.createElement(\"div\");\n  priorityContainer.classList.add(\"priority-expanded\");\n  const priorityColor = document.createElement(\"span\");\n  priorityColor.classList.add(\"todo-detail\");\n  priorityColor.textContent = \"Priority: \";\n  const prioritySpan = document.createElement(\"span\");\n  prioritySpan.textContent = priority;\n  priorityContainer.append(priorityColor, prioritySpan);\n  const descriptionContainer = document.createElement(\"div\");\n  descriptionContainer.classList.add(\"description\");\n  const descriptionColor = document.createElement(\"span\");\n  descriptionColor.classList.add(\"todo-detail\");\n  descriptionColor.textContent = \"Description: \";\n  const descriptionSpan = document.createElement(\"span\");\n  descriptionSpan.textContent = description;\n  descriptionContainer.append(descriptionColor, descriptionSpan);\n  const editTodoContainer = document.createElement(\"div\");\n  editTodoContainer.classList.add(\"todo-buttons-expanded\");\n  const editTodo = document.createElement(\"button\");\n  editTodo.classList.add(\"edit-todo-details\");\n  editTodo.textContent = \"Edit Todo\";\n  editTodoContainer.append(editTodo);\n  bottomContainer.append(\n    duedateContainer,\n    priorityContainer,\n    descriptionContainer,\n    editTodoContainer\n  );\n  todoContainer.append(topContainer, bottomContainer);\n  return todoContainer;\n}\n\nfunction expandTodo(e) {\n  const array = JSON.parse(localStorage.getItem(\"array\"));\n  const rightContainer = document.querySelector(\".right-container\");\n  for (let i = 0; i < array.length; i++) {\n    if (array[i].selected == true && array[i].todos.length != 0) {\n      const todosList = array[i].todos;\n      for (let j = 0; j < todosList.length; j++) {\n        if (todosList[j].title == e.target.previousElementSibling.textContent) {\n          const [todoTitle, todoDuedate, todoPriority, todoDescription] = [\n            todosList[j].title,\n            todosList[j].duedate,\n            todosList[j].priority,\n            todosList[j].description,\n          ];\n          const expandedTodo = createExpandedTodoContainer(\n            todoTitle,\n            todoDuedate,\n            todoPriority,\n            todoDescription\n          );\n          removeAllChildNodes(rightContainer);\n          rightContainer.append(expandedTodo);\n          break;\n        }\n      }\n    }\n  }\n}\n\nfunction expandTodoAfterEdit() {\n  const { duedateReversed, priority, description } = (0,_modal_data__WEBPACK_IMPORTED_MODULE_1__.getEditedTodoModalData)();\n  const rightContainer = document.querySelector(\".right-container\");\n  const title = document.querySelector(\".title-expanded\").textContent;\n  const expandedTodo = createExpandedTodoContainer(\n    title,\n    duedateReversed,\n    priority,\n    description\n  );\n  removeAllChildNodes(rightContainer);\n  rightContainer.append(expandedTodo);\n}\n\nfunction populateTodoModalEdit() {\n  const name = document.querySelector(\".title-expanded\").textContent;\n  const [duedate, priority, description] = (0,_data_manipulation__WEBPACK_IMPORTED_MODULE_0__.getTodoInfo)(name);\n  const formatedDuedate = (0,_modal_data__WEBPACK_IMPORTED_MODULE_1__.reverseDate)(duedate);\n  const modalDuedate = document.getElementById(\"duedate-form-edited\");\n  const modalPriority = document.getElementById(\"priority-form-edited\");\n  const modalDescription = document.getElementById(\"description-edited\");\n  modalDuedate.value = formatedDuedate;\n  modalPriority.value = priority;\n  modalDescription.value = description;\n}\n\nfunction refreshTodoDelete() {\n  const deleteTodoButtons = document.querySelectorAll(\".todo-delete\");\n  deleteTodoButtons.forEach((button) => {\n    button.addEventListener(\"click\", (e) => {\n      (0,_data_manipulation__WEBPACK_IMPORTED_MODULE_0__.deleteTodoStorage)(e);\n      displayTodos();\n      refreshTodoListeners();\n    });\n  });\n}\n\nfunction refreshTodoExpandEdit() {\n  const todoModalEdit = document.querySelector(\".todo-modal-edit\");\n  const submitEditedTodoButton = document.querySelector(\".update-button-todo\");\n  const closeEditedTodoModal = document.querySelector(\".close-todo-modal-edit\");\n  const expandButtons = document.querySelectorAll(\".expand\");\n  expandButtons.forEach((button) => {\n    button.addEventListener(\"click\", (e) => {\n      expandTodo(e);\n      const editButton = document.querySelector(\".edit-todo-details\");\n      editButton.addEventListener(\"click\", () => {\n        todoModalEdit.showModal();\n        populateTodoModalEdit();\n      });\n    });\n  });\n  submitEditedTodoButton.addEventListener(\"click\", () => {\n    (0,_data_manipulation__WEBPACK_IMPORTED_MODULE_0__.updateTodoStorage)();\n    expandTodoAfterEdit();\n    refreshTodoListeners();\n  });\n  closeEditedTodoModal.addEventListener(\"click\", () => {\n    todoModalEdit.close();\n  });\n}\n\nfunction refreshTodoComplete() {\n  const markCompleteButtons = document.querySelectorAll(\".mark-complete\");\n  markCompleteButtons.forEach((button) => {\n    button.addEventListener(\"click\", (e) => {\n      (0,_data_manipulation__WEBPACK_IMPORTED_MODULE_0__.changeTodoStatusStorage)(e);\n      displayTodos();\n      refreshTodoListeners();\n    });\n  });\n}\n\nfunction refreshTodoListeners() {\n  refreshTodoDelete();\n  refreshTodoExpandEdit();\n  refreshTodoComplete();\n}\n\nfunction refreshProjectListeners() {\n  const projects = document.querySelectorAll(\".project-title\");\n  projects.forEach((project) => {\n    project.addEventListener(\"click\", (e) => {\n      (0,_data_manipulation__WEBPACK_IMPORTED_MODULE_0__.deselectPreviousProjectStorage)();\n      deselectPreviousProjectDOM();\n      (0,_data_manipulation__WEBPACK_IMPORTED_MODULE_0__.selectProjectStorage)(e);\n      selectProjectDOM();\n      displayTodos();\n      refreshTodoListeners();\n    });\n  });\n  const projectsContainer = document.querySelector(\".project-container\");\n  if (checkForProjectDeleteButton(projectsContainer)) {\n    const deleteProjects = document.querySelectorAll(\".delete-project\");\n    deleteProjects.forEach((project) => {\n      project.addEventListener(\"click\", (e) => {\n        (0,_data_manipulation__WEBPACK_IMPORTED_MODULE_0__.removeProjectFromStorage)(e);\n        displayLocalStorageProjects();\n        if (e.target.previousElementSibling.classList.contains(\"selected\")) {\n          /* If the project being deleted is currently selected then go back to the default project, else stay on the selected project */\n          (0,_data_manipulation__WEBPACK_IMPORTED_MODULE_0__.setTodayAsDefaultStorage)();\n          setTodayAsDefaultDOM();\n        }\n        displayTodos();\n        refreshProjectListeners();\n        refreshTodoListeners();\n      });\n    });\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/dom-manipulation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-manipulation */ \"./src/data-manipulation.js\");\n/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-manipulation */ \"./src/dom-manipulation.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* eslint-disable quotes */\n\n\n\n\n\nfunction addProjectManually(name) {\n  const projectName = name;\n  const array = JSON.parse(localStorage.getItem(\"array\"));\n  const obj = { projectName, selected: false, todos: [] };\n  array.push(obj);\n  const stringified = JSON.stringify(array);\n  localStorage.setItem(\"array\", stringified);\n}\n\nif (localStorage.length == 0) {\n  localStorage.setItem(\"array\", \"[]\");\n  addProjectManually(\"Today\");\n  addProjectManually(\"Upcoming\");\n  addProjectManually(\"Anytime\");\n}\n\n(0,_data_manipulation__WEBPACK_IMPORTED_MODULE_0__.setTodayAsDefaultStorage)();\n(0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.displayLocalStorageProjects)();\n(0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.displayAddButtons)();\n(0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.setTodayAsDefaultDOM)();\n(0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.displayTodos)();\n(0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.refreshProjectListeners)();\n(0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.refreshTodoListeners)();\n\nconst projectModal = document.querySelector(\".project-modal\");\nconst addProjectButton = document.querySelector(\".add-project\");\nconst submitProjectButton = document.querySelector(\".submit-button-project\");\nconst closeProjectModal = document.querySelector(\".close-project-modal\");\n\naddProjectButton.addEventListener(\"click\", () => {\n  projectModal.showModal();\n});\n\ncloseProjectModal.addEventListener(\"click\", () => {\n  projectModal.close();\n});\n\nsubmitProjectButton.addEventListener(\"click\", () => {\n  (0,_data_manipulation__WEBPACK_IMPORTED_MODULE_0__.addProjectToStorage)();\n  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.displayLocalStorageProjects)();\n  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.refreshProjectListeners)();\n});\n\nconst todoModal = document.querySelector(\".todo-modal\");\nconst submitTodoButton = document.querySelector(\".submit-button-todo\");\nconst closeTodoModal = document.querySelector(\".close-todo-modal\");\nconst addTodoButton = document.querySelector(\".add-todo\");\n\naddTodoButton.addEventListener(\"click\", () => {\n  todoModal.showModal();\n});\n\nsubmitTodoButton.addEventListener(\"click\", () => {\n  (0,_data_manipulation__WEBPACK_IMPORTED_MODULE_0__.addTodoStorage)();\n  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.displayTodos)();\n  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.refreshProjectListeners)();\n  (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_1__.refreshTodoListeners)();\n});\n\ncloseTodoModal.addEventListener(\"click\", () => {\n  todoModal.close();\n});\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modal-data.js":
/*!***************************!*\
  !*** ./src/modal-data.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getEditedTodoModalData\": () => (/* binding */ getEditedTodoModalData),\n/* harmony export */   \"getProjectModalName\": () => (/* binding */ getProjectModalName),\n/* harmony export */   \"getTodoModalData\": () => (/* binding */ getTodoModalData),\n/* harmony export */   \"reverseDate\": () => (/* binding */ reverseDate)\n/* harmony export */ });\n/* eslint-disable eqeqeq */\n\nfunction reverseDate(date) {\n  const array = date.split(\"-\");\n  array.reverse();\n  const reversedDate = array.join(\"-\");\n  return reversedDate;\n}\n\nfunction getTodoModalData() {\n  const title = document.getElementById(\"title-form\").value;\n  const duedate = document.getElementById(\"duedate-form\").value;\n  const duedateReversed = reverseDate(duedate);\n  const priority = document.getElementById(\"priority-form\").value;\n  const description = document.getElementById(\"description\").value;\n  return {\n    title,\n    duedateReversed,\n    priority,\n    description,\n  };\n}\n\nfunction getEditedTodoModalData() {\n  const duedate = document.getElementById(\"duedate-form-edited\").value;\n  const duedateReversed = reverseDate(duedate);\n  const priority = document.getElementById(\"priority-form-edited\").value;\n  const description = document.getElementById(\"description-edited\").value;\n  return {\n    duedateReversed,\n    priority,\n    description,\n  };\n}\n\nfunction getProjectModalName() {\n  if (document.getElementById(\"project-name\").value != \"\") {\n    return document.getElementById(\"project-name\").value;\n  }\n  return \"Empty\";\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modal-data.js?");

/***/ }),

/***/ "./src/fonts/Kanit-Black.ttf":
/*!***********************************!*\
  !*** ./src/fonts/Kanit-Black.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fonts/Kanit-Black.ttf\";\n\n//# sourceURL=webpack://todo-list/./src/fonts/Kanit-Black.ttf?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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