(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("SCVConnectorBase", [], factory);
	else if(typeof exports === 'object')
		exports["SCVConnectorBase"] = factory();
	else
		root["SCVConnectorBase"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/construct.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/construct.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _construct)
/* harmony export */ });
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");


function _construct(t, e, r) {
  if ((0,_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_0__["default"])()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__["default"])(p, r.prototype), p;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(e, r, t) {
  return (r = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, e);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isNativeFunction)
/* harmony export */ });
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isNativeReflectConstruct)
/* harmony export */ });
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(t, e) {
  if (e && ("object" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : i + "";
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _wrapNativeSuper)
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isNativeFunction.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js");
/* harmony import */ var _construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./construct.js */ "./node_modules/@babel/runtime/helpers/esm/construct.js");




function _wrapNativeSuper(t) {
  var r = "function" == typeof Map ? new Map() : void 0;
  return _wrapNativeSuper = function _wrapNativeSuper(t) {
    if (null === t || !(0,_isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__["default"])(t)) return t;
    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r) {
      if (r.has(t)) return r.get(t);
      r.set(t, Wrapper);
    }
    function Wrapper() {
      return (0,_construct_js__WEBPACK_IMPORTED_MODULE_3__["default"])(t, arguments, (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this).constructor);
    }
    return Wrapper.prototype = Object.create(t.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Wrapper, t);
  }, _wrapNativeSuper(t);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(o) {
  "@babel/helpers - typeof";

  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/main/baseConnector.js":
/*!***********************************!*\
  !*** ./src/main/baseConnector.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeConnector: () => (/* binding */ initializeConnector),
/* harmony export */   publishError: () => (/* binding */ publishError),
/* harmony export */   publishEvent: () => (/* binding */ publishEvent),
/* harmony export */   publishLog: () => (/* binding */ publishLog)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants.js */ "./src/main/constants.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types */ "./src/main/types.js");
/* harmony import */ var _mosUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mosUtil */ "./src/main/mosUtil.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logger */ "./src/main/logger.js");




/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

/* eslint-disable no-unused-vars */





var channelPort;
var vendorConnector;
var agentAvailable;
var isSupervisorConnected;

/**
 * Gets the error type from the error object
 * @param {object} e Error object representing the error
 */
function getErrorType(e) {
  return e && e.type ? e.type : e;
}

/**
 * Sanitizes the object by removing any PII data
 * @param {object} payload
 */
function sanitizePayload(payload) {
  if (payload) {
    if (typeof payload === 'function') {
      // remove functions from the payload, because they cannot be copied by the postMessage function
      return;
    } else if ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(payload) === 'object') {
      var isArray = Array.isArray(payload);
      var sanitizedPayload = isArray ? [] : {};
      if (isArray) {
        payload.forEach(function (element) {
          sanitizedPayload.push(sanitizePayload(element));
        });
      } else {
        for (var property in payload) {
          if (property !== 'phoneNumber' && property !== 'number' && property !== 'name' && property !== 'callAttributes' && property !== '/reqHvcc/reqTelephonyIntegrationCertificate') {
            sanitizedPayload[property] = sanitizePayload(payload[property]);
          }
        }
      }
      return sanitizedPayload;
    }
  }
  return payload;
}

/**
 * Gets the error message from the error object
 * @param {object} e Error object representing the error
 */
function getErrorMessage(e) {
  return e && e.message ? e.message : e;
}
/** 
 * Dispatch a telephony event log to Salesforce
 * @param {String} eventType event type, i.e. constants.VOICE_EVENT_TYPE.CALL_STARTED
 * @param {Object} payload event payload
 * @param {Boolean} isError error scenario
 */
function dispatchEventLog(eventType, payload, isError) {
  var sanitizedPayload = sanitizePayload(payload);
  var logLevel = isError ? _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].LOG_LEVEL.ERROR : _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].LOG_LEVEL.INFO;
  (0,_logger__WEBPACK_IMPORTED_MODULE_7__.log)({
    eventType: eventType,
    payload: payload
  }, logLevel, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].LOG_SOURCE.SYSTEM);
  channelPort.postMessage({
    type: _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_MESSAGE_TYPE.LOG,
    payload: {
      eventType: eventType,
      payload: sanitizedPayload,
      isError: isError
    }
  });
}
/** 
 * Dispatch a telephony event to Salesforce
 * @param {String} eventType event type, i.e. constants.VOICE_EVENT_TYPE.CALL_STARTED
 * @param {Object} payload event payload
 * @param {Boolean} registerLog optional argument to not register the event
 */
function dispatchEvent(eventType, payload) {
  var registerLog = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  channelPort.postMessage({
    type: _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_MESSAGE_TYPE.TELEPHONY_EVENT_DISPATCHED,
    payload: {
      telephonyEventType: eventType,
      telephonyEventPayload: payload
    }
  });
  if (registerLog) {
    dispatchEventLog(eventType, payload, false);
  }
}

/**
 * Dispatch a telephony integration error to Salesforce
 * @param {constants.VOICE_ERROR_TYPE} errorType Error Type, ex: constants.VOICE_ERROR_TYPE.MICROPHONE_NOT_SHARED
 * @param {object} error Error object representing the error
 * @param {string} eventType The event that caused this error, ex: constants.VOICE_MESSAGE_TYPE.ACCEPT_CALL
 */
function dispatchError(errorType, error, eventType) {
  // eslint-disable-next-line no-console
  console.error("SCV dispatched error ".concat(errorType, " for eventType ").concat(eventType), error);
  dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.ERROR, {
    message: errorType
  }, false);
  dispatchEventLog(eventType, {
    errorType: errorType,
    error: error
  }, true);
}

/**
 * Dispatch a telephony integration error to Salesforce
 * @param {CustomError} error Error object representing the custom error
 * @param {string} eventType The event that caused this error, ex: constants.SHARED_MESSAGE_TYPE.ACCEPT_CALL
 */
function dispatchCustomError(error, eventType) {
  // eslint-disable-next-line no-console
  var payload = {
    customError: {
      labelName: error.labelName,
      namespace: error.namespace,
      message: error.message
    }
  };
  console.error("SCV dispatched custom error for eventType ".concat(eventType), payload);
  dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.ERROR, payload, false);
  dispatchEventLog(eventType, {
    errorType: _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_ERROR_TYPE.CUSTOM_ERROR,
    error: error
  }, true);
}
function dispatchInfo(eventType, payload) {
  // eslint-disable-next-line no-console
  console.info("SCV info message dispatched for eventType ".concat(eventType, " with payload ").concat(JSON.stringify(payload)));
  dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.INFO, {
    message: eventType
  }, false);
  dispatchEventLog(eventType, payload, false);
}

/** 
 * Notify Salesforce that the connector is ready
 */
