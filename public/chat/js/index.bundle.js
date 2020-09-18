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
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.bg-chat-temalate {\n  background: -moz-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -webkit-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -o-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -ms-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n}\n\n.wrapper-page-chat {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.wrapper-page-chat:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}", ""]);
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
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-list-emoji {\n  position: absolute;\n  left: 50%;\n  right: 50%;\n  padding: 10px;\n  border: 1px solid #e9ecef;\n  border-radius: 10px;\n  background-color: #fff;\n  opacity: 0;\n  visibility: hidden;\n  height: 0;\n}\n.component-list-emoji:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-list-emoji.first-show {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n  animation-name: tada;\n}\n.component-list-emoji.show {\n  visibility: unset;\n  height: unset;\n  bottom: 100%;\n  left: 20px;\n  right: 20px;\n  opacity: 1;\n}\n\n.component-emoji {\n  width: 34px;\n  height: 34px;\n  float: left;\n  text-align: center;\n  display: block;\n  cursor: pointer;\n  line-height: 24px;\n  font: normal normal normal 24px/1 \"HERO Icons\";\n  text-rendering: auto;\n  line-height: inherit;\n  -webkit-font-smoothing: antialiased;\n  color: #0d47a1;\n}", ""]);
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
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-head-info .user-active-chat {\n  position: relative;\n  padding: 10px 20px;\n  box-sizing: border-box;\n  border-bottom: 1px solid #e9ecef;\n  min-height: 75px;\n}\n.component-head-info .user-active-chat .state-avatar {\n  position: absolute;\n  top: 50%;\n  display: block;\n  padding: 0;\n  margin: 0;\n  width: 40px;\n  height: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  overflow: hidden;\n  border-radius: 50%;\n  box-sizing: border-box;\n  border: 1px solid #6c757d;\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.component-head-info .user-active-chat .state-avatar img {\n  width: 40px;\n  height: 40px;\n  min-width: 40px;\n  min-height: 40px;\n}\n.component-head-info .user-active-chat .text-info {\n  display: block;\n  padding: 7px 7px 7px 55px;\n  color: #0d47a1;\n}\n.component-head-info .user-active-chat .text-info .name {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: inherit;\n  text-decoration: none;\n}\n.component-head-info .user-active-chat .text-info .time-online {\n  display: block;\n  font-size: 12px;\n  color: #6c757d;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.component-head-info .user-active-chat .text-info .time-online.active-now {\n  color: #8bc34a;\n}", ""]);
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
exports.push([module.i, "@charset \"UTF-8\";\n@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-input-send-chat {\n  border: 1px solid #e9ecef;\n  border-left: none;\n  position: relative;\n  padding: 5px 45px 0 100px;\n}\n.component-input-send-chat textarea {\n  width: 100% !important;\n  min-height: 30px;\n  max-height: 150px;\n  overflow-y: scroll;\n  resize: none;\n  padding: 10px 15px;\n  background-color: #f2f2f2;\n  border-radius: 15px;\n  border: 1px solid #ced4da;\n  font-size: 14px;\n  scrollbar-width: none;\n  margin: 0;\n  text-decoration: none;\n  -ms-overflow-style: none;\n}\n.component-input-send-chat textarea:focus {\n  border-color: #0d47a1;\n  color: #0d47a1;\n}\n.component-input-send-chat textarea::-webkit-scrollbar {\n  display: block;\n}\n.component-input-send-chat > i {\n  position: absolute;\n  z-index: 11;\n  bottom: 20px;\n  font-size: 28px;\n  color: #0d6efd;\n}\n.component-input-send-chat .hero-icon.calendar {\n  left: 5px;\n}\n.component-input-send-chat .hero-icon.emoticon {\n  left: 35px;\n}\n.component-input-send-chat .hero-icon.file {\n  left: 65px;\n}\n.component-input-send-chat .hero-icon.send {\n  display: inline-block;\n  z-index: 1;\n  right: 10px;\n}\n.component-input-send-chat .hero-icon.react {\n  z-index: -1;\n  display: none;\n  right: 0px;\n}\n.component-input-send-chat .image-block .remove-image {\n  max-height: 100px;\n  overflow: hidden;\n  display: inline-block;\n  position: relative;\n}\n.component-input-send-chat .image-block .remove-image:after {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  content: \"󰅗\";\n  width: 32px;\n  height: 24px;\n  text-align: center;\n  display: inline-block;\n  vertical-align: middle;\n  cursor: pointer;\n  line-height: 24px;\n  font: normal normal normal 24px/1 \"HERO Icons\";\n  text-rendering: auto;\n  line-height: inherit;\n  -webkit-font-smoothing: antialiased;\n}\n.component-input-send-chat .image-block .remove-image:hover img {\n  opacity: 0.4;\n}\n.component-input-send-chat .image-block .remove-image:hover:after {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n  animation-name: tada;\n}\n.component-input-send-chat .image-block img {\n  padding: 5px;\n  opacity: 0.9;\n}", ""]);
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
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-list-message {\n  float: left;\n  width: 70%;\n  border-left: 1px solid #e9ecef;\n  overflow: hidden;\n}\n.component-list-message .wrapper-list-message {\n  position: relative;\n  padding: 15px;\n  height: 400px;\n  overflow-y: scroll;\n  scrollbar-color: rgba(0, 0, 0, 0.3) #F5F5F5;\n  scrollbar-width: thin !important;\n  -ms-overflow-style: none;\n}\n.component-list-message .wrapper-list-message:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-list-message .wrapper-list-message::-webkit-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-list-message .wrapper-list-message::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-list-message .wrapper-list-message::-moz-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-list-message .wrapper-list-message::-moz-scrollbar-thumb {\n  border-radius: 10px;\n  -moz-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-list-message .wrapper-list-message::-o-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-list-message .wrapper-list-message::-o-scrollbar-thumb {\n  border-radius: 10px;\n  -o-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-list-message .wrapper-list-message::-ms-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-list-message .wrapper-list-message::-ms-scrollbar-thumb {\n  border-radius: 10px;\n  -ms-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n\n.ticontainer {\n  display: inline-block;\n  min-width: 30px;\n}\n.ticontainer .tiblock {\n  align-items: center;\n  display: flex;\n  height: 17px;\n}\n.ticontainer .tiblock .tidot {\n  background-color: #adb5bd;\n  -webkit-animation: mercuryTypingAnimation 1.5s infinite ease-in-out;\n  animation: mercuryTypingAnimation 1.5s infinite ease-in-out;\n  border-radius: 50%;\n  display: inline-block;\n  height: 6px;\n  margin-right: 4px;\n  width: 6px;\n}\n.ticontainer .tiblock .tidot:nth-child(1) {\n  -webkit-animation-delay: 150ms;\n  animation-delay: 200ms;\n}\n.ticontainer .tiblock .tidot:nth-child(2) {\n  -webkit-animation-delay: 300ms;\n  animation-delay: 300ms;\n}\n.ticontainer .tiblock .tidot:nth-child(3) {\n  -webkit-animation-delay: 450ms;\n  animation-delay: 400ms;\n}\n\n@-webkit-keyframes mercuryTypingAnimation {\n  0% {\n    -webkit-transform: translateY(0px);\n  }\n  28% {\n    -webkit-transform: translateY(-5px);\n  }\n  44% {\n    -webkit-transform: translateY(0px);\n  }\n}\n@media only screen and (max-width: 991px) {\n  .component-list-message {\n    width: 60%;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .component-list-message {\n    width: calc(100% - 75px);\n  }\n  .component-list-message .wrapper-list-message {\n    height: 300px;\n  }\n}", ""]);
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
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-user-chat-sidebar {\n  position: relative;\n}\n.component-user-chat-sidebar .none-read-message {\n  position: absolute;\n  right: 15px;\n  border-radius: 50%;\n  padding: 3px 6px;\n  bottom: 30%;\n  font-size: 11px;\n  line-height: 1;\n  font-style: normal;\n  background-color: #28a745;\n  color: #e9ecef;\n}\n.component-user-chat-sidebar .user-chat {\n  min-height: 50px;\n  position: relative;\n  padding: 5px;\n  cursor: pointer;\n}\n.component-user-chat-sidebar .user-chat.active-message {\n  background-color: #c7c6c6;\n}\n.component-user-chat-sidebar .user-chat.active .state-avatar {\n  border-color: #28a745;\n}\n.component-user-chat-sidebar .user-chat.active .state-avatar:after {\n  background-color: #28a745;\n}\n.component-user-chat-sidebar .user-chat .state-avatar {\n  position: absolute;\n  top: 50%;\n  display: block;\n  padding: 0;\n  width: 40px;\n  height: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  margin: 0;\n  overflow: hidden;\n  border-radius: 50%;\n  box-sizing: border-box;\n  border: 1px solid #6c757d;\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.component-user-chat-sidebar .user-chat .state-avatar:after {\n  content: \".\";\n  color: transparent;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  z-index: 5;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  overflow: hidden;\n  background-color: #adb5bd;\n  -webkit-transform: translateX(-50%);\n  -moz-transform: translateX(-50%);\n  -o-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n.component-user-chat-sidebar .user-chat .state-avatar img {\n  width: 40px;\n  height: 40px;\n  min-width: 40px;\n  min-height: 40px;\n}\n.component-user-chat-sidebar .user-chat .text-info {\n  display: block;\n  padding: 0 0 0 55px;\n  color: #0d47a1;\n}\n.component-user-chat-sidebar .user-chat .text-info .name {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.component-user-chat-sidebar .user-chat .text-info .last-message {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n@media only screen and (max-width: 768px) {\n  .component-user-chat-sidebar .user-chat.active-message {\n    background-color: #adb5bd;\n  }\n  .component-user-chat-sidebar .user-chat .text-info {\n    width: 10px;\n    overflow: hidden;\n    padding: 0;\n    visibility: hidden;\n  }\n}", ""]);
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
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.left-message {\n  position: relative;\n  padding-right: 25px;\n}\n.left-message .read {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}\n\n.component-message-chat {\n  padding-top: 5px;\n}\n.component-message-chat:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-message-chat.typing-chat-messsage {\n  display: none;\n  padding-top: 0;\n  position: absolute;\n  top: -25px;\n  background-color: #e9ecef;\n  border-radius: 8px;\n  border: 1px solid #adb5bd;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  -moz-transform: translateX(-50%);\n  -o-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n.component-message-chat.typing-chat-messsage.show {\n  display: block;\n}\n.component-message-chat.typing-chat-messsage .typing-message .text {\n  line-height: 1;\n  padding: 2px 10px !important;\n}\n.component-message-chat .chat-group:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-message-chat .chat-group.by-me .avatar {\n  display: none !important;\n}\n.component-message-chat .chat-group.by-me .message-content .text {\n  background: -moz-linear-gradient(210deg, #f8f9fa, #adb5bd) !important;\n  background: -webkit-linear-gradient(210deg, #f8f9fa, #adb5bd) !important;\n  background: -o-linear-gradient(210deg, #f8f9fa, #adb5bd) !important;\n  background: -ms-linear-gradient(210deg, #f8f9fa, #adb5bd) !important;\n  background: linear-gradient(210deg, #f8f9fa, #adb5bd) !important;\n}\n.component-message-chat .chat-group.by-me .EMOJI {\n  text-align: right;\n}\n.component-message-chat .chat-group .avatar {\n  max-width: 40px;\n  max-height: 40px;\n  margin: 0;\n  border-radius: 50%;\n  overflow: hidden;\n  float: left;\n}\n.component-message-chat .chat-group .avatar img {\n  width: 100%;\n}\n.component-message-chat .chat-group .message-content {\n  padding-left: 50px;\n}\n.component-message-chat .chat-group .message-content.typing-message {\n  padding-left: 0px;\n}\n.component-message-chat .chat-group .message-content .IMAGE {\n  text-align: center;\n}\n.component-message-chat .chat-group .message-content .IMAGE .wrapper-attachment {\n  padding: 5px;\n  display: inline-block;\n  max-width: 200px;\n  position: relative;\n}\n.component-message-chat .chat-group .message-content .IMAGE .wrapper-attachment img {\n  width: 100%;\n  height: auto;\n}\n.component-message-chat .chat-group .message-content .IMAGE .wrapper-attachment .download-file-attachment {\n  position: absolute;\n  top: 5%;\n  right: 5%;\n  background-color: #dee2e6;\n  color: #0d47a1;\n  border-radius: 50%;\n  padding: 3px 0;\n  border: 1px solid #0d47a1;\n}\n.component-message-chat .chat-group .message-content .IMAGE .wrapper-attachment .download-file-attachment i {\n  font-size: 24px;\n}\n.component-message-chat .chat-group .message-content .EMOJI {\n  padding: 10px;\n  background: none !important;\n}\n.component-message-chat .chat-group .message-content .text {\n  line-height: 1.3;\n  padding: 10px;\n  border-radius: 15px;\n  white-space: pre-line;\n  word-break: break-all;\n  background: -moz-linear-gradient(135deg, #f8f9fa, #6f42c1) !important;\n  background: -webkit-linear-gradient(135deg, #f8f9fa, #6f42c1) !important;\n  background: -o-linear-gradient(135deg, #f8f9fa, #6f42c1) !important;\n  background: -ms-linear-gradient(135deg, #f8f9fa, #6f42c1) !important;\n  background: linear-gradient(135deg, #f8f9fa, #6f42c1) !important;\n}\n.component-message-chat .chat-group .message-content .text.EMOJI {\n  background: transparent !important;\n  font-size: 35px;\n  padding: 0 10px;\n}\n.component-message-chat .chat-group .typing-message .text {\n  padding: 5px 10px;\n  background: transparent !important;\n}\n.component-message-chat .chat-group .typing-message .typing-text {\n  font-size: 10px;\n}", ""]);
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
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-sidebar-chat {\n  overflow-y: scroll;\n  float: left;\n  width: 30%;\n  scrollbar-color: rgba(0, 0, 0, 0.3) #F5F5F5;\n  scrollbar-width: thin !important;\n  -ms-overflow-style: none;\n}\n.component-sidebar-chat::-webkit-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-sidebar-chat::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-sidebar-chat::-moz-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-sidebar-chat::-moz-scrollbar-thumb {\n  border-radius: 10px;\n  -moz-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-sidebar-chat::-o-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-sidebar-chat::-o-scrollbar-thumb {\n  border-radius: 10px;\n  -o-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-sidebar-chat::-ms-scrollbar {\n  width: 6px;\n  background-color: #F5F5F5;\n}\n.component-sidebar-chat::-ms-scrollbar-thumb {\n  border-radius: 10px;\n  -ms-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555;\n}\n.component-sidebar-chat * {\n  box-sizing: border-box;\n}\n\n.myinfo {\n  padding: 10px 20px;\n  box-sizing: border-box;\n  border-bottom: 1px solid #e9ecef;\n  min-height: 75px;\n}\n.myinfo .avatar .state-avatar {\n  display: inline-block;\n  vertical-align: middle;\n  padding: 3px;\n  margin: 0;\n  overflow: hidden;\n  border-radius: 50%;\n  box-sizing: border-box;\n  position: relative;\n  width: 50px;\n  height: 50px;\n}\n.myinfo .avatar .state-avatar:after {\n  content: \".\";\n  color: transparent;\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  right: 1px;\n  bottom: 1px;\n  border-radius: 50%;\n  border: 2px double #9175ca;\n}\n.myinfo .avatar .state-avatar.active-online {\n  border: 2px double #00c851;\n}\n.myinfo .avatar .state-avatar img {\n  max-width: 40px;\n  max-height: 40px;\n}\n.myinfo .avatar .name {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 27ch;\n  display: inline-block;\n  vertical-align: middle;\n  padding: 10px;\n  color: #0d47a1;\n}\n\n@media only screen and (max-width: 991px) {\n  .component-sidebar-chat {\n    width: 40%;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .component-sidebar-chat {\n    width: 75px;\n  }\n  .component-sidebar-chat .user-chat .state-avatar {\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%) !important;\n    -moz-transform: translate(-50%, -50%) !important;\n    -o-transform: translate(-50%, -50%) !important;\n    -ms-transform: translate(-50%, -50%) !important;\n    transform: translate(-50%, -50%) !important;\n  }\n\n  .myinfo {\n    padding: 10px;\n  }\n  .myinfo .avatar .state-avatar img {\n    max-width: 35px;\n    max-height: 35px;\n  }\n  .myinfo .avatar .name {\n    display: none;\n  }\n}", ""]);
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
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n/**\n* display\n*/\n*,\n:after,\n:before {\n  box-sizing: border-box;\n}\n\n:focus {\n  outline: 0 !important;\n  text-decoration: none !important;\n}\n\n.d-none {\n  display: none !important;\n}\n\n.d-inline-block {\n  display: inline-block !important;\n}\n\n.d-block {\n  display: block !important;\n}\n\n.d-table {\n  display: table !important;\n}\n\n.d-table-row {\n  display: table-row !important;\n}\n\n.d-table-cell {\n  display: table-cell !important;\n}\n\n.d-flex {\n  display: -ms-flexbox !important;\n  display: flex !important;\n}\n\n.d-inline-flex {\n  display: -ms-inline-flexbox !important;\n  display: inline-flex !important;\n}\n\n.italic {\n  font-style: italic !important;\n}\n\n.not-italic {\n  font-style: normal !important;\n}\n\n.uppercase {\n  text-transform: uppercase !important;\n}\n\n.lowercase {\n  text-transform: lowercase !important;\n}\n\n.capitalize {\n  text-transform: capitalize !important;\n}\n\n.normal-case {\n  text-transform: none !important;\n}\n\n.underline {\n  text-decoration: underline !important;\n}\n\n.line-through {\n  text-decoration: line-through !important;\n}\n\n.no-underline {\n  text-decoration: none !important;\n}\n\n/**************************************************/\n.font-hairline {\n  font-weight: 100 !important;\n}\n\n.font-thin {\n  font-weight: 200 !important;\n}\n\n.font-light {\n  font-weight: 300 !important;\n}\n\n.font-normal {\n  font-weight: 400 !important;\n}\n\n.font-medium {\n  font-weight: 500 !important;\n}\n\n.font-semibold {\n  font-weight: 600 !important;\n}\n\n.font-bold {\n  font-weight: 700 !important;\n}\n\n.font-extrabold {\n  font-weight: 800 !important;\n}\n\n.font-black {\n  font-weight: 900 !important;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.vertical-align-middle {\n  vertical-align: middle;\n}\n\n.mg-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.rounded-circle {\n  border-radius: 50% !important;\n}\n\n.border {\n  border: 1px solid #dee2e6 !important;\n}\n\n.border-top {\n  border-top: 1px solid #dee2e6 !important;\n}\n\n.border-right {\n  border-right: 1px solid #dee2e6 !important;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #dee2e6 !important;\n}\n\n.border-left {\n  border-left: 1px solid #dee2e6 !important;\n}\n\n.text-color-red {\n  color: #f44336;\n}\n\n.text-color-pink {\n  color: #e91e63;\n}\n\n.text-color-purple {\n  color: #9c27b0;\n}\n\n.text-color-deep-purple {\n  color: #673ab7;\n}\n\n.text-color-indigo {\n  color: #3f51b5;\n}\n\n.text-color-blue {\n  color: #2196f3;\n}\n\n.text-color-light-blue {\n  color: #03a9f4;\n}\n\n.text-color-cyan {\n  color: #00bcd4;\n}\n\n.text-color-teal {\n  color: #009688;\n}\n\n.text-color-green {\n  color: #4caf50;\n}\n\n.text-color-light-green {\n  color: #8bc34a;\n}\n\n.text-color-lime {\n  color: #cddc39;\n}\n\n.text-color-yellow {\n  color: #ffeb3b;\n}\n\n.text-color-amber {\n  color: #ffc107;\n}\n\n.text-color-orange {\n  color: #ff9800;\n}\n\n.text-color-deep-orange {\n  color: #ff5722;\n}\n\n.text-color-brown {\n  color: #795548;\n}\n\n.text-color-black {\n  color: #000;\n}\n\n.text-color-white {\n  color: #fff;\n}\n\n.text-color-grey {\n  color: #9e9e9e;\n}\n\n.text-color-blue-grey {\n  color: #607d8b;\n}\n\n.text-color-primary-color-dark {\n  color: #0d47a1;\n}\n\n.text-color-secondary-color {\n  color: #aa66cc;\n}\n\n.text-color-secondary-color-dark {\n  color: #9933cc;\n}\n\n.text-color-default-color {\n  color: #2bbbad;\n}\n\n.text-color-default-color-dark {\n  color: #00695c;\n}\n\n.text-color-info-color {\n  color: #33b5e5;\n}\n\n.text-color-info-color-dark {\n  color: #0099cc;\n}\n\n.text-color-success-color {\n  color: #00c851;\n}\n\n.text-color-success-color-dark {\n  color: #007e33;\n}\n\n.text-color-warning-color {\n  color: #ffbb33;\n}\n\n.text-color-warning-color-dark {\n  color: #ff8800;\n}\n\n.text-color-danger-color {\n  color: #ff3547;\n}\n\n.text-color-danger-color-dark {\n  color: #cc0000;\n}\n\n.text-color-elegant-color {\n  color: #2e2e2e;\n}\n\n.text-color-elegant-color-dark {\n  color: #212121;\n}\n\n.text-color-stylish-color {\n  color: #4b515d;\n}\n\n.text-color-stylish-color-dark {\n  color: #3e4551;\n}\n\n.text-color-unique-color {\n  color: #3f729b;\n}\n\n.text-color-unique-color-dark {\n  color: #1c2331;\n}\n\n.text-color-special-color {\n  color: #37474f;\n}\n\n.text-color-special-color-dark {\n  color: #263238;\n}\n\n.text-color-primary {\n  color: #4285f4;\n}\n\n.text-color-danger {\n  color: #ff3547;\n}\n\n.text-color-warning {\n  color: #ffbb33;\n}\n\n.text-color-success {\n  color: #00c851;\n}\n\n.text-color-info {\n  color: #33b5e5;\n}\n\n.text-color-default {\n  color: #2bbbad;\n}\n\n.text-color-secondary {\n  color: #aa66cc;\n}\n\n.text-color-dark {\n  color: #212121;\n}\n\n.text-color-light {\n  color: #e0e0e0;\n}\n\n.text-color-grey-x {\n  color: #f9f9f9;\n}\n\n.border-color-red {\n  border-color: #f44336;\n}\n\n.border-color-pink {\n  border-color: #e91e63;\n}\n\n.border-color-purple {\n  border-color: #9c27b0;\n}\n\n.border-color-deep-purple {\n  border-color: #673ab7;\n}\n\n.border-color-indigo {\n  border-color: #3f51b5;\n}\n\n.border-color-blue {\n  border-color: #2196f3;\n}\n\n.border-color-light-blue {\n  border-color: #03a9f4;\n}\n\n.border-color-cyan {\n  border-color: #00bcd4;\n}\n\n.border-color-teal {\n  border-color: #009688;\n}\n\n.border-color-green {\n  border-color: #4caf50;\n}\n\n.border-color-light-green {\n  border-color: #8bc34a;\n}\n\n.border-color-lime {\n  border-color: #cddc39;\n}\n\n.border-color-yellow {\n  border-color: #ffeb3b;\n}\n\n.border-color-amber {\n  border-color: #ffc107;\n}\n\n.border-color-orange {\n  border-color: #ff9800;\n}\n\n.border-color-deep-orange {\n  border-color: #ff5722;\n}\n\n.border-color-brown {\n  border-color: #795548;\n}\n\n.border-color-black {\n  border-color: #000;\n}\n\n.border-color-white {\n  border-color: #fff;\n}\n\n.border-color-grey {\n  border-color: #9e9e9e;\n}\n\n.border-color-blue-grey {\n  border-color: #607d8b;\n}\n\n.border-color-primary-color-dark {\n  border-color: #0d47a1;\n}\n\n.border-color-secondary-color {\n  border-color: #aa66cc;\n}\n\n.border-color-secondary-color-dark {\n  border-color: #9933cc;\n}\n\n.border-color-default-color {\n  border-color: #2bbbad;\n}\n\n.border-color-default-color-dark {\n  border-color: #00695c;\n}\n\n.border-color-info-color {\n  border-color: #33b5e5;\n}\n\n.border-color-info-color-dark {\n  border-color: #0099cc;\n}\n\n.border-color-success-color {\n  border-color: #00c851;\n}\n\n.border-color-success-color-dark {\n  border-color: #007e33;\n}\n\n.border-color-warning-color {\n  border-color: #ffbb33;\n}\n\n.border-color-warning-color-dark {\n  border-color: #ff8800;\n}\n\n.border-color-danger-color {\n  border-color: #ff3547;\n}\n\n.border-color-danger-color-dark {\n  border-color: #cc0000;\n}\n\n.border-color-elegant-color {\n  border-color: #2e2e2e;\n}\n\n.border-color-elegant-color-dark {\n  border-color: #212121;\n}\n\n.border-color-stylish-color {\n  border-color: #4b515d;\n}\n\n.border-color-stylish-color-dark {\n  border-color: #3e4551;\n}\n\n.border-color-unique-color {\n  border-color: #3f729b;\n}\n\n.border-color-unique-color-dark {\n  border-color: #1c2331;\n}\n\n.border-color-special-color {\n  border-color: #37474f;\n}\n\n.border-color-special-color-dark {\n  border-color: #263238;\n}\n\n.border-color-primary {\n  border-color: #4285f4;\n}\n\n.border-color-danger {\n  border-color: #ff3547;\n}\n\n.border-color-warning {\n  border-color: #ffbb33;\n}\n\n.border-color-success {\n  border-color: #00c851;\n}\n\n.border-color-info {\n  border-color: #33b5e5;\n}\n\n.border-color-default {\n  border-color: #2bbbad;\n}\n\n.border-color-secondary {\n  border-color: #aa66cc;\n}\n\n.border-color-dark {\n  border-color: #212121;\n}\n\n.border-color-light {\n  border-color: #e0e0e0;\n}\n\n.border-color-grey-x {\n  border-color: #f9f9f9;\n}\n\n.bg-color-red {\n  background-color: #f44336;\n}\n\n.bg-color-pink {\n  background-color: #e91e63;\n}\n\n.bg-color-purple {\n  background-color: #9c27b0;\n}\n\n.bg-color-deep-purple {\n  background-color: #673ab7;\n}\n\n.bg-color-indigo {\n  background-color: #3f51b5;\n}\n\n.bg-color-blue {\n  background-color: #2196f3;\n}\n\n.bg-color-light-blue {\n  background-color: #03a9f4;\n}\n\n.bg-color-cyan {\n  background-color: #00bcd4;\n}\n\n.bg-color-teal {\n  background-color: #009688;\n}\n\n.bg-color-green {\n  background-color: #4caf50;\n}\n\n.bg-color-light-green {\n  background-color: #8bc34a;\n}\n\n.bg-color-lime {\n  background-color: #cddc39;\n}\n\n.bg-color-yellow {\n  background-color: #ffeb3b;\n}\n\n.bg-color-amber {\n  background-color: #ffc107;\n}\n\n.bg-color-orange {\n  background-color: #ff9800;\n}\n\n.bg-color-deep-orange {\n  background-color: #ff5722;\n}\n\n.bg-color-brown {\n  background-color: #795548;\n}\n\n.bg-color-black {\n  background-color: #000;\n}\n\n.bg-color-white {\n  background-color: #fff;\n}\n\n.bg-color-grey {\n  background-color: #9e9e9e;\n}\n\n.bg-color-blue-grey {\n  background-color: #607d8b;\n}\n\n.bg-color-primary-color-dark {\n  background-color: #0d47a1;\n}\n\n.bg-color-secondary-color {\n  background-color: #aa66cc;\n}\n\n.bg-color-secondary-color-dark {\n  background-color: #9933cc;\n}\n\n.bg-color-default-color {\n  background-color: #2bbbad;\n}\n\n.bg-color-default-color-dark {\n  background-color: #00695c;\n}\n\n.bg-color-info-color {\n  background-color: #33b5e5;\n}\n\n.bg-color-info-color-dark {\n  background-color: #0099cc;\n}\n\n.bg-color-success-color {\n  background-color: #00c851;\n}\n\n.bg-color-success-color-dark {\n  background-color: #007e33;\n}\n\n.bg-color-warning-color {\n  background-color: #ffbb33;\n}\n\n.bg-color-warning-color-dark {\n  background-color: #ff8800;\n}\n\n.bg-color-danger-color {\n  background-color: #ff3547;\n}\n\n.bg-color-danger-color-dark {\n  background-color: #cc0000;\n}\n\n.bg-color-elegant-color {\n  background-color: #2e2e2e;\n}\n\n.bg-color-elegant-color-dark {\n  background-color: #212121;\n}\n\n.bg-color-stylish-color {\n  background-color: #4b515d;\n}\n\n.bg-color-stylish-color-dark {\n  background-color: #3e4551;\n}\n\n.bg-color-unique-color {\n  background-color: #3f729b;\n}\n\n.bg-color-unique-color-dark {\n  background-color: #1c2331;\n}\n\n.bg-color-special-color {\n  background-color: #37474f;\n}\n\n.bg-color-special-color-dark {\n  background-color: #263238;\n}\n\n.bg-color-primary {\n  background-color: #4285f4;\n}\n\n.bg-color-danger {\n  background-color: #ff3547;\n}\n\n.bg-color-warning {\n  background-color: #ffbb33;\n}\n\n.bg-color-success {\n  background-color: #00c851;\n}\n\n.bg-color-info {\n  background-color: #33b5e5;\n}\n\n.bg-color-default {\n  background-color: #2bbbad;\n}\n\n.bg-color-secondary {\n  background-color: #aa66cc;\n}\n\n.bg-color-dark {\n  background-color: #212121;\n}\n\n.bg-color-light {\n  background-color: #e0e0e0;\n}\n\n.bg-color-grey-x {\n  background-color: #f9f9f9;\n}\n\n.w-25 {\n  width: 25;\n}\n\n.w-50 {\n  width: 50;\n}\n\n.w-55 {\n  width: 55;\n}\n\n.w-60 {\n  width: 60;\n}\n\n.w-65 {\n  width: 65;\n}\n\n.w-70 {\n  width: 70;\n}\n\n.w-75 {\n  width: 75;\n}\n\n.w-80 {\n  width: 80;\n}\n\n.w-85 {\n  width: 85;\n}\n\n.w-90 {\n  width: 90;\n}\n\n.w-95 {\n  width: 95;\n}\n\n.w-100 {\n  width: 100;\n}\n\n.text-xs {\n  font-size: 0.75rem;\n}\n\n.text-sm {\n  font-size: 0.875rem;\n}\n\n.text-base {\n  font-size: 1rem;\n}\n\n.text-lg {\n  font-size: 1.125rem;\n}\n\n.text-xl {\n  font-size: 1.25rem;\n}\n\n.text-2xl {\n  font-size: 1.5rem;\n}\n\n.text-3xl {\n  font-size: 1.875rem;\n}\n\n.text-4xl {\n  font-size: 2.25rem;\n}\n\n.text-5xl {\n  font-size: 3rem;\n}\n\n.text-6xl {\n  font-size: 4rem;\n}\n\nbody.neo-scroll {\n  overflow: hidden;\n}\n\ninput:focus, select:focus, textarea:focus, option:focus {\n  border: 1px solid #aaaaaa;\n  outline: none;\n}\n\n.alert {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n}\n\n.alert-heading {\n  color: inherit;\n}\n\n.alert-link {\n  font-weight: bold;\n}\n\n.alert-dismissible {\n  padding-right: 4rem;\n}\n.alert-dismissible .close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 0.75rem 1.25rem;\n  color: inherit;\n}\n\n.alert-primary {\n  color: #0a54c0;\n  background-color: #e2eeff;\n  border-color: #bbd6fe;\n}\n.alert-primary .alert-link {\n  color: #073f90;\n}\n\n.alert-secondary {\n  color: #52595f;\n  background-color: #edeeef;\n  border-color: #d6d8db;\n}\n.alert-secondary .alert-link {\n  color: #3a3f44;\n}\n\n.alert-success {\n  color: #1e7f34;\n  background-color: #e5f4e9;\n  border-color: #c3e6cb;\n}\n.alert-success .alert-link {\n  color: #145623;\n}\n\n.alert-info {\n  color: #117b8c;\n  background-color: #e3f4f6;\n  border-color: #bee5eb;\n}\n.alert-info .alert-link {\n  color: #0b535f;\n}\n\n.alert-warning {\n  color: #c29305;\n  background-color: #fff8e1;\n  border-color: #ffeeba;\n}\n.alert-warning .alert-link {\n  color: #906d04;\n}\n\n.alert-danger {\n  color: #a72834;\n  background-color: #fbe7e9;\n  border-color: #f5c6cb;\n}\n.alert-danger .alert-link {\n  color: #7e1e27;\n}\n\n.alert-light {\n  color: #bcbdbe;\n  background-color: #fefefe;\n  border-color: #fdfdfe;\n}\n.alert-light .alert-link {\n  color: #a2a4a5;\n}\n\n.alert-dark {\n  color: #282c31;\n  background-color: #e7e7e8;\n  border-color: #c6c8ca;\n}\n.alert-dark .alert-link {\n  color: #111315;\n}\n\n:root {\n  --animate-duration: 1s;\n  --animate-delay: 1s;\n  --animate-loop: 1;\n}\n\n.animated {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n}\n.animated.infinite {\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n.animated.faster {\n  animation-duration: calc($--animate-duration / 2);\n}\n.animated.fast {\n  animation-duration: calc($--animate-duration * 0.8);\n}\n.animated.slow {\n  animation-duration: calc($--animate-duration * 2);\n}\n.animated.slower {\n  animation-duration: calc($--animate-duration * 3);\n}\n.animated.loop-1 {\n  animation-iteration-count: 1;\n}\n.animated.delay-1s {\n  animation-delay: calc($--animate-delay * $i);\n}\n.animated.loop-2 {\n  animation-iteration-count: 2;\n}\n.animated.delay-1s {\n  animation-delay: calc($--animate-delay * $i);\n}\n.animated.loop-3 {\n  animation-iteration-count: 3;\n}\n.animated.delay-1s {\n  animation-delay: calc($--animate-delay * $i);\n}\n.animated.loop-4 {\n  animation-iteration-count: 4;\n}\n.animated.delay-1s {\n  animation-delay: calc($--animate-delay * $i);\n}\n\n@media print, (prefers-reduced-motion: reduce) {\n  .animated {\n    animation-duration: 1ms !important;\n    transition-duration: 1ms !important;\n    animation-iteration-count: 1 !important;\n  }\n\n  .animated[class*=Out] {\n    opacity: 0;\n  }\n}\n.animated-initial {\n  animation-name: initial !important;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@keyframes pulse {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n  50% {\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n.pulse {\n  animation-name: pulse;\n  animation-timing-function: ease-in-out;\n}\n\n@keyframes tada {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n  10%, 20% {\n    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n  }\n  30%, 50%, 70%, 90% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n  40%, 60%, 80% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n.tada {\n  animation-name: tada;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n@keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.fadeInLeft {\n  animation-name: fadeInLeft;\n}\n\n@keyframes fadeInRight {\n  from {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.fadeInRight {\n  animation-name: fadeInRight;\n}\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.fadeInUp {\n  animation-name: fadeInUp;\n}\n\n@keyframes rotateOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n}\n.rotateOut {\n  animation-name: rotateOut;\n  transform-origin: center;\n}\n\n.rotate-circle {\n  animation: rotateCircle 9s infinite;\n}\n\n/*\n Custom Animations\n */\n@keyframes rotateCircle {\n  0% {\n    transform: rotate(0deg);\n  }\n  25% {\n    transform: rotate(90deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(270deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes jackInTheBox {\n  from {\n    opacity: 0;\n    transform: scale(0.1) rotate(30deg);\n    transform-origin: center bottom;\n  }\n  50% {\n    transform: rotate(-10deg);\n  }\n  70% {\n    transform: rotate(3deg);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.jackInTheBox {\n  animation-name: jackInTheBox;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@keyframes rollIn {\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.rollIn {\n  animation-name: rollIn;\n}\n\n@keyframes zoomIn {\n  from {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n  50% {\n    opacity: 1;\n  }\n}\n.zoomIn {\n  animation-name: zoomIn;\n}\n\n@keyframes slideInDown {\n  from {\n    transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.slideInDown {\n  animation-name: slideInDown;\n}\n\n@keyframes float {\n  0% {\n    transform: translateY(0px);\n    -webkit-transition: translateY(0px);\n  }\n  50% {\n    transform: translateY(-6px);\n    -webkit-transition: translateY(-6px);\n  }\n  100% {\n    transform: translateY(0px);\n    -webkit-transition: translateY(0px);\n  }\n}\n.purple-gradient {\n  background: -moz-linear-gradient(40deg, #ff6ec4, #7873f5) !important;\n  background: -webkit-linear-gradient(40deg, #ff6ec4, #7873f5) !important;\n  background: -o-linear-gradient(40deg, #ff6ec4, #7873f5) !important;\n  background: -ms-linear-gradient(40deg, #ff6ec4, #7873f5) !important;\n  background: linear-gradient(40deg, #ff6ec4, #7873f5) !important;\n}\n\n.peach-gradient {\n  background: -moz-linear-gradient(40deg, #ffd86f, #fc6262) !important;\n  background: -webkit-linear-gradient(40deg, #ffd86f, #fc6262) !important;\n  background: -o-linear-gradient(40deg, #ffd86f, #fc6262) !important;\n  background: -ms-linear-gradient(40deg, #ffd86f, #fc6262) !important;\n  background: linear-gradient(40deg, #ffd86f, #fc6262) !important;\n}\n\n.aqua-gradient {\n  background: -moz-linear-gradient(40deg, #2096ff, #05ffa3) !important;\n  background: -webkit-linear-gradient(40deg, #2096ff, #05ffa3) !important;\n  background: -o-linear-gradient(40deg, #2096ff, #05ffa3) !important;\n  background: -ms-linear-gradient(40deg, #2096ff, #05ffa3) !important;\n  background: linear-gradient(40deg, #2096ff, #05ffa3) !important;\n}\n\n.blue-gradient {\n  background: -moz-linear-gradient(40deg, #45cafc, #303f9f) !important;\n  background: -webkit-linear-gradient(40deg, #45cafc, #303f9f) !important;\n  background: -o-linear-gradient(40deg, #45cafc, #303f9f) !important;\n  background: -ms-linear-gradient(40deg, #45cafc, #303f9f) !important;\n  background: linear-gradient(40deg, #45cafc, #303f9f) !important;\n}\n\n.home-page-gradient {\n  background: -moz-linear-gradient(40deg, #e1fefa, #fcf7f4) !important;\n  background: -webkit-linear-gradient(40deg, #e1fefa, #fcf7f4) !important;\n  background: -o-linear-gradient(40deg, #e1fefa, #fcf7f4) !important;\n  background: -ms-linear-gradient(40deg, #e1fefa, #fcf7f4) !important;\n  background: linear-gradient(40deg, #e1fefa, #fcf7f4) !important;\n}\n\n.purple-gradient-rgba {\n  background: -moz-linear-gradient(40deg, rgba(255, 110, 196, 0.9), rgba(120, 115, 245, 0.9)) !important;\n  background: -webkit-linear-gradient(40deg, rgba(255, 110, 196, 0.9), rgba(120, 115, 245, 0.9)) !important;\n  background: -o-linear-gradient(40deg, rgba(255, 110, 196, 0.9), rgba(120, 115, 245, 0.9)) !important;\n  background: -ms-linear-gradient(40deg, rgba(255, 110, 196, 0.9), rgba(120, 115, 245, 0.9)) !important;\n  background: linear-gradient(40deg, rgba(255, 110, 196, 0.9), rgba(120, 115, 245, 0.9)) !important;\n}\n\n.peach-gradient-rgba {\n  background: -moz-linear-gradient(40deg, rgba(255, 216, 111, 0.9), rgba(252, 98, 98, 0.9)) !important;\n  background: -webkit-linear-gradient(40deg, rgba(255, 216, 111, 0.9), rgba(252, 98, 98, 0.9)) !important;\n  background: -o-linear-gradient(40deg, rgba(255, 216, 111, 0.9), rgba(252, 98, 98, 0.9)) !important;\n  background: -ms-linear-gradient(40deg, rgba(255, 216, 111, 0.9), rgba(252, 98, 98, 0.9)) !important;\n  background: linear-gradient(40deg, rgba(255, 216, 111, 0.9), rgba(252, 98, 98, 0.9)) !important;\n}\n\n.aqua-gradient-rgba {\n  background: -moz-linear-gradient(40deg, rgba(32, 150, 255, 0.9), rgba(5, 255, 163, 0.9)) !important;\n  background: -webkit-linear-gradient(40deg, rgba(32, 150, 255, 0.9), rgba(5, 255, 163, 0.9)) !important;\n  background: -o-linear-gradient(40deg, rgba(32, 150, 255, 0.9), rgba(5, 255, 163, 0.9)) !important;\n  background: -ms-linear-gradient(40deg, rgba(32, 150, 255, 0.9), rgba(5, 255, 163, 0.9)) !important;\n  background: linear-gradient(40deg, rgba(32, 150, 255, 0.9), rgba(5, 255, 163, 0.9)) !important;\n}\n\n.blue-gradient-rgba {\n  background: -moz-linear-gradient(40deg, rgba(69, 202, 252, 0.9), rgba(48, 63, 159, 0.9)) !important;\n  background: -webkit-linear-gradient(40deg, rgba(69, 202, 252, 0.9), rgba(48, 63, 159, 0.9)) !important;\n  background: -o-linear-gradient(40deg, rgba(69, 202, 252, 0.9), rgba(48, 63, 159, 0.9)) !important;\n  background: -ms-linear-gradient(40deg, rgba(69, 202, 252, 0.9), rgba(48, 63, 159, 0.9)) !important;\n  background: linear-gradient(40deg, rgba(69, 202, 252, 0.9), rgba(48, 63, 159, 0.9)) !important;\n}\n\n.bg-gradient-purple {\n  background: -moz-linear-gradient(131.93deg, #ff6ec4, #7873f5) !important;\n  background: -webkit-linear-gradient(131.93deg, #ff6ec4, #7873f5) !important;\n  background: -o-linear-gradient(131.93deg, #ff6ec4, #7873f5) !important;\n  background: -ms-linear-gradient(131.93deg, #ff6ec4, #7873f5) !important;\n  background: linear-gradient(131.93deg, #ff6ec4, #7873f5) !important;\n}\n\n.bg-gradient-peach {\n  background: -moz-linear-gradient(131.93deg, #ffd86f, #fc6262) !important;\n  background: -webkit-linear-gradient(131.93deg, #ffd86f, #fc6262) !important;\n  background: -o-linear-gradient(131.93deg, #ffd86f, #fc6262) !important;\n  background: -ms-linear-gradient(131.93deg, #ffd86f, #fc6262) !important;\n  background: linear-gradient(131.93deg, #ffd86f, #fc6262) !important;\n}\n\n.bg-gradient-aqua {\n  background: -moz-linear-gradient(131.93deg, #2096ff, #05ffa3) !important;\n  background: -webkit-linear-gradient(131.93deg, #2096ff, #05ffa3) !important;\n  background: -o-linear-gradient(131.93deg, #2096ff, #05ffa3) !important;\n  background: -ms-linear-gradient(131.93deg, #2096ff, #05ffa3) !important;\n  background: linear-gradient(131.93deg, #2096ff, #05ffa3) !important;\n}\n\n.bg-gradient-blue {\n  background: -moz-linear-gradient(131.93deg, #45cafc, #303f9f) !important;\n  background: -webkit-linear-gradient(131.93deg, #45cafc, #303f9f) !important;\n  background: -o-linear-gradient(131.93deg, #45cafc, #303f9f) !important;\n  background: -ms-linear-gradient(131.93deg, #45cafc, #303f9f) !important;\n  background: linear-gradient(131.93deg, #45cafc, #303f9f) !important;\n}\n\n.bg-gradient-home-page {\n  background: -moz-linear-gradient(131.93deg, #e1fefa, #fcf7f4) !important;\n  background: -webkit-linear-gradient(131.93deg, #e1fefa, #fcf7f4) !important;\n  background: -o-linear-gradient(131.93deg, #e1fefa, #fcf7f4) !important;\n  background: -ms-linear-gradient(131.93deg, #e1fefa, #fcf7f4) !important;\n  background: linear-gradient(131.93deg, #e1fefa, #fcf7f4) !important;\n}\n\n@font-face {\n  font-family: \"HERO Icons\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/IconFont/webfont.eot?v=1.4.57\");\n  src: url(\"http://babysitter.trust-growth.co.jp/font/IconFont/webfont.eot?#iefix&v=1.4.57\") format(\"embedded-opentype\"), url(\"http://babysitter.trust-growth.co.jp/font/IconFont/webfont.woff2?v=1.4.57\") format(\"woff2\"), url(\"http://babysitter.trust-growth.co.jp/font/IconFont/webfont.woff?v=1.4.57\") format(\"woff\"), url(\"http://babysitter.trust-growth.co.jp/font/IconFont/webfont.ttf?v=1.4.57\") format(\"truetype\"), url(\"http://babysitter.trust-growth.co.jp/font/IconFont/webfont.svg?v=1.4.57\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\ni.hero-icon {\n  display: inline-block;\n  width: 32px;\n  height: 24px;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  line-height: 24px;\n}\ni.hero-icon:before {\n  font-size: 24px;\n  display: inline-block;\n  font: normal normal normal 24px/1 \"HERO Icons\";\n  font-size: inherit;\n  text-rendering: auto;\n  line-height: inherit;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\ni.hero-icon.hero-account-group-outline::before {\n  content: \"\\F0B58\";\n}\ni.hero-icon.hero-account-search-outline::before {\n  content: \"\\F0935\";\n}\ni.hero-icon.hero-account-tie-outline::before {\n  content: \"\\F10CA\";\n}\ni.hero-icon.hero-airport::before {\n  content: \"\\F084B\";\n}\ni.hero-icon.hero-arrow-down-bold-box-outline::before {\n  content: \"\\F0730\";\n}\ni.hero-icon.hero-arrow-up-bold-box-outline::before {\n  content: \"\\F0739\";\n}\ni.hero-icon.hero-arrow-up-box::before {\n  content: \"\\F06C3\";\n}\ni.hero-icon.hero-auto-fix::before {\n  content: \"\\F0068\";\n}\ni.hero-icon.hero-auto-upload::before {\n  content: \"\\F0069\";\n}\ni.hero-icon.hero-ballot-recount-outline::before {\n  content: \"\\F0C3A\";\n}\ni.hero-icon.hero-calendar-check-outline::before {\n  content: \"\\F0C44\";\n}\ni.hero-icon.hero-calendar-month::before {\n  content: \"\\F0E17\";\n}\ni.hero-icon.hero-call-made::before {\n  content: \"\\F00F7\";\n}\ni.hero-icon.hero-card-account-mail-outline::before {\n  content: \"\\F0E98\";\n}\ni.hero-icon.hero-cart-plus::before {\n  content: \"\\F0112\";\n}\ni.hero-icon.hero-cellphone::before {\n  content: \"\\F011C\";\n}\ni.hero-icon.hero-cellphone-cog::before {\n  content: \"\\F0951\";\n}\ni.hero-icon.hero-cellphone-message::before {\n  content: \"\\F08D3\";\n}\ni.hero-icon.hero-cellphone-nfc::before {\n  content: \"\\F0E90\";\n}\ni.hero-icon.hero-certificate-outline::before {\n  content: \"\\F1188\";\n}\ni.hero-icon.hero-check-circle::before {\n  content: \"\\F05E0\";\n}\ni.hero-icon.hero-check-circle-outline::before {\n  content: \"\\F05E1\";\n}\ni.hero-icon.hero-clippy::before {\n  content: \"\\F014F\";\n}\ni.hero-icon.hero-clock-check-outline::before {\n  content: \"\\F0FA9\";\n}\ni.hero-icon.hero-clock-outline::before {\n  content: \"\\F0150\";\n}\ni.hero-icon.hero-clock-start::before {\n  content: \"\\F0155\";\n}\ni.hero-icon.hero-cloud-download-outline::before {\n  content: \"\\F0B7D\";\n}\ni.hero-icon.hero-creation::before {\n  content: \"\\F0674\";\n}\ni.hero-icon.hero-email-edit-outline::before {\n  content: \"\\F0EE4\";\n}\ni.hero-icon.hero-emoticon::before {\n  content: \"\\F0C68\";\n}\ni.hero-icon.hero-emoticon-angry::before {\n  content: \"\\F0C69\";\n}\ni.hero-icon.hero-emoticon-angry-outline::before {\n  content: \"\\F0C6A\";\n}\ni.hero-icon.hero-emoticon-confused::before {\n  content: \"\\F10DE\";\n}\ni.hero-icon.hero-emoticon-confused-outline::before {\n  content: \"\\F10DF\";\n}\ni.hero-icon.hero-emoticon-cool::before {\n  content: \"\\F0C6B\";\n}\ni.hero-icon.hero-emoticon-cool-outline::before {\n  content: \"\\F01F3\";\n}\ni.hero-icon.hero-emoticon-cry::before {\n  content: \"\\F0C6C\";\n}\ni.hero-icon.hero-emoticon-cry-outline::before {\n  content: \"\\F0C6D\";\n}\ni.hero-icon.hero-emoticon-dead::before {\n  content: \"\\F0C6E\";\n}\ni.hero-icon.hero-emoticon-dead-outline::before {\n  content: \"\\F069B\";\n}\ni.hero-icon.hero-emoticon-devil::before {\n  content: \"\\F0C6F\";\n}\ni.hero-icon.hero-emoticon-devil-outline::before {\n  content: \"\\F01F4\";\n}\ni.hero-icon.hero-emoticon-excited::before {\n  content: \"\\F0C70\";\n}\ni.hero-icon.hero-emoticon-excited-outline::before {\n  content: \"\\F069C\";\n}\ni.hero-icon.hero-emoticon-frown::before {\n  content: \"\\F0F4C\";\n}\ni.hero-icon.hero-emoticon-frown-outline::before {\n  content: \"\\F0F4D\";\n}\ni.hero-icon.hero-emoticon-happy::before {\n  content: \"\\F0C71\";\n}\ni.hero-icon.hero-emoticon-happy-outline::before {\n  content: \"\\F01F5\";\n}\ni.hero-icon.hero-emoticon-kiss::before {\n  content: \"\\F0C72\";\n}\ni.hero-icon.hero-emoticon-kiss-outline::before {\n  content: \"\\F0C73\";\n}\ni.hero-icon.hero-emoticon-lol::before {\n  content: \"\\F1214\";\n}\ni.hero-icon.hero-emoticon-lol-outline::before {\n  content: \"\\F1215\";\n}\ni.hero-icon.hero-emoticon-neutral::before {\n  content: \"\\F0C74\";\n}\ni.hero-icon.hero-emoticon-neutral-outline::before {\n  content: \"\\F01F6\";\n}\ni.hero-icon.hero-emoticon-outline::before {\n  content: \"\\F01F2\";\n}\ni.hero-icon.hero-emoticon-poop::before {\n  content: \"\\F01F7\";\n}\ni.hero-icon.hero-emoticon-poop-outline::before {\n  content: \"\\F0C75\";\n}\ni.hero-icon.hero-emoticon-sad::before {\n  content: \"\\F0C76\";\n}\ni.hero-icon.hero-emoticon-sad-outline::before {\n  content: \"\\F01F8\";\n}\ni.hero-icon.hero-emoticon-tongue::before {\n  content: \"\\F01F9\";\n}\ni.hero-icon.hero-emoticon-tongue-outline::before {\n  content: \"\\F0C77\";\n}\ni.hero-icon.hero-emoticon-wink::before {\n  content: \"\\F0C78\";\n}\ni.hero-icon.hero-emoticon-wink-outline::before {\n  content: \"\\F0C79\";\n}\ni.hero-icon.hero-file::before {\n  content: \"\\F0214\";\n}\ni.hero-icon.hero-file-cloud-outline::before {\n  content: \"\\F102A\";\n}\ni.hero-icon.hero-form-select::before {\n  content: \"\\F1401\";\n}\ni.hero-icon.hero-format-list-text::before {\n  content: \"\\F126F\";\n}\ni.hero-icon.hero-google-ads::before {\n  content: \"\\F0C87\";\n}\ni.hero-icon.hero-hand-okay::before {\n  content: \"\\F0A50\";\n}\ni.hero-icon.hero-hand-pointing-right::before {\n  content: \"\\F02C7\";\n}\ni.hero-icon.hero-headset::before {\n  content: \"\\F02CE\";\n}\ni.hero-icon.hero-heart-multiple-outline::before {\n  content: \"\\F0A57\";\n}\ni.hero-icon.hero-home-map-marker::before {\n  content: \"\\F05F8\";\n}\ni.hero-icon.hero-human-male-child::before {\n  content: \"\\F138C\";\n}\ni.hero-icon.hero-laptop::before {\n  content: \"\\F0322\";\n}\ni.hero-icon.hero-message-cog-outline::before {\n  content: \"\\F1172\";\n}\ni.hero-icon.hero-message-text-outline::before {\n  content: \"\\F036A\";\n}\ni.hero-icon.hero-mouse::before {\n  content: \"\\F037D\";\n}\ni.hero-icon.hero-mouse-bluetooth::before {\n  content: \"\\F098B\";\n}\ni.hero-icon.hero-mouse-off::before {\n  content: \"\\F037E\";\n}\ni.hero-icon.hero-mouse-variant::before {\n  content: \"\\F037F\";\n}\ni.hero-icon.hero-mouse-variant-off::before {\n  content: \"\\F0380\";\n}\ni.hero-icon.hero-newspaper-variant-multiple-outline::before {\n  content: \"\\F1003\";\n}\ni.hero-icon.hero-newspaper-variant-outline::before {\n  content: \"\\F1004\";\n}\ni.hero-icon.hero-phone-in-talk-outline::before {\n  content: \"\\F1182\";\n}\ni.hero-icon.hero-plus-outline::before {\n  content: \"\\F0705\";\n}\ni.hero-icon.hero-responsive::before {\n  content: \"\\F045E\";\n}\ni.hero-icon.hero-select::before {\n  content: \"\\F0485\";\n}\ni.hero-icon.hero-selection-search::before {\n  content: \"\\F1205\";\n}\ni.hero-icon.hero-send::before {\n  content: \"\\F048A\";\n}\ni.hero-icon.hero-send-check-outline::before {\n  content: \"\\F1162\";\n}\ni.hero-icon.hero-send-outline::before {\n  content: \"\\F1165\";\n}\ni.hero-icon.hero-share-all-outline::before {\n  content: \"\\F11F5\";\n}\ni.hero-icon.hero-star-box-multiple-outline::before {\n  content: \"\\F1287\";\n}\ni.hero-icon.hero-sticker-emoji::before {\n  content: \"\\F0785\";\n}\ni.hero-icon.hero-tablet-ipad::before {\n  content: \"\\F04F8\";\n}\ni.hero-icon.hero-television-clean::before {\n  content: \"\\F1110\";\n}\ni.hero-icon.hero-update::before {\n  content: \"\\F06B0\";\n}\ni.hero-icon.hero-zodiac-taurus::before {\n  content: \"\\F0A87\";\n}\ni.hero-icon.hero-zodiac-virgo::before {\n  content: \"\\F0A88\";\n}\n\n.blocker {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  z-index: 99;\n  padding: 20px;\n  box-sizing: border-box;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.75);\n  text-align: center;\n}\n.blocker:before {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n  margin-right: -0.05em;\n}\n.blocker.behind {\n  background-color: transparent;\n}\n\n.modal {\n  display: none;\n  vertical-align: middle;\n  position: relative;\n  z-index: 2;\n  max-width: 500px;\n  box-sizing: border-box;\n  width: 90%;\n  background: #fff;\n  padding: 15px 30px;\n  -webkit-border-radius: 8px;\n  -moz-border-radius: 8px;\n  -o-border-radius: 8px;\n  -ms-border-radius: 8px;\n  border-radius: 8px;\n  -webkit-box-shadow: 0 0 10px #000;\n  -moz-box-shadow: 0 0 10px #000;\n  -o-box-shadow: 0 0 10px #000;\n  -ms-box-shadow: 0 0 10px #000;\n  box-shadow: 0 0 10px #000;\n  text-align: left;\n}\n.modal a.close-modal {\n  position: absolute;\n  top: -12.5px;\n  right: -12.5px;\n  display: block;\n  width: 30px;\n  height: 30px;\n  text-indent: -9999px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAA3hJREFUaAXlm8+K00Acx7MiCIJH/yw+gA9g25O49SL4AO3Bp1jw5NvktC+wF88qevK4BU97EmzxUBCEolK/n5gp3W6TTJPfpNPNF37MNsl85/vN/DaTmU6PknC4K+pniqeKJ3k8UnkvDxXJzzy+q/yaxxeVHxW/FNHjgRSeKt4rFoplzaAuHHDBGR2eS9G54reirsmienDCTRt7xwsp+KAoEmt9nLaGitZxrBbPFNaGfPloGw2t4JVamSt8xYW6Dg1oCYo3Yv+rCGViV160oMkcd8SYKnYV1Nb1aEOjCe6L5ZOiLfF120EjWhuBu3YIZt1NQmujnk5F4MgOpURzLfAwOBSTmzp3fpDxuI/pabxpqOoz2r2HLAb0GMbZKlNV5/Hg9XJypguryA7lPF5KMdTZQzHjqxNPhWhzIuAruOl1eNqKEx1tSh5rfbxdw7mOxCq4qS68ZTjKS1YVvilu559vWvFHhh4rZrdyZ69Vmpgdj8fJbDZLJpNJ0uv1cnr/gjrUhQMuI+ANjyuwftQ0bbL6Erp0mM/ny8Fg4M3LtdRxgMtKl3jwmIHVxYXChFy94/Rmpa/pTbNUhstKV+4Rr8lLQ9KlUvJKLyG8yvQ2s9SBy1Jb7jV5a0yapfF6apaZLjLLcWtd4sNrmJUMHyM+1xibTjH82Zh01TNlhsrOhdKTe00uAzZQmN6+KW+sDa/JD2PSVQ873m29yf+1Q9VDzfEYlHi1G5LKBBWZbtEsHbFwb1oYDwr1ZiF/2bnCSg1OBE/pfr9/bWx26UxJL3ONPISOLKUvQza0LZUxSKyjpdTGa/vDEr25rddbMM0Q3O6Lx3rqFvU+x6UrRKQY7tyrZecmD9FODy8uLizTmilwNj0kraNcAJhOp5aGVwsAGD5VmJBrWWbJSgWT9zrzWepQF47RaGSiKfeGx6Szi3gzmX/HHbihwBser4B9UJYpFBNX4R6vTn3VQnez0SymnrHQMsRYGTr1dSk34ljRqS/EMd2pLQ8YBp3a1PLfcqCpo8gtHkZFHKkTX6fs3MY0blKnth66rKCnU0VRGu37ONrQaA4eZDFtWAu2fXj9zjFkxTBOo8F7t926gTp/83Kyzzcy2kZD6xiqxTYnHLRFm3vHiRSwNSjkz3hoIzo8lCKWUlg/YtGs7tObunDAZfpDLbfEI15zsEIY3U/x/gHHc/G1zltnAgAAAABJRU5ErkJggg==\");\n}\n\n.modal-spinner {\n  display: none;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translateY(-50%) translateX(-50%);\n  padding: 12px 16px;\n  border-radius: 5px;\n  background-color: #111;\n  height: 20px;\n}\n.modal-spinner > div {\n  border-radius: 100px;\n  background-color: #fff;\n  height: 20px;\n  width: 2px;\n  margin: 0 1px;\n  display: inline-block;\n  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n  animation: sk-stretchdelay 1.2s infinite ease-in-out;\n}\n.modal-spinner .rect2 {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s;\n}\n.modal-spinner .rect3 {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n.modal-spinner .rect4 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n\n@-webkit-keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    -webkit-transform: scaleY(0.5);\n  }\n  20% {\n    -webkit-transform: scaleY(1);\n  }\n}\n@keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    transform: scaleY(0.5);\n    -webkit-transform: scaleY(0.5);\n  }\n  20% {\n    transform: scaleY(1);\n    -webkit-transform: scaleY(1);\n  }\n}\n#ui-datepicker-div {\n  z-index: 1000 !important;\n}\n\n.ui-timepicker-wrapper {\n  overflow-y: auto;\n  max-height: 150px;\n  width: 6.5em;\n  background: #fff;\n  border: 1px solid #ddd;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  -moz-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  outline: none;\n  z-index: 10052;\n  margin: 0;\n}\n\n.ui-timepicker-wrapper.ui-timepicker-with-duration {\n  width: 13em;\n}\n\n.ui-timepicker-wrapper.ui-timepicker-with-duration.ui-timepicker-step-30,\n.ui-timepicker-wrapper.ui-timepicker-with-duration.ui-timepicker-step-60 {\n  width: 11em;\n}\n\n.ui-timepicker-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.ui-timepicker-duration {\n  margin-left: 5px;\n  color: #888;\n}\n\n.ui-timepicker-list:hover .ui-timepicker-duration {\n  color: #888;\n}\n\n.ui-timepicker-list li {\n  padding: 3px 0 3px 5px;\n  cursor: pointer;\n  white-space: nowrap;\n  color: #000;\n  list-style: none;\n  margin: 0;\n}\n\n.ui-timepicker-list:hover .ui-timepicker-selected {\n  background: #fff;\n  color: #000;\n}\n\nli.ui-timepicker-selected,\n.ui-timepicker-list li:hover,\n.ui-timepicker-list .ui-timepicker-selected:hover {\n  background: #1980EC;\n  color: #fff;\n}\n\nli.ui-timepicker-selected .ui-timepicker-duration,\n.ui-timepicker-list li:hover .ui-timepicker-duration {\n  color: #ccc;\n}\n\n.ui-timepicker-list li.ui-timepicker-disabled,\n.ui-timepicker-list li.ui-timepicker-disabled:hover,\n.ui-timepicker-list li.ui-timepicker-selected.ui-timepicker-disabled {\n  color: #888;\n  cursor: default;\n}\n\n.ui-timepicker-list li.ui-timepicker-disabled:hover,\n.ui-timepicker-list li.ui-timepicker-selected.ui-timepicker-disabled {\n  background: #f2f2f2;\n}\n\n.modal-booking .title {\n  font-size: 18px;\n  color: #0d47a1;\n  padding: 0 5px 5px;\n  text-align: center;\n}\n.modal-booking .wrapper__datetime-picker {\n  text-align: center;\n}\n.modal-booking .wrapper__datetime-picker .input-group {\n  width: 30%;\n  margin: 0 auto;\n  display: inline-block;\n  margin: 0 1.5% 15px;\n  position: relative;\n  height: 37px;\n}\n.modal-booking .wrapper__datetime-picker .input-group .hero-icon {\n  position: absolute;\n  top: 50%;\n  left: 10px;\n  display: block;\n  font-size: 28px;\n  z-index: 3;\n  color: #6c757d;\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.modal-booking .wrapper__datetime-picker .input-group .input-control {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  color: #525666;\n  background-color: #fff;\n  padding-left: 45px;\n  border-radius: 0;\n  font-size: 15px;\n  transition: border 0.3s linear;\n  border: 1px solid #ccc;\n}\n.modal-booking .wrapper__datetime-picker .input-group .text-control {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  color: #525666;\n  background-color: #fff;\n  padding: 10px 0 10px 25px;\n  border-radius: 0;\n  font-size: 15px;\n  transition: border 0.3s linear;\n}\n.modal-booking .statistical {\n  width: 100%;\n  display: block;\n}\n.modal-booking .statistical .session-statistical {\n  display: block;\n  position: relative;\n  padding: 5px 0;\n}\n.modal-booking .statistical .session-statistical:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.modal-booking .statistical .session-statistical .head {\n  display: block;\n  float: left;\n  font-size: 16px;\n  padding-right: 15px;\n  z-index: 1;\n  background-color: #fff;\n}\n.modal-booking .statistical .session-statistical .head span {\n  padding-right: 10px;\n  font-size: 14px;\n}\n.modal-booking .statistical .session-statistical .head:after {\n  content: \".\";\n  color: transparent;\n  border-bottom: 1px dashed #343a40;\n  position: absolute;\n  z-index: -1;\n  left: 0;\n  right: 0;\n  bottom: 15px;\n}\n.modal-booking .statistical .session-statistical .text-value {\n  padding-left: 10px;\n  display: block;\n  float: right;\n  font-size: 16px;\n  color: #0d47a1;\n  text-align: right;\n  min-width: 60px;\n  background-color: #fff;\n}\n.modal-booking .statistical .session-statistical.note {\n  font-size: 11px;\n}\n.modal-booking .group-box-total {\n  margin-top: 10px;\n  border-top: 1px solid #dee2e6;\n}\n.modal-booking .group-box-total .wrapper__total {\n  width: 100%;\n  display: table;\n}\n.modal-booking .group-box-total .wrapper__total .head, .modal-booking .group-box-total .wrapper__total .text-value {\n  padding: 10px 0;\n  display: table-cell;\n}\n.modal-booking .group-box-total .wrapper__total .text-value {\n  text-align: right;\n}\n.modal-booking .group-box-total .text-button-question {\n  text-align: center;\n}\n.modal-booking .group-box-total .wrapper-button-setting {\n  text-align: center;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-booking {\n  text-decoration: none;\n  margin: 2px 10px;\n  font-size: 12px;\n  text-align: center;\n  display: inline-block;\n  padding: 8px 15px;\n  border: none;\n  color: #fff;\n  white-space: normal;\n  word-wrap: break-word;\n  vertical-align: middle;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  -o-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  cursor: pointer;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-sitter-accept {\n  background: #007bfc;\n  border: 2px solid #007bfc;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-sitter-accept:hover {\n  background-color: #fff;\n  border: 2px solid #a3cffe;\n  color: #007bfc;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-sitter-accept:focus, .modal-booking .group-box-total .wrapper-button-setting .btn-sitter-accept.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-sitter-accept:disabled, .modal-booking .group-box-total .wrapper-button-setting .btn-sitter-accept.disabled, fieldset:disabled .modal-booking .group-box-total .wrapper-button-setting .btn-sitter-accept {\n  pointer-events: none;\n  opacity: 0.65;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-employer-accept {\n  background: #ff3547;\n  border: 2px solid #ff3547;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-employer-accept:hover {\n  background-color: #fff;\n  border: 2px solid #ffb6bd;\n  color: #ff3547;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-employer-accept:focus, .modal-booking .group-box-total .wrapper-button-setting .btn-employer-accept.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-employer-accept:disabled, .modal-booking .group-box-total .wrapper-button-setting .btn-employer-accept.disabled, fieldset:disabled .modal-booking .group-box-total .wrapper-button-setting .btn-employer-accept {\n  pointer-events: none;\n  opacity: 0.65;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-user-cancel {\n  background: #ff3547;\n  border: 2px solid #ff3547;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-user-cancel:hover {\n  background-color: #fff;\n  border: 2px solid #ffb6bd;\n  color: #ff3547;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-user-cancel:focus, .modal-booking .group-box-total .wrapper-button-setting .btn-user-cancel.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-user-cancel:disabled, .modal-booking .group-box-total .wrapper-button-setting .btn-user-cancel.disabled, fieldset:disabled .modal-booking .group-box-total .wrapper-button-setting .btn-user-cancel {\n  pointer-events: none;\n  opacity: 0.65;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-user-approved {\n  background: #0d47a1;\n  border: 2px solid #0d47a1;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-user-approved:hover {\n  background-color: #fff;\n  border: 2px solid #a8bddd;\n  color: #0d47a1;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-user-approved:focus, .modal-booking .group-box-total .wrapper-button-setting .btn-user-approved.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-user-approved:disabled, .modal-booking .group-box-total .wrapper-button-setting .btn-user-approved.disabled, fieldset:disabled .modal-booking .group-box-total .wrapper-button-setting .btn-user-approved {\n  pointer-events: none;\n  opacity: 0.65;\n}\n\n@media only screen and (max-width: 768px) {\n  .modal.modal-booking {\n    width: 100%;\n    padding: 10px;\n  }\n  .modal.modal-booking .wrapper__datetime-picker .wrapper__date-picker {\n    width: 60%;\n    margin: 0 1.5% 5px;\n  }\n  .modal.modal-booking .wrapper__datetime-picker .wrapper__time-picker {\n    width: 40%;\n  }\n}", ""]);
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
  console.log(socket, " set socket ");
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["default"].SOCCKET.SET_SOCKET_IO,
    payload: socket
  };
}
function setterUser(user) {
  console.log(user, " set user ");
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["default"].USER.SETTER_USER,
    payload: _objectSpread(_objectSpread({}, user), {}, {
      fetched: true
    })
  };
}
function setterChannels(channels) {
  console.log(channels, " set channels ");
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["default"].CHANNEL.SETTER_CHANNEL,
    payload: channels
  };
}
function addMessage(message) {
  console.log(message, " addMessage ");
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["default"].CHANNEL.ADD_MESSAGE,
    payload: message
  };
}
function addMessageSendToMe(message) {
  console.log(message, " addMessageSendToMe ");
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["default"].CHANNEL.ADD_MESSAGE_SEND_TO_ME,
    payload: message
  };
}
function changeChannelActive(channelName) {
  console.log(channelName, " changeChannelActive ");
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["default"].CHANNEL.SET_ACTIVE,
    payload: channelName
  };
}
function addUserOnline(id) {
  console.log(id, " addUserOnline ");
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["default"].CHANNEL.ADD_USER_ONLINE,
    payload: id
  };
}
function removeUserOnline(id) {
  console.log(id, " removeUserOnline ");
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["default"].CHANNEL.REMOVE_USER_ONLINE,
    payload: id
  };
}
function readAllMessageChannelActive() {
  console.log(" readAllMessageChannelActive ");
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["default"].CHANNEL.READ_ALL_MESSAGE_CHANNEL_ACTIVE
  };
}
function setterBookings(bookings) {
  console.log(bookings, " setterBookings ");
  return {
    type: _type__WEBPACK_IMPORTED_MODULE_0__["default"].BOOKING.SETTER_BOOKING,
    payload: bookings
  };
}
function changeBooking(booking) {
  console.log(booking, " changeBooking ");
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
    };
    console.log(JSON.stringify(_this.props.client));

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
                id: this.props.auth.id
              });
            });
          }
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      console.log("draw app");
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
          _calculatorBill2 = _slicedToArray(_calculatorBill, 10),
          work_date = _calculatorBill2[0],
          start = _calculatorBill2[1],
          finish = _calculatorBill2[2],
          salary = _calculatorBill2[3],
          differenceTime = _calculatorBill2[4],
          price = _calculatorBill2[5],
          vat = _calculatorBill2[6],
          myServFee = _calculatorBill2[7],
          stripeServFee = _calculatorBill2[8],
          total = _calculatorBill2[9];

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
      }, "\u203B\u65E2\u5B9A\u306E\u624B\u6570\u6599\u304C\u767A\u751F\u3057\u307E\u3059\u3002")), this.props.auth.role_id == _config__WEBPACK_IMPORTED_MODULE_3__["default"].ROLE_USER.employer && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "statistical"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-statistical myServFee"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u30B5\u30FC\u30D3\u30B9\u5229\u7528\u6599")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-value"
      }, myServFee, "\uFFE5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
          _calculatorBill2 = _slicedToArray(_calculatorBill, 10),
          work_date = _calculatorBill2[0],
          start = _calculatorBill2[1],
          finish = _calculatorBill2[2],
          salary = _calculatorBill2[3],
          differenceTime = _calculatorBill2[4],
          price = _calculatorBill2[5],
          vat = _calculatorBill2[6],
          myServFee = _calculatorBill2[7],
          stripeServFee = _calculatorBill2[8],
          total = _calculatorBill2[9];

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
      }, "\u203B\u65E2\u5B9A\u306E\u624B\u6570\u6599\u304C\u767A\u751F\u3057\u307E\u3059\u3002")), this.props.auth.role_id == _config__WEBPACK_IMPORTED_MODULE_4__["default"].ROLE_USER.employer && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "statistical"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-statistical myServFee"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u30B5\u30FC\u30D3\u30B9\u5229\u7528\u6599")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-value"
      }, myServFee, "\uFFE5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
          _calculatorBill2 = _slicedToArray(_calculatorBill, 10),
          work_date = _calculatorBill2[0],
          start = _calculatorBill2[1],
          finish = _calculatorBill2[2],
          salary = _calculatorBill2[3],
          differenceTime = _calculatorBill2[4],
          price = _calculatorBill2[5],
          vat = _calculatorBill2[6],
          myServFee = _calculatorBill2[7],
          stripeServFee = _calculatorBill2[8],
          total = _calculatorBill2[9];

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
          _calculatorBill4 = _slicedToArray(_calculatorBill3, 10),
          work_date = _calculatorBill4[0],
          start = _calculatorBill4[1],
          finish = _calculatorBill4[2],
          salary = _calculatorBill4[3],
          differenceTime = _calculatorBill4[4],
          price = _calculatorBill4[5],
          vat = _calculatorBill4[6],
          myServFee = _calculatorBill4[7],
          stripeServFee = _calculatorBill4[8],
          total = _calculatorBill4[9];

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
          _calculatorBill6 = _slicedToArray(_calculatorBill5, 10),
          work_date = _calculatorBill6[0],
          start = _calculatorBill6[1],
          finish = _calculatorBill6[2],
          salary = _calculatorBill6[3],
          differenceTime = _calculatorBill6[4],
          price = _calculatorBill6[5],
          vat = _calculatorBill6[6],
          myServFee = _calculatorBill6[7],
          stripeServFee = _calculatorBill6[8],
          total = _calculatorBill6[9];

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
      }, "\u203B\u65E2\u5B9A\u306E\u624B\u6570\u6599\u304C\u767A\u751F\u3057\u307E\u3059\u3002")), this.props.auth.role_id == _config__WEBPACK_IMPORTED_MODULE_2__["default"].ROLE_USER.employer && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "statistical"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "session-statistical myServFee"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "head"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u30B5\u30FC\u30D3\u30B9\u5229\u7528\u6599")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-value"
      }, myServFee, "\uFFE5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
        console.log("vào finish rồi");
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
      console.log("render head chat");
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
      console.log({
        message: message,
        style: style,
        attachment: attachment
      });

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
        /// là nếu token hết hạn thì phải refesh 
        // sau đó chưa dispacth ngay mà send chat đã. rồi dispatch 1 lần
        var user = this.props.user,
            instance = this,
            dataRefesh = false;
        var diff = (new Date().getTime() - new Date(user.tokens.period).getTime()) / 1000;

        if (diff >= user.tokens.expire) {
          /// fetch new token
          dataRefesh = {
            userId: user.id,
            refesh: user.tokens.tokenRefesh,
            detect: this.props.client
          };
        }

        var messageSendToChannel = message;
        var channelSend = this.props.userChat.find(function (channel) {
          return channel.isActive == true;
        });
        var channelId = channelSend.id;
        var tokenAccess = user.tokens.tokenAccess;
        var detect = this.props.client;
        Object(_library_service_js__WEBPACK_IMPORTED_MODULE_8__["sendMessageToChannel"])(messageSendToChannel, style, attachment, channelId, tokenAccess, detect, instance, dataRefesh);
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
      console.log(file);
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

      var channelId = channelSend.id;
      var tokenAccess = user.tokens.tokenAccess;
      var detect = _this.props.client;
      Object(_library_service_js__WEBPACK_IMPORTED_MODULE_8__["sendTypingMessageToChannel"])(channelId, tokenAccess, detect);
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
      }, userTyping.first_name && userTyping.last_name + " が入力しています "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
      console.log("render sidebar");
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
      console.log("render lại Chat");
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
    URL: "http://babysitter.trust-growth.co.jp"
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
/*! exports provided: getAccessTokenByRefesh, resfeshTokenIfExpire, socketInitialConnect, caller, sendMessageToChannel, sendTypingMessageToChannel, saveBlobToServer, listenScrollMessage, listenReadMessageNewUser, sendBookingUpdate, calculatorBill, calculatorFeeStripe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccessTokenByRefesh", function() { return getAccessTokenByRefesh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resfeshTokenIfExpire", function() { return resfeshTokenIfExpire; });
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
  console.log("getAccessTokenByRefesh");

  var data = _objectSpread({
    userId: userId,
    refesh: refesh
  }, detect),
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
    console.log("setime out " + parseInt(response.data.expire) * 1000);
    setTimeout(function () {
      window.location.href = _config__WEBPACK_IMPORTED_MODULE_0__["default"].SERVER_PHP.URL;
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
    var data = _objectSpread({
      access: dataFetchChannel.auth.tokens.tokenAccess
    }, dataFetchChannel.detect);

    return fetchChannelMessage(data);
  }).then(function (dataChannel) {
    if (!dataChannel) {
      alert("ログインセッションが正しくありません。 再度ログインするか、管理者に連絡してください");
      return false;
    }

    var hasAdminChannel = false;

    if (dataChannel.length) {
      for (var iChannel = 0; iChannel < dataChannel.length; iChannel++) {
        var channelName = dataChannel[iChannel].channelName;

        if (channelName.match('SINGLE-([0-9 -]*)-1')) {
          hasAdminChannel = true;
        }
      }
    }

    if (!hasAdminChannel) {
      return getChannelAdmin(_objectSpread({
        userId: userId,
        refesh: refesh
      }, detect), tokensUser.tokenAccess);
    }

    return dataChannel;
  }).then(function (dataChannel) {
    if (dataChannel) {
      instanceComponent.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_1__["setterChannels"])(dataChannel));
    }
  })["catch"](function (error) {
    alert("ログインセッションが正しくありません。 再度ログインするか、管理者に連絡してください");
    return false;
  });
}
function resfeshTokenIfExpire(auth, instanceChat) {
  console.log(auth, "auth in resfeshTokenIfExpire");
  var diff = (new Date().getTime() - new Date(auth.tokens.period).getTime()) / 1000;

  if (diff >= auth.tokens.expire) {
    /// fetch new token
    var dataRefesh = {
      userId: auth.id,
      refesh: auth.tokens.tokenRefesh,
      detect: this.props.client
    };
    console.log(dataRefesh, "refesh token vì hết hạn refesh token vì hết hạn refesh token vì hết hạn refesh token vì hết hạn refesh token vì hết hạn refesh token vì hết hạn refesh token vì hết hạn refesh token vì hết hạn refesh token vì hết hạn ");
    resfeshTokenExpire(dataRefesh, instanceChat);
  }
}
function socketInitialConnect(socketIOClient, instanceApp) {
  socket = socketIOClient(_config__WEBPACK_IMPORTED_MODULE_0__["default"].SERVER.ASSET());
  var ApplicationDom = document.getElementById("Application");
  socket.on('connect', function () {
    ApplicationDom && ApplicationDom.classList.remove("connect-socket-error"); //// set config

    socketListenner(socket, instanceApp);
    instanceApp.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_1__["setterSocket"])(socket));
    console.log("socket connect nè socketListenner");
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
  console.log(id, channelInfor);
  openStream().then(function (stream) {
    globalStream = stream;
    playStream('id-peer-local', stream); /// fetch peerjs of user in channel

    return getPeerUserChannel(channelInfor, user, client);
  })["catch"](function (error) {
    console.log("caller");
  });
}
function sendMessageToChannel(message, style, attachment, channelId, access, detect, instanceComponent, dataRefesh) {
  console.log({
    message: message,
    channelId: channelId,
    access: access,
    detect: detect,
    instanceComponent: instanceComponent,
    dataRefesh: dataRefesh
  }, "before sendMessageToChannel");

  if (!dataRefesh) {
    socket.emit(EVENT.SEND_MESSAGE, _objectSpread({
      message: message,
      style: style,
      attachment: attachment,
      channelId: channelId,
      access: access
    }, detect)); /// 

    instanceComponent.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_1__["addMessage"])({
      type: true,
      read: true,
      content: message,
      style: style,
      attachment: attachment
    }));
    return false;
  }

  console.log(dataRefesh, "refesh token trước khi send chat vì hết hạn"); /// đóng băng phần input textarea nhập chat 
  //// userId : user._id, refesh : user.tokens.tokenRefesh, detect: this.props.client 

  var userId = dataRefesh.userId,
      refesh = dataRefesh.refesh,
      detect = dataRefesh.detect;

  var dataFetch = _objectSpread({
    userId: userId,
    refesh: refesh
  }, detect);

  fetch(_config__WEBPACK_IMPORTED_MODULE_0__["default"].SERVER.ASSET() + '/api/refesh', {
    method: 'POST',
    body: JSON.stringify(dataFetch),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function (res) {
    return res.json();
  }).then(function (response) {
    console.log(response, "/api/refesh");

    if (response.code != 200) {
      throw new Error("token refesh không đúng");
    }

    var tokensUser = {
      expire: response.data.expire,
      period: response.data.period,
      tokenAccess: response.data.tokenAccess,
      tokenRefesh: response.data.tokenRefesh
    };

    var userLogin = _objectSpread(_objectSpread({}, response.data.user), {}, {
      tokens: tokensUser
    });

    localStorage.setItem('user', JSON.stringify(userLogin));
    access = userLogin.tokens.tokenAccess;
    socket.emit(EVENT.SEND_MESSAGE, _objectSpread({
      message: message,
      style: style,
      attachment: attachment,
      channelId: channelId,
      access: access
    }, detect));
    instanceComponent.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_1__["setterUser"])(userLogin));
    instanceComponent.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_1__["addMessage"])({
      type: true,
      read: true,
      content: message,
      style: style,
      attachment: attachment
    }));
  })["catch"](function (error) {
    alert("メッセージの送信に失敗しました。 再度ログインするか、管理者に連絡してください");
    return false;
  });
}
function sendTypingMessageToChannel(channelId, access, detect) {
  socket.emit(EVENT.SEND_TYPING, _objectSpread({
    channelId: channelId,
    access: access
  }, detect));
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
function listenReadMessageNewUser(messages, channelActive) {
  if (!messages || !messages.length) {
    return false;
  }

  var existNoneRead = messages.some(function (message) {
    return !message.read && !message.type;
  });

  if (existNoneRead) {
    console.log(EVENT.READ_MESSAGE_ALL, "listenReadMessageNewUser");
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
  var work_date = booking.work_date,
      start = booking.start,
      finish = booking.finish,
      salary = booking.salary;
  var differenceTime = 0,
      price = 0,
      myServFee = 0,
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
    myServFee = Math.floor(price * 0.2);
    vat = Math.floor((price + myServFee) * 0.1);
    stripeServFee = Math.floor((price + myServFee + vat) * 0.036);
  }

  if (auth.role_id == _config__WEBPACK_IMPORTED_MODULE_0__["default"].ROLE_USER.sitter) {
    total = price - stripeServFee;
  } else if (auth.role_id == _config__WEBPACK_IMPORTED_MODULE_0__["default"].ROLE_USER.employer) {
    total = price + vat + myServFee;
  }

  return [work_date, start, finish, salary, differenceTime, price, vat, myServFee, stripeServFee, total];
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
    var access = data.access,
        browser = data.browser,
        browserMajorVersion = data.browserMajorVersion,
        browserVersion = data.browserVersion,
        os = data.os,
        osVersion = data.osVersion;

    if (!access || !browser || !browserMajorVersion || !browserVersion || !os || !osVersion) {
      throw new Error("遮る");
    }

    return true;
  } catch (error) {
    return false;
  }
}

function fetchChannelMessage(data) {
  console.log(data, "validateFetchChannelMessage");
  var isValid = validateFetchChannelMessage(data);

  if (!isValid) {
    alert("エラーが発生しました。しばらくしてからもう一度お試しください1");
    return false;
  }

  if (typeof ID_VIEW_USER_CHAT != 'undefined' && ID_VIEW_USER_CHAT) {
    data.userIdActiveChannel = ID_VIEW_USER_CHAT;
  }

  return fetch(_config__WEBPACK_IMPORTED_MODULE_0__["default"].SERVER.ASSET() + '/api/channels', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function (res) {
    return res.json();
  }).then(function (response) {
    console.log(response, "/api/channels");

    if (response.code != 200) {
      throw new Error("エラーが発生しました。しばらくしてからもう一度お試しください2");
    }

    return response.data;
  })["catch"](function (error) {
    console.log(error, " have error ");
    return false;
  });
}

function getChannelAdmin(data, access) {
  var userId = data.userId,
      refesh = data.refesh;
  data.localUserId = userId;
  data.referenceUserId = 1;
  data.refesh = refesh;
  data.access = access;
  return fetch(_config__WEBPACK_IMPORTED_MODULE_0__["default"].SERVER.ASSET() + '/api/channel', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function (res) {
    return res.json();
  }).then(function (response) {
    console.log(response, "getChannelAdmin");

    if (response.code != 200) {
      alert("エラーが発生しました。しばらくしてからもう一度お試しください");
    }

    return fetchChannelMessage(data);
  })["catch"](function (error) {
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
    console.log(EVENT.RESPONSE_MESSAGE, data);
    var user = data.user,
        token = data.token,
        message = data.message,
        style = data.style,
        attachment = data.attachment,
        channel = data.channel,
        detect = data.detect;
    var userLocal = JSON.parse(localStorage.getItem('user'));

    if (userLocal && userLocal.id == user && userLocal.tokens.tokenAccess == token) {
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
    var user = data.user,
        token = data.token,
        channel = data.channel;
    var userLocal = JSON.parse(localStorage.getItem('user'));

    if (userLocal && userLocal.id == user && userLocal.tokens.tokenAccess == token) {
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
    var bookings = data.bookings;
    console.log(bookings, EVENT.RESPONSE_USER_GET_BOOKING);
    instanceApp.props.dispatch(Object(_action__WEBPACK_IMPORTED_MODULE_1__["setterBookings"])({
      fetch: true,
      data: bookings
    }));
  });
  socket.on(EVENT.RESPONSE_USER_CHANGE_BOOKING, function (data) {
    console.log(data, EVENT.RESPONSE_USER_CHANGE_BOOKING);
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
      console.log("debug");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9jaGF0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9lbW9qaS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2NoYXQvaGVhZC1pbmZvLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9pbnB1dC1zZW5kLWNoYXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jaGF0L2xpc3QtbWVzc2FnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2NoYXQvbGlzdC11c2VyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9tZXNzYWdlLWNoYXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jaGF0L3NpZGViYXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbi90eXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvQ2hhdC9Cb29raW5nLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoYXQvQm9va2luZ0Vycm9yLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoYXQvQm9va2luZ0ZpbmlzaC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0L0Jvb2tpbmdMb2FkaW5nLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoYXQvQm9va2luZ01vZGFsQ29uZmlybS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0L0Jvb2tpbmdNb2RhbFNldHRpbmcuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvQ2hhdC9Cb29raW5nTm9uZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0L0J0bkJvb2tpbmdNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0L0Vtb2ppLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoYXQvSGVhZEluZm8uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvQ2hhdC9JbnB1dFNlbmRDaGF0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoYXQvTGlzdEVtb2ppLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoYXQvTGlzdE1lc3NhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvQ2hhdC9MaXN0VXNlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0L01lc3NhZ2VDaGF0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoYXQvTWVzc2FnZUNoYXRUeXBpbmcuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvQ2hhdC9TaWRlQmFyQ2hhdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0L1VzZXJDaGF0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoYXQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb25maWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWJyYXJ5L3NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlci9ib29raW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2VyL2RldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlci9zb2NrZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIvdXNlci1jaGF0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2NoYXQvY2hhdC5zY3NzP2FjNTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9lbW9qaS5zY3NzPzMxMTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9oZWFkLWluZm8uc2Nzcz84MzE5Iiwid2VicGFjazovLy8uL3NyYy9zY3NzL2NoYXQvaW5wdXQtc2VuZC1jaGF0LnNjc3M/NjdlMCIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jaGF0L2xpc3QtbWVzc2FnZS5zY3NzPzY4YTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9saXN0LXVzZXIuc2Nzcz9iNWQ3Iiwid2VicGFjazovLy8uL3NyYy9zY3NzL2NoYXQvbWVzc2FnZS1jaGF0LnNjc3M/N2NmZCIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jaGF0L3NpZGViYXIuc2Nzcz8yYTkzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2luZGV4LnNjc3M/ODc2NiIsIndlYnBhY2s6Ly8vd3MgKGlnbm9yZWQpIl0sIm5hbWVzIjpbInNldHRlclNvY2tldCIsInNvY2tldCIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiVFlQRSIsIlNPQ0NLRVQiLCJTRVRfU09DS0VUX0lPIiwicGF5bG9hZCIsInNldHRlclVzZXIiLCJ1c2VyIiwiVVNFUiIsIlNFVFRFUl9VU0VSIiwiZmV0Y2hlZCIsInNldHRlckNoYW5uZWxzIiwiY2hhbm5lbHMiLCJDSEFOTkVMIiwiU0VUVEVSX0NIQU5ORUwiLCJhZGRNZXNzYWdlIiwibWVzc2FnZSIsIkFERF9NRVNTQUdFIiwiYWRkTWVzc2FnZVNlbmRUb01lIiwiQUREX01FU1NBR0VfU0VORF9UT19NRSIsImNoYW5nZUNoYW5uZWxBY3RpdmUiLCJjaGFubmVsTmFtZSIsIlNFVF9BQ1RJVkUiLCJhZGRVc2VyT25saW5lIiwiaWQiLCJBRERfVVNFUl9PTkxJTkUiLCJyZW1vdmVVc2VyT25saW5lIiwiUkVNT1ZFX1VTRVJfT05MSU5FIiwicmVhZEFsbE1lc3NhZ2VDaGFubmVsQWN0aXZlIiwiUkVBRF9BTExfTUVTU0FHRV9DSEFOTkVMX0FDVElWRSIsInNldHRlckJvb2tpbmdzIiwiYm9va2luZ3MiLCJCT09LSU5HIiwiU0VUVEVSX0JPT0tJTkciLCJjaGFuZ2VCb29raW5nIiwiYm9va2luZyIsIkNIQU5HRV9CT09LSU5HIiwiSE9NRSIsIkNIQU5HRV9MQVlPVVRTIiwiQ0hBTkdFX1RIRU1FIiwiQ0hBVCIsIkNIQU5HRV9VU0VSX0NIQVRfREVGQVVMVCIsIkNPTkZJRyIsIlNFVFRFUl9TRU5EX1BFRVIiLCJBcHAiLCJwcm9wcyIsInN0YXRlIiwic2VuZFVzZXJPbmxpbmUiLCJKU09OIiwic3RyaW5naWZ5IiwiY2xpZW50IiwiaW5zdGFuY2VBcHAiLCJzb2NrZXRJbml0aWFsQ29ubmVjdCIsInNvY2tldElPQ2xpZW50IiwiRVZFTlQiLCJDT05GSUdfRVZFTlQiLCJhdXRoIiwic2V0U3RhdGUiLCJlbWl0IiwiVVNFUl9PTkxJTkUiLCJwZWVyIiwiYWNjZXNzIiwidG9rZW5zIiwidG9rZW5BY2Nlc3MiLCJVU0VSX0dFVF9CT09LSU5HIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwidXNlcnMiLCJ1c2VyQ2hhdCIsImNvbm5lY3QiLCJCb29raW5nIiwiZGF0YSIsIm1hcCIsIkJvb2tpbmdFcnJvciIsIkJvb2tpbmdGaW5pc2giLCJjYWxjdWxhdG9yQmlsbCIsIndvcmtfZGF0ZSIsInN0YXJ0IiwiZmluaXNoIiwic2FsYXJ5IiwiZGlmZmVyZW5jZVRpbWUiLCJwcmljZSIsInZhdCIsIm15U2VydkZlZSIsInN0cmlwZVNlcnZGZWUiLCJ0b3RhbCIsInJvbGVfaWQiLCJST0xFX1VTRVIiLCJzaXR0ZXIiLCJlbXBsb3llciIsImNvbnZlcnRhdGlvbnMiLCJCb29raW5nTG9hZGluZyIsIkJvb2tpbmdNb2RhbENvbmZpcm0iLCJjYW5jZWxBY2NlcHQiLCIkIiwibW9kYWwiLCJlc2NhcGVDbG9zZSIsImNsaWNrQ2xvc2UiLCJzaG93Q2xvc2UiLCJmaW5hbEFjY2VwdCIsImNoYW5uZWxBY3RpdmUiLCJmaW5kIiwiY2hhbm5lbCIsImlzQWN0aXZlIiwiYm9va2luZ1VwZGF0ZSIsImJvb2tpbmdfaWQiLCJzaXR0ZXJfYWNjZXB0Iiwic3RhdHVzIiwiZW1wbG95ZXJfYWNjZXB0IiwidXNlcklkIiwic2VuZEJvb2tpbmdVcGRhdGUiLCJjbG9zZSIsImRhdGVwaWNrZXJGYWN0b3J5IiwiZGF0ZXBpY2tlckpBRmFjdG9yeSIsIkJvb2tpbmdNb2RhbFNldHRpbmciLCJzaXR0ZXJBY2NlcHRCaWxsIiwiZW1wbG95ZXJBY2NlcHRCaWxsIiwiX2luc3RhbmNlIiwic2VsZWN0b3JUaW1lU3RhcnQiLCJzZWxlY3RvclRpbWVGaW5pc2giLCJzZWxlY3RvckRhdGVwaWNrZXIiLCJ0aW1lcGlja2VyIiwib24iLCJzdGFydENoYW5nZSIsInZhbCIsImZpbmlzaENoYW5nZSIsImRhdGVwaWNrZXIiLCJkYXRlRm9ybWF0Iiwib25TZWxlY3QiLCJkYXRlVGV4dCIsImluc3QiLCJ1cGRhdGUiLCJkaXNwYXRjaCIsImJvb2tpbmdQcm9wcyIsImlzRWRpdCIsImNsYXNzQnRuU2l0dGVyIiwidGV4dEJ0blNpdHRlciIsImNsaWNrQnRuU2l0dGVyIiwiY2xhc3NCdG5FbXBsb3llciIsInRleHRCdG5FbXBsb3llciIsImNsaWNrQnRuRW1wbG95ZXIiLCJCb29raW5nTm9uZSIsIkJ0bkJvb2tpbmdNb2RhbCIsImNob29zZU9yZGVyIiwiZmV0Y2giLCJjaGFubmVsQWN0aXZlQ2hhdCIsInVzZXJBY3RpdmUiLCJlbXBsb3llcl9pZCIsInNpdHRlcl9pZCIsIkVtb2ppIiwiYWRkSWNvbklucHV0Q2hhdCIsImV2ZW50IiwiaW5wdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29udGVudCIsInZhbHVlIiwic3ltYm9sIiwiSGVhZEluZm8iLCJzaWRlYmFyIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImxlbmd0aCIsIm1lc3NhZ2VzIiwic3R5bGUiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJ0ZXh0T25saW5lIiwib25saW5lIiwiaHJlZlVzZXIiLCJST1VURV9WSUVXX1NJVFRFUiIsIlJPVVRFX1ZJRVdfRU1QTE9ZRVIiLCJTRVJWRVJfUEhQIiwiVVJMIiwiYXZhdGFyIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsIklucHV0U2VuZENoYXQiLCJzdWJtaXRNZXNzYWdlQ2hhdCIsImF0dGFjaG1lbnQiLCJlbW9qaUNoYXQiLCJjb25maWciLCJFTU9KSVMiLCJmaWx0ZXIiLCJlbW9qaSIsInRyaW0iLCJpbnN0YW5jZSIsImRhdGFSZWZlc2giLCJkaWZmIiwiRGF0ZSIsImdldFRpbWUiLCJwZXJpb2QiLCJleHBpcmUiLCJyZWZlc2giLCJ0b2tlblJlZmVzaCIsImRldGVjdCIsIm1lc3NhZ2VTZW5kVG9DaGFubmVsIiwiY2hhbm5lbFNlbmQiLCJjaGFubmVsSWQiLCJzZW5kTWVzc2FnZVRvQ2hhbm5lbCIsImhhbmRsZVNlbmRFbW9qaVN1Ym1pdCIsImhhbmRsZVNlbmRNZXNzYWdlU3VibWl0IiwidXJsQXR0YWNobWVudCIsImltYWdlc0RvbSIsImltYWdlcyIsImluZGV4X2ltYWdlX3NlbmQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInB1c2giLCJ1cmwiLCJnZXRBdHRyaWJ1dGUiLCJ0aW1lIiwiaW5uZXJIVE1MIiwiaGFuZGxlU2VuZE1lc3NhZ2VEb3duIiwia2V5Q29kZSIsInNoaWZ0S2V5IiwidGFyZ2V0Iiwic2VuZENoYXQiLCJ3b3JkcyIsInNwbGl0Iiwid29yZExhc3Rlc3QiLCJlbW9qaXNDYWxsIiwiaXRlbSIsInNpZ24iLCJsYXN0SW5kZXgiLCJsYXN0SW5kZXhPZiIsInN1YnN0cmluZyIsImhhbmRsZVNlbmRNZXNzYWdlVXAiLCJpbWFnZUZpbGVDYWxsYmFjayIsImltZ0xvYWRpbmciLCJ3aWR0aCIsIndyYXBwZXJJbWFnZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvbmNsaWNrIiwicmVtb3ZlIiwiYXBwZW5kQ2hpbGQiLCJyZXRyaWV2ZUltYWdlIiwiZmlsZSIsImNhbGxiYWNrIiwic2F2ZUJsb2JUb1NlcnZlciIsImltZyIsIkltYWdlIiwib25sb2FkIiwiVVJMT2JqIiwid2luZG93Iiwid2Via2l0VVJMIiwic3JjIiwiY3JlYXRlT2JqZWN0VVJMIiwiZXJyb3IiLCJyZXRyaWV2ZUZpbGUiLCJyZXRyaWV2ZUltYWdlRnJvbUNsaXBib2FyZEFzQmxvYiIsInBhc3RlRXZlbnQiLCJjbGlwYm9hcmREYXRhIiwidW5kZWZpbmVkIiwiaXRlbXMiLCJpIiwiaW5kZXhPZiIsImdldEFzRmlsZSIsInNob3dMaXN0RW1vamkiLCJlbW9qaXMiLCJhZGQiLCJoYW5kbGVTZW5kQ2hhdENsaWNrIiwic2VuZFR5cGluZ01lc3NhZ2VUb0NoYW5uZWwiLCJjaG9vc2VGaWxlIiwiY2xpY2siLCJzYXZlRmlsZSIsImZpbGVzIiwiYWNjZXB0IiwiZXhlYyIsIm5hbWUiLCJhbGVydCIsImJpbmQiLCJzdXAiLCJhZGRFdmVudExpc3RlbmVyIiwiZG9tU2Nyb2xsIiwiZG9tV3JpdGVyIiwic2Nyb2xsSGVpZ2h0IiwibGlzdGVuUmVhZE1lc3NhZ2VOZXdVc2VyIiwic2Nyb2xsVG9wIiwib25lIiwiTGlzdEVtb2ppIiwiTGlzdE1lc3NhZ2UiLCJsc3RNZXNzYWdlIiwibGlzdGVuU2Nyb2xsTWVzc2FnZSIsImtleSIsIkxpc3RVc2VyIiwiY29udmVyc2F0aW9ucyIsIk1lc3NhZ2VDaGF0IiwibXlpbmZvIiwidXNlckluZm8iLCJ0eXBlTWVzc2FnZSIsIlRJTUVfRElFX0ZJTEUiLCJhdHRhY2hFbGVtZW50IiwiaW5kZXgiLCJyZWFkIiwiTWVzc2FnZUNoYXRUeXBpbmciLCJ0b1VzZXIiLCJjaGFubmVsSW5mb3IiLCJ1c2VyVHlwaW5nIiwiU2lkZUJhckNoYXQiLCJpbmZvciIsIlVzZXJDaGF0IiwiY2hhbmdlQWN0aXZlVXNlciIsImUiLCJjbGFzc0FjdGl2ZU9ubGluZSIsImNsYXNzQWN0aXZlTWVzc2FnZSIsInNsaWNlIiwibGFzdEl0ZW0iLCJtdW5iZXJOb25lUmVhZCIsIkNoYXQiLCJpbnN0YW5jZUNoYXQiLCJUT0tFTl9SRUZFU0hfRE9NIiwiZ2V0QWNjZXNzVG9rZW5CeVJlZmVzaCIsImxvY2FsIiwibG9jYWxfaXAiLCJsb2NhbF9wb3J0IiwicGVlcl9wb3J0IiwiU0VSVkVSIiwiUE9SVCIsIkRPTUFJTiIsIklQIiwiUEVFUl9QT1JUIiwiUFJPVE9DT0wiLCJBU1NFVCIsInBvcnRfdXJsIiwicHJvdG9jb2wiLCJhZG1pbiIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJSZWR1Y2VyIiwic3Vic2NyaWJlIiwiZ2V0U3RhdGUiLCJTdG9yYWdlIiwiUmVhY3RET00iLCJyZW5kZXIiLCJnbG9iYWxTdHJlYW0iLCJzZXRUaW1lb3V0IiwiaW5zdGFuY2VDb21wb25lbnQiLCJ0b2tlbnNVc2VyIiwibWV0aG9kIiwiYm9keSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwianNvbiIsInJlc3BvbnNlIiwiY29kZSIsIkVycm9yIiwicGFyc2VJbnQiLCJsb2NhdGlvbiIsImhyZWYiLCJ1c2VyTG9naW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZGF0YUZldGNoQ2hhbm5lbCIsImZldGNoQ2hhbm5lbE1lc3NhZ2UiLCJkYXRhQ2hhbm5lbCIsImhhc0FkbWluQ2hhbm5lbCIsImlDaGFubmVsIiwibWF0Y2giLCJnZXRDaGFubmVsQWRtaW4iLCJyZXNmZXNoVG9rZW5JZkV4cGlyZSIsInJlc2Zlc2hUb2tlbkV4cGlyZSIsIkFwcGxpY2F0aW9uRG9tIiwic29ja2V0TGlzdGVubmVyIiwicmVwbGFjZSIsImNhbGxlciIsIm9wZW5TdHJlYW0iLCJzdHJlYW0iLCJwbGF5U3RyZWFtIiwiZ2V0UGVlclVzZXJDaGFubmVsIiwiU0VORF9NRVNTQUdFIiwiZGF0YUZldGNoIiwiU0VORF9UWVBJTkciLCJTSVpFX0xJTUlUIiwic2l6ZSIsImhhbmRsZUVycm9yVXBsb2FkRmlsZSIsImRhdGFGaWxlIiwiZm9ybSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiYWpheCIsImVuY3R5cGUiLCJjYWNoZSIsImNvbnRlbnRUeXBlIiwicHJvY2Vzc0RhdGEiLCJzdWNjZXNzIiwicmVXcml0ZVVybCIsInNldEF0dHJpYnV0ZSIsInR5cGVGaWxlIiwiZmlsZV9uYW1lIiwiZXh0ZW50aW9uVHlwZSIsImdldFR5cGVGaWxlIiwiaW5uZXJIZWlnaHQiLCJleGlzdE5vbmVSZWFkIiwic29tZSIsIlJFQURfTUVTU0FHRV9BTEwiLCJ1c2VyTG9jYWwiLCJwYXJzZSIsImdldEl0ZW0iLCJVU0VSX0NIQU5HRV9CT09LSU5HIiwiZkhvdXIiLCJmTWludXRlIiwic0hvdXIiLCJzTWludXRlIiwiZGF0ZVRpbWVGaW5pc2giLCJkYXRlVGltZVN0YXJ0IiwiTWF0aCIsImZsb29yIiwiY2FsY3VsYXRvckZlZVN0cmlwZSIsImFtb3VudCIsImN1cnJlbmN5IiwiZmVlcyIsIlVTRCIsIlBlcmNlbnQiLCJGaXhlZCIsIkdCUCIsIkVVUiIsIkNBRCIsIkFVRCIsIk5PSyIsIkRLSyIsIlNFSyIsIkpQWSIsIk1YTiIsIkRFRkFVTFRfUEVSQ0VOVF9TVFJJUEUiLCJfZmVlIiwiZmVlc1N0cmlwZSIsInBhcnNlRmxvYXQiLCJmZWUiLCJ0b0ZpeGVkIiwiZmlsZW5hbWUiLCJ2YWxpZGF0ZUZldGNoQ2hhbm5lbE1lc3NhZ2UiLCJicm93c2VyIiwiYnJvd3Nlck1ham9yVmVyc2lvbiIsImJyb3dzZXJWZXJzaW9uIiwib3MiLCJvc1ZlcnNpb24iLCJpc1ZhbGlkIiwiSURfVklFV19VU0VSX0NIQVQiLCJ1c2VySWRBY3RpdmVDaGFubmVsIiwibG9jYWxVc2VySWQiLCJyZWZlcmVuY2VVc2VySWQiLCJVU0VSX09OTElORV9OT1RJIiwiVVNFUl9PRkZMSU5FX05PVEkiLCJSRVNQT05TRV9NRVNTQUdFIiwidG9rZW4iLCJSRVNQT05TRV9UWVBJTkciLCJ0aW1lb3V0VHlwaW5nIiwiY2xlYXJUaW1lb3V0IiwiZG9tVHlwaW5nIiwiRFVQTElDQVRJT05fVEFCIiwiUkVBRF9NRVNTQUdFX0FMTF9SRVNQT05TRSIsIlJFU1BPTlNFX1VTRVJfR0VUX0JPT0tJTkciLCJSRVNQT05TRV9VU0VSX0NIQU5HRV9CT09LSU5HIiwibWVzc2FnZURhdGEiLCJSRVNQT05TRV9VU0VSX0NIQU5HRV9CT09LSU5HX0VSUk9SIiwidGV4dCIsImFjdGlvbiIsInJlbG9hZCIsImRhdGFCb29raW5nIiwiZGV0ZWN0Q2xpZW50IiwidW5rbm93biIsIm5WZXIiLCJuYXZpZ2F0b3IiLCJhcHBWZXJzaW9uIiwibkFndCIsInVzZXJBZ2VudCIsImFwcE5hbWUiLCJ2ZXJzaW9uIiwibWFqb3JWZXJzaW9uIiwibmFtZU9mZnNldCIsInZlck9mZnNldCIsIml4IiwidG9Mb3dlckNhc2UiLCJ0b1VwcGVyQ2FzZSIsImlzTmFOIiwiY2xpZW50U3RyaW5ncyIsInMiLCJyIiwiY3MiLCJ0ZXN0IiwidG9TdHJpbmciLCJEZXRlY3RDbGllbnRSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiU29ja2V0UmVkdWNlciIsIkF1dGgiLCJ1c2VyQ2hhdERlZmF1bHQiLCJpc0NoYW5nZWQiLCJuZXdTdGF0ZSIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDdkpBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0E7QUFDQSxjQUFjLFFBQVMsZUFBZSxpQ0FBaUMsK0ZBQStGLEdBQUcsY0FBYywwQkFBMEIsNEZBQTRGLEdBQUcsY0FBYyxvQ0FBb0MsdUZBQXVGLEdBQUcsY0FBYyx1Q0FBdUMsNEZBQTRGLEdBQUcsY0FBYyw2Q0FBNkMsdUdBQXVHLEdBQUcscUJBQXFCLDBFQUEwRSw2RUFBNkUsd0VBQXdFLHlFQUF5RSxxRUFBcUUsR0FBRyx3QkFBd0Isc0JBQXNCLG1CQUFtQixHQUFHLDRCQUE0QixnQkFBZ0IsbUJBQW1CLG1CQUFtQixjQUFjLG1CQUFtQix1QkFBdUIscUJBQXFCLEdBQUc7QUFDaDJDO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0E7QUFDQSxjQUFjLFFBQVMsZUFBZSxpQ0FBaUMsK0ZBQStGLEdBQUcsY0FBYywwQkFBMEIsNEZBQTRGLEdBQUcsY0FBYyxvQ0FBb0MsdUZBQXVGLEdBQUcsY0FBYyx1Q0FBdUMsNEZBQTRGLEdBQUcsY0FBYyw2Q0FBNkMsdUdBQXVHLEdBQUcseUJBQXlCLHVCQUF1QixjQUFjLGVBQWUsa0JBQWtCLDhCQUE4Qix3QkFBd0IsMkJBQTJCLGVBQWUsdUJBQXVCLGNBQWMsR0FBRywrQkFBK0IsZ0JBQWdCLG1CQUFtQixtQkFBbUIsY0FBYyxtQkFBbUIsdUJBQXVCLHFCQUFxQixHQUFHLG9DQUFvQywyQkFBMkIsOEJBQThCLHlCQUF5QixHQUFHLDhCQUE4QixzQkFBc0Isa0JBQWtCLGlCQUFpQixlQUFlLGdCQUFnQixlQUFlLEdBQUcsc0JBQXNCLGdCQUFnQixpQkFBaUIsZ0JBQWdCLHVCQUF1QixtQkFBbUIsb0JBQW9CLHNCQUFzQixxREFBcUQseUJBQXlCLHlCQUF5Qix3Q0FBd0MsbUJBQW1CLEdBQUc7QUFDbHNEO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0E7QUFDQSxjQUFjLFFBQVMsZUFBZSxpQ0FBaUMsK0ZBQStGLEdBQUcsY0FBYywwQkFBMEIsNEZBQTRGLEdBQUcsY0FBYyxvQ0FBb0MsdUZBQXVGLEdBQUcsY0FBYyx1Q0FBdUMsNEZBQTRGLEdBQUcsY0FBYyw2Q0FBNkMsdUdBQXVHLEdBQUcsMENBQTBDLHVCQUF1Qix1QkFBdUIsMkJBQTJCLHFDQUFxQyxxQkFBcUIsR0FBRyx3REFBd0QsdUJBQXVCLGFBQWEsbUJBQW1CLGVBQWUsY0FBYyxnQkFBZ0IsaUJBQWlCLG9CQUFvQixxQkFBcUIscUJBQXFCLHVCQUF1QiwyQkFBMkIsOEJBQThCLHdDQUF3QyxxQ0FBcUMsbUNBQW1DLG9DQUFvQyxnQ0FBZ0MsR0FBRyw0REFBNEQsZ0JBQWdCLGlCQUFpQixvQkFBb0IscUJBQXFCLEdBQUcscURBQXFELG1CQUFtQiw4QkFBOEIsbUJBQW1CLEdBQUcsMkRBQTJELG1CQUFtQix3QkFBd0IscUJBQXFCLDRCQUE0QixtQkFBbUIsMEJBQTBCLEdBQUcsa0VBQWtFLG1CQUFtQixvQkFBb0IsbUJBQW1CLHdCQUF3QixxQkFBcUIsNEJBQTRCLEdBQUcsNkVBQTZFLG1CQUFtQixHQUFHO0FBQzlvRTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRztBQUNBO0FBQ0EsY0FBYyxRQUFTLHNCQUFzQixjQUFjLGlDQUFpQywrRkFBK0YsR0FBRyxjQUFjLDBCQUEwQiw0RkFBNEYsR0FBRyxjQUFjLG9DQUFvQyx1RkFBdUYsR0FBRyxjQUFjLHVDQUF1Qyw0RkFBNEYsR0FBRyxjQUFjLDZDQUE2Qyx1R0FBdUcsR0FBRyw4QkFBOEIsOEJBQThCLHNCQUFzQix1QkFBdUIsOEJBQThCLEdBQUcsdUNBQXVDLDJCQUEyQixxQkFBcUIsc0JBQXNCLHVCQUF1QixpQkFBaUIsdUJBQXVCLDhCQUE4Qix3QkFBd0IsOEJBQThCLG9CQUFvQiwwQkFBMEIsY0FBYywwQkFBMEIsNkJBQTZCLEdBQUcsNkNBQTZDLDBCQUEwQixtQkFBbUIsR0FBRywwREFBMEQsbUJBQW1CLEdBQUcsa0NBQWtDLHVCQUF1QixnQkFBZ0IsaUJBQWlCLG9CQUFvQixtQkFBbUIsR0FBRyxrREFBa0QsY0FBYyxHQUFHLGtEQUFrRCxlQUFlLEdBQUcsOENBQThDLGVBQWUsR0FBRyw4Q0FBOEMsMEJBQTBCLGVBQWUsZ0JBQWdCLEdBQUcsK0NBQStDLGdCQUFnQixrQkFBa0IsZUFBZSxHQUFHLHlEQUF5RCxzQkFBc0IscUJBQXFCLDBCQUEwQix1QkFBdUIsR0FBRywrREFBK0QsdUJBQXVCLGFBQWEsZUFBZSxvQkFBb0IsZ0JBQWdCLGlCQUFpQix1QkFBdUIsMEJBQTBCLDJCQUEyQixvQkFBb0Isc0JBQXNCLHFEQUFxRCx5QkFBeUIseUJBQXlCLHdDQUF3QyxHQUFHLG1FQUFtRSxpQkFBaUIsR0FBRyxxRUFBcUUsMkJBQTJCLDhCQUE4Qix5QkFBeUIsR0FBRywrQ0FBK0MsaUJBQWlCLGlCQUFpQixHQUFHO0FBQzMxRjtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRztBQUNBO0FBQ0EsY0FBYyxRQUFTLGVBQWUsaUNBQWlDLCtGQUErRixHQUFHLGNBQWMsMEJBQTBCLDRGQUE0RixHQUFHLGNBQWMsb0NBQW9DLHVGQUF1RixHQUFHLGNBQWMsdUNBQXVDLDRGQUE0RixHQUFHLGNBQWMsNkNBQTZDLHVHQUF1RyxHQUFHLDJCQUEyQixnQkFBZ0IsZUFBZSxtQ0FBbUMscUJBQXFCLEdBQUcsaURBQWlELHVCQUF1QixrQkFBa0Isa0JBQWtCLHVCQUF1QixnREFBZ0QscUNBQXFDLDZCQUE2QixHQUFHLHVEQUF1RCxnQkFBZ0IsbUJBQW1CLG1CQUFtQixjQUFjLG1CQUFtQix1QkFBdUIscUJBQXFCLEdBQUcsb0VBQW9FLGVBQWUsOEJBQThCLEdBQUcsMEVBQTBFLHdCQUF3Qix5REFBeUQsMkJBQTJCLEdBQUcsaUVBQWlFLGVBQWUsOEJBQThCLEdBQUcsdUVBQXVFLHdCQUF3QixzREFBc0QsMkJBQTJCLEdBQUcsK0RBQStELGVBQWUsOEJBQThCLEdBQUcscUVBQXFFLHdCQUF3QixvREFBb0QsMkJBQTJCLEdBQUcsZ0VBQWdFLGVBQWUsOEJBQThCLEdBQUcsc0VBQXNFLHdCQUF3QixxREFBcUQsMkJBQTJCLEdBQUcsa0JBQWtCLDBCQUEwQixvQkFBb0IsR0FBRyx5QkFBeUIsd0JBQXdCLGtCQUFrQixpQkFBaUIsR0FBRyxnQ0FBZ0MsOEJBQThCLHdFQUF3RSxnRUFBZ0UsdUJBQXVCLDBCQUEwQixnQkFBZ0Isc0JBQXNCLGVBQWUsR0FBRyw2Q0FBNkMsbUNBQW1DLDJCQUEyQixHQUFHLDZDQUE2QyxtQ0FBbUMsMkJBQTJCLEdBQUcsNkNBQTZDLG1DQUFtQywyQkFBMkIsR0FBRywrQ0FBK0MsUUFBUSx5Q0FBeUMsS0FBSyxTQUFTLDBDQUEwQyxLQUFLLFNBQVMseUNBQXlDLEtBQUssR0FBRyw2Q0FBNkMsNkJBQTZCLGlCQUFpQixLQUFLLEdBQUcsNkNBQTZDLDZCQUE2QiwrQkFBK0IsS0FBSyxtREFBbUQsb0JBQW9CLEtBQUssR0FBRztBQUN6ckg7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUyxlQUFlLGlDQUFpQywrRkFBK0YsR0FBRyxjQUFjLDBCQUEwQiw0RkFBNEYsR0FBRyxjQUFjLG9DQUFvQyx1RkFBdUYsR0FBRyxjQUFjLHVDQUF1Qyw0RkFBNEYsR0FBRyxjQUFjLDZDQUE2Qyx1R0FBdUcsR0FBRyxnQ0FBZ0MsdUJBQXVCLEdBQUcsbURBQW1ELHVCQUF1QixnQkFBZ0IsdUJBQXVCLHFCQUFxQixnQkFBZ0Isb0JBQW9CLG1CQUFtQix1QkFBdUIsOEJBQThCLG1CQUFtQixHQUFHLDJDQUEyQyxxQkFBcUIsdUJBQXVCLGlCQUFpQixvQkFBb0IsR0FBRywwREFBMEQsOEJBQThCLEdBQUcsZ0VBQWdFLDBCQUEwQixHQUFHLHNFQUFzRSw4QkFBOEIsR0FBRyx5REFBeUQsdUJBQXVCLGFBQWEsbUJBQW1CLGVBQWUsZ0JBQWdCLGlCQUFpQixvQkFBb0IscUJBQXFCLGNBQWMscUJBQXFCLHVCQUF1QiwyQkFBMkIsOEJBQThCLHdDQUF3QyxxQ0FBcUMsbUNBQW1DLG9DQUFvQyxnQ0FBZ0MsR0FBRywrREFBK0QsbUJBQW1CLHVCQUF1Qix1QkFBdUIsV0FBVyxjQUFjLGVBQWUsZ0JBQWdCLGlCQUFpQix1QkFBdUIscUJBQXFCLDhCQUE4Qix3Q0FBd0MscUNBQXFDLG1DQUFtQyxvQ0FBb0MsZ0NBQWdDLEdBQUcsNkRBQTZELGdCQUFnQixpQkFBaUIsb0JBQW9CLHFCQUFxQixHQUFHLHNEQUFzRCxtQkFBbUIsd0JBQXdCLG1CQUFtQixHQUFHLDREQUE0RCxtQkFBbUIsd0JBQXdCLHFCQUFxQiw0QkFBNEIsR0FBRyxvRUFBb0UsbUJBQW1CLHdCQUF3QixxQkFBcUIsNEJBQTRCLEdBQUcsK0NBQStDLDREQUE0RCxnQ0FBZ0MsS0FBSyx3REFBd0Qsa0JBQWtCLHVCQUF1QixpQkFBaUIseUJBQXlCLEtBQUssR0FBRztBQUNwdkc7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUyxlQUFlLGlDQUFpQywrRkFBK0YsR0FBRyxjQUFjLDBCQUEwQiw0RkFBNEYsR0FBRyxjQUFjLG9DQUFvQyx1RkFBdUYsR0FBRyxjQUFjLHVDQUF1Qyw0RkFBNEYsR0FBRyxjQUFjLDZDQUE2Qyx1R0FBdUcsR0FBRyxpQkFBaUIsdUJBQXVCLHdCQUF3QixHQUFHLHVCQUF1Qix1QkFBdUIsYUFBYSxjQUFjLEdBQUcsNkJBQTZCLHFCQUFxQixHQUFHLGlDQUFpQyxnQkFBZ0IsbUJBQW1CLG1CQUFtQixjQUFjLG1CQUFtQix1QkFBdUIscUJBQXFCLEdBQUcsZ0RBQWdELGtCQUFrQixtQkFBbUIsdUJBQXVCLGVBQWUsOEJBQThCLHVCQUF1Qiw4QkFBOEIsY0FBYyx3Q0FBd0MscUNBQXFDLG1DQUFtQyxvQ0FBb0MsZ0NBQWdDLEdBQUcscURBQXFELG1CQUFtQixHQUFHLHNFQUFzRSxtQkFBbUIsaUNBQWlDLEdBQUcsNkNBQTZDLGdCQUFnQixtQkFBbUIsbUJBQW1CLGNBQWMsbUJBQW1CLHVCQUF1QixxQkFBcUIsR0FBRyxxREFBcUQsNkJBQTZCLEdBQUcsb0VBQW9FLDBFQUEwRSw2RUFBNkUsd0VBQXdFLHlFQUF5RSxxRUFBcUUsR0FBRyxvREFBb0Qsc0JBQXNCLEdBQUcsK0NBQStDLG9CQUFvQixxQkFBcUIsY0FBYyx1QkFBdUIscUJBQXFCLGdCQUFnQixHQUFHLG1EQUFtRCxnQkFBZ0IsR0FBRyx3REFBd0QsdUJBQXVCLEdBQUcsdUVBQXVFLHNCQUFzQixHQUFHLCtEQUErRCx1QkFBdUIsR0FBRyxtRkFBbUYsaUJBQWlCLDBCQUEwQixxQkFBcUIsdUJBQXVCLEdBQUcsdUZBQXVGLGdCQUFnQixpQkFBaUIsR0FBRyw2R0FBNkcsdUJBQXVCLFlBQVksY0FBYyw4QkFBOEIsbUJBQW1CLHVCQUF1QixtQkFBbUIsOEJBQThCLEdBQUcsK0dBQStHLG9CQUFvQixHQUFHLCtEQUErRCxrQkFBa0IsZ0NBQWdDLEdBQUcsOERBQThELHFCQUFxQixrQkFBa0Isd0JBQXdCLDBCQUEwQiwwQkFBMEIsMEVBQTBFLDZFQUE2RSx3RUFBd0UseUVBQXlFLHFFQUFxRSxHQUFHLG9FQUFvRSx1Q0FBdUMsb0JBQW9CLG9CQUFvQixHQUFHLDZEQUE2RCxzQkFBc0IsdUNBQXVDLEdBQUcsb0VBQW9FLG9CQUFvQixHQUFHO0FBQ3JvSjtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRztBQUNBO0FBQ0EsY0FBYyxRQUFTLGVBQWUsaUNBQWlDLCtGQUErRixHQUFHLGNBQWMsMEJBQTBCLDRGQUE0RixHQUFHLGNBQWMsb0NBQW9DLHVGQUF1RixHQUFHLGNBQWMsdUNBQXVDLDRGQUE0RixHQUFHLGNBQWMsNkNBQTZDLHVHQUF1RyxHQUFHLDJCQUEyQix1QkFBdUIsZ0JBQWdCLGVBQWUsZ0RBQWdELHFDQUFxQyw2QkFBNkIsR0FBRyw4Q0FBOEMsZUFBZSw4QkFBOEIsR0FBRyxvREFBb0Qsd0JBQXdCLHlEQUF5RCwyQkFBMkIsR0FBRywyQ0FBMkMsZUFBZSw4QkFBOEIsR0FBRyxpREFBaUQsd0JBQXdCLHNEQUFzRCwyQkFBMkIsR0FBRyx5Q0FBeUMsZUFBZSw4QkFBOEIsR0FBRywrQ0FBK0Msd0JBQXdCLG9EQUFvRCwyQkFBMkIsR0FBRywwQ0FBMEMsZUFBZSw4QkFBOEIsR0FBRyxnREFBZ0Qsd0JBQXdCLHFEQUFxRCwyQkFBMkIsR0FBRyw2QkFBNkIsMkJBQTJCLEdBQUcsYUFBYSx1QkFBdUIsMkJBQTJCLHFDQUFxQyxxQkFBcUIsR0FBRyxpQ0FBaUMsMEJBQTBCLDJCQUEyQixpQkFBaUIsY0FBYyxxQkFBcUIsdUJBQXVCLDJCQUEyQix1QkFBdUIsZ0JBQWdCLGlCQUFpQixHQUFHLHVDQUF1QyxtQkFBbUIsdUJBQXVCLHVCQUF1QixhQUFhLGNBQWMsZUFBZSxnQkFBZ0IsdUJBQXVCLCtCQUErQixHQUFHLCtDQUErQywrQkFBK0IsR0FBRyxxQ0FBcUMsb0JBQW9CLHFCQUFxQixHQUFHLHlCQUF5Qix3QkFBd0IscUJBQXFCLDRCQUE0QixvQkFBb0IsMEJBQTBCLDJCQUEyQixrQkFBa0IsbUJBQW1CLEdBQUcsK0NBQStDLDZCQUE2QixpQkFBaUIsS0FBSyxHQUFHLDZDQUE2Qyw2QkFBNkIsa0JBQWtCLEtBQUssc0RBQXNELGdCQUFnQiwwREFBMEQsdURBQXVELHFEQUFxRCxzREFBc0Qsa0RBQWtELEtBQUssZUFBZSxvQkFBb0IsS0FBSyx1Q0FBdUMsc0JBQXNCLHVCQUF1QixLQUFLLDJCQUEyQixvQkFBb0IsS0FBSyxHQUFHO0FBQ2huSDtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsY0FBYyxRQUFTLGVBQWUsaUNBQWlDLCtGQUErRixHQUFHLGNBQWMsMEJBQTBCLDRGQUE0RixHQUFHLGNBQWMsb0NBQW9DLHVGQUF1RixHQUFHLGNBQWMsdUNBQXVDLDRGQUE0RixHQUFHLGNBQWMsNkNBQTZDLHVHQUF1RyxHQUFHLDRDQUE0QywyQkFBMkIsR0FBRyxZQUFZLDBCQUEwQixxQ0FBcUMsR0FBRyxhQUFhLDZCQUE2QixHQUFHLHFCQUFxQixxQ0FBcUMsR0FBRyxjQUFjLDhCQUE4QixHQUFHLGNBQWMsOEJBQThCLEdBQUcsa0JBQWtCLGtDQUFrQyxHQUFHLG1CQUFtQixtQ0FBbUMsR0FBRyxhQUFhLG9DQUFvQyw2QkFBNkIsR0FBRyxvQkFBb0IsMkNBQTJDLG9DQUFvQyxHQUFHLGFBQWEsa0NBQWtDLEdBQUcsaUJBQWlCLGtDQUFrQyxHQUFHLGdCQUFnQix5Q0FBeUMsR0FBRyxnQkFBZ0IseUNBQXlDLEdBQUcsaUJBQWlCLDBDQUEwQyxHQUFHLGtCQUFrQixvQ0FBb0MsR0FBRyxnQkFBZ0IsMENBQTBDLEdBQUcsbUJBQW1CLDZDQUE2QyxHQUFHLG1CQUFtQixxQ0FBcUMsR0FBRywwRUFBMEUsZ0NBQWdDLEdBQUcsZ0JBQWdCLGdDQUFnQyxHQUFHLGlCQUFpQixnQ0FBZ0MsR0FBRyxrQkFBa0IsZ0NBQWdDLEdBQUcsa0JBQWtCLGdDQUFnQyxHQUFHLG9CQUFvQixnQ0FBZ0MsR0FBRyxnQkFBZ0IsZ0NBQWdDLEdBQUcscUJBQXFCLGdDQUFnQyxHQUFHLGlCQUFpQixnQ0FBZ0MsR0FBRyxrQkFBa0IsdUJBQXVCLEdBQUcsaUJBQWlCLHNCQUFzQixHQUFHLGdCQUFnQixxQkFBcUIsR0FBRyw0QkFBNEIsMkJBQTJCLEdBQUcsY0FBYyxzQkFBc0IsdUJBQXVCLEdBQUcscUJBQXFCLGtDQUFrQyxHQUFHLGFBQWEseUNBQXlDLEdBQUcsaUJBQWlCLDZDQUE2QyxHQUFHLG1CQUFtQiwrQ0FBK0MsR0FBRyxvQkFBb0IsZ0RBQWdELEdBQUcsa0JBQWtCLDhDQUE4QyxHQUFHLHFCQUFxQixtQkFBbUIsR0FBRyxzQkFBc0IsbUJBQW1CLEdBQUcsd0JBQXdCLG1CQUFtQixHQUFHLDZCQUE2QixtQkFBbUIsR0FBRyx3QkFBd0IsbUJBQW1CLEdBQUcsc0JBQXNCLG1CQUFtQixHQUFHLDRCQUE0QixtQkFBbUIsR0FBRyxzQkFBc0IsbUJBQW1CLEdBQUcsc0JBQXNCLG1CQUFtQixHQUFHLHVCQUF1QixtQkFBbUIsR0FBRyw2QkFBNkIsbUJBQW1CLEdBQUcsc0JBQXNCLG1CQUFtQixHQUFHLHdCQUF3QixtQkFBbUIsR0FBRyx1QkFBdUIsbUJBQW1CLEdBQUcsd0JBQXdCLG1CQUFtQixHQUFHLDZCQUE2QixtQkFBbUIsR0FBRyx1QkFBdUIsbUJBQW1CLEdBQUcsdUJBQXVCLGdCQUFnQixHQUFHLHVCQUF1QixnQkFBZ0IsR0FBRyxzQkFBc0IsbUJBQW1CLEdBQUcsMkJBQTJCLG1CQUFtQixHQUFHLG9DQUFvQyxtQkFBbUIsR0FBRyxpQ0FBaUMsbUJBQW1CLEdBQUcsc0NBQXNDLG1CQUFtQixHQUFHLCtCQUErQixtQkFBbUIsR0FBRyxvQ0FBb0MsbUJBQW1CLEdBQUcsNEJBQTRCLG1CQUFtQixHQUFHLGlDQUFpQyxtQkFBbUIsR0FBRywrQkFBK0IsbUJBQW1CLEdBQUcsb0NBQW9DLG1CQUFtQixHQUFHLCtCQUErQixtQkFBbUIsR0FBRyxvQ0FBb0MsbUJBQW1CLEdBQUcsOEJBQThCLG1CQUFtQixHQUFHLG1DQUFtQyxtQkFBbUIsR0FBRywrQkFBK0IsbUJBQW1CLEdBQUcsb0NBQW9DLG1CQUFtQixHQUFHLCtCQUErQixtQkFBbUIsR0FBRyxvQ0FBb0MsbUJBQW1CLEdBQUcsOEJBQThCLG1CQUFtQixHQUFHLG1DQUFtQyxtQkFBbUIsR0FBRywrQkFBK0IsbUJBQW1CLEdBQUcsb0NBQW9DLG1CQUFtQixHQUFHLHlCQUF5QixtQkFBbUIsR0FBRyx3QkFBd0IsbUJBQW1CLEdBQUcseUJBQXlCLG1CQUFtQixHQUFHLHlCQUF5QixtQkFBbUIsR0FBRyxzQkFBc0IsbUJBQW1CLEdBQUcseUJBQXlCLG1CQUFtQixHQUFHLDJCQUEyQixtQkFBbUIsR0FBRyxzQkFBc0IsbUJBQW1CLEdBQUcsdUJBQXVCLG1CQUFtQixHQUFHLHdCQUF3QixtQkFBbUIsR0FBRyx1QkFBdUIsMEJBQTBCLEdBQUcsd0JBQXdCLDBCQUEwQixHQUFHLDBCQUEwQiwwQkFBMEIsR0FBRywrQkFBK0IsMEJBQTBCLEdBQUcsMEJBQTBCLDBCQUEwQixHQUFHLHdCQUF3QiwwQkFBMEIsR0FBRyw4QkFBOEIsMEJBQTBCLEdBQUcsd0JBQXdCLDBCQUEwQixHQUFHLHdCQUF3QiwwQkFBMEIsR0FBRyx5QkFBeUIsMEJBQTBCLEdBQUcsK0JBQStCLDBCQUEwQixHQUFHLHdCQUF3QiwwQkFBMEIsR0FBRywwQkFBMEIsMEJBQTBCLEdBQUcseUJBQXlCLDBCQUEwQixHQUFHLDBCQUEwQiwwQkFBMEIsR0FBRywrQkFBK0IsMEJBQTBCLEdBQUcseUJBQXlCLDBCQUEwQixHQUFHLHlCQUF5Qix1QkFBdUIsR0FBRyx5QkFBeUIsdUJBQXVCLEdBQUcsd0JBQXdCLDBCQUEwQixHQUFHLDZCQUE2QiwwQkFBMEIsR0FBRyxzQ0FBc0MsMEJBQTBCLEdBQUcsbUNBQW1DLDBCQUEwQixHQUFHLHdDQUF3QywwQkFBMEIsR0FBRyxpQ0FBaUMsMEJBQTBCLEdBQUcsc0NBQXNDLDBCQUEwQixHQUFHLDhCQUE4QiwwQkFBMEIsR0FBRyxtQ0FBbUMsMEJBQTBCLEdBQUcsaUNBQWlDLDBCQUEwQixHQUFHLHNDQUFzQywwQkFBMEIsR0FBRyxpQ0FBaUMsMEJBQTBCLEdBQUcsc0NBQXNDLDBCQUEwQixHQUFHLGdDQUFnQywwQkFBMEIsR0FBRyxxQ0FBcUMsMEJBQTBCLEdBQUcsaUNBQWlDLDBCQUEwQixHQUFHLHNDQUFzQywwQkFBMEIsR0FBRyxpQ0FBaUMsMEJBQTBCLEdBQUcsc0NBQXNDLDBCQUEwQixHQUFHLGdDQUFnQywwQkFBMEIsR0FBRyxxQ0FBcUMsMEJBQTBCLEdBQUcsaUNBQWlDLDBCQUEwQixHQUFHLHNDQUFzQywwQkFBMEIsR0FBRywyQkFBMkIsMEJBQTBCLEdBQUcsMEJBQTBCLDBCQUEwQixHQUFHLDJCQUEyQiwwQkFBMEIsR0FBRywyQkFBMkIsMEJBQTBCLEdBQUcsd0JBQXdCLDBCQUEwQixHQUFHLDJCQUEyQiwwQkFBMEIsR0FBRyw2QkFBNkIsMEJBQTBCLEdBQUcsd0JBQXdCLDBCQUEwQixHQUFHLHlCQUF5QiwwQkFBMEIsR0FBRywwQkFBMEIsMEJBQTBCLEdBQUcsbUJBQW1CLDhCQUE4QixHQUFHLG9CQUFvQiw4QkFBOEIsR0FBRyxzQkFBc0IsOEJBQThCLEdBQUcsMkJBQTJCLDhCQUE4QixHQUFHLHNCQUFzQiw4QkFBOEIsR0FBRyxvQkFBb0IsOEJBQThCLEdBQUcsMEJBQTBCLDhCQUE4QixHQUFHLG9CQUFvQiw4QkFBOEIsR0FBRyxvQkFBb0IsOEJBQThCLEdBQUcscUJBQXFCLDhCQUE4QixHQUFHLDJCQUEyQiw4QkFBOEIsR0FBRyxvQkFBb0IsOEJBQThCLEdBQUcsc0JBQXNCLDhCQUE4QixHQUFHLHFCQUFxQiw4QkFBOEIsR0FBRyxzQkFBc0IsOEJBQThCLEdBQUcsMkJBQTJCLDhCQUE4QixHQUFHLHFCQUFxQiw4QkFBOEIsR0FBRyxxQkFBcUIsMkJBQTJCLEdBQUcscUJBQXFCLDJCQUEyQixHQUFHLG9CQUFvQiw4QkFBOEIsR0FBRyx5QkFBeUIsOEJBQThCLEdBQUcsa0NBQWtDLDhCQUE4QixHQUFHLCtCQUErQiw4QkFBOEIsR0FBRyxvQ0FBb0MsOEJBQThCLEdBQUcsNkJBQTZCLDhCQUE4QixHQUFHLGtDQUFrQyw4QkFBOEIsR0FBRywwQkFBMEIsOEJBQThCLEdBQUcsK0JBQStCLDhCQUE4QixHQUFHLDZCQUE2Qiw4QkFBOEIsR0FBRyxrQ0FBa0MsOEJBQThCLEdBQUcsNkJBQTZCLDhCQUE4QixHQUFHLGtDQUFrQyw4QkFBOEIsR0FBRyw0QkFBNEIsOEJBQThCLEdBQUcsaUNBQWlDLDhCQUE4QixHQUFHLDZCQUE2Qiw4QkFBOEIsR0FBRyxrQ0FBa0MsOEJBQThCLEdBQUcsNkJBQTZCLDhCQUE4QixHQUFHLGtDQUFrQyw4QkFBOEIsR0FBRyw0QkFBNEIsOEJBQThCLEdBQUcsaUNBQWlDLDhCQUE4QixHQUFHLDZCQUE2Qiw4QkFBOEIsR0FBRyxrQ0FBa0MsOEJBQThCLEdBQUcsdUJBQXVCLDhCQUE4QixHQUFHLHNCQUFzQiw4QkFBOEIsR0FBRyx1QkFBdUIsOEJBQThCLEdBQUcsdUJBQXVCLDhCQUE4QixHQUFHLG9CQUFvQiw4QkFBOEIsR0FBRyx1QkFBdUIsOEJBQThCLEdBQUcseUJBQXlCLDhCQUE4QixHQUFHLG9CQUFvQiw4QkFBOEIsR0FBRyxxQkFBcUIsOEJBQThCLEdBQUcsc0JBQXNCLDhCQUE4QixHQUFHLFdBQVcsY0FBYyxHQUFHLFdBQVcsY0FBYyxHQUFHLFdBQVcsY0FBYyxHQUFHLFdBQVcsY0FBYyxHQUFHLFdBQVcsY0FBYyxHQUFHLFdBQVcsY0FBYyxHQUFHLFdBQVcsY0FBYyxHQUFHLFdBQVcsY0FBYyxHQUFHLFdBQVcsY0FBYyxHQUFHLFdBQVcsY0FBYyxHQUFHLFdBQVcsY0FBYyxHQUFHLFlBQVksZUFBZSxHQUFHLGNBQWMsdUJBQXVCLEdBQUcsY0FBYyx3QkFBd0IsR0FBRyxnQkFBZ0Isb0JBQW9CLEdBQUcsY0FBYyx3QkFBd0IsR0FBRyxjQUFjLHVCQUF1QixHQUFHLGVBQWUsc0JBQXNCLEdBQUcsZUFBZSx3QkFBd0IsR0FBRyxlQUFlLHVCQUF1QixHQUFHLGVBQWUsb0JBQW9CLEdBQUcsZUFBZSxvQkFBb0IsR0FBRyxxQkFBcUIscUJBQXFCLEdBQUcsNkRBQTZELDhCQUE4QixrQkFBa0IsR0FBRyxZQUFZLHVCQUF1Qiw2QkFBNkIsd0JBQXdCLGtDQUFrQyxHQUFHLG9CQUFvQixtQkFBbUIsR0FBRyxpQkFBaUIsc0JBQXNCLEdBQUcsd0JBQXdCLHdCQUF3QixHQUFHLDZCQUE2Qix1QkFBdUIsV0FBVyxhQUFhLDZCQUE2QixtQkFBbUIsR0FBRyxvQkFBb0IsbUJBQW1CLDhCQUE4QiwwQkFBMEIsR0FBRyw4QkFBOEIsbUJBQW1CLEdBQUcsc0JBQXNCLG1CQUFtQiw4QkFBOEIsMEJBQTBCLEdBQUcsZ0NBQWdDLG1CQUFtQixHQUFHLG9CQUFvQixtQkFBbUIsOEJBQThCLDBCQUEwQixHQUFHLDhCQUE4QixtQkFBbUIsR0FBRyxpQkFBaUIsbUJBQW1CLDhCQUE4QiwwQkFBMEIsR0FBRywyQkFBMkIsbUJBQW1CLEdBQUcsb0JBQW9CLG1CQUFtQiw4QkFBOEIsMEJBQTBCLEdBQUcsOEJBQThCLG1CQUFtQixHQUFHLG1CQUFtQixtQkFBbUIsOEJBQThCLDBCQUEwQixHQUFHLDZCQUE2QixtQkFBbUIsR0FBRyxrQkFBa0IsbUJBQW1CLDhCQUE4QiwwQkFBMEIsR0FBRyw0QkFBNEIsbUJBQW1CLEdBQUcsaUJBQWlCLG1CQUFtQiw4QkFBOEIsMEJBQTBCLEdBQUcsMkJBQTJCLG1CQUFtQixHQUFHLFdBQVcsMkJBQTJCLHdCQUF3QixzQkFBc0IsR0FBRyxlQUFlLDJCQUEyQiw4QkFBOEIsR0FBRyxzQkFBc0IsZ0RBQWdELHdDQUF3QyxHQUFHLG9CQUFvQixzREFBc0QsR0FBRyxrQkFBa0Isd0RBQXdELEdBQUcsa0JBQWtCLHNEQUFzRCxHQUFHLG9CQUFvQixzREFBc0QsR0FBRyxvQkFBb0IsaUNBQWlDLEdBQUcsc0JBQXNCLGlEQUFpRCxHQUFHLG9CQUFvQixpQ0FBaUMsR0FBRyxzQkFBc0IsaURBQWlELEdBQUcsb0JBQW9CLGlDQUFpQyxHQUFHLHNCQUFzQixpREFBaUQsR0FBRyxvQkFBb0IsaUNBQWlDLEdBQUcsc0JBQXNCLGlEQUFpRCxHQUFHLG9EQUFvRCxlQUFlLHlDQUF5QywwQ0FBMEMsOENBQThDLEtBQUssNkJBQTZCLGlCQUFpQixLQUFLLEdBQUcscUJBQXFCLHVDQUF1QyxHQUFHLHNHQUFzRyxVQUFVLGtDQUFrQyxLQUFLLFNBQVMsMkNBQTJDLEtBQUssUUFBUSxrQ0FBa0MsS0FBSyxHQUFHLFVBQVUsMEJBQTBCLDJDQUEyQyxHQUFHLHFCQUFxQixVQUFVLGtDQUFrQyxLQUFLLGNBQWMsaUVBQWlFLEtBQUssd0JBQXdCLGdFQUFnRSxLQUFLLG1CQUFtQixpRUFBaUUsS0FBSyxRQUFRLGtDQUFrQyxLQUFLLEdBQUcsU0FBUyx5QkFBeUIsR0FBRyx1QkFBdUIsVUFBVSxpQkFBaUIsS0FBSyxRQUFRLGlCQUFpQixLQUFLLEdBQUcsV0FBVywyQkFBMkIsR0FBRywyQkFBMkIsVUFBVSxpQkFBaUIsMENBQTBDLEtBQUssUUFBUSxpQkFBaUIsc0NBQXNDLEtBQUssR0FBRyxlQUFlLCtCQUErQixHQUFHLDRCQUE0QixVQUFVLGlCQUFpQix5Q0FBeUMsS0FBSyxRQUFRLGlCQUFpQixzQ0FBc0MsS0FBSyxHQUFHLGdCQUFnQixnQ0FBZ0MsR0FBRyx5QkFBeUIsVUFBVSxpQkFBaUIseUNBQXlDLEtBQUssUUFBUSxpQkFBaUIsc0NBQXNDLEtBQUssR0FBRyxhQUFhLDZCQUE2QixHQUFHLDBCQUEwQixVQUFVLGlCQUFpQixLQUFLLFFBQVEsMkNBQTJDLGlCQUFpQixLQUFLLEdBQUcsY0FBYyw4QkFBOEIsNkJBQTZCLEdBQUcsb0JBQW9CLHdDQUF3QyxHQUFHLDBEQUEwRCxRQUFRLDhCQUE4QixLQUFLLFNBQVMsK0JBQStCLEtBQUssU0FBUyxnQ0FBZ0MsS0FBSyxTQUFTLGdDQUFnQyxLQUFLLFVBQVUsZ0NBQWdDLEtBQUssR0FBRywyQkFBMkIsVUFBVSxpQkFBaUIsMENBQTBDLHNDQUFzQyxLQUFLLFNBQVMsZ0NBQWdDLEtBQUssU0FBUyw4QkFBOEIsS0FBSyxRQUFRLGlCQUFpQiwwQkFBMEIsS0FBSyxHQUFHLGlCQUFpQixpQ0FBaUMsR0FBRyx1R0FBdUcsVUFBVSxpQkFBaUIscUVBQXFFLEtBQUssUUFBUSxpQkFBaUIsc0NBQXNDLEtBQUssR0FBRyxXQUFXLDJCQUEyQixHQUFHLHVCQUF1QixVQUFVLGlCQUFpQix3Q0FBd0MsS0FBSyxTQUFTLGlCQUFpQixLQUFLLEdBQUcsV0FBVywyQkFBMkIsR0FBRyw0QkFBNEIsVUFBVSwwQ0FBMEMsMEJBQTBCLEtBQUssUUFBUSxzQ0FBc0MsS0FBSyxHQUFHLGdCQUFnQixnQ0FBZ0MsR0FBRyxzQkFBc0IsUUFBUSxpQ0FBaUMsMENBQTBDLEtBQUssU0FBUyxrQ0FBa0MsMkNBQTJDLEtBQUssVUFBVSxpQ0FBaUMsMENBQTBDLEtBQUssR0FBRyxvQkFBb0IseUVBQXlFLDRFQUE0RSx1RUFBdUUsd0VBQXdFLG9FQUFvRSxHQUFHLHFCQUFxQix5RUFBeUUsNEVBQTRFLHVFQUF1RSx3RUFBd0Usb0VBQW9FLEdBQUcsb0JBQW9CLHlFQUF5RSw0RUFBNEUsdUVBQXVFLHdFQUF3RSxvRUFBb0UsR0FBRyxvQkFBb0IseUVBQXlFLDRFQUE0RSx1RUFBdUUsd0VBQXdFLG9FQUFvRSxHQUFHLHlCQUF5Qix5RUFBeUUsNEVBQTRFLHVFQUF1RSx3RUFBd0Usb0VBQW9FLEdBQUcsMkJBQTJCLDJHQUEyRyw4R0FBOEcseUdBQXlHLDBHQUEwRyxzR0FBc0csR0FBRywwQkFBMEIseUdBQXlHLDRHQUE0Ryx1R0FBdUcsd0dBQXdHLG9HQUFvRyxHQUFHLHlCQUF5Qix3R0FBd0csMkdBQTJHLHNHQUFzRyx1R0FBdUcsbUdBQW1HLEdBQUcseUJBQXlCLHdHQUF3RywyR0FBMkcsc0dBQXNHLHVHQUF1RyxtR0FBbUcsR0FBRyx5QkFBeUIsNkVBQTZFLGdGQUFnRiwyRUFBMkUsNEVBQTRFLHdFQUF3RSxHQUFHLHdCQUF3Qiw2RUFBNkUsZ0ZBQWdGLDJFQUEyRSw0RUFBNEUsd0VBQXdFLEdBQUcsdUJBQXVCLDZFQUE2RSxnRkFBZ0YsMkVBQTJFLDRFQUE0RSx3RUFBd0UsR0FBRyx1QkFBdUIsNkVBQTZFLGdGQUFnRiwyRUFBMkUsNEVBQTRFLHdFQUF3RSxHQUFHLDRCQUE0Qiw2RUFBNkUsZ0ZBQWdGLDJFQUEyRSw0RUFBNEUsd0VBQXdFLEdBQUcsZ0JBQWdCLGdDQUFnQywwRkFBMEYsa2hCQUFraEIsd0JBQXdCLHVCQUF1QixHQUFHLGVBQWUsMEJBQTBCLGdCQUFnQixpQkFBaUIsdUJBQXVCLDJCQUEyQixvQkFBb0Isc0JBQXNCLEdBQUcsc0JBQXNCLG9CQUFvQiwwQkFBMEIscURBQXFELHVCQUF1Qix5QkFBeUIseUJBQXlCLHdDQUF3Qyx1Q0FBdUMsR0FBRyxrREFBa0QseUJBQXlCLEdBQUcsbURBQW1ELHlCQUF5QixHQUFHLGdEQUFnRCx5QkFBeUIsR0FBRyxvQ0FBb0MseUJBQXlCLEdBQUcsd0RBQXdELHlCQUF5QixHQUFHLHNEQUFzRCx5QkFBeUIsR0FBRyx5Q0FBeUMseUJBQXlCLEdBQUcscUNBQXFDLHlCQUF5QixHQUFHLHdDQUF3Qyx5QkFBeUIsR0FBRyxtREFBbUQseUJBQXlCLEdBQUcsbURBQW1ELHlCQUF5QixHQUFHLDJDQUEyQyx5QkFBeUIsR0FBRyxzQ0FBc0MseUJBQXlCLEdBQUcsc0RBQXNELHlCQUF5QixHQUFHLHNDQUFzQyx5QkFBeUIsR0FBRyxzQ0FBc0MseUJBQXlCLEdBQUcsMENBQTBDLHlCQUF5QixHQUFHLDhDQUE4Qyx5QkFBeUIsR0FBRywwQ0FBMEMseUJBQXlCLEdBQUcsZ0RBQWdELHlCQUF5QixHQUFHLHlDQUF5Qyx5QkFBeUIsR0FBRyxpREFBaUQseUJBQXlCLEdBQUcsbUNBQW1DLHlCQUF5QixHQUFHLGdEQUFnRCx5QkFBeUIsR0FBRywwQ0FBMEMseUJBQXlCLEdBQUcsd0NBQXdDLHlCQUF5QixHQUFHLG1EQUFtRCx5QkFBeUIsR0FBRyxxQ0FBcUMseUJBQXlCLEdBQUcsK0NBQStDLHlCQUF5QixHQUFHLHFDQUFxQyx5QkFBeUIsR0FBRywyQ0FBMkMseUJBQXlCLEdBQUcsbURBQW1ELHlCQUF5QixHQUFHLDhDQUE4Qyx5QkFBeUIsR0FBRyxzREFBc0QseUJBQXlCLEdBQUcsMENBQTBDLHlCQUF5QixHQUFHLGtEQUFrRCx5QkFBeUIsR0FBRyx5Q0FBeUMseUJBQXlCLEdBQUcsaURBQWlELHlCQUF5QixHQUFHLDBDQUEwQyx5QkFBeUIsR0FBRyxrREFBa0QseUJBQXlCLEdBQUcsMkNBQTJDLHlCQUF5QixHQUFHLG1EQUFtRCx5QkFBeUIsR0FBRyw2Q0FBNkMseUJBQXlCLEdBQUcscURBQXFELHlCQUF5QixHQUFHLDJDQUEyQyx5QkFBeUIsR0FBRyxtREFBbUQseUJBQXlCLEdBQUcsMkNBQTJDLHlCQUF5QixHQUFHLG1EQUFtRCx5QkFBeUIsR0FBRywwQ0FBMEMseUJBQXlCLEdBQUcsa0RBQWtELHlCQUF5QixHQUFHLHlDQUF5Qyx5QkFBeUIsR0FBRyxpREFBaUQseUJBQXlCLEdBQUcsNkNBQTZDLHlCQUF5QixHQUFHLHFEQUFxRCx5QkFBeUIsR0FBRyw2Q0FBNkMseUJBQXlCLEdBQUcsMENBQTBDLHlCQUF5QixHQUFHLGtEQUFrRCx5QkFBeUIsR0FBRyx5Q0FBeUMseUJBQXlCLEdBQUcsaURBQWlELHlCQUF5QixHQUFHLDRDQUE0Qyx5QkFBeUIsR0FBRyxvREFBb0QseUJBQXlCLEdBQUcsMENBQTBDLHlCQUF5QixHQUFHLGtEQUFrRCx5QkFBeUIsR0FBRyxpQ0FBaUMseUJBQXlCLEdBQUcsK0NBQStDLHlCQUF5QixHQUFHLHdDQUF3Qyx5QkFBeUIsR0FBRyw2Q0FBNkMseUJBQXlCLEdBQUcsdUNBQXVDLHlCQUF5QixHQUFHLHNDQUFzQyx5QkFBeUIsR0FBRyxnREFBZ0QseUJBQXlCLEdBQUcsb0NBQW9DLHlCQUF5QixHQUFHLG1EQUFtRCx5QkFBeUIsR0FBRyw0Q0FBNEMseUJBQXlCLEdBQUcsNkNBQTZDLHlCQUF5QixHQUFHLG1DQUFtQyx5QkFBeUIsR0FBRyxnREFBZ0QseUJBQXlCLEdBQUcsaURBQWlELHlCQUF5QixHQUFHLGtDQUFrQyx5QkFBeUIsR0FBRyw0Q0FBNEMseUJBQXlCLEdBQUcsc0NBQXNDLHlCQUF5QixHQUFHLDBDQUEwQyx5QkFBeUIsR0FBRyw4Q0FBOEMseUJBQXlCLEdBQUcsK0RBQStELHlCQUF5QixHQUFHLHNEQUFzRCx5QkFBeUIsR0FBRyxrREFBa0QseUJBQXlCLEdBQUcseUNBQXlDLHlCQUF5QixHQUFHLHVDQUF1Qyx5QkFBeUIsR0FBRyxtQ0FBbUMseUJBQXlCLEdBQUcsNkNBQTZDLHlCQUF5QixHQUFHLGlDQUFpQyx5QkFBeUIsR0FBRywrQ0FBK0MseUJBQXlCLEdBQUcseUNBQXlDLHlCQUF5QixHQUFHLDhDQUE4Qyx5QkFBeUIsR0FBRyxzREFBc0QseUJBQXlCLEdBQUcsMENBQTBDLHlCQUF5QixHQUFHLHdDQUF3Qyx5QkFBeUIsR0FBRyw2Q0FBNkMseUJBQXlCLEdBQUcsbUNBQW1DLHlCQUF5QixHQUFHLDBDQUEwQyx5QkFBeUIsR0FBRyx5Q0FBeUMseUJBQXlCLEdBQUcsY0FBYyxvQkFBb0IsV0FBVyxhQUFhLGNBQWMsWUFBWSxnQkFBZ0IsaUJBQWlCLG1CQUFtQixnQkFBZ0Isa0JBQWtCLDJCQUEyQiw0QkFBNEIsMENBQTBDLHVCQUF1QixHQUFHLG1CQUFtQixrQkFBa0IsMEJBQTBCLGlCQUFpQiwyQkFBMkIsMEJBQTBCLEdBQUcsbUJBQW1CLGtDQUFrQyxHQUFHLFlBQVksa0JBQWtCLDJCQUEyQix1QkFBdUIsZUFBZSxxQkFBcUIsMkJBQTJCLGVBQWUscUJBQXFCLHVCQUF1QiwrQkFBK0IsNEJBQTRCLDBCQUEwQiwyQkFBMkIsdUJBQXVCLHNDQUFzQyxtQ0FBbUMsaUNBQWlDLGtDQUFrQyw4QkFBOEIscUJBQXFCLEdBQUcsd0JBQXdCLHVCQUF1QixpQkFBaUIsbUJBQW1CLG1CQUFtQixnQkFBZ0IsaUJBQWlCLHlCQUF5Qiw2QkFBNkIsaUNBQWlDLHVDQUF1QywyQ0FBMkMsMndDQUEyd0MsR0FBRyxvQkFBb0Isa0JBQWtCLG9CQUFvQixhQUFhLGNBQWMsaURBQWlELHVCQUF1Qix1QkFBdUIsMkJBQTJCLGlCQUFpQixHQUFHLHdCQUF3Qix5QkFBeUIsMkJBQTJCLGlCQUFpQixlQUFlLGtCQUFrQiwwQkFBMEIsaUVBQWlFLHlEQUF5RCxHQUFHLHlCQUF5QixtQ0FBbUMsMkJBQTJCLEdBQUcseUJBQXlCLGlDQUFpQyx5QkFBeUIsR0FBRyx5QkFBeUIsbUNBQW1DLDJCQUEyQixHQUFHLHdDQUF3QyxtQkFBbUIscUNBQXFDLEtBQUssU0FBUyxtQ0FBbUMsS0FBSyxHQUFHLDhCQUE4QixtQkFBbUIsNkJBQTZCLHFDQUFxQyxLQUFLLFNBQVMsMkJBQTJCLG1DQUFtQyxLQUFLLEdBQUcsc0JBQXNCLDZCQUE2QixHQUFHLDRCQUE0QixxQkFBcUIsc0JBQXNCLGlCQUFpQixxQkFBcUIsMkJBQTJCLHNEQUFzRCxtREFBbUQsOENBQThDLGtCQUFrQixtQkFBbUIsY0FBYyxHQUFHLHdEQUF3RCxnQkFBZ0IsR0FBRyx5SkFBeUosZ0JBQWdCLEdBQUcseUJBQXlCLGNBQWMsZUFBZSxxQkFBcUIsR0FBRyw2QkFBNkIscUJBQXFCLGdCQUFnQixHQUFHLHVEQUF1RCxnQkFBZ0IsR0FBRyw0QkFBNEIsMkJBQTJCLG9CQUFvQix3QkFBd0IsZ0JBQWdCLHFCQUFxQixjQUFjLEdBQUcsdURBQXVELHFCQUFxQixnQkFBZ0IsR0FBRyxrSEFBa0gsd0JBQXdCLGdCQUFnQixHQUFHLDhHQUE4RyxnQkFBZ0IsR0FBRyxnTEFBZ0wsZ0JBQWdCLG9CQUFvQixHQUFHLGdJQUFnSSx3QkFBd0IsR0FBRywyQkFBMkIsb0JBQW9CLG1CQUFtQix1QkFBdUIsdUJBQXVCLEdBQUcsNENBQTRDLHVCQUF1QixHQUFHLHlEQUF5RCxlQUFlLG1CQUFtQiwwQkFBMEIsd0JBQXdCLHVCQUF1QixpQkFBaUIsR0FBRyxvRUFBb0UsdUJBQXVCLGFBQWEsZUFBZSxtQkFBbUIsb0JBQW9CLGVBQWUsbUJBQW1CLHdDQUF3QyxxQ0FBcUMsbUNBQW1DLG9DQUFvQyxnQ0FBZ0MsR0FBRyx3RUFBd0UsdUJBQXVCLFdBQVcsYUFBYSxZQUFZLGNBQWMsZ0JBQWdCLGlCQUFpQixtQkFBbUIsMkJBQTJCLHVCQUF1QixxQkFBcUIsb0JBQW9CLG1DQUFtQywyQkFBMkIsR0FBRyx1RUFBdUUsdUJBQXVCLFdBQVcsYUFBYSxZQUFZLGNBQWMsZ0JBQWdCLGlCQUFpQixtQkFBbUIsMkJBQTJCLDhCQUE4QixxQkFBcUIsb0JBQW9CLG1DQUFtQyxHQUFHLCtCQUErQixnQkFBZ0IsbUJBQW1CLEdBQUcsb0RBQW9ELG1CQUFtQix1QkFBdUIsbUJBQW1CLEdBQUcsMERBQTBELGdCQUFnQixtQkFBbUIsbUJBQW1CLGNBQWMsbUJBQW1CLHVCQUF1QixxQkFBcUIsR0FBRywwREFBMEQsbUJBQW1CLGdCQUFnQixvQkFBb0Isd0JBQXdCLGVBQWUsMkJBQTJCLEdBQUcsK0RBQStELHdCQUF3QixvQkFBb0IsR0FBRyxnRUFBZ0UsbUJBQW1CLHVCQUF1QixzQ0FBc0MsdUJBQXVCLGdCQUFnQixZQUFZLGFBQWEsaUJBQWlCLEdBQUcsZ0VBQWdFLHVCQUF1QixtQkFBbUIsaUJBQWlCLG9CQUFvQixtQkFBbUIsc0JBQXNCLG9CQUFvQiwyQkFBMkIsR0FBRyx5REFBeUQsb0JBQW9CLEdBQUcsbUNBQW1DLHFCQUFxQixrQ0FBa0MsR0FBRyxtREFBbUQsZ0JBQWdCLG1CQUFtQixHQUFHLHNIQUFzSCxvQkFBb0Isd0JBQXdCLEdBQUcsK0RBQStELHNCQUFzQixHQUFHLHlEQUF5RCx1QkFBdUIsR0FBRywyREFBMkQsdUJBQXVCLEdBQUcsd0VBQXdFLDBCQUEwQixxQkFBcUIsb0JBQW9CLHVCQUF1QiwwQkFBMEIsc0JBQXNCLGlCQUFpQixnQkFBZ0Isd0JBQXdCLDBCQUEwQiwyQkFBMkIsMEpBQTBKLGtKQUFrSiw2SUFBNkksMElBQTBJLGdMQUFnTCxvQkFBb0IsR0FBRyw4RUFBOEUsd0JBQXdCLDhCQUE4QixHQUFHLG9GQUFvRiwyQkFBMkIsOEJBQThCLG1CQUFtQiwyRkFBMkYsbUZBQW1GLEdBQUcsc0tBQXNLLDJGQUEyRixtRkFBbUYsZUFBZSxHQUFHLDBRQUEwUSx5QkFBeUIsa0JBQWtCLEdBQUcsZ0ZBQWdGLHdCQUF3Qiw4QkFBOEIsR0FBRyxzRkFBc0YsMkJBQTJCLDhCQUE4QixtQkFBbUIsMkZBQTJGLG1GQUFtRixHQUFHLDBLQUEwSywyRkFBMkYsbUZBQW1GLGVBQWUsR0FBRyxnUkFBZ1IseUJBQXlCLGtCQUFrQixHQUFHLDRFQUE0RSx3QkFBd0IsOEJBQThCLEdBQUcsa0ZBQWtGLDJCQUEyQiw4QkFBOEIsbUJBQW1CLDJGQUEyRixtRkFBbUYsR0FBRyxrS0FBa0ssMkZBQTJGLG1GQUFtRixlQUFlLEdBQUcsb1FBQW9RLHlCQUF5QixrQkFBa0IsR0FBRyw4RUFBOEUsd0JBQXdCLDhCQUE4QixHQUFHLG9GQUFvRiwyQkFBMkIsOEJBQThCLG1CQUFtQiwyRkFBMkYsbUZBQW1GLEdBQUcsc0tBQXNLLDJGQUEyRixtRkFBbUYsZUFBZSxHQUFHLDBRQUEwUSx5QkFBeUIsa0JBQWtCLEdBQUcsK0NBQStDLDBCQUEwQixrQkFBa0Isb0JBQW9CLEtBQUssMEVBQTBFLGlCQUFpQix5QkFBeUIsS0FBSywwRUFBMEUsaUJBQWlCLEtBQUssR0FBRztBQUM5MCtDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDTyxTQUFTQSxZQUFULENBQXNCQyxNQUF0QixFQUE2QjtBQUNoQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVosRUFBcUIsY0FBckI7QUFDQSxTQUFPO0FBQ0hHLFFBQUksRUFBR0MsNkNBQUksQ0FBQ0MsT0FBTCxDQUFhQyxhQURqQjtBQUVIQyxXQUFPLEVBQUdQO0FBRlAsR0FBUDtBQUlIO0FBQ00sU0FBU1EsVUFBVCxDQUFxQkMsSUFBckIsRUFBMkI7QUFDOUJSLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTyxJQUFaLEVBQW1CLFlBQW5CO0FBQ0EsU0FBTztBQUNITixRQUFJLEVBQUdDLDZDQUFJLENBQUNNLElBQUwsQ0FBVUMsV0FEZDtBQUVISixXQUFPLGtDQUFRRSxJQUFSO0FBQWNHLGFBQU8sRUFBRTtBQUF2QjtBQUZKLEdBQVA7QUFJSDtBQUVNLFNBQVNDLGNBQVQsQ0FBeUJDLFFBQXpCLEVBQW1DO0FBQ3RDYixTQUFPLENBQUNDLEdBQVIsQ0FBWVksUUFBWixFQUF1QixnQkFBdkI7QUFDQSxTQUFPO0FBQ0hYLFFBQUksRUFBR0MsNkNBQUksQ0FBQ1csT0FBTCxDQUFhQyxjQURqQjtBQUVIVCxXQUFPLEVBQUdPO0FBRlAsR0FBUDtBQUlIO0FBRU0sU0FBU0csVUFBVCxDQUFxQkMsT0FBckIsRUFBOEI7QUFDakNqQixTQUFPLENBQUNDLEdBQVIsQ0FBWWdCLE9BQVosRUFBc0IsY0FBdEI7QUFDQSxTQUFPO0FBQ0hmLFFBQUksRUFBR0MsNkNBQUksQ0FBQ1csT0FBTCxDQUFhSSxXQURqQjtBQUVIWixXQUFPLEVBQUdXO0FBRlAsR0FBUDtBQUlIO0FBRU0sU0FBU0Usa0JBQVQsQ0FBNkJGLE9BQTdCLEVBQXNDO0FBQ3pDakIsU0FBTyxDQUFDQyxHQUFSLENBQVlnQixPQUFaLEVBQXNCLHNCQUF0QjtBQUNBLFNBQU87QUFDSGYsUUFBSSxFQUFHQyw2Q0FBSSxDQUFDVyxPQUFMLENBQWFNLHNCQURqQjtBQUVIZCxXQUFPLEVBQUdXO0FBRlAsR0FBUDtBQUlIO0FBR00sU0FBU0ksbUJBQVQsQ0FBOEJDLFdBQTlCLEVBQTJDO0FBQzlDdEIsU0FBTyxDQUFDQyxHQUFSLENBQVlxQixXQUFaLEVBQTBCLHVCQUExQjtBQUNBLFNBQU87QUFDSHBCLFFBQUksRUFBR0MsNkNBQUksQ0FBQ1csT0FBTCxDQUFhUyxVQURqQjtBQUVIakIsV0FBTyxFQUFHZ0I7QUFGUCxHQUFQO0FBSUg7QUFFTSxTQUFTRSxhQUFULENBQXdCQyxFQUF4QixFQUE0QjtBQUMvQnpCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZd0IsRUFBWixFQUFpQixpQkFBakI7QUFDQSxTQUFPO0FBQ0h2QixRQUFJLEVBQUdDLDZDQUFJLENBQUNXLE9BQUwsQ0FBYVksZUFEakI7QUFFSHBCLFdBQU8sRUFBR21CO0FBRlAsR0FBUDtBQUlIO0FBRU0sU0FBU0UsZ0JBQVQsQ0FBMkJGLEVBQTNCLEVBQStCO0FBQ2xDekIsU0FBTyxDQUFDQyxHQUFSLENBQVl3QixFQUFaLEVBQWlCLG9CQUFqQjtBQUNBLFNBQU87QUFDSHZCLFFBQUksRUFBR0MsNkNBQUksQ0FBQ1csT0FBTCxDQUFhYyxrQkFEakI7QUFFSHRCLFdBQU8sRUFBR21CO0FBRlAsR0FBUDtBQUlIO0FBRU0sU0FBU0ksMkJBQVQsR0FBc0M7QUFDekM3QixTQUFPLENBQUNDLEdBQVIsQ0FBWSwrQkFBWjtBQUNBLFNBQU87QUFDSEMsUUFBSSxFQUFHQyw2Q0FBSSxDQUFDVyxPQUFMLENBQWFnQjtBQURqQixHQUFQO0FBR0g7QUFDTSxTQUFTQyxjQUFULENBQXdCQyxRQUF4QixFQUFpQztBQUNwQ2hDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZK0IsUUFBWixFQUFxQixrQkFBckI7QUFDQSxTQUFPO0FBQ0g5QixRQUFJLEVBQUdDLDZDQUFJLENBQUM4QixPQUFMLENBQWFDLGNBRGpCO0FBRUg1QixXQUFPLEVBQUcwQjtBQUZQLEdBQVA7QUFJSDtBQUVNLFNBQVNHLGFBQVQsQ0FBdUJDLE9BQXZCLEVBQStCO0FBQ2xDcEMsU0FBTyxDQUFDQyxHQUFSLENBQVltQyxPQUFaLEVBQW9CLGlCQUFwQjtBQUNBLFNBQU87QUFDSGxDLFFBQUksRUFBR0MsNkNBQUksQ0FBQzhCLE9BQUwsQ0FBYUksY0FEakI7QUFFSC9CLFdBQU8sRUFBRzhCO0FBRlAsR0FBUDtBQUlILEM7Ozs7Ozs7Ozs7OztBQ3JGRDtBQUFBLElBQU1qQyxJQUFJLEdBQUk7QUFDWm1DLE1BQUksRUFBRztBQUNMQyxrQkFBYyxFQUFFLGdCQURYO0FBRUxDLGdCQUFZLEVBQUk7QUFGWCxHQURLO0FBS1pDLE1BQUksRUFBRztBQUNMQyw0QkFBd0IsRUFBRTtBQURyQixHQUxLO0FBUVp0QyxTQUFPLEVBQUc7QUFDUkMsaUJBQWEsRUFBRTtBQURQLEdBUkU7QUFXWkksTUFBSSxFQUFFO0FBQ0pDLGVBQVcsRUFBRTtBQURULEdBWE07QUFjWkksU0FBTyxFQUFFO0FBQ1BDLGtCQUFjLEVBQVUsZ0JBRGpCO0FBRVBHLGVBQVcsRUFBYSxhQUZqQjtBQUdQRSwwQkFBc0IsRUFBRSx3QkFIakI7QUFJUEcsY0FBVSxFQUFjLFlBSmpCO0FBS1BHLG1CQUFlLEVBQVMsaUJBTGpCO0FBTVBFLHNCQUFrQixFQUFNLG9CQU5qQjtBQU9QRSxtQ0FBK0IsRUFBRTtBQVAxQixHQWRHO0FBdUJaYSxRQUFNLEVBQUU7QUFDTkMsb0JBQWdCLEVBQUc7QUFEYixHQXZCSTtBQTBCWlgsU0FBTyxFQUFFO0FBQ1BDLGtCQUFjLEVBQUcsZ0JBRFY7QUFFUEcsa0JBQWMsRUFBRTtBQUZUO0FBMUJHLENBQWQ7QUErQmVsQyxtRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtDQUVBOztBQUNBO0FBQ0E7O0lBRU0wQyxHOzs7OztBQUVGLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxvQkFBYyxFQUFHO0FBRFIsS0FBYjtBQUlBaEQsV0FBTyxDQUFDQyxHQUFSLENBQVlnRCxJQUFJLENBQUNDLFNBQUwsQ0FBZSxNQUFLSixLQUFMLENBQVdLLE1BQTFCLENBQVo7O0FBQ0EsUUFBSUMsV0FBVyxnQ0FBZjs7QUFDQUMsb0ZBQW9CLENBQUNDLHVEQUFELEVBQWlCRixXQUFqQixDQUFwQjtBQVJlO0FBU2xCOzs7O3lDQUVvQjtBQUNqQixVQUFJRyxLQUFLLEdBQUtDLFlBQWQ7O0FBRUEsVUFBSyxDQUFDLEtBQUtULEtBQUwsQ0FBV0MsY0FBakIsRUFBa0M7QUFDOUIsWUFBSSxLQUFLRixLQUFMLENBQVdXLElBQVgsSUFBbUIsS0FBS1gsS0FBTCxDQUFXVyxJQUFYLENBQWdCOUMsT0FBdkMsRUFBZ0Q7QUFFNUMsY0FBSSxLQUFLbUMsS0FBTCxDQUFXL0MsTUFBZixFQUF1QjtBQUVuQixpQkFBSzJELFFBQUwsQ0FBYztBQUFFViw0QkFBYyxFQUFFO0FBQWxCLGFBQWQsRUFBd0MsWUFBVTtBQUM5QyxtQkFBS0YsS0FBTCxDQUFXL0MsTUFBWCxDQUFrQjRELElBQWxCLENBQXVCSixLQUFLLENBQUNLLFdBQTdCLEVBQTBDO0FBQ3RDbkMsa0JBQUUsRUFBTSxLQUFLcUIsS0FBTCxDQUFXVyxJQUFYLENBQWdCaEMsRUFEYztBQUV0Q29DLG9CQUFJLEVBQUksWUFGOEI7QUFHdENDLHNCQUFNLEVBQUUsS0FBS2hCLEtBQUwsQ0FBV1csSUFBWCxDQUFnQk0sTUFBaEIsQ0FBdUJDO0FBSE8sZUFBMUM7QUFLQSxtQkFBS2xCLEtBQUwsQ0FBVy9DLE1BQVgsQ0FBa0I0RCxJQUFsQixDQUF1QkosS0FBSyxDQUFDVSxnQkFBN0IsRUFBK0M7QUFBRXhDLGtCQUFFLEVBQUUsS0FBS3FCLEtBQUwsQ0FBV1csSUFBWCxDQUFnQmhDO0FBQXRCLGVBQS9DO0FBQ0gsYUFQRDtBQVFIO0FBQ0o7QUFDSjtBQUNKOzs7NkJBQ1E7QUFDTHpCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDQSwwQkFDSTtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUE4QixVQUFFLEVBQUM7QUFBakMsc0JBQ0ksMkRBQUMsdURBQUQsT0FESixDQURKO0FBS0g7Ozs7RUF4Q2FpRSwrQzs7QUEyQ2xCLElBQUlDLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ3BCLEtBQUQsRUFBVztBQUM3QixTQUFPO0FBQ0hJLFVBQU0sRUFBRUosS0FBSyxDQUFDSSxNQURYO0FBRUhwRCxVQUFNLEVBQUVnRCxLQUFLLENBQUNoRCxNQUZYO0FBR0gwRCxRQUFJLEVBQUVWLEtBQUssQ0FBQ3FCLEtBSFQ7QUFJSEMsWUFBUSxFQUFFdEIsS0FBSyxDQUFDc0I7QUFKYixHQUFQO0FBTUgsQ0FQRDs7QUFRZUMsMEhBQU8sQ0FBQ0gsZUFBRCxDQUFQLENBQXlCdEIsR0FBekIsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNMEIsTzs7Ozs7Ozs7Ozs7Ozs2QkFFTztBQUFBLFVBQ0N2QyxRQURELEdBQ2MsS0FBS2MsS0FEbkIsQ0FDQ2QsUUFERDtBQUVMLDBCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJLDJEQUFDLHdEQUFELE9BREosZUFFSSwyREFBQywyREFBRCxPQUZKLGVBR0ksMkRBQUMseURBQUQsT0FISixFQU1RQSxRQUFRLENBQUN3QyxJQUFULENBQWNDLEdBQWQsQ0FBbUIsVUFBQXJDLE9BQU8sRUFBSTtBQUUxQixZQUFHQSxPQUFILEVBQVc7QUFDUCw4QkFDSTtBQUFLLGVBQUcsRUFBRUEsT0FBTyxDQUFDWDtBQUFsQiwwQkFDSSwyREFBQyxnRUFBRDtBQUFzQixtQkFBTyxFQUFFVztBQUEvQixZQURKLGVBRUksMkRBQUMsZ0VBQUQ7QUFBcUIsbUJBQU8sRUFBRUE7QUFBOUIsWUFGSixlQUdJLDJEQUFDLDBEQUFEO0FBQWUsbUJBQU8sRUFBRUE7QUFBeEIsWUFISixDQURKO0FBT0g7QUFDSixPQVhELENBTlIsQ0FESjtBQXNCSDs7OztFQTFCaUI4QiwrQzs7QUE0QnRCLElBQUlDLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ3BCLEtBQUQsRUFBVztBQUM3QixTQUFPO0FBQ0hmLFlBQVEsRUFBRWUsS0FBSyxDQUFDWDtBQURiLEdBQVA7QUFHSCxDQUpEOztBQUtla0MsMEhBQU8sQ0FBQ0gsZUFBRCxDQUFQLENBQXlCSSxPQUF6QixDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNBOztJQUVxQkcsWTs7Ozs7Ozs7Ozs7Ozs2QkFFUjtBQUVMLDBCQUNJO0FBQUssVUFBRSxFQUFDLGtCQUFSO0FBQTJCLGlCQUFTLEVBQUM7QUFBckMsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsNEZBRUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsUUFGSixDQURKLGVBS0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBRUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBRyxpQkFBUyxFQUFDLDZCQUFiO0FBQTJDLFlBQUksRUFBQyxHQUFoRDtBQUFvRCxXQUFHLEVBQUM7QUFBeEQsMENBREosQ0FGSixDQUxKLENBREo7QUFjSDs7OztFQWxCcUNSLCtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGMUM7QUFDQTtBQUNBO0FBQ0E7O0lBQ01TLGE7Ozs7Ozs7Ozs7Ozs7NkJBR087QUFBQSx3QkFFbUIsS0FBSzdCLEtBRnhCO0FBQUEsVUFFQ1csSUFGRCxlQUVDQSxJQUZEO0FBQUEsVUFFT3JCLE9BRlAsZUFFT0EsT0FGUDs7QUFJTCxVQUFHLENBQUNBLE9BQUosRUFBWTtBQUNSLGVBQU8sSUFBUDtBQUNIOztBQU5JLDRCQVVtQ3dDLDBFQUFjLENBQUN4QyxPQUFELEVBQVVxQixJQUFWLENBVmpEO0FBQUE7QUFBQSxVQVFDb0IsU0FSRDtBQUFBLFVBUVlDLEtBUlo7QUFBQSxVQVFtQkMsTUFSbkI7QUFBQSxVQVEyQkMsTUFSM0I7QUFBQSxVQVNEQyxjQVRDO0FBQUEsVUFTZUMsS0FUZjtBQUFBLFVBU3NCQyxHQVR0QjtBQUFBLFVBVURDLFNBVkM7QUFBQSxVQVVVQyxhQVZWO0FBQUEsVUFVeUJDLEtBVnpCOztBQWFMLDBCQUNJO0FBQU0sVUFBRSxFQUFHLEtBQUt4QyxLQUFMLENBQVdWLE9BQVgsQ0FBbUJYLEVBQW5CLEdBQXdCLG1CQUFuQztBQUF5RCxpQkFBUyxFQUFDO0FBQW5FLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLDhCQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBRyxpQkFBUyxFQUFDO0FBQWIsUUFESixlQUVJO0FBQU0saUJBQVMsRUFBQztBQUFoQixTQUFnQ29ELFNBQWhDLENBRkosQ0FESixlQUtJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUcsaUJBQVMsRUFBQztBQUFiLFFBREosZUFFSTtBQUFNLGlCQUFTLEVBQUM7QUFBaEIsU0FBaUNDLEtBQWpDLENBRkosQ0FMSixlQVNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUcsaUJBQVMsRUFBQztBQUFiLFFBREosZUFFSTtBQUFNLGlCQUFTLEVBQUM7QUFBaEIsU0FBaUNDLE1BQWpDLENBRkosQ0FUSixDQURKLENBRkosZUFrQkk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBRUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQXNCLG9HQUF0QixDQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FBOEJDLE1BQTlCLFdBRkosQ0FGSixlQU1JO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUFzQixnSEFBdEIsQ0FESixlQUVJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQThCQyxjQUE5QixrQkFGSixDQU5KLGVBV0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQXNCLHlJQUF0QixDQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FBOEJDLEtBQTlCLFdBRkosQ0FYSixDQWxCSixFQW1DUSxLQUFLcEMsS0FBTCxDQUFXVyxJQUFYLENBQWdCOEIsT0FBaEIsSUFBMkI1QywrQ0FBTSxDQUFDNkMsU0FBUCxDQUFpQkMsTUFBNUMsaUJBQ0E7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBRUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQXNCLDhGQUF0QixNQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FBOEJKLGFBQTlCLFdBRkosQ0FGSixlQU1JO0FBQUssaUJBQVMsRUFBQztBQUFmLGdHQU5KLENBcENSLEVBOENRLEtBQUt2QyxLQUFMLENBQVdXLElBQVgsQ0FBZ0I4QixPQUFoQixJQUEyQjVDLCtDQUFNLENBQUM2QyxTQUFQLENBQWlCRSxRQUE1QyxpQkFDQTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFBc0Isc0hBQXRCLENBREosZUFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUE4Qk4sU0FBOUIsV0FGSixDQURKLGVBS0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsNkZBTEosZUFPSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFBc0Isa0hBQXRCLE1BREosZUFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUE4QkQsR0FBOUIsV0FGSixDQVBKLENBL0NSLGVBNERJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHdCQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FBNERHLEtBQTVELFdBRkosQ0FESixDQTVESixDQURKO0FBcUVIOzs7O0VBckZ1QnBCLCtDOztBQXlGNUIsSUFBSUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDcEIsS0FBRCxFQUFXO0FBQzdCLFNBQU87QUFDSFUsUUFBSSxFQUFXVixLQUFLLENBQUNxQixLQURsQjtBQUVIcEMsWUFBUSxFQUFPZSxLQUFLLENBQUNYLE9BRmxCO0FBR0h1RCxpQkFBYSxFQUFFNUMsS0FBSyxDQUFDc0I7QUFIbEIsR0FBUDtBQUtILENBTkQ7O0FBT2VDLDBIQUFPLENBQUNILGVBQUQsQ0FBUCxDQUF5QlEsYUFBekIsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BHQTs7SUFDcUJpQixjOzs7Ozs7Ozs7Ozs7OzZCQUdSO0FBRUwsMEJBQ0k7QUFBSyxVQUFFLEVBQUMsb0JBQVI7QUFBNkIsaUJBQVMsRUFBQztBQUF2QyxzQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZiw0SkFESixlQUVJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUEyQztBQUFLLGlCQUFTLEVBQUM7QUFBZixRQUEzQyxDQUZKLGVBR0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBRUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBRyxpQkFBUyxFQUFDLDZCQUFiO0FBQTJDLFlBQUksRUFBQyxHQUFoRDtBQUFvRCxXQUFHLEVBQUM7QUFBeEQsMENBREosQ0FGSixDQUhKLENBREo7QUFZSDs7OztFQWpCdUMxQiwrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFDTTJCLG1COzs7Ozs7Ozs7Ozs7OztvSEFFRkMsWSxHQUFlLFlBQU07QUFBQSxVQUNYMUQsT0FEVyxHQUNDLE1BQUtVLEtBRE4sQ0FDWFYsT0FEVztBQUVqQjJELG1EQUFDLENBQUMsTUFBSzNELE9BQU8sQ0FBQ1gsRUFBYixHQUFpQixvQkFBbEIsQ0FBRCxDQUF5Q3VFLEtBQXpDLENBQStDO0FBQzNDQyxtQkFBVyxFQUFFLEtBRDhCO0FBRTNDQyxrQkFBVSxFQUFFLEtBRitCO0FBRzNDQyxpQkFBUyxFQUFFO0FBSGdDLE9BQS9DO0FBS0gsSyxRQUNEQyxXLEdBQWMsWUFBTTtBQUFBLGdDQUV1QixNQUFLdEQsS0FBTCxDQUFXVixPQUZsQztBQUFBLFVBRVZYLEVBRlUsdUJBRVZBLEVBRlU7QUFBQSxVQUVOb0QsU0FGTSx1QkFFTkEsU0FGTTtBQUFBLFVBRUtDLEtBRkwsdUJBRUtBLEtBRkw7QUFBQSxVQUVZQyxNQUZaLHVCQUVZQSxNQUZaOztBQUdoQixVQUFJc0IsYUFBYSxHQUFLLE1BQUt2RCxLQUFMLENBQVc2QyxhQUFYLENBQXlCVyxJQUF6QixDQUE4QixVQUFBQyxPQUFPO0FBQUEsZUFBSUEsT0FBTyxDQUFDQyxRQUFaO0FBQUEsT0FBckMsQ0FBdEIsQ0FIZ0IsQ0FJaEI7OztBQUNBLFVBQUlDLGFBQWEsR0FBRztBQUNoQkMsa0JBQVUsRUFBT2pGLEVBREQ7QUFFaEJrRixxQkFBYSxFQUFJLENBRkQ7QUFHaEJDLGNBQU0sRUFBVyxDQUhEO0FBSWhCQyx1QkFBZSxFQUFFLENBSkQ7QUFLaEIvQixhQUFLLEVBQVlBLEtBTEQ7QUFNaEJDLGNBQU0sRUFBV0EsTUFORDtBQU9oQkYsaUJBQVMsRUFBUUEsU0FQRDtBQVFoQmIsbUJBQVcsRUFBTSxNQUFLbEIsS0FBTCxDQUFXVyxJQUFYLENBQWdCTSxNQUFoQixDQUF1QkMsV0FSeEI7QUFTaEI4QyxjQUFNLEVBQVcsTUFBS2hFLEtBQUwsQ0FBV1csSUFBWCxDQUFnQmhDLEVBVGpCO0FBVWhCSCxtQkFBVyxFQUFNK0UsYUFBYSxDQUFDL0U7QUFWZixPQUFwQjtBQVlBeUYsbUZBQWlCLENBQUNOLGFBQUQsQ0FBakI7QUFDQVYsbURBQUMsQ0FBQ0MsS0FBRixDQUFRZ0IsS0FBUjtBQUNILEs7Ozs7OzZCQUVRO0FBQUEsNEJBSW1DcEMsMEVBQWMsQ0FBQyxLQUFLOUIsS0FBTCxDQUFXVixPQUFaLEVBQXFCLEtBQUtVLEtBQUwsQ0FBV1csSUFBaEMsQ0FKakQ7QUFBQTtBQUFBLFVBRUNvQixTQUZEO0FBQUEsVUFFWUMsS0FGWjtBQUFBLFVBRW1CQyxNQUZuQjtBQUFBLFVBRTJCQyxNQUYzQjtBQUFBLFVBR0RDLGNBSEM7QUFBQSxVQUdlQyxLQUhmO0FBQUEsVUFHc0JDLEdBSHRCO0FBQUEsVUFJREMsU0FKQztBQUFBLFVBSVVDLGFBSlY7QUFBQSxVQUl5QkMsS0FKekI7O0FBTUwsMEJBQ0k7QUFBSyxVQUFFLEVBQUcsS0FBS3hDLEtBQUwsQ0FBV1YsT0FBWCxDQUFtQlgsRUFBbkIsR0FBd0Isb0JBQWxDO0FBQXlELGlCQUFTLEVBQUM7QUFBbkUsc0JBRUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsOEJBRkosZUFHSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFHLGlCQUFTLEVBQUM7QUFBYixRQURKLGVBRUk7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLFNBQWdDb0QsU0FBaEMsQ0FGSixDQURKLGVBS0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBRyxpQkFBUyxFQUFDO0FBQWIsUUFESixlQUVJO0FBQU0saUJBQVMsRUFBQztBQUFoQixTQUFpQ0MsS0FBakMsQ0FGSixDQUxKLGVBU0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBRyxpQkFBUyxFQUFDO0FBQWIsUUFESixlQUVJO0FBQU0saUJBQVMsRUFBQztBQUFoQixTQUFpQ0MsTUFBakMsQ0FGSixDQVRKLENBREosQ0FISixlQW1CSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFBc0Isb0dBQXRCLENBREosZUFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUE4QkMsTUFBOUIsV0FGSixDQUZKLGVBTUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQXNCLGdIQUF0QixDQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FBOEJDLGNBQTlCLGtCQUZKLENBTkosZUFXSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFBc0IseUlBQXRCLENBREosZUFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUE4QkMsS0FBOUIsV0FGSixDQVhKLENBbkJKLEVBb0NRLEtBQUtwQyxLQUFMLENBQVdXLElBQVgsQ0FBZ0I4QixPQUFoQixJQUEyQjVDLCtDQUFNLENBQUM2QyxTQUFQLENBQWlCQyxNQUE1QyxpQkFDQTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFBc0IsOEZBQXRCLE1BREosZUFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUE4QkosYUFBOUIsV0FGSixDQURKLGVBS0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsZ0dBTEosQ0FyQ1IsRUE4Q1EsS0FBS3ZDLEtBQUwsQ0FBV1csSUFBWCxDQUFnQjhCLE9BQWhCLElBQTJCNUMsK0NBQU0sQ0FBQzZDLFNBQVAsQ0FBaUJFLFFBQTVDLGlCQUNBO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUFzQixzSEFBdEIsQ0FESixlQUVJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQThCTixTQUE5QixXQUZKLENBREosZUFLSTtBQUFLLGlCQUFTLEVBQUM7QUFBZiw2RkFMSixlQU9JO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUFzQixrSEFBdEIsTUFESixlQUVJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQThCRCxHQUE5QixXQUZKLENBUEosQ0EvQ1IsZUE0REk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsd0JBREosZUFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUE0REcsS0FBNUQsV0FGSixDQURKLGVBS0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsNEdBTEosZUFNSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFFSTtBQUFHLGlCQUFTLEVBQUMsNkJBQWI7QUFBMkMsZUFBTyxFQUFHLEtBQUtRO0FBQTFELDBDQUZKLEVBSVEsS0FBS2hELEtBQUwsQ0FBV1csSUFBWCxDQUFnQjhCLE9BQWhCLElBQTJCNUMsK0NBQU0sQ0FBQzZDLFNBQVAsQ0FBaUJFLFFBQTVDLGlCQUNBO0FBQUcsaUJBQVMsRUFBQywrQkFBYjtBQUE2QyxlQUFPLEVBQUcsS0FBS1U7QUFBNUQsb0NBTFIsQ0FOSixDQTVESixDQURKO0FBZ0ZIOzs7O0VBckg2QmxDLCtDOztBQXlIbEMsSUFBSUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDcEIsS0FBRCxFQUFXO0FBQzdCLFNBQU87QUFDSFUsUUFBSSxFQUFXVixLQUFLLENBQUNxQixLQURsQjtBQUVIdUIsaUJBQWEsRUFBRTVDLEtBQUssQ0FBQ3NCO0FBRmxCLEdBQVA7QUFJSCxDQUxEOztBQU1lQywwSEFBTyxDQUFDSCxlQUFELENBQVAsQ0FBeUIwQixtQkFBekIsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQW9CLHdEQUFpQixDQUFDbEIsNkNBQUQsQ0FBakI7QUFDQW1CLHFGQUFtQixDQUFDbkIsNkNBQUQsQ0FBbkI7O0lBRU1vQixtQjs7Ozs7QUFDRiwrQkFBWXJFLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxVQXFGbkJzRSxnQkFyRm1CLEdBcUZBLFlBQU07QUFBQSw0QkFZakJ4QywwRUFBYyxDQUFDLE1BQUs3QixLQUFOLEVBQWEsTUFBS0QsS0FBTCxDQUFXVyxJQUF4QixDQVpHO0FBQUE7QUFBQSxVQUVqQm9CLFNBRmlCO0FBQUEsVUFHakJDLEtBSGlCO0FBQUEsVUFJakJDLE1BSmlCO0FBQUEsVUFLakJDLE1BTGlCO0FBQUEsVUFNakJDLGNBTmlCO0FBQUEsVUFPakJDLEtBUGlCO0FBQUEsVUFRakJDLEdBUmlCO0FBQUEsVUFTakJDLFNBVGlCO0FBQUEsVUFVakJDLGFBVmlCO0FBQUEsVUFXakJDLEtBWGlCOztBQWNyQixVQUFJZSxhQUFhLEdBQUssTUFBS3ZELEtBQUwsQ0FBVzZDLGFBQVgsQ0FBeUJXLElBQXpCLENBQThCLFVBQUFDLE9BQU87QUFBQSxlQUFJQSxPQUFPLENBQUNDLFFBQVo7QUFBQSxPQUFyQyxDQUF0QixDQWRxQixDQWVyQjs7O0FBQ0EsVUFBSUMsYUFBYSxHQUFHO0FBQ2hCQyxrQkFBVSxFQUFPLE1BQUszRCxLQUFMLENBQVd0QixFQURaO0FBRWhCa0YscUJBQWEsRUFBSSxDQUZEO0FBR2hCN0IsYUFBSyxFQUFZQSxLQUhEO0FBSWhCQyxjQUFNLEVBQVdBLE1BSkQ7QUFLaEJGLGlCQUFTLEVBQVFBLFNBTEQ7QUFNaEJiLG1CQUFXLEVBQU0sTUFBS2xCLEtBQUwsQ0FBV1csSUFBWCxDQUFnQk0sTUFBaEIsQ0FBdUJDLFdBTnhCO0FBT2hCOEMsY0FBTSxFQUFXLE1BQUtoRSxLQUFMLENBQVdXLElBQVgsQ0FBZ0JoQyxFQVBqQjtBQVFoQkgsbUJBQVcsRUFBTStFLGFBQWEsQ0FBQy9FO0FBUmYsT0FBcEI7QUFVQXlGLG1GQUFpQixDQUFDTixhQUFELENBQWpCO0FBQ0FWLG1EQUFDLENBQUNDLEtBQUYsQ0FBUWdCLEtBQVI7QUFDSCxLQWpIa0I7O0FBQUEsVUFrSG5CSyxrQkFsSG1CLEdBa0hFLFlBQU07QUFBQSw2QkFhbkJ6QywwRUFBYyxDQUFDLE1BQUs3QixLQUFOLEVBQWEsTUFBS0QsS0FBTCxDQUFXVyxJQUF4QixDQWJLO0FBQUE7QUFBQSxVQUduQm9CLFNBSG1CO0FBQUEsVUFJbkJDLEtBSm1CO0FBQUEsVUFLbkJDLE1BTG1CO0FBQUEsVUFNbkJDLE1BTm1CO0FBQUEsVUFPbkJDLGNBUG1CO0FBQUEsVUFRbkJDLEtBUm1CO0FBQUEsVUFTbkJDLEdBVG1CO0FBQUEsVUFVbkJDLFNBVm1CO0FBQUEsVUFXbkJDLGFBWG1CO0FBQUEsVUFZbkJDLEtBWm1COztBQWV2QixVQUFJZSxhQUFhLEdBQUcsTUFBS3ZELEtBQUwsQ0FBVzZDLGFBQVgsQ0FBeUJXLElBQXpCLENBQThCLFVBQUFDLE9BQU87QUFBQSxlQUFJQSxPQUFPLENBQUNDLFFBQVo7QUFBQSxPQUFyQyxDQUFwQixDQWZ1QixDQWdCdkI7OztBQUNBLFVBQUlDLGFBQWEsR0FBRztBQUNoQkMsa0JBQVUsRUFBTyxNQUFLM0QsS0FBTCxDQUFXdEIsRUFEWjtBQUVoQm9GLHVCQUFlLEVBQUUsQ0FGRDtBQUdoQi9CLGFBQUssRUFBWUEsS0FIRDtBQUloQkMsY0FBTSxFQUFXQSxNQUpEO0FBS2hCRixpQkFBUyxFQUFRQSxTQUxEO0FBTWhCYixtQkFBVyxFQUFNLE1BQUtsQixLQUFMLENBQVdXLElBQVgsQ0FBZ0JNLE1BQWhCLENBQXVCQyxXQU54QjtBQU9oQjhDLGNBQU0sRUFBVyxNQUFLaEUsS0FBTCxDQUFXVyxJQUFYLENBQWdCaEMsRUFQakI7QUFRaEJILG1CQUFXLEVBQU0rRSxhQUFhLENBQUMvRTtBQVJmLE9BQXBCO0FBVUF5RixtRkFBaUIsQ0FBQ04sYUFBRCxDQUFqQjtBQUNBVixtREFBQyxDQUFDQyxLQUFGLENBQVFnQixLQUFSO0FBQ0gsS0EvSWtCOztBQUFBLFFBRVQ1RSxPQUZTLEdBRUcsTUFBS1UsS0FGUixDQUVUVixPQUZTO0FBSWYsVUFBS1csS0FBTCxHQUFhO0FBQ1R0QixRQUFFLEVBQWVXLE9BQU8sQ0FBQ1gsRUFEaEI7QUFFVG9ELGVBQVMsRUFBUXpDLE9BQU8sQ0FBQ3lDLFNBRmhCO0FBR1RDLFdBQUssRUFBWTFDLE9BQU8sQ0FBQzBDLEtBSGhCO0FBSVRDLFlBQU0sRUFBVzNDLE9BQU8sQ0FBQzJDLE1BSmhCO0FBS1RDLFlBQU0sRUFBVzVDLE9BQU8sQ0FBQzRDLE1BTGhCO0FBTVQyQixtQkFBYSxFQUFJdkUsT0FBTyxDQUFDdUUsYUFOaEI7QUFPVEUscUJBQWUsRUFBRXpFLE9BQU8sQ0FBQ3lFO0FBUGhCLEtBQWI7QUFKZTtBQWFsQjs7Ozt3Q0FDa0I7QUFFZixVQUFJUyxTQUFTLEdBQVksSUFBekI7QUFBQSxVQUNJQyxpQkFBaUIsR0FBSSxNQUFNLEtBQUt4RSxLQUFMLENBQVd0QixFQUFqQixHQUFzQixxQ0FEL0M7QUFBQSxVQUVJK0Ysa0JBQWtCLEdBQUcsTUFBTSxLQUFLekUsS0FBTCxDQUFXdEIsRUFBakIsR0FBc0Isc0NBRi9DO0FBQUEsVUFHSWdHLGtCQUFrQixHQUFHLE1BQU0sS0FBSzFFLEtBQUwsQ0FBV3RCLEVBQWpCLEdBQXNCLGdDQUgvQzs7QUFLQXNFLG1EQUFDLENBQUN3QixpQkFBRCxDQUFELENBQXFCRyxVQUFyQixDQUFnQztBQUFFLHNCQUFjO0FBQWhCLE9BQWhDO0FBQ0EzQixtREFBQyxDQUFDeUIsa0JBQUQsQ0FBRCxDQUFzQkUsVUFBdEIsQ0FBaUM7QUFBRSxzQkFBYztBQUFoQixPQUFqQztBQUVBM0IsbURBQUMsQ0FBQ3dCLGlCQUFELENBQUQsQ0FBcUJJLEVBQXJCLENBQXdCLFlBQXhCLEVBQXNDLFlBQVc7QUFDN0MsWUFBSUMsV0FBVyxHQUFHN0IsNkNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUThCLEdBQVIsRUFBbEI7O0FBQ0FQLGlCQUFTLENBQUM1RCxRQUFWLENBQW1CO0FBQ2ZvQixlQUFLLEVBQUU4QztBQURRLFNBQW5CO0FBR0gsT0FMRDtBQU1BN0IsbURBQUMsQ0FBQ3lCLGtCQUFELENBQUQsQ0FBc0JHLEVBQXRCLENBQXlCLFlBQXpCLEVBQXVDLFlBQVc7QUFDOUMsWUFBSUcsWUFBWSxHQUFHL0IsNkNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUThCLEdBQVIsRUFBbkI7O0FBQ0FQLGlCQUFTLENBQUM1RCxRQUFWLENBQW1CO0FBQ2ZxQixnQkFBTSxFQUFFK0M7QUFETyxTQUFuQjtBQUdILE9BTEQ7QUFPQS9CLG1EQUFDLENBQUMwQixrQkFBRCxDQUFELENBQXNCTSxVQUF0QixDQUFpQztBQUM3QkMsa0JBQVUsRUFBRSxVQURpQjtBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxnQkFBUSxFQUFFLGtCQUFTQyxRQUFULEVBQW1CQyxJQUFuQixFQUF5QjtBQUUvQmIsbUJBQVMsQ0FBQzVELFFBQVYsQ0FBbUI7QUFDZm1CLHFCQUFTLEVBQUVxRDtBQURJLFdBQW5CO0FBR0g7QUFqQjRCLE9BQWpDO0FBbUJIOzs7eUNBQ21CO0FBQUEsVUFFVjlGLE9BRlUsR0FFRSxLQUFLVSxLQUZQLENBRVZWLE9BRlU7O0FBR2hCLFVBQUlBLE9BQU8sQ0FBQ2dHLE1BQVIsSUFBa0IsSUFBdEIsRUFBNEI7QUFDeEIsYUFBSzFFLFFBQUwsQ0FBYztBQUNWakMsWUFBRSxFQUFlVyxPQUFPLENBQUNYLEVBRGY7QUFFVm9ELG1CQUFTLEVBQVF6QyxPQUFPLENBQUN5QyxTQUZmO0FBR1ZDLGVBQUssRUFBWTFDLE9BQU8sQ0FBQzBDLEtBSGY7QUFJVkMsZ0JBQU0sRUFBVzNDLE9BQU8sQ0FBQzJDLE1BSmY7QUFLVkMsZ0JBQU0sRUFBVzVDLE9BQU8sQ0FBQzRDLE1BTGY7QUFNVjJCLHVCQUFhLEVBQUl2RSxPQUFPLENBQUN1RSxhQU5mO0FBT1ZFLHlCQUFlLEVBQUV6RSxPQUFPLENBQUN5RTtBQVBmLFNBQWQsRUFTRyxZQUFVO0FBRVQsY0FBSXpFLE9BQU8sbUNBQVMsS0FBS1UsS0FBTCxDQUFXVixPQUFwQjtBQUE2QmdHLGtCQUFNLEVBQUU7QUFBckMsWUFBWDs7QUFDQSxlQUFLdEYsS0FBTCxDQUFXdUYsUUFBWCxDQUFvQmxHLDZEQUFhLENBQUNDLE9BQUQsQ0FBakM7QUFFQSxjQUFJbUYsaUJBQWlCLEdBQUksTUFBTSxLQUFLeEUsS0FBTCxDQUFXdEIsRUFBakIsR0FBc0IscUNBQS9DO0FBQUEsY0FDSStGLGtCQUFrQixHQUFHLE1BQU0sS0FBS3pFLEtBQUwsQ0FBV3RCLEVBQWpCLEdBQXNCLHNDQUQvQztBQUFBLGNBRUlnRyxrQkFBa0IsR0FBRyxNQUFNLEtBQUsxRSxLQUFMLENBQVd0QixFQUFqQixHQUFzQixnQ0FGL0M7QUFHQXNFLHVEQUFDLENBQUN3QixpQkFBRCxDQUFELENBQXFCTSxHQUFyQixDQUF5QixLQUFLOUUsS0FBTCxDQUFXK0IsS0FBcEM7QUFDQWlCLHVEQUFDLENBQUN5QixrQkFBRCxDQUFELENBQXNCSyxHQUF0QixDQUEwQixLQUFLOUUsS0FBTCxDQUFXZ0MsTUFBckM7QUFDQWdCLHVEQUFDLENBQUMwQixrQkFBRCxDQUFELENBQXNCSSxHQUF0QixDQUEwQixLQUFLOUUsS0FBTCxDQUFXOEIsU0FBckM7QUFDSCxTQXBCRDtBQXFCSDtBQUNKOzs7NkJBK0RRO0FBQUEsNkJBYURELDBFQUFjLENBQUMsS0FBSzdCLEtBQU4sRUFBYSxLQUFLRCxLQUFMLENBQVdXLElBQXhCLENBYmI7QUFBQTtBQUFBLFVBR0RvQixTQUhDO0FBQUEsVUFJREMsS0FKQztBQUFBLFVBS0RDLE1BTEM7QUFBQSxVQU1EQyxNQU5DO0FBQUEsVUFPREMsY0FQQztBQUFBLFVBUURDLEtBUkM7QUFBQSxVQVNEQyxHQVRDO0FBQUEsVUFVREMsU0FWQztBQUFBLFVBV0RDLGFBWEM7QUFBQSxVQVlEQyxLQVpDOztBQWVMLFVBQUlnRCxZQUFZLEdBQUcsS0FBS3hGLEtBQUwsQ0FBV1YsT0FBOUI7QUFDQSxVQUFJbUcsTUFBTSxHQUFHRCxZQUFZLENBQUN4RCxLQUFiLElBQXNCQSxLQUF0QixJQUErQndELFlBQVksQ0FBQ3ZELE1BQWIsSUFBdUJBLE1BQXRELElBQWdFdUQsWUFBWSxDQUFDekQsU0FBYixJQUEwQkEsU0FBdkc7QUFDQSxVQUFJMkQsY0FBSixFQUNJQyxhQURKLEVBRUlDLGNBRkosRUFHSUMsZ0JBSEosRUFJSUMsZUFKSixFQUtJQyxnQkFMSjs7QUFPQSxVQUFHLEtBQUsvRixLQUFMLENBQVdXLElBQVgsQ0FBZ0I4QixPQUFoQixJQUEyQjVDLCtDQUFNLENBQUM2QyxTQUFQLENBQWlCQyxNQUEvQyxFQUFzRDtBQUVsRCtDLHNCQUFjLEdBQUssK0JBQW5CLEVBQ0FDLGFBQWEsR0FBTSxRQURuQixFQUVBQyxjQUFjLEdBQUssS0FBS3RCLGdCQUZ4QixFQUlBdUIsZ0JBQWdCLEdBQUcsMENBSm5CLEVBS0E7QUFDQTtBQUNBQyx1QkFBZSxHQUFJLEtBQUs3RixLQUFMLENBQVc4RCxlQUFYLEdBQTZCLFNBQTdCLEdBQXlDLFFBUDVELEVBUUFnQyxnQkFBZ0IsR0FBRyxJQVJuQjs7QUFVQSxZQUFHLEtBQUs5RixLQUFMLENBQVc0RCxhQUFYLElBQTRCLENBQUM0QixNQUFoQyxFQUF1QztBQUNuQ0Msd0JBQWMsSUFBSSxXQUFsQjtBQUNBQyx1QkFBYSxHQUFHLFNBQWhCO0FBQ0FDLHdCQUFjLEdBQUssSUFBbkI7QUFDSDtBQUVKOztBQUNELFVBQUcsS0FBSzVGLEtBQUwsQ0FBV1csSUFBWCxDQUFnQjhCLE9BQWhCLElBQTJCNUMsK0NBQU0sQ0FBQzZDLFNBQVAsQ0FBaUJFLFFBQS9DLEVBQXdEO0FBR3BEaUQsd0JBQWdCLEdBQUssaUNBQXJCLEVBQ0FDLGVBQWUsR0FBTSxPQURyQixFQUVBQyxnQkFBZ0IsR0FBSyxLQUFLeEIsa0JBRjFCLEVBSUFtQixjQUFjLEdBQUcsd0NBSmpCLEVBS0E7QUFDQTtBQUNBQyxxQkFBYSxHQUFJLEtBQUsxRixLQUFMLENBQVc0RCxhQUFYLEdBQTJCLFVBQTNCLEdBQXdDLFNBUHpELEVBUUErQixjQUFjLEdBQUcsSUFSakI7O0FBVUEsWUFBRyxLQUFLM0YsS0FBTCxDQUFXOEQsZUFBWCxJQUE4QixDQUFDMEIsTUFBbEMsRUFBeUM7QUFDckNJLDBCQUFnQixJQUFJLFdBQXBCO0FBQ0FDLHlCQUFlLEdBQUcsVUFBbEI7QUFDQUMsMEJBQWdCLEdBQUssSUFBckI7QUFDSDtBQUNKOztBQU1ELDBCQUNJO0FBQUssVUFBRSxFQUFHLEtBQUs5RixLQUFMLENBQVd0QixFQUFYLEdBQWdCLG9CQUExQjtBQUFpRCxpQkFBUyxFQUFDO0FBQTNELHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLG9DQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBRyxpQkFBUyxFQUFDO0FBQWIsUUFESixlQUVJO0FBQU8saUJBQVMsRUFBQywwQkFBakI7QUFBNEMsWUFBSSxFQUFDLE1BQWpEO0FBQXdELG9CQUFZLEVBQUMsT0FBckU7QUFDQSxvQkFBWSxFQUFHb0Q7QUFEZixRQUZKLENBREosZUFNSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFHLGlCQUFTLEVBQUM7QUFBYixRQURKLGVBRUk7QUFBTyxpQkFBUyxFQUFDLCtCQUFqQjtBQUFpRCxvQkFBWSxFQUFDLE9BQTlEO0FBQ0ksb0JBQVksRUFBR0M7QUFEbkIsUUFGSixDQU5KLGVBV0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBRyxpQkFBUyxFQUFDO0FBQWIsUUFESixlQUVJO0FBQU8saUJBQVMsRUFBQyxnQ0FBakI7QUFBa0Qsb0JBQVksRUFBQyxPQUEvRDtBQUNBLG9CQUFZLEVBQUdDO0FBRGYsUUFGSixDQVhKLENBREosQ0FGSixlQXFCSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFBc0Isb0dBQXRCLENBREosZUFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUE4QkMsTUFBOUIsV0FGSixDQUZKLGVBTUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQXNCLGdIQUF0QixDQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FBOEJDLGNBQTlCLGtCQUZKLENBTkosZUFXSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFBc0IseUlBQXRCLENBREosZUFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUE4QkMsS0FBOUIsV0FGSixDQVhKLENBckJKLEVBc0NRLEtBQUtwQyxLQUFMLENBQVdXLElBQVgsQ0FBZ0I4QixPQUFoQixJQUEyQjVDLCtDQUFNLENBQUM2QyxTQUFQLENBQWlCQyxNQUE1QyxpQkFDQTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFBc0IsOEZBQXRCLE1BREosZUFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUE4QkosYUFBOUIsV0FGSixDQURKLGVBS0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsZ0dBTEosQ0F2Q1IsRUFnRFEsS0FBS3ZDLEtBQUwsQ0FBV1csSUFBWCxDQUFnQjhCLE9BQWhCLElBQTJCNUMsK0NBQU0sQ0FBQzZDLFNBQVAsQ0FBaUJFLFFBQTVDLGlCQUNBO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUFzQixzSEFBdEIsQ0FESixlQUVJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQThCTixTQUE5QixXQUZKLENBREosZUFLSTtBQUFLLGlCQUFTLEVBQUM7QUFBZiw2RkFMSixlQU9JO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUFzQixrSEFBdEIsTUFESixlQUVJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQThCRCxHQUE5QixXQUZKLENBUEosQ0FqRFIsZUE4REk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsd0JBREosZUFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUE0REcsS0FBNUQsV0FGSixDQURKLGVBS0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsNEdBTEosZUFNSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFFQTtBQUFHLGlCQUFTLEVBQUdrRCxjQUFmO0FBQWdDLGVBQU8sRUFBSUU7QUFBM0MsY0FBK0RELGFBQS9ELE1BRkEsZUFHQTtBQUFHLGlCQUFTLEVBQUdFLGdCQUFmO0FBQWtDLGVBQU8sRUFBSUU7QUFBN0MsY0FBbUVELGVBQW5FLE1BSEEsQ0FOSixDQTlESixDQURKO0FBNkVIOzs7O0VBblM2QjFFLCtDOztBQXNTbEMsSUFBSUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDcEIsS0FBRCxFQUFXO0FBQzdCLFNBQU87QUFDSFUsUUFBSSxFQUFXVixLQUFLLENBQUNxQixLQURsQjtBQUVIdUIsaUJBQWEsRUFBRTVDLEtBQUssQ0FBQ3NCO0FBRmxCLEdBQVA7QUFJSCxDQUxEOztBQU1lQywwSEFBTyxDQUFDSCxlQUFELENBQVAsQ0FBeUJnRCxtQkFBekIsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hUQTs7SUFFcUIyQixXOzs7Ozs7Ozs7Ozs7OzZCQUVSO0FBRUwsMEJBQ0k7QUFBSyxVQUFFLEVBQUMsaUJBQVI7QUFBMEIsaUJBQVMsRUFBQztBQUFwQyxzQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZiw4S0FESixlQUVJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUVJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUcsaUJBQVMsRUFBQyw2QkFBYjtBQUEyQyxZQUFJLEVBQUMsR0FBaEQ7QUFBb0QsV0FBRyxFQUFDO0FBQXhELDBDQURKLENBRkosQ0FGSixDQURKO0FBV0g7Ozs7RUFmb0M1RSwrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIekM7QUFDQTtBQUNBO0FBQ0E7O0lBR002RSxlOzs7OztBQUNGLDJCQUFZakcsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLFVBSW5Ca0csV0FKbUIsR0FJTCxZQUFNO0FBQUEsd0JBRWEsTUFBS2xHLEtBRmxCO0FBQUEsVUFFVmQsUUFGVSxlQUVWQSxRQUZVO0FBQUEsVUFFQXFDLFFBRkEsZUFFQUEsUUFGQTs7QUFJaEIsVUFBRyxDQUFDckMsUUFBUSxDQUFDaUgsS0FBYixFQUFtQjtBQUNmbEQscURBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCQyxLQUF6QixDQUErQjtBQUMzQkMscUJBQVcsRUFBRSxLQURjO0FBRTNCQyxvQkFBVSxFQUFFLEtBRmU7QUFHM0JDLG1CQUFTLEVBQUU7QUFIZ0IsU0FBL0I7QUFLQSxlQUFPLEtBQVA7QUFDSDs7QUFFRCxVQUFJK0MsaUJBQWlCLEdBQUc3RSxRQUFRLENBQUNpQyxJQUFULENBQWMsVUFBQUMsT0FBTztBQUFBLGVBQUlBLE9BQU8sQ0FBQ0MsUUFBWjtBQUFBLE9BQXJCLENBQXhCO0FBQ0EsVUFBSTJDLFVBQVUsR0FBR0QsaUJBQWlCLENBQUMxSSxJQUFuQztBQUNBLFVBQUk0QixPQUFPLEdBQUdKLFFBQVEsQ0FBQ3dDLElBQVQsQ0FBYzhCLElBQWQsQ0FBbUIsVUFBQWxFLE9BQU87QUFBQSxlQUFJQSxPQUFPLENBQUNnSCxXQUFSLElBQXVCRCxVQUFVLENBQUMxSCxFQUFsQyxJQUF3Q1csT0FBTyxDQUFDaUgsU0FBUixJQUFxQkYsVUFBVSxDQUFDMUgsRUFBNUU7QUFBQSxPQUExQixDQUFkOztBQUlBLFVBQUksQ0FBQ1csT0FBTCxFQUFjO0FBRVYyRCxxREFBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JDLEtBQXRCLENBQTRCO0FBQ3hCQyxxQkFBVyxFQUFFLEtBRFc7QUFFeEJDLG9CQUFVLEVBQUUsS0FGWTtBQUd4QkMsbUJBQVMsRUFBRTtBQUhhLFNBQTVCO0FBS0EsZUFBTyxLQUFQO0FBQ0g7O0FBM0JlLFVBNkJWUyxNQTdCVSxHQTZCaUN4RSxPQTdCakMsQ0E2QlZ3RSxNQTdCVTtBQUFBLFVBNkJGRCxhQTdCRSxHQTZCaUN2RSxPQTdCakMsQ0E2QkZ1RSxhQTdCRTtBQUFBLFVBNkJhRSxlQTdCYixHQTZCaUN6RSxPQTdCakMsQ0E2QmF5RSxlQTdCYjs7QUE4QmhCLFVBQUlGLGFBQWEsSUFBSUUsZUFBakIsSUFBb0MsQ0FBQ0QsTUFBekMsRUFBaUQ7QUFFN0NiLHFEQUFDLENBQUMsTUFBTTNELE9BQU8sQ0FBQ1gsRUFBZCxHQUFtQixvQkFBcEIsQ0FBRCxDQUEyQ3VFLEtBQTNDLENBQWlEO0FBQzdDQyxxQkFBVyxFQUFFLEtBRGdDO0FBRTdDQyxvQkFBVSxFQUFFLEtBRmlDO0FBRzdDQyxtQkFBUyxFQUFFO0FBSGtDLFNBQWpEO0FBS0gsT0FQRCxNQU9NLElBQUksQ0FBQ1EsYUFBRCxJQUFrQixDQUFDRSxlQUF2QixFQUF3QztBQUUxQ2QscURBQUMsQ0FBQyxNQUFNM0QsT0FBTyxDQUFDWCxFQUFkLEdBQW1CLG9CQUFwQixDQUFELENBQTJDdUUsS0FBM0MsQ0FBaUQ7QUFDN0NDLHFCQUFXLEVBQUUsS0FEZ0M7QUFFN0NDLG9CQUFVLEVBQUUsS0FGaUM7QUFHN0NDLG1CQUFTLEVBQUU7QUFIa0MsU0FBakQ7QUFLSCxPQVBLLE1BT0MsSUFBS1EsYUFBYSxJQUFJRSxlQUFqQixJQUFvQ0QsTUFBekMsRUFBaUQ7QUFDcEQ1RyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWjtBQUNBOEYscURBQUMsQ0FBQyxNQUFNM0QsT0FBTyxDQUFDWCxFQUFkLEdBQWtCLG1CQUFuQixDQUFELENBQXlDdUUsS0FBekMsQ0FBK0M7QUFDM0NDLHFCQUFXLEVBQUUsS0FEOEI7QUFFM0NDLG9CQUFVLEVBQUUsS0FGK0I7QUFHM0NDLG1CQUFTLEVBQUU7QUFIZ0MsU0FBL0M7QUFLSDtBQUNKLEtBeERrQjs7QUFBQTtBQUVsQjs7Ozs2QkF5RFE7QUFFTCwwQkFDSTtBQUNJLGlCQUFTLEVBQUMsd0NBRGQ7QUFFSSxlQUFPLEVBQUcsS0FBSzZDO0FBRm5CLFFBREo7QUFNSDs7OztFQXBFeUI5RSwrQzs7QUFzRTlCLElBQUlDLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ3BCLEtBQUQsRUFBVztBQUM3QixTQUFPO0FBQ0hVLFFBQUksRUFBTVYsS0FBSyxDQUFDcUIsS0FEYjtBQUVIcEMsWUFBUSxFQUFFZSxLQUFLLENBQUNYLE9BRmI7QUFHSGlDLFlBQVEsRUFBRXRCLEtBQUssQ0FBQ3NCO0FBSGIsR0FBUDtBQUtILENBTkQ7O0FBT2VDLDBIQUFPLENBQUNILGVBQUQsQ0FBUCxDQUF5QjRFLGVBQXpCLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkZBO0FBQ0E7O0lBRU1PLEs7Ozs7Ozs7Ozs7Ozs7O29IQUVGQyxnQixHQUFtQixVQUFBQyxLQUFLLEVBQUk7QUFDeEIsVUFBSUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBWjs7QUFDQSxVQUFJRixLQUFKLEVBQVc7QUFDUCxZQUFJRyxPQUFPLEdBQUdILEtBQUssQ0FBQ0ksS0FBcEIsQ0FETyxDQUVQOztBQUNBRCxlQUFPLEdBQUdBLE9BQU8sR0FBRyxNQUFLOUcsS0FBTCxDQUFXZ0gsTUFBL0I7QUFDQUwsYUFBSyxDQUFDSSxLQUFOLEdBQWNELE9BQWQ7QUFDSDtBQUNKLEs7Ozs7OzZCQUVRO0FBRUwsMEJBQ0k7QUFBRyxpQkFBUyxFQUFDLGlCQUFiO0FBQStCLGVBQU8sRUFBRSxLQUFLTDtBQUE3QyxTQUFnRSxLQUFLekcsS0FBTCxDQUFXZ0gsTUFBM0UsQ0FESjtBQUdIOzs7O0VBakJlNUYsK0M7O0FBbUJMb0Ysb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7O0lBQ01TLFE7Ozs7Ozs7Ozs7Ozs7eUNBRWU7QUFDbkI7QUFDTSxVQUFJQyxPQUFPLEdBQUdOLFFBQVEsQ0FBQ08sc0JBQVQsQ0FBZ0Msd0JBQWhDLENBQWQ7O0FBQ0EsVUFBR0QsT0FBTyxDQUFDRSxNQUFYLEVBQWtCO0FBQ2QsWUFBSUMsUUFBUSxHQUFHVCxRQUFRLENBQUNPLHNCQUFULENBQWdDLHdCQUFoQyxDQUFmOztBQUNBLFlBQUdFLFFBQVEsQ0FBQ0QsTUFBWixFQUFtQjtBQUNmRixpQkFBTyxDQUFDLENBQUQsQ0FBUCxDQUFXSSxLQUFYLENBQWlCQyxNQUFqQixHQUEwQkYsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZRyxZQUFaLEdBQTJCLElBQXJEO0FBQ0g7QUFDSjtBQUNQOzs7NkJBRVE7QUFFUnRLLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0FBRlEsVUFHRlksUUFIRSxHQUdXLEtBQUtpQyxLQUhoQixDQUdGakMsUUFIRTtBQUlSLFVBQUl3RixhQUFhLEdBQUd4RixRQUFRLENBQUN5RixJQUFULENBQWMsVUFBQUMsT0FBTztBQUFBLGVBQUlBLE9BQU8sQ0FBQ0MsUUFBWjtBQUFBLE9BQXJCLENBQXBCOztBQUVBLFVBQUksQ0FBQ0gsYUFBTCxFQUFvQjtBQUNuQixlQUFPLElBQVA7QUFDQTs7QUFDRCxVQUFJa0UsVUFBVSxHQUFJbEUsYUFBYSxDQUFDN0YsSUFBZCxDQUFtQmdLLE1BQW5CLEdBQTRCLE9BQTVCLEdBQXNDLE9BQXhEO0FBQ0EsVUFBSUMsUUFBUSxHQUFHLElBQWY7O0FBQ0EsVUFBSSxPQUFPQyxpQkFBUCxJQUE0QixXQUE1QixJQUEyQyxPQUFPQyxtQkFBUCxJQUE4QixXQUE3RSxFQUEwRjtBQUN6RixZQUFJdEUsYUFBYSxDQUFDN0YsSUFBZCxDQUFtQitFLE9BQW5CLElBQThCNUMsK0NBQU0sQ0FBQzZDLFNBQVAsQ0FBaUJDLE1BQW5ELEVBQTJEO0FBQzFEZ0Ysa0JBQVEsR0FBR0MsaUJBQWlCLEdBQUcsR0FBcEIsR0FBMEJyRSxhQUFhLENBQUM3RixJQUFkLENBQW1CaUIsRUFBeEQ7QUFDQTs7QUFDRCxZQUFJNEUsYUFBYSxDQUFDN0YsSUFBZCxDQUFtQitFLE9BQW5CLElBQThCNUMsK0NBQU0sQ0FBQzZDLFNBQVAsQ0FBaUJFLFFBQW5ELEVBQTZEO0FBQzVEK0Usa0JBQVEsR0FBR0UsbUJBQW1CLEdBQUcsR0FBdEIsR0FBNEJ0RSxhQUFhLENBQUM3RixJQUFkLENBQW1CaUIsRUFBMUQ7QUFDQTtBQUNEOztBQUVELDBCQUNDO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUVDO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNDO0FBQVEsaUJBQVMsRUFBQztBQUFsQixTQUVFZ0osUUFBUSxnQkFDUjtBQUFHLFlBQUksRUFBRUE7QUFBVCxzQkFDQztBQUFLLFdBQUcsRUFBRTlILCtDQUFNLENBQUNpSSxVQUFQLENBQWtCQyxHQUFsQixHQUF3QnhFLGFBQWEsQ0FBQzdGLElBQWQsQ0FBbUJzSyxNQUFyRDtBQUE2RCxXQUFHLEVBQUM7QUFBakUsUUFERCxDQURRLGdCQUtSO0FBQUssV0FBRyxFQUFFbkksK0NBQU0sQ0FBQ2lJLFVBQVAsQ0FBa0JDLEdBQWxCLEdBQXdCeEUsYUFBYSxDQUFDN0YsSUFBZCxDQUFtQnNLLE1BQXJEO0FBQTZELFdBQUcsRUFBQztBQUFqRSxRQVBGLENBREQsZUFZQztBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUVFTCxRQUFRLGdCQUNSO0FBQUcsWUFBSSxFQUFFQSxRQUFUO0FBQW1CLGlCQUFTLEVBQUM7QUFBN0IsU0FBcUNwRSxhQUFhLENBQUM3RixJQUFkLENBQW1CdUssVUFBbkIsR0FBZ0MsR0FBaEMsR0FBcUMxRSxhQUFhLENBQUM3RixJQUFkLENBQW1Cd0ssU0FBN0YsQ0FEUSxnQkFHUjtBQUFNLGlCQUFTLEVBQUM7QUFBaEIsU0FBd0IzRSxhQUFhLENBQUM3RixJQUFkLENBQW1CdUssVUFBbkIsR0FBZ0MsR0FBaEMsR0FBcUMxRSxhQUFhLENBQUM3RixJQUFkLENBQW1Cd0ssU0FBaEYsQ0FMRixlQVFDO0FBQU0saUJBQVMsRUFBRSxDQUFDM0UsYUFBYSxDQUFDN0YsSUFBZCxDQUFtQmdLLE1BQW5CLEdBQTRCLFlBQTVCLEdBQTJDLEVBQTVDLElBQWtEO0FBQW5FLFNBQW9GRCxVQUFwRixDQVJELENBWkQsQ0FGRCxDQUREO0FBNEJBOzs7O0VBN0RxQnJHLCtDOztBQStEdkIsSUFBSUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDcEIsS0FBRCxFQUFXO0FBQ2hDLFNBQU87QUFDTmxDLFlBQVEsRUFBRWtDLEtBQUssQ0FBQ3NCLFFBRFY7QUFFTkQsU0FBSyxFQUFLckIsS0FBSyxDQUFDcUIsS0FGVjtBQUdONUQsUUFBSSxFQUFNdUMsS0FBSyxDQUFDcUIsS0FIVjtBQUlOakIsVUFBTSxFQUFJSixLQUFLLENBQUNJO0FBSlYsR0FBUDtBQU1BLENBUEQ7O0FBUWVtQiwwSEFBTyxDQUFDSCxlQUFELENBQVAsQ0FBeUI0RixRQUF6QixDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTs7SUFHTWtCLGE7Ozs7O0FBQ0YseUJBQVluSSxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsVUFvRG5Cb0ksaUJBcERtQixHQW9EQyxVQUFVakssT0FBVixFQUFtQm1KLEtBQW5CLEVBQTBCZSxVQUExQixFQUFzQztBQUN0RG5MLGFBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVnQixlQUFPLEVBQVBBLE9BQUY7QUFBV21KLGFBQUssRUFBTEEsS0FBWDtBQUFrQmUsa0JBQVUsRUFBVkE7QUFBbEIsT0FBWjs7QUFDQSxVQUFJLENBQUNsSyxPQUFMLEVBQWM7QUFDVixZQUFJbUosS0FBSyxJQUFJLE9BQWIsRUFBc0I7QUFDbEJuSixpQkFBTyxHQUFHbUosS0FBVjtBQUNILFNBRkQsTUFFTztBQUNILGlCQUFPLEtBQVA7QUFDSDtBQUNKOztBQUNELFVBQUksQ0FBQ0EsS0FBTCxFQUFZO0FBQ1IsWUFBSWdCLFNBQVMsR0FBR0Msd0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxNQUFkLENBQXFCLFVBQUFDLEtBQUs7QUFBQSxpQkFBSUEsS0FBSyxDQUFDMUIsTUFBTixJQUFnQjdJLE9BQU8sQ0FBQ3dLLElBQVIsRUFBcEI7QUFBQSxTQUExQixDQUFoQjs7QUFDQSxZQUFJTCxTQUFTLENBQUNsQixNQUFkLEVBQXNCO0FBQ2xCRSxlQUFLLEdBQUcsT0FBUjtBQUNIO0FBQ0o7O0FBQ0QsVUFBSSxLQUFLdEgsS0FBTCxDQUFXdEMsSUFBZixFQUFxQjtBQUVqQjtBQUNBO0FBQ0ksWUFBRUEsSUFBRixHQUFXLEtBQUtzQyxLQUFoQixDQUFFdEMsSUFBRjtBQUFBLFlBQ0FrTCxRQURBLEdBQ1csSUFEWDtBQUFBLFlBRUFDLFVBRkEsR0FFYSxLQUZiO0FBR0osWUFBSUMsSUFBSSxHQUFHLENBQUUsSUFBSUMsSUFBSixFQUFELENBQVdDLE9BQVgsS0FBdUIsSUFBSUQsSUFBSixDQUFTckwsSUFBSSxDQUFDdUQsTUFBTCxDQUFZZ0ksTUFBckIsRUFBNkJELE9BQTdCLEVBQXhCLElBQWtFLElBQTdFOztBQUNBLFlBQUlGLElBQUksSUFBSXBMLElBQUksQ0FBQ3VELE1BQUwsQ0FBWWlJLE1BQXhCLEVBQWdDO0FBQzVCO0FBQ0FMLG9CQUFVLEdBQUc7QUFBRTdFLGtCQUFNLEVBQUV0RyxJQUFJLENBQUNpQixFQUFmO0FBQW1Cd0ssa0JBQU0sRUFBRXpMLElBQUksQ0FBQ3VELE1BQUwsQ0FBWW1JLFdBQXZDO0FBQW9EQyxrQkFBTSxFQUFFLEtBQUtySixLQUFMLENBQVdLO0FBQXZFLFdBQWI7QUFDSDs7QUFDRCxZQUFJaUosb0JBQW9CLEdBQUduTCxPQUEzQjtBQUNBLFlBQUlvTCxXQUFXLEdBQUcsS0FBS3ZKLEtBQUwsQ0FBV3VCLFFBQVgsQ0FBb0JpQyxJQUFwQixDQUF5QixVQUFBQyxPQUFPLEVBQUk7QUFDbEQsaUJBQU9BLE9BQU8sQ0FBQ0MsUUFBUixJQUFvQixJQUEzQjtBQUNILFNBRmlCLENBQWxCO0FBR0EsWUFBSThGLFNBQVMsR0FBR0QsV0FBVyxDQUFDNUssRUFBNUI7QUFDQSxZQUFJdUMsV0FBVyxHQUFHeEQsSUFBSSxDQUFDdUQsTUFBTCxDQUFZQyxXQUE5QjtBQUNBLFlBQUltSSxNQUFNLEdBQUcsS0FBS3JKLEtBQUwsQ0FBV0ssTUFBeEI7QUFDQW9KLHdGQUFvQixDQUFDSCxvQkFBRCxFQUF1QmhDLEtBQXZCLEVBQThCZSxVQUE5QixFQUEwQ21CLFNBQTFDLEVBQ2hCdEksV0FEZ0IsRUFDSG1JLE1BREcsRUFDS1QsUUFETCxFQUNlQyxVQURmLENBQXBCO0FBRUg7QUFDSixLQXpGa0I7O0FBQUEsVUEyRm5CYSxxQkEzRm1CLEdBMkZLLFlBQU07QUFDMUIsVUFBSXZMLE9BQU8sR0FBRyxNQUFkO0FBQ0EsVUFBSW1KLEtBQUssR0FBRyxPQUFaOztBQUNBLFlBQUtjLGlCQUFMLENBQXVCakssT0FBdkIsRUFBZ0NtSixLQUFoQyxFQUF1QyxJQUF2QztBQUNILEtBL0ZrQjs7QUFBQSxVQWdHbkJxQyx1QkFoR21CLEdBZ0dPLFlBQU07QUFDNUIsVUFBSXJDLEtBQUssR0FBRyxFQUFaO0FBQ0EsVUFBSXNDLGFBQWEsR0FBRyxFQUFwQjtBQUVBLFVBQUlDLFNBQVMsR0FBR2pELFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixpQkFBeEIsQ0FBaEI7QUFDQSxVQUFJaUQsTUFBTSxHQUFNRCxTQUFTLENBQUMxQyxzQkFBVixDQUFpQyxjQUFqQyxDQUFoQjtBQUNBLFVBQUloSixPQUFPLEdBQUt5SSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUNFLEtBQXpEOztBQUVBLFVBQUkrQyxNQUFNLENBQUMxQyxNQUFQLElBQWlCLENBQUNqSixPQUF0QixFQUErQjtBQUMzQkEsZUFBTyxHQUFHLE9BQVY7QUFDSDs7QUFFRCxVQUFJLENBQUNBLE9BQUwsRUFBYztBQUNWLGVBQU8sS0FBUDtBQUNIOztBQUNEeUksY0FBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLEVBQXlDRSxLQUF6QyxHQUFpRCxFQUFqRDs7QUFFQSxVQUFJK0MsTUFBTSxDQUFDMUMsTUFBWCxFQUFtQjtBQUNmRSxhQUFLLEdBQUcsT0FBUjtBQUVBc0MscUJBQWEsR0FBRyxFQUFoQjs7QUFDQSxhQUFLLElBQUlHLGdCQUFnQixHQUFHLENBQTVCLEVBQStCQSxnQkFBZ0IsR0FBR0QsTUFBTSxDQUFDMUMsTUFBekQsRUFBaUUyQyxnQkFBZ0IsRUFBakYsRUFBcUY7QUFDakYsY0FBRyxDQUFDRCxNQUFNLENBQUNDLGdCQUFELENBQU4sQ0FBeUJDLFNBQXpCLENBQW1DQyxRQUFuQyxDQUE0QyxhQUE1QyxDQUFKLEVBQStEO0FBQzNETCx5QkFBYSxDQUFDTSxJQUFkLENBQ0k7QUFDSUMsaUJBQUcsRUFBR0wsTUFBTSxDQUFDQyxnQkFBRCxDQUFOLENBQXlCSyxZQUF6QixDQUFzQyxVQUF0QyxDQURWO0FBRUloTixrQkFBSSxFQUFFME0sTUFBTSxDQUFDQyxnQkFBRCxDQUFOLENBQXlCSyxZQUF6QixDQUFzQyxXQUF0QyxDQUZWO0FBR0lDLGtCQUFJLEVBQUcsSUFBSXRCLElBQUosRUFBRCxDQUFXQyxPQUFYO0FBSFYsYUFESjtBQU9IO0FBQ0o7QUFDSjs7QUFDRHBDLGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixpQkFBeEIsRUFBMkN5RCxTQUEzQyxHQUF1RCxFQUF2RDs7QUFDQSxZQUFLbEMsaUJBQUwsQ0FBdUJqSyxPQUF2QixFQUFnQ21KLEtBQWhDLEVBQXVDc0MsYUFBdkM7QUFDSCxLQW5Ja0I7O0FBQUEsVUFxSW5CVyxxQkFySW1CLEdBcUlLLFVBQUM3RCxLQUFELEVBQVc7QUFFL0IsVUFBSUEsS0FBSyxDQUFDOEQsT0FBTixJQUFpQixFQUFqQixJQUF1QixDQUFDOUQsS0FBSyxDQUFDK0QsUUFBbEMsRUFBNEM7QUFDeEMsWUFBSW5ELEtBQUssR0FBRyxFQUFaO0FBQ0EsWUFBSXNDLGFBQWEsR0FBRyxFQUFwQjtBQUNBLFlBQUlDLFNBQVMsR0FBR2pELFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixpQkFBeEIsQ0FBaEI7QUFDQSxZQUFJaUQsTUFBTSxHQUFHRCxTQUFTLENBQUMxQyxzQkFBVixDQUFpQyxjQUFqQyxDQUFiOztBQUNBLFlBQUkyQyxNQUFNLENBQUMxQyxNQUFYLEVBQW1CO0FBQ2ZFLGVBQUssR0FBRyxPQUFSO0FBQ0FzQyx1QkFBYSxHQUFHLEVBQWhCOztBQUNBLGVBQUssSUFBSUcsZ0JBQWdCLEdBQUcsQ0FBNUIsRUFBK0JBLGdCQUFnQixHQUFHRCxNQUFNLENBQUMxQyxNQUF6RCxFQUFpRTJDLGdCQUFnQixFQUFqRixFQUFxRjtBQUNqRixnQkFBRyxDQUFDRCxNQUFNLENBQUNDLGdCQUFELENBQU4sQ0FBeUJDLFNBQXpCLENBQW1DQyxRQUFuQyxDQUE0QyxhQUE1QyxDQUFKLEVBQStEO0FBQzNETCwyQkFBYSxDQUFDTSxJQUFkLENBQ0k7QUFDSUMsbUJBQUcsRUFBR0wsTUFBTSxDQUFDQyxnQkFBRCxDQUFOLENBQXlCSyxZQUF6QixDQUFzQyxVQUF0QyxDQURWO0FBRUloTixvQkFBSSxFQUFFME0sTUFBTSxDQUFDQyxnQkFBRCxDQUFOLENBQXlCSyxZQUF6QixDQUFzQyxXQUF0QyxDQUZWO0FBR0lDLG9CQUFJLEVBQUcsSUFBSXRCLElBQUosRUFBRCxDQUFXQyxPQUFYO0FBSFYsZUFESjtBQU9IO0FBQ0o7QUFDSjs7QUFDRHBDLGdCQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUJBQXhCLEVBQTJDeUQsU0FBM0MsR0FBdUQsRUFBdkQ7O0FBQ0EsY0FBS2xDLGlCQUFMLENBQXVCMUIsS0FBSyxDQUFDZ0UsTUFBTixDQUFhM0QsS0FBcEMsRUFBMkNPLEtBQTNDLEVBQWtEc0MsYUFBbEQ7O0FBQ0EsY0FBS2hKLFFBQUwsQ0FBYztBQUFFK0osa0JBQVEsRUFBRTtBQUFaLFNBQWQ7O0FBQ0EvRCxnQkFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLEVBQXlDRSxLQUF6QyxHQUFpRCxFQUFqRDtBQUNBLGVBQU8sS0FBUDtBQUNIOztBQUNELFVBQUlMLEtBQUssQ0FBQzhELE9BQU4sSUFBaUIsRUFBckIsRUFBeUI7QUFDckIsWUFBSTdELEtBQUssR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLENBQVo7O0FBQ0EsWUFBSUYsS0FBSixFQUFXO0FBQ1AsY0FBSUcsT0FBTyxHQUFHSCxLQUFLLENBQUNJLEtBQXBCLENBRE8sQ0FFUDs7QUFDQSxjQUFJNkQsS0FBSyxHQUFHOUQsT0FBTyxDQUFDK0QsS0FBUixDQUFjLEdBQWQsQ0FBWjtBQUNBLGNBQUlDLFdBQVcsR0FBR0YsS0FBSyxDQUFDQSxLQUFLLENBQUN4RCxNQUFOLEdBQWUsQ0FBaEIsQ0FBdkIsQ0FKTyxDQUtQOztBQUNBLGNBQUkyRCxVQUFVLEdBQUd4Qyx3REFBTSxDQUFDQyxNQUFQLENBQWNDLE1BQWQsQ0FBcUIsVUFBQXVDLElBQUk7QUFBQSxtQkFBSUEsSUFBSSxDQUFDQyxJQUFMLElBQWFILFdBQWpCO0FBQUEsV0FBekIsQ0FBakI7O0FBQ0EsY0FBSUMsVUFBVSxDQUFDM0QsTUFBZixFQUF1QjtBQUNuQjtBQUNBLGdCQUFJOEQsU0FBUyxHQUFHcEUsT0FBTyxDQUFDcUUsV0FBUixDQUFvQixHQUFwQixDQUFoQjtBQUNBeEUsaUJBQUssQ0FBQ0ksS0FBTixHQUFjRCxPQUFPLENBQUNzRSxTQUFSLENBQWtCLENBQWxCLEVBQXFCRixTQUFyQixJQUFrQyxHQUFsQyxHQUF3Q0gsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjL0QsTUFBcEU7QUFDSDtBQUNKO0FBQ0o7QUFDSixLQWpMa0I7O0FBQUEsVUFtTG5CcUUsbUJBbkxtQixHQW1MRyxZQUFNO0FBQ3hCLFVBQUksTUFBS3BMLEtBQUwsQ0FBVzBLLFFBQWYsRUFBeUI7QUFDckIsY0FBSy9KLFFBQUwsQ0FBYztBQUFFK0osa0JBQVEsRUFBRTtBQUFaLFNBQWQ7O0FBQ0EvRCxnQkFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLEVBQXlDRSxLQUF6QyxHQUFpRCxFQUFqRDtBQUNIO0FBQ0osS0F4TGtCOztBQUFBLFVBMExuQnVFLGlCQTFMbUIsR0EwTEMsVUFBVUMsVUFBVixFQUFzQjtBQUN0QztBQUNBQSxnQkFBVSxDQUFDQyxLQUFYLEdBQW1CLEdBQW5CLENBRnNDLENBR3RDOztBQUNBLFVBQUlDLFlBQVksR0FBRzdFLFFBQVEsQ0FBQzhFLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbkI7QUFDQUQsa0JBQVksQ0FBQ0UsU0FBYixHQUF5QiwwQkFBekI7O0FBQ0FGLGtCQUFZLENBQUNHLE9BQWIsR0FBdUIsWUFBWTtBQUMvQixhQUFLQyxNQUFMO0FBQ0gsT0FGRDs7QUFHQUosa0JBQVksQ0FBQ0ssV0FBYixDQUF5QlAsVUFBekI7QUFDQTNFLGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixpQkFBeEIsRUFBMkNpRixXQUEzQyxDQUF1REwsWUFBdkQ7QUFDSCxLQXJNa0I7O0FBQUEsVUFzTW5CTSxhQXRNbUIsR0FzTUgsVUFBQUMsSUFBSSxFQUFJO0FBRXBCOU8sYUFBTyxDQUFDQyxHQUFSLENBQWE2TyxJQUFiO0FBQ0EsVUFBSUMsUUFBUSxHQUFHLE1BQUtYLGlCQUFwQixDQUhvQixDQUlwQjs7QUFDQVksa0ZBQWdCLENBQUNGLElBQUQsQ0FBaEIsQ0FMb0IsQ0FNcEI7O0FBQ0EsVUFBSUcsR0FBRyxHQUFHLElBQUlDLEtBQUosRUFBVixDQVBvQixDQVFwQjs7QUFDQUQsU0FBRyxDQUFDRSxNQUFKLEdBQWEsWUFBWTtBQUNyQjtBQUNBSixnQkFBUSxDQUFDLElBQUQsQ0FBUjtBQUNILE9BSEQsQ0FUb0IsQ0FhcEI7OztBQUNBLFVBQUlLLE1BQU0sR0FBR0MsTUFBTSxDQUFDeEUsR0FBUCxJQUFjd0UsTUFBTSxDQUFDQyxTQUFsQyxDQWRvQixDQWVwQjtBQUNBOztBQUNBLFVBQUk7QUFDQUwsV0FBRyxDQUFDTSxHQUFKLEdBQVVILE1BQU0sQ0FBQ0ksZUFBUCxDQUF1QlYsSUFBdkIsQ0FBVjtBQUNILE9BRkQsQ0FFRSxPQUFPVyxLQUFQLEVBQWM7QUFDWnpQLGVBQU8sQ0FBQ0MsR0FBUixDQUFZd1AsS0FBWjtBQUNIO0FBQ0osS0E1TmtCOztBQUFBLFVBNk5uQkMsWUE3Tm1CLEdBNk5KLFVBQUFaLElBQUksRUFBSTtBQUVuQixVQUFJQyxRQUFRLEdBQUcsTUFBS1gsaUJBQXBCLENBRm1CLENBR25COztBQUNBWSxrRkFBZ0IsQ0FBQ0YsSUFBRCxDQUFoQixDQUptQixDQUtuQjs7QUFDQSxVQUFJRyxHQUFHLEdBQUcsSUFBSUMsS0FBSixFQUFWLENBTm1CLENBT25COztBQUNBRCxTQUFHLENBQUNFLE1BQUosR0FBYSxZQUFZO0FBQ3JCO0FBQ0FKLGdCQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0gsT0FIRCxDQVJtQixDQVluQjs7O0FBQ0EsVUFBSUssTUFBTSxHQUFHQyxNQUFNLENBQUN4RSxHQUFQLElBQWN3RSxNQUFNLENBQUNDLFNBQWxDLENBYm1CLENBY25CO0FBQ0E7O0FBQ0EsVUFBSTtBQUNBTCxXQUFHLENBQUNNLEdBQUosR0FBVWxFLHdEQUFNLENBQUNULFVBQVAsQ0FBa0JDLEdBQWxCLEdBQXdCLG1CQUFsQztBQUNILE9BRkQsQ0FFRSxPQUFPNEUsS0FBUCxFQUFjO0FBQ1p6UCxlQUFPLENBQUNDLEdBQVIsQ0FBWXdQLEtBQVo7QUFDSDtBQUNKLEtBbFBrQjs7QUFBQSxVQW1QbkJFLGdDQW5QbUIsR0FtUGdCLFVBQUNDLFVBQUQsRUFBZ0I7QUFDL0MsVUFBSWIsUUFBUSxHQUFHLE1BQUtYLGlCQUFwQjs7QUFDQSxVQUFJLENBQUN3QixVQUFVLENBQUNDLGFBQWhCLEVBQStCO0FBQzNCLFlBQUksT0FBT2QsUUFBUCxJQUFtQixVQUF2QixFQUFtQztBQUMvQjtBQUNBQSxrQkFBUSxDQUFDZSxTQUFELENBQVI7QUFDSDtBQUNKOztBQUNELFVBQUlDLEtBQUssR0FBR0gsVUFBVSxDQUFDQyxhQUFYLENBQXlCRSxLQUFyQzs7QUFDQSxVQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNSLFlBQUksT0FBT2hCLFFBQVAsSUFBbUIsVUFBdkIsRUFBbUM7QUFDL0I7QUFDQUEsa0JBQVEsQ0FBQ2UsU0FBRCxDQUFSO0FBQ0g7QUFDSjs7QUFDRCxXQUFLLElBQUlFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELEtBQUssQ0FBQzdGLE1BQTFCLEVBQWtDOEYsQ0FBQyxFQUFuQyxFQUF1QztBQUNuQztBQUNBLFlBQUlELEtBQUssQ0FBQ0MsQ0FBRCxDQUFMLENBQVM5UCxJQUFULENBQWMrUCxPQUFkLENBQXNCLE9BQXRCLEtBQWtDLENBQUMsQ0FBdkMsRUFBMEM7QUFFMUMsWUFBSW5CLElBQUksR0FBR2lCLEtBQUssQ0FBQ0MsQ0FBRCxDQUFMLENBQVNFLFNBQVQsRUFBWDs7QUFDQSxjQUFLckIsYUFBTCxDQUFvQkMsSUFBcEI7QUFDSDtBQUNKLEtBelFrQjs7QUFBQSxVQTBRbkJxQixhQTFRbUIsR0EwUUgsVUFBQzNHLEtBQUQsRUFBVztBQUN2QixVQUFJNEcsTUFBTSxHQUFHMUcsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWI7O0FBQ0EsVUFBSXlHLE1BQUosRUFBWTtBQUNSQSxjQUFNLENBQUN0RCxTQUFQLENBQWlCdUQsR0FBakIsQ0FBcUIsV0FBckI7QUFDSDtBQUNKLEtBL1FrQjs7QUFBQSxVQWdSbkJDLG1CQWhSbUIsR0FnUkcsWUFBTTtBQUV4QjtBQUNBNUcsY0FBUSxDQUFDQyxjQUFULENBQXdCLHFCQUF4QixFQUErQ21ELFNBQS9DLENBQXlEdUQsR0FBekQsQ0FBNkQscUJBQTdELEVBSHdCLENBS3hCOztBQUx3QixVQU1sQjdQLElBTmtCLEdBTVQsTUFBS3NDLEtBTkksQ0FNbEJ0QyxJQU5rQjs7QUFPeEIsVUFBSTZMLFdBQVcsR0FBRyxNQUFLdkosS0FBTCxDQUFXdUIsUUFBWCxDQUFvQmlDLElBQXBCLENBQXlCLFVBQUFDLE9BQU8sRUFBSTtBQUNsRCxlQUFPQSxPQUFPLENBQUNDLFFBQVIsSUFBb0IsSUFBM0I7QUFDSCxPQUZpQixDQUFsQjs7QUFHQSxVQUFJOEYsU0FBUyxHQUFHRCxXQUFXLENBQUM1SyxFQUE1QjtBQUNBLFVBQUl1QyxXQUFXLEdBQUd4RCxJQUFJLENBQUN1RCxNQUFMLENBQVlDLFdBQTlCO0FBQ0EsVUFBSW1JLE1BQU0sR0FBRyxNQUFLckosS0FBTCxDQUFXSyxNQUF4QjtBQUVBb04sNEZBQTBCLENBQUVqRSxTQUFGLEVBQWF0SSxXQUFiLEVBQTBCbUksTUFBMUIsQ0FBMUI7QUFDSCxLQS9Sa0I7O0FBQUEsVUFnU25CcUUsVUFoU21CLEdBZ1NOLFlBQU07QUFDZjlHLGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQzhHLEtBQXRDO0FBQ0gsS0FsU2tCOztBQUFBLFVBb1NuQkMsUUFwU21CLEdBb1NSLFlBQU07QUFHYixVQUFJNUIsSUFBSSxHQUFHcEYsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLEVBQXNDZ0gsS0FBdEMsQ0FBNEMsQ0FBNUMsQ0FBWDtBQUNBLFVBQUlDLE1BQU0sR0FBRyw0Q0FBYjs7QUFDQSxVQUFHQSxNQUFNLENBQUNDLElBQVAsQ0FBWS9CLElBQUksQ0FBQ2dDLElBQWpCLENBQUgsRUFBMEI7QUFFdEIsY0FBS2pDLGFBQUwsQ0FBb0JDLElBQXBCOztBQUNBLGVBQU8sS0FBUDtBQUNIOztBQUNELFVBQUk4QixNQUFNLEdBQUcsMkNBQWI7O0FBQ0EsVUFBR0EsTUFBTSxDQUFDQyxJQUFQLENBQVkvQixJQUFJLENBQUNnQyxJQUFqQixDQUFILEVBQTBCO0FBRXRCLGNBQUtwQixZQUFMLENBQW1CWixJQUFuQjs7QUFDQSxlQUFPLEtBQVA7QUFDSDs7QUFDRGlDLFdBQUssQ0FBQywrQkFBRCxDQUFMO0FBQ0gsS0FyVGtCOztBQUdmLFVBQUtoTyxLQUFMLEdBQWE7QUFBRTBLLGNBQVEsRUFBRTtBQUFaLEtBQWI7QUFDQSxVQUFLdkMsaUJBQUwsR0FBeUIsTUFBS0EsaUJBQUwsQ0FBdUI4RixJQUF2QiwrQkFBekI7QUFKZTtBQUtsQjs7Ozt3Q0FFbUI7QUFDaEIsVUFBSUMsR0FBRyxHQUFHLElBQVY7QUFDQTVCLFlBQU0sQ0FBQzZCLGdCQUFQLENBQ0ksT0FESixFQUVJLFVBQVUxSCxLQUFWLEVBQWlCO0FBQ2I7QUFDQXlILFdBQUcsQ0FBQ3RCLGdDQUFKLENBQXFDbkcsS0FBckM7QUFDSCxPQUxMLEVBTUksS0FOSjtBQVNIOzs7eUNBRW1CO0FBQUEsVUFFVm5GLFFBRlUsR0FFRyxLQUFLdkIsS0FGUixDQUVWdUIsUUFGVTtBQUdoQixVQUFJNkUsaUJBQWlCLEdBQUc3RSxRQUFRLENBQUNpQyxJQUFULENBQWMsVUFBQUMsT0FBTztBQUFBLGVBQUlBLE9BQU8sQ0FBQ0MsUUFBWjtBQUFBLE9BQXJCLENBQXhCO0FBRUEsVUFBSTJELFFBQVEsR0FBR2pCLGlCQUFpQixJQUFJQSxpQkFBaUIsQ0FBQ2pJLE9BQXRELENBTGdCLENBT2hCOztBQUVBLFVBQUlrUSxTQUFTLEdBQUd6SCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IscUJBQXhCLENBQWhCO0FBQ0EsVUFBSXlILFNBQVMsR0FBRzFILFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixxQkFBeEIsQ0FBaEIsQ0FWZ0IsQ0FXaEI7O0FBQ0EsVUFBSXlILFNBQVMsSUFBSUQsU0FBYixJQUEwQkEsU0FBUyxDQUFDRSxZQUFWLElBQTBCRixTQUFTLENBQUM3RyxZQUFsRSxFQUErRTtBQUMzRWdILDRGQUF3QixDQUFDbkgsUUFBRCxFQUFXakIsaUJBQVgsQ0FBeEI7QUFDSCxPQUZELE1BRU0sSUFDRmlJLFNBQVMsSUFDVEMsU0FEQSxJQUVBQSxTQUFTLENBQUN0RSxTQUFWLENBQW9CQyxRQUFwQixDQUE2QixxQkFBN0IsQ0FIRSxFQUdrRDtBQUVoRHJELGdCQUFRLENBQUNDLGNBQVQsQ0FBd0IscUJBQXhCLEVBQStDNEgsU0FBL0MsR0FBMkQ3SCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IscUJBQXhCLEVBQStDMEgsWUFBMUc7O0FBQ0EsWUFBSXRMLDZDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4Qm1FLE1BQWxDLEVBQTBDO0FBQ3RDbkUsdURBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCeUwsR0FBOUIsQ0FBa0MsTUFBbEMsRUFBMEMsWUFBVztBQUVqRCxnQkFBRzlILFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixxQkFBeEIsQ0FBSCxFQUFrRDtBQUU5Q0Qsc0JBQVEsQ0FBQ0MsY0FBVCxDQUF3QixxQkFBeEIsRUFBK0M0SCxTQUEvQyxHQUEyRDdILFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixxQkFBeEIsRUFBK0MwSCxZQUExRztBQUNIO0FBQ0osV0FORDtBQU9IO0FBRVI7QUFDSjs7OzZCQXFRUTtBQUNMLFVBQUksQ0FBQyxLQUFLdk8sS0FBTCxDQUFXdEMsSUFBWixJQUFvQixDQUFDLEtBQUtzQyxLQUFMLENBQVcvQyxNQUFoQyxJQUEwQyxDQUFDLEtBQUsrQyxLQUFMLENBQVd1QixRQUFYLENBQW9CNkYsTUFBbkUsRUFBMkU7QUFDdkUsZUFBTyxJQUFQO0FBQ0g7O0FBSEksVUFJQzdGLFFBSkQsR0FJYyxLQUFLdkIsS0FKbkIsQ0FJQ3VCLFFBSkQ7QUFLTCxVQUFJNkUsaUJBQWlCLEdBQUc3RSxRQUFRLENBQUNpQyxJQUFULENBQWMsVUFBQUMsT0FBTztBQUFBLGVBQUlBLE9BQU8sQ0FBQ0MsUUFBWjtBQUFBLE9BQXJCLENBQXhCO0FBRUEsMEJBQ0k7QUFBSyxVQUFFLEVBQUMscUJBQVI7QUFBOEIsaUJBQVMsRUFBQztBQUF4QyxzQkFDSSwyREFBQyw4REFBRDtBQUFtQixjQUFNLEVBQUUwQztBQUEzQixRQURKLGVBRUk7QUFBSyxVQUFFLEVBQUMsaUJBQVI7QUFBMEIsaUJBQVMsRUFBQztBQUFwQyxRQUZKLGVBR0ksMkRBQUMsNERBQUQsT0FISixlQUlJO0FBQ0ksaUJBQVMsRUFBQyx3Q0FEZDtBQUVJLGVBQU8sRUFBRyxLQUFLc0g7QUFGbkIsUUFKSixlQVFJO0FBQU8sVUFBRSxFQUFDLFlBQVY7QUFBdUIsWUFBSSxFQUFDLE1BQTVCO0FBQW1DLGlCQUFTLEVBQUMsUUFBN0M7QUFBc0QsY0FBTSxFQUFDLHlDQUE3RDtBQUF1RyxnQkFBUSxFQUFHLEtBQUtFO0FBQXZILFFBUkosZUFTSTtBQUNJLGlCQUFTLEVBQUMsdUNBRGQ7QUFFSSxlQUFPLEVBQUUsS0FBS1A7QUFGbEIsUUFUSixlQWFJO0FBQ0ksVUFBRSxFQUFDLGVBRFA7QUFFSSxpQkFBUyxFQUFFLEtBQUs5QyxxQkFGcEI7QUFHSSxlQUFPLEVBQUUsS0FBS2MsbUJBSGxCO0FBSUksZUFBTyxFQUFFLEtBQUttQyxtQkFKbEI7QUFLSSxtQkFBVyxFQUFDO0FBTGhCLFFBYkosZUFvQkk7QUFBRyxpQkFBUyxFQUFDLGtDQUFiO0FBQWdELGVBQU8sRUFBRSxLQUFLN0Q7QUFBOUQsUUFwQkosZUFxQkk7QUFBRyxpQkFBUyxFQUFDLDZDQUFiO0FBQTJELGVBQU8sRUFBRSxLQUFLRDtBQUF6RSxRQXJCSixlQXNCSSwyREFBQyxzREFBRCxPQXRCSixlQXVCSSwyREFBQyxvREFBRCxPQXZCSixDQURKO0FBMkJIOzs7O0VBM1Z1QnRJLCtDOztBQTZWNUIsSUFBSUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDcEIsS0FBRCxFQUFXO0FBQzdCLFNBQU87QUFDSHZDLFFBQUksRUFBTXVDLEtBQUssQ0FBQ3FCLEtBRGI7QUFFSGpCLFVBQU0sRUFBSUosS0FBSyxDQUFDSSxNQUZiO0FBR0hrQixZQUFRLEVBQUV0QixLQUFLLENBQUNzQixRQUhiO0FBSUh0RSxVQUFNLEVBQUlnRCxLQUFLLENBQUNoRDtBQUpiLEdBQVA7QUFNSCxDQVBEOztBQVFldUUsMEhBQU8sQ0FBQ0gsZUFBRCxDQUFQLENBQXlCOEcsYUFBekIsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwWEE7QUFDQTtBQUNBOztJQUVNd0csUzs7Ozs7QUFDRixxQkFBWTNPLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2QkFDVEEsS0FEUztBQUdsQjs7Ozs2QkFDUTtBQUNMLDBCQUNJO0FBQUssVUFBRSxFQUFDLFdBQVI7QUFBb0IsaUJBQVMsRUFBQztBQUE5QixTQUNLdUksd0RBQU0sQ0FBQ0MsTUFBUCxDQUFjN0csR0FBZCxDQUFrQixVQUFDcUosSUFBRDtBQUFBLDRCQUNmLDJEQUFDLGtEQUFEO0FBQU8sYUFBRyxFQUFFQSxJQUFJLENBQUNDLElBQWpCO0FBQXVCLGdCQUFNLEVBQUVELElBQUksQ0FBQ2hFLE1BQXBDO0FBQTRDLGNBQUksRUFBRWdFLElBQUksQ0FBQ0M7QUFBdkQsVUFEZTtBQUFBLE9BQWxCLENBREwsQ0FESjtBQU9IOzs7O0VBYm1CN0osK0M7O0FBZVR1Tix3RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1DLFc7Ozs7Ozs7Ozs7Ozs7eUNBR21CO0FBQUEsVUFFWDdRLFFBRlcsR0FFRSxLQUFLaUMsS0FGUCxDQUVYakMsUUFGVztBQUdqQixVQUFJcUksaUJBQWlCLEdBQUdySSxRQUFRLENBQUN5RixJQUFULENBQWMsVUFBQUMsT0FBTztBQUFBLGVBQUlBLE9BQU8sQ0FBQ0MsUUFBWjtBQUFBLE9BQXJCLENBQXhCO0FBRUEsVUFBSTJELFFBQVEsR0FBR2pCLGlCQUFpQixJQUFJQSxpQkFBaUIsQ0FBQ2pJLE9BQXREO0FBRUEsVUFBSTBRLFVBQVUsR0FBS2pJLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixxQkFBeEIsQ0FBbkI7O0FBQ0EsVUFBR2dJLFVBQUgsRUFBYztBQUVWNUwscURBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCNEIsRUFBMUIsQ0FBNkIsUUFBN0IsRUFBdUMsWUFBVTtBQUM3Q2lLLHlGQUFtQixDQUFDLElBQUQsRUFBT3pILFFBQVAsRUFBaUJqQixpQkFBakIsQ0FBbkI7QUFDSCxTQUZEO0FBR0g7QUFDSjs7OzZCQUVRO0FBQUEsVUFFQ3JJLFFBRkQsR0FFYyxLQUFLaUMsS0FGbkIsQ0FFQ2pDLFFBRkQ7QUFHTCxVQUFJcUksaUJBQWlCLEdBQUdySSxRQUFRLENBQUN5RixJQUFULENBQWMsVUFBQUMsT0FBTztBQUFBLGVBQUlBLE9BQU8sQ0FBQ0MsUUFBWjtBQUFBLE9BQXJCLENBQXhCO0FBRUEsVUFBSTJELFFBQVEsR0FBR2pCLGlCQUFpQixJQUFJQSxpQkFBaUIsQ0FBQ2pJLE9BQXREO0FBRUEsMEJBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0ksMkRBQUMscURBQUQsT0FESixlQUVJO0FBQUssaUJBQVMsRUFBQyxzQkFBZjtBQUFzQyxVQUFFLEVBQUM7QUFBekMsU0FDS2tKLFFBQVEsSUFBSUEsUUFBUSxDQUFDMUYsR0FBVCxDQUNULFVBQUN4RCxPQUFELEVBQVU0USxHQUFWO0FBQUEsNEJBQ0ksMkRBQUMsd0RBQUQ7QUFDSSxhQUFHLEVBQUUsaUJBQWlCQSxHQUFqQixHQUF1QjNJLGlCQUFpQixDQUFDekgsRUFEbEQ7QUFFSSxpQkFBTyxFQUFFUixPQUZiO0FBR0ksMkJBQWlCLEVBQUVpSTtBQUh2QixVQURKO0FBQUEsT0FEUyxDQURqQixDQUZKLGVBWUksMkRBQUMsMERBQUQsT0FaSixDQURKO0FBZ0JIOzs7O0VBMUNxQmhGLCtDOztBQTRDMUIsSUFBSUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDcEIsS0FBRCxFQUFXO0FBQzdCLFNBQU87QUFDSGxDLFlBQVEsRUFBRWtDLEtBQUssQ0FBQ3NCO0FBRGIsR0FBUDtBQUdILENBSkQ7O0FBS2VDLDBIQUFPLENBQUNILGVBQUQsQ0FBUCxDQUF5QnVOLFdBQXpCLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUNBO0FBQ0E7O0lBRU1JLFE7Ozs7Ozs7Ozs7Ozs7NkJBRU87QUFDTDtBQURLLFVBRUNDLGFBRkQsR0FFbUIsS0FBS2pQLEtBRnhCLENBRUNpUCxhQUZEO0FBSUwsMEJBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDTUEsYUFBYSxJQUFJQSxhQUFhLENBQUN0TixHQUFkLENBQWtCLFVBQUE4QixPQUFPO0FBQUEsNEJBQUksMkRBQUMscURBQUQ7QUFBVSxhQUFHLEVBQUVBLE9BQU8sQ0FBQzlFLEVBQXZCO0FBQTJCLGlCQUFPLEVBQUU4RTtBQUFwQyxVQUFKO0FBQUEsT0FBekIsQ0FEdkIsQ0FESjtBQUtIOzs7O0VBWGtCckMsK0M7O0FBZVI0Tix1RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUUsVzs7Ozs7Ozs7Ozs7Ozs2QkFFTztBQUFBLHdCQUNzQyxLQUFLbFAsS0FEM0M7QUFBQSxVQUNDVyxJQURELGVBQ0NBLElBREQ7QUFBQSxVQUNPeEMsT0FEUCxlQUNPQSxPQURQO0FBQUEsVUFDZ0JpSSxpQkFEaEIsZUFDZ0JBLGlCQURoQjtBQUdMLFVBQUkrSSxNQUFNLEdBQUc7QUFBRW5ILGNBQU0sRUFBRyxFQUFYO0FBQWVnRyxZQUFJLEVBQUU7QUFBckIsT0FBYjs7QUFDQSxVQUFJck4sSUFBSSxJQUFJQSxJQUFJLENBQUNoQyxFQUFqQixFQUFxQjtBQUNqQndRLGNBQU0sQ0FBQ25ILE1BQVAsR0FBZ0JySCxJQUFJLENBQUNxSCxNQUFyQjtBQUNBbUgsY0FBTSxDQUFDbkIsSUFBUCxHQUFnQnJOLElBQUksQ0FBQ3NILFVBQUwsR0FBa0IsR0FBbEIsR0FBd0J0SCxJQUFJLENBQUN1SCxTQUE3QztBQUNIOztBQUVELFVBQUksQ0FBQzlCLGlCQUFMLEVBQXdCO0FBQ3BCLGVBQU8sSUFBUDtBQUNIOztBQUNELFVBQUlnSixRQUFRLEdBQUdoSixpQkFBaUIsQ0FBQzFJLElBQWpDOztBQUVBLFVBQUksQ0FBQ1MsT0FBTyxDQUFDZixJQUFiLEVBQW1CO0FBQ2YsWUFBSWlTLFdBQVcsR0FBRyxlQUFsQjtBQUNILE9BRkQsTUFFTztBQUNILFlBQUlBLFdBQVcsR0FBRyxzQkFBbEI7QUFDQUQsZ0JBQVEsR0FBR0QsTUFBWDtBQUNIOztBQW5CSSxVQW9CQzdILEtBcEJELEdBb0JXbkosT0FwQlgsQ0FvQkNtSixLQXBCRDtBQXNCTCxVQUFJZ0ksYUFBYSxHQUFHLEtBQUssRUFBTCxHQUFVLEVBQVYsR0FBZSxJQUFuQztBQUlBLDBCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUVJO0FBQUssaUJBQVMsRUFBRUQsV0FBVyxHQUFHO0FBQTlCLHNCQUNJO0FBQVEsaUJBQVMsRUFBQztBQUFsQixzQkFDSTtBQUFLLFdBQUcsRUFBRXhQLCtDQUFNLENBQUNpSSxVQUFQLENBQWtCQyxHQUFsQixHQUF3QnFILFFBQVEsQ0FBQ3BILE1BQTNDO0FBQW1ELFdBQUcsRUFBQztBQUF2RCxRQURKLENBREosZUFJSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUVRVixLQUFLLElBQUksT0FBVCxpQkFDQTtBQUFLLGlCQUFTLEVBQUVBO0FBQWhCLFNBRVFuSixPQUFPLENBQUNrSyxVQUFSLENBQW1CMUcsR0FBbkIsQ0FBdUIsVUFBRTROLGFBQUYsRUFBa0JDLEtBQWxCLEVBQTRCO0FBQy9DLFlBQUlELGFBQWEsQ0FBQ25TLElBQWQsSUFBc0IsS0FBMUIsRUFBaUM7QUFFN0IsY0FBSW1TLGFBQWEsQ0FBQ2xGLElBQWQsSUFBc0JrRixhQUFhLENBQUNsRixJQUFkLEdBQXFCaUYsYUFBckIsR0FBc0MsSUFBSXZHLElBQUosRUFBRCxDQUFXQyxPQUFYLEVBQS9ELEVBQXFGO0FBQ2pGLGdDQUNJO0FBQUssaUJBQUcsRUFBRSx1QkFBdUJ3RyxLQUF2QixHQUErQkQsYUFBYSxDQUFDcEYsR0FBdkQ7QUFBNkQsdUJBQVMsRUFBQztBQUF2RSw0QkFDSTtBQUFLLGlCQUFHLEVBQUV0SywrQ0FBTSxDQUFDaUksVUFBUCxDQUFrQkMsR0FBbEIsR0FBd0J3SCxhQUFhLENBQUNwRjtBQUFoRCxjQURKLGVBRUk7QUFBRyx1QkFBUyxFQUFDLDBCQUFiO0FBQXdDLGtCQUFJLEVBQUd0SywrQ0FBTSxDQUFDaUksVUFBUCxDQUFrQkMsR0FBbEIsR0FBd0J3SCxhQUFhLENBQUNwRixHQUFyRjtBQUEyRixvQkFBTSxFQUFDLFFBQWxHO0FBQTJHLHNCQUFRO0FBQW5ILDRCQUNJO0FBQUcsdUJBQVMsRUFBQztBQUFiLGNBREosQ0FGSixDQURKO0FBUUg7QUFDSjs7QUFDRCw0QkFDSTtBQUFLLGFBQUcsRUFBRSx1QkFBdUJxRixLQUF2QixHQUErQjNQLCtDQUFNLENBQUNpSSxVQUFQLENBQWtCQyxHQUFqRCxHQUF1RCxtQkFBakU7QUFBdUYsbUJBQVMsRUFBQztBQUFqRyx3QkFDSTtBQUFLLGFBQUcsRUFBR2xJLCtDQUFNLENBQUNpSSxVQUFQLENBQWtCQyxHQUFsQixHQUF3QjtBQUFuQyxVQURKLGVBRUk7QUFBRyxtQkFBUyxFQUFDLDBCQUFiO0FBQXdDLGNBQUksRUFBR2xJLCtDQUFNLENBQUNpSSxVQUFQLENBQWtCQyxHQUFsQixHQUF3QndILGFBQWEsQ0FBQ3BGLEdBQXJGO0FBQTJGLGdCQUFNLEVBQUMsUUFBbEc7QUFBMkcsa0JBQVE7QUFBbkgsd0JBQ0k7QUFBRyxtQkFBUyxFQUFDO0FBQWIsVUFESixDQUZKLENBREo7QUFRSCxPQXRCRCxDQUZSLENBSFIsZUErQkk7QUFBSyxpQkFBUyxFQUFFN0MsS0FBSyxHQUFHO0FBQXhCLFNBQW1DbkosT0FBTyxDQUFDMkksT0FBM0MsQ0EvQkosZUFnQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FFUSxDQUFDM0ksT0FBTyxDQUFDZixJQUFULEtBRUksQ0FBQ2UsT0FBTyxDQUFDc1IsSUFBVCxnQkFDQTtBQUFHLGlCQUFTLEVBQUM7QUFBYixRQURBLGdCQUdBO0FBQUcsaUJBQVMsRUFBQztBQUFiLFFBTEosQ0FGUixDQWhDSixDQUpKLENBRkosQ0FESjtBQXVESDs7OztFQW5GcUJyTywrQzs7QUFzRjFCLElBQUlDLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ3BCLEtBQUQsRUFBVztBQUM3QixTQUFPO0FBQ0hVLFFBQUksRUFBTVYsS0FBSyxDQUFDcUI7QUFEYixHQUFQO0FBR0gsQ0FKRDs7QUFLZUUsMEhBQU8sQ0FBQ0gsZUFBRCxDQUFQLENBQXlCNk4sV0FBekIsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEdBOztJQUNNUSxpQjs7Ozs7Ozs7Ozs7Ozs2QkFDTztBQUFBLFVBQ0NDLE1BREQsR0FDWSxLQUFLM1AsS0FEakIsQ0FDQzJQLE1BREQ7O0FBRUwsVUFBSSxDQUFDQSxNQUFMLEVBQWE7QUFDVCxlQUFPLElBQVA7QUFDSDs7QUFDRCxVQUFJQyxZQUFZLEdBQUdELE1BQW5CO0FBQ0EsVUFBSUUsVUFBVSxHQUFHRCxZQUFZLENBQUNsUyxJQUE5QjtBQUNBLFVBQUkyUixXQUFXLEdBQUcsYUFBbEI7QUFDQSwwQkFDSTtBQUFLLFVBQUUsRUFBQyxXQUFSO0FBQW9CLGlCQUFTLEVBQUMsNkNBQTlCO0FBQTRFLGVBQU8sRUFBRU0sTUFBTSxDQUFDaFI7QUFBNUYsc0JBQ0k7QUFBSyxpQkFBUyxFQUFFMFEsV0FBVyxHQUFHO0FBQTlCLHNCQUVJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUVJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQU0saUJBQVMsRUFBQztBQUFoQixTQUErQlEsVUFBVSxDQUFDNUgsVUFBWCxJQUF5QjRILFVBQVUsQ0FBQzNILFNBQVgsR0FBdUIsWUFBL0UsQ0FESixlQUVJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLFFBREosZUFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixRQUZKLGVBR0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsUUFISixDQURKLENBRkosQ0FGSixDQUZKLENBREosQ0FESjtBQXFCSDs7OztFQTlCMkI5RywrQzs7QUFnQ2pCc08sZ0ZBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBOztJQUVNSSxXOzs7Ozs7Ozs7Ozs7OzZCQUVPO0FBQ0w1UyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWjtBQUNBLFVBQUk0UyxLQUFLLEdBQUc7QUFBRS9ILGNBQU0sRUFBRSxFQUFWO0FBQWNnRyxZQUFJLEVBQUU7QUFBcEIsT0FBWjtBQUZLLFVBR0NyTixJQUhELEdBR1UsS0FBS1gsS0FIZixDQUdDVyxJQUhEOztBQUlMLFVBQUlBLElBQUksSUFBSUEsSUFBSSxDQUFDaEMsRUFBakIsRUFBcUI7QUFDakJvUixhQUFLLENBQUMvSCxNQUFOLEdBQWVySCxJQUFJLENBQUNxSCxNQUFwQjtBQUNBK0gsYUFBSyxDQUFDL0IsSUFBTixHQUFhck4sSUFBSSxDQUFDc0gsVUFBTCxHQUFrQixHQUFsQixHQUF3QnRILElBQUksQ0FBQ3VILFNBQTFDO0FBQ0g7O0FBRUQsMEJBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBUSxpQkFBUyxFQUFDO0FBQWxCLHNCQUNJO0FBQUssV0FBRyxFQUFHckksK0NBQU0sQ0FBQ2lJLFVBQVAsQ0FBa0JDLEdBQWxCLEdBQXdCZ0ksS0FBSyxDQUFDL0gsTUFBekM7QUFBa0QsV0FBRyxFQUFDO0FBQXRELFFBREosQ0FESixlQUlJO0FBQU0saUJBQVMsRUFBQztBQUFoQixTQUF3QitILEtBQUssQ0FBQy9CLElBQTlCLENBSkosQ0FESixDQURKLGVBU0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0ksMkRBQUMscURBQUQ7QUFBVSxxQkFBYSxFQUFFLEtBQUtoTyxLQUFMLENBQVdpUDtBQUFwQyxRQURKLENBVEosQ0FESjtBQWVIOzs7O0VBMUJxQjdOLCtDOztBQTRCMUIsSUFBSUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDcEIsS0FBRCxFQUFXO0FBQzdCLFNBQU87QUFDSFUsUUFBSSxFQUFFVixLQUFLLENBQUNxQixLQURUO0FBRUgyTixpQkFBYSxFQUFFaFAsS0FBSyxDQUFDc0I7QUFGbEIsR0FBUDtBQUlILENBTEQ7O0FBTWVDLDBIQUFPLENBQUNILGVBQUQsQ0FBUCxDQUF5QnlPLFdBQXpCLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTs7SUFDTUUsUTs7Ozs7Ozs7Ozs7Ozs7b0hBRUZDLGdCLEdBQW1CLFVBQUVDLENBQUYsRUFBTXZSLEVBQU4sRUFBYTtBQUU1QnVSLE9BQUMsQ0FBQ2xRLEtBQUYsQ0FBUXVGLFFBQVIsQ0FBaUI7QUFBRW5JLFlBQUksRUFBRUMsdURBQUksQ0FBQ3NDLElBQUwsQ0FBVUMsd0JBQWxCO0FBQTRDcEMsZUFBTyxFQUFFbUI7QUFBckQsT0FBakI7QUFDSCxLOzs7Ozs2QkFFUTtBQUFBOztBQUNELFVBQUU4RSxPQUFGLEdBQXFCLEtBQUt6RCxLQUExQixDQUFFeUQsT0FBRjtBQUFBLFVBQ0EwTSxpQkFEQSxHQUNxQjFNLE9BQU8sQ0FBQy9GLElBQVIsQ0FBYWdLLE1BQWIsR0FBc0IsVUFBdEIsR0FBbUMsRUFEeEQ7QUFBQSxVQUVBMEksa0JBRkEsR0FFcUIzTSxPQUFPLENBQUNDLFFBQVIsR0FBbUIsa0JBQW5CLEdBQXdDLEVBRjdEOztBQURDLGtDQUtZRCxPQUFPLENBQUN0RixPQUFSLENBQWdCa1MsS0FBaEIsQ0FBc0IsQ0FBQyxDQUF2QixDQUxaO0FBQUE7QUFBQSxVQUtBQyxRQUxBOztBQU9MLFVBQUlDLGNBQWMsR0FBRzlNLE9BQU8sQ0FBQ3RGLE9BQVIsQ0FBZ0JzSyxNQUFoQixDQUF1QixVQUFBdEssT0FBTztBQUFBLGVBQUksQ0FBQ0EsT0FBTyxDQUFDc1IsSUFBVCxJQUFpQixDQUFDdFIsT0FBTyxDQUFDZixJQUE5QjtBQUFBLE9BQTlCLEVBQW1FZ0ssTUFBeEY7QUFFQSwwQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFLLGlCQUFTLEVBQUUrSSxpQkFBaUIsR0FBR0Msa0JBQXBCLEdBQXlDLFdBQXpEO0FBQ0ksZUFBTyxFQUFFO0FBQUEsaUJBQU0sTUFBSSxDQUFDSCxnQkFBTCxDQUFzQixNQUF0QixFQUE0QnhNLE9BQU8sQ0FBQzlFLEVBQXBDLENBQU47QUFBQTtBQURiLHNCQUVJO0FBQVEsaUJBQVMsRUFBQztBQUFsQixzQkFDSTtBQUFLLFdBQUcsRUFBRWtCLCtDQUFNLENBQUNpSSxVQUFQLENBQWtCQyxHQUFsQixHQUF3QnRFLE9BQU8sQ0FBQy9GLElBQVIsQ0FBYXNLLE1BQS9DO0FBQXVELFdBQUcsRUFBQztBQUEzRCxRQURKLENBRkosZUFLSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFNLGlCQUFTLEVBQUM7QUFBaEIsU0FBd0J2RSxPQUFPLENBQUMvRixJQUFSLENBQWF1SyxVQUFiLEdBQTBCLEdBQTFCLEdBQWdDeEUsT0FBTyxDQUFDL0YsSUFBUixDQUFhd0ssU0FBckUsQ0FESixFQUVNb0ksUUFBUSxpQkFDTjtBQUFNLGlCQUFTLEVBQUM7QUFBaEIsU0FBZ0NBLFFBQVEsQ0FBQ3hKLE9BQXpDLENBSFIsQ0FMSixFQVlReUosY0FBYyxnQkFDZDtBQUFHLGlCQUFTLEVBQUM7QUFBYixTQUFrQ0EsY0FBbEMsQ0FEYyxHQUdkLElBZlIsQ0FESixDQURKO0FBc0JIOzs7O0VBdENrQm5QLCtDOztBQXdDUkksMEhBQU8sR0FBR3dPLFFBQUgsQ0FBdEIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBQ01RLEk7Ozs7O0FBRUYsZ0JBQVl4USxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkJBQ1RBLEtBRFM7QUFHbEI7Ozs7d0NBRW1CO0FBRWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0ksVUFBQXlRLFlBQVksR0FBTyxJQUFuQjtBQUFBLFVBQ0FDLGdCQURBLEdBQ21COUosUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLENBRG5CO0FBQUEsVUFFRXdDLE1BRkYsR0FFYSxLQUFLckosS0FGbEIsQ0FFRXFKLE1BRkY7O0FBSUosVUFBSXFILGdCQUFKLEVBQXNCO0FBQ2xCO0FBQ0EsWUFBSXZILE1BQU0sR0FBR3VILGdCQUFnQixDQUFDdEcsWUFBakIsQ0FBOEIsYUFBOUIsQ0FBYjtBQUFBLFlBQ0lwRyxNQUFNLEdBQUcwTSxnQkFBZ0IsQ0FBQ3RHLFlBQWpCLENBQThCLFdBQTlCLENBRGIsQ0FGa0IsQ0FLbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0EsWUFBSXBHLE1BQUosRUFBWTtBQUFFO0FBRVYyTSw0RkFBc0IsQ0FBRTNNLE1BQUYsRUFBVW1GLE1BQVYsRUFBa0JFLE1BQWxCLEVBQTBCb0gsWUFBMUIsQ0FBdEI7QUFDSDtBQUNKO0FBRUo7Ozs2QkFLUTtBQUNMdlQsYUFBTyxDQUFDQyxHQUFSLENBQVksaUJBQVo7QUFFQSwwQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSSwyREFBQyx3REFBRCxPQURKLGVBRUksMkRBQUMsd0RBQUQsT0FGSixDQURKLENBREosQ0FESjtBQVdIOzs7O0VBMURjaUUsK0M7O0FBNkRuQixJQUFJQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNwQixLQUFELEVBQVc7QUFDN0IsU0FBTztBQUNIb0osVUFBTSxFQUFTcEosS0FBSyxDQUFDSTtBQURsQixHQUFQO0FBR0gsQ0FKRDs7QUFLZW1CLDBIQUFPLENBQUNILGVBQUQsQ0FBUCxDQUF5Qm1QLElBQXpCLENBQWYsRSxDQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJOzs7Ozs7Ozs7Ozs7QUN0R0E7QUFBQSxJQUFJSSxLQUFLLEdBQVEsZ0JBQWpCO0FBQUEsSUFDSUMsUUFBUSxHQUFLLGdCQURqQjtBQUFBLElBRUlDLFVBQVUsR0FBRyxJQUZqQjtBQUFBLElBR0lDLFNBQVMsR0FBSSxJQUhqQjtBQUtlO0FBQ2JDLFFBQU0sRUFBRTtBQUNOQyxRQUFJLEVBQUVILFVBREE7QUFFTkksVUFBTSxFQUFFTixLQUZGO0FBR05PLE1BQUUsRUFBRU4sUUFIRTtBQUlOTyxhQUFTLEVBQUdMLFNBSk47QUFLTk0sWUFBUSxFQUFFLG9CQUFZO0FBQ3BCLFVBQUlQLFVBQVUsSUFBSSxHQUFsQixFQUF1QjtBQUNyQixlQUFPLFVBQVA7QUFDRDs7QUFDRCxhQUFPLFNBQVA7QUFDRCxLQVZLO0FBV05RLFNBQUssRUFBRSxpQkFBTTtBQUNYLFVBQUlDLFFBQVEsR0FBRyxFQUFmO0FBQ0EsVUFBSUMsUUFBUSxHQUFHLEVBQWY7O0FBQ0EsVUFBSVYsVUFBVSxJQUFJLEdBQWxCLEVBQXVCO0FBQ3JCVSxnQkFBUSxHQUFHLFVBQVg7QUFDRCxPQUZELE1BRU87QUFDTEEsZ0JBQVEsR0FBRyxTQUFYO0FBQ0FELGdCQUFRLEdBQUcsTUFBTVQsVUFBakI7QUFDRDs7QUFFRCxhQUFPVSxRQUFRLEdBQUdaLEtBQVgsR0FBbUJXLFFBQTFCO0FBQ0Q7QUF0QkssR0FESztBQXlCYjdPLFdBQVMsRUFBRTtBQUNUQyxVQUFNLEVBQUksQ0FERDtBQUVUQyxZQUFRLEVBQUUsQ0FGRDtBQUdUNk8sU0FBSyxFQUFLO0FBSEQsR0F6QkU7QUE4QmIzSixZQUFVLEVBQUU7QUFDVkMsT0FBRyxFQUFFO0FBREssR0E5QkM7QUFrQ2JTLFFBQU0sRUFBRSxDQUNOO0FBQUV4QixVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQURNLEVBRU47QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBRk0sRUFHTjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0FITSxFQUlOO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQUpNLEVBS047QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBTE0sRUFNTjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0FOTSxFQU9OO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQVBNLEVBUU47QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBUk0sRUFTTjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0FUTSxFQVVOO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQVZNLEVBV047QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBWE0sRUFZTjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0FaTSxFQWFOO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQWJNLEVBY047QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBZE0sRUFlTjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0FmTSxFQWdCTjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0FoQk0sRUFpQk47QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBakJNLEVBa0JOO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQWxCTSxFQW1CTjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0FuQk0sRUFvQk47QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBcEJNLEVBcUJOO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQXJCTSxFQXNCTjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0F0Qk0sRUF1Qk47QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBdkJNLEVBd0JOO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQXhCTSxFQXlCTjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0F6Qk0sRUEwQk47QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBMUJNLEVBMkJOO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQTNCTSxFQTRCTjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0E1Qk0sRUE2Qk47QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBN0JNLEVBOEJOO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQTlCTSxFQStCTjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0EvQk0sRUFnQ047QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBaENNLEVBaUNOO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQWpDTSxFQWtDTjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0FsQ00sRUFtQ047QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBbkNNLEVBb0NOO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQXBDTSxFQXFDTjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0FyQ00sRUFzQ047QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBdENNLEVBdUNOO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQXZDTSxFQXdDTjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0F4Q00sRUF5Q047QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBekNNLEVBMENOO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQTFDTSxFQTJDTjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0EzQ00sRUE0Q047QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBNUNNLEVBNkNOO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQTdDTSxFQThDTjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0E5Q00sRUErQ047QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBL0NNLEVBZ0ROO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQWhETSxFQWlETjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0FqRE0sRUFrRE47QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBbERNLEVBbUROO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQW5ETSxFQW9ETjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0FwRE0sRUFxRE47QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBckRNLEVBc0ROO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQXRETSxFQXVETjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0F2RE0sRUF3RE47QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBeERNLEVBeUROO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQXpETSxFQTBETjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0ExRE0sRUEyRE47QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBM0RNLEVBNEROO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQTVETSxFQTZETjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0E3RE0sRUE4RE47QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBOURNLEVBK0ROO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQS9ETSxFQWdFTjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0FoRU0sRUFpRU47QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBakVNLEVBa0VOO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQWxFTSxFQW1FTjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0FuRU07QUFsQ0ssQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU15RyxLQUFLLEdBQUdDLHlEQUFXLENBQUNDLGdEQUFELENBQXpCO0FBQ0FGLEtBQUssQ0FBQ0csU0FBTixDQUFnQixZQUFVO0FBQ3RCM1UsU0FBTyxDQUFDQyxHQUFSLENBQVksMkJBQVo7QUFDQUQsU0FBTyxDQUFDQyxHQUFSLENBQVl1VSxLQUFLLENBQUNJLFFBQU4sRUFBWjtBQUNILENBSEQ7O0FBSUEsSUFBSSxPQUFRQyxPQUFSLEtBQXFCLFdBQXpCLEVBQXNDO0FBQ2xDQyxrREFBUSxDQUFDQyxNQUFULGVBQ0ksMkRBQUMsb0RBQUQ7QUFBVSxTQUFLLEVBQUVQO0FBQWpCLGtCQUNJLDJEQUFDLHlEQUFELE9BREosQ0FESixFQUlFOUssUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLENBSkY7QUFLSCxDQU5ELE1BTUs7QUFDRG9ILE9BQUssQ0FBQyw0Q0FBRCxDQUFMO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0MxQkQ7O0FBQ0E7QUFHQTtDQU1BOztBQUNBLElBQUloUixNQUFNLEdBQVMsSUFBbkI7QUFBQSxJQUNJaVYsWUFBWSxHQUFHLElBRG5CO0FBQUEsSUFFSXpSLEtBQUssR0FBVUMsWUFGbkIsQyxDQUdBOztBQUVBNkwsTUFBTSxDQUFDWCxPQUFQLEdBQWlCLFVBQVVsRixLQUFWLEVBQWlCO0FBQzlCLE1BQUlBLEtBQUssQ0FBQ2dFLE1BQVYsRUFBa0I7QUFDZCxRQUFJaEUsS0FBSyxDQUFDZ0UsTUFBTixDQUFhVixTQUFiLENBQXVCQyxRQUF2QixDQUFnQyxpQkFBaEMsQ0FBSixFQUF3RDtBQUNwRDtBQUNIO0FBQ0o7O0FBQ0QsTUFBSXFELE1BQU0sR0FBRzFHLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFiOztBQUNBLE1BQUl5RyxNQUFKLEVBQVk7QUFDUkEsVUFBTSxDQUFDdEQsU0FBUCxDQUFpQjZCLE1BQWpCLENBQXdCLE1BQXhCO0FBQ0FzRyxjQUFVLENBQUMsWUFBWTtBQUNuQixVQUFJN0UsTUFBTSxDQUFDdEQsU0FBUCxDQUFpQkMsUUFBakIsQ0FBMEIsV0FBMUIsQ0FBSixFQUE0QztBQUN4Q3FELGNBQU0sQ0FBQ3RELFNBQVAsQ0FBaUI2QixNQUFqQixDQUF3QixXQUF4QjtBQUNBeUIsY0FBTSxDQUFDdEQsU0FBUCxDQUFpQnVELEdBQWpCLENBQXFCLE1BQXJCO0FBQ0g7QUFDSixLQUxTLEVBS1AsR0FMTyxDQUFWO0FBTUg7QUFDSixDQWhCRDs7QUFtQk8sU0FBU29ELHNCQUFULENBQWlDM00sTUFBakMsRUFBeUNtRixNQUF6QyxFQUFpREUsTUFBakQsRUFBeUQrSSxpQkFBekQsRUFBNkU7QUFDaEZsVixTQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWjs7QUFDQSxNQUFJdUUsSUFBSTtBQUFXc0MsVUFBTSxFQUFOQSxNQUFYO0FBQW1CbUYsVUFBTSxFQUFOQTtBQUFuQixLQUErQkUsTUFBL0IsQ0FBUjtBQUFBLE1BQ0lnSixVQUFVLEdBQUcsSUFEakI7O0FBRUFsTSxPQUFLLENBQUN0RywrQ0FBTSxDQUFDbVIsTUFBUCxDQUFjTSxLQUFkLEtBQXdCLGFBQXpCLEVBQXdDO0FBQ3pDZ0IsVUFBTSxFQUFFLE1BRGlDO0FBRXpDQyxRQUFJLEVBQUVwUyxJQUFJLENBQUNDLFNBQUwsQ0FBZXNCLElBQWYsQ0FGbUM7QUFHekM4USxXQUFPLEVBQUU7QUFDTCxzQkFBZ0I7QUFEWDtBQUhnQyxHQUF4QyxDQUFMLENBT0NDLElBUEQsQ0FPTSxVQUFBQyxHQUFHO0FBQUEsV0FBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxHQVBULEVBUUNGLElBUkQsQ0FRTSxVQUFBRyxRQUFRLEVBQUk7QUFDZCxRQUFJQSxRQUFRLENBQUNDLElBQVQsSUFBaUIsR0FBckIsRUFBMEI7QUFDdEIsWUFBTSxJQUFJQyxLQUFKLENBQVUsNENBQVYsQ0FBTjtBQUNIOztBQUVEVCxjQUFVLEdBQUc7QUFDVG5KLFlBQU0sRUFBTzBKLFFBQVEsQ0FBQ2xSLElBQVQsQ0FBY3dILE1BRGxCO0FBRVRELFlBQU0sRUFBTzJKLFFBQVEsQ0FBQ2xSLElBQVQsQ0FBY3VILE1BRmxCO0FBR1QvSCxpQkFBVyxFQUFFMFIsUUFBUSxDQUFDbFIsSUFBVCxDQUFjUixXQUhsQjtBQUlUa0ksaUJBQVcsRUFBRXdKLFFBQVEsQ0FBQ2xSLElBQVQsQ0FBYzBIO0FBSmxCLEtBQWI7QUFNQWxNLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFnQjRWLFFBQVEsQ0FBQ0gsUUFBUSxDQUFDbFIsSUFBVCxDQUFjd0gsTUFBZixDQUFSLEdBQWlDLElBQTdEO0FBQ0FpSixjQUFVLENBQUMsWUFBVTtBQUNqQjVGLFlBQU0sQ0FBQ3lHLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCcFQsK0NBQU0sQ0FBQ2lJLFVBQVAsQ0FBa0JDLEdBQXpDO0FBQ0gsS0FGUyxFQUVQZ0wsUUFBUSxDQUFDSCxRQUFRLENBQUNsUixJQUFULENBQWN3SCxNQUFmLENBQVIsR0FBaUMsSUFGMUIsQ0FBVjs7QUFJQSxRQUFJZ0ssU0FBUyxtQ0FBU04sUUFBUSxDQUFDbFIsSUFBVCxDQUFjaEUsSUFBdkI7QUFBNkJ1RCxZQUFNLEVBQUdvUjtBQUF0QyxNQUFiOztBQUNBYyxnQkFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLEVBQTZCalQsSUFBSSxDQUFDQyxTQUFMLENBQWU4UyxTQUFmLENBQTdCO0FBQ0FkLHFCQUFpQixDQUFDcFMsS0FBbEIsQ0FBd0J1RixRQUF4QixDQUFpQzlILDBEQUFVLENBQUN5VixTQUFELENBQTNDO0FBQ0EsV0FBTztBQUFFdlMsVUFBSSxFQUFFdVMsU0FBUjtBQUFtQjdKLFlBQU0sRUFBTkE7QUFBbkIsS0FBUDtBQUNILEdBNUJELEVBNkJDb0osSUE3QkQsQ0E2Qk8sVUFBQVksZ0JBQWdCLEVBQUk7QUFFdkIsUUFBSTNSLElBQUk7QUFBS1YsWUFBTSxFQUFFcVMsZ0JBQWdCLENBQUMxUyxJQUFqQixDQUFzQk0sTUFBdEIsQ0FBNkJDO0FBQTFDLE9BQTBEbVMsZ0JBQWdCLENBQUNoSyxNQUEzRSxDQUFSOztBQUNBLFdBQU9pSyxtQkFBbUIsQ0FBRTVSLElBQUYsQ0FBMUI7QUFDSCxHQWpDRCxFQWtDQytRLElBbENELENBa0NPLFVBQUFjLFdBQVcsRUFBSTtBQUNsQixRQUFJLENBQUNBLFdBQUwsRUFBa0I7QUFDZHRGLFdBQUssQ0FBRSw0Q0FBRixDQUFMO0FBQ0EsYUFBTyxLQUFQO0FBQ0g7O0FBRUQsUUFBSXVGLGVBQWUsR0FBRyxLQUF0Qjs7QUFFQSxRQUFJRCxXQUFXLENBQUNuTSxNQUFoQixFQUF3QjtBQUNwQixXQUFLLElBQUlxTSxRQUFRLEdBQUcsQ0FBcEIsRUFBdUJBLFFBQVEsR0FBR0YsV0FBVyxDQUFDbk0sTUFBOUMsRUFBc0RxTSxRQUFRLEVBQTlELEVBQWtFO0FBQzlELFlBQUlqVixXQUFXLEdBQUkrVSxXQUFXLENBQUNFLFFBQUQsQ0FBWixDQUF3QmpWLFdBQTFDOztBQUNBLFlBQUlBLFdBQVcsQ0FBQ2tWLEtBQVosQ0FBa0IscUJBQWxCLENBQUosRUFBOEM7QUFDMUNGLHlCQUFlLEdBQUcsSUFBbEI7QUFDSDtBQUNKO0FBQ0o7O0FBRUQsUUFBRyxDQUFDQSxlQUFKLEVBQW9CO0FBRWhCLGFBQU9HLGVBQWU7QUFBRzNQLGNBQU0sRUFBTkEsTUFBSDtBQUFXbUYsY0FBTSxFQUFOQTtBQUFYLFNBQXVCRSxNQUF2QixHQUFnQ2dKLFVBQVUsQ0FBQ25SLFdBQTNDLENBQXRCO0FBQ0g7O0FBQ0QsV0FBT3FTLFdBQVA7QUFDSCxHQXhERCxFQXlEQ2QsSUF6REQsQ0F5RE8sVUFBQWMsV0FBVyxFQUFJO0FBQ2xCLFFBQUlBLFdBQUosRUFBaUI7QUFDYm5CLHVCQUFpQixDQUFDcFMsS0FBbEIsQ0FBd0J1RixRQUF4QixDQUFpQ3pILDhEQUFjLENBQUN5VixXQUFELENBQS9DO0FBQ0g7QUFDSixHQTdERCxXQThETyxVQUFBNUcsS0FBSyxFQUFJO0FBQ1pzQixTQUFLLENBQUMsNENBQUQsQ0FBTDtBQUNBLFdBQU8sS0FBUDtBQUNILEdBakVEO0FBa0VIO0FBR00sU0FBUzJGLG9CQUFULENBQStCalQsSUFBL0IsRUFBcUM4UCxZQUFyQyxFQUFtRDtBQUN0RHZULFNBQU8sQ0FBQ0MsR0FBUixDQUFhd0QsSUFBYixFQUFtQiw4QkFBbkI7QUFDQSxNQUFJbUksSUFBSSxHQUFHLENBQUUsSUFBSUMsSUFBSixFQUFELENBQVdDLE9BQVgsS0FBdUIsSUFBSUQsSUFBSixDQUFTcEksSUFBSSxDQUFDTSxNQUFMLENBQVlnSSxNQUFyQixFQUE2QkQsT0FBN0IsRUFBeEIsSUFBa0UsSUFBN0U7O0FBQ0EsTUFBSUYsSUFBSSxJQUFJbkksSUFBSSxDQUFDTSxNQUFMLENBQVlpSSxNQUF4QixFQUFnQztBQUM1QjtBQUNBLFFBQUlMLFVBQVUsR0FBRztBQUNiN0UsWUFBTSxFQUFFckQsSUFBSSxDQUFDaEMsRUFEQTtBQUVid0ssWUFBTSxFQUFFeEksSUFBSSxDQUFDTSxNQUFMLENBQVltSSxXQUZQO0FBR2JDLFlBQU0sRUFBRSxLQUFLckosS0FBTCxDQUFXSztBQUhOLEtBQWpCO0FBS0FuRCxXQUFPLENBQUNDLEdBQVIsQ0FBWTBMLFVBQVosRUFBd0IsME5BQXhCO0FBQ0FnTCxzQkFBa0IsQ0FBQ2hMLFVBQUQsRUFBYTRILFlBQWIsQ0FBbEI7QUFDSDtBQUNKO0FBRU0sU0FBU2xRLG9CQUFULENBQThCQyxjQUE5QixFQUE4Q0YsV0FBOUMsRUFBMkQ7QUFHOURyRCxRQUFNLEdBQUd1RCxjQUFjLENBQUNYLCtDQUFNLENBQUNtUixNQUFQLENBQWNNLEtBQWQsRUFBRCxDQUF2QjtBQUNBLE1BQUl3QyxjQUFjLEdBQUdsTixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBckI7QUFDQTVKLFFBQU0sQ0FBQzRILEVBQVAsQ0FBVSxTQUFWLEVBQXFCLFlBQVk7QUFFN0JpUCxrQkFBYyxJQUFJQSxjQUFjLENBQUM5SixTQUFmLENBQXlCNkIsTUFBekIsQ0FBZ0Msc0JBQWhDLENBQWxCLENBRjZCLENBRzdCOztBQUNBa0ksbUJBQWUsQ0FBQzlXLE1BQUQsRUFBU3FELFdBQVQsQ0FBZjtBQUNBQSxlQUFXLENBQUNOLEtBQVosQ0FBa0J1RixRQUFsQixDQUEyQnZJLDREQUFZLENBQUNDLE1BQUQsQ0FBdkM7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksbUNBQVo7QUFDSCxHQVBEO0FBUUFGLFFBQU0sQ0FBQzRILEVBQVAsQ0FBVSxZQUFWLEVBQXdCLFlBQVk7QUFDaEN2RSxlQUFXLENBQUNOLEtBQVosQ0FBa0J1RixRQUFsQixDQUEyQnZJLDREQUFZLENBQUMsSUFBRCxDQUF2QztBQUNBOFcsa0JBQWMsSUFBSUEsY0FBYyxDQUFDOUosU0FBZixDQUF5QnVELEdBQXpCLENBQTZCLHNCQUE3QixDQUFsQixDQUZnQyxDQUdoQztBQUNILEdBSkQ7QUFLQXRRLFFBQU0sQ0FBQzRILEVBQVAsQ0FBVSxlQUFWLEVBQTJCLFlBQVk7QUFDbkNpUCxrQkFBYyxJQUFJQSxjQUFjLENBQUM5SixTQUFmLENBQXlCdUQsR0FBekIsQ0FBNkIsc0JBQTdCLENBQWxCO0FBQ0FoQixVQUFNLENBQUN5RyxRQUFQLENBQWdCZ0IsT0FBaEIsQ0FBd0JuVSwrQ0FBTSxDQUFDaUksVUFBUCxDQUFrQkMsR0FBMUM7QUFDSCxHQUhEO0FBSUgsQyxDQUVEOztBQUNPLFNBQVNrTSxNQUFULENBQWlCckUsWUFBakIsRUFBK0JsUyxJQUEvQixFQUFxQzJDLE1BQXJDLEVBQTZDO0FBQ2hELE1BQUkxQixFQUFFLEdBQUdpSSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUN1RCxZQUF2QyxDQUFvRCxXQUFwRCxDQUFUO0FBQ0FsTixTQUFPLENBQUNDLEdBQVIsQ0FBYXdCLEVBQWIsRUFBaUJpUixZQUFqQjtBQUNBc0UsWUFBVSxHQUNUekIsSUFERCxDQUNNLFVBQUEwQixNQUFNLEVBQUk7QUFDWmpDLGdCQUFZLEdBQUdpQyxNQUFmO0FBQ0FDLGNBQVUsQ0FBQyxlQUFELEVBQWtCRCxNQUFsQixDQUFWLENBRlksQ0FHWjs7QUFDQSxXQUFPRSxrQkFBa0IsQ0FBRXpFLFlBQUYsRUFBZ0JsUyxJQUFoQixFQUFzQjJDLE1BQXRCLENBQXpCO0FBQ0gsR0FORCxXQU9PLFVBQVNzTSxLQUFULEVBQWdCO0FBQ25CelAsV0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNILEdBVEQ7QUFVSDtBQUVNLFNBQVNzTSxvQkFBVCxDQUE4QnRMLE9BQTlCLEVBQXVDbUosS0FBdkMsRUFBOENlLFVBQTlDLEVBQTBEbUIsU0FBMUQsRUFBcUV4SSxNQUFyRSxFQUE2RXFJLE1BQTdFLEVBQXFGK0ksaUJBQXJGLEVBQXdHdkosVUFBeEcsRUFBb0g7QUFFdkgzTCxTQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFZ0IsV0FBTyxFQUFQQSxPQUFGO0FBQVdxTCxhQUFTLEVBQVRBLFNBQVg7QUFBc0J4SSxVQUFNLEVBQU5BLE1BQXRCO0FBQThCcUksVUFBTSxFQUFOQSxNQUE5QjtBQUFzQytJLHFCQUFpQixFQUFqQkEsaUJBQXRDO0FBQXlEdkosY0FBVSxFQUFWQTtBQUF6RCxHQUFaLEVBQW1GLDZCQUFuRjs7QUFDQSxNQUFJLENBQUNBLFVBQUwsRUFBaUI7QUFDYjVMLFVBQU0sQ0FBQzRELElBQVAsQ0FBWUosS0FBSyxDQUFDNlQsWUFBbEI7QUFBa0NuVyxhQUFPLEVBQVBBLE9BQWxDO0FBQTJDbUosV0FBSyxFQUFMQSxLQUEzQztBQUFrRGUsZ0JBQVUsRUFBVkEsVUFBbEQ7QUFBOERtQixlQUFTLEVBQVRBLFNBQTlEO0FBQXlFeEksWUFBTSxFQUFOQTtBQUF6RSxPQUFvRnFJLE1BQXBGLEdBRGEsQ0FFYjs7QUFDQStJLHFCQUFpQixDQUFDcFMsS0FBbEIsQ0FBd0J1RixRQUF4QixDQUFpQ3JILDBEQUFVLENBQUM7QUFBRWQsVUFBSSxFQUFFLElBQVI7QUFBY3FTLFVBQUksRUFBRSxJQUFwQjtBQUEwQjNJLGFBQU8sRUFBRTNJLE9BQW5DO0FBQTRDbUosV0FBSyxFQUFMQSxLQUE1QztBQUFtRGUsZ0JBQVUsRUFBVkE7QUFBbkQsS0FBRCxDQUEzQztBQUNBLFdBQU8sS0FBUDtBQUNIOztBQUNEbkwsU0FBTyxDQUFDQyxHQUFSLENBQVkwTCxVQUFaLEVBQXdCLDZDQUF4QixFQVR1SCxDQVV2SDtBQUVBOztBQVp1SCxNQWFqSDdFLE1BYmlILEdBYXRGNkUsVUFic0YsQ0Fhakg3RSxNQWJpSDtBQUFBLE1BYXpHbUYsTUFieUcsR0FhdEZOLFVBYnNGLENBYXpHTSxNQWJ5RztBQUFBLE1BYWpHRSxNQWJpRyxHQWF0RlIsVUFic0YsQ0FhakdRLE1BYmlHOztBQWN2SCxNQUFJa0wsU0FBUztBQUFLdlEsVUFBTSxFQUFOQSxNQUFMO0FBQWFtRixVQUFNLEVBQU5BO0FBQWIsS0FBd0JFLE1BQXhCLENBQWI7O0FBRUFsRCxPQUFLLENBQUN0RywrQ0FBTSxDQUFDbVIsTUFBUCxDQUFjTSxLQUFkLEtBQXdCLGFBQXpCLEVBQXdDO0FBQ3pDZ0IsVUFBTSxFQUFFLE1BRGlDO0FBRXpDQyxRQUFJLEVBQUVwUyxJQUFJLENBQUNDLFNBQUwsQ0FBZW1VLFNBQWYsQ0FGbUM7QUFHekMvQixXQUFPLEVBQUU7QUFDTCxzQkFBZ0I7QUFEWDtBQUhnQyxHQUF4QyxDQUFMLENBT0NDLElBUEQsQ0FPTSxVQUFBQyxHQUFHO0FBQUEsV0FBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxHQVBULEVBUUNGLElBUkQsQ0FRTSxVQUFBRyxRQUFRLEVBQUk7QUFDZDFWLFdBQU8sQ0FBQ0MsR0FBUixDQUFheVYsUUFBYixFQUF3QixhQUF4Qjs7QUFDQSxRQUFJQSxRQUFRLENBQUNDLElBQVQsSUFBaUIsR0FBckIsRUFBMEI7QUFFdEIsWUFBTSxJQUFJQyxLQUFKLENBQVUseUJBQVYsQ0FBTjtBQUNIOztBQUNELFFBQUlULFVBQVUsR0FBRztBQUNibkosWUFBTSxFQUFFMEosUUFBUSxDQUFDbFIsSUFBVCxDQUFjd0gsTUFEVDtBQUViRCxZQUFNLEVBQUUySixRQUFRLENBQUNsUixJQUFULENBQWN1SCxNQUZUO0FBR2IvSCxpQkFBVyxFQUFFMFIsUUFBUSxDQUFDbFIsSUFBVCxDQUFjUixXQUhkO0FBSWJrSSxpQkFBVyxFQUFFd0osUUFBUSxDQUFDbFIsSUFBVCxDQUFjMEg7QUFKZCxLQUFqQjs7QUFNQSxRQUFJOEosU0FBUyxtQ0FBU04sUUFBUSxDQUFDbFIsSUFBVCxDQUFjaEUsSUFBdkI7QUFBNkJ1RCxZQUFNLEVBQUdvUjtBQUF0QyxNQUFiOztBQUNBYyxnQkFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLEVBQTZCalQsSUFBSSxDQUFDQyxTQUFMLENBQWU4UyxTQUFmLENBQTdCO0FBQ0FsUyxVQUFNLEdBQUdrUyxTQUFTLENBQUNqUyxNQUFWLENBQWlCQyxXQUExQjtBQUNBakUsVUFBTSxDQUFDNEQsSUFBUCxDQUFZSixLQUFLLENBQUM2VCxZQUFsQjtBQUFrQ25XLGFBQU8sRUFBUEEsT0FBbEM7QUFBMkNtSixXQUFLLEVBQUxBLEtBQTNDO0FBQWtEZSxnQkFBVSxFQUFWQSxVQUFsRDtBQUE4RG1CLGVBQVMsRUFBVEEsU0FBOUQ7QUFBeUV4SSxZQUFNLEVBQU5BO0FBQXpFLE9BQW9GcUksTUFBcEY7QUFDQStJLHFCQUFpQixDQUFDcFMsS0FBbEIsQ0FBd0J1RixRQUF4QixDQUFpQzlILDBEQUFVLENBQUN5VixTQUFELENBQTNDO0FBQ0FkLHFCQUFpQixDQUFDcFMsS0FBbEIsQ0FBd0J1RixRQUF4QixDQUFpQ3JILDBEQUFVLENBQUM7QUFBRWQsVUFBSSxFQUFFLElBQVI7QUFBY3FTLFVBQUksRUFBRSxJQUFwQjtBQUEwQjNJLGFBQU8sRUFBRTNJLE9BQW5DO0FBQTRDbUosV0FBSyxFQUFMQSxLQUE1QztBQUFtRGUsZ0JBQVUsRUFBVkE7QUFBbkQsS0FBRCxDQUEzQztBQUNILEdBMUJELFdBMkJPLFVBQUFzRSxLQUFLLEVBQUk7QUFDWnNCLFNBQUssQ0FBQyx5Q0FBRCxDQUFMO0FBQ0EsV0FBTyxLQUFQO0FBQ0gsR0E5QkQ7QUErQkg7QUFDTSxTQUFTUiwwQkFBVCxDQUFvQ2pFLFNBQXBDLEVBQStDeEksTUFBL0MsRUFBdURxSSxNQUF2RCxFQUFnRTtBQUVuRXBNLFFBQU0sQ0FBQzRELElBQVAsQ0FBWUosS0FBSyxDQUFDK1QsV0FBbEI7QUFBaUNoTCxhQUFTLEVBQVRBLFNBQWpDO0FBQTRDeEksVUFBTSxFQUFOQTtBQUE1QyxLQUF1RHFJLE1BQXZEO0FBQ0EsU0FBTyxLQUFQO0FBQ0g7QUFJTSxTQUFTNkMsZ0JBQVQsQ0FBMEJGLElBQTFCLEVBQWdDO0FBQ25DLE1BQUl5SSxVQUFVLEdBQUcsSUFBSSxJQUFKLEdBQVcsSUFBNUI7O0FBRUEsTUFBSSxDQUFDekksSUFBSSxDQUFDMEksSUFBTixJQUFjMUksSUFBSSxDQUFDMEksSUFBTCxHQUFZRCxVQUE5QixFQUEwQztBQUN0Q0UseUJBQXFCO0FBQ3hCOztBQUVELE1BQUlDLFFBQVEsR0FBRzVJLElBQWY7QUFDQSxNQUFJNkksSUFBSSxHQUFHLElBQUlDLFFBQUosRUFBWDtBQUNBRCxNQUFJLENBQUNFLE1BQUwsQ0FBWSxNQUFaLEVBQW9CSCxRQUFwQjtBQUNBQyxNQUFJLENBQUNFLE1BQUwsQ0FBWSxTQUFaLEVBQXVCLENBQXZCO0FBRUE5UiwrQ0FBQyxDQUFDK1IsSUFBRixDQUFPO0FBQ0g3SyxPQUFHLEVBQVV0SywrQ0FBTSxDQUFDaUksVUFBUCxDQUFrQkMsR0FBbEIsR0FBd0IsYUFEbEM7QUFFSDNLLFFBQUksRUFBUyxNQUZWO0FBR0g2WCxXQUFPLEVBQU0scUJBSFY7QUFJSHZULFFBQUksRUFBU21ULElBSlY7QUFLSEssU0FBSyxFQUFRLEtBTFY7QUFNSEMsZUFBVyxFQUFFLEtBTlY7QUFPSEMsZUFBVyxFQUFFLEtBUFY7QUFRSEMsV0FBTyxFQUFFLGlCQUFVekMsUUFBVixFQUFvQjtBQUV6QixVQUFJQSxRQUFRLENBQUNDLElBQVQsSUFBaUIsR0FBckIsRUFBMEI7QUFDdEI4Qiw2QkFBcUI7QUFDeEI7O0FBQ0QsVUFBSVcsVUFBVSxHQUFHMU8sUUFBUSxDQUFDQyxjQUFULENBQXdCLGlCQUF4QixFQUEyQ00sc0JBQTNDLENBQWtFLGFBQWxFLENBQWpCOztBQUNBLFVBQUltTyxVQUFVLENBQUNsTyxNQUFmLEVBQXVCO0FBQ25Ca08sa0JBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY0MsWUFBZCxDQUEyQixVQUEzQixFQUF1QzNDLFFBQVEsQ0FBQ2xSLElBQVQsQ0FBY3lJLEdBQXJEO0FBRUEsWUFBSXFMLFFBQVEsR0FBRzVDLFFBQVEsQ0FBQ2xSLElBQVQsQ0FBYytULFNBQTdCO0FBQUEsWUFDQUMsYUFBYSxHQUFHLElBRGhCOztBQUVBLFlBQUlGLFFBQUosRUFBYztBQUNWRSx1QkFBYSxHQUFHQyxXQUFXLENBQUVILFFBQUYsQ0FBM0I7QUFDSDs7QUFDRCxZQUFJLENBQUNFLGFBQUwsRUFBb0I7QUFDaEJKLG9CQUFVLENBQUMsQ0FBRCxDQUFWLENBQWN6SixNQUFkO0FBQ0gsU0FGRCxNQUVLO0FBQ0R5SixvQkFBVSxDQUFDLENBQUQsQ0FBVixDQUFjQyxZQUFkLENBQTJCLFdBQTNCLEVBQXdDRyxhQUF4QztBQUNBSixvQkFBVSxDQUFDLENBQUQsQ0FBVixDQUFjdEwsU0FBZCxDQUF3QjZCLE1BQXhCLENBQStCLGFBQS9CO0FBQ0g7QUFDSjtBQUNKLEtBN0JFO0FBOEJIYyxTQUFLLEVBQUUsZUFBU0EsTUFBVCxFQUFlO0FBQ2xCelAsYUFBTyxDQUFDQyxHQUFSLENBQVl3UCxNQUFaO0FBQ0FnSSwyQkFBcUI7QUFDeEI7QUFqQ0UsR0FBUDtBQW1DSDtBQUNNLFNBQVM3RixtQkFBVCxDQUE2Qm9CLENBQTdCLEVBQWdDN0ksUUFBaEMsRUFBMEM5RCxhQUExQyxFQUEwRDtBQUU3RCxNQUFHLENBQUM4RCxRQUFELElBQWEsQ0FBQ0EsUUFBUSxDQUFDRCxNQUExQixFQUFpQztBQUM3QixXQUFPLEtBQVA7QUFDSDs7QUFDRCxNQUFJaUgsU0FBUyxHQUFHekgsUUFBUSxDQUFDQyxjQUFULENBQXdCLHFCQUF4QixDQUFoQixDQUw2RCxDQU03RDs7QUFDQSxNQUFJNUQsNkNBQUMsQ0FBQ2lOLENBQUQsQ0FBRCxDQUFLekIsU0FBTCxLQUNBeEwsNkNBQUMsQ0FBQ2lOLENBQUQsQ0FBRCxDQUFLMEYsV0FBTCxFQURBLElBRUEzUyw2Q0FBQyxDQUFDaU4sQ0FBRCxDQUFELENBQUssQ0FBTCxFQUFRM0IsWUFGWixFQUUwQjtBQUNsQjNILFlBQVEsQ0FBQ0MsY0FBVCxDQUF3QixxQkFBeEIsRUFBK0NtRCxTQUEvQyxDQUF5RHVELEdBQXpELENBQTZELHFCQUE3RCxFQURrQixDQUVsQjs7QUFDQSxRQUFJc0ksYUFBYSxHQUFHeE8sUUFBUSxDQUFDeU8sSUFBVCxDQUFlLFVBQVUzWCxPQUFWLEVBQW1CO0FBRWxELGFBQU8sQ0FBQ0EsT0FBTyxDQUFDc1IsSUFBVCxJQUFpQixDQUFDdFIsT0FBTyxDQUFDZixJQUFqQztBQUNILEtBSG1CLENBQXBCOztBQUtBLFFBQUl5WSxhQUFKLEVBQW1CO0FBQ2YzWSxhQUFPLENBQUNDLEdBQVIsQ0FBWXNELEtBQUssQ0FBQ3NWLGdCQUFsQixFQUFvQyxxQkFBcEM7QUFDQSxVQUFJQyxTQUFTLEdBQUc3VixJQUFJLENBQUM4VixLQUFMLENBQVc5QyxZQUFZLENBQUMrQyxPQUFiLENBQXFCLE1BQXJCLENBQVgsQ0FBaEI7QUFDQWpaLFlBQU0sQ0FBQzRELElBQVAsQ0FBWUosS0FBSyxDQUFDc1YsZ0JBQWxCLEVBQW9DO0FBQUVyWSxZQUFJLEVBQUdzWSxTQUFTLENBQUNyWCxFQUFuQjtBQUF1QjZLLGlCQUFTLEVBQUVqRyxhQUFhLENBQUM1RSxFQUFoRDtBQUFvREgsbUJBQVcsRUFBRStFLGFBQWEsQ0FBQy9FO0FBQS9FLE9BQXBDO0FBQ0g7QUFDUixHQWZELE1BZUs7QUFDRG9JLFlBQVEsQ0FBQ0MsY0FBVCxDQUF3QixxQkFBeEIsRUFBK0NtRCxTQUEvQyxDQUF5RDZCLE1BQXpELENBQWdFLHFCQUFoRTtBQUNIO0FBQ0o7QUFDTSxTQUFTMkMsd0JBQVQsQ0FBbUNuSCxRQUFuQyxFQUE2QzlELGFBQTdDLEVBQTZEO0FBRWhFLE1BQUcsQ0FBQzhELFFBQUQsSUFBYSxDQUFDQSxRQUFRLENBQUNELE1BQTFCLEVBQWlDO0FBQzdCLFdBQU8sS0FBUDtBQUNIOztBQUVELE1BQUl5TyxhQUFhLEdBQUd4TyxRQUFRLENBQUN5TyxJQUFULENBQWUsVUFBVTNYLE9BQVYsRUFBbUI7QUFFbEQsV0FBTyxDQUFDQSxPQUFPLENBQUNzUixJQUFULElBQWlCLENBQUN0UixPQUFPLENBQUNmLElBQWpDO0FBQ0gsR0FIbUIsQ0FBcEI7O0FBS0EsTUFBSXlZLGFBQUosRUFBbUI7QUFDZjNZLFdBQU8sQ0FBQ0MsR0FBUixDQUFZc0QsS0FBSyxDQUFDc1YsZ0JBQWxCLEVBQW9DLDBCQUFwQztBQUNBLFFBQUlDLFNBQVMsR0FBRzdWLElBQUksQ0FBQzhWLEtBQUwsQ0FBVzlDLFlBQVksQ0FBQytDLE9BQWIsQ0FBcUIsTUFBckIsQ0FBWCxDQUFoQjtBQUNBalosVUFBTSxDQUFDNEQsSUFBUCxDQUFZSixLQUFLLENBQUNzVixnQkFBbEIsRUFBb0M7QUFBRXJZLFVBQUksRUFBR3NZLFNBQVMsQ0FBQ3JYLEVBQW5CO0FBQXVCNkssZUFBUyxFQUFFakcsYUFBYSxDQUFDNUUsRUFBaEQ7QUFBb0RILGlCQUFXLEVBQUUrRSxhQUFhLENBQUMvRTtBQUEvRSxLQUFwQztBQUNIO0FBQ0o7QUFHTSxTQUFTeUYsaUJBQVQsQ0FBMkJOLGFBQTNCLEVBQTBDO0FBQzdDMUcsUUFBTSxDQUFDNEQsSUFBUCxDQUFZSixLQUFLLENBQUMwVixtQkFBbEIsRUFBdUN4UyxhQUF2QztBQUNBLFNBQU8sS0FBUDtBQUNIO0FBRU0sU0FBUzdCLGNBQVQsQ0FBd0J4QyxPQUF4QixFQUFpQ3FCLElBQWpDLEVBQXdDO0FBQzNDLE1BQUlvQixTQUFTLEdBQUd6QyxPQUFPLENBQUN5QyxTQUF4QjtBQUFBLE1BQ0lDLEtBQUssR0FBTzFDLE9BQU8sQ0FBQzBDLEtBRHhCO0FBQUEsTUFFSUMsTUFBTSxHQUFNM0MsT0FBTyxDQUFDMkMsTUFGeEI7QUFBQSxNQUdJQyxNQUFNLEdBQU01QyxPQUFPLENBQUM0QyxNQUh4QjtBQUtBLE1BQUlDLGNBQWMsR0FBRyxDQUFyQjtBQUFBLE1BQ0lDLEtBQUssR0FBWSxDQURyQjtBQUFBLE1BRUlFLFNBQVMsR0FBUSxDQUZyQjtBQUFBLE1BR0lDLGFBQWEsR0FBSSxDQUhyQjtBQUFBLE1BSUlGLEdBQUcsR0FBYyxDQUpyQjtBQUFBLE1BS0lHLEtBQUssR0FBWSxDQUxyQjs7QUFPQSxNQUFJTixNQUFNLElBQUlILFNBQVYsSUFBdUJDLEtBQXZCLElBQWdDQyxNQUFwQyxFQUE0QztBQUFBLHdCQUNmQSxNQUFNLENBQUM0SSxLQUFQLENBQWEsR0FBYixDQURlO0FBQUE7QUFBQSxRQUNsQ3VMLEtBRGtDO0FBQUEsUUFDM0JDLE9BRDJCO0FBQUEsdUJBRWZyVSxLQUFLLENBQUM2SSxLQUFOLENBQVksR0FBWixDQUZlO0FBQUE7QUFBQSxRQUVsQ3lMLEtBRmtDO0FBQUEsUUFFM0JDLE9BRjJCOztBQUd4QyxRQUFJQyxjQUFjLEdBQVEsSUFBSXpOLElBQUosQ0FBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLElBQWIsRUFBbUJxTixLQUFuQixFQUEwQkMsT0FBMUIsRUFBbUMsQ0FBbkMsQ0FBRCxDQUF3Q3JOLE9BQXhDLEVBQXpCO0FBQUEsUUFDSXlOLGFBQWEsR0FBUyxJQUFJMU4sSUFBSixDQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsSUFBYixFQUFtQnVOLEtBQW5CLEVBQTBCQyxPQUExQixFQUFtQyxDQUFuQyxDQUFELENBQXdDdk4sT0FBeEMsRUFEekI7QUFHSTdHLGtCQUFjLEdBQUcsQ0FBQ3FVLGNBQWMsR0FBR0MsYUFBbEIsSUFBa0MsSUFBbEMsR0FBeUMsRUFBekMsR0FBOEMsRUFBL0Q7QUFDQXJVLFNBQUssR0FBWXNVLElBQUksQ0FBQ0MsS0FBTCxDQUFXeFUsY0FBYyxHQUFHRCxNQUE1QixDQUFqQjtBQUNBSSxhQUFTLEdBQVFvVSxJQUFJLENBQUNDLEtBQUwsQ0FBV3ZVLEtBQUssR0FBRyxHQUFuQixDQUFqQjtBQUNBQyxPQUFHLEdBQWNxVSxJQUFJLENBQUNDLEtBQUwsQ0FBVyxDQUFDdlUsS0FBSyxHQUFHRSxTQUFULElBQXNCLEdBQWpDLENBQWpCO0FBQ0FDLGlCQUFhLEdBQUltVSxJQUFJLENBQUNDLEtBQUwsQ0FBVyxDQUFDdlUsS0FBSyxHQUFHRSxTQUFSLEdBQW9CRCxHQUFyQixJQUE0QixLQUF2QyxDQUFqQjtBQUNQOztBQUNELE1BQUkxQixJQUFJLENBQUM4QixPQUFMLElBQWdCOEYsK0NBQU0sQ0FBQzdGLFNBQVAsQ0FBaUJDLE1BQXJDLEVBQTZDO0FBRXpDSCxTQUFLLEdBQUdKLEtBQUssR0FBR0csYUFBaEI7QUFDSCxHQUhELE1BR00sSUFBSTVCLElBQUksQ0FBQzhCLE9BQUwsSUFBZ0I4RiwrQ0FBTSxDQUFDN0YsU0FBUCxDQUFpQkUsUUFBckMsRUFBK0M7QUFDakRKLFNBQUssR0FBR0osS0FBSyxHQUFHQyxHQUFSLEdBQWNDLFNBQXRCO0FBQ0g7O0FBQ0QsU0FBTyxDQUFFUCxTQUFGLEVBQWFDLEtBQWIsRUFBb0JDLE1BQXBCLEVBQTRCQyxNQUE1QixFQUFvQ0MsY0FBcEMsRUFBb0RDLEtBQXBELEVBQTJEQyxHQUEzRCxFQUFnRUMsU0FBaEUsRUFBMkVDLGFBQTNFLEVBQTBGQyxLQUExRixDQUFQO0FBQ0g7QUFFTSxTQUFTb1UsbUJBQVQsQ0FBNkJDLE1BQTdCLEVBQXFDQyxRQUFyQyxFQUErQztBQUNsRCxNQUFJQyxJQUFJLEdBQUc7QUFDUEMsT0FBRyxFQUFFO0FBQUVDLGFBQU8sRUFBRSxHQUFYO0FBQWdCQyxXQUFLLEVBQUU7QUFBdkIsS0FERTtBQUVQQyxPQUFHLEVBQUU7QUFBRUYsYUFBTyxFQUFFLEdBQVg7QUFBZ0JDLFdBQUssRUFBRTtBQUF2QixLQUZFO0FBR1BFLE9BQUcsRUFBRTtBQUFFSCxhQUFPLEVBQUUsR0FBWDtBQUFnQkMsV0FBSyxFQUFFO0FBQXZCLEtBSEU7QUFJUEcsT0FBRyxFQUFFO0FBQUVKLGFBQU8sRUFBRSxHQUFYO0FBQWdCQyxXQUFLLEVBQUU7QUFBdkIsS0FKRTtBQUtQSSxPQUFHLEVBQUU7QUFBRUwsYUFBTyxFQUFFLEdBQVg7QUFBZ0JDLFdBQUssRUFBRTtBQUF2QixLQUxFO0FBTVBLLE9BQUcsRUFBRTtBQUFFTixhQUFPLEVBQUUsR0FBWDtBQUFnQkMsV0FBSyxFQUFFO0FBQXZCLEtBTkU7QUFPUE0sT0FBRyxFQUFFO0FBQUVQLGFBQU8sRUFBRSxHQUFYO0FBQWdCQyxXQUFLLEVBQUU7QUFBdkIsS0FQRTtBQVFQTyxPQUFHLEVBQUU7QUFBRVIsYUFBTyxFQUFFLEdBQVg7QUFBZ0JDLFdBQUssRUFBRTtBQUF2QixLQVJFO0FBU1BRLE9BQUcsRUFBRTtBQUFFVCxhQUFPLEVBQUUsR0FBWDtBQUFnQkMsV0FBSyxFQUFFO0FBQXZCLEtBVEU7QUFVUFMsT0FBRyxFQUFFO0FBQUVWLGFBQU8sRUFBRSxHQUFYO0FBQWdCQyxXQUFLLEVBQUU7QUFBdkI7QUFWRSxHQUFYO0FBWUEsTUFBSVUsc0JBQXNCLEdBQUcsR0FBN0I7O0FBQ0EsTUFBSUMsSUFBSSxHQUFHQSxJQUFJLEdBQUc7QUFBRVosV0FBTyxFQUFFVyxzQkFBWDtBQUFtQ1YsU0FBSyxFQUFFO0FBQTFDLEdBQWxCOztBQUNBLE1BQUcsT0FBT1ksVUFBUCxJQUFxQixXQUF4QixFQUFvQztBQUVoQ0QsUUFBSSxHQUFHZCxJQUFJLENBQUNELFFBQUQsQ0FBWDtBQUNIOztBQUVELE1BQUlELE1BQU0sR0FBR2tCLFVBQVUsQ0FBQ2xCLE1BQUQsQ0FBdkI7QUFDQSxNQUFJclUsS0FBSyxHQUFHLENBQUNxVSxNQUFNLEdBQUdrQixVQUFVLENBQUNGLElBQUksQ0FBQ1gsS0FBTixDQUFwQixLQUFxQyxJQUFJYSxVQUFVLENBQUNGLElBQUksQ0FBQ1osT0FBTixDQUFWLEdBQTJCLEdBQXBFLENBQVo7QUFDQSxNQUFJZSxHQUFHLEdBQUd4VixLQUFLLEdBQUdxVSxNQUFsQjtBQUVBLFNBQU87QUFDSEEsVUFBTSxFQUFFQSxNQURMO0FBRUhtQixPQUFHLEVBQUVBLEdBQUcsQ0FBQ0MsT0FBSixDQUFZLENBQVosQ0FGRjtBQUdIelYsU0FBSyxFQUFFQSxLQUFLLENBQUN5VixPQUFOLENBQWMsQ0FBZDtBQUhKLEdBQVA7QUFLSCxDLENBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVN0RCxxQkFBVCxHQUFnQztBQUM1QixNQUFJVyxVQUFVLEdBQUcxTyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUJBQXhCLEVBQTJDTSxzQkFBM0MsQ0FBa0UsYUFBbEUsQ0FBakI7O0FBQ0EsTUFBSW1PLFVBQVUsQ0FBQ2xPLE1BQWYsRUFBdUI7QUFDbkJrTyxjQUFVLENBQUMsQ0FBRCxDQUFWLENBQWN6SixNQUFkO0FBQ0g7QUFDSjs7QUFDRCxTQUFTOEosV0FBVCxDQUFzQnVDLFFBQXRCLEVBQWdDO0FBQzVCLE1BQUlwSyxNQUFNLEdBQUcsNENBQWI7O0FBQ0EsTUFBR0EsTUFBTSxDQUFDQyxJQUFQLENBQVltSyxRQUFaLENBQUgsRUFBeUI7QUFDckIsV0FBTyxLQUFQO0FBQ0g7O0FBQ0QsTUFBSXBLLE1BQU0sR0FBRywyQ0FBYjs7QUFDQSxNQUFHQSxNQUFNLENBQUNDLElBQVAsQ0FBWW1LLFFBQVosQ0FBSCxFQUF5QjtBQUVyQixXQUFPLE1BQVA7QUFDSDs7QUFDRCxTQUFPLElBQVA7QUFDSDs7QUFDRCxTQUFTQywyQkFBVCxDQUFxQ3pXLElBQXJDLEVBQTJDO0FBQ3ZDLE1BQUk7QUFBQSxRQUNNVixNQUROLEdBQzhFVSxJQUQ5RSxDQUNNVixNQUROO0FBQUEsUUFDY29YLE9BRGQsR0FDOEUxVyxJQUQ5RSxDQUNjMFcsT0FEZDtBQUFBLFFBQ3VCQyxtQkFEdkIsR0FDOEUzVyxJQUQ5RSxDQUN1QjJXLG1CQUR2QjtBQUFBLFFBQzRDQyxjQUQ1QyxHQUM4RTVXLElBRDlFLENBQzRDNFcsY0FENUM7QUFBQSxRQUM0REMsRUFENUQsR0FDOEU3VyxJQUQ5RSxDQUM0RDZXLEVBRDVEO0FBQUEsUUFDZ0VDLFNBRGhFLEdBQzhFOVcsSUFEOUUsQ0FDZ0U4VyxTQURoRTs7QUFFQSxRQUFJLENBQUN4WCxNQUFELElBQVcsQ0FBQ29YLE9BQVosSUFBdUIsQ0FBQ0MsbUJBQXhCLElBQStDLENBQUNDLGNBQWhELElBQWtFLENBQUNDLEVBQW5FLElBQXlFLENBQUNDLFNBQTlFLEVBQXlGO0FBQ3JGLFlBQU0sSUFBSTFGLEtBQUosQ0FBVSxJQUFWLENBQU47QUFDSDs7QUFDRCxXQUFPLElBQVA7QUFDSCxHQU5ELENBTUUsT0FBT25HLEtBQVAsRUFBYztBQUVaLFdBQU8sS0FBUDtBQUNIO0FBQ0o7O0FBRUQsU0FBUzJHLG1CQUFULENBQThCNVIsSUFBOUIsRUFBcUM7QUFDakN4RSxTQUFPLENBQUNDLEdBQVIsQ0FBWXVFLElBQVosRUFBa0IsNkJBQWxCO0FBQ0EsTUFBSStXLE9BQU8sR0FBR04sMkJBQTJCLENBQUN6VyxJQUFELENBQXpDOztBQUNBLE1BQUksQ0FBQytXLE9BQUwsRUFBYztBQUNWeEssU0FBSyxDQUFDLGlDQUFELENBQUw7QUFDQSxXQUFPLEtBQVA7QUFDSDs7QUFDRCxNQUFJLE9BQU95SyxpQkFBUCxJQUE0QixXQUE1QixJQUEyQ0EsaUJBQS9DLEVBQWtFO0FBRTlEaFgsUUFBSSxDQUFDaVgsbUJBQUwsR0FBMkJELGlCQUEzQjtBQUNIOztBQUNELFNBQU92UyxLQUFLLENBQUN0RywrQ0FBTSxDQUFDbVIsTUFBUCxDQUFjTSxLQUFkLEtBQXdCLGVBQXpCLEVBQTBDO0FBQ2xEZ0IsVUFBTSxFQUFFLE1BRDBDO0FBRWxEQyxRQUFJLEVBQUVwUyxJQUFJLENBQUNDLFNBQUwsQ0FBZXNCLElBQWYsQ0FGNEM7QUFHbEQ4USxXQUFPLEVBQUU7QUFDTCxzQkFBZ0I7QUFEWDtBQUh5QyxHQUExQyxDQUFMLENBT05DLElBUE0sQ0FPRCxVQUFBQyxHQUFHO0FBQUEsV0FBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxHQVBGLEVBUU5GLElBUk0sQ0FRRCxVQUFBRyxRQUFRLEVBQUk7QUFDZDFWLFdBQU8sQ0FBQ0MsR0FBUixDQUFheVYsUUFBYixFQUF3QixlQUF4Qjs7QUFDQSxRQUFJQSxRQUFRLENBQUNDLElBQVQsSUFBaUIsR0FBckIsRUFBMEI7QUFFdEIsWUFBTSxJQUFJQyxLQUFKLENBQVUsaUNBQVYsQ0FBTjtBQUNIOztBQUVELFdBQU9GLFFBQVEsQ0FBQ2xSLElBQWhCO0FBQ0gsR0FoQk0sV0FpQkEsVUFBQWlMLEtBQUssRUFBSTtBQUNaelAsV0FBTyxDQUFDQyxHQUFSLENBQVl3UCxLQUFaLEVBQW1CLGNBQW5CO0FBQ0EsV0FBTyxLQUFQO0FBQ0gsR0FwQk0sQ0FBUDtBQXFCSDs7QUFDRCxTQUFTZ0gsZUFBVCxDQUEwQmpTLElBQTFCLEVBQWdDVixNQUFoQyxFQUF5QztBQUFBLE1BRS9CZ0QsTUFGK0IsR0FFVnRDLElBRlUsQ0FFL0JzQyxNQUYrQjtBQUFBLE1BRXZCbUYsTUFGdUIsR0FFVnpILElBRlUsQ0FFdkJ5SCxNQUZ1QjtBQUdqQ3pILE1BQUksQ0FBQ2tYLFdBQUwsR0FBdUI1VSxNQUF2QjtBQUNBdEMsTUFBSSxDQUFDbVgsZUFBTCxHQUF1QixDQUF2QjtBQUNBblgsTUFBSSxDQUFDeUgsTUFBTCxHQUF1QkEsTUFBdkI7QUFDQXpILE1BQUksQ0FBQ1YsTUFBTCxHQUF1QkEsTUFBdkI7QUFFSixTQUFPbUYsS0FBSyxDQUFDdEcsK0NBQU0sQ0FBQ21SLE1BQVAsQ0FBY00sS0FBZCxLQUF3QixjQUF6QixFQUF5QztBQUNqRGdCLFVBQU0sRUFBRSxNQUR5QztBQUVqREMsUUFBSSxFQUFFcFMsSUFBSSxDQUFDQyxTQUFMLENBQWVzQixJQUFmLENBRjJDO0FBR2pEOFEsV0FBTyxFQUFFO0FBQ0wsc0JBQWdCO0FBRFg7QUFId0MsR0FBekMsQ0FBTCxDQU9OQyxJQVBNLENBT0QsVUFBQUMsR0FBRztBQUFBLFdBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsR0FQRixFQVFORixJQVJNLENBUUQsVUFBQUcsUUFBUSxFQUFJO0FBQ2QxVixXQUFPLENBQUNDLEdBQVIsQ0FBWXlWLFFBQVosRUFBc0IsaUJBQXRCOztBQUNBLFFBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxJQUFpQixHQUFyQixFQUEwQjtBQUN0QjVFLFdBQUssQ0FBQyxnQ0FBRCxDQUFMO0FBQ0g7O0FBQ0QsV0FBT3FGLG1CQUFtQixDQUFFNVIsSUFBRixDQUExQjtBQUNILEdBZE0sV0FlQSxVQUFBaUwsS0FBSyxFQUFJO0FBQ1osV0FBTyxLQUFQO0FBQ0gsR0FqQk0sQ0FBUDtBQWtCSCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFJQSxTQUFTb0gsZUFBVCxDQUEwQjlXLE1BQTFCLEVBQWtDcUQsV0FBbEMsRUFBK0M7QUFFM0NyRCxRQUFNLENBQUM0SCxFQUFQLENBQVVwRSxLQUFLLENBQUNxWSxnQkFBaEIsRUFBa0MsVUFBQXBYLElBQUksRUFBSTtBQUN0QztBQUNBcEIsZUFBVyxDQUFDTixLQUFaLENBQWtCdUYsUUFBbEIsQ0FBMkI3Ryw2REFBYSxDQUFFZ0QsSUFBSSxDQUFDaEUsSUFBUCxDQUF4QztBQUNILEdBSEQ7QUFLQVQsUUFBTSxDQUFDNEgsRUFBUCxDQUFVcEUsS0FBSyxDQUFDc1ksaUJBQWhCLEVBQW1DLFVBQUFyWCxJQUFJLEVBQUk7QUFDdkM7QUFDQXBCLGVBQVcsQ0FBQ04sS0FBWixDQUFrQnVGLFFBQWxCLENBQTJCMUcsZ0VBQWdCLENBQUU2QyxJQUFJLENBQUNoRSxJQUFQLENBQTNDO0FBQ0gsR0FIRDtBQUtBVCxRQUFNLENBQUM0SCxFQUFQLENBQVVwRSxLQUFLLENBQUN1WSxnQkFBaEIsRUFBa0MsVUFBQXRYLElBQUksRUFBSTtBQUV0Q3hFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZc0QsS0FBSyxDQUFDdVksZ0JBQWxCLEVBQW9DdFgsSUFBcEM7QUFGc0MsUUFHaENoRSxJQUhnQyxHQUc2QmdFLElBSDdCLENBR2hDaEUsSUFIZ0M7QUFBQSxRQUcxQnViLEtBSDBCLEdBRzZCdlgsSUFIN0IsQ0FHMUJ1WCxLQUgwQjtBQUFBLFFBR25COWEsT0FIbUIsR0FHNkJ1RCxJQUg3QixDQUduQnZELE9BSG1CO0FBQUEsUUFHVm1KLEtBSFUsR0FHNkI1RixJQUg3QixDQUdWNEYsS0FIVTtBQUFBLFFBR0hlLFVBSEcsR0FHNkIzRyxJQUg3QixDQUdIMkcsVUFIRztBQUFBLFFBR1M1RSxPQUhULEdBRzZCL0IsSUFIN0IsQ0FHUytCLE9BSFQ7QUFBQSxRQUdrQjRGLE1BSGxCLEdBRzZCM0gsSUFIN0IsQ0FHa0IySCxNQUhsQjtBQUl0QyxRQUFJMk0sU0FBUyxHQUFHN1YsSUFBSSxDQUFDOFYsS0FBTCxDQUFXOUMsWUFBWSxDQUFDK0MsT0FBYixDQUFxQixNQUFyQixDQUFYLENBQWhCOztBQUNBLFFBQUlGLFNBQVMsSUFBSUEsU0FBUyxDQUFDclgsRUFBVixJQUFnQmpCLElBQTdCLElBQXFDc1ksU0FBUyxDQUFDL1UsTUFBVixDQUFpQkMsV0FBakIsSUFBZ0MrWCxLQUF6RSxFQUFnRjtBQUM1RSxhQUFPLEtBQVA7QUFDSDs7QUFDRDNZLGVBQVcsQ0FBQ04sS0FBWixDQUFrQnVGLFFBQWxCLENBQTRCbEgsa0VBQWtCLENBQUM7QUFBRWpCLFVBQUksRUFBRzRZLFNBQVMsQ0FBQ3JYLEVBQVYsSUFBZ0JqQixJQUF6QjtBQUFnQ29KLGFBQU8sRUFBRTNJLE9BQXpDO0FBQWtEbUosV0FBSyxFQUFMQSxLQUFsRDtBQUF5RGUsZ0JBQVUsRUFBVkEsVUFBekQ7QUFBcUU1RSxhQUFPLEVBQVBBO0FBQXJFLEtBQUQsQ0FBOUM7QUFDQSxXQUFPLEtBQVA7QUFFSCxHQVhEO0FBWUF4RyxRQUFNLENBQUM0SCxFQUFQLENBQVVwRSxLQUFLLENBQUN5WSxlQUFoQixFQUFpQyxVQUFBeFgsSUFBSSxFQUFJO0FBQUEsUUFFL0JoRSxJQUYrQixHQUVOZ0UsSUFGTSxDQUUvQmhFLElBRitCO0FBQUEsUUFFekJ1YixLQUZ5QixHQUVOdlgsSUFGTSxDQUV6QnVYLEtBRnlCO0FBQUEsUUFFbEJ4VixPQUZrQixHQUVOL0IsSUFGTSxDQUVsQitCLE9BRmtCO0FBR3JDLFFBQUl1UyxTQUFTLEdBQUc3VixJQUFJLENBQUM4VixLQUFMLENBQVc5QyxZQUFZLENBQUMrQyxPQUFiLENBQXFCLE1BQXJCLENBQVgsQ0FBaEI7O0FBQ0EsUUFBSUYsU0FBUyxJQUFJQSxTQUFTLENBQUNyWCxFQUFWLElBQWdCakIsSUFBN0IsSUFBcUNzWSxTQUFTLENBQUMvVSxNQUFWLENBQWlCQyxXQUFqQixJQUFnQytYLEtBQXpFLEVBQWdGO0FBQzVFLGFBQU8sS0FBUDtBQUNILEtBRkQsTUFFSztBQUVELFVBQUdFLGFBQUgsRUFBaUI7QUFDYkMsb0JBQVksQ0FBQ0QsYUFBRCxDQUFaO0FBQ0g7O0FBQ0QsVUFBSUUsU0FBUyxHQUFHelMsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWhCO0FBQ0EsVUFBR3dTLFNBQVMsQ0FBQ2pQLFlBQVYsQ0FBdUIsU0FBdkIsS0FBcUMzRyxPQUF4QyxFQUNBNFYsU0FBUyxDQUFDclAsU0FBVixDQUFvQnVELEdBQXBCLENBQXdCLE1BQXhCLEVBUEMsQ0FRRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFVBQUk0TCxhQUFhLEdBQUdoSCxVQUFVLENBQUMsWUFBVztBQUN0QyxZQUFJa0gsU0FBUyxHQUFHelMsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWhCO0FBQ0EsWUFBR3dTLFNBQVMsQ0FBQ2pQLFlBQVYsQ0FBdUIsU0FBdkIsS0FBcUMzRyxPQUF4QyxFQUNBNFYsU0FBUyxDQUFDclAsU0FBVixDQUFvQjZCLE1BQXBCLENBQTJCLE1BQTNCO0FBQ0gsT0FKNkIsRUFJM0IsSUFKMkIsQ0FBOUI7QUFLQSxhQUFPLEtBQVA7QUFDSDtBQUNKLEdBMUJEO0FBNEJBNU8sUUFBTSxDQUFDNEgsRUFBUCxDQUFVcEUsS0FBSyxDQUFDNlksZUFBaEIsRUFBaUMsVUFBQTVYLElBQUksRUFBSTtBQUVyQzZLLFVBQU0sQ0FBQ3lHLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCcFQsK0NBQU0sQ0FBQ2lJLFVBQVAsQ0FBa0JDLEdBQXpDO0FBQ0gsR0FIRDtBQUtBOUssUUFBTSxDQUFDNEgsRUFBUCxDQUFVcEUsS0FBSyxDQUFDOFkseUJBQWhCLEVBQTJDLFVBQUE3WCxJQUFJLEVBQUk7QUFFL0NwQixlQUFXLENBQUNOLEtBQVosQ0FBa0J1RixRQUFsQixDQUE0QnhHLDJFQUEyQixFQUF2RDtBQUNILEdBSEQ7QUFLQTlCLFFBQU0sQ0FBQzRILEVBQVAsQ0FBVXBFLEtBQUssQ0FBQytZLHlCQUFoQixFQUEyQyxVQUFBOVgsSUFBSSxFQUFJO0FBRS9DLFFBQUl4QyxRQUFRLEdBQUd3QyxJQUFJLENBQUN4QyxRQUFwQjtBQUNBaEMsV0FBTyxDQUFDQyxHQUFSLENBQVkrQixRQUFaLEVBQXNCdUIsS0FBSyxDQUFDK1kseUJBQTVCO0FBQ0FsWixlQUFXLENBQUNOLEtBQVosQ0FBa0J1RixRQUFsQixDQUEyQnRHLDhEQUFjLENBQUM7QUFBRWtILFdBQUssRUFBRSxJQUFUO0FBQWV6RSxVQUFJLEVBQUV4QztBQUFyQixLQUFELENBQXpDO0FBQ0gsR0FMRDtBQU9BakMsUUFBTSxDQUFDNEgsRUFBUCxDQUFVcEUsS0FBSyxDQUFDZ1osNEJBQWhCLEVBQThDLFVBQUEvWCxJQUFJLEVBQUk7QUFFbER4RSxXQUFPLENBQUNDLEdBQVIsQ0FBYXVFLElBQWIsRUFBbUJqQixLQUFLLENBQUNnWiw0QkFBekI7QUFGa0QsUUFJNUMvYixJQUo0QyxHQUlTZ0UsSUFKVCxDQUk1Q2hFLElBSjRDO0FBQUEsUUFJdEN1YixLQUpzQyxHQUlTdlgsSUFKVCxDQUl0Q3VYLEtBSnNDO0FBQUEsUUFJL0I5YSxPQUorQixHQUlTdUQsSUFKVCxDQUkvQnZELE9BSitCO0FBQUEsUUFJdEJtSixLQUpzQixHQUlTNUYsSUFKVCxDQUl0QjRGLEtBSnNCO0FBQUEsUUFJZmUsVUFKZSxHQUlTM0csSUFKVCxDQUlmMkcsVUFKZTtBQUFBLFFBSUg1RSxPQUpHLEdBSVMvQixJQUpULENBSUgrQixPQUpHO0FBS2xELFFBQUl1UyxTQUFTLEdBQUc3VixJQUFJLENBQUM4VixLQUFMLENBQVc5QyxZQUFZLENBQUMrQyxPQUFiLENBQXFCLE1BQXJCLENBQVgsQ0FBaEI7QUFDQSxRQUFJd0QsV0FBVyxHQUFHO0FBQUV0YyxVQUFJLEVBQUc0WSxTQUFTLENBQUNyWCxFQUFWLElBQWdCakIsSUFBekI7QUFBZ0NvSixhQUFPLEVBQUUzSSxPQUF6QztBQUFrRG1KLFdBQUssRUFBTEEsS0FBbEQ7QUFBeURlLGdCQUFVLEVBQVZBLFVBQXpEO0FBQXFFNUUsYUFBTyxFQUFQQTtBQUFyRSxLQUFsQjtBQUNBbkQsZUFBVyxDQUFDTixLQUFaLENBQWtCdUYsUUFBbEIsQ0FBNEJsSCxrRUFBa0IsQ0FBQ3FiLFdBQUQsQ0FBOUM7O0FBRUEsUUFBSS9WLGFBQWEsbUNBQVFqQyxJQUFJLENBQUNwQyxPQUFiO0FBQXNCZ0csWUFBTSxFQUFFO0FBQTlCLE1BQWpCOztBQUNBaEYsZUFBVyxDQUFDTixLQUFaLENBQWtCdUYsUUFBbEIsQ0FBMkJsRyw2REFBYSxDQUFDc0UsYUFBRCxDQUF4QztBQUNBVixpREFBQyxDQUFDQyxLQUFGLENBQVFnQixLQUFSO0FBQ0EsV0FBTyxLQUFQO0FBQ0gsR0FiRDtBQWVBakgsUUFBTSxDQUFDNEgsRUFBUCxDQUFVcEUsS0FBSyxDQUFDa1osa0NBQWhCLEVBQW9ELFVBQUFqWSxJQUFJLEVBQUk7QUFFeER1QixpREFBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJPLElBQXZCLENBQTRCLGVBQTVCLEVBQTZDb1csSUFBN0MsQ0FBa0RsWSxJQUFJLENBQUN2RCxPQUF2RDtBQUNBOEUsaURBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCQyxLQUF2QixDQUE2QjtBQUN6QkMsaUJBQVcsRUFBRSxLQURZO0FBRXpCQyxnQkFBVSxFQUFFLEtBRmE7QUFHekJDLGVBQVMsRUFBRTtBQUhjLEtBQTdCO0FBS0EsV0FBTyxLQUFQO0FBQ0gsR0FURDtBQVVILEM7Ozs7Ozs7Ozs7OztBQzFvQkQ7QUFBQTtBQUFBLElBQUkzRixJQUFJLEdBQUcsSUFBWDs7QUFDQSxJQUFJLE9BQU9xVSxPQUFQLEtBQW9CLFdBQXhCLEVBQXFDO0FBQ2pDclUsTUFBSSxHQUFHeUMsSUFBSSxDQUFDOFYsS0FBTCxDQUFXOUMsWUFBWSxDQUFDK0MsT0FBYixDQUFxQixNQUFyQixDQUFYLENBQVA7QUFDSDs7QUFFRDtBQUNlLDJFQUFnQztBQUFBLE1BQXRCalcsS0FBc0IsdUVBQWR2QyxJQUFjO0FBQUEsTUFBUm1jLE1BQVE7O0FBQzNDLFVBQVFBLE1BQU0sQ0FBQ3pjLElBQWY7QUFDSSxTQUFLQyx1REFBSSxDQUFDTSxJQUFMLENBQVVDLFdBQWY7QUFDSSxhQUFPaWMsTUFBTSxDQUFDcmMsT0FBZDs7QUFDSjtBQUNJLGFBQU95QyxLQUFQO0FBSlI7QUFNSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JELElBQUlmLFFBQVEsR0FBRztBQUNYaUgsT0FBSyxFQUFFLEtBREk7QUFFWHpFLE1BQUksRUFBRTtBQUZLLENBQWY7QUFLQTtBQUNlLDJFQUFvQztBQUFBLE1BQTFCekIsS0FBMEIsdUVBQWxCZixRQUFrQjtBQUFBLE1BQVIyYSxNQUFROztBQUMvQyxVQUFRQSxNQUFNLENBQUN6YyxJQUFmO0FBQ0ksU0FBS0MsdURBQUksQ0FBQzhCLE9BQUwsQ0FBYUMsY0FBbEI7QUFDSSxhQUFPeWEsTUFBTSxDQUFDcmMsT0FBZDs7QUFFSixTQUFLSCx1REFBSSxDQUFDOEIsT0FBTCxDQUFhSSxjQUFsQjtBQUVJLFVBQUcsQ0FBQ1UsS0FBSyxDQUFDeUIsSUFBTixDQUFXb1UsSUFBWCxDQUFnQixVQUFBeFcsT0FBTztBQUFBLGVBQUlBLE9BQU8sQ0FBQ1gsRUFBUixLQUFla2IsTUFBTSxDQUFDcmMsT0FBUCxDQUFlb0csVUFBbEM7QUFBQSxPQUF2QixDQUFKLEVBQXlFO0FBQ3JFb1AsZ0JBQVEsQ0FBQzhHLE1BQVQ7QUFDSDs7QUFDRCxVQUFJQyxXQUFXLEdBQUc5WixLQUFLLENBQUN5QixJQUFOLENBQVdDLEdBQVgsQ0FBZ0IsVUFBQXJDLE9BQU8sRUFBSTtBQUN6QyxZQUFHQSxPQUFPLENBQUNYLEVBQVIsS0FBZWtiLE1BQU0sQ0FBQ3JjLE9BQVAsQ0FBZW9HLFVBQWpDLEVBQTZDO0FBQzNDLGlEQUFZdEUsT0FBWixHQUF3QnVhLE1BQU0sQ0FBQ3JjLE9BQS9CO0FBQ0Q7O0FBQ0QsZUFBTzhCLE9BQVA7QUFDSCxPQUxpQixDQUFsQjtBQU1BLDZDQUFhVyxLQUFiO0FBQW9CeUIsWUFBSSxFQUFFcVk7QUFBMUI7O0FBRUo7QUFDSSxhQUFPOVosS0FBUDtBQWxCUjtBQW9CSCxDOzs7Ozs7Ozs7Ozs7QUMzQkQ7QUFBQTtBQUFBLFNBQVMrWixZQUFULEdBQXdCO0FBQ3RCO0FBQ0UsUUFBSUMsT0FBTyxHQUFHLFNBQWQsQ0FERixDQUVFOztBQUNBLFFBQUlDLElBQUksR0FBR0MsU0FBUyxDQUFDQyxVQUFyQjtBQUNBLFFBQUlDLElBQUksR0FBR0YsU0FBUyxDQUFDRyxTQUFyQjtBQUNBLFFBQUlsQyxPQUFPLEdBQUcrQixTQUFTLENBQUNJLE9BQXhCO0FBQ0EsUUFBSUMsT0FBTyxHQUFHLEtBQUt6QyxVQUFVLENBQUNvQyxTQUFTLENBQUNDLFVBQVgsQ0FBN0I7QUFDQSxRQUFJSyxZQUFZLEdBQUcxSCxRQUFRLENBQUNvSCxTQUFTLENBQUNDLFVBQVgsRUFBdUIsRUFBdkIsQ0FBM0I7QUFDQSxRQUFJTSxVQUFKLEVBQWdCQyxTQUFoQixFQUEyQkMsRUFBM0IsQ0FSRixDQVNFOztBQUNBLFFBQUksQ0FBQ0QsU0FBUyxHQUFHTixJQUFJLENBQUNsTixPQUFMLENBQWEsT0FBYixDQUFiLEtBQXVDLENBQUMsQ0FBNUMsRUFBK0M7QUFDN0NpTCxhQUFPLElBQUksT0FBWDtBQUNBb0MsYUFBTyxHQUFHSCxJQUFJLENBQUNqUCxTQUFMLENBQWV1UCxTQUFTLEdBQUcsQ0FBM0IsQ0FBVjs7QUFDQSxVQUFJLENBQUNBLFNBQVMsR0FBR04sSUFBSSxDQUFDbE4sT0FBTCxDQUFhLFNBQWIsQ0FBYixLQUF5QyxDQUFDLENBQTlDLEVBQWlEO0FBQy9DcU4sZUFBTyxHQUFHSCxJQUFJLENBQUNqUCxTQUFMLENBQWV1UCxTQUFTLEdBQUcsQ0FBM0IsQ0FBVjtBQUNEO0FBQ0YsS0FoQkgsQ0FpQkU7OztBQUNBLFFBQUksQ0FBQ0EsU0FBUyxHQUFHTixJQUFJLENBQUNsTixPQUFMLENBQWEsS0FBYixDQUFiLEtBQXFDLENBQUMsQ0FBMUMsRUFBNkM7QUFDM0NpTCxhQUFPLElBQUksT0FBWDtBQUNBb0MsYUFBTyxHQUFHSCxJQUFJLENBQUNqUCxTQUFMLENBQWV1UCxTQUFTLEdBQUcsQ0FBM0IsQ0FBVjtBQUNELEtBSEQsQ0FJQTtBQUpBLFNBS0ssSUFBSSxDQUFDQSxTQUFTLEdBQUdOLElBQUksQ0FBQ2xOLE9BQUwsQ0FBYSxLQUFiLENBQWIsS0FBcUMsQ0FBQyxDQUExQyxFQUE2QztBQUNoRGlMLGVBQU8sSUFBSSxnQkFBWDtBQUNBb0MsZUFBTyxHQUFHSCxJQUFJLENBQUNqUCxTQUFMLENBQWV1UCxTQUFTLEdBQUcsQ0FBM0IsQ0FBVjtBQUNELE9BSEksQ0FJTDtBQUpLLFdBS0EsSUFBSSxDQUFDQSxTQUFTLEdBQUdOLElBQUksQ0FBQ2xOLE9BQUwsQ0FBYSxNQUFiLENBQWIsS0FBc0MsQ0FBQyxDQUEzQyxFQUE4QztBQUNqRGlMLGlCQUFPLElBQUksNkJBQVg7QUFDQW9DLGlCQUFPLEdBQUdILElBQUksQ0FBQ2pQLFNBQUwsQ0FBZXVQLFNBQVMsR0FBRyxDQUEzQixDQUFWO0FBQ0QsU0FISSxDQUlMO0FBSkssYUFLQSxJQUFJLENBQUNBLFNBQVMsR0FBR04sSUFBSSxDQUFDbE4sT0FBTCxDQUFhLEtBQWIsQ0FBYixLQUFxQyxDQUFDLENBQTFDLEVBQTZDO0FBQ2hEaUwsbUJBQU8sSUFBSSxRQUFYO0FBQ0FvQyxtQkFBTyxHQUFHSCxJQUFJLENBQUNqUCxTQUFMLENBQWV1UCxTQUFTLEdBQUcsQ0FBM0IsQ0FBVjtBQUNELFdBSEksQ0FJTDtBQUpLLGVBS0EsSUFBSSxDQUFDQSxTQUFTLEdBQUdOLElBQUksQ0FBQ2xOLE9BQUwsQ0FBYSxRQUFiLENBQWIsS0FBd0MsQ0FBQyxDQUE3QyxFQUFnRDtBQUNuRGlMLHFCQUFPLElBQUksUUFBWDtBQUNBb0MscUJBQU8sR0FBR0gsSUFBSSxDQUFDalAsU0FBTCxDQUFldVAsU0FBUyxHQUFHLENBQTNCLENBQVY7QUFDRCxhQUhJLENBSUw7QUFKSyxpQkFLQSxJQUFJLENBQUNBLFNBQVMsR0FBR04sSUFBSSxDQUFDbE4sT0FBTCxDQUFhLFFBQWIsQ0FBYixLQUF3QyxDQUFDLENBQTdDLEVBQWdEO0FBQ25EaUwsdUJBQU8sSUFBSSxRQUFYO0FBQ0FvQyx1QkFBTyxHQUFHSCxJQUFJLENBQUNqUCxTQUFMLENBQWV1UCxTQUFTLEdBQUcsQ0FBM0IsQ0FBVjs7QUFDQSxvQkFBSSxDQUFDQSxTQUFTLEdBQUdOLElBQUksQ0FBQ2xOLE9BQUwsQ0FBYSxTQUFiLENBQWIsS0FBeUMsQ0FBQyxDQUE5QyxFQUFpRDtBQUMvQ3FOLHlCQUFPLEdBQUdILElBQUksQ0FBQ2pQLFNBQUwsQ0FBZXVQLFNBQVMsR0FBRyxDQUEzQixDQUFWO0FBQ0Q7QUFDRixlQU5JLENBT0w7QUFQSyxtQkFRQSxJQUFJLENBQUNBLFNBQVMsR0FBR04sSUFBSSxDQUFDbE4sT0FBTCxDQUFhLFNBQWIsQ0FBYixLQUF5QyxDQUFDLENBQTlDLEVBQWlEO0FBQ3BEaUwseUJBQU8sSUFBSSxTQUFYO0FBQ0FvQyx5QkFBTyxHQUFHSCxJQUFJLENBQUNqUCxTQUFMLENBQWV1UCxTQUFTLEdBQUcsQ0FBM0IsQ0FBVjtBQUNELGlCQUhJLENBSUw7QUFKSyxxQkFLQSxJQUFJTixJQUFJLENBQUNsTixPQUFMLENBQWEsVUFBYixLQUE0QixDQUFDLENBQWpDLEVBQW9DO0FBQ3ZDaUwsMkJBQU8sSUFBSSw2QkFBWDtBQUNBb0MsMkJBQU8sR0FBR0gsSUFBSSxDQUFDalAsU0FBTCxDQUFlaVAsSUFBSSxDQUFDbE4sT0FBTCxDQUFhLEtBQWIsSUFBc0IsQ0FBckMsQ0FBVjtBQUNELG1CQUhJLENBSUw7QUFKSyx1QkFLQSxJQUFJLENBQUN1TixVQUFVLEdBQUdMLElBQUksQ0FBQ2xQLFdBQUwsQ0FBaUIsR0FBakIsSUFBd0IsQ0FBdEMsS0FBNEN3UCxTQUFTLEdBQUdOLElBQUksQ0FBQ2xQLFdBQUwsQ0FBaUIsR0FBakIsQ0FBeEQsQ0FBSixFQUFvRjtBQUN2RmlOLDZCQUFPLEdBQUdpQyxJQUFJLENBQUNqUCxTQUFMLENBQWVzUCxVQUFmLEVBQTJCQyxTQUEzQixDQUFWO0FBQ0FILDZCQUFPLEdBQUdILElBQUksQ0FBQ2pQLFNBQUwsQ0FBZXVQLFNBQVMsR0FBRyxDQUEzQixDQUFWOztBQUNBLDBCQUFJdkMsT0FBTyxDQUFDeUMsV0FBUixNQUF5QnpDLE9BQU8sQ0FBQzBDLFdBQVIsRUFBN0IsRUFBb0Q7QUFDbEQxQywrQkFBTyxHQUFHK0IsU0FBUyxDQUFDSSxPQUFwQjtBQUNEO0FBQ0YscUJBbkVILENBb0VFOzs7QUFDQSxRQUFJLENBQUNLLEVBQUUsR0FBR0osT0FBTyxDQUFDck4sT0FBUixDQUFnQixHQUFoQixDQUFOLEtBQStCLENBQUMsQ0FBcEMsRUFBdUNxTixPQUFPLEdBQUdBLE9BQU8sQ0FBQ3BQLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBcUJ3UCxFQUFyQixDQUFWO0FBQ3ZDLFFBQUksQ0FBQ0EsRUFBRSxHQUFHSixPQUFPLENBQUNyTixPQUFSLENBQWdCLEdBQWhCLENBQU4sS0FBK0IsQ0FBQyxDQUFwQyxFQUF1Q3FOLE9BQU8sR0FBR0EsT0FBTyxDQUFDcFAsU0FBUixDQUFrQixDQUFsQixFQUFxQndQLEVBQXJCLENBQVY7QUFDdkMsUUFBSSxDQUFDQSxFQUFFLEdBQUdKLE9BQU8sQ0FBQ3JOLE9BQVIsQ0FBZ0IsR0FBaEIsQ0FBTixLQUErQixDQUFDLENBQXBDLEVBQXVDcU4sT0FBTyxHQUFHQSxPQUFPLENBQUNwUCxTQUFSLENBQWtCLENBQWxCLEVBQXFCd1AsRUFBckIsQ0FBVjtBQUN2Q0gsZ0JBQVksR0FBRzFILFFBQVEsQ0FBQyxLQUFLeUgsT0FBTixFQUFlLEVBQWYsQ0FBdkI7O0FBQ0EsUUFBSU8sS0FBSyxDQUFDTixZQUFELENBQVQsRUFBeUI7QUFDdkJELGFBQU8sR0FBRyxLQUFLekMsVUFBVSxDQUFDb0MsU0FBUyxDQUFDQyxVQUFYLENBQXpCO0FBQ0FLLGtCQUFZLEdBQUcxSCxRQUFRLENBQUNvSCxTQUFTLENBQUNDLFVBQVgsRUFBdUIsRUFBdkIsQ0FBdkI7QUFDRCxLQTVFSCxDQThFRTs7O0FBQ0EsUUFBSTdCLEVBQUUsR0FBRzBCLE9BQVQ7QUFDQSxRQUFJZSxhQUFhLEdBQUcsQ0FBQztBQUNuQkMsT0FBQyxFQUFFLFlBRGdCO0FBRW5CQyxPQUFDLEVBQUU7QUFGZ0IsS0FBRCxFQUlwQjtBQUNFRCxPQUFDLEVBQUUsYUFETDtBQUVFQyxPQUFDLEVBQUU7QUFGTCxLQUpvQixFQVFwQjtBQUNFRCxPQUFDLEVBQUUsV0FETDtBQUVFQyxPQUFDLEVBQUU7QUFGTCxLQVJvQixFQVlwQjtBQUNFRCxPQUFDLEVBQUUsV0FETDtBQUVFQyxPQUFDLEVBQUU7QUFGTCxLQVpvQixFQWdCcEI7QUFDRUQsT0FBQyxFQUFFLGVBREw7QUFFRUMsT0FBQyxFQUFFO0FBRkwsS0FoQm9CLEVBb0JwQjtBQUNFRCxPQUFDLEVBQUUscUJBREw7QUFFRUMsT0FBQyxFQUFFO0FBRkwsS0FwQm9CLEVBd0JwQjtBQUNFRCxPQUFDLEVBQUUsWUFETDtBQUVFQyxPQUFDLEVBQUU7QUFGTCxLQXhCb0IsRUE0QnBCO0FBQ0VELE9BQUMsRUFBRSxjQURMO0FBRUVDLE9BQUMsRUFBRTtBQUZMLEtBNUJvQixFQWdDcEI7QUFDRUQsT0FBQyxFQUFFLFlBREw7QUFFRUMsT0FBQyxFQUFFO0FBRkwsS0FoQ29CLEVBb0NwQjtBQUNFRCxPQUFDLEVBQUUsWUFETDtBQUVFQyxPQUFDLEVBQUU7QUFGTCxLQXBDb0IsRUF3Q3BCO0FBQ0VELE9BQUMsRUFBRSxZQURMO0FBRUVDLE9BQUMsRUFBRTtBQUZMLEtBeENvQixFQTRDcEI7QUFDRUQsT0FBQyxFQUFFLGdCQURMO0FBRUVDLE9BQUMsRUFBRTtBQUZMLEtBNUNvQixFQWdEcEI7QUFDRUQsT0FBQyxFQUFFLFlBREw7QUFFRUMsT0FBQyxFQUFFO0FBRkwsS0FoRG9CLEVBb0RwQjtBQUNFRCxPQUFDLEVBQUUsY0FETDtBQUVFQyxPQUFDLEVBQUU7QUFGTCxLQXBEb0IsRUF3RHBCO0FBQ0VELE9BQUMsRUFBRSxTQURMO0FBRUVDLE9BQUMsRUFBRTtBQUZMLEtBeERvQixFQTREcEI7QUFDRUQsT0FBQyxFQUFFLFVBREw7QUFFRUMsT0FBQyxFQUFFO0FBRkwsS0E1RG9CLEVBZ0VwQjtBQUNFRCxPQUFDLEVBQUUsUUFETDtBQUVFQyxPQUFDLEVBQUU7QUFGTCxLQWhFb0IsRUFvRXBCO0FBQ0VELE9BQUMsRUFBRSxPQURMO0FBRUVDLE9BQUMsRUFBRTtBQUZMLEtBcEVvQixFQXdFcEI7QUFDRUQsT0FBQyxFQUFFLEtBREw7QUFFRUMsT0FBQyxFQUFFO0FBRkwsS0F4RW9CLEVBNEVwQjtBQUNFRCxPQUFDLEVBQUUsVUFETDtBQUVFQyxPQUFDLEVBQUU7QUFGTCxLQTVFb0IsRUFnRnBCO0FBQ0VELE9BQUMsRUFBRSxRQURMO0FBRUVDLE9BQUMsRUFBRTtBQUZMLEtBaEZvQixFQW9GcEI7QUFDRUQsT0FBQyxFQUFFLEtBREw7QUFFRUMsT0FBQyxFQUFFO0FBRkwsS0FwRm9CLEVBd0ZwQjtBQUNFRCxPQUFDLEVBQUUsTUFETDtBQUVFQyxPQUFDLEVBQUU7QUFGTCxLQXhGb0IsRUE0RnBCO0FBQ0VELE9BQUMsRUFBRSxNQURMO0FBRUVDLE9BQUMsRUFBRTtBQUZMLEtBNUZvQixFQWdHcEI7QUFDRUQsT0FBQyxFQUFFLE1BREw7QUFFRUMsT0FBQyxFQUFFO0FBRkwsS0FoR29CLEVBb0dwQjtBQUNFRCxPQUFDLEVBQUUsWUFETDtBQUVFQyxPQUFDLEVBQUU7QUFGTCxLQXBHb0IsQ0FBcEI7O0FBeUdBLFNBQUssSUFBSXZjLEVBQVQsSUFBZXFjLGFBQWYsRUFBOEI7QUFDNUIsVUFBSUcsRUFBRSxHQUFHSCxhQUFhLENBQUNyYyxFQUFELENBQXRCOztBQUNBLFVBQUl3YyxFQUFFLENBQUNELENBQUgsQ0FBS0UsSUFBTCxDQUFVZixJQUFWLENBQUosRUFBcUI7QUFDbkI5QixVQUFFLEdBQUc0QyxFQUFFLENBQUNGLENBQVI7QUFDQTtBQUNEO0FBQ0Y7O0FBQ0QsUUFBSXpDLFNBQVMsR0FBR3lCLE9BQWhCOztBQUNBLFFBQUksVUFBVW1CLElBQVYsQ0FBZTdDLEVBQWYsQ0FBSixFQUF3QjtBQUN0QkMsZUFBUyxHQUFHLGVBQWV6SyxJQUFmLENBQW9Cd0ssRUFBcEIsRUFBd0IsQ0FBeEIsQ0FBWjtBQUNBQSxRQUFFLEdBQUcsU0FBTDtBQUNEOztBQUNELFlBQVFBLEVBQVI7QUFDRSxXQUFLLFVBQUw7QUFDRUMsaUJBQVMsR0FBRyx5QkFBeUJ6SyxJQUF6QixDQUE4QnNNLElBQTlCLEVBQW9DLENBQXBDLENBQVo7QUFDQTs7QUFFRixXQUFLLFNBQUw7QUFDRTdCLGlCQUFTLEdBQUcsc0JBQXNCekssSUFBdEIsQ0FBMkJzTSxJQUEzQixFQUFpQyxDQUFqQyxDQUFaO0FBQ0E7O0FBRUYsV0FBSyxLQUFMO0FBQ0U3QixpQkFBUyxHQUFHLHlCQUF5QnpLLElBQXpCLENBQThCbU0sSUFBOUIsQ0FBWjtBQUNBMUIsaUJBQVMsR0FBR0EsU0FBUyxDQUFDLENBQUQsQ0FBVCxHQUFlLEdBQWYsR0FBcUJBLFNBQVMsQ0FBQyxDQUFELENBQTlCLEdBQW9DLEdBQXBDLElBQTJDQSxTQUFTLENBQUMsQ0FBRCxDQUFULEdBQWUsQ0FBMUQsQ0FBWjtBQUNBO0FBWko7QUFjRDtBQUVELFNBQU87QUFDTEosV0FBTyxFQUFFQSxPQUFPLENBQUNpRCxRQUFSLEVBREo7QUFFTGhELHVCQUFtQixFQUFFb0MsWUFBWSxDQUFDWSxRQUFiLEVBRmhCO0FBR0wvQyxrQkFBYyxFQUFFa0MsT0FBTyxDQUFDYSxRQUFSLEVBSFg7QUFJTDlDLE1BQUUsRUFBRUEsRUFBRSxDQUFDOEMsUUFBSCxFQUpDO0FBS0w3QyxhQUFTLEVBQUVBLFNBQVMsQ0FBQzZDLFFBQVY7QUFMTixHQUFQO0FBT0Q7O0FBQ0QsSUFBSSxPQUFPdEosT0FBUCxLQUFvQixXQUF4QixFQUFxQztBQUNuQ29CLGNBQVksQ0FBQ0MsT0FBYixDQUFxQixRQUFyQixFQUErQmpULElBQUksQ0FBQ0MsU0FBTCxDQUFlNFosWUFBWSxFQUEzQixDQUEvQjtBQUNEOztBQUNjLFNBQVNzQixtQkFBVCxHQUFxRDtBQUFBLE1BQXhCcmIsS0FBd0IsdUVBQWhCK1osWUFBWSxFQUFJO0FBQ2xFLFNBQU8vWixLQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDbk9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQSxJQUFNMlIsT0FBTyxHQUFHMkosNkRBQWUsQ0FBQztBQUM1QmxiLFFBQU0sRUFBSWliLGtEQURrQjtBQUU1Qi9aLFVBQVEsRUFBRUEscURBRmtCO0FBRzVCdEUsUUFBTSxFQUFJdWUsa0RBSGtCO0FBSTVCbGEsT0FBSyxFQUFLbWEsZ0RBSmtCO0FBSzVCbmMsU0FBTyxFQUFHbUMsbURBQU9BO0FBTFcsQ0FBRCxDQUEvQjtBQU9lbVEsc0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQUE7QUFBQTtBQUFBO0FBQ2UsU0FBUzRKLGFBQVQsR0FBOEM7QUFBQSxNQUF2QnZiLEtBQXVCLHVFQUFmLElBQWU7QUFBQSxNQUFSNFosTUFBUTs7QUFDekQsVUFBUUEsTUFBTSxDQUFDemMsSUFBZjtBQUNJLFNBQUtDLHVEQUFJLENBQUNDLE9BQUwsQ0FBYUMsYUFBbEI7QUFDSSxhQUFPc2MsTUFBTSxDQUFDcmMsT0FBZDs7QUFDSjtBQUNJLGFBQU95QyxLQUFQO0FBSlI7QUFNSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQRDtBQUNBO0FBQ0E7QUFDQSxJQUFJeWIsZUFBZSxHQUFHLEVBQXRCO0FBQ0E7QUFDQTtBQUNlLDJFQUEyQztBQUFBLE1BQWpDemIsS0FBaUMsdUVBQXpCeWIsZUFBeUI7QUFBQSxNQUFSN0IsTUFBUTs7QUFDeEQsVUFBUUEsTUFBTSxDQUFDemMsSUFBZjtBQUNFLFNBQUtDLHVEQUFJLENBQUNXLE9BQUwsQ0FBYVksZUFBbEI7QUFDRSxhQUFPcUIsS0FBSyxDQUFDMEIsR0FBTixDQUFXLFVBQUFxSixJQUFJLEVBQUk7QUFDeEIsWUFBR0EsSUFBSSxDQUFDdE4sSUFBTCxDQUFVaUIsRUFBVixJQUFnQmtiLE1BQU0sQ0FBQ3JjLE9BQTFCLEVBQW1DO0FBQ2pDLGlEQUFZd04sSUFBWjtBQUFrQnROLGdCQUFJLGtDQUFTc04sSUFBSSxDQUFDdE4sSUFBZDtBQUFvQmdLLG9CQUFNLEVBQUc7QUFBN0I7QUFBdEI7QUFDRDs7QUFDRCxpQ0FBWXNELElBQVo7QUFDRCxPQUxNLENBQVA7O0FBTUYsU0FBSzNOLHVEQUFJLENBQUNXLE9BQUwsQ0FBYWMsa0JBQWxCO0FBQ0ksYUFBT21CLEtBQUssQ0FBQzBCLEdBQU4sQ0FBVyxVQUFBcUosSUFBSSxFQUFJO0FBQ3hCLFlBQUdBLElBQUksQ0FBQ3ROLElBQUwsQ0FBVWlCLEVBQVYsSUFBZ0JrYixNQUFNLENBQUNyYyxPQUExQixFQUFtQztBQUNqQyxpREFBWXdOLElBQVo7QUFBa0J0TixnQkFBSSxrQ0FBU3NOLElBQUksQ0FBQ3ROLElBQWQ7QUFBb0JnSyxvQkFBTSxFQUFHO0FBQTdCO0FBQXRCO0FBQ0Q7O0FBQ0QsaUNBQVlzRCxJQUFaO0FBQ0QsT0FMTSxDQUFQOztBQU9KLFNBQUszTix1REFBSSxDQUFDc0MsSUFBTCxDQUFVQyx3QkFBZjtBQUNFLGFBQU9LLEtBQUssQ0FBQzBCLEdBQU4sQ0FBVyxVQUFBcUosSUFBSSxFQUFJO0FBQ3hCLFlBQUdBLElBQUksQ0FBQ3JNLEVBQUwsS0FBWWtiLE1BQU0sQ0FBQ3JjLE9BQXRCLEVBQStCO0FBQzdCLGlEQUFZd04sSUFBWjtBQUFrQnRILG9CQUFRLEVBQUc7QUFBN0I7QUFDRDs7QUFDRCwrQ0FBWXNILElBQVo7QUFBa0J0SCxrQkFBUSxFQUFHO0FBQTdCO0FBQ0QsT0FMTSxDQUFQOztBQU1GLFNBQUtyRyx1REFBSSxDQUFDVyxPQUFMLENBQWFDLGNBQWxCO0FBQ0UsYUFBTzRiLE1BQU0sQ0FBQ3JjLE9BQWQ7O0FBQ0YsU0FBS0gsdURBQUksQ0FBQ1csT0FBTCxDQUFhSSxXQUFsQjtBQUNFLGFBQU82QixLQUFLLENBQUMwQixHQUFOLENBQVcsVUFBQThCLE9BQU8sRUFBSTtBQUMzQixZQUFHQSxPQUFPLENBQUNDLFFBQVIsS0FBcUIsSUFBeEIsRUFBOEI7QUFDNUIsaURBQVlELE9BQVo7QUFBcUJ0RixtQkFBTywrQkFBUXNGLE9BQU8sQ0FBQ3RGLE9BQWhCLElBQXlCMGIsTUFBTSxDQUFDcmMsT0FBaEM7QUFBNUI7QUFDRDs7QUFDRCxlQUFPaUcsT0FBUDtBQUNELE9BTE0sQ0FBUDs7QUFNRixTQUFLcEcsdURBQUksQ0FBQ1csT0FBTCxDQUFhZ0IsK0JBQWxCO0FBQ0UsYUFBT2lCLEtBQUssQ0FBQzBCLEdBQU4sQ0FBVyxVQUFBOEIsT0FBTyxFQUFJO0FBQzNCLFlBQUdBLE9BQU8sQ0FBQ0MsUUFBUixLQUFxQixJQUF4QixFQUE4QjtBQUM1QixjQUFJMkQsUUFBUSxHQUFHNUQsT0FBTyxDQUFDdEYsT0FBdkI7QUFDQWtKLGtCQUFRLEdBQUdBLFFBQVEsQ0FBQzFGLEdBQVQsQ0FBYyxVQUFBeEQsT0FBTyxFQUFJO0FBQUUsbURBQVlBLE9BQVo7QUFBcUJzUixrQkFBSSxFQUFFO0FBQTNCO0FBQW1DLFdBQTlELENBQVg7QUFDQSxpREFBWWhNLE9BQVo7QUFBcUJ0RixtQkFBTyxFQUFHa0o7QUFBL0I7QUFDRDs7QUFDRCxlQUFPNUQsT0FBUDtBQUNELE9BUE0sQ0FBUDs7QUFRRixTQUFLcEcsdURBQUksQ0FBQ1csT0FBTCxDQUFhTSxzQkFBbEI7QUFDRSxhQUFPMkIsS0FBSyxDQUFDMEIsR0FBTixDQUFXLFVBQUE4QixPQUFPLEVBQUk7QUFDM0IsWUFBR0EsT0FBTyxDQUFDOUUsRUFBUixLQUFla2IsTUFBTSxDQUFDcmMsT0FBUCxDQUFlaUcsT0FBakMsRUFBMEM7QUFDeEMsaURBQVlBLE9BQVo7QUFBcUJ0RixtQkFBTywrQkFBUXNGLE9BQU8sQ0FBQ3RGLE9BQWhCLElBQXlCMGIsTUFBTSxDQUFDcmMsT0FBaEM7QUFBNUI7QUFDRDs7QUFDRCxlQUFPaUcsT0FBUDtBQUNELE9BTE0sQ0FBUDs7QUFPRixTQUFLcEcsdURBQUksQ0FBQ1csT0FBTCxDQUFhUyxVQUFsQjtBQUNFLFVBQUlrZCxTQUFTLEdBQUcsS0FBaEI7QUFDQXplLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDQSxVQUFJeWUsUUFBUSxHQUFHM2IsS0FBSyxDQUFDMEIsR0FBTixDQUFXLFVBQUE4QixPQUFPLEVBQUk7QUFDbkMsWUFBSSxDQUFDa1ksU0FBRCxJQUFjbFksT0FBTyxDQUFDakYsV0FBdEIsSUFBcUNpRixPQUFPLENBQUNqRixXQUFSLENBQW9CcWQsUUFBcEIsQ0FBNkJoQyxNQUFNLENBQUNyYyxPQUFQLENBQWVnQixXQUE1QyxDQUF6QyxFQUFrRztBQUNoR21kLG1CQUFTLEdBQUcsSUFBWjtBQUNBLGlEQUFZbFksT0FBWjtBQUFxQkMsb0JBQVEsRUFBRztBQUFoQztBQUNEOztBQUNELCtDQUFZRCxPQUFaO0FBQXFCQyxrQkFBUSxFQUFHO0FBQWhDO0FBQ0QsT0FOYyxDQUFmOztBQU9BLFVBQUlpWSxTQUFKLEVBQWU7QUFDYixlQUFPQyxRQUFQO0FBQ0Q7O0FBQ0QsYUFBTzNiLEtBQVA7O0FBQ0Y7QUFDRSxhQUFPQSxLQUFQO0FBaEVKO0FBa0VELEM7Ozs7Ozs7Ozs7O0FDMUVELFVBQVUsbUJBQU8sQ0FBQyx5SkFBOEU7QUFDaEcsMEJBQTBCLG1CQUFPLENBQUMsa09BQW9IOztBQUV0Sjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQzs7Ozs7Ozs7Ozs7QUNsQkEsVUFBVSxtQkFBTyxDQUFDLHlKQUE4RTtBQUNoRywwQkFBMEIsbUJBQU8sQ0FBQyxvT0FBcUg7O0FBRXZKOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7OztBQ2xCQSxVQUFVLG1CQUFPLENBQUMseUpBQThFO0FBQ2hHLDBCQUEwQixtQkFBTyxDQUFDLDRPQUF5SDs7QUFFM0o7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0M7Ozs7Ozs7Ozs7O0FDbEJBLFVBQVUsbUJBQU8sQ0FBQyx5SkFBOEU7QUFDaEcsMEJBQTBCLG1CQUFPLENBQUMsd1BBQStIOztBQUVqSzs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQzs7Ozs7Ozs7Ozs7QUNsQkEsVUFBVSxtQkFBTyxDQUFDLHlKQUE4RTtBQUNoRywwQkFBMEIsbUJBQU8sQ0FBQyxrUEFBNEg7O0FBRTlKOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7OztBQ2xCQSxVQUFVLG1CQUFPLENBQUMseUpBQThFO0FBQ2hHLDBCQUEwQixtQkFBTyxDQUFDLDRPQUF5SDs7QUFFM0o7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0M7Ozs7Ozs7Ozs7O0FDbEJBLFVBQVUsbUJBQU8sQ0FBQyx5SkFBOEU7QUFDaEcsMEJBQTBCLG1CQUFPLENBQUMsa1BBQTRIOztBQUU5Sjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQzs7Ozs7Ozs7Ozs7QUNsQkEsVUFBVSxtQkFBTyxDQUFDLHlKQUE4RTtBQUNoRywwQkFBMEIsbUJBQU8sQ0FBQyx3T0FBdUg7O0FBRXpKOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7OztBQ2xCQSxVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLHlOQUErRzs7QUFFako7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0M7Ozs7Ozs7Ozs7O0FDbEJBLGUiLCJmaWxlIjoianMvaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXguanNcIixcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR3JlYXQgVmliZXNcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0dyZWF0X1ZpYmVzL0dyZWF0VmliZXMtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk11bGlcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L011bGkvTXVsaS1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkFyY2hpdm8tTWVkaXVtXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9BcmNoaXZvL0FyY2hpdm8tTWVkaXVtLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmVuY2hOaW5lLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0JlbmNoTmluZS9CZW5jaE5pbmUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNhd2FyYWJpLU1pbmNoby1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9TYXdhcmFiaV9NaW5jaG8vU2F3YXJhYmlNaW5jaG8tUmVndWxhci50dGZcXFwiKTtcXG59XFxuLmJnLWNoYXQtdGVtYWxhdGUge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG59XFxuXFxuLndyYXBwZXItcGFnZS1jaGF0IHtcXG4gIG1heC13aWR0aDogMTEwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcbi53cmFwcGVyLXBhZ2UtY2hhdDphZnRlciB7XFxuICBjbGVhcjogYm90aDtcXG4gIGNvbnRlbnQ6IFxcXCIuXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAwO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHcmVhdCBWaWJlc1xcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvR3JlYXRfVmliZXMvR3JlYXRWaWJlcy1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXVsaVxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvTXVsaS9NdWxpLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXJjaGl2by1NZWRpdW1cXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0FyY2hpdm8vQXJjaGl2by1NZWRpdW0udHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCZW5jaE5pbmUtUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvQmVuY2hOaW5lL0JlbmNoTmluZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2F3YXJhYmktTWluY2hvLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L1Nhd2FyYWJpX01pbmNoby9TYXdhcmFiaU1pbmNoby1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG4uY29tcG9uZW50LWxpc3QtZW1vamkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgcmlnaHQ6IDUwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG4uY29tcG9uZW50LWxpc3QtZW1vamk6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMDtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmNvbXBvbmVudC1saXN0LWVtb2ppLmZpcnN0LXNob3cge1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tbmFtZTogdGFkYTtcXG59XFxuLmNvbXBvbmVudC1saXN0LWVtb2ppLnNob3cge1xcbiAgdmlzaWJpbGl0eTogdW5zZXQ7XFxuICBoZWlnaHQ6IHVuc2V0O1xcbiAgYm90dG9tOiAxMDAlO1xcbiAgbGVmdDogMjBweDtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmNvbXBvbmVudC1lbW9qaSB7XFxuICB3aWR0aDogMzRweDtcXG4gIGhlaWdodDogMzRweDtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDI0cHgvMSBcXFwiSEVSTyBJY29uc1xcXCI7XFxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICBjb2xvcjogIzBkNDdhMTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR3JlYXQgVmliZXNcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0dyZWF0X1ZpYmVzL0dyZWF0VmliZXMtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk11bGlcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L011bGkvTXVsaS1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkFyY2hpdm8tTWVkaXVtXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9BcmNoaXZvL0FyY2hpdm8tTWVkaXVtLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmVuY2hOaW5lLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0JlbmNoTmluZS9CZW5jaE5pbmUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNhd2FyYWJpLU1pbmNoby1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9TYXdhcmFiaV9NaW5jaG8vU2F3YXJhYmlNaW5jaG8tUmVndWxhci50dGZcXFwiKTtcXG59XFxuLmNvbXBvbmVudC1oZWFkLWluZm8gLnVzZXItYWN0aXZlLWNoYXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xcbiAgbWluLWhlaWdodDogNzVweDtcXG59XFxuLmNvbXBvbmVudC1oZWFkLWluZm8gLnVzZXItYWN0aXZlLWNoYXQgLnN0YXRlLWF2YXRhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbWluLXdpZHRoOiA0MHB4O1xcbiAgbWluLWhlaWdodDogNDBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzZjNzU3ZDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyAudXNlci1hY3RpdmUtY2hhdCAuc3RhdGUtYXZhdGFyIGltZyB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIG1pbi13aWR0aDogNDBweDtcXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XFxufVxcbi5jb21wb25lbnQtaGVhZC1pbmZvIC51c2VyLWFjdGl2ZS1jaGF0IC50ZXh0LWluZm8ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiA3cHggN3B4IDdweCA1NXB4O1xcbiAgY29sb3I6ICMwZDQ3YTE7XFxufVxcbi5jb21wb25lbnQtaGVhZC1pbmZvIC51c2VyLWFjdGl2ZS1jaGF0IC50ZXh0LWluZm8gLm5hbWUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5jb21wb25lbnQtaGVhZC1pbmZvIC51c2VyLWFjdGl2ZS1jaGF0IC50ZXh0LWluZm8gLnRpbWUtb25saW5lIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6ICM2Yzc1N2Q7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyAudXNlci1hY3RpdmUtY2hhdCAudGV4dC1pbmZvIC50aW1lLW9ubGluZS5hY3RpdmUtbm93IHtcXG4gIGNvbG9yOiAjOGJjMzRhO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkdyZWF0IFZpYmVzXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9HcmVhdF9WaWJlcy9HcmVhdFZpYmVzLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNdWxpXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9NdWxpL011bGktVmFyaWFibGVGb250X3dnaHQudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmNoaXZvLU1lZGl1bVxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvQXJjaGl2by9BcmNoaXZvLU1lZGl1bS50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJlbmNoTmluZS1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9CZW5jaE5pbmUvQmVuY2hOaW5lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTYXdhcmFiaS1NaW5jaG8tUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvU2F3YXJhYmlfTWluY2hvL1Nhd2FyYWJpTWluY2hvLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbi5jb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDVweCA0NXB4IDAgMTAwcHg7XFxufVxcbi5jb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0IHRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxuICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgbWF4LWhlaWdodDogMTUwcHg7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICByZXNpemU6IG5vbmU7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxufVxcbi5jb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0IHRleHRhcmVhOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogIzBkNDdhMTtcXG4gIGNvbG9yOiAjMGQ0N2ExO1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCB0ZXh0YXJlYTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5jb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0ID4gaSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxMTtcXG4gIGJvdHRvbTogMjBweDtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGNvbG9yOiAjMGQ2ZWZkO1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCAuaGVyby1pY29uLmNhbGVuZGFyIHtcXG4gIGxlZnQ6IDVweDtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmhlcm8taWNvbi5lbW90aWNvbiB7XFxuICBsZWZ0OiAzNXB4O1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCAuaGVyby1pY29uLmZpbGUge1xcbiAgbGVmdDogNjVweDtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmhlcm8taWNvbi5zZW5kIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHotaW5kZXg6IDE7XFxuICByaWdodDogMTBweDtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmhlcm8taWNvbi5yZWFjdCB7XFxuICB6LWluZGV4OiAtMTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICByaWdodDogMHB4O1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCAuaW1hZ2UtYmxvY2sgLnJlbW92ZS1pbWFnZSB7XFxuICBtYXgtaGVpZ2h0OiAxMDBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5jb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0IC5pbWFnZS1ibG9jayAucmVtb3ZlLWltYWdlOmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNXB4O1xcbiAgcmlnaHQ6IDVweDtcXG4gIGNvbnRlbnQ6IFxcXCLzsIWXXFxcIjtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMjRweC8xIFxcXCJIRVJPIEljb25zXFxcIjtcXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmltYWdlLWJsb2NrIC5yZW1vdmUtaW1hZ2U6aG92ZXIgaW1nIHtcXG4gIG9wYWNpdHk6IDAuNDtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmltYWdlLWJsb2NrIC5yZW1vdmUtaW1hZ2U6aG92ZXI6YWZ0ZXIge1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICBhbmltYXRpb24tbmFtZTogdGFkYTtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmltYWdlLWJsb2NrIGltZyB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBvcGFjaXR5OiAwLjk7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkdyZWF0IFZpYmVzXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9HcmVhdF9WaWJlcy9HcmVhdFZpYmVzLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNdWxpXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9NdWxpL011bGktVmFyaWFibGVGb250X3dnaHQudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmNoaXZvLU1lZGl1bVxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvQXJjaGl2by9BcmNoaXZvLU1lZGl1bS50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJlbmNoTmluZS1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9CZW5jaE5pbmUvQmVuY2hOaW5lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTYXdhcmFiaS1NaW5jaG8tUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvU2F3YXJhYmlfTWluY2hvL1Nhd2FyYWJpTWluY2hvLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgd2lkdGg6IDcwJTtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2U5ZWNlZjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIHNjcm9sbGJhci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpICNGNUY1RjU7XFxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW4gIWltcG9ydGFudDtcXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDA7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6Oi1tb3otc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6Oi1tb3otc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOjotby1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTo6LW8tc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtby1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTo6LW1zLXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOjotbXMtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtbXMtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG5cXG4udGljb250YWluZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWluLXdpZHRoOiAzMHB4O1xcbn1cXG4udGljb250YWluZXIgLnRpYmxvY2sge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDE3cHg7XFxufVxcbi50aWNvbnRhaW5lciAudGlibG9jayAudGlkb3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FkYjViZDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBtZXJjdXJ5VHlwaW5nQW5pbWF0aW9uIDEuNXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxuICBhbmltYXRpb246IG1lcmN1cnlUeXBpbmdBbmltYXRpb24gMS41cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogNnB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxuICB3aWR0aDogNnB4O1xcbn1cXG4udGljb250YWluZXIgLnRpYmxvY2sgLnRpZG90Om50aC1jaGlsZCgxKSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTUwbXM7XFxuICBhbmltYXRpb24tZGVsYXk6IDIwMG1zO1xcbn1cXG4udGljb250YWluZXIgLnRpYmxvY2sgLnRpZG90Om50aC1jaGlsZCgyKSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMzAwbXM7XFxuICBhbmltYXRpb24tZGVsYXk6IDMwMG1zO1xcbn1cXG4udGljb250YWluZXIgLnRpYmxvY2sgLnRpZG90Om50aC1jaGlsZCgzKSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogNDUwbXM7XFxuICBhbmltYXRpb24tZGVsYXk6IDQwMG1zO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgbWVyY3VyeVR5cGluZ0FuaW1hdGlvbiB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxuICB9XFxuICAyOCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXG4gIH1cXG4gIDQ0JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcXG4gIC5jb21wb25lbnQtbGlzdC1tZXNzYWdlIHtcXG4gICAgd2lkdGg6IDYwJTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLmNvbXBvbmVudC1saXN0LW1lc3NhZ2Uge1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNzVweCk7XFxuICB9XFxuICAuY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2Uge1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgfVxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHcmVhdCBWaWJlc1xcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvR3JlYXRfVmliZXMvR3JlYXRWaWJlcy1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXVsaVxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvTXVsaS9NdWxpLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXJjaGl2by1NZWRpdW1cXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0FyY2hpdm8vQXJjaGl2by1NZWRpdW0udHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCZW5jaE5pbmUtUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvQmVuY2hOaW5lL0JlbmNoTmluZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2F3YXJhYmktTWluY2hvLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L1Nhd2FyYWJpX01pbmNoby9TYXdhcmFiaU1pbmNoby1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAubm9uZS1yZWFkLW1lc3NhZ2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwYWRkaW5nOiAzcHggNnB4O1xcbiAgYm90dG9tOiAzMCU7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XFxuICBjb2xvcjogI2U5ZWNlZjtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IHtcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdC5hY3RpdmUtbWVzc2FnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdjNmM2O1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQuYWN0aXZlIC5zdGF0ZS1hdmF0YXIge1xcbiAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQuYWN0aXZlIC5zdGF0ZS1hdmF0YXI6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC5zdGF0ZS1hdmF0YXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIG1pbi13aWR0aDogNDBweDtcXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2Yzc1N2Q7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC5zdGF0ZS1hdmF0YXI6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogNTAlO1xcbiAgei1pbmRleDogNTtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZGI1YmQ7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC5zdGF0ZS1hdmF0YXIgaW1nIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbWluLXdpZHRoOiA0MHB4O1xcbiAgbWluLWhlaWdodDogNDBweDtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC50ZXh0LWluZm8ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAwIDAgMCA1NXB4O1xcbiAgY29sb3I6ICMwZDQ3YTE7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdCAudGV4dC1pbmZvIC5uYW1lIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC50ZXh0LWluZm8gLmxhc3QtbWVzc2FnZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdC5hY3RpdmUtbWVzc2FnZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZGI1YmQ7XFxuICB9XFxuICAuY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQgLnRleHQtaW5mbyB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB9XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkdyZWF0IFZpYmVzXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9HcmVhdF9WaWJlcy9HcmVhdFZpYmVzLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNdWxpXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9NdWxpL011bGktVmFyaWFibGVGb250X3dnaHQudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmNoaXZvLU1lZGl1bVxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvQXJjaGl2by9BcmNoaXZvLU1lZGl1bS50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJlbmNoTmluZS1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9CZW5jaE5pbmUvQmVuY2hOaW5lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTYXdhcmFiaS1NaW5jaG8tUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvU2F3YXJhYmlfTWluY2hvL1Nhd2FyYWJpTWluY2hvLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbi5sZWZ0LW1lc3NhZ2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZy1yaWdodDogMjVweDtcXG59XFxuLmxlZnQtbWVzc2FnZSAucmVhZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQge1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQ6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMDtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQudHlwaW5nLWNoYXQtbWVzc3NhZ2Uge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYWRiNWJkO1xcbiAgbGVmdDogNTAlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0LnR5cGluZy1jaGF0LW1lc3NzYWdlLnNob3cge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0LnR5cGluZy1jaGF0LW1lc3NzYWdlIC50eXBpbmctbWVzc2FnZSAudGV4dCB7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIHBhZGRpbmc6IDJweCAxMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwOmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDA7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwLmJ5LW1lIC5hdmF0YXIge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cC5ieS1tZSAubWVzc2FnZS1jb250ZW50IC50ZXh0IHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDIxMGRlZywgI2Y4ZjlmYSwgI2FkYjViZCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDIxMGRlZywgI2Y4ZjlmYSwgI2FkYjViZCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgyMTBkZWcsICNmOGY5ZmEsICNhZGI1YmQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDIxMGRlZywgI2Y4ZjlmYSwgI2FkYjViZCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMTBkZWcsICNmOGY5ZmEsICNhZGI1YmQpICFpbXBvcnRhbnQ7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwLmJ5LW1lIC5FTU9KSSB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLmF2YXRhciB7XFxuICBtYXgtd2lkdGg6IDQwcHg7XFxuICBtYXgtaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAuYXZhdGFyIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudCB7XFxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQudHlwaW5nLW1lc3NhZ2Uge1xcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQgLklNQUdFIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudCAuSU1BR0UgLndyYXBwZXItYXR0YWNobWVudCB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXgtd2lkdGg6IDIwMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAubWVzc2FnZS1jb250ZW50IC5JTUFHRSAud3JhcHBlci1hdHRhY2htZW50IGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudCAuSU1BR0UgLndyYXBwZXItYXR0YWNobWVudCAuZG93bmxvYWQtZmlsZS1hdHRhY2htZW50IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNSU7XFxuICByaWdodDogNSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMmU2O1xcbiAgY29sb3I6ICMwZDQ3YTE7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwYWRkaW5nOiAzcHggMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZDQ3YTE7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQgLklNQUdFIC53cmFwcGVyLWF0dGFjaG1lbnQgLmRvd25sb2FkLWZpbGUtYXR0YWNobWVudCBpIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudCAuRU1PSkkge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudCAudGV4dCB7XFxuICBsaW5lLWhlaWdodDogMS4zO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGY5ZmEsICM2ZjQyYzEpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGY5ZmEsICM2ZjQyYzEpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmOWZhLCAjNmY0MmMxKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGY5ZmEsICM2ZjQyYzEpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmOWZhLCAjNmY0MmMxKSAhaW1wb3J0YW50O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAubWVzc2FnZS1jb250ZW50IC50ZXh0LkVNT0pJIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxuICBmb250LXNpemU6IDM1cHg7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC50eXBpbmctbWVzc2FnZSAudGV4dCB7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC50eXBpbmctbWVzc2FnZSAudHlwaW5nLXRleHQge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHcmVhdCBWaWJlc1xcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvR3JlYXRfVmliZXMvR3JlYXRWaWJlcy1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXVsaVxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvTXVsaS9NdWxpLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXJjaGl2by1NZWRpdW1cXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0FyY2hpdm8vQXJjaGl2by1NZWRpdW0udHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCZW5jaE5pbmUtUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvQmVuY2hOaW5lL0JlbmNoTmluZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2F3YXJhYmktTWluY2hvLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L1Nhd2FyYWJpX01pbmNoby9TYXdhcmFiaU1pbmNoby1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdCB7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiAzMCU7XFxuICBzY3JvbGxiYXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKSAjRjVGNUY1O1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluICFpbXBvcnRhbnQ7XFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQ6Oi1tb3otc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdDo6LW1vei1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdDo6LW8tc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdDo6LW8tc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtby1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0OjotbXMtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdDo6LW1zLXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLW1zLWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQgKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ubXlpbmZvIHtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcXG4gIG1pbi1oZWlnaHQ6IDc1cHg7XFxufVxcbi5teWluZm8gLmF2YXRhciAuc3RhdGUtYXZhdGFyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG4ubXlpbmZvIC5hdmF0YXIgLnN0YXRlLWF2YXRhcjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDFweDtcXG4gIGxlZnQ6IDFweDtcXG4gIHJpZ2h0OiAxcHg7XFxuICBib3R0b206IDFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogMnB4IGRvdWJsZSAjOTE3NWNhO1xcbn1cXG4ubXlpbmZvIC5hdmF0YXIgLnN0YXRlLWF2YXRhci5hY3RpdmUtb25saW5lIHtcXG4gIGJvcmRlcjogMnB4IGRvdWJsZSAjMDBjODUxO1xcbn1cXG4ubXlpbmZvIC5hdmF0YXIgLnN0YXRlLWF2YXRhciBpbWcge1xcbiAgbWF4LXdpZHRoOiA0MHB4O1xcbiAgbWF4LWhlaWdodDogNDBweDtcXG59XFxuLm15aW5mbyAuYXZhdGFyIC5uYW1lIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBtYXgtd2lkdGg6IDI3Y2g7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGNvbG9yOiAjMGQ0N2ExO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxuICAuY29tcG9uZW50LXNpZGViYXItY2hhdCB7XFxuICAgIHdpZHRoOiA0MCU7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5jb21wb25lbnQtc2lkZWJhci1jaGF0IHtcXG4gICAgd2lkdGg6IDc1cHg7XFxuICB9XFxuICAuY29tcG9uZW50LXNpZGViYXItY2hhdCAudXNlci1jaGF0IC5zdGF0ZS1hdmF0YXIge1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgIWltcG9ydGFudDtcXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSAhaW1wb3J0YW50O1xcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSAhaW1wb3J0YW50O1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgIWltcG9ydGFudDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC5teWluZm8ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgfVxcbiAgLm15aW5mbyAuYXZhdGFyIC5zdGF0ZS1hdmF0YXIgaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAzNXB4O1xcbiAgICBtYXgtaGVpZ2h0OiAzNXB4O1xcbiAgfVxcbiAgLm15aW5mbyAuYXZhdGFyIC5uYW1lIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR3JlYXQgVmliZXNcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0dyZWF0X1ZpYmVzL0dyZWF0VmliZXMtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk11bGlcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L011bGkvTXVsaS1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkFyY2hpdm8tTWVkaXVtXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9BcmNoaXZvL0FyY2hpdm8tTWVkaXVtLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmVuY2hOaW5lLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0JlbmNoTmluZS9CZW5jaE5pbmUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNhd2FyYWJpLU1pbmNoby1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9TYXdhcmFiaV9NaW5jaG8vU2F3YXJhYmlNaW5jaG8tUmVndWxhci50dGZcXFwiKTtcXG59XFxuLyoqXFxuKiBkaXNwbGF5XFxuKi9cXG4qLFxcbjphZnRlcixcXG46YmVmb3JlIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpmb2N1cyB7XFxuICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmQtbm9uZSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kLWlubGluZS1ibG9jayB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcXG59XFxuXFxuLmQtYmxvY2sge1xcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXG59XFxuXFxuLmQtdGFibGUge1xcbiAgZGlzcGxheTogdGFibGUgIWltcG9ydGFudDtcXG59XFxuXFxuLmQtdGFibGUtcm93IHtcXG4gIGRpc3BsYXk6IHRhYmxlLXJvdyAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZC10YWJsZS1jZWxsIHtcXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDtcXG59XFxuXFxuLmQtZmxleCB7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveCAhaW1wb3J0YW50O1xcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZC1pbmxpbmUtZmxleCB7XFxuICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3ggIWltcG9ydGFudDtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5pdGFsaWMge1xcbiAgZm9udC1zdHlsZTogaXRhbGljICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ub3QtaXRhbGljIHtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xcbn1cXG5cXG4udXBwZXJjYXNlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcXG59XFxuXFxuLmxvd2VyY2FzZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XFxufVxcblxcbi5jYXBpdGFsaXplIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ub3JtYWwtY2FzZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4udW5kZXJsaW5lIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5saW5lLXRocm91Z2gge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2ggIWltcG9ydGFudDtcXG59XFxuXFxuLm5vLXVuZGVybGluZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5mb250LWhhaXJsaW5lIHtcXG4gIGZvbnQtd2VpZ2h0OiAxMDAgIWltcG9ydGFudDtcXG59XFxuXFxuLmZvbnQtdGhpbiB7XFxuICBmb250LXdlaWdodDogMjAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mb250LWxpZ2h0IHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcXG59XFxuXFxuLmZvbnQtbm9ybWFsIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcXG59XFxuXFxuLmZvbnQtbWVkaXVtIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcXG59XFxuXFxuLmZvbnQtc2VtaWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZm9udC1ib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcXG59XFxuXFxuLmZvbnQtZXh0cmFib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiA4MDAgIWltcG9ydGFudDtcXG59XFxuXFxuLmZvbnQtYmxhY2sge1xcbiAgZm9udC13ZWlnaHQ6IDkwMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4udGV4dC1jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGV4dC1yaWdodCB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLnRleHQtbGVmdCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4udmVydGljYWwtYWxpZ24tbWlkZGxlIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5tZy1hdXRvIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ucm91bmRlZC1jaXJjbGUge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ib3JkZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNiAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYm9yZGVyLXRvcCB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNiAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYm9yZGVyLXJpZ2h0IHtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWUyZTYgIWltcG9ydGFudDtcXG59XFxuXFxuLmJvcmRlci1ib3R0b20ge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTYgIWltcG9ydGFudDtcXG59XFxuXFxuLmJvcmRlci1sZWZ0IHtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RlZTJlNiAhaW1wb3J0YW50O1xcbn1cXG5cXG4udGV4dC1jb2xvci1yZWQge1xcbiAgY29sb3I6ICNmNDQzMzY7XFxufVxcblxcbi50ZXh0LWNvbG9yLXBpbmsge1xcbiAgY29sb3I6ICNlOTFlNjM7XFxufVxcblxcbi50ZXh0LWNvbG9yLXB1cnBsZSB7XFxuICBjb2xvcjogIzljMjdiMDtcXG59XFxuXFxuLnRleHQtY29sb3ItZGVlcC1wdXJwbGUge1xcbiAgY29sb3I6ICM2NzNhYjc7XFxufVxcblxcbi50ZXh0LWNvbG9yLWluZGlnbyB7XFxuICBjb2xvcjogIzNmNTFiNTtcXG59XFxuXFxuLnRleHQtY29sb3ItYmx1ZSB7XFxuICBjb2xvcjogIzIxOTZmMztcXG59XFxuXFxuLnRleHQtY29sb3ItbGlnaHQtYmx1ZSB7XFxuICBjb2xvcjogIzAzYTlmNDtcXG59XFxuXFxuLnRleHQtY29sb3ItY3lhbiB7XFxuICBjb2xvcjogIzAwYmNkNDtcXG59XFxuXFxuLnRleHQtY29sb3ItdGVhbCB7XFxuICBjb2xvcjogIzAwOTY4ODtcXG59XFxuXFxuLnRleHQtY29sb3ItZ3JlZW4ge1xcbiAgY29sb3I6ICM0Y2FmNTA7XFxufVxcblxcbi50ZXh0LWNvbG9yLWxpZ2h0LWdyZWVuIHtcXG4gIGNvbG9yOiAjOGJjMzRhO1xcbn1cXG5cXG4udGV4dC1jb2xvci1saW1lIHtcXG4gIGNvbG9yOiAjY2RkYzM5O1xcbn1cXG5cXG4udGV4dC1jb2xvci15ZWxsb3cge1xcbiAgY29sb3I6ICNmZmViM2I7XFxufVxcblxcbi50ZXh0LWNvbG9yLWFtYmVyIHtcXG4gIGNvbG9yOiAjZmZjMTA3O1xcbn1cXG5cXG4udGV4dC1jb2xvci1vcmFuZ2Uge1xcbiAgY29sb3I6ICNmZjk4MDA7XFxufVxcblxcbi50ZXh0LWNvbG9yLWRlZXAtb3JhbmdlIHtcXG4gIGNvbG9yOiAjZmY1NzIyO1xcbn1cXG5cXG4udGV4dC1jb2xvci1icm93biB7XFxuICBjb2xvcjogIzc5NTU0ODtcXG59XFxuXFxuLnRleHQtY29sb3ItYmxhY2sge1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbi50ZXh0LWNvbG9yLXdoaXRlIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4udGV4dC1jb2xvci1ncmV5IHtcXG4gIGNvbG9yOiAjOWU5ZTllO1xcbn1cXG5cXG4udGV4dC1jb2xvci1ibHVlLWdyZXkge1xcbiAgY29sb3I6ICM2MDdkOGI7XFxufVxcblxcbi50ZXh0LWNvbG9yLXByaW1hcnktY29sb3ItZGFyayB7XFxuICBjb2xvcjogIzBkNDdhMTtcXG59XFxuXFxuLnRleHQtY29sb3Itc2Vjb25kYXJ5LWNvbG9yIHtcXG4gIGNvbG9yOiAjYWE2NmNjO1xcbn1cXG5cXG4udGV4dC1jb2xvci1zZWNvbmRhcnktY29sb3ItZGFyayB7XFxuICBjb2xvcjogIzk5MzNjYztcXG59XFxuXFxuLnRleHQtY29sb3ItZGVmYXVsdC1jb2xvciB7XFxuICBjb2xvcjogIzJiYmJhZDtcXG59XFxuXFxuLnRleHQtY29sb3ItZGVmYXVsdC1jb2xvci1kYXJrIHtcXG4gIGNvbG9yOiAjMDA2OTVjO1xcbn1cXG5cXG4udGV4dC1jb2xvci1pbmZvLWNvbG9yIHtcXG4gIGNvbG9yOiAjMzNiNWU1O1xcbn1cXG5cXG4udGV4dC1jb2xvci1pbmZvLWNvbG9yLWRhcmsge1xcbiAgY29sb3I6ICMwMDk5Y2M7XFxufVxcblxcbi50ZXh0LWNvbG9yLXN1Y2Nlc3MtY29sb3Ige1xcbiAgY29sb3I6ICMwMGM4NTE7XFxufVxcblxcbi50ZXh0LWNvbG9yLXN1Y2Nlc3MtY29sb3ItZGFyayB7XFxuICBjb2xvcjogIzAwN2UzMztcXG59XFxuXFxuLnRleHQtY29sb3Itd2FybmluZy1jb2xvciB7XFxuICBjb2xvcjogI2ZmYmIzMztcXG59XFxuXFxuLnRleHQtY29sb3Itd2FybmluZy1jb2xvci1kYXJrIHtcXG4gIGNvbG9yOiAjZmY4ODAwO1xcbn1cXG5cXG4udGV4dC1jb2xvci1kYW5nZXItY29sb3Ige1xcbiAgY29sb3I6ICNmZjM1NDc7XFxufVxcblxcbi50ZXh0LWNvbG9yLWRhbmdlci1jb2xvci1kYXJrIHtcXG4gIGNvbG9yOiAjY2MwMDAwO1xcbn1cXG5cXG4udGV4dC1jb2xvci1lbGVnYW50LWNvbG9yIHtcXG4gIGNvbG9yOiAjMmUyZTJlO1xcbn1cXG5cXG4udGV4dC1jb2xvci1lbGVnYW50LWNvbG9yLWRhcmsge1xcbiAgY29sb3I6ICMyMTIxMjE7XFxufVxcblxcbi50ZXh0LWNvbG9yLXN0eWxpc2gtY29sb3Ige1xcbiAgY29sb3I6ICM0YjUxNWQ7XFxufVxcblxcbi50ZXh0LWNvbG9yLXN0eWxpc2gtY29sb3ItZGFyayB7XFxuICBjb2xvcjogIzNlNDU1MTtcXG59XFxuXFxuLnRleHQtY29sb3ItdW5pcXVlLWNvbG9yIHtcXG4gIGNvbG9yOiAjM2Y3MjliO1xcbn1cXG5cXG4udGV4dC1jb2xvci11bmlxdWUtY29sb3ItZGFyayB7XFxuICBjb2xvcjogIzFjMjMzMTtcXG59XFxuXFxuLnRleHQtY29sb3Itc3BlY2lhbC1jb2xvciB7XFxuICBjb2xvcjogIzM3NDc0ZjtcXG59XFxuXFxuLnRleHQtY29sb3Itc3BlY2lhbC1jb2xvci1kYXJrIHtcXG4gIGNvbG9yOiAjMjYzMjM4O1xcbn1cXG5cXG4udGV4dC1jb2xvci1wcmltYXJ5IHtcXG4gIGNvbG9yOiAjNDI4NWY0O1xcbn1cXG5cXG4udGV4dC1jb2xvci1kYW5nZXIge1xcbiAgY29sb3I6ICNmZjM1NDc7XFxufVxcblxcbi50ZXh0LWNvbG9yLXdhcm5pbmcge1xcbiAgY29sb3I6ICNmZmJiMzM7XFxufVxcblxcbi50ZXh0LWNvbG9yLXN1Y2Nlc3Mge1xcbiAgY29sb3I6ICMwMGM4NTE7XFxufVxcblxcbi50ZXh0LWNvbG9yLWluZm8ge1xcbiAgY29sb3I6ICMzM2I1ZTU7XFxufVxcblxcbi50ZXh0LWNvbG9yLWRlZmF1bHQge1xcbiAgY29sb3I6ICMyYmJiYWQ7XFxufVxcblxcbi50ZXh0LWNvbG9yLXNlY29uZGFyeSB7XFxuICBjb2xvcjogI2FhNjZjYztcXG59XFxuXFxuLnRleHQtY29sb3ItZGFyayB7XFxuICBjb2xvcjogIzIxMjEyMTtcXG59XFxuXFxuLnRleHQtY29sb3ItbGlnaHQge1xcbiAgY29sb3I6ICNlMGUwZTA7XFxufVxcblxcbi50ZXh0LWNvbG9yLWdyZXkteCB7XFxuICBjb2xvcjogI2Y5ZjlmOTtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1yZWQge1xcbiAgYm9yZGVyLWNvbG9yOiAjZjQ0MzM2O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXBpbmsge1xcbiAgYm9yZGVyLWNvbG9yOiAjZTkxZTYzO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXB1cnBsZSB7XFxuICBib3JkZXItY29sb3I6ICM5YzI3YjA7XFxufVxcblxcbi5ib3JkZXItY29sb3ItZGVlcC1wdXJwbGUge1xcbiAgYm9yZGVyLWNvbG9yOiAjNjczYWI3O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWluZGlnbyB7XFxuICBib3JkZXItY29sb3I6ICMzZjUxYjU7XFxufVxcblxcbi5ib3JkZXItY29sb3ItYmx1ZSB7XFxuICBib3JkZXItY29sb3I6ICMyMTk2ZjM7XFxufVxcblxcbi5ib3JkZXItY29sb3ItbGlnaHQtYmx1ZSB7XFxuICBib3JkZXItY29sb3I6ICMwM2E5ZjQ7XFxufVxcblxcbi5ib3JkZXItY29sb3ItY3lhbiB7XFxuICBib3JkZXItY29sb3I6ICMwMGJjZDQ7XFxufVxcblxcbi5ib3JkZXItY29sb3ItdGVhbCB7XFxuICBib3JkZXItY29sb3I6ICMwMDk2ODg7XFxufVxcblxcbi5ib3JkZXItY29sb3ItZ3JlZW4ge1xcbiAgYm9yZGVyLWNvbG9yOiAjNGNhZjUwO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWxpZ2h0LWdyZWVuIHtcXG4gIGJvcmRlci1jb2xvcjogIzhiYzM0YTtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1saW1lIHtcXG4gIGJvcmRlci1jb2xvcjogI2NkZGMzOTtcXG59XFxuXFxuLmJvcmRlci1jb2xvci15ZWxsb3cge1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZlYjNiO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWFtYmVyIHtcXG4gIGJvcmRlci1jb2xvcjogI2ZmYzEwNztcXG59XFxuXFxuLmJvcmRlci1jb2xvci1vcmFuZ2Uge1xcbiAgYm9yZGVyLWNvbG9yOiAjZmY5ODAwO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWRlZXAtb3JhbmdlIHtcXG4gIGJvcmRlci1jb2xvcjogI2ZmNTcyMjtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1icm93biB7XFxuICBib3JkZXItY29sb3I6ICM3OTU1NDg7XFxufVxcblxcbi5ib3JkZXItY29sb3ItYmxhY2sge1xcbiAgYm9yZGVyLWNvbG9yOiAjMDAwO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXdoaXRlIHtcXG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1ncmV5IHtcXG4gIGJvcmRlci1jb2xvcjogIzllOWU5ZTtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1ibHVlLWdyZXkge1xcbiAgYm9yZGVyLWNvbG9yOiAjNjA3ZDhiO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXByaW1hcnktY29sb3ItZGFyayB7XFxuICBib3JkZXItY29sb3I6ICMwZDQ3YTE7XFxufVxcblxcbi5ib3JkZXItY29sb3Itc2Vjb25kYXJ5LWNvbG9yIHtcXG4gIGJvcmRlci1jb2xvcjogI2FhNjZjYztcXG59XFxuXFxuLmJvcmRlci1jb2xvci1zZWNvbmRhcnktY29sb3ItZGFyayB7XFxuICBib3JkZXItY29sb3I6ICM5OTMzY2M7XFxufVxcblxcbi5ib3JkZXItY29sb3ItZGVmYXVsdC1jb2xvciB7XFxuICBib3JkZXItY29sb3I6ICMyYmJiYWQ7XFxufVxcblxcbi5ib3JkZXItY29sb3ItZGVmYXVsdC1jb2xvci1kYXJrIHtcXG4gIGJvcmRlci1jb2xvcjogIzAwNjk1YztcXG59XFxuXFxuLmJvcmRlci1jb2xvci1pbmZvLWNvbG9yIHtcXG4gIGJvcmRlci1jb2xvcjogIzMzYjVlNTtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1pbmZvLWNvbG9yLWRhcmsge1xcbiAgYm9yZGVyLWNvbG9yOiAjMDA5OWNjO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXN1Y2Nlc3MtY29sb3Ige1xcbiAgYm9yZGVyLWNvbG9yOiAjMDBjODUxO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXN1Y2Nlc3MtY29sb3ItZGFyayB7XFxuICBib3JkZXItY29sb3I6ICMwMDdlMzM7XFxufVxcblxcbi5ib3JkZXItY29sb3Itd2FybmluZy1jb2xvciB7XFxuICBib3JkZXItY29sb3I6ICNmZmJiMzM7XFxufVxcblxcbi5ib3JkZXItY29sb3Itd2FybmluZy1jb2xvci1kYXJrIHtcXG4gIGJvcmRlci1jb2xvcjogI2ZmODgwMDtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1kYW5nZXItY29sb3Ige1xcbiAgYm9yZGVyLWNvbG9yOiAjZmYzNTQ3O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWRhbmdlci1jb2xvci1kYXJrIHtcXG4gIGJvcmRlci1jb2xvcjogI2NjMDAwMDtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1lbGVnYW50LWNvbG9yIHtcXG4gIGJvcmRlci1jb2xvcjogIzJlMmUyZTtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1lbGVnYW50LWNvbG9yLWRhcmsge1xcbiAgYm9yZGVyLWNvbG9yOiAjMjEyMTIxO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXN0eWxpc2gtY29sb3Ige1xcbiAgYm9yZGVyLWNvbG9yOiAjNGI1MTVkO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXN0eWxpc2gtY29sb3ItZGFyayB7XFxuICBib3JkZXItY29sb3I6ICMzZTQ1NTE7XFxufVxcblxcbi5ib3JkZXItY29sb3ItdW5pcXVlLWNvbG9yIHtcXG4gIGJvcmRlci1jb2xvcjogIzNmNzI5YjtcXG59XFxuXFxuLmJvcmRlci1jb2xvci11bmlxdWUtY29sb3ItZGFyayB7XFxuICBib3JkZXItY29sb3I6ICMxYzIzMzE7XFxufVxcblxcbi5ib3JkZXItY29sb3Itc3BlY2lhbC1jb2xvciB7XFxuICBib3JkZXItY29sb3I6ICMzNzQ3NGY7XFxufVxcblxcbi5ib3JkZXItY29sb3Itc3BlY2lhbC1jb2xvci1kYXJrIHtcXG4gIGJvcmRlci1jb2xvcjogIzI2MzIzODtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1wcmltYXJ5IHtcXG4gIGJvcmRlci1jb2xvcjogIzQyODVmNDtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1kYW5nZXIge1xcbiAgYm9yZGVyLWNvbG9yOiAjZmYzNTQ3O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXdhcm5pbmcge1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZiYjMzO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXN1Y2Nlc3Mge1xcbiAgYm9yZGVyLWNvbG9yOiAjMDBjODUxO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWluZm8ge1xcbiAgYm9yZGVyLWNvbG9yOiAjMzNiNWU1O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWRlZmF1bHQge1xcbiAgYm9yZGVyLWNvbG9yOiAjMmJiYmFkO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXNlY29uZGFyeSB7XFxuICBib3JkZXItY29sb3I6ICNhYTY2Y2M7XFxufVxcblxcbi5ib3JkZXItY29sb3ItZGFyayB7XFxuICBib3JkZXItY29sb3I6ICMyMTIxMjE7XFxufVxcblxcbi5ib3JkZXItY29sb3ItbGlnaHQge1xcbiAgYm9yZGVyLWNvbG9yOiAjZTBlMGUwO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWdyZXkteCB7XFxuICBib3JkZXItY29sb3I6ICNmOWY5Zjk7XFxufVxcblxcbi5iZy1jb2xvci1yZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcXG59XFxuXFxuLmJnLWNvbG9yLXBpbmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5MWU2MztcXG59XFxuXFxuLmJnLWNvbG9yLXB1cnBsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWMyN2IwO1xcbn1cXG5cXG4uYmctY29sb3ItZGVlcC1wdXJwbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY3M2FiNztcXG59XFxuXFxuLmJnLWNvbG9yLWluZGlnbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xcbn1cXG5cXG4uYmctY29sb3ItYmx1ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xcbn1cXG5cXG4uYmctY29sb3ItbGlnaHQtYmx1ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNhOWY0O1xcbn1cXG5cXG4uYmctY29sb3ItY3lhbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiY2Q0O1xcbn1cXG5cXG4uYmctY29sb3ItdGVhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5Njg4O1xcbn1cXG5cXG4uYmctY29sb3ItZ3JlZW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcXG59XFxuXFxuLmJnLWNvbG9yLWxpZ2h0LWdyZWVuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YmMzNGE7XFxufVxcblxcbi5iZy1jb2xvci1saW1lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZGRjMzk7XFxufVxcblxcbi5iZy1jb2xvci15ZWxsb3cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWIzYjtcXG59XFxuXFxuLmJnLWNvbG9yLWFtYmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XFxufVxcblxcbi5iZy1jb2xvci1vcmFuZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTgwMDtcXG59XFxuXFxuLmJnLWNvbG9yLWRlZXAtb3JhbmdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjU3MjI7XFxufVxcblxcbi5iZy1jb2xvci1icm93biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk1NTQ4O1xcbn1cXG5cXG4uYmctY29sb3ItYmxhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG59XFxuXFxuLmJnLWNvbG9yLXdoaXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi5iZy1jb2xvci1ncmV5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZTllOWU7XFxufVxcblxcbi5iZy1jb2xvci1ibHVlLWdyZXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwN2Q4YjtcXG59XFxuXFxuLmJnLWNvbG9yLXByaW1hcnktY29sb3ItZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ0N2ExO1xcbn1cXG5cXG4uYmctY29sb3Itc2Vjb25kYXJ5LWNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYTY2Y2M7XFxufVxcblxcbi5iZy1jb2xvci1zZWNvbmRhcnktY29sb3ItZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTkzM2NjO1xcbn1cXG5cXG4uYmctY29sb3ItZGVmYXVsdC1jb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmJiYmFkO1xcbn1cXG5cXG4uYmctY29sb3ItZGVmYXVsdC1jb2xvci1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY5NWM7XFxufVxcblxcbi5iZy1jb2xvci1pbmZvLWNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzM2I1ZTU7XFxufVxcblxcbi5iZy1jb2xvci1pbmZvLWNvbG9yLWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTljYztcXG59XFxuXFxuLmJnLWNvbG9yLXN1Y2Nlc3MtY29sb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYzg1MTtcXG59XFxuXFxuLmJnLWNvbG9yLXN1Y2Nlc3MtY29sb3ItZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3ZTMzO1xcbn1cXG5cXG4uYmctY29sb3Itd2FybmluZy1jb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiYjMzO1xcbn1cXG5cXG4uYmctY29sb3Itd2FybmluZy1jb2xvci1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjg4MDA7XFxufVxcblxcbi5iZy1jb2xvci1kYW5nZXItY29sb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzU0NztcXG59XFxuXFxuLmJnLWNvbG9yLWRhbmdlci1jb2xvci1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYzAwMDA7XFxufVxcblxcbi5iZy1jb2xvci1lbGVnYW50LWNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTJlMmU7XFxufVxcblxcbi5iZy1jb2xvci1lbGVnYW50LWNvbG9yLWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcXG59XFxuXFxuLmJnLWNvbG9yLXN0eWxpc2gtY29sb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiNTE1ZDtcXG59XFxuXFxuLmJnLWNvbG9yLXN0eWxpc2gtY29sb3ItZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U0NTUxO1xcbn1cXG5cXG4uYmctY29sb3ItdW5pcXVlLWNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjcyOWI7XFxufVxcblxcbi5iZy1jb2xvci11bmlxdWUtY29sb3ItZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMyMzMxO1xcbn1cXG5cXG4uYmctY29sb3Itc3BlY2lhbC1jb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc0NzRmO1xcbn1cXG5cXG4uYmctY29sb3Itc3BlY2lhbC1jb2xvci1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjMyMzg7XFxufVxcblxcbi5iZy1jb2xvci1wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Mjg1ZjQ7XFxufVxcblxcbi5iZy1jb2xvci1kYW5nZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzU0NztcXG59XFxuXFxuLmJnLWNvbG9yLXdhcm5pbmcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmIzMztcXG59XFxuXFxuLmJnLWNvbG9yLXN1Y2Nlc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYzg1MTtcXG59XFxuXFxuLmJnLWNvbG9yLWluZm8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzYjVlNTtcXG59XFxuXFxuLmJnLWNvbG9yLWRlZmF1bHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiYmJhZDtcXG59XFxuXFxuLmJnLWNvbG9yLXNlY29uZGFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWE2NmNjO1xcbn1cXG5cXG4uYmctY29sb3ItZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xcbn1cXG5cXG4uYmctY29sb3ItbGlnaHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG59XFxuXFxuLmJnLWNvbG9yLWdyZXkteCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xcbn1cXG5cXG4udy0yNSB7XFxuICB3aWR0aDogMjU7XFxufVxcblxcbi53LTUwIHtcXG4gIHdpZHRoOiA1MDtcXG59XFxuXFxuLnctNTUge1xcbiAgd2lkdGg6IDU1O1xcbn1cXG5cXG4udy02MCB7XFxuICB3aWR0aDogNjA7XFxufVxcblxcbi53LTY1IHtcXG4gIHdpZHRoOiA2NTtcXG59XFxuXFxuLnctNzAge1xcbiAgd2lkdGg6IDcwO1xcbn1cXG5cXG4udy03NSB7XFxuICB3aWR0aDogNzU7XFxufVxcblxcbi53LTgwIHtcXG4gIHdpZHRoOiA4MDtcXG59XFxuXFxuLnctODUge1xcbiAgd2lkdGg6IDg1O1xcbn1cXG5cXG4udy05MCB7XFxuICB3aWR0aDogOTA7XFxufVxcblxcbi53LTk1IHtcXG4gIHdpZHRoOiA5NTtcXG59XFxuXFxuLnctMTAwIHtcXG4gIHdpZHRoOiAxMDA7XFxufVxcblxcbi50ZXh0LXhzIHtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG59XFxuXFxuLnRleHQtc20ge1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG59XFxuXFxuLnRleHQtYmFzZSB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50ZXh0LWxnIHtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxufVxcblxcbi50ZXh0LXhsIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuLnRleHQtMnhsIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udGV4dC0zeGwge1xcbiAgZm9udC1zaXplOiAxLjg3NXJlbTtcXG59XFxuXFxuLnRleHQtNHhsIHtcXG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcXG59XFxuXFxuLnRleHQtNXhsIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLnRleHQtNnhsIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuYm9keS5uZW8tc2Nyb2xsIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmlucHV0OmZvY3VzLCBzZWxlY3Q6Zm9jdXMsIHRleHRhcmVhOmZvY3VzLCBvcHRpb246Zm9jdXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYWFhYTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5hbGVydCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5hbGVydC1oZWFkaW5nIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uYWxlcnQtbGluayB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmFsZXJ0LWRpc21pc3NpYmxlIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDRyZW07XFxufVxcbi5hbGVydC1kaXNtaXNzaWJsZSAuY2xvc2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLmFsZXJ0LXByaW1hcnkge1xcbiAgY29sb3I6ICMwYTU0YzA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlZWZmO1xcbiAgYm9yZGVyLWNvbG9yOiAjYmJkNmZlO1xcbn1cXG4uYWxlcnQtcHJpbWFyeSAuYWxlcnQtbGluayB7XFxuICBjb2xvcjogIzA3M2Y5MDtcXG59XFxuXFxuLmFsZXJ0LXNlY29uZGFyeSB7XFxuICBjb2xvcjogIzUyNTk1ZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVlZWY7XFxuICBib3JkZXItY29sb3I6ICNkNmQ4ZGI7XFxufVxcbi5hbGVydC1zZWNvbmRhcnkgLmFsZXJ0LWxpbmsge1xcbiAgY29sb3I6ICMzYTNmNDQ7XFxufVxcblxcbi5hbGVydC1zdWNjZXNzIHtcXG4gIGNvbG9yOiAjMWU3ZjM0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZjRlOTtcXG4gIGJvcmRlci1jb2xvcjogI2MzZTZjYjtcXG59XFxuLmFsZXJ0LXN1Y2Nlc3MgLmFsZXJ0LWxpbmsge1xcbiAgY29sb3I6ICMxNDU2MjM7XFxufVxcblxcbi5hbGVydC1pbmZvIHtcXG4gIGNvbG9yOiAjMTE3YjhjO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZjRmNjtcXG4gIGJvcmRlci1jb2xvcjogI2JlZTVlYjtcXG59XFxuLmFsZXJ0LWluZm8gLmFsZXJ0LWxpbmsge1xcbiAgY29sb3I6ICMwYjUzNWY7XFxufVxcblxcbi5hbGVydC13YXJuaW5nIHtcXG4gIGNvbG9yOiAjYzI5MzA1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjhlMTtcXG4gIGJvcmRlci1jb2xvcjogI2ZmZWViYTtcXG59XFxuLmFsZXJ0LXdhcm5pbmcgLmFsZXJ0LWxpbmsge1xcbiAgY29sb3I6ICM5MDZkMDQ7XFxufVxcblxcbi5hbGVydC1kYW5nZXIge1xcbiAgY29sb3I6ICNhNzI4MzQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJlN2U5O1xcbiAgYm9yZGVyLWNvbG9yOiAjZjVjNmNiO1xcbn1cXG4uYWxlcnQtZGFuZ2VyIC5hbGVydC1saW5rIHtcXG4gIGNvbG9yOiAjN2UxZTI3O1xcbn1cXG5cXG4uYWxlcnQtbGlnaHQge1xcbiAgY29sb3I6ICNiY2JkYmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgYm9yZGVyLWNvbG9yOiAjZmRmZGZlO1xcbn1cXG4uYWxlcnQtbGlnaHQgLmFsZXJ0LWxpbmsge1xcbiAgY29sb3I6ICNhMmE0YTU7XFxufVxcblxcbi5hbGVydC1kYXJrIHtcXG4gIGNvbG9yOiAjMjgyYzMxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlODtcXG4gIGJvcmRlci1jb2xvcjogI2M2YzhjYTtcXG59XFxuLmFsZXJ0LWRhcmsgLmFsZXJ0LWxpbmsge1xcbiAgY29sb3I6ICMxMTEzMTU7XFxufVxcblxcbjpyb290IHtcXG4gIC0tYW5pbWF0ZS1kdXJhdGlvbjogMXM7XFxuICAtLWFuaW1hdGUtZGVsYXk6IDFzO1xcbiAgLS1hbmltYXRlLWxvb3A6IDE7XFxufVxcblxcbi5hbmltYXRlZCB7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG59XFxuLmFuaW1hdGVkLmluZmluaXRlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG59XFxuLmFuaW1hdGVkLmZhc3RlciB7XFxuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGMoJC0tYW5pbWF0ZS1kdXJhdGlvbiAvIDIpO1xcbn1cXG4uYW5pbWF0ZWQuZmFzdCB7XFxuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGMoJC0tYW5pbWF0ZS1kdXJhdGlvbiAqIDAuOCk7XFxufVxcbi5hbmltYXRlZC5zbG93IHtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYygkLS1hbmltYXRlLWR1cmF0aW9uICogMik7XFxufVxcbi5hbmltYXRlZC5zbG93ZXIge1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKCQtLWFuaW1hdGUtZHVyYXRpb24gKiAzKTtcXG59XFxuLmFuaW1hdGVkLmxvb3AtMSB7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbn1cXG4uYW5pbWF0ZWQuZGVsYXktMXMge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKCQtLWFuaW1hdGUtZGVsYXkgKiAkaSk7XFxufVxcbi5hbmltYXRlZC5sb29wLTIge1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMjtcXG59XFxuLmFuaW1hdGVkLmRlbGF5LTFzIHtcXG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYygkLS1hbmltYXRlLWRlbGF5ICogJGkpO1xcbn1cXG4uYW5pbWF0ZWQubG9vcC0zIHtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDM7XFxufVxcbi5hbmltYXRlZC5kZWxheS0xcyB7XFxuICBhbmltYXRpb24tZGVsYXk6IGNhbGMoJC0tYW5pbWF0ZS1kZWxheSAqICRpKTtcXG59XFxuLmFuaW1hdGVkLmxvb3AtNCB7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiA0O1xcbn1cXG4uYW5pbWF0ZWQuZGVsYXktMXMge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKCQtLWFuaW1hdGUtZGVsYXkgKiAkaSk7XFxufVxcblxcbkBtZWRpYSBwcmludCwgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgLmFuaW1hdGVkIHtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxbXMgIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMW1zICFpbXBvcnRhbnQ7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC5hbmltYXRlZFtjbGFzcyo9T3V0XSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbi5hbmltYXRlZC1pbml0aWFsIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBpbml0aWFsICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIG9yaWdpbmFsbHkgYXV0aG9yZWQgYnkgTmljayBQZXR0aXQgLSBodHRwczovL2dpdGh1Yi5jb20vbmlja3BldHRpdC9nbGlkZSAqL1xcbkBrZXlmcmFtZXMgcHVsc2Uge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjA1LCAxLjA1LCAxLjA1KTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcbn1cXG4ucHVsc2Uge1xcbiAgYW5pbWF0aW9uLW5hbWU6IHB1bHNlO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxufVxcblxcbkBrZXlmcmFtZXMgdGFkYSB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcbiAgMTAlLCAyMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC45LCAwLjksIDAuOSkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xcbiAgfVxcbiAgMzAlLCA1MCUsIDcwJSwgOTAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpIHJvdGF0ZTNkKDAsIDAsIDEsIDNkZWcpO1xcbiAgfVxcbiAgNDAlLCA2MCUsIDgwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKSByb3RhdGUzZCgwLCAwLCAxLCAtM2RlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG59XFxuLnRhZGEge1xcbiAgYW5pbWF0aW9uLW5hbWU6IHRhZGE7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG4uZmFkZUluIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluTGVmdCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbi5mYWRlSW5MZWZ0IHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5MZWZ0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJblJpZ2h0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG4uZmFkZUluUmlnaHQge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblJpZ2h0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG4uZmFkZUluVXAge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblVwO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZU91dCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAyMDBkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG4ucm90YXRlT3V0IHtcXG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGVPdXQ7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxufVxcblxcbi5yb3RhdGUtY2lyY2xlIHtcXG4gIGFuaW1hdGlvbjogcm90YXRlQ2lyY2xlIDlzIGluZmluaXRlO1xcbn1cXG5cXG4vKlxcbiBDdXN0b20gQW5pbWF0aW9uc1xcbiAqL1xcbkBrZXlmcmFtZXMgcm90YXRlQ2lyY2xlIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAyNSUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGphY2tJblRoZUJveCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjEpIHJvdGF0ZSgzMGRlZyk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xcbiAgfVxcbiAgNzAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxufVxcbi5qYWNrSW5UaGVCb3gge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGphY2tJblRoZUJveDtcXG59XFxuXFxuLyogb3JpZ2luYWxseSBhdXRob3JlZCBieSBOaWNrIFBldHRpdCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWNrcGV0dGl0L2dsaWRlICovXFxuQGtleWZyYW1lcyByb2xsSW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC0xMjBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG4ucm9sbEluIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiByb2xsSW47XFxufVxcblxcbkBrZXlmcmFtZXMgem9vbUluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC4zLCAwLjMsIDAuMyk7XFxuICB9XFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG4uem9vbUluIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tSW47XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGVJbkRvd24ge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG4uc2xpZGVJbkRvd24ge1xcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5Eb3duO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZsb2F0IHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNsYXRlWSgwcHgpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zbGF0ZVkoLTZweCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNsYXRlWSgwcHgpO1xcbiAgfVxcbn1cXG4ucHVycGxlLWdyYWRpZW50IHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjZmY2ZWM0LCAjNzg3M2Y1KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDBkZWcsICNmZjZlYzQsICM3ODczZjUpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDBkZWcsICNmZjZlYzQsICM3ODczZjUpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjZmY2ZWM0LCAjNzg3M2Y1KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjZmY2ZWM0LCAjNzg3M2Y1KSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucGVhY2gtZ3JhZGllbnQge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDBkZWcsICNmZmQ4NmYsICNmYzYyNjIpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0MGRlZywgI2ZmZDg2ZiwgI2ZjNjI2MikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0MGRlZywgI2ZmZDg2ZiwgI2ZjNjI2MikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoNDBkZWcsICNmZmQ4NmYsICNmYzYyNjIpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsICNmZmQ4NmYsICNmYzYyNjIpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5hcXVhLWdyYWRpZW50IHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjMjA5NmZmLCAjMDVmZmEzKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDBkZWcsICMyMDk2ZmYsICMwNWZmYTMpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDBkZWcsICMyMDk2ZmYsICMwNWZmYTMpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjMjA5NmZmLCAjMDVmZmEzKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjMjA5NmZmLCAjMDVmZmEzKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYmx1ZS1ncmFkaWVudCB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0MGRlZywgIzQ1Y2FmYywgIzMwM2Y5ZikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjNDVjYWZjLCAjMzAzZjlmKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjNDVjYWZjLCAjMzAzZjlmKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCg0MGRlZywgIzQ1Y2FmYywgIzMwM2Y5ZikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MGRlZywgIzQ1Y2FmYywgIzMwM2Y5ZikgIWltcG9ydGFudDtcXG59XFxuXFxuLmhvbWUtcGFnZS1ncmFkaWVudCB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0MGRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCg0MGRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MGRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG59XFxuXFxuLnB1cnBsZS1ncmFkaWVudC1yZ2JhIHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDI1NSwgMTEwLCAxOTYsIDAuOSksIHJnYmEoMTIwLCAxMTUsIDI0NSwgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDI1NSwgMTEwLCAxOTYsIDAuOSksIHJnYmEoMTIwLCAxMTUsIDI0NSwgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSgyNTUsIDExMCwgMTk2LCAwLjkpLCByZ2JhKDEyMCwgMTE1LCAyNDUsIDAuOSkpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDI1NSwgMTEwLCAxOTYsIDAuOSksIHJnYmEoMTIwLCAxMTUsIDI0NSwgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSgyNTUsIDExMCwgMTk2LCAwLjkpLCByZ2JhKDEyMCwgMTE1LCAyNDUsIDAuOSkpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wZWFjaC1ncmFkaWVudC1yZ2JhIHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDI1NSwgMjE2LCAxMTEsIDAuOSksIHJnYmEoMjUyLCA5OCwgOTgsIDAuOSkpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSgyNTUsIDIxNiwgMTExLCAwLjkpLCByZ2JhKDI1MiwgOTgsIDk4LCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDI1NSwgMjE2LCAxMTEsIDAuOSksIHJnYmEoMjUyLCA5OCwgOTgsIDAuOSkpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDI1NSwgMjE2LCAxMTEsIDAuOSksIHJnYmEoMjUyLCA5OCwgOTgsIDAuOSkpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMjU1LCAyMTYsIDExMSwgMC45KSwgcmdiYSgyNTIsIDk4LCA5OCwgMC45KSkgIWltcG9ydGFudDtcXG59XFxuXFxuLmFxdWEtZ3JhZGllbnQtcmdiYSB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSgzMiwgMTUwLCAyNTUsIDAuOSksIHJnYmEoNSwgMjU1LCAxNjMsIDAuOSkpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSgzMiwgMTUwLCAyNTUsIDAuOSksIHJnYmEoNSwgMjU1LCAxNjMsIDAuOSkpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMzIsIDE1MCwgMjU1LCAwLjkpLCByZ2JhKDUsIDI1NSwgMTYzLCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSgzMiwgMTUwLCAyNTUsIDAuOSksIHJnYmEoNSwgMjU1LCAxNjMsIDAuOSkpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMzIsIDE1MCwgMjU1LCAwLjkpLCByZ2JhKDUsIDI1NSwgMTYzLCAwLjkpKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYmx1ZS1ncmFkaWVudC1yZ2JhIHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDY5LCAyMDIsIDI1MiwgMC45KSwgcmdiYSg0OCwgNjMsIDE1OSwgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDY5LCAyMDIsIDI1MiwgMC45KSwgcmdiYSg0OCwgNjMsIDE1OSwgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSg2OSwgMjAyLCAyNTIsIDAuOSksIHJnYmEoNDgsIDYzLCAxNTksIDAuOSkpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDY5LCAyMDIsIDI1MiwgMC45KSwgcmdiYSg0OCwgNjMsIDE1OSwgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSg2OSwgMjAyLCAyNTIsIDAuOSksIHJnYmEoNDgsIDYzLCAxNTksIDAuOSkpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5iZy1ncmFkaWVudC1wdXJwbGUge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjZmY2ZWM0LCAjNzg3M2Y1KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjZmY2ZWM0LCAjNzg3M2Y1KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgI2ZmNmVjNCwgIzc4NzNmNSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjZmY2ZWM0LCAjNzg3M2Y1KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgI2ZmNmVjNCwgIzc4NzNmNSkgIWltcG9ydGFudDtcXG59XFxuXFxuLmJnLWdyYWRpZW50LXBlYWNoIHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgI2ZmZDg2ZiwgI2ZjNjI2MikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgI2ZmZDg2ZiwgI2ZjNjI2MikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICNmZmQ4NmYsICNmYzYyNjIpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgI2ZmZDg2ZiwgI2ZjNjI2MikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICNmZmQ4NmYsICNmYzYyNjIpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5iZy1ncmFkaWVudC1hcXVhIHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgIzIwOTZmZiwgIzA1ZmZhMykgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgIzIwOTZmZiwgIzA1ZmZhMykgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICMyMDk2ZmYsICMwNWZmYTMpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgIzIwOTZmZiwgIzA1ZmZhMykgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICMyMDk2ZmYsICMwNWZmYTMpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5iZy1ncmFkaWVudC1ibHVlIHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgIzQ1Y2FmYywgIzMwM2Y5ZikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgIzQ1Y2FmYywgIzMwM2Y5ZikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICM0NWNhZmMsICMzMDNmOWYpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgIzQ1Y2FmYywgIzMwM2Y5ZikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICM0NWNhZmMsICMzMDNmOWYpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5iZy1ncmFkaWVudC1ob21lLXBhZ2Uge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkhFUk8gSWNvbnNcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0ljb25Gb250L3dlYmZvbnQuZW90P3Y9MS40LjU3XFxcIik7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvSWNvbkZvbnQvd2ViZm9udC5lb3Q/I2llZml4JnY9MS40LjU3XFxcIikgZm9ybWF0KFxcXCJlbWJlZGRlZC1vcGVudHlwZVxcXCIpLCB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0ljb25Gb250L3dlYmZvbnQud29mZjI/dj0xLjQuNTdcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvSWNvbkZvbnQvd2ViZm9udC53b2ZmP3Y9MS40LjU3XFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIiksIHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvSWNvbkZvbnQvd2ViZm9udC50dGY/dj0xLjQuNTdcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIiksIHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvSWNvbkZvbnQvd2ViZm9udC5zdmc/dj0xLjQuNTdcXFwiKSBmb3JtYXQoXFxcInN2Z1xcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuaS5oZXJvLWljb24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxufVxcbmkuaGVyby1pY29uOmJlZm9yZSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAyNHB4LzEgXFxcIkhFUk8gSWNvbnNcXFwiO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuaS5oZXJvLWljb24uaGVyby1hY2NvdW50LWdyb3VwLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQjU4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1hY2NvdW50LXNlYXJjaC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDkzNVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYWNjb3VudC10aWUtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwQ0FcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWFpcnBvcnQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwODRCXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1hcnJvdy1kb3duLWJvbGQtYm94LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzMwXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1hcnJvdy11cC1ib2xkLWJveC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDczOVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYXJyb3ctdXAtYm94OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDZDM1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYXV0by1maXg6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDY4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1hdXRvLXVwbG9hZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwNjlcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWJhbGxvdC1yZWNvdW50LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzNBXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jYWxlbmRhci1jaGVjay1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM0NFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2FsZW5kYXItbW9udGg6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTE3XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jYWxsLW1hZGU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMEY3XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jYXJkLWFjY291bnQtbWFpbC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEU5OFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2FydC1wbHVzOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDExMlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2VsbHBob25lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDExQ1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2VsbHBob25lLWNvZzo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5NTFcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNlbGxwaG9uZS1tZXNzYWdlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDhEM1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2VsbHBob25lLW5mYzo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFOTBcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNlcnRpZmljYXRlLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTg4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jaGVjay1jaXJjbGU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNUUwXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jaGVjay1jaXJjbGUtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1RTFcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNsaXBweTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxNEZcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNsb2NrLWNoZWNrLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRkE5XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jbG9jay1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDE1MFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2xvY2stc3RhcnQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTU1XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jbG91ZC1kb3dubG9hZC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEI3RFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY3JlYXRpb246OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjc0XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbWFpbC1lZGl0LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRUU0XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNjhcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWFuZ3J5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM2OVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tYW5ncnktb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNkFcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWNvbmZ1c2VkOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTBERVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tY29uZnVzZWQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwREZcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWNvb2w6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzZCXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1jb29sLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMUYzXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1jcnk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzZDXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1jcnktb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNkRcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWRlYWQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzZFXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1kZWFkLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNjlCXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1kZXZpbDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNkZcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWRldmlsLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMUY0XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1leGNpdGVkOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM3MFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tZXhjaXRlZC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDY5Q1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tZnJvd246OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRjRDXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1mcm93bi1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEY0RFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24taGFwcHk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzcxXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1oYXBweS1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDFGNVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24ta2lzczo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNzJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWtpc3Mtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNzNcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWxvbDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyMTRcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWxvbC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTIxNVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tbmV1dHJhbDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNzRcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLW5ldXRyYWwtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxRjZcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMUYyXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1wb29wOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDFGN1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tcG9vcC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM3NVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tc2FkOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM3NlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tc2FkLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMUY4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi10b25ndWU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMUY5XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi10b25ndWUtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNzdcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLXdpbms6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzc4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi13aW5rLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzc5XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1maWxlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDIxNFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZmlsZS1jbG91ZC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTAyQVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZm9ybS1zZWxlY3Q6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxNDAxXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1mb3JtYXQtbGlzdC10ZXh0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTI2RlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZ29vZ2xlLWFkczo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDODdcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWhhbmQtb2theTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBNTBcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWhhbmQtcG9pbnRpbmctcmlnaHQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMkM3XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1oZWFkc2V0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDJDRVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8taGVhcnQtbXVsdGlwbGUtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBBNTdcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWhvbWUtbWFwLW1hcmtlcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1RjhcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWh1bWFuLW1hbGUtY2hpbGQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMzhDXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1sYXB0b3A6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzIyXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1tZXNzYWdlLWNvZy1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTE3MlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbWVzc2FnZS10ZXh0LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzZBXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1tb3VzZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzN0RcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLW1vdXNlLWJsdWV0b290aDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5OEJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLW1vdXNlLW9mZjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzN0VcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLW1vdXNlLXZhcmlhbnQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzdGXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1tb3VzZS12YXJpYW50LW9mZjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAzODBcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLW5ld3NwYXBlci12YXJpYW50LW11bHRpcGxlLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMDAzXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1uZXdzcGFwZXItdmFyaWFudC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTAwNFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tcGhvbmUtaW4tdGFsay1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTE4MlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tcGx1cy1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDcwNVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tcmVzcG9uc2l2ZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0NUVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXNlbGVjdDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0ODVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXNlbGVjdGlvbi1zZWFyY2g6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjA1XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1zZW5kOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDQ4QVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tc2VuZC1jaGVjay1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTE2MlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tc2VuZC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTE2NVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tc2hhcmUtYWxsLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMUY1XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1zdGFyLWJveC1tdWx0aXBsZS1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTI4N1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tc3RpY2tlci1lbW9qaTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3ODVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXRhYmxldC1pcGFkOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDRGOFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tdGVsZXZpc2lvbi1jbGVhbjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExMTBcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXVwZGF0ZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2QjBcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXpvZGlhYy10YXVydXM6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTg3XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby16b2RpYWMtdmlyZ286OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTg4XFxcIjtcXG59XFxuXFxuLmJsb2NrZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHotaW5kZXg6IDk5O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5ibG9ja2VyOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGhlaWdodDogMTAwJTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBtYXJnaW4tcmlnaHQ6IC0wLjA1ZW07XFxufVxcbi5ibG9ja2VyLmJlaGluZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMjtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBwYWRkaW5nOiAxNXB4IDMwcHg7XFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLW8tYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDEwcHggIzAwMDtcXG4gIC1tb3otYm94LXNoYWRvdzogMCAwIDEwcHggIzAwMDtcXG4gIC1vLWJveC1zaGFkb3c6IDAgMCAxMHB4ICMwMDA7XFxuICAtbXMtYm94LXNoYWRvdzogMCAwIDEwcHggIzAwMDtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICMwMDA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4ubW9kYWwgYS5jbG9zZS1tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xMi41cHg7XFxuICByaWdodDogLTEyLjVweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB0ZXh0LWluZGVudDogLTk5OTlweDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUR3QUFBQThDQVlBQUFBNi9ObHlBQUFBQVhOU1IwSUFyczRjNlFBQUEzaEpSRUZVYUFYbG04K0swMEFjeDdNaUNJSkgveXcrZ0E5ZzI1TzQ5U0w0QU8zQnAxanc1TnZrdEMrd0Y4OHFldks0QlU5N0VtenhVQkNFb2xLL241Z3AzVzZUVEpQZnBOUE5GMzdNTnNsODUvdk4vRGFUbVU2UGtuQzRLK3BuaXFlS0ozazhVbmt2RHhYSnp6eStxL3lheHhlVkh4Vy9GTkhqZ1JTZUt0NHJGb3BsemFBdUhIREJHUjJlUzlHNTRyZWlyc21pZW5EQ1RSdDd4d3NwK0tBb0VtdDluTGFHaXRaeHJCYlBGTmFHZlBsb0d3MnQ0SlZhbVN0OHhZVzZEZzFvQ1lvM1l2K3JDR1ZpVjE2MG9Na2NkOFNZS25ZVjFOYjFhRU9qQ2U2TDVaT2lMZkYxMjBFaldodUJ1M1lJWnQxTlFtdWpuazVGNE1nT3BVUnpMZkF3T0JTVG16cDNmcER4dUkvcGFieHBxT296MnIySExBYjBHTWJaS2xOVjUvSGc5WEp5cGd1cnlBN2xQRjVLTWRUWlF6SGpxeE5QaFdoekl1QXJ1T2wxZU5xS0V4MXRTaDVyZmJ4ZHc3bU94Q3E0cVM2OFpUaktTMVlWdmlsdTU1OXZXdkZIaGg0clpyZHlaNjlWbXBnZGo4ZkpiRFpMSnBOSjB1djFjbnIvZ2pyVWhRTXVJK0FOanl1d2Z0UTBiYkw2RXJwMG1NL255OEZnNE0zTHRkUnhnTXRLbDNqd21JSFZ4WVhDaEZ5OTQvUm1wYS9wVGJOVWhzdEtWKzRScjhsTFE5S2xVdkpLTHlHOHl2UTJzOVNCeTFKYjdqVjVhMHlhcGZGNmFwYVpMakxMY1d0ZDRzTnJtSlVNSHlNKzF4aWJUakg4MlpoMDFUTmxoc3JPaGRLVGUwMHVBelpRbU42K0tXK3NEYS9KRDJQU1ZRODczbTI5eWYrMVE5VkR6ZkVZbEhpMUc1TEtCQldaYnRFc0hiRndiMW9ZRHdyMVppRi8yYm5DU2cxT0JFL3BmcjkvYld4MjZVeEpMM09OUElTT0xLVXZRemEwTFpVeFNLeWpwZFRHYS92REVyMjVyZGRiTU0wUTNPNkx4M3JxRnZVK3g2VXJSS1FZN3R5clplY21EOUZPRHk4dUxpelRtaWx3Tmowa3JhTmNBSmhPcDVhR1Z3c0FHRDVWbUpCcldXYkpTZ1dUOXpyeldlcFFGNDdSYUdTaUtmZUd4NlN6aTNnem1YL0hIYmlod0JzZXI0QjlVSllwRkJOWDRSNnZUbjNWUW5lejBTeW1uckhRTXNSWUdUcjFkU2szNGxqUnFTL0VNZDJwTFE4WUJwM2ExUExmY3FDcG84Z3RIa1pGSEtrVFg2ZnMzTVkwYmxLbnRoNjZyS0NuVTBWUkd1MzdPTnJRYUE0ZVpERnRXQXUyZlhqOXpqRmt4VEJPbzhGN3Q5MjZnVHAvODNLeXp6Y3kya1pENnhpcXhUWW5ITFJGbTN2SGlSU3dOU2prejNob0l6bzhsQ0tXVWxnL1l0R3M3dE9idW5EQVpmcERMYmZFSTE1enNFSVkzVS94L2dISGMvRzF6bHRuQWdBQUFBQkpSVTVFcmtKZ2dnPT1cXFwiKTtcXG59XFxuXFxuLm1vZGFsLXNwaW5uZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSk7XFxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG4ubW9kYWwtc3Bpbm5lciA+IGRpdiB7XFxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMnB4O1xcbiAgbWFyZ2luOiAwIDFweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzay1zdHJldGNoZGVsYXkgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcXG4gIGFuaW1hdGlvbjogc2stc3RyZXRjaGRlbGF5IDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxufVxcbi5tb2RhbC1zcGlubmVyIC5yZWN0MiB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMXM7XFxuICBhbmltYXRpb24tZGVsYXk6IC0xLjFzO1xcbn1cXG4ubW9kYWwtc3Bpbm5lciAucmVjdDMge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xcztcXG4gIGFuaW1hdGlvbi1kZWxheTogLTFzO1xcbn1cXG4ubW9kYWwtc3Bpbm5lciAucmVjdDQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjlzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLXN0cmV0Y2hkZWxheSB7XFxuICAwJSwgNDAlLCAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xcbiAgfVxcbiAgMjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBzay1zdHJldGNoZGVsYXkge1xcbiAgMCUsIDQwJSwgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcXG4gIH1cXG4gIDIwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgfVxcbn1cXG4jdWktZGF0ZXBpY2tlci1kaXYge1xcbiAgei1pbmRleDogMTAwMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4udWktdGltZXBpY2tlci13cmFwcGVyIHtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBtYXgtaGVpZ2h0OiAxNTBweDtcXG4gIHdpZHRoOiA2LjVlbTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIC1tb3otYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB6LWluZGV4OiAxMDA1MjtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnVpLXRpbWVwaWNrZXItd3JhcHBlci51aS10aW1lcGlja2VyLXdpdGgtZHVyYXRpb24ge1xcbiAgd2lkdGg6IDEzZW07XFxufVxcblxcbi51aS10aW1lcGlja2VyLXdyYXBwZXIudWktdGltZXBpY2tlci13aXRoLWR1cmF0aW9uLnVpLXRpbWVwaWNrZXItc3RlcC0zMCxcXG4udWktdGltZXBpY2tlci13cmFwcGVyLnVpLXRpbWVwaWNrZXItd2l0aC1kdXJhdGlvbi51aS10aW1lcGlja2VyLXN0ZXAtNjAge1xcbiAgd2lkdGg6IDExZW07XFxufVxcblxcbi51aS10aW1lcGlja2VyLWxpc3Qge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi51aS10aW1lcGlja2VyLWR1cmF0aW9uIHtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBjb2xvcjogIzg4ODtcXG59XFxuXFxuLnVpLXRpbWVwaWNrZXItbGlzdDpob3ZlciAudWktdGltZXBpY2tlci1kdXJhdGlvbiB7XFxuICBjb2xvcjogIzg4ODtcXG59XFxuXFxuLnVpLXRpbWVwaWNrZXItbGlzdCBsaSB7XFxuICBwYWRkaW5nOiAzcHggMCAzcHggNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnVpLXRpbWVwaWNrZXItbGlzdDpob3ZlciAudWktdGltZXBpY2tlci1zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbmxpLnVpLXRpbWVwaWNrZXItc2VsZWN0ZWQsXFxuLnVpLXRpbWVwaWNrZXItbGlzdCBsaTpob3ZlcixcXG4udWktdGltZXBpY2tlci1saXN0IC51aS10aW1lcGlja2VyLXNlbGVjdGVkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMxOTgwRUM7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxubGkudWktdGltZXBpY2tlci1zZWxlY3RlZCAudWktdGltZXBpY2tlci1kdXJhdGlvbixcXG4udWktdGltZXBpY2tlci1saXN0IGxpOmhvdmVyIC51aS10aW1lcGlja2VyLWR1cmF0aW9uIHtcXG4gIGNvbG9yOiAjY2NjO1xcbn1cXG5cXG4udWktdGltZXBpY2tlci1saXN0IGxpLnVpLXRpbWVwaWNrZXItZGlzYWJsZWQsXFxuLnVpLXRpbWVwaWNrZXItbGlzdCBsaS51aS10aW1lcGlja2VyLWRpc2FibGVkOmhvdmVyLFxcbi51aS10aW1lcGlja2VyLWxpc3QgbGkudWktdGltZXBpY2tlci1zZWxlY3RlZC51aS10aW1lcGlja2VyLWRpc2FibGVkIHtcXG4gIGNvbG9yOiAjODg4O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4udWktdGltZXBpY2tlci1saXN0IGxpLnVpLXRpbWVwaWNrZXItZGlzYWJsZWQ6aG92ZXIsXFxuLnVpLXRpbWVwaWNrZXItbGlzdCBsaS51aS10aW1lcGlja2VyLXNlbGVjdGVkLnVpLXRpbWVwaWNrZXItZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcXG59XFxuXFxuLm1vZGFsLWJvb2tpbmcgLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGNvbG9yOiAjMGQ0N2ExO1xcbiAgcGFkZGluZzogMCA1cHggNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwtYm9va2luZyAud3JhcHBlcl9fZGF0ZXRpbWUtcGlja2VyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1vZGFsLWJvb2tpbmcgLndyYXBwZXJfX2RhdGV0aW1lLXBpY2tlciAuaW5wdXQtZ3JvdXAge1xcbiAgd2lkdGg6IDMwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luOiAwIDEuNSUgMTVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMzdweDtcXG59XFxuLm1vZGFsLWJvb2tpbmcgLndyYXBwZXJfX2RhdGV0aW1lLXBpY2tlciAuaW5wdXQtZ3JvdXAgLmhlcm8taWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDEwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIHotaW5kZXg6IDM7XFxuICBjb2xvcjogIzZjNzU3ZDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbn1cXG4ubW9kYWwtYm9va2luZyAud3JhcHBlcl9fZGF0ZXRpbWUtcGlja2VyIC5pbnB1dC1ncm91cCAuaW5wdXQtY29udHJvbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGNvbG9yOiAjNTI1NjY2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmctbGVmdDogNDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICB0cmFuc2l0aW9uOiBib3JkZXIgMC4zcyBsaW5lYXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbn1cXG4ubW9kYWwtYm9va2luZyAud3JhcHBlcl9fZGF0ZXRpbWUtcGlja2VyIC5pbnB1dC1ncm91cCAudGV4dC1jb250cm9sIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgY29sb3I6ICM1MjU2NjY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMjVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICB0cmFuc2l0aW9uOiBib3JkZXIgMC4zcyBsaW5lYXI7XFxufVxcbi5tb2RhbC1ib29raW5nIC5zdGF0aXN0aWNhbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4ubW9kYWwtYm9va2luZyAuc3RhdGlzdGljYWwgLnNlc3Npb24tc3RhdGlzdGljYWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiA1cHggMDtcXG59XFxuLm1vZGFsLWJvb2tpbmcgLnN0YXRpc3RpY2FsIC5zZXNzaW9uLXN0YXRpc3RpY2FsOmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDA7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5tb2RhbC1ib29raW5nIC5zdGF0aXN0aWNhbCAuc2Vzc2lvbi1zdGF0aXN0aWNhbCAuaGVhZCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZy1yaWdodDogMTVweDtcXG4gIHotaW5kZXg6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG4ubW9kYWwtYm9va2luZyAuc3RhdGlzdGljYWwgLnNlc3Npb24tc3RhdGlzdGljYWwgLmhlYWQgc3BhbiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4ubW9kYWwtYm9va2luZyAuc3RhdGlzdGljYWwgLnNlc3Npb24tc3RhdGlzdGljYWwgLmhlYWQ6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjMzQzYTQwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogLTE7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDE1cHg7XFxufVxcbi5tb2RhbC1ib29raW5nIC5zdGF0aXN0aWNhbCAuc2Vzc2lvbi1zdGF0aXN0aWNhbCAudGV4dC12YWx1ZSB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjMGQ0N2ExO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBtaW4td2lkdGg6IDYwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG4ubW9kYWwtYm9va2luZyAuc3RhdGlzdGljYWwgLnNlc3Npb24tc3RhdGlzdGljYWwubm90ZSB7XFxuICBmb250LXNpemU6IDExcHg7XFxufVxcbi5tb2RhbC1ib29raW5nIC5ncm91cC1ib3gtdG90YWwge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xcbn1cXG4ubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyX190b3RhbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbn1cXG4ubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyX190b3RhbCAuaGVhZCwgLm1vZGFsLWJvb2tpbmcgLmdyb3VwLWJveC10b3RhbCAud3JhcHBlcl9fdG90YWwgLnRleHQtdmFsdWUge1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcXG59XFxuLm1vZGFsLWJvb2tpbmcgLmdyb3VwLWJveC10b3RhbCAud3JhcHBlcl9fdG90YWwgLnRleHQtdmFsdWUge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcbi5tb2RhbC1ib29raW5nIC5ncm91cC1ib3gtdG90YWwgLnRleHQtYnV0dG9uLXF1ZXN0aW9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1vZGFsLWJvb2tpbmcgLmdyb3VwLWJveC10b3RhbCAud3JhcHBlci1idXR0b24tc2V0dGluZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tb2RhbC1ib29raW5nIC5ncm91cC1ib3gtdG90YWwgLndyYXBwZXItYnV0dG9uLXNldHRpbmcgLmJ0bi1ib29raW5nIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIG1hcmdpbjogMnB4IDEwcHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA4cHggMTVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcXG4gIC1vLXRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dCwgLXdlYmtpdC1ib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyLWJ1dHRvbi1zZXR0aW5nIC5idG4tc2l0dGVyLWFjY2VwdCB7XFxuICBiYWNrZ3JvdW5kOiAjMDA3YmZjO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzAwN2JmYztcXG59XFxuLm1vZGFsLWJvb2tpbmcgLmdyb3VwLWJveC10b3RhbCAud3JhcHBlci1idXR0b24tc2V0dGluZyAuYnRuLXNpdHRlci1hY2NlcHQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNhM2NmZmU7XFxuICBjb2xvcjogIzAwN2JmYztcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG4ubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyLWJ1dHRvbi1zZXR0aW5nIC5idG4tc2l0dGVyLWFjY2VwdDpmb2N1cywgLm1vZGFsLWJvb2tpbmcgLmdyb3VwLWJveC10b3RhbCAud3JhcHBlci1idXR0b24tc2V0dGluZyAuYnRuLXNpdHRlci1hY2NlcHQuZm9jdXMge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG4ubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyLWJ1dHRvbi1zZXR0aW5nIC5idG4tc2l0dGVyLWFjY2VwdDpkaXNhYmxlZCwgLm1vZGFsLWJvb2tpbmcgLmdyb3VwLWJveC10b3RhbCAud3JhcHBlci1idXR0b24tc2V0dGluZyAuYnRuLXNpdHRlci1hY2NlcHQuZGlzYWJsZWQsIGZpZWxkc2V0OmRpc2FibGVkIC5tb2RhbC1ib29raW5nIC5ncm91cC1ib3gtdG90YWwgLndyYXBwZXItYnV0dG9uLXNldHRpbmcgLmJ0bi1zaXR0ZXItYWNjZXB0IHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgb3BhY2l0eTogMC42NTtcXG59XFxuLm1vZGFsLWJvb2tpbmcgLmdyb3VwLWJveC10b3RhbCAud3JhcHBlci1idXR0b24tc2V0dGluZyAuYnRuLWVtcGxveWVyLWFjY2VwdCB7XFxuICBiYWNrZ3JvdW5kOiAjZmYzNTQ3O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmMzU0NztcXG59XFxuLm1vZGFsLWJvb2tpbmcgLmdyb3VwLWJveC10b3RhbCAud3JhcHBlci1idXR0b24tc2V0dGluZyAuYnRuLWVtcGxveWVyLWFjY2VwdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmYjZiZDtcXG4gIGNvbG9yOiAjZmYzNTQ3O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxufVxcbi5tb2RhbC1ib29raW5nIC5ncm91cC1ib3gtdG90YWwgLndyYXBwZXItYnV0dG9uLXNldHRpbmcgLmJ0bi1lbXBsb3llci1hY2NlcHQ6Zm9jdXMsIC5tb2RhbC1ib29raW5nIC5ncm91cC1ib3gtdG90YWwgLndyYXBwZXItYnV0dG9uLXNldHRpbmcgLmJ0bi1lbXBsb3llci1hY2NlcHQuZm9jdXMge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG4ubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyLWJ1dHRvbi1zZXR0aW5nIC5idG4tZW1wbG95ZXItYWNjZXB0OmRpc2FibGVkLCAubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyLWJ1dHRvbi1zZXR0aW5nIC5idG4tZW1wbG95ZXItYWNjZXB0LmRpc2FibGVkLCBmaWVsZHNldDpkaXNhYmxlZCAubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyLWJ1dHRvbi1zZXR0aW5nIC5idG4tZW1wbG95ZXItYWNjZXB0IHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgb3BhY2l0eTogMC42NTtcXG59XFxuLm1vZGFsLWJvb2tpbmcgLmdyb3VwLWJveC10b3RhbCAud3JhcHBlci1idXR0b24tc2V0dGluZyAuYnRuLXVzZXItY2FuY2VsIHtcXG4gIGJhY2tncm91bmQ6ICNmZjM1NDc7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmYzNTQ3O1xcbn1cXG4ubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyLWJ1dHRvbi1zZXR0aW5nIC5idG4tdXNlci1jYW5jZWw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmI2YmQ7XFxuICBjb2xvcjogI2ZmMzU0NztcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG4ubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyLWJ1dHRvbi1zZXR0aW5nIC5idG4tdXNlci1jYW5jZWw6Zm9jdXMsIC5tb2RhbC1ib29raW5nIC5ncm91cC1ib3gtdG90YWwgLndyYXBwZXItYnV0dG9uLXNldHRpbmcgLmJ0bi11c2VyLWNhbmNlbC5mb2N1cyB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIG91dGxpbmU6IDA7XFxufVxcbi5tb2RhbC1ib29raW5nIC5ncm91cC1ib3gtdG90YWwgLndyYXBwZXItYnV0dG9uLXNldHRpbmcgLmJ0bi11c2VyLWNhbmNlbDpkaXNhYmxlZCwgLm1vZGFsLWJvb2tpbmcgLmdyb3VwLWJveC10b3RhbCAud3JhcHBlci1idXR0b24tc2V0dGluZyAuYnRuLXVzZXItY2FuY2VsLmRpc2FibGVkLCBmaWVsZHNldDpkaXNhYmxlZCAubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyLWJ1dHRvbi1zZXR0aW5nIC5idG4tdXNlci1jYW5jZWwge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvcGFjaXR5OiAwLjY1O1xcbn1cXG4ubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyLWJ1dHRvbi1zZXR0aW5nIC5idG4tdXNlci1hcHByb3ZlZCB7XFxuICBiYWNrZ3JvdW5kOiAjMGQ0N2ExO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzBkNDdhMTtcXG59XFxuLm1vZGFsLWJvb2tpbmcgLmdyb3VwLWJveC10b3RhbCAud3JhcHBlci1idXR0b24tc2V0dGluZyAuYnRuLXVzZXItYXBwcm92ZWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNhOGJkZGQ7XFxuICBjb2xvcjogIzBkNDdhMTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG4ubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyLWJ1dHRvbi1zZXR0aW5nIC5idG4tdXNlci1hcHByb3ZlZDpmb2N1cywgLm1vZGFsLWJvb2tpbmcgLmdyb3VwLWJveC10b3RhbCAud3JhcHBlci1idXR0b24tc2V0dGluZyAuYnRuLXVzZXItYXBwcm92ZWQuZm9jdXMge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG4ubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyLWJ1dHRvbi1zZXR0aW5nIC5idG4tdXNlci1hcHByb3ZlZDpkaXNhYmxlZCwgLm1vZGFsLWJvb2tpbmcgLmdyb3VwLWJveC10b3RhbCAud3JhcHBlci1idXR0b24tc2V0dGluZyAuYnRuLXVzZXItYXBwcm92ZWQuZGlzYWJsZWQsIGZpZWxkc2V0OmRpc2FibGVkIC5tb2RhbC1ib29raW5nIC5ncm91cC1ib3gtdG90YWwgLndyYXBwZXItYnV0dG9uLXNldHRpbmcgLmJ0bi11c2VyLWFwcHJvdmVkIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgb3BhY2l0eTogMC42NTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLm1vZGFsLm1vZGFsLWJvb2tpbmcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gIH1cXG4gIC5tb2RhbC5tb2RhbC1ib29raW5nIC53cmFwcGVyX19kYXRldGltZS1waWNrZXIgLndyYXBwZXJfX2RhdGUtcGlja2VyIHtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgbWFyZ2luOiAwIDEuNSUgNXB4O1xcbiAgfVxcbiAgLm1vZGFsLm1vZGFsLWJvb2tpbmcgLndyYXBwZXJfX2RhdGV0aW1lLXBpY2tlciAud3JhcHBlcl9fdGltZS1waWNrZXIge1xcbiAgICB3aWR0aDogNDAlO1xcbiAgfVxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiaW1wb3J0IFRZUEUgZnJvbSBcIi4vdHlwZVwiXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR0ZXJTb2NrZXQoc29ja2V0KXtcclxuICAgIGNvbnNvbGUubG9nKHNvY2tldCAsIFwiIHNldCBzb2NrZXQgXCIpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBUWVBFLlNPQ0NLRVQuU0VUX1NPQ0tFVF9JTyxcclxuICAgICAgICBwYXlsb2FkIDogc29ja2V0XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldHRlclVzZXIoIHVzZXIgKXtcclxuICAgIGNvbnNvbGUubG9nKHVzZXIgLCBcIiBzZXQgdXNlciBcIilcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6IFRZUEUuVVNFUi5TRVRURVJfVVNFUixcclxuICAgICAgICBwYXlsb2FkIDogeyAuLi51c2VyLCBmZXRjaGVkOiB0cnVlIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldHRlckNoYW5uZWxzKCBjaGFubmVscyApe1xyXG4gICAgY29uc29sZS5sb2coY2hhbm5lbHMgLCBcIiBzZXQgY2hhbm5lbHMgXCIpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBUWVBFLkNIQU5ORUwuU0VUVEVSX0NIQU5ORUwsXHJcbiAgICAgICAgcGF5bG9hZCA6IGNoYW5uZWxzXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRNZXNzYWdlKCBtZXNzYWdlICl7XHJcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlICwgXCIgYWRkTWVzc2FnZSBcIilcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6IFRZUEUuQ0hBTk5FTC5BRERfTUVTU0FHRSxcclxuICAgICAgICBwYXlsb2FkIDogbWVzc2FnZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkTWVzc2FnZVNlbmRUb01lKCBtZXNzYWdlICl7XHJcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlICwgXCIgYWRkTWVzc2FnZVNlbmRUb01lIFwiKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlIDogVFlQRS5DSEFOTkVMLkFERF9NRVNTQUdFX1NFTkRfVE9fTUUsXHJcbiAgICAgICAgcGF5bG9hZCA6IG1lc3NhZ2VcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VDaGFubmVsQWN0aXZlKCBjaGFubmVsTmFtZSApe1xyXG4gICAgY29uc29sZS5sb2coY2hhbm5lbE5hbWUgLCBcIiBjaGFuZ2VDaGFubmVsQWN0aXZlIFwiKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlIDogVFlQRS5DSEFOTkVMLlNFVF9BQ1RJVkUsXHJcbiAgICAgICAgcGF5bG9hZCA6IGNoYW5uZWxOYW1lXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRVc2VyT25saW5lKCBpZCApe1xyXG4gICAgY29uc29sZS5sb2coaWQgLCBcIiBhZGRVc2VyT25saW5lIFwiKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlIDogVFlQRS5DSEFOTkVMLkFERF9VU0VSX09OTElORSxcclxuICAgICAgICBwYXlsb2FkIDogaWRcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVVzZXJPbmxpbmUoIGlkICl7XHJcbiAgICBjb25zb2xlLmxvZyhpZCAsIFwiIHJlbW92ZVVzZXJPbmxpbmUgXCIpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBUWVBFLkNIQU5ORUwuUkVNT1ZFX1VTRVJfT05MSU5FLFxyXG4gICAgICAgIHBheWxvYWQgOiBpZFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVhZEFsbE1lc3NhZ2VDaGFubmVsQWN0aXZlKCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIiByZWFkQWxsTWVzc2FnZUNoYW5uZWxBY3RpdmUgXCIpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBUWVBFLkNIQU5ORUwuUkVBRF9BTExfTUVTU0FHRV9DSEFOTkVMX0FDVElWRVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR0ZXJCb29raW5ncyhib29raW5ncyl7XHJcbiAgICBjb25zb2xlLmxvZyhib29raW5ncyxcIiBzZXR0ZXJCb29raW5ncyBcIilcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6IFRZUEUuQk9PS0lORy5TRVRURVJfQk9PS0lORyxcclxuICAgICAgICBwYXlsb2FkIDogYm9va2luZ3NcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUJvb2tpbmcoYm9va2luZyl7XHJcbiAgICBjb25zb2xlLmxvZyhib29raW5nLFwiIGNoYW5nZUJvb2tpbmcgXCIpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBUWVBFLkJPT0tJTkcuQ0hBTkdFX0JPT0tJTkcsXHJcbiAgICAgICAgcGF5bG9hZCA6IGJvb2tpbmdcclxuICAgIH1cclxufVxyXG4iLCJjb25zdCBUWVBFID0gIHtcclxuICBIT01FIDoge1xyXG4gICAgQ0hBTkdFX0xBWU9VVFM6ICdDSEFOR0VfTEFZT1VUUycsXHJcbiAgICBDSEFOR0VfVEhFTUUgIDogJ0NIQU5HRV9USEVNRSdcclxuICB9LFxyXG4gIENIQVQgOiB7XHJcbiAgICBDSEFOR0VfVVNFUl9DSEFUX0RFRkFVTFQ6ICdDSEFOR0VfVVNFUl9DSEFUX0RFRkFVTFQnXHJcbiAgfSxcclxuICBTT0NDS0VUIDoge1xyXG4gICAgU0VUX1NPQ0tFVF9JTzogXCJTRVRfU09DS0VUX0lPXCJcclxuICB9LFxyXG4gIFVTRVI6IHtcclxuICAgIFNFVFRFUl9VU0VSOiBcIlNFVFRFUl9VU0VSXCJcclxuICB9LFxyXG4gIENIQU5ORUw6IHtcclxuICAgIFNFVFRFUl9DSEFOTkVMICAgICAgICA6IFwiU0VUVEVSX0NIQU5ORUxcIixcclxuICAgIEFERF9NRVNTQUdFICAgICAgICAgICA6IFwiQUREX01FU1NBR0VcIixcclxuICAgIEFERF9NRVNTQUdFX1NFTkRfVE9fTUU6IFwiQUREX01FU1NBR0VfU0VORF9UT19NRVwiLFxyXG4gICAgU0VUX0FDVElWRSAgICAgICAgICAgIDogXCJTRVRfQUNUSVZFXCIsXHJcbiAgICBBRERfVVNFUl9PTkxJTkUgICAgICAgOiBcIkFERF9VU0VSX09OTElORVwiLFxyXG4gICAgUkVNT1ZFX1VTRVJfT05MSU5FICAgIDogXCJSRU1PVkVfVVNFUl9PTkxJTkVcIixcclxuICAgIFJFQURfQUxMX01FU1NBR0VfQ0hBTk5FTF9BQ1RJVkU6IFwiUkVBRF9BTExfTUVTU0FHRV9DSEFOTkVMX0FDVElWRVwiXHJcbiAgfSxcclxuICBDT05GSUc6IHtcclxuICAgIFNFVFRFUl9TRU5EX1BFRVIgOiBcIlNFVFRFUl9TRU5EX1BFRVJcIlxyXG4gIH0sXHJcbiAgQk9PS0lORzoge1xyXG4gICAgU0VUVEVSX0JPT0tJTkcgOiBcIlNFVFRFUl9CT09LSU5HXCIsXHJcbiAgICBDSEFOR0VfQk9PS0lORzogXCJDSEFOR0VfQk9PS0lOR1wiXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFRZUEU7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IENoYXQgZnJvbSAnLi9DaGF0L2luZGV4LmpzeCc7XHJcbi8vLyBzb2Nja2V0IFxyXG5pbXBvcnQgc29ja2V0SU9DbGllbnQgZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuaW1wb3J0IHsgc29ja2V0SW5pdGlhbENvbm5lY3QgfSBmcm9tIFwiLi4vbGlicmFyeS9zZXJ2aWNlLmpzXCJcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2VuZFVzZXJPbmxpbmUgOiBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcy5jbGllbnQpKVxyXG4gICAgICAgIHZhciBpbnN0YW5jZUFwcCA9IHRoaXNcclxuICAgICAgICBzb2NrZXRJbml0aWFsQ29ubmVjdChzb2NrZXRJT0NsaWVudCwgaW5zdGFuY2VBcHApXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG4gICAgICAgIHZhciBFVkVOVCAgID0gQ09ORklHX0VWRU5UXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCAhdGhpcy5zdGF0ZS5zZW5kVXNlck9ubGluZSApIHsgXHJcbiAgICAgICAgICAgIGlmKCB0aGlzLnByb3BzLmF1dGggJiYgdGhpcy5wcm9wcy5hdXRoLmZldGNoZWQgKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc29ja2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbmRVc2VyT25saW5lOiB0cnVlIH0sIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc29ja2V0LmVtaXQoRVZFTlQuVVNFUl9PTkxJTkUsIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCAgICA6IHRoaXMucHJvcHMuYXV0aC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlZXIgIDogXCIxMjM0NTY3ODkwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3M6IHRoaXMucHJvcHMuYXV0aC50b2tlbnMudG9rZW5BY2Nlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zb2NrZXQuZW1pdChFVkVOVC5VU0VSX0dFVF9CT09LSU5HLCB7IGlkOiB0aGlzLnByb3BzLmF1dGguaWQgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZHJhdyBhcHBcIilcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcENvbXBvbmVudFwiIGlkPVwiQXBwbGljYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxDaGF0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2xpZW50OiBzdGF0ZS5jbGllbnQsXHJcbiAgICAgICAgc29ja2V0OiBzdGF0ZS5zb2NrZXQsXHJcbiAgICAgICAgYXV0aDogc3RhdGUudXNlcnMsXHJcbiAgICAgICAgdXNlckNoYXQ6IHN0YXRlLnVzZXJDaGF0XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEFwcCk7XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCBCb29raW5nTW9kYWxDb25maXJtIGZyb20gXCIuL0Jvb2tpbmdNb2RhbENvbmZpcm0uanN4XCJcclxuaW1wb3J0IEJvb2tpbmdNb2RhbFNldHRpbmcgZnJvbSBcIi4vQm9va2luZ01vZGFsU2V0dGluZy5qc3hcIlxyXG5pbXBvcnQgQm9va2luZ05vbmUgZnJvbSBcIi4vQm9va2luZ05vbmUuanN4XCJcclxuaW1wb3J0IEJvb2tpbmdMb2FkaW5nIGZyb20gXCIuL0Jvb2tpbmdMb2FkaW5nLmpzeFwiXHJcbmltcG9ydCBCb29raW5nRmluaXNoIGZyb20gXCIuL0Jvb2tpbmdGaW5pc2guanN4XCJcclxuaW1wb3J0IEJvb2tpbmdFcnJvciBmcm9tIFwiLi9Cb29raW5nRXJyb3IuanN4XCJcclxuXHJcbmNsYXNzIEJvb2tpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIHsgYm9va2luZ3MgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXItbW9kYWxcIj5cclxuICAgICAgICAgICAgICAgIDxCb29raW5nTm9uZSAvPlxyXG4gICAgICAgICAgICAgICAgPEJvb2tpbmdMb2FkaW5nIC8+XHJcbiAgICAgICAgICAgICAgICA8Qm9va2luZ0Vycm9yIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBib29raW5ncy5kYXRhLm1hcCggYm9va2luZyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihib29raW5nKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtib29raW5nLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJvb2tpbmdNb2RhbFNldHRpbmcgIGJvb2tpbmc9e2Jvb2tpbmd9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJvb2tpbmdNb2RhbENvbmZpcm0gYm9va2luZz17Ym9va2luZ30vPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJvb2tpbmdGaW5pc2ggYm9va2luZz17Ym9va2luZ30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5sZXQgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGJvb2tpbmdzOiBzdGF0ZS5ib29raW5nLFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShCb29raW5nKTtcclxuIiwiXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9va2luZ0Vycm9yIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAgKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwianMtYm9va2luZy1lcnJvclwiIGNsYXNzTmFtZT1cIm1vZGFsIG1vZGFsLWJvb2tpbmdcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1idXR0b24tcXVlc3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICDjgqjjg6njg7zjgYznmbrnlJ/jgZfjgb7jgZfjgZ/vvJpcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwLWJveC10b3RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlci1idXR0b24tc2V0dGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4tYm9va2luZyBidG4tdXNlci1jYW5jZWxcIiBocmVmPVwiI1wiIHJlbD1cIm1vZGFsOmNsb3NlXCI+44Kt44Oj44Oz44K744OrPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IHsgY2FsY3VsYXRvckJpbGwgfSBmcm9tIFwiLi4vLi4vbGlicmFyeS9zZXJ2aWNlLmpzXCJcclxuaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vLi4vY29uZmlnXCJcclxuY2xhc3MgQm9va2luZ0ZpbmlzaCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHsgYXV0aCwgYm9va2luZyB9ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgICAgICBpZighYm9va2luZyl7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgWyB3b3JrX2RhdGUsIHN0YXJ0LCBmaW5pc2gsIHNhbGFyeSwgXHJcbiAgICAgICAgICAgIGRpZmZlcmVuY2VUaW1lLCBwcmljZSwgdmF0LCBcclxuICAgICAgICAgICAgbXlTZXJ2RmVlLCBzdHJpcGVTZXJ2RmVlLCB0b3RhbCBdID0gY2FsY3VsYXRvckJpbGwoYm9va2luZywgYXV0aClcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgcmV0dXJuICAoXHJcbiAgICAgICAgICAgIDxkaXYgIGlkPXsgdGhpcy5wcm9wcy5ib29raW5nLmlkICsgXCJqcy1ib29raW5nLWZpbmlzaFwiIH0gY2xhc3NOYW1lPVwibW9kYWwgbW9kYWwtYm9va2luZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPuimi+epjeabuDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLWRhdGV0aW1lLXBpY2tlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlcl9fZGF0ZXRpbWUtcGlja2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgd3JhcHBlcl9fZGF0ZS1waWNrZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLWNhbGVuZGFyLWNoZWNrLW91dGxpbmVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWNvbnRyb2xcIj57d29ya19kYXRlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgd3JhcHBlcl9fdGltZS1waWNrZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLWNsb2NrLW91dGxpbmVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWNvbnRyb2xcIj57IHN0YXJ0IH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIHdyYXBwZXJfX3RpbWUtcGlja2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJoZXJvLWljb24gaGVyby1jbG9jay1jaGVjay1vdXRsaW5lXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1jb250cm9sXCI+eyBmaW5pc2ggfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGlzdGljYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb24tc3RhdGlzdGljYWwgc2FsYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPjxzcGFuPuaZgumWk+WNmOS+oTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZhbHVlXCI+eyBzYWxhcnkgfe+/pTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbi1zdGF0aXN0aWNhbCBkaWZmZXJlbmNlVGltZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRcIj48c3Bhbj7liKnnlKjkuojlrprmmYLplpM8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZVwiPnsgZGlmZmVyZW5jZVRpbWUgfSDmmYLplpM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uLXN0YXRpc3RpY2FsIHByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPjxzcGFuPuOCt+ODg+OCv+ODvC/lrrbkuovku6PooYzmlpnph5E8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZVwiPnsgcHJpY2Ugfe+/pTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hdXRoLnJvbGVfaWQgPT0gQ09ORklHLlJPTEVfVVNFUi5zaXR0ZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRpc3RpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb24tc3RhdGlzdGljYWwgc3RyaXBlU2VydkZlZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+PHNwYW4+5omL5pWw5paZPC9zcGFuPiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZVwiPnsgc3RyaXBlU2VydkZlZSB977+lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb24tc3RhdGlzdGljYWwgbm90ZVwiPuKAu+aXouWumuOBruaJi+aVsOaWmeOBjOeZuueUn+OBl+OBvuOBmeOAgjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hdXRoLnJvbGVfaWQgPT0gQ09ORklHLlJPTEVfVVNFUi5lbXBsb3llciAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGlzdGljYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uLXN0YXRpc3RpY2FsIG15U2VydkZlZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+PHNwYW4+44K144O844OT44K55Yip55So5paZPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZhbHVlXCI+eyBteVNlcnZGZWUgfe+/pTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uLXN0YXRpc3RpY2FsIG5vdGVcIj7igLvjgrfjg4Pjgr/jg7wv5a625LqL5Luj6KGM5paZ6YeR44GuMjDvvIU8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbi1zdGF0aXN0aWNhbCB2YXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPjxzcGFuPua2iOiyu+eoju+8iDEw77yF77yJPC9zcGFuPiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZVwiPnsgdmF0IH3vv6U8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwLWJveC10b3RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlcl9fdG90YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+5ZCI6KiIPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZSB0ZXh0LWNvbG9yLXdhcm5pbmctY29sb3ItZGFya1wiPnsgdG90YWwgfe+/pTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5sZXQgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGF1dGggICAgICAgICA6IHN0YXRlLnVzZXJzLFxyXG4gICAgICAgIGJvb2tpbmdzICAgICA6IHN0YXRlLmJvb2tpbmcsXHJcbiAgICAgICAgY29udmVydGF0aW9uczogc3RhdGUudXNlckNoYXRcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQm9va2luZ0ZpbmlzaCkiLCJcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2tpbmdMb2FkaW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIFxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cImpzLWJvb2tpbmctbG9hZGluZ1wiIGNsYXNzTmFtZT1cIm1vZGFsIG1vZGFsLWJvb2tpbmdcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1idXR0b24tcXVlc3Rpb25cIj7jg4fjg7zjgr/jgpLoqq3jgb/ovrzjgpPjgafjgYTjgb7jgZnjgILjgZfjgbDjgonjgY/jgYrlvoXjgaHjgY/jgaDjgZXjgYQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MgcHJvZ3Jlc3Mtc3VjY2Vzc1wiPjxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtbG9hZGRpbmdcIj48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAtYm94LXRvdGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyLWJ1dHRvbi1zZXR0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0bi1ib29raW5nIGJ0bi11c2VyLWNhbmNlbFwiIGhyZWY9XCIjXCIgcmVsPVwibW9kYWw6Y2xvc2VcIj7jgq3jg6Pjg7Pjgrvjg6s8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCB7IHNlbmRCb29raW5nVXBkYXRlLCBjYWxjdWxhdG9yQmlsbCB9IGZyb20gXCIuLi8uLi9saWJyYXJ5L3NlcnZpY2UuanNcIlxyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXHJcbmltcG9ydCBDT05GSUcgZnJvbSBcIi4uLy4uL2NvbmZpZ1wiXHJcbmNsYXNzIEJvb2tpbmdNb2RhbENvbmZpcm0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNhbmNlbEFjY2VwdCA9ICgpID0+IHtcclxuICAgICAgICB2YXIgeyBib29raW5nIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgJChcIiNcIisgYm9va2luZy5pZCArXCJqcy1ib29raW5nLXNldHRpbmdcIikubW9kYWwoe1xyXG4gICAgICAgICAgICBlc2NhcGVDbG9zZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNsaWNrQ2xvc2U6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93Q2xvc2U6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZpbmFsQWNjZXB0ID0gKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciB7IGlkLCB3b3JrX2RhdGUsIHN0YXJ0LCBmaW5pc2ggfSA9IHRoaXMucHJvcHMuYm9va2luZ1xyXG4gICAgICAgIHZhciBjaGFubmVsQWN0aXZlICAgPSB0aGlzLnByb3BzLmNvbnZlcnRhdGlvbnMuZmluZChjaGFubmVsID0+IGNoYW5uZWwuaXNBY3RpdmUpXHJcbiAgICAgICAgLy8vLyBkaXNwYXRjaCB0ZXN0XHJcbiAgICAgICAgdmFyIGJvb2tpbmdVcGRhdGUgPSB7XHJcbiAgICAgICAgICAgIGJvb2tpbmdfaWQgICAgIDogaWQsXHJcbiAgICAgICAgICAgIHNpdHRlcl9hY2NlcHQgIDogMSxcclxuICAgICAgICAgICAgc3RhdHVzICAgICAgICAgOiAxLFxyXG4gICAgICAgICAgICBlbXBsb3llcl9hY2NlcHQ6IDEsXHJcbiAgICAgICAgICAgIHN0YXJ0ICAgICAgICAgIDogc3RhcnQsXHJcbiAgICAgICAgICAgIGZpbmlzaCAgICAgICAgIDogZmluaXNoLFxyXG4gICAgICAgICAgICB3b3JrX2RhdGUgICAgICA6IHdvcmtfZGF0ZSxcclxuICAgICAgICAgICAgdG9rZW5BY2Nlc3MgICAgOiB0aGlzLnByb3BzLmF1dGgudG9rZW5zLnRva2VuQWNjZXNzLFxyXG4gICAgICAgICAgICB1c2VySWQgICAgICAgICA6IHRoaXMucHJvcHMuYXV0aC5pZCxcclxuICAgICAgICAgICAgY2hhbm5lbE5hbWUgICAgOiBjaGFubmVsQWN0aXZlLmNoYW5uZWxOYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbmRCb29raW5nVXBkYXRlKGJvb2tpbmdVcGRhdGUpXHJcbiAgICAgICAgJC5tb2RhbC5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgWyB3b3JrX2RhdGUsIHN0YXJ0LCBmaW5pc2gsIHNhbGFyeSwgXHJcbiAgICAgICAgICAgIGRpZmZlcmVuY2VUaW1lLCBwcmljZSwgdmF0LCBcclxuICAgICAgICAgICAgbXlTZXJ2RmVlLCBzdHJpcGVTZXJ2RmVlLCB0b3RhbCBdID0gY2FsY3VsYXRvckJpbGwodGhpcy5wcm9wcy5ib29raW5nLCB0aGlzLnByb3BzLmF1dGgpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHJldHVybiAgKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPXsgdGhpcy5wcm9wcy5ib29raW5nLmlkICsgXCJqcy1ib29raW5nLWNvbmZpcm1cIiB9IGNsYXNzTmFtZT1cIm1vZGFsIG1vZGFsLWJvb2tpbmdcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+6KaL56mN5pu4PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctZGF0ZXRpbWUtcGlja2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyX19kYXRldGltZS1waWNrZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCB3cmFwcGVyX19kYXRlLXBpY2tlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8tY2FsZW5kYXItY2hlY2stb3V0bGluZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtY29udHJvbFwiPnt3b3JrX2RhdGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCB3cmFwcGVyX190aW1lLXBpY2tlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8tY2xvY2stb3V0bGluZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtY29udHJvbFwiPnsgc3RhcnQgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgd3JhcHBlcl9fdGltZS1waWNrZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLWNsb2NrLWNoZWNrLW91dGxpbmVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWNvbnRyb2xcIj57IGZpbmlzaCB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0aXN0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbi1zdGF0aXN0aWNhbCBzYWxhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+PHNwYW4+5pmC6ZaT5Y2Y5L6hPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmFsdWVcIj57IHNhbGFyeSB977+lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uLXN0YXRpc3RpY2FsIGRpZmZlcmVuY2VUaW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPjxzcGFuPuWIqeeUqOS6iOWumuaZgumWkzwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZhbHVlXCI+eyBkaWZmZXJlbmNlVGltZSB9IOaZgumWkzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb24tc3RhdGlzdGljYWwgcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+PHNwYW4+44K344OD44K/44O8L+WutuS6i+S7o+ihjOaWmemHkTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZhbHVlXCI+eyBwcmljZSB977+lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmF1dGgucm9sZV9pZCA9PSBDT05GSUcuUk9MRV9VU0VSLnNpdHRlciAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGlzdGljYWxcIj4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uLXN0YXRpc3RpY2FsIHN0cmlwZVNlcnZGZWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPjxzcGFuPuaJi+aVsOaWmTwvc3Bhbj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmFsdWVcIj57IHN0cmlwZVNlcnZGZWUgfe+/pTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uLXN0YXRpc3RpY2FsIG5vdGVcIj7igLvml6Llrprjga7miYvmlbDmlpnjgYznmbrnlJ/jgZfjgb7jgZnjgII8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXV0aC5yb2xlX2lkID09IENPTkZJRy5ST0xFX1VTRVIuZW1wbG95ZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRpc3RpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbi1zdGF0aXN0aWNhbCBteVNlcnZGZWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPjxzcGFuPuOCteODvOODk+OCueWIqeeUqOaWmTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZVwiPnsgbXlTZXJ2RmVlIH3vv6U8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbi1zdGF0aXN0aWNhbCBub3RlXCI+4oC744K344OD44K/44O8L+WutuS6i+S7o+ihjOaWmemHkeOBrjIw77yFPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb24tc3RhdGlzdGljYWwgdmF0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRcIj48c3Bhbj7mtojosrvnqI7vvIgxMO+8he+8iTwvc3Bhbj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmFsdWVcIj57IHZhdCB977+lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cC1ib3gtdG90YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJfX3RvdGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPuWQiOioiDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmFsdWUgdGV4dC1jb2xvci13YXJuaW5nLWNvbG9yLWRhcmtcIj57IHRvdGFsIH3vv6U8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYnV0dG9uLXF1ZXN0aW9uXCI+5LiK6KiY5YaF5a6544Gn44GK6ZaT6YGV44GE44GC44KK44G+44Gb44KT44GL77yfPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyLWJ1dHRvbi1zZXR0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4tYm9va2luZyBidG4tdXNlci1jYW5jZWxcIiBvbkNsaWNrPXsgdGhpcy5jYW5jZWxBY2NlcHQgfT7jgq3jg6Pjg7Pjgrvjg6s8L2E+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmF1dGgucm9sZV9pZCA9PSBDT05GSUcuUk9MRV9VU0VSLmVtcGxveWVyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4tYm9va2luZyBidG4tdXNlci1hcHByb3ZlZFwiIG9uQ2xpY2s9eyB0aGlzLmZpbmFsQWNjZXB0IH0+5LqI57SE44GZ44KLPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5sZXQgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGF1dGggICAgICAgICA6IHN0YXRlLnVzZXJzLFxyXG4gICAgICAgIGNvbnZlcnRhdGlvbnM6IHN0YXRlLnVzZXJDaGF0XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEJvb2tpbmdNb2RhbENvbmZpcm0pXHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vLi4vY29uZmlnXCJcclxuaW1wb3J0IHsgY2hhbmdlQm9va2luZyB9IGZyb20gXCIuLi8uLi9hY3Rpb25cIlxyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgZGF0ZXBpY2tlckZhY3RvcnkgZnJvbSAnanF1ZXJ5LWRhdGVwaWNrZXInXHJcbmltcG9ydCBkYXRlcGlja2VySkFGYWN0b3J5IGZyb20gJ2pxdWVyeS1kYXRlcGlja2VyL2kxOG4vanF1ZXJ5LnVpLmRhdGVwaWNrZXItamEnXHJcbmltcG9ydCAndGltZXBpY2tlcic7XHJcbmltcG9ydCB7IHNlbmRCb29raW5nVXBkYXRlLCBjYWxjdWxhdG9yQmlsbCB9IGZyb20gXCIuLi8uLi9saWJyYXJ5L3NlcnZpY2UuanNcIlxyXG4vLyBKdXN0IHBhc3MgeW91ciBqcXVlcnkgaW5zdGFuY2UgYW5kIHlvdSdyZSBkb25lXHJcbmRhdGVwaWNrZXJGYWN0b3J5KCQpO1xyXG5kYXRlcGlja2VySkFGYWN0b3J5KCQpO1xyXG5cclxuY2xhc3MgQm9va2luZ01vZGFsU2V0dGluZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHZhciB7IGJvb2tpbmcgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaWQgICAgICAgICAgICAgOiBib29raW5nLmlkLFxyXG4gICAgICAgICAgICB3b3JrX2RhdGUgICAgICA6IGJvb2tpbmcud29ya19kYXRlLFxyXG4gICAgICAgICAgICBzdGFydCAgICAgICAgICA6IGJvb2tpbmcuc3RhcnQsXHJcbiAgICAgICAgICAgIGZpbmlzaCAgICAgICAgIDogYm9va2luZy5maW5pc2gsXHJcbiAgICAgICAgICAgIHNhbGFyeSAgICAgICAgIDogYm9va2luZy5zYWxhcnksXHJcbiAgICAgICAgICAgIHNpdHRlcl9hY2NlcHQgIDogYm9va2luZy5zaXR0ZXJfYWNjZXB0LFxyXG4gICAgICAgICAgICBlbXBsb3llcl9hY2NlcHQ6IGJvb2tpbmcuZW1wbG95ZXJfYWNjZXB0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuXHJcbiAgICAgICAgdmFyIF9pbnN0YW5jZSAgICAgICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yVGltZVN0YXJ0ICA9ICcjJyArIHRoaXMuc3RhdGUuaWQgKyBcImpzLWJvb2tpbmctc2V0dGluZyAudGltZXBpY2tlclN0YXJ0XCIsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yVGltZUZpbmlzaCA9ICcjJyArIHRoaXMuc3RhdGUuaWQgKyBcImpzLWJvb2tpbmctc2V0dGluZyAudGltZXBpY2tlckZpbmlzaFwiLFxyXG4gICAgICAgICAgICBzZWxlY3RvckRhdGVwaWNrZXIgPSAnIycgKyB0aGlzLnN0YXRlLmlkICsgXCJqcy1ib29raW5nLXNldHRpbmcgLmRhdGVwaWNrZXJcIlxyXG5cclxuICAgICAgICAkKHNlbGVjdG9yVGltZVN0YXJ0KS50aW1lcGlja2VyKHsgJ3RpbWVGb3JtYXQnOiAnSDppJyB9KVxyXG4gICAgICAgICQoc2VsZWN0b3JUaW1lRmluaXNoKS50aW1lcGlja2VyKHsgJ3RpbWVGb3JtYXQnOiAnSDppJyB9KVxyXG5cclxuICAgICAgICAkKHNlbGVjdG9yVGltZVN0YXJ0KS5vbignY2hhbmdlVGltZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgc3RhcnRDaGFuZ2UgPSAkKHRoaXMpLnZhbCgpXHJcbiAgICAgICAgICAgIF9pbnN0YW5jZS5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzdGFydDogc3RhcnRDaGFuZ2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgICQoc2VsZWN0b3JUaW1lRmluaXNoKS5vbignY2hhbmdlVGltZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgZmluaXNoQ2hhbmdlID0gJCh0aGlzKS52YWwoKVxyXG4gICAgICAgICAgICBfaW5zdGFuY2Uuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZmluaXNoOiBmaW5pc2hDaGFuZ2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKHNlbGVjdG9yRGF0ZXBpY2tlcikuZGF0ZXBpY2tlcih7IFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiAneXktbW0tZGQnLFxyXG4gICAgICAgICAgICAvLyBiZWZvcmVTaG93RGF5OiBmdW5jdGlvbihkKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBub3JtYWxpemUgdGhlIGRhdGUgZm9yIHNlYXJjaGluZyBpbiBhcnJheVxyXG4gICAgICAgICAgICAvLyAgICAgdmFyIHJlc3VsdCA9IFwiMjAyMC0wOS0yNiwyMDIwLTA5LTEyLDIwMjAtMDktMDgsMjAyMC0wOS0xMFwiO1xyXG4gICAgICAgICAgICAvLyAgICAgdmFyIGRhdGVsaXN0ID0gcmVzdWx0LnNwbGl0KFwiLFwiKTsgLy8gcG9wdWxhdGUgdGhlIGFycmF5XHJcbiAgICAgICAgICAgIC8vICAgICB2YXIgZGF5ID0gKFwiMDBcIiArIGQuZ2V0RGF0ZSgpKS5zbGljZSgtMiksXHJcbiAgICAgICAgICAgIC8vICAgICBtb250aCA9IChcIjAwXCIgKyAoZC5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKSxcclxuICAgICAgICAgICAgLy8gICAgIHllYXIgPSBkLmdldEZ1bGxZZWFyKCksXHJcbiAgICAgICAgICAgIC8vICAgICBmdWxsRGF0ZSA9IHllYXIgKyBcIi1cIiArIG1vbnRoICsgXCItXCIgKyBkYXlcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybiBbJC5pbkFycmF5KGZ1bGxEYXRlLCBkYXRlbGlzdCkgPj0gMCA/IHRydWUgOiBmYWxzZSwgXCJcIl1cclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBvblNlbGVjdDogZnVuY3Rpb24oZGF0ZVRleHQsIGluc3QpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgX2luc3RhbmNlLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB3b3JrX2RhdGU6IGRhdGVUZXh0XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUoKXtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgeyBib29raW5nIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgaWYoIGJvb2tpbmcudXBkYXRlID09IHRydWUgKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpZCAgICAgICAgICAgICA6IGJvb2tpbmcuaWQsXHJcbiAgICAgICAgICAgICAgICB3b3JrX2RhdGUgICAgICA6IGJvb2tpbmcud29ya19kYXRlLFxyXG4gICAgICAgICAgICAgICAgc3RhcnQgICAgICAgICAgOiBib29raW5nLnN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgZmluaXNoICAgICAgICAgOiBib29raW5nLmZpbmlzaCxcclxuICAgICAgICAgICAgICAgIHNhbGFyeSAgICAgICAgIDogYm9va2luZy5zYWxhcnksXHJcbiAgICAgICAgICAgICAgICBzaXR0ZXJfYWNjZXB0ICA6IGJvb2tpbmcuc2l0dGVyX2FjY2VwdCxcclxuICAgICAgICAgICAgICAgIGVtcGxveWVyX2FjY2VwdDogYm9va2luZy5lbXBsb3llcl9hY2NlcHRcclxuXHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGJvb2tpbmcgPSB7IC4uLiB0aGlzLnByb3BzLmJvb2tpbmcsIHVwZGF0ZTogZmFsc2UgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChjaGFuZ2VCb29raW5nKGJvb2tpbmcpKVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RvclRpbWVTdGFydCAgPSAnIycgKyB0aGlzLnN0YXRlLmlkICsgXCJqcy1ib29raW5nLXNldHRpbmcgLnRpbWVwaWNrZXJTdGFydFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yVGltZUZpbmlzaCA9ICcjJyArIHRoaXMuc3RhdGUuaWQgKyBcImpzLWJvb2tpbmctc2V0dGluZyAudGltZXBpY2tlckZpbmlzaFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yRGF0ZXBpY2tlciA9ICcjJyArIHRoaXMuc3RhdGUuaWQgKyBcImpzLWJvb2tpbmctc2V0dGluZyAuZGF0ZXBpY2tlclwiXHJcbiAgICAgICAgICAgICAgICAkKHNlbGVjdG9yVGltZVN0YXJ0KS52YWwodGhpcy5zdGF0ZS5zdGFydClcclxuICAgICAgICAgICAgICAgICQoc2VsZWN0b3JUaW1lRmluaXNoKS52YWwodGhpcy5zdGF0ZS5maW5pc2gpXHJcbiAgICAgICAgICAgICAgICAkKHNlbGVjdG9yRGF0ZXBpY2tlcikudmFsKHRoaXMuc3RhdGUud29ya19kYXRlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaXR0ZXJBY2NlcHRCaWxsID0gKCkgPT4ge1xyXG4gICAgICAgIHZhciBbIFxyXG4gICAgICAgICAgICB3b3JrX2RhdGUsXHJcbiAgICAgICAgICAgIHN0YXJ0LFxyXG4gICAgICAgICAgICBmaW5pc2gsXHJcbiAgICAgICAgICAgIHNhbGFyeSxcclxuICAgICAgICAgICAgZGlmZmVyZW5jZVRpbWUsXHJcbiAgICAgICAgICAgIHByaWNlLFxyXG4gICAgICAgICAgICB2YXQsXHJcbiAgICAgICAgICAgIG15U2VydkZlZSxcclxuICAgICAgICAgICAgc3RyaXBlU2VydkZlZSxcclxuICAgICAgICAgICAgdG90YWxcclxuICAgICAgICBdID0gY2FsY3VsYXRvckJpbGwodGhpcy5zdGF0ZSwgdGhpcy5wcm9wcy5hdXRoKVxyXG5cclxuICAgICAgICB2YXIgY2hhbm5lbEFjdGl2ZSAgID0gdGhpcy5wcm9wcy5jb252ZXJ0YXRpb25zLmZpbmQoY2hhbm5lbCA9PiBjaGFubmVsLmlzQWN0aXZlKVxyXG4gICAgICAgIC8vLy8gZGlzcGF0Y2ggdGVzdFxyXG4gICAgICAgIHZhciBib29raW5nVXBkYXRlID0ge1xyXG4gICAgICAgICAgICBib29raW5nX2lkICAgICA6IHRoaXMuc3RhdGUuaWQsXHJcbiAgICAgICAgICAgIHNpdHRlcl9hY2NlcHQgIDogMSxcclxuICAgICAgICAgICAgc3RhcnQgICAgICAgICAgOiBzdGFydCxcclxuICAgICAgICAgICAgZmluaXNoICAgICAgICAgOiBmaW5pc2gsXHJcbiAgICAgICAgICAgIHdvcmtfZGF0ZSAgICAgIDogd29ya19kYXRlLFxyXG4gICAgICAgICAgICB0b2tlbkFjY2VzcyAgICA6IHRoaXMucHJvcHMuYXV0aC50b2tlbnMudG9rZW5BY2Nlc3MsXHJcbiAgICAgICAgICAgIHVzZXJJZCAgICAgICAgIDogdGhpcy5wcm9wcy5hdXRoLmlkLFxyXG4gICAgICAgICAgICBjaGFubmVsTmFtZSAgICA6IGNoYW5uZWxBY3RpdmUuY2hhbm5lbE5hbWVcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VuZEJvb2tpbmdVcGRhdGUoYm9va2luZ1VwZGF0ZSlcclxuICAgICAgICAkLm1vZGFsLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgICBlbXBsb3llckFjY2VwdEJpbGwgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIHZhciBbIFxyXG4gICAgICAgICAgICB3b3JrX2RhdGUsXHJcbiAgICAgICAgICAgIHN0YXJ0LFxyXG4gICAgICAgICAgICBmaW5pc2gsXHJcbiAgICAgICAgICAgIHNhbGFyeSxcclxuICAgICAgICAgICAgZGlmZmVyZW5jZVRpbWUsXHJcbiAgICAgICAgICAgIHByaWNlLFxyXG4gICAgICAgICAgICB2YXQsXHJcbiAgICAgICAgICAgIG15U2VydkZlZSxcclxuICAgICAgICAgICAgc3RyaXBlU2VydkZlZSxcclxuICAgICAgICAgICAgdG90YWxcclxuICAgICAgICBdID0gY2FsY3VsYXRvckJpbGwodGhpcy5zdGF0ZSwgdGhpcy5wcm9wcy5hdXRoKVxyXG5cclxuICAgICAgICB2YXIgY2hhbm5lbEFjdGl2ZSA9IHRoaXMucHJvcHMuY29udmVydGF0aW9ucy5maW5kKGNoYW5uZWwgPT4gY2hhbm5lbC5pc0FjdGl2ZSlcclxuICAgICAgICAvLy8vIGRpc3BhdGNoIHRlc3RcclxuICAgICAgICB2YXIgYm9va2luZ1VwZGF0ZSA9IHtcclxuICAgICAgICAgICAgYm9va2luZ19pZCAgICAgOiB0aGlzLnN0YXRlLmlkLFxyXG4gICAgICAgICAgICBlbXBsb3llcl9hY2NlcHQ6IDEsXHJcbiAgICAgICAgICAgIHN0YXJ0ICAgICAgICAgIDogc3RhcnQsXHJcbiAgICAgICAgICAgIGZpbmlzaCAgICAgICAgIDogZmluaXNoLFxyXG4gICAgICAgICAgICB3b3JrX2RhdGUgICAgICA6IHdvcmtfZGF0ZSxcclxuICAgICAgICAgICAgdG9rZW5BY2Nlc3MgICAgOiB0aGlzLnByb3BzLmF1dGgudG9rZW5zLnRva2VuQWNjZXNzLFxyXG4gICAgICAgICAgICB1c2VySWQgICAgICAgICA6IHRoaXMucHJvcHMuYXV0aC5pZCxcclxuICAgICAgICAgICAgY2hhbm5lbE5hbWUgICAgOiBjaGFubmVsQWN0aXZlLmNoYW5uZWxOYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbmRCb29raW5nVXBkYXRlKGJvb2tpbmdVcGRhdGUpXHJcbiAgICAgICAgJC5tb2RhbC5jbG9zZSgpO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICB2YXIgWyBcclxuICAgICAgICAgICAgd29ya19kYXRlLFxyXG4gICAgICAgICAgICBzdGFydCxcclxuICAgICAgICAgICAgZmluaXNoLFxyXG4gICAgICAgICAgICBzYWxhcnksXHJcbiAgICAgICAgICAgIGRpZmZlcmVuY2VUaW1lLFxyXG4gICAgICAgICAgICBwcmljZSxcclxuICAgICAgICAgICAgdmF0LFxyXG4gICAgICAgICAgICBteVNlcnZGZWUsXHJcbiAgICAgICAgICAgIHN0cmlwZVNlcnZGZWUsXHJcbiAgICAgICAgICAgIHRvdGFsXHJcbiAgICAgICAgXSA9IGNhbGN1bGF0b3JCaWxsKHRoaXMuc3RhdGUsIHRoaXMucHJvcHMuYXV0aClcclxuICAgICAgICBcclxuICAgICAgICB2YXIgYm9va2luZ1Byb3BzID0gdGhpcy5wcm9wcy5ib29raW5nXHJcbiAgICAgICAgdmFyIGlzRWRpdCA9IGJvb2tpbmdQcm9wcy5zdGFydCAhPSBzdGFydCB8fCBib29raW5nUHJvcHMuZmluaXNoICE9IGZpbmlzaCB8fCBib29raW5nUHJvcHMud29ya19kYXRlICE9IHdvcmtfZGF0ZVxyXG4gICAgICAgIHZhciBjbGFzc0J0blNpdHRlcixcclxuICAgICAgICAgICAgdGV4dEJ0blNpdHRlcixcclxuICAgICAgICAgICAgY2xpY2tCdG5TaXR0ZXIsXHJcbiAgICAgICAgICAgIGNsYXNzQnRuRW1wbG95ZXIsXHJcbiAgICAgICAgICAgIHRleHRCdG5FbXBsb3llcixcclxuICAgICAgICAgICAgY2xpY2tCdG5FbXBsb3llclxyXG5cclxuICAgICAgICBpZih0aGlzLnByb3BzLmF1dGgucm9sZV9pZCA9PSBDT05GSUcuUk9MRV9VU0VSLnNpdHRlcil7XHJcblxyXG4gICAgICAgICAgICBjbGFzc0J0blNpdHRlciAgID0gXCJidG4tYm9va2luZyBidG4tc2l0dGVyLWFjY2VwdFwiLFxyXG4gICAgICAgICAgICB0ZXh0QnRuU2l0dGVyICAgID0gXCLjgrfjg4Pjgr/jg7zmib/oqo1cIixcclxuICAgICAgICAgICAgY2xpY2tCdG5TaXR0ZXIgICA9IHRoaXMuc2l0dGVyQWNjZXB0QmlsbCxcclxuXHJcbiAgICAgICAgICAgIGNsYXNzQnRuRW1wbG95ZXIgPSBcImJ0bi1ib29raW5nIGJ0bi1lbXBsb3llci1hY2NlcHQgZGlzYWJsZWRcIixcclxuICAgICAgICAgICAgLy8vIEVtcGxveWVyIGNoxrBhIGNo4bqlcCBuaOG6rW4gOiDliKnnlKjogIXmnKrmib/oqo1cclxuICAgICAgICAgICAgLy8vIEVtcGxveWVyIMSRw6MgxJHDoyBjaOG6pXAgbmjhuq1uOiDliKnnlKjogIXmib/oqo3jgZfjgZ9cclxuICAgICAgICAgICAgdGV4dEJ0bkVtcGxveWVyICA9IHRoaXMuc3RhdGUuZW1wbG95ZXJfYWNjZXB0ID8gXCLliKnnlKjogIXmib/oqo3jgZfjgZ9cIiA6IFwi5Yip55So6ICF5pyq5om/6KqNXCIsXHJcbiAgICAgICAgICAgIGNsaWNrQnRuRW1wbG95ZXIgPSBudWxsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLnNpdHRlcl9hY2NlcHQgJiYgIWlzRWRpdCl7XHJcbiAgICAgICAgICAgICAgICBjbGFzc0J0blNpdHRlciArPSAnIGRpc2FibGVkJ1xyXG4gICAgICAgICAgICAgICAgdGV4dEJ0blNpdHRlciA9IFwi5Yip55So6ICF5om/6KqN44GX44GfXCJcclxuICAgICAgICAgICAgICAgIGNsaWNrQnRuU2l0dGVyICAgPSBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuYXV0aC5yb2xlX2lkID09IENPTkZJRy5ST0xFX1VTRVIuZW1wbG95ZXIpe1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNsYXNzQnRuRW1wbG95ZXIgICA9IFwiYnRuLWJvb2tpbmcgYnRuLWVtcGxveWVyLWFjY2VwdFwiLFxyXG4gICAgICAgICAgICB0ZXh0QnRuRW1wbG95ZXIgICAgPSBcIuWIqeeUqOiAheaJv+iqjVwiLFxyXG4gICAgICAgICAgICBjbGlja0J0bkVtcGxveWVyICAgPSB0aGlzLmVtcGxveWVyQWNjZXB0QmlsbCxcclxuXHJcbiAgICAgICAgICAgIGNsYXNzQnRuU2l0dGVyID0gXCJidG4tYm9va2luZyBidG4tc2l0dGVyLWFjY2VwdCBkaXNhYmxlZFwiLFxyXG4gICAgICAgICAgICAvLy8gc2l0dGVyIGNoxrBhIGNo4bqlcCBuaOG6rW4gOiDjgrfjg4Pjgr/jg7zmnKrmib/oqo1cclxuICAgICAgICAgICAgLy8vIHNpdHRlciDEkcOjIMSRw6MgY2jhuqVwIG5o4bqtbjog44K344OD44K/44O85om/6KqN44GX44GfXHJcbiAgICAgICAgICAgIHRleHRCdG5TaXR0ZXIgID0gdGhpcy5zdGF0ZS5zaXR0ZXJfYWNjZXB0ID8gXCLjgrfjg4Pjgr/jg7zmib/oqo3jgZfjgZ9cIiA6IFwi44K344OD44K/44O85pyq5om/6KqNXCIsXHJcbiAgICAgICAgICAgIGNsaWNrQnRuU2l0dGVyID0gbnVsbFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5lbXBsb3llcl9hY2NlcHQgJiYgIWlzRWRpdCl7XHJcbiAgICAgICAgICAgICAgICBjbGFzc0J0bkVtcGxveWVyICs9ICcgZGlzYWJsZWQnXHJcbiAgICAgICAgICAgICAgICB0ZXh0QnRuRW1wbG95ZXIgPSBcIuOCt+ODg+OCv+ODvOaJv+iqjeOBl+OBn1wiXHJcbiAgICAgICAgICAgICAgICBjbGlja0J0bkVtcGxveWVyICAgPSBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcblxyXG5cclxuICAgICAgICByZXR1cm4gIChcclxuICAgICAgICAgICAgPGRpdiBpZD17IHRoaXMuc3RhdGUuaWQgKyBcImpzLWJvb2tpbmctc2V0dGluZ1wiIH0gY2xhc3NOYW1lPVwibW9kYWwgbW9kYWwtYm9va2luZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPuaXpeaZguiqv+aVtDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLWRhdGV0aW1lLXBpY2tlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlcl9fZGF0ZXRpbWUtcGlja2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgd3JhcHBlcl9fZGF0ZS1waWNrZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLWNhbGVuZGFyLWNoZWNrLW91dGxpbmVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZGF0ZXBpY2tlciBpbnB1dC1jb250cm9sXCIgdHlwZT1cInRleHRcIiBhdXRvQ29tcGxldGU9XCJmYWxzZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXsgd29ya19kYXRlIH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCB3cmFwcGVyX190aW1lLXBpY2tlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8tY2xvY2stb3V0bGluZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ0aW1lcGlja2VyU3RhcnQgaW5wdXQtY29udHJvbFwiIGF1dG9Db21wbGV0ZT1cImZhbHNlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXsgc3RhcnQgfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIHdyYXBwZXJfX3RpbWUtcGlja2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJoZXJvLWljb24gaGVyby1jbG9jay1jaGVjay1vdXRsaW5lXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInRpbWVwaWNrZXJGaW5pc2ggaW5wdXQtY29udHJvbFwiIGF1dG9Db21wbGV0ZT1cImZhbHNlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9eyBmaW5pc2ggfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRpc3RpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uLXN0YXRpc3RpY2FsIHNhbGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRcIj48c3Bhbj7mmYLplpPljZjkvqE8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZVwiPnsgc2FsYXJ5IH3vv6U8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb24tc3RhdGlzdGljYWwgZGlmZmVyZW5jZVRpbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+PHNwYW4+5Yip55So5LqI5a6a5pmC6ZaTPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmFsdWVcIj57IGRpZmZlcmVuY2VUaW1lIH0g5pmC6ZaTPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbi1zdGF0aXN0aWNhbCBwcmljZS13aXRoLXRpbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+PHNwYW4+44K344OD44K/44O8L+WutuS6i+S7o+ihjOaWmemHkTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZhbHVlXCI+eyBwcmljZSB977+lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmF1dGgucm9sZV9pZCA9PSBDT05GSUcuUk9MRV9VU0VSLnNpdHRlciAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGlzdGljYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uLXN0YXRpc3RpY2FsIHN0cmlwZVNlcnZGZWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPjxzcGFuPuaJi+aVsOaWmTwvc3Bhbj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmFsdWVcIj57IHN0cmlwZVNlcnZGZWUgfe+/pTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uLXN0YXRpc3RpY2FsIG5vdGVcIj7igLvml6Llrprjga7miYvmlbDmlpnjgYznmbrnlJ/jgZfjgb7jgZnjgII8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXV0aC5yb2xlX2lkID09IENPTkZJRy5ST0xFX1VTRVIuZW1wbG95ZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRpc3RpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbi1zdGF0aXN0aWNhbCBteVNlcnZGZWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPjxzcGFuPuOCteODvOODk+OCueWIqeeUqOaWmTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZVwiPnsgbXlTZXJ2RmVlIH3vv6U8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbi1zdGF0aXN0aWNhbCBub3RlXCI+4oC744K344OD44K/44O8L+WutuS6i+S7o+ihjOaWmemHkeOBrjIw77yFPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb24tc3RhdGlzdGljYWwgdmF0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRcIj48c3Bhbj7mtojosrvnqI7vvIgxMO+8he+8iTwvc3Bhbj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmFsdWVcIj57IHZhdCB977+lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cC1ib3gtdG90YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJfX3RvdGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPuWQiOioiDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmFsdWUgdGV4dC1jb2xvci13YXJuaW5nLWNvbG9yLWRhcmtcIj57IHRvdGFsIH3vv6U8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYnV0dG9uLXF1ZXN0aW9uXCI+5LiK6KiY5YaF5a6544Gn44GK6ZaT6YGV44GE44GC44KK44G+44Gb44KT44GL77yfPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyLWJ1dHRvbi1zZXR0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17IGNsYXNzQnRuU2l0dGVyIH0gb25DbGljaz0geyBjbGlja0J0blNpdHRlciB9PiB7IHRleHRCdG5TaXR0ZXIgfSA8L2E+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17IGNsYXNzQnRuRW1wbG95ZXIgfSBvbkNsaWNrPSB7IGNsaWNrQnRuRW1wbG95ZXIgfT4geyB0ZXh0QnRuRW1wbG95ZXIgfSA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhdXRoICAgICAgICAgOiBzdGF0ZS51c2VycyxcclxuICAgICAgICBjb252ZXJ0YXRpb25zOiBzdGF0ZS51c2VyQ2hhdFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShCb29raW5nTW9kYWxTZXR0aW5nKSIsIlxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2tpbmdOb25lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAgKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwianMtYm9va2luZy1ub25lXCIgY2xhc3NOYW1lPVwibW9kYWwgbW9kYWwtYm9va2luZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJ1dHRvbi1xdWVzdGlvblwiPuOBk+OBruODpuODvOOCtuODvOOBq+OBr+OAgeOBvuOBoOOCueOCseOCuOODpeODvOODq+OBjOioreWumuOBleOCjOOBpuOBhOOBvuOBm+OCkzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cC1ib3gtdG90YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXItYnV0dG9uLXNldHRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuLWJvb2tpbmcgYnRuLXVzZXItY2FuY2VsXCIgaHJlZj1cIiNcIiByZWw9XCJtb2RhbDpjbG9zZVwiPuOCreODo+ODs+OCu+ODqzwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiXHJcbmltcG9ydCBcImpxdWVyeS1tb2RhbFwiXHJcblxyXG5cclxuY2xhc3MgQnRuQm9va2luZ01vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICB9XHJcblxyXG4gICAgY2hvb3NlT3JkZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIHZhciB7IGJvb2tpbmdzLCB1c2VyQ2hhdCB9ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgICAgICBpZighYm9va2luZ3MuZmV0Y2gpe1xyXG4gICAgICAgICAgICAkKFwiI2pzLWJvb2tpbmctbG9hZGluZ1wiKS5tb2RhbCh7XHJcbiAgICAgICAgICAgICAgICBlc2NhcGVDbG9zZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjbGlja0Nsb3NlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNob3dDbG9zZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgY2hhbm5lbEFjdGl2ZUNoYXQgPSB1c2VyQ2hhdC5maW5kKGNoYW5uZWwgPT4gY2hhbm5lbC5pc0FjdGl2ZSlcclxuICAgICAgICB2YXIgdXNlckFjdGl2ZSA9IGNoYW5uZWxBY3RpdmVDaGF0LnVzZXJcclxuICAgICAgICB2YXIgYm9va2luZyA9IGJvb2tpbmdzLmRhdGEuZmluZChib29raW5nID0+IGJvb2tpbmcuZW1wbG95ZXJfaWQgPT0gdXNlckFjdGl2ZS5pZCB8fCBib29raW5nLnNpdHRlcl9pZCA9PSB1c2VyQWN0aXZlLmlkKVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBcclxuICAgICAgICBpZiggIWJvb2tpbmcgKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICQoXCIjanMtYm9va2luZy1ub25lXCIpLm1vZGFsKHtcclxuICAgICAgICAgICAgICAgIGVzY2FwZUNsb3NlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNsaWNrQ2xvc2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2hvd0Nsb3NlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB2YXIgeyBzdGF0dXMsIHNpdHRlcl9hY2NlcHQsIGVtcGxveWVyX2FjY2VwdCB9ID0gYm9va2luZ1xyXG4gICAgICAgIGlmKCBzaXR0ZXJfYWNjZXB0ICYmIGVtcGxveWVyX2FjY2VwdCAmJiAhc3RhdHVzICl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAkKFwiI1wiICsgYm9va2luZy5pZCArIFwianMtYm9va2luZy1jb25maXJtXCIpLm1vZGFsKHtcclxuICAgICAgICAgICAgICAgIGVzY2FwZUNsb3NlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNsaWNrQ2xvc2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2hvd0Nsb3NlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2UgaWYoICFzaXR0ZXJfYWNjZXB0IHx8ICFlbXBsb3llcl9hY2NlcHQgKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICQoXCIjXCIgKyBib29raW5nLmlkICsgXCJqcy1ib29raW5nLXNldHRpbmdcIikubW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgZXNjYXBlQ2xvc2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2xpY2tDbG9zZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2xvc2U6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmKCAgc2l0dGVyX2FjY2VwdCAmJiBlbXBsb3llcl9hY2NlcHQgJiYgc3RhdHVzICl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidsOgbyBmaW5pc2ggcuG7k2lcIilcclxuICAgICAgICAgICAgJChcIiNcIiArIGJvb2tpbmcuaWQgK1wianMtYm9va2luZy1maW5pc2hcIikubW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgZXNjYXBlQ2xvc2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2xpY2tDbG9zZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2xvc2U6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLWNhbGVuZGFyLW1vbnRoIGNhbGVuZGFyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLmNob29zZU9yZGVyIH1cclxuICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXV0aCAgICA6IHN0YXRlLnVzZXJzLFxyXG4gICAgICAgIGJvb2tpbmdzOiBzdGF0ZS5ib29raW5nLFxyXG4gICAgICAgIHVzZXJDaGF0OiBzdGF0ZS51c2VyQ2hhdCxcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQnRuQm9va2luZ01vZGFsKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBcIi4uLy4uL3Njc3MvY2hhdC9lbW9qaS5zY3NzXCJcclxuXHJcbmNsYXNzIEVtb2ppIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBhZGRJY29uSW5wdXRDaGF0ID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaW5wdXQtY2hhdFwiKVxyXG4gICAgICAgIGlmIChpbnB1dCkge1xyXG4gICAgICAgICAgICB2YXIgY29udGVudCA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICAvLy8gYWRkIGljb24gXHJcbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50ICsgdGhpcy5wcm9wcy5zeW1ib2xcclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBjb250ZW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiY29tcG9uZW50LWVtb2ppXCIgb25DbGljaz17dGhpcy5hZGRJY29uSW5wdXRDaGF0fT57dGhpcy5wcm9wcy5zeW1ib2x9PC9pPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRW1vamk7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IFwiLi4vLi4vc2Nzcy9jaGF0L2hlYWQtaW5mby5zY3NzXCJcclxuaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vLi4vY29uZmlnXCJcclxuY2xhc3MgSGVhZEluZm8gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuXHRjb21wb25lbnREaWRVcGRhdGUoKXtcclxuXHRcdC8vLy9zZXQgaGVpZ2h0IGNvbXBvbmVudFxyXG4gICAgICAgIHZhciBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbXBvbmVudC1zaWRlYmFyLWNoYXRcIilcclxuICAgICAgICBpZihzaWRlYmFyLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIHZhciBtZXNzYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb21wb25lbnQtbGlzdC1tZXNzYWdlXCIpXHJcbiAgICAgICAgICAgIGlmKG1lc3NhZ2VzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBzaWRlYmFyWzBdLnN0eWxlLmhlaWdodCA9IG1lc3NhZ2VzWzBdLmNsaWVudEhlaWdodCArIFwicHhcIjsgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHRcclxuXHRyZW5kZXIoKSB7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCJyZW5kZXIgaGVhZCBjaGF0XCIpXHJcblx0XHR2YXIgeyBjaGFubmVscyB9ID0gdGhpcy5wcm9wc1xyXG5cdFx0dmFyIGNoYW5uZWxBY3RpdmUgPSBjaGFubmVscy5maW5kKGNoYW5uZWwgPT4gY2hhbm5lbC5pc0FjdGl2ZSlcclxuXHJcblx0XHRpZiAoIWNoYW5uZWxBY3RpdmUpIHtcclxuXHRcdFx0cmV0dXJuIG51bGxcclxuXHRcdH1cclxuXHRcdHZhciB0ZXh0T25saW5lID0gIGNoYW5uZWxBY3RpdmUudXNlci5vbmxpbmUgPyBcIuOCquODs+ODqeOCpOODs1wiIDogXCLjgqrjg5Xjg6njgqTjg7NcIlxyXG5cdFx0dmFyIGhyZWZVc2VyID0gbnVsbFxyXG5cdFx0aWYoIHR5cGVvZiBST1VURV9WSUVXX1NJVFRFUiAhPSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgUk9VVEVfVklFV19FTVBMT1lFUiAhPSAndW5kZWZpbmVkJyApe1xyXG5cdFx0XHRpZiggY2hhbm5lbEFjdGl2ZS51c2VyLnJvbGVfaWQgPT0gQ09ORklHLlJPTEVfVVNFUi5zaXR0ZXIgKXtcclxuXHRcdFx0XHRocmVmVXNlciA9IFJPVVRFX1ZJRVdfU0lUVEVSICsgXCIvXCIgKyBjaGFubmVsQWN0aXZlLnVzZXIuaWRcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiggY2hhbm5lbEFjdGl2ZS51c2VyLnJvbGVfaWQgPT0gQ09ORklHLlJPTEVfVVNFUi5lbXBsb3llciApe1xyXG5cdFx0XHRcdGhyZWZVc2VyID0gUk9VVEVfVklFV19FTVBMT1lFUiArIFwiL1wiICsgY2hhbm5lbEFjdGl2ZS51c2VyLmlkXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1oZWFkLWluZm9cIj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1c2VyLWFjdGl2ZS1jaGF0XCI+XHJcblx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzTmFtZT1cInN0YXRlLWF2YXRhciBhY3RpdmUtb25saW5lXCI+XHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRocmVmVXNlciA/IFxyXG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2hyZWZVc2VyfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtDT05GSUcuU0VSVkVSX1BIUC5VUkwgKyBjaGFubmVsQWN0aXZlLnVzZXIuYXZhdGFyfSBhbHQ9XCJcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQ6IFxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtDT05GSUcuU0VSVkVSX1BIUC5VUkwgKyBjaGFubmVsQWN0aXZlLnVzZXIuYXZhdGFyfSBhbHQ9XCJcIiAvPlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PC9maWd1cmU+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtaW5mb1wiPlxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0aHJlZlVzZXIgPyBcclxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPXtocmVmVXNlcn0gY2xhc3NOYW1lPVwibmFtZVwiPntjaGFubmVsQWN0aXZlLnVzZXIuZmlyc3RfbmFtZSArIFwiIFwiICtjaGFubmVsQWN0aXZlLnVzZXIubGFzdF9uYW1lfTwvYT5cclxuXHRcdFx0XHRcdFx0XHQ6IFxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj57Y2hhbm5lbEFjdGl2ZS51c2VyLmZpcnN0X25hbWUgKyBcIiBcIiArY2hhbm5lbEFjdGl2ZS51c2VyLmxhc3RfbmFtZX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17KGNoYW5uZWxBY3RpdmUudXNlci5vbmxpbmUgPyBcImFjdGl2ZS1ub3dcIiA6ICcnKSArIFwiIHRpbWUtb25saW5lXCJ9Pnt0ZXh0T25saW5lfTwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0Y2hhbm5lbHM6IHN0YXRlLnVzZXJDaGF0LFxyXG5cdFx0dXNlcnMgICA6IHN0YXRlLnVzZXJzLFxyXG5cdFx0dXNlciAgICA6IHN0YXRlLnVzZXJzLFxyXG5cdFx0Y2xpZW50ICA6IHN0YXRlLmNsaWVudFxyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSGVhZEluZm8pOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGlzdEVtb2ppIGZyb20gXCIuL0xpc3RFbW9qaS5qc3hcIjtcclxuaW1wb3J0IE1lc3NhZ2VDaGF0VHlwaW5nIGZyb20gXCIuL01lc3NhZ2VDaGF0VHlwaW5nLmpzeFwiXHJcbmltcG9ydCBCb29raW5nIGZyb20gXCIuL0Jvb2tpbmcuanN4XCJcclxuaW1wb3J0IEJ0bkJvb2tpbmdNb2RhbCBmcm9tIFwiLi9CdG5Cb29raW5nTW9kYWwuanN4XCJcclxuaW1wb3J0IFwiLi4vLi4vc2Nzcy9jaGF0L2lucHV0LXNlbmQtY2hhdC5zY3NzXCI7XHJcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uL2NvbmZpZy9pbmRleC5qc1wiXHJcbmltcG9ydCB7IHNlbmRNZXNzYWdlVG9DaGFubmVsLCBzYXZlQmxvYlRvU2VydmVyLCBzZW5kVHlwaW5nTWVzc2FnZVRvQ2hhbm5lbCwgXHJcbiAgICBsaXN0ZW5SZWFkTWVzc2FnZU5ld1VzZXIgXHJcbn0gXHJcbmZyb20gXCIuLi8uLi9saWJyYXJ5L3NlcnZpY2UuanNcIlxyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCJcclxuXHJcblxyXG5jbGFzcyBJbnB1dFNlbmRDaGF0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0geyBzZW5kQ2hhdDogZmFsc2UgfVxyXG4gICAgICAgIHRoaXMuc3VibWl0TWVzc2FnZUNoYXQgPSB0aGlzLnN1Ym1pdE1lc3NhZ2VDaGF0LmJpbmQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB2YXIgc3VwID0gdGhpcztcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgXCJwYXN0ZVwiLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSB0aGUgZXZlbnRcclxuICAgICAgICAgICAgICAgIHN1cC5yZXRyaWV2ZUltYWdlRnJvbUNsaXBib2FyZEFzQmxvYihldmVudClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICApO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpe1xyXG5cclxuICAgICAgICB2YXIgeyB1c2VyQ2hhdCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHZhciBjaGFubmVsQWN0aXZlQ2hhdCA9IHVzZXJDaGF0LmZpbmQoY2hhbm5lbCA9PiBjaGFubmVsLmlzQWN0aXZlKVxyXG5cclxuICAgICAgICB2YXIgbWVzc2FnZXMgPSBjaGFubmVsQWN0aXZlQ2hhdCAmJiBjaGFubmVsQWN0aXZlQ2hhdC5tZXNzYWdlXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInxpbnB1dCBzZW5kIGNoYXQgY29tcG9uZW50RGlkVXBkYXRlXCIpXHJcblxyXG4gICAgICAgIHZhciBkb21TY3JvbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLXNjcm9sbC10by1ib3R0b21cIilcclxuICAgICAgICB2YXIgZG9tV3JpdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pcy13cml0ZS1tZXNzYWdlXCIpXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkb21TY3JvbGwuc2Nyb2xsSGVpZ2h0LCBkb21TY3JvbGwuY2xpZW50SGVpZ2h0ICsgXCJsaXN0ZW5SZWFkTWVzc2FnZU5ld1VzZXJcIilcclxuICAgICAgICBpZiggZG9tV3JpdGVyICYmIGRvbVNjcm9sbCAmJiBkb21TY3JvbGwuc2Nyb2xsSGVpZ2h0ID09IGRvbVNjcm9sbC5jbGllbnRIZWlnaHQpe1xyXG4gICAgICAgICAgICBsaXN0ZW5SZWFkTWVzc2FnZU5ld1VzZXIobWVzc2FnZXMsIGNoYW5uZWxBY3RpdmVDaGF0KVxyXG4gICAgICAgIH1lbHNlIGlmKFxyXG4gICAgICAgICAgICBkb21TY3JvbGwgJiYgXHJcbiAgICAgICAgICAgIGRvbVdyaXRlciAmJiBcclxuICAgICAgICAgICAgZG9tV3JpdGVyLmNsYXNzTGlzdC5jb250YWlucygnZm9sbG93LWNvbnZlcnNhdGlvbicpKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXNjcm9sbC10by1ib3R0b20nKS5zY3JvbGxUb3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtc2Nyb2xsLXRvLWJvdHRvbScpLnNjcm9sbEhlaWdodFxyXG4gICAgICAgICAgICAgICAgaWYoICQoXCIjanMtc2Nyb2xsLXRvLWJvdHRvbSBpbWdcIikubGVuZ3RoICl7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNqcy1zY3JvbGwtdG8tYm90dG9tIGltZ1wiKS5vbmUoXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXNjcm9sbC10by1ib3R0b20nKSl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXNjcm9sbC10by1ib3R0b20nKS5zY3JvbGxUb3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtc2Nyb2xsLXRvLWJvdHRvbScpLnNjcm9sbEhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3VibWl0TWVzc2FnZUNoYXQgPSBmdW5jdGlvbiAobWVzc2FnZSwgc3R5bGUsIGF0dGFjaG1lbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh7IG1lc3NhZ2UsIHN0eWxlLCBhdHRhY2htZW50IH0pXHJcbiAgICAgICAgaWYgKCFtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIGlmIChzdHlsZSA9PSBcIklNQUdFXCIpIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBzdHlsZVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzdHlsZSkge1xyXG4gICAgICAgICAgICB2YXIgZW1vamlDaGF0ID0gY29uZmlnLkVNT0pJUy5maWx0ZXIoZW1vamkgPT4gZW1vamkuc3ltYm9sID09IG1lc3NhZ2UudHJpbSgpKVxyXG4gICAgICAgICAgICBpZiAoZW1vamlDaGF0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgc3R5bGUgPSBcIkVNT0pJXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy51c2VyKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLy8gbMOgIG7hur91IHRva2VuIGjhur90IGjhuqFuIHRow6wgcGjhuqNpIHJlZmVzaCBcclxuICAgICAgICAgICAgLy8gc2F1IMSRw7MgY2jGsGEgZGlzcGFjdGggbmdheSBtw6Agc2VuZCBjaGF0IMSRw6MuIHLhu5NpIGRpc3BhdGNoIDEgbOG6p25cclxuICAgICAgICAgICAgdmFyIHsgdXNlciB9ID0gdGhpcy5wcm9wcyxcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcyxcclxuICAgICAgICAgICAgICAgIGRhdGFSZWZlc2ggPSBmYWxzZVxyXG4gICAgICAgICAgICB2YXIgZGlmZiA9ICgobmV3IERhdGUpLmdldFRpbWUoKSAtIG5ldyBEYXRlKHVzZXIudG9rZW5zLnBlcmlvZCkuZ2V0VGltZSgpKSAvIDEwMDBcclxuICAgICAgICAgICAgaWYgKGRpZmYgPj0gdXNlci50b2tlbnMuZXhwaXJlKSB7XHJcbiAgICAgICAgICAgICAgICAvLy8gZmV0Y2ggbmV3IHRva2VuXHJcbiAgICAgICAgICAgICAgICBkYXRhUmVmZXNoID0geyB1c2VySWQ6IHVzZXIuaWQsIHJlZmVzaDogdXNlci50b2tlbnMudG9rZW5SZWZlc2gsIGRldGVjdDogdGhpcy5wcm9wcy5jbGllbnQgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBtZXNzYWdlU2VuZFRvQ2hhbm5lbCA9IG1lc3NhZ2VcclxuICAgICAgICAgICAgdmFyIGNoYW5uZWxTZW5kID0gdGhpcy5wcm9wcy51c2VyQ2hhdC5maW5kKGNoYW5uZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoYW5uZWwuaXNBY3RpdmUgPT0gdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB2YXIgY2hhbm5lbElkID0gY2hhbm5lbFNlbmQuaWRcclxuICAgICAgICAgICAgdmFyIHRva2VuQWNjZXNzID0gdXNlci50b2tlbnMudG9rZW5BY2Nlc3NcclxuICAgICAgICAgICAgdmFyIGRldGVjdCA9IHRoaXMucHJvcHMuY2xpZW50XHJcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlVG9DaGFubmVsKG1lc3NhZ2VTZW5kVG9DaGFubmVsLCBzdHlsZSwgYXR0YWNobWVudCwgY2hhbm5lbElkLCBcclxuICAgICAgICAgICAgICAgIHRva2VuQWNjZXNzLCBkZXRlY3QsIGluc3RhbmNlLCBkYXRhUmVmZXNoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZW5kRW1vamlTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBcIiDwn5KdIFwiXHJcbiAgICAgICAgdmFyIHN0eWxlID0gXCJFTU9KSVwiXHJcbiAgICAgICAgdGhpcy5zdWJtaXRNZXNzYWdlQ2hhdChtZXNzYWdlLCBzdHlsZSwgbnVsbClcclxuICAgIH1cclxuICAgIGhhbmRsZVNlbmRNZXNzYWdlU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIHZhciBzdHlsZSA9IFwiXCJcclxuICAgICAgICB2YXIgdXJsQXR0YWNobWVudCA9IFtdXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGltYWdlc0RvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaW1hZ2UtLWJsb2NrXCIpXHJcbiAgICAgICAgdmFyIGltYWdlcyAgICA9IGltYWdlc0RvbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicmVtb3ZlLWltYWdlXCIpXHJcbiAgICAgICAgdmFyIG1lc3NhZ2UgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaW5wdXQtY2hhdFwiKS52YWx1ZVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChpbWFnZXMubGVuZ3RoICYmICFtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UgPSAnSU1BR0UnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghbWVzc2FnZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pbnB1dC1jaGF0XCIpLnZhbHVlID0gJydcclxuXHJcbiAgICAgICAgaWYgKGltYWdlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc3R5bGUgPSBcIklNQUdFXCJcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHVybEF0dGFjaG1lbnQgPSBbXVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleF9pbWFnZV9zZW5kID0gMDsgaW5kZXhfaW1hZ2Vfc2VuZCA8IGltYWdlcy5sZW5ndGg7IGluZGV4X2ltYWdlX3NlbmQrKykge1xyXG4gICAgICAgICAgICAgICAgaWYoIWltYWdlc1tpbmRleF9pbWFnZV9zZW5kXS5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLXNpZ24tdXJsJykpe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybEF0dGFjaG1lbnQucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsIDogaW1hZ2VzW2luZGV4X2ltYWdlX3NlbmRdLmdldEF0dHJpYnV0ZSgnZGF0YS11cmwnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGltYWdlc1tpbmRleF9pbWFnZV9zZW5kXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogKG5ldyBEYXRlKS5nZXRUaW1lKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWltYWdlLS1ibG9ja1wiKS5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgIHRoaXMuc3VibWl0TWVzc2FnZUNoYXQobWVzc2FnZSwgc3R5bGUsIHVybEF0dGFjaG1lbnQpXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VuZE1lc3NhZ2VEb3duID0gKGV2ZW50KSA9PiB7XHJcblxyXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09IDEzICYmICFldmVudC5zaGlmdEtleSkge1xyXG4gICAgICAgICAgICB2YXIgc3R5bGUgPSBcIlwiXHJcbiAgICAgICAgICAgIHZhciB1cmxBdHRhY2htZW50ID0gW11cclxuICAgICAgICAgICAgdmFyIGltYWdlc0RvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaW1hZ2UtLWJsb2NrXCIpXHJcbiAgICAgICAgICAgIHZhciBpbWFnZXMgPSBpbWFnZXNEb20uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInJlbW92ZS1pbWFnZVwiKVxyXG4gICAgICAgICAgICBpZiAoaW1hZ2VzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgc3R5bGUgPSBcIklNQUdFXCJcclxuICAgICAgICAgICAgICAgIHVybEF0dGFjaG1lbnQgPSBbXVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXhfaW1hZ2Vfc2VuZCA9IDA7IGluZGV4X2ltYWdlX3NlbmQgPCBpbWFnZXMubGVuZ3RoOyBpbmRleF9pbWFnZV9zZW5kKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZighaW1hZ2VzW2luZGV4X2ltYWdlX3NlbmRdLmNsYXNzTGlzdC5jb250YWlucygnanMtc2lnbi11cmwnKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybEF0dGFjaG1lbnQucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgOiBpbWFnZXNbaW5kZXhfaW1hZ2Vfc2VuZF0uZ2V0QXR0cmlidXRlKCdkYXRhLXVybCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGltYWdlc1tpbmRleF9pbWFnZV9zZW5kXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IChuZXcgRGF0ZSkuZ2V0VGltZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pbWFnZS0tYmxvY2tcIikuaW5uZXJIVE1MID0gJydcclxuICAgICAgICAgICAgdGhpcy5zdWJtaXRNZXNzYWdlQ2hhdChldmVudC50YXJnZXQudmFsdWUsIHN0eWxlLCB1cmxBdHRhY2htZW50KVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VuZENoYXQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaW5wdXQtY2hhdFwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMzIpIHtcclxuICAgICAgICAgICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pbnB1dC1jaGF0XCIpXHJcbiAgICAgICAgICAgIGlmIChpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIC8vLyBnZXQgd29yZCBsYXN0XHJcbiAgICAgICAgICAgICAgICB2YXIgd29yZHMgPSBjb250ZW50LnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgICAgIHZhciB3b3JkTGFzdGVzdCA9IHdvcmRzW3dvcmRzLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgICAgICAgICAvLy8vIGNoZWNrIGhhdmUgc3lzYm9sIFxyXG4gICAgICAgICAgICAgICAgdmFyIGVtb2ppc0NhbGwgPSBjb25maWcuRU1PSklTLmZpbHRlcihpdGVtID0+IGl0ZW0uc2lnbiA9PSB3b3JkTGFzdGVzdClcclxuICAgICAgICAgICAgICAgIGlmIChlbW9qaXNDYWxsLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vLyBhZGQgaWNvbiBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGFzdEluZGV4ID0gY29udGVudC5sYXN0SW5kZXhPZihcIiBcIilcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIGxhc3RJbmRleCkgKyBcIiBcIiArIGVtb2ppc0NhbGxbMF0uc3ltYm9sXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZVNlbmRNZXNzYWdlVXAgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2VuZENoYXQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbmRDaGF0OiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pbnB1dC1jaGF0XCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW1hZ2VGaWxlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoaW1nTG9hZGluZykge1xyXG4gICAgICAgIC8vIGFkZCBpdCBpbiBlZGl0b3JcclxuICAgICAgICBpbWdMb2FkaW5nLndpZHRoID0gMTAwO1xyXG4gICAgICAgIC8vLyBjcmVhdGUgd3JhcHBlciBpbWdcclxuICAgICAgICB2YXIgd3JhcHBlckltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB3cmFwcGVySW1hZ2UuY2xhc3NOYW1lID0gXCJyZW1vdmUtaW1hZ2UganMtc2lnbi11cmxcIjtcclxuICAgICAgICB3cmFwcGVySW1hZ2Uub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdyYXBwZXJJbWFnZS5hcHBlbmRDaGlsZChpbWdMb2FkaW5nKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWltYWdlLS1ibG9ja1wiKS5hcHBlbmRDaGlsZCh3cmFwcGVySW1hZ2UpO1xyXG4gICAgfVxyXG4gICAgcmV0cmlldmVJbWFnZSA9IGZpbGUgPT4ge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyggZmlsZSApXHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGhpcy5pbWFnZUZpbGVDYWxsYmFja1xyXG4gICAgICAgIC8vIFJldHJpZXZlIGltYWdlIG9uIGNsaXBib2FyZCBhcyBibG9iXHJcbiAgICAgICAgc2F2ZUJsb2JUb1NlcnZlcihmaWxlKVxyXG4gICAgICAgIC8vIENyZWF0ZSBhbiBpbWFnZVxyXG4gICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAvLyBPbmNlIHRoZSBpbWFnZSBsb2FkcywgcmVuZGVyIHRoZSBpbWcgb24gdGhlIGNhbnZhc1xyXG4gICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBkaW1lbnNpb25zIG9mIHRoZSBjYW52YXMgd2l0aCB0aGUgZGltZW5zaW9ucyBvZiB0aGUgaW1hZ2VcclxuICAgICAgICAgICAgY2FsbGJhY2sodGhpcyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBDcm9zc2Jyb3dzZXIgc3VwcG9ydCBmb3IgVVJMXHJcbiAgICAgICAgdmFyIFVSTE9iaiA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTDtcclxuICAgICAgICAvLyBDcmVhdGVzIGEgRE9NU3RyaW5nIGNvbnRhaW5pbmcgYSBVUkwgcmVwcmVzZW50aW5nIHRoZSBvYmplY3QgZ2l2ZW4gaW4gdGhlIHBhcmFtZXRlclxyXG4gICAgICAgIC8vIG5hbWVseSB0aGUgb3JpZ2luYWwgQmxvYlxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGltZy5zcmMgPSBVUkxPYmouY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXRyaWV2ZUZpbGUgPSBmaWxlID0+IHtcclxuXHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGhpcy5pbWFnZUZpbGVDYWxsYmFja1xyXG4gICAgICAgIC8vIFJldHJpZXZlIGltYWdlIG9uIGNsaXBib2FyZCBhcyBibG9iXHJcbiAgICAgICAgc2F2ZUJsb2JUb1NlcnZlcihmaWxlKVxyXG4gICAgICAgIC8vIENyZWF0ZSBhbiBpbWFnZVxyXG4gICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAvLyBPbmNlIHRoZSBpbWFnZSBsb2FkcywgcmVuZGVyIHRoZSBpbWcgb24gdGhlIGNhbnZhc1xyXG4gICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBkaW1lbnNpb25zIG9mIHRoZSBjYW52YXMgd2l0aCB0aGUgZGltZW5zaW9ucyBvZiB0aGUgaW1hZ2VcclxuICAgICAgICAgICAgY2FsbGJhY2sodGhpcyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBDcm9zc2Jyb3dzZXIgc3VwcG9ydCBmb3IgVVJMXHJcbiAgICAgICAgdmFyIFVSTE9iaiA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTDtcclxuICAgICAgICAvLyBDcmVhdGVzIGEgRE9NU3RyaW5nIGNvbnRhaW5pbmcgYSBVUkwgcmVwcmVzZW50aW5nIHRoZSBvYmplY3QgZ2l2ZW4gaW4gdGhlIHBhcmFtZXRlclxyXG4gICAgICAgIC8vIG5hbWVseSB0aGUgb3JpZ2luYWwgQmxvYlxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGltZy5zcmMgPSBjb25maWcuU0VSVkVSX1BIUC5VUkwgKyBcIi9pbWFnZS9mb2xkZXIuanBnXCJcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0cmlldmVJbWFnZUZyb21DbGlwYm9hcmRBc0Jsb2IgPSAocGFzdGVFdmVudCkgPT4ge1xyXG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRoaXMuaW1hZ2VGaWxlQ2FsbGJhY2tcclxuICAgICAgICBpZiAoIXBhc3RlRXZlbnQuY2xpcGJvYXJkRGF0YSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgLy8vIGNhbGwgY2FsYmFjayBmdW5jdGlvbiB1bmRlZmluZVxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaXRlbXMgPSBwYXN0ZUV2ZW50LmNsaXBib2FyZERhdGEuaXRlbXM7XHJcbiAgICAgICAgaWYgKCFpdGVtcykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgLy8vIGNhbGwgY2FsYmFjayBmdW5jdGlvbiB1bmRlZmluZVxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIFNraXAgY29udGVudCBpZiBub3QgaW1hZ2VcclxuICAgICAgICAgICAgaWYgKGl0ZW1zW2ldLnR5cGUuaW5kZXhPZihcImltYWdlXCIpID09IC0xKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIHZhciBmaWxlID0gaXRlbXNbaV0uZ2V0QXNGaWxlKClcclxuICAgICAgICAgICAgdGhpcy5yZXRyaWV2ZUltYWdlKCBmaWxlIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzaG93TGlzdEVtb2ppID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdmFyIGVtb2ppcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtZW1vamlzXCIpO1xyXG4gICAgICAgIGlmIChlbW9qaXMpIHtcclxuICAgICAgICAgICAgZW1vamlzLmNsYXNzTGlzdC5hZGQoXCJzaG93LXRlbXBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGFuZGxlU2VuZENoYXRDbGljayA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgLy8vLyBzZW5kIGNsYXNzIGlzIHdyaXRlIG1lc3NhZ2VcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlzLXdyaXRlLW1lc3NhZ2VcIikuY2xhc3NMaXN0LmFkZChcImZvbGxvdy1jb252ZXJzYXRpb25cIilcclxuXHJcbiAgICAgICAgLy8vc2VuZCB0eXBpbmcgXHJcbiAgICAgICAgdmFyIHsgdXNlciB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHZhciBjaGFubmVsU2VuZCA9IHRoaXMucHJvcHMudXNlckNoYXQuZmluZChjaGFubmVsID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGNoYW5uZWwuaXNBY3RpdmUgPT0gdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdmFyIGNoYW5uZWxJZCA9IGNoYW5uZWxTZW5kLmlkXHJcbiAgICAgICAgdmFyIHRva2VuQWNjZXNzID0gdXNlci50b2tlbnMudG9rZW5BY2Nlc3NcclxuICAgICAgICB2YXIgZGV0ZWN0ID0gdGhpcy5wcm9wcy5jbGllbnRcclxuXHJcbiAgICAgICAgc2VuZFR5cGluZ01lc3NhZ2VUb0NoYW5uZWwoIGNoYW5uZWxJZCwgdG9rZW5BY2Nlc3MsIGRldGVjdCApXHJcbiAgICB9XHJcbiAgICBjaG9vc2VGaWxlID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2UtZmlsZVwiKS5jbGljaygpXHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZUZpbGUgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBmaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZS1maWxlXCIpLmZpbGVzWzBdIFxyXG4gICAgICAgIHZhciBhY2NlcHQgPSAvKFxcLmpwZ3xcXC5qcGVnfFxcLmJtcHxcXC5naWZ8XFwucG5nfFxcLmltYWdlKSQvaVxyXG4gICAgICAgIGlmKGFjY2VwdC5leGVjKGZpbGUubmFtZSkpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5yZXRyaWV2ZUltYWdlKCBmaWxlIClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhY2NlcHQgPSAvKFxcLnhsc3xcXC54bHN4fFxcLmNzdnxcXC5wZGZ8XFwuZG9jfFxcLmRvY3gpJC9pXHJcbiAgICAgICAgaWYoYWNjZXB0LmV4ZWMoZmlsZS5uYW1lKSl7IFxyXG5cclxuICAgICAgICAgICAgdGhpcy5yZXRyaWV2ZUZpbGUoIGZpbGUgKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgYWxlcnQoXCJGaWxlIGV4dGVuc2lvbiBub3Qgc3VwcG9ydGVkIVwiKVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy51c2VyIHx8ICF0aGlzLnByb3BzLnNvY2tldCB8fCAhdGhpcy5wcm9wcy51c2VyQ2hhdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHsgdXNlckNoYXQgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICB2YXIgY2hhbm5lbEFjdGl2ZUNoYXQgPSB1c2VyQ2hhdC5maW5kKGNoYW5uZWwgPT4gY2hhbm5lbC5pc0FjdGl2ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJqcy1pcy13cml0ZS1tZXNzYWdlXCIgY2xhc3NOYW1lPVwiY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCBmb2xsb3ctY29udmVyc2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8TWVzc2FnZUNoYXRUeXBpbmcgdG9Vc2VyPXtjaGFubmVsQWN0aXZlQ2hhdH0gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJqcy1pbWFnZS0tYmxvY2tcIiBjbGFzc05hbWU9XCJpbWFnZS1ibG9ja1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJ0bkJvb2tpbmdNb2RhbCAvPlxyXG4gICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZXJvLWljb24gaGVyby1maWxlLWNsb3VkLW91dGxpbmUgZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IHRoaXMuY2hvb3NlRmlsZSB9XHJcbiAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiaW1hZ2UtZmlsZVwiIHR5cGU9XCJmaWxlXCIgY2xhc3NOYW1lPVwiZC1ub25lXCIgYWNjZXB0PVwiLnhscywueGxzeCwuY3N2LGltYWdlLyosLnBkZiwuZG9jLC5kb2N4XCIgb25DaGFuZ2U9eyB0aGlzLnNhdmVGaWxlIH0gLz5cclxuICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8tc3RpY2tlci1lbW9qaSBlbW90aWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zaG93TGlzdEVtb2ppfVxyXG4gICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwianMtaW5wdXQtY2hhdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZVNlbmRNZXNzYWdlRG93bn1cclxuICAgICAgICAgICAgICAgICAgICBvbktleVVwPXt0aGlzLmhhbmRsZVNlbmRNZXNzYWdlVXB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTZW5kQ2hhdENsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi44Oh44OD44K744O844K444KS5pu444GPLi4uXCJcclxuICAgICAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8tc2VuZC1vdXRsaW5lIHNlbmRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNlbmRNZXNzYWdlU3VibWl0fT48L2k+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJoZXJvLWljb24gaGVyby1oZWFydC1tdWx0aXBsZS1vdXRsaW5lIHJlYWN0XCIgb25DbGljaz17dGhpcy5oYW5kbGVTZW5kRW1vamlTdWJtaXR9PjwvaT5cclxuICAgICAgICAgICAgICAgIDxMaXN0RW1vamkgLz5cclxuICAgICAgICAgICAgICAgIDxCb29raW5nIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VyICAgIDogc3RhdGUudXNlcnMsXHJcbiAgICAgICAgY2xpZW50ICA6IHN0YXRlLmNsaWVudCxcclxuICAgICAgICB1c2VyQ2hhdDogc3RhdGUudXNlckNoYXQsXHJcbiAgICAgICAgc29ja2V0ICA6IHN0YXRlLnNvY2tldFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShJbnB1dFNlbmRDaGF0KTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRW1vamkgZnJvbSBcIi4vRW1vamkuanN4XCI7XHJcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uL2NvbmZpZy9pbmRleC5qc1wiXHJcblxyXG5jbGFzcyBMaXN0RW1vamkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJqcy1lbW9qaXNcIiBjbGFzc05hbWU9XCJjb21wb25lbnQtbGlzdC1lbW9qaVwiPlxyXG4gICAgICAgICAgICAgICAge2NvbmZpZy5FTU9KSVMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEVtb2ppIGtleT17aXRlbS5zaWdufSBzeW1ib2w9e2l0ZW0uc3ltYm9sfSBzaWduPXtpdGVtLnNpZ259IC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBMaXN0RW1vamk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IEhlYWRJbmZvIGZyb20gXCIuL0hlYWRJbmZvLmpzeFwiXHJcbmltcG9ydCBNZXNzYWdlQ2hhdCBmcm9tIFwiLi9NZXNzYWdlQ2hhdC5qc3hcIlxyXG5pbXBvcnQgSW5wdXRTZW5kQ2hhdCBmcm9tIFwiLi9JbnB1dFNlbmRDaGF0LmpzeFwiXHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIlxyXG5pbXBvcnQgXCIuLi8uLi9zY3NzL2NoYXQvbGlzdC1tZXNzYWdlLnNjc3NcIlxyXG5pbXBvcnQgeyBsaXN0ZW5TY3JvbGxNZXNzYWdlIH0gZnJvbSBcIi4uLy4uL2xpYnJhcnkvc2VydmljZS5qc1wiXHJcblxyXG5jbGFzcyBMaXN0TWVzc2FnZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIFxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG5cclxuICAgICAgICB2YXIgeyBjaGFubmVscyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHZhciBjaGFubmVsQWN0aXZlQ2hhdCA9IGNoYW5uZWxzLmZpbmQoY2hhbm5lbCA9PiBjaGFubmVsLmlzQWN0aXZlKVxyXG5cclxuICAgICAgICB2YXIgbWVzc2FnZXMgPSBjaGFubmVsQWN0aXZlQ2hhdCAmJiBjaGFubmVsQWN0aXZlQ2hhdC5tZXNzYWdlXHJcblxyXG4gICAgICAgIHZhciBsc3RNZXNzYWdlICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtc2Nyb2xsLXRvLWJvdHRvbScpXHJcbiAgICAgICAgaWYobHN0TWVzc2FnZSl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAkKCcjanMtc2Nyb2xsLXRvLWJvdHRvbScpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgbGlzdGVuU2Nyb2xsTWVzc2FnZSh0aGlzLCBtZXNzYWdlcywgY2hhbm5lbEFjdGl2ZUNoYXQpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHZhciB7IGNoYW5uZWxzIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgdmFyIGNoYW5uZWxBY3RpdmVDaGF0ID0gY2hhbm5lbHMuZmluZChjaGFubmVsID0+IGNoYW5uZWwuaXNBY3RpdmUpO1xyXG5cclxuICAgICAgICB2YXIgbWVzc2FnZXMgPSBjaGFubmVsQWN0aXZlQ2hhdCAmJiBjaGFubmVsQWN0aXZlQ2hhdC5tZXNzYWdlO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1saXN0LW1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxIZWFkSW5mbyAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyLWxpc3QtbWVzc2FnZVwiIGlkPVwianMtc2Nyb2xsLXRvLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHttZXNzYWdlcyAmJiBtZXNzYWdlcy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChtZXNzYWdlLCBrZXkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZUNoYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1wibWVzc2FnZS1jaGF0XCIgKyBrZXkgKyBjaGFubmVsQWN0aXZlQ2hhdC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXttZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5uZWxBY3RpdmVDaGF0PXtjaGFubmVsQWN0aXZlQ2hhdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPElucHV0U2VuZENoYXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5sZXQgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNoYW5uZWxzOiBzdGF0ZS51c2VyQ2hhdFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShMaXN0TWVzc2FnZSk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgXCIuLi8uLi9zY3NzL2NoYXQvbGlzdC11c2VyLnNjc3NcIlxyXG5pbXBvcnQgVXNlckNoYXQgZnJvbSBcIi4vVXNlckNoYXQuanN4XCJcclxuXHJcbmNsYXNzIExpc3RVc2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgLy8vIHVzZXJDaGF0IMSRxrDhu6NjIHBhc3MgdOG7qyBjaGEgdsOgb1xyXG4gICAgICAgIHZhciB7IGNvbnZlcnNhdGlvbnMgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtbGlzdC11c2VyXCI+XHJcbiAgICAgICAgICAgICAgICB7IGNvbnZlcnNhdGlvbnMgJiYgY29udmVyc2F0aW9ucy5tYXAoY2hhbm5lbCA9PiA8VXNlckNoYXQga2V5PXtjaGFubmVsLmlkfSBjaGFubmVsPXtjaGFubmVsfSAvPikgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0VXNlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCAnLi4vLi4vc2Nzcy9jaGF0L21lc3NhZ2UtY2hhdC5zY3NzJ1xyXG5pbXBvcnQgQ09ORklHIGZyb20gXCIuLi8uLi9jb25maWdcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuXHJcbmNsYXNzIE1lc3NhZ2VDaGF0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIHsgYXV0aCwgbWVzc2FnZSwgY2hhbm5lbEFjdGl2ZUNoYXQgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICAgICAgdmFyIG15aW5mbyA9IHsgYXZhdGFyIDogJycsIG5hbWU6ICcnIH1cclxuICAgICAgICBpZiggYXV0aCAmJiBhdXRoLmlkICl7XHJcbiAgICAgICAgICAgIG15aW5mby5hdmF0YXIgPSBhdXRoLmF2YXRhclxyXG4gICAgICAgICAgICBteWluZm8ubmFtZSAgID0gYXV0aC5maXJzdF9uYW1lICsgXCIgXCIgKyBhdXRoLmxhc3RfbmFtZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjaGFubmVsQWN0aXZlQ2hhdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdXNlckluZm8gPSBjaGFubmVsQWN0aXZlQ2hhdC51c2VyXHJcblxyXG4gICAgICAgIGlmICghbWVzc2FnZS50eXBlKSB7XHJcbiAgICAgICAgICAgIHZhciB0eXBlTWVzc2FnZSA9ICdsZWZ0LW1lc3NhZ2UgJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgdHlwZU1lc3NhZ2UgPSAncmlnaHQtbWVzc2FnZSBieS1tZSAnO1xyXG4gICAgICAgICAgICB1c2VySW5mbyA9IG15aW5mbztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHsgc3R5bGUgfSA9IG1lc3NhZ2VcclxuXHJcbiAgICAgICAgdmFyIFRJTUVfRElFX0ZJTEUgPSAyNCAqIDYwICogNjAgKiAxMDAwXHJcbiAgICAgICAgXHJcblxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1tZXNzYWdlLWNoYXRcIiA+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R5cGVNZXNzYWdlICsgXCJjaGF0LWdyb3VwXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtDT05GSUcuU0VSVkVSX1BIUC5VUkwgKyB1c2VySW5mby5hdmF0YXJ9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgPT0gXCJJTUFHRVwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGV9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuYXR0YWNobWVudC5tYXAoKCBhdHRhY2hFbGVtZW50ICwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBhdHRhY2hFbGVtZW50LnR5cGUgPT0gJ2ltZycgKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGF0dGFjaEVsZW1lbnQudGltZSAmJiBhdHRhY2hFbGVtZW50LnRpbWUgLSBUSU1FX0RJRV9GSUxFIDwgKG5ldyBEYXRlKS5nZXRUaW1lKCkgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtcIndyYXBwZXItYXR0YWNobWVudFwiICsgaW5kZXggKyBhdHRhY2hFbGVtZW50LnVybCB9IGNsYXNzTmFtZT1cIndyYXBwZXItYXR0YWNobWVudFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Q09ORklHLlNFUlZFUl9QSFAuVVJMICsgYXR0YWNoRWxlbWVudC51cmwgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRvd25sb2FkLWZpbGUtYXR0YWNobWVudFwiIGhyZWY9eyBDT05GSUcuU0VSVkVSX1BIUC5VUkwgKyBhdHRhY2hFbGVtZW50LnVybCB9IHRhcmdldD1cIl9ibGFua1wiIGRvd25sb2FkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJoZXJvLWljb24gaGVyby1jbG91ZC1kb3dubG9hZC1vdXRsaW5lXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17XCJ3cmFwcGVyLWF0dGFjaG1lbnRcIiArIGluZGV4ICsgQ09ORklHLlNFUlZFUl9QSFAuVVJMICsgXCIvaW1hZ2UvZm9sZGVyLmpwZ1wiIH0gY2xhc3NOYW1lPVwid3JhcHBlci1hdHRhY2htZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsgQ09ORklHLlNFUlZFUl9QSFAuVVJMICsgXCIvaW1hZ2UvZm9sZGVyLmpwZ1wiIH0gLz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZG93bmxvYWQtZmlsZS1hdHRhY2htZW50XCIgaHJlZj17IENPTkZJRy5TRVJWRVJfUEhQLlVSTCArIGF0dGFjaEVsZW1lbnQudXJsIH0gdGFyZ2V0PVwiX2JsYW5rXCIgZG93bmxvYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJoZXJvLWljb24gaGVyby1jbG91ZC1kb3dubG9hZC1vdXRsaW5lXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlICsgXCIgdGV4dFwifSA+e21lc3NhZ2UuY29udGVudH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFtZXNzYWdlLnR5cGUgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhbWVzc2FnZS5yZWFkID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0naGVyby1pY29uIGhlcm8tY2hlY2stY2lyY2xlLW91dGxpbmUnPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdoZXJvLWljb24gaGVyby1jaGVjay1jaXJjbGUnPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGF1dGggICAgOiBzdGF0ZS51c2Vyc1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShNZXNzYWdlQ2hhdCkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuY2xhc3MgTWVzc2FnZUNoYXRUeXBpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHZhciB7IHRvVXNlciB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGlmICghdG9Vc2VyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjaGFubmVsSW5mb3IgPSB0b1VzZXI7XHJcbiAgICAgICAgdmFyIHVzZXJUeXBpbmcgPSBjaGFubmVsSW5mb3IudXNlclxyXG4gICAgICAgIHZhciB0eXBlTWVzc2FnZSA9ICdmbG9hdC1sZWZ0ICc7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cImpzLXR5cGluZ1wiIGNsYXNzTmFtZT1cImNvbXBvbmVudC1tZXNzYWdlLWNoYXQgdHlwaW5nLWNoYXQtbWVzc3NhZ2VcIiBjaGFubmVsPXt0b1VzZXIuaWR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R5cGVNZXNzYWdlICsgXCJjaGF0LWdyb3VwXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1jb250ZW50IHR5cGluZy1tZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInR5cGluZy10ZXh0XCI+e3VzZXJUeXBpbmcuZmlyc3RfbmFtZSAmJiB1c2VyVHlwaW5nLmxhc3RfbmFtZSArIFwiIOOBjOWFpeWKm+OBl+OBpuOBhOOBvuOBmSBcIn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlkb3RcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aWRvdFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpZG90XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZUNoYXRUeXBpbmc7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbi8vIGltcG9ydCBTZWFyY2hVc2VyIGZyb20gXCIuL1NlYXJjaFVzZXIuanN4XCJcclxuaW1wb3J0IExpc3RVc2VyIGZyb20gXCIuL0xpc3RVc2VyLmpzeFwiXHJcbmltcG9ydCBcIi4uLy4uL3Njc3MvY2hhdC9zaWRlYmFyLnNjc3NcIlxyXG5pbXBvcnQgQ09ORklHIGZyb20gXCIuLi8uLi9jb25maWdcIlxyXG5cclxuY2xhc3MgU2lkZUJhckNoYXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlciBzaWRlYmFyXCIpXHJcbiAgICAgICAgdmFyIGluZm9yID0geyBhdmF0YXI6ICcnLCBuYW1lOiAnJyB9XHJcbiAgICAgICAgdmFyIHsgYXV0aCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGlmIChhdXRoICYmIGF1dGguaWQpIHtcclxuICAgICAgICAgICAgaW5mb3IuYXZhdGFyID0gYXV0aC5hdmF0YXJcclxuICAgICAgICAgICAgaW5mb3IubmFtZSA9IGF1dGguZmlyc3RfbmFtZSArIFwiIFwiICsgYXV0aC5sYXN0X25hbWUgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1zaWRlYmFyLWNoYXRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXlpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJzdGF0ZS1hdmF0YXIgYWN0aXZlLW9ubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eyBDT05GSUcuU0VSVkVSX1BIUC5VUkwgKyBpbmZvci5hdmF0YXIgfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPntpbmZvci5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LXVzZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdFVzZXIgY29udmVyc2F0aW9ucz17dGhpcy5wcm9wcy5jb252ZXJzYXRpb25zfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhdXRoOiBzdGF0ZS51c2VycyxcclxuICAgICAgICBjb252ZXJzYXRpb25zOiBzdGF0ZS51c2VyQ2hhdFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTaWRlQmFyQ2hhdClcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgVFlQRSBmcm9tIFwiLi4vLi4vYWN0aW9uL3R5cGUuanNcIlxyXG5pbXBvcnQgQ09ORklHIGZyb20gXCIuLi8uLi9jb25maWdcIlxyXG5jbGFzcyBVc2VyQ2hhdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY2hhbmdlQWN0aXZlVXNlciA9ICggZSAsIGlkKSA9PiB7XHJcblxyXG4gICAgICAgIGUucHJvcHMuZGlzcGF0Y2goeyB0eXBlOiBUWVBFLkNIQVQuQ0hBTkdFX1VTRVJfQ0hBVF9ERUZBVUxULCBwYXlsb2FkOiBpZCB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB2YXIgeyBjaGFubmVsIH0gICAgICAgID0gdGhpcy5wcm9wcyxcclxuICAgICAgICAgICAgY2xhc3NBY3RpdmVPbmxpbmUgID0gY2hhbm5lbC51c2VyLm9ubGluZSA/ICcgYWN0aXZlICcgOiAnJyxcclxuICAgICAgICAgICAgY2xhc3NBY3RpdmVNZXNzYWdlID0gY2hhbm5lbC5pc0FjdGl2ZSA/ICcgYWN0aXZlLW1lc3NhZ2UgJyA6ICcnXHJcblxyXG4gICAgICAgIHZhciBbbGFzdEl0ZW1dID0gY2hhbm5lbC5tZXNzYWdlLnNsaWNlKC0xKVxyXG5cclxuICAgICAgICB2YXIgbXVuYmVyTm9uZVJlYWQgPSBjaGFubmVsLm1lc3NhZ2UuZmlsdGVyKG1lc3NhZ2UgPT4gIW1lc3NhZ2UucmVhZCAmJiAhbWVzc2FnZS50eXBlICkubGVuZ3RoXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyXCIgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzQWN0aXZlT25saW5lICsgY2xhc3NBY3RpdmVNZXNzYWdlICsgXCJ1c2VyLWNoYXRcIn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmNoYW5nZUFjdGl2ZVVzZXIodGhpcywgY2hhbm5lbC5pZCl9ID5cclxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cInN0YXRlLWF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Q09ORklHLlNFUlZFUl9QSFAuVVJMICsgY2hhbm5lbC51c2VyLmF2YXRhcn0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+e2NoYW5uZWwudXNlci5maXJzdF9uYW1lICsgXCIgXCIgKyBjaGFubmVsLnVzZXIubGFzdF9uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYXN0SXRlbSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFzdC1tZXNzYWdlXCI+e2xhc3RJdGVtLmNvbnRlbnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVuYmVyTm9uZVJlYWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJub25lLXJlYWQtbWVzc2FnZVwiPnttdW5iZXJOb25lUmVhZH08L2k+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCkoVXNlckNoYXQpIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IFNpZGVCYXJDaGF0IGZyb20gXCIuL1NpZGVCYXJDaGF0LmpzeFwiXHJcbmltcG9ydCBMaXN0TWVzc2FnZSBmcm9tIFwiLi9MaXN0TWVzc2FnZS5qc3hcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IHsgZ2V0QWNjZXNzVG9rZW5CeVJlZmVzaCB9IGZyb20gXCIuLi8uLi9saWJyYXJ5L3NlcnZpY2UuanNcIlxyXG5pbXBvcnQgJy4uLy4uL3Njc3MvY2hhdC9jaGF0LnNjc3MnXHJcbmNsYXNzIENoYXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cclxuICAgICAgICAvLy8gbeG7l2kgbOG6p24gdsOgbyBjaGF0IHRow6wgYnXhu5ljIHBo4bqjaSBjw7MgMSByZWZlc2ggdG9rZW4uIG7hur91IGtow7RuZyB0aMOsIGzhu5dpLiBcclxuICAgICAgICAvLy8gROG7sWEgdsOgbyByZWZlc2ggdG9rZW4gdGEgc+G6vSB04bqhbyByYSAxIGFjY2VzcyB0b2tlbiBcclxuICAgICAgICAvLy8gc29uZyBzb25nIHZp4buHYyBmZXRjaCBhY2Nlc3N0b2tlbiB0aMOsIGzhuq9uZyBuZ2hlIHRyb25nIHNvY2tldCBu4bq/dSBjw7MgXHJcbiAgICAgICAgLy8vIGFjY2VzcyB0b2tlbiB0aMOsIGNobyBwaMOpcCBzdGFydCBjaGF0XHJcbiAgICAgICAgdmFyIGluc3RhbmNlQ2hhdCAgICAgPSB0aGlzLFxyXG4gICAgICAgICAgICBUT0tFTl9SRUZFU0hfRE9NID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJUT0tFTl9SRUZFU0hcIiksXHJcbiAgICAgICAgICAgIHsgZGV0ZWN0IH0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgICAgIGlmKCBUT0tFTl9SRUZFU0hfRE9NICl7XHJcbiAgICAgICAgICAgIC8vLyBmZXRjaCB0b2tlbiBhY2Nlc3MgYnkgdG9rZW4gcmVmZXNoIFxyXG4gICAgICAgICAgICB2YXIgcmVmZXNoID0gVE9LRU5fUkVGRVNIX0RPTS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVmZXNoJyksXHJcbiAgICAgICAgICAgICAgICB1c2VySWQgPSBUT0tFTl9SRUZFU0hfRE9NLmdldEF0dHJpYnV0ZSgnZGF0YS11c2VyJylcclxuXHJcbiAgICAgICAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgICAgICAvLyB2YXIgbmFtZSA9ICdpZCdcclxuICAgICAgICAgICAgLy8gdmFyIHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgICAgICAgICAvLyBuYW1lID0gbmFtZS5yZXBsYWNlKC9bXFxbXFxdXS9nLCAnXFxcXCQmJyk7XHJcbiAgICAgICAgICAgIC8vIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJ1s/Jl0nICsgbmFtZSArICcoPShbXiYjXSopfCZ8I3wkKScpLFxyXG4gICAgICAgICAgICAvLyAgICAgcmVzdWx0cyA9IHJlZ2V4LmV4ZWModXJsKVxyXG4gICAgICAgICAgICAvLyBpZiAoIXJlc3VsdHMpIHVzZXJJZCA9IG51bGxcclxuICAgICAgICAgICAgLy8gZWxzZSBpZiAoIXJlc3VsdHNbMl0pIHVzZXJJZCA9ICcnXHJcbiAgICAgICAgICAgIC8vIGVsc2UgdXNlcklkID0gZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMl0ucmVwbGFjZSgvXFwrL2csICcgJykpXHJcblxyXG4gICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgICAgIGlmKCB1c2VySWQgKXsgLy8gJiYgcmVmZXNoXHJcblxyXG4gICAgICAgICAgICAgICAgZ2V0QWNjZXNzVG9rZW5CeVJlZmVzaCggdXNlcklkLCByZWZlc2gsIGRldGVjdCwgaW5zdGFuY2VDaGF0IClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyIGzhuqFpIENoYXRcIilcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtY2hhdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1jaGF0LXRlbWFsYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyLXBhZ2UtY2hhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2lkZUJhckNoYXQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RNZXNzYWdlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZGV0ZWN0ICAgICAgIDogc3RhdGUuY2xpZW50XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENoYXQpXHJcblxyXG5cclxuXHJcblxyXG4vLyB1c2VyQ2hhdDogKDMpIFt7XHJcbi8vICAgICBhdmF0YXI6IFwiL2ltYWdlL2F2YXRhci1oZXJvLmpwZ1wiXHJcbi8vICAgICBjaGFubmVsTmFtZTogXCJjb25zdWx0aW5nLXdlYi1kZXNpZ24tNWVkMTE4YTA0ZmE3NTgwNWI3ZTk5NmZiXCJcclxuLy8gICAgIGlkOiBcIjVlZDExOGEwNGZhNzU4MDViN2U5OTZmZFwiXHJcbi8vICAgICBpc0FjdGl2ZTogdHJ1ZVxyXG4vLyAgICAgaXNPbmxpbmU6IHRydWVcclxuLy8gICAgIG1lc3NhZ2U6ICgxMTgpIFtcclxuICAgICAgICBcclxuLy8gICAgICAgICB7dHlwZTogdHJ1ZSwgY29udGVudDogXCJnZmRnZmRnXCIsIHN0eWxlOiBcIlwiLCBhdHRhY2htZW50OiBBcnJheSgwKX1cclxuLy8gICAgICAgICB7dHlwZTogdHJ1ZSwgY29udGVudDogXCIg8J+SnSBcIiwgc3R5bGU6IFwiRU1PSklcIiwgYXR0YWNobWVudDogbnVsbH1cclxuLy8gICAgICAgICB7dHlwZTogdHJ1ZSwgY29udGVudDogXCIg8J+YhCBcIiwgc3R5bGU6IFwiRU1PSklcIiwgYXR0YWNobWVudDogQXJyYXkoMCl9XHJcbi8vICAgICAgICAge3R5cGU6IHRydWUsIGNvbnRlbnQ6IFwiZXZlbnQucG5nXCIsIHN0eWxlOiBcIklNQUdFXCIsIGF0dGFjaG1lbnQ6IFtcIi91cGxvYWRzLzE1OTE1NDAyMzcwNjQtaW1hZ2UucG5nXCJdIH1cclxuLy8gICAgICAgICB74oCmfSwge+KApn0sIHvigKZ9LCB74oCmfSwge+KApn0sIHvigKZ9XVxyXG4vLyAgICAgbmFtZTogXCJow7luZyDEkeG6uXAgdHJhaVwiXHJcbi8vICAgICB0aW1lRW5kT25saW5lOiBcIjIwMjAtMDUtMTAgMTQ6NDc6MDBcIlxyXG4vLyB9LCB74oCmfSwge+KApn1dXHJcbi8vIHVzZXJzOiB7XHJcbi8vICAgICBhdmF0YXI6IFwiL2ltYWdlL2F2YXRhci5qcGdcIlxyXG4vLyAgICAgZW1haWw6IFwiamJ0cnVvbmd0aGFuaGh1bmdAZ21haWwuY29tXCJcclxuLy8gICAgIG5hbWU6IFwi5aSp5rK85r6E5a2QXCJcclxuLy8gICAgIHBob25lczogW3vigKZ9XVxyXG4vLyAgICAgdG9rZW5zOiB7dG9rZW5SZWZlc2g6IFwiY2ViYmIwODkzNjgyYzM3OGY0ZjQ1OTVkMDMxZDFlNTRcIiwgdG9rZW5BY2Nlc3M6IFwiNzQyMjI0ODhkMzFlNDRkNjVkZmE5MDUzYWEzMzUwNzNcIiwgcGVyaW9kOiBcIjIwMjAtMDYtMTNUMDI6MzE6MTUuNTk3WlwiLCBleHBpcmU6IDYwfVxyXG4vLyAgICAgdXNlclR5cGU6IFwiVXNlclwiXHJcbi8vICAgICBfaWQ6IFwiNWVkMTE4YTA0ZmE3NTgwNWI3ZTk5NmZiXCJcclxuLy8gfSIsInZhciBsb2NhbCAgICAgID0gXCIxNTMuMTI2LjE0OS42M1wiLFxyXG4gICAgbG9jYWxfaXAgICA9IFwiMTUzLjEyNi4xNDkuNjNcIixcclxuICAgIGxvY2FsX3BvcnQgPSA5OTk5LFxyXG4gICAgcGVlcl9wb3J0ICA9IDcwMDBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBTRVJWRVI6IHtcclxuICAgIFBPUlQ6IGxvY2FsX3BvcnQsXHJcbiAgICBET01BSU46IGxvY2FsLFxyXG4gICAgSVA6IGxvY2FsX2lwLFxyXG4gICAgUEVFUl9QT1JUIDogcGVlcl9wb3J0LFxyXG4gICAgUFJPVE9DT0w6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKGxvY2FsX3BvcnQgPT0gNDQzKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiaHR0cHM6Ly9cIlxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBcImh0dHA6Ly9cIlxyXG4gICAgfSxcclxuICAgIEFTU0VUOiAoKSA9PiB7XHJcbiAgICAgIGxldCBwb3J0X3VybCA9ICcnXHJcbiAgICAgIGxldCBwcm90b2NvbCA9ICcnXHJcbiAgICAgIGlmIChsb2NhbF9wb3J0ID09IDQ0Mykge1xyXG4gICAgICAgIHByb3RvY29sID0gXCJodHRwczovL1wiXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJvdG9jb2wgPSBcImh0dHA6Ly9cIlxyXG4gICAgICAgIHBvcnRfdXJsID0gJzonICsgbG9jYWxfcG9ydFxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcHJvdG9jb2wgKyBsb2NhbCArIHBvcnRfdXJsO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgUk9MRV9VU0VSOiB7XHJcbiAgICBzaXR0ZXIgIDogMixcclxuICAgIGVtcGxveWVyOiAzLFxyXG4gICAgYWRtaW4gICA6IDFcclxuICB9LFxyXG4gIFNFUlZFUl9QSFA6IHtcclxuICAgIFVSTDogXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanBcIiBcclxuICB9LFxyXG4gIFxyXG4gIEVNT0pJUzogW1xyXG4gICAgeyBzeW1ib2w6IFwi8J+krVwiLCBzaWduOiBcIjozXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfpKNcIiwgc2lnbjogXCI6dlwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5mCXCIsIHNpZ246IFwiOilcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+ZglwiLCBzaWduOiBcIj0pXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmIpcIiwgc2lnbjogXCI6XilcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YgFwiLCBzaWduOiBcIjp9XCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmIFcIiwgc2lnbjogXCI6bylcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+Yg1wiLCBzaWduOiBcIjotRFwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iEXCIsIHNpZ246IFwiOkRcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YhlwiLCBzaWduOiBcIlgtRFwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iNXCIsIHNpZ246IFwiQl5EXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmYFcIiwgc2lnbjogXCI6LShcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YoFwiLCBzaWduOiBcIjooXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmKFcIiwgc2lnbjogXCI64oCRPFwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5ieXCIsIHNpZ246IFwiOltcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+Yn1wiLCBzaWduOiBcIj46W1wiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5ijXCIsIHNpZ246IFwiOntcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YllwiLCBzaWduOiBcIj46KFwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iiXCIsIHNpZ246IFwiOifigJEoXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmK1cIiwgc2lnbjogXCI6JyhcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YglwiLCBzaWduOiBcIjonKVwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5ioXCIsIHNpZ246IFwiROKAkSc6XCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmKdcIiwgc2lnbjogXCJEOjxcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YplwiLCBzaWduOiBcIkQ6XCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmLFcIiwgc2lnbjogXCJEO1wiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5irXCIsIHNpZ246IFwiRD1cIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YqVwiLCBzaWduOiBcIkRYXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmK5cIiwgc2lnbjogXCI6LTBcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+Yr1wiLCBzaWduOiBcIjjigJEwXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmLJcIiwgc2lnbjogXCI+Ok9cIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+Yl1wiLCBzaWduOiBcIjotKlwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iZXCIsIHNpZ246IFwiOl4qXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmJpcIiwgc2lnbjogXCI6Xi1cIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YmFwiLCBzaWduOiBcIjp4XCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmI1cIiwgc2lnbjogXCI6WFwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iJXCIsIHNpZ246IFwiO+KAkSlcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YnFwiLCBzaWduOiBcIiotKVwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iYXCIsIHNpZ246IFwiO0RcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+Ym1wiLCBzaWduOiBcIjpQXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmJ1cIiwgc2lnbjogXCJ44oCRcFwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5icXCIsIHNpZ246IFwiPXBcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+kkVwiLCBzaWduOiBcIj46UFwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn6SUXCIsIHNpZ246IFwiOuKAkS9cIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YlVwiLCBzaWduOiBcIjrigJEuXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmJ9cIiwgc2lnbjogXCI6U1wiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iQXCIsIHNpZ246IFwiOuKAkXxcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YkVwiLCBzaWduOiBcIjp8XCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmLNcIiwgc2lnbjogXCI6JFwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5ieXCIsIHNpZ246IFwiOmIzXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmJZcIiwgc2lnbjogXCI64oCRWFwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn6SQXCIsIHNpZ246IFwiOiZcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YtlwiLCBzaWduOiBcIk864oCRKVwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iHXCIsIHNpZ246IFwiTzopXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfkbxcIiwgc2lnbjogXCIwO14pXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmIhcIiwgc2lnbjogXCI+OzNcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YjlwiLCBzaWduOiBcInw74oCRKVwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iqXCIsIHNpZ246IFwifOKAkU9cIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+Yj1wiLCBzaWduOiBcIjrigJFKXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmJJcIiwgc2lnbjogXCIj4oCRKVwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5i1XCIsIHNpZ246IFwiJeKAkSlcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YlVwiLCBzaWduOiBcIiUpXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfpJJcIiwgc2lnbjogXCI6Iy9cIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+Yt1wiLCBzaWduOiBcIjpELVwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn6SiXCIsIHNpZ246IFwiOmNSXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfpJVcIiwgc2lnbjogXCI8OuKAkS9cIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+kqFwiLCBzaWduOiBcIjotbFwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5KdXCIsIHNpZ246IFwiPDNcIiB9XHJcbiAgXVxyXG59IiwiLy8gaW1wb3J0ICdjb3JlLWpzJztcclxuXHJcbi8qIHBvbHlmaWxscy5qcyAqL1xyXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJ1xyXG5pbXBvcnQgJ3JlYWN0LWFwcC1wb2x5ZmlsbC9pZTExJ1xyXG5pbXBvcnQgJ2NvcmUtanMnXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIi4vY29tcG9uZW50L0FwcC5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcic7XHJcblxyXG5pbXBvcnQgJy4vc2Nzcy9pbmRleC5zY3NzJ1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShSZWR1Y2VyKTtcclxuc3RvcmUuc3Vic2NyaWJlKGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zb2xlLmxvZygnY8OzIHRoYXkgxJHhu5VpIHRyb25nIFJlZHV4ISEnKVxyXG4gICAgY29uc29sZS5sb2coc3RvcmUuZ2V0U3RhdGUoKSk7XHJcbn0pO1xyXG5pZiAodHlwZW9mIChTdG9yYWdlKSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIFJlYWN0RE9NLnJlbmRlcihcclxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgICAgPEFwcCAvPlxyXG4gICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQ0hBVF9FTEVNRU5UXCIpKTtcclxufWVsc2V7XHJcbiAgICBhbGVydChcIuOBk+OBruODluODqeOCpuOCtuOBp+OBr+OAgeOCouODl+ODquOCseODvOOCt+ODp+ODs+OBr+ato+W4uOOBq+WLleS9nOOBl+OBvuOBm+OCk+OAgiDjgqLjg4Pjg5fjgrDjg6zjg7zjg4njgZfjgabjgY/jgaDjgZXjgYRcIilcclxufVxyXG4iLCJcclxuXHJcbmltcG9ydCBDT05GSUcgZnJvbSBcIi4uL2NvbmZpZ1wiXHJcbi8vIGltcG9ydCBQZWVyIGZyb20gXCJwZWVyanNcIlxyXG5pbXBvcnQgeyBzZXR0ZXJVc2VyLCBzZXR0ZXJDaGFubmVscywgYWRkTWVzc2FnZSwgYWRkTWVzc2FnZVNlbmRUb01lLCBcclxuICAgIHNldHRlclNvY2tldCwgYWRkVXNlck9ubGluZSwgcmVtb3ZlVXNlck9ubGluZSwgcmVhZEFsbE1lc3NhZ2VDaGFubmVsQWN0aXZlLFxyXG4gICAgc2V0dGVyQm9va2luZ3MsIGNoYW5nZUJvb2tpbmcgfSBmcm9tIFwiLi4vYWN0aW9uXCJcclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnXCJcclxuXHJcblxyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCJcclxuXHJcblxyXG4vLy8gY29uZmlnIGdsb2JhbCB2YXJpYWJsZVxyXG52YXIgc29ja2V0ICAgICAgID0gbnVsbCxcclxuICAgIGdsb2JhbFN0cmVhbSA9IG51bGwsXHJcbiAgICBFVkVOVCAgICAgICAgPSBDT05GSUdfRVZFTlRcclxuLy8vIGVuZCBzZXR0aW5nIHZhcmlhYmxlXHJcblxyXG53aW5kb3cub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldCkge1xyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wb25lbnQtZW1vamknKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIGVtb2ppcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtZW1vamlzXCIpO1xyXG4gICAgaWYgKGVtb2ppcykge1xyXG4gICAgICAgIGVtb2ppcy5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGVtb2ppcy5jbGFzc0xpc3QuY29udGFpbnMoXCJzaG93LXRlbXBcIikpIHtcclxuICAgICAgICAgICAgICAgIGVtb2ppcy5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy10ZW1wXCIpO1xyXG4gICAgICAgICAgICAgICAgZW1vamlzLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwKTtcclxuICAgIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWNjZXNzVG9rZW5CeVJlZmVzaCggdXNlcklkLCByZWZlc2gsIGRldGVjdCwgaW5zdGFuY2VDb21wb25lbnQgKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImdldEFjY2Vzc1Rva2VuQnlSZWZlc2hcIilcclxuICAgIHZhciBkYXRhICAgICAgID0geyB1c2VySWQsIHJlZmVzaCwgLi4uIGRldGVjdCB9LFxyXG4gICAgICAgIHRva2Vuc1VzZXIgPSBudWxsXHJcbiAgICBmZXRjaChDT05GSUcuU0VSVkVSLkFTU0VUKCkgKyAnL2FwaS9yZWZlc2gnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5jb2RlICE9IDIwMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLjg63jgrDjgqTjg7Pjgrvjg4Pjgrfjg6fjg7PjgYzmraPjgZfjgY/jgYLjgorjgb7jgZvjgpPjgIIg5YaN5bqm44Ot44Kw44Kk44Oz44GZ44KL44GL44CB566h55CG6ICF44Gr6YCj57Wh44GX44Gm44GP44Gg44GV44GEXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRva2Vuc1VzZXIgPSB7IFxyXG4gICAgICAgICAgICBleHBpcmUgICAgIDogcmVzcG9uc2UuZGF0YS5leHBpcmUsXHJcbiAgICAgICAgICAgIHBlcmlvZCAgICAgOiByZXNwb25zZS5kYXRhLnBlcmlvZCxcclxuICAgICAgICAgICAgdG9rZW5BY2Nlc3M6IHJlc3BvbnNlLmRhdGEudG9rZW5BY2Nlc3MsXHJcbiAgICAgICAgICAgIHRva2VuUmVmZXNoOiByZXNwb25zZS5kYXRhLnRva2VuUmVmZXNoXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2V0aW1lIG91dCBcIiArIHBhcnNlSW50KHJlc3BvbnNlLmRhdGEuZXhwaXJlKSAqIDEwMDAgKVxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBDT05GSUcuU0VSVkVSX1BIUC5VUkxcclxuICAgICAgICB9LCBwYXJzZUludChyZXNwb25zZS5kYXRhLmV4cGlyZSkgKiAxMDAwIClcclxuICAgICAgICBcclxuICAgICAgICB2YXIgdXNlckxvZ2luID0geyAuLi4gcmVzcG9uc2UuZGF0YS51c2VyLCB0b2tlbnMgOiB0b2tlbnNVc2VyIH1cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXJMb2dpbikpXHJcbiAgICAgICAgaW5zdGFuY2VDb21wb25lbnQucHJvcHMuZGlzcGF0Y2goc2V0dGVyVXNlcih1c2VyTG9naW4pKVxyXG4gICAgICAgIHJldHVybiB7IGF1dGg6IHVzZXJMb2dpbiwgZGV0ZWN0IH1cclxuICAgIH0pXHJcbiAgICAudGhlbiggZGF0YUZldGNoQ2hhbm5lbCA9PiB7XHJcblxyXG4gICAgICAgIHZhciBkYXRhID0geyBhY2Nlc3M6IGRhdGFGZXRjaENoYW5uZWwuYXV0aC50b2tlbnMudG9rZW5BY2Nlc3MsIC4uLmRhdGFGZXRjaENoYW5uZWwuZGV0ZWN0IH1cclxuICAgICAgICByZXR1cm4gZmV0Y2hDaGFubmVsTWVzc2FnZSggZGF0YSApXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oIGRhdGFDaGFubmVsID0+IHtcclxuICAgICAgICBpZiggIWRhdGFDaGFubmVsICl7XHJcbiAgICAgICAgICAgIGFsZXJ0KCBcIuODreOCsOOCpOODs+OCu+ODg+OCt+ODp+ODs+OBjOato+OBl+OBj+OBguOCiuOBvuOBm+OCk+OAgiDlho3luqbjg63jgrDjgqTjg7PjgZnjgovjgYvjgIHnrqHnkIbogIXjgavpgKPntaHjgZfjgabjgY/jgaDjgZXjgYRcIilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBoYXNBZG1pbkNoYW5uZWwgPSBmYWxzZVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCBkYXRhQ2hhbm5lbC5sZW5ndGggKXtcclxuICAgICAgICAgICAgZm9yIChsZXQgaUNoYW5uZWwgPSAwOyBpQ2hhbm5lbCA8IGRhdGFDaGFubmVsLmxlbmd0aDsgaUNoYW5uZWwrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoYW5uZWxOYW1lID0gKGRhdGFDaGFubmVsW2lDaGFubmVsXSkuY2hhbm5lbE5hbWVcclxuICAgICAgICAgICAgICAgIGlmKCBjaGFubmVsTmFtZS5tYXRjaCgnU0lOR0xFLShbMC05IC1dKiktMScpICl7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzQWRtaW5DaGFubmVsID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighaGFzQWRtaW5DaGFubmVsKXtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBnZXRDaGFubmVsQWRtaW4oeyB1c2VySWQsIHJlZmVzaCwgLi4uIGRldGVjdH0sIHRva2Vuc1VzZXIudG9rZW5BY2Nlc3MpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRhQ2hhbm5lbFxyXG4gICAgfSlcclxuICAgIC50aGVuKCBkYXRhQ2hhbm5lbCA9PiB7XHJcbiAgICAgICAgaWYoIGRhdGFDaGFubmVsICl7XHJcbiAgICAgICAgICAgIGluc3RhbmNlQ29tcG9uZW50LnByb3BzLmRpc3BhdGNoKHNldHRlckNoYW5uZWxzKGRhdGFDaGFubmVsKSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBhbGVydChcIuODreOCsOOCpOODs+OCu+ODg+OCt+ODp+ODs+OBjOato+OBl+OBj+OBguOCiuOBvuOBm+OCk+OAgiDlho3luqbjg63jgrDjgqTjg7PjgZnjgovjgYvjgIHnrqHnkIbogIXjgavpgKPntaHjgZfjgabjgY/jgaDjgZXjgYRcIilcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzZmVzaFRva2VuSWZFeHBpcmUoIGF1dGgsIGluc3RhbmNlQ2hhdCApe1xyXG4gICAgY29uc29sZS5sb2coIGF1dGgsIFwiYXV0aCBpbiByZXNmZXNoVG9rZW5JZkV4cGlyZVwiIClcclxuICAgIHZhciBkaWZmID0gKChuZXcgRGF0ZSkuZ2V0VGltZSgpIC0gbmV3IERhdGUoYXV0aC50b2tlbnMucGVyaW9kKS5nZXRUaW1lKCkpIC8gMTAwMFxyXG4gICAgaWYgKGRpZmYgPj0gYXV0aC50b2tlbnMuZXhwaXJlKSB7XHJcbiAgICAgICAgLy8vIGZldGNoIG5ldyB0b2tlblxyXG4gICAgICAgIHZhciBkYXRhUmVmZXNoID0geyBcclxuICAgICAgICAgICAgdXNlcklkOiBhdXRoLmlkLCBcclxuICAgICAgICAgICAgcmVmZXNoOiBhdXRoLnRva2Vucy50b2tlblJlZmVzaCwgXHJcbiAgICAgICAgICAgIGRldGVjdDogdGhpcy5wcm9wcy5jbGllbnQgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGFSZWZlc2gsIFwicmVmZXNoIHRva2VuIHbDrCBo4bq/dCBo4bqhbiByZWZlc2ggdG9rZW4gdsOsIGjhur90IGjhuqFuIHJlZmVzaCB0b2tlbiB2w6wgaOG6v3QgaOG6oW4gcmVmZXNoIHRva2VuIHbDrCBo4bq/dCBo4bqhbiByZWZlc2ggdG9rZW4gdsOsIGjhur90IGjhuqFuIHJlZmVzaCB0b2tlbiB2w6wgaOG6v3QgaOG6oW4gcmVmZXNoIHRva2VuIHbDrCBo4bq/dCBo4bqhbiByZWZlc2ggdG9rZW4gdsOsIGjhur90IGjhuqFuIHJlZmVzaCB0b2tlbiB2w6wgaOG6v3QgaOG6oW4gXCIpXHJcbiAgICAgICAgcmVzZmVzaFRva2VuRXhwaXJlKGRhdGFSZWZlc2gsIGluc3RhbmNlQ2hhdClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNvY2tldEluaXRpYWxDb25uZWN0KHNvY2tldElPQ2xpZW50LCBpbnN0YW5jZUFwcCkge1xyXG4gICAgXHJcbiAgICBcclxuICAgIHNvY2tldCA9IHNvY2tldElPQ2xpZW50KENPTkZJRy5TRVJWRVIuQVNTRVQoKSlcclxuICAgIHZhciBBcHBsaWNhdGlvbkRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQXBwbGljYXRpb25cIilcclxuICAgIHNvY2tldC5vbignY29ubmVjdCcsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgQXBwbGljYXRpb25Eb20gJiYgQXBwbGljYXRpb25Eb20uY2xhc3NMaXN0LnJlbW92ZShcImNvbm5lY3Qtc29ja2V0LWVycm9yXCIpXHJcbiAgICAgICAgLy8vLyBzZXQgY29uZmlnXHJcbiAgICAgICAgc29ja2V0TGlzdGVubmVyKHNvY2tldCwgaW5zdGFuY2VBcHApXHJcbiAgICAgICAgaW5zdGFuY2VBcHAucHJvcHMuZGlzcGF0Y2goc2V0dGVyU29ja2V0KHNvY2tldCkpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzb2NrZXQgY29ubmVjdCBuw6ggc29ja2V0TGlzdGVubmVyXCIpXHJcbiAgICB9KTtcclxuICAgIHNvY2tldC5vbignZGlzY29ubmVjdCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpbnN0YW5jZUFwcC5wcm9wcy5kaXNwYXRjaChzZXR0ZXJTb2NrZXQobnVsbCkpXHJcbiAgICAgICAgQXBwbGljYXRpb25Eb20gJiYgQXBwbGljYXRpb25Eb20uY2xhc3NMaXN0LmFkZChcImNvbm5lY3Qtc29ja2V0LWVycm9yXCIpXHJcbiAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoQ09ORklHLlNFUlZFUl9QSFAuVVJMKVxyXG4gICAgfSk7XHJcbiAgICBzb2NrZXQub24oJ2Nvbm5lY3RfZXJyb3InLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgQXBwbGljYXRpb25Eb20gJiYgQXBwbGljYXRpb25Eb20uY2xhc3NMaXN0LmFkZChcImNvbm5lY3Qtc29ja2V0LWVycm9yXCIpXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoQ09ORklHLlNFUlZFUl9QSFAuVVJMKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIC8vQ2FsbGVyXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxsZXIoIGNoYW5uZWxJbmZvciwgdXNlciwgY2xpZW50ICl7XHJcbiAgICB2YXIgaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkFwcGxpY2F0aW9uXCIpLmdldEF0dHJpYnV0ZSgnZGF0YS1wZWVyJyApXHJcbiAgICBjb25zb2xlLmxvZyggaWQsIGNoYW5uZWxJbmZvciApXHJcbiAgICBvcGVuU3RyZWFtKClcclxuICAgIC50aGVuKHN0cmVhbSA9PiB7XHJcbiAgICAgICAgZ2xvYmFsU3RyZWFtID0gc3RyZWFtXHJcbiAgICAgICAgcGxheVN0cmVhbSgnaWQtcGVlci1sb2NhbCcsIHN0cmVhbSk7XHJcbiAgICAgICAgLy8vIGZldGNoIHBlZXJqcyBvZiB1c2VyIGluIGNoYW5uZWxcclxuICAgICAgICByZXR1cm4gZ2V0UGVlclVzZXJDaGFubmVsKCBjaGFubmVsSW5mb3IsIHVzZXIsIGNsaWVudCApXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjYWxsZXJcIilcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZW5kTWVzc2FnZVRvQ2hhbm5lbChtZXNzYWdlLCBzdHlsZSwgYXR0YWNobWVudCwgY2hhbm5lbElkLCBhY2Nlc3MsIGRldGVjdCwgaW5zdGFuY2VDb21wb25lbnQsIGRhdGFSZWZlc2gpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh7IG1lc3NhZ2UsIGNoYW5uZWxJZCwgYWNjZXNzLCBkZXRlY3QsIGluc3RhbmNlQ29tcG9uZW50LCBkYXRhUmVmZXNoIH0sIFwiYmVmb3JlIHNlbmRNZXNzYWdlVG9DaGFubmVsXCIpXHJcbiAgICBpZiAoIWRhdGFSZWZlc2gpIHtcclxuICAgICAgICBzb2NrZXQuZW1pdChFVkVOVC5TRU5EX01FU1NBR0UsIHsgbWVzc2FnZSwgc3R5bGUsIGF0dGFjaG1lbnQsIGNoYW5uZWxJZCwgYWNjZXNzLCAuLi5kZXRlY3QgfSlcclxuICAgICAgICAvLy8gXHJcbiAgICAgICAgaW5zdGFuY2VDb21wb25lbnQucHJvcHMuZGlzcGF0Y2goYWRkTWVzc2FnZSh7IHR5cGU6IHRydWUsIHJlYWQ6IHRydWUsIGNvbnRlbnQ6IG1lc3NhZ2UsIHN0eWxlLCBhdHRhY2htZW50IH0pKVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZGF0YVJlZmVzaCwgXCJyZWZlc2ggdG9rZW4gdHLGsOG7m2Mga2hpIHNlbmQgY2hhdCB2w6wgaOG6v3QgaOG6oW5cIilcclxuICAgIC8vLyDEkcOzbmcgYsSDbmcgcGjhuqduIGlucHV0IHRleHRhcmVhIG5o4bqtcCBjaGF0IFxyXG5cclxuICAgIC8vLy8gdXNlcklkIDogdXNlci5faWQsIHJlZmVzaCA6IHVzZXIudG9rZW5zLnRva2VuUmVmZXNoLCBkZXRlY3Q6IHRoaXMucHJvcHMuY2xpZW50IFxyXG4gICAgdmFyIHsgdXNlcklkLCByZWZlc2gsIGRldGVjdCB9ID0gZGF0YVJlZmVzaFxyXG4gICAgdmFyIGRhdGFGZXRjaCA9IHsgdXNlcklkLCByZWZlc2gsIC4uLmRldGVjdCB9XHJcblxyXG4gICAgZmV0Y2goQ09ORklHLlNFUlZFUi5BU1NFVCgpICsgJy9hcGkvcmVmZXNoJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGFGZXRjaCksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCByZXNwb25zZSAsIFwiL2FwaS9yZWZlc2hcIilcclxuICAgICAgICBpZiAocmVzcG9uc2UuY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRva2VuIHJlZmVzaCBraMO0bmcgxJHDum5nXCIpXHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgdmFyIHRva2Vuc1VzZXIgPSB7IFxyXG4gICAgICAgICAgICBleHBpcmU6IHJlc3BvbnNlLmRhdGEuZXhwaXJlLFxyXG4gICAgICAgICAgICBwZXJpb2Q6IHJlc3BvbnNlLmRhdGEucGVyaW9kLFxyXG4gICAgICAgICAgICB0b2tlbkFjY2VzczogcmVzcG9uc2UuZGF0YS50b2tlbkFjY2VzcyxcclxuICAgICAgICAgICAgdG9rZW5SZWZlc2g6IHJlc3BvbnNlLmRhdGEudG9rZW5SZWZlc2hcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHVzZXJMb2dpbiA9IHsgLi4uIHJlc3BvbnNlLmRhdGEudXNlciwgdG9rZW5zIDogdG9rZW5zVXNlciB9XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyTG9naW4pKVxyXG4gICAgICAgIGFjY2VzcyA9IHVzZXJMb2dpbi50b2tlbnMudG9rZW5BY2Nlc3NcclxuICAgICAgICBzb2NrZXQuZW1pdChFVkVOVC5TRU5EX01FU1NBR0UsIHsgbWVzc2FnZSwgc3R5bGUsIGF0dGFjaG1lbnQsIGNoYW5uZWxJZCwgYWNjZXNzLCAuLi5kZXRlY3QgfSlcclxuICAgICAgICBpbnN0YW5jZUNvbXBvbmVudC5wcm9wcy5kaXNwYXRjaChzZXR0ZXJVc2VyKHVzZXJMb2dpbikpXHJcbiAgICAgICAgaW5zdGFuY2VDb21wb25lbnQucHJvcHMuZGlzcGF0Y2goYWRkTWVzc2FnZSh7IHR5cGU6IHRydWUsIHJlYWQ6IHRydWUsIGNvbnRlbnQ6IG1lc3NhZ2UsIHN0eWxlLCBhdHRhY2htZW50IH0pKVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgYWxlcnQoXCLjg6Hjg4Pjgrvjg7zjgrjjga7pgIHkv6HjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIIg5YaN5bqm44Ot44Kw44Kk44Oz44GZ44KL44GL44CB566h55CG6ICF44Gr6YCj57Wh44GX44Gm44GP44Gg44GV44GEXCIpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9KVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZW5kVHlwaW5nTWVzc2FnZVRvQ2hhbm5lbChjaGFubmVsSWQsIGFjY2VzcywgZGV0ZWN0ICkge1xyXG4gICAgXHJcbiAgICBzb2NrZXQuZW1pdChFVkVOVC5TRU5EX1RZUElORywgeyBjaGFubmVsSWQsIGFjY2VzcywgLi4uZGV0ZWN0IH0pXHJcbiAgICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUJsb2JUb1NlcnZlcihmaWxlKSB7XHJcbiAgICB2YXIgU0laRV9MSU1JVCA9IDUgKiAxMDI0ICogMTAyNFxyXG5cclxuICAgIGlmKCAhZmlsZS5zaXplIHx8IGZpbGUuc2l6ZSA+IFNJWkVfTElNSVQgKXtcclxuICAgICAgICBoYW5kbGVFcnJvclVwbG9hZEZpbGUoKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZXQgZGF0YUZpbGUgPSBmaWxlXHJcbiAgICBsZXQgZm9ybSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICBmb3JtLmFwcGVuZCgnZmlsZScsIGRhdGFGaWxlKVxyXG4gICAgZm9ybS5hcHBlbmQoJ3VzZXJfaWQnLCAxKVxyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsICAgICAgICA6IENPTkZJRy5TRVJWRVJfUEhQLlVSTCArICcvYXBpL3VwbG9hZCcsXHJcbiAgICAgICAgdHlwZSAgICAgICA6ICdwb3N0JyxcclxuICAgICAgICBlbmN0eXBlICAgIDogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxyXG4gICAgICAgIGRhdGEgICAgICAgOiBmb3JtLFxyXG4gICAgICAgIGNhY2hlICAgICAgOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCByZXNwb25zZSApe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmNvZGUgIT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVFcnJvclVwbG9hZEZpbGUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciByZVdyaXRlVXJsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pbWFnZS0tYmxvY2tcIikuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImpzLXNpZ24tdXJsXCIpXHJcbiAgICAgICAgICAgIGlmIChyZVdyaXRlVXJsLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmVXcml0ZVVybFswXS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXVybFwiLCByZXNwb25zZS5kYXRhLnVybClcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdHlwZUZpbGUgPSByZXNwb25zZS5kYXRhLmZpbGVfbmFtZSxcclxuICAgICAgICAgICAgICAgIGV4dGVudGlvblR5cGUgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBpZiggdHlwZUZpbGUgKXtcclxuICAgICAgICAgICAgICAgICAgICBleHRlbnRpb25UeXBlID0gZ2V0VHlwZUZpbGUoIHR5cGVGaWxlIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKCAhZXh0ZW50aW9uVHlwZSApe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlV3JpdGVVcmxbMF0ucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJlV3JpdGVVcmxbMF0uc2V0QXR0cmlidXRlKFwiZGF0YS10eXBlXCIsIGV4dGVudGlvblR5cGUgKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlV3JpdGVVcmxbMF0uY2xhc3NMaXN0LnJlbW92ZShcImpzLXNpZ24tdXJsXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICBoYW5kbGVFcnJvclVwbG9hZEZpbGUoKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RlblNjcm9sbE1lc3NhZ2UoZSwgbWVzc2FnZXMsIGNoYW5uZWxBY3RpdmUgKSB7IFxyXG4gICAgICAgICAgICAgICBcclxuICAgIGlmKCFtZXNzYWdlcyB8fCAhbWVzc2FnZXMubGVuZ3RoKXtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIHZhciBkb21TY3JvbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLXNjcm9sbC10by1ib3R0b21cIilcclxuICAgIC8vIGNvbnNvbGUubG9nKGRvbVNjcm9sbC5zY3JvbGxIZWlnaHQsIGRvbVNjcm9sbC5jbGllbnRIZWlnaHQgKyBcImxpc3RlblNjcm9sbE1lc3NhZ2VcIilcclxuICAgIGlmICgkKGUpLnNjcm9sbFRvcCgpICsgXHJcbiAgICAgICAgJChlKS5pbm5lckhlaWdodCgpID49ICBcclxuICAgICAgICAkKGUpWzBdLnNjcm9sbEhlaWdodCkgeyBcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pcy13cml0ZS1tZXNzYWdlXCIpLmNsYXNzTGlzdC5hZGQoXCJmb2xsb3ctY29udmVyc2F0aW9uXCIpXHJcbiAgICAgICAgICAgIC8vLyBjaGVjayBtZXNzYWdlIHVucmVhZFxyXG4gICAgICAgICAgICB2YXIgZXhpc3ROb25lUmVhZCA9IG1lc3NhZ2VzLnNvbWUoIGZ1bmN0aW9uKCBtZXNzYWdlICl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJldHVybiAhbWVzc2FnZS5yZWFkICYmICFtZXNzYWdlLnR5cGVcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGlmKCBleGlzdE5vbmVSZWFkICl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhFVkVOVC5SRUFEX01FU1NBR0VfQUxMLCBcImxpc3RlblNjcm9sbE1lc3NhZ2VcIilcclxuICAgICAgICAgICAgICAgIHZhciB1c2VyTG9jYWwgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpXHJcbiAgICAgICAgICAgICAgICBzb2NrZXQuZW1pdChFVkVOVC5SRUFEX01FU1NBR0VfQUxMLCB7IHVzZXIgOiB1c2VyTG9jYWwuaWQsIGNoYW5uZWxJZDogY2hhbm5lbEFjdGl2ZS5pZCwgY2hhbm5lbE5hbWU6IGNoYW5uZWxBY3RpdmUuY2hhbm5lbE5hbWUgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pcy13cml0ZS1tZXNzYWdlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJmb2xsb3ctY29udmVyc2F0aW9uXCIpXHJcbiAgICB9IFxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBsaXN0ZW5SZWFkTWVzc2FnZU5ld1VzZXIoIG1lc3NhZ2VzLCBjaGFubmVsQWN0aXZlICkgeyBcclxuICAgICAgICAgICAgICAgXHJcbiAgICBpZighbWVzc2FnZXMgfHwgIW1lc3NhZ2VzLmxlbmd0aCl7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHZhciBleGlzdE5vbmVSZWFkID0gbWVzc2FnZXMuc29tZSggZnVuY3Rpb24oIG1lc3NhZ2UgKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuICFtZXNzYWdlLnJlYWQgJiYgIW1lc3NhZ2UudHlwZVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiggZXhpc3ROb25lUmVhZCApe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEVWRU5ULlJFQURfTUVTU0FHRV9BTEwsIFwibGlzdGVuUmVhZE1lc3NhZ2VOZXdVc2VyXCIpXHJcbiAgICAgICAgdmFyIHVzZXJMb2NhbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSlcclxuICAgICAgICBzb2NrZXQuZW1pdChFVkVOVC5SRUFEX01FU1NBR0VfQUxMLCB7IHVzZXIgOiB1c2VyTG9jYWwuaWQsIGNoYW5uZWxJZDogY2hhbm5lbEFjdGl2ZS5pZCwgY2hhbm5lbE5hbWU6IGNoYW5uZWxBY3RpdmUuY2hhbm5lbE5hbWUgfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZW5kQm9va2luZ1VwZGF0ZShib29raW5nVXBkYXRlKSB7XHJcbiAgICBzb2NrZXQuZW1pdChFVkVOVC5VU0VSX0NIQU5HRV9CT09LSU5HLCBib29raW5nVXBkYXRlKVxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdG9yQmlsbChib29raW5nLCBhdXRoICkge1xyXG4gICAgdmFyIHdvcmtfZGF0ZSA9IGJvb2tpbmcud29ya19kYXRlLFxyXG4gICAgICAgIHN0YXJ0ICAgICA9IGJvb2tpbmcuc3RhcnQsXHJcbiAgICAgICAgZmluaXNoICAgID0gYm9va2luZy5maW5pc2gsXHJcbiAgICAgICAgc2FsYXJ5ICAgID0gYm9va2luZy5zYWxhcnlcclxuXHJcbiAgICB2YXIgZGlmZmVyZW5jZVRpbWUgPSAwLFxyXG4gICAgICAgIHByaWNlICAgICAgICAgID0gMCxcclxuICAgICAgICBteVNlcnZGZWUgICAgICA9IDAsXHJcbiAgICAgICAgc3RyaXBlU2VydkZlZSAgPSAwLFxyXG4gICAgICAgIHZhdCAgICAgICAgICAgID0gMCxcclxuICAgICAgICB0b3RhbCAgICAgICAgICA9IDBcclxuICAgIFxyXG4gICAgaWYoIHNhbGFyeSAmJiB3b3JrX2RhdGUgJiYgc3RhcnQgJiYgZmluaXNoICl7XHJcbiAgICAgICAgdmFyIFsgZkhvdXIsIGZNaW51dGUgXSA9IGZpbmlzaC5zcGxpdCgnOicpLFxyXG4gICAgICAgICAgICBbIHNIb3VyLCBzTWludXRlIF0gPSBzdGFydC5zcGxpdCgnOicpXHJcbiAgICAgICAgdmFyIGRhdGVUaW1lRmluaXNoICAgICA9IChuZXcgRGF0ZSgxLDEsMjAyMCwgZkhvdXIsIGZNaW51dGUsIDApKS5nZXRUaW1lKCksXHJcbiAgICAgICAgICAgIGRhdGVUaW1lU3RhcnQgICAgICA9IChuZXcgRGF0ZSgxLDEsMjAyMCwgc0hvdXIsIHNNaW51dGUsIDApKS5nZXRUaW1lKClcclxuXHJcbiAgICAgICAgICAgIGRpZmZlcmVuY2VUaW1lID0gKGRhdGVUaW1lRmluaXNoIC0gZGF0ZVRpbWVTdGFydCkvIDEwMDAgLyA2MCAvIDYwXHJcbiAgICAgICAgICAgIHByaWNlICAgICAgICAgID0gTWF0aC5mbG9vcihkaWZmZXJlbmNlVGltZSAqIHNhbGFyeSlcclxuICAgICAgICAgICAgbXlTZXJ2RmVlICAgICAgPSBNYXRoLmZsb29yKHByaWNlICogMC4yKVxyXG4gICAgICAgICAgICB2YXQgICAgICAgICAgICA9IE1hdGguZmxvb3IoKHByaWNlICsgbXlTZXJ2RmVlKSAqIDAuMSlcclxuICAgICAgICAgICAgc3RyaXBlU2VydkZlZSAgPSBNYXRoLmZsb29yKChwcmljZSArIG15U2VydkZlZSArIHZhdCkgKiAwLjAzNilcclxuICAgIH1cclxuICAgIGlmKCBhdXRoLnJvbGVfaWQgPT0gY29uZmlnLlJPTEVfVVNFUi5zaXR0ZXIgKXtcclxuICAgICAgICBcclxuICAgICAgICB0b3RhbCA9IHByaWNlIC0gc3RyaXBlU2VydkZlZVxyXG4gICAgfWVsc2UgaWYoIGF1dGgucm9sZV9pZCA9PSBjb25maWcuUk9MRV9VU0VSLmVtcGxveWVyICl7XHJcbiAgICAgICAgdG90YWwgPSBwcmljZSArIHZhdCArIG15U2VydkZlZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFsgd29ya19kYXRlLCBzdGFydCwgZmluaXNoLCBzYWxhcnksIGRpZmZlcmVuY2VUaW1lLCBwcmljZSwgdmF0LCBteVNlcnZGZWUsIHN0cmlwZVNlcnZGZWUsIHRvdGFsIF1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0b3JGZWVTdHJpcGUoYW1vdW50LCBjdXJyZW5jeSkge1xyXG4gICAgdmFyIGZlZXMgPSB7IFxyXG4gICAgICAgIFVTRDogeyBQZXJjZW50OiAyLjksIEZpeGVkOiAwLjMwIH0sXHJcbiAgICAgICAgR0JQOiB7IFBlcmNlbnQ6IDIuNCwgRml4ZWQ6IDAuMjAgfSxcclxuICAgICAgICBFVVI6IHsgUGVyY2VudDogMi40LCBGaXhlZDogMC4yNCB9LFxyXG4gICAgICAgIENBRDogeyBQZXJjZW50OiAyLjksIEZpeGVkOiAwLjMwIH0sXHJcbiAgICAgICAgQVVEOiB7IFBlcmNlbnQ6IDIuOSwgRml4ZWQ6IDAuMzAgfSxcclxuICAgICAgICBOT0s6IHsgUGVyY2VudDogMi45LCBGaXhlZDogMiB9LFxyXG4gICAgICAgIERLSzogeyBQZXJjZW50OiAyLjksIEZpeGVkOiAxLjggfSxcclxuICAgICAgICBTRUs6IHsgUGVyY2VudDogMi45LCBGaXhlZDogMS44IH0sXHJcbiAgICAgICAgSlBZOiB7IFBlcmNlbnQ6IDMuNiwgRml4ZWQ6IDAgfSxcclxuICAgICAgICBNWE46IHsgUGVyY2VudDogMy42LCBGaXhlZDogMyB9XHJcbiAgICB9XHJcbiAgICB2YXIgREVGQVVMVF9QRVJDRU5UX1NUUklQRSA9IDMuNjtcclxuICAgIHZhciBfZmVlID0gX2ZlZSA9IHsgUGVyY2VudDogREVGQVVMVF9QRVJDRU5UX1NUUklQRSwgRml4ZWQ6IDAgfVxyXG4gICAgaWYodHlwZW9mIGZlZXNTdHJpcGUgIT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIF9mZWUgPSBmZWVzW2N1cnJlbmN5XTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdmFyIGFtb3VudCA9IHBhcnNlRmxvYXQoYW1vdW50KTtcclxuICAgIHZhciB0b3RhbCA9IChhbW91bnQgKyBwYXJzZUZsb2F0KF9mZWUuRml4ZWQpKSAvICgxIC0gcGFyc2VGbG9hdChfZmVlLlBlcmNlbnQpIC8gMTAwKTtcclxuICAgIHZhciBmZWUgPSB0b3RhbCAtIGFtb3VudDtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFtb3VudDogYW1vdW50LFxyXG4gICAgICAgIGZlZTogZmVlLnRvRml4ZWQoMiksXHJcbiAgICAgICAgdG90YWw6IHRvdGFsLnRvRml4ZWQoMilcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIGhhbmRsZUVycm9yVXBsb2FkRmlsZSgpe1xyXG4gICAgdmFyIHJlV3JpdGVVcmwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWltYWdlLS1ibG9ja1wiKS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwianMtc2lnbi11cmxcIilcclxuICAgIGlmIChyZVdyaXRlVXJsLmxlbmd0aCkge1xyXG4gICAgICAgIHJlV3JpdGVVcmxbMF0ucmVtb3ZlKClcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBnZXRUeXBlRmlsZSggZmlsZW5hbWUgKXtcclxuICAgIHZhciBhY2NlcHQgPSAvKFxcLmpwZ3xcXC5qcGVnfFxcLmJtcHxcXC5naWZ8XFwucG5nfFxcLmltYWdlKSQvaVxyXG4gICAgaWYoYWNjZXB0LmV4ZWMoZmlsZW5hbWUpKXsgXHJcbiAgICAgICAgcmV0dXJuIFwiaW1nXCJcclxuICAgIH1cclxuICAgIHZhciBhY2NlcHQgPSAvKFxcLnhsc3xcXC54bHN4fFxcLmNzdnxcXC5wZGZ8XFwuZG9jfFxcLmRvY3gpJC9pXHJcbiAgICBpZihhY2NlcHQuZXhlYyhmaWxlbmFtZSkpeyBcclxuXHJcbiAgICAgICAgcmV0dXJuIFwiZmlsZVwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbFxyXG59XHJcbmZ1bmN0aW9uIHZhbGlkYXRlRmV0Y2hDaGFubmVsTWVzc2FnZShkYXRhKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHZhciB7IGFjY2VzcywgYnJvd3NlciwgYnJvd3Nlck1ham9yVmVyc2lvbiwgYnJvd3NlclZlcnNpb24sIG9zLCBvc1ZlcnNpb24gfSA9IGRhdGFcclxuICAgICAgICBpZiAoIWFjY2VzcyB8fCAhYnJvd3NlciB8fCAhYnJvd3Nlck1ham9yVmVyc2lvbiB8fCAhYnJvd3NlclZlcnNpb24gfHwgIW9zIHx8ICFvc1ZlcnNpb24pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi6YGu44KLXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmZXRjaENoYW5uZWxNZXNzYWdlKCBkYXRhICkge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSwgXCJ2YWxpZGF0ZUZldGNoQ2hhbm5lbE1lc3NhZ2VcIilcclxuICAgIHZhciBpc1ZhbGlkID0gdmFsaWRhdGVGZXRjaENoYW5uZWxNZXNzYWdlKGRhdGEpXHJcbiAgICBpZiAoIWlzVmFsaWQpIHtcclxuICAgICAgICBhbGVydChcIuOCqOODqeODvOOBjOeZuueUn+OBl+OBvuOBl+OBn+OAguOBl+OBsOOCieOBj+OBl+OBpuOBi+OCieOCguOBhuS4gOW6puOBiuippuOBl+OBj+OBoOOBleOBhDFcIilcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGlmKCB0eXBlb2YgSURfVklFV19VU0VSX0NIQVQgIT0gJ3VuZGVmaW5lZCcgJiYgSURfVklFV19VU0VSX0NIQVQgKXtcclxuICAgICAgICBcclxuICAgICAgICBkYXRhLnVzZXJJZEFjdGl2ZUNoYW5uZWwgPSBJRF9WSUVXX1VTRVJfQ0hBVFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZldGNoKENPTkZJRy5TRVJWRVIuQVNTRVQoKSArICcvYXBpL2NoYW5uZWxzJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyggcmVzcG9uc2UgLCBcIi9hcGkvY2hhbm5lbHNcIilcclxuICAgICAgICBpZiAocmVzcG9uc2UuY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIuOCqOODqeODvOOBjOeZuueUn+OBl+OBvuOBl+OBn+OAguOBl+OBsOOCieOBj+OBl+OBpuOBi+OCieOCguOBhuS4gOW6puOBiuippuOBl+OBj+OBoOOBleOBhDJcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBcIiBoYXZlIGVycm9yIFwiKVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfSlcclxufVxyXG5mdW5jdGlvbiBnZXRDaGFubmVsQWRtaW4oIGRhdGEsIGFjY2VzcyApIHsgXHJcblxyXG4gICAgdmFyIHsgdXNlcklkLCByZWZlc2ggfSAgID0gZGF0YVxyXG4gICAgICAgIGRhdGEubG9jYWxVc2VySWQgICAgID0gdXNlcklkXHJcbiAgICAgICAgZGF0YS5yZWZlcmVuY2VVc2VySWQgPSAxXHJcbiAgICAgICAgZGF0YS5yZWZlc2ggICAgICAgICAgPSByZWZlc2hcclxuICAgICAgICBkYXRhLmFjY2VzcyAgICAgICAgICA9IGFjY2Vzc1xyXG5cclxuICAgIHJldHVybiBmZXRjaChDT05GSUcuU0VSVkVSLkFTU0VUKCkgKyAnL2FwaS9jaGFubmVsJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSwgXCJnZXRDaGFubmVsQWRtaW5cIilcclxuICAgICAgICBpZiAocmVzcG9uc2UuY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgYWxlcnQoXCLjgqjjg6njg7zjgYznmbrnlJ/jgZfjgb7jgZfjgZ/jgILjgZfjgbDjgonjgY/jgZfjgabjgYvjgonjgoLjgYbkuIDluqbjgYroqabjgZfjgY/jgaDjgZXjgYRcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZldGNoQ2hhbm5lbE1lc3NhZ2UoIGRhdGEgKVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9KVxyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcbi8vIGNvbnN0IHBlZXIgPSBuZXcgUGVlcih7IFxyXG4vLyAgICAgaG9zdDogJzEyNy4wLjAuMScsXHJcbi8vICAgICBwb3J0OiBjb25maWcuU0VSVkVSLlBFRVJfUE9SVCxcclxuLy8gICAgIHBhdGg6ICcvbXlhcHAnXHJcbi8vIH0pXHJcblxyXG4vLyBwZWVyLm9uKCdvcGVuJywgaWQgPT4ge1xyXG4vLyAgICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cIilcclxuLy8gICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT09PT09PT09PT1cIiArIGlkICsgXCI9PT09PT09PT09PT09PT09XCIpXHJcbi8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkFwcGxpY2F0aW9uXCIpLnNldEF0dHJpYnV0ZSgnZGF0YS1wZWVyJywgaWQgKVxyXG4vLyAgICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cIilcclxuLy8gfSlcclxuXHJcblxyXG5cclxuLy8gLy8gLy9DYWxsZWVcclxuLy8gcGVlci5vbignY2FsbCcsIGNhbGwgPT4ge1xyXG4vLyAgICAgb3BlblN0cmVhbSgpXHJcbi8vICAgICAudGhlbihzdHJlYW0gPT4ge1xyXG4vLyAgICAgICAgIGNhbGwuYW5zd2VyKHN0cmVhbSk7XHJcbi8vICAgICAgICAgcGxheVN0cmVhbSgnbG9jYWxTdHJlYW0nLCBzdHJlYW0pO1xyXG4vLyAgICAgICAgIGNhbGwub24oJ3N0cmVhbScsIHJlbW90ZVN0cmVhbSA9PiBwbGF5U3RyZWFtKCdyZW1vdGVTdHJlYW0nLCByZW1vdGVTdHJlYW0pKTtcclxuLy8gICAgIH0pXHJcbi8vICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhcInBlZXIub24oJ2NhbGwnXCIpXHJcbi8vICAgICB9KVxyXG4vLyB9KTtcclxuXHJcbi8vICQoJyN1bFVzZXInKS5vbignY2xpY2snLCAnbGknLCBmdW5jdGlvbigpIHtcclxuLy8gICAgIGNvbnN0IGlkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4vLyAgICAgY29uc29sZS5sb2coaWQpO1xyXG4vLyAgICAgb3BlblN0cmVhbSgpXHJcbi8vICAgICAudGhlbihzdHJlYW0gPT4ge1xyXG4vLyAgICAgICAgIHBsYXlTdHJlYW0oJ2xvY2FsU3RyZWFtJywgc3RyZWFtKTtcclxuLy8gICAgICAgICBjb25zdCBjYWxsID0gcGVlci5jYWxsKGlkLCBzdHJlYW0pO1xyXG4vLyAgICAgICAgIGNhbGwub24oJ3N0cmVhbScsIHJlbW90ZVN0cmVhbSA9PiBwbGF5U3RyZWFtKCdyZW1vdGVTdHJlYW0nLCByZW1vdGVTdHJlYW0pKTtcclxuLy8gICAgIH0pO1xyXG4vLyB9KTtcclxuXHJcbi8vIGZ1bmN0aW9uIG9wZW5TdHJlYW0oKSB7XHJcbi8vICAgICBjb25zdCBjb25maWcgPSB7IGF1ZGlvOiBmYWxzZSwgdmlkZW86IHRydWUgfTtcclxuLy8gICAgIHJldHVybiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShjb25maWcpO1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBwbGF5U3RyZWFtKGlkVmlkZW9UYWcsIHN0cmVhbSkge1xyXG4vLyAgICAgY29uc3QgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZFZpZGVvVGFnKTtcclxuLy8gICAgIHZpZGVvLnNyY09iamVjdCA9IHN0cmVhbTtcclxuLy8gICAgIHZpZGVvLnBsYXkoKTtcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gZ2V0UGVlclVzZXJDaGFubmVsKCBjaGFubmVsSW5mb3IsIHVzZXIsIGNsaWVudCApe1xyXG5cclxuLy8gICAgIHZhciBjaGFubmVsSWQgPSBjaGFubmVsSW5mb3IuaWQsXHJcbi8vICAgICBhY2Nlc3MgPSB1c2VyLnRva2Vucy50b2tlbkFjY2Vzc1xyXG4vLyAgICAgaWYoIHNvY2tldCApe1xyXG4vLyAgICAgICAgIHNvY2tldC5lbWl0KEVWRU5ULlNFTkRfUEVFUiwgeyBjaGFubmVsSWQsIGFjY2VzcywgLi4uY2xpZW50IH0pXHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIG9wZW5TdHJlYW0oKVxyXG4vLyAudGhlbihzdHJlYW0gPT4gcGxheVN0cmVhbSgnbG9jYWxTdHJlYW0nLCBzdHJlYW0pKTtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc29ja2V0TGlzdGVubmVyKCBzb2NrZXQsIGluc3RhbmNlQXBwICl7XHJcblxyXG4gICAgc29ja2V0Lm9uKEVWRU5ULlVTRVJfT05MSU5FX05PVEksIGRhdGEgPT4ge1xyXG4gICAgICAgIC8vLyBcclxuICAgICAgICBpbnN0YW5jZUFwcC5wcm9wcy5kaXNwYXRjaChhZGRVc2VyT25saW5lKCBkYXRhLnVzZXIgKSlcclxuICAgIH0pXHJcbiAgICBcclxuICAgIHNvY2tldC5vbihFVkVOVC5VU0VSX09GRkxJTkVfTk9USSwgZGF0YSA9PiB7XHJcbiAgICAgICAgLy8vIFxyXG4gICAgICAgIGluc3RhbmNlQXBwLnByb3BzLmRpc3BhdGNoKHJlbW92ZVVzZXJPbmxpbmUoIGRhdGEudXNlciApKVxyXG4gICAgfSlcclxuXHJcbiAgICBzb2NrZXQub24oRVZFTlQuUkVTUE9OU0VfTUVTU0FHRSwgZGF0YSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coRVZFTlQuUkVTUE9OU0VfTUVTU0FHRSwgZGF0YSlcclxuICAgICAgICB2YXIgeyB1c2VyLCB0b2tlbiwgbWVzc2FnZSwgc3R5bGUsIGF0dGFjaG1lbnQsIGNoYW5uZWwsIGRldGVjdCB9ID0gZGF0YSBcclxuICAgICAgICB2YXIgdXNlckxvY2FsID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxyXG4gICAgICAgIGlmKCB1c2VyTG9jYWwgJiYgdXNlckxvY2FsLmlkID09IHVzZXIgJiYgdXNlckxvY2FsLnRva2Vucy50b2tlbkFjY2VzcyA9PSB0b2tlbiApe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5zdGFuY2VBcHAucHJvcHMuZGlzcGF0Y2goIGFkZE1lc3NhZ2VTZW5kVG9NZSh7IHR5cGU6ICh1c2VyTG9jYWwuaWQgPT0gdXNlciksIGNvbnRlbnQ6IG1lc3NhZ2UsIHN0eWxlLCBhdHRhY2htZW50LCBjaGFubmVsIH0pIClcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgICBzb2NrZXQub24oRVZFTlQuUkVTUE9OU0VfVFlQSU5HLCBkYXRhID0+IHtcclxuXHJcbiAgICAgICAgdmFyIHsgdXNlciwgdG9rZW4sIGNoYW5uZWwgfSA9IGRhdGEgXHJcbiAgICAgICAgdmFyIHVzZXJMb2NhbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSlcclxuICAgICAgICBpZiggdXNlckxvY2FsICYmIHVzZXJMb2NhbC5pZCA9PSB1c2VyICYmIHVzZXJMb2NhbC50b2tlbnMudG9rZW5BY2Nlc3MgPT0gdG9rZW4gKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih0aW1lb3V0VHlwaW5nKXtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0VHlwaW5nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBkb21UeXBpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLXR5cGluZ1wiKVxyXG4gICAgICAgICAgICBpZihkb21UeXBpbmcuZ2V0QXR0cmlidXRlKFwiY2hhbm5lbFwiKSA9PSBjaGFubmVsKVxyXG4gICAgICAgICAgICBkb21UeXBpbmcuY2xhc3NMaXN0LmFkZChcInNob3dcIilcclxuICAgICAgICAgICAgLy8vIHNjcm9sbCBib3R0b20gXHJcbiAgICAgICAgICAgIC8vIHZhciBpbnB1dE1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlzLXdyaXRlLW1lc3NhZ2VcIilcclxuICAgICAgICAgICAgLy8gaWYoaW5wdXRNZXNzYWdlLmNsYXNzTGlzdC5jb250YWlucyhcImZvbGxvdy1jb252ZXJzYXRpb25cIikpe1xyXG4gICAgICAgICAgICAvLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXNjcm9sbC10by1ib3R0b20nKS5zY3JvbGxUb3AgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXNjcm9sbC10by1ib3R0b20nKS5zY3JvbGxIZWlnaHRcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB2YXIgdGltZW91dFR5cGluZyA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZG9tVHlwaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy10eXBpbmdcIilcclxuICAgICAgICAgICAgICAgIGlmKGRvbVR5cGluZy5nZXRBdHRyaWJ1dGUoXCJjaGFubmVsXCIpID09IGNoYW5uZWwpXHJcbiAgICAgICAgICAgICAgICBkb21UeXBpbmcuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIilcclxuICAgICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBcclxuICAgIHNvY2tldC5vbihFVkVOVC5EVVBMSUNBVElPTl9UQUIsIGRhdGEgPT4ge1xyXG5cclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IENPTkZJRy5TRVJWRVJfUEhQLlVSTFxyXG4gICAgfSlcclxuXHJcbiAgICBzb2NrZXQub24oRVZFTlQuUkVBRF9NRVNTQUdFX0FMTF9SRVNQT05TRSwgZGF0YSA9PiB7XHJcblxyXG4gICAgICAgIGluc3RhbmNlQXBwLnByb3BzLmRpc3BhdGNoKCByZWFkQWxsTWVzc2FnZUNoYW5uZWxBY3RpdmUoKSApXHJcbiAgICB9KVxyXG5cclxuICAgIHNvY2tldC5vbihFVkVOVC5SRVNQT05TRV9VU0VSX0dFVF9CT09LSU5HLCBkYXRhID0+IHtcclxuXHJcbiAgICAgICAgdmFyIGJvb2tpbmdzID0gZGF0YS5ib29raW5nc1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGJvb2tpbmdzLCBFVkVOVC5SRVNQT05TRV9VU0VSX0dFVF9CT09LSU5HKVxyXG4gICAgICAgIGluc3RhbmNlQXBwLnByb3BzLmRpc3BhdGNoKHNldHRlckJvb2tpbmdzKHsgZmV0Y2g6IHRydWUsIGRhdGE6IGJvb2tpbmdzIH0pKVxyXG4gICAgfSlcclxuXHJcbiAgICBzb2NrZXQub24oRVZFTlQuUkVTUE9OU0VfVVNFUl9DSEFOR0VfQk9PS0lORywgZGF0YSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coIGRhdGEsIEVWRU5ULlJFU1BPTlNFX1VTRVJfQ0hBTkdFX0JPT0tJTkcpXHJcblxyXG4gICAgICAgIHZhciB7IHVzZXIsIHRva2VuLCBtZXNzYWdlLCBzdHlsZSwgYXR0YWNobWVudCwgY2hhbm5lbCB9ID0gZGF0YSBcclxuICAgICAgICB2YXIgdXNlckxvY2FsID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxyXG4gICAgICAgIHZhciBtZXNzYWdlRGF0YSA9IHsgdHlwZTogKHVzZXJMb2NhbC5pZCA9PSB1c2VyKSwgY29udGVudDogbWVzc2FnZSwgc3R5bGUsIGF0dGFjaG1lbnQsIGNoYW5uZWwgfVxyXG4gICAgICAgIGluc3RhbmNlQXBwLnByb3BzLmRpc3BhdGNoKCBhZGRNZXNzYWdlU2VuZFRvTWUobWVzc2FnZURhdGEpIClcclxuICAgICAgICBcclxuICAgICAgICB2YXIgYm9va2luZ1VwZGF0ZSA9IHsgLi4uZGF0YS5ib29raW5nLCB1cGRhdGU6IHRydWUgfVxyXG4gICAgICAgIGluc3RhbmNlQXBwLnByb3BzLmRpc3BhdGNoKGNoYW5nZUJvb2tpbmcoYm9va2luZ1VwZGF0ZSkpXHJcbiAgICAgICAgJC5tb2RhbC5jbG9zZSgpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfSlcclxuXHJcbiAgICBzb2NrZXQub24oRVZFTlQuUkVTUE9OU0VfVVNFUl9DSEFOR0VfQk9PS0lOR19FUlJPUiwgZGF0YSA9PiB7XHJcblxyXG4gICAgICAgICQoXCIjanMtYm9va2luZy1lcnJvclwiKS5maW5kKFwiLmFsZXJ0LWRhbmdlclwiKS50ZXh0KGRhdGEubWVzc2FnZSlcclxuICAgICAgICAkKFwiI2pzLWJvb2tpbmctZXJyb3JcIikubW9kYWwoe1xyXG4gICAgICAgICAgICBlc2NhcGVDbG9zZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNsaWNrQ2xvc2U6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93Q2xvc2U6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH0pXHJcbn0iLCJ2YXIgdXNlciA9IG51bGxcclxuaWYgKHR5cGVvZihTdG9yYWdlKSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpXHJcbn1cclxuXHJcbmltcG9ydCBUWVBFIGZyb20gXCIuLi9hY3Rpb24vdHlwZS5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSB1c2VyLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFRZUEUuVVNFUi5TRVRURVJfVVNFUjpcclxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59IiwidmFyIGJvb2tpbmdzID0ge1xyXG4gICAgZmV0Y2g6IGZhbHNlLFxyXG4gICAgZGF0YTogW11cclxufVxyXG5cclxuaW1wb3J0IFRZUEUgZnJvbSBcIi4uL2FjdGlvbi90eXBlLmpzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGJvb2tpbmdzLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFRZUEUuQk9PS0lORy5TRVRURVJfQk9PS0lORzpcclxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkXHJcblxyXG4gICAgICAgIGNhc2UgVFlQRS5CT09LSU5HLkNIQU5HRV9CT09LSU5HOlxyXG5cclxuICAgICAgICAgICAgaWYoIXN0YXRlLmRhdGEuc29tZShib29raW5nID0+IGJvb2tpbmcuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmJvb2tpbmdfaWQpKXtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGRhdGFCb29raW5nID0gc3RhdGUuZGF0YS5tYXAoIGJvb2tpbmcgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoYm9va2luZy5pZCA9PT0gYWN0aW9uLnBheWxvYWQuYm9va2luZ19pZCkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5ib29raW5nLCAuLi5hY3Rpb24ucGF5bG9hZCB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYm9va2luZ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi4gc3RhdGUsIGRhdGE6IGRhdGFCb29raW5nIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59IiwiZnVuY3Rpb24gZGV0ZWN0Q2xpZW50KCkge1xyXG4gIHtcclxuICAgIHZhciB1bmtub3duID0gJ3Vua25vd24nO1xyXG4gICAgLy8gYnJvd3NlclxyXG4gICAgdmFyIG5WZXIgPSBuYXZpZ2F0b3IuYXBwVmVyc2lvbjtcclxuICAgIHZhciBuQWd0ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICAgIHZhciBicm93c2VyID0gbmF2aWdhdG9yLmFwcE5hbWU7XHJcbiAgICB2YXIgdmVyc2lvbiA9ICcnICsgcGFyc2VGbG9hdChuYXZpZ2F0b3IuYXBwVmVyc2lvbik7XHJcbiAgICB2YXIgbWFqb3JWZXJzaW9uID0gcGFyc2VJbnQobmF2aWdhdG9yLmFwcFZlcnNpb24sIDEwKTtcclxuICAgIHZhciBuYW1lT2Zmc2V0LCB2ZXJPZmZzZXQsIGl4O1xyXG4gICAgLy8gT3BlcmFcclxuICAgIGlmICgodmVyT2Zmc2V0ID0gbkFndC5pbmRleE9mKCdPcGVyYScpKSAhPSAtMSkge1xyXG4gICAgICBicm93c2VyICs9ICdPcGVyYSc7XHJcbiAgICAgIHZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA2KTtcclxuICAgICAgaWYgKCh2ZXJPZmZzZXQgPSBuQWd0LmluZGV4T2YoJ1ZlcnNpb24nKSkgIT0gLTEpIHtcclxuICAgICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgOCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIE9wZXJhIE5leHRcclxuICAgIGlmICgodmVyT2Zmc2V0ID0gbkFndC5pbmRleE9mKCdPUFInKSkgIT0gLTEpIHtcclxuICAgICAgYnJvd3NlciArPSAnT3BlcmEnO1xyXG4gICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgNCk7XHJcbiAgICB9XHJcbiAgICAvLyBFZGdlXHJcbiAgICBlbHNlIGlmICgodmVyT2Zmc2V0ID0gbkFndC5pbmRleE9mKCdFZGcnKSkgIT0gLTEpIHtcclxuICAgICAgYnJvd3NlciArPSAnTWljcm9zb2Z0IEVkZ2UnO1xyXG4gICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgNSk7XHJcbiAgICB9XHJcbiAgICAvLyBNU0lFXHJcbiAgICBlbHNlIGlmICgodmVyT2Zmc2V0ID0gbkFndC5pbmRleE9mKCdNU0lFJykpICE9IC0xKSB7XHJcbiAgICAgIGJyb3dzZXIgKz0gJ01pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3Jlcic7XHJcbiAgICAgIHZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA1KTtcclxuICAgIH1cclxuICAgIC8vIENvY0NvY1xyXG4gICAgZWxzZSBpZiAoKHZlck9mZnNldCA9IG5BZ3QuaW5kZXhPZignY29jJykpICE9IC0xKSB7XHJcbiAgICAgIGJyb3dzZXIgKz0gJ0NvY0NvYyc7XHJcbiAgICAgIHZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA4KTtcclxuICAgIH1cclxuICAgIC8vIENocm9tZVxyXG4gICAgZWxzZSBpZiAoKHZlck9mZnNldCA9IG5BZ3QuaW5kZXhPZignQ2hyb21lJykpICE9IC0xKSB7XHJcbiAgICAgIGJyb3dzZXIgKz0gJ0Nocm9tZSc7XHJcbiAgICAgIHZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA3KTtcclxuICAgIH1cclxuICAgIC8vIFNhZmFyaVxyXG4gICAgZWxzZSBpZiAoKHZlck9mZnNldCA9IG5BZ3QuaW5kZXhPZignU2FmYXJpJykpICE9IC0xKSB7XHJcbiAgICAgIGJyb3dzZXIgKz0gJ1NhZmFyaSc7XHJcbiAgICAgIHZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA3KTtcclxuICAgICAgaWYgKCh2ZXJPZmZzZXQgPSBuQWd0LmluZGV4T2YoJ1ZlcnNpb24nKSkgIT0gLTEpIHtcclxuICAgICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgOCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIEZpcmVmb3hcclxuICAgIGVsc2UgaWYgKCh2ZXJPZmZzZXQgPSBuQWd0LmluZGV4T2YoJ0ZpcmVmb3gnKSkgIT0gLTEpIHtcclxuICAgICAgYnJvd3NlciArPSAnRmlyZWZveCc7XHJcbiAgICAgIHZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyA4KTtcclxuICAgIH1cclxuICAgIC8vIE1TSUUgMTErXHJcbiAgICBlbHNlIGlmIChuQWd0LmluZGV4T2YoJ1RyaWRlbnQvJykgIT0gLTEpIHtcclxuICAgICAgYnJvd3NlciArPSAnTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyJztcclxuICAgICAgdmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKG5BZ3QuaW5kZXhPZigncnY6JykgKyAzKTtcclxuICAgIH1cclxuICAgIC8vIE90aGVyIGJyb3dzZXJzXHJcbiAgICBlbHNlIGlmICgobmFtZU9mZnNldCA9IG5BZ3QubGFzdEluZGV4T2YoJyAnKSArIDEpIDwgKHZlck9mZnNldCA9IG5BZ3QubGFzdEluZGV4T2YoJy8nKSkpIHtcclxuICAgICAgYnJvd3NlciA9IG5BZ3Quc3Vic3RyaW5nKG5hbWVPZmZzZXQsIHZlck9mZnNldCk7XHJcbiAgICAgIHZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyh2ZXJPZmZzZXQgKyAxKTtcclxuICAgICAgaWYgKGJyb3dzZXIudG9Mb3dlckNhc2UoKSA9PSBicm93c2VyLnRvVXBwZXJDYXNlKCkpIHtcclxuICAgICAgICBicm93c2VyID0gbmF2aWdhdG9yLmFwcE5hbWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHRyaW0gdGhlIHZlcnNpb24gc3RyaW5nXHJcbiAgICBpZiAoKGl4ID0gdmVyc2lvbi5pbmRleE9mKCc7JykpICE9IC0xKSB2ZXJzaW9uID0gdmVyc2lvbi5zdWJzdHJpbmcoMCwgaXgpO1xyXG4gICAgaWYgKChpeCA9IHZlcnNpb24uaW5kZXhPZignICcpKSAhPSAtMSkgdmVyc2lvbiA9IHZlcnNpb24uc3Vic3RyaW5nKDAsIGl4KTtcclxuICAgIGlmICgoaXggPSB2ZXJzaW9uLmluZGV4T2YoJyknKSkgIT0gLTEpIHZlcnNpb24gPSB2ZXJzaW9uLnN1YnN0cmluZygwLCBpeCk7XHJcbiAgICBtYWpvclZlcnNpb24gPSBwYXJzZUludCgnJyArIHZlcnNpb24sIDEwKTtcclxuICAgIGlmIChpc05hTihtYWpvclZlcnNpb24pKSB7XHJcbiAgICAgIHZlcnNpb24gPSAnJyArIHBhcnNlRmxvYXQobmF2aWdhdG9yLmFwcFZlcnNpb24pO1xyXG4gICAgICBtYWpvclZlcnNpb24gPSBwYXJzZUludChuYXZpZ2F0b3IuYXBwVmVyc2lvbiwgMTApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHN5c3RlbVxyXG4gICAgdmFyIG9zID0gdW5rbm93bjtcclxuICAgIHZhciBjbGllbnRTdHJpbmdzID0gW3tcclxuICAgICAgczogJ1dpbmRvd3MgMTAnLFxyXG4gICAgICByOiAvKFdpbmRvd3MgMTAuMHxXaW5kb3dzIE5UIDEwLjApL1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgczogJ1dpbmRvd3MgOC4xJyxcclxuICAgICAgcjogLyhXaW5kb3dzIDguMXxXaW5kb3dzIE5UIDYuMykvXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzOiAnV2luZG93cyA4JyxcclxuICAgICAgcjogLyhXaW5kb3dzIDh8V2luZG93cyBOVCA2LjIpL1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgczogJ1dpbmRvd3MgNycsXHJcbiAgICAgIHI6IC8oV2luZG93cyA3fFdpbmRvd3MgTlQgNi4xKS9cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHM6ICdXaW5kb3dzIFZpc3RhJyxcclxuICAgICAgcjogL1dpbmRvd3MgTlQgNi4wL1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgczogJ1dpbmRvd3MgU2VydmVyIDIwMDMnLFxyXG4gICAgICByOiAvV2luZG93cyBOVCA1LjIvXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzOiAnV2luZG93cyBYUCcsXHJcbiAgICAgIHI6IC8oV2luZG93cyBOVCA1LjF8V2luZG93cyBYUCkvXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzOiAnV2luZG93cyAyMDAwJyxcclxuICAgICAgcjogLyhXaW5kb3dzIE5UIDUuMHxXaW5kb3dzIDIwMDApL1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgczogJ1dpbmRvd3MgTUUnLFxyXG4gICAgICByOiAvKFdpbiA5eCA0LjkwfFdpbmRvd3MgTUUpL1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgczogJ1dpbmRvd3MgOTgnLFxyXG4gICAgICByOiAvKFdpbmRvd3MgOTh8V2luOTgpL1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgczogJ1dpbmRvd3MgOTUnLFxyXG4gICAgICByOiAvKFdpbmRvd3MgOTV8V2luOTV8V2luZG93c185NSkvXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzOiAnV2luZG93cyBOVCA0LjAnLFxyXG4gICAgICByOiAvKFdpbmRvd3MgTlQgNC4wfFdpbk5UNC4wfFdpbk5UfFdpbmRvd3MgTlQpL1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgczogJ1dpbmRvd3MgQ0UnLFxyXG4gICAgICByOiAvV2luZG93cyBDRS9cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHM6ICdXaW5kb3dzIDMuMTEnLFxyXG4gICAgICByOiAvV2luMTYvXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzOiAnQW5kcm9pZCcsXHJcbiAgICAgIHI6IC9BbmRyb2lkL1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgczogJ09wZW4gQlNEJyxcclxuICAgICAgcjogL09wZW5CU0QvXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzOiAnU3VuIE9TJyxcclxuICAgICAgcjogL1N1bk9TL1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgczogJ0xpbnV4JyxcclxuICAgICAgcjogLyhMaW51eHxYMTEpL1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgczogJ2lPUycsXHJcbiAgICAgIHI6IC8oaVBob25lfGlQYWR8aVBvZCkvXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzOiAnTWFjIE9TIFgnLFxyXG4gICAgICByOiAvTWFjIE9TIFgvXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzOiAnTWFjIE9TJyxcclxuICAgICAgcjogLyhNYWNQUEN8TWFjSW50ZWx8TWFjX1Bvd2VyUEN8TWFjaW50b3NoKS9cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHM6ICdRTlgnLFxyXG4gICAgICByOiAvUU5YL1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgczogJ1VOSVgnLFxyXG4gICAgICByOiAvVU5JWC9cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHM6ICdCZU9TJyxcclxuICAgICAgcjogL0JlT1MvXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzOiAnT1MvMicsXHJcbiAgICAgIHI6IC9PU1xcLzIvXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzOiAnU2VhcmNoIEJvdCcsXHJcbiAgICAgIHI6IC8obnVoa3xHb29nbGVib3R8WWFtbXlib3R8T3BlbmJvdHxTbHVycHxNU05Cb3R8QXNrIEplZXZlc1xcL1Rlb21hfGlhX2FyY2hpdmVyKS9cclxuICAgIH1cclxuICAgIF07XHJcbiAgICBmb3IgKHZhciBpZCBpbiBjbGllbnRTdHJpbmdzKSB7XHJcbiAgICAgIHZhciBjcyA9IGNsaWVudFN0cmluZ3NbaWRdO1xyXG4gICAgICBpZiAoY3Muci50ZXN0KG5BZ3QpKSB7XHJcbiAgICAgICAgb3MgPSBjcy5zO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgb3NWZXJzaW9uID0gdW5rbm93bjtcclxuICAgIGlmICgvV2luZG93cy8udGVzdChvcykpIHtcclxuICAgICAgb3NWZXJzaW9uID0gL1dpbmRvd3MgKC4qKS8uZXhlYyhvcylbMV07XHJcbiAgICAgIG9zID0gJ1dpbmRvd3MnO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoIChvcykge1xyXG4gICAgICBjYXNlICdNYWMgT1MgWCc6XHJcbiAgICAgICAgb3NWZXJzaW9uID0gL01hYyBPUyBYICgxMFtcXC5cXF9cXGRdKykvLmV4ZWMobkFndClbMV07XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlICdBbmRyb2lkJzpcclxuICAgICAgICBvc1ZlcnNpb24gPSAvQW5kcm9pZCAoW1xcLlxcX1xcZF0rKS8uZXhlYyhuQWd0KVsxXTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ2lPUyc6XHJcbiAgICAgICAgb3NWZXJzaW9uID0gL09TIChcXGQrKV8oXFxkKylfPyhcXGQrKT8vLmV4ZWMoblZlcik7XHJcbiAgICAgICAgb3NWZXJzaW9uID0gb3NWZXJzaW9uWzFdICsgJy4nICsgb3NWZXJzaW9uWzJdICsgJy4nICsgKG9zVmVyc2lvblszXSB8IDApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGJyb3dzZXI6IGJyb3dzZXIudG9TdHJpbmcoKSxcclxuICAgIGJyb3dzZXJNYWpvclZlcnNpb246IG1ham9yVmVyc2lvbi50b1N0cmluZygpLFxyXG4gICAgYnJvd3NlclZlcnNpb246IHZlcnNpb24udG9TdHJpbmcoKSxcclxuICAgIG9zOiBvcy50b1N0cmluZygpLFxyXG4gICAgb3NWZXJzaW9uOiBvc1ZlcnNpb24udG9TdHJpbmcoKVxyXG4gIH1cclxufVxyXG5pZiAodHlwZW9mKFN0b3JhZ2UpICE9PSAndW5kZWZpbmVkJykge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkZXRlY3QnLCBKU09OLnN0cmluZ2lmeShkZXRlY3RDbGllbnQoKSkpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERldGVjdENsaWVudFJlZHVjZXIoc3RhdGUgPSBkZXRlY3RDbGllbnQoKSkge1xyXG4gIHJldHVybiBzdGF0ZTtcclxufSIsImltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tICdyZWR1eCc7XHJcblxyXG4vLy90aMOqbSBjw6FjIHJlZHVjZXIgZnVudGlvbiBj4bqnbiDEkcaw4bujYyBjb21iaW5lIHbDoG8gxJHDonlcclxuaW1wb3J0IERldGVjdENsaWVudFJlZHVjZXIgZnJvbSBcIi4vZGV0ZWN0LmpzXCI7XHJcbmltcG9ydCB1c2VyQ2hhdCBmcm9tICcuL3VzZXItY2hhdC5qcyc7XHJcbmltcG9ydCBTb2NrZXRSZWR1Y2VyIGZyb20gXCIuL3NvY2tldC5qc1wiXHJcbmltcG9ydCBBdXRoIGZyb20gXCIuL2F1dGguanNcIlxyXG5pbXBvcnQgQm9va2luZyBmcm9tIFwiLi9ib29raW5nLmpzXCJcclxuLy8vLyBraOG7n2kgdOG6oW8gMSBiaeG6v24gYmnhu4N1IGRp4buFbiBSRURVQ0VSIEFMTCBcclxuY29uc3QgUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBjbGllbnQgIDogRGV0ZWN0Q2xpZW50UmVkdWNlcixcclxuICAgIHVzZXJDaGF0OiB1c2VyQ2hhdCxcclxuICAgIHNvY2tldCAgOiBTb2NrZXRSZWR1Y2VyLFxyXG4gICAgdXNlcnMgICA6IEF1dGgsXHJcbiAgICBib29raW5nIDogQm9va2luZyxcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IFJlZHVjZXI7IiwiaW1wb3J0IFRZUEUgZnJvbSAnLi4vYWN0aW9uL3R5cGUuanMnO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTb2NrZXRSZWR1Y2VyKHN0YXRlID0gbnVsbCAsIGFjdGlvbikge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgVFlQRS5TT0NDS0VULlNFVF9TT0NLRVRfSU86XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsIlxyXG4vLyBpZih0eXBlb2YgdXNlckRlZmF1bHQgPT0gdW5kZWZpbmVkKXtcclxuLy8gICB2YXIgdXNlckRlZmF1bHQgPSAnW10nXHJcbi8vIH1cclxudmFyIHVzZXJDaGF0RGVmYXVsdCA9IFtdO1xyXG5pbXBvcnQgVFlQRSBmcm9tIFwiLi4vYWN0aW9uL3R5cGUuanNcIjtcclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnXCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gdXNlckNoYXREZWZhdWx0LCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFRZUEUuQ0hBTk5FTC5BRERfVVNFUl9PTkxJTkU6XHJcbiAgICAgIHJldHVybiBzdGF0ZS5tYXAoIGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmKGl0ZW0udXNlci5pZCA9PSBhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgdXNlciA6IHsgLi4uIGl0ZW0udXNlciwgb25saW5lIDogdHJ1ZSB9IH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uaXRlbSB9XHJcbiAgICAgIH0pXHJcbiAgICBjYXNlIFRZUEUuQ0hBTk5FTC5SRU1PVkVfVVNFUl9PTkxJTkU6XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlLm1hcCggaXRlbSA9PiB7XHJcbiAgICAgICAgICBpZihpdGVtLnVzZXIuaWQgPT0gYWN0aW9uLnBheWxvYWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgdXNlciA6IHsgLi4uIGl0ZW0udXNlciwgb25saW5lIDogZmFsc2UgfSB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4geyAuLi5pdGVtIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgIGNhc2UgVFlQRS5DSEFULkNIQU5HRV9VU0VSX0NIQVRfREVGQVVMVDpcclxuICAgICAgcmV0dXJuIHN0YXRlLm1hcCggaXRlbSA9PiB7XHJcbiAgICAgICAgaWYoaXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQpIHtcclxuICAgICAgICAgIHJldHVybiB7IC4uLml0ZW0sIGlzQWN0aXZlIDogdHJ1ZSB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IC4uLml0ZW0sIGlzQWN0aXZlIDogZmFsc2UgfVxyXG4gICAgICB9KVxyXG4gICAgY2FzZSBUWVBFLkNIQU5ORUwuU0VUVEVSX0NIQU5ORUw6XHJcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgY2FzZSBUWVBFLkNIQU5ORUwuQUREX01FU1NBR0U6XHJcbiAgICAgIHJldHVybiBzdGF0ZS5tYXAoIGNoYW5uZWwgPT4ge1xyXG4gICAgICAgIGlmKGNoYW5uZWwuaXNBY3RpdmUgPT09IHRydWUpIHtcclxuICAgICAgICAgIHJldHVybiB7IC4uLmNoYW5uZWwsIG1lc3NhZ2UgOiBbIC4uLmNoYW5uZWwubWVzc2FnZSwgYWN0aW9uLnBheWxvYWRdIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNoYW5uZWxcclxuICAgICAgfSlcclxuICAgIGNhc2UgVFlQRS5DSEFOTkVMLlJFQURfQUxMX01FU1NBR0VfQ0hBTk5FTF9BQ1RJVkU6XHJcbiAgICAgIHJldHVybiBzdGF0ZS5tYXAoIGNoYW5uZWwgPT4ge1xyXG4gICAgICAgIGlmKGNoYW5uZWwuaXNBY3RpdmUgPT09IHRydWUpIHtcclxuICAgICAgICAgIHZhciBtZXNzYWdlcyA9IGNoYW5uZWwubWVzc2FnZVxyXG4gICAgICAgICAgbWVzc2FnZXMgPSBtZXNzYWdlcy5tYXAoIG1lc3NhZ2UgPT4geyByZXR1cm4geyAuLi5tZXNzYWdlLCByZWFkOiB0cnVlIH0gfSlcclxuICAgICAgICAgIHJldHVybiB7IC4uLmNoYW5uZWwsIG1lc3NhZ2UgOiBtZXNzYWdlcyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjaGFubmVsXHJcbiAgICAgIH0pXHJcbiAgICBjYXNlIFRZUEUuQ0hBTk5FTC5BRERfTUVTU0FHRV9TRU5EX1RPX01FOlxyXG4gICAgICByZXR1cm4gc3RhdGUubWFwKCBjaGFubmVsID0+IHtcclxuICAgICAgICBpZihjaGFubmVsLmlkID09PSBhY3Rpb24ucGF5bG9hZC5jaGFubmVsKSB7XHJcbiAgICAgICAgICByZXR1cm4geyAuLi5jaGFubmVsLCBtZXNzYWdlIDogWyAuLi5jaGFubmVsLm1lc3NhZ2UsIGFjdGlvbi5wYXlsb2FkXSB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjaGFubmVsXHJcbiAgICAgIH0pXHJcblxyXG4gICAgY2FzZSBUWVBFLkNIQU5ORUwuU0VUX0FDVElWRTpcclxuICAgICAgdmFyIGlzQ2hhbmdlZCA9IGZhbHNlXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZGVidWdcIilcclxuICAgICAgdmFyIG5ld1N0YXRlID0gc3RhdGUubWFwKCBjaGFubmVsID0+IHtcclxuICAgICAgICBpZiggIWlzQ2hhbmdlZCAmJiBjaGFubmVsLmNoYW5uZWxOYW1lICYmIGNoYW5uZWwuY2hhbm5lbE5hbWUuaW5jbHVkZXMoYWN0aW9uLnBheWxvYWQuY2hhbm5lbE5hbWUpKXtcclxuICAgICAgICAgIGlzQ2hhbmdlZCA9IHRydWVcclxuICAgICAgICAgIHJldHVybiB7IC4uLmNoYW5uZWwsIGlzQWN0aXZlIDogdHJ1ZSB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IC4uLmNoYW5uZWwsIGlzQWN0aXZlIDogZmFsc2UgfVxyXG4gICAgICB9KVxyXG4gICAgICBpZiggaXNDaGFuZ2VkICl7XHJcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0yIS4vY2hhdC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTIhLi9lbW9qaS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTIhLi9oZWFkLWluZm8uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0yIS4vaW5wdXQtc2VuZC1jaGF0LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMiEuL2xpc3QtbWVzc2FnZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTIhLi9saXN0LXVzZXIuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0yIS4vbWVzc2FnZS1jaGF0LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMiEuL3NpZGViYXIuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0yIS4vaW5kZXguc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==