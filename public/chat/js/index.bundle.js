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
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.bg-chat-temalate {\n  background: -moz-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -webkit-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -o-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -ms-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n}\n\n.wrapper-page-chat {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.wrapper-page-chat:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n\n.error {\n  color: #ff3547;\n}", ""]);
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
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n/**\n* display\n*/\n*,\n:after,\n:before {\n  box-sizing: border-box;\n}\n\n:focus {\n  outline: 0 !important;\n  text-decoration: none !important;\n}\n\n.d-none {\n  display: none !important;\n}\n\n.d-inline-block {\n  display: inline-block !important;\n}\n\n.d-block {\n  display: block !important;\n}\n\n.d-table {\n  display: table !important;\n}\n\n.d-table-row {\n  display: table-row !important;\n}\n\n.d-table-cell {\n  display: table-cell !important;\n}\n\n.d-flex {\n  display: -ms-flexbox !important;\n  display: flex !important;\n}\n\n.d-inline-flex {\n  display: -ms-inline-flexbox !important;\n  display: inline-flex !important;\n}\n\n.italic {\n  font-style: italic !important;\n}\n\n.not-italic {\n  font-style: normal !important;\n}\n\n.uppercase {\n  text-transform: uppercase !important;\n}\n\n.lowercase {\n  text-transform: lowercase !important;\n}\n\n.capitalize {\n  text-transform: capitalize !important;\n}\n\n.normal-case {\n  text-transform: none !important;\n}\n\n.underline {\n  text-decoration: underline !important;\n}\n\n.line-through {\n  text-decoration: line-through !important;\n}\n\n.no-underline {\n  text-decoration: none !important;\n}\n\n/**************************************************/\n.font-hairline {\n  font-weight: 100 !important;\n}\n\n.font-thin {\n  font-weight: 200 !important;\n}\n\n.font-light {\n  font-weight: 300 !important;\n}\n\n.font-normal {\n  font-weight: 400 !important;\n}\n\n.font-medium {\n  font-weight: 500 !important;\n}\n\n.font-semibold {\n  font-weight: 600 !important;\n}\n\n.font-bold {\n  font-weight: 700 !important;\n}\n\n.font-extrabold {\n  font-weight: 800 !important;\n}\n\n.font-black {\n  font-weight: 900 !important;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.vertical-align-middle {\n  vertical-align: middle;\n}\n\n.mg-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.rounded-circle {\n  border-radius: 50% !important;\n}\n\n.border {\n  border: 1px solid #dee2e6 !important;\n}\n\n.border-top {\n  border-top: 1px solid #dee2e6 !important;\n}\n\n.border-right {\n  border-right: 1px solid #dee2e6 !important;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #dee2e6 !important;\n}\n\n.border-left {\n  border-left: 1px solid #dee2e6 !important;\n}\n\n.text-color-red {\n  color: #f44336;\n}\n\n.text-color-pink {\n  color: #e91e63;\n}\n\n.text-color-purple {\n  color: #9c27b0;\n}\n\n.text-color-deep-purple {\n  color: #673ab7;\n}\n\n.text-color-indigo {\n  color: #3f51b5;\n}\n\n.text-color-blue {\n  color: #2196f3;\n}\n\n.text-color-light-blue {\n  color: #03a9f4;\n}\n\n.text-color-cyan {\n  color: #00bcd4;\n}\n\n.text-color-teal {\n  color: #009688;\n}\n\n.text-color-green {\n  color: #4caf50;\n}\n\n.text-color-light-green {\n  color: #8bc34a;\n}\n\n.text-color-lime {\n  color: #cddc39;\n}\n\n.text-color-yellow {\n  color: #ffeb3b;\n}\n\n.text-color-amber {\n  color: #ffc107;\n}\n\n.text-color-orange {\n  color: #ff9800;\n}\n\n.text-color-deep-orange {\n  color: #ff5722;\n}\n\n.text-color-brown {\n  color: #795548;\n}\n\n.text-color-black {\n  color: #000;\n}\n\n.text-color-white {\n  color: #fff;\n}\n\n.text-color-grey {\n  color: #9e9e9e;\n}\n\n.text-color-blue-grey {\n  color: #607d8b;\n}\n\n.text-color-primary-color-dark {\n  color: #0d47a1;\n}\n\n.text-color-secondary-color {\n  color: #aa66cc;\n}\n\n.text-color-secondary-color-dark {\n  color: #9933cc;\n}\n\n.text-color-default-color {\n  color: #2bbbad;\n}\n\n.text-color-default-color-dark {\n  color: #00695c;\n}\n\n.text-color-info-color {\n  color: #33b5e5;\n}\n\n.text-color-info-color-dark {\n  color: #0099cc;\n}\n\n.text-color-success-color {\n  color: #00c851;\n}\n\n.text-color-success-color-dark {\n  color: #007e33;\n}\n\n.text-color-warning-color {\n  color: #ffbb33;\n}\n\n.text-color-warning-color-dark {\n  color: #ff8800;\n}\n\n.text-color-danger-color {\n  color: #ff3547;\n}\n\n.text-color-danger-color-dark {\n  color: #cc0000;\n}\n\n.text-color-elegant-color {\n  color: #2e2e2e;\n}\n\n.text-color-elegant-color-dark {\n  color: #212121;\n}\n\n.text-color-stylish-color {\n  color: #4b515d;\n}\n\n.text-color-stylish-color-dark {\n  color: #3e4551;\n}\n\n.text-color-unique-color {\n  color: #3f729b;\n}\n\n.text-color-unique-color-dark {\n  color: #1c2331;\n}\n\n.text-color-special-color {\n  color: #37474f;\n}\n\n.text-color-special-color-dark {\n  color: #263238;\n}\n\n.text-color-primary {\n  color: #4285f4;\n}\n\n.text-color-danger {\n  color: #ff3547;\n}\n\n.text-color-warning {\n  color: #ffbb33;\n}\n\n.text-color-success {\n  color: #00c851;\n}\n\n.text-color-info {\n  color: #33b5e5;\n}\n\n.text-color-default {\n  color: #2bbbad;\n}\n\n.text-color-secondary {\n  color: #aa66cc;\n}\n\n.text-color-dark {\n  color: #212121;\n}\n\n.text-color-light {\n  color: #e0e0e0;\n}\n\n.text-color-grey-x {\n  color: #f9f9f9;\n}\n\n.border-color-red {\n  border-color: #f44336;\n}\n\n.border-color-pink {\n  border-color: #e91e63;\n}\n\n.border-color-purple {\n  border-color: #9c27b0;\n}\n\n.border-color-deep-purple {\n  border-color: #673ab7;\n}\n\n.border-color-indigo {\n  border-color: #3f51b5;\n}\n\n.border-color-blue {\n  border-color: #2196f3;\n}\n\n.border-color-light-blue {\n  border-color: #03a9f4;\n}\n\n.border-color-cyan {\n  border-color: #00bcd4;\n}\n\n.border-color-teal {\n  border-color: #009688;\n}\n\n.border-color-green {\n  border-color: #4caf50;\n}\n\n.border-color-light-green {\n  border-color: #8bc34a;\n}\n\n.border-color-lime {\n  border-color: #cddc39;\n}\n\n.border-color-yellow {\n  border-color: #ffeb3b;\n}\n\n.border-color-amber {\n  border-color: #ffc107;\n}\n\n.border-color-orange {\n  border-color: #ff9800;\n}\n\n.border-color-deep-orange {\n  border-color: #ff5722;\n}\n\n.border-color-brown {\n  border-color: #795548;\n}\n\n.border-color-black {\n  border-color: #000;\n}\n\n.border-color-white {\n  border-color: #fff;\n}\n\n.border-color-grey {\n  border-color: #9e9e9e;\n}\n\n.border-color-blue-grey {\n  border-color: #607d8b;\n}\n\n.border-color-primary-color-dark {\n  border-color: #0d47a1;\n}\n\n.border-color-secondary-color {\n  border-color: #aa66cc;\n}\n\n.border-color-secondary-color-dark {\n  border-color: #9933cc;\n}\n\n.border-color-default-color {\n  border-color: #2bbbad;\n}\n\n.border-color-default-color-dark {\n  border-color: #00695c;\n}\n\n.border-color-info-color {\n  border-color: #33b5e5;\n}\n\n.border-color-info-color-dark {\n  border-color: #0099cc;\n}\n\n.border-color-success-color {\n  border-color: #00c851;\n}\n\n.border-color-success-color-dark {\n  border-color: #007e33;\n}\n\n.border-color-warning-color {\n  border-color: #ffbb33;\n}\n\n.border-color-warning-color-dark {\n  border-color: #ff8800;\n}\n\n.border-color-danger-color {\n  border-color: #ff3547;\n}\n\n.border-color-danger-color-dark {\n  border-color: #cc0000;\n}\n\n.border-color-elegant-color {\n  border-color: #2e2e2e;\n}\n\n.border-color-elegant-color-dark {\n  border-color: #212121;\n}\n\n.border-color-stylish-color {\n  border-color: #4b515d;\n}\n\n.border-color-stylish-color-dark {\n  border-color: #3e4551;\n}\n\n.border-color-unique-color {\n  border-color: #3f729b;\n}\n\n.border-color-unique-color-dark {\n  border-color: #1c2331;\n}\n\n.border-color-special-color {\n  border-color: #37474f;\n}\n\n.border-color-special-color-dark {\n  border-color: #263238;\n}\n\n.border-color-primary {\n  border-color: #4285f4;\n}\n\n.border-color-danger {\n  border-color: #ff3547;\n}\n\n.border-color-warning {\n  border-color: #ffbb33;\n}\n\n.border-color-success {\n  border-color: #00c851;\n}\n\n.border-color-info {\n  border-color: #33b5e5;\n}\n\n.border-color-default {\n  border-color: #2bbbad;\n}\n\n.border-color-secondary {\n  border-color: #aa66cc;\n}\n\n.border-color-dark {\n  border-color: #212121;\n}\n\n.border-color-light {\n  border-color: #e0e0e0;\n}\n\n.border-color-grey-x {\n  border-color: #f9f9f9;\n}\n\n.bg-color-red {\n  background-color: #f44336;\n}\n\n.bg-color-pink {\n  background-color: #e91e63;\n}\n\n.bg-color-purple {\n  background-color: #9c27b0;\n}\n\n.bg-color-deep-purple {\n  background-color: #673ab7;\n}\n\n.bg-color-indigo {\n  background-color: #3f51b5;\n}\n\n.bg-color-blue {\n  background-color: #2196f3;\n}\n\n.bg-color-light-blue {\n  background-color: #03a9f4;\n}\n\n.bg-color-cyan {\n  background-color: #00bcd4;\n}\n\n.bg-color-teal {\n  background-color: #009688;\n}\n\n.bg-color-green {\n  background-color: #4caf50;\n}\n\n.bg-color-light-green {\n  background-color: #8bc34a;\n}\n\n.bg-color-lime {\n  background-color: #cddc39;\n}\n\n.bg-color-yellow {\n  background-color: #ffeb3b;\n}\n\n.bg-color-amber {\n  background-color: #ffc107;\n}\n\n.bg-color-orange {\n  background-color: #ff9800;\n}\n\n.bg-color-deep-orange {\n  background-color: #ff5722;\n}\n\n.bg-color-brown {\n  background-color: #795548;\n}\n\n.bg-color-black {\n  background-color: #000;\n}\n\n.bg-color-white {\n  background-color: #fff;\n}\n\n.bg-color-grey {\n  background-color: #9e9e9e;\n}\n\n.bg-color-blue-grey {\n  background-color: #607d8b;\n}\n\n.bg-color-primary-color-dark {\n  background-color: #0d47a1;\n}\n\n.bg-color-secondary-color {\n  background-color: #aa66cc;\n}\n\n.bg-color-secondary-color-dark {\n  background-color: #9933cc;\n}\n\n.bg-color-default-color {\n  background-color: #2bbbad;\n}\n\n.bg-color-default-color-dark {\n  background-color: #00695c;\n}\n\n.bg-color-info-color {\n  background-color: #33b5e5;\n}\n\n.bg-color-info-color-dark {\n  background-color: #0099cc;\n}\n\n.bg-color-success-color {\n  background-color: #00c851;\n}\n\n.bg-color-success-color-dark {\n  background-color: #007e33;\n}\n\n.bg-color-warning-color {\n  background-color: #ffbb33;\n}\n\n.bg-color-warning-color-dark {\n  background-color: #ff8800;\n}\n\n.bg-color-danger-color {\n  background-color: #ff3547;\n}\n\n.bg-color-danger-color-dark {\n  background-color: #cc0000;\n}\n\n.bg-color-elegant-color {\n  background-color: #2e2e2e;\n}\n\n.bg-color-elegant-color-dark {\n  background-color: #212121;\n}\n\n.bg-color-stylish-color {\n  background-color: #4b515d;\n}\n\n.bg-color-stylish-color-dark {\n  background-color: #3e4551;\n}\n\n.bg-color-unique-color {\n  background-color: #3f729b;\n}\n\n.bg-color-unique-color-dark {\n  background-color: #1c2331;\n}\n\n.bg-color-special-color {\n  background-color: #37474f;\n}\n\n.bg-color-special-color-dark {\n  background-color: #263238;\n}\n\n.bg-color-primary {\n  background-color: #4285f4;\n}\n\n.bg-color-danger {\n  background-color: #ff3547;\n}\n\n.bg-color-warning {\n  background-color: #ffbb33;\n}\n\n.bg-color-success {\n  background-color: #00c851;\n}\n\n.bg-color-info {\n  background-color: #33b5e5;\n}\n\n.bg-color-default {\n  background-color: #2bbbad;\n}\n\n.bg-color-secondary {\n  background-color: #aa66cc;\n}\n\n.bg-color-dark {\n  background-color: #212121;\n}\n\n.bg-color-light {\n  background-color: #e0e0e0;\n}\n\n.bg-color-grey-x {\n  background-color: #f9f9f9;\n}\n\n.w-25 {\n  width: 25;\n}\n\n.w-50 {\n  width: 50;\n}\n\n.w-55 {\n  width: 55;\n}\n\n.w-60 {\n  width: 60;\n}\n\n.w-65 {\n  width: 65;\n}\n\n.w-70 {\n  width: 70;\n}\n\n.w-75 {\n  width: 75;\n}\n\n.w-80 {\n  width: 80;\n}\n\n.w-85 {\n  width: 85;\n}\n\n.w-90 {\n  width: 90;\n}\n\n.w-95 {\n  width: 95;\n}\n\n.w-100 {\n  width: 100;\n}\n\n.text-xs {\n  font-size: 0.75rem;\n}\n\n.text-sm {\n  font-size: 0.875rem;\n}\n\n.text-base {\n  font-size: 1rem;\n}\n\n.text-lg {\n  font-size: 1.125rem;\n}\n\n.text-xl {\n  font-size: 1.25rem;\n}\n\n.text-2xl {\n  font-size: 1.5rem;\n}\n\n.text-3xl {\n  font-size: 1.875rem;\n}\n\n.text-4xl {\n  font-size: 2.25rem;\n}\n\n.text-5xl {\n  font-size: 3rem;\n}\n\n.text-6xl {\n  font-size: 4rem;\n}\n\nbody.neo-scroll {\n  overflow: hidden;\n}\n\ninput:focus, select:focus, textarea:focus, option:focus {\n  border: 1px solid #aaaaaa;\n  outline: none;\n}\n\n.alert {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n}\n\n.alert-heading {\n  color: inherit;\n}\n\n.alert-link {\n  font-weight: bold;\n}\n\n.alert-dismissible {\n  padding-right: 4rem;\n}\n.alert-dismissible .close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 0.75rem 1.25rem;\n  color: inherit;\n}\n\n.alert-primary {\n  color: #0a54c0;\n  background-color: #e2eeff;\n  border-color: #bbd6fe;\n}\n.alert-primary .alert-link {\n  color: #073f90;\n}\n\n.alert-secondary {\n  color: #52595f;\n  background-color: #edeeef;\n  border-color: #d6d8db;\n}\n.alert-secondary .alert-link {\n  color: #3a3f44;\n}\n\n.alert-success {\n  color: #1e7f34;\n  background-color: #e5f4e9;\n  border-color: #c3e6cb;\n}\n.alert-success .alert-link {\n  color: #145623;\n}\n\n.alert-info {\n  color: #117b8c;\n  background-color: #e3f4f6;\n  border-color: #bee5eb;\n}\n.alert-info .alert-link {\n  color: #0b535f;\n}\n\n.alert-warning {\n  color: #c29305;\n  background-color: #fff8e1;\n  border-color: #ffeeba;\n}\n.alert-warning .alert-link {\n  color: #906d04;\n}\n\n.alert-danger {\n  color: #a72834;\n  background-color: #fbe7e9;\n  border-color: #f5c6cb;\n}\n.alert-danger .alert-link {\n  color: #7e1e27;\n}\n\n.alert-light {\n  color: #bcbdbe;\n  background-color: #fefefe;\n  border-color: #fdfdfe;\n}\n.alert-light .alert-link {\n  color: #a2a4a5;\n}\n\n.alert-dark {\n  color: #282c31;\n  background-color: #e7e7e8;\n  border-color: #c6c8ca;\n}\n.alert-dark .alert-link {\n  color: #111315;\n}\n\n:root {\n  --animate-duration: 1s;\n  --animate-delay: 1s;\n  --animate-loop: 1;\n}\n\n.animated {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n}\n.animated.infinite {\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n.animated.faster {\n  animation-duration: calc($--animate-duration / 2);\n}\n.animated.fast {\n  animation-duration: calc($--animate-duration * 0.8);\n}\n.animated.slow {\n  animation-duration: calc($--animate-duration * 2);\n}\n.animated.slower {\n  animation-duration: calc($--animate-duration * 3);\n}\n.animated.loop-1 {\n  animation-iteration-count: 1;\n}\n.animated.delay-1s {\n  animation-delay: calc($--animate-delay * $i);\n}\n.animated.loop-2 {\n  animation-iteration-count: 2;\n}\n.animated.delay-1s {\n  animation-delay: calc($--animate-delay * $i);\n}\n.animated.loop-3 {\n  animation-iteration-count: 3;\n}\n.animated.delay-1s {\n  animation-delay: calc($--animate-delay * $i);\n}\n.animated.loop-4 {\n  animation-iteration-count: 4;\n}\n.animated.delay-1s {\n  animation-delay: calc($--animate-delay * $i);\n}\n\n@media print, (prefers-reduced-motion: reduce) {\n  .animated {\n    animation-duration: 1ms !important;\n    transition-duration: 1ms !important;\n    animation-iteration-count: 1 !important;\n  }\n\n  .animated[class*=Out] {\n    opacity: 0;\n  }\n}\n.animated-initial {\n  animation-name: initial !important;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@keyframes pulse {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n  50% {\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n.pulse {\n  animation-name: pulse;\n  animation-timing-function: ease-in-out;\n}\n\n@keyframes tada {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n  10%, 20% {\n    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n  }\n  30%, 50%, 70%, 90% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n  40%, 60%, 80% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n.tada {\n  animation-name: tada;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n@keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.fadeInLeft {\n  animation-name: fadeInLeft;\n}\n\n@keyframes fadeInRight {\n  from {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.fadeInRight {\n  animation-name: fadeInRight;\n}\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.fadeInUp {\n  animation-name: fadeInUp;\n}\n\n@keyframes rotateOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n}\n.rotateOut {\n  animation-name: rotateOut;\n  transform-origin: center;\n}\n\n.rotate-circle {\n  animation: rotateCircle 9s infinite;\n}\n\n/*\n Custom Animations\n */\n@keyframes rotateCircle {\n  0% {\n    transform: rotate(0deg);\n  }\n  25% {\n    transform: rotate(90deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(270deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes jackInTheBox {\n  from {\n    opacity: 0;\n    transform: scale(0.1) rotate(30deg);\n    transform-origin: center bottom;\n  }\n  50% {\n    transform: rotate(-10deg);\n  }\n  70% {\n    transform: rotate(3deg);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.jackInTheBox {\n  animation-name: jackInTheBox;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@keyframes rollIn {\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.rollIn {\n  animation-name: rollIn;\n}\n\n@keyframes zoomIn {\n  from {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n  50% {\n    opacity: 1;\n  }\n}\n.zoomIn {\n  animation-name: zoomIn;\n}\n\n@keyframes slideInDown {\n  from {\n    transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.slideInDown {\n  animation-name: slideInDown;\n}\n\n@keyframes float {\n  0% {\n    transform: translateY(0px);\n    -webkit-transition: translateY(0px);\n  }\n  50% {\n    transform: translateY(-6px);\n    -webkit-transition: translateY(-6px);\n  }\n  100% {\n    transform: translateY(0px);\n    -webkit-transition: translateY(0px);\n  }\n}\n.purple-gradient {\n  background: -moz-linear-gradient(40deg, #ff6ec4, #7873f5) !important;\n  background: -webkit-linear-gradient(40deg, #ff6ec4, #7873f5) !important;\n  background: -o-linear-gradient(40deg, #ff6ec4, #7873f5) !important;\n  background: -ms-linear-gradient(40deg, #ff6ec4, #7873f5) !important;\n  background: linear-gradient(40deg, #ff6ec4, #7873f5) !important;\n}\n\n.peach-gradient {\n  background: -moz-linear-gradient(40deg, #ffd86f, #fc6262) !important;\n  background: -webkit-linear-gradient(40deg, #ffd86f, #fc6262) !important;\n  background: -o-linear-gradient(40deg, #ffd86f, #fc6262) !important;\n  background: -ms-linear-gradient(40deg, #ffd86f, #fc6262) !important;\n  background: linear-gradient(40deg, #ffd86f, #fc6262) !important;\n}\n\n.aqua-gradient {\n  background: -moz-linear-gradient(40deg, #2096ff, #05ffa3) !important;\n  background: -webkit-linear-gradient(40deg, #2096ff, #05ffa3) !important;\n  background: -o-linear-gradient(40deg, #2096ff, #05ffa3) !important;\n  background: -ms-linear-gradient(40deg, #2096ff, #05ffa3) !important;\n  background: linear-gradient(40deg, #2096ff, #05ffa3) !important;\n}\n\n.blue-gradient {\n  background: -moz-linear-gradient(40deg, #45cafc, #303f9f) !important;\n  background: -webkit-linear-gradient(40deg, #45cafc, #303f9f) !important;\n  background: -o-linear-gradient(40deg, #45cafc, #303f9f) !important;\n  background: -ms-linear-gradient(40deg, #45cafc, #303f9f) !important;\n  background: linear-gradient(40deg, #45cafc, #303f9f) !important;\n}\n\n.home-page-gradient {\n  background: -moz-linear-gradient(40deg, #e1fefa, #fcf7f4) !important;\n  background: -webkit-linear-gradient(40deg, #e1fefa, #fcf7f4) !important;\n  background: -o-linear-gradient(40deg, #e1fefa, #fcf7f4) !important;\n  background: -ms-linear-gradient(40deg, #e1fefa, #fcf7f4) !important;\n  background: linear-gradient(40deg, #e1fefa, #fcf7f4) !important;\n}\n\n.purple-gradient-rgba {\n  background: -moz-linear-gradient(40deg, rgba(255, 110, 196, 0.9), rgba(120, 115, 245, 0.9)) !important;\n  background: -webkit-linear-gradient(40deg, rgba(255, 110, 196, 0.9), rgba(120, 115, 245, 0.9)) !important;\n  background: -o-linear-gradient(40deg, rgba(255, 110, 196, 0.9), rgba(120, 115, 245, 0.9)) !important;\n  background: -ms-linear-gradient(40deg, rgba(255, 110, 196, 0.9), rgba(120, 115, 245, 0.9)) !important;\n  background: linear-gradient(40deg, rgba(255, 110, 196, 0.9), rgba(120, 115, 245, 0.9)) !important;\n}\n\n.peach-gradient-rgba {\n  background: -moz-linear-gradient(40deg, rgba(255, 216, 111, 0.9), rgba(252, 98, 98, 0.9)) !important;\n  background: -webkit-linear-gradient(40deg, rgba(255, 216, 111, 0.9), rgba(252, 98, 98, 0.9)) !important;\n  background: -o-linear-gradient(40deg, rgba(255, 216, 111, 0.9), rgba(252, 98, 98, 0.9)) !important;\n  background: -ms-linear-gradient(40deg, rgba(255, 216, 111, 0.9), rgba(252, 98, 98, 0.9)) !important;\n  background: linear-gradient(40deg, rgba(255, 216, 111, 0.9), rgba(252, 98, 98, 0.9)) !important;\n}\n\n.aqua-gradient-rgba {\n  background: -moz-linear-gradient(40deg, rgba(32, 150, 255, 0.9), rgba(5, 255, 163, 0.9)) !important;\n  background: -webkit-linear-gradient(40deg, rgba(32, 150, 255, 0.9), rgba(5, 255, 163, 0.9)) !important;\n  background: -o-linear-gradient(40deg, rgba(32, 150, 255, 0.9), rgba(5, 255, 163, 0.9)) !important;\n  background: -ms-linear-gradient(40deg, rgba(32, 150, 255, 0.9), rgba(5, 255, 163, 0.9)) !important;\n  background: linear-gradient(40deg, rgba(32, 150, 255, 0.9), rgba(5, 255, 163, 0.9)) !important;\n}\n\n.blue-gradient-rgba {\n  background: -moz-linear-gradient(40deg, rgba(69, 202, 252, 0.9), rgba(48, 63, 159, 0.9)) !important;\n  background: -webkit-linear-gradient(40deg, rgba(69, 202, 252, 0.9), rgba(48, 63, 159, 0.9)) !important;\n  background: -o-linear-gradient(40deg, rgba(69, 202, 252, 0.9), rgba(48, 63, 159, 0.9)) !important;\n  background: -ms-linear-gradient(40deg, rgba(69, 202, 252, 0.9), rgba(48, 63, 159, 0.9)) !important;\n  background: linear-gradient(40deg, rgba(69, 202, 252, 0.9), rgba(48, 63, 159, 0.9)) !important;\n}\n\n.bg-gradient-purple {\n  background: -moz-linear-gradient(131.93deg, #ff6ec4, #7873f5) !important;\n  background: -webkit-linear-gradient(131.93deg, #ff6ec4, #7873f5) !important;\n  background: -o-linear-gradient(131.93deg, #ff6ec4, #7873f5) !important;\n  background: -ms-linear-gradient(131.93deg, #ff6ec4, #7873f5) !important;\n  background: linear-gradient(131.93deg, #ff6ec4, #7873f5) !important;\n}\n\n.bg-gradient-peach {\n  background: -moz-linear-gradient(131.93deg, #ffd86f, #fc6262) !important;\n  background: -webkit-linear-gradient(131.93deg, #ffd86f, #fc6262) !important;\n  background: -o-linear-gradient(131.93deg, #ffd86f, #fc6262) !important;\n  background: -ms-linear-gradient(131.93deg, #ffd86f, #fc6262) !important;\n  background: linear-gradient(131.93deg, #ffd86f, #fc6262) !important;\n}\n\n.bg-gradient-aqua {\n  background: -moz-linear-gradient(131.93deg, #2096ff, #05ffa3) !important;\n  background: -webkit-linear-gradient(131.93deg, #2096ff, #05ffa3) !important;\n  background: -o-linear-gradient(131.93deg, #2096ff, #05ffa3) !important;\n  background: -ms-linear-gradient(131.93deg, #2096ff, #05ffa3) !important;\n  background: linear-gradient(131.93deg, #2096ff, #05ffa3) !important;\n}\n\n.bg-gradient-blue {\n  background: -moz-linear-gradient(131.93deg, #45cafc, #303f9f) !important;\n  background: -webkit-linear-gradient(131.93deg, #45cafc, #303f9f) !important;\n  background: -o-linear-gradient(131.93deg, #45cafc, #303f9f) !important;\n  background: -ms-linear-gradient(131.93deg, #45cafc, #303f9f) !important;\n  background: linear-gradient(131.93deg, #45cafc, #303f9f) !important;\n}\n\n.bg-gradient-home-page {\n  background: -moz-linear-gradient(131.93deg, #e1fefa, #fcf7f4) !important;\n  background: -webkit-linear-gradient(131.93deg, #e1fefa, #fcf7f4) !important;\n  background: -o-linear-gradient(131.93deg, #e1fefa, #fcf7f4) !important;\n  background: -ms-linear-gradient(131.93deg, #e1fefa, #fcf7f4) !important;\n  background: linear-gradient(131.93deg, #e1fefa, #fcf7f4) !important;\n}\n\n@font-face {\n  font-family: \"HERO Icons\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/IconFont/webfont.eot?v=1.4.57\");\n  src: url(\"http://babysitter.trust-growth.co.jp/font/IconFont/webfont.eot?#iefix&v=1.4.57\") format(\"embedded-opentype\"), url(\"http://babysitter.trust-growth.co.jp/font/IconFont/webfont.woff2?v=1.4.57\") format(\"woff2\"), url(\"http://babysitter.trust-growth.co.jp/font/IconFont/webfont.woff?v=1.4.57\") format(\"woff\"), url(\"http://babysitter.trust-growth.co.jp/font/IconFont/webfont.ttf?v=1.4.57\") format(\"truetype\"), url(\"http://babysitter.trust-growth.co.jp/font/IconFont/webfont.svg?v=1.4.57\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\ni.hero-icon {\n  display: inline-block;\n  width: 32px;\n  height: 24px;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  line-height: 24px;\n}\ni.hero-icon:before {\n  font-size: 24px;\n  display: inline-block;\n  font: normal normal normal 24px/1 \"HERO Icons\";\n  font-size: inherit;\n  text-rendering: auto;\n  line-height: inherit;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\ni.hero-icon.hero-account-group-outline::before {\n  content: \"\\F0B58\";\n}\ni.hero-icon.hero-account-search-outline::before {\n  content: \"\\F0935\";\n}\ni.hero-icon.hero-account-tie-outline::before {\n  content: \"\\F10CA\";\n}\ni.hero-icon.hero-airport::before {\n  content: \"\\F084B\";\n}\ni.hero-icon.hero-arrow-down-bold-box-outline::before {\n  content: \"\\F0730\";\n}\ni.hero-icon.hero-arrow-up-bold-box-outline::before {\n  content: \"\\F0739\";\n}\ni.hero-icon.hero-arrow-up-box::before {\n  content: \"\\F06C3\";\n}\ni.hero-icon.hero-auto-fix::before {\n  content: \"\\F0068\";\n}\ni.hero-icon.hero-auto-upload::before {\n  content: \"\\F0069\";\n}\ni.hero-icon.hero-ballot-recount-outline::before {\n  content: \"\\F0C3A\";\n}\ni.hero-icon.hero-calendar-check-outline::before {\n  content: \"\\F0C44\";\n}\ni.hero-icon.hero-calendar-month::before {\n  content: \"\\F0E17\";\n}\ni.hero-icon.hero-call-made::before {\n  content: \"\\F00F7\";\n}\ni.hero-icon.hero-card-account-mail-outline::before {\n  content: \"\\F0E98\";\n}\ni.hero-icon.hero-cart-plus::before {\n  content: \"\\F0112\";\n}\ni.hero-icon.hero-cellphone::before {\n  content: \"\\F011C\";\n}\ni.hero-icon.hero-cellphone-cog::before {\n  content: \"\\F0951\";\n}\ni.hero-icon.hero-cellphone-message::before {\n  content: \"\\F08D3\";\n}\ni.hero-icon.hero-cellphone-nfc::before {\n  content: \"\\F0E90\";\n}\ni.hero-icon.hero-certificate-outline::before {\n  content: \"\\F1188\";\n}\ni.hero-icon.hero-check-circle::before {\n  content: \"\\F05E0\";\n}\ni.hero-icon.hero-check-circle-outline::before {\n  content: \"\\F05E1\";\n}\ni.hero-icon.hero-clippy::before {\n  content: \"\\F014F\";\n}\ni.hero-icon.hero-clock-check-outline::before {\n  content: \"\\F0FA9\";\n}\ni.hero-icon.hero-clock-outline::before {\n  content: \"\\F0150\";\n}\ni.hero-icon.hero-clock-start::before {\n  content: \"\\F0155\";\n}\ni.hero-icon.hero-cloud-download-outline::before {\n  content: \"\\F0B7D\";\n}\ni.hero-icon.hero-creation::before {\n  content: \"\\F0674\";\n}\ni.hero-icon.hero-email-edit-outline::before {\n  content: \"\\F0EE4\";\n}\ni.hero-icon.hero-emoticon::before {\n  content: \"\\F0C68\";\n}\ni.hero-icon.hero-emoticon-angry::before {\n  content: \"\\F0C69\";\n}\ni.hero-icon.hero-emoticon-angry-outline::before {\n  content: \"\\F0C6A\";\n}\ni.hero-icon.hero-emoticon-confused::before {\n  content: \"\\F10DE\";\n}\ni.hero-icon.hero-emoticon-confused-outline::before {\n  content: \"\\F10DF\";\n}\ni.hero-icon.hero-emoticon-cool::before {\n  content: \"\\F0C6B\";\n}\ni.hero-icon.hero-emoticon-cool-outline::before {\n  content: \"\\F01F3\";\n}\ni.hero-icon.hero-emoticon-cry::before {\n  content: \"\\F0C6C\";\n}\ni.hero-icon.hero-emoticon-cry-outline::before {\n  content: \"\\F0C6D\";\n}\ni.hero-icon.hero-emoticon-dead::before {\n  content: \"\\F0C6E\";\n}\ni.hero-icon.hero-emoticon-dead-outline::before {\n  content: \"\\F069B\";\n}\ni.hero-icon.hero-emoticon-devil::before {\n  content: \"\\F0C6F\";\n}\ni.hero-icon.hero-emoticon-devil-outline::before {\n  content: \"\\F01F4\";\n}\ni.hero-icon.hero-emoticon-excited::before {\n  content: \"\\F0C70\";\n}\ni.hero-icon.hero-emoticon-excited-outline::before {\n  content: \"\\F069C\";\n}\ni.hero-icon.hero-emoticon-frown::before {\n  content: \"\\F0F4C\";\n}\ni.hero-icon.hero-emoticon-frown-outline::before {\n  content: \"\\F0F4D\";\n}\ni.hero-icon.hero-emoticon-happy::before {\n  content: \"\\F0C71\";\n}\ni.hero-icon.hero-emoticon-happy-outline::before {\n  content: \"\\F01F5\";\n}\ni.hero-icon.hero-emoticon-kiss::before {\n  content: \"\\F0C72\";\n}\ni.hero-icon.hero-emoticon-kiss-outline::before {\n  content: \"\\F0C73\";\n}\ni.hero-icon.hero-emoticon-lol::before {\n  content: \"\\F1214\";\n}\ni.hero-icon.hero-emoticon-lol-outline::before {\n  content: \"\\F1215\";\n}\ni.hero-icon.hero-emoticon-neutral::before {\n  content: \"\\F0C74\";\n}\ni.hero-icon.hero-emoticon-neutral-outline::before {\n  content: \"\\F01F6\";\n}\ni.hero-icon.hero-emoticon-outline::before {\n  content: \"\\F01F2\";\n}\ni.hero-icon.hero-emoticon-poop::before {\n  content: \"\\F01F7\";\n}\ni.hero-icon.hero-emoticon-poop-outline::before {\n  content: \"\\F0C75\";\n}\ni.hero-icon.hero-emoticon-sad::before {\n  content: \"\\F0C76\";\n}\ni.hero-icon.hero-emoticon-sad-outline::before {\n  content: \"\\F01F8\";\n}\ni.hero-icon.hero-emoticon-tongue::before {\n  content: \"\\F01F9\";\n}\ni.hero-icon.hero-emoticon-tongue-outline::before {\n  content: \"\\F0C77\";\n}\ni.hero-icon.hero-emoticon-wink::before {\n  content: \"\\F0C78\";\n}\ni.hero-icon.hero-emoticon-wink-outline::before {\n  content: \"\\F0C79\";\n}\ni.hero-icon.hero-file::before {\n  content: \"\\F0214\";\n}\ni.hero-icon.hero-file-cloud-outline::before {\n  content: \"\\F102A\";\n}\ni.hero-icon.hero-form-select::before {\n  content: \"\\F1401\";\n}\ni.hero-icon.hero-format-list-text::before {\n  content: \"\\F126F\";\n}\ni.hero-icon.hero-google-ads::before {\n  content: \"\\F0C87\";\n}\ni.hero-icon.hero-hand-okay::before {\n  content: \"\\F0A50\";\n}\ni.hero-icon.hero-hand-pointing-right::before {\n  content: \"\\F02C7\";\n}\ni.hero-icon.hero-headset::before {\n  content: \"\\F02CE\";\n}\ni.hero-icon.hero-heart-multiple-outline::before {\n  content: \"\\F0A57\";\n}\ni.hero-icon.hero-home-map-marker::before {\n  content: \"\\F05F8\";\n}\ni.hero-icon.hero-human-male-child::before {\n  content: \"\\F138C\";\n}\ni.hero-icon.hero-laptop::before {\n  content: \"\\F0322\";\n}\ni.hero-icon.hero-message-cog-outline::before {\n  content: \"\\F1172\";\n}\ni.hero-icon.hero-message-text-outline::before {\n  content: \"\\F036A\";\n}\ni.hero-icon.hero-mouse::before {\n  content: \"\\F037D\";\n}\ni.hero-icon.hero-mouse-bluetooth::before {\n  content: \"\\F098B\";\n}\ni.hero-icon.hero-mouse-off::before {\n  content: \"\\F037E\";\n}\ni.hero-icon.hero-mouse-variant::before {\n  content: \"\\F037F\";\n}\ni.hero-icon.hero-mouse-variant-off::before {\n  content: \"\\F0380\";\n}\ni.hero-icon.hero-newspaper-variant-multiple-outline::before {\n  content: \"\\F1003\";\n}\ni.hero-icon.hero-newspaper-variant-outline::before {\n  content: \"\\F1004\";\n}\ni.hero-icon.hero-phone-in-talk-outline::before {\n  content: \"\\F1182\";\n}\ni.hero-icon.hero-plus-outline::before {\n  content: \"\\F0705\";\n}\ni.hero-icon.hero-responsive::before {\n  content: \"\\F045E\";\n}\ni.hero-icon.hero-select::before {\n  content: \"\\F0485\";\n}\ni.hero-icon.hero-selection-search::before {\n  content: \"\\F1205\";\n}\ni.hero-icon.hero-send::before {\n  content: \"\\F048A\";\n}\ni.hero-icon.hero-send-check-outline::before {\n  content: \"\\F1162\";\n}\ni.hero-icon.hero-send-outline::before {\n  content: \"\\F1165\";\n}\ni.hero-icon.hero-share-all-outline::before {\n  content: \"\\F11F5\";\n}\ni.hero-icon.hero-star-box-multiple-outline::before {\n  content: \"\\F1287\";\n}\ni.hero-icon.hero-sticker-emoji::before {\n  content: \"\\F0785\";\n}\ni.hero-icon.hero-tablet-ipad::before {\n  content: \"\\F04F8\";\n}\ni.hero-icon.hero-television-clean::before {\n  content: \"\\F1110\";\n}\ni.hero-icon.hero-update::before {\n  content: \"\\F06B0\";\n}\ni.hero-icon.hero-zodiac-taurus::before {\n  content: \"\\F0A87\";\n}\ni.hero-icon.hero-zodiac-virgo::before {\n  content: \"\\F0A88\";\n}\n\n.blocker {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  z-index: 99;\n  padding: 20px;\n  box-sizing: border-box;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.75);\n  text-align: center;\n}\n.blocker:before {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n  margin-right: -0.05em;\n}\n.blocker.behind {\n  background-color: transparent;\n}\n\n.modal {\n  display: none;\n  vertical-align: middle;\n  position: relative;\n  z-index: 2;\n  max-width: 500px;\n  box-sizing: border-box;\n  width: 90%;\n  background: #fff;\n  padding: 15px 30px;\n  -webkit-border-radius: 8px;\n  -moz-border-radius: 8px;\n  -o-border-radius: 8px;\n  -ms-border-radius: 8px;\n  border-radius: 8px;\n  -webkit-box-shadow: 0 0 10px #000;\n  -moz-box-shadow: 0 0 10px #000;\n  -o-box-shadow: 0 0 10px #000;\n  -ms-box-shadow: 0 0 10px #000;\n  box-shadow: 0 0 10px #000;\n  text-align: left;\n}\n.modal a.close-modal {\n  position: absolute;\n  top: -12.5px;\n  right: -12.5px;\n  display: block;\n  width: 30px;\n  height: 30px;\n  text-indent: -9999px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAA3hJREFUaAXlm8+K00Acx7MiCIJH/yw+gA9g25O49SL4AO3Bp1jw5NvktC+wF88qevK4BU97EmzxUBCEolK/n5gp3W6TTJPfpNPNF37MNsl85/vN/DaTmU6PknC4K+pniqeKJ3k8UnkvDxXJzzy+q/yaxxeVHxW/FNHjgRSeKt4rFoplzaAuHHDBGR2eS9G54reirsmienDCTRt7xwsp+KAoEmt9nLaGitZxrBbPFNaGfPloGw2t4JVamSt8xYW6Dg1oCYo3Yv+rCGViV160oMkcd8SYKnYV1Nb1aEOjCe6L5ZOiLfF120EjWhuBu3YIZt1NQmujnk5F4MgOpURzLfAwOBSTmzp3fpDxuI/pabxpqOoz2r2HLAb0GMbZKlNV5/Hg9XJypguryA7lPF5KMdTZQzHjqxNPhWhzIuAruOl1eNqKEx1tSh5rfbxdw7mOxCq4qS68ZTjKS1YVvilu559vWvFHhh4rZrdyZ69Vmpgdj8fJbDZLJpNJ0uv1cnr/gjrUhQMuI+ANjyuwftQ0bbL6Erp0mM/ny8Fg4M3LtdRxgMtKl3jwmIHVxYXChFy94/Rmpa/pTbNUhstKV+4Rr8lLQ9KlUvJKLyG8yvQ2s9SBy1Jb7jV5a0yapfF6apaZLjLLcWtd4sNrmJUMHyM+1xibTjH82Zh01TNlhsrOhdKTe00uAzZQmN6+KW+sDa/JD2PSVQ873m29yf+1Q9VDzfEYlHi1G5LKBBWZbtEsHbFwb1oYDwr1ZiF/2bnCSg1OBE/pfr9/bWx26UxJL3ONPISOLKUvQza0LZUxSKyjpdTGa/vDEr25rddbMM0Q3O6Lx3rqFvU+x6UrRKQY7tyrZecmD9FODy8uLizTmilwNj0kraNcAJhOp5aGVwsAGD5VmJBrWWbJSgWT9zrzWepQF47RaGSiKfeGx6Szi3gzmX/HHbihwBser4B9UJYpFBNX4R6vTn3VQnez0SymnrHQMsRYGTr1dSk34ljRqS/EMd2pLQ8YBp3a1PLfcqCpo8gtHkZFHKkTX6fs3MY0blKnth66rKCnU0VRGu37ONrQaA4eZDFtWAu2fXj9zjFkxTBOo8F7t926gTp/83Kyzzcy2kZD6xiqxTYnHLRFm3vHiRSwNSjkz3hoIzo8lCKWUlg/YtGs7tObunDAZfpDLbfEI15zsEIY3U/x/gHHc/G1zltnAgAAAABJRU5ErkJggg==\");\n}\n\n.modal-spinner {\n  display: none;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translateY(-50%) translateX(-50%);\n  padding: 12px 16px;\n  border-radius: 5px;\n  background-color: #111;\n  height: 20px;\n}\n.modal-spinner > div {\n  border-radius: 100px;\n  background-color: #fff;\n  height: 20px;\n  width: 2px;\n  margin: 0 1px;\n  display: inline-block;\n  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n  animation: sk-stretchdelay 1.2s infinite ease-in-out;\n}\n.modal-spinner .rect2 {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s;\n}\n.modal-spinner .rect3 {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n.modal-spinner .rect4 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n\n@-webkit-keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    -webkit-transform: scaleY(0.5);\n  }\n  20% {\n    -webkit-transform: scaleY(1);\n  }\n}\n@keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    transform: scaleY(0.5);\n    -webkit-transform: scaleY(0.5);\n  }\n  20% {\n    transform: scaleY(1);\n    -webkit-transform: scaleY(1);\n  }\n}\n#ui-datepicker-div {\n  z-index: 1000 !important;\n}\n\n.ui-timepicker-wrapper {\n  overflow-y: auto;\n  max-height: 150px;\n  width: 6.5em;\n  background: #fff;\n  border: 1px solid #ddd;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  -moz-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  outline: none;\n  z-index: 10052;\n  margin: 0;\n}\n\n.ui-timepicker-wrapper.ui-timepicker-with-duration {\n  width: 13em;\n}\n\n.ui-timepicker-wrapper.ui-timepicker-with-duration.ui-timepicker-step-30,\n.ui-timepicker-wrapper.ui-timepicker-with-duration.ui-timepicker-step-60 {\n  width: 11em;\n}\n\n.ui-timepicker-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.ui-timepicker-duration {\n  margin-left: 5px;\n  color: #888;\n}\n\n.ui-timepicker-list:hover .ui-timepicker-duration {\n  color: #888;\n}\n\n.ui-timepicker-list li {\n  padding: 3px 0 3px 5px;\n  cursor: pointer;\n  white-space: nowrap;\n  color: #000;\n  list-style: none;\n  margin: 0;\n}\n\n.ui-timepicker-list:hover .ui-timepicker-selected {\n  background: #fff;\n  color: #000;\n}\n\nli.ui-timepicker-selected,\n.ui-timepicker-list li:hover,\n.ui-timepicker-list .ui-timepicker-selected:hover {\n  background: #1980EC;\n  color: #fff;\n}\n\nli.ui-timepicker-selected .ui-timepicker-duration,\n.ui-timepicker-list li:hover .ui-timepicker-duration {\n  color: #ccc;\n}\n\n.ui-timepicker-list li.ui-timepicker-disabled,\n.ui-timepicker-list li.ui-timepicker-disabled:hover,\n.ui-timepicker-list li.ui-timepicker-selected.ui-timepicker-disabled {\n  color: #888;\n  cursor: default;\n}\n\n.ui-timepicker-list li.ui-timepicker-disabled:hover,\n.ui-timepicker-list li.ui-timepicker-selected.ui-timepicker-disabled {\n  background: #f2f2f2;\n}\n\n.ui-datepicker.ui-widget.ui-widget-content {\n  background-color: #fff;\n}\n\n.ui-timepicker-wrapper {\n  overflow-y: auto;\n  max-height: 150px;\n  width: 6.5em;\n  background: #fff;\n  border: 1px solid #ddd;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  -moz-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  outline: none;\n  z-index: 10052;\n  margin: 0;\n}\n\n.ui-timepicker-wrapper.ui-timepicker-with-duration {\n  width: 13em;\n}\n\n.ui-timepicker-wrapper.ui-timepicker-with-duration.ui-timepicker-step-30,\n.ui-timepicker-wrapper.ui-timepicker-with-duration.ui-timepicker-step-60 {\n  width: 11em;\n}\n\n.ui-timepicker-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.ui-timepicker-duration {\n  margin-left: 5px;\n  color: #888;\n}\n\n.ui-timepicker-list:hover .ui-timepicker-duration {\n  color: #888;\n}\n\n.ui-timepicker-list li {\n  padding: 3px 0 3px 5px;\n  cursor: pointer;\n  white-space: nowrap;\n  color: #000;\n  list-style: none;\n  margin: 0;\n}\n\n.ui-timepicker-list:hover .ui-timepicker-selected {\n  background: #fff;\n  color: #000;\n}\n\nli.ui-timepicker-selected,\n.ui-timepicker-list li:hover,\n.ui-timepicker-list .ui-timepicker-selected:hover {\n  background: #1980EC;\n  color: #fff;\n}\n\nli.ui-timepicker-selected .ui-timepicker-duration,\n.ui-timepicker-list li:hover .ui-timepicker-duration {\n  color: #ccc;\n}\n\n.ui-timepicker-list li.ui-timepicker-disabled,\n.ui-timepicker-list li.ui-timepicker-disabled:hover,\n.ui-timepicker-list li.ui-timepicker-selected.ui-timepicker-disabled {\n  color: #888;\n  cursor: default;\n}\n\n.ui-timepicker-list li.ui-timepicker-disabled:hover,\n.ui-timepicker-list li.ui-timepicker-selected.ui-timepicker-disabled {\n  background: #f2f2f2;\n}\n\n/*! jQuery UI - v1.12.1 - 2016-09-14\n* http://jqueryui.com\n* Includes: core.css, accordion.css, autocomplete.css, menu.css, button.css, controlgroup.css, checkboxradio.css, datepicker.css, dialog.css, draggable.css, resizable.css, progressbar.css, selectable.css, selectmenu.css, slider.css, sortable.css, spinner.css, tabs.css, tooltip.css, theme.css\n* To view and modify this theme, visit http://jqueryui.com/themeroller/?ffDefault=Arial%2CHelvetica%2Csans-serif&fsDefault=1em&fwDefault=normal&cornerRadius=3px&bgColorHeader=e9e9e9&bgTextureHeader=flat&borderColorHeader=dddddd&fcHeader=333333&iconColorHeader=444444&bgColorContent=ffffff&bgTextureContent=flat&borderColorContent=dddddd&fcContent=333333&iconColorContent=444444&bgColorDefault=f6f6f6&bgTextureDefault=flat&borderColorDefault=c5c5c5&fcDefault=454545&iconColorDefault=777777&bgColorHover=ededed&bgTextureHover=flat&borderColorHover=cccccc&fcHover=2b2b2b&iconColorHover=555555&bgColorActive=007fff&bgTextureActive=flat&borderColorActive=003eff&fcActive=ffffff&iconColorActive=ffffff&bgColorHighlight=fffa90&bgTextureHighlight=flat&borderColorHighlight=dad55e&fcHighlight=777620&iconColorHighlight=777620&bgColorError=fddfdf&bgTextureError=flat&borderColorError=f1a899&fcError=5f3f3f&iconColorError=cc0000&bgColorOverlay=aaaaaa&bgTextureOverlay=flat&bgImgOpacityOverlay=0&opacityOverlay=30&bgColorShadow=666666&bgTextureShadow=flat&bgImgOpacityShadow=0&opacityShadow=30&thicknessShadow=5px&offsetTopShadow=0px&offsetLeftShadow=0px&cornerRadiusShadow=8px\n* Copyright jQuery Foundation and other contributors; Licensed MIT */\n/* Layout helpers\n----------------------------------*/\n.ui-helper-hidden {\n  display: none;\n}\n\n.ui-helper-hidden-accessible {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.ui-helper-reset {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  line-height: 1.3;\n  text-decoration: none;\n  font-size: 100%;\n  list-style: none;\n}\n\n.ui-helper-clearfix:before,\n.ui-helper-clearfix:after {\n  content: \"\";\n  display: table;\n  border-collapse: collapse;\n}\n\n.ui-helper-clearfix:after {\n  clear: both;\n}\n\n.ui-helper-zfix {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n  opacity: 0;\n  filter: Alpha(Opacity=0);\n  /* support: IE8 */\n}\n\n.ui-front {\n  z-index: 100;\n}\n\n/* Interaction Cues\n----------------------------------*/\n.ui-state-disabled {\n  cursor: default !important;\n  pointer-events: none;\n}\n\n/* Icons\n----------------------------------*/\n.ui-icon {\n  display: inline-block;\n  vertical-align: middle;\n  margin-top: -0.25em;\n  position: relative;\n  text-indent: -99999px;\n  overflow: hidden;\n  background-repeat: no-repeat;\n}\n\n.ui-widget-icon-block {\n  left: 50%;\n  margin-left: -8px;\n  display: block;\n}\n\n/* Misc visuals\n----------------------------------*/\n/* Overlays */\n.ui-widget-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.ui-accordion .ui-accordion-header {\n  display: block;\n  cursor: pointer;\n  position: relative;\n  margin: 2px 0 0 0;\n  padding: 0.5em 0.5em 0.5em 0.7em;\n  font-size: 100%;\n}\n\n.ui-accordion .ui-accordion-content {\n  padding: 1em 2.2em;\n  border-top: 0;\n  overflow: auto;\n}\n\n.ui-autocomplete {\n  position: absolute;\n  top: 0;\n  left: 0;\n  cursor: default;\n}\n\n.ui-menu {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: block;\n  outline: 0;\n}\n\n.ui-menu .ui-menu {\n  position: absolute;\n}\n\n.ui-menu .ui-menu-item {\n  margin: 0;\n  cursor: pointer;\n  /* support: IE10, see #8844 */\n  list-style-image: url(\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\");\n}\n\n.ui-menu .ui-menu-item-wrapper {\n  position: relative;\n  padding: 3px 1em 3px 0.4em;\n}\n\n.ui-menu .ui-menu-divider {\n  margin: 5px 0;\n  height: 0;\n  font-size: 0;\n  line-height: 0;\n  border-width: 1px 0 0 0;\n}\n\n.ui-menu .ui-state-focus,\n.ui-menu .ui-state-active {\n  margin: -1px;\n}\n\n/* icon support */\n.ui-menu-icons {\n  position: relative;\n}\n\n.ui-menu-icons .ui-menu-item-wrapper {\n  padding-left: 2em;\n}\n\n/* left-aligned */\n.ui-menu .ui-icon {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0.2em;\n  margin: auto 0;\n}\n\n/* right-aligned */\n.ui-menu .ui-menu-icon {\n  left: auto;\n  right: 0;\n}\n\n.ui-button {\n  padding: 0.4em 1em;\n  display: inline-block;\n  position: relative;\n  line-height: normal;\n  margin-right: 0.1em;\n  cursor: pointer;\n  vertical-align: middle;\n  text-align: center;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  /* Support: IE <= 11 */\n  overflow: visible;\n}\n\n.ui-button,\n.ui-button:link,\n.ui-button:visited,\n.ui-button:hover,\n.ui-button:active {\n  text-decoration: none;\n}\n\n/* to make room for the icon, a width needs to be set here */\n.ui-button-icon-only {\n  width: 2em;\n  box-sizing: border-box;\n  text-indent: -9999px;\n  white-space: nowrap;\n}\n\n/* no icon support for input elements */\ninput.ui-button.ui-button-icon-only {\n  text-indent: 0;\n}\n\n/* button icon element(s) */\n.ui-button-icon-only .ui-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -8px;\n  margin-left: -8px;\n}\n\n.ui-button.ui-icon-notext .ui-icon {\n  padding: 0;\n  width: 2.1em;\n  height: 2.1em;\n  text-indent: -9999px;\n  white-space: nowrap;\n}\n\ninput.ui-button.ui-icon-notext .ui-icon {\n  width: auto;\n  height: auto;\n  text-indent: 0;\n  white-space: normal;\n  padding: 0.4em 1em;\n}\n\n/* workarounds */\n/* Support: Firefox 5 - 40 */\ninput.ui-button::-moz-focus-inner,\nbutton.ui-button::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.ui-controlgroup {\n  vertical-align: middle;\n  display: inline-block;\n}\n\n.ui-controlgroup > .ui-controlgroup-item {\n  float: left;\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.ui-controlgroup > .ui-controlgroup-item:focus,\n.ui-controlgroup > .ui-controlgroup-item.ui-visual-focus {\n  z-index: 9999;\n}\n\n.ui-controlgroup-vertical > .ui-controlgroup-item {\n  display: block;\n  float: none;\n  width: 100%;\n  margin-top: 0;\n  margin-bottom: 0;\n  text-align: left;\n}\n\n.ui-controlgroup-vertical .ui-controlgroup-item {\n  box-sizing: border-box;\n}\n\n.ui-controlgroup .ui-controlgroup-label {\n  padding: 0.4em 1em;\n}\n\n.ui-controlgroup .ui-controlgroup-label span {\n  font-size: 80%;\n}\n\n.ui-controlgroup-horizontal .ui-controlgroup-label + .ui-controlgroup-item {\n  border-left: none;\n}\n\n.ui-controlgroup-vertical .ui-controlgroup-label + .ui-controlgroup-item {\n  border-top: none;\n}\n\n.ui-controlgroup-horizontal .ui-controlgroup-label.ui-widget-content {\n  border-right: none;\n}\n\n.ui-controlgroup-vertical .ui-controlgroup-label.ui-widget-content {\n  border-bottom: none;\n}\n\n/* Spinner specific style fixes */\n.ui-controlgroup-vertical .ui-spinner-input {\n  /* Support: IE8 only, Android < 4.4 only */\n  width: 75%;\n  width: calc( 100% - 2.4em );\n}\n\n.ui-controlgroup-vertical .ui-spinner .ui-spinner-up {\n  border-top-style: solid;\n}\n\n.ui-checkboxradio-label .ui-icon-background {\n  box-shadow: inset 1px 1px 1px #ccc;\n  border-radius: 0.12em;\n  border: none;\n}\n\n.ui-checkboxradio-radio-label .ui-icon-background {\n  width: 16px;\n  height: 16px;\n  border-radius: 1em;\n  overflow: visible;\n  border: none;\n}\n\n.ui-checkboxradio-radio-label.ui-checkboxradio-checked .ui-icon,\n.ui-checkboxradio-radio-label.ui-checkboxradio-checked:hover .ui-icon {\n  background-image: none;\n  width: 8px;\n  height: 8px;\n  border-width: 4px;\n  border-style: solid;\n}\n\n.ui-checkboxradio-disabled {\n  pointer-events: none;\n}\n\n.ui-datepicker {\n  width: 17em;\n  padding: 0.2em 0.2em 0;\n  display: none;\n}\n\n.ui-datepicker .ui-datepicker-header {\n  position: relative;\n  padding: 0.2em 0;\n}\n\n.ui-datepicker .ui-datepicker-prev,\n.ui-datepicker .ui-datepicker-next {\n  position: absolute;\n  top: 2px;\n  width: 1.8em;\n  height: 1.8em;\n}\n\n.ui-datepicker .ui-datepicker-prev-hover,\n.ui-datepicker .ui-datepicker-next-hover {\n  top: 1px;\n}\n\n.ui-datepicker .ui-datepicker-prev {\n  left: 2px;\n}\n\n.ui-datepicker .ui-datepicker-next {\n  right: 2px;\n}\n\n.ui-datepicker .ui-datepicker-prev-hover {\n  left: 1px;\n}\n\n.ui-datepicker .ui-datepicker-next-hover {\n  right: 1px;\n}\n\n.ui-datepicker .ui-datepicker-prev span,\n.ui-datepicker .ui-datepicker-next span {\n  display: block;\n  position: absolute;\n  left: 50%;\n  margin-left: -8px;\n  top: 50%;\n  margin-top: -8px;\n}\n\n.ui-datepicker .ui-datepicker-title {\n  margin: 0 2.3em;\n  line-height: 1.8em;\n  text-align: center;\n}\n\n.ui-datepicker .ui-datepicker-title select {\n  font-size: 1em;\n  margin: 1px 0;\n}\n\n.ui-datepicker select.ui-datepicker-month,\n.ui-datepicker select.ui-datepicker-year {\n  width: 45%;\n}\n\n.ui-datepicker table {\n  width: 100%;\n  font-size: 0.9em;\n  border-collapse: collapse;\n  margin: 0 0 0.4em;\n}\n\n.ui-datepicker th {\n  padding: 0.7em 0.3em;\n  text-align: center;\n  font-weight: bold;\n  border: 0;\n}\n\n.ui-datepicker td {\n  border: 0;\n  padding: 1px;\n}\n\n.ui-datepicker td span,\n.ui-datepicker td a {\n  display: block;\n  padding: 0.2em;\n  text-align: right;\n  text-decoration: none;\n}\n\n.ui-datepicker .ui-datepicker-buttonpane {\n  background-image: none;\n  margin: 0.7em 0 0 0;\n  padding: 0 0.2em;\n  border-left: 0;\n  border-right: 0;\n  border-bottom: 0;\n}\n\n.ui-datepicker .ui-datepicker-buttonpane button {\n  float: right;\n  margin: 0.5em 0.2em 0.4em;\n  cursor: pointer;\n  padding: 0.2em 0.6em 0.3em 0.6em;\n  width: auto;\n  overflow: visible;\n}\n\n.ui-datepicker .ui-datepicker-buttonpane button.ui-datepicker-current {\n  float: left;\n}\n\n/* with multiple calendars */\n.ui-datepicker.ui-datepicker-multi {\n  width: auto;\n}\n\n.ui-datepicker-multi .ui-datepicker-group {\n  float: left;\n}\n\n.ui-datepicker-multi .ui-datepicker-group table {\n  width: 95%;\n  margin: 0 auto 0.4em;\n}\n\n.ui-datepicker-multi-2 .ui-datepicker-group {\n  width: 50%;\n}\n\n.ui-datepicker-multi-3 .ui-datepicker-group {\n  width: 33.3%;\n}\n\n.ui-datepicker-multi-4 .ui-datepicker-group {\n  width: 25%;\n}\n\n.ui-datepicker-multi .ui-datepicker-group-last .ui-datepicker-header,\n.ui-datepicker-multi .ui-datepicker-group-middle .ui-datepicker-header {\n  border-left-width: 0;\n}\n\n.ui-datepicker-multi .ui-datepicker-buttonpane {\n  clear: left;\n}\n\n.ui-datepicker-row-break {\n  clear: both;\n  width: 100%;\n  font-size: 0;\n}\n\n/* RTL support */\n.ui-datepicker-rtl {\n  direction: rtl;\n}\n\n.ui-datepicker-rtl .ui-datepicker-prev {\n  right: 2px;\n  left: auto;\n}\n\n.ui-datepicker-rtl .ui-datepicker-next {\n  left: 2px;\n  right: auto;\n}\n\n.ui-datepicker-rtl .ui-datepicker-prev:hover {\n  right: 1px;\n  left: auto;\n}\n\n.ui-datepicker-rtl .ui-datepicker-next:hover {\n  left: 1px;\n  right: auto;\n}\n\n.ui-datepicker-rtl .ui-datepicker-buttonpane {\n  clear: right;\n}\n\n.ui-datepicker-rtl .ui-datepicker-buttonpane button {\n  float: left;\n}\n\n.ui-datepicker-rtl .ui-datepicker-buttonpane button.ui-datepicker-current,\n.ui-datepicker-rtl .ui-datepicker-group {\n  float: right;\n}\n\n.ui-datepicker-rtl .ui-datepicker-group-last .ui-datepicker-header,\n.ui-datepicker-rtl .ui-datepicker-group-middle .ui-datepicker-header {\n  border-right-width: 0;\n  border-left-width: 1px;\n}\n\n/* Icons */\n.ui-datepicker .ui-icon {\n  display: block;\n  text-indent: -99999px;\n  overflow: hidden;\n  background-repeat: no-repeat;\n  left: 0.5em;\n  top: 0.3em;\n}\n\n.ui-dialog {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 0.2em;\n  outline: 0;\n}\n\n.ui-dialog .ui-dialog-titlebar {\n  padding: 0.4em 1em;\n  position: relative;\n}\n\n.ui-dialog .ui-dialog-title {\n  float: left;\n  margin: 0.1em 0;\n  white-space: nowrap;\n  width: 90%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.ui-dialog .ui-dialog-titlebar-close {\n  position: absolute;\n  right: 0.3em;\n  top: 50%;\n  width: 20px;\n  margin: -10px 0 0 0;\n  padding: 1px;\n  height: 20px;\n}\n\n.ui-dialog .ui-dialog-content {\n  position: relative;\n  border: 0;\n  padding: 0.5em 1em;\n  background: none;\n  overflow: auto;\n}\n\n.ui-dialog .ui-dialog-buttonpane {\n  text-align: left;\n  border-width: 1px 0 0 0;\n  background-image: none;\n  margin-top: 0.5em;\n  padding: 0.3em 1em 0.5em 0.4em;\n}\n\n.ui-dialog .ui-dialog-buttonpane .ui-dialog-buttonset {\n  float: right;\n}\n\n.ui-dialog .ui-dialog-buttonpane button {\n  margin: 0.5em 0.4em 0.5em 0;\n  cursor: pointer;\n}\n\n.ui-dialog .ui-resizable-n {\n  height: 2px;\n  top: 0;\n}\n\n.ui-dialog .ui-resizable-e {\n  width: 2px;\n  right: 0;\n}\n\n.ui-dialog .ui-resizable-s {\n  height: 2px;\n  bottom: 0;\n}\n\n.ui-dialog .ui-resizable-w {\n  width: 2px;\n  left: 0;\n}\n\n.ui-dialog .ui-resizable-se,\n.ui-dialog .ui-resizable-sw,\n.ui-dialog .ui-resizable-ne,\n.ui-dialog .ui-resizable-nw {\n  width: 7px;\n  height: 7px;\n}\n\n.ui-dialog .ui-resizable-se {\n  right: 0;\n  bottom: 0;\n}\n\n.ui-dialog .ui-resizable-sw {\n  left: 0;\n  bottom: 0;\n}\n\n.ui-dialog .ui-resizable-ne {\n  right: 0;\n  top: 0;\n}\n\n.ui-dialog .ui-resizable-nw {\n  left: 0;\n  top: 0;\n}\n\n.ui-draggable .ui-dialog-titlebar {\n  cursor: move;\n}\n\n.ui-draggable-handle {\n  -ms-touch-action: none;\n  touch-action: none;\n}\n\n.ui-resizable {\n  position: relative;\n}\n\n.ui-resizable-handle {\n  position: absolute;\n  font-size: 0.1px;\n  display: block;\n  -ms-touch-action: none;\n  touch-action: none;\n}\n\n.ui-resizable-disabled .ui-resizable-handle,\n.ui-resizable-autohide .ui-resizable-handle {\n  display: none;\n}\n\n.ui-resizable-n {\n  cursor: n-resize;\n  height: 7px;\n  width: 100%;\n  top: -5px;\n  left: 0;\n}\n\n.ui-resizable-s {\n  cursor: s-resize;\n  height: 7px;\n  width: 100%;\n  bottom: -5px;\n  left: 0;\n}\n\n.ui-resizable-e {\n  cursor: e-resize;\n  width: 7px;\n  right: -5px;\n  top: 0;\n  height: 100%;\n}\n\n.ui-resizable-w {\n  cursor: w-resize;\n  width: 7px;\n  left: -5px;\n  top: 0;\n  height: 100%;\n}\n\n.ui-resizable-se {\n  cursor: se-resize;\n  width: 12px;\n  height: 12px;\n  right: 1px;\n  bottom: 1px;\n}\n\n.ui-resizable-sw {\n  cursor: sw-resize;\n  width: 9px;\n  height: 9px;\n  left: -5px;\n  bottom: -5px;\n}\n\n.ui-resizable-nw {\n  cursor: nw-resize;\n  width: 9px;\n  height: 9px;\n  left: -5px;\n  top: -5px;\n}\n\n.ui-resizable-ne {\n  cursor: ne-resize;\n  width: 9px;\n  height: 9px;\n  right: -5px;\n  top: -5px;\n}\n\n.ui-progressbar {\n  height: 2em;\n  text-align: left;\n  overflow: hidden;\n}\n\n.ui-progressbar .ui-progressbar-value {\n  margin: -1px;\n  height: 100%;\n}\n\n.ui-progressbar .ui-progressbar-overlay {\n  background: url(\"data:image/gif;base64,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\");\n  height: 100%;\n  filter: alpha(opacity=25);\n  /* support: IE8 */\n  opacity: 0.25;\n}\n\n.ui-progressbar-indeterminate .ui-progressbar-value {\n  background-image: none;\n}\n\n.ui-selectable {\n  -ms-touch-action: none;\n  touch-action: none;\n}\n\n.ui-selectable-helper {\n  position: absolute;\n  z-index: 100;\n  border: 1px dotted black;\n}\n\n.ui-selectmenu-menu {\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: none;\n}\n\n.ui-selectmenu-menu .ui-menu {\n  overflow: auto;\n  overflow-x: hidden;\n  padding-bottom: 1px;\n}\n\n.ui-selectmenu-menu .ui-menu .ui-selectmenu-optgroup {\n  font-size: 1em;\n  font-weight: bold;\n  line-height: 1.5;\n  padding: 2px 0.4em;\n  margin: 0.5em 0 0 0;\n  height: auto;\n  border: 0;\n}\n\n.ui-selectmenu-open {\n  display: block;\n}\n\n.ui-selectmenu-text {\n  display: block;\n  margin-right: 20px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.ui-selectmenu-button.ui-button {\n  text-align: left;\n  white-space: nowrap;\n  width: 14em;\n}\n\n.ui-selectmenu-icon.ui-icon {\n  float: right;\n  margin-top: 0;\n}\n\n.ui-slider {\n  position: relative;\n  text-align: left;\n}\n\n.ui-slider .ui-slider-handle {\n  position: absolute;\n  z-index: 2;\n  width: 1.2em;\n  height: 1.2em;\n  cursor: default;\n  -ms-touch-action: none;\n  touch-action: none;\n}\n\n.ui-slider .ui-slider-range {\n  position: absolute;\n  z-index: 1;\n  font-size: 0.7em;\n  display: block;\n  border: 0;\n  background-position: 0 0;\n}\n\n/* support: IE8 - See #6727 */\n.ui-slider.ui-state-disabled .ui-slider-handle,\n.ui-slider.ui-state-disabled .ui-slider-range {\n  filter: inherit;\n}\n\n.ui-slider-horizontal {\n  height: 0.8em;\n}\n\n.ui-slider-horizontal .ui-slider-handle {\n  top: -0.3em;\n  margin-left: -0.6em;\n}\n\n.ui-slider-horizontal .ui-slider-range {\n  top: 0;\n  height: 100%;\n}\n\n.ui-slider-horizontal .ui-slider-range-min {\n  left: 0;\n}\n\n.ui-slider-horizontal .ui-slider-range-max {\n  right: 0;\n}\n\n.ui-slider-vertical {\n  width: 0.8em;\n  height: 100px;\n}\n\n.ui-slider-vertical .ui-slider-handle {\n  left: -0.3em;\n  margin-left: 0;\n  margin-bottom: -0.6em;\n}\n\n.ui-slider-vertical .ui-slider-range {\n  left: 0;\n  width: 100%;\n}\n\n.ui-slider-vertical .ui-slider-range-min {\n  bottom: 0;\n}\n\n.ui-slider-vertical .ui-slider-range-max {\n  top: 0;\n}\n\n.ui-sortable-handle {\n  -ms-touch-action: none;\n  touch-action: none;\n}\n\n.ui-spinner {\n  position: relative;\n  display: inline-block;\n  overflow: hidden;\n  padding: 0;\n  vertical-align: middle;\n}\n\n.ui-spinner-input {\n  border: none;\n  background: none;\n  color: inherit;\n  padding: 0.222em 0;\n  margin: 0.2em 0;\n  vertical-align: middle;\n  margin-left: 0.4em;\n  margin-right: 2em;\n}\n\n.ui-spinner-button {\n  width: 1.6em;\n  height: 50%;\n  font-size: 0.5em;\n  padding: 0;\n  margin: 0;\n  text-align: center;\n  position: absolute;\n  cursor: default;\n  display: block;\n  overflow: hidden;\n  right: 0;\n}\n\n/* more specificity required here to override default borders */\n.ui-spinner a.ui-spinner-button {\n  border-top-style: none;\n  border-bottom-style: none;\n  border-right-style: none;\n}\n\n.ui-spinner-up {\n  top: 0;\n}\n\n.ui-spinner-down {\n  bottom: 0;\n}\n\n.ui-tabs {\n  position: relative;\n  /* position: relative prevents IE scroll bug (element with position: relative inside container with overflow: auto appear as \"fixed\") */\n  padding: 0.2em;\n}\n\n.ui-tabs .ui-tabs-nav {\n  margin: 0;\n  padding: 0.2em 0.2em 0;\n}\n\n.ui-tabs .ui-tabs-nav li {\n  list-style: none;\n  float: left;\n  position: relative;\n  top: 0;\n  margin: 1px 0.2em 0 0;\n  border-bottom-width: 0;\n  padding: 0;\n  white-space: nowrap;\n}\n\n.ui-tabs .ui-tabs-nav .ui-tabs-anchor {\n  float: left;\n  padding: 0.5em 1em;\n  text-decoration: none;\n}\n\n.ui-tabs .ui-tabs-nav li.ui-tabs-active {\n  margin-bottom: -1px;\n  padding-bottom: 1px;\n}\n\n.ui-tabs .ui-tabs-nav li.ui-tabs-active .ui-tabs-anchor,\n.ui-tabs .ui-tabs-nav li.ui-state-disabled .ui-tabs-anchor,\n.ui-tabs .ui-tabs-nav li.ui-tabs-loading .ui-tabs-anchor {\n  cursor: text;\n}\n\n.ui-tabs-collapsible .ui-tabs-nav li.ui-tabs-active .ui-tabs-anchor {\n  cursor: pointer;\n}\n\n.ui-tabs .ui-tabs-panel {\n  display: block;\n  border-width: 0;\n  padding: 1em 1.4em;\n  background: none;\n}\n\n.ui-tooltip {\n  padding: 8px;\n  position: absolute;\n  z-index: 9999;\n  max-width: 300px;\n}\n\nbody .ui-tooltip {\n  border-width: 2px;\n}\n\n/* Component containers\n----------------------------------*/\n.ui-widget {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1em;\n}\n\n.ui-widget .ui-widget {\n  font-size: 1em;\n}\n\n.ui-widget input,\n.ui-widget select,\n.ui-widget textarea,\n.ui-widget button {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1em;\n}\n\n.ui-widget.ui-widget-content {\n  border: 1px solid #c5c5c5;\n}\n\n.ui-widget-content {\n  border: 1px solid #dddddd;\n  background: #ffffff;\n  color: #333333;\n}\n\n.ui-widget-content a {\n  color: #333333;\n}\n\n.ui-widget-header {\n  border: 1px solid #dddddd;\n  background: #e9e9e9;\n  color: #333333;\n  font-weight: bold;\n}\n\n.ui-widget-header a {\n  color: #333333;\n}\n\n/* Interaction states\n----------------------------------*/\n.ui-state-default,\n.ui-widget-content .ui-state-default,\n.ui-widget-header .ui-state-default,\n.ui-button,\nhtml .ui-button.ui-state-disabled:hover,\nhtml .ui-button.ui-state-disabled:active {\n  border: 1px solid #c5c5c5;\n  background: #f6f6f6;\n  font-weight: normal;\n  color: #454545;\n}\n\n.ui-state-default a,\n.ui-state-default a:link,\n.ui-state-default a:visited,\na.ui-button,\na:link.ui-button,\na:visited.ui-button,\n.ui-button {\n  color: #454545;\n  text-decoration: none;\n}\n\n.ui-state-hover,\n.ui-widget-content .ui-state-hover,\n.ui-widget-header .ui-state-hover,\n.ui-state-focus,\n.ui-widget-content .ui-state-focus,\n.ui-widget-header .ui-state-focus,\n.ui-button:hover,\n.ui-button:focus {\n  border: 1px solid #cccccc;\n  background: #ededed;\n  font-weight: normal;\n  color: #2b2b2b;\n}\n\n.ui-state-hover a,\n.ui-state-hover a:hover,\n.ui-state-hover a:link,\n.ui-state-hover a:visited,\n.ui-state-focus a,\n.ui-state-focus a:hover,\n.ui-state-focus a:link,\n.ui-state-focus a:visited,\na.ui-button:hover,\na.ui-button:focus {\n  color: #2b2b2b;\n  text-decoration: none;\n}\n\n.ui-visual-focus {\n  box-shadow: 0 0 3px 1px #5e9ed6;\n}\n\n.ui-state-active,\n.ui-widget-content .ui-state-active,\n.ui-widget-header .ui-state-active,\na.ui-button:active,\n.ui-button:active,\n.ui-button.ui-state-active:hover {\n  border: 1px solid #003eff;\n  background: #007fff;\n  font-weight: normal;\n  color: #ffffff;\n}\n\n.ui-icon-background,\n.ui-state-active .ui-icon-background {\n  border: #003eff;\n  background-color: #ffffff;\n}\n\n.ui-state-active a,\n.ui-state-active a:link,\n.ui-state-active a:visited {\n  color: #ffffff;\n  text-decoration: none;\n}\n\n/* Interaction Cues\n----------------------------------*/\n.ui-state-highlight,\n.ui-widget-content .ui-state-highlight,\n.ui-widget-header .ui-state-highlight {\n  border: 1px solid #dad55e;\n  background: #fffa90;\n  color: #777620;\n}\n\n.ui-state-checked {\n  border: 1px solid #dad55e;\n  background: #fffa90;\n}\n\n.ui-state-highlight a,\n.ui-widget-content .ui-state-highlight a,\n.ui-widget-header .ui-state-highlight a {\n  color: #777620;\n}\n\n.ui-state-error,\n.ui-widget-content .ui-state-error,\n.ui-widget-header .ui-state-error {\n  border: 1px solid #f1a899;\n  background: #fddfdf;\n  color: #5f3f3f;\n}\n\n.ui-state-error a,\n.ui-widget-content .ui-state-error a,\n.ui-widget-header .ui-state-error a {\n  color: #5f3f3f;\n}\n\n.ui-state-error-text,\n.ui-widget-content .ui-state-error-text,\n.ui-widget-header .ui-state-error-text {\n  color: #5f3f3f;\n}\n\n.ui-priority-primary,\n.ui-widget-content .ui-priority-primary,\n.ui-widget-header .ui-priority-primary {\n  font-weight: bold;\n}\n\n.ui-priority-secondary,\n.ui-widget-content .ui-priority-secondary,\n.ui-widget-header .ui-priority-secondary {\n  opacity: 0.7;\n  filter: Alpha(Opacity=70);\n  /* support: IE8 */\n  font-weight: normal;\n}\n\n.ui-state-disabled,\n.ui-widget-content .ui-state-disabled,\n.ui-widget-header .ui-state-disabled {\n  opacity: 0.35;\n  filter: Alpha(Opacity=35);\n  /* support: IE8 */\n  background-image: none;\n}\n\n.ui-state-disabled .ui-icon {\n  filter: Alpha(Opacity=35);\n  /* support: IE8 - See #6059 */\n}\n\n/* Icons\n----------------------------------*/\n/* states and images */\n.ui-icon {\n  width: 16px;\n  height: 16px;\n}\n\n.ui-icon,\n.ui-widget-content .ui-icon {\n  background-image: url(\"/image/jqueryui/ui-icons_444444_256x240.png\");\n}\n\n.ui-widget-header .ui-icon {\n  background-image: url(\"/image/jqueryui/ui-icons_444444_256x240.png\");\n}\n\n.ui-state-hover .ui-icon,\n.ui-state-focus .ui-icon,\n.ui-button:hover .ui-icon,\n.ui-button:focus .ui-icon {\n  background-image: url(\"/image/jqueryui/ui-icons_555555_256x240.png\");\n}\n\n.ui-state-active .ui-icon,\n.ui-button:active .ui-icon {\n  background-image: url(\"/image/jqueryui/ui-icons_ffffff_256x240.png\");\n}\n\n.ui-state-highlight .ui-icon,\n.ui-button .ui-state-highlight.ui-icon {\n  background-image: url(\"/image/jqueryui/ui-icons_777620_256x240.png\");\n}\n\n.ui-state-error .ui-icon,\n.ui-state-error-text .ui-icon {\n  background-image: url(\"/image/jqueryui/ui-icons_cc0000_256x240.png\");\n}\n\n.ui-button .ui-icon {\n  background-image: url(\"/image/jqueryui/ui-icons_777777_256x240.png\");\n}\n\n/* positioning */\n.ui-icon-blank {\n  background-position: 16px 16px;\n}\n\n.ui-icon-caret-1-n {\n  background-position: 0 0;\n}\n\n.ui-icon-caret-1-ne {\n  background-position: -16px 0;\n}\n\n.ui-icon-caret-1-e {\n  background-position: -32px 0;\n}\n\n.ui-icon-caret-1-se {\n  background-position: -48px 0;\n}\n\n.ui-icon-caret-1-s {\n  background-position: -65px 0;\n}\n\n.ui-icon-caret-1-sw {\n  background-position: -80px 0;\n}\n\n.ui-icon-caret-1-w {\n  background-position: -96px 0;\n}\n\n.ui-icon-caret-1-nw {\n  background-position: -112px 0;\n}\n\n.ui-icon-caret-2-n-s {\n  background-position: -128px 0;\n}\n\n.ui-icon-caret-2-e-w {\n  background-position: -144px 0;\n}\n\n.ui-icon-triangle-1-n {\n  background-position: 0 -16px;\n}\n\n.ui-icon-triangle-1-ne {\n  background-position: -16px -16px;\n}\n\n.ui-icon-triangle-1-e {\n  background-position: -32px -16px;\n}\n\n.ui-icon-triangle-1-se {\n  background-position: -48px -16px;\n}\n\n.ui-icon-triangle-1-s {\n  background-position: -65px -16px;\n}\n\n.ui-icon-triangle-1-sw {\n  background-position: -80px -16px;\n}\n\n.ui-icon-triangle-1-w {\n  background-position: -96px -16px;\n}\n\n.ui-icon-triangle-1-nw {\n  background-position: -112px -16px;\n}\n\n.ui-icon-triangle-2-n-s {\n  background-position: -128px -16px;\n}\n\n.ui-icon-triangle-2-e-w {\n  background-position: -144px -16px;\n}\n\n.ui-icon-arrow-1-n {\n  background-position: 0 -32px;\n}\n\n.ui-icon-arrow-1-ne {\n  background-position: -16px -32px;\n}\n\n.ui-icon-arrow-1-e {\n  background-position: -32px -32px;\n}\n\n.ui-icon-arrow-1-se {\n  background-position: -48px -32px;\n}\n\n.ui-icon-arrow-1-s {\n  background-position: -65px -32px;\n}\n\n.ui-icon-arrow-1-sw {\n  background-position: -80px -32px;\n}\n\n.ui-icon-arrow-1-w {\n  background-position: -96px -32px;\n}\n\n.ui-icon-arrow-1-nw {\n  background-position: -112px -32px;\n}\n\n.ui-icon-arrow-2-n-s {\n  background-position: -128px -32px;\n}\n\n.ui-icon-arrow-2-ne-sw {\n  background-position: -144px -32px;\n}\n\n.ui-icon-arrow-2-e-w {\n  background-position: -160px -32px;\n}\n\n.ui-icon-arrow-2-se-nw {\n  background-position: -176px -32px;\n}\n\n.ui-icon-arrowstop-1-n {\n  background-position: -192px -32px;\n}\n\n.ui-icon-arrowstop-1-e {\n  background-position: -208px -32px;\n}\n\n.ui-icon-arrowstop-1-s {\n  background-position: -224px -32px;\n}\n\n.ui-icon-arrowstop-1-w {\n  background-position: -240px -32px;\n}\n\n.ui-icon-arrowthick-1-n {\n  background-position: 1px -48px;\n}\n\n.ui-icon-arrowthick-1-ne {\n  background-position: -16px -48px;\n}\n\n.ui-icon-arrowthick-1-e {\n  background-position: -32px -48px;\n}\n\n.ui-icon-arrowthick-1-se {\n  background-position: -48px -48px;\n}\n\n.ui-icon-arrowthick-1-s {\n  background-position: -64px -48px;\n}\n\n.ui-icon-arrowthick-1-sw {\n  background-position: -80px -48px;\n}\n\n.ui-icon-arrowthick-1-w {\n  background-position: -96px -48px;\n}\n\n.ui-icon-arrowthick-1-nw {\n  background-position: -112px -48px;\n}\n\n.ui-icon-arrowthick-2-n-s {\n  background-position: -128px -48px;\n}\n\n.ui-icon-arrowthick-2-ne-sw {\n  background-position: -144px -48px;\n}\n\n.ui-icon-arrowthick-2-e-w {\n  background-position: -160px -48px;\n}\n\n.ui-icon-arrowthick-2-se-nw {\n  background-position: -176px -48px;\n}\n\n.ui-icon-arrowthickstop-1-n {\n  background-position: -192px -48px;\n}\n\n.ui-icon-arrowthickstop-1-e {\n  background-position: -208px -48px;\n}\n\n.ui-icon-arrowthickstop-1-s {\n  background-position: -224px -48px;\n}\n\n.ui-icon-arrowthickstop-1-w {\n  background-position: -240px -48px;\n}\n\n.ui-icon-arrowreturnthick-1-w {\n  background-position: 0 -64px;\n}\n\n.ui-icon-arrowreturnthick-1-n {\n  background-position: -16px -64px;\n}\n\n.ui-icon-arrowreturnthick-1-e {\n  background-position: -32px -64px;\n}\n\n.ui-icon-arrowreturnthick-1-s {\n  background-position: -48px -64px;\n}\n\n.ui-icon-arrowreturn-1-w {\n  background-position: -64px -64px;\n}\n\n.ui-icon-arrowreturn-1-n {\n  background-position: -80px -64px;\n}\n\n.ui-icon-arrowreturn-1-e {\n  background-position: -96px -64px;\n}\n\n.ui-icon-arrowreturn-1-s {\n  background-position: -112px -64px;\n}\n\n.ui-icon-arrowrefresh-1-w {\n  background-position: -128px -64px;\n}\n\n.ui-icon-arrowrefresh-1-n {\n  background-position: -144px -64px;\n}\n\n.ui-icon-arrowrefresh-1-e {\n  background-position: -160px -64px;\n}\n\n.ui-icon-arrowrefresh-1-s {\n  background-position: -176px -64px;\n}\n\n.ui-icon-arrow-4 {\n  background-position: 0 -80px;\n}\n\n.ui-icon-arrow-4-diag {\n  background-position: -16px -80px;\n}\n\n.ui-icon-extlink {\n  background-position: -32px -80px;\n}\n\n.ui-icon-newwin {\n  background-position: -48px -80px;\n}\n\n.ui-icon-refresh {\n  background-position: -64px -80px;\n}\n\n.ui-icon-shuffle {\n  background-position: -80px -80px;\n}\n\n.ui-icon-transfer-e-w {\n  background-position: -96px -80px;\n}\n\n.ui-icon-transferthick-e-w {\n  background-position: -112px -80px;\n}\n\n.ui-icon-folder-collapsed {\n  background-position: 0 -96px;\n}\n\n.ui-icon-folder-open {\n  background-position: -16px -96px;\n}\n\n.ui-icon-document {\n  background-position: -32px -96px;\n}\n\n.ui-icon-document-b {\n  background-position: -48px -96px;\n}\n\n.ui-icon-note {\n  background-position: -64px -96px;\n}\n\n.ui-icon-mail-closed {\n  background-position: -80px -96px;\n}\n\n.ui-icon-mail-open {\n  background-position: -96px -96px;\n}\n\n.ui-icon-suitcase {\n  background-position: -112px -96px;\n}\n\n.ui-icon-comment {\n  background-position: -128px -96px;\n}\n\n.ui-icon-person {\n  background-position: -144px -96px;\n}\n\n.ui-icon-print {\n  background-position: -160px -96px;\n}\n\n.ui-icon-trash {\n  background-position: -176px -96px;\n}\n\n.ui-icon-locked {\n  background-position: -192px -96px;\n}\n\n.ui-icon-unlocked {\n  background-position: -208px -96px;\n}\n\n.ui-icon-bookmark {\n  background-position: -224px -96px;\n}\n\n.ui-icon-tag {\n  background-position: -240px -96px;\n}\n\n.ui-icon-home {\n  background-position: 0 -112px;\n}\n\n.ui-icon-flag {\n  background-position: -16px -112px;\n}\n\n.ui-icon-calendar {\n  background-position: -32px -112px;\n}\n\n.ui-icon-cart {\n  background-position: -48px -112px;\n}\n\n.ui-icon-pencil {\n  background-position: -64px -112px;\n}\n\n.ui-icon-clock {\n  background-position: -80px -112px;\n}\n\n.ui-icon-disk {\n  background-position: -96px -112px;\n}\n\n.ui-icon-calculator {\n  background-position: -112px -112px;\n}\n\n.ui-icon-zoomin {\n  background-position: -128px -112px;\n}\n\n.ui-icon-zoomout {\n  background-position: -144px -112px;\n}\n\n.ui-icon-search {\n  background-position: -160px -112px;\n}\n\n.ui-icon-wrench {\n  background-position: -176px -112px;\n}\n\n.ui-icon-gear {\n  background-position: -192px -112px;\n}\n\n.ui-icon-heart {\n  background-position: -208px -112px;\n}\n\n.ui-icon-star {\n  background-position: -224px -112px;\n}\n\n.ui-icon-link {\n  background-position: -240px -112px;\n}\n\n.ui-icon-cancel {\n  background-position: 0 -128px;\n}\n\n.ui-icon-plus {\n  background-position: -16px -128px;\n}\n\n.ui-icon-plusthick {\n  background-position: -32px -128px;\n}\n\n.ui-icon-minus {\n  background-position: -48px -128px;\n}\n\n.ui-icon-minusthick {\n  background-position: -64px -128px;\n}\n\n.ui-icon-close {\n  background-position: -80px -128px;\n}\n\n.ui-icon-closethick {\n  background-position: -96px -128px;\n}\n\n.ui-icon-key {\n  background-position: -112px -128px;\n}\n\n.ui-icon-lightbulb {\n  background-position: -128px -128px;\n}\n\n.ui-icon-scissors {\n  background-position: -144px -128px;\n}\n\n.ui-icon-clipboard {\n  background-position: -160px -128px;\n}\n\n.ui-icon-copy {\n  background-position: -176px -128px;\n}\n\n.ui-icon-contact {\n  background-position: -192px -128px;\n}\n\n.ui-icon-image {\n  background-position: -208px -128px;\n}\n\n.ui-icon-video {\n  background-position: -224px -128px;\n}\n\n.ui-icon-script {\n  background-position: -240px -128px;\n}\n\n.ui-icon-alert {\n  background-position: 0 -144px;\n}\n\n.ui-icon-info {\n  background-position: -16px -144px;\n}\n\n.ui-icon-notice {\n  background-position: -32px -144px;\n}\n\n.ui-icon-help {\n  background-position: -48px -144px;\n}\n\n.ui-icon-check {\n  background-position: -64px -144px;\n}\n\n.ui-icon-bullet {\n  background-position: -80px -144px;\n}\n\n.ui-icon-radio-on {\n  background-position: -96px -144px;\n}\n\n.ui-icon-radio-off {\n  background-position: -112px -144px;\n}\n\n.ui-icon-pin-w {\n  background-position: -128px -144px;\n}\n\n.ui-icon-pin-s {\n  background-position: -144px -144px;\n}\n\n.ui-icon-play {\n  background-position: 0 -160px;\n}\n\n.ui-icon-pause {\n  background-position: -16px -160px;\n}\n\n.ui-icon-seek-next {\n  background-position: -32px -160px;\n}\n\n.ui-icon-seek-prev {\n  background-position: -48px -160px;\n}\n\n.ui-icon-seek-end {\n  background-position: -64px -160px;\n}\n\n.ui-icon-seek-start {\n  background-position: -80px -160px;\n}\n\n/* ui-icon-seek-first is deprecated, use ui-icon-seek-start instead */\n.ui-icon-seek-first {\n  background-position: -80px -160px;\n}\n\n.ui-icon-stop {\n  background-position: -96px -160px;\n}\n\n.ui-icon-eject {\n  background-position: -112px -160px;\n}\n\n.ui-icon-volume-off {\n  background-position: -128px -160px;\n}\n\n.ui-icon-volume-on {\n  background-position: -144px -160px;\n}\n\n.ui-icon-power {\n  background-position: 0 -176px;\n}\n\n.ui-icon-signal-diag {\n  background-position: -16px -176px;\n}\n\n.ui-icon-signal {\n  background-position: -32px -176px;\n}\n\n.ui-icon-battery-0 {\n  background-position: -48px -176px;\n}\n\n.ui-icon-battery-1 {\n  background-position: -64px -176px;\n}\n\n.ui-icon-battery-2 {\n  background-position: -80px -176px;\n}\n\n.ui-icon-battery-3 {\n  background-position: -96px -176px;\n}\n\n.ui-icon-circle-plus {\n  background-position: 0 -192px;\n}\n\n.ui-icon-circle-minus {\n  background-position: -16px -192px;\n}\n\n.ui-icon-circle-close {\n  background-position: -32px -192px;\n}\n\n.ui-icon-circle-triangle-e {\n  background-position: -48px -192px;\n}\n\n.ui-icon-circle-triangle-s {\n  background-position: -64px -192px;\n}\n\n.ui-icon-circle-triangle-w {\n  background-position: -80px -192px;\n}\n\n.ui-icon-circle-triangle-n {\n  background-position: -96px -192px;\n}\n\n.ui-icon-circle-arrow-e {\n  background-position: -112px -192px;\n}\n\n.ui-icon-circle-arrow-s {\n  background-position: -128px -192px;\n}\n\n.ui-icon-circle-arrow-w {\n  background-position: -144px -192px;\n}\n\n.ui-icon-circle-arrow-n {\n  background-position: -160px -192px;\n}\n\n.ui-icon-circle-zoomin {\n  background-position: -176px -192px;\n}\n\n.ui-icon-circle-zoomout {\n  background-position: -192px -192px;\n}\n\n.ui-icon-circle-check {\n  background-position: -208px -192px;\n}\n\n.ui-icon-circlesmall-plus {\n  background-position: 0 -208px;\n}\n\n.ui-icon-circlesmall-minus {\n  background-position: -16px -208px;\n}\n\n.ui-icon-circlesmall-close {\n  background-position: -32px -208px;\n}\n\n.ui-icon-squaresmall-plus {\n  background-position: -48px -208px;\n}\n\n.ui-icon-squaresmall-minus {\n  background-position: -64px -208px;\n}\n\n.ui-icon-squaresmall-close {\n  background-position: -80px -208px;\n}\n\n.ui-icon-grip-dotted-vertical {\n  background-position: 0 -224px;\n}\n\n.ui-icon-grip-dotted-horizontal {\n  background-position: -16px -224px;\n}\n\n.ui-icon-grip-solid-vertical {\n  background-position: -32px -224px;\n}\n\n.ui-icon-grip-solid-horizontal {\n  background-position: -48px -224px;\n}\n\n.ui-icon-gripsmall-diagonal-se {\n  background-position: -64px -224px;\n}\n\n.ui-icon-grip-diagonal-se {\n  background-position: -80px -224px;\n}\n\n/* Misc visuals\n----------------------------------*/\n/* Corner radius */\n.ui-corner-all,\n.ui-corner-top,\n.ui-corner-left,\n.ui-corner-tl {\n  border-top-left-radius: 3px;\n}\n\n.ui-corner-all,\n.ui-corner-top,\n.ui-corner-right,\n.ui-corner-tr {\n  border-top-right-radius: 3px;\n}\n\n.ui-corner-all,\n.ui-corner-bottom,\n.ui-corner-left,\n.ui-corner-bl {\n  border-bottom-left-radius: 3px;\n}\n\n.ui-corner-all,\n.ui-corner-bottom,\n.ui-corner-right,\n.ui-corner-br {\n  border-bottom-right-radius: 3px;\n}\n\n/* Overlays */\n.ui-widget-overlay {\n  background: #aaaaaa;\n  opacity: 0.3;\n  filter: Alpha(Opacity=30);\n  /* support: IE8 */\n}\n\n.ui-widget-shadow {\n  -webkit-box-shadow: 0px 0px 5px #666666;\n  box-shadow: 0px 0px 5px #666666;\n}\n\n.modal-booking .title {\n  font-size: 18px;\n  color: #0d47a1;\n  padding: 0 5px 5px;\n  text-align: center;\n}\n.modal-booking .wrapper__datetime-picker {\n  text-align: center;\n}\n.modal-booking .wrapper__datetime-picker .input-group {\n  width: 30%;\n  margin: 0 auto;\n  display: inline-block;\n  margin: 0 1.5% 15px;\n  position: relative;\n  height: 37px;\n}\n.modal-booking .wrapper__datetime-picker .input-group .hero-icon {\n  position: absolute;\n  top: 50%;\n  left: 10px;\n  display: block;\n  font-size: 28px;\n  z-index: 3;\n  color: #6c757d;\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.modal-booking .wrapper__datetime-picker .input-group .input-control {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  color: #525666;\n  background-color: #fff;\n  padding-left: 45px;\n  border-radius: 0;\n  font-size: 15px;\n  transition: border 0.3s linear;\n  border: 1px solid #ccc;\n}\n.modal-booking .wrapper__datetime-picker .input-group .text-control {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  color: #525666;\n  background-color: #fff;\n  padding: 10px 0 10px 25px;\n  border-radius: 0;\n  font-size: 15px;\n  transition: border 0.3s linear;\n}\n.modal-booking .statistical {\n  width: 100%;\n  display: block;\n}\n.modal-booking .statistical .session-statistical {\n  display: block;\n  position: relative;\n  padding: 5px 0;\n}\n.modal-booking .statistical .session-statistical:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.modal-booking .statistical .session-statistical .head {\n  display: block;\n  float: left;\n  font-size: 16px;\n  padding-right: 15px;\n  z-index: 1;\n  background-color: #fff;\n}\n.modal-booking .statistical .session-statistical .head span {\n  padding-right: 10px;\n  font-size: 14px;\n}\n.modal-booking .statistical .session-statistical .head:after {\n  content: \".\";\n  color: transparent;\n  border-bottom: 1px dashed #343a40;\n  position: absolute;\n  z-index: -1;\n  left: 0;\n  right: 0;\n  bottom: 15px;\n}\n.modal-booking .statistical .session-statistical .text-value {\n  padding-left: 10px;\n  display: block;\n  float: right;\n  font-size: 16px;\n  color: #0d47a1;\n  text-align: right;\n  min-width: 60px;\n  background-color: #fff;\n}\n.modal-booking .statistical .session-statistical.note {\n  font-size: 11px;\n}\n.modal-booking .group-box-total {\n  margin-top: 10px;\n  border-top: 1px solid #dee2e6;\n}\n.modal-booking .group-box-total .wrapper__total {\n  width: 100%;\n  display: table;\n}\n.modal-booking .group-box-total .wrapper__total .head, .modal-booking .group-box-total .wrapper__total .text-value {\n  padding: 10px 0;\n  display: table-cell;\n}\n.modal-booking .group-box-total .wrapper__total .text-value {\n  text-align: right;\n}\n.modal-booking .group-box-total .text-button-question {\n  text-align: center;\n}\n.modal-booking .group-box-total .wrapper-button-setting {\n  text-align: center;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-booking {\n  text-decoration: none;\n  margin: 2px 10px;\n  font-size: 12px;\n  text-align: center;\n  display: inline-block;\n  padding: 8px 15px;\n  border: none;\n  color: #fff;\n  white-space: normal;\n  word-wrap: break-word;\n  vertical-align: middle;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  -o-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  cursor: pointer;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-sitter-accept {\n  background: #007bfc;\n  border: 2px solid #007bfc;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-sitter-accept:hover {\n  background-color: #fff;\n  border: 2px solid #a3cffe;\n  color: #007bfc;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-sitter-accept:focus, .modal-booking .group-box-total .wrapper-button-setting .btn-sitter-accept.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-sitter-accept:disabled, .modal-booking .group-box-total .wrapper-button-setting .btn-sitter-accept.disabled, fieldset:disabled .modal-booking .group-box-total .wrapper-button-setting .btn-sitter-accept {\n  pointer-events: none;\n  opacity: 0.65;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-employer-accept {\n  background: #ff3547;\n  border: 2px solid #ff3547;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-employer-accept:hover {\n  background-color: #fff;\n  border: 2px solid #ffb6bd;\n  color: #ff3547;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-employer-accept:focus, .modal-booking .group-box-total .wrapper-button-setting .btn-employer-accept.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-employer-accept:disabled, .modal-booking .group-box-total .wrapper-button-setting .btn-employer-accept.disabled, fieldset:disabled .modal-booking .group-box-total .wrapper-button-setting .btn-employer-accept {\n  pointer-events: none;\n  opacity: 0.65;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-user-cancel {\n  background: #ff3547;\n  border: 2px solid #ff3547;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-user-cancel:hover {\n  background-color: #fff;\n  border: 2px solid #ffb6bd;\n  color: #ff3547;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-user-cancel:focus, .modal-booking .group-box-total .wrapper-button-setting .btn-user-cancel.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-user-cancel:disabled, .modal-booking .group-box-total .wrapper-button-setting .btn-user-cancel.disabled, fieldset:disabled .modal-booking .group-box-total .wrapper-button-setting .btn-user-cancel {\n  pointer-events: none;\n  opacity: 0.65;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-user-approved {\n  background: #0d47a1;\n  border: 2px solid #0d47a1;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-user-approved:hover {\n  background-color: #fff;\n  border: 2px solid #a8bddd;\n  color: #0d47a1;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-user-approved:focus, .modal-booking .group-box-total .wrapper-button-setting .btn-user-approved.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.modal-booking .group-box-total .wrapper-button-setting .btn-user-approved:disabled, .modal-booking .group-box-total .wrapper-button-setting .btn-user-approved.disabled, fieldset:disabled .modal-booking .group-box-total .wrapper-button-setting .btn-user-approved {\n  pointer-events: none;\n  opacity: 0.65;\n}\n\n@media only screen and (max-width: 768px) {\n  .modal.modal-booking {\n    width: 100%;\n    padding: 10px;\n  }\n  .modal.modal-booking .wrapper__datetime-picker .wrapper__date-picker {\n    width: 60%;\n    margin: 0 1.5% 5px;\n  }\n  .modal.modal-booking .wrapper__datetime-picker .wrapper__time-picker {\n    width: 40%;\n  }\n}", ""]);
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
        /// là nếu token hết hạn thì phải f5 trình duyệt
        var user = this.props.user,
            instance = this;
        var diff = (new Date().getTime() - new Date(user.tokens.period).getTime()) / 1000;

        if (diff >= user.tokens.expire) {
          /// fetch new token
          window.location.reload();
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
    console.log("getAccessTokenByRefesh setime out  window.location.href = CONFIG.SERVER_PHP.URL" + parseInt(response.data.expire));
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
    console.log(response, action);

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
    console.log(EVENT.RESPONSE_MESSAGE, data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9jaGF0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9lbW9qaS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2NoYXQvaGVhZC1pbmZvLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9pbnB1dC1zZW5kLWNoYXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jaGF0L2xpc3QtbWVzc2FnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2NoYXQvbGlzdC11c2VyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9tZXNzYWdlLWNoYXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jaGF0L3NpZGViYXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbi90eXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvQ2hhdC9Cb29raW5nLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoYXQvQm9va2luZ0Vycm9yLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoYXQvQm9va2luZ0ZpbmlzaC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0L0Jvb2tpbmdMb2FkaW5nLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoYXQvQm9va2luZ01vZGFsQ29uZmlybS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0L0Jvb2tpbmdNb2RhbFNldHRpbmcuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvQ2hhdC9Cb29raW5nTm9uZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0L0J0bkJvb2tpbmdNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0L0Vtb2ppLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoYXQvSGVhZEluZm8uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvQ2hhdC9JbnB1dFNlbmRDaGF0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoYXQvTGlzdEVtb2ppLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoYXQvTGlzdE1lc3NhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvQ2hhdC9MaXN0VXNlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0L01lc3NhZ2VDaGF0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoYXQvTWVzc2FnZUNoYXRUeXBpbmcuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvQ2hhdC9TaWRlQmFyQ2hhdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0L1VzZXJDaGF0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoYXQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9jb25maWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWJyYXJ5L3NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlci9ib29raW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2VyL2RldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlci9zb2NrZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIvdXNlci1jaGF0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2NoYXQvY2hhdC5zY3NzP2FjNTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9lbW9qaS5zY3NzPzMxMTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9oZWFkLWluZm8uc2Nzcz84MzE5Iiwid2VicGFjazovLy8uL3NyYy9zY3NzL2NoYXQvaW5wdXQtc2VuZC1jaGF0LnNjc3M/NjdlMCIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jaGF0L2xpc3QtbWVzc2FnZS5zY3NzPzY4YTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9saXN0LXVzZXIuc2Nzcz9iNWQ3Iiwid2VicGFjazovLy8uL3NyYy9zY3NzL2NoYXQvbWVzc2FnZS1jaGF0LnNjc3M/N2NmZCIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jaGF0L3NpZGViYXIuc2Nzcz8yYTkzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2luZGV4LnNjc3M/ODc2NiIsIndlYnBhY2s6Ly8vd3MgKGlnbm9yZWQpIl0sIm5hbWVzIjpbInNldHRlclNvY2tldCIsInNvY2tldCIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiVFlQRSIsIlNPQ0NLRVQiLCJTRVRfU09DS0VUX0lPIiwicGF5bG9hZCIsInNldHRlclVzZXIiLCJ1c2VyIiwiVVNFUiIsIlNFVFRFUl9VU0VSIiwiZmV0Y2hlZCIsInNldHRlckNoYW5uZWxzIiwiY2hhbm5lbHMiLCJDSEFOTkVMIiwiU0VUVEVSX0NIQU5ORUwiLCJhZGRNZXNzYWdlIiwibWVzc2FnZSIsIkFERF9NRVNTQUdFIiwiYWRkTWVzc2FnZVNlbmRUb01lIiwiQUREX01FU1NBR0VfU0VORF9UT19NRSIsImNoYW5nZUNoYW5uZWxBY3RpdmUiLCJjaGFubmVsTmFtZSIsIlNFVF9BQ1RJVkUiLCJhZGRVc2VyT25saW5lIiwiaWQiLCJBRERfVVNFUl9PTkxJTkUiLCJyZW1vdmVVc2VyT25saW5lIiwiUkVNT1ZFX1VTRVJfT05MSU5FIiwicmVhZEFsbE1lc3NhZ2VDaGFubmVsQWN0aXZlIiwiUkVBRF9BTExfTUVTU0FHRV9DSEFOTkVMX0FDVElWRSIsInNldHRlckJvb2tpbmdzIiwiYm9va2luZ3MiLCJCT09LSU5HIiwiU0VUVEVSX0JPT0tJTkciLCJjaGFuZ2VCb29raW5nIiwiYm9va2luZyIsIkNIQU5HRV9CT09LSU5HIiwiSE9NRSIsIkNIQU5HRV9MQVlPVVRTIiwiQ0hBTkdFX1RIRU1FIiwiQ0hBVCIsIkNIQU5HRV9VU0VSX0NIQVRfREVGQVVMVCIsIkNPTkZJRyIsIlNFVFRFUl9TRU5EX1BFRVIiLCJBcHAiLCJwcm9wcyIsInN0YXRlIiwic2VuZFVzZXJPbmxpbmUiLCJKU09OIiwic3RyaW5naWZ5IiwiY2xpZW50IiwiaW5zdGFuY2VBcHAiLCJzb2NrZXRJbml0aWFsQ29ubmVjdCIsInNvY2tldElPQ2xpZW50IiwiRVZFTlQiLCJDT05GSUdfRVZFTlQiLCJhdXRoIiwic2V0U3RhdGUiLCJlbWl0IiwiVVNFUl9PTkxJTkUiLCJwZWVyIiwiYWNjZXNzIiwidG9rZW5zIiwidG9rZW5BY2Nlc3MiLCJVU0VSX0dFVF9CT09LSU5HIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwidXNlcnMiLCJ1c2VyQ2hhdCIsImNvbm5lY3QiLCJCb29raW5nIiwiZGF0YSIsIm1hcCIsIkJvb2tpbmdFcnJvciIsIkJvb2tpbmdGaW5pc2giLCJjYWxjdWxhdG9yQmlsbCIsIndvcmtfZGF0ZSIsInN0YXJ0IiwiZmluaXNoIiwic2FsYXJ5IiwiZGlmZmVyZW5jZVRpbWUiLCJwcmljZSIsInZhdCIsIm15U2VydkZlZSIsInN0cmlwZVNlcnZGZWUiLCJ0b3RhbCIsInJvbGVfaWQiLCJST0xFX1VTRVIiLCJzaXR0ZXIiLCJlbXBsb3llciIsImNvbnZlcnRhdGlvbnMiLCJCb29raW5nTG9hZGluZyIsIkJvb2tpbmdNb2RhbENvbmZpcm0iLCJjYW5jZWxBY2NlcHQiLCIkIiwibW9kYWwiLCJlc2NhcGVDbG9zZSIsImNsaWNrQ2xvc2UiLCJzaG93Q2xvc2UiLCJmaW5hbEFjY2VwdCIsImNoYW5uZWxBY3RpdmUiLCJmaW5kIiwiY2hhbm5lbCIsImlzQWN0aXZlIiwiYm9va2luZ1VwZGF0ZSIsImJvb2tpbmdfaWQiLCJzaXR0ZXJfYWNjZXB0Iiwic3RhdHVzIiwiZW1wbG95ZXJfYWNjZXB0IiwidXNlcklkIiwic2VuZEJvb2tpbmdVcGRhdGUiLCJjbG9zZSIsImRhdGVwaWNrZXJGYWN0b3J5IiwiZGF0ZXBpY2tlckpBRmFjdG9yeSIsIkJvb2tpbmdNb2RhbFNldHRpbmciLCJzaXR0ZXJBY2NlcHRCaWxsIiwiZW1wbG95ZXJBY2NlcHRCaWxsIiwiX2luc3RhbmNlIiwic2VsZWN0b3JUaW1lU3RhcnQiLCJzZWxlY3RvclRpbWVGaW5pc2giLCJzZWxlY3RvckRhdGVwaWNrZXIiLCJ0aW1lcGlja2VyIiwib24iLCJzdGFydENoYW5nZSIsInZhbCIsImZpbmlzaENoYW5nZSIsImRhdGVwaWNrZXIiLCJkYXRlRm9ybWF0Iiwib25TZWxlY3QiLCJkYXRlVGV4dCIsImluc3QiLCJ1cGRhdGUiLCJkaXNwYXRjaCIsImJvb2tpbmdQcm9wcyIsImlzRWRpdCIsImNsYXNzQnRuU2l0dGVyIiwidGV4dEJ0blNpdHRlciIsImNsaWNrQnRuU2l0dGVyIiwiY2xhc3NCdG5FbXBsb3llciIsInRleHRCdG5FbXBsb3llciIsImNsaWNrQnRuRW1wbG95ZXIiLCJCb29raW5nTm9uZSIsIkJ0bkJvb2tpbmdNb2RhbCIsImNob29zZU9yZGVyIiwiZmV0Y2giLCJjaGFubmVsQWN0aXZlQ2hhdCIsInVzZXJBY3RpdmUiLCJlbXBsb3llcl9pZCIsInNpdHRlcl9pZCIsIkVtb2ppIiwiYWRkSWNvbklucHV0Q2hhdCIsImV2ZW50IiwiaW5wdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29udGVudCIsInZhbHVlIiwic3ltYm9sIiwiSGVhZEluZm8iLCJzaWRlYmFyIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImxlbmd0aCIsIm1lc3NhZ2VzIiwic3R5bGUiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJ0ZXh0T25saW5lIiwib25saW5lIiwiaHJlZlVzZXIiLCJST1VURV9WSUVXX1NJVFRFUiIsIlJPVVRFX1ZJRVdfRU1QTE9ZRVIiLCJTRVJWRVJfUEhQIiwiVVJMIiwiYXZhdGFyIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsIklucHV0U2VuZENoYXQiLCJzdWJtaXRNZXNzYWdlQ2hhdCIsImF0dGFjaG1lbnQiLCJlbW9qaUNoYXQiLCJjb25maWciLCJFTU9KSVMiLCJmaWx0ZXIiLCJlbW9qaSIsInRyaW0iLCJpbnN0YW5jZSIsImRpZmYiLCJEYXRlIiwiZ2V0VGltZSIsInBlcmlvZCIsImV4cGlyZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwibWVzc2FnZVNlbmRUb0NoYW5uZWwiLCJjaGFubmVsU2VuZCIsImNoYW5uZWxJZCIsImRldGVjdCIsInNlbmRNZXNzYWdlVG9DaGFubmVsIiwiaGFuZGxlU2VuZEVtb2ppU3VibWl0IiwiaGFuZGxlU2VuZE1lc3NhZ2VTdWJtaXQiLCJ1cmxBdHRhY2htZW50IiwiaW1hZ2VzRG9tIiwiaW1hZ2VzIiwiaW5kZXhfaW1hZ2Vfc2VuZCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicHVzaCIsInVybCIsImdldEF0dHJpYnV0ZSIsInRpbWUiLCJpbm5lckhUTUwiLCJoYW5kbGVTZW5kTWVzc2FnZURvd24iLCJrZXlDb2RlIiwic2hpZnRLZXkiLCJ0YXJnZXQiLCJzZW5kQ2hhdCIsIndvcmRzIiwic3BsaXQiLCJ3b3JkTGFzdGVzdCIsImVtb2ppc0NhbGwiLCJpdGVtIiwic2lnbiIsImxhc3RJbmRleCIsImxhc3RJbmRleE9mIiwic3Vic3RyaW5nIiwiaGFuZGxlU2VuZE1lc3NhZ2VVcCIsImltYWdlRmlsZUNhbGxiYWNrIiwiaW1nTG9hZGluZyIsIndpZHRoIiwid3JhcHBlckltYWdlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uY2xpY2siLCJyZW1vdmUiLCJhcHBlbmRDaGlsZCIsInJldHJpZXZlSW1hZ2UiLCJmaWxlIiwiY2FsbGJhY2siLCJzYXZlQmxvYlRvU2VydmVyIiwiaW1nIiwiSW1hZ2UiLCJvbmxvYWQiLCJVUkxPYmoiLCJ3ZWJraXRVUkwiLCJzcmMiLCJjcmVhdGVPYmplY3RVUkwiLCJlcnJvciIsInJldHJpZXZlRmlsZSIsInJldHJpZXZlSW1hZ2VGcm9tQ2xpcGJvYXJkQXNCbG9iIiwicGFzdGVFdmVudCIsImNsaXBib2FyZERhdGEiLCJ1bmRlZmluZWQiLCJpdGVtcyIsImkiLCJpbmRleE9mIiwiZ2V0QXNGaWxlIiwic2hvd0xpc3RFbW9qaSIsImVtb2ppcyIsImFkZCIsImhhbmRsZVNlbmRDaGF0Q2xpY2siLCJzZW5kVHlwaW5nTWVzc2FnZVRvQ2hhbm5lbCIsImNob29zZUZpbGUiLCJjbGljayIsInNhdmVGaWxlIiwiZmlsZXMiLCJhY2NlcHQiLCJleGVjIiwibmFtZSIsImFsZXJ0IiwiYmluZCIsInN1cCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkb21TY3JvbGwiLCJkb21Xcml0ZXIiLCJzY3JvbGxIZWlnaHQiLCJsaXN0ZW5SZWFkTWVzc2FnZU5ld1VzZXIiLCJzY3JvbGxUb3AiLCJvbmUiLCJMaXN0RW1vamkiLCJMaXN0TWVzc2FnZSIsImxzdE1lc3NhZ2UiLCJsaXN0ZW5TY3JvbGxNZXNzYWdlIiwia2V5IiwiTGlzdFVzZXIiLCJjb252ZXJzYXRpb25zIiwiTWVzc2FnZUNoYXQiLCJteWluZm8iLCJ1c2VySW5mbyIsInR5cGVNZXNzYWdlIiwiVElNRV9ESUVfRklMRSIsImF0dGFjaEVsZW1lbnQiLCJpbmRleCIsInJlYWQiLCJNZXNzYWdlQ2hhdFR5cGluZyIsInRvVXNlciIsImNoYW5uZWxJbmZvciIsInVzZXJUeXBpbmciLCJTaWRlQmFyQ2hhdCIsImluZm9yIiwiVXNlckNoYXQiLCJjaGFuZ2VBY3RpdmVVc2VyIiwiZSIsImNsYXNzQWN0aXZlT25saW5lIiwiY2xhc3NBY3RpdmVNZXNzYWdlIiwic2xpY2UiLCJsYXN0SXRlbSIsIm11bmJlck5vbmVSZWFkIiwiQ2hhdCIsImluc3RhbmNlQ2hhdCIsIlRPS0VOX1JFRkVTSF9ET00iLCJyZWZlc2giLCJnZXRBY2Nlc3NUb2tlbkJ5UmVmZXNoIiwibG9jYWwiLCJsb2NhbF9pcCIsImxvY2FsX3BvcnQiLCJwZWVyX3BvcnQiLCJTRVJWRVIiLCJQT1JUIiwiRE9NQUlOIiwiSVAiLCJQRUVSX1BPUlQiLCJQUk9UT0NPTCIsIkFTU0VUIiwicG9ydF91cmwiLCJwcm90b2NvbCIsImFkbWluIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlJlZHVjZXIiLCJzdWJzY3JpYmUiLCJnZXRTdGF0ZSIsIlN0b3JhZ2UiLCJSZWFjdERPTSIsInJlbmRlciIsImdsb2JhbFN0cmVhbSIsInNldFRpbWVvdXQiLCJpbnN0YW5jZUNvbXBvbmVudCIsInRva2Vuc1VzZXIiLCJtZXRob2QiLCJib2R5IiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzcG9uc2UiLCJjb2RlIiwiRXJyb3IiLCJ0b2tlblJlZmVzaCIsInBhcnNlSW50IiwiaHJlZiIsInVzZXJMb2dpbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJkYXRhRmV0Y2hDaGFubmVsIiwiZmV0Y2hDaGFubmVsTWVzc2FnZSIsImRhdGFDaGFubmVsIiwiQXBwbGljYXRpb25Eb20iLCJzb2NrZXRMaXN0ZW5uZXIiLCJyZXBsYWNlIiwiY2FsbGVyIiwib3BlblN0cmVhbSIsInN0cmVhbSIsInBsYXlTdHJlYW0iLCJnZXRQZWVyVXNlckNoYW5uZWwiLCJTRU5EX01FU1NBR0UiLCJTRU5EX1RZUElORyIsIlNJWkVfTElNSVQiLCJzaXplIiwiaGFuZGxlRXJyb3JVcGxvYWRGaWxlIiwiZGF0YUZpbGUiLCJmb3JtIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJhamF4IiwiZW5jdHlwZSIsImNhY2hlIiwiY29udGVudFR5cGUiLCJwcm9jZXNzRGF0YSIsInN1Y2Nlc3MiLCJyZVdyaXRlVXJsIiwic2V0QXR0cmlidXRlIiwidHlwZUZpbGUiLCJmaWxlX25hbWUiLCJleHRlbnRpb25UeXBlIiwiZ2V0VHlwZUZpbGUiLCJpbm5lckhlaWdodCIsImV4aXN0Tm9uZVJlYWQiLCJzb21lIiwiUkVBRF9NRVNTQUdFX0FMTCIsInVzZXJMb2NhbCIsInBhcnNlIiwiZ2V0SXRlbSIsIlVTRVJfQ0hBTkdFX0JPT0tJTkciLCJmSG91ciIsImZNaW51dGUiLCJzSG91ciIsInNNaW51dGUiLCJkYXRlVGltZUZpbmlzaCIsImRhdGVUaW1lU3RhcnQiLCJNYXRoIiwiZmxvb3IiLCJjYWxjdWxhdG9yRmVlU3RyaXBlIiwiYW1vdW50IiwiY3VycmVuY3kiLCJmZWVzIiwiVVNEIiwiUGVyY2VudCIsIkZpeGVkIiwiR0JQIiwiRVVSIiwiQ0FEIiwiQVVEIiwiTk9LIiwiREtLIiwiU0VLIiwiSlBZIiwiTVhOIiwiREVGQVVMVF9QRVJDRU5UX1NUUklQRSIsIl9mZWUiLCJmZWVzU3RyaXBlIiwicGFyc2VGbG9hdCIsImZlZSIsInRvRml4ZWQiLCJmaWxlbmFtZSIsInZhbGlkYXRlRmV0Y2hDaGFubmVsTWVzc2FnZSIsImlzVmFsaWQiLCJJRF9WSUVXX1VTRVJfQ0hBVCIsInVzZXJJZEFjdGl2ZUNoYW5uZWwiLCJhY3Rpb24iLCJVU0VSX09OTElORV9OT1RJIiwiVVNFUl9PRkZMSU5FX05PVEkiLCJSRVNQT05TRV9NRVNTQUdFIiwidG9rZW4iLCJkZXRlY3RMb2NhbCIsIlJFU1BPTlNFX1RZUElORyIsInRpbWVvdXRUeXBpbmciLCJjbGVhclRpbWVvdXQiLCJkb21UeXBpbmciLCJEVVBMSUNBVElPTl9UQUIiLCJSRUFEX01FU1NBR0VfQUxMX1JFU1BPTlNFIiwiUkVTUE9OU0VfVVNFUl9HRVRfQk9PS0lORyIsIlJFU1BPTlNFX1VTRVJfQ0hBTkdFX0JPT0tJTkciLCJtZXNzYWdlRGF0YSIsIlJFU1BPTlNFX1VTRVJfQ0hBTkdFX0JPT0tJTkdfRVJST1IiLCJ0ZXh0IiwiZGF0YUJvb2tpbmciLCJkZXRlY3RDbGllbnQiLCJ1bmtub3duIiwiblZlciIsIm5hdmlnYXRvciIsImFwcFZlcnNpb24iLCJuQWd0IiwidXNlckFnZW50IiwiYnJvd3NlciIsImFwcE5hbWUiLCJ2ZXJzaW9uIiwibWFqb3JWZXJzaW9uIiwibmFtZU9mZnNldCIsInZlck9mZnNldCIsIml4IiwidG9Mb3dlckNhc2UiLCJ0b1VwcGVyQ2FzZSIsImlzTmFOIiwib3MiLCJjbGllbnRTdHJpbmdzIiwicyIsInIiLCJjcyIsInRlc3QiLCJvc1ZlcnNpb24iLCJ0b1N0cmluZyIsImJyb3dzZXJNYWpvclZlcnNpb24iLCJicm93c2VyVmVyc2lvbiIsIkRldGVjdENsaWVudFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJTb2NrZXRSZWR1Y2VyIiwiQXV0aCIsInVzZXJDaGF0RGVmYXVsdCIsImlzQ2hhbmdlZCIsIm5ld1N0YXRlIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQix1QkFBdUI7UUFDdkM7OztRQUdBO1FBQ0E7UUFDQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN2SkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUyxlQUFlLGlDQUFpQywrRkFBK0YsR0FBRyxjQUFjLDBCQUEwQiw0RkFBNEYsR0FBRyxjQUFjLG9DQUFvQyx1RkFBdUYsR0FBRyxjQUFjLHVDQUF1Qyw0RkFBNEYsR0FBRyxjQUFjLDZDQUE2Qyx1R0FBdUcsR0FBRyxxQkFBcUIsMEVBQTBFLDZFQUE2RSx3RUFBd0UseUVBQXlFLHFFQUFxRSxHQUFHLHdCQUF3QixzQkFBc0IsbUJBQW1CLEdBQUcsNEJBQTRCLGdCQUFnQixtQkFBbUIsbUJBQW1CLGNBQWMsbUJBQW1CLHVCQUF1QixxQkFBcUIsR0FBRyxZQUFZLG1CQUFtQixHQUFHO0FBQ2w0QztBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRztBQUNBO0FBQ0EsY0FBYyxRQUFTLGVBQWUsaUNBQWlDLCtGQUErRixHQUFHLGNBQWMsMEJBQTBCLDRGQUE0RixHQUFHLGNBQWMsb0NBQW9DLHVGQUF1RixHQUFHLGNBQWMsdUNBQXVDLDRGQUE0RixHQUFHLGNBQWMsNkNBQTZDLHVHQUF1RyxHQUFHLHlCQUF5Qix1QkFBdUIsY0FBYyxlQUFlLGtCQUFrQiw4QkFBOEIsd0JBQXdCLDJCQUEyQixlQUFlLHVCQUF1QixjQUFjLEdBQUcsK0JBQStCLGdCQUFnQixtQkFBbUIsbUJBQW1CLGNBQWMsbUJBQW1CLHVCQUF1QixxQkFBcUIsR0FBRyxvQ0FBb0MsMkJBQTJCLDhCQUE4Qix5QkFBeUIsR0FBRyw4QkFBOEIsc0JBQXNCLGtCQUFrQixpQkFBaUIsZUFBZSxnQkFBZ0IsZUFBZSxHQUFHLHNCQUFzQixnQkFBZ0IsaUJBQWlCLGdCQUFnQix1QkFBdUIsbUJBQW1CLG9CQUFvQixzQkFBc0IscURBQXFELHlCQUF5Qix5QkFBeUIsd0NBQXdDLG1CQUFtQixHQUFHO0FBQ2xzRDtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRztBQUNBO0FBQ0EsY0FBYyxRQUFTLGVBQWUsaUNBQWlDLCtGQUErRixHQUFHLGNBQWMsMEJBQTBCLDRGQUE0RixHQUFHLGNBQWMsb0NBQW9DLHVGQUF1RixHQUFHLGNBQWMsdUNBQXVDLDRGQUE0RixHQUFHLGNBQWMsNkNBQTZDLHVHQUF1RyxHQUFHLDBDQUEwQyx1QkFBdUIsdUJBQXVCLDJCQUEyQixxQ0FBcUMscUJBQXFCLEdBQUcsd0RBQXdELHVCQUF1QixhQUFhLG1CQUFtQixlQUFlLGNBQWMsZ0JBQWdCLGlCQUFpQixvQkFBb0IscUJBQXFCLHFCQUFxQix1QkFBdUIsMkJBQTJCLDhCQUE4Qix3Q0FBd0MscUNBQXFDLG1DQUFtQyxvQ0FBb0MsZ0NBQWdDLEdBQUcsNERBQTRELGdCQUFnQixpQkFBaUIsb0JBQW9CLHFCQUFxQixHQUFHLHFEQUFxRCxtQkFBbUIsOEJBQThCLG1CQUFtQixHQUFHLDJEQUEyRCxtQkFBbUIsd0JBQXdCLHFCQUFxQiw0QkFBNEIsbUJBQW1CLDBCQUEwQixHQUFHLGtFQUFrRSxtQkFBbUIsb0JBQW9CLG1CQUFtQix3QkFBd0IscUJBQXFCLDRCQUE0QixHQUFHLDZFQUE2RSxtQkFBbUIsR0FBRztBQUM5b0U7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUyxzQkFBc0IsY0FBYyxpQ0FBaUMsK0ZBQStGLEdBQUcsY0FBYywwQkFBMEIsNEZBQTRGLEdBQUcsY0FBYyxvQ0FBb0MsdUZBQXVGLEdBQUcsY0FBYyx1Q0FBdUMsNEZBQTRGLEdBQUcsY0FBYyw2Q0FBNkMsdUdBQXVHLEdBQUcsOEJBQThCLDhCQUE4QixzQkFBc0IsdUJBQXVCLDhCQUE4QixHQUFHLHVDQUF1QywyQkFBMkIscUJBQXFCLHNCQUFzQix1QkFBdUIsaUJBQWlCLHVCQUF1Qiw4QkFBOEIsd0JBQXdCLDhCQUE4QixvQkFBb0IsMEJBQTBCLGNBQWMsMEJBQTBCLDZCQUE2QixHQUFHLDZDQUE2QywwQkFBMEIsbUJBQW1CLEdBQUcsMERBQTBELG1CQUFtQixHQUFHLGtDQUFrQyx1QkFBdUIsZ0JBQWdCLGlCQUFpQixvQkFBb0IsbUJBQW1CLEdBQUcsa0RBQWtELGNBQWMsR0FBRyxrREFBa0QsZUFBZSxHQUFHLDhDQUE4QyxlQUFlLEdBQUcsOENBQThDLDBCQUEwQixlQUFlLGdCQUFnQixHQUFHLCtDQUErQyxnQkFBZ0Isa0JBQWtCLGVBQWUsR0FBRyx5REFBeUQsc0JBQXNCLHFCQUFxQiwwQkFBMEIsdUJBQXVCLEdBQUcsK0RBQStELHVCQUF1QixhQUFhLGVBQWUsb0JBQW9CLGdCQUFnQixpQkFBaUIsdUJBQXVCLDBCQUEwQiwyQkFBMkIsb0JBQW9CLHNCQUFzQixxREFBcUQseUJBQXlCLHlCQUF5Qix3Q0FBd0MsR0FBRyxtRUFBbUUsaUJBQWlCLEdBQUcscUVBQXFFLDJCQUEyQiw4QkFBOEIseUJBQXlCLEdBQUcsK0NBQStDLGlCQUFpQixpQkFBaUIsR0FBRztBQUMzMUY7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUyxlQUFlLGlDQUFpQywrRkFBK0YsR0FBRyxjQUFjLDBCQUEwQiw0RkFBNEYsR0FBRyxjQUFjLG9DQUFvQyx1RkFBdUYsR0FBRyxjQUFjLHVDQUF1Qyw0RkFBNEYsR0FBRyxjQUFjLDZDQUE2Qyx1R0FBdUcsR0FBRywyQkFBMkIsZ0JBQWdCLGVBQWUsbUNBQW1DLHFCQUFxQixHQUFHLGlEQUFpRCx1QkFBdUIsa0JBQWtCLGtCQUFrQix1QkFBdUIsZ0RBQWdELHFDQUFxQyw2QkFBNkIsR0FBRyx1REFBdUQsZ0JBQWdCLG1CQUFtQixtQkFBbUIsY0FBYyxtQkFBbUIsdUJBQXVCLHFCQUFxQixHQUFHLG9FQUFvRSxlQUFlLDhCQUE4QixHQUFHLDBFQUEwRSx3QkFBd0IseURBQXlELDJCQUEyQixHQUFHLGlFQUFpRSxlQUFlLDhCQUE4QixHQUFHLHVFQUF1RSx3QkFBd0Isc0RBQXNELDJCQUEyQixHQUFHLCtEQUErRCxlQUFlLDhCQUE4QixHQUFHLHFFQUFxRSx3QkFBd0Isb0RBQW9ELDJCQUEyQixHQUFHLGdFQUFnRSxlQUFlLDhCQUE4QixHQUFHLHNFQUFzRSx3QkFBd0IscURBQXFELDJCQUEyQixHQUFHLGtCQUFrQiwwQkFBMEIsb0JBQW9CLEdBQUcseUJBQXlCLHdCQUF3QixrQkFBa0IsaUJBQWlCLEdBQUcsZ0NBQWdDLDhCQUE4Qix3RUFBd0UsZ0VBQWdFLHVCQUF1QiwwQkFBMEIsZ0JBQWdCLHNCQUFzQixlQUFlLEdBQUcsNkNBQTZDLG1DQUFtQywyQkFBMkIsR0FBRyw2Q0FBNkMsbUNBQW1DLDJCQUEyQixHQUFHLDZDQUE2QyxtQ0FBbUMsMkJBQTJCLEdBQUcsK0NBQStDLFFBQVEseUNBQXlDLEtBQUssU0FBUywwQ0FBMEMsS0FBSyxTQUFTLHlDQUF5QyxLQUFLLEdBQUcsNkNBQTZDLDZCQUE2QixpQkFBaUIsS0FBSyxHQUFHLDZDQUE2Qyw2QkFBNkIsK0JBQStCLEtBQUssbURBQW1ELG9CQUFvQixLQUFLLEdBQUc7QUFDenJIO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0E7QUFDQSxjQUFjLFFBQVMsZUFBZSxpQ0FBaUMsK0ZBQStGLEdBQUcsY0FBYywwQkFBMEIsNEZBQTRGLEdBQUcsY0FBYyxvQ0FBb0MsdUZBQXVGLEdBQUcsY0FBYyx1Q0FBdUMsNEZBQTRGLEdBQUcsY0FBYyw2Q0FBNkMsdUdBQXVHLEdBQUcsZ0NBQWdDLHVCQUF1QixHQUFHLG1EQUFtRCx1QkFBdUIsZ0JBQWdCLHVCQUF1QixxQkFBcUIsZ0JBQWdCLG9CQUFvQixtQkFBbUIsdUJBQXVCLDhCQUE4QixtQkFBbUIsR0FBRywyQ0FBMkMscUJBQXFCLHVCQUF1QixpQkFBaUIsb0JBQW9CLEdBQUcsMERBQTBELDhCQUE4QixHQUFHLGdFQUFnRSwwQkFBMEIsR0FBRyxzRUFBc0UsOEJBQThCLEdBQUcseURBQXlELHVCQUF1QixhQUFhLG1CQUFtQixlQUFlLGdCQUFnQixpQkFBaUIsb0JBQW9CLHFCQUFxQixjQUFjLHFCQUFxQix1QkFBdUIsMkJBQTJCLDhCQUE4Qix3Q0FBd0MscUNBQXFDLG1DQUFtQyxvQ0FBb0MsZ0NBQWdDLEdBQUcsK0RBQStELG1CQUFtQix1QkFBdUIsdUJBQXVCLFdBQVcsY0FBYyxlQUFlLGdCQUFnQixpQkFBaUIsdUJBQXVCLHFCQUFxQiw4QkFBOEIsd0NBQXdDLHFDQUFxQyxtQ0FBbUMsb0NBQW9DLGdDQUFnQyxHQUFHLDZEQUE2RCxnQkFBZ0IsaUJBQWlCLG9CQUFvQixxQkFBcUIsR0FBRyxzREFBc0QsbUJBQW1CLHdCQUF3QixtQkFBbUIsR0FBRyw0REFBNEQsbUJBQW1CLHdCQUF3QixxQkFBcUIsNEJBQTRCLEdBQUcsb0VBQW9FLG1CQUFtQix3QkFBd0IscUJBQXFCLDRCQUE0QixHQUFHLCtDQUErQyw0REFBNEQsZ0NBQWdDLEtBQUssd0RBQXdELGtCQUFrQix1QkFBdUIsaUJBQWlCLHlCQUF5QixLQUFLLEdBQUc7QUFDcHZHO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0E7QUFDQSxjQUFjLFFBQVMsZUFBZSxpQ0FBaUMsK0ZBQStGLEdBQUcsY0FBYywwQkFBMEIsNEZBQTRGLEdBQUcsY0FBYyxvQ0FBb0MsdUZBQXVGLEdBQUcsY0FBYyx1Q0FBdUMsNEZBQTRGLEdBQUcsY0FBYyw2Q0FBNkMsdUdBQXVHLEdBQUcsaUJBQWlCLHVCQUF1Qix3QkFBd0IsR0FBRyx1QkFBdUIsdUJBQXVCLGFBQWEsY0FBYyxHQUFHLDZCQUE2QixxQkFBcUIsR0FBRyxpQ0FBaUMsZ0JBQWdCLG1CQUFtQixtQkFBbUIsY0FBYyxtQkFBbUIsdUJBQXVCLHFCQUFxQixHQUFHLGdEQUFnRCxrQkFBa0IsbUJBQW1CLHVCQUF1QixlQUFlLDhCQUE4Qix1QkFBdUIsOEJBQThCLGNBQWMsd0NBQXdDLHFDQUFxQyxtQ0FBbUMsb0NBQW9DLGdDQUFnQyxHQUFHLHFEQUFxRCxtQkFBbUIsR0FBRyxzRUFBc0UsbUJBQW1CLGlDQUFpQyxHQUFHLDZDQUE2QyxnQkFBZ0IsbUJBQW1CLG1CQUFtQixjQUFjLG1CQUFtQix1QkFBdUIscUJBQXFCLEdBQUcscURBQXFELDZCQUE2QixHQUFHLG9FQUFvRSwwRUFBMEUsNkVBQTZFLHdFQUF3RSx5RUFBeUUscUVBQXFFLEdBQUcsb0RBQW9ELHNCQUFzQixHQUFHLCtDQUErQyxvQkFBb0IscUJBQXFCLGNBQWMsdUJBQXVCLHFCQUFxQixnQkFBZ0IsR0FBRyxtREFBbUQsZ0JBQWdCLEdBQUcsd0RBQXdELHVCQUF1QixHQUFHLHVFQUF1RSxzQkFBc0IsR0FBRywrREFBK0QsdUJBQXVCLEdBQUcsbUZBQW1GLGlCQUFpQiwwQkFBMEIscUJBQXFCLHVCQUF1QixHQUFHLHVGQUF1RixnQkFBZ0IsaUJBQWlCLEdBQUcsNkdBQTZHLHVCQUF1QixZQUFZLGNBQWMsOEJBQThCLG1CQUFtQix1QkFBdUIsbUJBQW1CLDhCQUE4QixHQUFHLCtHQUErRyxvQkFBb0IsR0FBRywrREFBK0Qsa0JBQWtCLGdDQUFnQyxHQUFHLDhEQUE4RCxxQkFBcUIsa0JBQWtCLHdCQUF3QiwwQkFBMEIsMEJBQTBCLDBFQUEwRSw2RUFBNkUsd0VBQXdFLHlFQUF5RSxxRUFBcUUsR0FBRyxvRUFBb0UsdUNBQXVDLG9CQUFvQixvQkFBb0IsR0FBRyw2REFBNkQsc0JBQXNCLHVDQUF1QyxHQUFHLG9FQUFvRSxvQkFBb0IsR0FBRztBQUNyb0o7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLGNBQWMsUUFBUyxlQUFlLGlDQUFpQywrRkFBK0YsR0FBRyxjQUFjLDBCQUEwQiw0RkFBNEYsR0FBRyxjQUFjLG9DQUFvQyx1RkFBdUYsR0FBRyxjQUFjLHVDQUF1Qyw0RkFBNEYsR0FBRyxjQUFjLDZDQUE2Qyx1R0FBdUcsR0FBRywyQkFBMkIsdUJBQXVCLGdCQUFnQixlQUFlLGdEQUFnRCxxQ0FBcUMsNkJBQTZCLEdBQUcsOENBQThDLGVBQWUsOEJBQThCLEdBQUcsb0RBQW9ELHdCQUF3Qix5REFBeUQsMkJBQTJCLEdBQUcsMkNBQTJDLGVBQWUsOEJBQThCLEdBQUcsaURBQWlELHdCQUF3QixzREFBc0QsMkJBQTJCLEdBQUcseUNBQXlDLGVBQWUsOEJBQThCLEdBQUcsK0NBQStDLHdCQUF3QixvREFBb0QsMkJBQTJCLEdBQUcsMENBQTBDLGVBQWUsOEJBQThCLEdBQUcsZ0RBQWdELHdCQUF3QixxREFBcUQsMkJBQTJCLEdBQUcsNkJBQTZCLDJCQUEyQixHQUFHLGFBQWEsdUJBQXVCLDJCQUEyQixxQ0FBcUMscUJBQXFCLEdBQUcsaUNBQWlDLDBCQUEwQiwyQkFBMkIsaUJBQWlCLGNBQWMscUJBQXFCLHVCQUF1QiwyQkFBMkIsdUJBQXVCLGdCQUFnQixpQkFBaUIsR0FBRyx1Q0FBdUMsbUJBQW1CLHVCQUF1Qix1QkFBdUIsYUFBYSxjQUFjLGVBQWUsZ0JBQWdCLHVCQUF1QiwrQkFBK0IsR0FBRywrQ0FBK0MsK0JBQStCLEdBQUcscUNBQXFDLG9CQUFvQixxQkFBcUIsR0FBRyx5QkFBeUIsd0JBQXdCLHFCQUFxQiw0QkFBNEIsb0JBQW9CLDBCQUEwQiwyQkFBMkIsa0JBQWtCLG1CQUFtQixHQUFHLCtDQUErQyw2QkFBNkIsaUJBQWlCLEtBQUssR0FBRyw2Q0FBNkMsNkJBQTZCLGtCQUFrQixLQUFLLHNEQUFzRCxnQkFBZ0IsMERBQTBELHVEQUF1RCxxREFBcUQsc0RBQXNELGtEQUFrRCxLQUFLLGVBQWUsb0JBQW9CLEtBQUssdUNBQXVDLHNCQUFzQix1QkFBdUIsS0FBSywyQkFBMkIsb0JBQW9CLEtBQUssR0FBRztBQUNobkg7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDN0Y7QUFDQTtBQUNBLGNBQWMsUUFBUyxlQUFlLGlDQUFpQywrRkFBK0YsR0FBRyxjQUFjLDBCQUEwQiw0RkFBNEYsR0FBRyxjQUFjLG9DQUFvQyx1RkFBdUYsR0FBRyxjQUFjLHVDQUF1Qyw0RkFBNEYsR0FBRyxjQUFjLDZDQUE2Qyx1R0FBdUcsR0FBRyw0Q0FBNEMsMkJBQTJCLEdBQUcsWUFBWSwwQkFBMEIscUNBQXFDLEdBQUcsYUFBYSw2QkFBNkIsR0FBRyxxQkFBcUIscUNBQXFDLEdBQUcsY0FBYyw4QkFBOEIsR0FBRyxjQUFjLDhCQUE4QixHQUFHLGtCQUFrQixrQ0FBa0MsR0FBRyxtQkFBbUIsbUNBQW1DLEdBQUcsYUFBYSxvQ0FBb0MsNkJBQTZCLEdBQUcsb0JBQW9CLDJDQUEyQyxvQ0FBb0MsR0FBRyxhQUFhLGtDQUFrQyxHQUFHLGlCQUFpQixrQ0FBa0MsR0FBRyxnQkFBZ0IseUNBQXlDLEdBQUcsZ0JBQWdCLHlDQUF5QyxHQUFHLGlCQUFpQiwwQ0FBMEMsR0FBRyxrQkFBa0Isb0NBQW9DLEdBQUcsZ0JBQWdCLDBDQUEwQyxHQUFHLG1CQUFtQiw2Q0FBNkMsR0FBRyxtQkFBbUIscUNBQXFDLEdBQUcsMEVBQTBFLGdDQUFnQyxHQUFHLGdCQUFnQixnQ0FBZ0MsR0FBRyxpQkFBaUIsZ0NBQWdDLEdBQUcsa0JBQWtCLGdDQUFnQyxHQUFHLGtCQUFrQixnQ0FBZ0MsR0FBRyxvQkFBb0IsZ0NBQWdDLEdBQUcsZ0JBQWdCLGdDQUFnQyxHQUFHLHFCQUFxQixnQ0FBZ0MsR0FBRyxpQkFBaUIsZ0NBQWdDLEdBQUcsa0JBQWtCLHVCQUF1QixHQUFHLGlCQUFpQixzQkFBc0IsR0FBRyxnQkFBZ0IscUJBQXFCLEdBQUcsNEJBQTRCLDJCQUEyQixHQUFHLGNBQWMsc0JBQXNCLHVCQUF1QixHQUFHLHFCQUFxQixrQ0FBa0MsR0FBRyxhQUFhLHlDQUF5QyxHQUFHLGlCQUFpQiw2Q0FBNkMsR0FBRyxtQkFBbUIsK0NBQStDLEdBQUcsb0JBQW9CLGdEQUFnRCxHQUFHLGtCQUFrQiw4Q0FBOEMsR0FBRyxxQkFBcUIsbUJBQW1CLEdBQUcsc0JBQXNCLG1CQUFtQixHQUFHLHdCQUF3QixtQkFBbUIsR0FBRyw2QkFBNkIsbUJBQW1CLEdBQUcsd0JBQXdCLG1CQUFtQixHQUFHLHNCQUFzQixtQkFBbUIsR0FBRyw0QkFBNEIsbUJBQW1CLEdBQUcsc0JBQXNCLG1CQUFtQixHQUFHLHNCQUFzQixtQkFBbUIsR0FBRyx1QkFBdUIsbUJBQW1CLEdBQUcsNkJBQTZCLG1CQUFtQixHQUFHLHNCQUFzQixtQkFBbUIsR0FBRyx3QkFBd0IsbUJBQW1CLEdBQUcsdUJBQXVCLG1CQUFtQixHQUFHLHdCQUF3QixtQkFBbUIsR0FBRyw2QkFBNkIsbUJBQW1CLEdBQUcsdUJBQXVCLG1CQUFtQixHQUFHLHVCQUF1QixnQkFBZ0IsR0FBRyx1QkFBdUIsZ0JBQWdCLEdBQUcsc0JBQXNCLG1CQUFtQixHQUFHLDJCQUEyQixtQkFBbUIsR0FBRyxvQ0FBb0MsbUJBQW1CLEdBQUcsaUNBQWlDLG1CQUFtQixHQUFHLHNDQUFzQyxtQkFBbUIsR0FBRywrQkFBK0IsbUJBQW1CLEdBQUcsb0NBQW9DLG1CQUFtQixHQUFHLDRCQUE0QixtQkFBbUIsR0FBRyxpQ0FBaUMsbUJBQW1CLEdBQUcsK0JBQStCLG1CQUFtQixHQUFHLG9DQUFvQyxtQkFBbUIsR0FBRywrQkFBK0IsbUJBQW1CLEdBQUcsb0NBQW9DLG1CQUFtQixHQUFHLDhCQUE4QixtQkFBbUIsR0FBRyxtQ0FBbUMsbUJBQW1CLEdBQUcsK0JBQStCLG1CQUFtQixHQUFHLG9DQUFvQyxtQkFBbUIsR0FBRywrQkFBK0IsbUJBQW1CLEdBQUcsb0NBQW9DLG1CQUFtQixHQUFHLDhCQUE4QixtQkFBbUIsR0FBRyxtQ0FBbUMsbUJBQW1CLEdBQUcsK0JBQStCLG1CQUFtQixHQUFHLG9DQUFvQyxtQkFBbUIsR0FBRyx5QkFBeUIsbUJBQW1CLEdBQUcsd0JBQXdCLG1CQUFtQixHQUFHLHlCQUF5QixtQkFBbUIsR0FBRyx5QkFBeUIsbUJBQW1CLEdBQUcsc0JBQXNCLG1CQUFtQixHQUFHLHlCQUF5QixtQkFBbUIsR0FBRywyQkFBMkIsbUJBQW1CLEdBQUcsc0JBQXNCLG1CQUFtQixHQUFHLHVCQUF1QixtQkFBbUIsR0FBRyx3QkFBd0IsbUJBQW1CLEdBQUcsdUJBQXVCLDBCQUEwQixHQUFHLHdCQUF3QiwwQkFBMEIsR0FBRywwQkFBMEIsMEJBQTBCLEdBQUcsK0JBQStCLDBCQUEwQixHQUFHLDBCQUEwQiwwQkFBMEIsR0FBRyx3QkFBd0IsMEJBQTBCLEdBQUcsOEJBQThCLDBCQUEwQixHQUFHLHdCQUF3QiwwQkFBMEIsR0FBRyx3QkFBd0IsMEJBQTBCLEdBQUcseUJBQXlCLDBCQUEwQixHQUFHLCtCQUErQiwwQkFBMEIsR0FBRyx3QkFBd0IsMEJBQTBCLEdBQUcsMEJBQTBCLDBCQUEwQixHQUFHLHlCQUF5QiwwQkFBMEIsR0FBRywwQkFBMEIsMEJBQTBCLEdBQUcsK0JBQStCLDBCQUEwQixHQUFHLHlCQUF5QiwwQkFBMEIsR0FBRyx5QkFBeUIsdUJBQXVCLEdBQUcseUJBQXlCLHVCQUF1QixHQUFHLHdCQUF3QiwwQkFBMEIsR0FBRyw2QkFBNkIsMEJBQTBCLEdBQUcsc0NBQXNDLDBCQUEwQixHQUFHLG1DQUFtQywwQkFBMEIsR0FBRyx3Q0FBd0MsMEJBQTBCLEdBQUcsaUNBQWlDLDBCQUEwQixHQUFHLHNDQUFzQywwQkFBMEIsR0FBRyw4QkFBOEIsMEJBQTBCLEdBQUcsbUNBQW1DLDBCQUEwQixHQUFHLGlDQUFpQywwQkFBMEIsR0FBRyxzQ0FBc0MsMEJBQTBCLEdBQUcsaUNBQWlDLDBCQUEwQixHQUFHLHNDQUFzQywwQkFBMEIsR0FBRyxnQ0FBZ0MsMEJBQTBCLEdBQUcscUNBQXFDLDBCQUEwQixHQUFHLGlDQUFpQywwQkFBMEIsR0FBRyxzQ0FBc0MsMEJBQTBCLEdBQUcsaUNBQWlDLDBCQUEwQixHQUFHLHNDQUFzQywwQkFBMEIsR0FBRyxnQ0FBZ0MsMEJBQTBCLEdBQUcscUNBQXFDLDBCQUEwQixHQUFHLGlDQUFpQywwQkFBMEIsR0FBRyxzQ0FBc0MsMEJBQTBCLEdBQUcsMkJBQTJCLDBCQUEwQixHQUFHLDBCQUEwQiwwQkFBMEIsR0FBRywyQkFBMkIsMEJBQTBCLEdBQUcsMkJBQTJCLDBCQUEwQixHQUFHLHdCQUF3QiwwQkFBMEIsR0FBRywyQkFBMkIsMEJBQTBCLEdBQUcsNkJBQTZCLDBCQUEwQixHQUFHLHdCQUF3QiwwQkFBMEIsR0FBRyx5QkFBeUIsMEJBQTBCLEdBQUcsMEJBQTBCLDBCQUEwQixHQUFHLG1CQUFtQiw4QkFBOEIsR0FBRyxvQkFBb0IsOEJBQThCLEdBQUcsc0JBQXNCLDhCQUE4QixHQUFHLDJCQUEyQiw4QkFBOEIsR0FBRyxzQkFBc0IsOEJBQThCLEdBQUcsb0JBQW9CLDhCQUE4QixHQUFHLDBCQUEwQiw4QkFBOEIsR0FBRyxvQkFBb0IsOEJBQThCLEdBQUcsb0JBQW9CLDhCQUE4QixHQUFHLHFCQUFxQiw4QkFBOEIsR0FBRywyQkFBMkIsOEJBQThCLEdBQUcsb0JBQW9CLDhCQUE4QixHQUFHLHNCQUFzQiw4QkFBOEIsR0FBRyxxQkFBcUIsOEJBQThCLEdBQUcsc0JBQXNCLDhCQUE4QixHQUFHLDJCQUEyQiw4QkFBOEIsR0FBRyxxQkFBcUIsOEJBQThCLEdBQUcscUJBQXFCLDJCQUEyQixHQUFHLHFCQUFxQiwyQkFBMkIsR0FBRyxvQkFBb0IsOEJBQThCLEdBQUcseUJBQXlCLDhCQUE4QixHQUFHLGtDQUFrQyw4QkFBOEIsR0FBRywrQkFBK0IsOEJBQThCLEdBQUcsb0NBQW9DLDhCQUE4QixHQUFHLDZCQUE2Qiw4QkFBOEIsR0FBRyxrQ0FBa0MsOEJBQThCLEdBQUcsMEJBQTBCLDhCQUE4QixHQUFHLCtCQUErQiw4QkFBOEIsR0FBRyw2QkFBNkIsOEJBQThCLEdBQUcsa0NBQWtDLDhCQUE4QixHQUFHLDZCQUE2Qiw4QkFBOEIsR0FBRyxrQ0FBa0MsOEJBQThCLEdBQUcsNEJBQTRCLDhCQUE4QixHQUFHLGlDQUFpQyw4QkFBOEIsR0FBRyw2QkFBNkIsOEJBQThCLEdBQUcsa0NBQWtDLDhCQUE4QixHQUFHLDZCQUE2Qiw4QkFBOEIsR0FBRyxrQ0FBa0MsOEJBQThCLEdBQUcsNEJBQTRCLDhCQUE4QixHQUFHLGlDQUFpQyw4QkFBOEIsR0FBRyw2QkFBNkIsOEJBQThCLEdBQUcsa0NBQWtDLDhCQUE4QixHQUFHLHVCQUF1Qiw4QkFBOEIsR0FBRyxzQkFBc0IsOEJBQThCLEdBQUcsdUJBQXVCLDhCQUE4QixHQUFHLHVCQUF1Qiw4QkFBOEIsR0FBRyxvQkFBb0IsOEJBQThCLEdBQUcsdUJBQXVCLDhCQUE4QixHQUFHLHlCQUF5Qiw4QkFBOEIsR0FBRyxvQkFBb0IsOEJBQThCLEdBQUcscUJBQXFCLDhCQUE4QixHQUFHLHNCQUFzQiw4QkFBOEIsR0FBRyxXQUFXLGNBQWMsR0FBRyxXQUFXLGNBQWMsR0FBRyxXQUFXLGNBQWMsR0FBRyxXQUFXLGNBQWMsR0FBRyxXQUFXLGNBQWMsR0FBRyxXQUFXLGNBQWMsR0FBRyxXQUFXLGNBQWMsR0FBRyxXQUFXLGNBQWMsR0FBRyxXQUFXLGNBQWMsR0FBRyxXQUFXLGNBQWMsR0FBRyxXQUFXLGNBQWMsR0FBRyxZQUFZLGVBQWUsR0FBRyxjQUFjLHVCQUF1QixHQUFHLGNBQWMsd0JBQXdCLEdBQUcsZ0JBQWdCLG9CQUFvQixHQUFHLGNBQWMsd0JBQXdCLEdBQUcsY0FBYyx1QkFBdUIsR0FBRyxlQUFlLHNCQUFzQixHQUFHLGVBQWUsd0JBQXdCLEdBQUcsZUFBZSx1QkFBdUIsR0FBRyxlQUFlLG9CQUFvQixHQUFHLGVBQWUsb0JBQW9CLEdBQUcscUJBQXFCLHFCQUFxQixHQUFHLDZEQUE2RCw4QkFBOEIsa0JBQWtCLEdBQUcsWUFBWSx1QkFBdUIsNkJBQTZCLHdCQUF3QixrQ0FBa0MsR0FBRyxvQkFBb0IsbUJBQW1CLEdBQUcsaUJBQWlCLHNCQUFzQixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRyw2QkFBNkIsdUJBQXVCLFdBQVcsYUFBYSw2QkFBNkIsbUJBQW1CLEdBQUcsb0JBQW9CLG1CQUFtQiw4QkFBOEIsMEJBQTBCLEdBQUcsOEJBQThCLG1CQUFtQixHQUFHLHNCQUFzQixtQkFBbUIsOEJBQThCLDBCQUEwQixHQUFHLGdDQUFnQyxtQkFBbUIsR0FBRyxvQkFBb0IsbUJBQW1CLDhCQUE4QiwwQkFBMEIsR0FBRyw4QkFBOEIsbUJBQW1CLEdBQUcsaUJBQWlCLG1CQUFtQiw4QkFBOEIsMEJBQTBCLEdBQUcsMkJBQTJCLG1CQUFtQixHQUFHLG9CQUFvQixtQkFBbUIsOEJBQThCLDBCQUEwQixHQUFHLDhCQUE4QixtQkFBbUIsR0FBRyxtQkFBbUIsbUJBQW1CLDhCQUE4QiwwQkFBMEIsR0FBRyw2QkFBNkIsbUJBQW1CLEdBQUcsa0JBQWtCLG1CQUFtQiw4QkFBOEIsMEJBQTBCLEdBQUcsNEJBQTRCLG1CQUFtQixHQUFHLGlCQUFpQixtQkFBbUIsOEJBQThCLDBCQUEwQixHQUFHLDJCQUEyQixtQkFBbUIsR0FBRyxXQUFXLDJCQUEyQix3QkFBd0Isc0JBQXNCLEdBQUcsZUFBZSwyQkFBMkIsOEJBQThCLEdBQUcsc0JBQXNCLGdEQUFnRCx3Q0FBd0MsR0FBRyxvQkFBb0Isc0RBQXNELEdBQUcsa0JBQWtCLHdEQUF3RCxHQUFHLGtCQUFrQixzREFBc0QsR0FBRyxvQkFBb0Isc0RBQXNELEdBQUcsb0JBQW9CLGlDQUFpQyxHQUFHLHNCQUFzQixpREFBaUQsR0FBRyxvQkFBb0IsaUNBQWlDLEdBQUcsc0JBQXNCLGlEQUFpRCxHQUFHLG9CQUFvQixpQ0FBaUMsR0FBRyxzQkFBc0IsaURBQWlELEdBQUcsb0JBQW9CLGlDQUFpQyxHQUFHLHNCQUFzQixpREFBaUQsR0FBRyxvREFBb0QsZUFBZSx5Q0FBeUMsMENBQTBDLDhDQUE4QyxLQUFLLDZCQUE2QixpQkFBaUIsS0FBSyxHQUFHLHFCQUFxQix1Q0FBdUMsR0FBRyxzR0FBc0csVUFBVSxrQ0FBa0MsS0FBSyxTQUFTLDJDQUEyQyxLQUFLLFFBQVEsa0NBQWtDLEtBQUssR0FBRyxVQUFVLDBCQUEwQiwyQ0FBMkMsR0FBRyxxQkFBcUIsVUFBVSxrQ0FBa0MsS0FBSyxjQUFjLGlFQUFpRSxLQUFLLHdCQUF3QixnRUFBZ0UsS0FBSyxtQkFBbUIsaUVBQWlFLEtBQUssUUFBUSxrQ0FBa0MsS0FBSyxHQUFHLFNBQVMseUJBQXlCLEdBQUcsdUJBQXVCLFVBQVUsaUJBQWlCLEtBQUssUUFBUSxpQkFBaUIsS0FBSyxHQUFHLFdBQVcsMkJBQTJCLEdBQUcsMkJBQTJCLFVBQVUsaUJBQWlCLDBDQUEwQyxLQUFLLFFBQVEsaUJBQWlCLHNDQUFzQyxLQUFLLEdBQUcsZUFBZSwrQkFBK0IsR0FBRyw0QkFBNEIsVUFBVSxpQkFBaUIseUNBQXlDLEtBQUssUUFBUSxpQkFBaUIsc0NBQXNDLEtBQUssR0FBRyxnQkFBZ0IsZ0NBQWdDLEdBQUcseUJBQXlCLFVBQVUsaUJBQWlCLHlDQUF5QyxLQUFLLFFBQVEsaUJBQWlCLHNDQUFzQyxLQUFLLEdBQUcsYUFBYSw2QkFBNkIsR0FBRywwQkFBMEIsVUFBVSxpQkFBaUIsS0FBSyxRQUFRLDJDQUEyQyxpQkFBaUIsS0FBSyxHQUFHLGNBQWMsOEJBQThCLDZCQUE2QixHQUFHLG9CQUFvQix3Q0FBd0MsR0FBRywwREFBMEQsUUFBUSw4QkFBOEIsS0FBSyxTQUFTLCtCQUErQixLQUFLLFNBQVMsZ0NBQWdDLEtBQUssU0FBUyxnQ0FBZ0MsS0FBSyxVQUFVLGdDQUFnQyxLQUFLLEdBQUcsMkJBQTJCLFVBQVUsaUJBQWlCLDBDQUEwQyxzQ0FBc0MsS0FBSyxTQUFTLGdDQUFnQyxLQUFLLFNBQVMsOEJBQThCLEtBQUssUUFBUSxpQkFBaUIsMEJBQTBCLEtBQUssR0FBRyxpQkFBaUIsaUNBQWlDLEdBQUcsdUdBQXVHLFVBQVUsaUJBQWlCLHFFQUFxRSxLQUFLLFFBQVEsaUJBQWlCLHNDQUFzQyxLQUFLLEdBQUcsV0FBVywyQkFBMkIsR0FBRyx1QkFBdUIsVUFBVSxpQkFBaUIsd0NBQXdDLEtBQUssU0FBUyxpQkFBaUIsS0FBSyxHQUFHLFdBQVcsMkJBQTJCLEdBQUcsNEJBQTRCLFVBQVUsMENBQTBDLDBCQUEwQixLQUFLLFFBQVEsc0NBQXNDLEtBQUssR0FBRyxnQkFBZ0IsZ0NBQWdDLEdBQUcsc0JBQXNCLFFBQVEsaUNBQWlDLDBDQUEwQyxLQUFLLFNBQVMsa0NBQWtDLDJDQUEyQyxLQUFLLFVBQVUsaUNBQWlDLDBDQUEwQyxLQUFLLEdBQUcsb0JBQW9CLHlFQUF5RSw0RUFBNEUsdUVBQXVFLHdFQUF3RSxvRUFBb0UsR0FBRyxxQkFBcUIseUVBQXlFLDRFQUE0RSx1RUFBdUUsd0VBQXdFLG9FQUFvRSxHQUFHLG9CQUFvQix5RUFBeUUsNEVBQTRFLHVFQUF1RSx3RUFBd0Usb0VBQW9FLEdBQUcsb0JBQW9CLHlFQUF5RSw0RUFBNEUsdUVBQXVFLHdFQUF3RSxvRUFBb0UsR0FBRyx5QkFBeUIseUVBQXlFLDRFQUE0RSx1RUFBdUUsd0VBQXdFLG9FQUFvRSxHQUFHLDJCQUEyQiwyR0FBMkcsOEdBQThHLHlHQUF5RywwR0FBMEcsc0dBQXNHLEdBQUcsMEJBQTBCLHlHQUF5Ryw0R0FBNEcsdUdBQXVHLHdHQUF3RyxvR0FBb0csR0FBRyx5QkFBeUIsd0dBQXdHLDJHQUEyRyxzR0FBc0csdUdBQXVHLG1HQUFtRyxHQUFHLHlCQUF5Qix3R0FBd0csMkdBQTJHLHNHQUFzRyx1R0FBdUcsbUdBQW1HLEdBQUcseUJBQXlCLDZFQUE2RSxnRkFBZ0YsMkVBQTJFLDRFQUE0RSx3RUFBd0UsR0FBRyx3QkFBd0IsNkVBQTZFLGdGQUFnRiwyRUFBMkUsNEVBQTRFLHdFQUF3RSxHQUFHLHVCQUF1Qiw2RUFBNkUsZ0ZBQWdGLDJFQUEyRSw0RUFBNEUsd0VBQXdFLEdBQUcsdUJBQXVCLDZFQUE2RSxnRkFBZ0YsMkVBQTJFLDRFQUE0RSx3RUFBd0UsR0FBRyw0QkFBNEIsNkVBQTZFLGdGQUFnRiwyRUFBMkUsNEVBQTRFLHdFQUF3RSxHQUFHLGdCQUFnQixnQ0FBZ0MsMEZBQTBGLGtoQkFBa2hCLHdCQUF3Qix1QkFBdUIsR0FBRyxlQUFlLDBCQUEwQixnQkFBZ0IsaUJBQWlCLHVCQUF1QiwyQkFBMkIsb0JBQW9CLHNCQUFzQixHQUFHLHNCQUFzQixvQkFBb0IsMEJBQTBCLHFEQUFxRCx1QkFBdUIseUJBQXlCLHlCQUF5Qix3Q0FBd0MsdUNBQXVDLEdBQUcsa0RBQWtELHlCQUF5QixHQUFHLG1EQUFtRCx5QkFBeUIsR0FBRyxnREFBZ0QseUJBQXlCLEdBQUcsb0NBQW9DLHlCQUF5QixHQUFHLHdEQUF3RCx5QkFBeUIsR0FBRyxzREFBc0QseUJBQXlCLEdBQUcseUNBQXlDLHlCQUF5QixHQUFHLHFDQUFxQyx5QkFBeUIsR0FBRyx3Q0FBd0MseUJBQXlCLEdBQUcsbURBQW1ELHlCQUF5QixHQUFHLG1EQUFtRCx5QkFBeUIsR0FBRywyQ0FBMkMseUJBQXlCLEdBQUcsc0NBQXNDLHlCQUF5QixHQUFHLHNEQUFzRCx5QkFBeUIsR0FBRyxzQ0FBc0MseUJBQXlCLEdBQUcsc0NBQXNDLHlCQUF5QixHQUFHLDBDQUEwQyx5QkFBeUIsR0FBRyw4Q0FBOEMseUJBQXlCLEdBQUcsMENBQTBDLHlCQUF5QixHQUFHLGdEQUFnRCx5QkFBeUIsR0FBRyx5Q0FBeUMseUJBQXlCLEdBQUcsaURBQWlELHlCQUF5QixHQUFHLG1DQUFtQyx5QkFBeUIsR0FBRyxnREFBZ0QseUJBQXlCLEdBQUcsMENBQTBDLHlCQUF5QixHQUFHLHdDQUF3Qyx5QkFBeUIsR0FBRyxtREFBbUQseUJBQXlCLEdBQUcscUNBQXFDLHlCQUF5QixHQUFHLCtDQUErQyx5QkFBeUIsR0FBRyxxQ0FBcUMseUJBQXlCLEdBQUcsMkNBQTJDLHlCQUF5QixHQUFHLG1EQUFtRCx5QkFBeUIsR0FBRyw4Q0FBOEMseUJBQXlCLEdBQUcsc0RBQXNELHlCQUF5QixHQUFHLDBDQUEwQyx5QkFBeUIsR0FBRyxrREFBa0QseUJBQXlCLEdBQUcseUNBQXlDLHlCQUF5QixHQUFHLGlEQUFpRCx5QkFBeUIsR0FBRywwQ0FBMEMseUJBQXlCLEdBQUcsa0RBQWtELHlCQUF5QixHQUFHLDJDQUEyQyx5QkFBeUIsR0FBRyxtREFBbUQseUJBQXlCLEdBQUcsNkNBQTZDLHlCQUF5QixHQUFHLHFEQUFxRCx5QkFBeUIsR0FBRywyQ0FBMkMseUJBQXlCLEdBQUcsbURBQW1ELHlCQUF5QixHQUFHLDJDQUEyQyx5QkFBeUIsR0FBRyxtREFBbUQseUJBQXlCLEdBQUcsMENBQTBDLHlCQUF5QixHQUFHLGtEQUFrRCx5QkFBeUIsR0FBRyx5Q0FBeUMseUJBQXlCLEdBQUcsaURBQWlELHlCQUF5QixHQUFHLDZDQUE2Qyx5QkFBeUIsR0FBRyxxREFBcUQseUJBQXlCLEdBQUcsNkNBQTZDLHlCQUF5QixHQUFHLDBDQUEwQyx5QkFBeUIsR0FBRyxrREFBa0QseUJBQXlCLEdBQUcseUNBQXlDLHlCQUF5QixHQUFHLGlEQUFpRCx5QkFBeUIsR0FBRyw0Q0FBNEMseUJBQXlCLEdBQUcsb0RBQW9ELHlCQUF5QixHQUFHLDBDQUEwQyx5QkFBeUIsR0FBRyxrREFBa0QseUJBQXlCLEdBQUcsaUNBQWlDLHlCQUF5QixHQUFHLCtDQUErQyx5QkFBeUIsR0FBRyx3Q0FBd0MseUJBQXlCLEdBQUcsNkNBQTZDLHlCQUF5QixHQUFHLHVDQUF1Qyx5QkFBeUIsR0FBRyxzQ0FBc0MseUJBQXlCLEdBQUcsZ0RBQWdELHlCQUF5QixHQUFHLG9DQUFvQyx5QkFBeUIsR0FBRyxtREFBbUQseUJBQXlCLEdBQUcsNENBQTRDLHlCQUF5QixHQUFHLDZDQUE2Qyx5QkFBeUIsR0FBRyxtQ0FBbUMseUJBQXlCLEdBQUcsZ0RBQWdELHlCQUF5QixHQUFHLGlEQUFpRCx5QkFBeUIsR0FBRyxrQ0FBa0MseUJBQXlCLEdBQUcsNENBQTRDLHlCQUF5QixHQUFHLHNDQUFzQyx5QkFBeUIsR0FBRywwQ0FBMEMseUJBQXlCLEdBQUcsOENBQThDLHlCQUF5QixHQUFHLCtEQUErRCx5QkFBeUIsR0FBRyxzREFBc0QseUJBQXlCLEdBQUcsa0RBQWtELHlCQUF5QixHQUFHLHlDQUF5Qyx5QkFBeUIsR0FBRyx1Q0FBdUMseUJBQXlCLEdBQUcsbUNBQW1DLHlCQUF5QixHQUFHLDZDQUE2Qyx5QkFBeUIsR0FBRyxpQ0FBaUMseUJBQXlCLEdBQUcsK0NBQStDLHlCQUF5QixHQUFHLHlDQUF5Qyx5QkFBeUIsR0FBRyw4Q0FBOEMseUJBQXlCLEdBQUcsc0RBQXNELHlCQUF5QixHQUFHLDBDQUEwQyx5QkFBeUIsR0FBRyx3Q0FBd0MseUJBQXlCLEdBQUcsNkNBQTZDLHlCQUF5QixHQUFHLG1DQUFtQyx5QkFBeUIsR0FBRywwQ0FBMEMseUJBQXlCLEdBQUcseUNBQXlDLHlCQUF5QixHQUFHLGNBQWMsb0JBQW9CLFdBQVcsYUFBYSxjQUFjLFlBQVksZ0JBQWdCLGlCQUFpQixtQkFBbUIsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLDBDQUEwQyx1QkFBdUIsR0FBRyxtQkFBbUIsa0JBQWtCLDBCQUEwQixpQkFBaUIsMkJBQTJCLDBCQUEwQixHQUFHLG1CQUFtQixrQ0FBa0MsR0FBRyxZQUFZLGtCQUFrQiwyQkFBMkIsdUJBQXVCLGVBQWUscUJBQXFCLDJCQUEyQixlQUFlLHFCQUFxQix1QkFBdUIsK0JBQStCLDRCQUE0QiwwQkFBMEIsMkJBQTJCLHVCQUF1QixzQ0FBc0MsbUNBQW1DLGlDQUFpQyxrQ0FBa0MsOEJBQThCLHFCQUFxQixHQUFHLHdCQUF3Qix1QkFBdUIsaUJBQWlCLG1CQUFtQixtQkFBbUIsZ0JBQWdCLGlCQUFpQix5QkFBeUIsNkJBQTZCLGlDQUFpQyx1Q0FBdUMsMkNBQTJDLDJ3Q0FBMndDLEdBQUcsb0JBQW9CLGtCQUFrQixvQkFBb0IsYUFBYSxjQUFjLGlEQUFpRCx1QkFBdUIsdUJBQXVCLDJCQUEyQixpQkFBaUIsR0FBRyx3QkFBd0IseUJBQXlCLDJCQUEyQixpQkFBaUIsZUFBZSxrQkFBa0IsMEJBQTBCLGlFQUFpRSx5REFBeUQsR0FBRyx5QkFBeUIsbUNBQW1DLDJCQUEyQixHQUFHLHlCQUF5QixpQ0FBaUMseUJBQXlCLEdBQUcseUJBQXlCLG1DQUFtQywyQkFBMkIsR0FBRyx3Q0FBd0MsbUJBQW1CLHFDQUFxQyxLQUFLLFNBQVMsbUNBQW1DLEtBQUssR0FBRyw4QkFBOEIsbUJBQW1CLDZCQUE2QixxQ0FBcUMsS0FBSyxTQUFTLDJCQUEyQixtQ0FBbUMsS0FBSyxHQUFHLHNCQUFzQiw2QkFBNkIsR0FBRyw0QkFBNEIscUJBQXFCLHNCQUFzQixpQkFBaUIscUJBQXFCLDJCQUEyQixzREFBc0QsbURBQW1ELDhDQUE4QyxrQkFBa0IsbUJBQW1CLGNBQWMsR0FBRyx3REFBd0QsZ0JBQWdCLEdBQUcseUpBQXlKLGdCQUFnQixHQUFHLHlCQUF5QixjQUFjLGVBQWUscUJBQXFCLEdBQUcsNkJBQTZCLHFCQUFxQixnQkFBZ0IsR0FBRyx1REFBdUQsZ0JBQWdCLEdBQUcsNEJBQTRCLDJCQUEyQixvQkFBb0Isd0JBQXdCLGdCQUFnQixxQkFBcUIsY0FBYyxHQUFHLHVEQUF1RCxxQkFBcUIsZ0JBQWdCLEdBQUcsa0hBQWtILHdCQUF3QixnQkFBZ0IsR0FBRyw4R0FBOEcsZ0JBQWdCLEdBQUcsZ0xBQWdMLGdCQUFnQixvQkFBb0IsR0FBRyxnSUFBZ0ksd0JBQXdCLEdBQUcsZ0RBQWdELDJCQUEyQixHQUFHLDRCQUE0QixxQkFBcUIsc0JBQXNCLGlCQUFpQixxQkFBcUIsMkJBQTJCLHNEQUFzRCxtREFBbUQsOENBQThDLGtCQUFrQixtQkFBbUIsY0FBYyxHQUFHLHdEQUF3RCxnQkFBZ0IsR0FBRyx5SkFBeUosZ0JBQWdCLEdBQUcseUJBQXlCLGNBQWMsZUFBZSxxQkFBcUIsR0FBRyw2QkFBNkIscUJBQXFCLGdCQUFnQixHQUFHLHVEQUF1RCxnQkFBZ0IsR0FBRyw0QkFBNEIsMkJBQTJCLG9CQUFvQix3QkFBd0IsZ0JBQWdCLHFCQUFxQixjQUFjLEdBQUcsdURBQXVELHFCQUFxQixnQkFBZ0IsR0FBRyxrSEFBa0gsd0JBQXdCLGdCQUFnQixHQUFHLDhHQUE4RyxnQkFBZ0IsR0FBRyxnTEFBZ0wsZ0JBQWdCLG9CQUFvQixHQUFHLGdJQUFnSSx3QkFBd0IsR0FBRywyaURBQTJpRCw4RkFBOEYsa0JBQWtCLEdBQUcsa0NBQWtDLGNBQWMsd0JBQXdCLGdCQUFnQixpQkFBaUIscUJBQXFCLGVBQWUsdUJBQXVCLGVBQWUsR0FBRyxzQkFBc0IsY0FBYyxlQUFlLGNBQWMsZUFBZSxxQkFBcUIsMEJBQTBCLG9CQUFvQixxQkFBcUIsR0FBRyw0REFBNEQsa0JBQWtCLG1CQUFtQiw4QkFBOEIsR0FBRywrQkFBK0IsZ0JBQWdCLEdBQUcscUJBQXFCLGdCQUFnQixpQkFBaUIsV0FBVyxZQUFZLHVCQUF1QixlQUFlLDZCQUE2Qix5QkFBeUIsZUFBZSxpQkFBaUIsR0FBRyxtRkFBbUYsK0JBQStCLHlCQUF5QixHQUFHLDhEQUE4RCwwQkFBMEIsMkJBQTJCLHdCQUF3Qix1QkFBdUIsMEJBQTBCLHFCQUFxQixpQ0FBaUMsR0FBRywyQkFBMkIsY0FBYyxzQkFBc0IsbUJBQW1CLEdBQUcsK0ZBQStGLG9CQUFvQixXQUFXLFlBQVksZ0JBQWdCLGlCQUFpQixHQUFHLHdDQUF3QyxtQkFBbUIsb0JBQW9CLHVCQUF1QixzQkFBc0IscUNBQXFDLG9CQUFvQixHQUFHLHlDQUF5Qyx1QkFBdUIsa0JBQWtCLG1CQUFtQixHQUFHLHNCQUFzQix1QkFBdUIsV0FBVyxZQUFZLG9CQUFvQixHQUFHLGNBQWMscUJBQXFCLGVBQWUsY0FBYyxtQkFBbUIsZUFBZSxHQUFHLHVCQUF1Qix1QkFBdUIsR0FBRyw0QkFBNEIsY0FBYyxvQkFBb0IsNkVBQTZFLG1FQUFtRSxHQUFHLG9DQUFvQyx1QkFBdUIsK0JBQStCLEdBQUcsK0JBQStCLGtCQUFrQixjQUFjLGlCQUFpQixtQkFBbUIsNEJBQTRCLEdBQUcsMERBQTBELGlCQUFpQixHQUFHLHdDQUF3Qyx1QkFBdUIsR0FBRywwQ0FBMEMsc0JBQXNCLEdBQUcsMkNBQTJDLHVCQUF1QixXQUFXLGNBQWMsZ0JBQWdCLG1CQUFtQixHQUFHLGlEQUFpRCxlQUFlLGFBQWEsR0FBRyxnQkFBZ0IsdUJBQXVCLDBCQUEwQix1QkFBdUIsd0JBQXdCLHdCQUF3QixvQkFBb0IsMkJBQTJCLHVCQUF1Qiw4QkFBOEIsMkJBQTJCLDBCQUEwQixzQkFBc0IsaURBQWlELEdBQUcsOEZBQThGLDBCQUEwQixHQUFHLHlGQUF5RixlQUFlLDJCQUEyQix5QkFBeUIsd0JBQXdCLEdBQUcsbUZBQW1GLG1CQUFtQixHQUFHLGlFQUFpRSx1QkFBdUIsYUFBYSxjQUFjLHFCQUFxQixzQkFBc0IsR0FBRyx3Q0FBd0MsZUFBZSxpQkFBaUIsa0JBQWtCLHlCQUF5Qix3QkFBd0IsR0FBRyw2Q0FBNkMsZ0JBQWdCLGlCQUFpQixtQkFBbUIsd0JBQXdCLHVCQUF1QixHQUFHLDhIQUE4SCxjQUFjLGVBQWUsR0FBRyxzQkFBc0IsMkJBQTJCLDBCQUEwQixHQUFHLDhDQUE4QyxnQkFBZ0IsbUJBQW1CLG9CQUFvQixHQUFHLCtHQUErRyxrQkFBa0IsR0FBRyx1REFBdUQsbUJBQW1CLGdCQUFnQixnQkFBZ0Isa0JBQWtCLHFCQUFxQixxQkFBcUIsR0FBRyxxREFBcUQsMkJBQTJCLEdBQUcsNkNBQTZDLHVCQUF1QixHQUFHLGtEQUFrRCxtQkFBbUIsR0FBRyxnRkFBZ0Ysc0JBQXNCLEdBQUcsOEVBQThFLHFCQUFxQixHQUFHLDBFQUEwRSx1QkFBdUIsR0FBRyx3RUFBd0Usd0JBQXdCLEdBQUcscUZBQXFGLDhEQUE4RCxnQ0FBZ0MsR0FBRywwREFBMEQsNEJBQTRCLEdBQUcsaURBQWlELHVDQUF1QywwQkFBMEIsaUJBQWlCLEdBQUcsdURBQXVELGdCQUFnQixpQkFBaUIsdUJBQXVCLHNCQUFzQixpQkFBaUIsR0FBRyw2SUFBNkksMkJBQTJCLGVBQWUsZ0JBQWdCLHNCQUFzQix3QkFBd0IsR0FBRyxnQ0FBZ0MseUJBQXlCLEdBQUcsb0JBQW9CLGdCQUFnQiwyQkFBMkIsa0JBQWtCLEdBQUcsMENBQTBDLHVCQUF1QixxQkFBcUIsR0FBRyw2RUFBNkUsdUJBQXVCLGFBQWEsaUJBQWlCLGtCQUFrQixHQUFHLHlGQUF5RixhQUFhLEdBQUcsd0NBQXdDLGNBQWMsR0FBRyx3Q0FBd0MsZUFBZSxHQUFHLDhDQUE4QyxjQUFjLEdBQUcsOENBQThDLGVBQWUsR0FBRyx1RkFBdUYsbUJBQW1CLHVCQUF1QixjQUFjLHNCQUFzQixhQUFhLHFCQUFxQixHQUFHLHlDQUF5QyxvQkFBb0IsdUJBQXVCLHVCQUF1QixHQUFHLGdEQUFnRCxtQkFBbUIsa0JBQWtCLEdBQUcsMEZBQTBGLGVBQWUsR0FBRywwQkFBMEIsZ0JBQWdCLHFCQUFxQiw4QkFBOEIsc0JBQXNCLEdBQUcsdUJBQXVCLHlCQUF5Qix1QkFBdUIsc0JBQXNCLGNBQWMsR0FBRyx1QkFBdUIsY0FBYyxpQkFBaUIsR0FBRyxrREFBa0QsbUJBQW1CLG1CQUFtQixzQkFBc0IsMEJBQTBCLEdBQUcsOENBQThDLDJCQUEyQix3QkFBd0IscUJBQXFCLG1CQUFtQixvQkFBb0IscUJBQXFCLEdBQUcscURBQXFELGlCQUFpQiw4QkFBOEIsb0JBQW9CLHFDQUFxQyxnQkFBZ0Isc0JBQXNCLEdBQUcsMkVBQTJFLGdCQUFnQixHQUFHLHVFQUF1RSxnQkFBZ0IsR0FBRywrQ0FBK0MsZ0JBQWdCLEdBQUcscURBQXFELGVBQWUseUJBQXlCLEdBQUcsaURBQWlELGVBQWUsR0FBRyxpREFBaUQsaUJBQWlCLEdBQUcsaURBQWlELGVBQWUsR0FBRyxtSkFBbUoseUJBQXlCLEdBQUcsb0RBQW9ELGdCQUFnQixHQUFHLDhCQUE4QixnQkFBZ0IsZ0JBQWdCLGlCQUFpQixHQUFHLDJDQUEyQyxtQkFBbUIsR0FBRyw0Q0FBNEMsZUFBZSxlQUFlLEdBQUcsNENBQTRDLGNBQWMsZ0JBQWdCLEdBQUcsa0RBQWtELGVBQWUsZUFBZSxHQUFHLGtEQUFrRCxjQUFjLGdCQUFnQixHQUFHLGtEQUFrRCxpQkFBaUIsR0FBRyx5REFBeUQsZ0JBQWdCLEdBQUcseUhBQXlILGlCQUFpQixHQUFHLCtJQUErSSwwQkFBMEIsMkJBQTJCLEdBQUcsMENBQTBDLG1CQUFtQiwwQkFBMEIscUJBQXFCLGlDQUFpQyxnQkFBZ0IsZUFBZSxHQUFHLGdCQUFnQix1QkFBdUIsV0FBVyxZQUFZLG1CQUFtQixlQUFlLEdBQUcsb0NBQW9DLHVCQUF1Qix1QkFBdUIsR0FBRyxpQ0FBaUMsZ0JBQWdCLG9CQUFvQix3QkFBd0IsZUFBZSxxQkFBcUIsNEJBQTRCLEdBQUcsMENBQTBDLHVCQUF1QixpQkFBaUIsYUFBYSxnQkFBZ0Isd0JBQXdCLGlCQUFpQixpQkFBaUIsR0FBRyxtQ0FBbUMsdUJBQXVCLGNBQWMsdUJBQXVCLHFCQUFxQixtQkFBbUIsR0FBRyxzQ0FBc0MscUJBQXFCLDRCQUE0QiwyQkFBMkIsc0JBQXNCLG1DQUFtQyxHQUFHLDJEQUEyRCxpQkFBaUIsR0FBRyw2Q0FBNkMsZ0NBQWdDLG9CQUFvQixHQUFHLGdDQUFnQyxnQkFBZ0IsV0FBVyxHQUFHLGdDQUFnQyxlQUFlLGFBQWEsR0FBRyxnQ0FBZ0MsZ0JBQWdCLGNBQWMsR0FBRyxnQ0FBZ0MsZUFBZSxZQUFZLEdBQUcsMkhBQTJILGVBQWUsZ0JBQWdCLEdBQUcsaUNBQWlDLGFBQWEsY0FBYyxHQUFHLGlDQUFpQyxZQUFZLGNBQWMsR0FBRyxpQ0FBaUMsYUFBYSxXQUFXLEdBQUcsaUNBQWlDLFlBQVksV0FBVyxHQUFHLHVDQUF1QyxpQkFBaUIsR0FBRywwQkFBMEIsMkJBQTJCLHVCQUF1QixHQUFHLG1CQUFtQix1QkFBdUIsR0FBRywwQkFBMEIsdUJBQXVCLHFCQUFxQixtQkFBbUIsMkJBQTJCLHVCQUF1QixHQUFHLCtGQUErRixrQkFBa0IsR0FBRyxxQkFBcUIscUJBQXFCLGdCQUFnQixnQkFBZ0IsY0FBYyxZQUFZLEdBQUcscUJBQXFCLHFCQUFxQixnQkFBZ0IsZ0JBQWdCLGlCQUFpQixZQUFZLEdBQUcscUJBQXFCLHFCQUFxQixlQUFlLGdCQUFnQixXQUFXLGlCQUFpQixHQUFHLHFCQUFxQixxQkFBcUIsZUFBZSxlQUFlLFdBQVcsaUJBQWlCLEdBQUcsc0JBQXNCLHNCQUFzQixnQkFBZ0IsaUJBQWlCLGVBQWUsZ0JBQWdCLEdBQUcsc0JBQXNCLHNCQUFzQixlQUFlLGdCQUFnQixlQUFlLGlCQUFpQixHQUFHLHNCQUFzQixzQkFBc0IsZUFBZSxnQkFBZ0IsZUFBZSxjQUFjLEdBQUcsc0JBQXNCLHNCQUFzQixlQUFlLGdCQUFnQixnQkFBZ0IsY0FBYyxHQUFHLHFCQUFxQixnQkFBZ0IscUJBQXFCLHFCQUFxQixHQUFHLDJDQUEyQyxpQkFBaUIsaUJBQWlCLEdBQUcsNkNBQTZDLHFDQUFxQywyeEVBQTJ4RSxpQkFBaUIsOEJBQThCLHdDQUF3QyxHQUFHLHlEQUF5RCwyQkFBMkIsR0FBRyxvQkFBb0IsMkJBQTJCLHVCQUF1QixHQUFHLDJCQUEyQix1QkFBdUIsaUJBQWlCLDZCQUE2QixHQUFHLHlCQUF5QixlQUFlLGNBQWMsdUJBQXVCLFdBQVcsWUFBWSxrQkFBa0IsR0FBRyxrQ0FBa0MsbUJBQW1CLHVCQUF1Qix3QkFBd0IsR0FBRywwREFBMEQsbUJBQW1CLHNCQUFzQixxQkFBcUIsdUJBQXVCLHdCQUF3QixpQkFBaUIsY0FBYyxHQUFHLHlCQUF5QixtQkFBbUIsR0FBRyx5QkFBeUIsbUJBQW1CLHVCQUF1QixxQkFBcUIsNEJBQTRCLEdBQUcscUNBQXFDLHFCQUFxQix3QkFBd0IsZ0JBQWdCLEdBQUcsaUNBQWlDLGlCQUFpQixrQkFBa0IsR0FBRyxnQkFBZ0IsdUJBQXVCLHFCQUFxQixHQUFHLGtDQUFrQyx1QkFBdUIsZUFBZSxpQkFBaUIsa0JBQWtCLG9CQUFvQiwyQkFBMkIsdUJBQXVCLEdBQUcsaUNBQWlDLHVCQUF1QixlQUFlLHFCQUFxQixtQkFBbUIsY0FBYyw2QkFBNkIsR0FBRyxvSUFBb0ksb0JBQW9CLEdBQUcsMkJBQTJCLGtCQUFrQixHQUFHLDZDQUE2QyxnQkFBZ0Isd0JBQXdCLEdBQUcsNENBQTRDLFdBQVcsaUJBQWlCLEdBQUcsZ0RBQWdELFlBQVksR0FBRyxnREFBZ0QsYUFBYSxHQUFHLHlCQUF5QixpQkFBaUIsa0JBQWtCLEdBQUcsMkNBQTJDLGlCQUFpQixtQkFBbUIsMEJBQTBCLEdBQUcsMENBQTBDLFlBQVksZ0JBQWdCLEdBQUcsOENBQThDLGNBQWMsR0FBRyw4Q0FBOEMsV0FBVyxHQUFHLHlCQUF5QiwyQkFBMkIsdUJBQXVCLEdBQUcsaUJBQWlCLHVCQUF1QiwwQkFBMEIscUJBQXFCLGVBQWUsMkJBQTJCLEdBQUcsdUJBQXVCLGlCQUFpQixxQkFBcUIsbUJBQW1CLHVCQUF1QixvQkFBb0IsMkJBQTJCLHVCQUF1QixzQkFBc0IsR0FBRyx3QkFBd0IsaUJBQWlCLGdCQUFnQixxQkFBcUIsZUFBZSxjQUFjLHVCQUF1Qix1QkFBdUIsb0JBQW9CLG1CQUFtQixxQkFBcUIsYUFBYSxHQUFHLHVHQUF1RywyQkFBMkIsOEJBQThCLDZCQUE2QixHQUFHLG9CQUFvQixXQUFXLEdBQUcsc0JBQXNCLGNBQWMsR0FBRyxjQUFjLHVCQUF1QixpS0FBaUssR0FBRywyQkFBMkIsY0FBYywyQkFBMkIsR0FBRyw4QkFBOEIscUJBQXFCLGdCQUFnQix1QkFBdUIsV0FBVywwQkFBMEIsMkJBQTJCLGVBQWUsd0JBQXdCLEdBQUcsMkNBQTJDLGdCQUFnQix1QkFBdUIsMEJBQTBCLEdBQUcsNkNBQTZDLHdCQUF3Qix3QkFBd0IsR0FBRyxxTEFBcUwsaUJBQWlCLEdBQUcseUVBQXlFLG9CQUFvQixHQUFHLDZCQUE2QixtQkFBbUIsb0JBQW9CLHVCQUF1QixxQkFBcUIsR0FBRyxpQkFBaUIsaUJBQWlCLHVCQUF1QixrQkFBa0IscUJBQXFCLEdBQUcsc0JBQXNCLHNCQUFzQixHQUFHLCtFQUErRSw4Q0FBOEMsbUJBQW1CLEdBQUcsMkJBQTJCLG1CQUFtQixHQUFHLG9GQUFvRiw4Q0FBOEMsbUJBQW1CLEdBQUcsa0NBQWtDLDhCQUE4QixHQUFHLHdCQUF3Qiw4QkFBOEIsd0JBQXdCLG1CQUFtQixHQUFHLDBCQUEwQixtQkFBbUIsR0FBRyx1QkFBdUIsOEJBQThCLHdCQUF3QixtQkFBbUIsc0JBQXNCLEdBQUcseUJBQXlCLG1CQUFtQixHQUFHLG1RQUFtUSw4QkFBOEIsd0JBQXdCLHdCQUF3QixtQkFBbUIsR0FBRyxzSkFBc0osbUJBQW1CLDBCQUEwQixHQUFHLCtOQUErTiw4QkFBOEIsd0JBQXdCLHdCQUF3QixtQkFBbUIsR0FBRyxpUEFBaVAsbUJBQW1CLDBCQUEwQixHQUFHLHNCQUFzQixvQ0FBb0MsR0FBRyw2S0FBNkssOEJBQThCLHdCQUF3Qix3QkFBd0IsbUJBQW1CLEdBQUcsZ0VBQWdFLG9CQUFvQiw4QkFBOEIsR0FBRywrRUFBK0UsbUJBQW1CLDBCQUEwQixHQUFHLHFLQUFxSyw4QkFBOEIsd0JBQXdCLG1CQUFtQixHQUFHLHVCQUF1Qiw4QkFBOEIsd0JBQXdCLEdBQUcsZ0hBQWdILG1CQUFtQixHQUFHLDhGQUE4Riw4QkFBOEIsd0JBQXdCLG1CQUFtQixHQUFHLG9HQUFvRyxtQkFBbUIsR0FBRyw2R0FBNkcsbUJBQW1CLEdBQUcsNkdBQTZHLHNCQUFzQixHQUFHLG1IQUFtSCxpQkFBaUIsOEJBQThCLDhDQUE4QyxHQUFHLHVHQUF1RyxrQkFBa0IsOEJBQThCLGlEQUFpRCxHQUFHLGlDQUFpQyw4QkFBOEIscUNBQXFDLHVGQUF1RixnQkFBZ0IsaUJBQWlCLEdBQUcsNENBQTRDLDJFQUEyRSxHQUFHLGdDQUFnQywyRUFBMkUsR0FBRyxpSEFBaUgsMkVBQTJFLEdBQUcsNERBQTRELDJFQUEyRSxHQUFHLDJFQUEyRSwyRUFBMkUsR0FBRyw4REFBOEQsMkVBQTJFLEdBQUcseUJBQXlCLDJFQUEyRSxHQUFHLHVDQUF1QyxtQ0FBbUMsR0FBRyx3QkFBd0IsNkJBQTZCLEdBQUcseUJBQXlCLGlDQUFpQyxHQUFHLHdCQUF3QixpQ0FBaUMsR0FBRyx5QkFBeUIsaUNBQWlDLEdBQUcsd0JBQXdCLGlDQUFpQyxHQUFHLHlCQUF5QixpQ0FBaUMsR0FBRyx3QkFBd0IsaUNBQWlDLEdBQUcseUJBQXlCLGtDQUFrQyxHQUFHLDBCQUEwQixrQ0FBa0MsR0FBRywwQkFBMEIsa0NBQWtDLEdBQUcsMkJBQTJCLGlDQUFpQyxHQUFHLDRCQUE0QixxQ0FBcUMsR0FBRywyQkFBMkIscUNBQXFDLEdBQUcsNEJBQTRCLHFDQUFxQyxHQUFHLDJCQUEyQixxQ0FBcUMsR0FBRyw0QkFBNEIscUNBQXFDLEdBQUcsMkJBQTJCLHFDQUFxQyxHQUFHLDRCQUE0QixzQ0FBc0MsR0FBRyw2QkFBNkIsc0NBQXNDLEdBQUcsNkJBQTZCLHNDQUFzQyxHQUFHLHdCQUF3QixpQ0FBaUMsR0FBRyx5QkFBeUIscUNBQXFDLEdBQUcsd0JBQXdCLHFDQUFxQyxHQUFHLHlCQUF5QixxQ0FBcUMsR0FBRyx3QkFBd0IscUNBQXFDLEdBQUcseUJBQXlCLHFDQUFxQyxHQUFHLHdCQUF3QixxQ0FBcUMsR0FBRyx5QkFBeUIsc0NBQXNDLEdBQUcsMEJBQTBCLHNDQUFzQyxHQUFHLDRCQUE0QixzQ0FBc0MsR0FBRywwQkFBMEIsc0NBQXNDLEdBQUcsNEJBQTRCLHNDQUFzQyxHQUFHLDRCQUE0QixzQ0FBc0MsR0FBRyw0QkFBNEIsc0NBQXNDLEdBQUcsNEJBQTRCLHNDQUFzQyxHQUFHLDRCQUE0QixzQ0FBc0MsR0FBRyw2QkFBNkIsbUNBQW1DLEdBQUcsOEJBQThCLHFDQUFxQyxHQUFHLDZCQUE2QixxQ0FBcUMsR0FBRyw4QkFBOEIscUNBQXFDLEdBQUcsNkJBQTZCLHFDQUFxQyxHQUFHLDhCQUE4QixxQ0FBcUMsR0FBRyw2QkFBNkIscUNBQXFDLEdBQUcsOEJBQThCLHNDQUFzQyxHQUFHLCtCQUErQixzQ0FBc0MsR0FBRyxpQ0FBaUMsc0NBQXNDLEdBQUcsK0JBQStCLHNDQUFzQyxHQUFHLGlDQUFpQyxzQ0FBc0MsR0FBRyxpQ0FBaUMsc0NBQXNDLEdBQUcsaUNBQWlDLHNDQUFzQyxHQUFHLGlDQUFpQyxzQ0FBc0MsR0FBRyxpQ0FBaUMsc0NBQXNDLEdBQUcsbUNBQW1DLGlDQUFpQyxHQUFHLG1DQUFtQyxxQ0FBcUMsR0FBRyxtQ0FBbUMscUNBQXFDLEdBQUcsbUNBQW1DLHFDQUFxQyxHQUFHLDhCQUE4QixxQ0FBcUMsR0FBRyw4QkFBOEIscUNBQXFDLEdBQUcsOEJBQThCLHFDQUFxQyxHQUFHLDhCQUE4QixzQ0FBc0MsR0FBRywrQkFBK0Isc0NBQXNDLEdBQUcsK0JBQStCLHNDQUFzQyxHQUFHLCtCQUErQixzQ0FBc0MsR0FBRywrQkFBK0Isc0NBQXNDLEdBQUcsc0JBQXNCLGlDQUFpQyxHQUFHLDJCQUEyQixxQ0FBcUMsR0FBRyxzQkFBc0IscUNBQXFDLEdBQUcscUJBQXFCLHFDQUFxQyxHQUFHLHNCQUFzQixxQ0FBcUMsR0FBRyxzQkFBc0IscUNBQXFDLEdBQUcsMkJBQTJCLHFDQUFxQyxHQUFHLGdDQUFnQyxzQ0FBc0MsR0FBRywrQkFBK0IsaUNBQWlDLEdBQUcsMEJBQTBCLHFDQUFxQyxHQUFHLHVCQUF1QixxQ0FBcUMsR0FBRyx5QkFBeUIscUNBQXFDLEdBQUcsbUJBQW1CLHFDQUFxQyxHQUFHLDBCQUEwQixxQ0FBcUMsR0FBRyx3QkFBd0IscUNBQXFDLEdBQUcsdUJBQXVCLHNDQUFzQyxHQUFHLHNCQUFzQixzQ0FBc0MsR0FBRyxxQkFBcUIsc0NBQXNDLEdBQUcsb0JBQW9CLHNDQUFzQyxHQUFHLG9CQUFvQixzQ0FBc0MsR0FBRyxxQkFBcUIsc0NBQXNDLEdBQUcsdUJBQXVCLHNDQUFzQyxHQUFHLHVCQUF1QixzQ0FBc0MsR0FBRyxrQkFBa0Isc0NBQXNDLEdBQUcsbUJBQW1CLGtDQUFrQyxHQUFHLG1CQUFtQixzQ0FBc0MsR0FBRyx1QkFBdUIsc0NBQXNDLEdBQUcsbUJBQW1CLHNDQUFzQyxHQUFHLHFCQUFxQixzQ0FBc0MsR0FBRyxvQkFBb0Isc0NBQXNDLEdBQUcsbUJBQW1CLHNDQUFzQyxHQUFHLHlCQUF5Qix1Q0FBdUMsR0FBRyxxQkFBcUIsdUNBQXVDLEdBQUcsc0JBQXNCLHVDQUF1QyxHQUFHLHFCQUFxQix1Q0FBdUMsR0FBRyxxQkFBcUIsdUNBQXVDLEdBQUcsbUJBQW1CLHVDQUF1QyxHQUFHLG9CQUFvQix1Q0FBdUMsR0FBRyxtQkFBbUIsdUNBQXVDLEdBQUcsbUJBQW1CLHVDQUF1QyxHQUFHLHFCQUFxQixrQ0FBa0MsR0FBRyxtQkFBbUIsc0NBQXNDLEdBQUcsd0JBQXdCLHNDQUFzQyxHQUFHLG9CQUFvQixzQ0FBc0MsR0FBRyx5QkFBeUIsc0NBQXNDLEdBQUcsb0JBQW9CLHNDQUFzQyxHQUFHLHlCQUF5QixzQ0FBc0MsR0FBRyxrQkFBa0IsdUNBQXVDLEdBQUcsd0JBQXdCLHVDQUF1QyxHQUFHLHVCQUF1Qix1Q0FBdUMsR0FBRyx3QkFBd0IsdUNBQXVDLEdBQUcsbUJBQW1CLHVDQUF1QyxHQUFHLHNCQUFzQix1Q0FBdUMsR0FBRyxvQkFBb0IsdUNBQXVDLEdBQUcsb0JBQW9CLHVDQUF1QyxHQUFHLHFCQUFxQix1Q0FBdUMsR0FBRyxvQkFBb0Isa0NBQWtDLEdBQUcsbUJBQW1CLHNDQUFzQyxHQUFHLHFCQUFxQixzQ0FBc0MsR0FBRyxtQkFBbUIsc0NBQXNDLEdBQUcsb0JBQW9CLHNDQUFzQyxHQUFHLHFCQUFxQixzQ0FBc0MsR0FBRyx1QkFBdUIsc0NBQXNDLEdBQUcsd0JBQXdCLHVDQUF1QyxHQUFHLG9CQUFvQix1Q0FBdUMsR0FBRyxvQkFBb0IsdUNBQXVDLEdBQUcsbUJBQW1CLGtDQUFrQyxHQUFHLG9CQUFvQixzQ0FBc0MsR0FBRyx3QkFBd0Isc0NBQXNDLEdBQUcsd0JBQXdCLHNDQUFzQyxHQUFHLHVCQUF1QixzQ0FBc0MsR0FBRyx5QkFBeUIsc0NBQXNDLEdBQUcsaUdBQWlHLHNDQUFzQyxHQUFHLG1CQUFtQixzQ0FBc0MsR0FBRyxvQkFBb0IsdUNBQXVDLEdBQUcseUJBQXlCLHVDQUF1QyxHQUFHLHdCQUF3Qix1Q0FBdUMsR0FBRyxvQkFBb0Isa0NBQWtDLEdBQUcsMEJBQTBCLHNDQUFzQyxHQUFHLHFCQUFxQixzQ0FBc0MsR0FBRyx3QkFBd0Isc0NBQXNDLEdBQUcsd0JBQXdCLHNDQUFzQyxHQUFHLHdCQUF3QixzQ0FBc0MsR0FBRyx3QkFBd0Isc0NBQXNDLEdBQUcsMEJBQTBCLGtDQUFrQyxHQUFHLDJCQUEyQixzQ0FBc0MsR0FBRywyQkFBMkIsc0NBQXNDLEdBQUcsZ0NBQWdDLHNDQUFzQyxHQUFHLGdDQUFnQyxzQ0FBc0MsR0FBRyxnQ0FBZ0Msc0NBQXNDLEdBQUcsZ0NBQWdDLHNDQUFzQyxHQUFHLDZCQUE2Qix1Q0FBdUMsR0FBRyw2QkFBNkIsdUNBQXVDLEdBQUcsNkJBQTZCLHVDQUF1QyxHQUFHLDZCQUE2Qix1Q0FBdUMsR0FBRyw0QkFBNEIsdUNBQXVDLEdBQUcsNkJBQTZCLHVDQUF1QyxHQUFHLDJCQUEyQix1Q0FBdUMsR0FBRywrQkFBK0Isa0NBQWtDLEdBQUcsZ0NBQWdDLHNDQUFzQyxHQUFHLGdDQUFnQyxzQ0FBc0MsR0FBRywrQkFBK0Isc0NBQXNDLEdBQUcsZ0NBQWdDLHNDQUFzQyxHQUFHLGdDQUFnQyxzQ0FBc0MsR0FBRyxtQ0FBbUMsa0NBQWtDLEdBQUcscUNBQXFDLHNDQUFzQyxHQUFHLGtDQUFrQyxzQ0FBc0MsR0FBRyxvQ0FBb0Msc0NBQXNDLEdBQUcsb0NBQW9DLHNDQUFzQyxHQUFHLCtCQUErQixzQ0FBc0MsR0FBRyxtSkFBbUosZ0NBQWdDLEdBQUcsd0VBQXdFLGlDQUFpQyxHQUFHLDBFQUEwRSxtQ0FBbUMsR0FBRywyRUFBMkUsb0NBQW9DLEdBQUcsd0NBQXdDLHdCQUF3QixpQkFBaUIsOEJBQThCLHlCQUF5Qix1QkFBdUIsNENBQTRDLG9DQUFvQyxHQUFHLDJCQUEyQixvQkFBb0IsbUJBQW1CLHVCQUF1Qix1QkFBdUIsR0FBRyw0Q0FBNEMsdUJBQXVCLEdBQUcseURBQXlELGVBQWUsbUJBQW1CLDBCQUEwQix3QkFBd0IsdUJBQXVCLGlCQUFpQixHQUFHLG9FQUFvRSx1QkFBdUIsYUFBYSxlQUFlLG1CQUFtQixvQkFBb0IsZUFBZSxtQkFBbUIsd0NBQXdDLHFDQUFxQyxtQ0FBbUMsb0NBQW9DLGdDQUFnQyxHQUFHLHdFQUF3RSx1QkFBdUIsV0FBVyxhQUFhLFlBQVksY0FBYyxnQkFBZ0IsaUJBQWlCLG1CQUFtQiwyQkFBMkIsdUJBQXVCLHFCQUFxQixvQkFBb0IsbUNBQW1DLDJCQUEyQixHQUFHLHVFQUF1RSx1QkFBdUIsV0FBVyxhQUFhLFlBQVksY0FBYyxnQkFBZ0IsaUJBQWlCLG1CQUFtQiwyQkFBMkIsOEJBQThCLHFCQUFxQixvQkFBb0IsbUNBQW1DLEdBQUcsK0JBQStCLGdCQUFnQixtQkFBbUIsR0FBRyxvREFBb0QsbUJBQW1CLHVCQUF1QixtQkFBbUIsR0FBRywwREFBMEQsZ0JBQWdCLG1CQUFtQixtQkFBbUIsY0FBYyxtQkFBbUIsdUJBQXVCLHFCQUFxQixHQUFHLDBEQUEwRCxtQkFBbUIsZ0JBQWdCLG9CQUFvQix3QkFBd0IsZUFBZSwyQkFBMkIsR0FBRywrREFBK0Qsd0JBQXdCLG9CQUFvQixHQUFHLGdFQUFnRSxtQkFBbUIsdUJBQXVCLHNDQUFzQyx1QkFBdUIsZ0JBQWdCLFlBQVksYUFBYSxpQkFBaUIsR0FBRyxnRUFBZ0UsdUJBQXVCLG1CQUFtQixpQkFBaUIsb0JBQW9CLG1CQUFtQixzQkFBc0Isb0JBQW9CLDJCQUEyQixHQUFHLHlEQUF5RCxvQkFBb0IsR0FBRyxtQ0FBbUMscUJBQXFCLGtDQUFrQyxHQUFHLG1EQUFtRCxnQkFBZ0IsbUJBQW1CLEdBQUcsc0hBQXNILG9CQUFvQix3QkFBd0IsR0FBRywrREFBK0Qsc0JBQXNCLEdBQUcseURBQXlELHVCQUF1QixHQUFHLDJEQUEyRCx1QkFBdUIsR0FBRyx3RUFBd0UsMEJBQTBCLHFCQUFxQixvQkFBb0IsdUJBQXVCLDBCQUEwQixzQkFBc0IsaUJBQWlCLGdCQUFnQix3QkFBd0IsMEJBQTBCLDJCQUEyQiwwSkFBMEosa0pBQWtKLDZJQUE2SSwwSUFBMEksZ0xBQWdMLG9CQUFvQixHQUFHLDhFQUE4RSx3QkFBd0IsOEJBQThCLEdBQUcsb0ZBQW9GLDJCQUEyQiw4QkFBOEIsbUJBQW1CLDJGQUEyRixtRkFBbUYsR0FBRyxzS0FBc0ssMkZBQTJGLG1GQUFtRixlQUFlLEdBQUcsMFFBQTBRLHlCQUF5QixrQkFBa0IsR0FBRyxnRkFBZ0Ysd0JBQXdCLDhCQUE4QixHQUFHLHNGQUFzRiwyQkFBMkIsOEJBQThCLG1CQUFtQiwyRkFBMkYsbUZBQW1GLEdBQUcsMEtBQTBLLDJGQUEyRixtRkFBbUYsZUFBZSxHQUFHLGdSQUFnUix5QkFBeUIsa0JBQWtCLEdBQUcsNEVBQTRFLHdCQUF3Qiw4QkFBOEIsR0FBRyxrRkFBa0YsMkJBQTJCLDhCQUE4QixtQkFBbUIsMkZBQTJGLG1GQUFtRixHQUFHLGtLQUFrSywyRkFBMkYsbUZBQW1GLGVBQWUsR0FBRyxvUUFBb1EseUJBQXlCLGtCQUFrQixHQUFHLDhFQUE4RSx3QkFBd0IsOEJBQThCLEdBQUcsb0ZBQW9GLDJCQUEyQiw4QkFBOEIsbUJBQW1CLDJGQUEyRixtRkFBbUYsR0FBRyxzS0FBc0ssMkZBQTJGLG1GQUFtRixlQUFlLEdBQUcsMFFBQTBRLHlCQUF5QixrQkFBa0IsR0FBRywrQ0FBK0MsMEJBQTBCLGtCQUFrQixvQkFBb0IsS0FBSywwRUFBMEUsaUJBQWlCLHlCQUF5QixLQUFLLDBFQUEwRSxpQkFBaUIsS0FBSyxHQUFHO0FBQzk1dUY7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNPLFNBQVNBLFlBQVQsQ0FBc0JDLE1BQXRCLEVBQTZCO0FBQ2hDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWixFQUFxQixjQUFyQjtBQUNBLFNBQU87QUFDSEcsUUFBSSxFQUFHQyw2Q0FBSSxDQUFDQyxPQUFMLENBQWFDLGFBRGpCO0FBRUhDLFdBQU8sRUFBR1A7QUFGUCxHQUFQO0FBSUg7QUFDTSxTQUFTUSxVQUFULENBQXFCQyxJQUFyQixFQUEyQjtBQUM5QlIsU0FBTyxDQUFDQyxHQUFSLENBQVlPLElBQVosRUFBbUIsWUFBbkI7QUFDQSxTQUFPO0FBQ0hOLFFBQUksRUFBR0MsNkNBQUksQ0FBQ00sSUFBTCxDQUFVQyxXQURkO0FBRUhKLFdBQU8sa0NBQVFFLElBQVI7QUFBY0csYUFBTyxFQUFFO0FBQXZCO0FBRkosR0FBUDtBQUlIO0FBRU0sU0FBU0MsY0FBVCxDQUF5QkMsUUFBekIsRUFBbUM7QUFDdENiLFNBQU8sQ0FBQ0MsR0FBUixDQUFZWSxRQUFaLEVBQXVCLGdCQUF2QjtBQUNBLFNBQU87QUFDSFgsUUFBSSxFQUFHQyw2Q0FBSSxDQUFDVyxPQUFMLENBQWFDLGNBRGpCO0FBRUhULFdBQU8sRUFBR087QUFGUCxHQUFQO0FBSUg7QUFFTSxTQUFTRyxVQUFULENBQXFCQyxPQUFyQixFQUE4QjtBQUNqQ2pCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZZ0IsT0FBWixFQUFzQixjQUF0QjtBQUNBLFNBQU87QUFDSGYsUUFBSSxFQUFHQyw2Q0FBSSxDQUFDVyxPQUFMLENBQWFJLFdBRGpCO0FBRUhaLFdBQU8sRUFBR1c7QUFGUCxHQUFQO0FBSUg7QUFFTSxTQUFTRSxrQkFBVCxDQUE2QkYsT0FBN0IsRUFBc0M7QUFDekNqQixTQUFPLENBQUNDLEdBQVIsQ0FBWWdCLE9BQVosRUFBc0Isc0JBQXRCO0FBQ0EsU0FBTztBQUNIZixRQUFJLEVBQUdDLDZDQUFJLENBQUNXLE9BQUwsQ0FBYU0sc0JBRGpCO0FBRUhkLFdBQU8sRUFBR1c7QUFGUCxHQUFQO0FBSUg7QUFHTSxTQUFTSSxtQkFBVCxDQUE4QkMsV0FBOUIsRUFBMkM7QUFDOUN0QixTQUFPLENBQUNDLEdBQVIsQ0FBWXFCLFdBQVosRUFBMEIsdUJBQTFCO0FBQ0EsU0FBTztBQUNIcEIsUUFBSSxFQUFHQyw2Q0FBSSxDQUFDVyxPQUFMLENBQWFTLFVBRGpCO0FBRUhqQixXQUFPLEVBQUdnQjtBQUZQLEdBQVA7QUFJSDtBQUVNLFNBQVNFLGFBQVQsQ0FBd0JDLEVBQXhCLEVBQTRCO0FBQy9CekIsU0FBTyxDQUFDQyxHQUFSLENBQVl3QixFQUFaLEVBQWlCLGlCQUFqQjtBQUNBLFNBQU87QUFDSHZCLFFBQUksRUFBR0MsNkNBQUksQ0FBQ1csT0FBTCxDQUFhWSxlQURqQjtBQUVIcEIsV0FBTyxFQUFHbUI7QUFGUCxHQUFQO0FBSUg7QUFFTSxTQUFTRSxnQkFBVCxDQUEyQkYsRUFBM0IsRUFBK0I7QUFDbEN6QixTQUFPLENBQUNDLEdBQVIsQ0FBWXdCLEVBQVosRUFBaUIsb0JBQWpCO0FBQ0EsU0FBTztBQUNIdkIsUUFBSSxFQUFHQyw2Q0FBSSxDQUFDVyxPQUFMLENBQWFjLGtCQURqQjtBQUVIdEIsV0FBTyxFQUFHbUI7QUFGUCxHQUFQO0FBSUg7QUFFTSxTQUFTSSwyQkFBVCxHQUFzQztBQUN6QzdCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLCtCQUFaO0FBQ0EsU0FBTztBQUNIQyxRQUFJLEVBQUdDLDZDQUFJLENBQUNXLE9BQUwsQ0FBYWdCO0FBRGpCLEdBQVA7QUFHSDtBQUNNLFNBQVNDLGNBQVQsQ0FBd0JDLFFBQXhCLEVBQWlDO0FBQ3BDaEMsU0FBTyxDQUFDQyxHQUFSLENBQVkrQixRQUFaLEVBQXFCLGtCQUFyQjtBQUNBLFNBQU87QUFDSDlCLFFBQUksRUFBR0MsNkNBQUksQ0FBQzhCLE9BQUwsQ0FBYUMsY0FEakI7QUFFSDVCLFdBQU8sRUFBRzBCO0FBRlAsR0FBUDtBQUlIO0FBRU0sU0FBU0csYUFBVCxDQUF1QkMsT0FBdkIsRUFBK0I7QUFDbENwQyxTQUFPLENBQUNDLEdBQVIsQ0FBWW1DLE9BQVosRUFBb0IsaUJBQXBCO0FBQ0EsU0FBTztBQUNIbEMsUUFBSSxFQUFHQyw2Q0FBSSxDQUFDOEIsT0FBTCxDQUFhSSxjQURqQjtBQUVIL0IsV0FBTyxFQUFHOEI7QUFGUCxHQUFQO0FBSUgsQzs7Ozs7Ozs7Ozs7O0FDckZEO0FBQUEsSUFBTWpDLElBQUksR0FBSTtBQUNabUMsTUFBSSxFQUFHO0FBQ0xDLGtCQUFjLEVBQUUsZ0JBRFg7QUFFTEMsZ0JBQVksRUFBSTtBQUZYLEdBREs7QUFLWkMsTUFBSSxFQUFHO0FBQ0xDLDRCQUF3QixFQUFFO0FBRHJCLEdBTEs7QUFRWnRDLFNBQU8sRUFBRztBQUNSQyxpQkFBYSxFQUFFO0FBRFAsR0FSRTtBQVdaSSxNQUFJLEVBQUU7QUFDSkMsZUFBVyxFQUFFO0FBRFQsR0FYTTtBQWNaSSxTQUFPLEVBQUU7QUFDUEMsa0JBQWMsRUFBVSxnQkFEakI7QUFFUEcsZUFBVyxFQUFhLGFBRmpCO0FBR1BFLDBCQUFzQixFQUFFLHdCQUhqQjtBQUlQRyxjQUFVLEVBQWMsWUFKakI7QUFLUEcsbUJBQWUsRUFBUyxpQkFMakI7QUFNUEUsc0JBQWtCLEVBQU0sb0JBTmpCO0FBT1BFLG1DQUErQixFQUFFO0FBUDFCLEdBZEc7QUF1QlphLFFBQU0sRUFBRTtBQUNOQyxvQkFBZ0IsRUFBRztBQURiLEdBdkJJO0FBMEJaWCxTQUFPLEVBQUU7QUFDUEMsa0JBQWMsRUFBRyxnQkFEVjtBQUVQRyxrQkFBYyxFQUFFO0FBRlQ7QUExQkcsQ0FBZDtBQStCZWxDLG1FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTs7SUFFTTBDLEc7Ozs7O0FBRUYsZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLG9CQUFjLEVBQUc7QUFEUixLQUFiO0FBSUFoRCxXQUFPLENBQUNDLEdBQVIsQ0FBWWdELElBQUksQ0FBQ0MsU0FBTCxDQUFlLE1BQUtKLEtBQUwsQ0FBV0ssTUFBMUIsQ0FBWjs7QUFDQSxRQUFJQyxXQUFXLGdDQUFmOztBQUNBQyxvRkFBb0IsQ0FBQ0MsdURBQUQsRUFBaUJGLFdBQWpCLENBQXBCO0FBUmU7QUFTbEI7Ozs7eUNBRW9CO0FBQ2pCLFVBQUlHLEtBQUssR0FBS0MsWUFBZDs7QUFFQSxVQUFLLENBQUMsS0FBS1QsS0FBTCxDQUFXQyxjQUFqQixFQUFrQztBQUM5QixZQUFJLEtBQUtGLEtBQUwsQ0FBV1csSUFBWCxJQUFtQixLQUFLWCxLQUFMLENBQVdXLElBQVgsQ0FBZ0I5QyxPQUF2QyxFQUFnRDtBQUU1QyxjQUFJLEtBQUttQyxLQUFMLENBQVcvQyxNQUFmLEVBQXVCO0FBRW5CLGlCQUFLMkQsUUFBTCxDQUFjO0FBQUVWLDRCQUFjLEVBQUU7QUFBbEIsYUFBZCxFQUF3QyxZQUFVO0FBQzlDLG1CQUFLRixLQUFMLENBQVcvQyxNQUFYLENBQWtCNEQsSUFBbEIsQ0FBdUJKLEtBQUssQ0FBQ0ssV0FBN0IsRUFBMEM7QUFDdENuQyxrQkFBRSxFQUFNLEtBQUtxQixLQUFMLENBQVdXLElBQVgsQ0FBZ0JoQyxFQURjO0FBRXRDb0Msb0JBQUksRUFBSSxZQUY4QjtBQUd0Q0Msc0JBQU0sRUFBRSxLQUFLaEIsS0FBTCxDQUFXVyxJQUFYLENBQWdCTSxNQUFoQixDQUF1QkM7QUFITyxlQUExQztBQUtBLG1CQUFLbEIsS0FBTCxDQUFXL0MsTUFBWCxDQUFrQjRELElBQWxCLENBQXVCSixLQUFLLENBQUNVLGdCQUE3QixFQUErQztBQUFFeEMsa0JBQUUsRUFBRSxLQUFLcUIsS0FBTCxDQUFXVyxJQUFYLENBQWdCaEM7QUFBdEIsZUFBL0M7QUFDSCxhQVBEO0FBUUg7QUFDSjtBQUNKO0FBQ0o7Ozs2QkFDUTtBQUNMekIsYUFBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBLDBCQUNJO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQThCLFVBQUUsRUFBQztBQUFqQyxzQkFDSSwyREFBQyx1REFBRCxPQURKLENBREo7QUFLSDs7OztFQXhDYWlFLCtDOztBQTJDbEIsSUFBSUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDcEIsS0FBRCxFQUFXO0FBQzdCLFNBQU87QUFDSEksVUFBTSxFQUFFSixLQUFLLENBQUNJLE1BRFg7QUFFSHBELFVBQU0sRUFBRWdELEtBQUssQ0FBQ2hELE1BRlg7QUFHSDBELFFBQUksRUFBRVYsS0FBSyxDQUFDcUIsS0FIVDtBQUlIQyxZQUFRLEVBQUV0QixLQUFLLENBQUNzQjtBQUpiLEdBQVA7QUFNSCxDQVBEOztBQVFlQywwSEFBTyxDQUFDSCxlQUFELENBQVAsQ0FBeUJ0QixHQUF6QixDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU0wQixPOzs7Ozs7Ozs7Ozs7OzZCQUVPO0FBQUEsVUFDQ3ZDLFFBREQsR0FDYyxLQUFLYyxLQURuQixDQUNDZCxRQUREO0FBRUwsMEJBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0ksMkRBQUMsd0RBQUQsT0FESixlQUVJLDJEQUFDLDJEQUFELE9BRkosZUFHSSwyREFBQyx5REFBRCxPQUhKLEVBTVFBLFFBQVEsQ0FBQ3dDLElBQVQsQ0FBY0MsR0FBZCxDQUFtQixVQUFBckMsT0FBTyxFQUFJO0FBRTFCLFlBQUdBLE9BQUgsRUFBVztBQUNQLDhCQUNJO0FBQUssZUFBRyxFQUFFQSxPQUFPLENBQUNYO0FBQWxCLDBCQUNJLDJEQUFDLGdFQUFEO0FBQXNCLG1CQUFPLEVBQUVXO0FBQS9CLFlBREosZUFFSSwyREFBQyxnRUFBRDtBQUFxQixtQkFBTyxFQUFFQTtBQUE5QixZQUZKLGVBR0ksMkRBQUMsMERBQUQ7QUFBZSxtQkFBTyxFQUFFQTtBQUF4QixZQUhKLENBREo7QUFPSDtBQUNKLE9BWEQsQ0FOUixDQURKO0FBc0JIOzs7O0VBMUJpQjhCLCtDOztBQTRCdEIsSUFBSUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDcEIsS0FBRCxFQUFXO0FBQzdCLFNBQU87QUFDSGYsWUFBUSxFQUFFZSxLQUFLLENBQUNYO0FBRGIsR0FBUDtBQUdILENBSkQ7O0FBS2VrQywwSEFBTyxDQUFDSCxlQUFELENBQVAsQ0FBeUJJLE9BQXpCLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7O0lBRXFCRyxZOzs7Ozs7Ozs7Ozs7OzZCQUVSO0FBRUwsMEJBQ0k7QUFBSyxVQUFFLEVBQUMsa0JBQVI7QUFBMkIsaUJBQVMsRUFBQztBQUFyQyxzQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZiw0RkFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixRQUZKLENBREosZUFLSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFHLGlCQUFTLEVBQUMsNkJBQWI7QUFBMkMsWUFBSSxFQUFDLEdBQWhEO0FBQW9ELFdBQUcsRUFBQztBQUF4RCwwQ0FESixDQUZKLENBTEosQ0FESjtBQWNIOzs7O0VBbEJxQ1IsK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0YxQztBQUNBO0FBQ0E7QUFDQTs7SUFDTVMsYTs7Ozs7Ozs7Ozs7Ozs2QkFHTztBQUFBLHdCQUVtQixLQUFLN0IsS0FGeEI7QUFBQSxVQUVDVyxJQUZELGVBRUNBLElBRkQ7QUFBQSxVQUVPckIsT0FGUCxlQUVPQSxPQUZQOztBQUlMLFVBQUcsQ0FBQ0EsT0FBSixFQUFZO0FBQ1IsZUFBTyxJQUFQO0FBQ0g7O0FBTkksNEJBVW1Dd0MsMEVBQWMsQ0FBQ3hDLE9BQUQsRUFBVXFCLElBQVYsQ0FWakQ7QUFBQTtBQUFBLFVBUUNvQixTQVJEO0FBQUEsVUFRWUMsS0FSWjtBQUFBLFVBUW1CQyxNQVJuQjtBQUFBLFVBUTJCQyxNQVIzQjtBQUFBLFVBU0RDLGNBVEM7QUFBQSxVQVNlQyxLQVRmO0FBQUEsVUFTc0JDLEdBVHRCO0FBQUEsVUFVREMsU0FWQztBQUFBLFVBVVVDLGFBVlY7QUFBQSxVQVV5QkMsS0FWekI7O0FBYUwsMEJBQ0k7QUFBTSxVQUFFLEVBQUcsS0FBS3hDLEtBQUwsQ0FBV1YsT0FBWCxDQUFtQlgsRUFBbkIsR0FBd0IsbUJBQW5DO0FBQXlELGlCQUFTLEVBQUM7QUFBbkUsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsOEJBREosZUFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFHLGlCQUFTLEVBQUM7QUFBYixRQURKLGVBRUk7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLFNBQWdDb0QsU0FBaEMsQ0FGSixDQURKLGVBS0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBRyxpQkFBUyxFQUFDO0FBQWIsUUFESixlQUVJO0FBQU0saUJBQVMsRUFBQztBQUFoQixTQUFpQ0MsS0FBakMsQ0FGSixDQUxKLGVBU0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBRyxpQkFBUyxFQUFDO0FBQWIsUUFESixlQUVJO0FBQU0saUJBQVMsRUFBQztBQUFoQixTQUFpQ0MsTUFBakMsQ0FGSixDQVRKLENBREosQ0FGSixlQWtCSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFBc0Isb0dBQXRCLENBREosZUFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUE4QkMsTUFBOUIsV0FGSixDQUZKLGVBTUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQXNCLGdIQUF0QixDQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FBOEJDLGNBQTlCLGtCQUZKLENBTkosZUFXSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFBc0IseUlBQXRCLENBREosZUFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUE4QkMsS0FBOUIsV0FGSixDQVhKLENBbEJKLEVBbUNRLEtBQUtwQyxLQUFMLENBQVdXLElBQVgsQ0FBZ0I4QixPQUFoQixJQUEyQjVDLCtDQUFNLENBQUM2QyxTQUFQLENBQWlCQyxNQUE1QyxpQkFDQTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFBc0IsOEZBQXRCLE1BREosZUFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUE4QkosYUFBOUIsV0FGSixDQUZKLGVBTUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsZ0dBTkosQ0FwQ1IsRUE4Q1EsS0FBS3ZDLEtBQUwsQ0FBV1csSUFBWCxDQUFnQjhCLE9BQWhCLElBQTJCNUMsK0NBQU0sQ0FBQzZDLFNBQVAsQ0FBaUJFLFFBQTVDLGlCQUNBO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUFzQixzSEFBdEIsQ0FESixlQUVJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQThCTixTQUE5QixXQUZKLENBREosZUFLSTtBQUFLLGlCQUFTLEVBQUM7QUFBZiw2RkFMSixlQU9JO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUFzQixrSEFBdEIsTUFESixlQUVJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQThCRCxHQUE5QixXQUZKLENBUEosQ0EvQ1IsZUE0REk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsd0JBREosZUFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUE0REcsS0FBNUQsV0FGSixDQURKLENBNURKLENBREo7QUFxRUg7Ozs7RUFyRnVCcEIsK0M7O0FBeUY1QixJQUFJQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNwQixLQUFELEVBQVc7QUFDN0IsU0FBTztBQUNIVSxRQUFJLEVBQVdWLEtBQUssQ0FBQ3FCLEtBRGxCO0FBRUhwQyxZQUFRLEVBQU9lLEtBQUssQ0FBQ1gsT0FGbEI7QUFHSHVELGlCQUFhLEVBQUU1QyxLQUFLLENBQUNzQjtBQUhsQixHQUFQO0FBS0gsQ0FORDs7QUFPZUMsMEhBQU8sQ0FBQ0gsZUFBRCxDQUFQLENBQXlCUSxhQUF6QixDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEdBOztJQUNxQmlCLGM7Ozs7Ozs7Ozs7Ozs7NkJBR1I7QUFFTCwwQkFDSTtBQUFLLFVBQUUsRUFBQyxvQkFBUjtBQUE2QixpQkFBUyxFQUFDO0FBQXZDLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLDRKQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQTJDO0FBQUssaUJBQVMsRUFBQztBQUFmLFFBQTNDLENBRkosZUFHSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFHLGlCQUFTLEVBQUMsNkJBQWI7QUFBMkMsWUFBSSxFQUFDLEdBQWhEO0FBQW9ELFdBQUcsRUFBQztBQUF4RCwwQ0FESixDQUZKLENBSEosQ0FESjtBQVlIOzs7O0VBakJ1QzFCLCtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Y1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUNNMkIsbUI7Ozs7Ozs7Ozs7Ozs7O29IQUVGQyxZLEdBQWUsWUFBTTtBQUFBLFVBQ1gxRCxPQURXLEdBQ0MsTUFBS1UsS0FETixDQUNYVixPQURXO0FBRWpCMkQsbURBQUMsQ0FBQyxNQUFLM0QsT0FBTyxDQUFDWCxFQUFiLEdBQWlCLG9CQUFsQixDQUFELENBQXlDdUUsS0FBekMsQ0FBK0M7QUFDM0NDLG1CQUFXLEVBQUUsS0FEOEI7QUFFM0NDLGtCQUFVLEVBQUUsS0FGK0I7QUFHM0NDLGlCQUFTLEVBQUU7QUFIZ0MsT0FBL0M7QUFLSCxLLFFBQ0RDLFcsR0FBYyxZQUFNO0FBQUEsZ0NBRXVCLE1BQUt0RCxLQUFMLENBQVdWLE9BRmxDO0FBQUEsVUFFVlgsRUFGVSx1QkFFVkEsRUFGVTtBQUFBLFVBRU5vRCxTQUZNLHVCQUVOQSxTQUZNO0FBQUEsVUFFS0MsS0FGTCx1QkFFS0EsS0FGTDtBQUFBLFVBRVlDLE1BRlosdUJBRVlBLE1BRlo7O0FBR2hCLFVBQUlzQixhQUFhLEdBQUssTUFBS3ZELEtBQUwsQ0FBVzZDLGFBQVgsQ0FBeUJXLElBQXpCLENBQThCLFVBQUFDLE9BQU87QUFBQSxlQUFJQSxPQUFPLENBQUNDLFFBQVo7QUFBQSxPQUFyQyxDQUF0QixDQUhnQixDQUloQjs7O0FBQ0EsVUFBSUMsYUFBYSxHQUFHO0FBQ2hCQyxrQkFBVSxFQUFPakYsRUFERDtBQUVoQmtGLHFCQUFhLEVBQUksQ0FGRDtBQUdoQkMsY0FBTSxFQUFXLENBSEQ7QUFJaEJDLHVCQUFlLEVBQUUsQ0FKRDtBQUtoQi9CLGFBQUssRUFBWUEsS0FMRDtBQU1oQkMsY0FBTSxFQUFXQSxNQU5EO0FBT2hCRixpQkFBUyxFQUFRQSxTQVBEO0FBUWhCYixtQkFBVyxFQUFNLE1BQUtsQixLQUFMLENBQVdXLElBQVgsQ0FBZ0JNLE1BQWhCLENBQXVCQyxXQVJ4QjtBQVNoQjhDLGNBQU0sRUFBVyxNQUFLaEUsS0FBTCxDQUFXVyxJQUFYLENBQWdCaEMsRUFUakI7QUFVaEJILG1CQUFXLEVBQU0rRSxhQUFhLENBQUMvRTtBQVZmLE9BQXBCO0FBWUF5RixtRkFBaUIsQ0FBQ04sYUFBRCxDQUFqQjtBQUNBVixtREFBQyxDQUFDQyxLQUFGLENBQVFnQixLQUFSO0FBQ0gsSzs7Ozs7NkJBRVE7QUFBQSw0QkFJbUNwQywwRUFBYyxDQUFDLEtBQUs5QixLQUFMLENBQVdWLE9BQVosRUFBcUIsS0FBS1UsS0FBTCxDQUFXVyxJQUFoQyxDQUpqRDtBQUFBO0FBQUEsVUFFQ29CLFNBRkQ7QUFBQSxVQUVZQyxLQUZaO0FBQUEsVUFFbUJDLE1BRm5CO0FBQUEsVUFFMkJDLE1BRjNCO0FBQUEsVUFHREMsY0FIQztBQUFBLFVBR2VDLEtBSGY7QUFBQSxVQUdzQkMsR0FIdEI7QUFBQSxVQUlEQyxTQUpDO0FBQUEsVUFJVUMsYUFKVjtBQUFBLFVBSXlCQyxLQUp6Qjs7QUFNTCwwQkFDSTtBQUFLLFVBQUUsRUFBRyxLQUFLeEMsS0FBTCxDQUFXVixPQUFYLENBQW1CWCxFQUFuQixHQUF3QixvQkFBbEM7QUFBeUQsaUJBQVMsRUFBQztBQUFuRSxzQkFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZiw4QkFGSixlQUdJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUcsaUJBQVMsRUFBQztBQUFiLFFBREosZUFFSTtBQUFNLGlCQUFTLEVBQUM7QUFBaEIsU0FBZ0NvRCxTQUFoQyxDQUZKLENBREosZUFLSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFHLGlCQUFTLEVBQUM7QUFBYixRQURKLGVBRUk7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLFNBQWlDQyxLQUFqQyxDQUZKLENBTEosZUFTSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFHLGlCQUFTLEVBQUM7QUFBYixRQURKLGVBRUk7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLFNBQWlDQyxNQUFqQyxDQUZKLENBVEosQ0FESixDQUhKLGVBbUJJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUVJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUFzQixvR0FBdEIsQ0FESixlQUVJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQThCQyxNQUE5QixXQUZKLENBRkosZUFNSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFBc0IsZ0hBQXRCLENBREosZUFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUE4QkMsY0FBOUIsa0JBRkosQ0FOSixlQVdJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUFzQix5SUFBdEIsQ0FESixlQUVJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQThCQyxLQUE5QixXQUZKLENBWEosQ0FuQkosRUFvQ1EsS0FBS3BDLEtBQUwsQ0FBV1csSUFBWCxDQUFnQjhCLE9BQWhCLElBQTJCNUMsK0NBQU0sQ0FBQzZDLFNBQVAsQ0FBaUJDLE1BQTVDLGlCQUNBO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUFzQiw4RkFBdEIsTUFESixlQUVJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQThCSixhQUE5QixXQUZKLENBREosZUFLSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixnR0FMSixDQXJDUixFQThDUSxLQUFLdkMsS0FBTCxDQUFXVyxJQUFYLENBQWdCOEIsT0FBaEIsSUFBMkI1QywrQ0FBTSxDQUFDNkMsU0FBUCxDQUFpQkUsUUFBNUMsaUJBQ0E7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQXNCLHNIQUF0QixDQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FBOEJOLFNBQTlCLFdBRkosQ0FESixlQUtJO0FBQUssaUJBQVMsRUFBQztBQUFmLDZGQUxKLGVBT0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQXNCLGtIQUF0QixNQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FBOEJELEdBQTlCLFdBRkosQ0FQSixDQS9DUixlQTRESTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZix3QkFESixlQUVJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQTRERyxLQUE1RCxXQUZKLENBREosZUFLSTtBQUFLLGlCQUFTLEVBQUM7QUFBZiw0R0FMSixlQU1JO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUVJO0FBQUcsaUJBQVMsRUFBQyw2QkFBYjtBQUEyQyxlQUFPLEVBQUcsS0FBS1E7QUFBMUQsMENBRkosRUFJUSxLQUFLaEQsS0FBTCxDQUFXVyxJQUFYLENBQWdCOEIsT0FBaEIsSUFBMkI1QywrQ0FBTSxDQUFDNkMsU0FBUCxDQUFpQkUsUUFBNUMsaUJBQ0E7QUFBRyxpQkFBUyxFQUFDLCtCQUFiO0FBQTZDLGVBQU8sRUFBRyxLQUFLVTtBQUE1RCxvQ0FMUixDQU5KLENBNURKLENBREo7QUFnRkg7Ozs7RUFySDZCbEMsK0M7O0FBeUhsQyxJQUFJQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNwQixLQUFELEVBQVc7QUFDN0IsU0FBTztBQUNIVSxRQUFJLEVBQVdWLEtBQUssQ0FBQ3FCLEtBRGxCO0FBRUh1QixpQkFBYSxFQUFFNUMsS0FBSyxDQUFDc0I7QUFGbEIsR0FBUDtBQUlILENBTEQ7O0FBTWVDLDBIQUFPLENBQUNILGVBQUQsQ0FBUCxDQUF5QjBCLG1CQUF6QixDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBb0Isd0RBQWlCLENBQUNsQiw2Q0FBRCxDQUFqQjtBQUNBbUIscUZBQW1CLENBQUNuQiw2Q0FBRCxDQUFuQjs7SUFFTW9CLG1COzs7OztBQUNGLCtCQUFZckUsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLFVBcUZuQnNFLGdCQXJGbUIsR0FxRkEsWUFBTTtBQUFBLDRCQVlqQnhDLDBFQUFjLENBQUMsTUFBSzdCLEtBQU4sRUFBYSxNQUFLRCxLQUFMLENBQVdXLElBQXhCLENBWkc7QUFBQTtBQUFBLFVBRWpCb0IsU0FGaUI7QUFBQSxVQUdqQkMsS0FIaUI7QUFBQSxVQUlqQkMsTUFKaUI7QUFBQSxVQUtqQkMsTUFMaUI7QUFBQSxVQU1qQkMsY0FOaUI7QUFBQSxVQU9qQkMsS0FQaUI7QUFBQSxVQVFqQkMsR0FSaUI7QUFBQSxVQVNqQkMsU0FUaUI7QUFBQSxVQVVqQkMsYUFWaUI7QUFBQSxVQVdqQkMsS0FYaUI7O0FBY3JCLFVBQUllLGFBQWEsR0FBSyxNQUFLdkQsS0FBTCxDQUFXNkMsYUFBWCxDQUF5QlcsSUFBekIsQ0FBOEIsVUFBQUMsT0FBTztBQUFBLGVBQUlBLE9BQU8sQ0FBQ0MsUUFBWjtBQUFBLE9BQXJDLENBQXRCLENBZHFCLENBZXJCOzs7QUFDQSxVQUFJQyxhQUFhLEdBQUc7QUFDaEJDLGtCQUFVLEVBQU8sTUFBSzNELEtBQUwsQ0FBV3RCLEVBRFo7QUFFaEJrRixxQkFBYSxFQUFJLENBRkQ7QUFHaEI3QixhQUFLLEVBQVlBLEtBSEQ7QUFJaEJDLGNBQU0sRUFBV0EsTUFKRDtBQUtoQkYsaUJBQVMsRUFBUUEsU0FMRDtBQU1oQmIsbUJBQVcsRUFBTSxNQUFLbEIsS0FBTCxDQUFXVyxJQUFYLENBQWdCTSxNQUFoQixDQUF1QkMsV0FOeEI7QUFPaEI4QyxjQUFNLEVBQVcsTUFBS2hFLEtBQUwsQ0FBV1csSUFBWCxDQUFnQmhDLEVBUGpCO0FBUWhCSCxtQkFBVyxFQUFNK0UsYUFBYSxDQUFDL0U7QUFSZixPQUFwQjtBQVVBeUYsbUZBQWlCLENBQUNOLGFBQUQsQ0FBakI7QUFDQVYsbURBQUMsQ0FBQ0MsS0FBRixDQUFRZ0IsS0FBUjtBQUNILEtBakhrQjs7QUFBQSxVQWtIbkJLLGtCQWxIbUIsR0FrSEUsWUFBTTtBQUFBLDZCQWFuQnpDLDBFQUFjLENBQUMsTUFBSzdCLEtBQU4sRUFBYSxNQUFLRCxLQUFMLENBQVdXLElBQXhCLENBYks7QUFBQTtBQUFBLFVBR25Cb0IsU0FIbUI7QUFBQSxVQUluQkMsS0FKbUI7QUFBQSxVQUtuQkMsTUFMbUI7QUFBQSxVQU1uQkMsTUFObUI7QUFBQSxVQU9uQkMsY0FQbUI7QUFBQSxVQVFuQkMsS0FSbUI7QUFBQSxVQVNuQkMsR0FUbUI7QUFBQSxVQVVuQkMsU0FWbUI7QUFBQSxVQVduQkMsYUFYbUI7QUFBQSxVQVluQkMsS0FabUI7O0FBZXZCLFVBQUllLGFBQWEsR0FBRyxNQUFLdkQsS0FBTCxDQUFXNkMsYUFBWCxDQUF5QlcsSUFBekIsQ0FBOEIsVUFBQUMsT0FBTztBQUFBLGVBQUlBLE9BQU8sQ0FBQ0MsUUFBWjtBQUFBLE9BQXJDLENBQXBCLENBZnVCLENBZ0J2Qjs7O0FBQ0EsVUFBSUMsYUFBYSxHQUFHO0FBQ2hCQyxrQkFBVSxFQUFPLE1BQUszRCxLQUFMLENBQVd0QixFQURaO0FBRWhCb0YsdUJBQWUsRUFBRSxDQUZEO0FBR2hCL0IsYUFBSyxFQUFZQSxLQUhEO0FBSWhCQyxjQUFNLEVBQVdBLE1BSkQ7QUFLaEJGLGlCQUFTLEVBQVFBLFNBTEQ7QUFNaEJiLG1CQUFXLEVBQU0sTUFBS2xCLEtBQUwsQ0FBV1csSUFBWCxDQUFnQk0sTUFBaEIsQ0FBdUJDLFdBTnhCO0FBT2hCOEMsY0FBTSxFQUFXLE1BQUtoRSxLQUFMLENBQVdXLElBQVgsQ0FBZ0JoQyxFQVBqQjtBQVFoQkgsbUJBQVcsRUFBTStFLGFBQWEsQ0FBQy9FO0FBUmYsT0FBcEI7QUFVQXlGLG1GQUFpQixDQUFDTixhQUFELENBQWpCO0FBQ0FWLG1EQUFDLENBQUNDLEtBQUYsQ0FBUWdCLEtBQVI7QUFDSCxLQS9Ja0I7O0FBQUEsUUFFVDVFLE9BRlMsR0FFRyxNQUFLVSxLQUZSLENBRVRWLE9BRlM7QUFJZixVQUFLVyxLQUFMLEdBQWE7QUFDVHRCLFFBQUUsRUFBZVcsT0FBTyxDQUFDWCxFQURoQjtBQUVUb0QsZUFBUyxFQUFRekMsT0FBTyxDQUFDeUMsU0FGaEI7QUFHVEMsV0FBSyxFQUFZMUMsT0FBTyxDQUFDMEMsS0FIaEI7QUFJVEMsWUFBTSxFQUFXM0MsT0FBTyxDQUFDMkMsTUFKaEI7QUFLVEMsWUFBTSxFQUFXNUMsT0FBTyxDQUFDNEMsTUFMaEI7QUFNVDJCLG1CQUFhLEVBQUl2RSxPQUFPLENBQUN1RSxhQU5oQjtBQU9URSxxQkFBZSxFQUFFekUsT0FBTyxDQUFDeUU7QUFQaEIsS0FBYjtBQUplO0FBYWxCOzs7O3dDQUNrQjtBQUVmLFVBQUlTLFNBQVMsR0FBWSxJQUF6QjtBQUFBLFVBQ0lDLGlCQUFpQixHQUFJLE1BQU0sS0FBS3hFLEtBQUwsQ0FBV3RCLEVBQWpCLEdBQXNCLHFDQUQvQztBQUFBLFVBRUkrRixrQkFBa0IsR0FBRyxNQUFNLEtBQUt6RSxLQUFMLENBQVd0QixFQUFqQixHQUFzQixzQ0FGL0M7QUFBQSxVQUdJZ0csa0JBQWtCLEdBQUcsTUFBTSxLQUFLMUUsS0FBTCxDQUFXdEIsRUFBakIsR0FBc0IsZ0NBSC9DOztBQUtBc0UsbURBQUMsQ0FBQ3dCLGlCQUFELENBQUQsQ0FBcUJHLFVBQXJCLENBQWdDO0FBQUUsc0JBQWM7QUFBaEIsT0FBaEM7QUFDQTNCLG1EQUFDLENBQUN5QixrQkFBRCxDQUFELENBQXNCRSxVQUF0QixDQUFpQztBQUFFLHNCQUFjO0FBQWhCLE9BQWpDO0FBRUEzQixtREFBQyxDQUFDd0IsaUJBQUQsQ0FBRCxDQUFxQkksRUFBckIsQ0FBd0IsWUFBeEIsRUFBc0MsWUFBVztBQUM3QyxZQUFJQyxXQUFXLEdBQUc3Qiw2Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFROEIsR0FBUixFQUFsQjs7QUFDQVAsaUJBQVMsQ0FBQzVELFFBQVYsQ0FBbUI7QUFDZm9CLGVBQUssRUFBRThDO0FBRFEsU0FBbkI7QUFHSCxPQUxEO0FBTUE3QixtREFBQyxDQUFDeUIsa0JBQUQsQ0FBRCxDQUFzQkcsRUFBdEIsQ0FBeUIsWUFBekIsRUFBdUMsWUFBVztBQUM5QyxZQUFJRyxZQUFZLEdBQUcvQiw2Q0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFROEIsR0FBUixFQUFuQjs7QUFDQVAsaUJBQVMsQ0FBQzVELFFBQVYsQ0FBbUI7QUFDZnFCLGdCQUFNLEVBQUUrQztBQURPLFNBQW5CO0FBR0gsT0FMRDtBQU9BL0IsbURBQUMsQ0FBQzBCLGtCQUFELENBQUQsQ0FBc0JNLFVBQXRCLENBQWlDO0FBQzdCQyxrQkFBVSxFQUFFLFVBRGlCO0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLGdCQUFRLEVBQUUsa0JBQVNDLFFBQVQsRUFBbUJDLElBQW5CLEVBQXlCO0FBRS9CYixtQkFBUyxDQUFDNUQsUUFBVixDQUFtQjtBQUNmbUIscUJBQVMsRUFBRXFEO0FBREksV0FBbkI7QUFHSDtBQWpCNEIsT0FBakM7QUFtQkg7Ozt5Q0FDbUI7QUFBQSxVQUVWOUYsT0FGVSxHQUVFLEtBQUtVLEtBRlAsQ0FFVlYsT0FGVTs7QUFHaEIsVUFBSUEsT0FBTyxDQUFDZ0csTUFBUixJQUFrQixJQUF0QixFQUE0QjtBQUN4QixhQUFLMUUsUUFBTCxDQUFjO0FBQ1ZqQyxZQUFFLEVBQWVXLE9BQU8sQ0FBQ1gsRUFEZjtBQUVWb0QsbUJBQVMsRUFBUXpDLE9BQU8sQ0FBQ3lDLFNBRmY7QUFHVkMsZUFBSyxFQUFZMUMsT0FBTyxDQUFDMEMsS0FIZjtBQUlWQyxnQkFBTSxFQUFXM0MsT0FBTyxDQUFDMkMsTUFKZjtBQUtWQyxnQkFBTSxFQUFXNUMsT0FBTyxDQUFDNEMsTUFMZjtBQU1WMkIsdUJBQWEsRUFBSXZFLE9BQU8sQ0FBQ3VFLGFBTmY7QUFPVkUseUJBQWUsRUFBRXpFLE9BQU8sQ0FBQ3lFO0FBUGYsU0FBZCxFQVNHLFlBQVU7QUFFVCxjQUFJekUsT0FBTyxtQ0FBUyxLQUFLVSxLQUFMLENBQVdWLE9BQXBCO0FBQTZCZ0csa0JBQU0sRUFBRTtBQUFyQyxZQUFYOztBQUNBLGVBQUt0RixLQUFMLENBQVd1RixRQUFYLENBQW9CbEcsNkRBQWEsQ0FBQ0MsT0FBRCxDQUFqQztBQUVBLGNBQUltRixpQkFBaUIsR0FBSSxNQUFNLEtBQUt4RSxLQUFMLENBQVd0QixFQUFqQixHQUFzQixxQ0FBL0M7QUFBQSxjQUNJK0Ysa0JBQWtCLEdBQUcsTUFBTSxLQUFLekUsS0FBTCxDQUFXdEIsRUFBakIsR0FBc0Isc0NBRC9DO0FBQUEsY0FFSWdHLGtCQUFrQixHQUFHLE1BQU0sS0FBSzFFLEtBQUwsQ0FBV3RCLEVBQWpCLEdBQXNCLGdDQUYvQztBQUdBc0UsdURBQUMsQ0FBQ3dCLGlCQUFELENBQUQsQ0FBcUJNLEdBQXJCLENBQXlCLEtBQUs5RSxLQUFMLENBQVcrQixLQUFwQztBQUNBaUIsdURBQUMsQ0FBQ3lCLGtCQUFELENBQUQsQ0FBc0JLLEdBQXRCLENBQTBCLEtBQUs5RSxLQUFMLENBQVdnQyxNQUFyQztBQUNBZ0IsdURBQUMsQ0FBQzBCLGtCQUFELENBQUQsQ0FBc0JJLEdBQXRCLENBQTBCLEtBQUs5RSxLQUFMLENBQVc4QixTQUFyQztBQUNILFNBcEJEO0FBcUJIO0FBQ0o7Ozs2QkErRFE7QUFBQSw2QkFhREQsMEVBQWMsQ0FBQyxLQUFLN0IsS0FBTixFQUFhLEtBQUtELEtBQUwsQ0FBV1csSUFBeEIsQ0FiYjtBQUFBO0FBQUEsVUFHRG9CLFNBSEM7QUFBQSxVQUlEQyxLQUpDO0FBQUEsVUFLREMsTUFMQztBQUFBLFVBTURDLE1BTkM7QUFBQSxVQU9EQyxjQVBDO0FBQUEsVUFRREMsS0FSQztBQUFBLFVBU0RDLEdBVEM7QUFBQSxVQVVEQyxTQVZDO0FBQUEsVUFXREMsYUFYQztBQUFBLFVBWURDLEtBWkM7O0FBZUwsVUFBSWdELFlBQVksR0FBRyxLQUFLeEYsS0FBTCxDQUFXVixPQUE5QjtBQUNBLFVBQUltRyxNQUFNLEdBQUdELFlBQVksQ0FBQ3hELEtBQWIsSUFBc0JBLEtBQXRCLElBQStCd0QsWUFBWSxDQUFDdkQsTUFBYixJQUF1QkEsTUFBdEQsSUFBZ0V1RCxZQUFZLENBQUN6RCxTQUFiLElBQTBCQSxTQUF2RztBQUNBLFVBQUkyRCxjQUFKLEVBQ0lDLGFBREosRUFFSUMsY0FGSixFQUdJQyxnQkFISixFQUlJQyxlQUpKLEVBS0lDLGdCQUxKOztBQU9BLFVBQUcsS0FBSy9GLEtBQUwsQ0FBV1csSUFBWCxDQUFnQjhCLE9BQWhCLElBQTJCNUMsK0NBQU0sQ0FBQzZDLFNBQVAsQ0FBaUJDLE1BQS9DLEVBQXNEO0FBRWxEK0Msc0JBQWMsR0FBSywrQkFBbkIsRUFDQUMsYUFBYSxHQUFNLFFBRG5CLEVBRUFDLGNBQWMsR0FBSyxLQUFLdEIsZ0JBRnhCLEVBSUF1QixnQkFBZ0IsR0FBRywwQ0FKbkIsRUFLQTtBQUNBO0FBQ0FDLHVCQUFlLEdBQUksS0FBSzdGLEtBQUwsQ0FBVzhELGVBQVgsR0FBNkIsU0FBN0IsR0FBeUMsUUFQNUQsRUFRQWdDLGdCQUFnQixHQUFHLElBUm5COztBQVVBLFlBQUcsS0FBSzlGLEtBQUwsQ0FBVzRELGFBQVgsSUFBNEIsQ0FBQzRCLE1BQWhDLEVBQXVDO0FBQ25DQyx3QkFBYyxJQUFJLFdBQWxCO0FBQ0FDLHVCQUFhLEdBQUcsU0FBaEI7QUFDQUMsd0JBQWMsR0FBSyxJQUFuQjtBQUNIO0FBRUo7O0FBQ0QsVUFBRyxLQUFLNUYsS0FBTCxDQUFXVyxJQUFYLENBQWdCOEIsT0FBaEIsSUFBMkI1QywrQ0FBTSxDQUFDNkMsU0FBUCxDQUFpQkUsUUFBL0MsRUFBd0Q7QUFHcERpRCx3QkFBZ0IsR0FBSyxpQ0FBckIsRUFDQUMsZUFBZSxHQUFNLE9BRHJCLEVBRUFDLGdCQUFnQixHQUFLLEtBQUt4QixrQkFGMUIsRUFJQW1CLGNBQWMsR0FBRyx3Q0FKakIsRUFLQTtBQUNBO0FBQ0FDLHFCQUFhLEdBQUksS0FBSzFGLEtBQUwsQ0FBVzRELGFBQVgsR0FBMkIsVUFBM0IsR0FBd0MsU0FQekQsRUFRQStCLGNBQWMsR0FBRyxJQVJqQjs7QUFVQSxZQUFHLEtBQUszRixLQUFMLENBQVc4RCxlQUFYLElBQThCLENBQUMwQixNQUFsQyxFQUF5QztBQUNyQ0ksMEJBQWdCLElBQUksV0FBcEI7QUFDQUMseUJBQWUsR0FBRyxVQUFsQjtBQUNBQywwQkFBZ0IsR0FBSyxJQUFyQjtBQUNIO0FBQ0o7O0FBTUQsMEJBQ0k7QUFBSyxVQUFFLEVBQUcsS0FBSzlGLEtBQUwsQ0FBV3RCLEVBQVgsR0FBZ0Isb0JBQTFCO0FBQWlELGlCQUFTLEVBQUM7QUFBM0Qsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsb0NBREosZUFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFHLGlCQUFTLEVBQUM7QUFBYixRQURKLGVBRUk7QUFBTyxpQkFBUyxFQUFDLDBCQUFqQjtBQUE0QyxZQUFJLEVBQUMsTUFBakQ7QUFBd0Qsb0JBQVksRUFBQyxPQUFyRTtBQUNBLG9CQUFZLEVBQUdvRDtBQURmLFFBRkosQ0FESixlQU1JO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUcsaUJBQVMsRUFBQztBQUFiLFFBREosZUFFSTtBQUFPLGlCQUFTLEVBQUMsK0JBQWpCO0FBQWlELG9CQUFZLEVBQUMsT0FBOUQ7QUFDSSxvQkFBWSxFQUFHQztBQURuQixRQUZKLENBTkosZUFXSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFHLGlCQUFTLEVBQUM7QUFBYixRQURKLGVBRUk7QUFBTyxpQkFBUyxFQUFDLGdDQUFqQjtBQUFrRCxvQkFBWSxFQUFDLE9BQS9EO0FBQ0Esb0JBQVksRUFBR0M7QUFEZixRQUZKLENBWEosQ0FESixDQUZKLGVBcUJJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ01FLGNBQWMsSUFBSSxDQUFsQixHQUFzQix5QkFBdEIsR0FBa0QsSUFEeEQsQ0FyQkosZUF3Qkk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBRUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQXNCLG9HQUF0QixDQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FBOEJELE1BQTlCLFdBRkosQ0FGSixlQU1JO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUFzQixnSEFBdEIsQ0FESixlQUVJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQThCQyxjQUE5QixrQkFGSixDQU5KLGVBV0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQXNCLHlJQUF0QixDQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FBOEJDLEtBQTlCLFdBRkosQ0FYSixDQXhCSixFQXlDUSxLQUFLcEMsS0FBTCxDQUFXVyxJQUFYLENBQWdCOEIsT0FBaEIsSUFBMkI1QywrQ0FBTSxDQUFDNkMsU0FBUCxDQUFpQkMsTUFBNUMsaUJBQ0E7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQXNCLDhGQUF0QixNQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FBOEJKLGFBQTlCLFdBRkosQ0FESixlQUtJO0FBQUssaUJBQVMsRUFBQztBQUFmLGdHQUxKLENBMUNSLEVBbURRLEtBQUt2QyxLQUFMLENBQVdXLElBQVgsQ0FBZ0I4QixPQUFoQixJQUEyQjVDLCtDQUFNLENBQUM2QyxTQUFQLENBQWlCRSxRQUE1QyxpQkFDQTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFBc0Isc0hBQXRCLENBREosZUFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUE4Qk4sU0FBOUIsV0FGSixDQURKLGVBS0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsNkZBTEosZUFPSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFBc0Isa0hBQXRCLE1BREosZUFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUE4QkQsR0FBOUIsV0FGSixDQVBKLENBcERSLGVBaUVJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHdCQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FBNERHLEtBQTVELFdBRkosQ0FESixlQUtJO0FBQUssaUJBQVMsRUFBQztBQUFmLDRHQUxKLGVBTUk7QUFBSyxpQkFBUyxFQUFHTCxjQUFjLEdBQUcsQ0FBakIsR0FBcUIsUUFBckIsR0FBZ0M7QUFBakQsc0JBRUk7QUFBRyxpQkFBUyxFQUFHdUQsY0FBZjtBQUFnQyxlQUFPLEVBQUlFO0FBQTNDLGNBQStERCxhQUEvRCxNQUZKLGVBR0k7QUFBRyxpQkFBUyxFQUFHRSxnQkFBZjtBQUFrQyxlQUFPLEVBQUlFO0FBQTdDLGNBQW1FRCxlQUFuRSxNQUhKLENBTkosQ0FqRUosQ0FESjtBQWdGSDs7OztFQXRTNkIxRSwrQzs7QUF5U2xDLElBQUlDLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ3BCLEtBQUQsRUFBVztBQUM3QixTQUFPO0FBQ0hVLFFBQUksRUFBV1YsS0FBSyxDQUFDcUIsS0FEbEI7QUFFSHVCLGlCQUFhLEVBQUU1QyxLQUFLLENBQUNzQjtBQUZsQixHQUFQO0FBSUgsQ0FMRDs7QUFNZUMsMEhBQU8sQ0FBQ0gsZUFBRCxDQUFQLENBQXlCZ0QsbUJBQXpCLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzVEE7O0lBRXFCMkIsVzs7Ozs7Ozs7Ozs7Ozs2QkFFUjtBQUVMLDBCQUNJO0FBQUssVUFBRSxFQUFDLGlCQUFSO0FBQTBCLGlCQUFTLEVBQUM7QUFBcEMsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsOEtBREosZUFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFFSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFHLGlCQUFTLEVBQUMsNkJBQWI7QUFBMkMsWUFBSSxFQUFDLEdBQWhEO0FBQW9ELFdBQUcsRUFBQztBQUF4RCwwQ0FESixDQUZKLENBRkosQ0FESjtBQVdIOzs7O0VBZm9DNUUsK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHpDO0FBQ0E7QUFDQTtBQUNBOztJQUdNNkUsZTs7Ozs7QUFDRiwyQkFBWWpHLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxVQUluQmtHLFdBSm1CLEdBSUwsWUFBTTtBQUFBLHdCQUVhLE1BQUtsRyxLQUZsQjtBQUFBLFVBRVZkLFFBRlUsZUFFVkEsUUFGVTtBQUFBLFVBRUFxQyxRQUZBLGVBRUFBLFFBRkE7O0FBSWhCLFVBQUcsQ0FBQ3JDLFFBQVEsQ0FBQ2lILEtBQWIsRUFBbUI7QUFDZmxELHFEQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QkMsS0FBekIsQ0FBK0I7QUFDM0JDLHFCQUFXLEVBQUUsS0FEYztBQUUzQkMsb0JBQVUsRUFBRSxLQUZlO0FBRzNCQyxtQkFBUyxFQUFFO0FBSGdCLFNBQS9CO0FBS0EsZUFBTyxLQUFQO0FBQ0g7O0FBRUQsVUFBSStDLGlCQUFpQixHQUFHN0UsUUFBUSxDQUFDaUMsSUFBVCxDQUFjLFVBQUFDLE9BQU87QUFBQSxlQUFJQSxPQUFPLENBQUNDLFFBQVo7QUFBQSxPQUFyQixDQUF4QjtBQUNBLFVBQUkyQyxVQUFVLEdBQUdELGlCQUFpQixDQUFDMUksSUFBbkM7QUFDQSxVQUFJNEIsT0FBTyxHQUFHSixRQUFRLENBQUN3QyxJQUFULENBQWM4QixJQUFkLENBQW1CLFVBQUFsRSxPQUFPO0FBQUEsZUFBSUEsT0FBTyxDQUFDZ0gsV0FBUixJQUF1QkQsVUFBVSxDQUFDMUgsRUFBbEMsSUFBd0NXLE9BQU8sQ0FBQ2lILFNBQVIsSUFBcUJGLFVBQVUsQ0FBQzFILEVBQTVFO0FBQUEsT0FBMUIsQ0FBZDs7QUFJQSxVQUFJLENBQUNXLE9BQUwsRUFBYztBQUVWMkQscURBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCQyxLQUF0QixDQUE0QjtBQUN4QkMscUJBQVcsRUFBRSxLQURXO0FBRXhCQyxvQkFBVSxFQUFFLEtBRlk7QUFHeEJDLG1CQUFTLEVBQUU7QUFIYSxTQUE1QjtBQUtBLGVBQU8sS0FBUDtBQUNIOztBQTNCZSxVQTZCVlMsTUE3QlUsR0E2QmlDeEUsT0E3QmpDLENBNkJWd0UsTUE3QlU7QUFBQSxVQTZCRkQsYUE3QkUsR0E2QmlDdkUsT0E3QmpDLENBNkJGdUUsYUE3QkU7QUFBQSxVQTZCYUUsZUE3QmIsR0E2QmlDekUsT0E3QmpDLENBNkJheUUsZUE3QmI7O0FBOEJoQixVQUFJRixhQUFhLElBQUlFLGVBQWpCLElBQW9DLENBQUNELE1BQXpDLEVBQWlEO0FBRTdDYixxREFBQyxDQUFDLE1BQU0zRCxPQUFPLENBQUNYLEVBQWQsR0FBbUIsb0JBQXBCLENBQUQsQ0FBMkN1RSxLQUEzQyxDQUFpRDtBQUM3Q0MscUJBQVcsRUFBRSxLQURnQztBQUU3Q0Msb0JBQVUsRUFBRSxLQUZpQztBQUc3Q0MsbUJBQVMsRUFBRTtBQUhrQyxTQUFqRDtBQUtILE9BUEQsTUFPTSxJQUFJLENBQUNRLGFBQUQsSUFBa0IsQ0FBQ0UsZUFBdkIsRUFBd0M7QUFFMUNkLHFEQUFDLENBQUMsTUFBTTNELE9BQU8sQ0FBQ1gsRUFBZCxHQUFtQixvQkFBcEIsQ0FBRCxDQUEyQ3VFLEtBQTNDLENBQWlEO0FBQzdDQyxxQkFBVyxFQUFFLEtBRGdDO0FBRTdDQyxvQkFBVSxFQUFFLEtBRmlDO0FBRzdDQyxtQkFBUyxFQUFFO0FBSGtDLFNBQWpEO0FBS0gsT0FQSyxNQU9DLElBQUtRLGFBQWEsSUFBSUUsZUFBakIsSUFBb0NELE1BQXpDLEVBQWlEO0FBQ3BENUcsZUFBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVo7QUFDQThGLHFEQUFDLENBQUMsTUFBTTNELE9BQU8sQ0FBQ1gsRUFBZCxHQUFrQixtQkFBbkIsQ0FBRCxDQUF5Q3VFLEtBQXpDLENBQStDO0FBQzNDQyxxQkFBVyxFQUFFLEtBRDhCO0FBRTNDQyxvQkFBVSxFQUFFLEtBRitCO0FBRzNDQyxtQkFBUyxFQUFFO0FBSGdDLFNBQS9DO0FBS0g7QUFDSixLQXhEa0I7O0FBQUE7QUFFbEI7Ozs7NkJBeURRO0FBRUwsMEJBQ0k7QUFDSSxpQkFBUyxFQUFDLHdDQURkO0FBRUksZUFBTyxFQUFHLEtBQUs2QztBQUZuQixRQURKO0FBTUg7Ozs7RUFwRXlCOUUsK0M7O0FBc0U5QixJQUFJQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNwQixLQUFELEVBQVc7QUFDN0IsU0FBTztBQUNIVSxRQUFJLEVBQU1WLEtBQUssQ0FBQ3FCLEtBRGI7QUFFSHBDLFlBQVEsRUFBRWUsS0FBSyxDQUFDWCxPQUZiO0FBR0hpQyxZQUFRLEVBQUV0QixLQUFLLENBQUNzQjtBQUhiLEdBQVA7QUFLSCxDQU5EOztBQU9lQywwSEFBTyxDQUFDSCxlQUFELENBQVAsQ0FBeUI0RSxlQUF6QixDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25GQTtBQUNBOztJQUVNTyxLOzs7Ozs7Ozs7Ozs7OztvSEFFRkMsZ0IsR0FBbUIsVUFBQUMsS0FBSyxFQUFJO0FBQ3hCLFVBQUlDLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLENBQVo7O0FBQ0EsVUFBSUYsS0FBSixFQUFXO0FBQ1AsWUFBSUcsT0FBTyxHQUFHSCxLQUFLLENBQUNJLEtBQXBCLENBRE8sQ0FFUDs7QUFDQUQsZUFBTyxHQUFHQSxPQUFPLEdBQUcsTUFBSzlHLEtBQUwsQ0FBV2dILE1BQS9CO0FBQ0FMLGFBQUssQ0FBQ0ksS0FBTixHQUFjRCxPQUFkO0FBQ0g7QUFDSixLOzs7Ozs2QkFFUTtBQUVMLDBCQUNJO0FBQUcsaUJBQVMsRUFBQyxpQkFBYjtBQUErQixlQUFPLEVBQUUsS0FBS0w7QUFBN0MsU0FBZ0UsS0FBS3pHLEtBQUwsQ0FBV2dILE1BQTNFLENBREo7QUFHSDs7OztFQWpCZTVGLCtDOztBQW1CTG9GLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBOztJQUNNUyxROzs7Ozs7Ozs7Ozs7O3lDQUVlO0FBQ25CO0FBQ00sVUFBSUMsT0FBTyxHQUFHTixRQUFRLENBQUNPLHNCQUFULENBQWdDLHdCQUFoQyxDQUFkOztBQUNBLFVBQUdELE9BQU8sQ0FBQ0UsTUFBWCxFQUFrQjtBQUNkLFlBQUlDLFFBQVEsR0FBR1QsUUFBUSxDQUFDTyxzQkFBVCxDQUFnQyx3QkFBaEMsQ0FBZjs7QUFDQSxZQUFHRSxRQUFRLENBQUNELE1BQVosRUFBbUI7QUFDZkYsaUJBQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0ksS0FBWCxDQUFpQkMsTUFBakIsR0FBMEJGLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWUcsWUFBWixHQUEyQixJQUFyRDtBQUNIO0FBQ0o7QUFDUDs7OzZCQUVRO0FBRVJ0SyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjtBQUZRLFVBR0ZZLFFBSEUsR0FHVyxLQUFLaUMsS0FIaEIsQ0FHRmpDLFFBSEU7QUFJUixVQUFJd0YsYUFBYSxHQUFHeEYsUUFBUSxDQUFDeUYsSUFBVCxDQUFjLFVBQUFDLE9BQU87QUFBQSxlQUFJQSxPQUFPLENBQUNDLFFBQVo7QUFBQSxPQUFyQixDQUFwQjs7QUFFQSxVQUFJLENBQUNILGFBQUwsRUFBb0I7QUFDbkIsZUFBTyxJQUFQO0FBQ0E7O0FBQ0QsVUFBSWtFLFVBQVUsR0FBSWxFLGFBQWEsQ0FBQzdGLElBQWQsQ0FBbUJnSyxNQUFuQixHQUE0QixPQUE1QixHQUFzQyxPQUF4RDtBQUNBLFVBQUlDLFFBQVEsR0FBRyxJQUFmOztBQUNBLFVBQUksT0FBT0MsaUJBQVAsSUFBNEIsV0FBNUIsSUFBMkMsT0FBT0MsbUJBQVAsSUFBOEIsV0FBN0UsRUFBMEY7QUFDekYsWUFBSXRFLGFBQWEsQ0FBQzdGLElBQWQsQ0FBbUIrRSxPQUFuQixJQUE4QjVDLCtDQUFNLENBQUM2QyxTQUFQLENBQWlCQyxNQUFuRCxFQUEyRDtBQUMxRGdGLGtCQUFRLEdBQUdDLGlCQUFpQixHQUFHLEdBQXBCLEdBQTBCckUsYUFBYSxDQUFDN0YsSUFBZCxDQUFtQmlCLEVBQXhEO0FBQ0E7O0FBQ0QsWUFBSTRFLGFBQWEsQ0FBQzdGLElBQWQsQ0FBbUIrRSxPQUFuQixJQUE4QjVDLCtDQUFNLENBQUM2QyxTQUFQLENBQWlCRSxRQUFuRCxFQUE2RDtBQUM1RCtFLGtCQUFRLEdBQUdFLG1CQUFtQixHQUFHLEdBQXRCLEdBQTRCdEUsYUFBYSxDQUFDN0YsSUFBZCxDQUFtQmlCLEVBQTFEO0FBQ0E7QUFDRDs7QUFFRCwwQkFDQztBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFFQztBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDQztBQUFRLGlCQUFTLEVBQUM7QUFBbEIsU0FFRWdKLFFBQVEsZ0JBQ1I7QUFBRyxZQUFJLEVBQUVBO0FBQVQsc0JBQ0M7QUFBSyxXQUFHLEVBQUU5SCwrQ0FBTSxDQUFDaUksVUFBUCxDQUFrQkMsR0FBbEIsR0FBd0J4RSxhQUFhLENBQUM3RixJQUFkLENBQW1Cc0ssTUFBckQ7QUFBNkQsV0FBRyxFQUFDO0FBQWpFLFFBREQsQ0FEUSxnQkFLUjtBQUFLLFdBQUcsRUFBRW5JLCtDQUFNLENBQUNpSSxVQUFQLENBQWtCQyxHQUFsQixHQUF3QnhFLGFBQWEsQ0FBQzdGLElBQWQsQ0FBbUJzSyxNQUFyRDtBQUE2RCxXQUFHLEVBQUM7QUFBakUsUUFQRixDQURELGVBWUM7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FFRUwsUUFBUSxnQkFDUjtBQUFHLFlBQUksRUFBRUEsUUFBVDtBQUFtQixpQkFBUyxFQUFDO0FBQTdCLFNBQXFDcEUsYUFBYSxDQUFDN0YsSUFBZCxDQUFtQnVLLFVBQW5CLEdBQWdDLEdBQWhDLEdBQXFDMUUsYUFBYSxDQUFDN0YsSUFBZCxDQUFtQndLLFNBQTdGLENBRFEsZ0JBR1I7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLFNBQXdCM0UsYUFBYSxDQUFDN0YsSUFBZCxDQUFtQnVLLFVBQW5CLEdBQWdDLEdBQWhDLEdBQXFDMUUsYUFBYSxDQUFDN0YsSUFBZCxDQUFtQndLLFNBQWhGLENBTEYsZUFRQztBQUFNLGlCQUFTLEVBQUUsQ0FBQzNFLGFBQWEsQ0FBQzdGLElBQWQsQ0FBbUJnSyxNQUFuQixHQUE0QixZQUE1QixHQUEyQyxFQUE1QyxJQUFrRDtBQUFuRSxTQUFvRkQsVUFBcEYsQ0FSRCxDQVpELENBRkQsQ0FERDtBQTRCQTs7OztFQTdEcUJyRywrQzs7QUErRHZCLElBQUlDLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ3BCLEtBQUQsRUFBVztBQUNoQyxTQUFPO0FBQ05sQyxZQUFRLEVBQUVrQyxLQUFLLENBQUNzQixRQURWO0FBRU5ELFNBQUssRUFBS3JCLEtBQUssQ0FBQ3FCLEtBRlY7QUFHTjVELFFBQUksRUFBTXVDLEtBQUssQ0FBQ3FCLEtBSFY7QUFJTmpCLFVBQU0sRUFBSUosS0FBSyxDQUFDSTtBQUpWLEdBQVA7QUFNQSxDQVBEOztBQVFlbUIsMEhBQU8sQ0FBQ0gsZUFBRCxDQUFQLENBQXlCNEYsUUFBekIsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7O0lBR01rQixhOzs7OztBQUNGLHlCQUFZbkksS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLFVBb0RuQm9JLGlCQXBEbUIsR0FvREMsVUFBVWpLLE9BQVYsRUFBbUJtSixLQUFuQixFQUEwQmUsVUFBMUIsRUFBc0M7QUFDdERuTCxhQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFZ0IsZUFBTyxFQUFQQSxPQUFGO0FBQVdtSixhQUFLLEVBQUxBLEtBQVg7QUFBa0JlLGtCQUFVLEVBQVZBO0FBQWxCLE9BQVo7O0FBQ0EsVUFBSSxDQUFDbEssT0FBTCxFQUFjO0FBQ1YsWUFBSW1KLEtBQUssSUFBSSxPQUFiLEVBQXNCO0FBQ2xCbkosaUJBQU8sR0FBR21KLEtBQVY7QUFDSCxTQUZELE1BRU87QUFDSCxpQkFBTyxLQUFQO0FBQ0g7QUFDSjs7QUFDRCxVQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNSLFlBQUlnQixTQUFTLEdBQUdDLHdEQUFNLENBQUNDLE1BQVAsQ0FBY0MsTUFBZCxDQUFxQixVQUFBQyxLQUFLO0FBQUEsaUJBQUlBLEtBQUssQ0FBQzFCLE1BQU4sSUFBZ0I3SSxPQUFPLENBQUN3SyxJQUFSLEVBQXBCO0FBQUEsU0FBMUIsQ0FBaEI7O0FBQ0EsWUFBSUwsU0FBUyxDQUFDbEIsTUFBZCxFQUFzQjtBQUNsQkUsZUFBSyxHQUFHLE9BQVI7QUFDSDtBQUNKOztBQUNELFVBQUksS0FBS3RILEtBQUwsQ0FBV3RDLElBQWYsRUFBcUI7QUFFakI7QUFDSSxZQUFFQSxJQUFGLEdBQVcsS0FBS3NDLEtBQWhCLENBQUV0QyxJQUFGO0FBQUEsWUFDQWtMLFFBREEsR0FDVyxJQURYO0FBRUosWUFBSUMsSUFBSSxHQUFHLENBQUUsSUFBSUMsSUFBSixFQUFELENBQVdDLE9BQVgsS0FBdUIsSUFBSUQsSUFBSixDQUFTcEwsSUFBSSxDQUFDdUQsTUFBTCxDQUFZK0gsTUFBckIsRUFBNkJELE9BQTdCLEVBQXhCLElBQWtFLElBQTdFOztBQUNBLFlBQUlGLElBQUksSUFBSW5MLElBQUksQ0FBQ3VELE1BQUwsQ0FBWWdJLE1BQXhCLEVBQWdDO0FBQzVCO0FBQ0FDLGdCQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCO0FBQ0g7O0FBQ0QsWUFBSUMsb0JBQW9CLEdBQUdsTCxPQUEzQjtBQUNBLFlBQUltTCxXQUFXLEdBQUcsS0FBS3RKLEtBQUwsQ0FBV3VCLFFBQVgsQ0FBb0JpQyxJQUFwQixDQUF5QixVQUFBQyxPQUFPLEVBQUk7QUFDbEQsaUJBQU9BLE9BQU8sQ0FBQ0MsUUFBUixJQUFvQixJQUEzQjtBQUNILFNBRmlCLENBQWxCO0FBR0EsWUFBSTZGLFNBQVMsR0FBS0QsV0FBVyxDQUFDM0ssRUFBOUI7QUFBQSxZQUNJdUMsV0FBVyxHQUFHeEQsSUFBSSxDQUFDdUQsTUFBTCxDQUFZQyxXQUQ5QjtBQUFBLFlBRUlzSSxNQUFNLEdBQVEsS0FBS3hKLEtBQUwsQ0FBV0ssTUFGN0I7QUFHQW9KLHdGQUFvQixDQUFDSixvQkFBRCxFQUF1Qi9CLEtBQXZCLEVBQThCZSxVQUE5QixFQUEwQ2tCLFNBQTFDLEVBQ2hCckksV0FEZ0IsRUFDSHNJLE1BREcsRUFDS1osUUFETCxDQUFwQjtBQUVIO0FBQ0osS0F2RmtCOztBQUFBLFVBeUZuQmMscUJBekZtQixHQXlGSyxZQUFNO0FBQzFCLFVBQUl2TCxPQUFPLEdBQUcsTUFBZDtBQUNBLFVBQUltSixLQUFLLEdBQUcsT0FBWjs7QUFDQSxZQUFLYyxpQkFBTCxDQUF1QmpLLE9BQXZCLEVBQWdDbUosS0FBaEMsRUFBdUMsSUFBdkM7QUFDSCxLQTdGa0I7O0FBQUEsVUE4Rm5CcUMsdUJBOUZtQixHQThGTyxZQUFNO0FBQzVCLFVBQUlyQyxLQUFLLEdBQUcsRUFBWjtBQUNBLFVBQUlzQyxhQUFhLEdBQUcsRUFBcEI7QUFFQSxVQUFJQyxTQUFTLEdBQUdqRCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUJBQXhCLENBQWhCO0FBQ0EsVUFBSWlELE1BQU0sR0FBTUQsU0FBUyxDQUFDMUMsc0JBQVYsQ0FBaUMsY0FBakMsQ0FBaEI7QUFDQSxVQUFJaEosT0FBTyxHQUFLeUksUUFBUSxDQUFDQyxjQUFULENBQXdCLGVBQXhCLEVBQXlDRSxLQUF6RDs7QUFFQSxVQUFJK0MsTUFBTSxDQUFDMUMsTUFBUCxJQUFpQixDQUFDakosT0FBdEIsRUFBK0I7QUFDM0JBLGVBQU8sR0FBRyxPQUFWO0FBQ0g7O0FBRUQsVUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDVixlQUFPLEtBQVA7QUFDSDs7QUFDRHlJLGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixFQUF5Q0UsS0FBekMsR0FBaUQsRUFBakQ7O0FBRUEsVUFBSStDLE1BQU0sQ0FBQzFDLE1BQVgsRUFBbUI7QUFDZkUsYUFBSyxHQUFHLE9BQVI7QUFFQXNDLHFCQUFhLEdBQUcsRUFBaEI7O0FBQ0EsYUFBSyxJQUFJRyxnQkFBZ0IsR0FBRyxDQUE1QixFQUErQkEsZ0JBQWdCLEdBQUdELE1BQU0sQ0FBQzFDLE1BQXpELEVBQWlFMkMsZ0JBQWdCLEVBQWpGLEVBQXFGO0FBQ2pGLGNBQUcsQ0FBQ0QsTUFBTSxDQUFDQyxnQkFBRCxDQUFOLENBQXlCQyxTQUF6QixDQUFtQ0MsUUFBbkMsQ0FBNEMsYUFBNUMsQ0FBSixFQUErRDtBQUMzREwseUJBQWEsQ0FBQ00sSUFBZCxDQUNJO0FBQ0lDLGlCQUFHLEVBQUdMLE1BQU0sQ0FBQ0MsZ0JBQUQsQ0FBTixDQUF5QkssWUFBekIsQ0FBc0MsVUFBdEMsQ0FEVjtBQUVJaE4sa0JBQUksRUFBRTBNLE1BQU0sQ0FBQ0MsZ0JBQUQsQ0FBTixDQUF5QkssWUFBekIsQ0FBc0MsV0FBdEMsQ0FGVjtBQUdJQyxrQkFBSSxFQUFHLElBQUl2QixJQUFKLEVBQUQsQ0FBV0MsT0FBWDtBQUhWLGFBREo7QUFPSDtBQUNKO0FBQ0o7O0FBQ0RuQyxjQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUJBQXhCLEVBQTJDeUQsU0FBM0MsR0FBdUQsRUFBdkQ7O0FBQ0EsWUFBS2xDLGlCQUFMLENBQXVCakssT0FBdkIsRUFBZ0NtSixLQUFoQyxFQUF1Q3NDLGFBQXZDO0FBQ0gsS0FqSWtCOztBQUFBLFVBbUluQlcscUJBbkltQixHQW1JSyxVQUFDN0QsS0FBRCxFQUFXO0FBRS9CLFVBQUlBLEtBQUssQ0FBQzhELE9BQU4sSUFBaUIsRUFBakIsSUFBdUIsQ0FBQzlELEtBQUssQ0FBQytELFFBQWxDLEVBQTRDO0FBQ3hDLFlBQUluRCxLQUFLLEdBQUcsRUFBWjtBQUNBLFlBQUlzQyxhQUFhLEdBQUcsRUFBcEI7QUFDQSxZQUFJQyxTQUFTLEdBQUdqRCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUJBQXhCLENBQWhCO0FBQ0EsWUFBSWlELE1BQU0sR0FBR0QsU0FBUyxDQUFDMUMsc0JBQVYsQ0FBaUMsY0FBakMsQ0FBYjs7QUFDQSxZQUFJMkMsTUFBTSxDQUFDMUMsTUFBWCxFQUFtQjtBQUNmRSxlQUFLLEdBQUcsT0FBUjtBQUNBc0MsdUJBQWEsR0FBRyxFQUFoQjs7QUFDQSxlQUFLLElBQUlHLGdCQUFnQixHQUFHLENBQTVCLEVBQStCQSxnQkFBZ0IsR0FBR0QsTUFBTSxDQUFDMUMsTUFBekQsRUFBaUUyQyxnQkFBZ0IsRUFBakYsRUFBcUY7QUFDakYsZ0JBQUcsQ0FBQ0QsTUFBTSxDQUFDQyxnQkFBRCxDQUFOLENBQXlCQyxTQUF6QixDQUFtQ0MsUUFBbkMsQ0FBNEMsYUFBNUMsQ0FBSixFQUErRDtBQUMzREwsMkJBQWEsQ0FBQ00sSUFBZCxDQUNJO0FBQ0lDLG1CQUFHLEVBQUdMLE1BQU0sQ0FBQ0MsZ0JBQUQsQ0FBTixDQUF5QkssWUFBekIsQ0FBc0MsVUFBdEMsQ0FEVjtBQUVJaE4sb0JBQUksRUFBRTBNLE1BQU0sQ0FBQ0MsZ0JBQUQsQ0FBTixDQUF5QkssWUFBekIsQ0FBc0MsV0FBdEMsQ0FGVjtBQUdJQyxvQkFBSSxFQUFHLElBQUl2QixJQUFKLEVBQUQsQ0FBV0MsT0FBWDtBQUhWLGVBREo7QUFPSDtBQUNKO0FBQ0o7O0FBQ0RuQyxnQkFBUSxDQUFDQyxjQUFULENBQXdCLGlCQUF4QixFQUEyQ3lELFNBQTNDLEdBQXVELEVBQXZEOztBQUNBLGNBQUtsQyxpQkFBTCxDQUF1QjFCLEtBQUssQ0FBQ2dFLE1BQU4sQ0FBYTNELEtBQXBDLEVBQTJDTyxLQUEzQyxFQUFrRHNDLGFBQWxEOztBQUNBLGNBQUtoSixRQUFMLENBQWM7QUFBRStKLGtCQUFRLEVBQUU7QUFBWixTQUFkOztBQUNBL0QsZ0JBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixFQUF5Q0UsS0FBekMsR0FBaUQsRUFBakQ7QUFDQSxlQUFPLEtBQVA7QUFDSDs7QUFDRCxVQUFJTCxLQUFLLENBQUM4RCxPQUFOLElBQWlCLEVBQXJCLEVBQXlCO0FBQ3JCLFlBQUk3RCxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixDQUFaOztBQUNBLFlBQUlGLEtBQUosRUFBVztBQUNQLGNBQUlHLE9BQU8sR0FBR0gsS0FBSyxDQUFDSSxLQUFwQixDQURPLENBRVA7O0FBQ0EsY0FBSTZELEtBQUssR0FBRzlELE9BQU8sQ0FBQytELEtBQVIsQ0FBYyxHQUFkLENBQVo7QUFDQSxjQUFJQyxXQUFXLEdBQUdGLEtBQUssQ0FBQ0EsS0FBSyxDQUFDeEQsTUFBTixHQUFlLENBQWhCLENBQXZCLENBSk8sQ0FLUDs7QUFDQSxjQUFJMkQsVUFBVSxHQUFHeEMsd0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxNQUFkLENBQXFCLFVBQUF1QyxJQUFJO0FBQUEsbUJBQUlBLElBQUksQ0FBQ0MsSUFBTCxJQUFhSCxXQUFqQjtBQUFBLFdBQXpCLENBQWpCOztBQUNBLGNBQUlDLFVBQVUsQ0FBQzNELE1BQWYsRUFBdUI7QUFDbkI7QUFDQSxnQkFBSThELFNBQVMsR0FBR3BFLE9BQU8sQ0FBQ3FFLFdBQVIsQ0FBb0IsR0FBcEIsQ0FBaEI7QUFDQXhFLGlCQUFLLENBQUNJLEtBQU4sR0FBY0QsT0FBTyxDQUFDc0UsU0FBUixDQUFrQixDQUFsQixFQUFxQkYsU0FBckIsSUFBa0MsR0FBbEMsR0FBd0NILFVBQVUsQ0FBQyxDQUFELENBQVYsQ0FBYy9ELE1BQXBFO0FBQ0g7QUFDSjtBQUNKO0FBQ0osS0EvS2tCOztBQUFBLFVBaUxuQnFFLG1CQWpMbUIsR0FpTEcsWUFBTTtBQUN4QixVQUFJLE1BQUtwTCxLQUFMLENBQVcwSyxRQUFmLEVBQXlCO0FBQ3JCLGNBQUsvSixRQUFMLENBQWM7QUFBRStKLGtCQUFRLEVBQUU7QUFBWixTQUFkOztBQUNBL0QsZ0JBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixFQUF5Q0UsS0FBekMsR0FBaUQsRUFBakQ7QUFDSDtBQUNKLEtBdExrQjs7QUFBQSxVQXdMbkJ1RSxpQkF4TG1CLEdBd0xDLFVBQVVDLFVBQVYsRUFBc0I7QUFDdEM7QUFDQUEsZ0JBQVUsQ0FBQ0MsS0FBWCxHQUFtQixHQUFuQixDQUZzQyxDQUd0Qzs7QUFDQSxVQUFJQyxZQUFZLEdBQUc3RSxRQUFRLENBQUM4RSxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQ0FELGtCQUFZLENBQUNFLFNBQWIsR0FBeUIsMEJBQXpCOztBQUNBRixrQkFBWSxDQUFDRyxPQUFiLEdBQXVCLFlBQVk7QUFDL0IsYUFBS0MsTUFBTDtBQUNILE9BRkQ7O0FBR0FKLGtCQUFZLENBQUNLLFdBQWIsQ0FBeUJQLFVBQXpCO0FBQ0EzRSxjQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUJBQXhCLEVBQTJDaUYsV0FBM0MsQ0FBdURMLFlBQXZEO0FBQ0gsS0FuTWtCOztBQUFBLFVBb01uQk0sYUFwTW1CLEdBb01ILFVBQUFDLElBQUksRUFBSTtBQUVwQjlPLGFBQU8sQ0FBQ0MsR0FBUixDQUFhNk8sSUFBYjtBQUNBLFVBQUlDLFFBQVEsR0FBRyxNQUFLWCxpQkFBcEIsQ0FIb0IsQ0FJcEI7O0FBQ0FZLGtGQUFnQixDQUFDRixJQUFELENBQWhCLENBTG9CLENBTXBCOztBQUNBLFVBQUlHLEdBQUcsR0FBRyxJQUFJQyxLQUFKLEVBQVYsQ0FQb0IsQ0FRcEI7O0FBQ0FELFNBQUcsQ0FBQ0UsTUFBSixHQUFhLFlBQVk7QUFDckI7QUFDQUosZ0JBQVEsQ0FBQyxJQUFELENBQVI7QUFDSCxPQUhELENBVG9CLENBYXBCOzs7QUFDQSxVQUFJSyxNQUFNLEdBQUdwRCxNQUFNLENBQUNuQixHQUFQLElBQWNtQixNQUFNLENBQUNxRCxTQUFsQyxDQWRvQixDQWVwQjtBQUNBOztBQUNBLFVBQUk7QUFDQUosV0FBRyxDQUFDSyxHQUFKLEdBQVVGLE1BQU0sQ0FBQ0csZUFBUCxDQUF1QlQsSUFBdkIsQ0FBVjtBQUNILE9BRkQsQ0FFRSxPQUFPVSxLQUFQLEVBQWM7QUFDWnhQLGVBQU8sQ0FBQ0MsR0FBUixDQUFZdVAsS0FBWjtBQUNIO0FBQ0osS0ExTmtCOztBQUFBLFVBMk5uQkMsWUEzTm1CLEdBMk5KLFVBQUFYLElBQUksRUFBSTtBQUVuQixVQUFJQyxRQUFRLEdBQUcsTUFBS1gsaUJBQXBCLENBRm1CLENBR25COztBQUNBWSxrRkFBZ0IsQ0FBQ0YsSUFBRCxDQUFoQixDQUptQixDQUtuQjs7QUFDQSxVQUFJRyxHQUFHLEdBQUcsSUFBSUMsS0FBSixFQUFWLENBTm1CLENBT25COztBQUNBRCxTQUFHLENBQUNFLE1BQUosR0FBYSxZQUFZO0FBQ3JCO0FBQ0FKLGdCQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0gsT0FIRCxDQVJtQixDQVluQjs7O0FBQ0EsVUFBSUssTUFBTSxHQUFHcEQsTUFBTSxDQUFDbkIsR0FBUCxJQUFjbUIsTUFBTSxDQUFDcUQsU0FBbEMsQ0FibUIsQ0FjbkI7QUFDQTs7QUFDQSxVQUFJO0FBQ0FKLFdBQUcsQ0FBQ0ssR0FBSixHQUFVakUsd0RBQU0sQ0FBQ1QsVUFBUCxDQUFrQkMsR0FBbEIsR0FBd0IsbUJBQWxDO0FBQ0gsT0FGRCxDQUVFLE9BQU8yRSxLQUFQLEVBQWM7QUFDWnhQLGVBQU8sQ0FBQ0MsR0FBUixDQUFZdVAsS0FBWjtBQUNIO0FBQ0osS0FoUGtCOztBQUFBLFVBaVBuQkUsZ0NBalBtQixHQWlQZ0IsVUFBQ0MsVUFBRCxFQUFnQjtBQUMvQyxVQUFJWixRQUFRLEdBQUcsTUFBS1gsaUJBQXBCOztBQUNBLFVBQUksQ0FBQ3VCLFVBQVUsQ0FBQ0MsYUFBaEIsRUFBK0I7QUFDM0IsWUFBSSxPQUFPYixRQUFQLElBQW1CLFVBQXZCLEVBQW1DO0FBQy9CO0FBQ0FBLGtCQUFRLENBQUNjLFNBQUQsQ0FBUjtBQUNIO0FBQ0o7O0FBQ0QsVUFBSUMsS0FBSyxHQUFHSCxVQUFVLENBQUNDLGFBQVgsQ0FBeUJFLEtBQXJDOztBQUNBLFVBQUksQ0FBQ0EsS0FBTCxFQUFZO0FBQ1IsWUFBSSxPQUFPZixRQUFQLElBQW1CLFVBQXZCLEVBQW1DO0FBQy9CO0FBQ0FBLGtCQUFRLENBQUNjLFNBQUQsQ0FBUjtBQUNIO0FBQ0o7O0FBQ0QsV0FBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxLQUFLLENBQUM1RixNQUExQixFQUFrQzZGLENBQUMsRUFBbkMsRUFBdUM7QUFDbkM7QUFDQSxZQUFJRCxLQUFLLENBQUNDLENBQUQsQ0FBTCxDQUFTN1AsSUFBVCxDQUFjOFAsT0FBZCxDQUFzQixPQUF0QixLQUFrQyxDQUFDLENBQXZDLEVBQTBDO0FBRTFDLFlBQUlsQixJQUFJLEdBQUdnQixLQUFLLENBQUNDLENBQUQsQ0FBTCxDQUFTRSxTQUFULEVBQVg7O0FBQ0EsY0FBS3BCLGFBQUwsQ0FBb0JDLElBQXBCO0FBQ0g7QUFDSixLQXZRa0I7O0FBQUEsVUF3UW5Cb0IsYUF4UW1CLEdBd1FILFVBQUMxRyxLQUFELEVBQVc7QUFDdkIsVUFBSTJHLE1BQU0sR0FBR3pHLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFiOztBQUNBLFVBQUl3RyxNQUFKLEVBQVk7QUFDUkEsY0FBTSxDQUFDckQsU0FBUCxDQUFpQnNELEdBQWpCLENBQXFCLFdBQXJCO0FBQ0g7QUFDSixLQTdRa0I7O0FBQUEsVUE4UW5CQyxtQkE5UW1CLEdBOFFHLFlBQU07QUFFeEI7QUFDQTNHLGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixxQkFBeEIsRUFBK0NtRCxTQUEvQyxDQUF5RHNELEdBQXpELENBQTZELHFCQUE3RCxFQUh3QixDQUt4Qjs7QUFMd0IsVUFNbEI1UCxJQU5rQixHQU1ULE1BQUtzQyxLQU5JLENBTWxCdEMsSUFOa0I7O0FBT3hCLFVBQUk0TCxXQUFXLEdBQUcsTUFBS3RKLEtBQUwsQ0FBV3VCLFFBQVgsQ0FBb0JpQyxJQUFwQixDQUF5QixVQUFBQyxPQUFPLEVBQUk7QUFDbEQsZUFBT0EsT0FBTyxDQUFDQyxRQUFSLElBQW9CLElBQTNCO0FBQ0gsT0FGaUIsQ0FBbEI7O0FBR0EsVUFBSTZGLFNBQVMsR0FBS0QsV0FBVyxDQUFDM0ssRUFBOUI7QUFBQSxVQUNJSCxXQUFXLEdBQUc4SyxXQUFXLENBQUM5SyxXQUQ5QjtBQUFBLFVBRUkwQyxXQUFXLEdBQUd4RCxJQUFJLENBQUN1RCxNQUFMLENBQVlDLFdBRjlCO0FBSUFzTSw0RkFBMEIsQ0FBRWpFLFNBQUYsRUFBYS9LLFdBQWIsRUFBMEIwQyxXQUExQixDQUExQjtBQUNILEtBN1JrQjs7QUFBQSxVQThSbkJ1TSxVQTlSbUIsR0E4Uk4sWUFBTTtBQUNmN0csY0FBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLEVBQXNDNkcsS0FBdEM7QUFDSCxLQWhTa0I7O0FBQUEsVUFrU25CQyxRQWxTbUIsR0FrU1IsWUFBTTtBQUdiLFVBQUkzQixJQUFJLEdBQUdwRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0MrRyxLQUF0QyxDQUE0QyxDQUE1QyxDQUFYO0FBQ0EsVUFBSUMsTUFBTSxHQUFHLDRDQUFiOztBQUNBLFVBQUdBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZOUIsSUFBSSxDQUFDK0IsSUFBakIsQ0FBSCxFQUEwQjtBQUV0QixjQUFLaEMsYUFBTCxDQUFvQkMsSUFBcEI7O0FBQ0EsZUFBTyxLQUFQO0FBQ0g7O0FBQ0QsVUFBSTZCLE1BQU0sR0FBRywyQ0FBYjs7QUFDQSxVQUFHQSxNQUFNLENBQUNDLElBQVAsQ0FBWTlCLElBQUksQ0FBQytCLElBQWpCLENBQUgsRUFBMEI7QUFFdEIsY0FBS3BCLFlBQUwsQ0FBbUJYLElBQW5COztBQUNBLGVBQU8sS0FBUDtBQUNIOztBQUNEZ0MsV0FBSyxDQUFDLCtCQUFELENBQUw7QUFDSCxLQW5Ua0I7O0FBR2YsVUFBSy9OLEtBQUwsR0FBYTtBQUFFMEssY0FBUSxFQUFFO0FBQVosS0FBYjtBQUNBLFVBQUt2QyxpQkFBTCxHQUF5QixNQUFLQSxpQkFBTCxDQUF1QjZGLElBQXZCLCtCQUF6QjtBQUplO0FBS2xCOzs7O3dDQUVtQjtBQUNoQixVQUFJQyxHQUFHLEdBQUcsSUFBVjtBQUNBaEYsWUFBTSxDQUFDaUYsZ0JBQVAsQ0FDSSxPQURKLEVBRUksVUFBVXpILEtBQVYsRUFBaUI7QUFDYjtBQUNBd0gsV0FBRyxDQUFDdEIsZ0NBQUosQ0FBcUNsRyxLQUFyQztBQUNILE9BTEwsRUFNSSxLQU5KO0FBU0g7Ozt5Q0FFbUI7QUFBQSxVQUVWbkYsUUFGVSxHQUVHLEtBQUt2QixLQUZSLENBRVZ1QixRQUZVO0FBR2hCLFVBQUk2RSxpQkFBaUIsR0FBRzdFLFFBQVEsQ0FBQ2lDLElBQVQsQ0FBYyxVQUFBQyxPQUFPO0FBQUEsZUFBSUEsT0FBTyxDQUFDQyxRQUFaO0FBQUEsT0FBckIsQ0FBeEI7QUFFQSxVQUFJMkQsUUFBUSxHQUFHakIsaUJBQWlCLElBQUlBLGlCQUFpQixDQUFDakksT0FBdEQsQ0FMZ0IsQ0FPaEI7O0FBRUEsVUFBSWlRLFNBQVMsR0FBR3hILFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixxQkFBeEIsQ0FBaEI7QUFDQSxVQUFJd0gsU0FBUyxHQUFHekgsUUFBUSxDQUFDQyxjQUFULENBQXdCLHFCQUF4QixDQUFoQixDQVZnQixDQVdoQjs7QUFDQSxVQUFJd0gsU0FBUyxJQUFJRCxTQUFiLElBQTBCQSxTQUFTLENBQUNFLFlBQVYsSUFBMEJGLFNBQVMsQ0FBQzVHLFlBQWxFLEVBQStFO0FBQzNFK0csNEZBQXdCLENBQUNsSCxRQUFELEVBQVdqQixpQkFBWCxDQUF4QjtBQUNILE9BRkQsTUFFTSxJQUNGZ0ksU0FBUyxJQUNUQyxTQURBLElBRUFBLFNBQVMsQ0FBQ3JFLFNBQVYsQ0FBb0JDLFFBQXBCLENBQTZCLHFCQUE3QixDQUhFLEVBR2tEO0FBRWhEckQsZ0JBQVEsQ0FBQ0MsY0FBVCxDQUF3QixxQkFBeEIsRUFBK0MySCxTQUEvQyxHQUEyRDVILFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixxQkFBeEIsRUFBK0N5SCxZQUExRzs7QUFDQSxZQUFJckwsNkNBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCbUUsTUFBbEMsRUFBMEM7QUFDdENuRSx1REFBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJ3TCxHQUE5QixDQUFrQyxNQUFsQyxFQUEwQyxZQUFXO0FBRWpELGdCQUFHN0gsUUFBUSxDQUFDQyxjQUFULENBQXdCLHFCQUF4QixDQUFILEVBQWtEO0FBRTlDRCxzQkFBUSxDQUFDQyxjQUFULENBQXdCLHFCQUF4QixFQUErQzJILFNBQS9DLEdBQTJENUgsUUFBUSxDQUFDQyxjQUFULENBQXdCLHFCQUF4QixFQUErQ3lILFlBQTFHO0FBQ0g7QUFDSixXQU5EO0FBT0g7QUFFUjtBQUNKOzs7NkJBbVFRO0FBQ0wsVUFBSSxDQUFDLEtBQUt0TyxLQUFMLENBQVd0QyxJQUFaLElBQW9CLENBQUMsS0FBS3NDLEtBQUwsQ0FBVy9DLE1BQWhDLElBQTBDLENBQUMsS0FBSytDLEtBQUwsQ0FBV3VCLFFBQVgsQ0FBb0I2RixNQUFuRSxFQUEyRTtBQUN2RSxlQUFPLElBQVA7QUFDSDs7QUFISSxVQUlDN0YsUUFKRCxHQUljLEtBQUt2QixLQUpuQixDQUlDdUIsUUFKRDtBQUtMLFVBQUk2RSxpQkFBaUIsR0FBRzdFLFFBQVEsQ0FBQ2lDLElBQVQsQ0FBYyxVQUFBQyxPQUFPO0FBQUEsZUFBSUEsT0FBTyxDQUFDQyxRQUFaO0FBQUEsT0FBckIsQ0FBeEI7QUFFQSwwQkFDSTtBQUFLLFVBQUUsRUFBQyxxQkFBUjtBQUE4QixpQkFBUyxFQUFDO0FBQXhDLHNCQUNJLDJEQUFDLDhEQUFEO0FBQW1CLGNBQU0sRUFBRTBDO0FBQTNCLFFBREosZUFFSTtBQUFLLFVBQUUsRUFBQyxpQkFBUjtBQUEwQixpQkFBUyxFQUFDO0FBQXBDLFFBRkosZUFHSSwyREFBQyw0REFBRCxPQUhKLGVBSUk7QUFDSSxpQkFBUyxFQUFDLHdDQURkO0FBRUksZUFBTyxFQUFHLEtBQUtxSDtBQUZuQixRQUpKLGVBUUk7QUFBTyxVQUFFLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUMsTUFBNUI7QUFBbUMsaUJBQVMsRUFBQyxRQUE3QztBQUFzRCxjQUFNLEVBQUMseUNBQTdEO0FBQXVHLGdCQUFRLEVBQUcsS0FBS0U7QUFBdkgsUUFSSixlQVNJO0FBQ0ksaUJBQVMsRUFBQyx1Q0FEZDtBQUVJLGVBQU8sRUFBRSxLQUFLUDtBQUZsQixRQVRKLGVBYUk7QUFDSSxVQUFFLEVBQUMsZUFEUDtBQUVJLGlCQUFTLEVBQUUsS0FBSzdDLHFCQUZwQjtBQUdJLGVBQU8sRUFBRSxLQUFLYyxtQkFIbEI7QUFJSSxlQUFPLEVBQUUsS0FBS2tDLG1CQUpsQjtBQUtJLG1CQUFXLEVBQUM7QUFMaEIsUUFiSixlQW9CSTtBQUFHLGlCQUFTLEVBQUMsa0NBQWI7QUFBZ0QsZUFBTyxFQUFFLEtBQUs1RDtBQUE5RCxRQXBCSixlQXFCSTtBQUFHLGlCQUFTLEVBQUMsNkNBQWI7QUFBMkQsZUFBTyxFQUFFLEtBQUtEO0FBQXpFLFFBckJKLGVBc0JJLDJEQUFDLHNEQUFELE9BdEJKLGVBdUJJLDJEQUFDLG9EQUFELE9BdkJKLENBREo7QUEyQkg7Ozs7RUF6VnVCdEksK0M7O0FBMlY1QixJQUFJQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNwQixLQUFELEVBQVc7QUFDN0IsU0FBTztBQUNIdkMsUUFBSSxFQUFNdUMsS0FBSyxDQUFDcUIsS0FEYjtBQUVIakIsVUFBTSxFQUFJSixLQUFLLENBQUNJLE1BRmI7QUFHSGtCLFlBQVEsRUFBRXRCLEtBQUssQ0FBQ3NCLFFBSGI7QUFJSHRFLFVBQU0sRUFBSWdELEtBQUssQ0FBQ2hEO0FBSmIsR0FBUDtBQU1ILENBUEQ7O0FBUWV1RSwwSEFBTyxDQUFDSCxlQUFELENBQVAsQ0FBeUI4RyxhQUF6QixDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xYQTtBQUNBO0FBQ0E7O0lBRU11RyxTOzs7OztBQUNGLHFCQUFZMU8sS0FBWixFQUFtQjtBQUFBOztBQUFBLDZCQUNUQSxLQURTO0FBR2xCOzs7OzZCQUNRO0FBQ0wsMEJBQ0k7QUFBSyxVQUFFLEVBQUMsV0FBUjtBQUFvQixpQkFBUyxFQUFDO0FBQTlCLFNBQ0t1SSx3REFBTSxDQUFDQyxNQUFQLENBQWM3RyxHQUFkLENBQWtCLFVBQUNxSixJQUFEO0FBQUEsNEJBQ2YsMkRBQUMsa0RBQUQ7QUFBTyxhQUFHLEVBQUVBLElBQUksQ0FBQ0MsSUFBakI7QUFBdUIsZ0JBQU0sRUFBRUQsSUFBSSxDQUFDaEUsTUFBcEM7QUFBNEMsY0FBSSxFQUFFZ0UsSUFBSSxDQUFDQztBQUF2RCxVQURlO0FBQUEsT0FBbEIsQ0FETCxDQURKO0FBT0g7Ozs7RUFibUI3SiwrQzs7QUFlVHNOLHdFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUMsVzs7Ozs7Ozs7Ozs7Ozt5Q0FHbUI7QUFBQSxVQUVYNVEsUUFGVyxHQUVFLEtBQUtpQyxLQUZQLENBRVhqQyxRQUZXO0FBR2pCLFVBQUlxSSxpQkFBaUIsR0FBR3JJLFFBQVEsQ0FBQ3lGLElBQVQsQ0FBYyxVQUFBQyxPQUFPO0FBQUEsZUFBSUEsT0FBTyxDQUFDQyxRQUFaO0FBQUEsT0FBckIsQ0FBeEI7QUFFQSxVQUFJMkQsUUFBUSxHQUFHakIsaUJBQWlCLElBQUlBLGlCQUFpQixDQUFDakksT0FBdEQ7QUFFQSxVQUFJeVEsVUFBVSxHQUFLaEksUUFBUSxDQUFDQyxjQUFULENBQXdCLHFCQUF4QixDQUFuQjs7QUFDQSxVQUFHK0gsVUFBSCxFQUFjO0FBRVYzTCxxREFBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEI0QixFQUExQixDQUE2QixRQUE3QixFQUF1QyxZQUFVO0FBQzdDZ0sseUZBQW1CLENBQUMsSUFBRCxFQUFPeEgsUUFBUCxFQUFpQmpCLGlCQUFqQixDQUFuQjtBQUNILFNBRkQ7QUFHSDtBQUNKOzs7NkJBRVE7QUFBQSxVQUVDckksUUFGRCxHQUVjLEtBQUtpQyxLQUZuQixDQUVDakMsUUFGRDtBQUdMLFVBQUlxSSxpQkFBaUIsR0FBR3JJLFFBQVEsQ0FBQ3lGLElBQVQsQ0FBYyxVQUFBQyxPQUFPO0FBQUEsZUFBSUEsT0FBTyxDQUFDQyxRQUFaO0FBQUEsT0FBckIsQ0FBeEI7QUFFQSxVQUFJMkQsUUFBUSxHQUFHakIsaUJBQWlCLElBQUlBLGlCQUFpQixDQUFDakksT0FBdEQ7QUFFQSwwQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSSwyREFBQyxxREFBRCxPQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFDLHNCQUFmO0FBQXNDLFVBQUUsRUFBQztBQUF6QyxTQUNLa0osUUFBUSxJQUFJQSxRQUFRLENBQUMxRixHQUFULENBQ1QsVUFBQ3hELE9BQUQsRUFBVTJRLEdBQVY7QUFBQSw0QkFDSSwyREFBQyx3REFBRDtBQUNJLGFBQUcsRUFBRSxpQkFBaUJBLEdBQWpCLEdBQXVCMUksaUJBQWlCLENBQUN6SCxFQURsRDtBQUVJLGlCQUFPLEVBQUVSLE9BRmI7QUFHSSwyQkFBaUIsRUFBRWlJO0FBSHZCLFVBREo7QUFBQSxPQURTLENBRGpCLENBRkosZUFZSSwyREFBQywwREFBRCxPQVpKLENBREo7QUFnQkg7Ozs7RUExQ3FCaEYsK0M7O0FBNEMxQixJQUFJQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNwQixLQUFELEVBQVc7QUFDN0IsU0FBTztBQUNIbEMsWUFBUSxFQUFFa0MsS0FBSyxDQUFDc0I7QUFEYixHQUFQO0FBR0gsQ0FKRDs7QUFLZUMsMEhBQU8sQ0FBQ0gsZUFBRCxDQUFQLENBQXlCc04sV0FBekIsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURBO0FBQ0E7QUFDQTs7SUFFTUksUTs7Ozs7Ozs7Ozs7Ozs2QkFFTztBQUNMO0FBREssVUFFQ0MsYUFGRCxHQUVtQixLQUFLaFAsS0FGeEIsQ0FFQ2dQLGFBRkQ7QUFJTCwwQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNNQSxhQUFhLElBQUlBLGFBQWEsQ0FBQ3JOLEdBQWQsQ0FBa0IsVUFBQThCLE9BQU87QUFBQSw0QkFBSSwyREFBQyxxREFBRDtBQUFVLGFBQUcsRUFBRUEsT0FBTyxDQUFDOUUsRUFBdkI7QUFBMkIsaUJBQU8sRUFBRThFO0FBQXBDLFVBQUo7QUFBQSxPQUF6QixDQUR2QixDQURKO0FBS0g7Ozs7RUFYa0JyQywrQzs7QUFlUjJOLHVFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBOztJQUVNRSxXOzs7Ozs7Ozs7Ozs7OzZCQUVPO0FBQUEsd0JBQ3NDLEtBQUtqUCxLQUQzQztBQUFBLFVBQ0NXLElBREQsZUFDQ0EsSUFERDtBQUFBLFVBQ094QyxPQURQLGVBQ09BLE9BRFA7QUFBQSxVQUNnQmlJLGlCQURoQixlQUNnQkEsaUJBRGhCO0FBR0wsVUFBSThJLE1BQU0sR0FBRztBQUFFbEgsY0FBTSxFQUFHLEVBQVg7QUFBZStGLFlBQUksRUFBRTtBQUFyQixPQUFiOztBQUNBLFVBQUlwTixJQUFJLElBQUlBLElBQUksQ0FBQ2hDLEVBQWpCLEVBQXFCO0FBQ2pCdVEsY0FBTSxDQUFDbEgsTUFBUCxHQUFnQnJILElBQUksQ0FBQ3FILE1BQXJCO0FBQ0FrSCxjQUFNLENBQUNuQixJQUFQLEdBQWdCcE4sSUFBSSxDQUFDc0gsVUFBTCxHQUFrQixHQUFsQixHQUF3QnRILElBQUksQ0FBQ3VILFNBQTdDO0FBQ0g7O0FBRUQsVUFBSSxDQUFDOUIsaUJBQUwsRUFBd0I7QUFDcEIsZUFBTyxJQUFQO0FBQ0g7O0FBQ0QsVUFBSStJLFFBQVEsR0FBRy9JLGlCQUFpQixDQUFDMUksSUFBakM7O0FBRUEsVUFBSSxDQUFDUyxPQUFPLENBQUNmLElBQWIsRUFBbUI7QUFDZixZQUFJZ1MsV0FBVyxHQUFHLGVBQWxCO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsWUFBSUEsV0FBVyxHQUFHLHNCQUFsQjtBQUNBRCxnQkFBUSxHQUFHRCxNQUFYO0FBQ0g7O0FBbkJJLFVBb0JDNUgsS0FwQkQsR0FvQlduSixPQXBCWCxDQW9CQ21KLEtBcEJEO0FBc0JMLFVBQUkrSCxhQUFhLEdBQUcsS0FBSyxFQUFMLEdBQVUsRUFBVixHQUFlLElBQW5DO0FBSUEsMEJBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBRUk7QUFBSyxpQkFBUyxFQUFFRCxXQUFXLEdBQUc7QUFBOUIsc0JBQ0k7QUFBUSxpQkFBUyxFQUFDO0FBQWxCLHNCQUNJO0FBQUssV0FBRyxFQUFFdlAsK0NBQU0sQ0FBQ2lJLFVBQVAsQ0FBa0JDLEdBQWxCLEdBQXdCb0gsUUFBUSxDQUFDbkgsTUFBM0M7QUFBbUQsV0FBRyxFQUFDO0FBQXZELFFBREosQ0FESixlQUlJO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBRVFWLEtBQUssSUFBSSxPQUFULGlCQUNBO0FBQUssaUJBQVMsRUFBRUE7QUFBaEIsU0FFUW5KLE9BQU8sQ0FBQ2tLLFVBQVIsQ0FBbUIxRyxHQUFuQixDQUF1QixVQUFFMk4sYUFBRixFQUFrQkMsS0FBbEIsRUFBNEI7QUFDL0MsWUFBSUQsYUFBYSxDQUFDbFMsSUFBZCxJQUFzQixLQUExQixFQUFpQztBQUU3QixjQUFJa1MsYUFBYSxDQUFDakYsSUFBZCxJQUFzQmlGLGFBQWEsQ0FBQ2pGLElBQWQsR0FBcUJnRixhQUFyQixHQUFzQyxJQUFJdkcsSUFBSixFQUFELENBQVdDLE9BQVgsRUFBL0QsRUFBcUY7QUFDakYsZ0NBQ0k7QUFBSyxpQkFBRyxFQUFFLHVCQUF1QndHLEtBQXZCLEdBQStCRCxhQUFhLENBQUNuRixHQUF2RDtBQUE2RCx1QkFBUyxFQUFDO0FBQXZFLDRCQUNJO0FBQUssaUJBQUcsRUFBRXRLLCtDQUFNLENBQUNpSSxVQUFQLENBQWtCQyxHQUFsQixHQUF3QnVILGFBQWEsQ0FBQ25GO0FBQWhELGNBREosZUFFSTtBQUFHLHVCQUFTLEVBQUMsMEJBQWI7QUFBd0Msa0JBQUksRUFBR3RLLCtDQUFNLENBQUNpSSxVQUFQLENBQWtCQyxHQUFsQixHQUF3QnVILGFBQWEsQ0FBQ25GLEdBQXJGO0FBQTJGLG9CQUFNLEVBQUMsUUFBbEc7QUFBMkcsc0JBQVE7QUFBbkgsNEJBQ0k7QUFBRyx1QkFBUyxFQUFDO0FBQWIsY0FESixDQUZKLENBREo7QUFRSDtBQUNKOztBQUNELDRCQUNJO0FBQUssYUFBRyxFQUFFLHVCQUF1Qm9GLEtBQXZCLEdBQStCMVAsK0NBQU0sQ0FBQ2lJLFVBQVAsQ0FBa0JDLEdBQWpELEdBQXVELG1CQUFqRTtBQUF1RixtQkFBUyxFQUFDO0FBQWpHLHdCQUNJO0FBQUssYUFBRyxFQUFHbEksK0NBQU0sQ0FBQ2lJLFVBQVAsQ0FBa0JDLEdBQWxCLEdBQXdCO0FBQW5DLFVBREosZUFFSTtBQUFHLG1CQUFTLEVBQUMsMEJBQWI7QUFBd0MsY0FBSSxFQUFHbEksK0NBQU0sQ0FBQ2lJLFVBQVAsQ0FBa0JDLEdBQWxCLEdBQXdCdUgsYUFBYSxDQUFDbkYsR0FBckY7QUFBMkYsZ0JBQU0sRUFBQyxRQUFsRztBQUEyRyxrQkFBUTtBQUFuSCx3QkFDSTtBQUFHLG1CQUFTLEVBQUM7QUFBYixVQURKLENBRkosQ0FESjtBQVFILE9BdEJELENBRlIsQ0FIUixlQStCSTtBQUFLLGlCQUFTLEVBQUU3QyxLQUFLLEdBQUc7QUFBeEIsU0FBbUNuSixPQUFPLENBQUMySSxPQUEzQyxDQS9CSixlQWdDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUVRLENBQUMzSSxPQUFPLENBQUNmLElBQVQsS0FFSSxDQUFDZSxPQUFPLENBQUNxUixJQUFULGdCQUNBO0FBQUcsaUJBQVMsRUFBQztBQUFiLFFBREEsZ0JBR0E7QUFBRyxpQkFBUyxFQUFDO0FBQWIsUUFMSixDQUZSLENBaENKLENBSkosQ0FGSixDQURKO0FBdURIOzs7O0VBbkZxQnBPLCtDOztBQXNGMUIsSUFBSUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDcEIsS0FBRCxFQUFXO0FBQzdCLFNBQU87QUFDSFUsUUFBSSxFQUFNVixLQUFLLENBQUNxQjtBQURiLEdBQVA7QUFHSCxDQUpEOztBQUtlRSwwSEFBTyxDQUFDSCxlQUFELENBQVAsQ0FBeUI0TixXQUF6QixDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoR0E7O0lBQ01RLGlCOzs7Ozs7Ozs7Ozs7OzZCQUNPO0FBQUEsVUFDQ0MsTUFERCxHQUNZLEtBQUsxUCxLQURqQixDQUNDMFAsTUFERDs7QUFFTCxVQUFJLENBQUNBLE1BQUwsRUFBYTtBQUNULGVBQU8sSUFBUDtBQUNIOztBQUNELFVBQUlDLFlBQVksR0FBR0QsTUFBbkI7QUFDQSxVQUFJRSxVQUFVLEdBQUdELFlBQVksQ0FBQ2pTLElBQTlCO0FBQ0EsVUFBSTBSLFdBQVcsR0FBRyxhQUFsQjtBQUNBLDBCQUNJO0FBQUssVUFBRSxFQUFDLFdBQVI7QUFBb0IsaUJBQVMsRUFBQyw2Q0FBOUI7QUFBNEUsZUFBTyxFQUFFTSxNQUFNLENBQUMvUTtBQUE1RixzQkFDSTtBQUFLLGlCQUFTLEVBQUV5USxXQUFXLEdBQUc7QUFBOUIsc0JBRUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBRUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLFNBQStCUSxVQUFVLENBQUMzSCxVQUFYLElBQXlCMkgsVUFBVSxDQUFDMUgsU0FBWCxHQUF1QixZQUEvRSxDQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsUUFESixlQUVJO0FBQUssaUJBQVMsRUFBQztBQUFmLFFBRkosZUFHSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixRQUhKLENBREosQ0FGSixDQUZKLENBRkosQ0FESixDQURKO0FBcUJIOzs7O0VBOUIyQjlHLCtDOztBQWdDakJxTyxnRkFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7O0lBRU1JLFc7Ozs7Ozs7Ozs7Ozs7NkJBRU87QUFDTDNTLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaO0FBQ0EsVUFBSTJTLEtBQUssR0FBRztBQUFFOUgsY0FBTSxFQUFFLEVBQVY7QUFBYytGLFlBQUksRUFBRTtBQUFwQixPQUFaO0FBRkssVUFHQ3BOLElBSEQsR0FHVSxLQUFLWCxLQUhmLENBR0NXLElBSEQ7O0FBSUwsVUFBSUEsSUFBSSxJQUFJQSxJQUFJLENBQUNoQyxFQUFqQixFQUFxQjtBQUNqQm1SLGFBQUssQ0FBQzlILE1BQU4sR0FBZXJILElBQUksQ0FBQ3FILE1BQXBCO0FBQ0E4SCxhQUFLLENBQUMvQixJQUFOLEdBQWFwTixJQUFJLENBQUNzSCxVQUFMLEdBQWtCLEdBQWxCLEdBQXdCdEgsSUFBSSxDQUFDdUgsU0FBMUM7QUFDSDs7QUFFRCwwQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFRLGlCQUFTLEVBQUM7QUFBbEIsc0JBQ0k7QUFBSyxXQUFHLEVBQUdySSwrQ0FBTSxDQUFDaUksVUFBUCxDQUFrQkMsR0FBbEIsR0FBd0IrSCxLQUFLLENBQUM5SCxNQUF6QztBQUFrRCxXQUFHLEVBQUM7QUFBdEQsUUFESixDQURKLGVBSUk7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLFNBQXdCOEgsS0FBSyxDQUFDL0IsSUFBOUIsQ0FKSixDQURKLENBREosZUFTSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSSwyREFBQyxxREFBRDtBQUFVLHFCQUFhLEVBQUUsS0FBSy9OLEtBQUwsQ0FBV2dQO0FBQXBDLFFBREosQ0FUSixDQURKO0FBZUg7Ozs7RUExQnFCNU4sK0M7O0FBNEIxQixJQUFJQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNwQixLQUFELEVBQVc7QUFDN0IsU0FBTztBQUNIVSxRQUFJLEVBQUVWLEtBQUssQ0FBQ3FCLEtBRFQ7QUFFSDBOLGlCQUFhLEVBQUUvTyxLQUFLLENBQUNzQjtBQUZsQixHQUFQO0FBSUgsQ0FMRDs7QUFNZUMsMEhBQU8sQ0FBQ0gsZUFBRCxDQUFQLENBQXlCd08sV0FBekIsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNBO0FBQ0E7QUFDQTtBQUNBOztJQUNNRSxROzs7Ozs7Ozs7Ozs7OztvSEFFRkMsZ0IsR0FBbUIsVUFBRUMsQ0FBRixFQUFNdFIsRUFBTixFQUFhO0FBRTVCc1IsT0FBQyxDQUFDalEsS0FBRixDQUFRdUYsUUFBUixDQUFpQjtBQUFFbkksWUFBSSxFQUFFQyx1REFBSSxDQUFDc0MsSUFBTCxDQUFVQyx3QkFBbEI7QUFBNENwQyxlQUFPLEVBQUVtQjtBQUFyRCxPQUFqQjtBQUNILEs7Ozs7OzZCQUVRO0FBQUE7O0FBQ0QsVUFBRThFLE9BQUYsR0FBcUIsS0FBS3pELEtBQTFCLENBQUV5RCxPQUFGO0FBQUEsVUFDQXlNLGlCQURBLEdBQ3FCek0sT0FBTyxDQUFDL0YsSUFBUixDQUFhZ0ssTUFBYixHQUFzQixVQUF0QixHQUFtQyxFQUR4RDtBQUFBLFVBRUF5SSxrQkFGQSxHQUVxQjFNLE9BQU8sQ0FBQ0MsUUFBUixHQUFtQixrQkFBbkIsR0FBd0MsRUFGN0Q7O0FBREMsa0NBS1lELE9BQU8sQ0FBQ3RGLE9BQVIsQ0FBZ0JpUyxLQUFoQixDQUFzQixDQUFDLENBQXZCLENBTFo7QUFBQTtBQUFBLFVBS0FDLFFBTEE7O0FBT0wsVUFBSUMsY0FBYyxHQUFHN00sT0FBTyxDQUFDdEYsT0FBUixDQUFnQnNLLE1BQWhCLENBQXVCLFVBQUF0SyxPQUFPO0FBQUEsZUFBSSxDQUFDQSxPQUFPLENBQUNxUixJQUFULElBQWlCLENBQUNyUixPQUFPLENBQUNmLElBQTlCO0FBQUEsT0FBOUIsRUFBbUVnSyxNQUF4RjtBQUVBLDBCQUNJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQUssaUJBQVMsRUFBRThJLGlCQUFpQixHQUFHQyxrQkFBcEIsR0FBeUMsV0FBekQ7QUFDSSxlQUFPLEVBQUU7QUFBQSxpQkFBTSxNQUFJLENBQUNILGdCQUFMLENBQXNCLE1BQXRCLEVBQTRCdk0sT0FBTyxDQUFDOUUsRUFBcEMsQ0FBTjtBQUFBO0FBRGIsc0JBRUk7QUFBUSxpQkFBUyxFQUFDO0FBQWxCLHNCQUNJO0FBQUssV0FBRyxFQUFFa0IsK0NBQU0sQ0FBQ2lJLFVBQVAsQ0FBa0JDLEdBQWxCLEdBQXdCdEUsT0FBTyxDQUFDL0YsSUFBUixDQUFhc0ssTUFBL0M7QUFBdUQsV0FBRyxFQUFDO0FBQTNELFFBREosQ0FGSixlQUtJO0FBQUssaUJBQVMsRUFBQztBQUFmLHNCQUNJO0FBQU0saUJBQVMsRUFBQztBQUFoQixTQUF3QnZFLE9BQU8sQ0FBQy9GLElBQVIsQ0FBYXVLLFVBQWIsR0FBMEIsR0FBMUIsR0FBZ0N4RSxPQUFPLENBQUMvRixJQUFSLENBQWF3SyxTQUFyRSxDQURKLEVBRU1tSSxRQUFRLGlCQUNOO0FBQU0saUJBQVMsRUFBQztBQUFoQixTQUFnQ0EsUUFBUSxDQUFDdkosT0FBekMsQ0FIUixDQUxKLEVBWVF3SixjQUFjLGdCQUNkO0FBQUcsaUJBQVMsRUFBQztBQUFiLFNBQWtDQSxjQUFsQyxDQURjLEdBR2QsSUFmUixDQURKLENBREo7QUFzQkg7Ozs7RUF0Q2tCbFAsK0M7O0FBd0NSSSwwSEFBTyxHQUFHdU8sUUFBSCxDQUF0QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFDTVEsSTs7Ozs7QUFFRixnQkFBWXZRLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2QkFDVEEsS0FEUztBQUdsQjs7Ozt3Q0FFbUI7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDSSxVQUFBd1EsWUFBWSxHQUFPLElBQW5CO0FBQUEsVUFDQUMsZ0JBREEsR0FDbUI3SixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FEbkI7QUFBQSxVQUVFMkMsTUFGRixHQUVhLEtBQUt4SixLQUZsQixDQUVFd0osTUFGRjs7QUFJSixVQUFJaUgsZ0JBQUosRUFBc0I7QUFDbEI7QUFDQSxZQUFJQyxNQUFNLEdBQUdELGdCQUFnQixDQUFDckcsWUFBakIsQ0FBOEIsYUFBOUIsQ0FBYjtBQUFBLFlBQ0lwRyxNQUFNLEdBQUd5TSxnQkFBZ0IsQ0FBQ3JHLFlBQWpCLENBQThCLFdBQTlCLENBRGIsQ0FGa0IsQ0FLbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0EsWUFBSXBHLE1BQUosRUFBWTtBQUFFO0FBRVYyTSw0RkFBc0IsQ0FBRTNNLE1BQUYsRUFBVTBNLE1BQVYsRUFBa0JsSCxNQUFsQixFQUEwQmdILFlBQTFCLENBQXRCO0FBQ0g7QUFDSjtBQUVKOzs7NkJBS1E7QUFDTHRULGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBRUEsMEJBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0ksMkRBQUMsd0RBQUQsT0FESixlQUVJLDJEQUFDLHdEQUFELE9BRkosQ0FESixDQURKLENBREo7QUFXSDs7OztFQTFEY2lFLCtDOztBQTZEbkIsSUFBSUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDcEIsS0FBRCxFQUFXO0FBQzdCLFNBQU87QUFDSHVKLFVBQU0sRUFBU3ZKLEtBQUssQ0FBQ0k7QUFEbEIsR0FBUDtBQUdILENBSkQ7O0FBS2VtQiwwSEFBTyxDQUFDSCxlQUFELENBQVAsQ0FBeUJrUCxJQUF6QixDQUFmLEUsQ0FLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSTs7Ozs7Ozs7Ozs7O0FDdEdBO0FBQUEsSUFBSUssS0FBSyxHQUFRLGdCQUFqQjtBQUFBLElBQ0lDLFFBQVEsR0FBSyxnQkFEakI7QUFBQSxJQUVJQyxVQUFVLEdBQUcsSUFGakI7QUFBQSxJQUdJQyxTQUFTLEdBQUksSUFIakI7QUFLZTtBQUNiQyxRQUFNLEVBQUU7QUFDTkMsUUFBSSxFQUFFSCxVQURBO0FBRU5JLFVBQU0sRUFBRU4sS0FGRjtBQUdOTyxNQUFFLEVBQUVOLFFBSEU7QUFJTk8sYUFBUyxFQUFHTCxTQUpOO0FBS05NLFlBQVEsRUFBRSxvQkFBWTtBQUNwQixVQUFJUCxVQUFVLElBQUksR0FBbEIsRUFBdUI7QUFDckIsZUFBTyxVQUFQO0FBQ0Q7O0FBQ0QsYUFBTyxTQUFQO0FBQ0QsS0FWSztBQVdOUSxTQUFLLEVBQUUsaUJBQU07QUFDWCxVQUFJQyxRQUFRLEdBQUcsRUFBZjtBQUNBLFVBQUlDLFFBQVEsR0FBRyxFQUFmOztBQUNBLFVBQUlWLFVBQVUsSUFBSSxHQUFsQixFQUF1QjtBQUNyQlUsZ0JBQVEsR0FBRyxVQUFYO0FBQ0QsT0FGRCxNQUVPO0FBQ0xBLGdCQUFRLEdBQUcsU0FBWDtBQUNBRCxnQkFBUSxHQUFHLE1BQU1ULFVBQWpCO0FBQ0Q7O0FBRUQsYUFBT1UsUUFBUSxHQUFHWixLQUFYLEdBQW1CVyxRQUExQjtBQUNEO0FBdEJLLEdBREs7QUF5QmI3TyxXQUFTLEVBQUU7QUFDVEMsVUFBTSxFQUFJLENBREQ7QUFFVEMsWUFBUSxFQUFFLENBRkQ7QUFHVDZPLFNBQUssRUFBSztBQUhELEdBekJFO0FBOEJiM0osWUFBVSxFQUFFO0FBQ1ZDLE9BQUcsRUFBRTtBQURLLEdBOUJDO0FBa0NiUyxRQUFNLEVBQUUsQ0FDTjtBQUFFeEIsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0FETSxFQUVOO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQUZNLEVBR047QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBSE0sRUFJTjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0FKTSxFQUtOO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQUxNLEVBTU47QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBTk0sRUFPTjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0FQTSxFQVFOO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQVJNLEVBU047QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBVE0sRUFVTjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0FWTSxFQVdOO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQVhNLEVBWU47QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBWk0sRUFhTjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0FiTSxFQWNOO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQWRNLEVBZU47QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBZk0sRUFnQk47QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBaEJNLEVBaUJOO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQWpCTSxFQWtCTjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0FsQk0sRUFtQk47QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBbkJNLEVBb0JOO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQXBCTSxFQXFCTjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0FyQk0sRUFzQk47QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBdEJNLEVBdUJOO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQXZCTSxFQXdCTjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0F4Qk0sRUF5Qk47QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBekJNLEVBMEJOO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQTFCTSxFQTJCTjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0EzQk0sRUE0Qk47QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBNUJNLEVBNkJOO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQTdCTSxFQThCTjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0E5Qk0sRUErQk47QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBL0JNLEVBZ0NOO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQWhDTSxFQWlDTjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0FqQ00sRUFrQ047QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBbENNLEVBbUNOO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQW5DTSxFQW9DTjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0FwQ00sRUFxQ047QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBckNNLEVBc0NOO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQXRDTSxFQXVDTjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0F2Q00sRUF3Q047QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBeENNLEVBeUNOO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQXpDTSxFQTBDTjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0ExQ00sRUEyQ047QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBM0NNLEVBNENOO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQTVDTSxFQTZDTjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0E3Q00sRUE4Q047QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBOUNNLEVBK0NOO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQS9DTSxFQWdETjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0FoRE0sRUFpRE47QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBakRNLEVBa0ROO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQWxETSxFQW1ETjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0FuRE0sRUFvRE47QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBcERNLEVBcUROO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQXJETSxFQXNETjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0F0RE0sRUF1RE47QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBdkRNLEVBd0ROO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQXhETSxFQXlETjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0F6RE0sRUEwRE47QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBMURNLEVBMkROO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQTNETSxFQTRETjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0E1RE0sRUE2RE47QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBN0RNLEVBOEROO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQTlETSxFQStETjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0EvRE0sRUFnRU47QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBaEVNLEVBaUVOO0FBQUVqRSxVQUFNLEVBQUUsSUFBVjtBQUFnQmlFLFFBQUksRUFBRTtBQUF0QixHQWpFTSxFQWtFTjtBQUFFakUsVUFBTSxFQUFFLElBQVY7QUFBZ0JpRSxRQUFJLEVBQUU7QUFBdEIsR0FsRU0sRUFtRU47QUFBRWpFLFVBQU0sRUFBRSxJQUFWO0FBQWdCaUUsUUFBSSxFQUFFO0FBQXRCLEdBbkVNO0FBbENLLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNeUcsS0FBSyxHQUFHQyx5REFBVyxDQUFDQyxnREFBRCxDQUF6QjtBQUNBRixLQUFLLENBQUNHLFNBQU4sQ0FBZ0IsWUFBVTtBQUN0QjNVLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLDJCQUFaO0FBQ0FELFNBQU8sQ0FBQ0MsR0FBUixDQUFZdVUsS0FBSyxDQUFDSSxRQUFOLEVBQVo7QUFDSCxDQUhEOztBQUlBLElBQUksT0FBUUMsT0FBUixLQUFxQixXQUF6QixFQUFzQztBQUNsQ0Msa0RBQVEsQ0FBQ0MsTUFBVCxlQUNJLDJEQUFDLG9EQUFEO0FBQVUsU0FBSyxFQUFFUDtBQUFqQixrQkFDSSwyREFBQyx5REFBRCxPQURKLENBREosRUFJRTlLLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixDQUpGO0FBS0gsQ0FORCxNQU1LO0FBQ0RtSCxPQUFLLENBQUMsNENBQUQsQ0FBTDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0MxQkQ7O0FBQ0E7QUFHQTtDQU1BOztBQUNBLElBQUkvUSxNQUFNLEdBQVMsSUFBbkI7QUFBQSxJQUNJaVYsWUFBWSxHQUFHLElBRG5CO0FBQUEsSUFFSXpSLEtBQUssR0FBVUMsWUFGbkIsQyxDQUdBOztBQUVBd0ksTUFBTSxDQUFDMEMsT0FBUCxHQUFpQixVQUFVbEYsS0FBVixFQUFpQjtBQUM5QixNQUFJQSxLQUFLLENBQUNnRSxNQUFWLEVBQWtCO0FBQ2QsUUFBSWhFLEtBQUssQ0FBQ2dFLE1BQU4sQ0FBYVYsU0FBYixDQUF1QkMsUUFBdkIsQ0FBZ0MsaUJBQWhDLENBQUosRUFBd0Q7QUFDcEQ7QUFDSDtBQUNKOztBQUNELE1BQUlvRCxNQUFNLEdBQUd6RyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBYjs7QUFDQSxNQUFJd0csTUFBSixFQUFZO0FBQ1JBLFVBQU0sQ0FBQ3JELFNBQVAsQ0FBaUI2QixNQUFqQixDQUF3QixNQUF4QjtBQUNBc0csY0FBVSxDQUFDLFlBQVk7QUFDbkIsVUFBSTlFLE1BQU0sQ0FBQ3JELFNBQVAsQ0FBaUJDLFFBQWpCLENBQTBCLFdBQTFCLENBQUosRUFBNEM7QUFDeENvRCxjQUFNLENBQUNyRCxTQUFQLENBQWlCNkIsTUFBakIsQ0FBd0IsV0FBeEI7QUFDQXdCLGNBQU0sQ0FBQ3JELFNBQVAsQ0FBaUJzRCxHQUFqQixDQUFxQixNQUFyQjtBQUNIO0FBQ0osS0FMUyxFQUtQLEdBTE8sQ0FBVjtBQU1IO0FBQ0osQ0FoQkQ7O0FBbUJPLFNBQVNxRCxzQkFBVCxDQUFpQzNNLE1BQWpDLEVBQXlDME0sTUFBekMsRUFBaURsSCxNQUFqRCxFQUF5RDRJLGlCQUF6RCxFQUE2RTtBQUdoRixNQUFJMVEsSUFBSSxHQUFTO0FBQUVzQyxVQUFNLEVBQU5BLE1BQUY7QUFBVTBNLFVBQU0sRUFBTkEsTUFBVjtBQUFrQmxILFVBQU0sRUFBRXJKLElBQUksQ0FBQ0MsU0FBTCxDQUFlb0osTUFBZjtBQUExQixHQUFqQjtBQUFBLE1BQ0k2SSxVQUFVLEdBQUcsSUFEakI7QUFFQWxNLE9BQUssQ0FBQ3RHLCtDQUFNLENBQUNtUixNQUFQLENBQWNNLEtBQWQsS0FBd0IsYUFBekIsRUFBd0M7QUFDekNnQixVQUFNLEVBQUUsTUFEaUM7QUFFekNDLFFBQUksRUFBRXBTLElBQUksQ0FBQ0MsU0FBTCxDQUFlc0IsSUFBZixDQUZtQztBQUd6QzhRLFdBQU8sRUFBRTtBQUNMLHNCQUFnQjtBQURYO0FBSGdDLEdBQXhDLENBQUwsQ0FPQ0MsSUFQRCxDQU9NLFVBQUFDLEdBQUc7QUFBQSxXQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLEdBUFQsRUFRQ0YsSUFSRCxDQVFNLFVBQUFHLFFBQVEsRUFBSTtBQUNkLFFBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxJQUFpQixHQUFyQixFQUEwQjtBQUN0QixZQUFNLElBQUlDLEtBQUosQ0FBVSw0Q0FBVixDQUFOO0FBQ0g7O0FBRURULGNBQVUsR0FBRztBQUNUcEosWUFBTSxFQUFPMkosUUFBUSxDQUFDbFIsSUFBVCxDQUFjdUgsTUFEbEI7QUFFVEQsWUFBTSxFQUFPNEosUUFBUSxDQUFDbFIsSUFBVCxDQUFjc0gsTUFGbEI7QUFHVDlILGlCQUFXLEVBQUUwUixRQUFRLENBQUNsUixJQUFULENBQWNSLFdBSGxCO0FBSVQ2UixpQkFBVyxFQUFFSCxRQUFRLENBQUNsUixJQUFULENBQWNxUjtBQUpsQixLQUFiO0FBTUE3VixXQUFPLENBQUNDLEdBQVIsQ0FBWSxvRkFBb0Y2VixRQUFRLENBQUNKLFFBQVEsQ0FBQ2xSLElBQVQsQ0FBY3VILE1BQWYsQ0FBeEc7QUFDQWtKLGNBQVUsQ0FBQyxZQUFVO0FBQ2pCakosWUFBTSxDQUFDQyxRQUFQLENBQWdCOEosSUFBaEIsR0FBdUJwVCwrQ0FBTSxDQUFDaUksVUFBUCxDQUFrQkMsR0FBekM7QUFDSCxLQUZTLEVBRVBpTCxRQUFRLENBQUNKLFFBQVEsQ0FBQ2xSLElBQVQsQ0FBY3VILE1BQWYsQ0FBUixHQUFpQyxJQUYxQixDQUFWOztBQUlBLFFBQUlpSyxTQUFTLG1DQUFTTixRQUFRLENBQUNsUixJQUFULENBQWNoRSxJQUF2QjtBQUE2QnVELFlBQU0sRUFBR29SO0FBQXRDLE1BQWI7O0FBQ0FjLGdCQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsRUFBNkJqVCxJQUFJLENBQUNDLFNBQUwsQ0FBZThTLFNBQWYsQ0FBN0I7QUFDQWQscUJBQWlCLENBQUNwUyxLQUFsQixDQUF3QnVGLFFBQXhCLENBQWlDOUgsMERBQVUsQ0FBQ3lWLFNBQUQsQ0FBM0M7QUFDQSxXQUFPO0FBQUV2UyxVQUFJLEVBQUV1UyxTQUFSO0FBQW1CMUosWUFBTSxFQUFOQTtBQUFuQixLQUFQO0FBQ0gsR0E1QkQsRUE2QkNpSixJQTdCRCxDQTZCTyxVQUFBWSxnQkFBZ0IsRUFBSTtBQUV2QixRQUFJM1IsSUFBSSxHQUFHO0FBQ1BzQyxZQUFNLEVBQUVnUCxRQUFRLENBQUNoUCxNQUFELENBRFQ7QUFFUGhELFlBQU0sRUFBRXFTLGdCQUFnQixDQUFDMVMsSUFBakIsQ0FBc0JNLE1BQXRCLENBQTZCQyxXQUY5QjtBQUdQc0ksWUFBTSxFQUFFckosSUFBSSxDQUFDQyxTQUFMLENBQWVpVCxnQkFBZ0IsQ0FBQzdKLE1BQWhDO0FBSEQsS0FBWDtBQUtBLFdBQU84SixtQkFBbUIsQ0FBRTVSLElBQUYsQ0FBMUI7QUFDSCxHQXJDRCxFQXNDQytRLElBdENELENBc0NPLFVBQUFjLFdBQVcsRUFBSTtBQUNsQixRQUFJQSxXQUFKLEVBQWlCO0FBQ2JuQix1QkFBaUIsQ0FBQ3BTLEtBQWxCLENBQXdCdUYsUUFBeEIsQ0FBaUN6SCw4REFBYyxDQUFDeVYsV0FBRCxDQUEvQztBQUNIO0FBQ0osR0ExQ0QsV0EyQ08sVUFBQTdHLEtBQUssRUFBSTtBQUNac0IsU0FBSyxDQUFDLDRDQUFELENBQUw7QUFDQSxXQUFPLEtBQVA7QUFDSCxHQTlDRDtBQStDSDtBQUlNLFNBQVN6TixvQkFBVCxDQUE4QkMsY0FBOUIsRUFBOENGLFdBQTlDLEVBQTJEO0FBRzlEckQsUUFBTSxHQUFHdUQsY0FBYyxDQUFDWCwrQ0FBTSxDQUFDbVIsTUFBUCxDQUFjTSxLQUFkLEVBQUQsQ0FBdkI7QUFDQSxNQUFJa0MsY0FBYyxHQUFHNU0sUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQXJCO0FBQ0E1SixRQUFNLENBQUM0SCxFQUFQLENBQVUsU0FBVixFQUFxQixZQUFZO0FBRTdCMk8sa0JBQWMsSUFBSUEsY0FBYyxDQUFDeEosU0FBZixDQUF5QjZCLE1BQXpCLENBQWdDLHNCQUFoQyxDQUFsQixDQUY2QixDQUc3Qjs7QUFDQTRILG1CQUFlLENBQUN4VyxNQUFELEVBQVNxRCxXQUFULENBQWY7QUFDQUEsZUFBVyxDQUFDTixLQUFaLENBQWtCdUYsUUFBbEIsQ0FBMkJ2SSw0REFBWSxDQUFDQyxNQUFELENBQXZDO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLG1DQUFaO0FBQ0gsR0FQRDtBQVFBRixRQUFNLENBQUM0SCxFQUFQLENBQVUsWUFBVixFQUF3QixZQUFZO0FBQ2hDdkUsZUFBVyxDQUFDTixLQUFaLENBQWtCdUYsUUFBbEIsQ0FBMkJ2SSw0REFBWSxDQUFDLElBQUQsQ0FBdkM7QUFDQXdXLGtCQUFjLElBQUlBLGNBQWMsQ0FBQ3hKLFNBQWYsQ0FBeUJzRCxHQUF6QixDQUE2QixzQkFBN0IsQ0FBbEIsQ0FGZ0MsQ0FHaEM7QUFDSCxHQUpEO0FBS0FyUSxRQUFNLENBQUM0SCxFQUFQLENBQVUsZUFBVixFQUEyQixZQUFZO0FBQ25DMk8sa0JBQWMsSUFBSUEsY0FBYyxDQUFDeEosU0FBZixDQUF5QnNELEdBQXpCLENBQTZCLHNCQUE3QixDQUFsQjtBQUNBcEUsVUFBTSxDQUFDQyxRQUFQLENBQWdCdUssT0FBaEIsQ0FBd0I3VCwrQ0FBTSxDQUFDaUksVUFBUCxDQUFrQkMsR0FBMUM7QUFDSCxHQUhEO0FBSUgsQyxDQUVEOztBQUNPLFNBQVM0TCxNQUFULENBQWlCaEUsWUFBakIsRUFBK0JqUyxJQUEvQixFQUFxQzJDLE1BQXJDLEVBQTZDO0FBQ2hELE1BQUkxQixFQUFFLEdBQUdpSSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUN1RCxZQUF2QyxDQUFvRCxXQUFwRCxDQUFUO0FBQ0FsTixTQUFPLENBQUNDLEdBQVIsQ0FBYXdCLEVBQWIsRUFBaUJnUixZQUFqQjtBQUNBaUUsWUFBVSxHQUNUbkIsSUFERCxDQUNNLFVBQUFvQixNQUFNLEVBQUk7QUFDWjNCLGdCQUFZLEdBQUcyQixNQUFmO0FBQ0FDLGNBQVUsQ0FBQyxlQUFELEVBQWtCRCxNQUFsQixDQUFWLENBRlksQ0FHWjs7QUFDQSxXQUFPRSxrQkFBa0IsQ0FBRXBFLFlBQUYsRUFBZ0JqUyxJQUFoQixFQUFzQjJDLE1BQXRCLENBQXpCO0FBQ0gsR0FORCxXQU9PLFVBQVNxTSxLQUFULEVBQWdCO0FBQ25CeFAsV0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNILEdBVEQ7QUFVSDtBQUdNLFNBQVNzTSxvQkFBVCxDQUE4QnRMLE9BQTlCLEVBQXVDbUosS0FBdkMsRUFBOENlLFVBQTlDLEVBQTBEa0IsU0FBMUQsRUFBcUV2SSxNQUFyRSxFQUE2RXdJLE1BQTdFLEVBQXFGNEksaUJBQXJGLEVBQXdHO0FBRTNHblYsUUFBTSxDQUFDNEQsSUFBUCxDQUFZSixLQUFLLENBQUN1VCxZQUFsQixFQUFnQztBQUFFN1YsV0FBTyxFQUFQQSxPQUFGO0FBQVdtSixTQUFLLEVBQUxBLEtBQVg7QUFBa0JlLGNBQVUsRUFBVkEsVUFBbEI7QUFBOEJrQixhQUFTLEVBQVRBLFNBQTlCO0FBQXlDdkksVUFBTSxFQUFOQSxNQUF6QztBQUFpRHdJLFVBQU0sRUFBRXJKLElBQUksQ0FBQ0MsU0FBTCxDQUFlb0osTUFBZjtBQUF6RCxHQUFoQyxFQUYyRyxDQUczRzs7QUFDQTRJLG1CQUFpQixDQUFDcFMsS0FBbEIsQ0FBd0J1RixRQUF4QixDQUFpQ3JILDBEQUFVLENBQUM7QUFBRWQsUUFBSSxFQUFFLElBQVI7QUFBY29TLFFBQUksRUFBRSxJQUFwQjtBQUEwQjFJLFdBQU8sRUFBRTNJLE9BQW5DO0FBQTRDbUosU0FBSyxFQUFMQSxLQUE1QztBQUFtRGUsY0FBVSxFQUFWQTtBQUFuRCxHQUFELENBQTNDO0FBQ0EsU0FBTyxLQUFQO0FBQ0g7QUFDTSxTQUFTbUYsMEJBQVQsQ0FBb0NqRSxTQUFwQyxFQUErQy9LLFdBQS9DLEVBQTREd0MsTUFBNUQsRUFBcUU7QUFFeEUvRCxRQUFNLENBQUM0RCxJQUFQLENBQVlKLEtBQUssQ0FBQ3dULFdBQWxCLEVBQStCO0FBQUUxSyxhQUFTLEVBQVRBLFNBQUY7QUFBYS9LLGVBQVcsRUFBWEEsV0FBYjtBQUEwQndDLFVBQU0sRUFBTkE7QUFBMUIsR0FBL0I7QUFDQSxTQUFPLEtBQVA7QUFDSDtBQUlNLFNBQVNrTCxnQkFBVCxDQUEwQkYsSUFBMUIsRUFBZ0M7QUFDbkMsTUFBSWtJLFVBQVUsR0FBRyxJQUFJLElBQUosR0FBVyxJQUE1Qjs7QUFFQSxNQUFJLENBQUNsSSxJQUFJLENBQUNtSSxJQUFOLElBQWNuSSxJQUFJLENBQUNtSSxJQUFMLEdBQVlELFVBQTlCLEVBQTBDO0FBQ3RDRSx5QkFBcUI7QUFDeEI7O0FBRUQsTUFBSUMsUUFBUSxHQUFHckksSUFBZjtBQUNBLE1BQUlzSSxJQUFJLEdBQUcsSUFBSUMsUUFBSixFQUFYO0FBQ0FELE1BQUksQ0FBQ0UsTUFBTCxDQUFZLE1BQVosRUFBb0JILFFBQXBCO0FBQ0FDLE1BQUksQ0FBQ0UsTUFBTCxDQUFZLFNBQVosRUFBdUIsQ0FBdkI7QUFFQXZSLCtDQUFDLENBQUN3UixJQUFGLENBQU87QUFDSHRLLE9BQUcsRUFBVXRLLCtDQUFNLENBQUNpSSxVQUFQLENBQWtCQyxHQUFsQixHQUF3QixhQURsQztBQUVIM0ssUUFBSSxFQUFTLE1BRlY7QUFHSHNYLFdBQU8sRUFBTSxxQkFIVjtBQUlIaFQsUUFBSSxFQUFTNFMsSUFKVjtBQUtISyxTQUFLLEVBQVEsS0FMVjtBQU1IQyxlQUFXLEVBQUUsS0FOVjtBQU9IQyxlQUFXLEVBQUUsS0FQVjtBQVFIQyxXQUFPLEVBQUUsaUJBQVVsQyxRQUFWLEVBQW9CO0FBRXpCLFVBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxJQUFpQixHQUFyQixFQUEwQjtBQUN0QnVCLDZCQUFxQjtBQUN4Qjs7QUFDRCxVQUFJVyxVQUFVLEdBQUduTyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUJBQXhCLEVBQTJDTSxzQkFBM0MsQ0FBa0UsYUFBbEUsQ0FBakI7O0FBQ0EsVUFBSTROLFVBQVUsQ0FBQzNOLE1BQWYsRUFBdUI7QUFDbkIyTixrQkFBVSxDQUFDLENBQUQsQ0FBVixDQUFjQyxZQUFkLENBQTJCLFVBQTNCLEVBQXVDcEMsUUFBUSxDQUFDbFIsSUFBVCxDQUFjeUksR0FBckQ7QUFFQSxZQUFJOEssUUFBUSxHQUFHckMsUUFBUSxDQUFDbFIsSUFBVCxDQUFjd1QsU0FBN0I7QUFBQSxZQUNBQyxhQUFhLEdBQUcsSUFEaEI7O0FBRUEsWUFBSUYsUUFBSixFQUFjO0FBQ1ZFLHVCQUFhLEdBQUdDLFdBQVcsQ0FBRUgsUUFBRixDQUEzQjtBQUNIOztBQUNELFlBQUksQ0FBQ0UsYUFBTCxFQUFvQjtBQUNoQkosb0JBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY2xKLE1BQWQ7QUFDSCxTQUZELE1BRUs7QUFDRGtKLG9CQUFVLENBQUMsQ0FBRCxDQUFWLENBQWNDLFlBQWQsQ0FBMkIsV0FBM0IsRUFBd0NHLGFBQXhDO0FBQ0FKLG9CQUFVLENBQUMsQ0FBRCxDQUFWLENBQWMvSyxTQUFkLENBQXdCNkIsTUFBeEIsQ0FBK0IsYUFBL0I7QUFDSDtBQUNKO0FBQ0osS0E3QkU7QUE4QkhhLFNBQUssRUFBRSxlQUFTQSxNQUFULEVBQWU7QUFDbEJ4UCxhQUFPLENBQUNDLEdBQVIsQ0FBWXVQLE1BQVo7QUFDQTBILDJCQUFxQjtBQUN4QjtBQWpDRSxHQUFQO0FBbUNIO0FBQ00sU0FBU3ZGLG1CQUFULENBQTZCb0IsQ0FBN0IsRUFBZ0M1SSxRQUFoQyxFQUEwQzlELGFBQTFDLEVBQTBEO0FBRTdELE1BQUcsQ0FBQzhELFFBQUQsSUFBYSxDQUFDQSxRQUFRLENBQUNELE1BQTFCLEVBQWlDO0FBQzdCLFdBQU8sS0FBUDtBQUNIOztBQUNELE1BQUlnSCxTQUFTLEdBQUd4SCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IscUJBQXhCLENBQWhCLENBTDZELENBTTdEOztBQUNBLE1BQUk1RCw2Q0FBQyxDQUFDZ04sQ0FBRCxDQUFELENBQUt6QixTQUFMLEtBQ0F2TCw2Q0FBQyxDQUFDZ04sQ0FBRCxDQUFELENBQUtvRixXQUFMLEVBREEsSUFFQXBTLDZDQUFDLENBQUNnTixDQUFELENBQUQsQ0FBSyxDQUFMLEVBQVEzQixZQUZaLEVBRTBCO0FBQ2xCMUgsWUFBUSxDQUFDQyxjQUFULENBQXdCLHFCQUF4QixFQUErQ21ELFNBQS9DLENBQXlEc0QsR0FBekQsQ0FBNkQscUJBQTdELEVBRGtCLENBRWxCOztBQUNBLFFBQUlnSSxhQUFhLEdBQUdqTyxRQUFRLENBQUNrTyxJQUFULENBQWUsVUFBVXBYLE9BQVYsRUFBbUI7QUFFbEQsYUFBTyxDQUFDQSxPQUFPLENBQUNxUixJQUFULElBQWlCLENBQUNyUixPQUFPLENBQUNmLElBQWpDO0FBQ0gsS0FIbUIsQ0FBcEI7O0FBS0EsUUFBSWtZLGFBQUosRUFBbUI7QUFDZnBZLGFBQU8sQ0FBQ0MsR0FBUixDQUFZc0QsS0FBSyxDQUFDK1UsZ0JBQWxCLEVBQW9DLHFCQUFwQztBQUNBLFVBQUlDLFNBQVMsR0FBR3RWLElBQUksQ0FBQ3VWLEtBQUwsQ0FBV3ZDLFlBQVksQ0FBQ3dDLE9BQWIsQ0FBcUIsTUFBckIsQ0FBWCxDQUFoQjtBQUNBMVksWUFBTSxDQUFDNEQsSUFBUCxDQUFZSixLQUFLLENBQUMrVSxnQkFBbEIsRUFBb0M7QUFBRTlYLFlBQUksRUFBRytYLFNBQVMsQ0FBQzlXLEVBQW5CO0FBQXVCNEssaUJBQVMsRUFBRWhHLGFBQWEsQ0FBQzVFLEVBQWhEO0FBQW9ESCxtQkFBVyxFQUFFK0UsYUFBYSxDQUFDL0U7QUFBL0UsT0FBcEM7QUFDSDtBQUNSLEdBZkQsTUFlSztBQUNEb0ksWUFBUSxDQUFDQyxjQUFULENBQXdCLHFCQUF4QixFQUErQ21ELFNBQS9DLENBQXlENkIsTUFBekQsQ0FBZ0UscUJBQWhFO0FBQ0g7QUFDSjtBQUNNLFNBQVMwQyx3QkFBVCxDQUFtQ2xILFFBQW5DLEVBQTZDOUQsYUFBN0MsRUFBNkQ7QUFFaEUsTUFBRyxDQUFDOEQsUUFBRCxJQUFhLENBQUNBLFFBQVEsQ0FBQ0QsTUFBMUIsRUFBaUM7QUFDN0IsV0FBTyxLQUFQO0FBQ0g7O0FBRUQsTUFBSWtPLGFBQWEsR0FBR2pPLFFBQVEsQ0FBQ2tPLElBQVQsQ0FBZSxVQUFVcFgsT0FBVixFQUFtQjtBQUVsRCxXQUFPLENBQUNBLE9BQU8sQ0FBQ3FSLElBQVQsSUFBaUIsQ0FBQ3JSLE9BQU8sQ0FBQ2YsSUFBakM7QUFDSCxHQUhtQixDQUFwQjs7QUFLQSxNQUFJa1ksYUFBSixFQUFtQjtBQUNmcFksV0FBTyxDQUFDQyxHQUFSLENBQVlzRCxLQUFLLENBQUMrVSxnQkFBbEIsRUFBb0MsMEJBQXBDO0FBQ0EsUUFBSUMsU0FBUyxHQUFHdFYsSUFBSSxDQUFDdVYsS0FBTCxDQUFXdkMsWUFBWSxDQUFDd0MsT0FBYixDQUFxQixNQUFyQixDQUFYLENBQWhCO0FBQ0ExWSxVQUFNLENBQUM0RCxJQUFQLENBQVlKLEtBQUssQ0FBQytVLGdCQUFsQixFQUFvQztBQUFFOVgsVUFBSSxFQUFHK1gsU0FBUyxDQUFDOVcsRUFBbkI7QUFBdUI0SyxlQUFTLEVBQUVoRyxhQUFhLENBQUM1RSxFQUFoRDtBQUFvREgsaUJBQVcsRUFBRStFLGFBQWEsQ0FBQy9FO0FBQS9FLEtBQXBDO0FBQ0g7QUFDSjtBQUdNLFNBQVN5RixpQkFBVCxDQUEyQk4sYUFBM0IsRUFBMEM7QUFDN0MxRyxRQUFNLENBQUM0RCxJQUFQLENBQVlKLEtBQUssQ0FBQ21WLG1CQUFsQixFQUF1Q2pTLGFBQXZDO0FBQ0EsU0FBTyxLQUFQO0FBQ0g7QUFFTSxTQUFTN0IsY0FBVCxDQUF3QnhDLE9BQXhCLEVBQWlDcUIsSUFBakMsRUFBd0M7QUFDM0MsTUFBSW9CLFNBQVMsR0FBR3pDLE9BQU8sQ0FBQ3lDLFNBQXhCO0FBQUEsTUFDSUMsS0FBSyxHQUFPMUMsT0FBTyxDQUFDMEMsS0FEeEI7QUFBQSxNQUVJQyxNQUFNLEdBQU0zQyxPQUFPLENBQUMyQyxNQUZ4QjtBQUFBLE1BR0lDLE1BQU0sR0FBTTVDLE9BQU8sQ0FBQzRDLE1BSHhCO0FBS0EsTUFBSUMsY0FBYyxHQUFHLENBQXJCO0FBQUEsTUFDSUMsS0FBSyxHQUFZLENBRHJCO0FBQUEsTUFFSUUsU0FBUyxHQUFRLENBRnJCO0FBQUEsTUFHSUMsYUFBYSxHQUFJLENBSHJCO0FBQUEsTUFJSUYsR0FBRyxHQUFjLENBSnJCO0FBQUEsTUFLSUcsS0FBSyxHQUFZLENBTHJCOztBQU9BLE1BQUlOLE1BQU0sSUFBSUgsU0FBVixJQUF1QkMsS0FBdkIsSUFBZ0NDLE1BQXBDLEVBQTRDO0FBQUEsd0JBQ2ZBLE1BQU0sQ0FBQzRJLEtBQVAsQ0FBYSxHQUFiLENBRGU7QUFBQTtBQUFBLFFBQ2xDZ0wsS0FEa0M7QUFBQSxRQUMzQkMsT0FEMkI7QUFBQSx1QkFFZjlULEtBQUssQ0FBQzZJLEtBQU4sQ0FBWSxHQUFaLENBRmU7QUFBQTtBQUFBLFFBRWxDa0wsS0FGa0M7QUFBQSxRQUUzQkMsT0FGMkI7O0FBR3hDLFFBQUlDLGNBQWMsR0FBUSxJQUFJbk4sSUFBSixDQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsSUFBYixFQUFtQitNLEtBQW5CLEVBQTBCQyxPQUExQixFQUFtQyxDQUFuQyxDQUFELENBQXdDL00sT0FBeEMsRUFBekI7QUFBQSxRQUNJbU4sYUFBYSxHQUFTLElBQUlwTixJQUFKLENBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxJQUFiLEVBQW1CaU4sS0FBbkIsRUFBMEJDLE9BQTFCLEVBQW1DLENBQW5DLENBQUQsQ0FBd0NqTixPQUF4QyxFQUR6QjtBQUdJNUcsa0JBQWMsR0FBRyxDQUFDOFQsY0FBYyxHQUFHQyxhQUFsQixJQUFrQyxJQUFsQyxHQUF5QyxFQUF6QyxHQUE4QyxFQUEvRDtBQUNBOVQsU0FBSyxHQUFZK1QsSUFBSSxDQUFDQyxLQUFMLENBQVdqVSxjQUFjLEdBQUdELE1BQTVCLENBQWpCO0FBQ0FJLGFBQVMsR0FBUTZULElBQUksQ0FBQ0MsS0FBTCxDQUFXaFUsS0FBSyxHQUFHLEdBQW5CLENBQWpCO0FBQ0FDLE9BQUcsR0FBYzhULElBQUksQ0FBQ0MsS0FBTCxDQUFXLENBQUNoVSxLQUFLLEdBQUdFLFNBQVQsSUFBc0IsR0FBakMsQ0FBakI7QUFDQUMsaUJBQWEsR0FBSTRULElBQUksQ0FBQ0MsS0FBTCxDQUFXLENBQUNoVSxLQUFLLEdBQUdFLFNBQVIsR0FBb0JELEdBQXJCLElBQTRCLEtBQXZDLENBQWpCO0FBQ1A7O0FBQ0QsTUFBSTFCLElBQUksQ0FBQzhCLE9BQUwsSUFBZ0I4RiwrQ0FBTSxDQUFDN0YsU0FBUCxDQUFpQkMsTUFBckMsRUFBNkM7QUFFekNILFNBQUssR0FBR0osS0FBSyxHQUFHRyxhQUFoQjtBQUNILEdBSEQsTUFHTSxJQUFJNUIsSUFBSSxDQUFDOEIsT0FBTCxJQUFnQjhGLCtDQUFNLENBQUM3RixTQUFQLENBQWlCRSxRQUFyQyxFQUErQztBQUNqREosU0FBSyxHQUFHSixLQUFLLEdBQUdDLEdBQVIsR0FBY0MsU0FBdEI7QUFDSDs7QUFDRCxTQUFPLENBQUVQLFNBQUYsRUFBYUMsS0FBYixFQUFvQkMsTUFBcEIsRUFBNEJDLE1BQTVCLEVBQW9DQyxjQUFwQyxFQUFvREMsS0FBcEQsRUFBMkRDLEdBQTNELEVBQWdFQyxTQUFoRSxFQUEyRUMsYUFBM0UsRUFBMEZDLEtBQTFGLENBQVA7QUFDSDtBQUVNLFNBQVM2VCxtQkFBVCxDQUE2QkMsTUFBN0IsRUFBcUNDLFFBQXJDLEVBQStDO0FBQ2xELE1BQUlDLElBQUksR0FBRztBQUNQQyxPQUFHLEVBQUU7QUFBRUMsYUFBTyxFQUFFLEdBQVg7QUFBZ0JDLFdBQUssRUFBRTtBQUF2QixLQURFO0FBRVBDLE9BQUcsRUFBRTtBQUFFRixhQUFPLEVBQUUsR0FBWDtBQUFnQkMsV0FBSyxFQUFFO0FBQXZCLEtBRkU7QUFHUEUsT0FBRyxFQUFFO0FBQUVILGFBQU8sRUFBRSxHQUFYO0FBQWdCQyxXQUFLLEVBQUU7QUFBdkIsS0FIRTtBQUlQRyxPQUFHLEVBQUU7QUFBRUosYUFBTyxFQUFFLEdBQVg7QUFBZ0JDLFdBQUssRUFBRTtBQUF2QixLQUpFO0FBS1BJLE9BQUcsRUFBRTtBQUFFTCxhQUFPLEVBQUUsR0FBWDtBQUFnQkMsV0FBSyxFQUFFO0FBQXZCLEtBTEU7QUFNUEssT0FBRyxFQUFFO0FBQUVOLGFBQU8sRUFBRSxHQUFYO0FBQWdCQyxXQUFLLEVBQUU7QUFBdkIsS0FORTtBQU9QTSxPQUFHLEVBQUU7QUFBRVAsYUFBTyxFQUFFLEdBQVg7QUFBZ0JDLFdBQUssRUFBRTtBQUF2QixLQVBFO0FBUVBPLE9BQUcsRUFBRTtBQUFFUixhQUFPLEVBQUUsR0FBWDtBQUFnQkMsV0FBSyxFQUFFO0FBQXZCLEtBUkU7QUFTUFEsT0FBRyxFQUFFO0FBQUVULGFBQU8sRUFBRSxHQUFYO0FBQWdCQyxXQUFLLEVBQUU7QUFBdkIsS0FURTtBQVVQUyxPQUFHLEVBQUU7QUFBRVYsYUFBTyxFQUFFLEdBQVg7QUFBZ0JDLFdBQUssRUFBRTtBQUF2QjtBQVZFLEdBQVg7QUFZQSxNQUFJVSxzQkFBc0IsR0FBRyxHQUE3Qjs7QUFDQSxNQUFJQyxJQUFJLEdBQUdBLElBQUksR0FBRztBQUFFWixXQUFPLEVBQUVXLHNCQUFYO0FBQW1DVixTQUFLLEVBQUU7QUFBMUMsR0FBbEI7O0FBQ0EsTUFBRyxPQUFPWSxVQUFQLElBQXFCLFdBQXhCLEVBQW9DO0FBRWhDRCxRQUFJLEdBQUdkLElBQUksQ0FBQ0QsUUFBRCxDQUFYO0FBQ0g7O0FBRUQsTUFBSUQsTUFBTSxHQUFHa0IsVUFBVSxDQUFDbEIsTUFBRCxDQUF2QjtBQUNBLE1BQUk5VCxLQUFLLEdBQUcsQ0FBQzhULE1BQU0sR0FBR2tCLFVBQVUsQ0FBQ0YsSUFBSSxDQUFDWCxLQUFOLENBQXBCLEtBQXFDLElBQUlhLFVBQVUsQ0FBQ0YsSUFBSSxDQUFDWixPQUFOLENBQVYsR0FBMkIsR0FBcEUsQ0FBWjtBQUNBLE1BQUllLEdBQUcsR0FBR2pWLEtBQUssR0FBRzhULE1BQWxCO0FBRUEsU0FBTztBQUNIQSxVQUFNLEVBQUVBLE1BREw7QUFFSG1CLE9BQUcsRUFBRUEsR0FBRyxDQUFDQyxPQUFKLENBQVksQ0FBWixDQUZGO0FBR0hsVixTQUFLLEVBQUVBLEtBQUssQ0FBQ2tWLE9BQU4sQ0FBYyxDQUFkO0FBSEosR0FBUDtBQUtILEMsQ0FHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU3RELHFCQUFULEdBQWdDO0FBQzVCLE1BQUlXLFVBQVUsR0FBR25PLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixpQkFBeEIsRUFBMkNNLHNCQUEzQyxDQUFrRSxhQUFsRSxDQUFqQjs7QUFDQSxNQUFJNE4sVUFBVSxDQUFDM04sTUFBZixFQUF1QjtBQUNuQjJOLGNBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY2xKLE1BQWQ7QUFDSDtBQUNKOztBQUNELFNBQVN1SixXQUFULENBQXNCdUMsUUFBdEIsRUFBZ0M7QUFDNUIsTUFBSTlKLE1BQU0sR0FBRyw0Q0FBYjs7QUFDQSxNQUFHQSxNQUFNLENBQUNDLElBQVAsQ0FBWTZKLFFBQVosQ0FBSCxFQUF5QjtBQUNyQixXQUFPLEtBQVA7QUFDSDs7QUFDRCxNQUFJOUosTUFBTSxHQUFHLDJDQUFiOztBQUNBLE1BQUdBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZNkosUUFBWixDQUFILEVBQXlCO0FBRXJCLFdBQU8sTUFBUDtBQUNIOztBQUNELFNBQU8sSUFBUDtBQUNIOztBQUNELFNBQVNDLDJCQUFULENBQXFDbFcsSUFBckMsRUFBMkM7QUFDdkMsTUFBSTtBQUFBLFFBQ01WLE1BRE4sR0FDaUJVLElBRGpCLENBQ01WLE1BRE47O0FBRUEsUUFBSyxDQUFDQSxNQUFOLEVBQWU7QUFDWCxZQUFNLElBQUk4UixLQUFKLENBQVUsSUFBVixDQUFOO0FBQ0g7O0FBQ0QsV0FBTyxJQUFQO0FBQ0gsR0FORCxDQU1FLE9BQU9wRyxLQUFQLEVBQWM7QUFFWixXQUFPLEtBQVA7QUFDSDtBQUNKOztBQUVELFNBQVM0RyxtQkFBVCxDQUE4QjVSLElBQTlCLEVBQXFDO0FBRWpDLE1BQUltVyxPQUFPLEdBQUdELDJCQUEyQixDQUFDbFcsSUFBRCxDQUF6Qzs7QUFDQSxNQUFJLENBQUNtVyxPQUFMLEVBQWM7QUFDVjdKLFNBQUssQ0FBQyxpQ0FBRCxDQUFMO0FBQ0EsV0FBTyxLQUFQO0FBQ0g7O0FBQ0QsTUFBSSxPQUFPOEosaUJBQVAsSUFBNEIsV0FBNUIsSUFBMkNBLGlCQUEvQyxFQUFrRTtBQUU5RHBXLFFBQUksQ0FBQ3FXLG1CQUFMLEdBQTJCRCxpQkFBM0I7QUFDSDs7QUFFRCxNQUFJRSxNQUFNLEdBQUduWSwrQ0FBTSxDQUFDbVIsTUFBUCxDQUFjTSxLQUFkLEtBQXdCLGVBQXJDO0FBQ0EsU0FBT25MLEtBQUssQ0FBQzZSLE1BQUQsRUFBUztBQUNqQjFGLFVBQU0sRUFBRSxNQURTO0FBRWpCQyxRQUFJLEVBQUVwUyxJQUFJLENBQUNDLFNBQUwsQ0FBZXNCLElBQWYsQ0FGVztBQUdqQjhRLFdBQU8sRUFBRTtBQUNMLHNCQUFnQjtBQURYO0FBSFEsR0FBVCxDQUFMLENBT05DLElBUE0sQ0FPRCxVQUFBQyxHQUFHO0FBQUEsV0FBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxHQVBGLEVBUU5GLElBUk0sQ0FRRCxVQUFBRyxRQUFRLEVBQUk7QUFFZDFWLFdBQU8sQ0FBQ0MsR0FBUixDQUFheVYsUUFBYixFQUF3Qm9GLE1BQXhCOztBQUNBLFFBQUlwRixRQUFRLENBQUNDLElBQVQsSUFBaUIsR0FBckIsRUFBMEI7QUFFdEIsWUFBTSxJQUFJQyxLQUFKLENBQVUsaUNBQVYsQ0FBTjtBQUNIOztBQUVELFdBQU9GLFFBQVEsQ0FBQ2xSLElBQWhCO0FBQ0gsR0FqQk0sV0FrQkEsVUFBQWdMLEtBQUssRUFBSTtBQUNaeFAsV0FBTyxDQUFDQyxHQUFSLENBQVl1UCxLQUFaLEVBQW1CLGNBQW5CO0FBQ0EsV0FBTyxLQUFQO0FBQ0gsR0FyQk0sQ0FBUDtBQXNCSCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFJQSxTQUFTK0csZUFBVCxDQUEwQnhXLE1BQTFCLEVBQWtDcUQsV0FBbEMsRUFBK0M7QUFFM0NyRCxRQUFNLENBQUM0SCxFQUFQLENBQVVwRSxLQUFLLENBQUN3WCxnQkFBaEIsRUFBa0MsVUFBQXZXLElBQUksRUFBSTtBQUN0QztBQUNBcEIsZUFBVyxDQUFDTixLQUFaLENBQWtCdUYsUUFBbEIsQ0FBMkI3Ryw2REFBYSxDQUFFZ0QsSUFBSSxDQUFDaEUsSUFBUCxDQUF4QztBQUNILEdBSEQ7QUFLQVQsUUFBTSxDQUFDNEgsRUFBUCxDQUFVcEUsS0FBSyxDQUFDeVgsaUJBQWhCLEVBQW1DLFVBQUF4VyxJQUFJLEVBQUk7QUFDdkM7QUFDQXBCLGVBQVcsQ0FBQ04sS0FBWixDQUFrQnVGLFFBQWxCLENBQTJCMUcsZ0VBQWdCLENBQUU2QyxJQUFJLENBQUNoRSxJQUFQLENBQTNDO0FBQ0gsR0FIRDtBQUtBVCxRQUFNLENBQUM0SCxFQUFQLENBQVVwRSxLQUFLLENBQUMwWCxnQkFBaEIsRUFBa0MsVUFBQXpXLElBQUksRUFBSTtBQUV0Q3hFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZc0QsS0FBSyxDQUFDMFgsZ0JBQWxCLEVBQW9DelcsSUFBcEM7QUFGc0MsUUFHaENoRSxJQUhnQyxHQUc2QmdFLElBSDdCLENBR2hDaEUsSUFIZ0M7QUFBQSxRQUcxQjBhLEtBSDBCLEdBRzZCMVcsSUFIN0IsQ0FHMUIwVyxLQUgwQjtBQUFBLFFBR25CamEsT0FIbUIsR0FHNkJ1RCxJQUg3QixDQUduQnZELE9BSG1CO0FBQUEsUUFHVm1KLEtBSFUsR0FHNkI1RixJQUg3QixDQUdWNEYsS0FIVTtBQUFBLFFBR0hlLFVBSEcsR0FHNkIzRyxJQUg3QixDQUdIMkcsVUFIRztBQUFBLFFBR1M1RSxPQUhULEdBRzZCL0IsSUFIN0IsQ0FHUytCLE9BSFQ7QUFBQSxRQUdrQitGLE1BSGxCLEdBRzZCOUgsSUFIN0IsQ0FHa0I4SCxNQUhsQjtBQUl0QyxRQUFJaU0sU0FBUyxHQUFLdFYsSUFBSSxDQUFDdVYsS0FBTCxDQUFXdkMsWUFBWSxDQUFDd0MsT0FBYixDQUFxQixNQUFyQixDQUFYLENBQWxCO0FBQUEsUUFDSTBDLFdBQVcsR0FBR2xGLFlBQVksQ0FBQ3dDLE9BQWIsQ0FBcUIsUUFBckIsQ0FEbEI7O0FBR0EsUUFDSUYsU0FBUyxJQUNUQSxTQUFTLENBQUM5VyxFQUFWLElBQWdCakIsSUFEaEIsSUFFQStYLFNBQVMsQ0FBQ3hVLE1BQVYsQ0FBaUJDLFdBQWpCLElBQWdDa1gsS0FGaEMsSUFHQTVPLE1BQU0sSUFBSTZPLFdBSmQsRUFLSztBQUNELGFBQU8sS0FBUDtBQUNIOztBQUNEL1gsZUFBVyxDQUFDTixLQUFaLENBQWtCdUYsUUFBbEIsQ0FBNEJsSCxrRUFBa0IsQ0FBQztBQUFFakIsVUFBSSxFQUFHcVksU0FBUyxDQUFDOVcsRUFBVixJQUFnQmpCLElBQXpCO0FBQWdDb0osYUFBTyxFQUFFM0ksT0FBekM7QUFBa0RtSixXQUFLLEVBQUxBLEtBQWxEO0FBQXlEZSxnQkFBVSxFQUFWQSxVQUF6RDtBQUFxRTVFLGFBQU8sRUFBUEE7QUFBckUsS0FBRCxDQUE5QztBQUNBLFdBQU8sS0FBUDtBQUVILEdBbEJEO0FBbUJBeEcsUUFBTSxDQUFDNEgsRUFBUCxDQUFVcEUsS0FBSyxDQUFDNlgsZUFBaEIsRUFBaUMsVUFBQTVXLElBQUksRUFBSTtBQUFBLFFBRS9CMFcsS0FGK0IsR0FFWjFXLElBRlksQ0FFL0IwVyxLQUYrQjtBQUFBLFFBRXhCM1UsT0FGd0IsR0FFWi9CLElBRlksQ0FFeEIrQixPQUZ3QjtBQUdyQyxRQUFJZ1MsU0FBUyxHQUFLdFYsSUFBSSxDQUFDdVYsS0FBTCxDQUFXdkMsWUFBWSxDQUFDd0MsT0FBYixDQUFxQixNQUFyQixDQUFYLENBQWxCOztBQUVBLFFBQUlGLFNBQVMsQ0FBQ3hVLE1BQVYsQ0FBaUJDLFdBQWpCLElBQWdDa1gsS0FBcEMsRUFBMkM7QUFDdkMsYUFBTyxLQUFQO0FBQ0gsS0FGRCxNQUVLO0FBRUQsVUFBR0csYUFBSCxFQUFpQjtBQUNiQyxvQkFBWSxDQUFDRCxhQUFELENBQVo7QUFDSDs7QUFDRCxVQUFJRSxTQUFTLEdBQUc3UixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBaEI7QUFDQSxVQUFHNFIsU0FBUyxDQUFDck8sWUFBVixDQUF1QixTQUF2QixLQUFxQzNHLE9BQXhDLEVBQ0FnVixTQUFTLENBQUN6TyxTQUFWLENBQW9Cc0QsR0FBcEIsQ0FBd0IsTUFBeEIsRUFQQyxDQVFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsVUFBSWlMLGFBQWEsR0FBR3BHLFVBQVUsQ0FBQyxZQUFXO0FBQ3RDLFlBQUlzRyxTQUFTLEdBQUc3UixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBaEI7QUFDQSxZQUFHNFIsU0FBUyxDQUFDck8sWUFBVixDQUF1QixTQUF2QixLQUFxQzNHLE9BQXhDLEVBQ0FnVixTQUFTLENBQUN6TyxTQUFWLENBQW9CNkIsTUFBcEIsQ0FBMkIsTUFBM0I7QUFDSCxPQUo2QixFQUkzQixJQUoyQixDQUE5QjtBQUtBLGFBQU8sS0FBUDtBQUNIO0FBQ0osR0EzQkQ7QUE2QkE1TyxRQUFNLENBQUM0SCxFQUFQLENBQVVwRSxLQUFLLENBQUNpWSxlQUFoQixFQUFpQyxVQUFBaFgsSUFBSSxFQUFJO0FBRXJDd0gsVUFBTSxDQUFDQyxRQUFQLENBQWdCOEosSUFBaEIsR0FBdUJwVCwrQ0FBTSxDQUFDaUksVUFBUCxDQUFrQkMsR0FBekM7QUFDSCxHQUhEO0FBS0E5SyxRQUFNLENBQUM0SCxFQUFQLENBQVVwRSxLQUFLLENBQUNrWSx5QkFBaEIsRUFBMkMsVUFBQWpYLElBQUksRUFBSTtBQUUvQ3BCLGVBQVcsQ0FBQ04sS0FBWixDQUFrQnVGLFFBQWxCLENBQTRCeEcsMkVBQTJCLEVBQXZEO0FBQ0gsR0FIRDtBQUtBOUIsUUFBTSxDQUFDNEgsRUFBUCxDQUFVcEUsS0FBSyxDQUFDbVkseUJBQWhCLEVBQTJDLFVBQUFsWCxJQUFJLEVBQUk7QUFFL0MsUUFBSXhDLFFBQVEsR0FBR3dDLElBQUksQ0FBQ3hDLFFBQXBCO0FBQ0FoQyxXQUFPLENBQUNDLEdBQVIsQ0FBWStCLFFBQVosRUFBc0J1QixLQUFLLENBQUNtWSx5QkFBNUI7QUFDQXRZLGVBQVcsQ0FBQ04sS0FBWixDQUFrQnVGLFFBQWxCLENBQTJCdEcsOERBQWMsQ0FBQztBQUFFa0gsV0FBSyxFQUFFLElBQVQ7QUFBZXpFLFVBQUksRUFBRXhDO0FBQXJCLEtBQUQsQ0FBekM7QUFDSCxHQUxEO0FBT0FqQyxRQUFNLENBQUM0SCxFQUFQLENBQVVwRSxLQUFLLENBQUNvWSw0QkFBaEIsRUFBOEMsVUFBQW5YLElBQUksRUFBSTtBQUVsRHhFLFdBQU8sQ0FBQ0MsR0FBUixDQUFhdUUsSUFBYixFQUFtQmpCLEtBQUssQ0FBQ29ZLDRCQUF6QjtBQUZrRCxRQUk1Q25iLElBSjRDLEdBSVNnRSxJQUpULENBSTVDaEUsSUFKNEM7QUFBQSxRQUl0QzBhLEtBSnNDLEdBSVMxVyxJQUpULENBSXRDMFcsS0FKc0M7QUFBQSxRQUkvQmphLE9BSitCLEdBSVN1RCxJQUpULENBSS9CdkQsT0FKK0I7QUFBQSxRQUl0Qm1KLEtBSnNCLEdBSVM1RixJQUpULENBSXRCNEYsS0FKc0I7QUFBQSxRQUlmZSxVQUplLEdBSVMzRyxJQUpULENBSWYyRyxVQUplO0FBQUEsUUFJSDVFLE9BSkcsR0FJUy9CLElBSlQsQ0FJSCtCLE9BSkc7QUFLbEQsUUFBSWdTLFNBQVMsR0FBR3RWLElBQUksQ0FBQ3VWLEtBQUwsQ0FBV3ZDLFlBQVksQ0FBQ3dDLE9BQWIsQ0FBcUIsTUFBckIsQ0FBWCxDQUFoQjtBQUNBLFFBQUltRCxXQUFXLEdBQUc7QUFBRTFiLFVBQUksRUFBR3FZLFNBQVMsQ0FBQzlXLEVBQVYsSUFBZ0JqQixJQUF6QjtBQUFnQ29KLGFBQU8sRUFBRTNJLE9BQXpDO0FBQWtEbUosV0FBSyxFQUFMQSxLQUFsRDtBQUF5RGUsZ0JBQVUsRUFBVkEsVUFBekQ7QUFBcUU1RSxhQUFPLEVBQVBBO0FBQXJFLEtBQWxCO0FBQ0FuRCxlQUFXLENBQUNOLEtBQVosQ0FBa0J1RixRQUFsQixDQUE0QmxILGtFQUFrQixDQUFDeWEsV0FBRCxDQUE5Qzs7QUFFQSxRQUFJblYsYUFBYSxtQ0FBUWpDLElBQUksQ0FBQ3BDLE9BQWI7QUFBc0JnRyxZQUFNLEVBQUU7QUFBOUIsTUFBakI7O0FBQ0FoRixlQUFXLENBQUNOLEtBQVosQ0FBa0J1RixRQUFsQixDQUEyQmxHLDZEQUFhLENBQUNzRSxhQUFELENBQXhDO0FBQ0FWLGlEQUFDLENBQUNDLEtBQUYsQ0FBUWdCLEtBQVI7QUFDQSxXQUFPLEtBQVA7QUFDSCxHQWJEO0FBZUFqSCxRQUFNLENBQUM0SCxFQUFQLENBQVVwRSxLQUFLLENBQUNzWSxrQ0FBaEIsRUFBb0QsVUFBQXJYLElBQUksRUFBSTtBQUV4RHVCLGlEQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1Qk8sSUFBdkIsQ0FBNEIsZUFBNUIsRUFBNkN3VixJQUE3QyxDQUFrRHRYLElBQUksQ0FBQ3ZELE9BQXZEO0FBQ0E4RSxpREFBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJDLEtBQXZCLENBQTZCO0FBQ3pCQyxpQkFBVyxFQUFFLEtBRFk7QUFFekJDLGdCQUFVLEVBQUUsS0FGYTtBQUd6QkMsZUFBUyxFQUFFO0FBSGMsS0FBN0I7QUFLQSxXQUFPLEtBQVA7QUFDSCxHQVREO0FBVUgsQzs7Ozs7Ozs7Ozs7O0FDbGpCRDtBQUFBO0FBQUEsSUFBSTNGLElBQUksR0FBRyxJQUFYOztBQUNBLElBQUksT0FBT3FVLE9BQVAsS0FBb0IsV0FBeEIsRUFBcUM7QUFDakNyVSxNQUFJLEdBQUd5QyxJQUFJLENBQUN1VixLQUFMLENBQVd2QyxZQUFZLENBQUN3QyxPQUFiLENBQXFCLE1BQXJCLENBQVgsQ0FBUDtBQUNIOztBQUVEO0FBQ2UsMkVBQWdDO0FBQUEsTUFBdEIxVixLQUFzQix1RUFBZHZDLElBQWM7QUFBQSxNQUFSc2EsTUFBUTs7QUFDM0MsVUFBUUEsTUFBTSxDQUFDNWEsSUFBZjtBQUNJLFNBQUtDLHVEQUFJLENBQUNNLElBQUwsQ0FBVUMsV0FBZjtBQUNJLGFBQU9vYSxNQUFNLENBQUN4YSxPQUFkOztBQUNKO0FBQ0ksYUFBT3lDLEtBQVA7QUFKUjtBQU1ILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkQsSUFBSWYsUUFBUSxHQUFHO0FBQ1hpSCxPQUFLLEVBQUUsS0FESTtBQUVYekUsTUFBSSxFQUFFO0FBRkssQ0FBZjtBQUtBO0FBQ2UsMkVBQW9DO0FBQUEsTUFBMUJ6QixLQUEwQix1RUFBbEJmLFFBQWtCO0FBQUEsTUFBUjhZLE1BQVE7O0FBQy9DLFVBQVFBLE1BQU0sQ0FBQzVhLElBQWY7QUFDSSxTQUFLQyx1REFBSSxDQUFDOEIsT0FBTCxDQUFhQyxjQUFsQjtBQUNJLGFBQU80WSxNQUFNLENBQUN4YSxPQUFkOztBQUVKLFNBQUtILHVEQUFJLENBQUM4QixPQUFMLENBQWFJLGNBQWxCO0FBRUksVUFBRyxDQUFDVSxLQUFLLENBQUN5QixJQUFOLENBQVc2VCxJQUFYLENBQWdCLFVBQUFqVyxPQUFPO0FBQUEsZUFBSUEsT0FBTyxDQUFDWCxFQUFSLEtBQWVxWixNQUFNLENBQUN4YSxPQUFQLENBQWVvRyxVQUFsQztBQUFBLE9BQXZCLENBQUosRUFBeUU7QUFDckV1RixnQkFBUSxDQUFDQyxNQUFUO0FBQ0g7O0FBQ0QsVUFBSTZQLFdBQVcsR0FBR2haLEtBQUssQ0FBQ3lCLElBQU4sQ0FBV0MsR0FBWCxDQUFnQixVQUFBckMsT0FBTyxFQUFJO0FBQ3pDLFlBQUdBLE9BQU8sQ0FBQ1gsRUFBUixLQUFlcVosTUFBTSxDQUFDeGEsT0FBUCxDQUFlb0csVUFBakMsRUFBNkM7QUFDM0MsaURBQVl0RSxPQUFaLEdBQXdCMFksTUFBTSxDQUFDeGEsT0FBL0I7QUFDRDs7QUFDRCxlQUFPOEIsT0FBUDtBQUNILE9BTGlCLENBQWxCO0FBTUEsNkNBQWFXLEtBQWI7QUFBb0J5QixZQUFJLEVBQUV1WDtBQUExQjs7QUFFSjtBQUNJLGFBQU9oWixLQUFQO0FBbEJSO0FBb0JILEM7Ozs7Ozs7Ozs7OztBQzNCRDtBQUFBO0FBQUEsU0FBU2laLFlBQVQsR0FBd0I7QUFDdEI7QUFDRSxRQUFJQyxPQUFPLEdBQUcsU0FBZCxDQURGLENBRUU7O0FBQ0EsUUFBSUMsSUFBSSxHQUFHQyxTQUFTLENBQUNDLFVBQXJCO0FBQ0EsUUFBSUMsSUFBSSxHQUFHRixTQUFTLENBQUNHLFNBQXJCO0FBQ0EsUUFBSUMsT0FBTyxHQUFHSixTQUFTLENBQUNLLE9BQXhCO0FBQ0EsUUFBSUMsT0FBTyxHQUFHLEtBQUtuQyxVQUFVLENBQUM2QixTQUFTLENBQUNDLFVBQVgsQ0FBN0I7QUFDQSxRQUFJTSxZQUFZLEdBQUc1RyxRQUFRLENBQUNxRyxTQUFTLENBQUNDLFVBQVgsRUFBdUIsRUFBdkIsQ0FBM0I7QUFDQSxRQUFJTyxVQUFKLEVBQWdCQyxTQUFoQixFQUEyQkMsRUFBM0IsQ0FSRixDQVNFOztBQUNBLFFBQUksQ0FBQ0QsU0FBUyxHQUFHUCxJQUFJLENBQUNyTSxPQUFMLENBQWEsT0FBYixDQUFiLEtBQXVDLENBQUMsQ0FBNUMsRUFBK0M7QUFDN0N1TSxhQUFPLElBQUksT0FBWDtBQUNBRSxhQUFPLEdBQUdKLElBQUksQ0FBQ25PLFNBQUwsQ0FBZTBPLFNBQVMsR0FBRyxDQUEzQixDQUFWOztBQUNBLFVBQUksQ0FBQ0EsU0FBUyxHQUFHUCxJQUFJLENBQUNyTSxPQUFMLENBQWEsU0FBYixDQUFiLEtBQXlDLENBQUMsQ0FBOUMsRUFBaUQ7QUFDL0N5TSxlQUFPLEdBQUdKLElBQUksQ0FBQ25PLFNBQUwsQ0FBZTBPLFNBQVMsR0FBRyxDQUEzQixDQUFWO0FBQ0Q7QUFDRixLQWhCSCxDQWlCRTs7O0FBQ0EsUUFBSSxDQUFDQSxTQUFTLEdBQUdQLElBQUksQ0FBQ3JNLE9BQUwsQ0FBYSxLQUFiLENBQWIsS0FBcUMsQ0FBQyxDQUExQyxFQUE2QztBQUMzQ3VNLGFBQU8sSUFBSSxPQUFYO0FBQ0FFLGFBQU8sR0FBR0osSUFBSSxDQUFDbk8sU0FBTCxDQUFlME8sU0FBUyxHQUFHLENBQTNCLENBQVY7QUFDRCxLQUhELENBSUE7QUFKQSxTQUtLLElBQUksQ0FBQ0EsU0FBUyxHQUFHUCxJQUFJLENBQUNyTSxPQUFMLENBQWEsS0FBYixDQUFiLEtBQXFDLENBQUMsQ0FBMUMsRUFBNkM7QUFDaER1TSxlQUFPLElBQUksZ0JBQVg7QUFDQUUsZUFBTyxHQUFHSixJQUFJLENBQUNuTyxTQUFMLENBQWUwTyxTQUFTLEdBQUcsQ0FBM0IsQ0FBVjtBQUNELE9BSEksQ0FJTDtBQUpLLFdBS0EsSUFBSSxDQUFDQSxTQUFTLEdBQUdQLElBQUksQ0FBQ3JNLE9BQUwsQ0FBYSxNQUFiLENBQWIsS0FBc0MsQ0FBQyxDQUEzQyxFQUE4QztBQUNqRHVNLGlCQUFPLElBQUksNkJBQVg7QUFDQUUsaUJBQU8sR0FBR0osSUFBSSxDQUFDbk8sU0FBTCxDQUFlME8sU0FBUyxHQUFHLENBQTNCLENBQVY7QUFDRCxTQUhJLENBSUw7QUFKSyxhQUtBLElBQUksQ0FBQ0EsU0FBUyxHQUFHUCxJQUFJLENBQUNyTSxPQUFMLENBQWEsS0FBYixDQUFiLEtBQXFDLENBQUMsQ0FBMUMsRUFBNkM7QUFDaER1TSxtQkFBTyxJQUFJLFFBQVg7QUFDQUUsbUJBQU8sR0FBR0osSUFBSSxDQUFDbk8sU0FBTCxDQUFlME8sU0FBUyxHQUFHLENBQTNCLENBQVY7QUFDRCxXQUhJLENBSUw7QUFKSyxlQUtBLElBQUksQ0FBQ0EsU0FBUyxHQUFHUCxJQUFJLENBQUNyTSxPQUFMLENBQWEsUUFBYixDQUFiLEtBQXdDLENBQUMsQ0FBN0MsRUFBZ0Q7QUFDbkR1TSxxQkFBTyxJQUFJLFFBQVg7QUFDQUUscUJBQU8sR0FBR0osSUFBSSxDQUFDbk8sU0FBTCxDQUFlME8sU0FBUyxHQUFHLENBQTNCLENBQVY7QUFDRCxhQUhJLENBSUw7QUFKSyxpQkFLQSxJQUFJLENBQUNBLFNBQVMsR0FBR1AsSUFBSSxDQUFDck0sT0FBTCxDQUFhLFFBQWIsQ0FBYixLQUF3QyxDQUFDLENBQTdDLEVBQWdEO0FBQ25EdU0sdUJBQU8sSUFBSSxRQUFYO0FBQ0FFLHVCQUFPLEdBQUdKLElBQUksQ0FBQ25PLFNBQUwsQ0FBZTBPLFNBQVMsR0FBRyxDQUEzQixDQUFWOztBQUNBLG9CQUFJLENBQUNBLFNBQVMsR0FBR1AsSUFBSSxDQUFDck0sT0FBTCxDQUFhLFNBQWIsQ0FBYixLQUF5QyxDQUFDLENBQTlDLEVBQWlEO0FBQy9DeU0seUJBQU8sR0FBR0osSUFBSSxDQUFDbk8sU0FBTCxDQUFlME8sU0FBUyxHQUFHLENBQTNCLENBQVY7QUFDRDtBQUNGLGVBTkksQ0FPTDtBQVBLLG1CQVFBLElBQUksQ0FBQ0EsU0FBUyxHQUFHUCxJQUFJLENBQUNyTSxPQUFMLENBQWEsU0FBYixDQUFiLEtBQXlDLENBQUMsQ0FBOUMsRUFBaUQ7QUFDcER1TSx5QkFBTyxJQUFJLFNBQVg7QUFDQUUseUJBQU8sR0FBR0osSUFBSSxDQUFDbk8sU0FBTCxDQUFlME8sU0FBUyxHQUFHLENBQTNCLENBQVY7QUFDRCxpQkFISSxDQUlMO0FBSksscUJBS0EsSUFBSVAsSUFBSSxDQUFDck0sT0FBTCxDQUFhLFVBQWIsS0FBNEIsQ0FBQyxDQUFqQyxFQUFvQztBQUN2Q3VNLDJCQUFPLElBQUksNkJBQVg7QUFDQUUsMkJBQU8sR0FBR0osSUFBSSxDQUFDbk8sU0FBTCxDQUFlbU8sSUFBSSxDQUFDck0sT0FBTCxDQUFhLEtBQWIsSUFBc0IsQ0FBckMsQ0FBVjtBQUNELG1CQUhJLENBSUw7QUFKSyx1QkFLQSxJQUFJLENBQUMyTSxVQUFVLEdBQUdOLElBQUksQ0FBQ3BPLFdBQUwsQ0FBaUIsR0FBakIsSUFBd0IsQ0FBdEMsS0FBNEMyTyxTQUFTLEdBQUdQLElBQUksQ0FBQ3BPLFdBQUwsQ0FBaUIsR0FBakIsQ0FBeEQsQ0FBSixFQUFvRjtBQUN2RnNPLDZCQUFPLEdBQUdGLElBQUksQ0FBQ25PLFNBQUwsQ0FBZXlPLFVBQWYsRUFBMkJDLFNBQTNCLENBQVY7QUFDQUgsNkJBQU8sR0FBR0osSUFBSSxDQUFDbk8sU0FBTCxDQUFlME8sU0FBUyxHQUFHLENBQTNCLENBQVY7O0FBQ0EsMEJBQUlMLE9BQU8sQ0FBQ08sV0FBUixNQUF5QlAsT0FBTyxDQUFDUSxXQUFSLEVBQTdCLEVBQW9EO0FBQ2xEUiwrQkFBTyxHQUFHSixTQUFTLENBQUNLLE9BQXBCO0FBQ0Q7QUFDRixxQkFuRUgsQ0FvRUU7OztBQUNBLFFBQUksQ0FBQ0ssRUFBRSxHQUFHSixPQUFPLENBQUN6TSxPQUFSLENBQWdCLEdBQWhCLENBQU4sS0FBK0IsQ0FBQyxDQUFwQyxFQUF1Q3lNLE9BQU8sR0FBR0EsT0FBTyxDQUFDdk8sU0FBUixDQUFrQixDQUFsQixFQUFxQjJPLEVBQXJCLENBQVY7QUFDdkMsUUFBSSxDQUFDQSxFQUFFLEdBQUdKLE9BQU8sQ0FBQ3pNLE9BQVIsQ0FBZ0IsR0FBaEIsQ0FBTixLQUErQixDQUFDLENBQXBDLEVBQXVDeU0sT0FBTyxHQUFHQSxPQUFPLENBQUN2TyxTQUFSLENBQWtCLENBQWxCLEVBQXFCMk8sRUFBckIsQ0FBVjtBQUN2QyxRQUFJLENBQUNBLEVBQUUsR0FBR0osT0FBTyxDQUFDek0sT0FBUixDQUFnQixHQUFoQixDQUFOLEtBQStCLENBQUMsQ0FBcEMsRUFBdUN5TSxPQUFPLEdBQUdBLE9BQU8sQ0FBQ3ZPLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBcUIyTyxFQUFyQixDQUFWO0FBQ3ZDSCxnQkFBWSxHQUFHNUcsUUFBUSxDQUFDLEtBQUsyRyxPQUFOLEVBQWUsRUFBZixDQUF2Qjs7QUFDQSxRQUFJTyxLQUFLLENBQUNOLFlBQUQsQ0FBVCxFQUF5QjtBQUN2QkQsYUFBTyxHQUFHLEtBQUtuQyxVQUFVLENBQUM2QixTQUFTLENBQUNDLFVBQVgsQ0FBekI7QUFDQU0sa0JBQVksR0FBRzVHLFFBQVEsQ0FBQ3FHLFNBQVMsQ0FBQ0MsVUFBWCxFQUF1QixFQUF2QixDQUF2QjtBQUNELEtBNUVILENBOEVFOzs7QUFDQSxRQUFJYSxFQUFFLEdBQUdoQixPQUFUO0FBQ0EsUUFBSWlCLGFBQWEsR0FBRyxDQUFDO0FBQ25CQyxPQUFDLEVBQUUsWUFEZ0I7QUFFbkJDLE9BQUMsRUFBRTtBQUZnQixLQUFELEVBSXBCO0FBQ0VELE9BQUMsRUFBRSxhQURMO0FBRUVDLE9BQUMsRUFBRTtBQUZMLEtBSm9CLEVBUXBCO0FBQ0VELE9BQUMsRUFBRSxXQURMO0FBRUVDLE9BQUMsRUFBRTtBQUZMLEtBUm9CLEVBWXBCO0FBQ0VELE9BQUMsRUFBRSxXQURMO0FBRUVDLE9BQUMsRUFBRTtBQUZMLEtBWm9CLEVBZ0JwQjtBQUNFRCxPQUFDLEVBQUUsZUFETDtBQUVFQyxPQUFDLEVBQUU7QUFGTCxLQWhCb0IsRUFvQnBCO0FBQ0VELE9BQUMsRUFBRSxxQkFETDtBQUVFQyxPQUFDLEVBQUU7QUFGTCxLQXBCb0IsRUF3QnBCO0FBQ0VELE9BQUMsRUFBRSxZQURMO0FBRUVDLE9BQUMsRUFBRTtBQUZMLEtBeEJvQixFQTRCcEI7QUFDRUQsT0FBQyxFQUFFLGNBREw7QUFFRUMsT0FBQyxFQUFFO0FBRkwsS0E1Qm9CLEVBZ0NwQjtBQUNFRCxPQUFDLEVBQUUsWUFETDtBQUVFQyxPQUFDLEVBQUU7QUFGTCxLQWhDb0IsRUFvQ3BCO0FBQ0VELE9BQUMsRUFBRSxZQURMO0FBRUVDLE9BQUMsRUFBRTtBQUZMLEtBcENvQixFQXdDcEI7QUFDRUQsT0FBQyxFQUFFLFlBREw7QUFFRUMsT0FBQyxFQUFFO0FBRkwsS0F4Q29CLEVBNENwQjtBQUNFRCxPQUFDLEVBQUUsZ0JBREw7QUFFRUMsT0FBQyxFQUFFO0FBRkwsS0E1Q29CLEVBZ0RwQjtBQUNFRCxPQUFDLEVBQUUsWUFETDtBQUVFQyxPQUFDLEVBQUU7QUFGTCxLQWhEb0IsRUFvRHBCO0FBQ0VELE9BQUMsRUFBRSxjQURMO0FBRUVDLE9BQUMsRUFBRTtBQUZMLEtBcERvQixFQXdEcEI7QUFDRUQsT0FBQyxFQUFFLFNBREw7QUFFRUMsT0FBQyxFQUFFO0FBRkwsS0F4RG9CLEVBNERwQjtBQUNFRCxPQUFDLEVBQUUsVUFETDtBQUVFQyxPQUFDLEVBQUU7QUFGTCxLQTVEb0IsRUFnRXBCO0FBQ0VELE9BQUMsRUFBRSxRQURMO0FBRUVDLE9BQUMsRUFBRTtBQUZMLEtBaEVvQixFQW9FcEI7QUFDRUQsT0FBQyxFQUFFLE9BREw7QUFFRUMsT0FBQyxFQUFFO0FBRkwsS0FwRW9CLEVBd0VwQjtBQUNFRCxPQUFDLEVBQUUsS0FETDtBQUVFQyxPQUFDLEVBQUU7QUFGTCxLQXhFb0IsRUE0RXBCO0FBQ0VELE9BQUMsRUFBRSxVQURMO0FBRUVDLE9BQUMsRUFBRTtBQUZMLEtBNUVvQixFQWdGcEI7QUFDRUQsT0FBQyxFQUFFLFFBREw7QUFFRUMsT0FBQyxFQUFFO0FBRkwsS0FoRm9CLEVBb0ZwQjtBQUNFRCxPQUFDLEVBQUUsS0FETDtBQUVFQyxPQUFDLEVBQUU7QUFGTCxLQXBGb0IsRUF3RnBCO0FBQ0VELE9BQUMsRUFBRSxNQURMO0FBRUVDLE9BQUMsRUFBRTtBQUZMLEtBeEZvQixFQTRGcEI7QUFDRUQsT0FBQyxFQUFFLE1BREw7QUFFRUMsT0FBQyxFQUFFO0FBRkwsS0E1Rm9CLEVBZ0dwQjtBQUNFRCxPQUFDLEVBQUUsTUFETDtBQUVFQyxPQUFDLEVBQUU7QUFGTCxLQWhHb0IsRUFvR3BCO0FBQ0VELE9BQUMsRUFBRSxZQURMO0FBRUVDLE9BQUMsRUFBRTtBQUZMLEtBcEdvQixDQUFwQjs7QUF5R0EsU0FBSyxJQUFJM2IsRUFBVCxJQUFleWIsYUFBZixFQUE4QjtBQUM1QixVQUFJRyxFQUFFLEdBQUdILGFBQWEsQ0FBQ3piLEVBQUQsQ0FBdEI7O0FBQ0EsVUFBSTRiLEVBQUUsQ0FBQ0QsQ0FBSCxDQUFLRSxJQUFMLENBQVVqQixJQUFWLENBQUosRUFBcUI7QUFDbkJZLFVBQUUsR0FBR0ksRUFBRSxDQUFDRixDQUFSO0FBQ0E7QUFDRDtBQUNGOztBQUNELFFBQUlJLFNBQVMsR0FBR3RCLE9BQWhCOztBQUNBLFFBQUksVUFBVXFCLElBQVYsQ0FBZUwsRUFBZixDQUFKLEVBQXdCO0FBQ3RCTSxlQUFTLEdBQUcsZUFBZTNNLElBQWYsQ0FBb0JxTSxFQUFwQixFQUF3QixDQUF4QixDQUFaO0FBQ0FBLFFBQUUsR0FBRyxTQUFMO0FBQ0Q7O0FBQ0QsWUFBUUEsRUFBUjtBQUNFLFdBQUssVUFBTDtBQUNFTSxpQkFBUyxHQUFHLHlCQUF5QjNNLElBQXpCLENBQThCeUwsSUFBOUIsRUFBb0MsQ0FBcEMsQ0FBWjtBQUNBOztBQUVGLFdBQUssU0FBTDtBQUNFa0IsaUJBQVMsR0FBRyxzQkFBc0IzTSxJQUF0QixDQUEyQnlMLElBQTNCLEVBQWlDLENBQWpDLENBQVo7QUFDQTs7QUFFRixXQUFLLEtBQUw7QUFDRWtCLGlCQUFTLEdBQUcseUJBQXlCM00sSUFBekIsQ0FBOEJzTCxJQUE5QixDQUFaO0FBQ0FxQixpQkFBUyxHQUFHQSxTQUFTLENBQUMsQ0FBRCxDQUFULEdBQWUsR0FBZixHQUFxQkEsU0FBUyxDQUFDLENBQUQsQ0FBOUIsR0FBb0MsR0FBcEMsSUFBMkNBLFNBQVMsQ0FBQyxDQUFELENBQVQsR0FBZSxDQUExRCxDQUFaO0FBQ0E7QUFaSjtBQWNEO0FBRUQsU0FBTztBQUNMaEIsV0FBTyxFQUFFQSxPQUFPLENBQUNpQixRQUFSLEVBREo7QUFFTEMsdUJBQW1CLEVBQUVmLFlBQVksQ0FBQ2MsUUFBYixFQUZoQjtBQUdMRSxrQkFBYyxFQUFFakIsT0FBTyxDQUFDZSxRQUFSLEVBSFg7QUFJTFAsTUFBRSxFQUFFQSxFQUFFLENBQUNPLFFBQUgsRUFKQztBQUtMRCxhQUFTLEVBQUVBLFNBQVMsQ0FBQ0MsUUFBVjtBQUxOLEdBQVA7QUFPRDs7QUFDRCxJQUFJLE9BQU8zSSxPQUFQLEtBQW9CLFdBQXhCLEVBQXFDO0FBQ25Db0IsY0FBWSxDQUFDQyxPQUFiLENBQXFCLFFBQXJCLEVBQStCalQsSUFBSSxDQUFDQyxTQUFMLENBQWU4WSxZQUFZLEVBQTNCLENBQS9CO0FBQ0Q7O0FBQ2MsU0FBUzJCLG1CQUFULEdBQXFEO0FBQUEsTUFBeEI1YSxLQUF3Qix1RUFBaEJpWixZQUFZLEVBQUk7QUFDbEUsU0FBT2paLEtBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNuT0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBLElBQU0yUixPQUFPLEdBQUdrSiw2REFBZSxDQUFDO0FBQzVCemEsUUFBTSxFQUFJd2Esa0RBRGtCO0FBRTVCdFosVUFBUSxFQUFFQSxxREFGa0I7QUFHNUJ0RSxRQUFNLEVBQUk4ZCxrREFIa0I7QUFJNUJ6WixPQUFLLEVBQUswWixnREFKa0I7QUFLNUIxYixTQUFPLEVBQUdtQyxtREFBT0E7QUFMVyxDQUFELENBQS9CO0FBT2VtUSxzRUFBZixFOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQUE7QUFDZSxTQUFTbUosYUFBVCxHQUE4QztBQUFBLE1BQXZCOWEsS0FBdUIsdUVBQWYsSUFBZTtBQUFBLE1BQVIrWCxNQUFROztBQUN6RCxVQUFRQSxNQUFNLENBQUM1YSxJQUFmO0FBQ0ksU0FBS0MsdURBQUksQ0FBQ0MsT0FBTCxDQUFhQyxhQUFsQjtBQUNJLGFBQU95YSxNQUFNLENBQUN4YSxPQUFkOztBQUNKO0FBQ0ksYUFBT3lDLEtBQVA7QUFKUjtBQU1ILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BEO0FBQ0E7QUFDQTtBQUNBLElBQUlnYixlQUFlLEdBQUcsRUFBdEI7QUFDQTtBQUNBO0FBQ2UsMkVBQTJDO0FBQUEsTUFBakNoYixLQUFpQyx1RUFBekJnYixlQUF5QjtBQUFBLE1BQVJqRCxNQUFROztBQUN4RCxVQUFRQSxNQUFNLENBQUM1YSxJQUFmO0FBQ0UsU0FBS0MsdURBQUksQ0FBQ1csT0FBTCxDQUFhWSxlQUFsQjtBQUNFLGFBQU9xQixLQUFLLENBQUMwQixHQUFOLENBQVcsVUFBQXFKLElBQUksRUFBSTtBQUN4QixZQUFHQSxJQUFJLENBQUN0TixJQUFMLENBQVVpQixFQUFWLElBQWdCcVosTUFBTSxDQUFDeGEsT0FBMUIsRUFBbUM7QUFDakMsaURBQVl3TixJQUFaO0FBQWtCdE4sZ0JBQUksa0NBQVNzTixJQUFJLENBQUN0TixJQUFkO0FBQW9CZ0ssb0JBQU0sRUFBRztBQUE3QjtBQUF0QjtBQUNEOztBQUNELGlDQUFZc0QsSUFBWjtBQUNELE9BTE0sQ0FBUDs7QUFNRixTQUFLM04sdURBQUksQ0FBQ1csT0FBTCxDQUFhYyxrQkFBbEI7QUFDSSxhQUFPbUIsS0FBSyxDQUFDMEIsR0FBTixDQUFXLFVBQUFxSixJQUFJLEVBQUk7QUFDeEIsWUFBR0EsSUFBSSxDQUFDdE4sSUFBTCxDQUFVaUIsRUFBVixJQUFnQnFaLE1BQU0sQ0FBQ3hhLE9BQTFCLEVBQW1DO0FBQ2pDLGlEQUFZd04sSUFBWjtBQUFrQnROLGdCQUFJLGtDQUFTc04sSUFBSSxDQUFDdE4sSUFBZDtBQUFvQmdLLG9CQUFNLEVBQUc7QUFBN0I7QUFBdEI7QUFDRDs7QUFDRCxpQ0FBWXNELElBQVo7QUFDRCxPQUxNLENBQVA7O0FBT0osU0FBSzNOLHVEQUFJLENBQUNzQyxJQUFMLENBQVVDLHdCQUFmO0FBQ0UsYUFBT0ssS0FBSyxDQUFDMEIsR0FBTixDQUFXLFVBQUFxSixJQUFJLEVBQUk7QUFDeEIsWUFBR0EsSUFBSSxDQUFDck0sRUFBTCxLQUFZcVosTUFBTSxDQUFDeGEsT0FBdEIsRUFBK0I7QUFDN0IsaURBQVl3TixJQUFaO0FBQWtCdEgsb0JBQVEsRUFBRztBQUE3QjtBQUNEOztBQUNELCtDQUFZc0gsSUFBWjtBQUFrQnRILGtCQUFRLEVBQUc7QUFBN0I7QUFDRCxPQUxNLENBQVA7O0FBTUYsU0FBS3JHLHVEQUFJLENBQUNXLE9BQUwsQ0FBYUMsY0FBbEI7QUFDRSxhQUFPK1osTUFBTSxDQUFDeGEsT0FBZDs7QUFDRixTQUFLSCx1REFBSSxDQUFDVyxPQUFMLENBQWFJLFdBQWxCO0FBQ0UsYUFBTzZCLEtBQUssQ0FBQzBCLEdBQU4sQ0FBVyxVQUFBOEIsT0FBTyxFQUFJO0FBQzNCLFlBQUdBLE9BQU8sQ0FBQ0MsUUFBUixLQUFxQixJQUF4QixFQUE4QjtBQUM1QixpREFBWUQsT0FBWjtBQUFxQnRGLG1CQUFPLCtCQUFRc0YsT0FBTyxDQUFDdEYsT0FBaEIsSUFBeUI2WixNQUFNLENBQUN4YSxPQUFoQztBQUE1QjtBQUNEOztBQUNELGVBQU9pRyxPQUFQO0FBQ0QsT0FMTSxDQUFQOztBQU1GLFNBQUtwRyx1REFBSSxDQUFDVyxPQUFMLENBQWFnQiwrQkFBbEI7QUFDRSxhQUFPaUIsS0FBSyxDQUFDMEIsR0FBTixDQUFXLFVBQUE4QixPQUFPLEVBQUk7QUFDM0IsWUFBR0EsT0FBTyxDQUFDQyxRQUFSLEtBQXFCLElBQXhCLEVBQThCO0FBQzVCLGNBQUkyRCxRQUFRLEdBQUc1RCxPQUFPLENBQUN0RixPQUF2QjtBQUNBa0osa0JBQVEsR0FBR0EsUUFBUSxDQUFDMUYsR0FBVCxDQUFjLFVBQUF4RCxPQUFPLEVBQUk7QUFBRSxtREFBWUEsT0FBWjtBQUFxQnFSLGtCQUFJLEVBQUU7QUFBM0I7QUFBbUMsV0FBOUQsQ0FBWDtBQUNBLGlEQUFZL0wsT0FBWjtBQUFxQnRGLG1CQUFPLEVBQUdrSjtBQUEvQjtBQUNEOztBQUNELGVBQU81RCxPQUFQO0FBQ0QsT0FQTSxDQUFQOztBQVFGLFNBQUtwRyx1REFBSSxDQUFDVyxPQUFMLENBQWFNLHNCQUFsQjtBQUNFLGFBQU8yQixLQUFLLENBQUMwQixHQUFOLENBQVcsVUFBQThCLE9BQU8sRUFBSTtBQUMzQixZQUFHQSxPQUFPLENBQUM5RSxFQUFSLEtBQWVxWixNQUFNLENBQUN4YSxPQUFQLENBQWVpRyxPQUFqQyxFQUEwQztBQUN4QyxpREFBWUEsT0FBWjtBQUFxQnRGLG1CQUFPLCtCQUFRc0YsT0FBTyxDQUFDdEYsT0FBaEIsSUFBeUI2WixNQUFNLENBQUN4YSxPQUFoQztBQUE1QjtBQUNEOztBQUNELGVBQU9pRyxPQUFQO0FBQ0QsT0FMTSxDQUFQOztBQU9GLFNBQUtwRyx1REFBSSxDQUFDVyxPQUFMLENBQWFTLFVBQWxCO0FBQ0UsVUFBSXljLFNBQVMsR0FBRyxLQUFoQjtBQUNBaGUsYUFBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNBLFVBQUlnZSxRQUFRLEdBQUdsYixLQUFLLENBQUMwQixHQUFOLENBQVcsVUFBQThCLE9BQU8sRUFBSTtBQUNuQyxZQUFJLENBQUN5WCxTQUFELElBQWN6WCxPQUFPLENBQUNqRixXQUF0QixJQUFxQ2lGLE9BQU8sQ0FBQ2pGLFdBQVIsQ0FBb0I0YyxRQUFwQixDQUE2QnBELE1BQU0sQ0FBQ3hhLE9BQVAsQ0FBZWdCLFdBQTVDLENBQXpDLEVBQWtHO0FBQ2hHMGMsbUJBQVMsR0FBRyxJQUFaO0FBQ0EsaURBQVl6WCxPQUFaO0FBQXFCQyxvQkFBUSxFQUFHO0FBQWhDO0FBQ0Q7O0FBQ0QsK0NBQVlELE9BQVo7QUFBcUJDLGtCQUFRLEVBQUc7QUFBaEM7QUFDRCxPQU5jLENBQWY7O0FBT0EsVUFBSXdYLFNBQUosRUFBZTtBQUNiLGVBQU9DLFFBQVA7QUFDRDs7QUFDRCxhQUFPbGIsS0FBUDs7QUFDRjtBQUNFLGFBQU9BLEtBQVA7QUFoRUo7QUFrRUQsQzs7Ozs7Ozs7Ozs7QUMxRUQsVUFBVSxtQkFBTyxDQUFDLHlKQUE4RTtBQUNoRywwQkFBMEIsbUJBQU8sQ0FBQyxrT0FBb0g7O0FBRXRKOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7OztBQ2xCQSxVQUFVLG1CQUFPLENBQUMseUpBQThFO0FBQ2hHLDBCQUEwQixtQkFBTyxDQUFDLG9PQUFxSDs7QUFFdko7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0M7Ozs7Ozs7Ozs7O0FDbEJBLFVBQVUsbUJBQU8sQ0FBQyx5SkFBOEU7QUFDaEcsMEJBQTBCLG1CQUFPLENBQUMsNE9BQXlIOztBQUUzSjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQzs7Ozs7Ozs7Ozs7QUNsQkEsVUFBVSxtQkFBTyxDQUFDLHlKQUE4RTtBQUNoRywwQkFBMEIsbUJBQU8sQ0FBQyx3UEFBK0g7O0FBRWpLOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7OztBQ2xCQSxVQUFVLG1CQUFPLENBQUMseUpBQThFO0FBQ2hHLDBCQUEwQixtQkFBTyxDQUFDLGtQQUE0SDs7QUFFOUo7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0M7Ozs7Ozs7Ozs7O0FDbEJBLFVBQVUsbUJBQU8sQ0FBQyx5SkFBOEU7QUFDaEcsMEJBQTBCLG1CQUFPLENBQUMsNE9BQXlIOztBQUUzSjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQzs7Ozs7Ozs7Ozs7QUNsQkEsVUFBVSxtQkFBTyxDQUFDLHlKQUE4RTtBQUNoRywwQkFBMEIsbUJBQU8sQ0FBQyxrUEFBNEg7O0FBRTlKOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7OztBQ2xCQSxVQUFVLG1CQUFPLENBQUMseUpBQThFO0FBQ2hHLDBCQUEwQixtQkFBTyxDQUFDLHdPQUF1SDs7QUFFeko7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0M7Ozs7Ozs7Ozs7O0FDbEJBLFVBQVUsbUJBQU8sQ0FBQyxzSkFBMkU7QUFDN0YsMEJBQTBCLG1CQUFPLENBQUMseU5BQStHOztBQUVqSjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQzs7Ozs7Ozs7Ozs7QUNsQkEsZSIsImZpbGUiOiJqcy9pbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC5qc1wiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHcmVhdCBWaWJlc1xcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvR3JlYXRfVmliZXMvR3JlYXRWaWJlcy1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXVsaVxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvTXVsaS9NdWxpLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXJjaGl2by1NZWRpdW1cXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0FyY2hpdm8vQXJjaGl2by1NZWRpdW0udHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCZW5jaE5pbmUtUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvQmVuY2hOaW5lL0JlbmNoTmluZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2F3YXJhYmktTWluY2hvLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L1Nhd2FyYWJpX01pbmNoby9TYXdhcmFiaU1pbmNoby1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG4uYmctY2hhdC10ZW1hbGF0ZSB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ud3JhcHBlci1wYWdlLWNoYXQge1xcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuLndyYXBwZXItcGFnZS1jaGF0OmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDA7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5lcnJvciB7XFxuICBjb2xvcjogI2ZmMzU0NztcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR3JlYXQgVmliZXNcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0dyZWF0X1ZpYmVzL0dyZWF0VmliZXMtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk11bGlcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L011bGkvTXVsaS1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkFyY2hpdm8tTWVkaXVtXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9BcmNoaXZvL0FyY2hpdm8tTWVkaXVtLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmVuY2hOaW5lLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0JlbmNoTmluZS9CZW5jaE5pbmUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNhd2FyYWJpLU1pbmNoby1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9TYXdhcmFiaV9NaW5jaG8vU2F3YXJhYmlNaW5jaG8tUmVndWxhci50dGZcXFwiKTtcXG59XFxuLmNvbXBvbmVudC1saXN0LWVtb2ppIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHJpZ2h0OiA1MCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGhlaWdodDogMDtcXG59XFxuLmNvbXBvbmVudC1saXN0LWVtb2ppOmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDA7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jb21wb25lbnQtbGlzdC1lbW9qaS5maXJzdC1zaG93IHtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLW5hbWU6IHRhZGE7XFxufVxcbi5jb21wb25lbnQtbGlzdC1lbW9qaS5zaG93IHtcXG4gIHZpc2liaWxpdHk6IHVuc2V0O1xcbiAgaGVpZ2h0OiB1bnNldDtcXG4gIGJvdHRvbTogMTAwJTtcXG4gIGxlZnQ6IDIwcHg7XFxuICByaWdodDogMjBweDtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5jb21wb25lbnQtZW1vamkge1xcbiAgd2lkdGg6IDM0cHg7XFxuICBoZWlnaHQ6IDM0cHg7XFxuICBmbG9hdDogbGVmdDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAyNHB4LzEgXFxcIkhFUk8gSWNvbnNcXFwiO1xcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgY29sb3I6ICMwZDQ3YTE7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkdyZWF0IFZpYmVzXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9HcmVhdF9WaWJlcy9HcmVhdFZpYmVzLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNdWxpXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9NdWxpL011bGktVmFyaWFibGVGb250X3dnaHQudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmNoaXZvLU1lZGl1bVxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvQXJjaGl2by9BcmNoaXZvLU1lZGl1bS50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJlbmNoTmluZS1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9CZW5jaE5pbmUvQmVuY2hOaW5lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTYXdhcmFiaS1NaW5jaG8tUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvU2F3YXJhYmlfTWluY2hvL1Nhd2FyYWJpTWluY2hvLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbi5jb21wb25lbnQtaGVhZC1pbmZvIC51c2VyLWFjdGl2ZS1jaGF0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcXG4gIG1pbi1oZWlnaHQ6IDc1cHg7XFxufVxcbi5jb21wb25lbnQtaGVhZC1pbmZvIC51c2VyLWFjdGl2ZS1jaGF0IC5zdGF0ZS1hdmF0YXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIG1pbi13aWR0aDogNDBweDtcXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2Yzc1N2Q7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG59XFxuLmNvbXBvbmVudC1oZWFkLWluZm8gLnVzZXItYWN0aXZlLWNoYXQgLnN0YXRlLWF2YXRhciBpbWcge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtaW4td2lkdGg6IDQwcHg7XFxuICBtaW4taGVpZ2h0OiA0MHB4O1xcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyAudXNlci1hY3RpdmUtY2hhdCAudGV4dC1pbmZvIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogN3B4IDdweCA3cHggNTVweDtcXG4gIGNvbG9yOiAjMGQ0N2ExO1xcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyAudXNlci1hY3RpdmUtY2hhdCAudGV4dC1pbmZvIC5uYW1lIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyAudXNlci1hY3RpdmUtY2hhdCAudGV4dC1pbmZvIC50aW1lLW9ubGluZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjNmM3NTdkO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuLmNvbXBvbmVudC1oZWFkLWluZm8gLnVzZXItYWN0aXZlLWNoYXQgLnRleHQtaW5mbyAudGltZS1vbmxpbmUuYWN0aXZlLW5vdyB7XFxuICBjb2xvcjogIzhiYzM0YTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHcmVhdCBWaWJlc1xcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvR3JlYXRfVmliZXMvR3JlYXRWaWJlcy1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXVsaVxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvTXVsaS9NdWxpLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXJjaGl2by1NZWRpdW1cXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0FyY2hpdm8vQXJjaGl2by1NZWRpdW0udHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCZW5jaE5pbmUtUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvQmVuY2hOaW5lL0JlbmNoTmluZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2F3YXJhYmktTWluY2hvLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L1Nhd2FyYWJpX01pbmNoby9TYXdhcmFiaU1pbmNoby1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiA1cHggNDVweCAwIDEwMHB4O1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCB0ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbiAgbWluLWhlaWdodDogMzBweDtcXG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgcmVzaXplOiBub25lO1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCB0ZXh0YXJlYTpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICMwZDQ3YTE7XFxuICBjb2xvcjogIzBkNDdhMTtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgdGV4dGFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCA+IGkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTE7XFxuICBib3R0b206IDIwcHg7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBjb2xvcjogIzBkNmVmZDtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmhlcm8taWNvbi5jYWxlbmRhciB7XFxuICBsZWZ0OiA1cHg7XFxufVxcbi5jb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0IC5oZXJvLWljb24uZW1vdGljb24ge1xcbiAgbGVmdDogMzVweDtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmhlcm8taWNvbi5maWxlIHtcXG4gIGxlZnQ6IDY1cHg7XFxufVxcbi5jb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0IC5oZXJvLWljb24uc2VuZCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB6LWluZGV4OiAxO1xcbiAgcmlnaHQ6IDEwcHg7XFxufVxcbi5jb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0IC5oZXJvLWljb24ucmVhY3Qge1xcbiAgei1pbmRleDogLTE7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcmlnaHQ6IDBweDtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmltYWdlLWJsb2NrIC5yZW1vdmUtaW1hZ2Uge1xcbiAgbWF4LWhlaWdodDogMTAwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCAuaW1hZ2UtYmxvY2sgLnJlbW92ZS1pbWFnZTphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDVweDtcXG4gIHJpZ2h0OiA1cHg7XFxuICBjb250ZW50OiBcXFwi87CFl1xcXCI7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDI0cHgvMSBcXFwiSEVSTyBJY29uc1xcXCI7XFxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxufVxcbi5jb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0IC5pbWFnZS1ibG9jayAucmVtb3ZlLWltYWdlOmhvdmVyIGltZyB7XFxuICBvcGFjaXR5OiAwLjQ7XFxufVxcbi5jb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0IC5pbWFnZS1ibG9jayAucmVtb3ZlLWltYWdlOmhvdmVyOmFmdGVyIHtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLW5hbWU6IHRhZGE7XFxufVxcbi5jb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0IC5pbWFnZS1ibG9jayBpbWcge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgb3BhY2l0eTogMC45O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHcmVhdCBWaWJlc1xcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvR3JlYXRfVmliZXMvR3JlYXRWaWJlcy1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXVsaVxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvTXVsaS9NdWxpLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXJjaGl2by1NZWRpdW1cXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0FyY2hpdm8vQXJjaGl2by1NZWRpdW0udHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCZW5jaE5pbmUtUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvQmVuY2hOaW5lL0JlbmNoTmluZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2F3YXJhYmktTWluY2hvLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L1Nhd2FyYWJpX01pbmNoby9TYXdhcmFiaU1pbmNoby1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSB7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiA3MCU7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlOWVjZWY7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBzY3JvbGxiYXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKSAjRjVGNUY1O1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluICFpbXBvcnRhbnQ7XFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTphZnRlciB7XFxuICBjbGVhcjogYm90aDtcXG4gIGNvbnRlbnQ6IFxcXCIuXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAwO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOjotbW96LXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOjotbW96LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTo6LW8tc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6Oi1vLXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLW8tYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6Oi1tcy1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTo6LW1zLXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLW1zLWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuXFxuLnRpY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1pbi13aWR0aDogMzBweDtcXG59XFxuLnRpY29udGFpbmVyIC50aWJsb2NrIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxN3B4O1xcbn1cXG4udGljb250YWluZXIgLnRpYmxvY2sgLnRpZG90IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZGI1YmQ7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogbWVyY3VyeVR5cGluZ0FuaW1hdGlvbiAxLjVzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xcbiAgYW5pbWF0aW9uOiBtZXJjdXJ5VHlwaW5nQW5pbWF0aW9uIDEuNXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDZweDtcXG4gIG1hcmdpbi1yaWdodDogNHB4O1xcbiAgd2lkdGg6IDZweDtcXG59XFxuLnRpY29udGFpbmVyIC50aWJsb2NrIC50aWRvdDpudGgtY2hpbGQoMSkge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDE1MG1zO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAyMDBtcztcXG59XFxuLnRpY29udGFpbmVyIC50aWJsb2NrIC50aWRvdDpudGgtY2hpbGQoMikge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDMwMG1zO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAzMDBtcztcXG59XFxuLnRpY29udGFpbmVyIC50aWJsb2NrIC50aWRvdDpudGgtY2hpbGQoMykge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDQ1MG1zO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiA0MDBtcztcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIG1lcmN1cnlUeXBpbmdBbmltYXRpb24ge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgfVxcbiAgMjglIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxuICB9XFxuICA0NCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxuICAuY29tcG9uZW50LWxpc3QtbWVzc2FnZSB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICB9XFxufVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5jb21wb25lbnQtbGlzdC1tZXNzYWdlIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDc1cHgpO1xcbiAgfVxcbiAgLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlIHtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gIH1cXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR3JlYXQgVmliZXNcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0dyZWF0X1ZpYmVzL0dyZWF0VmliZXMtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk11bGlcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L011bGkvTXVsaS1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkFyY2hpdm8tTWVkaXVtXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9BcmNoaXZvL0FyY2hpdm8tTWVkaXVtLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmVuY2hOaW5lLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0JlbmNoTmluZS9CZW5jaE5pbmUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNhd2FyYWJpLU1pbmNoby1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9TYXdhcmFiaV9NaW5jaG8vU2F3YXJhYmlNaW5jaG8tUmVndWxhci50dGZcXFwiKTtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLm5vbmUtcmVhZC1tZXNzYWdlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcGFkZGluZzogM3B4IDZweDtcXG4gIGJvdHRvbTogMzAlO1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xcbiAgY29sb3I6ICNlOWVjZWY7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdCB7XFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQuYWN0aXZlLW1lc3NhZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M3YzZjNjtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0LmFjdGl2ZSAuc3RhdGUtYXZhdGFyIHtcXG4gIGJvcmRlci1jb2xvcjogIzI4YTc0NTtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0LmFjdGl2ZSAuc3RhdGUtYXZhdGFyOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdCAuc3RhdGUtYXZhdGFyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtaW4td2lkdGg6IDQwcHg7XFxuICBtaW4taGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNmM3NTdkO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdCAuc3RhdGUtYXZhdGFyOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIuXFxcIjtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHotaW5kZXg6IDU7XFxuICB3aWR0aDogMTBweDtcXG4gIGhlaWdodDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRiNWJkO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdCAuc3RhdGUtYXZhdGFyIGltZyB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIG1pbi13aWR0aDogNDBweDtcXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdCAudGV4dC1pbmZvIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMCAwIDAgNTVweDtcXG4gIGNvbG9yOiAjMGQ0N2ExO1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQgLnRleHQtaW5mbyAubmFtZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdCAudGV4dC1pbmZvIC5sYXN0LW1lc3NhZ2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQuYWN0aXZlLW1lc3NhZ2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRiNWJkO1xcbiAgfVxcbiAgLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC50ZXh0LWluZm8ge1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgfVxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHcmVhdCBWaWJlc1xcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvR3JlYXRfVmliZXMvR3JlYXRWaWJlcy1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXVsaVxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvTXVsaS9NdWxpLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXJjaGl2by1NZWRpdW1cXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0FyY2hpdm8vQXJjaGl2by1NZWRpdW0udHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCZW5jaE5pbmUtUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvQmVuY2hOaW5lL0JlbmNoTmluZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2F3YXJhYmktTWluY2hvLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L1Nhd2FyYWJpX01pbmNoby9TYXdhcmFiaU1pbmNoby1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG4ubGVmdC1tZXNzYWdlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XFxufVxcbi5sZWZ0LW1lc3NhZ2UgLnJlYWQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxufVxcblxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IHtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0OmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDA7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0LnR5cGluZy1jaGF0LW1lc3NzYWdlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwYWRkaW5nLXRvcDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2FkYjViZDtcXG4gIGxlZnQ6IDUwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdC50eXBpbmctY2hhdC1tZXNzc2FnZS5zaG93IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdC50eXBpbmctY2hhdC1tZXNzc2FnZSAudHlwaW5nLW1lc3NhZ2UgLnRleHQge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBwYWRkaW5nOiAycHggMTBweCAhaW1wb3J0YW50O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cDphZnRlciB7XFxuICBjbGVhcjogYm90aDtcXG4gIGNvbnRlbnQ6IFxcXCIuXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAwO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cC5ieS1tZSAuYXZhdGFyIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAuYnktbWUgLm1lc3NhZ2UtY29udGVudCAudGV4dCB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgyMTBkZWcsICNmOGY5ZmEsICNhZGI1YmQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgyMTBkZWcsICNmOGY5ZmEsICNhZGI1YmQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoMjEwZGVnLCAjZjhmOWZhLCAjYWRiNWJkKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgyMTBkZWcsICNmOGY5ZmEsICNhZGI1YmQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjEwZGVnLCAjZjhmOWZhLCAjYWRiNWJkKSAhaW1wb3J0YW50O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cC5ieS1tZSAuRU1PSkkge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5hdmF0YXIge1xcbiAgbWF4LXdpZHRoOiA0MHB4O1xcbiAgbWF4LWhlaWdodDogNDBweDtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLmF2YXRhciBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQge1xcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAubWVzc2FnZS1jb250ZW50LnR5cGluZy1tZXNzYWdlIHtcXG4gIHBhZGRpbmctbGVmdDogMHB4O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAubWVzc2FnZS1jb250ZW50IC5JTUFHRSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQgLklNQUdFIC53cmFwcGVyLWF0dGFjaG1lbnQge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWF4LXdpZHRoOiAyMDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudCAuSU1BR0UgLndyYXBwZXItYXR0YWNobWVudCBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQgLklNQUdFIC53cmFwcGVyLWF0dGFjaG1lbnQgLmRvd25sb2FkLWZpbGUtYXR0YWNobWVudCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUlO1xcbiAgcmlnaHQ6IDUlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTJlNjtcXG4gIGNvbG9yOiAjMGQ0N2ExO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcGFkZGluZzogM3B4IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMGQ0N2ExO1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAubWVzc2FnZS1jb250ZW50IC5JTUFHRSAud3JhcHBlci1hdHRhY2htZW50IC5kb3dubG9hZC1maWxlLWF0dGFjaG1lbnQgaSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQgLkVNT0pJIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQgLnRleHQge1xcbiAgbGluZS1oZWlnaHQ6IDEuMztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmOWZhLCAjNmY0MmMxKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmOWZhLCAjNmY0MmMxKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZjlmYSwgIzZmNDJjMSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmOWZhLCAjNmY0MmMxKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZjlmYSwgIzZmNDJjMSkgIWltcG9ydGFudDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudCAudGV4dC5FTU9KSSB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAudHlwaW5nLW1lc3NhZ2UgLnRleHQge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAudHlwaW5nLW1lc3NhZ2UgLnR5cGluZy10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR3JlYXQgVmliZXNcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0dyZWF0X1ZpYmVzL0dyZWF0VmliZXMtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk11bGlcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L011bGkvTXVsaS1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkFyY2hpdm8tTWVkaXVtXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9BcmNoaXZvL0FyY2hpdm8tTWVkaXVtLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmVuY2hOaW5lLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0JlbmNoTmluZS9CZW5jaE5pbmUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNhd2FyYWJpLU1pbmNoby1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9TYXdhcmFiaV9NaW5jaG8vU2F3YXJhYmlNaW5jaG8tUmVndWxhci50dGZcXFwiKTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQge1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB3aWR0aDogMzAlO1xcbiAgc2Nyb2xsYmFyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMykgI0Y1RjVGNTtcXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbiAhaW1wb3J0YW50O1xcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0OjotbW96LXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQ6Oi1tb3otc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQ6Oi1vLXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQ6Oi1vLXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLW8tYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdDo6LW1zLXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQ6Oi1tcy1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1tcy1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0ICoge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLm15aW5mbyB7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XFxuICBtaW4taGVpZ2h0OiA3NXB4O1xcbn1cXG4ubXlpbmZvIC5hdmF0YXIgLnN0YXRlLWF2YXRhciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuLm15aW5mbyAuYXZhdGFyIC5zdGF0ZS1hdmF0YXI6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxcHg7XFxuICBsZWZ0OiAxcHg7XFxuICByaWdodDogMXB4O1xcbiAgYm90dG9tOiAxcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDJweCBkb3VibGUgIzkxNzVjYTtcXG59XFxuLm15aW5mbyAuYXZhdGFyIC5zdGF0ZS1hdmF0YXIuYWN0aXZlLW9ubGluZSB7XFxuICBib3JkZXI6IDJweCBkb3VibGUgIzAwYzg1MTtcXG59XFxuLm15aW5mbyAuYXZhdGFyIC5zdGF0ZS1hdmF0YXIgaW1nIHtcXG4gIG1heC13aWR0aDogNDBweDtcXG4gIG1heC1oZWlnaHQ6IDQwcHg7XFxufVxcbi5teWluZm8gLmF2YXRhciAubmFtZSB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgbWF4LXdpZHRoOiAyN2NoO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjb2xvcjogIzBkNDdhMTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcbiAgLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQge1xcbiAgICB3aWR0aDogNDAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuY29tcG9uZW50LXNpZGViYXItY2hhdCB7XFxuICAgIHdpZHRoOiA3NXB4O1xcbiAgfVxcbiAgLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQgLnVzZXItY2hhdCAuc3RhdGUtYXZhdGFyIHtcXG4gICAgbGVmdDogNTAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpICFpbXBvcnRhbnQ7XFxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgIWltcG9ydGFudDtcXG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgIWltcG9ydGFudDtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAubXlpbmZvIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gIH1cXG4gIC5teWluZm8gLmF2YXRhciAuc3RhdGUtYXZhdGFyIGltZyB7XFxuICAgIG1heC13aWR0aDogMzVweDtcXG4gICAgbWF4LWhlaWdodDogMzVweDtcXG4gIH1cXG4gIC5teWluZm8gLmF2YXRhciAubmFtZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkdyZWF0IFZpYmVzXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9HcmVhdF9WaWJlcy9HcmVhdFZpYmVzLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNdWxpXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9NdWxpL011bGktVmFyaWFibGVGb250X3dnaHQudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmNoaXZvLU1lZGl1bVxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvQXJjaGl2by9BcmNoaXZvLU1lZGl1bS50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJlbmNoTmluZS1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9CZW5jaE5pbmUvQmVuY2hOaW5lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTYXdhcmFiaS1NaW5jaG8tUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvU2F3YXJhYmlfTWluY2hvL1Nhd2FyYWJpTWluY2hvLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbi8qKlxcbiogZGlzcGxheVxcbiovXFxuKixcXG46YWZ0ZXIsXFxuOmJlZm9yZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46Zm9jdXMge1xcbiAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kLW5vbmUge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZC1pbmxpbmUtYmxvY2sge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kLWJsb2NrIHtcXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kLXRhYmxlIHtcXG4gIGRpc3BsYXk6IHRhYmxlICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kLXRhYmxlLXJvdyB7XFxuICBkaXNwbGF5OiB0YWJsZS1yb3cgIWltcG9ydGFudDtcXG59XFxuXFxuLmQtdGFibGUtY2VsbCB7XFxuICBkaXNwbGF5OiB0YWJsZS1jZWxsICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kLWZsZXgge1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3ggIWltcG9ydGFudDtcXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXG59XFxuXFxuLmQtaW5saW5lLWZsZXgge1xcbiAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94ICFpbXBvcnRhbnQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaXRhbGljIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYyAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubm90LWl0YWxpYyB7XFxuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcXG59XFxuXFxuLnVwcGVyY2FzZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XFxufVxcblxcbi5sb3dlcmNhc2Uge1xcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uY2FwaXRhbGl6ZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubm9ybWFsLWNhc2Uge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLnVuZGVybGluZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubGluZS10aHJvdWdoIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoICFpbXBvcnRhbnQ7XFxufVxcblxcbi5uby11bmRlcmxpbmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uZm9udC1oYWlybGluZSB7XFxuICBmb250LXdlaWdodDogMTAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mb250LXRoaW4ge1xcbiAgZm9udC13ZWlnaHQ6IDIwMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZm9udC1saWdodCB7XFxuICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mb250LW5vcm1hbCB7XFxuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mb250LW1lZGl1bSB7XFxuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mb250LXNlbWlib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcXG59XFxuXFxuLmZvbnQtYm9sZCB7XFxuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mb250LWV4dHJhYm9sZCB7XFxuICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mb250LWJsYWNrIHtcXG4gIGZvbnQtd2VpZ2h0OiA5MDAgIWltcG9ydGFudDtcXG59XFxuXFxuLnRleHQtY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRleHQtcmlnaHQge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi50ZXh0LWxlZnQge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLnZlcnRpY2FsLWFsaWduLW1pZGRsZSB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4ubWctYXV0byB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLnJvdW5kZWQtY2lyY2xlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYm9yZGVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTYgIWltcG9ydGFudDtcXG59XFxuXFxuLmJvcmRlci10b3Age1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTYgIWltcG9ydGFudDtcXG59XFxuXFxuLmJvcmRlci1yaWdodCB7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGVlMmU2ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ib3JkZXItYm90dG9tIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ib3JkZXItbGVmdCB7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZWUyZTYgIWltcG9ydGFudDtcXG59XFxuXFxuLnRleHQtY29sb3ItcmVkIHtcXG4gIGNvbG9yOiAjZjQ0MzM2O1xcbn1cXG5cXG4udGV4dC1jb2xvci1waW5rIHtcXG4gIGNvbG9yOiAjZTkxZTYzO1xcbn1cXG5cXG4udGV4dC1jb2xvci1wdXJwbGUge1xcbiAgY29sb3I6ICM5YzI3YjA7XFxufVxcblxcbi50ZXh0LWNvbG9yLWRlZXAtcHVycGxlIHtcXG4gIGNvbG9yOiAjNjczYWI3O1xcbn1cXG5cXG4udGV4dC1jb2xvci1pbmRpZ28ge1xcbiAgY29sb3I6ICMzZjUxYjU7XFxufVxcblxcbi50ZXh0LWNvbG9yLWJsdWUge1xcbiAgY29sb3I6ICMyMTk2ZjM7XFxufVxcblxcbi50ZXh0LWNvbG9yLWxpZ2h0LWJsdWUge1xcbiAgY29sb3I6ICMwM2E5ZjQ7XFxufVxcblxcbi50ZXh0LWNvbG9yLWN5YW4ge1xcbiAgY29sb3I6ICMwMGJjZDQ7XFxufVxcblxcbi50ZXh0LWNvbG9yLXRlYWwge1xcbiAgY29sb3I6ICMwMDk2ODg7XFxufVxcblxcbi50ZXh0LWNvbG9yLWdyZWVuIHtcXG4gIGNvbG9yOiAjNGNhZjUwO1xcbn1cXG5cXG4udGV4dC1jb2xvci1saWdodC1ncmVlbiB7XFxuICBjb2xvcjogIzhiYzM0YTtcXG59XFxuXFxuLnRleHQtY29sb3ItbGltZSB7XFxuICBjb2xvcjogI2NkZGMzOTtcXG59XFxuXFxuLnRleHQtY29sb3IteWVsbG93IHtcXG4gIGNvbG9yOiAjZmZlYjNiO1xcbn1cXG5cXG4udGV4dC1jb2xvci1hbWJlciB7XFxuICBjb2xvcjogI2ZmYzEwNztcXG59XFxuXFxuLnRleHQtY29sb3Itb3JhbmdlIHtcXG4gIGNvbG9yOiAjZmY5ODAwO1xcbn1cXG5cXG4udGV4dC1jb2xvci1kZWVwLW9yYW5nZSB7XFxuICBjb2xvcjogI2ZmNTcyMjtcXG59XFxuXFxuLnRleHQtY29sb3ItYnJvd24ge1xcbiAgY29sb3I6ICM3OTU1NDg7XFxufVxcblxcbi50ZXh0LWNvbG9yLWJsYWNrIHtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4udGV4dC1jb2xvci13aGl0ZSB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLnRleHQtY29sb3ItZ3JleSB7XFxuICBjb2xvcjogIzllOWU5ZTtcXG59XFxuXFxuLnRleHQtY29sb3ItYmx1ZS1ncmV5IHtcXG4gIGNvbG9yOiAjNjA3ZDhiO1xcbn1cXG5cXG4udGV4dC1jb2xvci1wcmltYXJ5LWNvbG9yLWRhcmsge1xcbiAgY29sb3I6ICMwZDQ3YTE7XFxufVxcblxcbi50ZXh0LWNvbG9yLXNlY29uZGFyeS1jb2xvciB7XFxuICBjb2xvcjogI2FhNjZjYztcXG59XFxuXFxuLnRleHQtY29sb3Itc2Vjb25kYXJ5LWNvbG9yLWRhcmsge1xcbiAgY29sb3I6ICM5OTMzY2M7XFxufVxcblxcbi50ZXh0LWNvbG9yLWRlZmF1bHQtY29sb3Ige1xcbiAgY29sb3I6ICMyYmJiYWQ7XFxufVxcblxcbi50ZXh0LWNvbG9yLWRlZmF1bHQtY29sb3ItZGFyayB7XFxuICBjb2xvcjogIzAwNjk1YztcXG59XFxuXFxuLnRleHQtY29sb3ItaW5mby1jb2xvciB7XFxuICBjb2xvcjogIzMzYjVlNTtcXG59XFxuXFxuLnRleHQtY29sb3ItaW5mby1jb2xvci1kYXJrIHtcXG4gIGNvbG9yOiAjMDA5OWNjO1xcbn1cXG5cXG4udGV4dC1jb2xvci1zdWNjZXNzLWNvbG9yIHtcXG4gIGNvbG9yOiAjMDBjODUxO1xcbn1cXG5cXG4udGV4dC1jb2xvci1zdWNjZXNzLWNvbG9yLWRhcmsge1xcbiAgY29sb3I6ICMwMDdlMzM7XFxufVxcblxcbi50ZXh0LWNvbG9yLXdhcm5pbmctY29sb3Ige1xcbiAgY29sb3I6ICNmZmJiMzM7XFxufVxcblxcbi50ZXh0LWNvbG9yLXdhcm5pbmctY29sb3ItZGFyayB7XFxuICBjb2xvcjogI2ZmODgwMDtcXG59XFxuXFxuLnRleHQtY29sb3ItZGFuZ2VyLWNvbG9yIHtcXG4gIGNvbG9yOiAjZmYzNTQ3O1xcbn1cXG5cXG4udGV4dC1jb2xvci1kYW5nZXItY29sb3ItZGFyayB7XFxuICBjb2xvcjogI2NjMDAwMDtcXG59XFxuXFxuLnRleHQtY29sb3ItZWxlZ2FudC1jb2xvciB7XFxuICBjb2xvcjogIzJlMmUyZTtcXG59XFxuXFxuLnRleHQtY29sb3ItZWxlZ2FudC1jb2xvci1kYXJrIHtcXG4gIGNvbG9yOiAjMjEyMTIxO1xcbn1cXG5cXG4udGV4dC1jb2xvci1zdHlsaXNoLWNvbG9yIHtcXG4gIGNvbG9yOiAjNGI1MTVkO1xcbn1cXG5cXG4udGV4dC1jb2xvci1zdHlsaXNoLWNvbG9yLWRhcmsge1xcbiAgY29sb3I6ICMzZTQ1NTE7XFxufVxcblxcbi50ZXh0LWNvbG9yLXVuaXF1ZS1jb2xvciB7XFxuICBjb2xvcjogIzNmNzI5YjtcXG59XFxuXFxuLnRleHQtY29sb3ItdW5pcXVlLWNvbG9yLWRhcmsge1xcbiAgY29sb3I6ICMxYzIzMzE7XFxufVxcblxcbi50ZXh0LWNvbG9yLXNwZWNpYWwtY29sb3Ige1xcbiAgY29sb3I6ICMzNzQ3NGY7XFxufVxcblxcbi50ZXh0LWNvbG9yLXNwZWNpYWwtY29sb3ItZGFyayB7XFxuICBjb2xvcjogIzI2MzIzODtcXG59XFxuXFxuLnRleHQtY29sb3ItcHJpbWFyeSB7XFxuICBjb2xvcjogIzQyODVmNDtcXG59XFxuXFxuLnRleHQtY29sb3ItZGFuZ2VyIHtcXG4gIGNvbG9yOiAjZmYzNTQ3O1xcbn1cXG5cXG4udGV4dC1jb2xvci13YXJuaW5nIHtcXG4gIGNvbG9yOiAjZmZiYjMzO1xcbn1cXG5cXG4udGV4dC1jb2xvci1zdWNjZXNzIHtcXG4gIGNvbG9yOiAjMDBjODUxO1xcbn1cXG5cXG4udGV4dC1jb2xvci1pbmZvIHtcXG4gIGNvbG9yOiAjMzNiNWU1O1xcbn1cXG5cXG4udGV4dC1jb2xvci1kZWZhdWx0IHtcXG4gIGNvbG9yOiAjMmJiYmFkO1xcbn1cXG5cXG4udGV4dC1jb2xvci1zZWNvbmRhcnkge1xcbiAgY29sb3I6ICNhYTY2Y2M7XFxufVxcblxcbi50ZXh0LWNvbG9yLWRhcmsge1xcbiAgY29sb3I6ICMyMTIxMjE7XFxufVxcblxcbi50ZXh0LWNvbG9yLWxpZ2h0IHtcXG4gIGNvbG9yOiAjZTBlMGUwO1xcbn1cXG5cXG4udGV4dC1jb2xvci1ncmV5LXgge1xcbiAgY29sb3I6ICNmOWY5Zjk7XFxufVxcblxcbi5ib3JkZXItY29sb3ItcmVkIHtcXG4gIGJvcmRlci1jb2xvcjogI2Y0NDMzNjtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1waW5rIHtcXG4gIGJvcmRlci1jb2xvcjogI2U5MWU2MztcXG59XFxuXFxuLmJvcmRlci1jb2xvci1wdXJwbGUge1xcbiAgYm9yZGVyLWNvbG9yOiAjOWMyN2IwO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWRlZXAtcHVycGxlIHtcXG4gIGJvcmRlci1jb2xvcjogIzY3M2FiNztcXG59XFxuXFxuLmJvcmRlci1jb2xvci1pbmRpZ28ge1xcbiAgYm9yZGVyLWNvbG9yOiAjM2Y1MWI1O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWJsdWUge1xcbiAgYm9yZGVyLWNvbG9yOiAjMjE5NmYzO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWxpZ2h0LWJsdWUge1xcbiAgYm9yZGVyLWNvbG9yOiAjMDNhOWY0O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWN5YW4ge1xcbiAgYm9yZGVyLWNvbG9yOiAjMDBiY2Q0O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXRlYWwge1xcbiAgYm9yZGVyLWNvbG9yOiAjMDA5Njg4O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWdyZWVuIHtcXG4gIGJvcmRlci1jb2xvcjogIzRjYWY1MDtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1saWdodC1ncmVlbiB7XFxuICBib3JkZXItY29sb3I6ICM4YmMzNGE7XFxufVxcblxcbi5ib3JkZXItY29sb3ItbGltZSB7XFxuICBib3JkZXItY29sb3I6ICNjZGRjMzk7XFxufVxcblxcbi5ib3JkZXItY29sb3IteWVsbG93IHtcXG4gIGJvcmRlci1jb2xvcjogI2ZmZWIzYjtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1hbWJlciB7XFxuICBib3JkZXItY29sb3I6ICNmZmMxMDc7XFxufVxcblxcbi5ib3JkZXItY29sb3Itb3JhbmdlIHtcXG4gIGJvcmRlci1jb2xvcjogI2ZmOTgwMDtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1kZWVwLW9yYW5nZSB7XFxuICBib3JkZXItY29sb3I6ICNmZjU3MjI7XFxufVxcblxcbi5ib3JkZXItY29sb3ItYnJvd24ge1xcbiAgYm9yZGVyLWNvbG9yOiAjNzk1NTQ4O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWJsYWNrIHtcXG4gIGJvcmRlci1jb2xvcjogIzAwMDtcXG59XFxuXFxuLmJvcmRlci1jb2xvci13aGl0ZSB7XFxuICBib3JkZXItY29sb3I6ICNmZmY7XFxufVxcblxcbi5ib3JkZXItY29sb3ItZ3JleSB7XFxuICBib3JkZXItY29sb3I6ICM5ZTllOWU7XFxufVxcblxcbi5ib3JkZXItY29sb3ItYmx1ZS1ncmV5IHtcXG4gIGJvcmRlci1jb2xvcjogIzYwN2Q4YjtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1wcmltYXJ5LWNvbG9yLWRhcmsge1xcbiAgYm9yZGVyLWNvbG9yOiAjMGQ0N2ExO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXNlY29uZGFyeS1jb2xvciB7XFxuICBib3JkZXItY29sb3I6ICNhYTY2Y2M7XFxufVxcblxcbi5ib3JkZXItY29sb3Itc2Vjb25kYXJ5LWNvbG9yLWRhcmsge1xcbiAgYm9yZGVyLWNvbG9yOiAjOTkzM2NjO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWRlZmF1bHQtY29sb3Ige1xcbiAgYm9yZGVyLWNvbG9yOiAjMmJiYmFkO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWRlZmF1bHQtY29sb3ItZGFyayB7XFxuICBib3JkZXItY29sb3I6ICMwMDY5NWM7XFxufVxcblxcbi5ib3JkZXItY29sb3ItaW5mby1jb2xvciB7XFxuICBib3JkZXItY29sb3I6ICMzM2I1ZTU7XFxufVxcblxcbi5ib3JkZXItY29sb3ItaW5mby1jb2xvci1kYXJrIHtcXG4gIGJvcmRlci1jb2xvcjogIzAwOTljYztcXG59XFxuXFxuLmJvcmRlci1jb2xvci1zdWNjZXNzLWNvbG9yIHtcXG4gIGJvcmRlci1jb2xvcjogIzAwYzg1MTtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1zdWNjZXNzLWNvbG9yLWRhcmsge1xcbiAgYm9yZGVyLWNvbG9yOiAjMDA3ZTMzO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXdhcm5pbmctY29sb3Ige1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZiYjMzO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXdhcm5pbmctY29sb3ItZGFyayB7XFxuICBib3JkZXItY29sb3I6ICNmZjg4MDA7XFxufVxcblxcbi5ib3JkZXItY29sb3ItZGFuZ2VyLWNvbG9yIHtcXG4gIGJvcmRlci1jb2xvcjogI2ZmMzU0NztcXG59XFxuXFxuLmJvcmRlci1jb2xvci1kYW5nZXItY29sb3ItZGFyayB7XFxuICBib3JkZXItY29sb3I6ICNjYzAwMDA7XFxufVxcblxcbi5ib3JkZXItY29sb3ItZWxlZ2FudC1jb2xvciB7XFxuICBib3JkZXItY29sb3I6ICMyZTJlMmU7XFxufVxcblxcbi5ib3JkZXItY29sb3ItZWxlZ2FudC1jb2xvci1kYXJrIHtcXG4gIGJvcmRlci1jb2xvcjogIzIxMjEyMTtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1zdHlsaXNoLWNvbG9yIHtcXG4gIGJvcmRlci1jb2xvcjogIzRiNTE1ZDtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1zdHlsaXNoLWNvbG9yLWRhcmsge1xcbiAgYm9yZGVyLWNvbG9yOiAjM2U0NTUxO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXVuaXF1ZS1jb2xvciB7XFxuICBib3JkZXItY29sb3I6ICMzZjcyOWI7XFxufVxcblxcbi5ib3JkZXItY29sb3ItdW5pcXVlLWNvbG9yLWRhcmsge1xcbiAgYm9yZGVyLWNvbG9yOiAjMWMyMzMxO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXNwZWNpYWwtY29sb3Ige1xcbiAgYm9yZGVyLWNvbG9yOiAjMzc0NzRmO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXNwZWNpYWwtY29sb3ItZGFyayB7XFxuICBib3JkZXItY29sb3I6ICMyNjMyMzg7XFxufVxcblxcbi5ib3JkZXItY29sb3ItcHJpbWFyeSB7XFxuICBib3JkZXItY29sb3I6ICM0Mjg1ZjQ7XFxufVxcblxcbi5ib3JkZXItY29sb3ItZGFuZ2VyIHtcXG4gIGJvcmRlci1jb2xvcjogI2ZmMzU0NztcXG59XFxuXFxuLmJvcmRlci1jb2xvci13YXJuaW5nIHtcXG4gIGJvcmRlci1jb2xvcjogI2ZmYmIzMztcXG59XFxuXFxuLmJvcmRlci1jb2xvci1zdWNjZXNzIHtcXG4gIGJvcmRlci1jb2xvcjogIzAwYzg1MTtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1pbmZvIHtcXG4gIGJvcmRlci1jb2xvcjogIzMzYjVlNTtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1kZWZhdWx0IHtcXG4gIGJvcmRlci1jb2xvcjogIzJiYmJhZDtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1zZWNvbmRhcnkge1xcbiAgYm9yZGVyLWNvbG9yOiAjYWE2NmNjO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWRhcmsge1xcbiAgYm9yZGVyLWNvbG9yOiAjMjEyMTIxO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWxpZ2h0IHtcXG4gIGJvcmRlci1jb2xvcjogI2UwZTBlMDtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1ncmV5LXgge1xcbiAgYm9yZGVyLWNvbG9yOiAjZjlmOWY5O1xcbn1cXG5cXG4uYmctY29sb3ItcmVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XFxufVxcblxcbi5iZy1jb2xvci1waW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOTFlNjM7XFxufVxcblxcbi5iZy1jb2xvci1wdXJwbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljMjdiMDtcXG59XFxuXFxuLmJnLWNvbG9yLWRlZXAtcHVycGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NzNhYjc7XFxufVxcblxcbi5iZy1jb2xvci1pbmRpZ28ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcXG59XFxuXFxuLmJnLWNvbG9yLWJsdWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcXG59XFxuXFxuLmJnLWNvbG9yLWxpZ2h0LWJsdWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzYTlmNDtcXG59XFxuXFxuLmJnLWNvbG9yLWN5YW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYmNkNDtcXG59XFxuXFxuLmJnLWNvbG9yLXRlYWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcXG59XFxuXFxuLmJnLWNvbG9yLWdyZWVuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XFxufVxcblxcbi5iZy1jb2xvci1saWdodC1ncmVlbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGJjMzRhO1xcbn1cXG5cXG4uYmctY29sb3ItbGltZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RkYzM5O1xcbn1cXG5cXG4uYmctY29sb3IteWVsbG93IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmViM2I7XFxufVxcblxcbi5iZy1jb2xvci1hbWJlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xcbn1cXG5cXG4uYmctY29sb3Itb3JhbmdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjk4MDA7XFxufVxcblxcbi5iZy1jb2xvci1kZWVwLW9yYW5nZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzIyO1xcbn1cXG5cXG4uYmctY29sb3ItYnJvd24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc5NTU0ODtcXG59XFxuXFxuLmJnLWNvbG9yLWJsYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxufVxcblxcbi5iZy1jb2xvci13aGl0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uYmctY29sb3ItZ3JleSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWU5ZTllO1xcbn1cXG5cXG4uYmctY29sb3ItYmx1ZS1ncmV5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdkOGI7XFxufVxcblxcbi5iZy1jb2xvci1wcmltYXJ5LWNvbG9yLWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkNDdhMTtcXG59XFxuXFxuLmJnLWNvbG9yLXNlY29uZGFyeS1jb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWE2NmNjO1xcbn1cXG5cXG4uYmctY29sb3Itc2Vjb25kYXJ5LWNvbG9yLWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5MzNjYztcXG59XFxuXFxuLmJnLWNvbG9yLWRlZmF1bHQtY29sb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiYmJhZDtcXG59XFxuXFxuLmJnLWNvbG9yLWRlZmF1bHQtY29sb3ItZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2OTVjO1xcbn1cXG5cXG4uYmctY29sb3ItaW5mby1jb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNiNWU1O1xcbn1cXG5cXG4uYmctY29sb3ItaW5mby1jb2xvci1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk5Y2M7XFxufVxcblxcbi5iZy1jb2xvci1zdWNjZXNzLWNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGM4NTE7XFxufVxcblxcbi5iZy1jb2xvci1zdWNjZXNzLWNvbG9yLWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2UzMztcXG59XFxuXFxuLmJnLWNvbG9yLXdhcm5pbmctY29sb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmIzMztcXG59XFxuXFxuLmJnLWNvbG9yLXdhcm5pbmctY29sb3ItZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4ODAwO1xcbn1cXG5cXG4uYmctY29sb3ItZGFuZ2VyLWNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjM1NDc7XFxufVxcblxcbi5iZy1jb2xvci1kYW5nZXItY29sb3ItZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2MwMDAwO1xcbn1cXG5cXG4uYmctY29sb3ItZWxlZ2FudC1jb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyZTJlO1xcbn1cXG5cXG4uYmctY29sb3ItZWxlZ2FudC1jb2xvci1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XFxufVxcblxcbi5iZy1jb2xvci1zdHlsaXNoLWNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YjUxNWQ7XFxufVxcblxcbi5iZy1jb2xvci1zdHlsaXNoLWNvbG9yLWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlNDU1MTtcXG59XFxuXFxuLmJnLWNvbG9yLXVuaXF1ZS1jb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y3MjliO1xcbn1cXG5cXG4uYmctY29sb3ItdW5pcXVlLWNvbG9yLWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMjMzMTtcXG59XFxuXFxuLmJnLWNvbG9yLXNwZWNpYWwtY29sb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3NDc0ZjtcXG59XFxuXFxuLmJnLWNvbG9yLXNwZWNpYWwtY29sb3ItZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYzMjM4O1xcbn1cXG5cXG4uYmctY29sb3ItcHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4NWY0O1xcbn1cXG5cXG4uYmctY29sb3ItZGFuZ2VyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjM1NDc7XFxufVxcblxcbi5iZy1jb2xvci13YXJuaW5nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmJiMzM7XFxufVxcblxcbi5iZy1jb2xvci1zdWNjZXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGM4NTE7XFxufVxcblxcbi5iZy1jb2xvci1pbmZvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzM2I1ZTU7XFxufVxcblxcbi5iZy1jb2xvci1kZWZhdWx0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYmJiYWQ7XFxufVxcblxcbi5iZy1jb2xvci1zZWNvbmRhcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhNjZjYztcXG59XFxuXFxuLmJnLWNvbG9yLWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcXG59XFxuXFxuLmJnLWNvbG9yLWxpZ2h0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxufVxcblxcbi5iZy1jb2xvci1ncmV5LXgge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcXG59XFxuXFxuLnctMjUge1xcbiAgd2lkdGg6IDI1O1xcbn1cXG5cXG4udy01MCB7XFxuICB3aWR0aDogNTA7XFxufVxcblxcbi53LTU1IHtcXG4gIHdpZHRoOiA1NTtcXG59XFxuXFxuLnctNjAge1xcbiAgd2lkdGg6IDYwO1xcbn1cXG5cXG4udy02NSB7XFxuICB3aWR0aDogNjU7XFxufVxcblxcbi53LTcwIHtcXG4gIHdpZHRoOiA3MDtcXG59XFxuXFxuLnctNzUge1xcbiAgd2lkdGg6IDc1O1xcbn1cXG5cXG4udy04MCB7XFxuICB3aWR0aDogODA7XFxufVxcblxcbi53LTg1IHtcXG4gIHdpZHRoOiA4NTtcXG59XFxuXFxuLnctOTAge1xcbiAgd2lkdGg6IDkwO1xcbn1cXG5cXG4udy05NSB7XFxuICB3aWR0aDogOTU7XFxufVxcblxcbi53LTEwMCB7XFxuICB3aWR0aDogMTAwO1xcbn1cXG5cXG4udGV4dC14cyB7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxufVxcblxcbi50ZXh0LXNtIHtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxufVxcblxcbi50ZXh0LWJhc2Uge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGV4dC1sZyB7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbn1cXG5cXG4udGV4dC14bCB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbi50ZXh0LTJ4bCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRleHQtM3hsIHtcXG4gIGZvbnQtc2l6ZTogMS44NzVyZW07XFxufVxcblxcbi50ZXh0LTR4bCB7XFxuICBmb250LXNpemU6IDIuMjVyZW07XFxufVxcblxcbi50ZXh0LTV4bCB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi50ZXh0LTZ4bCB7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbmJvZHkubmVvLXNjcm9sbCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5pbnB1dDpmb2N1cywgc2VsZWN0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cywgb3B0aW9uOmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYWFhYWE7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uYWxlcnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uYWxlcnQtaGVhZGluZyB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLmFsZXJ0LWxpbmsge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5hbGVydC1kaXNtaXNzaWJsZSB7XFxuICBwYWRkaW5nLXJpZ2h0OiA0cmVtO1xcbn1cXG4uYWxlcnQtZGlzbWlzc2libGUgLmNsb3NlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5hbGVydC1wcmltYXJ5IHtcXG4gIGNvbG9yOiAjMGE1NGMwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZWVmZjtcXG4gIGJvcmRlci1jb2xvcjogI2JiZDZmZTtcXG59XFxuLmFsZXJ0LXByaW1hcnkgLmFsZXJ0LWxpbmsge1xcbiAgY29sb3I6ICMwNzNmOTA7XFxufVxcblxcbi5hbGVydC1zZWNvbmRhcnkge1xcbiAgY29sb3I6ICM1MjU5NWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZWVmO1xcbiAgYm9yZGVyLWNvbG9yOiAjZDZkOGRiO1xcbn1cXG4uYWxlcnQtc2Vjb25kYXJ5IC5hbGVydC1saW5rIHtcXG4gIGNvbG9yOiAjM2EzZjQ0O1xcbn1cXG5cXG4uYWxlcnQtc3VjY2VzcyB7XFxuICBjb2xvcjogIzFlN2YzNDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWY0ZTk7XFxuICBib3JkZXItY29sb3I6ICNjM2U2Y2I7XFxufVxcbi5hbGVydC1zdWNjZXNzIC5hbGVydC1saW5rIHtcXG4gIGNvbG9yOiAjMTQ1NjIzO1xcbn1cXG5cXG4uYWxlcnQtaW5mbyB7XFxuICBjb2xvcjogIzExN2I4YztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2Y0ZjY7XFxuICBib3JkZXItY29sb3I6ICNiZWU1ZWI7XFxufVxcbi5hbGVydC1pbmZvIC5hbGVydC1saW5rIHtcXG4gIGNvbG9yOiAjMGI1MzVmO1xcbn1cXG5cXG4uYWxlcnQtd2FybmluZyB7XFxuICBjb2xvcjogI2MyOTMwNTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY4ZTE7XFxuICBib3JkZXItY29sb3I6ICNmZmVlYmE7XFxufVxcbi5hbGVydC13YXJuaW5nIC5hbGVydC1saW5rIHtcXG4gIGNvbG9yOiAjOTA2ZDA0O1xcbn1cXG5cXG4uYWxlcnQtZGFuZ2VyIHtcXG4gIGNvbG9yOiAjYTcyODM0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZTdlOTtcXG4gIGJvcmRlci1jb2xvcjogI2Y1YzZjYjtcXG59XFxuLmFsZXJ0LWRhbmdlciAuYWxlcnQtbGluayB7XFxuICBjb2xvcjogIzdlMWUyNztcXG59XFxuXFxuLmFsZXJ0LWxpZ2h0IHtcXG4gIGNvbG9yOiAjYmNiZGJlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gIGJvcmRlci1jb2xvcjogI2ZkZmRmZTtcXG59XFxuLmFsZXJ0LWxpZ2h0IC5hbGVydC1saW5rIHtcXG4gIGNvbG9yOiAjYTJhNGE1O1xcbn1cXG5cXG4uYWxlcnQtZGFyayB7XFxuICBjb2xvcjogIzI4MmMzMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2U3ZTg7XFxuICBib3JkZXItY29sb3I6ICNjNmM4Y2E7XFxufVxcbi5hbGVydC1kYXJrIC5hbGVydC1saW5rIHtcXG4gIGNvbG9yOiAjMTExMzE1O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWFuaW1hdGUtZHVyYXRpb246IDFzO1xcbiAgLS1hbmltYXRlLWRlbGF5OiAxcztcXG4gIC0tYW5pbWF0ZS1sb29wOiAxO1xcbn1cXG5cXG4uYW5pbWF0ZWQge1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxufVxcbi5hbmltYXRlZC5pbmZpbml0ZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxufVxcbi5hbmltYXRlZC5mYXN0ZXIge1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKCQtLWFuaW1hdGUtZHVyYXRpb24gLyAyKTtcXG59XFxuLmFuaW1hdGVkLmZhc3Qge1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKCQtLWFuaW1hdGUtZHVyYXRpb24gKiAwLjgpO1xcbn1cXG4uYW5pbWF0ZWQuc2xvdyB7XFxuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGMoJC0tYW5pbWF0ZS1kdXJhdGlvbiAqIDIpO1xcbn1cXG4uYW5pbWF0ZWQuc2xvd2VyIHtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYygkLS1hbmltYXRlLWR1cmF0aW9uICogMyk7XFxufVxcbi5hbmltYXRlZC5sb29wLTEge1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG59XFxuLmFuaW1hdGVkLmRlbGF5LTFzIHtcXG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYygkLS1hbmltYXRlLWRlbGF5ICogJGkpO1xcbn1cXG4uYW5pbWF0ZWQubG9vcC0yIHtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDI7XFxufVxcbi5hbmltYXRlZC5kZWxheS0xcyB7XFxuICBhbmltYXRpb24tZGVsYXk6IGNhbGMoJC0tYW5pbWF0ZS1kZWxheSAqICRpKTtcXG59XFxuLmFuaW1hdGVkLmxvb3AtMyB7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAzO1xcbn1cXG4uYW5pbWF0ZWQuZGVsYXktMXMge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKCQtLWFuaW1hdGUtZGVsYXkgKiAkaSk7XFxufVxcbi5hbmltYXRlZC5sb29wLTQge1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogNDtcXG59XFxuLmFuaW1hdGVkLmRlbGF5LTFzIHtcXG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYygkLS1hbmltYXRlLWRlbGF5ICogJGkpO1xcbn1cXG5cXG5AbWVkaWEgcHJpbnQsIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcXG4gIC5hbmltYXRlZCB7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMW1zICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFtcyAhaW1wb3J0YW50O1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAuYW5pbWF0ZWRbY2xhc3MqPU91dF0ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG4uYW5pbWF0ZWQtaW5pdGlhbCB7XFxuICBhbmltYXRpb24tbmFtZTogaW5pdGlhbCAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBvcmlnaW5hbGx5IGF1dGhvcmVkIGJ5IE5pY2sgUGV0dGl0IC0gaHR0cHM6Ly9naXRodWIuY29tL25pY2twZXR0aXQvZ2xpZGUgKi9cXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4wNSwgMS4wNSwgMS4wNSk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG59XFxuLnB1bHNlIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBwdWxzZTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHRhZGEge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcXG4gIH1cXG4gIDEwJSwgMjAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuOSwgMC45LCAwLjkpIHJvdGF0ZTNkKDAsIDAsIDEsIC0zZGVnKTtcXG4gIH1cXG4gIDMwJSwgNTAlLCA3MCUsIDkwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKSByb3RhdGUzZCgwLCAwLCAxLCAzZGVnKTtcXG4gIH1cXG4gIDQwJSwgNjAlLCA4MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxufVxcbi50YWRhIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiB0YWRhO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuLmZhZGVJbiB7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbkxlZnQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG4uZmFkZUluTGVmdCB7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZUluTGVmdDtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW5SaWdodCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuLmZhZGVJblJpZ2h0IHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5SaWdodDtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW5VcCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuLmZhZGVJblVwIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5VcDtcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGVPdXQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMjAwZGVnKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuLnJvdGF0ZU91dCB7XFxuICBhbmltYXRpb24tbmFtZTogcm90YXRlT3V0O1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbn1cXG5cXG4ucm90YXRlLWNpcmNsZSB7XFxuICBhbmltYXRpb246IHJvdGF0ZUNpcmNsZSA5cyBpbmZpbml0ZTtcXG59XFxuXFxuLypcXG4gQ3VzdG9tIEFuaW1hdGlvbnNcXG4gKi9cXG5Aa2V5ZnJhbWVzIHJvdGF0ZUNpcmNsZSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMjUlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gIH1cXG4gIDc1JSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBqYWNrSW5UaGVCb3gge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4xKSByb3RhdGUoMzBkZWcpO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcXG4gIH1cXG4gIDcwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDNkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbn1cXG4uamFja0luVGhlQm94IHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBqYWNrSW5UaGVCb3g7XFxufVxcblxcbi8qIG9yaWdpbmFsbHkgYXV0aG9yZWQgYnkgTmljayBQZXR0aXQgLSBodHRwczovL2dpdGh1Yi5jb20vbmlja3BldHRpdC9nbGlkZSAqL1xcbkBrZXlmcmFtZXMgcm9sbEluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtMTIwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuLnJvbGxJbiB7XFxuICBhbmltYXRpb24tbmFtZTogcm9sbEluO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHpvb21JbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuMywgMC4zLCAwLjMpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuLnpvb21JbiB7XFxuICBhbmltYXRpb24tbmFtZTogem9vbUluO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlSW5Eb3duIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuLnNsaWRlSW5Eb3duIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluRG93bjtcXG59XFxuXFxuQGtleWZyYW1lcyBmbG9hdCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zbGF0ZVkoMHB4KTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2xhdGVZKC02cHgpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zbGF0ZVkoMHB4KTtcXG4gIH1cXG59XFxuLnB1cnBsZS1ncmFkaWVudCB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0MGRlZywgI2ZmNmVjNCwgIzc4NzNmNSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjZmY2ZWM0LCAjNzg3M2Y1KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjZmY2ZWM0LCAjNzg3M2Y1KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCg0MGRlZywgI2ZmNmVjNCwgIzc4NzNmNSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MGRlZywgI2ZmNmVjNCwgIzc4NzNmNSkgIWltcG9ydGFudDtcXG59XFxuXFxuLnBlYWNoLWdyYWRpZW50IHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjZmZkODZmLCAjZmM2MjYyKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDBkZWcsICNmZmQ4NmYsICNmYzYyNjIpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDBkZWcsICNmZmQ4NmYsICNmYzYyNjIpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjZmZkODZmLCAjZmM2MjYyKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjZmZkODZmLCAjZmM2MjYyKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYXF1YS1ncmFkaWVudCB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0MGRlZywgIzIwOTZmZiwgIzA1ZmZhMykgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjMjA5NmZmLCAjMDVmZmEzKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjMjA5NmZmLCAjMDVmZmEzKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCg0MGRlZywgIzIwOTZmZiwgIzA1ZmZhMykgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MGRlZywgIzIwOTZmZiwgIzA1ZmZhMykgIWltcG9ydGFudDtcXG59XFxuXFxuLmJsdWUtZ3JhZGllbnQge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDBkZWcsICM0NWNhZmMsICMzMDNmOWYpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0MGRlZywgIzQ1Y2FmYywgIzMwM2Y5ZikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0MGRlZywgIzQ1Y2FmYywgIzMwM2Y5ZikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoNDBkZWcsICM0NWNhZmMsICMzMDNmOWYpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsICM0NWNhZmMsICMzMDNmOWYpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ob21lLXBhZ2UtZ3JhZGllbnQge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDBkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0MGRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0MGRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoNDBkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wdXJwbGUtZ3JhZGllbnQtcmdiYSB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSgyNTUsIDExMCwgMTk2LCAwLjkpLCByZ2JhKDEyMCwgMTE1LCAyNDUsIDAuOSkpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSgyNTUsIDExMCwgMTk2LCAwLjkpLCByZ2JhKDEyMCwgMTE1LCAyNDUsIDAuOSkpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMjU1LCAxMTAsIDE5NiwgMC45KSwgcmdiYSgxMjAsIDExNSwgMjQ1LCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSgyNTUsIDExMCwgMTk2LCAwLjkpLCByZ2JhKDEyMCwgMTE1LCAyNDUsIDAuOSkpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMjU1LCAxMTAsIDE5NiwgMC45KSwgcmdiYSgxMjAsIDExNSwgMjQ1LCAwLjkpKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucGVhY2gtZ3JhZGllbnQtcmdiYSB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSgyNTUsIDIxNiwgMTExLCAwLjkpLCByZ2JhKDI1MiwgOTgsIDk4LCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMjU1LCAyMTYsIDExMSwgMC45KSwgcmdiYSgyNTIsIDk4LCA5OCwgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSgyNTUsIDIxNiwgMTExLCAwLjkpLCByZ2JhKDI1MiwgOTgsIDk4LCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSgyNTUsIDIxNiwgMTExLCAwLjkpLCByZ2JhKDI1MiwgOTgsIDk4LCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDI1NSwgMjE2LCAxMTEsIDAuOSksIHJnYmEoMjUyLCA5OCwgOTgsIDAuOSkpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5hcXVhLWdyYWRpZW50LXJnYmEge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMzIsIDE1MCwgMjU1LCAwLjkpLCByZ2JhKDUsIDI1NSwgMTYzLCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMzIsIDE1MCwgMjU1LCAwLjkpLCByZ2JhKDUsIDI1NSwgMTYzLCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDMyLCAxNTAsIDI1NSwgMC45KSwgcmdiYSg1LCAyNTUsIDE2MywgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMzIsIDE1MCwgMjU1LCAwLjkpLCByZ2JhKDUsIDI1NSwgMTYzLCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDMyLCAxNTAsIDI1NSwgMC45KSwgcmdiYSg1LCAyNTUsIDE2MywgMC45KSkgIWltcG9ydGFudDtcXG59XFxuXFxuLmJsdWUtZ3JhZGllbnQtcmdiYSB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSg2OSwgMjAyLCAyNTIsIDAuOSksIHJnYmEoNDgsIDYzLCAxNTksIDAuOSkpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSg2OSwgMjAyLCAyNTIsIDAuOSksIHJnYmEoNDgsIDYzLCAxNTksIDAuOSkpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoNjksIDIwMiwgMjUyLCAwLjkpLCByZ2JhKDQ4LCA2MywgMTU5LCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSg2OSwgMjAyLCAyNTIsIDAuOSksIHJnYmEoNDgsIDYzLCAxNTksIDAuOSkpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoNjksIDIwMiwgMjUyLCAwLjkpLCByZ2JhKDQ4LCA2MywgMTU5LCAwLjkpKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYmctZ3JhZGllbnQtcHVycGxlIHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgI2ZmNmVjNCwgIzc4NzNmNSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgI2ZmNmVjNCwgIzc4NzNmNSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICNmZjZlYzQsICM3ODczZjUpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgI2ZmNmVjNCwgIzc4NzNmNSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICNmZjZlYzQsICM3ODczZjUpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5iZy1ncmFkaWVudC1wZWFjaCB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICNmZmQ4NmYsICNmYzYyNjIpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICNmZmQ4NmYsICNmYzYyNjIpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjZmZkODZmLCAjZmM2MjYyKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICNmZmQ4NmYsICNmYzYyNjIpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjZmZkODZmLCAjZmM2MjYyKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYmctZ3JhZGllbnQtYXF1YSB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICMyMDk2ZmYsICMwNWZmYTMpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICMyMDk2ZmYsICMwNWZmYTMpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjMjA5NmZmLCAjMDVmZmEzKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICMyMDk2ZmYsICMwNWZmYTMpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjMjA5NmZmLCAjMDVmZmEzKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYmctZ3JhZGllbnQtYmx1ZSB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICM0NWNhZmMsICMzMDNmOWYpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICM0NWNhZmMsICMzMDNmOWYpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjNDVjYWZjLCAjMzAzZjlmKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICM0NWNhZmMsICMzMDNmOWYpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjNDVjYWZjLCAjMzAzZjlmKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYmctZ3JhZGllbnQtaG9tZS1wYWdlIHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIRVJPIEljb25zXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9JY29uRm9udC93ZWJmb250LmVvdD92PTEuNC41N1xcXCIpO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0ljb25Gb250L3dlYmZvbnQuZW90PyNpZWZpeCZ2PTEuNC41N1xcXCIpIGZvcm1hdChcXFwiZW1iZWRkZWQtb3BlbnR5cGVcXFwiKSwgdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9JY29uRm9udC93ZWJmb250LndvZmYyP3Y9MS40LjU3XFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0ljb25Gb250L3dlYmZvbnQud29mZj92PTEuNC41N1xcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpLCB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0ljb25Gb250L3dlYmZvbnQudHRmP3Y9MS40LjU3XFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpLCB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0ljb25Gb250L3dlYmZvbnQuc3ZnP3Y9MS40LjU3XFxcIikgZm9ybWF0KFxcXCJzdmdcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbmkuaGVyby1pY29uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbn1cXG5pLmhlcm8taWNvbjpiZWZvcmUge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMjRweC8xIFxcXCJIRVJPIEljb25zXFxcIjtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYWNjb3VudC1ncm91cC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEI1OFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYWNjb3VudC1zZWFyY2gtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA5MzVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWFjY291bnQtdGllLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMENBXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1haXJwb3J0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDg0QlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYXJyb3ctZG93bi1ib2xkLWJveC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDczMFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYXJyb3ctdXAtYm9sZC1ib3gtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3MzlcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWFycm93LXVwLWJveDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2QzNcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWF1dG8tZml4OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDA2OFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYXV0by11cGxvYWQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMDY5XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1iYWxsb3QtcmVjb3VudC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEMzQVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2FsZW5kYXItY2hlY2stb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNDRcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNhbGVuZGFyLW1vbnRoOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEUxN1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2FsbC1tYWRlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDBGN1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2FyZC1hY2NvdW50LW1haWwtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBFOThcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNhcnQtcGx1czo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxMTJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNlbGxwaG9uZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxMUNcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNlbGxwaG9uZS1jb2c6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOTUxXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jZWxscGhvbmUtbWVzc2FnZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4RDNcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNlbGxwaG9uZS1uZmM6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTkwXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jZXJ0aWZpY2F0ZS1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTE4OFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2hlY2stY2lyY2xlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDVFMFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2hlY2stY2lyY2xlLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNUUxXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jbGlwcHk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTRGXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jbG9jay1jaGVjay1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEZBOVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2xvY2stb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxNTBcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNsb2NrLXN0YXJ0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDE1NVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2xvdWQtZG93bmxvYWQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBCN0RcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNyZWF0aW9uOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDY3NFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1haWwtZWRpdC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEVFNFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb246OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzY4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1hbmdyeTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNjlcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWFuZ3J5LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzZBXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1jb25mdXNlZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwREVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWNvbmZ1c2VkLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMERGXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1jb29sOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM2QlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tY29vbC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDFGM1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tY3J5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM2Q1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tY3J5LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzZEXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1kZWFkOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM2RVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tZGVhZC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDY5QlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tZGV2aWw6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzZGXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1kZXZpbC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDFGNFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tZXhjaXRlZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNzBcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWV4Y2l0ZWQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2OUNcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWZyb3duOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEY0Q1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tZnJvd24tb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGNERcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWhhcHB5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM3MVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24taGFwcHktb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxRjVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWtpc3M6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzcyXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1raXNzLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzczXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1sb2w6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjE0XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1sb2wtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyMTVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLW5ldXRyYWw6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzc0XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1uZXV0cmFsLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMUY2XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDFGMlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tcG9vcDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxRjdcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLXBvb3Atb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNzVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLXNhZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNzZcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLXNhZC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDFGOFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tdG9uZ3VlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDFGOVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tdG9uZ3VlLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzc3XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi13aW5rOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM3OFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24td2luay1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM3OVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZmlsZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyMTRcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWZpbGUtY2xvdWQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwMkFcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWZvcm0tc2VsZWN0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTQwMVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZm9ybWF0LWxpc3QtdGV4dDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyNkZcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWdvb2dsZS1hZHM6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzg3XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1oYW5kLW9rYXk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTUwXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1oYW5kLXBvaW50aW5nLXJpZ2h0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDJDN1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8taGVhZHNldDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyQ0VcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWhlYXJ0LW11bHRpcGxlLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTU3XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1ob21lLW1hcC1tYXJrZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNUY4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1odW1hbi1tYWxlLWNoaWxkOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTM4Q1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbGFwdG9wOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDMyMlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbWVzc2FnZS1jb2ctb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExNzJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLW1lc3NhZ2UtdGV4dC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDM2QVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbW91c2U6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzdEXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1tb3VzZS1ibHVldG9vdGg6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOThCXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1tb3VzZS1vZmY6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzdFXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1tb3VzZS12YXJpYW50OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDM3RlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbW91c2UtdmFyaWFudC1vZmY6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzgwXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1uZXdzcGFwZXItdmFyaWFudC1tdWx0aXBsZS1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTAwM1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbmV3c3BhcGVyLXZhcmlhbnQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwMDRcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXBob25lLWluLXRhbGstb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExODJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXBsdXMtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3MDVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXJlc3BvbnNpdmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDVFXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1zZWxlY3Q6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDg1XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1zZWxlY3Rpb24tc2VhcmNoOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTIwNVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tc2VuZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0OEFcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXNlbmQtY2hlY2stb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExNjJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXNlbmQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExNjVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXNoYXJlLWFsbC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTFGNVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tc3Rhci1ib3gtbXVsdGlwbGUtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyODdcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXN0aWNrZXItZW1vamk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzg1XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby10YWJsZXQtaXBhZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0RjhcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXRlbGV2aXNpb24tY2xlYW46OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTEwXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby11cGRhdGU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNkIwXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby16b2RpYWMtdGF1cnVzOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEE4N1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tem9kaWFjLXZpcmdvOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEE4OFxcXCI7XFxufVxcblxcbi5ibG9ja2VyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICB6LWluZGV4OiA5OTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYmxvY2tlcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgbWFyZ2luLXJpZ2h0OiAtMC4wNWVtO1xcbn1cXG4uYmxvY2tlci5iZWhpbmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDI7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiA5MCU7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgcGFkZGluZzogMTVweCAzMHB4O1xcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtbW96LWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC1vLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC1tcy1ib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxMHB4ICMwMDA7XFxuICAtbW96LWJveC1zaGFkb3c6IDAgMCAxMHB4ICMwMDA7XFxuICAtby1ib3gtc2hhZG93OiAwIDAgMTBweCAjMDAwO1xcbiAgLW1zLWJveC1zaGFkb3c6IDAgMCAxMHB4ICMwMDA7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCAjMDAwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuLm1vZGFsIGEuY2xvc2UtbW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMTIuNXB4O1xcbiAgcmlnaHQ6IC0xMi41cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgdGV4dC1pbmRlbnQ6IC05OTk5cHg7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEd0FBQUE4Q0FZQUFBQTYvTmx5QUFBQUFYTlNSMElBcnM0YzZRQUFBM2hKUkVGVWFBWGxtOCtLMDBBY3g3TWlDSUpIL3l3K2dBOWcyNU80OVNMNEFPM0JwMWp3NU52a3RDK3dGODhxZXZLNEJVOTdFbXp4VUJDRW9sSy9uNWdwM1c2VFRKUGZwTlBORjM3TU5zbDg1L3ZOL0RhVG1VNlBrbkM0SytwbmlxZUtKM2s4VW5rdkR4WEp6enkrcS95YXh4ZVZIeFcvRk5IamdSU2VLdDRyRm9wbHphQXVISERCR1IyZVM5RzU0cmVpcnNtaWVuRENUUnQ3eHdzcCtLQW9FbXQ5bkxhR2l0WnhyQmJQRk5hR2ZQbG9HdzJ0NEpWYW1TdDh4WVc2RGcxb0NZbzNZdityQ0dWaVYxNjBvTWtjZDhTWUtuWVYxTmIxYUVPakNlNkw1Wk9pTGZGMTIwRWpXaHVCdTNZSVp0MU5RbXVqbms1RjRNZ09wVVJ6TGZBd09CU1RtenAzZnBEeHVJL3BhYnhwcU9vejJyMkhMQWIwR01iWktsTlY1L0hnOVhKeXBndXJ5QTdsUEY1S01kVFpRekhqcXhOUGhXaHpJdUFydU9sMWVOcUtFeDF0U2g1cmZieGR3N21PeENxNHFTNjhaVGpLUzFZVnZpbHU1NTl2V3ZGSGhoNHJacmR5WjY5Vm1wZ2RqOGZKYkRaTEpwTkowdXYxY25yL2dqclVoUU11SStBTmp5dXdmdFEwYmJMNkVycDBtTS9ueThGZzRNM0x0ZFJ4Z010S2wzandtSUhWeFlYQ2hGeTk0L1JtcGEvcFRiTlVoc3RLVis0UnI4bExROUtsVXZKS0x5Rzh5dlEyczlTQnkxSmI3alY1YTB5YXBmRjZhcGFaTGpMTGNXdGQ0c05ybUpVTUh5TSsxeGliVGpIODJaaDAxVE5saHNyT2hkS1RlMDB1QXpaUW1ONitLVytzRGEvSkQyUFNWUTg3M20yOXlmKzFROVZEemZFWWxIaTFHNUxLQkJXWmJ0RXNIYkZ3YjFvWUR3cjFaaUYvMmJuQ1NnMU9CRS9wZnI5L2JXeDI2VXhKTDNPTlBJU09MS1V2UXphMExaVXhTS3lqcGRUR2EvdkRFcjI1cmRkYk1NMFEzTzZMeDNycUZ2VSt4NlVyUktRWTd0eXJaZWNtRDlGT0R5OHVMaXpUbWlsd05qMGtyYU5jQUpoT3A1YUdWd3NBR0Q1Vm1KQnJXV2JKU2dXVDl6cnpXZXBRRjQ3UmFHU2lLZmVHeDZTemkzZ3ptWC9ISGJpaHdCc2VyNEI5VUpZcEZCTlg0UjZ2VG4zVlFuZXowU3ltbnJIUU1zUllHVHIxZFNrMzRsalJxUy9FTWQycExROFlCcDNhMVBMZmNxQ3BvOGd0SGtaRkhLa1RYNmZzM01ZMGJsS250aDY2cktDblUwVlJHdTM3T05yUWFBNGVaREZ0V0F1MmZYajl6akZreFRCT284Rjd0OTI2Z1RwLzgzS3l6emN5MmtaRDZ4aXF4VFluSExSRm0zdkhpUlN3TlNqa3ozaG9Jem84bENLV1VsZy9ZdEdzN3RPYnVuREFaZnBETGJmRUkxNXpzRUlZM1UveC9nSEhjL0cxemx0bkFnQUFBQUJKUlU1RXJrSmdnZz09XFxcIik7XFxufVxcblxcbi5tb2RhbC1zcGlubmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC01MCUpO1xcbiAgcGFkZGluZzogMTJweCAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuLm1vZGFsLXNwaW5uZXIgPiBkaXYge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDJweDtcXG4gIG1hcmdpbjogMCAxcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogc2stc3RyZXRjaGRlbGF5IDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XFxuICBhbmltYXRpb246IHNrLXN0cmV0Y2hkZWxheSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xcbn1cXG4ubW9kYWwtc3Bpbm5lciAucmVjdDIge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xLjFzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcXG59XFxuLm1vZGFsLXNwaW5uZXIgLnJlY3QzIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMXM7XFxuICBhbmltYXRpb24tZGVsYXk6IC0xcztcXG59XFxuLm1vZGFsLXNwaW5uZXIgLnJlY3Q0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzay1zdHJldGNoZGVsYXkge1xcbiAgMCUsIDQwJSwgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcXG4gIH1cXG4gIDIwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgc2stc3RyZXRjaGRlbGF5IHtcXG4gIDAlLCA0MCUsIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XFxuICB9XFxuICAyMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gIH1cXG59XFxuI3VpLWRhdGVwaWNrZXItZGl2IHtcXG4gIHotaW5kZXg6IDEwMDAgIWltcG9ydGFudDtcXG59XFxuXFxuLnVpLXRpbWVwaWNrZXItd3JhcHBlciB7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgbWF4LWhlaWdodDogMTUwcHg7XFxuICB3aWR0aDogNi41ZW07XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAtbW96LWJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgei1pbmRleDogMTAwNTI7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi51aS10aW1lcGlja2VyLXdyYXBwZXIudWktdGltZXBpY2tlci13aXRoLWR1cmF0aW9uIHtcXG4gIHdpZHRoOiAxM2VtO1xcbn1cXG5cXG4udWktdGltZXBpY2tlci13cmFwcGVyLnVpLXRpbWVwaWNrZXItd2l0aC1kdXJhdGlvbi51aS10aW1lcGlja2VyLXN0ZXAtMzAsXFxuLnVpLXRpbWVwaWNrZXItd3JhcHBlci51aS10aW1lcGlja2VyLXdpdGgtZHVyYXRpb24udWktdGltZXBpY2tlci1zdGVwLTYwIHtcXG4gIHdpZHRoOiAxMWVtO1xcbn1cXG5cXG4udWktdGltZXBpY2tlci1saXN0IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4udWktdGltZXBpY2tlci1kdXJhdGlvbiB7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgY29sb3I6ICM4ODg7XFxufVxcblxcbi51aS10aW1lcGlja2VyLWxpc3Q6aG92ZXIgLnVpLXRpbWVwaWNrZXItZHVyYXRpb24ge1xcbiAgY29sb3I6ICM4ODg7XFxufVxcblxcbi51aS10aW1lcGlja2VyLWxpc3QgbGkge1xcbiAgcGFkZGluZzogM3B4IDAgM3B4IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBjb2xvcjogIzAwMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi51aS10aW1lcGlja2VyLWxpc3Q6aG92ZXIgLnVpLXRpbWVwaWNrZXItc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG5saS51aS10aW1lcGlja2VyLXNlbGVjdGVkLFxcbi51aS10aW1lcGlja2VyLWxpc3QgbGk6aG92ZXIsXFxuLnVpLXRpbWVwaWNrZXItbGlzdCAudWktdGltZXBpY2tlci1zZWxlY3RlZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjMTk4MEVDO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbmxpLnVpLXRpbWVwaWNrZXItc2VsZWN0ZWQgLnVpLXRpbWVwaWNrZXItZHVyYXRpb24sXFxuLnVpLXRpbWVwaWNrZXItbGlzdCBsaTpob3ZlciAudWktdGltZXBpY2tlci1kdXJhdGlvbiB7XFxuICBjb2xvcjogI2NjYztcXG59XFxuXFxuLnVpLXRpbWVwaWNrZXItbGlzdCBsaS51aS10aW1lcGlja2VyLWRpc2FibGVkLFxcbi51aS10aW1lcGlja2VyLWxpc3QgbGkudWktdGltZXBpY2tlci1kaXNhYmxlZDpob3ZlcixcXG4udWktdGltZXBpY2tlci1saXN0IGxpLnVpLXRpbWVwaWNrZXItc2VsZWN0ZWQudWktdGltZXBpY2tlci1kaXNhYmxlZCB7XFxuICBjb2xvcjogIzg4ODtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLnVpLXRpbWVwaWNrZXItbGlzdCBsaS51aS10aW1lcGlja2VyLWRpc2FibGVkOmhvdmVyLFxcbi51aS10aW1lcGlja2VyLWxpc3QgbGkudWktdGltZXBpY2tlci1zZWxlY3RlZC51aS10aW1lcGlja2VyLWRpc2FibGVkIHtcXG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XFxufVxcblxcbi51aS1kYXRlcGlja2VyLnVpLXdpZGdldC51aS13aWRnZXQtY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4udWktdGltZXBpY2tlci13cmFwcGVyIHtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBtYXgtaGVpZ2h0OiAxNTBweDtcXG4gIHdpZHRoOiA2LjVlbTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIC1tb3otYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB6LWluZGV4OiAxMDA1MjtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnVpLXRpbWVwaWNrZXItd3JhcHBlci51aS10aW1lcGlja2VyLXdpdGgtZHVyYXRpb24ge1xcbiAgd2lkdGg6IDEzZW07XFxufVxcblxcbi51aS10aW1lcGlja2VyLXdyYXBwZXIudWktdGltZXBpY2tlci13aXRoLWR1cmF0aW9uLnVpLXRpbWVwaWNrZXItc3RlcC0zMCxcXG4udWktdGltZXBpY2tlci13cmFwcGVyLnVpLXRpbWVwaWNrZXItd2l0aC1kdXJhdGlvbi51aS10aW1lcGlja2VyLXN0ZXAtNjAge1xcbiAgd2lkdGg6IDExZW07XFxufVxcblxcbi51aS10aW1lcGlja2VyLWxpc3Qge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi51aS10aW1lcGlja2VyLWR1cmF0aW9uIHtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBjb2xvcjogIzg4ODtcXG59XFxuXFxuLnVpLXRpbWVwaWNrZXItbGlzdDpob3ZlciAudWktdGltZXBpY2tlci1kdXJhdGlvbiB7XFxuICBjb2xvcjogIzg4ODtcXG59XFxuXFxuLnVpLXRpbWVwaWNrZXItbGlzdCBsaSB7XFxuICBwYWRkaW5nOiAzcHggMCAzcHggNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnVpLXRpbWVwaWNrZXItbGlzdDpob3ZlciAudWktdGltZXBpY2tlci1zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbmxpLnVpLXRpbWVwaWNrZXItc2VsZWN0ZWQsXFxuLnVpLXRpbWVwaWNrZXItbGlzdCBsaTpob3ZlcixcXG4udWktdGltZXBpY2tlci1saXN0IC51aS10aW1lcGlja2VyLXNlbGVjdGVkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMxOTgwRUM7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxubGkudWktdGltZXBpY2tlci1zZWxlY3RlZCAudWktdGltZXBpY2tlci1kdXJhdGlvbixcXG4udWktdGltZXBpY2tlci1saXN0IGxpOmhvdmVyIC51aS10aW1lcGlja2VyLWR1cmF0aW9uIHtcXG4gIGNvbG9yOiAjY2NjO1xcbn1cXG5cXG4udWktdGltZXBpY2tlci1saXN0IGxpLnVpLXRpbWVwaWNrZXItZGlzYWJsZWQsXFxuLnVpLXRpbWVwaWNrZXItbGlzdCBsaS51aS10aW1lcGlja2VyLWRpc2FibGVkOmhvdmVyLFxcbi51aS10aW1lcGlja2VyLWxpc3QgbGkudWktdGltZXBpY2tlci1zZWxlY3RlZC51aS10aW1lcGlja2VyLWRpc2FibGVkIHtcXG4gIGNvbG9yOiAjODg4O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4udWktdGltZXBpY2tlci1saXN0IGxpLnVpLXRpbWVwaWNrZXItZGlzYWJsZWQ6aG92ZXIsXFxuLnVpLXRpbWVwaWNrZXItbGlzdCBsaS51aS10aW1lcGlja2VyLXNlbGVjdGVkLnVpLXRpbWVwaWNrZXItZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcXG59XFxuXFxuLyohIGpRdWVyeSBVSSAtIHYxLjEyLjEgLSAyMDE2LTA5LTE0XFxuKiBodHRwOi8vanF1ZXJ5dWkuY29tXFxuKiBJbmNsdWRlczogY29yZS5jc3MsIGFjY29yZGlvbi5jc3MsIGF1dG9jb21wbGV0ZS5jc3MsIG1lbnUuY3NzLCBidXR0b24uY3NzLCBjb250cm9sZ3JvdXAuY3NzLCBjaGVja2JveHJhZGlvLmNzcywgZGF0ZXBpY2tlci5jc3MsIGRpYWxvZy5jc3MsIGRyYWdnYWJsZS5jc3MsIHJlc2l6YWJsZS5jc3MsIHByb2dyZXNzYmFyLmNzcywgc2VsZWN0YWJsZS5jc3MsIHNlbGVjdG1lbnUuY3NzLCBzbGlkZXIuY3NzLCBzb3J0YWJsZS5jc3MsIHNwaW5uZXIuY3NzLCB0YWJzLmNzcywgdG9vbHRpcC5jc3MsIHRoZW1lLmNzc1xcbiogVG8gdmlldyBhbmQgbW9kaWZ5IHRoaXMgdGhlbWUsIHZpc2l0IGh0dHA6Ly9qcXVlcnl1aS5jb20vdGhlbWVyb2xsZXIvP2ZmRGVmYXVsdD1BcmlhbCUyQ0hlbHZldGljYSUyQ3NhbnMtc2VyaWYmZnNEZWZhdWx0PTFlbSZmd0RlZmF1bHQ9bm9ybWFsJmNvcm5lclJhZGl1cz0zcHgmYmdDb2xvckhlYWRlcj1lOWU5ZTkmYmdUZXh0dXJlSGVhZGVyPWZsYXQmYm9yZGVyQ29sb3JIZWFkZXI9ZGRkZGRkJmZjSGVhZGVyPTMzMzMzMyZpY29uQ29sb3JIZWFkZXI9NDQ0NDQ0JmJnQ29sb3JDb250ZW50PWZmZmZmZiZiZ1RleHR1cmVDb250ZW50PWZsYXQmYm9yZGVyQ29sb3JDb250ZW50PWRkZGRkZCZmY0NvbnRlbnQ9MzMzMzMzJmljb25Db2xvckNvbnRlbnQ9NDQ0NDQ0JmJnQ29sb3JEZWZhdWx0PWY2ZjZmNiZiZ1RleHR1cmVEZWZhdWx0PWZsYXQmYm9yZGVyQ29sb3JEZWZhdWx0PWM1YzVjNSZmY0RlZmF1bHQ9NDU0NTQ1Jmljb25Db2xvckRlZmF1bHQ9Nzc3Nzc3JmJnQ29sb3JIb3Zlcj1lZGVkZWQmYmdUZXh0dXJlSG92ZXI9ZmxhdCZib3JkZXJDb2xvckhvdmVyPWNjY2NjYyZmY0hvdmVyPTJiMmIyYiZpY29uQ29sb3JIb3Zlcj01NTU1NTUmYmdDb2xvckFjdGl2ZT0wMDdmZmYmYmdUZXh0dXJlQWN0aXZlPWZsYXQmYm9yZGVyQ29sb3JBY3RpdmU9MDAzZWZmJmZjQWN0aXZlPWZmZmZmZiZpY29uQ29sb3JBY3RpdmU9ZmZmZmZmJmJnQ29sb3JIaWdobGlnaHQ9ZmZmYTkwJmJnVGV4dHVyZUhpZ2hsaWdodD1mbGF0JmJvcmRlckNvbG9ySGlnaGxpZ2h0PWRhZDU1ZSZmY0hpZ2hsaWdodD03Nzc2MjAmaWNvbkNvbG9ySGlnaGxpZ2h0PTc3NzYyMCZiZ0NvbG9yRXJyb3I9ZmRkZmRmJmJnVGV4dHVyZUVycm9yPWZsYXQmYm9yZGVyQ29sb3JFcnJvcj1mMWE4OTkmZmNFcnJvcj01ZjNmM2YmaWNvbkNvbG9yRXJyb3I9Y2MwMDAwJmJnQ29sb3JPdmVybGF5PWFhYWFhYSZiZ1RleHR1cmVPdmVybGF5PWZsYXQmYmdJbWdPcGFjaXR5T3ZlcmxheT0wJm9wYWNpdHlPdmVybGF5PTMwJmJnQ29sb3JTaGFkb3c9NjY2NjY2JmJnVGV4dHVyZVNoYWRvdz1mbGF0JmJnSW1nT3BhY2l0eVNoYWRvdz0wJm9wYWNpdHlTaGFkb3c9MzAmdGhpY2tuZXNzU2hhZG93PTVweCZvZmZzZXRUb3BTaGFkb3c9MHB4Jm9mZnNldExlZnRTaGFkb3c9MHB4JmNvcm5lclJhZGl1c1NoYWRvdz04cHhcXG4qIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzOyBMaWNlbnNlZCBNSVQgKi9cXG4vKiBMYXlvdXQgaGVscGVyc1xcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbi51aS1oZWxwZXItaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi51aS1oZWxwZXItaGlkZGVuLWFjY2Vzc2libGUge1xcbiAgYm9yZGVyOiAwO1xcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcXG4gIGhlaWdodDogMXB4O1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4O1xcbn1cXG5cXG4udWktaGVscGVyLXJlc2V0IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBvdXRsaW5lOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi51aS1oZWxwZXItY2xlYXJmaXg6YmVmb3JlLFxcbi51aS1oZWxwZXItY2xlYXJmaXg6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbi51aS1oZWxwZXItY2xlYXJmaXg6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxufVxcblxcbi51aS1oZWxwZXItemZpeCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBvcGFjaXR5OiAwO1xcbiAgZmlsdGVyOiBBbHBoYShPcGFjaXR5PTApO1xcbiAgLyogc3VwcG9ydDogSUU4ICovXFxufVxcblxcbi51aS1mcm9udCB7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi8qIEludGVyYWN0aW9uIEN1ZXNcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4udWktc3RhdGUtZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLyogSWNvbnNcXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4udWktaWNvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgbWFyZ2luLXRvcDogLTAuMjVlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtaW5kZW50OiAtOTk5OTlweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4udWktd2lkZ2V0LWljb24tYmxvY2sge1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogTWlzYyB2aXN1YWxzXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLyogT3ZlcmxheXMgKi9cXG4udWktd2lkZ2V0LW92ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udWktYWNjb3JkaW9uIC51aS1hY2NvcmRpb24taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAycHggMCAwIDA7XFxuICBwYWRkaW5nOiAwLjVlbSAwLjVlbSAwLjVlbSAwLjdlbTtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuLnVpLWFjY29yZGlvbiAudWktYWNjb3JkaW9uLWNvbnRlbnQge1xcbiAgcGFkZGluZzogMWVtIDIuMmVtO1xcbiAgYm9yZGVyLXRvcDogMDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4udWktYXV0b2NvbXBsZXRlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi51aS1tZW51IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG5cXG4udWktbWVudSAudWktbWVudSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi51aS1tZW51IC51aS1tZW51LWl0ZW0ge1xcbiAgbWFyZ2luOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLyogc3VwcG9ydDogSUUxMCwgc2VlICM4ODQ0ICovXFxuICBsaXN0LXN0eWxlLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBN1xcXCIpO1xcbn1cXG5cXG4udWktbWVudSAudWktbWVudS1pdGVtLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogM3B4IDFlbSAzcHggMC40ZW07XFxufVxcblxcbi51aS1tZW51IC51aS1tZW51LWRpdmlkZXIge1xcbiAgbWFyZ2luOiA1cHggMDtcXG4gIGhlaWdodDogMDtcXG4gIGZvbnQtc2l6ZTogMDtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHggMCAwIDA7XFxufVxcblxcbi51aS1tZW51IC51aS1zdGF0ZS1mb2N1cyxcXG4udWktbWVudSAudWktc3RhdGUtYWN0aXZlIHtcXG4gIG1hcmdpbjogLTFweDtcXG59XFxuXFxuLyogaWNvbiBzdXBwb3J0ICovXFxuLnVpLW1lbnUtaWNvbnMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udWktbWVudS1pY29ucyAudWktbWVudS1pdGVtLXdyYXBwZXIge1xcbiAgcGFkZGluZy1sZWZ0OiAyZW07XFxufVxcblxcbi8qIGxlZnQtYWxpZ25lZCAqL1xcbi51aS1tZW51IC51aS1pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDAuMmVtO1xcbiAgbWFyZ2luOiBhdXRvIDA7XFxufVxcblxcbi8qIHJpZ2h0LWFsaWduZWQgKi9cXG4udWktbWVudSAudWktbWVudS1pY29uIHtcXG4gIGxlZnQ6IGF1dG87XFxuICByaWdodDogMDtcXG59XFxuXFxuLnVpLWJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjRlbSAxZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjFlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLyogU3VwcG9ydDogSUUgPD0gMTEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4udWktYnV0dG9uLFxcbi51aS1idXR0b246bGluayxcXG4udWktYnV0dG9uOnZpc2l0ZWQsXFxuLnVpLWJ1dHRvbjpob3ZlcixcXG4udWktYnV0dG9uOmFjdGl2ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi8qIHRvIG1ha2Ugcm9vbSBmb3IgdGhlIGljb24sIGEgd2lkdGggbmVlZHMgdG8gYmUgc2V0IGhlcmUgKi9cXG4udWktYnV0dG9uLWljb24tb25seSB7XFxuICB3aWR0aDogMmVtO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHRleHQtaW5kZW50OiAtOTk5OXB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLyogbm8gaWNvbiBzdXBwb3J0IGZvciBpbnB1dCBlbGVtZW50cyAqL1xcbmlucHV0LnVpLWJ1dHRvbi51aS1idXR0b24taWNvbi1vbmx5IHtcXG4gIHRleHQtaW5kZW50OiAwO1xcbn1cXG5cXG4vKiBidXR0b24gaWNvbiBlbGVtZW50KHMpICovXFxuLnVpLWJ1dHRvbi1pY29uLW9ubHkgLnVpLWljb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tdG9wOiAtOHB4O1xcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XFxufVxcblxcbi51aS1idXR0b24udWktaWNvbi1ub3RleHQgLnVpLWljb24ge1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAyLjFlbTtcXG4gIGhlaWdodDogMi4xZW07XFxuICB0ZXh0LWluZGVudDogLTk5OTlweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbmlucHV0LnVpLWJ1dHRvbi51aS1pY29uLW5vdGV4dCAudWktaWNvbiB7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogYXV0bztcXG4gIHRleHQtaW5kZW50OiAwO1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gIHBhZGRpbmc6IDAuNGVtIDFlbTtcXG59XFxuXFxuLyogd29ya2Fyb3VuZHMgKi9cXG4vKiBTdXBwb3J0OiBGaXJlZm94IDUgLSA0MCAqL1xcbmlucHV0LnVpLWJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5idXR0b24udWktYnV0dG9uOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi51aS1jb250cm9sZ3JvdXAge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLnVpLWNvbnRyb2xncm91cCA+IC51aS1jb250cm9sZ3JvdXAtaXRlbSB7XFxuICBmbG9hdDogbGVmdDtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG5cXG4udWktY29udHJvbGdyb3VwID4gLnVpLWNvbnRyb2xncm91cC1pdGVtOmZvY3VzLFxcbi51aS1jb250cm9sZ3JvdXAgPiAudWktY29udHJvbGdyb3VwLWl0ZW0udWktdmlzdWFsLWZvY3VzIHtcXG4gIHotaW5kZXg6IDk5OTk7XFxufVxcblxcbi51aS1jb250cm9sZ3JvdXAtdmVydGljYWwgPiAudWktY29udHJvbGdyb3VwLWl0ZW0ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmbG9hdDogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4udWktY29udHJvbGdyb3VwLXZlcnRpY2FsIC51aS1jb250cm9sZ3JvdXAtaXRlbSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4udWktY29udHJvbGdyb3VwIC51aS1jb250cm9sZ3JvdXAtbGFiZWwge1xcbiAgcGFkZGluZzogMC40ZW0gMWVtO1xcbn1cXG5cXG4udWktY29udHJvbGdyb3VwIC51aS1jb250cm9sZ3JvdXAtbGFiZWwgc3BhbiB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLnVpLWNvbnRyb2xncm91cC1ob3Jpem9udGFsIC51aS1jb250cm9sZ3JvdXAtbGFiZWwgKyAudWktY29udHJvbGdyb3VwLWl0ZW0ge1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxufVxcblxcbi51aS1jb250cm9sZ3JvdXAtdmVydGljYWwgLnVpLWNvbnRyb2xncm91cC1sYWJlbCArIC51aS1jb250cm9sZ3JvdXAtaXRlbSB7XFxuICBib3JkZXItdG9wOiBub25lO1xcbn1cXG5cXG4udWktY29udHJvbGdyb3VwLWhvcml6b250YWwgLnVpLWNvbnRyb2xncm91cC1sYWJlbC51aS13aWRnZXQtY29udGVudCB7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxufVxcblxcbi51aS1jb250cm9sZ3JvdXAtdmVydGljYWwgLnVpLWNvbnRyb2xncm91cC1sYWJlbC51aS13aWRnZXQtY29udGVudCB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG5cXG4vKiBTcGlubmVyIHNwZWNpZmljIHN0eWxlIGZpeGVzICovXFxuLnVpLWNvbnRyb2xncm91cC12ZXJ0aWNhbCAudWktc3Bpbm5lci1pbnB1dCB7XFxuICAvKiBTdXBwb3J0OiBJRTggb25seSwgQW5kcm9pZCA8IDQuNCBvbmx5ICovXFxuICB3aWR0aDogNzUlO1xcbiAgd2lkdGg6IGNhbGMoIDEwMCUgLSAyLjRlbSApO1xcbn1cXG5cXG4udWktY29udHJvbGdyb3VwLXZlcnRpY2FsIC51aS1zcGlubmVyIC51aS1zcGlubmVyLXVwIHtcXG4gIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG4udWktY2hlY2tib3hyYWRpby1sYWJlbCAudWktaWNvbi1iYWNrZ3JvdW5kIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMXB4ICNjY2M7XFxuICBib3JkZXItcmFkaXVzOiAwLjEyZW07XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi51aS1jaGVja2JveHJhZGlvLXJhZGlvLWxhYmVsIC51aS1pY29uLWJhY2tncm91bmQge1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnVpLWNoZWNrYm94cmFkaW8tcmFkaW8tbGFiZWwudWktY2hlY2tib3hyYWRpby1jaGVja2VkIC51aS1pY29uLFxcbi51aS1jaGVja2JveHJhZGlvLXJhZGlvLWxhYmVsLnVpLWNoZWNrYm94cmFkaW8tY2hlY2tlZDpob3ZlciAudWktaWNvbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbiAgd2lkdGg6IDhweDtcXG4gIGhlaWdodDogOHB4O1xcbiAgYm9yZGVyLXdpZHRoOiA0cHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG4udWktY2hlY2tib3hyYWRpby1kaXNhYmxlZCB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnVpLWRhdGVwaWNrZXIge1xcbiAgd2lkdGg6IDE3ZW07XFxuICBwYWRkaW5nOiAwLjJlbSAwLjJlbSAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnVpLWRhdGVwaWNrZXIgLnVpLWRhdGVwaWNrZXItaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDAuMmVtIDA7XFxufVxcblxcbi51aS1kYXRlcGlja2VyIC51aS1kYXRlcGlja2VyLXByZXYsXFxuLnVpLWRhdGVwaWNrZXIgLnVpLWRhdGVwaWNrZXItbmV4dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDJweDtcXG4gIHdpZHRoOiAxLjhlbTtcXG4gIGhlaWdodDogMS44ZW07XFxufVxcblxcbi51aS1kYXRlcGlja2VyIC51aS1kYXRlcGlja2VyLXByZXYtaG92ZXIsXFxuLnVpLWRhdGVwaWNrZXIgLnVpLWRhdGVwaWNrZXItbmV4dC1ob3ZlciB7XFxuICB0b3A6IDFweDtcXG59XFxuXFxuLnVpLWRhdGVwaWNrZXIgLnVpLWRhdGVwaWNrZXItcHJldiB7XFxuICBsZWZ0OiAycHg7XFxufVxcblxcbi51aS1kYXRlcGlja2VyIC51aS1kYXRlcGlja2VyLW5leHQge1xcbiAgcmlnaHQ6IDJweDtcXG59XFxuXFxuLnVpLWRhdGVwaWNrZXIgLnVpLWRhdGVwaWNrZXItcHJldi1ob3ZlciB7XFxuICBsZWZ0OiAxcHg7XFxufVxcblxcbi51aS1kYXRlcGlja2VyIC51aS1kYXRlcGlja2VyLW5leHQtaG92ZXIge1xcbiAgcmlnaHQ6IDFweDtcXG59XFxuXFxuLnVpLWRhdGVwaWNrZXIgLnVpLWRhdGVwaWNrZXItcHJldiBzcGFuLFxcbi51aS1kYXRlcGlja2VyIC51aS1kYXRlcGlja2VyLW5leHQgc3BhbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtOHB4O1xcbiAgdG9wOiA1MCU7XFxuICBtYXJnaW4tdG9wOiAtOHB4O1xcbn1cXG5cXG4udWktZGF0ZXBpY2tlciAudWktZGF0ZXBpY2tlci10aXRsZSB7XFxuICBtYXJnaW46IDAgMi4zZW07XFxuICBsaW5lLWhlaWdodDogMS44ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi51aS1kYXRlcGlja2VyIC51aS1kYXRlcGlja2VyLXRpdGxlIHNlbGVjdCB7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIG1hcmdpbjogMXB4IDA7XFxufVxcblxcbi51aS1kYXRlcGlja2VyIHNlbGVjdC51aS1kYXRlcGlja2VyLW1vbnRoLFxcbi51aS1kYXRlcGlja2VyIHNlbGVjdC51aS1kYXRlcGlja2VyLXllYXIge1xcbiAgd2lkdGg6IDQ1JTtcXG59XFxuXFxuLnVpLWRhdGVwaWNrZXIgdGFibGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIG1hcmdpbjogMCAwIDAuNGVtO1xcbn1cXG5cXG4udWktZGF0ZXBpY2tlciB0aCB7XFxuICBwYWRkaW5nOiAwLjdlbSAwLjNlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG5cXG4udWktZGF0ZXBpY2tlciB0ZCB7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAxcHg7XFxufVxcblxcbi51aS1kYXRlcGlja2VyIHRkIHNwYW4sXFxuLnVpLWRhdGVwaWNrZXIgdGQgYSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDAuMmVtO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi51aS1kYXRlcGlja2VyIC51aS1kYXRlcGlja2VyLWJ1dHRvbnBhbmUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG4gIG1hcmdpbjogMC43ZW0gMCAwIDA7XFxuICBwYWRkaW5nOiAwIDAuMmVtO1xcbiAgYm9yZGVyLWxlZnQ6IDA7XFxuICBib3JkZXItcmlnaHQ6IDA7XFxuICBib3JkZXItYm90dG9tOiAwO1xcbn1cXG5cXG4udWktZGF0ZXBpY2tlciAudWktZGF0ZXBpY2tlci1idXR0b25wYW5lIGJ1dHRvbiB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBtYXJnaW46IDAuNWVtIDAuMmVtIDAuNGVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMC4yZW0gMC42ZW0gMC4zZW0gMC42ZW07XFxuICB3aWR0aDogYXV0bztcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4udWktZGF0ZXBpY2tlciAudWktZGF0ZXBpY2tlci1idXR0b25wYW5lIGJ1dHRvbi51aS1kYXRlcGlja2VyLWN1cnJlbnQge1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbi8qIHdpdGggbXVsdGlwbGUgY2FsZW5kYXJzICovXFxuLnVpLWRhdGVwaWNrZXIudWktZGF0ZXBpY2tlci1tdWx0aSB7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuLnVpLWRhdGVwaWNrZXItbXVsdGkgLnVpLWRhdGVwaWNrZXItZ3JvdXAge1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbi51aS1kYXRlcGlja2VyLW11bHRpIC51aS1kYXRlcGlja2VyLWdyb3VwIHRhYmxlIHtcXG4gIHdpZHRoOiA5NSU7XFxuICBtYXJnaW46IDAgYXV0byAwLjRlbTtcXG59XFxuXFxuLnVpLWRhdGVwaWNrZXItbXVsdGktMiAudWktZGF0ZXBpY2tlci1ncm91cCB7XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4udWktZGF0ZXBpY2tlci1tdWx0aS0zIC51aS1kYXRlcGlja2VyLWdyb3VwIHtcXG4gIHdpZHRoOiAzMy4zJTtcXG59XFxuXFxuLnVpLWRhdGVwaWNrZXItbXVsdGktNCAudWktZGF0ZXBpY2tlci1ncm91cCB7XFxuICB3aWR0aDogMjUlO1xcbn1cXG5cXG4udWktZGF0ZXBpY2tlci1tdWx0aSAudWktZGF0ZXBpY2tlci1ncm91cC1sYXN0IC51aS1kYXRlcGlja2VyLWhlYWRlcixcXG4udWktZGF0ZXBpY2tlci1tdWx0aSAudWktZGF0ZXBpY2tlci1ncm91cC1taWRkbGUgLnVpLWRhdGVwaWNrZXItaGVhZGVyIHtcXG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xcbn1cXG5cXG4udWktZGF0ZXBpY2tlci1tdWx0aSAudWktZGF0ZXBpY2tlci1idXR0b25wYW5lIHtcXG4gIGNsZWFyOiBsZWZ0O1xcbn1cXG5cXG4udWktZGF0ZXBpY2tlci1yb3ctYnJlYWsge1xcbiAgY2xlYXI6IGJvdGg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMDtcXG59XFxuXFxuLyogUlRMIHN1cHBvcnQgKi9cXG4udWktZGF0ZXBpY2tlci1ydGwge1xcbiAgZGlyZWN0aW9uOiBydGw7XFxufVxcblxcbi51aS1kYXRlcGlja2VyLXJ0bCAudWktZGF0ZXBpY2tlci1wcmV2IHtcXG4gIHJpZ2h0OiAycHg7XFxuICBsZWZ0OiBhdXRvO1xcbn1cXG5cXG4udWktZGF0ZXBpY2tlci1ydGwgLnVpLWRhdGVwaWNrZXItbmV4dCB7XFxuICBsZWZ0OiAycHg7XFxuICByaWdodDogYXV0bztcXG59XFxuXFxuLnVpLWRhdGVwaWNrZXItcnRsIC51aS1kYXRlcGlja2VyLXByZXY6aG92ZXIge1xcbiAgcmlnaHQ6IDFweDtcXG4gIGxlZnQ6IGF1dG87XFxufVxcblxcbi51aS1kYXRlcGlja2VyLXJ0bCAudWktZGF0ZXBpY2tlci1uZXh0OmhvdmVyIHtcXG4gIGxlZnQ6IDFweDtcXG4gIHJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4udWktZGF0ZXBpY2tlci1ydGwgLnVpLWRhdGVwaWNrZXItYnV0dG9ucGFuZSB7XFxuICBjbGVhcjogcmlnaHQ7XFxufVxcblxcbi51aS1kYXRlcGlja2VyLXJ0bCAudWktZGF0ZXBpY2tlci1idXR0b25wYW5lIGJ1dHRvbiB7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuXFxuLnVpLWRhdGVwaWNrZXItcnRsIC51aS1kYXRlcGlja2VyLWJ1dHRvbnBhbmUgYnV0dG9uLnVpLWRhdGVwaWNrZXItY3VycmVudCxcXG4udWktZGF0ZXBpY2tlci1ydGwgLnVpLWRhdGVwaWNrZXItZ3JvdXAge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cXG4udWktZGF0ZXBpY2tlci1ydGwgLnVpLWRhdGVwaWNrZXItZ3JvdXAtbGFzdCAudWktZGF0ZXBpY2tlci1oZWFkZXIsXFxuLnVpLWRhdGVwaWNrZXItcnRsIC51aS1kYXRlcGlja2VyLWdyb3VwLW1pZGRsZSAudWktZGF0ZXBpY2tlci1oZWFkZXIge1xcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwO1xcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweDtcXG59XFxuXFxuLyogSWNvbnMgKi9cXG4udWktZGF0ZXBpY2tlciAudWktaWNvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRleHQtaW5kZW50OiAtOTk5OTlweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgbGVmdDogMC41ZW07XFxuICB0b3A6IDAuM2VtO1xcbn1cXG5cXG4udWktZGlhbG9nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG4gIG91dGxpbmU6IDA7XFxufVxcblxcbi51aS1kaWFsb2cgLnVpLWRpYWxvZy10aXRsZWJhciB7XFxuICBwYWRkaW5nOiAwLjRlbSAxZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi51aS1kaWFsb2cgLnVpLWRpYWxvZy10aXRsZSB7XFxuICBmbG9hdDogbGVmdDtcXG4gIG1hcmdpbjogMC4xZW0gMDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB3aWR0aDogOTAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4udWktZGlhbG9nIC51aS1kaWFsb2ctdGl0bGViYXItY2xvc2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDAuM2VtO1xcbiAgdG9wOiA1MCU7XFxuICB3aWR0aDogMjBweDtcXG4gIG1hcmdpbjogLTEwcHggMCAwIDA7XFxuICBwYWRkaW5nOiAxcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi51aS1kaWFsb2cgLnVpLWRpYWxvZy1jb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLnVpLWRpYWxvZyAudWktZGlhbG9nLWJ1dHRvbnBhbmUge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGJvcmRlci13aWR0aDogMXB4IDAgMCAwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgcGFkZGluZzogMC4zZW0gMWVtIDAuNWVtIDAuNGVtO1xcbn1cXG5cXG4udWktZGlhbG9nIC51aS1kaWFsb2ctYnV0dG9ucGFuZSAudWktZGlhbG9nLWJ1dHRvbnNldCB7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbi51aS1kaWFsb2cgLnVpLWRpYWxvZy1idXR0b25wYW5lIGJ1dHRvbiB7XFxuICBtYXJnaW46IDAuNWVtIDAuNGVtIDAuNWVtIDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi51aS1kaWFsb2cgLnVpLXJlc2l6YWJsZS1uIHtcXG4gIGhlaWdodDogMnB4O1xcbiAgdG9wOiAwO1xcbn1cXG5cXG4udWktZGlhbG9nIC51aS1yZXNpemFibGUtZSB7XFxuICB3aWR0aDogMnB4O1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi51aS1kaWFsb2cgLnVpLXJlc2l6YWJsZS1zIHtcXG4gIGhlaWdodDogMnB4O1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG4udWktZGlhbG9nIC51aS1yZXNpemFibGUtdyB7XFxuICB3aWR0aDogMnB4O1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLnVpLWRpYWxvZyAudWktcmVzaXphYmxlLXNlLFxcbi51aS1kaWFsb2cgLnVpLXJlc2l6YWJsZS1zdyxcXG4udWktZGlhbG9nIC51aS1yZXNpemFibGUtbmUsXFxuLnVpLWRpYWxvZyAudWktcmVzaXphYmxlLW53IHtcXG4gIHdpZHRoOiA3cHg7XFxuICBoZWlnaHQ6IDdweDtcXG59XFxuXFxuLnVpLWRpYWxvZyAudWktcmVzaXphYmxlLXNlIHtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG4udWktZGlhbG9nIC51aS1yZXNpemFibGUtc3cge1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuLnVpLWRpYWxvZyAudWktcmVzaXphYmxlLW5lIHtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbn1cXG5cXG4udWktZGlhbG9nIC51aS1yZXNpemFibGUtbncge1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG59XFxuXFxuLnVpLWRyYWdnYWJsZSAudWktZGlhbG9nLXRpdGxlYmFyIHtcXG4gIGN1cnNvcjogbW92ZTtcXG59XFxuXFxuLnVpLWRyYWdnYWJsZS1oYW5kbGUge1xcbiAgLW1zLXRvdWNoLWFjdGlvbjogbm9uZTtcXG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcXG59XFxuXFxuLnVpLXJlc2l6YWJsZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi51aS1yZXNpemFibGUtaGFuZGxlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtc2l6ZTogMC4xcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIC1tcy10b3VjaC1hY3Rpb246IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG5vbmU7XFxufVxcblxcbi51aS1yZXNpemFibGUtZGlzYWJsZWQgLnVpLXJlc2l6YWJsZS1oYW5kbGUsXFxuLnVpLXJlc2l6YWJsZS1hdXRvaGlkZSAudWktcmVzaXphYmxlLWhhbmRsZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udWktcmVzaXphYmxlLW4ge1xcbiAgY3Vyc29yOiBuLXJlc2l6ZTtcXG4gIGhlaWdodDogN3B4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IC01cHg7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4udWktcmVzaXphYmxlLXMge1xcbiAgY3Vyc29yOiBzLXJlc2l6ZTtcXG4gIGhlaWdodDogN3B4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3R0b206IC01cHg7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4udWktcmVzaXphYmxlLWUge1xcbiAgY3Vyc29yOiBlLXJlc2l6ZTtcXG4gIHdpZHRoOiA3cHg7XFxuICByaWdodDogLTVweDtcXG4gIHRvcDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnVpLXJlc2l6YWJsZS13IHtcXG4gIGN1cnNvcjogdy1yZXNpemU7XFxuICB3aWR0aDogN3B4O1xcbiAgbGVmdDogLTVweDtcXG4gIHRvcDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnVpLXJlc2l6YWJsZS1zZSB7XFxuICBjdXJzb3I6IHNlLXJlc2l6ZTtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiAxMnB4O1xcbiAgcmlnaHQ6IDFweDtcXG4gIGJvdHRvbTogMXB4O1xcbn1cXG5cXG4udWktcmVzaXphYmxlLXN3IHtcXG4gIGN1cnNvcjogc3ctcmVzaXplO1xcbiAgd2lkdGg6IDlweDtcXG4gIGhlaWdodDogOXB4O1xcbiAgbGVmdDogLTVweDtcXG4gIGJvdHRvbTogLTVweDtcXG59XFxuXFxuLnVpLXJlc2l6YWJsZS1udyB7XFxuICBjdXJzb3I6IG53LXJlc2l6ZTtcXG4gIHdpZHRoOiA5cHg7XFxuICBoZWlnaHQ6IDlweDtcXG4gIGxlZnQ6IC01cHg7XFxuICB0b3A6IC01cHg7XFxufVxcblxcbi51aS1yZXNpemFibGUtbmUge1xcbiAgY3Vyc29yOiBuZS1yZXNpemU7XFxuICB3aWR0aDogOXB4O1xcbiAgaGVpZ2h0OiA5cHg7XFxuICByaWdodDogLTVweDtcXG4gIHRvcDogLTVweDtcXG59XFxuXFxuLnVpLXByb2dyZXNzYmFyIHtcXG4gIGhlaWdodDogMmVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi51aS1wcm9ncmVzc2JhciAudWktcHJvZ3Jlc3NiYXItdmFsdWUge1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udWktcHJvZ3Jlc3NiYXIgLnVpLXByb2dyZXNzYmFyLW92ZXJsYXkge1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhLQUFvQUlBQkFBQUFBUC8vL3lIL0MwNUZWRk5EUVZCRk1pNHdBd0VBQUFBaCtRUUpBUUFCQUN3QUFBQUFLQUFvQUFBQ2tZd05xWHJkQzUyRFMwNmE3TUZaSSs0RkhCQ0tvRGVXS1hxeW1QcUdxeHZKclhaYk14N1R0Yyt3OVhnVTJGQjNsT3lRUldFVDJJRkdpVTltMWZyRFZweFpaYzZiZkh3djRjMVlYUDZrMVZkeTI5MkZiNlVrdXZGdFhwdldTekErSHljWEpIVVhpR1lJaU1nMlI2VzQ1OWduV0dmSE5kaklxRFdWcWVtSDJla3BPYmtwT2xwcFdVcVppcXI2ZWRxcVdRQUFJZmtFQ1FFQUFRQXNBQUFBQUNnQUtBQUFBcFNNZ1puR2ZhcWNnMUUydXV6RG1tSFVCUjhRaWw5NWhpUEtxV24zYXF0THNTMTh5N0cxU3pOZW93V0JFTnRRZCtUMUprdFAwNW56UFRkSlpsUjZ2VXhOV1dqVit2VVdoV05rV0Z3eGw5VnBaUmVkWWNmbElPTGFmYWEyOFhkc0gveW5sY2MxdVBWRFp4UUlSMEsyNStjSUNDbW9xQ2U1bUdoWk9mZVlTVWg1eUpjSnlya1pXV3BhUjhkb0oybzROWXE2MmxBQUFDSDVCQWtCQUFFQUxBQUFBQUFvQUNnQUFBS1ZESTRZeTIyWm5JTlJOcW9zdzBCdjdpMWd5SFVrRmo3b1NhV2x1M292QzhHeE5zbzVmbHV6M3FMVmhCVmVUL0x6N1pUSHl4TDVkRGFsUVdQVk9zUVd0Um51d1hhRlRqOWpWVmg4cG1hOUpqWjR6WVNqNVpPeW1hN3V1b2xmZmgrSVI1YVc5N2NIdUJVWEtHS1hsS2puK0RpSFdNY1lKYWg0TjBsWUNNbEpPWGlwR1JyNXFkZ29TVHJxV1NxNldGbDJ5cG9hVUFBQUlma0VDUUVBQVFBc0FBQUFBQ2dBS0FBQUFwYUViNkhMZ2QvaU83Rk5XdGNGV2UrdWZPREdqUmZvaUoyYWtTaGJ1ZWIwd3RJNTB6bTAycGJ2d2ZXRU1XQlExektHbExJaHNraUVQbTlSNnZSWHhWNFp6V1QyeUhPR3BXTXlvcmJsS2xOcDhIbUhFYi9sQ1hqY1c3Ym10WFA4WHQyMjlPVldSMWZvZDJlV3FOZkh1TWpYQ1BrSUdOaWxlT2lJbVZtQ09FbW9TZm4zeVhsSldtb0hHaHFwNmlsWXVXWXBtVHFLVWdBQUlma0VDUUVBQVFBc0FBQUFBQ2dBS0FBQUFwaUVINmtiNThiaVEzRk5XdE1GV1czZU5WY29qdUZHZnFuWnFTZWJ1UzA2dzVWODAvWDAycEtlOHpGd1A2RUZXT1QxbERGazhyR0VSaDFUVE5Pb2NRNjFIbTRYbTJWZXhVSHB6anltVmlIckZiaUVMc2VmVnJuNlhLZm50MlE5Ry8rWGRpZTQ5OVhIZDJnNGg3aW9PR2hYR0pib0dBblhTQm5vQndLWXlmaW91YlpKMkhuMFJ1UlphZmxaT2lsNTZacDZpaW9LU1hwVUFBQWgrUVFKQVFBQkFDd0FBQUFBS0FBb0FBQUNrb1FScVJ2bnh1STdrVTFhMVVVNWJkNXRuU2VPWlhobW41bFdLM3FOVFd2UmRReFA4cXZhQysveWFZUXpYTzdCTXZhVUVtSlJkM1RzaU1BZ3N3bU5ZclNnWmRZclRYNnRTSEdaTzczZXp1QXcydXh1UStCYmVaZk14c2V4WTM1Ky9RZTRKMWluVjBnNHgzV0h1TWhJbDJqWE9LVDJRK1ZVNWZnb1NVSTUyVmZaeWZrSkdraGE2am1ZK2FhWWRpcnErbFFBQUNINUJBa0JBQUVBTEFBQUFBQW9BQ2dBQUFLV0JJS3BZZTBMM1lOS1RvcXN3VWx2em5pZ2Q0d2lSNEtoWnJLdDlVcHFpcDYxaTlFM3ZNdnhSZEhsYkVGaUVYZms5WUFSWXhPWlpENlZRMnBVdW5CbXRSWG8xTGY4aE1WVmNObDhKYWZWMzhhTTIvRnU1VjE2Qm42M3I2eHQ5N2owOStNWFNGaTRCbmlHRmFlM2h6Ykg5K2hZQnprcHVVaDVhWm1IdWFuWk9aZ0l1dmJHaU5lb21DbmF4eGFwMnVwYUNac3ErMWtBQUNINUJBa0JBQUVBTEFBQUFBQW9BQ2dBQUFLWGpJOEJ5NXpmNGtPeFRWclhOVmx2MVgwZDhJR1pHS0xuTnBZdG04THI5Y3FWZXVPU3ZmT1c3OUQ5YURIaXpOaERKaWRGWmhOeWRFYWhPYURINm5vbXRKanAxdHV0S29OV2t2QTZKcWZSVkxIVS9RVWZhdTlsMng3RzU0ZDFmbDk5NXhjSUdBZFhxTWZCTmFkb1lyaEgrTWcyS0JscFZwYmx1Q2lYbU1uWjJTaDRHQnFKK2NrSU9xcUo2TG1LU2xsWm1zb3E2d3BRQUFBaCtRUUpBUUFCQUN3QUFBQUFLQUFvQUFBQ2xZeC9vTHZveHVKRGtVMWExWVVaYko1OW5TZDJaWGhXcWJSYTIvZ0Y4R3UyRFkzaXFzN3lycSt4QllFa1l2RlNNOGFTU09iRStaZ1JsMUJIRlpOcjdwUkNhdlo1QlcyMTQyaFkzQU4veld0c21mMTJwOVh4eEZsMmxwTG4xcnNlenRmWFpqZElXSWYyczVkSXR3allLQmdvOXlnNXBIZ3pKWFRFZUdsWnVlbnB5UG1wR1FvS09Xa1ltU3BhU25xS2lsZUkyRkFBQUNINUJBa0JBQUVBTEFBQUFBQW9BQ2dBQUFLVmpCK2d1K2pHNGtPUlRWclZoUmxzbm4yZEozWmxlRmFwdEZyYitDWG1POU9vemVMNVZmUDk5SHZBV2hwaVVkY3drcEJIMzgyNUF3WWRVOHhUcWxMR2h0Q29zQXJLTXB2ZmExbU1SYWU5VnZXWmZlQjJYZlBrZUxtbTE4bFVjQmorcDVkbk44alhaM1lJR0VoWXVPVW40NWFvQ0RrcDE2aGw1SWpZSnZqV0tjbm9HUXBxeVBscE9ocjNhRWxhcXJxNTZCcTdWQUFBT3c9PVxcXCIpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTI1KTtcXG4gIC8qIHN1cHBvcnQ6IElFOCAqL1xcbiAgb3BhY2l0eTogMC4yNTtcXG59XFxuXFxuLnVpLXByb2dyZXNzYmFyLWluZGV0ZXJtaW5hdGUgLnVpLXByb2dyZXNzYmFyLXZhbHVlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxufVxcblxcbi51aS1zZWxlY3RhYmxlIHtcXG4gIC1tcy10b3VjaC1hY3Rpb246IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG5vbmU7XFxufVxcblxcbi51aS1zZWxlY3RhYmxlLWhlbHBlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxMDA7XFxuICBib3JkZXI6IDFweCBkb3R0ZWQgYmxhY2s7XFxufVxcblxcbi51aS1zZWxlY3RtZW51LW1lbnUge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udWktc2VsZWN0bWVudS1tZW51IC51aS1tZW51IHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgcGFkZGluZy1ib3R0b206IDFweDtcXG59XFxuXFxuLnVpLXNlbGVjdG1lbnUtbWVudSAudWktbWVudSAudWktc2VsZWN0bWVudS1vcHRncm91cCB7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIHBhZGRpbmc6IDJweCAwLjRlbTtcXG4gIG1hcmdpbjogMC41ZW0gMCAwIDA7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBib3JkZXI6IDA7XFxufVxcblxcbi51aS1zZWxlY3RtZW51LW9wZW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi51aS1zZWxlY3RtZW51LXRleHQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi51aS1zZWxlY3RtZW51LWJ1dHRvbi51aS1idXR0b24ge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB3aWR0aDogMTRlbTtcXG59XFxuXFxuLnVpLXNlbGVjdG1lbnUtaWNvbi51aS1pY29uIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbi51aS1zbGlkZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLnVpLXNsaWRlciAudWktc2xpZGVyLWhhbmRsZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAyO1xcbiAgd2lkdGg6IDEuMmVtO1xcbiAgaGVpZ2h0OiAxLjJlbTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIC1tcy10b3VjaC1hY3Rpb246IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG5vbmU7XFxufVxcblxcbi51aS1zbGlkZXIgLnVpLXNsaWRlci1yYW5nZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgZm9udC1zaXplOiAwLjdlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyOiAwO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcbn1cXG5cXG4vKiBzdXBwb3J0OiBJRTggLSBTZWUgIzY3MjcgKi9cXG4udWktc2xpZGVyLnVpLXN0YXRlLWRpc2FibGVkIC51aS1zbGlkZXItaGFuZGxlLFxcbi51aS1zbGlkZXIudWktc3RhdGUtZGlzYWJsZWQgLnVpLXNsaWRlci1yYW5nZSB7XFxuICBmaWx0ZXI6IGluaGVyaXQ7XFxufVxcblxcbi51aS1zbGlkZXItaG9yaXpvbnRhbCB7XFxuICBoZWlnaHQ6IDAuOGVtO1xcbn1cXG5cXG4udWktc2xpZGVyLWhvcml6b250YWwgLnVpLXNsaWRlci1oYW5kbGUge1xcbiAgdG9wOiAtMC4zZW07XFxuICBtYXJnaW4tbGVmdDogLTAuNmVtO1xcbn1cXG5cXG4udWktc2xpZGVyLWhvcml6b250YWwgLnVpLXNsaWRlci1yYW5nZSB7XFxuICB0b3A6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi51aS1zbGlkZXItaG9yaXpvbnRhbCAudWktc2xpZGVyLXJhbmdlLW1pbiB7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4udWktc2xpZGVyLWhvcml6b250YWwgLnVpLXNsaWRlci1yYW5nZS1tYXgge1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi51aS1zbGlkZXItdmVydGljYWwge1xcbiAgd2lkdGg6IDAuOGVtO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLnVpLXNsaWRlci12ZXJ0aWNhbCAudWktc2xpZGVyLWhhbmRsZSB7XFxuICBsZWZ0OiAtMC4zZW07XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIG1hcmdpbi1ib3R0b206IC0wLjZlbTtcXG59XFxuXFxuLnVpLXNsaWRlci12ZXJ0aWNhbCAudWktc2xpZGVyLXJhbmdlIHtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnVpLXNsaWRlci12ZXJ0aWNhbCAudWktc2xpZGVyLXJhbmdlLW1pbiB7XFxuICBib3R0b206IDA7XFxufVxcblxcbi51aS1zbGlkZXItdmVydGljYWwgLnVpLXNsaWRlci1yYW5nZS1tYXgge1xcbiAgdG9wOiAwO1xcbn1cXG5cXG4udWktc29ydGFibGUtaGFuZGxlIHtcXG4gIC1tcy10b3VjaC1hY3Rpb246IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG5vbmU7XFxufVxcblxcbi51aS1zcGlubmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAwO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLnVpLXNwaW5uZXItaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgcGFkZGluZzogMC4yMjJlbSAwO1xcbiAgbWFyZ2luOiAwLjJlbSAwO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIG1hcmdpbi1sZWZ0OiAwLjRlbTtcXG4gIG1hcmdpbi1yaWdodDogMmVtO1xcbn1cXG5cXG4udWktc3Bpbm5lci1idXR0b24ge1xcbiAgd2lkdGg6IDEuNmVtO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBmb250LXNpemU6IDAuNWVtO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4vKiBtb3JlIHNwZWNpZmljaXR5IHJlcXVpcmVkIGhlcmUgdG8gb3ZlcnJpZGUgZGVmYXVsdCBib3JkZXJzICovXFxuLnVpLXNwaW5uZXIgYS51aS1zcGlubmVyLWJ1dHRvbiB7XFxuICBib3JkZXItdG9wLXN0eWxlOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnVpLXNwaW5uZXItdXAge1xcbiAgdG9wOiAwO1xcbn1cXG5cXG4udWktc3Bpbm5lci1kb3duIHtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuLnVpLXRhYnMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLyogcG9zaXRpb246IHJlbGF0aXZlIHByZXZlbnRzIElFIHNjcm9sbCBidWcgKGVsZW1lbnQgd2l0aCBwb3NpdGlvbjogcmVsYXRpdmUgaW5zaWRlIGNvbnRhaW5lciB3aXRoIG92ZXJmbG93OiBhdXRvIGFwcGVhciBhcyBcXFwiZml4ZWRcXFwiKSAqL1xcbiAgcGFkZGluZzogMC4yZW07XFxufVxcblxcbi51aS10YWJzIC51aS10YWJzLW5hdiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwLjJlbSAwLjJlbSAwO1xcbn1cXG5cXG4udWktdGFicyAudWktdGFicy1uYXYgbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAwO1xcbiAgbWFyZ2luOiAxcHggMC4yZW0gMCAwO1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4udWktdGFicyAudWktdGFicy1uYXYgLnVpLXRhYnMtYW5jaG9yIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4udWktdGFicyAudWktdGFicy1uYXYgbGkudWktdGFicy1hY3RpdmUge1xcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XFxufVxcblxcbi51aS10YWJzIC51aS10YWJzLW5hdiBsaS51aS10YWJzLWFjdGl2ZSAudWktdGFicy1hbmNob3IsXFxuLnVpLXRhYnMgLnVpLXRhYnMtbmF2IGxpLnVpLXN0YXRlLWRpc2FibGVkIC51aS10YWJzLWFuY2hvcixcXG4udWktdGFicyAudWktdGFicy1uYXYgbGkudWktdGFicy1sb2FkaW5nIC51aS10YWJzLWFuY2hvciB7XFxuICBjdXJzb3I6IHRleHQ7XFxufVxcblxcbi51aS10YWJzLWNvbGxhcHNpYmxlIC51aS10YWJzLW5hdiBsaS51aS10YWJzLWFjdGl2ZSAudWktdGFicy1hbmNob3Ige1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udWktdGFicyAudWktdGFicy1wYW5lbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlci13aWR0aDogMDtcXG4gIHBhZGRpbmc6IDFlbSAxLjRlbTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbi51aS10b29sdGlwIHtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDk5OTk7XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG5ib2R5IC51aS10b29sdGlwIHtcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbn1cXG5cXG4vKiBDb21wb25lbnQgY29udGFpbmVyc1xcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbi51aS13aWRnZXQge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuLnVpLXdpZGdldCAudWktd2lkZ2V0IHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4udWktd2lkZ2V0IGlucHV0LFxcbi51aS13aWRnZXQgc2VsZWN0LFxcbi51aS13aWRnZXQgdGV4dGFyZWEsXFxuLnVpLXdpZGdldCBidXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuLnVpLXdpZGdldC51aS13aWRnZXQtY29udGVudCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYzVjNWM1O1xcbn1cXG5cXG4udWktd2lkZ2V0LWNvbnRlbnQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICBjb2xvcjogIzMzMzMzMztcXG59XFxuXFxuLnVpLXdpZGdldC1jb250ZW50IGEge1xcbiAgY29sb3I6ICMzMzMzMzM7XFxufVxcblxcbi51aS13aWRnZXQtaGVhZGVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XFxuICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnVpLXdpZGdldC1oZWFkZXIgYSB7XFxuICBjb2xvcjogIzMzMzMzMztcXG59XFxuXFxuLyogSW50ZXJhY3Rpb24gc3RhdGVzXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLnVpLXN0YXRlLWRlZmF1bHQsXFxuLnVpLXdpZGdldC1jb250ZW50IC51aS1zdGF0ZS1kZWZhdWx0LFxcbi51aS13aWRnZXQtaGVhZGVyIC51aS1zdGF0ZS1kZWZhdWx0LFxcbi51aS1idXR0b24sXFxuaHRtbCAudWktYnV0dG9uLnVpLXN0YXRlLWRpc2FibGVkOmhvdmVyLFxcbmh0bWwgLnVpLWJ1dHRvbi51aS1zdGF0ZS1kaXNhYmxlZDphY3RpdmUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2M1YzVjNTtcXG4gIGJhY2tncm91bmQ6ICNmNmY2ZjY7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgY29sb3I6ICM0NTQ1NDU7XFxufVxcblxcbi51aS1zdGF0ZS1kZWZhdWx0IGEsXFxuLnVpLXN0YXRlLWRlZmF1bHQgYTpsaW5rLFxcbi51aS1zdGF0ZS1kZWZhdWx0IGE6dmlzaXRlZCxcXG5hLnVpLWJ1dHRvbixcXG5hOmxpbmsudWktYnV0dG9uLFxcbmE6dmlzaXRlZC51aS1idXR0b24sXFxuLnVpLWJ1dHRvbiB7XFxuICBjb2xvcjogIzQ1NDU0NTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnVpLXN0YXRlLWhvdmVyLFxcbi51aS13aWRnZXQtY29udGVudCAudWktc3RhdGUtaG92ZXIsXFxuLnVpLXdpZGdldC1oZWFkZXIgLnVpLXN0YXRlLWhvdmVyLFxcbi51aS1zdGF0ZS1mb2N1cyxcXG4udWktd2lkZ2V0LWNvbnRlbnQgLnVpLXN0YXRlLWZvY3VzLFxcbi51aS13aWRnZXQtaGVhZGVyIC51aS1zdGF0ZS1mb2N1cyxcXG4udWktYnV0dG9uOmhvdmVyLFxcbi51aS1idXR0b246Zm9jdXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcXG4gIGJhY2tncm91bmQ6ICNlZGVkZWQ7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgY29sb3I6ICMyYjJiMmI7XFxufVxcblxcbi51aS1zdGF0ZS1ob3ZlciBhLFxcbi51aS1zdGF0ZS1ob3ZlciBhOmhvdmVyLFxcbi51aS1zdGF0ZS1ob3ZlciBhOmxpbmssXFxuLnVpLXN0YXRlLWhvdmVyIGE6dmlzaXRlZCxcXG4udWktc3RhdGUtZm9jdXMgYSxcXG4udWktc3RhdGUtZm9jdXMgYTpob3ZlcixcXG4udWktc3RhdGUtZm9jdXMgYTpsaW5rLFxcbi51aS1zdGF0ZS1mb2N1cyBhOnZpc2l0ZWQsXFxuYS51aS1idXR0b246aG92ZXIsXFxuYS51aS1idXR0b246Zm9jdXMge1xcbiAgY29sb3I6ICMyYjJiMmI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi51aS12aXN1YWwtZm9jdXMge1xcbiAgYm94LXNoYWRvdzogMCAwIDNweCAxcHggIzVlOWVkNjtcXG59XFxuXFxuLnVpLXN0YXRlLWFjdGl2ZSxcXG4udWktd2lkZ2V0LWNvbnRlbnQgLnVpLXN0YXRlLWFjdGl2ZSxcXG4udWktd2lkZ2V0LWhlYWRlciAudWktc3RhdGUtYWN0aXZlLFxcbmEudWktYnV0dG9uOmFjdGl2ZSxcXG4udWktYnV0dG9uOmFjdGl2ZSxcXG4udWktYnV0dG9uLnVpLXN0YXRlLWFjdGl2ZTpob3ZlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAzZWZmO1xcbiAgYmFja2dyb3VuZDogIzAwN2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLnVpLWljb24tYmFja2dyb3VuZCxcXG4udWktc3RhdGUtYWN0aXZlIC51aS1pY29uLWJhY2tncm91bmQge1xcbiAgYm9yZGVyOiAjMDAzZWZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLnVpLXN0YXRlLWFjdGl2ZSBhLFxcbi51aS1zdGF0ZS1hY3RpdmUgYTpsaW5rLFxcbi51aS1zdGF0ZS1hY3RpdmUgYTp2aXNpdGVkIHtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4vKiBJbnRlcmFjdGlvbiBDdWVzXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLnVpLXN0YXRlLWhpZ2hsaWdodCxcXG4udWktd2lkZ2V0LWNvbnRlbnQgLnVpLXN0YXRlLWhpZ2hsaWdodCxcXG4udWktd2lkZ2V0LWhlYWRlciAudWktc3RhdGUtaGlnaGxpZ2h0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYWQ1NWU7XFxuICBiYWNrZ3JvdW5kOiAjZmZmYTkwO1xcbiAgY29sb3I6ICM3Nzc2MjA7XFxufVxcblxcbi51aS1zdGF0ZS1jaGVja2VkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYWQ1NWU7XFxuICBiYWNrZ3JvdW5kOiAjZmZmYTkwO1xcbn1cXG5cXG4udWktc3RhdGUtaGlnaGxpZ2h0IGEsXFxuLnVpLXdpZGdldC1jb250ZW50IC51aS1zdGF0ZS1oaWdobGlnaHQgYSxcXG4udWktd2lkZ2V0LWhlYWRlciAudWktc3RhdGUtaGlnaGxpZ2h0IGEge1xcbiAgY29sb3I6ICM3Nzc2MjA7XFxufVxcblxcbi51aS1zdGF0ZS1lcnJvcixcXG4udWktd2lkZ2V0LWNvbnRlbnQgLnVpLXN0YXRlLWVycm9yLFxcbi51aS13aWRnZXQtaGVhZGVyIC51aS1zdGF0ZS1lcnJvciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFhODk5O1xcbiAgYmFja2dyb3VuZDogI2ZkZGZkZjtcXG4gIGNvbG9yOiAjNWYzZjNmO1xcbn1cXG5cXG4udWktc3RhdGUtZXJyb3IgYSxcXG4udWktd2lkZ2V0LWNvbnRlbnQgLnVpLXN0YXRlLWVycm9yIGEsXFxuLnVpLXdpZGdldC1oZWFkZXIgLnVpLXN0YXRlLWVycm9yIGEge1xcbiAgY29sb3I6ICM1ZjNmM2Y7XFxufVxcblxcbi51aS1zdGF0ZS1lcnJvci10ZXh0LFxcbi51aS13aWRnZXQtY29udGVudCAudWktc3RhdGUtZXJyb3ItdGV4dCxcXG4udWktd2lkZ2V0LWhlYWRlciAudWktc3RhdGUtZXJyb3ItdGV4dCB7XFxuICBjb2xvcjogIzVmM2YzZjtcXG59XFxuXFxuLnVpLXByaW9yaXR5LXByaW1hcnksXFxuLnVpLXdpZGdldC1jb250ZW50IC51aS1wcmlvcml0eS1wcmltYXJ5LFxcbi51aS13aWRnZXQtaGVhZGVyIC51aS1wcmlvcml0eS1wcmltYXJ5IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udWktcHJpb3JpdHktc2Vjb25kYXJ5LFxcbi51aS13aWRnZXQtY29udGVudCAudWktcHJpb3JpdHktc2Vjb25kYXJ5LFxcbi51aS13aWRnZXQtaGVhZGVyIC51aS1wcmlvcml0eS1zZWNvbmRhcnkge1xcbiAgb3BhY2l0eTogMC43O1xcbiAgZmlsdGVyOiBBbHBoYShPcGFjaXR5PTcwKTtcXG4gIC8qIHN1cHBvcnQ6IElFOCAqL1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLnVpLXN0YXRlLWRpc2FibGVkLFxcbi51aS13aWRnZXQtY29udGVudCAudWktc3RhdGUtZGlzYWJsZWQsXFxuLnVpLXdpZGdldC1oZWFkZXIgLnVpLXN0YXRlLWRpc2FibGVkIHtcXG4gIG9wYWNpdHk6IDAuMzU7XFxuICBmaWx0ZXI6IEFscGhhKE9wYWNpdHk9MzUpO1xcbiAgLyogc3VwcG9ydDogSUU4ICovXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbn1cXG5cXG4udWktc3RhdGUtZGlzYWJsZWQgLnVpLWljb24ge1xcbiAgZmlsdGVyOiBBbHBoYShPcGFjaXR5PTM1KTtcXG4gIC8qIHN1cHBvcnQ6IElFOCAtIFNlZSAjNjA1OSAqL1xcbn1cXG5cXG4vKiBJY29uc1xcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbi8qIHN0YXRlcyBhbmQgaW1hZ2VzICovXFxuLnVpLWljb24ge1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxufVxcblxcbi51aS1pY29uLFxcbi51aS13aWRnZXQtY29udGVudCAudWktaWNvbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi9pbWFnZS9qcXVlcnl1aS91aS1pY29uc180NDQ0NDRfMjU2eDI0MC5wbmdcXFwiKTtcXG59XFxuXFxuLnVpLXdpZGdldC1oZWFkZXIgLnVpLWljb24ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIvaW1hZ2UvanF1ZXJ5dWkvdWktaWNvbnNfNDQ0NDQ0XzI1NngyNDAucG5nXFxcIik7XFxufVxcblxcbi51aS1zdGF0ZS1ob3ZlciAudWktaWNvbixcXG4udWktc3RhdGUtZm9jdXMgLnVpLWljb24sXFxuLnVpLWJ1dHRvbjpob3ZlciAudWktaWNvbixcXG4udWktYnV0dG9uOmZvY3VzIC51aS1pY29uIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiL2ltYWdlL2pxdWVyeXVpL3VpLWljb25zXzU1NTU1NV8yNTZ4MjQwLnBuZ1xcXCIpO1xcbn1cXG5cXG4udWktc3RhdGUtYWN0aXZlIC51aS1pY29uLFxcbi51aS1idXR0b246YWN0aXZlIC51aS1pY29uIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiL2ltYWdlL2pxdWVyeXVpL3VpLWljb25zX2ZmZmZmZl8yNTZ4MjQwLnBuZ1xcXCIpO1xcbn1cXG5cXG4udWktc3RhdGUtaGlnaGxpZ2h0IC51aS1pY29uLFxcbi51aS1idXR0b24gLnVpLXN0YXRlLWhpZ2hsaWdodC51aS1pY29uIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiL2ltYWdlL2pxdWVyeXVpL3VpLWljb25zXzc3NzYyMF8yNTZ4MjQwLnBuZ1xcXCIpO1xcbn1cXG5cXG4udWktc3RhdGUtZXJyb3IgLnVpLWljb24sXFxuLnVpLXN0YXRlLWVycm9yLXRleHQgLnVpLWljb24ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIvaW1hZ2UvanF1ZXJ5dWkvdWktaWNvbnNfY2MwMDAwXzI1NngyNDAucG5nXFxcIik7XFxufVxcblxcbi51aS1idXR0b24gLnVpLWljb24ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIvaW1hZ2UvanF1ZXJ5dWkvdWktaWNvbnNfNzc3Nzc3XzI1NngyNDAucG5nXFxcIik7XFxufVxcblxcbi8qIHBvc2l0aW9uaW5nICovXFxuLnVpLWljb24tYmxhbmsge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTZweCAxNnB4O1xcbn1cXG5cXG4udWktaWNvbi1jYXJldC0xLW4ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcbn1cXG5cXG4udWktaWNvbi1jYXJldC0xLW5lIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IDA7XFxufVxcblxcbi51aS1pY29uLWNhcmV0LTEtZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAwO1xcbn1cXG5cXG4udWktaWNvbi1jYXJldC0xLXNlIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IDA7XFxufVxcblxcbi51aS1pY29uLWNhcmV0LTEtcyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjVweCAwO1xcbn1cXG5cXG4udWktaWNvbi1jYXJldC0xLXN3IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IDA7XFxufVxcblxcbi51aS1pY29uLWNhcmV0LTEtdyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAwO1xcbn1cXG5cXG4udWktaWNvbi1jYXJldC0xLW53IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAwO1xcbn1cXG5cXG4udWktaWNvbi1jYXJldC0yLW4tcyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggMDtcXG59XFxuXFxuLnVpLWljb24tY2FyZXQtMi1lLXcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IDA7XFxufVxcblxcbi51aS1pY29uLXRyaWFuZ2xlLTEtbiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0xNnB4O1xcbn1cXG5cXG4udWktaWNvbi10cmlhbmdsZS0xLW5lIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC0xNnB4O1xcbn1cXG5cXG4udWktaWNvbi10cmlhbmdsZS0xLWUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTE2cHg7XFxufVxcblxcbi51aS1pY29uLXRyaWFuZ2xlLTEtc2Uge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTE2cHg7XFxufVxcblxcbi51aS1pY29uLXRyaWFuZ2xlLTEtcyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjVweCAtMTZweDtcXG59XFxuXFxuLnVpLWljb24tdHJpYW5nbGUtMS1zdyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTZweDtcXG59XFxuXFxuLnVpLWljb24tdHJpYW5nbGUtMS13IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xNnB4O1xcbn1cXG5cXG4udWktaWNvbi10cmlhbmdsZS0xLW53IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtMTZweDtcXG59XFxuXFxuLnVpLWljb24tdHJpYW5nbGUtMi1uLXMge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC0xNnB4O1xcbn1cXG5cXG4udWktaWNvbi10cmlhbmdsZS0yLWUtdyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTE2cHg7XFxufVxcblxcbi51aS1pY29uLWFycm93LTEtbiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0zMnB4O1xcbn1cXG5cXG4udWktaWNvbi1hcnJvdy0xLW5lIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC0zMnB4O1xcbn1cXG5cXG4udWktaWNvbi1hcnJvdy0xLWUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTMycHg7XFxufVxcblxcbi51aS1pY29uLWFycm93LTEtc2Uge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTMycHg7XFxufVxcblxcbi51aS1pY29uLWFycm93LTEtcyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjVweCAtMzJweDtcXG59XFxuXFxuLnVpLWljb24tYXJyb3ctMS1zdyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMzJweDtcXG59XFxuXFxuLnVpLWljb24tYXJyb3ctMS13IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0zMnB4O1xcbn1cXG5cXG4udWktaWNvbi1hcnJvdy0xLW53IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtMzJweDtcXG59XFxuXFxuLnVpLWljb24tYXJyb3ctMi1uLXMge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC0zMnB4O1xcbn1cXG5cXG4udWktaWNvbi1hcnJvdy0yLW5lLXN3IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtMzJweDtcXG59XFxuXFxuLnVpLWljb24tYXJyb3ctMi1lLXcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IC0zMnB4O1xcbn1cXG5cXG4udWktaWNvbi1hcnJvdy0yLXNlLW53IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNzZweCAtMzJweDtcXG59XFxuXFxuLnVpLWljb24tYXJyb3dzdG9wLTEtbiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTMycHg7XFxufVxcblxcbi51aS1pY29uLWFycm93c3RvcC0xLWUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwOHB4IC0zMnB4O1xcbn1cXG5cXG4udWktaWNvbi1hcnJvd3N0b3AtMS1zIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yMjRweCAtMzJweDtcXG59XFxuXFxuLnVpLWljb24tYXJyb3dzdG9wLTEtdyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjQwcHggLTMycHg7XFxufVxcblxcbi51aS1pY29uLWFycm93dGhpY2stMS1uIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDFweCAtNDhweDtcXG59XFxuXFxuLnVpLWljb24tYXJyb3d0aGljay0xLW5lIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC00OHB4O1xcbn1cXG5cXG4udWktaWNvbi1hcnJvd3RoaWNrLTEtZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtNDhweDtcXG59XFxuXFxuLnVpLWljb24tYXJyb3d0aGljay0xLXNlIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC00OHB4O1xcbn1cXG5cXG4udWktaWNvbi1hcnJvd3RoaWNrLTEtcyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtNDhweDtcXG59XFxuXFxuLnVpLWljb24tYXJyb3d0aGljay0xLXN3IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC00OHB4O1xcbn1cXG5cXG4udWktaWNvbi1hcnJvd3RoaWNrLTEtdyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtNDhweDtcXG59XFxuXFxuLnVpLWljb24tYXJyb3d0aGljay0xLW53IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtNDhweDtcXG59XFxuXFxuLnVpLWljb24tYXJyb3d0aGljay0yLW4tcyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTQ4cHg7XFxufVxcblxcbi51aS1pY29uLWFycm93dGhpY2stMi1uZS1zdyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTQ4cHg7XFxufVxcblxcbi51aS1pY29uLWFycm93dGhpY2stMi1lLXcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IC00OHB4O1xcbn1cXG5cXG4udWktaWNvbi1hcnJvd3RoaWNrLTItc2Utbncge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE3NnB4IC00OHB4O1xcbn1cXG5cXG4udWktaWNvbi1hcnJvd3RoaWNrc3RvcC0xLW4ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE5MnB4IC00OHB4O1xcbn1cXG5cXG4udWktaWNvbi1hcnJvd3RoaWNrc3RvcC0xLWUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwOHB4IC00OHB4O1xcbn1cXG5cXG4udWktaWNvbi1hcnJvd3RoaWNrc3RvcC0xLXMge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIyNHB4IC00OHB4O1xcbn1cXG5cXG4udWktaWNvbi1hcnJvd3RoaWNrc3RvcC0xLXcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI0MHB4IC00OHB4O1xcbn1cXG5cXG4udWktaWNvbi1hcnJvd3JldHVybnRoaWNrLTEtdyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC02NHB4O1xcbn1cXG5cXG4udWktaWNvbi1hcnJvd3JldHVybnRoaWNrLTEtbiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtNjRweDtcXG59XFxuXFxuLnVpLWljb24tYXJyb3dyZXR1cm50aGljay0xLWUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTY0cHg7XFxufVxcblxcbi51aS1pY29uLWFycm93cmV0dXJudGhpY2stMS1zIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC02NHB4O1xcbn1cXG5cXG4udWktaWNvbi1hcnJvd3JldHVybi0xLXcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTY0cHg7XFxufVxcblxcbi51aS1pY29uLWFycm93cmV0dXJuLTEtbiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtNjRweDtcXG59XFxuXFxuLnVpLWljb24tYXJyb3dyZXR1cm4tMS1lIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC02NHB4O1xcbn1cXG5cXG4udWktaWNvbi1hcnJvd3JldHVybi0xLXMge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC02NHB4O1xcbn1cXG5cXG4udWktaWNvbi1hcnJvd3JlZnJlc2gtMS13IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtNjRweDtcXG59XFxuXFxuLnVpLWljb24tYXJyb3dyZWZyZXNoLTEtbiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTY0cHg7XFxufVxcblxcbi51aS1pY29uLWFycm93cmVmcmVzaC0xLWUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IC02NHB4O1xcbn1cXG5cXG4udWktaWNvbi1hcnJvd3JlZnJlc2gtMS1zIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNzZweCAtNjRweDtcXG59XFxuXFxuLnVpLWljb24tYXJyb3ctNCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC04MHB4O1xcbn1cXG5cXG4udWktaWNvbi1hcnJvdy00LWRpYWcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTgwcHg7XFxufVxcblxcbi51aS1pY29uLWV4dGxpbmsge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTgwcHg7XFxufVxcblxcbi51aS1pY29uLW5ld3dpbiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtODBweDtcXG59XFxuXFxuLnVpLWljb24tcmVmcmVzaCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtODBweDtcXG59XFxuXFxuLnVpLWljb24tc2h1ZmZsZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtODBweDtcXG59XFxuXFxuLnVpLWljb24tdHJhbnNmZXItZS13IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC04MHB4O1xcbn1cXG5cXG4udWktaWNvbi10cmFuc2ZlcnRoaWNrLWUtdyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTgwcHg7XFxufVxcblxcbi51aS1pY29uLWZvbGRlci1jb2xsYXBzZWQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtOTZweDtcXG59XFxuXFxuLnVpLWljb24tZm9sZGVyLW9wZW4ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTk2cHg7XFxufVxcblxcbi51aS1pY29uLWRvY3VtZW50IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC05NnB4O1xcbn1cXG5cXG4udWktaWNvbi1kb2N1bWVudC1iIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC05NnB4O1xcbn1cXG5cXG4udWktaWNvbi1ub3RlIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC05NnB4O1xcbn1cXG5cXG4udWktaWNvbi1tYWlsLWNsb3NlZCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtOTZweDtcXG59XFxuXFxuLnVpLWljb24tbWFpbC1vcGVuIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC05NnB4O1xcbn1cXG5cXG4udWktaWNvbi1zdWl0Y2FzZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTk2cHg7XFxufVxcblxcbi51aS1pY29uLWNvbW1lbnQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC05NnB4O1xcbn1cXG5cXG4udWktaWNvbi1wZXJzb24ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC05NnB4O1xcbn1cXG5cXG4udWktaWNvbi1wcmludCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTYwcHggLTk2cHg7XFxufVxcblxcbi51aS1pY29uLXRyYXNoIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNzZweCAtOTZweDtcXG59XFxuXFxuLnVpLWljb24tbG9ja2VkIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAtOTZweDtcXG59XFxuXFxuLnVpLWljb24tdW5sb2NrZWQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwOHB4IC05NnB4O1xcbn1cXG5cXG4udWktaWNvbi1ib29rbWFyayB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI0cHggLTk2cHg7XFxufVxcblxcbi51aS1pY29uLXRhZyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjQwcHggLTk2cHg7XFxufVxcblxcbi51aS1pY29uLWhvbWUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMTEycHg7XFxufVxcblxcbi51aS1pY29uLWZsYWcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTExMnB4O1xcbn1cXG5cXG4udWktaWNvbi1jYWxlbmRhciB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMTEycHg7XFxufVxcblxcbi51aS1pY29uLWNhcnQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTExMnB4O1xcbn1cXG5cXG4udWktaWNvbi1wZW5jaWwge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTExMnB4O1xcbn1cXG5cXG4udWktaWNvbi1jbG9jayB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTEycHg7XFxufVxcblxcbi51aS1pY29uLWRpc2sge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTExMnB4O1xcbn1cXG5cXG4udWktaWNvbi1jYWxjdWxhdG9yIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtMTEycHg7XFxufVxcblxcbi51aS1pY29uLXpvb21pbiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTExMnB4O1xcbn1cXG5cXG4udWktaWNvbi16b29tb3V0IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtMTEycHg7XFxufVxcblxcbi51aS1pY29uLXNlYXJjaCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTYwcHggLTExMnB4O1xcbn1cXG5cXG4udWktaWNvbi13cmVuY2gge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE3NnB4IC0xMTJweDtcXG59XFxuXFxuLnVpLWljb24tZ2VhciB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTExMnB4O1xcbn1cXG5cXG4udWktaWNvbi1oZWFydCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjA4cHggLTExMnB4O1xcbn1cXG5cXG4udWktaWNvbi1zdGFyIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yMjRweCAtMTEycHg7XFxufVxcblxcbi51aS1pY29uLWxpbmsge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI0MHB4IC0xMTJweDtcXG59XFxuXFxuLnVpLWljb24tY2FuY2VsIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTEyOHB4O1xcbn1cXG5cXG4udWktaWNvbi1wbHVzIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC0xMjhweDtcXG59XFxuXFxuLnVpLWljb24tcGx1c3RoaWNrIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC0xMjhweDtcXG59XFxuXFxuLnVpLWljb24tbWludXMge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTEyOHB4O1xcbn1cXG5cXG4udWktaWNvbi1taW51c3RoaWNrIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC0xMjhweDtcXG59XFxuXFxuLnVpLWljb24tY2xvc2Uge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTEyOHB4O1xcbn1cXG5cXG4udWktaWNvbi1jbG9zZXRoaWNrIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xMjhweDtcXG59XFxuXFxuLnVpLWljb24ta2V5IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtMTI4cHg7XFxufVxcblxcbi51aS1pY29uLWxpZ2h0YnVsYiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTEyOHB4O1xcbn1cXG5cXG4udWktaWNvbi1zY2lzc29ycyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTEyOHB4O1xcbn1cXG5cXG4udWktaWNvbi1jbGlwYm9hcmQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IC0xMjhweDtcXG59XFxuXFxuLnVpLWljb24tY29weSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTc2cHggLTEyOHB4O1xcbn1cXG5cXG4udWktaWNvbi1jb250YWN0IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAtMTI4cHg7XFxufVxcblxcbi51aS1pY29uLWltYWdlIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDhweCAtMTI4cHg7XFxufVxcblxcbi51aS1pY29uLXZpZGVvIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yMjRweCAtMTI4cHg7XFxufVxcblxcbi51aS1pY29uLXNjcmlwdCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjQwcHggLTEyOHB4O1xcbn1cXG5cXG4udWktaWNvbi1hbGVydCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0xNDRweDtcXG59XFxuXFxuLnVpLWljb24taW5mbyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtMTQ0cHg7XFxufVxcblxcbi51aS1pY29uLW5vdGljZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMTQ0cHg7XFxufVxcblxcbi51aS1pY29uLWhlbHAge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTE0NHB4O1xcbn1cXG5cXG4udWktaWNvbi1jaGVjayB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtMTQ0cHg7XFxufVxcblxcbi51aS1pY29uLWJ1bGxldCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTQ0cHg7XFxufVxcblxcbi51aS1pY29uLXJhZGlvLW9uIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xNDRweDtcXG59XFxuXFxuLnVpLWljb24tcmFkaW8tb2ZmIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtMTQ0cHg7XFxufVxcblxcbi51aS1pY29uLXBpbi13IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtMTQ0cHg7XFxufVxcblxcbi51aS1pY29uLXBpbi1zIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtMTQ0cHg7XFxufVxcblxcbi51aS1pY29uLXBsYXkge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMTYwcHg7XFxufVxcblxcbi51aS1pY29uLXBhdXNlIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC0xNjBweDtcXG59XFxuXFxuLnVpLWljb24tc2Vlay1uZXh0IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC0xNjBweDtcXG59XFxuXFxuLnVpLWljb24tc2Vlay1wcmV2IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC0xNjBweDtcXG59XFxuXFxuLnVpLWljb24tc2Vlay1lbmQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTE2MHB4O1xcbn1cXG5cXG4udWktaWNvbi1zZWVrLXN0YXJ0IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0xNjBweDtcXG59XFxuXFxuLyogdWktaWNvbi1zZWVrLWZpcnN0IGlzIGRlcHJlY2F0ZWQsIHVzZSB1aS1pY29uLXNlZWstc3RhcnQgaW5zdGVhZCAqL1xcbi51aS1pY29uLXNlZWstZmlyc3Qge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTE2MHB4O1xcbn1cXG5cXG4udWktaWNvbi1zdG9wIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xNjBweDtcXG59XFxuXFxuLnVpLWljb24tZWplY3Qge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC0xNjBweDtcXG59XFxuXFxuLnVpLWljb24tdm9sdW1lLW9mZiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTE2MHB4O1xcbn1cXG5cXG4udWktaWNvbi12b2x1bWUtb24ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC0xNjBweDtcXG59XFxuXFxuLnVpLWljb24tcG93ZXIge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMTc2cHg7XFxufVxcblxcbi51aS1pY29uLXNpZ25hbC1kaWFnIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC0xNzZweDtcXG59XFxuXFxuLnVpLWljb24tc2lnbmFsIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC0xNzZweDtcXG59XFxuXFxuLnVpLWljb24tYmF0dGVyeS0wIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC0xNzZweDtcXG59XFxuXFxuLnVpLWljb24tYmF0dGVyeS0xIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC0xNzZweDtcXG59XFxuXFxuLnVpLWljb24tYmF0dGVyeS0yIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0xNzZweDtcXG59XFxuXFxuLnVpLWljb24tYmF0dGVyeS0zIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xNzZweDtcXG59XFxuXFxuLnVpLWljb24tY2lyY2xlLXBsdXMge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMTkycHg7XFxufVxcblxcbi51aS1pY29uLWNpcmNsZS1taW51cyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtMTkycHg7XFxufVxcblxcbi51aS1pY29uLWNpcmNsZS1jbG9zZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMTkycHg7XFxufVxcblxcbi51aS1pY29uLWNpcmNsZS10cmlhbmdsZS1lIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC0xOTJweDtcXG59XFxuXFxuLnVpLWljb24tY2lyY2xlLXRyaWFuZ2xlLXMge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTE5MnB4O1xcbn1cXG5cXG4udWktaWNvbi1jaXJjbGUtdHJpYW5nbGUtdyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTkycHg7XFxufVxcblxcbi51aS1pY29uLWNpcmNsZS10cmlhbmdsZS1uIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xOTJweDtcXG59XFxuXFxuLnVpLWljb24tY2lyY2xlLWFycm93LWUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC0xOTJweDtcXG59XFxuXFxuLnVpLWljb24tY2lyY2xlLWFycm93LXMge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC0xOTJweDtcXG59XFxuXFxuLnVpLWljb24tY2lyY2xlLWFycm93LXcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC0xOTJweDtcXG59XFxuXFxuLnVpLWljb24tY2lyY2xlLWFycm93LW4ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IC0xOTJweDtcXG59XFxuXFxuLnVpLWljb24tY2lyY2xlLXpvb21pbiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTc2cHggLTE5MnB4O1xcbn1cXG5cXG4udWktaWNvbi1jaXJjbGUtem9vbW91dCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTE5MnB4O1xcbn1cXG5cXG4udWktaWNvbi1jaXJjbGUtY2hlY2sge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwOHB4IC0xOTJweDtcXG59XFxuXFxuLnVpLWljb24tY2lyY2xlc21hbGwtcGx1cyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0yMDhweDtcXG59XFxuXFxuLnVpLWljb24tY2lyY2xlc21hbGwtbWludXMge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTIwOHB4O1xcbn1cXG5cXG4udWktaWNvbi1jaXJjbGVzbWFsbC1jbG9zZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMjA4cHg7XFxufVxcblxcbi51aS1pY29uLXNxdWFyZXNtYWxsLXBsdXMge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTIwOHB4O1xcbn1cXG5cXG4udWktaWNvbi1zcXVhcmVzbWFsbC1taW51cyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtMjA4cHg7XFxufVxcblxcbi51aS1pY29uLXNxdWFyZXNtYWxsLWNsb3NlIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0yMDhweDtcXG59XFxuXFxuLnVpLWljb24tZ3JpcC1kb3R0ZWQtdmVydGljYWwge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMjI0cHg7XFxufVxcblxcbi51aS1pY29uLWdyaXAtZG90dGVkLWhvcml6b250YWwge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTIyNHB4O1xcbn1cXG5cXG4udWktaWNvbi1ncmlwLXNvbGlkLXZlcnRpY2FsIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC0yMjRweDtcXG59XFxuXFxuLnVpLWljb24tZ3JpcC1zb2xpZC1ob3Jpem9udGFsIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC0yMjRweDtcXG59XFxuXFxuLnVpLWljb24tZ3JpcHNtYWxsLWRpYWdvbmFsLXNlIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC0yMjRweDtcXG59XFxuXFxuLnVpLWljb24tZ3JpcC1kaWFnb25hbC1zZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMjI0cHg7XFxufVxcblxcbi8qIE1pc2MgdmlzdWFsc1xcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbi8qIENvcm5lciByYWRpdXMgKi9cXG4udWktY29ybmVyLWFsbCxcXG4udWktY29ybmVyLXRvcCxcXG4udWktY29ybmVyLWxlZnQsXFxuLnVpLWNvcm5lci10bCB7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XFxufVxcblxcbi51aS1jb3JuZXItYWxsLFxcbi51aS1jb3JuZXItdG9wLFxcbi51aS1jb3JuZXItcmlnaHQsXFxuLnVpLWNvcm5lci10ciB7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xcbn1cXG5cXG4udWktY29ybmVyLWFsbCxcXG4udWktY29ybmVyLWJvdHRvbSxcXG4udWktY29ybmVyLWxlZnQsXFxuLnVpLWNvcm5lci1ibCB7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XFxufVxcblxcbi51aS1jb3JuZXItYWxsLFxcbi51aS1jb3JuZXItYm90dG9tLFxcbi51aS1jb3JuZXItcmlnaHQsXFxuLnVpLWNvcm5lci1iciB7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xcbn1cXG5cXG4vKiBPdmVybGF5cyAqL1xcbi51aS13aWRnZXQtb3ZlcmxheSB7XFxuICBiYWNrZ3JvdW5kOiAjYWFhYWFhO1xcbiAgb3BhY2l0eTogMC4zO1xcbiAgZmlsdGVyOiBBbHBoYShPcGFjaXR5PTMwKTtcXG4gIC8qIHN1cHBvcnQ6IElFOCAqL1xcbn1cXG5cXG4udWktd2lkZ2V0LXNoYWRvdyB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNXB4ICM2NjY2NjY7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAjNjY2NjY2O1xcbn1cXG5cXG4ubW9kYWwtYm9va2luZyAudGl0bGUge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY29sb3I6ICMwZDQ3YTE7XFxuICBwYWRkaW5nOiAwIDVweCA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tb2RhbC1ib29raW5nIC53cmFwcGVyX19kYXRldGltZS1waWNrZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwtYm9va2luZyAud3JhcHBlcl9fZGF0ZXRpbWUtcGlja2VyIC5pbnB1dC1ncm91cCB7XFxuICB3aWR0aDogMzAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW46IDAgMS41JSAxNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAzN3B4O1xcbn1cXG4ubW9kYWwtYm9va2luZyAud3JhcHBlcl9fZGF0ZXRpbWUtcGlja2VyIC5pbnB1dC1ncm91cCAuaGVyby1pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogMTBweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgei1pbmRleDogMztcXG4gIGNvbG9yOiAjNmM3NTdkO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxufVxcbi5tb2RhbC1ib29raW5nIC53cmFwcGVyX19kYXRldGltZS1waWNrZXIgLmlucHV0LWdyb3VwIC5pbnB1dC1jb250cm9sIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgY29sb3I6ICM1MjU2NjY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZy1sZWZ0OiA0NXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIHRyYW5zaXRpb246IGJvcmRlciAwLjNzIGxpbmVhcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxufVxcbi5tb2RhbC1ib29raW5nIC53cmFwcGVyX19kYXRldGltZS1waWNrZXIgLmlucHV0LWdyb3VwIC50ZXh0LWNvbnRyb2wge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBjb2xvcjogIzUyNTY2NjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAyNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIHRyYW5zaXRpb246IGJvcmRlciAwLjNzIGxpbmVhcjtcXG59XFxuLm1vZGFsLWJvb2tpbmcgLnN0YXRpc3RpY2FsIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5tb2RhbC1ib29raW5nIC5zdGF0aXN0aWNhbCAuc2Vzc2lvbi1zdGF0aXN0aWNhbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDVweCAwO1xcbn1cXG4ubW9kYWwtYm9va2luZyAuc3RhdGlzdGljYWwgLnNlc3Npb24tc3RhdGlzdGljYWw6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMDtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLm1vZGFsLWJvb2tpbmcgLnN0YXRpc3RpY2FsIC5zZXNzaW9uLXN0YXRpc3RpY2FsIC5oZWFkIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgei1pbmRleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcbi5tb2RhbC1ib29raW5nIC5zdGF0aXN0aWNhbCAuc2Vzc2lvbi1zdGF0aXN0aWNhbCAuaGVhZCBzcGFuIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi5tb2RhbC1ib29raW5nIC5zdGF0aXN0aWNhbCAuc2Vzc2lvbi1zdGF0aXN0aWNhbCAuaGVhZDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICMzNDNhNDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAtMTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMTVweDtcXG59XFxuLm1vZGFsLWJvb2tpbmcgLnN0YXRpc3RpY2FsIC5zZXNzaW9uLXN0YXRpc3RpY2FsIC50ZXh0LXZhbHVlIHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICMwZDQ3YTE7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIG1pbi13aWR0aDogNjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcbi5tb2RhbC1ib29raW5nIC5zdGF0aXN0aWNhbCAuc2Vzc2lvbi1zdGF0aXN0aWNhbC5ub3RlIHtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG59XFxuLm1vZGFsLWJvb2tpbmcgLmdyb3VwLWJveC10b3RhbCB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XFxufVxcbi5tb2RhbC1ib29raW5nIC5ncm91cC1ib3gtdG90YWwgLndyYXBwZXJfX3RvdGFsIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogdGFibGU7XFxufVxcbi5tb2RhbC1ib29raW5nIC5ncm91cC1ib3gtdG90YWwgLndyYXBwZXJfX3RvdGFsIC5oZWFkLCAubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyX190b3RhbCAudGV4dC12YWx1ZSB7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbn1cXG4ubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyX190b3RhbCAudGV4dC12YWx1ZSB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuLm1vZGFsLWJvb2tpbmcgLmdyb3VwLWJveC10b3RhbCAudGV4dC1idXR0b24tcXVlc3Rpb24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyLWJ1dHRvbi1zZXR0aW5nIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1vZGFsLWJvb2tpbmcgLmdyb3VwLWJveC10b3RhbCAud3JhcHBlci1idXR0b24tc2V0dGluZyAuYnRuLWJvb2tpbmcge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbWFyZ2luOiAycHggMTBweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDhweCAxNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICNmZmY7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgLXdlYmtpdC1ib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgLXdlYmtpdC1ib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgLW8tdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LWJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tb2RhbC1ib29raW5nIC5ncm91cC1ib3gtdG90YWwgLndyYXBwZXItYnV0dG9uLXNldHRpbmcgLmJ0bi1zaXR0ZXItYWNjZXB0IHtcXG4gIGJhY2tncm91bmQ6ICMwMDdiZmM7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDA3YmZjO1xcbn1cXG4ubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyLWJ1dHRvbi1zZXR0aW5nIC5idG4tc2l0dGVyLWFjY2VwdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2EzY2ZmZTtcXG4gIGNvbG9yOiAjMDA3YmZjO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxufVxcbi5tb2RhbC1ib29raW5nIC5ncm91cC1ib3gtdG90YWwgLndyYXBwZXItYnV0dG9uLXNldHRpbmcgLmJ0bi1zaXR0ZXItYWNjZXB0OmZvY3VzLCAubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyLWJ1dHRvbi1zZXR0aW5nIC5idG4tc2l0dGVyLWFjY2VwdC5mb2N1cyB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIG91dGxpbmU6IDA7XFxufVxcbi5tb2RhbC1ib29raW5nIC5ncm91cC1ib3gtdG90YWwgLndyYXBwZXItYnV0dG9uLXNldHRpbmcgLmJ0bi1zaXR0ZXItYWNjZXB0OmRpc2FibGVkLCAubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyLWJ1dHRvbi1zZXR0aW5nIC5idG4tc2l0dGVyLWFjY2VwdC5kaXNhYmxlZCwgZmllbGRzZXQ6ZGlzYWJsZWQgLm1vZGFsLWJvb2tpbmcgLmdyb3VwLWJveC10b3RhbCAud3JhcHBlci1idXR0b24tc2V0dGluZyAuYnRuLXNpdHRlci1hY2NlcHQge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvcGFjaXR5OiAwLjY1O1xcbn1cXG4ubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyLWJ1dHRvbi1zZXR0aW5nIC5idG4tZW1wbG95ZXItYWNjZXB0IHtcXG4gIGJhY2tncm91bmQ6ICNmZjM1NDc7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmYzNTQ3O1xcbn1cXG4ubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyLWJ1dHRvbi1zZXR0aW5nIC5idG4tZW1wbG95ZXItYWNjZXB0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZiNmJkO1xcbiAgY29sb3I6ICNmZjM1NDc7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG59XFxuLm1vZGFsLWJvb2tpbmcgLmdyb3VwLWJveC10b3RhbCAud3JhcHBlci1idXR0b24tc2V0dGluZyAuYnRuLWVtcGxveWVyLWFjY2VwdDpmb2N1cywgLm1vZGFsLWJvb2tpbmcgLmdyb3VwLWJveC10b3RhbCAud3JhcHBlci1idXR0b24tc2V0dGluZyAuYnRuLWVtcGxveWVyLWFjY2VwdC5mb2N1cyB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIG91dGxpbmU6IDA7XFxufVxcbi5tb2RhbC1ib29raW5nIC5ncm91cC1ib3gtdG90YWwgLndyYXBwZXItYnV0dG9uLXNldHRpbmcgLmJ0bi1lbXBsb3llci1hY2NlcHQ6ZGlzYWJsZWQsIC5tb2RhbC1ib29raW5nIC5ncm91cC1ib3gtdG90YWwgLndyYXBwZXItYnV0dG9uLXNldHRpbmcgLmJ0bi1lbXBsb3llci1hY2NlcHQuZGlzYWJsZWQsIGZpZWxkc2V0OmRpc2FibGVkIC5tb2RhbC1ib29raW5nIC5ncm91cC1ib3gtdG90YWwgLndyYXBwZXItYnV0dG9uLXNldHRpbmcgLmJ0bi1lbXBsb3llci1hY2NlcHQge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvcGFjaXR5OiAwLjY1O1xcbn1cXG4ubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyLWJ1dHRvbi1zZXR0aW5nIC5idG4tdXNlci1jYW5jZWwge1xcbiAgYmFja2dyb3VuZDogI2ZmMzU0NztcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZjM1NDc7XFxufVxcbi5tb2RhbC1ib29raW5nIC5ncm91cC1ib3gtdG90YWwgLndyYXBwZXItYnV0dG9uLXNldHRpbmcgLmJ0bi11c2VyLWNhbmNlbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmYjZiZDtcXG4gIGNvbG9yOiAjZmYzNTQ3O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxufVxcbi5tb2RhbC1ib29raW5nIC5ncm91cC1ib3gtdG90YWwgLndyYXBwZXItYnV0dG9uLXNldHRpbmcgLmJ0bi11c2VyLWNhbmNlbDpmb2N1cywgLm1vZGFsLWJvb2tpbmcgLmdyb3VwLWJveC10b3RhbCAud3JhcHBlci1idXR0b24tc2V0dGluZyAuYnRuLXVzZXItY2FuY2VsLmZvY3VzIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgb3V0bGluZTogMDtcXG59XFxuLm1vZGFsLWJvb2tpbmcgLmdyb3VwLWJveC10b3RhbCAud3JhcHBlci1idXR0b24tc2V0dGluZyAuYnRuLXVzZXItY2FuY2VsOmRpc2FibGVkLCAubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyLWJ1dHRvbi1zZXR0aW5nIC5idG4tdXNlci1jYW5jZWwuZGlzYWJsZWQsIGZpZWxkc2V0OmRpc2FibGVkIC5tb2RhbC1ib29raW5nIC5ncm91cC1ib3gtdG90YWwgLndyYXBwZXItYnV0dG9uLXNldHRpbmcgLmJ0bi11c2VyLWNhbmNlbCB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIG9wYWNpdHk6IDAuNjU7XFxufVxcbi5tb2RhbC1ib29raW5nIC5ncm91cC1ib3gtdG90YWwgLndyYXBwZXItYnV0dG9uLXNldHRpbmcgLmJ0bi11c2VyLWFwcHJvdmVkIHtcXG4gIGJhY2tncm91bmQ6ICMwZDQ3YTE7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMGQ0N2ExO1xcbn1cXG4ubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyLWJ1dHRvbi1zZXR0aW5nIC5idG4tdXNlci1hcHByb3ZlZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2E4YmRkZDtcXG4gIGNvbG9yOiAjMGQ0N2ExO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxufVxcbi5tb2RhbC1ib29raW5nIC5ncm91cC1ib3gtdG90YWwgLndyYXBwZXItYnV0dG9uLXNldHRpbmcgLmJ0bi11c2VyLWFwcHJvdmVkOmZvY3VzLCAubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyLWJ1dHRvbi1zZXR0aW5nIC5idG4tdXNlci1hcHByb3ZlZC5mb2N1cyB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIG91dGxpbmU6IDA7XFxufVxcbi5tb2RhbC1ib29raW5nIC5ncm91cC1ib3gtdG90YWwgLndyYXBwZXItYnV0dG9uLXNldHRpbmcgLmJ0bi11c2VyLWFwcHJvdmVkOmRpc2FibGVkLCAubW9kYWwtYm9va2luZyAuZ3JvdXAtYm94LXRvdGFsIC53cmFwcGVyLWJ1dHRvbi1zZXR0aW5nIC5idG4tdXNlci1hcHByb3ZlZC5kaXNhYmxlZCwgZmllbGRzZXQ6ZGlzYWJsZWQgLm1vZGFsLWJvb2tpbmcgLmdyb3VwLWJveC10b3RhbCAud3JhcHBlci1idXR0b24tc2V0dGluZyAuYnRuLXVzZXItYXBwcm92ZWQge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBvcGFjaXR5OiAwLjY1O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAubW9kYWwubW9kYWwtYm9va2luZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgfVxcbiAgLm1vZGFsLm1vZGFsLWJvb2tpbmcgLndyYXBwZXJfX2RhdGV0aW1lLXBpY2tlciAud3JhcHBlcl9fZGF0ZS1waWNrZXIge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBtYXJnaW46IDAgMS41JSA1cHg7XFxuICB9XFxuICAubW9kYWwubW9kYWwtYm9va2luZyAud3JhcHBlcl9fZGF0ZXRpbWUtcGlja2VyIC53cmFwcGVyX190aW1lLXBpY2tlciB7XFxuICAgIHdpZHRoOiA0MCU7XFxuICB9XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJpbXBvcnQgVFlQRSBmcm9tIFwiLi90eXBlXCJcclxuZXhwb3J0IGZ1bmN0aW9uIHNldHRlclNvY2tldChzb2NrZXQpe1xyXG4gICAgY29uc29sZS5sb2coc29ja2V0ICwgXCIgc2V0IHNvY2tldCBcIilcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6IFRZUEUuU09DQ0tFVC5TRVRfU09DS0VUX0lPLFxyXG4gICAgICAgIHBheWxvYWQgOiBzb2NrZXRcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0dGVyVXNlciggdXNlciApe1xyXG4gICAgY29uc29sZS5sb2codXNlciAsIFwiIHNldCB1c2VyIFwiKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlIDogVFlQRS5VU0VSLlNFVFRFUl9VU0VSLFxyXG4gICAgICAgIHBheWxvYWQgOiB7IC4uLnVzZXIsIGZldGNoZWQ6IHRydWUgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0dGVyQ2hhbm5lbHMoIGNoYW5uZWxzICl7XHJcbiAgICBjb25zb2xlLmxvZyhjaGFubmVscyAsIFwiIHNldCBjaGFubmVscyBcIilcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6IFRZUEUuQ0hBTk5FTC5TRVRURVJfQ0hBTk5FTCxcclxuICAgICAgICBwYXlsb2FkIDogY2hhbm5lbHNcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZE1lc3NhZ2UoIG1lc3NhZ2UgKXtcclxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UgLCBcIiBhZGRNZXNzYWdlIFwiKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlIDogVFlQRS5DSEFOTkVMLkFERF9NRVNTQUdFLFxyXG4gICAgICAgIHBheWxvYWQgOiBtZXNzYWdlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRNZXNzYWdlU2VuZFRvTWUoIG1lc3NhZ2UgKXtcclxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UgLCBcIiBhZGRNZXNzYWdlU2VuZFRvTWUgXCIpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBUWVBFLkNIQU5ORUwuQUREX01FU1NBR0VfU0VORF9UT19NRSxcclxuICAgICAgICBwYXlsb2FkIDogbWVzc2FnZVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUNoYW5uZWxBY3RpdmUoIGNoYW5uZWxOYW1lICl7XHJcbiAgICBjb25zb2xlLmxvZyhjaGFubmVsTmFtZSAsIFwiIGNoYW5nZUNoYW5uZWxBY3RpdmUgXCIpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBUWVBFLkNIQU5ORUwuU0VUX0FDVElWRSxcclxuICAgICAgICBwYXlsb2FkIDogY2hhbm5lbE5hbWVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFVzZXJPbmxpbmUoIGlkICl7XHJcbiAgICBjb25zb2xlLmxvZyhpZCAsIFwiIGFkZFVzZXJPbmxpbmUgXCIpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBUWVBFLkNIQU5ORUwuQUREX1VTRVJfT05MSU5FLFxyXG4gICAgICAgIHBheWxvYWQgOiBpZFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVXNlck9ubGluZSggaWQgKXtcclxuICAgIGNvbnNvbGUubG9nKGlkICwgXCIgcmVtb3ZlVXNlck9ubGluZSBcIilcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6IFRZUEUuQ0hBTk5FTC5SRU1PVkVfVVNFUl9PTkxJTkUsXHJcbiAgICAgICAgcGF5bG9hZCA6IGlkXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWFkQWxsTWVzc2FnZUNoYW5uZWxBY3RpdmUoKXtcclxuICAgIGNvbnNvbGUubG9nKFwiIHJlYWRBbGxNZXNzYWdlQ2hhbm5lbEFjdGl2ZSBcIilcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6IFRZUEUuQ0hBTk5FTC5SRUFEX0FMTF9NRVNTQUdFX0NIQU5ORUxfQUNUSVZFXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldHRlckJvb2tpbmdzKGJvb2tpbmdzKXtcclxuICAgIGNvbnNvbGUubG9nKGJvb2tpbmdzLFwiIHNldHRlckJvb2tpbmdzIFwiKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlIDogVFlQRS5CT09LSU5HLlNFVFRFUl9CT09LSU5HLFxyXG4gICAgICAgIHBheWxvYWQgOiBib29raW5nc1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQm9va2luZyhib29raW5nKXtcclxuICAgIGNvbnNvbGUubG9nKGJvb2tpbmcsXCIgY2hhbmdlQm9va2luZyBcIilcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6IFRZUEUuQk9PS0lORy5DSEFOR0VfQk9PS0lORyxcclxuICAgICAgICBwYXlsb2FkIDogYm9va2luZ1xyXG4gICAgfVxyXG59XHJcbiIsImNvbnN0IFRZUEUgPSAge1xyXG4gIEhPTUUgOiB7XHJcbiAgICBDSEFOR0VfTEFZT1VUUzogJ0NIQU5HRV9MQVlPVVRTJyxcclxuICAgIENIQU5HRV9USEVNRSAgOiAnQ0hBTkdFX1RIRU1FJ1xyXG4gIH0sXHJcbiAgQ0hBVCA6IHtcclxuICAgIENIQU5HRV9VU0VSX0NIQVRfREVGQVVMVDogJ0NIQU5HRV9VU0VSX0NIQVRfREVGQVVMVCdcclxuICB9LFxyXG4gIFNPQ0NLRVQgOiB7XHJcbiAgICBTRVRfU09DS0VUX0lPOiBcIlNFVF9TT0NLRVRfSU9cIlxyXG4gIH0sXHJcbiAgVVNFUjoge1xyXG4gICAgU0VUVEVSX1VTRVI6IFwiU0VUVEVSX1VTRVJcIlxyXG4gIH0sXHJcbiAgQ0hBTk5FTDoge1xyXG4gICAgU0VUVEVSX0NIQU5ORUwgICAgICAgIDogXCJTRVRURVJfQ0hBTk5FTFwiLFxyXG4gICAgQUREX01FU1NBR0UgICAgICAgICAgIDogXCJBRERfTUVTU0FHRVwiLFxyXG4gICAgQUREX01FU1NBR0VfU0VORF9UT19NRTogXCJBRERfTUVTU0FHRV9TRU5EX1RPX01FXCIsXHJcbiAgICBTRVRfQUNUSVZFICAgICAgICAgICAgOiBcIlNFVF9BQ1RJVkVcIixcclxuICAgIEFERF9VU0VSX09OTElORSAgICAgICA6IFwiQUREX1VTRVJfT05MSU5FXCIsXHJcbiAgICBSRU1PVkVfVVNFUl9PTkxJTkUgICAgOiBcIlJFTU9WRV9VU0VSX09OTElORVwiLFxyXG4gICAgUkVBRF9BTExfTUVTU0FHRV9DSEFOTkVMX0FDVElWRTogXCJSRUFEX0FMTF9NRVNTQUdFX0NIQU5ORUxfQUNUSVZFXCJcclxuICB9LFxyXG4gIENPTkZJRzoge1xyXG4gICAgU0VUVEVSX1NFTkRfUEVFUiA6IFwiU0VUVEVSX1NFTkRfUEVFUlwiXHJcbiAgfSxcclxuICBCT09LSU5HOiB7XHJcbiAgICBTRVRURVJfQk9PS0lORyA6IFwiU0VUVEVSX0JPT0tJTkdcIixcclxuICAgIENIQU5HRV9CT09LSU5HOiBcIkNIQU5HRV9CT09LSU5HXCJcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVFlQRTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgQ2hhdCBmcm9tICcuL0NoYXQvaW5kZXguanN4JztcclxuLy8vIHNvY2NrZXQgXHJcbmltcG9ydCBzb2NrZXRJT0NsaWVudCBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5pbXBvcnQgeyBzb2NrZXRJbml0aWFsQ29ubmVjdCB9IGZyb20gXCIuLi9saWJyYXJ5L3NlcnZpY2UuanNcIlxyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzZW5kVXNlck9ubGluZSA6IGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzLmNsaWVudCkpXHJcbiAgICAgICAgdmFyIGluc3RhbmNlQXBwID0gdGhpc1xyXG4gICAgICAgIHNvY2tldEluaXRpYWxDb25uZWN0KHNvY2tldElPQ2xpZW50LCBpbnN0YW5jZUFwcClcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICAgICAgdmFyIEVWRU5UICAgPSBDT05GSUdfRVZFTlRcclxuICAgICAgICBcclxuICAgICAgICBpZiAoICF0aGlzLnN0YXRlLnNlbmRVc2VyT25saW5lICkgeyBcclxuICAgICAgICAgICAgaWYoIHRoaXMucHJvcHMuYXV0aCAmJiB0aGlzLnByb3BzLmF1dGguZmV0Y2hlZCApe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zb2NrZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VuZFVzZXJPbmxpbmU6IHRydWUgfSwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zb2NrZXQuZW1pdChFVkVOVC5VU0VSX09OTElORSwgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkICAgIDogdGhpcy5wcm9wcy5hdXRoLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVlciAgOiBcIjEyMzQ1Njc4OTBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VzczogdGhpcy5wcm9wcy5hdXRoLnRva2Vucy50b2tlbkFjY2Vzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNvY2tldC5lbWl0KEVWRU5ULlVTRVJfR0VUX0JPT0tJTkcsIHsgaWQ6IHRoaXMucHJvcHMuYXV0aC5pZCB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkcmF3IGFwcFwiKVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwQ29tcG9uZW50XCIgaWQ9XCJBcHBsaWNhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPENoYXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjbGllbnQ6IHN0YXRlLmNsaWVudCxcclxuICAgICAgICBzb2NrZXQ6IHN0YXRlLnNvY2tldCxcclxuICAgICAgICBhdXRoOiBzdGF0ZS51c2VycyxcclxuICAgICAgICB1c2VyQ2hhdDogc3RhdGUudXNlckNoYXRcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQXBwKTtcclxuXHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IEJvb2tpbmdNb2RhbENvbmZpcm0gZnJvbSBcIi4vQm9va2luZ01vZGFsQ29uZmlybS5qc3hcIlxyXG5pbXBvcnQgQm9va2luZ01vZGFsU2V0dGluZyBmcm9tIFwiLi9Cb29raW5nTW9kYWxTZXR0aW5nLmpzeFwiXHJcbmltcG9ydCBCb29raW5nTm9uZSBmcm9tIFwiLi9Cb29raW5nTm9uZS5qc3hcIlxyXG5pbXBvcnQgQm9va2luZ0xvYWRpbmcgZnJvbSBcIi4vQm9va2luZ0xvYWRpbmcuanN4XCJcclxuaW1wb3J0IEJvb2tpbmdGaW5pc2ggZnJvbSBcIi4vQm9va2luZ0ZpbmlzaC5qc3hcIlxyXG5pbXBvcnQgQm9va2luZ0Vycm9yIGZyb20gXCIuL0Jvb2tpbmdFcnJvci5qc3hcIlxyXG5cclxuY2xhc3MgQm9va2luZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB2YXIgeyBib29raW5ncyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlci1tb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgPEJvb2tpbmdOb25lIC8+XHJcbiAgICAgICAgICAgICAgICA8Qm9va2luZ0xvYWRpbmcgLz5cclxuICAgICAgICAgICAgICAgIDxCb29raW5nRXJyb3IgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvb2tpbmdzLmRhdGEubWFwKCBib29raW5nID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGJvb2tpbmcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICggXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Jvb2tpbmcuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm9va2luZ01vZGFsU2V0dGluZyAgYm9va2luZz17Ym9va2luZ30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm9va2luZ01vZGFsQ29uZmlybSBib29raW5nPXtib29raW5nfS8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm9va2luZ0ZpbmlzaCBib29raW5nPXtib29raW5nfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYm9va2luZ3M6IHN0YXRlLmJvb2tpbmcsXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEJvb2tpbmcpO1xyXG4iLCJcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb29raW5nRXJyb3IgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuICAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJqcy1ib29raW5nLWVycm9yXCIgY2xhc3NOYW1lPVwibW9kYWwgbW9kYWwtYm9va2luZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJ1dHRvbi1xdWVzdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIOOCqOODqeODvOOBjOeZuueUn+OBl+OBvuOBl+OBn++8mlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAtYm94LXRvdGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyLWJ1dHRvbi1zZXR0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0bi1ib29raW5nIGJ0bi11c2VyLWNhbmNlbFwiIGhyZWY9XCIjXCIgcmVsPVwibW9kYWw6Y2xvc2VcIj7jgq3jg6Pjg7Pjgrvjg6s8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgeyBjYWxjdWxhdG9yQmlsbCB9IGZyb20gXCIuLi8uLi9saWJyYXJ5L3NlcnZpY2UuanNcIlxyXG5pbXBvcnQgQ09ORklHIGZyb20gXCIuLi8uLi9jb25maWdcIlxyXG5jbGFzcyBCb29raW5nRmluaXNoIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIFxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgeyBhdXRoLCBib29raW5nIH0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgICAgIGlmKCFib29raW5nKXtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBbIHdvcmtfZGF0ZSwgc3RhcnQsIGZpbmlzaCwgc2FsYXJ5LCBcclxuICAgICAgICAgICAgZGlmZmVyZW5jZVRpbWUsIHByaWNlLCB2YXQsIFxyXG4gICAgICAgICAgICBteVNlcnZGZWUsIHN0cmlwZVNlcnZGZWUsIHRvdGFsIF0gPSBjYWxjdWxhdG9yQmlsbChib29raW5nLCBhdXRoKVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICByZXR1cm4gIChcclxuICAgICAgICAgICAgPGRpdiAgaWQ9eyB0aGlzLnByb3BzLmJvb2tpbmcuaWQgKyBcImpzLWJvb2tpbmctZmluaXNoXCIgfSBjbGFzc05hbWU9XCJtb2RhbCBtb2RhbC1ib29raW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+6KaL56mN5pu4PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctZGF0ZXRpbWUtcGlja2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyX19kYXRldGltZS1waWNrZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCB3cmFwcGVyX19kYXRlLXBpY2tlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8tY2FsZW5kYXItY2hlY2stb3V0bGluZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtY29udHJvbFwiPnt3b3JrX2RhdGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCB3cmFwcGVyX190aW1lLXBpY2tlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8tY2xvY2stb3V0bGluZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtY29udHJvbFwiPnsgc3RhcnQgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgd3JhcHBlcl9fdGltZS1waWNrZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLWNsb2NrLWNoZWNrLW91dGxpbmVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWNvbnRyb2xcIj57IGZpbmlzaCB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0aXN0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbi1zdGF0aXN0aWNhbCBzYWxhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+PHNwYW4+5pmC6ZaT5Y2Y5L6hPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmFsdWVcIj57IHNhbGFyeSB977+lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uLXN0YXRpc3RpY2FsIGRpZmZlcmVuY2VUaW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPjxzcGFuPuWIqeeUqOS6iOWumuaZgumWkzwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZhbHVlXCI+eyBkaWZmZXJlbmNlVGltZSB9IOaZgumWkzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb24tc3RhdGlzdGljYWwgcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+PHNwYW4+44K344OD44K/44O8L+WutuS6i+S7o+ihjOaWmemHkTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZhbHVlXCI+eyBwcmljZSB977+lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmF1dGgucm9sZV9pZCA9PSBDT05GSUcuUk9MRV9VU0VSLnNpdHRlciAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGlzdGljYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbi1zdGF0aXN0aWNhbCBzdHJpcGVTZXJ2RmVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRcIj48c3Bhbj7miYvmlbDmlpk8L3NwYW4+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZhbHVlXCI+eyBzdHJpcGVTZXJ2RmVlIH3vv6U8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbi1zdGF0aXN0aWNhbCBub3RlXCI+4oC75pei5a6a44Gu5omL5pWw5paZ44GM55m655Sf44GX44G+44GZ44CCPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmF1dGgucm9sZV9pZCA9PSBDT05GSUcuUk9MRV9VU0VSLmVtcGxveWVyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0aXN0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb24tc3RhdGlzdGljYWwgbXlTZXJ2RmVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRcIj48c3Bhbj7jgrXjg7zjg5PjgrnliKnnlKjmlpk8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmFsdWVcIj57IG15U2VydkZlZSB977+lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb24tc3RhdGlzdGljYWwgbm90ZVwiPuKAu+OCt+ODg+OCv+ODvC/lrrbkuovku6PooYzmlpnph5Hjga4yMO+8hTwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uLXN0YXRpc3RpY2FsIHZhdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+PHNwYW4+5raI6LK756iO77yIMTDvvIXvvIk8L3NwYW4+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZhbHVlXCI+eyB2YXQgfe+/pTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAtYm94LXRvdGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyX190b3RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRcIj7lkIjoqIg8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZhbHVlIHRleHQtY29sb3Itd2FybmluZy1jb2xvci1kYXJrXCI+eyB0b3RhbCB977+lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXV0aCAgICAgICAgIDogc3RhdGUudXNlcnMsXHJcbiAgICAgICAgYm9va2luZ3MgICAgIDogc3RhdGUuYm9va2luZyxcclxuICAgICAgICBjb252ZXJ0YXRpb25zOiBzdGF0ZS51c2VyQ2hhdFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShCb29raW5nRmluaXNoKSIsIlxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9va2luZ0xvYWRpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAgKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwianMtYm9va2luZy1sb2FkaW5nXCIgY2xhc3NOYW1lPVwibW9kYWwgbW9kYWwtYm9va2luZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJ1dHRvbi1xdWVzdGlvblwiPuODh+ODvOOCv+OCkuiqreOBv+i+vOOCk+OBp+OBhOOBvuOBmeOAguOBl+OBsOOCieOBj+OBiuW+heOBoeOBj+OBoOOBleOBhDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcyBwcm9ncmVzcy1zdWNjZXNzXCI+PGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1sb2FkZGluZ1wiPjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cC1ib3gtdG90YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXItYnV0dG9uLXNldHRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuLWJvb2tpbmcgYnRuLXVzZXItY2FuY2VsXCIgaHJlZj1cIiNcIiByZWw9XCJtb2RhbDpjbG9zZVwiPuOCreODo+ODs+OCu+ODqzwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IHsgc2VuZEJvb2tpbmdVcGRhdGUsIGNhbGN1bGF0b3JCaWxsIH0gZnJvbSBcIi4uLy4uL2xpYnJhcnkvc2VydmljZS5qc1wiXHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcclxuaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vLi4vY29uZmlnXCJcclxuY2xhc3MgQm9va2luZ01vZGFsQ29uZmlybSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY2FuY2VsQWNjZXB0ID0gKCkgPT4ge1xyXG4gICAgICAgIHZhciB7IGJvb2tpbmcgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICAkKFwiI1wiKyBib29raW5nLmlkICtcImpzLWJvb2tpbmctc2V0dGluZ1wiKS5tb2RhbCh7XHJcbiAgICAgICAgICAgIGVzY2FwZUNsb3NlOiBmYWxzZSxcclxuICAgICAgICAgICAgY2xpY2tDbG9zZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dDbG9zZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZmluYWxBY2NlcHQgPSAoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHsgaWQsIHdvcmtfZGF0ZSwgc3RhcnQsIGZpbmlzaCB9ID0gdGhpcy5wcm9wcy5ib29raW5nXHJcbiAgICAgICAgdmFyIGNoYW5uZWxBY3RpdmUgICA9IHRoaXMucHJvcHMuY29udmVydGF0aW9ucy5maW5kKGNoYW5uZWwgPT4gY2hhbm5lbC5pc0FjdGl2ZSlcclxuICAgICAgICAvLy8vIGRpc3BhdGNoIHRlc3RcclxuICAgICAgICB2YXIgYm9va2luZ1VwZGF0ZSA9IHtcclxuICAgICAgICAgICAgYm9va2luZ19pZCAgICAgOiBpZCxcclxuICAgICAgICAgICAgc2l0dGVyX2FjY2VwdCAgOiAxLFxyXG4gICAgICAgICAgICBzdGF0dXMgICAgICAgICA6IDEsXHJcbiAgICAgICAgICAgIGVtcGxveWVyX2FjY2VwdDogMSxcclxuICAgICAgICAgICAgc3RhcnQgICAgICAgICAgOiBzdGFydCxcclxuICAgICAgICAgICAgZmluaXNoICAgICAgICAgOiBmaW5pc2gsXHJcbiAgICAgICAgICAgIHdvcmtfZGF0ZSAgICAgIDogd29ya19kYXRlLFxyXG4gICAgICAgICAgICB0b2tlbkFjY2VzcyAgICA6IHRoaXMucHJvcHMuYXV0aC50b2tlbnMudG9rZW5BY2Nlc3MsXHJcbiAgICAgICAgICAgIHVzZXJJZCAgICAgICAgIDogdGhpcy5wcm9wcy5hdXRoLmlkLFxyXG4gICAgICAgICAgICBjaGFubmVsTmFtZSAgICA6IGNoYW5uZWxBY3RpdmUuY2hhbm5lbE5hbWVcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VuZEJvb2tpbmdVcGRhdGUoYm9va2luZ1VwZGF0ZSlcclxuICAgICAgICAkLm1vZGFsLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBbIHdvcmtfZGF0ZSwgc3RhcnQsIGZpbmlzaCwgc2FsYXJ5LCBcclxuICAgICAgICAgICAgZGlmZmVyZW5jZVRpbWUsIHByaWNlLCB2YXQsIFxyXG4gICAgICAgICAgICBteVNlcnZGZWUsIHN0cmlwZVNlcnZGZWUsIHRvdGFsIF0gPSBjYWxjdWxhdG9yQmlsbCh0aGlzLnByb3BzLmJvb2tpbmcsIHRoaXMucHJvcHMuYXV0aClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuICAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9eyB0aGlzLnByb3BzLmJvb2tpbmcuaWQgKyBcImpzLWJvb2tpbmctY29uZmlybVwiIH0gY2xhc3NOYW1lPVwibW9kYWwgbW9kYWwtYm9va2luZ1wiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj7opovnqY3mm7g8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1kYXRldGltZS1waWNrZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJfX2RhdGV0aW1lLXBpY2tlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIHdyYXBwZXJfX2RhdGUtcGlja2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJoZXJvLWljb24gaGVyby1jYWxlbmRhci1jaGVjay1vdXRsaW5lXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1jb250cm9sXCI+e3dvcmtfZGF0ZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIHdyYXBwZXJfX3RpbWUtcGlja2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJoZXJvLWljb24gaGVyby1jbG9jay1vdXRsaW5lXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1jb250cm9sXCI+eyBzdGFydCB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCB3cmFwcGVyX190aW1lLXBpY2tlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8tY2xvY2stY2hlY2stb3V0bGluZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtY29udHJvbFwiPnsgZmluaXNoIH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRpc3RpY2FsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uLXN0YXRpc3RpY2FsIHNhbGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRcIj48c3Bhbj7mmYLplpPljZjkvqE8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZVwiPnsgc2FsYXJ5IH3vv6U8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb24tc3RhdGlzdGljYWwgZGlmZmVyZW5jZVRpbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+PHNwYW4+5Yip55So5LqI5a6a5pmC6ZaTPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmFsdWVcIj57IGRpZmZlcmVuY2VUaW1lIH0g5pmC6ZaTPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbi1zdGF0aXN0aWNhbCBwcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRcIj48c3Bhbj7jgrfjg4Pjgr/jg7wv5a625LqL5Luj6KGM5paZ6YeRPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmFsdWVcIj57IHByaWNlIH3vv6U8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXV0aC5yb2xlX2lkID09IENPTkZJRy5ST0xFX1VTRVIuc2l0dGVyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0aXN0aWNhbFwiPiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb24tc3RhdGlzdGljYWwgc3RyaXBlU2VydkZlZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+PHNwYW4+5omL5pWw5paZPC9zcGFuPiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZVwiPnsgc3RyaXBlU2VydkZlZSB977+lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb24tc3RhdGlzdGljYWwgbm90ZVwiPuKAu+aXouWumuOBruaJi+aVsOaWmeOBjOeZuueUn+OBl+OBvuOBmeOAgjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hdXRoLnJvbGVfaWQgPT0gQ09ORklHLlJPTEVfVVNFUi5lbXBsb3llciAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGlzdGljYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uLXN0YXRpc3RpY2FsIG15U2VydkZlZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+PHNwYW4+44K144O844OT44K55Yip55So5paZPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZhbHVlXCI+eyBteVNlcnZGZWUgfe+/pTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uLXN0YXRpc3RpY2FsIG5vdGVcIj7igLvjgrfjg4Pjgr/jg7wv5a625LqL5Luj6KGM5paZ6YeR44GuMjDvvIU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbi1zdGF0aXN0aWNhbCB2YXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPjxzcGFuPua2iOiyu+eoju+8iDEw77yF77yJPC9zcGFuPiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZVwiPnsgdmF0IH3vv6U8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwLWJveC10b3RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlcl9fdG90YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+5ZCI6KiIPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZSB0ZXh0LWNvbG9yLXdhcm5pbmctY29sb3ItZGFya1wiPnsgdG90YWwgfe+/pTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1idXR0b24tcXVlc3Rpb25cIj7kuIroqJjlhoXlrrnjgafjgYrplpPpgZXjgYTjgYLjgorjgb7jgZvjgpPjgYvvvJ88L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXItYnV0dG9uLXNldHRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0bi1ib29raW5nIGJ0bi11c2VyLWNhbmNlbFwiIG9uQ2xpY2s9eyB0aGlzLmNhbmNlbEFjY2VwdCB9PuOCreODo+ODs+OCu+ODqzwvYT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXV0aC5yb2xlX2lkID09IENPTkZJRy5ST0xFX1VTRVIuZW1wbG95ZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0bi1ib29raW5nIGJ0bi11c2VyLWFwcHJvdmVkXCIgb25DbGljaz17IHRoaXMuZmluYWxBY2NlcHQgfT7kuojntITjgZnjgos8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXV0aCAgICAgICAgIDogc3RhdGUudXNlcnMsXHJcbiAgICAgICAgY29udmVydGF0aW9uczogc3RhdGUudXNlckNoYXRcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQm9va2luZ01vZGFsQ29uZmlybSlcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgQ09ORklHIGZyb20gXCIuLi8uLi9jb25maWdcIlxyXG5pbXBvcnQgeyBjaGFuZ2VCb29raW5nIH0gZnJvbSBcIi4uLy4uL2FjdGlvblwiXHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBkYXRlcGlja2VyRmFjdG9yeSBmcm9tICdqcXVlcnktZGF0ZXBpY2tlcidcclxuaW1wb3J0IGRhdGVwaWNrZXJKQUZhY3RvcnkgZnJvbSAnanF1ZXJ5LWRhdGVwaWNrZXIvaTE4bi9qcXVlcnkudWkuZGF0ZXBpY2tlci1qYSdcclxuaW1wb3J0ICd0aW1lcGlja2VyJztcclxuaW1wb3J0IHsgc2VuZEJvb2tpbmdVcGRhdGUsIGNhbGN1bGF0b3JCaWxsIH0gZnJvbSBcIi4uLy4uL2xpYnJhcnkvc2VydmljZS5qc1wiXHJcbi8vIEp1c3QgcGFzcyB5b3VyIGpxdWVyeSBpbnN0YW5jZSBhbmQgeW91J3JlIGRvbmVcclxuZGF0ZXBpY2tlckZhY3RvcnkoJCk7XHJcbmRhdGVwaWNrZXJKQUZhY3RvcnkoJCk7XHJcblxyXG5jbGFzcyBCb29raW5nTW9kYWxTZXR0aW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdmFyIHsgYm9va2luZyB9ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpZCAgICAgICAgICAgICA6IGJvb2tpbmcuaWQsXHJcbiAgICAgICAgICAgIHdvcmtfZGF0ZSAgICAgIDogYm9va2luZy53b3JrX2RhdGUsXHJcbiAgICAgICAgICAgIHN0YXJ0ICAgICAgICAgIDogYm9va2luZy5zdGFydCxcclxuICAgICAgICAgICAgZmluaXNoICAgICAgICAgOiBib29raW5nLmZpbmlzaCxcclxuICAgICAgICAgICAgc2FsYXJ5ICAgICAgICAgOiBib29raW5nLnNhbGFyeSxcclxuICAgICAgICAgICAgc2l0dGVyX2FjY2VwdCAgOiBib29raW5nLnNpdHRlcl9hY2NlcHQsXHJcbiAgICAgICAgICAgIGVtcGxveWVyX2FjY2VwdDogYm9va2luZy5lbXBsb3llcl9hY2NlcHRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG5cclxuICAgICAgICB2YXIgX2luc3RhbmNlICAgICAgICAgID0gdGhpcyxcclxuICAgICAgICAgICAgc2VsZWN0b3JUaW1lU3RhcnQgID0gJyMnICsgdGhpcy5zdGF0ZS5pZCArIFwianMtYm9va2luZy1zZXR0aW5nIC50aW1lcGlja2VyU3RhcnRcIixcclxuICAgICAgICAgICAgc2VsZWN0b3JUaW1lRmluaXNoID0gJyMnICsgdGhpcy5zdGF0ZS5pZCArIFwianMtYm9va2luZy1zZXR0aW5nIC50aW1lcGlja2VyRmluaXNoXCIsXHJcbiAgICAgICAgICAgIHNlbGVjdG9yRGF0ZXBpY2tlciA9ICcjJyArIHRoaXMuc3RhdGUuaWQgKyBcImpzLWJvb2tpbmctc2V0dGluZyAuZGF0ZXBpY2tlclwiXHJcblxyXG4gICAgICAgICQoc2VsZWN0b3JUaW1lU3RhcnQpLnRpbWVwaWNrZXIoeyAndGltZUZvcm1hdCc6ICdIOmknIH0pXHJcbiAgICAgICAgJChzZWxlY3RvclRpbWVGaW5pc2gpLnRpbWVwaWNrZXIoeyAndGltZUZvcm1hdCc6ICdIOmknIH0pXHJcblxyXG4gICAgICAgICQoc2VsZWN0b3JUaW1lU3RhcnQpLm9uKCdjaGFuZ2VUaW1lJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGFydENoYW5nZSA9ICQodGhpcykudmFsKClcclxuICAgICAgICAgICAgX2luc3RhbmNlLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0OiBzdGFydENoYW5nZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgJChzZWxlY3RvclRpbWVGaW5pc2gpLm9uKCdjaGFuZ2VUaW1lJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBmaW5pc2hDaGFuZ2UgPSAkKHRoaXMpLnZhbCgpXHJcbiAgICAgICAgICAgIF9pbnN0YW5jZS5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBmaW5pc2g6IGZpbmlzaENoYW5nZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoc2VsZWN0b3JEYXRlcGlja2VyKS5kYXRlcGlja2VyKHsgXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6ICd5eS1tbS1kZCcsXHJcbiAgICAgICAgICAgIC8vIGJlZm9yZVNob3dEYXk6IGZ1bmN0aW9uKGQpIHtcclxuICAgICAgICAgICAgLy8gICAgIC8vIG5vcm1hbGl6ZSB0aGUgZGF0ZSBmb3Igc2VhcmNoaW5nIGluIGFycmF5XHJcbiAgICAgICAgICAgIC8vICAgICB2YXIgcmVzdWx0ID0gXCIyMDIwLTA5LTI2LDIwMjAtMDktMTIsMjAyMC0wOS0wOCwyMDIwLTA5LTEwXCI7XHJcbiAgICAgICAgICAgIC8vICAgICB2YXIgZGF0ZWxpc3QgPSByZXN1bHQuc3BsaXQoXCIsXCIpOyAvLyBwb3B1bGF0ZSB0aGUgYXJyYXlcclxuICAgICAgICAgICAgLy8gICAgIHZhciBkYXkgPSAoXCIwMFwiICsgZC5nZXREYXRlKCkpLnNsaWNlKC0yKSxcclxuICAgICAgICAgICAgLy8gICAgIG1vbnRoID0gKFwiMDBcIiArIChkLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpLFxyXG4gICAgICAgICAgICAvLyAgICAgeWVhciA9IGQuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgICAgICAgLy8gICAgIGZ1bGxEYXRlID0geWVhciArIFwiLVwiICsgbW9udGggKyBcIi1cIiArIGRheVxyXG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIFskLmluQXJyYXkoZnVsbERhdGUsIGRhdGVsaXN0KSA+PSAwID8gdHJ1ZSA6IGZhbHNlLCBcIlwiXVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIG9uU2VsZWN0OiBmdW5jdGlvbihkYXRlVGV4dCwgaW5zdCkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBfaW5zdGFuY2Uuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdvcmtfZGF0ZTogZGF0ZVRleHRcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciB7IGJvb2tpbmcgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBpZiggYm9va2luZy51cGRhdGUgPT0gdHJ1ZSApe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlkICAgICAgICAgICAgIDogYm9va2luZy5pZCxcclxuICAgICAgICAgICAgICAgIHdvcmtfZGF0ZSAgICAgIDogYm9va2luZy53b3JrX2RhdGUsXHJcbiAgICAgICAgICAgICAgICBzdGFydCAgICAgICAgICA6IGJvb2tpbmcuc3RhcnQsXHJcbiAgICAgICAgICAgICAgICBmaW5pc2ggICAgICAgICA6IGJvb2tpbmcuZmluaXNoLFxyXG4gICAgICAgICAgICAgICAgc2FsYXJ5ICAgICAgICAgOiBib29raW5nLnNhbGFyeSxcclxuICAgICAgICAgICAgICAgIHNpdHRlcl9hY2NlcHQgIDogYm9va2luZy5zaXR0ZXJfYWNjZXB0LFxyXG4gICAgICAgICAgICAgICAgZW1wbG95ZXJfYWNjZXB0OiBib29raW5nLmVtcGxveWVyX2FjY2VwdFxyXG5cclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgYm9va2luZyA9IHsgLi4uIHRoaXMucHJvcHMuYm9va2luZywgdXBkYXRlOiBmYWxzZSB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGNoYW5nZUJvb2tpbmcoYm9va2luZykpXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdG9yVGltZVN0YXJ0ICA9ICcjJyArIHRoaXMuc3RhdGUuaWQgKyBcImpzLWJvb2tpbmctc2V0dGluZyAudGltZXBpY2tlclN0YXJ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3JUaW1lRmluaXNoID0gJyMnICsgdGhpcy5zdGF0ZS5pZCArIFwianMtYm9va2luZy1zZXR0aW5nIC50aW1lcGlja2VyRmluaXNoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3JEYXRlcGlja2VyID0gJyMnICsgdGhpcy5zdGF0ZS5pZCArIFwianMtYm9va2luZy1zZXR0aW5nIC5kYXRlcGlja2VyXCJcclxuICAgICAgICAgICAgICAgICQoc2VsZWN0b3JUaW1lU3RhcnQpLnZhbCh0aGlzLnN0YXRlLnN0YXJ0KVxyXG4gICAgICAgICAgICAgICAgJChzZWxlY3RvclRpbWVGaW5pc2gpLnZhbCh0aGlzLnN0YXRlLmZpbmlzaClcclxuICAgICAgICAgICAgICAgICQoc2VsZWN0b3JEYXRlcGlja2VyKS52YWwodGhpcy5zdGF0ZS53b3JrX2RhdGUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNpdHRlckFjY2VwdEJpbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgdmFyIFsgXHJcbiAgICAgICAgICAgIHdvcmtfZGF0ZSxcclxuICAgICAgICAgICAgc3RhcnQsXHJcbiAgICAgICAgICAgIGZpbmlzaCxcclxuICAgICAgICAgICAgc2FsYXJ5LFxyXG4gICAgICAgICAgICBkaWZmZXJlbmNlVGltZSxcclxuICAgICAgICAgICAgcHJpY2UsXHJcbiAgICAgICAgICAgIHZhdCxcclxuICAgICAgICAgICAgbXlTZXJ2RmVlLFxyXG4gICAgICAgICAgICBzdHJpcGVTZXJ2RmVlLFxyXG4gICAgICAgICAgICB0b3RhbFxyXG4gICAgICAgIF0gPSBjYWxjdWxhdG9yQmlsbCh0aGlzLnN0YXRlLCB0aGlzLnByb3BzLmF1dGgpXHJcblxyXG4gICAgICAgIHZhciBjaGFubmVsQWN0aXZlICAgPSB0aGlzLnByb3BzLmNvbnZlcnRhdGlvbnMuZmluZChjaGFubmVsID0+IGNoYW5uZWwuaXNBY3RpdmUpXHJcbiAgICAgICAgLy8vLyBkaXNwYXRjaCB0ZXN0XHJcbiAgICAgICAgdmFyIGJvb2tpbmdVcGRhdGUgPSB7XHJcbiAgICAgICAgICAgIGJvb2tpbmdfaWQgICAgIDogdGhpcy5zdGF0ZS5pZCxcclxuICAgICAgICAgICAgc2l0dGVyX2FjY2VwdCAgOiAxLFxyXG4gICAgICAgICAgICBzdGFydCAgICAgICAgICA6IHN0YXJ0LFxyXG4gICAgICAgICAgICBmaW5pc2ggICAgICAgICA6IGZpbmlzaCxcclxuICAgICAgICAgICAgd29ya19kYXRlICAgICAgOiB3b3JrX2RhdGUsXHJcbiAgICAgICAgICAgIHRva2VuQWNjZXNzICAgIDogdGhpcy5wcm9wcy5hdXRoLnRva2Vucy50b2tlbkFjY2VzcyxcclxuICAgICAgICAgICAgdXNlcklkICAgICAgICAgOiB0aGlzLnByb3BzLmF1dGguaWQsXHJcbiAgICAgICAgICAgIGNoYW5uZWxOYW1lICAgIDogY2hhbm5lbEFjdGl2ZS5jaGFubmVsTmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZW5kQm9va2luZ1VwZGF0ZShib29raW5nVXBkYXRlKVxyXG4gICAgICAgICQubW9kYWwuY2xvc2UoKTtcclxuICAgIH1cclxuICAgIGVtcGxveWVyQWNjZXB0QmlsbCA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgdmFyIFsgXHJcbiAgICAgICAgICAgIHdvcmtfZGF0ZSxcclxuICAgICAgICAgICAgc3RhcnQsXHJcbiAgICAgICAgICAgIGZpbmlzaCxcclxuICAgICAgICAgICAgc2FsYXJ5LFxyXG4gICAgICAgICAgICBkaWZmZXJlbmNlVGltZSxcclxuICAgICAgICAgICAgcHJpY2UsXHJcbiAgICAgICAgICAgIHZhdCxcclxuICAgICAgICAgICAgbXlTZXJ2RmVlLFxyXG4gICAgICAgICAgICBzdHJpcGVTZXJ2RmVlLFxyXG4gICAgICAgICAgICB0b3RhbFxyXG4gICAgICAgIF0gPSBjYWxjdWxhdG9yQmlsbCh0aGlzLnN0YXRlLCB0aGlzLnByb3BzLmF1dGgpXHJcblxyXG4gICAgICAgIHZhciBjaGFubmVsQWN0aXZlID0gdGhpcy5wcm9wcy5jb252ZXJ0YXRpb25zLmZpbmQoY2hhbm5lbCA9PiBjaGFubmVsLmlzQWN0aXZlKVxyXG4gICAgICAgIC8vLy8gZGlzcGF0Y2ggdGVzdFxyXG4gICAgICAgIHZhciBib29raW5nVXBkYXRlID0ge1xyXG4gICAgICAgICAgICBib29raW5nX2lkICAgICA6IHRoaXMuc3RhdGUuaWQsXHJcbiAgICAgICAgICAgIGVtcGxveWVyX2FjY2VwdDogMSxcclxuICAgICAgICAgICAgc3RhcnQgICAgICAgICAgOiBzdGFydCxcclxuICAgICAgICAgICAgZmluaXNoICAgICAgICAgOiBmaW5pc2gsXHJcbiAgICAgICAgICAgIHdvcmtfZGF0ZSAgICAgIDogd29ya19kYXRlLFxyXG4gICAgICAgICAgICB0b2tlbkFjY2VzcyAgICA6IHRoaXMucHJvcHMuYXV0aC50b2tlbnMudG9rZW5BY2Nlc3MsXHJcbiAgICAgICAgICAgIHVzZXJJZCAgICAgICAgIDogdGhpcy5wcm9wcy5hdXRoLmlkLFxyXG4gICAgICAgICAgICBjaGFubmVsTmFtZSAgICA6IGNoYW5uZWxBY3RpdmUuY2hhbm5lbE5hbWVcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VuZEJvb2tpbmdVcGRhdGUoYm9va2luZ1VwZGF0ZSlcclxuICAgICAgICAkLm1vZGFsLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHZhciBbIFxyXG4gICAgICAgICAgICB3b3JrX2RhdGUsXHJcbiAgICAgICAgICAgIHN0YXJ0LFxyXG4gICAgICAgICAgICBmaW5pc2gsXHJcbiAgICAgICAgICAgIHNhbGFyeSxcclxuICAgICAgICAgICAgZGlmZmVyZW5jZVRpbWUsXHJcbiAgICAgICAgICAgIHByaWNlLFxyXG4gICAgICAgICAgICB2YXQsXHJcbiAgICAgICAgICAgIG15U2VydkZlZSxcclxuICAgICAgICAgICAgc3RyaXBlU2VydkZlZSxcclxuICAgICAgICAgICAgdG90YWxcclxuICAgICAgICBdID0gY2FsY3VsYXRvckJpbGwodGhpcy5zdGF0ZSwgdGhpcy5wcm9wcy5hdXRoKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBib29raW5nUHJvcHMgPSB0aGlzLnByb3BzLmJvb2tpbmdcclxuICAgICAgICB2YXIgaXNFZGl0ID0gYm9va2luZ1Byb3BzLnN0YXJ0ICE9IHN0YXJ0IHx8IGJvb2tpbmdQcm9wcy5maW5pc2ggIT0gZmluaXNoIHx8IGJvb2tpbmdQcm9wcy53b3JrX2RhdGUgIT0gd29ya19kYXRlXHJcbiAgICAgICAgdmFyIGNsYXNzQnRuU2l0dGVyLFxyXG4gICAgICAgICAgICB0ZXh0QnRuU2l0dGVyLFxyXG4gICAgICAgICAgICBjbGlja0J0blNpdHRlcixcclxuICAgICAgICAgICAgY2xhc3NCdG5FbXBsb3llcixcclxuICAgICAgICAgICAgdGV4dEJ0bkVtcGxveWVyLFxyXG4gICAgICAgICAgICBjbGlja0J0bkVtcGxveWVyXHJcblxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuYXV0aC5yb2xlX2lkID09IENPTkZJRy5ST0xFX1VTRVIuc2l0dGVyKXtcclxuXHJcbiAgICAgICAgICAgIGNsYXNzQnRuU2l0dGVyICAgPSBcImJ0bi1ib29raW5nIGJ0bi1zaXR0ZXItYWNjZXB0XCIsXHJcbiAgICAgICAgICAgIHRleHRCdG5TaXR0ZXIgICAgPSBcIuOCt+ODg+OCv+ODvOaJv+iqjVwiLFxyXG4gICAgICAgICAgICBjbGlja0J0blNpdHRlciAgID0gdGhpcy5zaXR0ZXJBY2NlcHRCaWxsLFxyXG5cclxuICAgICAgICAgICAgY2xhc3NCdG5FbXBsb3llciA9IFwiYnRuLWJvb2tpbmcgYnRuLWVtcGxveWVyLWFjY2VwdCBkaXNhYmxlZFwiLFxyXG4gICAgICAgICAgICAvLy8gRW1wbG95ZXIgY2jGsGEgY2jhuqVwIG5o4bqtbiA6IOWIqeeUqOiAheacquaJv+iqjVxyXG4gICAgICAgICAgICAvLy8gRW1wbG95ZXIgxJHDoyDEkcOjIGNo4bqlcCBuaOG6rW46IOWIqeeUqOiAheaJv+iqjeOBl+OBn1xyXG4gICAgICAgICAgICB0ZXh0QnRuRW1wbG95ZXIgID0gdGhpcy5zdGF0ZS5lbXBsb3llcl9hY2NlcHQgPyBcIuWIqeeUqOiAheaJv+iqjeOBl+OBn1wiIDogXCLliKnnlKjogIXmnKrmib/oqo1cIixcclxuICAgICAgICAgICAgY2xpY2tCdG5FbXBsb3llciA9IG51bGxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuc2l0dGVyX2FjY2VwdCAmJiAhaXNFZGl0KXtcclxuICAgICAgICAgICAgICAgIGNsYXNzQnRuU2l0dGVyICs9ICcgZGlzYWJsZWQnXHJcbiAgICAgICAgICAgICAgICB0ZXh0QnRuU2l0dGVyID0gXCLliKnnlKjogIXmib/oqo3jgZfjgZ9cIlxyXG4gICAgICAgICAgICAgICAgY2xpY2tCdG5TaXR0ZXIgICA9IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5hdXRoLnJvbGVfaWQgPT0gQ09ORklHLlJPTEVfVVNFUi5lbXBsb3llcil7XHJcblxyXG5cclxuICAgICAgICAgICAgY2xhc3NCdG5FbXBsb3llciAgID0gXCJidG4tYm9va2luZyBidG4tZW1wbG95ZXItYWNjZXB0XCIsXHJcbiAgICAgICAgICAgIHRleHRCdG5FbXBsb3llciAgICA9IFwi5Yip55So6ICF5om/6KqNXCIsXHJcbiAgICAgICAgICAgIGNsaWNrQnRuRW1wbG95ZXIgICA9IHRoaXMuZW1wbG95ZXJBY2NlcHRCaWxsLFxyXG5cclxuICAgICAgICAgICAgY2xhc3NCdG5TaXR0ZXIgPSBcImJ0bi1ib29raW5nIGJ0bi1zaXR0ZXItYWNjZXB0IGRpc2FibGVkXCIsXHJcbiAgICAgICAgICAgIC8vLyBzaXR0ZXIgY2jGsGEgY2jhuqVwIG5o4bqtbiA6IOOCt+ODg+OCv+ODvOacquaJv+iqjVxyXG4gICAgICAgICAgICAvLy8gc2l0dGVyIMSRw6MgxJHDoyBjaOG6pXAgbmjhuq1uOiDjgrfjg4Pjgr/jg7zmib/oqo3jgZfjgZ9cclxuICAgICAgICAgICAgdGV4dEJ0blNpdHRlciAgPSB0aGlzLnN0YXRlLnNpdHRlcl9hY2NlcHQgPyBcIuOCt+ODg+OCv+ODvOaJv+iqjeOBl+OBn1wiIDogXCLjgrfjg4Pjgr/jg7zmnKrmib/oqo1cIixcclxuICAgICAgICAgICAgY2xpY2tCdG5TaXR0ZXIgPSBudWxsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLmVtcGxveWVyX2FjY2VwdCAmJiAhaXNFZGl0KXtcclxuICAgICAgICAgICAgICAgIGNsYXNzQnRuRW1wbG95ZXIgKz0gJyBkaXNhYmxlZCdcclxuICAgICAgICAgICAgICAgIHRleHRCdG5FbXBsb3llciA9IFwi44K344OD44K/44O85om/6KqN44GX44GfXCJcclxuICAgICAgICAgICAgICAgIGNsaWNrQnRuRW1wbG95ZXIgICA9IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuXHJcblxyXG4gICAgICAgIHJldHVybiAgKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPXsgdGhpcy5zdGF0ZS5pZCArIFwianMtYm9va2luZy1zZXR0aW5nXCIgfSBjbGFzc05hbWU9XCJtb2RhbCBtb2RhbC1ib29raW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+5pel5pmC6Kq/5pW0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctZGF0ZXRpbWUtcGlja2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyX19kYXRldGltZS1waWNrZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCB3cmFwcGVyX19kYXRlLXBpY2tlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8tY2FsZW5kYXItY2hlY2stb3V0bGluZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJkYXRlcGlja2VyIGlucHV0LWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIGF1dG9Db21wbGV0ZT1cImZhbHNlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9eyB3b3JrX2RhdGUgfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIHdyYXBwZXJfX3RpbWUtcGlja2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJoZXJvLWljb24gaGVyby1jbG9jay1vdXRsaW5lXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInRpbWVwaWNrZXJTdGFydCBpbnB1dC1jb250cm9sXCIgYXV0b0NvbXBsZXRlPVwiZmFsc2VcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9eyBzdGFydCB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgd3JhcHBlcl9fdGltZS1waWNrZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLWNsb2NrLWNoZWNrLW91dGxpbmVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidGltZXBpY2tlckZpbmlzaCBpbnB1dC1jb250cm9sXCIgYXV0b0NvbXBsZXRlPVwiZmFsc2VcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17IGZpbmlzaCB9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICB7IGRpZmZlcmVuY2VUaW1lIDw9IDAgPyBcIue1guS6huaZgumWk+OBr+mWi+Wni+aZgumWk+OCiOOCiuW+jOOBp+OBquOBkeOCjOOBsOOBquOCiuOBvuOBm+OCk+OAglwiIDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGlzdGljYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb24tc3RhdGlzdGljYWwgc2FsYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPjxzcGFuPuaZgumWk+WNmOS+oTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZhbHVlXCI+eyBzYWxhcnkgfe+/pTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbi1zdGF0aXN0aWNhbCBkaWZmZXJlbmNlVGltZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRcIj48c3Bhbj7liKnnlKjkuojlrprmmYLplpM8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZVwiPnsgZGlmZmVyZW5jZVRpbWUgfSDmmYLplpM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uLXN0YXRpc3RpY2FsIHByaWNlLXdpdGgtdGltZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRcIj48c3Bhbj7jgrfjg4Pjgr/jg7wv5a625LqL5Luj6KGM5paZ6YeRPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdmFsdWVcIj57IHByaWNlIH3vv6U8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYXV0aC5yb2xlX2lkID09IENPTkZJRy5ST0xFX1VTRVIuc2l0dGVyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0aXN0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb24tc3RhdGlzdGljYWwgc3RyaXBlU2VydkZlZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+PHNwYW4+5omL5pWw5paZPC9zcGFuPiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZVwiPnsgc3RyaXBlU2VydkZlZSB977+lPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb24tc3RhdGlzdGljYWwgbm90ZVwiPuKAu+aXouWumuOBruaJi+aVsOaWmeOBjOeZuueUn+OBl+OBvuOBmeOAgjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hdXRoLnJvbGVfaWQgPT0gQ09ORklHLlJPTEVfVVNFUi5lbXBsb3llciAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGlzdGljYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uLXN0YXRpc3RpY2FsIG15U2VydkZlZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+PHNwYW4+44K144O844OT44K55Yip55So5paZPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXZhbHVlXCI+eyBteVNlcnZGZWUgfe+/pTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uLXN0YXRpc3RpY2FsIG5vdGVcIj7igLvjgrfjg4Pjgr/jg7wv5a625LqL5Luj6KGM5paZ6YeR44GuMjDvvIU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbi1zdGF0aXN0aWNhbCB2YXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZFwiPjxzcGFuPua2iOiyu+eoju+8iDEw77yF77yJPC9zcGFuPiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZVwiPnsgdmF0IH3vv6U8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwLWJveC10b3RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlcl9fdG90YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+5ZCI6KiIPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC12YWx1ZSB0ZXh0LWNvbG9yLXdhcm5pbmctY29sb3ItZGFya1wiPnsgdG90YWwgfe+/pTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1idXR0b24tcXVlc3Rpb25cIj7kuIroqJjlhoXlrrnjgafjgYrplpPpgZXjgYTjgYLjgorjgb7jgZvjgpPjgYvvvJ88L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGRpZmZlcmVuY2VUaW1lIDwgMCA/IFwiZC1ub25lXCIgOiBcIndyYXBwZXItYnV0dG9uLXNldHRpbmdcIiB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXsgY2xhc3NCdG5TaXR0ZXIgfSBvbkNsaWNrPSB7IGNsaWNrQnRuU2l0dGVyIH0+IHsgdGV4dEJ0blNpdHRlciB9IDwvYT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17IGNsYXNzQnRuRW1wbG95ZXIgfSBvbkNsaWNrPSB7IGNsaWNrQnRuRW1wbG95ZXIgfT4geyB0ZXh0QnRuRW1wbG95ZXIgfSA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhdXRoICAgICAgICAgOiBzdGF0ZS51c2VycyxcclxuICAgICAgICBjb252ZXJ0YXRpb25zOiBzdGF0ZS51c2VyQ2hhdFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShCb29raW5nTW9kYWxTZXR0aW5nKSIsIlxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2tpbmdOb25lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAgKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwianMtYm9va2luZy1ub25lXCIgY2xhc3NOYW1lPVwibW9kYWwgbW9kYWwtYm9va2luZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJ1dHRvbi1xdWVzdGlvblwiPuOBk+OBruODpuODvOOCtuODvOOBq+OBr+OAgeOBvuOBoOOCueOCseOCuOODpeODvOODq+OBjOioreWumuOBleOCjOOBpuOBhOOBvuOBm+OCkzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cC1ib3gtdG90YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXItYnV0dG9uLXNldHRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuLWJvb2tpbmcgYnRuLXVzZXItY2FuY2VsXCIgaHJlZj1cIiNcIiByZWw9XCJtb2RhbDpjbG9zZVwiPuOCreODo+ODs+OCu+ODqzwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiXHJcbmltcG9ydCBcImpxdWVyeS1tb2RhbFwiXHJcblxyXG5cclxuY2xhc3MgQnRuQm9va2luZ01vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICB9XHJcblxyXG4gICAgY2hvb3NlT3JkZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIHZhciB7IGJvb2tpbmdzLCB1c2VyQ2hhdCB9ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgICAgICBpZighYm9va2luZ3MuZmV0Y2gpe1xyXG4gICAgICAgICAgICAkKFwiI2pzLWJvb2tpbmctbG9hZGluZ1wiKS5tb2RhbCh7XHJcbiAgICAgICAgICAgICAgICBlc2NhcGVDbG9zZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjbGlja0Nsb3NlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNob3dDbG9zZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgY2hhbm5lbEFjdGl2ZUNoYXQgPSB1c2VyQ2hhdC5maW5kKGNoYW5uZWwgPT4gY2hhbm5lbC5pc0FjdGl2ZSlcclxuICAgICAgICB2YXIgdXNlckFjdGl2ZSA9IGNoYW5uZWxBY3RpdmVDaGF0LnVzZXJcclxuICAgICAgICB2YXIgYm9va2luZyA9IGJvb2tpbmdzLmRhdGEuZmluZChib29raW5nID0+IGJvb2tpbmcuZW1wbG95ZXJfaWQgPT0gdXNlckFjdGl2ZS5pZCB8fCBib29raW5nLnNpdHRlcl9pZCA9PSB1c2VyQWN0aXZlLmlkKVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBcclxuICAgICAgICBpZiggIWJvb2tpbmcgKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICQoXCIjanMtYm9va2luZy1ub25lXCIpLm1vZGFsKHtcclxuICAgICAgICAgICAgICAgIGVzY2FwZUNsb3NlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNsaWNrQ2xvc2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2hvd0Nsb3NlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB2YXIgeyBzdGF0dXMsIHNpdHRlcl9hY2NlcHQsIGVtcGxveWVyX2FjY2VwdCB9ID0gYm9va2luZ1xyXG4gICAgICAgIGlmKCBzaXR0ZXJfYWNjZXB0ICYmIGVtcGxveWVyX2FjY2VwdCAmJiAhc3RhdHVzICl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAkKFwiI1wiICsgYm9va2luZy5pZCArIFwianMtYm9va2luZy1jb25maXJtXCIpLm1vZGFsKHtcclxuICAgICAgICAgICAgICAgIGVzY2FwZUNsb3NlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNsaWNrQ2xvc2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2hvd0Nsb3NlOiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2UgaWYoICFzaXR0ZXJfYWNjZXB0IHx8ICFlbXBsb3llcl9hY2NlcHQgKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICQoXCIjXCIgKyBib29raW5nLmlkICsgXCJqcy1ib29raW5nLXNldHRpbmdcIikubW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgZXNjYXBlQ2xvc2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2xpY2tDbG9zZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2xvc2U6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmKCAgc2l0dGVyX2FjY2VwdCAmJiBlbXBsb3llcl9hY2NlcHQgJiYgc3RhdHVzICl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidsOgbyBmaW5pc2ggcuG7k2lcIilcclxuICAgICAgICAgICAgJChcIiNcIiArIGJvb2tpbmcuaWQgK1wianMtYm9va2luZy1maW5pc2hcIikubW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgZXNjYXBlQ2xvc2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2xpY2tDbG9zZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2xvc2U6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLWNhbGVuZGFyLW1vbnRoIGNhbGVuZGFyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLmNob29zZU9yZGVyIH1cclxuICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXV0aCAgICA6IHN0YXRlLnVzZXJzLFxyXG4gICAgICAgIGJvb2tpbmdzOiBzdGF0ZS5ib29raW5nLFxyXG4gICAgICAgIHVzZXJDaGF0OiBzdGF0ZS51c2VyQ2hhdCxcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQnRuQm9va2luZ01vZGFsKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBcIi4uLy4uL3Njc3MvY2hhdC9lbW9qaS5zY3NzXCJcclxuXHJcbmNsYXNzIEVtb2ppIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBhZGRJY29uSW5wdXRDaGF0ID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaW5wdXQtY2hhdFwiKVxyXG4gICAgICAgIGlmIChpbnB1dCkge1xyXG4gICAgICAgICAgICB2YXIgY29udGVudCA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICAvLy8gYWRkIGljb24gXHJcbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50ICsgdGhpcy5wcm9wcy5zeW1ib2xcclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBjb250ZW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiY29tcG9uZW50LWVtb2ppXCIgb25DbGljaz17dGhpcy5hZGRJY29uSW5wdXRDaGF0fT57dGhpcy5wcm9wcy5zeW1ib2x9PC9pPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRW1vamk7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IFwiLi4vLi4vc2Nzcy9jaGF0L2hlYWQtaW5mby5zY3NzXCJcclxuaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vLi4vY29uZmlnXCJcclxuY2xhc3MgSGVhZEluZm8gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuXHRjb21wb25lbnREaWRVcGRhdGUoKXtcclxuXHRcdC8vLy9zZXQgaGVpZ2h0IGNvbXBvbmVudFxyXG4gICAgICAgIHZhciBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbXBvbmVudC1zaWRlYmFyLWNoYXRcIilcclxuICAgICAgICBpZihzaWRlYmFyLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIHZhciBtZXNzYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb21wb25lbnQtbGlzdC1tZXNzYWdlXCIpXHJcbiAgICAgICAgICAgIGlmKG1lc3NhZ2VzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBzaWRlYmFyWzBdLnN0eWxlLmhlaWdodCA9IG1lc3NhZ2VzWzBdLmNsaWVudEhlaWdodCArIFwicHhcIjsgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHRcclxuXHRyZW5kZXIoKSB7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCJyZW5kZXIgaGVhZCBjaGF0XCIpXHJcblx0XHR2YXIgeyBjaGFubmVscyB9ID0gdGhpcy5wcm9wc1xyXG5cdFx0dmFyIGNoYW5uZWxBY3RpdmUgPSBjaGFubmVscy5maW5kKGNoYW5uZWwgPT4gY2hhbm5lbC5pc0FjdGl2ZSlcclxuXHJcblx0XHRpZiAoIWNoYW5uZWxBY3RpdmUpIHtcclxuXHRcdFx0cmV0dXJuIG51bGxcclxuXHRcdH1cclxuXHRcdHZhciB0ZXh0T25saW5lID0gIGNoYW5uZWxBY3RpdmUudXNlci5vbmxpbmUgPyBcIuOCquODs+ODqeOCpOODs1wiIDogXCLjgqrjg5Xjg6njgqTjg7NcIlxyXG5cdFx0dmFyIGhyZWZVc2VyID0gbnVsbFxyXG5cdFx0aWYoIHR5cGVvZiBST1VURV9WSUVXX1NJVFRFUiAhPSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgUk9VVEVfVklFV19FTVBMT1lFUiAhPSAndW5kZWZpbmVkJyApe1xyXG5cdFx0XHRpZiggY2hhbm5lbEFjdGl2ZS51c2VyLnJvbGVfaWQgPT0gQ09ORklHLlJPTEVfVVNFUi5zaXR0ZXIgKXtcclxuXHRcdFx0XHRocmVmVXNlciA9IFJPVVRFX1ZJRVdfU0lUVEVSICsgXCIvXCIgKyBjaGFubmVsQWN0aXZlLnVzZXIuaWRcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiggY2hhbm5lbEFjdGl2ZS51c2VyLnJvbGVfaWQgPT0gQ09ORklHLlJPTEVfVVNFUi5lbXBsb3llciApe1xyXG5cdFx0XHRcdGhyZWZVc2VyID0gUk9VVEVfVklFV19FTVBMT1lFUiArIFwiL1wiICsgY2hhbm5lbEFjdGl2ZS51c2VyLmlkXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1oZWFkLWluZm9cIj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1c2VyLWFjdGl2ZS1jaGF0XCI+XHJcblx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzTmFtZT1cInN0YXRlLWF2YXRhciBhY3RpdmUtb25saW5lXCI+XHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRocmVmVXNlciA/IFxyXG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2hyZWZVc2VyfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtDT05GSUcuU0VSVkVSX1BIUC5VUkwgKyBjaGFubmVsQWN0aXZlLnVzZXIuYXZhdGFyfSBhbHQ9XCJcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQ6IFxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtDT05GSUcuU0VSVkVSX1BIUC5VUkwgKyBjaGFubmVsQWN0aXZlLnVzZXIuYXZhdGFyfSBhbHQ9XCJcIiAvPlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PC9maWd1cmU+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtaW5mb1wiPlxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0aHJlZlVzZXIgPyBcclxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPXtocmVmVXNlcn0gY2xhc3NOYW1lPVwibmFtZVwiPntjaGFubmVsQWN0aXZlLnVzZXIuZmlyc3RfbmFtZSArIFwiIFwiICtjaGFubmVsQWN0aXZlLnVzZXIubGFzdF9uYW1lfTwvYT5cclxuXHRcdFx0XHRcdFx0XHQ6IFxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj57Y2hhbm5lbEFjdGl2ZS51c2VyLmZpcnN0X25hbWUgKyBcIiBcIiArY2hhbm5lbEFjdGl2ZS51c2VyLmxhc3RfbmFtZX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17KGNoYW5uZWxBY3RpdmUudXNlci5vbmxpbmUgPyBcImFjdGl2ZS1ub3dcIiA6ICcnKSArIFwiIHRpbWUtb25saW5lXCJ9Pnt0ZXh0T25saW5lfTwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0Y2hhbm5lbHM6IHN0YXRlLnVzZXJDaGF0LFxyXG5cdFx0dXNlcnMgICA6IHN0YXRlLnVzZXJzLFxyXG5cdFx0dXNlciAgICA6IHN0YXRlLnVzZXJzLFxyXG5cdFx0Y2xpZW50ICA6IHN0YXRlLmNsaWVudFxyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSGVhZEluZm8pOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGlzdEVtb2ppIGZyb20gXCIuL0xpc3RFbW9qaS5qc3hcIjtcclxuaW1wb3J0IE1lc3NhZ2VDaGF0VHlwaW5nIGZyb20gXCIuL01lc3NhZ2VDaGF0VHlwaW5nLmpzeFwiXHJcbmltcG9ydCBCb29raW5nIGZyb20gXCIuL0Jvb2tpbmcuanN4XCJcclxuaW1wb3J0IEJ0bkJvb2tpbmdNb2RhbCBmcm9tIFwiLi9CdG5Cb29raW5nTW9kYWwuanN4XCJcclxuaW1wb3J0IFwiLi4vLi4vc2Nzcy9jaGF0L2lucHV0LXNlbmQtY2hhdC5zY3NzXCI7XHJcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uL2NvbmZpZy9pbmRleC5qc1wiXHJcbmltcG9ydCB7IHNlbmRNZXNzYWdlVG9DaGFubmVsLCBzYXZlQmxvYlRvU2VydmVyLCBzZW5kVHlwaW5nTWVzc2FnZVRvQ2hhbm5lbCwgXHJcbiAgICBsaXN0ZW5SZWFkTWVzc2FnZU5ld1VzZXIgXHJcbn0gXHJcbmZyb20gXCIuLi8uLi9saWJyYXJ5L3NlcnZpY2UuanNcIlxyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCJcclxuXHJcblxyXG5jbGFzcyBJbnB1dFNlbmRDaGF0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0geyBzZW5kQ2hhdDogZmFsc2UgfVxyXG4gICAgICAgIHRoaXMuc3VibWl0TWVzc2FnZUNoYXQgPSB0aGlzLnN1Ym1pdE1lc3NhZ2VDaGF0LmJpbmQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB2YXIgc3VwID0gdGhpcztcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgXCJwYXN0ZVwiLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSB0aGUgZXZlbnRcclxuICAgICAgICAgICAgICAgIHN1cC5yZXRyaWV2ZUltYWdlRnJvbUNsaXBib2FyZEFzQmxvYihldmVudClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFsc2VcclxuICAgICAgICApO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpe1xyXG5cclxuICAgICAgICB2YXIgeyB1c2VyQ2hhdCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHZhciBjaGFubmVsQWN0aXZlQ2hhdCA9IHVzZXJDaGF0LmZpbmQoY2hhbm5lbCA9PiBjaGFubmVsLmlzQWN0aXZlKVxyXG5cclxuICAgICAgICB2YXIgbWVzc2FnZXMgPSBjaGFubmVsQWN0aXZlQ2hhdCAmJiBjaGFubmVsQWN0aXZlQ2hhdC5tZXNzYWdlXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInxpbnB1dCBzZW5kIGNoYXQgY29tcG9uZW50RGlkVXBkYXRlXCIpXHJcblxyXG4gICAgICAgIHZhciBkb21TY3JvbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLXNjcm9sbC10by1ib3R0b21cIilcclxuICAgICAgICB2YXIgZG9tV3JpdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pcy13cml0ZS1tZXNzYWdlXCIpXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkb21TY3JvbGwuc2Nyb2xsSGVpZ2h0LCBkb21TY3JvbGwuY2xpZW50SGVpZ2h0ICsgXCJsaXN0ZW5SZWFkTWVzc2FnZU5ld1VzZXJcIilcclxuICAgICAgICBpZiggZG9tV3JpdGVyICYmIGRvbVNjcm9sbCAmJiBkb21TY3JvbGwuc2Nyb2xsSGVpZ2h0ID09IGRvbVNjcm9sbC5jbGllbnRIZWlnaHQpe1xyXG4gICAgICAgICAgICBsaXN0ZW5SZWFkTWVzc2FnZU5ld1VzZXIobWVzc2FnZXMsIGNoYW5uZWxBY3RpdmVDaGF0KVxyXG4gICAgICAgIH1lbHNlIGlmKFxyXG4gICAgICAgICAgICBkb21TY3JvbGwgJiYgXHJcbiAgICAgICAgICAgIGRvbVdyaXRlciAmJiBcclxuICAgICAgICAgICAgZG9tV3JpdGVyLmNsYXNzTGlzdC5jb250YWlucygnZm9sbG93LWNvbnZlcnNhdGlvbicpKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXNjcm9sbC10by1ib3R0b20nKS5zY3JvbGxUb3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtc2Nyb2xsLXRvLWJvdHRvbScpLnNjcm9sbEhlaWdodFxyXG4gICAgICAgICAgICAgICAgaWYoICQoXCIjanMtc2Nyb2xsLXRvLWJvdHRvbSBpbWdcIikubGVuZ3RoICl7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNqcy1zY3JvbGwtdG8tYm90dG9tIGltZ1wiKS5vbmUoXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXNjcm9sbC10by1ib3R0b20nKSl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXNjcm9sbC10by1ib3R0b20nKS5zY3JvbGxUb3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtc2Nyb2xsLXRvLWJvdHRvbScpLnNjcm9sbEhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3VibWl0TWVzc2FnZUNoYXQgPSBmdW5jdGlvbiAobWVzc2FnZSwgc3R5bGUsIGF0dGFjaG1lbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh7IG1lc3NhZ2UsIHN0eWxlLCBhdHRhY2htZW50IH0pXHJcbiAgICAgICAgaWYgKCFtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIGlmIChzdHlsZSA9PSBcIklNQUdFXCIpIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBzdHlsZVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzdHlsZSkge1xyXG4gICAgICAgICAgICB2YXIgZW1vamlDaGF0ID0gY29uZmlnLkVNT0pJUy5maWx0ZXIoZW1vamkgPT4gZW1vamkuc3ltYm9sID09IG1lc3NhZ2UudHJpbSgpKVxyXG4gICAgICAgICAgICBpZiAoZW1vamlDaGF0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgc3R5bGUgPSBcIkVNT0pJXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy51c2VyKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLy8gbMOgIG7hur91IHRva2VuIGjhur90IGjhuqFuIHRow6wgcGjhuqNpIGY1IHRyw6xuaCBkdXnhu4d0XHJcbiAgICAgICAgICAgIHZhciB7IHVzZXIgfSA9IHRoaXMucHJvcHMsXHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZSA9IHRoaXNcclxuICAgICAgICAgICAgdmFyIGRpZmYgPSAoKG5ldyBEYXRlKS5nZXRUaW1lKCkgLSBuZXcgRGF0ZSh1c2VyLnRva2Vucy5wZXJpb2QpLmdldFRpbWUoKSkgLyAxMDAwXHJcbiAgICAgICAgICAgIGlmIChkaWZmID49IHVzZXIudG9rZW5zLmV4cGlyZSkge1xyXG4gICAgICAgICAgICAgICAgLy8vIGZldGNoIG5ldyB0b2tlblxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBtZXNzYWdlU2VuZFRvQ2hhbm5lbCA9IG1lc3NhZ2VcclxuICAgICAgICAgICAgdmFyIGNoYW5uZWxTZW5kID0gdGhpcy5wcm9wcy51c2VyQ2hhdC5maW5kKGNoYW5uZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoYW5uZWwuaXNBY3RpdmUgPT0gdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB2YXIgY2hhbm5lbElkICAgPSBjaGFubmVsU2VuZC5pZCxcclxuICAgICAgICAgICAgICAgIHRva2VuQWNjZXNzID0gdXNlci50b2tlbnMudG9rZW5BY2Nlc3MsXHJcbiAgICAgICAgICAgICAgICBkZXRlY3QgICAgICA9IHRoaXMucHJvcHMuY2xpZW50XHJcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlVG9DaGFubmVsKG1lc3NhZ2VTZW5kVG9DaGFubmVsLCBzdHlsZSwgYXR0YWNobWVudCwgY2hhbm5lbElkLCBcclxuICAgICAgICAgICAgICAgIHRva2VuQWNjZXNzLCBkZXRlY3QsIGluc3RhbmNlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTZW5kRW1vamlTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBcIiDwn5KdIFwiXHJcbiAgICAgICAgdmFyIHN0eWxlID0gXCJFTU9KSVwiXHJcbiAgICAgICAgdGhpcy5zdWJtaXRNZXNzYWdlQ2hhdChtZXNzYWdlLCBzdHlsZSwgbnVsbClcclxuICAgIH1cclxuICAgIGhhbmRsZVNlbmRNZXNzYWdlU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIHZhciBzdHlsZSA9IFwiXCJcclxuICAgICAgICB2YXIgdXJsQXR0YWNobWVudCA9IFtdXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGltYWdlc0RvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaW1hZ2UtLWJsb2NrXCIpXHJcbiAgICAgICAgdmFyIGltYWdlcyAgICA9IGltYWdlc0RvbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicmVtb3ZlLWltYWdlXCIpXHJcbiAgICAgICAgdmFyIG1lc3NhZ2UgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaW5wdXQtY2hhdFwiKS52YWx1ZVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChpbWFnZXMubGVuZ3RoICYmICFtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UgPSAnSU1BR0UnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghbWVzc2FnZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pbnB1dC1jaGF0XCIpLnZhbHVlID0gJydcclxuXHJcbiAgICAgICAgaWYgKGltYWdlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc3R5bGUgPSBcIklNQUdFXCJcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHVybEF0dGFjaG1lbnQgPSBbXVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleF9pbWFnZV9zZW5kID0gMDsgaW5kZXhfaW1hZ2Vfc2VuZCA8IGltYWdlcy5sZW5ndGg7IGluZGV4X2ltYWdlX3NlbmQrKykge1xyXG4gICAgICAgICAgICAgICAgaWYoIWltYWdlc1tpbmRleF9pbWFnZV9zZW5kXS5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLXNpZ24tdXJsJykpe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybEF0dGFjaG1lbnQucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsIDogaW1hZ2VzW2luZGV4X2ltYWdlX3NlbmRdLmdldEF0dHJpYnV0ZSgnZGF0YS11cmwnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGltYWdlc1tpbmRleF9pbWFnZV9zZW5kXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogKG5ldyBEYXRlKS5nZXRUaW1lKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWltYWdlLS1ibG9ja1wiKS5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgIHRoaXMuc3VibWl0TWVzc2FnZUNoYXQobWVzc2FnZSwgc3R5bGUsIHVybEF0dGFjaG1lbnQpXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VuZE1lc3NhZ2VEb3duID0gKGV2ZW50KSA9PiB7XHJcblxyXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09IDEzICYmICFldmVudC5zaGlmdEtleSkge1xyXG4gICAgICAgICAgICB2YXIgc3R5bGUgPSBcIlwiXHJcbiAgICAgICAgICAgIHZhciB1cmxBdHRhY2htZW50ID0gW11cclxuICAgICAgICAgICAgdmFyIGltYWdlc0RvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaW1hZ2UtLWJsb2NrXCIpXHJcbiAgICAgICAgICAgIHZhciBpbWFnZXMgPSBpbWFnZXNEb20uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInJlbW92ZS1pbWFnZVwiKVxyXG4gICAgICAgICAgICBpZiAoaW1hZ2VzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgc3R5bGUgPSBcIklNQUdFXCJcclxuICAgICAgICAgICAgICAgIHVybEF0dGFjaG1lbnQgPSBbXVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXhfaW1hZ2Vfc2VuZCA9IDA7IGluZGV4X2ltYWdlX3NlbmQgPCBpbWFnZXMubGVuZ3RoOyBpbmRleF9pbWFnZV9zZW5kKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZighaW1hZ2VzW2luZGV4X2ltYWdlX3NlbmRdLmNsYXNzTGlzdC5jb250YWlucygnanMtc2lnbi11cmwnKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybEF0dGFjaG1lbnQucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgOiBpbWFnZXNbaW5kZXhfaW1hZ2Vfc2VuZF0uZ2V0QXR0cmlidXRlKCdkYXRhLXVybCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGltYWdlc1tpbmRleF9pbWFnZV9zZW5kXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IChuZXcgRGF0ZSkuZ2V0VGltZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pbWFnZS0tYmxvY2tcIikuaW5uZXJIVE1MID0gJydcclxuICAgICAgICAgICAgdGhpcy5zdWJtaXRNZXNzYWdlQ2hhdChldmVudC50YXJnZXQudmFsdWUsIHN0eWxlLCB1cmxBdHRhY2htZW50KVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VuZENoYXQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaW5wdXQtY2hhdFwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMzIpIHtcclxuICAgICAgICAgICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pbnB1dC1jaGF0XCIpXHJcbiAgICAgICAgICAgIGlmIChpbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIC8vLyBnZXQgd29yZCBsYXN0XHJcbiAgICAgICAgICAgICAgICB2YXIgd29yZHMgPSBjb250ZW50LnNwbGl0KFwiIFwiKTtcclxuICAgICAgICAgICAgICAgIHZhciB3b3JkTGFzdGVzdCA9IHdvcmRzW3dvcmRzLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgICAgICAgICAvLy8vIGNoZWNrIGhhdmUgc3lzYm9sIFxyXG4gICAgICAgICAgICAgICAgdmFyIGVtb2ppc0NhbGwgPSBjb25maWcuRU1PSklTLmZpbHRlcihpdGVtID0+IGl0ZW0uc2lnbiA9PSB3b3JkTGFzdGVzdClcclxuICAgICAgICAgICAgICAgIGlmIChlbW9qaXNDYWxsLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vLyBhZGQgaWNvbiBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGFzdEluZGV4ID0gY29udGVudC5sYXN0SW5kZXhPZihcIiBcIilcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGNvbnRlbnQuc3Vic3RyaW5nKDAsIGxhc3RJbmRleCkgKyBcIiBcIiArIGVtb2ppc0NhbGxbMF0uc3ltYm9sXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZVNlbmRNZXNzYWdlVXAgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2VuZENoYXQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbmRDaGF0OiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pbnB1dC1jaGF0XCIpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW1hZ2VGaWxlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoaW1nTG9hZGluZykge1xyXG4gICAgICAgIC8vIGFkZCBpdCBpbiBlZGl0b3JcclxuICAgICAgICBpbWdMb2FkaW5nLndpZHRoID0gMTAwO1xyXG4gICAgICAgIC8vLyBjcmVhdGUgd3JhcHBlciBpbWdcclxuICAgICAgICB2YXIgd3JhcHBlckltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB3cmFwcGVySW1hZ2UuY2xhc3NOYW1lID0gXCJyZW1vdmUtaW1hZ2UganMtc2lnbi11cmxcIjtcclxuICAgICAgICB3cmFwcGVySW1hZ2Uub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdyYXBwZXJJbWFnZS5hcHBlbmRDaGlsZChpbWdMb2FkaW5nKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWltYWdlLS1ibG9ja1wiKS5hcHBlbmRDaGlsZCh3cmFwcGVySW1hZ2UpO1xyXG4gICAgfVxyXG4gICAgcmV0cmlldmVJbWFnZSA9IGZpbGUgPT4ge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyggZmlsZSApXHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGhpcy5pbWFnZUZpbGVDYWxsYmFja1xyXG4gICAgICAgIC8vIFJldHJpZXZlIGltYWdlIG9uIGNsaXBib2FyZCBhcyBibG9iXHJcbiAgICAgICAgc2F2ZUJsb2JUb1NlcnZlcihmaWxlKVxyXG4gICAgICAgIC8vIENyZWF0ZSBhbiBpbWFnZVxyXG4gICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAvLyBPbmNlIHRoZSBpbWFnZSBsb2FkcywgcmVuZGVyIHRoZSBpbWcgb24gdGhlIGNhbnZhc1xyXG4gICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBkaW1lbnNpb25zIG9mIHRoZSBjYW52YXMgd2l0aCB0aGUgZGltZW5zaW9ucyBvZiB0aGUgaW1hZ2VcclxuICAgICAgICAgICAgY2FsbGJhY2sodGhpcyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBDcm9zc2Jyb3dzZXIgc3VwcG9ydCBmb3IgVVJMXHJcbiAgICAgICAgdmFyIFVSTE9iaiA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTDtcclxuICAgICAgICAvLyBDcmVhdGVzIGEgRE9NU3RyaW5nIGNvbnRhaW5pbmcgYSBVUkwgcmVwcmVzZW50aW5nIHRoZSBvYmplY3QgZ2l2ZW4gaW4gdGhlIHBhcmFtZXRlclxyXG4gICAgICAgIC8vIG5hbWVseSB0aGUgb3JpZ2luYWwgQmxvYlxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGltZy5zcmMgPSBVUkxPYmouY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXRyaWV2ZUZpbGUgPSBmaWxlID0+IHtcclxuXHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGhpcy5pbWFnZUZpbGVDYWxsYmFja1xyXG4gICAgICAgIC8vIFJldHJpZXZlIGltYWdlIG9uIGNsaXBib2FyZCBhcyBibG9iXHJcbiAgICAgICAgc2F2ZUJsb2JUb1NlcnZlcihmaWxlKVxyXG4gICAgICAgIC8vIENyZWF0ZSBhbiBpbWFnZVxyXG4gICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAvLyBPbmNlIHRoZSBpbWFnZSBsb2FkcywgcmVuZGVyIHRoZSBpbWcgb24gdGhlIGNhbnZhc1xyXG4gICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBkaW1lbnNpb25zIG9mIHRoZSBjYW52YXMgd2l0aCB0aGUgZGltZW5zaW9ucyBvZiB0aGUgaW1hZ2VcclxuICAgICAgICAgICAgY2FsbGJhY2sodGhpcyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBDcm9zc2Jyb3dzZXIgc3VwcG9ydCBmb3IgVVJMXHJcbiAgICAgICAgdmFyIFVSTE9iaiA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTDtcclxuICAgICAgICAvLyBDcmVhdGVzIGEgRE9NU3RyaW5nIGNvbnRhaW5pbmcgYSBVUkwgcmVwcmVzZW50aW5nIHRoZSBvYmplY3QgZ2l2ZW4gaW4gdGhlIHBhcmFtZXRlclxyXG4gICAgICAgIC8vIG5hbWVseSB0aGUgb3JpZ2luYWwgQmxvYlxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGltZy5zcmMgPSBjb25maWcuU0VSVkVSX1BIUC5VUkwgKyBcIi9pbWFnZS9mb2xkZXIuanBnXCJcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0cmlldmVJbWFnZUZyb21DbGlwYm9hcmRBc0Jsb2IgPSAocGFzdGVFdmVudCkgPT4ge1xyXG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRoaXMuaW1hZ2VGaWxlQ2FsbGJhY2tcclxuICAgICAgICBpZiAoIXBhc3RlRXZlbnQuY2xpcGJvYXJkRGF0YSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgLy8vIGNhbGwgY2FsYmFjayBmdW5jdGlvbiB1bmRlZmluZVxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaXRlbXMgPSBwYXN0ZUV2ZW50LmNsaXBib2FyZERhdGEuaXRlbXM7XHJcbiAgICAgICAgaWYgKCFpdGVtcykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgLy8vIGNhbGwgY2FsYmFjayBmdW5jdGlvbiB1bmRlZmluZVxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIFNraXAgY29udGVudCBpZiBub3QgaW1hZ2VcclxuICAgICAgICAgICAgaWYgKGl0ZW1zW2ldLnR5cGUuaW5kZXhPZihcImltYWdlXCIpID09IC0xKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIHZhciBmaWxlID0gaXRlbXNbaV0uZ2V0QXNGaWxlKClcclxuICAgICAgICAgICAgdGhpcy5yZXRyaWV2ZUltYWdlKCBmaWxlIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzaG93TGlzdEVtb2ppID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdmFyIGVtb2ppcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtZW1vamlzXCIpO1xyXG4gICAgICAgIGlmIChlbW9qaXMpIHtcclxuICAgICAgICAgICAgZW1vamlzLmNsYXNzTGlzdC5hZGQoXCJzaG93LXRlbXBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGFuZGxlU2VuZENoYXRDbGljayA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgLy8vLyBzZW5kIGNsYXNzIGlzIHdyaXRlIG1lc3NhZ2VcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlzLXdyaXRlLW1lc3NhZ2VcIikuY2xhc3NMaXN0LmFkZChcImZvbGxvdy1jb252ZXJzYXRpb25cIilcclxuXHJcbiAgICAgICAgLy8vc2VuZCB0eXBpbmcgXHJcbiAgICAgICAgdmFyIHsgdXNlciB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHZhciBjaGFubmVsU2VuZCA9IHRoaXMucHJvcHMudXNlckNoYXQuZmluZChjaGFubmVsID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGNoYW5uZWwuaXNBY3RpdmUgPT0gdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdmFyIGNoYW5uZWxJZCAgID0gY2hhbm5lbFNlbmQuaWQsXHJcbiAgICAgICAgICAgIGNoYW5uZWxOYW1lID0gY2hhbm5lbFNlbmQuY2hhbm5lbE5hbWUsXHJcbiAgICAgICAgICAgIHRva2VuQWNjZXNzID0gdXNlci50b2tlbnMudG9rZW5BY2Nlc3NcclxuXHJcbiAgICAgICAgc2VuZFR5cGluZ01lc3NhZ2VUb0NoYW5uZWwoIGNoYW5uZWxJZCwgY2hhbm5lbE5hbWUsIHRva2VuQWNjZXNzIClcclxuICAgIH1cclxuICAgIGNob29zZUZpbGUgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZS1maWxlXCIpLmNsaWNrKClcclxuICAgIH1cclxuXHJcbiAgICBzYXZlRmlsZSA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlLWZpbGVcIikuZmlsZXNbMF0gXHJcbiAgICAgICAgdmFyIGFjY2VwdCA9IC8oXFwuanBnfFxcLmpwZWd8XFwuYm1wfFxcLmdpZnxcXC5wbmd8XFwuaW1hZ2UpJC9pXHJcbiAgICAgICAgaWYoYWNjZXB0LmV4ZWMoZmlsZS5uYW1lKSl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnJldHJpZXZlSW1hZ2UoIGZpbGUgKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGFjY2VwdCA9IC8oXFwueGxzfFxcLnhsc3h8XFwuY3N2fFxcLnBkZnxcXC5kb2N8XFwuZG9jeCkkL2lcclxuICAgICAgICBpZihhY2NlcHQuZXhlYyhmaWxlLm5hbWUpKXsgXHJcblxyXG4gICAgICAgICAgICB0aGlzLnJldHJpZXZlRmlsZSggZmlsZSApXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBhbGVydChcIkZpbGUgZXh0ZW5zaW9uIG5vdCBzdXBwb3J0ZWQhXCIpXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLnVzZXIgfHwgIXRoaXMucHJvcHMuc29ja2V0IHx8ICF0aGlzLnByb3BzLnVzZXJDaGF0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgeyB1c2VyQ2hhdCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHZhciBjaGFubmVsQWN0aXZlQ2hhdCA9IHVzZXJDaGF0LmZpbmQoY2hhbm5lbCA9PiBjaGFubmVsLmlzQWN0aXZlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cImpzLWlzLXdyaXRlLW1lc3NhZ2VcIiBjbGFzc05hbWU9XCJjb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0IGZvbGxvdy1jb252ZXJzYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxNZXNzYWdlQ2hhdFR5cGluZyB0b1VzZXI9e2NoYW5uZWxBY3RpdmVDaGF0fSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImpzLWltYWdlLS1ibG9ja1wiIGNsYXNzTmFtZT1cImltYWdlLWJsb2NrXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8QnRuQm9va2luZ01vZGFsIC8+XHJcbiAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLWZpbGUtY2xvdWQtb3V0bGluZSBmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5jaG9vc2VGaWxlIH1cclxuICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJpbWFnZS1maWxlXCIgdHlwZT1cImZpbGVcIiBjbGFzc05hbWU9XCJkLW5vbmVcIiBhY2NlcHQ9XCIueGxzLC54bHN4LC5jc3YsaW1hZ2UvKiwucGRmLC5kb2MsLmRvY3hcIiBvbkNoYW5nZT17IHRoaXMuc2F2ZUZpbGUgfSAvPlxyXG4gICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZXJvLWljb24gaGVyby1zdGlja2VyLWVtb2ppIGVtb3RpY29uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNob3dMaXN0RW1vaml9XHJcbiAgICAgICAgICAgICAgICA+PC9pPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJqcy1pbnB1dC1jaGF0XCJcclxuICAgICAgICAgICAgICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlU2VuZE1lc3NhZ2VEb3dufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9e3RoaXMuaGFuZGxlU2VuZE1lc3NhZ2VVcH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVNlbmRDaGF0Q2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLjg6Hjg4Pjgrvjg7zjgrjjgpLmm7jjgY8uLi5cIlxyXG4gICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJoZXJvLWljb24gaGVyby1zZW5kLW91dGxpbmUgc2VuZFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2VuZE1lc3NhZ2VTdWJtaXR9PjwvaT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLWhlYXJ0LW11bHRpcGxlLW91dGxpbmUgcmVhY3RcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNlbmRFbW9qaVN1Ym1pdH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgPExpc3RFbW9qaSAvPlxyXG4gICAgICAgICAgICAgICAgPEJvb2tpbmcgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5sZXQgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZXIgICAgOiBzdGF0ZS51c2VycyxcclxuICAgICAgICBjbGllbnQgIDogc3RhdGUuY2xpZW50LFxyXG4gICAgICAgIHVzZXJDaGF0OiBzdGF0ZS51c2VyQ2hhdCxcclxuICAgICAgICBzb2NrZXQgIDogc3RhdGUuc29ja2V0XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKElucHV0U2VuZENoYXQpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBFbW9qaSBmcm9tIFwiLi9FbW9qaS5qc3hcIjtcclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vY29uZmlnL2luZGV4LmpzXCJcclxuXHJcbmNsYXNzIExpc3RFbW9qaSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cImpzLWVtb2ppc1wiIGNsYXNzTmFtZT1cImNvbXBvbmVudC1saXN0LWVtb2ppXCI+XHJcbiAgICAgICAgICAgICAgICB7Y29uZmlnLkVNT0pJUy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8RW1vamkga2V5PXtpdGVtLnNpZ259IHN5bWJvbD17aXRlbS5zeW1ib2x9IHNpZ249e2l0ZW0uc2lnbn0gLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IExpc3RFbW9qaTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgSGVhZEluZm8gZnJvbSBcIi4vSGVhZEluZm8uanN4XCJcclxuaW1wb3J0IE1lc3NhZ2VDaGF0IGZyb20gXCIuL01lc3NhZ2VDaGF0LmpzeFwiXHJcbmltcG9ydCBJbnB1dFNlbmRDaGF0IGZyb20gXCIuL0lucHV0U2VuZENoYXQuanN4XCJcclxuaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiXHJcbmltcG9ydCBcIi4uLy4uL3Njc3MvY2hhdC9saXN0LW1lc3NhZ2Uuc2Nzc1wiXHJcbmltcG9ydCB7IGxpc3RlblNjcm9sbE1lc3NhZ2UgfSBmcm9tIFwiLi4vLi4vbGlicmFyeS9zZXJ2aWNlLmpzXCJcclxuXHJcbmNsYXNzIExpc3RNZXNzYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcblxyXG4gICAgICAgIHZhciB7IGNoYW5uZWxzIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgdmFyIGNoYW5uZWxBY3RpdmVDaGF0ID0gY2hhbm5lbHMuZmluZChjaGFubmVsID0+IGNoYW5uZWwuaXNBY3RpdmUpXHJcblxyXG4gICAgICAgIHZhciBtZXNzYWdlcyA9IGNoYW5uZWxBY3RpdmVDaGF0ICYmIGNoYW5uZWxBY3RpdmVDaGF0Lm1lc3NhZ2VcclxuXHJcbiAgICAgICAgdmFyIGxzdE1lc3NhZ2UgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1zY3JvbGwtdG8tYm90dG9tJylcclxuICAgICAgICBpZihsc3RNZXNzYWdlKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICQoJyNqcy1zY3JvbGwtdG8tYm90dG9tJykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBsaXN0ZW5TY3JvbGxNZXNzYWdlKHRoaXMsIG1lc3NhZ2VzLCBjaGFubmVsQWN0aXZlQ2hhdClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgdmFyIHsgY2hhbm5lbHMgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICB2YXIgY2hhbm5lbEFjdGl2ZUNoYXQgPSBjaGFubmVscy5maW5kKGNoYW5uZWwgPT4gY2hhbm5lbC5pc0FjdGl2ZSk7XHJcblxyXG4gICAgICAgIHZhciBtZXNzYWdlcyA9IGNoYW5uZWxBY3RpdmVDaGF0ICYmIGNoYW5uZWxBY3RpdmVDaGF0Lm1lc3NhZ2U7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LWxpc3QtbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRJbmZvIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXItbGlzdC1tZXNzYWdlXCIgaWQ9XCJqcy1zY3JvbGwtdG8tYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge21lc3NhZ2VzICYmIG1lc3NhZ2VzLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKG1lc3NhZ2UsIGtleSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlQ2hhdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XCJtZXNzYWdlLWNoYXRcIiArIGtleSArIGNoYW5uZWxBY3RpdmVDaGF0LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9e21lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbEFjdGl2ZUNoYXQ9e2NoYW5uZWxBY3RpdmVDaGF0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRTZW5kQ2hhdCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2hhbm5lbHM6IHN0YXRlLnVzZXJDaGF0XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKExpc3RNZXNzYWdlKTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBcIi4uLy4uL3Njc3MvY2hhdC9saXN0LXVzZXIuc2Nzc1wiXHJcbmltcG9ydCBVc2VyQ2hhdCBmcm9tIFwiLi9Vc2VyQ2hhdC5qc3hcIlxyXG5cclxuY2xhc3MgTGlzdFVzZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICAvLy8gdXNlckNoYXQgxJHGsOG7o2MgcGFzcyB04burIGNoYSB2w6BvXHJcbiAgICAgICAgdmFyIHsgY29udmVyc2F0aW9ucyB9ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1saXN0LXVzZXJcIj5cclxuICAgICAgICAgICAgICAgIHsgY29udmVyc2F0aW9ucyAmJiBjb252ZXJzYXRpb25zLm1hcChjaGFubmVsID0+IDxVc2VyQ2hhdCBrZXk9e2NoYW5uZWwuaWR9IGNoYW5uZWw9e2NoYW5uZWx9IC8+KSB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RVc2VyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0ICcuLi8uLi9zY3NzL2NoYXQvbWVzc2FnZS1jaGF0LnNjc3MnXHJcbmltcG9ydCBDT05GSUcgZnJvbSBcIi4uLy4uL2NvbmZpZ1wiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5cclxuY2xhc3MgTWVzc2FnZUNoYXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB2YXIgeyBhdXRoLCBtZXNzYWdlLCBjaGFubmVsQWN0aXZlQ2hhdCB9ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgICAgICB2YXIgbXlpbmZvID0geyBhdmF0YXIgOiAnJywgbmFtZTogJycgfVxyXG4gICAgICAgIGlmKCBhdXRoICYmIGF1dGguaWQgKXtcclxuICAgICAgICAgICAgbXlpbmZvLmF2YXRhciA9IGF1dGguYXZhdGFyXHJcbiAgICAgICAgICAgIG15aW5mby5uYW1lICAgPSBhdXRoLmZpcnN0X25hbWUgKyBcIiBcIiArIGF1dGgubGFzdF9uYW1lXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWNoYW5uZWxBY3RpdmVDaGF0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB1c2VySW5mbyA9IGNoYW5uZWxBY3RpdmVDaGF0LnVzZXJcclxuXHJcbiAgICAgICAgaWYgKCFtZXNzYWdlLnR5cGUpIHtcclxuICAgICAgICAgICAgdmFyIHR5cGVNZXNzYWdlID0gJ2xlZnQtbWVzc2FnZSAnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciB0eXBlTWVzc2FnZSA9ICdyaWdodC1tZXNzYWdlIGJ5LW1lICc7XHJcbiAgICAgICAgICAgIHVzZXJJbmZvID0gbXlpbmZvO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgeyBzdHlsZSB9ID0gbWVzc2FnZVxyXG5cclxuICAgICAgICB2YXIgVElNRV9ESUVfRklMRSA9IDI0ICogNjAgKiA2MCAqIDEwMDBcclxuICAgICAgICBcclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LW1lc3NhZ2UtY2hhdFwiID5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHlwZU1lc3NhZ2UgKyBcImNoYXQtZ3JvdXBcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0NPTkZJRy5TRVJWRVJfUEhQLlVSTCArIHVzZXJJbmZvLmF2YXRhcn0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSA9PSBcIklNQUdFXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5hdHRhY2htZW50Lm1hcCgoIGF0dGFjaEVsZW1lbnQgLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGF0dGFjaEVsZW1lbnQudHlwZSA9PSAnaW1nJyApe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggYXR0YWNoRWxlbWVudC50aW1lICYmIGF0dGFjaEVsZW1lbnQudGltZSAtIFRJTUVfRElFX0ZJTEUgPCAobmV3IERhdGUpLmdldFRpbWUoKSApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e1wid3JhcHBlci1hdHRhY2htZW50XCIgKyBpbmRleCArIGF0dGFjaEVsZW1lbnQudXJsIH0gY2xhc3NOYW1lPVwid3JhcHBlci1hdHRhY2htZW50XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtDT05GSUcuU0VSVkVSX1BIUC5VUkwgKyBhdHRhY2hFbGVtZW50LnVybCB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZG93bmxvYWQtZmlsZS1hdHRhY2htZW50XCIgaHJlZj17IENPTkZJRy5TRVJWRVJfUEhQLlVSTCArIGF0dGFjaEVsZW1lbnQudXJsIH0gdGFyZ2V0PVwiX2JsYW5rXCIgZG93bmxvYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLWNsb3VkLWRvd25sb2FkLW91dGxpbmVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtcIndyYXBwZXItYXR0YWNobWVudFwiICsgaW5kZXggKyBDT05GSUcuU0VSVkVSX1BIUC5VUkwgKyBcIi9pbWFnZS9mb2xkZXIuanBnXCIgfSBjbGFzc05hbWU9XCJ3cmFwcGVyLWF0dGFjaG1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eyBDT05GSUcuU0VSVkVSX1BIUC5VUkwgKyBcIi9pbWFnZS9mb2xkZXIuanBnXCIgfSAvPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkb3dubG9hZC1maWxlLWF0dGFjaG1lbnRcIiBocmVmPXsgQ09ORklHLlNFUlZFUl9QSFAuVVJMICsgYXR0YWNoRWxlbWVudC51cmwgfSB0YXJnZXQ9XCJfYmxhbmtcIiBkb3dubG9hZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLWNsb3VkLWRvd25sb2FkLW91dGxpbmVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUgKyBcIiB0ZXh0XCJ9ID57bWVzc2FnZS5jb250ZW50fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIW1lc3NhZ2UudHlwZSAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFtZXNzYWdlLnJlYWQgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdoZXJvLWljb24gaGVyby1jaGVjay1jaXJjbGUtb3V0bGluZSc+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2hlcm8taWNvbiBoZXJvLWNoZWNrLWNpcmNsZSc+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXV0aCAgICA6IHN0YXRlLnVzZXJzXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKE1lc3NhZ2VDaGF0KSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5jbGFzcyBNZXNzYWdlQ2hhdFR5cGluZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIHsgdG9Vc2VyIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgaWYgKCF0b1VzZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNoYW5uZWxJbmZvciA9IHRvVXNlcjtcclxuICAgICAgICB2YXIgdXNlclR5cGluZyA9IGNoYW5uZWxJbmZvci51c2VyXHJcbiAgICAgICAgdmFyIHR5cGVNZXNzYWdlID0gJ2Zsb2F0LWxlZnQgJztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwianMtdHlwaW5nXCIgY2xhc3NOYW1lPVwiY29tcG9uZW50LW1lc3NhZ2UtY2hhdCB0eXBpbmctY2hhdC1tZXNzc2FnZVwiIGNoYW5uZWw9e3RvVXNlci5pZH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHlwZU1lc3NhZ2UgKyBcImNoYXQtZ3JvdXBcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWNvbnRlbnQgdHlwaW5nLW1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHlwaW5nLXRleHRcIj57dXNlclR5cGluZy5maXJzdF9uYW1lICYmIHVzZXJUeXBpbmcubGFzdF9uYW1lICsgXCIg44GM5YWl5Yqb44GX44Gm44GE44G+44GZIFwifTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGljb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aWRvdFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpZG90XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlkb3RcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlQ2hhdFR5cGluZztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuLy8gaW1wb3J0IFNlYXJjaFVzZXIgZnJvbSBcIi4vU2VhcmNoVXNlci5qc3hcIlxyXG5pbXBvcnQgTGlzdFVzZXIgZnJvbSBcIi4vTGlzdFVzZXIuanN4XCJcclxuaW1wb3J0IFwiLi4vLi4vc2Nzcy9jaGF0L3NpZGViYXIuc2Nzc1wiXHJcbmltcG9ydCBDT05GSUcgZnJvbSBcIi4uLy4uL2NvbmZpZ1wiXHJcblxyXG5jbGFzcyBTaWRlQmFyQ2hhdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyIHNpZGViYXJcIilcclxuICAgICAgICB2YXIgaW5mb3IgPSB7IGF2YXRhcjogJycsIG5hbWU6ICcnIH1cclxuICAgICAgICB2YXIgeyBhdXRoIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgaWYgKGF1dGggJiYgYXV0aC5pZCkge1xyXG4gICAgICAgICAgICBpbmZvci5hdmF0YXIgPSBhdXRoLmF2YXRhclxyXG4gICAgICAgICAgICBpbmZvci5uYW1lID0gYXV0aC5maXJzdF9uYW1lICsgXCIgXCIgKyBhdXRoLmxhc3RfbmFtZSBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LXNpZGViYXItY2hhdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cInN0YXRlLWF2YXRhciBhY3RpdmUtb25saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17IENPTkZJRy5TRVJWRVJfUEhQLlVSTCArIGluZm9yLmF2YXRhciB9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+e2luZm9yLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtdXNlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0VXNlciBjb252ZXJzYXRpb25zPXt0aGlzLnByb3BzLmNvbnZlcnNhdGlvbnN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5sZXQgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGF1dGg6IHN0YXRlLnVzZXJzLFxyXG4gICAgICAgIGNvbnZlcnNhdGlvbnM6IHN0YXRlLnVzZXJDaGF0XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFNpZGVCYXJDaGF0KVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCBUWVBFIGZyb20gXCIuLi8uLi9hY3Rpb24vdHlwZS5qc1wiXHJcbmltcG9ydCBDT05GSUcgZnJvbSBcIi4uLy4uL2NvbmZpZ1wiXHJcbmNsYXNzIFVzZXJDaGF0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjaGFuZ2VBY3RpdmVVc2VyID0gKCBlICwgaWQpID0+IHtcclxuXHJcbiAgICAgICAgZS5wcm9wcy5kaXNwYXRjaCh7IHR5cGU6IFRZUEUuQ0hBVC5DSEFOR0VfVVNFUl9DSEFUX0RFRkFVTFQsIHBheWxvYWQ6IGlkIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHZhciB7IGNoYW5uZWwgfSAgICAgICAgPSB0aGlzLnByb3BzLFxyXG4gICAgICAgICAgICBjbGFzc0FjdGl2ZU9ubGluZSAgPSBjaGFubmVsLnVzZXIub25saW5lID8gJyBhY3RpdmUgJyA6ICcnLFxyXG4gICAgICAgICAgICBjbGFzc0FjdGl2ZU1lc3NhZ2UgPSBjaGFubmVsLmlzQWN0aXZlID8gJyBhY3RpdmUtbWVzc2FnZSAnIDogJydcclxuXHJcbiAgICAgICAgdmFyIFtsYXN0SXRlbV0gPSBjaGFubmVsLm1lc3NhZ2Uuc2xpY2UoLTEpXHJcblxyXG4gICAgICAgIHZhciBtdW5iZXJOb25lUmVhZCA9IGNoYW5uZWwubWVzc2FnZS5maWx0ZXIobWVzc2FnZSA9PiAhbWVzc2FnZS5yZWFkICYmICFtZXNzYWdlLnR5cGUgKS5sZW5ndGhcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXJcIiA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NBY3RpdmVPbmxpbmUgKyBjbGFzc0FjdGl2ZU1lc3NhZ2UgKyBcInVzZXItY2hhdFwifVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuY2hhbmdlQWN0aXZlVXNlcih0aGlzLCBjaGFubmVsLmlkKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwic3RhdGUtYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtDT05GSUcuU0VSVkVSX1BIUC5VUkwgKyBjaGFubmVsLnVzZXIuYXZhdGFyfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj57Y2hhbm5lbC51c2VyLmZpcnN0X25hbWUgKyBcIiBcIiArIGNoYW5uZWwudXNlci5sYXN0X25hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhc3RJdGVtICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYXN0LW1lc3NhZ2VcIj57bGFzdEl0ZW0uY29udGVudH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdW5iZXJOb25lUmVhZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm5vbmUtcmVhZC1tZXNzYWdlXCI+e211bmJlck5vbmVSZWFkfTwvaT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKShVc2VyQ2hhdCkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgU2lkZUJhckNoYXQgZnJvbSBcIi4vU2lkZUJhckNoYXQuanN4XCJcclxuaW1wb3J0IExpc3RNZXNzYWdlIGZyb20gXCIuL0xpc3RNZXNzYWdlLmpzeFwiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgeyBnZXRBY2Nlc3NUb2tlbkJ5UmVmZXNoIH0gZnJvbSBcIi4uLy4uL2xpYnJhcnkvc2VydmljZS5qc1wiXHJcbmltcG9ydCAnLi4vLi4vc2Nzcy9jaGF0L2NoYXQuc2NzcydcclxuY2xhc3MgQ2hhdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcblxyXG4gICAgICAgIC8vLyBt4buXaSBs4bqnbiB2w6BvIGNoYXQgdGjDrCBideG7mWMgcGjhuqNpIGPDsyAxIHJlZmVzaCB0b2tlbi4gbuG6v3Uga2jDtG5nIHRow6wgbOG7l2kuIFxyXG4gICAgICAgIC8vLyBE4buxYSB2w6BvIHJlZmVzaCB0b2tlbiB0YSBz4bq9IHThuqFvIHJhIDEgYWNjZXNzIHRva2VuIFxyXG4gICAgICAgIC8vLyBzb25nIHNvbmcgdmnhu4djIGZldGNoIGFjY2Vzc3Rva2VuIHRow6wgbOG6r25nIG5naGUgdHJvbmcgc29ja2V0IG7hur91IGPDsyBcclxuICAgICAgICAvLy8gYWNjZXNzIHRva2VuIHRow6wgY2hvIHBow6lwIHN0YXJ0IGNoYXRcclxuICAgICAgICB2YXIgaW5zdGFuY2VDaGF0ICAgICA9IHRoaXMsXHJcbiAgICAgICAgICAgIFRPS0VOX1JFRkVTSF9ET00gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlRPS0VOX1JFRkVTSFwiKSxcclxuICAgICAgICAgICAgeyBkZXRlY3QgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICAgICAgaWYoIFRPS0VOX1JFRkVTSF9ET00gKXtcclxuICAgICAgICAgICAgLy8vIGZldGNoIHRva2VuIGFjY2VzcyBieSB0b2tlbiByZWZlc2ggXHJcbiAgICAgICAgICAgIHZhciByZWZlc2ggPSBUT0tFTl9SRUZFU0hfRE9NLmdldEF0dHJpYnV0ZSgnZGF0YS1yZWZlc2gnKSxcclxuICAgICAgICAgICAgICAgIHVzZXJJZCA9IFRPS0VOX1JFRkVTSF9ET00uZ2V0QXR0cmlidXRlKCdkYXRhLXVzZXInKVxyXG5cclxuICAgICAgICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgICAgIC8vIHZhciBuYW1lID0gJ2lkJ1xyXG4gICAgICAgICAgICAvLyB2YXIgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgICAgIC8vIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1tcXFtcXF1dL2csICdcXFxcJCYnKTtcclxuICAgICAgICAgICAgLy8gdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnWz8mXScgKyBuYW1lICsgJyg9KFteJiNdKil8JnwjfCQpJyksXHJcbiAgICAgICAgICAgIC8vICAgICByZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpXHJcbiAgICAgICAgICAgIC8vIGlmICghcmVzdWx0cykgdXNlcklkID0gbnVsbFxyXG4gICAgICAgICAgICAvLyBlbHNlIGlmICghcmVzdWx0c1syXSkgdXNlcklkID0gJydcclxuICAgICAgICAgICAgLy8gZWxzZSB1c2VySWQgPSBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1syXS5yZXBsYWNlKC9cXCsvZywgJyAnKSlcclxuXHJcbiAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAgICAgaWYoIHVzZXJJZCApeyAvLyAmJiByZWZlc2hcclxuXHJcbiAgICAgICAgICAgICAgICBnZXRBY2Nlc3NUb2tlbkJ5UmVmZXNoKCB1c2VySWQsIHJlZmVzaCwgZGV0ZWN0LCBpbnN0YW5jZUNoYXQgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXIgbOG6oWkgQ2hhdFwiKVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1jaGF0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWNoYXQtdGVtYWxhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXItcGFnZS1jaGF0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaWRlQmFyQ2hhdCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdE1lc3NhZ2UgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkZXRlY3QgICAgICAgOiBzdGF0ZS5jbGllbnRcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQ2hhdClcclxuXHJcblxyXG5cclxuXHJcbi8vIHVzZXJDaGF0OiAoMykgW3tcclxuLy8gICAgIGF2YXRhcjogXCIvaW1hZ2UvYXZhdGFyLWhlcm8uanBnXCJcclxuLy8gICAgIGNoYW5uZWxOYW1lOiBcImNvbnN1bHRpbmctd2ViLWRlc2lnbi01ZWQxMThhMDRmYTc1ODA1YjdlOTk2ZmJcIlxyXG4vLyAgICAgaWQ6IFwiNWVkMTE4YTA0ZmE3NTgwNWI3ZTk5NmZkXCJcclxuLy8gICAgIGlzQWN0aXZlOiB0cnVlXHJcbi8vICAgICBpc09ubGluZTogdHJ1ZVxyXG4vLyAgICAgbWVzc2FnZTogKDExOCkgW1xyXG4gICAgICAgIFxyXG4vLyAgICAgICAgIHt0eXBlOiB0cnVlLCBjb250ZW50OiBcImdmZGdmZGdcIiwgc3R5bGU6IFwiXCIsIGF0dGFjaG1lbnQ6IEFycmF5KDApfVxyXG4vLyAgICAgICAgIHt0eXBlOiB0cnVlLCBjb250ZW50OiBcIiDwn5KdIFwiLCBzdHlsZTogXCJFTU9KSVwiLCBhdHRhY2htZW50OiBudWxsfVxyXG4vLyAgICAgICAgIHt0eXBlOiB0cnVlLCBjb250ZW50OiBcIiDwn5iEIFwiLCBzdHlsZTogXCJFTU9KSVwiLCBhdHRhY2htZW50OiBBcnJheSgwKX1cclxuLy8gICAgICAgICB7dHlwZTogdHJ1ZSwgY29udGVudDogXCJldmVudC5wbmdcIiwgc3R5bGU6IFwiSU1BR0VcIiwgYXR0YWNobWVudDogW1wiL3VwbG9hZHMvMTU5MTU0MDIzNzA2NC1pbWFnZS5wbmdcIl0gfVxyXG4vLyAgICAgICAgIHvigKZ9LCB74oCmfSwge+KApn0sIHvigKZ9LCB74oCmfSwge+KApn1dXHJcbi8vICAgICBuYW1lOiBcImjDuW5nIMSR4bq5cCB0cmFpXCJcclxuLy8gICAgIHRpbWVFbmRPbmxpbmU6IFwiMjAyMC0wNS0xMCAxNDo0NzowMFwiXHJcbi8vIH0sIHvigKZ9LCB74oCmfV1cclxuLy8gdXNlcnM6IHtcclxuLy8gICAgIGF2YXRhcjogXCIvaW1hZ2UvYXZhdGFyLmpwZ1wiXHJcbi8vICAgICBlbWFpbDogXCJqYnRydW9uZ3RoYW5oaHVuZ0BnbWFpbC5jb21cIlxyXG4vLyAgICAgbmFtZTogXCLlpKnmsrzmvoTlrZBcIlxyXG4vLyAgICAgcGhvbmVzOiBbe+KApn1dXHJcbi8vICAgICB0b2tlbnM6IHt0b2tlblJlZmVzaDogXCJjZWJiYjA4OTM2ODJjMzc4ZjRmNDU5NWQwMzFkMWU1NFwiLCB0b2tlbkFjY2VzczogXCI3NDIyMjQ4OGQzMWU0NGQ2NWRmYTkwNTNhYTMzNTA3M1wiLCBwZXJpb2Q6IFwiMjAyMC0wNi0xM1QwMjozMToxNS41OTdaXCIsIGV4cGlyZTogNjB9XHJcbi8vICAgICB1c2VyVHlwZTogXCJVc2VyXCJcclxuLy8gICAgIF9pZDogXCI1ZWQxMThhMDRmYTc1ODA1YjdlOTk2ZmJcIlxyXG4vLyB9IiwidmFyIGxvY2FsICAgICAgPSBcIjE1My4xMjYuMTQ5LjYzXCIsXHJcbiAgICBsb2NhbF9pcCAgID0gXCIxNTMuMTI2LjE0OS42M1wiLFxyXG4gICAgbG9jYWxfcG9ydCA9IDk5OTksXHJcbiAgICBwZWVyX3BvcnQgID0gNzAwMFxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIFNFUlZFUjoge1xyXG4gICAgUE9SVDogbG9jYWxfcG9ydCxcclxuICAgIERPTUFJTjogbG9jYWwsXHJcbiAgICBJUDogbG9jYWxfaXAsXHJcbiAgICBQRUVSX1BPUlQgOiBwZWVyX3BvcnQsXHJcbiAgICBQUk9UT0NPTDogZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAobG9jYWxfcG9ydCA9PSA0NDMpIHtcclxuICAgICAgICByZXR1cm4gXCJodHRwczovL1wiXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIFwiaHR0cDovL1wiXHJcbiAgICB9LFxyXG4gICAgQVNTRVQ6ICgpID0+IHtcclxuICAgICAgbGV0IHBvcnRfdXJsID0gJydcclxuICAgICAgbGV0IHByb3RvY29sID0gJydcclxuICAgICAgaWYgKGxvY2FsX3BvcnQgPT0gNDQzKSB7XHJcbiAgICAgICAgcHJvdG9jb2wgPSBcImh0dHBzOi8vXCJcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwcm90b2NvbCA9IFwiaHR0cDovL1wiXHJcbiAgICAgICAgcG9ydF91cmwgPSAnOicgKyBsb2NhbF9wb3J0XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBwcm90b2NvbCArIGxvY2FsICsgcG9ydF91cmw7XHJcbiAgICB9XHJcbiAgfSxcclxuICBST0xFX1VTRVI6IHtcclxuICAgIHNpdHRlciAgOiAyLFxyXG4gICAgZW1wbG95ZXI6IDMsXHJcbiAgICBhZG1pbiAgIDogMVxyXG4gIH0sXHJcbiAgU0VSVkVSX1BIUDoge1xyXG4gICAgVVJMOiBcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcFwiIFxyXG4gIH0sXHJcbiAgXHJcbiAgRU1PSklTOiBbXHJcbiAgICB7IHN5bWJvbDogXCLwn6StXCIsIHNpZ246IFwiOjNcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+ko1wiLCBzaWduOiBcIjp2XCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmYJcIiwgc2lnbjogXCI6KVwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5mCXCIsIHNpZ246IFwiPSlcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YilwiLCBzaWduOiBcIjpeKVwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iAXCIsIHNpZ246IFwiOn1cIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YgVwiLCBzaWduOiBcIjpvKVwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iDXCIsIHNpZ246IFwiOi1EXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmIRcIiwgc2lnbjogXCI6RFwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iGXCIsIHNpZ246IFwiWC1EXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmI1cIiwgc2lnbjogXCJCXkRcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+ZgVwiLCBzaWduOiBcIjotKFwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5igXCIsIHNpZ246IFwiOihcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YoVwiLCBzaWduOiBcIjrigJE8XCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmJ5cIiwgc2lnbjogXCI6W1wiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5ifXCIsIHNpZ246IFwiPjpbXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmKNcIiwgc2lnbjogXCI6e1wiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iWXCIsIHNpZ246IFwiPjooXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmKJcIiwgc2lnbjogXCI6J+KAkShcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YrVwiLCBzaWduOiBcIjonKFwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iCXCIsIHNpZ246IFwiOicpXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmKhcIiwgc2lnbjogXCJE4oCRJzpcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+Yp1wiLCBzaWduOiBcIkQ6PFwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5imXCIsIHNpZ246IFwiRDpcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YsVwiLCBzaWduOiBcIkQ7XCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmKtcIiwgc2lnbjogXCJEPVwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5ipXCIsIHNpZ246IFwiRFhcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YrlwiLCBzaWduOiBcIjotMFwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5ivXCIsIHNpZ246IFwiOOKAkTBcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YslwiLCBzaWduOiBcIj46T1wiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iXXCIsIHNpZ246IFwiOi0qXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmJlcIiwgc2lnbjogXCI6XipcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YmlwiLCBzaWduOiBcIjpeLVwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iYXCIsIHNpZ246IFwiOnhcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YjVwiLCBzaWduOiBcIjpYXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmIlcIiwgc2lnbjogXCI74oCRKVwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5icXCIsIHNpZ246IFwiKi0pXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmJhcIiwgc2lnbjogXCI7RFwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5ibXCIsIHNpZ246IFwiOlBcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YnVwiLCBzaWduOiBcInjigJFwXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmJxcIiwgc2lnbjogXCI9cFwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn6SRXCIsIHNpZ246IFwiPjpQXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfpJRcIiwgc2lnbjogXCI64oCRL1wiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iVXCIsIHNpZ246IFwiOuKAkS5cIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+Yn1wiLCBzaWduOiBcIjpTXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmJBcIiwgc2lnbjogXCI64oCRfFwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iRXCIsIHNpZ246IFwiOnxcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+Ys1wiLCBzaWduOiBcIjokXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmJ5cIiwgc2lnbjogXCI6YjNcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YllwiLCBzaWduOiBcIjrigJFYXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfpJBcIiwgc2lnbjogXCI6JlwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5i2XCIsIHNpZ246IFwiTzrigJEpXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmIdcIiwgc2lnbjogXCJPOilcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+RvFwiLCBzaWduOiBcIjA7XilcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YiFwiLCBzaWduOiBcIj47M1wiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iOXCIsIHNpZ246IFwifDvigJEpXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmKpcIiwgc2lnbjogXCJ84oCRT1wiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iPXCIsIHNpZ246IFwiOuKAkUpcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YklwiLCBzaWduOiBcIiPigJEpXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmLVcIiwgc2lnbjogXCIl4oCRKVwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iVXCIsIHNpZ246IFwiJSlcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+kklwiLCBzaWduOiBcIjojL1wiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5i3XCIsIHNpZ246IFwiOkQtXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfpKJcIiwgc2lnbjogXCI6Y1JcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+klVwiLCBzaWduOiBcIjw64oCRL1wiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn6SoXCIsIHNpZ246IFwiOi1sXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfkp1cIiwgc2lnbjogXCI8M1wiIH1cclxuICBdXHJcbn0iLCIvLyBpbXBvcnQgJ2NvcmUtanMnO1xyXG5cclxuLyogcG9seWZpbGxzLmpzICovXHJcbmltcG9ydCAnYmFiZWwtcG9seWZpbGwnXHJcbmltcG9ydCAncmVhY3QtYXBwLXBvbHlmaWxsL2llMTEnXHJcbmltcG9ydCAnY29yZS1qcydcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IEFwcCBmcm9tIFwiLi9jb21wb25lbnQvQXBwLmpzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJztcclxuXHJcbmltcG9ydCAnLi9zY3NzL2luZGV4LnNjc3MnXHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFJlZHVjZXIpO1xyXG5zdG9yZS5zdWJzY3JpYmUoZnVuY3Rpb24oKXtcclxuICAgIGNvbnNvbGUubG9nKCdjw7MgdGhheSDEkeG7lWkgdHJvbmcgUmVkdXghIScpXHJcbiAgICBjb25zb2xlLmxvZyhzdG9yZS5nZXRTdGF0ZSgpKTtcclxufSk7XHJcbmlmICh0eXBlb2YgKFN0b3JhZ2UpICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgUmVhY3RET00ucmVuZGVyKFxyXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgICAgICA8QXBwIC8+XHJcbiAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJDSEFUX0VMRU1FTlRcIikpO1xyXG59ZWxzZXtcclxuICAgIGFsZXJ0KFwi44GT44Gu44OW44Op44Km44K244Gn44Gv44CB44Ki44OX44Oq44Kx44O844K344On44Oz44Gv5q2j5bi444Gr5YuV5L2c44GX44G+44Gb44KT44CCIOOCouODg+ODl+OCsOODrOODvOODieOBl+OBpuOBj+OBoOOBleOBhFwiKVxyXG59XHJcbiIsIlxyXG5cclxuaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vY29uZmlnXCJcclxuLy8gaW1wb3J0IFBlZXIgZnJvbSBcInBlZXJqc1wiXHJcbmltcG9ydCB7IHNldHRlclVzZXIsIHNldHRlckNoYW5uZWxzLCBhZGRNZXNzYWdlLCBhZGRNZXNzYWdlU2VuZFRvTWUsIFxyXG4gICAgc2V0dGVyU29ja2V0LCBhZGRVc2VyT25saW5lLCByZW1vdmVVc2VyT25saW5lLCByZWFkQWxsTWVzc2FnZUNoYW5uZWxBY3RpdmUsXHJcbiAgICBzZXR0ZXJCb29raW5ncywgY2hhbmdlQm9va2luZyB9IGZyb20gXCIuLi9hY3Rpb25cIlxyXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi9jb25maWdcIlxyXG5cclxuXHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIlxyXG5cclxuXHJcbi8vLyBjb25maWcgZ2xvYmFsIHZhcmlhYmxlXHJcbnZhciBzb2NrZXQgICAgICAgPSBudWxsLFxyXG4gICAgZ2xvYmFsU3RyZWFtID0gbnVsbCxcclxuICAgIEVWRU5UICAgICAgICA9IENPTkZJR19FVkVOVFxyXG4vLy8gZW5kIHNldHRpbmcgdmFyaWFibGVcclxuXHJcbndpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXBvbmVudC1lbW9qaScpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgZW1vamlzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1lbW9qaXNcIik7XHJcbiAgICBpZiAoZW1vamlzKSB7XHJcbiAgICAgICAgZW1vamlzLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoZW1vamlzLmNsYXNzTGlzdC5jb250YWlucyhcInNob3ctdGVtcFwiKSkge1xyXG4gICAgICAgICAgICAgICAgZW1vamlzLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LXRlbXBcIik7XHJcbiAgICAgICAgICAgICAgICBlbW9qaXMuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBY2Nlc3NUb2tlbkJ5UmVmZXNoKCB1c2VySWQsIHJlZmVzaCwgZGV0ZWN0LCBpbnN0YW5jZUNvbXBvbmVudCApIHtcclxuICAgIFxyXG4gICAgXHJcbiAgICB2YXIgZGF0YSAgICAgICA9IHsgdXNlcklkLCByZWZlc2gsIGRldGVjdDogSlNPTi5zdHJpbmdpZnkoZGV0ZWN0KSB9LFxyXG4gICAgICAgIHRva2Vuc1VzZXIgPSBudWxsXHJcbiAgICBmZXRjaChDT05GSUcuU0VSVkVSLkFTU0VUKCkgKyAnL2FwaS9yZWZlc2gnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5jb2RlICE9IDIwMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLjg63jgrDjgqTjg7Pjgrvjg4Pjgrfjg6fjg7PjgYzmraPjgZfjgY/jgYLjgorjgb7jgZvjgpPjgIIg5YaN5bqm44Ot44Kw44Kk44Oz44GZ44KL44GL44CB566h55CG6ICF44Gr6YCj57Wh44GX44Gm44GP44Gg44GV44GEXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRva2Vuc1VzZXIgPSB7IFxyXG4gICAgICAgICAgICBleHBpcmUgICAgIDogcmVzcG9uc2UuZGF0YS5leHBpcmUsXHJcbiAgICAgICAgICAgIHBlcmlvZCAgICAgOiByZXNwb25zZS5kYXRhLnBlcmlvZCxcclxuICAgICAgICAgICAgdG9rZW5BY2Nlc3M6IHJlc3BvbnNlLmRhdGEudG9rZW5BY2Nlc3MsXHJcbiAgICAgICAgICAgIHRva2VuUmVmZXNoOiByZXNwb25zZS5kYXRhLnRva2VuUmVmZXNoXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0QWNjZXNzVG9rZW5CeVJlZmVzaCBzZXRpbWUgb3V0ICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IENPTkZJRy5TRVJWRVJfUEhQLlVSTFwiICsgcGFyc2VJbnQocmVzcG9uc2UuZGF0YS5leHBpcmUpIClcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gQ09ORklHLlNFUlZFUl9QSFAuVVJMXHJcbiAgICAgICAgfSwgcGFyc2VJbnQocmVzcG9uc2UuZGF0YS5leHBpcmUpICogMTAwMCApXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHVzZXJMb2dpbiA9IHsgLi4uIHJlc3BvbnNlLmRhdGEudXNlciwgdG9rZW5zIDogdG9rZW5zVXNlciB9XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyTG9naW4pKVxyXG4gICAgICAgIGluc3RhbmNlQ29tcG9uZW50LnByb3BzLmRpc3BhdGNoKHNldHRlclVzZXIodXNlckxvZ2luKSlcclxuICAgICAgICByZXR1cm4geyBhdXRoOiB1c2VyTG9naW4sIGRldGVjdCB9XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oIGRhdGFGZXRjaENoYW5uZWwgPT4ge1xyXG5cclxuICAgICAgICB2YXIgZGF0YSA9IHsgXHJcbiAgICAgICAgICAgIHVzZXJJZDogcGFyc2VJbnQodXNlcklkKSxcclxuICAgICAgICAgICAgYWNjZXNzOiBkYXRhRmV0Y2hDaGFubmVsLmF1dGgudG9rZW5zLnRva2VuQWNjZXNzLCBcclxuICAgICAgICAgICAgZGV0ZWN0OiBKU09OLnN0cmluZ2lmeShkYXRhRmV0Y2hDaGFubmVsLmRldGVjdClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZldGNoQ2hhbm5lbE1lc3NhZ2UoIGRhdGEgKVxyXG4gICAgfSlcclxuICAgIC50aGVuKCBkYXRhQ2hhbm5lbCA9PiB7XHJcbiAgICAgICAgaWYoIGRhdGFDaGFubmVsICl7XHJcbiAgICAgICAgICAgIGluc3RhbmNlQ29tcG9uZW50LnByb3BzLmRpc3BhdGNoKHNldHRlckNoYW5uZWxzKGRhdGFDaGFubmVsKSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBhbGVydChcIuODreOCsOOCpOODs+OCu+ODg+OCt+ODp+ODs+OBjOato+OBl+OBj+OBguOCiuOBvuOBm+OCk+OAgiDlho3luqbjg63jgrDjgqTjg7PjgZnjgovjgYvjgIHnrqHnkIbogIXjgavpgKPntaHjgZfjgabjgY/jgaDjgZXjgYRcIilcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNvY2tldEluaXRpYWxDb25uZWN0KHNvY2tldElPQ2xpZW50LCBpbnN0YW5jZUFwcCkge1xyXG4gICAgXHJcbiAgICBcclxuICAgIHNvY2tldCA9IHNvY2tldElPQ2xpZW50KENPTkZJRy5TRVJWRVIuQVNTRVQoKSlcclxuICAgIHZhciBBcHBsaWNhdGlvbkRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQXBwbGljYXRpb25cIilcclxuICAgIHNvY2tldC5vbignY29ubmVjdCcsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgQXBwbGljYXRpb25Eb20gJiYgQXBwbGljYXRpb25Eb20uY2xhc3NMaXN0LnJlbW92ZShcImNvbm5lY3Qtc29ja2V0LWVycm9yXCIpXHJcbiAgICAgICAgLy8vLyBzZXQgY29uZmlnXHJcbiAgICAgICAgc29ja2V0TGlzdGVubmVyKHNvY2tldCwgaW5zdGFuY2VBcHApXHJcbiAgICAgICAgaW5zdGFuY2VBcHAucHJvcHMuZGlzcGF0Y2goc2V0dGVyU29ja2V0KHNvY2tldCkpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzb2NrZXQgY29ubmVjdCBuw6ggc29ja2V0TGlzdGVubmVyXCIpXHJcbiAgICB9KTtcclxuICAgIHNvY2tldC5vbignZGlzY29ubmVjdCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpbnN0YW5jZUFwcC5wcm9wcy5kaXNwYXRjaChzZXR0ZXJTb2NrZXQobnVsbCkpXHJcbiAgICAgICAgQXBwbGljYXRpb25Eb20gJiYgQXBwbGljYXRpb25Eb20uY2xhc3NMaXN0LmFkZChcImNvbm5lY3Qtc29ja2V0LWVycm9yXCIpXHJcbiAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoQ09ORklHLlNFUlZFUl9QSFAuVVJMKVxyXG4gICAgfSk7XHJcbiAgICBzb2NrZXQub24oJ2Nvbm5lY3RfZXJyb3InLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgQXBwbGljYXRpb25Eb20gJiYgQXBwbGljYXRpb25Eb20uY2xhc3NMaXN0LmFkZChcImNvbm5lY3Qtc29ja2V0LWVycm9yXCIpXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoQ09ORklHLlNFUlZFUl9QSFAuVVJMKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIC8vQ2FsbGVyXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxsZXIoIGNoYW5uZWxJbmZvciwgdXNlciwgY2xpZW50ICl7XHJcbiAgICB2YXIgaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkFwcGxpY2F0aW9uXCIpLmdldEF0dHJpYnV0ZSgnZGF0YS1wZWVyJyApXHJcbiAgICBjb25zb2xlLmxvZyggaWQsIGNoYW5uZWxJbmZvciApXHJcbiAgICBvcGVuU3RyZWFtKClcclxuICAgIC50aGVuKHN0cmVhbSA9PiB7XHJcbiAgICAgICAgZ2xvYmFsU3RyZWFtID0gc3RyZWFtXHJcbiAgICAgICAgcGxheVN0cmVhbSgnaWQtcGVlci1sb2NhbCcsIHN0cmVhbSk7XHJcbiAgICAgICAgLy8vIGZldGNoIHBlZXJqcyBvZiB1c2VyIGluIGNoYW5uZWxcclxuICAgICAgICByZXR1cm4gZ2V0UGVlclVzZXJDaGFubmVsKCBjaGFubmVsSW5mb3IsIHVzZXIsIGNsaWVudCApXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjYWxsZXJcIilcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VuZE1lc3NhZ2VUb0NoYW5uZWwobWVzc2FnZSwgc3R5bGUsIGF0dGFjaG1lbnQsIGNoYW5uZWxJZCwgYWNjZXNzLCBkZXRlY3QsIGluc3RhbmNlQ29tcG9uZW50KSB7XHJcblxyXG4gICAgc29ja2V0LmVtaXQoRVZFTlQuU0VORF9NRVNTQUdFLCB7IG1lc3NhZ2UsIHN0eWxlLCBhdHRhY2htZW50LCBjaGFubmVsSWQsIGFjY2VzcywgZGV0ZWN0OiBKU09OLnN0cmluZ2lmeShkZXRlY3QpIH0pXHJcbiAgICAvLy8gXHJcbiAgICBpbnN0YW5jZUNvbXBvbmVudC5wcm9wcy5kaXNwYXRjaChhZGRNZXNzYWdlKHsgdHlwZTogdHJ1ZSwgcmVhZDogdHJ1ZSwgY29udGVudDogbWVzc2FnZSwgc3R5bGUsIGF0dGFjaG1lbnQgfSkpXHJcbiAgICByZXR1cm4gZmFsc2VcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2VuZFR5cGluZ01lc3NhZ2VUb0NoYW5uZWwoY2hhbm5lbElkLCBjaGFubmVsTmFtZSwgYWNjZXNzICkge1xyXG4gICAgXHJcbiAgICBzb2NrZXQuZW1pdChFVkVOVC5TRU5EX1RZUElORywgeyBjaGFubmVsSWQsIGNoYW5uZWxOYW1lLCBhY2Nlc3MgfSlcclxuICAgIHJldHVybiBmYWxzZVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlQmxvYlRvU2VydmVyKGZpbGUpIHtcclxuICAgIHZhciBTSVpFX0xJTUlUID0gNSAqIDEwMjQgKiAxMDI0XHJcblxyXG4gICAgaWYoICFmaWxlLnNpemUgfHwgZmlsZS5zaXplID4gU0laRV9MSU1JVCApe1xyXG4gICAgICAgIGhhbmRsZUVycm9yVXBsb2FkRmlsZSgpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCBkYXRhRmlsZSA9IGZpbGVcclxuICAgIGxldCBmb3JtID0gbmV3IEZvcm1EYXRhKClcclxuICAgIGZvcm0uYXBwZW5kKCdmaWxlJywgZGF0YUZpbGUpXHJcbiAgICBmb3JtLmFwcGVuZCgndXNlcl9pZCcsIDEpXHJcblxyXG4gICAgJC5hamF4KHtcclxuICAgICAgICB1cmwgICAgICAgIDogQ09ORklHLlNFUlZFUl9QSFAuVVJMICsgJy9hcGkvdXBsb2FkJyxcclxuICAgICAgICB0eXBlICAgICAgIDogJ3Bvc3QnLFxyXG4gICAgICAgIGVuY3R5cGUgICAgOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXHJcbiAgICAgICAgZGF0YSAgICAgICA6IGZvcm0sXHJcbiAgICAgICAgY2FjaGUgICAgICA6IGZhbHNlLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oIHJlc3BvbnNlICl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZUVycm9yVXBsb2FkRmlsZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHJlV3JpdGVVcmwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWltYWdlLS1ibG9ja1wiKS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwianMtc2lnbi11cmxcIilcclxuICAgICAgICAgICAgaWYgKHJlV3JpdGVVcmwubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZVdyaXRlVXJsWzBdLnNldEF0dHJpYnV0ZShcImRhdGEtdXJsXCIsIHJlc3BvbnNlLmRhdGEudXJsKVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0eXBlRmlsZSA9IHJlc3BvbnNlLmRhdGEuZmlsZV9uYW1lLFxyXG4gICAgICAgICAgICAgICAgZXh0ZW50aW9uVHlwZSA9IG51bGxcclxuICAgICAgICAgICAgICAgIGlmKCB0eXBlRmlsZSApe1xyXG4gICAgICAgICAgICAgICAgICAgIGV4dGVudGlvblR5cGUgPSBnZXRUeXBlRmlsZSggdHlwZUZpbGUgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoICFleHRlbnRpb25UeXBlICl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVXcml0ZVVybFswXS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVXcml0ZVVybFswXS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXR5cGVcIiwgZXh0ZW50aW9uVHlwZSApXHJcbiAgICAgICAgICAgICAgICAgICAgcmVXcml0ZVVybFswXS5jbGFzc0xpc3QucmVtb3ZlKFwianMtc2lnbi11cmxcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIGhhbmRsZUVycm9yVXBsb2FkRmlsZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbGlzdGVuU2Nyb2xsTWVzc2FnZShlLCBtZXNzYWdlcywgY2hhbm5lbEFjdGl2ZSApIHsgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgaWYoIW1lc3NhZ2VzIHx8ICFtZXNzYWdlcy5sZW5ndGgpe1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgdmFyIGRvbVNjcm9sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtc2Nyb2xsLXRvLWJvdHRvbVwiKVxyXG4gICAgLy8gY29uc29sZS5sb2coZG9tU2Nyb2xsLnNjcm9sbEhlaWdodCwgZG9tU2Nyb2xsLmNsaWVudEhlaWdodCArIFwibGlzdGVuU2Nyb2xsTWVzc2FnZVwiKVxyXG4gICAgaWYgKCQoZSkuc2Nyb2xsVG9wKCkgKyBcclxuICAgICAgICAkKGUpLmlubmVySGVpZ2h0KCkgPj0gIFxyXG4gICAgICAgICQoZSlbMF0uc2Nyb2xsSGVpZ2h0KSB7IFxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlzLXdyaXRlLW1lc3NhZ2VcIikuY2xhc3NMaXN0LmFkZChcImZvbGxvdy1jb252ZXJzYXRpb25cIilcclxuICAgICAgICAgICAgLy8vIGNoZWNrIG1lc3NhZ2UgdW5yZWFkXHJcbiAgICAgICAgICAgIHZhciBleGlzdE5vbmVSZWFkID0gbWVzc2FnZXMuc29tZSggZnVuY3Rpb24oIG1lc3NhZ2UgKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICFtZXNzYWdlLnJlYWQgJiYgIW1lc3NhZ2UudHlwZVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgaWYoIGV4aXN0Tm9uZVJlYWQgKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEVWRU5ULlJFQURfTUVTU0FHRV9BTEwsIFwibGlzdGVuU2Nyb2xsTWVzc2FnZVwiKVxyXG4gICAgICAgICAgICAgICAgdmFyIHVzZXJMb2NhbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSlcclxuICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KEVWRU5ULlJFQURfTUVTU0FHRV9BTEwsIHsgdXNlciA6IHVzZXJMb2NhbC5pZCwgY2hhbm5lbElkOiBjaGFubmVsQWN0aXZlLmlkLCBjaGFubmVsTmFtZTogY2hhbm5lbEFjdGl2ZS5jaGFubmVsTmFtZSB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlzLXdyaXRlLW1lc3NhZ2VcIikuY2xhc3NMaXN0LnJlbW92ZShcImZvbGxvdy1jb252ZXJzYXRpb25cIilcclxuICAgIH0gXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RlblJlYWRNZXNzYWdlTmV3VXNlciggbWVzc2FnZXMsIGNoYW5uZWxBY3RpdmUgKSB7IFxyXG4gICAgICAgICAgICAgICBcclxuICAgIGlmKCFtZXNzYWdlcyB8fCAhbWVzc2FnZXMubGVuZ3RoKXtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIFxyXG4gICAgdmFyIGV4aXN0Tm9uZVJlYWQgPSBtZXNzYWdlcy5zb21lKCBmdW5jdGlvbiggbWVzc2FnZSApe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICByZXR1cm4gIW1lc3NhZ2UucmVhZCAmJiAhbWVzc2FnZS50eXBlXHJcbiAgICB9KVxyXG5cclxuICAgIGlmKCBleGlzdE5vbmVSZWFkICl7XHJcbiAgICAgICAgY29uc29sZS5sb2coRVZFTlQuUkVBRF9NRVNTQUdFX0FMTCwgXCJsaXN0ZW5SZWFkTWVzc2FnZU5ld1VzZXJcIilcclxuICAgICAgICB2YXIgdXNlckxvY2FsID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxyXG4gICAgICAgIHNvY2tldC5lbWl0KEVWRU5ULlJFQURfTUVTU0FHRV9BTEwsIHsgdXNlciA6IHVzZXJMb2NhbC5pZCwgY2hhbm5lbElkOiBjaGFubmVsQWN0aXZlLmlkLCBjaGFubmVsTmFtZTogY2hhbm5lbEFjdGl2ZS5jaGFubmVsTmFtZSB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRCb29raW5nVXBkYXRlKGJvb2tpbmdVcGRhdGUpIHtcclxuICAgIHNvY2tldC5lbWl0KEVWRU5ULlVTRVJfQ0hBTkdFX0JPT0tJTkcsIGJvb2tpbmdVcGRhdGUpXHJcbiAgICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0b3JCaWxsKGJvb2tpbmcsIGF1dGggKSB7XHJcbiAgICB2YXIgd29ya19kYXRlID0gYm9va2luZy53b3JrX2RhdGUsXHJcbiAgICAgICAgc3RhcnQgICAgID0gYm9va2luZy5zdGFydCxcclxuICAgICAgICBmaW5pc2ggICAgPSBib29raW5nLmZpbmlzaCxcclxuICAgICAgICBzYWxhcnkgICAgPSBib29raW5nLnNhbGFyeVxyXG5cclxuICAgIHZhciBkaWZmZXJlbmNlVGltZSA9IDAsXHJcbiAgICAgICAgcHJpY2UgICAgICAgICAgPSAwLFxyXG4gICAgICAgIG15U2VydkZlZSAgICAgID0gMCxcclxuICAgICAgICBzdHJpcGVTZXJ2RmVlICA9IDAsXHJcbiAgICAgICAgdmF0ICAgICAgICAgICAgPSAwLFxyXG4gICAgICAgIHRvdGFsICAgICAgICAgID0gMFxyXG4gICAgXHJcbiAgICBpZiggc2FsYXJ5ICYmIHdvcmtfZGF0ZSAmJiBzdGFydCAmJiBmaW5pc2ggKXtcclxuICAgICAgICB2YXIgWyBmSG91ciwgZk1pbnV0ZSBdID0gZmluaXNoLnNwbGl0KCc6JyksXHJcbiAgICAgICAgICAgIFsgc0hvdXIsIHNNaW51dGUgXSA9IHN0YXJ0LnNwbGl0KCc6JylcclxuICAgICAgICB2YXIgZGF0ZVRpbWVGaW5pc2ggICAgID0gKG5ldyBEYXRlKDEsMSwyMDIwLCBmSG91ciwgZk1pbnV0ZSwgMCkpLmdldFRpbWUoKSxcclxuICAgICAgICAgICAgZGF0ZVRpbWVTdGFydCAgICAgID0gKG5ldyBEYXRlKDEsMSwyMDIwLCBzSG91ciwgc01pbnV0ZSwgMCkpLmdldFRpbWUoKVxyXG5cclxuICAgICAgICAgICAgZGlmZmVyZW5jZVRpbWUgPSAoZGF0ZVRpbWVGaW5pc2ggLSBkYXRlVGltZVN0YXJ0KS8gMTAwMCAvIDYwIC8gNjBcclxuICAgICAgICAgICAgcHJpY2UgICAgICAgICAgPSBNYXRoLmZsb29yKGRpZmZlcmVuY2VUaW1lICogc2FsYXJ5KVxyXG4gICAgICAgICAgICBteVNlcnZGZWUgICAgICA9IE1hdGguZmxvb3IocHJpY2UgKiAwLjIpXHJcbiAgICAgICAgICAgIHZhdCAgICAgICAgICAgID0gTWF0aC5mbG9vcigocHJpY2UgKyBteVNlcnZGZWUpICogMC4xKVxyXG4gICAgICAgICAgICBzdHJpcGVTZXJ2RmVlICA9IE1hdGguZmxvb3IoKHByaWNlICsgbXlTZXJ2RmVlICsgdmF0KSAqIDAuMDM2KVxyXG4gICAgfVxyXG4gICAgaWYoIGF1dGgucm9sZV9pZCA9PSBjb25maWcuUk9MRV9VU0VSLnNpdHRlciApe1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRvdGFsID0gcHJpY2UgLSBzdHJpcGVTZXJ2RmVlXHJcbiAgICB9ZWxzZSBpZiggYXV0aC5yb2xlX2lkID09IGNvbmZpZy5ST0xFX1VTRVIuZW1wbG95ZXIgKXtcclxuICAgICAgICB0b3RhbCA9IHByaWNlICsgdmF0ICsgbXlTZXJ2RmVlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gWyB3b3JrX2RhdGUsIHN0YXJ0LCBmaW5pc2gsIHNhbGFyeSwgZGlmZmVyZW5jZVRpbWUsIHByaWNlLCB2YXQsIG15U2VydkZlZSwgc3RyaXBlU2VydkZlZSwgdG90YWwgXVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRvckZlZVN0cmlwZShhbW91bnQsIGN1cnJlbmN5KSB7XHJcbiAgICB2YXIgZmVlcyA9IHsgXHJcbiAgICAgICAgVVNEOiB7IFBlcmNlbnQ6IDIuOSwgRml4ZWQ6IDAuMzAgfSxcclxuICAgICAgICBHQlA6IHsgUGVyY2VudDogMi40LCBGaXhlZDogMC4yMCB9LFxyXG4gICAgICAgIEVVUjogeyBQZXJjZW50OiAyLjQsIEZpeGVkOiAwLjI0IH0sXHJcbiAgICAgICAgQ0FEOiB7IFBlcmNlbnQ6IDIuOSwgRml4ZWQ6IDAuMzAgfSxcclxuICAgICAgICBBVUQ6IHsgUGVyY2VudDogMi45LCBGaXhlZDogMC4zMCB9LFxyXG4gICAgICAgIE5PSzogeyBQZXJjZW50OiAyLjksIEZpeGVkOiAyIH0sXHJcbiAgICAgICAgREtLOiB7IFBlcmNlbnQ6IDIuOSwgRml4ZWQ6IDEuOCB9LFxyXG4gICAgICAgIFNFSzogeyBQZXJjZW50OiAyLjksIEZpeGVkOiAxLjggfSxcclxuICAgICAgICBKUFk6IHsgUGVyY2VudDogMy42LCBGaXhlZDogMCB9LFxyXG4gICAgICAgIE1YTjogeyBQZXJjZW50OiAzLjYsIEZpeGVkOiAzIH1cclxuICAgIH1cclxuICAgIHZhciBERUZBVUxUX1BFUkNFTlRfU1RSSVBFID0gMy42O1xyXG4gICAgdmFyIF9mZWUgPSBfZmVlID0geyBQZXJjZW50OiBERUZBVUxUX1BFUkNFTlRfU1RSSVBFLCBGaXhlZDogMCB9XHJcbiAgICBpZih0eXBlb2YgZmVlc1N0cmlwZSAhPSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgX2ZlZSA9IGZlZXNbY3VycmVuY3ldO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB2YXIgYW1vdW50ID0gcGFyc2VGbG9hdChhbW91bnQpO1xyXG4gICAgdmFyIHRvdGFsID0gKGFtb3VudCArIHBhcnNlRmxvYXQoX2ZlZS5GaXhlZCkpIC8gKDEgLSBwYXJzZUZsb2F0KF9mZWUuUGVyY2VudCkgLyAxMDApO1xyXG4gICAgdmFyIGZlZSA9IHRvdGFsIC0gYW1vdW50O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYW1vdW50OiBhbW91bnQsXHJcbiAgICAgICAgZmVlOiBmZWUudG9GaXhlZCgyKSxcclxuICAgICAgICB0b3RhbDogdG90YWwudG9GaXhlZCgyKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gaGFuZGxlRXJyb3JVcGxvYWRGaWxlKCl7XHJcbiAgICB2YXIgcmVXcml0ZVVybCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaW1hZ2UtLWJsb2NrXCIpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJqcy1zaWduLXVybFwiKVxyXG4gICAgaWYgKHJlV3JpdGVVcmwubGVuZ3RoKSB7XHJcbiAgICAgICAgcmVXcml0ZVVybFswXS5yZW1vdmUoKVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGdldFR5cGVGaWxlKCBmaWxlbmFtZSApe1xyXG4gICAgdmFyIGFjY2VwdCA9IC8oXFwuanBnfFxcLmpwZWd8XFwuYm1wfFxcLmdpZnxcXC5wbmd8XFwuaW1hZ2UpJC9pXHJcbiAgICBpZihhY2NlcHQuZXhlYyhmaWxlbmFtZSkpeyBcclxuICAgICAgICByZXR1cm4gXCJpbWdcIlxyXG4gICAgfVxyXG4gICAgdmFyIGFjY2VwdCA9IC8oXFwueGxzfFxcLnhsc3h8XFwuY3N2fFxcLnBkZnxcXC5kb2N8XFwuZG9jeCkkL2lcclxuICAgIGlmKGFjY2VwdC5leGVjKGZpbGVuYW1lKSl7IFxyXG5cclxuICAgICAgICByZXR1cm4gXCJmaWxlXCJcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsXHJcbn1cclxuZnVuY3Rpb24gdmFsaWRhdGVGZXRjaENoYW5uZWxNZXNzYWdlKGRhdGEpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdmFyIHsgYWNjZXNzIH0gPSBkYXRhXHJcbiAgICAgICAgaWYgKCAhYWNjZXNzICkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLpga7jgotcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZldGNoQ2hhbm5lbE1lc3NhZ2UoIGRhdGEgKSB7XHJcbiAgICBcclxuICAgIHZhciBpc1ZhbGlkID0gdmFsaWRhdGVGZXRjaENoYW5uZWxNZXNzYWdlKGRhdGEpXHJcbiAgICBpZiAoIWlzVmFsaWQpIHtcclxuICAgICAgICBhbGVydChcIuOCqOODqeODvOOBjOeZuueUn+OBl+OBvuOBl+OBn+OAguOBl+OBsOOCieOBj+OBl+OBpuOBi+OCieOCguOBhuS4gOW6puOBiuippuOBl+OBj+OBoOOBleOBhDFcIilcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGlmKCB0eXBlb2YgSURfVklFV19VU0VSX0NIQVQgIT0gJ3VuZGVmaW5lZCcgJiYgSURfVklFV19VU0VSX0NIQVQgKXtcclxuICAgICAgICBcclxuICAgICAgICBkYXRhLnVzZXJJZEFjdGl2ZUNoYW5uZWwgPSBJRF9WSUVXX1VTRVJfQ0hBVFxyXG4gICAgfVxyXG5cclxuICAgIHZhciBhY3Rpb24gPSBDT05GSUcuU0VSVkVSLkFTU0VUKCkgKyAnL2FwaS9jaGFubmVscydcclxuICAgIHJldHVybiBmZXRjaChhY3Rpb24sIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCByZXNwb25zZSAsIGFjdGlvbilcclxuICAgICAgICBpZiAocmVzcG9uc2UuY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIuOCqOODqeODvOOBjOeZuueUn+OBl+OBvuOBl+OBn+OAguOBl+OBsOOCieOBj+OBl+OBpuOBi+OCieOCguOBhuS4gOW6puOBiuippuOBl+OBj+OBoOOBleOBhDJcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBcIiBoYXZlIGVycm9yIFwiKVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfSlcclxufVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblxyXG4vLyBjb25zdCBwZWVyID0gbmV3IFBlZXIoeyBcclxuLy8gICAgIGhvc3Q6ICcxMjcuMC4wLjEnLFxyXG4vLyAgICAgcG9ydDogY29uZmlnLlNFUlZFUi5QRUVSX1BPUlQsXHJcbi8vICAgICBwYXRoOiAnL215YXBwJ1xyXG4vLyB9KVxyXG5cclxuLy8gcGVlci5vbignb3BlbicsIGlkID0+IHtcclxuLy8gICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XCIpXHJcbi8vICAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09PT09PT09XCIgKyBpZCArIFwiPT09PT09PT09PT09PT09PVwiKVxyXG4vLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJBcHBsaWNhdGlvblwiKS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGVlcicsIGlkIClcclxuLy8gICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XCIpXHJcbi8vIH0pXHJcblxyXG5cclxuXHJcbi8vIC8vIC8vQ2FsbGVlXHJcbi8vIHBlZXIub24oJ2NhbGwnLCBjYWxsID0+IHtcclxuLy8gICAgIG9wZW5TdHJlYW0oKVxyXG4vLyAgICAgLnRoZW4oc3RyZWFtID0+IHtcclxuLy8gICAgICAgICBjYWxsLmFuc3dlcihzdHJlYW0pO1xyXG4vLyAgICAgICAgIHBsYXlTdHJlYW0oJ2xvY2FsU3RyZWFtJywgc3RyZWFtKTtcclxuLy8gICAgICAgICBjYWxsLm9uKCdzdHJlYW0nLCByZW1vdGVTdHJlYW0gPT4gcGxheVN0cmVhbSgncmVtb3RlU3RyZWFtJywgcmVtb3RlU3RyZWFtKSk7XHJcbi8vICAgICB9KVxyXG4vLyAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJwZWVyLm9uKCdjYWxsJ1wiKVxyXG4vLyAgICAgfSlcclxuLy8gfSk7XHJcblxyXG4vLyAkKCcjdWxVc2VyJykub24oJ2NsaWNrJywgJ2xpJywgZnVuY3Rpb24oKSB7XHJcbi8vICAgICBjb25zdCBpZCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKGlkKTtcclxuLy8gICAgIG9wZW5TdHJlYW0oKVxyXG4vLyAgICAgLnRoZW4oc3RyZWFtID0+IHtcclxuLy8gICAgICAgICBwbGF5U3RyZWFtKCdsb2NhbFN0cmVhbScsIHN0cmVhbSk7XHJcbi8vICAgICAgICAgY29uc3QgY2FsbCA9IHBlZXIuY2FsbChpZCwgc3RyZWFtKTtcclxuLy8gICAgICAgICBjYWxsLm9uKCdzdHJlYW0nLCByZW1vdGVTdHJlYW0gPT4gcGxheVN0cmVhbSgncmVtb3RlU3RyZWFtJywgcmVtb3RlU3RyZWFtKSk7XHJcbi8vICAgICB9KTtcclxuLy8gfSk7XHJcblxyXG4vLyBmdW5jdGlvbiBvcGVuU3RyZWFtKCkge1xyXG4vLyAgICAgY29uc3QgY29uZmlnID0geyBhdWRpbzogZmFsc2UsIHZpZGVvOiB0cnVlIH07XHJcbi8vICAgICByZXR1cm4gbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoY29uZmlnKTtcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gcGxheVN0cmVhbShpZFZpZGVvVGFnLCBzdHJlYW0pIHtcclxuLy8gICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWRWaWRlb1RhZyk7XHJcbi8vICAgICB2aWRlby5zcmNPYmplY3QgPSBzdHJlYW07XHJcbi8vICAgICB2aWRlby5wbGF5KCk7XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGdldFBlZXJVc2VyQ2hhbm5lbCggY2hhbm5lbEluZm9yLCB1c2VyLCBjbGllbnQgKXtcclxuXHJcbi8vICAgICB2YXIgY2hhbm5lbElkID0gY2hhbm5lbEluZm9yLmlkLFxyXG4vLyAgICAgYWNjZXNzID0gdXNlci50b2tlbnMudG9rZW5BY2Nlc3NcclxuLy8gICAgIGlmKCBzb2NrZXQgKXtcclxuLy8gICAgICAgICBzb2NrZXQuZW1pdChFVkVOVC5TRU5EX1BFRVIsIHsgY2hhbm5lbElkLCBhY2Nlc3MsIC4uLmNsaWVudCB9KVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyBvcGVuU3RyZWFtKClcclxuLy8gLnRoZW4oc3RyZWFtID0+IHBsYXlTdHJlYW0oJ2xvY2FsU3RyZWFtJywgc3RyZWFtKSk7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNvY2tldExpc3Rlbm5lciggc29ja2V0LCBpbnN0YW5jZUFwcCApe1xyXG5cclxuICAgIHNvY2tldC5vbihFVkVOVC5VU0VSX09OTElORV9OT1RJLCBkYXRhID0+IHtcclxuICAgICAgICAvLy8gXHJcbiAgICAgICAgaW5zdGFuY2VBcHAucHJvcHMuZGlzcGF0Y2goYWRkVXNlck9ubGluZSggZGF0YS51c2VyICkpXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBzb2NrZXQub24oRVZFTlQuVVNFUl9PRkZMSU5FX05PVEksIGRhdGEgPT4ge1xyXG4gICAgICAgIC8vLyBcclxuICAgICAgICBpbnN0YW5jZUFwcC5wcm9wcy5kaXNwYXRjaChyZW1vdmVVc2VyT25saW5lKCBkYXRhLnVzZXIgKSlcclxuICAgIH0pXHJcblxyXG4gICAgc29ja2V0Lm9uKEVWRU5ULlJFU1BPTlNFX01FU1NBR0UsIGRhdGEgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKEVWRU5ULlJFU1BPTlNFX01FU1NBR0UsIGRhdGEpXHJcbiAgICAgICAgdmFyIHsgdXNlciwgdG9rZW4sIG1lc3NhZ2UsIHN0eWxlLCBhdHRhY2htZW50LCBjaGFubmVsLCBkZXRlY3QgfSA9IGRhdGEgXHJcbiAgICAgICAgdmFyIHVzZXJMb2NhbCAgID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKSxcclxuICAgICAgICAgICAgZGV0ZWN0TG9jYWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGV0ZWN0JylcclxuXHJcbiAgICAgICAgaWYoIFxyXG4gICAgICAgICAgICB1c2VyTG9jYWwgJiYgXHJcbiAgICAgICAgICAgIHVzZXJMb2NhbC5pZCA9PSB1c2VyICYmIFxyXG4gICAgICAgICAgICB1c2VyTG9jYWwudG9rZW5zLnRva2VuQWNjZXNzID09IHRva2VuICYmXHJcbiAgICAgICAgICAgIGRldGVjdCA9PSBkZXRlY3RMb2NhbFxyXG4gICAgICAgICAgICApe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5zdGFuY2VBcHAucHJvcHMuZGlzcGF0Y2goIGFkZE1lc3NhZ2VTZW5kVG9NZSh7IHR5cGU6ICh1c2VyTG9jYWwuaWQgPT0gdXNlciksIGNvbnRlbnQ6IG1lc3NhZ2UsIHN0eWxlLCBhdHRhY2htZW50LCBjaGFubmVsIH0pIClcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgICBzb2NrZXQub24oRVZFTlQuUkVTUE9OU0VfVFlQSU5HLCBkYXRhID0+IHtcclxuXHJcbiAgICAgICAgdmFyIHsgdG9rZW4sIGNoYW5uZWwgfSA9IGRhdGFcclxuICAgICAgICB2YXIgdXNlckxvY2FsICAgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpXHJcblxyXG4gICAgICAgIGlmKCB1c2VyTG9jYWwudG9rZW5zLnRva2VuQWNjZXNzID09IHRva2VuICl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYodGltZW91dFR5cGluZyl7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dFR5cGluZylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZG9tVHlwaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy10eXBpbmdcIilcclxuICAgICAgICAgICAgaWYoZG9tVHlwaW5nLmdldEF0dHJpYnV0ZShcImNoYW5uZWxcIikgPT0gY2hhbm5lbClcclxuICAgICAgICAgICAgZG9tVHlwaW5nLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpXHJcbiAgICAgICAgICAgIC8vLyBzY3JvbGwgYm90dG9tIFxyXG4gICAgICAgICAgICAvLyB2YXIgaW5wdXRNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pcy13cml0ZS1tZXNzYWdlXCIpXHJcbiAgICAgICAgICAgIC8vIGlmKGlucHV0TWVzc2FnZS5jbGFzc0xpc3QuY29udGFpbnMoXCJmb2xsb3ctY29udmVyc2F0aW9uXCIpKXtcclxuICAgICAgICAgICAgLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1zY3JvbGwtdG8tYm90dG9tJykuc2Nyb2xsVG9wICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1zY3JvbGwtdG8tYm90dG9tJykuc2Nyb2xsSGVpZ2h0XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgdmFyIHRpbWVvdXRUeXBpbmcgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRvbVR5cGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtdHlwaW5nXCIpXHJcbiAgICAgICAgICAgICAgICBpZihkb21UeXBpbmcuZ2V0QXR0cmlidXRlKFwiY2hhbm5lbFwiKSA9PSBjaGFubmVsKVxyXG4gICAgICAgICAgICAgICAgZG9tVHlwaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpXHJcbiAgICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBzb2NrZXQub24oRVZFTlQuRFVQTElDQVRJT05fVEFCLCBkYXRhID0+IHtcclxuXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBDT05GSUcuU0VSVkVSX1BIUC5VUkxcclxuICAgIH0pXHJcblxyXG4gICAgc29ja2V0Lm9uKEVWRU5ULlJFQURfTUVTU0FHRV9BTExfUkVTUE9OU0UsIGRhdGEgPT4ge1xyXG5cclxuICAgICAgICBpbnN0YW5jZUFwcC5wcm9wcy5kaXNwYXRjaCggcmVhZEFsbE1lc3NhZ2VDaGFubmVsQWN0aXZlKCkgKVxyXG4gICAgfSlcclxuXHJcbiAgICBzb2NrZXQub24oRVZFTlQuUkVTUE9OU0VfVVNFUl9HRVRfQk9PS0lORywgZGF0YSA9PiB7XHJcblxyXG4gICAgICAgIHZhciBib29raW5ncyA9IGRhdGEuYm9va2luZ3NcclxuICAgICAgICBjb25zb2xlLmxvZyhib29raW5ncywgRVZFTlQuUkVTUE9OU0VfVVNFUl9HRVRfQk9PS0lORylcclxuICAgICAgICBpbnN0YW5jZUFwcC5wcm9wcy5kaXNwYXRjaChzZXR0ZXJCb29raW5ncyh7IGZldGNoOiB0cnVlLCBkYXRhOiBib29raW5ncyB9KSlcclxuICAgIH0pXHJcblxyXG4gICAgc29ja2V0Lm9uKEVWRU5ULlJFU1BPTlNFX1VTRVJfQ0hBTkdFX0JPT0tJTkcsIGRhdGEgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCBkYXRhLCBFVkVOVC5SRVNQT05TRV9VU0VSX0NIQU5HRV9CT09LSU5HKVxyXG5cclxuICAgICAgICB2YXIgeyB1c2VyLCB0b2tlbiwgbWVzc2FnZSwgc3R5bGUsIGF0dGFjaG1lbnQsIGNoYW5uZWwgfSA9IGRhdGEgXHJcbiAgICAgICAgdmFyIHVzZXJMb2NhbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSlcclxuICAgICAgICB2YXIgbWVzc2FnZURhdGEgPSB7IHR5cGU6ICh1c2VyTG9jYWwuaWQgPT0gdXNlciksIGNvbnRlbnQ6IG1lc3NhZ2UsIHN0eWxlLCBhdHRhY2htZW50LCBjaGFubmVsIH1cclxuICAgICAgICBpbnN0YW5jZUFwcC5wcm9wcy5kaXNwYXRjaCggYWRkTWVzc2FnZVNlbmRUb01lKG1lc3NhZ2VEYXRhKSApXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGJvb2tpbmdVcGRhdGUgPSB7IC4uLmRhdGEuYm9va2luZywgdXBkYXRlOiB0cnVlIH1cclxuICAgICAgICBpbnN0YW5jZUFwcC5wcm9wcy5kaXNwYXRjaChjaGFuZ2VCb29raW5nKGJvb2tpbmdVcGRhdGUpKVxyXG4gICAgICAgICQubW9kYWwuY2xvc2UoKTtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH0pXHJcblxyXG4gICAgc29ja2V0Lm9uKEVWRU5ULlJFU1BPTlNFX1VTRVJfQ0hBTkdFX0JPT0tJTkdfRVJST1IsIGRhdGEgPT4ge1xyXG5cclxuICAgICAgICAkKFwiI2pzLWJvb2tpbmctZXJyb3JcIikuZmluZChcIi5hbGVydC1kYW5nZXJcIikudGV4dChkYXRhLm1lc3NhZ2UpXHJcbiAgICAgICAgJChcIiNqcy1ib29raW5nLWVycm9yXCIpLm1vZGFsKHtcclxuICAgICAgICAgICAgZXNjYXBlQ2xvc2U6IGZhbHNlLFxyXG4gICAgICAgICAgICBjbGlja0Nsb3NlOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd0Nsb3NlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9KVxyXG59IiwidmFyIHVzZXIgPSBudWxsXHJcbmlmICh0eXBlb2YoU3RvcmFnZSkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxyXG59XHJcblxyXG5pbXBvcnQgVFlQRSBmcm9tIFwiLi4vYWN0aW9uL3R5cGUuanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gdXNlciwgYWN0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBUWVBFLlVTRVIuU0VUVEVSX1VTRVI6XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsInZhciBib29raW5ncyA9IHtcclxuICAgIGZldGNoOiBmYWxzZSxcclxuICAgIGRhdGE6IFtdXHJcbn1cclxuXHJcbmltcG9ydCBUWVBFIGZyb20gXCIuLi9hY3Rpb24vdHlwZS5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBib29raW5ncywgYWN0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBUWVBFLkJPT0tJTkcuU0VUVEVSX0JPT0tJTkc6XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZFxyXG5cclxuICAgICAgICBjYXNlIFRZUEUuQk9PS0lORy5DSEFOR0VfQk9PS0lORzpcclxuXHJcbiAgICAgICAgICAgIGlmKCFzdGF0ZS5kYXRhLnNvbWUoYm9va2luZyA9PiBib29raW5nLmlkID09PSBhY3Rpb24ucGF5bG9hZC5ib29raW5nX2lkKSl7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBkYXRhQm9va2luZyA9IHN0YXRlLmRhdGEubWFwKCBib29raW5nID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGJvb2tpbmcuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmJvb2tpbmdfaWQpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uYm9va2luZywgLi4uYWN0aW9uLnBheWxvYWQgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJvb2tpbmdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uIHN0YXRlLCBkYXRhOiBkYXRhQm9va2luZyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsImZ1bmN0aW9uIGRldGVjdENsaWVudCgpIHtcclxuICB7XHJcbiAgICB2YXIgdW5rbm93biA9ICd1bmtub3duJztcclxuICAgIC8vIGJyb3dzZXJcclxuICAgIHZhciBuVmVyID0gbmF2aWdhdG9yLmFwcFZlcnNpb247XHJcbiAgICB2YXIgbkFndCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgICB2YXIgYnJvd3NlciA9IG5hdmlnYXRvci5hcHBOYW1lO1xyXG4gICAgdmFyIHZlcnNpb24gPSAnJyArIHBhcnNlRmxvYXQobmF2aWdhdG9yLmFwcFZlcnNpb24pO1xyXG4gICAgdmFyIG1ham9yVmVyc2lvbiA9IHBhcnNlSW50KG5hdmlnYXRvci5hcHBWZXJzaW9uLCAxMCk7XHJcbiAgICB2YXIgbmFtZU9mZnNldCwgdmVyT2Zmc2V0LCBpeDtcclxuICAgIC8vIE9wZXJhXHJcbiAgICBpZiAoKHZlck9mZnNldCA9IG5BZ3QuaW5kZXhPZignT3BlcmEnKSkgIT0gLTEpIHtcclxuICAgICAgYnJvd3NlciArPSAnT3BlcmEnO1xyXG4gICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgNik7XHJcbiAgICAgIGlmICgodmVyT2Zmc2V0ID0gbkFndC5pbmRleE9mKCdWZXJzaW9uJykpICE9IC0xKSB7XHJcbiAgICAgICAgdmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCArIDgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBPcGVyYSBOZXh0XHJcbiAgICBpZiAoKHZlck9mZnNldCA9IG5BZ3QuaW5kZXhPZignT1BSJykpICE9IC0xKSB7XHJcbiAgICAgIGJyb3dzZXIgKz0gJ09wZXJhJztcclxuICAgICAgdmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCArIDQpO1xyXG4gICAgfVxyXG4gICAgLy8gRWRnZVxyXG4gICAgZWxzZSBpZiAoKHZlck9mZnNldCA9IG5BZ3QuaW5kZXhPZignRWRnJykpICE9IC0xKSB7XHJcbiAgICAgIGJyb3dzZXIgKz0gJ01pY3Jvc29mdCBFZGdlJztcclxuICAgICAgdmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCArIDUpO1xyXG4gICAgfVxyXG4gICAgLy8gTVNJRVxyXG4gICAgZWxzZSBpZiAoKHZlck9mZnNldCA9IG5BZ3QuaW5kZXhPZignTVNJRScpKSAhPSAtMSkge1xyXG4gICAgICBicm93c2VyICs9ICdNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXInO1xyXG4gICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgNSk7XHJcbiAgICB9XHJcbiAgICAvLyBDb2NDb2NcclxuICAgIGVsc2UgaWYgKCh2ZXJPZmZzZXQgPSBuQWd0LmluZGV4T2YoJ2NvYycpKSAhPSAtMSkge1xyXG4gICAgICBicm93c2VyICs9ICdDb2NDb2MnO1xyXG4gICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgOCk7XHJcbiAgICB9XHJcbiAgICAvLyBDaHJvbWVcclxuICAgIGVsc2UgaWYgKCh2ZXJPZmZzZXQgPSBuQWd0LmluZGV4T2YoJ0Nocm9tZScpKSAhPSAtMSkge1xyXG4gICAgICBicm93c2VyICs9ICdDaHJvbWUnO1xyXG4gICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgNyk7XHJcbiAgICB9XHJcbiAgICAvLyBTYWZhcmlcclxuICAgIGVsc2UgaWYgKCh2ZXJPZmZzZXQgPSBuQWd0LmluZGV4T2YoJ1NhZmFyaScpKSAhPSAtMSkge1xyXG4gICAgICBicm93c2VyICs9ICdTYWZhcmknO1xyXG4gICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgNyk7XHJcbiAgICAgIGlmICgodmVyT2Zmc2V0ID0gbkFndC5pbmRleE9mKCdWZXJzaW9uJykpICE9IC0xKSB7XHJcbiAgICAgICAgdmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCArIDgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBGaXJlZm94XHJcbiAgICBlbHNlIGlmICgodmVyT2Zmc2V0ID0gbkFndC5pbmRleE9mKCdGaXJlZm94JykpICE9IC0xKSB7XHJcbiAgICAgIGJyb3dzZXIgKz0gJ0ZpcmVmb3gnO1xyXG4gICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgOCk7XHJcbiAgICB9XHJcbiAgICAvLyBNU0lFIDExK1xyXG4gICAgZWxzZSBpZiAobkFndC5pbmRleE9mKCdUcmlkZW50LycpICE9IC0xKSB7XHJcbiAgICAgIGJyb3dzZXIgKz0gJ01pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3Jlcic7XHJcbiAgICAgIHZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyhuQWd0LmluZGV4T2YoJ3J2OicpICsgMyk7XHJcbiAgICB9XHJcbiAgICAvLyBPdGhlciBicm93c2Vyc1xyXG4gICAgZWxzZSBpZiAoKG5hbWVPZmZzZXQgPSBuQWd0Lmxhc3RJbmRleE9mKCcgJykgKyAxKSA8ICh2ZXJPZmZzZXQgPSBuQWd0Lmxhc3RJbmRleE9mKCcvJykpKSB7XHJcbiAgICAgIGJyb3dzZXIgPSBuQWd0LnN1YnN0cmluZyhuYW1lT2Zmc2V0LCB2ZXJPZmZzZXQpO1xyXG4gICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgMSk7XHJcbiAgICAgIGlmIChicm93c2VyLnRvTG93ZXJDYXNlKCkgPT0gYnJvd3Nlci50b1VwcGVyQ2FzZSgpKSB7XHJcbiAgICAgICAgYnJvd3NlciA9IG5hdmlnYXRvci5hcHBOYW1lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyB0cmltIHRoZSB2ZXJzaW9uIHN0cmluZ1xyXG4gICAgaWYgKChpeCA9IHZlcnNpb24uaW5kZXhPZignOycpKSAhPSAtMSkgdmVyc2lvbiA9IHZlcnNpb24uc3Vic3RyaW5nKDAsIGl4KTtcclxuICAgIGlmICgoaXggPSB2ZXJzaW9uLmluZGV4T2YoJyAnKSkgIT0gLTEpIHZlcnNpb24gPSB2ZXJzaW9uLnN1YnN0cmluZygwLCBpeCk7XHJcbiAgICBpZiAoKGl4ID0gdmVyc2lvbi5pbmRleE9mKCcpJykpICE9IC0xKSB2ZXJzaW9uID0gdmVyc2lvbi5zdWJzdHJpbmcoMCwgaXgpO1xyXG4gICAgbWFqb3JWZXJzaW9uID0gcGFyc2VJbnQoJycgKyB2ZXJzaW9uLCAxMCk7XHJcbiAgICBpZiAoaXNOYU4obWFqb3JWZXJzaW9uKSkge1xyXG4gICAgICB2ZXJzaW9uID0gJycgKyBwYXJzZUZsb2F0KG5hdmlnYXRvci5hcHBWZXJzaW9uKTtcclxuICAgICAgbWFqb3JWZXJzaW9uID0gcGFyc2VJbnQobmF2aWdhdG9yLmFwcFZlcnNpb24sIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzeXN0ZW1cclxuICAgIHZhciBvcyA9IHVua25vd247XHJcbiAgICB2YXIgY2xpZW50U3RyaW5ncyA9IFt7XHJcbiAgICAgIHM6ICdXaW5kb3dzIDEwJyxcclxuICAgICAgcjogLyhXaW5kb3dzIDEwLjB8V2luZG93cyBOVCAxMC4wKS9cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHM6ICdXaW5kb3dzIDguMScsXHJcbiAgICAgIHI6IC8oV2luZG93cyA4LjF8V2luZG93cyBOVCA2LjMpL1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgczogJ1dpbmRvd3MgOCcsXHJcbiAgICAgIHI6IC8oV2luZG93cyA4fFdpbmRvd3MgTlQgNi4yKS9cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHM6ICdXaW5kb3dzIDcnLFxyXG4gICAgICByOiAvKFdpbmRvd3MgN3xXaW5kb3dzIE5UIDYuMSkvXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzOiAnV2luZG93cyBWaXN0YScsXHJcbiAgICAgIHI6IC9XaW5kb3dzIE5UIDYuMC9cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHM6ICdXaW5kb3dzIFNlcnZlciAyMDAzJyxcclxuICAgICAgcjogL1dpbmRvd3MgTlQgNS4yL1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgczogJ1dpbmRvd3MgWFAnLFxyXG4gICAgICByOiAvKFdpbmRvd3MgTlQgNS4xfFdpbmRvd3MgWFApL1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgczogJ1dpbmRvd3MgMjAwMCcsXHJcbiAgICAgIHI6IC8oV2luZG93cyBOVCA1LjB8V2luZG93cyAyMDAwKS9cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHM6ICdXaW5kb3dzIE1FJyxcclxuICAgICAgcjogLyhXaW4gOXggNC45MHxXaW5kb3dzIE1FKS9cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHM6ICdXaW5kb3dzIDk4JyxcclxuICAgICAgcjogLyhXaW5kb3dzIDk4fFdpbjk4KS9cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHM6ICdXaW5kb3dzIDk1JyxcclxuICAgICAgcjogLyhXaW5kb3dzIDk1fFdpbjk1fFdpbmRvd3NfOTUpL1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgczogJ1dpbmRvd3MgTlQgNC4wJyxcclxuICAgICAgcjogLyhXaW5kb3dzIE5UIDQuMHxXaW5OVDQuMHxXaW5OVHxXaW5kb3dzIE5UKS9cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHM6ICdXaW5kb3dzIENFJyxcclxuICAgICAgcjogL1dpbmRvd3MgQ0UvXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzOiAnV2luZG93cyAzLjExJyxcclxuICAgICAgcjogL1dpbjE2L1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgczogJ0FuZHJvaWQnLFxyXG4gICAgICByOiAvQW5kcm9pZC9cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHM6ICdPcGVuIEJTRCcsXHJcbiAgICAgIHI6IC9PcGVuQlNEL1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgczogJ1N1biBPUycsXHJcbiAgICAgIHI6IC9TdW5PUy9cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHM6ICdMaW51eCcsXHJcbiAgICAgIHI6IC8oTGludXh8WDExKS9cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHM6ICdpT1MnLFxyXG4gICAgICByOiAvKGlQaG9uZXxpUGFkfGlQb2QpL1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgczogJ01hYyBPUyBYJyxcclxuICAgICAgcjogL01hYyBPUyBYL1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgczogJ01hYyBPUycsXHJcbiAgICAgIHI6IC8oTWFjUFBDfE1hY0ludGVsfE1hY19Qb3dlclBDfE1hY2ludG9zaCkvXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzOiAnUU5YJyxcclxuICAgICAgcjogL1FOWC9cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHM6ICdVTklYJyxcclxuICAgICAgcjogL1VOSVgvXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzOiAnQmVPUycsXHJcbiAgICAgIHI6IC9CZU9TL1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgczogJ09TLzInLFxyXG4gICAgICByOiAvT1NcXC8yL1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgczogJ1NlYXJjaCBCb3QnLFxyXG4gICAgICByOiAvKG51aGt8R29vZ2xlYm90fFlhbW15Ym90fE9wZW5ib3R8U2x1cnB8TVNOQm90fEFzayBKZWV2ZXNcXC9UZW9tYXxpYV9hcmNoaXZlcikvXHJcbiAgICB9XHJcbiAgICBdO1xyXG4gICAgZm9yICh2YXIgaWQgaW4gY2xpZW50U3RyaW5ncykge1xyXG4gICAgICB2YXIgY3MgPSBjbGllbnRTdHJpbmdzW2lkXTtcclxuICAgICAgaWYgKGNzLnIudGVzdChuQWd0KSkge1xyXG4gICAgICAgIG9zID0gY3MucztcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIG9zVmVyc2lvbiA9IHVua25vd247XHJcbiAgICBpZiAoL1dpbmRvd3MvLnRlc3Qob3MpKSB7XHJcbiAgICAgIG9zVmVyc2lvbiA9IC9XaW5kb3dzICguKikvLmV4ZWMob3MpWzFdO1xyXG4gICAgICBvcyA9ICdXaW5kb3dzJztcclxuICAgIH1cclxuICAgIHN3aXRjaCAob3MpIHtcclxuICAgICAgY2FzZSAnTWFjIE9TIFgnOlxyXG4gICAgICAgIG9zVmVyc2lvbiA9IC9NYWMgT1MgWCAoMTBbXFwuXFxfXFxkXSspLy5leGVjKG5BZ3QpWzFdO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnQW5kcm9pZCc6XHJcbiAgICAgICAgb3NWZXJzaW9uID0gL0FuZHJvaWQgKFtcXC5cXF9cXGRdKykvLmV4ZWMobkFndClbMV07XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlICdpT1MnOlxyXG4gICAgICAgIG9zVmVyc2lvbiA9IC9PUyAoXFxkKylfKFxcZCspXz8oXFxkKyk/Ly5leGVjKG5WZXIpO1xyXG4gICAgICAgIG9zVmVyc2lvbiA9IG9zVmVyc2lvblsxXSArICcuJyArIG9zVmVyc2lvblsyXSArICcuJyArIChvc1ZlcnNpb25bM10gfCAwKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBicm93c2VyOiBicm93c2VyLnRvU3RyaW5nKCksXHJcbiAgICBicm93c2VyTWFqb3JWZXJzaW9uOiBtYWpvclZlcnNpb24udG9TdHJpbmcoKSxcclxuICAgIGJyb3dzZXJWZXJzaW9uOiB2ZXJzaW9uLnRvU3RyaW5nKCksXHJcbiAgICBvczogb3MudG9TdHJpbmcoKSxcclxuICAgIG9zVmVyc2lvbjogb3NWZXJzaW9uLnRvU3RyaW5nKClcclxuICB9XHJcbn1cclxuaWYgKHR5cGVvZihTdG9yYWdlKSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGV0ZWN0JywgSlNPTi5zdHJpbmdpZnkoZGV0ZWN0Q2xpZW50KCkpKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXRlY3RDbGllbnRSZWR1Y2VyKHN0YXRlID0gZGV0ZWN0Q2xpZW50KCkpIHtcclxuICByZXR1cm4gc3RhdGU7XHJcbn0iLCJpbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSAncmVkdXgnO1xyXG5cclxuLy8vdGjDqm0gY8OhYyByZWR1Y2VyIGZ1bnRpb24gY+G6p24gxJHGsOG7o2MgY29tYmluZSB2w6BvIMSRw6J5XHJcbmltcG9ydCBEZXRlY3RDbGllbnRSZWR1Y2VyIGZyb20gXCIuL2RldGVjdC5qc1wiO1xyXG5pbXBvcnQgdXNlckNoYXQgZnJvbSAnLi91c2VyLWNoYXQuanMnO1xyXG5pbXBvcnQgU29ja2V0UmVkdWNlciBmcm9tIFwiLi9zb2NrZXQuanNcIlxyXG5pbXBvcnQgQXV0aCBmcm9tIFwiLi9hdXRoLmpzXCJcclxuaW1wb3J0IEJvb2tpbmcgZnJvbSBcIi4vYm9va2luZy5qc1wiXHJcbi8vLy8ga2jhu59pIHThuqFvIDEgYmnhur9uIGJp4buDdSBkaeG7hW4gUkVEVUNFUiBBTEwgXHJcbmNvbnN0IFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgY2xpZW50ICA6IERldGVjdENsaWVudFJlZHVjZXIsXHJcbiAgICB1c2VyQ2hhdDogdXNlckNoYXQsXHJcbiAgICBzb2NrZXQgIDogU29ja2V0UmVkdWNlcixcclxuICAgIHVzZXJzICAgOiBBdXRoLFxyXG4gICAgYm9va2luZyA6IEJvb2tpbmcsXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBSZWR1Y2VyOyIsImltcG9ydCBUWVBFIGZyb20gJy4uL2FjdGlvbi90eXBlLmpzJztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU29ja2V0UmVkdWNlcihzdGF0ZSA9IG51bGwgLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFRZUEUuU09DQ0tFVC5TRVRfU09DS0VUX0lPOlxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWRcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iLCJcclxuLy8gaWYodHlwZW9mIHVzZXJEZWZhdWx0ID09IHVuZGVmaW5lZCl7XHJcbi8vICAgdmFyIHVzZXJEZWZhdWx0ID0gJ1tdJ1xyXG4vLyB9XHJcbnZhciB1c2VyQ2hhdERlZmF1bHQgPSBbXTtcclxuaW1wb3J0IFRZUEUgZnJvbSBcIi4uL2FjdGlvbi90eXBlLmpzXCI7XHJcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uL2NvbmZpZ1wiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IHVzZXJDaGF0RGVmYXVsdCwgYWN0aW9uKSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBUWVBFLkNIQU5ORUwuQUREX1VTRVJfT05MSU5FOlxyXG4gICAgICByZXR1cm4gc3RhdGUubWFwKCBpdGVtID0+IHtcclxuICAgICAgICBpZihpdGVtLnVzZXIuaWQgPT0gYWN0aW9uLnBheWxvYWQpIHtcclxuICAgICAgICAgIHJldHVybiB7IC4uLml0ZW0sIHVzZXIgOiB7IC4uLiBpdGVtLnVzZXIsIG9ubGluZSA6IHRydWUgfSB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IC4uLml0ZW0gfVxyXG4gICAgICB9KVxyXG4gICAgY2FzZSBUWVBFLkNIQU5ORUwuUkVNT1ZFX1VTRVJfT05MSU5FOlxyXG4gICAgICAgIHJldHVybiBzdGF0ZS5tYXAoIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgaWYoaXRlbS51c2VyLmlkID09IGFjdGlvbi5wYXlsb2FkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLml0ZW0sIHVzZXIgOiB7IC4uLiBpdGVtLnVzZXIsIG9ubGluZSA6IGZhbHNlIH0gfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHsgLi4uaXRlbSB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICBjYXNlIFRZUEUuQ0hBVC5DSEFOR0VfVVNFUl9DSEFUX0RFRkFVTFQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZS5tYXAoIGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmKGl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkKSB7XHJcbiAgICAgICAgICByZXR1cm4geyAuLi5pdGVtLCBpc0FjdGl2ZSA6IHRydWUgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyAuLi5pdGVtLCBpc0FjdGl2ZSA6IGZhbHNlIH1cclxuICAgICAgfSlcclxuICAgIGNhc2UgVFlQRS5DSEFOTkVMLlNFVFRFUl9DSEFOTkVMOlxyXG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWRcclxuICAgIGNhc2UgVFlQRS5DSEFOTkVMLkFERF9NRVNTQUdFOlxyXG4gICAgICByZXR1cm4gc3RhdGUubWFwKCBjaGFubmVsID0+IHtcclxuICAgICAgICBpZihjaGFubmVsLmlzQWN0aXZlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICByZXR1cm4geyAuLi5jaGFubmVsLCBtZXNzYWdlIDogWyAuLi5jaGFubmVsLm1lc3NhZ2UsIGFjdGlvbi5wYXlsb2FkXSB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjaGFubmVsXHJcbiAgICAgIH0pXHJcbiAgICBjYXNlIFRZUEUuQ0hBTk5FTC5SRUFEX0FMTF9NRVNTQUdFX0NIQU5ORUxfQUNUSVZFOlxyXG4gICAgICByZXR1cm4gc3RhdGUubWFwKCBjaGFubmVsID0+IHtcclxuICAgICAgICBpZihjaGFubmVsLmlzQWN0aXZlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICB2YXIgbWVzc2FnZXMgPSBjaGFubmVsLm1lc3NhZ2VcclxuICAgICAgICAgIG1lc3NhZ2VzID0gbWVzc2FnZXMubWFwKCBtZXNzYWdlID0+IHsgcmV0dXJuIHsgLi4ubWVzc2FnZSwgcmVhZDogdHJ1ZSB9IH0pXHJcbiAgICAgICAgICByZXR1cm4geyAuLi5jaGFubmVsLCBtZXNzYWdlIDogbWVzc2FnZXMgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2hhbm5lbFxyXG4gICAgICB9KVxyXG4gICAgY2FzZSBUWVBFLkNIQU5ORUwuQUREX01FU1NBR0VfU0VORF9UT19NRTpcclxuICAgICAgcmV0dXJuIHN0YXRlLm1hcCggY2hhbm5lbCA9PiB7XHJcbiAgICAgICAgaWYoY2hhbm5lbC5pZCA9PT0gYWN0aW9uLnBheWxvYWQuY2hhbm5lbCkge1xyXG4gICAgICAgICAgcmV0dXJuIHsgLi4uY2hhbm5lbCwgbWVzc2FnZSA6IFsgLi4uY2hhbm5lbC5tZXNzYWdlLCBhY3Rpb24ucGF5bG9hZF0gfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2hhbm5lbFxyXG4gICAgICB9KVxyXG5cclxuICAgIGNhc2UgVFlQRS5DSEFOTkVMLlNFVF9BQ1RJVkU6XHJcbiAgICAgIHZhciBpc0NoYW5nZWQgPSBmYWxzZVxyXG4gICAgICBjb25zb2xlLmxvZyhcImRlYnVnXCIpXHJcbiAgICAgIHZhciBuZXdTdGF0ZSA9IHN0YXRlLm1hcCggY2hhbm5lbCA9PiB7XHJcbiAgICAgICAgaWYoICFpc0NoYW5nZWQgJiYgY2hhbm5lbC5jaGFubmVsTmFtZSAmJiBjaGFubmVsLmNoYW5uZWxOYW1lLmluY2x1ZGVzKGFjdGlvbi5wYXlsb2FkLmNoYW5uZWxOYW1lKSl7XHJcbiAgICAgICAgICBpc0NoYW5nZWQgPSB0cnVlXHJcbiAgICAgICAgICByZXR1cm4geyAuLi5jaGFubmVsLCBpc0FjdGl2ZSA6IHRydWUgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyAuLi5jaGFubmVsLCBpc0FjdGl2ZSA6IGZhbHNlIH1cclxuICAgICAgfSlcclxuICAgICAgaWYoIGlzQ2hhbmdlZCApe1xyXG4gICAgICAgIHJldHVybiBuZXdTdGF0ZVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufSIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMiEuL2NoYXQuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0yIS4vZW1vamkuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0yIS4vaGVhZC1pbmZvLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMiEuL2lucHV0LXNlbmQtY2hhdC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTIhLi9saXN0LW1lc3NhZ2Uuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0yIS4vbGlzdC11c2VyLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMiEuL21lc3NhZ2UtY2hhdC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTIhLi9zaWRlYmFyLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMiEuL2luZGV4LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=