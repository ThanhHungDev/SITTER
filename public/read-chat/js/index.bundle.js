/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
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
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/chat/chat.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--6-2!./src/scss/chat/chat.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.bg-chat-temalate {\n  background: -moz-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -webkit-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -o-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -ms-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n}\n\n.wrapper-page-chat {\n  max-width: 1100px;\n  margin: 0 auto;\n  background-color: #eeeeee;\n}\n.wrapper-page-chat:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/chat/head-info.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--6-2!./src/scss/chat/head-info.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-head-info {\n  background-color: #06784b;\n}\n.component-head-info .user-active-chat {\n  position: relative;\n  padding: 10px 15px;\n  box-sizing: border-box;\n  border-bottom: 1px solid #e9ecef;\n  min-height: 75px;\n}\n.component-head-info .user-active-chat .state-avatar {\n  position: absolute;\n  top: 50%;\n  display: block;\n  padding: 0;\n  margin: 0;\n  width: 50px;\n  height: 50px;\n  min-width: 50px;\n  min-height: 50px;\n  overflow: hidden;\n  box-sizing: border-box;\n  border: 1px solid #ced4da;\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.component-head-info .user-active-chat .state-avatar img {\n  width: 50px;\n  height: 50px;\n  min-width: 50px;\n  min-height: 50px;\n}\n.component-head-info .user-active-chat .text-info {\n  display: block;\n  padding: 7px 7px 7px 55px;\n  color: #fff;\n}\n.component-head-info .user-active-chat .text-info .name {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.component-head-info .user-active-chat .text-info .time-online {\n  display: block;\n  font-size: 12px;\n  color: #6c757d;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.component-head-info .user-active-chat .text-info .time-online.active-now {\n  color: #8bc34a;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/chat/list-message.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--6-2!./src/scss/chat/list-message.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-list-message {\n  float: left;\n  width: 70%;\n  border-left: 1px solid #e9ecef;\n  overflow: hidden;\n}\n.component-list-message .wrapper-list-message {\n  position: relative;\n  padding: 10px 15px;\n  height: 400px;\n  overflow-y: scroll;\n  background: #ffffff;\n  scrollbar-color: rgba(0, 0, 0, 0.3) #F5F5F5;\n  scrollbar-width: thin !important;\n  -ms-overflow-style: none;\n}\n.component-list-message .wrapper-list-message:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-list-message .wrapper-list-message::-webkit-scrollbar {\n  width: 6px;\n  background-color: #eeeeee;\n}\n.component-list-message .wrapper-list-message::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-list-message .wrapper-list-message::-moz-scrollbar {\n  width: 6px;\n  background-color: #eeeeee;\n}\n.component-list-message .wrapper-list-message::-moz-scrollbar-thumb {\n  border-radius: 10px;\n  -moz-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-list-message .wrapper-list-message::-o-scrollbar {\n  width: 6px;\n  background-color: #eeeeee;\n}\n.component-list-message .wrapper-list-message::-o-scrollbar-thumb {\n  border-radius: 10px;\n  -o-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-list-message .wrapper-list-message::-ms-scrollbar {\n  width: 6px;\n  background-color: #eeeeee;\n}\n.component-list-message .wrapper-list-message::-ms-scrollbar-thumb {\n  border-radius: 10px;\n  -ms-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n\n.ticontainer {\n  display: inline-block;\n  min-width: 30px;\n}\n.ticontainer .tiblock {\n  align-items: center;\n  display: flex;\n  height: 17px;\n}\n.ticontainer .tiblock .tidot {\n  background-color: #adb5bd;\n  -webkit-animation: mercuryTypingAnimation 1.5s infinite ease-in-out;\n  animation: mercuryTypingAnimation 1.5s infinite ease-in-out;\n  border-radius: 50%;\n  display: inline-block;\n  height: 6px;\n  margin-right: 4px;\n  width: 6px;\n}\n.ticontainer .tiblock .tidot:nth-child(1) {\n  -webkit-animation-delay: 150ms;\n  animation-delay: 200ms;\n}\n.ticontainer .tiblock .tidot:nth-child(2) {\n  -webkit-animation-delay: 300ms;\n  animation-delay: 300ms;\n}\n.ticontainer .tiblock .tidot:nth-child(3) {\n  -webkit-animation-delay: 450ms;\n  animation-delay: 400ms;\n}\n\n@-webkit-keyframes mercuryTypingAnimation {\n  0% {\n    -webkit-transform: translateY(0px);\n  }\n  28% {\n    -webkit-transform: translateY(-5px);\n  }\n  44% {\n    -webkit-transform: translateY(0px);\n  }\n}\n@media only screen and (max-width: 991px) {\n  .component-list-message {\n    width: 60%;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .component-list-message {\n    width: calc(100% - 75px);\n  }\n  .component-list-message .wrapper-list-message {\n    height: 300px;\n  }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/chat/list-user.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--6-2!./src/scss/chat/list-user.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-user-chat-sidebar {\n  position: relative;\n  background-color: #efffc7;\n}\n.component-user-chat-sidebar .none-read-message {\n  position: absolute;\n  right: 15px;\n  border-radius: 50%;\n  padding: 3px 6px;\n  bottom: 30%;\n  font-size: 11px;\n  line-height: 1;\n  font-style: normal;\n  background-color: #28a745;\n  color: #e9ecef;\n}\n.component-user-chat-sidebar .user-chat {\n  min-height: 50px;\n  position: relative;\n  padding: 10px 5px;\n  cursor: pointer;\n}\n.component-user-chat-sidebar .user-chat.active-message {\n  background-color: #06784b;\n}\n.component-user-chat-sidebar .user-chat.active-message .text-info {\n  color: #fff;\n}\n.component-user-chat-sidebar .user-chat.active .state-avatar {\n  border-color: #28a745;\n}\n.component-user-chat-sidebar .user-chat.active .state-avatar:after {\n  background-color: #28a745;\n}\n.component-user-chat-sidebar .user-chat .state-avatar {\n  position: absolute;\n  top: 50%;\n  display: block;\n  padding: 0;\n  width: 50px;\n  height: 50px;\n  min-width: 50px;\n  min-height: 50px;\n  margin: 0;\n  overflow: hidden;\n  box-sizing: border-box;\n  border: 1px solid #ced4da;\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.component-user-chat-sidebar .user-chat .state-avatar:after {\n  content: \".\";\n  color: transparent;\n  position: absolute;\n  top: 0;\n  left: 5px;\n  z-index: 5;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  overflow: hidden;\n  background-color: #adb5bd;\n  -webkit-transform: translateX(-50%);\n  -moz-transform: translateX(-50%);\n  -o-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n.component-user-chat-sidebar .user-chat .state-avatar img {\n  width: 50px;\n  height: 50px;\n  min-width: 50px;\n  min-height: 50px;\n}\n.component-user-chat-sidebar .user-chat .text-info {\n  display: block;\n  padding: 0 0 0 55px;\n  color: #4b515d;\n}\n.component-user-chat-sidebar .user-chat .text-info .name {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.component-user-chat-sidebar .user-chat .text-info .last-message {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n@media only screen and (max-width: 768px) {\n  .component-user-chat-sidebar .user-chat.active-message {\n    background-color: #adb5bd;\n  }\n  .component-user-chat-sidebar .user-chat .text-info {\n    width: 10px;\n    overflow: hidden;\n    padding: 0;\n    visibility: hidden;\n  }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/chat/message-chat.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--6-2!./src/scss/chat/message-chat.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.left-message {\n  position: relative;\n  padding-right: 25px;\n  display: inline-flex;\n}\n.left-message .read {\n  position: absolute;\n  right: 0;\n  bottom: 5px;\n}\n\n.component-message-chat {\n  padding-top: 5px;\n}\n.component-message-chat:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-message-chat.typing-chat-messsage {\n  display: none;\n  padding-top: 0;\n  position: absolute;\n  top: -25px;\n  background-color: #e9ecef;\n  border-radius: 8px;\n  border: 1px solid #adb5bd;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  -moz-transform: translateX(-50%);\n  -o-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n.component-message-chat.typing-chat-messsage.show {\n  display: block;\n}\n.component-message-chat.typing-chat-messsage .typing-message .text {\n  line-height: 1;\n  padding: 2px 10px !important;\n}\n.component-message-chat .chat-group:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-message-chat .chat-group.by-me .avatar {\n  display: none !important;\n}\n.component-message-chat .chat-group.by-me .message-content {\n  float: right;\n}\n.component-message-chat .chat-group.by-me .message-content .text {\n  border-radius: 15px 15px 0 15px;\n  background-color: #efffc7;\n}\n.component-message-chat .chat-group.by-me .EMOJI {\n  text-align: right;\n}\n.component-message-chat .chat-group .avatar {\n  width: 50px;\n  min-width: 50px;\n  height: 50px;\n  margin: 0;\n  overflow: hidden;\n  float: left;\n}\n.component-message-chat .chat-group .avatar img {\n  width: 100%;\n  height: 50px;\n}\n.component-message-chat .chat-group .message-content {\n  display: inline-block;\n}\n.component-message-chat .chat-group .message-content.typing-message {\n  padding-left: 0px;\n}\n.component-message-chat .chat-group .message-content .IMAGE {\n  text-align: center;\n}\n.component-message-chat .chat-group .message-content .IMAGE .wrapper-attachment {\n  padding: 5px;\n  display: inline-block;\n  max-width: 200px;\n  position: relative;\n}\n.component-message-chat .chat-group .message-content .IMAGE .wrapper-attachment img {\n  width: 100%;\n  height: auto;\n}\n.component-message-chat .chat-group .message-content .IMAGE .wrapper-attachment .download-file-attachment {\n  position: absolute;\n  top: 5%;\n  right: 5%;\n  background-color: #dee2e6;\n  color: #0d47a1;\n  border-radius: 50%;\n  padding: 3px 0;\n  border: 1px solid #0d47a1;\n}\n.component-message-chat .chat-group .message-content .IMAGE .wrapper-attachment .download-file-attachment i {\n  font-size: 24px;\n}\n.component-message-chat .chat-group .message-content .EMOJI {\n  padding: 10px;\n  background: none !important;\n}\n.component-message-chat .chat-group .message-content .text {\n  padding: 10px;\n  border-radius: 15px;\n  white-space: pre-line;\n  word-break: break-all;\n  margin-left: 5px;\n  border-radius: 0 15px 15px 15px;\n  background-color: #dce9e9;\n  display: inline-block;\n}\n.component-message-chat .chat-group .message-content .text.EMOJI {\n  background: transparent !important;\n  font-size: 35px;\n  padding: 0 10px;\n}\n.component-message-chat .chat-group .message-content .time-label {\n  font-size: 12px;\n  padding-left: 5px;\n}\n.component-message-chat .chat-group .typing-message .text {\n  padding: 5px 10px;\n  background: transparent !important;\n}\n.component-message-chat .chat-group .typing-message .typing-text {\n  font-size: 10px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/chat/search.scss":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--6-2!./src/scss/chat/search.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-search-user {\n  padding: 0 0 5px 5px;\n  position: relative;\n}\n.component-search-user .search-user {\n  background-color: #f8f9fa;\n  border: 1px solid #6c757d;\n  width: 100%;\n  padding: 8px 8px 8px 30px;\n  font-size: 14px;\n  color: #6c757d;\n  font-style: \"Archivo-Medium\";\n}\n.component-search-user .search-user:focus {\n  border-color: #0d47a1;\n  color: #0d47a1;\n}\n.component-search-user .search-user:focus ~ .hero-icon {\n  color: #0d47a1;\n}\n.component-search-user .hero-icon {\n  position: absolute;\n  left: 10px;\n  bottom: 10px;\n  font-size: 25px;\n  color: #6c757d;\n  right: 10px;\n  z-index: 2;\n}\n\n@media only screen and (max-width: 768px) {\n  .component-search-user {\n    display: none;\n  }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/chat/sidebar.scss":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--6-2!./src/scss/chat/sidebar.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-sidebar-chat {\n  overflow-y: scroll;\n  float: left;\n  width: 30%;\n  background-color: #eeeeee;\n  scrollbar-color: rgba(0, 0, 0, 0.3) #F5F5F5;\n  scrollbar-width: thin !important;\n  -ms-overflow-style: none;\n}\n.component-sidebar-chat::-webkit-scrollbar {\n  width: 6px;\n  background-color: #eeeeee;\n}\n.component-sidebar-chat::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-sidebar-chat::-moz-scrollbar {\n  width: 6px;\n  background-color: #eeeeee;\n}\n.component-sidebar-chat::-moz-scrollbar-thumb {\n  border-radius: 10px;\n  -moz-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-sidebar-chat::-o-scrollbar {\n  width: 6px;\n  background-color: #eeeeee;\n}\n.component-sidebar-chat::-o-scrollbar-thumb {\n  border-radius: 10px;\n  -o-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-sidebar-chat::-ms-scrollbar {\n  width: 6px;\n  background-color: #eeeeee;\n}\n.component-sidebar-chat::-ms-scrollbar-thumb {\n  border-radius: 10px;\n  -ms-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-sidebar-chat * {\n  box-sizing: border-box;\n}\n\n.myinfo {\n  padding: 10px 5px;\n  box-sizing: border-box;\n  border-bottom: 1px solid #e9ecef;\n  min-height: 75px;\n}\n.myinfo .avatar .state-avatar {\n  display: inline-block;\n  vertical-align: middle;\n  padding: 3px;\n  margin: 0;\n  overflow: hidden;\n  box-sizing: border-box;\n  position: relative;\n  width: 50px;\n  height: 50px;\n}\n.myinfo .avatar .state-avatar:after {\n  content: \".\";\n  color: transparent;\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  right: 1px;\n  bottom: 1px;\n}\n.myinfo .avatar .state-avatar.active-online {\n  border: 2px double #00c851;\n}\n.myinfo .avatar .state-avatar img {\n  max-width: 40px;\n  max-height: 40px;\n}\n.myinfo .avatar .name {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 27ch;\n  display: inline-block;\n  vertical-align: middle;\n  padding: 10px;\n  color: #0d47a1;\n}\n\n@media only screen and (max-width: 991px) {\n  .component-sidebar-chat {\n    width: 40%;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .component-sidebar-chat {\n    width: 75px;\n  }\n  .component-sidebar-chat .user-chat .state-avatar {\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%) !important;\n    -moz-transform: translate(-50%, -50%) !important;\n    -o-transform: translate(-50%, -50%) !important;\n    -ms-transform: translate(-50%, -50%) !important;\n    transform: translate(-50%, -50%) !important;\n  }\n\n  .myinfo {\n    padding: 10px;\n  }\n  .myinfo .avatar .state-avatar img {\n    max-width: 35px;\n    max-height: 35px;\n  }\n  .myinfo .avatar .name {\n    display: none;\n  }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/index.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--6-2!./src/scss/index.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n/**\n* display\n*/\n*,\n:after,\n:before {\n  box-sizing: border-box;\n}\n\n:focus {\n  outline: 0 !important;\n  text-decoration: none !important;\n}\n\n.d-none {\n  display: none !important;\n}\n\n.d-inline-block {\n  display: inline-block !important;\n}\n\n.d-block {\n  display: block !important;\n}\n\n.d-table {\n  display: table !important;\n}\n\n.d-table-row {\n  display: table-row !important;\n}\n\n.d-table-cell {\n  display: table-cell !important;\n}\n\n.d-flex {\n  display: -ms-flexbox !important;\n  display: flex !important;\n}\n\n.d-inline-flex {\n  display: -ms-inline-flexbox !important;\n  display: inline-flex !important;\n}\n\n.italic {\n  font-style: italic !important;\n}\n\n.not-italic {\n  font-style: normal !important;\n}\n\n.uppercase {\n  text-transform: uppercase !important;\n}\n\n.lowercase {\n  text-transform: lowercase !important;\n}\n\n.capitalize {\n  text-transform: capitalize !important;\n}\n\n.normal-case {\n  text-transform: none !important;\n}\n\n.underline {\n  text-decoration: underline !important;\n}\n\n.line-through {\n  text-decoration: line-through !important;\n}\n\n.no-underline {\n  text-decoration: none !important;\n}\n\n/**************************************************/\n.font-hairline {\n  font-weight: 100 !important;\n}\n\n.font-thin {\n  font-weight: 200 !important;\n}\n\n.font-light {\n  font-weight: 300 !important;\n}\n\n.font-normal {\n  font-weight: 400 !important;\n}\n\n.font-medium {\n  font-weight: 500 !important;\n}\n\n.font-semibold {\n  font-weight: 600 !important;\n}\n\n.font-bold {\n  font-weight: 700 !important;\n}\n\n.font-extrabold {\n  font-weight: 800 !important;\n}\n\n.font-black {\n  font-weight: 900 !important;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.vertical-align-middle {\n  vertical-align: middle;\n}\n\n.mg-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.rounded-circle {\n  border-radius: 50% !important;\n}\n\n.border {\n  border: 1px solid #dee2e6 !important;\n}\n\n.border-top {\n  border-top: 1px solid #dee2e6 !important;\n}\n\n.border-right {\n  border-right: 1px solid #dee2e6 !important;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #dee2e6 !important;\n}\n\n.border-left {\n  border-left: 1px solid #dee2e6 !important;\n}\n\n.text-color-red {\n  color: #f44336;\n}\n\n.text-color-pink {\n  color: #e91e63;\n}\n\n.text-color-purple {\n  color: #9c27b0;\n}\n\n.text-color-deep-purple {\n  color: #673ab7;\n}\n\n.text-color-indigo {\n  color: #3f51b5;\n}\n\n.text-color-blue {\n  color: #2196f3;\n}\n\n.text-color-light-blue {\n  color: #03a9f4;\n}\n\n.text-color-cyan {\n  color: #00bcd4;\n}\n\n.text-color-teal {\n  color: #009688;\n}\n\n.text-color-green {\n  color: #4caf50;\n}\n\n.text-color-light-green {\n  color: #8bc34a;\n}\n\n.text-color-lime {\n  color: #cddc39;\n}\n\n.text-color-yellow {\n  color: #ffeb3b;\n}\n\n.text-color-amber {\n  color: #ffc107;\n}\n\n.text-color-orange {\n  color: #ff9800;\n}\n\n.text-color-deep-orange {\n  color: #ff5722;\n}\n\n.text-color-brown {\n  color: #795548;\n}\n\n.text-color-black {\n  color: #000;\n}\n\n.text-color-white {\n  color: #fff;\n}\n\n.text-color-grey {\n  color: #9e9e9e;\n}\n\n.text-color-blue-grey {\n  color: #607d8b;\n}\n\n.text-color-primary-color-dark {\n  color: #0d47a1;\n}\n\n.text-color-secondary-color {\n  color: #aa66cc;\n}\n\n.text-color-secondary-color-dark {\n  color: #9933cc;\n}\n\n.text-color-default-color {\n  color: #2bbbad;\n}\n\n.text-color-default-color-dark {\n  color: #00695c;\n}\n\n.text-color-info-color {\n  color: #33b5e5;\n}\n\n.text-color-info-color-dark {\n  color: #0099cc;\n}\n\n.text-color-success-color {\n  color: #00c851;\n}\n\n.text-color-success-color-dark {\n  color: #007e33;\n}\n\n.text-color-warning-color {\n  color: #ffbb33;\n}\n\n.text-color-warning-color-dark {\n  color: #ff8800;\n}\n\n.text-color-danger-color {\n  color: #ff3547;\n}\n\n.text-color-danger-color-dark {\n  color: #cc0000;\n}\n\n.text-color-elegant-color {\n  color: #2e2e2e;\n}\n\n.text-color-elegant-color-dark {\n  color: #212121;\n}\n\n.text-color-stylish-color {\n  color: #4b515d;\n}\n\n.text-color-stylish-color-dark {\n  color: #3e4551;\n}\n\n.text-color-unique-color {\n  color: #3f729b;\n}\n\n.text-color-unique-color-dark {\n  color: #1c2331;\n}\n\n.text-color-special-color {\n  color: #37474f;\n}\n\n.text-color-special-color-dark {\n  color: #263238;\n}\n\n.text-color-primary {\n  color: #4285f4;\n}\n\n.text-color-danger {\n  color: #ff3547;\n}\n\n.text-color-warning {\n  color: #ffbb33;\n}\n\n.text-color-success {\n  color: #00c851;\n}\n\n.text-color-info {\n  color: #33b5e5;\n}\n\n.text-color-default {\n  color: #2bbbad;\n}\n\n.text-color-secondary {\n  color: #aa66cc;\n}\n\n.text-color-dark {\n  color: #212121;\n}\n\n.text-color-light {\n  color: #e0e0e0;\n}\n\n.text-color-grey-x {\n  color: #f9f9f9;\n}\n\n.border-color-red {\n  border-color: #f44336;\n}\n\n.border-color-pink {\n  border-color: #e91e63;\n}\n\n.border-color-purple {\n  border-color: #9c27b0;\n}\n\n.border-color-deep-purple {\n  border-color: #673ab7;\n}\n\n.border-color-indigo {\n  border-color: #3f51b5;\n}\n\n.border-color-blue {\n  border-color: #2196f3;\n}\n\n.border-color-light-blue {\n  border-color: #03a9f4;\n}\n\n.border-color-cyan {\n  border-color: #00bcd4;\n}\n\n.border-color-teal {\n  border-color: #009688;\n}\n\n.border-color-green {\n  border-color: #4caf50;\n}\n\n.border-color-light-green {\n  border-color: #8bc34a;\n}\n\n.border-color-lime {\n  border-color: #cddc39;\n}\n\n.border-color-yellow {\n  border-color: #ffeb3b;\n}\n\n.border-color-amber {\n  border-color: #ffc107;\n}\n\n.border-color-orange {\n  border-color: #ff9800;\n}\n\n.border-color-deep-orange {\n  border-color: #ff5722;\n}\n\n.border-color-brown {\n  border-color: #795548;\n}\n\n.border-color-black {\n  border-color: #000;\n}\n\n.border-color-white {\n  border-color: #fff;\n}\n\n.border-color-grey {\n  border-color: #9e9e9e;\n}\n\n.border-color-blue-grey {\n  border-color: #607d8b;\n}\n\n.border-color-primary-color-dark {\n  border-color: #0d47a1;\n}\n\n.border-color-secondary-color {\n  border-color: #aa66cc;\n}\n\n.border-color-secondary-color-dark {\n  border-color: #9933cc;\n}\n\n.border-color-default-color {\n  border-color: #2bbbad;\n}\n\n.border-color-default-color-dark {\n  border-color: #00695c;\n}\n\n.border-color-info-color {\n  border-color: #33b5e5;\n}\n\n.border-color-info-color-dark {\n  border-color: #0099cc;\n}\n\n.border-color-success-color {\n  border-color: #00c851;\n}\n\n.border-color-success-color-dark {\n  border-color: #007e33;\n}\n\n.border-color-warning-color {\n  border-color: #ffbb33;\n}\n\n.border-color-warning-color-dark {\n  border-color: #ff8800;\n}\n\n.border-color-danger-color {\n  border-color: #ff3547;\n}\n\n.border-color-danger-color-dark {\n  border-color: #cc0000;\n}\n\n.border-color-elegant-color {\n  border-color: #2e2e2e;\n}\n\n.border-color-elegant-color-dark {\n  border-color: #212121;\n}\n\n.border-color-stylish-color {\n  border-color: #4b515d;\n}\n\n.border-color-stylish-color-dark {\n  border-color: #3e4551;\n}\n\n.border-color-unique-color {\n  border-color: #3f729b;\n}\n\n.border-color-unique-color-dark {\n  border-color: #1c2331;\n}\n\n.border-color-special-color {\n  border-color: #37474f;\n}\n\n.border-color-special-color-dark {\n  border-color: #263238;\n}\n\n.border-color-primary {\n  border-color: #4285f4;\n}\n\n.border-color-danger {\n  border-color: #ff3547;\n}\n\n.border-color-warning {\n  border-color: #ffbb33;\n}\n\n.border-color-success {\n  border-color: #00c851;\n}\n\n.border-color-info {\n  border-color: #33b5e5;\n}\n\n.border-color-default {\n  border-color: #2bbbad;\n}\n\n.border-color-secondary {\n  border-color: #aa66cc;\n}\n\n.border-color-dark {\n  border-color: #212121;\n}\n\n.border-color-light {\n  border-color: #e0e0e0;\n}\n\n.border-color-grey-x {\n  border-color: #f9f9f9;\n}\n\n.bg-color-red {\n  background-color: #f44336;\n}\n\n.bg-color-pink {\n  background-color: #e91e63;\n}\n\n.bg-color-purple {\n  background-color: #9c27b0;\n}\n\n.bg-color-deep-purple {\n  background-color: #673ab7;\n}\n\n.bg-color-indigo {\n  background-color: #3f51b5;\n}\n\n.bg-color-blue {\n  background-color: #2196f3;\n}\n\n.bg-color-light-blue {\n  background-color: #03a9f4;\n}\n\n.bg-color-cyan {\n  background-color: #00bcd4;\n}\n\n.bg-color-teal {\n  background-color: #009688;\n}\n\n.bg-color-green {\n  background-color: #4caf50;\n}\n\n.bg-color-light-green {\n  background-color: #8bc34a;\n}\n\n.bg-color-lime {\n  background-color: #cddc39;\n}\n\n.bg-color-yellow {\n  background-color: #ffeb3b;\n}\n\n.bg-color-amber {\n  background-color: #ffc107;\n}\n\n.bg-color-orange {\n  background-color: #ff9800;\n}\n\n.bg-color-deep-orange {\n  background-color: #ff5722;\n}\n\n.bg-color-brown {\n  background-color: #795548;\n}\n\n.bg-color-black {\n  background-color: #000;\n}\n\n.bg-color-white {\n  background-color: #fff;\n}\n\n.bg-color-grey {\n  background-color: #9e9e9e;\n}\n\n.bg-color-blue-grey {\n  background-color: #607d8b;\n}\n\n.bg-color-primary-color-dark {\n  background-color: #0d47a1;\n}\n\n.bg-color-secondary-color {\n  background-color: #aa66cc;\n}\n\n.bg-color-secondary-color-dark {\n  background-color: #9933cc;\n}\n\n.bg-color-default-color {\n  background-color: #2bbbad;\n}\n\n.bg-color-default-color-dark {\n  background-color: #00695c;\n}\n\n.bg-color-info-color {\n  background-color: #33b5e5;\n}\n\n.bg-color-info-color-dark {\n  background-color: #0099cc;\n}\n\n.bg-color-success-color {\n  background-color: #00c851;\n}\n\n.bg-color-success-color-dark {\n  background-color: #007e33;\n}\n\n.bg-color-warning-color {\n  background-color: #ffbb33;\n}\n\n.bg-color-warning-color-dark {\n  background-color: #ff8800;\n}\n\n.bg-color-danger-color {\n  background-color: #ff3547;\n}\n\n.bg-color-danger-color-dark {\n  background-color: #cc0000;\n}\n\n.bg-color-elegant-color {\n  background-color: #2e2e2e;\n}\n\n.bg-color-elegant-color-dark {\n  background-color: #212121;\n}\n\n.bg-color-stylish-color {\n  background-color: #4b515d;\n}\n\n.bg-color-stylish-color-dark {\n  background-color: #3e4551;\n}\n\n.bg-color-unique-color {\n  background-color: #3f729b;\n}\n\n.bg-color-unique-color-dark {\n  background-color: #1c2331;\n}\n\n.bg-color-special-color {\n  background-color: #37474f;\n}\n\n.bg-color-special-color-dark {\n  background-color: #263238;\n}\n\n.bg-color-primary {\n  background-color: #4285f4;\n}\n\n.bg-color-danger {\n  background-color: #ff3547;\n}\n\n.bg-color-warning {\n  background-color: #ffbb33;\n}\n\n.bg-color-success {\n  background-color: #00c851;\n}\n\n.bg-color-info {\n  background-color: #33b5e5;\n}\n\n.bg-color-default {\n  background-color: #2bbbad;\n}\n\n.bg-color-secondary {\n  background-color: #aa66cc;\n}\n\n.bg-color-dark {\n  background-color: #212121;\n}\n\n.bg-color-light {\n  background-color: #e0e0e0;\n}\n\n.bg-color-grey-x {\n  background-color: #f9f9f9;\n}\n\n.w-25 {\n  width: 25;\n}\n\n.w-50 {\n  width: 50;\n}\n\n.w-55 {\n  width: 55;\n}\n\n.w-60 {\n  width: 60;\n}\n\n.w-65 {\n  width: 65;\n}\n\n.w-70 {\n  width: 70;\n}\n\n.w-75 {\n  width: 75;\n}\n\n.w-80 {\n  width: 80;\n}\n\n.w-85 {\n  width: 85;\n}\n\n.w-90 {\n  width: 90;\n}\n\n.w-95 {\n  width: 95;\n}\n\n.w-100 {\n  width: 100;\n}\n\n.text-xs {\n  font-size: 0.75rem;\n}\n\n.text-sm {\n  font-size: 0.875rem;\n}\n\n.text-base {\n  font-size: 1rem;\n}\n\n.text-lg {\n  font-size: 1.125rem;\n}\n\n.text-xl {\n  font-size: 1.25rem;\n}\n\n.text-2xl {\n  font-size: 1.5rem;\n}\n\n.text-3xl {\n  font-size: 1.875rem;\n}\n\n.text-4xl {\n  font-size: 2.25rem;\n}\n\n.text-5xl {\n  font-size: 3rem;\n}\n\n.text-6xl {\n  font-size: 4rem;\n}\n\nbody.neo-scroll {\n  overflow: hidden;\n}\n\ninput:focus, select:focus, textarea:focus, option:focus {\n  border: 1px solid #aaaaaa;\n  outline: none;\n}\n\n:root {\n  --animate-duration: 1s;\n  --animate-delay: 1s;\n  --animate-loop: 1;\n}\n\n.animated {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n}\n.animated.infinite {\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n.animated.faster {\n  animation-duration: calc($--animate-duration / 2);\n}\n.animated.fast {\n  animation-duration: calc($--animate-duration * 0.8);\n}\n.animated.slow {\n  animation-duration: calc($--animate-duration * 2);\n}\n.animated.slower {\n  animation-duration: calc($--animate-duration * 3);\n}\n.animated.loop-1 {\n  animation-iteration-count: 1;\n}\n.animated.delay-1s {\n  animation-delay: calc($--animate-delay * $i);\n}\n.animated.loop-2 {\n  animation-iteration-count: 2;\n}\n.animated.delay-1s {\n  animation-delay: calc($--animate-delay * $i);\n}\n.animated.loop-3 {\n  animation-iteration-count: 3;\n}\n.animated.delay-1s {\n  animation-delay: calc($--animate-delay * $i);\n}\n.animated.loop-4 {\n  animation-iteration-count: 4;\n}\n.animated.delay-1s {\n  animation-delay: calc($--animate-delay * $i);\n}\n\n@media print, (prefers-reduced-motion: reduce) {\n  .animated {\n    animation-duration: 1ms !important;\n    transition-duration: 1ms !important;\n    animation-iteration-count: 1 !important;\n  }\n\n  .animated[class*=Out] {\n    opacity: 0;\n  }\n}\n.animated-initial {\n  animation-name: initial !important;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@keyframes pulse {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n  50% {\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n.pulse {\n  animation-name: pulse;\n  animation-timing-function: ease-in-out;\n}\n\n@keyframes tada {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n  10%, 20% {\n    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n  }\n  30%, 50%, 70%, 90% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n  40%, 60%, 80% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n.tada {\n  animation-name: tada;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n@keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.fadeInLeft {\n  animation-name: fadeInLeft;\n}\n\n@keyframes fadeInRight {\n  from {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.fadeInRight {\n  animation-name: fadeInRight;\n}\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.fadeInUp {\n  animation-name: fadeInUp;\n}\n\n@keyframes rotateOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n}\n.rotateOut {\n  animation-name: rotateOut;\n  transform-origin: center;\n}\n\n.rotate-circle {\n  animation: rotateCircle 9s infinite;\n}\n\n/*\n Custom Animations\n */\n@keyframes rotateCircle {\n  0% {\n    transform: rotate(0deg);\n  }\n  25% {\n    transform: rotate(90deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(270deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes jackInTheBox {\n  from {\n    opacity: 0;\n    transform: scale(0.1) rotate(30deg);\n    transform-origin: center bottom;\n  }\n  50% {\n    transform: rotate(-10deg);\n  }\n  70% {\n    transform: rotate(3deg);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.jackInTheBox {\n  animation-name: jackInTheBox;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@keyframes rollIn {\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.rollIn {\n  animation-name: rollIn;\n}\n\n@keyframes zoomIn {\n  from {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n  50% {\n    opacity: 1;\n  }\n}\n.zoomIn {\n  animation-name: zoomIn;\n}\n\n@keyframes slideInDown {\n  from {\n    transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.slideInDown {\n  animation-name: slideInDown;\n}\n\n@keyframes float {\n  0% {\n    transform: translateY(0px);\n    -webkit-transition: translateY(0px);\n  }\n  50% {\n    transform: translateY(-6px);\n    -webkit-transition: translateY(-6px);\n  }\n  100% {\n    transform: translateY(0px);\n    -webkit-transition: translateY(0px);\n  }\n}\n.purple-gradient {\n  background: -moz-linear-gradient(40deg, #ff6ec4, #7873f5) !important;\n  background: -webkit-linear-gradient(40deg, #ff6ec4, #7873f5) !important;\n  background: -o-linear-gradient(40deg, #ff6ec4, #7873f5) !important;\n  background: -ms-linear-gradient(40deg, #ff6ec4, #7873f5) !important;\n  background: linear-gradient(40deg, #ff6ec4, #7873f5) !important;\n}\n\n.peach-gradient {\n  background: -moz-linear-gradient(40deg, #ffd86f, #fc6262) !important;\n  background: -webkit-linear-gradient(40deg, #ffd86f, #fc6262) !important;\n  background: -o-linear-gradient(40deg, #ffd86f, #fc6262) !important;\n  background: -ms-linear-gradient(40deg, #ffd86f, #fc6262) !important;\n  background: linear-gradient(40deg, #ffd86f, #fc6262) !important;\n}\n\n.aqua-gradient {\n  background: -moz-linear-gradient(40deg, #2096ff, #05ffa3) !important;\n  background: -webkit-linear-gradient(40deg, #2096ff, #05ffa3) !important;\n  background: -o-linear-gradient(40deg, #2096ff, #05ffa3) !important;\n  background: -ms-linear-gradient(40deg, #2096ff, #05ffa3) !important;\n  background: linear-gradient(40deg, #2096ff, #05ffa3) !important;\n}\n\n.blue-gradient {\n  background: -moz-linear-gradient(40deg, #45cafc, #303f9f) !important;\n  background: -webkit-linear-gradient(40deg, #45cafc, #303f9f) !important;\n  background: -o-linear-gradient(40deg, #45cafc, #303f9f) !important;\n  background: -ms-linear-gradient(40deg, #45cafc, #303f9f) !important;\n  background: linear-gradient(40deg, #45cafc, #303f9f) !important;\n}\n\n.home-page-gradient {\n  background: -moz-linear-gradient(40deg, #e1fefa, #fcf7f4) !important;\n  background: -webkit-linear-gradient(40deg, #e1fefa, #fcf7f4) !important;\n  background: -o-linear-gradient(40deg, #e1fefa, #fcf7f4) !important;\n  background: -ms-linear-gradient(40deg, #e1fefa, #fcf7f4) !important;\n  background: linear-gradient(40deg, #e1fefa, #fcf7f4) !important;\n}\n\n.purple-gradient-rgba {\n  background: -moz-linear-gradient(40deg, rgba(255, 110, 196, 0.9), rgba(120, 115, 245, 0.9)) !important;\n  background: -webkit-linear-gradient(40deg, rgba(255, 110, 196, 0.9), rgba(120, 115, 245, 0.9)) !important;\n  background: -o-linear-gradient(40deg, rgba(255, 110, 196, 0.9), rgba(120, 115, 245, 0.9)) !important;\n  background: -ms-linear-gradient(40deg, rgba(255, 110, 196, 0.9), rgba(120, 115, 245, 0.9)) !important;\n  background: linear-gradient(40deg, rgba(255, 110, 196, 0.9), rgba(120, 115, 245, 0.9)) !important;\n}\n\n.peach-gradient-rgba {\n  background: -moz-linear-gradient(40deg, rgba(255, 216, 111, 0.9), rgba(252, 98, 98, 0.9)) !important;\n  background: -webkit-linear-gradient(40deg, rgba(255, 216, 111, 0.9), rgba(252, 98, 98, 0.9)) !important;\n  background: -o-linear-gradient(40deg, rgba(255, 216, 111, 0.9), rgba(252, 98, 98, 0.9)) !important;\n  background: -ms-linear-gradient(40deg, rgba(255, 216, 111, 0.9), rgba(252, 98, 98, 0.9)) !important;\n  background: linear-gradient(40deg, rgba(255, 216, 111, 0.9), rgba(252, 98, 98, 0.9)) !important;\n}\n\n.aqua-gradient-rgba {\n  background: -moz-linear-gradient(40deg, rgba(32, 150, 255, 0.9), rgba(5, 255, 163, 0.9)) !important;\n  background: -webkit-linear-gradient(40deg, rgba(32, 150, 255, 0.9), rgba(5, 255, 163, 0.9)) !important;\n  background: -o-linear-gradient(40deg, rgba(32, 150, 255, 0.9), rgba(5, 255, 163, 0.9)) !important;\n  background: -ms-linear-gradient(40deg, rgba(32, 150, 255, 0.9), rgba(5, 255, 163, 0.9)) !important;\n  background: linear-gradient(40deg, rgba(32, 150, 255, 0.9), rgba(5, 255, 163, 0.9)) !important;\n}\n\n.blue-gradient-rgba {\n  background: -moz-linear-gradient(40deg, rgba(69, 202, 252, 0.9), rgba(48, 63, 159, 0.9)) !important;\n  background: -webkit-linear-gradient(40deg, rgba(69, 202, 252, 0.9), rgba(48, 63, 159, 0.9)) !important;\n  background: -o-linear-gradient(40deg, rgba(69, 202, 252, 0.9), rgba(48, 63, 159, 0.9)) !important;\n  background: -ms-linear-gradient(40deg, rgba(69, 202, 252, 0.9), rgba(48, 63, 159, 0.9)) !important;\n  background: linear-gradient(40deg, rgba(69, 202, 252, 0.9), rgba(48, 63, 159, 0.9)) !important;\n}\n\n.bg-gradient-purple {\n  background: -moz-linear-gradient(131.93deg, #ff6ec4, #7873f5) !important;\n  background: -webkit-linear-gradient(131.93deg, #ff6ec4, #7873f5) !important;\n  background: -o-linear-gradient(131.93deg, #ff6ec4, #7873f5) !important;\n  background: -ms-linear-gradient(131.93deg, #ff6ec4, #7873f5) !important;\n  background: linear-gradient(131.93deg, #ff6ec4, #7873f5) !important;\n}\n\n.bg-gradient-peach {\n  background: -moz-linear-gradient(131.93deg, #ffd86f, #fc6262) !important;\n  background: -webkit-linear-gradient(131.93deg, #ffd86f, #fc6262) !important;\n  background: -o-linear-gradient(131.93deg, #ffd86f, #fc6262) !important;\n  background: -ms-linear-gradient(131.93deg, #ffd86f, #fc6262) !important;\n  background: linear-gradient(131.93deg, #ffd86f, #fc6262) !important;\n}\n\n.bg-gradient-aqua {\n  background: -moz-linear-gradient(131.93deg, #2096ff, #05ffa3) !important;\n  background: -webkit-linear-gradient(131.93deg, #2096ff, #05ffa3) !important;\n  background: -o-linear-gradient(131.93deg, #2096ff, #05ffa3) !important;\n  background: -ms-linear-gradient(131.93deg, #2096ff, #05ffa3) !important;\n  background: linear-gradient(131.93deg, #2096ff, #05ffa3) !important;\n}\n\n.bg-gradient-blue {\n  background: -moz-linear-gradient(131.93deg, #45cafc, #303f9f) !important;\n  background: -webkit-linear-gradient(131.93deg, #45cafc, #303f9f) !important;\n  background: -o-linear-gradient(131.93deg, #45cafc, #303f9f) !important;\n  background: -ms-linear-gradient(131.93deg, #45cafc, #303f9f) !important;\n  background: linear-gradient(131.93deg, #45cafc, #303f9f) !important;\n}\n\n.bg-gradient-home-page {\n  background: -moz-linear-gradient(131.93deg, #e1fefa, #fcf7f4) !important;\n  background: -webkit-linear-gradient(131.93deg, #e1fefa, #fcf7f4) !important;\n  background: -o-linear-gradient(131.93deg, #e1fefa, #fcf7f4) !important;\n  background: -ms-linear-gradient(131.93deg, #e1fefa, #fcf7f4) !important;\n  background: linear-gradient(131.93deg, #e1fefa, #fcf7f4) !important;\n}\n\n@font-face {\n  font-family: \"HERO Icons\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/IconFont/webfont.eot?v=1.4.57\");\n  src: url(\"http://babysitter.trust-growth.co.jp/font/IconFont/webfont.eot?#iefix&v=1.4.57\") format(\"embedded-opentype\"), url(\"http://babysitter.trust-growth.co.jp/font/IconFont/webfont.woff2?v=1.4.57\") format(\"woff2\"), url(\"http://babysitter.trust-growth.co.jp/font/IconFont/webfont.woff?v=1.4.57\") format(\"woff\"), url(\"http://babysitter.trust-growth.co.jp/font/IconFont/webfont.ttf?v=1.4.57\") format(\"truetype\"), url(\"http://babysitter.trust-growth.co.jp/font/IconFont/webfont.svg?v=1.4.57\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\ni.hero-icon {\n  color: #607D8B;\n  display: flex;\n  width: 25px;\n  height: unset;\n  line-height: unset;\n}\ni.hero-icon:before {\n  font-size: 24px;\n  display: inline-block;\n  font: normal normal normal 24px/1 \"HERO Icons\";\n  font-size: inherit;\n  text-rendering: auto;\n  line-height: inherit;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\ni.hero-icon.hero-account-group-outline::before {\n  content: \"\\F0B58\";\n}\ni.hero-icon.hero-account-search-outline::before {\n  content: \"\\F0935\";\n}\ni.hero-icon.hero-account-tie-outline::before {\n  content: \"\\F10CA\";\n}\ni.hero-icon.hero-airport::before {\n  content: \"\\F084B\";\n}\ni.hero-icon.hero-arrow-down-bold-box-outline::before {\n  content: \"\\F0730\";\n}\ni.hero-icon.hero-arrow-up-bold-box-outline::before {\n  content: \"\\F0739\";\n}\ni.hero-icon.hero-arrow-up-box::before {\n  content: \"\\F06C3\";\n}\ni.hero-icon.hero-auto-fix::before {\n  content: \"\\F0068\";\n}\ni.hero-icon.hero-auto-upload::before {\n  content: \"\\F0069\";\n}\ni.hero-icon.hero-ballot-recount-outline::before {\n  content: \"\\F0C3A\";\n}\ni.hero-icon.hero-call-made::before {\n  content: \"\\F00F7\";\n}\ni.hero-icon.hero-card-account-mail-outline::before {\n  content: \"\\F0E98\";\n}\ni.hero-icon.hero-cart-plus::before {\n  content: \"\\F0112\";\n}\ni.hero-icon.hero-cellphone::before {\n  content: \"\\F011C\";\n}\ni.hero-icon.hero-cellphone-cog::before {\n  content: \"\\F0951\";\n}\ni.hero-icon.hero-cellphone-message::before {\n  content: \"\\F08D3\";\n}\ni.hero-icon.hero-cellphone-nfc::before {\n  content: \"\\F0E90\";\n}\ni.hero-icon.hero-certificate-outline::before {\n  content: \"\\F1188\";\n}\ni.hero-icon.hero-check-circle::before {\n  content: \"\\F05E0\";\n}\ni.hero-icon.hero-check-circle-outline::before {\n  content: \"\\F05E1\";\n}\ni.hero-icon.hero-clippy::before {\n  content: \"\\F014F\";\n}\ni.hero-icon.hero-cloud-download-outline::before {\n  content: \"\\F0B7D\";\n}\ni.hero-icon.hero-creation::before {\n  content: \"\\F0674\";\n}\ni.hero-icon.hero-email-edit-outline::before {\n  content: \"\\F0EE4\";\n}\ni.hero-icon.hero-emoticon::before {\n  content: \"\\F0C68\";\n}\ni.hero-icon.hero-emoticon-angry::before {\n  content: \"\\F0C69\";\n}\ni.hero-icon.hero-emoticon-angry-outline::before {\n  content: \"\\F0C6A\";\n}\ni.hero-icon.hero-emoticon-confused::before {\n  content: \"\\F10DE\";\n}\ni.hero-icon.hero-emoticon-confused-outline::before {\n  content: \"\\F10DF\";\n}\ni.hero-icon.hero-emoticon-cool::before {\n  content: \"\\F0C6B\";\n}\ni.hero-icon.hero-emoticon-cool-outline::before {\n  content: \"\\F01F3\";\n}\ni.hero-icon.hero-emoticon-cry::before {\n  content: \"\\F0C6C\";\n}\ni.hero-icon.hero-emoticon-cry-outline::before {\n  content: \"\\F0C6D\";\n}\ni.hero-icon.hero-emoticon-dead::before {\n  content: \"\\F0C6E\";\n}\ni.hero-icon.hero-emoticon-dead-outline::before {\n  content: \"\\F069B\";\n}\ni.hero-icon.hero-emoticon-devil::before {\n  content: \"\\F0C6F\";\n}\ni.hero-icon.hero-emoticon-devil-outline::before {\n  content: \"\\F01F4\";\n}\ni.hero-icon.hero-emoticon-excited::before {\n  content: \"\\F0C70\";\n}\ni.hero-icon.hero-emoticon-excited-outline::before {\n  content: \"\\F069C\";\n}\ni.hero-icon.hero-emoticon-frown::before {\n  content: \"\\F0F4C\";\n}\ni.hero-icon.hero-emoticon-frown-outline::before {\n  content: \"\\F0F4D\";\n}\ni.hero-icon.hero-emoticon-happy::before {\n  content: \"\\F0C71\";\n}\ni.hero-icon.hero-emoticon-happy-outline::before {\n  content: \"\\F01F5\";\n}\ni.hero-icon.hero-emoticon-kiss::before {\n  content: \"\\F0C72\";\n}\ni.hero-icon.hero-emoticon-kiss-outline::before {\n  content: \"\\F0C73\";\n}\ni.hero-icon.hero-emoticon-lol::before {\n  content: \"\\F1214\";\n}\ni.hero-icon.hero-emoticon-lol-outline::before {\n  content: \"\\F1215\";\n}\ni.hero-icon.hero-emoticon-neutral::before {\n  content: \"\\F0C74\";\n}\ni.hero-icon.hero-emoticon-neutral-outline::before {\n  content: \"\\F01F6\";\n}\ni.hero-icon.hero-emoticon-outline::before {\n  content: \"\\F01F2\";\n}\ni.hero-icon.hero-emoticon-poop::before {\n  content: \"\\F01F7\";\n}\ni.hero-icon.hero-emoticon-poop-outline::before {\n  content: \"\\F0C75\";\n}\ni.hero-icon.hero-emoticon-sad::before {\n  content: \"\\F0C76\";\n}\ni.hero-icon.hero-emoticon-sad-outline::before {\n  content: \"\\F01F8\";\n}\ni.hero-icon.hero-emoticon-tongue::before {\n  content: \"\\F01F9\";\n}\ni.hero-icon.hero-emoticon-tongue-outline::before {\n  content: \"\\F0C77\";\n}\ni.hero-icon.hero-emoticon-wink::before {\n  content: \"\\F0C78\";\n}\ni.hero-icon.hero-emoticon-wink-outline::before {\n  content: \"\\F0C79\";\n}\ni.hero-icon.hero-file::before {\n  content: \"\\F0214\";\n}\ni.hero-icon.hero-file-cloud-outline::before {\n  content: \"\\F102A\";\n}\ni.hero-icon.hero-form-select::before {\n  content: \"\\F1401\";\n}\ni.hero-icon.hero-format-list-text::before {\n  content: \"\\F126F\";\n}\ni.hero-icon.hero-google-ads::before {\n  content: \"\\F0C87\";\n}\ni.hero-icon.hero-hand-okay::before {\n  content: \"\\F0A50\";\n}\ni.hero-icon.hero-hand-pointing-right::before {\n  content: \"\\F02C7\";\n}\ni.hero-icon.hero-headset::before {\n  content: \"\\F02CE\";\n}\ni.hero-icon.hero-heart-multiple-outline::before {\n  content: \"\\F0A57\";\n}\ni.hero-icon.hero-home-map-marker::before {\n  content: \"\\F05F8\";\n}\ni.hero-icon.hero-human-male-child::before {\n  content: \"\\F138C\";\n}\ni.hero-icon.hero-laptop::before {\n  content: \"\\F0322\";\n}\ni.hero-icon.hero-message-cog-outline::before {\n  content: \"\\F1172\";\n}\ni.hero-icon.hero-message-text-outline::before {\n  content: \"\\F036A\";\n}\ni.hero-icon.hero-mouse::before {\n  content: \"\\F037D\";\n}\ni.hero-icon.hero-mouse-bluetooth::before {\n  content: \"\\F098B\";\n}\ni.hero-icon.hero-mouse-off::before {\n  content: \"\\F037E\";\n}\ni.hero-icon.hero-mouse-variant::before {\n  content: \"\\F037F\";\n}\ni.hero-icon.hero-mouse-variant-off::before {\n  content: \"\\F0380\";\n}\ni.hero-icon.hero-newspaper-variant-multiple-outline::before {\n  content: \"\\F1003\";\n}\ni.hero-icon.hero-newspaper-variant-outline::before {\n  content: \"\\F1004\";\n}\ni.hero-icon.hero-phone-in-talk-outline::before {\n  content: \"\\F1182\";\n}\ni.hero-icon.hero-plus-outline::before {\n  content: \"\\F0705\";\n}\ni.hero-icon.hero-responsive::before {\n  content: \"\\F045E\";\n}\ni.hero-icon.hero-select::before {\n  content: \"\\F0485\";\n}\ni.hero-icon.hero-selection-search::before {\n  content: \"\\F1205\";\n}\ni.hero-icon.hero-send::before {\n  content: \"\\F048A\";\n}\ni.hero-icon.hero-send-check-outline::before {\n  content: \"\\F1162\";\n}\ni.hero-icon.hero-send-outline::before {\n  content: \"\\F1165\";\n}\ni.hero-icon.hero-share-all-outline::before {\n  content: \"\\F11F5\";\n}\ni.hero-icon.hero-star-box-multiple-outline::before {\n  content: \"\\F1287\";\n}\ni.hero-icon.hero-sticker-emoji::before {\n  content: \"\\F0785\";\n}\ni.hero-icon.hero-tablet-ipad::before {\n  content: \"\\F04F8\";\n}\ni.hero-icon.hero-television-clean::before {\n  content: \"\\F1110\";\n}\ni.hero-icon.hero-update::before {\n  content: \"\\F06B0\";\n}\ni.hero-icon.hero-zodiac-taurus::before {\n  content: \"\\F0A87\";\n}\ni.hero-icon.hero-zodiac-virgo::before {\n  content: \"\\F0A88\";\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/action/index.js":
/*!*****************************!*\
  !*** ./src/action/index.js ***!
  \*****************************/
/*! exports provided: setterUser, setterConversation, setterConversationBackup, changeChannelActive, readAllCMessage, filterSortConversation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setterUser", function() { return setterUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setterConversation", function() { return setterConversation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setterConversationBackup", function() { return setterConversationBackup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeChannelActive", function() { return changeChannelActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readAllCMessage", function() { return readAllCMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterSortConversation", function() { return filterSortConversation; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./src/action/type.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function setterUser(user) {
  console.log(user, " set user ");
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["default"].SETTER_USER,
    payload: _objectSpread(_objectSpread({}, user), {}, {
      fetched: true
    })
  };
}
function setterConversation(conv) {
  console.log(conv, " set conv ");
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["default"].SETTER_CONVERSATION,
    payload: conv
  };
}
function setterConversationBackup(conv) {
  console.log(conv, " set conv backup ");
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["default"].SETTER_CONVERSATION_BACKUP,
    payload: conv
  };
}
function changeChannelActive(id) {
  console.log(id, " changeChannelActive ");
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["default"].CHANNEL_SET_ACTIVE,
    payload: id
  };
}
function readAllCMessage() {
  console.log(" readAllCMessage ");
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["default"].CHANNEL_READ_MESSAGE,
    payload: null
  };
}
function filterSortConversation(objectIdsAndDataBackup) {
  console.log(" filterSortConversation ");
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["default"].FILTER_SORT_CONV,
    payload: objectIdsAndDataBackup
  };
}

/***/ }),