function setConnectorReady() {
  return _setConnectorReady.apply(this, arguments);
} //TODO: 230 we should convert call object to PhoneCall object
function _setConnectorReady() {
  _setConnectorReady = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
    var _capabilities, telephonyConnector, agentConfigResult, sharedCapabilitiesResult, voiceCapabilitiesResult, activeCallsResult, activeCalls, type, payload;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return vendorConnector.getTelephonyConnector();
        case 3:
          telephonyConnector = _context.sent;
          _context.next = 6;
          return telephonyConnector.getAgentConfig();
        case 6:
          agentConfigResult = _context.sent;
          _context.next = 9;
          return vendorConnector.getSharedCapabilities();
        case 9:
          sharedCapabilitiesResult = _context.sent;
          _context.next = 12;
          return telephonyConnector.getVoiceCapabilities();
        case 12:
          voiceCapabilitiesResult = _context.sent;
          _types__WEBPACK_IMPORTED_MODULE_5__.Validator.validateClassObject(agentConfigResult, _types__WEBPACK_IMPORTED_MODULE_5__.AgentConfigResult);
          _types__WEBPACK_IMPORTED_MODULE_5__.Validator.validateClassObject(voiceCapabilitiesResult, _types__WEBPACK_IMPORTED_MODULE_5__.VoiceCapabilitiesResult);
          if (voiceCapabilitiesResult.supportsMos) {
            (0,_mosUtil__WEBPACK_IMPORTED_MODULE_6__.enableMos)();
          }
          _context.next = 18;
          return telephonyConnector.getActiveCalls();
        case 18:
          activeCallsResult = _context.sent;
          _types__WEBPACK_IMPORTED_MODULE_5__.Validator.validateClassObject(activeCallsResult, _types__WEBPACK_IMPORTED_MODULE_5__.ActiveCallsResult);
          activeCalls = activeCallsResult.activeCalls;
          type = _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_MESSAGE_TYPE.CONNECTOR_READY;
          payload = {
            agentConfig: (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].AGENT_CONFIG_TYPE.PHONES, agentConfigResult.phones), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].AGENT_CONFIG_TYPE.SELECTED_PHONE, agentConfigResult.selectedPhone),
            capabilities: (_capabilities = {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_capabilities, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_CAPABILITIES_TYPE.DEBUG_ENABLED, sharedCapabilitiesResult.debugEnabled), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_CAPABILITIES_TYPE.CONTACT_SEARCH, sharedCapabilitiesResult.hasContactSearch), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_CAPABILITIES_TYPE.VENDOR_PROVIDED_AVAILABILITY, sharedCapabilitiesResult.hasAgentAvailability), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_CAPABILITIES_TYPE.VENDOR_PROVIDED_QUEUE_WAIT_TIME, sharedCapabilitiesResult.hasQueueWaitTime), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_CAPABILITIES_TYPE.TRANSFER_TO_OMNI_FLOW, sharedCapabilitiesResult.hasTransferToOmniFlow), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_CAPABILITIES_TYPE.PENDING_STATUS_CHANGE, sharedCapabilitiesResult.hasPendingStatusChange), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_CAPABILITIES_TYPE.SFDC_PENDING_STATE, sharedCapabilitiesResult.hasSFDCPendingState), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_CAPABILITIES_TYPE.AUTO_ACCEPT_ENABLED, sharedCapabilitiesResult.hasAutoAcceptEnabled), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_CAPABILITIES_TYPE.MUTE, voiceCapabilitiesResult.hasMute), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_CAPABILITIES_TYPE.RECORD, voiceCapabilitiesResult.hasRecord), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_capabilities, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_CAPABILITIES_TYPE.MERGE, voiceCapabilitiesResult.hasMerge), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_CAPABILITIES_TYPE.SWAP, voiceCapabilitiesResult.hasSwap), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_CAPABILITIES_TYPE.BLIND_TRANSFER, voiceCapabilitiesResult.hasBlindTransfer), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_CAPABILITIES_TYPE.SIGNED_RECORDING_URL, voiceCapabilitiesResult.hasSignedRecordingUrl), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_CAPABILITIES_TYPE.SUPERVISOR_LISTEN_IN, voiceCapabilitiesResult.hasSupervisorListenIn), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_CAPABILITIES_TYPE.SUPERVISOR_BARGE_IN, voiceCapabilitiesResult.hasSupervisorBargeIn), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_CAPABILITIES_TYPE.MOS, voiceCapabilitiesResult.supportsMos), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_CAPABILITIES_TYPE.PHONEBOOK, voiceCapabilitiesResult.hasPhoneBook), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_CAPABILITIES_TYPE.HAS_GET_EXTERNAL_SPEAKER, voiceCapabilitiesResult.hasGetExternalSpeakerDeviceSetting), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_CAPABILITIES_TYPE.HAS_SET_EXTERNAL_SPEAKER, voiceCapabilitiesResult.hasSetExternalSpeakerDeviceSetting), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_capabilities, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_CAPABILITIES_TYPE.HAS_GET_EXTERNAL_MICROPHONE, voiceCapabilitiesResult.hasGetExternalMicrophoneDeviceSetting), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_CAPABILITIES_TYPE.HAS_SET_EXTERNAL_MICROPHONE, voiceCapabilitiesResult.hasSetExternalMicrophoneDeviceSetting), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_CAPABILITIES_TYPE.CAN_CONSULT, voiceCapabilitiesResult.canConsult), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_CAPABILITIES_TYPE.DIAL_PAD, voiceCapabilitiesResult.isDialPadDisabled), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_CAPABILITIES_TYPE.HAS_HID_SUPPORT, voiceCapabilitiesResult.isHidSupported), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_CAPABILITIES_TYPE.PHONEBOOK_DISABLE, voiceCapabilitiesResult.isPhoneBookDisabled)),
            callInProgress: activeCalls.length > 0 ? activeCalls[0] : null
          };
          channelPort.postMessage({
            type: type,
            payload: payload
          });
          dispatchEventLog(type, payload, false);
          _context.next = 31;
          break;
        case 27:
          _context.prev = 27;
          _context.t0 = _context["catch"](0);
          // Post CONNECTOR_READY even if getAgentConfig is not implemented
          channelPort.postMessage({
            type: _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_MESSAGE_TYPE.CONNECTOR_READY,
            payload: {}
          });
          dispatchEventLog(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_MESSAGE_TYPE.CONNECTOR_READY, {}, false);
        case 31:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 27]]);
  }));
  return _setConnectorReady.apply(this, arguments);
}
function channelMessageHandler(_x) {
  return _channelMessageHandler.apply(this, arguments);
}
function _channelMessageHandler() {
  _channelMessageHandler = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(message) {
    var eventType, telephonyConnector, hangupPayload, payload, call, _telephonyConnector, _payload, _call, _telephonyConnector2, _payload2, activeCallsResult, activeCalls, calls, _telephonyConnector3, _payload3, _telephonyConnector4, _payload4, _telephonyConnector5, _payload5, _telephonyConnector6, _payload6, statusInfo, enqueueNextState, _payload7, success, isStatusSyncNeeded, _payload8, _telephonyConnector7, isCallback, isConsultCall, _payload9, _call2, _telephonyConnector8, _telephonyConnector9, _payload10, contacts, _payload11, _contacts, _telephonyConnector10, _payload12, _telephonyConnector11, _payload13, _telephonyConnector12, _payload14, _telephonyConnector13, _payload15, _telephonyConnector14, _payload16, _payload17, _success, loginFrameHeight, _telephonyConnector15, _telephonyConnector16, _activeCallsResult, _activeCalls, callId, _call3, shouldReplay, isSupervisorCall, hasSupervisorBargedIn, _telephonyConnector17, result, _telephonyConnector18, _result, _message$data, recordingUrl, vendorCallKey, _callId, _telephonyConnector19, _result2, signedRecordingUrlResult, _message$data2, logLevel, logMessage, _payload18, _telephonyConnector20, _result3, agentConfigResult, _telephonyConnector21, _result4, _telephonyConnector22, _result5, _message$data$agentWo, workItemId, workId, workEvent;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          eventType = message.data.type;
          if (eventType !== _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_MESSAGE_TYPE.LOG) {
            dispatchEventLog(eventType, message.data, false);
          }
          _context2.t0 = eventType;
          _context2.next = _context2.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.ACCEPT_CALL ? 5 : _context2.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.DECLINE_CALL ? 32 : _context2.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.END_CALL ? 48 : _context2.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.MUTE ? 69 : _context2.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.UNMUTE ? 83 : _context2.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.HOLD ? 97 : _context2.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.RESUME ? 121 : _context2.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_MESSAGE_TYPE.SET_AGENT_STATUS ? 145 : _context2.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_MESSAGE_TYPE.GET_AGENT_STATUS ? 171 : _context2.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.DIAL ? 183 : _context2.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.SEND_DIGITS ? 234 : _context2.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.GET_PHONE_CONTACTS ? 246 : _context2.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_MESSAGE_TYPE.GET_CONTACTS ? 262 : _context2.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.SWAP_PARTICIPANTS ? 275 : _context2.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.CONFERENCE ? 289 : _context2.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.ADD_PARTICIPANT ? 303 : _context2.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.PAUSE_RECORDING ? 329 : _context2.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.RESUME_RECORDING ? 343 : _context2.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_MESSAGE_TYPE.LOGOUT ? 357 : _context2.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_MESSAGE_TYPE.MESSAGE ? 370 : _context2.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.WRAP_UP_CALL ? 372 : _context2.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.AGENT_AVAILABLE ? 377 : _context2.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.SET_AGENT_CONFIG ? 419 : _context2.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.GET_AUDIO_DEVICES ? 435 : _context2.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.GET_SIGNED_RECORDING_URL ? 450 : _context2.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_MESSAGE_TYPE.DOWNLOAD_VENDOR_LOGS ? 468 : _context2.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_MESSAGE_TYPE.LOG ? 470 : _context2.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.SUPERVISE_CALL ? 473 : _context2.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.SUPERVISOR_DISCONNECT ? 493 : _context2.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.SUPERVISOR_BARGE_IN ? 509 : _context2.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_MESSAGE_TYPE.AGENT_WORK_EVENT ? 524 : 527;
          break;
        case 5:
          _context2.prev = 5;
          if (!(message.data.call && message.data.call.callType && (message.data.call.callType.toLowerCase() === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].CALL_TYPE.OUTBOUND.toLowerCase() || message.data.call.callType.toLowerCase() === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].CALL_TYPE.DIALED_CALLBACK.toLowerCase()))) {
            _context2.next = 8;
            break;
          }
          return _context2.abrupt("return");
        case 8:
          (0,_mosUtil__WEBPACK_IMPORTED_MODULE_6__.initAudioStats)();
          _context2.next = 11;
          return vendorConnector.getTelephonyConnector();
        case 11:
          telephonyConnector = _context2.sent;
          if (!isSupervisorConnected) {
            _context2.next = 19;
            break;
          }
          _context2.next = 15;
          return telephonyConnector.supervisorDisconnect();
        case 15:
          hangupPayload = _context2.sent;
          _types__WEBPACK_IMPORTED_MODULE_5__.Validator.validateClassObject(hangupPayload, _types__WEBPACK_IMPORTED_MODULE_5__.SupervisorHangupResult);
          isSupervisorConnected = false;
          dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.SUPERVISOR_HANGUP, hangupPayload.calls);
        case 19:
          _context2.next = 21;
          return telephonyConnector.acceptCall(message.data.call);
        case 21:
          payload = _context2.sent;
          _types__WEBPACK_IMPORTED_MODULE_5__.Validator.validateClassObject(payload, _types__WEBPACK_IMPORTED_MODULE_5__.CallResult);
          call = payload.call;
          dispatchEvent(call.callType.toLowerCase() === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].CALL_TYPE.CALLBACK.toLowerCase() ? _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.CALL_STARTED : _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.CALL_CONNECTED, call);
          _context2.next = 31;
          break;
        case 27:
          _context2.prev = 27;
          _context2.t1 = _context2["catch"](5);
          isSupervisorConnected = false;
          if (_context2.t1 instanceof _types__WEBPACK_IMPORTED_MODULE_5__.CustomError) {
            dispatchCustomError(_context2.t1, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.ACCEPT_CALL);
          } else {
            dispatchInfo(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].INFO_TYPE.CAN_NOT_ACCEPT_THE_CALL, {
              messagetype: _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.ACCEPT_CALL,
              additionalInfo: _context2.t1
            });
          }
        case 31:
          return _context2.abrupt("break", 528);
        case 32:
          _context2.prev = 32;
          _context2.next = 35;
          return vendorConnector.getTelephonyConnector();
        case 35:
          _telephonyConnector = _context2.sent;
          _context2.next = 38;
          return _telephonyConnector.declineCall(message.data.call);
        case 38:
          _payload = _context2.sent;
          _types__WEBPACK_IMPORTED_MODULE_5__.Validator.validateClassObject(_payload, _types__WEBPACK_IMPORTED_MODULE_5__.CallResult);
          _call = _payload.call;
          dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.HANGUP, _call);
          _context2.next = 47;
          break;
        case 44:
          _context2.prev = 44;
          _context2.t2 = _context2["catch"](32);
          if (_context2.t2 instanceof _types__WEBPACK_IMPORTED_MODULE_5__.CustomError) {
            dispatchCustomError(_context2.t2, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.DECLINE_CALL);
          } else {
            dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_DECLINE_THE_CALL, _context2.t2, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.DECLINE_CALL);
          }
        case 47:
          return _context2.abrupt("break", 528);
        case 48:
          _context2.prev = 48;
          _context2.next = 51;
          return vendorConnector.getTelephonyConnector();
        case 51:
          _telephonyConnector2 = _context2.sent;
          _context2.next = 54;
          return _telephonyConnector2.endCall(message.data.call, message.data.agentStatus);
        case 54:
          _payload2 = _context2.sent;
          _types__WEBPACK_IMPORTED_MODULE_5__.Validator.validateClassObject(_payload2, _types__WEBPACK_IMPORTED_MODULE_5__.HangupResult);
          _context2.next = 58;
          return _telephonyConnector2.getActiveCalls();
        case 58:
          activeCallsResult = _context2.sent;
          _types__WEBPACK_IMPORTED_MODULE_5__.Validator.validateClassObject(activeCallsResult, _types__WEBPACK_IMPORTED_MODULE_5__.ActiveCallsResult);
          activeCalls = activeCallsResult.activeCalls;
          calls = _payload2.calls; // After end call returns from vendor side, 
          // if the call is a consult, fire HANGUP
          // else if no more active calls, fire HANGUP, otherwise, fire PARTICIPANT_REMOVED
          if (calls.length > 0 && calls[0] && calls[0].callType === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].CALL_TYPE.CONSULT) {
            dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.HANGUP, calls[0]);
          } else if (activeCalls.length === 0) {
            dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.HANGUP, calls);
          } else {
            dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.PARTICIPANT_REMOVED, calls.length > 0 && calls[0]);
          }
          _context2.next = 68;
          break;
        case 65:
          _context2.prev = 65;
          _context2.t3 = _context2["catch"](48);
          if (_context2.t3 instanceof _types__WEBPACK_IMPORTED_MODULE_5__.CustomError) {
            dispatchCustomError(_context2.t3, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.END_CALL);
          } else {
            dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_END_THE_CALL, _context2.t3, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.END_CALL);
          }
        case 68:
          return _context2.abrupt("break", 528);
        case 69:
          _context2.prev = 69;
          _context2.next = 72;
          return vendorConnector.getTelephonyConnector();
        case 72:
          _telephonyConnector3 = _context2.sent;
          _context2.next = 75;
          return _telephonyConnector3.mute(message.data.call);
        case 75:
          _payload3 = _context2.sent;
          publishEvent({
            eventType: _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.MUTE_TOGGLE,
            payload: _payload3
          });
          _context2.next = 82;
          break;
        case 79:
          _context2.prev = 79;
          _context2.t4 = _context2["catch"](69);
          if (_context2.t4 instanceof _types__WEBPACK_IMPORTED_MODULE_5__.CustomError) {
            dispatchCustomError(_context2.t4, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.MUTE);
          } else {
            dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_MUTE_CALL, _context2.t4, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.MUTE);
          }
        case 82:
          return _context2.abrupt("break", 528);
        case 83:
          _context2.prev = 83;
          _context2.next = 86;
          return vendorConnector.getTelephonyConnector();
        case 86:
          _telephonyConnector4 = _context2.sent;
          _context2.next = 89;
          return _telephonyConnector4.unmute(message.data.call);
        case 89:
          _payload4 = _context2.sent;
          publishEvent({
            eventType: _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.MUTE_TOGGLE,
            payload: _payload4
          });
          _context2.next = 96;
          break;
        case 93:
          _context2.prev = 93;
          _context2.t5 = _context2["catch"](83);
          if (_context2.t5 instanceof _types__WEBPACK_IMPORTED_MODULE_5__.CustomError) {
            dispatchCustomError(_context2.t5, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.UNMUTE);
          } else {
            dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_UNMUTE_CALL, _context2.t5, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.UNMUTE);
          }
        case 96:
          return _context2.abrupt("break", 528);
        case 97:
          _context2.prev = 97;
          _context2.next = 100;
          return vendorConnector.getTelephonyConnector();
        case 100:
          _telephonyConnector5 = _context2.sent;
          _context2.next = 103;
          return _telephonyConnector5.hold(message.data.call);
        case 103:
          _payload5 = _context2.sent;
          publishEvent({
            eventType: _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.HOLD_TOGGLE,
            payload: _payload5
          });
          _context2.next = 120;
          break;
        case 107:
          _context2.prev = 107;
          _context2.t6 = _context2["catch"](97);
          if (!(_context2.t6 instanceof _types__WEBPACK_IMPORTED_MODULE_5__.CustomError)) {
            _context2.next = 113;
            break;
          }
          dispatchCustomError(_context2.t6, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.HOLD);
          _context2.next = 120;
          break;
        case 113:
          _context2.t7 = getErrorType(_context2.t6);
          _context2.next = _context2.t7 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.INVALID_PARTICIPANT ? 116 : 118;
          break;
        case 116:
          dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.INVALID_PARTICIPANT, getErrorMessage(_context2.t6), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.HOLD);
          return _context2.abrupt("break", 120);
        case 118:
          dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_HOLD_CALL, getErrorMessage(_context2.t6), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.HOLD);
          return _context2.abrupt("break", 120);
        case 120:
          return _context2.abrupt("break", 528);
        case 121:
          _context2.prev = 121;
          _context2.next = 124;
          return vendorConnector.getTelephonyConnector();
        case 124:
          _telephonyConnector6 = _context2.sent;
          _context2.next = 127;
          return _telephonyConnector6.resume(message.data.call);
        case 127:
          _payload6 = _context2.sent;
          publishEvent({
            eventType: _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.HOLD_TOGGLE,
            payload: _payload6
          });
          _context2.next = 144;
          break;
        case 131:
          _context2.prev = 131;
          _context2.t8 = _context2["catch"](121);
          if (!(_context2.t8 instanceof _types__WEBPACK_IMPORTED_MODULE_5__.CustomError)) {
            _context2.next = 137;
            break;
          }
          dispatchCustomError(_context2.t8, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.RESUME);
          _context2.next = 144;
          break;
        case 137:
          _context2.t9 = getErrorType(_context2.t8);
          _context2.next = _context2.t9 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.INVALID_PARTICIPANT ? 140 : 142;
          break;
        case 140:
          dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.INVALID_PARTICIPANT, getErrorMessage(_context2.t8), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.RESUME);
          return _context2.abrupt("break", 144);
        case 142:
          dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_RESUME_CALL, getErrorMessage(_context2.t8), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.RESUME);
          return _context2.abrupt("break", 144);
        case 144:
          return _context2.abrupt("break", 528);
        case 145:
          _context2.prev = 145;
          statusInfo = message.data.statusInfo || {};
          enqueueNextState = message.data.enqueueNextState || false;
          _context2.next = 150;
          return vendorConnector.setAgentStatus(message.data.agentStatus, statusInfo, enqueueNextState);
        case 150:
          _payload7 = _context2.sent;
          _types__WEBPACK_IMPORTED_MODULE_5__.Validator.validateClassObject(_payload7, _types__WEBPACK_IMPORTED_MODULE_5__.GenericResult, _types__WEBPACK_IMPORTED_MODULE_5__.SetAgentStateResult);
          success = _payload7.success, isStatusSyncNeeded = _payload7.isStatusSyncNeeded;
          dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.SET_AGENT_STATUS_RESULT, isStatusSyncNeeded !== undefined ? {
            success: success,
            isStatusSyncNeeded: isStatusSyncNeeded
          } : {
            success: success
          });
          _context2.next = 170;
          break;
        case 156:
          _context2.prev = 156;
          _context2.t10 = _context2["catch"](145);
          if (!(_context2.t10 instanceof _types__WEBPACK_IMPORTED_MODULE_5__.CustomError)) {
            _context2.next = 162;
            break;
          }
          dispatchCustomError(_context2.t10, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_MESSAGE_TYPE.SET_AGENT_STATUS);
          _context2.next = 170;
          break;
        case 162:
          if (message.data.statusInfo) {
            dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.SET_AGENT_STATUS_RESULT, {
              success: false
            });
          }
          _context2.t11 = getErrorType(_context2.t10);
          _context2.next = _context2.t11 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_ERROR_TYPE.INVALID_AGENT_STATUS ? 166 : 168;
          break;
        case 166:
          dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_ERROR_TYPE.INVALID_AGENT_STATUS, getErrorMessage(_context2.t10), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_MESSAGE_TYPE.SET_AGENT_STATUS);
          return _context2.abrupt("break", 170);
        case 168:
          dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_ERROR_TYPE.CAN_NOT_SET_AGENT_STATUS, getErrorMessage(_context2.t10), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_MESSAGE_TYPE.SET_AGENT_STATUS);
          return _context2.abrupt("break", 170);
        case 170:
          return _context2.abrupt("break", 528);
        case 171:
          _context2.prev = 171;
          _context2.next = 174;
          return vendorConnector.getAgentStatus();
        case 174:
          _payload8 = _context2.sent;
          _types__WEBPACK_IMPORTED_MODULE_5__.Validator.validateClassObject(_payload8, _types__WEBPACK_IMPORTED_MODULE_5__.AgentVendorStatusInfo);
          dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.GET_AGENT_STATUS_RESULT, _payload8);
          _context2.next = 182;
          break;
        case 179:
          _context2.prev = 179;
          _context2.t12 = _context2["catch"](171);
          if (_context2.t12 instanceof _types__WEBPACK_IMPORTED_MODULE_5__.CustomError) {
            dispatchCustomError(_context2.t12, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_MESSAGE_TYPE.GET_AGENT_STATUS);
          } else {
            dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_ERROR_TYPE.CAN_NOT_GET_AGENT_STATUS, getErrorMessage(_context2.t12), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_MESSAGE_TYPE.GET_AGENT_STATUS);
          }
        case 182:
          return _context2.abrupt("break", 528);
        case 183:
          _context2.prev = 183;
          _context2.next = 186;
          return vendorConnector.getTelephonyConnector();
        case 186:
          _telephonyConnector7 = _context2.sent;
          isCallback = message.data.params && message.data.params.indexOf(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].DIAL_OPTIONS.CALLBACK) >= 0;
          isConsultCall = message.data.params && message.data.params.indexOf(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].DIAL_OPTIONS.CONSULT) >= 0;
          _context2.next = 191;
          return _telephonyConnector7.dial(new _types__WEBPACK_IMPORTED_MODULE_5__.Contact(message.data.contact), new _types__WEBPACK_IMPORTED_MODULE_5__.DialOptions({
            isCallback: isCallback,
            isConsultCall: isConsultCall
          }));
        case 191:
          _payload9 = _context2.sent;
          _types__WEBPACK_IMPORTED_MODULE_5__.Validator.validateClassObject(_payload9, _types__WEBPACK_IMPORTED_MODULE_5__.CallResult);
          _call2 = _payload9.call; // If connectors wants this to be created as callback 
          if (_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].CALL_TYPE.DIALED_CALLBACK.toLowerCase() === _call2.callType.toLowerCase() && isCallback) {
            dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.QUEUED_CALL_STARTED, _call2);
          } else {
            // continue treating this as outbound
            dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.CALL_STARTED, _call2);
          }
          _context2.next = 233;
          break;
        case 197:
          _context2.prev = 197;
          _context2.t13 = _context2["catch"](183);
          dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.CALL_FAILED);
          if (!(_context2.t13 instanceof _types__WEBPACK_IMPORTED_MODULE_5__.CustomError)) {
            _context2.next = 204;
            break;
          }
          dispatchCustomError(_context2.t13, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.DIAL);
          _context2.next = 233;
          break;
        case 204:
          _context2.t14 = getErrorType(_context2.t13);
          _context2.next = _context2.t14 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.INVALID_DESTINATION ? 207 : _context2.t14 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.PHONE_NUMBER_NOT_VALID ? 209 : _context2.t14 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.AREA_CODE_NOT_IN_DIALABLE_LIST ? 211 : _context2.t14 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.PHONE_NUMBER_NOT_VALID_E164_FORMAT ? 213 : _context2.t14 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.UNAUTHORIZED_SERVICE_CALL ? 215 : _context2.t14 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.AGENT_AT_MAXIMUM_CAPACITY ? 217 : _context2.t14 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.OUTBOUND_QUEUE_MISCONFIGURED ? 219 : _context2.t14 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CALL_THROTTLED ? 221 : _context2.t14 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.TIMEOUT_ERROR ? 223 : _context2.t14 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.UNABLE_TO_CONNECT_TO_AGENT ? 225 : _context2.t14 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.AGENT_NOT_INITIALIZED ? 227 : _context2.t14 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_ERROR_TYPE.GENERIC_ERROR ? 229 : 231;
          break;
        case 207:
          dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.INVALID_DESTINATION, getErrorMessage(_context2.t13), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.DIAL);
          return _context2.abrupt("break", 233);
        case 209:
          dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.PHONE_NUMBER_NOT_VALID, getErrorMessage(_context2.t13), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.DIAL);
          return _context2.abrupt("break", 233);
        case 211:
          dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.AREA_CODE_NOT_IN_DIALABLE_LIST, getErrorMessage(_context2.t13), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.DIAL);
          return _context2.abrupt("break", 233);
        case 213:
          dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.PHONE_NUMBER_NOT_VALID_E164_FORMAT, getErrorMessage(_context2.t13), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.DIAL);
          return _context2.abrupt("break", 233);
        case 215:
          dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.UNAUTHORIZED_SERVICE_CALL, getErrorMessage(_context2.t13), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.DIAL);
          return _context2.abrupt("break", 233);
        case 217:
          dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.AGENT_AT_MAXIMUM_CAPACITY, getErrorMessage(_context2.t13), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.DIAL);
          return _context2.abrupt("break", 233);
        case 219:
          dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.OUTBOUND_QUEUE_MISCONFIGURED, getErrorMessage(_context2.t13), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.DIAL);
          return _context2.abrupt("break", 233);
        case 221:
          dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CALL_THROTTLED, getErrorMessage(_context2.t13), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.DIAL);
          return _context2.abrupt("break", 233);
        case 223:
          dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.TIMEOUT_ERROR, getErrorMessage(_context2.t13), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.DIAL);
          return _context2.abrupt("break", 233);
        case 225:
          dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.UNABLE_TO_CONNECT_TO_AGENT, getErrorMessage(_context2.t13), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.DIAL);
          return _context2.abrupt("break", 233);
        case 227:
          dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.AGENT_NOT_INITIALIZED, getErrorMessage(_context2.t13), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.DIAL);
          return _context2.abrupt("break", 233);
        case 229:
          dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_ERROR_TYPE.GENERIC_ERROR, getErrorMessage(_context2.t13), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.DIAL);
          return _context2.abrupt("break", 233);
        case 231:
          dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_START_THE_CALL, getErrorMessage(_context2.t13), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.DIAL);
          return _context2.abrupt("break", 233);
        case 233:
          return _context2.abrupt("break", 528);
        case 234:
          _context2.prev = 234;
          _context2.next = 237;
          return vendorConnector.getTelephonyConnector();
        case 237:
          _telephonyConnector8 = _context2.sent;
          _context2.next = 240;
          return _telephonyConnector8.sendDigits(message.data.digits);
        case 240:
          _context2.next = 245;
          break;
        case 242:
          _context2.prev = 242;
          _context2.t15 = _context2["catch"](234);
          dispatchEventLog(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.SEND_DIGITS, message.data.digits, true);
        case 245:
          return _context2.abrupt("break", 528);
        case 246:
          _context2.prev = 246;
          _context2.next = 249;
          return vendorConnector.getTelephonyConnector();
        case 249:
          _telephonyConnector9 = _context2.sent;
          _context2.next = 252;
          return _telephonyConnector9.getPhoneContacts(message.data.filter);
        case 252:
          _payload10 = _context2.sent;
          _types__WEBPACK_IMPORTED_MODULE_5__.Validator.validateClassObject(_payload10, _types__WEBPACK_IMPORTED_MODULE_5__.PhoneContactsResult);
          contacts = _payload10.contacts.map(function (contact) {
            return {
              id: contact.id,
              type: contact.type,
              name: contact.name,
              listType: contact.listType,
              phoneNumber: contact.phoneNumber,
              prefix: contact.prefix,
              extension: contact.extension,
              endpointARN: contact.endpointARN,
              queue: contact.queue,
              availability: contact.availability,
              queueWaitTime: contact.queueWaitTime,
              recordId: contact.recordId,
              description: contact.description
            };
          });
          dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.PHONE_CONTACTS, {
            contacts: contacts,
            contactTypes: _payload10.contactTypes
          });
          _context2.next = 261;
          break;
        case 258:
          _context2.prev = 258;
          _context2.t16 = _context2["catch"](246);
          if (_context2.t16 instanceof _types__WEBPACK_IMPORTED_MODULE_5__.CustomError) {
            dispatchCustomError(_context2.t16, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.GET_PHONE_CONTACTS);
          } else {
            dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_GET_PHONE_CONTACTS, _context2.t16, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.GET_PHONE_CONTACTS);
          }
        case 261:
          return _context2.abrupt("break", 528);
        case 262:
          _context2.prev = 262;
          _context2.next = 265;
          return vendorConnector.getContacts(message.data.filter, message.data.workItemId);
        case 265:
          _payload11 = _context2.sent;
          _types__WEBPACK_IMPORTED_MODULE_5__.Validator.validateClassObject(_payload11, _types__WEBPACK_IMPORTED_MODULE_5__.ContactsResult);
          _contacts = _payload11.contacts.map(function (contact) {
            return {
              id: contact.id,
              type: contact.type,
              name: contact.name,
              listType: contact.listType,
              phoneNumber: contact.phoneNumber,
              prefix: contact.prefix,
              extension: contact.extension,
              endpointARN: contact.endpointARN,
              queue: contact.queue,
              availability: contact.availability,
              queueWaitTime: contact.queueWaitTime,
              recordId: contact.recordId,
              description: contact.description
            };
          });
          dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.GET_CONTACTS_RESULT, {
            contacts: _contacts,
            contactTypes: _payload11.contactTypes
          });
          _context2.next = 274;
          break;
        case 271:
          _context2.prev = 271;
          _context2.t17 = _context2["catch"](262);
          dispatchCustomError(_context2.t17, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_MESSAGE_TYPE.GET_CONTACTS);
        case 274:
          return _context2.abrupt("break", 528);
        case 275:
          _context2.prev = 275;
          _context2.next = 278;
          return vendorConnector.getTelephonyConnector();
        case 278:
          _telephonyConnector10 = _context2.sent;
          _context2.next = 281;
          return _telephonyConnector10.swap(message.data.callToHold, message.data.callToResume);
        case 281:
          _payload12 = _context2.sent;
          publishEvent({
            eventType: _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.PARTICIPANTS_SWAPPED,
            payload: _payload12
          });
          _context2.next = 288;
          break;
        case 285:
          _context2.prev = 285;
          _context2.t18 = _context2["catch"](275);
          if (_context2.t18 instanceof _types__WEBPACK_IMPORTED_MODULE_5__.CustomError) {
            dispatchCustomError(_context2.t18, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.SWAP_PARTICIPANTS);
          } else {
            dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_SWAP_PARTICIPANTS, _context2.t18, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.SWAP_PARTICIPANTS);
          }
        case 288:
          return _context2.abrupt("break", 528);
        case 289:
          _context2.prev = 289;
          _context2.next = 292;
          return vendorConnector.getTelephonyConnector();
        case 292:
          _telephonyConnector11 = _context2.sent;
          _context2.next = 295;
          return _telephonyConnector11.conference(message.data.calls);
        case 295:
          _payload13 = _context2.sent;
          publishEvent({
            eventType: _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.PARTICIPANTS_CONFERENCED,
            payload: _payload13
          });
          _context2.next = 302;
          break;
        case 299:
          _context2.prev = 299;
          _context2.t19 = _context2["catch"](289);
          if (_context2.t19 instanceof _types__WEBPACK_IMPORTED_MODULE_5__.CustomError) {
            dispatchCustomError(_context2.t19, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.CONFERENCE);
          } else {
            dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_CONFERENCE, _context2.t19, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.CONFERENCE);
          }
        case 302:
          return _context2.abrupt("break", 528);
        case 303:
          _context2.prev = 303;
          _context2.next = 306;
          return vendorConnector.getTelephonyConnector();
        case 306:
          _telephonyConnector12 = _context2.sent;
          _context2.next = 309;
          return _telephonyConnector12.addParticipant(new _types__WEBPACK_IMPORTED_MODULE_5__.Contact(message.data.contact), message.data.call, message.data.isBlindTransfer);
        case 309:
          _payload14 = _context2.sent;
          publishEvent({
            eventType: _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.PARTICIPANT_ADDED,
            payload: _payload14
          });
          if (message.data.isBlindTransfer) {
            dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.HANGUP, message.data.call);
          }
          _context2.next = 328;
          break;
        case 314:
          _context2.prev = 314;
          _context2.t20 = _context2["catch"](303);
          // TODO: Can we avoid passing in reason field
          dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.PARTICIPANT_REMOVED, {
            reason: _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.ERROR.toLowerCase()
          });
          if (!(_context2.t20 instanceof _types__WEBPACK_IMPORTED_MODULE_5__.CustomError)) {
            _context2.next = 321;
            break;
          }
          dispatchCustomError(_context2.t20, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.ADD_PARTICIPANT);
          _context2.next = 328;
          break;
        case 321:
          _context2.t21 = getErrorType(_context2.t20);
          _context2.next = _context2.t21 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.INVALID_DESTINATION ? 324 : 326;
          break;
        case 324:
          dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.INVALID_DESTINATION, getErrorMessage(_context2.t20), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.ADD_PARTICIPANT);
          return _context2.abrupt("break", 328);
        case 326:
          dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_ADD_PARTICIPANT, getErrorMessage(_context2.t20), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.ADD_PARTICIPANT);
          return _context2.abrupt("break", 328);
        case 328:
          return _context2.abrupt("break", 528);
        case 329:
          _context2.prev = 329;
          _context2.next = 332;
          return vendorConnector.getTelephonyConnector();
        case 332:
          _telephonyConnector13 = _context2.sent;
          _context2.next = 335;
          return _telephonyConnector13.pauseRecording(message.data.call);
        case 335:
          _payload15 = _context2.sent;
          publishEvent({
            eventType: _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.RECORDING_TOGGLE,
            payload: _payload15
          });
          _context2.next = 342;
          break;
        case 339:
          _context2.prev = 339;
          _context2.t22 = _context2["catch"](329);
          if (_context2.t22 instanceof _types__WEBPACK_IMPORTED_MODULE_5__.CustomError) {
            dispatchCustomError(_context2.t22, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.PAUSE_RECORDING);
          } else {
            dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_PAUSE_RECORDING, _context2.t22, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.PAUSE_RECORDING);
          }
        case 342:
          return _context2.abrupt("break", 528);
        case 343:
          _context2.prev = 343;
          _context2.next = 346;
          return vendorConnector.getTelephonyConnector();
        case 346:
          _telephonyConnector14 = _context2.sent;
          _context2.next = 349;
          return _telephonyConnector14.resumeRecording(message.data.call);
        case 349:
          _payload16 = _context2.sent;
          publishEvent({
            eventType: _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.RECORDING_TOGGLE,
            payload: _payload16
          });
          _context2.next = 356;
          break;
        case 353:
          _context2.prev = 353;
          _context2.t23 = _context2["catch"](343);
          if (_context2.t23 instanceof _types__WEBPACK_IMPORTED_MODULE_5__.CustomError) {
            dispatchCustomError(_context2.t23, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.RESUME_RECORDING);
          } else {
            dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_RESUME_RECORDING, _context2.t23, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.RESUME_RECORDING);
          }
        case 356:
          return _context2.abrupt("break", 528);
        case 357:
          _context2.prev = 357;
          _context2.next = 360;
          return vendorConnector.logout();
        case 360:
          _payload17 = _context2.sent;
          _types__WEBPACK_IMPORTED_MODULE_5__.Validator.validateClassObject(_payload17, _types__WEBPACK_IMPORTED_MODULE_5__.LogoutResult);
          _success = _payload17.success, loginFrameHeight = _payload17.loginFrameHeight;
          dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.LOGOUT_RESULT, {
            success: _success,
            loginFrameHeight: loginFrameHeight
          });
          _context2.next = 369;
          break;
        case 366:
          _context2.prev = 366;
          _context2.t24 = _context2["catch"](357);
          if (_context2.t24 instanceof _types__WEBPACK_IMPORTED_MODULE_5__.CustomError) {
            dispatchCustomError(_context2.t24, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_MESSAGE_TYPE.LOGOUT);
          } else {
            dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_ERROR_TYPE.CAN_NOT_LOG_OUT, _context2.t24, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_MESSAGE_TYPE.LOGOUT);
          }
        case 369:
          return _context2.abrupt("break", 528);
        case 370:
          // TODO: Define a return type for handling message
          vendorConnector.handleMessage(message.data.message);
          return _context2.abrupt("break", 528);
        case 372:
          _context2.next = 374;
          return vendorConnector.getTelephonyConnector();
        case 374:
          _telephonyConnector15 = _context2.sent;
          _telephonyConnector15.wrapUpCall(message.data.call);
          return _context2.abrupt("break", 528);
        case 377:
          if (!(message.data && message.data.isAvailable)) {
            _context2.next = 418;
            break;
          }
          _context2.next = 380;
          return vendorConnector.getTelephonyConnector();
        case 380:
          _telephonyConnector16 = _context2.sent;
          _context2.next = 383;
          return _telephonyConnector16.getActiveCalls();
        case 383:
          _activeCallsResult = _context2.sent;
          _types__WEBPACK_IMPORTED_MODULE_5__.Validator.validateClassObject(_activeCallsResult, _types__WEBPACK_IMPORTED_MODULE_5__.ActiveCallsResult);
          _activeCalls = _activeCallsResult.activeCalls;
          _context2.t25 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().keys(_activeCalls);
        case 387:
          if ((_context2.t26 = _context2.t25()).done) {
            _context2.next = 418;
            break;
          }
          callId = _context2.t26.value;
          _call3 = _activeCalls[callId];
          shouldReplay = _call3.callInfo ? _call3.callInfo.isReplayable : true;
          isSupervisorCall = _call3.callAttributes && _call3.callAttributes.participantType === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].PARTICIPANT_TYPE.SUPERVISOR;
          hasSupervisorBargedIn = isSupervisorCall && _call3.callAttributes && _call3.callAttributes.hasSupervisorBargedIn;
          if (!shouldReplay) {
            _context2.next = 416;
            break;
          }
          _call3.isReplayedCall = true;
          _context2.t27 = _call3.state;
          _context2.next = _context2.t27 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].CALL_STATE.CONNECTED ? 398 : _context2.t27 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].CALL_STATE.RINGING ? 405 : _context2.t27 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].CALL_STATE.TRANSFERRING ? 411 : _context2.t27 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].CALL_STATE.TRANSFERRED ? 413 : 415;
          break;
        case 398:
          if (!isSupervisorCall) {
            _context2.next = 403;
            break;
          }
          isSupervisorConnected = true;
          dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.SUPERVISOR_CALL_CONNECTED, _call3);
          if (hasSupervisorBargedIn) {
            dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.SUPERVISOR_BARGED_IN, _call3);
          }
          return _context2.abrupt("break", 416);
        case 403:
          dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.CALL_CONNECTED, _call3);
          return _context2.abrupt("break", 416);
        case 405:
          if (!isSupervisorCall) {
            _context2.next = 409;
            break;
          }
          isSupervisorConnected = true;
          dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.SUPERVISOR_CALL_STARTED, _call3);
          return _context2.abrupt("break", 416);
        case 409:
          dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.CALL_STARTED, _call3);
          return _context2.abrupt("break", 416);
        case 411:
          dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.PARTICIPANT_ADDED, {
            phoneNumber: _call3.contact.phoneNumber,
            contact: _call3.contact,
            callInfo: _call3.callInfo,
            callAttributes: _call3.callAttributes,
            initialCallHasEnded: _call3.callAttributes.initialCallHasEnded,
            callId: _call3.callId,
            connectionId: _call3.connectionId
          });
          return _context2.abrupt("break", 416);
        case 413:
          dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.PARTICIPANT_CONNECTED, {
            phoneNumber: _call3.contact.phoneNumber,
            contact: _call3.contact,
            callInfo: _call3.callInfo,
            callAttributes: _call3.callAttributes,
            initialCallHasEnded: _call3.callAttributes.initialCallHasEnded,
            callId: _call3.callId,
            connectionId: _call3.connectionId
          });
          return _context2.abrupt("break", 416);
        case 415:
          return _context2.abrupt("break", 416);
        case 416:
          _context2.next = 387;
          break;
        case 418:
          return _context2.abrupt("break", 528);
        case 419:
          _context2.prev = 419;
          _context2.next = 422;
          return vendorConnector.getTelephonyConnector();
        case 422:
          _telephonyConnector17 = _context2.sent;
          _context2.next = 425;
          return _telephonyConnector17.setAgentConfig(message.data.config);
        case 425:
          result = _context2.sent;
          _types__WEBPACK_IMPORTED_MODULE_5__.Validator.validateClassObjects(result, _types__WEBPACK_IMPORTED_MODULE_5__.GenericResult, _types__WEBPACK_IMPORTED_MODULE_5__.SetAgentConfigResult);
          if (result instanceof _types__WEBPACK_IMPORTED_MODULE_5__.SetAgentConfigResult) {
            result.setIsSystemEvent(!!message.data.config.isSystemEvent);
          }
          dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.AGENT_CONFIG_UPDATED, result);
          _context2.next = 434;
          break;
        case 431:
          _context2.prev = 431;
          _context2.t28 = _context2["catch"](419);
          if (_context2.t28 instanceof _types__WEBPACK_IMPORTED_MODULE_5__.CustomError) {
            dispatchCustomError(_context2.t28, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.SET_AGENT_CONFIG);
          } else {
            dispatchError(getErrorType(_context2.t28) === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_UPDATE_PHONE_NUMBER ? _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_UPDATE_PHONE_NUMBER : _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_SET_AGENT_CONFIG, getErrorMessage(_context2.t28), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.SET_AGENT_CONFIG);
          }
        case 434:
          return _context2.abrupt("break", 528);
        case 435:
          _context2.prev = 435;
          _context2.next = 438;
          return vendorConnector.getTelephonyConnector();
        case 438:
          _telephonyConnector18 = _context2.sent;
          _context2.next = 441;
          return _telephonyConnector18.getAudioDevices();
        case 441:
          _result = _context2.sent;
          _types__WEBPACK_IMPORTED_MODULE_5__.Validator.validateClassObject(_result, _types__WEBPACK_IMPORTED_MODULE_5__.AudioDevicesResult);
          dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.GET_AUDIO_DEVICES, _result);
          _context2.next = 449;
          break;
        case 446:
          _context2.prev = 446;
          _context2.t29 = _context2["catch"](435);
          dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_GET_AUDIO_DEVICES, getErrorMessage(_context2.t29), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.GET_AUDIO_DEVICES);
        case 449:
          return _context2.abrupt("break", 528);
        case 450:
          _context2.prev = 450;
          _message$data = message.data, recordingUrl = _message$data.recordingUrl, vendorCallKey = _message$data.vendorCallKey, _callId = _message$data.callId;
          _context2.next = 454;
          return vendorConnector.getTelephonyConnector();
        case 454:
          _telephonyConnector19 = _context2.sent;
          _context2.next = 457;
          return _telephonyConnector19.getSignedRecordingUrl(recordingUrl, vendorCallKey, _callId);
        case 457:
          _result2 = _context2.sent;
          _types__WEBPACK_IMPORTED_MODULE_5__.Validator.validateClassObject(_result2, _types__WEBPACK_IMPORTED_MODULE_5__.SignedRecordingUrlResult);
          dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.SIGNED_RECORDING_URL, _result2);
          _context2.next = 467;
          break;
        case 462:
          _context2.prev = 462;
          _context2.t30 = _context2["catch"](450);
          // In case of an error, we want to show an error message in the recording player
          signedRecordingUrlResult = new _types__WEBPACK_IMPORTED_MODULE_5__.SignedRecordingUrlResult({
            success: false
          });
          dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.SIGNED_RECORDING_URL, signedRecordingUrlResult, false);
          dispatchEventLog(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.GET_SIGNED_RECORDING_URL, signedRecordingUrlResult, true);
        case 467:
          return _context2.abrupt("break", 528);
        case 468:
          vendorConnector.downloadLogs((0,_logger__WEBPACK_IMPORTED_MODULE_7__.getLogs)());
          return _context2.abrupt("break", 528);
        case 470:
          _message$data2 = message.data, logLevel = _message$data2.logLevel, logMessage = _message$data2.logMessage, _payload18 = _message$data2.payload;
          vendorConnector.logMessageToVendor(logLevel, logMessage, _payload18);
          return _context2.abrupt("break", 528);
        case 473:
          _context2.prev = 473;
          isSupervisorConnected = true;
          _context2.next = 477;
          return vendorConnector.getTelephonyConnector();
        case 477:
          _telephonyConnector20 = _context2.sent;
          _context2.next = 480;
          return _telephonyConnector20.superviseCall(message.data.call);
        case 480:
          _result3 = _context2.sent;
          _types__WEBPACK_IMPORTED_MODULE_5__.Validator.validateClassObject(_result3, _types__WEBPACK_IMPORTED_MODULE_5__.SuperviseCallResult);
          _context2.next = 484;
          return _telephonyConnector20.getAgentConfig();
        case 484:
          agentConfigResult = _context2.sent;
          if (agentConfigResult.selectedPhone.type === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].PHONE_TYPE.SOFT_PHONE) {
            dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.SUPERVISOR_CALL_CONNECTED, _result3.call);
          } else {
            dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.SUPERVISOR_CALL_STARTED, _result3.call);
          }
          _context2.next = 492;
          break;
        case 488:
          _context2.prev = 488;
          _context2.t31 = _context2["catch"](473);
          isSupervisorConnected = false;
          if (_context2.t31 instanceof _types__WEBPACK_IMPORTED_MODULE_5__.CustomError) {
            dispatchCustomError(_context2.t31, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.SUPERVISE_CALL);
          } else {
            dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_SUPERVISE_CALL, _context2.t31, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.SUPERVISE_CALL);
          }
        case 492:
          return _context2.abrupt("break", 528);
        case 493:
          _context2.prev = 493;
          _context2.next = 496;
          return vendorConnector.getTelephonyConnector();
        case 496:
          _telephonyConnector21 = _context2.sent;
          _context2.next = 499;
          return _telephonyConnector21.supervisorDisconnect(message.data.call);
        case 499:
          _result4 = _context2.sent;
          _types__WEBPACK_IMPORTED_MODULE_5__.Validator.validateClassObject(_result4, _types__WEBPACK_IMPORTED_MODULE_5__.SupervisorHangupResult);
          isSupervisorConnected = false;
          dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.SUPERVISOR_HANGUP, _result4.calls);
          _context2.next = 508;
          break;
        case 505:
          _context2.prev = 505;
          _context2.t32 = _context2["catch"](493);
          if (_context2.t32 instanceof _types__WEBPACK_IMPORTED_MODULE_5__.CustomError) {
            dispatchCustomError(_context2.t32, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.SUPERVISOR_DISCONNECT);
          } else {
            dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_DISCONNECT_SUPERVISOR, _context2.t32, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.SUPERVISOR_DISCONNECT);
          }
        case 508:
          return _context2.abrupt("break", 528);
        case 509:
          _context2.prev = 509;
          _context2.next = 512;
          return vendorConnector.getTelephonyConnector();
        case 512:
          _telephonyConnector22 = _context2.sent;
          _context2.next = 515;
          return _telephonyConnector22.supervisorBargeIn(message.data.call);
        case 515:
          _result5 = _context2.sent;
          _types__WEBPACK_IMPORTED_MODULE_5__.Validator.validateClassObject(_result5, _types__WEBPACK_IMPORTED_MODULE_5__.SuperviseCallResult);
          dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.SUPERVISOR_BARGED_IN, _result5.call);
          _context2.next = 523;
          break;
        case 520:
          _context2.prev = 520;
          _context2.t33 = _context2["catch"](509);
          if (_context2.t33 instanceof _types__WEBPACK_IMPORTED_MODULE_5__.CustomError) {
            dispatchCustomError(_context2.t33, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.SUPERVISOR_BARGE_IN);
          } else {
            dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_BARGE_IN_SUPERVISOR, _context2.t33, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_MESSAGE_TYPE.SUPERVISOR_BARGE_IN);
          }
        case 523:
          return _context2.abrupt("break", 528);
        case 524:
          _message$data$agentWo = message.data.agentWork, workItemId = _message$data$agentWo.workItemId, workId = _message$data$agentWo.workId, workEvent = _message$data$agentWo.workEvent;
          vendorConnector.onAgentWorkEvent({
            workItemId: workItemId,
            workId: workId,
            workEvent: workEvent
          });
          return _context2.abrupt("break", 528);
        case 527:
          return _context2.abrupt("break", 528);
        case 528:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[5, 27], [32, 44], [48, 65], [69, 79], [83, 93], [97, 107], [121, 131], [145, 156], [171, 179], [183, 197], [234, 242], [246, 258], [262, 271], [275, 285], [289, 299], [303, 314], [329, 339], [343, 353], [357, 366], [419, 431], [435, 446], [450, 462], [473, 488], [493, 505], [509, 520]]);
  }));
  return _channelMessageHandler.apply(this, arguments);
}
function windowMessageHandler(_x2) {
  return _windowMessageHandler.apply(this, arguments);
}
function _windowMessageHandler() {
  _windowMessageHandler = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3(message) {
    var sfDomain, originUrl, url, payload;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.t0 = message.data.type;
          _context3.next = _context3.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_MESSAGE_TYPE.SETUP_CONNECTOR ? 3 : 33;
          break;
        case 3:
          sfDomain = /^https:\/\/[\w-.]+(lightning\.[\w]+\.soma\.force\.com|\.lightning\.force\.com|\.lightning\.pc-rnd\.force\.com|\.stm\.force\.com|\.vf\.force\.com|\.salesforce\.com|\.my\.salesforce-sites\.com|\.lightning\.localhost\.[\w]+\.force.com|\.lightning\.force-com\.[\w.-]+\.crm\.dev|\.[\w-]+\.(salesforce|crmforce)\.mil|\.lightning\.(salesforce|crmforce)\.mil|\.sandbox\.lightning\.(salesforce|crmforce)\.mil)$/;
          originUrl = new URL(message.origin);
          url = originUrl.protocol + '//' + originUrl.hostname;
          if (!sfDomain.test(url)) {
            _context3.next = 31;
            break;
          }
          channelPort = message.ports[0];
          channelPort.onmessage = channelMessageHandler;
          dispatchEventLog(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_MESSAGE_TYPE.SETUP_CONNECTOR, exposedConnectorConfig(message.data.connectorConfig), false);
          _context3.prev = 10;
          _context3.next = 13;
          return vendorConnector.init(message.data.connectorConfig);
        case 13:
          payload = _context3.sent;
          _types__WEBPACK_IMPORTED_MODULE_5__.Validator.validateClassObject(payload, _types__WEBPACK_IMPORTED_MODULE_5__.InitResult);
          if (payload.showStorageAccess) {
            dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.SHOW_STORAGE_ACCESS, {
              success: true
            });
          } else if (payload.showLogin) {
            dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.SHOW_LOGIN, {
              loginFrameHeight: payload.loginFrameHeight
            });
          } else if (payload.isSilentLogin) {
            dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.SHOW_LOGIN, {
              isSilentLogin: payload.isSilentLogin
            });
          } else {
            setConnectorReady();
          }
          _context3.next = 31;
          break;
        case 18:
          _context3.prev = 18;
          _context3.t1 = _context3["catch"](10);
          if (!(_context3.t1 instanceof _types__WEBPACK_IMPORTED_MODULE_5__.CustomError)) {
            _context3.next = 24;
            break;
          }
          dispatchCustomError(_context3.t1, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_MESSAGE_TYPE.SETUP_CONNECTOR);
          _context3.next = 31;
          break;
        case 24:
          _context3.t2 = getErrorType(_context3.t1);
          _context3.next = _context3.t2 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.INVALID_PARAMS ? 27 : 29;
          break;
        case 27:
          dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.INVALID_PARAMS, getErrorMessage(_context3.t1), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_MESSAGE_TYPE.SETUP_CONNECTOR);
          return _context3.abrupt("break", 31);
        case 29:
          dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_ERROR_TYPE.CAN_NOT_LOG_IN, getErrorMessage(_context3.t1), _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_MESSAGE_TYPE.SETUP_CONNECTOR);
          return _context3.abrupt("break", 31);
        case 31:
          window.removeEventListener('message', windowMessageHandler);
          return _context3.abrupt("break", 34);
        case 33:
          return _context3.abrupt("break", 34);
        case 34:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[10, 18]]);
  }));
  return _windowMessageHandler.apply(this, arguments);
}
function exposedConnectorConfig(payload) {
  payload = payload || {};
  var obj = {};
  //properties that are equal to key
  _constants_js__WEBPACK_IMPORTED_MODULE_4__.CONNECTOR_CONFIG_EXPOSED_FIELDS.forEach(function (prop) {
    if (payload.hasOwnProperty(prop)) {
      obj[prop] = payload[prop];
    }
  });
  //properties that start with key
  _constants_js__WEBPACK_IMPORTED_MODULE_4__.CONNECTOR_CONFIG_EXPOSED_FIELDS_STARTSWITH.forEach(function (prop) {
    Object.keys(payload).forEach(function (key) {
      if (key.startsWith(prop) && !_constants_js__WEBPACK_IMPORTED_MODULE_4__.CONNECTOR_CONFIG_EXCEPTION_FIELDS.includes(key)) {
        obj[key] = payload[key];
      }
    });
  });
  return obj;
}
function validatePayload(payload, payloadType, errorType, eventType) {
  try {
    _types__WEBPACK_IMPORTED_MODULE_5__.Validator.validateClassObject(payload, payloadType);
    return true;
  } catch (e) {
    if (errorType) {
      dispatchError(errorType, e, eventType);
    }
    return false;
  }
}

