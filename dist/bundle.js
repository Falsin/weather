/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/create-html-node/createHtmlNode.js":
/*!*********************************************************!*\
  !*** ./node_modules/create-html-node/createHtmlNode.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createELem)
/* harmony export */ });
function createELem(parentElem, currentElem, ...arrayAttr) {
  let elem = document.createElement(currentElem);	
  parentElem.appendChild(elem);	
  arrayAttr = arrayAttr.map(item => item.split(':'))
  arrayAttr.forEach(item => {
    if (item.length == 1) {
      elem.textContent = `${item}`
    } else {
      elem.setAttribute(`${item[0]}`, `${item[1]}`);
    }
  })
  return elem;
}



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style.less":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style.less ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  border: solid red 1px;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n  background: #ffa500;\n}\nbody {\n  font-size: 16px;\n}\n.container {\n  border: solid green 1px;\n  padding-left: 5vmin;\n  padding-right: 5vmin;\n  display: flex;\n  flex-wrap: wrap;\n}\n.container #searchBox {\n  border: solid green 1px;\n  width: 50%;\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n}\n.container #searchBox input {\n  flex-grow: 1;\n  min-width: 0;\n  padding-left: 1vmin;\n}\n.container #searchBox button {\n  padding: 1vmin;\n}\n.container #siteHeadline {\n  width: 30vmin;\n}\n.container #units {\n  width: 10vmin;\n  display: flex;\n}\n.container #units button {\n  flex-grow: 1;\n}\n#hourlyWeather {\n  display: flex;\n  width: 70%;\n  overflow-x: scroll;\n}\n#hourlyWeather > * {\n  padding-left: 50px;\n  padding-right: 50px;\n}\n.weatherImg {\n  width: 60px;\n  height: 60px;\n  background-position: center center;\n  background-size: contain;\n}\n#commonInfo .container {\n  display: flex;\n  flex-direction: column;\n}\n#commonInfo .container > div {\n  display: flex;\n  justify-content: space-evenly;\n}\n#commonInfo .container > div > div {\n  width: 17vmin;\n}\n@media screen and (max-width: 540px) {\n  .container #units,\n  #hourlyWeather {\n    width: 100%;\n  }\n  #commonInfo .container {\n    flex-direction: row;\n    justify-content: space-evenly;\n  }\n  #commonInfo .container div {\n    flex-direction: column;\n  }\n}\n@media screen and (max-width: 300px) {\n  .container #siteHeadline,\n  .container #searchBox {\n    width: 100%;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.less"],"names":[],"mappings":"AAKA;EACE,qBAAA;EACA,sBAAA;EACA,UAAA;EACA,SAAA;AAJF;AAOA;;EACE,YAAA;EACA,WAAA;EACA,mBAAA;AAJF;AAOA;EACE,eAAA;AALF;AAQA;EACE,uBAAA;EACA,mBAAA;EACA,oBAAA;EACA,aAAA;EACA,eAAA;AANF;AASA;EACE,uBAAA;EACA,UAAA;EACA,aAAA;EACA,iBAAA;EACA,kBAAA;AAPF;AASE;EACE,YAAA;EACA,YAAA;EACA,mBAAA;AAPJ;AAUE;EACE,cAAA;AARJ;AAYA;EACE,aAAA;AAVF;AAaA;EACE,aAAA;EACA,aAAA;AAXF;AAaE;EACE,YAAA;AAXJ;AAeA;EACE,aAAA;EACA,UAAA;EACA,kBAAA;AAbF;AAeE;EACE,kBAAA;EACA,mBAAA;AAbJ;AAiBA;EAvEE,WAAA;EACA,YAAA;EAwEA,kCAAA;EACA,wBAAA;AAdF;AAiBA;EAEE,aAAA;EACA,sBAAA;AAhBF;AAkBE;EACE,aAAA;EACA,6BAAA;AAhBJ;AAkBI;EACE,aAAA;AAhBN;AAqBA;EACE;;IAEE,WAAA;EAnBF;EAqBA;IACE,mBAAA;IACA,6BAAA;EAnBF;EAsBE;IACE,sBAAA;EApBJ;AACF;AAwBA;EACE;;IAEE,WAAA;EAtBF;AACF","sourcesContent":[".size(@width, @height) {\n  width: @width;\n  height: @height;\n}\n\n* {\n  border: solid red 1px;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml, body {\n  height: 100%;\n  width: 100%;\n  background: #ffa500;\n}\n\nbody {\n  font-size: 16px;\n}\n\n.container {\n  border: solid green 1px;\n  padding-left: 5vmin;\n  padding-right: 5vmin;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.container #searchBox {\n  border: solid green 1px;\n  width: 50%;\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n\n  & input {\n    flex-grow: 1;\n    min-width: 0;\n    padding-left: 1vmin;\n  }\n\n  & button {\n    padding: 1vmin;\n  }\n}\n\n.container #siteHeadline {\n  width: 30vmin;\n}\n\n.container #units {\n  width: 10vmin;\n  display: flex;\n\n  & button {\n    flex-grow: 1;\n  }\n}\n\n#hourlyWeather {\n  display: flex;\n  width: 70%;\n  overflow-x: scroll;\n\n  & > * {\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n}\n\n.weatherImg {\n  .size(60px, 60px);\n  background-position: center center;\n  background-size: contain;\n}\n\n#commonInfo .container {\n  //border: solid green 1px;\n  display: flex;\n  flex-direction: column;\n\n  & > div {\n    display: flex;\n    justify-content: space-evenly;\n\n    & > div {\n      width: 17vmin;\n    }\n  }\n}\n\n@media screen and (max-width: 540px){\n  .container #units,\n  #hourlyWeather {\n    width: 100%;\n  }\n  #commonInfo .container {\n    flex-direction: row;\n    justify-content: space-evenly;\n\n\n    & div {\n      flex-direction: column;\n    }\n  }\n}\n\n@media screen and (max-width: 300px){\n  .container #siteHeadline,\n  .container #searchBox {\n    width: 100%;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.less":
/*!************************!*\
  !*** ./src/style.less ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./style.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style.less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/tuneTodayWeatherBlock.js":
/*!**************************************!*\
  !*** ./src/tuneTodayWeatherBlock.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var create_html_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! create-html-node */ "./node_modules/create-html-node/createHtmlNode.js");


const todayWeather = document.getElementById('todayWeather');

function setTodayWeather(currentWeather, hourlyWeather, currentCityName) {
  const cityName = todayWeather.querySelector('h2');
  const temp = todayWeather.querySelector('.temp');
  const hourlyWeatherBlock = document.getElementById('hourlyWeather');

  cityName.textContent = currentCityName;
  mainWeather.textContent = currentWeather.weather[0].main;
  temp.textContent = currentWeather.temp;

  createWeatherCell(hourlyWeatherBlock, 'Now', currentWeather, currentWeather.temp)

  for (let i = 0; i < 24; i++) {
    const hour = new Date(hourlyWeather[i].dt * 1000).getHours();
    const temp = hourlyWeather[i].temp;
    createWeatherCell(hourlyWeatherBlock, hour, hourlyWeather[i], hourlyWeather[i].temp)
  }
}

function createWeatherCell(parentElem, hour, array, temp) {
  const elem = (0,create_html_node__WEBPACK_IMPORTED_MODULE_0__.default)(parentElem, 'div', 'class:weatherIcons');
  (0,create_html_node__WEBPACK_IMPORTED_MODULE_0__.default)(elem, 'div', `${hour}`);
  const weatherImg = (0,create_html_node__WEBPACK_IMPORTED_MODULE_0__.default)(elem, 'div', 'class:weatherImg');
  weatherImg.style.backgroundImage = `url(http://openweathermap.org/img/wn/${array.weather[0].icon}@2x.png)`
  ;(0,create_html_node__WEBPACK_IMPORTED_MODULE_0__.default)(elem, 'div', `${temp}`);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setTodayWeather);

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
/******/ 			id: moduleId,
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.less */ "./src/style.less");
/* harmony import */ var create_html_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! create-html-node */ "./node_modules/create-html-node/createHtmlNode.js");
/* harmony import */ var _tuneTodayWeatherBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tuneTodayWeatherBlock */ "./src/tuneTodayWeatherBlock.js");




const input = document.querySelector('input');
const btn = document.querySelector('button');
const todayWeather = document.getElementById('todayWeather');
const commonInfo = document.getElementById('commonInfo');


btn.addEventListener('mousedown', () => {
  processingRequest(input.value);
})

window.onload = () => processingRequest('London');

function processingRequest(currentCityName) {
  returnCityCoord(currentCityName)
    .then(response => {
      return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${response.lat}&lon=${response.lon}&appid=7583fd4c80f1f8e75fe03f14d121ece0`, {mode: 'cors'})
    })
    .then(response => response.json())
    .then(response => {
      deleteInfoFromTheSite()
      addInfoIntoTheSite(response, currentCityName);
    })
}

function returnCityCoord(currentCityName) {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${currentCityName}&appid=7583fd4c80f1f8e75fe03f14d121ece0`, {mode: 'cors'})
    .then(response => response.json())
    .then(response => response.coord)
}

function addInfoIntoTheSite(obj, currentCityName) {
  //console.log(obj);
  (0,_tuneTodayWeatherBlock__WEBPACK_IMPORTED_MODULE_2__.default)(obj.current, obj.hourly, currentCityName)
  setCommonInfo(obj.current)
}

function deleteInfoFromTheSite() {
  const weatherIcons = todayWeather.querySelectorAll('.weatherIcons');

  weatherIcons.forEach(elem => elem.remove())
}

function setCommonInfo(obj) {
  const commonInfoElements = commonInfo.querySelectorAll('.commonInfoElement');

  obj.sunrise = `${new Date(obj.sunrise * 1000).getHours()}:${new Date(obj.sunrise * 1000).getMinutes()}`;
  obj.sunset = `${new Date(obj.sunset * 1000).getHours()}:${new Date(obj.sunset * 1000).getMinutes()}`;
  obj.visibility = `${obj.visibility / 1000}`;

  for (let i = 0; i < commonInfoElements.length; i++) {
    const childElem = (0,create_html_node__WEBPACK_IMPORTED_MODULE_1__.default)(commonInfoElements[i], 'span');
    childElem.textContent = `${obj[commonInfoElements[i].id]} ${commonInfoElements[i].dataset.inits || ''}`;
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2NyZWF0ZS1odG1sLW5vZGUvY3JlYXRlSHRtbE5vZGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9zdHlsZS5sZXNzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3N0eWxlLmxlc3M/ZWE2OCIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvdHVuZVRvZGF5V2VhdGhlckJsb2NrLmpzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLGlEO0FBQ0EsK0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsS0FBSztBQUNqQyxLQUFLO0FBQ0wsMkJBQTJCLFFBQVEsTUFB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V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7QUNOc0I7QUFDbUI7QUFDWTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSxhQUFhLE9BQU8sYUFBYSwyQ0FBMkMsYUFBYTtBQUNuSyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxtRUFBbUUsZ0JBQWdCLDJDQUEyQyxhQUFhO0FBQzNJO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSwrREFBZTtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1CQUFtQix3Q0FBd0MsR0FBRywwQ0FBMEM7QUFDeEcsa0JBQWtCLHVDQUF1QyxHQUFHLHlDQUF5QztBQUNyRyxzQkFBc0Isc0JBQXNCOztBQUU1QyxpQkFBaUIsK0JBQStCO0FBQ2hELHNCQUFzQix5REFBVTtBQUNoQywrQkFBK0IsOEJBQThCLEdBQUcsMENBQTBDO0FBQzFHO0FBQ0EsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVFTGVtKHBhcmVudEVsZW0sIGN1cnJlbnRFbGVtLCAuLi5hcnJheUF0dHIpIHtcbiAgbGV0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGN1cnJlbnRFbGVtKTtcdFxuICBwYXJlbnRFbGVtLmFwcGVuZENoaWxkKGVsZW0pO1x0XG4gIGFycmF5QXR0ciA9IGFycmF5QXR0ci5tYXAoaXRlbSA9PiBpdGVtLnNwbGl0KCc6JykpXG4gIGFycmF5QXR0ci5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGlmIChpdGVtLmxlbmd0aCA9PSAxKSB7XG4gICAgICBlbGVtLnRleHRDb250ZW50ID0gYCR7aXRlbX1gXG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0uc2V0QXR0cmlidXRlKGAke2l0ZW1bMF19YCwgYCR7aXRlbVsxXX1gKTtcbiAgICB9XG4gIH0pXG4gIHJldHVybiBlbGVtO1xufVxuXG5leHBvcnQge2NyZWF0ZUVMZW0gYXMgZGVmYXVsdH0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm9yZGVyOiBzb2xpZCByZWQgMXB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICNmZmE1MDA7XFxufVxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4uY29udGFpbmVyIHtcXG4gIGJvcmRlcjogc29saWQgZ3JlZW4gMXB4O1xcbiAgcGFkZGluZy1sZWZ0OiA1dm1pbjtcXG4gIHBhZGRpbmctcmlnaHQ6IDV2bWluO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLmNvbnRhaW5lciAjc2VhcmNoQm94IHtcXG4gIGJvcmRlcjogc29saWQgZ3JlZW4gMXB4O1xcbiAgd2lkdGg6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuLmNvbnRhaW5lciAjc2VhcmNoQm94IGlucHV0IHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIG1pbi13aWR0aDogMDtcXG4gIHBhZGRpbmctbGVmdDogMXZtaW47XFxufVxcbi5jb250YWluZXIgI3NlYXJjaEJveCBidXR0b24ge1xcbiAgcGFkZGluZzogMXZtaW47XFxufVxcbi5jb250YWluZXIgI3NpdGVIZWFkbGluZSB7XFxuICB3aWR0aDogMzB2bWluO1xcbn1cXG4uY29udGFpbmVyICN1bml0cyB7XFxuICB3aWR0aDogMTB2bWluO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmNvbnRhaW5lciAjdW5pdHMgYnV0dG9uIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuI2hvdXJseVdlYXRoZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA3MCU7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxufVxcbiNob3VybHlXZWF0aGVyID4gKiB7XFxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcbn1cXG4ud2VhdGhlckltZyB7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxufVxcbiNjb21tb25JbmZvIC5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbiNjb21tb25JbmZvIC5jb250YWluZXIgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG4jY29tbW9uSW5mbyAuY29udGFpbmVyID4gZGl2ID4gZGl2IHtcXG4gIHdpZHRoOiAxN3ZtaW47XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0MHB4KSB7XFxuICAuY29udGFpbmVyICN1bml0cyxcXG4gICNob3VybHlXZWF0aGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAjY29tbW9uSW5mbyAuY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB9XFxuICAjY29tbW9uSW5mbyAuY29udGFpbmVyIGRpdiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XFxuICAuY29udGFpbmVyICNzaXRlSGVhZGxpbmUsXFxuICAuY29udGFpbmVyICNzZWFyY2hCb3gge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmxlc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBS0E7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFKRjtBQU9BOztFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFKRjtBQU9BO0VBQ0UsZUFBQTtBQUxGO0FBUUE7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQU5GO0FBU0E7RUFDRSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVBGO0FBU0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBUEo7QUFVRTtFQUNFLGNBQUE7QUFSSjtBQVlBO0VBQ0UsYUFBQTtBQVZGO0FBYUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtBQVhGO0FBYUU7RUFDRSxZQUFBO0FBWEo7QUFlQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFiRjtBQWVFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQWJKO0FBaUJBO0VBdkVFLFdBQUE7RUFDQSxZQUFBO0VBd0VBLGtDQUFBO0VBQ0Esd0JBQUE7QUFkRjtBQWlCQTtFQUVFLGFBQUE7RUFDQSxzQkFBQTtBQWhCRjtBQWtCRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtBQWhCSjtBQWtCSTtFQUNFLGFBQUE7QUFoQk47QUFxQkE7RUFDRTs7SUFFRSxXQUFBO0VBbkJGO0VBcUJBO0lBQ0UsbUJBQUE7SUFDQSw2QkFBQTtFQW5CRjtFQXNCRTtJQUNFLHNCQUFBO0VBcEJKO0FBQ0Y7QUF3QkE7RUFDRTs7SUFFRSxXQUFBO0VBdEJGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNpemUoQHdpZHRoLCBAaGVpZ2h0KSB7XFxuICB3aWR0aDogQHdpZHRoO1xcbiAgaGVpZ2h0OiBAaGVpZ2h0O1xcbn1cXG5cXG4qIHtcXG4gIGJvcmRlcjogc29saWQgcmVkIDFweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogI2ZmYTUwMDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgYm9yZGVyOiBzb2xpZCBncmVlbiAxcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDV2bWluO1xcbiAgcGFkZGluZy1yaWdodDogNXZtaW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uY29udGFpbmVyICNzZWFyY2hCb3gge1xcbiAgYm9yZGVyOiBzb2xpZCBncmVlbiAxcHg7XFxuICB3aWR0aDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcblxcbiAgJiBpbnB1dCB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgbWluLXdpZHRoOiAwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDF2bWluO1xcbiAgfVxcblxcbiAgJiBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAxdm1pbjtcXG4gIH1cXG59XFxuXFxuLmNvbnRhaW5lciAjc2l0ZUhlYWRsaW5lIHtcXG4gIHdpZHRoOiAzMHZtaW47XFxufVxcblxcbi5jb250YWluZXIgI3VuaXRzIHtcXG4gIHdpZHRoOiAxMHZtaW47XFxuICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgJiBidXR0b24ge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICB9XFxufVxcblxcbiNob3VybHlXZWF0aGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNzAlO1xcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcblxcbiAgJiA+ICoge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxuICB9XFxufVxcblxcbi53ZWF0aGVySW1nIHtcXG4gIC5zaXplKDYwcHgsIDYwcHgpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG59XFxuXFxuI2NvbW1vbkluZm8gLmNvbnRhaW5lciB7XFxuICAvL2JvcmRlcjogc29saWQgZ3JlZW4gMXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAmID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFxuICAgICYgPiBkaXYge1xcbiAgICAgIHdpZHRoOiAxN3ZtaW47XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTQwcHgpe1xcbiAgLmNvbnRhaW5lciAjdW5pdHMsXFxuICAjaG91cmx5V2VhdGhlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgI2NvbW1vbkluZm8gLmNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcblxcbiAgICAmIGRpdiB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCl7XFxuICAuY29udGFpbmVyICNzaXRlSGVhZGxpbmUsXFxuICAuY29udGFpbmVyICNzZWFyY2hCb3gge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmxlc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCBjcmVhdGVFbGVtIGZyb20gJ2NyZWF0ZS1odG1sLW5vZGUnXG5cbmNvbnN0IHRvZGF5V2VhdGhlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheVdlYXRoZXInKTtcblxuZnVuY3Rpb24gc2V0VG9kYXlXZWF0aGVyKGN1cnJlbnRXZWF0aGVyLCBob3VybHlXZWF0aGVyLCBjdXJyZW50Q2l0eU5hbWUpIHtcbiAgY29uc3QgY2l0eU5hbWUgPSB0b2RheVdlYXRoZXIucXVlcnlTZWxlY3RvcignaDInKTtcbiAgY29uc3QgdGVtcCA9IHRvZGF5V2VhdGhlci5xdWVyeVNlbGVjdG9yKCcudGVtcCcpO1xuICBjb25zdCBob3VybHlXZWF0aGVyQmxvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG91cmx5V2VhdGhlcicpO1xuXG4gIGNpdHlOYW1lLnRleHRDb250ZW50ID0gY3VycmVudENpdHlOYW1lO1xuICBtYWluV2VhdGhlci50ZXh0Q29udGVudCA9IGN1cnJlbnRXZWF0aGVyLndlYXRoZXJbMF0ubWFpbjtcbiAgdGVtcC50ZXh0Q29udGVudCA9IGN1cnJlbnRXZWF0aGVyLnRlbXA7XG5cbiAgY3JlYXRlV2VhdGhlckNlbGwoaG91cmx5V2VhdGhlckJsb2NrLCAnTm93JywgY3VycmVudFdlYXRoZXIsIGN1cnJlbnRXZWF0aGVyLnRlbXApXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG4gICAgY29uc3QgaG91ciA9IG5ldyBEYXRlKGhvdXJseVdlYXRoZXJbaV0uZHQgKiAxMDAwKS5nZXRIb3VycygpO1xuICAgIGNvbnN0IHRlbXAgPSBob3VybHlXZWF0aGVyW2ldLnRlbXA7XG4gICAgY3JlYXRlV2VhdGhlckNlbGwoaG91cmx5V2VhdGhlckJsb2NrLCBob3VyLCBob3VybHlXZWF0aGVyW2ldLCBob3VybHlXZWF0aGVyW2ldLnRlbXApXG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlV2VhdGhlckNlbGwocGFyZW50RWxlbSwgaG91ciwgYXJyYXksIHRlbXApIHtcbiAgY29uc3QgZWxlbSA9IGNyZWF0ZUVsZW0ocGFyZW50RWxlbSwgJ2RpdicsICdjbGFzczp3ZWF0aGVySWNvbnMnKTtcbiAgY3JlYXRlRWxlbShlbGVtLCAnZGl2JywgYCR7aG91cn1gKTtcbiAgY29uc3Qgd2VhdGhlckltZyA9IGNyZWF0ZUVsZW0oZWxlbSwgJ2RpdicsICdjbGFzczp3ZWF0aGVySW1nJyk7XG4gIHdlYXRoZXJJbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2FycmF5LndlYXRoZXJbMF0uaWNvbn1AMngucG5nKWBcbiAgY3JlYXRlRWxlbShlbGVtLCAnZGl2JywgYCR7dGVtcH1gKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2V0VG9kYXlXZWF0aGVyIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5sZXNzJztcbmltcG9ydCBjcmVhdGVFbGVtIGZyb20gJ2NyZWF0ZS1odG1sLW5vZGUnXG5pbXBvcnQgc2V0VG9kYXlXZWF0aGVyIGZyb20gJy4vdHVuZVRvZGF5V2VhdGhlckJsb2NrJ1xuXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG5jb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbmNvbnN0IHRvZGF5V2VhdGhlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheVdlYXRoZXInKTtcbmNvbnN0IGNvbW1vbkluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbW9uSW5mbycpO1xuXG5cbmJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB7XG4gIHByb2Nlc3NpbmdSZXF1ZXN0KGlucHV0LnZhbHVlKTtcbn0pXG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiBwcm9jZXNzaW5nUmVxdWVzdCgnTG9uZG9uJyk7XG5cbmZ1bmN0aW9uIHByb2Nlc3NpbmdSZXF1ZXN0KGN1cnJlbnRDaXR5TmFtZSkge1xuICByZXR1cm5DaXR5Q29vcmQoY3VycmVudENpdHlOYW1lKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7cmVzcG9uc2UubGF0fSZsb249JHtyZXNwb25zZS5sb259JmFwcGlkPTc1ODNmZDRjODBmMWY4ZTc1ZmUwM2YxNGQxMjFlY2UwYCwge21vZGU6ICdjb3JzJ30pXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgZGVsZXRlSW5mb0Zyb21UaGVTaXRlKClcbiAgICAgIGFkZEluZm9JbnRvVGhlU2l0ZShyZXNwb25zZSwgY3VycmVudENpdHlOYW1lKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiByZXR1cm5DaXR5Q29vcmQoY3VycmVudENpdHlOYW1lKSB7XG4gIHJldHVybiBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y3VycmVudENpdHlOYW1lfSZhcHBpZD03NTgzZmQ0YzgwZjFmOGU3NWZlMDNmMTRkMTIxZWNlMGAsIHttb2RlOiAnY29ycyd9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5jb29yZClcbn1cblxuZnVuY3Rpb24gYWRkSW5mb0ludG9UaGVTaXRlKG9iaiwgY3VycmVudENpdHlOYW1lKSB7XG4gIC8vY29uc29sZS5sb2cob2JqKTtcbiAgc2V0VG9kYXlXZWF0aGVyKG9iai5jdXJyZW50LCBvYmouaG91cmx5LCBjdXJyZW50Q2l0eU5hbWUpXG4gIHNldENvbW1vbkluZm8ob2JqLmN1cnJlbnQpXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUluZm9Gcm9tVGhlU2l0ZSgpIHtcbiAgY29uc3Qgd2VhdGhlckljb25zID0gdG9kYXlXZWF0aGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy53ZWF0aGVySWNvbnMnKTtcblxuICB3ZWF0aGVySWNvbnMuZm9yRWFjaChlbGVtID0+IGVsZW0ucmVtb3ZlKCkpXG59XG5cbmZ1bmN0aW9uIHNldENvbW1vbkluZm8ob2JqKSB7XG4gIGNvbnN0IGNvbW1vbkluZm9FbGVtZW50cyA9IGNvbW1vbkluZm8ucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1vbkluZm9FbGVtZW50Jyk7XG5cbiAgb2JqLnN1bnJpc2UgPSBgJHtuZXcgRGF0ZShvYmouc3VucmlzZSAqIDEwMDApLmdldEhvdXJzKCl9OiR7bmV3IERhdGUob2JqLnN1bnJpc2UgKiAxMDAwKS5nZXRNaW51dGVzKCl9YDtcbiAgb2JqLnN1bnNldCA9IGAke25ldyBEYXRlKG9iai5zdW5zZXQgKiAxMDAwKS5nZXRIb3VycygpfToke25ldyBEYXRlKG9iai5zdW5zZXQgKiAxMDAwKS5nZXRNaW51dGVzKCl9YDtcbiAgb2JqLnZpc2liaWxpdHkgPSBgJHtvYmoudmlzaWJpbGl0eSAvIDEwMDB9YDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbW1vbkluZm9FbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNoaWxkRWxlbSA9IGNyZWF0ZUVsZW0oY29tbW9uSW5mb0VsZW1lbnRzW2ldLCAnc3BhbicpO1xuICAgIGNoaWxkRWxlbS50ZXh0Q29udGVudCA9IGAke29ialtjb21tb25JbmZvRWxlbWVudHNbaV0uaWRdfSAke2NvbW1vbkluZm9FbGVtZW50c1tpXS5kYXRhc2V0LmluaXRzIHx8ICcnfWA7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9