/***/ "./src/action/type.js":
/*!****************************!*\
  !*** ./src/action/type.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var TYPE = {
  CHANNEL_SET_ACTIVE: "CHANNEL_SET_ACTIVE",
  SETTER_USER: "SETTER_USER",
  CHANNEL_READ_MESSAGE: "CHANNEL_READ_MESSAGE",
  SETTER_CONVERSATION: "SETTER_CONVERSATION",
  FILTER_SORT_CONV: "FILTER_SORT_CONV",
  SETTER_CONVERSATION_BACKUP: "SETTER_CONVERSATION_BACKUP"
};
/* harmony default export */ __webpack_exports__["default"] = (TYPE);

/***/ }),

/***/ "./src/component/App.js":
/*!******************************!*\
  !*** ./src/component/App.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Chat_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chat/index.jsx */ "./src/component/Chat/index.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App() {
    _classCallCheck(this, App);

    return _super.apply(this, arguments);
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      console.log("draw app");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "AppComponent",
        id: "Application"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chat_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/component/Chat/HeadInfo.jsx":
/*!*****************************************!*\
  !*** ./src/component/Chat/HeadInfo.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_chat_head_info_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scss/chat/head-info.scss */ "./src/scss/chat/head-info.scss");
/* harmony import */ var _scss_chat_head_info_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_chat_head_info_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./src/config/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var HeadInfo = /*#__PURE__*/function (_Component) {
  _inherits(HeadInfo, _Component);

  var _super = _createSuper(HeadInfo);

  function HeadInfo() {
    _classCallCheck(this, HeadInfo);

    return _super.apply(this, arguments);
  }

  _createClass(HeadInfo, [{
    key: "render",
    value: function render() {
      console.log("render head chat");
      var conversations = this.props.conversations;
      var channelActive = conversations.find(function (channel) {
        return channel.isActive;
      });

      if (!channelActive) {
        return null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-head-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-active-chat"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
        className: "state-avatar active-online"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _config__WEBPACK_IMPORTED_MODULE_2__["default"].SERVER_PHP.URL + channelActive.user.avatar,
        alt: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "name"
      }, channelActive.user.first_name + " " + channelActive.user.last_name))));
    }
  }]);

  return HeadInfo;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HeadInfo);