/*========================== Exported Functions ==========================*/
/**
 * Initialize a vendor connector
 * @param {VendorConnector} connector
 */
function initializeConnector(connector) {
  vendorConnector = connector;
  window.addEventListener('message', windowMessageHandler);
}

/**
 * Publish an event or error log to Salesforce
 * @param {object} param
 * @param {string} param.eventType Any event type to be logged
 * @param {object} param.payload Any payload for the log that needs to be logged
 * @param {boolean} param.isError
 */
function publishLog(_ref) {
  var eventType = _ref.eventType,
    payload = _ref.payload,
    isError = _ref.isError;
  dispatchEventLog(eventType, payload, isError);
}

/**
 * Publish a telephony error to Salesforce
 * @param {object} param
 * @param {("LOGIN_RESULT"|"LOGOUT_RESULT"|"CALL_STARTED"|"QUEUED_CALL_STARTED"|"CALL_CONNECTED"|"HANGUP"|"PARTICIPANT_CONNECTED"|"PARTICIPANT_ADDED"|"PARTICIPANTS_SWAPPED"|"PARTICIPANTS_CONFERENCED"|"MESSAGE"|"MUTE_TOGGLE"|"HOLD_TOGGLE"|"RECORDING_TOGGLE"|"AGENT_ERROR"|"SOFTPHONE_ERROR")} param.eventType Event type to publish.
 * @param {object} param.error Error object representing the error
 */
function publishError(_ref2) {
  var eventType = _ref2.eventType,
    error = _ref2.error;
  if (error instanceof _types__WEBPACK_IMPORTED_MODULE_5__.CustomError) {
    dispatchCustomError(error, eventType);
    return;
  }
  switch (eventType) {
    case _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.LOGIN_RESULT:
      dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_ERROR_TYPE.CAN_NOT_LOG_IN, error, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.LOGIN_RESULT);
      break;
    case _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.LOGOUT_RESULT:
      dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_ERROR_TYPE.CAN_NOT_LOG_OUT, error, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.LOGOUT_RESULT);
      break;
    case _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.CALL_STARTED:
      dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_START_THE_CALL, error, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.CALL_STARTED);
      break;
    case _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.QUEUED_CALL_STARTED:
      dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_START_THE_CALL, error, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.QUEUED_CALL_STARTED);
      break;
    case _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.CALL_CONNECTED:
      dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_START_THE_CALL, error, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.CALL_CONNECTED);
      break;
    case _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.HANGUP:
      dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_END_THE_CALL, error, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.HANGUP);
      break;
    case _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.PARTICIPANT_ADDED:
      dispatchError(getErrorType(error) === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.INVALID_PARTICIPANT ? _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.INVALID_PARTICIPANT : _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_ADD_PARTICIPANT, error, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.PARTICIPANT_ADDED);
      break;
    case _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.PARTICIPANT_CONNECTED:
      dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_CONNECT_PARTICIPANT, error, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.PARTICIPANT_CONNECTED);
      break;
    case _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.PARTICIPANT_REMOVED:
      dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_HANGUP_PARTICIPANT, error, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.PARTICIPANT_REMOVED);
      break;
    case _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.MUTE_TOGGLE:
      dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_TOGGLE_MUTE, error, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.MUTE_TOGGLE);
      break;
    case _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.HOLD_TOGGLE:
      dispatchError(getErrorType(error) === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.INVALID_PARTICIPANT ? _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.INVALID_PARTICIPANT : _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_TOGGLE_HOLD, error, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.HOLD_TOGGLE);
      break;
    case _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.RECORDING_TOGGLE:
      dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_TOGGLE_RECORD, error, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.RECORDING_TOGGLE);
      break;
    case _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.PARTICIPANTS_SWAPPED:
      dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_SWAP_PARTICIPANTS, error, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.PARTICIPANTS_SWAPPED);
      break;
    case _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.PARTICIPANTS_CONFERENCED:
      dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_CONFERENCE, error, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.PARTICIPANTS_CONFERENCED);
      break;
    case _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.AGENT_ERROR:
      dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.AGENT_ERROR, error, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.AGENT_ERROR);
      break;
    case _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.SOFTPHONE_ERROR:
      switch (getErrorType(error)) {
        case _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.UNSUPPORTED_BROWSER:
        case _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.MICROPHONE_NOT_SHARED:
        case _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.USER_BUSY_ERROR:
        case _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.WEBRTC_ERROR:
          dispatchError(getErrorType(error), error, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.SOFTPHONE_ERROR);
          break;
        default:
          dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_ERROR_TYPE.GENERIC_ERROR, error, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.SOFTPHONE_ERROR);
      }
      break;
    case _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.CALL_UPDATED:
      dispatchError(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_UPDATE_CALL, error, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.CALL_UPDATED);
      break;
    default:
      console.error('Unhandled error scenario with arguments ', arguments);
  }
}

/**
 * Publish an event to Sfdc. The event payload will be verified to be the correct type before being published. 
 * @param {object} param
 * @param {("LOGIN_RESULT"|"LOGOUT_RESULT"|"CALL_STARTED"|"QUEUED_CALL_STARTED"|"CALL_CONNECTED"|"HANGUP"|"PARTICIPANT_CONNECTED"|"PARTICIPANT_ADDED"|"PARTICIPANTS_SWAPPED"|"PARTICIPANTS_CONFERENCED"|"MESSAGE"|"MUTE_TOGGLE"|"HOLD_TOGGLE"|"RECORDING_TOGGLE")} param.eventType Event type to publish
 * @param {object} param.payload Payload for the event. Must to be an object of the payload class associated with the EVENT_TYPE else the event is NOT dispatched
 * @param {boolean} param.registerLog Boolean to opt out of registering logs for events
 * LOGIN_RESULT - GenericResult
 * LOGOUT_RESULT - LogoutResult
 * CALL_STARTED - CallResult
 * QUEUED_CALL_STARTED - CallResult
 * CALL_CONNECTED - CallResult
 * HANGUP - CallResult
 * PARTICIPANT_CONNECTED - ParticipantResult
 * PARTICIPANT_ADDED - ParticipantResult
 * PARTICIPANTS_SWAPPED - HoldToggleResult
 * PARTICIPANTS_CONFERENCED - HoldToggleResult
 * MESSAGE - object
 * MUTE_TOGGLE - MuteToggleResult
 * HOLD_TOGGLE - HoldToggleResult
 * RECORDING_TOGGLE - RecordingToggleResult
 * AUDIO_STATS - AudioStats
 */
function publishEvent(_x3) {
  return _publishEvent.apply(this, arguments);
}
function _publishEvent() {
  _publishEvent = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee4(_ref3) {
    var eventType, payload, _ref3$registerLog, registerLog, telephonyConnector, hangupPayload, contact, initialCallHasEnded, callInfo, callAttributes, phoneNumber, callId, connectionId, _initialCallHasEnded, _callInfo, _callAttributes, _phoneNumber, _callId2, _contact, _connectionId, call, _telephonyConnector23, activeCallsResult, activeCalls, transferCall, event, isThirdPartyOnHold, isCustomerOnHold, calls, isCallMerged, isRecordingPaused, contactId, initialContactId, instanceId, region, _isThirdPartyOnHold, _isCustomerOnHold, _calls, _isThirdPartyOnHold2, _isCustomerOnHold2, _calls2, _isCallMerged, audioStats, _callId3, mos, statusId;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          eventType = _ref3.eventType, payload = _ref3.payload, _ref3$registerLog = _ref3.registerLog, registerLog = _ref3$registerLog === void 0 ? true : _ref3$registerLog;
          _context4.t0 = eventType;
          _context4.next = _context4.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.LOGIN_RESULT ? 4 : _context4.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.LOGOUT_RESULT ? 6 : _context4.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.CALL_STARTED ? 8 : _context4.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.QUEUED_CALL_STARTED ? 10 : _context4.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.CALL_CONNECTED ? 12 : _context4.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.HANGUP ? 28 : _context4.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.PARTICIPANT_ADDED ? 30 : _context4.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.PARTICIPANT_CONNECTED ? 32 : _context4.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.PARTICIPANT_REMOVED ? 34 : _context4.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.MESSAGE ? 44 : _context4.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.AFTER_CALL_WORK_STARTED ? 46 : _context4.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.WRAP_UP_ENDED ? 48 : _context4.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.REMOTE_CONTROLLER ? 50 : _context4.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.MUTE_TOGGLE ? 52 : _context4.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.HOLD_TOGGLE ? 54 : _context4.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.RECORDING_TOGGLE ? 57 : _context4.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.PARTICIPANTS_SWAPPED ? 60 : _context4.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.PARTICIPANTS_CONFERENCED ? 62 : _context4.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.CALL_UPDATED ? 64 : _context4.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.UPDATE_AUDIO_STATS ? 66 : _context4.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.SUPERVISOR_BARGED_IN ? 68 : _context4.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.CALL_BARGED_IN ? 70 : _context4.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.SUPERVISOR_CALL_STARTED ? 72 : _context4.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.SUPERVISOR_CALL_CONNECTED ? 74 : _context4.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.SUPERVISOR_HANGUP ? 76 : _context4.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.SET_AGENT_STATUS ? 78 : _context4.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.SHOW_TRANSFER_VIEW ? 80 : _context4.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.STORAGE_ACCESS_RESULT ? 82 : _context4.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.AFTER_CONVERSATION_WORK_STARTED ? 84 : _context4.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.AFTER_CONVERSATION_WORK_ENDED ? 86 : _context4.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.GET_AGENT_STATUS ? 88 : _context4.t0 === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.STATE_CHANGE ? 90 : 92;
          break;
        case 4:
          if (validatePayload(payload, _types__WEBPACK_IMPORTED_MODULE_5__.GenericResult, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_ERROR_TYPE.CAN_NOT_LOG_IN, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.LOGIN_RESULT)) {
            dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.LOGIN_RESULT, payload, registerLog);
            if (payload.success) {
              setConnectorReady();
            }
          }
          return _context4.abrupt("break", 92);
        case 6:
          if (validatePayload(payload, _types__WEBPACK_IMPORTED_MODULE_5__.LogoutResult, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_ERROR_TYPE.CAN_NOT_LOG_OUT, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.LOGOUT_RESULT)) {
            dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.LOGOUT_RESULT, {
              success: payload.success,
              loginFrameHeight: payload.loginFrameHeight
            }, registerLog);
          }
          return _context4.abrupt("break", 92);
        case 8:
          if (validatePayload(payload, _types__WEBPACK_IMPORTED_MODULE_5__.CallResult, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_START_THE_CALL, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.CALL_STARTED)) {
            dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.CALL_STARTED, payload.call, true /* ignoring registerLog for critical event*/);
          }
          return _context4.abrupt("break", 92);
        case 10:
          if (validatePayload(payload, _types__WEBPACK_IMPORTED_MODULE_5__.CallResult, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_START_THE_CALL, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.QUEUED_CALL_STARTED)) {
            dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.QUEUED_CALL_STARTED, payload.call, true /* ignoring registerLog for critical event*/);
          }
          return _context4.abrupt("break", 92);
        case 12:
          if (!validatePayload(payload, _types__WEBPACK_IMPORTED_MODULE_5__.CallResult, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_START_THE_CALL, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.CALL_CONNECTED)) {
            _context4.next = 27;
            break;
          }
          (0,_mosUtil__WEBPACK_IMPORTED_MODULE_6__.initAudioStats)();
          if (!isSupervisorConnected) {
            _context4.next = 26;
            break;
          }
          _context4.next = 17;
          return vendorConnector.getTelephonyConnector();
        case 17:
          telephonyConnector = _context4.sent;
          _context4.next = 20;
          return telephonyConnector.supervisorDisconnect();
        case 20:
          hangupPayload = _context4.sent;
          _types__WEBPACK_IMPORTED_MODULE_5__.Validator.validateClassObject(hangupPayload, _types__WEBPACK_IMPORTED_MODULE_5__.SupervisorHangupResult);
          isSupervisorConnected = false;
          dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.SUPERVISOR_HANGUP, hangupPayload, true /* ignoring registerLog for critical event*/);
          dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.CALL_CONNECTED, payload.call, true /* ignoring registerLog for critical event*/);
          return _context4.abrupt("break", 92);
        case 26:
          dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.CALL_CONNECTED, payload.call, true /* ignoring registerLog for critical event*/);
        case 27:
          return _context4.abrupt("break", 92);
        case 28:
          if (validatePayload(payload, _types__WEBPACK_IMPORTED_MODULE_5__.HangupResult, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_END_THE_CALL, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.HANGUP)) {
            dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.HANGUP, payload.calls, true /* ignoring registerLog for critical event*/);
          }
          return _context4.abrupt("break", 92);
        case 30:
          if (validatePayload(payload, _types__WEBPACK_IMPORTED_MODULE_5__.ParticipantResult, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_ADD_PARTICIPANT, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.PARTICIPANT_ADDED)) {
            contact = payload.contact, initialCallHasEnded = payload.initialCallHasEnded, callInfo = payload.callInfo, callAttributes = payload.callAttributes, phoneNumber = payload.phoneNumber, callId = payload.callId, connectionId = payload.connectionId;
            dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.PARTICIPANT_ADDED, {
              contact: contact,
              initialCallHasEnded: initialCallHasEnded,
              callInfo: callInfo,
              callAttributes: callAttributes,
              phoneNumber: phoneNumber,
              callId: callId,
              connectionId: connectionId
            }, true /* ignoring registerLog for critical event*/);
          }
          return _context4.abrupt("break", 92);
        case 32:
          if (validatePayload(payload, _types__WEBPACK_IMPORTED_MODULE_5__.ParticipantResult, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_CONNECT_PARTICIPANT, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.PARTICIPANT_CONNECTED)) {
            _initialCallHasEnded = payload.initialCallHasEnded, _callInfo = payload.callInfo, _callAttributes = payload.callAttributes, _phoneNumber = payload.phoneNumber, _callId2 = payload.callId, _contact = payload.contact, _connectionId = payload.connectionId;
            dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.PARTICIPANT_CONNECTED, {
              initialCallHasEnded: _initialCallHasEnded,
              callInfo: _callInfo,
              callAttributes: _callAttributes,
              phoneNumber: _phoneNumber,
              callId: _callId2,
              contact: _contact,
              connectionId: _connectionId
            }, true /* ignoring registerLog for critical event*/);
          }
          return _context4.abrupt("break", 92);
        case 34:
          if (!validatePayload(payload, _types__WEBPACK_IMPORTED_MODULE_5__.CallResult, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_HANGUP_PARTICIPANT, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.PARTICIPANT_REMOVED)) {
            _context4.next = 43;
            break;
          }
          call = payload.call;
          _context4.next = 38;
          return vendorConnector.getTelephonyConnector();
        case 38:
          _telephonyConnector23 = _context4.sent;
          _context4.next = 41;
          return _telephonyConnector23.getActiveCalls();
        case 41:
          activeCallsResult = _context4.sent;
          if (validatePayload(activeCallsResult, _types__WEBPACK_IMPORTED_MODULE_5__.ActiveCallsResult)) {
            // when no more active calls, fire HANGUP
            activeCalls = activeCallsResult.activeCalls;
            if (activeCalls.length === 0) {
              dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.HANGUP, call, true /* ignoring registerLog for critical event*/);
            } else if (call && call.callAttributes && call.callType !== _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].CALL_TYPE.CONSULT && call.callAttributes.participantType === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].PARTICIPANT_TYPE.INITIAL_CALLER) {
              // when there is still transfer call, based on the state of the transfer call, fire PARTICIPANT_ADDED or PARTICIPANT_CONNECTED
              transferCall = Object.values(activeCalls).filter(function (obj) {
                return obj['callType'] === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].CALL_TYPE.ADD_PARTICIPANT;
              }).pop();
              event = transferCall.state === _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].CALL_STATE.TRANSFERRING ? _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.PARTICIPANT_ADDED : _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.PARTICIPANT_CONNECTED;
              dispatchEvent(event, {
                initialCallHasEnded: true
              }, true /* ignoring registerLog for critical event*/);
            } else {
              dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.PARTICIPANT_REMOVED, {
                callId: call ? call.callId : null,
                connectionId: call ? call.connectionId : null,
                reason: call ? call.reason : null
              }, true /* ignoring registerLog for critical event*/);
            }
          }
        case 43:
          return _context4.abrupt("break", 92);
        case 44:
          dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.MESSAGE, payload, registerLog);
          return _context4.abrupt("break", 92);
        case 46:
          dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.AFTER_CALL_WORK_STARTED, payload, registerLog);
          return _context4.abrupt("break", 92);
        case 48:
          dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.WRAP_UP_ENDED, payload, registerLog);
          return _context4.abrupt("break", 92);
        case 50:
          channelMessageHandler(payload);
          return _context4.abrupt("break", 92);
        case 52:
          if (validatePayload(payload, _types__WEBPACK_IMPORTED_MODULE_5__.MuteToggleResult, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_TOGGLE_MUTE, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.MUTE_TOGGLE)) {
            dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.MUTE_TOGGLE, payload, registerLog);
          }
          return _context4.abrupt("break", 92);
        case 54:
          isThirdPartyOnHold = payload.isThirdPartyOnHold, isCustomerOnHold = payload.isCustomerOnHold, calls = payload.calls, isCallMerged = payload.isCallMerged;
          if (validatePayload(payload, _types__WEBPACK_IMPORTED_MODULE_5__.HoldToggleResult, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_TOGGLE_HOLD, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.HOLD_TOGGLE)) {
            dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.HOLD_TOGGLE, {
              isThirdPartyOnHold: isThirdPartyOnHold,
              isCustomerOnHold: isCustomerOnHold,
              calls: calls,
              isCallMerged: isCallMerged
            }, registerLog);
          }
          return _context4.abrupt("break", 92);
        case 57:
          isRecordingPaused = payload.isRecordingPaused, contactId = payload.contactId, initialContactId = payload.initialContactId, instanceId = payload.instanceId, region = payload.region;
          if (validatePayload(payload, _types__WEBPACK_IMPORTED_MODULE_5__.RecordingToggleResult, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_TOGGLE_RECORD, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.RECORDING_TOGGLE)) {
            dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.RECORDING_TOGGLE, {
              isRecordingPaused: isRecordingPaused,
              contactId: contactId,
              initialContactId: initialContactId,
              instanceId: instanceId,
              region: region
            }, registerLog);
          }
          return _context4.abrupt("break", 92);
        case 60:
          if (validatePayload(payload, _types__WEBPACK_IMPORTED_MODULE_5__.HoldToggleResult, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_SWAP_PARTICIPANTS, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.PARTICIPANTS_SWAPPED)) {
            _isThirdPartyOnHold = payload.isThirdPartyOnHold, _isCustomerOnHold = payload.isCustomerOnHold, _calls = payload.calls;
            dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.HOLD_TOGGLE, {
              isThirdPartyOnHold: _isThirdPartyOnHold,
              isCustomerOnHold: _isCustomerOnHold,
              calls: _calls
            }, true /* ignoring registerLog for critical event*/);
          }
          return _context4.abrupt("break", 92);
        case 62:
          if (validatePayload(payload, _types__WEBPACK_IMPORTED_MODULE_5__.HoldToggleResult, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_CONFERENCE, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.PARTICIPANTS_CONFERENCED)) {
            _isThirdPartyOnHold2 = payload.isThirdPartyOnHold, _isCustomerOnHold2 = payload.isCustomerOnHold, _calls2 = payload.calls, _isCallMerged = payload.isCallMerged;
            dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.HOLD_TOGGLE, {
              isThirdPartyOnHold: _isThirdPartyOnHold2,
              isCustomerOnHold: _isCustomerOnHold2,
              isCallMerged: _isCallMerged,
              calls: _calls2
            }, true /* ignoring registerLog for critical event*/);
          }
          return _context4.abrupt("break", 92);
        case 64:
          if (validatePayload(payload, _types__WEBPACK_IMPORTED_MODULE_5__.CallResult, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_UPDATE_CALL, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.CALL_UPDATED)) {
            dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.CALL_UPDATED, payload, registerLog);
          }
          return _context4.abrupt("break", 92);
        case 66:
          if (validatePayload(payload, _types__WEBPACK_IMPORTED_MODULE_5__.AudioStats)) {
            if (payload.stats) {
              (0,_mosUtil__WEBPACK_IMPORTED_MODULE_6__.updateAudioStats)(payload.stats);
              if (payload.callId) {
                audioStats = {
                  stats: payload.stats,
                  callId: payload.callId
                };
              } else {
                audioStats = {
                  stats: payload.stats
                };
              }
              dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.AUDIO_STATS, {
                audioStats: audioStats
              }, registerLog);
            }
            if (payload.isAudioStatsCompleted && payload.callId) {
              _callId3 = payload.callId;
              mos = (0,_mosUtil__WEBPACK_IMPORTED_MODULE_6__.getMOS)();
              dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.UPDATE_AUDIO_STATS_COMPLETED, {
                callId: _callId3,
                mos: mos
              }, registerLog);
            }
          }
          return _context4.abrupt("break", 92);
        case 68:
          if (validatePayload(payload, _types__WEBPACK_IMPORTED_MODULE_5__.SuperviseCallResult, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_BARGE_IN_SUPERVISOR, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.SUPERVISOR_BARGED_IN)) {
            dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.SUPERVISOR_BARGED_IN, payload.call, true /* ignoring registerLog for critical event*/);
          }
          return _context4.abrupt("break", 92);
        case 70:
          if (validatePayload(payload, _types__WEBPACK_IMPORTED_MODULE_5__.SupervisedCallInfo, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_ERROR_TYPE.GENERIC_ERROR, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.CALL_BARGED_IN)) {
            dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.CALL_BARGED_IN, payload, true /* ignoring registerLog for critical event*/);
          }
          return _context4.abrupt("break", 92);
        case 72:
          if (validatePayload(payload, _types__WEBPACK_IMPORTED_MODULE_5__.SuperviseCallResult, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_SUPERVISE_CALL, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.SUPERVISOR_CALL_STARTED)) {
            isSupervisorConnected = true;
            dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.SUPERVISOR_CALL_STARTED, payload.call, true /* ignoring registerLog for critical event*/);
          }
          return _context4.abrupt("break", 92);
        case 74:
          if (validatePayload(payload, _types__WEBPACK_IMPORTED_MODULE_5__.SuperviseCallResult, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_SUPERVISE_CALL, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.SUPERVISOR_CALL_CONNECTED)) {
            isSupervisorConnected = true;
            dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.SUPERVISOR_CALL_CONNECTED, payload.call, true /* ignoring registerLog for critical event*/);
          }
          return _context4.abrupt("break", 92);
        case 76:
          if (validatePayload(payload, _types__WEBPACK_IMPORTED_MODULE_5__.SupervisorHangupResult, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_ERROR_TYPE.CAN_NOT_DISCONNECT_SUPERVISOR, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.SUPERVISOR_HANGUP)) {
            isSupervisorConnected = false;
            dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.SUPERVISOR_HANGUP, payload.calls, true /* ignoring registerLog for critical event*/);
          }
          return _context4.abrupt("break", 92);
        case 78:
          if (validatePayload(payload, _types__WEBPACK_IMPORTED_MODULE_5__.AgentStatusInfo, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_ERROR_TYPE.CAN_NOT_SET_AGENT_STATUS, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.SET_AGENT_STATUS)) {
            statusId = payload.statusId;
            dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.SET_AGENT_STATUS, {
              statusId: statusId
            }, registerLog);
          }
          return _context4.abrupt("break", 92);
        case 80:
          dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].VOICE_EVENT_TYPE.SHOW_TRANSFER_VIEW, payload);
          return _context4.abrupt("break", 92);
        case 82:
          if (validatePayload(payload, _types__WEBPACK_IMPORTED_MODULE_5__.ShowStorageAccessResult, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_ERROR_TYPE.INVALID_STORAGE_ACCESS_RESULT, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.STORAGE_ACCESS_RESULT)) {
            dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.STORAGE_ACCESS_RESULT, payload);
            if (payload.success) {
              if (payload.showLogin) {
                dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.SHOW_LOGIN, {
                  loginFrameHeight: payload.loginFrameHeight
                }, registerLog);
              } else {
                setConnectorReady();
              }
            }
          }
          return _context4.abrupt("break", 92);
        case 84:
          if (validatePayload(payload, _types__WEBPACK_IMPORTED_MODULE_5__.ACWInfo, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_ERROR_TYPE.INVALID_ACW_INFO, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.AFTER_CONVERSATION_WORK_STARTED)) {
            dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.AFTER_CONVERSATION_WORK_STARTED, payload, registerLog);
          }
          return _context4.abrupt("break", 92);
        case 86:
          if (validatePayload(payload, _types__WEBPACK_IMPORTED_MODULE_5__.ACWInfo, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_ERROR_TYPE.INVALID_ACW_INFO, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.AFTER_CONVERSATION_WORK_ENDED)) {
            dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.AFTER_CONVERSATION_WORK_ENDED, payload, registerLog);
          }
          return _context4.abrupt("break", 92);
        case 88:
          if (validatePayload(payload, _types__WEBPACK_IMPORTED_MODULE_5__.AgentVendorStatusInfo, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_ERROR_TYPE.CAN_NOT_GET_AGENT_STATUS, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.GET_AGENT_STATUS)) {
            dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.GET_AGENT_STATUS, payload, registerLog);
          }
          return _context4.abrupt("break", 92);
        case 90:
          if (validatePayload(payload, _types__WEBPACK_IMPORTED_MODULE_5__.StateChangeResult, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_ERROR_TYPE.INVALID_STATE_CHANGE_RESULT, _constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.STATE_CHANGE)) {
            dispatchEvent(_constants_js__WEBPACK_IMPORTED_MODULE_4__["default"].SHARED_EVENT_TYPE.STATE_CHANGE, payload);
          }
          return _context4.abrupt("break", 92);
        case 92:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _publishEvent.apply(this, arguments);
}

/***/ }),

/***/ "./src/main/constants.js":
/*!*******************************!*\
  !*** ./src/main/constants.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONNECTOR_CONFIG_EXCEPTION_FIELDS: () => (/* binding */ CONNECTOR_CONFIG_EXCEPTION_FIELDS),
/* harmony export */   CONNECTOR_CONFIG_EXPOSED_FIELDS: () => (/* binding */ CONNECTOR_CONFIG_EXPOSED_FIELDS),
/* harmony export */   CONNECTOR_CONFIG_EXPOSED_FIELDS_STARTSWITH: () => (/* binding */ CONNECTOR_CONFIG_EXPOSED_FIELDS_STARTSWITH),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  SHARED_MESSAGE_TYPE: {
    // Telephony Message Types: sent from SFDC to Telephony Vendor
    // Framework Message Types
    SETUP_CONNECTOR: 'SETUP_CONNECTOR',
    CONNECTOR_READY: 'CONNECTOR_READY',
    LOG: 'LOG',
    TELEPHONY_EVENT_DISPATCHED: 'TELEPHONY_EVENT_DISPATCHED',
    SET_AGENT_STATUS: 'SET_AGENT_STATUS',
    GET_AGENT_STATUS: 'GET_AGENT_STATUS',
    LOGOUT: 'LOGOUT',
    MESSAGE: 'MESSAGE',
    DOWNLOAD_VENDOR_LOGS: 'DOWNLOAD_VENDOR_LOGS',
    AGENT_WORK_EVENT: 'AGENT_WORK_EVENT',
    GET_CONTACTS: 'GET_CONTACTS'
  },
  VOICE_MESSAGE_TYPE: {
    ACCEPT_CALL: 'ACCEPT_CALL',
    DECLINE_CALL: 'DECLINE_CALL',
    END_CALL: 'END_CALL',
    MUTE: 'MUTE',
    UNMUTE: 'UNMUTE',
    HOLD: 'HOLD',
    RESUME: 'RESUME',
    DIAL: 'DIAL',
    SEND_DIGITS: 'SEND_DIGITS',
    GET_PHONE_CONTACTS: 'GET_PHONE_CONTACTS',
    SWAP_PARTICIPANTS: 'SWAP_PARTICIPANTS',
    ADD_PARTICIPANT: 'ADD_PARTICIPANT',
    CONFERENCE: 'CONFERENCE',
    PAUSE_RECORDING: 'PAUSE_RECORDING',
    RESUME_RECORDING: 'RESUME_RECORDING',
    SUPERVISE_CALL: 'SUPERVISE_CALL',
    SUPERVISOR_BARGE_IN: 'SUPERVISOR_BARGE_IN',
    SUPERVISOR_DISCONNECT: 'SUPERVISOR_DISCONNECT',
    SET_AGENT_CONFIG: 'SET_AGENT_CONFIG',
    GET_SIGNED_RECORDING_URL: 'GET_SIGNED_RECORDING_URL',
    WRAP_UP_CALL: 'WRAP_UP_CALL',
    AGENT_AVAILABLE: 'AGENT_AVAILABLE',
    GET_AUDIO_DEVICES: 'GET_AUDIO_DEVICES'
  },
  SHARED_EVENT_TYPE: {
    ERROR: 'ERROR',
    WARNING: 'WARNING',
    INFO: 'INFO',
    LOGIN_STARTED: 'LOGIN_STARTED',
    LOGIN_RESULT: 'LOGIN_RESULT',
    // info about timeout, error, success etc
    LOGOUT_RESULT: 'LOGOUT_RESULT',
    SHOW_LOGIN: 'SHOW_LOGIN',
    SET_AGENT_STATUS_RESULT: 'SET_AGENT_STATUS_RESULT',
    GET_AGENT_STATUS_RESULT: 'GET_AGENT_STATUS_RESULT',
    MESSAGE: 'MESSAGE',
    SET_AGENT_STATUS: 'SET_AGENT_STATUS',
    GET_AGENT_STATUS: 'GET_AGENT_STATUS',
    STATE_CHANGE: 'STATE_CHANGE',
    REMOTE_CONTROLLER: 'REMOTE_CONTROLLER',
    SHOW_STORAGE_ACCESS: 'SHOW_STORAGE_ACCESS',
    STORAGE_ACCESS_RESULT: 'STORAGE_ACCESS_RESULT',
    GET_CONTACTS_RESULT: 'GET_CONTACTS_RESULT',
    AFTER_CONVERSATION_WORK_STARTED: 'AFTER_CONVERSATION_WORK_STARTED',
    AFTER_CONVERSATION_WORK_ENDED: 'AFTER_CONVERSATION_WORK_ENDED'
  },
  VOICE_EVENT_TYPE: {
    QUEUED_CALL_STARTED: 'QUEUED_CALL_STARTED',
    CALL_STARTED: 'CALL_STARTED',
    CALL_CONNECTED: 'CALL_CONNECTED',
    CALL_FAILED: 'CALL_FAILED',
    MUTE_TOGGLE: 'MUTE_TOGGLE',
    HOLD_TOGGLE: 'HOLD_TOGGLE',
    PHONE_CONTACTS: 'PHONE_CONTACTS',
    PARTICIPANT_ADDED: 'PARTICIPANT_ADDED',
    PARTICIPANT_CONNECTED: 'PARTICIPANT_CONNECTED',
    PARTICIPANT_REMOVED: 'PARTICIPANT_REMOVED',
    RECORDING_TOGGLE: 'RECORDING_TOGGLE',
    PARTICIPANTS_SWAPPED: 'PARTICIPANTS_SWAPPED',
    PARTICIPANTS_CONFERENCED: 'PARTICIPANTS_CONFERENCED',
    SIGNED_RECORDING_URL: 'SIGNED_RECORDING_URL',
    UPDATE_AUDIO_STATS: 'UPDATE_AUDIO_STATS',
    UPDATE_AUDIO_STATS_COMPLETED: 'UPDATE_AUDIO_STATS_COMPLETED',
    SUPERVISOR_BARGED_IN: 'SUPERVISOR_BARGED_IN',
    SUPERVISOR_CALL_STARTED: 'SUPERVISOR_CALL_STARTED',
    SUPERVISOR_CALL_CONNECTED: 'SUPERVISOR_CALL_CONNECTED',
    SUPERVISOR_HANGUP: 'SUPERVISOR_HANGUP',
    CALL_BARGED_IN: 'CALL_BARGED_IN',
    WRAP_UP_ENDED: 'WRAP_UP_ENDED',
    AFTER_CALL_WORK_STARTED: 'AFTER_CALL_WORK_STARTED',
    AGENT_CONFIG_UPDATED: 'AGENT_CONFIG_UPDATED',
    AGENT_ERROR: 'AGENT_ERROR',
    HANGUP: 'HANGUP',
    SOFTPHONE_ERROR: 'SOFTPHONE_ERROR',
    SHOW_TRANSFER_VIEW: 'SHOW_TRANSFER_VIEW',
    GET_AUDIO_DEVICES: 'GET_AUDIO_DEVICES',
    AUDIO_STATS: 'AUDIO_STATS',
    CALL_UPDATED: 'CALL_UPDATED' //sent during a call to update call controls
  },
  INFO_TYPE: {
    CAN_NOT_ACCEPT_THE_CALL: 'CAN_NOT_ACCEPT_THE_CALL'
  },
  SHARED_ERROR_TYPE: {
    CUSTOM_ERROR: 'CUSTOM_ERROR',
    GENERIC_ERROR: 'GENERIC_ERROR',
    AUTHENTICATION_ERROR: 'AUTHENTICATION_ERROR',
    INVALID_AGENT_STATUS: 'INVALID_AGENT_STATUS',
    CAN_NOT_GET_AGENT_STATUS: 'CAN_NOT_GET_AGENT_STATUS',
    CAN_NOT_SET_AGENT_STATUS: 'CAN_NOT_SET_AGENT_STATUS',
    LOGIN_REQUIRED: 'LOGIN_REQUIRED',
    CAN_NOT_LOG_IN: 'CAN_NOT_LOG_IN',
    CAN_NOT_LOG_OUT: 'CAN_NOT_LOG_OUT',
    INVALID_STATE_CHANGE_RESULT: 'INVALID_STATE_CHANGE_RESULT',
    INVALID_STORAGE_ACCESS_RESULT: 'INVALID_STORAGE_ACCESS_RESULT',
    INVALID_ACW_INFO: 'INVALID_ACW_INFO'
  },
  VOICE_ERROR_TYPE: {
    CAN_NOT_DECLINE_THE_CALL: 'CAN_NOT_DECLINE_THE_CALL',
    CAN_NOT_END_THE_CALL: 'CAN_NOT_END_THE_CALL',
    CAN_NOT_HOLD_CALL: 'CAN_NOT_HOLD_CALL',
    CAN_NOT_RESUME_CALL: 'CAN_NOT_RESUME_CALL',
    CAN_NOT_MUTE_CALL: 'CAN_NOT_MUTE_CALL',
    CAN_NOT_UNMUTE_CALL: 'CAN_NOT_UNMUTE_CALL',
    CAN_NOT_TOGGLE_MUTE: 'CAN_NOT_TOGGLE_MUTE',
    CAN_NOT_TOGGLE_HOLD: 'CAN_NOT_TOGGLE_HOLD',
    CAN_NOT_TOGGLE_RECORD: 'CAN_NOT_TOGGLE_RECORD',
    INVALID_PARTICIPANT: 'INVALID_PARTICIPANT',
    INVALID_PARAMS: 'INVALID_PARAMS',
    CAN_NOT_GET_PHONE_CONTACTS: 'CAN_NOT_GET_PHONE_CONTACTS',
    CAN_NOT_SWAP_PARTICIPANTS: 'CAN_NOT_SWAP_PARTICIPANTS',
    CAN_NOT_CONFERENCE: 'CAN_NOT_CONFERENCE',
    INVALID_DESTINATION: 'INVALID_DESTINATION',
    INVALID_PHONE_NUMBER: 'INVALID_PHONE_NUMBER',
    CAN_NOT_HANGUP_PARTICIPANT: 'CAN_NOT_HANGUP_PARTICIPANT',
    CAN_NOT_ADD_PARTICIPANT: 'CAN_NOT_ADD_PARTICIPANT',
    CAN_NOT_CONNECT_PARTICIPANT: 'CAN_NOT_CONNECT_PARTICIPANT',
    CAN_NOT_START_THE_CALL: 'CAN_NOT_START_THE_CALL',
    CAN_NOT_PAUSE_RECORDING: 'CAN_NOT_PAUSE_RECORDING',
    CAN_NOT_RESUME_RECORDING: 'CAN_NOT_RESUME_RECORDING',
    CAN_NOT_SET_AGENT_CONFIG: 'CAN_NOT_SET_AGENT_CONFIG',
    CAN_NOT_SET_CAPABILITIES: 'CAN_NOT_SET_CAPABILITIES',
    CAN_NOT_UPDATE_PHONE_NUMBER: 'CAN_NOT_UPDATE_PHONE_NUMBER',
    CAN_NOT_GET_SIGNED_RECORDING_URL: 'CAN_NOT_GET_SIGNED_RECORDING_URL',
    CAN_NOT_SUPERVISE_CALL: 'CAN_NOT_SUPERVISE_CALL',
    CAN_NOT_DISCONNECT_SUPERVISOR: 'CAN_NOT_DISCONNECT_SUPERVISOR',
    CAN_NOT_BARGE_IN_SUPERVISOR: 'CAN_NOT_BARGE_IN_SUPERVISOR',
    CAN_NOT_BARGE_IN_CALL: 'CAN_NOT_BARGE_IN_CALL',
    AGENT_ERROR: 'AGENT_ERROR',
    MICROPHONE_NOT_SHARED: 'MICROPHONE_NOT_SHARED',
    UNSUPPORTED_BROWSER: 'UNSUPPORTED_BROWSER',
    USER_BUSY_ERROR: 'USER_BUSY_ERROR',
    WEBRTC_ERROR: 'WEBRTC_ERROR',
    CAN_NOT_GET_AUDIO_DEVICES: 'CAN_NOT_GET_AUDIO_DEVICES',
    CAN_NOT_UPDATE_CALL: 'CAN_NOT_UPDATE_CALL',
    AREA_CODE_NOT_IN_DIALABLE_LIST: 'AREA_CODE_NOT_IN_DIALABLE_LIST',
    PHONE_NUMBER_NOT_VALID: 'PHONE_NUMBER_NOT_VALID',
    PHONE_NUMBER_NOT_VALID_E164_FORMAT: 'PHONE_NUMBER_NOT_VALID_E164_FORMAT',
    UNAUTHORIZED_SERVICE_CALL: 'UNAUTHORIZED_SERVICE_CALL',
    AGENT_AT_MAXIMUM_CAPACITY: 'AGENT_AT_MAXIMUM_CAPACITY',
    OUTBOUND_QUEUE_MISCONFIGURED: 'OUTBOUND_QUEUE_MISCONFIGURED',
    CALL_THROTTLED: 'CALL_THROTTLED',
    TIMEOUT_ERROR: 'TIMEOUT_ERROR',
    UNABLE_TO_CONNECT_TO_AGENT: 'UNABLE_TO_CONNECT_TO_AGENT',
    AGENT_NOT_INITIALIZED: 'AGENT_NOT_INITIALIZED'
  },
  AGENT_STATUS: {
    ONLINE: 'Online',
    OFFLINE: 'Offline',
    ACW: 'AfterCallWork'
  },
  PARTICIPANT_TYPE: {
    AGENT: 'Agent',
    INITIAL_CALLER: 'Initial_Caller',
    THIRD_PARTY: 'Third_Party',
    SUPERVISOR: 'Supervisor'
  },
  CALL_TYPE: {
    INBOUND: 'Inbound',
    OUTBOUND: 'Outbound',
    CALLBACK: 'Callback',
    ADD_PARTICIPANT: 'AddParticipant',
    TRANSFER: 'Transfer',
    INTERNAL_CALL: 'InternalCall',
    DIALED_CALLBACK: 'DialedCallback',
    CONSULT: 'Consult'
  },
  CALL_SUBTYPE: {
    PSTN: 'PSTN',
    WEB_RTC: 'WebRTC'
  },
  DIALER_TYPE: {
    OUTBOUND_PREVIEW: 'OutboundPreview',
    NONE: 'None'
  },
  CONTACT_TYPE: {
    PHONEBOOK: 'PhoneBook',
    QUEUE: 'Queue',
    PHONENUMBER: 'PhoneNumber',
    AGENT: 'Agent',
    FLOW: 'Flow'
  },
  CONTACT_LIST_TYPE: {
    TRANSFER: 'Transfer',
    CONFERENCE: 'Conference',
    ALL: 'All'
  },
  AGENT_CONFIG_TYPE: {
    SHOW_AGENT_SETTINGS: 'SHOW_AGENT_SETTINGS',
    PHONES: 'PHONES',
    SELECTED_PHONE: 'SELECTED_PHONE'
  },
  SHARED_CAPABILITIES_TYPE: {
    DEBUG_ENABLED: 'DEBUG_ENABLED',
    CONTACT_SEARCH: 'CONTACT_SEARCH',
    VENDOR_PROVIDED_AVAILABILITY: 'VENDOR_PROVIDED_AVAILABILITY',
    VENDOR_PROVIDED_QUEUE_WAIT_TIME: 'VENDOR_PROVIDED_QUEUE_WAIT_TIME',
    TRANSFER_TO_OMNI_FLOW: 'TRANSFER_TO_OMNI_FLOW',
    PENDING_STATUS_CHANGE: 'PENDING_STATUS_CHANGE',
    SFDC_PENDING_STATE: 'SFDC_PENDING_STATE',
    AUTO_ACCEPT_ENABLED: 'AUTO_ACCEPT_ENABLED'
  },
  VOICE_CAPABILITIES_TYPE: {
    MUTE: 'MUTE',
    RECORD: 'RECORD',
    MERGE: 'MERGE',
    SWAP: 'SWAP',
    BLIND_TRANSFER: 'BLIND_TRANSFER',
    SIGNED_RECORDING_URL: 'SIGNED_RECORDING_URL',
    SUPERVISOR_LISTEN_IN: 'SUPERVISOR_LISTEN_IN',
    SUPERVISOR_BARGE_IN: 'SUPERVISOR_BARGE_IN',
    MOS: 'MOS',
    PHONEBOOK: 'PHONEBOOK',
    HAS_GET_EXTERNAL_SPEAKER: 'HAS_GET_EXTERNAL_SPEAKER',
    HAS_SET_EXTERNAL_SPEAKER: 'HAS_SET_EXTERNAL_SPEAKER',
    HAS_GET_EXTERNAL_MICROPHONE: 'HAS_GET_EXTERNAL_MICROPHONE',
    HAS_SET_EXTERNAL_MICROPHONE: 'HAS_SET_EXTERNAL_MICROPHONE',
    CAN_CONSULT: 'CAN_CONSULT',
    DIAL_PAD: 'DIAL_PAD',
    HAS_HID_SUPPORT: 'HAS_HID_SUPPORT',
    PHONEBOOK_DISABLE: 'PHONEBOOK_DISABLE'
  },
  CALL_STATE: {
    RINGING: 'ringing',
    CONNECTED: 'connected',
    TRANSFERRING: 'transferring',
    TRANSFERRED: 'transferred',
    ENDED: 'ended'
  },
  PHONE_TYPE: {
    DESK_PHONE: 'DESK_PHONE',
    SOFT_PHONE: 'SOFT_PHONE'
  },
  HANGUP_REASON: {
    PHONE_CALL_ERROR: "error",
    PHONE_CALL_ENDED: "ended"
  },
  AGENT_AVAILABILITY: {
    AVAILABLE: "AVAILABLE",
    BUSY: "BUSY",
    OFFLINE: "OFFLINE"
  },
  REMOVE_PARTICIPANT_VARIANT: {
    ALWAYS: 'ALWAYS',
    NEVER: 'NEVER',
    ALWAYS_EXCEPT_ON_HOLD: 'ALWAYS_EXCEPT_ON_HOLD'
  },
  LOG_LEVEL: {
    ERROR: "ERROR",
    INFO: "INFO"
  },
  LOG_SOURCE: {
    SYSTEM: "SYSTEM",
    PARTNER: "PARTNER"
  },
  CONTACTS_FILTER_TYPES: {
    AGENT: "AGENT",
    QUEUE: "QUEUE",
    CONTACT: "CONTACT",
    DIRECTORY: "DIRECTORY",
    FLOW: "FLOW",
    AVAILABLE: "AVAILABLE"
  },
  WORK_EVENT: {
    ASSIGNED: 'ASSIGNED',
    ACCEPTED: 'ACCEPTED',
    DECLINED: 'DECLINED',
    COMPLETED: 'COMPLETED',
    CLOSED: 'CLOSED',
    PAUSED: 'PAUSED',
    UNPAUSED: 'UNPAUSED'
  },
  DIAL_OPTIONS: {
    CALLBACK: "isCallback=true",
    CONSULT: "isConsultCall"
  },
  HANGUP_STATUS: {
    MISSED_AGENT: "MissedCallAgent",
    DECLINED: "DeclinedByAgent",
    FAILED_CONNECT_AGENT: "FailedConnectAgent",
    FAILED_CONNECT_CUSTOMER: "FailedConnectCustomer",
    CALLBACK_MISSED_OR_REJECTED: 'CallbackMissedOrRejected' // Used only for Amazon; workaround for https://github.com/amazon-connect/amazon-connect-streams/issues/344
  }
});

