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

/***/ "./js/modules/CellDrawing.js":
/*!***********************************!*\
  !*** ./js/modules/CellDrawing.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CellDrawing)\n/* harmony export */ });\n/* harmony import */ var _BasicSettings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasicSettings.js */ \"./js/modules/BasicSettings.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nvar CellDrawing = /*#__PURE__*/function (_BasicSettings) {\n  _inherits(CellDrawing, _BasicSettings);\n  var _super = _createSuper(CellDrawing);\n  function CellDrawing() {\n    var _this;\n    _classCallCheck(this, CellDrawing);\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n    _this = _super.call.apply(_super, [this].concat(args));\n    _defineProperty(_assertThisInitialized(_this), \"basicSettings\", new _BasicSettings_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]());\n    _defineProperty(_assertThisInitialized(_this), \"cellSize\", _this.basicSettings.cellSize);\n    _defineProperty(_assertThisInitialized(_this), \"center\", _this.basicSettings.center);\n    _defineProperty(_assertThisInitialized(_this), \"space\", _this.basicSettings.space);\n    _defineProperty(_assertThisInitialized(_this), \"bordRad\", _this.basicSettings.bordRad);\n    _defineProperty(_assertThisInitialized(_this), \"speed\", _this.basicSettings.speed);\n    _defineProperty(_assertThisInitialized(_this), \"toDrawTheCell\", function (elem, ctx) {\n      var cellColor = _this.chooseCellColor(elem.num);\n      ctx.fillStyle = cellColor;\n      _this.drawTheRoundedCorners(elem, ctx);\n      var textColor = _this.chooseTextColor(elem.num);\n      ctx.fillStyle = textColor;\n      var fontSize = _this.chooseFontSize(elem.num);\n      ctx.font = \"bold \".concat(fontSize, \" clear sans\");\n      ctx.textAlign = \"center\";\n      ctx.textBaseline = \"middle\";\n      ctx.fillText(String(elem.num), elem.x + _this.center, elem.y + _this.center + 4);\n    });\n    _defineProperty(_assertThisInitialized(_this), \"drawTheRoundedCorners\", function (elem, ctx) {\n      ctx.beginPath();\n      ctx.moveTo(elem.x + _this.bordRad, elem.y);\n      ctx.lineTo(elem.x + _this.cellSize - _this.bordRad, elem.y);\n      ctx.arc(elem.x + _this.cellSize - _this.bordRad, elem.y + _this.bordRad, _this.bordRad, Math.PI * 1.5, 0);\n      ctx.lineTo(elem.x + _this.cellSize, elem.y + _this.cellSize - _this.bordRad);\n      ctx.arc(elem.x + _this.cellSize - _this.bordRad, elem.y + _this.cellSize - _this.bordRad, _this.bordRad, 0, Math.PI * 0.5);\n      ctx.lineTo(elem.x + _this.bordRad, elem.y + _this.cellSize);\n      ctx.arc(elem.x + _this.bordRad, elem.y + _this.cellSize - _this.bordRad, _this.bordRad, Math.PI * 0.5, Math.PI);\n      ctx.lineTo(elem.x, elem.y + _this.bordRad);\n      ctx.arc(elem.x + _this.bordRad, elem.y + _this.bordRad, _this.bordRad, Math.PI, Math.PI * 1.5);\n      ctx.closePath();\n      ctx.fill();\n    });\n    _defineProperty(_assertThisInitialized(_this), \"chooseCellColor\", function (num) {\n      var color;\n      switch (num) {\n        case 0:\n          color = \"#CDC1B4\";\n          break;\n        case 2:\n          color = \"#EEE4DA\";\n          break;\n        case 4:\n          color = \"#EDE0C8\";\n          break;\n        case 8:\n          color = \"#f2b179\";\n          break;\n        case 16:\n          color = \"#F59563\";\n          break;\n        case 32:\n          color = \"#F67C5F\";\n          break;\n        case 64:\n          color = \"#F65E3B\";\n          break;\n        case 128:\n          color = \"#EDCF72\";\n          break;\n        case 256:\n          color = \"#EDCC61\";\n          break;\n        case 512:\n          color = \"#EDC850\";\n          break;\n        case 1024:\n          color = \"#EDC53F\";\n          break;\n        case 2048:\n          color = \"#EDC22E\";\n          break;\n        default:\n          color = \"#CDC1B4\";\n      }\n      ;\n      return color;\n    });\n    _defineProperty(_assertThisInitialized(_this), \"chooseTextColor\", function (num) {\n      var color;\n      switch (num) {\n        case 0:\n          color = \"#CDC1B4\";\n          break;\n        case 2:\n          color = \"#776E65\";\n          break;\n        case 4:\n          color = \"#776E65\";\n          break;\n        case 8:\n          color = \"#f9f6f2\";\n          break;\n        default:\n          color = \"#f9f6f2\";\n      }\n      ;\n      return color;\n    });\n    _defineProperty(_assertThisInitialized(_this), \"chooseFontSize\", function (num) {\n      var fontSize = \"56px\";\n      if (num < 128) {\n        fontSize = \"56px\";\n      }\n      ;\n      if (num >= 128) {\n        fontSize = \"43px\";\n      }\n      ;\n      if (num >= 1024) {\n        fontSize = \"33px\";\n      }\n      ;\n      return fontSize;\n    });\n    return _this;\n  }\n  return _createClass(CellDrawing);\n}(_BasicSettings_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n;\n\n//# sourceURL=webpack:///./js/modules/CellDrawing.js?");

