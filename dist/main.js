/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../images/background1.jpg */ \"./src/images/background1.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../images/background2.jpg */ \"./src/images/background2.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../images/background3.jpg */ \"./src/images/background3.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../images/background4.jpg */ \"./src/images/background4.jpg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\n// Module\nexports.push([module.i, \"* {\\r\\n  list-style: none;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  text-decoration: none;\\r\\n}\\r\\nbody {\\r\\n  background: black;\\r\\n}\\r\\n\\r\\n/*BODY COVER ANIMATION*/\\r\\n\\r\\n@keyframes myAnimation {\\r\\n  0% {\\r\\n    opacity: 1;\\r\\n  }\\r\\n  20% {\\r\\n    opacity: 1;\\r\\n  }\\r\\n  30% {\\r\\n    opacity: 0;\\r\\n  }\\r\\n  90% {\\r\\n    opacity: 0;\\r\\n  }\\r\\n  100% {\\r\\n    opacity: 1;\\r\\n  }\\r\\n}\\r\\n@-webkit-keyframes myAnimation {\\r\\n  0% {\\r\\n    opacity: 1;\\r\\n  }\\r\\n  20% {\\r\\n    opacity: 1;\\r\\n  }\\r\\n  30% {\\r\\n    opacity: 0;\\r\\n  }\\r\\n  90% {\\r\\n    opacity: 0;\\r\\n  }\\r\\n  100% {\\r\\n    opacity: 1;\\r\\n  }\\r\\n}\\r\\n@-moz-keyframes myAnimation {\\r\\n  0% {\\r\\n    opacity: 1;\\r\\n  }\\r\\n  20% {\\r\\n    opacity: 1;\\r\\n  }\\r\\n  30% {\\r\\n    opacity: 0;\\r\\n  }\\r\\n  90% {\\r\\n    opacity: 0;\\r\\n  }\\r\\n  100% {\\r\\n    opacity: 1;\\r\\n  }\\r\\n}\\r\\n\\r\\n#cover1 {\\r\\n  position: fixed;\\r\\n  bottom: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-size: cover;\\r\\n  background-position: center;\\r\\n  animation: myAnimation 24s linear 18s infinite;\\r\\n  -webkit-animation: myAnimation 24s linear 18s infinite;\\r\\n  -moz-animation: myAnimation 24s linear 18s infinite;\\r\\n}\\r\\n#cover2 {\\r\\n  position: fixed;\\r\\n  bottom: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n  background-size: cover;\\r\\n  background-position: center;\\r\\n  animation: myAnimation 24s linear 12s infinite;\\r\\n  -webkit-animation: myAnimation 24s linear 12s infinite;\\r\\n  -moz-animation: myAnimation 24s linear 12s infinite;\\r\\n}\\r\\n#cover3 {\\r\\n  position: fixed;\\r\\n  bottom: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\r\\n  background-size: cover;\\r\\n  background-position: center;\\r\\n  animation: myAnimation 24s linear 6s infinite;\\r\\n  -webkit-animation: myAnimation 24s linear 6s infinite;\\r\\n  -moz-animation: myAnimation 24s linear 6s infinite;\\r\\n}\\r\\n#cover4 {\\r\\n  position: fixed;\\r\\n  bottom: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\r\\n  background-size: cover;\\r\\n  background-position: center;\\r\\n  animation: myAnimation 24s linear 0s infinite;\\r\\n  -webkit-animation: myAnimation 24s linear 0s infinite;\\r\\n  -moz-animation: myAnimation 24s linear 0s infinite;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  margin: auto;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  position: absolute;\\r\\n  top: 50px;\\r\\n  width: 80%;\\r\\n  z-index: 10;\\r\\n}\\r\\n.weatherBox {\\r\\n  height: auto;\\r\\n  padding: 20px;\\r\\n}\\r\\n.title {\\r\\n  color: white;\\r\\n  font-size: 40px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n/* INPUT */\\r\\n.formContainer {\\r\\n  border: 1px solid white;\\r\\n  border-radius: 50px;\\r\\n  margin: auto;\\r\\n  margin-top: 10px;\\r\\n  padding: 50px;\\r\\n  width: 80%;\\r\\n}\\r\\nform label {\\r\\n  color: white;\\r\\n  font-size: 20px;\\r\\n  margin-right: 10px;\\r\\n}\\r\\nform input {\\r\\n  margin-bottom: 10px;\\r\\n  margin-top: 10px;\\r\\n  padding: 10px;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\nform .buttonContainer {\\r\\n  text-align: center;\\r\\n}\\r\\nform .buttonContainer button {\\r\\n  color: white;\\r\\n  background: black;\\r\\n  font-size: 18px;\\r\\n  margin-top: 10px;\\r\\n  padding: 10px;\\r\\n  width: 15%;\\r\\n}\\r\\nform .buttonContainer button:hover {\\r\\n  border: 2px solid orange;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n/*INFO BOARD*/\\r\\n\\r\\n@keyframes boardAnimation {\\r\\n  0% {\\r\\n    bottom: -100px;\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    bottom: 2px;\\r\\n  }\\r\\n}\\r\\n\\r\\n.infoBox {\\r\\n  animation: boardAnimation 3s linear 0s;\\r\\n  -webkit-animation: boardAnimation 3s linear 0s;\\r\\n  -moz-animation: boardAnimation 3s linear 0s;\\r\\n\\r\\n  position: relative;\\r\\n\\r\\n  border: 1px solid white;\\r\\n  border-radius: 50px;\\r\\n  display: none;\\r\\n  height: auto;\\r\\n  margin: auto;\\r\\n  margin-top: 20px;\\r\\n  overflow: hidden;\\r\\n  padding: 50px;\\r\\n  width: 80%;\\r\\n}\\r\\n\\r\\n.infoBox h1 {\\r\\n  color: white;\\r\\n  margin-bottom: 30px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.temperature {\\r\\n  color: white;\\r\\n  font-size: 50px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.weatherImage {\\r\\n  display: block;\\r\\n  margin-bottom: 30px;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n  width: 150px;\\r\\n}\\r\\n\\r\\n.leftInfoBox {\\r\\n  float: left;\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n.rightInfoBox {\\r\\n  float: left;\\r\\n  height: auto;\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n.weatherDetail {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.weatherDetail li {\\r\\n  margin-right: 10px;\\r\\n  margin-top: 20px;\\r\\n  color: white;\\r\\n  font-size: 28px;\\r\\n  float: left;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/images/background1.jpg":
/*!************************************!*\
  !*** ./src/images/background1.jpg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"68e98a430dd66a6d4d1ba0e898f9030c.jpg\");\n\n//# sourceURL=webpack:///./src/images/background1.jpg?");

/***/ }),