/**
 * Fields in the connector configuration that are logged. 
 */
var CONNECTOR_CONFIG_EXPOSED_FIELDS = ["/internalNameLabel", "/reqGeneralInfo/reqAdapterUrl", "/reqGeneralInfo/reqVendorInfoApiName", "isACWAllowed", "isHVSEnabled", "orgDomainName", "phoneServiceChannelId", "telephonySettingsComponentFqn"];

/**
 * Fields that starts with string in the connector configuration that are logged. 
 */
var CONNECTOR_CONFIG_EXPOSED_FIELDS_STARTSWITH = ["/reqHvcc"];

/**
 * Fields in the connector configuration that are NOT logged. 
 */
var CONNECTOR_CONFIG_EXCEPTION_FIELDS = ["/reqHvcc/reqTelephonyIntegrationCertificate"];

/***/ }),

/***/ "./src/main/downloadData.js":
/*!**********************************!*\
  !*** ./src/main/downloadData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   downloadData: () => (/* binding */ downloadData)
/* harmony export */ });
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

/**
 * Download data as a file.
 * @param {object} data 
 * @param {string} fileName 
 * @param {string} fileType
 */
function downloadData(data, fileName, fileType) {
  if (!document || !data) return;
  var dataStr = typeof data === 'string' ? data : JSON.stringify(data);
  var file = new Blob([dataStr], {
    type: fileType
  });
  var a = document.createElement("a");
  var blobURL = URL.createObjectURL(file);
  a.download = fileName;
  a.href = blobURL;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(blobURL);
}

/***/ }),

/***/ "./src/main/logger.js":
/*!****************************!*\
  !*** ./src/main/logger.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   downloadLogs: () => (/* binding */ downloadLogs),
/* harmony export */   getLogs: () => (/* binding */ getLogs),
/* harmony export */   log: () => (/* binding */ log)
/* harmony export */ });
/* harmony import */ var _downloadData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./downloadData.js */ "./src/main/downloadData.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/main/constants.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */




//The max size of the logs in # of characaters
var MAX_LOGS_SIZE = 1.5e7 / 2; //15 MB or 7.5M characters

var _strify = function _strify(obj) {
  return typeof obj === 'string' ? obj : JSON.stringify(obj);
};
var LOGS_SIZE = 0;
var logs = [];
function _log(logLevel, logMessage, logSource) {
  if (!logMessage) {
    throw new Error("Log Message required");
  }
  logLevel = logLevel || _constants__WEBPACK_IMPORTED_MODULE_1__["default"].LOG_LEVEL.INFO;
  logSource = logSource || _constants__WEBPACK_IMPORTED_MODULE_1__["default"].LOG_SOURCE.PARTNER;
  var logStr = [new Date().toISOString(), _strify(logLevel), _strify(logSource), "".concat(_strify(logMessage), "\n")].join("|");

  //If logs size is greater than max size, empty it.
  if (LOGS_SIZE + logStr.length >= MAX_LOGS_SIZE) {
    logs = [];
    LOGS_SIZE = 0;
  }
  LOGS_SIZE += logStr.length;
  logs.push(logStr);
}

/**
 * Log a message at a custom level.
 * @param {object} logMessage
 * @param {string} logLevel 
 * @param {string} [logSource]
 */
function log(logMessage, logLevel, logSource) {
  _log(logLevel, logMessage, logSource);
}

/**
 * 
 * @returns a deep copy of the logs array
 */
function getLogs() {
  return JSON.parse(JSON.stringify(logs));
}

/**
 * Download the logs as a file
 */
function downloadLogs() {
  (0,_downloadData_js__WEBPACK_IMPORTED_MODULE_0__.downloadData)(logs.join(''), "log-".concat(new Date().getTime(), ".txt"), 'text/plain');
}

/***/ }),

/***/ "./src/main/mosUtil.js":
/*!*****************************!*\
  !*** ./src/main/mosUtil.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enableMos: () => (/* binding */ enableMos),
/* harmony export */   getMOS: () => (/* binding */ getMOS),
/* harmony export */   initAudioStats: () => (/* binding */ initAudioStats),
/* harmony export */   updateAudioStats: () => (/* binding */ updateAudioStats)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/main/types.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

var audioStatus;
var supportsMos = false;
function getAvgStats(streamType) {
  var stats = audioStatus[streamType];
  return {
    packetsCount: stats.packetsCount / stats.statsCount,
    packetsLost: stats.packetsLost / stats.statsCount,
    jitterBufferMillis: stats.jitterBufferMillis / stats.statsCount,
    roundTripTimeMillis: stats.roundTripTimeMillis / stats.statsCount
  };
}
function getMOSByStream(streamType) {
  var avgStats = getAvgStats(streamType);
  var effectiveLatency = avgStats.roundTripTimeMillis + avgStats.jitterBufferMillis * 2 + 10.0;
  var R = 0;
  if (effectiveLatency < 160) {
    R = 93.2 - effectiveLatency / 40;
  } else {
    R = 93.2 - (effectiveLatency - 120) / 10;
  }
  R -= avgStats.packetsLost / avgStats.packetsCount * 2.50;
  return 1 + 0.035 * R + .000007 * R * (R - 60) * (100 - R);
}
function enableMos() {
  supportsMos = true;
}
function getMOS() {
  if (!supportsMos || !audioStatus) {
    return undefined;
  }
  var inputChannelMOS = getMOSByStream('inputChannelStats');
  var ouputChannelMOS = getMOSByStream('outputChannelStats');
  audioStatus = null;
  if (isNaN(ouputChannelMOS) && isNaN(inputChannelMOS)) {
    return 0;
  } else if (isNaN(ouputChannelMOS)) {
    return inputChannelMOS;
  } else if (isNaN(inputChannelMOS)) {
    return ouputChannelMOS;
  } else {
    return Math.min(inputChannelMOS, ouputChannelMOS);
  }
}
function initAudioStats() {
  audioStatus = new _types__WEBPACK_IMPORTED_MODULE_0__.AudioStatsElement({
    inputChannelStats: new _types__WEBPACK_IMPORTED_MODULE_0__.StatsInfo({
      packetsCount: 0,
      packetsLost: 0,
      jitterBufferMillis: 0,
      roundTripTimeMillis: 0
    }),
    outputChannelStats: new _types__WEBPACK_IMPORTED_MODULE_0__.StatsInfo({
      packetsCount: 0,
      packetsLost: 0,
      jitterBufferMillis: 0,
      roundTripTimeMillis: 0
    })
  });
}
function updateAudioStats(statsArray) {
  if (audioStatus) {
    statsArray.forEach(function (stats) {
      if (stats.inputChannelStats) {
        audioStatus.inputChannelStats.statsCount++;
        audioStatus.inputChannelStats.packetsCount += stats.inputChannelStats.packetsCount | 0;
        audioStatus.inputChannelStats.packetsLost += stats.inputChannelStats.packetsLost | 0;
        audioStatus.inputChannelStats.jitterBufferMillis += stats.inputChannelStats.jitterBufferMillis | 0;
        audioStatus.inputChannelStats.roundTripTimeMillis += stats.inputChannelStats.roundTripTimeMillis | 0;
      }
      if (stats.outputChannelStats) {
        audioStatus.outputChannelStats.statsCount++;
        audioStatus.outputChannelStats.packetsCount += stats.outputChannelStats.packetsCount | 0;
        audioStatus.outputChannelStats.packetsLost += stats.outputChannelStats.packetsLost | 0;
        audioStatus.outputChannelStats.jitterBufferMillis += stats.outputChannelStats.jitterBufferMillis | 0;
        audioStatus.outputChannelStats.roundTripTimeMillis += stats.outputChannelStats.roundTripTimeMillis | 0;
      }
    });
  }
}

/***/ }),

/***/ "./src/main/types.js":
/*!***************************!*\
  !*** ./src/main/types.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACWInfo: () => (/* binding */ ACWInfo),
/* harmony export */   ActiveCallsResult: () => (/* binding */ ActiveCallsResult),
/* harmony export */   AgentConfig: () => (/* binding */ AgentConfig),
/* harmony export */   AgentConfigResult: () => (/* binding */ AgentConfigResult),
/* harmony export */   AgentStatusInfo: () => (/* binding */ AgentStatusInfo),
/* harmony export */   AgentVendorStatusInfo: () => (/* binding */ AgentVendorStatusInfo),
/* harmony export */   AgentWork: () => (/* binding */ AgentWork),
/* harmony export */   AudioDevicesResult: () => (/* binding */ AudioDevicesResult),
/* harmony export */   AudioStats: () => (/* binding */ AudioStats),
/* harmony export */   AudioStatsElement: () => (/* binding */ AudioStatsElement),
/* harmony export */   CallInfo: () => (/* binding */ CallInfo),
/* harmony export */   CallResult: () => (/* binding */ CallResult),
/* harmony export */   Constants: () => (/* binding */ Constants),
/* harmony export */   Contact: () => (/* binding */ Contact),
/* harmony export */   ContactsFilter: () => (/* binding */ ContactsFilter),
/* harmony export */   ContactsResult: () => (/* binding */ ContactsResult),
/* harmony export */   CustomError: () => (/* binding */ CustomError),
/* harmony export */   DialOptions: () => (/* binding */ DialOptions),
/* harmony export */   GenericResult: () => (/* binding */ GenericResult),
/* harmony export */   HangupResult: () => (/* binding */ HangupResult),
/* harmony export */   HidDevice: () => (/* binding */ HidDevice),
/* harmony export */   HoldToggleResult: () => (/* binding */ HoldToggleResult),
/* harmony export */   InitResult: () => (/* binding */ InitResult),
/* harmony export */   LogoutResult: () => (/* binding */ LogoutResult),
/* harmony export */   MuteToggleResult: () => (/* binding */ MuteToggleResult),
/* harmony export */   ParticipantResult: () => (/* binding */ ParticipantResult),
/* harmony export */   Phone: () => (/* binding */ Phone),
/* harmony export */   PhoneCall: () => (/* binding */ PhoneCall),
/* harmony export */   PhoneCallAttributes: () => (/* binding */ PhoneCallAttributes),
/* harmony export */   PhoneContactsResult: () => (/* binding */ PhoneContactsResult),
/* harmony export */   RecordingToggleResult: () => (/* binding */ RecordingToggleResult),
/* harmony export */   SetAgentConfigResult: () => (/* binding */ SetAgentConfigResult),
/* harmony export */   SetAgentStateResult: () => (/* binding */ SetAgentStateResult),
/* harmony export */   SharedCapabilitiesResult: () => (/* binding */ SharedCapabilitiesResult),
/* harmony export */   ShowStorageAccessResult: () => (/* binding */ ShowStorageAccessResult),
/* harmony export */   SignedRecordingUrlResult: () => (/* binding */ SignedRecordingUrlResult),
/* harmony export */   StateChangeResult: () => (/* binding */ StateChangeResult),
/* harmony export */   StatsInfo: () => (/* binding */ StatsInfo),
/* harmony export */   SuperviseCallResult: () => (/* binding */ SuperviseCallResult),
/* harmony export */   SupervisedCallInfo: () => (/* binding */ SupervisedCallInfo),
/* harmony export */   SupervisorHangupResult: () => (/* binding */ SupervisorHangupResult),
/* harmony export */   TelephonyConnector: () => (/* binding */ TelephonyConnector),
/* harmony export */   Validator: () => (/* binding */ Validator),
/* harmony export */   VendorConnector: () => (/* binding */ VendorConnector),
/* harmony export */   VoiceCapabilitiesResult: () => (/* binding */ VoiceCapabilitiesResult)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants.js */ "./src/main/constants.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./logger.js */ "./src/main/logger.js");








function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _callSuper(t, o, e) { return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

/* eslint-disable no-unused-vars */


var Constants = {
  /**
  * @enum {string}
  */
  SHARED_EVENT_TYPE: {
    LOGIN_RESULT: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].SHARED_EVENT_TYPE.LOGIN_RESULT,
    LOGOUT_RESULT: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].SHARED_EVENT_TYPE.LOGOUT_RESULT,
    MESSAGE: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].SHARED_EVENT_TYPE.MESSAGE,
    SET_AGENT_STATUS: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].SHARED_EVENT_TYPE.SET_AGENT_STATUS,
    GET_AGENT_STATUS: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].SHARED_EVENT_TYPE.GET_AGENT_STATUS,
    STATE_CHANGE: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].SHARED_EVENT_TYPE.STATE_CHANGE,
    STORAGE_ACCESS_RESULT: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].SHARED_EVENT_TYPE.STORAGE_ACCESS_RESULT,
    GET_CONTACTS_RESULT: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].SHARED_EVENT_TYPE.GET_CONTACTS_RESULT,
    AFTER_CONVERSATION_WORK_STARTED: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].SHARED_EVENT_TYPE.AFTER_CONVERSATION_WORK_STARTED,
    AFTER_CONVERSATION_WORK_ENDED: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].SHARED_EVENT_TYPE.AFTER_CONVERSATION_WORK_ENDED
  },
  /**
  * @enum {string}
  */
  VOICE_EVENT_TYPE: {
    CALL_STARTED: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_EVENT_TYPE.CALL_STARTED,
    QUEUED_CALL_STARTED: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_EVENT_TYPE.QUEUED_CALL_STARTED,
    CALL_CONNECTED: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_EVENT_TYPE.CALL_CONNECTED,
    HANGUP: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_EVENT_TYPE.HANGUP,
    MUTE_TOGGLE: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_EVENT_TYPE.MUTE_TOGGLE,
    HOLD_TOGGLE: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_EVENT_TYPE.HOLD_TOGGLE,
    RECORDING_TOGGLE: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_EVENT_TYPE.RECORDING_TOGGLE,
    PARTICIPANTS_SWAPPED: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_EVENT_TYPE.PARTICIPANTS_SWAPPED,
    PARTICIPANTS_CONFERENCED: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_EVENT_TYPE.PARTICIPANTS_CONFERENCED,
    PARTICIPANT_ADDED: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_EVENT_TYPE.PARTICIPANT_ADDED,
    PARTICIPANT_CONNECTED: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_EVENT_TYPE.PARTICIPANT_CONNECTED,
    PARTICIPANT_REMOVED: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_EVENT_TYPE.PARTICIPANT_REMOVED,
    AFTER_CALL_WORK_STARTED: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_EVENT_TYPE.AFTER_CALL_WORK_STARTED,
    WRAP_UP_ENDED: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_EVENT_TYPE.WRAP_UP_ENDED,
    AGENT_ERROR: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_EVENT_TYPE.AGENT_ERROR,
    SOFTPHONE_ERROR: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_EVENT_TYPE.SOFTPHONE_ERROR,
    UPDATE_AUDIO_STATS: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_EVENT_TYPE.UPDATE_AUDIO_STATS,
    CALL_BARGED_IN: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_EVENT_TYPE.CALL_BARGED_IN,
    SUPERVISOR_BARGED_IN: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_EVENT_TYPE.SUPERVISOR_BARGED_IN,
    SUPERVISOR_CALL_STARTED: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_EVENT_TYPE.SUPERVISOR_CALL_STARTED,
    SUPERVISOR_CALL_CONNECTED: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_EVENT_TYPE.SUPERVISOR_CALL_CONNECTED,
    SUPERVISOR_HANGUP: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_EVENT_TYPE.SUPERVISOR_HANGUP,
    SHOW_TRANSFER_VIEW: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_EVENT_TYPE.SHOW_TRANSFER_VIEW,
    AUDIO_STATS: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_EVENT_TYPE.AUDIO_STATS,
    CALL_UPDATED: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_EVENT_TYPE.CALL_UPDATED
  },
  /**
  * @enum {string}
  */
  SHARED_ERROR_TYPE: {
    GENERIC_ERROR: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].SHARED_ERROR_TYPE.GENERIC_ERROR,
    INVALID_AGENT_STATUS: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].SHARED_ERROR_TYPE.INVALID_AGENT_STATUS
  },
  /**
  * @enum {string}
  */
  VOICE_ERROR_TYPE: {
    INVALID_PARTICIPANT: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_ERROR_TYPE.INVALID_PARTICIPANT,
    INVALID_DESTINATION: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_ERROR_TYPE.INVALID_DESTINATION,
    CAN_NOT_UPDATE_PHONE_NUMBER: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_ERROR_TYPE.CAN_NOT_UPDATE_PHONE_NUMBER,
    INVALID_PARAMS: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_ERROR_TYPE.INVALID_PARAMS,
    AREA_CODE_NOT_IN_DIALABLE_LIST: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_ERROR_TYPE.AREA_CODE_NOT_IN_DIALABLE_LIST,
    PHONE_NUMBER_NOT_VALID: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_ERROR_TYPE.PHONE_NUMBER_NOT_VALID,
    PHONE_NUMBER_NOT_VALID_E164_FORMAT: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_ERROR_TYPE.PHONE_NUMBER_NOT_VALID_E164_FORMAT,
    UNAUTHORIZED_SERVICE_CALL: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_ERROR_TYPE.UNAUTHORIZED_SERVICE_CALL,
    AGENT_AT_MAXIMUM_CAPACITY: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_ERROR_TYPE.AGENT_AT_MAXIMUM_CAPACITY,
    OUTBOUND_QUEUE_MISCONFIGURED: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_ERROR_TYPE.OUTBOUND_QUEUE_MISCONFIGURED,
    CALL_THROTTLED: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_ERROR_TYPE.CALL_THROTTLED,
    TIMEOUT_ERROR: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_ERROR_TYPE.TIMEOUT_ERROR,
    UNABLE_TO_CONNECT_TO_AGENT: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_ERROR_TYPE.UNABLE_TO_CONNECT_TO_AGENT,
    AGENT_NOT_INITIALIZED: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].VOICE_ERROR_TYPE.AGENT_NOT_INITIALIZED
  },
  /**
  * @enum {string}
  */
  AGENT_STATUS: _objectSpread({}, _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].AGENT_STATUS),
  /**
  * @enum {string}
  */
  PARTICIPANT_TYPE: _objectSpread({}, _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].PARTICIPANT_TYPE),
  /**
  * @enum {string}
  */
  CALL_TYPE: _objectSpread({}, _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].CALL_TYPE),
  /**
   * @enum {string}
   */
  CALL_SUBTYPE: _objectSpread({}, _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].CALL_SUBTYPE),
  /**
   * @enum {string}
   */
  DIALER_TYPE: _objectSpread({}, _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].DIALER_TYPE),
  /**
  * @enum {string}
  */
  CONTACT_TYPE: _objectSpread({}, _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].CONTACT_TYPE),
  /**
  * @enum {string}
  */
  CONTACT_LIST_TYPE: _objectSpread({}, _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].CONTACT_LIST_TYPE),
  /**
  * @enum {string}
  */
  CALL_STATE: _objectSpread({}, _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].CALL_STATE),
  /**
  * @enum {string}
  */
  HANGUP_REASON: _objectSpread({}, _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].HANGUP_REASON),
  /**
  * @enum {string}
  */
  PHONE_TYPE: _objectSpread({}, _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].PHONE_TYPE),
  /**
   * @enum {String}
   */
  AGENT_AVAILABILITY: _objectSpread({}, _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].AGENT_AVAILABILITY),
  /**
   * @enum (String)
   */
  REMOVE_PARTICIPANT_VARIANT: _objectSpread({}, _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].REMOVE_PARTICIPANT_VARIANT),
  /**
   * @enum {String}
   */
  LOG_LEVEL: _objectSpread({}, _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].LOG_LEVEL),
  /**
   * @enum {String}
   */
  CONTACTS_FILTER_TYPES: _objectSpread({}, _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].CONTACTS_FILTER_TYPES),
  /**
   * @enum {String}
   */
  WORK_EVENT: _objectSpread({}, _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].WORK_EVENT),
  /**
   * @enum {String}
   */
  HANGUP_STATUS: _objectSpread({}, _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].HANGUP_STATUS)
};

/**
 * Class representing a Custom Error
 */
var CustomError = /*#__PURE__*/function (_Error) {
  /**
   * Custom error
   * @param {object} param
   * @param {String} param.labelName
   * @param {String} param.namespace
   * @param {String} [param.message]
   */
  function CustomError(_ref) {
    var _this;
    var labelName = _ref.labelName,
      namespace = _ref.namespace,
      message = _ref.message;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, CustomError);
    _this = _callSuper(this, CustomError, [message]);
    Validator.validateString(labelName);
    Validator.validateString(namespace);
    if (message) {
      Validator.validateString(message);
    }
    _this.labelName = labelName;
    _this.namespace = namespace;
    _this.message = message;
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CustomError, _Error);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CustomError);
}(/*#__PURE__*/(0,_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(Error));

/**
 * Class representing a Phone type
 */
var Phone = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(
/**
 * Create Phone
 * @param {object} param
 * @param {PHONE_TYPE} param.type
 * @param {string} [param.number]
 */
function Phone(_ref2) {
  var type = _ref2.type,
    number = _ref2.number;
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Phone);
  Validator.validateEnum(type, Object.values(_constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].PHONE_TYPE));
  if (number) {
    Validator.validateString(number);
  }
  this.type = type;
  this.number = number;
});

