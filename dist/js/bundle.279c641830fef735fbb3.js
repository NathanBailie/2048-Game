/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scss/styles.scss":
/*!**************************!*\
  !*** ./scss/styles.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/styles.scss?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/styles.scss */ \"./scss/styles.scss\");\n/* harmony import */ var _modules_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/main.js */ \"./js/modules/main.js\");\n\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/modules/BasicSettings.js":
/*!*************************************!*\
  !*** ./js/modules/BasicSettings.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BasicSettings)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar BasicSettings = /*#__PURE__*/_createClass(function BasicSettings() {\n  _classCallCheck(this, BasicSettings);\n  _defineProperty(this, \"cellSize\", 110);\n  _defineProperty(this, \"center\", this.cellSize / 2);\n  _defineProperty(this, \"space\", 12);\n  _defineProperty(this, \"bordRad\", 10);\n  _defineProperty(this, \"speed\", 10);\n});\n\n;\n\n//# sourceURL=webpack:///./js/modules/BasicSettings.js?");

/***/ }),

/***/ "./js/modules/CellCleaning.js":
/*!************************************!*\
  !*** ./js/modules/CellCleaning.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CellCleaning)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar CellCleaning = /*#__PURE__*/_createClass(function CellCleaning() {\n  _classCallCheck(this, CellCleaning);\n  _defineProperty(this, \"clearTheColumns\", function (ctx, colNumber, cellSize, space, data, toDrawTheCell) {\n    switch (colNumber) {\n      case 1:\n        ctx.clearRect(space, 0, cellSize, cellSize * 4 + space * 5);\n        toDrawTheCell(data[0], ctx);\n        toDrawTheCell(data[4], ctx);\n        toDrawTheCell(data[8], ctx);\n        toDrawTheCell(data[12], ctx);\n        break;\n      case 2:\n        ctx.clearRect(cellSize + space * 2, 0, cellSize, cellSize * 4 + space * 5);\n        toDrawTheCell(data[1], ctx);\n        toDrawTheCell(data[5], ctx);\n        toDrawTheCell(data[9], ctx);\n        toDrawTheCell(data[13], ctx);\n        break;\n      case 3:\n        ctx.clearRect(cellSize * 2 + space * 3, 0, cellSize, cellSize * 4 + space * 5);\n        toDrawTheCell(data[2], ctx);\n        toDrawTheCell(data[6], ctx);\n        toDrawTheCell(data[10], ctx);\n        toDrawTheCell(data[14], ctx);\n        break;\n      case 4:\n        ctx.clearRect(cellSize * 3 + space * 4, 0, cellSize, cellSize * 4 + space * 5);\n        toDrawTheCell(data[3], ctx);\n        toDrawTheCell(data[7], ctx);\n        toDrawTheCell(data[11], ctx);\n        toDrawTheCell(data[15], ctx);\n        break;\n      default:\n        break;\n    }\n    ;\n    switch (colNumber) {\n      case 1:\n        ctx.clearRect(space, 0, cellSize, cellSize * 4 + space * 5);\n        toDrawTheCell(data[0], ctx);\n        toDrawTheCell(data[4], ctx);\n        toDrawTheCell(data[8], ctx);\n        toDrawTheCell(data[12], ctx);\n        break;\n      case 2:\n        ctx.clearRect(cellSize + space * 2, 0, cellSize, cellSize * 4 + space * 5);\n        toDrawTheCell(data[1], ctx);\n        toDrawTheCell(data[5], ctx);\n        toDrawTheCell(data[9], ctx);\n        toDrawTheCell(data[13], ctx);\n        break;\n      case 3:\n        ctx.clearRect(cellSize * 2 + space * 3, 0, cellSize, cellSize * 4 + space * 5);\n        toDrawTheCell(data[2], ctx);\n        toDrawTheCell(data[6], ctx);\n        toDrawTheCell(data[10], ctx);\n        toDrawTheCell(data[14], ctx);\n        break;\n      case 4:\n        ctx.clearRect(cellSize * 3 + space * 4, 0, cellSize, cellSize * 4 + space * 5);\n        toDrawTheCell(data[3], ctx);\n        toDrawTheCell(data[7], ctx);\n        toDrawTheCell(data[11], ctx);\n        toDrawTheCell(data[15], ctx);\n        break;\n      default:\n        break;\n    }\n    ;\n  });\n});\n\n;\n\n//# sourceURL=webpack:///./js/modules/CellCleaning.js?");

/***/ }),

