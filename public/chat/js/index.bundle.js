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
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-head-info .user-active-chat {\n  position: relative;\n  padding: 10px 20px;\n  box-sizing: border-box;\n  border-bottom: 1px solid #e9ecef;\n  min-height: 75px;\n}\n.component-head-info .user-active-chat .state-avatar {\n  position: absolute;\n  top: 50%;\n  display: block;\n  padding: 0;\n  margin: 0;\n  width: 40px;\n  height: 40px;\n  min-width: 40px;\n  min-height: 40px;\n  overflow: hidden;\n  border-radius: 50%;\n  box-sizing: border-box;\n  border: 1px solid #6c757d;\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.component-head-info .user-active-chat .state-avatar img {\n  width: 40px;\n  height: 40px;\n  min-width: 40px;\n  min-height: 40px;\n}\n.component-head-info .user-active-chat .text-info {\n  display: block;\n  padding: 7px 7px 7px 55px;\n  color: #0d47a1;\n}\n.component-head-info .user-active-chat .text-info .name {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.component-head-info .user-active-chat .text-info .time-online {\n  display: block;\n  font-size: 12px;\n  color: #6c757d;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.component-head-info .user-active-chat .text-info .time-online.active-now {\n  color: #8bc34a;\n}", ""]);
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
exports.push([module.i, "@charset \"UTF-8\";\n@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-input-send-chat {\n  border: 1px solid #e9ecef;\n  border-left: none;\n  position: relative;\n  padding: 5px 80px 0 80px;\n}\n.component-input-send-chat textarea {\n  width: 100% !important;\n  min-height: 30px;\n  max-height: 150px;\n  overflow-y: scroll;\n  resize: none;\n  padding: 10px 15px;\n  background-color: #f2f2f2;\n  border-radius: 15px;\n  border: 1px solid #ced4da;\n  font-size: 14px;\n  scrollbar-width: none;\n  margin: 0;\n  text-decoration: none;\n  -ms-overflow-style: none;\n}\n.component-input-send-chat textarea:focus {\n  border-color: #0d47a1;\n  color: #0d47a1;\n}\n.component-input-send-chat textarea::-webkit-scrollbar {\n  display: block;\n}\n.component-input-send-chat > i {\n  position: absolute;\n  z-index: 11;\n  bottom: 20px;\n  font-size: 28px;\n  color: #0d6efd;\n}\n.component-input-send-chat .hero-icon.emoticon {\n  left: 10px;\n}\n.component-input-send-chat .hero-icon.file {\n  left: 45px;\n}\n.component-input-send-chat .hero-icon.send {\n  display: inline-block;\n  z-index: 1;\n  right: 45px;\n}\n.component-input-send-chat .hero-icon.react {\n  z-index: 1;\n  display: inline-block;\n  right: 10px;\n}\n.component-input-send-chat .image-block .remove-image {\n  max-height: 100px;\n  overflow: hidden;\n  display: inline-block;\n  position: relative;\n}\n.component-input-send-chat .image-block .remove-image:after {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  content: \"󰅗\";\n  width: 32px;\n  height: 24px;\n  text-align: center;\n  display: inline-block;\n  vertical-align: middle;\n  cursor: pointer;\n  line-height: 24px;\n  font: normal normal normal 24px/1 \"HERO Icons\";\n  text-rendering: auto;\n  line-height: inherit;\n  -webkit-font-smoothing: antialiased;\n}\n.component-input-send-chat .image-block .remove-image:hover img {\n  opacity: 0.4;\n}\n.component-input-send-chat .image-block .remove-image:hover:after {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n  animation-name: tada;\n}\n.component-input-send-chat .image-block img {\n  padding: 5px;\n  opacity: 0.9;\n}", ""]);
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
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n/**\n* display\n*/\n*,\n:after,\n:before {\n  box-sizing: border-box;\n}\n\n:focus {\n  outline: 0 !important;\n  text-decoration: none !important;\n}\n\n.d-none {\n  display: none !important;\n}\n\n.d-inline-block {\n  display: inline-block !important;\n}\n\n.d-block {\n  display: block !important;\n}\n\n.d-table {\n  display: table !important;\n}\n\n.d-table-row {\n  display: table-row !important;\n}\n\n.d-table-cell {\n  display: table-cell !important;\n}\n\n.d-flex {\n  display: -ms-flexbox !important;\n  display: flex !important;\n}\n\n.d-inline-flex {\n  display: -ms-inline-flexbox !important;\n  display: inline-flex !important;\n}\n\n.italic {\n  font-style: italic !important;\n}\n\n.not-italic {\n  font-style: normal !important;\n}\n\n.uppercase {\n  text-transform: uppercase !important;\n}\n\n.lowercase {\n  text-transform: lowercase !important;\n}\n\n.capitalize {\n  text-transform: capitalize !important;\n}\n\n.normal-case {\n  text-transform: none !important;\n}\n\n.underline {\n  text-decoration: underline !important;\n}\n\n.line-through {\n  text-decoration: line-through !important;\n}\n\n.no-underline {\n  text-decoration: none !important;\n}\n\n/**************************************************/\n.font-hairline {\n  font-weight: 100 !important;\n}\n\n.font-thin {\n  font-weight: 200 !important;\n}\n\n.font-light {\n  font-weight: 300 !important;\n}\n\n.font-normal {\n  font-weight: 400 !important;\n}\n\n.font-medium {\n  font-weight: 500 !important;\n}\n\n.font-semibold {\n  font-weight: 600 !important;\n}\n\n.font-bold {\n  font-weight: 700 !important;\n}\n\n.font-extrabold {\n  font-weight: 800 !important;\n}\n\n.font-black {\n  font-weight: 900 !important;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.vertical-align-middle {\n  vertical-align: middle;\n}\n\n.mg-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.rounded-circle {\n  border-radius: 50% !important;\n}\n\n.border {\n  border: 1px solid #dee2e6 !important;\n}\n\n.border-top {\n  border-top: 1px solid #dee2e6 !important;\n}\n\n.border-right {\n  border-right: 1px solid #dee2e6 !important;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #dee2e6 !important;\n}\n\n.border-left {\n  border-left: 1px solid #dee2e6 !important;\n}\n\n.text-color-red {\n  color: #f44336;\n}\n\n.text-color-pink {\n  color: #e91e63;\n}\n\n.text-color-purple {\n  color: #9c27b0;\n}\n\n.text-color-deep-purple {\n  color: #673ab7;\n}\n\n.text-color-indigo {\n  color: #3f51b5;\n}\n\n.text-color-blue {\n  color: #2196f3;\n}\n\n.text-color-light-blue {\n  color: #03a9f4;\n}\n\n.text-color-cyan {\n  color: #00bcd4;\n}\n\n.text-color-teal {\n  color: #009688;\n}\n\n.text-color-green {\n  color: #4caf50;\n}\n\n.text-color-light-green {\n  color: #8bc34a;\n}\n\n.text-color-lime {\n  color: #cddc39;\n}\n\n.text-color-yellow {\n  color: #ffeb3b;\n}\n\n.text-color-amber {\n  color: #ffc107;\n}\n\n.text-color-orange {\n  color: #ff9800;\n}\n\n.text-color-deep-orange {\n  color: #ff5722;\n}\n\n.text-color-brown {\n  color: #795548;\n}\n\n.text-color-black {\n  color: #000;\n}\n\n.text-color-white {\n  color: #fff;\n}\n\n.text-color-grey {\n  color: #9e9e9e;\n}\n\n.text-color-blue-grey {\n  color: #607d8b;\n}\n\n.text-color-primary-color-dark {\n  color: #0d47a1;\n}\n\n.text-color-secondary-color {\n  color: #aa66cc;\n}\n\n.text-color-secondary-color-dark {\n  color: #9933cc;\n}\n\n.text-color-default-color {\n  color: #2bbbad;\n}\n\n.text-color-default-color-dark {\n  color: #00695c;\n}\n\n.text-color-info-color {\n  color: #33b5e5;\n}\n\n.text-color-info-color-dark {\n  color: #0099cc;\n}\n\n.text-color-success-color {\n  color: #00c851;\n}\n\n.text-color-success-color-dark {\n  color: #007e33;\n}\n\n.text-color-warning-color {\n  color: #ffbb33;\n}\n\n.text-color-warning-color-dark {\n  color: #ff8800;\n}\n\n.text-color-danger-color {\n  color: #ff3547;\n}\n\n.text-color-danger-color-dark {\n  color: #cc0000;\n}\n\n.text-color-elegant-color {\n  color: #2e2e2e;\n}\n\n.text-color-elegant-color-dark {\n  color: #212121;\n}\n\n.text-color-stylish-color {\n  color: #4b515d;\n}\n\n.text-color-stylish-color-dark {\n  color: #3e4551;\n}\n\n.text-color-unique-color {\n  color: #3f729b;\n}\n\n.text-color-unique-color-dark {\n  color: #1c2331;\n}\n\n.text-color-special-color {\n  color: #37474f;\n}\n\n.text-color-special-color-dark {\n  color: #263238;\n}\n\n.text-color-primary {\n  color: #4285f4;\n}\n\n.text-color-danger {\n  color: #ff3547;\n}\n\n.text-color-warning {\n  color: #ffbb33;\n}\n\n.text-color-success {\n  color: #00c851;\n}\n\n.text-color-info {\n  color: #33b5e5;\n}\n\n.text-color-default {\n  color: #2bbbad;\n}\n\n.text-color-secondary {\n  color: #aa66cc;\n}\n\n.text-color-dark {\n  color: #212121;\n}\n\n.text-color-light {\n  color: #e0e0e0;\n}\n\n.text-color-grey-x {\n  color: #f9f9f9;\n}\n\n.border-color-red {\n  border-color: #f44336;\n}\n\n.border-color-pink {\n  border-color: #e91e63;\n}\n\n.border-color-purple {\n  border-color: #9c27b0;\n}\n\n.border-color-deep-purple {\n  border-color: #673ab7;\n}\n\n.border-color-indigo {\n  border-color: #3f51b5;\n}\n\n.border-color-blue {\n  border-color: #2196f3;\n}\n\n.border-color-light-blue {\n  border-color: #03a9f4;\n}\n\n.border-color-cyan {\n  border-color: #00bcd4;\n}\n\n.border-color-teal {\n  border-color: #009688;\n}\n\n.border-color-green {\n  border-color: #4caf50;\n}\n\n.border-color-light-green {\n  border-color: #8bc34a;\n}\n\n.border-color-lime {\n  border-color: #cddc39;\n}\n\n.border-color-yellow {\n  border-color: #ffeb3b;\n}\n\n.border-color-amber {\n  border-color: #ffc107;\n}\n\n.border-color-orange {\n  border-color: #ff9800;\n}\n\n.border-color-deep-orange {\n  border-color: #ff5722;\n}\n\n.border-color-brown {\n  border-color: #795548;\n}\n\n.border-color-black {\n  border-color: #000;\n}\n\n.border-color-white {\n  border-color: #fff;\n}\n\n.border-color-grey {\n  border-color: #9e9e9e;\n}\n\n.border-color-blue-grey {\n  border-color: #607d8b;\n}\n\n.border-color-primary-color-dark {\n  border-color: #0d47a1;\n}\n\n.border-color-secondary-color {\n  border-color: #aa66cc;\n}\n\n.border-color-secondary-color-dark {\n  border-color: #9933cc;\n}\n\n.border-color-default-color {\n  border-color: #2bbbad;\n}\n\n.border-color-default-color-dark {\n  border-color: #00695c;\n}\n\n.border-color-info-color {\n  border-color: #33b5e5;\n}\n\n.border-color-info-color-dark {\n  border-color: #0099cc;\n}\n\n.border-color-success-color {\n  border-color: #00c851;\n}\n\n.border-color-success-color-dark {\n  border-color: #007e33;\n}\n\n.border-color-warning-color {\n  border-color: #ffbb33;\n}\n\n.border-color-warning-color-dark {\n  border-color: #ff8800;\n}\n\n.border-color-danger-color {\n  border-color: #ff3547;\n}\n\n.border-color-danger-color-dark {\n  border-color: #cc0000;\n}\n\n.border-color-elegant-color {\n  border-color: #2e2e2e;\n}\n\n.border-color-elegant-color-dark {\n  border-color: #212121;\n}\n\n.border-color-stylish-color {\n  border-color: #4b515d;\n}\n\n.border-color-stylish-color-dark {\n  border-color: #3e4551;\n}\n\n.border-color-unique-color {\n  border-color: #3f729b;\n}\n\n.border-color-unique-color-dark {\n  border-color: #1c2331;\n}\n\n.border-color-special-color {\n  border-color: #37474f;\n}\n\n.border-color-special-color-dark {\n  border-color: #263238;\n}\n\n.border-color-primary {\n  border-color: #4285f4;\n}\n\n.border-color-danger {\n  border-color: #ff3547;\n}\n\n.border-color-warning {\n  border-color: #ffbb33;\n}\n\n.border-color-success {\n  border-color: #00c851;\n}\n\n.border-color-info {\n  border-color: #33b5e5;\n}\n\n.border-color-default {\n  border-color: #2bbbad;\n}\n\n.border-color-secondary {\n  border-color: #aa66cc;\n}\n\n.border-color-dark {\n  border-color: #212121;\n}\n\n.border-color-light {\n  border-color: #e0e0e0;\n}\n\n.border-color-grey-x {\n  border-color: #f9f9f9;\n}\n\n.bg-color-red {\n  background-color: #f44336;\n}\n\n.bg-color-pink {\n  background-color: #e91e63;\n}\n\n.bg-color-purple {\n  background-color: #9c27b0;\n}\n\n.bg-color-deep-purple {\n  background-color: #673ab7;\n}\n\n.bg-color-indigo {\n  background-color: #3f51b5;\n}\n\n.bg-color-blue {\n  background-color: #2196f3;\n}\n\n.bg-color-light-blue {\n  background-color: #03a9f4;\n}\n\n.bg-color-cyan {\n  background-color: #00bcd4;\n}\n\n.bg-color-teal {\n  background-color: #009688;\n}\n\n.bg-color-green {\n  background-color: #4caf50;\n}\n\n.bg-color-light-green {\n  background-color: #8bc34a;\n}\n\n.bg-color-lime {\n  background-color: #cddc39;\n}\n\n.bg-color-yellow {\n  background-color: #ffeb3b;\n}\n\n.bg-color-amber {\n  background-color: #ffc107;\n}\n\n.bg-color-orange {\n  background-color: #ff9800;\n}\n\n.bg-color-deep-orange {\n  background-color: #ff5722;\n}\n\n.bg-color-brown {\n  background-color: #795548;\n}\n\n.bg-color-black {\n  background-color: #000;\n}\n\n.bg-color-white {\n  background-color: #fff;\n}\n\n.bg-color-grey {\n  background-color: #9e9e9e;\n}\n\n.bg-color-blue-grey {\n  background-color: #607d8b;\n}\n\n.bg-color-primary-color-dark {\n  background-color: #0d47a1;\n}\n\n.bg-color-secondary-color {\n  background-color: #aa66cc;\n}\n\n.bg-color-secondary-color-dark {\n  background-color: #9933cc;\n}\n\n.bg-color-default-color {\n  background-color: #2bbbad;\n}\n\n.bg-color-default-color-dark {\n  background-color: #00695c;\n}\n\n.bg-color-info-color {\n  background-color: #33b5e5;\n}\n\n.bg-color-info-color-dark {\n  background-color: #0099cc;\n}\n\n.bg-color-success-color {\n  background-color: #00c851;\n}\n\n.bg-color-success-color-dark {\n  background-color: #007e33;\n}\n\n.bg-color-warning-color {\n  background-color: #ffbb33;\n}\n\n.bg-color-warning-color-dark {\n  background-color: #ff8800;\n}\n\n.bg-color-danger-color {\n  background-color: #ff3547;\n}\n\n.bg-color-danger-color-dark {\n  background-color: #cc0000;\n}\n\n.bg-color-elegant-color {\n  background-color: #2e2e2e;\n}\n\n.bg-color-elegant-color-dark {\n  background-color: #212121;\n}\n\n.bg-color-stylish-color {\n  background-color: #4b515d;\n}\n\n.bg-color-stylish-color-dark {\n  background-color: #3e4551;\n}\n\n.bg-color-unique-color {\n  background-color: #3f729b;\n}\n\n.bg-color-unique-color-dark {\n  background-color: #1c2331;\n}\n\n.bg-color-special-color {\n  background-color: #37474f;\n}\n\n.bg-color-special-color-dark {\n  background-color: #263238;\n}\n\n.bg-color-primary {\n  background-color: #4285f4;\n}\n\n.bg-color-danger {\n  background-color: #ff3547;\n}\n\n.bg-color-warning {\n  background-color: #ffbb33;\n}\n\n.bg-color-success {\n  background-color: #00c851;\n}\n\n.bg-color-info {\n  background-color: #33b5e5;\n}\n\n.bg-color-default {\n  background-color: #2bbbad;\n}\n\n.bg-color-secondary {\n  background-color: #aa66cc;\n}\n\n.bg-color-dark {\n  background-color: #212121;\n}\n\n.bg-color-light {\n  background-color: #e0e0e0;\n}\n\n.bg-color-grey-x {\n  background-color: #f9f9f9;\n}\n\n.w-25 {\n  width: 25;\n}\n\n.w-50 {\n  width: 50;\n}\n\n.w-55 {\n  width: 55;\n}\n\n.w-60 {\n  width: 60;\n}\n\n.w-65 {\n  width: 65;\n}\n\n.w-70 {\n  width: 70;\n}\n\n.w-75 {\n  width: 75;\n}\n\n.w-80 {\n  width: 80;\n}\n\n.w-85 {\n  width: 85;\n}\n\n.w-90 {\n  width: 90;\n}\n\n.w-95 {\n  width: 95;\n}\n\n.w-100 {\n  width: 100;\n}\n\n.text-xs {\n  font-size: 0.75rem;\n}\n\n.text-sm {\n  font-size: 0.875rem;\n}\n\n.text-base {\n  font-size: 1rem;\n}\n\n.text-lg {\n  font-size: 1.125rem;\n}\n\n.text-xl {\n  font-size: 1.25rem;\n}\n\n.text-2xl {\n  font-size: 1.5rem;\n}\n\n.text-3xl {\n  font-size: 1.875rem;\n}\n\n.text-4xl {\n  font-size: 2.25rem;\n}\n\n.text-5xl {\n  font-size: 3rem;\n}\n\n.text-6xl {\n  font-size: 4rem;\n}\n\nbody.neo-scroll {\n  overflow: hidden;\n}\n\ninput:focus, select:focus, textarea:focus, option:focus {\n  border: 1px solid #aaaaaa;\n  outline: none;\n}\n\n:root {\n  --animate-duration: 1s;\n  --animate-delay: 1s;\n  --animate-loop: 1;\n}\n\n.animated {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n}\n.animated.infinite {\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n.animated.faster {\n  animation-duration: calc($--animate-duration / 2);\n}\n.animated.fast {\n  animation-duration: calc($--animate-duration * 0.8);\n}\n.animated.slow {\n  animation-duration: calc($--animate-duration * 2);\n}\n.animated.slower {\n  animation-duration: calc($--animate-duration * 3);\n}\n.animated.loop-1 {\n  animation-iteration-count: 1;\n}\n.animated.delay-1s {\n  animation-delay: calc($--animate-delay * $i);\n}\n.animated.loop-2 {\n  animation-iteration-count: 2;\n}\n.animated.delay-1s {\n  animation-delay: calc($--animate-delay * $i);\n}\n.animated.loop-3 {\n  animation-iteration-count: 3;\n}\n.animated.delay-1s {\n  animation-delay: calc($--animate-delay * $i);\n}\n.animated.loop-4 {\n  animation-iteration-count: 4;\n}\n.animated.delay-1s {\n  animation-delay: calc($--animate-delay * $i);\n}\n\n@media print, (prefers-reduced-motion: reduce) {\n  .animated {\n    animation-duration: 1ms !important;\n    transition-duration: 1ms !important;\n    animation-iteration-count: 1 !important;\n  }\n\n  .animated[class*=Out] {\n    opacity: 0;\n  }\n}\n.animated-initial {\n  animation-name: initial !important;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@keyframes pulse {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n  50% {\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n.pulse {\n  animation-name: pulse;\n  animation-timing-function: ease-in-out;\n}\n\n@keyframes tada {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n  10%, 20% {\n    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n  }\n  30%, 50%, 70%, 90% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n  40%, 60%, 80% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n.tada {\n  animation-name: tada;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n@keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.fadeInLeft {\n  animation-name: fadeInLeft;\n}\n\n@keyframes fadeInRight {\n  from {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.fadeInRight {\n  animation-name: fadeInRight;\n}\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.fadeInUp {\n  animation-name: fadeInUp;\n}\n\n@keyframes rotateOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n}\n.rotateOut {\n  animation-name: rotateOut;\n  transform-origin: center;\n}\n\n.rotate-circle {\n  animation: rotateCircle 9s infinite;\n}\n\n/*\n Custom Animations\n */\n@keyframes rotateCircle {\n  0% {\n    transform: rotate(0deg);\n  }\n  25% {\n    transform: rotate(90deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(270deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes jackInTheBox {\n  from {\n    opacity: 0;\n    transform: scale(0.1) rotate(30deg);\n    transform-origin: center bottom;\n  }\n  50% {\n    transform: rotate(-10deg);\n  }\n  70% {\n    transform: rotate(3deg);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.jackInTheBox {\n  animation-name: jackInTheBox;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@keyframes rollIn {\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.rollIn {\n  animation-name: rollIn;\n}\n\n@keyframes zoomIn {\n  from {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n  50% {\n    opacity: 1;\n  }\n}\n.zoomIn {\n  animation-name: zoomIn;\n}\n\n@keyframes slideInDown {\n  from {\n    transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.slideInDown {\n  animation-name: slideInDown;\n}\n\n@keyframes float {\n  0% {\n    transform: translateY(0px);\n    -webkit-transition: translateY(0px);\n  }\n  50% {\n    transform: translateY(-6px);\n    -webkit-transition: translateY(-6px);\n  }\n  100% {\n    transform: translateY(0px);\n    -webkit-transition: translateY(0px);\n  }\n}\n.purple-gradient {\n  background: -moz-linear-gradient(40deg, #ff6ec4, #7873f5) !important;\n  background: -webkit-linear-gradient(40deg, #ff6ec4, #7873f5) !important;\n  background: -o-linear-gradient(40deg, #ff6ec4, #7873f5) !important;\n  background: -ms-linear-gradient(40deg, #ff6ec4, #7873f5) !important;\n  background: linear-gradient(40deg, #ff6ec4, #7873f5) !important;\n}\n\n.peach-gradient {\n  background: -moz-linear-gradient(40deg, #ffd86f, #fc6262) !important;\n  background: -webkit-linear-gradient(40deg, #ffd86f, #fc6262) !important;\n  background: -o-linear-gradient(40deg, #ffd86f, #fc6262) !important;\n  background: -ms-linear-gradient(40deg, #ffd86f, #fc6262) !important;\n  background: linear-gradient(40deg, #ffd86f, #fc6262) !important;\n}\n\n.aqua-gradient {\n  background: -moz-linear-gradient(40deg, #2096ff, #05ffa3) !important;\n  background: -webkit-linear-gradient(40deg, #2096ff, #05ffa3) !important;\n  background: -o-linear-gradient(40deg, #2096ff, #05ffa3) !important;\n  background: -ms-linear-gradient(40deg, #2096ff, #05ffa3) !important;\n  background: linear-gradient(40deg, #2096ff, #05ffa3) !important;\n}\n\n.blue-gradient {\n  background: -moz-linear-gradient(40deg, #45cafc, #303f9f) !important;\n  background: -webkit-linear-gradient(40deg, #45cafc, #303f9f) !important;\n  background: -o-linear-gradient(40deg, #45cafc, #303f9f) !important;\n  background: -ms-linear-gradient(40deg, #45cafc, #303f9f) !important;\n  background: linear-gradient(40deg, #45cafc, #303f9f) !important;\n}\n\n.home-page-gradient {\n  background: -moz-linear-gradient(40deg, #e1fefa, #fcf7f4) !important;\n  background: -webkit-linear-gradient(40deg, #e1fefa, #fcf7f4) !important;\n  background: -o-linear-gradient(40deg, #e1fefa, #fcf7f4) !important;\n  background: -ms-linear-gradient(40deg, #e1fefa, #fcf7f4) !important;\n  background: linear-gradient(40deg, #e1fefa, #fcf7f4) !important;\n}\n\n.purple-gradient-rgba {\n  background: -moz-linear-gradient(40deg, rgba(255, 110, 196, 0.9), rgba(120, 115, 245, 0.9)) !important;\n  background: -webkit-linear-gradient(40deg, rgba(255, 110, 196, 0.9), rgba(120, 115, 245, 0.9)) !important;\n  background: -o-linear-gradient(40deg, rgba(255, 110, 196, 0.9), rgba(120, 115, 245, 0.9)) !important;\n  background: -ms-linear-gradient(40deg, rgba(255, 110, 196, 0.9), rgba(120, 115, 245, 0.9)) !important;\n  background: linear-gradient(40deg, rgba(255, 110, 196, 0.9), rgba(120, 115, 245, 0.9)) !important;\n}\n\n.peach-gradient-rgba {\n  background: -moz-linear-gradient(40deg, rgba(255, 216, 111, 0.9), rgba(252, 98, 98, 0.9)) !important;\n  background: -webkit-linear-gradient(40deg, rgba(255, 216, 111, 0.9), rgba(252, 98, 98, 0.9)) !important;\n  background: -o-linear-gradient(40deg, rgba(255, 216, 111, 0.9), rgba(252, 98, 98, 0.9)) !important;\n  background: -ms-linear-gradient(40deg, rgba(255, 216, 111, 0.9), rgba(252, 98, 98, 0.9)) !important;\n  background: linear-gradient(40deg, rgba(255, 216, 111, 0.9), rgba(252, 98, 98, 0.9)) !important;\n}\n\n.aqua-gradient-rgba {\n  background: -moz-linear-gradient(40deg, rgba(32, 150, 255, 0.9), rgba(5, 255, 163, 0.9)) !important;\n  background: -webkit-linear-gradient(40deg, rgba(32, 150, 255, 0.9), rgba(5, 255, 163, 0.9)) !important;\n  background: -o-linear-gradient(40deg, rgba(32, 150, 255, 0.9), rgba(5, 255, 163, 0.9)) !important;\n  background: -ms-linear-gradient(40deg, rgba(32, 150, 255, 0.9), rgba(5, 255, 163, 0.9)) !important;\n  background: linear-gradient(40deg, rgba(32, 150, 255, 0.9), rgba(5, 255, 163, 0.9)) !important;\n}\n\n.blue-gradient-rgba {\n  background: -moz-linear-gradient(40deg, rgba(69, 202, 252, 0.9), rgba(48, 63, 159, 0.9)) !important;\n  background: -webkit-linear-gradient(40deg, rgba(69, 202, 252, 0.9), rgba(48, 63, 159, 0.9)) !important;\n  background: -o-linear-gradient(40deg, rgba(69, 202, 252, 0.9), rgba(48, 63, 159, 0.9)) !important;\n  background: -ms-linear-gradient(40deg, rgba(69, 202, 252, 0.9), rgba(48, 63, 159, 0.9)) !important;\n  background: linear-gradient(40deg, rgba(69, 202, 252, 0.9), rgba(48, 63, 159, 0.9)) !important;\n}\n\n.bg-gradient-purple {\n  background: -moz-linear-gradient(131.93deg, #ff6ec4, #7873f5) !important;\n  background: -webkit-linear-gradient(131.93deg, #ff6ec4, #7873f5) !important;\n  background: -o-linear-gradient(131.93deg, #ff6ec4, #7873f5) !important;\n  background: -ms-linear-gradient(131.93deg, #ff6ec4, #7873f5) !important;\n  background: linear-gradient(131.93deg, #ff6ec4, #7873f5) !important;\n}\n\n.bg-gradient-peach {\n  background: -moz-linear-gradient(131.93deg, #ffd86f, #fc6262) !important;\n  background: -webkit-linear-gradient(131.93deg, #ffd86f, #fc6262) !important;\n  background: -o-linear-gradient(131.93deg, #ffd86f, #fc6262) !important;\n  background: -ms-linear-gradient(131.93deg, #ffd86f, #fc6262) !important;\n  background: linear-gradient(131.93deg, #ffd86f, #fc6262) !important;\n}\n\n.bg-gradient-aqua {\n  background: -moz-linear-gradient(131.93deg, #2096ff, #05ffa3) !important;\n  background: -webkit-linear-gradient(131.93deg, #2096ff, #05ffa3) !important;\n  background: -o-linear-gradient(131.93deg, #2096ff, #05ffa3) !important;\n  background: -ms-linear-gradient(131.93deg, #2096ff, #05ffa3) !important;\n  background: linear-gradient(131.93deg, #2096ff, #05ffa3) !important;\n}\n\n.bg-gradient-blue {\n  background: -moz-linear-gradient(131.93deg, #45cafc, #303f9f) !important;\n  background: -webkit-linear-gradient(131.93deg, #45cafc, #303f9f) !important;\n  background: -o-linear-gradient(131.93deg, #45cafc, #303f9f) !important;\n  background: -ms-linear-gradient(131.93deg, #45cafc, #303f9f) !important;\n  background: linear-gradient(131.93deg, #45cafc, #303f9f) !important;\n}\n\n.bg-gradient-home-page {\n  background: -moz-linear-gradient(131.93deg, #e1fefa, #fcf7f4) !important;\n  background: -webkit-linear-gradient(131.93deg, #e1fefa, #fcf7f4) !important;\n  background: -o-linear-gradient(131.93deg, #e1fefa, #fcf7f4) !important;\n  background: -ms-linear-gradient(131.93deg, #e1fefa, #fcf7f4) !important;\n  background: linear-gradient(131.93deg, #e1fefa, #fcf7f4) !important;\n}\n\n@font-face {\n  font-family: \"HERO Icons\";\n  src: url(\"http://babysitter.trust-growth.co.jp/font/IconFont/webfont.eot?v=1.4.57\");\n  src: url(\"http://babysitter.trust-growth.co.jp/font/IconFont/webfont.eot?#iefix&v=1.4.57\") format(\"embedded-opentype\"), url(\"http://babysitter.trust-growth.co.jp/font/IconFont/webfont.woff2?v=1.4.57\") format(\"woff2\"), url(\"http://babysitter.trust-growth.co.jp/font/IconFont/webfont.woff?v=1.4.57\") format(\"woff\"), url(\"http://babysitter.trust-growth.co.jp/font/IconFont/webfont.ttf?v=1.4.57\") format(\"truetype\"), url(\"http://babysitter.trust-growth.co.jp/font/IconFont/webfont.svg?v=1.4.57\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\ni.hero-icon {\n  display: inline-block;\n  width: 32px;\n  height: 24px;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  line-height: 24px;\n}\ni.hero-icon:before {\n  font-size: 24px;\n  display: inline-block;\n  font: normal normal normal 24px/1 \"HERO Icons\";\n  font-size: inherit;\n  text-rendering: auto;\n  line-height: inherit;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\ni.hero-icon.hero-account-group-outline::before {\n  content: \"\\F0B58\";\n}\ni.hero-icon.hero-account-search-outline::before {\n  content: \"\\F0935\";\n}\ni.hero-icon.hero-account-tie-outline::before {\n  content: \"\\F10CA\";\n}\ni.hero-icon.hero-airport::before {\n  content: \"\\F084B\";\n}\ni.hero-icon.hero-arrow-down-bold-box-outline::before {\n  content: \"\\F0730\";\n}\ni.hero-icon.hero-arrow-up-bold-box-outline::before {\n  content: \"\\F0739\";\n}\ni.hero-icon.hero-arrow-up-box::before {\n  content: \"\\F06C3\";\n}\ni.hero-icon.hero-auto-fix::before {\n  content: \"\\F0068\";\n}\ni.hero-icon.hero-auto-upload::before {\n  content: \"\\F0069\";\n}\ni.hero-icon.hero-ballot-recount-outline::before {\n  content: \"\\F0C3A\";\n}\ni.hero-icon.hero-call-made::before {\n  content: \"\\F00F7\";\n}\ni.hero-icon.hero-card-account-mail-outline::before {\n  content: \"\\F0E98\";\n}\ni.hero-icon.hero-cart-plus::before {\n  content: \"\\F0112\";\n}\ni.hero-icon.hero-cellphone::before {\n  content: \"\\F011C\";\n}\ni.hero-icon.hero-cellphone-cog::before {\n  content: \"\\F0951\";\n}\ni.hero-icon.hero-cellphone-message::before {\n  content: \"\\F08D3\";\n}\ni.hero-icon.hero-cellphone-nfc::before {\n  content: \"\\F0E90\";\n}\ni.hero-icon.hero-certificate-outline::before {\n  content: \"\\F1188\";\n}\ni.hero-icon.hero-check-circle::before {\n  content: \"\\F05E0\";\n}\ni.hero-icon.hero-check-circle-outline::before {\n  content: \"\\F05E1\";\n}\ni.hero-icon.hero-clippy::before {\n  content: \"\\F014F\";\n}\ni.hero-icon.hero-cloud-download-outline::before {\n  content: \"\\F0B7D\";\n}\ni.hero-icon.hero-creation::before {\n  content: \"\\F0674\";\n}\ni.hero-icon.hero-email-edit-outline::before {\n  content: \"\\F0EE4\";\n}\ni.hero-icon.hero-emoticon::before {\n  content: \"\\F0C68\";\n}\ni.hero-icon.hero-emoticon-angry::before {\n  content: \"\\F0C69\";\n}\ni.hero-icon.hero-emoticon-angry-outline::before {\n  content: \"\\F0C6A\";\n}\ni.hero-icon.hero-emoticon-confused::before {\n  content: \"\\F10DE\";\n}\ni.hero-icon.hero-emoticon-confused-outline::before {\n  content: \"\\F10DF\";\n}\ni.hero-icon.hero-emoticon-cool::before {\n  content: \"\\F0C6B\";\n}\ni.hero-icon.hero-emoticon-cool-outline::before {\n  content: \"\\F01F3\";\n}\ni.hero-icon.hero-emoticon-cry::before {\n  content: \"\\F0C6C\";\n}\ni.hero-icon.hero-emoticon-cry-outline::before {\n  content: \"\\F0C6D\";\n}\ni.hero-icon.hero-emoticon-dead::before {\n  content: \"\\F0C6E\";\n}\ni.hero-icon.hero-emoticon-dead-outline::before {\n  content: \"\\F069B\";\n}\ni.hero-icon.hero-emoticon-devil::before {\n  content: \"\\F0C6F\";\n}\ni.hero-icon.hero-emoticon-devil-outline::before {\n  content: \"\\F01F4\";\n}\ni.hero-icon.hero-emoticon-excited::before {\n  content: \"\\F0C70\";\n}\ni.hero-icon.hero-emoticon-excited-outline::before {\n  content: \"\\F069C\";\n}\ni.hero-icon.hero-emoticon-frown::before {\n  content: \"\\F0F4C\";\n}\ni.hero-icon.hero-emoticon-frown-outline::before {\n  content: \"\\F0F4D\";\n}\ni.hero-icon.hero-emoticon-happy::before {\n  content: \"\\F0C71\";\n}\ni.hero-icon.hero-emoticon-happy-outline::before {\n  content: \"\\F01F5\";\n}\ni.hero-icon.hero-emoticon-kiss::before {\n  content: \"\\F0C72\";\n}\ni.hero-icon.hero-emoticon-kiss-outline::before {\n  content: \"\\F0C73\";\n}\ni.hero-icon.hero-emoticon-lol::before {\n  content: \"\\F1214\";\n}\ni.hero-icon.hero-emoticon-lol-outline::before {\n  content: \"\\F1215\";\n}\ni.hero-icon.hero-emoticon-neutral::before {\n  content: \"\\F0C74\";\n}\ni.hero-icon.hero-emoticon-neutral-outline::before {\n  content: \"\\F01F6\";\n}\ni.hero-icon.hero-emoticon-outline::before {\n  content: \"\\F01F2\";\n}\ni.hero-icon.hero-emoticon-poop::before {\n  content: \"\\F01F7\";\n}\ni.hero-icon.hero-emoticon-poop-outline::before {\n  content: \"\\F0C75\";\n}\ni.hero-icon.hero-emoticon-sad::before {\n  content: \"\\F0C76\";\n}\ni.hero-icon.hero-emoticon-sad-outline::before {\n  content: \"\\F01F8\";\n}\ni.hero-icon.hero-emoticon-tongue::before {\n  content: \"\\F01F9\";\n}\ni.hero-icon.hero-emoticon-tongue-outline::before {\n  content: \"\\F0C77\";\n}\ni.hero-icon.hero-emoticon-wink::before {\n  content: \"\\F0C78\";\n}\ni.hero-icon.hero-emoticon-wink-outline::before {\n  content: \"\\F0C79\";\n}\ni.hero-icon.hero-file::before {\n  content: \"\\F0214\";\n}\ni.hero-icon.hero-file-cloud-outline::before {\n  content: \"\\F102A\";\n}\ni.hero-icon.hero-form-select::before {\n  content: \"\\F1401\";\n}\ni.hero-icon.hero-format-list-text::before {\n  content: \"\\F126F\";\n}\ni.hero-icon.hero-google-ads::before {\n  content: \"\\F0C87\";\n}\ni.hero-icon.hero-hand-okay::before {\n  content: \"\\F0A50\";\n}\ni.hero-icon.hero-hand-pointing-right::before {\n  content: \"\\F02C7\";\n}\ni.hero-icon.hero-headset::before {\n  content: \"\\F02CE\";\n}\ni.hero-icon.hero-heart-multiple-outline::before {\n  content: \"\\F0A57\";\n}\ni.hero-icon.hero-home-map-marker::before {\n  content: \"\\F05F8\";\n}\ni.hero-icon.hero-human-male-child::before {\n  content: \"\\F138C\";\n}\ni.hero-icon.hero-laptop::before {\n  content: \"\\F0322\";\n}\ni.hero-icon.hero-message-cog-outline::before {\n  content: \"\\F1172\";\n}\ni.hero-icon.hero-message-text-outline::before {\n  content: \"\\F036A\";\n}\ni.hero-icon.hero-mouse::before {\n  content: \"\\F037D\";\n}\ni.hero-icon.hero-mouse-bluetooth::before {\n  content: \"\\F098B\";\n}\ni.hero-icon.hero-mouse-off::before {\n  content: \"\\F037E\";\n}\ni.hero-icon.hero-mouse-variant::before {\n  content: \"\\F037F\";\n}\ni.hero-icon.hero-mouse-variant-off::before {\n  content: \"\\F0380\";\n}\ni.hero-icon.hero-newspaper-variant-multiple-outline::before {\n  content: \"\\F1003\";\n}\ni.hero-icon.hero-newspaper-variant-outline::before {\n  content: \"\\F1004\";\n}\ni.hero-icon.hero-phone-in-talk-outline::before {\n  content: \"\\F1182\";\n}\ni.hero-icon.hero-plus-outline::before {\n  content: \"\\F0705\";\n}\ni.hero-icon.hero-responsive::before {\n  content: \"\\F045E\";\n}\ni.hero-icon.hero-select::before {\n  content: \"\\F0485\";\n}\ni.hero-icon.hero-selection-search::before {\n  content: \"\\F1205\";\n}\ni.hero-icon.hero-send::before {\n  content: \"\\F048A\";\n}\ni.hero-icon.hero-send-check-outline::before {\n  content: \"\\F1162\";\n}\ni.hero-icon.hero-send-outline::before {\n  content: \"\\F1165\";\n}\ni.hero-icon.hero-share-all-outline::before {\n  content: \"\\F11F5\";\n}\ni.hero-icon.hero-star-box-multiple-outline::before {\n  content: \"\\F1287\";\n}\ni.hero-icon.hero-sticker-emoji::before {\n  content: \"\\F0785\";\n}\ni.hero-icon.hero-tablet-ipad::before {\n  content: \"\\F04F8\";\n}\ni.hero-icon.hero-television-clean::before {\n  content: \"\\F1110\";\n}\ni.hero-icon.hero-update::before {\n  content: \"\\F06B0\";\n}\ni.hero-icon.hero-zodiac-taurus::before {\n  content: \"\\F0A87\";\n}\ni.hero-icon.hero-zodiac-virgo::before {\n  content: \"\\F0A88\";\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/action/index.js":
/*!*****************************!*\
  !*** ./src/action/index.js ***!
  \*****************************/
/*! exports provided: setterSocket, setterUser, setterChannels, addMessage, addMessageSendToMe, changeChannelActive, addUserOnline, removeUserOnline, readAllMessageChannelActive */
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
      var EVENT = CONFIG_EVENT; //var peerDom = document.getElementById("Application")

      if (!this.state.sendUserOnline) {
        // peerDom && peerDom.getAttribute('data-peer') &&
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-head-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-active-chat"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
        className: "state-avatar active-online"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _config__WEBPACK_IMPORTED_MODULE_3__["default"].SERVER_PHP.URL + channelActive.user.avatar,
        alt: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
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
/* harmony import */ var _scss_chat_input_send_chat_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../scss/chat/input-send-chat.scss */ "./src/scss/chat/input-send-chat.scss");
/* harmony import */ var _scss_chat_input_send_chat_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scss_chat_input_send_chat_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/index.js */ "./src/config/index.js");
/* harmony import */ var _library_service_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../library/service.js */ "./src/library/service.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
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
        var emojiChat = _config_index_js__WEBPACK_IMPORTED_MODULE_5__["default"].EMOJIS.filter(function (emoji) {
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
        Object(_library_service_js__WEBPACK_IMPORTED_MODULE_6__["sendMessageToChannel"])(messageSendToChannel, style, attachment, channelId, tokenAccess, detect, instance, dataRefesh);
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

          var emojisCall = _config_index_js__WEBPACK_IMPORTED_MODULE_5__["default"].EMOJIS.filter(function (item) {
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

      Object(_library_service_js__WEBPACK_IMPORTED_MODULE_6__["saveBlobToServer"])(file); // Create an image

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

      Object(_library_service_js__WEBPACK_IMPORTED_MODULE_6__["saveBlobToServer"])(file); // Create an image

      var img = new Image(); // Once the image loads, render the img on the canvas

      img.onload = function () {
        // Update dimensions of the canvas with the dimensions of the image
        callback(this);
      }; // Crossbrowser support for URL


      var URLObj = window.URL || window.webkitURL; // Creates a DOMString containing a URL representing the object given in the parameter
      // namely the original Blob

      try {
        img.src = _config_index_js__WEBPACK_IMPORTED_MODULE_5__["default"].SERVER_PHP.URL + "/image/folder.jpg";
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
      Object(_library_service_js__WEBPACK_IMPORTED_MODULE_6__["sendTypingMessageToChannel"])(channelId, tokenAccess, detect);
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
      var messages = channelActiveChat && channelActiveChat.message;
      console.log("|input send chat componentDidUpdate");
      var domScroll = document.getElementById("js-scroll-to-bottom");
      var domWriter = document.getElementById("js-is-write-message");
      console.log(domScroll.scrollHeight, domScroll.clientHeight + "listenReadMessageNewUser");

      if (domWriter && domScroll && domScroll.scrollHeight == domScroll.clientHeight) {
        Object(_library_service_js__WEBPACK_IMPORTED_MODULE_6__["listenReadMessageNewUser"])(messages, channelActiveChat);
      } else if (domScroll && domWriter && domWriter.classList.contains('follow-conversation')) {
        document.getElementById('js-scroll-to-bottom').scrollTop = document.getElementById('js-scroll-to-bottom').scrollHeight;

        if (jquery__WEBPACK_IMPORTED_MODULE_7___default()("#js-scroll-to-bottom img").length) {
          jquery__WEBPACK_IMPORTED_MODULE_7___default()("#js-scroll-to-bottom img").one("load", function () {
            document.getElementById('js-scroll-to-bottom').scrollTop = document.getElementById('js-scroll-to-bottom').scrollHeight;
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
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
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
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListEmoji_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null));
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
        className: typeMessage + "chat-group hungtt"
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
            userId = TOKEN_REFESH_DOM.getAttribute('data-user'); ///////////////////////////////////////////////////////
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
/*! exports provided: getAccessTokenByRefesh, resfeshTokenIfExpire, socketInitialConnect, caller, sendMessageToChannel, sendTypingMessageToChannel, saveBlobToServer, listenScrollMessage, listenReadMessageNewUser */
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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config/index.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action */ "./src/action/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import Peer from "peerjs"

 // import config from "../config"

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
    ApplicationDom && ApplicationDom.classList.add("connect-socket-error");
    console.log("socket connect nè disconnect");
  });
  socket.on('connect_error', function () {
    ApplicationDom && ApplicationDom.classList.add("connect-socket-error");
    console.log("socket connect nè connect_error");
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
      response = JSON.parse(response);

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

  var domScroll = document.getElementById("js-scroll-to-bottom");
  console.log(domScroll.scrollHeight, domScroll.clientHeight + "listenScrollMessage");

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
  console.log(data, "validateFetchChannelMessage(data)");
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
  data.newChannelAdmin = 1;
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
 ///thêm các reducer funtion cần được combine vào đây




 //// khởi tạo 1 biến biểu diễn REDUCER ALL 

var Reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  client: _detect_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  userChat: _user_chat_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  socket: _socket_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  users: _auth_js__WEBPACK_IMPORTED_MODULE_4__["default"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9jaGF0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9lbW9qaS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2NoYXQvaGVhZC1pbmZvLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9pbnB1dC1zZW5kLWNoYXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jaGF0L2xpc3QtbWVzc2FnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2NoYXQvbGlzdC11c2VyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9tZXNzYWdlLWNoYXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jaGF0L3NpZGViYXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbi90eXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvQ2hhdC9FbW9qaS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0L0hlYWRJbmZvLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoYXQvSW5wdXRTZW5kQ2hhdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0L0xpc3RFbW9qaS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0L0xpc3RNZXNzYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoYXQvTGlzdFVzZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvQ2hhdC9NZXNzYWdlQ2hhdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0L01lc3NhZ2VDaGF0VHlwaW5nLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L0NoYXQvU2lkZUJhckNoYXQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvQ2hhdC9Vc2VyQ2hhdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9DaGF0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGlicmFyeS9zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2VyL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIvZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2VyL3NvY2tldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlci91c2VyLWNoYXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9jaGF0LnNjc3M/YWM1MSIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jaGF0L2Vtb2ppLnNjc3M/MzExMyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jaGF0L2hlYWQtaW5mby5zY3NzPzgzMTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9pbnB1dC1zZW5kLWNoYXQuc2Nzcz82N2UwIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2NoYXQvbGlzdC1tZXNzYWdlLnNjc3M/NjhhMyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jaGF0L2xpc3QtdXNlci5zY3NzP2I1ZDciLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvY2hhdC9tZXNzYWdlLWNoYXQuc2Nzcz83Y2ZkIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2NoYXQvc2lkZWJhci5zY3NzPzJhOTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvaW5kZXguc2Nzcz84NzY2Iiwid2VicGFjazovLy93cyAoaWdub3JlZCkiXSwibmFtZXMiOlsic2V0dGVyU29ja2V0Iiwic29ja2V0IiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJUWVBFIiwiU09DQ0tFVCIsIlNFVF9TT0NLRVRfSU8iLCJwYXlsb2FkIiwic2V0dGVyVXNlciIsInVzZXIiLCJVU0VSIiwiU0VUVEVSX1VTRVIiLCJmZXRjaGVkIiwic2V0dGVyQ2hhbm5lbHMiLCJjaGFubmVscyIsIkNIQU5ORUwiLCJTRVRURVJfQ0hBTk5FTCIsImFkZE1lc3NhZ2UiLCJtZXNzYWdlIiwiQUREX01FU1NBR0UiLCJhZGRNZXNzYWdlU2VuZFRvTWUiLCJBRERfTUVTU0FHRV9TRU5EX1RPX01FIiwiY2hhbmdlQ2hhbm5lbEFjdGl2ZSIsImNoYW5uZWxOYW1lIiwiU0VUX0FDVElWRSIsImFkZFVzZXJPbmxpbmUiLCJpZCIsIkFERF9VU0VSX09OTElORSIsInJlbW92ZVVzZXJPbmxpbmUiLCJSRU1PVkVfVVNFUl9PTkxJTkUiLCJyZWFkQWxsTWVzc2FnZUNoYW5uZWxBY3RpdmUiLCJSRUFEX0FMTF9NRVNTQUdFX0NIQU5ORUxfQUNUSVZFIiwiSE9NRSIsIkNIQU5HRV9MQVlPVVRTIiwiQ0hBTkdFX1RIRU1FIiwiQ0hBVCIsIkNIQU5HRV9VU0VSX0NIQVRfREVGQVVMVCIsIkNPTkZJRyIsIlNFVFRFUl9TRU5EX1BFRVIiLCJBcHAiLCJwcm9wcyIsInN0YXRlIiwic2VuZFVzZXJPbmxpbmUiLCJKU09OIiwic3RyaW5naWZ5IiwiY2xpZW50IiwiaW5zdGFuY2VBcHAiLCJzb2NrZXRJbml0aWFsQ29ubmVjdCIsInNvY2tldElPQ2xpZW50IiwiRVZFTlQiLCJDT05GSUdfRVZFTlQiLCJhdXRoIiwic2V0U3RhdGUiLCJlbWl0IiwiVVNFUl9PTkxJTkUiLCJwZWVyIiwiYWNjZXNzIiwidG9rZW5zIiwidG9rZW5BY2Nlc3MiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJ1c2VycyIsInVzZXJDaGF0IiwiY29ubmVjdCIsIkVtb2ppIiwiYWRkSWNvbklucHV0Q2hhdCIsImV2ZW50IiwiaW5wdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29udGVudCIsInZhbHVlIiwic3ltYm9sIiwiSGVhZEluZm8iLCJzaWRlYmFyIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImxlbmd0aCIsIm1lc3NhZ2VzIiwic3R5bGUiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJjaGFubmVsQWN0aXZlIiwiZmluZCIsImNoYW5uZWwiLCJpc0FjdGl2ZSIsInRleHRPbmxpbmUiLCJvbmxpbmUiLCJTRVJWRVJfUEhQIiwiVVJMIiwiYXZhdGFyIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsIklucHV0U2VuZENoYXQiLCJzdWJtaXRNZXNzYWdlQ2hhdCIsImF0dGFjaG1lbnQiLCJlbW9qaUNoYXQiLCJjb25maWciLCJFTU9KSVMiLCJmaWx0ZXIiLCJlbW9qaSIsInRyaW0iLCJpbnN0YW5jZSIsImRhdGFSZWZlc2giLCJkaWZmIiwiRGF0ZSIsImdldFRpbWUiLCJwZXJpb2QiLCJleHBpcmUiLCJ1c2VySWQiLCJyZWZlc2giLCJ0b2tlblJlZmVzaCIsImRldGVjdCIsIm1lc3NhZ2VTZW5kVG9DaGFubmVsIiwiY2hhbm5lbFNlbmQiLCJjaGFubmVsSWQiLCJzZW5kTWVzc2FnZVRvQ2hhbm5lbCIsImhhbmRsZVNlbmRFbW9qaVN1Ym1pdCIsImhhbmRsZVNlbmRNZXNzYWdlU3VibWl0IiwidXJsQXR0YWNobWVudCIsImltYWdlc0RvbSIsImltYWdlcyIsImluZGV4X2ltYWdlX3NlbmQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInB1c2giLCJ1cmwiLCJnZXRBdHRyaWJ1dGUiLCJ0aW1lIiwiaW5uZXJIVE1MIiwiaGFuZGxlU2VuZE1lc3NhZ2VEb3duIiwia2V5Q29kZSIsInNoaWZ0S2V5IiwidGFyZ2V0Iiwic2VuZENoYXQiLCJ3b3JkcyIsInNwbGl0Iiwid29yZExhc3Rlc3QiLCJlbW9qaXNDYWxsIiwiaXRlbSIsInNpZ24iLCJsYXN0SW5kZXgiLCJsYXN0SW5kZXhPZiIsInN1YnN0cmluZyIsImhhbmRsZVNlbmRNZXNzYWdlVXAiLCJpbWFnZUZpbGVDYWxsYmFjayIsImltZ0xvYWRpbmciLCJ3aWR0aCIsIndyYXBwZXJJbWFnZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvbmNsaWNrIiwicmVtb3ZlIiwiYXBwZW5kQ2hpbGQiLCJyZXRyaWV2ZUltYWdlIiwiZmlsZSIsImNhbGxiYWNrIiwic2F2ZUJsb2JUb1NlcnZlciIsImltZyIsIkltYWdlIiwib25sb2FkIiwiVVJMT2JqIiwid2luZG93Iiwid2Via2l0VVJMIiwic3JjIiwiY3JlYXRlT2JqZWN0VVJMIiwiZXJyb3IiLCJyZXRyaWV2ZUZpbGUiLCJyZXRyaWV2ZUltYWdlRnJvbUNsaXBib2FyZEFzQmxvYiIsInBhc3RlRXZlbnQiLCJjbGlwYm9hcmREYXRhIiwidW5kZWZpbmVkIiwiaXRlbXMiLCJpIiwiaW5kZXhPZiIsImdldEFzRmlsZSIsInNob3dMaXN0RW1vamkiLCJlbW9qaXMiLCJhZGQiLCJoYW5kbGVTZW5kQ2hhdENsaWNrIiwic2VuZFR5cGluZ01lc3NhZ2VUb0NoYW5uZWwiLCJjaG9vc2VGaWxlIiwiY2xpY2siLCJzYXZlRmlsZSIsImZpbGVzIiwiYWNjZXB0IiwiZXhlYyIsIm5hbWUiLCJhbGVydCIsImJpbmQiLCJzdXAiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hhbm5lbEFjdGl2ZUNoYXQiLCJkb21TY3JvbGwiLCJkb21Xcml0ZXIiLCJzY3JvbGxIZWlnaHQiLCJsaXN0ZW5SZWFkTWVzc2FnZU5ld1VzZXIiLCJzY3JvbGxUb3AiLCIkIiwib25lIiwiTGlzdEVtb2ppIiwibWFwIiwiTGlzdE1lc3NhZ2UiLCJsc3RNZXNzYWdlIiwib24iLCJsaXN0ZW5TY3JvbGxNZXNzYWdlIiwia2V5IiwiTGlzdFVzZXIiLCJjb252ZXJzYXRpb25zIiwiTWVzc2FnZUNoYXQiLCJteWluZm8iLCJ1c2VySW5mbyIsInR5cGVNZXNzYWdlIiwiVElNRV9ESUVfRklMRSIsImF0dGFjaEVsZW1lbnQiLCJpbmRleCIsInJlYWQiLCJNZXNzYWdlQ2hhdFR5cGluZyIsInRvVXNlciIsImNoYW5uZWxJbmZvciIsInVzZXJUeXBpbmciLCJTaWRlQmFyQ2hhdCIsImluZm9yIiwiVXNlckNoYXQiLCJjaGFuZ2VBY3RpdmVVc2VyIiwiZSIsImRpc3BhdGNoIiwiY2xhc3NBY3RpdmVPbmxpbmUiLCJjbGFzc0FjdGl2ZU1lc3NhZ2UiLCJzbGljZSIsImxhc3RJdGVtIiwibXVuYmVyTm9uZVJlYWQiLCJDaGF0IiwiaW5zdGFuY2VDaGF0IiwiVE9LRU5fUkVGRVNIX0RPTSIsImdldEFjY2Vzc1Rva2VuQnlSZWZlc2giLCJsb2NhbCIsImxvY2FsX2lwIiwibG9jYWxfcG9ydCIsInBlZXJfcG9ydCIsIlNFUlZFUiIsIlBPUlQiLCJET01BSU4iLCJJUCIsIlBFRVJfUE9SVCIsIlBST1RPQ09MIiwiQVNTRVQiLCJwb3J0X3VybCIsInByb3RvY29sIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlJlZHVjZXIiLCJzdWJzY3JpYmUiLCJnZXRTdGF0ZSIsIlN0b3JhZ2UiLCJSZWFjdERPTSIsInJlbmRlciIsImdsb2JhbFN0cmVhbSIsInNldFRpbWVvdXQiLCJpbnN0YW5jZUNvbXBvbmVudCIsImRhdGEiLCJ0b2tlbnNVc2VyIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzcG9uc2UiLCJjb2RlIiwiRXJyb3IiLCJwYXJzZUludCIsImxvY2F0aW9uIiwiaHJlZiIsInVzZXJMb2dpbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJkYXRhRmV0Y2hDaGFubmVsIiwiZmV0Y2hDaGFubmVsTWVzc2FnZSIsImRhdGFDaGFubmVsIiwiaGFzQWRtaW5DaGFubmVsIiwiaUNoYW5uZWwiLCJtYXRjaCIsImdldENoYW5uZWxBZG1pbiIsInJlc2Zlc2hUb2tlbklmRXhwaXJlIiwicmVzZmVzaFRva2VuRXhwaXJlIiwiQXBwbGljYXRpb25Eb20iLCJzb2NrZXRMaXN0ZW5uZXIiLCJjYWxsZXIiLCJvcGVuU3RyZWFtIiwic3RyZWFtIiwicGxheVN0cmVhbSIsImdldFBlZXJVc2VyQ2hhbm5lbCIsIlNFTkRfTUVTU0FHRSIsImRhdGFGZXRjaCIsIlNFTkRfVFlQSU5HIiwiU0laRV9MSU1JVCIsInNpemUiLCJoYW5kbGVFcnJvclVwbG9hZEZpbGUiLCJkYXRhRmlsZSIsImZvcm0iLCJGb3JtRGF0YSIsImFwcGVuZCIsImFqYXgiLCJlbmN0eXBlIiwiY2FjaGUiLCJjb250ZW50VHlwZSIsInByb2Nlc3NEYXRhIiwic3VjY2VzcyIsInBhcnNlIiwicmVXcml0ZVVybCIsInNldEF0dHJpYnV0ZSIsInR5cGVGaWxlIiwiZmlsZV9uYW1lIiwiZXh0ZW50aW9uVHlwZSIsImdldFR5cGVGaWxlIiwiaW5uZXJIZWlnaHQiLCJleGlzdE5vbmVSZWFkIiwic29tZSIsIlJFQURfTUVTU0FHRV9BTEwiLCJ1c2VyTG9jYWwiLCJnZXRJdGVtIiwiZmlsZW5hbWUiLCJ2YWxpZGF0ZUZldGNoQ2hhbm5lbE1lc3NhZ2UiLCJicm93c2VyIiwiYnJvd3Nlck1ham9yVmVyc2lvbiIsImJyb3dzZXJWZXJzaW9uIiwib3MiLCJvc1ZlcnNpb24iLCJpc1ZhbGlkIiwiSURfVklFV19VU0VSX0NIQVQiLCJ1c2VySWRBY3RpdmVDaGFubmVsIiwibG9jYWxVc2VySWQiLCJyZWZlcmVuY2VVc2VySWQiLCJuZXdDaGFubmVsQWRtaW4iLCJVU0VSX09OTElORV9OT1RJIiwiVVNFUl9PRkZMSU5FX05PVEkiLCJSRVNQT05TRV9NRVNTQUdFIiwidG9rZW4iLCJSRVNQT05TRV9UWVBJTkciLCJ0aW1lb3V0VHlwaW5nIiwiY2xlYXJUaW1lb3V0IiwiZG9tVHlwaW5nIiwiRFVQTElDQVRJT05fVEFCIiwiUkVBRF9NRVNTQUdFX0FMTF9SRVNQT05TRSIsImFjdGlvbiIsImRldGVjdENsaWVudCIsInVua25vd24iLCJuVmVyIiwibmF2aWdhdG9yIiwiYXBwVmVyc2lvbiIsIm5BZ3QiLCJ1c2VyQWdlbnQiLCJhcHBOYW1lIiwidmVyc2lvbiIsInBhcnNlRmxvYXQiLCJtYWpvclZlcnNpb24iLCJuYW1lT2Zmc2V0IiwidmVyT2Zmc2V0IiwiaXgiLCJ0b0xvd2VyQ2FzZSIsInRvVXBwZXJDYXNlIiwiaXNOYU4iLCJjbGllbnRTdHJpbmdzIiwicyIsInIiLCJjcyIsInRlc3QiLCJ0b1N0cmluZyIsIkRldGVjdENsaWVudFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJTb2NrZXRSZWR1Y2VyIiwiQXV0aCIsInVzZXJDaGF0RGVmYXVsdCIsImlzQ2hhbmdlZCIsIm5ld1N0YXRlIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlD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QVUsbUJBQU8sQ0FBQyx5SkFBOEU7QUFDaEcsMEJBQTBCLG1CQUFPLENBQUMsd09BQXVIOztBQUV6Sjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQzs7Ozs7Ozs7Ozs7QUNsQkEsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQyx5TkFBK0c7O0FBRWpKOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7OztBQ2xCQSxlIiwiZmlsZSI6ImpzL2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LmpzXCIsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkdyZWF0IFZpYmVzXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9HcmVhdF9WaWJlcy9HcmVhdFZpYmVzLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNdWxpXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9NdWxpL011bGktVmFyaWFibGVGb250X3dnaHQudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmNoaXZvLU1lZGl1bVxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvQXJjaGl2by9BcmNoaXZvLU1lZGl1bS50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJlbmNoTmluZS1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9CZW5jaE5pbmUvQmVuY2hOaW5lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTYXdhcmFiaS1NaW5jaG8tUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvU2F3YXJhYmlfTWluY2hvL1Nhd2FyYWJpTWluY2hvLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbi5iZy1jaGF0LXRlbWFsYXRlIHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UxZmVmYSwgI2ZjZjdmNCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxufVxcblxcbi53cmFwcGVyLXBhZ2UtY2hhdCB7XFxuICBtYXgtd2lkdGg6IDExMDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG4ud3JhcHBlci1wYWdlLWNoYXQ6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMDtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR3JlYXQgVmliZXNcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0dyZWF0X1ZpYmVzL0dyZWF0VmliZXMtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk11bGlcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L011bGkvTXVsaS1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkFyY2hpdm8tTWVkaXVtXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9BcmNoaXZvL0FyY2hpdm8tTWVkaXVtLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmVuY2hOaW5lLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0JlbmNoTmluZS9CZW5jaE5pbmUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNhd2FyYWJpLU1pbmNoby1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9TYXdhcmFiaV9NaW5jaG8vU2F3YXJhYmlNaW5jaG8tUmVndWxhci50dGZcXFwiKTtcXG59XFxuLmNvbXBvbmVudC1saXN0LWVtb2ppIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHJpZ2h0OiA1MCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGhlaWdodDogMDtcXG59XFxuLmNvbXBvbmVudC1saXN0LWVtb2ppOmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgY29udGVudDogXFxcIi5cXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDA7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jb21wb25lbnQtbGlzdC1lbW9qaS5maXJzdC1zaG93IHtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgYW5pbWF0aW9uLW5hbWU6IHRhZGE7XFxufVxcbi5jb21wb25lbnQtbGlzdC1lbW9qaS5zaG93IHtcXG4gIHZpc2liaWxpdHk6IHVuc2V0O1xcbiAgaGVpZ2h0OiB1bnNldDtcXG4gIGJvdHRvbTogMTAwJTtcXG4gIGxlZnQ6IDIwcHg7XFxuICByaWdodDogMjBweDtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5jb21wb25lbnQtZW1vamkge1xcbiAgd2lkdGg6IDM0cHg7XFxuICBoZWlnaHQ6IDM0cHg7XFxuICBmbG9hdDogbGVmdDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAyNHB4LzEgXFxcIkhFUk8gSWNvbnNcXFwiO1xcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgY29sb3I6ICMwZDQ3YTE7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkdyZWF0IFZpYmVzXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9HcmVhdF9WaWJlcy9HcmVhdFZpYmVzLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNdWxpXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9NdWxpL011bGktVmFyaWFibGVGb250X3dnaHQudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmNoaXZvLU1lZGl1bVxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvQXJjaGl2by9BcmNoaXZvLU1lZGl1bS50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJlbmNoTmluZS1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9CZW5jaE5pbmUvQmVuY2hOaW5lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTYXdhcmFiaS1NaW5jaG8tUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvU2F3YXJhYmlfTWluY2hvL1Nhd2FyYWJpTWluY2hvLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbi5jb21wb25lbnQtaGVhZC1pbmZvIC51c2VyLWFjdGl2ZS1jaGF0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcXG4gIG1pbi1oZWlnaHQ6IDc1cHg7XFxufVxcbi5jb21wb25lbnQtaGVhZC1pbmZvIC51c2VyLWFjdGl2ZS1jaGF0IC5zdGF0ZS1hdmF0YXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIG1pbi13aWR0aDogNDBweDtcXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2Yzc1N2Q7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG59XFxuLmNvbXBvbmVudC1oZWFkLWluZm8gLnVzZXItYWN0aXZlLWNoYXQgLnN0YXRlLWF2YXRhciBpbWcge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtaW4td2lkdGg6IDQwcHg7XFxuICBtaW4taGVpZ2h0OiA0MHB4O1xcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyAudXNlci1hY3RpdmUtY2hhdCAudGV4dC1pbmZvIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogN3B4IDdweCA3cHggNTVweDtcXG4gIGNvbG9yOiAjMGQ0N2ExO1xcbn1cXG4uY29tcG9uZW50LWhlYWQtaW5mbyAudXNlci1hY3RpdmUtY2hhdCAudGV4dC1pbmZvIC5uYW1lIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuLmNvbXBvbmVudC1oZWFkLWluZm8gLnVzZXItYWN0aXZlLWNoYXQgLnRleHQtaW5mbyAudGltZS1vbmxpbmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogIzZjNzU3ZDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcbi5jb21wb25lbnQtaGVhZC1pbmZvIC51c2VyLWFjdGl2ZS1jaGF0IC50ZXh0LWluZm8gLnRpbWUtb25saW5lLmFjdGl2ZS1ub3cge1xcbiAgY29sb3I6ICM4YmMzNGE7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR3JlYXQgVmliZXNcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0dyZWF0X1ZpYmVzL0dyZWF0VmliZXMtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk11bGlcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L011bGkvTXVsaS1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkFyY2hpdm8tTWVkaXVtXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9BcmNoaXZvL0FyY2hpdm8tTWVkaXVtLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmVuY2hOaW5lLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0JlbmNoTmluZS9CZW5jaE5pbmUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNhd2FyYWJpLU1pbmNoby1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9TYXdhcmFiaV9NaW5jaG8vU2F3YXJhYmlNaW5jaG8tUmVndWxhci50dGZcXFwiKTtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogNXB4IDgwcHggMCA4MHB4O1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCB0ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbiAgbWluLWhlaWdodDogMzBweDtcXG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgcmVzaXplOiBub25lO1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCB0ZXh0YXJlYTpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICMwZDQ3YTE7XFxuICBjb2xvcjogIzBkNDdhMTtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgdGV4dGFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCA+IGkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTE7XFxuICBib3R0b206IDIwcHg7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBjb2xvcjogIzBkNmVmZDtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmhlcm8taWNvbi5lbW90aWNvbiB7XFxuICBsZWZ0OiAxMHB4O1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCAuaGVyby1pY29uLmZpbGUge1xcbiAgbGVmdDogNDVweDtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmhlcm8taWNvbi5zZW5kIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHotaW5kZXg6IDE7XFxuICByaWdodDogNDVweDtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmhlcm8taWNvbi5yZWFjdCB7XFxuICB6LWluZGV4OiAxO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcmlnaHQ6IDEwcHg7XFxufVxcbi5jb21wb25lbnQtaW5wdXQtc2VuZC1jaGF0IC5pbWFnZS1ibG9jayAucmVtb3ZlLWltYWdlIHtcXG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgLmltYWdlLWJsb2NrIC5yZW1vdmUtaW1hZ2U6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1cHg7XFxuICByaWdodDogNXB4O1xcbiAgY29udGVudDogXFxcIvOwhZdcXFwiO1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAyNHB4LzEgXFxcIkhFUk8gSWNvbnNcXFwiO1xcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCAuaW1hZ2UtYmxvY2sgLnJlbW92ZS1pbWFnZTpob3ZlciBpbWcge1xcbiAgb3BhY2l0eTogMC40O1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCAuaW1hZ2UtYmxvY2sgLnJlbW92ZS1pbWFnZTpob3ZlcjphZnRlciB7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIGFuaW1hdGlvbi1uYW1lOiB0YWRhO1xcbn1cXG4uY29tcG9uZW50LWlucHV0LXNlbmQtY2hhdCAuaW1hZ2UtYmxvY2sgaW1nIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG9wYWNpdHk6IDAuOTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR3JlYXQgVmliZXNcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0dyZWF0X1ZpYmVzL0dyZWF0VmliZXMtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk11bGlcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L011bGkvTXVsaS1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkFyY2hpdm8tTWVkaXVtXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9BcmNoaXZvL0FyY2hpdm8tTWVkaXVtLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmVuY2hOaW5lLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0JlbmNoTmluZS9CZW5jaE5pbmUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNhd2FyYWJpLU1pbmNoby1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9TYXdhcmFiaV9NaW5jaG8vU2F3YXJhYmlNaW5jaG8tUmVndWxhci50dGZcXFwiKTtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2Uge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB3aWR0aDogNzAlO1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTllY2VmO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgc2Nyb2xsYmFyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMykgI0Y1RjVGNTtcXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbiAhaW1wb3J0YW50O1xcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMDtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTo6LW1vei1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxufVxcbi5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZTo6LW1vei1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6Oi1vLXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOjotby1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1vLWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuLmNvbXBvbmVudC1saXN0LW1lc3NhZ2UgLndyYXBwZXItbGlzdC1tZXNzYWdlOjotbXMtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcbn1cXG4uY29tcG9uZW50LWxpc3QtbWVzc2FnZSAud3JhcHBlci1saXN0LW1lc3NhZ2U6Oi1tcy1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1tcy1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcblxcbi50aWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtaW4td2lkdGg6IDMwcHg7XFxufVxcbi50aWNvbnRhaW5lciAudGlibG9jayB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTdweDtcXG59XFxuLnRpY29udGFpbmVyIC50aWJsb2NrIC50aWRvdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRiNWJkO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IG1lcmN1cnlUeXBpbmdBbmltYXRpb24gMS41cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcXG4gIGFuaW1hdGlvbjogbWVyY3VyeVR5cGluZ0FuaW1hdGlvbiAxLjVzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiA2cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcXG4gIHdpZHRoOiA2cHg7XFxufVxcbi50aWNvbnRhaW5lciAudGlibG9jayAudGlkb3Q6bnRoLWNoaWxkKDEpIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxNTBtcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMjAwbXM7XFxufVxcbi50aWNvbnRhaW5lciAudGlibG9jayAudGlkb3Q6bnRoLWNoaWxkKDIpIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAzMDBtcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMzAwbXM7XFxufVxcbi50aWNvbnRhaW5lciAudGlibG9jayAudGlkb3Q6bnRoLWNoaWxkKDMpIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA0NTBtcztcXG4gIGFuaW1hdGlvbi1kZWxheTogNDAwbXM7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBtZXJjdXJ5VHlwaW5nQW5pbWF0aW9uIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gIH1cXG4gIDI4JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcbiAgfVxcbiAgNDQlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcbiAgLmNvbXBvbmVudC1saXN0LW1lc3NhZ2Uge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuY29tcG9uZW50LWxpc3QtbWVzc2FnZSB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA3NXB4KTtcXG4gIH1cXG4gIC5jb21wb25lbnQtbGlzdC1tZXNzYWdlIC53cmFwcGVyLWxpc3QtbWVzc2FnZSB7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICB9XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkdyZWF0IFZpYmVzXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9HcmVhdF9WaWJlcy9HcmVhdFZpYmVzLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNdWxpXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9NdWxpL011bGktVmFyaWFibGVGb250X3dnaHQudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmNoaXZvLU1lZGl1bVxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvQXJjaGl2by9BcmNoaXZvLU1lZGl1bS50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJlbmNoTmluZS1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9CZW5jaE5pbmUvQmVuY2hOaW5lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTYXdhcmFiaS1NaW5jaG8tUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvU2F3YXJhYmlfTWluY2hvL1Nhd2FyYWJpTWluY2hvLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC5ub25lLXJlYWQtbWVzc2FnZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHBhZGRpbmc6IDNweCA2cHg7XFxuICBib3R0b206IDMwJTtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcXG4gIGNvbG9yOiAjZTllY2VmO1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQge1xcbiAgbWluLWhlaWdodDogNTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0LmFjdGl2ZS1tZXNzYWdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjN2M2YzY7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdC5hY3RpdmUgLnN0YXRlLWF2YXRhciB7XFxuICBib3JkZXItY29sb3I6ICMyOGE3NDU7XFxufVxcbi5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdC5hY3RpdmUgLnN0YXRlLWF2YXRhcjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQgLnN0YXRlLWF2YXRhciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbWluLXdpZHRoOiA0MHB4O1xcbiAgbWluLWhlaWdodDogNDBweDtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzZjNzU3ZDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQgLnN0YXRlLWF2YXRhcjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiA1MCU7XFxuICB6LWluZGV4OiA1O1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FkYjViZDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQgLnN0YXRlLWF2YXRhciBpbWcge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtaW4td2lkdGg6IDQwcHg7XFxuICBtaW4taGVpZ2h0OiA0MHB4O1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQgLnRleHQtaW5mbyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDAgMCAwIDU1cHg7XFxuICBjb2xvcjogIzBkNDdhMTtcXG59XFxuLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0IC50ZXh0LWluZm8gLm5hbWUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG4uY29tcG9uZW50LXVzZXItY2hhdC1zaWRlYmFyIC51c2VyLWNoYXQgLnRleHQtaW5mbyAubGFzdC1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLmNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhciAudXNlci1jaGF0LmFjdGl2ZS1tZXNzYWdlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FkYjViZDtcXG4gIH1cXG4gIC5jb21wb25lbnQtdXNlci1jaGF0LXNpZGViYXIgLnVzZXItY2hhdCAudGV4dC1pbmZvIHtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIH1cXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR3JlYXQgVmliZXNcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0dyZWF0X1ZpYmVzL0dyZWF0VmliZXMtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk11bGlcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L011bGkvTXVsaS1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkFyY2hpdm8tTWVkaXVtXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9BcmNoaXZvL0FyY2hpdm8tTWVkaXVtLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQmVuY2hOaW5lLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0JlbmNoTmluZS9CZW5jaE5pbmUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNhd2FyYWJpLU1pbmNoby1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9TYXdhcmFiaV9NaW5jaG8vU2F3YXJhYmlNaW5jaG8tUmVndWxhci50dGZcXFwiKTtcXG59XFxuLmxlZnQtbWVzc2FnZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcbn1cXG4ubGVmdC1tZXNzYWdlIC5yZWFkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCB7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdDphZnRlciB7XFxuICBjbGVhcjogYm90aDtcXG4gIGNvbnRlbnQ6IFxcXCIuXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAwO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdC50eXBpbmctY2hhdC1tZXNzc2FnZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0yNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhZGI1YmQ7XFxuICBsZWZ0OiA1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQudHlwaW5nLWNoYXQtbWVzc3NhZ2Uuc2hvdyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQudHlwaW5nLWNoYXQtbWVzc3NhZ2UgLnR5cGluZy1tZXNzYWdlIC50ZXh0IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgcGFkZGluZzogMnB4IDEwcHggIWltcG9ydGFudDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXA6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxuICBjb250ZW50OiBcXFwiLlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMDtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAuYnktbWUgLmF2YXRhciB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwLmJ5LW1lIC5tZXNzYWdlLWNvbnRlbnQgLnRleHQge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMjEwZGVnLCAjZjhmOWZhLCAjYWRiNWJkKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMjEwZGVnLCAjZjhmOWZhLCAjYWRiNWJkKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDIxMGRlZywgI2Y4ZjlmYSwgI2FkYjViZCkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoMjEwZGVnLCAjZjhmOWZhLCAjYWRiNWJkKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIxMGRlZywgI2Y4ZjlmYSwgI2FkYjViZCkgIWltcG9ydGFudDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAuYnktbWUgLkVNT0pJIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAuYXZhdGFyIHtcXG4gIG1heC13aWR0aDogNDBweDtcXG4gIG1heC1oZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5hdmF0YXIgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAubWVzc2FnZS1jb250ZW50IHtcXG4gIHBhZGRpbmctbGVmdDogNTBweDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudC50eXBpbmctbWVzc2FnZSB7XFxuICBwYWRkaW5nLWxlZnQ6IDBweDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudCAuSU1BR0Uge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAubWVzc2FnZS1jb250ZW50IC5JTUFHRSAud3JhcHBlci1hdHRhY2htZW50IHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1heC13aWR0aDogMjAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQgLklNQUdFIC53cmFwcGVyLWF0dGFjaG1lbnQgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAubWVzc2FnZS1jb250ZW50IC5JTUFHRSAud3JhcHBlci1hdHRhY2htZW50IC5kb3dubG9hZC1maWxlLWF0dGFjaG1lbnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1JTtcXG4gIHJpZ2h0OiA1JTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWUyZTY7XFxuICBjb2xvcjogIzBkNDdhMTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHBhZGRpbmc6IDNweCAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzBkNDdhMTtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLm1lc3NhZ2UtY29udGVudCAuSU1BR0UgLndyYXBwZXItYXR0YWNobWVudCAuZG93bmxvYWQtZmlsZS1hdHRhY2htZW50IGkge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAubWVzc2FnZS1jb250ZW50IC5FTU9KSSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG4uY29tcG9uZW50LW1lc3NhZ2UtY2hhdCAuY2hhdC1ncm91cCAubWVzc2FnZS1jb250ZW50IC50ZXh0IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZjlmYSwgIzZmNDJjMSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZjlmYSwgIzZmNDJjMSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGY5ZmEsICM2ZjQyYzEpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZjlmYSwgIzZmNDJjMSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGY5ZmEsICM2ZjQyYzEpICFpbXBvcnRhbnQ7XFxufVxcbi5jb21wb25lbnQtbWVzc2FnZS1jaGF0IC5jaGF0LWdyb3VwIC5tZXNzYWdlLWNvbnRlbnQgLnRleHQuRU1PSkkge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLnR5cGluZy1tZXNzYWdlIC50ZXh0IHtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG59XFxuLmNvbXBvbmVudC1tZXNzYWdlLWNoYXQgLmNoYXQtZ3JvdXAgLnR5cGluZy1tZXNzYWdlIC50eXBpbmctdGV4dCB7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkdyZWF0IFZpYmVzXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9HcmVhdF9WaWJlcy9HcmVhdFZpYmVzLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNdWxpXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9NdWxpL011bGktVmFyaWFibGVGb250X3dnaHQudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmNoaXZvLU1lZGl1bVxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvQXJjaGl2by9BcmNoaXZvLU1lZGl1bS50dGZcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkJlbmNoTmluZS1SZWd1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9CZW5jaE5pbmUvQmVuY2hOaW5lLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTYXdhcmFiaS1NaW5jaG8tUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvU2F3YXJhYmlfTWluY2hvL1Nhd2FyYWJpTWluY2hvLVJlZ3VsYXIudHRmXFxcIik7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0IHtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgd2lkdGg6IDMwJTtcXG4gIHNjcm9sbGJhci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpICNGNUY1RjU7XFxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW4gIWltcG9ydGFudDtcXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdDo6LW1vei1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0OjotbW96LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0Ojotby1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0Ojotby1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC1vLWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG59XFxuLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQ6Oi1tcy1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxufVxcbi5jb21wb25lbnQtc2lkZWJhci1jaGF0OjotbXMtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtbXMtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbn1cXG4uY29tcG9uZW50LXNpZGViYXItY2hhdCAqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5teWluZm8ge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xcbiAgbWluLWhlaWdodDogNzVweDtcXG59XFxuLm15aW5mbyAuYXZhdGFyIC5zdGF0ZS1hdmF0YXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcbi5teWluZm8gLmF2YXRhciAuc3RhdGUtYXZhdGFyOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIuXFxcIjtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMXB4O1xcbiAgbGVmdDogMXB4O1xcbiAgcmlnaHQ6IDFweDtcXG4gIGJvdHRvbTogMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAycHggZG91YmxlICM5MTc1Y2E7XFxufVxcbi5teWluZm8gLmF2YXRhciAuc3RhdGUtYXZhdGFyLmFjdGl2ZS1vbmxpbmUge1xcbiAgYm9yZGVyOiAycHggZG91YmxlICMwMGM4NTE7XFxufVxcbi5teWluZm8gLmF2YXRhciAuc3RhdGUtYXZhdGFyIGltZyB7XFxuICBtYXgtd2lkdGg6IDQwcHg7XFxuICBtYXgtaGVpZ2h0OiA0MHB4O1xcbn1cXG4ubXlpbmZvIC5hdmF0YXIgLm5hbWUge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIG1heC13aWR0aDogMjdjaDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY29sb3I6ICMwZDQ3YTE7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcXG4gIC5jb21wb25lbnQtc2lkZWJhci1jaGF0IHtcXG4gICAgd2lkdGg6IDQwJTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLmNvbXBvbmVudC1zaWRlYmFyLWNoYXQge1xcbiAgICB3aWR0aDogNzVweDtcXG4gIH1cXG4gIC5jb21wb25lbnQtc2lkZWJhci1jaGF0IC51c2VyLWNoYXQgLnN0YXRlLWF2YXRhciB7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSAhaW1wb3J0YW50O1xcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpICFpbXBvcnRhbnQ7XFxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpICFpbXBvcnRhbnQ7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLm15aW5mbyB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuICAubXlpbmZvIC5hdmF0YXIgLnN0YXRlLWF2YXRhciBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDM1cHg7XFxuICAgIG1heC1oZWlnaHQ6IDM1cHg7XFxuICB9XFxuICAubXlpbmZvIC5hdmF0YXIgLm5hbWUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHcmVhdCBWaWJlc1xcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvR3JlYXRfVmliZXMvR3JlYXRWaWJlcy1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXVsaVxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvTXVsaS9NdWxpLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXJjaGl2by1NZWRpdW1cXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L0FyY2hpdm8vQXJjaGl2by1NZWRpdW0udHRmXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCZW5jaE5pbmUtUmVndWxhclxcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvQmVuY2hOaW5lL0JlbmNoTmluZS1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2F3YXJhYmktTWluY2hvLVJlZ3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXFxcImh0dHA6Ly9iYWJ5c2l0dGVyLnRydXN0LWdyb3d0aC5jby5qcC9mb250L1Nhd2FyYWJpX01pbmNoby9TYXdhcmFiaU1pbmNoby1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG4vKipcXG4qIGRpc3BsYXlcXG4qL1xcbiosXFxuOmFmdGVyLFxcbjpiZWZvcmUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOmZvY3VzIHtcXG4gIG91dGxpbmU6IDAgIWltcG9ydGFudDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZC1ub25lIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmQtaW5saW5lLWJsb2NrIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZC1ibG9jayB7XFxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZC10YWJsZSB7XFxuICBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZC10YWJsZS1yb3cge1xcbiAgZGlzcGxheTogdGFibGUtcm93ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kLXRhYmxlLWNlbGwge1xcbiAgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZC1mbGV4IHtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94ICFpbXBvcnRhbnQ7XFxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kLWlubGluZS1mbGV4IHtcXG4gIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveCAhaW1wb3J0YW50O1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcXG59XFxuXFxuLml0YWxpYyB7XFxuICBmb250LXN0eWxlOiBpdGFsaWMgIWltcG9ydGFudDtcXG59XFxuXFxuLm5vdC1pdGFsaWMge1xcbiAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XFxufVxcblxcbi51cHBlcmNhc2Uge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubG93ZXJjYXNlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcXG59XFxuXFxuLmNhcGl0YWxpemUge1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcXG59XFxuXFxuLm5vcm1hbC1jYXNlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi51bmRlcmxpbmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmxpbmUtdGhyb3VnaCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaCAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubm8tdW5kZXJsaW5lIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmZvbnQtaGFpcmxpbmUge1xcbiAgZm9udC13ZWlnaHQ6IDEwMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZm9udC10aGluIHtcXG4gIGZvbnQtd2VpZ2h0OiAyMDAgIWltcG9ydGFudDtcXG59XFxuXFxuLmZvbnQtbGlnaHQge1xcbiAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZm9udC1ub3JtYWwge1xcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZm9udC1tZWRpdW0ge1xcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZm9udC1zZW1pYm9sZCB7XFxuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mb250LWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZm9udC1leHRyYWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZm9udC1ibGFjayB7XFxuICBmb250LXdlaWdodDogOTAwICFpbXBvcnRhbnQ7XFxufVxcblxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50ZXh0LXJpZ2h0IHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4udGV4dC1sZWZ0IHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi52ZXJ0aWNhbC1hbGlnbi1taWRkbGUge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLm1nLWF1dG8ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5yb3VuZGVkLWNpcmNsZSB7XFxuICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcXG59XFxuXFxuLmJvcmRlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ib3JkZXItdG9wIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ib3JkZXItcmlnaHQge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RlZTJlNiAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYm9yZGVyLWJvdHRvbSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNiAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYm9yZGVyLWxlZnQge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGVlMmU2ICFpbXBvcnRhbnQ7XFxufVxcblxcbi50ZXh0LWNvbG9yLXJlZCB7XFxuICBjb2xvcjogI2Y0NDMzNjtcXG59XFxuXFxuLnRleHQtY29sb3ItcGluayB7XFxuICBjb2xvcjogI2U5MWU2MztcXG59XFxuXFxuLnRleHQtY29sb3ItcHVycGxlIHtcXG4gIGNvbG9yOiAjOWMyN2IwO1xcbn1cXG5cXG4udGV4dC1jb2xvci1kZWVwLXB1cnBsZSB7XFxuICBjb2xvcjogIzY3M2FiNztcXG59XFxuXFxuLnRleHQtY29sb3ItaW5kaWdvIHtcXG4gIGNvbG9yOiAjM2Y1MWI1O1xcbn1cXG5cXG4udGV4dC1jb2xvci1ibHVlIHtcXG4gIGNvbG9yOiAjMjE5NmYzO1xcbn1cXG5cXG4udGV4dC1jb2xvci1saWdodC1ibHVlIHtcXG4gIGNvbG9yOiAjMDNhOWY0O1xcbn1cXG5cXG4udGV4dC1jb2xvci1jeWFuIHtcXG4gIGNvbG9yOiAjMDBiY2Q0O1xcbn1cXG5cXG4udGV4dC1jb2xvci10ZWFsIHtcXG4gIGNvbG9yOiAjMDA5Njg4O1xcbn1cXG5cXG4udGV4dC1jb2xvci1ncmVlbiB7XFxuICBjb2xvcjogIzRjYWY1MDtcXG59XFxuXFxuLnRleHQtY29sb3ItbGlnaHQtZ3JlZW4ge1xcbiAgY29sb3I6ICM4YmMzNGE7XFxufVxcblxcbi50ZXh0LWNvbG9yLWxpbWUge1xcbiAgY29sb3I6ICNjZGRjMzk7XFxufVxcblxcbi50ZXh0LWNvbG9yLXllbGxvdyB7XFxuICBjb2xvcjogI2ZmZWIzYjtcXG59XFxuXFxuLnRleHQtY29sb3ItYW1iZXIge1xcbiAgY29sb3I6ICNmZmMxMDc7XFxufVxcblxcbi50ZXh0LWNvbG9yLW9yYW5nZSB7XFxuICBjb2xvcjogI2ZmOTgwMDtcXG59XFxuXFxuLnRleHQtY29sb3ItZGVlcC1vcmFuZ2Uge1xcbiAgY29sb3I6ICNmZjU3MjI7XFxufVxcblxcbi50ZXh0LWNvbG9yLWJyb3duIHtcXG4gIGNvbG9yOiAjNzk1NTQ4O1xcbn1cXG5cXG4udGV4dC1jb2xvci1ibGFjayB7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuXFxuLnRleHQtY29sb3Itd2hpdGUge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi50ZXh0LWNvbG9yLWdyZXkge1xcbiAgY29sb3I6ICM5ZTllOWU7XFxufVxcblxcbi50ZXh0LWNvbG9yLWJsdWUtZ3JleSB7XFxuICBjb2xvcjogIzYwN2Q4YjtcXG59XFxuXFxuLnRleHQtY29sb3ItcHJpbWFyeS1jb2xvci1kYXJrIHtcXG4gIGNvbG9yOiAjMGQ0N2ExO1xcbn1cXG5cXG4udGV4dC1jb2xvci1zZWNvbmRhcnktY29sb3Ige1xcbiAgY29sb3I6ICNhYTY2Y2M7XFxufVxcblxcbi50ZXh0LWNvbG9yLXNlY29uZGFyeS1jb2xvci1kYXJrIHtcXG4gIGNvbG9yOiAjOTkzM2NjO1xcbn1cXG5cXG4udGV4dC1jb2xvci1kZWZhdWx0LWNvbG9yIHtcXG4gIGNvbG9yOiAjMmJiYmFkO1xcbn1cXG5cXG4udGV4dC1jb2xvci1kZWZhdWx0LWNvbG9yLWRhcmsge1xcbiAgY29sb3I6ICMwMDY5NWM7XFxufVxcblxcbi50ZXh0LWNvbG9yLWluZm8tY29sb3Ige1xcbiAgY29sb3I6ICMzM2I1ZTU7XFxufVxcblxcbi50ZXh0LWNvbG9yLWluZm8tY29sb3ItZGFyayB7XFxuICBjb2xvcjogIzAwOTljYztcXG59XFxuXFxuLnRleHQtY29sb3Itc3VjY2Vzcy1jb2xvciB7XFxuICBjb2xvcjogIzAwYzg1MTtcXG59XFxuXFxuLnRleHQtY29sb3Itc3VjY2Vzcy1jb2xvci1kYXJrIHtcXG4gIGNvbG9yOiAjMDA3ZTMzO1xcbn1cXG5cXG4udGV4dC1jb2xvci13YXJuaW5nLWNvbG9yIHtcXG4gIGNvbG9yOiAjZmZiYjMzO1xcbn1cXG5cXG4udGV4dC1jb2xvci13YXJuaW5nLWNvbG9yLWRhcmsge1xcbiAgY29sb3I6ICNmZjg4MDA7XFxufVxcblxcbi50ZXh0LWNvbG9yLWRhbmdlci1jb2xvciB7XFxuICBjb2xvcjogI2ZmMzU0NztcXG59XFxuXFxuLnRleHQtY29sb3ItZGFuZ2VyLWNvbG9yLWRhcmsge1xcbiAgY29sb3I6ICNjYzAwMDA7XFxufVxcblxcbi50ZXh0LWNvbG9yLWVsZWdhbnQtY29sb3Ige1xcbiAgY29sb3I6ICMyZTJlMmU7XFxufVxcblxcbi50ZXh0LWNvbG9yLWVsZWdhbnQtY29sb3ItZGFyayB7XFxuICBjb2xvcjogIzIxMjEyMTtcXG59XFxuXFxuLnRleHQtY29sb3Itc3R5bGlzaC1jb2xvciB7XFxuICBjb2xvcjogIzRiNTE1ZDtcXG59XFxuXFxuLnRleHQtY29sb3Itc3R5bGlzaC1jb2xvci1kYXJrIHtcXG4gIGNvbG9yOiAjM2U0NTUxO1xcbn1cXG5cXG4udGV4dC1jb2xvci11bmlxdWUtY29sb3Ige1xcbiAgY29sb3I6ICMzZjcyOWI7XFxufVxcblxcbi50ZXh0LWNvbG9yLXVuaXF1ZS1jb2xvci1kYXJrIHtcXG4gIGNvbG9yOiAjMWMyMzMxO1xcbn1cXG5cXG4udGV4dC1jb2xvci1zcGVjaWFsLWNvbG9yIHtcXG4gIGNvbG9yOiAjMzc0NzRmO1xcbn1cXG5cXG4udGV4dC1jb2xvci1zcGVjaWFsLWNvbG9yLWRhcmsge1xcbiAgY29sb3I6ICMyNjMyMzg7XFxufVxcblxcbi50ZXh0LWNvbG9yLXByaW1hcnkge1xcbiAgY29sb3I6ICM0Mjg1ZjQ7XFxufVxcblxcbi50ZXh0LWNvbG9yLWRhbmdlciB7XFxuICBjb2xvcjogI2ZmMzU0NztcXG59XFxuXFxuLnRleHQtY29sb3Itd2FybmluZyB7XFxuICBjb2xvcjogI2ZmYmIzMztcXG59XFxuXFxuLnRleHQtY29sb3Itc3VjY2VzcyB7XFxuICBjb2xvcjogIzAwYzg1MTtcXG59XFxuXFxuLnRleHQtY29sb3ItaW5mbyB7XFxuICBjb2xvcjogIzMzYjVlNTtcXG59XFxuXFxuLnRleHQtY29sb3ItZGVmYXVsdCB7XFxuICBjb2xvcjogIzJiYmJhZDtcXG59XFxuXFxuLnRleHQtY29sb3Itc2Vjb25kYXJ5IHtcXG4gIGNvbG9yOiAjYWE2NmNjO1xcbn1cXG5cXG4udGV4dC1jb2xvci1kYXJrIHtcXG4gIGNvbG9yOiAjMjEyMTIxO1xcbn1cXG5cXG4udGV4dC1jb2xvci1saWdodCB7XFxuICBjb2xvcjogI2UwZTBlMDtcXG59XFxuXFxuLnRleHQtY29sb3ItZ3JleS14IHtcXG4gIGNvbG9yOiAjZjlmOWY5O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXJlZCB7XFxuICBib3JkZXItY29sb3I6ICNmNDQzMzY7XFxufVxcblxcbi5ib3JkZXItY29sb3ItcGluayB7XFxuICBib3JkZXItY29sb3I6ICNlOTFlNjM7XFxufVxcblxcbi5ib3JkZXItY29sb3ItcHVycGxlIHtcXG4gIGJvcmRlci1jb2xvcjogIzljMjdiMDtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1kZWVwLXB1cnBsZSB7XFxuICBib3JkZXItY29sb3I6ICM2NzNhYjc7XFxufVxcblxcbi5ib3JkZXItY29sb3ItaW5kaWdvIHtcXG4gIGJvcmRlci1jb2xvcjogIzNmNTFiNTtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1ibHVlIHtcXG4gIGJvcmRlci1jb2xvcjogIzIxOTZmMztcXG59XFxuXFxuLmJvcmRlci1jb2xvci1saWdodC1ibHVlIHtcXG4gIGJvcmRlci1jb2xvcjogIzAzYTlmNDtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1jeWFuIHtcXG4gIGJvcmRlci1jb2xvcjogIzAwYmNkNDtcXG59XFxuXFxuLmJvcmRlci1jb2xvci10ZWFsIHtcXG4gIGJvcmRlci1jb2xvcjogIzAwOTY4ODtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1ncmVlbiB7XFxuICBib3JkZXItY29sb3I6ICM0Y2FmNTA7XFxufVxcblxcbi5ib3JkZXItY29sb3ItbGlnaHQtZ3JlZW4ge1xcbiAgYm9yZGVyLWNvbG9yOiAjOGJjMzRhO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWxpbWUge1xcbiAgYm9yZGVyLWNvbG9yOiAjY2RkYzM5O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXllbGxvdyB7XFxuICBib3JkZXItY29sb3I6ICNmZmViM2I7XFxufVxcblxcbi5ib3JkZXItY29sb3ItYW1iZXIge1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZjMTA3O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLW9yYW5nZSB7XFxuICBib3JkZXItY29sb3I6ICNmZjk4MDA7XFxufVxcblxcbi5ib3JkZXItY29sb3ItZGVlcC1vcmFuZ2Uge1xcbiAgYm9yZGVyLWNvbG9yOiAjZmY1NzIyO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWJyb3duIHtcXG4gIGJvcmRlci1jb2xvcjogIzc5NTU0ODtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1ibGFjayB7XFxuICBib3JkZXItY29sb3I6ICMwMDA7XFxufVxcblxcbi5ib3JkZXItY29sb3Itd2hpdGUge1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWdyZXkge1xcbiAgYm9yZGVyLWNvbG9yOiAjOWU5ZTllO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWJsdWUtZ3JleSB7XFxuICBib3JkZXItY29sb3I6ICM2MDdkOGI7XFxufVxcblxcbi5ib3JkZXItY29sb3ItcHJpbWFyeS1jb2xvci1kYXJrIHtcXG4gIGJvcmRlci1jb2xvcjogIzBkNDdhMTtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1zZWNvbmRhcnktY29sb3Ige1xcbiAgYm9yZGVyLWNvbG9yOiAjYWE2NmNjO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXNlY29uZGFyeS1jb2xvci1kYXJrIHtcXG4gIGJvcmRlci1jb2xvcjogIzk5MzNjYztcXG59XFxuXFxuLmJvcmRlci1jb2xvci1kZWZhdWx0LWNvbG9yIHtcXG4gIGJvcmRlci1jb2xvcjogIzJiYmJhZDtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1kZWZhdWx0LWNvbG9yLWRhcmsge1xcbiAgYm9yZGVyLWNvbG9yOiAjMDA2OTVjO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWluZm8tY29sb3Ige1xcbiAgYm9yZGVyLWNvbG9yOiAjMzNiNWU1O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWluZm8tY29sb3ItZGFyayB7XFxuICBib3JkZXItY29sb3I6ICMwMDk5Y2M7XFxufVxcblxcbi5ib3JkZXItY29sb3Itc3VjY2Vzcy1jb2xvciB7XFxuICBib3JkZXItY29sb3I6ICMwMGM4NTE7XFxufVxcblxcbi5ib3JkZXItY29sb3Itc3VjY2Vzcy1jb2xvci1kYXJrIHtcXG4gIGJvcmRlci1jb2xvcjogIzAwN2UzMztcXG59XFxuXFxuLmJvcmRlci1jb2xvci13YXJuaW5nLWNvbG9yIHtcXG4gIGJvcmRlci1jb2xvcjogI2ZmYmIzMztcXG59XFxuXFxuLmJvcmRlci1jb2xvci13YXJuaW5nLWNvbG9yLWRhcmsge1xcbiAgYm9yZGVyLWNvbG9yOiAjZmY4ODAwO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWRhbmdlci1jb2xvciB7XFxuICBib3JkZXItY29sb3I6ICNmZjM1NDc7XFxufVxcblxcbi5ib3JkZXItY29sb3ItZGFuZ2VyLWNvbG9yLWRhcmsge1xcbiAgYm9yZGVyLWNvbG9yOiAjY2MwMDAwO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWVsZWdhbnQtY29sb3Ige1xcbiAgYm9yZGVyLWNvbG9yOiAjMmUyZTJlO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWVsZWdhbnQtY29sb3ItZGFyayB7XFxuICBib3JkZXItY29sb3I6ICMyMTIxMjE7XFxufVxcblxcbi5ib3JkZXItY29sb3Itc3R5bGlzaC1jb2xvciB7XFxuICBib3JkZXItY29sb3I6ICM0YjUxNWQ7XFxufVxcblxcbi5ib3JkZXItY29sb3Itc3R5bGlzaC1jb2xvci1kYXJrIHtcXG4gIGJvcmRlci1jb2xvcjogIzNlNDU1MTtcXG59XFxuXFxuLmJvcmRlci1jb2xvci11bmlxdWUtY29sb3Ige1xcbiAgYm9yZGVyLWNvbG9yOiAjM2Y3MjliO1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXVuaXF1ZS1jb2xvci1kYXJrIHtcXG4gIGJvcmRlci1jb2xvcjogIzFjMjMzMTtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1zcGVjaWFsLWNvbG9yIHtcXG4gIGJvcmRlci1jb2xvcjogIzM3NDc0ZjtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1zcGVjaWFsLWNvbG9yLWRhcmsge1xcbiAgYm9yZGVyLWNvbG9yOiAjMjYzMjM4O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLXByaW1hcnkge1xcbiAgYm9yZGVyLWNvbG9yOiAjNDI4NWY0O1xcbn1cXG5cXG4uYm9yZGVyLWNvbG9yLWRhbmdlciB7XFxuICBib3JkZXItY29sb3I6ICNmZjM1NDc7XFxufVxcblxcbi5ib3JkZXItY29sb3Itd2FybmluZyB7XFxuICBib3JkZXItY29sb3I6ICNmZmJiMzM7XFxufVxcblxcbi5ib3JkZXItY29sb3Itc3VjY2VzcyB7XFxuICBib3JkZXItY29sb3I6ICMwMGM4NTE7XFxufVxcblxcbi5ib3JkZXItY29sb3ItaW5mbyB7XFxuICBib3JkZXItY29sb3I6ICMzM2I1ZTU7XFxufVxcblxcbi5ib3JkZXItY29sb3ItZGVmYXVsdCB7XFxuICBib3JkZXItY29sb3I6ICMyYmJiYWQ7XFxufVxcblxcbi5ib3JkZXItY29sb3Itc2Vjb25kYXJ5IHtcXG4gIGJvcmRlci1jb2xvcjogI2FhNjZjYztcXG59XFxuXFxuLmJvcmRlci1jb2xvci1kYXJrIHtcXG4gIGJvcmRlci1jb2xvcjogIzIxMjEyMTtcXG59XFxuXFxuLmJvcmRlci1jb2xvci1saWdodCB7XFxuICBib3JkZXItY29sb3I6ICNlMGUwZTA7XFxufVxcblxcbi5ib3JkZXItY29sb3ItZ3JleS14IHtcXG4gIGJvcmRlci1jb2xvcjogI2Y5ZjlmOTtcXG59XFxuXFxuLmJnLWNvbG9yLXJlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xcbn1cXG5cXG4uYmctY29sb3ItcGluayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTkxZTYzO1xcbn1cXG5cXG4uYmctY29sb3ItcHVycGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5YzI3YjA7XFxufVxcblxcbi5iZy1jb2xvci1kZWVwLXB1cnBsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjczYWI3O1xcbn1cXG5cXG4uYmctY29sb3ItaW5kaWdvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XFxufVxcblxcbi5iZy1jb2xvci1ibHVlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XFxufVxcblxcbi5iZy1jb2xvci1saWdodC1ibHVlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwM2E5ZjQ7XFxufVxcblxcbi5iZy1jb2xvci1jeWFuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGJjZDQ7XFxufVxcblxcbi5iZy1jb2xvci10ZWFsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XFxufVxcblxcbi5iZy1jb2xvci1ncmVlbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xcbn1cXG5cXG4uYmctY29sb3ItbGlnaHQtZ3JlZW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiYzM0YTtcXG59XFxuXFxuLmJnLWNvbG9yLWxpbWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NkZGMzOTtcXG59XFxuXFxuLmJnLWNvbG9yLXllbGxvdyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYjNiO1xcbn1cXG5cXG4uYmctY29sb3ItYW1iZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcXG59XFxuXFxuLmJnLWNvbG9yLW9yYW5nZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ODAwO1xcbn1cXG5cXG4uYmctY29sb3ItZGVlcC1vcmFuZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTcyMjtcXG59XFxuXFxuLmJnLWNvbG9yLWJyb3duIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3OTU1NDg7XFxufVxcblxcbi5iZy1jb2xvci1ibGFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbn1cXG5cXG4uYmctY29sb3Itd2hpdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuLmJnLWNvbG9yLWdyZXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzllOWU5ZTtcXG59XFxuXFxuLmJnLWNvbG9yLWJsdWUtZ3JleSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3ZDhiO1xcbn1cXG5cXG4uYmctY29sb3ItcHJpbWFyeS1jb2xvci1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDQ3YTE7XFxufVxcblxcbi5iZy1jb2xvci1zZWNvbmRhcnktY29sb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhNjZjYztcXG59XFxuXFxuLmJnLWNvbG9yLXNlY29uZGFyeS1jb2xvci1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTMzY2M7XFxufVxcblxcbi5iZy1jb2xvci1kZWZhdWx0LWNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYmJiYWQ7XFxufVxcblxcbi5iZy1jb2xvci1kZWZhdWx0LWNvbG9yLWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjk1YztcXG59XFxuXFxuLmJnLWNvbG9yLWluZm8tY29sb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzYjVlNTtcXG59XFxuXFxuLmJnLWNvbG9yLWluZm8tY29sb3ItZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5OWNjO1xcbn1cXG5cXG4uYmctY29sb3Itc3VjY2Vzcy1jb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjODUxO1xcbn1cXG5cXG4uYmctY29sb3Itc3VjY2Vzcy1jb2xvci1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdlMzM7XFxufVxcblxcbi5iZy1jb2xvci13YXJuaW5nLWNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmJiMzM7XFxufVxcblxcbi5iZy1jb2xvci13YXJuaW5nLWNvbG9yLWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODgwMDtcXG59XFxuXFxuLmJnLWNvbG9yLWRhbmdlci1jb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzNTQ3O1xcbn1cXG5cXG4uYmctY29sb3ItZGFuZ2VyLWNvbG9yLWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjMDAwMDtcXG59XFxuXFxuLmJnLWNvbG9yLWVsZWdhbnQtY29sb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmUyZTtcXG59XFxuXFxuLmJnLWNvbG9yLWVsZWdhbnQtY29sb3ItZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xcbn1cXG5cXG4uYmctY29sb3Itc3R5bGlzaC1jb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI1MTVkO1xcbn1cXG5cXG4uYmctY29sb3Itc3R5bGlzaC1jb2xvci1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZTQ1NTE7XFxufVxcblxcbi5iZy1jb2xvci11bmlxdWUtY29sb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNzI5YjtcXG59XFxuXFxuLmJnLWNvbG9yLXVuaXF1ZS1jb2xvci1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzIzMzE7XFxufVxcblxcbi5iZy1jb2xvci1zcGVjaWFsLWNvbG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzQ3NGY7XFxufVxcblxcbi5iZy1jb2xvci1zcGVjaWFsLWNvbG9yLWRhcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MzIzODtcXG59XFxuXFxuLmJnLWNvbG9yLXByaW1hcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyODVmNDtcXG59XFxuXFxuLmJnLWNvbG9yLWRhbmdlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzNTQ3O1xcbn1cXG5cXG4uYmctY29sb3Itd2FybmluZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiYjMzO1xcbn1cXG5cXG4uYmctY29sb3Itc3VjY2VzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjODUxO1xcbn1cXG5cXG4uYmctY29sb3ItaW5mbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNiNWU1O1xcbn1cXG5cXG4uYmctY29sb3ItZGVmYXVsdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmJiYmFkO1xcbn1cXG5cXG4uYmctY29sb3Itc2Vjb25kYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYTY2Y2M7XFxufVxcblxcbi5iZy1jb2xvci1kYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XFxufVxcblxcbi5iZy1jb2xvci1saWdodCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbn1cXG5cXG4uYmctY29sb3ItZ3JleS14IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XFxufVxcblxcbi53LTI1IHtcXG4gIHdpZHRoOiAyNTtcXG59XFxuXFxuLnctNTAge1xcbiAgd2lkdGg6IDUwO1xcbn1cXG5cXG4udy01NSB7XFxuICB3aWR0aDogNTU7XFxufVxcblxcbi53LTYwIHtcXG4gIHdpZHRoOiA2MDtcXG59XFxuXFxuLnctNjUge1xcbiAgd2lkdGg6IDY1O1xcbn1cXG5cXG4udy03MCB7XFxuICB3aWR0aDogNzA7XFxufVxcblxcbi53LTc1IHtcXG4gIHdpZHRoOiA3NTtcXG59XFxuXFxuLnctODAge1xcbiAgd2lkdGg6IDgwO1xcbn1cXG5cXG4udy04NSB7XFxuICB3aWR0aDogODU7XFxufVxcblxcbi53LTkwIHtcXG4gIHdpZHRoOiA5MDtcXG59XFxuXFxuLnctOTUge1xcbiAgd2lkdGg6IDk1O1xcbn1cXG5cXG4udy0xMDAge1xcbiAgd2lkdGg6IDEwMDtcXG59XFxuXFxuLnRleHQteHMge1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbn1cXG5cXG4udGV4dC1zbSB7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbn1cXG5cXG4udGV4dC1iYXNlIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRleHQtbGcge1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG59XFxuXFxuLnRleHQteGwge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4udGV4dC0yeGwge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50ZXh0LTN4bCB7XFxuICBmb250LXNpemU6IDEuODc1cmVtO1xcbn1cXG5cXG4udGV4dC00eGwge1xcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xcbn1cXG5cXG4udGV4dC01eGwge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4udGV4dC02eGwge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG5ib2R5Lm5lby1zY3JvbGwge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsIHNlbGVjdDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMsIG9wdGlvbjpmb2N1cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhYWFhO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1hbmltYXRlLWR1cmF0aW9uOiAxcztcXG4gIC0tYW5pbWF0ZS1kZWxheTogMXM7XFxuICAtLWFuaW1hdGUtbG9vcDogMTtcXG59XFxuXFxuLmFuaW1hdGVkIHtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbn1cXG4uYW5pbWF0ZWQuaW5maW5pdGUge1xcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbn1cXG4uYW5pbWF0ZWQuZmFzdGVyIHtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYygkLS1hbmltYXRlLWR1cmF0aW9uIC8gMik7XFxufVxcbi5hbmltYXRlZC5mYXN0IHtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogY2FsYygkLS1hbmltYXRlLWR1cmF0aW9uICogMC44KTtcXG59XFxuLmFuaW1hdGVkLnNsb3cge1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiBjYWxjKCQtLWFuaW1hdGUtZHVyYXRpb24gKiAyKTtcXG59XFxuLmFuaW1hdGVkLnNsb3dlciB7XFxuICBhbmltYXRpb24tZHVyYXRpb246IGNhbGMoJC0tYW5pbWF0ZS1kdXJhdGlvbiAqIDMpO1xcbn1cXG4uYW5pbWF0ZWQubG9vcC0xIHtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxufVxcbi5hbmltYXRlZC5kZWxheS0xcyB7XFxuICBhbmltYXRpb24tZGVsYXk6IGNhbGMoJC0tYW5pbWF0ZS1kZWxheSAqICRpKTtcXG59XFxuLmFuaW1hdGVkLmxvb3AtMiB7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAyO1xcbn1cXG4uYW5pbWF0ZWQuZGVsYXktMXMge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKCQtLWFuaW1hdGUtZGVsYXkgKiAkaSk7XFxufVxcbi5hbmltYXRlZC5sb29wLTMge1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMztcXG59XFxuLmFuaW1hdGVkLmRlbGF5LTFzIHtcXG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYygkLS1hbmltYXRlLWRlbGF5ICogJGkpO1xcbn1cXG4uYW5pbWF0ZWQubG9vcC00IHtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDQ7XFxufVxcbi5hbmltYXRlZC5kZWxheS0xcyB7XFxuICBhbmltYXRpb24tZGVsYXk6IGNhbGMoJC0tYW5pbWF0ZS1kZWxheSAqICRpKTtcXG59XFxuXFxuQG1lZGlhIHByaW50LCAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XFxuICAuYW5pbWF0ZWQge1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFtcyAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxbXMgIWltcG9ydGFudDtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmFuaW1hdGVkW2NsYXNzKj1PdXRdIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuLmFuaW1hdGVkLWluaXRpYWwge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGluaXRpYWwgIWltcG9ydGFudDtcXG59XFxuXFxuLyogb3JpZ2luYWxseSBhdXRob3JlZCBieSBOaWNrIFBldHRpdCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWNrcGV0dGl0L2dsaWRlICovXFxuQGtleWZyYW1lcyBwdWxzZSB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIDEuMDUsIDEuMDUpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxufVxcbi5wdWxzZSB7XFxuICBhbmltYXRpb24tbmFtZTogcHVsc2U7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG59XFxuXFxuQGtleWZyYW1lcyB0YWRhIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XFxuICB9XFxuICAxMCUsIDIwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjksIDAuOSwgMC45KSByb3RhdGUzZCgwLCAwLCAxLCAtM2RlZyk7XFxuICB9XFxuICAzMCUsIDUwJSwgNzAlLCA5MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSkgcm90YXRlM2QoMCwgMCwgMSwgM2RlZyk7XFxuICB9XFxuICA0MCUsIDYwJSwgODAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpIHJvdGF0ZTNkKDAsIDAsIDEsIC0zZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbiAgfVxcbn1cXG4udGFkYSB7XFxuICBhbmltYXRpb24tbmFtZTogdGFkYTtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbi5mYWRlSW4ge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW5MZWZ0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuLmZhZGVJbkxlZnQge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkxlZnQ7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluUmlnaHQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbi5mYWRlSW5SaWdodCB7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZUluUmlnaHQ7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluVXAge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbi5mYWRlSW5VcCB7XFxuICBhbmltYXRpb24tbmFtZTogZmFkZUluVXA7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlT3V0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDIwMGRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbi5yb3RhdGVPdXQge1xcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZU91dDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG59XFxuXFxuLnJvdGF0ZS1jaXJjbGUge1xcbiAgYW5pbWF0aW9uOiByb3RhdGVDaXJjbGUgOXMgaW5maW5pdGU7XFxufVxcblxcbi8qXFxuIEN1c3RvbSBBbmltYXRpb25zXFxuICovXFxuQGtleWZyYW1lcyByb3RhdGVDaXJjbGUge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDI1JSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICB9XFxuICA3NSUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgamFja0luVGhlQm94IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMSkgcm90YXRlKDMwZGVnKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XFxuICB9XFxuICA3MCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XFxuLmphY2tJblRoZUJveCB7XFxuICBhbmltYXRpb24tbmFtZTogamFja0luVGhlQm94O1xcbn1cXG5cXG4vKiBvcmlnaW5hbGx5IGF1dGhvcmVkIGJ5IE5pY2sgUGV0dGl0IC0gaHR0cHM6Ly9naXRodWIuY29tL25pY2twZXR0aXQvZ2xpZGUgKi9cXG5Aa2V5ZnJhbWVzIHJvbGxJbiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTEyMGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbi5yb2xsSW4ge1xcbiAgYW5pbWF0aW9uLW5hbWU6IHJvbGxJbjtcXG59XFxuXFxuQGtleWZyYW1lcyB6b29tSW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjMsIDAuMywgMC4zKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbi56b29tSW4ge1xcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb21JbjtcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZUluRG93biB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbi5zbGlkZUluRG93biB7XFxuICBhbmltYXRpb24tbmFtZTogc2xpZGVJbkRvd247XFxufVxcblxcbkBrZXlmcmFtZXMgZmxvYXQge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2xhdGVZKDBweCk7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNsYXRlWSgtNnB4KTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2xhdGVZKDBweCk7XFxuICB9XFxufVxcbi5wdXJwbGUtZ3JhZGllbnQge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDBkZWcsICNmZjZlYzQsICM3ODczZjUpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0MGRlZywgI2ZmNmVjNCwgIzc4NzNmNSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0MGRlZywgI2ZmNmVjNCwgIzc4NzNmNSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoNDBkZWcsICNmZjZlYzQsICM3ODczZjUpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsICNmZjZlYzQsICM3ODczZjUpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5wZWFjaC1ncmFkaWVudCB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0MGRlZywgI2ZmZDg2ZiwgI2ZjNjI2MikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjZmZkODZmLCAjZmM2MjYyKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjZmZkODZmLCAjZmM2MjYyKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCg0MGRlZywgI2ZmZDg2ZiwgI2ZjNjI2MikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MGRlZywgI2ZmZDg2ZiwgI2ZjNjI2MikgIWltcG9ydGFudDtcXG59XFxuXFxuLmFxdWEtZ3JhZGllbnQge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDBkZWcsICMyMDk2ZmYsICMwNWZmYTMpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0MGRlZywgIzIwOTZmZiwgIzA1ZmZhMykgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0MGRlZywgIzIwOTZmZiwgIzA1ZmZhMykgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoNDBkZWcsICMyMDk2ZmYsICMwNWZmYTMpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsICMyMDk2ZmYsICMwNWZmYTMpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ibHVlLWdyYWRpZW50IHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjNDVjYWZjLCAjMzAzZjlmKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDBkZWcsICM0NWNhZmMsICMzMDNmOWYpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDBkZWcsICM0NWNhZmMsICMzMDNmOWYpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjNDVjYWZjLCAjMzAzZjlmKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjNDVjYWZjLCAjMzAzZjlmKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uaG9tZS1wYWdlLWdyYWRpZW50IHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDBkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDBkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ucHVycGxlLWdyYWRpZW50LXJnYmEge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMjU1LCAxMTAsIDE5NiwgMC45KSwgcmdiYSgxMjAsIDExNSwgMjQ1LCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMjU1LCAxMTAsIDE5NiwgMC45KSwgcmdiYSgxMjAsIDExNSwgMjQ1LCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDI1NSwgMTEwLCAxOTYsIDAuOSksIHJnYmEoMTIwLCAxMTUsIDI0NSwgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMjU1LCAxMTAsIDE5NiwgMC45KSwgcmdiYSgxMjAsIDExNSwgMjQ1LCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDI1NSwgMTEwLCAxOTYsIDAuOSksIHJnYmEoMTIwLCAxMTUsIDI0NSwgMC45KSkgIWltcG9ydGFudDtcXG59XFxuXFxuLnBlYWNoLWdyYWRpZW50LXJnYmEge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMjU1LCAyMTYsIDExMSwgMC45KSwgcmdiYSgyNTIsIDk4LCA5OCwgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDI1NSwgMjE2LCAxMTEsIDAuOSksIHJnYmEoMjUyLCA5OCwgOTgsIDAuOSkpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMjU1LCAyMTYsIDExMSwgMC45KSwgcmdiYSgyNTIsIDk4LCA5OCwgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMjU1LCAyMTYsIDExMSwgMC45KSwgcmdiYSgyNTIsIDk4LCA5OCwgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSgyNTUsIDIxNiwgMTExLCAwLjkpLCByZ2JhKDI1MiwgOTgsIDk4LCAwLjkpKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYXF1YS1ncmFkaWVudC1yZ2JhIHtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDMyLCAxNTAsIDI1NSwgMC45KSwgcmdiYSg1LCAyNTUsIDE2MywgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDMyLCAxNTAsIDI1NSwgMC45KSwgcmdiYSg1LCAyNTUsIDE2MywgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSgzMiwgMTUwLCAyNTUsIDAuOSksIHJnYmEoNSwgMjU1LCAxNjMsIDAuOSkpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDMyLCAxNTAsIDI1NSwgMC45KSwgcmdiYSg1LCAyNTUsIDE2MywgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0MGRlZywgcmdiYSgzMiwgMTUwLCAyNTUsIDAuOSksIHJnYmEoNSwgMjU1LCAxNjMsIDAuOSkpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ibHVlLWdyYWRpZW50LXJnYmEge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoNjksIDIwMiwgMjUyLCAwLjkpLCByZ2JhKDQ4LCA2MywgMTU5LCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoNjksIDIwMiwgMjUyLCAwLjkpLCByZ2JhKDQ4LCA2MywgMTU5LCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDY5LCAyMDIsIDI1MiwgMC45KSwgcmdiYSg0OCwgNjMsIDE1OSwgMC45KSkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoNjksIDIwMiwgMjUyLCAwLjkpLCByZ2JhKDQ4LCA2MywgMTU5LCAwLjkpKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDY5LCAyMDIsIDI1MiwgMC45KSwgcmdiYSg0OCwgNjMsIDE1OSwgMC45KSkgIWltcG9ydGFudDtcXG59XFxuXFxuLmJnLWdyYWRpZW50LXB1cnBsZSB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICNmZjZlYzQsICM3ODczZjUpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICNmZjZlYzQsICM3ODczZjUpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjZmY2ZWM0LCAjNzg3M2Y1KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICNmZjZlYzQsICM3ODczZjUpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjZmY2ZWM0LCAjNzg3M2Y1KSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYmctZ3JhZGllbnQtcGVhY2gge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjZmZkODZmLCAjZmM2MjYyKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjZmZkODZmLCAjZmM2MjYyKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgI2ZmZDg2ZiwgI2ZjNjI2MikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjZmZkODZmLCAjZmM2MjYyKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgI2ZmZDg2ZiwgI2ZjNjI2MikgIWltcG9ydGFudDtcXG59XFxuXFxuLmJnLWdyYWRpZW50LWFxdWEge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjMjA5NmZmLCAjMDVmZmEzKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjMjA5NmZmLCAjMDVmZmEzKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgIzIwOTZmZiwgIzA1ZmZhMykgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjMjA5NmZmLCAjMDVmZmEzKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgIzIwOTZmZiwgIzA1ZmZhMykgIWltcG9ydGFudDtcXG59XFxuXFxuLmJnLWdyYWRpZW50LWJsdWUge1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjNDVjYWZjLCAjMzAzZjlmKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjNDVjYWZjLCAjMzAzZjlmKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgIzQ1Y2FmYywgIzMwM2Y5ZikgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjNDVjYWZjLCAjMzAzZjlmKSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzMS45M2RlZywgIzQ1Y2FmYywgIzMwM2Y5ZikgIWltcG9ydGFudDtcXG59XFxuXFxuLmJnLWdyYWRpZW50LWhvbWUtcGFnZSB7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgxMzEuOTNkZWcsICNlMWZlZmEsICNmY2Y3ZjQpICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTMxLjkzZGVnLCAjZTFmZWZhLCAjZmNmN2Y0KSAhaW1wb3J0YW50O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSEVSTyBJY29uc1xcXCI7XFxuICBzcmM6IHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvSWNvbkZvbnQvd2ViZm9udC5lb3Q/dj0xLjQuNTdcXFwiKTtcXG4gIHNyYzogdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9JY29uRm9udC93ZWJmb250LmVvdD8jaWVmaXgmdj0xLjQuNTdcXFwiKSBmb3JtYXQoXFxcImVtYmVkZGVkLW9wZW50eXBlXFxcIiksIHVybChcXFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwL2ZvbnQvSWNvbkZvbnQvd2ViZm9udC53b2ZmMj92PTEuNC41N1xcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSwgdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9JY29uRm9udC93ZWJmb250LndvZmY/dj0xLjQuNTdcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKSwgdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9JY29uRm9udC93ZWJmb250LnR0Zj92PTEuNC41N1xcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKSwgdXJsKFxcXCJodHRwOi8vYmFieXNpdHRlci50cnVzdC1ncm93dGguY28uanAvZm9udC9JY29uRm9udC93ZWJmb250LnN2Zz92PTEuNC41N1xcXCIpIGZvcm1hdChcXFwic3ZnXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5pLmhlcm8taWNvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG59XFxuaS5oZXJvLWljb246YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDI0cHgvMSBcXFwiSEVSTyBJY29uc1xcXCI7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWFjY291bnQtZ3JvdXAtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBCNThcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWFjY291bnQtc2VhcmNoLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOTM1XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1hY2NvdW50LXRpZS1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTBDQVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYWlycG9ydDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA4NEJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWFycm93LWRvd24tYm9sZC1ib3gtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3MzBcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWFycm93LXVwLWJvbGQtYm94LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzM5XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1hcnJvdy11cC1ib3g6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNkMzXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1hdXRvLWZpeDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwNjhcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWF1dG8tdXBsb2FkOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDA2OVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tYmFsbG90LXJlY291bnQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDM0FcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNhbGwtbWFkZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAwRjdcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNhcmQtYWNjb3VudC1tYWlsLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwRTk4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jYXJ0LXBsdXM6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTEyXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jZWxscGhvbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMTFDXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jZWxscGhvbmUtY29nOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDk1MVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2VsbHBob25lLW1lc3NhZ2U6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOEQzXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1jZWxscGhvbmUtbmZjOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEU5MFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2VydGlmaWNhdGUtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExODhcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNoZWNrLWNpcmNsZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA1RTBcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNoZWNrLWNpcmNsZS1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDVFMVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2xpcHB5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDE0RlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tY2xvdWQtZG93bmxvYWQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBCN0RcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWNyZWF0aW9uOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDY3NFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1haWwtZWRpdC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEVFNFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb246OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzY4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1hbmdyeTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNjlcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWFuZ3J5LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzZBXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1jb25mdXNlZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwREVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWNvbmZ1c2VkLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMERGXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1jb29sOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM2QlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tY29vbC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDFGM1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tY3J5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM2Q1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tY3J5LW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzZEXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1kZWFkOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM2RVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tZGVhZC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDY5QlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tZGV2aWw6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzZGXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1kZXZpbC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDFGNFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tZXhjaXRlZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNzBcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWV4Y2l0ZWQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA2OUNcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWZyb3duOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEY0Q1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tZnJvd24tb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBGNERcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWhhcHB5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM3MVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24taGFwcHktb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxRjVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLWtpc3M6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzcyXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1raXNzLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzczXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1sb2w6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMjE0XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1sb2wtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyMTVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLW5ldXRyYWw6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzc0XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1uZXV0cmFsLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMUY2XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDFGMlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tcG9vcDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAxRjdcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLXBvb3Atb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNzVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLXNhZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjBDNzZcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWVtb3RpY29uLXNhZC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDFGOFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tdG9uZ3VlOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDFGOVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24tdG9uZ3VlLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzc3XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1lbW90aWNvbi13aW5rOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM3OFxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZW1vdGljb24td2luay1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEM3OVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZmlsZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyMTRcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWZpbGUtY2xvdWQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwMkFcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWZvcm0tc2VsZWN0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTQwMVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tZm9ybWF0LWxpc3QtdGV4dDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyNkZcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWdvb2dsZS1hZHM6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQzg3XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1oYW5kLW9rYXk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTUwXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1oYW5kLXBvaW50aW5nLXJpZ2h0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDJDN1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8taGVhZHNldDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjAyQ0VcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLWhlYXJ0LW11bHRpcGxlLW91dGxpbmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwQTU3XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1ob21lLW1hcC1tYXJrZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNUY4XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1odW1hbi1tYWxlLWNoaWxkOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTM4Q1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbGFwdG9wOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDMyMlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbWVzc2FnZS1jb2ctb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExNzJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLW1lc3NhZ2UtdGV4dC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDM2QVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbW91c2U6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzdEXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1tb3VzZS1ibHVldG9vdGg6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwOThCXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1tb3VzZS1vZmY6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzdFXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1tb3VzZS12YXJpYW50OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMDM3RlxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbW91c2UtdmFyaWFudC1vZmY6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwMzgwXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1uZXdzcGFwZXItdmFyaWFudC1tdWx0aXBsZS1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTAwM1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tbmV3c3BhcGVyLXZhcmlhbnQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEwMDRcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXBob25lLWluLXRhbGstb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExODJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXBsdXMtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA3MDVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXJlc3BvbnNpdmU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDVFXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1zZWxlY3Q6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNDg1XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby1zZWxlY3Rpb24tc2VhcmNoOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTIwNVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tc2VuZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0OEFcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXNlbmQtY2hlY2stb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExNjJcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXNlbmQtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjExNjVcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXNoYXJlLWFsbC1vdXRsaW5lOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMTFGNVxcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tc3Rhci1ib3gtbXVsdGlwbGUtb3V0bGluZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjEyODdcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXN0aWNrZXItZW1vamk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNzg1XFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby10YWJsZXQtaXBhZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRjA0RjhcXFwiO1xcbn1cXG5pLmhlcm8taWNvbi5oZXJvLXRlbGV2aXNpb24tY2xlYW46OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYxMTEwXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby11cGRhdGU6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEYwNkIwXFxcIjtcXG59XFxuaS5oZXJvLWljb24uaGVyby16b2RpYWMtdGF1cnVzOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEE4N1xcXCI7XFxufVxcbmkuaGVyby1pY29uLmhlcm8tem9kaWFjLXZpcmdvOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxGMEE4OFxcXCI7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJpbXBvcnQgVFlQRSBmcm9tIFwiLi90eXBlXCJcclxuZXhwb3J0IGZ1bmN0aW9uIHNldHRlclNvY2tldChzb2NrZXQpe1xyXG4gICAgY29uc29sZS5sb2coc29ja2V0ICwgXCIgc2V0IHNvY2tldCBcIilcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6IFRZUEUuU09DQ0tFVC5TRVRfU09DS0VUX0lPLFxyXG4gICAgICAgIHBheWxvYWQgOiBzb2NrZXRcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0dGVyVXNlciggdXNlciApe1xyXG4gICAgY29uc29sZS5sb2codXNlciAsIFwiIHNldCB1c2VyIFwiKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlIDogVFlQRS5VU0VSLlNFVFRFUl9VU0VSLFxyXG4gICAgICAgIHBheWxvYWQgOiB7IC4uLnVzZXIsIGZldGNoZWQ6IHRydWUgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0dGVyQ2hhbm5lbHMoIGNoYW5uZWxzICl7XHJcbiAgICBjb25zb2xlLmxvZyhjaGFubmVscyAsIFwiIHNldCBjaGFubmVscyBcIilcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6IFRZUEUuQ0hBTk5FTC5TRVRURVJfQ0hBTk5FTCxcclxuICAgICAgICBwYXlsb2FkIDogY2hhbm5lbHNcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZE1lc3NhZ2UoIG1lc3NhZ2UgKXtcclxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UgLCBcIiBhZGRNZXNzYWdlIFwiKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlIDogVFlQRS5DSEFOTkVMLkFERF9NRVNTQUdFLFxyXG4gICAgICAgIHBheWxvYWQgOiBtZXNzYWdlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRNZXNzYWdlU2VuZFRvTWUoIG1lc3NhZ2UgKXtcclxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UgLCBcIiBhZGRNZXNzYWdlU2VuZFRvTWUgXCIpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBUWVBFLkNIQU5ORUwuQUREX01FU1NBR0VfU0VORF9UT19NRSxcclxuICAgICAgICBwYXlsb2FkIDogbWVzc2FnZVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUNoYW5uZWxBY3RpdmUoIGNoYW5uZWxOYW1lICl7XHJcbiAgICBjb25zb2xlLmxvZyhjaGFubmVsTmFtZSAsIFwiIGNoYW5nZUNoYW5uZWxBY3RpdmUgXCIpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBUWVBFLkNIQU5ORUwuU0VUX0FDVElWRSxcclxuICAgICAgICBwYXlsb2FkIDogY2hhbm5lbE5hbWVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFVzZXJPbmxpbmUoIGlkICl7XHJcbiAgICBjb25zb2xlLmxvZyhpZCAsIFwiIGFkZFVzZXJPbmxpbmUgXCIpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGUgOiBUWVBFLkNIQU5ORUwuQUREX1VTRVJfT05MSU5FLFxyXG4gICAgICAgIHBheWxvYWQgOiBpZFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVXNlck9ubGluZSggaWQgKXtcclxuICAgIGNvbnNvbGUubG9nKGlkICwgXCIgcmVtb3ZlVXNlck9ubGluZSBcIilcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6IFRZUEUuQ0hBTk5FTC5SRU1PVkVfVVNFUl9PTkxJTkUsXHJcbiAgICAgICAgcGF5bG9hZCA6IGlkXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWFkQWxsTWVzc2FnZUNoYW5uZWxBY3RpdmUoKXtcclxuICAgIGNvbnNvbGUubG9nKFwiIHJlYWRBbGxNZXNzYWdlQ2hhbm5lbEFjdGl2ZSBcIilcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZSA6IFRZUEUuQ0hBTk5FTC5SRUFEX0FMTF9NRVNTQUdFX0NIQU5ORUxfQUNUSVZFXHJcbiAgICB9XHJcbn0iLCJjb25zdCBUWVBFID0gIHtcclxuICBIT01FIDoge1xyXG4gICAgQ0hBTkdFX0xBWU9VVFM6ICdDSEFOR0VfTEFZT1VUUycsXHJcbiAgICBDSEFOR0VfVEhFTUUgIDogJ0NIQU5HRV9USEVNRSdcclxuICB9LFxyXG4gIENIQVQgOiB7XHJcbiAgICBDSEFOR0VfVVNFUl9DSEFUX0RFRkFVTFQ6ICdDSEFOR0VfVVNFUl9DSEFUX0RFRkFVTFQnXHJcbiAgfSxcclxuICBTT0NDS0VUIDoge1xyXG4gICAgU0VUX1NPQ0tFVF9JTzogXCJTRVRfU09DS0VUX0lPXCJcclxuICB9LFxyXG4gIFVTRVI6IHtcclxuICAgIFNFVFRFUl9VU0VSOiBcIlNFVFRFUl9VU0VSXCJcclxuICB9LFxyXG4gIENIQU5ORUw6IHtcclxuICAgIFNFVFRFUl9DSEFOTkVMICAgICAgICA6IFwiU0VUVEVSX0NIQU5ORUxcIixcclxuICAgIEFERF9NRVNTQUdFICAgICAgICAgICA6IFwiQUREX01FU1NBR0VcIixcclxuICAgIEFERF9NRVNTQUdFX1NFTkRfVE9fTUU6IFwiQUREX01FU1NBR0VfU0VORF9UT19NRVwiLFxyXG4gICAgU0VUX0FDVElWRSAgICAgICAgICAgIDogXCJTRVRfQUNUSVZFXCIsXHJcbiAgICBBRERfVVNFUl9PTkxJTkUgICAgICAgOiBcIkFERF9VU0VSX09OTElORVwiLFxyXG4gICAgUkVNT1ZFX1VTRVJfT05MSU5FICAgIDogXCJSRU1PVkVfVVNFUl9PTkxJTkVcIixcclxuICAgIFJFQURfQUxMX01FU1NBR0VfQ0hBTk5FTF9BQ1RJVkU6IFwiUkVBRF9BTExfTUVTU0FHRV9DSEFOTkVMX0FDVElWRVwiXHJcbiAgfSxcclxuICBDT05GSUc6IHtcclxuICAgIFNFVFRFUl9TRU5EX1BFRVIgOiBcIlNFVFRFUl9TRU5EX1BFRVJcIlxyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBUWVBFOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBDaGF0IGZyb20gJy4vQ2hhdC9pbmRleC5qc3gnO1xyXG4vLy8gc29jY2tldCBcclxuaW1wb3J0IHNvY2tldElPQ2xpZW50IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcbmltcG9ydCB7IHNvY2tldEluaXRpYWxDb25uZWN0IH0gZnJvbSBcIi4uL2xpYnJhcnkvc2VydmljZS5qc1wiXHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNlbmRVc2VyT25saW5lIDogZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuY2xpZW50KSlcclxuICAgICAgICB2YXIgaW5zdGFuY2VBcHAgPSB0aGlzXHJcbiAgICAgICAgc29ja2V0SW5pdGlhbENvbm5lY3Qoc29ja2V0SU9DbGllbnQsIGluc3RhbmNlQXBwKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgICAgICB2YXIgRVZFTlQgICA9IENPTkZJR19FVkVOVFxyXG4gICAgICAgIC8vdmFyIHBlZXJEb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkFwcGxpY2F0aW9uXCIpXHJcbiAgICAgICAgaWYgKCAhdGhpcy5zdGF0ZS5zZW5kVXNlck9ubGluZSApIHsgLy8gcGVlckRvbSAmJiBwZWVyRG9tLmdldEF0dHJpYnV0ZSgnZGF0YS1wZWVyJykgJiZcclxuICAgICAgICAgICAgaWYoIHRoaXMucHJvcHMuYXV0aCAmJiB0aGlzLnByb3BzLmF1dGguZmV0Y2hlZCApe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zb2NrZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VuZFVzZXJPbmxpbmU6IHRydWUgfSwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zb2NrZXQuZW1pdChFVkVOVC5VU0VSX09OTElORSwgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkICAgIDogdGhpcy5wcm9wcy5hdXRoLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVlciAgOiBcIjEyMzQ1Njc4OTBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VzczogdGhpcy5wcm9wcy5hdXRoLnRva2Vucy50b2tlbkFjY2Vzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkcmF3IGFwcFwiKVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwQ29tcG9uZW50XCIgaWQ9XCJBcHBsaWNhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPENoYXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjbGllbnQ6IHN0YXRlLmNsaWVudCxcclxuICAgICAgICBzb2NrZXQ6IHN0YXRlLnNvY2tldCxcclxuICAgICAgICBhdXRoOiBzdGF0ZS51c2VycyxcclxuICAgICAgICB1c2VyQ2hhdDogc3RhdGUudXNlckNoYXRcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQXBwKTtcclxuXHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgXCIuLi8uLi9zY3NzL2NoYXQvZW1vamkuc2Nzc1wiXHJcblxyXG5jbGFzcyBFbW9qaSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgYWRkSWNvbklucHV0Q2hhdCA9IGV2ZW50ID0+IHtcclxuICAgICAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlucHV0LWNoYXRcIilcclxuICAgICAgICBpZiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgLy8vIGFkZCBpY29uIFxyXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudCArIHRoaXMucHJvcHMuc3ltYm9sXHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gY29udGVudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImNvbXBvbmVudC1lbW9qaVwiIG9uQ2xpY2s9e3RoaXMuYWRkSWNvbklucHV0Q2hhdH0+e3RoaXMucHJvcHMuc3ltYm9sfTwvaT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEVtb2ppOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCBcIi4uLy4uL3Njc3MvY2hhdC9oZWFkLWluZm8uc2Nzc1wiXHJcbmltcG9ydCBDT05GSUcgZnJvbSBcIi4uLy4uL2NvbmZpZ1wiXHJcbmNsYXNzIEhlYWRJbmZvIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcblx0Y29tcG9uZW50RGlkVXBkYXRlKCl7XHJcblx0XHQvLy8vc2V0IGhlaWdodCBjb21wb25lbnRcclxuICAgICAgICB2YXIgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb21wb25lbnQtc2lkZWJhci1jaGF0XCIpXHJcbiAgICAgICAgaWYoc2lkZWJhci5sZW5ndGgpe1xyXG4gICAgICAgICAgICB2YXIgbWVzc2FnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY29tcG9uZW50LWxpc3QtbWVzc2FnZVwiKVxyXG4gICAgICAgICAgICBpZihtZXNzYWdlcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgc2lkZWJhclswXS5zdHlsZS5oZWlnaHQgPSBtZXNzYWdlc1swXS5jbGllbnRIZWlnaHQgKyBcInB4XCI7ICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHR9XHJcblx0XHJcblx0cmVuZGVyKCkge1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwicmVuZGVyIGhlYWQgY2hhdFwiKVxyXG5cdFx0dmFyIHsgY2hhbm5lbHMgfSA9IHRoaXMucHJvcHNcclxuXHRcdHZhciBjaGFubmVsQWN0aXZlID0gY2hhbm5lbHMuZmluZChjaGFubmVsID0+IGNoYW5uZWwuaXNBY3RpdmUpXHJcblxyXG5cdFx0aWYgKCFjaGFubmVsQWN0aXZlKSB7XHJcblx0XHRcdHJldHVybiBudWxsXHJcblx0XHR9XHJcblx0XHR2YXIgdGV4dE9ubGluZSA9ICBjaGFubmVsQWN0aXZlLnVzZXIub25saW5lID8gXCLjgqrjg7Pjg6njgqTjg7NcIiA6IFwi44Kq44OV44Op44Kk44OzXCJcclxuXHJcblx0XHRcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1oZWFkLWluZm9cIj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1c2VyLWFjdGl2ZS1jaGF0XCI+XHJcblx0XHRcdFx0XHQ8ZmlndXJlIGNsYXNzTmFtZT1cInN0YXRlLWF2YXRhciBhY3RpdmUtb25saW5lXCI+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPXtDT05GSUcuU0VSVkVSX1BIUC5VUkwgKyBjaGFubmVsQWN0aXZlLnVzZXIuYXZhdGFyfSBhbHQ9XCJcIiAvPlxyXG5cdFx0XHRcdFx0PC9maWd1cmU+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtaW5mb1wiPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+e2NoYW5uZWxBY3RpdmUudXNlci5maXJzdF9uYW1lICsgXCIgXCIgK2NoYW5uZWxBY3RpdmUudXNlci5sYXN0X25hbWV9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9eyhjaGFubmVsQWN0aXZlLnVzZXIub25saW5lID8gXCJhY3RpdmUtbm93XCIgOiAnJykgKyBcIiB0aW1lLW9ubGluZVwifT57dGV4dE9ubGluZX08L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5sZXQgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGNoYW5uZWxzOiBzdGF0ZS51c2VyQ2hhdCxcclxuXHRcdHVzZXJzICAgOiBzdGF0ZS51c2VycyxcclxuXHRcdHVzZXIgICAgOiBzdGF0ZS51c2VycyxcclxuXHRcdGNsaWVudCAgOiBzdGF0ZS5jbGllbnRcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEhlYWRJbmZvKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExpc3RFbW9qaSBmcm9tIFwiLi9MaXN0RW1vamkuanN4XCI7XHJcbmltcG9ydCBNZXNzYWdlQ2hhdFR5cGluZyBmcm9tIFwiLi9NZXNzYWdlQ2hhdFR5cGluZy5qc3hcIlxyXG5pbXBvcnQgXCIuLi8uLi9zY3NzL2NoYXQvaW5wdXQtc2VuZC1jaGF0LnNjc3NcIjtcclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vY29uZmlnL2luZGV4LmpzXCJcclxuaW1wb3J0IHsgc2VuZE1lc3NhZ2VUb0NoYW5uZWwsIHNhdmVCbG9iVG9TZXJ2ZXIsIHNlbmRUeXBpbmdNZXNzYWdlVG9DaGFubmVsLCBcclxuICAgIGxpc3RlblJlYWRNZXNzYWdlTmV3VXNlciBcclxufSBcclxuZnJvbSBcIi4uLy4uL2xpYnJhcnkvc2VydmljZS5qc1wiXHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIlxyXG5cclxuXHJcbmNsYXNzIElucHV0U2VuZENoYXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IHNlbmRDaGF0OiBmYWxzZSB9XHJcbiAgICAgICAgdGhpcy5zdWJtaXRNZXNzYWdlQ2hhdCA9IHRoaXMuc3VibWl0TWVzc2FnZUNoYXQuYmluZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHZhciBzdXAgPSB0aGlzO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcInBhc3RlXCIsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIHRoZSBldmVudFxyXG4gICAgICAgICAgICAgICAgc3VwLnJldHJpZXZlSW1hZ2VGcm9tQ2xpcGJvYXJkQXNCbG9iKGV2ZW50KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWxzZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCl7XHJcblxyXG4gICAgICAgIHZhciB7IHVzZXJDaGF0IH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgdmFyIGNoYW5uZWxBY3RpdmVDaGF0ID0gdXNlckNoYXQuZmluZChjaGFubmVsID0+IGNoYW5uZWwuaXNBY3RpdmUpXHJcblxyXG4gICAgICAgIHZhciBtZXNzYWdlcyA9IGNoYW5uZWxBY3RpdmVDaGF0ICYmIGNoYW5uZWxBY3RpdmVDaGF0Lm1lc3NhZ2VcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcInxpbnB1dCBzZW5kIGNoYXQgY29tcG9uZW50RGlkVXBkYXRlXCIpXHJcblxyXG4gICAgICAgIHZhciBkb21TY3JvbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLXNjcm9sbC10by1ib3R0b21cIilcclxuICAgICAgICB2YXIgZG9tV3JpdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pcy13cml0ZS1tZXNzYWdlXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2coZG9tU2Nyb2xsLnNjcm9sbEhlaWdodCwgZG9tU2Nyb2xsLmNsaWVudEhlaWdodCArIFwibGlzdGVuUmVhZE1lc3NhZ2VOZXdVc2VyXCIpXHJcbiAgICAgICAgaWYoIGRvbVdyaXRlciAmJiBkb21TY3JvbGwgJiYgZG9tU2Nyb2xsLnNjcm9sbEhlaWdodCA9PSBkb21TY3JvbGwuY2xpZW50SGVpZ2h0KXtcclxuICAgICAgICAgICAgbGlzdGVuUmVhZE1lc3NhZ2VOZXdVc2VyKG1lc3NhZ2VzLCBjaGFubmVsQWN0aXZlQ2hhdClcclxuICAgICAgICB9ZWxzZSBpZihcclxuICAgICAgICAgICAgZG9tU2Nyb2xsICYmIFxyXG4gICAgICAgICAgICBkb21Xcml0ZXIgJiYgXHJcbiAgICAgICAgICAgIGRvbVdyaXRlci5jbGFzc0xpc3QuY29udGFpbnMoJ2ZvbGxvdy1jb252ZXJzYXRpb24nKSl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1zY3JvbGwtdG8tYm90dG9tJykuc2Nyb2xsVG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXNjcm9sbC10by1ib3R0b20nKS5zY3JvbGxIZWlnaHRcclxuICAgICAgICAgICAgICAgIGlmKCAkKFwiI2pzLXNjcm9sbC10by1ib3R0b20gaW1nXCIpLmxlbmd0aCApe1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjanMtc2Nyb2xsLXRvLWJvdHRvbSBpbWdcIikub25lKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXNjcm9sbC10by1ib3R0b20nKS5zY3JvbGxUb3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtc2Nyb2xsLXRvLWJvdHRvbScpLnNjcm9sbEhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN1Ym1pdE1lc3NhZ2VDaGF0ID0gZnVuY3Rpb24gKG1lc3NhZ2UsIHN0eWxlLCBhdHRhY2htZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coeyBtZXNzYWdlLCBzdHlsZSwgYXR0YWNobWVudCB9KVxyXG4gICAgICAgIGlmICghbWVzc2FnZSkge1xyXG4gICAgICAgICAgICBpZiAoc3R5bGUgPT0gXCJJTUFHRVwiKSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gc3R5bGVcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc3R5bGUpIHtcclxuICAgICAgICAgICAgdmFyIGVtb2ppQ2hhdCA9IGNvbmZpZy5FTU9KSVMuZmlsdGVyKGVtb2ppID0+IGVtb2ppLnN5bWJvbCA9PSBtZXNzYWdlLnRyaW0oKSlcclxuICAgICAgICAgICAgaWYgKGVtb2ppQ2hhdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHN0eWxlID0gXCJFTU9KSVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudXNlcikge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8vIGzDoCBu4bq/dSB0b2tlbiBo4bq/dCBo4bqhbiB0aMOsIHBo4bqjaSByZWZlc2ggXHJcbiAgICAgICAgICAgIC8vIHNhdSDEkcOzIGNoxrBhIGRpc3BhY3RoIG5nYXkgbcOgIHNlbmQgY2hhdCDEkcOjLiBy4buTaSBkaXNwYXRjaCAxIGzhuqduXHJcbiAgICAgICAgICAgIHZhciB7IHVzZXIgfSA9IHRoaXMucHJvcHMsXHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZSA9IHRoaXMsXHJcbiAgICAgICAgICAgICAgICBkYXRhUmVmZXNoID0gZmFsc2VcclxuICAgICAgICAgICAgdmFyIGRpZmYgPSAoKG5ldyBEYXRlKS5nZXRUaW1lKCkgLSBuZXcgRGF0ZSh1c2VyLnRva2Vucy5wZXJpb2QpLmdldFRpbWUoKSkgLyAxMDAwXHJcbiAgICAgICAgICAgIGlmIChkaWZmID49IHVzZXIudG9rZW5zLmV4cGlyZSkge1xyXG4gICAgICAgICAgICAgICAgLy8vIGZldGNoIG5ldyB0b2tlblxyXG4gICAgICAgICAgICAgICAgZGF0YVJlZmVzaCA9IHsgdXNlcklkOiB1c2VyLmlkLCByZWZlc2g6IHVzZXIudG9rZW5zLnRva2VuUmVmZXNoLCBkZXRlY3Q6IHRoaXMucHJvcHMuY2xpZW50IH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgbWVzc2FnZVNlbmRUb0NoYW5uZWwgPSBtZXNzYWdlXHJcbiAgICAgICAgICAgIHZhciBjaGFubmVsU2VuZCA9IHRoaXMucHJvcHMudXNlckNoYXQuZmluZChjaGFubmVsID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjaGFubmVsLmlzQWN0aXZlID09IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdmFyIGNoYW5uZWxJZCA9IGNoYW5uZWxTZW5kLmlkXHJcbiAgICAgICAgICAgIHZhciB0b2tlbkFjY2VzcyA9IHVzZXIudG9rZW5zLnRva2VuQWNjZXNzXHJcbiAgICAgICAgICAgIHZhciBkZXRlY3QgPSB0aGlzLnByb3BzLmNsaWVudFxyXG4gICAgICAgICAgICBzZW5kTWVzc2FnZVRvQ2hhbm5lbChtZXNzYWdlU2VuZFRvQ2hhbm5lbCwgc3R5bGUsIGF0dGFjaG1lbnQsIGNoYW5uZWxJZCwgXHJcbiAgICAgICAgICAgICAgICB0b2tlbkFjY2VzcywgZGV0ZWN0LCBpbnN0YW5jZSwgZGF0YVJlZmVzaClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU2VuZEVtb2ppU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIHZhciBtZXNzYWdlID0gXCIg8J+SnSBcIlxyXG4gICAgICAgIHZhciBzdHlsZSA9IFwiRU1PSklcIlxyXG4gICAgICAgIHRoaXMuc3VibWl0TWVzc2FnZUNoYXQobWVzc2FnZSwgc3R5bGUsIG51bGwpXHJcbiAgICB9XHJcbiAgICBoYW5kbGVTZW5kTWVzc2FnZVN1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICB2YXIgc3R5bGUgPSBcIlwiXHJcbiAgICAgICAgdmFyIHVybEF0dGFjaG1lbnQgPSBbXVxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBpbWFnZXNEb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWltYWdlLS1ibG9ja1wiKVxyXG4gICAgICAgIHZhciBpbWFnZXMgICAgPSBpbWFnZXNEb20uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInJlbW92ZS1pbWFnZVwiKVxyXG4gICAgICAgIHZhciBtZXNzYWdlICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlucHV0LWNoYXRcIikudmFsdWVcclxuICAgICAgICBcclxuICAgICAgICBpZiAoaW1hZ2VzLmxlbmd0aCAmJiAhbWVzc2FnZSkge1xyXG4gICAgICAgICAgICBtZXNzYWdlID0gJ0lNQUdFJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoIW1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaW5wdXQtY2hhdFwiKS52YWx1ZSA9ICcnXHJcblxyXG4gICAgICAgIGlmIChpbWFnZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHN0eWxlID0gXCJJTUFHRVwiXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB1cmxBdHRhY2htZW50ID0gW11cclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXhfaW1hZ2Vfc2VuZCA9IDA7IGluZGV4X2ltYWdlX3NlbmQgPCBpbWFnZXMubGVuZ3RoOyBpbmRleF9pbWFnZV9zZW5kKyspIHtcclxuICAgICAgICAgICAgICAgIGlmKCFpbWFnZXNbaW5kZXhfaW1hZ2Vfc2VuZF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1zaWduLXVybCcpKXtcclxuICAgICAgICAgICAgICAgICAgICB1cmxBdHRhY2htZW50LnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCA6IGltYWdlc1tpbmRleF9pbWFnZV9zZW5kXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdXJsJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBpbWFnZXNbaW5kZXhfaW1hZ2Vfc2VuZF0uZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IChuZXcgRGF0ZSkuZ2V0VGltZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pbWFnZS0tYmxvY2tcIikuaW5uZXJIVE1MID0gJydcclxuICAgICAgICB0aGlzLnN1Ym1pdE1lc3NhZ2VDaGF0KG1lc3NhZ2UsIHN0eWxlLCB1cmxBdHRhY2htZW50KVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNlbmRNZXNzYWdlRG93biA9IChldmVudCkgPT4ge1xyXG5cclxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAxMyAmJiAhZXZlbnQuc2hpZnRLZXkpIHtcclxuICAgICAgICAgICAgdmFyIHN0eWxlID0gXCJcIlxyXG4gICAgICAgICAgICB2YXIgdXJsQXR0YWNobWVudCA9IFtdXHJcbiAgICAgICAgICAgIHZhciBpbWFnZXNEb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWltYWdlLS1ibG9ja1wiKVxyXG4gICAgICAgICAgICB2YXIgaW1hZ2VzID0gaW1hZ2VzRG9tLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJyZW1vdmUtaW1hZ2VcIilcclxuICAgICAgICAgICAgaWYgKGltYWdlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHN0eWxlID0gXCJJTUFHRVwiXHJcbiAgICAgICAgICAgICAgICB1cmxBdHRhY2htZW50ID0gW11cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4X2ltYWdlX3NlbmQgPSAwOyBpbmRleF9pbWFnZV9zZW5kIDwgaW1hZ2VzLmxlbmd0aDsgaW5kZXhfaW1hZ2Vfc2VuZCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIWltYWdlc1tpbmRleF9pbWFnZV9zZW5kXS5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLXNpZ24tdXJsJykpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxBdHRhY2htZW50LnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsIDogaW1hZ2VzW2luZGV4X2ltYWdlX3NlbmRdLmdldEF0dHJpYnV0ZSgnZGF0YS11cmwnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBpbWFnZXNbaW5kZXhfaW1hZ2Vfc2VuZF0uZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lOiAobmV3IERhdGUpLmdldFRpbWUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaW1hZ2UtLWJsb2NrXCIpLmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0TWVzc2FnZUNoYXQoZXZlbnQudGFyZ2V0LnZhbHVlLCBzdHlsZSwgdXJsQXR0YWNobWVudClcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlbmRDaGF0OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlucHV0LWNoYXRcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09IDMyKSB7XHJcbiAgICAgICAgICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaW5wdXQtY2hhdFwiKVxyXG4gICAgICAgICAgICBpZiAoaW5wdXQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb250ZW50ID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAvLy8gZ2V0IHdvcmQgbGFzdFxyXG4gICAgICAgICAgICAgICAgdmFyIHdvcmRzID0gY29udGVudC5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgd29yZExhc3Rlc3QgPSB3b3Jkc1t3b3Jkcy5sZW5ndGggLSAxXVxyXG4gICAgICAgICAgICAgICAgLy8vLyBjaGVjayBoYXZlIHN5c2JvbCBcclxuICAgICAgICAgICAgICAgIHZhciBlbW9qaXNDYWxsID0gY29uZmlnLkVNT0pJUy5maWx0ZXIoaXRlbSA9PiBpdGVtLnNpZ24gPT0gd29yZExhc3Rlc3QpXHJcbiAgICAgICAgICAgICAgICBpZiAoZW1vamlzQ2FsbC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLy8gYWRkIGljb24gXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxhc3RJbmRleCA9IGNvbnRlbnQubGFzdEluZGV4T2YoXCIgXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBjb250ZW50LnN1YnN0cmluZygwLCBsYXN0SW5kZXgpICsgXCIgXCIgKyBlbW9qaXNDYWxsWzBdLnN5bWJvbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVTZW5kTWVzc2FnZVVwID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNlbmRDaGF0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZW5kQ2hhdDogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaW5wdXQtY2hhdFwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGltYWdlRmlsZUNhbGxiYWNrID0gZnVuY3Rpb24gKGltZ0xvYWRpbmcpIHtcclxuICAgICAgICAvLyBhZGQgaXQgaW4gZWRpdG9yXHJcbiAgICAgICAgaW1nTG9hZGluZy53aWR0aCA9IDEwMDtcclxuICAgICAgICAvLy8gY3JlYXRlIHdyYXBwZXIgaW1nXHJcbiAgICAgICAgdmFyIHdyYXBwZXJJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgd3JhcHBlckltYWdlLmNsYXNzTmFtZSA9IFwicmVtb3ZlLWltYWdlIGpzLXNpZ24tdXJsXCI7XHJcbiAgICAgICAgd3JhcHBlckltYWdlLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3cmFwcGVySW1hZ2UuYXBwZW5kQ2hpbGQoaW1nTG9hZGluZyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pbWFnZS0tYmxvY2tcIikuYXBwZW5kQ2hpbGQod3JhcHBlckltYWdlKTtcclxuICAgIH1cclxuICAgIHJldHJpZXZlSW1hZ2UgPSBmaWxlID0+IHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coIGZpbGUgKVxyXG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRoaXMuaW1hZ2VGaWxlQ2FsbGJhY2tcclxuICAgICAgICAvLyBSZXRyaWV2ZSBpbWFnZSBvbiBjbGlwYm9hcmQgYXMgYmxvYlxyXG4gICAgICAgIHNhdmVCbG9iVG9TZXJ2ZXIoZmlsZSlcclxuICAgICAgICAvLyBDcmVhdGUgYW4gaW1hZ2VcclxuICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgLy8gT25jZSB0aGUgaW1hZ2UgbG9hZHMsIHJlbmRlciB0aGUgaW1nIG9uIHRoZSBjYW52YXNcclxuICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBVcGRhdGUgZGltZW5zaW9ucyBvZiB0aGUgY2FudmFzIHdpdGggdGhlIGRpbWVuc2lvbnMgb2YgdGhlIGltYWdlXHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHRoaXMpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gQ3Jvc3Nicm93c2VyIHN1cHBvcnQgZm9yIFVSTFxyXG4gICAgICAgIHZhciBVUkxPYmogPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkw7XHJcbiAgICAgICAgLy8gQ3JlYXRlcyBhIERPTVN0cmluZyBjb250YWluaW5nIGEgVVJMIHJlcHJlc2VudGluZyB0aGUgb2JqZWN0IGdpdmVuIGluIHRoZSBwYXJhbWV0ZXJcclxuICAgICAgICAvLyBuYW1lbHkgdGhlIG9yaWdpbmFsIEJsb2JcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpbWcuc3JjID0gVVJMT2JqLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0cmlldmVGaWxlID0gZmlsZSA9PiB7XHJcblxyXG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRoaXMuaW1hZ2VGaWxlQ2FsbGJhY2tcclxuICAgICAgICAvLyBSZXRyaWV2ZSBpbWFnZSBvbiBjbGlwYm9hcmQgYXMgYmxvYlxyXG4gICAgICAgIHNhdmVCbG9iVG9TZXJ2ZXIoZmlsZSlcclxuICAgICAgICAvLyBDcmVhdGUgYW4gaW1hZ2VcclxuICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgLy8gT25jZSB0aGUgaW1hZ2UgbG9hZHMsIHJlbmRlciB0aGUgaW1nIG9uIHRoZSBjYW52YXNcclxuICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBVcGRhdGUgZGltZW5zaW9ucyBvZiB0aGUgY2FudmFzIHdpdGggdGhlIGRpbWVuc2lvbnMgb2YgdGhlIGltYWdlXHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHRoaXMpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gQ3Jvc3Nicm93c2VyIHN1cHBvcnQgZm9yIFVSTFxyXG4gICAgICAgIHZhciBVUkxPYmogPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkw7XHJcbiAgICAgICAgLy8gQ3JlYXRlcyBhIERPTVN0cmluZyBjb250YWluaW5nIGEgVVJMIHJlcHJlc2VudGluZyB0aGUgb2JqZWN0IGdpdmVuIGluIHRoZSBwYXJhbWV0ZXJcclxuICAgICAgICAvLyBuYW1lbHkgdGhlIG9yaWdpbmFsIEJsb2JcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpbWcuc3JjID0gY29uZmlnLlNFUlZFUl9QSFAuVVJMICsgXCIvaW1hZ2UvZm9sZGVyLmpwZ1wiXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHJpZXZlSW1hZ2VGcm9tQ2xpcGJvYXJkQXNCbG9iID0gKHBhc3RlRXZlbnQpID0+IHtcclxuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0aGlzLmltYWdlRmlsZUNhbGxiYWNrXHJcbiAgICAgICAgaWYgKCFwYXN0ZUV2ZW50LmNsaXBib2FyZERhdGEpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vLyBjYWxsIGNhbGJhY2sgZnVuY3Rpb24gdW5kZWZpbmVcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGl0ZW1zID0gcGFzdGVFdmVudC5jbGlwYm9hcmREYXRhLml0ZW1zO1xyXG4gICAgICAgIGlmICghaXRlbXMpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vLyBjYWxsIGNhbGJhY2sgZnVuY3Rpb24gdW5kZWZpbmVcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAvLyBTa2lwIGNvbnRlbnQgaWYgbm90IGltYWdlXHJcbiAgICAgICAgICAgIGlmIChpdGVtc1tpXS50eXBlLmluZGV4T2YoXCJpbWFnZVwiKSA9PSAtMSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICB2YXIgZmlsZSA9IGl0ZW1zW2ldLmdldEFzRmlsZSgpXHJcbiAgICAgICAgICAgIHRoaXMucmV0cmlldmVJbWFnZSggZmlsZSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2hvd0xpc3RFbW9qaSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHZhciBlbW9qaXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWVtb2ppc1wiKTtcclxuICAgICAgICBpZiAoZW1vamlzKSB7XHJcbiAgICAgICAgICAgIGVtb2ppcy5jbGFzc0xpc3QuYWRkKFwic2hvdy10ZW1wXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGhhbmRsZVNlbmRDaGF0Q2xpY2sgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIC8vLy8gc2VuZCBjbGFzcyBpcyB3cml0ZSBtZXNzYWdlXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pcy13cml0ZS1tZXNzYWdlXCIpLmNsYXNzTGlzdC5hZGQoXCJmb2xsb3ctY29udmVyc2F0aW9uXCIpXHJcblxyXG4gICAgICAgIC8vL3NlbmQgdHlwaW5nIFxyXG4gICAgICAgIHZhciB7IHVzZXIgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICB2YXIgY2hhbm5lbFNlbmQgPSB0aGlzLnByb3BzLnVzZXJDaGF0LmZpbmQoY2hhbm5lbCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBjaGFubmVsLmlzQWN0aXZlID09IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHZhciBjaGFubmVsSWQgPSBjaGFubmVsU2VuZC5pZFxyXG4gICAgICAgIHZhciB0b2tlbkFjY2VzcyA9IHVzZXIudG9rZW5zLnRva2VuQWNjZXNzXHJcbiAgICAgICAgdmFyIGRldGVjdCA9IHRoaXMucHJvcHMuY2xpZW50XHJcblxyXG4gICAgICAgIHNlbmRUeXBpbmdNZXNzYWdlVG9DaGFubmVsKCBjaGFubmVsSWQsIHRva2VuQWNjZXNzLCBkZXRlY3QgKVxyXG4gICAgfVxyXG4gICAgY2hvb3NlRmlsZSA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlLWZpbGVcIikuY2xpY2soKVxyXG4gICAgfVxyXG5cclxuICAgIHNhdmVGaWxlID0gKCkgPT4ge1xyXG5cclxuICAgICAgICBcclxuICAgICAgICB2YXIgZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2UtZmlsZVwiKS5maWxlc1swXSBcclxuICAgICAgICB2YXIgYWNjZXB0ID0gLyhcXC5qcGd8XFwuanBlZ3xcXC5ibXB8XFwuZ2lmfFxcLnBuZ3xcXC5pbWFnZSkkL2lcclxuICAgICAgICBpZihhY2NlcHQuZXhlYyhmaWxlLm5hbWUpKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMucmV0cmlldmVJbWFnZSggZmlsZSApXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYWNjZXB0ID0gLyhcXC54bHN8XFwueGxzeHxcXC5jc3Z8XFwucGRmfFxcLmRvY3xcXC5kb2N4KSQvaVxyXG4gICAgICAgIGlmKGFjY2VwdC5leGVjKGZpbGUubmFtZSkpeyBcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmV0cmlldmVGaWxlKCBmaWxlIClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFsZXJ0KFwiRmlsZSBleHRlbnNpb24gbm90IHN1cHBvcnRlZCFcIilcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMudXNlciB8fCAhdGhpcy5wcm9wcy5zb2NrZXQgfHwgIXRoaXMucHJvcHMudXNlckNoYXQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB7IHVzZXJDaGF0IH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgdmFyIGNoYW5uZWxBY3RpdmVDaGF0ID0gdXNlckNoYXQuZmluZChjaGFubmVsID0+IGNoYW5uZWwuaXNBY3RpdmUpO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwianMtaXMtd3JpdGUtbWVzc2FnZVwiIGNsYXNzTmFtZT1cImNvbXBvbmVudC1pbnB1dC1zZW5kLWNoYXQgZm9sbG93LWNvbnZlcnNhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPE1lc3NhZ2VDaGF0VHlwaW5nIHRvVXNlcj17Y2hhbm5lbEFjdGl2ZUNoYXR9IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwianMtaW1hZ2UtLWJsb2NrXCIgY2xhc3NOYW1lPVwiaW1hZ2UtYmxvY2tcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8tZmlsZS1jbG91ZC1vdXRsaW5lIGZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLmNob29zZUZpbGUgfVxyXG4gICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImltYWdlLWZpbGVcIiB0eXBlPVwiZmlsZVwiIGNsYXNzTmFtZT1cImQtbm9uZVwiIGFjY2VwdD1cIi54bHMsLnhsc3gsLmNzdixpbWFnZS8qLC5wZGYsLmRvYywuZG9jeFwiIG9uQ2hhbmdlPXsgdGhpcy5zYXZlRmlsZSB9IC8+XHJcbiAgICAgICAgICAgICAgICA8aVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLXN0aWNrZXItZW1vamkgZW1vdGljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2hvd0xpc3RFbW9qaX1cclxuICAgICAgICAgICAgICAgID48L2k+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImpzLWlucHV0LWNoYXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVTZW5kTWVzc2FnZURvd259XHJcbiAgICAgICAgICAgICAgICAgICAgb25LZXlVcD17dGhpcy5oYW5kbGVTZW5kTWVzc2FnZVVwfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2VuZENoYXRDbGlja31cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuODoeODg+OCu+ODvOOCuOOCkuabuOOBjy4uLlwiXHJcbiAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImhlcm8taWNvbiBoZXJvLXNlbmQtb3V0bGluZSBzZW5kXCIgb25DbGljaz17dGhpcy5oYW5kbGVTZW5kTWVzc2FnZVN1Ym1pdH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaGVyby1pY29uIGhlcm8taGVhcnQtbXVsdGlwbGUtb3V0bGluZSByZWFjdFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2VuZEVtb2ppU3VibWl0fT48L2k+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEVtb2ppIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VyICAgIDogc3RhdGUudXNlcnMsXHJcbiAgICAgICAgY2xpZW50ICA6IHN0YXRlLmNsaWVudCxcclxuICAgICAgICB1c2VyQ2hhdDogc3RhdGUudXNlckNoYXQsXHJcbiAgICAgICAgc29ja2V0ICA6IHN0YXRlLnNvY2tldFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShJbnB1dFNlbmRDaGF0KTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRW1vamkgZnJvbSBcIi4vRW1vamkuanN4XCI7XHJcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uL2NvbmZpZy9pbmRleC5qc1wiXHJcblxyXG5jbGFzcyBMaXN0RW1vamkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJqcy1lbW9qaXNcIiBjbGFzc05hbWU9XCJjb21wb25lbnQtbGlzdC1lbW9qaVwiPlxyXG4gICAgICAgICAgICAgICAge2NvbmZpZy5FTU9KSVMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEVtb2ppIGtleT17aXRlbS5zaWdufSBzeW1ib2w9e2l0ZW0uc3ltYm9sfSBzaWduPXtpdGVtLnNpZ259IC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBMaXN0RW1vamk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IEhlYWRJbmZvIGZyb20gXCIuL0hlYWRJbmZvLmpzeFwiXHJcbmltcG9ydCBNZXNzYWdlQ2hhdCBmcm9tIFwiLi9NZXNzYWdlQ2hhdC5qc3hcIlxyXG5pbXBvcnQgSW5wdXRTZW5kQ2hhdCBmcm9tIFwiLi9JbnB1dFNlbmRDaGF0LmpzeFwiXHJcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIlxyXG5pbXBvcnQgXCIuLi8uLi9zY3NzL2NoYXQvbGlzdC1tZXNzYWdlLnNjc3NcIlxyXG5pbXBvcnQgeyBsaXN0ZW5TY3JvbGxNZXNzYWdlIH0gZnJvbSBcIi4uLy4uL2xpYnJhcnkvc2VydmljZS5qc1wiXHJcblxyXG5jbGFzcyBMaXN0TWVzc2FnZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIFxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG5cclxuICAgICAgICB2YXIgeyBjaGFubmVscyB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIHZhciBjaGFubmVsQWN0aXZlQ2hhdCA9IGNoYW5uZWxzLmZpbmQoY2hhbm5lbCA9PiBjaGFubmVsLmlzQWN0aXZlKVxyXG5cclxuICAgICAgICB2YXIgbWVzc2FnZXMgPSBjaGFubmVsQWN0aXZlQ2hhdCAmJiBjaGFubmVsQWN0aXZlQ2hhdC5tZXNzYWdlXHJcblxyXG4gICAgICAgIHZhciBsc3RNZXNzYWdlICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtc2Nyb2xsLXRvLWJvdHRvbScpXHJcbiAgICAgICAgaWYobHN0TWVzc2FnZSl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAkKCcjanMtc2Nyb2xsLXRvLWJvdHRvbScpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgbGlzdGVuU2Nyb2xsTWVzc2FnZSh0aGlzLCBtZXNzYWdlcywgY2hhbm5lbEFjdGl2ZUNoYXQpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHZhciB7IGNoYW5uZWxzIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgdmFyIGNoYW5uZWxBY3RpdmVDaGF0ID0gY2hhbm5lbHMuZmluZChjaGFubmVsID0+IGNoYW5uZWwuaXNBY3RpdmUpO1xyXG5cclxuICAgICAgICB2YXIgbWVzc2FnZXMgPSBjaGFubmVsQWN0aXZlQ2hhdCAmJiBjaGFubmVsQWN0aXZlQ2hhdC5tZXNzYWdlO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1saXN0LW1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxIZWFkSW5mbyAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyLWxpc3QtbWVzc2FnZVwiIGlkPVwianMtc2Nyb2xsLXRvLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHttZXNzYWdlcyAmJiBtZXNzYWdlcy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChtZXNzYWdlLCBrZXkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZUNoYXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1wibWVzc2FnZS1jaGF0XCIgKyBrZXkgKyBjaGFubmVsQWN0aXZlQ2hhdC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXttZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5uZWxBY3RpdmVDaGF0PXtjaGFubmVsQWN0aXZlQ2hhdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPElucHV0U2VuZENoYXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5sZXQgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNoYW5uZWxzOiBzdGF0ZS51c2VyQ2hhdFxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShMaXN0TWVzc2FnZSk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgXCIuLi8uLi9zY3NzL2NoYXQvbGlzdC11c2VyLnNjc3NcIlxyXG5pbXBvcnQgVXNlckNoYXQgZnJvbSBcIi4vVXNlckNoYXQuanN4XCJcclxuXHJcbmNsYXNzIExpc3RVc2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgLy8vIHVzZXJDaGF0IMSRxrDhu6NjIHBhc3MgdOG7qyBjaGEgdsOgb1xyXG4gICAgICAgIHZhciB7IGNvbnZlcnNhdGlvbnMgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtbGlzdC11c2VyXCI+XHJcbiAgICAgICAgICAgICAgICB7IGNvbnZlcnNhdGlvbnMgJiYgY29udmVyc2F0aW9ucy5tYXAoY2hhbm5lbCA9PiA8VXNlckNoYXQga2V5PXtjaGFubmVsLmlkfSBjaGFubmVsPXtjaGFubmVsfSAvPikgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0VXNlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCAnLi4vLi4vc2Nzcy9jaGF0L21lc3NhZ2UtY2hhdC5zY3NzJ1xyXG5pbXBvcnQgQ09ORklHIGZyb20gXCIuLi8uLi9jb25maWdcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuXHJcbmNsYXNzIE1lc3NhZ2VDaGF0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIHsgYXV0aCwgbWVzc2FnZSwgY2hhbm5lbEFjdGl2ZUNoYXQgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICAgICAgdmFyIG15aW5mbyA9IHsgYXZhdGFyIDogJycsIG5hbWU6ICcnIH1cclxuICAgICAgICBpZiggYXV0aCAmJiBhdXRoLmlkICl7XHJcbiAgICAgICAgICAgIG15aW5mby5hdmF0YXIgPSBhdXRoLmF2YXRhclxyXG4gICAgICAgICAgICBteWluZm8ubmFtZSAgID0gYXV0aC5maXJzdF9uYW1lICsgXCIgXCIgKyBhdXRoLmxhc3RfbmFtZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFjaGFubmVsQWN0aXZlQ2hhdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdXNlckluZm8gPSBjaGFubmVsQWN0aXZlQ2hhdC51c2VyXHJcblxyXG4gICAgICAgIGlmICghbWVzc2FnZS50eXBlKSB7XHJcbiAgICAgICAgICAgIHZhciB0eXBlTWVzc2FnZSA9ICdsZWZ0LW1lc3NhZ2UgJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgdHlwZU1lc3NhZ2UgPSAncmlnaHQtbWVzc2FnZSBieS1tZSAnO1xyXG4gICAgICAgICAgICB1c2VySW5mbyA9IG15aW5mbztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHsgc3R5bGUgfSA9IG1lc3NhZ2VcclxuXHJcbiAgICAgICAgdmFyIFRJTUVfRElFX0ZJTEUgPSAyNCAqIDYwICogNjAgKiAxMDAwXHJcbiAgICAgICAgXHJcblxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1tZXNzYWdlLWNoYXRcIiA+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R5cGVNZXNzYWdlICsgXCJjaGF0LWdyb3VwXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtDT05GSUcuU0VSVkVSX1BIUC5VUkwgKyB1c2VySW5mby5hdmF0YXJ9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgPT0gXCJJTUFHRVwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGV9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuYXR0YWNobWVudC5tYXAoKCBhdHRhY2hFbGVtZW50ICwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBhdHRhY2hFbGVtZW50LnR5cGUgPT0gJ2ltZycgKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGF0dGFjaEVsZW1lbnQudGltZSAmJiBhdHRhY2hFbGVtZW50LnRpbWUgLSBUSU1FX0RJRV9GSUxFIDwgKG5ldyBEYXRlKS5nZXRUaW1lKCkgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtcIndyYXBwZXItYXR0YWNobWVudFwiICsgaW5kZXggKyBhdHRhY2hFbGVtZW50LnVybCB9IGNsYXNzTmFtZT1cIndyYXBwZXItYXR0YWNobWVudFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Q09ORklHLlNFUlZFUl9QSFAuVVJMICsgYXR0YWNoRWxlbWVudC51cmwgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRvd25sb2FkLWZpbGUtYXR0YWNobWVudFwiIGhyZWY9eyBDT05GSUcuU0VSVkVSX1BIUC5VUkwgKyBhdHRhY2hFbGVtZW50LnVybCB9IHRhcmdldD1cIl9ibGFua1wiIGRvd25sb2FkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJoZXJvLWljb24gaGVyby1jbG91ZC1kb3dubG9hZC1vdXRsaW5lXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17XCJ3cmFwcGVyLWF0dGFjaG1lbnRcIiArIGluZGV4ICsgQ09ORklHLlNFUlZFUl9QSFAuVVJMICsgXCIvaW1hZ2UvZm9sZGVyLmpwZ1wiIH0gY2xhc3NOYW1lPVwid3JhcHBlci1hdHRhY2htZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsgQ09ORklHLlNFUlZFUl9QSFAuVVJMICsgXCIvaW1hZ2UvZm9sZGVyLmpwZ1wiIH0gLz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZG93bmxvYWQtZmlsZS1hdHRhY2htZW50XCIgaHJlZj17IENPTkZJRy5TRVJWRVJfUEhQLlVSTCArIGF0dGFjaEVsZW1lbnQudXJsIH0gdGFyZ2V0PVwiX2JsYW5rXCIgZG93bmxvYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJoZXJvLWljb24gaGVyby1jbG91ZC1kb3dubG9hZC1vdXRsaW5lXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlICsgXCIgdGV4dFwifSA+e21lc3NhZ2UuY29udGVudH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFtZXNzYWdlLnR5cGUgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhbWVzc2FnZS5yZWFkID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0naGVyby1pY29uIGhlcm8tY2hlY2stY2lyY2xlLW91dGxpbmUnPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdoZXJvLWljb24gaGVyby1jaGVjay1jaXJjbGUnPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGF1dGggICAgOiBzdGF0ZS51c2Vyc1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShNZXNzYWdlQ2hhdCkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuY2xhc3MgTWVzc2FnZUNoYXRUeXBpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHZhciB7IHRvVXNlciB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGlmICghdG9Vc2VyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjaGFubmVsSW5mb3IgPSB0b1VzZXI7XHJcbiAgICAgICAgdmFyIHVzZXJUeXBpbmcgPSBjaGFubmVsSW5mb3IudXNlclxyXG4gICAgICAgIHZhciB0eXBlTWVzc2FnZSA9ICdmbG9hdC1sZWZ0ICc7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cImpzLXR5cGluZ1wiIGNsYXNzTmFtZT1cImNvbXBvbmVudC1tZXNzYWdlLWNoYXQgdHlwaW5nLWNoYXQtbWVzc3NhZ2VcIiBjaGFubmVsPXt0b1VzZXIuaWR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R5cGVNZXNzYWdlICsgXCJjaGF0LWdyb3VwIGh1bmd0dFwifT5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2UtY29udGVudCB0eXBpbmctbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0eXBpbmctdGV4dFwiPnt1c2VyVHlwaW5nLmZpcnN0X25hbWUgJiYgdXNlclR5cGluZy5sYXN0X25hbWUgKyBcIiDjgYzlhaXlipvjgZfjgabjgYTjgb7jgZkgXCJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpZG90XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGlkb3RcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aWRvdFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VDaGF0VHlwaW5nO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG4vLyBpbXBvcnQgU2VhcmNoVXNlciBmcm9tIFwiLi9TZWFyY2hVc2VyLmpzeFwiXHJcbmltcG9ydCBMaXN0VXNlciBmcm9tIFwiLi9MaXN0VXNlci5qc3hcIlxyXG5pbXBvcnQgXCIuLi8uLi9zY3NzL2NoYXQvc2lkZWJhci5zY3NzXCJcclxuaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vLi4vY29uZmlnXCJcclxuXHJcbmNsYXNzIFNpZGVCYXJDaGF0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXIgc2lkZWJhclwiKVxyXG4gICAgICAgIHZhciBpbmZvciA9IHsgYXZhdGFyOiAnJywgbmFtZTogJycgfVxyXG4gICAgICAgIHZhciB7IGF1dGggfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBpZiAoYXV0aCAmJiBhdXRoLmlkKSB7XHJcbiAgICAgICAgICAgIGluZm9yLmF2YXRhciA9IGF1dGguYXZhdGFyXHJcbiAgICAgICAgICAgIGluZm9yLm5hbWUgPSBhdXRoLmZpcnN0X25hbWUgKyBcIiBcIiArIGF1dGgubGFzdF9uYW1lIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtc2lkZWJhci1jaGF0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15aW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwic3RhdGUtYXZhdGFyIGFjdGl2ZS1vbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsgQ09ORklHLlNFUlZFUl9QSFAuVVJMICsgaW5mb3IuYXZhdGFyIH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj57aW5mb3IubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC11c2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RVc2VyIGNvbnZlcnNhdGlvbnM9e3RoaXMucHJvcHMuY29udmVyc2F0aW9uc30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmxldCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYXV0aDogc3RhdGUudXNlcnMsXHJcbiAgICAgICAgY29udmVyc2F0aW9uczogc3RhdGUudXNlckNoYXRcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoU2lkZUJhckNoYXQpXHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IFRZUEUgZnJvbSBcIi4uLy4uL2FjdGlvbi90eXBlLmpzXCJcclxuaW1wb3J0IENPTkZJRyBmcm9tIFwiLi4vLi4vY29uZmlnXCJcclxuY2xhc3MgVXNlckNoYXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNoYW5nZUFjdGl2ZVVzZXIgPSAoIGUgLCBpZCkgPT4ge1xyXG5cclxuICAgICAgICBlLnByb3BzLmRpc3BhdGNoKHsgdHlwZTogVFlQRS5DSEFULkNIQU5HRV9VU0VSX0NIQVRfREVGQVVMVCwgcGF5bG9hZDogaWQgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIHsgY2hhbm5lbCB9ICAgICAgICA9IHRoaXMucHJvcHMsXHJcbiAgICAgICAgICAgIGNsYXNzQWN0aXZlT25saW5lICA9IGNoYW5uZWwudXNlci5vbmxpbmUgPyAnIGFjdGl2ZSAnIDogJycsXHJcbiAgICAgICAgICAgIGNsYXNzQWN0aXZlTWVzc2FnZSA9IGNoYW5uZWwuaXNBY3RpdmUgPyAnIGFjdGl2ZS1tZXNzYWdlICcgOiAnJ1xyXG5cclxuICAgICAgICB2YXIgW2xhc3RJdGVtXSA9IGNoYW5uZWwubWVzc2FnZS5zbGljZSgtMSlcclxuXHJcbiAgICAgICAgdmFyIG11bmJlck5vbmVSZWFkID0gY2hhbm5lbC5tZXNzYWdlLmZpbHRlcihtZXNzYWdlID0+ICFtZXNzYWdlLnJlYWQgJiYgIW1lc3NhZ2UudHlwZSApLmxlbmd0aFxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC11c2VyLWNoYXQtc2lkZWJhclwiID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc0FjdGl2ZU9ubGluZSArIGNsYXNzQWN0aXZlTWVzc2FnZSArIFwidXNlci1jaGF0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5jaGFuZ2VBY3RpdmVVc2VyKHRoaXMsIGNoYW5uZWwuaWQpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJzdGF0ZS1hdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0NPTkZJRy5TRVJWRVJfUEhQLlVSTCArIGNoYW5uZWwudXNlci5hdmF0YXJ9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPntjaGFubmVsLnVzZXIuZmlyc3RfbmFtZSArIFwiIFwiICsgY2hhbm5lbC51c2VyLmxhc3RfbmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFzdEl0ZW0gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhc3QtbWVzc2FnZVwiPntsYXN0SXRlbS5jb250ZW50fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bmJlck5vbmVSZWFkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibm9uZS1yZWFkLW1lc3NhZ2VcIj57bXVuYmVyTm9uZVJlYWR9PC9pPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgpKFVzZXJDaGF0KSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBTaWRlQmFyQ2hhdCBmcm9tIFwiLi9TaWRlQmFyQ2hhdC5qc3hcIlxyXG5pbXBvcnQgTGlzdE1lc3NhZ2UgZnJvbSBcIi4vTGlzdE1lc3NhZ2UuanN4XCJcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCB7IGdldEFjY2Vzc1Rva2VuQnlSZWZlc2ggfSBmcm9tIFwiLi4vLi4vbGlicmFyeS9zZXJ2aWNlLmpzXCJcclxuaW1wb3J0ICcuLi8uLi9zY3NzL2NoYXQvY2hhdC5zY3NzJ1xyXG5jbGFzcyBDaGF0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHJcbiAgICAgICAgLy8vIG3hu5dpIGzhuqduIHbDoG8gY2hhdCB0aMOsIGJ14buZYyBwaOG6o2kgY8OzIDEgcmVmZXNoIHRva2VuLiBu4bq/dSBraMO0bmcgdGjDrCBs4buXaS4gXHJcbiAgICAgICAgLy8vIEThu7FhIHbDoG8gcmVmZXNoIHRva2VuIHRhIHPhur0gdOG6oW8gcmEgMSBhY2Nlc3MgdG9rZW4gXHJcbiAgICAgICAgLy8vIHNvbmcgc29uZyB2aeG7h2MgZmV0Y2ggYWNjZXNzdG9rZW4gdGjDrCBs4bqvbmcgbmdoZSB0cm9uZyBzb2NrZXQgbuG6v3UgY8OzIFxyXG4gICAgICAgIC8vLyBhY2Nlc3MgdG9rZW4gdGjDrCBjaG8gcGjDqXAgc3RhcnQgY2hhdFxyXG4gICAgICAgIHZhciBpbnN0YW5jZUNoYXQgICAgID0gdGhpcyxcclxuICAgICAgICAgICAgVE9LRU5fUkVGRVNIX0RPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiVE9LRU5fUkVGRVNIXCIpLFxyXG4gICAgICAgICAgICB7IGRldGVjdCB9ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgICAgICBpZiggVE9LRU5fUkVGRVNIX0RPTSApe1xyXG4gICAgICAgICAgICAvLy8gZmV0Y2ggdG9rZW4gYWNjZXNzIGJ5IHRva2VuIHJlZmVzaCBcclxuICAgICAgICAgICAgdmFyIHJlZmVzaCA9IFRPS0VOX1JFRkVTSF9ET00uZ2V0QXR0cmlidXRlKCdkYXRhLXJlZmVzaCcpLFxyXG4gICAgICAgICAgICAgICAgdXNlcklkID0gVE9LRU5fUkVGRVNIX0RPTS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdXNlcicpXHJcblxyXG4gICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgICAgIC8vIHZhciBuYW1lID0gJ2lkJ1xyXG4gICAgICAgICAgICAvLyB2YXIgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgICAgIC8vIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1tcXFtcXF1dL2csICdcXFxcJCYnKTtcclxuICAgICAgICAgICAgLy8gdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnWz8mXScgKyBuYW1lICsgJyg9KFteJiNdKil8JnwjfCQpJyksXHJcbiAgICAgICAgICAgIC8vICAgICByZXN1bHRzID0gcmVnZXguZXhlYyh1cmwpXHJcbiAgICAgICAgICAgIC8vIGlmICghcmVzdWx0cykgdXNlcklkID0gbnVsbFxyXG4gICAgICAgICAgICAvLyBlbHNlIGlmICghcmVzdWx0c1syXSkgdXNlcklkID0gJydcclxuICAgICAgICAgICAgLy8gZWxzZSB1c2VySWQgPSBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1syXS5yZXBsYWNlKC9cXCsvZywgJyAnKSlcclxuXHJcbiAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAgICAgaWYoIHVzZXJJZCApeyAvLyAmJiByZWZlc2hcclxuXHJcbiAgICAgICAgICAgICAgICBnZXRBY2Nlc3NUb2tlbkJ5UmVmZXNoKCB1c2VySWQsIHJlZmVzaCwgZGV0ZWN0LCBpbnN0YW5jZUNoYXQgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZW5kZXIgbOG6oWkgQ2hhdFwiKVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1jaGF0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWNoYXQtdGVtYWxhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXItcGFnZS1jaGF0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaWRlQmFyQ2hhdCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdE1lc3NhZ2UgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkZXRlY3QgICAgICAgOiBzdGF0ZS5jbGllbnRcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQ2hhdClcclxuXHJcblxyXG5cclxuXHJcbi8vIHVzZXJDaGF0OiAoMykgW3tcclxuLy8gICAgIGF2YXRhcjogXCIvaW1hZ2UvYXZhdGFyLWhlcm8uanBnXCJcclxuLy8gICAgIGNoYW5uZWxOYW1lOiBcImNvbnN1bHRpbmctd2ViLWRlc2lnbi01ZWQxMThhMDRmYTc1ODA1YjdlOTk2ZmJcIlxyXG4vLyAgICAgaWQ6IFwiNWVkMTE4YTA0ZmE3NTgwNWI3ZTk5NmZkXCJcclxuLy8gICAgIGlzQWN0aXZlOiB0cnVlXHJcbi8vICAgICBpc09ubGluZTogdHJ1ZVxyXG4vLyAgICAgbWVzc2FnZTogKDExOCkgW1xyXG4gICAgICAgIFxyXG4vLyAgICAgICAgIHt0eXBlOiB0cnVlLCBjb250ZW50OiBcImdmZGdmZGdcIiwgc3R5bGU6IFwiXCIsIGF0dGFjaG1lbnQ6IEFycmF5KDApfVxyXG4vLyAgICAgICAgIHt0eXBlOiB0cnVlLCBjb250ZW50OiBcIiDwn5KdIFwiLCBzdHlsZTogXCJFTU9KSVwiLCBhdHRhY2htZW50OiBudWxsfVxyXG4vLyAgICAgICAgIHt0eXBlOiB0cnVlLCBjb250ZW50OiBcIiDwn5iEIFwiLCBzdHlsZTogXCJFTU9KSVwiLCBhdHRhY2htZW50OiBBcnJheSgwKX1cclxuLy8gICAgICAgICB7dHlwZTogdHJ1ZSwgY29udGVudDogXCJldmVudC5wbmdcIiwgc3R5bGU6IFwiSU1BR0VcIiwgYXR0YWNobWVudDogW1wiL3VwbG9hZHMvMTU5MTU0MDIzNzA2NC1pbWFnZS5wbmdcIl0gfVxyXG4vLyAgICAgICAgIHvigKZ9LCB74oCmfSwge+KApn0sIHvigKZ9LCB74oCmfSwge+KApn1dXHJcbi8vICAgICBuYW1lOiBcImjDuW5nIMSR4bq5cCB0cmFpXCJcclxuLy8gICAgIHRpbWVFbmRPbmxpbmU6IFwiMjAyMC0wNS0xMCAxNDo0NzowMFwiXHJcbi8vIH0sIHvigKZ9LCB74oCmfV1cclxuLy8gdXNlcnM6IHtcclxuLy8gICAgIGF2YXRhcjogXCIvaW1hZ2UvYXZhdGFyLmpwZ1wiXHJcbi8vICAgICBlbWFpbDogXCJqYnRydW9uZ3RoYW5oaHVuZ0BnbWFpbC5jb21cIlxyXG4vLyAgICAgbmFtZTogXCLlpKnmsrzmvoTlrZBcIlxyXG4vLyAgICAgcGhvbmVzOiBbe+KApn1dXHJcbi8vICAgICB0b2tlbnM6IHt0b2tlblJlZmVzaDogXCJjZWJiYjA4OTM2ODJjMzc4ZjRmNDU5NWQwMzFkMWU1NFwiLCB0b2tlbkFjY2VzczogXCI3NDIyMjQ4OGQzMWU0NGQ2NWRmYTkwNTNhYTMzNTA3M1wiLCBwZXJpb2Q6IFwiMjAyMC0wNi0xM1QwMjozMToxNS41OTdaXCIsIGV4cGlyZTogNjB9XHJcbi8vICAgICB1c2VyVHlwZTogXCJVc2VyXCJcclxuLy8gICAgIF9pZDogXCI1ZWQxMThhMDRmYTc1ODA1YjdlOTk2ZmJcIlxyXG4vLyB9IiwidmFyIGxvY2FsICAgICAgPSBcIjE1My4xMjYuMTQ5LjYzXCIsXHJcbiAgICBsb2NhbF9pcCAgID0gXCIxNTMuMTI2LjE0OS42M1wiLFxyXG4gICAgbG9jYWxfcG9ydCA9IDk5OTksXHJcbiAgICBwZWVyX3BvcnQgID0gNzAwMFxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIFNFUlZFUjoge1xyXG4gICAgUE9SVDogbG9jYWxfcG9ydCxcclxuICAgIERPTUFJTjogbG9jYWwsXHJcbiAgICBJUDogbG9jYWxfaXAsXHJcbiAgICBQRUVSX1BPUlQgOiBwZWVyX3BvcnQsXHJcbiAgICBQUk9UT0NPTDogZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAobG9jYWxfcG9ydCA9PSA0NDMpIHtcclxuICAgICAgICByZXR1cm4gXCJodHRwczovL1wiXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIFwiaHR0cDovL1wiXHJcbiAgICB9LFxyXG4gICAgQVNTRVQ6ICgpID0+IHtcclxuICAgICAgbGV0IHBvcnRfdXJsID0gJydcclxuICAgICAgbGV0IHByb3RvY29sID0gJydcclxuICAgICAgaWYgKGxvY2FsX3BvcnQgPT0gNDQzKSB7XHJcbiAgICAgICAgcHJvdG9jb2wgPSBcImh0dHBzOi8vXCJcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwcm90b2NvbCA9IFwiaHR0cDovL1wiXHJcbiAgICAgICAgcG9ydF91cmwgPSAnOicgKyBsb2NhbF9wb3J0XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBwcm90b2NvbCArIGxvY2FsICsgcG9ydF91cmw7XHJcbiAgICB9XHJcbiAgfSxcclxuICBTRVJWRVJfUEhQOiB7XHJcbiAgICBVUkw6IFwiaHR0cDovL2JhYnlzaXR0ZXIudHJ1c3QtZ3Jvd3RoLmNvLmpwXCIgXHJcbiAgfSxcclxuICBFTU9KSVM6IFtcclxuICAgIHsgc3ltYm9sOiBcIvCfpK1cIiwgc2lnbjogXCI6M1wiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn6SjXCIsIHNpZ246IFwiOnZcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+ZglwiLCBzaWduOiBcIjopXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmYJcIiwgc2lnbjogXCI9KVwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iKXCIsIHNpZ246IFwiOl4pXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmIBcIiwgc2lnbjogXCI6fVwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iBXCIsIHNpZ246IFwiOm8pXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmINcIiwgc2lnbjogXCI6LURcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YhFwiLCBzaWduOiBcIjpEXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmIZcIiwgc2lnbjogXCJYLURcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YjVwiLCBzaWduOiBcIkJeRFwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5mBXCIsIHNpZ246IFwiOi0oXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmKBcIiwgc2lnbjogXCI6KFwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5ihXCIsIHNpZ246IFwiOuKAkTxcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YnlwiLCBzaWduOiBcIjpbXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmJ9cIiwgc2lnbjogXCI+OltcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+Yo1wiLCBzaWduOiBcIjp7XCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmJZcIiwgc2lnbjogXCI+OihcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YolwiLCBzaWduOiBcIjon4oCRKFwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5itXCIsIHNpZ246IFwiOicoXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmIJcIiwgc2lnbjogXCI6JylcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YqFwiLCBzaWduOiBcIkTigJEnOlwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5inXCIsIHNpZ246IFwiRDo8XCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmKZcIiwgc2lnbjogXCJEOlwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5ixXCIsIHNpZ246IFwiRDtcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+Yq1wiLCBzaWduOiBcIkQ9XCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmKlcIiwgc2lnbjogXCJEWFwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iuXCIsIHNpZ246IFwiOi0wXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmK9cIiwgc2lnbjogXCI44oCRMFwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iyXCIsIHNpZ246IFwiPjpPXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmJdcIiwgc2lnbjogXCI6LSpcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YmVwiLCBzaWduOiBcIjpeKlwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iaXCIsIHNpZ246IFwiOl4tXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmJhcIiwgc2lnbjogXCI6eFwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iNXCIsIHNpZ246IFwiOlhcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YiVwiLCBzaWduOiBcIjvigJEpXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmJxcIiwgc2lnbjogXCIqLSlcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YmFwiLCBzaWduOiBcIjtEXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmJtcIiwgc2lnbjogXCI6UFwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5idXCIsIHNpZ246IFwieOKAkXBcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YnFwiLCBzaWduOiBcIj1wXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfpJFcIiwgc2lnbjogXCI+OlBcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+klFwiLCBzaWduOiBcIjrigJEvXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmJVcIiwgc2lnbjogXCI64oCRLlwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5ifXCIsIHNpZ246IFwiOlNcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YkFwiLCBzaWduOiBcIjrigJF8XCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmJFcIiwgc2lnbjogXCI6fFwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5izXCIsIHNpZ246IFwiOiRcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YnlwiLCBzaWduOiBcIjpiM1wiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iWXCIsIHNpZ246IFwiOuKAkVhcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+kkFwiLCBzaWduOiBcIjomXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmLZcIiwgc2lnbjogXCJPOuKAkSlcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+Yh1wiLCBzaWduOiBcIk86KVwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5G8XCIsIHNpZ246IFwiMDteKVwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iIXCIsIHNpZ246IFwiPjszXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmI5cIiwgc2lnbjogXCJ8O+KAkSlcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YqlwiLCBzaWduOiBcInzigJFPXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmI9cIiwgc2lnbjogXCI64oCRSlwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn5iSXCIsIHNpZ246IFwiI+KAkSlcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+YtVwiLCBzaWduOiBcIiXigJEpXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmJVcIiwgc2lnbjogXCIlKVwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn6SSXCIsIHNpZ246IFwiOiMvXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfmLdcIiwgc2lnbjogXCI6RC1cIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+kolwiLCBzaWduOiBcIjpjUlwiIH0sXHJcbiAgICB7IHN5bWJvbDogXCLwn6SVXCIsIHNpZ246IFwiPDrigJEvXCIgfSxcclxuICAgIHsgc3ltYm9sOiBcIvCfpKhcIiwgc2lnbjogXCI6LWxcIiB9LFxyXG4gICAgeyBzeW1ib2w6IFwi8J+SnVwiLCBzaWduOiBcIjwzXCIgfVxyXG4gIF1cclxufSIsIi8vIGltcG9ydCAnY29yZS1qcyc7XHJcblxyXG4vKiBwb2x5ZmlsbHMuanMgKi9cclxuaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCdcclxuaW1wb3J0ICdyZWFjdC1hcHAtcG9seWZpbGwvaWUxMSdcclxuaW1wb3J0ICdjb3JlLWpzJ1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCIuL2NvbXBvbmVudC9BcHAuanNcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUmVkdWNlciBmcm9tICcuL3JlZHVjZXInO1xyXG5cclxuaW1wb3J0ICcuL3Njc3MvaW5kZXguc2NzcydcclxuXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoUmVkdWNlcik7XHJcbnN0b3JlLnN1YnNjcmliZShmdW5jdGlvbigpe1xyXG4gICAgY29uc29sZS5sb2coJ2PDsyB0aGF5IMSR4buVaSB0cm9uZyBSZWR1eCEhJylcclxuICAgIGNvbnNvbGUubG9nKHN0b3JlLmdldFN0YXRlKCkpO1xyXG59KTtcclxuaWYgKHR5cGVvZiAoU3RvcmFnZSkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBSZWFjdERPTS5yZW5kZXIoXHJcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICAgIDxBcHAgLz5cclxuICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkNIQVRfRUxFTUVOVFwiKSk7XHJcbn1lbHNle1xyXG4gICAgYWxlcnQoXCLjgZPjga7jg5bjg6njgqbjgrbjgafjga/jgIHjgqLjg5fjg6rjgrHjg7zjgrfjg6fjg7Pjga/mraPluLjjgavli5XkvZzjgZfjgb7jgZvjgpPjgIIg44Ki44OD44OX44Kw44Os44O844OJ44GX44Gm44GP44Gg44GV44GEXCIpXHJcbn1cclxuIiwiXHJcblxyXG5pbXBvcnQgQ09ORklHIGZyb20gXCIuLi9jb25maWdcIlxyXG4vLyBpbXBvcnQgUGVlciBmcm9tIFwicGVlcmpzXCJcclxuaW1wb3J0IHsgc2V0dGVyVXNlciwgc2V0dGVyQ2hhbm5lbHMsIGFkZE1lc3NhZ2UsIGFkZE1lc3NhZ2VTZW5kVG9NZSwgXHJcbiAgICBzZXR0ZXJTb2NrZXQsIGFkZFVzZXJPbmxpbmUsIHJlbW92ZVVzZXJPbmxpbmUsIHJlYWRBbGxNZXNzYWdlQ2hhbm5lbEFjdGl2ZSB9IGZyb20gXCIuLi9hY3Rpb25cIlxyXG4vLyBpbXBvcnQgY29uZmlnIGZyb20gXCIuLi9jb25maWdcIlxyXG5pbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCJcclxuXHJcblxyXG4vLy8gY29uZmlnIGdsb2JhbCB2YXJpYWJsZVxyXG52YXIgc29ja2V0ICAgICAgID0gbnVsbCxcclxuICAgIGdsb2JhbFN0cmVhbSA9IG51bGwsXHJcbiAgICBFVkVOVCAgICAgICAgPSBDT05GSUdfRVZFTlRcclxuLy8vIGVuZCBzZXR0aW5nIHZhcmlhYmxlXHJcblxyXG53aW5kb3cub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldCkge1xyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wb25lbnQtZW1vamknKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIGVtb2ppcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtZW1vamlzXCIpO1xyXG4gICAgaWYgKGVtb2ppcykge1xyXG4gICAgICAgIGVtb2ppcy5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGVtb2ppcy5jbGFzc0xpc3QuY29udGFpbnMoXCJzaG93LXRlbXBcIikpIHtcclxuICAgICAgICAgICAgICAgIGVtb2ppcy5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy10ZW1wXCIpO1xyXG4gICAgICAgICAgICAgICAgZW1vamlzLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwKTtcclxuICAgIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWNjZXNzVG9rZW5CeVJlZmVzaCggdXNlcklkLCByZWZlc2gsIGRldGVjdCwgaW5zdGFuY2VDb21wb25lbnQgKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImdldEFjY2Vzc1Rva2VuQnlSZWZlc2hcIilcclxuICAgIHZhciBkYXRhICAgICAgID0geyB1c2VySWQsIHJlZmVzaCwgLi4uIGRldGVjdCB9LFxyXG4gICAgICAgIHRva2Vuc1VzZXIgPSBudWxsXHJcbiAgICBmZXRjaChDT05GSUcuU0VSVkVSLkFTU0VUKCkgKyAnL2FwaS9yZWZlc2gnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5jb2RlICE9IDIwMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLjg63jgrDjgqTjg7Pjgrvjg4Pjgrfjg6fjg7PjgYzmraPjgZfjgY/jgYLjgorjgb7jgZvjgpPjgIIg5YaN5bqm44Ot44Kw44Kk44Oz44GZ44KL44GL44CB566h55CG6ICF44Gr6YCj57Wh44GX44Gm44GP44Gg44GV44GEXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRva2Vuc1VzZXIgPSB7IFxyXG4gICAgICAgICAgICBleHBpcmUgICAgIDogcmVzcG9uc2UuZGF0YS5leHBpcmUsXHJcbiAgICAgICAgICAgIHBlcmlvZCAgICAgOiByZXNwb25zZS5kYXRhLnBlcmlvZCxcclxuICAgICAgICAgICAgdG9rZW5BY2Nlc3M6IHJlc3BvbnNlLmRhdGEudG9rZW5BY2Nlc3MsXHJcbiAgICAgICAgICAgIHRva2VuUmVmZXNoOiByZXNwb25zZS5kYXRhLnRva2VuUmVmZXNoXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2V0aW1lIG91dCBcIiArIHBhcnNlSW50KHJlc3BvbnNlLmRhdGEuZXhwaXJlKSAqIDEwMDAgKVxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBDT05GSUcuU0VSVkVSX1BIUC5VUkxcclxuICAgICAgICB9LCBwYXJzZUludChyZXNwb25zZS5kYXRhLmV4cGlyZSkgKiAxMDAwIClcclxuICAgICAgICBcclxuICAgICAgICB2YXIgdXNlckxvZ2luID0geyAuLi4gcmVzcG9uc2UuZGF0YS51c2VyLCB0b2tlbnMgOiB0b2tlbnNVc2VyIH1cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXJMb2dpbikpXHJcbiAgICAgICAgaW5zdGFuY2VDb21wb25lbnQucHJvcHMuZGlzcGF0Y2goc2V0dGVyVXNlcih1c2VyTG9naW4pKVxyXG4gICAgICAgIHJldHVybiB7IGF1dGg6IHVzZXJMb2dpbiwgZGV0ZWN0IH1cclxuICAgIH0pXHJcbiAgICAudGhlbiggZGF0YUZldGNoQ2hhbm5lbCA9PiB7XHJcblxyXG4gICAgICAgIHZhciBkYXRhID0geyBhY2Nlc3M6IGRhdGFGZXRjaENoYW5uZWwuYXV0aC50b2tlbnMudG9rZW5BY2Nlc3MsIC4uLmRhdGFGZXRjaENoYW5uZWwuZGV0ZWN0IH1cclxuICAgICAgICByZXR1cm4gZmV0Y2hDaGFubmVsTWVzc2FnZSggZGF0YSApXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oIGRhdGFDaGFubmVsID0+IHtcclxuICAgICAgICBpZiggIWRhdGFDaGFubmVsICl7XHJcbiAgICAgICAgICAgIGFsZXJ0KCBcIuODreOCsOOCpOODs+OCu+ODg+OCt+ODp+ODs+OBjOato+OBl+OBj+OBguOCiuOBvuOBm+OCk+OAgiDlho3luqbjg63jgrDjgqTjg7PjgZnjgovjgYvjgIHnrqHnkIbogIXjgavpgKPntaHjgZfjgabjgY/jgaDjgZXjgYRcIilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBoYXNBZG1pbkNoYW5uZWwgPSBmYWxzZVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCBkYXRhQ2hhbm5lbC5sZW5ndGggKXtcclxuICAgICAgICAgICAgZm9yIChsZXQgaUNoYW5uZWwgPSAwOyBpQ2hhbm5lbCA8IGRhdGFDaGFubmVsLmxlbmd0aDsgaUNoYW5uZWwrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoYW5uZWxOYW1lID0gKGRhdGFDaGFubmVsW2lDaGFubmVsXSkuY2hhbm5lbE5hbWVcclxuICAgICAgICAgICAgICAgIGlmKCBjaGFubmVsTmFtZS5tYXRjaCgnU0lOR0xFLShbMC05IC1dKiktMScpICl7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzQWRtaW5DaGFubmVsID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighaGFzQWRtaW5DaGFubmVsKXtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBnZXRDaGFubmVsQWRtaW4oeyB1c2VySWQsIHJlZmVzaCwgLi4uIGRldGVjdH0sIHRva2Vuc1VzZXIudG9rZW5BY2Nlc3MpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRhQ2hhbm5lbFxyXG4gICAgfSlcclxuICAgIC50aGVuKCBkYXRhQ2hhbm5lbCA9PiB7XHJcbiAgICAgICAgaWYoIGRhdGFDaGFubmVsICl7XHJcbiAgICAgICAgICAgIGluc3RhbmNlQ29tcG9uZW50LnByb3BzLmRpc3BhdGNoKHNldHRlckNoYW5uZWxzKGRhdGFDaGFubmVsKSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBhbGVydChcIuODreOCsOOCpOODs+OCu+ODg+OCt+ODp+ODs+OBjOato+OBl+OBj+OBguOCiuOBvuOBm+OCk+OAgiDlho3luqbjg63jgrDjgqTjg7PjgZnjgovjgYvjgIHnrqHnkIbogIXjgavpgKPntaHjgZfjgabjgY/jgaDjgZXjgYRcIilcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzZmVzaFRva2VuSWZFeHBpcmUoIGF1dGgsIGluc3RhbmNlQ2hhdCApe1xyXG4gICAgY29uc29sZS5sb2coIGF1dGgsIFwiYXV0aCBpbiByZXNmZXNoVG9rZW5JZkV4cGlyZVwiIClcclxuICAgIHZhciBkaWZmID0gKChuZXcgRGF0ZSkuZ2V0VGltZSgpIC0gbmV3IERhdGUoYXV0aC50b2tlbnMucGVyaW9kKS5nZXRUaW1lKCkpIC8gMTAwMFxyXG4gICAgaWYgKGRpZmYgPj0gYXV0aC50b2tlbnMuZXhwaXJlKSB7XHJcbiAgICAgICAgLy8vIGZldGNoIG5ldyB0b2tlblxyXG4gICAgICAgIHZhciBkYXRhUmVmZXNoID0geyBcclxuICAgICAgICAgICAgdXNlcklkOiBhdXRoLmlkLCBcclxuICAgICAgICAgICAgcmVmZXNoOiBhdXRoLnRva2Vucy50b2tlblJlZmVzaCwgXHJcbiAgICAgICAgICAgIGRldGVjdDogdGhpcy5wcm9wcy5jbGllbnQgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGFSZWZlc2gsIFwicmVmZXNoIHRva2VuIHbDrCBo4bq/dCBo4bqhbiByZWZlc2ggdG9rZW4gdsOsIGjhur90IGjhuqFuIHJlZmVzaCB0b2tlbiB2w6wgaOG6v3QgaOG6oW4gcmVmZXNoIHRva2VuIHbDrCBo4bq/dCBo4bqhbiByZWZlc2ggdG9rZW4gdsOsIGjhur90IGjhuqFuIHJlZmVzaCB0b2tlbiB2w6wgaOG6v3QgaOG6oW4gcmVmZXNoIHRva2VuIHbDrCBo4bq/dCBo4bqhbiByZWZlc2ggdG9rZW4gdsOsIGjhur90IGjhuqFuIHJlZmVzaCB0b2tlbiB2w6wgaOG6v3QgaOG6oW4gXCIpXHJcbiAgICAgICAgcmVzZmVzaFRva2VuRXhwaXJlKGRhdGFSZWZlc2gsIGluc3RhbmNlQ2hhdClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNvY2tldEluaXRpYWxDb25uZWN0KHNvY2tldElPQ2xpZW50LCBpbnN0YW5jZUFwcCkge1xyXG4gICAgXHJcbiAgICBcclxuICAgIHNvY2tldCA9IHNvY2tldElPQ2xpZW50KENPTkZJRy5TRVJWRVIuQVNTRVQoKSlcclxuICAgIHZhciBBcHBsaWNhdGlvbkRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQXBwbGljYXRpb25cIilcclxuICAgIHNvY2tldC5vbignY29ubmVjdCcsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgQXBwbGljYXRpb25Eb20gJiYgQXBwbGljYXRpb25Eb20uY2xhc3NMaXN0LnJlbW92ZShcImNvbm5lY3Qtc29ja2V0LWVycm9yXCIpXHJcbiAgICAgICAgLy8vLyBzZXQgY29uZmlnXHJcbiAgICAgICAgc29ja2V0TGlzdGVubmVyKHNvY2tldCwgaW5zdGFuY2VBcHApXHJcbiAgICAgICAgaW5zdGFuY2VBcHAucHJvcHMuZGlzcGF0Y2goc2V0dGVyU29ja2V0KHNvY2tldCkpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzb2NrZXQgY29ubmVjdCBuw6ggc29ja2V0TGlzdGVubmVyXCIpXHJcbiAgICB9KTtcclxuICAgIHNvY2tldC5vbignZGlzY29ubmVjdCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpbnN0YW5jZUFwcC5wcm9wcy5kaXNwYXRjaChzZXR0ZXJTb2NrZXQobnVsbCkpXHJcbiAgICAgICAgQXBwbGljYXRpb25Eb20gJiYgQXBwbGljYXRpb25Eb20uY2xhc3NMaXN0LmFkZChcImNvbm5lY3Qtc29ja2V0LWVycm9yXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzb2NrZXQgY29ubmVjdCBuw6ggZGlzY29ubmVjdFwiKVxyXG4gICAgfSk7XHJcbiAgICBzb2NrZXQub24oJ2Nvbm5lY3RfZXJyb3InLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgQXBwbGljYXRpb25Eb20gJiYgQXBwbGljYXRpb25Eb20uY2xhc3NMaXN0LmFkZChcImNvbm5lY3Qtc29ja2V0LWVycm9yXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzb2NrZXQgY29ubmVjdCBuw6ggY29ubmVjdF9lcnJvclwiKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIC8vQ2FsbGVyXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxsZXIoIGNoYW5uZWxJbmZvciwgdXNlciwgY2xpZW50ICl7XHJcbiAgICB2YXIgaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkFwcGxpY2F0aW9uXCIpLmdldEF0dHJpYnV0ZSgnZGF0YS1wZWVyJyApXHJcbiAgICBjb25zb2xlLmxvZyggaWQsIGNoYW5uZWxJbmZvciApXHJcbiAgICBvcGVuU3RyZWFtKClcclxuICAgIC50aGVuKHN0cmVhbSA9PiB7XHJcbiAgICAgICAgZ2xvYmFsU3RyZWFtID0gc3RyZWFtXHJcbiAgICAgICAgcGxheVN0cmVhbSgnaWQtcGVlci1sb2NhbCcsIHN0cmVhbSk7XHJcbiAgICAgICAgLy8vIGZldGNoIHBlZXJqcyBvZiB1c2VyIGluIGNoYW5uZWxcclxuICAgICAgICByZXR1cm4gZ2V0UGVlclVzZXJDaGFubmVsKCBjaGFubmVsSW5mb3IsIHVzZXIsIGNsaWVudCApXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjYWxsZXJcIilcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZW5kTWVzc2FnZVRvQ2hhbm5lbChtZXNzYWdlLCBzdHlsZSwgYXR0YWNobWVudCwgY2hhbm5lbElkLCBhY2Nlc3MsIGRldGVjdCwgaW5zdGFuY2VDb21wb25lbnQsIGRhdGFSZWZlc2gpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh7IG1lc3NhZ2UsIGNoYW5uZWxJZCwgYWNjZXNzLCBkZXRlY3QsIGluc3RhbmNlQ29tcG9uZW50LCBkYXRhUmVmZXNoIH0sIFwiYmVmb3JlIHNlbmRNZXNzYWdlVG9DaGFubmVsXCIpXHJcbiAgICBpZiAoIWRhdGFSZWZlc2gpIHtcclxuICAgICAgICBzb2NrZXQuZW1pdChFVkVOVC5TRU5EX01FU1NBR0UsIHsgbWVzc2FnZSwgc3R5bGUsIGF0dGFjaG1lbnQsIGNoYW5uZWxJZCwgYWNjZXNzLCAuLi5kZXRlY3QgfSlcclxuICAgICAgICAvLy8gXHJcbiAgICAgICAgaW5zdGFuY2VDb21wb25lbnQucHJvcHMuZGlzcGF0Y2goYWRkTWVzc2FnZSh7IHR5cGU6IHRydWUsIHJlYWQ6IHRydWUsIGNvbnRlbnQ6IG1lc3NhZ2UsIHN0eWxlLCBhdHRhY2htZW50IH0pKVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZGF0YVJlZmVzaCwgXCJyZWZlc2ggdG9rZW4gdHLGsOG7m2Mga2hpIHNlbmQgY2hhdCB2w6wgaOG6v3QgaOG6oW5cIilcclxuICAgIC8vLyDEkcOzbmcgYsSDbmcgcGjhuqduIGlucHV0IHRleHRhcmVhIG5o4bqtcCBjaGF0IFxyXG5cclxuICAgIC8vLy8gdXNlcklkIDogdXNlci5faWQsIHJlZmVzaCA6IHVzZXIudG9rZW5zLnRva2VuUmVmZXNoLCBkZXRlY3Q6IHRoaXMucHJvcHMuY2xpZW50IFxyXG4gICAgdmFyIHsgdXNlcklkLCByZWZlc2gsIGRldGVjdCB9ID0gZGF0YVJlZmVzaFxyXG4gICAgdmFyIGRhdGFGZXRjaCA9IHsgdXNlcklkLCByZWZlc2gsIC4uLmRldGVjdCB9XHJcblxyXG4gICAgZmV0Y2goQ09ORklHLlNFUlZFUi5BU1NFVCgpICsgJy9hcGkvcmVmZXNoJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGFGZXRjaCksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCByZXNwb25zZSAsIFwiL2FwaS9yZWZlc2hcIilcclxuICAgICAgICBpZiAocmVzcG9uc2UuY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRva2VuIHJlZmVzaCBraMO0bmcgxJHDum5nXCIpXHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgdmFyIHRva2Vuc1VzZXIgPSB7IFxyXG4gICAgICAgICAgICBleHBpcmU6IHJlc3BvbnNlLmRhdGEuZXhwaXJlLFxyXG4gICAgICAgICAgICBwZXJpb2Q6IHJlc3BvbnNlLmRhdGEucGVyaW9kLFxyXG4gICAgICAgICAgICB0b2tlbkFjY2VzczogcmVzcG9uc2UuZGF0YS50b2tlbkFjY2VzcyxcclxuICAgICAgICAgICAgdG9rZW5SZWZlc2g6IHJlc3BvbnNlLmRhdGEudG9rZW5SZWZlc2hcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHVzZXJMb2dpbiA9IHsgLi4uIHJlc3BvbnNlLmRhdGEudXNlciwgdG9rZW5zIDogdG9rZW5zVXNlciB9XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyTG9naW4pKVxyXG4gICAgICAgIGFjY2VzcyA9IHVzZXJMb2dpbi50b2tlbnMudG9rZW5BY2Nlc3NcclxuICAgICAgICBzb2NrZXQuZW1pdChFVkVOVC5TRU5EX01FU1NBR0UsIHsgbWVzc2FnZSwgc3R5bGUsIGF0dGFjaG1lbnQsIGNoYW5uZWxJZCwgYWNjZXNzLCAuLi5kZXRlY3QgfSlcclxuICAgICAgICBpbnN0YW5jZUNvbXBvbmVudC5wcm9wcy5kaXNwYXRjaChzZXR0ZXJVc2VyKHVzZXJMb2dpbikpXHJcbiAgICAgICAgaW5zdGFuY2VDb21wb25lbnQucHJvcHMuZGlzcGF0Y2goYWRkTWVzc2FnZSh7IHR5cGU6IHRydWUsIHJlYWQ6IHRydWUsIGNvbnRlbnQ6IG1lc3NhZ2UsIHN0eWxlLCBhdHRhY2htZW50IH0pKVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgYWxlcnQoXCLjg6Hjg4Pjgrvjg7zjgrjjga7pgIHkv6HjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIIg5YaN5bqm44Ot44Kw44Kk44Oz44GZ44KL44GL44CB566h55CG6ICF44Gr6YCj57Wh44GX44Gm44GP44Gg44GV44GEXCIpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9KVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZW5kVHlwaW5nTWVzc2FnZVRvQ2hhbm5lbChjaGFubmVsSWQsIGFjY2VzcywgZGV0ZWN0ICkge1xyXG4gICAgXHJcbiAgICBzb2NrZXQuZW1pdChFVkVOVC5TRU5EX1RZUElORywgeyBjaGFubmVsSWQsIGFjY2VzcywgLi4uZGV0ZWN0IH0pXHJcbiAgICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUJsb2JUb1NlcnZlcihmaWxlKSB7XHJcbiAgICB2YXIgU0laRV9MSU1JVCA9IDUgKiAxMDI0ICogMTAyNFxyXG5cclxuICAgIGlmKCAhZmlsZS5zaXplIHx8IGZpbGUuc2l6ZSA+IFNJWkVfTElNSVQgKXtcclxuICAgICAgICBoYW5kbGVFcnJvclVwbG9hZEZpbGUoKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZXQgZGF0YUZpbGUgPSBmaWxlXHJcbiAgICBsZXQgZm9ybSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICBmb3JtLmFwcGVuZCgnZmlsZScsIGRhdGFGaWxlKVxyXG4gICAgZm9ybS5hcHBlbmQoJ3VzZXJfaWQnLCAxKVxyXG5cclxuICAgICQuYWpheCh7XHJcbiAgICAgICAgdXJsICAgICAgICA6IENPTkZJRy5TRVJWRVJfUEhQLlVSTCArICcvYXBpL3VwbG9hZCcsXHJcbiAgICAgICAgdHlwZSAgICAgICA6ICdwb3N0JyxcclxuICAgICAgICBlbmN0eXBlICAgIDogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxyXG4gICAgICAgIGRhdGEgICAgICAgOiBmb3JtLFxyXG4gICAgICAgIGNhY2hlICAgICAgOiBmYWxzZSxcclxuICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCByZXNwb25zZSApe1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuY29kZSAhPSAyMDApIHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZUVycm9yVXBsb2FkRmlsZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHJlV3JpdGVVcmwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWltYWdlLS1ibG9ja1wiKS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwianMtc2lnbi11cmxcIilcclxuICAgICAgICAgICAgaWYgKHJlV3JpdGVVcmwubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZVdyaXRlVXJsWzBdLnNldEF0dHJpYnV0ZShcImRhdGEtdXJsXCIsIHJlc3BvbnNlLmRhdGEudXJsKVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0eXBlRmlsZSA9IHJlc3BvbnNlLmRhdGEuZmlsZV9uYW1lLFxyXG4gICAgICAgICAgICAgICAgZXh0ZW50aW9uVHlwZSA9IG51bGxcclxuICAgICAgICAgICAgICAgIGlmKCB0eXBlRmlsZSApe1xyXG4gICAgICAgICAgICAgICAgICAgIGV4dGVudGlvblR5cGUgPSBnZXRUeXBlRmlsZSggdHlwZUZpbGUgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoICFleHRlbnRpb25UeXBlICl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVXcml0ZVVybFswXS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVXcml0ZVVybFswXS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXR5cGVcIiwgZXh0ZW50aW9uVHlwZSApXHJcbiAgICAgICAgICAgICAgICAgICAgcmVXcml0ZVVybFswXS5jbGFzc0xpc3QucmVtb3ZlKFwianMtc2lnbi11cmxcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIGhhbmRsZUVycm9yVXBsb2FkRmlsZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbGlzdGVuU2Nyb2xsTWVzc2FnZShlLCBtZXNzYWdlcywgY2hhbm5lbEFjdGl2ZSApIHsgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgaWYoIW1lc3NhZ2VzIHx8ICFtZXNzYWdlcy5sZW5ndGgpe1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgdmFyIGRvbVNjcm9sbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtc2Nyb2xsLXRvLWJvdHRvbVwiKVxyXG4gICAgY29uc29sZS5sb2coZG9tU2Nyb2xsLnNjcm9sbEhlaWdodCwgZG9tU2Nyb2xsLmNsaWVudEhlaWdodCArIFwibGlzdGVuU2Nyb2xsTWVzc2FnZVwiKVxyXG4gICAgaWYgKCQoZSkuc2Nyb2xsVG9wKCkgKyBcclxuICAgICAgICAkKGUpLmlubmVySGVpZ2h0KCkgPj0gIFxyXG4gICAgICAgICQoZSlbMF0uc2Nyb2xsSGVpZ2h0KSB7IFxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlzLXdyaXRlLW1lc3NhZ2VcIikuY2xhc3NMaXN0LmFkZChcImZvbGxvdy1jb252ZXJzYXRpb25cIilcclxuICAgICAgICAgICAgLy8vIGNoZWNrIG1lc3NhZ2UgdW5yZWFkXHJcbiAgICAgICAgICAgIHZhciBleGlzdE5vbmVSZWFkID0gbWVzc2FnZXMuc29tZSggZnVuY3Rpb24oIG1lc3NhZ2UgKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICFtZXNzYWdlLnJlYWQgJiYgIW1lc3NhZ2UudHlwZVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgaWYoIGV4aXN0Tm9uZVJlYWQgKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEVWRU5ULlJFQURfTUVTU0FHRV9BTEwsIFwibGlzdGVuU2Nyb2xsTWVzc2FnZVwiKVxyXG4gICAgICAgICAgICAgICAgdmFyIHVzZXJMb2NhbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSlcclxuICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KEVWRU5ULlJFQURfTUVTU0FHRV9BTEwsIHsgdXNlciA6IHVzZXJMb2NhbC5pZCwgY2hhbm5lbElkOiBjaGFubmVsQWN0aXZlLmlkLCBjaGFubmVsTmFtZTogY2hhbm5lbEFjdGl2ZS5jaGFubmVsTmFtZSB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlzLXdyaXRlLW1lc3NhZ2VcIikuY2xhc3NMaXN0LnJlbW92ZShcImZvbGxvdy1jb252ZXJzYXRpb25cIilcclxuICAgIH0gXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RlblJlYWRNZXNzYWdlTmV3VXNlciggbWVzc2FnZXMsIGNoYW5uZWxBY3RpdmUgKSB7IFxyXG4gICAgICAgICAgICAgICBcclxuICAgIGlmKCFtZXNzYWdlcyB8fCAhbWVzc2FnZXMubGVuZ3RoKXtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIFxyXG4gICAgdmFyIGV4aXN0Tm9uZVJlYWQgPSBtZXNzYWdlcy5zb21lKCBmdW5jdGlvbiggbWVzc2FnZSApe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICByZXR1cm4gIW1lc3NhZ2UucmVhZCAmJiAhbWVzc2FnZS50eXBlXHJcbiAgICB9KVxyXG5cclxuICAgIGlmKCBleGlzdE5vbmVSZWFkICl7XHJcbiAgICAgICAgY29uc29sZS5sb2coRVZFTlQuUkVBRF9NRVNTQUdFX0FMTCwgXCJsaXN0ZW5SZWFkTWVzc2FnZU5ld1VzZXJcIilcclxuICAgICAgICB2YXIgdXNlckxvY2FsID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxyXG4gICAgICAgIHNvY2tldC5lbWl0KEVWRU5ULlJFQURfTUVTU0FHRV9BTEwsIHsgdXNlciA6IHVzZXJMb2NhbC5pZCwgY2hhbm5lbElkOiBjaGFubmVsQWN0aXZlLmlkLCBjaGFubmVsTmFtZTogY2hhbm5lbEFjdGl2ZS5jaGFubmVsTmFtZSB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gaGFuZGxlRXJyb3JVcGxvYWRGaWxlKCl7XHJcbiAgICB2YXIgcmVXcml0ZVVybCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtaW1hZ2UtLWJsb2NrXCIpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJqcy1zaWduLXVybFwiKVxyXG4gICAgaWYgKHJlV3JpdGVVcmwubGVuZ3RoKSB7XHJcbiAgICAgICAgcmVXcml0ZVVybFswXS5yZW1vdmUoKVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGdldFR5cGVGaWxlKCBmaWxlbmFtZSApe1xyXG4gICAgdmFyIGFjY2VwdCA9IC8oXFwuanBnfFxcLmpwZWd8XFwuYm1wfFxcLmdpZnxcXC5wbmd8XFwuaW1hZ2UpJC9pXHJcbiAgICBpZihhY2NlcHQuZXhlYyhmaWxlbmFtZSkpeyBcclxuICAgICAgICByZXR1cm4gXCJpbWdcIlxyXG4gICAgfVxyXG4gICAgdmFyIGFjY2VwdCA9IC8oXFwueGxzfFxcLnhsc3h8XFwuY3N2fFxcLnBkZnxcXC5kb2N8XFwuZG9jeCkkL2lcclxuICAgIGlmKGFjY2VwdC5leGVjKGZpbGVuYW1lKSl7IFxyXG5cclxuICAgICAgICByZXR1cm4gXCJmaWxlXCJcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsXHJcbn1cclxuZnVuY3Rpb24gdmFsaWRhdGVGZXRjaENoYW5uZWxNZXNzYWdlKGRhdGEpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdmFyIHsgYWNjZXNzLCBicm93c2VyLCBicm93c2VyTWFqb3JWZXJzaW9uLCBicm93c2VyVmVyc2lvbiwgb3MsIG9zVmVyc2lvbiB9ID0gZGF0YVxyXG4gICAgICAgIGlmICghYWNjZXNzIHx8ICFicm93c2VyIHx8ICFicm93c2VyTWFqb3JWZXJzaW9uIHx8ICFicm93c2VyVmVyc2lvbiB8fCAhb3MgfHwgIW9zVmVyc2lvbikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLpga7jgotcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZldGNoQ2hhbm5lbE1lc3NhZ2UoIGRhdGEgKSB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLCBcInZhbGlkYXRlRmV0Y2hDaGFubmVsTWVzc2FnZShkYXRhKVwiKVxyXG4gICAgdmFyIGlzVmFsaWQgPSB2YWxpZGF0ZUZldGNoQ2hhbm5lbE1lc3NhZ2UoZGF0YSlcclxuICAgIGlmICghaXNWYWxpZCkge1xyXG4gICAgICAgIGFsZXJ0KFwi44Ko44Op44O844GM55m655Sf44GX44G+44GX44Gf44CC44GX44Gw44KJ44GP44GX44Gm44GL44KJ44KC44GG5LiA5bqm44GK6Kmm44GX44GP44Gg44GV44GEMVwiKVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgaWYoIHR5cGVvZiBJRF9WSUVXX1VTRVJfQ0hBVCAhPSAndW5kZWZpbmVkJyAmJiBJRF9WSUVXX1VTRVJfQ0hBVCApe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRhdGEudXNlcklkQWN0aXZlQ2hhbm5lbCA9IElEX1ZJRVdfVVNFUl9DSEFUXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmV0Y2goQ09ORklHLlNFUlZFUi5BU1NFVCgpICsgJy9hcGkvY2hhbm5lbHMnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCByZXNwb25zZSAsIFwiL2FwaS9jaGFubmVsc1wiKVxyXG4gICAgICAgIGlmIChyZXNwb25zZS5jb2RlICE9IDIwMCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi44Ko44Op44O844GM55m655Sf44GX44G+44GX44Gf44CC44GX44Gw44KJ44GP44GX44Gm44GL44KJ44KC44GG5LiA5bqm44GK6Kmm44GX44GP44Gg44GV44GEMlwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIFwiIGhhdmUgZXJyb3IgXCIpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9KVxyXG59XHJcbmZ1bmN0aW9uIGdldENoYW5uZWxBZG1pbiggZGF0YSwgYWNjZXNzICkgeyBcclxuXHJcbiAgICB2YXIgeyB1c2VySWQsIHJlZmVzaCB9ICAgPSBkYXRhXHJcbiAgICAgICAgZGF0YS5sb2NhbFVzZXJJZCAgICAgPSB1c2VySWRcclxuICAgICAgICBkYXRhLnJlZmVyZW5jZVVzZXJJZCA9IDFcclxuICAgICAgICBkYXRhLnJlZmVzaCAgICAgICAgICA9IHJlZmVzaFxyXG4gICAgICAgIGRhdGEuYWNjZXNzICAgICAgICAgID0gYWNjZXNzXHJcbiAgICAgICAgZGF0YS5uZXdDaGFubmVsQWRtaW4gPSAxXHJcblxyXG4gICAgcmV0dXJuIGZldGNoKENPTkZJRy5TRVJWRVIuQVNTRVQoKSArICcvYXBpL2NoYW5uZWwnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLCBcImdldENoYW5uZWxBZG1pblwiKVxyXG4gICAgICAgIGlmIChyZXNwb25zZS5jb2RlICE9IDIwMCkge1xyXG4gICAgICAgICAgICBhbGVydChcIuOCqOODqeODvOOBjOeZuueUn+OBl+OBvuOBl+OBn+OAguOBl+OBsOOCieOBj+OBl+OBpuOBi+OCieOCguOBhuS4gOW6puOBiuippuOBl+OBj+OBoOOBleOBhFwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmV0Y2hDaGFubmVsTWVzc2FnZSggZGF0YSApXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH0pXHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuLy8gY29uc3QgcGVlciA9IG5ldyBQZWVyKHsgXHJcbi8vICAgICBob3N0OiAnMTI3LjAuMC4xJyxcclxuLy8gICAgIHBvcnQ6IGNvbmZpZy5TRVJWRVIuUEVFUl9QT1JULFxyXG4vLyAgICAgcGF0aDogJy9teWFwcCdcclxuLy8gfSlcclxuXHJcbi8vIHBlZXIub24oJ29wZW4nLCBpZCA9PiB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVwiKVxyXG4vLyAgICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PT09PT09PVwiICsgaWQgKyBcIj09PT09PT09PT09PT09PT1cIilcclxuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQXBwbGljYXRpb25cIikuc2V0QXR0cmlidXRlKCdkYXRhLXBlZXInLCBpZCApXHJcbi8vICAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVwiKVxyXG4vLyB9KVxyXG5cclxuXHJcblxyXG4vLyAvLyAvL0NhbGxlZVxyXG4vLyBwZWVyLm9uKCdjYWxsJywgY2FsbCA9PiB7XHJcbi8vICAgICBvcGVuU3RyZWFtKClcclxuLy8gICAgIC50aGVuKHN0cmVhbSA9PiB7XHJcbi8vICAgICAgICAgY2FsbC5hbnN3ZXIoc3RyZWFtKTtcclxuLy8gICAgICAgICBwbGF5U3RyZWFtKCdsb2NhbFN0cmVhbScsIHN0cmVhbSk7XHJcbi8vICAgICAgICAgY2FsbC5vbignc3RyZWFtJywgcmVtb3RlU3RyZWFtID0+IHBsYXlTdHJlYW0oJ3JlbW90ZVN0cmVhbScsIHJlbW90ZVN0cmVhbSkpO1xyXG4vLyAgICAgfSlcclxuLy8gICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFwicGVlci5vbignY2FsbCdcIilcclxuLy8gICAgIH0pXHJcbi8vIH0pO1xyXG5cclxuLy8gJCgnI3VsVXNlcicpLm9uKCdjbGljaycsICdsaScsIGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgY29uc3QgaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhpZCk7XHJcbi8vICAgICBvcGVuU3RyZWFtKClcclxuLy8gICAgIC50aGVuKHN0cmVhbSA9PiB7XHJcbi8vICAgICAgICAgcGxheVN0cmVhbSgnbG9jYWxTdHJlYW0nLCBzdHJlYW0pO1xyXG4vLyAgICAgICAgIGNvbnN0IGNhbGwgPSBwZWVyLmNhbGwoaWQsIHN0cmVhbSk7XHJcbi8vICAgICAgICAgY2FsbC5vbignc3RyZWFtJywgcmVtb3RlU3RyZWFtID0+IHBsYXlTdHJlYW0oJ3JlbW90ZVN0cmVhbScsIHJlbW90ZVN0cmVhbSkpO1xyXG4vLyAgICAgfSk7XHJcbi8vIH0pO1xyXG5cclxuLy8gZnVuY3Rpb24gb3BlblN0cmVhbSgpIHtcclxuLy8gICAgIGNvbnN0IGNvbmZpZyA9IHsgYXVkaW86IGZhbHNlLCB2aWRlbzogdHJ1ZSB9O1xyXG4vLyAgICAgcmV0dXJuIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKGNvbmZpZyk7XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIHBsYXlTdHJlYW0oaWRWaWRlb1RhZywgc3RyZWFtKSB7XHJcbi8vICAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkVmlkZW9UYWcpO1xyXG4vLyAgICAgdmlkZW8uc3JjT2JqZWN0ID0gc3RyZWFtO1xyXG4vLyAgICAgdmlkZW8ucGxheSgpO1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBnZXRQZWVyVXNlckNoYW5uZWwoIGNoYW5uZWxJbmZvciwgdXNlciwgY2xpZW50ICl7XHJcblxyXG4vLyAgICAgdmFyIGNoYW5uZWxJZCA9IGNoYW5uZWxJbmZvci5pZCxcclxuLy8gICAgIGFjY2VzcyA9IHVzZXIudG9rZW5zLnRva2VuQWNjZXNzXHJcbi8vICAgICBpZiggc29ja2V0ICl7XHJcbi8vICAgICAgICAgc29ja2V0LmVtaXQoRVZFTlQuU0VORF9QRUVSLCB7IGNoYW5uZWxJZCwgYWNjZXNzLCAuLi5jbGllbnQgfSlcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gb3BlblN0cmVhbSgpXHJcbi8vIC50aGVuKHN0cmVhbSA9PiBwbGF5U3RyZWFtKCdsb2NhbFN0cmVhbScsIHN0cmVhbSkpO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzb2NrZXRMaXN0ZW5uZXIoIHNvY2tldCwgaW5zdGFuY2VBcHAgKXtcclxuXHJcbiAgICBzb2NrZXQub24oRVZFTlQuVVNFUl9PTkxJTkVfTk9USSwgZGF0YSA9PiB7XHJcbiAgICAgICAgLy8vIFxyXG4gICAgICAgIGluc3RhbmNlQXBwLnByb3BzLmRpc3BhdGNoKGFkZFVzZXJPbmxpbmUoIGRhdGEudXNlciApKVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgc29ja2V0Lm9uKEVWRU5ULlVTRVJfT0ZGTElORV9OT1RJLCBkYXRhID0+IHtcclxuICAgICAgICAvLy8gXHJcbiAgICAgICAgaW5zdGFuY2VBcHAucHJvcHMuZGlzcGF0Y2gocmVtb3ZlVXNlck9ubGluZSggZGF0YS51c2VyICkpXHJcbiAgICB9KVxyXG5cclxuICAgIHNvY2tldC5vbihFVkVOVC5SRVNQT05TRV9NRVNTQUdFLCBkYXRhID0+IHtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgeyB1c2VyLCB0b2tlbiwgbWVzc2FnZSwgc3R5bGUsIGF0dGFjaG1lbnQsIGNoYW5uZWwsIGRldGVjdCB9ID0gZGF0YSBcclxuICAgICAgICB2YXIgdXNlckxvY2FsID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxyXG4gICAgICAgIGlmKCB1c2VyTG9jYWwgJiYgdXNlckxvY2FsLmlkID09IHVzZXIgJiYgdXNlckxvY2FsLnRva2Vucy50b2tlbkFjY2VzcyA9PSB0b2tlbiApe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5zdGFuY2VBcHAucHJvcHMuZGlzcGF0Y2goIGFkZE1lc3NhZ2VTZW5kVG9NZSh7IHR5cGU6ICh1c2VyTG9jYWwuaWQgPT0gdXNlciksIGNvbnRlbnQ6IG1lc3NhZ2UsIHN0eWxlLCBhdHRhY2htZW50LCBjaGFubmVsIH0pIClcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgICBzb2NrZXQub24oRVZFTlQuUkVTUE9OU0VfVFlQSU5HLCBkYXRhID0+IHtcclxuXHJcbiAgICAgICAgdmFyIHsgdXNlciwgdG9rZW4sIGNoYW5uZWwgfSA9IGRhdGEgXHJcbiAgICAgICAgdmFyIHVzZXJMb2NhbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSlcclxuICAgICAgICBpZiggdXNlckxvY2FsICYmIHVzZXJMb2NhbC5pZCA9PSB1c2VyICYmIHVzZXJMb2NhbC50b2tlbnMudG9rZW5BY2Nlc3MgPT0gdG9rZW4gKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih0aW1lb3V0VHlwaW5nKXtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0VHlwaW5nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBkb21UeXBpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLXR5cGluZ1wiKVxyXG4gICAgICAgICAgICBpZihkb21UeXBpbmcuZ2V0QXR0cmlidXRlKFwiY2hhbm5lbFwiKSA9PSBjaGFubmVsKVxyXG4gICAgICAgICAgICBkb21UeXBpbmcuY2xhc3NMaXN0LmFkZChcInNob3dcIilcclxuICAgICAgICAgICAgLy8vIHNjcm9sbCBib3R0b20gXHJcbiAgICAgICAgICAgIC8vIHZhciBpbnB1dE1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLWlzLXdyaXRlLW1lc3NhZ2VcIilcclxuICAgICAgICAgICAgLy8gaWYoaW5wdXRNZXNzYWdlLmNsYXNzTGlzdC5jb250YWlucyhcImZvbGxvdy1jb252ZXJzYXRpb25cIikpe1xyXG4gICAgICAgICAgICAvLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXNjcm9sbC10by1ib3R0b20nKS5zY3JvbGxUb3AgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXNjcm9sbC10by1ib3R0b20nKS5zY3JvbGxIZWlnaHRcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB2YXIgdGltZW91dFR5cGluZyA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZG9tVHlwaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy10eXBpbmdcIilcclxuICAgICAgICAgICAgICAgIGlmKGRvbVR5cGluZy5nZXRBdHRyaWJ1dGUoXCJjaGFubmVsXCIpID09IGNoYW5uZWwpXHJcbiAgICAgICAgICAgICAgICBkb21UeXBpbmcuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIilcclxuICAgICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBcclxuICAgIHNvY2tldC5vbihFVkVOVC5EVVBMSUNBVElPTl9UQUIsIGRhdGEgPT4ge1xyXG5cclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IENPTkZJRy5TRVJWRVJfUEhQLlVSTFxyXG4gICAgfSlcclxuXHJcbiAgICBzb2NrZXQub24oRVZFTlQuUkVBRF9NRVNTQUdFX0FMTF9SRVNQT05TRSwgZGF0YSA9PiB7XHJcblxyXG4gICAgICAgIGluc3RhbmNlQXBwLnByb3BzLmRpc3BhdGNoKCByZWFkQWxsTWVzc2FnZUNoYW5uZWxBY3RpdmUoKSApXHJcbiAgICB9KVxyXG59IiwidmFyIHVzZXIgPSBudWxsXHJcbmlmICh0eXBlb2YoU3RvcmFnZSkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKVxyXG59XHJcblxyXG5pbXBvcnQgVFlQRSBmcm9tIFwiLi4vYWN0aW9uL3R5cGUuanNcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gdXNlciwgYWN0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBUWVBFLlVTRVIuU0VUVEVSX1VTRVI6XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsImZ1bmN0aW9uIGRldGVjdENsaWVudCgpIHtcclxuICB7XHJcbiAgICB2YXIgdW5rbm93biA9ICd1bmtub3duJztcclxuICAgIC8vIGJyb3dzZXJcclxuICAgIHZhciBuVmVyID0gbmF2aWdhdG9yLmFwcFZlcnNpb247XHJcbiAgICB2YXIgbkFndCA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgICB2YXIgYnJvd3NlciA9IG5hdmlnYXRvci5hcHBOYW1lO1xyXG4gICAgdmFyIHZlcnNpb24gPSAnJyArIHBhcnNlRmxvYXQobmF2aWdhdG9yLmFwcFZlcnNpb24pO1xyXG4gICAgdmFyIG1ham9yVmVyc2lvbiA9IHBhcnNlSW50KG5hdmlnYXRvci5hcHBWZXJzaW9uLCAxMCk7XHJcbiAgICB2YXIgbmFtZU9mZnNldCwgdmVyT2Zmc2V0LCBpeDtcclxuICAgIC8vIE9wZXJhXHJcbiAgICBpZiAoKHZlck9mZnNldCA9IG5BZ3QuaW5kZXhPZignT3BlcmEnKSkgIT0gLTEpIHtcclxuICAgICAgYnJvd3NlciArPSAnT3BlcmEnO1xyXG4gICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgNik7XHJcbiAgICAgIGlmICgodmVyT2Zmc2V0ID0gbkFndC5pbmRleE9mKCdWZXJzaW9uJykpICE9IC0xKSB7XHJcbiAgICAgICAgdmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCArIDgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBPcGVyYSBOZXh0XHJcbiAgICBpZiAoKHZlck9mZnNldCA9IG5BZ3QuaW5kZXhPZignT1BSJykpICE9IC0xKSB7XHJcbiAgICAgIGJyb3dzZXIgKz0gJ09wZXJhJztcclxuICAgICAgdmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCArIDQpO1xyXG4gICAgfVxyXG4gICAgLy8gRWRnZVxyXG4gICAgZWxzZSBpZiAoKHZlck9mZnNldCA9IG5BZ3QuaW5kZXhPZignRWRnJykpICE9IC0xKSB7XHJcbiAgICAgIGJyb3dzZXIgKz0gJ01pY3Jvc29mdCBFZGdlJztcclxuICAgICAgdmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCArIDUpO1xyXG4gICAgfVxyXG4gICAgLy8gTVNJRVxyXG4gICAgZWxzZSBpZiAoKHZlck9mZnNldCA9IG5BZ3QuaW5kZXhPZignTVNJRScpKSAhPSAtMSkge1xyXG4gICAgICBicm93c2VyICs9ICdNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXInO1xyXG4gICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgNSk7XHJcbiAgICB9XHJcbiAgICAvLyBDb2NDb2NcclxuICAgIGVsc2UgaWYgKCh2ZXJPZmZzZXQgPSBuQWd0LmluZGV4T2YoJ2NvYycpKSAhPSAtMSkge1xyXG4gICAgICBicm93c2VyICs9ICdDb2NDb2MnO1xyXG4gICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgOCk7XHJcbiAgICB9XHJcbiAgICAvLyBDaHJvbWVcclxuICAgIGVsc2UgaWYgKCh2ZXJPZmZzZXQgPSBuQWd0LmluZGV4T2YoJ0Nocm9tZScpKSAhPSAtMSkge1xyXG4gICAgICBicm93c2VyICs9ICdDaHJvbWUnO1xyXG4gICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgNyk7XHJcbiAgICB9XHJcbiAgICAvLyBTYWZhcmlcclxuICAgIGVsc2UgaWYgKCh2ZXJPZmZzZXQgPSBuQWd0LmluZGV4T2YoJ1NhZmFyaScpKSAhPSAtMSkge1xyXG4gICAgICBicm93c2VyICs9ICdTYWZhcmknO1xyXG4gICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgNyk7XHJcbiAgICAgIGlmICgodmVyT2Zmc2V0ID0gbkFndC5pbmRleE9mKCdWZXJzaW9uJykpICE9IC0xKSB7XHJcbiAgICAgICAgdmVyc2lvbiA9IG5BZ3Quc3Vic3RyaW5nKHZlck9mZnNldCArIDgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBGaXJlZm94XHJcbiAgICBlbHNlIGlmICgodmVyT2Zmc2V0ID0gbkFndC5pbmRleE9mKCdGaXJlZm94JykpICE9IC0xKSB7XHJcbiAgICAgIGJyb3dzZXIgKz0gJ0ZpcmVmb3gnO1xyXG4gICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgOCk7XHJcbiAgICB9XHJcbiAgICAvLyBNU0lFIDExK1xyXG4gICAgZWxzZSBpZiAobkFndC5pbmRleE9mKCdUcmlkZW50LycpICE9IC0xKSB7XHJcbiAgICAgIGJyb3dzZXIgKz0gJ01pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3Jlcic7XHJcbiAgICAgIHZlcnNpb24gPSBuQWd0LnN1YnN0cmluZyhuQWd0LmluZGV4T2YoJ3J2OicpICsgMyk7XHJcbiAgICB9XHJcbiAgICAvLyBPdGhlciBicm93c2Vyc1xyXG4gICAgZWxzZSBpZiAoKG5hbWVPZmZzZXQgPSBuQWd0Lmxhc3RJbmRleE9mKCcgJykgKyAxKSA8ICh2ZXJPZmZzZXQgPSBuQWd0Lmxhc3RJbmRleE9mKCcvJykpKSB7XHJcbiAgICAgIGJyb3dzZXIgPSBuQWd0LnN1YnN0cmluZyhuYW1lT2Zmc2V0LCB2ZXJPZmZzZXQpO1xyXG4gICAgICB2ZXJzaW9uID0gbkFndC5zdWJzdHJpbmcodmVyT2Zmc2V0ICsgMSk7XHJcbiAgICAgIGlmIChicm93c2VyLnRvTG93ZXJDYXNlKCkgPT0gYnJvd3Nlci50b1VwcGVyQ2FzZSgpKSB7XHJcbiAgICAgICAgYnJvd3NlciA9IG5hdmlnYXRvci5hcHBOYW1lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyB0cmltIHRoZSB2ZXJzaW9uIHN0cmluZ1xyXG4gICAgaWYgKChpeCA9IHZlcnNpb24uaW5kZXhPZignOycpKSAhPSAtMSkgdmVyc2lvbiA9IHZlcnNpb24uc3Vic3RyaW5nKDAsIGl4KTtcclxuICAgIGlmICgoaXggPSB2ZXJzaW9uLmluZGV4T2YoJyAnKSkgIT0gLTEpIHZlcnNpb24gPSB2ZXJzaW9uLnN1YnN0cmluZygwLCBpeCk7XHJcbiAgICBpZiAoKGl4ID0gdmVyc2lvbi5pbmRleE9mKCcpJykpICE9IC0xKSB2ZXJzaW9uID0gdmVyc2lvbi5zdWJzdHJpbmcoMCwgaXgpO1xyXG4gICAgbWFqb3JWZXJzaW9uID0gcGFyc2VJbnQoJycgKyB2ZXJzaW9uLCAxMCk7XHJcbiAgICBpZiAoaXNOYU4obWFqb3JWZXJzaW9uKSkge1xyXG4gICAgICB2ZXJzaW9uID0gJycgKyBwYXJzZUZsb2F0KG5hdmlnYXRvci5hcHBWZXJzaW9uKTtcclxuICAgICAgbWFqb3JWZXJzaW9uID0gcGFyc2VJbnQobmF2aWdhdG9yLmFwcFZlcnNpb24sIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzeXN0ZW1cclxuICAgIHZhciBvcyA9IHVua25vd247XHJcbiAgICB2YXIgY2xpZW50U3RyaW5ncyA9IFt7XHJcbiAgICAgIHM6ICdXaW5kb3dzIDEwJyxcclxuICAgICAgcjogLyhXaW5kb3dzIDEwLjB8V2luZG93cyBOVCAxMC4wKS9cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHM6ICdXaW5kb3dzIDguMScsXHJcbiAgICAgIHI6IC8oV2luZG93cyA4LjF8V2luZG93cyBOVCA2LjMpL1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgczogJ1dpbmRvd3MgOCcsXHJcbiAgICAgIHI6IC8oV2luZG93cyA4fFdpbmRvd3MgTlQgNi4yKS9cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHM6ICdXaW5kb3dzIDcnLFxyXG4gICAgICByOiAvKFdpbmRvd3MgN3xXaW5kb3dzIE5UIDYuMSkvXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzOiAnV2luZG93cyBWaXN0YScsXHJcbiAgICAgIHI6IC9XaW5kb3dzIE5UIDYuMC9cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHM6ICdXaW5kb3dzIFNlcnZlciAyMDAzJyxcclxuICAgICAgcjogL1dpbmRvd3MgTlQgNS4yL1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgczogJ1dpbmRvd3MgWFAnLFxyXG4gICAgICByOiAvKFdpbmRvd3MgTlQgNS4xfFdpbmRvd3MgWFApL1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgczogJ1dpbmRvd3MgMjAwMCcsXHJcbiAgICAgIHI6IC8oV2luZG93cyBOVCA1LjB8V2luZG93cyAyMDAwKS9cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHM6ICdXaW5kb3dzIE1FJyxcclxuICAgICAgcjogLyhXaW4gOXggNC45MHxXaW5kb3dzIE1FKS9cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHM6ICdXaW5kb3dzIDk4JyxcclxuICAgICAgcjogLyhXaW5kb3dzIDk4fFdpbjk4KS9cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHM6ICdXaW5kb3dzIDk1JyxcclxuICAgICAgcjogLyhXaW5kb3dzIDk1fFdpbjk1fFdpbmRvd3NfOTUpL1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgczogJ1dpbmRvd3MgTlQgNC4wJyxcclxuICAgICAgcjogLyhXaW5kb3dzIE5UIDQuMHxXaW5OVDQuMHxXaW5OVHxXaW5kb3dzIE5UKS9cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHM6ICdXaW5kb3dzIENFJyxcclxuICAgICAgcjogL1dpbmRvd3MgQ0UvXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzOiAnV2luZG93cyAzLjExJyxcclxuICAgICAgcjogL1dpbjE2L1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgczogJ0FuZHJvaWQnLFxyXG4gICAgICByOiAvQW5kcm9pZC9cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHM6ICdPcGVuIEJTRCcsXHJcbiAgICAgIHI6IC9PcGVuQlNEL1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgczogJ1N1biBPUycsXHJcbiAgICAgIHI6IC9TdW5PUy9cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHM6ICdMaW51eCcsXHJcbiAgICAgIHI6IC8oTGludXh8WDExKS9cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHM6ICdpT1MnLFxyXG4gICAgICByOiAvKGlQaG9uZXxpUGFkfGlQb2QpL1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgczogJ01hYyBPUyBYJyxcclxuICAgICAgcjogL01hYyBPUyBYL1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgczogJ01hYyBPUycsXHJcbiAgICAgIHI6IC8oTWFjUFBDfE1hY0ludGVsfE1hY19Qb3dlclBDfE1hY2ludG9zaCkvXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzOiAnUU5YJyxcclxuICAgICAgcjogL1FOWC9cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHM6ICdVTklYJyxcclxuICAgICAgcjogL1VOSVgvXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzOiAnQmVPUycsXHJcbiAgICAgIHI6IC9CZU9TL1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgczogJ09TLzInLFxyXG4gICAgICByOiAvT1NcXC8yL1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgczogJ1NlYXJjaCBCb3QnLFxyXG4gICAgICByOiAvKG51aGt8R29vZ2xlYm90fFlhbW15Ym90fE9wZW5ib3R8U2x1cnB8TVNOQm90fEFzayBKZWV2ZXNcXC9UZW9tYXxpYV9hcmNoaXZlcikvXHJcbiAgICB9XHJcbiAgICBdO1xyXG4gICAgZm9yICh2YXIgaWQgaW4gY2xpZW50U3RyaW5ncykge1xyXG4gICAgICB2YXIgY3MgPSBjbGllbnRTdHJpbmdzW2lkXTtcclxuICAgICAgaWYgKGNzLnIudGVzdChuQWd0KSkge1xyXG4gICAgICAgIG9zID0gY3MucztcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIG9zVmVyc2lvbiA9IHVua25vd247XHJcbiAgICBpZiAoL1dpbmRvd3MvLnRlc3Qob3MpKSB7XHJcbiAgICAgIG9zVmVyc2lvbiA9IC9XaW5kb3dzICguKikvLmV4ZWMob3MpWzFdO1xyXG4gICAgICBvcyA9ICdXaW5kb3dzJztcclxuICAgIH1cclxuICAgIHN3aXRjaCAob3MpIHtcclxuICAgICAgY2FzZSAnTWFjIE9TIFgnOlxyXG4gICAgICAgIG9zVmVyc2lvbiA9IC9NYWMgT1MgWCAoMTBbXFwuXFxfXFxkXSspLy5leGVjKG5BZ3QpWzFdO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnQW5kcm9pZCc6XHJcbiAgICAgICAgb3NWZXJzaW9uID0gL0FuZHJvaWQgKFtcXC5cXF9cXGRdKykvLmV4ZWMobkFndClbMV07XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlICdpT1MnOlxyXG4gICAgICAgIG9zVmVyc2lvbiA9IC9PUyAoXFxkKylfKFxcZCspXz8oXFxkKyk/Ly5leGVjKG5WZXIpO1xyXG4gICAgICAgIG9zVmVyc2lvbiA9IG9zVmVyc2lvblsxXSArICcuJyArIG9zVmVyc2lvblsyXSArICcuJyArIChvc1ZlcnNpb25bM10gfCAwKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBicm93c2VyOiBicm93c2VyLnRvU3RyaW5nKCksXHJcbiAgICBicm93c2VyTWFqb3JWZXJzaW9uOiBtYWpvclZlcnNpb24udG9TdHJpbmcoKSxcclxuICAgIGJyb3dzZXJWZXJzaW9uOiB2ZXJzaW9uLnRvU3RyaW5nKCksXHJcbiAgICBvczogb3MudG9TdHJpbmcoKSxcclxuICAgIG9zVmVyc2lvbjogb3NWZXJzaW9uLnRvU3RyaW5nKClcclxuICB9XHJcbn1cclxuaWYgKHR5cGVvZihTdG9yYWdlKSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGV0ZWN0JywgSlNPTi5zdHJpbmdpZnkoZGV0ZWN0Q2xpZW50KCkpKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXRlY3RDbGllbnRSZWR1Y2VyKHN0YXRlID0gZGV0ZWN0Q2xpZW50KCkpIHtcclxuICByZXR1cm4gc3RhdGU7XHJcbn0iLCJpbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSAncmVkdXgnO1xyXG5cclxuLy8vdGjDqm0gY8OhYyByZWR1Y2VyIGZ1bnRpb24gY+G6p24gxJHGsOG7o2MgY29tYmluZSB2w6BvIMSRw6J5XHJcbmltcG9ydCBEZXRlY3RDbGllbnRSZWR1Y2VyIGZyb20gXCIuL2RldGVjdC5qc1wiO1xyXG5pbXBvcnQgdXNlckNoYXQgZnJvbSAnLi91c2VyLWNoYXQuanMnO1xyXG5pbXBvcnQgU29ja2V0UmVkdWNlciBmcm9tIFwiLi9zb2NrZXQuanNcIlxyXG5pbXBvcnQgQXV0aCBmcm9tIFwiLi9hdXRoLmpzXCJcclxuLy8vLyBraOG7n2kgdOG6oW8gMSBiaeG6v24gYmnhu4N1IGRp4buFbiBSRURVQ0VSIEFMTCBcclxuY29uc3QgUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBjbGllbnQgIDogRGV0ZWN0Q2xpZW50UmVkdWNlcixcclxuICAgIHVzZXJDaGF0OiB1c2VyQ2hhdCxcclxuICAgIHNvY2tldCAgOiBTb2NrZXRSZWR1Y2VyLFxyXG4gICAgdXNlcnMgICA6IEF1dGgsXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBSZWR1Y2VyOyIsImltcG9ydCBUWVBFIGZyb20gJy4uL2FjdGlvbi90eXBlLmpzJztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU29ja2V0UmVkdWNlcihzdGF0ZSA9IG51bGwgLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFRZUEUuU09DQ0tFVC5TRVRfU09DS0VUX0lPOlxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWRcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn0iLCJcclxuLy8gaWYodHlwZW9mIHVzZXJEZWZhdWx0ID09IHVuZGVmaW5lZCl7XHJcbi8vICAgdmFyIHVzZXJEZWZhdWx0ID0gJ1tdJ1xyXG4vLyB9XHJcbnZhciB1c2VyQ2hhdERlZmF1bHQgPSBbXTtcclxuaW1wb3J0IFRZUEUgZnJvbSBcIi4uL2FjdGlvbi90eXBlLmpzXCI7XHJcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uL2NvbmZpZ1wiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IHVzZXJDaGF0RGVmYXVsdCwgYWN0aW9uKSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBUWVBFLkNIQU5ORUwuQUREX1VTRVJfT05MSU5FOlxyXG4gICAgICByZXR1cm4gc3RhdGUubWFwKCBpdGVtID0+IHtcclxuICAgICAgICBpZihpdGVtLnVzZXIuaWQgPT0gYWN0aW9uLnBheWxvYWQpIHtcclxuICAgICAgICAgIHJldHVybiB7IC4uLml0ZW0sIHVzZXIgOiB7IC4uLiBpdGVtLnVzZXIsIG9ubGluZSA6IHRydWUgfSB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IC4uLml0ZW0gfVxyXG4gICAgICB9KVxyXG4gICAgY2FzZSBUWVBFLkNIQU5ORUwuUkVNT1ZFX1VTRVJfT05MSU5FOlxyXG4gICAgICAgIHJldHVybiBzdGF0ZS5tYXAoIGl0ZW0gPT4ge1xyXG4gICAgICAgICAgaWYoaXRlbS51c2VyLmlkID09IGFjdGlvbi5wYXlsb2FkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLml0ZW0sIHVzZXIgOiB7IC4uLiBpdGVtLnVzZXIsIG9ubGluZSA6IGZhbHNlIH0gfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHsgLi4uaXRlbSB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICBjYXNlIFRZUEUuQ0hBVC5DSEFOR0VfVVNFUl9DSEFUX0RFRkFVTFQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZS5tYXAoIGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmKGl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkKSB7XHJcbiAgICAgICAgICByZXR1cm4geyAuLi5pdGVtLCBpc0FjdGl2ZSA6IHRydWUgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyAuLi5pdGVtLCBpc0FjdGl2ZSA6IGZhbHNlIH1cclxuICAgICAgfSlcclxuICAgIGNhc2UgVFlQRS5DSEFOTkVMLlNFVFRFUl9DSEFOTkVMOlxyXG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWRcclxuICAgIGNhc2UgVFlQRS5DSEFOTkVMLkFERF9NRVNTQUdFOlxyXG4gICAgICByZXR1cm4gc3RhdGUubWFwKCBjaGFubmVsID0+IHtcclxuICAgICAgICBpZihjaGFubmVsLmlzQWN0aXZlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICByZXR1cm4geyAuLi5jaGFubmVsLCBtZXNzYWdlIDogWyAuLi5jaGFubmVsLm1lc3NhZ2UsIGFjdGlvbi5wYXlsb2FkXSB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjaGFubmVsXHJcbiAgICAgIH0pXHJcbiAgICBjYXNlIFRZUEUuQ0hBTk5FTC5SRUFEX0FMTF9NRVNTQUdFX0NIQU5ORUxfQUNUSVZFOlxyXG4gICAgICByZXR1cm4gc3RhdGUubWFwKCBjaGFubmVsID0+IHtcclxuICAgICAgICBpZihjaGFubmVsLmlzQWN0aXZlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICB2YXIgbWVzc2FnZXMgPSBjaGFubmVsLm1lc3NhZ2VcclxuICAgICAgICAgIG1lc3NhZ2VzID0gbWVzc2FnZXMubWFwKCBtZXNzYWdlID0+IHsgcmV0dXJuIHsgLi4ubWVzc2FnZSwgcmVhZDogdHJ1ZSB9IH0pXHJcbiAgICAgICAgICByZXR1cm4geyAuLi5jaGFubmVsLCBtZXNzYWdlIDogbWVzc2FnZXMgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2hhbm5lbFxyXG4gICAgICB9KVxyXG4gICAgY2FzZSBUWVBFLkNIQU5ORUwuQUREX01FU1NBR0VfU0VORF9UT19NRTpcclxuICAgICAgcmV0dXJuIHN0YXRlLm1hcCggY2hhbm5lbCA9PiB7XHJcbiAgICAgICAgaWYoY2hhbm5lbC5pZCA9PT0gYWN0aW9uLnBheWxvYWQuY2hhbm5lbCkge1xyXG4gICAgICAgICAgcmV0dXJuIHsgLi4uY2hhbm5lbCwgbWVzc2FnZSA6IFsgLi4uY2hhbm5lbC5tZXNzYWdlLCBhY3Rpb24ucGF5bG9hZF0gfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2hhbm5lbFxyXG4gICAgICB9KVxyXG5cclxuICAgIGNhc2UgVFlQRS5DSEFOTkVMLlNFVF9BQ1RJVkU6XHJcbiAgICAgIHZhciBpc0NoYW5nZWQgPSBmYWxzZVxyXG4gICAgICBjb25zb2xlLmxvZyhcImRlYnVnXCIpXHJcbiAgICAgIHZhciBuZXdTdGF0ZSA9IHN0YXRlLm1hcCggY2hhbm5lbCA9PiB7XHJcbiAgICAgICAgaWYoICFpc0NoYW5nZWQgJiYgY2hhbm5lbC5jaGFubmVsTmFtZSAmJiBjaGFubmVsLmNoYW5uZWxOYW1lLmluY2x1ZGVzKGFjdGlvbi5wYXlsb2FkLmNoYW5uZWxOYW1lKSl7XHJcbiAgICAgICAgICBpc0NoYW5nZWQgPSB0cnVlXHJcbiAgICAgICAgICByZXR1cm4geyAuLi5jaGFubmVsLCBpc0FjdGl2ZSA6IHRydWUgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyAuLi5jaGFubmVsLCBpc0FjdGl2ZSA6IGZhbHNlIH1cclxuICAgICAgfSlcclxuICAgICAgaWYoIGlzQ2hhbmdlZCApe1xyXG4gICAgICAgIHJldHVybiBuZXdTdGF0ZVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufSIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMiEuL2NoYXQuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0yIS4vZW1vamkuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0yIS4vaGVhZC1pbmZvLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMiEuL2lucHV0LXNlbmQtY2hhdC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTIhLi9saXN0LW1lc3NhZ2Uuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0yIS4vbGlzdC11c2VyLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMiEuL21lc3NhZ2UtY2hhdC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTIhLi9zaWRlYmFyLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMiEuL2luZGV4LnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=