/**
 * Class representing a Hid Device
 */
var HidDevice = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(
/**
 * Create Hid Device
 * @param productId
 * @param vendorId
 */
function HidDevice(_ref3) {
  var productId = _ref3.productId,
    vendorId = _ref3.vendorId;
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, HidDevice);
  if (productId) {
    Validator.validateNumber(productId);
  }
  if (vendorId) {
    Validator.validateNumber(vendorId);
  }
  this.productId = productId;
  this.vendorId = vendorId;
});

/**
 * Class representing result type for mute() & unmute()
 */
var MuteToggleResult = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(
/**
 * Create MuteToggleResult
 * @param {object} param
 * @param {boolean} param.isMuted
 * @param {PhoneCall} param.call
 * @param {boolean} param.isGlobal
 */
function MuteToggleResult(_ref4) {
  var isMuted = _ref4.isMuted,
    call = _ref4.call,
    isGlobal = _ref4.isGlobal;
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MuteToggleResult);
  this.isMuted = isMuted;
  this.call = call;
  this.isGlobal = isGlobal;
});

/**
 * Class representing result type for getActiveCalls()
 */
var ActiveCallsResult = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(
/**
 * Create ActiveCallsResult
 * @param {object} param
 * @param {PhoneCall[]} [param.activeCalls]
 */
function ActiveCallsResult(_ref5) {
  var _ref5$activeCalls = _ref5.activeCalls,
    activeCalls = _ref5$activeCalls === void 0 ? [] : _ref5$activeCalls;
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ActiveCallsResult);
  if (activeCalls.length > 0) {
    activeCalls.forEach(function (activeCall) {
      Validator.validateClassObject(activeCall, PhoneCall);
    });
  }
  this.activeCalls = activeCalls;
});

/**
 * Class representing result type for getAudioDevices()
 */
var AudioDevicesResult = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(
/**
 * Create AudioDevicesResult
 * @param {object} param
 * @param {AudioDevice[]} param.audioDevices
 */
function AudioDevicesResult(_ref6) {
  var _ref6$audioDevices = _ref6.audioDevices,
    audioDevices = _ref6$audioDevices === void 0 ? [] : _ref6$audioDevices;
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AudioDevicesResult);
  this.audioDevices = audioDevices;
});

/**
 * Class representing result type for getSharedCapabilities()
 */
var SharedCapabilitiesResult = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(
/**
 * Create SharedCapabilitiesResult
 * @param {object} param
 * @param {boolean} [param.debugEnabled]
 * @param {boolean} [param.hasContactSearch] True if getPhoneContacts uses the 'contain' filter
 * @param {boolean} [param.hasAgentAvailability] True if getPhoneContacts also provides agent availability, false if Salesforce provides it.
 * @param {boolean} [param.hasQueueWaitTime] True if getPhoneContacts also provides estimated queue wait time, false if Salesforce provides it.
 * @param {boolean} [param.hasTransferToOmniFlow] True if vendor supports transfer to omni flows
 * @param {boolean} [param.hasPendingStatusChange] True if vendor supports Pending Status Change
 * @param {boolean} [param.hasSFDCPendingState] True if amazon connect has sfdc_pending state
 * @param {boolean} [param.hasAutoAcceptEnabled] True if agent has enabled auto accept
 */
function SharedCapabilitiesResult(_ref7) {
  var _ref7$debugEnabled = _ref7.debugEnabled,
    debugEnabled = _ref7$debugEnabled === void 0 ? true : _ref7$debugEnabled,
    _ref7$hasContactSearc = _ref7.hasContactSearch,
    hasContactSearch = _ref7$hasContactSearc === void 0 ? false : _ref7$hasContactSearc,
    _ref7$hasAgentAvailab = _ref7.hasAgentAvailability,
    hasAgentAvailability = _ref7$hasAgentAvailab === void 0 ? false : _ref7$hasAgentAvailab,
    _ref7$hasQueueWaitTim = _ref7.hasQueueWaitTime,
    hasQueueWaitTime = _ref7$hasQueueWaitTim === void 0 ? false : _ref7$hasQueueWaitTim,
    _ref7$hasTransferToOm = _ref7.hasTransferToOmniFlow,
    hasTransferToOmniFlow = _ref7$hasTransferToOm === void 0 ? false : _ref7$hasTransferToOm,
    _ref7$hasPendingStatu = _ref7.hasPendingStatusChange,
    hasPendingStatusChange = _ref7$hasPendingStatu === void 0 ? false : _ref7$hasPendingStatu,
    _ref7$hasSFDCPendingS = _ref7.hasSFDCPendingState,
    hasSFDCPendingState = _ref7$hasSFDCPendingS === void 0 ? false : _ref7$hasSFDCPendingS,
    _ref7$hasAutoAcceptEn = _ref7.hasAutoAcceptEnabled,
    hasAutoAcceptEnabled = _ref7$hasAutoAcceptEn === void 0 ? false : _ref7$hasAutoAcceptEn;
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, SharedCapabilitiesResult);
  Validator.validateBoolean(debugEnabled);
  Validator.validateBoolean(hasContactSearch);
  Validator.validateBoolean(hasAgentAvailability);
  Validator.validateBoolean(hasQueueWaitTime);
  Validator.validateBoolean(hasTransferToOmniFlow);
  Validator.validateBoolean(hasPendingStatusChange);
  Validator.validateBoolean(hasSFDCPendingState);
  Validator.validateBoolean(hasAutoAcceptEnabled);
  this.debugEnabled = debugEnabled;
  this.hasContactSearch = hasContactSearch;
  this.hasAgentAvailability = hasAgentAvailability;
  this.hasQueueWaitTime = hasQueueWaitTime;
  this.hasTransferToOmniFlow = hasTransferToOmniFlow;
  this.hasPendingStatusChange = hasPendingStatusChange;
  this.hasSFDCPendingState = hasSFDCPendingState;
  this.hasAutoAcceptEnabled = hasAutoAcceptEnabled;
});

/**
 * Class representing result type for getVoiceCapabilities()
 */
var VoiceCapabilitiesResult = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(
/**
 * Create VoiceCapabilitiesResult
 * @param {object} param
 * @param {boolean} [param.hasMute]
 * @param {boolean} [param.hasRecord]
 * @param {boolean} [param.hasMerge]
 * @param {boolean} [param.hasSwap]
 * @param {boolean} [param.hasBlindTransfer] True if vendor supports blind transfers
 * @param {boolean} [param.hasSignedRecordingUrl]
 * @param {boolean} [param.supportsMos] True if vendor support MOS
 * @param {boolean} [param.hasSupervisorListenIn] True if vendor supports supervisor listening  to a ongoing call
 * @param {boolean} [param.hasSupervisorBargeIn] True if vendor supports Supervisor  barging into a ongoing call
 * @param {boolean} [param.hasPhoneBook] True if vendor supports the phoneBook UI
 * @param {boolean} [param.hasGetExternalSpeakerDeviceSetting] True if vendor supports retrieving the speaker device ID
 * @param {boolean} [param.hasSetExternalSpeakerDeviceSetting] True if vendor supports setting the speaker device ID
 * @param {boolean} [param.hasGetExternalMicrophoneDeviceSetting] True if vendor supports retrieving the microphone device ID
 * @param {boolean} [param.hasSetExternalMicrophoneDeviceSetting] True if vendor supports setting the microphone device ID
 * @param {boolean} [param.canConsult] True if can consult
 * @param {boolean} [param.isDialPadDisabled] True if dial pad is disabled
 * @param {boolean} [param.isHidSupported] True if vendor supports hid or headset controllers
 * @param {boolean} [param.isPhoneBookDisabled] True if phone book is disabled
 */
function VoiceCapabilitiesResult(_ref8) {
  var _ref8$hasMute = _ref8.hasMute,
    hasMute = _ref8$hasMute === void 0 ? true : _ref8$hasMute,
    _ref8$hasRecord = _ref8.hasRecord,
    hasRecord = _ref8$hasRecord === void 0 ? true : _ref8$hasRecord,
    _ref8$hasMerge = _ref8.hasMerge,
    hasMerge = _ref8$hasMerge === void 0 ? true : _ref8$hasMerge,
    _ref8$hasSwap = _ref8.hasSwap,
    hasSwap = _ref8$hasSwap === void 0 ? true : _ref8$hasSwap,
    _ref8$hasBlindTransfe = _ref8.hasBlindTransfer,
    hasBlindTransfer = _ref8$hasBlindTransfe === void 0 ? false : _ref8$hasBlindTransfe,
    _ref8$hasSignedRecord = _ref8.hasSignedRecordingUrl,
    hasSignedRecordingUrl = _ref8$hasSignedRecord === void 0 ? false : _ref8$hasSignedRecord,
    _ref8$supportsMos = _ref8.supportsMos,
    supportsMos = _ref8$supportsMos === void 0 ? false : _ref8$supportsMos,
    _ref8$hasSupervisorLi = _ref8.hasSupervisorListenIn,
    hasSupervisorListenIn = _ref8$hasSupervisorLi === void 0 ? false : _ref8$hasSupervisorLi,
    _ref8$hasSupervisorBa = _ref8.hasSupervisorBargeIn,
    hasSupervisorBargeIn = _ref8$hasSupervisorBa === void 0 ? false : _ref8$hasSupervisorBa,
    _ref8$hasPhoneBook = _ref8.hasPhoneBook,
    hasPhoneBook = _ref8$hasPhoneBook === void 0 ? false : _ref8$hasPhoneBook,
    _ref8$hasGetExternalS = _ref8.hasGetExternalSpeakerDeviceSetting,
    hasGetExternalSpeakerDeviceSetting = _ref8$hasGetExternalS === void 0 ? false : _ref8$hasGetExternalS,
    _ref8$hasSetExternalS = _ref8.hasSetExternalSpeakerDeviceSetting,
    hasSetExternalSpeakerDeviceSetting = _ref8$hasSetExternalS === void 0 ? false : _ref8$hasSetExternalS,
    _ref8$hasGetExternalM = _ref8.hasGetExternalMicrophoneDeviceSetting,
    hasGetExternalMicrophoneDeviceSetting = _ref8$hasGetExternalM === void 0 ? false : _ref8$hasGetExternalM,
    _ref8$hasSetExternalM = _ref8.hasSetExternalMicrophoneDeviceSetting,
    hasSetExternalMicrophoneDeviceSetting = _ref8$hasSetExternalM === void 0 ? false : _ref8$hasSetExternalM,
    _ref8$canConsult = _ref8.canConsult,
    canConsult = _ref8$canConsult === void 0 ? false : _ref8$canConsult,
    _ref8$isDialPadDisabl = _ref8.isDialPadDisabled,
    isDialPadDisabled = _ref8$isDialPadDisabl === void 0 ? false : _ref8$isDialPadDisabl,
    _ref8$isHidSupported = _ref8.isHidSupported,
    isHidSupported = _ref8$isHidSupported === void 0 ? false : _ref8$isHidSupported,
    _ref8$isPhoneBookDisa = _ref8.isPhoneBookDisabled,
    isPhoneBookDisabled = _ref8$isPhoneBookDisa === void 0 ? false : _ref8$isPhoneBookDisa;
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, VoiceCapabilitiesResult);
  Validator.validateBoolean(hasMute);
  Validator.validateBoolean(hasRecord);
  Validator.validateBoolean(hasMerge);
  Validator.validateBoolean(hasSwap);
  Validator.validateBoolean(hasBlindTransfer);
  Validator.validateBoolean(hasSignedRecordingUrl);
  Validator.validateBoolean(supportsMos);
  Validator.validateBoolean(hasSupervisorListenIn);
  Validator.validateBoolean(hasSupervisorBargeIn);
  Validator.validateBoolean(hasPhoneBook);
  Validator.validateBoolean(hasGetExternalSpeakerDeviceSetting);
  Validator.validateBoolean(hasSetExternalSpeakerDeviceSetting);
  Validator.validateBoolean(hasGetExternalMicrophoneDeviceSetting);
  Validator.validateBoolean(hasSetExternalMicrophoneDeviceSetting);
  Validator.validateBoolean(canConsult);
  Validator.validateBoolean(isDialPadDisabled);
  Validator.validateBoolean(isHidSupported);
  Validator.validateBoolean(isPhoneBookDisabled);
  this.hasMute = hasMute;
  this.hasRecord = hasRecord;
  this.hasMerge = hasMerge;
  this.hasSwap = hasSwap;
  this.hasBlindTransfer = hasBlindTransfer;
  this.hasSignedRecordingUrl = hasSignedRecordingUrl;
  this.supportsMos = supportsMos;
  this.hasSupervisorListenIn = hasSupervisorListenIn;
  this.hasSupervisorBargeIn = hasSupervisorBargeIn;
  this.hasPhoneBook = hasPhoneBook;
  this.hasGetExternalSpeakerDeviceSetting = hasGetExternalSpeakerDeviceSetting;
  this.hasSetExternalSpeakerDeviceSetting = hasSetExternalSpeakerDeviceSetting;
  this.hasGetExternalMicrophoneDeviceSetting = hasGetExternalMicrophoneDeviceSetting;
  this.hasSetExternalMicrophoneDeviceSetting = hasSetExternalMicrophoneDeviceSetting;
  this.canConsult = canConsult;
  this.isDialPadDisabled = isDialPadDisabled;
  this.isHidSupported = isHidSupported;
  this.isPhoneBookDisabled = isPhoneBookDisabled;
});

/**
 * Class representing result type for getAgentConfig()
 */
var AgentConfigResult = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(
/**
 * Create AgentConfigResult
 * @param {object} param
 * @param {Phone[]} param.phones
 * @param {Phone} param.selectedPhone
 * @param {string} param.speakerDeviceId
 * @param {string} param.microphoneDeviceId
 */
function AgentConfigResult(_ref9) {
  var _ref9$phones = _ref9.phones,
    phones = _ref9$phones === void 0 ? [_constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].PHONE_TYPE.SOFT_PHONE] : _ref9$phones,
    _ref9$selectedPhone = _ref9.selectedPhone,
    selectedPhone = _ref9$selectedPhone === void 0 ? new Phone({
      type: _constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].PHONE_TYPE.SOFT_PHONE
    }) : _ref9$selectedPhone,
    _ref9$speakerDeviceId = _ref9.speakerDeviceId,
    speakerDeviceId = _ref9$speakerDeviceId === void 0 ? '' : _ref9$speakerDeviceId,
    _ref9$microphoneDevic = _ref9.microphoneDeviceId,
    microphoneDeviceId = _ref9$microphoneDevic === void 0 ? '' : _ref9$microphoneDevic;
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AgentConfigResult);
  Validator.validateClassObject(phones, Array);
  Validator.validateClassObject(selectedPhone, Phone);
  Validator.validateString(speakerDeviceId);
  Validator.validateString(microphoneDeviceId);
  this.phones = phones;
  this.selectedPhone = selectedPhone;
  this.speakerDeviceId = speakerDeviceId;
  this.microphoneDeviceId = microphoneDeviceId;
});

/**
 * Class representing AgentConfig type for setAgentConfig()
 */
var AgentConfig = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(
/**
 * Create AgentConfig
 * @param {object} param
 * @param {Phone} param.selectedPhone
 * @param {string} param.speakerDeviceId
 * @param {string} param.microphoneDeviceId
 * @param {HidDevice} param.hidDeviceInfo
 */
function AgentConfig(_ref10) {
  var selectedPhone = _ref10.selectedPhone,
    speakerDeviceId = _ref10.speakerDeviceId,
    microphoneDeviceId = _ref10.microphoneDeviceId,
    hidDeviceInfo = _ref10.hidDeviceInfo;
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AgentConfig);
  Validator.validateClassObject(selectedPhone, Phone);
  //Hid device info is optional
  if (hidDeviceInfo !== undefined) {
    Validator.validateClassObject(hidDeviceInfo, HidDevice);
  }
  this.selectedPhone = selectedPhone;
  this.speakerDeviceId = speakerDeviceId;
  this.microphoneDeviceId = microphoneDeviceId;
  this.hidDeviceInfo = hidDeviceInfo;
});

/**
 * Class representing result type for pauseRecording() & resumeRecording
 */
var RecordingToggleResult = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(
/**
 * Create RecordingToggleResult
 * @param {object} param
 * @param {boolean} param.isRecordingPaused
 * @param {string} [param.contactId]
 * @param {string} [param.initialContactId]
 * @param {string} [param.instanceId]
 * @param {string} [param.region]
 */
function RecordingToggleResult(_ref11) {
  var isRecordingPaused = _ref11.isRecordingPaused,
    _ref11$contactId = _ref11.contactId,
    contactId = _ref11$contactId === void 0 ? null : _ref11$contactId,
    _ref11$initialContact = _ref11.initialContactId,
    initialContactId = _ref11$initialContact === void 0 ? null : _ref11$initialContact,
    _ref11$instanceId = _ref11.instanceId,
    instanceId = _ref11$instanceId === void 0 ? null : _ref11$instanceId,
    _ref11$region = _ref11.region,
    region = _ref11$region === void 0 ? null : _ref11$region;
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, RecordingToggleResult);
  this.isRecordingPaused = isRecordingPaused;
  this.contactId = contactId;
  this.initialContactId = initialContactId;
  this.instanceId = instanceId;
  this.region = region;
});

/**
 * Class representing result type for addParticipant()
 */
var ParticipantResult = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(
/**
 * Create ParticipantResult
 * @param {object} param
 * @param {boolean} param.initialCallHasEnded
 * @param {CallInfo} param.callInfo
 * @param {PhoneCallAttributes} [param.callAttributes] - Any additional call attributes
 * @param {string} param.phoneNumber
 * @param {string} param.callId
 * @param {Contact} param.contact
 * @param {string} param.connectionId - optional connectionID representing a call leg.
 */
function ParticipantResult(_ref12) {
  var initialCallHasEnded = _ref12.initialCallHasEnded,
    callInfo = _ref12.callInfo,
    callAttributes = _ref12.callAttributes,
    phoneNumber = _ref12.phoneNumber,
    callId = _ref12.callId,
    _ref12$contact = _ref12.contact,
    contact = _ref12$contact === void 0 ? null : _ref12$contact,
    connectionId = _ref12.connectionId;
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ParticipantResult);
  Validator.validateClassObject(callInfo, CallInfo);
  this.initialCallHasEnded = initialCallHasEnded;
  this.callInfo = callInfo;
  this.callAttributes = callAttributes;
  this.phoneNumber = phoneNumber;
  this.callId = callId;
  this.contact = contact;
  if (connectionId) {
    this.connectionId = connectionId;
  } else {
    this.connectionId = callId;
  }
});

/**
 * Class representing result type for getContacts()
 */
var ContactsResult = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(
/**
* Create ContactsResult
* @param {object} param
* @param {Contact[]} [param.contacts]
* @param {Array} [param.contactTypes]
*/
function ContactsResult(_ref13) {
  var _ref13$contacts = _ref13.contacts,
    contacts = _ref13$contacts === void 0 ? [] : _ref13$contacts,
    _ref13$contactTypes = _ref13.contactTypes,
    contactTypes = _ref13$contactTypes === void 0 ? [] : _ref13$contactTypes;
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ContactsResult);
  if (contacts.length > 0) {
    contacts.forEach(function (contact) {
      Validator.validateClassObject(contact, Contact);
    });
  }
  if (contactTypes.length > 0) {
    contactTypes.forEach(function (filterType) {
      Validator.validateEnum(filterType, Object.values(_constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].CONTACT_TYPE));
    });
  }
  this.contacts = contacts;
  this.contactTypes = contactTypes;
});

/**
 * Class representing result type for getPhoneContacts()
 * NOTE: TO BE DEPRECATED, Use ContactsResult instead
 */
var PhoneContactsResult = /*#__PURE__*/function (_ContactsResult) {
  /**
   * Create PhoneContactsResult
   * @param {object} param
   * @param {Contact[]} [param.contacts]
   * @param {Array} [param.contactTypes]
   */
  function PhoneContactsResult(_ref14) {
    var _ref14$contacts = _ref14.contacts,
      contacts = _ref14$contacts === void 0 ? [] : _ref14$contacts,
      _ref14$contactTypes = _ref14.contactTypes,
      contactTypes = _ref14$contactTypes === void 0 ? [] : _ref14$contactTypes;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, PhoneContactsResult);
    return _callSuper(this, PhoneContactsResult, [{
      contacts: contacts,
      contactTypes: contactTypes
    }]);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PhoneContactsResult, _ContactsResult);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PhoneContactsResult);
}(ContactsResult);

/**
 * Class representing result type for accept(), decline(), dial()
 */
var CallResult = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(
/**
 * Create CallResult
 * @param {object} param
 * @param {PhoneCall} [param.call]
 */
function CallResult(_ref15) {
  var call = _ref15.call;
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, CallResult);
  if (call !== undefined) {
    Validator.validateClassObject(call, PhoneCall);
  }
  this.call = call;
});

/**
 * Class representing result type for endCall(), hangup()
 */
var HangupResult = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(
/**
 * Create CallResult
 * @param {object} param
 * @param {PhoneCall[]|PhoneCall} param.calls - one or more calls (can be multiple calls in case of agent endcall/hangup)
 */
function HangupResult(_ref16) {
  var calls = _ref16.calls;
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, HangupResult);
  if (calls instanceof Array) {
    calls.forEach(function (call) {
      return Validator.validateClassObject(call, PhoneCall);
    });
    this.calls = calls;
  } else {
    Validator.validateClassObject(calls, PhoneCall);
    this.calls = [calls];
  }
});

/**
 * Class representing result type for hold() & resume()
 */
var HoldToggleResult = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(
/**
 * Create HoldToggleResult
 * @param {object} param
 * @param {boolean} param.isThirdPartyOnHold
 * @param {boolean} param.isCustomerOnHold
 * @param {PhoneCall[]} [param.calls]
 * @param {boolean} param.isCallMerged
 */
function HoldToggleResult(_ref17) {
  var isThirdPartyOnHold = _ref17.isThirdPartyOnHold,
    isCustomerOnHold = _ref17.isCustomerOnHold,
    calls = _ref17.calls,
    isCallMerged = _ref17.isCallMerged;
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, HoldToggleResult);
  if (calls) {
    Object.values(calls).forEach(function (call) {
      Validator.validateClassObject(call, PhoneCall);
    });
    this.calls = calls;
  }
  this.isThirdPartyOnHold = isThirdPartyOnHold;
  this.isCustomerOnHold = isCustomerOnHold;
  this.isCallMerged = isCallMerged;
});

/**
 * Class representing result type for getRecordingUrl
 */
var SignedRecordingUrlResult = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(
/**
 * Create SignedRecordingUrlResult
 * @param {object} param
 * @param {boolean} param.success
 * @param {string} [param.url]
 * @param {number} [param.duration] in seconds
 * @param {string} [param.callId] Salesforce callId of the voice call
 */
function SignedRecordingUrlResult(_ref18) {
  var success = _ref18.success,
    url = _ref18.url,
    duration = _ref18.duration,
    callId = _ref18.callId;
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, SignedRecordingUrlResult);
  if (success) {
    // For a successfull result, url is required
    Validator.validateString(url);
    Validator.validateString(callId);
    if (duration) {
      Validator.validateNumber(duration);
    }
  }
  this.success = success;
  this.url = url;
  this.duration = duration;
  this.callId = callId;
});

/**
 * Class representing result type for init()
 */
var InitResult = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(
/**
 * Create InitResult
 * @param {object} param
 * @param {boolean} [param.showLogin]
 * @param {number} [param.loginFrameHeight]
 * @param {boolean} [param.isSilentLogin]
 * @param {boolean} [param.showStorageAccess]
 */
function InitResult(_ref19) {
  var _ref19$showLogin = _ref19.showLogin,
    showLogin = _ref19$showLogin === void 0 ? false : _ref19$showLogin,
    _ref19$loginFrameHeig = _ref19.loginFrameHeight,
    loginFrameHeight = _ref19$loginFrameHeig === void 0 ? 350 : _ref19$loginFrameHeig,
    _ref19$isSilentLogin = _ref19.isSilentLogin,
    isSilentLogin = _ref19$isSilentLogin === void 0 ? false : _ref19$isSilentLogin,
    _ref19$showStorageAcc = _ref19.showStorageAccess,
    showStorageAccess = _ref19$showStorageAcc === void 0 ? false : _ref19$showStorageAcc;
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, InitResult);
  this.showLogin = showLogin;
  this.loginFrameHeight = loginFrameHeight;
  this.isSilentLogin = this.showLogin ? false : isSilentLogin;
  this.showStorageAccess = showStorageAccess;
});

/**
 * Class representing dial options for outbound dialing 
 */
var DialOptions = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(
/**
 * Create DialOptions
 * @param {boolean} [param.isCallback]
 * @param {boolean} [param.isConsultCall]
 */
function DialOptions(_ref20) {
  var _ref20$isCallback = _ref20.isCallback,
    isCallback = _ref20$isCallback === void 0 ? false : _ref20$isCallback,
    _ref20$isConsultCall = _ref20.isConsultCall,
    isConsultCall = _ref20$isConsultCall === void 0 ? false : _ref20$isConsultCall;
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DialOptions);
  this.isCallback = isCallback;
  this.isConsultCall = isConsultCall;
});

/**
 * Class representing generic result type
 */
var GenericResult = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(
/**
 * Create GenericResult
 * @param {object} param
 * @param {boolean} param.success
 */
function GenericResult(_ref21) {
  var success = _ref21.success;
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, GenericResult);
  this.success = success;
});

/**
 * Class representing result type for setAgentStatus()
 */