/***/ "./js/modules/CellDrawing.js":
/*!***********************************!*\
  !*** ./js/modules/CellDrawing.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CellDrawing)\n/* harmony export */ });\n/* harmony import */ var _BasicSettings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasicSettings.js */ \"./js/modules/BasicSettings.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nvar CellDrawing = /*#__PURE__*/function (_BasicSettings) {\n  _inherits(CellDrawing, _BasicSettings);\n  var _super = _createSuper(CellDrawing);\n  function CellDrawing() {\n    var _this;\n    _classCallCheck(this, CellDrawing);\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n    _this = _super.call.apply(_super, [this].concat(args));\n    _defineProperty(_assertThisInitialized(_this), \"basicSettings\", new _BasicSettings_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]());\n    _defineProperty(_assertThisInitialized(_this), \"cellSize\", _this.basicSettings.cellSize);\n    _defineProperty(_assertThisInitialized(_this), \"center\", _this.basicSettings.center);\n    _defineProperty(_assertThisInitialized(_this), \"space\", _this.basicSettings.space);\n    _defineProperty(_assertThisInitialized(_this), \"bordRad\", _this.basicSettings.bordRad);\n    _defineProperty(_assertThisInitialized(_this), \"speed\", _this.basicSettings.speed);\n    _defineProperty(_assertThisInitialized(_this), \"toDrawTheCell\", function (elem, ctx) {\n      var cellColor = _this.chooseCellColor(elem.num);\n      ctx.fillStyle = cellColor;\n      _this.drawTheRoundedCorners(elem, ctx);\n      var textColor = _this.chooseTextColor(elem.num);\n      ctx.fillStyle = textColor;\n      var fontSize = _this.chooseFontSize(elem.num);\n      ctx.font = \"bold \".concat(fontSize, \" clear sans\");\n      ctx.textAlign = \"center\";\n      ctx.textBaseline = \"middle\";\n      ctx.fillText(String(elem.num), elem.x + _this.center, elem.y + _this.center + 4);\n    });\n    _defineProperty(_assertThisInitialized(_this), \"drawTheRoundedCorners\", function (elem, ctx) {\n      ctx.beginPath();\n      ctx.moveTo(elem.x + _this.bordRad, elem.y);\n      ctx.lineTo(elem.x + _this.cellSize - _this.bordRad, elem.y);\n      ctx.arc(elem.x + _this.cellSize - _this.bordRad, elem.y + _this.bordRad, _this.bordRad, Math.PI * 1.5, 0);\n      ctx.lineTo(elem.x + _this.cellSize, elem.y + _this.cellSize - _this.bordRad);\n      ctx.arc(elem.x + _this.cellSize - _this.bordRad, elem.y + _this.cellSize - _this.bordRad, _this.bordRad, 0, Math.PI * 0.5);\n      ctx.lineTo(elem.x + _this.bordRad, elem.y + _this.cellSize);\n      ctx.arc(elem.x + _this.bordRad, elem.y + _this.cellSize - _this.bordRad, _this.bordRad, Math.PI * 0.5, Math.PI);\n      ctx.lineTo(elem.x, elem.y + _this.bordRad);\n      ctx.arc(elem.x + _this.bordRad, elem.y + _this.bordRad, _this.bordRad, Math.PI, Math.PI * 1.5);\n      ctx.closePath();\n      ctx.fill();\n    });\n    _defineProperty(_assertThisInitialized(_this), \"chooseCellColor\", function (num) {\n      var color;\n      switch (num) {\n        case 0:\n          color = \"#CDC1B4\";\n          break;\n        case 2:\n          color = \"#EEE4DA\";\n          break;\n        case 4:\n          color = \"#EDE0C8\";\n          break;\n        case 8:\n          color = \"#f2b179\";\n          break;\n        case 16:\n          color = \"#F59563\";\n          break;\n        case 32:\n          color = \"#F67C5F\";\n          break;\n        case 64:\n          color = \"#F65E3B\";\n          break;\n        case 128:\n          color = \"#EDCF72\";\n          break;\n        case 256:\n          color = \"#EDCC61\";\n          break;\n        case 512:\n          color = \"#EDC850\";\n          break;\n        case 1024:\n          color = \"#EDC53F\";\n          break;\n        case 2048:\n          color = \"#EDC22E\";\n          break;\n        default:\n          color = \"#CDC1B4\";\n      }\n      ;\n      return color;\n    });\n    _defineProperty(_assertThisInitialized(_this), \"chooseTextColor\", function (num) {\n      var color;\n      switch (num) {\n        case 0:\n          color = \"#CDC1B4\";\n          break;\n        case 2:\n          color = \"#776E65\";\n          break;\n        case 4:\n          color = \"#776E65\";\n          break;\n        case 8:\n          color = \"#f9f6f2\";\n          break;\n        default:\n          color = \"#f9f6f2\";\n      }\n      ;\n      return color;\n    });\n    _defineProperty(_assertThisInitialized(_this), \"chooseFontSize\", function (num) {\n      var fontSize = \"56px\";\n      if (num < 128) {\n        fontSize = \"56px\";\n      }\n      ;\n      if (num >= 128) {\n        fontSize = \"43px\";\n      }\n      ;\n      if (num >= 1024) {\n        fontSize = \"33px\";\n      }\n      ;\n      return fontSize;\n    });\n    return _this;\n  }\n  return _createClass(CellDrawing);\n}(_BasicSettings_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n;\n\n//# sourceURL=webpack:///./js/modules/CellDrawing.js?");