/***/ }),

/***/ "./src/component/Chat/ListMessage.jsx":
/*!********************************************!*\
  !*** ./src/component/Chat/ListMessage.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HeadInfo_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeadInfo.jsx */ "./src/component/Chat/HeadInfo.jsx");
/* harmony import */ var _MessageChat_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageChat.jsx */ "./src/component/Chat/MessageChat.jsx");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scss_chat_list_message_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../scss/chat/list-message.scss */ "./src/scss/chat/list-message.scss");
/* harmony import */ var _scss_chat_list_message_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scss_chat_list_message_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _library_service_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../library/service.js */ "./src/library/service.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var ListMessage = /*#__PURE__*/function (_Component) {
  _inherits(ListMessage, _Component);

  var _super = _createSuper(ListMessage);

  function ListMessage() {
    _classCallCheck(this, ListMessage);

    return _super.apply(this, arguments);
  }

  _createClass(ListMessage, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var conversations = this.props.conversations;
      var channelActiveChat = conversations.find(function (channel) {
        return channel.isActive;
      });
      var messages = channelActiveChat && channelActiveChat.message;
      var lstMessage = document.getElementById('js-scroll-to-bottom');

      if (lstMessage) {
        jquery__WEBPACK_IMPORTED_MODULE_3___default()('#js-scroll-to-bottom').on('scroll', function () {
          Object(_library_service_js__WEBPACK_IMPORTED_MODULE_5__["listenScrollMessage"])(this, messages, channelActiveChat);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          conversations = _this$props.conversations,
          auth = _this$props.auth;
      var channelActiveChat = conversations.find(function (channel) {
        return channel.isActive;
      });
      var messages = channelActiveChat && channelActiveChat.message;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-list-message"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HeadInfo_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        conversations: conversations
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wrapper-list-message",
        id: "js-scroll-to-bottom"
      }, messages && messages.map(function (message, key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MessageChat_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: "message-chat" + key + channelActiveChat.id,
          auth: auth,
          message: message,
          channelActiveChat: channelActiveChat
        });
      })));
    }
  }]);

  return ListMessage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ListMessage);

/***/ }),

/***/ "./src/component/Chat/ListUser.jsx":
/*!*****************************************!*\
  !*** ./src/component/Chat/ListUser.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_chat_list_user_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scss/chat/list-user.scss */ "./src/scss/chat/list-user.scss");
/* harmony import */ var _scss_chat_list_user_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_chat_list_user_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UserChat_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserChat.jsx */ "./src/component/Chat/UserChat.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var ListUser = /*#__PURE__*/function (_Component) {
  _inherits(ListUser, _Component);

  var _super = _createSuper(ListUser);

  function ListUser() {
    _classCallCheck(this, ListUser);

    return _super.apply(this, arguments);
  }

  _createClass(ListUser, [{
    key: "render",
    value: function render() {
      /// userChat được pass từ cha vào
      var conversations = this.props.conversations;
      console.log(conversations);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-list-user"
      }, conversations && conversations.map(function (channel) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserChat_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: channel.id,
          channel: channel
        });
      }));
    }
  }]);

  return ListUser;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ListUser);

/***/ }),

/***/ "./src/component/Chat/MessageChat.jsx":
/*!********************************************!*\
  !*** ./src/component/Chat/MessageChat.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_chat_message_chat_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scss/chat/message-chat.scss */ "./src/scss/chat/message-chat.scss");
/* harmony import */ var _scss_chat_message_chat_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_chat_message_chat_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./src/config/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var MessageChat = /*#__PURE__*/function (_Component) {
  _inherits(MessageChat, _Component);

  var _super = _createSuper(MessageChat);

  function MessageChat() {
    _classCallCheck(this, MessageChat);

    return _super.apply(this, arguments);
  }

  _createClass(MessageChat, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          auth = _this$props.auth,
          message = _this$props.message,
          channelActiveChat = _this$props.channelActiveChat;
      var myinfo = {
        avatar: '',
        name: ''
      };

      if (auth && auth.id) {
        myinfo.avatar = auth.avatar;
        myinfo.name = auth.first_name + " " + auth.last_name;
      }

      if (!channelActiveChat) {
        return null;
      }

      var userInfo = channelActiveChat.user;

      if (!message.type) {
        var typeMessage = 'left-message ';
      } else {
        var typeMessage = 'right-message by-me ';
        userInfo = myinfo;
      }

      var style = message.style;
      var TIME_DIE_FILE = 24 * 60 * 60 * 1000;
      var time = new Date(message.createdAt);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-message-chat"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: typeMessage + "chat-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
        className: "avatar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _config__WEBPACK_IMPORTED_MODULE_2__["default"].SERVER_PHP.URL + userInfo.avatar,
        alt: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "message-content"
      }, style == "IMAGE" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: style
      }, message.attachment.map(function (attachElement, index) {
        if (attachElement.type == 'img') {
          if (attachElement.time && attachElement.time - TIME_DIE_FILE < new Date().getTime()) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: "wrapper-attachment" + index + attachElement.url,
              className: "wrapper-attachment"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              src: _config__WEBPACK_IMPORTED_MODULE_2__["default"].SERVER_PHP.URL + attachElement.url
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
              className: "download-file-attachment",
              href: _config__WEBPACK_IMPORTED_MODULE_2__["default"].SERVER_PHP.URL + attachElement.url,
              target: "_blank",
              download: true
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
              className: "hero-icon hero-cloud-download-outline"
            })));
          }
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: "wrapper-attachment" + index + _config__WEBPACK_IMPORTED_MODULE_2__["default"].SERVER_PHP.URL + "/image/folder.jpg",
          className: "wrapper-attachment"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: _config__WEBPACK_IMPORTED_MODULE_2__["default"].SERVER_PHP.URL + "/image/folder.jpg"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          className: "download-file-attachment",
          href: _config__WEBPACK_IMPORTED_MODULE_2__["default"].SERVER_PHP.URL + attachElement.url,
          target: "_blank",
          download: true
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "hero-icon hero-cloud-download-outline"
        })));
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: style + " text"
      }, message.content), message.createdAt ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: style + " time-label"
      }, time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate() + " " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "read"
      }, !message.type && (!message.readAdmin ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-check-circle-outline"
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-check-circle"
      }))))));
    }
  }]);

  return MessageChat;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MessageChat);

/***/ }),

/***/ "./src/component/Chat/Search.jsx":
/*!***************************************!*\
  !*** ./src/component/Chat/Search.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _scss_chat_search_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scss/chat/search.scss */ "./src/scss/chat/search.scss");
/* harmony import */ var _scss_chat_search_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_chat_search_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../action */ "./src/action/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var Search = /*#__PURE__*/function (_Component) {
  _inherits(Search, _Component);

  var _super = _createSuper(Search);

  function Search(props) {
    var _this2;

    _classCallCheck(this, Search);

    _this2 = _super.call(this, props);
    _this2.state = {
      hung: null
    };
    _this2.searchUser = _this2.searchUser.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(Search, [{
    key: "searchUser",
    value: function searchUser(e) {
      var _this = this,
          backupData = _toConsumableArray(this.props.conversationBackup),
          listName = [],
          text = e.target.value,
          output = text.split('');

      console.log(text, "texttexttexttexttexttext");

      if (!text || !text.trim()) {
        this.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_3__["setterConversation"])(this.props.conversationBackup));

        if (this.state.hung) {
          clearTimeout(this.state.hung);
        }
      } else if (backupData) {
        backupData.map(function (conv) {
          var obj = {
            sort: 0,
            id: conv.id,
            text: conv.user.first_name + " "
          };
          listName.push(obj);
        });
        output.map(function (item) {
          listName.map(function (search) {
            if (search.sort != -1 && search.text.toUpperCase().includes(item.toUpperCase())) {
              search.sort++;
            } else {
              search.sort = -1;
            }
          });
        });

        if (this.state.hung) {
          clearTimeout(this.state.hung);
        }

        _this.setState({
          hung: setTimeout(function () {
            listName.sort(function (a, b) {
              return a.sort > b.sort ? 1 : -1;
            });
            var lstIdSorted = listName.map(function (item) {
              return item.sort != -1 && item.sort ? item.id : 0;
            });

            _this.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_3__["filterSortConversation"])({
              ids: lstIdSorted,
              data: backupData
            }));
          }, 600)
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-search-user"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-account-search-outline"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "search-user",
        autoComplete: "off",
        onChange: this.searchUser,
        name: "search-user",
        placeholder: "\u5165\u529B\u3057\u3066\u8AB0\u304B\u3092\u898B\u3064\u3051\u308B"
      }));
    }
  }]);

  return Search;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    conversations: state.conversations,
    conversationBackup: state.conversationBackup,
    user: state.user
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Search));

/***/ }),

/***/ "./src/component/Chat/SideBarChat.jsx":
/*!********************************************!*\
  !*** ./src/component/Chat/SideBarChat.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ListUser_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListUser.jsx */ "./src/component/Chat/ListUser.jsx");
/* harmony import */ var _scss_chat_sidebar_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scss/chat/sidebar.scss */ "./src/scss/chat/sidebar.scss");
/* harmony import */ var _scss_chat_sidebar_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_chat_sidebar_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./src/config/index.js");
/* harmony import */ var _Search_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Search.jsx */ "./src/component/Chat/Search.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

 // import SearchUser from "./SearchUser.jsx"






var SideBarChat = /*#__PURE__*/function (_Component) {
  _inherits(SideBarChat, _Component);

  var _super = _createSuper(SideBarChat);

  function SideBarChat() {
    _classCallCheck(this, SideBarChat);

    return _super.apply(this, arguments);
  }

  _createClass(SideBarChat, [{
    key: "render",
    value: function render() {
      console.log("render sidebar");
      var infor = {
        avatar: '',
        name: ''
      };
      var _this$props = this.props,
          conversations = _this$props.conversations,
          auth = _this$props.auth;

      if (auth && auth.id) {
        infor.avatar = auth.avatar;
        infor.name = auth.first_name + " " + auth.last_name;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-sidebar-chat"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "myinfo"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "avatar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
        className: "state-avatar active-online"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _config__WEBPACK_IMPORTED_MODULE_3__["default"].SERVER_PHP.URL + infor.avatar,
        alt: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "name"
      }, infor.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "list-user"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Search_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null), conversations.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListUser_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        conversations: conversations
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, " \u691C\u7D22\u7D50\u679C\u306F\u3042\u308A\u307E\u305B\u3093 ")));
    }
  }]);

  return SideBarChat;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SideBarChat);

/***/ }),

/***/ "./src/component/Chat/UserChat.jsx":
/*!*****************************************!*\
  !*** ./src/component/Chat/UserChat.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./src/config/index.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../action */ "./src/action/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var UserChat = /*#__PURE__*/function (_Component) {
  _inherits(UserChat, _Component);

  var _super = _createSuper(UserChat);

  function UserChat() {
    var _temp, _this2;

    _classCallCheck(this, UserChat);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this2, (_temp = _this2 = _super.call.apply(_super, [this].concat(args)), _this2.changeActiveUser = function (_this, id) {
      _this.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_3__["changeChannelActive"])(id));
    }, _temp));
  }

  _createClass(UserChat, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      var channel = this.props.channel,
          classActiveOnline = channel.user.online ? ' active ' : '',
          classActiveMessage = channel.isActive ? ' active-message ' : '';

      var _channel$message$slic = channel.message.slice(-1),
          _channel$message$slic2 = _slicedToArray(_channel$message$slic, 1),
          lastItem = _channel$message$slic2[0];

      var munberNoneRead = channel.message.filter(function (message) {
        return !message.readAdmin;
      }).length;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-user-chat-sidebar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classActiveOnline + classActiveMessage + "user-chat",
        onClick: function onClick() {
          return _this3.changeActiveUser(_this3, channel.id);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
        className: "state-avatar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _config__WEBPACK_IMPORTED_MODULE_2__["default"].SERVER_PHP.URL + channel.user.avatar,
        alt: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "name"
      }, channel.user.first_name + " " + channel.user.last_name), lastItem && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "last-message"
      }, lastItem.content)), munberNoneRead ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "none-read-message"
      }, munberNoneRead) : null));
    }
  }]);

  return UserChat;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])()(UserChat));

/***/ }),

/***/ "./src/component/Chat/index.jsx":
/*!**************************************!*\
  !*** ./src/component/Chat/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SideBarChat_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideBarChat.jsx */ "./src/component/Chat/SideBarChat.jsx");
/* harmony import */ var _ListMessage_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListMessage.jsx */ "./src/component/Chat/ListMessage.jsx");
/* harmony import */ var _scss_chat_chat_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../scss/chat/chat.scss */ "./src/scss/chat/chat.scss");
/* harmony import */ var _scss_chat_chat_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_chat_chat_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./src/config/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../action */ "./src/action/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var Chat = /*#__PURE__*/function (_Component) {
  _inherits(Chat, _Component);

  var _super = _createSuper(Chat);

  function Chat() {
    _classCallCheck(this, Chat);

    return _super.apply(this, arguments);
  }

  _createClass(Chat, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      /// fetch data with channel, id of url 
      //// .... 
      var TOKEN_REFESH_DOM = document.getElementById("TOKEN_REFESH");
      console.log(this.props, "vào đây r ");

      if (TOKEN_REFESH_DOM && !this.props.conversations) {
        /// fetch token access by token refesh 
        var refresh = TOKEN_REFESH_DOM.getAttribute('data-refesh'),
            userId = TOKEN_REFESH_DOM.getAttribute('data-id'),
            channel = TOKEN_REFESH_DOM.getAttribute('data-channel'); ///////////////////////////////////////////////////////
        // var name = 'id'
        // var url = window.location.href;
        // name = name.replace(/[\[\]]/g, '\\$&');
        // var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        //     results = regex.exec(url)
        // if (!results) userId = null
        // else if (!results[2]) userId = ''
        // else userId = decodeURIComponent(results[2].replace(/\+/g, ' '))
        // var name = 'refresh'
        // var url = window.location.href;
        // name = name.replace(/[\[\]]/g, '\\$&');
        // var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        //     results = regex.exec(url)
        // if (!results) userId = null
        // else if (!results[2]) refresh = ''
        // else refresh = decodeURIComponent(results[2].replace(/\+/g, ' '))
        // var name = 'channel'
        // var url = window.location.href;
        // name = name.replace(/[\[\]]/g, '\\$&');
        // var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        //     results = regex.exec(url)
        // if (!results) userId = null
        // else if (!results[2]) channel = ''
        // else channel = decodeURIComponent(results[2].replace(/\+/g, ' '))
        ////////////////////////////////////////////////////

        if (userId && refresh) {
          var url = new URL(_config__WEBPACK_IMPORTED_MODULE_4__["default"].SERVER.ASSET() + '/api/admin/read-message'),
              params = {
            userId: userId,
            refresh: refresh,
            channel: channel
          };
          Object.keys(params).forEach(function (key) {
            return url.searchParams.append(key, params[key]);
          });
          fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(function (res) {
            return res.json();
          }).then(function (response) {
            if (response.code != 200) {
              throw new Error("token refesh không đúng");
            }

            _this.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_6__["setterUser"])(response.user));

            _this.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_6__["setterConversation"])(response.data));

            _this.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_6__["setterConversationBackup"])(response.data));
          })["catch"](function (error) {
            alert("エラーが発生しました。 後でもう一度やり直してください");
          });
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;

      var TOKEN_REFESH_DOM = document.getElementById("TOKEN_REFESH");

      if (TOKEN_REFESH_DOM) {
        var refresh = TOKEN_REFESH_DOM.getAttribute('data-refesh'); // var name = 'refresh'
        // var url = window.location.href;
        // name = name.replace(/[\[\]]/g, '\\$&');
        // var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        //     results = regex.exec(url)
        // if (!results) userId = null
        // else if (!results[2]) refresh = ''
        // else refresh = decodeURIComponent(results[2].replace(/\+/g, ' '))
      }

      if (this.props.conversations) {
        var conversations = this.props.conversations,
            channelActiveChat = conversations.find(function (channel) {
          return channel.isActive;
        }),
            messages = channelActiveChat && channelActiveChat.message;
        var existNoneRead = messages && messages.some(function (message) {
          return !message.readAdmin;
        });

        if (existNoneRead) {
          var params = {
            channel: channelActiveChat.id,
            refresh: refresh
          };
          fetch(_config__WEBPACK_IMPORTED_MODULE_4__["default"].SERVER.ASSET() + '/api/admin/reading', {
            method: 'PUT',
            body: JSON.stringify(params),
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(function (res) {
            return res.json();
          }).then(function (response) {
            console.log(response);

            if (response.code == 200) {
              _this2.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_6__["readAllCMessage"])());
            }
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      console.log("render Chat");
      var _this$props = this.props,
          conversations = _this$props.conversations,
          user = _this$props.user;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-chat"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bg-chat-temalate"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wrapper-page-chat"
      }, conversations && user ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SideBarChat_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        conversations: conversations,
        auth: user
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListMessage_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        conversations: conversations,
        auth: user
      })) : null)));
    }
  }]);

  return Chat;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    conversations: state.conversations,
    user: state.user
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps)(Chat));

/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var local = "153.126.149.63",
    local_ip = "153.126.149.63",
    local_port = 9999,
    peer_port = 7000;