/***/ "./src/images/background2.jpg":
/*!************************************!*\
  !*** ./src/images/background2.jpg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"c30ae258e1646546c98399bc5d2a7617.jpg\");\n\n//# sourceURL=webpack:///./src/images/background2.jpg?");

/***/ }),

/***/ "./src/images/background3.jpg":
/*!************************************!*\
  !*** ./src/images/background3.jpg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fbfe3744f97d32e08696f3f2880fe8b2.jpg\");\n\n//# sourceURL=webpack:///./src/images/background3.jpg?");

/***/ }),

/***/ "./src/images/background4.jpg":
/*!************************************!*\
  !*** ./src/images/background4.jpg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"ff199596331ad09ae54cdb8ff8cbe7bb.jpg\");\n\n//# sourceURL=webpack:///./src/images/background4.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/box */ \"./src/js/box.js\");\n/* harmony import */ var _js_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/form */ \"./src/js/form.js\");\n/* harmony import */ var _js_weatherInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/weatherInfo */ \"./src/js/weatherInfo.js\");\n\n\n\n\n\nconst structure = () => {\n  for (let i = 1; i <= 4; i += 1) {\n    const div = document.createElement('div');\n    div.setAttribute('id', `cover${i}`);\n    div.classList.add('cover');\n    document.querySelector('body').appendChild(div);\n  }\n  const weatherContainer = Object(_js_box__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  weatherContainer.appendChild(Object(_js_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n  const container = document.querySelector('.container');\n  container.appendChild(weatherContainer);\n  weatherContainer.appendChild(_js_weatherInfo__WEBPACK_IMPORTED_MODULE_3__[\"default\"].infoBox);\n};\n\ndocument.addEventListener('DOMContentLoaded', structure());\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/box.js":
/*!***********************!*\
  !*** ./src/js/box.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst weatherBox = () => {\n  const div = document.createElement('div');\n  div.classList.add('weatherBox');\n  const title = document.createElement('h1');\n  title.classList.add('title');\n  title.textContent = 'Julian Weather App';\n  div.appendChild(title);\n  return div;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (weatherBox);\n\n\n//# sourceURL=webpack:///./src/js/box.js?");

/***/ }),

