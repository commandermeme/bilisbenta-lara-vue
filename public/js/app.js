/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"/js/app": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/aos/dist/aos.css":
/*!***************************************!*\
  !*** ./node_modules/aos/dist/aos.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../postcss-loader/src??ref--6-2!./aos.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/aos/dist/aos.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/aos/dist/aos.js":
/*!**************************************!*\
  !*** ./node_modules/aos/dist/aos.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\aos\\dist\\aos.js'");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Navbar */ "./resources/js/components/Navbar.vue");
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "app",
  components: {
    Navbar: _components_Navbar__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Content.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Content.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Content"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Navbar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Navbar"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Content_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Content.vue */ "./resources/js/components/Content.vue");
//
//
//
//
//
//
// import Navbar from '../components/Navbar'

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Home',
  components: {
    Content: _components_Content_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/aos/dist/aos.css":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/aos/dist/aos.css ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/postcss-loader/src/index.js):\nError: ENOENT: no such file or directory, open 'C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\aos\\dist\\aos.css'");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/App.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#app {\n  font-family: Nunito;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Content.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Content.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.image-parallax {\n  background-image: url('/img/home-background.png');\n  height: 100vh;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n}\n.nav-link {\n  border-bottom: 5px solid transparent;\n  height:100%;\n}\n.nav-link:hover {\n  border-bottom: 5px solid #3490dc;\n}\n.active {\n  border-bottom: 5px solid #3490dc;\n}\n.para-text {\n  font-family: Arial, Helvetica, sans-serif;\n  margin-top: 58px;\n  padding-top: 150px;\n  font-weight: 700;\n  font-size: 3.5rem;\n}\n.para-text-2 {\n  font-size: 1.3rem;\n  font-weight: 600 !important;\n}\n.section-vid-text-1 {\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n.section-vid-text-1 {\n  font-size: 1.9rem;\n  font-weight: 600;\n}\n.section-vid-text-2 {\n  font-size: 1.6rem;\n  font-weight: 500;\n}\n.section {\n  padding: 100px 0px;\n}\n.num-circle {\n  width: 39.6px;\n  height: 39.6px;\n  border-radius: 50%;\n  text-align: center;\n  font-size: 20px;\n  border: 2px solid rgb(1, 107, 186);\n  color:white;\n  background:rgb(1, 107, 186);\n  position: absolute;\n  top: -20px;\n  left: 50%;\n  transform: translateX(-50%)\n}\n.section-2, .section-3, .section-4 {\n  background-color: #F4F5F5;\n}\n.section-2 .card-img {\n  height: 50px !important;\n  width: 50px !important;\n}\n.section-3 img {\n  height: 40px !important;\n  width: 40px !important;\n}\n.check-mark {\n  padding-top: 100px;\n}\n.parallax-mid-image {\n  background-image: url('/img/benefits-background.png');\n  height: 100vh;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n}\n.para-mid-card .para-box {\n  padding: 10em 0px;\n  height: 100vh;\n  background-color: white;\n  opacity: 0.8;\n}\n.packages {\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 1rem;\n  font-weight: 400;\n}\n.section-4 h1 {\n  font-weight: 800;\n}\n.para-footer {\n  background-image: url('/img/footer-background.png');\n  height: 70vh;\n  width: auto;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#app {\r\n  font-family: Nunito;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\css-loader\\lib\\css-base.js'");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\process\\browser.js'");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/App.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-2!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Content.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Content.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Content.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Content.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\style-loader\\lib\\addStyles.js'");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App.vue?vue&type=template&id=f348271a&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/App.vue?vue&type=template&id=f348271a& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "app" } },
    [_c("Navbar"), _vm._v(" "), _c("router-view")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Content.vue?vue&type=template&id=7f690d44&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Content.vue?vue&type=template&id=7f690d44& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "image-parallax", attrs: { id: "home" } }, [
        _c("div", { staticClass: "container" }, [
          _c(
            "div",
            {
              staticClass: "para-text",
              attrs: {
                "data-aos": "fade-right",
                "data-aos-offset": "400",
                "data-aos-duration": "1000"
              }
            },
            [
              _c("p", { staticClass: "mb-0" }, [_vm._v("Online Selling")]),
              _vm._v(" "),
              _c("p", { staticClass: "text-primary" }, [_vm._v("Made Easy.")])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "para-text-2",
              attrs: {
                "data-aos": "fade-left",
                "data-aos-offset": "200",
                "data-aos-duration": "1000"
              }
            },
            [
              _c("p", { staticClass: "m-0" }, [_vm._v("Your ONE STOP SHOP")]),
              _vm._v(" "),
              _c("p", { staticClass: "m-0" }, [
                _vm._v("for all your Online Selling.")
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              attrs: { "data-aos": "flip-right", "data-aos-duration": "1000" }
            },
            [
              _c(
                "a",
                {
                  staticClass: "btn btn-lg btn-primary py-3 px-5 mt-3",
                  attrs: { href: "#" }
                },
                [_vm._v("Get Started")]
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "bg-white section", attrs: { id: "about" } },
        [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                {
                  staticClass: "col-md-5 mb-3",
                  attrs: {
                    "data-aos": "fade-right",
                    "data-aos-offset": "400",
                    "data-aos-duration": "1000"
                  }
                },
                [
                  _c("p", { staticClass: "section-vid-text-1" }, [
                    _vm._v(
                      "Looking for a new business, ride the booming business of E-commerce."
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "section-vid-text-2 mt-4" }, [
                    _vm._v(
                      "Sell on Lazada, Shopee or your own Shopify website."
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-lg btn-outline-primary px-5 mt-3",
                      attrs: { href: "#" }
                    },
                    [
                      _vm._v("How it works "),
                      _c("span", { staticClass: "small" }, [_vm._v(" >")])
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-md-7",
                  attrs: {
                    "data-aos": "fade-left",
                    "data-aos-offset": "400",
                    "data-aos-duration": "1000"
                  }
                },
                [
                  _c("a", { attrs: { href: "" } }, [
                    _c("img", {
                      staticClass: "img-fluid",
                      attrs: { src: "/img/about-background.png", alt: "" }
                    })
                  ])
                ]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "section section-2", attrs: { id: "how-it-works" } },
        [
          _c("div", { staticClass: "container" }, [
            _c(
              "div",
              {
                staticClass: "text-center",
                attrs: {
                  "data-aos": "fade-down",
                  "data-aos-offset": "400",
                  "data-aos-duration": "1000"
                }
              },
              [
                _c("p", { staticClass: "section-vid-text-1" }, [
                  _c("span", { staticClass: "text-primary" }, [
                    _vm._v("We've brought more than 50,000 Products")
                  ]),
                  _vm._v(
                    " to sell in one Roof from different manufacturers and suppliers in to one marketplace."
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "text-center",
                attrs: {
                  "data-aos": "fade-down",
                  "data-aos-offset": "400",
                  "data-aos-duration": "1000"
                }
              },
              [
                _c("p", { staticClass: "section-vid-text-2 mt-4 px-5" }, [
                  _vm._v(
                    "You can list and sell products without ever having to buy inventory up front or pack and ship orders."
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "row my-5 pt-5" }, [
              _c(
                "div",
                {
                  staticClass: "col-md-2 card-group",
                  attrs: {
                    "data-aos": "fade-up",
                    "data-aos-offset": "200",
                    "data-aos-duration": "500"
                  }
                },
                [
                  _c("div", { staticClass: "card border-0" }, [
                    _c("div", { staticClass: "card-body" }, [
                      _c("div", { staticClass: "num-circle" }, [_vm._v("1")]),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "card-img mx-auto d-block mt-4",
                        attrs: { src: "/img/01.png", alt: "" }
                      }),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "card-text text-center px-2 mt-4" },
                        [_c("strong", [_vm._v("Sign up and log in")])]
                      )
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-md-2 card-group",
                  attrs: {
                    "data-aos": "fade-up",
                    "data-aos-offset": "200",
                    "data-aos-duration": "800"
                  }
                },
                [
                  _c("div", { staticClass: "card border-0" }, [
                    _c("div", { staticClass: "card-body" }, [
                      _c("div", { staticClass: "num-circle" }, [_vm._v("2")]),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "card-img mx-auto d-block mt-4",
                        attrs: { src: "/img/02.png", alt: "" }
                      }),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "card-text text-center px-2 mt-4" },
                        [
                          _c("strong", [
                            _vm._v("Free Browsing on all the packages we offer")
                          ])
                        ]
                      )
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-md-2 card-group",
                  attrs: {
                    "data-aos": "fade-up",
                    "data-aos-offset": "200",
                    "data-aos-duration": "1100"
                  }
                },
                [
                  _c("div", { staticClass: "card border-0" }, [
                    _c("div", { staticClass: "card-body" }, [
                      _c("div", { staticClass: "num-circle" }, [_vm._v("3")]),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "card-img mx-auto d-block mt-4",
                        attrs: { src: "/img/03.png", alt: "" }
                      }),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "card-text text-center px-2 mt-4" },
                        [
                          _c("strong", [
                            _vm._v("Choose the package that best suits you")
                          ])
                        ]
                      )
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-md-2 card-group",
                  attrs: {
                    "data-aos": "fade-up",
                    "data-aos-offset": "200",
                    "data-aos-duration": "1400"
                  }
                },
                [
                  _c("div", { staticClass: "card border-0" }, [
                    _c("div", { staticClass: "card-body" }, [
                      _c("div", { staticClass: "num-circle" }, [_vm._v("4")]),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "card-img mx-auto d-block mt-4",
                        attrs: { src: "/img/04.png", alt: "" }
                      }),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "card-text text-center px-2 mt-4" },
                        [_c("strong", [_vm._v("Review terms and conditions")])]
                      )
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-md-2 card-group",
                  attrs: {
                    "data-aos": "fade-up",
                    "data-aos-offset": "200",
                    "data-aos-duration": "1700"
                  }
                },
                [
                  _c("div", { staticClass: "card border-0" }, [
                    _c("div", { staticClass: "card-body" }, [
                      _c("div", { staticClass: "num-circle" }, [_vm._v("5")]),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "card-img mx-auto d-block mt-4",
                        attrs: { src: "/img/05.png", alt: "" }
                      }),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "card-text text-center px-2 mt-4" },
                        [
                          _c("strong", [
                            _vm._v("Fill up the requirement forms and details")
                          ])
                        ]
                      )
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-md-2 card-group",
                  attrs: {
                    "data-aos": "fade-up",
                    "data-aos-offset": "200",
                    "data-aos-duration": "2000"
                  }
                },
                [
                  _c("div", { staticClass: "card border-0" }, [
                    _c("div", { staticClass: "card-body" }, [
                      _c("div", { staticClass: "num-circle" }, [_vm._v("6")]),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "card-img mx-auto d-block mt-4",
                        attrs: { src: "/img/06.png", alt: "" }
                      }),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "card-text text-center px-2 mt-4" },
                        [
                          _c("strong", [
                            _vm._v("Choose a plan for payments and options")
                          ])
                        ]
                      )
                    ])
                  ])
                ]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "section bg-white", attrs: { id: "benefits" } },
        [
          _c(
            "div",
            {
              staticClass: "container",
              attrs: {
                "data-aos": "zoom-in",
                "data-aos-offset": "400",
                "data-aos-duration": "1000"
              }
            },
            [
              _c("p", { staticClass: "section-vid-text-1" }, [
                _c("span", { staticClass: "text-primary" }, [
                  _vm._v("REGISTER FOR FREE!")
                ]),
                _vm._v(" No Credit Card Needed "),
                _c("span", { staticClass: "float-right" }, [
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-lg btn-primary py-3 px-5",
                      attrs: { href: "" }
                    },
                    [_vm._v("Get Started")]
                  )
                ])
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("section", { staticClass: "section section-3" }, [
        _c("div", { staticClass: "container text-center" }, [
          _c(
            "div",
            {
              attrs: {
                "data-aos": "zoom-in-up",
                "data-aos-offset": "200",
                "data-aos-duration": "300"
              }
            },
            [
              _c("p", { staticClass: "section-vid-text-1" }, [
                _vm._v("Why you should choose "),
                _c("span", { staticClass: "text-primary" }, [
                  _vm._v("BilisBenta?")
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "row check-mark text-left" }, [
            _c(
              "div",
              {
                staticClass: "col-md-3",
                attrs: {
                  "data-aos": "zoom-in-up",
                  "data-aos-offset": "200",
                  "data-aos-duration": "500"
                }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-3 pt-4" }, [
                    _c("img", {
                      staticClass: "img-fluid",
                      attrs: { src: "/img/check-mark.png", alt: "" }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-9" }, [
                    _c("p", { staticClass: "section-vid-text-2" }, [
                      _vm._v("No manpower needed")
                    ])
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-md-3",
                attrs: {
                  "data-aos": "zoom-in-up",
                  "data-aos-offset": "200",
                  "data-aos-duration": "700"
                }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-3 pt-4" }, [
                    _c("img", {
                      staticClass: "img-fluid",
                      attrs: { src: "/img/check-mark.png", alt: "" }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-9" }, [
                    _c("p", { staticClass: "section-vid-text-2" }, [
                      _vm._v("No warehouse rental")
                    ])
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-md-3",
                attrs: {
                  "data-aos": "zoom-in-up",
                  "data-aos-offset": "200",
                  "data-aos-duration": "900"
                }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-3 pt-4" }, [
                    _c("img", {
                      staticClass: "img-fluid",
                      attrs: { src: "/img/check-mark.png", alt: "" }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-9" }, [
                    _c("p", { staticClass: "section-vid-text-2" }, [
                      _vm._v("No capital on inventory")
                    ])
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-md-3",
                attrs: {
                  "data-aos": "zoom-in-up",
                  "data-aos-offset": "200",
                  "data-aos-duration": "1100"
                }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-3 pt-4" }, [
                    _c("img", {
                      staticClass: "img-fluid",
                      attrs: { src: "/img/check-mark.png", alt: "" }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-9" }, [
                    _c("p", { staticClass: "section-vid-text-2" }, [
                      _vm._v("No overhead expenses")
                    ])
                  ])
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mt-5 text-left" }, [
            _c(
              "div",
              {
                staticClass: "col-md-3",
                attrs: {
                  "data-aos": "zoom-in-up",
                  "data-aos-offset": "100",
                  "data-aos-duration": "1300"
                }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-3 pt-4" }, [
                    _c("img", {
                      staticClass: "img-fluid",
                      attrs: { src: "/img/check-mark.png", alt: "" }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-9" }, [
                    _c("p", { staticClass: "section-vid-text-2" }, [
                      _vm._v("No accounting needed")
                    ])
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-md-3",
                attrs: {
                  "data-aos": "zoom-in-up",
                  "data-aos-offset": "100",
                  "data-aos-duration": "1500"
                }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-3 pt-4" }, [
                    _c("img", {
                      staticClass: "img-fluid",
                      attrs: { src: "/img/check-mark.png", alt: "" }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-9" }, [
                    _c("p", { staticClass: "section-vid-text-2" }, [
                      _vm._v("Great product sourcing")
                    ])
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-md-3",
                attrs: {
                  "data-aos": "zoom-in-up",
                  "data-aos-offset": "100",
                  "data-aos-duration": "1700"
                }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-3 pt-4" }, [
                    _c("img", {
                      staticClass: "img-fluid",
                      attrs: { src: "/img/check-mark.png", alt: "" }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-9" }, [
                    _c("p", { staticClass: "section-vid-text-2" }, [
                      _vm._v("Milti category products")
                    ])
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-md-3",
                attrs: {
                  "data-aos": "zoom-in-up",
                  "data-aos-offset": "100",
                  "data-aos-duration": "1900"
                }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-3 pt-4" }, [
                    _c("img", {
                      staticClass: "img-fluid",
                      attrs: { src: "/img/check-mark.png", alt: "" }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-9" }, [
                    _c("p", { staticClass: "section-vid-text-2" }, [
                      _vm._v("Everyone can sell")
                    ])
                  ])
                ])
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "parallax-mid-image" }, [
        _c(
          "div",
          {
            staticClass: "container",
            attrs: {
              "data-aos": "zoom-in-right",
              "data-aos-offset": "400",
              "data-aos-duration": "1000"
            }
          },
          [
            _c("div", { staticClass: "row para-mid-card" }, [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "para-box px-5" }, [
                  _c("p", { staticClass: "section-vid-text-1" }, [
                    _vm._v("Find everything you need from one Supplier account")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "section-vid-text-2" }, [
                    _vm._v(
                      "With Bilisbenta you don't need to signup with suppliers. In fact you can perform all the tasks from selling products, to processing orders nad Chatting you customers"
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "btn btn-lg btn-outline-primary py-3 px-5 mt-2",
                      attrs: { href: "" }
                    },
                    [_vm._v("Get Started")]
                  )
                ])
              ])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "section section-4", attrs: { id: "packages" } },
        [
          _c("div", { staticClass: "container text-center" }, [
            _c("p", { staticClass: "section-vid-text-1" }, [
              _vm._v("We have 3 packages available!")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                {
                  staticClass: "col-md-4 card-group",
                  attrs: {
                    "data-aos": "zoom-out-down",
                    "data-aos-offset": "400",
                    "data-aos-duration": "1000"
                  }
                },
                [
                  _c("div", { staticClass: "card border-0" }, [
                    _c("div", { staticClass: "card-title pt-3" }, [
                      _c("h2", [_vm._v("Basic")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-header border-0" }, [
                      _c("h1", [_vm._v("$25/mo")]),
                      _c("span", [_vm._v("(or $129 annualy)")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "packages" }, [
                        _c("br"),
                        _vm._v("Exclusive access to \n                    "),
                        _c("br"),
                        _vm._v("BilisBenta top Sellers\n                    "),
                        _c("br"),
                        _vm._v("Elite Seller Report\n                    "),
                        _c("br"),
                        _vm._v(
                          "All Premium Data Exports\n                    "
                        ),
                        _c("br"),
                        _vm._v("(Amazon|Ebay|Shopify)\n                    "),
                        _c("br"),
                        _vm._v("Custom Data Export\n                  ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass:
                            "btn btn-lg btn-outline-primary py-2 px-5 my-4",
                          attrs: { href: "" }
                        },
                        [_vm._v("BUY PACKAGE")]
                      )
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-md-4 card-group",
                  attrs: {
                    "data-aos": "zoom-out-down",
                    "data-aos-offset": "400",
                    "data-aos-duration": "1500"
                  }
                },
                [
                  _c("div", { staticClass: "card border-0" }, [
                    _c("div", { staticClass: "card-title pt-3" }, [
                      _c("h2", [_vm._v("Standard")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-header border-0" }, [
                      _c("h1", [_vm._v("$45/mo")]),
                      _c("span", [_vm._v("(or $129 annualy)")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "packages" }, [
                        _c("br"),
                        _vm._v("Exclusive access to \n                  "),
                        _c("br"),
                        _vm._v("BilisBenta top Sellers\n                  "),
                        _c("br"),
                        _vm._v("Elite Seller Report\n                  "),
                        _c("br"),
                        _vm._v("All Premium Data Exports\n                  "),
                        _c("br"),
                        _vm._v("(Amazon|Ebay|Shopify)\n                  "),
                        _c("br"),
                        _vm._v("Custom Data Export\n                ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass:
                            "btn btn-lg btn-outline-primary py-2 px-5 my-4",
                          attrs: { href: "" }
                        },
                        [_vm._v("BUY PACKAGE")]
                      )
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-md-4 card-group",
                  attrs: {
                    "data-aos": "zoom-out-down",
                    "data-aos-offset": "400",
                    "data-aos-duration": "2000"
                  }
                },
                [
                  _c("div", { staticClass: "card border-0" }, [
                    _c("div", { staticClass: "card-title pt-3" }, [
                      _c("h2", [_vm._v("Premium")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-header border-0" }, [
                      _c("h1", [_vm._v("$55/mo")]),
                      _c("span", [_vm._v("(or $129 annualy)")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body" }, [
                      _c("p", { staticClass: "packages" }, [
                        _c("br"),
                        _vm._v("Exclusive access to \n                  "),
                        _c("br"),
                        _vm._v("BilisBenta top Sellers\n                  "),
                        _c("br"),
                        _vm._v("Elite Seller Report\n                  "),
                        _c("br"),
                        _vm._v("All Premium Data Exports\n                  "),
                        _c("br"),
                        _vm._v("(Amazon|Ebay|Shopify)\n                  "),
                        _c("br"),
                        _vm._v("Custom Data Export\n                ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass:
                            "btn btn-lg btn-outline-primary py-2 px-5 my-4",
                          attrs: { href: "" }
                        },
                        [_vm._v("BUY PACKAGE")]
                      )
                    ])
                  ])
                ]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "para-footer section", attrs: { id: "contact" } },
        [
          _c("div", { staticClass: "container" }, [
            _c(
              "div",
              {
                attrs: {
                  "data-aos": "fade-in",
                  "data-aos-offset": "200",
                  "data-aos-duration": "1500"
                }
              },
              [
                _c("div", { staticClass: "section-vid-text-1 pb-5" }, [
                  _vm._v("Online selling made easy")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "section-vid-text-2 pt-5" }, [
                  _vm._v("REGISTER FOR FREE")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "section-vid-text-2" }, [
                  _vm._v("No Credit Card Needed")
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "pt-5" }, [
              _c("p", [
                _vm._v("©Copyright 2020 BilisBenta. Created by: "),
                _c(
                  "a",
                  {
                    staticClass: "text-decoration-none",
                    attrs: { href: "https://mach95.com/", target: "_blank" }
                  },
                  [_vm._v("Mach95")]
                )
              ])
            ])
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "nav",
      {
        staticClass: "navbar navbar-expand-lg navbar-light bg-white fixed-top"
      },
      [
        _c("div", { staticClass: "container" }, [
          _vm._m(0),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "collapse navbar-collapse",
              attrs: { id: "navbarSupportedContent" }
            },
            [
              _c("ul", { staticClass: "navbar-nav ml-auto" }, [
                _c(
                  "li",
                  { staticClass: "nav-item" },
                  [
                    _c(
                      "router-link",
                      {
                        directives: [
                          {
                            name: "scroll-to",
                            rawName: "v-scroll-to",
                            value: "#home",
                            expression: "'#home'"
                          }
                        ],
                        staticClass: "nav-link text-dark",
                        attrs: {
                          "data-toggle": "collapse",
                          "data-target": ".navbar-collapse.show",
                          to: "/"
                        }
                      },
                      [_vm._v("Home")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item ml-3" }, [
                  _c(
                    "a",
                    {
                      directives: [
                        {
                          name: "scroll-to",
                          rawName: "v-scroll-to",
                          value: "#about",
                          expression: "'#about'"
                        }
                      ],
                      staticClass: "nav-link text-dark",
                      attrs: {
                        "data-toggle": "collapse",
                        "data-target": ".navbar-collapse.show",
                        href: "#"
                      }
                    },
                    [_vm._v("About")]
                  )
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item ml-3" }, [
                  _c(
                    "a",
                    {
                      directives: [
                        {
                          name: "scroll-to",
                          rawName: "v-scroll-to",
                          value: "#how-it-works",
                          expression: "'#how-it-works'"
                        }
                      ],
                      staticClass: "nav-link text-dark",
                      attrs: {
                        "data-toggle": "collapse",
                        "data-target": ".navbar-collapse.show",
                        href: "#"
                      }
                    },
                    [_vm._v("How it works")]
                  )
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item ml-3" }, [
                  _c(
                    "a",
                    {
                      directives: [
                        {
                          name: "scroll-to",
                          rawName: "v-scroll-to",
                          value: "#benefits",
                          expression: "'#benefits'"
                        }
                      ],
                      staticClass: "nav-link text-dark",
                      attrs: {
                        "data-toggle": "collapse",
                        "data-target": ".navbar-collapse.show",
                        href: "#"
                      }
                    },
                    [_vm._v("Benefits")]
                  )
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item ml-3" }, [
                  _c(
                    "a",
                    {
                      directives: [
                        {
                          name: "scroll-to",
                          rawName: "v-scroll-to",
                          value: "#packages",
                          expression: "'#packages'"
                        }
                      ],
                      staticClass: "nav-link text-dark",
                      attrs: {
                        "data-toggle": "collapse",
                        "data-target": ".navbar-collapse.show",
                        href: "#packages"
                      }
                    },
                    [_vm._v("Packages")]
                  )
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item ml-3" }, [
                  _c(
                    "a",
                    {
                      directives: [
                        {
                          name: "scroll-to",
                          rawName: "v-scroll-to",
                          value: "#contact",
                          expression: "'#contact'"
                        }
                      ],
                      staticClass: "nav-link text-dark",
                      attrs: {
                        "data-toggle": "collapse",
                        "data-target": ".navbar-collapse.show",
                        href: "#contact"
                      }
                    },
                    [_vm._v("Contact")]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item ml-3" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "nav-link text-dark",
                        attrs: {
                          "data-toggle": "collapse",
                          "data-target": ".navbar-collapse.show",
                          to: "/login"
                        }
                      },
                      [_vm._v("Login")]
                    )
                  ],
                  1
                )
              ])
            ]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "navbar-brand mr-auto", attrs: { href: "" } },
      [_c("img", { attrs: { src: "/img/bilisbenta-logo.png", alt: "" } })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "navbar-toggler",
        attrs: {
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#navbarSupportedContent",
          "aria-controls": "navbarSupportedContent",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation"
        }
      },
      [_c("span", { staticClass: "navbar-toggler-icon" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=template&id=63cd6604& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "app" } }, [_c("Content")], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\vue-loader\\lib\\runtime\\componentNormalizer.js'");

/***/ }),

/***/ "./node_modules/vue-router/dist/vue-router.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-router/dist/vue-router.esm.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\vue-router\\dist\\vue-router.esm.js'");

/***/ }),

/***/ "./node_modules/vue-scrollto/vue-scrollto.js":
/*!***************************************************!*\
  !*** ./node_modules/vue-scrollto/vue-scrollto.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\vue-scrollto\\vue-scrollto.js'");

/***/ }),

/***/ "./node_modules/vue/dist/vue.common.js":
/*!*********************************************!*\
  !*** ./node_modules/vue/dist/vue.common.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\vue\\dist\\vue.common.js'");

/***/ }),

/***/ "./resources/js/App.vue":
/*!******************************!*\
  !*** ./resources/js/App.vue ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_f348271a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=f348271a& */ "./resources/js/App.vue?vue&type=template&id=f348271a&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./resources/js/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ "./resources/js/App.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_f348271a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_f348271a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/App.vue?vue&type=script&lang=js&":
/*!*******************************************************!*\
  !*** ./resources/js/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/App.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************!*\
  !*** ./resources/js/App.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader??ref--6-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-2!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/App.vue?vue&type=template&id=f348271a&":
/*!*************************************************************!*\
  !*** ./resources/js/App.vue?vue&type=template&id=f348271a& ***!
  \*************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f348271a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=f348271a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App.vue?vue&type=template&id=f348271a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f348271a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f348271a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ "./resources/js/App.vue");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "./resources/js/router/index.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var vue_scrollto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-scrollto */ "./node_modules/vue-scrollto/vue-scrollto.js");
/* harmony import */ var vue_scrollto__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_scrollto__WEBPACK_IMPORTED_MODULE_6__);







vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_scrollto__WEBPACK_IMPORTED_MODULE_6___default.a);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_5__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.config.productionTip = false;
new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  created: function created() {
    aos__WEBPACK_IMPORTED_MODULE_3___default.a.init();
  },
  router: _router__WEBPACK_IMPORTED_MODULE_2__["default"],
  render: function render(h) {
    return h(_App_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
  }
}).$mount('#app');

/***/ }),

/***/ "./resources/js/components/Content.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Content.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Content_vue_vue_type_template_id_7f690d44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Content.vue?vue&type=template&id=7f690d44& */ "./resources/js/components/Content.vue?vue&type=template&id=7f690d44&");
/* harmony import */ var _Content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Content.vue?vue&type=script&lang=js& */ "./resources/js/components/Content.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Content_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Content.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Content.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Content_vue_vue_type_template_id_7f690d44___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Content_vue_vue_type_template_id_7f690d44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Content.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Content.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Content.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Content.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Content.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Content.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Content.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Content.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Content.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Content.vue?vue&type=template&id=7f690d44&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Content.vue?vue&type=template&id=7f690d44& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_template_id_7f690d44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Content.vue?vue&type=template&id=7f690d44& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Content.vue?vue&type=template&id=7f690d44&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_template_id_7f690d44___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_template_id_7f690d44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Navbar.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Navbar.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue?vue&type=template&id=6dde423b& */ "./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&");
/* harmony import */ var _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.vue?vue&type=script&lang=js& */ "./resources/js/components/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Navbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Navbar.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Navbar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=template&id=6dde423b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/router/index.js":
/*!**************************************!*\
  !*** ./resources/js/router/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _views_Home_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/Home.vue */ "./resources/js/views/Home.vue");



vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
var routes = [{
  path: '/',
  name: 'Home',
  component: _views_Home_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
}, // {
//     path: '/about',
//     name: 'About',
//     component: () =>
//         import ('../components/Login.vue')
// },
{
  path: '/login',
  name: 'Login',
  component: function component() {
    return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../views/Login.vue */ "./resources/js/views/Login.vue"));
  }
}, {
  path: '/register',
  name: 'Register',
  component: function component() {
    return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../views/Register.vue */ "./resources/js/views/Register.vue"));
  }
}];
var router = new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});
/* harmony default export */ __webpack_exports__["default"] = (router);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./resources/js/views/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Home.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=63cd6604& */ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/Home.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=template&id=63cd6604& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=63cd6604& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n  ╷\n8 │ @import '~bootstrap/scss/bootstrap';\r\n  │         ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  ╵\n  C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\resources\\sass\\app.scss 8:9  root stylesheet\n    at C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\webpack\\lib\\NormalModule.js:316:20\n    at C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at context.callback (C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\sass-loader\\dist\\index.js:73:7\n    at Function.call$2 (C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\sass\\sass.dart.js:88191:16)\n    at _render_closure1.call$2 (C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\sass\\sass.dart.js:77610:12)\n    at _RootZone.runBinary$3$3 (C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\sass\\sass.dart.js:26152:18)\n    at _RootZone.runBinary$3 (C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\sass\\sass.dart.js:26156:19)\n    at _FutureListener.handleError$1 (C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\sass\\sass.dart.js:24600:19)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\sass\\sass.dart.js:24897:40)\n    at Object._Future__propagateToListeners (C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\sass\\sass.dart.js:4311:88)\n    at _Future._completeError$2 (C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\sass\\sass.dart.js:24725:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\sass\\sass.dart.js:24117:12)\n    at Object._asyncRethrow (C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\sass\\sass.dart.js:4065:17)\n    at C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\sass\\sass.dart.js:14087:20\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\sass\\sass.dart.js:4090:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\sass\\sass.dart.js:24138:12)\n    at _awaitOnObject_closure0.call$2 (C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\sass\\sass.dart.js:24130:25)\n    at _RootZone.runBinary$3$3 (C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\sass\\sass.dart.js:26152:18)\n    at _RootZone.runBinary$3 (C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\sass\\sass.dart.js:26156:19)\n    at _FutureListener.handleError$1 (C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\sass\\sass.dart.js:24600:19)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\sass\\sass.dart.js:24897:40)\n    at Object._Future__propagateToListeners (C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\sass\\sass.dart.js:4311:88)\n    at _Future._completeError$2 (C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\sass\\sass.dart.js:24725:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\sass\\sass.dart.js:24117:12)\n    at Object._asyncRethrow (C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\sass\\sass.dart.js:4065:17)\n    at C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\sass\\sass.dart.js:16672:20\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\sass\\sass.dart.js:4090:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\sass\\sass.dart.js:24138:12)\n    at _awaitOnObject_closure0.call$2 (C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\sass\\sass.dart.js:24130:25)\n    at _RootZone.runBinary$3$3 (C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\sass\\sass.dart.js:26152:18)\n    at _RootZone.runBinary$3 (C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\sass\\sass.dart.js:26156:19)\n    at _FutureListener.handleError$1 (C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\sass\\sass.dart.js:24600:19)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\sass\\sass.dart.js:24897:40)\n    at Object._Future__propagateToListeners (C:\\Users\\Cossette\\Documents\\GitHub\\bilisbenta-lara-vue\\node_modules\\sass\\sass.dart.js:4311:88)");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Cossette\Documents\GitHub\bilisbenta-lara-vue\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\Users\Cossette\Documents\GitHub\bilisbenta-lara-vue\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });