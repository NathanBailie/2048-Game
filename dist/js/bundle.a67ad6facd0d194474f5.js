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

/***/ "./scss/styles.scss":
/*!**************************!*\
  !*** ./scss/styles.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/styles.scss?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/styles.scss */ \"./scss/styles.scss\");\n/* harmony import */ var _modules_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/main.js */ \"./js/modules/main.js\");\n\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/modules/main.js":
/*!****************************!*\
  !*** ./js/modules/main.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './BasicSettings'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\nvar cellSize = 110;\nvar center = cellSize / 2;\nvar space = 12;\nvar bordRad = 10;\nvar speed = 10;\n\n// basicSettings = new BasicSettings();\n\n// cellSize = basicSettings.cellSize;\n// center = basicSettings.center;\n// space = basicSettings.space;\n// bordRad = basicSettings.bordRad;\n// speed = basicSettings.speed;\n\nvar data = [\n// first row\ncreateCellObject(space, space, 0),\n// 0\ncreateCellObject(cellSize + space * 2, space, 0),\n//1\ncreateCellObject(cellSize * 2 + space * 3, space, 0),\n//2\ncreateCellObject(cellSize * 3 + space * 4, space, 0),\n//3\n// second row\ncreateCellObject(space, cellSize + space * 2, 2),\n//4\ncreateCellObject(cellSize + space * 2, cellSize + space * 2, 0),\n//5\ncreateCellObject(cellSize * 2 + space * 3, cellSize + space * 2, 0),\n//6\ncreateCellObject(cellSize * 3 + space * 4, cellSize + space * 2, 0),\n//7\n// third row\ncreateCellObject(space, cellSize * 2 + space * 3, 0),\n//8\ncreateCellObject(cellSize + space * 2, cellSize * 2 + space * 3, 0),\n//9\ncreateCellObject(cellSize * 2 + space * 3, cellSize * 2 + space * 3, 0),\n//10\ncreateCellObject(cellSize * 3 + space * 4, cellSize * 2 + space * 3, 0),\n//11\n// fourth row\ncreateCellObject(space, cellSize * 3 + space * 4, 0),\n//12\ncreateCellObject(cellSize + space * 2, cellSize * 3 + space * 4, 0),\n//13\ncreateCellObject(cellSize * 2 + space * 3, cellSize * 3 + space * 4, 0),\n//14\ncreateCellObject(cellSize * 3 + space * 4, cellSize * 3 + space * 4, 0) //15\n];\n\nfunction createCellObject(x, y, num) {\n  return {\n    x: x,\n    y: y,\n    num: num,\n    merged: false\n  };\n}\n;\nconsole.log(data);\n\n//# sourceURL=webpack:///./js/modules/main.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;