/***/ "./src/js/form.js":
/*!************************!*\
  !*** ./src/js/form.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location */ \"./src/js/location.js\");\n\n\nconst inputValidation = (input) => {\n  if (input.value === null || input.value === '') {\n    return false;\n  }\n  Object(_location__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(input.value);\n  return true;\n};\n\nconst buttonListener = (button, input) => {\n  button.addEventListener('click', () => {\n    inputValidation(input);\n  });\n};\n\nconst form = () => {\n  const formContainer = document.createElement('div');\n  formContainer.classList.add('formContainer');\n  const form = document.createElement('form');\n  form.setAttribute('action', '#');\n  const label = document.createElement('label');\n  label.setAttribute('for', 'searchInput');\n  label.textContent = 'City';\n  const input = document.createElement('input');\n  input.setAttribute('type', 'text');\n  input.setAttribute('id', 'searchInput');\n  input.setAttribute('placeholder', 'City');\n  input.setAttribute('required', true);\n  const buttonContainer = document.createElement('div');\n  buttonContainer.classList.add('buttonContainer');\n  const button = document.createElement('button');\n  button.setAttribute('type', 'submit');\n  button.textContent = 'Search';\n  buttonContainer.appendChild(button);\n  buttonListener(button, input);\n  form.appendChild(label);\n  form.appendChild(input);\n  form.appendChild(buttonContainer);\n  formContainer.appendChild(form);\n  return formContainer;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (form);\n\n\n//# sourceURL=webpack:///./src/js/form.js?");

/***/ }),

/***/ "./src/js/location.js":
/*!****************************!*\
  !*** ./src/js/location.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weatherInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherInfo */ \"./src/js/weatherInfo.js\");\n\n\nconst setInfo = (\n  city,\n  country,\n  icon,\n  weatherDescription,\n  humidity,\n  pressure,\n  temperature,\n  minTemp,\n  maxTemp,\n  windSpeed,\n) => {\n  const infoBox = document.querySelector('.infoBox');\n  infoBox.style.display = 'block';\n  _weatherInfo__WEBPACK_IMPORTED_MODULE_0__[\"default\"].city.textContent = city;\n  _weatherInfo__WEBPACK_IMPORTED_MODULE_0__[\"default\"].city.innerHTML += ` <sup>${country}</sup>`;\n  _weatherInfo__WEBPACK_IMPORTED_MODULE_0__[\"default\"].image.setAttribute('src', `http://openweathermap.org/img/w/${icon}.png`);\n  _weatherInfo__WEBPACK_IMPORTED_MODULE_0__[\"default\"].temperature.textContent = Math.trunc(temperature - 273.15);\n  _weatherInfo__WEBPACK_IMPORTED_MODULE_0__[\"default\"].temperature.innerHTML += ' <sup>°C</sup>';\n  _weatherInfo__WEBPACK_IMPORTED_MODULE_0__[\"default\"].weatherDescription.textContent = weatherDescription;\n  _weatherInfo__WEBPACK_IMPORTED_MODULE_0__[\"default\"].humidityInfo.textContent = humidity;\n  _weatherInfo__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pressureInfo.textContent = pressure;\n  _weatherInfo__WEBPACK_IMPORTED_MODULE_0__[\"default\"].minTempInfo.textContent = Math.trunc(minTemp - 273.15);\n  _weatherInfo__WEBPACK_IMPORTED_MODULE_0__[\"default\"].minTempInfo.innerHTML += ' <sup>°C</sup>';\n  _weatherInfo__WEBPACK_IMPORTED_MODULE_0__[\"default\"].maxTempInfo.textContent = Math.trunc(maxTemp - 273.15);\n  _weatherInfo__WEBPACK_IMPORTED_MODULE_0__[\"default\"].maxTempInfo.innerHTML += ' <sup>°C</sup>';\n  _weatherInfo__WEBPACK_IMPORTED_MODULE_0__[\"default\"].windSpeedInfo.textContent = windSpeed;\n};\n\nasync function get(city) {\n  const response = await fetch(\n    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b0b84588a72bb1a0b05cf80c44a63e31`,\n    { mode: 'cors' },\n  );\n  const res = await response.json();\n  if (res) {\n    setInfo(\n      res.name,\n      res.sys.country,\n      res.weather[0].icon,\n      res.weather[0].description,\n      res.main.humidity,\n      res.main.pressure,\n      res.main.temp,\n      res.main.temp_min,\n      res.main.temp_max,\n      res.wind.speed,\n    );\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (get);\n\n\n//# sourceURL=webpack:///./src/js/location.js?");