/***/ }),

/***/ "./js/modules/main.js":
/*!****************************!*\
  !*** ./js/modules/main.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BasicSettings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasicSettings.js */ \"./js/modules/BasicSettings.js\");\n/* harmony import */ var _CellDrawing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CellDrawing.js */ \"./js/modules/CellDrawing.js\");\n\n\nvar cellDrawing = new _CellDrawing_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nvar toDrawTheCell = cellDrawing.toDrawTheCell;\nvar basicSettings = new _BasicSettings_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nvar cellSize = basicSettings.cellSize;\nvar center = basicSettings.center;\nvar space = basicSettings.space;\nvar bordRad = basicSettings.bordRad;\nvar speed = basicSettings.speed;\nvar data = [\n// first row\ncreateCellObject(space, space, 0),\n// 0\ncreateCellObject(cellSize + space * 2, space, 0),\n//1\ncreateCellObject(cellSize * 2 + space * 3, space, 0),\n//2\ncreateCellObject(cellSize * 3 + space * 4, space, 0),\n//3\n// second row\ncreateCellObject(space, cellSize + space * 2, 2),\n//4\ncreateCellObject(cellSize + space * 2, cellSize + space * 2, 0),\n//5\ncreateCellObject(cellSize * 2 + space * 3, cellSize + space * 2, 0),\n//6\ncreateCellObject(cellSize * 3 + space * 4, cellSize + space * 2, 0),\n//7\n// third row\ncreateCellObject(space, cellSize * 2 + space * 3, 0),\n//8\ncreateCellObject(cellSize + space * 2, cellSize * 2 + space * 3, 0),\n//9\ncreateCellObject(cellSize * 2 + space * 3, cellSize * 2 + space * 3, 0),\n//10\ncreateCellObject(cellSize * 3 + space * 4, cellSize * 2 + space * 3, 0),\n//11\n// fourth row\ncreateCellObject(space, cellSize * 3 + space * 4, 0),\n//12\ncreateCellObject(cellSize + space * 2, cellSize * 3 + space * 4, 0),\n//13\ncreateCellObject(cellSize * 2 + space * 3, cellSize * 3 + space * 4, 0),\n//14\ncreateCellObject(cellSize * 3 + space * 4, cellSize * 3 + space * 4, 0) //15\n];\n\nfunction createCellObject(x, y, num) {\n  return {\n    x: x,\n    y: y,\n    num: num,\n    merged: false\n  };\n}\n;\n\n//# sourceURL=webpack:///./js/modules/main.js?");

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