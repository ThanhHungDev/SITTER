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
    /// check message unread
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9jaGF0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9oZWFkLWluZm8uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jaGF0L2xpc3QtbWVzc2FnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2NoYXQvbGlzdC11c2VyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9tZXNzYWdlLWNoYXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jaGF0L3NlYXJjaC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2NoYXQvc2lkZWJhci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9uL3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0L0hlYWRJbmZvLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoYXQvTGlzdE1lc3NhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvQ2hhdC9MaXN0VXNlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0L01lc3NhZ2VDaGF0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoYXQvU2VhcmNoLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoYXQvU2lkZUJhckNoYXQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvQ2hhdC9Vc2VyQ2hhdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicmFyeS9zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2VyL2NvbnZlcnNhdGlvbi1iYWNrdXAtc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2VyL2NvbnZlcnNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jaGF0L2NoYXQuc2Nzcz9hYzUxIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2NoYXQvaGVhZC1pbmZvLnNjc3M/ODMxOSIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jaGF0L2xpc3QtbWVzc2FnZS5zY3NzPzY4YTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9saXN0LXVzZXIuc2Nzcz9iNWQ3Iiwid2VicGFjazovLy8uL3NyYy9zY3NzL2NoYXQvbWVzc2FnZS1jaGF0LnNjc3M/N2NmZCIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jaGF0L3NlYXJjaC5zY3NzP2ZiNDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9zaWRlYmFyLnNjc3M/MmE5MyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9pbmRleC5zY3NzPzg3NjYiXSwibmFtZXMiOlsic2V0dGVyVXNlciIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsIlRZUEUiLCJTRVRURVJfVVNFUiIsInBheWxvYWQiLCJmZXRjaGVkIiwic2V0dGVyQ29udmVyc2F0aW9uIiwiY29udiIsIlNFVFRFUl9DT05WRVJTQVRJT04iLCJzZXR0ZXJDb252ZXJzYXRpb25CYWNrdXAiLCJTRVRURVJfQ09OVkVSU0FUSU9OX0JBQ0tVUCIsImNoYW5nZUNoYW5uZWxBY3RpdmUiLCJpZCIsIkNIQU5ORUxfU0VUX0FDVElWRSIsInJlYWRBbGxDTWVzc2FnZSIsIkNIQU5ORUxfUkVBRF9NRVNTQUdFIiwiZmlsdGVyU29ydENvbnZlcnNhdGlvbiIsIm9iamVjdElkc0FuZERhdGFCYWNrdXAiLCJGSUxURVJfU09SVF9DT05WIiwiQXBwIiwiQ29tcG9uZW50IiwiSGVhZEluZm8iLCJjb252ZXJzYXRpb25zIiwicHJvcHMiLCJjaGFubmVsQWN0aXZlIiwiZmluZCIsImNoYW5uZWwiLCJpc0FjdGl2ZSIsIkNPTkZJRyIsIlNFUlZFUl9QSFAiLCJVUkwiLCJhdmF0YXIiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiTGlzdE1lc3NhZ2UiLCJjaGFubmVsQWN0aXZlQ2hhdCIsIm1lc3NhZ2VzIiwibWVzc2FnZSIsImxzdE1lc3NhZ2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiJCIsIm9uIiwibGlzdGVuU2Nyb2xsTWVzc2FnZSIsImF1dGgiLCJtYXAiLCJrZXkiLCJMaXN0VXNlciIsIk1lc3NhZ2VDaGF0IiwibXlpbmZvIiwibmFtZSIsInVzZXJJbmZvIiwidHlwZU1lc3NhZ2UiLCJzdHlsZSIsIlRJTUVfRElFX0ZJTEUiLCJ0aW1lIiwiRGF0ZSIsImNyZWF0ZWRBdCIsImF0dGFjaG1lbnQiLCJhdHRhY2hFbGVtZW50IiwiaW5kZXgiLCJnZXRUaW1lIiwidXJsIiwiY29udGVudCIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsInJlYWRBZG1pbiIsIlNlYXJjaCIsInN0YXRlIiwiaHVuZyIsInNlYXJjaFVzZXIiLCJiaW5kIiwiZSIsIl90aGlzIiwiYmFja3VwRGF0YSIsImNvbnZlcnNhdGlvbkJhY2t1cCIsImxpc3ROYW1lIiwidGV4dCIsInRhcmdldCIsInZhbHVlIiwib3V0cHV0Iiwic3BsaXQiLCJ0cmltIiwiZGlzcGF0Y2giLCJjbGVhclRpbWVvdXQiLCJvYmoiLCJzb3J0IiwicHVzaCIsIml0ZW0iLCJzZWFyY2giLCJ0b1VwcGVyQ2FzZSIsImluY2x1ZGVzIiwic2V0U3RhdGUiLCJzZXRUaW1lb3V0IiwiYSIsImIiLCJsc3RJZFNvcnRlZCIsImlkcyIsImRhdGEiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjb25uZWN0IiwiU2lkZUJhckNoYXQiLCJpbmZvciIsImxlbmd0aCIsIlVzZXJDaGF0IiwiY2hhbmdlQWN0aXZlVXNlciIsImNsYXNzQWN0aXZlT25saW5lIiwib25saW5lIiwiY2xhc3NBY3RpdmVNZXNzYWdlIiwic2xpY2UiLCJsYXN0SXRlbSIsIm11bmJlck5vbmVSZWFkIiwiZmlsdGVyIiwiQ2hhdCIsIlRPS0VOX1JFRkVTSF9ET00iLCJyZWZyZXNoIiwiZ2V0QXR0cmlidXRlIiwidXNlcklkIiwiU0VSVkVSIiwiQVNTRVQiLCJwYXJhbXMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInNlYXJjaFBhcmFtcyIsImFwcGVuZCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzcG9uc2UiLCJjb2RlIiwiRXJyb3IiLCJlcnJvciIsImFsZXJ0IiwiZXhpc3ROb25lUmVhZCIsInNvbWUiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImxvY2FsIiwibG9jYWxfaXAiLCJsb2NhbF9wb3J0IiwicGVlcl9wb3J0IiwiUE9SVCIsIkRPTUFJTiIsIklQIiwiUEVFUl9QT1JUIiwiUFJPVE9DT0wiLCJwb3J0X3VybCIsInByb3RvY29sIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlJlZHVjZXIiLCJzdWJzY3JpYmUiLCJnZXRTdGF0ZSIsIlN0b3JhZ2UiLCJSZWFjdERPTSIsInJlbmRlciIsInNvY2tldCIsIkVWRU5UIiwiQ09ORklHX0VWRU5UIiwiZG9tU2Nyb2xsIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsVG9wIiwiaW5uZXJIZWlnaHQiLCJSRUFEX01FU1NBR0VfQUxMIiwidXNlckxvY2FsIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZW1pdCIsImNoYW5uZWxJZCIsImNoYW5uZWxOYW1l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LFVBQVUsbUJBQU8sQ0FBQyx5SkFBOEU7QUFDaEcsMEJBQTBCLG1CQUFPLENBQUMsa1BBQTRIOztBQUU5Sjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQzs7Ozs7Ozs7Ozs7QUNsQkEsVUFBVSxtQkFBTyxDQUFDLHlKQUE4RTtBQUNoRywwQkFBMEIsbUJBQU8sQ0FBQyxzT0FBc0g7O0FBRXhKOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7OztBQ2xCQSxVQUFVLG1CQUFPLENBQUMseUpBQThFO0FBQ2hHLDBCQUEwQixtQkFBTyxDQUFDLHdPQUF1SDs7QUFFeko7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0M7Ozs7Ozs7Ozs7O0FDbEJBLFVBQVUsbUJBQU8sQ0FBQyxzSkFBMkU7QUFDN0YsMEJBQTBCLG1CQUFPLENBQUMseU5BQStHOztBQUVqSjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQyIsImZpbGUiOiJqcy9pbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC5qc1wiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHcmVhdCBWaWJlc1xcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvR3JlYXRfVmliZXMvR3JlYXRWaWJlcy1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXVsaVxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvTXVsaS9NdWxpLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXJjaGl2by1NZWRpdW1cXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0FyY2hpdm8vQXJjaGl2by1NZWRpdW0udHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCZW5jaE5pbmUtUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvQmVuY2hOaW5lL0JlbmNoTmluZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2F3YXJhYmktTWluY2hvLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L1Nhd2FyYWJpX01pbmNoby9TYXdhcmFiaU1pbmNoby1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG4uYmctY2hhdC10ZW1hbGF0ZSB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ud3JhcHBlci1wYWdlLWNoYXQge1xcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XFxufVxcbi53cmFwcGVyLXBhZ2UtY2hhdDphZnRlciB7XFxuICBjbGVhcjogYm90aDtcXG4gIGNvbnRlbnQ6IFxcXCIuXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAwO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHcmVhdCBWaWJlc1xcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvR3JlYXRfVmliZXMvR3JlYXRWaWJlcy1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXVsaVxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvTXVsaS9NdWxpLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXJjaGl2by1NZWRpdW1cXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0FyY2hpdm8vQXJjaGl2by1NZWRpdW0udHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCZW5jaE5pbmUtUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvQmVuY2hOaW5lL0JlbmNoTmluZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2F3YXJhYmktTWluY2hvLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L1Nhd2FyYWJpX01pbmNoby9TYXdhcmFiaU1pbmNoby1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3ODRiO1xcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyAudXNlci1hY3RpdmUtY2hhdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XFxuICBtaW4taGVpZ2h0OiA3NXB4O1xcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyAudXNlci1hY3RpdmUtY2hhdCAuc3RhdGUtYXZhdGFyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBtaW4td2lkdGg6IDUwcHg7XFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxufVxcbi5jb21wb25lbnQtaGVhZC1pbmZvIC51c2VyLWFjdGl2ZS1jaGF0IC5zdGF0ZS1hdmF0YXIgaW1nIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbWluLXdpZHRoOiA1MHB4O1xcbiAgbWluLWhlaWdodDogNTBweDtcXG59XFxuLmNvbXBvbmVudC1oZWFkLWluZm8gLnVzZXItYWN0aXZlLWNoYXQgLnRleHQtaW5mbyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDdweCA3cHggN3B4IDU1cHg7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmNvbXBvbmVudC1oZWFkLWluZm8gLnVzZXItYWN0aXZlLWNoYXQgLnRleHQtaW5mbyAubmFtZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcbi5jb21wb25lbnQtaGVhZC1pbmZvIC51c2VyLWFjdGl2ZS1jaGF0IC50ZXh0LWluZm8gLnRpbWUtb25saW5lIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6ICM2Yzc1N2Q7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyAudXNlci1hY3RpdmUtY2hhdCAudGV4dC1pbmZvIC50aW1lLW9ubGluZS5hY3RpdmUtbm93IHtcXG4gIGNvbG9yOiAjOGJjMzRhO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHcmVhdCBWaWJlc1xcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvR3JlYXRfVmliZXMvR3JlYXRWaWJlcy1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXVsaVxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvTXVsaS9NdWxpLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXJjaGl2by1NZWRpdW1cXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0FyY2hpdm8vQXJjaGl2by1NZWRpdW0udHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCZW5jaE5pbmUtUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvQmVuY2hOaW5lL0JlbmNoTmluZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2F3YXJhYmktTWluY2hvLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L1Nhd2FyYWJpX01pbmNoby9TYXdhcmFiaU1pbmNoby1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSB7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiA3MCU7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlOWVjZWY7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICBzY3JvbGxiYXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKSAjRjVGNUY1O1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluICFpbXBvcnRhbnQ7XFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTphZnRlciB7XFxuICBjbGVhcjogYm90aDtcXG4gIGNvbnRlbnQ6IFxcXCIuXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAwO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOjotbW96LXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOjotbW96LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTo6LW8tc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6Oi1vLXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLW8tYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6Oi1tcy1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTo6LW1zLXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLW1zLWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuXFxuLnRpY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1pbi13aWR0aDogMzBweDtcXG59XFxuLnRpY29udGFpbmVyIC50aWJsb2NrIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxN3B4O1xcbn1cXG4udGljb250YWluZXIgLnRpYmxvY2sgLnRpZG90IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZGI1YmQ7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogbWVyY3VyeVR5cGluZ0FuaW1hdGlvbiAxLjVzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xcbiAgYW5pbWF0aW9uOiBtZXJjdXJ5VHlwaW5nQW5pbWF0aW9uIDEuNXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDZweDtcXG4gIG1hcmdpbi1yaWdodDogNHB4O1xcbiAgd2lkdGg6IDZweDtcXG59XFxuLnRpY29udGFpbmVyIC50aWJsb2NrIC50aWRvdDpudGgtY2hpbGQoMSkge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDE1MG1zO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAyMDBtcztcXG59XFxuLnRpY29udGFpbmVyIC50aWJsb2NrIC50aWRvdDpudGgtY2hpbGQoMikge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMwMG1zO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAzMDBtcztcXG59XFxuLnRpY29udGFpbmVyIC50aWJsb2NrIC50aWRvdDpudGgtY2hpbGQoMykge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDQ1MG1zO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiA0MDBtcztcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIG1lcmN1cnlUeXBpbmdBbmltYXRpb24ge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgfVxcbiAgMjglIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxuICB9XFxuICA0NCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxuICAuY29tcG9uZW50LWxpc3QtbWVzc2FnZSB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5jb21wb25lbnQtbGlzdC1tZXNzYWdlIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDc1cHgpO1xcbiAgfVxcbiAgLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlIHtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gIH1cXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR3JlYXQgVmliZXNcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0dyZWF0X1ZpYmVzL0dyZWF0VmliZXMtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk11bGlcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L011bGkvTXVsaS1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkFyY2hpdm8tTWVkaXVtXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9BcmNoaXZvL0FyY2hpdm8tTWVkaXVtLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmVuY2hOaW5lLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0JlbmNoTmluZS9CZW5jaE5pbmUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNhd2FyYWJpLU1pbmNoby1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9TYXdhcmFiaV9NaW5jaG8vU2F3YXJhYmlNaW5jaG8tUmVndWxhci50dGZcXFwiKTtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmZmM3O1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC5ub25lLXJlYWQtbWVzc2FnZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHBhZGRpbmc6IDNweCA2cHg7XFxuICBib3R0b206IDMwJTtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcXG4gIGNvbG9yOiAjZTllY2VmO1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQge1xcbiAgbWluLWhlaWdodDogNTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQuYWN0aXZlLW1lc3NhZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2Nzg0YjtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0LmFjdGl2ZS1tZXNzYWdlIC50ZXh0LWluZm8ge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdC5hY3RpdmUgLnN0YXRlLWF2YXRhciB7XFxuICBib3JkZXItY29sb3I6ICMyOGE3NDU7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdC5hY3RpdmUgLnN0YXRlLWF2YXRhcjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQgLnN0YXRlLWF2YXRhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbWluLXdpZHRoOiA1MHB4O1xcbiAgbWluLWhlaWdodDogNTBweDtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQgLnN0YXRlLWF2YXRhcjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiA1cHg7XFxuICB6LWluZGV4OiA1O1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FkYjViZDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQgLnN0YXRlLWF2YXRhciBpbWcge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBtaW4td2lkdGg6IDUwcHg7XFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQgLnRleHQtaW5mbyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDAgMCAwIDU1cHg7XFxuICBjb2xvcjogIzRiNTE1ZDtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC50ZXh0LWluZm8gLm5hbWUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQgLnRleHQtaW5mbyAubGFzdC1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0LmFjdGl2ZS1tZXNzYWdlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FkYjViZDtcXG4gIH1cXG4gIC5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdCAudGV4dC1pbmZvIHtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIH1cXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR3JlYXQgVmliZXNcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0dyZWF0X1ZpYmVzL0dyZWF0VmliZXMtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk11bGlcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L011bGkvTXVsaS1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkFyY2hpdm8tTWVkaXVtXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9BcmNoaXZvL0FyY2hpdm8tTWVkaXVtLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmVuY2hOaW5lLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0JlbmNoTmluZS9CZW5jaE5pbmUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNhd2FyYWJpLU1pbmNoby1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9TYXdhcmFiaV9NaW5jaG8vU2F3YXJhYmlNaW5jaG8tUmVndWxhci50dGZcXFwiKTtcXG59XFxuLmxlZnQtbWVzc2FnZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxufVxcbi5sZWZ0LW1lc3NhZ2UgLnJlYWQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDVweDtcXG59XFxuXFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQge1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQ6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMDtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQudHlwaW5nLWNoYXQtbWVzc3NhZ2Uge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYWRiNWJkO1xcbiAgbGVmdDogNTAlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0LnR5cGluZy1jaGF0LW1lc3NzYWdlLnNob3cge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0LnR5cGluZy1jaGF0LW1lc3NzYWdlIC50eXBpbmctbWVzc2FnZSAudGV4dCB7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIHBhZGRpbmc6IDJweCAxMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwOmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDA7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwLmJ5LW1lIC5hdmF0YXIge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cC5ieS1tZSAubWVzc2FnZS1jb250ZW50IHtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAuYnktbWUgLm1lc3NhZ2UtY29udGVudCAudGV4dCB7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZmZjNztcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAuYnktbWUgLkVNT0pJIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAuYXZhdGFyIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgbWluLXdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAuYXZhdGFyIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQudHlwaW5nLW1lc3NhZ2Uge1xcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQgLklNQUdFIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudCAuSU1BR0UgLndyYXBwZXItYXR0YWNobWVudCB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXgtd2lkdGg6IDIwMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAubWVzc2FnZS1jb250ZW50IC5JTUFHRSAud3JhcHBlci1hdHRhY2htZW50IGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudCAuSU1BR0UgLndyYXBwZXItYXR0YWNobWVudCAuZG93bmxvYWQtZmlsZS1hdHRhY2htZW50IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNSU7XFxuICByaWdodDogNSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMmU2O1xcbiAgY29sb3I6ICMwZDQ3YTE7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwYWRkaW5nOiAzcHggMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZDQ3YTE7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQgLklNQUdFIC53cmFwcGVyLWF0dGFjaG1lbnQgLmRvd25sb2FkLWZpbGUtYXR0YWNobWVudCBpIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudCAuRU1PSkkge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudCAudGV4dCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAwIDE1cHggMTVweCAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjZTllOTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudCAudGV4dC5FTU9KSSB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAubWVzc2FnZS1jb250ZW50IC50aW1lLWxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAudHlwaW5nLW1lc3NhZ2UgLnRleHQge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAudHlwaW5nLW1lc3NhZ2UgLnR5cGluZy10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR3JlYXQgVmliZXNcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0dyZWF0X1ZpYmVzL0dyZWF0VmliZXMtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk11bGlcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L011bGkvTXVsaS1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkFyY2hpdm8tTWVkaXVtXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9BcmNoaXZvL0FyY2hpdm8tTWVkaXVtLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmVuY2hOaW5lLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0JlbmNoTmluZS9CZW5jaE5pbmUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNhd2FyYWJpLU1pbmNoby1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9TYXdhcmFiaV9NaW5jaG8vU2F3YXJhYmlNaW5jaG8tUmVndWxhci50dGZcXFwiKTtcXG59XFxuLmNvbXBvbmVudC1zZWFyY2gtdXNlciB7XFxuICBwYWRkaW5nOiAwIDAgNXB4IDVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmNvbXBvbmVudC1zZWFyY2gtdXNlciAuc2VhcmNoLXVzZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2Yzc1N2Q7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDhweCA4cHggOHB4IDMwcHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogIzZjNzU3ZDtcXG4gIGZvbnQtc3R5bGU6IFxcXCJBcmNoaXZvLU1lZGl1bVxcXCI7XFxufVxcbi5jb21wb25lbnQtc2VhcmNoLXVzZXIgLnNlYXJjaC11c2VyOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogIzBkNDdhMTtcXG4gIGNvbG9yOiAjMGQ0N2ExO1xcbn1cXG4uY29tcG9uZW50LXNlYXJjaC11c2VyIC5zZWFyY2gtdXNlcjpmb2N1cyB+IC5oZXJvLWljb24ge1xcbiAgY29sb3I6ICMwZDQ3YTE7XFxufVxcbi5jb21wb25lbnQtc2VhcmNoLXVzZXIgLmhlcm8taWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxMHB4O1xcbiAgYm90dG9tOiAxMHB4O1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgY29sb3I6ICM2Yzc1N2Q7XFxuICByaWdodDogMTBweDtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5jb21wb25lbnQtc2VhcmNoLXVzZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHcmVhdCBWaWJlc1xcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvR3JlYXRfVmliZXMvR3JlYXRWaWJlcy1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXVsaVxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvTXVsaS9NdWxpLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXJjaGl2by1NZWRpdW1cXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0FyY2hpdm8vQXJjaGl2by1NZWRpdW0udHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCZW5jaE5pbmUtUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvQmVuY2hOaW5lL0JlbmNoTmluZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2F3YXJhYmktTWluY2hvLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L1Nhd2FyYWJpX01pbmNoby9TYXdhcmFiaU1pbmNoby1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdCB7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiAzMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xcbiAgc2Nyb2xsYmFyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMykgI0Y1RjVGNTtcXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbiAhaW1wb3J0YW50O1xcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0OjotbW96LXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQ6Oi1tb3otc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQ6Oi1vLXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQ6Oi1vLXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLW8tYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdDo6LW1zLXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQ6Oi1tcy1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1tcy1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0ICoge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLm15aW5mbyB7XFxuICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcXG4gIG1pbi1oZWlnaHQ6IDc1cHg7XFxufVxcbi5teWluZm8gLmF2YXRhciAuc3RhdGUtYXZhdGFyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG4ubXlpbmZvIC5hdmF0YXIgLnN0YXRlLWF2YXRhcjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDFweDtcXG4gIGxlZnQ6IDFweDtcXG4gIHJpZ2h0OiAxcHg7XFxuICBib3R0b206IDFweDtcXG59XFxuLm15aW5mbyAuYXZhdGFyIC5zdGF0ZS1hdmF0YXIuYWN0aXZlLW9ubGluZSB7XFxuICBib3JkZXI6IDJweCBkb3VibGUgIzAwYzg1MTtcXG59XFxuLm15aW5mbyAuYXZhdGFyIC5zdGF0ZS1hdmF0YXIgaW1nIHtcXG4gIG1heC13aWR0aDogNDBweDtcXG4gIG1heC1oZWlnaHQ6IDQwcHg7XFxufVxcbi5teWluZm8gLmF2YXRhciAubmFtZSB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgbWF4LXdpZHRoOiAyN2NoO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjb2xvcjogIzBkNDdhMTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcbiAgLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQge1xcbiAgICB3aWR0aDogNDAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuY29tcG9uZW50LXNpZGViYXItY2hhdCB7XFxuICAgIHdpZHRoOiA3NXB4O1xcbiAgfVxcbiAgLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQgLnVzZXItY2hhdCAuc3RhdGUtYXZhdGFyIHtcXG4gICAgbGVmdDogNTAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpICFpbXBvcnRhbnQ7XFxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgIWltcG9ydGFudDtcXG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgIWltcG9ydGFudDtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAubXlpbmZvIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gIH1cXG4gIC5teWluZm8gLmF2YXRhciAuc3RhdGUtYXZhdGFyIGltZyB7XFxuICAgIG1heC13aWR0aDogMzVweDtcXG4gICAgbWF4LWhlaWdodDogMzVweDtcXG4gIH1cXG4gIC5teWluZm8gLmF2YXRhciAubmFtZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkdyZWF0IFZpYmVzXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9HcmVhdF9WaWJlcy9HcmVhdFZpYmVzLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNdWxpXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9NdWxpL011bGktVmFyaWFibGVGb250X3dnaHQudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmNoaXZvLU1lZGl1bVxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvQXJjaGl2by9BcmNoaXZvLU1lZGl1bS50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJlbmNoTmluZS1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9CZW5jaE5pbmUvQmVuY2hOaW5lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTYXdhcmFiaS1NaW5jaG8tUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvU2F3YXJhYmlfTWluY2hvL1Nhd2FyYWJpTWluY2hvLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbi8qKlxcbiogZGlzcGxheVxcbiovXFxuKixcXG46YWZ0ZXIsXFxuOmJlZm9yZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46Zm9jdXMge1xcbiAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kLW5vbmUge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZC1pbmxpbmUtYmxvY2sge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kLWJsb2NrIHtcXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kLXRhYmxlIHtcXG4gIGRpc3BsYXk6IHRhYmxlICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kLXRhYmxlLXJvdyB7XFxuICBkaXNwbGF5OiB0YWJsZS1yb3cgIWltcG9ydGFudDtcXG59XFxuXFxuLmQtdGFibGUtY2VsbCB7XFxuICBkaXNwbGF5OiB0YWJsZS1jZWxsICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kLWZsZXgge1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3ggIWltcG9ydGFudDtcXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXG59XFxuXFxuLmQtaW5saW5lLWZsZXgge1xcbiAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94ICFpbXBvcnRhbnQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaXRhbGljIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYyAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubm90LWl0YWxpYyB7XFxuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcXG59XFxuXFxuLnVwcGVyY2FzZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XFxufVxcblxcbi5sb3dlcmNhc2Uge1xcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uY2FwaXRhbGl6ZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubm9ybWFsLWNhc2Uge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLnVuZGVybGluZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubGluZS10aHJvdWdoIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoICFpbXBvcnRhbnQ7XFxufVxcblxcbi5uby11bmRlcmxpbmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uZm9udC1oYWlybGluZSB7XFxuICBmb250LXdlaWdodDogMTAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mb250LXRoaW4ge1xcbiAgZm9udC13ZWlnaHQ6IDIwMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZm9udC1saWdodCB7XFxuICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mb250LW5vcm1hbCB7XFxuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mb250LW1lZGl1bSB7XFxuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mb250LXNlbWlib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcXG59XFxuXFxuLmZvbnQtYm9sZCB7XFxuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mb250LWV4dHJhYm9sZCB7XFxuICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mb250LWJsYWNrIHtcXG4gIGZvbnQtd2VpZ2h0OiA5MDAgIWltcG9ydGFudDtcXG59XFxuXFxuLnRleHQtY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRleHQtcmlnaHQge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi50ZXh0LWxlZnQge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLnZlcnRpY2FsLWFsaWduLW1pZGRsZSB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4ubWctYXV0byB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLnJvdW5kZWQtY2lyY2xlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYm9yZGVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTYgIWltcG9ydGFudDtcXG59XFxuXFxuLmJvcmRlci10b3Age1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTYgIWltcG9ydGFudDtcXG59XFxuXFxuLmJvcmRlci1yaWdodCB7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGVlMmU2ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ib3JkZXItYm90dG9tIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ib3JkZXItbGVmdCB7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZWUyZTYgIWltcG9ydGFudDtcXG59XFxuXFxuLnRleHQtY29sb3ItcmVkIHtcXG4gIGNvbG9yOiAjZjQ0MzM2O1xcbn1cXG5cXG4udGV4dC1jb2xvci1waW5rIHtcXG4gIGNvbG9yOiAjZTkxZTYzO1xcbn1cXG5cXG4udGV4dC1jb2xvci1wdXJwbGUge1xcbiAgY29sb3I6ICM5YzI3YjA7XFxufVxcblxcbi50ZXh0LWNvbG9yLWRlZXAtcHVycGxlIHtcXG4gIGNvbG9yOiAjNjczYWI3O1xcbn1cXG5cXG4udGV4dC1jb2xvci1pbmRpZ28ge1xcbiAgY29sb3I6ICMzZjUxYjU7XFxufVxcblxcbi50ZXh0LWNvbG9yLWJsdWUge1xcbiAgY29sb3I6ICMyMTk2ZjM7XFxufVxcblxcbi50ZXh0LWNvbG9yLWxpZ2h0LWJsdWUge1xcbiAgY29sb3I6ICMwM2E5ZjQ7XFxufVxcblxcbi50ZXh0LWNvbG9yLWN5YW4ge1xcbiAgY29sb3I6ICMwMGJjZDQ7XFxufVxcblxcbi50ZXh0LWNvbG9yLXRlYWwge1xcbiAgY29sb3I6ICMwMDk2ODg7XFxufVxcblxcbi50ZXh0LWNvbG9yLWdyZWVuIHtcXG4gIGNvbG9yOiAjNGNhZjUwO1xcbn1cXG5cXG4udGV4dC1jb2xvci1saWdodC1ncmVlbiB7XFxuICBjb2xvcjogIzhiYzM0YTtcXG59XFxuXFxuLnRleHQtY29sb3ItbGltZSB7XFxuICBjb2xvcjogI2NkZGMzOTtcXG59XFxuXFxuLnRleHQtY29sb3IteWVsbG93IHtcXG4gIGNvbG9yOiAjZmZlYjNiO1xcbn1cXG5cXG4udGV4dC1jb2xvci1hbWJlciB7XFxuICBjb2xvcjogI2ZmYzEwNztcXG59XFxuXFxuLnRleHQtY29sb3Itb3JhbmdlIHtcXG4gIGNvbG9yOiAjZmY5ODAwO1xcbn1cXG5cXG4udGV4dC1jb2xvci1kZWVwLW9yYW5nZSB7XFxuICBjb2xvcjogI2ZmNTcyMjtcXG59XFxuXFxuLnRleHQtY29sb3ItYnJvd24ge1xcbiAgY29sb3I6ICM3OTU1NDg7XFxufVxcblxcbi50ZXh0LWNvbG9yLWJsYWNrIHtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4udGV4dC1jb2xvci13aGl0ZSB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLnRleHQtY29sb3ItZ3JleSB7XFxuICBjb2xvcjogIzllOWU5ZTtcXG59XFxuXFxuLnRleHQtY29sb3ItYmx1ZS1ncmV5IHtcXG4gIGNvbG9yOiAjNjA3ZDhiO1xcbn1cXG5cXG4udGV4dC1jb2xvci1wcmltYXJ5LWNvbG9yLWRhcmsge1xcbiAgY29sb3I6ICMwZDQ3YTE7XFxufVxcblxcbi50ZXh0LWNvbG9yLXNlY29uZGFyeS1jb2xvciB7XFxuICBjb2xvcjogI2FhNjZjYztcXG59XFxuXFxuLnRleHQtY29sb3Itc2Vjb25kYXJ5LWNvbG9yLWRhcmsge1xcbiAgY29sb3I6ICM5OTMzY2M7XFxufVxcblxcbi50ZXh0LWNvbG9yLWRlZmF1bHQtY29sb3Ige1xcbiAgY29sb3I6ICMyYmJiYWQ7XFxufVxcblxcbi50ZXh0LWNvbG9yLWRlZmF1bHQtY29sb3ItZGFyayB7XFxuICBjb2xvcjogIzAwNjk1YztcXG59XFxuXFxuLnRleHQtY29sb3ItaW5mby1jb2xvciB7XFxuICBjb2xvcjogIzMzYjVlNTtcXG59XFxuXFxuLnRleHQtY29sb3ItaW5mby1jb2xvci1kYXJrIHtcXG4gIGNvbG9yOiAjMDA5OWNjO1xcbn1cXG5cXG4udGV4dC1jb2xvci1zdWNjZXNzLWNvbG9yIHtcXG4gIGNvbG9yOiAjMDBjODUxO1xcbn1cXG5cXG4udGV4dC1jb2xvci1zdWNjZXNzLWNvbG9yLWRhcmsge1xcbiAgY29sb3I6ICMwMDdlMzM7XFxufVxcblxcbi50ZXh0LWNvbG9yLXdhcm5pbmctY29sb3Ige1xcbiAgY29sb3I6ICNmZmJiMzM7XFxufVxcblxcbi50ZXh0LWNvbG9yLXdhcm5pbmctY29sb3ItZGFyayB7XFxuICBjb2xvcjogI2ZmODgwMDtcXG59XFxuXFxuLnRleHQtY29sb3ItZGFuZ2VyLWNvbG9yIHtcXG4gIGNvbG9yOiAjZmYzNTQ3O1xcbn1cXG5cXG4udGV4dC1jb2xvci1kYW5nZXItY29sb3ItZGFyayB7XFxuICBjb2xvcjogI2NjMDAwMDtcXG59XFxuXFxuLnRleHQtY29sb3ItZWxlZ2FudC1jb2xvciB7XFxuICBjb2xvcjogIzJlMmUyZTtcXG59XFxuXFxuLnRleHQtY29sb3ItZWxlZ2FudC1jb2xvci1kYXJrIHtcXG4gIGNvbG9yOiAjMjEyMTIxO1xcbn1cXG5cXG4udGV4dC1jb2xvci1zdHlsaXNoLWNvbG9yIHtcXG4gIGNvbG9yOiAjNGI1MTVkO1xcbn1cXG5cXG4udGV4dC1jb2xvci1zdHlsaXNoLWNvbG9yLWRhcmsge1xcbiAgY29sb3I6ICMzZTQ1NTE7XFxufVxcblxcbi50ZXh0LWNvbG9yLXVuaXF1ZS1jb2xvciB7XFxuICBjb2xvcjogIzNmNzI5YjtcXG59XFxuXFxuLnRleHQtY29sb3ItdW5pcXVlLWNvbG9yLWRhcmsge1xcbiAgY29sb3I6ICMxYzIzMzE7XFxufVxcblxcbi50ZXh0LWNvbG9yLXNwZWNpYWwtY29sb3Ige1xcbiAgY29sb3I6ICMzNzQ3NGY7XFxufVxcblxcbi50ZXh0LWNvbG9yLXNwZWNpYWwtY29sb3ItZGFyayB7XFxuICBjb2xvcjogIzI2MzIzODtcXG59XFxuXFxuLnRleHQtY29sb3ItcHJpbWFyeSB7XFxuICBjb2xvcjogIzQyODVmNDtcXG59XFxuXFxuLnRleHQtY29sb3ItZGFuZ2VyIHtcXG4gIGNvbG9yOiAjZmYzNTQ3O1xcbn1cXG5cXG4udGV4dC1jb2xvci13YXJuaW5nIHtcXG4gIGNvbG9yOiAjZmZiYjMzO1xcbn1cXG5cXG4udGV4dC1jb2xvci1zdWNjZXNzIHtcXG4gIGNvbG9yOiAjMDBjODUxO1xcbn1cXG5cXG4udGV4dC1jb2xvci1pbmZvIHtcXG4gIGNvbG9yOiAjMzNiNWU1O1xcbn1cXG5cXG4udGV4dC1jb2xvci1kZWZhdWx0IHtcXG4gIGNvbG9yOiAjMmJiYmFkO1xcbn1cXG5cXG4udGV4dC1jb2xvci1zZWNvbmRhcnkge1xcbiAgY29sb3I6ICNhYTY2Y2M7XFxufVxcblxcbi50ZXh0LWNvbG9yLWRhcmsge1xcbiAgY29sb3I6ICMyMTIxMjE7XFxufVxcblxcbi50ZXh0LWNvbG9yLWxpZ2h0IHtcXG4gIGNvbG9yOiAjZTBlMGUwO1xcbn1cXG5cXG4udGV4dC1jb2xvci1ncmV5LXgge1xcbiAgY29sb3I6ICNmOWY5Zjk7XFxufVxcblxcbi5ib3JkZXItY29sb3ItcmVkIHtcXG4gIGJvcmRlci1jb2xvcjogI2Y0NDMzNjtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1waW5rIHtcXG4gIGJvcmRlci1jb2xvcjogI2U5MWU2MztcXG59XFxuXFxuLmJvcmRlci1jb2xvci1wdXJwbGUge1xcbiAgYm9yZGVyLWNvbG9yOiAjOWMyN2IwO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWRlZXAtcHVycGxlIHtcXG4gIGJvcmRlci1jb2xvcjogIzY3M2FiNztcXG59XFxuXFxuLmJvcmRlci1jb2xvci1pbmRpZ28ge1xcbiAgYm9yZGVyLWNvbG9yOiAjM2Y1MWI1O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWJsdWUge1xcbiAgYm9yZGVyLWNvbG9yOiAjMjE5NmYzO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWxpZ2h0LWJsdWUge1xcbiAgYm9yZGVyLWNvbG9yOiAjMDNhOWY0O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWN5YW4ge1xcbiAgYm9yZGVyLWNvbG9yOiAjMDBiY2Q0O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXRlYWwge1xcbiAgYm9yZGVyLWNvbG9yOiAjMDA5Njg4O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWdyZWVuIHtcXG4gIGJvcmRlci1jb2xvcjogIzRjYWY1MDtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1saWdodC1ncmVlbiB7XFxuICBib3JkZXItY29sb3I6ICM4YmMzNGE7XFxufVxcblxcbi5ib3JkZXItY29sb3ItbGltZSB7XFxuICBib3JkZXItY29sb3I6ICNjZGRjMzk7XFxufVxcblxcbi5ib3JkZXItY29sb3IteWVsbG93IHtcXG4gIGJvcmRlci1jb2xvcjogI2ZmZWIzYjtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1hbWJlciB7XFxuICBib3JkZXItY29sb3I6ICNmZmMxMDc7XFxufVxcblxcbi5ib3JkZXItY29sb3Itb3JhbmdlIHtcXG4gIGJvcmRlci1jb2xvcjogI2ZmOTgwMDtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1kZWVwLW9yYW5nZSB7XFxuICBib3JkZXItY29sb3I6ICNmZjU3MjI7XFxufVxcblxcbi5ib3JkZXItY29sb3ItYnJvd24ge1xcbiAgYm9yZGVyLWNvbG9yOiAjNzk1NTQ4O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWJsYWNrIHtcXG4gIGJvcmRlci1jb2xvcjogIzAwMDtcXG59XFxuXFxuLmJvcmRlci1jb2xvci13aGl0ZSB7XFxuICBib3JkZXItY29sb3I6ICNmZmY7XFxufVxcblxcbi5ib3JkZXItY29sb3ItZ3JleSB7XFxuICBib3JkZXItY29sb3I6ICM5ZTllOWU7XFxufVxcblxcbi5ib3JkZXItY29sb3ItYmx1ZS1ncmV5IHtcXG4gIGJvcmRlci1jb2xvcjogIzYwN2Q4YjtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1wcmltYXJ5LWNvbG9yLWRhcmsge1xcbiAgYm9yZGVyLWNvbG9yOiAjMGQ0N2ExO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXNlY29uZGFyeS1jb2xvciB7XFxuICBib3JkZXItY29sb3I6ICNhYTY2Y2M7XFxufVxcblxcbi5ib3JkZXItY29sb3Itc2Vjb25kYXJ5LWNvbG9yLWRhcmsge1xcbiAgYm9yZGVyLWNvbG9yOiAjOTkzM2NjO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWRlZmF1bHQtY29sb3Ige1xcbiAgYm9yZGVyLWNvbG9yOiAjMmJiYmFkO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWRlZmF1bHQtY29sb3ItZGFyayB7XFxuICBib3JkZXItY29sb3I6ICMwMDY5NWM7XFxufVxcblxcbi5ib3JkZXItY29sb3ItaW5mby1jb2xvciB7XFxuICBib3JkZXItY29sb3I6ICMzM2I1ZTU7XFxufVxcblxcbi5ib3JkZXItY29sb3ItaW5mby1jb2xvci1kYXJrIHtcXG4gIGJvcmRlci1jb2xvcjogIzAwOTljYztcXG59XFxuXFxuLmJvcmRlci1jb2xvci1zdWNjZXNzLWNvbG9yIHtcXG4gIGJvcmRlci1jb2xvcjogIzAwYzg1MTtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1zdWNjZXNzLWNvbG9yLWRhcmsge1xcbiAgYm9yZGVyLWNvbG9yOiAjMDA3ZTMzO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXdhcm5pbmctY29sb3Ige1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZiYjMzO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXdhcm5pbmctY29sb3ItZGFyayB7XFxuICBib3JkZXItY29sb3I6ICNmZjg4MDA7XFxufVxcblxcbi5ib3JkZXItY29sb3ItZGFuZ2VyLWNvbG9yIHtcXG4gIGJvcmRlci1jb2xvcjogI2ZmMzU0NztcXG59XFxuXFxuLmJvcmRlci1jb2xvci1kYW5nZXItY29sb3ItZGFyayB7XFxuICBib3JkZXItY29sb3I6ICNjYzAwMDA7XFxufVxcblxcbi5ib3JkZXItY29sb3ItZWxlZ2FudC1jb2xvciB7XFxuICBib3JkZXItY29sb3I6ICMyZTJlMmU7XFxufVxcblxcbi5ib3JkZXItY29sb3ItZWxlZ2FudC1jb2xvci1kYXJrIHtcXG4gIGJvcmRlci1jb2xvcjogIzIxMjEyMTtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1zdHlsaXNoLWNvbG9yIHtcXG4gIGJvcmRlci1jb2xvcjogIzRiNTE1ZDtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1zdHlsaXNoLWNvbG9yLWRhcmsge1xcbiAgYm9yZGVyLWNvbG9yOiAjM2U0NTUxO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXVuaXF1ZS1jb2xvciB7XFxuICBib3JkZXItY29sb3I6ICMzZjcyOWI7XFxufVxcblxcbi5ib3JkZXItY29sb3ItdW5pcXVlLWNvbG9yLWRhcmsge1xcbiAgYm9yZGVyLWNvbG9yOiAjMWMyMzMxO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXNwZWNpYWwtY29sb3Ige1xcbiAgYm9yZGVyLWNvbG9yOiAjMzc0NzRmO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXNwZWNpYWwtY29sb3ItZGFyayB7XFxuICBib3JkZXItY29sb3I6ICMyNjMyMzg7XFxufVxcblxcbi5ib3JkZXItY29sb3ItcHJpbWFyeSB7XFxuICBib3JkZXItY29sb3I6ICM0Mjg1ZjQ7XFxufVxcblxcbi5ib3JkZXItY29sb3ItZGFuZ2VyIHtcXG4gIGJvcmRlci1jb2xvcjogI2ZmMzU0NztcXG59XFxuXFxuLmJvcmRlci1jb2xvci13YXJuaW5nIHtcXG4gIGJvcmRlci1jb2xvcjogI2ZmYmIzMztcXG59XFxuXFxuLmJvcmRlci1jb2xvci1zdWNjZXNzIHtcXG4gIGJvcmRlci1jb2xvcjogIzAwYzg1MTtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1pbmZvIHtcXG4gIGJvcmRlci1jb2xvcjogIzMzYjVlNTtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1kZWZhdWx0IHtcXG4gIGJvcmRlci1jb2xvcjogIzJiYmJhZDtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1zZWNvbmRhcnkge1xcbiAgYm9yZGVyLWNvbG9yOiAjYWE2NmNjO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWRhcmsge1xcbiAgYm9yZGVyLWNvbG9yOiAjMjEyMTIxO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWxpZ2h0IHtcXG4gIGJvcmRlci1jb2xvcjogI2UwZTBlMDtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1ncmV5LXgge1xcbiAgYm9yZGVyLWNvbG9yOiAjZjlmOWY5O1xcbn1cXG5cXG4uYmctY29sb3ItcmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XFxufVxcblxcbi5iZy1jb2xvci1waW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOTFlNjM7XFxufVxcblxcbi5iZy1jb2xvci1wdXJwbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljMjdiMDtcXG59XFxuXFxuLmJnLWNvbG9yLWRlZXAtcHVycGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NzNhYjc7XFxufVxcblxcbi5iZy1jb2xvci1pbmRpZ28ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcXG59XFxuXFxuLmJnLWNvbG9yLWJsdWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcXG59XFxuXFxuLmJnLWNvbG9yLWxpZ2h0LWJsdWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzYTlmNDtcXG59XFxuXFxuLmJnLWNvbG9yLWN5YW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYmNkNDtcXG59XFxuXFxuLmJnLWNvbG9yLXRlYWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcXG59XFxuXFxuLmJnLWNvbG9yLWdyZWVuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XFxufVxcblxcbi5iZy1jb2xvci1saWdodC1ncmVlbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGJjMzRhO1xcbn1cXG5cXG4uYmctY29sb3ItbGltZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RkYzM5O1xcbn1cXG5cXG4uYmctY29sb3IteWVsbG93IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmViM2I7XFxufVxcblxcbi5iZy1jb2xvci1hbWJlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xcbn1cXG5cXG4uYmctY29sb3Itb3JhbmdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjk4MDA7XFxufVxcblxcbi5iZy1jb2xvci1kZWVwLW9yYW5nZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzIyO1xcbn1cXG5cXG4uYmctY29sb3ItYnJvd24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc5NTU0ODtcXG59XFxuXFxuLmJnLWNvbG9yLWJsYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxufVxcblxcbi5iZy1jb2xvci13aGl0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uYmctY29sb3ItZ3JleSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWU5ZTllO1xcbn1cXG5cXG4uYmctY29sb3ItYmx1ZS1ncmV5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdkOGI7XFxufVxcblxcbi5iZy1jb2xvci1wcmltYXJ5LWNvbG9yLWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkNDdhMTtcXG59XFxuXFxuLmJnLWNvbG9yLXNlY29uZGFyeS1jb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWE2NmNjO1xcbn1cXG5cXG4uYmctY29sb3Itc2Vjb25kYXJ5LWNvbG9yLWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5MzNjYztcXG59XFxuXFxuLmJnLWNvbG9yLWRlZmF1bHQtY29sb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiYmJhZDtcXG59XFxuXFxuLmJnLWNvbG9yLWRlZmF1bHQtY29sb3ItZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2OTVjO1xcbn1cXG5cXG4uYmctY29sb3ItaW5mby1jb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNiNWU1O1xcbn1cXG5cXG4uYmctY29sb3ItaW5mby1jb2xvci1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk5Y2M7XFxufVxcblxcbi5iZy1jb2xvci1zdWNjZXNzLWNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGM4NTE7XFxufVxcblxcbi5iZy1jb2xvci1zdWNjZXNzLWNvbG9yLWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2UzMztcXG59XFxuXFxuLmJnLWNvbG9yLXdhcm5pbmctY29sb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmIzMztcXG59XFxuXFxuLmJnLWNvbG9yLXdhcm5pbmctY29sb3ItZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4ODAwO1xcbn1cXG5cXG4uYmctY29sb3ItZGFuZ2VyLWNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjM1NDc7XFxufVxcblxcbi5iZy1jb2xvci1kYW5nZXItY29sb3ItZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2MwMDAwO1xcbn1cXG5cXG4uYmctY29sb3ItZWxlZ2FudC1jb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyZTJlO1xcbn1cXG5cXG4uYmctY29sb3ItZWxlZ2FudC1jb2xvci1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XFxufVxcblxcbi5iZy1jb2xvci1zdHlsaXNoLWNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YjUxNWQ7XFxufVxcblxcbi5iZy1jb2xvci1zdHlsaXNoLWNvbG9yLWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlNDU1MTtcXG59XFxuXFxuLmJnLWNvbG9yLXVuaXF1ZS1jb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y3MjliO1xcbn1cXG5cXG4uYmctY29sb3ItdW5pcXVlLWNvbG9yLWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMjMzMTtcXG59XFxuXFxuLmJnLWNvbG9yLXNwZWNpYWwtY29sb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3NDc0ZjtcXG59XFxuXFxuLmJnLWNvbG9yLXNwZWNpYWwtY29sb3ItZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYzMjM4O1xcbn1cXG5cXG4uYmctY29sb3ItcHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4NWY0O1xcbn1cXG5cXG4uYmctY29sb3ItZGFuZ2VyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjM1NDc7XFxufVxcblxcbi5iZy1jb2xvci13YXJuaW5nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmJiMzM7XFxufVxcblxcbi5iZy1jb2xvci1zdWNjZXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGM4NTE7XFxufVxcblxcbi5iZy1jb2xvci1pbmZvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzM2I1ZTU7XFxufVxcblxcbi5iZy1jb2xvci1kZWZhdWx0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYmJiYWQ7XFxufVxcblxcbi5iZy1jb2xvci1zZWNvbmRhcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhNjZjYztcXG59XFxuXFxuLmJnLWNvbG9yLWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcXG59XFxuXFxuLmJnLWNvbG9yLWxpZ2h0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxufVxcblxcbi5iZy1jb2xvci1ncmV5LXgge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcXG59XFxuXFxuLnctMjUge1xcbiAgd2lkdGg6IDI1O1xcbn1cXG5cXG4udy01MCB7XFxuICB3aWR0aDogNTA7XFxufVxcblxcbi53LTU1IHtcXG4gIHdpZHRoOiA1NTtcXG59XFxuXFxuLnctNjAge1xcbiAgd2lkdGg6IDYwO1xcbn1cXG5cXG4udy02NSB7XFxuICB3aWR0aDogNjU7XFxufVxcblxcbi53LTcwIHtcXG4gIHdpZHRoOiA3MDtcXG59XFxuXFxuLnctNzUge1xcbiAgd2lkdGg6IDc1O1xcbn1cXG5cXG4udy04MCB7XFxuICB3aWR0aDogODA7XFxufVxcblxcbi53LTg1IHtcXG4gIHdpZHRoOiA4NTtcXG59XFxuXFxuLnctOTAge1xcbiAgd2lkdGg6IDkwO1xcbn1cXG5cXG4udy05NSB7XFxuICB3aWR0aDogOTU7XFxufVxcblxcbi53LTEwMCB7XFxuICB3aWR0aDogMTAwO1xcbn1cXG5cXG4udGV4dC14cyB7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxufVxcblxcbi50ZXh0LXNtIHtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxufVxcblxcbi50ZXh0LWJhc2Uge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGV4dC1sZyB7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbn1cXG5cXG4udGV4dC14bCB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbi50ZXh0LTJ4bCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRleHQtM3hsIHtcXG4gIGZvbnQtc2l6ZTogMS44NzVyZW07XFxufVxcblxcbi50ZXh0LTR4bCB7XFxuICBmb250LXNpemU6IDIuMjVyZW07XFxufVxcblxcbi50ZXh0LTV4bCB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi50ZXh0LTZ4bCB7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbmJvZHkubmVvLXNjcm9sbCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5pbnB1dDpmb2N1cywgc2VsZWN0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cywgb3B0aW9uOmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYWFhYWE7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWFuaW1hdGUtZHVyYXRpb246IDFzO1xcbiAgLS1hbmltYXRlLWRlbGF5OiAxcztcXG4gIC0tYW5pbWF0ZS1sb29wOiAxO1xcbn1cXG5cXG4uYW5pbWF0ZWQge1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxufVxcbi5hbmltYXRlZC5pbmZpbml0ZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxufVxcbi5hbmltYXRlZC5mYXN0ZXIge1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKCQtLWFuaW1hdGUtZHVyYXRpb24gLyAyKTtcXG59XFxuLmFuaW1hdGVkLmZhc3Qge1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKCQtLWFuaW1hdGUtZHVyYXRpb24gKiAwLjgpO1xcbn1cXG4uYW5pbWF0ZWQuc2xvdyB7XFxuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGMoJC0tYW5pbWF0ZS1kdXJhdGlvbiAqIDIpO1xcbn1cXG4uYW5pbWF0ZWQuc2xvd2VyIHtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYygkLS1hbmltYXRlLWR1cmF0aW9uICogMyk7XFxufVxcbi5hbmltYXRlZC5sb29wLTEge1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG59XFxuLmFuaW1hdGVkLmRlbGF5LTFzIHtcXG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYygkLS1hbmltYXRlLWRlbGF5ICogJGkpO1xcbn1cXG4uYW5pbWF0ZWQubG9vcC0yIHtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDI7XFxufVxcbi5hbmltYXRlZC5kZWxheS0xcyB7XFxuICBhbmltYXRpb24tZGVsYXk6IGNhbGMoJC0tYW5pbWF0ZS1kZWxheSAqICRpKTtcXG59XFxuLmFuaW1hdGVkLmxvb3AtMyB7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAzO1xcbn1cXG4uYW5pbWF0ZWQuZGVsYXktMXMge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKCQtLWFuaW1hdGUtZGVsYXkgKiAkaSk7XFxufVxcbi5hbmltYXRlZC5sb29wLTQge1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogNDtcXG59XFxuLmFuaW1hdGVkLmRlbGF5LTFzIHtcXG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYygkLS1hbmltYXRlLWRlbGF5ICogJGkpO1xcbn1cXG5cXG5AbWVkaWEgcHJpbnQsIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcXG4gIC5hbmltYXRlZCB7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMW1zICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFtcyAhaW1wb3J0YW50O1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAuYW5pbWF0ZWRbY2xhc3MqPU91dF0ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG4uYW5pbWF0ZWQtaW5pdGlhbCB7XFxuICBhbmltYXRpb24tbmFtZTogaW5pdGlhbCAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBvcmlnaW5hbGx5IGF1dGhvcmVkIGJ5IE5pY2sgUGV0dGl0IC0gaHR0cHM6Ly9naXRodWIuY29tL25pY2twZXR0aXQvZ2xpZGUgKi9cXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4wNSwgMS4wNSwgMS4wNSk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG59XFxuLnB1bHNlIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBwdWxzZTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHRhZGEge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG4gIDEwJSwgMjAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuOSwgMC45LCAwLjkpIHJvdGF0ZTNkKDAsIDAsIDEsIC0zZGVnKTtcXG4gIH1cXG4gIDMwJSwgNTAlLCA3MCUsIDkwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKSByb3RhdGUzZCgwLCAwLCAxLCAzZGVnKTtcXG4gIH1cXG4gIDQwJSwgNjAlLCA4MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxufVxcbi50YWRhIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiB0YWRhO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuLmZhZGVJbiB7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbkxlZnQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG4uZmFkZUluTGVmdCB7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZUluTGVmdDtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW5SaWdodCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuLmZhZGVJblJpZ2h0IHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5SaWdodDtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW5VcCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuLmZhZGVJblVwIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5VcDtcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGVPdXQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMjAwZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuLnJvdGF0ZU91dCB7XFxuICBhbmltYXRpb24tbmFtZTogcm90YXRlT3V0O1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbn1cXG5cXG4ucm90YXRlLWNpcmNsZSB7XFxuICBhbmltYXRpb246IHJvdGF0ZUNpcmNsZSA5cyBpbmZpbml0ZTtcXG59XFxuXFxuLypcXG4gQ3VzdG9tIEFuaW1hdGlvbnNcXG4gKi9cXG5Aa2V5ZnJhbWVzIHJvdGF0ZUNpcmNsZSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMjUlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gIH1cXG4gIDc1JSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBqYWNrSW5UaGVCb3gge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4xKSByb3RhdGUoMzBkZWcpO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcXG4gIH1cXG4gIDcwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDNkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbn1cXG4uamFja0luVGhlQm94IHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBqYWNrSW5UaGVCb3g7XFxufVxcblxcbi8qIG9yaWdpbmFsbHkgYXV0aG9yZWQgYnkgTmljayBQZXR0aXQgLSBodHRwczovL2dpdGh1Yi5jb20vbmlja3BldHRpdC9nbGlkZSAqL1xcbkBrZXlmcmFtZXMgcm9sbEluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtMTIwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuLnJvbGxJbiB7XFxuICBhbmltYXRpb24tbmFtZTogcm9sbEluO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHpvb21JbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuLnpvb21JbiB7XFxuICBhbmltYXRpb24tbmFtZTogem9vbUluO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlSW5Eb3duIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuLnNsaWRlSW5Eb3duIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluRG93bjtcXG59XFxuXFxuQGtleWZyYW1lcyBmbG9hdCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zbGF0ZVkoMHB4KTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2xhdGVZKC02cHgpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zbGF0ZVkoMHB4KTtcXG4gIH1cXG59XFxuLnB1cnBsZS1ncmFkaWVudCB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0MGRlZywgI2ZmNmVjNCwgIzc4NzNmNSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjZmY2ZWM0LCAjNzg3M2Y1KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjZmY2ZWM0LCAjNzg3M2Y1KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCg0MGRlZywgI2ZmNmVjNCwgIzc4NzNmNSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MGRlZywgI2ZmNmVjNCwgIzc4NzNmNSkgIWltcG9ydGFudDtcXG59XFxuXFxuLnBlYWNoLWdyYWRpZW50IHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjZmZkODZmLCAjZmM2MjYyKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDBkZWcsICNmZmQ4NmYsICNmYzYyNjIpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDBkZWcsICNmZmQ4NmYsICNmYzYyNjIpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjZmZkODZmLCAjZmM2MjYyKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjZmZkODZmLCAjZmM2MjYyKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYXF1YS1ncmFkaWVudCB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0MGRlZywgIzIwOTZmZiwgIzA1ZmZhMykgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjMjA5NmZmLCAjMDVmZmEzKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjMjA5NmZmLCAjMDVmZmEzKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCg0MGRlZywgIzIwOTZmZiwgIzA1ZmZhMykgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MGRlZywgIzIwOTZmZiwgIzA1ZmZhMykgIWltcG9ydGFudDtcXG59XFxuXFxuLmJsdWUtZ3JhZGllbnQge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDBkZWcsICM0NWNhZmMsICMzMDNmOWYpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0MGRlZywgIzQ1Y2FmYywgIzMwM2Y5ZikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0MGRlZywgIzQ1Y2FmYywgIzMwM2Y5ZikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoNDBkZWcsICM0NWNhZmMsICMzMDNmOWYpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsICM0NWNhZmMsICMzMDNmOWYpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ob21lLXBhZ2UtZ3JhZGllbnQge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDBkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0MGRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0MGRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoNDBkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wdXJwbGUtZ3JhZGllbnQtcmdiYSB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSgyNTUsIDExMCwgMTk2LCAwLjkpLCByZ2JhKDEyMCwgMTE1LCAyNDUsIDAuOSkpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSgyNTUsIDExMCwgMTk2LCAwLjkpLCByZ2JhKDEyMCwgMTE1LCAyNDUsIDAuOSkpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMjU1LCAxMTAsIDE5NiwgMC45KSwgcmdiYSgxMjAsIDExNSwgMjQ1LCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSgyNTUsIDExMCwgMTk2LCAwLjkpLCByZ2JhKDEyMCwgMTE1LCAyNDUsIDAuOSkpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMjU1LCAxMTAsIDE5NiwgMC45KSwgcmdiYSgxMjAsIDExNSwgMjQ1LCAwLjkpKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucGVhY2gtZ3JhZGllbnQtcmdiYSB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSgyNTUsIDIxNiwgMTExLCAwLjkpLCByZ2JhKDI1MiwgOTgsIDk4LCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMjU1LCAyMTYsIDExMSwgMC45KSwgcmdiYSgyNTIsIDk4LCA5OCwgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSgyNTUsIDIxNiwgMTExLCAwLjkpLCByZ2JhKDI1MiwgOTgsIDk4LCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSgyNTUsIDIxNiwgMTExLCAwLjkpLCByZ2JhKDI1MiwgOTgsIDk4LCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDI1NSwgMjE2LCAxMTEsIDAuOSksIHJnYmEoMjUyLCA5OCwgOTgsIDAuOSkpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5hcXVhLWdyYWRpZW50LXJnYmEge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMzIsIDE1MCwgMjU1LCAwLjkpLCByZ2JhKDUsIDI1NSwgMTYzLCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMzIsIDE1MCwgMjU1LCAwLjkpLCByZ2JhKDUsIDI1NSwgMTYzLCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDMyLCAxNTAsIDI1NSwgMC45KSwgcmdiYSg1LCAyNTUsIDE2MywgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMzIsIDE1MCwgMjU1LCAwLjkpLCByZ2JhKDUsIDI1NSwgMTYzLCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDMyLCAxNTAsIDI1NSwgMC45KSwgcmdiYSg1LCAyNTUsIDE2MywgMC45KSkgIWltcG9ydGFudDtcXG59XFxuXFxuLmJsdWUtZ3JhZGllbnQtcmdiYSB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSg2OSwgMjAyLCAyNTIsIDAuOSksIHJnYmEoNDgsIDYzLCAxNTksIDAuOSkpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSg2OSwgMjAyLCAyNTIsIDAuOSksIHJnYmEoNDgsIDYzLCAxNTksIDAuOSkpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoNjksIDIwMiwgMjUyLCAwLjkpLCByZ2JhKDQ4LCA2MywgMTU5LCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSg2OSwgMjAyLCAyNTIsIDAuOSksIHJnYmEoNDgsIDYzLCAxNTksIDAuOSkpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoNjksIDIwMiwgMjUyLCAwLjkpLCByZ2JhKDQ4LCA2MywgMTU5LCAwLjkpKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYmctZ3JhZGllbnQtcHVycGxlIHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgI2ZmNmVjNCwgIzc4NzNmNSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgI2ZmNmVjNCwgIzc4NzNmNSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICNmZjZlYzQsICM3ODczZjUpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgI2ZmNmVjNCwgIzc4NzNmNSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICNmZjZlYzQsICM3ODczZjUpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5iZy1ncmFkaWVudC1wZWFjaCB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICNmZmQ4NmYsICNmYzYyNjIpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICNmZmQ4NmYsICNmYzYyNjIpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjZmZkODZmLCAjZmM2MjYyKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICNmZmQ4NmYsICNmYzYyNjIpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjZmZkODZmLCAjZmM2MjYyKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYmctZ3JhZGllbnQtYXF1YSB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICMyMDk2ZmYsICMwNWZmYTMpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICMyMDk2ZmYsICMwNWZmYTMpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjMjA5NmZmLCAjMDVmZmEzKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICMyMDk2ZmYsICMwNWZmYTMpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjMjA5NmZmLCAjMDVmZmEzKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYmctZ3JhZGllbnQtYmx1ZSB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICM0NWNhZmMsICMzMDNmOWYpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICM0NWNhZmMsICMzMDNmOWYpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjNDVjYWZjLCAjMzAzZjlmKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICM0NWNhZmMsICMzMDNmOWYpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjNDVjYWZjLCAjMzAzZjlmKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYmctZ3JhZGllbnQtaG9tZS1wYWdlIHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIRVJPIEljb25zXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9JY29uRm9udC93ZWJmb250LmVvdD92PTEuNC41N1xcXCIpO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0ljb25Gb250L3dlYmZvbnQuZW90PyNpZWZpeCZ2PTEuNC41N1xcXCIpIGZvcm1hdChcXFwiZW1iZWRkZWQtb3BlbnR5cGVcXFwiKSwgdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9JY29uRm9udC93ZWJmb250LndvZmYyP3Y9MS40LjU3XFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0ljb25Gb250L3dlYmZvbnQud29mZj92PTEuNC41N1xcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpLCB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0ljb25Gb250L3dlYmZvbnQudHRmP3Y9MS40LjU3XFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpLCB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0ljb25Gb250L3dlYmZvbnQuc3ZnP3Y9MS40LjU3XFxcIikgZm9ybWF0KFxcXCJzdmdcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbmkuaGVyby1pY29uIHtcXG4gIGNvbG9yOiAjNjA3RDhCO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiB1bnNldDtcXG4gIGxpbmUtaGVpZ2h0OiB1bnNldDtcXG59XFxuaS5oZXJvLWljb246YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDI0cHgvMSBcXFwiSEVSTyBJY29uc1xcXCI7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWFjY291bnQtZ3JvdXAtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBCNThcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWFjY291bnQtc2VhcmNoLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOTM1XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1hY2NvdW50LXRpZS1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTBDQVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYWlycG9ydDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4NEJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWFycm93LWRvd24tYm9sZC1ib3gtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3MzBcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWFycm93LXVwLWJvbGQtYm94LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzM5XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1hcnJvdy11cC1ib3g6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNkMzXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1hdXRvLWZpeDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwNjhcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWF1dG8tdXBsb2FkOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDA2OVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYmFsbG90LXJlY291bnQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDM0FcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNhbGwtbWFkZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwRjdcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNhcmQtYWNjb3VudC1tYWlsLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTk4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jYXJ0LXBsdXM6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTEyXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jZWxscGhvbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTFDXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jZWxscGhvbmUtY29nOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDk1MVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2VsbHBob25lLW1lc3NhZ2U6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOEQzXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jZWxscGhvbmUtbmZjOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEU5MFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2VydGlmaWNhdGUtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExODhcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNoZWNrLWNpcmNsZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1RTBcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNoZWNrLWNpcmNsZS1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDVFMVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2xpcHB5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDE0RlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2xvdWQtZG93bmxvYWQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBCN0RcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNyZWF0aW9uOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDY3NFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1haWwtZWRpdC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEVFNFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb246OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzY4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1hbmdyeTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNjlcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWFuZ3J5LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzZBXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1jb25mdXNlZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwREVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWNvbmZ1c2VkLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMERGXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1jb29sOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM2QlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tY29vbC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDFGM1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tY3J5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM2Q1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tY3J5LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzZEXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1kZWFkOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM2RVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tZGVhZC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDY5QlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tZGV2aWw6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzZGXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1kZXZpbC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDFGNFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tZXhjaXRlZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNzBcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWV4Y2l0ZWQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2OUNcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWZyb3duOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEY0Q1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tZnJvd24tb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGNERcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWhhcHB5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM3MVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24taGFwcHktb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxRjVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWtpc3M6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzcyXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1raXNzLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzczXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1sb2w6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjE0XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1sb2wtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyMTVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLW5ldXRyYWw6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzc0XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1uZXV0cmFsLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMUY2XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDFGMlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tcG9vcDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxRjdcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLXBvb3Atb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNzVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLXNhZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNzZcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLXNhZC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDFGOFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tdG9uZ3VlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDFGOVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tdG9uZ3VlLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzc3XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi13aW5rOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM3OFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24td2luay1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM3OVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZmlsZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyMTRcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWZpbGUtY2xvdWQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwMkFcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWZvcm0tc2VsZWN0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTQwMVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZm9ybWF0LWxpc3QtdGV4dDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyNkZcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWdvb2dsZS1hZHM6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzg3XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1oYW5kLW9rYXk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTUwXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1oYW5kLXBvaW50aW5nLXJpZ2h0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDJDN1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8taGVhZHNldDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyQ0VcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWhlYXJ0LW11bHRpcGxlLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTU3XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1ob21lLW1hcC1tYXJrZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNUY4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1odW1hbi1tYWxlLWNoaWxkOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTM4Q1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbGFwdG9wOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDMyMlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbWVzc2FnZS1jb2ctb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExNzJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLW1lc3NhZ2UtdGV4dC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDM2QVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbW91c2U6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzdEXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1tb3VzZS1ibHVldG9vdGg6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOThCXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1tb3VzZS1vZmY6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzdFXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1tb3VzZS12YXJpYW50OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDM3RlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbW91c2UtdmFyaWFudC1vZmY6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzgwXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1uZXdzcGFwZXItdmFyaWFudC1tdWx0aXBsZS1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTAwM1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbmV3c3BhcGVyLXZhcmlhbnQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwMDRcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXBob25lLWluLXRhbGstb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExODJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXBsdXMtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3MDVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXJlc3BvbnNpdmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDVFXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1zZWxlY3Q6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDg1XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1zZWxlY3Rpb24tc2VhcmNoOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTIwNVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tc2VuZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0OEFcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXNlbmQtY2hlY2stb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExNjJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXNlbmQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExNjVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXNoYXJlLWFsbC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTFGNVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tc3Rhci1ib3gtbXVsdGlwbGUtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyODdcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXN0aWNrZXItZW1vamk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzg1XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby10YWJsZXQtaXBhZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0RjhcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXRlbGV2aXNpb24tY2xlYW46OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTEwXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby11cGRhdGU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNkIwXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby16b2RpYWMtdGF1cnVzOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEE4N1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tem9kaWFjLXZpcmdvOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEE4OFxcXCI7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJpbXBvcnQgVFlQRSBmcm9tIFwiLi90eXBlXCJcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0dGVyVXNlciggdXNlciApe1xyXG4gICAgY29uc29sZS5sb2codXNlciAsIFwiIHNldCB1c2VyIFwiKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlIDogVFlQRS5TRVRURVJfVVNFUixcclxuICAgICAgICBwYXlsb2FkIDogeyAuLi51c2VyLCBmZXRjaGVkOiB0cnVlIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldHRlckNvbnZlcnNhdGlvbiggY29udiApe1xyXG4gICAgY29uc29sZS5sb2coY29udiAsIFwiIHNldCBjb252IFwiKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlIDogVFlQRS5TRVRURVJfQ09OVkVSU0FUSU9OLFxyXG4gICAgICAgIHBheWxvYWQgOiBjb252XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR0ZXJDb252ZXJzYXRpb25CYWNrdXAoIGNvbnYgKXtcclxuICAgIGNvbnNvbGUubG9nKGNvbnYgLCBcIiBzZXQgY29udiBiYWNrdXAgXCIpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBUWVBFLlNFVFRFUl9DT05WRVJTQVRJT05fQkFDS1VQLFxyXG4gICAgICAgIHBheWxvYWQgOiBjb252XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VDaGFubmVsQWN0aXZlKCBpZCApe1xyXG4gICAgY29uc29sZS5sb2coaWQgLCBcIiBjaGFuZ2VDaGFubmVsQWN0aXZlIFwiKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlIDogVFlQRS5DSEFOTkVMX1NFVF9BQ1RJVkUsXHJcbiAgICAgICAgcGF5bG9hZCA6IGlkXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVhZEFsbENNZXNzYWdlKCApe1xyXG4gICAgY29uc29sZS5sb2coIFwiIHJlYWRBbGxDTWVzc2FnZSBcIilcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6IFRZUEUuQ0hBTk5FTF9SRUFEX01FU1NBR0UsXHJcbiAgICAgICAgcGF5bG9hZCA6IG51bGxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlclNvcnRDb252ZXJzYXRpb24oIG9iamVjdElkc0FuZERhdGFCYWNrdXAgKXtcclxuICAgIGNvbnNvbGUubG9nKCBcIiBmaWx0ZXJTb3J0Q29udmVyc2F0aW9uIFwiKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlIDogVFlQRS5GSUxURVJfU09SVF9DT05WLFxyXG4gICAgICAgIHBheWxvYWQgOiBvYmplY3RJZHNBbmREYXRhQmFja3VwXHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImNvbnN0IFRZUEUgPSAge1xyXG4gIFxyXG4gIENIQU5ORUxfU0VUX0FDVElWRSAgICAgICAgOiBcIkNIQU5ORUxfU0VUX0FDVElWRVwiLFxyXG4gIFNFVFRFUl9VU0VSICAgICAgICAgICAgICAgOiBcIlNFVFRFUl9VU0VSXCIsXHJcbiAgQ0hBTk5FTF9SRUFEX01FU1NBR0UgICAgICA6IFwiQ0hBTk5FTF9SRUFEX01FU1NBR0VcIixcclxuICBTRVRURVJfQ09OVkVSU0FUSU9OICAgICAgIDogXCJTRVRURVJfQ09OVkVSU0FUSU9OXCIsXHJcbiAgRklMVEVSX1NPUlRfQ09OViAgICAgICAgICA6IFwiRklMVEVSX1NPUlRfQ09OVlwiLFxyXG4gIFNFVFRFUl9DT05WRVJTQVRJT05fQkFDS1VQOiBcIlNFVFRFUl9DT05WRVJTQVRJT05fQkFDS1VQXCJcclxufVxyXG5leHBvcnQgZGVmYXVsdCBUWVBFOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgQ2hhdCBmcm9tICcuL0NoYXQvaW5kZXguanN4J1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZHJhdyBhcHBcIilcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcENvbXBvbmVudFwiIGlkPVwiQXBwbGljYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxDaGF0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcFxyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBcIi4uLy4uL3Njc3MvY2hhdC9oZWFkLWluZm8uc2Nzc1wiXHJcbmltcG9ydCBDT05GSUcgZnJvbSBcIi4uLy4uL2NvbmZpZ1wiXHJcbmNsYXNzIEhlYWRJbmZvIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcblx0cmVuZGVyKCkge1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwicmVuZGVyIGhlYWQgY2hhdFwiKVxyXG5cdFx0dmFyIHsgY29udmVyc2F0aW9ucyB9ID0gdGhpcy5wcm9wc1xyXG5cdFx0dmFyIGNoYW5uZWxBY3RpdmUgPSBjb252ZXJzYXRpb25zLmZpbmQoY2hhbm5lbCA9PiBjaGFubmVsLmlzQWN0aXZlKVxyXG5cclxuXHRcdGlmICghY2hhbm5lbEFjdGl2ZSkge1xyXG5cdFx0XHRyZXR1cm4gbnVsbFxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LWhlYWQtaW5mb1wiPlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVzZXItYWN0aXZlLWNoYXRcIj5cclxuXHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwic3RhdGUtYXZhdGFyIGFjdGl2ZS1vbmxpbmVcIj5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9e0NPTkZJRy5TRVJWRVJfUEhQLlVSTCArIGNoYW5uZWxBY3RpdmUudXNlci5hdmF0YXJ9IGFsdD1cIlwiIC8+XHJcblx0XHRcdFx0XHQ8L2ZpZ3VyZT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1pbmZvXCI+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj57Y2hhbm5lbEFjdGl2ZS51c2VyLmZpcnN0X25hbWUgKyBcIiBcIiArY2hhbm5lbEFjdGl2ZS51c2VyLmxhc3RfbmFtZX08L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBIZWFkSW5mbyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgSGVhZEluZm8gZnJvbSBcIi4vSGVhZEluZm8uanN4XCJcclxuaW1wb3J0IE1lc3NhZ2VDaGF0IGZyb20gXCIuL01lc3NhZ2VDaGF0LmpzeFwiXHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIlxyXG5pbXBvcnQgXCIuLi8uLi9zY3NzL2NoYXQvbGlzdC1tZXNzYWdlLnNjc3NcIlxyXG5pbXBvcnQgeyBsaXN0ZW5TY3JvbGxNZXNzYWdlIH0gZnJvbSBcIi4uLy4uL2xpYnJhcnkvc2VydmljZS5qc1wiXHJcblxyXG5jbGFzcyBMaXN0TWVzc2FnZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuXHJcbiAgICAgICAgdmFyIHsgY29udmVyc2F0aW9ucyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHZhciBjaGFubmVsQWN0aXZlQ2hhdCA9IGNvbnZlcnNhdGlvbnMuZmluZChjaGFubmVsID0+IGNoYW5uZWwuaXNBY3RpdmUpXHJcblxyXG4gICAgICAgIHZhciBtZXNzYWdlcyA9IGNoYW5uZWxBY3RpdmVDaGF0ICYmIGNoYW5uZWxBY3RpdmVDaGF0Lm1lc3NhZ2VcclxuXHJcbiAgICAgICAgdmFyIGxzdE1lc3NhZ2UgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1zY3JvbGwtdG8tYm90dG9tJylcclxuICAgICAgICBpZihsc3RNZXNzYWdlKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICQoJyNqcy1zY3JvbGwtdG8tYm90dG9tJykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBsaXN0ZW5TY3JvbGxNZXNzYWdlKHRoaXMsIG1lc3NhZ2VzLCBjaGFubmVsQWN0aXZlQ2hhdClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgdmFyIHsgY29udmVyc2F0aW9ucywgYXV0aCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHZhciBjaGFubmVsQWN0aXZlQ2hhdCA9IGNvbnZlcnNhdGlvbnMuZmluZChjaGFubmVsID0+IGNoYW5uZWwuaXNBY3RpdmUpO1xyXG5cclxuICAgICAgICB2YXIgbWVzc2FnZXMgPSBjaGFubmVsQWN0aXZlQ2hhdCAmJiBjaGFubmVsQWN0aXZlQ2hhdC5tZXNzYWdlO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1saXN0LW1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxIZWFkSW5mbyBjb252ZXJzYXRpb25zPXsgY29udmVyc2F0aW9ucyB9IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXItbGlzdC1tZXNzYWdlXCIgaWQ9XCJqcy1zY3JvbGwtdG8tYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge21lc3NhZ2VzICYmIG1lc3NhZ2VzLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKG1lc3NhZ2UsIGtleSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlQ2hhdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XCJtZXNzYWdlLWNoYXRcIiArIGtleSArIGNoYW5uZWxBY3RpdmVDaGF0LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGg9e2F1dGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT17bWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFubmVsQWN0aXZlQ2hhdD17Y2hhbm5lbEFjdGl2ZUNoYXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBMaXN0TWVzc2FnZVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IFwiLi4vLi4vc2Nzcy9jaGF0L2xpc3QtdXNlci5zY3NzXCJcclxuaW1wb3J0IFVzZXJDaGF0IGZyb20gXCIuL1VzZXJDaGF0LmpzeFwiXHJcblxyXG5jbGFzcyBMaXN0VXNlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIC8vLyB1c2VyQ2hhdCDEkcaw4bujYyBwYXNzIHThu6sgY2hhIHbDoG9cclxuICAgICAgICB2YXIgeyBjb252ZXJzYXRpb25zIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgY29uc29sZS5sb2coY29udmVyc2F0aW9ucylcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtbGlzdC11c2VyXCI+XHJcbiAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnNhdGlvbnMgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgY29udmVyc2F0aW9ucy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5uZWwgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlckNoYXQga2V5PXtjaGFubmVsLmlkfSBjaGFubmVsPXtjaGFubmVsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RVc2VyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0ICcuLi8uLi9zY3NzL2NoYXQvbWVzc2FnZS1jaGF0LnNjc3MnXHJcbmltcG9ydCBDT05GSUcgZnJvbSBcIi4uLy4uL2NvbmZpZ1wiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5cclxuY2xhc3MgTWVzc2FnZUNoYXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIFxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB2YXIgeyBhdXRoLCBtZXNzYWdlLCBjaGFubmVsQWN0aXZlQ2hhdCB9ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgICAgICB2YXIgbXlpbmZvID0geyBhdmF0YXIgOiAnJywgbmFtZTogJycgfVxyXG4gICAgICAgIGlmKCBhdXRoICYmIGF1dGguaWQgKXtcclxuICAgICAgICAgICAgbXlpbmZvLmF2YXRhciA9IGF1dGguYXZhdGFyXHJcbiAgICAgICAgICAgIG15aW5mby5uYW1lICAgPSBhdXRoLmZpcnN0X25hbWUgKyBcIiBcIiArIGF1dGgubGFzdF9uYW1lXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWNoYW5uZWxBY3RpdmVDaGF0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB1c2VySW5mbyA9IGNoYW5uZWxBY3RpdmVDaGF0LnVzZXJcclxuXHJcbiAgICAgICAgaWYgKCFtZXNzYWdlLnR5cGUpIHtcclxuICAgICAgICAgICAgdmFyIHR5cGVNZXNzYWdlID0gJ2xlZnQtbWVzc2FnZSAnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciB0eXBlTWVzc2FnZSA9ICdyaWdodC1tZXNzYWdlIGJ5LW1lICc7XHJcbiAgICAgICAgICAgIHVzZXJJbmZvID0gbXlpbmZvO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgeyBzdHlsZSB9ID0gbWVzc2FnZVxyXG5cclxuICAgICAgICB2YXIgVElNRV9ESUVfRklMRSA9IDI0ICogNjAgKiA2MCAqIDEwMDBcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgdmFyIHRpbWUgPSBuZXcgRGF0ZShtZXNzYWdlLmNyZWF0ZWRBdClcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtbWVzc2FnZS1jaGF0XCIgPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBlTWVzc2FnZSArIFwiY2hhdC1ncm91cFwifT5cclxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Q09ORklHLlNFUlZFUl9QSFAuVVJMICsgdXNlckluZm8uYXZhdGFyfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID09IFwiSU1BR0VcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmF0dGFjaG1lbnQubWFwKCggYXR0YWNoRWxlbWVudCAsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggYXR0YWNoRWxlbWVudC50eXBlID09ICdpbWcnICl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBhdHRhY2hFbGVtZW50LnRpbWUgJiYgYXR0YWNoRWxlbWVudC50aW1lIC0gVElNRV9ESUVfRklMRSA8IChuZXcgRGF0ZSkuZ2V0VGltZSgpICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17XCJ3cmFwcGVyLWF0dGFjaG1lbnRcIiArIGluZGV4ICsgYXR0YWNoRWxlbWVudC51cmwgfSBjbGFzc05hbWU9XCJ3cmFwcGVyLWF0dGFjaG1lbnRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0NPTkZJRy5TRVJWRVJfUEhQLlVSTCArIGF0dGFjaEVsZW1lbnQudXJsIH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkb3dubG9hZC1maWxlLWF0dGFjaG1lbnRcIiBocmVmPXsgQ09ORklHLlNFUlZFUl9QSFAuVVJMICsgYXR0YWNoRWxlbWVudC51cmwgfSB0YXJnZXQ9XCJfYmxhbmtcIiBkb3dubG9hZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8tY2xvdWQtZG93bmxvYWQtb3V0bGluZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e1wid3JhcHBlci1hdHRhY2htZW50XCIgKyBpbmRleCArIENPTkZJRy5TRVJWRVJfUEhQLlVSTCArIFwiL2ltYWdlL2ZvbGRlci5qcGdcIiB9IGNsYXNzTmFtZT1cIndyYXBwZXItYXR0YWNobWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17IENPTkZJRy5TRVJWRVJfUEhQLlVSTCArIFwiL2ltYWdlL2ZvbGRlci5qcGdcIiB9IC8+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRvd25sb2FkLWZpbGUtYXR0YWNobWVudFwiIGhyZWY9eyBDT05GSUcuU0VSVkVSX1BIUC5VUkwgKyBhdHRhY2hFbGVtZW50LnVybCB9IHRhcmdldD1cIl9ibGFua1wiIGRvd25sb2FkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8tY2xvdWQtZG93bmxvYWQtb3V0bGluZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZSArIFwiIHRleHRcIn0gPnttZXNzYWdlLmNvbnRlbnR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuY3JlYXRlZEF0ID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUgKyBcIiB0aW1lLWxhYmVsXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWUuZ2V0RnVsbFllYXIoKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBcIi1cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAodGltZS5nZXRNb250aCgpICsgMSkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgXCItXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgdGltZS5nZXREYXRlKCkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgXCIgXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgdGltZS5nZXRIb3VycygpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIFwiOlwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIHRpbWUuZ2V0TWludXRlcygpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIFwiOlwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIHRpbWUuZ2V0U2Vjb25kcygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhbWVzc2FnZS50eXBlICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIW1lc3NhZ2UucmVhZEFkbWluID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0naGVyby1pY29uIGhlcm8tY2hlY2stY2lyY2xlLW91dGxpbmUnPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdoZXJvLWljb24gaGVyby1jaGVjay1jaXJjbGUnPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlQ2hhdCIsIlxyXG5cclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgJy4uLy4uL3Njc3MvY2hhdC9zZWFyY2guc2NzcydcclxuaW1wb3J0IHsgZmlsdGVyU29ydENvbnZlcnNhdGlvbiwgc2V0dGVyQ29udmVyc2F0aW9uIH0gZnJvbSBcIi4uLy4uL2FjdGlvblwiXHJcblxyXG5cclxuY2xhc3MgU2VhcmNoIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIoIHByb3BzIClcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaHVuZyA6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZWFyY2hVc2VyID0gdGhpcy5zZWFyY2hVc2VyLmJpbmQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHNlYXJjaFVzZXIoZSkge1xyXG5cclxuICAgICAgICB2YXIgX3RoaXMgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIGJhY2t1cERhdGEgPSBbIC4uLiB0aGlzLnByb3BzLmNvbnZlcnNhdGlvbkJhY2t1cCBdLFxyXG4gICAgICAgICAgICBsaXN0TmFtZSAgID0gW10sXHJcbiAgICAgICAgICAgIHRleHQgICAgICAgPSBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgb3V0cHV0ICAgICA9IHRleHQuc3BsaXQoJycpXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCB0ZXh0ICwgXCJ0ZXh0dGV4dHRleHR0ZXh0dGV4dHRleHRcIilcclxuICAgICAgICBpZiggIXRleHQgfHwgIXRleHQudHJpbSgpICl7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHNldHRlckNvbnZlcnNhdGlvbih0aGlzLnByb3BzLmNvbnZlcnNhdGlvbkJhY2t1cCkpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLmh1bmcpe1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc3RhdGUuaHVuZylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIGlmKCBiYWNrdXBEYXRhICl7XHJcbiAgICAgICAgICAgIGJhY2t1cERhdGEubWFwKCBjb252ID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBvYmogPSB7IHNvcnQ6IDAsIGlkOiBjb252LmlkICwgdGV4dDogY29udi51c2VyLmZpcnN0X25hbWUgKyBcIiBcIiB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGlzdE5hbWUucHVzaCggb2JqIClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgb3V0cHV0Lm1hcCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsaXN0TmFtZS5tYXAoIHNlYXJjaCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIHNlYXJjaC5zb3J0ICE9IC0xICYmIHNlYXJjaC50ZXh0LnRvVXBwZXJDYXNlKCkuaW5jbHVkZXMoaXRlbS50b1VwcGVyQ2FzZSgpKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaC5zb3J0ICsrIFxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2guc29ydCA9IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5odW5nKXtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnN0YXRlLmh1bmcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGh1bmc6IHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdE5hbWUuc29ydCgoYSwgYikgPT4gKGEuc29ydCA+IGIuc29ydCkgPyAxIDogLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxzdElkU29ydGVkID0gbGlzdE5hbWUubWFwKCBpdGVtID0+IGl0ZW0uc29ydCAhPSAtMSAmJiBpdGVtLnNvcnQgPyBpdGVtLmlkIDogMCApXHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucHJvcHMuZGlzcGF0Y2goZmlsdGVyU29ydENvbnZlcnNhdGlvbih7IGlkcyA6IGxzdElkU29ydGVkLCBkYXRhOiBiYWNrdXBEYXRhIH0pKVxyXG4gICAgICAgICAgICAgICAgfSwgNjAwKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICAgXHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtc2VhcmNoLXVzZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLWFjY291bnQtc2VhcmNoLW91dGxpbmVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJzZWFyY2gtdXNlclwiIFxyXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNlYXJjaFVzZXJ9XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwic2VhcmNoLXVzZXJcIiBwbGFjZWhvbGRlcj0n5YWl5Yqb44GX44Gm6Kqw44GL44KS6KaL44Gk44GR44KLJyAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY29udmVyc2F0aW9ucyAgICAgOiBzdGF0ZS5jb252ZXJzYXRpb25zLFxyXG4gICAgICAgIGNvbnZlcnNhdGlvbkJhY2t1cDogc3RhdGUuY29udmVyc2F0aW9uQmFja3VwLFxyXG4gICAgICAgIHVzZXIgICAgICAgICAgICAgIDogc3RhdGUudXNlclxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTZWFyY2gpIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbi8vIGltcG9ydCBTZWFyY2hVc2VyIGZyb20gXCIuL1NlYXJjaFVzZXIuanN4XCJcclxuaW1wb3J0IExpc3RVc2VyIGZyb20gXCIuL0xpc3RVc2VyLmpzeFwiXHJcbmltcG9ydCBcIi4uLy4uL3Njc3MvY2hhdC9zaWRlYmFyLnNjc3NcIlxyXG5pbXBvcnQgQ09ORklHIGZyb20gXCIuLi8uLi9jb25maWdcIlxyXG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuL1NlYXJjaC5qc3hcIlxyXG5cclxuY2xhc3MgU2lkZUJhckNoYXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXIgc2lkZWJhclwiIClcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgdmFyIGluZm9yID0geyBhdmF0YXI6ICcnLCBuYW1lOiAnJyB9XHJcbiAgICAgICAgdmFyIHsgY29udmVyc2F0aW9ucywgYXV0aCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGlmIChhdXRoICYmIGF1dGguaWQpIHtcclxuICAgICAgICAgICAgaW5mb3IuYXZhdGFyID0gYXV0aC5hdmF0YXJcclxuICAgICAgICAgICAgaW5mb3IubmFtZSA9IGF1dGguZmlyc3RfbmFtZSArIFwiIFwiICsgYXV0aC5sYXN0X25hbWUgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1zaWRlYmFyLWNoYXRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXlpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJzdGF0ZS1hdmF0YXIgYWN0aXZlLW9ubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eyBDT05GSUcuU0VSVkVSX1BIUC5VUkwgKyBpbmZvci5hdmF0YXIgfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPntpbmZvci5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LXVzZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb252ZXJzYXRpb25zLmxlbmd0aCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdFVzZXIgY29udmVyc2F0aW9ucz17Y29udmVyc2F0aW9uc30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4g5qSc57Si57WQ5p6c44Gv44GC44KK44G+44Gb44KTIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXJDaGF0XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vLi4vY29uZmlnXCJcclxuaW1wb3J0IHsgY2hhbmdlQ2hhbm5lbEFjdGl2ZSB9IGZyb20gXCIuLi8uLi9hY3Rpb25cIlxyXG5jbGFzcyBVc2VyQ2hhdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY2hhbmdlQWN0aXZlVXNlciA9ICggX3RoaXMgLCBpZCkgPT4ge1xyXG5cclxuICAgICAgICBfdGhpcy5wcm9wcy5kaXNwYXRjaChjaGFuZ2VDaGFubmVsQWN0aXZlKCBpZCApKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgeyBjaGFubmVsIH0gICAgICAgID0gdGhpcy5wcm9wcyxcclxuICAgICAgICAgICAgY2xhc3NBY3RpdmVPbmxpbmUgID0gY2hhbm5lbC51c2VyLm9ubGluZSA/ICcgYWN0aXZlICcgOiAnJyxcclxuICAgICAgICAgICAgY2xhc3NBY3RpdmVNZXNzYWdlID0gY2hhbm5lbC5pc0FjdGl2ZSA/ICcgYWN0aXZlLW1lc3NhZ2UgJyA6ICcnXHJcblxyXG4gICAgICAgIHZhciBbbGFzdEl0ZW1dID0gY2hhbm5lbC5tZXNzYWdlLnNsaWNlKC0xKVxyXG5cclxuICAgICAgICB2YXIgbXVuYmVyTm9uZVJlYWQgPSBjaGFubmVsLm1lc3NhZ2UuZmlsdGVyKG1lc3NhZ2UgPT4gIW1lc3NhZ2UucmVhZEFkbWluICkubGVuZ3RoXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyXCIgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzQWN0aXZlT25saW5lICsgY2xhc3NBY3RpdmVNZXNzYWdlICsgXCJ1c2VyLWNoYXRcIn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmNoYW5nZUFjdGl2ZVVzZXIodGhpcywgY2hhbm5lbC5pZCl9ID5cclxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cInN0YXRlLWF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Q09ORklHLlNFUlZFUl9QSFAuVVJMICsgY2hhbm5lbC51c2VyLmF2YXRhcn0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+e2NoYW5uZWwudXNlci5maXJzdF9uYW1lICsgXCIgXCIgKyBjaGFubmVsLnVzZXIubGFzdF9uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYXN0SXRlbSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFzdC1tZXNzYWdlXCI+e2xhc3RJdGVtLmNvbnRlbnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVuYmVyTm9uZVJlYWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJub25lLXJlYWQtbWVzc2FnZVwiPnttdW5iZXJOb25lUmVhZH08L2k+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKShVc2VyQ2hhdCkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgU2lkZUJhckNoYXQgZnJvbSBcIi4vU2lkZUJhckNoYXQuanN4XCJcclxuaW1wb3J0IExpc3RNZXNzYWdlIGZyb20gXCIuL0xpc3RNZXNzYWdlLmpzeFwiXHJcbmltcG9ydCAnLi4vLi4vc2Nzcy9jaGF0L2NoYXQuc2NzcydcclxuaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vLi4vY29uZmlnXCJcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCB7IHNldHRlclVzZXIsIHJlYWRBbGxDTWVzc2FnZSwgc2V0dGVyQ29udmVyc2F0aW9uLCBzZXR0ZXJDb252ZXJzYXRpb25CYWNrdXAgfSBmcm9tIFwiLi4vLi4vYWN0aW9uXCJcclxuXHJcbmNsYXNzIENoYXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgLy8vIGZldGNoIGRhdGEgd2l0aCBjaGFubmVsLCBpZCBvZiB1cmwgXHJcbiAgICAgICAgLy8vLyAuLi4uIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBUT0tFTl9SRUZFU0hfRE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJUT0tFTl9SRUZFU0hcIilcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLCBcInbDoG8gxJHDonkgciBcIilcclxuICAgICAgICBpZiggVE9LRU5fUkVGRVNIX0RPTSAmJiAhdGhpcy5wcm9wcy5jb252ZXJzYXRpb25zICl7XHJcbiAgICAgICAgICAgIC8vLyBmZXRjaCB0b2tlbiBhY2Nlc3MgYnkgdG9rZW4gcmVmZXNoIFxyXG4gICAgICAgICAgICB2YXIgcmVmcmVzaCA9IFRPS0VOX1JFRkVTSF9ET00uZ2V0QXR0cmlidXRlKCdkYXRhLXJlZmVzaCcpLFxyXG4gICAgICAgICAgICAgICAgdXNlcklkICA9IFRPS0VOX1JFRkVTSF9ET00uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyksXHJcbiAgICAgICAgICAgICAgICBjaGFubmVsID0gVE9LRU5fUkVGRVNIX0RPTS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2hhbm5lbCcpXHJcblxyXG4gICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgICAgIC8vIHZhciBuYW1lID0gJ2lkJ1xyXG4gICAgICAgICAgICAvLyB2YXIgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgICAgIC8vIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1tcXFtcXF1dL2csICdcXFxcJCYnKTtcclxuICAgICAgICAgICAgLy8gdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnWz8mXScgKyBuYW1lICsgJyg9KFteJiNdKil8JnwjfCQpJyksXHJcbiAgICAgICAgICAgIC8vICAgICByZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpXHJcbiAgICAgICAgICAgIC8vIGlmICghcmVzdWx0cykgdXNlcklkID0gbnVsbFxyXG4gICAgICAgICAgICAvLyBlbHNlIGlmICghcmVzdWx0c1syXSkgdXNlcklkID0gJydcclxuICAgICAgICAgICAgLy8gZWxzZSB1c2VySWQgPSBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1syXS5yZXBsYWNlKC9cXCsvZywgJyAnKSlcclxuXHJcbiAgICAgICAgICAgIC8vIHZhciBuYW1lID0gJ3JlZnJlc2gnXHJcbiAgICAgICAgICAgIC8vIHZhciB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgICAgICAgLy8gbmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW1xcXV0vZywgJ1xcXFwkJicpO1xyXG4gICAgICAgICAgICAvLyB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdbPyZdJyArIG5hbWUgKyAnKD0oW14mI10qKXwmfCN8JCknKSxcclxuICAgICAgICAgICAgLy8gICAgIHJlc3VsdHMgPSByZWdleC5leGVjKHVybClcclxuICAgICAgICAgICAgLy8gaWYgKCFyZXN1bHRzKSB1c2VySWQgPSBudWxsXHJcbiAgICAgICAgICAgIC8vIGVsc2UgaWYgKCFyZXN1bHRzWzJdKSByZWZyZXNoID0gJydcclxuICAgICAgICAgICAgLy8gZWxzZSByZWZyZXNoID0gZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMl0ucmVwbGFjZSgvXFwrL2csICcgJykpXHJcblxyXG4gICAgICAgICAgICAvLyB2YXIgbmFtZSA9ICdjaGFubmVsJ1xyXG4gICAgICAgICAgICAvLyB2YXIgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgICAgIC8vIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1tcXFtcXF1dL2csICdcXFxcJCYnKTtcclxuICAgICAgICAgICAgLy8gdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnWz8mXScgKyBuYW1lICsgJyg9KFteJiNdKil8JnwjfCQpJyksXHJcbiAgICAgICAgICAgIC8vICAgICByZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpXHJcbiAgICAgICAgICAgIC8vIGlmICghcmVzdWx0cykgdXNlcklkID0gbnVsbFxyXG4gICAgICAgICAgICAvLyBlbHNlIGlmICghcmVzdWx0c1syXSkgY2hhbm5lbCA9ICcnXHJcbiAgICAgICAgICAgIC8vIGVsc2UgY2hhbm5lbCA9IGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzJdLnJlcGxhY2UoL1xcKy9nLCAnICcpKVxyXG5cclxuICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgICAgICBpZiggdXNlcklkICYmIHJlZnJlc2ggICl7XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHVybCAgICA9IG5ldyBVUkwoQ09ORklHLlNFUlZFUi5BU1NFVCgpICsgJy9hcGkvYWRtaW4vcmVhZC1tZXNzYWdlJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zID0geyB1c2VySWQsIHJlZnJlc2gsIGNoYW5uZWwgfVxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PiB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZChrZXksIHBhcmFtc1trZXldKSlcclxuXHJcbiAgICAgICAgICAgICAgICBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidG9rZW4gcmVmZXNoIGtow7RuZyDEkcO6bmdcIilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzZXR0ZXJVc2VyKHJlc3BvbnNlLnVzZXIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0dGVyQ29udmVyc2F0aW9uKHJlc3BvbnNlLmRhdGEpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0dGVyQ29udmVyc2F0aW9uQmFja3VwKHJlc3BvbnNlLmRhdGEpKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhbGVydCggXCLjgqjjg6njg7zjgYznmbrnlJ/jgZfjgb7jgZfjgZ/jgIIg5b6M44Gn44KC44GG5LiA5bqm44KE44KK55u044GX44Gm44GP44Gg44GV44GEXCIgKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpe1xyXG4gICAgICAgIHZhciBUT0tFTl9SRUZFU0hfRE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJUT0tFTl9SRUZFU0hcIilcclxuXHJcbiAgICAgICAgaWYoIFRPS0VOX1JFRkVTSF9ET00gKXtcclxuXHJcbiAgICAgICAgICAgIHZhciByZWZyZXNoID0gVE9LRU5fUkVGRVNIX0RPTS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVmZXNoJylcclxuXHJcbiAgICAgICAgICAgIC8vIHZhciBuYW1lID0gJ3JlZnJlc2gnXHJcbiAgICAgICAgICAgIC8vIHZhciB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgICAgICAgLy8gbmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW1xcXV0vZywgJ1xcXFwkJicpO1xyXG4gICAgICAgICAgICAvLyB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdbPyZdJyArIG5hbWUgKyAnKD0oW14mI10qKXwmfCN8JCknKSxcclxuICAgICAgICAgICAgLy8gICAgIHJlc3VsdHMgPSByZWdleC5leGVjKHVybClcclxuICAgICAgICAgICAgLy8gaWYgKCFyZXN1bHRzKSB1c2VySWQgPSBudWxsXHJcbiAgICAgICAgICAgIC8vIGVsc2UgaWYgKCFyZXN1bHRzWzJdKSByZWZyZXNoID0gJydcclxuICAgICAgICAgICAgLy8gZWxzZSByZWZyZXNoID0gZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMl0ucmVwbGFjZSgvXFwrL2csICcgJykpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCB0aGlzLnByb3BzLmNvbnZlcnNhdGlvbnMgKXtcclxuXHJcbiAgICAgICAgICAgIHZhciB7IGNvbnZlcnNhdGlvbnMgfSA9IHRoaXMucHJvcHMsXHJcbiAgICAgICAgICAgICAgICBjaGFubmVsQWN0aXZlQ2hhdCA9IGNvbnZlcnNhdGlvbnMuZmluZChjaGFubmVsID0+IGNoYW5uZWwuaXNBY3RpdmUpLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXMgICAgICAgICAgPSBjaGFubmVsQWN0aXZlQ2hhdCAmJiBjaGFubmVsQWN0aXZlQ2hhdC5tZXNzYWdlXHJcblxyXG4gICAgICAgICAgICB2YXIgZXhpc3ROb25lUmVhZCA9IG1lc3NhZ2VzICYmIG1lc3NhZ2VzLnNvbWUoIGZ1bmN0aW9uKCBtZXNzYWdlICl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJldHVybiAhbWVzc2FnZS5yZWFkQWRtaW5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiggZXhpc3ROb25lUmVhZCApe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW1zID0geyBjaGFubmVsOiBjaGFubmVsQWN0aXZlQ2hhdC5pZCwgcmVmcmVzaCB9XHJcblxyXG4gICAgICAgICAgICAgICAgZmV0Y2goQ09ORklHLlNFUlZFUi5BU1NFVCgpICsgJy9hcGkvYWRtaW4vcmVhZGluZycsIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcyksXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCByZXNwb25zZS5jb2RlID09IDIwMCApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHJlYWRBbGxDTWVzc2FnZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyIENoYXRcIilcclxuICAgICAgICB2YXIgeyBjb252ZXJzYXRpb25zLCB1c2VyIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LWNoYXRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctY2hhdC10ZW1hbGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlci1wYWdlLWNoYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udmVyc2F0aW9ucyAmJiB1c2VyID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaWRlQmFyQ2hhdCBjb252ZXJzYXRpb25zPXsgY29udmVyc2F0aW9ucyB9IGF1dGg9eyB1c2VyIH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdE1lc3NhZ2UgY29udmVyc2F0aW9ucz17IGNvbnZlcnNhdGlvbnMgfSBhdXRoPXsgdXNlciB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY29udmVyc2F0aW9uczogc3RhdGUuY29udmVyc2F0aW9ucyxcclxuICAgICAgICB1c2VyICAgICAgICAgOiBzdGF0ZS51c2VyXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENoYXQpIiwidmFyIGxvY2FsICAgICAgPSBcIjE1My4xMjYuMTQ5LjYzXCIsXHJcbiAgICBsb2NhbF9pcCAgID0gXCIxNTMuMTI2LjE0OS42M1wiLFxyXG4gICAgbG9jYWxfcG9ydCA9IDk5OTksXHJcbiAgICBwZWVyX3BvcnQgID0gNzAwMDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIFNFUlZFUjoge1xyXG4gICAgICAgIFBPUlQ6IGxvY2FsX3BvcnQsXHJcbiAgICAgICAgRE9NQUlOOiBsb2NhbCxcclxuICAgICAgICBJUDogbG9jYWxfaXAsXHJcbiAgICAgICAgUEVFUl9QT1JUOiBwZWVyX3BvcnQsXHJcbiAgICAgICAgUFJPVE9DT0w6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGxvY2FsX3BvcnQgPT0gNDQzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJodHRwczovL1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBcImh0dHA6Ly9cIjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIEFTU0VUOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwb3J0X3VybCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGxldCBwcm90b2NvbCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGlmIChsb2NhbF9wb3J0ID09IDQ0Mykge1xyXG4gICAgICAgICAgICAgICAgcHJvdG9jb2wgPSBcImh0dHBzOi8vXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwcm90b2NvbCA9IFwiaHR0cDovL1wiO1xyXG4gICAgICAgICAgICAgICAgcG9ydF91cmwgPSBcIjpcIiArIGxvY2FsX3BvcnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwcm90b2NvbCArIGxvY2FsICsgcG9ydF91cmw7XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBTRVJWRVJfUEhQOiB7XHJcbiAgICAgICAgVVJMOiBcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcFwiLFxyXG4gICAgfSxcclxufTtcclxuIiwiLy8gaW1wb3J0ICdjb3JlLWpzJztcclxuXHJcbi8qIHBvbHlmaWxscy5qcyAqL1xyXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJ1xyXG5pbXBvcnQgJ3JlYWN0LWFwcC1wb2x5ZmlsbC9pZTExJ1xyXG5pbXBvcnQgJ2NvcmUtanMnXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIi4vY29tcG9uZW50L0FwcC5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcic7XHJcblxyXG5pbXBvcnQgJy4vc2Nzcy9pbmRleC5zY3NzJ1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShSZWR1Y2VyKTtcclxuc3RvcmUuc3Vic2NyaWJlKGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zb2xlLmxvZygnY8OzIHRoYXkgxJHhu5VpIHRyb25nIFJlZHV4ISEnKVxyXG4gICAgY29uc29sZS5sb2coc3RvcmUuZ2V0U3RhdGUoKSk7XHJcbn0pO1xyXG5pZiAodHlwZW9mIChTdG9yYWdlKSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIFJlYWN0RE9NLnJlbmRlcihcclxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgICAgPEFwcCAvPlxyXG4gICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQ0hBVF9FTEVNRU5UXCIpKTtcclxufWVsc2V7XHJcbiAgICBhbGVydChcIuOBk+OBruODluODqeOCpuOCtuOBp+OBr+OAgeOCouODl+ODquOCseODvOOCt+ODp+ODs+OBr+ato+W4uOOBq+WLleS9nOOBl+OBvuOBm+OCk+OAgiDjgqLjg4Pjg5fjgrDjg6zjg7zjg4njgZfjgabjgY/jgaDjgZXjgYRcIilcclxufVxyXG4iLCJcclxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiXHJcblxyXG4vLy8gY29uZmlnIGdsb2JhbCB2YXJpYWJsZVxyXG52YXIgc29ja2V0ICAgICAgID0gbnVsbCxcclxuICAgIEVWRU5UICAgICAgICA9IENPTkZJR19FVkVOVFxyXG4vLy8gZW5kIHNldHRpbmcgdmFyaWFibGVcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsaXN0ZW5TY3JvbGxNZXNzYWdlKGUsIG1lc3NhZ2VzLCBjaGFubmVsQWN0aXZlICkgeyBcclxuICAgICAgICAgICAgICAgXHJcbiAgICBpZighbWVzc2FnZXMgfHwgIW1lc3NhZ2VzLmxlbmd0aCl7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICB2YXIgZG9tU2Nyb2xsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1zY3JvbGwtdG8tYm90dG9tXCIpXHJcbiAgICBjb25zb2xlLmxvZyhkb21TY3JvbGwuc2Nyb2xsSGVpZ2h0LCBkb21TY3JvbGwuY2xpZW50SGVpZ2h0ICsgXCJsaXN0ZW5TY3JvbGxNZXNzYWdlXCIpXHJcbiAgICBpZiAoJChlKS5zY3JvbGxUb3AoKSArIFxyXG4gICAgICAgICQoZSkuaW5uZXJIZWlnaHQoKSA+PSAgXHJcbiAgICAgICAgJChlKVswXS5zY3JvbGxIZWlnaHQpIHsgXHJcbiAgICAgICAgICAgIC8vLyBjaGVjayBtZXNzYWdlIHVucmVhZFxyXG4gICAgICAgICAgICB2YXIgZXhpc3ROb25lUmVhZCA9IG1lc3NhZ2VzLnNvbWUoIGZ1bmN0aW9uKCBtZXNzYWdlICl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJldHVybiAhbWVzc2FnZS5yZWFkQWRtaW4gJiYgIW1lc3NhZ2UudHlwZVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgaWYoIGV4aXN0Tm9uZVJlYWQgKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEVWRU5ULlJFQURfTUVTU0FHRV9BTEwsIFwibGlzdGVuU2Nyb2xsTWVzc2FnZVwiKVxyXG4gICAgICAgICAgICAgICAgdmFyIHVzZXJMb2NhbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSlcclxuICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KEVWRU5ULlJFQURfTUVTU0FHRV9BTEwsIHsgdXNlciA6IHVzZXJMb2NhbC5pZCwgY2hhbm5lbElkOiBjaGFubmVsQWN0aXZlLmlkLCBjaGFubmVsTmFtZTogY2hhbm5lbEFjdGl2ZS5jaGFubmVsTmFtZSB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIlxyXG4vLyBpZih0eXBlb2YgdXNlckRlZmF1bHQgPT0gdW5kZWZpbmVkKXtcclxuLy8gICB2YXIgdXNlckRlZmF1bHQgPSAnW10nXHJcbi8vIH1cclxudmFyIGNvbnZlcnNhdGlvbnMgPSBudWxsXHJcbmltcG9ydCBUWVBFIGZyb20gXCIuLi9hY3Rpb24vdHlwZS5qc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBjb252ZXJzYXRpb25zLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBcclxuICAgICAgICBjYXNlIFRZUEUuU0VUVEVSX0NPTlZFUlNBVElPTl9CQUNLVVA6IFxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWRcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn0iLCJcclxuLy8gaWYodHlwZW9mIHVzZXJEZWZhdWx0ID09IHVuZGVmaW5lZCl7XHJcbi8vICAgdmFyIHVzZXJEZWZhdWx0ID0gJ1tdJ1xyXG4vLyB9XHJcbnZhciBjb252ZXJzYXRpb25zID0gbnVsbFxyXG5pbXBvcnQgVFlQRSBmcm9tIFwiLi4vYWN0aW9uL3R5cGUuanNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gY29udmVyc2F0aW9ucywgYWN0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FzZSBUWVBFLkNIQU5ORUxfU0VUX0FDVElWRTpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkID09PSBhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLml0ZW0sIGlzQWN0aXZlOiB0cnVlIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLml0ZW0sIGlzQWN0aXZlOiBmYWxzZSB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FzZSBUWVBFLkNIQU5ORUxfUkVBRF9NRVNTQUdFIDogXHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5tYXAoIGNoYW5uZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoY2hhbm5lbC5pc0FjdGl2ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlcyA9IGNoYW5uZWwubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlcyA9IG1lc3NhZ2VzLm1hcCggbWVzc2FnZSA9PiB7IHJldHVybiB7IC4uLm1lc3NhZ2UsIHJlYWRBZG1pbjogdHJ1ZSB9IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uY2hhbm5lbCwgbWVzc2FnZSA6IG1lc3NhZ2VzIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBjaGFubmVsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgY2FzZSBUWVBFLlNFVFRFUl9DT05WRVJTQVRJT046IFxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWRcclxuXHJcbiAgICAgICAgY2FzZSBUWVBFLkZJTFRFUl9TT1JUX0NPTlY6IFxyXG5cclxuICAgICAgICAgICAgdmFyIHsgaWRzLCBkYXRhIH0gPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyggYWN0aW9uLnBheWxvYWQgKVxyXG4gICAgICAgICAgICB2YXIgY29udiAgICAgICAgICA9IFtdXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZHMubWFwKCAoaWQsIGluZGV4SUQgKSAgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiggaWQgKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2hhbm5lbFNvcnQgPSBkYXRhLmZpbmQoIGNoYW5uZWwgPT5jaGFubmVsLmlkID09IGlkIClcclxuICAgICAgICAgICAgICAgICAgICBpZiggY2hhbm5lbFNvcnQgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbFNvcnQuaXNBY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb252LnB1c2goIGNoYW5uZWxTb3J0IClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlmKCBjb252WzBdICl7XHJcbiAgICAgICAgICAgICAgICBjb252WzBdLmlzQWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjb252XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tICdyZWR1eCc7XHJcblxyXG4vLy90aMOqbSBjw6FjIHJlZHVjZXIgZnVudGlvbiBj4bqnbiDEkcaw4bujYyBjb21iaW5lIHbDoG8gxJHDonlcclxuaW1wb3J0IGNvbnZlcnNhdGlvbnMgZnJvbSAnLi9jb252ZXJzYXRpb25zLmpzJ1xyXG5pbXBvcnQgY29udmVyc2F0aW9uQmFja3VwIGZyb20gJy4vY29udmVyc2F0aW9uLWJhY2t1cC1zZWFyY2gnXHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlci5qcydcclxuLy8vLyBraOG7n2kgdOG6oW8gMSBiaeG6v24gYmnhu4N1IGRp4buFbiBSRURVQ0VSIEFMTCBcclxuY29uc3QgUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBcclxuICAgIHVzZXIgICAgICAgICAgICAgIDogdXNlcixcclxuICAgIGNvbnZlcnNhdGlvbnMgICAgIDogY29udmVyc2F0aW9ucyxcclxuICAgIGNvbnZlcnNhdGlvbkJhY2t1cDogY29udmVyc2F0aW9uQmFja3VwXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBSZWR1Y2VyOyIsInZhciB1c2VyID0gbnVsbFxyXG5cclxuaW1wb3J0IFRZUEUgZnJvbSBcIi4uL2FjdGlvbi90eXBlLmpzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IHVzZXIsIGFjdGlvbikge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgVFlQRS5TRVRURVJfVVNFUjpcclxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0yIS4vY2hhdC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTIhLi9oZWFkLWluZm8uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0yIS4vbGlzdC1tZXNzYWdlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMiEuL2xpc3QtdXNlci5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTIhLi9tZXNzYWdlLWNoYXQuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0yIS4vc2VhcmNoLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMiEuL3NpZGViYXIuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0yIS4vaW5kZXguc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==