/* harmony default export */ __webpack_exports__["default"] = ({
  SERVER: {
    PORT: local_port,
    DOMAIN: local,
    IP: local_ip,
    PEER_PORT: peer_port,
    PROTOCOL: function PROTOCOL() {
      if (local_port == 443) {
        return "https://";
      }

      return "http://";
    },
    ASSET: function ASSET() {
      var port_url = "";
      var protocol = "";

      if (local_port == 443) {
        protocol = "https://";
      } else {
        protocol = "http://";
        port_url = ":" + local_port;
      }

      return protocol + local + port_url;
    }
  },
  SERVER_PHP: {
    URL: "http://babysitter.trust-growth.co.jp"
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ "./node_modules/babel-polyfill/lib/index.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_app_polyfill_ie11__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-app-polyfill/ie11 */ "./node_modules/react-app-polyfill/ie11.js");
/* harmony import */ var react_app_polyfill_ie11__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_app_polyfill_ie11__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js */ "./node_modules/core-js/index.js");
/* harmony import */ var core_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_App_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/App.js */ "./src/component/App.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reducer */ "./src/reducer/index.js");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scss/index.scss */ "./src/scss/index.scss");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_9__);
// import 'core-js';

/* polyfills.js */










var store = Object(redux__WEBPACK_IMPORTED_MODULE_6__["createStore"])(_reducer__WEBPACK_IMPORTED_MODULE_8__["default"]);
store.subscribe(function () {
  console.log('có thay đổi trong Redux!!');
  console.log(store.getState());
});

if (typeof Storage !== 'undefined') {
  react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_component_App_js__WEBPACK_IMPORTED_MODULE_5__["default"], null)), document.getElementById("CHAT_ELEMENT"));
} else {
  alert("このブラウザでは、アプリケーションは正常に動作しません。 アップグレードしてください");
}

/***/ }),

/***/ "./src/library/service.js":
/*!********************************!*\
  !*** ./src/library/service.js ***!
  \********************************/
/*! exports provided: listenScrollMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenScrollMessage", function() { return listenScrollMessage; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
 /// config global variable

var socket = null,
    EVENT = CONFIG_EVENT; /// end setting variable

function listenScrollMessage(e, messages, channelActive) {
  if (!messages || !messages.length) {
    return false;
  }

  var domScroll = document.getElementById("js-scroll-to-bottom");
  console.log(domScroll.scrollHeight, domScroll.clientHeight + "listenScrollMessage");

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).scrollTop() + jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).innerHeight() >= jquery__WEBPACK_IMPORTED_MODULE_0___default()(e)[0].scrollHeight) {
    document.getElementById("js-is-write-message").classList.add("follow-conversation"); /// check message unread

    var existNoneRead = messages.some(function (message) {
      return !message.readAdmin && !message.type;
    });

    if (existNoneRead) {
      console.log(EVENT.READ_MESSAGE_ALL, "listenScrollMessage");
      var userLocal = JSON.parse(localStorage.getItem('user'));
      socket.emit(EVENT.READ_MESSAGE_ALL, {
        user: userLocal.id,
        channelId: channelActive.id,
        channelName: channelActive.channelName
      });
    }
  } else {
    document.getElementById("js-is-write-message").classList.remove("follow-conversation");
  }
}

/***/ }),

/***/ "./src/reducer/conversation-backup-search.js":
/*!***************************************************!*\
  !*** ./src/reducer/conversation-backup-search.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/type.js */ "./src/action/type.js");
// if(typeof userDefault == undefined){
//   var userDefault = '[]'
// }
var conversations = null;

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : conversations;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_type_js__WEBPACK_IMPORTED_MODULE_0__["default"].SETTER_CONVERSATION_BACKUP:
      return action.payload;

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducer/conversations.js":
/*!**************************************!*\
  !*** ./src/reducer/conversations.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/type.js */ "./src/action/type.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// if(typeof userDefault == undefined){
//   var userDefault = '[]'
// }
var conversations = null;

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : conversations;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_type_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHANNEL_SET_ACTIVE:
      return state.map(function (item) {
        if (item.id === action.payload) {
          return _objectSpread(_objectSpread({}, item), {}, {
            isActive: true
          });
        }

        return _objectSpread(_objectSpread({}, item), {}, {
          isActive: false
        });
      });

    case _action_type_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHANNEL_READ_MESSAGE:
      return state.map(function (channel) {
        if (channel.isActive === true) {
          var messages = channel.message;
          messages = messages.map(function (message) {
            return _objectSpread(_objectSpread({}, message), {}, {
              readAdmin: true
            });
          });
          return _objectSpread(_objectSpread({}, channel), {}, {
            message: messages
          });
        }

        return channel;
      });

    case _action_type_js__WEBPACK_IMPORTED_MODULE_0__["default"].SETTER_CONVERSATION:
      return action.payload;

    case _action_type_js__WEBPACK_IMPORTED_MODULE_0__["default"].FILTER_SORT_CONV:
      var _action$payload = action.payload,
          ids = _action$payload.ids,
          data = _action$payload.data;
      console.log(action.payload);
      var conv = [];
      ids.map(function (id, indexID) {
        if (id) {
          var channelSort = data.find(function (channel) {
            return channel.id == id;
          });

          if (channelSort) {
            channelSort.isActive = false;
            conv.push(channelSort);
          }
        }
      });

      if (conv[0]) {
        conv[0].isActive = true;
      }

      return conv;

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducer/index.js":
/*!******************************!*\
  !*** ./src/reducer/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _conversations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conversations.js */ "./src/reducer/conversations.js");
/* harmony import */ var _conversation_backup_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conversation-backup-search */ "./src/reducer/conversation-backup-search.js");
/* harmony import */ var _user_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.js */ "./src/reducer/user.js");
 ///thêm các reducer funtion cần được combine vào đây



 //// khởi tạo 1 biến biểu diễn REDUCER ALL 

var Reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  user: _user_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  conversations: _conversations_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  conversationBackup: _conversation_backup_search__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (Reducer);

/***/ }),

/***/ "./src/reducer/user.js":
/*!*****************************!*\
  !*** ./src/reducer/user.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/type.js */ "./src/action/type.js");
