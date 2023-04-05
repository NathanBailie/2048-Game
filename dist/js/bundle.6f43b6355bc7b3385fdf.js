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

/***/ "./js/modules/BasicSettings.js":
/*!*************************************!*\
  !*** ./js/modules/BasicSettings.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BasicSettings)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar BasicSettings = /*#__PURE__*/_createClass(function BasicSettings() {\n  _classCallCheck(this, BasicSettings);\n  _defineProperty(this, \"cellSize\", 110);\n  _defineProperty(this, \"center\", this.cellSize / 2);\n  _defineProperty(this, \"space\", 12);\n  _defineProperty(this, \"bordRad\", 10);\n  _defineProperty(this, \"speed\", 10);\n});\n\n;\n\n//# sourceURL=webpack:///./js/modules/BasicSettings.js?");

/***/ }),

/***/ "./js/modules/main.js":
/*!****************************!*\
  !*** ./js/modules/main.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BasicSettings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasicSettings.js */ \"./js/modules/BasicSettings.js\");\n\nvar basicSettings = new _BasicSettings_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nvar cellSize = basicSettings.cellSize;\nvar center = basicSettings.center;\nvar space = basicSettings.space;\nvar bordRad = basicSettings.bordRad;\nvar speed = basicSettings.speed;\nvar data = [\n// first row\ncreateCellObject(space, space, 0),\n// 0\ncreateCellObject(cellSize + space * 2, space, 0),\n//1\ncreateCellObject(cellSize * 2 + space * 3, space, 0),\n//2\ncreateCellObject(cellSize * 3 + space * 4, space, 0),\n//3\n// second row\ncreateCellObject(space, cellSize + space * 2, 2),\n//4\ncreateCellObject(cellSize + space * 2, cellSize + space * 2, 0),\n//5\ncreateCellObject(cellSize * 2 + space * 3, cellSize + space * 2, 0),\n//6\ncreateCellObject(cellSize * 3 + space * 4, cellSize + space * 2, 0),\n//7\n// third row\ncreateCellObject(space, cellSize * 2 + space * 3, 0),\n//8\ncreateCellObject(cellSize + space * 2, cellSize * 2 + space * 3, 0),\n//9\ncreateCellObject(cellSize * 2 + space * 3, cellSize * 2 + space * 3, 0),\n//10\ncreateCellObject(cellSize * 3 + space * 4, cellSize * 2 + space * 3, 0),\n//11\n// fourth row\ncreateCellObject(space, cellSize * 3 + space * 4, 0),\n//12\ncreateCellObject(cellSize + space * 2, cellSize * 3 + space * 4, 0),\n//13\ncreateCellObject(cellSize * 2 + space * 3, cellSize * 3 + space * 4, 0),\n//14\ncreateCellObject(cellSize * 3 + space * 4, cellSize * 3 + space * 4, 0) //15\n];\n\nfunction createCellObject(x, y, num) {\n  return {\n    x: x,\n    y: y,\n    num: num,\n    merged: false\n  };\n}\n;\n\n//# sourceURL=webpack:///./js/modules/main.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;