var SetAgentStateResult = /*#__PURE__*/function (_GenericResult) {
  /**
   * Create AgentState
   * @param {object} param
   */
  function SetAgentStateResult(_ref22) {
    var _this2;
    var success = _ref22.success,
      _ref22$isStatusSyncNe = _ref22.isStatusSyncNeeded,
      isStatusSyncNeeded = _ref22$isStatusSyncNe === void 0 ? true : _ref22$isStatusSyncNe;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, SetAgentStateResult);
    _this2 = _callSuper(this, SetAgentStateResult, [{
      success: success
    }]);
    _this2.isStatusSyncNeeded = isStatusSyncNeeded;
    return _this2;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SetAgentStateResult, _GenericResult);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SetAgentStateResult);
}(GenericResult);

/**
 * Class representing result type for setAgentConfig()
 */
var SetAgentConfigResult = /*#__PURE__*/function (_GenericResult2) {
  /**
   * Create AgentConfig
   * @param {object} param
   */
  function SetAgentConfigResult(_ref23) {
    var _this3;
    var success = _ref23.success,
      _ref23$isSystemEvent = _ref23.isSystemEvent,
      isSystemEvent = _ref23$isSystemEvent === void 0 ? false : _ref23$isSystemEvent;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, SetAgentConfigResult);
    _this3 = _callSuper(this, SetAgentConfigResult, [{
      success: success
    }]);
    _this3.isSystemEvent = isSystemEvent;
    return _this3;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SetAgentConfigResult, _GenericResult2);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SetAgentConfigResult, [{
    key: "setIsSystemEvent",
    value: function setIsSystemEvent(isSystemEvent) {
      this.isSystemEvent = isSystemEvent;
    }
  }]);
}(GenericResult);

/**
 * Class representing logout result type
 */
var LogoutResult = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(
/**
 * Create LogoutResult
 * @param {object} param
 * @param {boolean} param.success
 * @param {number} [param.loginFrameHeight]
 */
function LogoutResult(_ref24) {
  var success = _ref24.success,
    _ref24$loginFrameHeig = _ref24.loginFrameHeight,
    loginFrameHeight = _ref24$loginFrameHeig === void 0 ? 350 : _ref24$loginFrameHeig;
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, LogoutResult);
  this.success = success;
  this.loginFrameHeight = loginFrameHeight;
});

/**
 * Class representing callInfo class (call metadata)
 */
var CallInfo = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(
/**
 * Create CallInfo
 * @param {object} param
 * @param {boolean} param.isOnHold
 * @param {boolean} param.isRecordingPaused
 * @param {boolean} param.isMuted
 * @param {string} [param.initialCallId]
 * @param {Date} [param.callStateTimestamp]
 * @param {string} [param.queueName]
 * @param {string} [param.queueId]
 * @param {Date} [param.queueTimestamp]
 * @param {boolean} [param.isSoftphoneCall] - is it a softphone call 
 * @param {boolean} [param.acceptEnabled]
 * @param {boolean} [param.declineEnabled]
 * @param {boolean} [param.muteEnabled]
 * @param {boolean} [param.swapEnabled]
 * @param {boolean} [param.conferenceEnabled]
 * @param {boolean} [param.holdEnabled]
 * @param {boolean} [param.recordEnabled]
 * @param {boolean} [param.addCallerEnabled]
 * @param {boolean} [param.extensionEnabled]
 * @param {boolean} [param.isReplayable]
 * @param {boolean} [param.isBargeable]
 * @param {boolean} [param.isExternalTransfer]
 * @param {boolean} [param.showMuteButton]
 * @param {boolean} [param.showRecordButton]
 * @param {boolean} [param.showAddCallerButton]
 * @param {boolean} [param.showAddBlindTransferButton]
 * @param {boolean} [param.showMergeButton]
 * @param {boolean} [param.showSwapButton]
 * @param {("ALWAYS"|"NEVER"|"ALWAYS_EXCEPT_ON_HOLD")} [param.removeParticipantVariant] - The type of remove participant variant when in a transfer call.
 * @param {String} [param.additionalFields] - Represents additional standard and custom fields in the voice call record, where each key-value pair value corresponds to a standard or custom field and its values.
 * @param {boolean} [param.isMultiParty]
 * @param {boolean} [param.isHIDCall]
 * @param {boolean} [param.endCallDisabled]
 * @param {string} [param.renderContactId]
 */
function CallInfo(_ref25) {
  var _ref25$callStateTimes = _ref25.callStateTimestamp,
    callStateTimestamp = _ref25$callStateTimes === void 0 ? null : _ref25$callStateTimes,
    isOnHold = _ref25.isOnHold,
    _ref25$isMuted = _ref25.isMuted,
    isMuted = _ref25$isMuted === void 0 ? false : _ref25$isMuted,
    _ref25$isRecordingPau = _ref25.isRecordingPaused,
    isRecordingPaused = _ref25$isRecordingPau === void 0 ? false : _ref25$isRecordingPau,
    initialCallId = _ref25.initialCallId,
    _ref25$queueId = _ref25.queueId,
    queueId = _ref25$queueId === void 0 ? null : _ref25$queueId,
    _ref25$queueName = _ref25.queueName,
    queueName = _ref25$queueName === void 0 ? null : _ref25$queueName,
    _ref25$queueTimestamp = _ref25.queueTimestamp,
    queueTimestamp = _ref25$queueTimestamp === void 0 ? null : _ref25$queueTimestamp,
    _ref25$isSoftphoneCal = _ref25.isSoftphoneCall,
    isSoftphoneCall = _ref25$isSoftphoneCal === void 0 ? true : _ref25$isSoftphoneCal,
    _ref25$acceptEnabled = _ref25.acceptEnabled,
    acceptEnabled = _ref25$acceptEnabled === void 0 ? true : _ref25$acceptEnabled,
    _ref25$declineEnabled = _ref25.declineEnabled,
    declineEnabled = _ref25$declineEnabled === void 0 ? true : _ref25$declineEnabled,
    _ref25$muteEnabled = _ref25.muteEnabled,
    muteEnabled = _ref25$muteEnabled === void 0 ? true : _ref25$muteEnabled,
    _ref25$swapEnabled = _ref25.swapEnabled,
    swapEnabled = _ref25$swapEnabled === void 0 ? true : _ref25$swapEnabled,
    _ref25$conferenceEnab = _ref25.conferenceEnabled,
    conferenceEnabled = _ref25$conferenceEnab === void 0 ? true : _ref25$conferenceEnab,
    _ref25$holdEnabled = _ref25.holdEnabled,
    holdEnabled = _ref25$holdEnabled === void 0 ? true : _ref25$holdEnabled,
    _ref25$recordEnabled = _ref25.recordEnabled,
    recordEnabled = _ref25$recordEnabled === void 0 ? true : _ref25$recordEnabled,
    _ref25$addCallerEnabl = _ref25.addCallerEnabled,
    addCallerEnabled = _ref25$addCallerEnabl === void 0 ? true : _ref25$addCallerEnabl,
    _ref25$extensionEnabl = _ref25.extensionEnabled,
    extensionEnabled = _ref25$extensionEnabl === void 0 ? true : _ref25$extensionEnabl,
    _ref25$isReplayable = _ref25.isReplayable,
    isReplayable = _ref25$isReplayable === void 0 ? true : _ref25$isReplayable,
    _ref25$isBargeable = _ref25.isBargeable,
    isBargeable = _ref25$isBargeable === void 0 ? false : _ref25$isBargeable,
    isExternalTransfer = _ref25.isExternalTransfer,
    _ref25$showMuteButton = _ref25.showMuteButton,
    showMuteButton = _ref25$showMuteButton === void 0 ? true : _ref25$showMuteButton,
    _ref25$showRecordButt = _ref25.showRecordButton,
    showRecordButton = _ref25$showRecordButt === void 0 ? true : _ref25$showRecordButt,
    _ref25$showAddCallerB = _ref25.showAddCallerButton,
    showAddCallerButton = _ref25$showAddCallerB === void 0 ? true : _ref25$showAddCallerB,
    _ref25$showAddBlindTr = _ref25.showAddBlindTransferButton,
    showAddBlindTransferButton = _ref25$showAddBlindTr === void 0 ? true : _ref25$showAddBlindTr,
    _ref25$showMergeButto = _ref25.showMergeButton,
    showMergeButton = _ref25$showMergeButto === void 0 ? true : _ref25$showMergeButto,
    _ref25$showSwapButton = _ref25.showSwapButton,
    showSwapButton = _ref25$showSwapButton === void 0 ? true : _ref25$showSwapButton,
    _ref25$removeParticip = _ref25.removeParticipantVariant,
    removeParticipantVariant = _ref25$removeParticip === void 0 ? Constants.REMOVE_PARTICIPANT_VARIANT.ALWAYS : _ref25$removeParticip,
    _ref25$additionalFiel = _ref25.additionalFields,
    additionalFields = _ref25$additionalFiel === void 0 ? null : _ref25$additionalFiel,
    _ref25$isMultiParty = _ref25.isMultiParty,
    isMultiParty = _ref25$isMultiParty === void 0 ? false : _ref25$isMultiParty,
    _ref25$isHIDCall = _ref25.isHIDCall,
    isHIDCall = _ref25$isHIDCall === void 0 ? false : _ref25$isHIDCall,
    _ref25$endCallDisable = _ref25.endCallDisabled,
    endCallDisabled = _ref25$endCallDisable === void 0 ? false : _ref25$endCallDisable,
    _ref25$renderContactI = _ref25.renderContactId,
    renderContactId = _ref25$renderContactI === void 0 ? null : _ref25$renderContactI;
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, CallInfo);
  if (callStateTimestamp) {
    Validator.validateDate(callStateTimestamp);
  }
  if (queueTimestamp) {
    Validator.validateDate(queueTimestamp);
  }
  if (queueId) {
    Validator.validateString(queueId);
  }
  if (queueName) {
    Validator.validateString(queueName);
  }
  Validator.validateBoolean(isRecordingPaused);
  Validator.validateBoolean(isMuted);
  Validator.validateBoolean(isSoftphoneCall);
  Validator.validateBoolean(acceptEnabled);
  Validator.validateBoolean(declineEnabled);
  Validator.validateBoolean(muteEnabled);
  Validator.validateBoolean(swapEnabled);
  Validator.validateBoolean(conferenceEnabled);
  Validator.validateBoolean(holdEnabled);
  Validator.validateBoolean(recordEnabled);
  Validator.validateBoolean(addCallerEnabled);
  Validator.validateBoolean(extensionEnabled);
  Validator.validateBoolean(isBargeable);
  Validator.validateBoolean(showMuteButton);
  Validator.validateBoolean(showRecordButton);
  Validator.validateBoolean(showAddCallerButton);
  Validator.validateBoolean(showAddBlindTransferButton);
  Validator.validateBoolean(showMergeButton);
  Validator.validateBoolean(showSwapButton);
  Validator.validateBoolean(isHIDCall);
  Validator.validateBoolean(endCallDisabled);
  if (isExternalTransfer !== undefined) {
    Validator.validateBoolean(isExternalTransfer);
  }
  Validator.validateEnum(removeParticipantVariant, Object.values(_constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].REMOVE_PARTICIPANT_VARIANT));
  if (additionalFields) {
    Validator.validateString(additionalFields);
  }
  Validator.validateBoolean(isMultiParty);
  if (renderContactId) {
    Validator.validateString(renderContactId);
  }
  this.callStateTimestamp = callStateTimestamp;
  this.isRecordingPaused = isRecordingPaused;
  this.isMuted = isMuted;
  this.isOnHold = isOnHold;
  this.initialCallId = initialCallId;
  this.queueName = queueName;
  this.queueId = queueId;
  this.queueTimestamp = queueTimestamp;
  this.isSoftphoneCall = isSoftphoneCall;
  this.acceptEnabled = acceptEnabled;
  this.declineEnabled = declineEnabled;
  this.muteEnabled = muteEnabled;
  this.swapEnabled = swapEnabled;
  this.conferenceEnabled = conferenceEnabled;
  this.holdEnabled = holdEnabled;
  this.recordEnabled = recordEnabled;
  this.addCallerEnabled = addCallerEnabled;
  this.extensionEnabled = extensionEnabled;
  this.isReplayable = isReplayable;
  this.isBargeable = isBargeable;
  this.isExternalTransfer = isExternalTransfer;
  this.removeParticipantVariant = removeParticipantVariant;
  this.showMuteButton = showMuteButton;
  this.showRecordButton = showRecordButton;
  this.showAddCallerButton = showAddCallerButton;
  this.showAddBlindTransferButton = showAddBlindTransferButton;
  this.showMergeButton = showMergeButton;
  this.showSwapButton = showSwapButton;
  this.additionalFields = additionalFields;
  this.isMultiParty = isMultiParty;
  this.isHIDCall = isHIDCall;
  this.endCallDisabled = endCallDisabled;
  this.renderContactId = renderContactId;
});

/** 
 * Class representing a Contact. This object is used to represent 
 * phone system contact or any call target
 */

var Contact = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(
/**
 * Create a Contact.
 * @param {object} param
 * @param {string} [param.id] - The unique contactId
 * @param {("PhoneBook"|"Queue"|"PhoneNumber"|"Agent")} [param.type] - The type of the contact, one of the CONTACT_TYPE values
 * @param {string} [param.name] - The label for this contact to be displayed in the UI
 * @param {("Transfer"|"Conference"|"All")} [param.listType] - The type of contact List, one of the CONTACT_LIST_TYPE values. Messaging Only
 * @param {string} [param.phoneNumber] - The phone number associcated with this contact
 * @param {string} [param.prefix] - Any prefix to be dialed before dialing the number (i.e. +1)
 * @param {string} [param.extension] - Any extension to be dialed after dialing the number
 * @param {string} [param.endpointARN]
 * @param {string} [param.queue]
 * @param {string} [param.availability]
 * @param {string} [param.recordId] - Salesforce RecordId
 * @param {string} [param.description] - Contact Description
 * @param {string} [param.queueWaitTime] - Estimated Queue Wait Time
 */
function Contact(_ref26) {
  var phoneNumber = _ref26.phoneNumber,
    id = _ref26.id,
    type = _ref26.type,
    name = _ref26.name,
    listType = _ref26.listType,
    prefix = _ref26.prefix,
    extension = _ref26.extension,
    endpointARN = _ref26.endpointARN,
    queue = _ref26.queue,
    availability = _ref26.availability,
    recordId = _ref26.recordId,
    description = _ref26.description,
    queueWaitTime = _ref26.queueWaitTime;
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Contact);
  if (phoneNumber) {
    Validator.validateString(phoneNumber);
  }
  if (type) {
    Validator.validateEnum(type, Object.values(_constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].CONTACT_TYPE));
  }
  if (id) {
    Validator.validateString(id);
  }
  if (name) {
    Validator.validateString(name);
  }
  if (listType) {
    Validator.validateEnum(listType, Object.values(Constants.CONTACT_LIST_TYPE));
  }
  if (prefix) {
    Validator.validateString(prefix);
  }
  if (extension) {
    Validator.validateString(extension);
  }
  if (availability) {
    Validator.validateEnum(availability, Object.values(_constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].AGENT_AVAILABILITY));
  }
  if (recordId) {
    Validator.validateString(recordId);
  }
  if (description) {
    Validator.validateString(description);
  }
  if (queueWaitTime) {
    Validator.validateString(queueWaitTime);
  }
  this.phoneNumber = phoneNumber;
  this.id = id;
  this.type = type;
  this.name = name;
  this.listType = listType;
  this.prefix = prefix;
  this.extension = extension;
  this.endpointARN = endpointARN;
  this.queue = queue;
  if (_constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].CONTACT_TYPE.AGENT === this.type) {
    this.availability = availability;
  } else {
    this.availability = null;
  }
  this.queueWaitTime = queueWaitTime;
  this.recordId = recordId;
  this.description = description;
});

/** 
* Class representing PhoneCallAttributes
*/

var PhoneCallAttributes = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(
/**
 * Create PhoneCallAttributes.
 * @param {object} param
 * @param {string} [param.voiceCallId] - The voice call id
 * @param {PARTICIPANT_TYPE} [param.participantType] - The participant type of the call
 * @param {DIALER_TYPE} [param.dialerType] - The dialer type of the call
 * @param {string} [param.parentId] - The parent call id of the call
 * @param {boolean} [param.isOnHold]
 * @param {boolean} [param.hasSupervisorBargedIn]
 * @param {boolean} [param.isAutoMergeOn] - for multiparty conference, the call cannot be put on hold, and is being auto-merged
 * @param {boolean} [param.isConsultCall] - true if the call is a Consult call
 */
function PhoneCallAttributes(_ref27) {
  var voiceCallId = _ref27.voiceCallId,
    participantType = _ref27.participantType,
    _ref27$dialerType = _ref27.dialerType,
    dialerType = _ref27$dialerType === void 0 ? Constants.DIALER_TYPE.NONE : _ref27$dialerType,
    parentId = _ref27.parentId,
    isOnHold = _ref27.isOnHold,
    _ref27$hasSupervisorB = _ref27.hasSupervisorBargedIn,
    hasSupervisorBargedIn = _ref27$hasSupervisorB === void 0 ? false : _ref27$hasSupervisorB,
    _ref27$isAutoMergeOn = _ref27.isAutoMergeOn,
    isAutoMergeOn = _ref27$isAutoMergeOn === void 0 ? false : _ref27$isAutoMergeOn,
    _ref27$isConsultCall = _ref27.isConsultCall,
    isConsultCall = _ref27$isConsultCall === void 0 ? false : _ref27$isConsultCall;
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, PhoneCallAttributes);
  if (voiceCallId) {
    Validator.validateString(voiceCallId);
  }
  if (participantType) {
    Validator.validateEnum(participantType, Object.values(_constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].PARTICIPANT_TYPE));
  }
  if (parentId) {
    Validator.validateString(parentId);
  }
  if (isOnHold !== undefined) {
    Validator.validateBoolean(isOnHold);
  }
  Validator.validateBoolean(hasSupervisorBargedIn);
  Validator.validateEnum(dialerType, Object.values(_constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].DIALER_TYPE));
  Validator.validateBoolean(isAutoMergeOn);
  Validator.validateBoolean(isConsultCall);
  this.voiceCallId = voiceCallId;
  this.participantType = participantType;
  this.parentId = parentId;
  this.isOnHold = isOnHold;
  this.dialerType = dialerType;
  this.hasSupervisorBargedIn = hasSupervisorBargedIn;
  this.isAutoMergeOn = isAutoMergeOn;
  this.isConsultCall = isConsultCall;
});

/** 
* Class representing a PhoneCall (PSTN or WebRTC).
*/

var PhoneCall = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(
/**
 * Create a PhoneCall.
 * @param {object} param
 * @param {string} [param.callId] - The unique callId. This is a required parameter
 * @param {string} [param.connectionId] - optional connectionID representing a call leg.
 * @param {CALL_TYPE} [param.callType] - The type of the call, one of the CALL_TYPE values
 * @param {CALL_SUBTYPE} [param.callSubtype] - The subtype of the call, one of the CALL_SUBTYPE values
 * @param {Contact} [param.contact] - The Call Target / Contact . TODO: to be deprecated, replace with toContact
 * @param {string} [param.state] - The state of the call, i.e. ringing, connected, declined, failed 
 * @param {PhoneCallAttributes} [param.callAttributes] - Any additional call attributes
 * @param {string} [param.phoneNumber] - The phone number associated with this call (usually external number)
 * @param {CallInfo} [param.callInfo]
 * @param {string} [param.reason]
 * @param {boolean} [param.closeCallOnError]
 * @param {string} [param.agentStatus]
 * @param {string} [param.agentARN]
 * @param {Contact} [param.fromContact] - This is optional, and being populated when dialing/consulting a contact or adding a participant
 * @param {Contact} [param.toContact] - This is currently the same as param.contact (just rename)
 */
function PhoneCall(_ref28) {
  var callId = _ref28.callId,
    callType = _ref28.callType,
    callSubtype = _ref28.callSubtype,
    contact = _ref28.contact,
    state = _ref28.state,
    callAttributes = _ref28.callAttributes,
    phoneNumber = _ref28.phoneNumber,
    callInfo = _ref28.callInfo,
    reason = _ref28.reason,
    closeCallOnError = _ref28.closeCallOnError,
    agentStatus = _ref28.agentStatus,
    agentARN = _ref28.agentARN,
    fromContact = _ref28.fromContact,
    toContact = _ref28.toContact,
    connectionId = _ref28.connectionId;
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, PhoneCall);
  // TODO: Revisit the required fields
  if (callId) {
    Validator.validateString(callId);
    this.callId = callId;
  }
  // Salesforce uses connectionId to represent a call leg as provided or assumed to be same as callId
  // if provided, connectionId can be used in the connector API instead of the callId
  // if not provided, it will be a copy of the callId
  if (connectionId) {
    Validator.validateString(connectionId);
    this.connectionId = connectionId;
  } else if (callId) {
    this.connectionId = callId;
  }
  if (callType) {
    Validator.validateEnum(callType, Object.values(_constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].CALL_TYPE));
    this.callType = callType;
  }
  if (callSubtype) {
    Validator.validateEnum(callSubtype, Object.values(_constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].CALL_SUBTYPE));
    this.callSubtype = callSubtype;
  }
  if (phoneNumber) {
    Validator.validateString(phoneNumber);
    this.phoneNumber = phoneNumber;
  }
  if (callInfo) {
    Validator.validateClassObject(callInfo, CallInfo);
    this.callInfo = callInfo;
  }
  if (contact) {
    Validator.validateClassObject(contact, Contact);
    this.contact = contact;
  }
  if (fromContact) {
    Validator.validateClassObject(fromContact, Contact);
    this.fromContact = fromContact;
  }
  if (toContact) {
    Validator.validateClassObject(toContact, Contact);
    this.toContact = toContact;
  } else if (contact) {
    this.toContact = contact;
  }
  if (reason) {
    this.reason = reason;
  }
  if (closeCallOnError) {
    this.closeCallOnError = closeCallOnError;
  }
  if (agentStatus) {
    this.agentStatus = agentStatus;
  }
  if (agentARN) {
    this.agentARN = agentARN;
  }
  this.state = state;
  this.callAttributes = callAttributes;
});

/** 
* Class representing a TelephonyConnector
*/
var TelephonyConnector = /*#__PURE__*/function () {
  function TelephonyConnector() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, TelephonyConnector);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TelephonyConnector, [{
    key: "getActiveCalls",
    value:
    /**
     * Get the currently active calls
     * @returns {Promise<ActiveCallsResult>} 
     * 
     */
    function getActiveCalls() {
      throw new Error('Not implemented');
    }

    /**
     * Accept call
     * @param {PhoneCall} call - The call to be accepted
     * @returns {Promise<CallResult>} 
     * 
     */
  }, {
    key: "acceptCall",
    value: function acceptCall(call) {
      throw new Error('Not implemented');
    }

    /**
     * Decline call
     * @param {PhoneCall} call - The call to be declined
     * @returns {Promise<CallResult>} 
     * 
     */
  }, {
    key: "declineCall",
    value: function declineCall(call) {
      throw new Error('Not implemented');
    }

    /**
     * End call
     * @param {PhoneCall} call - The call to be ended
     * @param {AGENT_STATUS} agentStatus
     * @returns {Promise<HangupResult>} 
     * 
     */
  }, {
    key: "endCall",
    value: function endCall(call, agentStatus) {
      throw new Error('Not implemented');
    }

    /**
     * Mute call
     * @param {PhoneCall} call (an optional participant call to mute)
     * @returns {Promise<MuteToggleResult>} 
     * 
     */
  }, {
    key: "mute",
    value: function mute(call) {
      throw new Error('Not implemented');
    }

    /**
     * Unmute call
     * @param {PhoneCall} call (an optional participant call to unmute)
     * @returns {Promise<MuteToggleResult>} 
     * 
     */
  }, {
    key: "unmute",
    value: function unmute(call) {
      throw new Error('Not implemented');
    }

    /**
     * Hold call
     * @param {PhoneCall} call - The call to be held
     * @returns {Promise<HoldToggleResult>} 
     * 
     */
  }, {
    key: "hold",
    value: function hold(call) {
      throw new Error('Not implemented');
    }

    /**
     * Resume call
     * @param {PhoneCall} call - The call to be resumed
     * @returns {Promise<HoldToggleResult>} 
     * 
     */
  }, {
    key: "resume",
    value: function resume(call) {
      throw new Error('Not implemented');
    }

    /**
     * Dial out Number
     * @param {Contact} contact
     * @param {DialOptions} dialOptions
     * @returns {Promise<CallResult>} 
     * 
     */
  }, {
    key: "dial",
    value: function dial(contact, dialOptions) {
      throw new Error('Not implemented');
    }

    /**
     * Send digits
     * @param {string} digits
     */
  }, {
    key: "sendDigits",
    value: function sendDigits(digits) {
      throw new Error('Not implemented');
    }

    /**
     * Get phone contacts
     * @param {ContactsFilter} filterType
     * @returns {Promise<PhoneContactsResult>} 
     */
  }, {
    key: "getPhoneContacts",
    value: function getPhoneContacts(filter) {
      throw new Error('Not implemented');
    }

    /**
     * Swap calls
     * @param {PhoneCall} call1
     * @param {PhoneCall} call2
     * @returns {Promise<HoldToggleResult>} 
     */
  }, {
    key: "swap",
    value: function swap(call1, call2) {
      throw new Error('Not implemented');
    }

    /**
     * Conference calls
     * @param {PhoneCall[]} calls
     * @returns {Promise<HoldToggleResult>} 
     */
  }, {
    key: "conference",
    value: function conference(calls) {
      throw new Error('Not implemented');
    }

    /**
     * Add participant to call
     * @param {Contact} contact: The transfer target
     * @param {PhoneCall} parentCall: The call to which a participant will be added
     * @param {Boolean} isBlindTransfer: True if blind transfering a call and hanging up upon transfer
     * @returns {Promise<ParticipantResult>} 
     */
  }, {
    key: "addParticipant",
    value: function addParticipant(contact, parentCall, isBlindTransfer) {
      throw new Error('Not implemented');
    }

    /**
     * Pause recording
     * @returns {Promise<RecordingToggleResult>} 
     */
  }, {
    key: "pauseRecording",
    value: function pauseRecording() {
      throw new Error('Not implemented');
    }

    /**
     * Resume recording
     * @returns {Promise<RecordingToggleResult>} 
     */
  }, {
    key: "resumeRecording",
    value: function resumeRecording() {
      throw new Error('Not implemented');
    }

    /**
     * Get agentConfig
     * @returns {Promise<AgentConfigResult>}
     */
  }, {
    key: "getAgentConfig",
    value: function getAgentConfig() {
      throw new Error('Not implemented');
    }

    /**
     * Set Agent Config
     * @param {AgentConfig} config
     * @returns {Promise<GenericResult>}
     */
  }, {
    key: "setAgentConfig",
    value: function setAgentConfig(config) {
      throw new Error('Not implemented');
    }

    /**
     * Get voice capabilities
     * @returns {Promise<VoiceCapabilitiesResult>}
     */
  }, {
    key: "getVoiceCapabilities",
    value: function getVoiceCapabilities() {
      throw new Error('Not implemented');
    }

    /**
     * Wrap up call
     * @param {PhoneCall} call
     */
  }, {
    key: "wrapUpCall",
    value: function wrapUpCall(call) {
      throw new Error('Not implemented');
    }

    /**
    * Get the signed recording url
    * @param {String} recordingUrl
    * @param {String} vendorCallKey
    * @param {String} callId
    * @returns {Promise<SignedRecordingUrlResult>} 
    */
  }, {
    key: "getSignedRecordingUrl",
    value: function getSignedRecordingUrl(recordingUrl, vendorCallKey, callId) {
      throw new Error('Not implemented');
    }

    /**
     * Supervise a call
     * @param {SupervisedCallInfo} supervisedCallInfo CallInfo of the call to be supervised
     * @returns {Promise <SuperviseCallResult>}
     */
  }, {
    key: "superviseCall",
    value: function superviseCall(supervisedCallInfo) {
      throw new Error('Not implemented');
    }

    /**
     * Supervisor disconnects from a call
     * @param {SupervisedCallInfo} supervisedCallInfo CallInfo of the supervised call to be disconnected
     * @returns {Promise <SupervisorHangupResult>}
     */
  }, {
    key: "supervisorDisconnect",
    value: function supervisorDisconnect(supervisedCallInfo) {
      throw new Error('Not implemented');
    }

    /**
     * Supervisor Barges into a ongoing call
     * @param {SupervisedCallInfo} supervisedCallInfo CallInfo of the supervised call which supervisor barges in
     * @returns {Promise <SuperviseCallResult>}
     */
  }, {
    key: "supervisorBargeIn",
    value: function supervisorBargeIn(supervisedCallInfo) {
      throw new Error('Not implemented');
    }
  }]);
}();