/***/ }),

/***/ "./src/js/weatherInfo.js":
/*!*******************************!*\
  !*** ./src/js/weatherInfo.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst info = (() => {\n  const infoBox = document.createElement('div');\n  infoBox.classList.add('infoBox');\n  const leftInfoBox = document.createElement('div');\n  leftInfoBox.classList.add('leftInfoBox');\n  const rightInfoBox = document.createElement('div');\n  rightInfoBox.classList.add('rightInfoBox');\n  const city = document.createElement('h1');\n  const temperature = document.createElement('h2');\n  temperature.classList.add('class', 'temperature');\n  const image = document.createElement('img');\n  image.classList.add('weatherImage');\n  const weatherDetail = document.createElement('ul');\n  weatherDetail.classList.add('weatherDetail');\n  const weatherMain = document.createElement('li');\n  weatherMain.textContent = 'Clouds:';\n  const weatherDescription = document.createElement('li');\n  weatherDetail.appendChild(weatherMain);\n  weatherDetail.appendChild(weatherDescription);\n  // HUMIDITY\n  const humityDetail = document.createElement('ul');\n  humityDetail.classList.add('weatherDetail');\n  const humidityTitle = document.createElement('li');\n  humidityTitle.textContent = 'Humidity:';\n  const humidityInfo = document.createElement('li');\n  humityDetail.appendChild(humidityTitle);\n  humityDetail.appendChild(humidityInfo);\n  // PRESSURE\n  const pressureDetail = document.createElement('ul');\n  pressureDetail.classList.add('weatherDetail');\n  const pressureTitle = document.createElement('li');\n  pressureTitle.textContent = 'Pressure: ';\n  const pressureInfo = document.createElement('li');\n  pressureDetail.appendChild(pressureTitle);\n  pressureDetail.appendChild(pressureInfo);\n  // MIN TEMPERATURE\n  const minTempDetail = document.createElement('ul');\n  minTempDetail.classList.add('weatherDetail');\n  const minTempTitle = document.createElement('li');\n  minTempTitle.textContent = 'Min Temp: ';\n  const minTempInfo = document.createElement('li');\n  minTempDetail.appendChild(minTempTitle);\n  minTempDetail.appendChild(minTempInfo);\n  // MAX TEMP\n  const maxTempDetail = document.createElement('ul');\n  maxTempDetail.classList.add('weatherDetail');\n  const maxTempTitle = document.createElement('li');\n  maxTempTitle.textContent = 'Max Temp: ';\n  const maxTempInfo = document.createElement('li');\n  maxTempDetail.appendChild(maxTempTitle);\n  maxTempDetail.appendChild(maxTempInfo);\n  // WIND SPEED\n  const windSpeedDetail = document.createElement('ul');\n  windSpeedDetail.classList.add('weatherDetail');\n  const windSpeedTitle = document.createElement('li');\n  windSpeedTitle.textContent = 'Wind Speed: ';\n  const windSpeedInfo = document.createElement('li');\n  windSpeedDetail.appendChild(windSpeedTitle);\n  windSpeedDetail.appendChild(windSpeedInfo);\n\n  leftInfoBox.appendChild(city);\n  leftInfoBox.appendChild(temperature);\n  leftInfoBox.appendChild(image);\n\n  rightInfoBox.appendChild(weatherDetail);\n  rightInfoBox.appendChild(humityDetail);\n  rightInfoBox.appendChild(pressureDetail);\n  rightInfoBox.appendChild(minTempDetail);\n  rightInfoBox.appendChild(maxTempDetail);\n  rightInfoBox.appendChild(windSpeedDetail);\n\n  infoBox.appendChild(leftInfoBox);\n  infoBox.appendChild(rightInfoBox);\n  return {\n    infoBox,\n    weatherMain,\n    weatherDescription,\n    city,\n    temperature,\n    image,\n    humidityInfo,\n    pressureInfo,\n    minTempInfo,\n    maxTempInfo,\n    windSpeedInfo,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (info);\n\n\n//# sourceURL=webpack:///./src/js/weatherInfo.js?");

/***/ })

/******/ });