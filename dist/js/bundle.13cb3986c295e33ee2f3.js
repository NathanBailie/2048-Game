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

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './BasicSettings'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './CellDrawing'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './CellCleaning'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './CellMovement'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\n\n\n\nvar canvas = document.querySelector('canvas');\nvar ctx = canvas.getContext('2d');\nvar cellDrawing = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './CellDrawing'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\nvar toDrawTheCell = cellDrawing.toDrawTheCell;\nvar basicSettings = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './BasicSettings'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\nvar cellSize = basicSettings.cellSize;\nvar center = basicSettings.center;\nvar space = basicSettings.space;\nvar bordRad = basicSettings.bordRad;\nvar speed = basicSettings.speed;\nvar cellCleaning = new Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './CellCleaning'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\nvar clearTheColumns = cellCleaning.clearTheColumns;\nvar data = [\n// first row\ncreateCellObject(space, space, 0), createCellObject(cellSize + space * 2, space, 0), createCellObject(cellSize * 2 + space * 3, space, 0), createCellObject(cellSize * 3 + space * 4, space, 0),\n// second row\ncreateCellObject(space, cellSize + space * 2, 0), createCellObject(cellSize + space * 2, cellSize + space * 2, 0), createCellObject(cellSize * 2 + space * 3, cellSize + space * 2, 0), createCellObject(cellSize * 3 + space * 4, cellSize + space * 2, 0),\n// third row\ncreateCellObject(space, cellSize * 2 + space * 3, 0), createCellObject(cellSize + space * 2, cellSize * 2 + space * 3, 0), createCellObject(cellSize * 2 + space * 3, cellSize * 2 + space * 3, 0), createCellObject(cellSize * 3 + space * 4, cellSize * 2 + space * 3, 0),\n// fourth row\ncreateCellObject(space, cellSize * 3 + space * 4, 0), createCellObject(cellSize + space * 2, cellSize * 3 + space * 4, 0), createCellObject(cellSize * 2 + space * 3, cellSize * 3 + space * 4, 0), createCellObject(cellSize * 3 + space * 4, cellSize * 3 + space * 4, 0)];\ndata[0].num = 2; // 0\ndata[1].num = 2; // 1\ndata[2].num = 2; // 2\ndata[3].num = 2; // 3\ndata[4].num = 2; // 4\ndata[5].num = 2; // 5\ndata[6].num = 2; // 6\ndata[7].num = 0; // 7\ndata[8].num = 2; // 8\ndata[9].num = 2; // 9\ndata[10].num = 4; // 10\ndata[11].num = 2; // 11\ndata[12].num = 2; // 12\ndata[13].num = 4; // 13\ndata[14].num = 4; // 14\ndata[15].num = 0; // 15\n\nfunction createCellObject(x, y, num) {\n  return {\n    x: x,\n    y: y,\n    num: num,\n    merged: false\n  };\n}\n;\ntoDrawTheBoard();\nfunction toDrawTheBoard() {\n  for (var _i = 0, _data = data; _i < _data.length; _i++) {\n    var elem = _data[_i];\n    toDrawTheCell(elem, ctx);\n  }\n  ;\n}\n;\nfunction zeroyingMergeValue(data) {\n  var _iterator = _createForOfIteratorHelper(data),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var elem = _step.value;\n      elem.merged = false;\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n  ;\n}\n;\n\n// !\nfunction mergeDown(cell, colNumber, callback) {\n  var index = 4;\n  var spaced = false;\n  var animation;\n  var startCopy = _objectSpread({}, cell);\n  var cellId = data.findIndex(function (elem) {\n    return elem === cell;\n  });\n  var target;\n  var targetCopy;\n  var targetId;\n  if (cell.num !== 0) {\n    while (data[cellId + index].num === 0) {\n      spaced = true;\n      index += 4;\n      if (!data[cellId + index]) {\n        index -= 4;\n        break;\n      }\n      ;\n    }\n    ;\n    if (spaced) {\n      if (data[cellId + index].merged || data[cellId + index].num !== data[cellId].num && data[cellId + index].num !== 0) {\n        target = data[cellId + index - 4];\n      }\n      ;\n      if (!data[cellId + index].merged) {\n        if (data[cellId + index].num === data[cellId].num) {\n          data[cellId + index].merged = true;\n          target = data[cellId + index];\n        } else if (data[cellId + index].num === 0) {\n          target = data[cellId + index];\n        }\n        ;\n      }\n      ;\n    }\n    ;\n    if (!spaced) {\n      if (data[cellId + index].merged || data[cellId].merged || data[cellId + index].num !== data[cellId].num && data[cellId + index].num !== 0) {\n        callback && callback();\n        return;\n      }\n      ;\n      if (!data[cellId + index].merged) {\n        if (data[cellId + index].num === data[cellId].num) {\n          data[cellId + index].merged = true;\n          target = data[cellId + index];\n        } else if (data[cellId + index].num === 0) {\n          target = data[cellId + index];\n        }\n        ;\n      }\n      ;\n    }\n    ;\n  } else {\n    callback && callback();\n    return;\n  }\n  ;\n  targetCopy = _objectSpread({}, target);\n  targetId = data.findIndex(function (elem) {\n    return elem === target;\n  });\n  data[cellId].num = 0;\n  function playAnimation() {\n    clearTheColumns(ctx, colNumber, cellSize, space, data, toDrawTheCell);\n    toDrawTheCell(startCopy, ctx);\n    if (startCopy.y < targetCopy.y) {\n      startCopy.y += Math.min(speed, targetCopy.y - startCopy.y);\n      animation = requestAnimationFrame(playAnimation);\n    } else if (startCopy.y > targetCopy.y) {\n      startCopy.y -= Math.min(speed, startCopy.y - targetCopy.y);\n      animation = requestAnimationFrame(playAnimation);\n    }\n    if (startCopy.y === target.y) {\n      clearTheColumns(ctx, colNumber, cellSize, space, data, toDrawTheCell);\n      data[targetId].num = startCopy.num + targetCopy.num;\n      toDrawTheCell(target, ctx);\n      cancelAnimationFrame(animation);\n      callback && callback();\n    }\n  }\n  playAnimation();\n}\n;\nfunction moveTheColDown(colNumber) {\n  if (colNumber > 4 || colNumber < 1) {\n    throw new Error('Wrong row number, please choose from 1 to 4');\n  }\n  ;\n  var index = 8 + colNumber - 1;\n  mergeDown(data[index], colNumber, function () {\n    mergeDown(data[index - 4], colNumber, function () {\n      mergeDown(data[index - 8], colNumber, function () {\n        zeroyingMergeValue(data);\n      });\n    });\n  });\n}\nfunction moveAllCellsDown() {\n  moveTheColDown(1);\n  moveTheColDown(2);\n  moveTheColDown(3);\n  moveTheColDown(4);\n}\n;\n\n// moveAllCellsDown()\n\nwindow.addEventListener('keydown', function (e) {\n  if (e.key === 'ArrowDown') {\n    moveAllCellsDown();\n  }\n});\n\n//# sourceURL=webpack:///./js/modules/main.js?");

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