/***/ }),

/***/ "./js/modules/CellMovement.js":
/*!************************************!*\
  !*** ./js/modules/CellMovement.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CellMovement)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar CellMovement = /*#__PURE__*/function () {\n  function CellMovement() {\n    _classCallCheck(this, CellMovement);\n  }\n  _createClass(CellMovement, [{\n    key: \"moveCellsVertically\",\n    value: function moveCellsVertically(startCopy, targetCopy, speed, animation, playAnimation) {\n      if (startCopy.y < targetCopy.y) {\n        startCopy.y += Math.min(speed, targetCopy.y - startCopy.y);\n        animation = requestAnimationFrame(playAnimation);\n      } else if (startCopy.y > targetCopy.y) {\n        startCopy.y -= Math.min(speed, startCopy.y - targetCopy.y);\n        animation = requestAnimationFrame(playAnimation);\n      }\n      ;\n    }\n  }]);\n  return CellMovement;\n}();\n\n;\n\n//# sourceURL=webpack:///./js/modules/CellMovement.js?");

/***/ }),

/***/ "./js/modules/MergeDownwards.js":
/*!**************************************!*\
  !*** ./js/modules/MergeDownwards.js ***!
  \**************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ../node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\Nathan\\\\Desktop\\\\Progr\\\\AtWork\\\\2048\\\\src\\\\js\\\\modules\\\\MergeDownwards.js: Unexpected token (86:9)\\n\\n\\u001b[0m \\u001b[90m 84 |\\u001b[39m \\t}\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 85 |\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 86 |\\u001b[39m \\u001b[36mfunction\\u001b[39m moveTheColDown(colNumber\\u001b[33m,\\u001b[39m \\u001b[33m...\\u001b[39margs) {\\u001b[0m\\n\\u001b[0m \\u001b[90m    |\\u001b[39m          \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 87 |\\u001b[39m \\t\\u001b[36mlet\\u001b[39m [data] \\u001b[33m=\\u001b[39m [\\u001b[33m...\\u001b[39margs]\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 88 |\\u001b[39m \\t\\u001b[36mif\\u001b[39m (colNumber \\u001b[33m>\\u001b[39m \\u001b[35m4\\u001b[39m \\u001b[33m||\\u001b[39m colNumber \\u001b[33m<\\u001b[39m \\u001b[35m1\\u001b[39m) {\\u001b[0m\\n\\u001b[0m \\u001b[90m 89 |\\u001b[39m \\t\\t\\u001b[36mthrow\\u001b[39m \\u001b[36mnew\\u001b[39m \\u001b[33mError\\u001b[39m(\\u001b[32m'Wrong row number, please choose from 1 to 4'\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at instantiate (C:\\\\Users\\\\Nathan\\\\Desktop\\\\Progr\\\\AtWork\\\\2048\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:653:32)\\n    at constructor (C:\\\\Users\\\\Nathan\\\\Desktop\\\\Progr\\\\AtWork\\\\2048\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:947:12)\\n    at Parser.raise (C:\\\\Users\\\\Nathan\\\\Desktop\\\\Progr\\\\AtWork\\\\2048\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3271:19)\\n    at Parser.unexpected (C:\\\\Users\\\\Nathan\\\\Desktop\\\\Progr\\\\AtWork\\\\2048\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3301:16)\\n    at Parser.parseClassMemberWithIsStatic (C:\\\\Users\\\\Nathan\\\\Desktop\\\\Progr\\\\AtWork\\\\2048\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13498:12)\\n    at Parser.parseClassMember (C:\\\\Users\\\\Nathan\\\\Desktop\\\\Progr\\\\AtWork\\\\2048\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13386:10)\\n    at C:\\\\Users\\\\Nathan\\\\Desktop\\\\Progr\\\\AtWork\\\\2048\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13336:14\\n    at Parser.withSmartMixTopicForbiddingContext (C:\\\\Users\\\\Nathan\\\\Desktop\\\\Progr\\\\AtWork\\\\2048\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12242:14)\\n    at Parser.parseClassBody (C:\\\\Users\\\\Nathan\\\\Desktop\\\\Progr\\\\AtWork\\\\2048\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13316:10)\\n    at Parser.parseClass (C:\\\\Users\\\\Nathan\\\\Desktop\\\\Progr\\\\AtWork\\\\2048\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13294:22)\\n    at Parser.parseExportDefaultExpression (C:\\\\Users\\\\Nathan\\\\Desktop\\\\Progr\\\\AtWork\\\\2048\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13756:19)\\n    at Parser.parseExport (C:\\\\Users\\\\Nathan\\\\Desktop\\\\Progr\\\\AtWork\\\\2048\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13676:25)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\Nathan\\\\Desktop\\\\Progr\\\\AtWork\\\\2048\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12669:27)\\n    at Parser.parseStatementLike (C:\\\\Users\\\\Nathan\\\\Desktop\\\\Progr\\\\AtWork\\\\2048\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12557:17)\\n    at Parser.parseModuleItem (C:\\\\Users\\\\Nathan\\\\Desktop\\\\Progr\\\\AtWork\\\\2048\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12534:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\Users\\\\Nathan\\\\Desktop\\\\Progr\\\\AtWork\\\\2048\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13129:36)\\n    at Parser.parseBlockBody (C:\\\\Users\\\\Nathan\\\\Desktop\\\\Progr\\\\AtWork\\\\2048\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13122:10)\\n    at Parser.parseProgram (C:\\\\Users\\\\Nathan\\\\Desktop\\\\Progr\\\\AtWork\\\\2048\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12445:10)\\n    at Parser.parseTopLevel (C:\\\\Users\\\\Nathan\\\\Desktop\\\\Progr\\\\AtWork\\\\2048\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12435:25)\\n    at Parser.parse (C:\\\\Users\\\\Nathan\\\\Desktop\\\\Progr\\\\AtWork\\\\2048\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:14258:10)\\n    at parse (C:\\\\Users\\\\Nathan\\\\Desktop\\\\Progr\\\\AtWork\\\\2048\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:14299:38)\\n    at parser (C:\\\\Users\\\\Nathan\\\\Desktop\\\\Progr\\\\AtWork\\\\2048\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\parser\\\\index.js:41:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (C:\\\\Users\\\\Nathan\\\\Desktop\\\\Progr\\\\AtWork\\\\2048\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:64:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (C:\\\\Users\\\\Nathan\\\\Desktop\\\\Progr\\\\AtWork\\\\2048\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:21:50)\\n    at run.next (<anonymous>)\\n    at transform (C:\\\\Users\\\\Nathan\\\\Desktop\\\\Progr\\\\AtWork\\\\2048\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transform.js:22:41)\\n    at transform.next (<anonymous>)\\n    at step (C:\\\\Users\\\\Nathan\\\\Desktop\\\\Progr\\\\AtWork\\\\2048\\\\node_modules\\\\gensync\\\\index.js:261:32)\\n    at C:\\\\Users\\\\Nathan\\\\Desktop\\\\Progr\\\\AtWork\\\\2048\\\\node_modules\\\\gensync\\\\index.js:273:13\\n    at async.call.result.err.err (C:\\\\Users\\\\Nathan\\\\Desktop\\\\Progr\\\\AtWork\\\\2048\\\\node_modules\\\\gensync\\\\index.js:223:11)\");\n\n//# sourceURL=webpack:///./js/modules/MergeDownwards.js?");

/***/ }),