/** 
* Class representing a VendorConnector
*/
var VendorConnector = /*#__PURE__*/function () {
  function VendorConnector() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, VendorConnector);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(VendorConnector, [{
    key: "init",
    value:
    /**
     * Initialize the connector
     * @param {object} connectorConfig
     * @returns {Promise<InitResult>} 
     * 
     */
    function init(config) {
      throw new Error('Not implemented');
    }

    /**
     * Gets the telephonyConnector
     * @returns {Promise<TelephonyConnector>} 
     * 
     */
  }, {
    key: "getTelephonyConnector",
    value: function getTelephonyConnector() {
      throw new Error('Not implemented');
    }

    /**
     * Sends non-voice agent work events to vendor such as work accepted, declined, etc
     * @param {AgentWork} agentWork
     * 
     */
  }, {
    key: "onAgentWorkEvent",
    value: function onAgentWorkEvent(agentWork) {
      throw new Error('Not implemented');
    }

    /**
     * Set agent status
     * @param {Constants.AGENT_STATUS} agentStatus
     * @param {StatusInfo} statusInfo
     * @param {Boolean} enqueueNextState - flag to determine if this status change request should be enqueued if neccessary
     * @returns {Promise<GenericResult>} 
     * 
     */
  }, {
    key: "setAgentStatus",
    value: function setAgentStatus(agentStatus, statusInfo, enqueueNextState) {
      throw new Error('Not implemented');
    }

    /**
     * Get agent status
     * @returns {Promise<AgentStatusInfo>} 
     * 
     */
  }, {
    key: "getAgentStatus",
    value: function getAgentStatus() {
      this.logMessageToVendor(_constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].LOG_LEVEL.INFO, 'getAgentStatus API is NOT Implemented');
    }

    /**
     * Logout from Omni
     * @returns {Promise<LogoutResult>} 
     */
  }, {
    key: "logout",
    value: function logout() {
      throw new Error('Not implemented');
    }

    /**
     * Handle message from LWC/Aura component
     * @param {object} message
     */
  }, {
    key: "handleMessage",
    value: function handleMessage(message) {
      throw new Error('Not implemented');
    }

    /**
     * Triggers a browser download for Vendor Logs
     * @param {String[]} logs Array of log messages.
     */
  }, {
    key: "downloadLogs",
    value: function downloadLogs(logs) {
      (0,_logger_js__WEBPACK_IMPORTED_MODULE_9__.downloadLogs)();
    }

    /**
     * Sends the logs with a logLevel and payload to the vendor connector.
     * Does a no-op, if not implemented.
     * @param {String} logLevel Log Level (INFO, WARN, ERROR)
     * @param {String} message Message to be logged
     * @param {Object} payload An optional payload to be logged
     */
  }, {
    key: "logMessageToVendor",
    value: function logMessageToVendor(logLevel, message, payload) {}

    /**
     * To get the Contacts for this workItem's transfer/other channel operation
     * @param {ContactsFilter} filter It has fields like the search term  and contact Type
     * @param {String} workItemId
     * @returns {Promise<PhoneContactsResult>} 
     */
  }, {
    key: "getContacts",
    value: function getContacts(filter, workItemId) {
      throw new Error('Not implemented');
    }

    /**
     * Returns a list of valid device IDs that can be used for the speaker and microphone devices.
     */
  }, {
    key: "getAudioDevices",
    value: function getAudioDevices() {
      throw new Error('Not implemented');
    }

    /**
     * Get shared capabilities
     * @returns {Promise<SharedCapabilitiesResult>}
     */
  }, {
    key: "getSharedCapabilities",
    value: function getSharedCapabilities() {
      throw new Error('Not implemented');
    }
  }]);
}();
var Validator = /*#__PURE__*/function () {
  function Validator() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Validator);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Validator, null, [{
    key: "validateString",
    value: function validateString(value) {
      if (typeof value !== 'string') {
        throw new Error("Invalid argument. Expecting a string but got ".concat((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value)));
      }
      return this;
    }
  }, {
    key: "validateNumber",
    value: function validateNumber(value) {
      if (typeof value !== 'number') {
        throw new Error("Invalid argument. Expecting a number but got ".concat((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value)));
      }
      return this;
    }
  }, {
    key: "validateBoolean",
    value: function validateBoolean(value) {
      if (typeof value !== 'boolean') {
        throw new Error("Invalid argument. Expecting a boolean but got ".concat((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value)));
      }
      return this;
    }
  }, {
    key: "validateEnum",
    value: function validateEnum(value, enumValues) {
      var regex = new RegExp(enumValues.join("|"), "i");
      if (!regex.test(value)) {
        throw new Error("Invalid argument. Expecting a value from ".concat(JSON.stringify(enumValues), " but got ").concat(value));
      }
      return this;
    }
  }, {
    key: "validateDate",
    value: function validateDate(value) {
      if (!(value instanceof Date)) {
        throw new Error("Invalid argument. Expecting a Date object but got ".concat((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value)));
      }
      return this;
    }
  }, {
    key: "validateClassObject",
    value: function validateClassObject(object, className) {
      if (!(object instanceof className)) {
        throw new Error("Invalid className. Expecting object of class ".concat(className, " but got ").concat((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(object)));
      }
      return this;
    }
  }, {
    key: "validateClassObjects",
    value: function validateClassObjects(object) {
      var isValid = false;
      for (var _len = arguments.length, classNames = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        classNames[_key - 1] = arguments[_key];
      }
      for (var i = 0; i < classNames.length; i++) {
        try {
          this.validateClassObject(object, classNames[i]);
          isValid = true;
          break;
        } catch (e) {
          // continue on
        }
      }
      if (!isValid) {
        throw new Error("Invalid className. Expecting object matching a class name in ".concat(classNames, " but got ").concat((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(object)));
      }
      return this;
    }
  }]);
}();

/** 
* Class representing an AgentWork
*/
var AgentWork = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(
/**
 * Create an AgentWork.
 * @param {object} param
 * @param {string} [param.workItemId] - Salesforce agent work item Id
 * @param {string} [param.workId] - Salesforce work Id
 * @param {WORK_EVENT} [param.workEvent] - The work lifecycle event
 */
function AgentWork(_ref29) {
  var workItemId = _ref29.workItemId,
    workId = _ref29.workId,
    workEvent = _ref29.workEvent;
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AgentWork);
  Validator.validateEnum(workEvent, Object.values(_constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].WORK_EVENT));
  this.workEvent = workEvent;
  this.workItemId = workItemId;
  this.workId = workId;
});

/** 
 * Class representing an Agent status information. This object is used to represent 
 * agent status information
 */

var AgentStatusInfo = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(
/**
 * Create a AgentStatusInfo.
 * @param {object} param
 * @param {string} [param.statusId] - The unique statusId (required)
 * @param {string} [param.statusApiName] - The status API name
 * @param {string} [param.statusName] - The label for this status to be displayed in the UI
 */
function AgentStatusInfo(_ref30) {
  var statusId = _ref30.statusId,
    statusApiName = _ref30.statusApiName,
    statusName = _ref30.statusName;
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AgentStatusInfo);
  Validator.validateString(statusId);
  if (statusApiName) {
    Validator.validateString(statusApiName);
  }
  if (statusName) {
    Validator.validateString(statusName);
  }
  this.statusId = statusId;
  this.statusApiName = statusApiName;
  this.statusName = statusName;
});

/** 
 * Class representing an Agent Vendor status information. This object is used to represent 
 * agent vendor side status information
 */
var AgentVendorStatusInfo = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(
/**
 * Create a AgentVendorStatusInfo.
 * @param {object} param
 * @param {string} [param.statusId] - The unique statusId (e.g agentStateARN)
 * @param {string} [param.statusType] - The agent's current availability state type
 * @param {string} [param.statusName] - The name of the agent's current availability state
 */
function AgentVendorStatusInfo(_ref31) {
  var statusId = _ref31.statusId,
    statusType = _ref31.statusType,
    statusName = _ref31.statusName;
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AgentVendorStatusInfo);
  if (statusId) {
    Validator.validateString(statusId);
  }
  if (statusType) {
    Validator.validateString(statusType);
  }
  if (statusName) {
    Validator.validateString(statusName);
  }
  this.statusId = statusId;
  this.statusType = statusType;
  this.statusName = statusName;
});

/** 
 * NOTE: SALESFORCE INTERNAL USE ONLY
 * Class representing an State Change Result information. This object is used to represent 
 * Agent State Change Infomation
 */
var StateChangeResult = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(
/**
 * Create a StateChangeResult.
 * @param {object} param
 * @param {AgentVendorStatusInfo} [param.newVendorStateInfo] - newStateName (e.g 'Available') (required), newStateType (e.g 'routable')
 * @param {AgentVendorStatusInfo} [param.oldVendorStateInfo] - oldStateName (e.g 'offline'), oldStateType (e.g 'Offline')
 */
function StateChangeResult(_ref32) {
  var newVendorStateInfo = _ref32.newVendorStateInfo,
    oldVendorStateInfo = _ref32.oldVendorStateInfo;
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, StateChangeResult);
  Validator.validateClassObject(newVendorStateInfo, AgentVendorStatusInfo);
  Validator.validateString(newVendorStateInfo.statusName);
  if (oldVendorStateInfo) {
    Validator.validateClassObject(oldVendorStateInfo, AgentVendorStatusInfo);
  }
  this.newVendorStateInfo = newVendorStateInfo;
  this.oldVendorStateInfo = oldVendorStateInfo;
});

/** 
 * Class representing a Supervised Call Info. This object is used to represent 
 * information about a call that is being supervised by a supervisor.
 */
var SupervisedCallInfo = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(
/**
 * Create a AgentStatusInfo.
 * @param {object} param
 * @param {string} [param.callId] - The unique supervised vendor call ID (required)
 * @param {string} [param.connectionId] - optional connectionID representing a call leg.
 * @param {string} [param.voiceCallId] - The supervised salesforce voice call ID
 * @param {string} [param.callType] - The type of the call, one of the CALL_TYPE values
 * @param {string} [param.from] - From phone number (for Inbound calls)
 * @param {string} [param.to] - To phone number (for Outbound calls)
 * @param {string} [param.supervisorName] - The supervisor name (shown to the supervised agent on barge in)
 * @param {boolean} [param.isBargedIn] - True if the Supervisor has barged in, False if the supervisor is listening in.
 */

function SupervisedCallInfo(_ref33) {
  var callId = _ref33.callId,
    voiceCallId = _ref33.voiceCallId,
    callType = _ref33.callType,
    from = _ref33.from,
    to = _ref33.to,
    supervisorName = _ref33.supervisorName,
    isBargedIn = _ref33.isBargedIn,
    connectionId = _ref33.connectionId;
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, SupervisedCallInfo);
  Validator.validateString(callId);
  this.callId = callId;
  this.voiceCallId = voiceCallId;
  this.callType = callType;
  this.from = from;
  this.to = to;
  this.supervisorName = supervisorName;
  this.isBargedIn = isBargedIn;
  if (connectionId) {
    this.connectionId = connectionId;
  } else {
    this.connectionId = callId;
  }
});

/**
 * Class representing a Audio Stats, which contains array of AudioStats. This object is used to calculate the MOS Score
 */

var AudioStats = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(
/**
 * Create a AudioStats
 * @param {object} param
 * @param {string} [param.callId] - The unique callId.
 * @param {AudioStatsElement[]} param.stats - array of AudioStatsElement
 * @param {boolean} [param.isAudioStatsCompleted] - True if the audio stats is completed, will calculate MOS and update VoiceCall record
 */
function AudioStats(_ref34) {
  var callId = _ref34.callId,
    stats = _ref34.stats,
    isAudioStatsCompleted = _ref34.isAudioStatsCompleted;
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AudioStats);
  if (callId) {
    Validator.validateString(callId);
    this.callId = callId;
  }
  if (stats) {
    Validator.validateClassObject(stats, Array);
    stats.forEach(function (audioStatsElement) {
      return Validator.validateClassObject(audioStatsElement, AudioStatsElement);
    });
    this.stats = stats;
  }
  if (isAudioStatsCompleted) {
    Validator.validateBoolean(isAudioStatsCompleted);
    this.isAudioStatsCompleted = isAudioStatsCompleted;
  }
});

/**
 * Class representing a Audio Stats Element. This object is used to calculate the MOS Score
 */

var AudioStatsElement = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(
/**
 * Create a AudioStatsElement
 * @param {object} param
 * @param {StatsInfo} [param.inputChannelStats] - the inputChannel stream stats
 * @param {StatsInfo} [param.outputChannelStats] - the ouputChannel stream stats
 */
function AudioStatsElement(_ref35) {
  var inputChannelStats = _ref35.inputChannelStats,
    outputChannelStats = _ref35.outputChannelStats;
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AudioStatsElement);
  if (inputChannelStats) {
    Validator.validateClassObject(inputChannelStats, StatsInfo);
  }
  if (outputChannelStats) {
    Validator.validateClassObject(outputChannelStats, StatsInfo);
  }
  this.inputChannelStats = inputChannelStats;
  this.outputChannelStats = outputChannelStats;
});

/**
 * Class representing a Stream Stats. This object is used to calculate the MOS Score
 */

var StatsInfo = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(
/**
 * Create a StatsInfo
 * @param {object} param
 * @param {number} [param.packetsCount] - the packets count
 * @param {number} [param.packetsLost] - packets lost count
 * @param {number} [param.jitterBufferMillis] - jitter buffer in milliseconds
 * @param {number} [param.roundTripTimeMillis] - round trip time in milliseconds
 */
function StatsInfo(_ref36) {
  var packetsCount = _ref36.packetsCount,
    packetsLost = _ref36.packetsLost,
    jitterBufferMillis = _ref36.jitterBufferMillis,
    roundTripTimeMillis = _ref36.roundTripTimeMillis;
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, StatsInfo);
  packetsCount = packetsCount == null || packetsCount < 0 ? 0 : packetsCount;
  packetsLost = packetsLost == null || packetsLost < 0 ? 0 : packetsLost;
  jitterBufferMillis = jitterBufferMillis == null || jitterBufferMillis < 0 ? 0 : jitterBufferMillis;
  roundTripTimeMillis = roundTripTimeMillis == null || roundTripTimeMillis < 0 ? 0 : roundTripTimeMillis;
  this.statsCount = 0;
  this.packetsCount = packetsCount;
  this.packetsLost = packetsLost;
  this.jitterBufferMillis = jitterBufferMillis;
  this.roundTripTimeMillis = roundTripTimeMillis;
});

/**
 * Class representing supervise call result
 */
var SuperviseCallResult = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(
/**
 * Create a SuperviseCallResult
 * @param {object} param
 * @param {PhoneCall} param.call
 */
function SuperviseCallResult(_ref37) {
  var call = _ref37.call;
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, SuperviseCallResult);
  Validator.validateClassObject(call, PhoneCall);
  this.call = call;
});

/**
 * Class representing result type for supervisorDisconnected()
 */
var SupervisorHangupResult = /*#__PURE__*/function (_HangupResult) {
  /**
  * Create SupervisorHangupResult
  * @param {object} param
  * @param {PhoneCall[]|PhoneCall} param.calls - one or more calls when supervisor hangsup
  */
  function SupervisorHangupResult(_ref38) {
    var calls = _ref38.calls;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, SupervisorHangupResult);
    return _callSuper(this, SupervisorHangupResult, [{
      calls: calls
    }]);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SupervisorHangupResult, _HangupResult);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SupervisorHangupResult);
}(HangupResult);

/** 
 * Class representing result type for STORAGE_ACCESS_RESULT
 * @param {object} param
 * @param {boolean} [param.success]
 * @param {boolean} [param.showLogin] 
 * @param {number} [param.loginFrameHeight]
 */
var ShowStorageAccessResult = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(function ShowStorageAccessResult(_ref39) {
  var _ref39$success = _ref39.success,
    success = _ref39$success === void 0 ? false : _ref39$success,
    _ref39$showLogin = _ref39.showLogin,
    showLogin = _ref39$showLogin === void 0 ? false : _ref39$showLogin,
    _ref39$loginFrameHeig = _ref39.loginFrameHeight,
    loginFrameHeight = _ref39$loginFrameHeig === void 0 ? 350 : _ref39$loginFrameHeig;
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ShowStorageAccessResult);
  this.success = success;
  this.showLogin = showLogin;
  this.loginFrameHeight = loginFrameHeight;
});

/**
 * Class used to filter contacts. Passed as a parameter to TelephonyConnector.getPhoneContacts
 * @param {object} param
 * @param {string} param.contains
 * @param {number} param.limit
 * @param {number} param.offset
 * @param {CONTACTS_FILTER_TYPES[]} param.types 
 */
var ContactsFilter = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(function ContactsFilter(param) {
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ContactsFilter);
  if (param) {
    var _param$contains = param.contains,
      contains = _param$contains === void 0 ? null : _param$contains,
      _param$limit = param.limit,
      limit = _param$limit === void 0 ? 50 : _param$limit,
      _param$offset = param.offset,
      offset = _param$offset === void 0 ? 0 : _param$offset,
      _param$types = param.types,
      types = _param$types === void 0 ? [] : _param$types;
    if (contains) {
      Validator.validateString(contains);
    }
    Validator.validateNumber(limit);
    Validator.validateNumber(offset);
    var _iterator = _createForOfIteratorHelper(types),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var type = _step.value;
        Validator.validateEnum(types, Object.values(_constants_js__WEBPACK_IMPORTED_MODULE_8__["default"].CONTACTS_FILTER_TYPES));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    this.contains = contains;
    this.limit = limit;
    this.offset = offset;
    this.types = types;
  }
});

/**
 * Class used as a parameter to AFTER_CONVERSATION_WORK_STARTED and AFTER_CONVERSATION_WORK_ENDED
 */
var ACWInfo = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(
/**
 * @param {object} param
 * @param {string} param.agentWorkId the id of the AgentWork
 * @param {string} param.workItemId the id of the work item (voice call or messaging session)
 */
function ACWInfo(_ref40) {
  var agentWorkId = _ref40.agentWorkId,
    workItemId = _ref40.workItemId;
  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ACWInfo);
  if (agentWorkId) {
    Validator.validateString(agentWorkId);
    this.agentWorkId = agentWorkId;
  }
  if (workItemId) {
    Validator.validateString(workItemId);
    this.workItemId = workItemId;
  }
  if (!agentWorkId && !workItemId) {
    throw new Error('You must pass at least one of agent work id or work item (voice call or messaging session) id');
  }
});

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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!***************************!*\
  !*** ./src/main/index.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACWInfo: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.ACWInfo),
/* harmony export */   ActiveCallsResult: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.ActiveCallsResult),
/* harmony export */   AgentConfig: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.AgentConfig),
/* harmony export */   AgentConfigResult: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.AgentConfigResult),
/* harmony export */   AgentStatusInfo: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.AgentStatusInfo),
/* harmony export */   AgentVendorStatusInfo: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.AgentVendorStatusInfo),
/* harmony export */   AgentWork: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.AgentWork),
/* harmony export */   AudioDevicesResult: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.AudioDevicesResult),
/* harmony export */   AudioStats: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.AudioStats),
/* harmony export */   AudioStatsElement: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.AudioStatsElement),
/* harmony export */   CallInfo: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.CallInfo),
/* harmony export */   CallResult: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.CallResult),
/* harmony export */   Constants: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Constants),
/* harmony export */   Contact: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Contact),
/* harmony export */   ContactsFilter: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.ContactsFilter),
/* harmony export */   ContactsResult: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.ContactsResult),
/* harmony export */   CustomError: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.CustomError),
/* harmony export */   DialOptions: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.DialOptions),
/* harmony export */   GenericResult: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.GenericResult),
/* harmony export */   HangupResult: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.HangupResult),
/* harmony export */   HidDevice: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.HidDevice),
/* harmony export */   HoldToggleResult: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.HoldToggleResult),
/* harmony export */   InitResult: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.InitResult),
/* harmony export */   LogoutResult: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.LogoutResult),
/* harmony export */   MuteToggleResult: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.MuteToggleResult),
/* harmony export */   ParticipantResult: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.ParticipantResult),
/* harmony export */   Phone: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.Phone),
/* harmony export */   PhoneCall: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.PhoneCall),
/* harmony export */   PhoneCallAttributes: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.PhoneCallAttributes),
/* harmony export */   PhoneContactsResult: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.PhoneContactsResult),
/* harmony export */   RecordingToggleResult: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.RecordingToggleResult),
/* harmony export */   SetAgentConfigResult: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.SetAgentConfigResult),
/* harmony export */   SetAgentStateResult: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.SetAgentStateResult),
/* harmony export */   SharedCapabilitiesResult: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.SharedCapabilitiesResult),
/* harmony export */   ShowStorageAccessResult: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.ShowStorageAccessResult),
/* harmony export */   SignedRecordingUrlResult: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.SignedRecordingUrlResult),
/* harmony export */   StateChangeResult: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.StateChangeResult),
/* harmony export */   StatsInfo: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.StatsInfo),
/* harmony export */   SuperviseCallResult: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.SuperviseCallResult),
/* harmony export */   SupervisedCallInfo: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.SupervisedCallInfo),
/* harmony export */   SupervisorHangupResult: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.SupervisorHangupResult),
/* harmony export */   TelephonyConnector: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.TelephonyConnector),
/* harmony export */   VendorConnector: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.VendorConnector),
/* harmony export */   VoiceCapabilitiesResult: () => (/* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_2__.VoiceCapabilitiesResult),
/* harmony export */   initializeConnector: () => (/* reexport safe */ _baseConnector_js__WEBPACK_IMPORTED_MODULE_0__.initializeConnector),
/* harmony export */   log: () => (/* reexport safe */ _logger_js__WEBPACK_IMPORTED_MODULE_1__.log),
/* harmony export */   publishError: () => (/* reexport safe */ _baseConnector_js__WEBPACK_IMPORTED_MODULE_0__.publishError),
/* harmony export */   publishEvent: () => (/* reexport safe */ _baseConnector_js__WEBPACK_IMPORTED_MODULE_0__.publishEvent),
/* harmony export */   publishLog: () => (/* reexport safe */ _baseConnector_js__WEBPACK_IMPORTED_MODULE_0__.publishLog)
/* harmony export */ });
/* harmony import */ var _baseConnector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseConnector.js */ "./src/main/baseConnector.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger.js */ "./src/main/logger.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "./src/main/types.js");
/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */




})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=scv-connector-base.js.map