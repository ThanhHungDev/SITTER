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
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.bg-chat-temalate {\n  background: -moz-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -webkit-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -o-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -ms-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n}\n\n.wrapper-page-chat {\n  max-width: 1100px;\n  margin: 0 auto;\n  background-color: #eeeeee;\n}\n.wrapper-page-chat:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}", ""]);
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
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-head-info {\n  background-color: #06784b;\n}\n.component-head-info .user-active-chat {\n  position: relative;\n  padding: 10px 15px;\n  box-sizing: border-box;\n  border-bottom: 1px solid #e9ecef;\n  min-height: 75px;\n}\n.component-head-info .user-active-chat .state-avatar {\n  position: absolute;\n  top: 50%;\n  display: block;\n  padding: 0;\n  margin: 0;\n  width: 50px;\n  height: 50px;\n  min-width: 50px;\n  min-height: 50px;\n  overflow: hidden;\n  box-sizing: border-box;\n  border: 1px solid #ced4da;\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.component-head-info .user-active-chat .state-avatar img {\n  width: 50px;\n  height: 50px;\n  min-width: 50px;\n  min-height: 50px;\n}\n.component-head-info .user-active-chat .text-info {\n  display: block;\n  padding: 7px 7px 7px 55px;\n  color: #fff;\n}\n.component-head-info .user-active-chat .text-info .name {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.component-head-info .user-active-chat .text-info .time-online {\n  display: block;\n  font-size: 12px;\n  color: #6c757d;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.component-head-info .user-active-chat .text-info .time-online.active-now {\n  color: #8bc34a;\n}", ""]);
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
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-list-message {\n  float: left;\n  width: 70%;\n  border-left: 1px solid #e9ecef;\n  overflow: hidden;\n}\n.component-list-message .wrapper-list-message {\n  position: relative;\n  padding: 10px 15px;\n  height: 400px;\n  overflow-y: scroll;\n  background: #ffffff;\n  scrollbar-color: rgba(0, 0, 0, 0.3) #F5F5F5;\n  scrollbar-width: thin !important;\n  -ms-overflow-style: none;\n}\n.component-list-message .wrapper-list-message:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-list-message .wrapper-list-message::-webkit-scrollbar {\n  width: 6px;\n  background-color: #eeeeee;\n}\n.component-list-message .wrapper-list-message::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-list-message .wrapper-list-message::-moz-scrollbar {\n  width: 6px;\n  background-color: #eeeeee;\n}\n.component-list-message .wrapper-list-message::-moz-scrollbar-thumb {\n  border-radius: 10px;\n  -moz-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-list-message .wrapper-list-message::-o-scrollbar {\n  width: 6px;\n  background-color: #eeeeee;\n}\n.component-list-message .wrapper-list-message::-o-scrollbar-thumb {\n  border-radius: 10px;\n  -o-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-list-message .wrapper-list-message::-ms-scrollbar {\n  width: 6px;\n  background-color: #eeeeee;\n}\n.component-list-message .wrapper-list-message::-ms-scrollbar-thumb {\n  border-radius: 10px;\n  -ms-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n\n.ticontainer {\n  display: inline-block;\n  min-width: 30px;\n}\n.ticontainer .tiblock {\n  align-items: center;\n  display: flex;\n  height: 17px;\n}\n.ticontainer .tiblock .tidot {\n  background-color: #adb5bd;\n  -webkit-animation: mercuryTypingAnimation 1.5s infinite ease-in-out;\n  animation: mercuryTypingAnimation 1.5s infinite ease-in-out;\n  border-radius: 50%;\n  display: inline-block;\n  height: 6px;\n  margin-right: 4px;\n  width: 6px;\n}\n.ticontainer .tiblock .tidot:nth-child(1) {\n  -webkit-animation-delay: 150ms;\n  animation-delay: 200ms;\n}\n.ticontainer .tiblock .tidot:nth-child(2) {\n  -webkit-animation-delay: 300ms;\n  animation-delay: 300ms;\n}\n.ticontainer .tiblock .tidot:nth-child(3) {\n  -webkit-animation-delay: 450ms;\n  animation-delay: 400ms;\n}\n\n@-webkit-keyframes mercuryTypingAnimation {\n  0% {\n    -webkit-transform: translateY(0px);\n  }\n  28% {\n    -webkit-transform: translateY(-5px);\n  }\n  44% {\n    -webkit-transform: translateY(0px);\n  }\n}\n@media only screen and (max-width: 991px) {\n  .component-list-message {\n    width: 60%;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .component-list-message {\n    width: calc(100% - 75px);\n  }\n  .component-list-message .wrapper-list-message {\n    height: 300px;\n  }\n}", ""]);
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
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-user-chat-sidebar {\n  position: relative;\n  background-color: #efffc7;\n}\n.component-user-chat-sidebar .none-read-message {\n  position: absolute;\n  right: 15px;\n  border-radius: 50%;\n  padding: 3px 6px;\n  bottom: 30%;\n  font-size: 11px;\n  line-height: 1;\n  font-style: normal;\n  background-color: #28a745;\n  color: #e9ecef;\n}\n.component-user-chat-sidebar .user-chat {\n  min-height: 50px;\n  position: relative;\n  padding: 10px 5px;\n  cursor: pointer;\n}\n.component-user-chat-sidebar .user-chat.active-message {\n  background-color: #06784b;\n}\n.component-user-chat-sidebar .user-chat.active-message .text-info {\n  color: #fff;\n}\n.component-user-chat-sidebar .user-chat.active .state-avatar {\n  border-color: #28a745;\n}\n.component-user-chat-sidebar .user-chat.active .state-avatar:after {\n  background-color: #28a745;\n}\n.component-user-chat-sidebar .user-chat .state-avatar {\n  position: absolute;\n  top: 50%;\n  display: block;\n  padding: 0;\n  width: 50px;\n  height: 50px;\n  min-width: 50px;\n  min-height: 50px;\n  margin: 0;\n  overflow: hidden;\n  box-sizing: border-box;\n  border: 1px solid #ced4da;\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.component-user-chat-sidebar .user-chat .state-avatar:after {\n  content: \".\";\n  color: transparent;\n  position: absolute;\n  top: 0;\n  left: 5px;\n  z-index: 5;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  overflow: hidden;\n  background-color: #adb5bd;\n  -webkit-transform: translateX(-50%);\n  -moz-transform: translateX(-50%);\n  -o-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n.component-user-chat-sidebar .user-chat .state-avatar img {\n  width: 50px;\n  height: 50px;\n  min-width: 50px;\n  min-height: 50px;\n}\n.component-user-chat-sidebar .user-chat .text-info {\n  display: block;\n  padding: 0 0 0 55px;\n  color: #4b515d;\n}\n.component-user-chat-sidebar .user-chat .text-info .name {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.component-user-chat-sidebar .user-chat .text-info .last-message {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n@media only screen and (max-width: 768px) {\n  .component-user-chat-sidebar .user-chat.active-message {\n    background-color: #adb5bd;\n  }\n  .component-user-chat-sidebar .user-chat .text-info {\n    width: 10px;\n    overflow: hidden;\n    padding: 0;\n    visibility: hidden;\n  }\n}", ""]);
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
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.left-message {\n  position: relative;\n  padding-right: 25px;\n  display: inline-flex;\n}\n.left-message .read {\n  position: absolute;\n  right: 0;\n  bottom: 5px;\n}\n\n.component-message-chat {\n  padding-top: 5px;\n}\n.component-message-chat:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-message-chat.typing-chat-messsage {\n  display: none;\n  padding-top: 0;\n  position: absolute;\n  top: -25px;\n  background-color: #e9ecef;\n  border-radius: 8px;\n  border: 1px solid #adb5bd;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  -moz-transform: translateX(-50%);\n  -o-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n.component-message-chat.typing-chat-messsage.show {\n  display: block;\n}\n.component-message-chat.typing-chat-messsage .typing-message .text {\n  line-height: 1;\n  padding: 2px 10px !important;\n}\n.component-message-chat .chat-group:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-message-chat .chat-group.by-me .avatar {\n  display: none !important;\n}\n.component-message-chat .chat-group.by-me .message-content {\n  float: right;\n}\n.component-message-chat .chat-group.by-me .message-content .text {\n  border-radius: 15px 15px 0 15px;\n  background-color: #efffc7;\n}\n.component-message-chat .chat-group.by-me .EMOJI {\n  text-align: right;\n}\n.component-message-chat .chat-group .avatar {\n  width: 50px;\n  min-width: 50px;\n  height: 50px;\n  margin: 0;\n  overflow: hidden;\n  float: left;\n}\n.component-message-chat .chat-group .avatar img {\n  width: 100%;\n  height: 50px;\n}\n.component-message-chat .chat-group .message-content {\n  display: inline-block;\n}\n.component-message-chat .chat-group .message-content.typing-message {\n  padding-left: 0px;\n}\n.component-message-chat .chat-group .message-content .IMAGE {\n  text-align: center;\n}\n.component-message-chat .chat-group .message-content .IMAGE .wrapper-attachment {\n  padding: 5px;\n  display: inline-block;\n  max-width: 200px;\n  position: relative;\n}\n.component-message-chat .chat-group .message-content .IMAGE .wrapper-attachment img {\n  width: 100%;\n  height: auto;\n}\n.component-message-chat .chat-group .message-content .IMAGE .wrapper-attachment .download-file-attachment {\n  position: absolute;\n  top: 5%;\n  right: 5%;\n  background-color: #dee2e6;\n  color: #0d47a1;\n  border-radius: 50%;\n  padding: 3px 0;\n  border: 1px solid #0d47a1;\n}\n.component-message-chat .chat-group .message-content .IMAGE .wrapper-attachment .download-file-attachment i {\n  font-size: 24px;\n}\n.component-message-chat .chat-group .message-content .EMOJI {\n  padding: 10px;\n  background: none !important;\n}\n.component-message-chat .chat-group .message-content .text {\n  padding: 10px;\n  border-radius: 15px;\n  white-space: pre-line;\n  word-break: break-all;\n  margin-left: 5px;\n  border-radius: 0 15px 15px 15px;\n  background-color: #dce9e9;\n  display: inline-block;\n}\n.component-message-chat .chat-group .message-content .text.EMOJI {\n  background: transparent !important;\n  font-size: 35px;\n  padding: 0 10px;\n}\n.component-message-chat .chat-group .message-content .time-label {\n  font-size: 12px;\n  padding-left: 5px;\n}\n.component-message-chat .chat-group .typing-message .text {\n  padding: 5px 10px;\n  background: transparent !important;\n}\n.component-message-chat .chat-group .typing-message .typing-text {\n  font-size: 10px;\n}", ""]);
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
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-search-user {\n  margin: 0 0 5px 5px;\n  position: relative;\n  box-sizing: content-box;\n}\n.component-search-user .search-user {\n  background-color: #f8f9fa;\n  border: 1px solid #6c757d;\n  width: 100%;\n  padding: 8px 50px 8px 30px;\n  font-size: 14px;\n  color: #6c757d;\n  font-style: \"Archivo-Medium\";\n}\n.component-search-user .search-user:focus {\n  border-color: #0d47a1;\n  color: #0d47a1;\n}\n.component-search-user .search-user:focus ~ .hero-icon {\n  color: #0d47a1;\n}\n.component-search-user .hero-icon {\n  position: absolute;\n  left: 5px;\n  bottom: 10px;\n  font-size: 25px;\n  color: #6c757d;\n  z-index: 2;\n  top: 5%;\n}\n.component-search-user .btn-search {\n  left: unset;\n  right: 1px;\n  width: 45px;\n  z-index: 5;\n  top: 2px;\n  bottom: 1px;\n  padding: 3px 10px;\n  background-color: #ccc;\n}\n\n@media only screen and (max-width: 768px) {\n  .component-search-user {\n    display: none;\n  }\n}", ""]);
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
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-sidebar-chat {\n  overflow-y: scroll;\n  float: left;\n  width: 30%;\n  background-color: #eeeeee;\n  scrollbar-color: rgba(0, 0, 0, 0.3) #F5F5F5;\n  scrollbar-width: thin !important;\n  -ms-overflow-style: none;\n}\n.component-sidebar-chat::-webkit-scrollbar {\n  width: 6px;\n  background-color: #eeeeee;\n}\n.component-sidebar-chat::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-sidebar-chat::-moz-scrollbar {\n  width: 6px;\n  background-color: #eeeeee;\n}\n.component-sidebar-chat::-moz-scrollbar-thumb {\n  border-radius: 10px;\n  -moz-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-sidebar-chat::-o-scrollbar {\n  width: 6px;\n  background-color: #eeeeee;\n}\n.component-sidebar-chat::-o-scrollbar-thumb {\n  border-radius: 10px;\n  -o-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-sidebar-chat::-ms-scrollbar {\n  width: 6px;\n  background-color: #eeeeee;\n}\n.component-sidebar-chat::-ms-scrollbar-thumb {\n  border-radius: 10px;\n  -ms-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-sidebar-chat * {\n  box-sizing: border-box;\n}\n\n.myinfo {\n  padding: 10px 5px;\n  box-sizing: border-box;\n  border-bottom: 1px solid #e9ecef;\n  min-height: 75px;\n}\n.myinfo .avatar .state-avatar {\n  display: inline-block;\n  vertical-align: middle;\n  padding: 3px;\n  margin: 0;\n  overflow: hidden;\n  box-sizing: border-box;\n  position: relative;\n  width: 50px;\n  height: 50px;\n}\n.myinfo .avatar .state-avatar:after {\n  content: \".\";\n  color: transparent;\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  right: 1px;\n  bottom: 1px;\n}\n.myinfo .avatar .state-avatar.active-online {\n  border: 2px double #00c851;\n}\n.myinfo .avatar .state-avatar img {\n  max-width: 40px;\n  max-height: 40px;\n}\n.myinfo .avatar .name {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 27ch;\n  display: inline-block;\n  vertical-align: middle;\n  padding: 10px;\n  color: #0d47a1;\n}\n\n@media only screen and (max-width: 991px) {\n  .component-sidebar-chat {\n    width: 40%;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .component-sidebar-chat {\n    width: 75px;\n  }\n  .component-sidebar-chat .user-chat .state-avatar {\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%) !important;\n    -moz-transform: translate(-50%, -50%) !important;\n    -o-transform: translate(-50%, -50%) !important;\n    -ms-transform: translate(-50%, -50%) !important;\n    transform: translate(-50%, -50%) !important;\n  }\n\n  .myinfo {\n    padding: 10px;\n  }\n  .myinfo .avatar .state-avatar img {\n    max-width: 35px;\n    max-height: 35px;\n  }\n  .myinfo .avatar .name {\n    display: none;\n  }\n}", ""]);
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
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n/**\n* display\n*/\n*,\n:after,\n:before {\n  box-sizing: border-box;\n}\n\n:focus {\n  outline: 0 !important;\n  text-decoration: none !important;\n}\n\n.d-none {\n  display: none !important;\n}\n\n.d-inline-block {\n  display: inline-block !important;\n}\n\n.d-block {\n  display: block !important;\n}\n\n.d-table {\n  display: table !important;\n}\n\n.d-table-row {\n  display: table-row !important;\n}\n\n.d-table-cell {\n  display: table-cell !important;\n}\n\n.d-flex {\n  display: -ms-flexbox !important;\n  display: flex !important;\n}\n\n.d-inline-flex {\n  display: -ms-inline-flexbox !important;\n  display: inline-flex !important;\n}\n\n.italic {\n  font-style: italic !important;\n}\n\n.not-italic {\n  font-style: normal !important;\n}\n\n.uppercase {\n  text-transform: uppercase !important;\n}\n\n.lowercase {\n  text-transform: lowercase !important;\n}\n\n.capitalize {\n  text-transform: capitalize !important;\n}\n\n.normal-case {\n  text-transform: none !important;\n}\n\n.underline {\n  text-decoration: underline !important;\n}\n\n.line-through {\n  text-decoration: line-through !important;\n}\n\n.no-underline {\n  text-decoration: none !important;\n}\n\n/**************************************************/\n.font-hairline {\n  font-weight: 100 !important;\n}\n\n.font-thin {\n  font-weight: 200 !important;\n}\n\n.font-light {\n  font-weight: 300 !important;\n}\n\n.font-normal {\n  font-weight: 400 !important;\n}\n\n.font-medium {\n  font-weight: 500 !important;\n}\n\n.font-semibold {\n  font-weight: 600 !important;\n}\n\n.font-bold {\n  font-weight: 700 !important;\n}\n\n.font-extrabold {\n  font-weight: 800 !important;\n}\n\n.font-black {\n  font-weight: 900 !important;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.vertical-align-middle {\n  vertical-align: middle;\n}\n\n.mg-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.rounded-circle {\n  border-radius: 50% !important;\n}\n\n.border {\n  border: 1px solid #dee2e6 !important;\n}\n\n.border-top {\n  border-top: 1px solid #dee2e6 !important;\n}\n\n.border-right {\n  border-right: 1px solid #dee2e6 !important;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #dee2e6 !important;\n}\n\n.border-left {\n  border-left: 1px solid #dee2e6 !important;\n}\n\n.text-color-red {\n  color: #f44336;\n}\n\n.text-color-pink {\n  color: #e91e63;\n}\n\n.text-color-purple {\n  color: #9c27b0;\n}\n\n.text-color-deep-purple {\n  color: #673ab7;\n}\n\n.text-color-indigo {\n  color: #3f51b5;\n}\n\n.text-color-blue {\n  color: #2196f3;\n}\n\n.text-color-light-blue {\n  color: #03a9f4;\n}\n\n.text-color-cyan {\n  color: #00bcd4;\n}\n\n.text-color-teal {\n  color: #009688;\n}\n\n.text-color-green {\n  color: #4caf50;\n}\n\n.text-color-light-green {\n  color: #8bc34a;\n}\n\n.text-color-lime {\n  color: #cddc39;\n}\n\n.text-color-yellow {\n  color: #ffeb3b;\n}\n\n.text-color-amber {\n  color: #ffc107;\n}\n\n.text-color-orange {\n  color: #ff9800;\n}\n\n.text-color-deep-orange {\n  color: #ff5722;\n}\n\n.text-color-brown {\n  color: #795548;\n}\n\n.text-color-black {\n  color: #000;\n}\n\n.text-color-white {\n  color: #fff;\n}\n\n.text-color-grey {\n  color: #9e9e9e;\n}\n\n.text-color-blue-grey {\n  color: #607d8b;\n}\n\n.text-color-primary-color-dark {\n  color: #0d47a1;\n}\n\n.text-color-secondary-color {\n  color: #aa66cc;\n}\n\n.text-color-secondary-color-dark {\n  color: #9933cc;\n}\n\n.text-color-default-color {\n  color: #2bbbad;\n}\n\n.text-color-default-color-dark {\n  color: #00695c;\n}\n\n.text-color-info-color {\n  color: #33b5e5;\n}\n\n.text-color-info-color-dark {\n  color: #0099cc;\n}\n\n.text-color-success-color {\n  color: #00c851;\n}\n\n.text-color-success-color-dark {\n  color: #007e33;\n}\n\n.text-color-warning-color {\n  color: #ffbb33;\n}\n\n.text-color-warning-color-dark {\n  color: #ff8800;\n}\n\n.text-color-danger-color {\n  color: #ff3547;\n}\n\n.text-color-danger-color-dark {\n  color: #cc0000;\n}\n\n.text-color-elegant-color {\n  color: #2e2e2e;\n}\n\n.text-color-elegant-color-dark {\n  color: #212121;\n}\n\n.text-color-stylish-color {\n  color: #4b515d;\n}\n\n.text-color-stylish-color-dark {\n  color: #3e4551;\n}\n\n.text-color-unique-color {\n  color: #3f729b;\n}\n\n.text-color-unique-color-dark {\n  color: #1c2331;\n}\n\n.text-color-special-color {\n  color: #37474f;\n}\n\n.text-color-special-color-dark {\n  color: #263238;\n}\n\n.text-color-primary {\n  color: #4285f4;\n}\n\n.text-color-danger {\n  color: #ff3547;\n}\n\n.text-color-warning {\n  color: #ffbb33;\n}\n\n.text-color-success {\n  color: #00c851;\n}\n\n.text-color-info {\n  color: #33b5e5;\n}\n\n.text-color-default {\n  color: #2bbbad;\n}\n\n.text-color-secondary {\n  color: #aa66cc;\n}\n\n.text-color-dark {\n  color: #212121;\n}\n\n.text-color-light {\n  color: #e0e0e0;\n}\n\n.text-color-grey-x {\n  color: #f9f9f9;\n}\n\n.border-color-red {\n  border-color: #f44336;\n}\n\n.border-color-pink {\n  border-color: #e91e63;\n}\n\n.border-color-purple {\n  border-color: #9c27b0;\n}\n\n.border-color-deep-purple {\n  border-color: #673ab7;\n}\n\n.border-color-indigo {\n  border-color: #3f51b5;\n}\n\n.border-color-blue {\n  border-color: #2196f3;\n}\n\n.border-color-light-blue {\n  border-color: #03a9f4;\n}\n\n.border-color-cyan {\n  border-color: #00bcd4;\n}\n\n.border-color-teal {\n  border-color: #009688;\n}\n\n.border-color-green {\n  border-color: #4caf50;\n}\n\n.border-color-light-green {\n  border-color: #8bc34a;\n}\n\n.border-color-lime {\n  border-color: #cddc39;\n}\n\n.border-color-yellow {\n  border-color: #ffeb3b;\n}\n\n.border-color-amber {\n  border-color: #ffc107;\n}\n\n.border-color-orange {\n  border-color: #ff9800;\n}\n\n.border-color-deep-orange {\n  border-color: #ff5722;\n}\n\n.border-color-brown {\n  border-color: #795548;\n}\n\n.border-color-black {\n  border-color: #000;\n}\n\n.border-color-white {\n  border-color: #fff;\n}\n\n.border-color-grey {\n  border-color: #9e9e9e;\n}\n\n.border-color-blue-grey {\n  border-color: #607d8b;\n}\n\n.border-color-primary-color-dark {\n  border-color: #0d47a1;\n}\n\n.border-color-secondary-color {\n  border-color: #aa66cc;\n}\n\n.border-color-secondary-color-dark {\n  border-color: #9933cc;\n}\n\n.border-color-default-color {\n  border-color: #2bbbad;\n}\n\n.border-color-default-color-dark {\n  border-color: #00695c;\n}\n\n.border-color-info-color {\n  border-color: #33b5e5;\n}\n\n.border-color-info-color-dark {\n  border-color: #0099cc;\n}\n\n.border-color-success-color {\n  border-color: #00c851;\n}\n\n.border-color-success-color-dark {\n  border-color: #007e33;\n}\n\n.border-color-warning-color {\n  border-color: #ffbb33;\n}\n\n.border-color-warning-color-dark {\n  border-color: #ff8800;\n}\n\n.border-color-danger-color {\n  border-color: #ff3547;\n}\n\n.border-color-danger-color-dark {\n  border-color: #cc0000;\n}\n\n.border-color-elegant-color {\n  border-color: #2e2e2e;\n}\n\n.border-color-elegant-color-dark {\n  border-color: #212121;\n}\n\n.border-color-stylish-color {\n  border-color: #4b515d;\n}\n\n.border-color-stylish-color-dark {\n  border-color: #3e4551;\n}\n\n.border-color-unique-color {\n  border-color: #3f729b;\n}\n\n.border-color-unique-color-dark {\n  border-color: #1c2331;\n}\n\n.border-color-special-color {\n  border-color: #37474f;\n}\n\n.border-color-special-color-dark {\n  border-color: #263238;\n}\n\n.border-color-primary {\n  border-color: #4285f4;\n}\n\n.border-color-danger {\n  border-color: #ff3547;\n}\n\n.border-color-warning {\n  border-color: #ffbb33;\n}\n\n.border-color-success {\n  border-color: #00c851;\n}\n\n.border-color-info {\n  border-color: #33b5e5;\n}\n\n.border-color-default {\n  border-color: #2bbbad;\n}\n\n.border-color-secondary {\n  border-color: #aa66cc;\n}\n\n.border-color-dark {\n  border-color: #212121;\n}\n\n.border-color-light {\n  border-color: #e0e0e0;\n}\n\n.border-color-grey-x {\n  border-color: #f9f9f9;\n}\n\n.bg-color-red {\n  background-color: #f44336;\n}\n\n.bg-color-pink {\n  background-color: #e91e63;\n}\n\n.bg-color-purple {\n  background-color: #9c27b0;\n}\n\n.bg-color-deep-purple {\n  background-color: #673ab7;\n}\n\n.bg-color-indigo {\n  background-color: #3f51b5;\n}\n\n.bg-color-blue {\n  background-color: #2196f3;\n}\n\n.bg-color-light-blue {\n  background-color: #03a9f4;\n}\n\n.bg-color-cyan {\n  background-color: #00bcd4;\n}\n\n.bg-color-teal {\n  background-color: #009688;\n}\n\n.bg-color-green {\n  background-color: #4caf50;\n}\n\n.bg-color-light-green {\n  background-color: #8bc34a;\n}\n\n.bg-color-lime {\n  background-color: #cddc39;\n}\n\n.bg-color-yellow {\n  background-color: #ffeb3b;\n}\n\n.bg-color-amber {\n  background-color: #ffc107;\n}\n\n.bg-color-orange {\n  background-color: #ff9800;\n}\n\n.bg-color-deep-orange {\n  background-color: #ff5722;\n}\n\n.bg-color-brown {\n  background-color: #795548;\n}\n\n.bg-color-black {\n  background-color: #000;\n}\n\n.bg-color-white {\n  background-color: #fff;\n}\n\n.bg-color-grey {\n  background-color: #9e9e9e;\n}\n\n.bg-color-blue-grey {\n  background-color: #607d8b;\n}\n\n.bg-color-primary-color-dark {\n  background-color: #0d47a1;\n}\n\n.bg-color-secondary-color {\n  background-color: #aa66cc;\n}\n\n.bg-color-secondary-color-dark {\n  background-color: #9933cc;\n}\n\n.bg-color-default-color {\n  background-color: #2bbbad;\n}\n\n.bg-color-default-color-dark {\n  background-color: #00695c;\n}\n\n.bg-color-info-color {\n  background-color: #33b5e5;\n}\n\n.bg-color-info-color-dark {\n  background-color: #0099cc;\n}\n\n.bg-color-success-color {\n  background-color: #00c851;\n}\n\n.bg-color-success-color-dark {\n  background-color: #007e33;\n}\n\n.bg-color-warning-color {\n  background-color: #ffbb33;\n}\n\n.bg-color-warning-color-dark {\n  background-color: #ff8800;\n}\n\n.bg-color-danger-color {\n  background-color: #ff3547;\n}\n\n.bg-color-danger-color-dark {\n  background-color: #cc0000;\n}\n\n.bg-color-elegant-color {\n  background-color: #2e2e2e;\n}\n\n.bg-color-elegant-color-dark {\n  background-color: #212121;\n}\n\n.bg-color-stylish-color {\n  background-color: #4b515d;\n}\n\n.bg-color-stylish-color-dark {\n  background-color: #3e4551;\n}\n\n.bg-color-unique-color {\n  background-color: #3f729b;\n}\n\n.bg-color-unique-color-dark {\n  background-color: #1c2331;\n}\n\n.bg-color-special-color {\n  background-color: #37474f;\n}\n\n.bg-color-special-color-dark {\n  background-color: #263238;\n}\n\n.bg-color-primary {\n  background-color: #4285f4;\n}\n\n.bg-color-danger {\n  background-color: #ff3547;\n}\n\n.bg-color-warning {\n  background-color: #ffbb33;\n}\n\n.bg-color-success {\n  background-color: #00c851;\n}\n\n.bg-color-info {\n  background-color: #33b5e5;\n}\n\n.bg-color-default {\n  background-color: #2bbbad;\n}\n\n.bg-color-secondary {\n  background-color: #aa66cc;\n}\n\n.bg-color-dark {\n  background-color: #212121;\n}\n\n.bg-color-light {\n  background-color: #e0e0e0;\n}\n\n.bg-color-grey-x {\n  background-color: #f9f9f9;\n}\n\n.w-25 {\n  width: 25;\n}\n\n.w-50 {\n  width: 50;\n}\n\n.w-55 {\n  width: 55;\n}\n\n.w-60 {\n  width: 60;\n}\n\n.w-65 {\n  width: 65;\n}\n\n.w-70 {\n  width: 70;\n}\n\n.w-75 {\n  width: 75;\n}\n\n.w-80 {\n  width: 80;\n}\n\n.w-85 {\n  width: 85;\n}\n\n.w-90 {\n  width: 90;\n}\n\n.w-95 {\n  width: 95;\n}\n\n.w-100 {\n  width: 100;\n}\n\n.text-xs {\n  font-size: 0.75rem;\n}\n\n.text-sm {\n  font-size: 0.875rem;\n}\n\n.text-base {\n  font-size: 1rem;\n}\n\n.text-lg {\n  font-size: 1.125rem;\n}\n\n.text-xl {\n  font-size: 1.25rem;\n}\n\n.text-2xl {\n  font-size: 1.5rem;\n}\n\n.text-3xl {\n  font-size: 1.875rem;\n}\n\n.text-4xl {\n  font-size: 2.25rem;\n}\n\n.text-5xl {\n  font-size: 3rem;\n}\n\n.text-6xl {\n  font-size: 4rem;\n}\n\nbody.neo-scroll {\n  overflow: hidden;\n}\n\ninput:focus, select:focus, textarea:focus, option:focus {\n  border: 1px solid #aaaaaa;\n  outline: none;\n}\n\n:root {\n  --animate-duration: 1s;\n  --animate-delay: 1s;\n  --animate-loop: 1;\n}\n\n.animated {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n}\n.animated.infinite {\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n.animated.faster {\n  animation-duration: calc($--animate-duration / 2);\n}\n.animated.fast {\n  animation-duration: calc($--animate-duration * 0.8);\n}\n.animated.slow {\n  animation-duration: calc($--animate-duration * 2);\n}\n.animated.slower {\n  animation-duration: calc($--animate-duration * 3);\n}\n.animated.loop-1 {\n  animation-iteration-count: 1;\n}\n.animated.delay-1s {\n  animation-delay: calc($--animate-delay * $i);\n}\n.animated.loop-2 {\n  animation-iteration-count: 2;\n}\n.animated.delay-1s {\n  animation-delay: calc($--animate-delay * $i);\n}\n.animated.loop-3 {\n  animation-iteration-count: 3;\n}\n.animated.delay-1s {\n  animation-delay: calc($--animate-delay * $i);\n}\n.animated.loop-4 {\n  animation-iteration-count: 4;\n}\n.animated.delay-1s {\n  animation-delay: calc($--animate-delay * $i);\n}\n\n@media print, (prefers-reduced-motion: reduce) {\n  .animated {\n    animation-duration: 1ms !important;\n    transition-duration: 1ms !important;\n    animation-iteration-count: 1 !important;\n  }\n\n  .animated[class*=Out] {\n    opacity: 0;\n  }\n}\n.animated-initial {\n  animation-name: initial !important;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@keyframes pulse {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n  50% {\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n.pulse {\n  animation-name: pulse;\n  animation-timing-function: ease-in-out;\n}\n\n@keyframes tada {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n  10%, 20% {\n    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n  }\n  30%, 50%, 70%, 90% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n  40%, 60%, 80% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n.tada {\n  animation-name: tada;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n@keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.fadeInLeft {\n  animation-name: fadeInLeft;\n}\n\n@keyframes fadeInRight {\n  from {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.fadeInRight {\n  animation-name: fadeInRight;\n}\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.fadeInUp {\n  animation-name: fadeInUp;\n}\n\n@keyframes rotateOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n}\n.rotateOut {\n  animation-name: rotateOut;\n  transform-origin: center;\n}\n\n.rotate-circle {\n  animation: rotateCircle 9s infinite;\n}\n\n/*\n Custom Animations\n */\n@keyframes rotateCircle {\n  0% {\n    transform: rotate(0deg);\n  }\n  25% {\n    transform: rotate(90deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(270deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes jackInTheBox {\n  from {\n    opacity: 0;\n    transform: scale(0.1) rotate(30deg);\n    transform-origin: center bottom;\n  }\n  50% {\n    transform: rotate(-10deg);\n  }\n  70% {\n    transform: rotate(3deg);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.jackInTheBox {\n  animation-name: jackInTheBox;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@keyframes rollIn {\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.rollIn {\n  animation-name: rollIn;\n}\n\n@keyframes zoomIn {\n  from {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n  50% {\n    opacity: 1;\n  }\n}\n.zoomIn {\n  animation-name: zoomIn;\n}\n\n@keyframes slideInDown {\n  from {\n    transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.slideInDown {\n  animation-name: slideInDown;\n}\n\n@keyframes float {\n  0% {\n    transform: translateY(0px);\n    -webkit-transition: translateY(0px);\n  }\n  50% {\n    transform: translateY(-6px);\n    -webkit-transition: translateY(-6px);\n  }\n  100% {\n    transform: translateY(0px);\n    -webkit-transition: translateY(0px);\n  }\n}\n.purple-gradient {\n  background: -moz-linear-gradient(40deg, #ff6ec4, #7873f5) !important;\n  background: -webkit-linear-gradient(40deg, #ff6ec4, #7873f5) !important;\n  background: -o-linear-gradient(40deg, #ff6ec4, #7873f5) !important;\n  background: -ms-linear-gradient(40deg, #ff6ec4, #7873f5) !important;\n  background: linear-gradient(40deg, #ff6ec4, #7873f5) !important;\n}\n\n.peach-gradient {\n  background: -moz-linear-gradient(40deg, #ffd86f, #fc6262) !important;\n  background: -webkit-linear-gradient(40deg, #ffd86f, #fc6262) !important;\n  background: -o-linear-gradient(40deg, #ffd86f, #fc6262) !important;\n  background: -ms-linear-gradient(40deg, #ffd86f, #fc6262) !important;\n  background: linear-gradient(40deg, #ffd86f, #fc6262) !important;\n}\n\n.aqua-gradient {\n  background: -moz-linear-gradient(40deg, #2096ff, #05ffa3) !important;\n  background: -webkit-linear-gradient(40deg, #2096ff, #05ffa3) !important;\n  background: -o-linear-gradient(40deg, #2096ff, #05ffa3) !important;\n  background: -ms-linear-gradient(40deg, #2096ff, #05ffa3) !important;\n  background: linear-gradient(40deg, #2096ff, #05ffa3) !important;\n}\n\n.blue-gradient {\n  background: -moz-linear-gradient(40deg, #45cafc, #303f9f) !important;\n  background: -webkit-linear-gradient(40deg, #45cafc, #303f9f) !important;\n  background: -o-linear-gradient(40deg, #45cafc, #303f9f) !important;\n  background: -ms-linear-gradient(40deg, #45cafc, #303f9f) !important;\n  background: linear-gradient(40deg, #45cafc, #303f9f) !important;\n}\n\n.home-page-gradient {\n  background: -moz-linear-gradient(40deg, #e1fefa, #fcf7f4) !important;\n  background: -webkit-linear-gradient(40deg, #e1fefa, #fcf7f4) !important;\n  background: -o-linear-gradient(40deg, #e1fefa, #fcf7f4) !important;\n  background: -ms-linear-gradient(40deg, #e1fefa, #fcf7f4) !important;\n  background: linear-gradient(40deg, #e1fefa, #fcf7f4) !important;\n}\n\n.purple-gradient-rgba {\n  background: -moz-linear-gradient(40deg, rgba(255, 110, 196, 0.9), rgba(120, 115, 245, 0.9)) !important;\n  background: -webkit-linear-gradient(40deg, rgba(255, 110, 196, 0.9), rgba(120, 115, 245, 0.9)) !important;\n  background: -o-linear-gradient(40deg, rgba(255, 110, 196, 0.9), rgba(120, 115, 245, 0.9)) !important;\n  background: -ms-linear-gradient(40deg, rgba(255, 110, 196, 0.9), rgba(120, 115, 245, 0.9)) !important;\n  background: linear-gradient(40deg, rgba(255, 110, 196, 0.9), rgba(120, 115, 245, 0.9)) !important;\n}\n\n.peach-gradient-rgba {\n  background: -moz-linear-gradient(40deg, rgba(255, 216, 111, 0.9), rgba(252, 98, 98, 0.9)) !important;\n  background: -webkit-linear-gradient(40deg, rgba(255, 216, 111, 0.9), rgba(252, 98, 98, 0.9)) !important;\n  background: -o-linear-gradient(40deg, rgba(255, 216, 111, 0.9), rgba(252, 98, 98, 0.9)) !important;\n  background: -ms-linear-gradient(40deg, rgba(255, 216, 111, 0.9), rgba(252, 98, 98, 0.9)) !important;\n  background: linear-gradient(40deg, rgba(255, 216, 111, 0.9), rgba(252, 98, 98, 0.9)) !important;\n}\n\n.aqua-gradient-rgba {\n  background: -moz-linear-gradient(40deg, rgba(32, 150, 255, 0.9), rgba(5, 255, 163, 0.9)) !important;\n  background: -webkit-linear-gradient(40deg, rgba(32, 150, 255, 0.9), rgba(5, 255, 163, 0.9)) !important;\n  background: -o-linear-gradient(40deg, rgba(32, 150, 255, 0.9), rgba(5, 255, 163, 0.9)) !important;\n  background: -ms-linear-gradient(40deg, rgba(32, 150, 255, 0.9), rgba(5, 255, 163, 0.9)) !important;\n  background: linear-gradient(40deg, rgba(32, 150, 255, 0.9), rgba(5, 255, 163, 0.9)) !important;\n}\n\n.blue-gradient-rgba {\n  background: -moz-linear-gradient(40deg, rgba(69, 202, 252, 0.9), rgba(48, 63, 159, 0.9)) !important;\n  background: -webkit-linear-gradient(40deg, rgba(69, 202, 252, 0.9), rgba(48, 63, 159, 0.9)) !important;\n  background: -o-linear-gradient(40deg, rgba(69, 202, 252, 0.9), rgba(48, 63, 159, 0.9)) !important;\n  background: -ms-linear-gradient(40deg, rgba(69, 202, 252, 0.9), rgba(48, 63, 159, 0.9)) !important;\n  background: linear-gradient(40deg, rgba(69, 202, 252, 0.9), rgba(48, 63, 159, 0.9)) !important;\n}\n\n.bg-gradient-purple {\n  background: -moz-linear-gradient(131.93deg, #ff6ec4, #7873f5) !important;\n  background: -webkit-linear-gradient(131.93deg, #ff6ec4, #7873f5) !important;\n  background: -o-linear-gradient(131.93deg, #ff6ec4, #7873f5) !important;\n  background: -ms-linear-gradient(131.93deg, #ff6ec4, #7873f5) !important;\n  background: linear-gradient(131.93deg, #ff6ec4, #7873f5) !important;\n}\n\n.bg-gradient-peach {\n  background: -moz-linear-gradient(131.93deg, #ffd86f, #fc6262) !important;\n  background: -webkit-linear-gradient(131.93deg, #ffd86f, #fc6262) !important;\n  background: -o-linear-gradient(131.93deg, #ffd86f, #fc6262) !important;\n  background: -ms-linear-gradient(131.93deg, #ffd86f, #fc6262) !important;\n  background: linear-gradient(131.93deg, #ffd86f, #fc6262) !important;\n}\n\n.bg-gradient-aqua {\n  background: -moz-linear-gradient(131.93deg, #2096ff, #05ffa3) !important;\n  background: -webkit-linear-gradient(131.93deg, #2096ff, #05ffa3) !important;\n  background: -o-linear-gradient(131.93deg, #2096ff, #05ffa3) !important;\n  background: -ms-linear-gradient(131.93deg, #2096ff, #05ffa3) !important;\n  background: linear-gradient(131.93deg, #2096ff, #05ffa3) !important;\n}\n\n.bg-gradient-blue {\n  background: -moz-linear-gradient(131.93deg, #45cafc, #303f9f) !important;\n  background: -webkit-linear-gradient(131.93deg, #45cafc, #303f9f) !important;\n  background: -o-linear-gradient(131.93deg, #45cafc, #303f9f) !important;\n  background: -ms-linear-gradient(131.93deg, #45cafc, #303f9f) !important;\n  background: linear-gradient(131.93deg, #45cafc, #303f9f) !important;\n}\n\n.bg-gradient-home-page {\n  background: -moz-linear-gradient(131.93deg, #e1fefa, #fcf7f4) !important;\n  background: -webkit-linear-gradient(131.93deg, #e1fefa, #fcf7f4) !important;\n  background: -o-linear-gradient(131.93deg, #e1fefa, #fcf7f4) !important;\n  background: -ms-linear-gradient(131.93deg, #e1fefa, #fcf7f4) !important;\n  background: linear-gradient(131.93deg, #e1fefa, #fcf7f4) !important;\n}\n\n@font-face {\n  font-family: \"HERO Icons\";\n  src: url(\"/font/IconFont/webfont.eot?v=1.4.57\");\n  src: url(\"/font/IconFont/webfont.eot?#iefix&v=1.4.57\") format(\"embedded-opentype\"), url(\"/font/IconFont/webfont.woff2?v=1.4.57\") format(\"woff2\"), url(\"/font/IconFont/webfont.woff?v=1.4.57\") format(\"woff\"), url(\"/font/IconFont/webfont.ttf?v=1.4.57\") format(\"truetype\"), url(\"/font/IconFont/webfont.svg?v=1.4.57\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\ni.hero-icon {\n  color: #607D8B;\n  display: flex;\n  width: 25px;\n  height: unset;\n  line-height: unset;\n}\ni.hero-icon:before {\n  font-size: 24px;\n  display: inline-block;\n  font: normal normal normal 24px/1 \"HERO Icons\";\n  font-size: inherit;\n  text-rendering: auto;\n  line-height: inherit;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\ni.hero-icon.hero-account-group-outline::before {\n  content: \"\\F0B58\";\n}\ni.hero-icon.hero-account-search-outline::before {\n  content: \"\\F0935\";\n}\ni.hero-icon.hero-account-tie-outline::before {\n  content: \"\\F10CA\";\n}\ni.hero-icon.hero-airport::before {\n  content: \"\\F084B\";\n}\ni.hero-icon.hero-arrow-down-bold-box-outline::before {\n  content: \"\\F0730\";\n}\ni.hero-icon.hero-arrow-up-bold-box-outline::before {\n  content: \"\\F0739\";\n}\ni.hero-icon.hero-arrow-up-box::before {\n  content: \"\\F06C3\";\n}\ni.hero-icon.hero-auto-fix::before {\n  content: \"\\F0068\";\n}\ni.hero-icon.hero-auto-upload::before {\n  content: \"\\F0069\";\n}\ni.hero-icon.hero-ballot-recount-outline::before {\n  content: \"\\F0C3A\";\n}\ni.hero-icon.hero-call-made::before {\n  content: \"\\F00F7\";\n}\ni.hero-icon.hero-card-account-mail-outline::before {\n  content: \"\\F0E98\";\n}\ni.hero-icon.hero-cart-plus::before {\n  content: \"\\F0112\";\n}\ni.hero-icon.hero-cellphone::before {\n  content: \"\\F011C\";\n}\ni.hero-icon.hero-cellphone-cog::before {\n  content: \"\\F0951\";\n}\ni.hero-icon.hero-cellphone-message::before {\n  content: \"\\F08D3\";\n}\ni.hero-icon.hero-cellphone-nfc::before {\n  content: \"\\F0E90\";\n}\ni.hero-icon.hero-certificate-outline::before {\n  content: \"\\F1188\";\n}\ni.hero-icon.hero-check-circle::before {\n  content: \"\\F05E0\";\n}\ni.hero-icon.hero-check-circle-outline::before {\n  content: \"\\F05E1\";\n}\ni.hero-icon.hero-clippy::before {\n  content: \"\\F014F\";\n}\ni.hero-icon.hero-cloud-download-outline::before {\n  content: \"\\F0B7D\";\n}\ni.hero-icon.hero-creation::before {\n  content: \"\\F0674\";\n}\ni.hero-icon.hero-email-edit-outline::before {\n  content: \"\\F0EE4\";\n}\ni.hero-icon.hero-emoticon::before {\n  content: \"\\F0C68\";\n}\ni.hero-icon.hero-emoticon-angry::before {\n  content: \"\\F0C69\";\n}\ni.hero-icon.hero-emoticon-angry-outline::before {\n  content: \"\\F0C6A\";\n}\ni.hero-icon.hero-emoticon-confused::before {\n  content: \"\\F10DE\";\n}\ni.hero-icon.hero-emoticon-confused-outline::before {\n  content: \"\\F10DF\";\n}\ni.hero-icon.hero-emoticon-cool::before {\n  content: \"\\F0C6B\";\n}\ni.hero-icon.hero-emoticon-cool-outline::before {\n  content: \"\\F01F3\";\n}\ni.hero-icon.hero-emoticon-cry::before {\n  content: \"\\F0C6C\";\n}\ni.hero-icon.hero-emoticon-cry-outline::before {\n  content: \"\\F0C6D\";\n}\ni.hero-icon.hero-emoticon-dead::before {\n  content: \"\\F0C6E\";\n}\ni.hero-icon.hero-emoticon-dead-outline::before {\n  content: \"\\F069B\";\n}\ni.hero-icon.hero-emoticon-devil::before {\n  content: \"\\F0C6F\";\n}\ni.hero-icon.hero-emoticon-devil-outline::before {\n  content: \"\\F01F4\";\n}\ni.hero-icon.hero-emoticon-excited::before {\n  content: \"\\F0C70\";\n}\ni.hero-icon.hero-emoticon-excited-outline::before {\n  content: \"\\F069C\";\n}\ni.hero-icon.hero-emoticon-frown::before {\n  content: \"\\F0F4C\";\n}\ni.hero-icon.hero-emoticon-frown-outline::before {\n  content: \"\\F0F4D\";\n}\ni.hero-icon.hero-emoticon-happy::before {\n  content: \"\\F0C71\";\n}\ni.hero-icon.hero-emoticon-happy-outline::before {\n  content: \"\\F01F5\";\n}\ni.hero-icon.hero-emoticon-kiss::before {\n  content: \"\\F0C72\";\n}\ni.hero-icon.hero-emoticon-kiss-outline::before {\n  content: \"\\F0C73\";\n}\ni.hero-icon.hero-emoticon-lol::before {\n  content: \"\\F1214\";\n}\ni.hero-icon.hero-emoticon-lol-outline::before {\n  content: \"\\F1215\";\n}\ni.hero-icon.hero-emoticon-neutral::before {\n  content: \"\\F0C74\";\n}\ni.hero-icon.hero-emoticon-neutral-outline::before {\n  content: \"\\F01F6\";\n}\ni.hero-icon.hero-emoticon-outline::before {\n  content: \"\\F01F2\";\n}\ni.hero-icon.hero-emoticon-poop::before {\n  content: \"\\F01F7\";\n}\ni.hero-icon.hero-emoticon-poop-outline::before {\n  content: \"\\F0C75\";\n}\ni.hero-icon.hero-emoticon-sad::before {\n  content: \"\\F0C76\";\n}\ni.hero-icon.hero-emoticon-sad-outline::before {\n  content: \"\\F01F8\";\n}\ni.hero-icon.hero-emoticon-tongue::before {\n  content: \"\\F01F9\";\n}\ni.hero-icon.hero-emoticon-tongue-outline::before {\n  content: \"\\F0C77\";\n}\ni.hero-icon.hero-emoticon-wink::before {\n  content: \"\\F0C78\";\n}\ni.hero-icon.hero-emoticon-wink-outline::before {\n  content: \"\\F0C79\";\n}\ni.hero-icon.hero-file::before {\n  content: \"\\F0214\";\n}\ni.hero-icon.hero-file-cloud-outline::before {\n  content: \"\\F102A\";\n}\ni.hero-icon.hero-form-select::before {\n  content: \"\\F1401\";\n}\ni.hero-icon.hero-format-list-text::before {\n  content: \"\\F126F\";\n}\ni.hero-icon.hero-google-ads::before {\n  content: \"\\F0C87\";\n}\ni.hero-icon.hero-hand-okay::before {\n  content: \"\\F0A50\";\n}\ni.hero-icon.hero-hand-pointing-right::before {\n  content: \"\\F02C7\";\n}\ni.hero-icon.hero-headset::before {\n  content: \"\\F02CE\";\n}\ni.hero-icon.hero-heart-multiple-outline::before {\n  content: \"\\F0A57\";\n}\ni.hero-icon.hero-home-map-marker::before {\n  content: \"\\F05F8\";\n}\ni.hero-icon.hero-human-male-child::before {\n  content: \"\\F138C\";\n}\ni.hero-icon.hero-laptop::before {\n  content: \"\\F0322\";\n}\ni.hero-icon.hero-layers-search-outline::before {\n  content: \"\\F1207\";\n}\ni.hero-icon.hero-message-cog-outline::before {\n  content: \"\\F1172\";\n}\ni.hero-icon.hero-message-text-outline::before {\n  content: \"\\F036A\";\n}\ni.hero-icon.hero-mouse::before {\n  content: \"\\F037D\";\n}\ni.hero-icon.hero-mouse-bluetooth::before {\n  content: \"\\F098B\";\n}\ni.hero-icon.hero-mouse-off::before {\n  content: \"\\F037E\";\n}\ni.hero-icon.hero-mouse-variant::before {\n  content: \"\\F037F\";\n}\ni.hero-icon.hero-mouse-variant-off::before {\n  content: \"\\F0380\";\n}\ni.hero-icon.hero-newspaper-variant-multiple-outline::before {\n  content: \"\\F1003\";\n}\ni.hero-icon.hero-newspaper-variant-outline::before {\n  content: \"\\F1004\";\n}\ni.hero-icon.hero-phone-in-talk-outline::before {\n  content: \"\\F1182\";\n}\ni.hero-icon.hero-plus-outline::before {\n  content: \"\\F0705\";\n}\ni.hero-icon.hero-responsive::before {\n  content: \"\\F045E\";\n}\ni.hero-icon.hero-select::before {\n  content: \"\\F0485\";\n}\ni.hero-icon.hero-selection-search::before {\n  content: \"\\F1205\";\n}\ni.hero-icon.hero-send::before {\n  content: \"\\F048A\";\n}\ni.hero-icon.hero-send-check-outline::before {\n  content: \"\\F1162\";\n}\ni.hero-icon.hero-send-outline::before {\n  content: \"\\F1165\";\n}\ni.hero-icon.hero-share-all-outline::before {\n  content: \"\\F11F5\";\n}\ni.hero-icon.hero-star-box-multiple-outline::before {\n  content: \"\\F1287\";\n}\ni.hero-icon.hero-sticker-emoji::before {\n  content: \"\\F0785\";\n}\ni.hero-icon.hero-tablet-ipad::before {\n  content: \"\\F04F8\";\n}\ni.hero-icon.hero-television-clean::before {\n  content: \"\\F1110\";\n}\ni.hero-icon.hero-update::before {\n  content: \"\\F06B0\";\n}\ni.hero-icon.hero-zodiac-taurus::before {\n  content: \"\\F0A87\";\n}\ni.hero-icon.hero-zodiac-virgo::before {\n  content: \"\\F0A88\";\n}", ""]);
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

  function Search() {
    var _temp, _this;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _super.call.apply(_super, [this].concat(args)), _this.searchUser = function () {
      console.log("searchUser");

      var backupData = _toConsumableArray(_this.props.conversationBackup),
          listName = [],
          text = _this.search.value,
          output = text.split('');

      if (!text || !text.trim()) {
        _this.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_3__["setterConversation"])(_this.props.conversationBackup));
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
      }
    }, _this.handleSearchUser = function (event) {
      if (event.keyCode == 13) {
        _this.searchUser();
      }
    }, _temp));
  }

  _createClass(Search, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-search-user"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-account-search-outline"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "search-user",
        ref: function ref(input) {
          return _this2.search = input;
        },
        onKeyUp: this.handleSearchUser,
        autoComplete: "off",
        name: "search-user",
        placeholder: "\u5165\u529B\u3057\u3066\u8AB0\u304B\u3092\u898B\u3064\u3051\u308B"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "btn-search hero-icon hero-layers-search-outline",
        onClick: this.searchUser
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
var local = "kaseifu-babysitter.com",
    local_ip = "153.126.142.67",
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
    URL: "http://kaseifu-babysitter.com"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9jaGF0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9oZWFkLWluZm8uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jaGF0L2xpc3QtbWVzc2FnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2NoYXQvbGlzdC11c2VyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9tZXNzYWdlLWNoYXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jaGF0L3NlYXJjaC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2NoYXQvc2lkZWJhci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9uL3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0L0hlYWRJbmZvLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoYXQvTGlzdE1lc3NhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvQ2hhdC9MaXN0VXNlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0L01lc3NhZ2VDaGF0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoYXQvU2VhcmNoLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoYXQvU2lkZUJhckNoYXQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvQ2hhdC9Vc2VyQ2hhdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicmFyeS9zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2VyL2NvbnZlcnNhdGlvbi1iYWNrdXAtc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2VyL2NvbnZlcnNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jaGF0L2NoYXQuc2Nzcz9hYzUxIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2NoYXQvaGVhZC1pbmZvLnNjc3M/ODMxOSIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jaGF0L2xpc3QtbWVzc2FnZS5zY3NzPzY4YTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9saXN0LXVzZXIuc2Nzcz9iNWQ3Iiwid2VicGFjazovLy8uL3NyYy9zY3NzL2NoYXQvbWVzc2FnZS1jaGF0LnNjc3M/N2NmZCIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jaGF0L3NlYXJjaC5zY3NzP2ZiNDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9zaWRlYmFyLnNjc3M/MmE5MyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9pbmRleC5zY3NzPzg3NjYiXSwibmFtZXMiOlsic2V0dGVyVXNlciIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsIlRZUEUiLCJTRVRURVJfVVNFUiIsInBheWxvYWQiLCJmZXRjaGVkIiwic2V0dGVyQ29udmVyc2F0aW9uIiwiY29udiIsIlNFVFRFUl9DT05WRVJTQVRJT04iLCJzZXR0ZXJDb252ZXJzYXRpb25CYWNrdXAiLCJTRVRURVJfQ09OVkVSU0FUSU9OX0JBQ0tVUCIsImNoYW5nZUNoYW5uZWxBY3RpdmUiLCJpZCIsIkNIQU5ORUxfU0VUX0FDVElWRSIsInJlYWRBbGxDTWVzc2FnZSIsIkNIQU5ORUxfUkVBRF9NRVNTQUdFIiwiZmlsdGVyU29ydENvbnZlcnNhdGlvbiIsIm9iamVjdElkc0FuZERhdGFCYWNrdXAiLCJGSUxURVJfU09SVF9DT05WIiwiQXBwIiwiQ29tcG9uZW50IiwiSGVhZEluZm8iLCJjb252ZXJzYXRpb25zIiwicHJvcHMiLCJjaGFubmVsQWN0aXZlIiwiZmluZCIsImNoYW5uZWwiLCJpc0FjdGl2ZSIsIkNPTkZJRyIsIlNFUlZFUl9QSFAiLCJVUkwiLCJhdmF0YXIiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiTGlzdE1lc3NhZ2UiLCJjaGFubmVsQWN0aXZlQ2hhdCIsIm1lc3NhZ2VzIiwibWVzc2FnZSIsImxzdE1lc3NhZ2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiJCIsIm9uIiwibGlzdGVuU2Nyb2xsTWVzc2FnZSIsImF1dGgiLCJtYXAiLCJrZXkiLCJMaXN0VXNlciIsIk1lc3NhZ2VDaGF0IiwibXlpbmZvIiwibmFtZSIsInVzZXJJbmZvIiwidHlwZU1lc3NhZ2UiLCJzdHlsZSIsIlRJTUVfRElFX0ZJTEUiLCJ0aW1lIiwiRGF0ZSIsImNyZWF0ZWRBdCIsImF0dGFjaG1lbnQiLCJhdHRhY2hFbGVtZW50IiwiaW5kZXgiLCJnZXRUaW1lIiwidXJsIiwiY29udGVudCIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsInJlYWRBZG1pbiIsIlNlYXJjaCIsInNlYXJjaFVzZXIiLCJiYWNrdXBEYXRhIiwiY29udmVyc2F0aW9uQmFja3VwIiwibGlzdE5hbWUiLCJ0ZXh0Iiwic2VhcmNoIiwidmFsdWUiLCJvdXRwdXQiLCJzcGxpdCIsInRyaW0iLCJkaXNwYXRjaCIsIm9iaiIsInNvcnQiLCJwdXNoIiwiaXRlbSIsInRvVXBwZXJDYXNlIiwiaW5jbHVkZXMiLCJhIiwiYiIsImxzdElkU29ydGVkIiwiaWRzIiwiZGF0YSIsImhhbmRsZVNlYXJjaFVzZXIiLCJldmVudCIsImtleUNvZGUiLCJpbnB1dCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY29ubmVjdCIsIlNpZGVCYXJDaGF0IiwiaW5mb3IiLCJsZW5ndGgiLCJVc2VyQ2hhdCIsImNoYW5nZUFjdGl2ZVVzZXIiLCJfdGhpcyIsImNsYXNzQWN0aXZlT25saW5lIiwib25saW5lIiwiY2xhc3NBY3RpdmVNZXNzYWdlIiwic2xpY2UiLCJsYXN0SXRlbSIsIm11bmJlck5vbmVSZWFkIiwiZmlsdGVyIiwiQ2hhdCIsIlRPS0VOX1JFRkVTSF9ET00iLCJyZWZyZXNoIiwiZ2V0QXR0cmlidXRlIiwidXNlcklkIiwiU0VSVkVSIiwiQVNTRVQiLCJwYXJhbXMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInNlYXJjaFBhcmFtcyIsImFwcGVuZCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzcG9uc2UiLCJjb2RlIiwiRXJyb3IiLCJlcnJvciIsImFsZXJ0IiwiZXhpc3ROb25lUmVhZCIsInNvbWUiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImxvY2FsIiwibG9jYWxfaXAiLCJsb2NhbF9wb3J0IiwicGVlcl9wb3J0IiwiUE9SVCIsIkRPTUFJTiIsIklQIiwiUEVFUl9QT1JUIiwiUFJPVE9DT0wiLCJwb3J0X3VybCIsInByb3RvY29sIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlJlZHVjZXIiLCJzdWJzY3JpYmUiLCJnZXRTdGF0ZSIsIlN0b3JhZ2UiLCJSZWFjdERPTSIsInJlbmRlciIsInNvY2tldCIsIkVWRU5UIiwiQ09ORklHX0VWRU5UIiwiZSIsImRvbVNjcm9sbCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsInNjcm9sbFRvcCIsImlubmVySGVpZ2h0IiwiUkVBRF9NRVNTQUdFX0FMTCIsInVzZXJMb2NhbCIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImVtaXQiLCJjaGFubmVsSWQiLCJjaGFubmVsTmFtZSIsImFjdGlvbiIsImluZGV4SUQiLCJjaGFubmVsU29ydCIsImNvbWJpbmVSZWR1Y2VycyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLHVCQUF1QjtRQUN2Qzs7O1FBR0E7UUFDQTtRQUNBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRztBQUNBO0FBQ0EsY0FBYyxRQUFTLGVBQWUsaUNBQWlDLDJEQUEyRCxHQUFHLGNBQWMsMEJBQTBCLHdEQUF3RCxHQUFHLGNBQWMsb0NBQW9DLG1EQUFtRCxHQUFHLGNBQWMsdUNBQXVDLHdEQUF3RCxHQUFHLGNBQWMsNkNBQTZDLG1FQUFtRSxHQUFHLHFCQUFxQiwwRUFBMEUsNkVBQTZFLHdFQUF3RSx5RUFBeUUscUVBQXFFLEdBQUcsd0JBQXdCLHNCQUFzQixtQkFBbUIsOEJBQThCLEdBQUcsNEJBQTRCLGdCQUFnQixtQkFBbUIsbUJBQW1CLGNBQWMsbUJBQW1CLHVCQUF1QixxQkFBcUIsR0FBRztBQUMxc0M7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUyxlQUFlLGlDQUFpQywyREFBMkQsR0FBRyxjQUFjLDBCQUEwQix3REFBd0QsR0FBRyxjQUFjLG9DQUFvQyxtREFBbUQsR0FBRyxjQUFjLHVDQUF1Qyx3REFBd0QsR0FBRyxjQUFjLDZDQUE2QyxtRUFBbUUsR0FBRyx3QkFBd0IsOEJBQThCLEdBQUcsMENBQTBDLHVCQUF1Qix1QkFBdUIsMkJBQTJCLHFDQUFxQyxxQkFBcUIsR0FBRyx3REFBd0QsdUJBQXVCLGFBQWEsbUJBQW1CLGVBQWUsY0FBYyxnQkFBZ0IsaUJBQWlCLG9CQUFvQixxQkFBcUIscUJBQXFCLDJCQUEyQiw4QkFBOEIsd0NBQXdDLHFDQUFxQyxtQ0FBbUMsb0NBQW9DLGdDQUFnQyxHQUFHLDREQUE0RCxnQkFBZ0IsaUJBQWlCLG9CQUFvQixxQkFBcUIsR0FBRyxxREFBcUQsbUJBQW1CLDhCQUE4QixnQkFBZ0IsR0FBRywyREFBMkQsbUJBQW1CLHdCQUF3QixxQkFBcUIsNEJBQTRCLEdBQUcsa0VBQWtFLG1CQUFtQixvQkFBb0IsbUJBQW1CLHdCQUF3QixxQkFBcUIsNEJBQTRCLEdBQUcsNkVBQTZFLG1CQUFtQixHQUFHO0FBQzU4RDtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRztBQUNBO0FBQ0EsY0FBYyxRQUFTLGVBQWUsaUNBQWlDLDJEQUEyRCxHQUFHLGNBQWMsMEJBQTBCLHdEQUF3RCxHQUFHLGNBQWMsb0NBQW9DLG1EQUFtRCxHQUFHLGNBQWMsdUNBQXVDLHdEQUF3RCxHQUFHLGNBQWMsNkNBQTZDLG1FQUFtRSxHQUFHLDJCQUEyQixnQkFBZ0IsZUFBZSxtQ0FBbUMscUJBQXFCLEdBQUcsaURBQWlELHVCQUF1Qix1QkFBdUIsa0JBQWtCLHVCQUF1Qix3QkFBd0IsZ0RBQWdELHFDQUFxQyw2QkFBNkIsR0FBRyx1REFBdUQsZ0JBQWdCLG1CQUFtQixtQkFBbUIsY0FBYyxtQkFBbUIsdUJBQXVCLHFCQUFxQixHQUFHLG9FQUFvRSxlQUFlLDhCQUE4QixHQUFHLDBFQUEwRSx3QkFBd0IseURBQXlELDJCQUEyQixHQUFHLGlFQUFpRSxlQUFlLDhCQUE4QixHQUFHLHVFQUF1RSx3QkFBd0Isc0RBQXNELDJCQUEyQixHQUFHLCtEQUErRCxlQUFlLDhCQUE4QixHQUFHLHFFQUFxRSx3QkFBd0Isb0RBQW9ELDJCQUEyQixHQUFHLGdFQUFnRSxlQUFlLDhCQUE4QixHQUFHLHNFQUFzRSx3QkFBd0IscURBQXFELDJCQUEyQixHQUFHLGtCQUFrQiwwQkFBMEIsb0JBQW9CLEdBQUcseUJBQXlCLHdCQUF3QixrQkFBa0IsaUJBQWlCLEdBQUcsZ0NBQWdDLDhCQUE4Qix3RUFBd0UsZ0VBQWdFLHVCQUF1QiwwQkFBMEIsZ0JBQWdCLHNCQUFzQixlQUFlLEdBQUcsNkNBQTZDLG1DQUFtQywyQkFBMkIsR0FBRyw2Q0FBNkMsbUNBQW1DLDJCQUEyQixHQUFHLDZDQUE2QyxtQ0FBbUMsMkJBQTJCLEdBQUcsK0NBQStDLFFBQVEseUNBQXlDLEtBQUssU0FBUywwQ0FBMEMsS0FBSyxTQUFTLHlDQUF5QyxLQUFLLEdBQUcsNkNBQTZDLDZCQUE2QixpQkFBaUIsS0FBSyxHQUFHLDZDQUE2Qyw2QkFBNkIsK0JBQStCLEtBQUssbURBQW1ELG9CQUFvQixLQUFLLEdBQUc7QUFDbGlIO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0E7QUFDQSxjQUFjLFFBQVMsZUFBZSxpQ0FBaUMsMkRBQTJELEdBQUcsY0FBYywwQkFBMEIsd0RBQXdELEdBQUcsY0FBYyxvQ0FBb0MsbURBQW1ELEdBQUcsY0FBYyx1Q0FBdUMsd0RBQXdELEdBQUcsY0FBYyw2Q0FBNkMsbUVBQW1FLEdBQUcsZ0NBQWdDLHVCQUF1Qiw4QkFBOEIsR0FBRyxtREFBbUQsdUJBQXVCLGdCQUFnQix1QkFBdUIscUJBQXFCLGdCQUFnQixvQkFBb0IsbUJBQW1CLHVCQUF1Qiw4QkFBOEIsbUJBQW1CLEdBQUcsMkNBQTJDLHFCQUFxQix1QkFBdUIsc0JBQXNCLG9CQUFvQixHQUFHLDBEQUEwRCw4QkFBOEIsR0FBRyxxRUFBcUUsZ0JBQWdCLEdBQUcsZ0VBQWdFLDBCQUEwQixHQUFHLHNFQUFzRSw4QkFBOEIsR0FBRyx5REFBeUQsdUJBQXVCLGFBQWEsbUJBQW1CLGVBQWUsZ0JBQWdCLGlCQUFpQixvQkFBb0IscUJBQXFCLGNBQWMscUJBQXFCLDJCQUEyQiw4QkFBOEIsd0NBQXdDLHFDQUFxQyxtQ0FBbUMsb0NBQW9DLGdDQUFnQyxHQUFHLCtEQUErRCxtQkFBbUIsdUJBQXVCLHVCQUF1QixXQUFXLGNBQWMsZUFBZSxnQkFBZ0IsaUJBQWlCLHVCQUF1QixxQkFBcUIsOEJBQThCLHdDQUF3QyxxQ0FBcUMsbUNBQW1DLG9DQUFvQyxnQ0FBZ0MsR0FBRyw2REFBNkQsZ0JBQWdCLGlCQUFpQixvQkFBb0IscUJBQXFCLEdBQUcsc0RBQXNELG1CQUFtQix3QkFBd0IsbUJBQW1CLEdBQUcsNERBQTRELG1CQUFtQix3QkFBd0IscUJBQXFCLDRCQUE0QixHQUFHLG9FQUFvRSxtQkFBbUIsd0JBQXdCLHFCQUFxQiw0QkFBNEIsR0FBRywrQ0FBK0MsNERBQTRELGdDQUFnQyxLQUFLLHdEQUF3RCxrQkFBa0IsdUJBQXVCLGlCQUFpQix5QkFBeUIsS0FBSyxHQUFHO0FBQ3BxRztBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRztBQUNBO0FBQ0EsY0FBYyxRQUFTLGVBQWUsaUNBQWlDLDJEQUEyRCxHQUFHLGNBQWMsMEJBQTBCLHdEQUF3RCxHQUFHLGNBQWMsb0NBQW9DLG1EQUFtRCxHQUFHLGNBQWMsdUNBQXVDLHdEQUF3RCxHQUFHLGNBQWMsNkNBQTZDLG1FQUFtRSxHQUFHLGlCQUFpQix1QkFBdUIsd0JBQXdCLHlCQUF5QixHQUFHLHVCQUF1Qix1QkFBdUIsYUFBYSxnQkFBZ0IsR0FBRyw2QkFBNkIscUJBQXFCLEdBQUcsaUNBQWlDLGdCQUFnQixtQkFBbUIsbUJBQW1CLGNBQWMsbUJBQW1CLHVCQUF1QixxQkFBcUIsR0FBRyxnREFBZ0Qsa0JBQWtCLG1CQUFtQix1QkFBdUIsZUFBZSw4QkFBOEIsdUJBQXVCLDhCQUE4QixjQUFjLHdDQUF3QyxxQ0FBcUMsbUNBQW1DLG9DQUFvQyxnQ0FBZ0MsR0FBRyxxREFBcUQsbUJBQW1CLEdBQUcsc0VBQXNFLG1CQUFtQixpQ0FBaUMsR0FBRyw2Q0FBNkMsZ0JBQWdCLG1CQUFtQixtQkFBbUIsY0FBYyxtQkFBbUIsdUJBQXVCLHFCQUFxQixHQUFHLHFEQUFxRCw2QkFBNkIsR0FBRyw4REFBOEQsaUJBQWlCLEdBQUcsb0VBQW9FLG9DQUFvQyw4QkFBOEIsR0FBRyxvREFBb0Qsc0JBQXNCLEdBQUcsK0NBQStDLGdCQUFnQixvQkFBb0IsaUJBQWlCLGNBQWMscUJBQXFCLGdCQUFnQixHQUFHLG1EQUFtRCxnQkFBZ0IsaUJBQWlCLEdBQUcsd0RBQXdELDBCQUEwQixHQUFHLHVFQUF1RSxzQkFBc0IsR0FBRywrREFBK0QsdUJBQXVCLEdBQUcsbUZBQW1GLGlCQUFpQiwwQkFBMEIscUJBQXFCLHVCQUF1QixHQUFHLHVGQUF1RixnQkFBZ0IsaUJBQWlCLEdBQUcsNkdBQTZHLHVCQUF1QixZQUFZLGNBQWMsOEJBQThCLG1CQUFtQix1QkFBdUIsbUJBQW1CLDhCQUE4QixHQUFHLCtHQUErRyxvQkFBb0IsR0FBRywrREFBK0Qsa0JBQWtCLGdDQUFnQyxHQUFHLDhEQUE4RCxrQkFBa0Isd0JBQXdCLDBCQUEwQiwwQkFBMEIscUJBQXFCLG9DQUFvQyw4QkFBOEIsMEJBQTBCLEdBQUcsb0VBQW9FLHVDQUF1QyxvQkFBb0Isb0JBQW9CLEdBQUcsb0VBQW9FLG9CQUFvQixzQkFBc0IsR0FBRyw2REFBNkQsc0JBQXNCLHVDQUF1QyxHQUFHLG9FQUFvRSxvQkFBb0IsR0FBRztBQUM1bkk7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUyxlQUFlLGlDQUFpQywyREFBMkQsR0FBRyxjQUFjLDBCQUEwQix3REFBd0QsR0FBRyxjQUFjLG9DQUFvQyxtREFBbUQsR0FBRyxjQUFjLHVDQUF1Qyx3REFBd0QsR0FBRyxjQUFjLDZDQUE2QyxtRUFBbUUsR0FBRywwQkFBMEIsd0JBQXdCLHVCQUF1Qiw0QkFBNEIsR0FBRyx1Q0FBdUMsOEJBQThCLDhCQUE4QixnQkFBZ0IsK0JBQStCLG9CQUFvQixtQkFBbUIsbUNBQW1DLEdBQUcsNkNBQTZDLDBCQUEwQixtQkFBbUIsR0FBRywwREFBMEQsbUJBQW1CLEdBQUcscUNBQXFDLHVCQUF1QixjQUFjLGlCQUFpQixvQkFBb0IsbUJBQW1CLGVBQWUsWUFBWSxHQUFHLHNDQUFzQyxnQkFBZ0IsZUFBZSxnQkFBZ0IsZUFBZSxhQUFhLGdCQUFnQixzQkFBc0IsMkJBQTJCLEdBQUcsK0NBQStDLDRCQUE0QixvQkFBb0IsS0FBSyxHQUFHO0FBQ2ovQztBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRztBQUNBO0FBQ0EsY0FBYyxRQUFTLGVBQWUsaUNBQWlDLDJEQUEyRCxHQUFHLGNBQWMsMEJBQTBCLHdEQUF3RCxHQUFHLGNBQWMsb0NBQW9DLG1EQUFtRCxHQUFHLGNBQWMsdUNBQXVDLHdEQUF3RCxHQUFHLGNBQWMsNkNBQTZDLG1FQUFtRSxHQUFHLDJCQUEyQix1QkFBdUIsZ0JBQWdCLGVBQWUsOEJBQThCLGdEQUFnRCxxQ0FBcUMsNkJBQTZCLEdBQUcsOENBQThDLGVBQWUsOEJBQThCLEdBQUcsb0RBQW9ELHdCQUF3Qix5REFBeUQsMkJBQTJCLEdBQUcsMkNBQTJDLGVBQWUsOEJBQThCLEdBQUcsaURBQWlELHdCQUF3QixzREFBc0QsMkJBQTJCLEdBQUcseUNBQXlDLGVBQWUsOEJBQThCLEdBQUcsK0NBQStDLHdCQUF3QixvREFBb0QsMkJBQTJCLEdBQUcsMENBQTBDLGVBQWUsOEJBQThCLEdBQUcsZ0RBQWdELHdCQUF3QixxREFBcUQsMkJBQTJCLEdBQUcsNkJBQTZCLDJCQUEyQixHQUFHLGFBQWEsc0JBQXNCLDJCQUEyQixxQ0FBcUMscUJBQXFCLEdBQUcsaUNBQWlDLDBCQUEwQiwyQkFBMkIsaUJBQWlCLGNBQWMscUJBQXFCLDJCQUEyQix1QkFBdUIsZ0JBQWdCLGlCQUFpQixHQUFHLHVDQUF1QyxtQkFBbUIsdUJBQXVCLHVCQUF1QixhQUFhLGNBQWMsZUFBZSxnQkFBZ0IsR0FBRywrQ0FBK0MsK0JBQStCLEdBQUcscUNBQXFDLG9CQUFvQixxQkFBcUIsR0FBRyx5QkFBeUIsd0JBQXdCLHFCQUFxQiw0QkFBNEIsb0JBQW9CLDBCQUEwQiwyQkFBMkIsa0JBQWtCLG1CQUFtQixHQUFHLCtDQUErQyw2QkFBNkIsaUJBQWlCLEtBQUssR0FBRyw2Q0FBNkMsNkJBQTZCLGtCQUFrQixLQUFLLHNEQUFzRCxnQkFBZ0IsMERBQTBELHVEQUF1RCxxREFBcUQsc0RBQXNELGtEQUFrRCxLQUFLLGVBQWUsb0JBQW9CLEtBQUssdUNBQXVDLHNCQUFzQix1QkFBdUIsS0FBSywyQkFBMkIsb0JBQW9CLEtBQUssR0FBRztBQUM1NEc7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDN0Y7QUFDQTtBQUNBLGNBQWMsUUFBUyxlQUFlLGlDQUFpQywyREFBMkQsR0FBRyxjQUFjLDBCQUEwQix3REFBd0QsR0FBRyxjQUFjLG9DQUFvQyxtREFBbUQsR0FBRyxjQUFjLHVDQUF1Qyx3REFBd0QsR0FBRyxjQUFjLDZDQUE2QyxtRUFBbUUsR0FBRyw0Q0FBNEMsMkJBQTJCLEdBQUcsWUFBWSwwQkFBMEIscUNBQXFDLEdBQUcsYUFBYSw2QkFBNkIsR0FBRyxxQkFBcUIscUNBQXFDLEdBQUcsY0FBYyw4QkFBOEIsR0FBRyxjQUFjLDhCQUE4QixHQUFHLGtCQUFrQixrQ0FBa0MsR0FBRyxtQkFBbUIsbUNBQW1DLEdBQUcsYUFBYSxvQ0FBb0MsNkJBQTZCLEdBQUcsb0JBQW9CLDJDQUEyQyxvQ0FBb0MsR0FBRyxhQUFhLGtDQUFrQyxHQUFHLGlCQUFpQixrQ0FBa0MsR0FBRyxnQkFBZ0IseUNBQXlDLEdBQUcsZ0JBQWdCLHlDQUF5QyxHQUFHLGlCQUFpQiwwQ0FBMEMsR0FBRyxrQkFBa0Isb0NBQW9DLEdBQUcsZ0JBQWdCLDBDQUEwQyxHQUFHLG1CQUFtQiw2Q0FBNkMsR0FBRyxtQkFBbUIscUNBQXFDLEdBQUcsMEVBQTBFLGdDQUFnQyxHQUFHLGdCQUFnQixnQ0FBZ0MsR0FBRyxpQkFBaUIsZ0NBQWdDLEdBQUcsa0JBQWtCLGdDQUFnQyxHQUFHLGtCQUFrQixnQ0FBZ0MsR0FBRyxvQkFBb0IsZ0NBQWdDLEdBQUcsZ0JBQWdCLGdDQUFnQyxHQUFHLHFCQUFxQixnQ0FBZ0MsR0FBRyxpQkFBaUIsZ0NBQWdDLEdBQUcsa0JBQWtCLHVCQUF1QixHQUFHLGlCQUFpQixzQkFBc0IsR0FBRyxnQkFBZ0IscUJBQXFCLEdBQUcsNEJBQTRCLDJCQUEyQixHQUFHLGNBQWMsc0JBQXNCLHVCQUF1QixHQUFHLHFCQUFxQixrQ0FBa0MsR0FBRyxhQUFhLHlDQUF5QyxHQUFHLGlCQUFpQiw2Q0FBNkMsR0FBRyxtQkFBbUIsK0NBQStDLEdBQUcsb0JBQW9CLGdEQUFnRCxHQUFHLGtCQUFrQiw4Q0FBOEMsR0FBRyxxQkFBcUIsbUJBQW1CLEdBQUcsc0JBQXNCLG1CQUFtQixHQUFHLHdCQUF3QixtQkFBbUIsR0FBRyw2QkFBNkIsbUJBQW1CLEdBQUcsd0JBQXdCLG1CQUFtQixHQUFHLHNCQUFzQixtQkFBbUIsR0FBRyw0QkFBNEIsbUJBQW1CLEdBQUcsc0JBQXNCLG1CQUFtQixHQUFHLHNCQUFzQixtQkFBbUIsR0FBRyx1QkFBdUIsbUJBQW1CLEdBQUcsNkJBQTZCLG1CQUFtQixHQUFHLHNCQUFzQixtQkFBbUIsR0FBRyx3QkFBd0IsbUJBQW1CLEdBQUcsdUJBQXVCLG1CQUFtQixHQUFHLHdCQUF3QixtQkFBbUIsR0FBRyw2QkFBNkIsbUJBQW1CLEdBQUcsdUJBQXVCLG1CQUFtQixHQUFHLHVCQUF1QixnQkFBZ0IsR0FBRyx1QkFBdUIsZ0JBQWdCLEdBQUcsc0JBQXNCLG1CQUFtQixHQUFHLDJCQUEyQixtQkFBbUIsR0FBRyxvQ0FBb0MsbUJBQW1CLEdBQUcsaUNBQWlDLG1CQUFtQixHQUFHLHNDQUFzQyxtQkFBbUIsR0FBRywrQkFBK0IsbUJBQW1CLEdBQUcsb0NBQW9DLG1CQUFtQixHQUFHLDRCQUE0QixtQkFBbUIsR0FBRyxpQ0FBaUMsbUJBQW1CLEdBQUcsK0JBQStCLG1CQUFtQixHQUFHLG9DQUFvQyxtQkFBbUIsR0FBRywrQkFBK0IsbUJBQW1CLEdBQUcsb0NBQW9DLG1CQUFtQixHQUFHLDhCQUE4QixtQkFBbUIsR0FBRyxtQ0FBbUMsbUJBQW1CLEdBQUcsK0JBQStCLG1CQUFtQixHQUFHLG9DQUFvQyxtQkFBbUIsR0FBRywrQkFBK0IsbUJBQW1CLEdBQUcsb0NBQW9DLG1CQUFtQixHQUFHLDhCQUE4QixtQkFBbUIsR0FBRyxtQ0FBbUMsbUJBQW1CLEdBQUcsK0JBQStCLG1CQUFtQixHQUFHLG9DQUFvQyxtQkFBbUIsR0FBRyx5QkFBeUIsbUJBQW1CLEdBQUcsd0JBQXdCLG1CQUFtQixHQUFHLHlCQUF5QixtQkFBbUIsR0FBRyx5QkFBeUIsbUJBQW1CLEdBQUcsc0JBQXNCLG1CQUFtQixHQUFHLHlCQUF5QixtQkFBbUIsR0FBRywyQkFBMkIsbUJBQW1CLEdBQUcsc0JBQXNCLG1CQUFtQixHQUFHLHVCQUF1QixtQkFBbUIsR0FBRyx3QkFBd0IsbUJBQW1CLEdBQUcsdUJBQXVCLDBCQUEwQixHQUFHLHdCQUF3QiwwQkFBMEIsR0FBRywwQkFBMEIsMEJBQTBCLEdBQUcsK0JBQStCLDBCQUEwQixHQUFHLDBCQUEwQiwwQkFBMEIsR0FBRyx3QkFBd0IsMEJBQTBCLEdBQUcsOEJBQThCLDBCQUEwQixHQUFHLHdCQUF3QiwwQkFBMEIsR0FBRyx3QkFBd0IsMEJBQTBCLEdBQUcseUJBQXlCLDBCQUEwQixHQUFHLCtCQUErQiwwQkFBMEIsR0FBRyx3QkFBd0IsMEJBQTBCLEdBQUcsMEJBQTBCLDBCQUEwQixHQUFHLHlCQUF5QiwwQkFBMEIsR0FBRywwQkFBMEIsMEJBQTBCLEdBQUcsK0JBQStCLDBCQUEwQixHQUFHLHlCQUF5QiwwQkFBMEIsR0FBRyx5QkFBeUIsdUJBQXVCLEdBQUcseUJBQXlCLHVCQUF1QixHQUFHLHdCQUF3QiwwQkFBMEIsR0FBRyw2QkFBNkIsMEJBQTBCLEdBQUcsc0NBQXNDLDBCQUEwQixHQUFHLG1DQUFtQywwQkFBMEIsR0FBRyx3Q0FBd0MsMEJBQTBCLEdBQUcsaUNBQWlDLDBCQUEwQixHQUFHLHNDQUFzQywwQkFBMEIsR0FBRyw4QkFBOEIsMEJBQTBCLEdBQUcsbUNBQW1DLDBCQUEwQixHQUFHLGlDQUFpQywwQkFBMEIsR0FBRyxzQ0FBc0MsMEJBQTBCLEdBQUcsaUNBQWlDLDBCQUEwQixHQUFHLHNDQUFzQywwQkFBMEIsR0FBRyxnQ0FBZ0MsMEJBQTBCLEdBQUcscUNBQXFDLDBCQUEwQixHQUFHLGlDQUFpQywwQkFBMEIsR0FBRyxzQ0FBc0MsMEJBQTBCLEdBQUcsaUNBQWlDLDBCQUEwQixHQUFHLHNDQUFzQywwQkFBMEIsR0FBRyxnQ0FBZ0MsMEJBQTBCLEdBQUcscUNBQXFDLDBCQUEwQixHQUFHLGlDQUFpQywwQkFBMEIsR0FBRyxzQ0FBc0MsMEJBQTBCLEdBQUcsMkJBQTJCLDBCQUEwQixHQUFHLDBCQUEwQiwwQkFBMEIsR0FBRywyQkFBMkIsMEJBQTBCLEdBQUcsMkJBQTJCLDBCQUEwQixHQUFHLHdCQUF3QiwwQkFBMEIsR0FBRywyQkFBMkIsMEJBQTBCLEdBQUcsNkJBQTZCLDBCQUEwQixHQUFHLHdCQUF3QiwwQkFBMEIsR0FBRyx5QkFBeUIsMEJBQTBCLEdBQUcsMEJBQTBCLDBCQUEwQixHQUFHLG1CQUFtQiw4QkFBOEIsR0FBRyxvQkFBb0IsOEJBQThCLEdBQUcsc0JBQXNCLDhCQUE4QixHQUFHLDJCQUEyQiw4QkFBOEIsR0FBRyxzQkFBc0IsOEJBQThCLEdBQUcsb0JBQW9CLDhCQUE4QixHQUFHLDBCQUEwQiw4QkFBOEIsR0FBRyxvQkFBb0IsOEJBQThCLEdBQUcsb0JBQW9CLDhCQUE4QixHQUFHLHFCQUFxQiw4QkFBOEIsR0FBRywyQkFBMkIsOEJBQThCLEdBQUcsb0JBQW9CLDhCQUE4QixHQUFHLHNCQUFzQiw4QkFBOEIsR0FBRyxxQkFBcUIsOEJBQThCLEdBQUcsc0JBQXNCLDhCQUE4QixHQUFHLDJCQUEyQiw4QkFBOEIsR0FBRyxxQkFBcUIsOEJBQThCLEdBQUcscUJBQXFCLDJCQUEyQixHQUFHLHFCQUFxQiwyQkFBMkIsR0FBRyxvQkFBb0IsOEJBQThCLEdBQUcseUJBQXlCLDhCQUE4QixHQUFHLGtDQUFrQyw4QkFBOEIsR0FBRywrQkFBK0IsOEJBQThCLEdBQUcsb0NBQW9DLDhCQUE4QixHQUFHLDZCQUE2Qiw4QkFBOEIsR0FBRyxrQ0FBa0MsOEJBQThCLEdBQUcsMEJBQTBCLDhCQUE4QixHQUFHLCtCQUErQiw4QkFBOEIsR0FBRyw2QkFBNkIsOEJBQThCLEdBQUcsa0NBQWtDLDhCQUE4QixHQUFHLDZCQUE2Qiw4QkFBOEIsR0FBRyxrQ0FBa0MsOEJBQThCLEdBQUcsNEJBQTRCLDhCQUE4QixHQUFHLGlDQUFpQyw4QkFBOEIsR0FBRyw2QkFBNkIsOEJBQThCLEdBQUcsa0NBQWtDLDhCQUE4QixHQUFHLDZCQUE2Qiw4QkFBOEIsR0FBRyxrQ0FBa0MsOEJBQThCLEdBQUcsNEJBQTRCLDhCQUE4QixHQUFHLGlDQUFpQyw4QkFBOEIsR0FBRyw2QkFBNkIsOEJBQThCLEdBQUcsa0NBQWtDLDhCQUE4QixHQUFHLHVCQUF1Qiw4QkFBOEIsR0FBRyxzQkFBc0IsOEJBQThCLEdBQUcsdUJBQXVCLDhCQUE4QixHQUFHLHVCQUF1Qiw4QkFBOEIsR0FBRyxvQkFBb0IsOEJBQThCLEdBQUcsdUJBQXVCLDhCQUE4QixHQUFHLHlCQUF5Qiw4QkFBOEIsR0FBRyxvQkFBb0IsOEJBQThCLEdBQUcscUJBQXFCLDhCQUE4QixHQUFHLHNCQUFzQiw4QkFBOEIsR0FBRyxXQUFXLGNBQWMsR0FBRyxXQUFXLGNBQWMsR0FBRyxXQUFXLGNBQWMsR0FBRyxXQUFXLGNBQWMsR0FBRyxXQUFXLGNBQWMsR0FBRyxXQUFXLGNBQWMsR0FBRyxXQUFXLGNBQWMsR0FBRyxXQUFXLGNBQWMsR0FBRyxXQUFXLGNBQWMsR0FBRyxXQUFXLGNBQWMsR0FBRyxXQUFXLGNBQWMsR0FBRyxZQUFZLGVBQWUsR0FBRyxjQUFjLHVCQUF1QixHQUFHLGNBQWMsd0JBQXdCLEdBQUcsZ0JBQWdCLG9CQUFvQixHQUFHLGNBQWMsd0JBQXdCLEdBQUcsY0FBYyx1QkFBdUIsR0FBRyxlQUFlLHNCQUFzQixHQUFHLGVBQWUsd0JBQXdCLEdBQUcsZUFBZSx1QkFBdUIsR0FBRyxlQUFlLG9CQUFvQixHQUFHLGVBQWUsb0JBQW9CLEdBQUcscUJBQXFCLHFCQUFxQixHQUFHLDZEQUE2RCw4QkFBOEIsa0JBQWtCLEdBQUcsV0FBVywyQkFBMkIsd0JBQXdCLHNCQUFzQixHQUFHLGVBQWUsMkJBQTJCLDhCQUE4QixHQUFHLHNCQUFzQixnREFBZ0Qsd0NBQXdDLEdBQUcsb0JBQW9CLHNEQUFzRCxHQUFHLGtCQUFrQix3REFBd0QsR0FBRyxrQkFBa0Isc0RBQXNELEdBQUcsb0JBQW9CLHNEQUFzRCxHQUFHLG9CQUFvQixpQ0FBaUMsR0FBRyxzQkFBc0IsaURBQWlELEdBQUcsb0JBQW9CLGlDQUFpQyxHQUFHLHNCQUFzQixpREFBaUQsR0FBRyxvQkFBb0IsaUNBQWlDLEdBQUcsc0JBQXNCLGlEQUFpRCxHQUFHLG9CQUFvQixpQ0FBaUMsR0FBRyxzQkFBc0IsaURBQWlELEdBQUcsb0RBQW9ELGVBQWUseUNBQXlDLDBDQUEwQyw4Q0FBOEMsS0FBSyw2QkFBNkIsaUJBQWlCLEtBQUssR0FBRyxxQkFBcUIsdUNBQXVDLEdBQUcsc0dBQXNHLFVBQVUsa0NBQWtDLEtBQUssU0FBUywyQ0FBMkMsS0FBSyxRQUFRLGtDQUFrQyxLQUFLLEdBQUcsVUFBVSwwQkFBMEIsMkNBQTJDLEdBQUcscUJBQXFCLFVBQVUsa0NBQWtDLEtBQUssY0FBYyxpRUFBaUUsS0FBSyx3QkFBd0IsZ0VBQWdFLEtBQUssbUJBQW1CLGlFQUFpRSxLQUFLLFFBQVEsa0NBQWtDLEtBQUssR0FBRyxTQUFTLHlCQUF5QixHQUFHLHVCQUF1QixVQUFVLGlCQUFpQixLQUFLLFFBQVEsaUJBQWlCLEtBQUssR0FBRyxXQUFXLDJCQUEyQixHQUFHLDJCQUEyQixVQUFVLGlCQUFpQiwwQ0FBMEMsS0FBSyxRQUFRLGlCQUFpQixzQ0FBc0MsS0FBSyxHQUFHLGVBQWUsK0JBQStCLEdBQUcsNEJBQTRCLFVBQVUsaUJBQWlCLHlDQUF5QyxLQUFLLFFBQVEsaUJBQWlCLHNDQUFzQyxLQUFLLEdBQUcsZ0JBQWdCLGdDQUFnQyxHQUFHLHlCQUF5QixVQUFVLGlCQUFpQix5Q0FBeUMsS0FBSyxRQUFRLGlCQUFpQixzQ0FBc0MsS0FBSyxHQUFHLGFBQWEsNkJBQTZCLEdBQUcsMEJBQTBCLFVBQVUsaUJBQWlCLEtBQUssUUFBUSwyQ0FBMkMsaUJBQWlCLEtBQUssR0FBRyxjQUFjLDhCQUE4Qiw2QkFBNkIsR0FBRyxvQkFBb0Isd0NBQXdDLEdBQUcsMERBQTBELFFBQVEsOEJBQThCLEtBQUssU0FBUywrQkFBK0IsS0FBSyxTQUFTLGdDQUFnQyxLQUFLLFNBQVMsZ0NBQWdDLEtBQUssVUFBVSxnQ0FBZ0MsS0FBSyxHQUFHLDJCQUEyQixVQUFVLGlCQUFpQiwwQ0FBMEMsc0NBQXNDLEtBQUssU0FBUyxnQ0FBZ0MsS0FBSyxTQUFTLDhCQUE4QixLQUFLLFFBQVEsaUJBQWlCLDBCQUEwQixLQUFLLEdBQUcsaUJBQWlCLGlDQUFpQyxHQUFHLHVHQUF1RyxVQUFVLGlCQUFpQixxRUFBcUUsS0FBSyxRQUFRLGlCQUFpQixzQ0FBc0MsS0FBSyxHQUFHLFdBQVcsMkJBQTJCLEdBQUcsdUJBQXVCLFVBQVUsaUJBQWlCLHdDQUF3QyxLQUFLLFNBQVMsaUJBQWlCLEtBQUssR0FBRyxXQUFXLDJCQUEyQixHQUFHLDRCQUE0QixVQUFVLDBDQUEwQywwQkFBMEIsS0FBSyxRQUFRLHNDQUFzQyxLQUFLLEdBQUcsZ0JBQWdCLGdDQUFnQyxHQUFHLHNCQUFzQixRQUFRLGlDQUFpQywwQ0FBMEMsS0FBSyxTQUFTLGtDQUFrQywyQ0FBMkMsS0FBSyxVQUFVLGlDQUFpQywwQ0FBMEMsS0FBSyxHQUFHLG9CQUFvQix5RUFBeUUsNEVBQTRFLHVFQUF1RSx3RUFBd0Usb0VBQW9FLEdBQUcscUJBQXFCLHlFQUF5RSw0RUFBNEUsdUVBQXVFLHdFQUF3RSxvRUFBb0UsR0FBRyxvQkFBb0IseUVBQXlFLDRFQUE0RSx1RUFBdUUsd0VBQXdFLG9FQUFvRSxHQUFHLG9CQUFvQix5RUFBeUUsNEVBQTRFLHVFQUF1RSx3RUFBd0Usb0VBQW9FLEdBQUcseUJBQXlCLHlFQUF5RSw0RUFBNEUsdUVBQXVFLHdFQUF3RSxvRUFBb0UsR0FBRywyQkFBMkIsMkdBQTJHLDhHQUE4Ryx5R0FBeUcsMEdBQTBHLHNHQUFzRyxHQUFHLDBCQUEwQix5R0FBeUcsNEdBQTRHLHVHQUF1Ryx3R0FBd0csb0dBQW9HLEdBQUcseUJBQXlCLHdHQUF3RywyR0FBMkcsc0dBQXNHLHVHQUF1RyxtR0FBbUcsR0FBRyx5QkFBeUIsd0dBQXdHLDJHQUEyRyxzR0FBc0csdUdBQXVHLG1HQUFtRyxHQUFHLHlCQUF5Qiw2RUFBNkUsZ0ZBQWdGLDJFQUEyRSw0RUFBNEUsd0VBQXdFLEdBQUcsd0JBQXdCLDZFQUE2RSxnRkFBZ0YsMkVBQTJFLDRFQUE0RSx3RUFBd0UsR0FBRyx1QkFBdUIsNkVBQTZFLGdGQUFnRiwyRUFBMkUsNEVBQTRFLHdFQUF3RSxHQUFHLHVCQUF1Qiw2RUFBNkUsZ0ZBQWdGLDJFQUEyRSw0RUFBNEUsd0VBQXdFLEdBQUcsNEJBQTRCLDZFQUE2RSxnRkFBZ0YsMkVBQTJFLDRFQUE0RSx3RUFBd0UsR0FBRyxnQkFBZ0IsZ0NBQWdDLHNEQUFzRCw4VkFBOFYsd0JBQXdCLHVCQUF1QixHQUFHLGVBQWUsbUJBQW1CLGtCQUFrQixnQkFBZ0Isa0JBQWtCLHVCQUF1QixHQUFHLHNCQUFzQixvQkFBb0IsMEJBQTBCLHFEQUFxRCx1QkFBdUIseUJBQXlCLHlCQUF5Qix3Q0FBd0MsdUNBQXVDLEdBQUcsa0RBQWtELHlCQUF5QixHQUFHLG1EQUFtRCx5QkFBeUIsR0FBRyxnREFBZ0QseUJBQXlCLEdBQUcsb0NBQW9DLHlCQUF5QixHQUFHLHdEQUF3RCx5QkFBeUIsR0FBRyxzREFBc0QseUJBQXlCLEdBQUcseUNBQXlDLHlCQUF5QixHQUFHLHFDQUFxQyx5QkFBeUIsR0FBRyx3Q0FBd0MseUJBQXlCLEdBQUcsbURBQW1ELHlCQUF5QixHQUFHLHNDQUFzQyx5QkFBeUIsR0FBRyxzREFBc0QseUJBQXlCLEdBQUcsc0NBQXNDLHlCQUF5QixHQUFHLHNDQUFzQyx5QkFBeUIsR0FBRywwQ0FBMEMseUJBQXlCLEdBQUcsOENBQThDLHlCQUF5QixHQUFHLDBDQUEwQyx5QkFBeUIsR0FBRyxnREFBZ0QseUJBQXlCLEdBQUcseUNBQXlDLHlCQUF5QixHQUFHLGlEQUFpRCx5QkFBeUIsR0FBRyxtQ0FBbUMseUJBQXlCLEdBQUcsbURBQW1ELHlCQUF5QixHQUFHLHFDQUFxQyx5QkFBeUIsR0FBRywrQ0FBK0MseUJBQXlCLEdBQUcscUNBQXFDLHlCQUF5QixHQUFHLDJDQUEyQyx5QkFBeUIsR0FBRyxtREFBbUQseUJBQXlCLEdBQUcsOENBQThDLHlCQUF5QixHQUFHLHNEQUFzRCx5QkFBeUIsR0FBRywwQ0FBMEMseUJBQXlCLEdBQUcsa0RBQWtELHlCQUF5QixHQUFHLHlDQUF5Qyx5QkFBeUIsR0FBRyxpREFBaUQseUJBQXlCLEdBQUcsMENBQTBDLHlCQUF5QixHQUFHLGtEQUFrRCx5QkFBeUIsR0FBRywyQ0FBMkMseUJBQXlCLEdBQUcsbURBQW1ELHlCQUF5QixHQUFHLDZDQUE2Qyx5QkFBeUIsR0FBRyxxREFBcUQseUJBQXlCLEdBQUcsMkNBQTJDLHlCQUF5QixHQUFHLG1EQUFtRCx5QkFBeUIsR0FBRywyQ0FBMkMseUJBQXlCLEdBQUcsbURBQW1ELHlCQUF5QixHQUFHLDBDQUEwQyx5QkFBeUIsR0FBRyxrREFBa0QseUJBQXlCLEdBQUcseUNBQXlDLHlCQUF5QixHQUFHLGlEQUFpRCx5QkFBeUIsR0FBRyw2Q0FBNkMseUJBQXlCLEdBQUcscURBQXFELHlCQUF5QixHQUFHLDZDQUE2Qyx5QkFBeUIsR0FBRywwQ0FBMEMseUJBQXlCLEdBQUcsa0RBQWtELHlCQUF5QixHQUFHLHlDQUF5Qyx5QkFBeUIsR0FBRyxpREFBaUQseUJBQXlCLEdBQUcsNENBQTRDLHlCQUF5QixHQUFHLG9EQUFvRCx5QkFBeUIsR0FBRywwQ0FBMEMseUJBQXlCLEdBQUcsa0RBQWtELHlCQUF5QixHQUFHLGlDQUFpQyx5QkFBeUIsR0FBRywrQ0FBK0MseUJBQXlCLEdBQUcsd0NBQXdDLHlCQUF5QixHQUFHLDZDQUE2Qyx5QkFBeUIsR0FBRyx1Q0FBdUMseUJBQXlCLEdBQUcsc0NBQXNDLHlCQUF5QixHQUFHLGdEQUFnRCx5QkFBeUIsR0FBRyxvQ0FBb0MseUJBQXlCLEdBQUcsbURBQW1ELHlCQUF5QixHQUFHLDRDQUE0Qyx5QkFBeUIsR0FBRyw2Q0FBNkMseUJBQXlCLEdBQUcsbUNBQW1DLHlCQUF5QixHQUFHLGtEQUFrRCx5QkFBeUIsR0FBRyxnREFBZ0QseUJBQXlCLEdBQUcsaURBQWlELHlCQUF5QixHQUFHLGtDQUFrQyx5QkFBeUIsR0FBRyw0Q0FBNEMseUJBQXlCLEdBQUcsc0NBQXNDLHlCQUF5QixHQUFHLDBDQUEwQyx5QkFBeUIsR0FBRyw4Q0FBOEMseUJBQXlCLEdBQUcsK0RBQStELHlCQUF5QixHQUFHLHNEQUFzRCx5QkFBeUIsR0FBRyxrREFBa0QseUJBQXlCLEdBQUcseUNBQXlDLHlCQUF5QixHQUFHLHVDQUF1Qyx5QkFBeUIsR0FBRyxtQ0FBbUMseUJBQXlCLEdBQUcsNkNBQTZDLHlCQUF5QixHQUFHLGlDQUFpQyx5QkFBeUIsR0FBRywrQ0FBK0MseUJBQXlCLEdBQUcseUNBQXlDLHlCQUF5QixHQUFHLDhDQUE4Qyx5QkFBeUIsR0FBRyxzREFBc0QseUJBQXlCLEdBQUcsMENBQTBDLHlCQUF5QixHQUFHLHdDQUF3Qyx5QkFBeUIsR0FBRyw2Q0FBNkMseUJBQXlCLEdBQUcsbUNBQW1DLHlCQUF5QixHQUFHLDBDQUEwQyx5QkFBeUIsR0FBRyx5Q0FBeUMseUJBQXlCLEdBQUc7QUFDMXE5QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUdPLFNBQVNBLFVBQVQsQ0FBcUJDLElBQXJCLEVBQTJCO0FBQzlCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWixFQUFtQixZQUFuQjtBQUNBLFNBQU87QUFDSEcsUUFBSSxFQUFHQyw2Q0FBSSxDQUFDQyxXQURUO0FBRUhDLFdBQU8sa0NBQVFOLElBQVI7QUFBY08sYUFBTyxFQUFFO0FBQXZCO0FBRkosR0FBUDtBQUlIO0FBRU0sU0FBU0Msa0JBQVQsQ0FBNkJDLElBQTdCLEVBQW1DO0FBQ3RDUixTQUFPLENBQUNDLEdBQVIsQ0FBWU8sSUFBWixFQUFtQixZQUFuQjtBQUNBLFNBQU87QUFDSE4sUUFBSSxFQUFHQyw2Q0FBSSxDQUFDTSxtQkFEVDtBQUVISixXQUFPLEVBQUdHO0FBRlAsR0FBUDtBQUlIO0FBRU0sU0FBU0Usd0JBQVQsQ0FBbUNGLElBQW5DLEVBQXlDO0FBQzVDUixTQUFPLENBQUNDLEdBQVIsQ0FBWU8sSUFBWixFQUFtQixtQkFBbkI7QUFDQSxTQUFPO0FBQ0hOLFFBQUksRUFBR0MsNkNBQUksQ0FBQ1EsMEJBRFQ7QUFFSE4sV0FBTyxFQUFHRztBQUZQLEdBQVA7QUFJSDtBQUVNLFNBQVNJLG1CQUFULENBQThCQyxFQUE5QixFQUFrQztBQUNyQ2IsU0FBTyxDQUFDQyxHQUFSLENBQVlZLEVBQVosRUFBaUIsdUJBQWpCO0FBQ0EsU0FBTztBQUNIWCxRQUFJLEVBQUdDLDZDQUFJLENBQUNXLGtCQURUO0FBRUhULFdBQU8sRUFBR1E7QUFGUCxHQUFQO0FBSUg7QUFHTSxTQUFTRSxlQUFULEdBQTJCO0FBQzlCZixTQUFPLENBQUNDLEdBQVIsQ0FBYSxtQkFBYjtBQUNBLFNBQU87QUFDSEMsUUFBSSxFQUFHQyw2Q0FBSSxDQUFDYSxvQkFEVDtBQUVIWCxXQUFPLEVBQUc7QUFGUCxHQUFQO0FBSUg7QUFFTSxTQUFTWSxzQkFBVCxDQUFpQ0Msc0JBQWpDLEVBQXlEO0FBQzVEbEIsU0FBTyxDQUFDQyxHQUFSLENBQWEsMEJBQWI7QUFDQSxTQUFPO0FBQ0hDLFFBQUksRUFBR0MsNkNBQUksQ0FBQ2dCLGdCQURUO0FBRUhkLFdBQU8sRUFBR2E7QUFGUCxHQUFQO0FBSUgsQzs7Ozs7Ozs7Ozs7O0FDbEREO0FBQUEsSUFBTWYsSUFBSSxHQUFJO0FBRVpXLG9CQUFrQixFQUFVLG9CQUZoQjtBQUdaVixhQUFXLEVBQWlCLGFBSGhCO0FBSVpZLHNCQUFvQixFQUFRLHNCQUpoQjtBQUtaUCxxQkFBbUIsRUFBUyxxQkFMaEI7QUFNWlUsa0JBQWdCLEVBQVksa0JBTmhCO0FBT1pSLDRCQUEwQixFQUFFO0FBUGhCLENBQWQ7QUFTZVIsbUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBOztJQUVNaUIsRzs7Ozs7Ozs7Ozs7Ozs2QkFFTztBQUNMcEIsYUFBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBLDBCQUNJO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQThCLFVBQUUsRUFBQztBQUFqQyxzQkFDSSwyREFBQyx1REFBRCxPQURKLENBREo7QUFLSDs7OztFQVRhb0IsK0M7O0FBWUhELGtFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7O0lBQ01FLFE7Ozs7Ozs7Ozs7Ozs7NkJBRUk7QUFFUnRCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0FBRlEsVUFHRnNCLGFBSEUsR0FHZ0IsS0FBS0MsS0FIckIsQ0FHRkQsYUFIRTtBQUlSLFVBQUlFLGFBQWEsR0FBR0YsYUFBYSxDQUFDRyxJQUFkLENBQW1CLFVBQUFDLE9BQU87QUFBQSxlQUFJQSxPQUFPLENBQUNDLFFBQVo7QUFBQSxPQUExQixDQUFwQjs7QUFFQSxVQUFJLENBQUNILGFBQUwsRUFBb0I7QUFDbkIsZUFBTyxJQUFQO0FBQ0E7O0FBRUQsMEJBQ0M7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBRUM7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0M7QUFBUSxpQkFBUyxFQUFDO0FBQWxCLHNCQUNDO0FBQUssV0FBRyxFQUFFSSwrQ0FBTSxDQUFDQyxVQUFQLENBQWtCQyxHQUFsQixHQUF3Qk4sYUFBYSxDQUFDMUIsSUFBZCxDQUFtQmlDLE1BQXJEO0FBQTZELFdBQUcsRUFBQztBQUFqRSxRQURELENBREQsZUFJQztBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDQztBQUFNLGlCQUFTLEVBQUM7QUFBaEIsU0FBd0JQLGFBQWEsQ0FBQzFCLElBQWQsQ0FBbUJrQyxVQUFuQixHQUFnQyxHQUFoQyxHQUFxQ1IsYUFBYSxDQUFDMUIsSUFBZCxDQUFtQm1DLFNBQWhGLENBREQsQ0FKRCxDQUZELENBREQ7QUFhQTs7OztFQXpCcUJiLCtDOztBQTJCUkMsdUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNYSxXOzs7Ozs7Ozs7Ozs7O3lDQUltQjtBQUFBLFVBRVhaLGFBRlcsR0FFTyxLQUFLQyxLQUZaLENBRVhELGFBRlc7QUFHakIsVUFBSWEsaUJBQWlCLEdBQUdiLGFBQWEsQ0FBQ0csSUFBZCxDQUFtQixVQUFBQyxPQUFPO0FBQUEsZUFBSUEsT0FBTyxDQUFDQyxRQUFaO0FBQUEsT0FBMUIsQ0FBeEI7QUFFQSxVQUFJUyxRQUFRLEdBQUdELGlCQUFpQixJQUFJQSxpQkFBaUIsQ0FBQ0UsT0FBdEQ7QUFFQSxVQUFJQyxVQUFVLEdBQUtDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixxQkFBeEIsQ0FBbkI7O0FBQ0EsVUFBR0YsVUFBSCxFQUFjO0FBRVZHLHFEQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQkMsRUFBMUIsQ0FBNkIsUUFBN0IsRUFBdUMsWUFBVTtBQUM3Q0MseUZBQW1CLENBQUMsSUFBRCxFQUFPUCxRQUFQLEVBQWlCRCxpQkFBakIsQ0FBbkI7QUFDSCxTQUZEO0FBR0g7QUFDSjs7OzZCQUVRO0FBQUEsd0JBRXlCLEtBQUtaLEtBRjlCO0FBQUEsVUFFQ0QsYUFGRCxlQUVDQSxhQUZEO0FBQUEsVUFFZ0JzQixJQUZoQixlQUVnQkEsSUFGaEI7QUFHTCxVQUFJVCxpQkFBaUIsR0FBR2IsYUFBYSxDQUFDRyxJQUFkLENBQW1CLFVBQUFDLE9BQU87QUFBQSxlQUFJQSxPQUFPLENBQUNDLFFBQVo7QUFBQSxPQUExQixDQUF4QjtBQUVBLFVBQUlTLFFBQVEsR0FBR0QsaUJBQWlCLElBQUlBLGlCQUFpQixDQUFDRSxPQUF0RDtBQUVBLDBCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJLDJEQUFDLHFEQUFEO0FBQVUscUJBQWEsRUFBR2Y7QUFBMUIsUUFESixlQUVJO0FBQUssaUJBQVMsRUFBQyxzQkFBZjtBQUFzQyxVQUFFLEVBQUM7QUFBekMsU0FDS2MsUUFBUSxJQUFJQSxRQUFRLENBQUNTLEdBQVQsQ0FDVCxVQUFDUixPQUFELEVBQVVTLEdBQVY7QUFBQSw0QkFDSSwyREFBQyx3REFBRDtBQUNJLGFBQUcsRUFBRSxpQkFBaUJBLEdBQWpCLEdBQXVCWCxpQkFBaUIsQ0FBQ3ZCLEVBRGxEO0FBRUksY0FBSSxFQUFFZ0MsSUFGVjtBQUdJLGlCQUFPLEVBQUVQLE9BSGI7QUFJSSwyQkFBaUIsRUFBRUY7QUFKdkIsVUFESjtBQUFBLE9BRFMsQ0FEakIsQ0FGSixDQURKO0FBZ0JIOzs7O0VBM0NxQmYsK0M7O0FBNkNYYywwRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERBO0FBQ0E7QUFDQTs7SUFFTWEsUTs7Ozs7Ozs7Ozs7Ozs2QkFFTztBQUNMO0FBREssVUFFQ3pCLGFBRkQsR0FFbUIsS0FBS0MsS0FGeEIsQ0FFQ0QsYUFGRDtBQUdMdkIsYUFBTyxDQUFDQyxHQUFSLENBQVlzQixhQUFaO0FBRUEsMEJBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FFUUEsYUFBYSxJQUNiQSxhQUFhLENBQUN1QixHQUFkLENBQ0ksVUFBQW5CLE9BQU87QUFBQSw0QkFDSCwyREFBQyxxREFBRDtBQUFVLGFBQUcsRUFBRUEsT0FBTyxDQUFDZCxFQUF2QjtBQUEyQixpQkFBTyxFQUFFYztBQUFwQyxVQURHO0FBQUEsT0FEWCxDQUhSLENBREo7QUFXSDs7OztFQWxCa0JOLCtDOztBQXNCUjJCLHVFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQyxXOzs7Ozs7Ozs7Ozs7OzZCQUlPO0FBQUEsd0JBQ3NDLEtBQUt6QixLQUQzQztBQUFBLFVBQ0NxQixJQURELGVBQ0NBLElBREQ7QUFBQSxVQUNPUCxPQURQLGVBQ09BLE9BRFA7QUFBQSxVQUNnQkYsaUJBRGhCLGVBQ2dCQSxpQkFEaEI7QUFHTCxVQUFJYyxNQUFNLEdBQUc7QUFBRWxCLGNBQU0sRUFBRyxFQUFYO0FBQWVtQixZQUFJLEVBQUU7QUFBckIsT0FBYjs7QUFDQSxVQUFJTixJQUFJLElBQUlBLElBQUksQ0FBQ2hDLEVBQWpCLEVBQXFCO0FBQ2pCcUMsY0FBTSxDQUFDbEIsTUFBUCxHQUFnQmEsSUFBSSxDQUFDYixNQUFyQjtBQUNBa0IsY0FBTSxDQUFDQyxJQUFQLEdBQWdCTixJQUFJLENBQUNaLFVBQUwsR0FBa0IsR0FBbEIsR0FBd0JZLElBQUksQ0FBQ1gsU0FBN0M7QUFDSDs7QUFFRCxVQUFJLENBQUNFLGlCQUFMLEVBQXdCO0FBQ3BCLGVBQU8sSUFBUDtBQUNIOztBQUNELFVBQUlnQixRQUFRLEdBQUdoQixpQkFBaUIsQ0FBQ3JDLElBQWpDOztBQUVBLFVBQUksQ0FBQ3VDLE9BQU8sQ0FBQ3BDLElBQWIsRUFBbUI7QUFDZixZQUFJbUQsV0FBVyxHQUFHLGVBQWxCO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsWUFBSUEsV0FBVyxHQUFHLHNCQUFsQjtBQUNBRCxnQkFBUSxHQUFHRixNQUFYO0FBQ0g7O0FBbkJJLFVBb0JDSSxLQXBCRCxHQW9CV2hCLE9BcEJYLENBb0JDZ0IsS0FwQkQ7QUFzQkwsVUFBSUMsYUFBYSxHQUFHLEtBQUssRUFBTCxHQUFVLEVBQVYsR0FBZSxJQUFuQztBQUdBLFVBQUlDLElBQUksR0FBRyxJQUFJQyxJQUFKLENBQVNuQixPQUFPLENBQUNvQixTQUFqQixDQUFYO0FBRUEsMEJBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBRUk7QUFBSyxpQkFBUyxFQUFFTCxXQUFXLEdBQUc7QUFBOUIsc0JBQ0k7QUFBUSxpQkFBUyxFQUFDO0FBQWxCLHNCQUNJO0FBQUssV0FBRyxFQUFFeEIsK0NBQU0sQ0FBQ0MsVUFBUCxDQUFrQkMsR0FBbEIsR0FBd0JxQixRQUFRLENBQUNwQixNQUEzQztBQUFtRCxXQUFHLEVBQUM7QUFBdkQsUUFESixDQURKLGVBSUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FFUXNCLEtBQUssSUFBSSxPQUFULGlCQUNBO0FBQUssaUJBQVMsRUFBRUE7QUFBaEIsU0FFUWhCLE9BQU8sQ0FBQ3FCLFVBQVIsQ0FBbUJiLEdBQW5CLENBQXVCLFVBQUVjLGFBQUYsRUFBa0JDLEtBQWxCLEVBQTRCO0FBQy9DLFlBQUlELGFBQWEsQ0FBQzFELElBQWQsSUFBc0IsS0FBMUIsRUFBaUM7QUFFN0IsY0FBSTBELGFBQWEsQ0FBQ0osSUFBZCxJQUFzQkksYUFBYSxDQUFDSixJQUFkLEdBQXFCRCxhQUFyQixHQUFzQyxJQUFJRSxJQUFKLEVBQUQsQ0FBV0ssT0FBWCxFQUEvRCxFQUFxRjtBQUNqRixnQ0FDSTtBQUFLLGlCQUFHLEVBQUUsdUJBQXVCRCxLQUF2QixHQUErQkQsYUFBYSxDQUFDRyxHQUF2RDtBQUE2RCx1QkFBUyxFQUFDO0FBQXZFLDRCQUNJO0FBQUssaUJBQUcsRUFBRWxDLCtDQUFNLENBQUNDLFVBQVAsQ0FBa0JDLEdBQWxCLEdBQXdCNkIsYUFBYSxDQUFDRztBQUFoRCxjQURKLGVBRUk7QUFBRyx1QkFBUyxFQUFDLDBCQUFiO0FBQXdDLGtCQUFJLEVBQUdsQywrQ0FBTSxDQUFDQyxVQUFQLENBQWtCQyxHQUFsQixHQUF3QjZCLGFBQWEsQ0FBQ0csR0FBckY7QUFBMkYsb0JBQU0sRUFBQyxRQUFsRztBQUEyRyxzQkFBUTtBQUFuSCw0QkFDSTtBQUFHLHVCQUFTLEVBQUM7QUFBYixjQURKLENBRkosQ0FESjtBQVFIO0FBQ0o7O0FBQ0QsNEJBQ0k7QUFBSyxhQUFHLEVBQUUsdUJBQXVCRixLQUF2QixHQUErQmhDLCtDQUFNLENBQUNDLFVBQVAsQ0FBa0JDLEdBQWpELEdBQXVELG1CQUFqRTtBQUF1RixtQkFBUyxFQUFDO0FBQWpHLHdCQUNJO0FBQUssYUFBRyxFQUFHRiwrQ0FBTSxDQUFDQyxVQUFQLENBQWtCQyxHQUFsQixHQUF3QjtBQUFuQyxVQURKLGVBRUk7QUFBRyxtQkFBUyxFQUFDLDBCQUFiO0FBQXdDLGNBQUksRUFBR0YsK0NBQU0sQ0FBQ0MsVUFBUCxDQUFrQkMsR0FBbEIsR0FBd0I2QixhQUFhLENBQUNHLEdBQXJGO0FBQTJGLGdCQUFNLEVBQUMsUUFBbEc7QUFBMkcsa0JBQVE7QUFBbkgsd0JBQ0k7QUFBRyxtQkFBUyxFQUFDO0FBQWIsVUFESixDQUZKLENBREo7QUFRSCxPQXRCRCxDQUZSLENBSFIsZUErQkk7QUFBSyxpQkFBUyxFQUFFVCxLQUFLLEdBQUc7QUFBeEIsU0FBbUNoQixPQUFPLENBQUMwQixPQUEzQyxDQS9CSixFQWlDUTFCLE9BQU8sQ0FBQ29CLFNBQVIsZ0JBQ0E7QUFBSyxpQkFBUyxFQUFFSixLQUFLLEdBQUc7QUFBeEIsU0FFUUUsSUFBSSxDQUFDUyxXQUFMLEtBQ0UsR0FERixJQUVHVCxJQUFJLENBQUNVLFFBQUwsS0FBa0IsQ0FGckIsSUFHRSxHQUhGLEdBSUVWLElBQUksQ0FBQ1csT0FBTCxFQUpGLEdBS0UsR0FMRixHQU1FWCxJQUFJLENBQUNZLFFBQUwsRUFORixHQU9FLEdBUEYsR0FRRVosSUFBSSxDQUFDYSxVQUFMLEVBUkYsR0FTRSxHQVRGLEdBVUViLElBQUksQ0FBQ2MsVUFBTCxFQVpWLENBREEsR0FpQkEsSUFsRFIsZUFxREk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FFUSxDQUFDaEMsT0FBTyxDQUFDcEMsSUFBVCxLQUVJLENBQUNvQyxPQUFPLENBQUNpQyxTQUFULGdCQUNBO0FBQUcsaUJBQVMsRUFBQztBQUFiLFFBREEsZ0JBR0E7QUFBRyxpQkFBUyxFQUFDO0FBQWIsUUFMSixDQUZSLENBckRKLENBSkosQ0FGSixDQURKO0FBNEVIOzs7O0VBM0dxQmxELCtDOztBQThHWDRCLDBFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakhBO0FBQ0E7QUFDQTtBQUNBOztJQUdNdUIsTTs7Ozs7Ozs7Ozs7Ozs7b0hBRUZDLFUsR0FBYSxZQUFNO0FBRWZ6RSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaOztBQUNBLFVBQUl5RSxVQUFVLHNCQUFTLE1BQUtsRCxLQUFMLENBQVdtRCxrQkFBcEIsQ0FBZDtBQUFBLFVBQ0lDLFFBQVEsR0FBSyxFQURqQjtBQUFBLFVBRUlDLElBQUksR0FBUyxNQUFLQyxNQUFMLENBQVlDLEtBRjdCO0FBQUEsVUFHSUMsTUFBTSxHQUFPSCxJQUFJLENBQUNJLEtBQUwsQ0FBVyxFQUFYLENBSGpCOztBQUtBLFVBQUksQ0FBQ0osSUFBRCxJQUFTLENBQUNBLElBQUksQ0FBQ0ssSUFBTCxFQUFkLEVBQTJCO0FBRXZCLGNBQUsxRCxLQUFMLENBQVcyRCxRQUFYLENBQW9CNUUsa0VBQWtCLENBQUMsTUFBS2lCLEtBQUwsQ0FBV21ELGtCQUFaLENBQXRDO0FBRUgsT0FKRCxNQUlNLElBQUlELFVBQUosRUFBZ0I7QUFDbEJBLGtCQUFVLENBQUM1QixHQUFYLENBQWdCLFVBQUF0QyxJQUFJLEVBQUk7QUFDcEIsY0FBSTRFLEdBQUcsR0FBRztBQUFFQyxnQkFBSSxFQUFFLENBQVI7QUFBV3hFLGNBQUUsRUFBRUwsSUFBSSxDQUFDSyxFQUFwQjtBQUF5QmdFLGdCQUFJLEVBQUVyRSxJQUFJLENBQUNULElBQUwsQ0FBVWtDLFVBQVYsR0FBdUI7QUFBdEQsV0FBVjtBQUVBMkMsa0JBQVEsQ0FBQ1UsSUFBVCxDQUFlRixHQUFmO0FBQ0gsU0FKRDtBQUtBSixjQUFNLENBQUNsQyxHQUFQLENBQVksVUFBQXlDLElBQUksRUFBSTtBQUNoQlgsa0JBQVEsQ0FBQzlCLEdBQVQsQ0FBYyxVQUFBZ0MsTUFBTSxFQUFJO0FBQ3BCLGdCQUFJQSxNQUFNLENBQUNPLElBQVAsSUFBZSxDQUFDLENBQWhCLElBQXFCUCxNQUFNLENBQUNELElBQVAsQ0FBWVcsV0FBWixHQUEwQkMsUUFBMUIsQ0FBbUNGLElBQUksQ0FBQ0MsV0FBTCxFQUFuQyxDQUF6QixFQUFnRjtBQUM1RVYsb0JBQU0sQ0FBQ08sSUFBUDtBQUNILGFBRkQsTUFFSztBQUNEUCxvQkFBTSxDQUFDTyxJQUFQLEdBQWMsQ0FBQyxDQUFmO0FBQ0g7QUFDSixXQU5EO0FBT0gsU0FSRDtBQVNBVCxnQkFBUSxDQUFDUyxJQUFULENBQWMsVUFBQ0ssQ0FBRCxFQUFJQyxDQUFKO0FBQUEsaUJBQVdELENBQUMsQ0FBQ0wsSUFBRixHQUFTTSxDQUFDLENBQUNOLElBQVosR0FBb0IsQ0FBcEIsR0FBd0IsQ0FBQyxDQUFuQztBQUFBLFNBQWQ7QUFDQSxZQUFJTyxXQUFXLEdBQUdoQixRQUFRLENBQUM5QixHQUFULENBQWMsVUFBQXlDLElBQUk7QUFBQSxpQkFBSUEsSUFBSSxDQUFDRixJQUFMLElBQWEsQ0FBQyxDQUFkLElBQW1CRSxJQUFJLENBQUNGLElBQXhCLEdBQStCRSxJQUFJLENBQUMxRSxFQUFwQyxHQUF5QyxDQUE3QztBQUFBLFNBQWxCLENBQWxCOztBQUNBLGNBQUtXLEtBQUwsQ0FBVzJELFFBQVgsQ0FBb0JsRSxzRUFBc0IsQ0FBQztBQUFFNEUsYUFBRyxFQUFHRCxXQUFSO0FBQXFCRSxjQUFJLEVBQUVwQjtBQUEzQixTQUFELENBQTFDO0FBQ0g7QUFFSixLLFFBQ0RxQixnQixHQUFtQixVQUFBQyxLQUFLLEVBQUk7QUFDeEIsVUFBSUEsS0FBSyxDQUFDQyxPQUFOLElBQWlCLEVBQXJCLEVBQTBCO0FBQ3RCLGNBQUt4QixVQUFMO0FBQ0g7QUFDSixLOzs7Ozs2QkFFUTtBQUFBOztBQUVMLDBCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUcsaUJBQVMsRUFBQztBQUFiLFFBREosZUFFSTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGlCQUFTLEVBQUMsYUFBN0I7QUFDQSxXQUFHLEVBQUUsYUFBQ3lCLEtBQUQ7QUFBQSxpQkFBVyxNQUFJLENBQUNwQixNQUFMLEdBQWNvQixLQUF6QjtBQUFBLFNBREw7QUFFQSxlQUFPLEVBQUUsS0FBS0gsZ0JBRmQ7QUFHQSxvQkFBWSxFQUFDLEtBSGI7QUFJQSxZQUFJLEVBQUMsYUFKTDtBQUltQixtQkFBVyxFQUFDO0FBSi9CLFFBRkosZUFPSTtBQUFHLGlCQUFTLEVBQUMsaURBQWI7QUFDQSxlQUFPLEVBQUUsS0FBS3RCO0FBRGQsUUFQSixDQURKO0FBYUg7Ozs7RUF4RGdCcEQsK0M7O0FBNkRyQixJQUFJOEUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDN0IsU0FBTztBQUNIN0UsaUJBQWEsRUFBTzZFLEtBQUssQ0FBQzdFLGFBRHZCO0FBRUhvRCxzQkFBa0IsRUFBRXlCLEtBQUssQ0FBQ3pCLGtCQUZ2QjtBQUdINUUsUUFBSSxFQUFnQnFHLEtBQUssQ0FBQ3JHO0FBSHZCLEdBQVA7QUFLSCxDQU5EOztBQU9lc0csMEhBQU8sQ0FBQ0YsZUFBRCxDQUFQLENBQXlCM0IsTUFBekIsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0MzRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU04QixXOzs7Ozs7Ozs7Ozs7OzZCQUVPO0FBRUx0RyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWjtBQUdBLFVBQUlzRyxLQUFLLEdBQUc7QUFBRXZFLGNBQU0sRUFBRSxFQUFWO0FBQWNtQixZQUFJLEVBQUU7QUFBcEIsT0FBWjtBQUxLLHdCQU15QixLQUFLM0IsS0FOOUI7QUFBQSxVQU1DRCxhQU5ELGVBTUNBLGFBTkQ7QUFBQSxVQU1nQnNCLElBTmhCLGVBTWdCQSxJQU5oQjs7QUFPTCxVQUFJQSxJQUFJLElBQUlBLElBQUksQ0FBQ2hDLEVBQWpCLEVBQXFCO0FBQ2pCMEYsYUFBSyxDQUFDdkUsTUFBTixHQUFlYSxJQUFJLENBQUNiLE1BQXBCO0FBQ0F1RSxhQUFLLENBQUNwRCxJQUFOLEdBQWFOLElBQUksQ0FBQ1osVUFBTCxHQUFrQixHQUFsQixHQUF3QlksSUFBSSxDQUFDWCxTQUExQztBQUNIOztBQUVELDBCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQVEsaUJBQVMsRUFBQztBQUFsQixzQkFDSTtBQUFLLFdBQUcsRUFBR0wsK0NBQU0sQ0FBQ0MsVUFBUCxDQUFrQkMsR0FBbEIsR0FBd0J3RSxLQUFLLENBQUN2RSxNQUF6QztBQUFrRCxXQUFHLEVBQUM7QUFBdEQsUUFESixDQURKLGVBSUk7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLFNBQXdCdUUsS0FBSyxDQUFDcEQsSUFBOUIsQ0FKSixDQURKLENBREosZUFTSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSSwyREFBQyxtREFBRCxPQURKLEVBR1E1QixhQUFhLENBQUNpRixNQUFkLGdCQUNBLDJEQUFDLHFEQUFEO0FBQVUscUJBQWEsRUFBRWpGO0FBQXpCLFFBREEsZ0JBR0EseUlBTlIsQ0FUSixDQURKO0FBc0JIOzs7O0VBcENxQkYsK0M7O0FBc0NYaUYsMEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDQTtBQUNBO0FBQ0E7QUFDQTs7SUFDTUcsUTs7Ozs7Ozs7Ozs7Ozs7dUhBRUZDLGdCLEdBQW1CLFVBQUVDLEtBQUYsRUFBVTlGLEVBQVYsRUFBaUI7QUFFaEM4RixXQUFLLENBQUNuRixLQUFOLENBQVkyRCxRQUFaLENBQXFCdkUsbUVBQW1CLENBQUVDLEVBQUYsQ0FBeEM7QUFDSCxLOzs7Ozs2QkFFUTtBQUFBOztBQUVELFVBQUVjLE9BQUYsR0FBcUIsS0FBS0gsS0FBMUIsQ0FBRUcsT0FBRjtBQUFBLFVBQ0FpRixpQkFEQSxHQUNxQmpGLE9BQU8sQ0FBQzVCLElBQVIsQ0FBYThHLE1BQWIsR0FBc0IsVUFBdEIsR0FBbUMsRUFEeEQ7QUFBQSxVQUVBQyxrQkFGQSxHQUVxQm5GLE9BQU8sQ0FBQ0MsUUFBUixHQUFtQixrQkFBbkIsR0FBd0MsRUFGN0Q7O0FBRkMsa0NBTVlELE9BQU8sQ0FBQ1csT0FBUixDQUFnQnlFLEtBQWhCLENBQXNCLENBQUMsQ0FBdkIsQ0FOWjtBQUFBO0FBQUEsVUFNQUMsUUFOQTs7QUFRTCxVQUFJQyxjQUFjLEdBQUd0RixPQUFPLENBQUNXLE9BQVIsQ0FBZ0I0RSxNQUFoQixDQUF1QixVQUFBNUUsT0FBTztBQUFBLGVBQUksQ0FBQ0EsT0FBTyxDQUFDaUMsU0FBYjtBQUFBLE9BQTlCLEVBQXVEaUMsTUFBNUU7QUFFQSwwQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFLLGlCQUFTLEVBQUVJLGlCQUFpQixHQUFHRSxrQkFBcEIsR0FBeUMsV0FBekQ7QUFDSSxlQUFPLEVBQUU7QUFBQSxpQkFBTSxNQUFJLENBQUNKLGdCQUFMLENBQXNCLE1BQXRCLEVBQTRCL0UsT0FBTyxDQUFDZCxFQUFwQyxDQUFOO0FBQUE7QUFEYixzQkFFSTtBQUFRLGlCQUFTLEVBQUM7QUFBbEIsc0JBQ0k7QUFBSyxXQUFHLEVBQUVnQiwrQ0FBTSxDQUFDQyxVQUFQLENBQWtCQyxHQUFsQixHQUF3QkosT0FBTyxDQUFDNUIsSUFBUixDQUFhaUMsTUFBL0M7QUFBdUQsV0FBRyxFQUFDO0FBQTNELFFBREosQ0FGSixlQUtJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQU0saUJBQVMsRUFBQztBQUFoQixTQUF3QkwsT0FBTyxDQUFDNUIsSUFBUixDQUFha0MsVUFBYixHQUEwQixHQUExQixHQUFnQ04sT0FBTyxDQUFDNUIsSUFBUixDQUFhbUMsU0FBckUsQ0FESixFQUVNOEUsUUFBUSxpQkFDTjtBQUFNLGlCQUFTLEVBQUM7QUFBaEIsU0FBZ0NBLFFBQVEsQ0FBQ2hELE9BQXpDLENBSFIsQ0FMSixFQVlRaUQsY0FBYyxnQkFDZDtBQUFHLGlCQUFTLEVBQUM7QUFBYixTQUFrQ0EsY0FBbEMsQ0FEYyxHQUdkLElBZlIsQ0FESixDQURKO0FBc0JIOzs7O0VBdkNrQjVGLCtDOztBQTJDUmdGLDBIQUFPLEdBQUdJLFFBQUgsQ0FBdEIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1VLEk7Ozs7Ozs7Ozs7Ozs7d0NBR2tCO0FBQUE7O0FBQ2hCO0FBQ0E7QUFFQSxVQUFJQyxnQkFBZ0IsR0FBRzVFLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixDQUF2QjtBQUNBekMsYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBS3VCLEtBQWpCLEVBQXdCLFlBQXhCOztBQUNBLFVBQUk0RixnQkFBZ0IsSUFBSSxDQUFDLEtBQUs1RixLQUFMLENBQVdELGFBQXBDLEVBQW1EO0FBQy9DO0FBQ0EsWUFBSThGLE9BQU8sR0FBR0QsZ0JBQWdCLENBQUNFLFlBQWpCLENBQThCLGFBQTlCLENBQWQ7QUFBQSxZQUNJQyxNQUFNLEdBQUlILGdCQUFnQixDQUFDRSxZQUFqQixDQUE4QixTQUE5QixDQURkO0FBQUEsWUFFSTNGLE9BQU8sR0FBR3lGLGdCQUFnQixDQUFDRSxZQUFqQixDQUE4QixjQUE5QixDQUZkLENBRitDLENBTS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0EsWUFBSUMsTUFBTSxJQUFJRixPQUFkLEVBQXdCO0FBSXBCLGNBQUl0RCxHQUFHLEdBQU0sSUFBSWhDLEdBQUosQ0FBUUYsK0NBQU0sQ0FBQzJGLE1BQVAsQ0FBY0MsS0FBZCxLQUF3Qix5QkFBaEMsQ0FBYjtBQUFBLGNBQ0lDLE1BQU0sR0FBRztBQUFFSCxrQkFBTSxFQUFOQSxNQUFGO0FBQVVGLG1CQUFPLEVBQVBBLE9BQVY7QUFBbUIxRixtQkFBTyxFQUFQQTtBQUFuQixXQURiO0FBRUFnRyxnQkFBTSxDQUFDQyxJQUFQLENBQVlGLE1BQVosRUFBb0JHLE9BQXBCLENBQTRCLFVBQUE5RSxHQUFHO0FBQUEsbUJBQUlnQixHQUFHLENBQUMrRCxZQUFKLENBQWlCQyxNQUFqQixDQUF3QmhGLEdBQXhCLEVBQTZCMkUsTUFBTSxDQUFDM0UsR0FBRCxDQUFuQyxDQUFKO0FBQUEsV0FBL0I7QUFFQWlGLGVBQUssQ0FBQ2pFLEdBQUQsRUFBTTtBQUNQa0Usa0JBQU0sRUFBRSxLQUREO0FBRVBDLG1CQUFPLEVBQUU7QUFDTCw4QkFBZ0I7QUFEWDtBQUZGLFdBQU4sQ0FBTCxDQU1DQyxJQU5ELENBTU0sVUFBQUMsR0FBRztBQUFBLG1CQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLFdBTlQsRUFPQ0YsSUFQRCxDQU9NLFVBQUFHLFFBQVEsRUFBSTtBQUVkLGdCQUFJQSxRQUFRLENBQUNDLElBQVQsSUFBaUIsR0FBckIsRUFBMEI7QUFDdEIsb0JBQU0sSUFBSUMsS0FBSixDQUFVLHlCQUFWLENBQU47QUFDSDs7QUFDRCxpQkFBSSxDQUFDaEgsS0FBTCxDQUFXMkQsUUFBWCxDQUFvQnJGLDBEQUFVLENBQUN3SSxRQUFRLENBQUN2SSxJQUFWLENBQTlCOztBQUNBLGlCQUFJLENBQUN5QixLQUFMLENBQVcyRCxRQUFYLENBQW9CNUUsa0VBQWtCLENBQUMrSCxRQUFRLENBQUN4QyxJQUFWLENBQXRDOztBQUNBLGlCQUFJLENBQUN0RSxLQUFMLENBQVcyRCxRQUFYLENBQW9CekUsd0VBQXdCLENBQUM0SCxRQUFRLENBQUN4QyxJQUFWLENBQTVDO0FBQ0gsV0FmRCxXQWdCUSxVQUFBMkMsS0FBSyxFQUFJO0FBRWJDLGlCQUFLLENBQUUsNkJBQUYsQ0FBTDtBQUNILFdBbkJEO0FBb0JIO0FBQ0o7QUFFSjs7O3lDQUNtQjtBQUFBOztBQUNoQixVQUFJdEIsZ0JBQWdCLEdBQUc1RSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBdkI7O0FBRUEsVUFBSTJFLGdCQUFKLEVBQXNCO0FBRWxCLFlBQUlDLE9BQU8sR0FBR0QsZ0JBQWdCLENBQUNFLFlBQWpCLENBQThCLGFBQTlCLENBQWQsQ0FGa0IsQ0FJbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUNELFVBQUksS0FBSzlGLEtBQUwsQ0FBV0QsYUFBZixFQUE4QjtBQUV0QixZQUFFQSxhQUFGLEdBQW9CLEtBQUtDLEtBQXpCLENBQUVELGFBQUY7QUFBQSxZQUNBYSxpQkFEQSxHQUNvQmIsYUFBYSxDQUFDRyxJQUFkLENBQW1CLFVBQUFDLE9BQU87QUFBQSxpQkFBSUEsT0FBTyxDQUFDQyxRQUFaO0FBQUEsU0FBMUIsQ0FEcEI7QUFBQSxZQUVBUyxRQUZBLEdBRW9CRCxpQkFBaUIsSUFBSUEsaUJBQWlCLENBQUNFLE9BRjNEO0FBSUosWUFBSXFHLGFBQWEsR0FBR3RHLFFBQVEsSUFBSUEsUUFBUSxDQUFDdUcsSUFBVCxDQUFlLFVBQVV0RyxPQUFWLEVBQW1CO0FBRTlELGlCQUFPLENBQUNBLE9BQU8sQ0FBQ2lDLFNBQWhCO0FBQ0gsU0FIK0IsQ0FBaEM7O0FBTUEsWUFBSW9FLGFBQUosRUFBbUI7QUFFZixjQUFJakIsTUFBTSxHQUFHO0FBQUUvRixtQkFBTyxFQUFFUyxpQkFBaUIsQ0FBQ3ZCLEVBQTdCO0FBQWlDd0csbUJBQU8sRUFBUEE7QUFBakMsV0FBYjtBQUVBVyxlQUFLLENBQUNuRywrQ0FBTSxDQUFDMkYsTUFBUCxDQUFjQyxLQUFkLEtBQXdCLG9CQUF6QixFQUErQztBQUNoRFEsa0JBQU0sRUFBRSxLQUR3QztBQUVoRFksZ0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVyQixNQUFmLENBRjBDO0FBR2hEUSxtQkFBTyxFQUFFO0FBQ0wsOEJBQWdCO0FBRFg7QUFIdUMsV0FBL0MsQ0FBTCxDQU9DQyxJQVBELENBT00sVUFBQUMsR0FBRztBQUFBLG1CQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLFdBUFQsRUFRQ0YsSUFSRCxDQVFNLFVBQUFHLFFBQVEsRUFBSTtBQUNkdEksbUJBQU8sQ0FBQ0MsR0FBUixDQUFZcUksUUFBWjs7QUFDQSxnQkFBSUEsUUFBUSxDQUFDQyxJQUFULElBQWlCLEdBQXJCLEVBQTBCO0FBQ3RCLG9CQUFJLENBQUMvRyxLQUFMLENBQVcyRCxRQUFYLENBQW9CcEUsK0RBQWUsRUFBbkM7QUFDSDtBQUNKLFdBYkQ7QUFjSDtBQUNKO0FBQ0o7Ozs2QkFFUTtBQUNMZixhQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBREssd0JBRXlCLEtBQUt1QixLQUY5QjtBQUFBLFVBRUNELGFBRkQsZUFFQ0EsYUFGRDtBQUFBLFVBRWdCeEIsSUFGaEIsZUFFZ0JBLElBRmhCO0FBS0wsMEJBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FFUXdCLGFBQWEsSUFBSXhCLElBQWpCLGdCQUNBLHFGQUNJLDJEQUFDLHdEQUFEO0FBQWEscUJBQWEsRUFBR3dCLGFBQTdCO0FBQTZDLFlBQUksRUFBR3hCO0FBQXBELFFBREosZUFFSSwyREFBQyx3REFBRDtBQUFhLHFCQUFhLEVBQUd3QixhQUE3QjtBQUE2QyxZQUFJLEVBQUd4QjtBQUFwRCxRQUZKLENBREEsR0FNQSxJQVJSLENBREosQ0FESixDQURKO0FBa0JIOzs7O0VBckpjc0IsK0M7O0FBeUpuQixJQUFJOEUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDN0IsU0FBTztBQUNIN0UsaUJBQWEsRUFBRTZFLEtBQUssQ0FBQzdFLGFBRGxCO0FBRUh4QixRQUFJLEVBQVdxRyxLQUFLLENBQUNyRztBQUZsQixHQUFQO0FBSUgsQ0FMRDs7QUFNZXNHLDBIQUFPLENBQUNGLGVBQUQsQ0FBUCxDQUF5QmdCLElBQXpCLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDeEtBO0FBQUEsSUFBSTZCLEtBQUssR0FBUSx3QkFBakI7QUFBQSxJQUNJQyxRQUFRLEdBQUssZ0JBRGpCO0FBQUEsSUFFSUMsVUFBVSxHQUFHLElBRmpCO0FBQUEsSUFHSUMsU0FBUyxHQUFJLElBSGpCO0FBS2U7QUFDWDNCLFFBQU0sRUFBRTtBQUNKNEIsUUFBSSxFQUFFRixVQURGO0FBRUpHLFVBQU0sRUFBRUwsS0FGSjtBQUdKTSxNQUFFLEVBQUVMLFFBSEE7QUFJSk0sYUFBUyxFQUFFSixTQUpQO0FBS0pLLFlBQVEsRUFBRSxvQkFBWTtBQUNsQixVQUFJTixVQUFVLElBQUksR0FBbEIsRUFBdUI7QUFDbkIsZUFBTyxVQUFQO0FBQ0g7O0FBQ0QsYUFBTyxTQUFQO0FBQ0gsS0FWRztBQVdKekIsU0FBSyxFQUFFLGlCQUFNO0FBQ1QsVUFBSWdDLFFBQVEsR0FBRyxFQUFmO0FBQ0EsVUFBSUMsUUFBUSxHQUFHLEVBQWY7O0FBQ0EsVUFBSVIsVUFBVSxJQUFJLEdBQWxCLEVBQXVCO0FBQ25CUSxnQkFBUSxHQUFHLFVBQVg7QUFDSCxPQUZELE1BRU87QUFDSEEsZ0JBQVEsR0FBRyxTQUFYO0FBQ0FELGdCQUFRLEdBQUcsTUFBTVAsVUFBakI7QUFDSDs7QUFFRCxhQUFPUSxRQUFRLEdBQUdWLEtBQVgsR0FBbUJTLFFBQTFCO0FBQ0g7QUF0QkcsR0FERztBQXlCWDNILFlBQVUsRUFBRTtBQUNSQyxPQUFHLEVBQUU7QUFERztBQXpCRCxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTTRILEtBQUssR0FBR0MseURBQVcsQ0FBQ0MsZ0RBQUQsQ0FBekI7QUFDQUYsS0FBSyxDQUFDRyxTQUFOLENBQWdCLFlBQVU7QUFDdEI5SixTQUFPLENBQUNDLEdBQVIsQ0FBWSwyQkFBWjtBQUNBRCxTQUFPLENBQUNDLEdBQVIsQ0FBWTBKLEtBQUssQ0FBQ0ksUUFBTixFQUFaO0FBQ0gsQ0FIRDs7QUFJQSxJQUFJLE9BQVFDLE9BQVIsS0FBcUIsV0FBekIsRUFBc0M7QUFDbENDLGtEQUFRLENBQUNDLE1BQVQsZUFDSSwyREFBQyxvREFBRDtBQUFVLFNBQUssRUFBRVA7QUFBakIsa0JBQ0ksMkRBQUMseURBQUQsT0FESixDQURKLEVBSUVuSCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FKRjtBQUtILENBTkQsTUFNSztBQUNEaUcsT0FBSyxDQUFDLDRDQUFELENBQUw7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUM1QkQ7QUFBQTtBQUFBO0FBQUE7Q0FFQTs7QUFDQSxJQUFJeUIsTUFBTSxHQUFTLElBQW5CO0FBQUEsSUFDSUMsS0FBSyxHQUFVQyxZQURuQixDLENBRUE7O0FBRU8sU0FBU3pILG1CQUFULENBQTZCMEgsQ0FBN0IsRUFBZ0NqSSxRQUFoQyxFQUEwQ1osYUFBMUMsRUFBMEQ7QUFFN0QsTUFBRyxDQUFDWSxRQUFELElBQWEsQ0FBQ0EsUUFBUSxDQUFDbUUsTUFBMUIsRUFBaUM7QUFDN0IsV0FBTyxLQUFQO0FBQ0g7O0FBQ0QsTUFBSStELFNBQVMsR0FBRy9ILFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixxQkFBeEIsQ0FBaEI7QUFDQXpDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZc0ssU0FBUyxDQUFDQyxZQUF0QixFQUFvQ0QsU0FBUyxDQUFDRSxZQUFWLEdBQXlCLHFCQUE3RDs7QUFDQSxNQUFJL0gsNkNBQUMsQ0FBQzRILENBQUQsQ0FBRCxDQUFLSSxTQUFMLEtBQ0FoSSw2Q0FBQyxDQUFDNEgsQ0FBRCxDQUFELENBQUtLLFdBQUwsRUFEQSxJQUVBakksNkNBQUMsQ0FBQzRILENBQUQsQ0FBRCxDQUFLLENBQUwsRUFBUUUsWUFGWixFQUUwQjtBQUNsQjtBQUNBLFFBQUk3QixhQUFhLEdBQUd0RyxRQUFRLENBQUN1RyxJQUFULENBQWUsVUFBVXRHLE9BQVYsRUFBbUI7QUFFbEQsYUFBTyxDQUFDQSxPQUFPLENBQUNpQyxTQUFULElBQXNCLENBQUNqQyxPQUFPLENBQUNwQyxJQUF0QztBQUNILEtBSG1CLENBQXBCOztBQUtBLFFBQUl5SSxhQUFKLEVBQW1CO0FBQ2YzSSxhQUFPLENBQUNDLEdBQVIsQ0FBWW1LLEtBQUssQ0FBQ1EsZ0JBQWxCLEVBQW9DLHFCQUFwQztBQUNBLFVBQUlDLFNBQVMsR0FBRy9CLElBQUksQ0FBQ2dDLEtBQUwsQ0FBV0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLENBQVgsQ0FBaEI7QUFDQWIsWUFBTSxDQUFDYyxJQUFQLENBQVliLEtBQUssQ0FBQ1EsZ0JBQWxCLEVBQW9DO0FBQUU3SyxZQUFJLEVBQUc4SyxTQUFTLENBQUNoSyxFQUFuQjtBQUF1QnFLLGlCQUFTLEVBQUV6SixhQUFhLENBQUNaLEVBQWhEO0FBQW9Ec0ssbUJBQVcsRUFBRTFKLGFBQWEsQ0FBQzBKO0FBQS9FLE9BQXBDO0FBQ0g7QUFDUjtBQUNKLEM7Ozs7Ozs7Ozs7OztBQzdCRDtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTVKLGFBQWEsR0FBRyxJQUFwQjtBQUNBO0FBRWUsMkVBQXlDO0FBQUEsTUFBL0I2RSxLQUErQix1RUFBdkI3RSxhQUF1QjtBQUFBLE1BQVI2SixNQUFROztBQUNwRCxVQUFRQSxNQUFNLENBQUNsTCxJQUFmO0FBRUksU0FBS0MsdURBQUksQ0FBQ1EsMEJBQVY7QUFDSSxhQUFPeUssTUFBTSxDQUFDL0ssT0FBZDs7QUFFSjtBQUNJLGFBQU8rRixLQUFQO0FBTlI7QUFRSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZEO0FBQ0E7QUFDQTtBQUNBLElBQUk3RSxhQUFhLEdBQUcsSUFBcEI7QUFDQTtBQUVlLDJFQUF5QztBQUFBLE1BQS9CNkUsS0FBK0IsdUVBQXZCN0UsYUFBdUI7QUFBQSxNQUFSNkosTUFBUTs7QUFDcEQsVUFBUUEsTUFBTSxDQUFDbEwsSUFBZjtBQUVJLFNBQUtDLHVEQUFJLENBQUNXLGtCQUFWO0FBQ0ksYUFBT3NGLEtBQUssQ0FBQ3RELEdBQU4sQ0FBVSxVQUFBeUMsSUFBSSxFQUFJO0FBQ3JCLFlBQUlBLElBQUksQ0FBQzFFLEVBQUwsS0FBWXVLLE1BQU0sQ0FBQy9LLE9BQXZCLEVBQWdDO0FBQzVCLGlEQUFZa0YsSUFBWjtBQUFrQjNELG9CQUFRLEVBQUU7QUFBNUI7QUFDSDs7QUFDRCwrQ0FBWTJELElBQVo7QUFBa0IzRCxrQkFBUSxFQUFFO0FBQTVCO0FBQ0gsT0FMTSxDQUFQOztBQU9KLFNBQUt6Qix1REFBSSxDQUFDYSxvQkFBVjtBQUNJLGFBQU9vRixLQUFLLENBQUN0RCxHQUFOLENBQVcsVUFBQW5CLE9BQU8sRUFBSTtBQUN6QixZQUFHQSxPQUFPLENBQUNDLFFBQVIsS0FBcUIsSUFBeEIsRUFBOEI7QUFDMUIsY0FBSVMsUUFBUSxHQUFHVixPQUFPLENBQUNXLE9BQXZCO0FBQ0lELGtCQUFRLEdBQUdBLFFBQVEsQ0FBQ1MsR0FBVCxDQUFjLFVBQUFSLE9BQU8sRUFBSTtBQUFFLG1EQUFZQSxPQUFaO0FBQXFCaUMsdUJBQVMsRUFBRTtBQUFoQztBQUF3QyxXQUFuRSxDQUFYO0FBQ0osaURBQVk1QyxPQUFaO0FBQXFCVyxtQkFBTyxFQUFHRDtBQUEvQjtBQUNIOztBQUNELGVBQU9WLE9BQVA7QUFDSCxPQVBNLENBQVA7O0FBUUosU0FBS3hCLHVEQUFJLENBQUNNLG1CQUFWO0FBQ0ksYUFBTzJLLE1BQU0sQ0FBQy9LLE9BQWQ7O0FBRUosU0FBS0YsdURBQUksQ0FBQ2dCLGdCQUFWO0FBQUEsNEJBRXdCaUssTUFBTSxDQUFDL0ssT0FGL0I7QUFBQSxVQUVVd0YsR0FGVixtQkFFVUEsR0FGVjtBQUFBLFVBRWVDLElBRmYsbUJBRWVBLElBRmY7QUFHSTlGLGFBQU8sQ0FBQ0MsR0FBUixDQUFhbUwsTUFBTSxDQUFDL0ssT0FBcEI7QUFDQSxVQUFJRyxJQUFJLEdBQVksRUFBcEI7QUFFQXFGLFNBQUcsQ0FBQy9DLEdBQUosQ0FBUyxVQUFDakMsRUFBRCxFQUFLd0ssT0FBTCxFQUFtQjtBQUV4QixZQUFJeEssRUFBSixFQUFRO0FBQ0osY0FBSXlLLFdBQVcsR0FBR3hGLElBQUksQ0FBQ3BFLElBQUwsQ0FBVyxVQUFBQyxPQUFPO0FBQUEsbUJBQUdBLE9BQU8sQ0FBQ2QsRUFBUixJQUFjQSxFQUFqQjtBQUFBLFdBQWxCLENBQWxCOztBQUNBLGNBQUl5SyxXQUFKLEVBQWlCO0FBQ2JBLHVCQUFXLENBQUMxSixRQUFaLEdBQXVCLEtBQXZCO0FBQ0FwQixnQkFBSSxDQUFDOEUsSUFBTCxDQUFXZ0csV0FBWDtBQUNIO0FBQ0o7QUFDSixPQVREOztBQVVBLFVBQUk5SyxJQUFJLENBQUMsQ0FBRCxDQUFSLEVBQWE7QUFDVEEsWUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRb0IsUUFBUixHQUFtQixJQUFuQjtBQUNIOztBQUNELGFBQU9wQixJQUFQOztBQUVKO0FBQ0ksYUFBTzRGLEtBQVA7QUE1Q1I7QUE4Q0gsQzs7Ozs7Ozs7Ozs7O0FDdEREO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FFQTs7QUFDQTtBQUNBO0NBRUE7O0FBQ0EsSUFBTXlELE9BQU8sR0FBRzBCLDZEQUFlLENBQUM7QUFFNUJ4TCxNQUFJLEVBQWdCQSxnREFGUTtBQUc1QndCLGVBQWEsRUFBT0EseURBSFE7QUFJNUJvRCxvQkFBa0IsRUFBRUEsbUVBQWtCQTtBQUpWLENBQUQsQ0FBL0I7QUFNZWtGLHNFQUFmLEU7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQSxJQUFJOUosSUFBSSxHQUFHLElBQVg7QUFFQTtBQUVlLDJFQUFnQztBQUFBLE1BQXRCcUcsS0FBc0IsdUVBQWRyRyxJQUFjO0FBQUEsTUFBUnFMLE1BQVE7O0FBQzNDLFVBQVFBLE1BQU0sQ0FBQ2xMLElBQWY7QUFDSSxTQUFLQyx1REFBSSxDQUFDQyxXQUFWO0FBQ0ksYUFBT2dMLE1BQU0sQ0FBQy9LLE9BQWQ7O0FBQ0o7QUFDSSxhQUFPK0YsS0FBUDtBQUpSO0FBTUgsQzs7Ozs7Ozs7Ozs7QUNYRCxVQUFVLG1CQUFPLENBQUMseUpBQThFO0FBQ2hHLDBCQUEwQixtQkFBTyxDQUFDLGtPQUFvSDs7QUFFdEo7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0M7Ozs7Ozs7Ozs7O0FDbEJBLFVBQVUsbUJBQU8sQ0FBQyx5SkFBOEU7QUFDaEcsMEJBQTBCLG1CQUFPLENBQUMsNE9BQXlIOztBQUUzSjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQzs7Ozs7Ozs7Ozs7QUNsQkEsVUFBVSxtQkFBTyxDQUFDLHlKQUE4RTtBQUNoRywwQkFBMEIsbUJBQU8sQ0FBQyxrUEFBNEg7O0FBRTlKOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7OztBQ2xCQSxVQUFVLG1CQUFPLENBQUMseUpBQThFO0FBQ2hHLDBCQUEwQixtQkFBTyxDQUFDLDRPQUF5SDs7QUFFM0o7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0M7Ozs7Ozs7Ozs7O0FDbEJBLFVBQVUsbUJBQU8sQ0FBQyx5SkFBOEU7QUFDaEcsMEJBQTBCLG1CQUFPLENBQUMsa1BBQTRIOztBQUU5Sjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQzs7Ozs7Ozs7Ozs7QUNsQkEsVUFBVSxtQkFBTyxDQUFDLHlKQUE4RTtBQUNoRywwQkFBMEIsbUJBQU8sQ0FBQyxzT0FBc0g7O0FBRXhKOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7OztBQ2xCQSxVQUFVLG1CQUFPLENBQUMseUpBQThFO0FBQ2hHLDBCQUEwQixtQkFBTyxDQUFDLHdPQUF1SDs7QUFFeko7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0M7Ozs7Ozs7Ozs7O0FDbEJBLFVBQVUsbUJBQU8sQ0FBQyxzSkFBMkU7QUFDN0YsMEJBQTBCLG1CQUFPLENBQUMseU5BQStHOztBQUVqSjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQyIsImZpbGUiOiJqcy9pbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC5qc1wiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHcmVhdCBWaWJlc1xcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvR3JlYXRfVmliZXMvR3JlYXRWaWJlcy1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXVsaVxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvTXVsaS9NdWxpLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXJjaGl2by1NZWRpdW1cXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L0FyY2hpdm8vQXJjaGl2by1NZWRpdW0udHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCZW5jaE5pbmUtUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvQmVuY2hOaW5lL0JlbmNoTmluZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2F3YXJhYmktTWluY2hvLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L1Nhd2FyYWJpX01pbmNoby9TYXdhcmFiaU1pbmNoby1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG4uYmctY2hhdC10ZW1hbGF0ZSB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ud3JhcHBlci1wYWdlLWNoYXQge1xcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XFxufVxcbi53cmFwcGVyLXBhZ2UtY2hhdDphZnRlciB7XFxuICBjbGVhcjogYm90aDtcXG4gIGNvbnRlbnQ6IFxcXCIuXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAwO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHcmVhdCBWaWJlc1xcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvR3JlYXRfVmliZXMvR3JlYXRWaWJlcy1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXVsaVxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvTXVsaS9NdWxpLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXJjaGl2by1NZWRpdW1cXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L0FyY2hpdm8vQXJjaGl2by1NZWRpdW0udHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCZW5jaE5pbmUtUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvQmVuY2hOaW5lL0JlbmNoTmluZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2F3YXJhYmktTWluY2hvLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L1Nhd2FyYWJpX01pbmNoby9TYXdhcmFiaU1pbmNoby1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDY3ODRiO1xcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyAudXNlci1hY3RpdmUtY2hhdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XFxuICBtaW4taGVpZ2h0OiA3NXB4O1xcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyAudXNlci1hY3RpdmUtY2hhdCAuc3RhdGUtYXZhdGFyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBtaW4td2lkdGg6IDUwcHg7XFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxufVxcbi5jb21wb25lbnQtaGVhZC1pbmZvIC51c2VyLWFjdGl2ZS1jaGF0IC5zdGF0ZS1hdmF0YXIgaW1nIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbWluLXdpZHRoOiA1MHB4O1xcbiAgbWluLWhlaWdodDogNTBweDtcXG59XFxuLmNvbXBvbmVudC1oZWFkLWluZm8gLnVzZXItYWN0aXZlLWNoYXQgLnRleHQtaW5mbyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDdweCA3cHggN3B4IDU1cHg7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmNvbXBvbmVudC1oZWFkLWluZm8gLnVzZXItYWN0aXZlLWNoYXQgLnRleHQtaW5mbyAubmFtZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcbi5jb21wb25lbnQtaGVhZC1pbmZvIC51c2VyLWFjdGl2ZS1jaGF0IC50ZXh0LWluZm8gLnRpbWUtb25saW5lIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6ICM2Yzc1N2Q7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyAudXNlci1hY3RpdmUtY2hhdCAudGV4dC1pbmZvIC50aW1lLW9ubGluZS5hY3RpdmUtbm93IHtcXG4gIGNvbG9yOiAjOGJjMzRhO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHcmVhdCBWaWJlc1xcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvR3JlYXRfVmliZXMvR3JlYXRWaWJlcy1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXVsaVxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvTXVsaS9NdWxpLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXJjaGl2by1NZWRpdW1cXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L0FyY2hpdm8vQXJjaGl2by1NZWRpdW0udHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCZW5jaE5pbmUtUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvQmVuY2hOaW5lL0JlbmNoTmluZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2F3YXJhYmktTWluY2hvLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L1Nhd2FyYWJpX01pbmNoby9TYXdhcmFiaU1pbmNoby1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSB7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiA3MCU7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlOWVjZWY7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICBzY3JvbGxiYXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKSAjRjVGNUY1O1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluICFpbXBvcnRhbnQ7XFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTphZnRlciB7XFxuICBjbGVhcjogYm90aDtcXG4gIGNvbnRlbnQ6IFxcXCIuXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAwO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOjotbW96LXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOjotbW96LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTo6LW8tc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6Oi1vLXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLW8tYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6Oi1tcy1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTo6LW1zLXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLW1zLWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuXFxuLnRpY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1pbi13aWR0aDogMzBweDtcXG59XFxuLnRpY29udGFpbmVyIC50aWJsb2NrIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxN3B4O1xcbn1cXG4udGljb250YWluZXIgLnRpYmxvY2sgLnRpZG90IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZGI1YmQ7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogbWVyY3VyeVR5cGluZ0FuaW1hdGlvbiAxLjVzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xcbiAgYW5pbWF0aW9uOiBtZXJjdXJ5VHlwaW5nQW5pbWF0aW9uIDEuNXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDZweDtcXG4gIG1hcmdpbi1yaWdodDogNHB4O1xcbiAgd2lkdGg6IDZweDtcXG59XFxuLnRpY29udGFpbmVyIC50aWJsb2NrIC50aWRvdDpudGgtY2hpbGQoMSkge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDE1MG1zO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAyMDBtcztcXG59XFxuLnRpY29udGFpbmVyIC50aWJsb2NrIC50aWRvdDpudGgtY2hpbGQoMikge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMwMG1zO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAzMDBtcztcXG59XFxuLnRpY29udGFpbmVyIC50aWJsb2NrIC50aWRvdDpudGgtY2hpbGQoMykge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDQ1MG1zO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiA0MDBtcztcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIG1lcmN1cnlUeXBpbmdBbmltYXRpb24ge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgfVxcbiAgMjglIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxuICB9XFxuICA0NCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxuICAuY29tcG9uZW50LWxpc3QtbWVzc2FnZSB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5jb21wb25lbnQtbGlzdC1tZXNzYWdlIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDc1cHgpO1xcbiAgfVxcbiAgLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlIHtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gIH1cXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR3JlYXQgVmliZXNcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L0dyZWF0X1ZpYmVzL0dyZWF0VmliZXMtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk11bGlcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L011bGkvTXVsaS1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkFyY2hpdm8tTWVkaXVtXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9BcmNoaXZvL0FyY2hpdm8tTWVkaXVtLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmVuY2hOaW5lLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L0JlbmNoTmluZS9CZW5jaE5pbmUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNhd2FyYWJpLU1pbmNoby1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9TYXdhcmFiaV9NaW5jaG8vU2F3YXJhYmlNaW5jaG8tUmVndWxhci50dGZcXFwiKTtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmZmM3O1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC5ub25lLXJlYWQtbWVzc2FnZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHBhZGRpbmc6IDNweCA2cHg7XFxuICBib3R0b206IDMwJTtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcXG4gIGNvbG9yOiAjZTllY2VmO1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQge1xcbiAgbWluLWhlaWdodDogNTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQuYWN0aXZlLW1lc3NhZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2Nzg0YjtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0LmFjdGl2ZS1tZXNzYWdlIC50ZXh0LWluZm8ge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdC5hY3RpdmUgLnN0YXRlLWF2YXRhciB7XFxuICBib3JkZXItY29sb3I6ICMyOGE3NDU7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdC5hY3RpdmUgLnN0YXRlLWF2YXRhcjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQgLnN0YXRlLWF2YXRhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbWluLXdpZHRoOiA1MHB4O1xcbiAgbWluLWhlaWdodDogNTBweDtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQgLnN0YXRlLWF2YXRhcjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiA1cHg7XFxuICB6LWluZGV4OiA1O1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FkYjViZDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQgLnN0YXRlLWF2YXRhciBpbWcge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBtaW4td2lkdGg6IDUwcHg7XFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQgLnRleHQtaW5mbyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDAgMCAwIDU1cHg7XFxuICBjb2xvcjogIzRiNTE1ZDtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC50ZXh0LWluZm8gLm5hbWUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQgLnRleHQtaW5mbyAubGFzdC1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0LmFjdGl2ZS1tZXNzYWdlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FkYjViZDtcXG4gIH1cXG4gIC5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdCAudGV4dC1pbmZvIHtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIH1cXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR3JlYXQgVmliZXNcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L0dyZWF0X1ZpYmVzL0dyZWF0VmliZXMtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk11bGlcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L011bGkvTXVsaS1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkFyY2hpdm8tTWVkaXVtXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9BcmNoaXZvL0FyY2hpdm8tTWVkaXVtLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmVuY2hOaW5lLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L0JlbmNoTmluZS9CZW5jaE5pbmUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNhd2FyYWJpLU1pbmNoby1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9TYXdhcmFiaV9NaW5jaG8vU2F3YXJhYmlNaW5jaG8tUmVndWxhci50dGZcXFwiKTtcXG59XFxuLmxlZnQtbWVzc2FnZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxufVxcbi5sZWZ0LW1lc3NhZ2UgLnJlYWQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDVweDtcXG59XFxuXFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQge1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQ6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMDtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQudHlwaW5nLWNoYXQtbWVzc3NhZ2Uge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYWRiNWJkO1xcbiAgbGVmdDogNTAlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0LnR5cGluZy1jaGF0LW1lc3NzYWdlLnNob3cge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0LnR5cGluZy1jaGF0LW1lc3NzYWdlIC50eXBpbmctbWVzc2FnZSAudGV4dCB7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIHBhZGRpbmc6IDJweCAxMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwOmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDA7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwLmJ5LW1lIC5hdmF0YXIge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cC5ieS1tZSAubWVzc2FnZS1jb250ZW50IHtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAuYnktbWUgLm1lc3NhZ2UtY29udGVudCAudGV4dCB7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZmZjNztcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAuYnktbWUgLkVNT0pJIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAuYXZhdGFyIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgbWluLXdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAuYXZhdGFyIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQudHlwaW5nLW1lc3NhZ2Uge1xcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQgLklNQUdFIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudCAuSU1BR0UgLndyYXBwZXItYXR0YWNobWVudCB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXgtd2lkdGg6IDIwMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAubWVzc2FnZS1jb250ZW50IC5JTUFHRSAud3JhcHBlci1hdHRhY2htZW50IGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudCAuSU1BR0UgLndyYXBwZXItYXR0YWNobWVudCAuZG93bmxvYWQtZmlsZS1hdHRhY2htZW50IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNSU7XFxuICByaWdodDogNSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMmU2O1xcbiAgY29sb3I6ICMwZDQ3YTE7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwYWRkaW5nOiAzcHggMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZDQ3YTE7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQgLklNQUdFIC53cmFwcGVyLWF0dGFjaG1lbnQgLmRvd25sb2FkLWZpbGUtYXR0YWNobWVudCBpIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudCAuRU1PSkkge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudCAudGV4dCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAwIDE1cHggMTVweCAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjZTllOTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudCAudGV4dC5FTU9KSSB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAubWVzc2FnZS1jb250ZW50IC50aW1lLWxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAudHlwaW5nLW1lc3NhZ2UgLnRleHQge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAudHlwaW5nLW1lc3NhZ2UgLnR5cGluZy10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR3JlYXQgVmliZXNcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L0dyZWF0X1ZpYmVzL0dyZWF0VmliZXMtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk11bGlcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L011bGkvTXVsaS1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkFyY2hpdm8tTWVkaXVtXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9BcmNoaXZvL0FyY2hpdm8tTWVkaXVtLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmVuY2hOaW5lLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L0JlbmNoTmluZS9CZW5jaE5pbmUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNhd2FyYWJpLU1pbmNoby1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9TYXdhcmFiaV9NaW5jaG8vU2F3YXJhYmlNaW5jaG8tUmVndWxhci50dGZcXFwiKTtcXG59XFxuLmNvbXBvbmVudC1zZWFyY2gtdXNlciB7XFxuICBtYXJnaW46IDAgMCA1cHggNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxufVxcbi5jb21wb25lbnQtc2VhcmNoLXVzZXIgLnNlYXJjaC11c2VyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNmM3NTdkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA4cHggNTBweCA4cHggMzBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjNmM3NTdkO1xcbiAgZm9udC1zdHlsZTogXFxcIkFyY2hpdm8tTWVkaXVtXFxcIjtcXG59XFxuLmNvbXBvbmVudC1zZWFyY2gtdXNlciAuc2VhcmNoLXVzZXI6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjMGQ0N2ExO1xcbiAgY29sb3I6ICMwZDQ3YTE7XFxufVxcbi5jb21wb25lbnQtc2VhcmNoLXVzZXIgLnNlYXJjaC11c2VyOmZvY3VzIH4gLmhlcm8taWNvbiB7XFxuICBjb2xvcjogIzBkNDdhMTtcXG59XFxuLmNvbXBvbmVudC1zZWFyY2gtdXNlciAuaGVyby1pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDVweDtcXG4gIGJvdHRvbTogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGNvbG9yOiAjNmM3NTdkO1xcbiAgei1pbmRleDogMjtcXG4gIHRvcDogNSU7XFxufVxcbi5jb21wb25lbnQtc2VhcmNoLXVzZXIgLmJ0bi1zZWFyY2gge1xcbiAgbGVmdDogdW5zZXQ7XFxuICByaWdodDogMXB4O1xcbiAgd2lkdGg6IDQ1cHg7XFxuICB6LWluZGV4OiA1O1xcbiAgdG9wOiAycHg7XFxuICBib3R0b206IDFweDtcXG4gIHBhZGRpbmc6IDNweCAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLmNvbXBvbmVudC1zZWFyY2gtdXNlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkdyZWF0IFZpYmVzXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9HcmVhdF9WaWJlcy9HcmVhdFZpYmVzLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNdWxpXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9NdWxpL011bGktVmFyaWFibGVGb250X3dnaHQudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmNoaXZvLU1lZGl1bVxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvQXJjaGl2by9BcmNoaXZvLU1lZGl1bS50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJlbmNoTmluZS1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9CZW5jaE5pbmUvQmVuY2hOaW5lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTYXdhcmFiaS1NaW5jaG8tUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvU2F3YXJhYmlfTWluY2hvL1Nhd2FyYWJpTWluY2hvLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0IHtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgd2lkdGg6IDMwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XFxuICBzY3JvbGxiYXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKSAjRjVGNUY1O1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluICFpbXBvcnRhbnQ7XFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQ6Oi1tb3otc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdDo6LW1vei1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdDo6LW8tc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdDo6LW8tc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtby1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0OjotbXMtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdDo6LW1zLXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLW1zLWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQgKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ubXlpbmZvIHtcXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xcbiAgbWluLWhlaWdodDogNzVweDtcXG59XFxuLm15aW5mbyAuYXZhdGFyIC5zdGF0ZS1hdmF0YXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcbi5teWluZm8gLmF2YXRhciAuc3RhdGUtYXZhdGFyOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIuXFxcIjtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMXB4O1xcbiAgbGVmdDogMXB4O1xcbiAgcmlnaHQ6IDFweDtcXG4gIGJvdHRvbTogMXB4O1xcbn1cXG4ubXlpbmZvIC5hdmF0YXIgLnN0YXRlLWF2YXRhci5hY3RpdmUtb25saW5lIHtcXG4gIGJvcmRlcjogMnB4IGRvdWJsZSAjMDBjODUxO1xcbn1cXG4ubXlpbmZvIC5hdmF0YXIgLnN0YXRlLWF2YXRhciBpbWcge1xcbiAgbWF4LXdpZHRoOiA0MHB4O1xcbiAgbWF4LWhlaWdodDogNDBweDtcXG59XFxuLm15aW5mbyAuYXZhdGFyIC5uYW1lIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBtYXgtd2lkdGg6IDI3Y2g7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGNvbG9yOiAjMGQ0N2ExO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxuICAuY29tcG9uZW50LXNpZGViYXItY2hhdCB7XFxuICAgIHdpZHRoOiA0MCU7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5jb21wb25lbnQtc2lkZWJhci1jaGF0IHtcXG4gICAgd2lkdGg6IDc1cHg7XFxuICB9XFxuICAuY29tcG9uZW50LXNpZGViYXItY2hhdCAudXNlci1jaGF0IC5zdGF0ZS1hdmF0YXIge1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgIWltcG9ydGFudDtcXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSAhaW1wb3J0YW50O1xcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSAhaW1wb3J0YW50O1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgIWltcG9ydGFudDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC5teWluZm8ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgfVxcbiAgLm15aW5mbyAuYXZhdGFyIC5zdGF0ZS1hdmF0YXIgaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAzNXB4O1xcbiAgICBtYXgtaGVpZ2h0OiAzNXB4O1xcbiAgfVxcbiAgLm15aW5mbyAuYXZhdGFyIC5uYW1lIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR3JlYXQgVmliZXNcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L0dyZWF0X1ZpYmVzL0dyZWF0VmliZXMtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk11bGlcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L011bGkvTXVsaS1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkFyY2hpdm8tTWVkaXVtXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9BcmNoaXZvL0FyY2hpdm8tTWVkaXVtLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmVuY2hOaW5lLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L0JlbmNoTmluZS9CZW5jaE5pbmUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNhd2FyYWJpLU1pbmNoby1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9TYXdhcmFiaV9NaW5jaG8vU2F3YXJhYmlNaW5jaG8tUmVndWxhci50dGZcXFwiKTtcXG59XFxuLyoqXFxuKiBkaXNwbGF5XFxuKi9cXG4qLFxcbjphZnRlcixcXG46YmVmb3JlIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpmb2N1cyB7XFxuICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmQtbm9uZSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kLWlubGluZS1ibG9jayB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcXG59XFxuXFxuLmQtYmxvY2sge1xcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXG59XFxuXFxuLmQtdGFibGUge1xcbiAgZGlzcGxheTogdGFibGUgIWltcG9ydGFudDtcXG59XFxuXFxuLmQtdGFibGUtcm93IHtcXG4gIGRpc3BsYXk6IHRhYmxlLXJvdyAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZC10YWJsZS1jZWxsIHtcXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDtcXG59XFxuXFxuLmQtZmxleCB7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveCAhaW1wb3J0YW50O1xcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZC1pbmxpbmUtZmxleCB7XFxuICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3ggIWltcG9ydGFudDtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5pdGFsaWMge1xcbiAgZm9udC1zdHlsZTogaXRhbGljICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ub3QtaXRhbGljIHtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xcbn1cXG5cXG4udXBwZXJjYXNlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcXG59XFxuXFxuLmxvd2VyY2FzZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XFxufVxcblxcbi5jYXBpdGFsaXplIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ub3JtYWwtY2FzZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4udW5kZXJsaW5lIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5saW5lLXRocm91Z2gge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2ggIWltcG9ydGFudDtcXG59XFxuXFxuLm5vLXVuZGVybGluZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5mb250LWhhaXJsaW5lIHtcXG4gIGZvbnQtd2VpZ2h0OiAxMDAgIWltcG9ydGFudDtcXG59XFxuXFxuLmZvbnQtdGhpbiB7XFxuICBmb250LXdlaWdodDogMjAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mb250LWxpZ2h0IHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcXG59XFxuXFxuLmZvbnQtbm9ybWFsIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcXG59XFxuXFxuLmZvbnQtbWVkaXVtIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcXG59XFxuXFxuLmZvbnQtc2VtaWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZm9udC1ib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcXG59XFxuXFxuLmZvbnQtZXh0cmFib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiA4MDAgIWltcG9ydGFudDtcXG59XFxuXFxuLmZvbnQtYmxhY2sge1xcbiAgZm9udC13ZWlnaHQ6IDkwMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4udGV4dC1jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGV4dC1yaWdodCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLnRleHQtbGVmdCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4udmVydGljYWwtYWxpZ24tbWlkZGxlIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5tZy1hdXRvIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ucm91bmRlZC1jaXJjbGUge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ib3JkZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNiAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYm9yZGVyLXRvcCB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNiAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYm9yZGVyLXJpZ2h0IHtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWUyZTYgIWltcG9ydGFudDtcXG59XFxuXFxuLmJvcmRlci1ib3R0b20ge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTYgIWltcG9ydGFudDtcXG59XFxuXFxuLmJvcmRlci1sZWZ0IHtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RlZTJlNiAhaW1wb3J0YW50O1xcbn1cXG5cXG4udGV4dC1jb2xvci1yZWQge1xcbiAgY29sb3I6ICNmNDQzMzY7XFxufVxcblxcbi50ZXh0LWNvbG9yLXBpbmsge1xcbiAgY29sb3I6ICNlOTFlNjM7XFxufVxcblxcbi50ZXh0LWNvbG9yLXB1cnBsZSB7XFxuICBjb2xvcjogIzljMjdiMDtcXG59XFxuXFxuLnRleHQtY29sb3ItZGVlcC1wdXJwbGUge1xcbiAgY29sb3I6ICM2NzNhYjc7XFxufVxcblxcbi50ZXh0LWNvbG9yLWluZGlnbyB7XFxuICBjb2xvcjogIzNmNTFiNTtcXG59XFxuXFxuLnRleHQtY29sb3ItYmx1ZSB7XFxuICBjb2xvcjogIzIxOTZmMztcXG59XFxuXFxuLnRleHQtY29sb3ItbGlnaHQtYmx1ZSB7XFxuICBjb2xvcjogIzAzYTlmNDtcXG59XFxuXFxuLnRleHQtY29sb3ItY3lhbiB7XFxuICBjb2xvcjogIzAwYmNkNDtcXG59XFxuXFxuLnRleHQtY29sb3ItdGVhbCB7XFxuICBjb2xvcjogIzAwOTY4ODtcXG59XFxuXFxuLnRleHQtY29sb3ItZ3JlZW4ge1xcbiAgY29sb3I6ICM0Y2FmNTA7XFxufVxcblxcbi50ZXh0LWNvbG9yLWxpZ2h0LWdyZWVuIHtcXG4gIGNvbG9yOiAjOGJjMzRhO1xcbn1cXG5cXG4udGV4dC1jb2xvci1saW1lIHtcXG4gIGNvbG9yOiAjY2RkYzM5O1xcbn1cXG5cXG4udGV4dC1jb2xvci15ZWxsb3cge1xcbiAgY29sb3I6ICNmZmViM2I7XFxufVxcblxcbi50ZXh0LWNvbG9yLWFtYmVyIHtcXG4gIGNvbG9yOiAjZmZjMTA3O1xcbn1cXG5cXG4udGV4dC1jb2xvci1vcmFuZ2Uge1xcbiAgY29sb3I6ICNmZjk4MDA7XFxufVxcblxcbi50ZXh0LWNvbG9yLWRlZXAtb3JhbmdlIHtcXG4gIGNvbG9yOiAjZmY1NzIyO1xcbn1cXG5cXG4udGV4dC1jb2xvci1icm93biB7XFxuICBjb2xvcjogIzc5NTU0ODtcXG59XFxuXFxuLnRleHQtY29sb3ItYmxhY2sge1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbi50ZXh0LWNvbG9yLXdoaXRlIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4udGV4dC1jb2xvci1ncmV5IHtcXG4gIGNvbG9yOiAjOWU5ZTllO1xcbn1cXG5cXG4udGV4dC1jb2xvci1ibHVlLWdyZXkge1xcbiAgY29sb3I6ICM2MDdkOGI7XFxufVxcblxcbi50ZXh0LWNvbG9yLXByaW1hcnktY29sb3ItZGFyayB7XFxuICBjb2xvcjogIzBkNDdhMTtcXG59XFxuXFxuLnRleHQtY29sb3Itc2Vjb25kYXJ5LWNvbG9yIHtcXG4gIGNvbG9yOiAjYWE2NmNjO1xcbn1cXG5cXG4udGV4dC1jb2xvci1zZWNvbmRhcnktY29sb3ItZGFyayB7XFxuICBjb2xvcjogIzk5MzNjYztcXG59XFxuXFxuLnRleHQtY29sb3ItZGVmYXVsdC1jb2xvciB7XFxuICBjb2xvcjogIzJiYmJhZDtcXG59XFxuXFxuLnRleHQtY29sb3ItZGVmYXVsdC1jb2xvci1kYXJrIHtcXG4gIGNvbG9yOiAjMDA2OTVjO1xcbn1cXG5cXG4udGV4dC1jb2xvci1pbmZvLWNvbG9yIHtcXG4gIGNvbG9yOiAjMzNiNWU1O1xcbn1cXG5cXG4udGV4dC1jb2xvci1pbmZvLWNvbG9yLWRhcmsge1xcbiAgY29sb3I6ICMwMDk5Y2M7XFxufVxcblxcbi50ZXh0LWNvbG9yLXN1Y2Nlc3MtY29sb3Ige1xcbiAgY29sb3I6ICMwMGM4NTE7XFxufVxcblxcbi50ZXh0LWNvbG9yLXN1Y2Nlc3MtY29sb3ItZGFyayB7XFxuICBjb2xvcjogIzAwN2UzMztcXG59XFxuXFxuLnRleHQtY29sb3Itd2FybmluZy1jb2xvciB7XFxuICBjb2xvcjogI2ZmYmIzMztcXG59XFxuXFxuLnRleHQtY29sb3Itd2FybmluZy1jb2xvci1kYXJrIHtcXG4gIGNvbG9yOiAjZmY4ODAwO1xcbn1cXG5cXG4udGV4dC1jb2xvci1kYW5nZXItY29sb3Ige1xcbiAgY29sb3I6ICNmZjM1NDc7XFxufVxcblxcbi50ZXh0LWNvbG9yLWRhbmdlci1jb2xvci1kYXJrIHtcXG4gIGNvbG9yOiAjY2MwMDAwO1xcbn1cXG5cXG4udGV4dC1jb2xvci1lbGVnYW50LWNvbG9yIHtcXG4gIGNvbG9yOiAjMmUyZTJlO1xcbn1cXG5cXG4udGV4dC1jb2xvci1lbGVnYW50LWNvbG9yLWRhcmsge1xcbiAgY29sb3I6ICMyMTIxMjE7XFxufVxcblxcbi50ZXh0LWNvbG9yLXN0eWxpc2gtY29sb3Ige1xcbiAgY29sb3I6ICM0YjUxNWQ7XFxufVxcblxcbi50ZXh0LWNvbG9yLXN0eWxpc2gtY29sb3ItZGFyayB7XFxuICBjb2xvcjogIzNlNDU1MTtcXG59XFxuXFxuLnRleHQtY29sb3ItdW5pcXVlLWNvbG9yIHtcXG4gIGNvbG9yOiAjM2Y3MjliO1xcbn1cXG5cXG4udGV4dC1jb2xvci11bmlxdWUtY29sb3ItZGFyayB7XFxuICBjb2xvcjogIzFjMjMzMTtcXG59XFxuXFxuLnRleHQtY29sb3Itc3BlY2lhbC1jb2xvciB7XFxuICBjb2xvcjogIzM3NDc0ZjtcXG59XFxuXFxuLnRleHQtY29sb3Itc3BlY2lhbC1jb2xvci1kYXJrIHtcXG4gIGNvbG9yOiAjMjYzMjM4O1xcbn1cXG5cXG4udGV4dC1jb2xvci1wcmltYXJ5IHtcXG4gIGNvbG9yOiAjNDI4NWY0O1xcbn1cXG5cXG4udGV4dC1jb2xvci1kYW5nZXIge1xcbiAgY29sb3I6ICNmZjM1NDc7XFxufVxcblxcbi50ZXh0LWNvbG9yLXdhcm5pbmcge1xcbiAgY29sb3I6ICNmZmJiMzM7XFxufVxcblxcbi50ZXh0LWNvbG9yLXN1Y2Nlc3Mge1xcbiAgY29sb3I6ICMwMGM4NTE7XFxufVxcblxcbi50ZXh0LWNvbG9yLWluZm8ge1xcbiAgY29sb3I6ICMzM2I1ZTU7XFxufVxcblxcbi50ZXh0LWNvbG9yLWRlZmF1bHQge1xcbiAgY29sb3I6ICMyYmJiYWQ7XFxufVxcblxcbi50ZXh0LWNvbG9yLXNlY29uZGFyeSB7XFxuICBjb2xvcjogI2FhNjZjYztcXG59XFxuXFxuLnRleHQtY29sb3ItZGFyayB7XFxuICBjb2xvcjogIzIxMjEyMTtcXG59XFxuXFxuLnRleHQtY29sb3ItbGlnaHQge1xcbiAgY29sb3I6ICNlMGUwZTA7XFxufVxcblxcbi50ZXh0LWNvbG9yLWdyZXkteCB7XFxuICBjb2xvcjogI2Y5ZjlmOTtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1yZWQge1xcbiAgYm9yZGVyLWNvbG9yOiAjZjQ0MzM2O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXBpbmsge1xcbiAgYm9yZGVyLWNvbG9yOiAjZTkxZTYzO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXB1cnBsZSB7XFxuICBib3JkZXItY29sb3I6ICM5YzI3YjA7XFxufVxcblxcbi5ib3JkZXItY29sb3ItZGVlcC1wdXJwbGUge1xcbiAgYm9yZGVyLWNvbG9yOiAjNjczYWI3O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWluZGlnbyB7XFxuICBib3JkZXItY29sb3I6ICMzZjUxYjU7XFxufVxcblxcbi5ib3JkZXItY29sb3ItYmx1ZSB7XFxuICBib3JkZXItY29sb3I6ICMyMTk2ZjM7XFxufVxcblxcbi5ib3JkZXItY29sb3ItbGlnaHQtYmx1ZSB7XFxuICBib3JkZXItY29sb3I6ICMwM2E5ZjQ7XFxufVxcblxcbi5ib3JkZXItY29sb3ItY3lhbiB7XFxuICBib3JkZXItY29sb3I6ICMwMGJjZDQ7XFxufVxcblxcbi5ib3JkZXItY29sb3ItdGVhbCB7XFxuICBib3JkZXItY29sb3I6ICMwMDk2ODg7XFxufVxcblxcbi5ib3JkZXItY29sb3ItZ3JlZW4ge1xcbiAgYm9yZGVyLWNvbG9yOiAjNGNhZjUwO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWxpZ2h0LWdyZWVuIHtcXG4gIGJvcmRlci1jb2xvcjogIzhiYzM0YTtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1saW1lIHtcXG4gIGJvcmRlci1jb2xvcjogI2NkZGMzOTtcXG59XFxuXFxuLmJvcmRlci1jb2xvci15ZWxsb3cge1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZlYjNiO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWFtYmVyIHtcXG4gIGJvcmRlci1jb2xvcjogI2ZmYzEwNztcXG59XFxuXFxuLmJvcmRlci1jb2xvci1vcmFuZ2Uge1xcbiAgYm9yZGVyLWNvbG9yOiAjZmY5ODAwO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWRlZXAtb3JhbmdlIHtcXG4gIGJvcmRlci1jb2xvcjogI2ZmNTcyMjtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1icm93biB7XFxuICBib3JkZXItY29sb3I6ICM3OTU1NDg7XFxufVxcblxcbi5ib3JkZXItY29sb3ItYmxhY2sge1xcbiAgYm9yZGVyLWNvbG9yOiAjMDAwO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXdoaXRlIHtcXG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1ncmV5IHtcXG4gIGJvcmRlci1jb2xvcjogIzllOWU5ZTtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1ibHVlLWdyZXkge1xcbiAgYm9yZGVyLWNvbG9yOiAjNjA3ZDhiO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXByaW1hcnktY29sb3ItZGFyayB7XFxuICBib3JkZXItY29sb3I6ICMwZDQ3YTE7XFxufVxcblxcbi5ib3JkZXItY29sb3Itc2Vjb25kYXJ5LWNvbG9yIHtcXG4gIGJvcmRlci1jb2xvcjogI2FhNjZjYztcXG59XFxuXFxuLmJvcmRlci1jb2xvci1zZWNvbmRhcnktY29sb3ItZGFyayB7XFxuICBib3JkZXItY29sb3I6ICM5OTMzY2M7XFxufVxcblxcbi5ib3JkZXItY29sb3ItZGVmYXVsdC1jb2xvciB7XFxuICBib3JkZXItY29sb3I6ICMyYmJiYWQ7XFxufVxcblxcbi5ib3JkZXItY29sb3ItZGVmYXVsdC1jb2xvci1kYXJrIHtcXG4gIGJvcmRlci1jb2xvcjogIzAwNjk1YztcXG59XFxuXFxuLmJvcmRlci1jb2xvci1pbmZvLWNvbG9yIHtcXG4gIGJvcmRlci1jb2xvcjogIzMzYjVlNTtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1pbmZvLWNvbG9yLWRhcmsge1xcbiAgYm9yZGVyLWNvbG9yOiAjMDA5OWNjO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXN1Y2Nlc3MtY29sb3Ige1xcbiAgYm9yZGVyLWNvbG9yOiAjMDBjODUxO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXN1Y2Nlc3MtY29sb3ItZGFyayB7XFxuICBib3JkZXItY29sb3I6ICMwMDdlMzM7XFxufVxcblxcbi5ib3JkZXItY29sb3Itd2FybmluZy1jb2xvciB7XFxuICBib3JkZXItY29sb3I6ICNmZmJiMzM7XFxufVxcblxcbi5ib3JkZXItY29sb3Itd2FybmluZy1jb2xvci1kYXJrIHtcXG4gIGJvcmRlci1jb2xvcjogI2ZmODgwMDtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1kYW5nZXItY29sb3Ige1xcbiAgYm9yZGVyLWNvbG9yOiAjZmYzNTQ3O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWRhbmdlci1jb2xvci1kYXJrIHtcXG4gIGJvcmRlci1jb2xvcjogI2NjMDAwMDtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1lbGVnYW50LWNvbG9yIHtcXG4gIGJvcmRlci1jb2xvcjogIzJlMmUyZTtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1lbGVnYW50LWNvbG9yLWRhcmsge1xcbiAgYm9yZGVyLWNvbG9yOiAjMjEyMTIxO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXN0eWxpc2gtY29sb3Ige1xcbiAgYm9yZGVyLWNvbG9yOiAjNGI1MTVkO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXN0eWxpc2gtY29sb3ItZGFyayB7XFxuICBib3JkZXItY29sb3I6ICMzZTQ1NTE7XFxufVxcblxcbi5ib3JkZXItY29sb3ItdW5pcXVlLWNvbG9yIHtcXG4gIGJvcmRlci1jb2xvcjogIzNmNzI5YjtcXG59XFxuXFxuLmJvcmRlci1jb2xvci11bmlxdWUtY29sb3ItZGFyayB7XFxuICBib3JkZXItY29sb3I6ICMxYzIzMzE7XFxufVxcblxcbi5ib3JkZXItY29sb3Itc3BlY2lhbC1jb2xvciB7XFxuICBib3JkZXItY29sb3I6ICMzNzQ3NGY7XFxufVxcblxcbi5ib3JkZXItY29sb3Itc3BlY2lhbC1jb2xvci1kYXJrIHtcXG4gIGJvcmRlci1jb2xvcjogIzI2MzIzODtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1wcmltYXJ5IHtcXG4gIGJvcmRlci1jb2xvcjogIzQyODVmNDtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1kYW5nZXIge1xcbiAgYm9yZGVyLWNvbG9yOiAjZmYzNTQ3O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXdhcm5pbmcge1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZiYjMzO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXN1Y2Nlc3Mge1xcbiAgYm9yZGVyLWNvbG9yOiAjMDBjODUxO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWluZm8ge1xcbiAgYm9yZGVyLWNvbG9yOiAjMzNiNWU1O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWRlZmF1bHQge1xcbiAgYm9yZGVyLWNvbG9yOiAjMmJiYmFkO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXNlY29uZGFyeSB7XFxuICBib3JkZXItY29sb3I6ICNhYTY2Y2M7XFxufVxcblxcbi5ib3JkZXItY29sb3ItZGFyayB7XFxuICBib3JkZXItY29sb3I6ICMyMTIxMjE7XFxufVxcblxcbi5ib3JkZXItY29sb3ItbGlnaHQge1xcbiAgYm9yZGVyLWNvbG9yOiAjZTBlMGUwO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWdyZXkteCB7XFxuICBib3JkZXItY29sb3I6ICNmOWY5Zjk7XFxufVxcblxcbi5iZy1jb2xvci1yZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcXG59XFxuXFxuLmJnLWNvbG9yLXBpbmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5MWU2MztcXG59XFxuXFxuLmJnLWNvbG9yLXB1cnBsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWMyN2IwO1xcbn1cXG5cXG4uYmctY29sb3ItZGVlcC1wdXJwbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY3M2FiNztcXG59XFxuXFxuLmJnLWNvbG9yLWluZGlnbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xcbn1cXG5cXG4uYmctY29sb3ItYmx1ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xcbn1cXG5cXG4uYmctY29sb3ItbGlnaHQtYmx1ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNhOWY0O1xcbn1cXG5cXG4uYmctY29sb3ItY3lhbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiY2Q0O1xcbn1cXG5cXG4uYmctY29sb3ItdGVhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4O1xcbn1cXG5cXG4uYmctY29sb3ItZ3JlZW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcXG59XFxuXFxuLmJnLWNvbG9yLWxpZ2h0LWdyZWVuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YmMzNGE7XFxufVxcblxcbi5iZy1jb2xvci1saW1lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZGRjMzk7XFxufVxcblxcbi5iZy1jb2xvci15ZWxsb3cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWIzYjtcXG59XFxuXFxuLmJnLWNvbG9yLWFtYmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XFxufVxcblxcbi5iZy1jb2xvci1vcmFuZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTgwMDtcXG59XFxuXFxuLmJnLWNvbG9yLWRlZXAtb3JhbmdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjU3MjI7XFxufVxcblxcbi5iZy1jb2xvci1icm93biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk1NTQ4O1xcbn1cXG5cXG4uYmctY29sb3ItYmxhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG59XFxuXFxuLmJnLWNvbG9yLXdoaXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi5iZy1jb2xvci1ncmV5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZTllOWU7XFxufVxcblxcbi5iZy1jb2xvci1ibHVlLWdyZXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwN2Q4YjtcXG59XFxuXFxuLmJnLWNvbG9yLXByaW1hcnktY29sb3ItZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ0N2ExO1xcbn1cXG5cXG4uYmctY29sb3Itc2Vjb25kYXJ5LWNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYTY2Y2M7XFxufVxcblxcbi5iZy1jb2xvci1zZWNvbmRhcnktY29sb3ItZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTkzM2NjO1xcbn1cXG5cXG4uYmctY29sb3ItZGVmYXVsdC1jb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmJiYmFkO1xcbn1cXG5cXG4uYmctY29sb3ItZGVmYXVsdC1jb2xvci1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY5NWM7XFxufVxcblxcbi5iZy1jb2xvci1pbmZvLWNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzM2I1ZTU7XFxufVxcblxcbi5iZy1jb2xvci1pbmZvLWNvbG9yLWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTljYztcXG59XFxuXFxuLmJnLWNvbG9yLXN1Y2Nlc3MtY29sb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYzg1MTtcXG59XFxuXFxuLmJnLWNvbG9yLXN1Y2Nlc3MtY29sb3ItZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3ZTMzO1xcbn1cXG5cXG4uYmctY29sb3Itd2FybmluZy1jb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiYjMzO1xcbn1cXG5cXG4uYmctY29sb3Itd2FybmluZy1jb2xvci1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjg4MDA7XFxufVxcblxcbi5iZy1jb2xvci1kYW5nZXItY29sb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzU0NztcXG59XFxuXFxuLmJnLWNvbG9yLWRhbmdlci1jb2xvci1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYzAwMDA7XFxufVxcblxcbi5iZy1jb2xvci1lbGVnYW50LWNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTJlMmU7XFxufVxcblxcbi5iZy1jb2xvci1lbGVnYW50LWNvbG9yLWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcXG59XFxuXFxuLmJnLWNvbG9yLXN0eWxpc2gtY29sb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiNTE1ZDtcXG59XFxuXFxuLmJnLWNvbG9yLXN0eWxpc2gtY29sb3ItZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U0NTUxO1xcbn1cXG5cXG4uYmctY29sb3ItdW5pcXVlLWNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjcyOWI7XFxufVxcblxcbi5iZy1jb2xvci11bmlxdWUtY29sb3ItZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMyMzMxO1xcbn1cXG5cXG4uYmctY29sb3Itc3BlY2lhbC1jb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc0NzRmO1xcbn1cXG5cXG4uYmctY29sb3Itc3BlY2lhbC1jb2xvci1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjMyMzg7XFxufVxcblxcbi5iZy1jb2xvci1wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Mjg1ZjQ7XFxufVxcblxcbi5iZy1jb2xvci1kYW5nZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzU0NztcXG59XFxuXFxuLmJnLWNvbG9yLXdhcm5pbmcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmIzMztcXG59XFxuXFxuLmJnLWNvbG9yLXN1Y2Nlc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYzg1MTtcXG59XFxuXFxuLmJnLWNvbG9yLWluZm8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzYjVlNTtcXG59XFxuXFxuLmJnLWNvbG9yLWRlZmF1bHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiYmJhZDtcXG59XFxuXFxuLmJnLWNvbG9yLXNlY29uZGFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWE2NmNjO1xcbn1cXG5cXG4uYmctY29sb3ItZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xcbn1cXG5cXG4uYmctY29sb3ItbGlnaHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG59XFxuXFxuLmJnLWNvbG9yLWdyZXkteCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xcbn1cXG5cXG4udy0yNSB7XFxuICB3aWR0aDogMjU7XFxufVxcblxcbi53LTUwIHtcXG4gIHdpZHRoOiA1MDtcXG59XFxuXFxuLnctNTUge1xcbiAgd2lkdGg6IDU1O1xcbn1cXG5cXG4udy02MCB7XFxuICB3aWR0aDogNjA7XFxufVxcblxcbi53LTY1IHtcXG4gIHdpZHRoOiA2NTtcXG59XFxuXFxuLnctNzAge1xcbiAgd2lkdGg6IDcwO1xcbn1cXG5cXG4udy03NSB7XFxuICB3aWR0aDogNzU7XFxufVxcblxcbi53LTgwIHtcXG4gIHdpZHRoOiA4MDtcXG59XFxuXFxuLnctODUge1xcbiAgd2lkdGg6IDg1O1xcbn1cXG5cXG4udy05MCB7XFxuICB3aWR0aDogOTA7XFxufVxcblxcbi53LTk1IHtcXG4gIHdpZHRoOiA5NTtcXG59XFxuXFxuLnctMTAwIHtcXG4gIHdpZHRoOiAxMDA7XFxufVxcblxcbi50ZXh0LXhzIHtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG59XFxuXFxuLnRleHQtc20ge1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG59XFxuXFxuLnRleHQtYmFzZSB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50ZXh0LWxnIHtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxufVxcblxcbi50ZXh0LXhsIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuLnRleHQtMnhsIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udGV4dC0zeGwge1xcbiAgZm9udC1zaXplOiAxLjg3NXJlbTtcXG59XFxuXFxuLnRleHQtNHhsIHtcXG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcXG59XFxuXFxuLnRleHQtNXhsIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLnRleHQtNnhsIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuYm9keS5uZW8tc2Nyb2xsIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmlucHV0OmZvY3VzLCBzZWxlY3Q6Zm9jdXMsIHRleHRhcmVhOmZvY3VzLCBvcHRpb246Zm9jdXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYWFhYTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbjpyb290IHtcXG4gIC0tYW5pbWF0ZS1kdXJhdGlvbjogMXM7XFxuICAtLWFuaW1hdGUtZGVsYXk6IDFzO1xcbiAgLS1hbmltYXRlLWxvb3A6IDE7XFxufVxcblxcbi5hbmltYXRlZCB7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG59XFxuLmFuaW1hdGVkLmluZmluaXRlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG59XFxuLmFuaW1hdGVkLmZhc3RlciB7XFxuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGMoJC0tYW5pbWF0ZS1kdXJhdGlvbiAvIDIpO1xcbn1cXG4uYW5pbWF0ZWQuZmFzdCB7XFxuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGMoJC0tYW5pbWF0ZS1kdXJhdGlvbiAqIDAuOCk7XFxufVxcbi5hbmltYXRlZC5zbG93IHtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYygkLS1hbmltYXRlLWR1cmF0aW9uICogMik7XFxufVxcbi5hbmltYXRlZC5zbG93ZXIge1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKCQtLWFuaW1hdGUtZHVyYXRpb24gKiAzKTtcXG59XFxuLmFuaW1hdGVkLmxvb3AtMSB7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbn1cXG4uYW5pbWF0ZWQuZGVsYXktMXMge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKCQtLWFuaW1hdGUtZGVsYXkgKiAkaSk7XFxufVxcbi5hbmltYXRlZC5sb29wLTIge1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMjtcXG59XFxuLmFuaW1hdGVkLmRlbGF5LTFzIHtcXG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYygkLS1hbmltYXRlLWRlbGF5ICogJGkpO1xcbn1cXG4uYW5pbWF0ZWQubG9vcC0zIHtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDM7XFxufVxcbi5hbmltYXRlZC5kZWxheS0xcyB7XFxuICBhbmltYXRpb24tZGVsYXk6IGNhbGMoJC0tYW5pbWF0ZS1kZWxheSAqICRpKTtcXG59XFxuLmFuaW1hdGVkLmxvb3AtNCB7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiA0O1xcbn1cXG4uYW5pbWF0ZWQuZGVsYXktMXMge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKCQtLWFuaW1hdGUtZGVsYXkgKiAkaSk7XFxufVxcblxcbkBtZWRpYSBwcmludCwgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgLmFuaW1hdGVkIHtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxbXMgIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMW1zICFpbXBvcnRhbnQ7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC5hbmltYXRlZFtjbGFzcyo9T3V0XSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbi5hbmltYXRlZC1pbml0aWFsIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBpbml0aWFsICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIG9yaWdpbmFsbHkgYXV0aG9yZWQgYnkgTmljayBQZXR0aXQgLSBodHRwczovL2dpdGh1Yi5jb20vbmlja3BldHRpdC9nbGlkZSAqL1xcbkBrZXlmcmFtZXMgcHVsc2Uge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjA1LCAxLjA1LCAxLjA1KTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcbn1cXG4ucHVsc2Uge1xcbiAgYW5pbWF0aW9uLW5hbWU6IHB1bHNlO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxufVxcblxcbkBrZXlmcmFtZXMgdGFkYSB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcbiAgMTAlLCAyMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC45LCAwLjksIDAuOSkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xcbiAgfVxcbiAgMzAlLCA1MCUsIDcwJSwgOTAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpIHJvdGF0ZTNkKDAsIDAsIDEsIDNkZWcpO1xcbiAgfVxcbiAgNDAlLCA2MCUsIDgwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKSByb3RhdGUzZCgwLCAwLCAxLCAtM2RlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG59XFxuLnRhZGEge1xcbiAgYW5pbWF0aW9uLW5hbWU6IHRhZGE7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG4uZmFkZUluIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluTGVmdCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbi5mYWRlSW5MZWZ0IHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5MZWZ0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJblJpZ2h0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG4uZmFkZUluUmlnaHQge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblJpZ2h0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG4uZmFkZUluVXAge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblVwO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZU91dCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAyMDBkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG4ucm90YXRlT3V0IHtcXG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGVPdXQ7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxufVxcblxcbi5yb3RhdGUtY2lyY2xlIHtcXG4gIGFuaW1hdGlvbjogcm90YXRlQ2lyY2xlIDlzIGluZmluaXRlO1xcbn1cXG5cXG4vKlxcbiBDdXN0b20gQW5pbWF0aW9uc1xcbiAqL1xcbkBrZXlmcmFtZXMgcm90YXRlQ2lyY2xlIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAyNSUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGphY2tJblRoZUJveCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjEpIHJvdGF0ZSgzMGRlZyk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xcbiAgfVxcbiAgNzAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxufVxcbi5qYWNrSW5UaGVCb3gge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGphY2tJblRoZUJveDtcXG59XFxuXFxuLyogb3JpZ2luYWxseSBhdXRob3JlZCBieSBOaWNrIFBldHRpdCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWNrcGV0dGl0L2dsaWRlICovXFxuQGtleWZyYW1lcyByb2xsSW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC0xMjBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG4ucm9sbEluIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiByb2xsSW47XFxufVxcblxcbkBrZXlmcmFtZXMgem9vbUluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XFxuICB9XFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG4uem9vbUluIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tSW47XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVJbkRvd24ge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG4uc2xpZGVJbkRvd24ge1xcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5Eb3duO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZsb2F0IHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNsYXRlWSgwcHgpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zbGF0ZVkoLTZweCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNsYXRlWSgwcHgpO1xcbiAgfVxcbn1cXG4ucHVycGxlLWdyYWRpZW50IHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjZmY2ZWM0LCAjNzg3M2Y1KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDBkZWcsICNmZjZlYzQsICM3ODczZjUpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDBkZWcsICNmZjZlYzQsICM3ODczZjUpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjZmY2ZWM0LCAjNzg3M2Y1KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjZmY2ZWM0LCAjNzg3M2Y1KSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucGVhY2gtZ3JhZGllbnQge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDBkZWcsICNmZmQ4NmYsICNmYzYyNjIpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0MGRlZywgI2ZmZDg2ZiwgI2ZjNjI2MikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0MGRlZywgI2ZmZDg2ZiwgI2ZjNjI2MikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoNDBkZWcsICNmZmQ4NmYsICNmYzYyNjIpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsICNmZmQ4NmYsICNmYzYyNjIpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5hcXVhLWdyYWRpZW50IHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjMjA5NmZmLCAjMDVmZmEzKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDBkZWcsICMyMDk2ZmYsICMwNWZmYTMpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDBkZWcsICMyMDk2ZmYsICMwNWZmYTMpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjMjA5NmZmLCAjMDVmZmEzKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjMjA5NmZmLCAjMDVmZmEzKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYmx1ZS1ncmFkaWVudCB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0MGRlZywgIzQ1Y2FmYywgIzMwM2Y5ZikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjNDVjYWZjLCAjMzAzZjlmKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjNDVjYWZjLCAjMzAzZjlmKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCg0MGRlZywgIzQ1Y2FmYywgIzMwM2Y5ZikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MGRlZywgIzQ1Y2FmYywgIzMwM2Y5ZikgIWltcG9ydGFudDtcXG59XFxuXFxuLmhvbWUtcGFnZS1ncmFkaWVudCB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0MGRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCg0MGRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MGRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG59XFxuXFxuLnB1cnBsZS1ncmFkaWVudC1yZ2JhIHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDI1NSwgMTEwLCAxOTYsIDAuOSksIHJnYmEoMTIwLCAxMTUsIDI0NSwgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDI1NSwgMTEwLCAxOTYsIDAuOSksIHJnYmEoMTIwLCAxMTUsIDI0NSwgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSgyNTUsIDExMCwgMTk2LCAwLjkpLCByZ2JhKDEyMCwgMTE1LCAyNDUsIDAuOSkpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDI1NSwgMTEwLCAxOTYsIDAuOSksIHJnYmEoMTIwLCAxMTUsIDI0NSwgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSgyNTUsIDExMCwgMTk2LCAwLjkpLCByZ2JhKDEyMCwgMTE1LCAyNDUsIDAuOSkpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wZWFjaC1ncmFkaWVudC1yZ2JhIHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDI1NSwgMjE2LCAxMTEsIDAuOSksIHJnYmEoMjUyLCA5OCwgOTgsIDAuOSkpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSgyNTUsIDIxNiwgMTExLCAwLjkpLCByZ2JhKDI1MiwgOTgsIDk4LCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDI1NSwgMjE2LCAxMTEsIDAuOSksIHJnYmEoMjUyLCA5OCwgOTgsIDAuOSkpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDI1NSwgMjE2LCAxMTEsIDAuOSksIHJnYmEoMjUyLCA5OCwgOTgsIDAuOSkpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMjU1LCAyMTYsIDExMSwgMC45KSwgcmdiYSgyNTIsIDk4LCA5OCwgMC45KSkgIWltcG9ydGFudDtcXG59XFxuXFxuLmFxdWEtZ3JhZGllbnQtcmdiYSB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSgzMiwgMTUwLCAyNTUsIDAuOSksIHJnYmEoNSwgMjU1LCAxNjMsIDAuOSkpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSgzMiwgMTUwLCAyNTUsIDAuOSksIHJnYmEoNSwgMjU1LCAxNjMsIDAuOSkpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMzIsIDE1MCwgMjU1LCAwLjkpLCByZ2JhKDUsIDI1NSwgMTYzLCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSgzMiwgMTUwLCAyNTUsIDAuOSksIHJnYmEoNSwgMjU1LCAxNjMsIDAuOSkpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMzIsIDE1MCwgMjU1LCAwLjkpLCByZ2JhKDUsIDI1NSwgMTYzLCAwLjkpKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYmx1ZS1ncmFkaWVudC1yZ2JhIHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDY5LCAyMDIsIDI1MiwgMC45KSwgcmdiYSg0OCwgNjMsIDE1OSwgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDY5LCAyMDIsIDI1MiwgMC45KSwgcmdiYSg0OCwgNjMsIDE1OSwgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSg2OSwgMjAyLCAyNTIsIDAuOSksIHJnYmEoNDgsIDYzLCAxNTksIDAuOSkpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDY5LCAyMDIsIDI1MiwgMC45KSwgcmdiYSg0OCwgNjMsIDE1OSwgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSg2OSwgMjAyLCAyNTIsIDAuOSksIHJnYmEoNDgsIDYzLCAxNTksIDAuOSkpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5iZy1ncmFkaWVudC1wdXJwbGUge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjZmY2ZWM0LCAjNzg3M2Y1KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjZmY2ZWM0LCAjNzg3M2Y1KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgI2ZmNmVjNCwgIzc4NzNmNSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjZmY2ZWM0LCAjNzg3M2Y1KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgI2ZmNmVjNCwgIzc4NzNmNSkgIWltcG9ydGFudDtcXG59XFxuXFxuLmJnLWdyYWRpZW50LXBlYWNoIHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgI2ZmZDg2ZiwgI2ZjNjI2MikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgI2ZmZDg2ZiwgI2ZjNjI2MikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICNmZmQ4NmYsICNmYzYyNjIpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgI2ZmZDg2ZiwgI2ZjNjI2MikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICNmZmQ4NmYsICNmYzYyNjIpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5iZy1ncmFkaWVudC1hcXVhIHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgIzIwOTZmZiwgIzA1ZmZhMykgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgIzIwOTZmZiwgIzA1ZmZhMykgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICMyMDk2ZmYsICMwNWZmYTMpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgIzIwOTZmZiwgIzA1ZmZhMykgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICMyMDk2ZmYsICMwNWZmYTMpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5iZy1ncmFkaWVudC1ibHVlIHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgIzQ1Y2FmYywgIzMwM2Y5ZikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgIzQ1Y2FmYywgIzMwM2Y5ZikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICM0NWNhZmMsICMzMDNmOWYpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgIzQ1Y2FmYywgIzMwM2Y5ZikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICM0NWNhZmMsICMzMDNmOWYpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5iZy1ncmFkaWVudC1ob21lLXBhZ2Uge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhFUk8gSWNvbnNcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L0ljb25Gb250L3dlYmZvbnQuZW90P3Y9MS40LjU3XFxcIik7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvSWNvbkZvbnQvd2ViZm9udC5lb3Q/I2llZml4JnY9MS40LjU3XFxcIikgZm9ybWF0KFxcXCJlbWJlZGRlZC1vcGVudHlwZVxcXCIpLCB1cmwoXFxcIi9mb250L0ljb25Gb250L3dlYmZvbnQud29mZjI/dj0xLjQuNTdcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcXFwiL2ZvbnQvSWNvbkZvbnQvd2ViZm9udC53b2ZmP3Y9MS40LjU3XFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIiksIHVybChcXFwiL2ZvbnQvSWNvbkZvbnQvd2ViZm9udC50dGY/dj0xLjQuNTdcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIiksIHVybChcXFwiL2ZvbnQvSWNvbkZvbnQvd2ViZm9udC5zdmc/dj0xLjQuNTdcXFwiKSBmb3JtYXQoXFxcInN2Z1xcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuaS5oZXJvLWljb24ge1xcbiAgY29sb3I6ICM2MDdEOEI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IHVuc2V0O1xcbiAgbGluZS1oZWlnaHQ6IHVuc2V0O1xcbn1cXG5pLmhlcm8taWNvbjpiZWZvcmUge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMjRweC8xIFxcXCJIRVJPIEljb25zXFxcIjtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYWNjb3VudC1ncm91cC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEI1OFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYWNjb3VudC1zZWFyY2gtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5MzVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWFjY291bnQtdGllLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMENBXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1haXJwb3J0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDg0QlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYXJyb3ctZG93bi1ib2xkLWJveC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDczMFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYXJyb3ctdXAtYm9sZC1ib3gtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3MzlcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWFycm93LXVwLWJveDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2QzNcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWF1dG8tZml4OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDA2OFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYXV0by11cGxvYWQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDY5XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1iYWxsb3QtcmVjb3VudC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEMzQVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2FsbC1tYWRlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDBGN1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2FyZC1hY2NvdW50LW1haWwtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFOThcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNhcnQtcGx1czo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxMTJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNlbGxwaG9uZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxMUNcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNlbGxwaG9uZS1jb2c6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOTUxXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jZWxscGhvbmUtbWVzc2FnZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4RDNcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNlbGxwaG9uZS1uZmM6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTkwXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jZXJ0aWZpY2F0ZS1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTE4OFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2hlY2stY2lyY2xlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDVFMFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2hlY2stY2lyY2xlLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNUUxXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jbGlwcHk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTRGXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jbG91ZC1kb3dubG9hZC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEI3RFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY3JlYXRpb246OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjc0XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbWFpbC1lZGl0LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRUU0XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNjhcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWFuZ3J5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM2OVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tYW5ncnktb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNkFcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWNvbmZ1c2VkOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTBERVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tY29uZnVzZWQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwREZcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWNvb2w6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzZCXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1jb29sLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMUYzXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1jcnk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzZDXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1jcnktb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNkRcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWRlYWQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzZFXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1kZWFkLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjlCXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1kZXZpbDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNkZcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWRldmlsLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMUY0XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1leGNpdGVkOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM3MFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tZXhjaXRlZC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDY5Q1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tZnJvd246OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjRDXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1mcm93bi1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEY0RFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24taGFwcHk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzcxXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1oYXBweS1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDFGNVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24ta2lzczo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNzJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWtpc3Mtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNzNcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWxvbDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyMTRcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWxvbC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTIxNVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tbmV1dHJhbDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNzRcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLW5ldXRyYWwtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxRjZcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMUYyXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1wb29wOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDFGN1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tcG9vcC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM3NVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tc2FkOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM3NlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tc2FkLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMUY4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi10b25ndWU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMUY5XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi10b25ndWUtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNzdcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLXdpbms6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzc4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi13aW5rLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzc5XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1maWxlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDIxNFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZmlsZS1jbG91ZC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTAyQVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZm9ybS1zZWxlY3Q6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDAxXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1mb3JtYXQtbGlzdC10ZXh0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTI2RlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZ29vZ2xlLWFkczo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDODdcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWhhbmQtb2theTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBNTBcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWhhbmQtcG9pbnRpbmctcmlnaHQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMkM3XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1oZWFkc2V0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDJDRVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8taGVhcnQtbXVsdGlwbGUtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBNTdcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWhvbWUtbWFwLW1hcmtlcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1RjhcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWh1bWFuLW1hbGUtY2hpbGQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzhDXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1sYXB0b3A6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzIyXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1sYXllcnMtc2VhcmNoLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjA3XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1tZXNzYWdlLWNvZy1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTE3MlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbWVzc2FnZS10ZXh0LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzZBXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1tb3VzZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzN0RcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLW1vdXNlLWJsdWV0b290aDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5OEJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLW1vdXNlLW9mZjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzN0VcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLW1vdXNlLXZhcmlhbnQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzdGXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1tb3VzZS12YXJpYW50LW9mZjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzODBcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLW5ld3NwYXBlci12YXJpYW50LW11bHRpcGxlLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDAzXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1uZXdzcGFwZXItdmFyaWFudC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTAwNFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tcGhvbmUtaW4tdGFsay1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTE4MlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tcGx1cy1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDcwNVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tcmVzcG9uc2l2ZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0NUVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXNlbGVjdDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0ODVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXNlbGVjdGlvbi1zZWFyY2g6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjA1XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1zZW5kOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDQ4QVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tc2VuZC1jaGVjay1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTE2MlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tc2VuZC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTE2NVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tc2hhcmUtYWxsLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMUY1XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1zdGFyLWJveC1tdWx0aXBsZS1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTI4N1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tc3RpY2tlci1lbW9qaTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3ODVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXRhYmxldC1pcGFkOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDRGOFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tdGVsZXZpc2lvbi1jbGVhbjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExMTBcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXVwZGF0ZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2QjBcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXpvZGlhYy10YXVydXM6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTg3XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby16b2RpYWMtdmlyZ286OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTg4XFxcIjtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsImltcG9ydCBUWVBFIGZyb20gXCIuL3R5cGVcIlxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR0ZXJVc2VyKCB1c2VyICl7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VyICwgXCIgc2V0IHVzZXIgXCIpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBUWVBFLlNFVFRFUl9VU0VSLFxyXG4gICAgICAgIHBheWxvYWQgOiB7IC4uLnVzZXIsIGZldGNoZWQ6IHRydWUgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0dGVyQ29udmVyc2F0aW9uKCBjb252ICl7XHJcbiAgICBjb25zb2xlLmxvZyhjb252ICwgXCIgc2V0IGNvbnYgXCIpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBUWVBFLlNFVFRFUl9DT05WRVJTQVRJT04sXHJcbiAgICAgICAgcGF5bG9hZCA6IGNvbnZcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldHRlckNvbnZlcnNhdGlvbkJhY2t1cCggY29udiApe1xyXG4gICAgY29uc29sZS5sb2coY29udiAsIFwiIHNldCBjb252IGJhY2t1cCBcIilcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6IFRZUEUuU0VUVEVSX0NPTlZFUlNBVElPTl9CQUNLVVAsXHJcbiAgICAgICAgcGF5bG9hZCA6IGNvbnZcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUNoYW5uZWxBY3RpdmUoIGlkICl7XHJcbiAgICBjb25zb2xlLmxvZyhpZCAsIFwiIGNoYW5nZUNoYW5uZWxBY3RpdmUgXCIpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBUWVBFLkNIQU5ORUxfU0VUX0FDVElWRSxcclxuICAgICAgICBwYXlsb2FkIDogaWRcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWFkQWxsQ01lc3NhZ2UoICl7XHJcbiAgICBjb25zb2xlLmxvZyggXCIgcmVhZEFsbENNZXNzYWdlIFwiKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlIDogVFlQRS5DSEFOTkVMX1JFQURfTUVTU0FHRSxcclxuICAgICAgICBwYXlsb2FkIDogbnVsbFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyU29ydENvbnZlcnNhdGlvbiggb2JqZWN0SWRzQW5kRGF0YUJhY2t1cCApe1xyXG4gICAgY29uc29sZS5sb2coIFwiIGZpbHRlclNvcnRDb252ZXJzYXRpb24gXCIpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBUWVBFLkZJTFRFUl9TT1JUX0NPTlYsXHJcbiAgICAgICAgcGF5bG9hZCA6IG9iamVjdElkc0FuZERhdGFCYWNrdXBcclxuICAgIH1cclxufVxyXG5cclxuIiwiY29uc3QgVFlQRSA9ICB7XHJcbiAgXHJcbiAgQ0hBTk5FTF9TRVRfQUNUSVZFICAgICAgICA6IFwiQ0hBTk5FTF9TRVRfQUNUSVZFXCIsXHJcbiAgU0VUVEVSX1VTRVIgICAgICAgICAgICAgICA6IFwiU0VUVEVSX1VTRVJcIixcclxuICBDSEFOTkVMX1JFQURfTUVTU0FHRSAgICAgIDogXCJDSEFOTkVMX1JFQURfTUVTU0FHRVwiLFxyXG4gIFNFVFRFUl9DT05WRVJTQVRJT04gICAgICAgOiBcIlNFVFRFUl9DT05WRVJTQVRJT05cIixcclxuICBGSUxURVJfU09SVF9DT05WICAgICAgICAgIDogXCJGSUxURVJfU09SVF9DT05WXCIsXHJcbiAgU0VUVEVSX0NPTlZFUlNBVElPTl9CQUNLVVA6IFwiU0VUVEVSX0NPTlZFUlNBVElPTl9CQUNLVVBcIlxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFRZUEU7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBDaGF0IGZyb20gJy4vQ2hhdC9pbmRleC5qc3gnXHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkcmF3IGFwcFwiKVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwQ29tcG9uZW50XCIgaWQ9XCJBcHBsaWNhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPENoYXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IFwiLi4vLi4vc2Nzcy9jaGF0L2hlYWQtaW5mby5zY3NzXCJcclxuaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vLi4vY29uZmlnXCJcclxuY2xhc3MgSGVhZEluZm8gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuXHRyZW5kZXIoKSB7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCJyZW5kZXIgaGVhZCBjaGF0XCIpXHJcblx0XHR2YXIgeyBjb252ZXJzYXRpb25zIH0gPSB0aGlzLnByb3BzXHJcblx0XHR2YXIgY2hhbm5lbEFjdGl2ZSA9IGNvbnZlcnNhdGlvbnMuZmluZChjaGFubmVsID0+IGNoYW5uZWwuaXNBY3RpdmUpXHJcblxyXG5cdFx0aWYgKCFjaGFubmVsQWN0aXZlKSB7XHJcblx0XHRcdHJldHVybiBudWxsXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtaGVhZC1pbmZvXCI+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidXNlci1hY3RpdmUtY2hhdFwiPlxyXG5cdFx0XHRcdFx0PGZpZ3VyZSBjbGFzc05hbWU9XCJzdGF0ZS1hdmF0YXIgYWN0aXZlLW9ubGluZVwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz17Q09ORklHLlNFUlZFUl9QSFAuVVJMICsgY2hhbm5lbEFjdGl2ZS51c2VyLmF2YXRhcn0gYWx0PVwiXCIgLz5cclxuXHRcdFx0XHRcdDwvZmlndXJlPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWluZm9cIj5cclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPntjaGFubmVsQWN0aXZlLnVzZXIuZmlyc3RfbmFtZSArIFwiIFwiICtjaGFubmVsQWN0aXZlLnVzZXIubGFzdF9uYW1lfTwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRJbmZvIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBIZWFkSW5mbyBmcm9tIFwiLi9IZWFkSW5mby5qc3hcIlxyXG5pbXBvcnQgTWVzc2FnZUNoYXQgZnJvbSBcIi4vTWVzc2FnZUNoYXQuanN4XCJcclxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiXHJcbmltcG9ydCBcIi4uLy4uL3Njc3MvY2hhdC9saXN0LW1lc3NhZ2Uuc2Nzc1wiXHJcbmltcG9ydCB7IGxpc3RlblNjcm9sbE1lc3NhZ2UgfSBmcm9tIFwiLi4vLi4vbGlicmFyeS9zZXJ2aWNlLmpzXCJcclxuXHJcbmNsYXNzIExpc3RNZXNzYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgXHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG5cclxuICAgICAgICB2YXIgeyBjb252ZXJzYXRpb25zIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgdmFyIGNoYW5uZWxBY3RpdmVDaGF0ID0gY29udmVyc2F0aW9ucy5maW5kKGNoYW5uZWwgPT4gY2hhbm5lbC5pc0FjdGl2ZSlcclxuXHJcbiAgICAgICAgdmFyIG1lc3NhZ2VzID0gY2hhbm5lbEFjdGl2ZUNoYXQgJiYgY2hhbm5lbEFjdGl2ZUNoYXQubWVzc2FnZVxyXG5cclxuICAgICAgICB2YXIgbHN0TWVzc2FnZSAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXNjcm9sbC10by1ib3R0b20nKVxyXG4gICAgICAgIGlmKGxzdE1lc3NhZ2Upe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJCgnI2pzLXNjcm9sbC10by1ib3R0b20nKS5vbignc2Nyb2xsJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGxpc3RlblNjcm9sbE1lc3NhZ2UodGhpcywgbWVzc2FnZXMsIGNoYW5uZWxBY3RpdmVDaGF0KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICB2YXIgeyBjb252ZXJzYXRpb25zLCBhdXRoIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgdmFyIGNoYW5uZWxBY3RpdmVDaGF0ID0gY29udmVyc2F0aW9ucy5maW5kKGNoYW5uZWwgPT4gY2hhbm5lbC5pc0FjdGl2ZSk7XHJcblxyXG4gICAgICAgIHZhciBtZXNzYWdlcyA9IGNoYW5uZWxBY3RpdmVDaGF0ICYmIGNoYW5uZWxBY3RpdmVDaGF0Lm1lc3NhZ2U7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LWxpc3QtbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRJbmZvIGNvbnZlcnNhdGlvbnM9eyBjb252ZXJzYXRpb25zIH0gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlci1saXN0LW1lc3NhZ2VcIiBpZD1cImpzLXNjcm9sbC10by1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZXMgJiYgbWVzc2FnZXMubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAobWVzc2FnZSwga2V5KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VDaGF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtcIm1lc3NhZ2UtY2hhdFwiICsga2V5ICsgY2hhbm5lbEFjdGl2ZUNoYXQuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aD17YXV0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXttZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5uZWxBY3RpdmVDaGF0PXtjaGFubmVsQWN0aXZlQ2hhdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IExpc3RNZXNzYWdlXHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgXCIuLi8uLi9zY3NzL2NoYXQvbGlzdC11c2VyLnNjc3NcIlxyXG5pbXBvcnQgVXNlckNoYXQgZnJvbSBcIi4vVXNlckNoYXQuanN4XCJcclxuXHJcbmNsYXNzIExpc3RVc2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgLy8vIHVzZXJDaGF0IMSRxrDhu6NjIHBhc3MgdOG7qyBjaGEgdsOgb1xyXG4gICAgICAgIHZhciB7IGNvbnZlcnNhdGlvbnMgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBjb25zb2xlLmxvZyhjb252ZXJzYXRpb25zKVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1saXN0LXVzZXJcIj5cclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgY29udmVyc2F0aW9ucyAmJiBcclxuICAgICAgICAgICAgICAgICAgICBjb252ZXJzYXRpb25zLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbCA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VyQ2hhdCBrZXk9e2NoYW5uZWwuaWR9IGNoYW5uZWw9e2NoYW5uZWx9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdFVzZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgJy4uLy4uL3Njc3MvY2hhdC9tZXNzYWdlLWNoYXQuc2NzcydcclxuaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vLi4vY29uZmlnXCJcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcblxyXG5jbGFzcyBNZXNzYWdlQ2hhdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHZhciB7IGF1dGgsIG1lc3NhZ2UsIGNoYW5uZWxBY3RpdmVDaGF0IH0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgICAgIHZhciBteWluZm8gPSB7IGF2YXRhciA6ICcnLCBuYW1lOiAnJyB9XHJcbiAgICAgICAgaWYoIGF1dGggJiYgYXV0aC5pZCApe1xyXG4gICAgICAgICAgICBteWluZm8uYXZhdGFyID0gYXV0aC5hdmF0YXJcclxuICAgICAgICAgICAgbXlpbmZvLm5hbWUgICA9IGF1dGguZmlyc3RfbmFtZSArIFwiIFwiICsgYXV0aC5sYXN0X25hbWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghY2hhbm5lbEFjdGl2ZUNoYXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHVzZXJJbmZvID0gY2hhbm5lbEFjdGl2ZUNoYXQudXNlclxyXG5cclxuICAgICAgICBpZiAoIW1lc3NhZ2UudHlwZSkge1xyXG4gICAgICAgICAgICB2YXIgdHlwZU1lc3NhZ2UgPSAnbGVmdC1tZXNzYWdlICc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHR5cGVNZXNzYWdlID0gJ3JpZ2h0LW1lc3NhZ2UgYnktbWUgJztcclxuICAgICAgICAgICAgdXNlckluZm8gPSBteWluZm87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB7IHN0eWxlIH0gPSBtZXNzYWdlXHJcblxyXG4gICAgICAgIHZhciBUSU1FX0RJRV9GSUxFID0gMjQgKiA2MCAqIDYwICogMTAwMFxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICB2YXIgdGltZSA9IG5ldyBEYXRlKG1lc3NhZ2UuY3JlYXRlZEF0KVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1tZXNzYWdlLWNoYXRcIiA+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R5cGVNZXNzYWdlICsgXCJjaGF0LWdyb3VwXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtDT05GSUcuU0VSVkVSX1BIUC5VUkwgKyB1c2VySW5mby5hdmF0YXJ9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgPT0gXCJJTUFHRVwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGV9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuYXR0YWNobWVudC5tYXAoKCBhdHRhY2hFbGVtZW50ICwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBhdHRhY2hFbGVtZW50LnR5cGUgPT0gJ2ltZycgKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGF0dGFjaEVsZW1lbnQudGltZSAmJiBhdHRhY2hFbGVtZW50LnRpbWUgLSBUSU1FX0RJRV9GSUxFIDwgKG5ldyBEYXRlKS5nZXRUaW1lKCkgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtcIndyYXBwZXItYXR0YWNobWVudFwiICsgaW5kZXggKyBhdHRhY2hFbGVtZW50LnVybCB9IGNsYXNzTmFtZT1cIndyYXBwZXItYXR0YWNobWVudFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Q09ORklHLlNFUlZFUl9QSFAuVVJMICsgYXR0YWNoRWxlbWVudC51cmwgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRvd25sb2FkLWZpbGUtYXR0YWNobWVudFwiIGhyZWY9eyBDT05GSUcuU0VSVkVSX1BIUC5VUkwgKyBhdHRhY2hFbGVtZW50LnVybCB9IHRhcmdldD1cIl9ibGFua1wiIGRvd25sb2FkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJoZXJvLWljb24gaGVyby1jbG91ZC1kb3dubG9hZC1vdXRsaW5lXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17XCJ3cmFwcGVyLWF0dGFjaG1lbnRcIiArIGluZGV4ICsgQ09ORklHLlNFUlZFUl9QSFAuVVJMICsgXCIvaW1hZ2UvZm9sZGVyLmpwZ1wiIH0gY2xhc3NOYW1lPVwid3JhcHBlci1hdHRhY2htZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsgQ09ORklHLlNFUlZFUl9QSFAuVVJMICsgXCIvaW1hZ2UvZm9sZGVyLmpwZ1wiIH0gLz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZG93bmxvYWQtZmlsZS1hdHRhY2htZW50XCIgaHJlZj17IENPTkZJRy5TRVJWRVJfUEhQLlVSTCArIGF0dGFjaEVsZW1lbnQudXJsIH0gdGFyZ2V0PVwiX2JsYW5rXCIgZG93bmxvYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJoZXJvLWljb24gaGVyby1jbG91ZC1kb3dubG9hZC1vdXRsaW5lXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlICsgXCIgdGV4dFwifSA+e21lc3NhZ2UuY29udGVudH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5jcmVhdGVkQXQgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZSArIFwiIHRpbWUtbGFiZWxcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZS5nZXRGdWxsWWVhcigpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIFwiLVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArICh0aW1lLmdldE1vbnRoKCkgKyAxKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBcIi1cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyB0aW1lLmdldERhdGUoKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBcIiBcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyB0aW1lLmdldEhvdXJzKCkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgXCI6XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgdGltZS5nZXRNaW51dGVzKCkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgXCI6XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgdGltZS5nZXRTZWNvbmRzKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFtZXNzYWdlLnR5cGUgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhbWVzc2FnZS5yZWFkQWRtaW4gPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdoZXJvLWljb24gaGVyby1jaGVjay1jaXJjbGUtb3V0bGluZSc+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2hlcm8taWNvbiBoZXJvLWNoZWNrLWNpcmNsZSc+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VDaGF0IiwiXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCAnLi4vLi4vc2Nzcy9jaGF0L3NlYXJjaC5zY3NzJ1xyXG5pbXBvcnQgeyBmaWx0ZXJTb3J0Q29udmVyc2F0aW9uLCBzZXR0ZXJDb252ZXJzYXRpb24gfSBmcm9tIFwiLi4vLi4vYWN0aW9uXCJcclxuXHJcblxyXG5jbGFzcyBTZWFyY2ggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgXHJcbiAgICBzZWFyY2hVc2VyID0gKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInNlYXJjaFVzZXJcIilcclxuICAgICAgICB2YXIgYmFja3VwRGF0YSA9IFsgLi4uIHRoaXMucHJvcHMuY29udmVyc2F0aW9uQmFja3VwIF0sXHJcbiAgICAgICAgICAgIGxpc3ROYW1lICAgPSBbXSxcclxuICAgICAgICAgICAgdGV4dCAgICAgICA9IHRoaXMuc2VhcmNoLnZhbHVlLFxyXG4gICAgICAgICAgICBvdXRwdXQgICAgID0gdGV4dC5zcGxpdCgnJylcclxuXHJcbiAgICAgICAgaWYoICF0ZXh0IHx8ICF0ZXh0LnRyaW0oKSApe1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzZXR0ZXJDb252ZXJzYXRpb24odGhpcy5wcm9wcy5jb252ZXJzYXRpb25CYWNrdXApKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9ZWxzZSBpZiggYmFja3VwRGF0YSApe1xyXG4gICAgICAgICAgICBiYWNrdXBEYXRhLm1hcCggY29udiA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb2JqID0geyBzb3J0OiAwLCBpZDogY29udi5pZCAsIHRleHQ6IGNvbnYudXNlci5maXJzdF9uYW1lICsgXCIgXCIgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxpc3ROYW1lLnB1c2goIG9iaiApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIG91dHB1dC5tYXAoIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgbGlzdE5hbWUubWFwKCBzZWFyY2ggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCBzZWFyY2guc29ydCAhPSAtMSAmJiBzZWFyY2gudGV4dC50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKGl0ZW0udG9VcHBlckNhc2UoKSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2guc29ydCArKyBcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoLnNvcnQgPSAtMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGxpc3ROYW1lLnNvcnQoKGEsIGIpID0+IChhLnNvcnQgPiBiLnNvcnQpID8gMSA6IC0xKVxyXG4gICAgICAgICAgICB2YXIgbHN0SWRTb3J0ZWQgPSBsaXN0TmFtZS5tYXAoIGl0ZW0gPT4gaXRlbS5zb3J0ICE9IC0xICYmIGl0ZW0uc29ydCA/IGl0ZW0uaWQgOiAwIClcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChmaWx0ZXJTb3J0Q29udmVyc2F0aW9uKHsgaWRzIDogbHN0SWRTb3J0ZWQsIGRhdGE6IGJhY2t1cERhdGEgfSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgaGFuZGxlU2VhcmNoVXNlciA9IGV2ZW50ID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAxMyApIHtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hVc2VyKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1zZWFyY2gtdXNlclwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8tYWNjb3VudC1zZWFyY2gtb3V0bGluZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInNlYXJjaC11c2VyXCJcclxuICAgICAgICAgICAgICAgIHJlZj17KGlucHV0KSA9PiB0aGlzLnNlYXJjaCA9IGlucHV0fVxyXG4gICAgICAgICAgICAgICAgb25LZXlVcD17dGhpcy5oYW5kbGVTZWFyY2hVc2VyfVxyXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2gtdXNlclwiIHBsYWNlaG9sZGVyPSflhaXlipvjgZfjgaboqrDjgYvjgpLopovjgaTjgZHjgosnIC8+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJidG4tc2VhcmNoIGhlcm8taWNvbiBoZXJvLWxheWVycy1zZWFyY2gtb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNlYXJjaFVzZXJ9XHJcbiAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY29udmVyc2F0aW9ucyAgICAgOiBzdGF0ZS5jb252ZXJzYXRpb25zLFxyXG4gICAgICAgIGNvbnZlcnNhdGlvbkJhY2t1cDogc3RhdGUuY29udmVyc2F0aW9uQmFja3VwLFxyXG4gICAgICAgIHVzZXIgICAgICAgICAgICAgIDogc3RhdGUudXNlclxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTZWFyY2gpIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbi8vIGltcG9ydCBTZWFyY2hVc2VyIGZyb20gXCIuL1NlYXJjaFVzZXIuanN4XCJcclxuaW1wb3J0IExpc3RVc2VyIGZyb20gXCIuL0xpc3RVc2VyLmpzeFwiXHJcbmltcG9ydCBcIi4uLy4uL3Njc3MvY2hhdC9zaWRlYmFyLnNjc3NcIlxyXG5pbXBvcnQgQ09ORklHIGZyb20gXCIuLi8uLi9jb25maWdcIlxyXG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuL1NlYXJjaC5qc3hcIlxyXG5cclxuY2xhc3MgU2lkZUJhckNoYXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXIgc2lkZWJhclwiIClcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgdmFyIGluZm9yID0geyBhdmF0YXI6ICcnLCBuYW1lOiAnJyB9XHJcbiAgICAgICAgdmFyIHsgY29udmVyc2F0aW9ucywgYXV0aCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGlmIChhdXRoICYmIGF1dGguaWQpIHtcclxuICAgICAgICAgICAgaW5mb3IuYXZhdGFyID0gYXV0aC5hdmF0YXJcclxuICAgICAgICAgICAgaW5mb3IubmFtZSA9IGF1dGguZmlyc3RfbmFtZSArIFwiIFwiICsgYXV0aC5sYXN0X25hbWUgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1zaWRlYmFyLWNoYXRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXlpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJzdGF0ZS1hdmF0YXIgYWN0aXZlLW9ubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eyBDT05GSUcuU0VSVkVSX1BIUC5VUkwgKyBpbmZvci5hdmF0YXIgfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPntpbmZvci5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LXVzZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb252ZXJzYXRpb25zLmxlbmd0aCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdFVzZXIgY29udmVyc2F0aW9ucz17Y29udmVyc2F0aW9uc30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4g5qSc57Si57WQ5p6c44Gv44GC44KK44G+44Gb44KTIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXJDaGF0XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vLi4vY29uZmlnXCJcclxuaW1wb3J0IHsgY2hhbmdlQ2hhbm5lbEFjdGl2ZSB9IGZyb20gXCIuLi8uLi9hY3Rpb25cIlxyXG5jbGFzcyBVc2VyQ2hhdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY2hhbmdlQWN0aXZlVXNlciA9ICggX3RoaXMgLCBpZCkgPT4ge1xyXG5cclxuICAgICAgICBfdGhpcy5wcm9wcy5kaXNwYXRjaChjaGFuZ2VDaGFubmVsQWN0aXZlKCBpZCApKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgeyBjaGFubmVsIH0gICAgICAgID0gdGhpcy5wcm9wcyxcclxuICAgICAgICAgICAgY2xhc3NBY3RpdmVPbmxpbmUgID0gY2hhbm5lbC51c2VyLm9ubGluZSA/ICcgYWN0aXZlICcgOiAnJyxcclxuICAgICAgICAgICAgY2xhc3NBY3RpdmVNZXNzYWdlID0gY2hhbm5lbC5pc0FjdGl2ZSA/ICcgYWN0aXZlLW1lc3NhZ2UgJyA6ICcnXHJcblxyXG4gICAgICAgIHZhciBbbGFzdEl0ZW1dID0gY2hhbm5lbC5tZXNzYWdlLnNsaWNlKC0xKVxyXG5cclxuICAgICAgICB2YXIgbXVuYmVyTm9uZVJlYWQgPSBjaGFubmVsLm1lc3NhZ2UuZmlsdGVyKG1lc3NhZ2UgPT4gIW1lc3NhZ2UucmVhZEFkbWluICkubGVuZ3RoXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyXCIgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzQWN0aXZlT25saW5lICsgY2xhc3NBY3RpdmVNZXNzYWdlICsgXCJ1c2VyLWNoYXRcIn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmNoYW5nZUFjdGl2ZVVzZXIodGhpcywgY2hhbm5lbC5pZCl9ID5cclxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cInN0YXRlLWF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Q09ORklHLlNFUlZFUl9QSFAuVVJMICsgY2hhbm5lbC51c2VyLmF2YXRhcn0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+e2NoYW5uZWwudXNlci5maXJzdF9uYW1lICsgXCIgXCIgKyBjaGFubmVsLnVzZXIubGFzdF9uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYXN0SXRlbSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFzdC1tZXNzYWdlXCI+e2xhc3RJdGVtLmNvbnRlbnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVuYmVyTm9uZVJlYWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJub25lLXJlYWQtbWVzc2FnZVwiPnttdW5iZXJOb25lUmVhZH08L2k+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKShVc2VyQ2hhdCkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgU2lkZUJhckNoYXQgZnJvbSBcIi4vU2lkZUJhckNoYXQuanN4XCJcclxuaW1wb3J0IExpc3RNZXNzYWdlIGZyb20gXCIuL0xpc3RNZXNzYWdlLmpzeFwiXHJcbmltcG9ydCAnLi4vLi4vc2Nzcy9jaGF0L2NoYXQuc2NzcydcclxuaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vLi4vY29uZmlnXCJcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCB7IHNldHRlclVzZXIsIHJlYWRBbGxDTWVzc2FnZSwgc2V0dGVyQ29udmVyc2F0aW9uLCBzZXR0ZXJDb252ZXJzYXRpb25CYWNrdXAgfSBmcm9tIFwiLi4vLi4vYWN0aW9uXCJcclxuXHJcbmNsYXNzIENoYXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgLy8vIGZldGNoIGRhdGEgd2l0aCBjaGFubmVsLCBpZCBvZiB1cmwgXHJcbiAgICAgICAgLy8vLyAuLi4uIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBUT0tFTl9SRUZFU0hfRE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJUT0tFTl9SRUZFU0hcIilcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLCBcInbDoG8gxJHDonkgciBcIilcclxuICAgICAgICBpZiggVE9LRU5fUkVGRVNIX0RPTSAmJiAhdGhpcy5wcm9wcy5jb252ZXJzYXRpb25zICl7XHJcbiAgICAgICAgICAgIC8vLyBmZXRjaCB0b2tlbiBhY2Nlc3MgYnkgdG9rZW4gcmVmZXNoIFxyXG4gICAgICAgICAgICB2YXIgcmVmcmVzaCA9IFRPS0VOX1JFRkVTSF9ET00uZ2V0QXR0cmlidXRlKCdkYXRhLXJlZmVzaCcpLFxyXG4gICAgICAgICAgICAgICAgdXNlcklkICA9IFRPS0VOX1JFRkVTSF9ET00uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyksXHJcbiAgICAgICAgICAgICAgICBjaGFubmVsID0gVE9LRU5fUkVGRVNIX0RPTS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2hhbm5lbCcpXHJcblxyXG4gICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgICAgIC8vIHZhciBuYW1lID0gJ2lkJ1xyXG4gICAgICAgICAgICAvLyB2YXIgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgICAgIC8vIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1tcXFtcXF1dL2csICdcXFxcJCYnKTtcclxuICAgICAgICAgICAgLy8gdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnWz8mXScgKyBuYW1lICsgJyg9KFteJiNdKil8JnwjfCQpJyksXHJcbiAgICAgICAgICAgIC8vICAgICByZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpXHJcbiAgICAgICAgICAgIC8vIGlmICghcmVzdWx0cykgdXNlcklkID0gbnVsbFxyXG4gICAgICAgICAgICAvLyBlbHNlIGlmICghcmVzdWx0c1syXSkgdXNlcklkID0gJydcclxuICAgICAgICAgICAgLy8gZWxzZSB1c2VySWQgPSBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1syXS5yZXBsYWNlKC9cXCsvZywgJyAnKSlcclxuXHJcbiAgICAgICAgICAgIC8vIHZhciBuYW1lID0gJ3JlZnJlc2gnXHJcbiAgICAgICAgICAgIC8vIHZhciB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgICAgICAgLy8gbmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW1xcXV0vZywgJ1xcXFwkJicpO1xyXG4gICAgICAgICAgICAvLyB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdbPyZdJyArIG5hbWUgKyAnKD0oW14mI10qKXwmfCN8JCknKSxcclxuICAgICAgICAgICAgLy8gICAgIHJlc3VsdHMgPSByZWdleC5leGVjKHVybClcclxuICAgICAgICAgICAgLy8gaWYgKCFyZXN1bHRzKSB1c2VySWQgPSBudWxsXHJcbiAgICAgICAgICAgIC8vIGVsc2UgaWYgKCFyZXN1bHRzWzJdKSByZWZyZXNoID0gJydcclxuICAgICAgICAgICAgLy8gZWxzZSByZWZyZXNoID0gZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMl0ucmVwbGFjZSgvXFwrL2csICcgJykpXHJcblxyXG4gICAgICAgICAgICAvLyB2YXIgbmFtZSA9ICdjaGFubmVsJ1xyXG4gICAgICAgICAgICAvLyB2YXIgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgICAgIC8vIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1tcXFtcXF1dL2csICdcXFxcJCYnKTtcclxuICAgICAgICAgICAgLy8gdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnWz8mXScgKyBuYW1lICsgJyg9KFteJiNdKil8JnwjfCQpJyksXHJcbiAgICAgICAgICAgIC8vICAgICByZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpXHJcbiAgICAgICAgICAgIC8vIGlmICghcmVzdWx0cykgdXNlcklkID0gbnVsbFxyXG4gICAgICAgICAgICAvLyBlbHNlIGlmICghcmVzdWx0c1syXSkgY2hhbm5lbCA9ICcnXHJcbiAgICAgICAgICAgIC8vIGVsc2UgY2hhbm5lbCA9IGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzJdLnJlcGxhY2UoL1xcKy9nLCAnICcpKVxyXG5cclxuICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgICAgICBpZiggdXNlcklkICYmIHJlZnJlc2ggICl7XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHVybCAgICA9IG5ldyBVUkwoQ09ORklHLlNFUlZFUi5BU1NFVCgpICsgJy9hcGkvYWRtaW4vcmVhZC1tZXNzYWdlJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zID0geyB1c2VySWQsIHJlZnJlc2gsIGNoYW5uZWwgfVxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PiB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZChrZXksIHBhcmFtc1trZXldKSlcclxuXHJcbiAgICAgICAgICAgICAgICBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidG9rZW4gcmVmZXNoIGtow7RuZyDEkcO6bmdcIilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzZXR0ZXJVc2VyKHJlc3BvbnNlLnVzZXIpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0dGVyQ29udmVyc2F0aW9uKHJlc3BvbnNlLmRhdGEpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0dGVyQ29udmVyc2F0aW9uQmFja3VwKHJlc3BvbnNlLmRhdGEpKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhbGVydCggXCLjgqjjg6njg7zjgYznmbrnlJ/jgZfjgb7jgZfjgZ/jgIIg5b6M44Gn44KC44GG5LiA5bqm44KE44KK55u044GX44Gm44GP44Gg44GV44GEXCIgKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpe1xyXG4gICAgICAgIHZhciBUT0tFTl9SRUZFU0hfRE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJUT0tFTl9SRUZFU0hcIilcclxuXHJcbiAgICAgICAgaWYoIFRPS0VOX1JFRkVTSF9ET00gKXtcclxuXHJcbiAgICAgICAgICAgIHZhciByZWZyZXNoID0gVE9LRU5fUkVGRVNIX0RPTS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVmZXNoJylcclxuXHJcbiAgICAgICAgICAgIC8vIHZhciBuYW1lID0gJ3JlZnJlc2gnXHJcbiAgICAgICAgICAgIC8vIHZhciB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgICAgICAgLy8gbmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW1xcXV0vZywgJ1xcXFwkJicpO1xyXG4gICAgICAgICAgICAvLyB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdbPyZdJyArIG5hbWUgKyAnKD0oW14mI10qKXwmfCN8JCknKSxcclxuICAgICAgICAgICAgLy8gICAgIHJlc3VsdHMgPSByZWdleC5leGVjKHVybClcclxuICAgICAgICAgICAgLy8gaWYgKCFyZXN1bHRzKSB1c2VySWQgPSBudWxsXHJcbiAgICAgICAgICAgIC8vIGVsc2UgaWYgKCFyZXN1bHRzWzJdKSByZWZyZXNoID0gJydcclxuICAgICAgICAgICAgLy8gZWxzZSByZWZyZXNoID0gZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMl0ucmVwbGFjZSgvXFwrL2csICcgJykpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCB0aGlzLnByb3BzLmNvbnZlcnNhdGlvbnMgKXtcclxuXHJcbiAgICAgICAgICAgIHZhciB7IGNvbnZlcnNhdGlvbnMgfSA9IHRoaXMucHJvcHMsXHJcbiAgICAgICAgICAgICAgICBjaGFubmVsQWN0aXZlQ2hhdCA9IGNvbnZlcnNhdGlvbnMuZmluZChjaGFubmVsID0+IGNoYW5uZWwuaXNBY3RpdmUpLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXMgICAgICAgICAgPSBjaGFubmVsQWN0aXZlQ2hhdCAmJiBjaGFubmVsQWN0aXZlQ2hhdC5tZXNzYWdlXHJcblxyXG4gICAgICAgICAgICB2YXIgZXhpc3ROb25lUmVhZCA9IG1lc3NhZ2VzICYmIG1lc3NhZ2VzLnNvbWUoIGZ1bmN0aW9uKCBtZXNzYWdlICl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJldHVybiAhbWVzc2FnZS5yZWFkQWRtaW5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiggZXhpc3ROb25lUmVhZCApe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW1zID0geyBjaGFubmVsOiBjaGFubmVsQWN0aXZlQ2hhdC5pZCwgcmVmcmVzaCB9XHJcblxyXG4gICAgICAgICAgICAgICAgZmV0Y2goQ09ORklHLlNFUlZFUi5BU1NFVCgpICsgJy9hcGkvYWRtaW4vcmVhZGluZycsIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcyksXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCByZXNwb25zZS5jb2RlID09IDIwMCApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHJlYWRBbGxDTWVzc2FnZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyIENoYXRcIilcclxuICAgICAgICB2YXIgeyBjb252ZXJzYXRpb25zLCB1c2VyIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LWNoYXRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctY2hhdC10ZW1hbGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlci1wYWdlLWNoYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udmVyc2F0aW9ucyAmJiB1c2VyID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaWRlQmFyQ2hhdCBjb252ZXJzYXRpb25zPXsgY29udmVyc2F0aW9ucyB9IGF1dGg9eyB1c2VyIH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdE1lc3NhZ2UgY29udmVyc2F0aW9ucz17IGNvbnZlcnNhdGlvbnMgfSBhdXRoPXsgdXNlciB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY29udmVyc2F0aW9uczogc3RhdGUuY29udmVyc2F0aW9ucyxcclxuICAgICAgICB1c2VyICAgICAgICAgOiBzdGF0ZS51c2VyXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENoYXQpIiwidmFyIGxvY2FsICAgICAgPSBcImthc2VpZnUtYmFieXNpdHRlci5jb21cIixcclxuICAgIGxvY2FsX2lwICAgPSBcIjE1My4xMjYuMTQyLjY3XCIsXHJcbiAgICBsb2NhbF9wb3J0ID0gOTk5OSxcclxuICAgIHBlZXJfcG9ydCAgPSA3MDAwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgU0VSVkVSOiB7XHJcbiAgICAgICAgUE9SVDogbG9jYWxfcG9ydCxcclxuICAgICAgICBET01BSU46IGxvY2FsLFxyXG4gICAgICAgIElQOiBsb2NhbF9pcCxcclxuICAgICAgICBQRUVSX1BPUlQ6IHBlZXJfcG9ydCxcclxuICAgICAgICBQUk9UT0NPTDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobG9jYWxfcG9ydCA9PSA0NDMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImh0dHBzOi8vXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFwiaHR0cDovL1wiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQVNTRVQ6ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBvcnRfdXJsID0gXCJcIjtcclxuICAgICAgICAgICAgbGV0IHByb3RvY29sID0gXCJcIjtcclxuICAgICAgICAgICAgaWYgKGxvY2FsX3BvcnQgPT0gNDQzKSB7XHJcbiAgICAgICAgICAgICAgICBwcm90b2NvbCA9IFwiaHR0cHM6Ly9cIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHByb3RvY29sID0gXCJodHRwOi8vXCI7XHJcbiAgICAgICAgICAgICAgICBwb3J0X3VybCA9IFwiOlwiICsgbG9jYWxfcG9ydDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHByb3RvY29sICsgbG9jYWwgKyBwb3J0X3VybDtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIFNFUlZFUl9QSFA6IHtcclxuICAgICAgICBVUkw6IFwiaHR0cDovL2thc2VpZnUtYmFieXNpdHRlci5jb21cIixcclxuICAgIH0sXHJcbn07XHJcbiIsIi8vIGltcG9ydCAnY29yZS1qcyc7XHJcblxyXG4vKiBwb2x5ZmlsbHMuanMgKi9cclxuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCdcclxuaW1wb3J0ICdyZWFjdC1hcHAtcG9seWZpbGwvaWUxMSdcclxuaW1wb3J0ICdjb3JlLWpzJ1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCIuL2NvbXBvbmVudC9BcHAuanNcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUmVkdWNlciBmcm9tICcuL3JlZHVjZXInO1xyXG5cclxuaW1wb3J0ICcuL3Njc3MvaW5kZXguc2NzcydcclxuXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoUmVkdWNlcik7XHJcbnN0b3JlLnN1YnNjcmliZShmdW5jdGlvbigpe1xyXG4gICAgY29uc29sZS5sb2coJ2PDsyB0aGF5IMSR4buVaSB0cm9uZyBSZWR1eCEhJylcclxuICAgIGNvbnNvbGUubG9nKHN0b3JlLmdldFN0YXRlKCkpO1xyXG59KTtcclxuaWYgKHR5cGVvZiAoU3RvcmFnZSkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBSZWFjdERPTS5yZW5kZXIoXHJcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICAgIDxBcHAgLz5cclxuICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkNIQVRfRUxFTUVOVFwiKSk7XHJcbn1lbHNle1xyXG4gICAgYWxlcnQoXCLjgZPjga7jg5bjg6njgqbjgrbjgafjga/jgIHjgqLjg5fjg6rjgrHjg7zjgrfjg6fjg7Pjga/mraPluLjjgavli5XkvZzjgZfjgb7jgZvjgpPjgIIg44Ki44OD44OX44Kw44Os44O844OJ44GX44Gm44GP44Gg44GV44GEXCIpXHJcbn1cclxuIiwiXHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIlxyXG5cclxuLy8vIGNvbmZpZyBnbG9iYWwgdmFyaWFibGVcclxudmFyIHNvY2tldCAgICAgICA9IG51bGwsXHJcbiAgICBFVkVOVCAgICAgICAgPSBDT05GSUdfRVZFTlRcclxuLy8vIGVuZCBzZXR0aW5nIHZhcmlhYmxlXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlzdGVuU2Nyb2xsTWVzc2FnZShlLCBtZXNzYWdlcywgY2hhbm5lbEFjdGl2ZSApIHsgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgaWYoIW1lc3NhZ2VzIHx8ICFtZXNzYWdlcy5sZW5ndGgpe1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgdmFyIGRvbVNjcm9sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtc2Nyb2xsLXRvLWJvdHRvbVwiKVxyXG4gICAgY29uc29sZS5sb2coZG9tU2Nyb2xsLnNjcm9sbEhlaWdodCwgZG9tU2Nyb2xsLmNsaWVudEhlaWdodCArIFwibGlzdGVuU2Nyb2xsTWVzc2FnZVwiKVxyXG4gICAgaWYgKCQoZSkuc2Nyb2xsVG9wKCkgKyBcclxuICAgICAgICAkKGUpLmlubmVySGVpZ2h0KCkgPj0gIFxyXG4gICAgICAgICQoZSlbMF0uc2Nyb2xsSGVpZ2h0KSB7IFxyXG4gICAgICAgICAgICAvLy8gY2hlY2sgbWVzc2FnZSB1bnJlYWRcclxuICAgICAgICAgICAgdmFyIGV4aXN0Tm9uZVJlYWQgPSBtZXNzYWdlcy5zb21lKCBmdW5jdGlvbiggbWVzc2FnZSApe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIW1lc3NhZ2UucmVhZEFkbWluICYmICFtZXNzYWdlLnR5cGVcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGlmKCBleGlzdE5vbmVSZWFkICl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhFVkVOVC5SRUFEX01FU1NBR0VfQUxMLCBcImxpc3RlblNjcm9sbE1lc3NhZ2VcIilcclxuICAgICAgICAgICAgICAgIHZhciB1c2VyTG9jYWwgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpXHJcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdChFVkVOVC5SRUFEX01FU1NBR0VfQUxMLCB7IHVzZXIgOiB1c2VyTG9jYWwuaWQsIGNoYW5uZWxJZDogY2hhbm5lbEFjdGl2ZS5pZCwgY2hhbm5lbE5hbWU6IGNoYW5uZWxBY3RpdmUuY2hhbm5lbE5hbWUgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJcclxuLy8gaWYodHlwZW9mIHVzZXJEZWZhdWx0ID09IHVuZGVmaW5lZCl7XHJcbi8vICAgdmFyIHVzZXJEZWZhdWx0ID0gJ1tdJ1xyXG4vLyB9XHJcbnZhciBjb252ZXJzYXRpb25zID0gbnVsbFxyXG5pbXBvcnQgVFlQRSBmcm9tIFwiLi4vYWN0aW9uL3R5cGUuanNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gY29udmVyc2F0aW9ucywgYWN0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FzZSBUWVBFLlNFVFRFUl9DT05WRVJTQVRJT05fQkFDS1VQOiBcclxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkXHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59IiwiXHJcbi8vIGlmKHR5cGVvZiB1c2VyRGVmYXVsdCA9PSB1bmRlZmluZWQpe1xyXG4vLyAgIHZhciB1c2VyRGVmYXVsdCA9ICdbXSdcclxuLy8gfVxyXG52YXIgY29udmVyc2F0aW9ucyA9IG51bGxcclxuaW1wb3J0IFRZUEUgZnJvbSBcIi4uL2FjdGlvbi90eXBlLmpzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGNvbnZlcnNhdGlvbnMsIGFjdGlvbikge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNhc2UgVFlQRS5DSEFOTkVMX1NFVF9BQ1RJVkU6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5pdGVtLCBpc0FjdGl2ZTogdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5pdGVtLCBpc0FjdGl2ZTogZmFsc2UgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNhc2UgVFlQRS5DSEFOTkVMX1JFQURfTUVTU0FHRSA6IFxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUubWFwKCBjaGFubmVsID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGNoYW5uZWwuaXNBY3RpdmUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZXMgPSBjaGFubmVsLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZXMgPSBtZXNzYWdlcy5tYXAoIG1lc3NhZ2UgPT4geyByZXR1cm4geyAuLi5tZXNzYWdlLCByZWFkQWRtaW46IHRydWUgfSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmNoYW5uZWwsIG1lc3NhZ2UgOiBtZXNzYWdlcyB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hhbm5lbFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIGNhc2UgVFlQRS5TRVRURVJfQ09OVkVSU0FUSU9OOiBcclxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkXHJcblxyXG4gICAgICAgIGNhc2UgVFlQRS5GSUxURVJfU09SVF9DT05WOiBcclxuXHJcbiAgICAgICAgICAgIHZhciB7IGlkcywgZGF0YSB9ID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgY29uc29sZS5sb2coIGFjdGlvbi5wYXlsb2FkIClcclxuICAgICAgICAgICAgdmFyIGNvbnYgICAgICAgICAgPSBbXVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWRzLm1hcCggKGlkLCBpbmRleElEICkgID0+IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoIGlkICl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoYW5uZWxTb3J0ID0gZGF0YS5maW5kKCBjaGFubmVsID0+Y2hhbm5lbC5pZCA9PSBpZCApXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIGNoYW5uZWxTb3J0ICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5uZWxTb3J0LmlzQWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udi5wdXNoKCBjaGFubmVsU29ydCApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZiggY29udlswXSApe1xyXG4gICAgICAgICAgICAgICAgY29udlswXS5pc0FjdGl2ZSA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY29udlxyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSAncmVkdXgnO1xyXG5cclxuLy8vdGjDqm0gY8OhYyByZWR1Y2VyIGZ1bnRpb24gY+G6p24gxJHGsOG7o2MgY29tYmluZSB2w6BvIMSRw6J5XHJcbmltcG9ydCBjb252ZXJzYXRpb25zIGZyb20gJy4vY29udmVyc2F0aW9ucy5qcydcclxuaW1wb3J0IGNvbnZlcnNhdGlvbkJhY2t1cCBmcm9tICcuL2NvbnZlcnNhdGlvbi1iYWNrdXAtc2VhcmNoJ1xyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXIuanMnXHJcbi8vLy8ga2jhu59pIHThuqFvIDEgYmnhur9uIGJp4buDdSBkaeG7hW4gUkVEVUNFUiBBTEwgXHJcbmNvbnN0IFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgXHJcbiAgICB1c2VyICAgICAgICAgICAgICA6IHVzZXIsXHJcbiAgICBjb252ZXJzYXRpb25zICAgICA6IGNvbnZlcnNhdGlvbnMsXHJcbiAgICBjb252ZXJzYXRpb25CYWNrdXA6IGNvbnZlcnNhdGlvbkJhY2t1cFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgUmVkdWNlcjsiLCJ2YXIgdXNlciA9IG51bGxcclxuXHJcbmltcG9ydCBUWVBFIGZyb20gXCIuLi9hY3Rpb24vdHlwZS5qc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSB1c2VyLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFRZUEUuU0VUVEVSX1VTRVI6XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMiEuL2NoYXQuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0yIS4vaGVhZC1pbmZvLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMiEuL2xpc3QtbWVzc2FnZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTIhLi9saXN0LXVzZXIuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0yIS4vbWVzc2FnZS1jaGF0LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMiEuL3NlYXJjaC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTIhLi9zaWRlYmFyLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMiEuL2luZGV4LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=