/***/ "./js/modules/main.js":
/*!****************************!*\
  !*** ./js/modules/main.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BasicSettings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasicSettings.js */ \"./js/modules/BasicSettings.js\");\n/* harmony import */ var _CellDrawing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CellDrawing.js */ \"./js/modules/CellDrawing.js\");\n/* harmony import */ var _CellCleaning_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CellCleaning.js */ \"./js/modules/CellCleaning.js\");\n/* harmony import */ var _CellMovement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CellMovement.js */ \"./js/modules/CellMovement.js\");\n/* harmony import */ var _MergeDownwards_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MergeDownwards.js */ \"./js/modules/MergeDownwards.js\");\n\n\n\n\n\nvar canvas = document.querySelector('canvas');\nvar ctx = canvas.getContext('2d');\nvar cellDrawing = new _CellDrawing_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nvar toDrawTheCell = cellDrawing.toDrawTheCell;\nvar basicSettings = new _BasicSettings_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nvar cellSize = basicSettings.cellSize;\nvar center = basicSettings.center;\nvar space = basicSettings.space;\nvar bordRad = basicSettings.bordRad;\nvar speed = basicSettings.speed;\nvar cellCleaning = new _CellCleaning_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nvar clearTheColumns = cellCleaning.clearTheColumns;\nvar mergeDownwards = new _MergeDownwards_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\nvar moveAllCellsDown = mergeDownwards.moveAllCellsDown;\nvar data = [\n// first row\ncreateCellObject(space, space, 0), createCellObject(cellSize + space * 2, space, 0), createCellObject(cellSize * 2 + space * 3, space, 0), createCellObject(cellSize * 3 + space * 4, space, 0),\n// second row\ncreateCellObject(space, cellSize + space * 2, 0), createCellObject(cellSize + space * 2, cellSize + space * 2, 0), createCellObject(cellSize * 2 + space * 3, cellSize + space * 2, 0), createCellObject(cellSize * 3 + space * 4, cellSize + space * 2, 0),\n// third row\ncreateCellObject(space, cellSize * 2 + space * 3, 0), createCellObject(cellSize + space * 2, cellSize * 2 + space * 3, 0), createCellObject(cellSize * 2 + space * 3, cellSize * 2 + space * 3, 0), createCellObject(cellSize * 3 + space * 4, cellSize * 2 + space * 3, 0),\n// fourth row\ncreateCellObject(space, cellSize * 3 + space * 4, 0), createCellObject(cellSize + space * 2, cellSize * 3 + space * 4, 0), createCellObject(cellSize * 2 + space * 3, cellSize * 3 + space * 4, 0), createCellObject(cellSize * 3 + space * 4, cellSize * 3 + space * 4, 0)];\nvar animationPlaying = false;\ndata[0].num = 2; // 0\ndata[1].num = 2; // 1\ndata[2].num = 2; // 2\ndata[3].num = 2; // 3\ndata[4].num = 2; // 4\ndata[5].num = 2; // 5\ndata[6].num = 2; // 6\ndata[7].num = 0; // 7\ndata[8].num = 2; // 8\ndata[9].num = 2; // 9\ndata[10].num = 4; // 10\ndata[11].num = 2; // 11\ndata[12].num = 2; // 12\ndata[13].num = 4; // 13\ndata[14].num = 4; // 14\ndata[15].num = 0; // 15\n\nfunction createCellObject(x, y, num) {\n  return {\n    x: x,\n    y: y,\n    num: num,\n    merged: false\n  };\n}\n;\ntoDrawTheBoard();\nfunction toDrawTheBoard() {\n  for (var _i = 0, _data = data; _i < _data.length; _i++) {\n    var elem = _data[_i];\n    toDrawTheCell(elem, ctx);\n  }\n  ;\n}\n;\n\n// !\n// function moveTheColDown(colNumber, ...args) {\n// \tlet [data] = [...args];\n// \tif (colNumber > 4 || colNumber < 1) {\n// \t\tthrow new Error('Wrong row number, please choose from 1 to 4');\n// \t};\n\n// \tlet index = 8 + colNumber - 1;\n\n// \tmergeDown(data[index], colNumber, ...args,\n// \t\t() => {\n// \t\t\tmergeDown(data[index - 4], colNumber, ...args,\n// \t\t\t\t() => {\n// \t\t\t\t\tmergeDown(data[index - 8], colNumber, ...args,\n// \t\t\t\t\t\t() => { zeroyingMergeValue(data); animationPlaying = false; }\n// \t\t\t\t\t)\n// \t\t\t\t})\n// \t\t});\n// };\n\n// function moveAllCellsDown(...args) {\n// \tif (!animationPlaying) {\n// \t\tanimationPlaying = true;\n// \t\tmoveTheColDown(1, ...args);\n// \t\tmoveTheColDown(2, ...args);\n// \t\tmoveTheColDown(3, ...args);\n// \t\tmoveTheColDown(4, ...args);\n// \t};\n// };\n\nwindow.addEventListener('keydown', function (e) {\n  var args = [data, ctx, cellSize, space, speed, toDrawTheCell, clearTheColumns];\n  if (e.key === 'ArrowDown') {\n    moveAllCellsDown.apply(void 0, [animationPlaying].concat(args));\n  }\n});\n\n//# sourceURL=webpack:///./js/modules/main.js?");

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