var user = null;

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : user;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_type_js__WEBPACK_IMPORTED_MODULE_0__["default"].SETTER_USER:
      return action.payload;

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/scss/chat/chat.scss":
/*!*********************************!*\
  !*** ./src/scss/chat/chat.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ref--6-2!./chat.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/chat/chat.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/scss/chat/head-info.scss":
/*!**************************************!*\
  !*** ./src/scss/chat/head-info.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ref--6-2!./head-info.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/chat/head-info.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/scss/chat/list-message.scss":
/*!*****************************************!*\
  !*** ./src/scss/chat/list-message.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ref--6-2!./list-message.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/chat/list-message.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/scss/chat/list-user.scss":
/*!**************************************!*\
  !*** ./src/scss/chat/list-user.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ref--6-2!./list-user.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/chat/list-user.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/scss/chat/message-chat.scss":
/*!*****************************************!*\
  !*** ./src/scss/chat/message-chat.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ref--6-2!./message-chat.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/chat/message-chat.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/scss/chat/search.scss":
/*!***********************************!*\
  !*** ./src/scss/chat/search.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ref--6-2!./search.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/chat/search.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/scss/chat/sidebar.scss":
/*!************************************!*\
  !*** ./src/scss/chat/sidebar.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ref--6-2!./sidebar.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/chat/sidebar.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ref--6-2!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9jaGF0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9oZWFkLWluZm8uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jaGF0L2xpc3QtbWVzc2FnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2NoYXQvbGlzdC11c2VyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9tZXNzYWdlLWNoYXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jaGF0L3NlYXJjaC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2NoYXQvc2lkZWJhci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9uL3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0L0hlYWRJbmZvLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoYXQvTGlzdE1lc3NhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvQ2hhdC9MaXN0VXNlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0L01lc3NhZ2VDaGF0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoYXQvU2VhcmNoLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoYXQvU2lkZUJhckNoYXQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvQ2hhdC9Vc2VyQ2hhdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicmFyeS9zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2VyL2NvbnZlcnNhdGlvbi1iYWNrdXAtc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2VyL2NvbnZlcnNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jaGF0L2NoYXQuc2Nzcz9hYzUxIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2NoYXQvaGVhZC1pbmZvLnNjc3M/ODMxOSIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jaGF0L2xpc3QtbWVzc2FnZS5zY3NzPzY4YTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9saXN0LXVzZXIuc2Nzcz9iNWQ3Iiwid2VicGFjazovLy8uL3NyYy9zY3NzL2NoYXQvbWVzc2FnZS1jaGF0LnNjc3M/N2NmZCIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jaGF0L3NlYXJjaC5zY3NzP2ZiNDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9zaWRlYmFyLnNjc3M/MmE5MyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9pbmRleC5zY3NzPzg3NjYiXSwibmFtZXMiOlsic2V0dGVyVXNlciIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsIlRZUEUiLCJTRVRURVJfVVNFUiIsInBheWxvYWQiLCJmZXRjaGVkIiwic2V0dGVyQ29udmVyc2F0aW9uIiwiY29udiIsIlNFVFRFUl9DT05WRVJTQVRJT04iLCJzZXR0ZXJDb252ZXJzYXRpb25CYWNrdXAiLCJTRVRURVJfQ09OVkVSU0FUSU9OX0JBQ0tVUCIsImNoYW5nZUNoYW5uZWxBY3RpdmUiLCJpZCIsIkNIQU5ORUxfU0VUX0FDVElWRSIsInJlYWRBbGxDTWVzc2FnZSIsIkNIQU5ORUxfUkVBRF9NRVNTQUdFIiwiZmlsdGVyU29ydENvbnZlcnNhdGlvbiIsIm9iamVjdElkc0FuZERhdGFCYWNrdXAiLCJGSUxURVJfU09SVF9DT05WIiwiQXBwIiwiQ29tcG9uZW50IiwiSGVhZEluZm8iLCJjb252ZXJzYXRpb25zIiwicHJvcHMiLCJjaGFubmVsQWN0aXZlIiwiZmluZCIsImNoYW5uZWwiLCJpc0FjdGl2ZSIsIkNPTkZJRyIsIlNFUlZFUl9QSFAiLCJVUkwiLCJhdmF0YXIiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiTGlzdE1lc3NhZ2UiLCJjaGFubmVsQWN0aXZlQ2hhdCIsIm1lc3NhZ2VzIiwibWVzc2FnZSIsImxzdE1lc3NhZ2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiJCIsIm9uIiwibGlzdGVuU2Nyb2xsTWVzc2FnZSIsImF1dGgiLCJtYXAiLCJrZXkiLCJMaXN0VXNlciIsIk1lc3NhZ2VDaGF0IiwibXlpbmZvIiwibmFtZSIsInVzZXJJbmZvIiwidHlwZU1lc3NhZ2UiLCJzdHlsZSIsIlRJTUVfRElFX0ZJTEUiLCJ0aW1lIiwiRGF0ZSIsImNyZWF0ZWRBdCIsImF0dGFjaG1lbnQiLCJhdHRhY2hFbGVtZW50IiwiaW5kZXgiLCJnZXRUaW1lIiwidXJsIiwiY29udGVudCIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsInJlYWRBZG1pbiIsIlNlYXJjaCIsInN0YXRlIiwiaHVuZyIsInNlYXJjaFVzZXIiLCJiaW5kIiwiZSIsIl90aGlzIiwiYmFja3VwRGF0YSIsImNvbnZlcnNhdGlvbkJhY2t1cCIsImxpc3ROYW1lIiwidGV4dCIsInRhcmdldCIsInZhbHVlIiwib3V0cHV0Iiwic3BsaXQiLCJ0cmltIiwiZGlzcGF0Y2giLCJjbGVhclRpbWVvdXQiLCJvYmoiLCJzb3J0IiwicHVzaCIsIml0ZW0iLCJzZWFyY2giLCJ0b1VwcGVyQ2FzZSIsImluY2x1ZGVzIiwic2V0U3RhdGUiLCJzZXRUaW1lb3V0IiwiYSIsImIiLCJsc3RJZFNvcnRlZCIsImlkcyIsImRhdGEiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjb25uZWN0IiwiU2lkZUJhckNoYXQiLCJpbmZvciIsImxlbmd0aCIsIlVzZXJDaGF0IiwiY2hhbmdlQWN0aXZlVXNlciIsImNsYXNzQWN0aXZlT25saW5lIiwib25saW5lIiwiY2xhc3NBY3RpdmVNZXNzYWdlIiwic2xpY2UiLCJsYXN0SXRlbSIsIm11bmJlck5vbmVSZWFkIiwiZmlsdGVyIiwiQ2hhdCIsIlRPS0VOX1JFRkVTSF9ET00iLCJyZWZyZXNoIiwiZ2V0QXR0cmlidXRlIiwidXNlcklkIiwiU0VSVkVSIiwiQVNTRVQiLCJwYXJhbXMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInNlYXJjaFBhcmFtcyIsImFwcGVuZCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzcG9uc2UiLCJjb2RlIiwiRXJyb3IiLCJlcnJvciIsImFsZXJ0IiwiZXhpc3ROb25lUmVhZCIsInNvbWUiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImxvY2FsIiwibG9jYWxfaXAiLCJsb2NhbF9wb3J0IiwicGVlcl9wb3J0IiwiUE9SVCIsIkRPTUFJTiIsIklQIiwiUEVFUl9QT1JUIiwiUFJPVE9DT0wiLCJwb3J0X3VybCIsInByb3RvY29sIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlJlZHVjZXIiLCJzdWJzY3JpYmUiLCJnZXRTdGF0ZSIsIlN0b3JhZ2UiLCJSZWFjdERPTSIsInJlbmRlciIsInNvY2tldCIsIkVWRU5UIiwiQ09ORklHX0VWRU5UIiwiZG9tU2Nyb2xsIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsVG9wIiwiaW5uZXJIZWlnaHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJSRUFEX01FU1NBR0VfQUxMIiwidXNlckxvY2FsIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZW1pdCIsImNoYW5uZWxJZCIsImNoYW5uZWxOYW1lIiwicmVtb3ZlIiwiYWN0aW9uIiwiaW5kZXhJRCIsImNoYW5uZWxTb3J0IiwiY29tYmluZVJlZHVjZXJzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFB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QixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQzs7Ozs7Ozs7Ozs7QUNsQkEsVUFBVSxtQkFBTyxDQUFDLHlKQUE4RTtBQUNoRywwQkFBMEIsbUJBQU8sQ0FBQyw0T0FBeUg7O0FBRTNKOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7OztBQ2xCQSxVQUFVLG1CQUFPLENBQUMseUpBQThFO0FBQ2hHLDBCQUEwQixtQkFBTyxDQUFDLGtQQUE0SDs7QUFFOUo7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0M7Ozs7Ozs7Ozs7O0FDbEJBLFVBQVUsbUJBQU8sQ0FBQyx5SkFBOEU7QUFDaEcsMEJBQTBCLG1CQUFPLENBQUMsc09BQXNIOztBQUV4Sjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQzs7Ozs7Ozs7Ozs7QUNsQkEsVUFBVSxtQkFBTyxDQUFDLHlKQUE4RTtBQUNoRywwQkFBMEIsbUJBQU8sQ0FBQyx3T0FBdUg7O0FBRXpKOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7OztBQ2xCQSxVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLHlOQUErRzs7QUFFako7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0MiLCJmaWxlIjoianMvaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXguanNcIixcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR3JlYXQgVmliZXNcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0dyZWF0X1ZpYmVzL0dyZWF0VmliZXMtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk11bGlcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L011bGkvTXVsaS1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkFyY2hpdm8tTWVkaXVtXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9BcmNoaXZvL0FyY2hpdm8tTWVkaXVtLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmVuY2hOaW5lLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0JlbmNoTmluZS9CZW5jaE5pbmUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNhd2FyYWJpLU1pbmNoby1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9TYXdhcmFiaV9NaW5jaG8vU2F3YXJhYmlNaW5jaG8tUmVndWxhci50dGZcXFwiKTtcXG59XFxuLmJnLWNoYXQtdGVtYWxhdGUge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG59XFxuXFxuLndyYXBwZXItcGFnZS1jaGF0IHtcXG4gIG1heC13aWR0aDogMTEwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xcbn1cXG4ud3JhcHBlci1wYWdlLWNoYXQ6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMDtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR3JlYXQgVmliZXNcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0dyZWF0X1ZpYmVzL0dyZWF0VmliZXMtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk11bGlcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L011bGkvTXVsaS1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkFyY2hpdm8tTWVkaXVtXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9BcmNoaXZvL0FyY2hpdm8tTWVkaXVtLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmVuY2hOaW5lLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0JlbmNoTmluZS9CZW5jaE5pbmUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNhd2FyYWJpLU1pbmNoby1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9TYXdhcmFiaV9NaW5jaG8vU2F3YXJhYmlNaW5jaG8tUmVndWxhci50dGZcXFwiKTtcXG59XFxuLmNvbXBvbmVudC1oZWFkLWluZm8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2Nzg0YjtcXG59XFxuLmNvbXBvbmVudC1oZWFkLWluZm8gLnVzZXItYWN0aXZlLWNoYXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xcbiAgbWluLWhlaWdodDogNzVweDtcXG59XFxuLmNvbXBvbmVudC1oZWFkLWluZm8gLnVzZXItYWN0aXZlLWNoYXQgLnN0YXRlLWF2YXRhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbWluLXdpZHRoOiA1MHB4O1xcbiAgbWluLWhlaWdodDogNTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyAudXNlci1hY3RpdmUtY2hhdCAuc3RhdGUtYXZhdGFyIGltZyB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIG1pbi13aWR0aDogNTBweDtcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxufVxcbi5jb21wb25lbnQtaGVhZC1pbmZvIC51c2VyLWFjdGl2ZS1jaGF0IC50ZXh0LWluZm8ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiA3cHggN3B4IDdweCA1NXB4O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5jb21wb25lbnQtaGVhZC1pbmZvIC51c2VyLWFjdGl2ZS1jaGF0IC50ZXh0LWluZm8gLm5hbWUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyAudXNlci1hY3RpdmUtY2hhdCAudGV4dC1pbmZvIC50aW1lLW9ubGluZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjNmM3NTdkO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuLmNvbXBvbmVudC1oZWFkLWluZm8gLnVzZXItYWN0aXZlLWNoYXQgLnRleHQtaW5mbyAudGltZS1vbmxpbmUuYWN0aXZlLW5vdyB7XFxuICBjb2xvcjogIzhiYzM0YTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR3JlYXQgVmliZXNcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0dyZWF0X1ZpYmVzL0dyZWF0VmliZXMtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk11bGlcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L011bGkvTXVsaS1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkFyY2hpdm8tTWVkaXVtXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9BcmNoaXZvL0FyY2hpdm8tTWVkaXVtLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmVuY2hOaW5lLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0JlbmNoTmluZS9CZW5jaE5pbmUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNhd2FyYWJpLU1pbmNoby1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9TYXdhcmFiaV9NaW5jaG8vU2F3YXJhYmlNaW5jaG8tUmVndWxhci50dGZcXFwiKTtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2Uge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB3aWR0aDogNzAlO1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTllY2VmO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgc2Nyb2xsYmFyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMykgI0Y1RjVGNTtcXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbiAhaW1wb3J0YW50O1xcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMDtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTo6LW1vei1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTo6LW1vei1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6Oi1vLXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOjotby1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1vLWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOjotbXMtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6Oi1tcy1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1tcy1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcblxcbi50aWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtaW4td2lkdGg6IDMwcHg7XFxufVxcbi50aWNvbnRhaW5lciAudGlibG9jayB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTdweDtcXG59XFxuLnRpY29udGFpbmVyIC50aWJsb2NrIC50aWRvdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRiNWJkO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IG1lcmN1cnlUeXBpbmdBbmltYXRpb24gMS41cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcXG4gIGFuaW1hdGlvbjogbWVyY3VyeVR5cGluZ0FuaW1hdGlvbiAxLjVzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiA2cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcXG4gIHdpZHRoOiA2cHg7XFxufVxcbi50aWNvbnRhaW5lciAudGlibG9jayAudGlkb3Q6bnRoLWNoaWxkKDEpIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxNTBtcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMjAwbXM7XFxufVxcbi50aWNvbnRhaW5lciAudGlibG9jayAudGlkb3Q6bnRoLWNoaWxkKDIpIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzMDBtcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMzAwbXM7XFxufVxcbi50aWNvbnRhaW5lciAudGlibG9jayAudGlkb3Q6bnRoLWNoaWxkKDMpIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA0NTBtcztcXG4gIGFuaW1hdGlvbi1kZWxheTogNDAwbXM7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBtZXJjdXJ5VHlwaW5nQW5pbWF0aW9uIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gIH1cXG4gIDI4JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcbiAgfVxcbiAgNDQlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcbiAgLmNvbXBvbmVudC1saXN0LW1lc3NhZ2Uge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuY29tcG9uZW50LWxpc3QtbWVzc2FnZSB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA3NXB4KTtcXG4gIH1cXG4gIC5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZSB7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICB9XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkdyZWF0IFZpYmVzXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9HcmVhdF9WaWJlcy9HcmVhdFZpYmVzLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNdWxpXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9NdWxpL011bGktVmFyaWFibGVGb250X3dnaHQudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmNoaXZvLU1lZGl1bVxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvQXJjaGl2by9BcmNoaXZvLU1lZGl1bS50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJlbmNoTmluZS1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9CZW5jaE5pbmUvQmVuY2hOaW5lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTYXdhcmFiaS1NaW5jaG8tUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvU2F3YXJhYmlfTWluY2hvL1Nhd2FyYWJpTWluY2hvLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZmZjNztcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAubm9uZS1yZWFkLW1lc3NhZ2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwYWRkaW5nOiAzcHggNnB4O1xcbiAgYm90dG9tOiAzMCU7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XFxuICBjb2xvcjogI2U5ZWNlZjtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IHtcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0LmFjdGl2ZS1tZXNzYWdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjc4NGI7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdC5hY3RpdmUtbWVzc2FnZSAudGV4dC1pbmZvIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQuYWN0aXZlIC5zdGF0ZS1hdmF0YXIge1xcbiAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQuYWN0aXZlIC5zdGF0ZS1hdmF0YXI6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC5zdGF0ZS1hdmF0YXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIG1pbi13aWR0aDogNTBweDtcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC5zdGF0ZS1hdmF0YXI6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogNXB4O1xcbiAgei1pbmRleDogNTtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZGI1YmQ7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC5zdGF0ZS1hdmF0YXIgaW1nIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbWluLXdpZHRoOiA1MHB4O1xcbiAgbWluLWhlaWdodDogNTBweDtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC50ZXh0LWluZm8ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAwIDAgMCA1NXB4O1xcbiAgY29sb3I6ICM0YjUxNWQ7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdCAudGV4dC1pbmZvIC5uYW1lIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC50ZXh0LWluZm8gLmxhc3QtbWVzc2FnZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdC5hY3RpdmUtbWVzc2FnZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZGI1YmQ7XFxuICB9XFxuICAuY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQgLnRleHQtaW5mbyB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB9XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkdyZWF0IFZpYmVzXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9HcmVhdF9WaWJlcy9HcmVhdFZpYmVzLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNdWxpXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9NdWxpL011bGktVmFyaWFibGVGb250X3dnaHQudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmNoaXZvLU1lZGl1bVxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvQXJjaGl2by9BcmNoaXZvLU1lZGl1bS50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJlbmNoTmluZS1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9CZW5jaE5pbmUvQmVuY2hOaW5lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTYXdhcmFiaS1NaW5jaG8tUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvU2F3YXJhYmlfTWluY2hvL1Nhd2FyYWJpTWluY2hvLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbi5sZWZ0LW1lc3NhZ2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZy1yaWdodDogMjVweDtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbn1cXG4ubGVmdC1tZXNzYWdlIC5yZWFkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiA1cHg7XFxufVxcblxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IHtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0OmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDA7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0LnR5cGluZy1jaGF0LW1lc3NzYWdlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwYWRkaW5nLXRvcDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2FkYjViZDtcXG4gIGxlZnQ6IDUwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdC50eXBpbmctY2hhdC1tZXNzc2FnZS5zaG93IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdC50eXBpbmctY2hhdC1tZXNzc2FnZSAudHlwaW5nLW1lc3NhZ2UgLnRleHQge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBwYWRkaW5nOiAycHggMTBweCAhaW1wb3J0YW50O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cDphZnRlciB7XFxuICBjbGVhcjogYm90aDtcXG4gIGNvbnRlbnQ6IFxcXCIuXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAwO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cC5ieS1tZSAuYXZhdGFyIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAuYnktbWUgLm1lc3NhZ2UtY29udGVudCB7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwLmJ5LW1lIC5tZXNzYWdlLWNvbnRlbnQgLnRleHQge1xcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDAgMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmZmYzc7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwLmJ5LW1lIC5FTU9KSSB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLmF2YXRhciB7XFxuICB3aWR0aDogNTBweDtcXG4gIG1pbi13aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLmF2YXRhciBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAubWVzc2FnZS1jb250ZW50LnR5cGluZy1tZXNzYWdlIHtcXG4gIHBhZGRpbmctbGVmdDogMHB4O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAubWVzc2FnZS1jb250ZW50IC5JTUFHRSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQgLklNQUdFIC53cmFwcGVyLWF0dGFjaG1lbnQge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWF4LXdpZHRoOiAyMDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudCAuSU1BR0UgLndyYXBwZXItYXR0YWNobWVudCBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQgLklNQUdFIC53cmFwcGVyLWF0dGFjaG1lbnQgLmRvd25sb2FkLWZpbGUtYXR0YWNobWVudCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUlO1xcbiAgcmlnaHQ6IDUlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTJlNjtcXG4gIGNvbG9yOiAjMGQ0N2ExO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcGFkZGluZzogM3B4IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMGQ0N2ExO1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAubWVzc2FnZS1jb250ZW50IC5JTUFHRSAud3JhcHBlci1hdHRhY2htZW50IC5kb3dubG9hZC1maWxlLWF0dGFjaG1lbnQgaSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQgLkVNT0pJIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQgLnRleHQge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMCAxNXB4IDE1cHggMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkY2U5ZTk7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQgLnRleHQuRU1PSkkge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudCAudGltZS1sYWJlbCB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLnR5cGluZy1tZXNzYWdlIC50ZXh0IHtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLnR5cGluZy1tZXNzYWdlIC50eXBpbmctdGV4dCB7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkdyZWF0IFZpYmVzXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9HcmVhdF9WaWJlcy9HcmVhdFZpYmVzLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNdWxpXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9NdWxpL011bGktVmFyaWFibGVGb250X3dnaHQudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmNoaXZvLU1lZGl1bVxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvQXJjaGl2by9BcmNoaXZvLU1lZGl1bS50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJlbmNoTmluZS1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9CZW5jaE5pbmUvQmVuY2hOaW5lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTYXdhcmFiaS1NaW5jaG8tUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvU2F3YXJhYmlfTWluY2hvL1Nhd2FyYWJpTWluY2hvLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbi5jb21wb25lbnQtc2VhcmNoLXVzZXIge1xcbiAgcGFkZGluZzogMCAwIDVweCA1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5jb21wb25lbnQtc2VhcmNoLXVzZXIgLnNlYXJjaC11c2VyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNmM3NTdkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA4cHggOHB4IDhweCAzMHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6ICM2Yzc1N2Q7XFxuICBmb250LXN0eWxlOiBcXFwiQXJjaGl2by1NZWRpdW1cXFwiO1xcbn1cXG4uY29tcG9uZW50LXNlYXJjaC11c2VyIC5zZWFyY2gtdXNlcjpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICMwZDQ3YTE7XFxuICBjb2xvcjogIzBkNDdhMTtcXG59XFxuLmNvbXBvbmVudC1zZWFyY2gtdXNlciAuc2VhcmNoLXVzZXI6Zm9jdXMgfiAuaGVyby1pY29uIHtcXG4gIGNvbG9yOiAjMGQ0N2ExO1xcbn1cXG4uY29tcG9uZW50LXNlYXJjaC11c2VyIC5oZXJvLWljb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMTBweDtcXG4gIGJvdHRvbTogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGNvbG9yOiAjNmM3NTdkO1xcbiAgcmlnaHQ6IDEwcHg7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuY29tcG9uZW50LXNlYXJjaC11c2VyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR3JlYXQgVmliZXNcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0dyZWF0X1ZpYmVzL0dyZWF0VmliZXMtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk11bGlcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L011bGkvTXVsaS1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkFyY2hpdm8tTWVkaXVtXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9BcmNoaXZvL0FyY2hpdm8tTWVkaXVtLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmVuY2hOaW5lLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0JlbmNoTmluZS9CZW5jaE5pbmUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNhd2FyYWJpLU1pbmNoby1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9TYXdhcmFiaV9NaW5jaG8vU2F3YXJhYmlNaW5jaG8tUmVndWxhci50dGZcXFwiKTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQge1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB3aWR0aDogMzAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcXG4gIHNjcm9sbGJhci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpICNGNUY1RjU7XFxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW4gIWltcG9ydGFudDtcXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdDo6LW1vei1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0OjotbW96LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0Ojotby1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0Ojotby1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1vLWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQ6Oi1tcy1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0OjotbXMtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtbXMtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdCAqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5teWluZm8ge1xcbiAgcGFkZGluZzogMTBweCA1cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XFxuICBtaW4taGVpZ2h0OiA3NXB4O1xcbn1cXG4ubXlpbmZvIC5hdmF0YXIgLnN0YXRlLWF2YXRhciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuLm15aW5mbyAuYXZhdGFyIC5zdGF0ZS1hdmF0YXI6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxcHg7XFxuICBsZWZ0OiAxcHg7XFxuICByaWdodDogMXB4O1xcbiAgYm90dG9tOiAxcHg7XFxufVxcbi5teWluZm8gLmF2YXRhciAuc3RhdGUtYXZhdGFyLmFjdGl2ZS1vbmxpbmUge1xcbiAgYm9yZGVyOiAycHggZG91YmxlICMwMGM4NTE7XFxufVxcbi5teWluZm8gLmF2YXRhciAuc3RhdGUtYXZhdGFyIGltZyB7XFxuICBtYXgtd2lkdGg6IDQwcHg7XFxuICBtYXgtaGVpZ2h0OiA0MHB4O1xcbn1cXG4ubXlpbmZvIC5hdmF0YXIgLm5hbWUge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIG1heC13aWR0aDogMjdjaDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY29sb3I6ICMwZDQ3YTE7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcXG4gIC5jb21wb25lbnQtc2lkZWJhci1jaGF0IHtcXG4gICAgd2lkdGg6IDQwJTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQge1xcbiAgICB3aWR0aDogNzVweDtcXG4gIH1cXG4gIC5jb21wb25lbnQtc2lkZWJhci1jaGF0IC51c2VyLWNoYXQgLnN0YXRlLWF2YXRhciB7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSAhaW1wb3J0YW50O1xcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpICFpbXBvcnRhbnQ7XFxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpICFpbXBvcnRhbnQ7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLm15aW5mbyB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuICAubXlpbmZvIC5hdmF0YXIgLnN0YXRlLWF2YXRhciBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDM1cHg7XFxuICAgIG1heC1oZWlnaHQ6IDM1cHg7XFxuICB9XFxuICAubXlpbmZvIC5hdmF0YXIgLm5hbWUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHcmVhdCBWaWJlc1xcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvR3JlYXRfVmliZXMvR3JlYXRWaWJlcy1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXVsaVxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvTXVsaS9NdWxpLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXJjaGl2by1NZWRpdW1cXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0FyY2hpdm8vQXJjaGl2by1NZWRpdW0udHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCZW5jaE5pbmUtUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvQmVuY2hOaW5lL0JlbmNoTmluZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2F3YXJhYmktTWluY2hvLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L1Nhd2FyYWJpX01pbmNoby9TYXdhcmFiaU1pbmNoby1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG4vKipcXG4qIGRpc3BsYXlcXG4qL1xcbiosXFxuOmFmdGVyLFxcbjpiZWZvcmUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOmZvY3VzIHtcXG4gIG91dGxpbmU6IDAgIWltcG9ydGFudDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZC1ub25lIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmQtaW5saW5lLWJsb2NrIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZC1ibG9jayB7XFxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZC10YWJsZSB7XFxuICBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZC10YWJsZS1yb3cge1xcbiAgZGlzcGxheTogdGFibGUtcm93ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kLXRhYmxlLWNlbGwge1xcbiAgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZC1mbGV4IHtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94ICFpbXBvcnRhbnQ7XFxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kLWlubGluZS1mbGV4IHtcXG4gIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveCAhaW1wb3J0YW50O1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcXG59XFxuXFxuLml0YWxpYyB7XFxuICBmb250LXN0eWxlOiBpdGFsaWMgIWltcG9ydGFudDtcXG59XFxuXFxuLm5vdC1pdGFsaWMge1xcbiAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XFxufVxcblxcbi51cHBlcmNhc2Uge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubG93ZXJjYXNlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcXG59XFxuXFxuLmNhcGl0YWxpemUge1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcXG59XFxuXFxuLm5vcm1hbC1jYXNlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi51bmRlcmxpbmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmxpbmUtdGhyb3VnaCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubm8tdW5kZXJsaW5lIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmZvbnQtaGFpcmxpbmUge1xcbiAgZm9udC13ZWlnaHQ6IDEwMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZm9udC10aGluIHtcXG4gIGZvbnQtd2VpZ2h0OiAyMDAgIWltcG9ydGFudDtcXG59XFxuXFxuLmZvbnQtbGlnaHQge1xcbiAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZm9udC1ub3JtYWwge1xcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZm9udC1tZWRpdW0ge1xcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZm9udC1zZW1pYm9sZCB7XFxuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mb250LWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZm9udC1leHRyYWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZm9udC1ibGFjayB7XFxuICBmb250LXdlaWdodDogOTAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50ZXh0LXJpZ2h0IHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4udGV4dC1sZWZ0IHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi52ZXJ0aWNhbC1hbGlnbi1taWRkbGUge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLm1nLWF1dG8ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5yb3VuZGVkLWNpcmNsZSB7XFxuICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcXG59XFxuXFxuLmJvcmRlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ib3JkZXItdG9wIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ib3JkZXItcmlnaHQge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RlZTJlNiAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYm9yZGVyLWJvdHRvbSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNiAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYm9yZGVyLWxlZnQge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGVlMmU2ICFpbXBvcnRhbnQ7XFxufVxcblxcbi50ZXh0LWNvbG9yLXJlZCB7XFxuICBjb2xvcjogI2Y0NDMzNjtcXG59XFxuXFxuLnRleHQtY29sb3ItcGluayB7XFxuICBjb2xvcjogI2U5MWU2MztcXG59XFxuXFxuLnRleHQtY29sb3ItcHVycGxlIHtcXG4gIGNvbG9yOiAjOWMyN2IwO1xcbn1cXG5cXG4udGV4dC1jb2xvci1kZWVwLXB1cnBsZSB7XFxuICBjb2xvcjogIzY3M2FiNztcXG59XFxuXFxuLnRleHQtY29sb3ItaW5kaWdvIHtcXG4gIGNvbG9yOiAjM2Y1MWI1O1xcbn1cXG5cXG4udGV4dC1jb2xvci1ibHVlIHtcXG4gIGNvbG9yOiAjMjE5NmYzO1xcbn1cXG5cXG4udGV4dC1jb2xvci1saWdodC1ibHVlIHtcXG4gIGNvbG9yOiAjMDNhOWY0O1xcbn1cXG5cXG4udGV4dC1jb2xvci1jeWFuIHtcXG4gIGNvbG9yOiAjMDBiY2Q0O1xcbn1cXG5cXG4udGV4dC1jb2xvci10ZWFsIHtcXG4gIGNvbG9yOiAjMDA5Njg4O1xcbn1cXG5cXG4udGV4dC1jb2xvci1ncmVlbiB7XFxuICBjb2xvcjogIzRjYWY1MDtcXG59XFxuXFxuLnRleHQtY29sb3ItbGlnaHQtZ3JlZW4ge1xcbiAgY29sb3I6ICM4YmMzNGE7XFxufVxcblxcbi50ZXh0LWNvbG9yLWxpbWUge1xcbiAgY29sb3I6ICNjZGRjMzk7XFxufVxcblxcbi50ZXh0LWNvbG9yLXllbGxvdyB7XFxuICBjb2xvcjogI2ZmZWIzYjtcXG59XFxuXFxuLnRleHQtY29sb3ItYW1iZXIge1xcbiAgY29sb3I6ICNmZmMxMDc7XFxufVxcblxcbi50ZXh0LWNvbG9yLW9yYW5nZSB7XFxuICBjb2xvcjogI2ZmOTgwMDtcXG59XFxuXFxuLnRleHQtY29sb3ItZGVlcC1vcmFuZ2Uge1xcbiAgY29sb3I6ICNmZjU3MjI7XFxufVxcblxcbi50ZXh0LWNvbG9yLWJyb3duIHtcXG4gIGNvbG9yOiAjNzk1NTQ4O1xcbn1cXG5cXG4udGV4dC1jb2xvci1ibGFjayB7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLnRleHQtY29sb3Itd2hpdGUge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi50ZXh0LWNvbG9yLWdyZXkge1xcbiAgY29sb3I6ICM5ZTllOWU7XFxufVxcblxcbi50ZXh0LWNvbG9yLWJsdWUtZ3JleSB7XFxuICBjb2xvcjogIzYwN2Q4YjtcXG59XFxuXFxuLnRleHQtY29sb3ItcHJpbWFyeS1jb2xvci1kYXJrIHtcXG4gIGNvbG9yOiAjMGQ0N2ExO1xcbn1cXG5cXG4udGV4dC1jb2xvci1zZWNvbmRhcnktY29sb3Ige1xcbiAgY29sb3I6ICNhYTY2Y2M7XFxufVxcblxcbi50ZXh0LWNvbG9yLXNlY29uZGFyeS1jb2xvci1kYXJrIHtcXG4gIGNvbG9yOiAjOTkzM2NjO1xcbn1cXG5cXG4udGV4dC1jb2xvci1kZWZhdWx0LWNvbG9yIHtcXG4gIGNvbG9yOiAjMmJiYmFkO1xcbn1cXG5cXG4udGV4dC1jb2xvci1kZWZhdWx0LWNvbG9yLWRhcmsge1xcbiAgY29sb3I6ICMwMDY5NWM7XFxufVxcblxcbi50ZXh0LWNvbG9yLWluZm8tY29sb3Ige1xcbiAgY29sb3I6ICMzM2I1ZTU7XFxufVxcblxcbi50ZXh0LWNvbG9yLWluZm8tY29sb3ItZGFyayB7XFxuICBjb2xvcjogIzAwOTljYztcXG59XFxuXFxuLnRleHQtY29sb3Itc3VjY2Vzcy1jb2xvciB7XFxuICBjb2xvcjogIzAwYzg1MTtcXG59XFxuXFxuLnRleHQtY29sb3Itc3VjY2Vzcy1jb2xvci1kYXJrIHtcXG4gIGNvbG9yOiAjMDA3ZTMzO1xcbn1cXG5cXG4udGV4dC1jb2xvci13YXJuaW5nLWNvbG9yIHtcXG4gIGNvbG9yOiAjZmZiYjMzO1xcbn1cXG5cXG4udGV4dC1jb2xvci13YXJuaW5nLWNvbG9yLWRhcmsge1xcbiAgY29sb3I6ICNmZjg4MDA7XFxufVxcblxcbi50ZXh0LWNvbG9yLWRhbmdlci1jb2xvciB7XFxuICBjb2xvcjogI2ZmMzU0NztcXG59XFxuXFxuLnRleHQtY29sb3ItZGFuZ2VyLWNvbG9yLWRhcmsge1xcbiAgY29sb3I6ICNjYzAwMDA7XFxufVxcblxcbi50ZXh0LWNvbG9yLWVsZWdhbnQtY29sb3Ige1xcbiAgY29sb3I6ICMyZTJlMmU7XFxufVxcblxcbi50ZXh0LWNvbG9yLWVsZWdhbnQtY29sb3ItZGFyayB7XFxuICBjb2xvcjogIzIxMjEyMTtcXG59XFxuXFxuLnRleHQtY29sb3Itc3R5bGlzaC1jb2xvciB7XFxuICBjb2xvcjogIzRiNTE1ZDtcXG59XFxuXFxuLnRleHQtY29sb3Itc3R5bGlzaC1jb2xvci1kYXJrIHtcXG4gIGNvbG9yOiAjM2U0NTUxO1xcbn1cXG5cXG4udGV4dC1jb2xvci11bmlxdWUtY29sb3Ige1xcbiAgY29sb3I6ICMzZjcyOWI7XFxufVxcblxcbi50ZXh0LWNvbG9yLXVuaXF1ZS1jb2xvci1kYXJrIHtcXG4gIGNvbG9yOiAjMWMyMzMxO1xcbn1cXG5cXG4udGV4dC1jb2xvci1zcGVjaWFsLWNvbG9yIHtcXG4gIGNvbG9yOiAjMzc0NzRmO1xcbn1cXG5cXG4udGV4dC1jb2xvci1zcGVjaWFsLWNvbG9yLWRhcmsge1xcbiAgY29sb3I6ICMyNjMyMzg7XFxufVxcblxcbi50ZXh0LWNvbG9yLXByaW1hcnkge1xcbiAgY29sb3I6ICM0Mjg1ZjQ7XFxufVxcblxcbi50ZXh0LWNvbG9yLWRhbmdlciB7XFxuICBjb2xvcjogI2ZmMzU0NztcXG59XFxuXFxuLnRleHQtY29sb3Itd2FybmluZyB7XFxuICBjb2xvcjogI2ZmYmIzMztcXG59XFxuXFxuLnRleHQtY29sb3Itc3VjY2VzcyB7XFxuICBjb2xvcjogIzAwYzg1MTtcXG59XFxuXFxuLnRleHQtY29sb3ItaW5mbyB7XFxuICBjb2xvcjogIzMzYjVlNTtcXG59XFxuXFxuLnRleHQtY29sb3ItZGVmYXVsdCB7XFxuICBjb2xvcjogIzJiYmJhZDtcXG59XFxuXFxuLnRleHQtY29sb3Itc2Vjb25kYXJ5IHtcXG4gIGNvbG9yOiAjYWE2NmNjO1xcbn1cXG5cXG4udGV4dC1jb2xvci1kYXJrIHtcXG4gIGNvbG9yOiAjMjEyMTIxO1xcbn1cXG5cXG4udGV4dC1jb2xvci1saWdodCB7XFxuICBjb2xvcjogI2UwZTBlMDtcXG59XFxuXFxuLnRleHQtY29sb3ItZ3JleS14IHtcXG4gIGNvbG9yOiAjZjlmOWY5O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXJlZCB7XFxuICBib3JkZXItY29sb3I6ICNmNDQzMzY7XFxufVxcblxcbi5ib3JkZXItY29sb3ItcGluayB7XFxuICBib3JkZXItY29sb3I6ICNlOTFlNjM7XFxufVxcblxcbi5ib3JkZXItY29sb3ItcHVycGxlIHtcXG4gIGJvcmRlci1jb2xvcjogIzljMjdiMDtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1kZWVwLXB1cnBsZSB7XFxuICBib3JkZXItY29sb3I6ICM2NzNhYjc7XFxufVxcblxcbi5ib3JkZXItY29sb3ItaW5kaWdvIHtcXG4gIGJvcmRlci1jb2xvcjogIzNmNTFiNTtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1ibHVlIHtcXG4gIGJvcmRlci1jb2xvcjogIzIxOTZmMztcXG59XFxuXFxuLmJvcmRlci1jb2xvci1saWdodC1ibHVlIHtcXG4gIGJvcmRlci1jb2xvcjogIzAzYTlmNDtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1jeWFuIHtcXG4gIGJvcmRlci1jb2xvcjogIzAwYmNkNDtcXG59XFxuXFxuLmJvcmRlci1jb2xvci10ZWFsIHtcXG4gIGJvcmRlci1jb2xvcjogIzAwOTY4ODtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1ncmVlbiB7XFxuICBib3JkZXItY29sb3I6ICM0Y2FmNTA7XFxufVxcblxcbi5ib3JkZXItY29sb3ItbGlnaHQtZ3JlZW4ge1xcbiAgYm9yZGVyLWNvbG9yOiAjOGJjMzRhO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWxpbWUge1xcbiAgYm9yZGVyLWNvbG9yOiAjY2RkYzM5O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXllbGxvdyB7XFxuICBib3JkZXItY29sb3I6ICNmZmViM2I7XFxufVxcblxcbi5ib3JkZXItY29sb3ItYW1iZXIge1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZjMTA3O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLW9yYW5nZSB7XFxuICBib3JkZXItY29sb3I6ICNmZjk4MDA7XFxufVxcblxcbi5ib3JkZXItY29sb3ItZGVlcC1vcmFuZ2Uge1xcbiAgYm9yZGVyLWNvbG9yOiAjZmY1NzIyO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWJyb3duIHtcXG4gIGJvcmRlci1jb2xvcjogIzc5NTU0ODtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1ibGFjayB7XFxuICBib3JkZXItY29sb3I6ICMwMDA7XFxufVxcblxcbi5ib3JkZXItY29sb3Itd2hpdGUge1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWdyZXkge1xcbiAgYm9yZGVyLWNvbG9yOiAjOWU5ZTllO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWJsdWUtZ3JleSB7XFxuICBib3JkZXItY29sb3I6ICM2MDdkOGI7XFxufVxcblxcbi5ib3JkZXItY29sb3ItcHJpbWFyeS1jb2xvci1kYXJrIHtcXG4gIGJvcmRlci1jb2xvcjogIzBkNDdhMTtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1zZWNvbmRhcnktY29sb3Ige1xcbiAgYm9yZGVyLWNvbG9yOiAjYWE2NmNjO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXNlY29uZGFyeS1jb2xvci1kYXJrIHtcXG4gIGJvcmRlci1jb2xvcjogIzk5MzNjYztcXG59XFxuXFxuLmJvcmRlci1jb2xvci1kZWZhdWx0LWNvbG9yIHtcXG4gIGJvcmRlci1jb2xvcjogIzJiYmJhZDtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1kZWZhdWx0LWNvbG9yLWRhcmsge1xcbiAgYm9yZGVyLWNvbG9yOiAjMDA2OTVjO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWluZm8tY29sb3Ige1xcbiAgYm9yZGVyLWNvbG9yOiAjMzNiNWU1O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWluZm8tY29sb3ItZGFyayB7XFxuICBib3JkZXItY29sb3I6ICMwMDk5Y2M7XFxufVxcblxcbi5ib3JkZXItY29sb3Itc3VjY2Vzcy1jb2xvciB7XFxuICBib3JkZXItY29sb3I6ICMwMGM4NTE7XFxufVxcblxcbi5ib3JkZXItY29sb3Itc3VjY2Vzcy1jb2xvci1kYXJrIHtcXG4gIGJvcmRlci1jb2xvcjogIzAwN2UzMztcXG59XFxuXFxuLmJvcmRlci1jb2xvci13YXJuaW5nLWNvbG9yIHtcXG4gIGJvcmRlci1jb2xvcjogI2ZmYmIzMztcXG59XFxuXFxuLmJvcmRlci1jb2xvci13YXJuaW5nLWNvbG9yLWRhcmsge1xcbiAgYm9yZGVyLWNvbG9yOiAjZmY4ODAwO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWRhbmdlci1jb2xvciB7XFxuICBib3JkZXItY29sb3I6ICNmZjM1NDc7XFxufVxcblxcbi5ib3JkZXItY29sb3ItZGFuZ2VyLWNvbG9yLWRhcmsge1xcbiAgYm9yZGVyLWNvbG9yOiAjY2MwMDAwO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWVsZWdhbnQtY29sb3Ige1xcbiAgYm9yZGVyLWNvbG9yOiAjMmUyZTJlO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWVsZWdhbnQtY29sb3ItZGFyayB7XFxuICBib3JkZXItY29sb3I6ICMyMTIxMjE7XFxufVxcblxcbi5ib3JkZXItY29sb3Itc3R5bGlzaC1jb2xvciB7XFxuICBib3JkZXItY29sb3I6ICM0YjUxNWQ7XFxufVxcblxcbi5ib3JkZXItY29sb3Itc3R5bGlzaC1jb2xvci1kYXJrIHtcXG4gIGJvcmRlci1jb2xvcjogIzNlNDU1MTtcXG59XFxuXFxuLmJvcmRlci1jb2xvci11bmlxdWUtY29sb3Ige1xcbiAgYm9yZGVyLWNvbG9yOiAjM2Y3MjliO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXVuaXF1ZS1jb2xvci1kYXJrIHtcXG4gIGJvcmRlci1jb2xvcjogIzFjMjMzMTtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1zcGVjaWFsLWNvbG9yIHtcXG4gIGJvcmRlci1jb2xvcjogIzM3NDc0ZjtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1zcGVjaWFsLWNvbG9yLWRhcmsge1xcbiAgYm9yZGVyLWNvbG9yOiAjMjYzMjM4O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXByaW1hcnkge1xcbiAgYm9yZGVyLWNvbG9yOiAjNDI4NWY0O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWRhbmdlciB7XFxuICBib3JkZXItY29sb3I6ICNmZjM1NDc7XFxufVxcblxcbi5ib3JkZXItY29sb3Itd2FybmluZyB7XFxuICBib3JkZXItY29sb3I6ICNmZmJiMzM7XFxufVxcblxcbi5ib3JkZXItY29sb3Itc3VjY2VzcyB7XFxuICBib3JkZXItY29sb3I6ICMwMGM4NTE7XFxufVxcblxcbi5ib3JkZXItY29sb3ItaW5mbyB7XFxuICBib3JkZXItY29sb3I6ICMzM2I1ZTU7XFxufVxcblxcbi5ib3JkZXItY29sb3ItZGVmYXVsdCB7XFxuICBib3JkZXItY29sb3I6ICMyYmJiYWQ7XFxufVxcblxcbi5ib3JkZXItY29sb3Itc2Vjb25kYXJ5IHtcXG4gIGJvcmRlci1jb2xvcjogI2FhNjZjYztcXG59XFxuXFxuLmJvcmRlci1jb2xvci1kYXJrIHtcXG4gIGJvcmRlci1jb2xvcjogIzIxMjEyMTtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1saWdodCB7XFxuICBib3JkZXItY29sb3I6ICNlMGUwZTA7XFxufVxcblxcbi5ib3JkZXItY29sb3ItZ3JleS14IHtcXG4gIGJvcmRlci1jb2xvcjogI2Y5ZjlmOTtcXG59XFxuXFxuLmJnLWNvbG9yLXJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xcbn1cXG5cXG4uYmctY29sb3ItcGluayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTkxZTYzO1xcbn1cXG5cXG4uYmctY29sb3ItcHVycGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5YzI3YjA7XFxufVxcblxcbi5iZy1jb2xvci1kZWVwLXB1cnBsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjczYWI3O1xcbn1cXG5cXG4uYmctY29sb3ItaW5kaWdvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XFxufVxcblxcbi5iZy1jb2xvci1ibHVlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XFxufVxcblxcbi5iZy1jb2xvci1saWdodC1ibHVlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwM2E5ZjQ7XFxufVxcblxcbi5iZy1jb2xvci1jeWFuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGJjZDQ7XFxufVxcblxcbi5iZy1jb2xvci10ZWFsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XFxufVxcblxcbi5iZy1jb2xvci1ncmVlbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xcbn1cXG5cXG4uYmctY29sb3ItbGlnaHQtZ3JlZW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiYzM0YTtcXG59XFxuXFxuLmJnLWNvbG9yLWxpbWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NkZGMzOTtcXG59XFxuXFxuLmJnLWNvbG9yLXllbGxvdyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYjNiO1xcbn1cXG5cXG4uYmctY29sb3ItYW1iZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcXG59XFxuXFxuLmJnLWNvbG9yLW9yYW5nZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ODAwO1xcbn1cXG5cXG4uYmctY29sb3ItZGVlcC1vcmFuZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTcyMjtcXG59XFxuXFxuLmJnLWNvbG9yLWJyb3duIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3OTU1NDg7XFxufVxcblxcbi5iZy1jb2xvci1ibGFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbn1cXG5cXG4uYmctY29sb3Itd2hpdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLmJnLWNvbG9yLWdyZXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzllOWU5ZTtcXG59XFxuXFxuLmJnLWNvbG9yLWJsdWUtZ3JleSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3ZDhiO1xcbn1cXG5cXG4uYmctY29sb3ItcHJpbWFyeS1jb2xvci1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDQ3YTE7XFxufVxcblxcbi5iZy1jb2xvci1zZWNvbmRhcnktY29sb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhNjZjYztcXG59XFxuXFxuLmJnLWNvbG9yLXNlY29uZGFyeS1jb2xvci1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTMzY2M7XFxufVxcblxcbi5iZy1jb2xvci1kZWZhdWx0LWNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYmJiYWQ7XFxufVxcblxcbi5iZy1jb2xvci1kZWZhdWx0LWNvbG9yLWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjk1YztcXG59XFxuXFxuLmJnLWNvbG9yLWluZm8tY29sb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzYjVlNTtcXG59XFxuXFxuLmJnLWNvbG9yLWluZm8tY29sb3ItZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5OWNjO1xcbn1cXG5cXG4uYmctY29sb3Itc3VjY2Vzcy1jb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjODUxO1xcbn1cXG5cXG4uYmctY29sb3Itc3VjY2Vzcy1jb2xvci1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdlMzM7XFxufVxcblxcbi5iZy1jb2xvci13YXJuaW5nLWNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmJiMzM7XFxufVxcblxcbi5iZy1jb2xvci13YXJuaW5nLWNvbG9yLWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODgwMDtcXG59XFxuXFxuLmJnLWNvbG9yLWRhbmdlci1jb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzNTQ3O1xcbn1cXG5cXG4uYmctY29sb3ItZGFuZ2VyLWNvbG9yLWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjMDAwMDtcXG59XFxuXFxuLmJnLWNvbG9yLWVsZWdhbnQtY29sb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmUyZTtcXG59XFxuXFxuLmJnLWNvbG9yLWVsZWdhbnQtY29sb3ItZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xcbn1cXG5cXG4uYmctY29sb3Itc3R5bGlzaC1jb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI1MTVkO1xcbn1cXG5cXG4uYmctY29sb3Itc3R5bGlzaC1jb2xvci1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZTQ1NTE7XFxufVxcblxcbi5iZy1jb2xvci11bmlxdWUtY29sb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNzI5YjtcXG59XFxuXFxuLmJnLWNvbG9yLXVuaXF1ZS1jb2xvci1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzIzMzE7XFxufVxcblxcbi5iZy1jb2xvci1zcGVjaWFsLWNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzQ3NGY7XFxufVxcblxcbi5iZy1jb2xvci1zcGVjaWFsLWNvbG9yLWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MzIzODtcXG59XFxuXFxuLmJnLWNvbG9yLXByaW1hcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyODVmNDtcXG59XFxuXFxuLmJnLWNvbG9yLWRhbmdlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzNTQ3O1xcbn1cXG5cXG4uYmctY29sb3Itd2FybmluZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiYjMzO1xcbn1cXG5cXG4uYmctY29sb3Itc3VjY2VzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjODUxO1xcbn1cXG5cXG4uYmctY29sb3ItaW5mbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNiNWU1O1xcbn1cXG5cXG4uYmctY29sb3ItZGVmYXVsdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmJiYmFkO1xcbn1cXG5cXG4uYmctY29sb3Itc2Vjb25kYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYTY2Y2M7XFxufVxcblxcbi5iZy1jb2xvci1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XFxufVxcblxcbi5iZy1jb2xvci1saWdodCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbn1cXG5cXG4uYmctY29sb3ItZ3JleS14IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XFxufVxcblxcbi53LTI1IHtcXG4gIHdpZHRoOiAyNTtcXG59XFxuXFxuLnctNTAge1xcbiAgd2lkdGg6IDUwO1xcbn1cXG5cXG4udy01NSB7XFxuICB3aWR0aDogNTU7XFxufVxcblxcbi53LTYwIHtcXG4gIHdpZHRoOiA2MDtcXG59XFxuXFxuLnctNjUge1xcbiAgd2lkdGg6IDY1O1xcbn1cXG5cXG4udy03MCB7XFxuICB3aWR0aDogNzA7XFxufVxcblxcbi53LTc1IHtcXG4gIHdpZHRoOiA3NTtcXG59XFxuXFxuLnctODAge1xcbiAgd2lkdGg6IDgwO1xcbn1cXG5cXG4udy04NSB7XFxuICB3aWR0aDogODU7XFxufVxcblxcbi53LTkwIHtcXG4gIHdpZHRoOiA5MDtcXG59XFxuXFxuLnctOTUge1xcbiAgd2lkdGg6IDk1O1xcbn1cXG5cXG4udy0xMDAge1xcbiAgd2lkdGg6IDEwMDtcXG59XFxuXFxuLnRleHQteHMge1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbn1cXG5cXG4udGV4dC1zbSB7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbn1cXG5cXG4udGV4dC1iYXNlIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRleHQtbGcge1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG59XFxuXFxuLnRleHQteGwge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4udGV4dC0yeGwge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50ZXh0LTN4bCB7XFxuICBmb250LXNpemU6IDEuODc1cmVtO1xcbn1cXG5cXG4udGV4dC00eGwge1xcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xcbn1cXG5cXG4udGV4dC01eGwge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4udGV4dC02eGwge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG5ib2R5Lm5lby1zY3JvbGwge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsIHNlbGVjdDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMsIG9wdGlvbjpmb2N1cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhYWFhO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1hbmltYXRlLWR1cmF0aW9uOiAxcztcXG4gIC0tYW5pbWF0ZS1kZWxheTogMXM7XFxuICAtLWFuaW1hdGUtbG9vcDogMTtcXG59XFxuXFxuLmFuaW1hdGVkIHtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbn1cXG4uYW5pbWF0ZWQuaW5maW5pdGUge1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbn1cXG4uYW5pbWF0ZWQuZmFzdGVyIHtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYygkLS1hbmltYXRlLWR1cmF0aW9uIC8gMik7XFxufVxcbi5hbmltYXRlZC5mYXN0IHtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYygkLS1hbmltYXRlLWR1cmF0aW9uICogMC44KTtcXG59XFxuLmFuaW1hdGVkLnNsb3cge1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKCQtLWFuaW1hdGUtZHVyYXRpb24gKiAyKTtcXG59XFxuLmFuaW1hdGVkLnNsb3dlciB7XFxuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGMoJC0tYW5pbWF0ZS1kdXJhdGlvbiAqIDMpO1xcbn1cXG4uYW5pbWF0ZWQubG9vcC0xIHtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxufVxcbi5hbmltYXRlZC5kZWxheS0xcyB7XFxuICBhbmltYXRpb24tZGVsYXk6IGNhbGMoJC0tYW5pbWF0ZS1kZWxheSAqICRpKTtcXG59XFxuLmFuaW1hdGVkLmxvb3AtMiB7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAyO1xcbn1cXG4uYW5pbWF0ZWQuZGVsYXktMXMge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKCQtLWFuaW1hdGUtZGVsYXkgKiAkaSk7XFxufVxcbi5hbmltYXRlZC5sb29wLTMge1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMztcXG59XFxuLmFuaW1hdGVkLmRlbGF5LTFzIHtcXG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYygkLS1hbmltYXRlLWRlbGF5ICogJGkpO1xcbn1cXG4uYW5pbWF0ZWQubG9vcC00IHtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDQ7XFxufVxcbi5hbmltYXRlZC5kZWxheS0xcyB7XFxuICBhbmltYXRpb24tZGVsYXk6IGNhbGMoJC0tYW5pbWF0ZS1kZWxheSAqICRpKTtcXG59XFxuXFxuQG1lZGlhIHByaW50LCAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XFxuICAuYW5pbWF0ZWQge1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFtcyAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxbXMgIWltcG9ydGFudDtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmFuaW1hdGVkW2NsYXNzKj1PdXRdIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuLmFuaW1hdGVkLWluaXRpYWwge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGluaXRpYWwgIWltcG9ydGFudDtcXG59XFxuXFxuLyogb3JpZ2luYWxseSBhdXRob3JlZCBieSBOaWNrIFBldHRpdCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWNrcGV0dGl0L2dsaWRlICovXFxuQGtleWZyYW1lcyBwdWxzZSB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIDEuMDUsIDEuMDUpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxufVxcbi5wdWxzZSB7XFxuICBhbmltYXRpb24tbmFtZTogcHVsc2U7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG59XFxuXFxuQGtleWZyYW1lcyB0YWRhIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxuICAxMCUsIDIwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjksIDAuOSwgMC45KSByb3RhdGUzZCgwLCAwLCAxLCAtM2RlZyk7XFxuICB9XFxuICAzMCUsIDUwJSwgNzAlLCA5MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSkgcm90YXRlM2QoMCwgMCwgMSwgM2RlZyk7XFxuICB9XFxuICA0MCUsIDYwJSwgODAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpIHJvdGF0ZTNkKDAsIDAsIDEsIC0zZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcbn1cXG4udGFkYSB7XFxuICBhbmltYXRpb24tbmFtZTogdGFkYTtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbi5mYWRlSW4ge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW5MZWZ0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuLmZhZGVJbkxlZnQge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkxlZnQ7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluUmlnaHQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbi5mYWRlSW5SaWdodCB7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZUluUmlnaHQ7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluVXAge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbi5mYWRlSW5VcCB7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZUluVXA7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlT3V0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDIwMGRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbi5yb3RhdGVPdXQge1xcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZU91dDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG59XFxuXFxuLnJvdGF0ZS1jaXJjbGUge1xcbiAgYW5pbWF0aW9uOiByb3RhdGVDaXJjbGUgOXMgaW5maW5pdGU7XFxufVxcblxcbi8qXFxuIEN1c3RvbSBBbmltYXRpb25zXFxuICovXFxuQGtleWZyYW1lcyByb3RhdGVDaXJjbGUge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDI1JSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICB9XFxuICA3NSUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgamFja0luVGhlQm94IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMSkgcm90YXRlKDMwZGVnKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XFxuICB9XFxuICA3MCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XFxuLmphY2tJblRoZUJveCB7XFxuICBhbmltYXRpb24tbmFtZTogamFja0luVGhlQm94O1xcbn1cXG5cXG4vKiBvcmlnaW5hbGx5IGF1dGhvcmVkIGJ5IE5pY2sgUGV0dGl0IC0gaHR0cHM6Ly9naXRodWIuY29tL25pY2twZXR0aXQvZ2xpZGUgKi9cXG5Aa2V5ZnJhbWVzIHJvbGxJbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTEyMGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbi5yb2xsSW4ge1xcbiAgYW5pbWF0aW9uLW5hbWU6IHJvbGxJbjtcXG59XFxuXFxuQGtleWZyYW1lcyB6b29tSW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbi56b29tSW4ge1xcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb21JbjtcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZUluRG93biB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbi5zbGlkZUluRG93biB7XFxuICBhbmltYXRpb24tbmFtZTogc2xpZGVJbkRvd247XFxufVxcblxcbkBrZXlmcmFtZXMgZmxvYXQge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2xhdGVZKDBweCk7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNsYXRlWSgtNnB4KTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2xhdGVZKDBweCk7XFxuICB9XFxufVxcbi5wdXJwbGUtZ3JhZGllbnQge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDBkZWcsICNmZjZlYzQsICM3ODczZjUpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0MGRlZywgI2ZmNmVjNCwgIzc4NzNmNSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0MGRlZywgI2ZmNmVjNCwgIzc4NzNmNSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoNDBkZWcsICNmZjZlYzQsICM3ODczZjUpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsICNmZjZlYzQsICM3ODczZjUpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wZWFjaC1ncmFkaWVudCB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0MGRlZywgI2ZmZDg2ZiwgI2ZjNjI2MikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjZmZkODZmLCAjZmM2MjYyKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjZmZkODZmLCAjZmM2MjYyKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCg0MGRlZywgI2ZmZDg2ZiwgI2ZjNjI2MikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MGRlZywgI2ZmZDg2ZiwgI2ZjNjI2MikgIWltcG9ydGFudDtcXG59XFxuXFxuLmFxdWEtZ3JhZGllbnQge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDBkZWcsICMyMDk2ZmYsICMwNWZmYTMpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0MGRlZywgIzIwOTZmZiwgIzA1ZmZhMykgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0MGRlZywgIzIwOTZmZiwgIzA1ZmZhMykgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoNDBkZWcsICMyMDk2ZmYsICMwNWZmYTMpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsICMyMDk2ZmYsICMwNWZmYTMpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ibHVlLWdyYWRpZW50IHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjNDVjYWZjLCAjMzAzZjlmKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDBkZWcsICM0NWNhZmMsICMzMDNmOWYpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDBkZWcsICM0NWNhZmMsICMzMDNmOWYpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjNDVjYWZjLCAjMzAzZjlmKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjNDVjYWZjLCAjMzAzZjlmKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaG9tZS1wYWdlLWdyYWRpZW50IHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDBkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDBkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHVycGxlLWdyYWRpZW50LXJnYmEge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMjU1LCAxMTAsIDE5NiwgMC45KSwgcmdiYSgxMjAsIDExNSwgMjQ1LCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMjU1LCAxMTAsIDE5NiwgMC45KSwgcmdiYSgxMjAsIDExNSwgMjQ1LCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDI1NSwgMTEwLCAxOTYsIDAuOSksIHJnYmEoMTIwLCAxMTUsIDI0NSwgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMjU1LCAxMTAsIDE5NiwgMC45KSwgcmdiYSgxMjAsIDExNSwgMjQ1LCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDI1NSwgMTEwLCAxOTYsIDAuOSksIHJnYmEoMTIwLCAxMTUsIDI0NSwgMC45KSkgIWltcG9ydGFudDtcXG59XFxuXFxuLnBlYWNoLWdyYWRpZW50LXJnYmEge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMjU1LCAyMTYsIDExMSwgMC45KSwgcmdiYSgyNTIsIDk4LCA5OCwgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDI1NSwgMjE2LCAxMTEsIDAuOSksIHJnYmEoMjUyLCA5OCwgOTgsIDAuOSkpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMjU1LCAyMTYsIDExMSwgMC45KSwgcmdiYSgyNTIsIDk4LCA5OCwgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMjU1LCAyMTYsIDExMSwgMC45KSwgcmdiYSgyNTIsIDk4LCA5OCwgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSgyNTUsIDIxNiwgMTExLCAwLjkpLCByZ2JhKDI1MiwgOTgsIDk4LCAwLjkpKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYXF1YS1ncmFkaWVudC1yZ2JhIHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDMyLCAxNTAsIDI1NSwgMC45KSwgcmdiYSg1LCAyNTUsIDE2MywgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDMyLCAxNTAsIDI1NSwgMC45KSwgcmdiYSg1LCAyNTUsIDE2MywgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSgzMiwgMTUwLCAyNTUsIDAuOSksIHJnYmEoNSwgMjU1LCAxNjMsIDAuOSkpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDMyLCAxNTAsIDI1NSwgMC45KSwgcmdiYSg1LCAyNTUsIDE2MywgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSgzMiwgMTUwLCAyNTUsIDAuOSksIHJnYmEoNSwgMjU1LCAxNjMsIDAuOSkpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ibHVlLWdyYWRpZW50LXJnYmEge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoNjksIDIwMiwgMjUyLCAwLjkpLCByZ2JhKDQ4LCA2MywgMTU5LCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoNjksIDIwMiwgMjUyLCAwLjkpLCByZ2JhKDQ4LCA2MywgMTU5LCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDY5LCAyMDIsIDI1MiwgMC45KSwgcmdiYSg0OCwgNjMsIDE1OSwgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoNjksIDIwMiwgMjUyLCAwLjkpLCByZ2JhKDQ4LCA2MywgMTU5LCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDY5LCAyMDIsIDI1MiwgMC45KSwgcmdiYSg0OCwgNjMsIDE1OSwgMC45KSkgIWltcG9ydGFudDtcXG59XFxuXFxuLmJnLWdyYWRpZW50LXB1cnBsZSB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICNmZjZlYzQsICM3ODczZjUpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICNmZjZlYzQsICM3ODczZjUpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjZmY2ZWM0LCAjNzg3M2Y1KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICNmZjZlYzQsICM3ODczZjUpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjZmY2ZWM0LCAjNzg3M2Y1KSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYmctZ3JhZGllbnQtcGVhY2gge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjZmZkODZmLCAjZmM2MjYyKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjZmZkODZmLCAjZmM2MjYyKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgI2ZmZDg2ZiwgI2ZjNjI2MikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjZmZkODZmLCAjZmM2MjYyKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgI2ZmZDg2ZiwgI2ZjNjI2MikgIWltcG9ydGFudDtcXG59XFxuXFxuLmJnLWdyYWRpZW50LWFxdWEge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjMjA5NmZmLCAjMDVmZmEzKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjMjA5NmZmLCAjMDVmZmEzKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgIzIwOTZmZiwgIzA1ZmZhMykgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjMjA5NmZmLCAjMDVmZmEzKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgIzIwOTZmZiwgIzA1ZmZhMykgIWltcG9ydGFudDtcXG59XFxuXFxuLmJnLWdyYWRpZW50LWJsdWUge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjNDVjYWZjLCAjMzAzZjlmKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjNDVjYWZjLCAjMzAzZjlmKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgIzQ1Y2FmYywgIzMwM2Y5ZikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjNDVjYWZjLCAjMzAzZjlmKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgIzQ1Y2FmYywgIzMwM2Y5ZikgIWltcG9ydGFudDtcXG59XFxuXFxuLmJnLWdyYWRpZW50LWhvbWUtcGFnZSB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSEVSTyBJY29uc1xcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvSWNvbkZvbnQvd2ViZm9udC5lb3Q/dj0xLjQuNTdcXFwiKTtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9JY29uRm9udC93ZWJmb250LmVvdD8jaWVmaXgmdj0xLjQuNTdcXFwiKSBmb3JtYXQoXFxcImVtYmVkZGVkLW9wZW50eXBlXFxcIiksIHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvSWNvbkZvbnQvd2ViZm9udC53b2ZmMj92PTEuNC41N1xcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9JY29uRm9udC93ZWJmb250LndvZmY/dj0xLjQuNTdcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKSwgdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9JY29uRm9udC93ZWJmb250LnR0Zj92PTEuNC41N1xcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKSwgdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9JY29uRm9udC93ZWJmb250LnN2Zz92PTEuNC41N1xcXCIpIGZvcm1hdChcXFwic3ZnXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5pLmhlcm8taWNvbiB7XFxuICBjb2xvcjogIzYwN0Q4QjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogdW5zZXQ7XFxuICBsaW5lLWhlaWdodDogdW5zZXQ7XFxufVxcbmkuaGVyby1pY29uOmJlZm9yZSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAyNHB4LzEgXFxcIkhFUk8gSWNvbnNcXFwiO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuaS5oZXJvLWljb24uaGVyby1hY2NvdW50LWdyb3VwLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQjU4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1hY2NvdW50LXNlYXJjaC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDkzNVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYWNjb3VudC10aWUtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwQ0FcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWFpcnBvcnQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwODRCXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1hcnJvdy1kb3duLWJvbGQtYm94LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzMwXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1hcnJvdy11cC1ib2xkLWJveC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDczOVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYXJyb3ctdXAtYm94OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDZDM1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYXV0by1maXg6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDY4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1hdXRvLXVwbG9hZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwNjlcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWJhbGxvdC1yZWNvdW50LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzNBXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jYWxsLW1hZGU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMEY3XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jYXJkLWFjY291bnQtbWFpbC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEU5OFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2FydC1wbHVzOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDExMlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2VsbHBob25lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDExQ1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2VsbHBob25lLWNvZzo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5NTFcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNlbGxwaG9uZS1tZXNzYWdlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDhEM1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2VsbHBob25lLW5mYzo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFOTBcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNlcnRpZmljYXRlLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTg4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jaGVjay1jaXJjbGU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNUUwXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jaGVjay1jaXJjbGUtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1RTFcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNsaXBweTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxNEZcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNsb3VkLWRvd25sb2FkLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQjdEXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jcmVhdGlvbjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2NzRcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtYWlsLWVkaXQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFRTRcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM2OFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tYW5ncnk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzY5XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1hbmdyeS1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM2QVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tY29uZnVzZWQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMERFXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1jb25mdXNlZC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTBERlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tY29vbDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNkJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWNvb2wtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxRjNcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWNyeTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNkNcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWNyeS1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM2RFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tZGVhZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNkVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWRlYWQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2OUJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWRldmlsOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM2RlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tZGV2aWwtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxRjRcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWV4Y2l0ZWQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzcwXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1leGNpdGVkLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjlDXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1mcm93bjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGNENcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWZyb3duLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjREXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1oYXBweTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNzFcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWhhcHB5LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMUY1XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1raXNzOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM3MlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24ta2lzcy1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM3M1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tbG9sOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTIxNFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tbG9sLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjE1XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1uZXV0cmFsOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM3NFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tbmV1dHJhbC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDFGNlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxRjJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLXBvb3A6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMUY3XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1wb29wLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzc1XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1zYWQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzc2XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1zYWQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxRjhcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLXRvbmd1ZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxRjlcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLXRvbmd1ZS1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM3N1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24td2luazo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNzhcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLXdpbmstb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNzlcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWZpbGU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMjE0XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1maWxlLWNsb3VkLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDJBXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1mb3JtLXNlbGVjdDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0MDFcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWZvcm1hdC1saXN0LXRleHQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjZGXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1nb29nbGUtYWRzOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM4N1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8taGFuZC1va2F5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEE1MFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8taGFuZC1wb2ludGluZy1yaWdodDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyQzdcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWhlYWRzZXQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMkNFXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1oZWFydC1tdWx0aXBsZS1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEE1N1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8taG9tZS1tYXAtbWFya2VyOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDVGOFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8taHVtYW4tbWFsZS1jaGlsZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzOENcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWxhcHRvcDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzMjJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLW1lc3NhZ2UtY29nLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTcyXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1tZXNzYWdlLXRleHQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzNkFcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLW1vdXNlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDM3RFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbW91c2UtYmx1ZXRvb3RoOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDk4QlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbW91c2Utb2ZmOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDM3RVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbW91c2UtdmFyaWFudDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzN0ZcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLW1vdXNlLXZhcmlhbnQtb2ZmOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDM4MFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbmV3c3BhcGVyLXZhcmlhbnQtbXVsdGlwbGUtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwMDNcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLW5ld3NwYXBlci12YXJpYW50LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDA0XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1waG9uZS1pbi10YWxrLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTgyXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1wbHVzLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzA1XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1yZXNwb25zaXZlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDQ1RVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tc2VsZWN0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDQ4NVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tc2VsZWN0aW9uLXNlYXJjaDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyMDVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXNlbmQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDhBXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1zZW5kLWNoZWNrLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTYyXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1zZW5kLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTY1XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1zaGFyZS1hbGwtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExRjVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXN0YXItYm94LW11bHRpcGxlLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjg3XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1zdGlja2VyLWVtb2ppOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDc4NVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tdGFibGV0LWlwYWQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNEY4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby10ZWxldmlzaW9uLWNsZWFuOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTExMFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tdXBkYXRlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDZCMFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tem9kaWFjLXRhdXJ1czo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBODdcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXpvZGlhYy12aXJnbzo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBODhcXFwiO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiaW1wb3J0IFRZUEUgZnJvbSBcIi4vdHlwZVwiXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldHRlclVzZXIoIHVzZXIgKXtcclxuICAgIGNvbnNvbGUubG9nKHVzZXIgLCBcIiBzZXQgdXNlciBcIilcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6IFRZUEUuU0VUVEVSX1VTRVIsXHJcbiAgICAgICAgcGF5bG9hZCA6IHsgLi4udXNlciwgZmV0Y2hlZDogdHJ1ZSB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR0ZXJDb252ZXJzYXRpb24oIGNvbnYgKXtcclxuICAgIGNvbnNvbGUubG9nKGNvbnYgLCBcIiBzZXQgY29udiBcIilcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6IFRZUEUuU0VUVEVSX0NPTlZFUlNBVElPTixcclxuICAgICAgICBwYXlsb2FkIDogY29udlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0dGVyQ29udmVyc2F0aW9uQmFja3VwKCBjb252ICl7XHJcbiAgICBjb25zb2xlLmxvZyhjb252ICwgXCIgc2V0IGNvbnYgYmFja3VwIFwiKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlIDogVFlQRS5TRVRURVJfQ09OVkVSU0FUSU9OX0JBQ0tVUCxcclxuICAgICAgICBwYXlsb2FkIDogY29udlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQ2hhbm5lbEFjdGl2ZSggaWQgKXtcclxuICAgIGNvbnNvbGUubG9nKGlkICwgXCIgY2hhbmdlQ2hhbm5lbEFjdGl2ZSBcIilcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6IFRZUEUuQ0hBTk5FTF9TRVRfQUNUSVZFLFxyXG4gICAgICAgIHBheWxvYWQgOiBpZFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRBbGxDTWVzc2FnZSggKXtcclxuICAgIGNvbnNvbGUubG9nKCBcIiByZWFkQWxsQ01lc3NhZ2UgXCIpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBUWVBFLkNIQU5ORUxfUkVBRF9NRVNTQUdFLFxyXG4gICAgICAgIHBheWxvYWQgOiBudWxsXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJTb3J0Q29udmVyc2F0aW9uKCBvYmplY3RJZHNBbmREYXRhQmFja3VwICl7XHJcbiAgICBjb25zb2xlLmxvZyggXCIgZmlsdGVyU29ydENvbnZlcnNhdGlvbiBcIilcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6IFRZUEUuRklMVEVSX1NPUlRfQ09OVixcclxuICAgICAgICBwYXlsb2FkIDogb2JqZWN0SWRzQW5kRGF0YUJhY2t1cFxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJjb25zdCBUWVBFID0gIHtcclxuICBcclxuICBDSEFOTkVMX1NFVF9BQ1RJVkUgICAgICAgIDogXCJDSEFOTkVMX1NFVF9BQ1RJVkVcIixcclxuICBTRVRURVJfVVNFUiAgICAgICAgICAgICAgIDogXCJTRVRURVJfVVNFUlwiLFxyXG4gIENIQU5ORUxfUkVBRF9NRVNTQUdFICAgICAgOiBcIkNIQU5ORUxfUkVBRF9NRVNTQUdFXCIsXHJcbiAgU0VUVEVSX0NPTlZFUlNBVElPTiAgICAgICA6IFwiU0VUVEVSX0NPTlZFUlNBVElPTlwiLFxyXG4gIEZJTFRFUl9TT1JUX0NPTlYgICAgICAgICAgOiBcIkZJTFRFUl9TT1JUX0NPTlZcIixcclxuICBTRVRURVJfQ09OVkVSU0FUSU9OX0JBQ0tVUDogXCJTRVRURVJfQ09OVkVSU0FUSU9OX0JBQ0tVUFwiXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVFlQRTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IENoYXQgZnJvbSAnLi9DaGF0L2luZGV4LmpzeCdcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRyYXcgYXBwXCIpXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBDb21wb25lbnRcIiBpZD1cIkFwcGxpY2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8Q2hhdCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBcclxuXHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgXCIuLi8uLi9zY3NzL2NoYXQvaGVhZC1pbmZvLnNjc3NcIlxyXG5pbXBvcnQgQ09ORklHIGZyb20gXCIuLi8uLi9jb25maWdcIlxyXG5jbGFzcyBIZWFkSW5mbyBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcInJlbmRlciBoZWFkIGNoYXRcIilcclxuXHRcdHZhciB7IGNvbnZlcnNhdGlvbnMgfSA9IHRoaXMucHJvcHNcclxuXHRcdHZhciBjaGFubmVsQWN0aXZlID0gY29udmVyc2F0aW9ucy5maW5kKGNoYW5uZWwgPT4gY2hhbm5lbC5pc0FjdGl2ZSlcclxuXHJcblx0XHRpZiAoIWNoYW5uZWxBY3RpdmUpIHtcclxuXHRcdFx0cmV0dXJuIG51bGxcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1oZWFkLWluZm9cIj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1c2VyLWFjdGl2ZS1jaGF0XCI+XHJcblx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzTmFtZT1cInN0YXRlLWF2YXRhciBhY3RpdmUtb25saW5lXCI+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPXtDT05GSUcuU0VSVkVSX1BIUC5VUkwgKyBjaGFubmVsQWN0aXZlLnVzZXIuYXZhdGFyfSBhbHQ9XCJcIiAvPlxyXG5cdFx0XHRcdFx0PC9maWd1cmU+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtaW5mb1wiPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+e2NoYW5uZWxBY3RpdmUudXNlci5maXJzdF9uYW1lICsgXCIgXCIgK2NoYW5uZWxBY3RpdmUudXNlci5sYXN0X25hbWV9PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSGVhZEluZm8iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IEhlYWRJbmZvIGZyb20gXCIuL0hlYWRJbmZvLmpzeFwiXHJcbmltcG9ydCBNZXNzYWdlQ2hhdCBmcm9tIFwiLi9NZXNzYWdlQ2hhdC5qc3hcIlxyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCJcclxuaW1wb3J0IFwiLi4vLi4vc2Nzcy9jaGF0L2xpc3QtbWVzc2FnZS5zY3NzXCJcclxuaW1wb3J0IHsgbGlzdGVuU2Nyb2xsTWVzc2FnZSB9IGZyb20gXCIuLi8uLi9saWJyYXJ5L3NlcnZpY2UuanNcIlxyXG5cclxuY2xhc3MgTGlzdE1lc3NhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcblxyXG4gICAgICAgIHZhciB7IGNvbnZlcnNhdGlvbnMgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICB2YXIgY2hhbm5lbEFjdGl2ZUNoYXQgPSBjb252ZXJzYXRpb25zLmZpbmQoY2hhbm5lbCA9PiBjaGFubmVsLmlzQWN0aXZlKVxyXG5cclxuICAgICAgICB2YXIgbWVzc2FnZXMgPSBjaGFubmVsQWN0aXZlQ2hhdCAmJiBjaGFubmVsQWN0aXZlQ2hhdC5tZXNzYWdlXHJcblxyXG4gICAgICAgIHZhciBsc3RNZXNzYWdlICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtc2Nyb2xsLXRvLWJvdHRvbScpXHJcbiAgICAgICAgaWYobHN0TWVzc2FnZSl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAkKCcjanMtc2Nyb2xsLXRvLWJvdHRvbScpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgbGlzdGVuU2Nyb2xsTWVzc2FnZSh0aGlzLCBtZXNzYWdlcywgY2hhbm5lbEFjdGl2ZUNoYXQpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHZhciB7IGNvbnZlcnNhdGlvbnMsIGF1dGggfSA9IHRoaXMucHJvcHNcclxuICAgICAgICB2YXIgY2hhbm5lbEFjdGl2ZUNoYXQgPSBjb252ZXJzYXRpb25zLmZpbmQoY2hhbm5lbCA9PiBjaGFubmVsLmlzQWN0aXZlKTtcclxuXHJcbiAgICAgICAgdmFyIG1lc3NhZ2VzID0gY2hhbm5lbEFjdGl2ZUNoYXQgJiYgY2hhbm5lbEFjdGl2ZUNoYXQubWVzc2FnZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtbGlzdC1tZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8SGVhZEluZm8gY29udmVyc2F0aW9ucz17IGNvbnZlcnNhdGlvbnMgfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyLWxpc3QtbWVzc2FnZVwiIGlkPVwianMtc2Nyb2xsLXRvLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHttZXNzYWdlcyAmJiBtZXNzYWdlcy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChtZXNzYWdlLCBrZXkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZUNoYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1wibWVzc2FnZS1jaGF0XCIgKyBrZXkgKyBjaGFubmVsQWN0aXZlQ2hhdC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRoPXthdXRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9e21lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbEFjdGl2ZUNoYXQ9e2NoYW5uZWxBY3RpdmVDaGF0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTGlzdE1lc3NhZ2VcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBcIi4uLy4uL3Njc3MvY2hhdC9saXN0LXVzZXIuc2Nzc1wiXHJcbmltcG9ydCBVc2VyQ2hhdCBmcm9tIFwiLi9Vc2VyQ2hhdC5qc3hcIlxyXG5cclxuY2xhc3MgTGlzdFVzZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICAvLy8gdXNlckNoYXQgxJHGsOG7o2MgcGFzcyB04burIGNoYSB2w6BvXHJcbiAgICAgICAgdmFyIHsgY29udmVyc2F0aW9ucyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbnZlcnNhdGlvbnMpXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LWxpc3QtdXNlclwiPlxyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICBjb252ZXJzYXRpb25zICYmIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnNhdGlvbnMubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFubmVsID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXJDaGF0IGtleT17Y2hhbm5lbC5pZH0gY2hhbm5lbD17Y2hhbm5lbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICApIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0VXNlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCAnLi4vLi4vc2Nzcy9jaGF0L21lc3NhZ2UtY2hhdC5zY3NzJ1xyXG5pbXBvcnQgQ09ORklHIGZyb20gXCIuLi8uLi9jb25maWdcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuXHJcbmNsYXNzIE1lc3NhZ2VDaGF0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIHsgYXV0aCwgbWVzc2FnZSwgY2hhbm5lbEFjdGl2ZUNoYXQgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICAgICAgdmFyIG15aW5mbyA9IHsgYXZhdGFyIDogJycsIG5hbWU6ICcnIH1cclxuICAgICAgICBpZiggYXV0aCAmJiBhdXRoLmlkICl7XHJcbiAgICAgICAgICAgIG15aW5mby5hdmF0YXIgPSBhdXRoLmF2YXRhclxyXG4gICAgICAgICAgICBteWluZm8ubmFtZSAgID0gYXV0aC5maXJzdF9uYW1lICsgXCIgXCIgKyBhdXRoLmxhc3RfbmFtZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjaGFubmVsQWN0aXZlQ2hhdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdXNlckluZm8gPSBjaGFubmVsQWN0aXZlQ2hhdC51c2VyXHJcblxyXG4gICAgICAgIGlmICghbWVzc2FnZS50eXBlKSB7XHJcbiAgICAgICAgICAgIHZhciB0eXBlTWVzc2FnZSA9ICdsZWZ0LW1lc3NhZ2UgJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgdHlwZU1lc3NhZ2UgPSAncmlnaHQtbWVzc2FnZSBieS1tZSAnO1xyXG4gICAgICAgICAgICB1c2VySW5mbyA9IG15aW5mbztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHsgc3R5bGUgfSA9IG1lc3NhZ2VcclxuXHJcbiAgICAgICAgdmFyIFRJTUVfRElFX0ZJTEUgPSAyNCAqIDYwICogNjAgKiAxMDAwXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHZhciB0aW1lID0gbmV3IERhdGUobWVzc2FnZS5jcmVhdGVkQXQpXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LW1lc3NhZ2UtY2hhdFwiID5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHlwZU1lc3NhZ2UgKyBcImNoYXQtZ3JvdXBcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0NPTkZJRy5TRVJWRVJfUEhQLlVSTCArIHVzZXJJbmZvLmF2YXRhcn0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSA9PSBcIklNQUdFXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5hdHRhY2htZW50Lm1hcCgoIGF0dGFjaEVsZW1lbnQgLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGF0dGFjaEVsZW1lbnQudHlwZSA9PSAnaW1nJyApe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggYXR0YWNoRWxlbWVudC50aW1lICYmIGF0dGFjaEVsZW1lbnQudGltZSAtIFRJTUVfRElFX0ZJTEUgPCAobmV3IERhdGUpLmdldFRpbWUoKSApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e1wid3JhcHBlci1hdHRhY2htZW50XCIgKyBpbmRleCArIGF0dGFjaEVsZW1lbnQudXJsIH0gY2xhc3NOYW1lPVwid3JhcHBlci1hdHRhY2htZW50XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtDT05GSUcuU0VSVkVSX1BIUC5VUkwgKyBhdHRhY2hFbGVtZW50LnVybCB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZG93bmxvYWQtZmlsZS1hdHRhY2htZW50XCIgaHJlZj17IENPTkZJRy5TRVJWRVJfUEhQLlVSTCArIGF0dGFjaEVsZW1lbnQudXJsIH0gdGFyZ2V0PVwiX2JsYW5rXCIgZG93bmxvYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLWNsb3VkLWRvd25sb2FkLW91dGxpbmVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtcIndyYXBwZXItYXR0YWNobWVudFwiICsgaW5kZXggKyBDT05GSUcuU0VSVkVSX1BIUC5VUkwgKyBcIi9pbWFnZS9mb2xkZXIuanBnXCIgfSBjbGFzc05hbWU9XCJ3cmFwcGVyLWF0dGFjaG1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eyBDT05GSUcuU0VSVkVSX1BIUC5VUkwgKyBcIi9pbWFnZS9mb2xkZXIuanBnXCIgfSAvPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkb3dubG9hZC1maWxlLWF0dGFjaG1lbnRcIiBocmVmPXsgQ09ORklHLlNFUlZFUl9QSFAuVVJMICsgYXR0YWNoRWxlbWVudC51cmwgfSB0YXJnZXQ9XCJfYmxhbmtcIiBkb3dubG9hZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLWNsb3VkLWRvd25sb2FkLW91dGxpbmVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUgKyBcIiB0ZXh0XCJ9ID57bWVzc2FnZS5jb250ZW50fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmNyZWF0ZWRBdCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlICsgXCIgdGltZS1sYWJlbFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lLmdldEZ1bGxZZWFyKCkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgXCItXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgKHRpbWUuZ2V0TW9udGgoKSArIDEpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIFwiLVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIHRpbWUuZ2V0RGF0ZSgpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIFwiIFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIHRpbWUuZ2V0SG91cnMoKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBcIjpcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyB0aW1lLmdldE1pbnV0ZXMoKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBcIjpcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyB0aW1lLmdldFNlY29uZHMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIW1lc3NhZ2UudHlwZSAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFtZXNzYWdlLnJlYWRBZG1pbiA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2hlcm8taWNvbiBoZXJvLWNoZWNrLWNpcmNsZS1vdXRsaW5lJz48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0naGVyby1pY29uIGhlcm8tY2hlY2stY2lyY2xlJz48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZUNoYXQiLCJcclxuXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0ICcuLi8uLi9zY3NzL2NoYXQvc2VhcmNoLnNjc3MnXHJcbmltcG9ydCB7IGZpbHRlclNvcnRDb252ZXJzYXRpb24sIHNldHRlckNvbnZlcnNhdGlvbiB9IGZyb20gXCIuLi8uLi9hY3Rpb25cIlxyXG5cclxuXHJcbmNsYXNzIFNlYXJjaCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKCBwcm9wcyApXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGh1bmcgOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VhcmNoVXNlciA9IHRoaXMuc2VhcmNoVXNlci5iaW5kKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBzZWFyY2hVc2VyKGUpIHtcclxuXHJcbiAgICAgICAgdmFyIF90aGlzICAgICAgPSB0aGlzLFxyXG4gICAgICAgICAgICBiYWNrdXBEYXRhID0gWyAuLi4gdGhpcy5wcm9wcy5jb252ZXJzYXRpb25CYWNrdXAgXSxcclxuICAgICAgICAgICAgbGlzdE5hbWUgICA9IFtdLFxyXG4gICAgICAgICAgICB0ZXh0ICAgICAgID0gZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgIG91dHB1dCAgICAgPSB0ZXh0LnNwbGl0KCcnKVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyggdGV4dCAsIFwidGV4dHRleHR0ZXh0dGV4dHRleHR0ZXh0XCIpXHJcbiAgICAgICAgaWYoICF0ZXh0IHx8ICF0ZXh0LnRyaW0oKSApe1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzZXR0ZXJDb252ZXJzYXRpb24odGhpcy5wcm9wcy5jb252ZXJzYXRpb25CYWNrdXApKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5odW5nKXtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnN0YXRlLmh1bmcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBpZiggYmFja3VwRGF0YSApe1xyXG4gICAgICAgICAgICBiYWNrdXBEYXRhLm1hcCggY29udiA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb2JqID0geyBzb3J0OiAwLCBpZDogY29udi5pZCAsIHRleHQ6IGNvbnYudXNlci5maXJzdF9uYW1lICsgXCIgXCIgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxpc3ROYW1lLnB1c2goIG9iaiApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIG91dHB1dC5tYXAoIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgbGlzdE5hbWUubWFwKCBzZWFyY2ggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCBzZWFyY2guc29ydCAhPSAtMSAmJiBzZWFyY2gudGV4dC50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKGl0ZW0udG9VcHBlckNhc2UoKSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2guc29ydCArKyBcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoLnNvcnQgPSAtMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuaHVuZyl7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5zdGF0ZS5odW5nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBodW5nOiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3ROYW1lLnNvcnQoKGEsIGIpID0+IChhLnNvcnQgPiBiLnNvcnQpID8gMSA6IC0xKVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsc3RJZFNvcnRlZCA9IGxpc3ROYW1lLm1hcCggaXRlbSA9PiBpdGVtLnNvcnQgIT0gLTEgJiYgaXRlbS5zb3J0ID8gaXRlbS5pZCA6IDAgKVxyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnByb3BzLmRpc3BhdGNoKGZpbHRlclNvcnRDb252ZXJzYXRpb24oeyBpZHMgOiBsc3RJZFNvcnRlZCwgZGF0YTogYmFja3VwRGF0YSB9KSlcclxuICAgICAgICAgICAgICAgIH0sIDYwMClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgIFxyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LXNlYXJjaC11c2VyXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJoZXJvLWljb24gaGVyby1hY2NvdW50LXNlYXJjaC1vdXRsaW5lXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwic2VhcmNoLXVzZXJcIiBcclxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zZWFyY2hVc2VyfVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInNlYXJjaC11c2VyXCIgcGxhY2Vob2xkZXI9J+WFpeWKm+OBl+OBpuiqsOOBi+OCkuimi+OBpOOBkeOCiycgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5sZXQgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbnZlcnNhdGlvbnMgICAgIDogc3RhdGUuY29udmVyc2F0aW9ucyxcclxuICAgICAgICBjb252ZXJzYXRpb25CYWNrdXA6IHN0YXRlLmNvbnZlcnNhdGlvbkJhY2t1cCxcclxuICAgICAgICB1c2VyICAgICAgICAgICAgICA6IHN0YXRlLnVzZXJcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoU2VhcmNoKSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG4vLyBpbXBvcnQgU2VhcmNoVXNlciBmcm9tIFwiLi9TZWFyY2hVc2VyLmpzeFwiXHJcbmltcG9ydCBMaXN0VXNlciBmcm9tIFwiLi9MaXN0VXNlci5qc3hcIlxyXG5pbXBvcnQgXCIuLi8uLi9zY3NzL2NoYXQvc2lkZWJhci5zY3NzXCJcclxuaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vLi4vY29uZmlnXCJcclxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi9TZWFyY2guanN4XCJcclxuXHJcbmNsYXNzIFNpZGVCYXJDaGF0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyIHNpZGViYXJcIiApXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHZhciBpbmZvciA9IHsgYXZhdGFyOiAnJywgbmFtZTogJycgfVxyXG4gICAgICAgIHZhciB7IGNvbnZlcnNhdGlvbnMsIGF1dGggfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBpZiAoYXV0aCAmJiBhdXRoLmlkKSB7XHJcbiAgICAgICAgICAgIGluZm9yLmF2YXRhciA9IGF1dGguYXZhdGFyXHJcbiAgICAgICAgICAgIGluZm9yLm5hbWUgPSBhdXRoLmZpcnN0X25hbWUgKyBcIiBcIiArIGF1dGgubGFzdF9uYW1lIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtc2lkZWJhci1jaGF0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15aW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwic3RhdGUtYXZhdGFyIGFjdGl2ZS1vbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsgQ09ORklHLlNFUlZFUl9QSFAuVVJMICsgaW5mb3IuYXZhdGFyIH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj57aW5mb3IubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC11c2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udmVyc2F0aW9ucy5sZW5ndGggPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RVc2VyIGNvbnZlcnNhdGlvbnM9e2NvbnZlcnNhdGlvbnN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+IOaknOe0oue1kOaenOOBr+OBguOCiuOBvuOBm+OCkyA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTaWRlQmFyQ2hhdFxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCBDT05GSUcgZnJvbSBcIi4uLy4uL2NvbmZpZ1wiXHJcbmltcG9ydCB7IGNoYW5nZUNoYW5uZWxBY3RpdmUgfSBmcm9tIFwiLi4vLi4vYWN0aW9uXCJcclxuY2xhc3MgVXNlckNoYXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNoYW5nZUFjdGl2ZVVzZXIgPSAoIF90aGlzICwgaWQpID0+IHtcclxuXHJcbiAgICAgICAgX3RoaXMucHJvcHMuZGlzcGF0Y2goY2hhbmdlQ2hhbm5lbEFjdGl2ZSggaWQgKSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHsgY2hhbm5lbCB9ICAgICAgICA9IHRoaXMucHJvcHMsXHJcbiAgICAgICAgICAgIGNsYXNzQWN0aXZlT25saW5lICA9IGNoYW5uZWwudXNlci5vbmxpbmUgPyAnIGFjdGl2ZSAnIDogJycsXHJcbiAgICAgICAgICAgIGNsYXNzQWN0aXZlTWVzc2FnZSA9IGNoYW5uZWwuaXNBY3RpdmUgPyAnIGFjdGl2ZS1tZXNzYWdlICcgOiAnJ1xyXG5cclxuICAgICAgICB2YXIgW2xhc3RJdGVtXSA9IGNoYW5uZWwubWVzc2FnZS5zbGljZSgtMSlcclxuXHJcbiAgICAgICAgdmFyIG11bmJlck5vbmVSZWFkID0gY2hhbm5lbC5tZXNzYWdlLmZpbHRlcihtZXNzYWdlID0+ICFtZXNzYWdlLnJlYWRBZG1pbiApLmxlbmd0aFxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhclwiID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc0FjdGl2ZU9ubGluZSArIGNsYXNzQWN0aXZlTWVzc2FnZSArIFwidXNlci1jaGF0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5jaGFuZ2VBY3RpdmVVc2VyKHRoaXMsIGNoYW5uZWwuaWQpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJzdGF0ZS1hdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0NPTkZJRy5TRVJWRVJfUEhQLlVSTCArIGNoYW5uZWwudXNlci5hdmF0YXJ9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPntjaGFubmVsLnVzZXIuZmlyc3RfbmFtZSArIFwiIFwiICsgY2hhbm5lbC51c2VyLmxhc3RfbmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFzdEl0ZW0gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhc3QtbWVzc2FnZVwiPntsYXN0SXRlbS5jb250ZW50fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bmJlck5vbmVSZWFkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibm9uZS1yZWFkLW1lc3NhZ2VcIj57bXVuYmVyTm9uZVJlYWR9PC9pPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCkoVXNlckNoYXQpIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IFNpZGVCYXJDaGF0IGZyb20gXCIuL1NpZGVCYXJDaGF0LmpzeFwiXHJcbmltcG9ydCBMaXN0TWVzc2FnZSBmcm9tIFwiLi9MaXN0TWVzc2FnZS5qc3hcIlxyXG5pbXBvcnQgJy4uLy4uL3Njc3MvY2hhdC9jaGF0LnNjc3MnXHJcbmltcG9ydCBDT05GSUcgZnJvbSBcIi4uLy4uL2NvbmZpZ1wiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgeyBzZXR0ZXJVc2VyLCByZWFkQWxsQ01lc3NhZ2UsIHNldHRlckNvbnZlcnNhdGlvbiwgc2V0dGVyQ29udmVyc2F0aW9uQmFja3VwIH0gZnJvbSBcIi4uLy4uL2FjdGlvblwiXHJcblxyXG5jbGFzcyBDaGF0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIC8vLyBmZXRjaCBkYXRhIHdpdGggY2hhbm5lbCwgaWQgb2YgdXJsIFxyXG4gICAgICAgIC8vLy8gLi4uLiBcclxuICAgICAgICBcclxuICAgICAgICB2YXIgVE9LRU5fUkVGRVNIX0RPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiVE9LRU5fUkVGRVNIXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcywgXCJ2w6BvIMSRw6J5IHIgXCIpXHJcbiAgICAgICAgaWYoIFRPS0VOX1JFRkVTSF9ET00gJiYgIXRoaXMucHJvcHMuY29udmVyc2F0aW9ucyApe1xyXG4gICAgICAgICAgICAvLy8gZmV0Y2ggdG9rZW4gYWNjZXNzIGJ5IHRva2VuIHJlZmVzaCBcclxuICAgICAgICAgICAgdmFyIHJlZnJlc2ggPSBUT0tFTl9SRUZFU0hfRE9NLmdldEF0dHJpYnV0ZSgnZGF0YS1yZWZlc2gnKSxcclxuICAgICAgICAgICAgICAgIHVzZXJJZCAgPSBUT0tFTl9SRUZFU0hfRE9NLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpLFxyXG4gICAgICAgICAgICAgICAgY2hhbm5lbCA9IFRPS0VOX1JFRkVTSF9ET00uZ2V0QXR0cmlidXRlKCdkYXRhLWNoYW5uZWwnKVxyXG5cclxuICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgICAgICAvLyB2YXIgbmFtZSA9ICdpZCdcclxuICAgICAgICAgICAgLy8gdmFyIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgICAgICAvLyBuYW1lID0gbmFtZS5yZXBsYWNlKC9bXFxbXFxdXS9nLCAnXFxcXCQmJyk7XHJcbiAgICAgICAgICAgIC8vIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJ1s/Jl0nICsgbmFtZSArICcoPShbXiYjXSopfCZ8I3wkKScpLFxyXG4gICAgICAgICAgICAvLyAgICAgcmVzdWx0cyA9IHJlZ2V4LmV4ZWModXJsKVxyXG4gICAgICAgICAgICAvLyBpZiAoIXJlc3VsdHMpIHVzZXJJZCA9IG51bGxcclxuICAgICAgICAgICAgLy8gZWxzZSBpZiAoIXJlc3VsdHNbMl0pIHVzZXJJZCA9ICcnXHJcbiAgICAgICAgICAgIC8vIGVsc2UgdXNlcklkID0gZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMl0ucmVwbGFjZSgvXFwrL2csICcgJykpXHJcblxyXG4gICAgICAgICAgICAvLyB2YXIgbmFtZSA9ICdyZWZyZXNoJ1xyXG4gICAgICAgICAgICAvLyB2YXIgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgICAgIC8vIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1tcXFtcXF1dL2csICdcXFxcJCYnKTtcclxuICAgICAgICAgICAgLy8gdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnWz8mXScgKyBuYW1lICsgJyg9KFteJiNdKil8JnwjfCQpJyksXHJcbiAgICAgICAgICAgIC8vICAgICByZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpXHJcbiAgICAgICAgICAgIC8vIGlmICghcmVzdWx0cykgdXNlcklkID0gbnVsbFxyXG4gICAgICAgICAgICAvLyBlbHNlIGlmICghcmVzdWx0c1syXSkgcmVmcmVzaCA9ICcnXHJcbiAgICAgICAgICAgIC8vIGVsc2UgcmVmcmVzaCA9IGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzJdLnJlcGxhY2UoL1xcKy9nLCAnICcpKVxyXG5cclxuICAgICAgICAgICAgLy8gdmFyIG5hbWUgPSAnY2hhbm5lbCdcclxuICAgICAgICAgICAgLy8gdmFyIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgICAgICAvLyBuYW1lID0gbmFtZS5yZXBsYWNlKC9bXFxbXFxdXS9nLCAnXFxcXCQmJyk7XHJcbiAgICAgICAgICAgIC8vIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJ1s/Jl0nICsgbmFtZSArICcoPShbXiYjXSopfCZ8I3wkKScpLFxyXG4gICAgICAgICAgICAvLyAgICAgcmVzdWx0cyA9IHJlZ2V4LmV4ZWModXJsKVxyXG4gICAgICAgICAgICAvLyBpZiAoIXJlc3VsdHMpIHVzZXJJZCA9IG51bGxcclxuICAgICAgICAgICAgLy8gZWxzZSBpZiAoIXJlc3VsdHNbMl0pIGNoYW5uZWwgPSAnJ1xyXG4gICAgICAgICAgICAvLyBlbHNlIGNoYW5uZWwgPSBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1syXS5yZXBsYWNlKC9cXCsvZywgJyAnKSlcclxuXHJcbiAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAgICAgaWYoIHVzZXJJZCAmJiByZWZyZXNoICApe1xyXG5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIHZhciB1cmwgICAgPSBuZXcgVVJMKENPTkZJRy5TRVJWRVIuQVNTRVQoKSArICcvYXBpL2FkbWluL3JlYWQtbWVzc2FnZScpLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcyA9IHsgdXNlcklkLCByZWZyZXNoLCBjaGFubmVsIH1cclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrZXkgPT4gdXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoa2V5LCBwYXJhbXNba2V5XSkpXHJcblxyXG4gICAgICAgICAgICAgICAgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmNvZGUgIT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRva2VuIHJlZmVzaCBraMO0bmcgxJHDum5nXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0dGVyVXNlcihyZXNwb25zZS51c2VyKSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHNldHRlckNvbnZlcnNhdGlvbihyZXNwb25zZS5kYXRhKSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHNldHRlckNvbnZlcnNhdGlvbkJhY2t1cChyZXNwb25zZS5kYXRhKSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goIGVycm9yID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoIFwi44Ko44Op44O844GM55m655Sf44GX44G+44GX44Gf44CCIOW+jOOBp+OCguOBhuS4gOW6puOChOOCiuebtOOBl+OBpuOBj+OBoOOBleOBhFwiIClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUoKXtcclxuICAgICAgICB2YXIgVE9LRU5fUkVGRVNIX0RPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiVE9LRU5fUkVGRVNIXCIpXHJcblxyXG4gICAgICAgIGlmKCBUT0tFTl9SRUZFU0hfRE9NICl7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVmcmVzaCA9IFRPS0VOX1JFRkVTSF9ET00uZ2V0QXR0cmlidXRlKCdkYXRhLXJlZmVzaCcpXHJcblxyXG4gICAgICAgICAgICAvLyB2YXIgbmFtZSA9ICdyZWZyZXNoJ1xyXG4gICAgICAgICAgICAvLyB2YXIgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgICAgIC8vIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1tcXFtcXF1dL2csICdcXFxcJCYnKTtcclxuICAgICAgICAgICAgLy8gdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnWz8mXScgKyBuYW1lICsgJyg9KFteJiNdKil8JnwjfCQpJyksXHJcbiAgICAgICAgICAgIC8vICAgICByZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpXHJcbiAgICAgICAgICAgIC8vIGlmICghcmVzdWx0cykgdXNlcklkID0gbnVsbFxyXG4gICAgICAgICAgICAvLyBlbHNlIGlmICghcmVzdWx0c1syXSkgcmVmcmVzaCA9ICcnXHJcbiAgICAgICAgICAgIC8vIGVsc2UgcmVmcmVzaCA9IGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzJdLnJlcGxhY2UoL1xcKy9nLCAnICcpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiggdGhpcy5wcm9wcy5jb252ZXJzYXRpb25zICl7XHJcblxyXG4gICAgICAgICAgICB2YXIgeyBjb252ZXJzYXRpb25zIH0gPSB0aGlzLnByb3BzLFxyXG4gICAgICAgICAgICAgICAgY2hhbm5lbEFjdGl2ZUNoYXQgPSBjb252ZXJzYXRpb25zLmZpbmQoY2hhbm5lbCA9PiBjaGFubmVsLmlzQWN0aXZlKSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzICAgICAgICAgID0gY2hhbm5lbEFjdGl2ZUNoYXQgJiYgY2hhbm5lbEFjdGl2ZUNoYXQubWVzc2FnZVxyXG5cclxuICAgICAgICAgICAgdmFyIGV4aXN0Tm9uZVJlYWQgPSBtZXNzYWdlcyAmJiBtZXNzYWdlcy5zb21lKCBmdW5jdGlvbiggbWVzc2FnZSApe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIW1lc3NhZ2UucmVhZEFkbWluXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoIGV4aXN0Tm9uZVJlYWQgKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHsgY2hhbm5lbDogY2hhbm5lbEFjdGl2ZUNoYXQuaWQsIHJlZnJlc2ggfVxyXG5cclxuICAgICAgICAgICAgICAgIGZldGNoKENPTkZJRy5TRVJWRVIuQVNTRVQoKSArICcvYXBpL2FkbWluL3JlYWRpbmcnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgICAgICAgICBpZiggcmVzcG9uc2UuY29kZSA9PSAyMDAgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChyZWFkQWxsQ01lc3NhZ2UoKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlciBDaGF0XCIpXHJcbiAgICAgICAgdmFyIHsgY29udmVyc2F0aW9ucywgdXNlciB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1jaGF0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWNoYXQtdGVtYWxhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXItcGFnZS1jaGF0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnZlcnNhdGlvbnMgJiYgdXNlciA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2lkZUJhckNoYXQgY29udmVyc2F0aW9ucz17IGNvbnZlcnNhdGlvbnMgfSBhdXRoPXsgdXNlciB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RNZXNzYWdlIGNvbnZlcnNhdGlvbnM9eyBjb252ZXJzYXRpb25zIH0gYXV0aD17IHVzZXIgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5sZXQgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbnZlcnNhdGlvbnM6IHN0YXRlLmNvbnZlcnNhdGlvbnMsXHJcbiAgICAgICAgdXNlciAgICAgICAgIDogc3RhdGUudXNlclxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShDaGF0KSIsInZhciBsb2NhbCAgICAgID0gXCIxNTMuMTI2LjE0OS42M1wiLFxyXG4gICAgbG9jYWxfaXAgICA9IFwiMTUzLjEyNi4xNDkuNjNcIixcclxuICAgIGxvY2FsX3BvcnQgPSA5OTk5LFxyXG4gICAgcGVlcl9wb3J0ICA9IDcwMDA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBTRVJWRVI6IHtcclxuICAgICAgICBQT1JUOiBsb2NhbF9wb3J0LFxyXG4gICAgICAgIERPTUFJTjogbG9jYWwsXHJcbiAgICAgICAgSVA6IGxvY2FsX2lwLFxyXG4gICAgICAgIFBFRVJfUE9SVDogcGVlcl9wb3J0LFxyXG4gICAgICAgIFBST1RPQ09MOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChsb2NhbF9wb3J0ID09IDQ0Mykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiaHR0cHM6Ly9cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gXCJodHRwOi8vXCI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBBU1NFVDogKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcG9ydF91cmwgPSBcIlwiO1xyXG4gICAgICAgICAgICBsZXQgcHJvdG9jb2wgPSBcIlwiO1xyXG4gICAgICAgICAgICBpZiAobG9jYWxfcG9ydCA9PSA0NDMpIHtcclxuICAgICAgICAgICAgICAgIHByb3RvY29sID0gXCJodHRwczovL1wiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcHJvdG9jb2wgPSBcImh0dHA6Ly9cIjtcclxuICAgICAgICAgICAgICAgIHBvcnRfdXJsID0gXCI6XCIgKyBsb2NhbF9wb3J0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcHJvdG9jb2wgKyBsb2NhbCArIHBvcnRfdXJsO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgU0VSVkVSX1BIUDoge1xyXG4gICAgICAgIFVSTDogXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanBcIixcclxuICAgIH0sXHJcbn07XHJcbiIsIi8vIGltcG9ydCAnY29yZS1qcyc7XHJcblxyXG4vKiBwb2x5ZmlsbHMuanMgKi9cclxuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCdcclxuaW1wb3J0ICdyZWFjdC1hcHAtcG9seWZpbGwvaWUxMSdcclxuaW1wb3J0ICdjb3JlLWpzJ1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCIuL2NvbXBvbmVudC9BcHAuanNcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUmVkdWNlciBmcm9tICcuL3JlZHVjZXInO1xyXG5cclxuaW1wb3J0ICcuL3Njc3MvaW5kZXguc2NzcydcclxuXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoUmVkdWNlcik7XHJcbnN0b3JlLnN1YnNjcmliZShmdW5jdGlvbigpe1xyXG4gICAgY29uc29sZS5sb2coJ2PDsyB0aGF5IMSR4buVaSB0cm9uZyBSZWR1eCEhJylcclxuICAgIGNvbnNvbGUubG9nKHN0b3JlLmdldFN0YXRlKCkpO1xyXG59KTtcclxuaWYgKHR5cGVvZiAoU3RvcmFnZSkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBSZWFjdERPTS5yZW5kZXIoXHJcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICAgIDxBcHAgLz5cclxuICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkNIQVRfRUxFTUVOVFwiKSk7XHJcbn1lbHNle1xyXG4gICAgYWxlcnQoXCLjgZPjga7jg5bjg6njgqbjgrbjgafjga/jgIHjgqLjg5fjg6rjgrHjg7zjgrfjg6fjg7Pjga/mraPluLjjgavli5XkvZzjgZfjgb7jgZvjgpPjgIIg44Ki44OD44OX44Kw44Os44O844OJ44GX44Gm44GP44Gg44GV44GEXCIpXHJcbn1cclxuIiwiXHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIlxyXG5cclxuLy8vIGNvbmZpZyBnbG9iYWwgdmFyaWFibGVcclxudmFyIHNvY2tldCAgICAgICA9IG51bGwsXHJcbiAgICBFVkVOVCAgICAgICAgPSBDT05GSUdfRVZFTlRcclxuLy8vIGVuZCBzZXR0aW5nIHZhcmlhYmxlXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlzdGVuU2Nyb2xsTWVzc2FnZShlLCBtZXNzYWdlcywgY2hhbm5lbEFjdGl2ZSApIHsgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgaWYoIW1lc3NhZ2VzIHx8ICFtZXNzYWdlcy5sZW5ndGgpe1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgdmFyIGRvbVNjcm9sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtc2Nyb2xsLXRvLWJvdHRvbVwiKVxyXG4gICAgY29uc29sZS5sb2coZG9tU2Nyb2xsLnNjcm9sbEhlaWdodCwgZG9tU2Nyb2xsLmNsaWVudEhlaWdodCArIFwibGlzdGVuU2Nyb2xsTWVzc2FnZVwiKVxyXG4gICAgaWYgKCQoZSkuc2Nyb2xsVG9wKCkgKyBcclxuICAgICAgICAkKGUpLmlubmVySGVpZ2h0KCkgPj0gIFxyXG4gICAgICAgICQoZSlbMF0uc2Nyb2xsSGVpZ2h0KSB7IFxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlzLXdyaXRlLW1lc3NhZ2VcIikuY2xhc3NMaXN0LmFkZChcImZvbGxvdy1jb252ZXJzYXRpb25cIilcclxuICAgICAgICAgICAgLy8vIGNoZWNrIG1lc3NhZ2UgdW5yZWFkXHJcbiAgICAgICAgICAgIHZhciBleGlzdE5vbmVSZWFkID0gbWVzc2FnZXMuc29tZSggZnVuY3Rpb24oIG1lc3NhZ2UgKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICFtZXNzYWdlLnJlYWRBZG1pbiAmJiAhbWVzc2FnZS50eXBlXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBpZiggZXhpc3ROb25lUmVhZCApe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coRVZFTlQuUkVBRF9NRVNTQUdFX0FMTCwgXCJsaXN0ZW5TY3JvbGxNZXNzYWdlXCIpXHJcbiAgICAgICAgICAgICAgICB2YXIgdXNlckxvY2FsID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxyXG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoRVZFTlQuUkVBRF9NRVNTQUdFX0FMTCwgeyB1c2VyIDogdXNlckxvY2FsLmlkLCBjaGFubmVsSWQ6IGNoYW5uZWxBY3RpdmUuaWQsIGNoYW5uZWxOYW1lOiBjaGFubmVsQWN0aXZlLmNoYW5uZWxOYW1lIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaXMtd3JpdGUtbWVzc2FnZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiZm9sbG93LWNvbnZlcnNhdGlvblwiKVxyXG4gICAgfSBcclxufVxyXG5cclxuIiwiXHJcbi8vIGlmKHR5cGVvZiB1c2VyRGVmYXVsdCA9PSB1bmRlZmluZWQpe1xyXG4vLyAgIHZhciB1c2VyRGVmYXVsdCA9ICdbXSdcclxuLy8gfVxyXG52YXIgY29udmVyc2F0aW9ucyA9IG51bGxcclxuaW1wb3J0IFRZUEUgZnJvbSBcIi4uL2FjdGlvbi90eXBlLmpzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGNvbnZlcnNhdGlvbnMsIGFjdGlvbikge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNhc2UgVFlQRS5TRVRURVJfQ09OVkVSU0FUSU9OX0JBQ0tVUDogXHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZFxyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufSIsIlxyXG4vLyBpZih0eXBlb2YgdXNlckRlZmF1bHQgPT0gdW5kZWZpbmVkKXtcclxuLy8gICB2YXIgdXNlckRlZmF1bHQgPSAnW10nXHJcbi8vIH1cclxudmFyIGNvbnZlcnNhdGlvbnMgPSBudWxsXHJcbmltcG9ydCBUWVBFIGZyb20gXCIuLi9hY3Rpb24vdHlwZS5qc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBjb252ZXJzYXRpb25zLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBcclxuICAgICAgICBjYXNlIFRZUEUuQ0hBTk5FTF9TRVRfQUNUSVZFOlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgaXNBY3RpdmU6IHRydWUgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgaXNBY3RpdmU6IGZhbHNlIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICBjYXNlIFRZUEUuQ0hBTk5FTF9SRUFEX01FU1NBR0UgOiBcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLm1hcCggY2hhbm5lbCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihjaGFubmVsLmlzQWN0aXZlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2VzID0gY2hhbm5lbC5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzID0gbWVzc2FnZXMubWFwKCBtZXNzYWdlID0+IHsgcmV0dXJuIHsgLi4ubWVzc2FnZSwgcmVhZEFkbWluOiB0cnVlIH0gfSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5jaGFubmVsLCBtZXNzYWdlIDogbWVzc2FnZXMgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoYW5uZWxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBjYXNlIFRZUEUuU0VUVEVSX0NPTlZFUlNBVElPTjogXHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZFxyXG5cclxuICAgICAgICBjYXNlIFRZUEUuRklMVEVSX1NPUlRfQ09OVjogXHJcblxyXG4gICAgICAgICAgICB2YXIgeyBpZHMsIGRhdGEgfSA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCBhY3Rpb24ucGF5bG9hZCApXHJcbiAgICAgICAgICAgIHZhciBjb252ICAgICAgICAgID0gW11cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlkcy5tYXAoIChpZCwgaW5kZXhJRCApICA9PiB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKCBpZCApe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGFubmVsU29ydCA9IGRhdGEuZmluZCggY2hhbm5lbCA9PmNoYW5uZWwuaWQgPT0gaWQgKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCBjaGFubmVsU29ydCApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFubmVsU29ydC5pc0FjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnYucHVzaCggY2hhbm5lbFNvcnQgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWYoIGNvbnZbMF0gKXtcclxuICAgICAgICAgICAgICAgIGNvbnZbMF0uaXNBY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNvbnZcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vL3Row6ptIGPDoWMgcmVkdWNlciBmdW50aW9uIGPhuqduIMSRxrDhu6NjIGNvbWJpbmUgdsOgbyDEkcOieVxyXG5pbXBvcnQgY29udmVyc2F0aW9ucyBmcm9tICcuL2NvbnZlcnNhdGlvbnMuanMnXHJcbmltcG9ydCBjb252ZXJzYXRpb25CYWNrdXAgZnJvbSAnLi9jb252ZXJzYXRpb24tYmFja3VwLXNlYXJjaCdcclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyLmpzJ1xyXG4vLy8vIGto4bufaSB04bqhbyAxIGJp4bq/biBiaeG7g3UgZGnhu4VuIFJFRFVDRVIgQUxMIFxyXG5jb25zdCBSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIFxyXG4gICAgdXNlciAgICAgICAgICAgICAgOiB1c2VyLFxyXG4gICAgY29udmVyc2F0aW9ucyAgICAgOiBjb252ZXJzYXRpb25zLFxyXG4gICAgY29udmVyc2F0aW9uQmFja3VwOiBjb252ZXJzYXRpb25CYWNrdXBcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IFJlZHVjZXI7IiwidmFyIHVzZXIgPSBudWxsXHJcblxyXG5pbXBvcnQgVFlQRSBmcm9tIFwiLi4vYWN0aW9uL3R5cGUuanNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gdXNlciwgYWN0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBUWVBFLlNFVFRFUl9VU0VSOlxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWRcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTIhLi9jaGF0LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMiEuL2hlYWQtaW5mby5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTIhLi9saXN0LW1lc3NhZ2Uuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0yIS4vbGlzdC11c2VyLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMiEuL21lc3NhZ2UtY2hhdC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTIhLi9zZWFyY2guc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0yIS4vc2lkZWJhci5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTIhLi9pbmRleC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9