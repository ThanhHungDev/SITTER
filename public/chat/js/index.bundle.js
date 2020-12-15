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
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.bg-chat-temalate {\n  background: -moz-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -webkit-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -o-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -ms-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n}\n\n.wrapper-page-chat {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.wrapper-page-chat:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n\n.error {\n  color: #ff3547;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/chat/emoji.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--6-2!./src/scss/chat/emoji.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-list-emoji {\n  position: absolute;\n  left: 50%;\n  right: 50%;\n  padding: 10px;\n  border: 1px solid #e9ecef;\n  border-radius: 10px;\n  background-color: #fff;\n  opacity: 0;\n  visibility: hidden;\n  height: 0;\n}\n.component-list-emoji:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-list-emoji.first-show {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n  animation-name: tada;\n}\n.component-list-emoji.show {\n  visibility: unset;\n  height: unset;\n  bottom: 100%;\n  left: 20px;\n  right: 20px;\n  opacity: 1;\n  z-index: 111;\n}\n\n.component-emoji {\n  width: 34px;\n  height: 34px;\n  float: left;\n  text-align: center;\n  display: block;\n  cursor: pointer;\n  line-height: 24px;\n  font: normal normal normal 24px/1 \"HERO Icons\";\n  text-rendering: auto;\n  line-height: inherit;\n  -webkit-font-smoothing: antialiased;\n  color: #0d47a1;\n}", ""]);
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
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-head-info .user-active-chat {\n  position: relative;\n  padding: 10px 20px;\n  box-sizing: border-box;\n  border-bottom: 1px solid #e9ecef;\n  min-height: 75px;\n}\n.component-head-info .user-active-chat .state-avatar {\n  position: absolute;\n  top: 50%;\n  display: block;\n  padding: 0;\n  margin: 0;\n  width: 40px;\n  height: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  overflow: hidden;\n  border-radius: 50%;\n  box-sizing: border-box;\n  border: 1px solid #6c757d;\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.component-head-info .user-active-chat .state-avatar img {\n  width: 40px;\n  height: 40px;\n  min-width: 40px;\n  min-height: 40px;\n}\n.component-head-info .user-active-chat .text-info {\n  display: block;\n  padding: 7px 7px 7px 55px;\n  color: #0d47a1;\n}\n.component-head-info .user-active-chat .text-info .name {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: inherit;\n  text-decoration: none;\n}\n.component-head-info .user-active-chat .text-info .time-online {\n  display: block;\n  font-size: 12px;\n  color: #6c757d;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.component-head-info .user-active-chat .text-info .time-online.active-now {\n  color: #8bc34a;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/chat/input-send-chat.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--6-2!./src/scss/chat/input-send-chat.scss ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-input-send-chat {\n  border: 1px solid #e9ecef;\n  border-left: none;\n  position: relative;\n  padding: 5px 45px 0 100px;\n}\n.component-input-send-chat textarea {\n  width: 100% !important;\n  min-height: 30px;\n  max-height: 150px;\n  overflow-y: scroll;\n  resize: none;\n  padding: 10px 15px;\n  background-color: #f2f2f2;\n  border-radius: 15px;\n  border: 1px solid #ced4da;\n  font-size: 14px;\n  scrollbar-width: none;\n  margin: 0;\n  text-decoration: none;\n  -ms-overflow-style: none;\n}\n.component-input-send-chat textarea:focus {\n  border-color: #0d47a1;\n  color: #0d47a1;\n}\n.component-input-send-chat textarea::-webkit-scrollbar {\n  display: block;\n}\n.component-input-send-chat > i {\n  position: absolute;\n  z-index: 11;\n  bottom: 20px;\n  font-size: 28px;\n  color: #0d6efd;\n}\n.component-input-send-chat .hero-icon.calendar {\n  left: 5px;\n}\n.component-input-send-chat .hero-icon.emoticon {\n  left: 35px;\n}\n.component-input-send-chat .hero-icon.file {\n  left: 65px;\n}\n.component-input-send-chat .hero-icon.send {\n  display: inline-block;\n  z-index: 1;\n  right: 10px;\n}\n.component-input-send-chat .hero-icon.react {\n  z-index: -1;\n  display: none;\n  right: 0px;\n}\n.component-input-send-chat .image-block .remove-image {\n  max-height: 100px;\n  overflow: hidden;\n  display: inline-block;\n  position: relative;\n}\n.component-input-send-chat .image-block .remove-image:after {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  content: \"󰅗\";\n  width: 32px;\n  height: 24px;\n  text-align: center;\n  display: inline-block;\n  vertical-align: middle;\n  cursor: pointer;\n  line-height: 24px;\n  font: normal normal normal 24px/1 \"HERO Icons\";\n  text-rendering: auto;\n  line-height: inherit;\n  -webkit-font-smoothing: antialiased;\n}\n.component-input-send-chat .image-block .remove-image:hover img {\n  opacity: 0.4;\n}\n.component-input-send-chat .image-block .remove-image:hover:after {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n  animation-name: tada;\n}\n.component-input-send-chat .image-block img {\n  padding: 5px;\n  opacity: 0.9;\n}", ""]);
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
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-list-message {\n  float: left;\n  width: 70%;\n  border-left: 1px solid #e9ecef;\n  overflow: hidden;\n}\n.component-list-message .wrapper-list-message {\n  position: relative;\n  padding: 15px;\n  height: 400px;\n  overflow-y: scroll;\n  scrollbar-color: rgba(0, 0, 0, 0.3) #F5F5F5;\n  scrollbar-width: thin !important;\n  -ms-overflow-style: none;\n}\n.component-list-message .wrapper-list-message:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-list-message .wrapper-list-message::-webkit-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-list-message .wrapper-list-message::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-list-message .wrapper-list-message::-moz-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-list-message .wrapper-list-message::-moz-scrollbar-thumb {\n  border-radius: 10px;\n  -moz-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-list-message .wrapper-list-message::-o-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-list-message .wrapper-list-message::-o-scrollbar-thumb {\n  border-radius: 10px;\n  -o-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-list-message .wrapper-list-message::-ms-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-list-message .wrapper-list-message::-ms-scrollbar-thumb {\n  border-radius: 10px;\n  -ms-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n\n.ticontainer {\n  display: inline-block;\n  min-width: 30px;\n}\n.ticontainer .tiblock {\n  align-items: center;\n  display: flex;\n  height: 17px;\n}\n.ticontainer .tiblock .tidot {\n  background-color: #adb5bd;\n  -webkit-animation: mercuryTypingAnimation 1.5s infinite ease-in-out;\n  animation: mercuryTypingAnimation 1.5s infinite ease-in-out;\n  border-radius: 50%;\n  display: inline-block;\n  height: 6px;\n  margin-right: 4px;\n  width: 6px;\n}\n.ticontainer .tiblock .tidot:nth-child(1) {\n  -webkit-animation-delay: 150ms;\n  animation-delay: 200ms;\n}\n.ticontainer .tiblock .tidot:nth-child(2) {\n  -webkit-animation-delay: 300ms;\n  animation-delay: 300ms;\n}\n.ticontainer .tiblock .tidot:nth-child(3) {\n  -webkit-animation-delay: 450ms;\n  animation-delay: 400ms;\n}\n\n@-webkit-keyframes mercuryTypingAnimation {\n  0% {\n    -webkit-transform: translateY(0px);\n  }\n  28% {\n    -webkit-transform: translateY(-5px);\n  }\n  44% {\n    -webkit-transform: translateY(0px);\n  }\n}\n@media only screen and (max-width: 991px) {\n  .component-list-message {\n    width: 60%;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .component-list-message {\n    width: calc(100% - 75px);\n  }\n  .component-list-message .wrapper-list-message {\n    height: 300px;\n  }\n}", ""]);
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
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-user-chat-sidebar {\n  position: relative;\n}\n.component-user-chat-sidebar .none-read-message {\n  position: absolute;\n  right: 15px;\n  border-radius: 50%;\n  padding: 3px 6px;\n  bottom: 30%;\n  font-size: 11px;\n  line-height: 1;\n  font-style: normal;\n  background-color: #28a745;\n  color: #e9ecef;\n}\n.component-user-chat-sidebar .user-chat {\n  min-height: 50px;\n  position: relative;\n  padding: 5px;\n  cursor: pointer;\n}\n.component-user-chat-sidebar .user-chat.active-message {\n  background-color: #c7c6c6;\n}\n.component-user-chat-sidebar .user-chat.active .state-avatar {\n  border-color: #28a745;\n}\n.component-user-chat-sidebar .user-chat.active .state-avatar:after {\n  background-color: #28a745;\n}\n.component-user-chat-sidebar .user-chat .state-avatar {\n  position: absolute;\n  top: 50%;\n  display: block;\n  padding: 0;\n  width: 40px;\n  height: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  margin: 0;\n  overflow: hidden;\n  border-radius: 50%;\n  box-sizing: border-box;\n  border: 1px solid #6c757d;\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.component-user-chat-sidebar .user-chat .state-avatar:after {\n  content: \".\";\n  color: transparent;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  z-index: 5;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  overflow: hidden;\n  background-color: #adb5bd;\n  -webkit-transform: translateX(-50%);\n  -moz-transform: translateX(-50%);\n  -o-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n.component-user-chat-sidebar .user-chat .state-avatar img {\n  width: 40px;\n  height: 40px;\n  min-width: 40px;\n  min-height: 40px;\n}\n.component-user-chat-sidebar .user-chat .text-info {\n  display: block;\n  padding: 0 0 0 55px;\n  color: #0d47a1;\n}\n.component-user-chat-sidebar .user-chat .text-info .name {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.component-user-chat-sidebar .user-chat .text-info .last-message {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n@media only screen and (max-width: 768px) {\n  .component-user-chat-sidebar .user-chat.active-message {\n    background-color: #adb5bd;\n  }\n  .component-user-chat-sidebar .user-chat .text-info {\n    width: 10px;\n    overflow: hidden;\n    padding: 0;\n    visibility: hidden;\n  }\n}", ""]);
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
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.left-message {\n  position: relative;\n  padding-right: 25px;\n}\n.left-message .read {\n  display: inline-block;\n}\n\n.component-message-chat {\n  padding-top: 5px;\n}\n.component-message-chat:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-message-chat.typing-chat-messsage {\n  display: none;\n  padding-top: 0;\n  position: absolute;\n  z-index: 3;\n  top: -25px;\n  background-color: #e9ecef;\n  border-radius: 8px;\n  border: 1px solid #adb5bd;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  -moz-transform: translateX(-50%);\n  -o-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n.component-message-chat.typing-chat-messsage.show {\n  display: block;\n}\n.component-message-chat.typing-chat-messsage .typing-message .text {\n  line-height: 1;\n  padding: 2px 10px !important;\n}\n.component-message-chat .chat-group:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-message-chat .chat-group.by-me:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-message-chat .chat-group.by-me .avatar {\n  display: none !important;\n}\n.component-message-chat .chat-group.by-me .message-content {\n  padding-right: 30px;\n  padding-left: 0;\n  display: block;\n  width: 100%;\n}\n.component-message-chat .chat-group.by-me .message-content:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-message-chat .chat-group.by-me .message-content .text {\n  float: right;\n  background-color: #f4b081;\n  position: relative;\n  z-index: 2;\n}\n.component-message-chat .chat-group.by-me .message-content .text:after {\n  content: \".\";\n  color: transparent;\n  position: absolute;\n  right: -20px;\n  left: unset;\n  width: 25px;\n  height: 10px;\n  bottom: 3px;\n  z-index: 1;\n  transform: rotate(20deg);\n  -webkit-transform: rotate(20deg);\n  border: 15px solid;\n  border-color: transparent transparent #f4b081 #f4b081;\n}\n.component-message-chat .chat-group.by-me .EMOJI {\n  text-align: right;\n}\n.component-message-chat .chat-group.by-me .EMOJI:after {\n  display: none;\n}\n.component-message-chat .chat-group .avatar {\n  max-width: 40px;\n  max-height: 40px;\n  margin: 0;\n  border-radius: 50%;\n  overflow: hidden;\n  float: left;\n}\n.component-message-chat .chat-group .avatar img {\n  width: 100%;\n}\n.component-message-chat .chat-group .message-content {\n  padding-left: 50px;\n  display: block;\n  width: 100%;\n}\n.component-message-chat .chat-group .message-content.typing-message {\n  padding-left: 0px;\n}\n.component-message-chat .chat-group .message-content .IMAGE {\n  text-align: center;\n}\n.component-message-chat .chat-group .message-content .IMAGE .wrapper-attachment {\n  padding: 5px;\n  display: inline-block;\n  max-width: 200px;\n  position: relative;\n}\n.component-message-chat .chat-group .message-content .IMAGE .wrapper-attachment img {\n  width: 100%;\n  height: auto;\n}\n.component-message-chat .chat-group .message-content .IMAGE .wrapper-attachment .download-file-attachment {\n  position: absolute;\n  top: 5%;\n  right: 5%;\n  background-color: #dee2e6;\n  color: #0d47a1;\n  border-radius: 50%;\n  padding: 3px 0;\n  border: 1px solid #0d47a1;\n}\n.component-message-chat .chat-group .message-content .IMAGE .wrapper-attachment .download-file-attachment i {\n  font-size: 24px;\n}\n.component-message-chat .chat-group .message-content .IMAGE:after {\n  display: none;\n}\n.component-message-chat .chat-group .message-content .EMOJI {\n  padding: 10px;\n  background: none !important;\n}\n.component-message-chat .chat-group .message-content .EMOJI:after {\n  display: none;\n}\n.component-message-chat .chat-group .message-content .text {\n  max-width: 60%;\n  display: inline-block;\n  width: calc(100% - 32px);\n  line-height: 1.3;\n  padding: 10px;\n  border-radius: 10px;\n  white-space: pre-line;\n  word-break: break-all;\n  background-color: #94a7d9;\n  color: #fff;\n  position: relative;\n  z-index: 2;\n}\n.component-message-chat .chat-group .message-content .text:after {\n  content: \".\";\n  color: transparent;\n  position: absolute;\n  right: unset;\n  left: -20px;\n  width: 25px;\n  height: 10px;\n  bottom: 3px;\n  z-index: 1;\n  transform: rotate(-20deg);\n  -webkit-transform: rotate(-20deg);\n  border: 15px solid;\n  border-color: transparent #94a7d9 #94a7d9 transparent;\n}\n.component-message-chat .chat-group .message-content .text.EMOJI {\n  background: transparent !important;\n  font-size: 35px;\n  padding: 0 10px;\n  max-width: 80px;\n}\n.component-message-chat .chat-group .typing-message .text {\n  max-width: 100%;\n  width: 100%;\n  padding: 5px 10px;\n  background: transparent !important;\n}\n.component-message-chat .chat-group .typing-message .text:after {\n  display: none;\n}\n.component-message-chat .chat-group .typing-message .typing-text {\n  font-size: 10px;\n}", ""]);
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
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-sidebar-chat {\n  overflow-y: scroll;\n  float: left;\n  width: 30%;\n  scrollbar-color: rgba(0, 0, 0, 0.3) #F5F5F5;\n  scrollbar-width: thin !important;\n  -ms-overflow-style: none;\n}\n.component-sidebar-chat::-webkit-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-sidebar-chat::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-sidebar-chat::-moz-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-sidebar-chat::-moz-scrollbar-thumb {\n  border-radius: 10px;\n  -moz-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-sidebar-chat::-o-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-sidebar-chat::-o-scrollbar-thumb {\n  border-radius: 10px;\n  -o-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-sidebar-chat::-ms-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-sidebar-chat::-ms-scrollbar-thumb {\n  border-radius: 10px;\n  -ms-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-sidebar-chat * {\n  box-sizing: border-box;\n}\n\n.myinfo {\n  padding: 10px 20px;\n  box-sizing: border-box;\n  border-bottom: 1px solid #e9ecef;\n  min-height: 75px;\n}\n.myinfo .avatar .state-avatar {\n  display: inline-block;\n  vertical-align: middle;\n  padding: 3px;\n  margin: 0;\n  overflow: hidden;\n  border-radius: 50%;\n  box-sizing: border-box;\n  position: relative;\n  width: 50px;\n  height: 50px;\n}\n.myinfo .avatar .state-avatar:after {\n  content: \".\";\n  color: transparent;\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  right: 1px;\n  bottom: 1px;\n  border-radius: 50%;\n  border: 2px double #9175ca;\n}\n.myinfo .avatar .state-avatar.active-online {\n  border: 2px double #00c851;\n}\n.myinfo .avatar .state-avatar img {\n  max-width: 40px;\n  max-height: 40px;\n}\n.myinfo .avatar .name {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 27ch;\n  display: inline-block;\n  vertical-align: middle;\n  padding: 10px;\n  color: #0d47a1;\n}\n\n@media only screen and (max-width: 991px) {\n  .component-sidebar-chat {\n    width: 40%;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .component-sidebar-chat {\n    width: 75px;\n  }\n  .component-sidebar-chat .user-chat .state-avatar {\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%) !important;\n    -moz-transform: translate(-50%, -50%) !important;\n    -o-transform: translate(-50%, -50%) !important;\n    -ms-transform: translate(-50%, -50%) !important;\n    transform: translate(-50%, -50%) !important;\n  }\n\n  .myinfo {\n    padding: 10px;\n  }\n  .myinfo .avatar .state-avatar img {\n    max-width: 35px;\n    max-height: 35px;\n  }\n  .myinfo .avatar .name {\n    display: none;\n  }\n}", ""]);
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
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n/**\n* display\n*/\n*,\n:after,\n:before {\n  box-sizing: border-box;\n}\n\n:focus {\n  outline: 0 !important;\n  text-decoration: none !important;\n}\n\n.d-none {\n  display: none !important;\n}\n\n.d-inline-block {\n  display: inline-block !important;\n}\n\n.d-block {\n  display: block !important;\n}\n\n.d-table {\n  display: table !important;\n}\n\n.d-table-row {\n  display: table-row !important;\n}\n\n.d-table-cell {\n  display: table-cell !important;\n}\n\n.d-flex {\n  display: -ms-flexbox !important;\n  display: flex !important;\n}\n\n.d-inline-flex {\n  display: -ms-inline-flexbox !important;\n  display: inline-flex !important;\n}\n\n.italic {\n  font-style: italic !important;\n}\n\n.not-italic {\n  font-style: normal !important;\n}\n\n.uppercase {\n  text-transform: uppercase !important;\n}\n\n.lowercase {\n  text-transform: lowercase !important;\n}\n\n.capitalize {\n  text-transform: capitalize !important;\n}\n\n.normal-case {\n  text-transform: none !important;\n}\n\n.underline {\n  text-decoration: underline !important;\n}\n\n.line-through {\n  text-decoration: line-through !important;\n}\n\n.no-underline {\n  text-decoration: none !important;\n}\n\n/**************************************************/\n.font-hairline {\n  font-weight: 100 !important;\n}\n\n.font-thin {\n  font-weight: 200 !important;\n}\n\n.font-light {\n  font-weight: 300 !important;\n}\n\n.font-normal {\n  font-weight: 400 !important;\n}\n\n.font-medium {\n  font-weight: 500 !important;\n}\n\n.font-semibold {\n  font-weight: 600 !important;\n}\n\n.font-bold {\n  font-weight: 700 !important;\n}\n\n.font-extrabold {\n  font-weight: 800 !important;\n}\n\n.font-black {\n  font-weight: 900 !important;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.vertical-align-middle {\n  vertical-align: middle;\n}\n\n.mg-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.rounded-circle {\n  border-radius: 50% !important;\n}\n\n.border {\n  border: 1px solid #dee2e6 !important;\n}\n\n.border-top {\n  border-top: 1px solid #dee2e6 !important;\n}\n\n.border-right {\n  border-right: 1px solid #dee2e6 !important;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #dee2e6 !important;\n}\n\n.border-left {\n  border-left: 1px solid #dee2e6 !important;\n}\n\n.text-color-red {\n  color: #f44336;\n}\n\n.text-color-pink {\n  color: #e91e63;\n}\n\n.text-color-purple {\n  color: #9c27b0;\n}\n\n.text-color-deep-purple {\n  color: #673ab7;\n}\n\n.text-color-indigo {\n  color: #3f51b5;\n}\n\n.text-color-blue {\n  color: #2196f3;\n}\n\n.text-color-light-blue {\n  color: #03a9f4;\n}\n\n.text-color-cyan {\n  color: #00bcd4;\n}\n\n.text-color-teal {\n  color: #009688;\n}\n\n.text-color-green {\n  color: #4caf50;\n}\n\n.text-color-light-green {\n  color: #8bc34a;\n}\n\n.text-color-lime {\n  color: #cddc39;\n}\n\n.text-color-yellow {\n  color: #ffeb3b;\n}\n\n.text-color-amber {\n  color: #ffc107;\n}\n\n.text-color-orange {\n  color: #ff9800;\n}\n\n.text-color-deep-orange {\n  color: #ff5722;\n}\n\n.text-color-brown {\n  color: #795548;\n}\n\n.text-color-black {\n  color: #000;\n}\n\n.text-color-white {\n  color: #fff;\n}\n\n.text-color-grey {\n  color: #9e9e9e;\n}\n\n.text-color-blue-grey {\n  color: #607d8b;\n}\n\n.text-color-primary-color-dark {\n  color: #0d47a1;\n}\n\n.text-color-secondary-color {\n  color: #aa66cc;\n}\n\n.text-color-secondary-color-dark {\n  color: #9933cc;\n}\n\n.text-color-default-color {\n  color: #2bbbad;\n}\n\n.text-color-default-color-dark {\n  color: #00695c;\n}\n\n.text-color-info-color {\n  color: #33b5e5;\n}\n\n.text-color-info-color-dark {\n  color: #0099cc;\n}\n\n.text-color-success-color {\n  color: #00c851;\n}\n\n.text-color-success-color-dark {\n  color: #007e33;\n}\n\n.text-color-warning-color {\n  color: #ffbb33;\n}\n\n.text-color-warning-color-dark {\n  color: #ff8800;\n}\n\n.text-color-danger-color {\n  color: #ff3547;\n}\n\n.text-color-danger-color-dark {\n  color: #cc0000;\n}\n\n.text-color-elegant-color {\n  color: #2e2e2e;\n}\n\n.text-color-elegant-color-dark {\n  color: #212121;\n}\n\n.text-color-stylish-color {\n  color: #4b515d;\n}\n\n.text-color-stylish-color-dark {\n  color: #3e4551;\n}\n\n.text-color-unique-color {\n  color: #3f729b;\n}\n\n.text-color-unique-color-dark {\n  color: #1c2331;\n}\n\n.text-color-special-color {\n  color: #37474f;\n}\n\n.text-color-special-color-dark {\n  color: #263238;\n}\n\n.text-color-primary {\n  color: #4285f4;\n}\n\n.text-color-danger {\n  color: #ff3547;\n}\n\n.text-color-warning {\n  color: #ffbb33;\n}\n\n.text-color-success {\n  color: #00c851;\n}\n\n.text-color-info {\n  color: #33b5e5;\n}\n\n.text-color-default {\n  color: #2bbbad;\n}\n\n.text-color-secondary {\n  color: #aa66cc;\n}\n\n.text-color-dark {\n  color: #212121;\n}\n\n.text-color-light {\n  color: #e0e0e0;\n}\n\n.text-color-grey-x {\n  color: #f9f9f9;\n}\n\n.border-color-red {\n  border-color: #f44336;\n}\n\n.border-color-pink {\n  border-color: #e91e63;\n}\n\n.border-color-purple {\n  border-color: #9c27b0;\n}\n\n.border-color-deep-purple {\n  border-color: #673ab7;\n}\n\n.border-color-indigo {\n  border-color: #3f51b5;\n}\n\n.border-color-blue {\n  border-color: #2196f3;\n}\n\n.border-color-light-blue {\n  border-color: #03a9f4;\n}\n\n.border-color-cyan {\n  border-color: #00bcd4;\n}\n\n.border-color-teal {\n  border-color: #009688;\n}\n\n.border-color-green {\n  border-color: #4caf50;\n}\n\n.border-color-light-green {\n  border-color: #8bc34a;\n}\n\n.border-color-lime {\n  border-color: #cddc39;\n}\n\n.border-color-yellow {\n  border-color: #ffeb3b;\n}\n\n.border-color-amber {\n  border-color: #ffc107;\n}\n\n.border-color-orange {\n  border-color: #ff9800;\n}\n\n.border-color-deep-orange {\n  border-color: #ff5722;\n}\n\n.border-color-brown {\n  border-color: #795548;\n}\n\n.border-color-black {\n  border-color: #000;\n}\n\n.border-color-white {\n  border-color: #fff;\n}\n\n.border-color-grey {\n  border-color: #9e9e9e;\n}\n\n.border-color-blue-grey {\n  border-color: #607d8b;\n}\n\n.border-color-primary-color-dark {\n  border-color: #0d47a1;\n}\n\n.border-color-secondary-color {\n  border-color: #aa66cc;\n}\n\n.border-color-secondary-color-dark {\n  border-color: #9933cc;\n}\n\n.border-color-default-color {\n  border-color: #2bbbad;\n}\n\n.border-color-default-color-dark {\n  border-color: #00695c;\n}\n\n.border-color-info-color {\n  border-color: #33b5e5;\n}\n\n.border-color-info-color-dark {\n  border-color: #0099cc;\n}\n\n.border-color-success-color {\n  border-color: #00c851;\n}\n\n.border-color-success-color-dark {\n  border-color: #007e33;\n}\n\n.border-color-warning-color {\n  border-color: #ffbb33;\n}\n\n.border-color-warning-color-dark {\n  border-color: #ff8800;\n}\n\n.border-color-danger-color {\n  border-color: #ff3547;\n}\n\n.border-color-danger-color-dark {\n  border-color: #cc0000;\n}\n\n.border-color-elegant-color {\n  border-color: #2e2e2e;\n}\n\n.border-color-elegant-color-dark {\n  border-color: #212121;\n}\n\n.border-color-stylish-color {\n  border-color: #4b515d;\n}\n\n.border-color-stylish-color-dark {\n  border-color: #3e4551;\n}\n\n.border-color-unique-color {\n  border-color: #3f729b;\n}\n\n.border-color-unique-color-dark {\n  border-color: #1c2331;\n}\n\n.border-color-special-color {\n  border-color: #37474f;\n}\n\n.border-color-special-color-dark {\n  border-color: #263238;\n}\n\n.border-color-primary {\n  border-color: #4285f4;\n}\n\n.border-color-danger {\n  border-color: #ff3547;\n}\n\n.border-color-warning {\n  border-color: #ffbb33;\n}\n\n.border-color-success {\n  border-color: #00c851;\n}\n\n.border-color-info {\n  border-color: #33b5e5;\n}\n\n.border-color-default {\n  border-color: #2bbbad;\n}\n\n.border-color-secondary {\n  border-color: #aa66cc;\n}\n\n.border-color-dark {\n  border-color: #212121;\n}\n\n.border-color-light {\n  border-color: #e0e0e0;\n}\n\n.border-color-grey-x {\n  border-color: #f9f9f9;\n}\n\n.bg-color-red {\n  background-color: #f44336;\n}\n\n.bg-color-pink {\n  background-color: #e91e63;\n}\n\n.bg-color-purple {\n  background-color: #9c27b0;\n}\n\n.bg-color-deep-purple {\n  background-color: #673ab7;\n}\n\n.bg-color-indigo {\n  background-color: #3f51b5;\n}\n\n.bg-color-blue {\n  background-color: #2196f3;\n}\n\n.bg-color-light-blue {\n  background-color: #03a9f4;\n}\n\n.bg-color-cyan {\n  background-color: #00bcd4;\n}\n\n.bg-color-teal {\n  background-color: #009688;\n}\n\n.bg-color-green {\n  background-color: #4caf50;\n}\n\n.bg-color-light-green {\n  background-color: #8bc34a;\n}\n\n.bg-color-lime {\n  background-color: #cddc39;\n}\n\n.bg-color-yellow {\n  background-color: #ffeb3b;\n}\n\n.bg-color-amber {\n  background-color: #ffc107;\n}\n\n.bg-color-orange {\n  background-color: #ff9800;\n}\n\n.bg-color-deep-orange {\n  background-color: #ff5722;\n}\n\n.bg-color-brown {\n  background-color: #795548;\n}\n\n.bg-color-black {\n  background-color: #000;\n}\n\n.bg-color-white {\n  background-color: #fff;\n}\n\n.bg-color-grey {\n  background-color: #9e9e9e;\n}\n\n.bg-color-blue-grey {\n  background-color: #607d8b;\n}\n\n.bg-color-primary-color-dark {\n  background-color: #0d47a1;\n}\n\n.bg-color-secondary-color {\n  background-color: #aa66cc;\n}\n\n.bg-color-secondary-color-dark {\n  background-color: #9933cc;\n}\n\n.bg-color-default-color {\n  background-color: #2bbbad;\n}\n\n.bg-color-default-color-dark {\n  background-color: #00695c;\n}\n\n.bg-color-info-color {\n  background-color: #33b5e5;\n}\n\n.bg-color-info-color-dark {\n  background-color: #0099cc;\n}\n\n.bg-color-success-color {\n  background-color: #00c851;\n}\n\n.bg-color-success-color-dark {\n  background-color: #007e33;\n}\n\n.bg-color-warning-color {\n  background-color: #ffbb33;\n}\n\n.bg-color-warning-color-dark {\n  background-color: #ff8800;\n}\n\n.bg-color-danger-color {\n  background-color: #ff3547;\n}\n\n.bg-color-danger-color-dark {\n  background-color: #cc0000;\n}\n\n.bg-color-elegant-color {\n  background-color: #2e2e2e;\n}\n\n.bg-color-elegant-color-dark {\n  background-color: #212121;\n}\n\n.bg-color-stylish-color {\n  background-color: #4b515d;\n}\n\n.bg-color-stylish-color-dark {\n  background-color: #3e4551;\n}\n\n.bg-color-unique-color {\n  background-color: #3f729b;\n}\n\n.bg-color-unique-color-dark {\n  background-color: #1c2331;\n}\n\n.bg-color-special-color {\n  background-color: #37474f;\n}\n\n.bg-color-special-color-dark {\n  background-color: #263238;\n}\n\n.bg-color-primary {\n  background-color: #4285f4;\n}\n\n.bg-color-danger {\n  background-color: #ff3547;\n}\n\n.bg-color-warning {\n  background-color: #ffbb33;\n}\n\n.bg-color-success {\n  background-color: #00c851;\n}\n\n.bg-color-info {\n  background-color: #33b5e5;\n}\n\n.bg-color-default {\n  background-color: #2bbbad;\n}\n\n.bg-color-secondary {\n  background-color: #aa66cc;\n}\n\n.bg-color-dark {\n  background-color: #212121;\n}\n\n.bg-color-light {\n  background-color: #e0e0e0;\n}\n\n.bg-color-grey-x {\n  background-color: #f9f9f9;\n}\n\n.w-25 {\n  width: 25;\n}\n\n.w-50 {\n  width: 50;\n}\n\n.w-55 {\n  width: 55;\n}\n\n.w-60 {\n  width: 60;\n}\n\n.w-65 {\n  width: 65;\n}\n\n.w-70 {\n  width: 70;\n}\n\n.w-75 {\n  width: 75;\n}\n\n.w-80 {\n  width: 80;\n}\n\n.w-85 {\n  width: 85;\n}\n\n.w-90 {\n  width: 90;\n}\n\n.w-95 {\n  width: 95;\n}\n\n.w-100 {\n  width: 100;\n}\n\n.text-xs {\n  font-size: 0.75rem;\n}\n\n.text-sm {\n  font-size: 0.875rem;\n}\n\n.text-base {\n  font-size: 1rem;\n}\n\n.text-lg {\n  font-size: 1.125rem;\n}\n\n.text-xl {\n  font-size: 1.25rem;\n}\n\n.text-2xl {\n  font-size: 1.5rem;\n}\n\n.text-3xl {\n  font-size: 1.875rem;\n}\n\n.text-4xl {\n  font-size: 2.25rem;\n}\n\n.text-5xl {\n  font-size: 3rem;\n}\n\n.text-6xl {\n  font-size: 4rem;\n}\n\nbody.neo-scroll {\n  overflow: hidden;\n}\n\ninput:focus, select:focus, textarea:focus, option:focus {\n  border: 1px solid #aaaaaa;\n  outline: none;\n}\n\n.alert {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n}\n\n.alert-heading {\n  color: inherit;\n}\n\n.alert-link {\n  font-weight: bold;\n}\n\n.alert-dismissible {\n  padding-right: 4rem;\n}\n.alert-dismissible .close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 0.75rem 1.25rem;\n  color: inherit;\n}\n\n.alert-primary {\n  color: #0a54c0;\n  background-color: #e2eeff;\n  border-color: #bbd6fe;\n}\n.alert-primary .alert-link {\n  color: #073f90;\n}\n\n.alert-secondary {\n  color: #52595f;\n  background-color: #edeeef;\n  border-color: #d6d8db;\n}\n.alert-secondary .alert-link {\n  color: #3a3f44;\n}\n\n.alert-success {\n  color: #1e7f34;\n  background-color: #e5f4e9;\n  border-color: #c3e6cb;\n}\n.alert-success .alert-link {\n  color: #145623;\n}\n\n.alert-info {\n  color: #117b8c;\n  background-color: #e3f4f6;\n  border-color: #bee5eb;\n}\n.alert-info .alert-link {\n  color: #0b535f;\n}\n\n.alert-warning {\n  color: #c29305;\n  background-color: #fff8e1;\n  border-color: #ffeeba;\n}\n.alert-warning .alert-link {\n  color: #906d04;\n}\n\n.alert-danger {\n  color: #a72834;\n  background-color: #fbe7e9;\n  border-color: #f5c6cb;\n}\n.alert-danger .alert-link {\n  color: #7e1e27;\n}\n\n.alert-light {\n  color: #bcbdbe;\n  background-color: #fefefe;\n  border-color: #fdfdfe;\n}\n.alert-light .alert-link {\n  color: #a2a4a5;\n}\n\n.alert-dark {\n  color: #282c31;\n  background-color: #e7e7e8;\n  border-color: #c6c8ca;\n}\n.alert-dark .alert-link {\n  color: #111315;\n}\n\n:root {\n  --animate-duration: 1s;\n  --animate-delay: 1s;\n  --animate-loop: 1;\n}\n\n.animated {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n}\n.animated.infinite {\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n.animated.faster {\n  animation-duration: calc($--animate-duration / 2);\n}\n.animated.fast {\n  animation-duration: calc($--animate-duration * 0.8);\n}\n.animated.slow {\n  animation-duration: calc($--animate-duration * 2);\n}\n.animated.slower {\n  animation-duration: calc($--animate-duration * 3);\n}\n.animated.loop-1 {\n  animation-iteration-count: 1;\n}\n.animated.delay-1s {\n  animation-delay: calc($--animate-delay * $i);\n}\n.animated.loop-2 {\n  animation-iteration-count: 2;\n}\n.animated.delay-1s {\n  animation-delay: calc($--animate-delay * $i);\n}\n.animated.loop-3 {\n  animation-iteration-count: 3;\n}\n.animated.delay-1s {\n  animation-delay: calc($--animate-delay * $i);\n}\n.animated.loop-4 {\n  animation-iteration-count: 4;\n}\n.animated.delay-1s {\n  animation-delay: calc($--animate-delay * $i);\n}\n\n@media print, (prefers-reduced-motion: reduce) {\n  .animated {\n    animation-duration: 1ms !important;\n    transition-duration: 1ms !important;\n    animation-iteration-count: 1 !important;\n  }\n\n  .animated[class*=Out] {\n    opacity: 0;\n  }\n}\n.animated-initial {\n  animation-name: initial !important;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@keyframes pulse {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n  50% {\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n.pulse {\n  animation-name: pulse;\n  animation-timing-function: ease-in-out;\n}\n\n@keyframes tada {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n  10%, 20% {\n    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n  }\n  30%, 50%, 70%, 90% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n  40%, 60%, 80% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n.tada {\n  animation-name: tada;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n@keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.fadeInLeft {\n  animation-name: fadeInLeft;\n}\n\n@keyframes fadeInRight {\n  from {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.fadeInRight {\n  animation-name: fadeInRight;\n}\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.fadeInUp {\n  animation-name: fadeInUp;\n}\n\n@keyframes rotateOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n}\n.rotateOut {\n  animation-name: rotateOut;\n  transform-origin: center;\n}\n\n.rotate-circle {\n  animation: rotateCircle 9s infinite;\n}\n\n/*\n Custom Animations\n */\n@keyframes rotateCircle {\n  0% {\n    transform: rotate(0deg);\n  }\n  25% {\n    transform: rotate(90deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(270deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes jackInTheBox {\n  from {\n    opacity: 0;\n    transform: scale(0.1) rotate(30deg);\n    transform-origin: center bottom;\n  }\n  50% {\n    transform: rotate(-10deg);\n  }\n  70% {\n    transform: rotate(3deg);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.jackInTheBox {\n  animation-name: jackInTheBox;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@keyframes rollIn {\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.rollIn {\n  animation-name: rollIn;\n}\n\n@keyframes zoomIn {\n  from {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n  50% {\n    opacity: 1;\n  }\n}\n.zoomIn {\n  animation-name: zoomIn;\n}\n\n@keyframes slideInDown {\n  from {\n    transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.slideInDown {\n  animation-name: slideInDown;\n}\n\n@keyframes float {\n  0% {\n    transform: translateY(0px);\n    -webkit-transition: translateY(0px);\n  }\n  50% {\n    transform: translateY(-6px);\n    -webkit-transition: translateY(-6px);\n  }\n  100% {\n    transform: translateY(0px);\n    -webkit-transition: translateY(0px);\n  }\n}\n.purple-gradient {\n  background: -moz-linear-gradient(40deg, #ff6ec4, #7873f5) !important;\n  background: -webkit-linear-gradient(40deg, #ff6ec4, #7873f5) !important;\n  background: -o-linear-gradient(40deg, #ff6ec4, #7873f5) !important;\n  background: -ms-linear-gradient(40deg, #ff6ec4, #7873f5) !important;\n  background: linear-gradient(40deg, #ff6ec4, #7873f5) !important;\n}\n\n.peach-gradient {\n  background: -moz-linear-gradient(40deg, #ffd86f, #fc6262) !important;\n  background: -webkit-linear-gradient(40deg, #ffd86f, #fc6262) !important;\n  background: -o-linear-gradient(40deg, #ffd86f, #fc6262) !important;\n  background: -ms-linear-gradient(40deg, #ffd86f, #fc6262) !important;\n  background: linear-gradient(40deg, #ffd86f, #fc6262) !important;\n}\n\n.aqua-gradient {\n  background: -moz-linear-gradient(40deg, #2096ff, #05ffa3) !important;\n  background: -webkit-linear-gradient(40deg, #2096ff, #05ffa3) !important;\n  background: -o-linear-gradient(40deg, #2096ff, #05ffa3) !important;\n  background: -ms-linear-gradient(40deg, #2096ff, #05ffa3) !important;\n  background: linear-gradient(40deg, #2096ff, #05ffa3) !important;\n}\n\n.blue-gradient {\n  background: -moz-linear-gradient(40deg, #45cafc, #303f9f) !important;\n  background: -webkit-linear-gradient(40deg, #45cafc, #303f9f) !important;\n  background: -o-linear-gradient(40deg, #45cafc, #303f9f) !important;\n  background: -ms-linear-gradient(40deg, #45cafc, #303f9f) !important;\n  background: linear-gradient(40deg, #45cafc, #303f9f) !important;\n}\n\n.home-page-gradient {\n  background: -moz-linear-gradient(40deg, #e1fefa, #fcf7f4) !important;\n  background: -webkit-linear-gradient(40deg, #e1fefa, #fcf7f4) !important;\n  background: -o-linear-gradient(40deg, #e1fefa, #fcf7f4) !important;\n  background: -ms-linear-gradient(40deg, #e1fefa, #fcf7f4) !important;\n  background: linear-gradient(40deg, #e1fefa, #fcf7f4) !important;\n}\n\n.purple-gradient-rgba {\n  background: -moz-linear-gradient(40deg, rgba(255, 110, 196, 0.9), rgba(120, 115, 245, 0.9)) !important;\n  background: -webkit-linear-gradient(40deg, rgba(255, 110, 196, 0.9), rgba(120, 115, 245, 0.9)) !important;\n  background: -o-linear-gradient(40deg, rgba(255, 110, 196, 0.9), rgba(120, 115, 245, 0.9)) !important;\n  background: -ms-linear-gradient(40deg, rgba(255, 110, 196, 0.9), rgba(120, 115, 245, 0.9)) !important;\n  background: linear-gradient(40deg, rgba(255, 110, 196, 0.9), rgba(120, 115, 245, 0.9)) !important;\n}\n\n.peach-gradient-rgba {\n  background: -moz-linear-gradient(40deg, rgba(255, 216, 111, 0.9), rgba(252, 98, 98, 0.9)) !important;\n  background: -webkit-linear-gradient(40deg, rgba(255, 216, 111, 0.9), rgba(252, 98, 98, 0.9)) !important;\n  background: -o-linear-gradient(40deg, rgba(255, 216, 111, 0.9), rgba(252, 98, 98, 0.9)) !important;\n  background: -ms-linear-gradient(40deg, rgba(255, 216, 111, 0.9), rgba(252, 98, 98, 0.9)) !important;\n  background: linear-gradient(40deg, rgba(255, 216, 111, 0.9), rgba(252, 98, 98, 0.9)) !important;\n}\n\n.aqua-gradient-rgba {\n  background: -moz-linear-gradient(40deg, rgba(32, 150, 255, 0.9), rgba(5, 255, 163, 0.9)) !important;\n  background: -webkit-linear-gradient(40deg, rgba(32, 150, 255, 0.9), rgba(5, 255, 163, 0.9)) !important;\n  background: -o-linear-gradient(40deg, rgba(32, 150, 255, 0.9), rgba(5, 255, 163, 0.9)) !important;\n  background: -ms-linear-gradient(40deg, rgba(32, 150, 255, 0.9), rgba(5, 255, 163, 0.9)) !important;\n  background: linear-gradient(40deg, rgba(32, 150, 255, 0.9), rgba(5, 255, 163, 0.9)) !important;\n}\n\n.blue-gradient-rgba {\n  background: -moz-linear-gradient(40deg, rgba(69, 202, 252, 0.9), rgba(48, 63, 159, 0.9)) !important;\n  background: -webkit-linear-gradient(40deg, rgba(69, 202, 252, 0.9), rgba(48, 63, 159, 0.9)) !important;\n  background: -o-linear-gradient(40deg, rgba(69, 202, 252, 0.9), rgba(48, 63, 159, 0.9)) !important;\n  background: -ms-linear-gradient(40deg, rgba(69, 202, 252, 0.9), rgba(48, 63, 159, 0.9)) !important;\n  background: linear-gradient(40deg, rgba(69, 202, 252, 0.9), rgba(48, 63, 159, 0.9)) !important;\n}\n\n.bg-gradient-purple {\n  background: -moz-linear-gradient(131.93deg, #ff6ec4, #7873f5) !important;\n  background: -webkit-linear-gradient(131.93deg, #ff6ec4, #7873f5) !important;\n  background: -o-linear-gradient(131.93deg, #ff6ec4, #7873f5) !important;\n  background: -ms-linear-gradient(131.93deg, #ff6ec4, #7873f5) !important;\n  background: linear-gradient(131.93deg, #ff6ec4, #7873f5) !important;\n}\n\n.bg-gradient-peach {\n  background: -moz-linear-gradient(131.93deg, #ffd86f, #fc6262) !important;\n  background: -webkit-linear-gradient(131.93deg, #ffd86f, #fc6262) !important;\n  background: -o-linear-gradient(131.93deg, #ffd86f, #fc6262) !important;\n  background: -ms-linear-gradient(131.93deg, #ffd86f, #fc6262) !important;\n  background: linear-gradient(131.93deg, #ffd86f, #fc6262) !important;\n}\n\n.bg-gradient-aqua {\n  background: -moz-linear-gradient(131.93deg, #2096ff, #05ffa3) !important;\n  background: -webkit-linear-gradient(131.93deg, #2096ff, #05ffa3) !important;\n  background: -o-linear-gradient(131.93deg, #2096ff, #05ffa3) !important;\n  background: -ms-linear-gradient(131.93deg, #2096ff, #05ffa3) !important;\n  background: linear-gradient(131.93deg, #2096ff, #05ffa3) !important;\n}\n\n.bg-gradient-blue {\n  background: -moz-linear-gradient(131.93deg, #45cafc, #303f9f) !important;\n  background: -webkit-linear-gradient(131.93deg, #45cafc, #303f9f) !important;\n  background: -o-linear-gradient(131.93deg, #45cafc, #303f9f) !important;\n  background: -ms-linear-gradient(131.93deg, #45cafc, #303f9f) !important;\n  background: linear-gradient(131.93deg, #45cafc, #303f9f) !important;\n}\n\n.bg-gradient-home-page {\n  background: -moz-linear-gradient(131.93deg, #e1fefa, #fcf7f4) !important;\n  background: -webkit-linear-gradient(131.93deg, #e1fefa, #fcf7f4) !important;\n  background: -o-linear-gradient(131.93deg, #e1fefa, #fcf7f4) !important;\n  background: -ms-linear-gradient(131.93deg, #e1fefa, #fcf7f4) !important;\n  background: linear-gradient(131.93deg, #e1fefa, #fcf7f4) !important;\n}\n\n@font-face {\n  font-family: \"HERO Icons\";\n  src: url(/font/IconFont/webfont.eot?v=1.4.57);\n  src: url(/font/IconFont/webfont.eot?#iefix&v=1.4.57) format(\"embedded-opentype\"), url(/font/IconFont/webfont.woff2?v=1.4.57) format(\"woff2\"), url(/font/IconFont/webfont.woff?v=1.4.57) format(\"woff\"), url(/font/IconFont/webfont.ttf?v=1.4.57) format(\"truetype\"), url(/font/IconFont/webfont.svg?v=1.4.57) format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\ni.hero-icon {\n  display: inline-block;\n  width: 32px;\n  height: 24px;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  line-height: 24px;\n}\ni.hero-icon:before {\n  font-size: 24px;\n  display: inline-block;\n  font: normal normal normal 24px/1 \"HERO Icons\";\n  font-size: inherit;\n  text-rendering: auto;\n  line-height: inherit;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\ni.hero-icon.hero-account-group-outline::before {\n  content: \"\\F0B58\";\n}\ni.hero-icon.hero-account-search-outline::before {\n  content: \"\\F0935\";\n}\ni.hero-icon.hero-account-tie-outline::before {\n  content: \"\\F10CA\";\n}\ni.hero-icon.hero-airport::before {\n  content: \"\\F084B\";\n}\ni.hero-icon.hero-arrow-down-bold-box-outline::before {\n  content: \"\\F0730\";\n}\ni.hero-icon.hero-arrow-up-bold-box-outline::before {\n  content: \"\\F0739\";\n}\ni.hero-icon.hero-arrow-up-box::before {\n  content: \"\\F06C3\";\n}\ni.hero-icon.hero-auto-fix::before {\n  content: \"\\F0068\";\n}\ni.hero-icon.hero-auto-upload::before {\n  content: \"\\F0069\";\n}\ni.hero-icon.hero-ballot-recount-outline::before {\n  content: \"\\F0C3A\";\n}\ni.hero-icon.hero-calendar-check-outline::before {\n  content: \"\\F0C44\";\n}\ni.hero-icon.hero-calendar-month::before {\n  content: \"\\F0E17\";\n}\ni.hero-icon.hero-call-made::before {\n  content: \"\\F00F7\";\n}\ni.hero-icon.hero-card-account-mail-outline::before {\n  content: \"\\F0E98\";\n}\ni.hero-icon.hero-cart-plus::before {\n  content: \"\\F0112\";\n}\ni.hero-icon.hero-cellphone::before {\n  content: \"\\F011C\";\n}\ni.hero-icon.hero-cellphone-cog::before {\n  content: \"\\F0951\";\n}\ni.hero-icon.hero-cellphone-message::before {\n  content: \"\\F08D3\";\n}\ni.hero-icon.hero-cellphone-nfc::before {\n  content: \"\\F0E90\";\n}\ni.hero-icon.hero-certificate-outline::before {\n  content: \"\\F1188\";\n}\ni.hero-icon.hero-check-circle::before {\n  content: \"\\F05E0\";\n}\ni.hero-icon.hero-check-circle-outline::before {\n  content: \"\\F05E1\";\n}\ni.hero-icon.hero-clippy::before {\n  content: \"\\F014F\";\n}\ni.hero-icon.hero-clock-check-outline::before {\n  content: \"\\F0FA9\";\n}\ni.hero-icon.hero-clock-outline::before {\n  content: \"\\F0150\";\n}\ni.hero-icon.hero-clock-start::before {\n  content: \"\\F0155\";\n}\ni.hero-icon.hero-cloud-download-outline::before {\n  content: \"\\F0B7D\";\n}\ni.hero-icon.hero-creation::before {\n  content: \"\\F0674\";\n}\ni.hero-icon.hero-email-edit-outline::before {\n  content: \"\\F0EE4\";\n}\ni.hero-icon.hero-emoticon::before {\n  content: \"\\F0C68\";\n}\ni.hero-icon.hero-emoticon-angry::before {\n  content: \"\\F0C69\";\n}\ni.hero-icon.hero-emoticon-angry-outline::before {\n  content: \"\\F0C6A\";\n}\ni.hero-icon.hero-emoticon-confused::before {\n  content: \"\\F10DE\";\n}\ni.hero-icon.hero-emoticon-confused-outline::before {\n  content: \"\\F10DF\";\n}\ni.hero-icon.hero-emoticon-cool::before {\n  content: \"\\F0C6B\";\n}\ni.hero-icon.hero-emoticon-cool-outline::before {\n  content: \"\\F01F3\";\n}\ni.hero-icon.hero-emoticon-cry::before {\n  content: \"\\F0C6C\";\n}\ni.hero-icon.hero-emoticon-cry-outline::before {\n  content: \"\\F0C6D\";\n}\ni.hero-icon.hero-emoticon-dead::before {\n  content: \"\\F0C6E\";\n}\ni.hero-icon.hero-emoticon-dead-outline::before {\n  content: \"\\F069B\";\n}\ni.hero-icon.hero-emoticon-devil::before {\n  content: \"\\F0C6F\";\n}\ni.hero-icon.hero-emoticon-devil-outline::before {\n  content: \"\\F01F4\";\n}\ni.hero-icon.hero-emoticon-excited::before {\n  content: \"\\F0C70\";\n}\ni.hero-icon.hero-emoticon-excited-outline::before {\n  content: \"\\F069C\";\n}\ni.hero-icon.hero-emoticon-frown::before {\n  content: \"\\F0F4C\";\n}\ni.hero-icon.hero-emoticon-frown-outline::before {\n  content: \"\\F0F4D\";\n}\ni.hero-icon.hero-emoticon-happy::before {\n  content: \"\\F0C71\";\n}\ni.hero-icon.hero-emoticon-happy-outline::before {\n  content: \"\\F01F5\";\n}\ni.hero-icon.hero-emoticon-kiss::before {\n  content: \"\\F0C72\";\n}\ni.hero-icon.hero-emoticon-kiss-outline::before {\n  content: \"\\F0C73\";\n}\ni.hero-icon.hero-emoticon-lol::before {\n  content: \"\\F1214\";\n}\ni.hero-icon.hero-emoticon-lol-outline::before {\n  content: \"\\F1215\";\n}\ni.hero-icon.hero-emoticon-neutral::before {\n  content: \"\\F0C74\";\n}\ni.hero-icon.hero-emoticon-neutral-outline::before {\n  content: \"\\F01F6\";\n}\ni.hero-icon.hero-emoticon-outline::before {\n  content: \"\\F01F2\";\n}\ni.hero-icon.hero-emoticon-poop::before {\n  content: \"\\F01F7\";\n}\ni.hero-icon.hero-emoticon-poop-outline::before {\n  content: \"\\F0C75\";\n}\ni.hero-icon.hero-emoticon-sad::before {\n  content: \"\\F0C76\";\n}\ni.hero-icon.hero-emoticon-sad-outline::before {\n  content: \"\\F01F8\";\n}\ni.hero-icon.hero-emoticon-tongue::before {\n  content: \"\\F01F9\";\n}\ni.hero-icon.hero-emoticon-tongue-outline::before {\n  content: \"\\F0C77\";\n}\ni.hero-icon.hero-emoticon-wink::before {\n  content: \"\\F0C78\";\n}\ni.hero-icon.hero-emoticon-wink-outline::before {\n  content: \"\\F0C79\";\n}\ni.hero-icon.hero-file::before {\n  content: \"\\F0214\";\n}\ni.hero-icon.hero-file-cloud-outline::before {\n  content: \"\\F102A\";\n}\ni.hero-icon.hero-form-select::before {\n  content: \"\\F1401\";\n}\ni.hero-icon.hero-format-list-text::before {\n  content: \"\\F126F\";\n}\ni.hero-icon.hero-google-ads::before {\n  content: \"\\F0C87\";\n}\ni.hero-icon.hero-hand-okay::before {\n  content: \"\\F0A50\";\n}\ni.hero-icon.hero-hand-pointing-right::before {\n  content: \"\\F02C7\";\n}\ni.hero-icon.hero-headset::before {\n  content: \"\\F02CE\";\n}\ni.hero-icon.hero-heart-multiple-outline::before {\n  content: \"\\F0A57\";\n}\ni.hero-icon.hero-home-map-marker::before {\n  content: \"\\F05F8\";\n}\ni.hero-icon.hero-human-male-child::before {\n  content: \"\\F138C\";\n}\ni.hero-icon.hero-laptop::before {\n  content: \"\\F0322\";\n}\ni.hero-icon.hero-message-cog-outline::before {\n  content: \"\\F1172\";\n}\ni.hero-icon.hero-message-text-outline::before {\n  content: \"\\F036A\";\n}\ni.hero-icon.hero-mouse::before {\n  content: \"\\F037D\";\n}\ni.hero-icon.hero-mouse-bluetooth::before {\n  content: \"\\F098B\";\n}\ni.hero-icon.hero-mouse-off::before {\n  content: \"\\F037E\";\n}\ni.hero-icon.hero-mouse-variant::before {\n  content: \"\\F037F\";\n}\ni.hero-icon.hero-mouse-variant-off::before {\n  content: \"\\F0380\";\n}\ni.hero-icon.hero-newspaper-variant-multiple-outline::before {\n  content: \"\\F1003\";\n}\ni.hero-icon.hero-newspaper-variant-outline::before {\n  content: \"\\F1004\";\n}\ni.hero-icon.hero-phone-in-talk-outline::before {\n  content: \"\\F1182\";\n}\ni.hero-icon.hero-plus-outline::before {\n  content: \"\\F0705\";\n}\ni.hero-icon.hero-responsive::before {\n  content: \"\\F045E\";\n}\ni.hero-icon.hero-select::before {\n  content: \"\\F0485\";\n}\ni.hero-icon.hero-selection-search::before {\n  content: \"\\F1205\";\n}\ni.hero-icon.hero-send::before {\n  content: \"\\F048A\";\n}\ni.hero-icon.hero-send-check-outline::before {\n  content: \"\\F1162\";\n}\ni.hero-icon.hero-send-outline::before {\n  content: \"\\F1165\";\n}\ni.hero-icon.hero-share-all-outline::before {\n  content: \"\\F11F5\";\n}\ni.hero-icon.hero-star-box-multiple-outline::before {\n  content: \"\\F1287\";\n}\ni.hero-icon.hero-sticker-emoji::before {\n  content: \"\\F0785\";\n}\ni.hero-icon.hero-tablet-ipad::before {\n  content: \"\\F04F8\";\n}\ni.hero-icon.hero-television-clean::before {\n  content: \"\\F1110\";\n}\ni.hero-icon.hero-update::before {\n  content: \"\\F06B0\";\n}\ni.hero-icon.hero-zodiac-taurus::before {\n  content: \"\\F0A87\";\n}\ni.hero-icon.hero-zodiac-virgo::before {\n  content: \"\\F0A88\";\n}\n\n.blocker {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  z-index: 99;\n  padding: 20px;\n  box-sizing: border-box;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.75);\n  text-align: center;\n}\n.blocker:before {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n  margin-right: -0.05em;\n}\n.blocker.behind {\n  background-color: transparent;\n}\n\n.modal {\n  display: none;\n  vertical-align: middle;\n  position: relative;\n  z-index: 2;\n  max-width: 500px;\n  box-sizing: border-box;\n  width: 90%;\n  background: #fff;\n  padding: 15px 30px;\n  -webkit-border-radius: 8px;\n  -moz-border-radius: 8px;\n  -o-border-radius: 8px;\n  -ms-border-radius: 8px;\n  border-radius: 8px;\n  -webkit-box-shadow: 0 0 10px #000;\n  -moz-box-shadow: 0 0 10px #000;\n  -o-box-shadow: 0 0 10px #000;\n  -ms-box-shadow: 0 0 10px #000;\n  box-shadow: 0 0 10px #000;\n  text-align: left;\n}\n.modal a.close-modal {\n  position: absolute;\n  top: -12.5px;\n  right: -12.5px;\n  display: block;\n  width: 30px;\n  height: 30px;\n  text-indent: -9999px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAA3hJREFUaAXlm8+K00Acx7MiCIJH/yw+gA9g25O49SL4AO3Bp1jw5NvktC+wF88qevK4BU97EmzxUBCEolK/n5gp3W6TTJPfpNPNF37MNsl85/vN/DaTmU6PknC4K+pniqeKJ3k8UnkvDxXJzzy+q/yaxxeVHxW/FNHjgRSeKt4rFoplzaAuHHDBGR2eS9G54reirsmienDCTRt7xwsp+KAoEmt9nLaGitZxrBbPFNaGfPloGw2t4JVamSt8xYW6Dg1oCYo3Yv+rCGViV160oMkcd8SYKnYV1Nb1aEOjCe6L5ZOiLfF120EjWhuBu3YIZt1NQmujnk5F4MgOpURzLfAwOBSTmzp3fpDxuI/pabxpqOoz2r2HLAb0GMbZKlNV5/Hg9XJypguryA7lPF5KMdTZQzHjqxNPhWhzIuAruOl1eNqKEx1tSh5rfbxdw7mOxCq4qS68ZTjKS1YVvilu559vWvFHhh4rZrdyZ69Vmpgdj8fJbDZLJpNJ0uv1cnr/gjrUhQMuI+ANjyuwftQ0bbL6Erp0mM/ny8Fg4M3LtdRxgMtKl3jwmIHVxYXChFy94/Rmpa/pTbNUhstKV+4Rr8lLQ9KlUvJKLyG8yvQ2s9SBy1Jb7jV5a0yapfF6apaZLjLLcWtd4sNrmJUMHyM+1xibTjH82Zh01TNlhsrOhdKTe00uAzZQmN6+KW+sDa/JD2PSVQ873m29yf+1Q9VDzfEYlHi1G5LKBBWZbtEsHbFwb1oYDwr1ZiF/2bnCSg1OBE/pfr9/bWx26UxJL3ONPISOLKUvQza0LZUxSKyjpdTGa/vDEr25rddbMM0Q3O6Lx3rqFvU+x6UrRKQY7tyrZecmD9FODy8uLizTmilwNj0kraNcAJhOp5aGVwsAGD5VmJBrWWbJSgWT9zrzWepQF47RaGSiKfeGx6Szi3gzmX/HHbihwBser4B9UJYpFBNX4R6vTn3VQnez0SymnrHQMsRYGTr1dSk34ljRqS/EMd2pLQ8YBp3a1PLfcqCpo8gtHkZFHKkTX6fs3MY0blKnth66rKCnU0VRGu37ONrQaA4eZDFtWAu2fXj9zjFkxTBOo8F7t926gTp/83Kyzzcy2kZD6xiqxTYnHLRFm3vHiRSwNSjkz3hoIzo8lCKWUlg/YtGs7tObunDAZfpDLbfEI15zsEIY3U/x/gHHc/G1zltnAgAAAABJRU5ErkJggg==\");\n}\n\n.modal-spinner {\n  display: none;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translateY(-50%) translateX(-50%);\n  padding: 12px 16px;\n  border-radius: 5px;\n  background-color: #111;\n  height: 20px;\n}\n.modal-spinner > div {\n  border-radius: 100px;\n  background-color: #fff;\n  height: 20px;\n  width: 2px;\n  margin: 0 1px;\n  display: inline-block;\n  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n  animation: sk-stretchdelay 1.2s infinite ease-in-out;\n}\n.modal-spinner .rect2 {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s;\n}\n.modal-spinner .rect3 {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n.modal-spinner .rect4 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n\n@-webkit-keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    -webkit-transform: scaleY(0.5);\n  }\n  20% {\n    -webkit-transform: scaleY(1);\n  }\n}\n@keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    transform: scaleY(0.5);\n    -webkit-transform: scaleY(0.5);\n  }\n  20% {\n    transform: scaleY(1);\n    -webkit-transform: scaleY(1);\n  }\n}\n#ui-datepicker-div {\n  z-index: 1000 !important;\n}\n\n.ui-timepicker-wrapper {\n  overflow-y: auto;\n  max-height: 150px;\n  width: 6.5em;\n  background: #fff;\n  border: 1px solid #ddd;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  -moz-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  outline: none;\n  z-index: 10052;\n  margin: 0;\n}\n\n.ui-timepicker-wrapper.ui-timepicker-with-duration {\n  width: 13em;\n}\n\n.ui-timepicker-wrapper.ui-timepicker-with-duration.ui-timepicker-step-30,\n.ui-timepicker-wrapper.ui-timepicker-with-duration.ui-timepicker-step-60 {\n  width: 11em;\n}\n\n.ui-timepicker-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.ui-timepicker-duration {\n  margin-left: 5px;\n  color: #888;\n}\n\n.ui-timepicker-list:hover .ui-timepicker-duration {\n  color: #888;\n}\n\n.ui-timepicker-list li {\n  padding: 3px 0 3px 5px;\n  cursor: pointer;\n  white-space: nowrap;\n  color: #000;\n  list-style: none;\n  margin: 0;\n}\n\n.ui-timepicker-list:hover .ui-timepicker-selected {\n  background: #fff;\n  color: #000;\n}\n\nli.ui-timepicker-selected,\n.ui-timepicker-list li:hover,\n.ui-timepicker-list .ui-timepicker-selected:hover {\n  background: #1980EC;\n  color: #fff;\n}\n\nli.ui-timepicker-selected .ui-timepicker-duration,\n.ui-timepicker-list li:hover .ui-timepicker-duration {\n  color: #ccc;\n}\n\n.ui-timepicker-list li.ui-timepicker-disabled,\n.ui-timepicker-list li.ui-timepicker-disabled:hover,\n.ui-timepicker-list li.ui-timepicker-selected.ui-timepicker-disabled {\n  color: #888;\n  cursor: default;\n}\n\n.ui-timepicker-list li.ui-timepicker-disabled:hover,\n.ui-timepicker-list li.ui-timepicker-selected.ui-timepicker-disabled {\n  background: #f2f2f2;\n}\n\n.ui-datepicker.ui-widget.ui-widget-content {\n  background-color: #fff;\n}\n\n.ui-timepicker-wrapper {\n  overflow-y: auto;\n  max-height: 150px;\n  width: 6.5em;\n  background: #fff;\n  border: 1px solid #ddd;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  -moz-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  outline: none;\n  z-index: 10052;\n  margin: 0;\n}\n\n.ui-timepicker-wrapper.ui-timepicker-with-duration {\n  width: 13em;\n}\n\n.ui-timepicker-wrapper.ui-timepicker-with-duration.ui-timepicker-step-30,\n.ui-timepicker-wrapper.ui-timepicker-with-duration.ui-timepicker-step-60 {\n  width: 11em;\n}\n\n.ui-timepicker-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.ui-timepicker-duration {\n  margin-left: 5px;\n  color: #888;\n}\n\n.ui-timepicker-list:hover .ui-timepicker-duration {\n  color: #888;\n}\n\n.ui-timepicker-list li {\n  padding: 3px 0 3px 5px;\n  cursor: pointer;\n  white-space: nowrap;\n  color: #000;\n  list-style: none;\n  margin: 0;\n}\n\n.ui-timepicker-list:hover .ui-timepicker-selected {\n  background: #fff;\n  color: #000;\n}\n\nli.ui-timepicker-selected,\n.ui-timepicker-list li:hover,\n.ui-timepicker-list .ui-timepicker-selected:hover {\n  background: #1980EC;\n  color: #fff;\n}\n\nli.ui-timepicker-selected .ui-timepicker-duration,\n.ui-timepicker-list li:hover .ui-timepicker-duration {\n  color: #ccc;\n}\n\n.ui-timepicker-list li.ui-timepicker-disabled,\n.ui-timepicker-list li.ui-timepicker-disabled:hover,\n.ui-timepicker-list li.ui-timepicker-selected.ui-timepicker-disabled {\n  color: #888;\n  cursor: default;\n}\n\n.ui-timepicker-list li.ui-timepicker-disabled:hover,\n.ui-timepicker-list li.ui-timepicker-selected.ui-timepicker-disabled {\n  background: #f2f2f2;\n}\n\n/*! jQuery UI - v1.12.1 - 2016-09-14\n* http://jqueryui.com\n* Includes: core.css, accordion.css, autocomplete.css, menu.css, button.css, controlgroup.css, checkboxradio.css, datepicker.css, dialog.css, draggable.css, resizable.css, progressbar.css, selectable.css, selectmenu.css, slider.css, sortable.css, spinner.css, tabs.css, tooltip.css, theme.css\n* To view and modify this theme, visit http://jqueryui.com/themeroller/?ffDefault=Arial%2CHelvetica%2Csans-serif&fsDefault=1em&fwDefault=normal&cornerRadius=3px&bgColorHeader=e9e9e9&bgTextureHeader=flat&borderColorHeader=dddddd&fcHeader=333333&iconColorHeader=444444&bgColorContent=ffffff&bgTextureContent=flat&borderColorContent=dddddd&fcContent=333333&iconColorContent=444444&bgColorDefault=f6f6f6&bgTextureDefault=flat&borderColorDefault=c5c5c5&fcDefault=454545&iconColorDefault=777777&bgColorHover=ededed&bgTextureHover=flat&borderColorHover=cccccc&fcHover=2b2b2b&iconColorHover=555555&bgColorActive=007fff&bgTextureActive=flat&borderColorActive=003eff&fcActive=ffffff&iconColorActive=ffffff&bgColorHighlight=fffa90&bgTextureHighlight=flat&borderColorHighlight=dad55e&fcHighlight=777620&iconColorHighlight=777620&bgColorError=fddfdf&bgTextureError=flat&borderColorError=f1a899&fcError=5f3f3f&iconColorError=cc0000&bgColorOverlay=aaaaaa&bgTextureOverlay=flat&bgImgOpacityOverlay=0&opacityOverlay=30&bgColorShadow=666666&bgTextureShadow=flat&bgImgOpacityShadow=0&opacityShadow=30&thicknessShadow=5px&offsetTopShadow=0px&offsetLeftShadow=0px&cornerRadiusShadow=8px\n* Copyright jQuery Foundation and other contributors; Licensed MIT */\n/* Layout helpers\n----------------------------------*/\n.ui-helper-hidden {\n  display: none;\n}\n\n.ui-helper-hidden-accessible {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.ui-helper-reset {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  line-height: 1.3;\n  text-decoration: none;\n  font-size: 100%;\n  list-style: none;\n}\n\n.ui-helper-clearfix:before,\n.ui-helper-clearfix:after {\n  content: \"\";\n  display: table;\n  border-collapse: collapse;\n}\n\n.ui-helper-clearfix:after {\n  clear: both;\n}\n\n.ui-helper-zfix {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n  opacity: 0;\n  filter: Alpha(Opacity=0);\n  /* support: IE8 */\n}\n\n.ui-front {\n  z-index: 100;\n}\n\n/* Interaction Cues\n----------------------------------*/\n.ui-state-disabled {\n  cursor: default !important;\n  pointer-events: none;\n}\n\n/* Icons\n----------------------------------*/\n.ui-icon {\n  display: inline-block;\n  vertical-align: middle;\n  margin-top: -0.25em;\n  position: relative;\n  text-indent: -99999px;\n  overflow: hidden;\n  background-repeat: no-repeat;\n}\n\n.ui-widget-icon-block {\n  left: 50%;\n  margin-left: -8px;\n  display: block;\n}\n\n/* Misc visuals\n----------------------------------*/\n/* Overlays */\n.ui-widget-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.ui-accordion .ui-accordion-header {\n  display: block;\n  cursor: pointer;\n  position: relative;\n  margin: 2px 0 0 0;\n  padding: 0.5em 0.5em 0.5em 0.7em;\n  font-size: 100%;\n}\n\n.ui-accordion .ui-accordion-content {\n  padding: 1em 2.2em;\n  border-top: 0;\n  overflow: auto;\n}\n\n.ui-autocomplete {\n  position: absolute;\n  top: 0;\n  left: 0;\n  cursor: default;\n}\n\n.ui-menu {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: block;\n  outline: 0;\n}\n\n.ui-menu .ui-menu {\n  position: absolute;\n}\n\n.ui-menu .ui-menu-item {\n  margin: 0;\n  cursor: pointer;\n  /* support: IE10, see #8844 */\n  list-style-image: url(\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\");\n}\n\n.ui-menu .ui-menu-item-wrapper {\n  position: relative;\n  padding: 3px 1em 3px 0.4em;\n}\n\n.ui-menu .ui-menu-divider {\n  margin: 5px 0;\n  height: 0;\n  font-size: 0;\n  line-height: 0;\n  border-width: 1px 0 0 0;\n}\n\n.ui-menu .ui-state-focus,\n.ui-menu .ui-state-active {\n  margin: -1px;\n}\n\n/* icon support */\n.ui-menu-icons {\n  position: relative;\n}\n\n.ui-menu-icons .ui-menu-item-wrapper {\n  padding-left: 2em;\n}\n\n/* left-aligned */\n.ui-menu .ui-icon {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0.2em;\n  margin: auto 0;\n}\n\n/* right-aligned */\n.ui-menu .ui-menu-icon {\n  left: auto;\n  right: 0;\n}\n\n.ui-button {\n  padding: 0.4em 1em;\n  display: inline-block;\n  position: relative;\n  line-height: normal;\n  margin-right: 0.1em;\n  cursor: pointer;\n  vertical-align: middle;\n  text-align: center;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  /* Support: IE <= 11 */\n  overflow: visible;\n}\n\n.ui-button,\n.ui-button:link,\n.ui-button:visited,\n.ui-button:hover,\n.ui-button:active {\n  text-decoration: none;\n}\n\n/* to make room for the icon, a width needs to be set here */\n.ui-button-icon-only {\n  width: 2em;\n  box-sizing: border-box;\n  text-indent: -9999px;\n  white-space: nowrap;\n}\n\n/* no icon support for input elements */\ninput.ui-button.ui-button-icon-only {\n  text-indent: 0;\n}\n\n/* button icon element(s) */\n.ui-button-icon-only .ui-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -8px;\n  margin-left: -8px;\n}\n\n.ui-button.ui-icon-notext .ui-icon {\n  padding: 0;\n  width: 2.1em;\n  height: 2.1em;\n  text-indent: -9999px;\n  white-space: nowrap;\n}\n\ninput.ui-button.ui-icon-notext .ui-icon {\n  width: auto;\n  height: auto;\n  text-indent: 0;\n  white-space: normal;\n  padding: 0.4em 1em;\n}\n\n/* workarounds */\n/* Support: Firefox 5 - 40 */\ninput.ui-button::-moz-focus-inner,\nbutton.ui-button::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.ui-controlgroup {\n  vertical-align: middle;\n  display: inline-block;\n}\n\n.ui-controlgroup > .ui-controlgroup-item {\n  float: left;\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.ui-controlgroup > .ui-controlgroup-item:focus,\n.ui-controlgroup > .ui-controlgroup-item.ui-visual-focus {\n  z-index: 9999;\n}\n\n.ui-controlgroup-vertical > .ui-controlgroup-item {\n  display: block;\n  float: none;\n  width: 100%;\n  margin-top: 0;\n  margin-bottom: 0;\n  text-align: left;\n}\n\n.ui-controlgroup-vertical .ui-controlgroup-item {\n  box-sizing: border-box;\n}\n\n.ui-controlgroup .ui-controlgroup-label {\n  padding: 0.4em 1em;\n}\n\n.ui-controlgroup .ui-controlgroup-label span {\n  font-size: 80%;\n}\n\n.ui-controlgroup-horizontal .ui-controlgroup-label + .ui-controlgroup-item {\n  border-left: none;\n}\n\n.ui-controlgroup-vertical .ui-controlgroup-label + .ui-controlgroup-item {\n  border-top: none;\n}\n\n.ui-controlgroup-horizontal .ui-controlgroup-label.ui-widget-content {\n  border-right: none;\n}\n\n.ui-controlgroup-vertical .ui-controlgroup-label.ui-widget-content {\n  border-bottom: none;\n}\n\n/* Spinner specific style fixes */\n.ui-controlgroup-vertical .ui-spinner-input {\n  /* Support: IE8 only, Android < 4.4 only */\n  width: 75%;\n  width: calc( 100% - 2.4em );\n}\n\n.ui-controlgroup-vertical .ui-spinner .ui-spinner-up {\n  border-top-style: solid;\n}\n\n.ui-checkboxradio-label .ui-icon-background {\n  box-shadow: inset 1px 1px 1px #ccc;\n  border-radius: 0.12em;\n  border: none;\n}\n\n.ui-checkboxradio-radio-label .ui-icon-background {\n  width: 16px;\n  height: 16px;\n  border-radius: 1em;\n  overflow: visible;\n  border: none;\n}\n\n.ui-checkboxradio-radio-label.ui-checkboxradio-checked .ui-icon,\n.ui-checkboxradio-radio-label.ui-checkboxradio-checked:hover .ui-icon {\n  background-image: none;\n  width: 8px;\n  height: 8px;\n  border-width: 4px;\n  border-style: solid;\n}\n\n.ui-checkboxradio-disabled {\n  pointer-events: none;\n}\n\n.ui-datepicker {\n  width: 17em;\n  padding: 0.2em 0.2em 0;\n  display: none;\n}\n\n.ui-datepicker .ui-datepicker-header {\n  position: relative;\n  padding: 0.2em 0;\n}\n\n.ui-datepicker .ui-datepicker-prev,\n.ui-datepicker .ui-datepicker-next {\n  position: absolute;\n  top: 2px;\n  width: 1.8em;\n  height: 1.8em;\n}\n\n.ui-datepicker .ui-datepicker-prev-hover,\n.ui-datepicker .ui-datepicker-next-hover {\n  top: 1px;\n}\n\n.ui-datepicker .ui-datepicker-prev {\n  left: 2px;\n}\n\n.ui-datepicker .ui-datepicker-next {\n  right: 2px;\n}\n\n.ui-datepicker .ui-datepicker-prev-hover {\n  left: 1px;\n}\n\n.ui-datepicker .ui-datepicker-next-hover {\n  right: 1px;\n}\n\n.ui-datepicker .ui-datepicker-prev span,\n.ui-datepicker .ui-datepicker-next span {\n  display: block;\n  position: absolute;\n  left: 50%;\n  margin-left: -8px;\n  top: 50%;\n  margin-top: -8px;\n}\n\n.ui-datepicker .ui-datepicker-title {\n  margin: 0 2.3em;\n  line-height: 1.8em;\n  text-align: center;\n}\n\n.ui-datepicker .ui-datepicker-title select {\n  font-size: 1em;\n  margin: 1px 0;\n}\n\n.ui-datepicker select.ui-datepicker-month,\n.ui-datepicker select.ui-datepicker-year {\n  width: 45%;\n}\n\n.ui-datepicker table {\n  width: 100%;\n  font-size: 0.9em;\n  border-collapse: collapse;\n  margin: 0 0 0.4em;\n}\n\n.ui-datepicker th {\n  padding: 0.7em 0.3em;\n  text-align: center;\n  font-weight: bold;\n  border: 0;\n}\n\n.ui-datepicker td {\n  border: 0;\n  padding: 1px;\n}\n\n.ui-datepicker td span,\n.ui-datepicker td a {\n  display: block;\n  padding: 0.2em;\n  text-align: right;\n  text-decoration: none;\n}\n\n.ui-datepicker .ui-datepicker-buttonpane {\n  background-image: none;\n  margin: 0.7em 0 0 0;\n  padding: 0 0.2em;\n  border-left: 0;\n  border-right: 0;\n  border-bottom: 0;\n}\n\n.ui-datepicker .ui-datepicker-buttonpane button {\n  float: right;\n  margin: 0.5em 0.2em 0.4em;\n  cursor: pointer;\n  padding: 0.2em 0.6em 0.3em 0.6em;\n  width: auto;\n  overflow: visible;\n}\n\n.ui-datepicker .ui-datepicker-buttonpane button.ui-datepicker-current {\n  float: left;\n}\n\n/* with multiple calendars */\n.ui-datepicker.ui-datepicker-multi {\n  width: auto;\n}\n\n.ui-datepicker-multi .ui-datepicker-group {\n  float: left;\n}\n\n.ui-datepicker-multi .ui-datepicker-group table {\n  width: 95%;\n  margin: 0 auto 0.4em;\n}\n\n.ui-datepicker-multi-2 .ui-datepicker-group {\n  width: 50%;\n}\n\n.ui-datepicker-multi-3 .ui-datepicker-group {\n  width: 33.3%;\n}\n\n.ui-datepicker-multi-4 .ui-datepicker-group {\n  width: 25%;\n}\n\n.ui-datepicker-multi .ui-datepicker-group-last .ui-datepicker-header,\n.ui-datepicker-multi .ui-datepicker-group-middle .ui-datepicker-header {\n  border-left-width: 0;\n}\n\n.ui-datepicker-multi .ui-datepicker-buttonpane {\n  clear: left;\n}\n\n.ui-datepicker-row-break {\n  clear: both;\n  width: 100%;\n  font-size: 0;\n}\n\n/* RTL support */\n.ui-datepicker-rtl {\n  direction: rtl;\n}\n\n.ui-datepicker-rtl .ui-datepicker-prev {\n  right: 2px;\n  left: auto;\n}\n\n.ui-datepicker-rtl .ui-datepicker-next {\n  left: 2px;\n  right: auto;\n}\n\n.ui-datepicker-rtl .ui-datepicker-prev:hover {\n  right: 1px;\n  left: auto;\n}\n\n.ui-datepicker-rtl .ui-datepicker-next:hover {\n  left: 1px;\n  right: auto;\n}\n\n.ui-datepicker-rtl .ui-datepicker-buttonpane {\n  clear: right;\n}\n\n.ui-datepicker-rtl .ui-datepicker-buttonpane button {\n  float: left;\n}\n\n.ui-datepicker-rtl .ui-datepicker-buttonpane button.ui-datepicker-current,\n.ui-datepicker-rtl .ui-datepicker-group {\n  float: right;\n}\n\n.ui-datepicker-rtl .ui-datepicker-group-last .ui-datepicker-header,\n.ui-datepicker-rtl .ui-datepicker-group-middle .ui-datepicker-header {\n  border-right-width: 0;\n  border-left-width: 1px;\n}\n\n/* Icons */\n.ui-datepicker .ui-icon {\n  display: block;\n  text-indent: -99999px;\n  overflow: hidden;\n  background-repeat: no-repeat;\n  left: 0.5em;\n  top: 0.3em;\n}\n\n.ui-dialog {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 0.2em;\n  outline: 0;\n}\n\n.ui-dialog .ui-dialog-titlebar {\n  padding: 0.4em 1em;\n  position: relative;\n}\n\n.ui-dialog .ui-dialog-title {\n  float: left;\n  margin: 0.1em 0;\n  white-space: nowrap;\n  width: 90%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.ui-dialog .ui-dialog-titlebar-close {\n  position: absolute;\n  right: 0.3em;\n  top: 50%;\n  width: 20px;\n  margin: -10px 0 0 0;\n  padding: 1px;\n  height: 20px;\n}\n\n.ui-dialog .ui-dialog-content {\n  position: relative;\n  border: 0;\n  padding: 0.5em 1em;\n  background: none;\n  overflow: auto;\n}\n\n.ui-dialog .ui-dialog-buttonpane {\n  text-align: left;\n  border-width: 1px 0 0 0;\n  background-image: none;\n  margin-top: 0.5em;\n  padding: 0.3em 1em 0.5em 0.4em;\n}\n\n.ui-dialog .ui-dialog-buttonpane .ui-dialog-buttonset {\n  float: right;\n}\n\n.ui-dialog .ui-dialog-buttonpane button {\n  margin: 0.5em 0.4em 0.5em 0;\n  cursor: pointer;\n}\n\n.ui-dialog .ui-resizable-n {\n  height: 2px;\n  top: 0;\n}\n\n.ui-dialog .ui-resizable-e {\n  width: 2px;\n  right: 0;\n}\n\n.ui-dialog .ui-resizable-s {\n  height: 2px;\n  bottom: 0;\n}\n\n.ui-dialog .ui-resizable-w {\n  width: 2px;\n  left: 0;\n}\n\n.ui-dialog .ui-resizable-se,\n.ui-dialog .ui-resizable-sw,\n.ui-dialog .ui-resizable-ne,\n.ui-dialog .ui-resizable-nw {\n  width: 7px;\n  height: 7px;\n}\n\n.ui-dialog .ui-resizable-se {\n  right: 0;\n  bottom: 0;\n}\n\n.ui-dialog .ui-resizable-sw {\n  left: 0;\n  bottom: 0;\n}\n\n.ui-dialog .ui-resizable-ne {\n  right: 0;\n  top: 0;\n}\n\n.ui-dialog .ui-resizable-nw {\n  left: 0;\n  top: 0;\n}\n\n.ui-draggable .ui-dialog-titlebar {\n  cursor: move;\n}\n\n.ui-draggable-handle {\n  -ms-touch-action: none;\n  touch-action: none;\n}\n\n.ui-resizable {\n  position: relative;\n}\n\n.ui-resizable-handle {\n  position: absolute;\n  font-size: 0.1px;\n  display: block;\n  -ms-touch-action: none;\n  touch-action: none;\n}\n\n.ui-resizable-disabled .ui-resizable-handle,\n.ui-resizable-autohide .ui-resizable-handle {\n  display: none;\n}\n\n.ui-resizable-n {\n  cursor: n-resize;\n  height: 7px;\n  width: 100%;\n  top: -5px;\n  left: 0;\n}\n\n.ui-resizable-s {\n  cursor: s-resize;\n  height: 7px;\n  width: 100%;\n  bottom: -5px;\n  left: 0;\n}\n\n.ui-resizable-e {\n  cursor: e-resize;\n  width: 7px;\n  right: -5px;\n  top: 0;\n  height: 100%;\n}\n\n.ui-resizable-w {\n  cursor: w-resize;\n  width: 7px;\n  left: -5px;\n  top: 0;\n  height: 100%;\n}\n\n.ui-resizable-se {\n  cursor: se-resize;\n  width: 12px;\n  height: 12px;\n  right: 1px;\n  bottom: 1px;\n}\n\n.ui-resizable-sw {\n  cursor: sw-resize;\n  width: 9px;\n  height: 9px;\n  left: -5px;\n  bottom: -5px;\n}\n\n.ui-resizable-nw {\n  cursor: nw-resize;\n  width: 9px;\n  height: 9px;\n  left: -5px;\n  top: -5px;\n}\n\n.ui-resizable-ne {\n  cursor: ne-resize;\n  width: 9px;\n  height: 9px;\n  right: -5px;\n  top: -5px;\n}\n\n.ui-progressbar {\n  height: 2em;\n  text-align: left;\n  overflow: hidden;\n}\n\n.ui-progressbar .ui-progressbar-value {\n  margin: -1px;\n  height: 100%;\n}\n\n.ui-progressbar .ui-progressbar-overlay {\n  background: url(\"data:image/gif;base64,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\");\n  height: 100%;\n  filter: alpha(opacity=25);\n  /* support: IE8 */\n  opacity: 0.25;\n}\n\n.ui-progressbar-indeterminate .ui-progressbar-value {\n  background-image: none;\n}\n\n.ui-selectable {\n  -ms-touch-action: none;\n  touch-action: none;\n}\n\n.ui-selectable-helper {\n  position: absolute;\n  z-index: 100;\n  border: 1px dotted black;\n}\n\n.ui-selectmenu-menu {\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: none;\n}\n\n.ui-selectmenu-menu .ui-menu {\n  overflow: auto;\n  overflow-x: hidden;\n  padding-bottom: 1px;\n}\n\n.ui-selectmenu-menu .ui-menu .ui-selectmenu-optgroup {\n  font-size: 1em;\n  font-weight: bold;\n  line-height: 1.5;\n  padding: 2px 0.4em;\n  margin: 0.5em 0 0 0;\n  height: auto;\n  border: 0;\n}\n\n.ui-selectmenu-open {\n  display: block;\n}\n\n.ui-selectmenu-text {\n  display: block;\n  margin-right: 20px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.ui-selectmenu-button.ui-button {\n  text-align: left;\n  white-space: nowrap;\n  width: 14em;\n}\n\n.ui-selectmenu-icon.ui-icon {\n  float: right;\n  margin-top: 0;\n}\n\n.ui-slider {\n  position: relative;\n  text-align: left;\n}\n\n.ui-slider .ui-slider-handle {\n  position: absolute;\n  z-index: 2;\n  width: 1.2em;\n  height: 1.2em;\n  cursor: default;\n  -ms-touch-action: none;\n  touch-action: none;\n}\n\n.ui-slider .ui-slider-range {\n  position: absolute;\n  z-index: 1;\n  font-size: 0.7em;\n  display: block;\n  border: 0;\n  background-position: 0 0;\n}\n\n/* support: IE8 - See #6727 */\n.ui-slider.ui-state-disabled .ui-slider-handle,\n.ui-slider.ui-state-disabled .ui-slider-range {\n  filter: inherit;\n}\n\n.ui-slider-horizontal {\n  height: 0.8em;\n}\n\n.ui-slider-horizontal .ui-slider-handle {\n  top: -0.3em;\n  margin-left: -0.6em;\n}\n\n.ui-slider-horizontal .ui-slider-range {\n  top: 0;\n  height: 100%;\n}\n\n.ui-slider-horizontal .ui-slider-range-min {\n  left: 0;\n}\n\n.ui-slider-horizontal .ui-slider-range-max {\n  right: 0;\n}\n\n.ui-slider-vertical {\n  width: 0.8em;\n  height: 100px;\n}\n\n.ui-slider-vertical .ui-slider-handle {\n  left: -0.3em;\n  margin-left: 0;\n  margin-bottom: -0.6em;\n}\n\n.ui-slider-vertical .ui-slider-range {\n  left: 0;\n  width: 100%;\n}\n\n.ui-slider-vertical .ui-slider-range-min {\n  bottom: 0;\n}\n\n.ui-slider-vertical .ui-slider-range-max {\n  top: 0;\n}\n\n.ui-sortable-handle {\n  -ms-touch-action: none;\n  touch-action: none;\n}\n\n.ui-spinner {\n  position: relative;\n  display: inline-block;\n  overflow: hidden;\n  padding: 0;\n  vertical-align: middle;\n}\n\n.ui-spinner-input {\n  border: none;\n  background: none;\n  color: inherit;\n  padding: 0.222em 0;\n  margin: 0.2em 0;\n  vertical-align: middle;\n  margin-left: 0.4em;\n  margin-right: 2em;\n}\n\n.ui-spinner-button {\n  width: 1.6em;\n  height: 50%;\n  font-size: 0.5em;\n  padding: 0;\n  margin: 0;\n  text-align: center;\n  position: absolute;\n  cursor: default;\n  display: block;\n  overflow: hidden;\n  right: 0;\n}\n\n/* more specificity required here to override default borders */\n.ui-spinner a.ui-spinner-button {\n  border-top-style: none;\n  border-bottom-style: none;\n  border-right-style: none;\n}\n\n.ui-spinner-up {\n  top: 0;\n}\n\n.ui-spinner-down {\n  bottom: 0;\n}\n\n.ui-tabs {\n  position: relative;\n  /* position: relative prevents IE scroll bug (element with position: relative inside container with overflow: auto appear as \"fixed\") */\n  padding: 0.2em;\n}\n\n.ui-tabs .ui-tabs-nav {\n  margin: 0;\n  padding: 0.2em 0.2em 0;\n}\n\n.ui-tabs .ui-tabs-nav li {\n  list-style: none;\n  float: left;\n  position: relative;\n  top: 0;\n  margin: 1px 0.2em 0 0;\n  border-bottom-width: 0;\n  padding: 0;\n  white-space: nowrap;\n}\n\n.ui-tabs .ui-tabs-nav .ui-tabs-anchor {\n  float: left;\n  padding: 0.5em 1em;\n  text-decoration: none;\n}\n\n.ui-tabs .ui-tabs-nav li.ui-tabs-active {\n  margin-bottom: -1px;\n  padding-bottom: 1px;\n}\n\n.ui-tabs .ui-tabs-nav li.ui-tabs-active .ui-tabs-anchor,\n.ui-tabs .ui-tabs-nav li.ui-state-disabled .ui-tabs-anchor,\n.ui-tabs .ui-tabs-nav li.ui-tabs-loading .ui-tabs-anchor {\n  cursor: text;\n}\n\n.ui-tabs-collapsible .ui-tabs-nav li.ui-tabs-active .ui-tabs-anchor {\n  cursor: pointer;\n}\n\n.ui-tabs .ui-tabs-panel {\n  display: block;\n  border-width: 0;\n  padding: 1em 1.4em;\n  background: none;\n}\n\n.ui-tooltip {\n  padding: 8px;\n  position: absolute;\n  z-index: 9999;\n  max-width: 300px;\n}\n\nbody .ui-tooltip {\n  border-width: 2px;\n}\n\n/* Component containers\n----------------------------------*/\n.ui-widget {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1em;\n}\n\n.ui-widget .ui-widget {\n  font-size: 1em;\n}\n\n.ui-widget input,\n.ui-widget select,\n.ui-widget textarea,\n.ui-widget button {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1em;\n}\n\n.ui-widget.ui-widget-content {\n  border: 1px solid #c5c5c5;\n}\n\n.ui-widget-content {\n  border: 1px solid #dddddd;\n  background: #ffffff;\n  color: #333333;\n}\n\n.ui-widget-content a {\n  color: #333333;\n}\n\n.ui-widget-header {\n  border: 1px solid #dddddd;\n  background: #e9e9e9;\n  color: #333333;\n  font-weight: bold;\n}\n\n.ui-widget-header a {\n  color: #333333;\n}\n\n/* Interaction states\n----------------------------------*/\n.ui-state-default,\n.ui-widget-content .ui-state-default,\n.ui-widget-header .ui-state-default,\n.ui-button,\nhtml .ui-button.ui-state-disabled:hover,\nhtml .ui-button.ui-state-disabled:active {\n  border: 1px solid #c5c5c5;\n  background: #f6f6f6;\n  font-weight: normal;\n  color: #454545;\n}\n\n.ui-state-default a,\n.ui-state-default a:link,\n.ui-state-default a:visited,\na.ui-button,\na:link.ui-button,\na:visited.ui-button,\n.ui-button {\n  color: #454545;\n  text-decoration: none;\n}\n\n.ui-state-hover,\n.ui-widget-content .ui-state-hover,\n.ui-widget-header .ui-state-hover,\n.ui-state-focus,\n.ui-widget-content .ui-state-focus,\n.ui-widget-header .ui-state-focus,\n.ui-button:hover,\n.ui-button:focus {\n  border: 1px solid #cccccc;\n  background: #ededed;\n  font-weight: normal;\n  color: #2b2b2b;\n}\n\n.ui-state-hover a,\n.ui-state-hover a:hover,\n.ui-state-hover a:link,\n.ui-state-hover a:visited,\n.ui-state-focus a,\n.ui-state-focus a:hover,\n.ui-state-focus a:link,\n.ui-state-focus a:visited,\na.ui-button:hover,\na.ui-button:focus {\n  color: #2b2b2b;\n  text-decoration: none;\n}\n\n.ui-visual-focus {\n  box-shadow: 0 0 3px 1px #5e9ed6;\n}\n\n.ui-state-active,\n.ui-widget-content .ui-state-active,\n.ui-widget-header .ui-state-active,\na.ui-button:active,\n.ui-button:active,\n.ui-button.ui-state-active:hover {\n  border: 1px solid #003eff;\n  background: #007fff;\n  font-weight: normal;\n  color: #ffffff;\n}\n\n.ui-icon-background,\n.ui-state-active .ui-icon-background {\n  border: #003eff;\n  background-color: #ffffff;\n}\n\n.ui-state-active a,\n.ui-state-active a:link,\n.ui-state-active a:visited {\n  color: #ffffff;\n  text-decoration: none;\n}\n\n/* Interaction Cues\n----------------------------------*/\n.ui-state-highlight,\n.ui-widget-content .ui-state-highlight,\n.ui-widget-header .ui-state-highlight {\n  border: 1px solid #dad55e;\n  background: #fffa90;\n  color: #777620;\n}\n\n.ui-state-checked {\n  border: 1px solid #dad55e;\n  background: #fffa90;\n}\n\n.ui-state-highlight a,\n.ui-widget-content .ui-state-highlight a,\n.ui-widget-header .ui-state-highlight a {\n  color: #777620;\n}\n\n.ui-state-error,\n.ui-widget-content .ui-state-error,\n.ui-widget-header .ui-state-error {\n  border: 1px solid #f1a899;\n  background: #fddfdf;\n  color: #5f3f3f;\n}\n\n.ui-state-error a,\n.ui-widget-content .ui-state-error a,\n.ui-widget-header .ui-state-error a {\n  color: #5f3f3f;\n}\n\n.ui-state-error-text,\n.ui-widget-content .ui-state-error-text,\n.ui-widget-header .ui-state-error-text {\n  color: #5f3f3f;\n}\n\n.ui-priority-primary,\n.ui-widget-content .ui-priority-primary,\n.ui-widget-header .ui-priority-primary {\n  font-weight: bold;\n}\n\n.ui-priority-secondary,\n.ui-widget-content .ui-priority-secondary,\n.ui-widget-header .ui-priority-secondary {\n  opacity: 0.7;\n  filter: Alpha(Opacity=70);\n  /* support: IE8 */\n  font-weight: normal;\n}\n\n.ui-state-disabled,\n.ui-widget-content .ui-state-disabled,\n.ui-widget-header .ui-state-disabled {\n  opacity: 0.35;\n  filter: Alpha(Opacity=35);\n  /* support: IE8 */\n  background-image: none;\n}\n\n.ui-state-disabled .ui-icon {\n  filter: Alpha(Opacity=35);\n  /* support: IE8 - See #6059 */\n}\n\n/* Icons\n----------------------------------*/\n/* states and images */\n.ui-icon {\n  width: 16px;\n  height: 16px;\n}\n\n.ui-icon,\n.ui-widget-content .ui-icon {\n  background-image: url(\"/image/jqueryui/ui-icons_444444_256x240.png\");\n}\n\n.ui-widget-header .ui-icon {\n  background-image: url(\"/image/jqueryui/ui-icons_444444_256x240.png\");\n}\n\n.ui-state-hover .ui-icon,\n.ui-state-focus .ui-icon,\n.ui-button:hover .ui-icon,\n.ui-button:focus .ui-icon {\n  background-image: url(\"/image/jqueryui/ui-icons_555555_256x240.png\");\n}\n\n.ui-state-active .ui-icon,\n.ui-button:active .ui-icon {\n  background-image: url(\"/image/jqueryui/ui-icons_ffffff_256x240.png\");\n}\n\n.ui-state-highlight .ui-icon,\n.ui-button .ui-state-highlight.ui-icon {\n  background-image: url(\"/image/jqueryui/ui-icons_777620_256x240.png\");\n}\n\n.ui-state-error .ui-icon,\n.ui-state-error-text .ui-icon {\n  background-image: url(\"/image/jqueryui/ui-icons_cc0000_256x240.png\");\n}\n\n.ui-button .ui-icon {\n  background-image: url(\"/image/jqueryui/ui-icons_777777_256x240.png\");\n}\n\n/* positioning */\n.ui-icon-blank {\n  background-position: 16px 16px;\n}\n\n.ui-icon-caret-1-n {\n  background-position: 0 0;\n}\n\n.ui-icon-caret-1-ne {\n  background-position: -16px 0;\n}\n\n.ui-icon-caret-1-e {\n  background-position: -32px 0;\n}\n\n.ui-icon-caret-1-se {\n  background-position: -48px 0;\n}\n\n.ui-icon-caret-1-s {\n  background-position: -65px 0;\n}\n\n.ui-icon-caret-1-sw {\n  background-position: -80px 0;\n}\n\n.ui-icon-caret-1-w {\n  background-position: -96px 0;\n}\n\n.ui-icon-caret-1-nw {\n  background-position: -112px 0;\n}\n\n.ui-icon-caret-2-n-s {\n  background-position: -128px 0;\n}\n\n.ui-icon-caret-2-e-w {\n  background-position: -144px 0;\n}\n\n.ui-icon-triangle-1-n {\n  background-position: 0 -16px;\n}\n\n.ui-icon-triangle-1-ne {\n  background-position: -16px -16px;\n}\n\n.ui-icon-triangle-1-e {\n  background-position: -32px -16px;\n}\n\n.ui-icon-triangle-1-se {\n  background-position: -48px -16px;\n}\n\n.ui-icon-triangle-1-s {\n  background-position: -65px -16px;\n}\n\n.ui-icon-triangle-1-sw {\n  background-position: -80px -16px;\n}\n\n.ui-icon-triangle-1-w {\n  background-position: -96px -16px;\n}\n\n.ui-icon-triangle-1-nw {\n  background-position: -112px -16px;\n}\n\n.ui-icon-triangle-2-n-s {\n  background-position: -128px -16px;\n}\n\n.ui-icon-triangle-2-e-w {\n  background-position: -144px -16px;\n}\n\n.ui-icon-arrow-1-n {\n  background-position: 0 -32px;\n}\n\n.ui-icon-arrow-1-ne {\n  background-position: -16px -32px;\n}\n\n.ui-icon-arrow-1-e {\n  background-position: -32px -32px;\n}\n\n.ui-icon-arrow-1-se {\n  background-position: -48px -32px;\n}\n\n.ui-icon-arrow-1-s {\n  background-position: -65px -32px;\n}\n\n.ui-icon-arrow-1-sw {\n  background-position: -80px -32px;\n}\n\n.ui-icon-arrow-1-w {\n  background-position: -96px -32px;\n}\n\n.ui-icon-arrow-1-nw {\n  background-position: -112px -32px;\n}\n\n.ui-icon-arrow-2-n-s {\n  background-position: -128px -32px;\n}\n\n.ui-icon-arrow-2-ne-sw {\n  background-position: -144px -32px;\n}\n\n.ui-icon-arrow-2-e-w {\n  background-position: -160px -32px;\n}\n\n.ui-icon-arrow-2-se-nw {\n  background-position: -176px -32px;\n}\n\n.ui-icon-arrowstop-1-n {\n  background-position: -192px -32px;\n}\n\n.ui-icon-arrowstop-1-e {\n  background-position: -208px -32px;\n}\n\n.ui-icon-arrowstop-1-s {\n  background-position: -224px -32px;\n}\n\n.ui-icon-arrowstop-1-w {\n  background-position: -240px -32px;\n}\n\n.ui-icon-arrowthick-1-n {\n  background-position: 1px -48px;\n}\n\n.ui-icon-arrowthick-1-ne {\n  background-position: -16px -48px;\n}\n\n.ui-icon-arrowthick-1-e {\n  background-position: -32px -48px;\n}\n\n.ui-icon-arrowthick-1-se {\n  background-position: -48px -48px;\n}\n\n.ui-icon-arrowthick-1-s {\n  background-position: -64px -48px;\n}\n\n.ui-icon-arrowthick-1-sw {\n  background-position: -80px -48px;\n}\n\n.ui-icon-arrowthick-1-w {\n  background-position: -96px -48px;\n}\n\n.ui-icon-arrowthick-1-nw {\n  background-position: -112px -48px;\n}\n\n.ui-icon-arrowthick-2-n-s {\n  background-position: -128px -48px;\n}\n\n.ui-icon-arrowthick-2-ne-sw {\n  background-position: -144px -48px;\n}\n\n.ui-icon-arrowthick-2-e-w {\n  background-position: -160px -48px;\n}\n\n.ui-icon-arrowthick-2-se-nw {\n  background-position: -176px -48px;\n}\n\n.ui-icon-arrowthickstop-1-n {\n  background-position: -192px -48px;\n}\n\n.ui-icon-arrowthickstop-1-e {\n  background-position: -208px -48px;\n}\n\n.ui-icon-arrowthickstop-1-s {\n  background-position: -224px -48px;\n}\n\n.ui-icon-arrowthickstop-1-w {\n  background-position: -240px -48px;\n}\n\n.ui-icon-arrowreturnthick-1-w {\n  background-position: 0 -64px;\n}\n\n.ui-icon-arrowreturnthick-1-n {\n  background-position: -16px -64px;\n}\n\n.ui-icon-arrowreturnthick-1-e {\n  background-position: -32px -64px;\n}\n\n.ui-icon-arrowreturnthick-1-s {\n  background-position: -48px -64px;\n}\n\n.ui-icon-arrowreturn-1-w {\n  background-position: -64px -64px;\n}\n\n.ui-icon-arrowreturn-1-n {\n  background-position: -80px -64px;\n}\n\n.ui-icon-arrowreturn-1-e {\n  background-position: -96px -64px;\n}\n\n.ui-icon-arrowreturn-1-s {\n  background-position: -112px -64px;\n}\n\n.ui-icon-arrowrefresh-1-w {\n  background-position: -128px -64px;\n}\n\n.ui-icon-arrowrefresh-1-n {\n  background-position: -144px -64px;\n}\n\n.ui-icon-arrowrefresh-1-e {\n  background-position: -160px -64px;\n}\n\n.ui-icon-arrowrefresh-1-s {\n  background-position: -176px -64px;\n}\n\n.ui-icon-arrow-4 {\n  background-position: 0 -80px;\n}\n\n.ui-icon-arrow-4-diag {\n  background-position: -16px -80px;\n}\n\n.ui-icon-extlink {\n  background-position: -32px -80px;\n}\n\n.ui-icon-newwin {\n  background-position: -48px -80px;\n}\n\n.ui-icon-refresh {\n  background-position: -64px -80px;\n}\n\n.ui-icon-shuffle {\n  background-position: -80px -80px;\n}\n\n.ui-icon-transfer-e-w {\n  background-position: -96px -80px;\n}\n\n.ui-icon-transferthick-e-w {\n  background-position: -112px -80px;\n}\n\n.ui-icon-folder-collapsed {\n  background-position: 0 -96px;\n}\n\n.ui-icon-folder-open {\n  background-position: -16px -96px;\n}\n\n.ui-icon-document {\n  background-position: -32px -96px;\n}\n\n.ui-icon-document-b {\n  background-position: -48px -96px;\n}\n\n.ui-icon-note {\n  background-position: -64px -96px;\n}\n\n.ui-icon-mail-closed {\n  background-position: -80px -96px;\n}\n\n.ui-icon-mail-open {\n  background-position: -96px -96px;\n}\n\n.ui-icon-suitcase {\n  background-position: -112px -96px;\n}\n\n.ui-icon-comment {\n  background-position: -128px -96px;\n}\n\n.ui-icon-person {\n  background-position: -144px -96px;\n}\n\n.ui-icon-print {\n  background-position: -160px -96px;\n}\n\n.ui-icon-trash {\n  background-position: -176px -96px;\n}\n\n.ui-icon-locked {\n  background-position: -192px -96px;\n}\n\n.ui-icon-unlocked {\n  background-position: -208px -96px;\n}\n\n.ui-icon-bookmark {\n  background-position: -224px -96px;\n}\n\n.ui-icon-tag {\n  background-position: -240px -96px;\n}\n\n.ui-icon-home {\n  background-position: 0 -112px;\n}\n\n.ui-icon-flag {\n  background-position: -16px -112px;\n}\n\n.ui-icon-calendar {\n  background-position: -32px -112px;\n}\n\n.ui-icon-cart {\n  background-position: -48px -112px;\n}\n\n.ui-icon-pencil {\n  background-position: -64px -112px;\n}\n\n.ui-icon-clock {\n  background-position: -80px -112px;\n}\n\n.ui-icon-disk {\n  background-position: -96px -112px;\n}\n\n.ui-icon-calculator {\n  background-position: -112px -112px;\n}\n\n.ui-icon-zoomin {\n  background-position: -128px -112px;\n}\n\n.ui-icon-zoomout {\n  background-position: -144px -112px;\n}\n\n.ui-icon-search {\n  background-position: -160px -112px;\n}\n\n.ui-icon-wrench {\n  background-position: -176px -112px;\n}\n\n.ui-icon-gear {\n  background-position: -192px -112px;\n}\n\n.ui-icon-heart {\n  background-position: -208px -112px;\n}\n\n.ui-icon-star {\n  background-position: -224px -112px;\n}\n\n.ui-icon-link {\n  background-position: -240px -112px;\n}\n\n.ui-icon-cancel {\n  background-position: 0 -128px;\n}\n\n.ui-icon-plus {\n  background-position: -16px -128px;\n}\n\n.ui-icon-plusthick {\n  background-position: -32px -128px;\n}\n\n.ui-icon-minus {\n  background-position: -48px -128px;\n}\n\n.ui-icon-minusthick {\n  background-position: -64px -128px;\n}\n\n.ui-icon-close {\n  background-position: -80px -128px;\n}\n\n.ui-icon-closethick {\n  background-position: -96px -128px;\n}\n\n.ui-icon-key {\n  background-position: -112px -128px;\n}\n\n.ui-icon-lightbulb {\n  background-position: -128px -128px;\n}\n\n.ui-icon-scissors {\n  background-position: -144px -128px;\n}\n\n.ui-icon-clipboard {\n  background-position: -160px -128px;\n}\n\n.ui-icon-copy {\n  background-position: -176px -128px;\n}\n\n.ui-icon-contact {\n  background-position: -192px -128px;\n}\n\n.ui-icon-image {\n  background-position: -208px -128px;\n}\n\n.ui-icon-video {\n  background-position: -224px -128px;\n}\n\n.ui-icon-script {\n  background-position: -240px -128px;\n}\n\n.ui-icon-alert {\n  background-position: 0 -144px;\n}\n\n.ui-icon-info {\n  background-position: -16px -144px;\n}\n\n.ui-icon-notice {\n  background-position: -32px -144px;\n}\n\n.ui-icon-help {\n  background-position: -48px -144px;\n}\n\n.ui-icon-check {\n  background-position: -64px -144px;\n}\n\n.ui-icon-bullet {\n  background-position: -80px -144px;\n}\n\n.ui-icon-radio-on {\n  background-position: -96px -144px;\n}\n\n.ui-icon-radio-off {\n  background-position: -112px -144px;\n}\n\n.ui-icon-pin-w {\n  background-position: -128px -144px;\n}\n\n.ui-icon-pin-s {\n  background-position: -144px -144px;\n}\n\n.ui-icon-play {\n  background-position: 0 -160px;\n}\n\n.ui-icon-pause {\n  background-position: -16px -160px;\n}\n\n.ui-icon-seek-next {\n  background-position: -32px -160px;\n}\n\n.ui-icon-seek-prev {\n  background-position: -48px -160px;\n}\n\n.ui-icon-seek-end {\n  background-position: -64px -160px;\n}\n\n.ui-icon-seek-start {\n  background-position: -80px -160px;\n}\n\n/* ui-icon-seek-first is deprecated, use ui-icon-seek-start instead */\n.ui-icon-seek-first {\n  background-position: -80px -160px;\n}\n\n.ui-icon-stop {\n  background-position: -96px -160px;\n}\n\n.ui-icon-eject {\n  background-position: -112px -160px;\n}\n\n.ui-icon-volume-off {\n  background-position: -128px -160px;\n}\n\n.ui-icon-volume-on {\n  background-position: -144px -160px;\n}\n\n.ui-icon-power {\n  background-position: 0 -176px;\n}\n\n.ui-icon-signal-diag {\n  background-position: -16px -176px;\n}\n\n.ui-icon-signal {\n  background-position: -32px -176px;\n}\n\n.ui-icon-battery-0 {\n  background-position: -48px -176px;\n}\n\n.ui-icon-battery-1 {\n  background-position: -64px -176px;\n}\n\n.ui-icon-battery-2 {\n  background-position: -80px -176px;\n}\n\n.ui-icon-battery-3 {\n  background-position: -96px -176px;\n}\n\n.ui-icon-circle-plus {\n  background-position: 0 -192px;\n}\n\n.ui-icon-circle-minus {\n  background-position: -16px -192px;\n}\n\n.ui-icon-circle-close {\n  background-position: -32px -192px;\n}\n\n.ui-icon-circle-triangle-e {\n  background-position: -48px -192px;\n}\n\n.ui-icon-circle-triangle-s {\n  background-position: -64px -192px;\n}\n\n.ui-icon-circle-triangle-w {\n  background-position: -80px -192px;\n}\n\n.ui-icon-circle-triangle-n {\n  background-position: -96px -192px;\n}\n\n.ui-icon-circle-arrow-e {\n  background-position: -112px -192px;\n}\n\n.ui-icon-circle-arrow-s {\n  background-position: -128px -192px;\n}\n\n.ui-icon-circle-arrow-w {\n  background-position: -144px -192px;\n}\n\n.ui-icon-circle-arrow-n {\n  background-position: -160px -192px;\n}\n\n.ui-icon-circle-zoomin {\n  background-position: -176px -192px;\n}\n\n.ui-icon-circle-zoomout {\n  background-position: -192px -192px;\n}\n\n.ui-icon-circle-check {\n  background-position: -208px -192px;\n}\n\n.ui-icon-circlesmall-plus {\n  background-position: 0 -208px;\n}\n\n.ui-icon-circlesmall-minus {\n  background-position: -16px -208px;\n}\n\n.ui-icon-circlesmall-close {\n  background-position: -32px -208px;\n}\n\n.ui-icon-squaresmall-plus {\n  background-position: -48px -208px;\n}\n\n.ui-icon-squaresmall-minus {\n  background-position: -64px -208px;\n}\n\n.ui-icon-squaresmall-close {\n  background-position: -80px -208px;\n}\n\n.ui-icon-grip-dotted-vertical {\n  background-position: 0 -224px;\n}\n\n.ui-icon-grip-dotted-horizontal {\n  background-position: -16px -224px;\n}\n\n.ui-icon-grip-solid-vertical {\n  background-position: -32px -224px;\n}\n\n.ui-icon-grip-solid-horizontal {\n  background-position: -48px -224px;\n}\n\n.ui-icon-gripsmall-diagonal-se {\n  background-position: -64px -224px;\n}\n\n.ui-icon-grip-diagonal-se {\n  background-position: -80px -224px;\n}\n\n/* Misc visuals\n----------------------------------*/\n/* Corner radius */\n.ui-corner-all,\n.ui-corner-top,\n.ui-corner-left,\n.ui-corner-tl {\n  border-top-left-radius: 3px;\n}\n\n.ui-corner-all,\n.ui-corner-top,\n.ui-corner-right,\n.ui-corner-tr {\n  border-top-right-radius: 3px;\n}\n\n.ui-corner-all,\n.ui-corner-bottom,\n.ui-corner-left,\n.ui-corner-bl {\n  border-bottom-left-radius: 3px;\n}\n\n.ui-corner-all,\n.ui-corner-bottom,\n.ui-corner-right,\n.ui-corner-br {\n  border-bottom-right-radius: 3px;\n}\n\n/* Overlays */\n.ui-widget-overlay {\n  background: #aaaaaa;\n  opacity: 0.3;\n  filter: Alpha(Opacity=30);\n  /* support: IE8 */\n}\n\n.ui-widget-shadow {\n  -webkit-box-shadow: 0px 0px 5px #666666;\n  box-shadow: 0px 0px 5px #666666;\n}\n\n.modal-booking .title {\n  font-size: 18px;\n  color: #0d47a1;\n  padding: 0 5px 5px;\n  text-align: center;\n}\n.modal-booking .wrapper__datetime-picker {\n  text-align: center;\n}\n.modal-booking .wrapper__datetime-picker .input-group {\n  width: 30%;\n  margin: 0 auto;\n  display: inline-block;\n  margin: 0 1.5% 15px;\n  position: relative;\n  height: 37px;\n}\n.modal-booking .wrapper__datetime-picker .input-group .hero-icon {\n  position: absolute;\n  top: 50%;\n  left: 10px;\n  display: block;\n  font-size: 28px;\n  z-index: 3;\n  color: #6c757d;\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.modal-booking .wrapper__datetime-picker .input-group .input-control {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  color: #525666;\n  background-color: #fff;\n  padding-left: 45px;\n  border-radius: 0;\n  font-size: 15px;\n  transition: border 0.3s linear;\n  border: 1px solid #ccc;\n}\n.modal-booking .wrapper__datetime-picker .input-group .text-control {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  color: #525666;\n  background-color: #fff;\n  padding: 10px 0 10px 25px;\n  border-radius: 0;\n  font-size: 15px;\n  transition: border 0.3s linear;\n}\n.modal-booking .statistical {\n  width: 100%;\n  display: block;\n}\n.modal-booking .statistical .session-statistical {\n  display: block;\n  position: relative;\n  padding: 5px 0;\n}\n.modal-booking .statistical .session-statistical:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.modal-booking .statistical .session-statistical .head {\n  display: block;\n  float: left;\n  font-size: 16px;\n  padding-right: 15px;\n  z-index: 1;\n  background-color: #fff;\n}\n.modal-booking .statistical .session-statistical .head span {\n  padding-right: 10px;\n  font-size: 14px;\n}\n.modal-booking .statistical .session-statistical .head:after {\n  content: \".\";\n  color: transparent;\n  border-bottom: 1px dashed #343a40;\n  position: absolute;\n  z-index: -1;\n  left: 0;\n  right: 0;\n  bottom: 15px;\n}\n.modal-booking .statistical .session-statistical .text-value {\n  padding-left: 10px;\n  display: block;\n  float: right;\n  font-size: 16px;\n  color: #0d47a1;\n  text-align: right;\n  min-width: 60px;\n  background-color: #fff;\n}\n.modal-booking .statistical .session-statistical.note {\n  font-size: 11px;\n}\n.modal-booking .group-box-total {\n  margin-top: 10px;\n  border-top: 1px solid #dee2e6;\n}\n.modal-booking .group-box-total .wrapper__total {\n  width: 100%;\n  display: table;\n}\n.modal-booking .group-box-total .wrapper__total .head, .modal-booking .group-box-total .wrapper__total .text-value {\n  padding: 10px 0;\n  display: table-cell;\n}\n.modal-booking .group-box-total .wrapper__total .text-value {\n  text-align: right;\n}\n.modal-booking .group-box-total .text-button-question {\n  text-align: center;\n}\n.modal-booking .group-box-total .wrapper-button-setting {\n  text-align: center;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-booking {\n  text-decoration: none;\n  margin: 2px 10px;\n  font-size: 12px;\n  text-align: center;\n  display: inline-block;\n  padding: 8px 15px;\n  border: none;\n  color: #fff;\n  white-space: normal;\n  word-wrap: break-word;\n  vertical-align: middle;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  -o-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  cursor: pointer;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-sitter-accept {\n  background: #007bfc;\n  border: 2px solid #007bfc;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-sitter-accept:hover {\n  background-color: #fff;\n  border: 2px solid #a3cffe;\n  color: #007bfc;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-sitter-accept:focus, .modal-booking .group-box-total .wrapper-button-setting .btn-sitter-accept.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-sitter-accept:disabled, .modal-booking .group-box-total .wrapper-button-setting .btn-sitter-accept.disabled, fieldset:disabled .modal-booking .group-box-total .wrapper-button-setting .btn-sitter-accept {\n  pointer-events: none;\n  opacity: 0.65;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-employer-accept {\n  background: #ff3547;\n  border: 2px solid #ff3547;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-employer-accept:hover {\n  background-color: #fff;\n  border: 2px solid #ffb6bd;\n  color: #ff3547;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-employer-accept:focus, .modal-booking .group-box-total .wrapper-button-setting .btn-employer-accept.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-employer-accept:disabled, .modal-booking .group-box-total .wrapper-button-setting .btn-employer-accept.disabled, fieldset:disabled .modal-booking .group-box-total .wrapper-button-setting .btn-employer-accept {\n  pointer-events: none;\n  opacity: 0.65;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-user-cancel {\n  background: #ff3547;\n  border: 2px solid #ff3547;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-user-cancel:hover {\n  background-color: #fff;\n  border: 2px solid #ffb6bd;\n  color: #ff3547;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-user-cancel:focus, .modal-booking .group-box-total .wrapper-button-setting .btn-user-cancel.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-user-cancel:disabled, .modal-booking .group-box-total .wrapper-button-setting .btn-user-cancel.disabled, fieldset:disabled .modal-booking .group-box-total .wrapper-button-setting .btn-user-cancel {\n  pointer-events: none;\n  opacity: 0.65;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-user-approved {\n  background: #0d47a1;\n  border: 2px solid #0d47a1;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-user-approved:hover {\n  background-color: #fff;\n  border: 2px solid #a8bddd;\n  color: #0d47a1;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-user-approved:focus, .modal-booking .group-box-total .wrapper-button-setting .btn-user-approved.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-user-approved:disabled, .modal-booking .group-box-total .wrapper-button-setting .btn-user-approved.disabled, fieldset:disabled .modal-booking .group-box-total .wrapper-button-setting .btn-user-approved {\n  pointer-events: none;\n  opacity: 0.65;\n}\n\n@media only screen and (max-width: 768px) {\n  .modal.modal-booking {\n    width: 100%;\n    padding: 10px;\n  }\n  .modal.modal-booking .wrapper__datetime-picker .wrapper__date-picker {\n    width: 60%;\n    margin: 0 1.5% 5px;\n  }\n  .modal.modal-booking .wrapper__datetime-picker .wrapper__time-picker {\n    width: 40%;\n  }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/action/index.js":
/*!*****************************!*\
  !*** ./src/action/index.js ***!
  \*****************************/
/*! exports provided: setterSocket, setterUser, setterChannels, addMessage, addMessageSendToMe, changeChannelActive, addUserOnline, removeUserOnline, readAllMessageChannelActive, setterBookings, changeBooking */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setterSocket", function() { return setterSocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setterUser", function() { return setterUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setterChannels", function() { return setterChannels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMessage", function() { return addMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMessageSendToMe", function() { return addMessageSendToMe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeChannelActive", function() { return changeChannelActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUserOnline", function() { return addUserOnline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeUserOnline", function() { return removeUserOnline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readAllMessageChannelActive", function() { return readAllMessageChannelActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setterBookings", function() { return setterBookings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeBooking", function() { return changeBooking; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./src/action/type.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function setterSocket(socket) {
  // console.log(socket , " set socket ")
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["default"].SOCCKET.SET_SOCKET_IO,
    payload: socket
  };
}
function setterUser(user) {
  // console.log(user , " set user ")
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["default"].USER.SETTER_USER,
    payload: _objectSpread(_objectSpread({}, user), {}, {
      fetched: true
    })
  };
}
function setterChannels(channels) {
  // console.log(channels , " set channels ")
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["default"].CHANNEL.SETTER_CHANNEL,
    payload: channels
  };
}
function addMessage(message) {
  // console.log(message , " addMessage ")
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["default"].CHANNEL.ADD_MESSAGE,
    payload: message
  };
}
function addMessageSendToMe(message) {
  // console.log(message , " addMessageSendToMe ")
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["default"].CHANNEL.ADD_MESSAGE_SEND_TO_ME,
    payload: message
  };
}
function changeChannelActive(channelName) {
  // console.log(channelName , " changeChannelActive ")
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["default"].CHANNEL.SET_ACTIVE,
    payload: channelName
  };
}
function addUserOnline(id) {
  // console.log(id , " addUserOnline ")
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["default"].CHANNEL.ADD_USER_ONLINE,
    payload: id
  };
}
function removeUserOnline(id) {
  // console.log(id , " removeUserOnline ")
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["default"].CHANNEL.REMOVE_USER_ONLINE,
    payload: id
  };
}
function readAllMessageChannelActive() {
  // console.log(" readAllMessageChannelActive ")
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["default"].CHANNEL.READ_ALL_MESSAGE_CHANNEL_ACTIVE
  };
}
function setterBookings(bookings) {
  // console.log(bookings," setterBookings ")
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["default"].BOOKING.SETTER_BOOKING,
    payload: bookings
  };
}
function changeBooking(booking) {
  // console.log(booking," changeBooking ")
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["default"].BOOKING.CHANGE_BOOKING,
    payload: booking
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
  HOME: {
    CHANGE_LAYOUTS: 'CHANGE_LAYOUTS',
    CHANGE_THEME: 'CHANGE_THEME'
  },
  CHAT: {
    CHANGE_USER_CHAT_DEFAULT: 'CHANGE_USER_CHAT_DEFAULT'
  },
  SOCCKET: {
    SET_SOCKET_IO: "SET_SOCKET_IO"
  },
  USER: {
    SETTER_USER: "SETTER_USER"
  },
  CHANNEL: {
    SETTER_CHANNEL: "SETTER_CHANNEL",
    ADD_MESSAGE: "ADD_MESSAGE",
    ADD_MESSAGE_SEND_TO_ME: "ADD_MESSAGE_SEND_TO_ME",
    SET_ACTIVE: "SET_ACTIVE",
    ADD_USER_ONLINE: "ADD_USER_ONLINE",
    REMOVE_USER_ONLINE: "REMOVE_USER_ONLINE",
    READ_ALL_MESSAGE_CHANNEL_ACTIVE: "READ_ALL_MESSAGE_CHANNEL_ACTIVE"
  },
  CONFIG: {
    SETTER_SEND_PEER: "SETTER_SEND_PEER"
  },
  BOOKING: {
    SETTER_BOOKING: "SETTER_BOOKING",
    CHANGE_BOOKING: "CHANGE_BOOKING"
  }
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Chat_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chat/index.jsx */ "./src/component/Chat/index.jsx");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _library_service_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../library/service.js */ "./src/library/service.js");
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



 /// soccket 




var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);
    _this.state = {
      sendUserOnline: false
    }; // console.log(JSON.stringify(this.props.client))

    var instanceApp = _assertThisInitialized(_this);

    Object(_library_service_js__WEBPACK_IMPORTED_MODULE_4__["socketInitialConnect"])(socket_io_client__WEBPACK_IMPORTED_MODULE_3___default.a, instanceApp);
    return _this;
  }

  _createClass(App, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var EVENT = CONFIG_EVENT;

      if (!this.state.sendUserOnline) {
        if (this.props.auth && this.props.auth.fetched) {
          if (this.props.socket) {
            this.setState({
              sendUserOnline: true
            }, function () {
              this.props.socket.emit(EVENT.USER_ONLINE, {
                id: this.props.auth.id,
                peer: "1234567890",
                access: this.props.auth.tokens.tokenAccess
              });
              this.props.socket.emit(EVENT.USER_GET_BOOKING, {
                id: this.props.auth.id,
                type: this.props.auth.role_id
              });
            });
          }
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "AppComponent",
        id: "Application"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Chat_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    client: state.client,
    socket: state.socket,
    auth: state.users,
    userChat: state.userChat
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(App));

/***/ }),

/***/ "./src/component/Chat/Booking.jsx":
/*!****************************************!*\
  !*** ./src/component/Chat/Booking.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _BookingModalConfirm_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BookingModalConfirm.jsx */ "./src/component/Chat/BookingModalConfirm.jsx");
/* harmony import */ var _BookingModalSetting_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BookingModalSetting.jsx */ "./src/component/Chat/BookingModalSetting.jsx");
/* harmony import */ var _BookingNone_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BookingNone.jsx */ "./src/component/Chat/BookingNone.jsx");
/* harmony import */ var _BookingLoading_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BookingLoading.jsx */ "./src/component/Chat/BookingLoading.jsx");
/* harmony import */ var _BookingFinish_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BookingFinish.jsx */ "./src/component/Chat/BookingFinish.jsx");
/* harmony import */ var _BookingError_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BookingError.jsx */ "./src/component/Chat/BookingError.jsx");
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










var Booking = /*#__PURE__*/function (_Component) {
  _inherits(Booking, _Component);

  var _super = _createSuper(Booking);

  function Booking() {
    _classCallCheck(this, Booking);

    return _super.apply(this, arguments);
  }

  _createClass(Booking, [{
    key: "render",
    value: function render() {
      console.log(bookings, "bookings..");
      var bookings = this.props.bookings;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wrapper-modal"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BookingNone_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BookingLoading_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BookingError_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], null), bookings.data.map(function (booking) {
        if (booking) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: booking.id
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BookingModalSetting_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
            booking: booking
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BookingModalConfirm_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
            booking: booking
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BookingFinish_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
            booking: booking
          }));
        }
      }));
    }
  }]);

  return Booking;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    bookings: state.booking
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Booking));

/***/ }),

/***/ "./src/component/Chat/BookingError.jsx":
/*!*********************************************!*\
  !*** ./src/component/Chat/BookingError.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BookingError; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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



var BookingError = /*#__PURE__*/function (_Component) {
  _inherits(BookingError, _Component);

  var _super = _createSuper(BookingError);

  function BookingError() {
    _classCallCheck(this, BookingError);

    return _super.apply(this, arguments);
  }

  _createClass(BookingError, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "js-booking-error",
        className: "modal modal-booking"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-button-question"
      }, "\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\uFF1A", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "alert alert-danger"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "group-box-total"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wrapper-button-setting"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn-booking btn-user-cancel",
        href: "#",
        rel: "modal:close"
      }, "\u30AD\u30E3\u30F3\u30BB\u30EB"))));
    }
  }]);

  return BookingError;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/component/Chat/BookingFinish.jsx":
/*!**********************************************!*\
  !*** ./src/component/Chat/BookingFinish.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _library_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../library/service.js */ "./src/library/service.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./src/config/index.js");
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






var BookingFinish = /*#__PURE__*/function (_Component) {
  _inherits(BookingFinish, _Component);

  var _super = _createSuper(BookingFinish);

  function BookingFinish() {
    _classCallCheck(this, BookingFinish);

    return _super.apply(this, arguments);
  }

  _createClass(BookingFinish, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          auth = _this$props.auth,
          booking = _this$props.booking;

      if (!booking) {
        return null;
      }

      var _calculatorBill = Object(_library_service_js__WEBPACK_IMPORTED_MODULE_2__["calculatorBill"])(booking, auth),
          _calculatorBill2 = _slicedToArray(_calculatorBill, 11),
          work_date = _calculatorBill2[0],
          start = _calculatorBill2[1],
          finish = _calculatorBill2[2],
          salary = _calculatorBill2[3],
          differenceTime = _calculatorBill2[4],
          price = _calculatorBill2[5],
          vat = _calculatorBill2[6],
          myServFeeSitter = _calculatorBill2[7],
          myServFeeEmployer = _calculatorBill2[8],
          stripeServFee = _calculatorBill2[9],
          total = _calculatorBill2[10];

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: this.props.booking.id + "js-booking-finish",
        className: "modal modal-booking"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title"
      }, "\u898B\u7A4D\u66F8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "setting-datetime-picker"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wrapper__datetime-picker"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group wrapper__date-picker"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-calendar-check-outline"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-control"
      }, work_date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group wrapper__time-picker"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-clock-outline"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-control"
      }, start)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group wrapper__time-picker"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-clock-check-outline"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-control"
      }, finish)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "statistical"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-statistical salary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u6642\u9593\u5358\u4FA1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-value"
      }, salary, "\uFFE5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-statistical differenceTime"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u5229\u7528\u4E88\u5B9A\u6642\u9593")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-value"
      }, differenceTime, " \u6642\u9593")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-statistical price"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u30B7\u30C3\u30BF\u30FC/\u5BB6\u4E8B\u4EE3\u884C\u6599\u91D1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-value"
      }, price, "\uFFE5"))), this.props.auth.role_id == _config__WEBPACK_IMPORTED_MODULE_3__["default"].ROLE_USER.sitter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "statistical"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-statistical stripeServFee"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u624B\u6570\u6599"), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-value"
      }, stripeServFee, "\uFFE5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-statistical note"
      }, "\u203B\u65E2\u5B9A\u306E\u624B\u6570\u6599\u304C\u767A\u751F\u3057\u307E\u3059\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-statistical myServFee"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u30B5\u30FC\u30D3\u30B9\u5229\u7528\u6599")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-value"
      }, myServFeeSitter, "\uFFE5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-statistical note"
      }, "\u203B\u30B7\u30B9\u30C6\u30E0\u5229\u7528\u6599\u306F\u3001450\u5186\uFF0B\u7D66\u6599\u306E0.25%")), this.props.auth.role_id == _config__WEBPACK_IMPORTED_MODULE_3__["default"].ROLE_USER.employer && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "statistical"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-statistical myServFee"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u30B5\u30FC\u30D3\u30B9\u5229\u7528\u6599")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-value"
      }, myServFeeEmployer, "\uFFE5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-statistical note"
      }, "\u203B\u30B7\u30C3\u30BF\u30FC/\u5BB6\u4E8B\u4EE3\u884C\u6599\u91D1\u306E20\uFF05"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-statistical vat"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u6D88\u8CBB\u7A0E\uFF0810\uFF05\uFF09"), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-value"
      }, vat, "\uFFE5"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "group-box-total"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wrapper__total"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "head"
      }, "\u5408\u8A08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-value text-color-warning-color-dark"
      }, total, "\uFFE5"))));
    }
  }]);

  return BookingFinish;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.users,
    bookings: state.booking,
    convertations: state.userChat
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(BookingFinish));

/***/ }),

/***/ "./src/component/Chat/BookingLoading.jsx":
/*!***********************************************!*\
  !*** ./src/component/Chat/BookingLoading.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BookingLoading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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



var BookingLoading = /*#__PURE__*/function (_Component) {
  _inherits(BookingLoading, _Component);

  var _super = _createSuper(BookingLoading);

  function BookingLoading() {
    _classCallCheck(this, BookingLoading);

    return _super.apply(this, arguments);
  }

  _createClass(BookingLoading, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "js-booking-loading",
        className: "modal modal-booking"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-button-question"
      }, "\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u3002\u3057\u3070\u3089\u304F\u304A\u5F85\u3061\u304F\u3060\u3055\u3044"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress progress-success"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "progress-loadding"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "group-box-total"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wrapper-button-setting"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn-booking btn-user-cancel",
        href: "#",
        rel: "modal:close"
      }, "\u30AD\u30E3\u30F3\u30BB\u30EB"))));
    }
  }]);

  return BookingLoading;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/component/Chat/BookingModalConfirm.jsx":
/*!****************************************************!*\
  !*** ./src/component/Chat/BookingModalConfirm.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _library_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../library/service.js */ "./src/library/service.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./src/config/index.js");
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







var BookingModalConfirm = /*#__PURE__*/function (_Component) {
  _inherits(BookingModalConfirm, _Component);

  var _super = _createSuper(BookingModalConfirm);

  function BookingModalConfirm() {
    var _temp, _this;

    _classCallCheck(this, BookingModalConfirm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _super.call.apply(_super, [this].concat(args)), _this.cancelAccept = function () {
      var booking = _this.props.booking;
      jquery__WEBPACK_IMPORTED_MODULE_3___default()("#" + booking.id + "js-booking-setting").modal({
        escapeClose: false,
        clickClose: false,
        showClose: true
      });
    }, _this.finalAccept = function () {
      var _this$props$booking = _this.props.booking,
          id = _this$props$booking.id,
          work_date = _this$props$booking.work_date,
          start = _this$props$booking.start,
          finish = _this$props$booking.finish;

      var channelActive = _this.props.convertations.find(function (channel) {
        return channel.isActive;
      }); //// dispatch test


      var bookingUpdate = {
        booking_id: id,
        sitter_accept: 1,
        status: 1,
        employer_accept: 1,
        start: start,
        finish: finish,
        work_date: work_date,
        tokenAccess: _this.props.auth.tokens.tokenAccess,
        userId: _this.props.auth.id,
        channelName: channelActive.channelName
      };
      Object(_library_service_js__WEBPACK_IMPORTED_MODULE_2__["sendBookingUpdate"])(bookingUpdate);
      jquery__WEBPACK_IMPORTED_MODULE_3___default.a.modal.close();
    }, _temp));
  }

  _createClass(BookingModalConfirm, [{
    key: "render",
    value: function render() {
      var _calculatorBill = Object(_library_service_js__WEBPACK_IMPORTED_MODULE_2__["calculatorBill"])(this.props.booking, this.props.auth),
          _calculatorBill2 = _slicedToArray(_calculatorBill, 11),
          work_date = _calculatorBill2[0],
          start = _calculatorBill2[1],
          finish = _calculatorBill2[2],
          salary = _calculatorBill2[3],
          differenceTime = _calculatorBill2[4],
          price = _calculatorBill2[5],
          vat = _calculatorBill2[6],
          myServFeeSitter = _calculatorBill2[7],
          myServFeeEmployer = _calculatorBill2[8],
          stripeServFee = _calculatorBill2[9],
          total = _calculatorBill2[10];

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: this.props.booking.id + "js-booking-confirm",
        className: "modal modal-booking"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title"
      }, "\u898B\u7A4D\u66F8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "setting-datetime-picker"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wrapper__datetime-picker"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group wrapper__date-picker"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-calendar-check-outline"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-control"
      }, work_date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group wrapper__time-picker"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-clock-outline"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-control"
      }, start)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group wrapper__time-picker"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-clock-check-outline"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-control"
      }, finish)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "statistical"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-statistical salary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u6642\u9593\u5358\u4FA1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-value"
      }, salary, "\uFFE5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-statistical differenceTime"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u5229\u7528\u4E88\u5B9A\u6642\u9593")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-value"
      }, differenceTime, " \u6642\u9593")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-statistical price"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u30B7\u30C3\u30BF\u30FC/\u5BB6\u4E8B\u4EE3\u884C\u6599\u91D1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-value"
      }, price, "\uFFE5"))), this.props.auth.role_id == _config__WEBPACK_IMPORTED_MODULE_4__["default"].ROLE_USER.sitter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "statistical"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-statistical stripeServFee"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u624B\u6570\u6599"), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-value"
      }, stripeServFee, "\uFFE5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-statistical note"
      }, "\u203B\u65E2\u5B9A\u306E\u624B\u6570\u6599\u304C\u767A\u751F\u3057\u307E\u3059\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-statistical myServFee"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u30B5\u30FC\u30D3\u30B9\u5229\u7528\u6599")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-value"
      }, myServFeeSitter, "\uFFE5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-statistical note"
      }, "\u203B\u30B7\u30B9\u30C6\u30E0\u5229\u7528\u6599\u306F\u3001450\u5186\uFF0B\u7D66\u6599\u306E0.25%")), this.props.auth.role_id == _config__WEBPACK_IMPORTED_MODULE_4__["default"].ROLE_USER.employer && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "statistical"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-statistical myServFee"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u30B5\u30FC\u30D3\u30B9\u5229\u7528\u6599")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-value"
      }, myServFeeEmployer, "\uFFE5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-statistical note"
      }, "\u203B\u30B7\u30C3\u30BF\u30FC/\u5BB6\u4E8B\u4EE3\u884C\u6599\u91D1\u306E20\uFF05"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-statistical vat"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u6D88\u8CBB\u7A0E\uFF0810\uFF05\uFF09"), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-value"
      }, vat, "\uFFE5"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "group-box-total"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wrapper__total"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "head"
      }, "\u5408\u8A08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-value text-color-warning-color-dark"
      }, total, "\uFFE5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-button-question"
      }, "\u4E0A\u8A18\u5185\u5BB9\u3067\u304A\u9593\u9055\u3044\u3042\u308A\u307E\u305B\u3093\u304B\uFF1F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wrapper-button-setting"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn-booking btn-user-cancel",
        onClick: this.cancelAccept
      }, "\u30AD\u30E3\u30F3\u30BB\u30EB"), this.props.auth.role_id == _config__WEBPACK_IMPORTED_MODULE_4__["default"].ROLE_USER.employer && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn-booking btn-user-approved",
        onClick: this.finalAccept
      }, "\u4E88\u7D04\u3059\u308B"))));
    }
  }]);

  return BookingModalConfirm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.users,
    convertations: state.userChat
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(BookingModalConfirm));

/***/ }),

/***/ "./src/component/Chat/BookingModalSetting.jsx":
/*!****************************************************!*\
  !*** ./src/component/Chat/BookingModalSetting.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ "./src/config/index.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../action */ "./src/action/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery-datepicker */ "./node_modules/jquery-datepicker/jquery-datepicker.js");
/* harmony import */ var jquery_datepicker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery_datepicker__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery_datepicker_i18n_jquery_ui_datepicker_ja__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery-datepicker/i18n/jquery.ui.datepicker-ja */ "./node_modules/jquery-datepicker/i18n/jquery.ui.datepicker-ja.js");
/* harmony import */ var jquery_datepicker_i18n_jquery_ui_datepicker_ja__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery_datepicker_i18n_jquery_ui_datepicker_ja__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var timepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! timepicker */ "./node_modules/timepicker/jquery.timepicker.min.js");
/* harmony import */ var timepicker__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(timepicker__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _library_service_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../library/service.js */ "./src/library/service.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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









 // Just pass your jquery instance and you're done

jquery_datepicker__WEBPACK_IMPORTED_MODULE_5___default()(jquery__WEBPACK_IMPORTED_MODULE_4___default.a);
jquery_datepicker_i18n_jquery_ui_datepicker_ja__WEBPACK_IMPORTED_MODULE_6___default()(jquery__WEBPACK_IMPORTED_MODULE_4___default.a);

var BookingModalSetting = /*#__PURE__*/function (_Component) {
  _inherits(BookingModalSetting, _Component);

  var _super = _createSuper(BookingModalSetting);

  function BookingModalSetting(props) {
    var _this;

    _classCallCheck(this, BookingModalSetting);

    _this = _super.call(this, props);

    _this.sitterAcceptBill = function () {
      var _calculatorBill = Object(_library_service_js__WEBPACK_IMPORTED_MODULE_8__["calculatorBill"])(_this.state, _this.props.auth),
          _calculatorBill2 = _slicedToArray(_calculatorBill, 11),
          work_date = _calculatorBill2[0],
          start = _calculatorBill2[1],
          finish = _calculatorBill2[2],
          salary = _calculatorBill2[3],
          differenceTime = _calculatorBill2[4],
          price = _calculatorBill2[5],
          vat = _calculatorBill2[6],
          myServFeeSitter = _calculatorBill2[7],
          myServFeeEmployer = _calculatorBill2[8],
          stripeServFee = _calculatorBill2[9],
          total = _calculatorBill2[10];

      var channelActive = _this.props.convertations.find(function (channel) {
        return channel.isActive;
      }); //// dispatch test


      var bookingUpdate = {
        booking_id: _this.state.id,
        sitter_accept: 1,
        start: start,
        finish: finish,
        work_date: work_date,
        tokenAccess: _this.props.auth.tokens.tokenAccess,
        userId: _this.props.auth.id,
        channelName: channelActive.channelName
      };
      Object(_library_service_js__WEBPACK_IMPORTED_MODULE_8__["sendBookingUpdate"])(bookingUpdate);
      jquery__WEBPACK_IMPORTED_MODULE_4___default.a.modal.close();
    };

    _this.employerAcceptBill = function () {
      var _calculatorBill3 = Object(_library_service_js__WEBPACK_IMPORTED_MODULE_8__["calculatorBill"])(_this.state, _this.props.auth),
          _calculatorBill4 = _slicedToArray(_calculatorBill3, 11),
          work_date = _calculatorBill4[0],
          start = _calculatorBill4[1],
          finish = _calculatorBill4[2],
          salary = _calculatorBill4[3],
          differenceTime = _calculatorBill4[4],
          price = _calculatorBill4[5],
          vat = _calculatorBill4[6],
          myServFeeSitter = _calculatorBill4[7],
          myServFeeEmployer = _calculatorBill4[8],
          stripeServFee = _calculatorBill4[9],
          total = _calculatorBill4[10];

      var channelActive = _this.props.convertations.find(function (channel) {
        return channel.isActive;
      }); //// dispatch test


      var bookingUpdate = {
        booking_id: _this.state.id,
        employer_accept: 1,
        start: start,
        finish: finish,
        work_date: work_date,
        tokenAccess: _this.props.auth.tokens.tokenAccess,
        userId: _this.props.auth.id,
        channelName: channelActive.channelName
      };
      Object(_library_service_js__WEBPACK_IMPORTED_MODULE_8__["sendBookingUpdate"])(bookingUpdate);
      jquery__WEBPACK_IMPORTED_MODULE_4___default.a.modal.close();
    };

    var booking = _this.props.booking;
    _this.state = {
      id: booking.id,
      work_date: booking.work_date,
      start: booking.start,
      finish: booking.finish,
      salary: booking.salary,
      sitter_accept: booking.sitter_accept,
      employer_accept: booking.employer_accept
    };
    return _this;
  }

  _createClass(BookingModalSetting, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _instance = this,
          selectorTimeStart = '#' + this.state.id + "js-booking-setting .timepickerStart",
          selectorTimeFinish = '#' + this.state.id + "js-booking-setting .timepickerFinish",
          selectorDatepicker = '#' + this.state.id + "js-booking-setting .datepicker";

      jquery__WEBPACK_IMPORTED_MODULE_4___default()(selectorTimeStart).timepicker({
        'timeFormat': 'H:i'
      });
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(selectorTimeFinish).timepicker({
        'timeFormat': 'H:i'
      });
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(selectorTimeStart).on('changeTime', function () {
        var startChange = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).val();

        _instance.setState({
          start: startChange
        });
      });
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(selectorTimeFinish).on('changeTime', function () {
        var finishChange = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).val();

        _instance.setState({
          finish: finishChange
        });
      });
      jquery__WEBPACK_IMPORTED_MODULE_4___default()(selectorDatepicker).datepicker({
        dateFormat: 'yy-mm-dd',
        // beforeShowDay: function(d) {
        //     // normalize the date for searching in array
        //     var result = "2020-09-26,2020-09-12,2020-09-08,2020-09-10";
        //     var datelist = result.split(","); // populate the array
        //     var day = ("00" + d.getDate()).slice(-2),
        //     month = ("00" + (d.getMonth() + 1)).slice(-2),
        //     year = d.getFullYear(),
        //     fullDate = year + "-" + month + "-" + day
        //     return [$.inArray(fullDate, datelist) >= 0 ? true : false, ""]
        // }
        onSelect: function onSelect(dateText, inst) {
          _instance.setState({
            work_date: dateText
          });
        }
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var booking = this.props.booking;

      if (booking.update == true) {
        this.setState({
          id: booking.id,
          work_date: booking.work_date,
          start: booking.start,
          finish: booking.finish,
          salary: booking.salary,
          sitter_accept: booking.sitter_accept,
          employer_accept: booking.employer_accept
        }, function () {
          var booking = _objectSpread(_objectSpread({}, this.props.booking), {}, {
            update: false
          });

          this.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_3__["changeBooking"])(booking));
          var selectorTimeStart = '#' + this.state.id + "js-booking-setting .timepickerStart",
              selectorTimeFinish = '#' + this.state.id + "js-booking-setting .timepickerFinish",
              selectorDatepicker = '#' + this.state.id + "js-booking-setting .datepicker";
          jquery__WEBPACK_IMPORTED_MODULE_4___default()(selectorTimeStart).val(this.state.start);
          jquery__WEBPACK_IMPORTED_MODULE_4___default()(selectorTimeFinish).val(this.state.finish);
          jquery__WEBPACK_IMPORTED_MODULE_4___default()(selectorDatepicker).val(this.state.work_date);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _calculatorBill5 = Object(_library_service_js__WEBPACK_IMPORTED_MODULE_8__["calculatorBill"])(this.state, this.props.auth),
          _calculatorBill6 = _slicedToArray(_calculatorBill5, 11),
          work_date = _calculatorBill6[0],
          start = _calculatorBill6[1],
          finish = _calculatorBill6[2],
          salary = _calculatorBill6[3],
          differenceTime = _calculatorBill6[4],
          price = _calculatorBill6[5],
          vat = _calculatorBill6[6],
          myServFeeSitter = _calculatorBill6[7],
          myServFeeEmployer = _calculatorBill6[8],
          stripeServFee = _calculatorBill6[9],
          total = _calculatorBill6[10];

      var bookingProps = this.props.booking;
      var isEdit = bookingProps.start != start || bookingProps.finish != finish || bookingProps.work_date != work_date;
      var classBtnSitter, textBtnSitter, clickBtnSitter, classBtnEmployer, textBtnEmployer, clickBtnEmployer;

      if (this.props.auth.role_id == _config__WEBPACK_IMPORTED_MODULE_2__["default"].ROLE_USER.sitter) {
        classBtnSitter = "btn-booking btn-sitter-accept", textBtnSitter = "シッター承認", clickBtnSitter = this.sitterAcceptBill, classBtnEmployer = "btn-booking btn-employer-accept disabled", /// Employer chưa chấp nhận : 利用者未承認
        /// Employer đã đã chấp nhận: 利用者承認した
        textBtnEmployer = this.state.employer_accept ? "利用者承認した" : "利用者未承認", clickBtnEmployer = null;

        if (this.state.sitter_accept && !isEdit) {
          classBtnSitter += ' disabled';
          textBtnSitter = "利用者承認した";
          clickBtnSitter = null;
        }
      }

      if (this.props.auth.role_id == _config__WEBPACK_IMPORTED_MODULE_2__["default"].ROLE_USER.employer) {
        classBtnEmployer = "btn-booking btn-employer-accept", textBtnEmployer = "利用者承認", clickBtnEmployer = this.employerAcceptBill, classBtnSitter = "btn-booking btn-sitter-accept disabled", /// sitter chưa chấp nhận : シッター未承認
        /// sitter đã đã chấp nhận: シッター承認した
        textBtnSitter = this.state.sitter_accept ? "シッター承認した" : "シッター未承認", clickBtnSitter = null;

        if (this.state.employer_accept && !isEdit) {
          classBtnEmployer += ' disabled';
          textBtnEmployer = "シッター承認した";
          clickBtnEmployer = null;
        }
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: this.state.id + "js-booking-setting",
        className: "modal modal-booking"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title"
      }, "\u65E5\u6642\u8ABF\u6574"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "setting-datetime-picker"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wrapper__datetime-picker"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group wrapper__date-picker"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-calendar-check-outline"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "datepicker input-control",
        type: "text",
        autoComplete: "false",
        defaultValue: work_date
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group wrapper__time-picker"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-clock-outline"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "timepickerStart input-control",
        autoComplete: "false",
        defaultValue: start
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group wrapper__time-picker"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-clock-check-outline"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "timepickerFinish input-control",
        autoComplete: "false",
        defaultValue: finish
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "error"
      }, differenceTime <= 0 ? "終了時間は開始時間より後でなければなりません。" : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "statistical"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-statistical salary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u6642\u9593\u5358\u4FA1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-value"
      }, salary, "\uFFE5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-statistical differenceTime"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u5229\u7528\u4E88\u5B9A\u6642\u9593")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-value"
      }, differenceTime, " \u6642\u9593")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-statistical price-with-time"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u30B7\u30C3\u30BF\u30FC/\u5BB6\u4E8B\u4EE3\u884C\u6599\u91D1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-value"
      }, price, "\uFFE5"))), this.props.auth.role_id == _config__WEBPACK_IMPORTED_MODULE_2__["default"].ROLE_USER.sitter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "statistical"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-statistical stripeServFee"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u624B\u6570\u6599"), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-value"
      }, stripeServFee, "\uFFE5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-statistical note"
      }, "\u203B\u65E2\u5B9A\u306E\u624B\u6570\u6599\u304C\u767A\u751F\u3057\u307E\u3059\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-statistical myServFee"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u30B5\u30FC\u30D3\u30B9\u5229\u7528\u6599")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-value"
      }, myServFeeSitter, "\uFFE5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-statistical note"
      }, "\u203B\u30B7\u30B9\u30C6\u30E0\u5229\u7528\u6599\u306F\u3001450\u5186\uFF0B\u7D66\u6599\u306E0.25%")), this.props.auth.role_id == _config__WEBPACK_IMPORTED_MODULE_2__["default"].ROLE_USER.employer && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "statistical"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-statistical myServFee"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u30B5\u30FC\u30D3\u30B9\u5229\u7528\u6599")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-value"
      }, myServFeeEmployer, "\uFFE5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-statistical note"
      }, "\u203B\u30B7\u30C3\u30BF\u30FC/\u5BB6\u4E8B\u4EE3\u884C\u6599\u91D1\u306E20\uFF05"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-statistical vat"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u6D88\u8CBB\u7A0E\uFF0810\uFF05\uFF09"), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-value"
      }, vat, "\uFFE5"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "group-box-total"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wrapper__total"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "head"
      }, "\u5408\u8A08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-value text-color-warning-color-dark"
      }, total, "\uFFE5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-button-question"
      }, "\u4E0A\u8A18\u5185\u5BB9\u3067\u304A\u9593\u9055\u3044\u3042\u308A\u307E\u305B\u3093\u304B\uFF1F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: differenceTime < 0 ? "d-none" : "wrapper-button-setting"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: classBtnSitter,
        onClick: clickBtnSitter
      }, " ", textBtnSitter, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: classBtnEmployer,
        onClick: clickBtnEmployer
      }, " ", textBtnEmployer, " "))));
    }
  }]);

  return BookingModalSetting;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.users,
    convertations: state.userChat
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(BookingModalSetting));

/***/ }),

/***/ "./src/component/Chat/BookingNone.jsx":
/*!********************************************!*\
  !*** ./src/component/Chat/BookingNone.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BookingNone; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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



var BookingNone = /*#__PURE__*/function (_Component) {
  _inherits(BookingNone, _Component);

  var _super = _createSuper(BookingNone);

  function BookingNone() {
    _classCallCheck(this, BookingNone);

    return _super.apply(this, arguments);
  }

  _createClass(BookingNone, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "js-booking-none",
        className: "modal modal-booking"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-button-question"
      }, "\u3053\u306E\u30E6\u30FC\u30B6\u30FC\u306B\u306F\u3001\u307E\u3060\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u307E\u305B\u3093"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "group-box-total"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wrapper-button-setting"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn-booking btn-user-cancel",
        href: "#",
        rel: "modal:close"
      }, "\u30AD\u30E3\u30F3\u30BB\u30EB"))));
    }
  }]);

  return BookingNone;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/component/Chat/BtnBookingModal.jsx":
/*!************************************************!*\
  !*** ./src/component/Chat/BtnBookingModal.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery-modal */ "./node_modules/jquery-modal/jquery.modal.js");
/* harmony import */ var jquery_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery_modal__WEBPACK_IMPORTED_MODULE_3__);
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






var BtnBookingModal = /*#__PURE__*/function (_Component) {
  _inherits(BtnBookingModal, _Component);

  var _super = _createSuper(BtnBookingModal);

  function BtnBookingModal(props) {
    var _this;

    _classCallCheck(this, BtnBookingModal);

    _this = _super.call(this, props);

    _this.chooseOrder = function () {
      var _this$props = _this.props,
          bookings = _this$props.bookings,
          userChat = _this$props.userChat;
      console.log(bookings, "btn click");

      if (!bookings.fetch) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()("#js-booking-loading").modal({
          escapeClose: false,
          clickClose: false,
          showClose: true
        });
        return false;
      }

      var channelActiveChat = userChat.find(function (channel) {
        return channel.isActive;
      });
      var userActive = channelActiveChat.user;
      var booking = bookings.data.find(function (booking) {
        return booking.employer_id == userActive.id || booking.sitter_id == userActive.id;
      });

      if (!booking) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()("#js-booking-none").modal({
          escapeClose: false,
          clickClose: false,
          showClose: true
        });
        return false;
      }

      var status = booking.status,
          sitter_accept = booking.sitter_accept,
          employer_accept = booking.employer_accept;

      if (sitter_accept && employer_accept && !status) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()("#" + booking.id + "js-booking-confirm").modal({
          escapeClose: false,
          clickClose: false,
          showClose: true
        });
      } else if (!sitter_accept || !employer_accept) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()("#" + booking.id + "js-booking-setting").modal({
          escapeClose: false,
          clickClose: false,
          showClose: true
        });
      } else if (sitter_accept && employer_accept && status) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()("#" + booking.id + "js-booking-finish").modal({
          escapeClose: false,
          clickClose: false,
          showClose: true
        });
      }
    };

    return _this;
  }

  _createClass(BtnBookingModal, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-calendar-month calendar",
        onClick: this.chooseOrder
      });
    }
  }]);

  return BtnBookingModal;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.users,
    bookings: state.booking,
    userChat: state.userChat
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(BtnBookingModal));

/***/ }),

/***/ "./src/component/Chat/Emoji.jsx":
/*!**************************************!*\
  !*** ./src/component/Chat/Emoji.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_chat_emoji_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scss/chat/emoji.scss */ "./src/scss/chat/emoji.scss");
/* harmony import */ var _scss_chat_emoji_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_chat_emoji_scss__WEBPACK_IMPORTED_MODULE_1__);
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




var Emoji = /*#__PURE__*/function (_Component) {
  _inherits(Emoji, _Component);

  var _super = _createSuper(Emoji);

  function Emoji() {
    var _temp, _this;

    _classCallCheck(this, Emoji);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _super.call.apply(_super, [this].concat(args)), _this.addIconInputChat = function (event) {
      var input = document.getElementById("js-input-chat");

      if (input) {
        var content = input.value; /// add icon 

        content = content + _this.props.symbol;
        input.value = content;
      }
    }, _temp));
  }

  _createClass(Emoji, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "component-emoji",
        onClick: this.addIconInputChat
      }, this.props.symbol);
    }
  }]);

  return Emoji;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Emoji);

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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _scss_chat_head_info_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scss/chat/head-info.scss */ "./src/scss/chat/head-info.scss");
/* harmony import */ var _scss_chat_head_info_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_chat_head_info_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./src/config/index.js");
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
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      ////set height component
      var sidebar = document.getElementsByClassName("component-sidebar-chat");

      if (sidebar.length) {
        var messages = document.getElementsByClassName("component-list-message");

        if (messages.length) {
          sidebar[0].style.height = messages[0].clientHeight + "px";
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var channels = this.props.channels;
      var channelActive = channels.find(function (channel) {
        return channel.isActive;
      });

      if (!channelActive) {
        return null;
      }

      var textOnline = channelActive.user.online ? "オンライン" : "オフライン";
      var hrefUser = null;

      if (typeof ROUTE_VIEW_SITTER != 'undefined' && typeof ROUTE_VIEW_EMPLOYER != 'undefined') {
        if (channelActive.user.role_id == _config__WEBPACK_IMPORTED_MODULE_3__["default"].ROLE_USER.sitter) {
          hrefUser = ROUTE_VIEW_SITTER + "/" + channelActive.user.id;
        }

        if (channelActive.user.role_id == _config__WEBPACK_IMPORTED_MODULE_3__["default"].ROLE_USER.employer) {
          hrefUser = ROUTE_VIEW_EMPLOYER + "/" + channelActive.user.id;
        }
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-head-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-active-chat"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
        className: "state-avatar active-online"
      }, hrefUser ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: hrefUser
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _config__WEBPACK_IMPORTED_MODULE_3__["default"].SERVER_PHP.URL + channelActive.user.avatar,
        alt: ""
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _config__WEBPACK_IMPORTED_MODULE_3__["default"].SERVER_PHP.URL + channelActive.user.avatar,
        alt: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-info"
      }, hrefUser ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: hrefUser,
        className: "name"
      }, channelActive.user.first_name + " " + channelActive.user.last_name) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "name"
      }, channelActive.user.first_name + " " + channelActive.user.last_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: (channelActive.user.online ? "active-now" : '') + " time-online"
      }, textOnline))));
    }
  }]);

  return HeadInfo;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    channels: state.userChat,
    users: state.users,
    user: state.users,
    client: state.client
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(HeadInfo));

/***/ }),

/***/ "./src/component/Chat/InputSendChat.jsx":
/*!**********************************************!*\
  !*** ./src/component/Chat/InputSendChat.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ListEmoji_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListEmoji.jsx */ "./src/component/Chat/ListEmoji.jsx");
/* harmony import */ var _MessageChatTyping_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MessageChatTyping.jsx */ "./src/component/Chat/MessageChatTyping.jsx");
/* harmony import */ var _Booking_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Booking.jsx */ "./src/component/Chat/Booking.jsx");
/* harmony import */ var _BtnBookingModal_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BtnBookingModal.jsx */ "./src/component/Chat/BtnBookingModal.jsx");
/* harmony import */ var _scss_chat_input_send_chat_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../scss/chat/input-send-chat.scss */ "./src/scss/chat/input-send-chat.scss");
/* harmony import */ var _scss_chat_input_send_chat_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scss_chat_input_send_chat_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/index.js */ "./src/config/index.js");
/* harmony import */ var _library_service_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../library/service.js */ "./src/library/service.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);
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












var InputSendChat = /*#__PURE__*/function (_Component) {
  _inherits(InputSendChat, _Component);

  var _super = _createSuper(InputSendChat);

  function InputSendChat(props) {
    var _this;

    _classCallCheck(this, InputSendChat);

    _this = _super.call(this, props);

    _this.submitMessageChat = function (message, style, attachment) {
      // console.log({ message, style, attachment })
      if (!message) {
        if (style == "IMAGE") {
          message = style;
        } else {
          return false;
        }
      }

      if (!style) {
        var emojiChat = _config_index_js__WEBPACK_IMPORTED_MODULE_7__["default"].EMOJIS.filter(function (emoji) {
          return emoji.symbol == message.trim();
        });

        if (emojiChat.length) {
          style = "EMOJI";
        }
      }

      if (this.props.user) {
        /// là nếu token hết hạn thì phải f5 trình duyệt
        var user = this.props.user,
            instance = this;
        var diff = (new Date().getTime() - new Date(user.tokens.period).getTime()) / 1000;

        if (diff >= user.tokens.expire) {
          /// fetch new token
          location.reload();
        }

        var messageSendToChannel = message;
        var channelSend = this.props.userChat.find(function (channel) {
          return channel.isActive == true;
        });
        var channelId = channelSend.id,
            tokenAccess = user.tokens.tokenAccess,
            detect = this.props.client;
        Object(_library_service_js__WEBPACK_IMPORTED_MODULE_8__["sendMessageToChannel"])(messageSendToChannel, style, attachment, channelId, tokenAccess, detect, instance);
      }
    };

    _this.handleSendEmojiSubmit = function () {
      var message = " 💝 ";
      var style = "EMOJI";

      _this.submitMessageChat(message, style, null);
    };

    _this.handleSendMessageSubmit = function () {
      var style = "";
      var urlAttachment = [];
      var imagesDom = document.getElementById("js-image--block");
      var images = imagesDom.getElementsByClassName("remove-image");
      var message = document.getElementById("js-input-chat").value;

      if (images.length && !message) {
        message = 'IMAGE';
      }

      if (!message) {
        return false;
      }

      document.getElementById("js-input-chat").value = '';

      if (images.length) {
        style = "IMAGE";
        urlAttachment = [];

        for (var index_image_send = 0; index_image_send < images.length; index_image_send++) {
          if (!images[index_image_send].classList.contains('js-sign-url')) {
            urlAttachment.push({
              url: images[index_image_send].getAttribute('data-url'),
              type: images[index_image_send].getAttribute('data-type'),
              time: new Date().getTime()
            });
          }
        }
      }

      document.getElementById("js-image--block").innerHTML = '';

      _this.submitMessageChat(message, style, urlAttachment);
    };

    _this.handleSendMessageDown = function (event) {
      if (event.keyCode == 13 && !event.shiftKey) {
        var style = "";
        var urlAttachment = [];
        var imagesDom = document.getElementById("js-image--block");
        var images = imagesDom.getElementsByClassName("remove-image");

        if (images.length) {
          style = "IMAGE";
          urlAttachment = [];

          for (var index_image_send = 0; index_image_send < images.length; index_image_send++) {
            if (!images[index_image_send].classList.contains('js-sign-url')) {
              urlAttachment.push({
                url: images[index_image_send].getAttribute('data-url'),
                type: images[index_image_send].getAttribute('data-type'),
                time: new Date().getTime()
              });
            }
          }
        }

        document.getElementById("js-image--block").innerHTML = '';

        _this.submitMessageChat(event.target.value, style, urlAttachment);

        _this.setState({
          sendChat: true
        });

        document.getElementById("js-input-chat").value = "";
        return false;
      }

      if (event.keyCode == 32) {
        var input = document.getElementById("js-input-chat");

        if (input) {
          var content = input.value; /// get word last

          var words = content.split(" ");
          var wordLastest = words[words.length - 1]; //// check have sysbol 

          var emojisCall = _config_index_js__WEBPACK_IMPORTED_MODULE_7__["default"].EMOJIS.filter(function (item) {
            return item.sign == wordLastest;
          });

          if (emojisCall.length) {
            /// add icon 
            var lastIndex = content.lastIndexOf(" ");
            input.value = content.substring(0, lastIndex) + " " + emojisCall[0].symbol;
          }
        }
      }
    };

    _this.handleSendMessageUp = function () {
      if (_this.state.sendChat) {
        _this.setState({
          sendChat: false
        });

        document.getElementById("js-input-chat").value = "";
      }
    };

    _this.imageFileCallback = function (imgLoading) {
      // add it in editor
      imgLoading.width = 100; /// create wrapper img

      var wrapperImage = document.createElement("div");
      wrapperImage.className = "remove-image js-sign-url";

      wrapperImage.onclick = function () {
        this.remove();
      };

      wrapperImage.appendChild(imgLoading);
      document.getElementById("js-image--block").appendChild(wrapperImage);
    };

    _this.retrieveImage = function (file) {
      // console.log( file )
      var callback = _this.imageFileCallback; // Retrieve image on clipboard as blob

      Object(_library_service_js__WEBPACK_IMPORTED_MODULE_8__["saveBlobToServer"])(file); // Create an image

      var img = new Image(); // Once the image loads, render the img on the canvas

      img.onload = function () {
        // Update dimensions of the canvas with the dimensions of the image
        callback(this);
      }; // Crossbrowser support for URL


      var URLObj = window.URL || window.webkitURL; // Creates a DOMString containing a URL representing the object given in the parameter
      // namely the original Blob

      try {
        img.src = URLObj.createObjectURL(file);
      } catch (error) {
        console.log(error);
      }
    };

    _this.retrieveFile = function (file) {
      var callback = _this.imageFileCallback; // Retrieve image on clipboard as blob

      Object(_library_service_js__WEBPACK_IMPORTED_MODULE_8__["saveBlobToServer"])(file); // Create an image

      var img = new Image(); // Once the image loads, render the img on the canvas

      img.onload = function () {
        // Update dimensions of the canvas with the dimensions of the image
        callback(this);
      }; // Crossbrowser support for URL


      var URLObj = window.URL || window.webkitURL; // Creates a DOMString containing a URL representing the object given in the parameter
      // namely the original Blob

      try {
        img.src = _config_index_js__WEBPACK_IMPORTED_MODULE_7__["default"].SERVER_PHP.URL + "/image/folder.jpg";
      } catch (error) {
        console.log(error);
      }
    };

    _this.retrieveImageFromClipboardAsBlob = function (pasteEvent) {
      var callback = _this.imageFileCallback;

      if (!pasteEvent.clipboardData) {
        if (typeof callback == "function") {
          /// call calback function undefine
          callback(undefined);
        }
      }

      var items = pasteEvent.clipboardData.items;

      if (!items) {
        if (typeof callback == "function") {
          /// call calback function undefine
          callback(undefined);
        }
      }

      for (var i = 0; i < items.length; i++) {
        // Skip content if not image
        if (items[i].type.indexOf("image") == -1) continue;
        var file = items[i].getAsFile();

        _this.retrieveImage(file);
      }
    };

    _this.showListEmoji = function (event) {
      var emojis = document.getElementById("js-emojis");

      if (emojis) {
        emojis.classList.add("show-temp");
      }
    };

    _this.handleSendChatClick = function () {
      //// send class is write message
      document.getElementById("js-is-write-message").classList.add("follow-conversation"); ///send typing 

      var user = _this.props.user;

      var channelSend = _this.props.userChat.find(function (channel) {
        return channel.isActive == true;
      });

      var channelId = channelSend.id,
          channelName = channelSend.channelName,
          tokenAccess = user.tokens.tokenAccess;
      Object(_library_service_js__WEBPACK_IMPORTED_MODULE_8__["sendTypingMessageToChannel"])(channelId, channelName, tokenAccess);
    };

    _this.chooseFile = function () {
      document.getElementById("image-file").click();
    };

    _this.saveFile = function () {
      var file = document.getElementById("image-file").files[0];
      var accept = /(\.jpg|\.jpeg|\.bmp|\.gif|\.png|\.image)$/i;

      if (accept.exec(file.name)) {
        _this.retrieveImage(file);

        return false;
      }

      var accept = /(\.xls|\.xlsx|\.csv|\.pdf|\.doc|\.docx)$/i;

      if (accept.exec(file.name)) {
        _this.retrieveFile(file);

        return false;
      }

      alert("File extension not supported!");
    };

    _this.state = {
      sendChat: false
    };
    _this.submitMessageChat = _this.submitMessageChat.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(InputSendChat, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var sup = this;
      window.addEventListener("paste", function (event) {
        // Handle the event
        sup.retrieveImageFromClipboardAsBlob(event);
      }, false);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var userChat = this.props.userChat;
      var channelActiveChat = userChat.find(function (channel) {
        return channel.isActive;
      });
      var messages = channelActiveChat && channelActiveChat.message; //console.log("|input send chat componentDidUpdate")

      var domScroll = document.getElementById("js-scroll-to-bottom");
      var domWriter = document.getElementById("js-is-write-message"); //console.log(domScroll.scrollHeight, domScroll.clientHeight + "listenReadMessageNewUser")

      if (domWriter && domScroll && domScroll.scrollHeight == domScroll.clientHeight) {
        Object(_library_service_js__WEBPACK_IMPORTED_MODULE_8__["listenReadMessageNewUser"])(messages, channelActiveChat);
      } else if (domScroll && domWriter && domWriter.classList.contains('follow-conversation')) {
        document.getElementById('js-scroll-to-bottom').scrollTop = document.getElementById('js-scroll-to-bottom').scrollHeight;

        if (jquery__WEBPACK_IMPORTED_MODULE_9___default()("#js-scroll-to-bottom img").length) {
          jquery__WEBPACK_IMPORTED_MODULE_9___default()("#js-scroll-to-bottom img").one("load", function () {
            if (document.getElementById('js-scroll-to-bottom')) {
              document.getElementById('js-scroll-to-bottom').scrollTop = document.getElementById('js-scroll-to-bottom').scrollHeight;
            }
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.user || !this.props.socket || !this.props.userChat.length) {
        return null;
      }

      var userChat = this.props.userChat;
      var channelActiveChat = userChat.find(function (channel) {
        return channel.isActive;
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "js-is-write-message",
        className: "component-input-send-chat follow-conversation"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MessageChatTyping_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        toUser: channelActiveChat
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "js-image--block",
        className: "image-block"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BtnBookingModal_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-file-cloud-outline file",
        onClick: this.chooseFile
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "image-file",
        type: "file",
        className: "d-none",
        accept: ".xls,.xlsx,.csv,image/*,.pdf,.doc,.docx",
        onChange: this.saveFile
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-sticker-emoji emoticon",
        onClick: this.showListEmoji
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        id: "js-input-chat",
        onKeyDown: this.handleSendMessageDown,
        onKeyUp: this.handleSendMessageUp,
        onClick: this.handleSendChatClick,
        placeholder: "\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u66F8\u304F..."
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-send-outline send",
        onClick: this.handleSendMessageSubmit
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-heart-multiple-outline react",
        onClick: this.handleSendEmojiSubmit
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListEmoji_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Booking_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null));
    }
  }]);

  return InputSendChat;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.users,
    client: state.client,
    userChat: state.userChat,
    socket: state.socket
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(InputSendChat));

/***/ }),

/***/ "./src/component/Chat/ListEmoji.jsx":
/*!******************************************!*\
  !*** ./src/component/Chat/ListEmoji.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Emoji_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Emoji.jsx */ "./src/component/Chat/Emoji.jsx");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/index.js */ "./src/config/index.js");
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





var ListEmoji = /*#__PURE__*/function (_Component) {
  _inherits(ListEmoji, _Component);

  var _super = _createSuper(ListEmoji);

  function ListEmoji(props) {
    _classCallCheck(this, ListEmoji);

    return _super.call(this, props);
  }

  _createClass(ListEmoji, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "js-emojis",
        className: "component-list-emoji"
      }, _config_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].EMOJIS.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Emoji_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: item.sign,
          symbol: item.symbol,
          sign: item.sign
        });
      }));
    }
  }]);

  return ListEmoji;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ListEmoji);

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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _HeadInfo_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeadInfo.jsx */ "./src/component/Chat/HeadInfo.jsx");
/* harmony import */ var _MessageChat_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MessageChat.jsx */ "./src/component/Chat/MessageChat.jsx");
/* harmony import */ var _InputSendChat_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InputSendChat.jsx */ "./src/component/Chat/InputSendChat.jsx");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _scss_chat_list_message_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../scss/chat/list-message.scss */ "./src/scss/chat/list-message.scss");
/* harmony import */ var _scss_chat_list_message_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scss_chat_list_message_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _library_service_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../library/service.js */ "./src/library/service.js");
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
      var channels = this.props.channels;
      var channelActiveChat = channels.find(function (channel) {
        return channel.isActive;
      });
      var messages = channelActiveChat && channelActiveChat.message;
      var lstMessage = document.getElementById('js-scroll-to-bottom');

      if (lstMessage) {
        jquery__WEBPACK_IMPORTED_MODULE_5___default()('#js-scroll-to-bottom').on('scroll', function () {
          Object(_library_service_js__WEBPACK_IMPORTED_MODULE_7__["listenScrollMessage"])(this, messages, channelActiveChat);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var channels = this.props.channels;
      var channelActiveChat = channels.find(function (channel) {
        return channel.isActive;
      });
      var messages = channelActiveChat && channelActiveChat.message;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-list-message"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HeadInfo_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wrapper-list-message",
        id: "js-scroll-to-bottom"
      }, messages && messages.map(function (message, key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MessageChat_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: "message-chat" + key + channelActiveChat.id,
          message: message,
          channelActiveChat: channelActiveChat
        });
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InputSendChat_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null));
    }
  }]);

  return ListMessage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    channels: state.userChat
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(ListMessage));

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
      }, message.content), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "read"
      }, !message.type && (!message.read ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-check-circle-outline"
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-check-circle"
      }))))));
    }
  }]);

  return MessageChat;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.users
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(MessageChat));

/***/ }),

/***/ "./src/component/Chat/MessageChatTyping.jsx":
/*!**************************************************!*\
  !*** ./src/component/Chat/MessageChatTyping.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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



var MessageChatTyping = /*#__PURE__*/function (_Component) {
  _inherits(MessageChatTyping, _Component);

  var _super = _createSuper(MessageChatTyping);

  function MessageChatTyping() {
    _classCallCheck(this, MessageChatTyping);

    return _super.apply(this, arguments);
  }

  _createClass(MessageChatTyping, [{
    key: "render",
    value: function render() {
      var toUser = this.props.toUser;

      if (!toUser) {
        return null;
      }

      var channelInfor = toUser;
      var userTyping = channelInfor.user;
      var typeMessage = 'float-left ';
      var nameTyping = '';

      if (userTyping.first_name && userTyping.last_name) {
        nameTyping = userTyping.first_name + " " + userTyping.last_name;
        var limitCharacter = 20;
        if (nameTyping.length > limitCharacter) nameTyping = '[' + nameTyping.substring(0, limitCharacter) + '...] ';
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "js-typing",
        className: "component-message-chat typing-chat-messsage",
        channel: toUser.id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: typeMessage + "chat-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "message-content typing-message"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "typing-text"
      }, nameTyping + " が入力しています "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ticontainer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tiblock"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tidot"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tidot"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tidot"
      })))))));
    }
  }]);

  return MessageChatTyping;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MessageChatTyping);

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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ListUser_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListUser.jsx */ "./src/component/Chat/ListUser.jsx");
/* harmony import */ var _scss_chat_sidebar_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../scss/chat/sidebar.scss */ "./src/scss/chat/sidebar.scss");
/* harmony import */ var _scss_chat_sidebar_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_chat_sidebar_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./src/config/index.js");
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
      var infor = {
        avatar: '',
        name: ''
      };
      var auth = this.props.auth;

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
        src: _config__WEBPACK_IMPORTED_MODULE_4__["default"].SERVER_PHP.URL + infor.avatar,
        alt: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "name"
      }, infor.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "list-user"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListUser_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        conversations: this.props.conversations
      })));
    }
  }]);

  return SideBarChat;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.users,
    conversations: state.userChat
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(SideBarChat));

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
/* harmony import */ var _action_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../action/type.js */ "./src/action/type.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./src/config/index.js");
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
    var _temp, _this;

    _classCallCheck(this, UserChat);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _super.call.apply(_super, [this].concat(args)), _this.changeActiveUser = function (e, id) {
      e.props.dispatch({
        type: _action_type_js__WEBPACK_IMPORTED_MODULE_2__["default"].CHAT.CHANGE_USER_CHAT_DEFAULT,
        payload: id
      });
    }, _temp));
  }

  _createClass(UserChat, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var channel = this.props.channel,
          classActiveOnline = channel.user.online ? ' active ' : '',
          classActiveMessage = channel.isActive ? ' active-message ' : '';

      var _channel$message$slic = channel.message.slice(-1),
          _channel$message$slic2 = _slicedToArray(_channel$message$slic, 1),
          lastItem = _channel$message$slic2[0];

      var munberNoneRead = channel.message.filter(function (message) {
        return !message.read && !message.type;
      }).length;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-user-chat-sidebar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classActiveOnline + classActiveMessage + "user-chat",
        onClick: function onClick() {
          return _this2.changeActiveUser(_this2, channel.id);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
        className: "state-avatar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _config__WEBPACK_IMPORTED_MODULE_3__["default"].SERVER_PHP.URL + channel.user.avatar,
        alt: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "name"
      }, channel.user.first_name + channel.user.last_name), lastItem && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _library_service_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../library/service.js */ "./src/library/service.js");
/* harmony import */ var _scss_chat_chat_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../scss/chat/chat.scss */ "./src/scss/chat/chat.scss");
/* harmony import */ var _scss_chat_chat_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scss_chat_chat_scss__WEBPACK_IMPORTED_MODULE_5__);
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

  function Chat(props) {
    _classCallCheck(this, Chat);

    return _super.call(this, props);
  }

  _createClass(Chat, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      /// mỗi lần vào chat thì buộc phải có 1 refesh token. nếu không thì lỗi. 
      /// Dựa vào refesh token ta sẽ tạo ra 1 access token 
      /// song song việc fetch accesstoken thì lắng nghe trong socket nếu có 
      /// access token thì cho phép start chat
      var instanceChat = this,
          TOKEN_REFESH_DOM = document.getElementById("TOKEN_REFESH"),
          detect = this.props.detect;

      if (TOKEN_REFESH_DOM) {
        /// fetch token access by token refesh 
        var refesh = TOKEN_REFESH_DOM.getAttribute('data-refesh'),
            userId = TOKEN_REFESH_DOM.getAttribute('data-user'); // ///////////////////////////////////////////////////
        // var name = 'id'
        // var url = window.location.href;
        // name = name.replace(/[\[\]]/g, '\\$&');
        // var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        //     results = regex.exec(url)
        // if (!results) userId = null
        // else if (!results[2]) userId = ''
        // else userId = decodeURIComponent(results[2].replace(/\+/g, ' '))
        ////////////////////////////////////////////////////

        if (userId) {
          // && refesh
          Object(_library_service_js__WEBPACK_IMPORTED_MODULE_4__["getAccessTokenByRefesh"])(userId, refesh, detect, instanceChat);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-chat"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bg-chat-temalate"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wrapper-page-chat"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SideBarChat_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListMessage_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
    }
  }]);

  return Chat;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    detect: state.client
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(Chat)); // userChat: (3) [{
//     avatar: "/image/avatar-hero.jpg"
//     channelName: "consulting-web-design-5ed118a04fa75805b7e996fb"
//     id: "5ed118a04fa75805b7e996fd"
//     isActive: true
//     isOnline: true
//     message: (118) [
//         {type: true, content: "gfdgfdg", style: "", attachment: Array(0)}
//         {type: true, content: " 💝 ", style: "EMOJI", attachment: null}
//         {type: true, content: " 😄 ", style: "EMOJI", attachment: Array(0)}
//         {type: true, content: "event.png", style: "IMAGE", attachment: ["/uploads/1591540237064-image.png"] }
//         {…}, {…}, {…}, {…}, {…}, {…}]
//     name: "hùng đẹp trai"
//     timeEndOnline: "2020-05-10 14:47:00"
// }, {…}, {…}]
// users: {
//     avatar: "/image/avatar.jpg"
//     email: "jbtruongthanhhung@gmail.com"
//     name: "天沼澄子"
//     phones: [{…}]
//     tokens: {tokenRefesh: "cebbb0893682c378f4f4595d031d1e54", tokenAccess: "74222488d31e44d65dfa9053aa335073", period: "2020-06-13T02:31:15.597Z", expire: 60}
//     userType: "User"
//     _id: "5ed118a04fa75805b7e996fb"
// }

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
      var port_url = '';
      var protocol = '';

      if (local_port == 443) {
        protocol = "https://";
      } else {
        protocol = "http://";
        port_url = ':' + local_port;
      }

      return protocol + local + port_url;
    }
  },
  ROLE_USER: {
    sitter: 2,
    employer: 3,
    admin: 1
  },
  SERVER_PHP: {
    URL: "http://kaseifu-babysitter.com"
  },
  EMOJIS: [{
    symbol: "🤭",
    sign: ":3"
  }, {
    symbol: "🤣",
    sign: ":v"
  }, {
    symbol: "🙂",
    sign: ":)"
  }, {
    symbol: "🙂",
    sign: "=)"
  }, {
    symbol: "😊",
    sign: ":^)"
  }, {
    symbol: "😀",
    sign: ":}"
  }, {
    symbol: "😁",
    sign: ":o)"
  }, {
    symbol: "😃",
    sign: ":-D"
  }, {
    symbol: "😄",
    sign: ":D"
  }, {
    symbol: "😆",
    sign: "X-D"
  }, {
    symbol: "😍",
    sign: "B^D"
  }, {
    symbol: "🙁",
    sign: ":-("
  }, {
    symbol: "😠",
    sign: ":("
  }, {
    symbol: "😡",
    sign: ":‑<"
  }, {
    symbol: "😞",
    sign: ":["
  }, {
    symbol: "😟",
    sign: ">:["
  }, {
    symbol: "😣",
    sign: ":{"
  }, {
    symbol: "😖",
    sign: ">:("
  }, {
    symbol: "😢",
    sign: ":'‑("
  }, {
    symbol: "😭",
    sign: ":'("
  }, {
    symbol: "😂",
    sign: ":')"
  }, {
    symbol: "😨",
    sign: "D‑':"
  }, {
    symbol: "😧",
    sign: "D:<"
  }, {
    symbol: "😦",
    sign: "D:"
  }, {
    symbol: "😱",
    sign: "D;"
  }, {
    symbol: "😫",
    sign: "D="
  }, {
    symbol: "😩",
    sign: "DX"
  }, {
    symbol: "😮",
    sign: ":-0"
  }, {
    symbol: "😯",
    sign: "8‑0"
  }, {
    symbol: "😲",
    sign: ">:O"
  }, {
    symbol: "😗",
    sign: ":-*"
  }, {
    symbol: "😙",
    sign: ":^*"
  }, {
    symbol: "😚",
    sign: ":^-"
  }, {
    symbol: "😘",
    sign: ":x"
  }, {
    symbol: "😍",
    sign: ":X"
  }, {
    symbol: "😉",
    sign: ";‑)"
  }, {
    symbol: "😜",
    sign: "*-)"
  }, {
    symbol: "😘",
    sign: ";D"
  }, {
    symbol: "😛",
    sign: ":P"
  }, {
    symbol: "😝",
    sign: "x‑p"
  }, {
    symbol: "😜",
    sign: "=p"
  }, {
    symbol: "🤑",
    sign: ">:P"
  }, {
    symbol: "🤔",
    sign: ":‑/"
  }, {
    symbol: "😕",
    sign: ":‑."
  }, {
    symbol: "😟",
    sign: ":S"
  }, {
    symbol: "😐",
    sign: ":‑|"
  }, {
    symbol: "😑",
    sign: ":|"
  }, {
    symbol: "😳",
    sign: ":$"
  }, {
    symbol: "😞",
    sign: ":b3"
  }, {
    symbol: "😖",
    sign: ":‑X"
  }, {
    symbol: "🤐",
    sign: ":&"
  }, {
    symbol: "😶",
    sign: "O:‑)"
  }, {
    symbol: "😇",
    sign: "O:)"
  }, {
    symbol: "👼",
    sign: "0;^)"
  }, {
    symbol: "😈",
    sign: ">;3"
  }, {
    symbol: "😎",
    sign: "|;‑)"
  }, {
    symbol: "😪",
    sign: "|‑O"
  }, {
    symbol: "😏",
    sign: ":‑J"
  }, {
    symbol: "😒",
    sign: "#‑)"
  }, {
    symbol: "😵",
    sign: "%‑)"
  }, {
    symbol: "😕",
    sign: "%)"
  }, {
    symbol: "🤒",
    sign: ":#/"
  }, {
    symbol: "😷",
    sign: ":D-"
  }, {
    symbol: "🤢",
    sign: ":cR"
  }, {
    symbol: "🤕",
    sign: "<:‑/"
  }, {
    symbol: "🤨",
    sign: ":-l"
  }, {
    symbol: "💝",
    sign: "<3"
  }]
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
/*! exports provided: getAccessTokenByRefesh, socketInitialConnect, caller, sendMessageToChannel, sendTypingMessageToChannel, saveBlobToServer, listenScrollMessage, listenReadMessageNewUser, sendBookingUpdate, calculatorBill, calculatorFeeStripe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccessTokenByRefesh", function() { return getAccessTokenByRefesh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socketInitialConnect", function() { return socketInitialConnect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caller", function() { return caller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessageToChannel", function() { return sendMessageToChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendTypingMessageToChannel", function() { return sendTypingMessageToChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveBlobToServer", function() { return saveBlobToServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenScrollMessage", function() { return listenScrollMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenReadMessageNewUser", function() { return listenReadMessageNewUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendBookingUpdate", function() { return sendBookingUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculatorBill", function() { return calculatorBill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculatorFeeStripe", function() { return calculatorFeeStripe; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config/index.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action */ "./src/action/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import Peer from "peerjs"



 /// config global variable

var socket = null,
    globalStream = null,
    EVENT = CONFIG_EVENT; /// end setting variable

window.onclick = function (event) {
  if (event.target) {
    if (event.target.classList.contains('component-emoji')) {
      return;
    }
  }

  var emojis = document.getElementById("js-emojis");

  if (emojis) {
    emojis.classList.remove("show");
    setTimeout(function () {
      if (emojis.classList.contains("show-temp")) {
        emojis.classList.remove("show-temp");
        emojis.classList.add("show");
      }
    }, 100);
  }
};

function getAccessTokenByRefesh(userId, refesh, detect, instanceComponent) {
  var data = {
    userId: userId,
    refesh: refesh,
    detect: JSON.stringify(detect)
  },
      tokensUser = null;
  fetch(_config__WEBPACK_IMPORTED_MODULE_0__["default"].SERVER.ASSET() + '/api/refesh', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function (res) {
    return res.json();
  }).then(function (response) {
    if (response.code != 200) {
      throw new Error("ログインセッションが正しくありません。 再度ログインするか、管理者に連絡してください");
    }

    tokensUser = {
      expire: response.data.expire,
      period: response.data.period,
      tokenAccess: response.data.tokenAccess,
      tokenRefesh: response.data.tokenRefesh
    };
    console.log("setime out  window.location.href = CONFIG.SERVER_PHP.URL");
    setTimeout(function () {
      location.reload();
    }, parseInt(response.data.expire) * 1000);

    var userLogin = _objectSpread(_objectSpread({}, response.data.user), {}, {
      tokens: tokensUser
    });

    localStorage.setItem('user', JSON.stringify(userLogin));
    instanceComponent.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_1__["setterUser"])(userLogin));
    return {
      auth: userLogin,
      detect: detect
    };
  }).then(function (dataFetchChannel) {
    var data = {
      userId: parseInt(userId),
      access: dataFetchChannel.auth.tokens.tokenAccess,
      detect: JSON.stringify(dataFetchChannel.detect)
    };
    return fetchChannelMessage(data);
  }).then(function (dataChannel) {
    if (dataChannel) {
      instanceComponent.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_1__["setterChannels"])(dataChannel));
    }
  })["catch"](function (error) {
    alert("ログインセッションが正しくありません。 再度ログインするか、管理者に連絡してください");
    return false;
  });
}
function socketInitialConnect(socketIOClient, instanceApp) {
  socket = socketIOClient(_config__WEBPACK_IMPORTED_MODULE_0__["default"].SERVER.ASSET());
  var ApplicationDom = document.getElementById("Application");
  socket.on('connect', function () {
    ApplicationDom && ApplicationDom.classList.remove("connect-socket-error"); //// set config

    socketListenner(socket, instanceApp);
    instanceApp.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_1__["setterSocket"])(socket));
    console.log("socket connect");
  });
  socket.on('disconnect', function () {
    instanceApp.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_1__["setterSocket"])(null));
    ApplicationDom && ApplicationDom.classList.add("connect-socket-error"); // window.location.replace(CONFIG.SERVER_PHP.URL)
  });
  socket.on('connect_error', function () {
    ApplicationDom && ApplicationDom.classList.add("connect-socket-error");
    window.location.replace(_config__WEBPACK_IMPORTED_MODULE_0__["default"].SERVER_PHP.URL);
  });
} // //Caller

function caller(channelInfor, user, client) {
  var id = document.getElementById("Application").getAttribute('data-peer');
  openStream().then(function (stream) {
    globalStream = stream;
    playStream('id-peer-local', stream); /// fetch peerjs of user in channel

    return getPeerUserChannel(channelInfor, user, client);
  })["catch"](function (error) {
    console.log("caller", error);
  });
}
function sendMessageToChannel(message, style, attachment, channelId, access, detect, instanceComponent) {
  socket.emit(EVENT.SEND_MESSAGE, {
    message: message,
    style: style,
    attachment: attachment,
    channelId: channelId,
    access: access,
    detect: JSON.stringify(detect)
  }); /// 

  instanceComponent.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_1__["addMessage"])({
    type: true,
    read: true,
    content: message,
    style: style,
    attachment: attachment
  }));
  return false;
}
function sendTypingMessageToChannel(channelId, channelName, access) {
  socket.emit(EVENT.SEND_TYPING, {
    channelId: channelId,
    channelName: channelName,
    access: access
  });
  return false;
}
function saveBlobToServer(file) {
  var SIZE_LIMIT = 5 * 1024 * 1024;

  if (!file.size || file.size > SIZE_LIMIT) {
    handleErrorUploadFile();
  }

  var dataFile = file;
  var form = new FormData();
  form.append('file', dataFile);
  form.append('user_id', 1);
  jquery__WEBPACK_IMPORTED_MODULE_2___default.a.ajax({
    url: _config__WEBPACK_IMPORTED_MODULE_0__["default"].SERVER_PHP.URL + '/api/upload',
    type: 'post',
    enctype: 'multipart/form-data',
    data: form,
    cache: false,
    contentType: false,
    processData: false,
    success: function success(response) {
      if (response.code != 200) {
        handleErrorUploadFile();
      }

      var reWriteUrl = document.getElementById("js-image--block").getElementsByClassName("js-sign-url");

      if (reWriteUrl.length) {
        reWriteUrl[0].setAttribute("data-url", response.data.url);
        var typeFile = response.data.file_name,
            extentionType = null;

        if (typeFile) {
          extentionType = getTypeFile(typeFile);
        }

        if (!extentionType) {
          reWriteUrl[0].remove();
        } else {
          reWriteUrl[0].setAttribute("data-type", extentionType);
          reWriteUrl[0].classList.remove("js-sign-url");
        }
      }
    },
    error: function error(_error) {
      console.log(_error);
      handleErrorUploadFile();
    }
  });
}
function listenScrollMessage(e, messages, channelActive) {
  if (!messages || !messages.length) {
    return false;
  }

  var domScroll = document.getElementById("js-scroll-to-bottom"); // console.log(domScroll.scrollHeight, domScroll.clientHeight + "listenScrollMessage")

  if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(e).scrollTop() + jquery__WEBPACK_IMPORTED_MODULE_2___default()(e).innerHeight() >= jquery__WEBPACK_IMPORTED_MODULE_2___default()(e)[0].scrollHeight) {
    document.getElementById("js-is-write-message").classList.add("follow-conversation"); /// check message unread

    var existNoneRead = messages.some(function (message) {
      return !message.read && !message.type;
    });

    if (existNoneRead) {
      // console.log(EVENT.READ_MESSAGE_ALL, "listenScrollMessage")
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
function listenReadMessageNewUser(messages, channelActive) {
  if (!messages || !messages.length) {
    return false;
  }

  var existNoneRead = messages.some(function (message) {
    return !message.read && !message.type;
  });

  if (existNoneRead) {
    // console.log(EVENT.READ_MESSAGE_ALL, "listenReadMessageNewUser")
    var userLocal = JSON.parse(localStorage.getItem('user'));
    socket.emit(EVENT.READ_MESSAGE_ALL, {
      user: userLocal.id,
      channelId: channelActive.id,
      channelName: channelActive.channelName
    });
  }
}
function sendBookingUpdate(bookingUpdate) {
  socket.emit(EVENT.USER_CHANGE_BOOKING, bookingUpdate);
  return false;
}
function calculatorBill(booking, auth) {
  /// phí sử dụng dịch vụ của sitter là 450 yên + ( 25% của tổng tiền lương )
  var FEE_DEFAULT_SITTER_MIN = 450;
  var PERCENT_FEE_SITTER = 0.0025; /// phí vat 10% 

  var PERCENT_VAT_DEFAULT = 0.1; /// phí của employer 20% 

  var PERCENT_FEE_EMPLOYER = 0.2; /// khi gửi lên stripe thì phí là 3.6%

  var PERCENT_FEE_STRIPE = 0.036;
  var work_date = booking.work_date,
      start = booking.start,
      finish = booking.finish,
      salary = booking.salary;
  var differenceTime = 0,
      price = 0,
      myServFeeSitter = 0,
      myServFeeEmployer = 0,
      stripeServFee = 0,
      vat = 0,
      total = 0;

  if (salary && work_date && start && finish) {
    var _finish$split = finish.split(':'),
        _finish$split2 = _slicedToArray(_finish$split, 2),
        fHour = _finish$split2[0],
        fMinute = _finish$split2[1],
        _start$split = start.split(':'),
        _start$split2 = _slicedToArray(_start$split, 2),
        sHour = _start$split2[0],
        sMinute = _start$split2[1];

    var dateTimeFinish = new Date(1, 1, 2020, fHour, fMinute, 0).getTime(),
        dateTimeStart = new Date(1, 1, 2020, sHour, sMinute, 0).getTime();
    differenceTime = (dateTimeFinish - dateTimeStart) / 1000 / 60 / 60;
    price = Math.floor(differenceTime * salary);
    myServFeeEmployer = Math.floor(price * PERCENT_FEE_EMPLOYER);
    myServFeeSitter = Math.floor(price * PERCENT_FEE_SITTER) + FEE_DEFAULT_SITTER_MIN;
    vat = Math.floor((price + myServFeeEmployer) * PERCENT_VAT_DEFAULT);
    stripeServFee = Math.floor((price + myServFeeEmployer + vat) * PERCENT_FEE_STRIPE);
  }

  if (auth.role_id == _config__WEBPACK_IMPORTED_MODULE_0__["default"].ROLE_USER.sitter) {
    total = price - stripeServFee - myServFeeSitter;
  } else if (auth.role_id == _config__WEBPACK_IMPORTED_MODULE_0__["default"].ROLE_USER.employer) {
    total = price + vat + myServFeeEmployer;
  }

  return [work_date, start, finish, salary, differenceTime, price, vat, myServFeeSitter, myServFeeEmployer, stripeServFee, total];
}
function calculatorFeeStripe(amount, currency) {
  var fees = {
    USD: {
      Percent: 2.9,
      Fixed: 0.30
    },
    GBP: {
      Percent: 2.4,
      Fixed: 0.20
    },
    EUR: {
      Percent: 2.4,
      Fixed: 0.24
    },
    CAD: {
      Percent: 2.9,
      Fixed: 0.30
    },
    AUD: {
      Percent: 2.9,
      Fixed: 0.30
    },
    NOK: {
      Percent: 2.9,
      Fixed: 2
    },
    DKK: {
      Percent: 2.9,
      Fixed: 1.8
    },
    SEK: {
      Percent: 2.9,
      Fixed: 1.8
    },
    JPY: {
      Percent: 3.6,
      Fixed: 0
    },
    MXN: {
      Percent: 3.6,
      Fixed: 3
    }
  };
  var DEFAULT_PERCENT_STRIPE = 3.6;

  var _fee = _fee = {
    Percent: DEFAULT_PERCENT_STRIPE,
    Fixed: 0
  };

  if (typeof feesStripe != 'undefined') {
    _fee = fees[currency];
  }

  var amount = parseFloat(amount);
  var total = (amount + parseFloat(_fee.Fixed)) / (1 - parseFloat(_fee.Percent) / 100);
  var fee = total - amount;
  return {
    amount: amount,
    fee: fee.toFixed(2),
    total: total.toFixed(2)
  };
} //////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

function handleErrorUploadFile() {
  var reWriteUrl = document.getElementById("js-image--block").getElementsByClassName("js-sign-url");

  if (reWriteUrl.length) {
    reWriteUrl[0].remove();
  }
}

function getTypeFile(filename) {
  var accept = /(\.jpg|\.jpeg|\.bmp|\.gif|\.png|\.image)$/i;

  if (accept.exec(filename)) {
    return "img";
  }

  var accept = /(\.xls|\.xlsx|\.csv|\.pdf|\.doc|\.docx)$/i;

  if (accept.exec(filename)) {
    return "file";
  }

  return null;
}

function validateFetchChannelMessage(data) {
  try {
    var access = data.access;

    if (!access) {
      throw new Error("遮る");
    }

    return true;
  } catch (error) {
    return false;
  }
}

function fetchChannelMessage(data) {
  var isValid = validateFetchChannelMessage(data);

  if (!isValid) {
    alert("エラーが発生しました。しばらくしてからもう一度お試しください1");
    return false;
  }

  if (typeof ID_VIEW_USER_CHAT != 'undefined' && ID_VIEW_USER_CHAT) {
    data.userIdActiveChannel = ID_VIEW_USER_CHAT;
  }

  var action = _config__WEBPACK_IMPORTED_MODULE_0__["default"].SERVER.ASSET() + '/api/channels';
  return fetch(action, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function (res) {
    return res.json();
  }).then(function (response) {
    // console.log( response , action)
    if (response.code != 200) {
      throw new Error("エラーが発生しました。しばらくしてからもう一度お試しください2");
    }

    return response.data;
  })["catch"](function (error) {
    console.log(error, " have error ");
    return false;
  });
} //////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
// const peer = new Peer({ 
//     host: '127.0.0.1',
//     port: config.SERVER.PEER_PORT,
//     path: '/myapp'
// })
// peer.on('open', id => {
//     console.log("========================================================================")
//     console.log("====================" + id + "================")
//     document.getElementById("Application").setAttribute('data-peer', id )
//     console.log("========================================================================")
// })
// // //Callee
// peer.on('call', call => {
//     openStream()
//     .then(stream => {
//         call.answer(stream);
//         playStream('localStream', stream);
//         call.on('stream', remoteStream => playStream('remoteStream', remoteStream));
//     })
//     .catch(function(error) {
//         console.log("peer.on('call'")
//     })
// });
// $('#ulUser').on('click', 'li', function() {
//     const id = $(this).attr('id');
//     console.log(id);
//     openStream()
//     .then(stream => {
//         playStream('localStream', stream);
//         const call = peer.call(id, stream);
//         call.on('stream', remoteStream => playStream('remoteStream', remoteStream));
//     });
// });
// function openStream() {
//     const config = { audio: false, video: true };
//     return navigator.mediaDevices.getUserMedia(config);
// }
// function playStream(idVideoTag, stream) {
//     const video = document.getElementById(idVideoTag);
//     video.srcObject = stream;
//     video.play();
// }
// function getPeerUserChannel( channelInfor, user, client ){
//     var channelId = channelInfor.id,
//     access = user.tokens.tokenAccess
//     if( socket ){
//         socket.emit(EVENT.SEND_PEER, { channelId, access, ...client })
//     }
// }
// openStream()
// .then(stream => playStream('localStream', stream));


function socketListenner(socket, instanceApp) {
  socket.on(EVENT.USER_ONLINE_NOTI, function (data) {
    /// 
    instanceApp.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_1__["addUserOnline"])(data.user));
  });
  socket.on(EVENT.USER_OFFLINE_NOTI, function (data) {
    /// 
    instanceApp.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_1__["removeUserOnline"])(data.user));
  });
  socket.on(EVENT.RESPONSE_MESSAGE, function (data) {
    // console.log(EVENT.RESPONSE_MESSAGE, data)
    var user = data.user,
        token = data.token,
        message = data.message,
        style = data.style,
        attachment = data.attachment,
        channel = data.channel,
        detect = data.detect;
    var userLocal = JSON.parse(localStorage.getItem('user')),
        detectLocal = localStorage.getItem('detect');

    if (userLocal && userLocal.id == user && userLocal.tokens.tokenAccess == token && detect == detectLocal) {
      return false;
    }

    instanceApp.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_1__["addMessageSendToMe"])({
      type: userLocal.id == user,
      content: message,
      style: style,
      attachment: attachment,
      channel: channel
    }));
    return false;
  });
  socket.on(EVENT.RESPONSE_TYPING, function (data) {
    var token = data.token,
        channel = data.channel;
    var userLocal = JSON.parse(localStorage.getItem('user'));

    if (userLocal.tokens.tokenAccess == token) {
      return false;
    } else {
      if (timeoutTyping) {
        clearTimeout(timeoutTyping);
      }

      var domTyping = document.getElementById("js-typing");
      if (domTyping.getAttribute("channel") == channel) domTyping.classList.add("show"); /// scroll bottom 
      // var inputMessage = document.getElementById("js-is-write-message")
      // if(inputMessage.classList.contains("follow-conversation")){
      //     document.getElementById('js-scroll-to-bottom').scrollTop  = document.getElementById('js-scroll-to-bottom').scrollHeight
      // }

      var timeoutTyping = setTimeout(function () {
        var domTyping = document.getElementById("js-typing");
        if (domTyping.getAttribute("channel") == channel) domTyping.classList.remove("show");
      }, 3000);
      return false;
    }
  });
  socket.on(EVENT.DUPLICATION_TAB, function (data) {
    window.location.href = _config__WEBPACK_IMPORTED_MODULE_0__["default"].SERVER_PHP.URL;
  });
  socket.on(EVENT.READ_MESSAGE_ALL_RESPONSE, function (data) {
    instanceApp.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_1__["readAllMessageChannelActive"])());
  });
  socket.on(EVENT.RESPONSE_USER_GET_BOOKING, function (data) {
    var bookings = data.bookings; // console.log(bookings, EVENT.RESPONSE_USER_GET_BOOKING)

    instanceApp.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_1__["setterBookings"])({
      fetch: true,
      data: bookings
    }));
  });
  socket.on(EVENT.RESPONSE_USER_CHANGE_BOOKING, function (data) {
    // console.log( data, EVENT.RESPONSE_USER_CHANGE_BOOKING)
    var user = data.user,
        token = data.token,
        message = data.message,
        style = data.style,
        attachment = data.attachment,
        channel = data.channel;
    var userLocal = JSON.parse(localStorage.getItem('user'));
    var messageData = {
      type: userLocal.id == user,
      content: message,
      style: style,
      attachment: attachment,
      channel: channel
    };
    instanceApp.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_1__["addMessageSendToMe"])(messageData));

    var bookingUpdate = _objectSpread(_objectSpread({}, data.booking), {}, {
      update: true
    });

    instanceApp.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_1__["changeBooking"])(bookingUpdate));
    jquery__WEBPACK_IMPORTED_MODULE_2___default.a.modal.close();
    return false;
  });
  socket.on(EVENT.RESPONSE_USER_CHANGE_BOOKING_ERROR, function (data) {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()("#js-booking-error").find(".alert-danger").text(data.message);
    jquery__WEBPACK_IMPORTED_MODULE_2___default()("#js-booking-error").modal({
      escapeClose: false,
      clickClose: false,
      showClose: true
    });
    return false;
  });
}

/***/ }),

/***/ "./src/reducer/auth.js":
/*!*****************************!*\
  !*** ./src/reducer/auth.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/type.js */ "./src/action/type.js");
var user = null;

if (typeof Storage !== 'undefined') {
  user = JSON.parse(localStorage.getItem('user'));
}


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : user;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_type_js__WEBPACK_IMPORTED_MODULE_0__["default"].USER.SETTER_USER:
      return action.payload;

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducer/booking.js":
/*!********************************!*\
  !*** ./src/reducer/booking.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/type.js */ "./src/action/type.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var bookings = {
  fetch: false,
  data: []
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : bookings;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_type_js__WEBPACK_IMPORTED_MODULE_0__["default"].BOOKING.SETTER_BOOKING:
      return action.payload;

    case _action_type_js__WEBPACK_IMPORTED_MODULE_0__["default"].BOOKING.CHANGE_BOOKING:
      if (!state.data.some(function (booking) {
        return booking.id === action.payload.booking_id;
      })) {
        location.reload();
      }

      var dataBooking = state.data.map(function (booking) {
        if (booking.id === action.payload.booking_id) {
          return _objectSpread(_objectSpread({}, booking), action.payload);
        }

        return booking;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        data: dataBooking
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducer/detect.js":
/*!*******************************!*\
  !*** ./src/reducer/detect.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DetectClientReducer; });
function detectClient() {
  {
    var unknown = 'unknown'; // browser

    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var browser = navigator.appName;
    var version = '' + parseFloat(navigator.appVersion);
    var majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix; // Opera

    if ((verOffset = nAgt.indexOf('Opera')) != -1) {
      browser += 'Opera';
      version = nAgt.substring(verOffset + 6);

      if ((verOffset = nAgt.indexOf('Version')) != -1) {
        version = nAgt.substring(verOffset + 8);
      }
    } // Opera Next


    if ((verOffset = nAgt.indexOf('OPR')) != -1) {
      browser += 'Opera';
      version = nAgt.substring(verOffset + 4);
    } // Edge
    else if ((verOffset = nAgt.indexOf('Edg')) != -1) {
        browser += 'Microsoft Edge';
        version = nAgt.substring(verOffset + 5);
      } // MSIE
      else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
          browser += 'Microsoft Internet Explorer';
          version = nAgt.substring(verOffset + 5);
        } // CocCoc
        else if ((verOffset = nAgt.indexOf('coc')) != -1) {
            browser += 'CocCoc';
            version = nAgt.substring(verOffset + 8);
          } // Chrome
          else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
              browser += 'Chrome';
              version = nAgt.substring(verOffset + 7);
            } // Safari
            else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
                browser += 'Safari';
                version = nAgt.substring(verOffset + 7);

                if ((verOffset = nAgt.indexOf('Version')) != -1) {
                  version = nAgt.substring(verOffset + 8);
                }
              } // Firefox
              else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
                  browser += 'Firefox';
                  version = nAgt.substring(verOffset + 8);
                } // MSIE 11+
                else if (nAgt.indexOf('Trident/') != -1) {
                    browser += 'Microsoft Internet Explorer';
                    version = nAgt.substring(nAgt.indexOf('rv:') + 3);
                  } // Other browsers
                  else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
                      browser = nAgt.substring(nameOffset, verOffset);
                      version = nAgt.substring(verOffset + 1);

                      if (browser.toLowerCase() == browser.toUpperCase()) {
                        browser = navigator.appName;
                      }
                    } // trim the version string


    if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
    if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
    if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);
    majorVersion = parseInt('' + version, 10);

    if (isNaN(majorVersion)) {
      version = '' + parseFloat(navigator.appVersion);
      majorVersion = parseInt(navigator.appVersion, 10);
    } // system


    var os = unknown;
    var clientStrings = [{
      s: 'Windows 10',
      r: /(Windows 10.0|Windows NT 10.0)/
    }, {
      s: 'Windows 8.1',
      r: /(Windows 8.1|Windows NT 6.3)/
    }, {
      s: 'Windows 8',
      r: /(Windows 8|Windows NT 6.2)/
    }, {
      s: 'Windows 7',
      r: /(Windows 7|Windows NT 6.1)/
    }, {
      s: 'Windows Vista',
      r: /Windows NT 6.0/
    }, {
      s: 'Windows Server 2003',
      r: /Windows NT 5.2/
    }, {
      s: 'Windows XP',
      r: /(Windows NT 5.1|Windows XP)/
    }, {
      s: 'Windows 2000',
      r: /(Windows NT 5.0|Windows 2000)/
    }, {
      s: 'Windows ME',
      r: /(Win 9x 4.90|Windows ME)/
    }, {
      s: 'Windows 98',
      r: /(Windows 98|Win98)/
    }, {
      s: 'Windows 95',
      r: /(Windows 95|Win95|Windows_95)/
    }, {
      s: 'Windows NT 4.0',
      r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
    }, {
      s: 'Windows CE',
      r: /Windows CE/
    }, {
      s: 'Windows 3.11',
      r: /Win16/
    }, {
      s: 'Android',
      r: /Android/
    }, {
      s: 'Open BSD',
      r: /OpenBSD/
    }, {
      s: 'Sun OS',
      r: /SunOS/
    }, {
      s: 'Linux',
      r: /(Linux|X11)/
    }, {
      s: 'iOS',
      r: /(iPhone|iPad|iPod)/
    }, {
      s: 'Mac OS X',
      r: /Mac OS X/
    }, {
      s: 'Mac OS',
      r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
    }, {
      s: 'QNX',
      r: /QNX/
    }, {
      s: 'UNIX',
      r: /UNIX/
    }, {
      s: 'BeOS',
      r: /BeOS/
    }, {
      s: 'OS/2',
      r: /OS\/2/
    }, {
      s: 'Search Bot',
      r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
    }];

    for (var id in clientStrings) {
      var cs = clientStrings[id];

      if (cs.r.test(nAgt)) {
        os = cs.s;
        break;
      }
    }

    var osVersion = unknown;

    if (/Windows/.test(os)) {
      osVersion = /Windows (.*)/.exec(os)[1];
      os = 'Windows';
    }

    switch (os) {
      case 'Mac OS X':
        osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
        break;

      case 'Android':
        osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
        break;

      case 'iOS':
        osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
        osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
        break;
    }
  }
  return {
    browser: browser.toString(),
    browserMajorVersion: majorVersion.toString(),
    browserVersion: version.toString(),
    os: os.toString(),
    osVersion: osVersion.toString()
  };
}

if (typeof Storage !== 'undefined') {
  localStorage.setItem('detect', JSON.stringify(detectClient()));
}

function DetectClientReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : detectClient();
  return state;
}

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
/* harmony import */ var _detect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detect.js */ "./src/reducer/detect.js");
/* harmony import */ var _user_chat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-chat.js */ "./src/reducer/user-chat.js");
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./socket.js */ "./src/reducer/socket.js");
/* harmony import */ var _auth_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.js */ "./src/reducer/auth.js");
/* harmony import */ var _booking_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./booking.js */ "./src/reducer/booking.js");
 ///thêm các reducer funtion cần được combine vào đây





 //// khởi tạo 1 biến biểu diễn REDUCER ALL 

var Reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  client: _detect_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  userChat: _user_chat_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  socket: _socket_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  users: _auth_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  booking: _booking_js__WEBPACK_IMPORTED_MODULE_5__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (Reducer);

/***/ }),

/***/ "./src/reducer/socket.js":
/*!*******************************!*\
  !*** ./src/reducer/socket.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SocketReducer; });
/* harmony import */ var _action_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/type.js */ "./src/action/type.js");

function SocketReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_type_js__WEBPACK_IMPORTED_MODULE_0__["default"].SOCCKET.SET_SOCKET_IO:
      return action.payload;

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducer/user-chat.js":
/*!**********************************!*\
  !*** ./src/reducer/user-chat.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/type.js */ "./src/action/type.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// if(typeof userDefault == undefined){
//   var userDefault = '[]'
// }
var userChatDefault = [];


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : userChatDefault;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_type_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHANNEL.ADD_USER_ONLINE:
      return state.map(function (item) {
        if (item.user.id == action.payload) {
          return _objectSpread(_objectSpread({}, item), {}, {
            user: _objectSpread(_objectSpread({}, item.user), {}, {
              online: true
            })
          });
        }

        return _objectSpread({}, item);
      });

    case _action_type_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHANNEL.REMOVE_USER_ONLINE:
      return state.map(function (item) {
        if (item.user.id == action.payload) {
          return _objectSpread(_objectSpread({}, item), {}, {
            user: _objectSpread(_objectSpread({}, item.user), {}, {
              online: false
            })
          });
        }

        return _objectSpread({}, item);
      });

    case _action_type_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHAT.CHANGE_USER_CHAT_DEFAULT:
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

    case _action_type_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHANNEL.SETTER_CHANNEL:
      return action.payload;

    case _action_type_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHANNEL.ADD_MESSAGE:
      return state.map(function (channel) {
        if (channel.isActive === true) {
          return _objectSpread(_objectSpread({}, channel), {}, {
            message: [].concat(_toConsumableArray(channel.message), [action.payload])
          });
        }

        return channel;
      });

    case _action_type_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHANNEL.READ_ALL_MESSAGE_CHANNEL_ACTIVE:
      return state.map(function (channel) {
        if (channel.isActive === true) {
          var messages = channel.message;
          messages = messages.map(function (message) {
            return _objectSpread(_objectSpread({}, message), {}, {
              read: true
            });
          });
          return _objectSpread(_objectSpread({}, channel), {}, {
            message: messages
          });
        }

        return channel;
      });

    case _action_type_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHANNEL.ADD_MESSAGE_SEND_TO_ME:
      return state.map(function (channel) {
        if (channel.id === action.payload.channel) {
          return _objectSpread(_objectSpread({}, channel), {}, {
            message: [].concat(_toConsumableArray(channel.message), [action.payload])
          });
        }

        return channel;
      });

    case _action_type_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHANNEL.SET_ACTIVE:
      var isChanged = false;
      var newState = state.map(function (channel) {
        if (!isChanged && channel.channelName && channel.channelName.includes(action.payload.channelName)) {
          isChanged = true;
          return _objectSpread(_objectSpread({}, channel), {}, {
            isActive: true
          });
        }

        return _objectSpread(_objectSpread({}, channel), {}, {
          isActive: false
        });
      });

      if (isChanged) {
        return newState;
      }

      return state;

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

/***/ "./src/scss/chat/emoji.scss":
/*!**********************************!*\
  !*** ./src/scss/chat/emoji.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ref--6-2!./emoji.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/chat/emoji.scss");

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

/***/ "./src/scss/chat/input-send-chat.scss":
/*!********************************************!*\
  !*** ./src/scss/chat/input-send-chat.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ref--6-2!./input-send-chat.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/chat/input-send-chat.scss");

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

/***/ }),

/***/ 0:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9jaGF0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9lbW9qaS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2NoYXQvaGVhZC1pbmZvLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9pbnB1dC1zZW5kLWNoYXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jaGF0L2xpc3QtbWVzc2FnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2NoYXQvbGlzdC11c2VyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9tZXNzYWdlLWNoYXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jaGF0L3NpZGViYXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbi90eXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvQ2hhdC9Cb29raW5nLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoYXQvQm9va2luZ0Vycm9yLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoYXQvQm9va2luZ0ZpbmlzaC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0L0Jvb2tpbmdMb2FkaW5nLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoYXQvQm9va2luZ01vZGFsQ29uZmlybS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0L0Jvb2tpbmdNb2RhbFNldHRpbmcuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvQ2hhdC9Cb29raW5nTm9uZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0L0J0bkJvb2tpbmdNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0L0Vtb2ppLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoYXQvSGVhZEluZm8uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvQ2hhdC9JbnB1dFNlbmRDaGF0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoYXQvTGlzdEVtb2ppLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoYXQvTGlzdE1lc3NhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvQ2hhdC9MaXN0VXNlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0L01lc3NhZ2VDaGF0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoYXQvTWVzc2FnZUNoYXRUeXBpbmcuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvQ2hhdC9TaWRlQmFyQ2hhdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0L1VzZXJDaGF0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoYXQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb25maWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWJyYXJ5L3NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlci9ib29raW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2VyL2RldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlci9zb2NrZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIvdXNlci1jaGF0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2NoYXQvY2hhdC5zY3NzP2FjNTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9lbW9qaS5zY3NzPzMxMTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9oZWFkLWluZm8uc2Nzcz84MzE5Iiwid2VicGFjazovLy8uL3NyYy9zY3NzL2NoYXQvaW5wdXQtc2VuZC1jaGF0LnNjc3M/NjdlMCIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jaGF0L2xpc3QtbWVzc2FnZS5zY3NzPzY4YTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9saXN0LXVzZXIuc2Nzcz9iNWQ3Iiwid2VicGFjazovLy8uL3NyYy9zY3NzL2NoYXQvbWVzc2FnZS1jaGF0LnNjc3M/N2NmZCIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jaGF0L3NpZGViYXIuc2Nzcz8yYTkzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2luZGV4LnNjc3M/ODc2NiIsIndlYnBhY2s6Ly8vd3MgKGlnbm9yZWQpIl0sIm5hbWVzIjpbInNldHRlclNvY2tldCIsInNvY2tldCIsInR5cGUiLCJUWVBFIiwiU09DQ0tFVCIsIlNFVF9TT0NLRVRfSU8iLCJwYXlsb2FkIiwic2V0dGVyVXNlciIsInVzZXIiLCJVU0VSIiwiU0VUVEVSX1VTRVIiLCJmZXRjaGVkIiwic2V0dGVyQ2hhbm5lbHMiLCJjaGFubmVscyIsIkNIQU5ORUwiLCJTRVRURVJfQ0hBTk5FTCIsImFkZE1lc3NhZ2UiLCJtZXNzYWdlIiwiQUREX01FU1NBR0UiLCJhZGRNZXNzYWdlU2VuZFRvTWUiLCJBRERfTUVTU0FHRV9TRU5EX1RPX01FIiwiY2hhbmdlQ2hhbm5lbEFjdGl2ZSIsImNoYW5uZWxOYW1lIiwiU0VUX0FDVElWRSIsImFkZFVzZXJPbmxpbmUiLCJpZCIsIkFERF9VU0VSX09OTElORSIsInJlbW92ZVVzZXJPbmxpbmUiLCJSRU1PVkVfVVNFUl9PTkxJTkUiLCJyZWFkQWxsTWVzc2FnZUNoYW5uZWxBY3RpdmUiLCJSRUFEX0FMTF9NRVNTQUdFX0NIQU5ORUxfQUNUSVZFIiwic2V0dGVyQm9va2luZ3MiLCJib29raW5ncyIsIkJPT0tJTkciLCJTRVRURVJfQk9PS0lORyIsImNoYW5nZUJvb2tpbmciLCJib29raW5nIiwiQ0hBTkdFX0JPT0tJTkciLCJIT01FIiwiQ0hBTkdFX0xBWU9VVFMiLCJDSEFOR0VfVEhFTUUiLCJDSEFUIiwiQ0hBTkdFX1VTRVJfQ0hBVF9ERUZBVUxUIiwiQ09ORklHIiwiU0VUVEVSX1NFTkRfUEVFUiIsIkFwcCIsInByb3BzIiwic3RhdGUiLCJzZW5kVXNlck9ubGluZSIsImluc3RhbmNlQXBwIiwic29ja2V0SW5pdGlhbENvbm5lY3QiLCJzb2NrZXRJT0NsaWVudCIsIkVWRU5UIiwiQ09ORklHX0VWRU5UIiwiYXV0aCIsInNldFN0YXRlIiwiZW1pdCIsIlVTRVJfT05MSU5FIiwicGVlciIsImFjY2VzcyIsInRva2VucyIsInRva2VuQWNjZXNzIiwiVVNFUl9HRVRfQk9PS0lORyIsInJvbGVfaWQiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjbGllbnQiLCJ1c2VycyIsInVzZXJDaGF0IiwiY29ubmVjdCIsIkJvb2tpbmciLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIm1hcCIsIkJvb2tpbmdFcnJvciIsIkJvb2tpbmdGaW5pc2giLCJjYWxjdWxhdG9yQmlsbCIsIndvcmtfZGF0ZSIsInN0YXJ0IiwiZmluaXNoIiwic2FsYXJ5IiwiZGlmZmVyZW5jZVRpbWUiLCJwcmljZSIsInZhdCIsIm15U2VydkZlZVNpdHRlciIsIm15U2VydkZlZUVtcGxveWVyIiwic3RyaXBlU2VydkZlZSIsInRvdGFsIiwiUk9MRV9VU0VSIiwic2l0dGVyIiwiZW1wbG95ZXIiLCJjb252ZXJ0YXRpb25zIiwiQm9va2luZ0xvYWRpbmciLCJCb29raW5nTW9kYWxDb25maXJtIiwiY2FuY2VsQWNjZXB0IiwiJCIsIm1vZGFsIiwiZXNjYXBlQ2xvc2UiLCJjbGlja0Nsb3NlIiwic2hvd0Nsb3NlIiwiZmluYWxBY2NlcHQiLCJjaGFubmVsQWN0aXZlIiwiZmluZCIsImNoYW5uZWwiLCJpc0FjdGl2ZSIsImJvb2tpbmdVcGRhdGUiLCJib29raW5nX2lkIiwic2l0dGVyX2FjY2VwdCIsInN0YXR1cyIsImVtcGxveWVyX2FjY2VwdCIsInVzZXJJZCIsInNlbmRCb29raW5nVXBkYXRlIiwiY2xvc2UiLCJkYXRlcGlja2VyRmFjdG9yeSIsImRhdGVwaWNrZXJKQUZhY3RvcnkiLCJCb29raW5nTW9kYWxTZXR0aW5nIiwic2l0dGVyQWNjZXB0QmlsbCIsImVtcGxveWVyQWNjZXB0QmlsbCIsIl9pbnN0YW5jZSIsInNlbGVjdG9yVGltZVN0YXJ0Iiwic2VsZWN0b3JUaW1lRmluaXNoIiwic2VsZWN0b3JEYXRlcGlja2VyIiwidGltZXBpY2tlciIsIm9uIiwic3RhcnRDaGFuZ2UiLCJ2YWwiLCJmaW5pc2hDaGFuZ2UiLCJkYXRlcGlja2VyIiwiZGF0ZUZvcm1hdCIsIm9uU2VsZWN0IiwiZGF0ZVRleHQiLCJpbnN0IiwidXBkYXRlIiwiZGlzcGF0Y2giLCJib29raW5nUHJvcHMiLCJpc0VkaXQiLCJjbGFzc0J0blNpdHRlciIsInRleHRCdG5TaXR0ZXIiLCJjbGlja0J0blNpdHRlciIsImNsYXNzQnRuRW1wbG95ZXIiLCJ0ZXh0QnRuRW1wbG95ZXIiLCJjbGlja0J0bkVtcGxveWVyIiwiQm9va2luZ05vbmUiLCJCdG5Cb29raW5nTW9kYWwiLCJjaG9vc2VPcmRlciIsImZldGNoIiwiY2hhbm5lbEFjdGl2ZUNoYXQiLCJ1c2VyQWN0aXZlIiwiZW1wbG95ZXJfaWQiLCJzaXR0ZXJfaWQiLCJFbW9qaSIsImFkZEljb25JbnB1dENoYXQiLCJldmVudCIsImlucHV0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRlbnQiLCJ2YWx1ZSIsInN5bWJvbCIsIkhlYWRJbmZvIiwic2lkZWJhciIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJsZW5ndGgiLCJtZXNzYWdlcyIsInN0eWxlIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwidGV4dE9ubGluZSIsIm9ubGluZSIsImhyZWZVc2VyIiwiUk9VVEVfVklFV19TSVRURVIiLCJST1VURV9WSUVXX0VNUExPWUVSIiwiU0VSVkVSX1BIUCIsIlVSTCIsImF2YXRhciIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJJbnB1dFNlbmRDaGF0Iiwic3VibWl0TWVzc2FnZUNoYXQiLCJhdHRhY2htZW50IiwiZW1vamlDaGF0IiwiY29uZmlnIiwiRU1PSklTIiwiZmlsdGVyIiwiZW1vamkiLCJ0cmltIiwiaW5zdGFuY2UiLCJkaWZmIiwiRGF0ZSIsImdldFRpbWUiLCJwZXJpb2QiLCJleHBpcmUiLCJsb2NhdGlvbiIsInJlbG9hZCIsIm1lc3NhZ2VTZW5kVG9DaGFubmVsIiwiY2hhbm5lbFNlbmQiLCJjaGFubmVsSWQiLCJkZXRlY3QiLCJzZW5kTWVzc2FnZVRvQ2hhbm5lbCIsImhhbmRsZVNlbmRFbW9qaVN1Ym1pdCIsImhhbmRsZVNlbmRNZXNzYWdlU3VibWl0IiwidXJsQXR0YWNobWVudCIsImltYWdlc0RvbSIsImltYWdlcyIsImluZGV4X2ltYWdlX3NlbmQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInB1c2giLCJ1cmwiLCJnZXRBdHRyaWJ1dGUiLCJ0aW1lIiwiaW5uZXJIVE1MIiwiaGFuZGxlU2VuZE1lc3NhZ2VEb3duIiwia2V5Q29kZSIsInNoaWZ0S2V5IiwidGFyZ2V0Iiwic2VuZENoYXQiLCJ3b3JkcyIsInNwbGl0Iiwid29yZExhc3Rlc3QiLCJlbW9qaXNDYWxsIiwiaXRlbSIsInNpZ24iLCJsYXN0SW5kZXgiLCJsYXN0SW5kZXhPZiIsInN1YnN0cmluZyIsImhhbmRsZVNlbmRNZXNzYWdlVXAiLCJpbWFnZUZpbGVDYWxsYmFjayIsImltZ0xvYWRpbmciLCJ3aWR0aCIsIndyYXBwZXJJbWFnZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvbmNsaWNrIiwicmVtb3ZlIiwiYXBwZW5kQ2hpbGQiLCJyZXRyaWV2ZUltYWdlIiwiZmlsZSIsImNhbGxiYWNrIiwic2F2ZUJsb2JUb1NlcnZlciIsImltZyIsIkltYWdlIiwib25sb2FkIiwiVVJMT2JqIiwid2luZG93Iiwid2Via2l0VVJMIiwic3JjIiwiY3JlYXRlT2JqZWN0VVJMIiwiZXJyb3IiLCJyZXRyaWV2ZUZpbGUiLCJyZXRyaWV2ZUltYWdlRnJvbUNsaXBib2FyZEFzQmxvYiIsInBhc3RlRXZlbnQiLCJjbGlwYm9hcmREYXRhIiwidW5kZWZpbmVkIiwiaXRlbXMiLCJpIiwiaW5kZXhPZiIsImdldEFzRmlsZSIsInNob3dMaXN0RW1vamkiLCJlbW9qaXMiLCJhZGQiLCJoYW5kbGVTZW5kQ2hhdENsaWNrIiwic2VuZFR5cGluZ01lc3NhZ2VUb0NoYW5uZWwiLCJjaG9vc2VGaWxlIiwiY2xpY2siLCJzYXZlRmlsZSIsImZpbGVzIiwiYWNjZXB0IiwiZXhlYyIsIm5hbWUiLCJhbGVydCIsImJpbmQiLCJzdXAiLCJhZGRFdmVudExpc3RlbmVyIiwiZG9tU2Nyb2xsIiwiZG9tV3JpdGVyIiwic2Nyb2xsSGVpZ2h0IiwibGlzdGVuUmVhZE1lc3NhZ2VOZXdVc2VyIiwic2Nyb2xsVG9wIiwib25lIiwiTGlzdEVtb2ppIiwiTGlzdE1lc3NhZ2UiLCJsc3RNZXNzYWdlIiwibGlzdGVuU2Nyb2xsTWVzc2FnZSIsImtleSIsIkxpc3RVc2VyIiwiY29udmVyc2F0aW9ucyIsIk1lc3NhZ2VDaGF0IiwibXlpbmZvIiwidXNlckluZm8iLCJ0eXBlTWVzc2FnZSIsIlRJTUVfRElFX0ZJTEUiLCJhdHRhY2hFbGVtZW50IiwiaW5kZXgiLCJyZWFkIiwiTWVzc2FnZUNoYXRUeXBpbmciLCJ0b1VzZXIiLCJjaGFubmVsSW5mb3IiLCJ1c2VyVHlwaW5nIiwibmFtZVR5cGluZyIsImxpbWl0Q2hhcmFjdGVyIiwiU2lkZUJhckNoYXQiLCJpbmZvciIsIlVzZXJDaGF0IiwiY2hhbmdlQWN0aXZlVXNlciIsImUiLCJjbGFzc0FjdGl2ZU9ubGluZSIsImNsYXNzQWN0aXZlTWVzc2FnZSIsInNsaWNlIiwibGFzdEl0ZW0iLCJtdW5iZXJOb25lUmVhZCIsIkNoYXQiLCJpbnN0YW5jZUNoYXQiLCJUT0tFTl9SRUZFU0hfRE9NIiwicmVmZXNoIiwiZ2V0QWNjZXNzVG9rZW5CeVJlZmVzaCIsImxvY2FsIiwibG9jYWxfaXAiLCJsb2NhbF9wb3J0IiwicGVlcl9wb3J0IiwiU0VSVkVSIiwiUE9SVCIsIkRPTUFJTiIsIklQIiwiUEVFUl9QT1JUIiwiUFJPVE9DT0wiLCJBU1NFVCIsInBvcnRfdXJsIiwicHJvdG9jb2wiLCJhZG1pbiIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJSZWR1Y2VyIiwic3Vic2NyaWJlIiwiZ2V0U3RhdGUiLCJTdG9yYWdlIiwiUmVhY3RET00iLCJyZW5kZXIiLCJnbG9iYWxTdHJlYW0iLCJzZXRUaW1lb3V0IiwiaW5zdGFuY2VDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwidG9rZW5zVXNlciIsIm1ldGhvZCIsImJvZHkiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXNwb25zZSIsImNvZGUiLCJFcnJvciIsInRva2VuUmVmZXNoIiwicGFyc2VJbnQiLCJ1c2VyTG9naW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZGF0YUZldGNoQ2hhbm5lbCIsImZldGNoQ2hhbm5lbE1lc3NhZ2UiLCJkYXRhQ2hhbm5lbCIsIkFwcGxpY2F0aW9uRG9tIiwic29ja2V0TGlzdGVubmVyIiwicmVwbGFjZSIsImNhbGxlciIsIm9wZW5TdHJlYW0iLCJzdHJlYW0iLCJwbGF5U3RyZWFtIiwiZ2V0UGVlclVzZXJDaGFubmVsIiwiU0VORF9NRVNTQUdFIiwiU0VORF9UWVBJTkciLCJTSVpFX0xJTUlUIiwic2l6ZSIsImhhbmRsZUVycm9yVXBsb2FkRmlsZSIsImRhdGFGaWxlIiwiZm9ybSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiYWpheCIsImVuY3R5cGUiLCJjYWNoZSIsImNvbnRlbnRUeXBlIiwicHJvY2Vzc0RhdGEiLCJzdWNjZXNzIiwicmVXcml0ZVVybCIsInNldEF0dHJpYnV0ZSIsInR5cGVGaWxlIiwiZmlsZV9uYW1lIiwiZXh0ZW50aW9uVHlwZSIsImdldFR5cGVGaWxlIiwiaW5uZXJIZWlnaHQiLCJleGlzdE5vbmVSZWFkIiwic29tZSIsInVzZXJMb2NhbCIsInBhcnNlIiwiZ2V0SXRlbSIsIlJFQURfTUVTU0FHRV9BTEwiLCJVU0VSX0NIQU5HRV9CT09LSU5HIiwiRkVFX0RFRkFVTFRfU0lUVEVSX01JTiIsIlBFUkNFTlRfRkVFX1NJVFRFUiIsIlBFUkNFTlRfVkFUX0RFRkFVTFQiLCJQRVJDRU5UX0ZFRV9FTVBMT1lFUiIsIlBFUkNFTlRfRkVFX1NUUklQRSIsImZIb3VyIiwiZk1pbnV0ZSIsInNIb3VyIiwic01pbnV0ZSIsImRhdGVUaW1lRmluaXNoIiwiZGF0ZVRpbWVTdGFydCIsIk1hdGgiLCJmbG9vciIsImNhbGN1bGF0b3JGZWVTdHJpcGUiLCJhbW91bnQiLCJjdXJyZW5jeSIsImZlZXMiLCJVU0QiLCJQZXJjZW50IiwiRml4ZWQiLCJHQlAiLCJFVVIiLCJDQUQiLCJBVUQiLCJOT0siLCJES0siLCJTRUsiLCJKUFkiLCJNWE4iLCJERUZBVUxUX1BFUkNFTlRfU1RSSVBFIiwiX2ZlZSIsImZlZXNTdHJpcGUiLCJwYXJzZUZsb2F0IiwiZmVlIiwidG9GaXhlZCIsImZpbGVuYW1lIiwidmFsaWRhdGVGZXRjaENoYW5uZWxNZXNzYWdlIiwiaXNWYWxpZCIsIklEX1ZJRVdfVVNFUl9DSEFUIiwidXNlcklkQWN0aXZlQ2hhbm5lbCIsImFjdGlvbiIsIlVTRVJfT05MSU5FX05PVEkiLCJVU0VSX09GRkxJTkVfTk9USSIsIlJFU1BPTlNFX01FU1NBR0UiLCJ0b2tlbiIsImRldGVjdExvY2FsIiwiUkVTUE9OU0VfVFlQSU5HIiwidGltZW91dFR5cGluZyIsImNsZWFyVGltZW91dCIsImRvbVR5cGluZyIsIkRVUExJQ0FUSU9OX1RBQiIsImhyZWYiLCJSRUFEX01FU1NBR0VfQUxMX1JFU1BPTlNFIiwiUkVTUE9OU0VfVVNFUl9HRVRfQk9PS0lORyIsIlJFU1BPTlNFX1VTRVJfQ0hBTkdFX0JPT0tJTkciLCJtZXNzYWdlRGF0YSIsIlJFU1BPTlNFX1VTRVJfQ0hBTkdFX0JPT0tJTkdfRVJST1IiLCJ0ZXh0IiwiZGF0YUJvb2tpbmciLCJkZXRlY3RDbGllbnQiLCJ1bmtub3duIiwiblZlciIsIm5hdmlnYXRvciIsImFwcFZlcnNpb24iLCJuQWd0IiwidXNlckFnZW50IiwiYnJvd3NlciIsImFwcE5hbWUiLCJ2ZXJzaW9uIiwibWFqb3JWZXJzaW9uIiwibmFtZU9mZnNldCIsInZlck9mZnNldCIsIml4IiwidG9Mb3dlckNhc2UiLCJ0b1VwcGVyQ2FzZSIsImlzTmFOIiwib3MiLCJjbGllbnRTdHJpbmdzIiwicyIsInIiLCJjcyIsInRlc3QiLCJvc1ZlcnNpb24iLCJ0b1N0cmluZyIsImJyb3dzZXJNYWpvclZlcnNpb24iLCJicm93c2VyVmVyc2lvbiIsIkRldGVjdENsaWVudFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJTb2NrZXRSZWR1Y2VyIiwiQXV0aCIsInVzZXJDaGF0RGVmYXVsdCIsImlzQ2hhbmdlZCIsIm5ld1N0YXRlIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNB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QXNDLEdBQUcsdUJBQXVCLHNDQUFzQyxHQUFHLHVCQUF1QixzQ0FBc0MsR0FBRyxrQkFBa0Isc0NBQXNDLEdBQUcsbUJBQW1CLGtDQUFrQyxHQUFHLG1CQUFtQixzQ0FBc0MsR0FBRyx1QkFBdUIsc0NBQXNDLEdBQUcsbUJBQW1CLHNDQUFzQyxHQUFHLHFCQUFxQixzQ0FBc0MsR0FBRyxvQkFBb0Isc0NBQXNDLEdBQUcsbUJBQW1CLHNDQUFzQyxHQUFHLHlCQUF5Qix1Q0FBdUMsR0FBRyxxQkFBcUIsdUNBQXVDLEdBQUcsc0JBQXNCLHVDQUF1QyxHQUFHLHFCQUFxQix1Q0FBdUMsR0FBRyxxQkFBcUIsdUNBQXVDLEdBQUcsbUJBQW1CLHVDQUF1QyxHQUFHLG9CQUFvQix1Q0FBdUMsR0FBRyxtQkFBbUIsdUNBQXVDLEdBQUcsbUJBQW1CLHVDQUF1QyxHQUFHLHFCQUFxQixrQ0FBa0MsR0FBRyxtQkFBbUIsc0NBQXNDLEdBQUcsd0JBQXdCLHNDQUFzQyxHQUFHLG9CQUFvQixzQ0FBc0MsR0FBRyx5QkFBeUIsc0NBQXNDLEdBQUcsb0JBQW9CLHNDQUFzQyxHQUFHLHlCQUF5QixzQ0FBc0MsR0FBRyxrQkFBa0IsdUNBQXVDLEdBQUcsd0JBQXdCLHVDQUF1QyxHQUFHLHVCQUF1Qix1Q0FBdUMsR0FBRyx3QkFBd0IsdUNBQXVDLEdBQUcsbUJBQW1CLHVDQUF1QyxHQUFHLHNCQUFzQix1Q0FBdUMsR0FBRyxvQkFBb0IsdUNBQXVDLEdBQUcsb0JBQW9CLHVDQUF1QyxHQUFHLHFCQUFxQix1Q0FBdUMsR0FBRyxvQkFBb0Isa0NBQWtDLEdBQUcsbUJBQW1CLHNDQUFzQyxHQUFHLHFCQUFxQixzQ0FBc0MsR0FBRyxtQkFBbUIsc0NBQXNDLEdBQUcsb0JBQW9CLHNDQUFzQyxHQUFHLHFCQUFxQixzQ0FBc0MsR0FBRyx1QkFBdUIsc0NBQXNDLEdBQUcsd0JBQXdCLHVDQUF1QyxHQUFHLG9CQUFvQix1Q0FBdUMsR0FBRyxvQkFBb0IsdUNBQXVDLEdBQUcsbUJBQW1CLGtDQUFrQyxHQUFHLG9CQUFvQixzQ0FBc0MsR0FB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QThFO0FBQ2hHLDBCQUEwQixtQkFBTyxDQUFDLGtQQUE0SDs7QUFFOUo7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0M7Ozs7Ozs7Ozs7O0FDbEJBLFVBQVUsbUJBQU8sQ0FBQyx5SkFBOEU7QUFDaEcsMEJBQTBCLG1CQUFPLENBQUMsd09BQXVIOztBQUV6Sjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQzs7Ozs7Ozs7Ozs7QUNsQkEsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQyx5TkFBK0c7O0FBRWpKOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7OztBQ2xCQSxlIiwiZmlsZSI6ImpzL2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LmpzXCIsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkdyZWF0IFZpYmVzXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9HcmVhdF9WaWJlcy9HcmVhdFZpYmVzLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNdWxpXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9NdWxpL011bGktVmFyaWFibGVGb250X3dnaHQudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmNoaXZvLU1lZGl1bVxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvQXJjaGl2by9BcmNoaXZvLU1lZGl1bS50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJlbmNoTmluZS1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9CZW5jaE5pbmUvQmVuY2hOaW5lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTYXdhcmFiaS1NaW5jaG8tUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvU2F3YXJhYmlfTWluY2hvL1Nhd2FyYWJpTWluY2hvLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbi5iZy1jaGF0LXRlbWFsYXRlIHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxufVxcblxcbi53cmFwcGVyLXBhZ2UtY2hhdCB7XFxuICBtYXgtd2lkdGg6IDExMDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG4ud3JhcHBlci1wYWdlLWNoYXQ6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMDtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmVycm9yIHtcXG4gIGNvbG9yOiAjZmYzNTQ3O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHcmVhdCBWaWJlc1xcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvR3JlYXRfVmliZXMvR3JlYXRWaWJlcy1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXVsaVxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvTXVsaS9NdWxpLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXJjaGl2by1NZWRpdW1cXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L0FyY2hpdm8vQXJjaGl2by1NZWRpdW0udHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCZW5jaE5pbmUtUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvQmVuY2hOaW5lL0JlbmNoTmluZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2F3YXJhYmktTWluY2hvLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L1Nhd2FyYWJpX01pbmNoby9TYXdhcmFiaU1pbmNoby1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG4uY29tcG9uZW50LWxpc3QtZW1vamkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgcmlnaHQ6IDUwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG4uY29tcG9uZW50LWxpc3QtZW1vamk6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMDtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmNvbXBvbmVudC1saXN0LWVtb2ppLmZpcnN0LXNob3cge1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tbmFtZTogdGFkYTtcXG59XFxuLmNvbXBvbmVudC1saXN0LWVtb2ppLnNob3cge1xcbiAgdmlzaWJpbGl0eTogdW5zZXQ7XFxuICBoZWlnaHQ6IHVuc2V0O1xcbiAgYm90dG9tOiAxMDAlO1xcbiAgbGVmdDogMjBweDtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgb3BhY2l0eTogMTtcXG4gIHotaW5kZXg6IDExMTtcXG59XFxuXFxuLmNvbXBvbmVudC1lbW9qaSB7XFxuICB3aWR0aDogMzRweDtcXG4gIGhlaWdodDogMzRweDtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDI0cHgvMSBcXFwiSEVSTyBJY29uc1xcXCI7XFxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICBjb2xvcjogIzBkNDdhMTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR3JlYXQgVmliZXNcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L0dyZWF0X1ZpYmVzL0dyZWF0VmliZXMtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk11bGlcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L011bGkvTXVsaS1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkFyY2hpdm8tTWVkaXVtXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9BcmNoaXZvL0FyY2hpdm8tTWVkaXVtLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmVuY2hOaW5lLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L0JlbmNoTmluZS9CZW5jaE5pbmUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNhd2FyYWJpLU1pbmNoby1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9TYXdhcmFiaV9NaW5jaG8vU2F3YXJhYmlNaW5jaG8tUmVndWxhci50dGZcXFwiKTtcXG59XFxuLmNvbXBvbmVudC1oZWFkLWluZm8gLnVzZXItYWN0aXZlLWNoYXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xcbiAgbWluLWhlaWdodDogNzVweDtcXG59XFxuLmNvbXBvbmVudC1oZWFkLWluZm8gLnVzZXItYWN0aXZlLWNoYXQgLnN0YXRlLWF2YXRhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbWluLXdpZHRoOiA0MHB4O1xcbiAgbWluLWhlaWdodDogNDBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzZjNzU3ZDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyAudXNlci1hY3RpdmUtY2hhdCAuc3RhdGUtYXZhdGFyIGltZyB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIG1pbi13aWR0aDogNDBweDtcXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XFxufVxcbi5jb21wb25lbnQtaGVhZC1pbmZvIC51c2VyLWFjdGl2ZS1jaGF0IC50ZXh0LWluZm8ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiA3cHggN3B4IDdweCA1NXB4O1xcbiAgY29sb3I6ICMwZDQ3YTE7XFxufVxcbi5jb21wb25lbnQtaGVhZC1pbmZvIC51c2VyLWFjdGl2ZS1jaGF0IC50ZXh0LWluZm8gLm5hbWUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5jb21wb25lbnQtaGVhZC1pbmZvIC51c2VyLWFjdGl2ZS1jaGF0IC50ZXh0LWluZm8gLnRpbWUtb25saW5lIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6ICM2Yzc1N2Q7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyAudXNlci1hY3RpdmUtY2hhdCAudGV4dC1pbmZvIC50aW1lLW9ubGluZS5hY3RpdmUtbm93IHtcXG4gIGNvbG9yOiAjOGJjMzRhO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkdyZWF0IFZpYmVzXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9HcmVhdF9WaWJlcy9HcmVhdFZpYmVzLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNdWxpXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9NdWxpL011bGktVmFyaWFibGVGb250X3dnaHQudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmNoaXZvLU1lZGl1bVxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvQXJjaGl2by9BcmNoaXZvLU1lZGl1bS50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJlbmNoTmluZS1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9CZW5jaE5pbmUvQmVuY2hOaW5lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTYXdhcmFiaS1NaW5jaG8tUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvU2F3YXJhYmlfTWluY2hvL1Nhd2FyYWJpTWluY2hvLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbi5jb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDVweCA0NXB4IDAgMTAwcHg7XFxufVxcbi5jb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0IHRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxuICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgbWF4LWhlaWdodDogMTUwcHg7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICByZXNpemU6IG5vbmU7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxufVxcbi5jb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0IHRleHRhcmVhOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogIzBkNDdhMTtcXG4gIGNvbG9yOiAjMGQ0N2ExO1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCB0ZXh0YXJlYTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5jb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0ID4gaSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxMTtcXG4gIGJvdHRvbTogMjBweDtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGNvbG9yOiAjMGQ2ZWZkO1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCAuaGVyby1pY29uLmNhbGVuZGFyIHtcXG4gIGxlZnQ6IDVweDtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmhlcm8taWNvbi5lbW90aWNvbiB7XFxuICBsZWZ0OiAzNXB4O1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCAuaGVyby1pY29uLmZpbGUge1xcbiAgbGVmdDogNjVweDtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmhlcm8taWNvbi5zZW5kIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHotaW5kZXg6IDE7XFxuICByaWdodDogMTBweDtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmhlcm8taWNvbi5yZWFjdCB7XFxuICB6LWluZGV4OiAtMTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICByaWdodDogMHB4O1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCAuaW1hZ2UtYmxvY2sgLnJlbW92ZS1pbWFnZSB7XFxuICBtYXgtaGVpZ2h0OiAxMDBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5jb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0IC5pbWFnZS1ibG9jayAucmVtb3ZlLWltYWdlOmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNXB4O1xcbiAgcmlnaHQ6IDVweDtcXG4gIGNvbnRlbnQ6IFxcXCLzsIWXXFxcIjtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMjRweC8xIFxcXCJIRVJPIEljb25zXFxcIjtcXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmltYWdlLWJsb2NrIC5yZW1vdmUtaW1hZ2U6aG92ZXIgaW1nIHtcXG4gIG9wYWNpdHk6IDAuNDtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmltYWdlLWJsb2NrIC5yZW1vdmUtaW1hZ2U6aG92ZXI6YWZ0ZXIge1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tbmFtZTogdGFkYTtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmltYWdlLWJsb2NrIGltZyB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBvcGFjaXR5OiAwLjk7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkdyZWF0IFZpYmVzXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9HcmVhdF9WaWJlcy9HcmVhdFZpYmVzLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNdWxpXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9NdWxpL011bGktVmFyaWFibGVGb250X3dnaHQudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmNoaXZvLU1lZGl1bVxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvQXJjaGl2by9BcmNoaXZvLU1lZGl1bS50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJlbmNoTmluZS1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9CZW5jaE5pbmUvQmVuY2hOaW5lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTYXdhcmFiaS1NaW5jaG8tUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvU2F3YXJhYmlfTWluY2hvL1Nhd2FyYWJpTWluY2hvLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgd2lkdGg6IDcwJTtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2U5ZWNlZjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIHNjcm9sbGJhci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpICNGNUY1RjU7XFxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW4gIWltcG9ydGFudDtcXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDA7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6Oi1tb3otc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6Oi1tb3otc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOjotby1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTo6LW8tc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtby1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTo6LW1zLXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOjotbXMtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtbXMtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG5cXG4udGljb250YWluZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWluLXdpZHRoOiAzMHB4O1xcbn1cXG4udGljb250YWluZXIgLnRpYmxvY2sge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDE3cHg7XFxufVxcbi50aWNvbnRhaW5lciAudGlibG9jayAudGlkb3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FkYjViZDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBtZXJjdXJ5VHlwaW5nQW5pbWF0aW9uIDEuNXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxuICBhbmltYXRpb246IG1lcmN1cnlUeXBpbmdBbmltYXRpb24gMS41cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogNnB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxuICB3aWR0aDogNnB4O1xcbn1cXG4udGljb250YWluZXIgLnRpYmxvY2sgLnRpZG90Om50aC1jaGlsZCgxKSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTUwbXM7XFxuICBhbmltYXRpb24tZGVsYXk6IDIwMG1zO1xcbn1cXG4udGljb250YWluZXIgLnRpYmxvY2sgLnRpZG90Om50aC1jaGlsZCgyKSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMzAwbXM7XFxuICBhbmltYXRpb24tZGVsYXk6IDMwMG1zO1xcbn1cXG4udGljb250YWluZXIgLnRpYmxvY2sgLnRpZG90Om50aC1jaGlsZCgzKSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogNDUwbXM7XFxuICBhbmltYXRpb24tZGVsYXk6IDQwMG1zO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgbWVyY3VyeVR5cGluZ0FuaW1hdGlvbiB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxuICB9XFxuICAyOCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXG4gIH1cXG4gIDQ0JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcXG4gIC5jb21wb25lbnQtbGlzdC1tZXNzYWdlIHtcXG4gICAgd2lkdGg6IDYwJTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLmNvbXBvbmVudC1saXN0LW1lc3NhZ2Uge1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNzVweCk7XFxuICB9XFxuICAuY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2Uge1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgfVxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHcmVhdCBWaWJlc1xcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvR3JlYXRfVmliZXMvR3JlYXRWaWJlcy1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXVsaVxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvTXVsaS9NdWxpLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXJjaGl2by1NZWRpdW1cXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L0FyY2hpdm8vQXJjaGl2by1NZWRpdW0udHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCZW5jaE5pbmUtUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvQmVuY2hOaW5lL0JlbmNoTmluZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2F3YXJhYmktTWluY2hvLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L1Nhd2FyYWJpX01pbmNoby9TYXdhcmFiaU1pbmNoby1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAubm9uZS1yZWFkLW1lc3NhZ2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwYWRkaW5nOiAzcHggNnB4O1xcbiAgYm90dG9tOiAzMCU7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XFxuICBjb2xvcjogI2U5ZWNlZjtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IHtcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdC5hY3RpdmUtbWVzc2FnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdjNmM2O1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQuYWN0aXZlIC5zdGF0ZS1hdmF0YXIge1xcbiAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQuYWN0aXZlIC5zdGF0ZS1hdmF0YXI6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC5zdGF0ZS1hdmF0YXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIG1pbi13aWR0aDogNDBweDtcXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2Yzc1N2Q7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC5zdGF0ZS1hdmF0YXI6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogNTAlO1xcbiAgei1pbmRleDogNTtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZGI1YmQ7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC5zdGF0ZS1hdmF0YXIgaW1nIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbWluLXdpZHRoOiA0MHB4O1xcbiAgbWluLWhlaWdodDogNDBweDtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC50ZXh0LWluZm8ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAwIDAgMCA1NXB4O1xcbiAgY29sb3I6ICMwZDQ3YTE7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdCAudGV4dC1pbmZvIC5uYW1lIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC50ZXh0LWluZm8gLmxhc3QtbWVzc2FnZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdC5hY3RpdmUtbWVzc2FnZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZGI1YmQ7XFxuICB9XFxuICAuY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQgLnRleHQtaW5mbyB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB9XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkdyZWF0IFZpYmVzXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9HcmVhdF9WaWJlcy9HcmVhdFZpYmVzLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNdWxpXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9NdWxpL011bGktVmFyaWFibGVGb250X3dnaHQudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmNoaXZvLU1lZGl1bVxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvQXJjaGl2by9BcmNoaXZvLU1lZGl1bS50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJlbmNoTmluZS1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9CZW5jaE5pbmUvQmVuY2hOaW5lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTYXdhcmFiaS1NaW5jaG8tUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvU2F3YXJhYmlfTWluY2hvL1Nhd2FyYWJpTWluY2hvLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbi5sZWZ0LW1lc3NhZ2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZy1yaWdodDogMjVweDtcXG59XFxuLmxlZnQtbWVzc2FnZSAucmVhZCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IHtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0OmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDA7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0LnR5cGluZy1jaGF0LW1lc3NzYWdlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwYWRkaW5nLXRvcDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDM7XFxuICB0b3A6IC0yNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhZGI1YmQ7XFxuICBsZWZ0OiA1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQudHlwaW5nLWNoYXQtbWVzc3NhZ2Uuc2hvdyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQudHlwaW5nLWNoYXQtbWVzc3NhZ2UgLnR5cGluZy1tZXNzYWdlIC50ZXh0IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgcGFkZGluZzogMnB4IDEwcHggIWltcG9ydGFudDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXA6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMDtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAuYnktbWU6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMDtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAuYnktbWUgLmF2YXRhciB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwLmJ5LW1lIC5tZXNzYWdlLWNvbnRlbnQge1xcbiAgcGFkZGluZy1yaWdodDogMzBweDtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwLmJ5LW1lIC5tZXNzYWdlLWNvbnRlbnQ6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMDtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAuYnktbWUgLm1lc3NhZ2UtY29udGVudCAudGV4dCB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRiMDgxO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMjtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAuYnktbWUgLm1lc3NhZ2UtY29udGVudCAudGV4dDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogLTIwcHg7XFxuICBsZWZ0OiB1bnNldDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgYm90dG9tOiAzcHg7XFxuICB6LWluZGV4OiAxO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7XFxuICBib3JkZXI6IDE1cHggc29saWQ7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmNGIwODEgI2Y0YjA4MTtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAuYnktbWUgLkVNT0pJIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cC5ieS1tZSAuRU1PSkk6YWZ0ZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLmF2YXRhciB7XFxuICBtYXgtd2lkdGg6IDQwcHg7XFxuICBtYXgtaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAuYXZhdGFyIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudCB7XFxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAubWVzc2FnZS1jb250ZW50LnR5cGluZy1tZXNzYWdlIHtcXG4gIHBhZGRpbmctbGVmdDogMHB4O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAubWVzc2FnZS1jb250ZW50IC5JTUFHRSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQgLklNQUdFIC53cmFwcGVyLWF0dGFjaG1lbnQge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWF4LXdpZHRoOiAyMDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudCAuSU1BR0UgLndyYXBwZXItYXR0YWNobWVudCBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQgLklNQUdFIC53cmFwcGVyLWF0dGFjaG1lbnQgLmRvd25sb2FkLWZpbGUtYXR0YWNobWVudCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUlO1xcbiAgcmlnaHQ6IDUlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTJlNjtcXG4gIGNvbG9yOiAjMGQ0N2ExO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcGFkZGluZzogM3B4IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMGQ0N2ExO1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAubWVzc2FnZS1jb250ZW50IC5JTUFHRSAud3JhcHBlci1hdHRhY2htZW50IC5kb3dubG9hZC1maWxlLWF0dGFjaG1lbnQgaSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQgLklNQUdFOmFmdGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQgLkVNT0pJIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQgLkVNT0pJOmFmdGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQgLnRleHQge1xcbiAgbWF4LXdpZHRoOiA2MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMzJweCk7XFxuICBsaW5lLWhlaWdodDogMS4zO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRhN2Q5O1xcbiAgY29sb3I6ICNmZmY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAyO1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAubWVzc2FnZS1jb250ZW50IC50ZXh0OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIuXFxcIjtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiB1bnNldDtcXG4gIGxlZnQ6IC0yMHB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBib3R0b206IDNweDtcXG4gIHotaW5kZXg6IDE7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xcbiAgYm9yZGVyOiAxNXB4IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjOTRhN2Q5ICM5NGE3ZDkgdHJhbnNwYXJlbnQ7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQgLnRleHQuRU1PSkkge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIG1heC13aWR0aDogODBweDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLnR5cGluZy1tZXNzYWdlIC50ZXh0IHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAudHlwaW5nLW1lc3NhZ2UgLnRleHQ6YWZ0ZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLnR5cGluZy1tZXNzYWdlIC50eXBpbmctdGV4dCB7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkdyZWF0IFZpYmVzXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9HcmVhdF9WaWJlcy9HcmVhdFZpYmVzLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNdWxpXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9NdWxpL011bGktVmFyaWFibGVGb250X3dnaHQudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmNoaXZvLU1lZGl1bVxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvQXJjaGl2by9BcmNoaXZvLU1lZGl1bS50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJlbmNoTmluZS1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvZm9udC9CZW5jaE5pbmUvQmVuY2hOaW5lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTYXdhcmFiaS1NaW5jaG8tUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvU2F3YXJhYmlfTWluY2hvL1Nhd2FyYWJpTWluY2hvLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0IHtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgd2lkdGg6IDMwJTtcXG4gIHNjcm9sbGJhci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpICNGNUY1RjU7XFxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW4gIWltcG9ydGFudDtcXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdDo6LW1vei1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0OjotbW96LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0Ojotby1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0Ojotby1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1vLWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQ6Oi1tcy1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0OjotbXMtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtbXMtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdCAqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5teWluZm8ge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xcbiAgbWluLWhlaWdodDogNzVweDtcXG59XFxuLm15aW5mbyAuYXZhdGFyIC5zdGF0ZS1hdmF0YXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcbi5teWluZm8gLmF2YXRhciAuc3RhdGUtYXZhdGFyOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIuXFxcIjtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMXB4O1xcbiAgbGVmdDogMXB4O1xcbiAgcmlnaHQ6IDFweDtcXG4gIGJvdHRvbTogMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAycHggZG91YmxlICM5MTc1Y2E7XFxufVxcbi5teWluZm8gLmF2YXRhciAuc3RhdGUtYXZhdGFyLmFjdGl2ZS1vbmxpbmUge1xcbiAgYm9yZGVyOiAycHggZG91YmxlICMwMGM4NTE7XFxufVxcbi5teWluZm8gLmF2YXRhciAuc3RhdGUtYXZhdGFyIGltZyB7XFxuICBtYXgtd2lkdGg6IDQwcHg7XFxuICBtYXgtaGVpZ2h0OiA0MHB4O1xcbn1cXG4ubXlpbmZvIC5hdmF0YXIgLm5hbWUge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIG1heC13aWR0aDogMjdjaDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY29sb3I6ICMwZDQ3YTE7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcXG4gIC5jb21wb25lbnQtc2lkZWJhci1jaGF0IHtcXG4gICAgd2lkdGg6IDQwJTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQge1xcbiAgICB3aWR0aDogNzVweDtcXG4gIH1cXG4gIC5jb21wb25lbnQtc2lkZWJhci1jaGF0IC51c2VyLWNoYXQgLnN0YXRlLWF2YXRhciB7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSAhaW1wb3J0YW50O1xcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpICFpbXBvcnRhbnQ7XFxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpICFpbXBvcnRhbnQ7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLm15aW5mbyB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuICAubXlpbmZvIC5hdmF0YXIgLnN0YXRlLWF2YXRhciBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDM1cHg7XFxuICAgIG1heC1oZWlnaHQ6IDM1cHg7XFxuICB9XFxuICAubXlpbmZvIC5hdmF0YXIgLm5hbWUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHcmVhdCBWaWJlc1xcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvR3JlYXRfVmliZXMvR3JlYXRWaWJlcy1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXVsaVxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvTXVsaS9NdWxpLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXJjaGl2by1NZWRpdW1cXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L0FyY2hpdm8vQXJjaGl2by1NZWRpdW0udHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCZW5jaE5pbmUtUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnQvQmVuY2hOaW5lL0JlbmNoTmluZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2F3YXJhYmktTWluY2hvLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250L1Nhd2FyYWJpX01pbmNoby9TYXdhcmFiaU1pbmNoby1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG4vKipcXG4qIGRpc3BsYXlcXG4qL1xcbiosXFxuOmFmdGVyLFxcbjpiZWZvcmUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOmZvY3VzIHtcXG4gIG91dGxpbmU6IDAgIWltcG9ydGFudDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZC1ub25lIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmQtaW5saW5lLWJsb2NrIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZC1ibG9jayB7XFxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZC10YWJsZSB7XFxuICBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZC10YWJsZS1yb3cge1xcbiAgZGlzcGxheTogdGFibGUtcm93ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kLXRhYmxlLWNlbGwge1xcbiAgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZC1mbGV4IHtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94ICFpbXBvcnRhbnQ7XFxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kLWlubGluZS1mbGV4IHtcXG4gIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveCAhaW1wb3J0YW50O1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcXG59XFxuXFxuLml0YWxpYyB7XFxuICBmb250LXN0eWxlOiBpdGFsaWMgIWltcG9ydGFudDtcXG59XFxuXFxuLm5vdC1pdGFsaWMge1xcbiAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XFxufVxcblxcbi51cHBlcmNhc2Uge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubG93ZXJjYXNlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcXG59XFxuXFxuLmNhcGl0YWxpemUge1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcXG59XFxuXFxuLm5vcm1hbC1jYXNlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi51bmRlcmxpbmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmxpbmUtdGhyb3VnaCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubm8tdW5kZXJsaW5lIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmZvbnQtaGFpcmxpbmUge1xcbiAgZm9udC13ZWlnaHQ6IDEwMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZm9udC10aGluIHtcXG4gIGZvbnQtd2VpZ2h0OiAyMDAgIWltcG9ydGFudDtcXG59XFxuXFxuLmZvbnQtbGlnaHQge1xcbiAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZm9udC1ub3JtYWwge1xcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZm9udC1tZWRpdW0ge1xcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZm9udC1zZW1pYm9sZCB7XFxuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mb250LWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZm9udC1leHRyYWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZm9udC1ibGFjayB7XFxuICBmb250LXdlaWdodDogOTAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50ZXh0LXJpZ2h0IHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4udGV4dC1sZWZ0IHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi52ZXJ0aWNhbC1hbGlnbi1taWRkbGUge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLm1nLWF1dG8ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5yb3VuZGVkLWNpcmNsZSB7XFxuICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcXG59XFxuXFxuLmJvcmRlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ib3JkZXItdG9wIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ib3JkZXItcmlnaHQge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RlZTJlNiAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYm9yZGVyLWJvdHRvbSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNiAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYm9yZGVyLWxlZnQge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGVlMmU2ICFpbXBvcnRhbnQ7XFxufVxcblxcbi50ZXh0LWNvbG9yLXJlZCB7XFxuICBjb2xvcjogI2Y0NDMzNjtcXG59XFxuXFxuLnRleHQtY29sb3ItcGluayB7XFxuICBjb2xvcjogI2U5MWU2MztcXG59XFxuXFxuLnRleHQtY29sb3ItcHVycGxlIHtcXG4gIGNvbG9yOiAjOWMyN2IwO1xcbn1cXG5cXG4udGV4dC1jb2xvci1kZWVwLXB1cnBsZSB7XFxuICBjb2xvcjogIzY3M2FiNztcXG59XFxuXFxuLnRleHQtY29sb3ItaW5kaWdvIHtcXG4gIGNvbG9yOiAjM2Y1MWI1O1xcbn1cXG5cXG4udGV4dC1jb2xvci1ibHVlIHtcXG4gIGNvbG9yOiAjMjE5NmYzO1xcbn1cXG5cXG4udGV4dC1jb2xvci1saWdodC1ibHVlIHtcXG4gIGNvbG9yOiAjMDNhOWY0O1xcbn1cXG5cXG4udGV4dC1jb2xvci1jeWFuIHtcXG4gIGNvbG9yOiAjMDBiY2Q0O1xcbn1cXG5cXG4udGV4dC1jb2xvci10ZWFsIHtcXG4gIGNvbG9yOiAjMDA5Njg4O1xcbn1cXG5cXG4udGV4dC1jb2xvci1ncmVlbiB7XFxuICBjb2xvcjogIzRjYWY1MDtcXG59XFxuXFxuLnRleHQtY29sb3ItbGlnaHQtZ3JlZW4ge1xcbiAgY29sb3I6ICM4YmMzNGE7XFxufVxcblxcbi50ZXh0LWNvbG9yLWxpbWUge1xcbiAgY29sb3I6ICNjZGRjMzk7XFxufVxcblxcbi50ZXh0LWNvbG9yLXllbGxvdyB7XFxuICBjb2xvcjogI2ZmZWIzYjtcXG59XFxuXFxuLnRleHQtY29sb3ItYW1iZXIge1xcbiAgY29sb3I6ICNmZmMxMDc7XFxufVxcblxcbi50ZXh0LWNvbG9yLW9yYW5nZSB7XFxuICBjb2xvcjogI2ZmOTgwMDtcXG59XFxuXFxuLnRleHQtY29sb3ItZGVlcC1vcmFuZ2Uge1xcbiAgY29sb3I6ICNmZjU3MjI7XFxufVxcblxcbi50ZXh0LWNvbG9yLWJyb3duIHtcXG4gIGNvbG9yOiAjNzk1NTQ4O1xcbn1cXG5cXG4udGV4dC1jb2xvci1ibGFjayB7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLnRleHQtY29sb3Itd2hpdGUge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi50ZXh0LWNvbG9yLWdyZXkge1xcbiAgY29sb3I6ICM5ZTllOWU7XFxufVxcblxcbi50ZXh0LWNvbG9yLWJsdWUtZ3JleSB7XFxuICBjb2xvcjogIzYwN2Q4YjtcXG59XFxuXFxuLnRleHQtY29sb3ItcHJpbWFyeS1jb2xvci1kYXJrIHtcXG4gIGNvbG9yOiAjMGQ0N2ExO1xcbn1cXG5cXG4udGV4dC1jb2xvci1zZWNvbmRhcnktY29sb3Ige1xcbiAgY29sb3I6ICNhYTY2Y2M7XFxufVxcblxcbi50ZXh0LWNvbG9yLXNlY29uZGFyeS1jb2xvci1kYXJrIHtcXG4gIGNvbG9yOiAjOTkzM2NjO1xcbn1cXG5cXG4udGV4dC1jb2xvci1kZWZhdWx0LWNvbG9yIHtcXG4gIGNvbG9yOiAjMmJiYmFkO1xcbn1cXG5cXG4udGV4dC1jb2xvci1kZWZhdWx0LWNvbG9yLWRhcmsge1xcbiAgY29sb3I6ICMwMDY5NWM7XFxufVxcblxcbi50ZXh0LWNvbG9yLWluZm8tY29sb3Ige1xcbiAgY29sb3I6ICMzM2I1ZTU7XFxufVxcblxcbi50ZXh0LWNvbG9yLWluZm8tY29sb3ItZGFyayB7XFxuICBjb2xvcjogIzAwOTljYztcXG59XFxuXFxuLnRleHQtY29sb3Itc3VjY2Vzcy1jb2xvciB7XFxuICBjb2xvcjogIzAwYzg1MTtcXG59XFxuXFxuLnRleHQtY29sb3Itc3VjY2Vzcy1jb2xvci1kYXJrIHtcXG4gIGNvbG9yOiAjMDA3ZTMzO1xcbn1cXG5cXG4udGV4dC1jb2xvci13YXJuaW5nLWNvbG9yIHtcXG4gIGNvbG9yOiAjZmZiYjMzO1xcbn1cXG5cXG4udGV4dC1jb2xvci13YXJuaW5nLWNvbG9yLWRhcmsge1xcbiAgY29sb3I6ICNmZjg4MDA7XFxufVxcblxcbi50ZXh0LWNvbG9yLWRhbmdlci1jb2xvciB7XFxuICBjb2xvcjogI2ZmMzU0NztcXG59XFxuXFxuLnRleHQtY29sb3ItZGFuZ2VyLWNvbG9yLWRhcmsge1xcbiAgY29sb3I6ICNjYzAwMDA7XFxufVxcblxcbi50ZXh0LWNvbG9yLWVsZWdhbnQtY29sb3Ige1xcbiAgY29sb3I6ICMyZTJlMmU7XFxufVxcblxcbi50ZXh0LWNvbG9yLWVsZWdhbnQtY29sb3ItZGFyayB7XFxuICBjb2xvcjogIzIxMjEyMTtcXG59XFxuXFxuLnRleHQtY29sb3Itc3R5bGlzaC1jb2xvciB7XFxuICBjb2xvcjogIzRiNTE1ZDtcXG59XFxuXFxuLnRleHQtY29sb3Itc3R5bGlzaC1jb2xvci1kYXJrIHtcXG4gIGNvbG9yOiAjM2U0NTUxO1xcbn1cXG5cXG4udGV4dC1jb2xvci11bmlxdWUtY29sb3Ige1xcbiAgY29sb3I6ICMzZjcyOWI7XFxufVxcblxcbi50ZXh0LWNvbG9yLXVuaXF1ZS1jb2xvci1kYXJrIHtcXG4gIGNvbG9yOiAjMWMyMzMxO1xcbn1cXG5cXG4udGV4dC1jb2xvci1zcGVjaWFsLWNvbG9yIHtcXG4gIGNvbG9yOiAjMzc0NzRmO1xcbn1cXG5cXG4udGV4dC1jb2xvci1zcGVjaWFsLWNvbG9yLWRhcmsge1xcbiAgY29sb3I6ICMyNjMyMzg7XFxufVxcblxcbi50ZXh0LWNvbG9yLXByaW1hcnkge1xcbiAgY29sb3I6ICM0Mjg1ZjQ7XFxufVxcblxcbi50ZXh0LWNvbG9yLWRhbmdlciB7XFxuICBjb2xvcjogI2ZmMzU0NztcXG59XFxuXFxuLnRleHQtY29sb3Itd2FybmluZyB7XFxuICBjb2xvcjogI2ZmYmIzMztcXG59XFxuXFxuLnRleHQtY29sb3Itc3VjY2VzcyB7XFxuICBjb2xvcjogIzAwYzg1MTtcXG59XFxuXFxuLnRleHQtY29sb3ItaW5mbyB7XFxuICBjb2xvcjogIzMzYjVlNTtcXG59XFxuXFxuLnRleHQtY29sb3ItZGVmYXVsdCB7XFxuICBjb2xvcjogIzJiYmJhZDtcXG59XFxuXFxuLnRleHQtY29sb3Itc2Vjb25kYXJ5IHtcXG4gIGNvbG9yOiAjYWE2NmNjO1xcbn1cXG5cXG4udGV4dC1jb2xvci1kYXJrIHtcXG4gIGNvbG9yOiAjMjEyMTIxO1xcbn1cXG5cXG4udGV4dC1jb2xvci1saWdodCB7XFxuICBjb2xvcjogI2UwZTBlMDtcXG59XFxuXFxuLnRleHQtY29sb3ItZ3JleS14IHtcXG4gIGNvbG9yOiAjZjlmOWY5O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXJlZCB7XFxuICBib3JkZXItY29sb3I6ICNmNDQzMzY7XFxufVxcblxcbi5ib3JkZXItY29sb3ItcGluayB7XFxuICBib3JkZXItY29sb3I6ICNlOTFlNjM7XFxufVxcblxcbi5ib3JkZXItY29sb3ItcHVycGxlIHtcXG4gIGJvcmRlci1jb2xvcjogIzljMjdiMDtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1kZWVwLXB1cnBsZSB7XFxuICBib3JkZXItY29sb3I6ICM2NzNhYjc7XFxufVxcblxcbi5ib3JkZXItY29sb3ItaW5kaWdvIHtcXG4gIGJvcmRlci1jb2xvcjogIzNmNTFiNTtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1ibHVlIHtcXG4gIGJvcmRlci1jb2xvcjogIzIxOTZmMztcXG59XFxuXFxuLmJvcmRlci1jb2xvci1saWdodC1ibHVlIHtcXG4gIGJvcmRlci1jb2xvcjogIzAzYTlmNDtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1jeWFuIHtcXG4gIGJvcmRlci1jb2xvcjogIzAwYmNkNDtcXG59XFxuXFxuLmJvcmRlci1jb2xvci10ZWFsIHtcXG4gIGJvcmRlci1jb2xvcjogIzAwOTY4ODtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1ncmVlbiB7XFxuICBib3JkZXItY29sb3I6ICM0Y2FmNTA7XFxufVxcblxcbi5ib3JkZXItY29sb3ItbGlnaHQtZ3JlZW4ge1xcbiAgYm9yZGVyLWNvbG9yOiAjOGJjMzRhO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWxpbWUge1xcbiAgYm9yZGVyLWNvbG9yOiAjY2RkYzM5O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXllbGxvdyB7XFxuICBib3JkZXItY29sb3I6ICNmZmViM2I7XFxufVxcblxcbi5ib3JkZXItY29sb3ItYW1iZXIge1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZjMTA3O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLW9yYW5nZSB7XFxuICBib3JkZXItY29sb3I6ICNmZjk4MDA7XFxufVxcblxcbi5ib3JkZXItY29sb3ItZGVlcC1vcmFuZ2Uge1xcbiAgYm9yZGVyLWNvbG9yOiAjZmY1NzIyO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWJyb3duIHtcXG4gIGJvcmRlci1jb2xvcjogIzc5NTU0ODtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1ibGFjayB7XFxuICBib3JkZXItY29sb3I6ICMwMDA7XFxufVxcblxcbi5ib3JkZXItY29sb3Itd2hpdGUge1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWdyZXkge1xcbiAgYm9yZGVyLWNvbG9yOiAjOWU5ZTllO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWJsdWUtZ3JleSB7XFxuICBib3JkZXItY29sb3I6ICM2MDdkOGI7XFxufVxcblxcbi5ib3JkZXItY29sb3ItcHJpbWFyeS1jb2xvci1kYXJrIHtcXG4gIGJvcmRlci1jb2xvcjogIzBkNDdhMTtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1zZWNvbmRhcnktY29sb3Ige1xcbiAgYm9yZGVyLWNvbG9yOiAjYWE2NmNjO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXNlY29uZGFyeS1jb2xvci1kYXJrIHtcXG4gIGJvcmRlci1jb2xvcjogIzk5MzNjYztcXG59XFxuXFxuLmJvcmRlci1jb2xvci1kZWZhdWx0LWNvbG9yIHtcXG4gIGJvcmRlci1jb2xvcjogIzJiYmJhZDtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1kZWZhdWx0LWNvbG9yLWRhcmsge1xcbiAgYm9yZGVyLWNvbG9yOiAjMDA2OTVjO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWluZm8tY29sb3Ige1xcbiAgYm9yZGVyLWNvbG9yOiAjMzNiNWU1O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWluZm8tY29sb3ItZGFyayB7XFxuICBib3JkZXItY29sb3I6ICMwMDk5Y2M7XFxufVxcblxcbi5ib3JkZXItY29sb3Itc3VjY2Vzcy1jb2xvciB7XFxuICBib3JkZXItY29sb3I6ICMwMGM4NTE7XFxufVxcblxcbi5ib3JkZXItY29sb3Itc3VjY2Vzcy1jb2xvci1kYXJrIHtcXG4gIGJvcmRlci1jb2xvcjogIzAwN2UzMztcXG59XFxuXFxuLmJvcmRlci1jb2xvci13YXJuaW5nLWNvbG9yIHtcXG4gIGJvcmRlci1jb2xvcjogI2ZmYmIzMztcXG59XFxuXFxuLmJvcmRlci1jb2xvci13YXJuaW5nLWNvbG9yLWRhcmsge1xcbiAgYm9yZGVyLWNvbG9yOiAjZmY4ODAwO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWRhbmdlci1jb2xvciB7XFxuICBib3JkZXItY29sb3I6ICNmZjM1NDc7XFxufVxcblxcbi5ib3JkZXItY29sb3ItZGFuZ2VyLWNvbG9yLWRhcmsge1xcbiAgYm9yZGVyLWNvbG9yOiAjY2MwMDAwO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWVsZWdhbnQtY29sb3Ige1xcbiAgYm9yZGVyLWNvbG9yOiAjMmUyZTJlO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWVsZWdhbnQtY29sb3ItZGFyayB7XFxuICBib3JkZXItY29sb3I6ICMyMTIxMjE7XFxufVxcblxcbi5ib3JkZXItY29sb3Itc3R5bGlzaC1jb2xvciB7XFxuICBib3JkZXItY29sb3I6ICM0YjUxNWQ7XFxufVxcblxcbi5ib3JkZXItY29sb3Itc3R5bGlzaC1jb2xvci1kYXJrIHtcXG4gIGJvcmRlci1jb2xvcjogIzNlNDU1MTtcXG59XFxuXFxuLmJvcmRlci1jb2xvci11bmlxdWUtY29sb3Ige1xcbiAgYm9yZGVyLWNvbG9yOiAjM2Y3MjliO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXVuaXF1ZS1jb2xvci1kYXJrIHtcXG4gIGJvcmRlci1jb2xvcjogIzFjMjMzMTtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1zcGVjaWFsLWNvbG9yIHtcXG4gIGJvcmRlci1jb2xvcjogIzM3NDc0ZjtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1zcGVjaWFsLWNvbG9yLWRhcmsge1xcbiAgYm9yZGVyLWNvbG9yOiAjMjYzMjM4O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXByaW1hcnkge1xcbiAgYm9yZGVyLWNvbG9yOiAjNDI4NWY0O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWRhbmdlciB7XFxuICBib3JkZXItY29sb3I6ICNmZjM1NDc7XFxufVxcblxcbi5ib3JkZXItY29sb3Itd2FybmluZyB7XFxuICBib3JkZXItY29sb3I6ICNmZmJiMzM7XFxufVxcblxcbi5ib3JkZXItY29sb3Itc3VjY2VzcyB7XFxuICBib3JkZXItY29sb3I6ICMwMGM4NTE7XFxufVxcblxcbi5ib3JkZXItY29sb3ItaW5mbyB7XFxuICBib3JkZXItY29sb3I6ICMzM2I1ZTU7XFxufVxcblxcbi5ib3JkZXItY29sb3ItZGVmYXVsdCB7XFxuICBib3JkZXItY29sb3I6ICMyYmJiYWQ7XFxufVxcblxcbi5ib3JkZXItY29sb3Itc2Vjb25kYXJ5IHtcXG4gIGJvcmRlci1jb2xvcjogI2FhNjZjYztcXG59XFxuXFxuLmJvcmRlci1jb2xvci1kYXJrIHtcXG4gIGJvcmRlci1jb2xvcjogIzIxMjEyMTtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1saWdodCB7XFxuICBib3JkZXItY29sb3I6ICNlMGUwZTA7XFxufVxcblxcbi5ib3JkZXItY29sb3ItZ3JleS14IHtcXG4gIGJvcmRlci1jb2xvcjogI2Y5ZjlmOTtcXG59XFxuXFxuLmJnLWNvbG9yLXJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xcbn1cXG5cXG4uYmctY29sb3ItcGluayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTkxZTYzO1xcbn1cXG5cXG4uYmctY29sb3ItcHVycGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5YzI3YjA7XFxufVxcblxcbi5iZy1jb2xvci1kZWVwLXB1cnBsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjczYWI3O1xcbn1cXG5cXG4uYmctY29sb3ItaW5kaWdvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XFxufVxcblxcbi5iZy1jb2xvci1ibHVlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XFxufVxcblxcbi5iZy1jb2xvci1saWdodC1ibHVlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwM2E5ZjQ7XFxufVxcblxcbi5iZy1jb2xvci1jeWFuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGJjZDQ7XFxufVxcblxcbi5iZy1jb2xvci10ZWFsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XFxufVxcblxcbi5iZy1jb2xvci1ncmVlbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xcbn1cXG5cXG4uYmctY29sb3ItbGlnaHQtZ3JlZW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiYzM0YTtcXG59XFxuXFxuLmJnLWNvbG9yLWxpbWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NkZGMzOTtcXG59XFxuXFxuLmJnLWNvbG9yLXllbGxvdyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYjNiO1xcbn1cXG5cXG4uYmctY29sb3ItYW1iZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcXG59XFxuXFxuLmJnLWNvbG9yLW9yYW5nZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ODAwO1xcbn1cXG5cXG4uYmctY29sb3ItZGVlcC1vcmFuZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTcyMjtcXG59XFxuXFxuLmJnLWNvbG9yLWJyb3duIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3OTU1NDg7XFxufVxcblxcbi5iZy1jb2xvci1ibGFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbn1cXG5cXG4uYmctY29sb3Itd2hpdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLmJnLWNvbG9yLWdyZXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzllOWU5ZTtcXG59XFxuXFxuLmJnLWNvbG9yLWJsdWUtZ3JleSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3ZDhiO1xcbn1cXG5cXG4uYmctY29sb3ItcHJpbWFyeS1jb2xvci1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDQ3YTE7XFxufVxcblxcbi5iZy1jb2xvci1zZWNvbmRhcnktY29sb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhNjZjYztcXG59XFxuXFxuLmJnLWNvbG9yLXNlY29uZGFyeS1jb2xvci1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTMzY2M7XFxufVxcblxcbi5iZy1jb2xvci1kZWZhdWx0LWNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYmJiYWQ7XFxufVxcblxcbi5iZy1jb2xvci1kZWZhdWx0LWNvbG9yLWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjk1YztcXG59XFxuXFxuLmJnLWNvbG9yLWluZm8tY29sb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzYjVlNTtcXG59XFxuXFxuLmJnLWNvbG9yLWluZm8tY29sb3ItZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5OWNjO1xcbn1cXG5cXG4uYmctY29sb3Itc3VjY2Vzcy1jb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjODUxO1xcbn1cXG5cXG4uYmctY29sb3Itc3VjY2Vzcy1jb2xvci1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdlMzM7XFxufVxcblxcbi5iZy1jb2xvci13YXJuaW5nLWNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmJiMzM7XFxufVxcblxcbi5iZy1jb2xvci13YXJuaW5nLWNvbG9yLWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODgwMDtcXG59XFxuXFxuLmJnLWNvbG9yLWRhbmdlci1jb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzNTQ3O1xcbn1cXG5cXG4uYmctY29sb3ItZGFuZ2VyLWNvbG9yLWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjMDAwMDtcXG59XFxuXFxuLmJnLWNvbG9yLWVsZWdhbnQtY29sb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmUyZTtcXG59XFxuXFxuLmJnLWNvbG9yLWVsZWdhbnQtY29sb3ItZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xcbn1cXG5cXG4uYmctY29sb3Itc3R5bGlzaC1jb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI1MTVkO1xcbn1cXG5cXG4uYmctY29sb3Itc3R5bGlzaC1jb2xvci1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZTQ1NTE7XFxufVxcblxcbi5iZy1jb2xvci11bmlxdWUtY29sb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNzI5YjtcXG59XFxuXFxuLmJnLWNvbG9yLXVuaXF1ZS1jb2xvci1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzIzMzE7XFxufVxcblxcbi5iZy1jb2xvci1zcGVjaWFsLWNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzQ3NGY7XFxufVxcblxcbi5iZy1jb2xvci1zcGVjaWFsLWNvbG9yLWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MzIzODtcXG59XFxuXFxuLmJnLWNvbG9yLXByaW1hcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyODVmNDtcXG59XFxuXFxuLmJnLWNvbG9yLWRhbmdlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzNTQ3O1xcbn1cXG5cXG4uYmctY29sb3Itd2FybmluZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiYjMzO1xcbn1cXG5cXG4uYmctY29sb3Itc3VjY2VzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjODUxO1xcbn1cXG5cXG4uYmctY29sb3ItaW5mbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNiNWU1O1xcbn1cXG5cXG4uYmctY29sb3ItZGVmYXVsdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmJiYmFkO1xcbn1cXG5cXG4uYmctY29sb3Itc2Vjb25kYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYTY2Y2M7XFxufVxcblxcbi5iZy1jb2xvci1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XFxufVxcblxcbi5iZy1jb2xvci1saWdodCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbn1cXG5cXG4uYmctY29sb3ItZ3JleS14IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XFxufVxcblxcbi53LTI1IHtcXG4gIHdpZHRoOiAyNTtcXG59XFxuXFxuLnctNTAge1xcbiAgd2lkdGg6IDUwO1xcbn1cXG5cXG4udy01NSB7XFxuICB3aWR0aDogNTU7XFxufVxcblxcbi53LTYwIHtcXG4gIHdpZHRoOiA2MDtcXG59XFxuXFxuLnctNjUge1xcbiAgd2lkdGg6IDY1O1xcbn1cXG5cXG4udy03MCB7XFxuICB3aWR0aDogNzA7XFxufVxcblxcbi53LTc1IHtcXG4gIHdpZHRoOiA3NTtcXG59XFxuXFxuLnctODAge1xcbiAgd2lkdGg6IDgwO1xcbn1cXG5cXG4udy04NSB7XFxuICB3aWR0aDogODU7XFxufVxcblxcbi53LTkwIHtcXG4gIHdpZHRoOiA5MDtcXG59XFxuXFxuLnctOTUge1xcbiAgd2lkdGg6IDk1O1xcbn1cXG5cXG4udy0xMDAge1xcbiAgd2lkdGg6IDEwMDtcXG59XFxuXFxuLnRleHQteHMge1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbn1cXG5cXG4udGV4dC1zbSB7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbn1cXG5cXG4udGV4dC1iYXNlIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRleHQtbGcge1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG59XFxuXFxuLnRleHQteGwge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4udGV4dC0yeGwge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50ZXh0LTN4bCB7XFxuICBmb250LXNpemU6IDEuODc1cmVtO1xcbn1cXG5cXG4udGV4dC00eGwge1xcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xcbn1cXG5cXG4udGV4dC01eGwge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4udGV4dC02eGwge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG5ib2R5Lm5lby1zY3JvbGwge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsIHNlbGVjdDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMsIG9wdGlvbjpmb2N1cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhYWFhO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmFsZXJ0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmFsZXJ0LWhlYWRpbmcge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5hbGVydC1saW5rIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uYWxlcnQtZGlzbWlzc2libGUge1xcbiAgcGFkZGluZy1yaWdodDogNHJlbTtcXG59XFxuLmFsZXJ0LWRpc21pc3NpYmxlIC5jbG9zZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uYWxlcnQtcHJpbWFyeSB7XFxuICBjb2xvcjogIzBhNTRjMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmVlZmY7XFxuICBib3JkZXItY29sb3I6ICNiYmQ2ZmU7XFxufVxcbi5hbGVydC1wcmltYXJ5IC5hbGVydC1saW5rIHtcXG4gIGNvbG9yOiAjMDczZjkwO1xcbn1cXG5cXG4uYWxlcnQtc2Vjb25kYXJ5IHtcXG4gIGNvbG9yOiAjNTI1OTVmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWVlZjtcXG4gIGJvcmRlci1jb2xvcjogI2Q2ZDhkYjtcXG59XFxuLmFsZXJ0LXNlY29uZGFyeSAuYWxlcnQtbGluayB7XFxuICBjb2xvcjogIzNhM2Y0NDtcXG59XFxuXFxuLmFsZXJ0LXN1Y2Nlc3Mge1xcbiAgY29sb3I6ICMxZTdmMzQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVmNGU5O1xcbiAgYm9yZGVyLWNvbG9yOiAjYzNlNmNiO1xcbn1cXG4uYWxlcnQtc3VjY2VzcyAuYWxlcnQtbGluayB7XFxuICBjb2xvcjogIzE0NTYyMztcXG59XFxuXFxuLmFsZXJ0LWluZm8ge1xcbiAgY29sb3I6ICMxMTdiOGM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNmNGY2O1xcbiAgYm9yZGVyLWNvbG9yOiAjYmVlNWViO1xcbn1cXG4uYWxlcnQtaW5mbyAuYWxlcnQtbGluayB7XFxuICBjb2xvcjogIzBiNTM1ZjtcXG59XFxuXFxuLmFsZXJ0LXdhcm5pbmcge1xcbiAgY29sb3I6ICNjMjkzMDU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOGUxO1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZlZWJhO1xcbn1cXG4uYWxlcnQtd2FybmluZyAuYWxlcnQtbGluayB7XFxuICBjb2xvcjogIzkwNmQwNDtcXG59XFxuXFxuLmFsZXJ0LWRhbmdlciB7XFxuICBjb2xvcjogI2E3MjgzNDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmU3ZTk7XFxuICBib3JkZXItY29sb3I6ICNmNWM2Y2I7XFxufVxcbi5hbGVydC1kYW5nZXIgLmFsZXJ0LWxpbmsge1xcbiAgY29sb3I6ICM3ZTFlMjc7XFxufVxcblxcbi5hbGVydC1saWdodCB7XFxuICBjb2xvcjogI2JjYmRiZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICBib3JkZXItY29sb3I6ICNmZGZkZmU7XFxufVxcbi5hbGVydC1saWdodCAuYWxlcnQtbGluayB7XFxuICBjb2xvcjogI2EyYTRhNTtcXG59XFxuXFxuLmFsZXJ0LWRhcmsge1xcbiAgY29sb3I6ICMyODJjMzE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U4O1xcbiAgYm9yZGVyLWNvbG9yOiAjYzZjOGNhO1xcbn1cXG4uYWxlcnQtZGFyayAuYWxlcnQtbGluayB7XFxuICBjb2xvcjogIzExMTMxNTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1hbmltYXRlLWR1cmF0aW9uOiAxcztcXG4gIC0tYW5pbWF0ZS1kZWxheTogMXM7XFxuICAtLWFuaW1hdGUtbG9vcDogMTtcXG59XFxuXFxuLmFuaW1hdGVkIHtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbn1cXG4uYW5pbWF0ZWQuaW5maW5pdGUge1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbn1cXG4uYW5pbWF0ZWQuZmFzdGVyIHtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYygkLS1hbmltYXRlLWR1cmF0aW9uIC8gMik7XFxufVxcbi5hbmltYXRlZC5mYXN0IHtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYygkLS1hbmltYXRlLWR1cmF0aW9uICogMC44KTtcXG59XFxuLmFuaW1hdGVkLnNsb3cge1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKCQtLWFuaW1hdGUtZHVyYXRpb24gKiAyKTtcXG59XFxuLmFuaW1hdGVkLnNsb3dlciB7XFxuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGMoJC0tYW5pbWF0ZS1kdXJhdGlvbiAqIDMpO1xcbn1cXG4uYW5pbWF0ZWQubG9vcC0xIHtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxufVxcbi5hbmltYXRlZC5kZWxheS0xcyB7XFxuICBhbmltYXRpb24tZGVsYXk6IGNhbGMoJC0tYW5pbWF0ZS1kZWxheSAqICRpKTtcXG59XFxuLmFuaW1hdGVkLmxvb3AtMiB7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAyO1xcbn1cXG4uYW5pbWF0ZWQuZGVsYXktMXMge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKCQtLWFuaW1hdGUtZGVsYXkgKiAkaSk7XFxufVxcbi5hbmltYXRlZC5sb29wLTMge1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMztcXG59XFxuLmFuaW1hdGVkLmRlbGF5LTFzIHtcXG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYygkLS1hbmltYXRlLWRlbGF5ICogJGkpO1xcbn1cXG4uYW5pbWF0ZWQubG9vcC00IHtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDQ7XFxufVxcbi5hbmltYXRlZC5kZWxheS0xcyB7XFxuICBhbmltYXRpb24tZGVsYXk6IGNhbGMoJC0tYW5pbWF0ZS1kZWxheSAqICRpKTtcXG59XFxuXFxuQG1lZGlhIHByaW50LCAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XFxuICAuYW5pbWF0ZWQge1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFtcyAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxbXMgIWltcG9ydGFudDtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmFuaW1hdGVkW2NsYXNzKj1PdXRdIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuLmFuaW1hdGVkLWluaXRpYWwge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGluaXRpYWwgIWltcG9ydGFudDtcXG59XFxuXFxuLyogb3JpZ2luYWxseSBhdXRob3JlZCBieSBOaWNrIFBldHRpdCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWNrcGV0dGl0L2dsaWRlICovXFxuQGtleWZyYW1lcyBwdWxzZSB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIDEuMDUsIDEuMDUpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxufVxcbi5wdWxzZSB7XFxuICBhbmltYXRpb24tbmFtZTogcHVsc2U7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG59XFxuXFxuQGtleWZyYW1lcyB0YWRhIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxuICAxMCUsIDIwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjksIDAuOSwgMC45KSByb3RhdGUzZCgwLCAwLCAxLCAtM2RlZyk7XFxuICB9XFxuICAzMCUsIDUwJSwgNzAlLCA5MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSkgcm90YXRlM2QoMCwgMCwgMSwgM2RlZyk7XFxuICB9XFxuICA0MCUsIDYwJSwgODAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpIHJvdGF0ZTNkKDAsIDAsIDEsIC0zZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcbn1cXG4udGFkYSB7XFxuICBhbmltYXRpb24tbmFtZTogdGFkYTtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbi5mYWRlSW4ge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW5MZWZ0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuLmZhZGVJbkxlZnQge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkxlZnQ7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluUmlnaHQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbi5mYWRlSW5SaWdodCB7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZUluUmlnaHQ7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluVXAge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbi5mYWRlSW5VcCB7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZUluVXA7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlT3V0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDIwMGRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbi5yb3RhdGVPdXQge1xcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZU91dDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG59XFxuXFxuLnJvdGF0ZS1jaXJjbGUge1xcbiAgYW5pbWF0aW9uOiByb3RhdGVDaXJjbGUgOXMgaW5maW5pdGU7XFxufVxcblxcbi8qXFxuIEN1c3RvbSBBbmltYXRpb25zXFxuICovXFxuQGtleWZyYW1lcyByb3RhdGVDaXJjbGUge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDI1JSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICB9XFxuICA3NSUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgamFja0luVGhlQm94IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMSkgcm90YXRlKDMwZGVnKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XFxuICB9XFxuICA3MCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XFxuLmphY2tJblRoZUJveCB7XFxuICBhbmltYXRpb24tbmFtZTogamFja0luVGhlQm94O1xcbn1cXG5cXG4vKiBvcmlnaW5hbGx5IGF1dGhvcmVkIGJ5IE5pY2sgUGV0dGl0IC0gaHR0cHM6Ly9naXRodWIuY29tL25pY2twZXR0aXQvZ2xpZGUgKi9cXG5Aa2V5ZnJhbWVzIHJvbGxJbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTEyMGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbi5yb2xsSW4ge1xcbiAgYW5pbWF0aW9uLW5hbWU6IHJvbGxJbjtcXG59XFxuXFxuQGtleWZyYW1lcyB6b29tSW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbi56b29tSW4ge1xcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb21JbjtcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZUluRG93biB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbi5zbGlkZUluRG93biB7XFxuICBhbmltYXRpb24tbmFtZTogc2xpZGVJbkRvd247XFxufVxcblxcbkBrZXlmcmFtZXMgZmxvYXQge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2xhdGVZKDBweCk7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNsYXRlWSgtNnB4KTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2xhdGVZKDBweCk7XFxuICB9XFxufVxcbi5wdXJwbGUtZ3JhZGllbnQge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDBkZWcsICNmZjZlYzQsICM3ODczZjUpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0MGRlZywgI2ZmNmVjNCwgIzc4NzNmNSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0MGRlZywgI2ZmNmVjNCwgIzc4NzNmNSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoNDBkZWcsICNmZjZlYzQsICM3ODczZjUpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsICNmZjZlYzQsICM3ODczZjUpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wZWFjaC1ncmFkaWVudCB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0MGRlZywgI2ZmZDg2ZiwgI2ZjNjI2MikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjZmZkODZmLCAjZmM2MjYyKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjZmZkODZmLCAjZmM2MjYyKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCg0MGRlZywgI2ZmZDg2ZiwgI2ZjNjI2MikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MGRlZywgI2ZmZDg2ZiwgI2ZjNjI2MikgIWltcG9ydGFudDtcXG59XFxuXFxuLmFxdWEtZ3JhZGllbnQge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDBkZWcsICMyMDk2ZmYsICMwNWZmYTMpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0MGRlZywgIzIwOTZmZiwgIzA1ZmZhMykgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0MGRlZywgIzIwOTZmZiwgIzA1ZmZhMykgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoNDBkZWcsICMyMDk2ZmYsICMwNWZmYTMpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsICMyMDk2ZmYsICMwNWZmYTMpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ibHVlLWdyYWRpZW50IHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjNDVjYWZjLCAjMzAzZjlmKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDBkZWcsICM0NWNhZmMsICMzMDNmOWYpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDBkZWcsICM0NWNhZmMsICMzMDNmOWYpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjNDVjYWZjLCAjMzAzZjlmKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjNDVjYWZjLCAjMzAzZjlmKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaG9tZS1wYWdlLWdyYWRpZW50IHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDBkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDBkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHVycGxlLWdyYWRpZW50LXJnYmEge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMjU1LCAxMTAsIDE5NiwgMC45KSwgcmdiYSgxMjAsIDExNSwgMjQ1LCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMjU1LCAxMTAsIDE5NiwgMC45KSwgcmdiYSgxMjAsIDExNSwgMjQ1LCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDI1NSwgMTEwLCAxOTYsIDAuOSksIHJnYmEoMTIwLCAxMTUsIDI0NSwgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMjU1LCAxMTAsIDE5NiwgMC45KSwgcmdiYSgxMjAsIDExNSwgMjQ1LCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDI1NSwgMTEwLCAxOTYsIDAuOSksIHJnYmEoMTIwLCAxMTUsIDI0NSwgMC45KSkgIWltcG9ydGFudDtcXG59XFxuXFxuLnBlYWNoLWdyYWRpZW50LXJnYmEge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMjU1LCAyMTYsIDExMSwgMC45KSwgcmdiYSgyNTIsIDk4LCA5OCwgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDI1NSwgMjE2LCAxMTEsIDAuOSksIHJnYmEoMjUyLCA5OCwgOTgsIDAuOSkpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMjU1LCAyMTYsIDExMSwgMC45KSwgcmdiYSgyNTIsIDk4LCA5OCwgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMjU1LCAyMTYsIDExMSwgMC45KSwgcmdiYSgyNTIsIDk4LCA5OCwgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSgyNTUsIDIxNiwgMTExLCAwLjkpLCByZ2JhKDI1MiwgOTgsIDk4LCAwLjkpKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYXF1YS1ncmFkaWVudC1yZ2JhIHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDMyLCAxNTAsIDI1NSwgMC45KSwgcmdiYSg1LCAyNTUsIDE2MywgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDMyLCAxNTAsIDI1NSwgMC45KSwgcmdiYSg1LCAyNTUsIDE2MywgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSgzMiwgMTUwLCAyNTUsIDAuOSksIHJnYmEoNSwgMjU1LCAxNjMsIDAuOSkpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDMyLCAxNTAsIDI1NSwgMC45KSwgcmdiYSg1LCAyNTUsIDE2MywgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSgzMiwgMTUwLCAyNTUsIDAuOSksIHJnYmEoNSwgMjU1LCAxNjMsIDAuOSkpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ibHVlLWdyYWRpZW50LXJnYmEge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoNjksIDIwMiwgMjUyLCAwLjkpLCByZ2JhKDQ4LCA2MywgMTU5LCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoNjksIDIwMiwgMjUyLCAwLjkpLCByZ2JhKDQ4LCA2MywgMTU5LCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDY5LCAyMDIsIDI1MiwgMC45KSwgcmdiYSg0OCwgNjMsIDE1OSwgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoNjksIDIwMiwgMjUyLCAwLjkpLCByZ2JhKDQ4LCA2MywgMTU5LCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDY5LCAyMDIsIDI1MiwgMC45KSwgcmdiYSg0OCwgNjMsIDE1OSwgMC45KSkgIWltcG9ydGFudDtcXG59XFxuXFxuLmJnLWdyYWRpZW50LXB1cnBsZSB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICNmZjZlYzQsICM3ODczZjUpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICNmZjZlYzQsICM3ODczZjUpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjZmY2ZWM0LCAjNzg3M2Y1KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICNmZjZlYzQsICM3ODczZjUpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjZmY2ZWM0LCAjNzg3M2Y1KSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYmctZ3JhZGllbnQtcGVhY2gge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjZmZkODZmLCAjZmM2MjYyKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjZmZkODZmLCAjZmM2MjYyKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgI2ZmZDg2ZiwgI2ZjNjI2MikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjZmZkODZmLCAjZmM2MjYyKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgI2ZmZDg2ZiwgI2ZjNjI2MikgIWltcG9ydGFudDtcXG59XFxuXFxuLmJnLWdyYWRpZW50LWFxdWEge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjMjA5NmZmLCAjMDVmZmEzKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjMjA5NmZmLCAjMDVmZmEzKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgIzIwOTZmZiwgIzA1ZmZhMykgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjMjA5NmZmLCAjMDVmZmEzKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgIzIwOTZmZiwgIzA1ZmZhMykgIWltcG9ydGFudDtcXG59XFxuXFxuLmJnLWdyYWRpZW50LWJsdWUge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjNDVjYWZjLCAjMzAzZjlmKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjNDVjYWZjLCAjMzAzZjlmKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgIzQ1Y2FmYywgIzMwM2Y5ZikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjNDVjYWZjLCAjMzAzZjlmKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgIzQ1Y2FmYywgIzMwM2Y5ZikgIWltcG9ydGFudDtcXG59XFxuXFxuLmJnLWdyYWRpZW50LWhvbWUtcGFnZSB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSEVSTyBJY29uc1xcXCI7XFxuICBzcmM6IHVybCgvZm9udC9JY29uRm9udC93ZWJmb250LmVvdD92PTEuNC41Nyk7XFxuICBzcmM6IHVybCgvZm9udC9JY29uRm9udC93ZWJmb250LmVvdD8jaWVmaXgmdj0xLjQuNTcpIGZvcm1hdChcXFwiZW1iZWRkZWQtb3BlbnR5cGVcXFwiKSwgdXJsKC9mb250L0ljb25Gb250L3dlYmZvbnQud29mZjI/dj0xLjQuNTcpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKC9mb250L0ljb25Gb250L3dlYmZvbnQud29mZj92PTEuNC41NykgZm9ybWF0KFxcXCJ3b2ZmXFxcIiksIHVybCgvZm9udC9JY29uRm9udC93ZWJmb250LnR0Zj92PTEuNC41NykgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpLCB1cmwoL2ZvbnQvSWNvbkZvbnQvd2ViZm9udC5zdmc/dj0xLjQuNTcpIGZvcm1hdChcXFwic3ZnXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5pLmhlcm8taWNvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG59XFxuaS5oZXJvLWljb246YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDI0cHgvMSBcXFwiSEVSTyBJY29uc1xcXCI7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWFjY291bnQtZ3JvdXAtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBCNThcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWFjY291bnQtc2VhcmNoLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOTM1XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1hY2NvdW50LXRpZS1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTBDQVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYWlycG9ydDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4NEJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWFycm93LWRvd24tYm9sZC1ib3gtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3MzBcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWFycm93LXVwLWJvbGQtYm94LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzM5XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1hcnJvdy11cC1ib3g6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNkMzXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1hdXRvLWZpeDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwNjhcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWF1dG8tdXBsb2FkOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDA2OVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYmFsbG90LXJlY291bnQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDM0FcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNhbGVuZGFyLWNoZWNrLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzQ0XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jYWxlbmRhci1tb250aDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFMTdcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNhbGwtbWFkZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwRjdcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNhcmQtYWNjb3VudC1tYWlsLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTk4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jYXJ0LXBsdXM6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTEyXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jZWxscGhvbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTFDXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jZWxscGhvbmUtY29nOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDk1MVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2VsbHBob25lLW1lc3NhZ2U6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOEQzXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jZWxscGhvbmUtbmZjOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEU5MFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2VydGlmaWNhdGUtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExODhcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNoZWNrLWNpcmNsZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1RTBcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNoZWNrLWNpcmNsZS1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDVFMVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2xpcHB5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDE0RlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2xvY2stY2hlY2stb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGQTlcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNsb2NrLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTUwXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jbG9jay1zdGFydDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxNTVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNsb3VkLWRvd25sb2FkLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQjdEXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jcmVhdGlvbjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2NzRcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtYWlsLWVkaXQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFRTRcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM2OFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tYW5ncnk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzY5XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1hbmdyeS1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM2QVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tY29uZnVzZWQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMERFXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1jb25mdXNlZC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTBERlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tY29vbDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNkJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWNvb2wtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxRjNcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWNyeTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNkNcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWNyeS1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM2RFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tZGVhZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNkVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWRlYWQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2OUJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWRldmlsOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM2RlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tZGV2aWwtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxRjRcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWV4Y2l0ZWQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzcwXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1leGNpdGVkLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjlDXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1mcm93bjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGNENcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWZyb3duLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjREXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1oYXBweTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNzFcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWhhcHB5LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMUY1XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1raXNzOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM3MlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24ta2lzcy1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM3M1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tbG9sOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTIxNFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tbG9sLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjE1XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1uZXV0cmFsOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM3NFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tbmV1dHJhbC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDFGNlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxRjJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLXBvb3A6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMUY3XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1wb29wLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzc1XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1zYWQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzc2XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1zYWQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxRjhcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLXRvbmd1ZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxRjlcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLXRvbmd1ZS1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM3N1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24td2luazo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNzhcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLXdpbmstb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNzlcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWZpbGU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMjE0XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1maWxlLWNsb3VkLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDJBXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1mb3JtLXNlbGVjdDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjE0MDFcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWZvcm1hdC1saXN0LXRleHQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjZGXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1nb29nbGUtYWRzOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM4N1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8taGFuZC1va2F5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEE1MFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8taGFuZC1wb2ludGluZy1yaWdodDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyQzdcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWhlYWRzZXQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMkNFXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1oZWFydC1tdWx0aXBsZS1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEE1N1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8taG9tZS1tYXAtbWFya2VyOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDVGOFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8taHVtYW4tbWFsZS1jaGlsZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEzOENcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWxhcHRvcDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzMjJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLW1lc3NhZ2UtY29nLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTcyXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1tZXNzYWdlLXRleHQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzNkFcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLW1vdXNlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDM3RFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbW91c2UtYmx1ZXRvb3RoOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDk4QlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbW91c2Utb2ZmOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDM3RVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbW91c2UtdmFyaWFudDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzN0ZcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLW1vdXNlLXZhcmlhbnQtb2ZmOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDM4MFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbmV3c3BhcGVyLXZhcmlhbnQtbXVsdGlwbGUtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwMDNcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLW5ld3NwYXBlci12YXJpYW50LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDA0XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1waG9uZS1pbi10YWxrLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTgyXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1wbHVzLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzA1XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1yZXNwb25zaXZlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDQ1RVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tc2VsZWN0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDQ4NVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tc2VsZWN0aW9uLXNlYXJjaDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyMDVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXNlbmQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDhBXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1zZW5kLWNoZWNrLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTYyXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1zZW5kLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTY1XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1zaGFyZS1hbGwtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExRjVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXN0YXItYm94LW11bHRpcGxlLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjg3XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1zdGlja2VyLWVtb2ppOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDc4NVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tdGFibGV0LWlwYWQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNEY4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby10ZWxldmlzaW9uLWNsZWFuOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTExMFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tdXBkYXRlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDZCMFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tem9kaWFjLXRhdXJ1czo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBODdcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXpvZGlhYy12aXJnbzo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBODhcXFwiO1xcbn1cXG5cXG4uYmxvY2tlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgei1pbmRleDogOTk7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmJsb2NrZXI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIG1hcmdpbi1yaWdodDogLTAuMDVlbTtcXG59XFxuLmJsb2NrZXIuYmVoaW5kIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAyO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogOTAlO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHBhZGRpbmc6IDE1cHggMzBweDtcXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtby1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtbXMtYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTBweCAjMDAwO1xcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgMTBweCAjMDAwO1xcbiAgLW8tYm94LXNoYWRvdzogMCAwIDEwcHggIzAwMDtcXG4gIC1tcy1ib3gtc2hhZG93OiAwIDAgMTBweCAjMDAwO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggIzAwMDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi5tb2RhbCBhLmNsb3NlLW1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTEyLjVweDtcXG4gIHJpZ2h0OiAtMTIuNXB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIHRleHQtaW5kZW50OiAtOTk5OXB4O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRHdBQUFBOENBWUFBQUE2L05seUFBQUFBWE5TUjBJQXJzNGM2UUFBQTNoSlJFRlVhQVhsbTgrSzAwQWN4N01pQ0lKSC95dytnQTlnMjVPNDlTTDRBTzNCcDFqdzVOdmt0Qyt3Rjg4cWV2SzRCVTk3RW16eFVCQ0VvbEsvbjVncDNXNlRUSlBmcE5QTkYzN01Oc2w4NS92Ti9EYVRtVTZQa25DNEsrcG5pcWVLSjNrOFVua3ZEeFhKenp5K3EveWF4eGVWSHhXL0ZOSGpnUlNlS3Q0ckZvcGx6YUF1SEhEQkdSMmVTOUc1NHJlaXJzbWllbkRDVFJ0N3h3c3ArS0FvRW10OW5MYUdpdFp4ckJiUEZOYUdmUGxvR3cydDRKVmFtU3Q4eFlXNkRnMW9DWW8zWXYrckNHVmlWMTYwb01rY2Q4U1lLbllWMU5iMWFFT2pDZTZMNVpPaUxmRjEyMEVqV2h1QnUzWUladDFOUW11am5rNUY0TWdPcFVSekxmQXdPQlNUbXpwM2ZwRHh1SS9wYWJ4cHFPb3oycjJITEFiMEdNYlpLbE5WNS9IZzlYSnlwZ3VyeUE3bFBGNUtNZFRaUXpIanF4TlBoV2h6SXVBcnVPbDFlTnFLRXgxdFNoNXJmYnhkdzdtT3hDcTRxUzY4WlRqS1MxWVZ2aWx1NTU5dld2RkhoaDRyWnJkeVo2OVZtcGdkajhmSmJEWkxKcE5KMHV2MWNuci9nanJVaFFNdUkrQU5qeXV3ZnRRMGJiTDZFcnAwbU0vbnk4Rmc0TTNMdGRSeGdNdEtsM2p3bUlIVnhZWENoRnk5NC9SbXBhL3BUYk5VaHN0S1YrNFJyOGxMUTlLbFV2SktMeUc4eXZRMnM5U0J5MUpiN2pWNWEweWFwZkY2YXBhWkxqTExjV3RkNHNOcm1KVU1IeU0rMXhpYlRqSDgyWmgwMVRObGhzck9oZEtUZTAwdUF6WlFtTjYrS1crc0RhL0pEMlBTVlE4NzNtMjl5ZisxUTlWRHpmRVlsSGkxRzVMS0JCV1pidEVzSGJGd2Ixb1lEd3IxWmlGLzJibkNTZzFPQkUvcGZyOS9iV3gyNlV4SkwzT05QSVNPTEtVdlF6YTBMWlV4U0t5anBkVEdhL3ZERXIyNXJkZGJNTTBRM082THgzcnFGdlUreDZVclJLUVk3dHlyWmVjbUQ5Rk9EeTh1TGl6VG1pbHdOajBrcmFOY0FKaE9wNWFHVndzQUdENVZtSkJyV1diSlNnV1Q5enJ6V2VwUUY0N1JhR1NpS2ZlR3g2U3ppM2d6bVgvSEhiaWh3QnNlcjRCOVVKWXBGQk5YNFI2dlRuM1ZRbmV6MFN5bW5ySFFNc1JZR1RyMWRTazM0bGpScVMvRU1kMnBMUThZQnAzYTFQTGZjcUNwbzhndEhrWkZIS2tUWDZmczNNWTBibEtudGg2NnJLQ25VMFZSR3UzN09OclFhQTRlWkRGdFdBdTJmWGo5empGa3hUQk9vOEY3dDkyNmdUcC84M0t5enpjeTJrWkQ2eGlxeFRZbkhMUkZtM3ZIaVJTd05Tamt6M2hvSXpvOGxDS1dVbGcvWXRHczd0T2J1bkRBWmZwRExiZkVJMTV6c0VJWTNVL3gvZ0hIYy9HMXpsdG5BZ0FBQUFCSlJVNUVya0pnZ2c9PVxcXCIpO1xcbn1cXG5cXG4ubW9kYWwtc3Bpbm5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNTAlKTtcXG4gIHBhZGRpbmc6IDEycHggMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcbi5tb2RhbC1zcGlubmVyID4gZGl2IHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAycHg7XFxuICBtYXJnaW46IDAgMXB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHNrLXN0cmV0Y2hkZWxheSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xcbiAgYW5pbWF0aW9uOiBzay1zdHJldGNoZGVsYXkgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcXG59XFxuLm1vZGFsLXNwaW5uZXIgLnJlY3QyIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcXG4gIGFuaW1hdGlvbi1kZWxheTogLTEuMXM7XFxufVxcbi5tb2RhbC1zcGlubmVyIC5yZWN0MyB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTFzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7XFxufVxcbi5tb2RhbC1zcGlubmVyIC5yZWN0NCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOXM7XFxuICBhbmltYXRpb24tZGVsYXk6IC0wLjlzO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stc3RyZXRjaGRlbGF5IHtcXG4gIDAlLCA0MCUsIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XFxuICB9XFxuICAyMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHNrLXN0cmV0Y2hkZWxheSB7XFxuICAwJSwgNDAlLCAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xcbiAgfVxcbiAgMjAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICB9XFxufVxcbiN1aS1kYXRlcGlja2VyLWRpdiB7XFxuICB6LWluZGV4OiAxMDAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi51aS10aW1lcGlja2VyLXdyYXBwZXIge1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xcbiAgd2lkdGg6IDYuNWVtO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgLW1vei1ib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHotaW5kZXg6IDEwMDUyO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4udWktdGltZXBpY2tlci13cmFwcGVyLnVpLXRpbWVwaWNrZXItd2l0aC1kdXJhdGlvbiB7XFxuICB3aWR0aDogMTNlbTtcXG59XFxuXFxuLnVpLXRpbWVwaWNrZXItd3JhcHBlci51aS10aW1lcGlja2VyLXdpdGgtZHVyYXRpb24udWktdGltZXBpY2tlci1zdGVwLTMwLFxcbi51aS10aW1lcGlja2VyLXdyYXBwZXIudWktdGltZXBpY2tlci13aXRoLWR1cmF0aW9uLnVpLXRpbWVwaWNrZXItc3RlcC02MCB7XFxuICB3aWR0aDogMTFlbTtcXG59XFxuXFxuLnVpLXRpbWVwaWNrZXItbGlzdCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnVpLXRpbWVwaWNrZXItZHVyYXRpb24ge1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIGNvbG9yOiAjODg4O1xcbn1cXG5cXG4udWktdGltZXBpY2tlci1saXN0OmhvdmVyIC51aS10aW1lcGlja2VyLWR1cmF0aW9uIHtcXG4gIGNvbG9yOiAjODg4O1xcbn1cXG5cXG4udWktdGltZXBpY2tlci1saXN0IGxpIHtcXG4gIHBhZGRpbmc6IDNweCAwIDNweCA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgY29sb3I6ICMwMDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4udWktdGltZXBpY2tlci1saXN0OmhvdmVyIC51aS10aW1lcGlja2VyLXNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxubGkudWktdGltZXBpY2tlci1zZWxlY3RlZCxcXG4udWktdGltZXBpY2tlci1saXN0IGxpOmhvdmVyLFxcbi51aS10aW1lcGlja2VyLWxpc3QgLnVpLXRpbWVwaWNrZXItc2VsZWN0ZWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzE5ODBFQztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG5saS51aS10aW1lcGlja2VyLXNlbGVjdGVkIC51aS10aW1lcGlja2VyLWR1cmF0aW9uLFxcbi51aS10aW1lcGlja2VyLWxpc3QgbGk6aG92ZXIgLnVpLXRpbWVwaWNrZXItZHVyYXRpb24ge1xcbiAgY29sb3I6ICNjY2M7XFxufVxcblxcbi51aS10aW1lcGlja2VyLWxpc3QgbGkudWktdGltZXBpY2tlci1kaXNhYmxlZCxcXG4udWktdGltZXBpY2tlci1saXN0IGxpLnVpLXRpbWVwaWNrZXItZGlzYWJsZWQ6aG92ZXIsXFxuLnVpLXRpbWVwaWNrZXItbGlzdCBsaS51aS10aW1lcGlja2VyLXNlbGVjdGVkLnVpLXRpbWVwaWNrZXItZGlzYWJsZWQge1xcbiAgY29sb3I6ICM4ODg7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi51aS10aW1lcGlja2VyLWxpc3QgbGkudWktdGltZXBpY2tlci1kaXNhYmxlZDpob3ZlcixcXG4udWktdGltZXBpY2tlci1saXN0IGxpLnVpLXRpbWVwaWNrZXItc2VsZWN0ZWQudWktdGltZXBpY2tlci1kaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xcbn1cXG5cXG4udWktZGF0ZXBpY2tlci51aS13aWRnZXQudWktd2lkZ2V0LWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLnVpLXRpbWVwaWNrZXItd3JhcHBlciB7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgbWF4LWhlaWdodDogMTUwcHg7XFxuICB3aWR0aDogNi41ZW07XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAtbW96LWJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgei1pbmRleDogMTAwNTI7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi51aS10aW1lcGlja2VyLXdyYXBwZXIudWktdGltZXBpY2tlci13aXRoLWR1cmF0aW9uIHtcXG4gIHdpZHRoOiAxM2VtO1xcbn1cXG5cXG4udWktdGltZXBpY2tlci13cmFwcGVyLnVpLXRpbWVwaWNrZXItd2l0aC1kdXJhdGlvbi51aS10aW1lcGlja2VyLXN0ZXAtMzAsXFxuLnVpLXRpbWVwaWNrZXItd3JhcHBlci51aS10aW1lcGlja2VyLXdpdGgtZHVyYXRpb24udWktdGltZXBpY2tlci1zdGVwLTYwIHtcXG4gIHdpZHRoOiAxMWVtO1xcbn1cXG5cXG4udWktdGltZXBpY2tlci1saXN0IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4udWktdGltZXBpY2tlci1kdXJhdGlvbiB7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgY29sb3I6ICM4ODg7XFxufVxcblxcbi51aS10aW1lcGlja2VyLWxpc3Q6aG92ZXIgLnVpLXRpbWVwaWNrZXItZHVyYXRpb24ge1xcbiAgY29sb3I6ICM4ODg7XFxufVxcblxcbi51aS10aW1lcGlja2VyLWxpc3QgbGkge1xcbiAgcGFkZGluZzogM3B4IDAgM3B4IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBjb2xvcjogIzAwMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi51aS10aW1lcGlja2VyLWxpc3Q6aG92ZXIgLnVpLXRpbWVwaWNrZXItc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG5saS51aS10aW1lcGlja2VyLXNlbGVjdGVkLFxcbi51aS10aW1lcGlja2VyLWxpc3QgbGk6aG92ZXIsXFxuLnVpLXRpbWVwaWNrZXItbGlzdCAudWktdGltZXBpY2tlci1zZWxlY3RlZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjMTk4MEVDO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbmxpLnVpLXRpbWVwaWNrZXItc2VsZWN0ZWQgLnVpLXRpbWVwaWNrZXItZHVyYXRpb24sXFxuLnVpLXRpbWVwaWNrZXItbGlzdCBsaTpob3ZlciAudWktdGltZXBpY2tlci1kdXJhdGlvbiB7XFxuICBjb2xvcjogI2NjYztcXG59XFxuXFxuLnVpLXRpbWVwaWNrZXItbGlzdCBsaS51aS10aW1lcGlja2VyLWRpc2FibGVkLFxcbi51aS10aW1lcGlja2VyLWxpc3QgbGkudWktdGltZXBpY2tlci1kaXNhYmxlZDpob3ZlcixcXG4udWktdGltZXBpY2tlci1saXN0IGxpLnVpLXRpbWVwaWNrZXItc2VsZWN0ZWQudWktdGltZXBpY2tlci1kaXNhYmxlZCB7XFxuICBjb2xvcjogIzg4ODtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLnVpLXRpbWVwaWNrZXItbGlzdCBsaS51aS10aW1lcGlja2VyLWRpc2FibGVkOmhvdmVyLFxcbi51aS10aW1lcGlja2VyLWxpc3QgbGkudWktdGltZXBpY2tlci1zZWxlY3RlZC51aS10aW1lcGlja2VyLWRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XFxufVxcblxcbi8qISBqUXVlcnkgVUkgLSB2MS4xMi4xIC0gMjAxNi0wOS0xNFxcbiogaHR0cDovL2pxdWVyeXVpLmNvbVxcbiogSW5jbHVkZXM6IGNvcmUuY3NzLCBhY2NvcmRpb24uY3NzLCBhdXRvY29tcGxldGUuY3NzLCBtZW51LmNzcywgYnV0dG9uLmNzcywgY29udHJvbGdyb3VwLmNzcywgY2hlY2tib3hyYWRpby5jc3MsIGRhdGVwaWNrZXIuY3NzLCBkaWFsb2cuY3NzLCBkcmFnZ2FibGUuY3NzLCByZXNpemFibGUuY3NzLCBwcm9ncmVzc2Jhci5jc3MsIHNlbGVjdGFibGUuY3NzLCBzZWxlY3RtZW51LmNzcywgc2xpZGVyLmNzcywgc29ydGFibGUuY3NzLCBzcGlubmVyLmNzcywgdGFicy5jc3MsIHRvb2x0aXAuY3NzLCB0aGVtZS5jc3NcXG4qIFRvIHZpZXcgYW5kIG1vZGlmeSB0aGlzIHRoZW1lLCB2aXNpdCBodHRwOi8vanF1ZXJ5dWkuY29tL3RoZW1lcm9sbGVyLz9mZkRlZmF1bHQ9QXJpYWwlMkNIZWx2ZXRpY2ElMkNzYW5zLXNlcmlmJmZzRGVmYXVsdD0xZW0mZndEZWZhdWx0PW5vcm1hbCZjb3JuZXJSYWRpdXM9M3B4JmJnQ29sb3JIZWFkZXI9ZTllOWU5JmJnVGV4dHVyZUhlYWRlcj1mbGF0JmJvcmRlckNvbG9ySGVhZGVyPWRkZGRkZCZmY0hlYWRlcj0zMzMzMzMmaWNvbkNvbG9ySGVhZGVyPTQ0NDQ0NCZiZ0NvbG9yQ29udGVudD1mZmZmZmYmYmdUZXh0dXJlQ29udGVudD1mbGF0JmJvcmRlckNvbG9yQ29udGVudD1kZGRkZGQmZmNDb250ZW50PTMzMzMzMyZpY29uQ29sb3JDb250ZW50PTQ0NDQ0NCZiZ0NvbG9yRGVmYXVsdD1mNmY2ZjYmYmdUZXh0dXJlRGVmYXVsdD1mbGF0JmJvcmRlckNvbG9yRGVmYXVsdD1jNWM1YzUmZmNEZWZhdWx0PTQ1NDU0NSZpY29uQ29sb3JEZWZhdWx0PTc3Nzc3NyZiZ0NvbG9ySG92ZXI9ZWRlZGVkJmJnVGV4dHVyZUhvdmVyPWZsYXQmYm9yZGVyQ29sb3JIb3Zlcj1jY2NjY2MmZmNIb3Zlcj0yYjJiMmImaWNvbkNvbG9ySG92ZXI9NTU1NTU1JmJnQ29sb3JBY3RpdmU9MDA3ZmZmJmJnVGV4dHVyZUFjdGl2ZT1mbGF0JmJvcmRlckNvbG9yQWN0aXZlPTAwM2VmZiZmY0FjdGl2ZT1mZmZmZmYmaWNvbkNvbG9yQWN0aXZlPWZmZmZmZiZiZ0NvbG9ySGlnaGxpZ2h0PWZmZmE5MCZiZ1RleHR1cmVIaWdobGlnaHQ9ZmxhdCZib3JkZXJDb2xvckhpZ2hsaWdodD1kYWQ1NWUmZmNIaWdobGlnaHQ9Nzc3NjIwJmljb25Db2xvckhpZ2hsaWdodD03Nzc2MjAmYmdDb2xvckVycm9yPWZkZGZkZiZiZ1RleHR1cmVFcnJvcj1mbGF0JmJvcmRlckNvbG9yRXJyb3I9ZjFhODk5JmZjRXJyb3I9NWYzZjNmJmljb25Db2xvckVycm9yPWNjMDAwMCZiZ0NvbG9yT3ZlcmxheT1hYWFhYWEmYmdUZXh0dXJlT3ZlcmxheT1mbGF0JmJnSW1nT3BhY2l0eU92ZXJsYXk9MCZvcGFjaXR5T3ZlcmxheT0zMCZiZ0NvbG9yU2hhZG93PTY2NjY2NiZiZ1RleHR1cmVTaGFkb3c9ZmxhdCZiZ0ltZ09wYWNpdHlTaGFkb3c9MCZvcGFjaXR5U2hhZG93PTMwJnRoaWNrbmVzc1NoYWRvdz01cHgmb2Zmc2V0VG9wU2hhZG93PTBweCZvZmZzZXRMZWZ0U2hhZG93PTBweCZjb3JuZXJSYWRpdXNTaGFkb3c9OHB4XFxuKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yczsgTGljZW5zZWQgTUlUICovXFxuLyogTGF5b3V0IGhlbHBlcnNcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4udWktaGVscGVyLWhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udWktaGVscGVyLWhpZGRlbi1hY2Nlc3NpYmxlIHtcXG4gIGJvcmRlcjogMDtcXG4gIGNsaXA6IHJlY3QoMCAwIDAgMCk7XFxuICBoZWlnaHQ6IDFweDtcXG4gIG1hcmdpbjogLTFweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDFweDtcXG59XFxuXFxuLnVpLWhlbHBlci1yZXNldCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgb3V0bGluZTogMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4udWktaGVscGVyLWNsZWFyZml4OmJlZm9yZSxcXG4udWktaGVscGVyLWNsZWFyZml4OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogdGFibGU7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG4udWktaGVscGVyLWNsZWFyZml4OmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbn1cXG5cXG4udWktaGVscGVyLXpmaXgge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgb3BhY2l0eTogMDtcXG4gIGZpbHRlcjogQWxwaGEoT3BhY2l0eT0wKTtcXG4gIC8qIHN1cHBvcnQ6IElFOCAqL1xcbn1cXG5cXG4udWktZnJvbnQge1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4vKiBJbnRlcmFjdGlvbiBDdWVzXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLnVpLXN0YXRlLWRpc2FibGVkIHtcXG4gIGN1cnNvcjogZGVmYXVsdCAhaW1wb3J0YW50O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi8qIEljb25zXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLnVpLWljb24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIG1hcmdpbi10b3A6IC0wLjI1ZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWluZGVudDogLTk5OTk5cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLnVpLXdpZGdldC1pY29uLWJsb2NrIHtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtOHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIE1pc2MgdmlzdWFsc1xcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbi8qIE92ZXJsYXlzICovXFxuLnVpLXdpZGdldC1vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnVpLWFjY29yZGlvbiAudWktYWNjb3JkaW9uLWhlYWRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMnB4IDAgMCAwO1xcbiAgcGFkZGluZzogMC41ZW0gMC41ZW0gMC41ZW0gMC43ZW07XFxuICBmb250LXNpemU6IDEwMCU7XFxufVxcblxcbi51aS1hY2NvcmRpb24gLnVpLWFjY29yZGlvbi1jb250ZW50IHtcXG4gIHBhZGRpbmc6IDFlbSAyLjJlbTtcXG4gIGJvcmRlci10b3A6IDA7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLnVpLWF1dG9jb21wbGV0ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4udWktbWVudSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3V0bGluZTogMDtcXG59XFxuXFxuLnVpLW1lbnUgLnVpLW1lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4udWktbWVudSAudWktbWVudS1pdGVtIHtcXG4gIG1hcmdpbjogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC8qIHN1cHBvcnQ6IElFMTAsIHNlZSAjODg0NCAqL1xcbiAgbGlzdC1zdHlsZS1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTdcXFwiKTtcXG59XFxuXFxuLnVpLW1lbnUgLnVpLW1lbnUtaXRlbS13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDNweCAxZW0gM3B4IDAuNGVtO1xcbn1cXG5cXG4udWktbWVudSAudWktbWVudS1kaXZpZGVyIHtcXG4gIG1hcmdpbjogNXB4IDA7XFxuICBoZWlnaHQ6IDA7XFxuICBmb250LXNpemU6IDA7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIGJvcmRlci13aWR0aDogMXB4IDAgMCAwO1xcbn1cXG5cXG4udWktbWVudSAudWktc3RhdGUtZm9jdXMsXFxuLnVpLW1lbnUgLnVpLXN0YXRlLWFjdGl2ZSB7XFxuICBtYXJnaW46IC0xcHg7XFxufVxcblxcbi8qIGljb24gc3VwcG9ydCAqL1xcbi51aS1tZW51LWljb25zIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnVpLW1lbnUtaWNvbnMgLnVpLW1lbnUtaXRlbS13cmFwcGVyIHtcXG4gIHBhZGRpbmctbGVmdDogMmVtO1xcbn1cXG5cXG4vKiBsZWZ0LWFsaWduZWQgKi9cXG4udWktbWVudSAudWktaWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwLjJlbTtcXG4gIG1hcmdpbjogYXV0byAwO1xcbn1cXG5cXG4vKiByaWdodC1hbGlnbmVkICovXFxuLnVpLW1lbnUgLnVpLW1lbnUtaWNvbiB7XFxuICBsZWZ0OiBhdXRvO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi51aS1idXR0b24ge1xcbiAgcGFkZGluZzogMC40ZW0gMWVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIG1hcmdpbi1yaWdodDogMC4xZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC8qIFN1cHBvcnQ6IElFIDw9IDExICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLnVpLWJ1dHRvbixcXG4udWktYnV0dG9uOmxpbmssXFxuLnVpLWJ1dHRvbjp2aXNpdGVkLFxcbi51aS1idXR0b246aG92ZXIsXFxuLnVpLWJ1dHRvbjphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4vKiB0byBtYWtlIHJvb20gZm9yIHRoZSBpY29uLCBhIHdpZHRoIG5lZWRzIHRvIGJlIHNldCBoZXJlICovXFxuLnVpLWJ1dHRvbi1pY29uLW9ubHkge1xcbiAgd2lkdGg6IDJlbTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB0ZXh0LWluZGVudDogLTk5OTlweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi8qIG5vIGljb24gc3VwcG9ydCBmb3IgaW5wdXQgZWxlbWVudHMgKi9cXG5pbnB1dC51aS1idXR0b24udWktYnV0dG9uLWljb24tb25seSB7XFxuICB0ZXh0LWluZGVudDogMDtcXG59XFxuXFxuLyogYnV0dG9uIGljb24gZWxlbWVudChzKSAqL1xcbi51aS1idXR0b24taWNvbi1vbmx5IC51aS1pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luLXRvcDogLThweDtcXG4gIG1hcmdpbi1sZWZ0OiAtOHB4O1xcbn1cXG5cXG4udWktYnV0dG9uLnVpLWljb24tbm90ZXh0IC51aS1pY29uIHtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMi4xZW07XFxuICBoZWlnaHQ6IDIuMWVtO1xcbiAgdGV4dC1pbmRlbnQ6IC05OTk5cHg7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG5pbnB1dC51aS1idXR0b24udWktaWNvbi1ub3RleHQgLnVpLWljb24ge1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IGF1dG87XFxuICB0ZXh0LWluZGVudDogMDtcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICBwYWRkaW5nOiAwLjRlbSAxZW07XFxufVxcblxcbi8qIHdvcmthcm91bmRzICovXFxuLyogU3VwcG9ydDogRmlyZWZveCA1IC0gNDAgKi9cXG5pbnB1dC51aS1idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuYnV0dG9uLnVpLWJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4udWktY29udHJvbGdyb3VwIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi51aS1jb250cm9sZ3JvdXAgPiAudWktY29udHJvbGdyb3VwLWl0ZW0ge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuXFxuLnVpLWNvbnRyb2xncm91cCA+IC51aS1jb250cm9sZ3JvdXAtaXRlbTpmb2N1cyxcXG4udWktY29udHJvbGdyb3VwID4gLnVpLWNvbnRyb2xncm91cC1pdGVtLnVpLXZpc3VhbC1mb2N1cyB7XFxuICB6LWluZGV4OiA5OTk5O1xcbn1cXG5cXG4udWktY29udHJvbGdyb3VwLXZlcnRpY2FsID4gLnVpLWNvbnRyb2xncm91cC1pdGVtIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxvYXQ6IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLnVpLWNvbnRyb2xncm91cC12ZXJ0aWNhbCAudWktY29udHJvbGdyb3VwLWl0ZW0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnVpLWNvbnRyb2xncm91cCAudWktY29udHJvbGdyb3VwLWxhYmVsIHtcXG4gIHBhZGRpbmc6IDAuNGVtIDFlbTtcXG59XFxuXFxuLnVpLWNvbnRyb2xncm91cCAudWktY29udHJvbGdyb3VwLWxhYmVsIHNwYW4ge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi51aS1jb250cm9sZ3JvdXAtaG9yaXpvbnRhbCAudWktY29udHJvbGdyb3VwLWxhYmVsICsgLnVpLWNvbnRyb2xncm91cC1pdGVtIHtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbn1cXG5cXG4udWktY29udHJvbGdyb3VwLXZlcnRpY2FsIC51aS1jb250cm9sZ3JvdXAtbGFiZWwgKyAudWktY29udHJvbGdyb3VwLWl0ZW0ge1xcbiAgYm9yZGVyLXRvcDogbm9uZTtcXG59XFxuXFxuLnVpLWNvbnRyb2xncm91cC1ob3Jpem9udGFsIC51aS1jb250cm9sZ3JvdXAtbGFiZWwudWktd2lkZ2V0LWNvbnRlbnQge1xcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbn1cXG5cXG4udWktY29udHJvbGdyb3VwLXZlcnRpY2FsIC51aS1jb250cm9sZ3JvdXAtbGFiZWwudWktd2lkZ2V0LWNvbnRlbnQge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuXFxuLyogU3Bpbm5lciBzcGVjaWZpYyBzdHlsZSBmaXhlcyAqL1xcbi51aS1jb250cm9sZ3JvdXAtdmVydGljYWwgLnVpLXNwaW5uZXItaW5wdXQge1xcbiAgLyogU3VwcG9ydDogSUU4IG9ubHksIEFuZHJvaWQgPCA0LjQgb25seSAqL1xcbiAgd2lkdGg6IDc1JTtcXG4gIHdpZHRoOiBjYWxjKCAxMDAlIC0gMi40ZW0gKTtcXG59XFxuXFxuLnVpLWNvbnRyb2xncm91cC12ZXJ0aWNhbCAudWktc3Bpbm5lciAudWktc3Bpbm5lci11cCB7XFxuICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcXG59XFxuXFxuLnVpLWNoZWNrYm94cmFkaW8tbGFiZWwgLnVpLWljb24tYmFja2dyb3VuZCB7XFxuICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDFweCAjY2NjO1xcbiAgYm9yZGVyLXJhZGl1czogMC4xMmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4udWktY2hlY2tib3hyYWRpby1yYWRpby1sYWJlbCAudWktaWNvbi1iYWNrZ3JvdW5kIHtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi51aS1jaGVja2JveHJhZGlvLXJhZGlvLWxhYmVsLnVpLWNoZWNrYm94cmFkaW8tY2hlY2tlZCAudWktaWNvbixcXG4udWktY2hlY2tib3hyYWRpby1yYWRpby1sYWJlbC51aS1jaGVja2JveHJhZGlvLWNoZWNrZWQ6aG92ZXIgLnVpLWljb24ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG4gIHdpZHRoOiA4cHg7XFxuICBoZWlnaHQ6IDhweDtcXG4gIGJvcmRlci13aWR0aDogNHB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG59XFxuXFxuLnVpLWNoZWNrYm94cmFkaW8tZGlzYWJsZWQge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi51aS1kYXRlcGlja2VyIHtcXG4gIHdpZHRoOiAxN2VtO1xcbiAgcGFkZGluZzogMC4yZW0gMC4yZW0gMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi51aS1kYXRlcGlja2VyIC51aS1kYXRlcGlja2VyLWhlYWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAwLjJlbSAwO1xcbn1cXG5cXG4udWktZGF0ZXBpY2tlciAudWktZGF0ZXBpY2tlci1wcmV2LFxcbi51aS1kYXRlcGlja2VyIC51aS1kYXRlcGlja2VyLW5leHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAycHg7XFxuICB3aWR0aDogMS44ZW07XFxuICBoZWlnaHQ6IDEuOGVtO1xcbn1cXG5cXG4udWktZGF0ZXBpY2tlciAudWktZGF0ZXBpY2tlci1wcmV2LWhvdmVyLFxcbi51aS1kYXRlcGlja2VyIC51aS1kYXRlcGlja2VyLW5leHQtaG92ZXIge1xcbiAgdG9wOiAxcHg7XFxufVxcblxcbi51aS1kYXRlcGlja2VyIC51aS1kYXRlcGlja2VyLXByZXYge1xcbiAgbGVmdDogMnB4O1xcbn1cXG5cXG4udWktZGF0ZXBpY2tlciAudWktZGF0ZXBpY2tlci1uZXh0IHtcXG4gIHJpZ2h0OiAycHg7XFxufVxcblxcbi51aS1kYXRlcGlja2VyIC51aS1kYXRlcGlja2VyLXByZXYtaG92ZXIge1xcbiAgbGVmdDogMXB4O1xcbn1cXG5cXG4udWktZGF0ZXBpY2tlciAudWktZGF0ZXBpY2tlci1uZXh0LWhvdmVyIHtcXG4gIHJpZ2h0OiAxcHg7XFxufVxcblxcbi51aS1kYXRlcGlja2VyIC51aS1kYXRlcGlja2VyLXByZXYgc3BhbixcXG4udWktZGF0ZXBpY2tlciAudWktZGF0ZXBpY2tlci1uZXh0IHNwYW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tbGVmdDogLThweDtcXG4gIHRvcDogNTAlO1xcbiAgbWFyZ2luLXRvcDogLThweDtcXG59XFxuXFxuLnVpLWRhdGVwaWNrZXIgLnVpLWRhdGVwaWNrZXItdGl0bGUge1xcbiAgbWFyZ2luOiAwIDIuM2VtO1xcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udWktZGF0ZXBpY2tlciAudWktZGF0ZXBpY2tlci10aXRsZSBzZWxlY3Qge1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBtYXJnaW46IDFweCAwO1xcbn1cXG5cXG4udWktZGF0ZXBpY2tlciBzZWxlY3QudWktZGF0ZXBpY2tlci1tb250aCxcXG4udWktZGF0ZXBpY2tlciBzZWxlY3QudWktZGF0ZXBpY2tlci15ZWFyIHtcXG4gIHdpZHRoOiA0NSU7XFxufVxcblxcbi51aS1kYXRlcGlja2VyIHRhYmxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBtYXJnaW46IDAgMCAwLjRlbTtcXG59XFxuXFxuLnVpLWRhdGVwaWNrZXIgdGgge1xcbiAgcGFkZGluZzogMC43ZW0gMC4zZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlcjogMDtcXG59XFxuXFxuLnVpLWRhdGVwaWNrZXIgdGQge1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMXB4O1xcbn1cXG5cXG4udWktZGF0ZXBpY2tlciB0ZCBzcGFuLFxcbi51aS1kYXRlcGlja2VyIHRkIGEge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4udWktZGF0ZXBpY2tlciAudWktZGF0ZXBpY2tlci1idXR0b25wYW5lIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxuICBtYXJnaW46IDAuN2VtIDAgMCAwO1xcbiAgcGFkZGluZzogMCAwLjJlbTtcXG4gIGJvcmRlci1sZWZ0OiAwO1xcbiAgYm9yZGVyLXJpZ2h0OiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG59XFxuXFxuLnVpLWRhdGVwaWNrZXIgLnVpLWRhdGVwaWNrZXItYnV0dG9ucGFuZSBidXR0b24ge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgbWFyZ2luOiAwLjVlbSAwLjJlbSAwLjRlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDAuMmVtIDAuNmVtIDAuM2VtIDAuNmVtO1xcbiAgd2lkdGg6IGF1dG87XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLnVpLWRhdGVwaWNrZXIgLnVpLWRhdGVwaWNrZXItYnV0dG9ucGFuZSBidXR0b24udWktZGF0ZXBpY2tlci1jdXJyZW50IHtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG5cXG4vKiB3aXRoIG11bHRpcGxlIGNhbGVuZGFycyAqL1xcbi51aS1kYXRlcGlja2VyLnVpLWRhdGVwaWNrZXItbXVsdGkge1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbi51aS1kYXRlcGlja2VyLW11bHRpIC51aS1kYXRlcGlja2VyLWdyb3VwIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG5cXG4udWktZGF0ZXBpY2tlci1tdWx0aSAudWktZGF0ZXBpY2tlci1ncm91cCB0YWJsZSB7XFxuICB3aWR0aDogOTUlO1xcbiAgbWFyZ2luOiAwIGF1dG8gMC40ZW07XFxufVxcblxcbi51aS1kYXRlcGlja2VyLW11bHRpLTIgLnVpLWRhdGVwaWNrZXItZ3JvdXAge1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLnVpLWRhdGVwaWNrZXItbXVsdGktMyAudWktZGF0ZXBpY2tlci1ncm91cCB7XFxuICB3aWR0aDogMzMuMyU7XFxufVxcblxcbi51aS1kYXRlcGlja2VyLW11bHRpLTQgLnVpLWRhdGVwaWNrZXItZ3JvdXAge1xcbiAgd2lkdGg6IDI1JTtcXG59XFxuXFxuLnVpLWRhdGVwaWNrZXItbXVsdGkgLnVpLWRhdGVwaWNrZXItZ3JvdXAtbGFzdCAudWktZGF0ZXBpY2tlci1oZWFkZXIsXFxuLnVpLWRhdGVwaWNrZXItbXVsdGkgLnVpLWRhdGVwaWNrZXItZ3JvdXAtbWlkZGxlIC51aS1kYXRlcGlja2VyLWhlYWRlciB7XFxuICBib3JkZXItbGVmdC13aWR0aDogMDtcXG59XFxuXFxuLnVpLWRhdGVwaWNrZXItbXVsdGkgLnVpLWRhdGVwaWNrZXItYnV0dG9ucGFuZSB7XFxuICBjbGVhcjogbGVmdDtcXG59XFxuXFxuLnVpLWRhdGVwaWNrZXItcm93LWJyZWFrIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDA7XFxufVxcblxcbi8qIFJUTCBzdXBwb3J0ICovXFxuLnVpLWRhdGVwaWNrZXItcnRsIHtcXG4gIGRpcmVjdGlvbjogcnRsO1xcbn1cXG5cXG4udWktZGF0ZXBpY2tlci1ydGwgLnVpLWRhdGVwaWNrZXItcHJldiB7XFxuICByaWdodDogMnB4O1xcbiAgbGVmdDogYXV0bztcXG59XFxuXFxuLnVpLWRhdGVwaWNrZXItcnRsIC51aS1kYXRlcGlja2VyLW5leHQge1xcbiAgbGVmdDogMnB4O1xcbiAgcmlnaHQ6IGF1dG87XFxufVxcblxcbi51aS1kYXRlcGlja2VyLXJ0bCAudWktZGF0ZXBpY2tlci1wcmV2OmhvdmVyIHtcXG4gIHJpZ2h0OiAxcHg7XFxuICBsZWZ0OiBhdXRvO1xcbn1cXG5cXG4udWktZGF0ZXBpY2tlci1ydGwgLnVpLWRhdGVwaWNrZXItbmV4dDpob3ZlciB7XFxuICBsZWZ0OiAxcHg7XFxuICByaWdodDogYXV0bztcXG59XFxuXFxuLnVpLWRhdGVwaWNrZXItcnRsIC51aS1kYXRlcGlja2VyLWJ1dHRvbnBhbmUge1xcbiAgY2xlYXI6IHJpZ2h0O1xcbn1cXG5cXG4udWktZGF0ZXBpY2tlci1ydGwgLnVpLWRhdGVwaWNrZXItYnV0dG9ucGFuZSBidXR0b24ge1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbi51aS1kYXRlcGlja2VyLXJ0bCAudWktZGF0ZXBpY2tlci1idXR0b25wYW5lIGJ1dHRvbi51aS1kYXRlcGlja2VyLWN1cnJlbnQsXFxuLnVpLWRhdGVwaWNrZXItcnRsIC51aS1kYXRlcGlja2VyLWdyb3VwIHtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuXFxuLnVpLWRhdGVwaWNrZXItcnRsIC51aS1kYXRlcGlja2VyLWdyb3VwLWxhc3QgLnVpLWRhdGVwaWNrZXItaGVhZGVyLFxcbi51aS1kYXRlcGlja2VyLXJ0bCAudWktZGF0ZXBpY2tlci1ncm91cC1taWRkbGUgLnVpLWRhdGVwaWNrZXItaGVhZGVyIHtcXG4gIGJvcmRlci1yaWdodC13aWR0aDogMDtcXG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAxcHg7XFxufVxcblxcbi8qIEljb25zICovXFxuLnVpLWRhdGVwaWNrZXIgLnVpLWljb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0ZXh0LWluZGVudDogLTk5OTk5cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGxlZnQ6IDAuNWVtO1xcbiAgdG9wOiAwLjNlbTtcXG59XFxuXFxuLnVpLWRpYWxvZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcGFkZGluZzogMC4yZW07XFxuICBvdXRsaW5lOiAwO1xcbn1cXG5cXG4udWktZGlhbG9nIC51aS1kaWFsb2ctdGl0bGViYXIge1xcbiAgcGFkZGluZzogMC40ZW0gMWVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udWktZGlhbG9nIC51aS1kaWFsb2ctdGl0bGUge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBtYXJnaW46IDAuMWVtIDA7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuLnVpLWRpYWxvZyAudWktZGlhbG9nLXRpdGxlYmFyLWNsb3NlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwLjNlbTtcXG4gIHRvcDogNTAlO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBtYXJnaW46IC0xMHB4IDAgMCAwO1xcbiAgcGFkZGluZzogMXB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4udWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwLjVlbSAxZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi51aS1kaWFsb2cgLnVpLWRpYWxvZy1idXR0b25wYW5lIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBib3JkZXItd2lkdGg6IDFweCAwIDAgMDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIHBhZGRpbmc6IDAuM2VtIDFlbSAwLjVlbSAwLjRlbTtcXG59XFxuXFxuLnVpLWRpYWxvZyAudWktZGlhbG9nLWJ1dHRvbnBhbmUgLnVpLWRpYWxvZy1idXR0b25zZXQge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cXG4udWktZGlhbG9nIC51aS1kaWFsb2ctYnV0dG9ucGFuZSBidXR0b24ge1xcbiAgbWFyZ2luOiAwLjVlbSAwLjRlbSAwLjVlbSAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udWktZGlhbG9nIC51aS1yZXNpemFibGUtbiB7XFxuICBoZWlnaHQ6IDJweDtcXG4gIHRvcDogMDtcXG59XFxuXFxuLnVpLWRpYWxvZyAudWktcmVzaXphYmxlLWUge1xcbiAgd2lkdGg6IDJweDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4udWktZGlhbG9nIC51aS1yZXNpemFibGUtcyB7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuLnVpLWRpYWxvZyAudWktcmVzaXphYmxlLXcge1xcbiAgd2lkdGg6IDJweDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi51aS1kaWFsb2cgLnVpLXJlc2l6YWJsZS1zZSxcXG4udWktZGlhbG9nIC51aS1yZXNpemFibGUtc3csXFxuLnVpLWRpYWxvZyAudWktcmVzaXphYmxlLW5lLFxcbi51aS1kaWFsb2cgLnVpLXJlc2l6YWJsZS1udyB7XFxuICB3aWR0aDogN3B4O1xcbiAgaGVpZ2h0OiA3cHg7XFxufVxcblxcbi51aS1kaWFsb2cgLnVpLXJlc2l6YWJsZS1zZSB7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuLnVpLWRpYWxvZyAudWktcmVzaXphYmxlLXN3IHtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxufVxcblxcbi51aS1kaWFsb2cgLnVpLXJlc2l6YWJsZS1uZSB7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG59XFxuXFxuLnVpLWRpYWxvZyAudWktcmVzaXphYmxlLW53IHtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxufVxcblxcbi51aS1kcmFnZ2FibGUgLnVpLWRpYWxvZy10aXRsZWJhciB7XFxuICBjdXJzb3I6IG1vdmU7XFxufVxcblxcbi51aS1kcmFnZ2FibGUtaGFuZGxlIHtcXG4gIC1tcy10b3VjaC1hY3Rpb246IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG5vbmU7XFxufVxcblxcbi51aS1yZXNpemFibGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udWktcmVzaXphYmxlLWhhbmRsZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXNpemU6IDAuMXB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICAtbXMtdG91Y2gtYWN0aW9uOiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xcbn1cXG5cXG4udWktcmVzaXphYmxlLWRpc2FibGVkIC51aS1yZXNpemFibGUtaGFuZGxlLFxcbi51aS1yZXNpemFibGUtYXV0b2hpZGUgLnVpLXJlc2l6YWJsZS1oYW5kbGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnVpLXJlc2l6YWJsZS1uIHtcXG4gIGN1cnNvcjogbi1yZXNpemU7XFxuICBoZWlnaHQ6IDdweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdG9wOiAtNXB4O1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLnVpLXJlc2l6YWJsZS1zIHtcXG4gIGN1cnNvcjogcy1yZXNpemU7XFxuICBoZWlnaHQ6IDdweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm90dG9tOiAtNXB4O1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLnVpLXJlc2l6YWJsZS1lIHtcXG4gIGN1cnNvcjogZS1yZXNpemU7XFxuICB3aWR0aDogN3B4O1xcbiAgcmlnaHQ6IC01cHg7XFxuICB0b3A6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi51aS1yZXNpemFibGUtdyB7XFxuICBjdXJzb3I6IHctcmVzaXplO1xcbiAgd2lkdGg6IDdweDtcXG4gIGxlZnQ6IC01cHg7XFxuICB0b3A6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi51aS1yZXNpemFibGUtc2Uge1xcbiAgY3Vyc29yOiBzZS1yZXNpemU7XFxuICB3aWR0aDogMTJweDtcXG4gIGhlaWdodDogMTJweDtcXG4gIHJpZ2h0OiAxcHg7XFxuICBib3R0b206IDFweDtcXG59XFxuXFxuLnVpLXJlc2l6YWJsZS1zdyB7XFxuICBjdXJzb3I6IHN3LXJlc2l6ZTtcXG4gIHdpZHRoOiA5cHg7XFxuICBoZWlnaHQ6IDlweDtcXG4gIGxlZnQ6IC01cHg7XFxuICBib3R0b206IC01cHg7XFxufVxcblxcbi51aS1yZXNpemFibGUtbncge1xcbiAgY3Vyc29yOiBudy1yZXNpemU7XFxuICB3aWR0aDogOXB4O1xcbiAgaGVpZ2h0OiA5cHg7XFxuICBsZWZ0OiAtNXB4O1xcbiAgdG9wOiAtNXB4O1xcbn1cXG5cXG4udWktcmVzaXphYmxlLW5lIHtcXG4gIGN1cnNvcjogbmUtcmVzaXplO1xcbiAgd2lkdGg6IDlweDtcXG4gIGhlaWdodDogOXB4O1xcbiAgcmlnaHQ6IC01cHg7XFxuICB0b3A6IC01cHg7XFxufVxcblxcbi51aS1wcm9ncmVzc2JhciB7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4udWktcHJvZ3Jlc3NiYXIgLnVpLXByb2dyZXNzYmFyLXZhbHVlIHtcXG4gIG1hcmdpbjogLTFweDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnVpLXByb2dyZXNzYmFyIC51aS1wcm9ncmVzc2Jhci1vdmVybGF5IHtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoS0FBb0FJQUJBQUFBQVAvLy95SC9DMDVGVkZORFFWQkZNaTR3QXdFQUFBQWgrUVFKQVFBQkFDd0FBQUFBS0FBb0FBQUNrWXdOcVhyZEM1MkRTMDZhN01GWkkrNEZIQkNLb0RlV0tYcXltUHFHcXh2SnJYWmJNeDdUdGMrdzlYZ1UyRkIzbE95UVJXRVQySUZHaVU5bTFmckRWcHhaWmM2YmZId3Y0YzFZWFA2azFWZHkyOTJGYjZVa3V2RnRYcHZXU3pBK0h5Y1hKSFVYaUdZSWlNZzJSNlc0NTlnbldHZkhOZGpJcURXVnFlbUgyZWtwT2JrcE9scHBXVXFaaXFyNmVkcXFXUUFBSWZrRUNRRUFBUUFzQUFBQUFDZ0FLQUFBQXBTTWdabkdmYXFjZzFFMnV1ekRtbUhVQlI4UWlsOTVoaVBLcVduM2FxdExzUzE4eTdHMVN6TmVvd1dCRU50UWQrVDFKa3RQMDVuelBUZEpabFI2dlV4TldXalYrdlVXaFdOa1dGd3hsOVZwWlJlZFljZmxJT0xhZmFhMjhYZHNIL3lubGNjMXVQVkRaeFFJUjBLMjUrY0lDQ21vcUNlNW1HaFpPZmVZU1VoNXlKY0p5cmtaV1dwYVI4ZG9KMm80TllxNjJsQUFBQ0g1QkFrQkFBRUFMQUFBQUFBb0FDZ0FBQUtWREk0WXkyMlpuSU5STnFvc3cwQnY3aTFneUhVa0ZqN29TYVdsdTNvdkM4R3hOc281Zmx1ejNxTFZoQlZlVC9MejdaVEh5eEw1ZERhbFFXUFZPc1FXdFJudXdYYUZUajlqVlZoOHBtYTlKalo0ellTajVaT3ltYTd1dW9sZmZoK0lSNWFXOTdjSHVCVVhLR0tYbEtqbitEaUhXTWNZSmFoNE4wbFlDTWxKT1hpcEdScjVxZGdvU1RycVdTcTZXRmwyeXBvYVVBQUFJZmtFQ1FFQUFRQXNBQUFBQUNnQUtBQUFBcGFFYjZITGdkL2lPN0ZOV3RjRldlK3VmT0RHalJmb2lKMmFrU2hidWViMHd0STUwem0wMnBidndmV0VNV0JRMXpLR2xMSWhza2lFUG05UjZ2Ulh4VjRaeldUMnlIT0dwV015b3JibEtsTnA4SG1IRWIvbENYamNXN2JtdFhQOFh0MjI5T1ZXUjFmb2QyZVdxTmZIdU1qWENQa0lHTmlsZU9pSW1WbUNPRW1vU2ZuM3lYbEpXbW9IR2hxcDZpbFl1V1lwbVRxS1VnQUFJZmtFQ1FFQUFRQXNBQUFBQUNnQUtBQUFBcGlFSDZrYjU4YmlRM0ZOV3RNRldXM2VOVmNvanVGR2ZxblpxU2VidVMwNnc1VjgwL1gwMnBLZTh6RndQNkVGV09UMWxERms4ckdFUmgxVFROT29jUTYxSG00WG0yVmV4VUhwemp5bVZpSHJGYmlFTHNlZlZybjZYS2ZudDJROUcvK1hkaWU0OTlYSGQyZzRoN2lvT0doWEdKYm9HQW5YU0Jub0J3S1l5ZmlvdWJaSjJIbjBSdVJaYWZsWk9pbDU2WnA2aWlvS1NYcFVBQUFoK1FRSkFRQUJBQ3dBQUFBQUtBQW9BQUFDa29RUnFSdm54dUk3a1UxYTFVVTViZDV0blNlT1pYaG1uNWxXSzNxTlRXdlJkUXhQOHF2YUMrL3lhWVF6WE83Qk12YVVFbUpSZDNUc2lNQWdzd21OWXJTZ1pkWXJUWDZ0U0hHWk83M2V6dUF3MnV4dVErQmJlWmZNeHNleFkzNSsvUWU0SjFpblYwZzR4M1dIdU1oSWwyalhPS1QyUStWVTVmZ29TVUk1MlZmWnlma0pHa2hhNmptWSthYVlkaXJxK2xRQUFDSDVCQWtCQUFFQUxBQUFBQUFvQUNnQUFBS1dCSUtwWWUwTDNZTktUb3Fzd1VsdnpuaWdkNHdpUjRLaFpyS3Q5VXBxaXA2MWk5RTN2TXZ4UmRIbGJFRmlFWGZrOVlBUll4T1paRDZWUTJwVXVuQm10UlhvMUxmOGhNVlZjTmw4SmFmVjM4YU0yL0Z1NVYxNkJuNjNyNnh0OTdqMDkrTVhTRmk0Qm5pR0ZhZTNoemJIOStoWUJ6a3B1VWg1YVptSHVhblpPWmdJdXZiR2lOZW9tQ25heHhhcDJ1cGFDWnNxKzFrQUFDSDVCQWtCQUFFQUxBQUFBQUFvQUNnQUFBS1hqSThCeTV6ZjRrT3hUVnJYTlZsdjFYMGQ4SUdaR0tMbk5wWXRtOExyOWNxVmV1T1N2Zk9XNzlEOWFESGl6TmhESmlkRlpoTnlkRWFoT2FESDZub210SmpwMXR1dEtvTldrdkE2SnFmUlZMSFUvUVVmYXU5bDJ4N0c1NGQxZmw5OTV4Y0lHQWRYcU1mQk5hZG9ZcmhIK01nMktCbHBWcGJsdUNpWG1NbloyU2g0R0JxSitja0lPcXFKNkxtS1NsbFptc29xNndwUUFBQWgrUVFKQVFBQkFDd0FBQUFBS0FBb0FBQUNsWXgvb0x2b3h1SkRrVTFhMVlVWmJKNTluU2QyWlhoV3FiUmEyL2dGOEd1MkRZM2lxczd5cnEreEJZRWtZdkZTTThhU1NPYkUrWmdSbDFCSEZaTnI3cFJDYXZaNUJXMjE0MmhZM0FOL3pXdHNtZjEycDlYeHhGbDJscExuMXJzZXp0ZlhaamRJV0lmMnM1ZEl0d2pZS0Jnbzl5ZzVwSGd6SlhURWVHbFp1ZW5weVBtcEdRb0tPV2tZbVNwYVNucUtpbGVJMkZBQUFDSDVCQWtCQUFFQUxBQUFBQUFvQUNnQUFBS1ZqQitndStqRzRrT1JUVnJWaFJsc25uMmRKM1psZUZhcHRGcmIrQ1htTzlPb3plTDVWZlA5OUh2QVdocGlVZGN3a3BCSDM4MjVBd1lkVTh4VHFsTEdodENvc0FyS01wdmZhMW1NUmFlOVZ2V1pmZUIyWGZQa2VMbW0xOGxVY0JqK3A1ZG5OOGpYWjNZSUdFaFl1T1VuNDVhb0NEa3AxNmhsNUlqWUp2aldLY25vR1FwcXlQbHBPaHIzYUVsYXFycTU2QnE3VkFBQU93PT1cXFwiKTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT0yNSk7XFxuICAvKiBzdXBwb3J0OiBJRTggKi9cXG4gIG9wYWNpdHk6IDAuMjU7XFxufVxcblxcbi51aS1wcm9ncmVzc2Jhci1pbmRldGVybWluYXRlIC51aS1wcm9ncmVzc2Jhci12YWx1ZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbn1cXG5cXG4udWktc2VsZWN0YWJsZSB7XFxuICAtbXMtdG91Y2gtYWN0aW9uOiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xcbn1cXG5cXG4udWktc2VsZWN0YWJsZS1oZWxwZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTAwO1xcbiAgYm9yZGVyOiAxcHggZG90dGVkIGJsYWNrO1xcbn1cXG5cXG4udWktc2VsZWN0bWVudS1tZW51IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnVpLXNlbGVjdG1lbnUtbWVudSAudWktbWVudSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XFxufVxcblxcbi51aS1zZWxlY3RtZW51LW1lbnUgLnVpLW1lbnUgLnVpLXNlbGVjdG1lbnUtb3B0Z3JvdXAge1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBwYWRkaW5nOiAycHggMC40ZW07XFxuICBtYXJnaW46IDAuNWVtIDAgMCAwO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG4udWktc2VsZWN0bWVudS1vcGVuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udWktc2VsZWN0bWVudS10ZXh0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4udWktc2VsZWN0bWVudS1idXR0b24udWktYnV0dG9uIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgd2lkdGg6IDE0ZW07XFxufVxcblxcbi51aS1zZWxlY3RtZW51LWljb24udWktaWNvbiB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG4udWktc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi51aS1zbGlkZXIgLnVpLXNsaWRlci1oYW5kbGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMjtcXG4gIHdpZHRoOiAxLjJlbTtcXG4gIGhlaWdodDogMS4yZW07XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAtbXMtdG91Y2gtYWN0aW9uOiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xcbn1cXG5cXG4udWktc2xpZGVyIC51aS1zbGlkZXItcmFuZ2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIGZvbnQtc2l6ZTogMC43ZW07XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlcjogMDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXG59XFxuXFxuLyogc3VwcG9ydDogSUU4IC0gU2VlICM2NzI3ICovXFxuLnVpLXNsaWRlci51aS1zdGF0ZS1kaXNhYmxlZCAudWktc2xpZGVyLWhhbmRsZSxcXG4udWktc2xpZGVyLnVpLXN0YXRlLWRpc2FibGVkIC51aS1zbGlkZXItcmFuZ2Uge1xcbiAgZmlsdGVyOiBpbmhlcml0O1xcbn1cXG5cXG4udWktc2xpZGVyLWhvcml6b250YWwge1xcbiAgaGVpZ2h0OiAwLjhlbTtcXG59XFxuXFxuLnVpLXNsaWRlci1ob3Jpem9udGFsIC51aS1zbGlkZXItaGFuZGxlIHtcXG4gIHRvcDogLTAuM2VtO1xcbiAgbWFyZ2luLWxlZnQ6IC0wLjZlbTtcXG59XFxuXFxuLnVpLXNsaWRlci1ob3Jpem9udGFsIC51aS1zbGlkZXItcmFuZ2Uge1xcbiAgdG9wOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udWktc2xpZGVyLWhvcml6b250YWwgLnVpLXNsaWRlci1yYW5nZS1taW4ge1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLnVpLXNsaWRlci1ob3Jpem9udGFsIC51aS1zbGlkZXItcmFuZ2UtbWF4IHtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4udWktc2xpZGVyLXZlcnRpY2FsIHtcXG4gIHdpZHRoOiAwLjhlbTtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcblxcbi51aS1zbGlkZXItdmVydGljYWwgLnVpLXNsaWRlci1oYW5kbGUge1xcbiAgbGVmdDogLTAuM2VtO1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAtMC42ZW07XFxufVxcblxcbi51aS1zbGlkZXItdmVydGljYWwgLnVpLXNsaWRlci1yYW5nZSB7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi51aS1zbGlkZXItdmVydGljYWwgLnVpLXNsaWRlci1yYW5nZS1taW4ge1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG4udWktc2xpZGVyLXZlcnRpY2FsIC51aS1zbGlkZXItcmFuZ2UtbWF4IHtcXG4gIHRvcDogMDtcXG59XFxuXFxuLnVpLXNvcnRhYmxlLWhhbmRsZSB7XFxuICAtbXMtdG91Y2gtYWN0aW9uOiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xcbn1cXG5cXG4udWktc3Bpbm5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZzogMDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi51aS1zcGlubmVyLWlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHBhZGRpbmc6IDAuMjIyZW0gMDtcXG4gIG1hcmdpbjogMC4yZW0gMDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBtYXJnaW4tbGVmdDogMC40ZW07XFxuICBtYXJnaW4tcmlnaHQ6IDJlbTtcXG59XFxuXFxuLnVpLXNwaW5uZXItYnV0dG9uIHtcXG4gIHdpZHRoOiAxLjZlbTtcXG4gIGhlaWdodDogNTAlO1xcbiAgZm9udC1zaXplOiAwLjVlbTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICByaWdodDogMDtcXG59XFxuXFxuLyogbW9yZSBzcGVjaWZpY2l0eSByZXF1aXJlZCBoZXJlIHRvIG92ZXJyaWRlIGRlZmF1bHQgYm9yZGVycyAqL1xcbi51aS1zcGlubmVyIGEudWktc3Bpbm5lci1idXR0b24ge1xcbiAgYm9yZGVyLXRvcC1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XFxuICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XFxufVxcblxcbi51aS1zcGlubmVyLXVwIHtcXG4gIHRvcDogMDtcXG59XFxuXFxuLnVpLXNwaW5uZXItZG93biB7XFxuICBib3R0b206IDA7XFxufVxcblxcbi51aS10YWJzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC8qIHBvc2l0aW9uOiByZWxhdGl2ZSBwcmV2ZW50cyBJRSBzY3JvbGwgYnVnIChlbGVtZW50IHdpdGggcG9zaXRpb246IHJlbGF0aXZlIGluc2lkZSBjb250YWluZXIgd2l0aCBvdmVyZmxvdzogYXV0byBhcHBlYXIgYXMgXFxcImZpeGVkXFxcIikgKi9cXG4gIHBhZGRpbmc6IDAuMmVtO1xcbn1cXG5cXG4udWktdGFicyAudWktdGFicy1uYXYge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMC4yZW0gMC4yZW0gMDtcXG59XFxuXFxuLnVpLXRhYnMgLnVpLXRhYnMtbmF2IGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBmbG9hdDogbGVmdDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMDtcXG4gIG1hcmdpbjogMXB4IDAuMmVtIDAgMDtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnVpLXRhYnMgLnVpLXRhYnMtbmF2IC51aS10YWJzLWFuY2hvciB7XFxuICBmbG9hdDogbGVmdDtcXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnVpLXRhYnMgLnVpLXRhYnMtbmF2IGxpLnVpLXRhYnMtYWN0aXZlIHtcXG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xcbn1cXG5cXG4udWktdGFicyAudWktdGFicy1uYXYgbGkudWktdGFicy1hY3RpdmUgLnVpLXRhYnMtYW5jaG9yLFxcbi51aS10YWJzIC51aS10YWJzLW5hdiBsaS51aS1zdGF0ZS1kaXNhYmxlZCAudWktdGFicy1hbmNob3IsXFxuLnVpLXRhYnMgLnVpLXRhYnMtbmF2IGxpLnVpLXRhYnMtbG9hZGluZyAudWktdGFicy1hbmNob3Ige1xcbiAgY3Vyc29yOiB0ZXh0O1xcbn1cXG5cXG4udWktdGFicy1jb2xsYXBzaWJsZSAudWktdGFicy1uYXYgbGkudWktdGFicy1hY3RpdmUgLnVpLXRhYnMtYW5jaG9yIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnVpLXRhYnMgLnVpLXRhYnMtcGFuZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXItd2lkdGg6IDA7XFxuICBwYWRkaW5nOiAxZW0gMS40ZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG4udWktdG9vbHRpcCB7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA5OTk5O1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG59XFxuXFxuYm9keSAudWktdG9vbHRpcCB7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG59XFxuXFxuLyogQ29tcG9uZW50IGNvbnRhaW5lcnNcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4udWktd2lkZ2V0IHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi51aS13aWRnZXQgLnVpLXdpZGdldCB7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuLnVpLXdpZGdldCBpbnB1dCxcXG4udWktd2lkZ2V0IHNlbGVjdCxcXG4udWktd2lkZ2V0IHRleHRhcmVhLFxcbi51aS13aWRnZXQgYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi51aS13aWRnZXQudWktd2lkZ2V0LWNvbnRlbnQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2M1YzVjNTtcXG59XFxuXFxuLnVpLXdpZGdldC1jb250ZW50IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgY29sb3I6ICMzMzMzMzM7XFxufVxcblxcbi51aS13aWRnZXQtY29udGVudCBhIHtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG5cXG4udWktd2lkZ2V0LWhlYWRlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xcbiAgYmFja2dyb3VuZDogI2U5ZTllOTtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi51aS13aWRnZXQtaGVhZGVyIGEge1xcbiAgY29sb3I6ICMzMzMzMzM7XFxufVxcblxcbi8qIEludGVyYWN0aW9uIHN0YXRlc1xcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbi51aS1zdGF0ZS1kZWZhdWx0LFxcbi51aS13aWRnZXQtY29udGVudCAudWktc3RhdGUtZGVmYXVsdCxcXG4udWktd2lkZ2V0LWhlYWRlciAudWktc3RhdGUtZGVmYXVsdCxcXG4udWktYnV0dG9uLFxcbmh0bWwgLnVpLWJ1dHRvbi51aS1zdGF0ZS1kaXNhYmxlZDpob3ZlcixcXG5odG1sIC51aS1idXR0b24udWktc3RhdGUtZGlzYWJsZWQ6YWN0aXZlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjNWM1YzU7XFxuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiAjNDU0NTQ1O1xcbn1cXG5cXG4udWktc3RhdGUtZGVmYXVsdCBhLFxcbi51aS1zdGF0ZS1kZWZhdWx0IGE6bGluayxcXG4udWktc3RhdGUtZGVmYXVsdCBhOnZpc2l0ZWQsXFxuYS51aS1idXR0b24sXFxuYTpsaW5rLnVpLWJ1dHRvbixcXG5hOnZpc2l0ZWQudWktYnV0dG9uLFxcbi51aS1idXR0b24ge1xcbiAgY29sb3I6ICM0NTQ1NDU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi51aS1zdGF0ZS1ob3ZlcixcXG4udWktd2lkZ2V0LWNvbnRlbnQgLnVpLXN0YXRlLWhvdmVyLFxcbi51aS13aWRnZXQtaGVhZGVyIC51aS1zdGF0ZS1ob3ZlcixcXG4udWktc3RhdGUtZm9jdXMsXFxuLnVpLXdpZGdldC1jb250ZW50IC51aS1zdGF0ZS1mb2N1cyxcXG4udWktd2lkZ2V0LWhlYWRlciAudWktc3RhdGUtZm9jdXMsXFxuLnVpLWJ1dHRvbjpob3ZlcixcXG4udWktYnV0dG9uOmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XFxuICBiYWNrZ3JvdW5kOiAjZWRlZGVkO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiAjMmIyYjJiO1xcbn1cXG5cXG4udWktc3RhdGUtaG92ZXIgYSxcXG4udWktc3RhdGUtaG92ZXIgYTpob3ZlcixcXG4udWktc3RhdGUtaG92ZXIgYTpsaW5rLFxcbi51aS1zdGF0ZS1ob3ZlciBhOnZpc2l0ZWQsXFxuLnVpLXN0YXRlLWZvY3VzIGEsXFxuLnVpLXN0YXRlLWZvY3VzIGE6aG92ZXIsXFxuLnVpLXN0YXRlLWZvY3VzIGE6bGluayxcXG4udWktc3RhdGUtZm9jdXMgYTp2aXNpdGVkLFxcbmEudWktYnV0dG9uOmhvdmVyLFxcbmEudWktYnV0dG9uOmZvY3VzIHtcXG4gIGNvbG9yOiAjMmIyYjJiO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4udWktdmlzdWFsLWZvY3VzIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggMXB4ICM1ZTllZDY7XFxufVxcblxcbi51aS1zdGF0ZS1hY3RpdmUsXFxuLnVpLXdpZGdldC1jb250ZW50IC51aS1zdGF0ZS1hY3RpdmUsXFxuLnVpLXdpZGdldC1oZWFkZXIgLnVpLXN0YXRlLWFjdGl2ZSxcXG5hLnVpLWJ1dHRvbjphY3RpdmUsXFxuLnVpLWJ1dHRvbjphY3RpdmUsXFxuLnVpLWJ1dHRvbi51aS1zdGF0ZS1hY3RpdmU6aG92ZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwM2VmZjtcXG4gIGJhY2tncm91bmQ6ICMwMDdmZmY7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi51aS1pY29uLWJhY2tncm91bmQsXFxuLnVpLXN0YXRlLWFjdGl2ZSAudWktaWNvbi1iYWNrZ3JvdW5kIHtcXG4gIGJvcmRlcjogIzAwM2VmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi51aS1zdGF0ZS1hY3RpdmUgYSxcXG4udWktc3RhdGUtYWN0aXZlIGE6bGluayxcXG4udWktc3RhdGUtYWN0aXZlIGE6dmlzaXRlZCB7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLyogSW50ZXJhY3Rpb24gQ3Vlc1xcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbi51aS1zdGF0ZS1oaWdobGlnaHQsXFxuLnVpLXdpZGdldC1jb250ZW50IC51aS1zdGF0ZS1oaWdobGlnaHQsXFxuLnVpLXdpZGdldC1oZWFkZXIgLnVpLXN0YXRlLWhpZ2hsaWdodCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGFkNTVlO1xcbiAgYmFja2dyb3VuZDogI2ZmZmE5MDtcXG4gIGNvbG9yOiAjNzc3NjIwO1xcbn1cXG5cXG4udWktc3RhdGUtY2hlY2tlZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGFkNTVlO1xcbiAgYmFja2dyb3VuZDogI2ZmZmE5MDtcXG59XFxuXFxuLnVpLXN0YXRlLWhpZ2hsaWdodCBhLFxcbi51aS13aWRnZXQtY29udGVudCAudWktc3RhdGUtaGlnaGxpZ2h0IGEsXFxuLnVpLXdpZGdldC1oZWFkZXIgLnVpLXN0YXRlLWhpZ2hsaWdodCBhIHtcXG4gIGNvbG9yOiAjNzc3NjIwO1xcbn1cXG5cXG4udWktc3RhdGUtZXJyb3IsXFxuLnVpLXdpZGdldC1jb250ZW50IC51aS1zdGF0ZS1lcnJvcixcXG4udWktd2lkZ2V0LWhlYWRlciAudWktc3RhdGUtZXJyb3Ige1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxYTg5OTtcXG4gIGJhY2tncm91bmQ6ICNmZGRmZGY7XFxuICBjb2xvcjogIzVmM2YzZjtcXG59XFxuXFxuLnVpLXN0YXRlLWVycm9yIGEsXFxuLnVpLXdpZGdldC1jb250ZW50IC51aS1zdGF0ZS1lcnJvciBhLFxcbi51aS13aWRnZXQtaGVhZGVyIC51aS1zdGF0ZS1lcnJvciBhIHtcXG4gIGNvbG9yOiAjNWYzZjNmO1xcbn1cXG5cXG4udWktc3RhdGUtZXJyb3ItdGV4dCxcXG4udWktd2lkZ2V0LWNvbnRlbnQgLnVpLXN0YXRlLWVycm9yLXRleHQsXFxuLnVpLXdpZGdldC1oZWFkZXIgLnVpLXN0YXRlLWVycm9yLXRleHQge1xcbiAgY29sb3I6ICM1ZjNmM2Y7XFxufVxcblxcbi51aS1wcmlvcml0eS1wcmltYXJ5LFxcbi51aS13aWRnZXQtY29udGVudCAudWktcHJpb3JpdHktcHJpbWFyeSxcXG4udWktd2lkZ2V0LWhlYWRlciAudWktcHJpb3JpdHktcHJpbWFyeSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnVpLXByaW9yaXR5LXNlY29uZGFyeSxcXG4udWktd2lkZ2V0LWNvbnRlbnQgLnVpLXByaW9yaXR5LXNlY29uZGFyeSxcXG4udWktd2lkZ2V0LWhlYWRlciAudWktcHJpb3JpdHktc2Vjb25kYXJ5IHtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIGZpbHRlcjogQWxwaGEoT3BhY2l0eT03MCk7XFxuICAvKiBzdXBwb3J0OiBJRTggKi9cXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi51aS1zdGF0ZS1kaXNhYmxlZCxcXG4udWktd2lkZ2V0LWNvbnRlbnQgLnVpLXN0YXRlLWRpc2FibGVkLFxcbi51aS13aWRnZXQtaGVhZGVyIC51aS1zdGF0ZS1kaXNhYmxlZCB7XFxuICBvcGFjaXR5OiAwLjM1O1xcbiAgZmlsdGVyOiBBbHBoYShPcGFjaXR5PTM1KTtcXG4gIC8qIHN1cHBvcnQ6IElFOCAqL1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG59XFxuXFxuLnVpLXN0YXRlLWRpc2FibGVkIC51aS1pY29uIHtcXG4gIGZpbHRlcjogQWxwaGEoT3BhY2l0eT0zNSk7XFxuICAvKiBzdXBwb3J0OiBJRTggLSBTZWUgIzYwNTkgKi9cXG59XFxuXFxuLyogSWNvbnNcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4vKiBzdGF0ZXMgYW5kIGltYWdlcyAqL1xcbi51aS1pY29uIHtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbn1cXG5cXG4udWktaWNvbixcXG4udWktd2lkZ2V0LWNvbnRlbnQgLnVpLWljb24ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIvaW1hZ2UvanF1ZXJ5dWkvdWktaWNvbnNfNDQ0NDQ0XzI1NngyNDAucG5nXFxcIik7XFxufVxcblxcbi51aS13aWRnZXQtaGVhZGVyIC51aS1pY29uIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiL2ltYWdlL2pxdWVyeXVpL3VpLWljb25zXzQ0NDQ0NF8yNTZ4MjQwLnBuZ1xcXCIpO1xcbn1cXG5cXG4udWktc3RhdGUtaG92ZXIgLnVpLWljb24sXFxuLnVpLXN0YXRlLWZvY3VzIC51aS1pY29uLFxcbi51aS1idXR0b246aG92ZXIgLnVpLWljb24sXFxuLnVpLWJ1dHRvbjpmb2N1cyAudWktaWNvbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi9pbWFnZS9qcXVlcnl1aS91aS1pY29uc181NTU1NTVfMjU2eDI0MC5wbmdcXFwiKTtcXG59XFxuXFxuLnVpLXN0YXRlLWFjdGl2ZSAudWktaWNvbixcXG4udWktYnV0dG9uOmFjdGl2ZSAudWktaWNvbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi9pbWFnZS9qcXVlcnl1aS91aS1pY29uc19mZmZmZmZfMjU2eDI0MC5wbmdcXFwiKTtcXG59XFxuXFxuLnVpLXN0YXRlLWhpZ2hsaWdodCAudWktaWNvbixcXG4udWktYnV0dG9uIC51aS1zdGF0ZS1oaWdobGlnaHQudWktaWNvbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi9pbWFnZS9qcXVlcnl1aS91aS1pY29uc183Nzc2MjBfMjU2eDI0MC5wbmdcXFwiKTtcXG59XFxuXFxuLnVpLXN0YXRlLWVycm9yIC51aS1pY29uLFxcbi51aS1zdGF0ZS1lcnJvci10ZXh0IC51aS1pY29uIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiL2ltYWdlL2pxdWVyeXVpL3VpLWljb25zX2NjMDAwMF8yNTZ4MjQwLnBuZ1xcXCIpO1xcbn1cXG5cXG4udWktYnV0dG9uIC51aS1pY29uIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiL2ltYWdlL2pxdWVyeXVpL3VpLWljb25zXzc3Nzc3N18yNTZ4MjQwLnBuZ1xcXCIpO1xcbn1cXG5cXG4vKiBwb3NpdGlvbmluZyAqL1xcbi51aS1pY29uLWJsYW5rIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDE2cHggMTZweDtcXG59XFxuXFxuLnVpLWljb24tY2FyZXQtMS1uIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXG59XFxuXFxuLnVpLWljb24tY2FyZXQtMS1uZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAwO1xcbn1cXG5cXG4udWktaWNvbi1jYXJldC0xLWUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggMDtcXG59XFxuXFxuLnVpLWljb24tY2FyZXQtMS1zZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAwO1xcbn1cXG5cXG4udWktaWNvbi1jYXJldC0xLXMge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY1cHggMDtcXG59XFxuXFxuLnVpLWljb24tY2FyZXQtMS1zdyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAwO1xcbn1cXG5cXG4udWktaWNvbi1jYXJldC0xLXcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggMDtcXG59XFxuXFxuLnVpLWljb24tY2FyZXQtMS1udyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggMDtcXG59XFxuXFxuLnVpLWljb24tY2FyZXQtMi1uLXMge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IDA7XFxufVxcblxcbi51aS1pY29uLWNhcmV0LTItZS13IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAwO1xcbn1cXG5cXG4udWktaWNvbi10cmlhbmdsZS0xLW4ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMTZweDtcXG59XFxuXFxuLnVpLWljb24tdHJpYW5nbGUtMS1uZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtMTZweDtcXG59XFxuXFxuLnVpLWljb24tdHJpYW5nbGUtMS1lIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC0xNnB4O1xcbn1cXG5cXG4udWktaWNvbi10cmlhbmdsZS0xLXNlIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC0xNnB4O1xcbn1cXG5cXG4udWktaWNvbi10cmlhbmdsZS0xLXMge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY1cHggLTE2cHg7XFxufVxcblxcbi51aS1pY29uLXRyaWFuZ2xlLTEtc3cge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTE2cHg7XFxufVxcblxcbi51aS1pY29uLXRyaWFuZ2xlLTEtdyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMTZweDtcXG59XFxuXFxuLnVpLWljb24tdHJpYW5nbGUtMS1udyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTE2cHg7XFxufVxcblxcbi51aS1pY29uLXRyaWFuZ2xlLTItbi1zIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtMTZweDtcXG59XFxuXFxuLnVpLWljb24tdHJpYW5nbGUtMi1lLXcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC0xNnB4O1xcbn1cXG5cXG4udWktaWNvbi1hcnJvdy0xLW4ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMzJweDtcXG59XFxuXFxuLnVpLWljb24tYXJyb3ctMS1uZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtMzJweDtcXG59XFxuXFxuLnVpLWljb24tYXJyb3ctMS1lIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC0zMnB4O1xcbn1cXG5cXG4udWktaWNvbi1hcnJvdy0xLXNlIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC0zMnB4O1xcbn1cXG5cXG4udWktaWNvbi1hcnJvdy0xLXMge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY1cHggLTMycHg7XFxufVxcblxcbi51aS1pY29uLWFycm93LTEtc3cge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTMycHg7XFxufVxcblxcbi51aS1pY29uLWFycm93LTEtdyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMzJweDtcXG59XFxuXFxuLnVpLWljb24tYXJyb3ctMS1udyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTMycHg7XFxufVxcblxcbi51aS1pY29uLWFycm93LTItbi1zIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtMzJweDtcXG59XFxuXFxuLnVpLWljb24tYXJyb3ctMi1uZS1zdyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTMycHg7XFxufVxcblxcbi51aS1pY29uLWFycm93LTItZS13IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAtMzJweDtcXG59XFxuXFxuLnVpLWljb24tYXJyb3ctMi1zZS1udyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTc2cHggLTMycHg7XFxufVxcblxcbi51aS1pY29uLWFycm93c3RvcC0xLW4ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE5MnB4IC0zMnB4O1xcbn1cXG5cXG4udWktaWNvbi1hcnJvd3N0b3AtMS1lIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDhweCAtMzJweDtcXG59XFxuXFxuLnVpLWljb24tYXJyb3dzdG9wLTEtcyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI0cHggLTMycHg7XFxufVxcblxcbi51aS1pY29uLWFycm93c3RvcC0xLXcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI0MHB4IC0zMnB4O1xcbn1cXG5cXG4udWktaWNvbi1hcnJvd3RoaWNrLTEtbiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxcHggLTQ4cHg7XFxufVxcblxcbi51aS1pY29uLWFycm93dGhpY2stMS1uZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtNDhweDtcXG59XFxuXFxuLnVpLWljb24tYXJyb3d0aGljay0xLWUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTQ4cHg7XFxufVxcblxcbi51aS1pY29uLWFycm93dGhpY2stMS1zZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtNDhweDtcXG59XFxuXFxuLnVpLWljb24tYXJyb3d0aGljay0xLXMge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTQ4cHg7XFxufVxcblxcbi51aS1pY29uLWFycm93dGhpY2stMS1zdyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtNDhweDtcXG59XFxuXFxuLnVpLWljb24tYXJyb3d0aGljay0xLXcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTQ4cHg7XFxufVxcblxcbi51aS1pY29uLWFycm93dGhpY2stMS1udyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTQ4cHg7XFxufVxcblxcbi51aS1pY29uLWFycm93dGhpY2stMi1uLXMge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC00OHB4O1xcbn1cXG5cXG4udWktaWNvbi1hcnJvd3RoaWNrLTItbmUtc3cge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC00OHB4O1xcbn1cXG5cXG4udWktaWNvbi1hcnJvd3RoaWNrLTItZS13IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAtNDhweDtcXG59XFxuXFxuLnVpLWljb24tYXJyb3d0aGljay0yLXNlLW53IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNzZweCAtNDhweDtcXG59XFxuXFxuLnVpLWljb24tYXJyb3d0aGlja3N0b3AtMS1uIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAtNDhweDtcXG59XFxuXFxuLnVpLWljb24tYXJyb3d0aGlja3N0b3AtMS1lIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDhweCAtNDhweDtcXG59XFxuXFxuLnVpLWljb24tYXJyb3d0aGlja3N0b3AtMS1zIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yMjRweCAtNDhweDtcXG59XFxuXFxuLnVpLWljb24tYXJyb3d0aGlja3N0b3AtMS13IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yNDBweCAtNDhweDtcXG59XFxuXFxuLnVpLWljb24tYXJyb3dyZXR1cm50aGljay0xLXcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtNjRweDtcXG59XFxuXFxuLnVpLWljb24tYXJyb3dyZXR1cm50aGljay0xLW4ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTY0cHg7XFxufVxcblxcbi51aS1pY29uLWFycm93cmV0dXJudGhpY2stMS1lIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC02NHB4O1xcbn1cXG5cXG4udWktaWNvbi1hcnJvd3JldHVybnRoaWNrLTEtcyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtNjRweDtcXG59XFxuXFxuLnVpLWljb24tYXJyb3dyZXR1cm4tMS13IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC02NHB4O1xcbn1cXG5cXG4udWktaWNvbi1hcnJvd3JldHVybi0xLW4ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTY0cHg7XFxufVxcblxcbi51aS1pY29uLWFycm93cmV0dXJuLTEtZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtNjRweDtcXG59XFxuXFxuLnVpLWljb24tYXJyb3dyZXR1cm4tMS1zIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtNjRweDtcXG59XFxuXFxuLnVpLWljb24tYXJyb3dyZWZyZXNoLTEtdyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTY0cHg7XFxufVxcblxcbi51aS1pY29uLWFycm93cmVmcmVzaC0xLW4ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC02NHB4O1xcbn1cXG5cXG4udWktaWNvbi1hcnJvd3JlZnJlc2gtMS1lIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAtNjRweDtcXG59XFxuXFxuLnVpLWljb24tYXJyb3dyZWZyZXNoLTEtcyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTc2cHggLTY0cHg7XFxufVxcblxcbi51aS1pY29uLWFycm93LTQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtODBweDtcXG59XFxuXFxuLnVpLWljb24tYXJyb3ctNC1kaWFnIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC04MHB4O1xcbn1cXG5cXG4udWktaWNvbi1leHRsaW5rIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC04MHB4O1xcbn1cXG5cXG4udWktaWNvbi1uZXd3aW4ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTgwcHg7XFxufVxcblxcbi51aS1pY29uLXJlZnJlc2gge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTgwcHg7XFxufVxcblxcbi51aS1pY29uLXNodWZmbGUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTgwcHg7XFxufVxcblxcbi51aS1pY29uLXRyYW5zZmVyLWUtdyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtODBweDtcXG59XFxuXFxuLnVpLWljb24tdHJhbnNmZXJ0aGljay1lLXcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC04MHB4O1xcbn1cXG5cXG4udWktaWNvbi1mb2xkZXItY29sbGFwc2VkIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTk2cHg7XFxufVxcblxcbi51aS1pY29uLWZvbGRlci1vcGVuIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC05NnB4O1xcbn1cXG5cXG4udWktaWNvbi1kb2N1bWVudCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtOTZweDtcXG59XFxuXFxuLnVpLWljb24tZG9jdW1lbnQtYiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtOTZweDtcXG59XFxuXFxuLnVpLWljb24tbm90ZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtOTZweDtcXG59XFxuXFxuLnVpLWljb24tbWFpbC1jbG9zZWQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTk2cHg7XFxufVxcblxcbi51aS1pY29uLW1haWwtb3BlbiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtOTZweDtcXG59XFxuXFxuLnVpLWljb24tc3VpdGNhc2Uge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC05NnB4O1xcbn1cXG5cXG4udWktaWNvbi1jb21tZW50IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtOTZweDtcXG59XFxuXFxuLnVpLWljb24tcGVyc29uIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtOTZweDtcXG59XFxuXFxuLnVpLWljb24tcHJpbnQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IC05NnB4O1xcbn1cXG5cXG4udWktaWNvbi10cmFzaCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTc2cHggLTk2cHg7XFxufVxcblxcbi51aS1pY29uLWxvY2tlZCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTk2cHg7XFxufVxcblxcbi51aS1pY29uLXVubG9ja2VkIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDhweCAtOTZweDtcXG59XFxuXFxuLnVpLWljb24tYm9va21hcmsge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIyNHB4IC05NnB4O1xcbn1cXG5cXG4udWktaWNvbi10YWcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI0MHB4IC05NnB4O1xcbn1cXG5cXG4udWktaWNvbi1ob21lIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTExMnB4O1xcbn1cXG5cXG4udWktaWNvbi1mbGFnIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC0xMTJweDtcXG59XFxuXFxuLnVpLWljb24tY2FsZW5kYXIge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTExMnB4O1xcbn1cXG5cXG4udWktaWNvbi1jYXJ0IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC0xMTJweDtcXG59XFxuXFxuLnVpLWljb24tcGVuY2lsIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC0xMTJweDtcXG59XFxuXFxuLnVpLWljb24tY2xvY2sge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTExMnB4O1xcbn1cXG5cXG4udWktaWNvbi1kaXNrIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xMTJweDtcXG59XFxuXFxuLnVpLWljb24tY2FsY3VsYXRvciB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTExMnB4O1xcbn1cXG5cXG4udWktaWNvbi16b29taW4ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC0xMTJweDtcXG59XFxuXFxuLnVpLWljb24tem9vbW91dCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTExMnB4O1xcbn1cXG5cXG4udWktaWNvbi1zZWFyY2gge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IC0xMTJweDtcXG59XFxuXFxuLnVpLWljb24td3JlbmNoIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNzZweCAtMTEycHg7XFxufVxcblxcbi51aS1pY29uLWdlYXIge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE5MnB4IC0xMTJweDtcXG59XFxuXFxuLnVpLWljb24taGVhcnQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwOHB4IC0xMTJweDtcXG59XFxuXFxuLnVpLWljb24tc3RhciB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI0cHggLTExMnB4O1xcbn1cXG5cXG4udWktaWNvbi1saW5rIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yNDBweCAtMTEycHg7XFxufVxcblxcbi51aS1pY29uLWNhbmNlbCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0xMjhweDtcXG59XFxuXFxuLnVpLWljb24tcGx1cyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtMTI4cHg7XFxufVxcblxcbi51aS1pY29uLXBsdXN0aGljayB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMTI4cHg7XFxufVxcblxcbi51aS1pY29uLW1pbnVzIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC0xMjhweDtcXG59XFxuXFxuLnVpLWljb24tbWludXN0aGljayB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtMTI4cHg7XFxufVxcblxcbi51aS1pY29uLWNsb3NlIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0xMjhweDtcXG59XFxuXFxuLnVpLWljb24tY2xvc2V0aGljayB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMTI4cHg7XFxufVxcblxcbi51aS1pY29uLWtleSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTEyOHB4O1xcbn1cXG5cXG4udWktaWNvbi1saWdodGJ1bGIge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC0xMjhweDtcXG59XFxuXFxuLnVpLWljb24tc2Npc3NvcnMge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC0xMjhweDtcXG59XFxuXFxuLnVpLWljb24tY2xpcGJvYXJkIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAtMTI4cHg7XFxufVxcblxcbi51aS1pY29uLWNvcHkge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE3NnB4IC0xMjhweDtcXG59XFxuXFxuLnVpLWljb24tY29udGFjdCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTEyOHB4O1xcbn1cXG5cXG4udWktaWNvbi1pbWFnZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjA4cHggLTEyOHB4O1xcbn1cXG5cXG4udWktaWNvbi12aWRlbyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI0cHggLTEyOHB4O1xcbn1cXG5cXG4udWktaWNvbi1zY3JpcHQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI0MHB4IC0xMjhweDtcXG59XFxuXFxuLnVpLWljb24tYWxlcnQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMTQ0cHg7XFxufVxcblxcbi51aS1pY29uLWluZm8ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTE0NHB4O1xcbn1cXG5cXG4udWktaWNvbi1ub3RpY2Uge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTE0NHB4O1xcbn1cXG5cXG4udWktaWNvbi1oZWxwIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC0xNDRweDtcXG59XFxuXFxuLnVpLWljb24tY2hlY2sge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTE0NHB4O1xcbn1cXG5cXG4udWktaWNvbi1idWxsZXQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTE0NHB4O1xcbn1cXG5cXG4udWktaWNvbi1yYWRpby1vbiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMTQ0cHg7XFxufVxcblxcbi51aS1pY29uLXJhZGlvLW9mZiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTE0NHB4O1xcbn1cXG5cXG4udWktaWNvbi1waW4tdyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTE0NHB4O1xcbn1cXG5cXG4udWktaWNvbi1waW4tcyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTE0NHB4O1xcbn1cXG5cXG4udWktaWNvbi1wbGF5IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTE2MHB4O1xcbn1cXG5cXG4udWktaWNvbi1wYXVzZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtMTYwcHg7XFxufVxcblxcbi51aS1pY29uLXNlZWstbmV4dCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMTYwcHg7XFxufVxcblxcbi51aS1pY29uLXNlZWstcHJldiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtMTYwcHg7XFxufVxcblxcbi51aS1pY29uLXNlZWstZW5kIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC0xNjBweDtcXG59XFxuXFxuLnVpLWljb24tc2Vlay1zdGFydCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTYwcHg7XFxufVxcblxcbi8qIHVpLWljb24tc2Vlay1maXJzdCBpcyBkZXByZWNhdGVkLCB1c2UgdWktaWNvbi1zZWVrLXN0YXJ0IGluc3RlYWQgKi9cXG4udWktaWNvbi1zZWVrLWZpcnN0IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0xNjBweDtcXG59XFxuXFxuLnVpLWljb24tc3RvcCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMTYwcHg7XFxufVxcblxcbi51aS1pY29uLWVqZWN0IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtMTYwcHg7XFxufVxcblxcbi51aS1pY29uLXZvbHVtZS1vZmYge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC0xNjBweDtcXG59XFxuXFxuLnVpLWljb24tdm9sdW1lLW9uIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtMTYwcHg7XFxufVxcblxcbi51aS1pY29uLXBvd2VyIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTE3NnB4O1xcbn1cXG5cXG4udWktaWNvbi1zaWduYWwtZGlhZyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtMTc2cHg7XFxufVxcblxcbi51aS1pY29uLXNpZ25hbCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMTc2cHg7XFxufVxcblxcbi51aS1pY29uLWJhdHRlcnktMCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtMTc2cHg7XFxufVxcblxcbi51aS1pY29uLWJhdHRlcnktMSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtMTc2cHg7XFxufVxcblxcbi51aS1pY29uLWJhdHRlcnktMiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTc2cHg7XFxufVxcblxcbi51aS1pY29uLWJhdHRlcnktMyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMTc2cHg7XFxufVxcblxcbi51aS1pY29uLWNpcmNsZS1wbHVzIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTE5MnB4O1xcbn1cXG5cXG4udWktaWNvbi1jaXJjbGUtbWludXMge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTE5MnB4O1xcbn1cXG5cXG4udWktaWNvbi1jaXJjbGUtY2xvc2Uge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTE5MnB4O1xcbn1cXG5cXG4udWktaWNvbi1jaXJjbGUtdHJpYW5nbGUtZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtMTkycHg7XFxufVxcblxcbi51aS1pY29uLWNpcmNsZS10cmlhbmdsZS1zIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC0xOTJweDtcXG59XFxuXFxuLnVpLWljb24tY2lyY2xlLXRyaWFuZ2xlLXcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTE5MnB4O1xcbn1cXG5cXG4udWktaWNvbi1jaXJjbGUtdHJpYW5nbGUtbiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMTkycHg7XFxufVxcblxcbi51aS1pY29uLWNpcmNsZS1hcnJvdy1lIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtMTkycHg7XFxufVxcblxcbi51aS1pY29uLWNpcmNsZS1hcnJvdy1zIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtMTkycHg7XFxufVxcblxcbi51aS1pY29uLWNpcmNsZS1hcnJvdy13IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtMTkycHg7XFxufVxcblxcbi51aS1pY29uLWNpcmNsZS1hcnJvdy1uIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAtMTkycHg7XFxufVxcblxcbi51aS1pY29uLWNpcmNsZS16b29taW4ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE3NnB4IC0xOTJweDtcXG59XFxuXFxuLnVpLWljb24tY2lyY2xlLXpvb21vdXQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE5MnB4IC0xOTJweDtcXG59XFxuXFxuLnVpLWljb24tY2lyY2xlLWNoZWNrIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDhweCAtMTkycHg7XFxufVxcblxcbi51aS1pY29uLWNpcmNsZXNtYWxsLXBsdXMge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMjA4cHg7XFxufVxcblxcbi51aS1pY29uLWNpcmNsZXNtYWxsLW1pbnVzIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC0yMDhweDtcXG59XFxuXFxuLnVpLWljb24tY2lyY2xlc21hbGwtY2xvc2Uge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTIwOHB4O1xcbn1cXG5cXG4udWktaWNvbi1zcXVhcmVzbWFsbC1wbHVzIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC0yMDhweDtcXG59XFxuXFxuLnVpLWljb24tc3F1YXJlc21hbGwtbWludXMge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTIwOHB4O1xcbn1cXG5cXG4udWktaWNvbi1zcXVhcmVzbWFsbC1jbG9zZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMjA4cHg7XFxufVxcblxcbi51aS1pY29uLWdyaXAtZG90dGVkLXZlcnRpY2FsIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTIyNHB4O1xcbn1cXG5cXG4udWktaWNvbi1ncmlwLWRvdHRlZC1ob3Jpem9udGFsIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC0yMjRweDtcXG59XFxuXFxuLnVpLWljb24tZ3JpcC1zb2xpZC12ZXJ0aWNhbCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMjI0cHg7XFxufVxcblxcbi51aS1pY29uLWdyaXAtc29saWQtaG9yaXpvbnRhbCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtMjI0cHg7XFxufVxcblxcbi51aS1pY29uLWdyaXBzbWFsbC1kaWFnb25hbC1zZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtMjI0cHg7XFxufVxcblxcbi51aS1pY29uLWdyaXAtZGlhZ29uYWwtc2Uge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTIyNHB4O1xcbn1cXG5cXG4vKiBNaXNjIHZpc3VhbHNcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4vKiBDb3JuZXIgcmFkaXVzICovXFxuLnVpLWNvcm5lci1hbGwsXFxuLnVpLWNvcm5lci10b3AsXFxuLnVpLWNvcm5lci1sZWZ0LFxcbi51aS1jb3JuZXItdGwge1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xcbn1cXG5cXG4udWktY29ybmVyLWFsbCxcXG4udWktY29ybmVyLXRvcCxcXG4udWktY29ybmVyLXJpZ2h0LFxcbi51aS1jb3JuZXItdHIge1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcXG59XFxuXFxuLnVpLWNvcm5lci1hbGwsXFxuLnVpLWNvcm5lci1ib3R0b20sXFxuLnVpLWNvcm5lci1sZWZ0LFxcbi51aS1jb3JuZXItYmwge1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xcbn1cXG5cXG4udWktY29ybmVyLWFsbCxcXG4udWktY29ybmVyLWJvdHRvbSxcXG4udWktY29ybmVyLXJpZ2h0LFxcbi51aS1jb3JuZXItYnIge1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcXG59XFxuXFxuLyogT3ZlcmxheXMgKi9cXG4udWktd2lkZ2V0LW92ZXJsYXkge1xcbiAgYmFja2dyb3VuZDogI2FhYWFhYTtcXG4gIG9wYWNpdHk6IDAuMztcXG4gIGZpbHRlcjogQWxwaGEoT3BhY2l0eT0zMCk7XFxuICAvKiBzdXBwb3J0OiBJRTggKi9cXG59XFxuXFxuLnVpLXdpZGdldC1zaGFkb3cge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAjNjY2NjY2O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggIzY2NjY2NjtcXG59XFxuXFxuLm1vZGFsLWJvb2tpbmcgLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGNvbG9yOiAjMGQ0N2ExO1xcbiAgcGFkZGluZzogMCA1cHggNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwtYm9va2luZyAud3JhcHBlcl9fZGF0ZXRpbWUtcGlja2VyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1vZGFsLWJvb2tpbmcgLndyYXBwZXJfX2RhdGV0aW1lLXBpY2tlciAuaW5wdXQtZ3JvdXAge1xcbiAgd2lkdGg6IDMwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luOiAwIDEuNSUgMTVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMzdweDtcXG59XFxuLm1vZGFsLWJvb2tpbmcgLndyYXBwZXJfX2RhdGV0aW1lLXBpY2tlciAuaW5wdXQtZ3JvdXAgLmhlcm8taWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDEwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIHotaW5kZXg6IDM7XFxuICBjb2xvcjogIzZjNzU3ZDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbn1cXG4ubW9kYWwtYm9va2luZyAud3JhcHBlcl9fZGF0ZXRpbWUtcGlja2VyIC5pbnB1dC1ncm91cCAuaW5wdXQtY29udHJvbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGNvbG9yOiAjNTI1NjY2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmctbGVmdDogNDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICB0cmFuc2l0aW9uOiBib3JkZXIgMC4zcyBsaW5lYXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbn1cXG4ubW9kYWwtYm9va2luZyAud3JhcHBlcl9fZGF0ZXRpbWUtcGlja2VyIC5pbnB1dC1ncm91cCAudGV4dC1jb250cm9sIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgY29sb3I6ICM1MjU2NjY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMjVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICB0cmFuc2l0aW9uOiBib3JkZXIgMC4zcyBsaW5lYXI7XFxufVxcbi5tb2RhbC1ib29raW5nIC5zdGF0aXN0aWNhbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4ubW9kYWwtYm9va2luZyAuc3RhdGlzdGljYWwgLnNlc3Npb24tc3RhdGlzdGljYWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiA1cHggMDtcXG59XFxuLm1vZGFsLWJvb2tpbmcgLnN0YXRpc3RpY2FsIC5zZXNzaW9uLXN0YXRpc3RpY2FsOmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDA7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5tb2RhbC1ib29raW5nIC5zdGF0aXN0aWNhbCAuc2Vzc2lvbi1zdGF0aXN0aWNhbCAuaGVhZCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZy1yaWdodDogMTVweDtcXG4gIHotaW5kZXg6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG4ubW9kYWwtYm9va2luZyAuc3RhdGlzdGljYWwgLnNlc3Npb24tc3RhdGlzdGljYWwgLmhlYWQgc3BhbiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4ubW9kYWwtYm9va2luZyAuc3RhdGlzdGljYWwgLnNlc3Npb24tc3RhdGlzdGljYWwgLmhlYWQ6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjMzQzYTQwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogLTE7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDE1cHg7XFxufVxcbi5tb2RhbC1ib29raW5nIC5zdGF0aXN0aWNhbCAuc2Vzc2lvbi1zdGF0aXN0aWNhbCAudGV4dC12YWx1ZSB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjMGQ0N2ExO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBtaW4td2lkdGg6IDYwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG4ubW9kYWwtYm9va2luZyAuc3RhdGlzdGljYWwgLnNlc3Npb24tc3RhdGlzdGljYWwubm90ZSB7XFxuICBmb250LXNpemU6IDExcHg7XFxufVxcbi5tb2RhbC1ib29raW5nIC5ncm91cC1ib3gtdG90YWwge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xcbn1cXG4ubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyX190b3RhbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbn1cXG4ubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyX190b3RhbCAuaGVhZCwgLm1vZGFsLWJvb2tpbmcgLmdyb3VwLWJveC10b3RhbCAud3JhcHBlcl9fdG90YWwgLnRleHQtdmFsdWUge1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcXG59XFxuLm1vZGFsLWJvb2tpbmcgLmdyb3VwLWJveC10b3RhbCAud3JhcHBlcl9fdG90YWwgLnRleHQtdmFsdWUge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcbi5tb2RhbC1ib29raW5nIC5ncm91cC1ib3gtdG90YWwgLnRleHQtYnV0dG9uLXF1ZXN0aW9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1vZGFsLWJvb2tpbmcgLmdyb3VwLWJveC10b3RhbCAud3JhcHBlci1idXR0b24tc2V0dGluZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tb2RhbC1ib29raW5nIC5ncm91cC1ib3gtdG90YWwgLndyYXBwZXItYnV0dG9uLXNldHRpbmcgLmJ0bi1ib29raW5nIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIG1hcmdpbjogMnB4IDEwcHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA4cHggMTVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcXG4gIC1vLXRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dCwgLXdlYmtpdC1ib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyLWJ1dHRvbi1zZXR0aW5nIC5idG4tc2l0dGVyLWFjY2VwdCB7XFxuICBiYWNrZ3JvdW5kOiAjMDA3YmZjO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzAwN2JmYztcXG59XFxuLm1vZGFsLWJvb2tpbmcgLmdyb3VwLWJveC10b3RhbCAud3JhcHBlci1idXR0b24tc2V0dGluZyAuYnRuLXNpdHRlci1hY2NlcHQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNhM2NmZmU7XFxuICBjb2xvcjogIzAwN2JmYztcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG4ubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyLWJ1dHRvbi1zZXR0aW5nIC5idG4tc2l0dGVyLWFjY2VwdDpmb2N1cywgLm1vZGFsLWJvb2tpbmcgLmdyb3VwLWJveC10b3RhbCAud3JhcHBlci1idXR0b24tc2V0dGluZyAuYnRuLXNpdHRlci1hY2NlcHQuZm9jdXMge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG4ubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyLWJ1dHRvbi1zZXR0aW5nIC5idG4tc2l0dGVyLWFjY2VwdDpkaXNhYmxlZCwgLm1vZGFsLWJvb2tpbmcgLmdyb3VwLWJveC10b3RhbCAud3JhcHBlci1idXR0b24tc2V0dGluZyAuYnRuLXNpdHRlci1hY2NlcHQuZGlzYWJsZWQsIGZpZWxkc2V0OmRpc2FibGVkIC5tb2RhbC1ib29raW5nIC5ncm91cC1ib3gtdG90YWwgLndyYXBwZXItYnV0dG9uLXNldHRpbmcgLmJ0bi1zaXR0ZXItYWNjZXB0IHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgb3BhY2l0eTogMC42NTtcXG59XFxuLm1vZGFsLWJvb2tpbmcgLmdyb3VwLWJveC10b3RhbCAud3JhcHBlci1idXR0b24tc2V0dGluZyAuYnRuLWVtcGxveWVyLWFjY2VwdCB7XFxuICBiYWNrZ3JvdW5kOiAjZmYzNTQ3O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmMzU0NztcXG59XFxuLm1vZGFsLWJvb2tpbmcgLmdyb3VwLWJveC10b3RhbCAud3JhcHBlci1idXR0b24tc2V0dGluZyAuYnRuLWVtcGxveWVyLWFjY2VwdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmYjZiZDtcXG4gIGNvbG9yOiAjZmYzNTQ3O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxufVxcbi5tb2RhbC1ib29raW5nIC5ncm91cC1ib3gtdG90YWwgLndyYXBwZXItYnV0dG9uLXNldHRpbmcgLmJ0bi1lbXBsb3llci1hY2NlcHQ6Zm9jdXMsIC5tb2RhbC1ib29raW5nIC5ncm91cC1ib3gtdG90YWwgLndyYXBwZXItYnV0dG9uLXNldHRpbmcgLmJ0bi1lbXBsb3llci1hY2NlcHQuZm9jdXMge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG4ubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyLWJ1dHRvbi1zZXR0aW5nIC5idG4tZW1wbG95ZXItYWNjZXB0OmRpc2FibGVkLCAubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyLWJ1dHRvbi1zZXR0aW5nIC5idG4tZW1wbG95ZXItYWNjZXB0LmRpc2FibGVkLCBmaWVsZHNldDpkaXNhYmxlZCAubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyLWJ1dHRvbi1zZXR0aW5nIC5idG4tZW1wbG95ZXItYWNjZXB0IHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgb3BhY2l0eTogMC42NTtcXG59XFxuLm1vZGFsLWJvb2tpbmcgLmdyb3VwLWJveC10b3RhbCAud3JhcHBlci1idXR0b24tc2V0dGluZyAuYnRuLXVzZXItY2FuY2VsIHtcXG4gIGJhY2tncm91bmQ6ICNmZjM1NDc7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmYzNTQ3O1xcbn1cXG4ubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyLWJ1dHRvbi1zZXR0aW5nIC5idG4tdXNlci1jYW5jZWw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmI2YmQ7XFxuICBjb2xvcjogI2ZmMzU0NztcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG4ubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyLWJ1dHRvbi1zZXR0aW5nIC5idG4tdXNlci1jYW5jZWw6Zm9jdXMsIC5tb2RhbC1ib29raW5nIC5ncm91cC1ib3gtdG90YWwgLndyYXBwZXItYnV0dG9uLXNldHRpbmcgLmJ0bi11c2VyLWNhbmNlbC5mb2N1cyB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIG91dGxpbmU6IDA7XFxufVxcbi5tb2RhbC1ib29raW5nIC5ncm91cC1ib3gtdG90YWwgLndyYXBwZXItYnV0dG9uLXNldHRpbmcgLmJ0bi11c2VyLWNhbmNlbDpkaXNhYmxlZCwgLm1vZGFsLWJvb2tpbmcgLmdyb3VwLWJveC10b3RhbCAud3JhcHBlci1idXR0b24tc2V0dGluZyAuYnRuLXVzZXItY2FuY2VsLmRpc2FibGVkLCBmaWVsZHNldDpkaXNhYmxlZCAubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyLWJ1dHRvbi1zZXR0aW5nIC5idG4tdXNlci1jYW5jZWwge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvcGFjaXR5OiAwLjY1O1xcbn1cXG4ubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyLWJ1dHRvbi1zZXR0aW5nIC5idG4tdXNlci1hcHByb3ZlZCB7XFxuICBiYWNrZ3JvdW5kOiAjMGQ0N2ExO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzBkNDdhMTtcXG59XFxuLm1vZGFsLWJvb2tpbmcgLmdyb3VwLWJveC10b3RhbCAud3JhcHBlci1idXR0b24tc2V0dGluZyAuYnRuLXVzZXItYXBwcm92ZWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNhOGJkZGQ7XFxuICBjb2xvcjogIzBkNDdhMTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG4ubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyLWJ1dHRvbi1zZXR0aW5nIC5idG4tdXNlci1hcHByb3ZlZDpmb2N1cywgLm1vZGFsLWJvb2tpbmcgLmdyb3VwLWJveC10b3RhbCAud3JhcHBlci1idXR0b24tc2V0dGluZyAuYnRuLXVzZXItYXBwcm92ZWQuZm9jdXMge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG4ubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyLWJ1dHRvbi1zZXR0aW5nIC5idG4tdXNlci1hcHByb3ZlZDpkaXNhYmxlZCwgLm1vZGFsLWJvb2tpbmcgLmdyb3VwLWJveC10b3RhbCAud3JhcHBlci1idXR0b24tc2V0dGluZyAuYnRuLXVzZXItYXBwcm92ZWQuZGlzYWJsZWQsIGZpZWxkc2V0OmRpc2FibGVkIC5tb2RhbC1ib29raW5nIC5ncm91cC1ib3gtdG90YWwgLndyYXBwZXItYnV0dG9uLXNldHRpbmcgLmJ0bi11c2VyLWFwcHJvdmVkIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgb3BhY2l0eTogMC42NTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLm1vZGFsLm1vZGFsLWJvb2tpbmcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gIH1cXG4gIC5tb2RhbC5tb2RhbC1ib29raW5nIC53cmFwcGVyX19kYXRldGltZS1waWNrZXIgLndyYXBwZXJfX2RhdGUtcGlja2VyIHtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgbWFyZ2luOiAwIDEuNSUgNXB4O1xcbiAgfVxcbiAgLm1vZGFsLm1vZGFsLWJvb2tpbmcgLndyYXBwZXJfX2RhdGV0aW1lLXBpY2tlciAud3JhcHBlcl9fdGltZS1waWNrZXIge1xcbiAgICB3aWR0aDogNDAlO1xcbiAgfVxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiaW1wb3J0IFRZUEUgZnJvbSBcIi4vdHlwZVwiXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR0ZXJTb2NrZXQoc29ja2V0KXtcclxuICAgIC8vIGNvbnNvbGUubG9nKHNvY2tldCAsIFwiIHNldCBzb2NrZXQgXCIpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBUWVBFLlNPQ0NLRVQuU0VUX1NPQ0tFVF9JTyxcclxuICAgICAgICBwYXlsb2FkIDogc29ja2V0XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldHRlclVzZXIoIHVzZXIgKXtcclxuICAgIC8vIGNvbnNvbGUubG9nKHVzZXIgLCBcIiBzZXQgdXNlciBcIilcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6IFRZUEUuVVNFUi5TRVRURVJfVVNFUixcclxuICAgICAgICBwYXlsb2FkIDogeyAuLi51c2VyLCBmZXRjaGVkOiB0cnVlIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldHRlckNoYW5uZWxzKCBjaGFubmVscyApe1xyXG4gICAgLy8gY29uc29sZS5sb2coY2hhbm5lbHMgLCBcIiBzZXQgY2hhbm5lbHMgXCIpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBUWVBFLkNIQU5ORUwuU0VUVEVSX0NIQU5ORUwsXHJcbiAgICAgICAgcGF5bG9hZCA6IGNoYW5uZWxzXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRNZXNzYWdlKCBtZXNzYWdlICl7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhtZXNzYWdlICwgXCIgYWRkTWVzc2FnZSBcIilcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6IFRZUEUuQ0hBTk5FTC5BRERfTUVTU0FHRSxcclxuICAgICAgICBwYXlsb2FkIDogbWVzc2FnZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkTWVzc2FnZVNlbmRUb01lKCBtZXNzYWdlICl7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhtZXNzYWdlICwgXCIgYWRkTWVzc2FnZVNlbmRUb01lIFwiKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlIDogVFlQRS5DSEFOTkVMLkFERF9NRVNTQUdFX1NFTkRfVE9fTUUsXHJcbiAgICAgICAgcGF5bG9hZCA6IG1lc3NhZ2VcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VDaGFubmVsQWN0aXZlKCBjaGFubmVsTmFtZSApe1xyXG4gICAgLy8gY29uc29sZS5sb2coY2hhbm5lbE5hbWUgLCBcIiBjaGFuZ2VDaGFubmVsQWN0aXZlIFwiKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlIDogVFlQRS5DSEFOTkVMLlNFVF9BQ1RJVkUsXHJcbiAgICAgICAgcGF5bG9hZCA6IGNoYW5uZWxOYW1lXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRVc2VyT25saW5lKCBpZCApe1xyXG4gICAgLy8gY29uc29sZS5sb2coaWQgLCBcIiBhZGRVc2VyT25saW5lIFwiKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlIDogVFlQRS5DSEFOTkVMLkFERF9VU0VSX09OTElORSxcclxuICAgICAgICBwYXlsb2FkIDogaWRcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVVzZXJPbmxpbmUoIGlkICl7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhpZCAsIFwiIHJlbW92ZVVzZXJPbmxpbmUgXCIpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBUWVBFLkNIQU5ORUwuUkVNT1ZFX1VTRVJfT05MSU5FLFxyXG4gICAgICAgIHBheWxvYWQgOiBpZFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVhZEFsbE1lc3NhZ2VDaGFubmVsQWN0aXZlKCl7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIiByZWFkQWxsTWVzc2FnZUNoYW5uZWxBY3RpdmUgXCIpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBUWVBFLkNIQU5ORUwuUkVBRF9BTExfTUVTU0FHRV9DSEFOTkVMX0FDVElWRVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR0ZXJCb29raW5ncyhib29raW5ncyl7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhib29raW5ncyxcIiBzZXR0ZXJCb29raW5ncyBcIilcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6IFRZUEUuQk9PS0lORy5TRVRURVJfQk9PS0lORyxcclxuICAgICAgICBwYXlsb2FkIDogYm9va2luZ3NcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUJvb2tpbmcoYm9va2luZyl7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhib29raW5nLFwiIGNoYW5nZUJvb2tpbmcgXCIpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBUWVBFLkJPT0tJTkcuQ0hBTkdFX0JPT0tJTkcsXHJcbiAgICAgICAgcGF5bG9hZCA6IGJvb2tpbmdcclxuICAgIH1cclxufVxyXG4iLCJjb25zdCBUWVBFID0gIHtcclxuICBIT01FIDoge1xyXG4gICAgQ0hBTkdFX0xBWU9VVFM6ICdDSEFOR0VfTEFZT1VUUycsXHJcbiAgICBDSEFOR0VfVEhFTUUgIDogJ0NIQU5HRV9USEVNRSdcclxuICB9LFxyXG4gIENIQVQgOiB7XHJcbiAgICBDSEFOR0VfVVNFUl9DSEFUX0RFRkFVTFQ6ICdDSEFOR0VfVVNFUl9DSEFUX0RFRkFVTFQnXHJcbiAgfSxcclxuICBTT0NDS0VUIDoge1xyXG4gICAgU0VUX1NPQ0tFVF9JTzogXCJTRVRfU09DS0VUX0lPXCJcclxuICB9LFxyXG4gIFVTRVI6IHtcclxuICAgIFNFVFRFUl9VU0VSOiBcIlNFVFRFUl9VU0VSXCJcclxuICB9LFxyXG4gIENIQU5ORUw6IHtcclxuICAgIFNFVFRFUl9DSEFOTkVMICAgICAgICA6IFwiU0VUVEVSX0NIQU5ORUxcIixcclxuICAgIEFERF9NRVNTQUdFICAgICAgICAgICA6IFwiQUREX01FU1NBR0VcIixcclxuICAgIEFERF9NRVNTQUdFX1NFTkRfVE9fTUU6IFwiQUREX01FU1NBR0VfU0VORF9UT19NRVwiLFxyXG4gICAgU0VUX0FDVElWRSAgICAgICAgICAgIDogXCJTRVRfQUNUSVZFXCIsXHJcbiAgICBBRERfVVNFUl9PTkxJTkUgICAgICAgOiBcIkFERF9VU0VSX09OTElORVwiLFxyXG4gICAgUkVNT1ZFX1VTRVJfT05MSU5FICAgIDogXCJSRU1PVkVfVVNFUl9PTkxJTkVcIixcclxuICAgIFJFQURfQUxMX01FU1NBR0VfQ0hBTk5FTF9BQ1RJVkU6IFwiUkVBRF9BTExfTUVTU0FHRV9DSEFOTkVMX0FDVElWRVwiXHJcbiAgfSxcclxuICBDT05GSUc6IHtcclxuICAgIFNFVFRFUl9TRU5EX1BFRVIgOiBcIlNFVFRFUl9TRU5EX1BFRVJcIlxyXG4gIH0sXHJcbiAgQk9PS0lORzoge1xyXG4gICAgU0VUVEVSX0JPT0tJTkcgOiBcIlNFVFRFUl9CT09LSU5HXCIsXHJcbiAgICBDSEFOR0VfQk9PS0lORzogXCJDSEFOR0VfQk9PS0lOR1wiXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFRZUEU7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IENoYXQgZnJvbSAnLi9DaGF0L2luZGV4LmpzeCc7XHJcbi8vLyBzb2Nja2V0IFxyXG5pbXBvcnQgc29ja2V0SU9DbGllbnQgZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuaW1wb3J0IHsgc29ja2V0SW5pdGlhbENvbm5lY3QgfSBmcm9tIFwiLi4vbGlicmFyeS9zZXJ2aWNlLmpzXCJcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2VuZFVzZXJPbmxpbmUgOiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5jbGllbnQpKVxyXG4gICAgICAgIHZhciBpbnN0YW5jZUFwcCA9IHRoaXNcclxuICAgICAgICBzb2NrZXRJbml0aWFsQ29ubmVjdChzb2NrZXRJT0NsaWVudCwgaW5zdGFuY2VBcHApXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG4gICAgICAgIHZhciBFVkVOVCAgID0gQ09ORklHX0VWRU5UXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCAhdGhpcy5zdGF0ZS5zZW5kVXNlck9ubGluZSApIHsgXHJcbiAgICAgICAgICAgIGlmKCB0aGlzLnByb3BzLmF1dGggJiYgdGhpcy5wcm9wcy5hdXRoLmZldGNoZWQgKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc29ja2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbmRVc2VyT25saW5lOiB0cnVlIH0sIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc29ja2V0LmVtaXQoRVZFTlQuVVNFUl9PTkxJTkUsIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCAgICA6IHRoaXMucHJvcHMuYXV0aC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlZXIgIDogXCIxMjM0NTY3ODkwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3M6IHRoaXMucHJvcHMuYXV0aC50b2tlbnMudG9rZW5BY2Nlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zb2NrZXQuZW1pdChFVkVOVC5VU0VSX0dFVF9CT09LSU5HLCB7IGlkOiB0aGlzLnByb3BzLmF1dGguaWQsIHR5cGU6IHRoaXMucHJvcHMuYXV0aC5yb2xlX2lkIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcENvbXBvbmVudFwiIGlkPVwiQXBwbGljYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxDaGF0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2xpZW50OiBzdGF0ZS5jbGllbnQsXHJcbiAgICAgICAgc29ja2V0OiBzdGF0ZS5zb2NrZXQsXHJcbiAgICAgICAgYXV0aDogc3RhdGUudXNlcnMsXHJcbiAgICAgICAgdXNlckNoYXQ6IHN0YXRlLnVzZXJDaGF0XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEFwcCk7XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCBCb29raW5nTW9kYWxDb25maXJtIGZyb20gXCIuL0Jvb2tpbmdNb2RhbENvbmZpcm0uanN4XCJcclxuaW1wb3J0IEJvb2tpbmdNb2RhbFNldHRpbmcgZnJvbSBcIi4vQm9va2luZ01vZGFsU2V0dGluZy5qc3hcIlxyXG5pbXBvcnQgQm9va2luZ05vbmUgZnJvbSBcIi4vQm9va2luZ05vbmUuanN4XCJcclxuaW1wb3J0IEJvb2tpbmdMb2FkaW5nIGZyb20gXCIuL0Jvb2tpbmdMb2FkaW5nLmpzeFwiXHJcbmltcG9ydCBCb29raW5nRmluaXNoIGZyb20gXCIuL0Jvb2tpbmdGaW5pc2guanN4XCJcclxuaW1wb3J0IEJvb2tpbmdFcnJvciBmcm9tIFwiLi9Cb29raW5nRXJyb3IuanN4XCJcclxuXHJcbmNsYXNzIEJvb2tpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYm9va2luZ3MsIFwiYm9va2luZ3MuLlwiKVxyXG4gICAgICAgIHZhciB7IGJvb2tpbmdzIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyLW1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8Qm9va2luZ05vbmUgLz5cclxuICAgICAgICAgICAgICAgIDxCb29raW5nTG9hZGluZyAvPlxyXG4gICAgICAgICAgICAgICAgPEJvb2tpbmdFcnJvciAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9va2luZ3MuZGF0YS5tYXAoIGJvb2tpbmcgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoYm9va2luZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Ym9va2luZy5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb29raW5nTW9kYWxTZXR0aW5nICBib29raW5nPXtib29raW5nfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb29raW5nTW9kYWxDb25maXJtIGJvb2tpbmc9e2Jvb2tpbmd9Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb29raW5nRmluaXNoIGJvb2tpbmc9e2Jvb2tpbmd9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBib29raW5nczogc3RhdGUuYm9va2luZyxcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQm9va2luZyk7XHJcbiIsIlxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2tpbmdFcnJvciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cImpzLWJvb2tpbmctZXJyb3JcIiBjbGFzc05hbWU9XCJtb2RhbCBtb2RhbC1ib29raW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYnV0dG9uLXF1ZXN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg44Ko44Op44O844GM55m655Sf44GX44G+44GX44Gf77yaXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cC1ib3gtdG90YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXItYnV0dG9uLXNldHRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuLWJvb2tpbmcgYnRuLXVzZXItY2FuY2VsXCIgaHJlZj1cIiNcIiByZWw9XCJtb2RhbDpjbG9zZVwiPuOCreODo+ODs+OCu+ODqzwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCB7IGNhbGN1bGF0b3JCaWxsIH0gZnJvbSBcIi4uLy4uL2xpYnJhcnkvc2VydmljZS5qc1wiXHJcbmltcG9ydCBDT05GSUcgZnJvbSBcIi4uLy4uL2NvbmZpZ1wiXHJcbmNsYXNzIEJvb2tpbmdGaW5pc2ggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciB7IGF1dGgsIGJvb2tpbmcgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICAgICAgaWYoIWJvb2tpbmcpe1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIFsgd29ya19kYXRlLCBzdGFydCwgZmluaXNoLCBzYWxhcnksIFxyXG4gICAgICAgICAgICBkaWZmZXJlbmNlVGltZSwgcHJpY2UsIHZhdCwgbXlTZXJ2RmVlU2l0dGVyLCBteVNlcnZGZWVFbXBsb3llcixcclxuICAgICAgICAgICAgc3RyaXBlU2VydkZlZSwgdG90YWwgXSA9IGNhbGN1bGF0b3JCaWxsKGJvb2tpbmcsIGF1dGgpXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHJldHVybiAgKFxyXG4gICAgICAgICAgICA8ZGl2ICBpZD17IHRoaXMucHJvcHMuYm9va2luZy5pZCArIFwianMtYm9va2luZy1maW5pc2hcIiB9IGNsYXNzTmFtZT1cIm1vZGFsIG1vZGFsLWJvb2tpbmdcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj7opovnqY3mm7g8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1kYXRldGltZS1waWNrZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJfX2RhdGV0aW1lLXBpY2tlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIHdyYXBwZXJfX2RhdGUtcGlja2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJoZXJvLWljb24gaGVyby1jYWxlbmRhci1jaGVjay1vdXRsaW5lXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1jb250cm9sXCI+e3dvcmtfZGF0ZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIHdyYXBwZXJfX3RpbWUtcGlja2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJoZXJvLWljb24gaGVyby1jbG9jay1vdXRsaW5lXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1jb250cm9sXCI+eyBzdGFydCB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCB3cmFwcGVyX190aW1lLXBpY2tlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8tY2xvY2stY2hlY2stb3V0bGluZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtY29udHJvbFwiPnsgZmluaXNoIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRpc3RpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uLXN0YXRpc3RpY2FsIHNhbGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRcIj48c3Bhbj7mmYLplpPljZjkvqE8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZVwiPnsgc2FsYXJ5IH3vv6U8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb24tc3RhdGlzdGljYWwgZGlmZmVyZW5jZVRpbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+PHNwYW4+5Yip55So5LqI5a6a5pmC6ZaTPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmFsdWVcIj57IGRpZmZlcmVuY2VUaW1lIH0g5pmC6ZaTPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbi1zdGF0aXN0aWNhbCBwcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRcIj48c3Bhbj7jgrfjg4Pjgr/jg7wv5a625LqL5Luj6KGM5paZ6YeRPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmFsdWVcIj57IHByaWNlIH3vv6U8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXV0aC5yb2xlX2lkID09IENPTkZJRy5ST0xFX1VTRVIuc2l0dGVyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0aXN0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uLXN0YXRpc3RpY2FsIHN0cmlwZVNlcnZGZWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPjxzcGFuPuaJi+aVsOaWmTwvc3Bhbj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmFsdWVcIj57IHN0cmlwZVNlcnZGZWUgfe+/pTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uLXN0YXRpc3RpY2FsIG5vdGVcIj7igLvml6Llrprjga7miYvmlbDmlpnjgYznmbrnlJ/jgZfjgb7jgZnjgII8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbi1zdGF0aXN0aWNhbCBteVNlcnZGZWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPjxzcGFuPuOCteODvOODk+OCueWIqeeUqOaWmTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZVwiPnsgbXlTZXJ2RmVlU2l0dGVyIH3vv6U8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbi1zdGF0aXN0aWNhbCBub3RlXCI+4oC744K344K544OG44Og5Yip55So5paZ44Gv44CBNDUw5YaG77yL57Wm5paZ44GuMC4yNSU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXV0aC5yb2xlX2lkID09IENPTkZJRy5ST0xFX1VTRVIuZW1wbG95ZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRpc3RpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbi1zdGF0aXN0aWNhbCBteVNlcnZGZWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPjxzcGFuPuOCteODvOODk+OCueWIqeeUqOaWmTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZVwiPnsgbXlTZXJ2RmVlRW1wbG95ZXIgfe+/pTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uLXN0YXRpc3RpY2FsIG5vdGVcIj7igLvjgrfjg4Pjgr/jg7wv5a625LqL5Luj6KGM5paZ6YeR44GuMjDvvIU8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbi1zdGF0aXN0aWNhbCB2YXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPjxzcGFuPua2iOiyu+eoju+8iDEw77yF77yJPC9zcGFuPiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZVwiPnsgdmF0IH3vv6U8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwLWJveC10b3RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlcl9fdG90YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+5ZCI6KiIPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZSB0ZXh0LWNvbG9yLXdhcm5pbmctY29sb3ItZGFya1wiPnsgdG90YWwgfe+/pTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5sZXQgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGF1dGggICAgICAgICA6IHN0YXRlLnVzZXJzLFxyXG4gICAgICAgIGJvb2tpbmdzICAgICA6IHN0YXRlLmJvb2tpbmcsXHJcbiAgICAgICAgY29udmVydGF0aW9uczogc3RhdGUudXNlckNoYXRcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQm9va2luZ0ZpbmlzaCkiLCJcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2tpbmdMb2FkaW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIFxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cImpzLWJvb2tpbmctbG9hZGluZ1wiIGNsYXNzTmFtZT1cIm1vZGFsIG1vZGFsLWJvb2tpbmdcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1idXR0b24tcXVlc3Rpb25cIj7jg4fjg7zjgr/jgpLoqq3jgb/ovrzjgpPjgafjgYTjgb7jgZnjgILjgZfjgbDjgonjgY/jgYrlvoXjgaHjgY/jgaDjgZXjgYQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MgcHJvZ3Jlc3Mtc3VjY2Vzc1wiPjxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtbG9hZGRpbmdcIj48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAtYm94LXRvdGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyLWJ1dHRvbi1zZXR0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0bi1ib29raW5nIGJ0bi11c2VyLWNhbmNlbFwiIGhyZWY9XCIjXCIgcmVsPVwibW9kYWw6Y2xvc2VcIj7jgq3jg6Pjg7Pjgrvjg6s8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCB7IHNlbmRCb29raW5nVXBkYXRlLCBjYWxjdWxhdG9yQmlsbCB9IGZyb20gXCIuLi8uLi9saWJyYXJ5L3NlcnZpY2UuanNcIlxyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXHJcbmltcG9ydCBDT05GSUcgZnJvbSBcIi4uLy4uL2NvbmZpZ1wiXHJcbmNsYXNzIEJvb2tpbmdNb2RhbENvbmZpcm0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNhbmNlbEFjY2VwdCA9ICgpID0+IHtcclxuICAgICAgICB2YXIgeyBib29raW5nIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgJChcIiNcIisgYm9va2luZy5pZCArXCJqcy1ib29raW5nLXNldHRpbmdcIikubW9kYWwoe1xyXG4gICAgICAgICAgICBlc2NhcGVDbG9zZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNsaWNrQ2xvc2U6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93Q2xvc2U6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZpbmFsQWNjZXB0ID0gKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciB7IGlkLCB3b3JrX2RhdGUsIHN0YXJ0LCBmaW5pc2ggfSA9IHRoaXMucHJvcHMuYm9va2luZ1xyXG4gICAgICAgIHZhciBjaGFubmVsQWN0aXZlICAgPSB0aGlzLnByb3BzLmNvbnZlcnRhdGlvbnMuZmluZChjaGFubmVsID0+IGNoYW5uZWwuaXNBY3RpdmUpXHJcbiAgICAgICAgLy8vLyBkaXNwYXRjaCB0ZXN0XHJcbiAgICAgICAgdmFyIGJvb2tpbmdVcGRhdGUgPSB7XHJcbiAgICAgICAgICAgIGJvb2tpbmdfaWQgICAgIDogaWQsXHJcbiAgICAgICAgICAgIHNpdHRlcl9hY2NlcHQgIDogMSxcclxuICAgICAgICAgICAgc3RhdHVzICAgICAgICAgOiAxLFxyXG4gICAgICAgICAgICBlbXBsb3llcl9hY2NlcHQ6IDEsXHJcbiAgICAgICAgICAgIHN0YXJ0ICAgICAgICAgIDogc3RhcnQsXHJcbiAgICAgICAgICAgIGZpbmlzaCAgICAgICAgIDogZmluaXNoLFxyXG4gICAgICAgICAgICB3b3JrX2RhdGUgICAgICA6IHdvcmtfZGF0ZSxcclxuICAgICAgICAgICAgdG9rZW5BY2Nlc3MgICAgOiB0aGlzLnByb3BzLmF1dGgudG9rZW5zLnRva2VuQWNjZXNzLFxyXG4gICAgICAgICAgICB1c2VySWQgICAgICAgICA6IHRoaXMucHJvcHMuYXV0aC5pZCxcclxuICAgICAgICAgICAgY2hhbm5lbE5hbWUgICAgOiBjaGFubmVsQWN0aXZlLmNoYW5uZWxOYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbmRCb29raW5nVXBkYXRlKGJvb2tpbmdVcGRhdGUpXHJcbiAgICAgICAgJC5tb2RhbC5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgWyB3b3JrX2RhdGUsIHN0YXJ0LCBmaW5pc2gsIHNhbGFyeSwgXHJcbiAgICAgICAgICAgIGRpZmZlcmVuY2VUaW1lLCBwcmljZSwgdmF0LCBteVNlcnZGZWVTaXR0ZXIsIG15U2VydkZlZUVtcGxveWVyLFxyXG4gICAgICAgICAgICBzdHJpcGVTZXJ2RmVlLCB0b3RhbCBdID0gY2FsY3VsYXRvckJpbGwodGhpcy5wcm9wcy5ib29raW5nLCB0aGlzLnByb3BzLmF1dGgpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHJldHVybiAgKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPXsgdGhpcy5wcm9wcy5ib29raW5nLmlkICsgXCJqcy1ib29raW5nLWNvbmZpcm1cIiB9IGNsYXNzTmFtZT1cIm1vZGFsIG1vZGFsLWJvb2tpbmdcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+6KaL56mN5pu4PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctZGF0ZXRpbWUtcGlja2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyX19kYXRldGltZS1waWNrZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCB3cmFwcGVyX19kYXRlLXBpY2tlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8tY2FsZW5kYXItY2hlY2stb3V0bGluZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtY29udHJvbFwiPnt3b3JrX2RhdGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCB3cmFwcGVyX190aW1lLXBpY2tlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8tY2xvY2stb3V0bGluZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtY29udHJvbFwiPnsgc3RhcnQgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgd3JhcHBlcl9fdGltZS1waWNrZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLWNsb2NrLWNoZWNrLW91dGxpbmVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWNvbnRyb2xcIj57IGZpbmlzaCB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0aXN0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbi1zdGF0aXN0aWNhbCBzYWxhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+PHNwYW4+5pmC6ZaT5Y2Y5L6hPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmFsdWVcIj57IHNhbGFyeSB977+lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uLXN0YXRpc3RpY2FsIGRpZmZlcmVuY2VUaW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPjxzcGFuPuWIqeeUqOS6iOWumuaZgumWkzwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZhbHVlXCI+eyBkaWZmZXJlbmNlVGltZSB9IOaZgumWkzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb24tc3RhdGlzdGljYWwgcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+PHNwYW4+44K344OD44K/44O8L+WutuS6i+S7o+ihjOaWmemHkTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZhbHVlXCI+eyBwcmljZSB977+lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmF1dGgucm9sZV9pZCA9PSBDT05GSUcuUk9MRV9VU0VSLnNpdHRlciAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGlzdGljYWxcIj4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uLXN0YXRpc3RpY2FsIHN0cmlwZVNlcnZGZWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPjxzcGFuPuaJi+aVsOaWmTwvc3Bhbj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmFsdWVcIj57IHN0cmlwZVNlcnZGZWUgfe+/pTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uLXN0YXRpc3RpY2FsIG5vdGVcIj7igLvml6Llrprjga7miYvmlbDmlpnjgYznmbrnlJ/jgZfjgb7jgZnjgII8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbi1zdGF0aXN0aWNhbCBteVNlcnZGZWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPjxzcGFuPuOCteODvOODk+OCueWIqeeUqOaWmTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZVwiPnsgbXlTZXJ2RmVlU2l0dGVyIH3vv6U8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbi1zdGF0aXN0aWNhbCBub3RlXCI+4oC744K344K544OG44Og5Yip55So5paZ44Gv44CBNDUw5YaG77yL57Wm5paZ44GuMC4yNSU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXV0aC5yb2xlX2lkID09IENPTkZJRy5ST0xFX1VTRVIuZW1wbG95ZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRpc3RpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbi1zdGF0aXN0aWNhbCBteVNlcnZGZWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPjxzcGFuPuOCteODvOODk+OCueWIqeeUqOaWmTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZVwiPnsgbXlTZXJ2RmVlRW1wbG95ZXIgfe+/pTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uLXN0YXRpc3RpY2FsIG5vdGVcIj7igLvjgrfjg4Pjgr/jg7wv5a625LqL5Luj6KGM5paZ6YeR44GuMjDvvIU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbi1zdGF0aXN0aWNhbCB2YXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPjxzcGFuPua2iOiyu+eoju+8iDEw77yF77yJPC9zcGFuPiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZVwiPnsgdmF0IH3vv6U8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwLWJveC10b3RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlcl9fdG90YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+5ZCI6KiIPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZSB0ZXh0LWNvbG9yLXdhcm5pbmctY29sb3ItZGFya1wiPnsgdG90YWwgfe+/pTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1idXR0b24tcXVlc3Rpb25cIj7kuIroqJjlhoXlrrnjgafjgYrplpPpgZXjgYTjgYLjgorjgb7jgZvjgpPjgYvvvJ88L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXItYnV0dG9uLXNldHRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0bi1ib29raW5nIGJ0bi11c2VyLWNhbmNlbFwiIG9uQ2xpY2s9eyB0aGlzLmNhbmNlbEFjY2VwdCB9PuOCreODo+ODs+OCu+ODqzwvYT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXV0aC5yb2xlX2lkID09IENPTkZJRy5ST0xFX1VTRVIuZW1wbG95ZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0bi1ib29raW5nIGJ0bi11c2VyLWFwcHJvdmVkXCIgb25DbGljaz17IHRoaXMuZmluYWxBY2NlcHQgfT7kuojntITjgZnjgos8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXV0aCAgICAgICAgIDogc3RhdGUudXNlcnMsXHJcbiAgICAgICAgY29udmVydGF0aW9uczogc3RhdGUudXNlckNoYXRcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQm9va2luZ01vZGFsQ29uZmlybSlcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgQ09ORklHIGZyb20gXCIuLi8uLi9jb25maWdcIlxyXG5pbXBvcnQgeyBjaGFuZ2VCb29raW5nIH0gZnJvbSBcIi4uLy4uL2FjdGlvblwiXHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBkYXRlcGlja2VyRmFjdG9yeSBmcm9tICdqcXVlcnktZGF0ZXBpY2tlcidcclxuaW1wb3J0IGRhdGVwaWNrZXJKQUZhY3RvcnkgZnJvbSAnanF1ZXJ5LWRhdGVwaWNrZXIvaTE4bi9qcXVlcnkudWkuZGF0ZXBpY2tlci1qYSdcclxuaW1wb3J0ICd0aW1lcGlja2VyJztcclxuaW1wb3J0IHsgc2VuZEJvb2tpbmdVcGRhdGUsIGNhbGN1bGF0b3JCaWxsIH0gZnJvbSBcIi4uLy4uL2xpYnJhcnkvc2VydmljZS5qc1wiXHJcbi8vIEp1c3QgcGFzcyB5b3VyIGpxdWVyeSBpbnN0YW5jZSBhbmQgeW91J3JlIGRvbmVcclxuZGF0ZXBpY2tlckZhY3RvcnkoJCk7XHJcbmRhdGVwaWNrZXJKQUZhY3RvcnkoJCk7XHJcblxyXG5jbGFzcyBCb29raW5nTW9kYWxTZXR0aW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdmFyIHsgYm9va2luZyB9ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpZCAgICAgICAgICAgICA6IGJvb2tpbmcuaWQsXHJcbiAgICAgICAgICAgIHdvcmtfZGF0ZSAgICAgIDogYm9va2luZy53b3JrX2RhdGUsXHJcbiAgICAgICAgICAgIHN0YXJ0ICAgICAgICAgIDogYm9va2luZy5zdGFydCxcclxuICAgICAgICAgICAgZmluaXNoICAgICAgICAgOiBib29raW5nLmZpbmlzaCxcclxuICAgICAgICAgICAgc2FsYXJ5ICAgICAgICAgOiBib29raW5nLnNhbGFyeSxcclxuICAgICAgICAgICAgc2l0dGVyX2FjY2VwdCAgOiBib29raW5nLnNpdHRlcl9hY2NlcHQsXHJcbiAgICAgICAgICAgIGVtcGxveWVyX2FjY2VwdDogYm9va2luZy5lbXBsb3llcl9hY2NlcHRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG5cclxuICAgICAgICB2YXIgX2luc3RhbmNlICAgICAgICAgID0gdGhpcyxcclxuICAgICAgICAgICAgc2VsZWN0b3JUaW1lU3RhcnQgID0gJyMnICsgdGhpcy5zdGF0ZS5pZCArIFwianMtYm9va2luZy1zZXR0aW5nIC50aW1lcGlja2VyU3RhcnRcIixcclxuICAgICAgICAgICAgc2VsZWN0b3JUaW1lRmluaXNoID0gJyMnICsgdGhpcy5zdGF0ZS5pZCArIFwianMtYm9va2luZy1zZXR0aW5nIC50aW1lcGlja2VyRmluaXNoXCIsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yRGF0ZXBpY2tlciA9ICcjJyArIHRoaXMuc3RhdGUuaWQgKyBcImpzLWJvb2tpbmctc2V0dGluZyAuZGF0ZXBpY2tlclwiXHJcblxyXG4gICAgICAgICQoc2VsZWN0b3JUaW1lU3RhcnQpLnRpbWVwaWNrZXIoeyAndGltZUZvcm1hdCc6ICdIOmknIH0pXHJcbiAgICAgICAgJChzZWxlY3RvclRpbWVGaW5pc2gpLnRpbWVwaWNrZXIoeyAndGltZUZvcm1hdCc6ICdIOmknIH0pXHJcblxyXG4gICAgICAgICQoc2VsZWN0b3JUaW1lU3RhcnQpLm9uKCdjaGFuZ2VUaW1lJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGFydENoYW5nZSA9ICQodGhpcykudmFsKClcclxuICAgICAgICAgICAgX2luc3RhbmNlLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0OiBzdGFydENoYW5nZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJChzZWxlY3RvclRpbWVGaW5pc2gpLm9uKCdjaGFuZ2VUaW1lJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBmaW5pc2hDaGFuZ2UgPSAkKHRoaXMpLnZhbCgpXHJcbiAgICAgICAgICAgIF9pbnN0YW5jZS5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBmaW5pc2g6IGZpbmlzaENoYW5nZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoc2VsZWN0b3JEYXRlcGlja2VyKS5kYXRlcGlja2VyKHsgXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6ICd5eS1tbS1kZCcsXHJcbiAgICAgICAgICAgIC8vIGJlZm9yZVNob3dEYXk6IGZ1bmN0aW9uKGQpIHtcclxuICAgICAgICAgICAgLy8gICAgIC8vIG5vcm1hbGl6ZSB0aGUgZGF0ZSBmb3Igc2VhcmNoaW5nIGluIGFycmF5XHJcbiAgICAgICAgICAgIC8vICAgICB2YXIgcmVzdWx0ID0gXCIyMDIwLTA5LTI2LDIwMjAtMDktMTIsMjAyMC0wOS0wOCwyMDIwLTA5LTEwXCI7XHJcbiAgICAgICAgICAgIC8vICAgICB2YXIgZGF0ZWxpc3QgPSByZXN1bHQuc3BsaXQoXCIsXCIpOyAvLyBwb3B1bGF0ZSB0aGUgYXJyYXlcclxuICAgICAgICAgICAgLy8gICAgIHZhciBkYXkgPSAoXCIwMFwiICsgZC5nZXREYXRlKCkpLnNsaWNlKC0yKSxcclxuICAgICAgICAgICAgLy8gICAgIG1vbnRoID0gKFwiMDBcIiArIChkLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpLFxyXG4gICAgICAgICAgICAvLyAgICAgeWVhciA9IGQuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgICAgICAgLy8gICAgIGZ1bGxEYXRlID0geWVhciArIFwiLVwiICsgbW9udGggKyBcIi1cIiArIGRheVxyXG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIFskLmluQXJyYXkoZnVsbERhdGUsIGRhdGVsaXN0KSA+PSAwID8gdHJ1ZSA6IGZhbHNlLCBcIlwiXVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIG9uU2VsZWN0OiBmdW5jdGlvbihkYXRlVGV4dCwgaW5zdCkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBfaW5zdGFuY2Uuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdvcmtfZGF0ZTogZGF0ZVRleHRcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciB7IGJvb2tpbmcgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBpZiggYm9va2luZy51cGRhdGUgPT0gdHJ1ZSApe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlkICAgICAgICAgICAgIDogYm9va2luZy5pZCxcclxuICAgICAgICAgICAgICAgIHdvcmtfZGF0ZSAgICAgIDogYm9va2luZy53b3JrX2RhdGUsXHJcbiAgICAgICAgICAgICAgICBzdGFydCAgICAgICAgICA6IGJvb2tpbmcuc3RhcnQsXHJcbiAgICAgICAgICAgICAgICBmaW5pc2ggICAgICAgICA6IGJvb2tpbmcuZmluaXNoLFxyXG4gICAgICAgICAgICAgICAgc2FsYXJ5ICAgICAgICAgOiBib29raW5nLnNhbGFyeSxcclxuICAgICAgICAgICAgICAgIHNpdHRlcl9hY2NlcHQgIDogYm9va2luZy5zaXR0ZXJfYWNjZXB0LFxyXG4gICAgICAgICAgICAgICAgZW1wbG95ZXJfYWNjZXB0OiBib29raW5nLmVtcGxveWVyX2FjY2VwdFxyXG5cclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgYm9va2luZyA9IHsgLi4uIHRoaXMucHJvcHMuYm9va2luZywgdXBkYXRlOiBmYWxzZSB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGNoYW5nZUJvb2tpbmcoYm9va2luZykpXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdG9yVGltZVN0YXJ0ICA9ICcjJyArIHRoaXMuc3RhdGUuaWQgKyBcImpzLWJvb2tpbmctc2V0dGluZyAudGltZXBpY2tlclN0YXJ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3JUaW1lRmluaXNoID0gJyMnICsgdGhpcy5zdGF0ZS5pZCArIFwianMtYm9va2luZy1zZXR0aW5nIC50aW1lcGlja2VyRmluaXNoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3JEYXRlcGlja2VyID0gJyMnICsgdGhpcy5zdGF0ZS5pZCArIFwianMtYm9va2luZy1zZXR0aW5nIC5kYXRlcGlja2VyXCJcclxuICAgICAgICAgICAgICAgICQoc2VsZWN0b3JUaW1lU3RhcnQpLnZhbCh0aGlzLnN0YXRlLnN0YXJ0KVxyXG4gICAgICAgICAgICAgICAgJChzZWxlY3RvclRpbWVGaW5pc2gpLnZhbCh0aGlzLnN0YXRlLmZpbmlzaClcclxuICAgICAgICAgICAgICAgICQoc2VsZWN0b3JEYXRlcGlja2VyKS52YWwodGhpcy5zdGF0ZS53b3JrX2RhdGUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNpdHRlckFjY2VwdEJpbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgdmFyIFsgXHJcbiAgICAgICAgICAgIHdvcmtfZGF0ZSxcclxuICAgICAgICAgICAgc3RhcnQsXHJcbiAgICAgICAgICAgIGZpbmlzaCxcclxuICAgICAgICAgICAgc2FsYXJ5LFxyXG4gICAgICAgICAgICBkaWZmZXJlbmNlVGltZSxcclxuICAgICAgICAgICAgcHJpY2UsXHJcbiAgICAgICAgICAgIHZhdCxcclxuICAgICAgICAgICAgbXlTZXJ2RmVlU2l0dGVyLFxyXG4gICAgICAgICAgICBteVNlcnZGZWVFbXBsb3llcixcclxuICAgICAgICAgICAgc3RyaXBlU2VydkZlZSxcclxuICAgICAgICAgICAgdG90YWxcclxuICAgICAgICBdID0gY2FsY3VsYXRvckJpbGwodGhpcy5zdGF0ZSwgdGhpcy5wcm9wcy5hdXRoKVxyXG5cclxuICAgICAgICB2YXIgY2hhbm5lbEFjdGl2ZSAgID0gdGhpcy5wcm9wcy5jb252ZXJ0YXRpb25zLmZpbmQoY2hhbm5lbCA9PiBjaGFubmVsLmlzQWN0aXZlKVxyXG4gICAgICAgIC8vLy8gZGlzcGF0Y2ggdGVzdFxyXG4gICAgICAgIHZhciBib29raW5nVXBkYXRlID0ge1xyXG4gICAgICAgICAgICBib29raW5nX2lkICAgICA6IHRoaXMuc3RhdGUuaWQsXHJcbiAgICAgICAgICAgIHNpdHRlcl9hY2NlcHQgIDogMSxcclxuICAgICAgICAgICAgc3RhcnQgICAgICAgICAgOiBzdGFydCxcclxuICAgICAgICAgICAgZmluaXNoICAgICAgICAgOiBmaW5pc2gsXHJcbiAgICAgICAgICAgIHdvcmtfZGF0ZSAgICAgIDogd29ya19kYXRlLFxyXG4gICAgICAgICAgICB0b2tlbkFjY2VzcyAgICA6IHRoaXMucHJvcHMuYXV0aC50b2tlbnMudG9rZW5BY2Nlc3MsXHJcbiAgICAgICAgICAgIHVzZXJJZCAgICAgICAgIDogdGhpcy5wcm9wcy5hdXRoLmlkLFxyXG4gICAgICAgICAgICBjaGFubmVsTmFtZSAgICA6IGNoYW5uZWxBY3RpdmUuY2hhbm5lbE5hbWVcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VuZEJvb2tpbmdVcGRhdGUoYm9va2luZ1VwZGF0ZSlcclxuICAgICAgICAkLm1vZGFsLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgICBlbXBsb3llckFjY2VwdEJpbGwgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIHZhciBbIFxyXG4gICAgICAgICAgICB3b3JrX2RhdGUsXHJcbiAgICAgICAgICAgIHN0YXJ0LFxyXG4gICAgICAgICAgICBmaW5pc2gsXHJcbiAgICAgICAgICAgIHNhbGFyeSxcclxuICAgICAgICAgICAgZGlmZmVyZW5jZVRpbWUsXHJcbiAgICAgICAgICAgIHByaWNlLFxyXG4gICAgICAgICAgICB2YXQsXHJcbiAgICAgICAgICAgIG15U2VydkZlZVNpdHRlcixcclxuICAgICAgICAgICAgbXlTZXJ2RmVlRW1wbG95ZXIsXHJcbiAgICAgICAgICAgIHN0cmlwZVNlcnZGZWUsXHJcbiAgICAgICAgICAgIHRvdGFsXHJcbiAgICAgICAgXSA9IGNhbGN1bGF0b3JCaWxsKHRoaXMuc3RhdGUsIHRoaXMucHJvcHMuYXV0aClcclxuXHJcbiAgICAgICAgdmFyIGNoYW5uZWxBY3RpdmUgPSB0aGlzLnByb3BzLmNvbnZlcnRhdGlvbnMuZmluZChjaGFubmVsID0+IGNoYW5uZWwuaXNBY3RpdmUpXHJcbiAgICAgICAgLy8vLyBkaXNwYXRjaCB0ZXN0XHJcbiAgICAgICAgdmFyIGJvb2tpbmdVcGRhdGUgPSB7XHJcbiAgICAgICAgICAgIGJvb2tpbmdfaWQgICAgIDogdGhpcy5zdGF0ZS5pZCxcclxuICAgICAgICAgICAgZW1wbG95ZXJfYWNjZXB0OiAxLFxyXG4gICAgICAgICAgICBzdGFydCAgICAgICAgICA6IHN0YXJ0LFxyXG4gICAgICAgICAgICBmaW5pc2ggICAgICAgICA6IGZpbmlzaCxcclxuICAgICAgICAgICAgd29ya19kYXRlICAgICAgOiB3b3JrX2RhdGUsXHJcbiAgICAgICAgICAgIHRva2VuQWNjZXNzICAgIDogdGhpcy5wcm9wcy5hdXRoLnRva2Vucy50b2tlbkFjY2VzcyxcclxuICAgICAgICAgICAgdXNlcklkICAgICAgICAgOiB0aGlzLnByb3BzLmF1dGguaWQsXHJcbiAgICAgICAgICAgIGNoYW5uZWxOYW1lICAgIDogY2hhbm5lbEFjdGl2ZS5jaGFubmVsTmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZW5kQm9va2luZ1VwZGF0ZShib29raW5nVXBkYXRlKVxyXG4gICAgICAgICQubW9kYWwuY2xvc2UoKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgdmFyIFsgXHJcbiAgICAgICAgICAgIHdvcmtfZGF0ZSxcclxuICAgICAgICAgICAgc3RhcnQsXHJcbiAgICAgICAgICAgIGZpbmlzaCxcclxuICAgICAgICAgICAgc2FsYXJ5LFxyXG4gICAgICAgICAgICBkaWZmZXJlbmNlVGltZSxcclxuICAgICAgICAgICAgcHJpY2UsXHJcbiAgICAgICAgICAgIHZhdCxcclxuICAgICAgICAgICAgbXlTZXJ2RmVlU2l0dGVyLFxyXG4gICAgICAgICAgICBteVNlcnZGZWVFbXBsb3llcixcclxuICAgICAgICAgICAgc3RyaXBlU2VydkZlZSxcclxuICAgICAgICAgICAgdG90YWxcclxuICAgICAgICBdID0gY2FsY3VsYXRvckJpbGwodGhpcy5zdGF0ZSwgdGhpcy5wcm9wcy5hdXRoKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBib29raW5nUHJvcHMgPSB0aGlzLnByb3BzLmJvb2tpbmdcclxuICAgICAgICB2YXIgaXNFZGl0ID0gYm9va2luZ1Byb3BzLnN0YXJ0ICE9IHN0YXJ0IHx8IGJvb2tpbmdQcm9wcy5maW5pc2ggIT0gZmluaXNoIHx8IGJvb2tpbmdQcm9wcy53b3JrX2RhdGUgIT0gd29ya19kYXRlXHJcbiAgICAgICAgdmFyIGNsYXNzQnRuU2l0dGVyLFxyXG4gICAgICAgICAgICB0ZXh0QnRuU2l0dGVyLFxyXG4gICAgICAgICAgICBjbGlja0J0blNpdHRlcixcclxuICAgICAgICAgICAgY2xhc3NCdG5FbXBsb3llcixcclxuICAgICAgICAgICAgdGV4dEJ0bkVtcGxveWVyLFxyXG4gICAgICAgICAgICBjbGlja0J0bkVtcGxveWVyXHJcblxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuYXV0aC5yb2xlX2lkID09IENPTkZJRy5ST0xFX1VTRVIuc2l0dGVyKXtcclxuXHJcbiAgICAgICAgICAgIGNsYXNzQnRuU2l0dGVyICAgPSBcImJ0bi1ib29raW5nIGJ0bi1zaXR0ZXItYWNjZXB0XCIsXHJcbiAgICAgICAgICAgIHRleHRCdG5TaXR0ZXIgICAgPSBcIuOCt+ODg+OCv+ODvOaJv+iqjVwiLFxyXG4gICAgICAgICAgICBjbGlja0J0blNpdHRlciAgID0gdGhpcy5zaXR0ZXJBY2NlcHRCaWxsLFxyXG5cclxuICAgICAgICAgICAgY2xhc3NCdG5FbXBsb3llciA9IFwiYnRuLWJvb2tpbmcgYnRuLWVtcGxveWVyLWFjY2VwdCBkaXNhYmxlZFwiLFxyXG4gICAgICAgICAgICAvLy8gRW1wbG95ZXIgY2jGsGEgY2jhuqVwIG5o4bqtbiA6IOWIqeeUqOiAheacquaJv+iqjVxyXG4gICAgICAgICAgICAvLy8gRW1wbG95ZXIgxJHDoyDEkcOjIGNo4bqlcCBuaOG6rW46IOWIqeeUqOiAheaJv+iqjeOBl+OBn1xyXG4gICAgICAgICAgICB0ZXh0QnRuRW1wbG95ZXIgID0gdGhpcy5zdGF0ZS5lbXBsb3llcl9hY2NlcHQgPyBcIuWIqeeUqOiAheaJv+iqjeOBl+OBn1wiIDogXCLliKnnlKjogIXmnKrmib/oqo1cIixcclxuICAgICAgICAgICAgY2xpY2tCdG5FbXBsb3llciA9IG51bGxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuc2l0dGVyX2FjY2VwdCAmJiAhaXNFZGl0KXtcclxuICAgICAgICAgICAgICAgIGNsYXNzQnRuU2l0dGVyICs9ICcgZGlzYWJsZWQnXHJcbiAgICAgICAgICAgICAgICB0ZXh0QnRuU2l0dGVyID0gXCLliKnnlKjogIXmib/oqo3jgZfjgZ9cIlxyXG4gICAgICAgICAgICAgICAgY2xpY2tCdG5TaXR0ZXIgICA9IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5hdXRoLnJvbGVfaWQgPT0gQ09ORklHLlJPTEVfVVNFUi5lbXBsb3llcil7XHJcblxyXG5cclxuICAgICAgICAgICAgY2xhc3NCdG5FbXBsb3llciAgID0gXCJidG4tYm9va2luZyBidG4tZW1wbG95ZXItYWNjZXB0XCIsXHJcbiAgICAgICAgICAgIHRleHRCdG5FbXBsb3llciAgICA9IFwi5Yip55So6ICF5om/6KqNXCIsXHJcbiAgICAgICAgICAgIGNsaWNrQnRuRW1wbG95ZXIgICA9IHRoaXMuZW1wbG95ZXJBY2NlcHRCaWxsLFxyXG5cclxuICAgICAgICAgICAgY2xhc3NCdG5TaXR0ZXIgPSBcImJ0bi1ib29raW5nIGJ0bi1zaXR0ZXItYWNjZXB0IGRpc2FibGVkXCIsXHJcbiAgICAgICAgICAgIC8vLyBzaXR0ZXIgY2jGsGEgY2jhuqVwIG5o4bqtbiA6IOOCt+ODg+OCv+ODvOacquaJv+iqjVxyXG4gICAgICAgICAgICAvLy8gc2l0dGVyIMSRw6MgxJHDoyBjaOG6pXAgbmjhuq1uOiDjgrfjg4Pjgr/jg7zmib/oqo3jgZfjgZ9cclxuICAgICAgICAgICAgdGV4dEJ0blNpdHRlciAgPSB0aGlzLnN0YXRlLnNpdHRlcl9hY2NlcHQgPyBcIuOCt+ODg+OCv+ODvOaJv+iqjeOBl+OBn1wiIDogXCLjgrfjg4Pjgr/jg7zmnKrmib/oqo1cIixcclxuICAgICAgICAgICAgY2xpY2tCdG5TaXR0ZXIgPSBudWxsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLmVtcGxveWVyX2FjY2VwdCAmJiAhaXNFZGl0KXtcclxuICAgICAgICAgICAgICAgIGNsYXNzQnRuRW1wbG95ZXIgKz0gJyBkaXNhYmxlZCdcclxuICAgICAgICAgICAgICAgIHRleHRCdG5FbXBsb3llciA9IFwi44K344OD44K/44O85om/6KqN44GX44GfXCJcclxuICAgICAgICAgICAgICAgIGNsaWNrQnRuRW1wbG95ZXIgICA9IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuXHJcblxyXG4gICAgICAgIHJldHVybiAgKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPXsgdGhpcy5zdGF0ZS5pZCArIFwianMtYm9va2luZy1zZXR0aW5nXCIgfSBjbGFzc05hbWU9XCJtb2RhbCBtb2RhbC1ib29raW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+5pel5pmC6Kq/5pW0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctZGF0ZXRpbWUtcGlja2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyX19kYXRldGltZS1waWNrZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCB3cmFwcGVyX19kYXRlLXBpY2tlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8tY2FsZW5kYXItY2hlY2stb3V0bGluZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJkYXRlcGlja2VyIGlucHV0LWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIGF1dG9Db21wbGV0ZT1cImZhbHNlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9eyB3b3JrX2RhdGUgfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIHdyYXBwZXJfX3RpbWUtcGlja2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJoZXJvLWljb24gaGVyby1jbG9jay1vdXRsaW5lXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInRpbWVwaWNrZXJTdGFydCBpbnB1dC1jb250cm9sXCIgYXV0b0NvbXBsZXRlPVwiZmFsc2VcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9eyBzdGFydCB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgd3JhcHBlcl9fdGltZS1waWNrZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLWNsb2NrLWNoZWNrLW91dGxpbmVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidGltZXBpY2tlckZpbmlzaCBpbnB1dC1jb250cm9sXCIgYXV0b0NvbXBsZXRlPVwiZmFsc2VcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17IGZpbmlzaCB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICB7IGRpZmZlcmVuY2VUaW1lIDw9IDAgPyBcIue1guS6huaZgumWk+OBr+mWi+Wni+aZgumWk+OCiOOCiuW+jOOBp+OBquOBkeOCjOOBsOOBquOCiuOBvuOBm+OCk+OAglwiIDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGlzdGljYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb24tc3RhdGlzdGljYWwgc2FsYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPjxzcGFuPuaZgumWk+WNmOS+oTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZhbHVlXCI+eyBzYWxhcnkgfe+/pTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbi1zdGF0aXN0aWNhbCBkaWZmZXJlbmNlVGltZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRcIj48c3Bhbj7liKnnlKjkuojlrprmmYLplpM8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZVwiPnsgZGlmZmVyZW5jZVRpbWUgfSDmmYLplpM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uLXN0YXRpc3RpY2FsIHByaWNlLXdpdGgtdGltZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRcIj48c3Bhbj7jgrfjg4Pjgr/jg7wv5a625LqL5Luj6KGM5paZ6YeRPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmFsdWVcIj57IHByaWNlIH3vv6U8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXV0aC5yb2xlX2lkID09IENPTkZJRy5ST0xFX1VTRVIuc2l0dGVyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0aXN0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb24tc3RhdGlzdGljYWwgc3RyaXBlU2VydkZlZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+PHNwYW4+5omL5pWw5paZPC9zcGFuPiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZVwiPnsgc3RyaXBlU2VydkZlZSB977+lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb24tc3RhdGlzdGljYWwgbm90ZVwiPuKAu+aXouWumuOBruaJi+aVsOaWmeOBjOeZuueUn+OBl+OBvuOBmeOAgjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uLXN0YXRpc3RpY2FsIG15U2VydkZlZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+PHNwYW4+44K144O844OT44K55Yip55So5paZPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZhbHVlXCI+eyBteVNlcnZGZWVTaXR0ZXIgfe+/pTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uLXN0YXRpc3RpY2FsIG5vdGVcIj7igLvjgrfjgrnjg4bjg6DliKnnlKjmlpnjga/jgIE0NTDlhobvvIvntabmlpnjga4wLjI1JTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hdXRoLnJvbGVfaWQgPT0gQ09ORklHLlJPTEVfVVNFUi5lbXBsb3llciAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGlzdGljYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uLXN0YXRpc3RpY2FsIG15U2VydkZlZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+PHNwYW4+44K144O844OT44K55Yip55So5paZPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZhbHVlXCI+eyBteVNlcnZGZWVFbXBsb3llciB977+lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb24tc3RhdGlzdGljYWwgbm90ZVwiPuKAu+OCt+ODg+OCv+ODvC/lrrbkuovku6PooYzmlpnph5Hjga4yMO+8hTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uLXN0YXRpc3RpY2FsIHZhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+PHNwYW4+5raI6LK756iO77yIMTDvvIXvvIk8L3NwYW4+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZhbHVlXCI+eyB2YXQgfe+/pTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAtYm94LXRvdGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyX190b3RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRcIj7lkIjoqIg8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZhbHVlIHRleHQtY29sb3Itd2FybmluZy1jb2xvci1kYXJrXCI+eyB0b3RhbCB977+lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJ1dHRvbi1xdWVzdGlvblwiPuS4iuiomOWGheWuueOBp+OBiumWk+mBleOBhOOBguOCiuOBvuOBm+OCk+OBi++8nzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgZGlmZmVyZW5jZVRpbWUgPCAwID8gXCJkLW5vbmVcIiA6IFwid3JhcHBlci1idXR0b24tc2V0dGluZ1wiIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9eyBjbGFzc0J0blNpdHRlciB9IG9uQ2xpY2s9IHsgY2xpY2tCdG5TaXR0ZXIgfT4geyB0ZXh0QnRuU2l0dGVyIH0gPC9hPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXsgY2xhc3NCdG5FbXBsb3llciB9IG9uQ2xpY2s9IHsgY2xpY2tCdG5FbXBsb3llciB9PiB7IHRleHRCdG5FbXBsb3llciB9IDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGF1dGggICAgICAgICA6IHN0YXRlLnVzZXJzLFxyXG4gICAgICAgIGNvbnZlcnRhdGlvbnM6IHN0YXRlLnVzZXJDaGF0XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEJvb2tpbmdNb2RhbFNldHRpbmcpIiwiXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9va2luZ05vbmUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuICAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJqcy1ib29raW5nLW5vbmVcIiBjbGFzc05hbWU9XCJtb2RhbCBtb2RhbC1ib29raW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYnV0dG9uLXF1ZXN0aW9uXCI+44GT44Gu44Om44O844K244O844Gr44Gv44CB44G+44Gg44K544Kx44K444Ol44O844Or44GM6Kit5a6a44GV44KM44Gm44GE44G+44Gb44KTPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwLWJveC10b3RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlci1idXR0b24tc2V0dGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4tYm9va2luZyBidG4tdXNlci1jYW5jZWxcIiBocmVmPVwiI1wiIHJlbD1cIm1vZGFsOmNsb3NlXCI+44Kt44Oj44Oz44K744OrPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCJcclxuaW1wb3J0IFwianF1ZXJ5LW1vZGFsXCJcclxuXHJcblxyXG5jbGFzcyBCdG5Cb29raW5nTW9kYWwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgIH1cclxuXHJcbiAgICBjaG9vc2VPcmRlciA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgdmFyIHsgYm9va2luZ3MsIHVzZXJDaGF0IH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgY29uc29sZS5sb2coYm9va2luZ3MsIFwiYnRuIGNsaWNrXCIpXHJcblxyXG4gICAgICAgIGlmKCFib29raW5ncy5mZXRjaCl7XHJcbiAgICAgICAgICAgICQoXCIjanMtYm9va2luZy1sb2FkaW5nXCIpLm1vZGFsKHtcclxuICAgICAgICAgICAgICAgIGVzY2FwZUNsb3NlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNsaWNrQ2xvc2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2hvd0Nsb3NlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBjaGFubmVsQWN0aXZlQ2hhdCA9IHVzZXJDaGF0LmZpbmQoY2hhbm5lbCA9PiBjaGFubmVsLmlzQWN0aXZlKVxyXG4gICAgICAgIHZhciB1c2VyQWN0aXZlID0gY2hhbm5lbEFjdGl2ZUNoYXQudXNlclxyXG4gICAgICAgIHZhciBib29raW5nID0gYm9va2luZ3MuZGF0YS5maW5kKGJvb2tpbmcgPT4gYm9va2luZy5lbXBsb3llcl9pZCA9PSB1c2VyQWN0aXZlLmlkIHx8IGJvb2tpbmcuc2l0dGVyX2lkID09IHVzZXJBY3RpdmUuaWQpXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCAhYm9va2luZyApe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJChcIiNqcy1ib29raW5nLW5vbmVcIikubW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgZXNjYXBlQ2xvc2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2xpY2tDbG9zZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2xvc2U6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciB7IHN0YXR1cywgc2l0dGVyX2FjY2VwdCwgZW1wbG95ZXJfYWNjZXB0IH0gPSBib29raW5nXHJcbiAgICAgICAgaWYoIHNpdHRlcl9hY2NlcHQgJiYgZW1wbG95ZXJfYWNjZXB0ICYmICFzdGF0dXMgKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICQoXCIjXCIgKyBib29raW5nLmlkICsgXCJqcy1ib29raW5nLWNvbmZpcm1cIikubW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgZXNjYXBlQ2xvc2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2xpY2tDbG9zZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2xvc2U6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9ZWxzZSBpZiggIXNpdHRlcl9hY2NlcHQgfHwgIWVtcGxveWVyX2FjY2VwdCApe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJChcIiNcIiArIGJvb2tpbmcuaWQgKyBcImpzLWJvb2tpbmctc2V0dGluZ1wiKS5tb2RhbCh7XHJcbiAgICAgICAgICAgICAgICBlc2NhcGVDbG9zZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjbGlja0Nsb3NlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNob3dDbG9zZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYoICBzaXR0ZXJfYWNjZXB0ICYmIGVtcGxveWVyX2FjY2VwdCAmJiBzdGF0dXMgKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICQoXCIjXCIgKyBib29raW5nLmlkICtcImpzLWJvb2tpbmctZmluaXNoXCIpLm1vZGFsKHtcclxuICAgICAgICAgICAgICAgIGVzY2FwZUNsb3NlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNsaWNrQ2xvc2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2hvd0Nsb3NlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZXJvLWljb24gaGVyby1jYWxlbmRhci1tb250aCBjYWxlbmRhclwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5jaG9vc2VPcmRlciB9XHJcbiAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5sZXQgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGF1dGggICAgOiBzdGF0ZS51c2VycyxcclxuICAgICAgICBib29raW5nczogc3RhdGUuYm9va2luZyxcclxuICAgICAgICB1c2VyQ2hhdDogc3RhdGUudXNlckNoYXQsXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEJ0bkJvb2tpbmdNb2RhbCk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgXCIuLi8uLi9zY3NzL2NoYXQvZW1vamkuc2Nzc1wiXHJcblxyXG5jbGFzcyBFbW9qaSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgYWRkSWNvbklucHV0Q2hhdCA9IGV2ZW50ID0+IHtcclxuICAgICAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlucHV0LWNoYXRcIilcclxuICAgICAgICBpZiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgLy8vIGFkZCBpY29uIFxyXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudCArIHRoaXMucHJvcHMuc3ltYm9sXHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gY29udGVudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImNvbXBvbmVudC1lbW9qaVwiIG9uQ2xpY2s9e3RoaXMuYWRkSWNvbklucHV0Q2hhdH0+e3RoaXMucHJvcHMuc3ltYm9sfTwvaT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEVtb2ppOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCBcIi4uLy4uL3Njc3MvY2hhdC9oZWFkLWluZm8uc2Nzc1wiXHJcbmltcG9ydCBDT05GSUcgZnJvbSBcIi4uLy4uL2NvbmZpZ1wiXHJcbmNsYXNzIEhlYWRJbmZvIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcblx0Y29tcG9uZW50RGlkVXBkYXRlKCl7XHJcblx0XHQvLy8vc2V0IGhlaWdodCBjb21wb25lbnRcclxuICAgICAgICB2YXIgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb21wb25lbnQtc2lkZWJhci1jaGF0XCIpXHJcbiAgICAgICAgaWYoc2lkZWJhci5sZW5ndGgpe1xyXG4gICAgICAgICAgICB2YXIgbWVzc2FnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY29tcG9uZW50LWxpc3QtbWVzc2FnZVwiKVxyXG4gICAgICAgICAgICBpZihtZXNzYWdlcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgc2lkZWJhclswXS5zdHlsZS5oZWlnaHQgPSBtZXNzYWdlc1swXS5jbGllbnRIZWlnaHQgKyBcInB4XCI7ICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHR9XHJcblx0XHJcblx0cmVuZGVyKCkge1xyXG5cclxuXHRcdHZhciB7IGNoYW5uZWxzIH0gPSB0aGlzLnByb3BzXHJcblx0XHR2YXIgY2hhbm5lbEFjdGl2ZSA9IGNoYW5uZWxzLmZpbmQoY2hhbm5lbCA9PiBjaGFubmVsLmlzQWN0aXZlKVxyXG5cclxuXHRcdGlmICghY2hhbm5lbEFjdGl2ZSkge1xyXG5cdFx0XHRyZXR1cm4gbnVsbFxyXG5cdFx0fVxyXG5cdFx0dmFyIHRleHRPbmxpbmUgPSAgY2hhbm5lbEFjdGl2ZS51c2VyLm9ubGluZSA/IFwi44Kq44Oz44Op44Kk44OzXCIgOiBcIuOCquODleODqeOCpOODs1wiXHJcblx0XHR2YXIgaHJlZlVzZXIgPSBudWxsXHJcblx0XHRpZiggdHlwZW9mIFJPVVRFX1ZJRVdfU0lUVEVSICE9ICd1bmRlZmluZWQnICYmIHR5cGVvZiBST1VURV9WSUVXX0VNUExPWUVSICE9ICd1bmRlZmluZWQnICl7XHJcblx0XHRcdGlmKCBjaGFubmVsQWN0aXZlLnVzZXIucm9sZV9pZCA9PSBDT05GSUcuUk9MRV9VU0VSLnNpdHRlciApe1xyXG5cdFx0XHRcdGhyZWZVc2VyID0gUk9VVEVfVklFV19TSVRURVIgKyBcIi9cIiArIGNoYW5uZWxBY3RpdmUudXNlci5pZFxyXG5cdFx0XHR9XHJcblx0XHRcdGlmKCBjaGFubmVsQWN0aXZlLnVzZXIucm9sZV9pZCA9PSBDT05GSUcuUk9MRV9VU0VSLmVtcGxveWVyICl7XHJcblx0XHRcdFx0aHJlZlVzZXIgPSBST1VURV9WSUVXX0VNUExPWUVSICsgXCIvXCIgKyBjaGFubmVsQWN0aXZlLnVzZXIuaWRcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LWhlYWQtaW5mb1wiPlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVzZXItYWN0aXZlLWNoYXRcIj5cclxuXHRcdFx0XHRcdDxmaWd1cmUgY2xhc3NOYW1lPVwic3RhdGUtYXZhdGFyIGFjdGl2ZS1vbmxpbmVcIj5cclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGhyZWZVc2VyID8gXHJcblx0XHRcdFx0XHRcdFx0PGEgaHJlZj17aHJlZlVzZXJ9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0NPTkZJRy5TRVJWRVJfUEhQLlVSTCArIGNoYW5uZWxBY3RpdmUudXNlci5hdmF0YXJ9IGFsdD1cIlwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDogXHJcblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e0NPTkZJRy5TRVJWRVJfUEhQLlVSTCArIGNoYW5uZWxBY3RpdmUudXNlci5hdmF0YXJ9IGFsdD1cIlwiIC8+XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8L2ZpZ3VyZT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1pbmZvXCI+XHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRocmVmVXNlciA/IFxyXG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2hyZWZVc2VyfSBjbGFzc05hbWU9XCJuYW1lXCI+e2NoYW5uZWxBY3RpdmUudXNlci5maXJzdF9uYW1lICsgXCIgXCIgK2NoYW5uZWxBY3RpdmUudXNlci5sYXN0X25hbWV9PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDogXHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPntjaGFubmVsQWN0aXZlLnVzZXIuZmlyc3RfbmFtZSArIFwiIFwiICtjaGFubmVsQWN0aXZlLnVzZXIubGFzdF9uYW1lfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXsoY2hhbm5lbEFjdGl2ZS51c2VyLm9ubGluZSA/IFwiYWN0aXZlLW5vd1wiIDogJycpICsgXCIgdGltZS1vbmxpbmVcIn0+e3RleHRPbmxpbmV9PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG5cdHJldHVybiB7XHJcblx0XHRjaGFubmVsczogc3RhdGUudXNlckNoYXQsXHJcblx0XHR1c2VycyAgIDogc3RhdGUudXNlcnMsXHJcblx0XHR1c2VyICAgIDogc3RhdGUudXNlcnMsXHJcblx0XHRjbGllbnQgIDogc3RhdGUuY2xpZW50XHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShIZWFkSW5mbyk7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaXN0RW1vamkgZnJvbSBcIi4vTGlzdEVtb2ppLmpzeFwiO1xyXG5pbXBvcnQgTWVzc2FnZUNoYXRUeXBpbmcgZnJvbSBcIi4vTWVzc2FnZUNoYXRUeXBpbmcuanN4XCJcclxuaW1wb3J0IEJvb2tpbmcgZnJvbSBcIi4vQm9va2luZy5qc3hcIlxyXG5pbXBvcnQgQnRuQm9va2luZ01vZGFsIGZyb20gXCIuL0J0bkJvb2tpbmdNb2RhbC5qc3hcIlxyXG5pbXBvcnQgXCIuLi8uLi9zY3NzL2NoYXQvaW5wdXQtc2VuZC1jaGF0LnNjc3NcIjtcclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vY29uZmlnL2luZGV4LmpzXCJcclxuaW1wb3J0IHsgc2VuZE1lc3NhZ2VUb0NoYW5uZWwsIHNhdmVCbG9iVG9TZXJ2ZXIsIHNlbmRUeXBpbmdNZXNzYWdlVG9DaGFubmVsLCBcclxuICAgIGxpc3RlblJlYWRNZXNzYWdlTmV3VXNlciBcclxufSBcclxuZnJvbSBcIi4uLy4uL2xpYnJhcnkvc2VydmljZS5qc1wiXHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIlxyXG5cclxuXHJcbmNsYXNzIElucHV0U2VuZENoYXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IHNlbmRDaGF0OiBmYWxzZSB9XHJcbiAgICAgICAgdGhpcy5zdWJtaXRNZXNzYWdlQ2hhdCA9IHRoaXMuc3VibWl0TWVzc2FnZUNoYXQuYmluZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHZhciBzdXAgPSB0aGlzO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcInBhc3RlXCIsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIHRoZSBldmVudFxyXG4gICAgICAgICAgICAgICAgc3VwLnJldHJpZXZlSW1hZ2VGcm9tQ2xpcGJvYXJkQXNCbG9iKGV2ZW50KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCl7XHJcblxyXG4gICAgICAgIHZhciB7IHVzZXJDaGF0IH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgdmFyIGNoYW5uZWxBY3RpdmVDaGF0ID0gdXNlckNoYXQuZmluZChjaGFubmVsID0+IGNoYW5uZWwuaXNBY3RpdmUpXHJcblxyXG4gICAgICAgIHZhciBtZXNzYWdlcyA9IGNoYW5uZWxBY3RpdmVDaGF0ICYmIGNoYW5uZWxBY3RpdmVDaGF0Lm1lc3NhZ2VcclxuICAgICAgICBcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwifGlucHV0IHNlbmQgY2hhdCBjb21wb25lbnREaWRVcGRhdGVcIilcclxuXHJcbiAgICAgICAgdmFyIGRvbVNjcm9sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtc2Nyb2xsLXRvLWJvdHRvbVwiKVxyXG4gICAgICAgIHZhciBkb21Xcml0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlzLXdyaXRlLW1lc3NhZ2VcIilcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGRvbVNjcm9sbC5zY3JvbGxIZWlnaHQsIGRvbVNjcm9sbC5jbGllbnRIZWlnaHQgKyBcImxpc3RlblJlYWRNZXNzYWdlTmV3VXNlclwiKVxyXG4gICAgICAgIGlmKCBkb21Xcml0ZXIgJiYgZG9tU2Nyb2xsICYmIGRvbVNjcm9sbC5zY3JvbGxIZWlnaHQgPT0gZG9tU2Nyb2xsLmNsaWVudEhlaWdodCl7XHJcbiAgICAgICAgICAgIGxpc3RlblJlYWRNZXNzYWdlTmV3VXNlcihtZXNzYWdlcywgY2hhbm5lbEFjdGl2ZUNoYXQpXHJcbiAgICAgICAgfWVsc2UgaWYoXHJcbiAgICAgICAgICAgIGRvbVNjcm9sbCAmJiBcclxuICAgICAgICAgICAgZG9tV3JpdGVyICYmIFxyXG4gICAgICAgICAgICBkb21Xcml0ZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdmb2xsb3ctY29udmVyc2F0aW9uJykpe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtc2Nyb2xsLXRvLWJvdHRvbScpLnNjcm9sbFRvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1zY3JvbGwtdG8tYm90dG9tJykuc2Nyb2xsSGVpZ2h0XHJcbiAgICAgICAgICAgICAgICBpZiggJChcIiNqcy1zY3JvbGwtdG8tYm90dG9tIGltZ1wiKS5sZW5ndGggKXtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2pzLXNjcm9sbC10by1ib3R0b20gaW1nXCIpLm9uZShcImxvYWRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtc2Nyb2xsLXRvLWJvdHRvbScpKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtc2Nyb2xsLXRvLWJvdHRvbScpLnNjcm9sbFRvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1zY3JvbGwtdG8tYm90dG9tJykuc2Nyb2xsSGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdWJtaXRNZXNzYWdlQ2hhdCA9IGZ1bmN0aW9uIChtZXNzYWdlLCBzdHlsZSwgYXR0YWNobWVudCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHsgbWVzc2FnZSwgc3R5bGUsIGF0dGFjaG1lbnQgfSlcclxuICAgICAgICBpZiAoIW1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgaWYgKHN0eWxlID09IFwiSU1BR0VcIikge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IHN0eWxlXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXN0eWxlKSB7XHJcbiAgICAgICAgICAgIHZhciBlbW9qaUNoYXQgPSBjb25maWcuRU1PSklTLmZpbHRlcihlbW9qaSA9PiBlbW9qaS5zeW1ib2wgPT0gbWVzc2FnZS50cmltKCkpXHJcbiAgICAgICAgICAgIGlmIChlbW9qaUNoYXQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZSA9IFwiRU1PSklcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnVzZXIpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vLyBsw6AgbuG6v3UgdG9rZW4gaOG6v3QgaOG6oW4gdGjDrCBwaOG6o2kgZjUgdHLDrG5oIGR1eeG7h3RcclxuICAgICAgICAgICAgdmFyIHsgdXNlciB9ID0gdGhpcy5wcm9wcyxcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gdGhpc1xyXG4gICAgICAgICAgICB2YXIgZGlmZiA9ICgobmV3IERhdGUpLmdldFRpbWUoKSAtIG5ldyBEYXRlKHVzZXIudG9rZW5zLnBlcmlvZCkuZ2V0VGltZSgpKSAvIDEwMDBcclxuICAgICAgICAgICAgaWYgKGRpZmYgPj0gdXNlci50b2tlbnMuZXhwaXJlKSB7XHJcbiAgICAgICAgICAgICAgICAvLy8gZmV0Y2ggbmV3IHRva2VuXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBtZXNzYWdlU2VuZFRvQ2hhbm5lbCA9IG1lc3NhZ2VcclxuICAgICAgICAgICAgdmFyIGNoYW5uZWxTZW5kID0gdGhpcy5wcm9wcy51c2VyQ2hhdC5maW5kKGNoYW5uZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoYW5uZWwuaXNBY3RpdmUgPT0gdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB2YXIgY2hhbm5lbElkICAgPSBjaGFubmVsU2VuZC5pZCxcclxuICAgICAgICAgICAgICAgIHRva2VuQWNjZXNzID0gdXNlci50b2tlbnMudG9rZW5BY2Nlc3MsXHJcbiAgICAgICAgICAgICAgICBkZXRlY3QgICAgICA9IHRoaXMucHJvcHMuY2xpZW50XHJcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlVG9DaGFubmVsKG1lc3NhZ2VTZW5kVG9DaGFubmVsLCBzdHlsZSwgYXR0YWNobWVudCwgY2hhbm5lbElkLCBcclxuICAgICAgICAgICAgICAgIHRva2VuQWNjZXNzLCBkZXRlY3QsIGluc3RhbmNlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZW5kRW1vamlTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBcIiDwn5KdIFwiXHJcbiAgICAgICAgdmFyIHN0eWxlID0gXCJFTU9KSVwiXHJcbiAgICAgICAgdGhpcy5zdWJtaXRNZXNzYWdlQ2hhdChtZXNzYWdlLCBzdHlsZSwgbnVsbClcclxuICAgIH1cclxuICAgIGhhbmRsZVNlbmRNZXNzYWdlU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIHZhciBzdHlsZSA9IFwiXCJcclxuICAgICAgICB2YXIgdXJsQXR0YWNobWVudCA9IFtdXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGltYWdlc0RvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaW1hZ2UtLWJsb2NrXCIpXHJcbiAgICAgICAgdmFyIGltYWdlcyAgICA9IGltYWdlc0RvbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicmVtb3ZlLWltYWdlXCIpXHJcbiAgICAgICAgdmFyIG1lc3NhZ2UgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaW5wdXQtY2hhdFwiKS52YWx1ZVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChpbWFnZXMubGVuZ3RoICYmICFtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UgPSAnSU1BR0UnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghbWVzc2FnZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pbnB1dC1jaGF0XCIpLnZhbHVlID0gJydcclxuXHJcbiAgICAgICAgaWYgKGltYWdlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc3R5bGUgPSBcIklNQUdFXCJcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHVybEF0dGFjaG1lbnQgPSBbXVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleF9pbWFnZV9zZW5kID0gMDsgaW5kZXhfaW1hZ2Vfc2VuZCA8IGltYWdlcy5sZW5ndGg7IGluZGV4X2ltYWdlX3NlbmQrKykge1xyXG4gICAgICAgICAgICAgICAgaWYoIWltYWdlc1tpbmRleF9pbWFnZV9zZW5kXS5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLXNpZ24tdXJsJykpe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybEF0dGFjaG1lbnQucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsIDogaW1hZ2VzW2luZGV4X2ltYWdlX3NlbmRdLmdldEF0dHJpYnV0ZSgnZGF0YS11cmwnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGltYWdlc1tpbmRleF9pbWFnZV9zZW5kXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogKG5ldyBEYXRlKS5nZXRUaW1lKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWltYWdlLS1ibG9ja1wiKS5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgIHRoaXMuc3VibWl0TWVzc2FnZUNoYXQobWVzc2FnZSwgc3R5bGUsIHVybEF0dGFjaG1lbnQpXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VuZE1lc3NhZ2VEb3duID0gKGV2ZW50KSA9PiB7XHJcblxyXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09IDEzICYmICFldmVudC5zaGlmdEtleSkge1xyXG4gICAgICAgICAgICB2YXIgc3R5bGUgPSBcIlwiXHJcbiAgICAgICAgICAgIHZhciB1cmxBdHRhY2htZW50ID0gW11cclxuICAgICAgICAgICAgdmFyIGltYWdlc0RvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaW1hZ2UtLWJsb2NrXCIpXHJcbiAgICAgICAgICAgIHZhciBpbWFnZXMgPSBpbWFnZXNEb20uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInJlbW92ZS1pbWFnZVwiKVxyXG4gICAgICAgICAgICBpZiAoaW1hZ2VzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgc3R5bGUgPSBcIklNQUdFXCJcclxuICAgICAgICAgICAgICAgIHVybEF0dGFjaG1lbnQgPSBbXVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXhfaW1hZ2Vfc2VuZCA9IDA7IGluZGV4X2ltYWdlX3NlbmQgPCBpbWFnZXMubGVuZ3RoOyBpbmRleF9pbWFnZV9zZW5kKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZighaW1hZ2VzW2luZGV4X2ltYWdlX3NlbmRdLmNsYXNzTGlzdC5jb250YWlucygnanMtc2lnbi11cmwnKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybEF0dGFjaG1lbnQucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgOiBpbWFnZXNbaW5kZXhfaW1hZ2Vfc2VuZF0uZ2V0QXR0cmlidXRlKCdkYXRhLXVybCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGltYWdlc1tpbmRleF9pbWFnZV9zZW5kXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IChuZXcgRGF0ZSkuZ2V0VGltZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pbWFnZS0tYmxvY2tcIikuaW5uZXJIVE1MID0gJydcclxuICAgICAgICAgICAgdGhpcy5zdWJtaXRNZXNzYWdlQ2hhdChldmVudC50YXJnZXQudmFsdWUsIHN0eWxlLCB1cmxBdHRhY2htZW50KVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VuZENoYXQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaW5wdXQtY2hhdFwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMzIpIHtcclxuICAgICAgICAgICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pbnB1dC1jaGF0XCIpXHJcbiAgICAgICAgICAgIGlmIChpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIC8vLyBnZXQgd29yZCBsYXN0XHJcbiAgICAgICAgICAgICAgICB2YXIgd29yZHMgPSBjb250ZW50LnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgICAgIHZhciB3b3JkTGFzdGVzdCA9IHdvcmRzW3dvcmRzLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgICAgICAgICAvLy8vIGNoZWNrIGhhdmUgc3lzYm9sIFxyXG4gICAgICAgICAgICAgICAgdmFyIGVtb2ppc0NhbGwgPSBjb25maWcuRU1PSklTLmZpbHRlcihpdGVtID0+IGl0ZW0uc2lnbiA9PSB3b3JkTGFzdGVzdClcclxuICAgICAgICAgICAgICAgIGlmIChlbW9qaXNDYWxsLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vLyBhZGQgaWNvbiBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGFzdEluZGV4ID0gY29udGVudC5sYXN0SW5kZXhPZihcIiBcIilcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIGxhc3RJbmRleCkgKyBcIiBcIiArIGVtb2ppc0NhbGxbMF0uc3ltYm9sXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZVNlbmRNZXNzYWdlVXAgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2VuZENoYXQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbmRDaGF0OiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pbnB1dC1jaGF0XCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW1hZ2VGaWxlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoaW1nTG9hZGluZykge1xyXG4gICAgICAgIC8vIGFkZCBpdCBpbiBlZGl0b3JcclxuICAgICAgICBpbWdMb2FkaW5nLndpZHRoID0gMTAwO1xyXG4gICAgICAgIC8vLyBjcmVhdGUgd3JhcHBlciBpbWdcclxuICAgICAgICB2YXIgd3JhcHBlckltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB3cmFwcGVySW1hZ2UuY2xhc3NOYW1lID0gXCJyZW1vdmUtaW1hZ2UganMtc2lnbi11cmxcIjtcclxuICAgICAgICB3cmFwcGVySW1hZ2Uub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdyYXBwZXJJbWFnZS5hcHBlbmRDaGlsZChpbWdMb2FkaW5nKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWltYWdlLS1ibG9ja1wiKS5hcHBlbmRDaGlsZCh3cmFwcGVySW1hZ2UpO1xyXG4gICAgfVxyXG4gICAgcmV0cmlldmVJbWFnZSA9IGZpbGUgPT4ge1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyggZmlsZSApXHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGhpcy5pbWFnZUZpbGVDYWxsYmFja1xyXG4gICAgICAgIC8vIFJldHJpZXZlIGltYWdlIG9uIGNsaXBib2FyZCBhcyBibG9iXHJcbiAgICAgICAgc2F2ZUJsb2JUb1NlcnZlcihmaWxlKVxyXG4gICAgICAgIC8vIENyZWF0ZSBhbiBpbWFnZVxyXG4gICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAvLyBPbmNlIHRoZSBpbWFnZSBsb2FkcywgcmVuZGVyIHRoZSBpbWcgb24gdGhlIGNhbnZhc1xyXG4gICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBkaW1lbnNpb25zIG9mIHRoZSBjYW52YXMgd2l0aCB0aGUgZGltZW5zaW9ucyBvZiB0aGUgaW1hZ2VcclxuICAgICAgICAgICAgY2FsbGJhY2sodGhpcyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBDcm9zc2Jyb3dzZXIgc3VwcG9ydCBmb3IgVVJMXHJcbiAgICAgICAgdmFyIFVSTE9iaiA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTDtcclxuICAgICAgICAvLyBDcmVhdGVzIGEgRE9NU3RyaW5nIGNvbnRhaW5pbmcgYSBVUkwgcmVwcmVzZW50aW5nIHRoZSBvYmplY3QgZ2l2ZW4gaW4gdGhlIHBhcmFtZXRlclxyXG4gICAgICAgIC8vIG5hbWVseSB0aGUgb3JpZ2luYWwgQmxvYlxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGltZy5zcmMgPSBVUkxPYmouY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXRyaWV2ZUZpbGUgPSBmaWxlID0+IHtcclxuXHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGhpcy5pbWFnZUZpbGVDYWxsYmFja1xyXG4gICAgICAgIC8vIFJldHJpZXZlIGltYWdlIG9uIGNsaXBib2FyZCBhcyBibG9iXHJcbiAgICAgICAgc2F2ZUJsb2JUb1NlcnZlcihmaWxlKVxyXG4gICAgICAgIC8vIENyZWF0ZSBhbiBpbWFnZVxyXG4gICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAvLyBPbmNlIHRoZSBpbWFnZSBsb2FkcywgcmVuZGVyIHRoZSBpbWcgb24gdGhlIGNhbnZhc1xyXG4gICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBkaW1lbnNpb25zIG9mIHRoZSBjYW52YXMgd2l0aCB0aGUgZGltZW5zaW9ucyBvZiB0aGUgaW1hZ2VcclxuICAgICAgICAgICAgY2FsbGJhY2sodGhpcyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBDcm9zc2Jyb3dzZXIgc3VwcG9ydCBmb3IgVVJMXHJcbiAgICAgICAgdmFyIFVSTE9iaiA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTDtcclxuICAgICAgICAvLyBDcmVhdGVzIGEgRE9NU3RyaW5nIGNvbnRhaW5pbmcgYSBVUkwgcmVwcmVzZW50aW5nIHRoZSBvYmplY3QgZ2l2ZW4gaW4gdGhlIHBhcmFtZXRlclxyXG4gICAgICAgIC8vIG5hbWVseSB0aGUgb3JpZ2luYWwgQmxvYlxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGltZy5zcmMgPSBjb25maWcuU0VSVkVSX1BIUC5VUkwgKyBcIi9pbWFnZS9mb2xkZXIuanBnXCJcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0cmlldmVJbWFnZUZyb21DbGlwYm9hcmRBc0Jsb2IgPSAocGFzdGVFdmVudCkgPT4ge1xyXG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRoaXMuaW1hZ2VGaWxlQ2FsbGJhY2tcclxuICAgICAgICBpZiAoIXBhc3RlRXZlbnQuY2xpcGJvYXJkRGF0YSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgLy8vIGNhbGwgY2FsYmFjayBmdW5jdGlvbiB1bmRlZmluZVxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaXRlbXMgPSBwYXN0ZUV2ZW50LmNsaXBib2FyZERhdGEuaXRlbXM7XHJcbiAgICAgICAgaWYgKCFpdGVtcykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgLy8vIGNhbGwgY2FsYmFjayBmdW5jdGlvbiB1bmRlZmluZVxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIFNraXAgY29udGVudCBpZiBub3QgaW1hZ2VcclxuICAgICAgICAgICAgaWYgKGl0ZW1zW2ldLnR5cGUuaW5kZXhPZihcImltYWdlXCIpID09IC0xKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIHZhciBmaWxlID0gaXRlbXNbaV0uZ2V0QXNGaWxlKClcclxuICAgICAgICAgICAgdGhpcy5yZXRyaWV2ZUltYWdlKCBmaWxlIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzaG93TGlzdEVtb2ppID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdmFyIGVtb2ppcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtZW1vamlzXCIpO1xyXG4gICAgICAgIGlmIChlbW9qaXMpIHtcclxuICAgICAgICAgICAgZW1vamlzLmNsYXNzTGlzdC5hZGQoXCJzaG93LXRlbXBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGFuZGxlU2VuZENoYXRDbGljayA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgLy8vLyBzZW5kIGNsYXNzIGlzIHdyaXRlIG1lc3NhZ2VcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlzLXdyaXRlLW1lc3NhZ2VcIikuY2xhc3NMaXN0LmFkZChcImZvbGxvdy1jb252ZXJzYXRpb25cIilcclxuXHJcbiAgICAgICAgLy8vc2VuZCB0eXBpbmcgXHJcbiAgICAgICAgdmFyIHsgdXNlciB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHZhciBjaGFubmVsU2VuZCA9IHRoaXMucHJvcHMudXNlckNoYXQuZmluZChjaGFubmVsID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGNoYW5uZWwuaXNBY3RpdmUgPT0gdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdmFyIGNoYW5uZWxJZCAgID0gY2hhbm5lbFNlbmQuaWQsXHJcbiAgICAgICAgICAgIGNoYW5uZWxOYW1lID0gY2hhbm5lbFNlbmQuY2hhbm5lbE5hbWUsXHJcbiAgICAgICAgICAgIHRva2VuQWNjZXNzID0gdXNlci50b2tlbnMudG9rZW5BY2Nlc3NcclxuXHJcbiAgICAgICAgc2VuZFR5cGluZ01lc3NhZ2VUb0NoYW5uZWwoIGNoYW5uZWxJZCwgY2hhbm5lbE5hbWUsIHRva2VuQWNjZXNzIClcclxuICAgIH1cclxuICAgIGNob29zZUZpbGUgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZS1maWxlXCIpLmNsaWNrKClcclxuICAgIH1cclxuXHJcbiAgICBzYXZlRmlsZSA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlLWZpbGVcIikuZmlsZXNbMF0gXHJcbiAgICAgICAgdmFyIGFjY2VwdCA9IC8oXFwuanBnfFxcLmpwZWd8XFwuYm1wfFxcLmdpZnxcXC5wbmd8XFwuaW1hZ2UpJC9pXHJcbiAgICAgICAgaWYoYWNjZXB0LmV4ZWMoZmlsZS5uYW1lKSl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnJldHJpZXZlSW1hZ2UoIGZpbGUgKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGFjY2VwdCA9IC8oXFwueGxzfFxcLnhsc3h8XFwuY3N2fFxcLnBkZnxcXC5kb2N8XFwuZG9jeCkkL2lcclxuICAgICAgICBpZihhY2NlcHQuZXhlYyhmaWxlLm5hbWUpKXsgXHJcblxyXG4gICAgICAgICAgICB0aGlzLnJldHJpZXZlRmlsZSggZmlsZSApXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBhbGVydChcIkZpbGUgZXh0ZW5zaW9uIG5vdCBzdXBwb3J0ZWQhXCIpXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLnVzZXIgfHwgIXRoaXMucHJvcHMuc29ja2V0IHx8ICF0aGlzLnByb3BzLnVzZXJDaGF0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgeyB1c2VyQ2hhdCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHZhciBjaGFubmVsQWN0aXZlQ2hhdCA9IHVzZXJDaGF0LmZpbmQoY2hhbm5lbCA9PiBjaGFubmVsLmlzQWN0aXZlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cImpzLWlzLXdyaXRlLW1lc3NhZ2VcIiBjbGFzc05hbWU9XCJjb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0IGZvbGxvdy1jb252ZXJzYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxNZXNzYWdlQ2hhdFR5cGluZyB0b1VzZXI9e2NoYW5uZWxBY3RpdmVDaGF0fSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImpzLWltYWdlLS1ibG9ja1wiIGNsYXNzTmFtZT1cImltYWdlLWJsb2NrXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8QnRuQm9va2luZ01vZGFsIC8+XHJcbiAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLWZpbGUtY2xvdWQtb3V0bGluZSBmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5jaG9vc2VGaWxlIH1cclxuICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJpbWFnZS1maWxlXCIgdHlwZT1cImZpbGVcIiBjbGFzc05hbWU9XCJkLW5vbmVcIiBhY2NlcHQ9XCIueGxzLC54bHN4LC5jc3YsaW1hZ2UvKiwucGRmLC5kb2MsLmRvY3hcIiBvbkNoYW5nZT17IHRoaXMuc2F2ZUZpbGUgfSAvPlxyXG4gICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZXJvLWljb24gaGVyby1zdGlja2VyLWVtb2ppIGVtb3RpY29uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNob3dMaXN0RW1vaml9XHJcbiAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJqcy1pbnB1dC1jaGF0XCJcclxuICAgICAgICAgICAgICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlU2VuZE1lc3NhZ2VEb3dufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9e3RoaXMuaGFuZGxlU2VuZE1lc3NhZ2VVcH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVNlbmRDaGF0Q2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLjg6Hjg4Pjgrvjg7zjgrjjgpLmm7jjgY8uLi5cIlxyXG4gICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJoZXJvLWljb24gaGVyby1zZW5kLW91dGxpbmUgc2VuZFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2VuZE1lc3NhZ2VTdWJtaXR9PjwvaT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLWhlYXJ0LW11bHRpcGxlLW91dGxpbmUgcmVhY3RcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNlbmRFbW9qaVN1Ym1pdH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgPExpc3RFbW9qaSAvPlxyXG4gICAgICAgICAgICAgICAgPEJvb2tpbmcgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5sZXQgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZXIgICAgOiBzdGF0ZS51c2VycyxcclxuICAgICAgICBjbGllbnQgIDogc3RhdGUuY2xpZW50LFxyXG4gICAgICAgIHVzZXJDaGF0OiBzdGF0ZS51c2VyQ2hhdCxcclxuICAgICAgICBzb2NrZXQgIDogc3RhdGUuc29ja2V0XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKElucHV0U2VuZENoYXQpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBFbW9qaSBmcm9tIFwiLi9FbW9qaS5qc3hcIjtcclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vY29uZmlnL2luZGV4LmpzXCJcclxuXHJcbmNsYXNzIExpc3RFbW9qaSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cImpzLWVtb2ppc1wiIGNsYXNzTmFtZT1cImNvbXBvbmVudC1saXN0LWVtb2ppXCI+XHJcbiAgICAgICAgICAgICAgICB7Y29uZmlnLkVNT0pJUy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8RW1vamkga2V5PXtpdGVtLnNpZ259IHN5bWJvbD17aXRlbS5zeW1ib2x9IHNpZ249e2l0ZW0uc2lnbn0gLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IExpc3RFbW9qaTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgSGVhZEluZm8gZnJvbSBcIi4vSGVhZEluZm8uanN4XCJcclxuaW1wb3J0IE1lc3NhZ2VDaGF0IGZyb20gXCIuL01lc3NhZ2VDaGF0LmpzeFwiXHJcbmltcG9ydCBJbnB1dFNlbmRDaGF0IGZyb20gXCIuL0lucHV0U2VuZENoYXQuanN4XCJcclxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiXHJcbmltcG9ydCBcIi4uLy4uL3Njc3MvY2hhdC9saXN0LW1lc3NhZ2Uuc2Nzc1wiXHJcbmltcG9ydCB7IGxpc3RlblNjcm9sbE1lc3NhZ2UgfSBmcm9tIFwiLi4vLi4vbGlicmFyeS9zZXJ2aWNlLmpzXCJcclxuXHJcbmNsYXNzIExpc3RNZXNzYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcblxyXG4gICAgICAgIHZhciB7IGNoYW5uZWxzIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgdmFyIGNoYW5uZWxBY3RpdmVDaGF0ID0gY2hhbm5lbHMuZmluZChjaGFubmVsID0+IGNoYW5uZWwuaXNBY3RpdmUpXHJcblxyXG4gICAgICAgIHZhciBtZXNzYWdlcyA9IGNoYW5uZWxBY3RpdmVDaGF0ICYmIGNoYW5uZWxBY3RpdmVDaGF0Lm1lc3NhZ2VcclxuXHJcbiAgICAgICAgdmFyIGxzdE1lc3NhZ2UgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1zY3JvbGwtdG8tYm90dG9tJylcclxuICAgICAgICBpZihsc3RNZXNzYWdlKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICQoJyNqcy1zY3JvbGwtdG8tYm90dG9tJykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBsaXN0ZW5TY3JvbGxNZXNzYWdlKHRoaXMsIG1lc3NhZ2VzLCBjaGFubmVsQWN0aXZlQ2hhdClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgdmFyIHsgY2hhbm5lbHMgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICB2YXIgY2hhbm5lbEFjdGl2ZUNoYXQgPSBjaGFubmVscy5maW5kKGNoYW5uZWwgPT4gY2hhbm5lbC5pc0FjdGl2ZSk7XHJcblxyXG4gICAgICAgIHZhciBtZXNzYWdlcyA9IGNoYW5uZWxBY3RpdmVDaGF0ICYmIGNoYW5uZWxBY3RpdmVDaGF0Lm1lc3NhZ2U7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LWxpc3QtbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRJbmZvIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXItbGlzdC1tZXNzYWdlXCIgaWQ9XCJqcy1zY3JvbGwtdG8tYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge21lc3NhZ2VzICYmIG1lc3NhZ2VzLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKG1lc3NhZ2UsIGtleSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlQ2hhdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XCJtZXNzYWdlLWNoYXRcIiArIGtleSArIGNoYW5uZWxBY3RpdmVDaGF0LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9e21lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbEFjdGl2ZUNoYXQ9e2NoYW5uZWxBY3RpdmVDaGF0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRTZW5kQ2hhdCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2hhbm5lbHM6IHN0YXRlLnVzZXJDaGF0XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKExpc3RNZXNzYWdlKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBcIi4uLy4uL3Njc3MvY2hhdC9saXN0LXVzZXIuc2Nzc1wiXHJcbmltcG9ydCBVc2VyQ2hhdCBmcm9tIFwiLi9Vc2VyQ2hhdC5qc3hcIlxyXG5cclxuY2xhc3MgTGlzdFVzZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICAvLy8gdXNlckNoYXQgxJHGsOG7o2MgcGFzcyB04burIGNoYSB2w6BvXHJcbiAgICAgICAgdmFyIHsgY29udmVyc2F0aW9ucyB9ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1saXN0LXVzZXJcIj5cclxuICAgICAgICAgICAgICAgIHsgY29udmVyc2F0aW9ucyAmJiBjb252ZXJzYXRpb25zLm1hcChjaGFubmVsID0+IDxVc2VyQ2hhdCBrZXk9e2NoYW5uZWwuaWR9IGNoYW5uZWw9e2NoYW5uZWx9IC8+KSB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RVc2VyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0ICcuLi8uLi9zY3NzL2NoYXQvbWVzc2FnZS1jaGF0LnNjc3MnXHJcbmltcG9ydCBDT05GSUcgZnJvbSBcIi4uLy4uL2NvbmZpZ1wiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5cclxuY2xhc3MgTWVzc2FnZUNoYXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB2YXIgeyBhdXRoLCBtZXNzYWdlLCBjaGFubmVsQWN0aXZlQ2hhdCB9ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgICAgICB2YXIgbXlpbmZvID0geyBhdmF0YXIgOiAnJywgbmFtZTogJycgfVxyXG4gICAgICAgIGlmKCBhdXRoICYmIGF1dGguaWQgKXtcclxuICAgICAgICAgICAgbXlpbmZvLmF2YXRhciA9IGF1dGguYXZhdGFyXHJcbiAgICAgICAgICAgIG15aW5mby5uYW1lICAgPSBhdXRoLmZpcnN0X25hbWUgKyBcIiBcIiArIGF1dGgubGFzdF9uYW1lXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWNoYW5uZWxBY3RpdmVDaGF0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB1c2VySW5mbyA9IGNoYW5uZWxBY3RpdmVDaGF0LnVzZXJcclxuXHJcbiAgICAgICAgaWYgKCFtZXNzYWdlLnR5cGUpIHtcclxuICAgICAgICAgICAgdmFyIHR5cGVNZXNzYWdlID0gJ2xlZnQtbWVzc2FnZSAnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciB0eXBlTWVzc2FnZSA9ICdyaWdodC1tZXNzYWdlIGJ5LW1lICc7XHJcbiAgICAgICAgICAgIHVzZXJJbmZvID0gbXlpbmZvO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgeyBzdHlsZSB9ID0gbWVzc2FnZVxyXG5cclxuICAgICAgICB2YXIgVElNRV9ESUVfRklMRSA9IDI0ICogNjAgKiA2MCAqIDEwMDBcclxuICAgICAgICBcclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LW1lc3NhZ2UtY2hhdFwiID5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHlwZU1lc3NhZ2UgKyBcImNoYXQtZ3JvdXBcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0NPTkZJRy5TRVJWRVJfUEhQLlVSTCArIHVzZXJJbmZvLmF2YXRhcn0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSA9PSBcIklNQUdFXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5hdHRhY2htZW50Lm1hcCgoIGF0dGFjaEVsZW1lbnQgLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGF0dGFjaEVsZW1lbnQudHlwZSA9PSAnaW1nJyApe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggYXR0YWNoRWxlbWVudC50aW1lICYmIGF0dGFjaEVsZW1lbnQudGltZSAtIFRJTUVfRElFX0ZJTEUgPCAobmV3IERhdGUpLmdldFRpbWUoKSApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e1wid3JhcHBlci1hdHRhY2htZW50XCIgKyBpbmRleCArIGF0dGFjaEVsZW1lbnQudXJsIH0gY2xhc3NOYW1lPVwid3JhcHBlci1hdHRhY2htZW50XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtDT05GSUcuU0VSVkVSX1BIUC5VUkwgKyBhdHRhY2hFbGVtZW50LnVybCB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZG93bmxvYWQtZmlsZS1hdHRhY2htZW50XCIgaHJlZj17IENPTkZJRy5TRVJWRVJfUEhQLlVSTCArIGF0dGFjaEVsZW1lbnQudXJsIH0gdGFyZ2V0PVwiX2JsYW5rXCIgZG93bmxvYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLWNsb3VkLWRvd25sb2FkLW91dGxpbmVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtcIndyYXBwZXItYXR0YWNobWVudFwiICsgaW5kZXggKyBDT05GSUcuU0VSVkVSX1BIUC5VUkwgKyBcIi9pbWFnZS9mb2xkZXIuanBnXCIgfSBjbGFzc05hbWU9XCJ3cmFwcGVyLWF0dGFjaG1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eyBDT05GSUcuU0VSVkVSX1BIUC5VUkwgKyBcIi9pbWFnZS9mb2xkZXIuanBnXCIgfSAvPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkb3dubG9hZC1maWxlLWF0dGFjaG1lbnRcIiBocmVmPXsgQ09ORklHLlNFUlZFUl9QSFAuVVJMICsgYXR0YWNoRWxlbWVudC51cmwgfSB0YXJnZXQ9XCJfYmxhbmtcIiBkb3dubG9hZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLWNsb3VkLWRvd25sb2FkLW91dGxpbmVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUgKyBcIiB0ZXh0XCJ9ID57bWVzc2FnZS5jb250ZW50fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIW1lc3NhZ2UudHlwZSAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFtZXNzYWdlLnJlYWQgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdoZXJvLWljb24gaGVyby1jaGVjay1jaXJjbGUtb3V0bGluZSc+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2hlcm8taWNvbiBoZXJvLWNoZWNrLWNpcmNsZSc+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXV0aCAgICA6IHN0YXRlLnVzZXJzXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKE1lc3NhZ2VDaGF0KSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5jbGFzcyBNZXNzYWdlQ2hhdFR5cGluZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIHsgdG9Vc2VyIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgaWYgKCF0b1VzZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNoYW5uZWxJbmZvciA9IHRvVXNlcjtcclxuICAgICAgICB2YXIgdXNlclR5cGluZyA9IGNoYW5uZWxJbmZvci51c2VyXHJcbiAgICAgICAgdmFyIHR5cGVNZXNzYWdlID0gJ2Zsb2F0LWxlZnQgJztcclxuXHJcbiAgICAgICAgdmFyIG5hbWVUeXBpbmcgPSAnJztcclxuICAgICAgICBpZih1c2VyVHlwaW5nLmZpcnN0X25hbWUgJiYgdXNlclR5cGluZy5sYXN0X25hbWUpe1xyXG4gICAgICAgICAgICBuYW1lVHlwaW5nID0gdXNlclR5cGluZy5maXJzdF9uYW1lICsgXCIgXCIgKyB1c2VyVHlwaW5nLmxhc3RfbmFtZVxyXG4gICAgICAgICAgICB2YXIgbGltaXRDaGFyYWN0ZXIgPSAyMFxyXG4gICAgICAgICAgICBpZihuYW1lVHlwaW5nLmxlbmd0aCA+IGxpbWl0Q2hhcmFjdGVyKVxyXG4gICAgICAgICAgICBuYW1lVHlwaW5nID0gJ1snICsgbmFtZVR5cGluZy5zdWJzdHJpbmcoMCAsIGxpbWl0Q2hhcmFjdGVyKSArICcuLi5dICdcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJqcy10eXBpbmdcIiBjbGFzc05hbWU9XCJjb21wb25lbnQtbWVzc2FnZS1jaGF0IHR5cGluZy1jaGF0LW1lc3NzYWdlXCIgY2hhbm5lbD17dG9Vc2VyLmlkfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBlTWVzc2FnZSArIFwiY2hhdC1ncm91cFwifT5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtY29udGVudCB0eXBpbmctbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0eXBpbmctdGV4dFwiPntuYW1lVHlwaW5nICsgXCIg44GM5YWl5Yqb44GX44Gm44GE44G+44GZIFwifTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGljb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aWRvdFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpZG90XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlkb3RcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlQ2hhdFR5cGluZztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuLy8gaW1wb3J0IFNlYXJjaFVzZXIgZnJvbSBcIi4vU2VhcmNoVXNlci5qc3hcIlxyXG5pbXBvcnQgTGlzdFVzZXIgZnJvbSBcIi4vTGlzdFVzZXIuanN4XCJcclxuaW1wb3J0IFwiLi4vLi4vc2Nzcy9jaGF0L3NpZGViYXIuc2Nzc1wiXHJcbmltcG9ydCBDT05GSUcgZnJvbSBcIi4uLy4uL2NvbmZpZ1wiXHJcblxyXG5jbGFzcyBTaWRlQmFyQ2hhdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBpbmZvciA9IHsgYXZhdGFyOiAnJywgbmFtZTogJycgfVxyXG4gICAgICAgIHZhciB7IGF1dGggfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBpZiAoYXV0aCAmJiBhdXRoLmlkKSB7XHJcbiAgICAgICAgICAgIGluZm9yLmF2YXRhciA9IGF1dGguYXZhdGFyXHJcbiAgICAgICAgICAgIGluZm9yLm5hbWUgPSBhdXRoLmZpcnN0X25hbWUgKyBcIiBcIiArIGF1dGgubGFzdF9uYW1lIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtc2lkZWJhci1jaGF0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15aW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwic3RhdGUtYXZhdGFyIGFjdGl2ZS1vbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsgQ09ORklHLlNFUlZFUl9QSFAuVVJMICsgaW5mb3IuYXZhdGFyIH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj57aW5mb3IubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC11c2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RVc2VyIGNvbnZlcnNhdGlvbnM9e3RoaXMucHJvcHMuY29udmVyc2F0aW9uc30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXV0aDogc3RhdGUudXNlcnMsXHJcbiAgICAgICAgY29udmVyc2F0aW9uczogc3RhdGUudXNlckNoYXRcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoU2lkZUJhckNoYXQpXHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IFRZUEUgZnJvbSBcIi4uLy4uL2FjdGlvbi90eXBlLmpzXCJcclxuaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vLi4vY29uZmlnXCJcclxuY2xhc3MgVXNlckNoYXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNoYW5nZUFjdGl2ZVVzZXIgPSAoIGUgLCBpZCkgPT4ge1xyXG5cclxuICAgICAgICBlLnByb3BzLmRpc3BhdGNoKHsgdHlwZTogVFlQRS5DSEFULkNIQU5HRV9VU0VSX0NIQVRfREVGQVVMVCwgcGF5bG9hZDogaWQgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIHsgY2hhbm5lbCB9ICAgICAgICA9IHRoaXMucHJvcHMsXHJcbiAgICAgICAgICAgIGNsYXNzQWN0aXZlT25saW5lICA9IGNoYW5uZWwudXNlci5vbmxpbmUgPyAnIGFjdGl2ZSAnIDogJycsXHJcbiAgICAgICAgICAgIGNsYXNzQWN0aXZlTWVzc2FnZSA9IGNoYW5uZWwuaXNBY3RpdmUgPyAnIGFjdGl2ZS1tZXNzYWdlICcgOiAnJ1xyXG5cclxuICAgICAgICB2YXIgW2xhc3RJdGVtXSA9IGNoYW5uZWwubWVzc2FnZS5zbGljZSgtMSlcclxuXHJcbiAgICAgICAgdmFyIG11bmJlck5vbmVSZWFkID0gY2hhbm5lbC5tZXNzYWdlLmZpbHRlcihtZXNzYWdlID0+ICFtZXNzYWdlLnJlYWQgJiYgIW1lc3NhZ2UudHlwZSApLmxlbmd0aFxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhclwiID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc0FjdGl2ZU9ubGluZSArIGNsYXNzQWN0aXZlTWVzc2FnZSArIFwidXNlci1jaGF0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5jaGFuZ2VBY3RpdmVVc2VyKHRoaXMsIGNoYW5uZWwuaWQpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJzdGF0ZS1hdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0NPTkZJRy5TRVJWRVJfUEhQLlVSTCArIGNoYW5uZWwudXNlci5hdmF0YXJ9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPntjaGFubmVsLnVzZXIuZmlyc3RfbmFtZSArIGNoYW5uZWwudXNlci5sYXN0X25hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhc3RJdGVtICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYXN0LW1lc3NhZ2VcIj57bGFzdEl0ZW0uY29udGVudH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdW5iZXJOb25lUmVhZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5vbmUtcmVhZC1tZXNzYWdlXCI+e211bmJlck5vbmVSZWFkfTwvaT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKShVc2VyQ2hhdCkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgU2lkZUJhckNoYXQgZnJvbSBcIi4vU2lkZUJhckNoYXQuanN4XCJcclxuaW1wb3J0IExpc3RNZXNzYWdlIGZyb20gXCIuL0xpc3RNZXNzYWdlLmpzeFwiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgeyBnZXRBY2Nlc3NUb2tlbkJ5UmVmZXNoIH0gZnJvbSBcIi4uLy4uL2xpYnJhcnkvc2VydmljZS5qc1wiXHJcbmltcG9ydCAnLi4vLi4vc2Nzcy9jaGF0L2NoYXQuc2NzcydcclxuY2xhc3MgQ2hhdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcblxyXG4gICAgICAgIC8vLyBt4buXaSBs4bqnbiB2w6BvIGNoYXQgdGjDrCBideG7mWMgcGjhuqNpIGPDsyAxIHJlZmVzaCB0b2tlbi4gbuG6v3Uga2jDtG5nIHRow6wgbOG7l2kuIFxyXG4gICAgICAgIC8vLyBE4buxYSB2w6BvIHJlZmVzaCB0b2tlbiB0YSBz4bq9IHThuqFvIHJhIDEgYWNjZXNzIHRva2VuIFxyXG4gICAgICAgIC8vLyBzb25nIHNvbmcgdmnhu4djIGZldGNoIGFjY2Vzc3Rva2VuIHRow6wgbOG6r25nIG5naGUgdHJvbmcgc29ja2V0IG7hur91IGPDsyBcclxuICAgICAgICAvLy8gYWNjZXNzIHRva2VuIHRow6wgY2hvIHBow6lwIHN0YXJ0IGNoYXRcclxuICAgICAgICB2YXIgaW5zdGFuY2VDaGF0ICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIFRPS0VOX1JFRkVTSF9ET00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlRPS0VOX1JFRkVTSFwiKSxcclxuICAgICAgICAgICAgeyBkZXRlY3QgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICAgICAgaWYoIFRPS0VOX1JFRkVTSF9ET00gKXtcclxuICAgICAgICAgICAgLy8vIGZldGNoIHRva2VuIGFjY2VzcyBieSB0b2tlbiByZWZlc2ggXHJcbiAgICAgICAgICAgIHZhciByZWZlc2ggPSBUT0tFTl9SRUZFU0hfRE9NLmdldEF0dHJpYnV0ZSgnZGF0YS1yZWZlc2gnKSxcclxuICAgICAgICAgICAgICAgIHVzZXJJZCA9IFRPS0VOX1JFRkVTSF9ET00uZ2V0QXR0cmlidXRlKCdkYXRhLXVzZXInKVxyXG5cclxuICAgICAgICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgICAgIC8vIHZhciBuYW1lID0gJ2lkJ1xyXG4gICAgICAgICAgICAvLyB2YXIgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgICAgIC8vIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1tcXFtcXF1dL2csICdcXFxcJCYnKTtcclxuICAgICAgICAgICAgLy8gdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnWz8mXScgKyBuYW1lICsgJyg9KFteJiNdKil8JnwjfCQpJyksXHJcbiAgICAgICAgICAgIC8vICAgICByZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpXHJcbiAgICAgICAgICAgIC8vIGlmICghcmVzdWx0cykgdXNlcklkID0gbnVsbFxyXG4gICAgICAgICAgICAvLyBlbHNlIGlmICghcmVzdWx0c1syXSkgdXNlcklkID0gJydcclxuICAgICAgICAgICAgLy8gZWxzZSB1c2VySWQgPSBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1syXS5yZXBsYWNlKC9cXCsvZywgJyAnKSlcclxuXHJcbiAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAgICAgaWYoIHVzZXJJZCApeyAvLyAmJiByZWZlc2hcclxuXHJcbiAgICAgICAgICAgICAgICBnZXRBY2Nlc3NUb2tlbkJ5UmVmZXNoKCB1c2VySWQsIHJlZmVzaCwgZGV0ZWN0LCBpbnN0YW5jZUNoYXQgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LWNoYXRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctY2hhdC10ZW1hbGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlci1wYWdlLWNoYXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNpZGVCYXJDaGF0IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0TWVzc2FnZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRldGVjdCAgICAgICA6IHN0YXRlLmNsaWVudFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShDaGF0KVxyXG5cclxuXHJcblxyXG5cclxuLy8gdXNlckNoYXQ6ICgzKSBbe1xyXG4vLyAgICAgYXZhdGFyOiBcIi9pbWFnZS9hdmF0YXItaGVyby5qcGdcIlxyXG4vLyAgICAgY2hhbm5lbE5hbWU6IFwiY29uc3VsdGluZy13ZWItZGVzaWduLTVlZDExOGEwNGZhNzU4MDViN2U5OTZmYlwiXHJcbi8vICAgICBpZDogXCI1ZWQxMThhMDRmYTc1ODA1YjdlOTk2ZmRcIlxyXG4vLyAgICAgaXNBY3RpdmU6IHRydWVcclxuLy8gICAgIGlzT25saW5lOiB0cnVlXHJcbi8vICAgICBtZXNzYWdlOiAoMTE4KSBbXHJcbiAgICAgICAgXHJcbi8vICAgICAgICAge3R5cGU6IHRydWUsIGNvbnRlbnQ6IFwiZ2ZkZ2ZkZ1wiLCBzdHlsZTogXCJcIiwgYXR0YWNobWVudDogQXJyYXkoMCl9XHJcbi8vICAgICAgICAge3R5cGU6IHRydWUsIGNvbnRlbnQ6IFwiIPCfkp0gXCIsIHN0eWxlOiBcIkVNT0pJXCIsIGF0dGFjaG1lbnQ6IG51bGx9XHJcbi8vICAgICAgICAge3R5cGU6IHRydWUsIGNvbnRlbnQ6IFwiIPCfmIQgXCIsIHN0eWxlOiBcIkVNT0pJXCIsIGF0dGFjaG1lbnQ6IEFycmF5KDApfVxyXG4vLyAgICAgICAgIHt0eXBlOiB0cnVlLCBjb250ZW50OiBcImV2ZW50LnBuZ1wiLCBzdHlsZTogXCJJTUFHRVwiLCBhdHRhY2htZW50OiBbXCIvdXBsb2Fkcy8xNTkxNTQwMjM3MDY0LWltYWdlLnBuZ1wiXSB9XHJcbi8vICAgICAgICAge+KApn0sIHvigKZ9LCB74oCmfSwge+KApn0sIHvigKZ9LCB74oCmfV1cclxuLy8gICAgIG5hbWU6IFwiaMO5bmcgxJHhurlwIHRyYWlcIlxyXG4vLyAgICAgdGltZUVuZE9ubGluZTogXCIyMDIwLTA1LTEwIDE0OjQ3OjAwXCJcclxuLy8gfSwge+KApn0sIHvigKZ9XVxyXG4vLyB1c2Vyczoge1xyXG4vLyAgICAgYXZhdGFyOiBcIi9pbWFnZS9hdmF0YXIuanBnXCJcclxuLy8gICAgIGVtYWlsOiBcImpidHJ1b25ndGhhbmhodW5nQGdtYWlsLmNvbVwiXHJcbi8vICAgICBuYW1lOiBcIuWkqeayvOa+hOWtkFwiXHJcbi8vICAgICBwaG9uZXM6IFt74oCmfV1cclxuLy8gICAgIHRva2Vuczoge3Rva2VuUmVmZXNoOiBcImNlYmJiMDg5MzY4MmMzNzhmNGY0NTk1ZDAzMWQxZTU0XCIsIHRva2VuQWNjZXNzOiBcIjc0MjIyNDg4ZDMxZTQ0ZDY1ZGZhOTA1M2FhMzM1MDczXCIsIHBlcmlvZDogXCIyMDIwLTA2LTEzVDAyOjMxOjE1LjU5N1pcIiwgZXhwaXJlOiA2MH1cclxuLy8gICAgIHVzZXJUeXBlOiBcIlVzZXJcIlxyXG4vLyAgICAgX2lkOiBcIjVlZDExOGEwNGZhNzU4MDViN2U5OTZmYlwiXHJcbi8vIH0iLCJ2YXIgbG9jYWwgICAgICA9IFwia2FzZWlmdS1iYWJ5c2l0dGVyLmNvbVwiLFxyXG4gICAgbG9jYWxfaXAgICA9IFwiMTUzLjEyNi4xNDIuNjdcIixcclxuICAgIGxvY2FsX3BvcnQgPSA5OTk5LFxyXG4gICAgcGVlcl9wb3J0ICA9IDcwMDBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBTRVJWRVI6IHtcclxuICAgIFBPUlQ6IGxvY2FsX3BvcnQsXHJcbiAgICBET01BSU46IGxvY2FsLFxyXG4gICAgSVA6IGxvY2FsX2lwLFxyXG4gICAgUEVFUl9QT1JUIDogcGVlcl9wb3J0LFxyXG4gICAgUFJPVE9DT0w6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKGxvY2FsX3BvcnQgPT0gNDQzKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiaHR0cHM6Ly9cIlxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBcImh0dHA6Ly9cIlxyXG4gICAgfSxcclxuICAgIEFTU0VUOiAoKSA9PiB7XHJcbiAgICAgIGxldCBwb3J0X3VybCA9ICcnXHJcbiAgICAgIGxldCBwcm90b2NvbCA9ICcnXHJcbiAgICAgIGlmIChsb2NhbF9wb3J0ID09IDQ0Mykge1xyXG4gICAgICAgIHByb3RvY29sID0gXCJodHRwczovL1wiXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJvdG9jb2wgPSBcImh0dHA6Ly9cIlxyXG4gICAgICAgIHBvcnRfdXJsID0gJzonICsgbG9jYWxfcG9ydFxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcHJvdG9jb2wgKyBsb2NhbCArIHBvcnRfdXJsO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgUk9MRV9VU0VSOiB7XHJcbiAgICBzaXR0ZXIgIDogMixcclxuICAgIGVtcGxveWVyOiAzLFxyXG4gICAgYWRtaW4gICA6IDFcclxuICB9LFxyXG4gIFNFUlZFUl9QSFA6IHtcclxuICAgIFVSTDogXCJodHRwOi8va2FzZWlmdS1iYWJ5c2l0dGVyLmNvbVwiIFxyXG4gIH0sXHJcbiAgXHJcbiAgRU1PSklTOiBbXHJcbiAgICB7IHN5bWJvbDogXCLwn6StXCIsIHNpZ246IFwiOjNcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+ko1wiLCBzaWduOiBcIjp2XCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmYJcIiwgc2lnbjogXCI6KVwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5mCXCIsIHNpZ246IFwiPSlcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YilwiLCBzaWduOiBcIjpeKVwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iAXCIsIHNpZ246IFwiOn1cIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YgVwiLCBzaWduOiBcIjpvKVwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iDXCIsIHNpZ246IFwiOi1EXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmIRcIiwgc2lnbjogXCI6RFwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iGXCIsIHNpZ246IFwiWC1EXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmI1cIiwgc2lnbjogXCJCXkRcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+ZgVwiLCBzaWduOiBcIjotKFwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5igXCIsIHNpZ246IFwiOihcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YoVwiLCBzaWduOiBcIjrigJE8XCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmJ5cIiwgc2lnbjogXCI6W1wiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5ifXCIsIHNpZ246IFwiPjpbXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmKNcIiwgc2lnbjogXCI6e1wiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iWXCIsIHNpZ246IFwiPjooXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmKJcIiwgc2lnbjogXCI6J+KAkShcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YrVwiLCBzaWduOiBcIjonKFwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iCXCIsIHNpZ246IFwiOicpXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmKhcIiwgc2lnbjogXCJE4oCRJzpcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+Yp1wiLCBzaWduOiBcIkQ6PFwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5imXCIsIHNpZ246IFwiRDpcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YsVwiLCBzaWduOiBcIkQ7XCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmKtcIiwgc2lnbjogXCJEPVwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5ipXCIsIHNpZ246IFwiRFhcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YrlwiLCBzaWduOiBcIjotMFwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5ivXCIsIHNpZ246IFwiOOKAkTBcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YslwiLCBzaWduOiBcIj46T1wiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iXXCIsIHNpZ246IFwiOi0qXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmJlcIiwgc2lnbjogXCI6XipcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YmlwiLCBzaWduOiBcIjpeLVwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iYXCIsIHNpZ246IFwiOnhcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YjVwiLCBzaWduOiBcIjpYXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmIlcIiwgc2lnbjogXCI74oCRKVwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5icXCIsIHNpZ246IFwiKi0pXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmJhcIiwgc2lnbjogXCI7RFwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5ibXCIsIHNpZ246IFwiOlBcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YnVwiLCBzaWduOiBcInjigJFwXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmJxcIiwgc2lnbjogXCI9cFwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn6SRXCIsIHNpZ246IFwiPjpQXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfpJRcIiwgc2lnbjogXCI64oCRL1wiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iVXCIsIHNpZ246IFwiOuKAkS5cIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+Yn1wiLCBzaWduOiBcIjpTXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmJBcIiwgc2lnbjogXCI64oCRfFwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iRXCIsIHNpZ246IFwiOnxcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+Ys1wiLCBzaWduOiBcIjokXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmJ5cIiwgc2lnbjogXCI6YjNcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YllwiLCBzaWduOiBcIjrigJFYXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfpJBcIiwgc2lnbjogXCI6JlwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5i2XCIsIHNpZ246IFwiTzrigJEpXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmIdcIiwgc2lnbjogXCJPOilcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+RvFwiLCBzaWduOiBcIjA7XilcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YiFwiLCBzaWduOiBcIj47M1wiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iOXCIsIHNpZ246IFwifDvigJEpXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmKpcIiwgc2lnbjogXCJ84oCRT1wiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iPXCIsIHNpZ246IFwiOuKAkUpcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YklwiLCBzaWduOiBcIiPigJEpXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmLVcIiwgc2lnbjogXCIl4oCRKVwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iVXCIsIHNpZ246IFwiJSlcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+kklwiLCBzaWduOiBcIjojL1wiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5i3XCIsIHNpZ246IFwiOkQtXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfpKJcIiwgc2lnbjogXCI6Y1JcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+klVwiLCBzaWduOiBcIjw64oCRL1wiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn6SoXCIsIHNpZ246IFwiOi1sXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfkp1cIiwgc2lnbjogXCI8M1wiIH1cclxuICBdXHJcbn0iLCIvLyBpbXBvcnQgJ2NvcmUtanMnO1xyXG5cclxuLyogcG9seWZpbGxzLmpzICovXHJcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnXHJcbmltcG9ydCAncmVhY3QtYXBwLXBvbHlmaWxsL2llMTEnXHJcbmltcG9ydCAnY29yZS1qcydcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IEFwcCBmcm9tIFwiLi9jb21wb25lbnQvQXBwLmpzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJztcclxuXHJcbmltcG9ydCAnLi9zY3NzL2luZGV4LnNjc3MnXHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFJlZHVjZXIpO1xyXG5zdG9yZS5zdWJzY3JpYmUoZnVuY3Rpb24oKXtcclxuICAgIGNvbnNvbGUubG9nKCdjw7MgdGhheSDEkeG7lWkgdHJvbmcgUmVkdXghIScpXHJcbiAgICBjb25zb2xlLmxvZyhzdG9yZS5nZXRTdGF0ZSgpKTtcclxufSk7XHJcbmlmICh0eXBlb2YgKFN0b3JhZ2UpICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgUmVhY3RET00ucmVuZGVyKFxyXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgICAgICA8QXBwIC8+XHJcbiAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJDSEFUX0VMRU1FTlRcIikpO1xyXG59ZWxzZXtcclxuICAgIGFsZXJ0KFwi44GT44Gu44OW44Op44Km44K244Gn44Gv44CB44Ki44OX44Oq44Kx44O844K344On44Oz44Gv5q2j5bi444Gr5YuV5L2c44GX44G+44Gb44KT44CCIOOCouODg+ODl+OCsOODrOODvOODieOBl+OBpuOBj+OBoOOBleOBhFwiKVxyXG59XHJcbiIsIlxyXG5cclxuaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vY29uZmlnXCJcclxuLy8gaW1wb3J0IFBlZXIgZnJvbSBcInBlZXJqc1wiXHJcbmltcG9ydCB7IHNldHRlclVzZXIsIHNldHRlckNoYW5uZWxzLCBhZGRNZXNzYWdlLCBhZGRNZXNzYWdlU2VuZFRvTWUsIFxyXG4gICAgc2V0dGVyU29ja2V0LCBhZGRVc2VyT25saW5lLCByZW1vdmVVc2VyT25saW5lLCByZWFkQWxsTWVzc2FnZUNoYW5uZWxBY3RpdmUsXHJcbiAgICBzZXR0ZXJCb29raW5ncywgY2hhbmdlQm9va2luZyB9IGZyb20gXCIuLi9hY3Rpb25cIlxyXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi9jb25maWdcIlxyXG5cclxuXHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIlxyXG5cclxuXHJcbi8vLyBjb25maWcgZ2xvYmFsIHZhcmlhYmxlXHJcbnZhciBzb2NrZXQgICAgICAgPSBudWxsLFxyXG4gICAgZ2xvYmFsU3RyZWFtID0gbnVsbCxcclxuICAgIEVWRU5UICAgICAgICA9IENPTkZJR19FVkVOVFxyXG4vLy8gZW5kIHNldHRpbmcgdmFyaWFibGVcclxuXHJcbndpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXBvbmVudC1lbW9qaScpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgZW1vamlzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1lbW9qaXNcIik7XHJcbiAgICBpZiAoZW1vamlzKSB7XHJcbiAgICAgICAgZW1vamlzLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoZW1vamlzLmNsYXNzTGlzdC5jb250YWlucyhcInNob3ctdGVtcFwiKSkge1xyXG4gICAgICAgICAgICAgICAgZW1vamlzLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LXRlbXBcIik7XHJcbiAgICAgICAgICAgICAgICBlbW9qaXMuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBY2Nlc3NUb2tlbkJ5UmVmZXNoKCB1c2VySWQsIHJlZmVzaCwgZGV0ZWN0LCBpbnN0YW5jZUNvbXBvbmVudCApIHtcclxuICAgIFxyXG4gICAgXHJcbiAgICB2YXIgZGF0YSAgICAgICA9IHsgdXNlcklkLCByZWZlc2gsIGRldGVjdDogSlNPTi5zdHJpbmdpZnkoZGV0ZWN0KSB9LFxyXG4gICAgICAgIHRva2Vuc1VzZXIgPSBudWxsXHJcbiAgICBmZXRjaChDT05GSUcuU0VSVkVSLkFTU0VUKCkgKyAnL2FwaS9yZWZlc2gnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5jb2RlICE9IDIwMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLjg63jgrDjgqTjg7Pjgrvjg4Pjgrfjg6fjg7PjgYzmraPjgZfjgY/jgYLjgorjgb7jgZvjgpPjgIIg5YaN5bqm44Ot44Kw44Kk44Oz44GZ44KL44GL44CB566h55CG6ICF44Gr6YCj57Wh44GX44Gm44GP44Gg44GV44GEXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRva2Vuc1VzZXIgPSB7IFxyXG4gICAgICAgICAgICBleHBpcmUgICAgIDogcmVzcG9uc2UuZGF0YS5leHBpcmUsXHJcbiAgICAgICAgICAgIHBlcmlvZCAgICAgOiByZXNwb25zZS5kYXRhLnBlcmlvZCxcclxuICAgICAgICAgICAgdG9rZW5BY2Nlc3M6IHJlc3BvbnNlLmRhdGEudG9rZW5BY2Nlc3MsXHJcbiAgICAgICAgICAgIHRva2VuUmVmZXNoOiByZXNwb25zZS5kYXRhLnRva2VuUmVmZXNoXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2V0aW1lIG91dCAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBDT05GSUcuU0VSVkVSX1BIUC5VUkxcIilcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgICAgICAgfSwgcGFyc2VJbnQocmVzcG9uc2UuZGF0YS5leHBpcmUpICogMTAwMCApXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHVzZXJMb2dpbiA9IHsgLi4uIHJlc3BvbnNlLmRhdGEudXNlciwgdG9rZW5zIDogdG9rZW5zVXNlciB9XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyTG9naW4pKVxyXG4gICAgICAgIGluc3RhbmNlQ29tcG9uZW50LnByb3BzLmRpc3BhdGNoKHNldHRlclVzZXIodXNlckxvZ2luKSlcclxuICAgICAgICByZXR1cm4geyBhdXRoOiB1c2VyTG9naW4sIGRldGVjdCB9XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oIGRhdGFGZXRjaENoYW5uZWwgPT4ge1xyXG5cclxuICAgICAgICB2YXIgZGF0YSA9IHsgXHJcbiAgICAgICAgICAgIHVzZXJJZDogcGFyc2VJbnQodXNlcklkKSxcclxuICAgICAgICAgICAgYWNjZXNzOiBkYXRhRmV0Y2hDaGFubmVsLmF1dGgudG9rZW5zLnRva2VuQWNjZXNzLCBcclxuICAgICAgICAgICAgZGV0ZWN0OiBKU09OLnN0cmluZ2lmeShkYXRhRmV0Y2hDaGFubmVsLmRldGVjdClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZldGNoQ2hhbm5lbE1lc3NhZ2UoIGRhdGEgKVxyXG4gICAgfSlcclxuICAgIC50aGVuKCBkYXRhQ2hhbm5lbCA9PiB7XHJcbiAgICAgICAgaWYoIGRhdGFDaGFubmVsICl7XHJcbiAgICAgICAgICAgIGluc3RhbmNlQ29tcG9uZW50LnByb3BzLmRpc3BhdGNoKHNldHRlckNoYW5uZWxzKGRhdGFDaGFubmVsKSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBhbGVydChcIuODreOCsOOCpOODs+OCu+ODg+OCt+ODp+ODs+OBjOato+OBl+OBj+OBguOCiuOBvuOBm+OCk+OAgiDlho3luqbjg63jgrDjgqTjg7PjgZnjgovjgYvjgIHnrqHnkIbogIXjgavpgKPntaHjgZfjgabjgY/jgaDjgZXjgYRcIilcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNvY2tldEluaXRpYWxDb25uZWN0KHNvY2tldElPQ2xpZW50LCBpbnN0YW5jZUFwcCkge1xyXG4gICAgXHJcbiAgICBcclxuICAgIHNvY2tldCA9IHNvY2tldElPQ2xpZW50KENPTkZJRy5TRVJWRVIuQVNTRVQoKSlcclxuICAgIHZhciBBcHBsaWNhdGlvbkRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQXBwbGljYXRpb25cIilcclxuICAgIHNvY2tldC5vbignY29ubmVjdCcsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgQXBwbGljYXRpb25Eb20gJiYgQXBwbGljYXRpb25Eb20uY2xhc3NMaXN0LnJlbW92ZShcImNvbm5lY3Qtc29ja2V0LWVycm9yXCIpXHJcbiAgICAgICAgLy8vLyBzZXQgY29uZmlnXHJcbiAgICAgICAgc29ja2V0TGlzdGVubmVyKHNvY2tldCwgaW5zdGFuY2VBcHApXHJcbiAgICAgICAgaW5zdGFuY2VBcHAucHJvcHMuZGlzcGF0Y2goc2V0dGVyU29ja2V0KHNvY2tldCkpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzb2NrZXQgY29ubmVjdFwiKVxyXG4gICAgfSk7XHJcbiAgICBzb2NrZXQub24oJ2Rpc2Nvbm5lY3QnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaW5zdGFuY2VBcHAucHJvcHMuZGlzcGF0Y2goc2V0dGVyU29ja2V0KG51bGwpKVxyXG4gICAgICAgIEFwcGxpY2F0aW9uRG9tICYmIEFwcGxpY2F0aW9uRG9tLmNsYXNzTGlzdC5hZGQoXCJjb25uZWN0LXNvY2tldC1lcnJvclwiKVxyXG4gICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKENPTkZJRy5TRVJWRVJfUEhQLlVSTClcclxuICAgIH0pO1xyXG4gICAgc29ja2V0Lm9uKCdjb25uZWN0X2Vycm9yJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIEFwcGxpY2F0aW9uRG9tICYmIEFwcGxpY2F0aW9uRG9tLmNsYXNzTGlzdC5hZGQoXCJjb25uZWN0LXNvY2tldC1lcnJvclwiKVxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKENPTkZJRy5TRVJWRVJfUEhQLlVSTClcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyAvL0NhbGxlclxyXG5leHBvcnQgZnVuY3Rpb24gY2FsbGVyKCBjaGFubmVsSW5mb3IsIHVzZXIsIGNsaWVudCApe1xyXG4gICAgdmFyIGlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJBcHBsaWNhdGlvblwiKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGVlcicgKVxyXG4gICAgXHJcbiAgICBvcGVuU3RyZWFtKClcclxuICAgIC50aGVuKHN0cmVhbSA9PiB7XHJcbiAgICAgICAgZ2xvYmFsU3RyZWFtID0gc3RyZWFtXHJcbiAgICAgICAgcGxheVN0cmVhbSgnaWQtcGVlci1sb2NhbCcsIHN0cmVhbSk7XHJcbiAgICAgICAgLy8vIGZldGNoIHBlZXJqcyBvZiB1c2VyIGluIGNoYW5uZWxcclxuICAgICAgICByZXR1cm4gZ2V0UGVlclVzZXJDaGFubmVsKCBjaGFubmVsSW5mb3IsIHVzZXIsIGNsaWVudCApXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjYWxsZXJcIiwgZXJyb3IpXHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRNZXNzYWdlVG9DaGFubmVsKG1lc3NhZ2UsIHN0eWxlLCBhdHRhY2htZW50LCBjaGFubmVsSWQsIGFjY2VzcywgZGV0ZWN0LCBpbnN0YW5jZUNvbXBvbmVudCkge1xyXG5cclxuICAgIHNvY2tldC5lbWl0KEVWRU5ULlNFTkRfTUVTU0FHRSwgeyBtZXNzYWdlLCBzdHlsZSwgYXR0YWNobWVudCwgY2hhbm5lbElkLCBhY2Nlc3MsIGRldGVjdDogSlNPTi5zdHJpbmdpZnkoZGV0ZWN0KSB9KVxyXG4gICAgLy8vIFxyXG4gICAgaW5zdGFuY2VDb21wb25lbnQucHJvcHMuZGlzcGF0Y2goYWRkTWVzc2FnZSh7IHR5cGU6IHRydWUsIHJlYWQ6IHRydWUsIGNvbnRlbnQ6IG1lc3NhZ2UsIHN0eWxlLCBhdHRhY2htZW50IH0pKVxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRUeXBpbmdNZXNzYWdlVG9DaGFubmVsKGNoYW5uZWxJZCwgY2hhbm5lbE5hbWUsIGFjY2VzcyApIHtcclxuICAgIFxyXG4gICAgc29ja2V0LmVtaXQoRVZFTlQuU0VORF9UWVBJTkcsIHsgY2hhbm5lbElkLCBjaGFubmVsTmFtZSwgYWNjZXNzIH0pXHJcbiAgICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUJsb2JUb1NlcnZlcihmaWxlKSB7XHJcbiAgICB2YXIgU0laRV9MSU1JVCA9IDUgKiAxMDI0ICogMTAyNFxyXG5cclxuICAgIGlmKCAhZmlsZS5zaXplIHx8IGZpbGUuc2l6ZSA+IFNJWkVfTElNSVQgKXtcclxuICAgICAgICBoYW5kbGVFcnJvclVwbG9hZEZpbGUoKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZXQgZGF0YUZpbGUgPSBmaWxlXHJcbiAgICBsZXQgZm9ybSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICBmb3JtLmFwcGVuZCgnZmlsZScsIGRhdGFGaWxlKVxyXG4gICAgZm9ybS5hcHBlbmQoJ3VzZXJfaWQnLCAxKVxyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsICAgICAgICA6IENPTkZJRy5TRVJWRVJfUEhQLlVSTCArICcvYXBpL3VwbG9hZCcsXHJcbiAgICAgICAgdHlwZSAgICAgICA6ICdwb3N0JyxcclxuICAgICAgICBlbmN0eXBlICAgIDogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxyXG4gICAgICAgIGRhdGEgICAgICAgOiBmb3JtLFxyXG4gICAgICAgIGNhY2hlICAgICAgOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCByZXNwb25zZSApe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmNvZGUgIT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVFcnJvclVwbG9hZEZpbGUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciByZVdyaXRlVXJsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pbWFnZS0tYmxvY2tcIikuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImpzLXNpZ24tdXJsXCIpXHJcbiAgICAgICAgICAgIGlmIChyZVdyaXRlVXJsLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmVXcml0ZVVybFswXS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXVybFwiLCByZXNwb25zZS5kYXRhLnVybClcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdHlwZUZpbGUgPSByZXNwb25zZS5kYXRhLmZpbGVfbmFtZSxcclxuICAgICAgICAgICAgICAgIGV4dGVudGlvblR5cGUgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBpZiggdHlwZUZpbGUgKXtcclxuICAgICAgICAgICAgICAgICAgICBleHRlbnRpb25UeXBlID0gZ2V0VHlwZUZpbGUoIHR5cGVGaWxlIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKCAhZXh0ZW50aW9uVHlwZSApe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlV3JpdGVVcmxbMF0ucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJlV3JpdGVVcmxbMF0uc2V0QXR0cmlidXRlKFwiZGF0YS10eXBlXCIsIGV4dGVudGlvblR5cGUgKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlV3JpdGVVcmxbMF0uY2xhc3NMaXN0LnJlbW92ZShcImpzLXNpZ24tdXJsXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBoYW5kbGVFcnJvclVwbG9hZEZpbGUoKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RlblNjcm9sbE1lc3NhZ2UoZSwgbWVzc2FnZXMsIGNoYW5uZWxBY3RpdmUgKSB7IFxyXG4gICAgICAgICAgICAgICBcclxuICAgIGlmKCFtZXNzYWdlcyB8fCAhbWVzc2FnZXMubGVuZ3RoKXtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIHZhciBkb21TY3JvbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLXNjcm9sbC10by1ib3R0b21cIilcclxuICAgIC8vIGNvbnNvbGUubG9nKGRvbVNjcm9sbC5zY3JvbGxIZWlnaHQsIGRvbVNjcm9sbC5jbGllbnRIZWlnaHQgKyBcImxpc3RlblNjcm9sbE1lc3NhZ2VcIilcclxuICAgIGlmICgkKGUpLnNjcm9sbFRvcCgpICsgXHJcbiAgICAgICAgJChlKS5pbm5lckhlaWdodCgpID49ICBcclxuICAgICAgICAkKGUpWzBdLnNjcm9sbEhlaWdodCkgeyBcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pcy13cml0ZS1tZXNzYWdlXCIpLmNsYXNzTGlzdC5hZGQoXCJmb2xsb3ctY29udmVyc2F0aW9uXCIpXHJcbiAgICAgICAgICAgIC8vLyBjaGVjayBtZXNzYWdlIHVucmVhZFxyXG4gICAgICAgICAgICB2YXIgZXhpc3ROb25lUmVhZCA9IG1lc3NhZ2VzLnNvbWUoIGZ1bmN0aW9uKCBtZXNzYWdlICl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJldHVybiAhbWVzc2FnZS5yZWFkICYmICFtZXNzYWdlLnR5cGVcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGlmKCBleGlzdE5vbmVSZWFkICl7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhFVkVOVC5SRUFEX01FU1NBR0VfQUxMLCBcImxpc3RlblNjcm9sbE1lc3NhZ2VcIilcclxuICAgICAgICAgICAgICAgIHZhciB1c2VyTG9jYWwgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpXHJcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdChFVkVOVC5SRUFEX01FU1NBR0VfQUxMLCB7IHVzZXIgOiB1c2VyTG9jYWwuaWQsIGNoYW5uZWxJZDogY2hhbm5lbEFjdGl2ZS5pZCwgY2hhbm5lbE5hbWU6IGNoYW5uZWxBY3RpdmUuY2hhbm5lbE5hbWUgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pcy13cml0ZS1tZXNzYWdlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJmb2xsb3ctY29udmVyc2F0aW9uXCIpXHJcbiAgICB9IFxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBsaXN0ZW5SZWFkTWVzc2FnZU5ld1VzZXIoIG1lc3NhZ2VzLCBjaGFubmVsQWN0aXZlICkgeyBcclxuICAgICAgICAgICAgICAgXHJcbiAgICBpZighbWVzc2FnZXMgfHwgIW1lc3NhZ2VzLmxlbmd0aCl7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZhciBleGlzdE5vbmVSZWFkID0gbWVzc2FnZXMuc29tZSggZnVuY3Rpb24oIG1lc3NhZ2UgKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuICFtZXNzYWdlLnJlYWQgJiYgIW1lc3NhZ2UudHlwZVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiggZXhpc3ROb25lUmVhZCApe1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKEVWRU5ULlJFQURfTUVTU0FHRV9BTEwsIFwibGlzdGVuUmVhZE1lc3NhZ2VOZXdVc2VyXCIpXHJcbiAgICAgICAgdmFyIHVzZXJMb2NhbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSlcclxuICAgICAgICBzb2NrZXQuZW1pdChFVkVOVC5SRUFEX01FU1NBR0VfQUxMLCB7IHVzZXIgOiB1c2VyTG9jYWwuaWQsIGNoYW5uZWxJZDogY2hhbm5lbEFjdGl2ZS5pZCwgY2hhbm5lbE5hbWU6IGNoYW5uZWxBY3RpdmUuY2hhbm5lbE5hbWUgfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZW5kQm9va2luZ1VwZGF0ZShib29raW5nVXBkYXRlKSB7XHJcbiAgICBzb2NrZXQuZW1pdChFVkVOVC5VU0VSX0NIQU5HRV9CT09LSU5HLCBib29raW5nVXBkYXRlKVxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdG9yQmlsbChib29raW5nLCBhdXRoICkge1xyXG5cclxuICAgIC8vLyBwaMOtIHPhu60gZOG7pW5nIGThu4tjaCB24bulIGPhu6dhIHNpdHRlciBsw6AgNDUwIHnDqm4gKyAoIDI1JSBj4bunYSB04buVbmcgdGnhu4FuIGzGsMahbmcgKVxyXG4gICAgY29uc3QgRkVFX0RFRkFVTFRfU0lUVEVSX01JTiA9IDQ1MFxyXG4gICAgY29uc3QgUEVSQ0VOVF9GRUVfU0lUVEVSID0gMC4wMDI1XHJcbiAgICAvLy8gcGjDrSB2YXQgMTAlIFxyXG4gICAgY29uc3QgUEVSQ0VOVF9WQVRfREVGQVVMVCA9IDAuMVxyXG4gICAgLy8vIHBow60gY+G7p2EgZW1wbG95ZXIgMjAlIFxyXG4gICAgY29uc3QgUEVSQ0VOVF9GRUVfRU1QTE9ZRVIgPSAwLjJcclxuICAgIC8vLyBraGkgZ+G7rWkgbMOqbiBzdHJpcGUgdGjDrCBwaMOtIGzDoCAzLjYlXHJcbiAgICBjb25zdCBQRVJDRU5UX0ZFRV9TVFJJUEUgPSAwLjAzNlxyXG5cclxuICAgIHZhciB3b3JrX2RhdGUgPSBib29raW5nLndvcmtfZGF0ZSxcclxuICAgICAgICBzdGFydCAgICAgPSBib29raW5nLnN0YXJ0LFxyXG4gICAgICAgIGZpbmlzaCAgICA9IGJvb2tpbmcuZmluaXNoLFxyXG4gICAgICAgIHNhbGFyeSAgICA9IGJvb2tpbmcuc2FsYXJ5XHJcblxyXG4gICAgdmFyIGRpZmZlcmVuY2VUaW1lICAgID0gMCxcclxuICAgICAgICBwcmljZSAgICAgICAgICAgICA9IDAsXHJcbiAgICAgICAgbXlTZXJ2RmVlU2l0dGVyICAgPSAwLFxyXG4gICAgICAgIG15U2VydkZlZUVtcGxveWVyID0gMCxcclxuICAgICAgICBzdHJpcGVTZXJ2RmVlICAgICA9IDAsXHJcbiAgICAgICAgdmF0ICAgICAgICAgICAgICAgPSAwLFxyXG4gICAgICAgIHRvdGFsICAgICAgICAgICAgID0gMFxyXG4gICAgXHJcbiAgICBpZiggc2FsYXJ5ICYmIHdvcmtfZGF0ZSAmJiBzdGFydCAmJiBmaW5pc2ggKXtcclxuICAgICAgICB2YXIgWyBmSG91ciwgZk1pbnV0ZSBdID0gZmluaXNoLnNwbGl0KCc6JyksXHJcbiAgICAgICAgICAgIFsgc0hvdXIsIHNNaW51dGUgXSA9IHN0YXJ0LnNwbGl0KCc6JylcclxuICAgICAgICB2YXIgZGF0ZVRpbWVGaW5pc2ggICAgID0gKG5ldyBEYXRlKDEsMSwyMDIwLCBmSG91ciwgZk1pbnV0ZSwgMCkpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZGF0ZVRpbWVTdGFydCAgICAgID0gKG5ldyBEYXRlKDEsMSwyMDIwLCBzSG91ciwgc01pbnV0ZSwgMCkpLmdldFRpbWUoKVxyXG5cclxuICAgICAgICAgICAgZGlmZmVyZW5jZVRpbWUgICAgPSAoZGF0ZVRpbWVGaW5pc2ggLSBkYXRlVGltZVN0YXJ0KS8gMTAwMCAvIDYwIC8gNjBcclxuICAgICAgICAgICAgcHJpY2UgICAgICAgICAgICAgPSBNYXRoLmZsb29yKGRpZmZlcmVuY2VUaW1lICogc2FsYXJ5KVxyXG4gICAgICAgICAgICBteVNlcnZGZWVFbXBsb3llciA9IE1hdGguZmxvb3IocHJpY2UgKiBQRVJDRU5UX0ZFRV9FTVBMT1lFUilcclxuICAgICAgICAgICAgbXlTZXJ2RmVlU2l0dGVyICAgPSBNYXRoLmZsb29yKCBwcmljZSAqIFBFUkNFTlRfRkVFX1NJVFRFUiApICsgRkVFX0RFRkFVTFRfU0lUVEVSX01JTlxyXG4gICAgICAgICAgICB2YXQgICAgICAgICAgICAgICA9IE1hdGguZmxvb3IoKHByaWNlICsgbXlTZXJ2RmVlRW1wbG95ZXIpICogUEVSQ0VOVF9WQVRfREVGQVVMVClcclxuICAgICAgICAgICAgc3RyaXBlU2VydkZlZSAgICAgPSBNYXRoLmZsb29yKChwcmljZSArIG15U2VydkZlZUVtcGxveWVyICsgdmF0KSAqIFBFUkNFTlRfRkVFX1NUUklQRSlcclxuICAgIH1cclxuICAgIGlmKCBhdXRoLnJvbGVfaWQgPT0gY29uZmlnLlJPTEVfVVNFUi5zaXR0ZXIgKXtcclxuICAgICAgICBcclxuICAgICAgICB0b3RhbCA9IHByaWNlIC0gc3RyaXBlU2VydkZlZSAtIG15U2VydkZlZVNpdHRlclxyXG4gICAgfWVsc2UgaWYoIGF1dGgucm9sZV9pZCA9PSBjb25maWcuUk9MRV9VU0VSLmVtcGxveWVyICl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdG90YWwgPSBwcmljZSArIHZhdCArIG15U2VydkZlZUVtcGxveWVyXHJcbiAgICB9XHJcbiAgICByZXR1cm4gWyB3b3JrX2RhdGUsIHN0YXJ0LCBmaW5pc2gsIHNhbGFyeSwgZGlmZmVyZW5jZVRpbWUsIHByaWNlLCB2YXQsIG15U2VydkZlZVNpdHRlciwgbXlTZXJ2RmVlRW1wbG95ZXIsIHN0cmlwZVNlcnZGZWUsIHRvdGFsIF1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0b3JGZWVTdHJpcGUoYW1vdW50LCBjdXJyZW5jeSkge1xyXG4gICAgdmFyIGZlZXMgPSB7IFxyXG4gICAgICAgIFVTRDogeyBQZXJjZW50OiAyLjksIEZpeGVkOiAwLjMwIH0sXHJcbiAgICAgICAgR0JQOiB7IFBlcmNlbnQ6IDIuNCwgRml4ZWQ6IDAuMjAgfSxcclxuICAgICAgICBFVVI6IHsgUGVyY2VudDogMi40LCBGaXhlZDogMC4yNCB9LFxyXG4gICAgICAgIENBRDogeyBQZXJjZW50OiAyLjksIEZpeGVkOiAwLjMwIH0sXHJcbiAgICAgICAgQVVEOiB7IFBlcmNlbnQ6IDIuOSwgRml4ZWQ6IDAuMzAgfSxcclxuICAgICAgICBOT0s6IHsgUGVyY2VudDogMi45LCBGaXhlZDogMiB9LFxyXG4gICAgICAgIERLSzogeyBQZXJjZW50OiAyLjksIEZpeGVkOiAxLjggfSxcclxuICAgICAgICBTRUs6IHsgUGVyY2VudDogMi45LCBGaXhlZDogMS44IH0sXHJcbiAgICAgICAgSlBZOiB7IFBlcmNlbnQ6IDMuNiwgRml4ZWQ6IDAgfSxcclxuICAgICAgICBNWE46IHsgUGVyY2VudDogMy42LCBGaXhlZDogMyB9XHJcbiAgICB9XHJcbiAgICB2YXIgREVGQVVMVF9QRVJDRU5UX1NUUklQRSA9IDMuNjtcclxuICAgIHZhciBfZmVlID0gX2ZlZSA9IHsgUGVyY2VudDogREVGQVVMVF9QRVJDRU5UX1NUUklQRSwgRml4ZWQ6IDAgfVxyXG4gICAgaWYodHlwZW9mIGZlZXNTdHJpcGUgIT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIF9mZWUgPSBmZWVzW2N1cnJlbmN5XTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdmFyIGFtb3VudCA9IHBhcnNlRmxvYXQoYW1vdW50KTtcclxuICAgIHZhciB0b3RhbCA9IChhbW91bnQgKyBwYXJzZUZsb2F0KF9mZWUuRml4ZWQpKSAvICgxIC0gcGFyc2VGbG9hdChfZmVlLlBlcmNlbnQpIC8gMTAwKTtcclxuICAgIHZhciBmZWUgPSB0b3RhbCAtIGFtb3VudDtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFtb3VudDogYW1vdW50LFxyXG4gICAgICAgIGZlZTogZmVlLnRvRml4ZWQoMiksXHJcbiAgICAgICAgdG90YWw6IHRvdGFsLnRvRml4ZWQoMilcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIGhhbmRsZUVycm9yVXBsb2FkRmlsZSgpe1xyXG4gICAgdmFyIHJlV3JpdGVVcmwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWltYWdlLS1ibG9ja1wiKS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwianMtc2lnbi11cmxcIilcclxuICAgIGlmIChyZVdyaXRlVXJsLmxlbmd0aCkge1xyXG4gICAgICAgIHJlV3JpdGVVcmxbMF0ucmVtb3ZlKClcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBnZXRUeXBlRmlsZSggZmlsZW5hbWUgKXtcclxuICAgIHZhciBhY2NlcHQgPSAvKFxcLmpwZ3xcXC5qcGVnfFxcLmJtcHxcXC5naWZ8XFwucG5nfFxcLmltYWdlKSQvaVxyXG4gICAgaWYoYWNjZXB0LmV4ZWMoZmlsZW5hbWUpKXsgXHJcbiAgICAgICAgcmV0dXJuIFwiaW1nXCJcclxuICAgIH1cclxuICAgIHZhciBhY2NlcHQgPSAvKFxcLnhsc3xcXC54bHN4fFxcLmNzdnxcXC5wZGZ8XFwuZG9jfFxcLmRvY3gpJC9pXHJcbiAgICBpZihhY2NlcHQuZXhlYyhmaWxlbmFtZSkpeyBcclxuXHJcbiAgICAgICAgcmV0dXJuIFwiZmlsZVwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbFxyXG59XHJcbmZ1bmN0aW9uIHZhbGlkYXRlRmV0Y2hDaGFubmVsTWVzc2FnZShkYXRhKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHZhciB7IGFjY2VzcyB9ID0gZGF0YVxyXG4gICAgICAgIGlmICggIWFjY2VzcyApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi6YGu44KLXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmZXRjaENoYW5uZWxNZXNzYWdlKCBkYXRhICkge1xyXG4gICAgXHJcbiAgICB2YXIgaXNWYWxpZCA9IHZhbGlkYXRlRmV0Y2hDaGFubmVsTWVzc2FnZShkYXRhKVxyXG4gICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgICAgYWxlcnQoXCLjgqjjg6njg7zjgYznmbrnlJ/jgZfjgb7jgZfjgZ/jgILjgZfjgbDjgonjgY/jgZfjgabjgYvjgonjgoLjgYbkuIDluqbjgYroqabjgZfjgY/jgaDjgZXjgYQxXCIpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBpZiggdHlwZW9mIElEX1ZJRVdfVVNFUl9DSEFUICE9ICd1bmRlZmluZWQnICYmIElEX1ZJRVdfVVNFUl9DSEFUICl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGF0YS51c2VySWRBY3RpdmVDaGFubmVsID0gSURfVklFV19VU0VSX0NIQVRcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYWN0aW9uID0gQ09ORklHLlNFUlZFUi5BU1NFVCgpICsgJy9hcGkvY2hhbm5lbHMnXHJcbiAgICByZXR1cm4gZmV0Y2goYWN0aW9uLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyggcmVzcG9uc2UgLCBhY3Rpb24pXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLmNvZGUgIT0gMjAwKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLjgqjjg6njg7zjgYznmbrnlJ/jgZfjgb7jgZfjgZ/jgILjgZfjgbDjgonjgY/jgZfjgabjgYvjgonjgoLjgYbkuIDluqbjgYroqabjgZfjgY/jgaDjgZXjgYQyXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgXCIgaGF2ZSBlcnJvciBcIilcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH0pXHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuLy8gY29uc3QgcGVlciA9IG5ldyBQZWVyKHsgXHJcbi8vICAgICBob3N0OiAnMTI3LjAuMC4xJyxcclxuLy8gICAgIHBvcnQ6IGNvbmZpZy5TRVJWRVIuUEVFUl9QT1JULFxyXG4vLyAgICAgcGF0aDogJy9teWFwcCdcclxuLy8gfSlcclxuXHJcbi8vIHBlZXIub24oJ29wZW4nLCBpZCA9PiB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVwiKVxyXG4vLyAgICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PT09PT09PVwiICsgaWQgKyBcIj09PT09PT09PT09PT09PT1cIilcclxuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQXBwbGljYXRpb25cIikuc2V0QXR0cmlidXRlKCdkYXRhLXBlZXInLCBpZCApXHJcbi8vICAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVwiKVxyXG4vLyB9KVxyXG5cclxuXHJcblxyXG4vLyAvLyAvL0NhbGxlZVxyXG4vLyBwZWVyLm9uKCdjYWxsJywgY2FsbCA9PiB7XHJcbi8vICAgICBvcGVuU3RyZWFtKClcclxuLy8gICAgIC50aGVuKHN0cmVhbSA9PiB7XHJcbi8vICAgICAgICAgY2FsbC5hbnN3ZXIoc3RyZWFtKTtcclxuLy8gICAgICAgICBwbGF5U3RyZWFtKCdsb2NhbFN0cmVhbScsIHN0cmVhbSk7XHJcbi8vICAgICAgICAgY2FsbC5vbignc3RyZWFtJywgcmVtb3RlU3RyZWFtID0+IHBsYXlTdHJlYW0oJ3JlbW90ZVN0cmVhbScsIHJlbW90ZVN0cmVhbSkpO1xyXG4vLyAgICAgfSlcclxuLy8gICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFwicGVlci5vbignY2FsbCdcIilcclxuLy8gICAgIH0pXHJcbi8vIH0pO1xyXG5cclxuLy8gJCgnI3VsVXNlcicpLm9uKCdjbGljaycsICdsaScsIGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgY29uc3QgaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhpZCk7XHJcbi8vICAgICBvcGVuU3RyZWFtKClcclxuLy8gICAgIC50aGVuKHN0cmVhbSA9PiB7XHJcbi8vICAgICAgICAgcGxheVN0cmVhbSgnbG9jYWxTdHJlYW0nLCBzdHJlYW0pO1xyXG4vLyAgICAgICAgIGNvbnN0IGNhbGwgPSBwZWVyLmNhbGwoaWQsIHN0cmVhbSk7XHJcbi8vICAgICAgICAgY2FsbC5vbignc3RyZWFtJywgcmVtb3RlU3RyZWFtID0+IHBsYXlTdHJlYW0oJ3JlbW90ZVN0cmVhbScsIHJlbW90ZVN0cmVhbSkpO1xyXG4vLyAgICAgfSk7XHJcbi8vIH0pO1xyXG5cclxuLy8gZnVuY3Rpb24gb3BlblN0cmVhbSgpIHtcclxuLy8gICAgIGNvbnN0IGNvbmZpZyA9IHsgYXVkaW86IGZhbHNlLCB2aWRlbzogdHJ1ZSB9O1xyXG4vLyAgICAgcmV0dXJuIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKGNvbmZpZyk7XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIHBsYXlTdHJlYW0oaWRWaWRlb1RhZywgc3RyZWFtKSB7XHJcbi8vICAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkVmlkZW9UYWcpO1xyXG4vLyAgICAgdmlkZW8uc3JjT2JqZWN0ID0gc3RyZWFtO1xyXG4vLyAgICAgdmlkZW8ucGxheSgpO1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBnZXRQZWVyVXNlckNoYW5uZWwoIGNoYW5uZWxJbmZvciwgdXNlciwgY2xpZW50ICl7XHJcblxyXG4vLyAgICAgdmFyIGNoYW5uZWxJZCA9IGNoYW5uZWxJbmZvci5pZCxcclxuLy8gICAgIGFjY2VzcyA9IHVzZXIudG9rZW5zLnRva2VuQWNjZXNzXHJcbi8vICAgICBpZiggc29ja2V0ICl7XHJcbi8vICAgICAgICAgc29ja2V0LmVtaXQoRVZFTlQuU0VORF9QRUVSLCB7IGNoYW5uZWxJZCwgYWNjZXNzLCAuLi5jbGllbnQgfSlcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gb3BlblN0cmVhbSgpXHJcbi8vIC50aGVuKHN0cmVhbSA9PiBwbGF5U3RyZWFtKCdsb2NhbFN0cmVhbScsIHN0cmVhbSkpO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzb2NrZXRMaXN0ZW5uZXIoIHNvY2tldCwgaW5zdGFuY2VBcHAgKXtcclxuXHJcbiAgICBzb2NrZXQub24oRVZFTlQuVVNFUl9PTkxJTkVfTk9USSwgZGF0YSA9PiB7XHJcbiAgICAgICAgLy8vIFxyXG4gICAgICAgIGluc3RhbmNlQXBwLnByb3BzLmRpc3BhdGNoKGFkZFVzZXJPbmxpbmUoIGRhdGEudXNlciApKVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgc29ja2V0Lm9uKEVWRU5ULlVTRVJfT0ZGTElORV9OT1RJLCBkYXRhID0+IHtcclxuICAgICAgICAvLy8gXHJcbiAgICAgICAgaW5zdGFuY2VBcHAucHJvcHMuZGlzcGF0Y2gocmVtb3ZlVXNlck9ubGluZSggZGF0YS51c2VyICkpXHJcbiAgICB9KVxyXG5cclxuICAgIHNvY2tldC5vbihFVkVOVC5SRVNQT05TRV9NRVNTQUdFLCBkYXRhID0+IHtcclxuICAgICAgICBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhFVkVOVC5SRVNQT05TRV9NRVNTQUdFLCBkYXRhKVxyXG4gICAgICAgIHZhciB7IHVzZXIsIHRva2VuLCBtZXNzYWdlLCBzdHlsZSwgYXR0YWNobWVudCwgY2hhbm5lbCwgZGV0ZWN0IH0gPSBkYXRhIFxyXG4gICAgICAgIHZhciB1c2VyTG9jYWwgICA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSksXHJcbiAgICAgICAgICAgIGRldGVjdExvY2FsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RldGVjdCcpXHJcblxyXG4gICAgICAgIGlmKCBcclxuICAgICAgICAgICAgdXNlckxvY2FsICYmIFxyXG4gICAgICAgICAgICB1c2VyTG9jYWwuaWQgPT0gdXNlciAmJiBcclxuICAgICAgICAgICAgdXNlckxvY2FsLnRva2Vucy50b2tlbkFjY2VzcyA9PSB0b2tlbiAmJlxyXG4gICAgICAgICAgICBkZXRlY3QgPT0gZGV0ZWN0TG9jYWxcclxuICAgICAgICAgICAgKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluc3RhbmNlQXBwLnByb3BzLmRpc3BhdGNoKCBhZGRNZXNzYWdlU2VuZFRvTWUoeyB0eXBlOiAodXNlckxvY2FsLmlkID09IHVzZXIpLCBjb250ZW50OiBtZXNzYWdlLCBzdHlsZSwgYXR0YWNobWVudCwgY2hhbm5lbCB9KSApXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG4gICAgc29ja2V0Lm9uKEVWRU5ULlJFU1BPTlNFX1RZUElORywgZGF0YSA9PiB7XHJcblxyXG4gICAgICAgIHZhciB7IHRva2VuLCBjaGFubmVsIH0gPSBkYXRhXHJcbiAgICAgICAgdmFyIHVzZXJMb2NhbCAgID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxyXG5cclxuICAgICAgICBpZiggdXNlckxvY2FsLnRva2Vucy50b2tlbkFjY2VzcyA9PSB0b2tlbiApe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRpbWVvdXRUeXBpbmcpe1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRUeXBpbmcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGRvbVR5cGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtdHlwaW5nXCIpXHJcbiAgICAgICAgICAgIGlmKGRvbVR5cGluZy5nZXRBdHRyaWJ1dGUoXCJjaGFubmVsXCIpID09IGNoYW5uZWwpXHJcbiAgICAgICAgICAgIGRvbVR5cGluZy5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKVxyXG4gICAgICAgICAgICAvLy8gc2Nyb2xsIGJvdHRvbSBcclxuICAgICAgICAgICAgLy8gdmFyIGlucHV0TWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaXMtd3JpdGUtbWVzc2FnZVwiKVxyXG4gICAgICAgICAgICAvLyBpZihpbnB1dE1lc3NhZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZm9sbG93LWNvbnZlcnNhdGlvblwiKSl7XHJcbiAgICAgICAgICAgIC8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtc2Nyb2xsLXRvLWJvdHRvbScpLnNjcm9sbFRvcCAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtc2Nyb2xsLXRvLWJvdHRvbScpLnNjcm9sbEhlaWdodFxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIHZhciB0aW1lb3V0VHlwaW5nID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkb21UeXBpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLXR5cGluZ1wiKVxyXG4gICAgICAgICAgICAgICAgaWYoZG9tVHlwaW5nLmdldEF0dHJpYnV0ZShcImNoYW5uZWxcIikgPT0gY2hhbm5lbClcclxuICAgICAgICAgICAgICAgIGRvbVR5cGluZy5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKVxyXG4gICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgc29ja2V0Lm9uKEVWRU5ULkRVUExJQ0FUSU9OX1RBQiwgZGF0YSA9PiB7XHJcblxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gQ09ORklHLlNFUlZFUl9QSFAuVVJMXHJcbiAgICB9KVxyXG5cclxuICAgIHNvY2tldC5vbihFVkVOVC5SRUFEX01FU1NBR0VfQUxMX1JFU1BPTlNFLCBkYXRhID0+IHtcclxuXHJcbiAgICAgICAgaW5zdGFuY2VBcHAucHJvcHMuZGlzcGF0Y2goIHJlYWRBbGxNZXNzYWdlQ2hhbm5lbEFjdGl2ZSgpIClcclxuICAgIH0pXHJcblxyXG4gICAgc29ja2V0Lm9uKEVWRU5ULlJFU1BPTlNFX1VTRVJfR0VUX0JPT0tJTkcsIGRhdGEgPT4ge1xyXG5cclxuICAgICAgICB2YXIgYm9va2luZ3MgPSBkYXRhLmJvb2tpbmdzXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYm9va2luZ3MsIEVWRU5ULlJFU1BPTlNFX1VTRVJfR0VUX0JPT0tJTkcpXHJcbiAgICAgICAgaW5zdGFuY2VBcHAucHJvcHMuZGlzcGF0Y2goc2V0dGVyQm9va2luZ3MoeyBmZXRjaDogdHJ1ZSwgZGF0YTogYm9va2luZ3MgfSkpXHJcbiAgICB9KVxyXG5cclxuICAgIHNvY2tldC5vbihFVkVOVC5SRVNQT05TRV9VU0VSX0NIQU5HRV9CT09LSU5HLCBkYXRhID0+IHtcclxuICAgICAgICBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyggZGF0YSwgRVZFTlQuUkVTUE9OU0VfVVNFUl9DSEFOR0VfQk9PS0lORylcclxuXHJcbiAgICAgICAgdmFyIHsgdXNlciwgdG9rZW4sIG1lc3NhZ2UsIHN0eWxlLCBhdHRhY2htZW50LCBjaGFubmVsIH0gPSBkYXRhIFxyXG4gICAgICAgIHZhciB1c2VyTG9jYWwgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpXHJcbiAgICAgICAgdmFyIG1lc3NhZ2VEYXRhID0geyB0eXBlOiAodXNlckxvY2FsLmlkID09IHVzZXIpLCBjb250ZW50OiBtZXNzYWdlLCBzdHlsZSwgYXR0YWNobWVudCwgY2hhbm5lbCB9XHJcbiAgICAgICAgaW5zdGFuY2VBcHAucHJvcHMuZGlzcGF0Y2goIGFkZE1lc3NhZ2VTZW5kVG9NZShtZXNzYWdlRGF0YSkgKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBib29raW5nVXBkYXRlID0geyAuLi5kYXRhLmJvb2tpbmcsIHVwZGF0ZTogdHJ1ZSB9XHJcbiAgICAgICAgaW5zdGFuY2VBcHAucHJvcHMuZGlzcGF0Y2goY2hhbmdlQm9va2luZyhib29raW5nVXBkYXRlKSlcclxuICAgICAgICAkLm1vZGFsLmNsb3NlKCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9KVxyXG5cclxuICAgIHNvY2tldC5vbihFVkVOVC5SRVNQT05TRV9VU0VSX0NIQU5HRV9CT09LSU5HX0VSUk9SLCBkYXRhID0+IHtcclxuXHJcbiAgICAgICAgJChcIiNqcy1ib29raW5nLWVycm9yXCIpLmZpbmQoXCIuYWxlcnQtZGFuZ2VyXCIpLnRleHQoZGF0YS5tZXNzYWdlKVxyXG4gICAgICAgICQoXCIjanMtYm9va2luZy1lcnJvclwiKS5tb2RhbCh7XHJcbiAgICAgICAgICAgIGVzY2FwZUNsb3NlOiBmYWxzZSxcclxuICAgICAgICAgICAgY2xpY2tDbG9zZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dDbG9zZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfSlcclxufSIsInZhciB1c2VyID0gbnVsbFxyXG5pZiAodHlwZW9mKFN0b3JhZ2UpICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgdXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSlcclxufVxyXG5cclxuaW1wb3J0IFRZUEUgZnJvbSBcIi4uL2FjdGlvbi90eXBlLmpzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IHVzZXIsIGFjdGlvbikge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgVFlQRS5VU0VSLlNFVFRFUl9VU0VSOlxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWRcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iLCJ2YXIgYm9va2luZ3MgPSB7XHJcbiAgICBmZXRjaDogZmFsc2UsXHJcbiAgICBkYXRhOiBbXVxyXG59XHJcblxyXG5pbXBvcnQgVFlQRSBmcm9tIFwiLi4vYWN0aW9uL3R5cGUuanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gYm9va2luZ3MsIGFjdGlvbikge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgVFlQRS5CT09LSU5HLlNFVFRFUl9CT09LSU5HOlxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWRcclxuXHJcbiAgICAgICAgY2FzZSBUWVBFLkJPT0tJTkcuQ0hBTkdFX0JPT0tJTkc6XHJcblxyXG4gICAgICAgICAgICBpZighc3RhdGUuZGF0YS5zb21lKGJvb2tpbmcgPT4gYm9va2luZy5pZCA9PT0gYWN0aW9uLnBheWxvYWQuYm9va2luZ19pZCkpe1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZGF0YUJvb2tpbmcgPSBzdGF0ZS5kYXRhLm1hcCggYm9va2luZyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihib29raW5nLmlkID09PSBhY3Rpb24ucGF5bG9hZC5ib29raW5nX2lkKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmJvb2tpbmcsIC4uLmFjdGlvbi5wYXlsb2FkIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBib29raW5nXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLiBzdGF0ZSwgZGF0YTogZGF0YUJvb2tpbmcgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iLCJmdW5jdGlvbiBkZXRlY3RDbGllbnQoKSB7XHJcbiAge1xyXG4gICAgdmFyIHVua25vd24gPSAndW5rbm93bic7XHJcbiAgICAvLyBicm93c2VyXHJcbiAgICB2YXIgblZlciA9IG5hdmlnYXRvci5hcHBWZXJzaW9uO1xyXG4gICAgdmFyIG5BZ3QgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gICAgdmFyIGJyb3dzZXIgPSBuYXZpZ2F0b3IuYXBwTmFtZTtcclxuICAgIHZhciB2ZXJzaW9uID0gJycgKyBwYXJzZUZsb2F0KG5hdmlnYXRvci5hcHBWZXJzaW9uKTtcclxuICAgIHZhciBtYWpvclZlcnNpb24gPSBwYXJzZUludChuYXZpZ2F0b3IuYXBwVmVyc2lvbiwgMTApO1xyXG4gICAgdmFyIG5hbWVPZmZzZXQsIHZlck9mZnNldCwgaXg7XHJcbiAgICAvLyBPcGVyYVxyXG4gICAgaWYgKCh2ZXJPZmZzZXQgPSBuQWd0LmluZGV4T2YoJ09wZXJhJykpICE9IC0xKSB7XHJcbiAgICAgIGJyb3dzZXIgKz0gJ09wZXJhJztcclxuICAgICAgdmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCArIDYpO1xyXG4gICAgICBpZiAoKHZlck9mZnNldCA9IG5BZ3QuaW5kZXhPZignVmVyc2lvbicpKSAhPSAtMSkge1xyXG4gICAgICAgIHZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA4KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gT3BlcmEgTmV4dFxyXG4gICAgaWYgKCh2ZXJPZmZzZXQgPSBuQWd0LmluZGV4T2YoJ09QUicpKSAhPSAtMSkge1xyXG4gICAgICBicm93c2VyICs9ICdPcGVyYSc7XHJcbiAgICAgIHZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA0KTtcclxuICAgIH1cclxuICAgIC8vIEVkZ2VcclxuICAgIGVsc2UgaWYgKCh2ZXJPZmZzZXQgPSBuQWd0LmluZGV4T2YoJ0VkZycpKSAhPSAtMSkge1xyXG4gICAgICBicm93c2VyICs9ICdNaWNyb3NvZnQgRWRnZSc7XHJcbiAgICAgIHZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA1KTtcclxuICAgIH1cclxuICAgIC8vIE1TSUVcclxuICAgIGVsc2UgaWYgKCh2ZXJPZmZzZXQgPSBuQWd0LmluZGV4T2YoJ01TSUUnKSkgIT0gLTEpIHtcclxuICAgICAgYnJvd3NlciArPSAnTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyJztcclxuICAgICAgdmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCArIDUpO1xyXG4gICAgfVxyXG4gICAgLy8gQ29jQ29jXHJcbiAgICBlbHNlIGlmICgodmVyT2Zmc2V0ID0gbkFndC5pbmRleE9mKCdjb2MnKSkgIT0gLTEpIHtcclxuICAgICAgYnJvd3NlciArPSAnQ29jQ29jJztcclxuICAgICAgdmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCArIDgpO1xyXG4gICAgfVxyXG4gICAgLy8gQ2hyb21lXHJcbiAgICBlbHNlIGlmICgodmVyT2Zmc2V0ID0gbkFndC5pbmRleE9mKCdDaHJvbWUnKSkgIT0gLTEpIHtcclxuICAgICAgYnJvd3NlciArPSAnQ2hyb21lJztcclxuICAgICAgdmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCArIDcpO1xyXG4gICAgfVxyXG4gICAgLy8gU2FmYXJpXHJcbiAgICBlbHNlIGlmICgodmVyT2Zmc2V0ID0gbkFndC5pbmRleE9mKCdTYWZhcmknKSkgIT0gLTEpIHtcclxuICAgICAgYnJvd3NlciArPSAnU2FmYXJpJztcclxuICAgICAgdmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCArIDcpO1xyXG4gICAgICBpZiAoKHZlck9mZnNldCA9IG5BZ3QuaW5kZXhPZignVmVyc2lvbicpKSAhPSAtMSkge1xyXG4gICAgICAgIHZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA4KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gRmlyZWZveFxyXG4gICAgZWxzZSBpZiAoKHZlck9mZnNldCA9IG5BZ3QuaW5kZXhPZignRmlyZWZveCcpKSAhPSAtMSkge1xyXG4gICAgICBicm93c2VyICs9ICdGaXJlZm94JztcclxuICAgICAgdmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCArIDgpO1xyXG4gICAgfVxyXG4gICAgLy8gTVNJRSAxMStcclxuICAgIGVsc2UgaWYgKG5BZ3QuaW5kZXhPZignVHJpZGVudC8nKSAhPSAtMSkge1xyXG4gICAgICBicm93c2VyICs9ICdNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXInO1xyXG4gICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcobkFndC5pbmRleE9mKCdydjonKSArIDMpO1xyXG4gICAgfVxyXG4gICAgLy8gT3RoZXIgYnJvd3NlcnNcclxuICAgIGVsc2UgaWYgKChuYW1lT2Zmc2V0ID0gbkFndC5sYXN0SW5kZXhPZignICcpICsgMSkgPCAodmVyT2Zmc2V0ID0gbkFndC5sYXN0SW5kZXhPZignLycpKSkge1xyXG4gICAgICBicm93c2VyID0gbkFndC5zdWJzdHJpbmcobmFtZU9mZnNldCwgdmVyT2Zmc2V0KTtcclxuICAgICAgdmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCArIDEpO1xyXG4gICAgICBpZiAoYnJvd3Nlci50b0xvd2VyQ2FzZSgpID09IGJyb3dzZXIudG9VcHBlckNhc2UoKSkge1xyXG4gICAgICAgIGJyb3dzZXIgPSBuYXZpZ2F0b3IuYXBwTmFtZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gdHJpbSB0aGUgdmVyc2lvbiBzdHJpbmdcclxuICAgIGlmICgoaXggPSB2ZXJzaW9uLmluZGV4T2YoJzsnKSkgIT0gLTEpIHZlcnNpb24gPSB2ZXJzaW9uLnN1YnN0cmluZygwLCBpeCk7XHJcbiAgICBpZiAoKGl4ID0gdmVyc2lvbi5pbmRleE9mKCcgJykpICE9IC0xKSB2ZXJzaW9uID0gdmVyc2lvbi5zdWJzdHJpbmcoMCwgaXgpO1xyXG4gICAgaWYgKChpeCA9IHZlcnNpb24uaW5kZXhPZignKScpKSAhPSAtMSkgdmVyc2lvbiA9IHZlcnNpb24uc3Vic3RyaW5nKDAsIGl4KTtcclxuICAgIG1ham9yVmVyc2lvbiA9IHBhcnNlSW50KCcnICsgdmVyc2lvbiwgMTApO1xyXG4gICAgaWYgKGlzTmFOKG1ham9yVmVyc2lvbikpIHtcclxuICAgICAgdmVyc2lvbiA9ICcnICsgcGFyc2VGbG9hdChuYXZpZ2F0b3IuYXBwVmVyc2lvbik7XHJcbiAgICAgIG1ham9yVmVyc2lvbiA9IHBhcnNlSW50KG5hdmlnYXRvci5hcHBWZXJzaW9uLCAxMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc3lzdGVtXHJcbiAgICB2YXIgb3MgPSB1bmtub3duO1xyXG4gICAgdmFyIGNsaWVudFN0cmluZ3MgPSBbe1xyXG4gICAgICBzOiAnV2luZG93cyAxMCcsXHJcbiAgICAgIHI6IC8oV2luZG93cyAxMC4wfFdpbmRvd3MgTlQgMTAuMCkvXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzOiAnV2luZG93cyA4LjEnLFxyXG4gICAgICByOiAvKFdpbmRvd3MgOC4xfFdpbmRvd3MgTlQgNi4zKS9cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHM6ICdXaW5kb3dzIDgnLFxyXG4gICAgICByOiAvKFdpbmRvd3MgOHxXaW5kb3dzIE5UIDYuMikvXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzOiAnV2luZG93cyA3JyxcclxuICAgICAgcjogLyhXaW5kb3dzIDd8V2luZG93cyBOVCA2LjEpL1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgczogJ1dpbmRvd3MgVmlzdGEnLFxyXG4gICAgICByOiAvV2luZG93cyBOVCA2LjAvXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzOiAnV2luZG93cyBTZXJ2ZXIgMjAwMycsXHJcbiAgICAgIHI6IC9XaW5kb3dzIE5UIDUuMi9cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHM6ICdXaW5kb3dzIFhQJyxcclxuICAgICAgcjogLyhXaW5kb3dzIE5UIDUuMXxXaW5kb3dzIFhQKS9cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHM6ICdXaW5kb3dzIDIwMDAnLFxyXG4gICAgICByOiAvKFdpbmRvd3MgTlQgNS4wfFdpbmRvd3MgMjAwMCkvXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzOiAnV2luZG93cyBNRScsXHJcbiAgICAgIHI6IC8oV2luIDl4IDQuOTB8V2luZG93cyBNRSkvXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzOiAnV2luZG93cyA5OCcsXHJcbiAgICAgIHI6IC8oV2luZG93cyA5OHxXaW45OCkvXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzOiAnV2luZG93cyA5NScsXHJcbiAgICAgIHI6IC8oV2luZG93cyA5NXxXaW45NXxXaW5kb3dzXzk1KS9cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHM6ICdXaW5kb3dzIE5UIDQuMCcsXHJcbiAgICAgIHI6IC8oV2luZG93cyBOVCA0LjB8V2luTlQ0LjB8V2luTlR8V2luZG93cyBOVCkvXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzOiAnV2luZG93cyBDRScsXHJcbiAgICAgIHI6IC9XaW5kb3dzIENFL1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgczogJ1dpbmRvd3MgMy4xMScsXHJcbiAgICAgIHI6IC9XaW4xNi9cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHM6ICdBbmRyb2lkJyxcclxuICAgICAgcjogL0FuZHJvaWQvXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzOiAnT3BlbiBCU0QnLFxyXG4gICAgICByOiAvT3BlbkJTRC9cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHM6ICdTdW4gT1MnLFxyXG4gICAgICByOiAvU3VuT1MvXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzOiAnTGludXgnLFxyXG4gICAgICByOiAvKExpbnV4fFgxMSkvXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzOiAnaU9TJyxcclxuICAgICAgcjogLyhpUGhvbmV8aVBhZHxpUG9kKS9cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHM6ICdNYWMgT1MgWCcsXHJcbiAgICAgIHI6IC9NYWMgT1MgWC9cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHM6ICdNYWMgT1MnLFxyXG4gICAgICByOiAvKE1hY1BQQ3xNYWNJbnRlbHxNYWNfUG93ZXJQQ3xNYWNpbnRvc2gpL1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgczogJ1FOWCcsXHJcbiAgICAgIHI6IC9RTlgvXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzOiAnVU5JWCcsXHJcbiAgICAgIHI6IC9VTklYL1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgczogJ0JlT1MnLFxyXG4gICAgICByOiAvQmVPUy9cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHM6ICdPUy8yJyxcclxuICAgICAgcjogL09TXFwvMi9cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHM6ICdTZWFyY2ggQm90JyxcclxuICAgICAgcjogLyhudWhrfEdvb2dsZWJvdHxZYW1teWJvdHxPcGVuYm90fFNsdXJwfE1TTkJvdHxBc2sgSmVldmVzXFwvVGVvbWF8aWFfYXJjaGl2ZXIpL1xyXG4gICAgfVxyXG4gICAgXTtcclxuICAgIGZvciAodmFyIGlkIGluIGNsaWVudFN0cmluZ3MpIHtcclxuICAgICAgdmFyIGNzID0gY2xpZW50U3RyaW5nc1tpZF07XHJcbiAgICAgIGlmIChjcy5yLnRlc3QobkFndCkpIHtcclxuICAgICAgICBvcyA9IGNzLnM7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciBvc1ZlcnNpb24gPSB1bmtub3duO1xyXG4gICAgaWYgKC9XaW5kb3dzLy50ZXN0KG9zKSkge1xyXG4gICAgICBvc1ZlcnNpb24gPSAvV2luZG93cyAoLiopLy5leGVjKG9zKVsxXTtcclxuICAgICAgb3MgPSAnV2luZG93cyc7XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKG9zKSB7XHJcbiAgICAgIGNhc2UgJ01hYyBPUyBYJzpcclxuICAgICAgICBvc1ZlcnNpb24gPSAvTWFjIE9TIFggKDEwW1xcLlxcX1xcZF0rKS8uZXhlYyhuQWd0KVsxXTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ0FuZHJvaWQnOlxyXG4gICAgICAgIG9zVmVyc2lvbiA9IC9BbmRyb2lkIChbXFwuXFxfXFxkXSspLy5leGVjKG5BZ3QpWzFdO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnaU9TJzpcclxuICAgICAgICBvc1ZlcnNpb24gPSAvT1MgKFxcZCspXyhcXGQrKV8/KFxcZCspPy8uZXhlYyhuVmVyKTtcclxuICAgICAgICBvc1ZlcnNpb24gPSBvc1ZlcnNpb25bMV0gKyAnLicgKyBvc1ZlcnNpb25bMl0gKyAnLicgKyAob3NWZXJzaW9uWzNdIHwgMCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgYnJvd3NlcjogYnJvd3Nlci50b1N0cmluZygpLFxyXG4gICAgYnJvd3Nlck1ham9yVmVyc2lvbjogbWFqb3JWZXJzaW9uLnRvU3RyaW5nKCksXHJcbiAgICBicm93c2VyVmVyc2lvbjogdmVyc2lvbi50b1N0cmluZygpLFxyXG4gICAgb3M6IG9zLnRvU3RyaW5nKCksXHJcbiAgICBvc1ZlcnNpb246IG9zVmVyc2lvbi50b1N0cmluZygpXHJcbiAgfVxyXG59XHJcbmlmICh0eXBlb2YoU3RvcmFnZSkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RldGVjdCcsIEpTT04uc3RyaW5naWZ5KGRldGVjdENsaWVudCgpKSk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGV0ZWN0Q2xpZW50UmVkdWNlcihzdGF0ZSA9IGRldGVjdENsaWVudCgpKSB7XHJcbiAgcmV0dXJuIHN0YXRlO1xyXG59IiwiaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gJ3JlZHV4JztcclxuXHJcbi8vL3Row6ptIGPDoWMgcmVkdWNlciBmdW50aW9uIGPhuqduIMSRxrDhu6NjIGNvbWJpbmUgdsOgbyDEkcOieVxyXG5pbXBvcnQgRGV0ZWN0Q2xpZW50UmVkdWNlciBmcm9tIFwiLi9kZXRlY3QuanNcIjtcclxuaW1wb3J0IHVzZXJDaGF0IGZyb20gJy4vdXNlci1jaGF0LmpzJztcclxuaW1wb3J0IFNvY2tldFJlZHVjZXIgZnJvbSBcIi4vc29ja2V0LmpzXCJcclxuaW1wb3J0IEF1dGggZnJvbSBcIi4vYXV0aC5qc1wiXHJcbmltcG9ydCBCb29raW5nIGZyb20gXCIuL2Jvb2tpbmcuanNcIlxyXG4vLy8vIGto4bufaSB04bqhbyAxIGJp4bq/biBiaeG7g3UgZGnhu4VuIFJFRFVDRVIgQUxMIFxyXG5jb25zdCBSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGNsaWVudCAgOiBEZXRlY3RDbGllbnRSZWR1Y2VyLFxyXG4gICAgdXNlckNoYXQ6IHVzZXJDaGF0LFxyXG4gICAgc29ja2V0ICA6IFNvY2tldFJlZHVjZXIsXHJcbiAgICB1c2VycyAgIDogQXV0aCxcclxuICAgIGJvb2tpbmcgOiBCb29raW5nLFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgUmVkdWNlcjsiLCJpbXBvcnQgVFlQRSBmcm9tICcuLi9hY3Rpb24vdHlwZS5qcyc7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNvY2tldFJlZHVjZXIoc3RhdGUgPSBudWxsICwgYWN0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBUWVBFLlNPQ0NLRVQuU0VUX1NPQ0tFVF9JTzpcclxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59IiwiXHJcbi8vIGlmKHR5cGVvZiB1c2VyRGVmYXVsdCA9PSB1bmRlZmluZWQpe1xyXG4vLyAgIHZhciB1c2VyRGVmYXVsdCA9ICdbXSdcclxuLy8gfVxyXG52YXIgdXNlckNoYXREZWZhdWx0ID0gW107XHJcbmltcG9ydCBUWVBFIGZyb20gXCIuLi9hY3Rpb24vdHlwZS5qc1wiO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi9jb25maWdcIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSB1c2VyQ2hhdERlZmF1bHQsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgVFlQRS5DSEFOTkVMLkFERF9VU0VSX09OTElORTpcclxuICAgICAgcmV0dXJuIHN0YXRlLm1hcCggaXRlbSA9PiB7XHJcbiAgICAgICAgaWYoaXRlbS51c2VyLmlkID09IGFjdGlvbi5wYXlsb2FkKSB7XHJcbiAgICAgICAgICByZXR1cm4geyAuLi5pdGVtLCB1c2VyIDogeyAuLi4gaXRlbS51c2VyLCBvbmxpbmUgOiB0cnVlIH0gfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyAuLi5pdGVtIH1cclxuICAgICAgfSlcclxuICAgIGNhc2UgVFlQRS5DSEFOTkVMLlJFTU9WRV9VU0VSX09OTElORTpcclxuICAgICAgICByZXR1cm4gc3RhdGUubWFwKCBpdGVtID0+IHtcclxuICAgICAgICAgIGlmKGl0ZW0udXNlci5pZCA9PSBhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5pdGVtLCB1c2VyIDogeyAuLi4gaXRlbS51c2VyLCBvbmxpbmUgOiBmYWxzZSB9IH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiB7IC4uLml0ZW0gfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgY2FzZSBUWVBFLkNIQVQuQ0hBTkdFX1VTRVJfQ0hBVF9ERUZBVUxUOlxyXG4gICAgICByZXR1cm4gc3RhdGUubWFwKCBpdGVtID0+IHtcclxuICAgICAgICBpZihpdGVtLmlkID09PSBhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgaXNBY3RpdmUgOiB0cnVlIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgaXNBY3RpdmUgOiBmYWxzZSB9XHJcbiAgICAgIH0pXHJcbiAgICBjYXNlIFRZUEUuQ0hBTk5FTC5TRVRURVJfQ0hBTk5FTDpcclxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkXHJcbiAgICBjYXNlIFRZUEUuQ0hBTk5FTC5BRERfTUVTU0FHRTpcclxuICAgICAgcmV0dXJuIHN0YXRlLm1hcCggY2hhbm5lbCA9PiB7XHJcbiAgICAgICAgaWYoY2hhbm5lbC5pc0FjdGl2ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHsgLi4uY2hhbm5lbCwgbWVzc2FnZSA6IFsgLi4uY2hhbm5lbC5tZXNzYWdlLCBhY3Rpb24ucGF5bG9hZF0gfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2hhbm5lbFxyXG4gICAgICB9KVxyXG4gICAgY2FzZSBUWVBFLkNIQU5ORUwuUkVBRF9BTExfTUVTU0FHRV9DSEFOTkVMX0FDVElWRTpcclxuICAgICAgcmV0dXJuIHN0YXRlLm1hcCggY2hhbm5lbCA9PiB7XHJcbiAgICAgICAgaWYoY2hhbm5lbC5pc0FjdGl2ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgdmFyIG1lc3NhZ2VzID0gY2hhbm5lbC5tZXNzYWdlXHJcbiAgICAgICAgICBtZXNzYWdlcyA9IG1lc3NhZ2VzLm1hcCggbWVzc2FnZSA9PiB7IHJldHVybiB7IC4uLm1lc3NhZ2UsIHJlYWQ6IHRydWUgfSB9KVxyXG4gICAgICAgICAgcmV0dXJuIHsgLi4uY2hhbm5lbCwgbWVzc2FnZSA6IG1lc3NhZ2VzIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNoYW5uZWxcclxuICAgICAgfSlcclxuICAgIGNhc2UgVFlQRS5DSEFOTkVMLkFERF9NRVNTQUdFX1NFTkRfVE9fTUU6XHJcbiAgICAgIHJldHVybiBzdGF0ZS5tYXAoIGNoYW5uZWwgPT4ge1xyXG4gICAgICAgIGlmKGNoYW5uZWwuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmNoYW5uZWwpIHtcclxuICAgICAgICAgIHJldHVybiB7IC4uLmNoYW5uZWwsIG1lc3NhZ2UgOiBbIC4uLmNoYW5uZWwubWVzc2FnZSwgYWN0aW9uLnBheWxvYWRdIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNoYW5uZWxcclxuICAgICAgfSlcclxuXHJcbiAgICBjYXNlIFRZUEUuQ0hBTk5FTC5TRVRfQUNUSVZFOlxyXG4gICAgICB2YXIgaXNDaGFuZ2VkID0gZmFsc2VcclxuICAgICAgdmFyIG5ld1N0YXRlID0gc3RhdGUubWFwKCBjaGFubmVsID0+IHtcclxuICAgICAgICBpZiggIWlzQ2hhbmdlZCAmJiBjaGFubmVsLmNoYW5uZWxOYW1lICYmIGNoYW5uZWwuY2hhbm5lbE5hbWUuaW5jbHVkZXMoYWN0aW9uLnBheWxvYWQuY2hhbm5lbE5hbWUpKXtcclxuICAgICAgICAgIGlzQ2hhbmdlZCA9IHRydWVcclxuICAgICAgICAgIHJldHVybiB7IC4uLmNoYW5uZWwsIGlzQWN0aXZlIDogdHJ1ZSB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IC4uLmNoYW5uZWwsIGlzQWN0aXZlIDogZmFsc2UgfVxyXG4gICAgICB9KVxyXG4gICAgICBpZiggaXNDaGFuZ2VkICl7XHJcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0yIS4vY2hhdC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTIhLi9lbW9qaS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTIhLi9oZWFkLWluZm8uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0yIS4vaW5wdXQtc2VuZC1jaGF0LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMiEuL2xpc3QtbWVzc2FnZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTIhLi9saXN0LXVzZXIuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0yIS4vbWVzc2FnZS1jaGF0LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMiEuL3NpZGViYXIuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0yIS4vaW5kZXguc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==