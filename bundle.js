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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  border: solid red 1px;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n  background: #ffa500;\n}\nbody {\n  font-size: 16px;\n}\n.container {\n  border: solid green 1px;\n  padding-left: 5vmin;\n  padding-right: 5vmin;\n  display: flex;\n  flex-wrap: wrap;\n}\n.container #searchBox {\n  border: solid green 1px;\n  width: 50%;\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n}\n.container #searchBox input {\n  flex-grow: 1;\n  min-width: 0;\n  padding-left: 1vmin;\n}\n.container #searchBox button {\n  padding: 1vmin;\n}\n.container #siteHeadline {\n  width: 30vmin;\n}\n.container #units {\n  width: 10vmin;\n  display: flex;\n}\n.container #units button {\n  flex-grow: 1;\n}\n#hourlyWeather {\n  display: flex;\n  width: 70%;\n  overflow-x: scroll;\n}\n#hourlyWeather > * {\n  padding-left: 50px;\n  padding-right: 50px;\n}\n.weatherImg {\n  width: 60px;\n  height: 60px;\n  background-position: center center;\n  background-size: contain;\n}\n#commonInfo .container {\n  display: flex;\n  flex-direction: column;\n}\n#commonInfo .container > div {\n  display: flex;\n  justify-content: space-evenly;\n}\n#commonInfo .container > div > div {\n  width: 17vmin;\n}\n#dailyWeather .container table {\n  width: 100%;\n}\n@media screen and (max-width: 540px) {\n  .container #units,\n  #hourlyWeather {\n    width: 100%;\n  }\n  #commonInfo .container {\n    flex-direction: row;\n    justify-content: space-evenly;\n  }\n  #commonInfo .container div {\n    flex-direction: column;\n  }\n}\n@media screen and (max-width: 300px) {\n  .container #siteHeadline,\n  .container #searchBox {\n    width: 100%;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.less"],"names":[],"mappings":"AAKA;EACE,qBAAA;EACA,sBAAA;EACA,UAAA;EACA,SAAA;AAJF;AAOA;;EACE,YAAA;EACA,WAAA;EACA,mBAAA;AAJF;AAOA;EACE,eAAA;AALF;AAQA;EACE,uBAAA;EACA,mBAAA;EACA,oBAAA;EACA,aAAA;EACA,eAAA;AANF;AASA;EACE,uBAAA;EACA,UAAA;EACA,aAAA;EACA,iBAAA;EACA,kBAAA;AAPF;AASE;EACE,YAAA;EACA,YAAA;EACA,mBAAA;AAPJ;AAUE;EACE,cAAA;AARJ;AAYA;EACE,aAAA;AAVF;AAaA;EACE,aAAA;EACA,aAAA;AAXF;AAaE;EACE,YAAA;AAXJ;AAeA;EACE,aAAA;EACA,UAAA;EACA,kBAAA;AAbF;AAeE;EACE,kBAAA;EACA,mBAAA;AAbJ;AAiBA;EAvEE,WAAA;EACA,YAAA;EAwEA,kCAAA;EACA,wBAAA;AAdF;AAiBA;EACE,aAAA;EACA,sBAAA;AAfF;AAiBE;EACE,aAAA;EACA,6BAAA;AAfJ;AAiBI;EACE,aAAA;AAfN;AAsBE;EACE,WAAA;AApBJ;AAwBA;EACE;;IAEE,WAAA;EAtBF;EAwBA;IACE,mBAAA;IACA,6BAAA;EAtBF;EAyBE;IACE,sBAAA;EAvBJ;AACF;AA2BA;EACE;;IAEE,WAAA;EAzBF;AACF","sourcesContent":[".size(@width, @height) {\n  width: @width;\n  height: @height;\n}\n\n* {\n  border: solid red 1px;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml, body {\n  height: 100%;\n  width: 100%;\n  background: #ffa500;\n}\n\nbody {\n  font-size: 16px;\n}\n\n.container {\n  border: solid green 1px;\n  padding-left: 5vmin;\n  padding-right: 5vmin;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.container #searchBox {\n  border: solid green 1px;\n  width: 50%;\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n\n  & input {\n    flex-grow: 1;\n    min-width: 0;\n    padding-left: 1vmin;\n  }\n\n  & button {\n    padding: 1vmin;\n  }\n}\n\n.container #siteHeadline {\n  width: 30vmin;\n}\n\n.container #units {\n  width: 10vmin;\n  display: flex;\n\n  & button {\n    flex-grow: 1;\n  }\n}\n\n#hourlyWeather {\n  display: flex;\n  width: 70%;\n  overflow-x: scroll;\n\n  & > * {\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n}\n\n.weatherImg {\n  .size(60px, 60px);\n  background-position: center center;\n  background-size: contain;\n}\n\n#commonInfo .container {\n  display: flex;\n  flex-direction: column;\n\n  & > div {\n    display: flex;\n    justify-content: space-evenly;\n\n    & > div {\n      width: 17vmin;\n    }\n  }\n}\n\n#dailyWeather .container {\n  \n  & table {\n    width: 100%;\n  }\n}\n\n@media screen and (max-width: 540px){\n  .container #units,\n  #hourlyWeather {\n    width: 100%;\n  }\n  #commonInfo .container {\n    flex-direction: row;\n    justify-content: space-evenly;\n\n\n    & div {\n      flex-direction: column;\n    }\n  }\n}\n\n@media screen and (max-width: 300px){\n  .container #siteHeadline,\n  .container #searchBox {\n    width: 100%;\n  }\n}"],"sourceRoot":""}]);
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

/***/ "./src/setCommonInfo.js":
/*!******************************!*\
  !*** ./src/setCommonInfo.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var create_html_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! create-html-node */ "./node_modules/create-html-node/createHtmlNode.js");


const commonInfo = document.getElementById('commonInfo');

function setCommonInfo(obj) {
  const commonInfoElements = commonInfo.querySelectorAll('.commonInfoElement');

  console.log(commonInfo)
  obj.sunrise = `${new Date(obj.sunrise * 1000).getHours()}:${new Date(obj.sunrise * 1000).getMinutes()}`;
  obj.sunset = `${new Date(obj.sunset * 1000).getHours()}:${new Date(obj.sunset * 1000).getMinutes()}`;
  obj.visibility = `${obj.visibility / 1000}`;

  for (let i = 0; i < commonInfoElements.length; i++) {
    const childElem = (0,create_html_node__WEBPACK_IMPORTED_MODULE_0__.default)(commonInfoElements[i], 'span');
    childElem.textContent = `${obj[commonInfoElements[i].id]} ${commonInfoElements[i].dataset.inits || ''}`;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setCommonInfo);

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
/* harmony import */ var _setCommonInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setCommonInfo */ "./src/setCommonInfo.js");





const input = document.querySelector('input');
const btn = document.querySelector('button');
const todayWeather = document.getElementById('todayWeather');
const dailyWeather = document.getElementById('dailyWeather');


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
  console.log(obj);
  (0,_tuneTodayWeatherBlock__WEBPACK_IMPORTED_MODULE_2__.default)(obj.current, obj.hourly, currentCityName);
  (0,_setCommonInfo__WEBPACK_IMPORTED_MODULE_3__.default)(obj.current);
  setDailyWeather(obj.daily)
}

function setDailyWeather(array) {
  const daysArray = [
    'Sunday', 
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday'
  ]

  for (let i = 1; i < array.length; i++) {
    const table = dailyWeather.querySelector('table');
    const dayLine = (0,create_html_node__WEBPACK_IMPORTED_MODULE_1__.default)(table, 'tr');
    (0,create_html_node__WEBPACK_IMPORTED_MODULE_1__.default)(dayLine, 'td', `${daysArray[new Date(array[i].dt * 1000).getDay()]}`);
    const weatherIcon = (0,create_html_node__WEBPACK_IMPORTED_MODULE_1__.default)(dayLine, 'td');
    //console.log(array[i].weather[0].icon)
    weatherIcon.style.backgroundImage = `url(http://openweathermap.org/img/wn/${array[i].weather[0].icon}@2x.png)`

    for (let i = 0; i < 2; i++) {
      const element = (0,create_html_node__WEBPACK_IMPORTED_MODULE_1__.default)(dayLine, 'td', 'Hello!');
    }
  }
}

function deleteInfoFromTheSite() {
  const weatherIcons = todayWeather.querySelectorAll('.weatherIcons');

  weatherIcons.forEach(elem => elem.remove())
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2NyZWF0ZS1odG1sLW5vZGUvY3JlYXRlSHRtbE5vZGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9zdHlsZS5sZXNzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3N0eWxlLmxlc3M/ZWE2OCIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvc2V0Q29tbW9uSW5mby5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3R1bmVUb2RheVdlYXRoZXJCbG9jay5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxpRDtBQUNBLCtCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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REFBVTtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlRUxlbShwYXJlbnRFbGVtLCBjdXJyZW50RWxlbSwgLi4uYXJyYXlBdHRyKSB7XG4gIGxldCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChjdXJyZW50RWxlbSk7XHRcbiAgcGFyZW50RWxlbS5hcHBlbmRDaGlsZChlbGVtKTtcdFxuICBhcnJheUF0dHIgPSBhcnJheUF0dHIubWFwKGl0ZW0gPT4gaXRlbS5zcGxpdCgnOicpKVxuICBhcnJheUF0dHIuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpZiAoaXRlbS5sZW5ndGggPT0gMSkge1xuICAgICAgZWxlbS50ZXh0Q29udGVudCA9IGAke2l0ZW19YFxuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtLnNldEF0dHJpYnV0ZShgJHtpdGVtWzBdfWAsIGAke2l0ZW1bMV19YCk7XG4gICAgfVxuICB9KVxuICByZXR1cm4gZWxlbTtcbn1cblxuZXhwb3J0IHtjcmVhdGVFTGVtIGFzIGRlZmF1bHR9IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJvcmRlcjogc29saWQgcmVkIDFweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjZmZhNTAwO1xcbn1cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLmNvbnRhaW5lciB7XFxuICBib3JkZXI6IHNvbGlkIGdyZWVuIDFweDtcXG4gIHBhZGRpbmctbGVmdDogNXZtaW47XFxuICBwYWRkaW5nLXJpZ2h0OiA1dm1pbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi5jb250YWluZXIgI3NlYXJjaEJveCB7XFxuICBib3JkZXI6IHNvbGlkIGdyZWVuIDFweDtcXG4gIHdpZHRoOiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi5jb250YWluZXIgI3NlYXJjaEJveCBpbnB1dCB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBtaW4td2lkdGg6IDA7XFxuICBwYWRkaW5nLWxlZnQ6IDF2bWluO1xcbn1cXG4uY29udGFpbmVyICNzZWFyY2hCb3ggYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDF2bWluO1xcbn1cXG4uY29udGFpbmVyICNzaXRlSGVhZGxpbmUge1xcbiAgd2lkdGg6IDMwdm1pbjtcXG59XFxuLmNvbnRhaW5lciAjdW5pdHMge1xcbiAgd2lkdGg6IDEwdm1pbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5jb250YWluZXIgI3VuaXRzIGJ1dHRvbiB7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcbiNob3VybHlXZWF0aGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNzAlO1xcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbn1cXG4jaG91cmx5V2VhdGhlciA+ICoge1xcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbiAgcGFkZGluZy1yaWdodDogNTBweDtcXG59XFxuLndlYXRoZXJJbWcge1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbn1cXG4jY29tbW9uSW5mbyAuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4jY29tbW9uSW5mbyAuY29udGFpbmVyID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuI2NvbW1vbkluZm8gLmNvbnRhaW5lciA+IGRpdiA+IGRpdiB7XFxuICB3aWR0aDogMTd2bWluO1xcbn1cXG4jZGFpbHlXZWF0aGVyIC5jb250YWluZXIgdGFibGUge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0MHB4KSB7XFxuICAuY29udGFpbmVyICN1bml0cyxcXG4gICNob3VybHlXZWF0aGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAjY29tbW9uSW5mbyAuY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB9XFxuICAjY29tbW9uSW5mbyAuY29udGFpbmVyIGRpdiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XFxuICAuY29udGFpbmVyICNzaXRlSGVhZGxpbmUsXFxuICAuY29udGFpbmVyICNzZWFyY2hCb3gge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmxlc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBS0E7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFKRjtBQU9BOztFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFKRjtBQU9BO0VBQ0UsZUFBQTtBQUxGO0FBUUE7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQU5GO0FBU0E7RUFDRSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVBGO0FBU0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBUEo7QUFVRTtFQUNFLGNBQUE7QUFSSjtBQVlBO0VBQ0UsYUFBQTtBQVZGO0FBYUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtBQVhGO0FBYUU7RUFDRSxZQUFBO0FBWEo7QUFlQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFiRjtBQWVFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQWJKO0FBaUJBO0VBdkVFLFdBQUE7RUFDQSxZQUFBO0VBd0VBLGtDQUFBO0VBQ0Esd0JBQUE7QUFkRjtBQWlCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQWZGO0FBaUJFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBZko7QUFpQkk7RUFDRSxhQUFBO0FBZk47QUFzQkU7RUFDRSxXQUFBO0FBcEJKO0FBd0JBO0VBQ0U7O0lBRUUsV0FBQTtFQXRCRjtFQXdCQTtJQUNFLG1CQUFBO0lBQ0EsNkJBQUE7RUF0QkY7RUF5QkU7SUFDRSxzQkFBQTtFQXZCSjtBQUNGO0FBMkJBO0VBQ0U7O0lBRUUsV0FBQTtFQXpCRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zaXplKEB3aWR0aCwgQGhlaWdodCkge1xcbiAgd2lkdGg6IEB3aWR0aDtcXG4gIGhlaWdodDogQGhlaWdodDtcXG59XFxuXFxuKiB7XFxuICBib3JkZXI6IHNvbGlkIHJlZCAxcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICNmZmE1MDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGJvcmRlcjogc29saWQgZ3JlZW4gMXB4O1xcbiAgcGFkZGluZy1sZWZ0OiA1dm1pbjtcXG4gIHBhZGRpbmctcmlnaHQ6IDV2bWluO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmNvbnRhaW5lciAjc2VhcmNoQm94IHtcXG4gIGJvcmRlcjogc29saWQgZ3JlZW4gMXB4O1xcbiAgd2lkdGg6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG5cXG4gICYgaW5wdXQge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIG1pbi13aWR0aDogMDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxdm1pbjtcXG4gIH1cXG5cXG4gICYgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMXZtaW47XFxuICB9XFxufVxcblxcbi5jb250YWluZXIgI3NpdGVIZWFkbGluZSB7XFxuICB3aWR0aDogMzB2bWluO1xcbn1cXG5cXG4uY29udGFpbmVyICN1bml0cyB7XFxuICB3aWR0aDogMTB2bWluO1xcbiAgZGlzcGxheTogZmxleDtcXG5cXG4gICYgYnV0dG9uIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgfVxcbn1cXG5cXG4jaG91cmx5V2VhdGhlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDcwJTtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG5cXG4gICYgPiAqIHtcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcbiAgfVxcbn1cXG5cXG4ud2VhdGhlckltZyB7XFxuICAuc2l6ZSg2MHB4LCA2MHB4KTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxufVxcblxcbiNjb21tb25JbmZvIC5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAmID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFxuICAgICYgPiBkaXYge1xcbiAgICAgIHdpZHRoOiAxN3ZtaW47XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuI2RhaWx5V2VhdGhlciAuY29udGFpbmVyIHtcXG4gIFxcbiAgJiB0YWJsZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NDBweCl7XFxuICAuY29udGFpbmVyICN1bml0cyxcXG4gICNob3VybHlXZWF0aGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAjY29tbW9uSW5mbyAuY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFxuXFxuICAgICYgZGl2IHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KXtcXG4gIC5jb250YWluZXIgI3NpdGVIZWFkbGluZSxcXG4gIC5jb250YWluZXIgI3NlYXJjaEJveCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUubGVzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IGNyZWF0ZUVsZW0gZnJvbSAnY3JlYXRlLWh0bWwtbm9kZSdcblxuY29uc3QgY29tbW9uSW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tb25JbmZvJyk7XG5cbmZ1bmN0aW9uIHNldENvbW1vbkluZm8ob2JqKSB7XG4gIGNvbnN0IGNvbW1vbkluZm9FbGVtZW50cyA9IGNvbW1vbkluZm8ucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1vbkluZm9FbGVtZW50Jyk7XG5cbiAgY29uc29sZS5sb2coY29tbW9uSW5mbylcbiAgb2JqLnN1bnJpc2UgPSBgJHtuZXcgRGF0ZShvYmouc3VucmlzZSAqIDEwMDApLmdldEhvdXJzKCl9OiR7bmV3IERhdGUob2JqLnN1bnJpc2UgKiAxMDAwKS5nZXRNaW51dGVzKCl9YDtcbiAgb2JqLnN1bnNldCA9IGAke25ldyBEYXRlKG9iai5zdW5zZXQgKiAxMDAwKS5nZXRIb3VycygpfToke25ldyBEYXRlKG9iai5zdW5zZXQgKiAxMDAwKS5nZXRNaW51dGVzKCl9YDtcbiAgb2JqLnZpc2liaWxpdHkgPSBgJHtvYmoudmlzaWJpbGl0eSAvIDEwMDB9YDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbW1vbkluZm9FbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNoaWxkRWxlbSA9IGNyZWF0ZUVsZW0oY29tbW9uSW5mb0VsZW1lbnRzW2ldLCAnc3BhbicpO1xuICAgIGNoaWxkRWxlbS50ZXh0Q29udGVudCA9IGAke29ialtjb21tb25JbmZvRWxlbWVudHNbaV0uaWRdfSAke2NvbW1vbkluZm9FbGVtZW50c1tpXS5kYXRhc2V0LmluaXRzIHx8ICcnfWA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2V0Q29tbW9uSW5mbyIsImltcG9ydCBjcmVhdGVFbGVtIGZyb20gJ2NyZWF0ZS1odG1sLW5vZGUnXG5cbmNvbnN0IHRvZGF5V2VhdGhlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheVdlYXRoZXInKTtcblxuZnVuY3Rpb24gc2V0VG9kYXlXZWF0aGVyKGN1cnJlbnRXZWF0aGVyLCBob3VybHlXZWF0aGVyLCBjdXJyZW50Q2l0eU5hbWUpIHtcbiAgY29uc3QgY2l0eU5hbWUgPSB0b2RheVdlYXRoZXIucXVlcnlTZWxlY3RvcignaDInKTtcbiAgY29uc3QgdGVtcCA9IHRvZGF5V2VhdGhlci5xdWVyeVNlbGVjdG9yKCcudGVtcCcpO1xuICBjb25zdCBob3VybHlXZWF0aGVyQmxvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG91cmx5V2VhdGhlcicpO1xuXG4gIGNpdHlOYW1lLnRleHRDb250ZW50ID0gY3VycmVudENpdHlOYW1lO1xuICBtYWluV2VhdGhlci50ZXh0Q29udGVudCA9IGN1cnJlbnRXZWF0aGVyLndlYXRoZXJbMF0ubWFpbjtcbiAgdGVtcC50ZXh0Q29udGVudCA9IGN1cnJlbnRXZWF0aGVyLnRlbXA7XG5cbiAgY3JlYXRlV2VhdGhlckNlbGwoaG91cmx5V2VhdGhlckJsb2NrLCAnTm93JywgY3VycmVudFdlYXRoZXIsIGN1cnJlbnRXZWF0aGVyLnRlbXApXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG4gICAgY29uc3QgaG91ciA9IG5ldyBEYXRlKGhvdXJseVdlYXRoZXJbaV0uZHQgKiAxMDAwKS5nZXRIb3VycygpO1xuICAgIGNvbnN0IHRlbXAgPSBob3VybHlXZWF0aGVyW2ldLnRlbXA7XG4gICAgY3JlYXRlV2VhdGhlckNlbGwoaG91cmx5V2VhdGhlckJsb2NrLCBob3VyLCBob3VybHlXZWF0aGVyW2ldLCBob3VybHlXZWF0aGVyW2ldLnRlbXApXG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlV2VhdGhlckNlbGwocGFyZW50RWxlbSwgaG91ciwgYXJyYXksIHRlbXApIHtcbiAgY29uc3QgZWxlbSA9IGNyZWF0ZUVsZW0ocGFyZW50RWxlbSwgJ2RpdicsICdjbGFzczp3ZWF0aGVySWNvbnMnKTtcbiAgY3JlYXRlRWxlbShlbGVtLCAnZGl2JywgYCR7aG91cn1gKTtcbiAgY29uc3Qgd2VhdGhlckltZyA9IGNyZWF0ZUVsZW0oZWxlbSwgJ2RpdicsICdjbGFzczp3ZWF0aGVySW1nJyk7XG4gIHdlYXRoZXJJbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2FycmF5LndlYXRoZXJbMF0uaWNvbn1AMngucG5nKWBcbiAgY3JlYXRlRWxlbShlbGVtLCAnZGl2JywgYCR7dGVtcH1gKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2V0VG9kYXlXZWF0aGVyIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5sZXNzJztcbmltcG9ydCBjcmVhdGVFbGVtIGZyb20gJ2NyZWF0ZS1odG1sLW5vZGUnXG5pbXBvcnQgc2V0VG9kYXlXZWF0aGVyIGZyb20gJy4vdHVuZVRvZGF5V2VhdGhlckJsb2NrJ1xuaW1wb3J0IHNldENvbW1vbkluZm8gZnJvbSAnLi9zZXRDb21tb25JbmZvJ1xuXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG5jb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbmNvbnN0IHRvZGF5V2VhdGhlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheVdlYXRoZXInKTtcbmNvbnN0IGRhaWx5V2VhdGhlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYWlseVdlYXRoZXInKTtcblxuXG5idG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuICBwcm9jZXNzaW5nUmVxdWVzdChpbnB1dC52YWx1ZSk7XG59KVxuXG53aW5kb3cub25sb2FkID0gKCkgPT4gcHJvY2Vzc2luZ1JlcXVlc3QoJ0xvbmRvbicpO1xuXG5mdW5jdGlvbiBwcm9jZXNzaW5nUmVxdWVzdChjdXJyZW50Q2l0eU5hbWUpIHtcbiAgcmV0dXJuQ2l0eUNvb3JkKGN1cnJlbnRDaXR5TmFtZSlcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke3Jlc3BvbnNlLmxhdH0mbG9uPSR7cmVzcG9uc2UubG9ufSZhcHBpZD03NTgzZmQ0YzgwZjFmOGU3NWZlMDNmMTRkMTIxZWNlMGAsIHttb2RlOiAnY29ycyd9KVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGRlbGV0ZUluZm9Gcm9tVGhlU2l0ZSgpXG4gICAgICBhZGRJbmZvSW50b1RoZVNpdGUocmVzcG9uc2UsIGN1cnJlbnRDaXR5TmFtZSk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcmV0dXJuQ2l0eUNvb3JkKGN1cnJlbnRDaXR5TmFtZSkge1xuICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2N1cnJlbnRDaXR5TmFtZX0mYXBwaWQ9NzU4M2ZkNGM4MGYxZjhlNzVmZTAzZjE0ZDEyMWVjZTBgLCB7bW9kZTogJ2NvcnMnfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuY29vcmQpXG59XG5cbmZ1bmN0aW9uIGFkZEluZm9JbnRvVGhlU2l0ZShvYmosIGN1cnJlbnRDaXR5TmFtZSkge1xuICBjb25zb2xlLmxvZyhvYmopO1xuICBzZXRUb2RheVdlYXRoZXIob2JqLmN1cnJlbnQsIG9iai5ob3VybHksIGN1cnJlbnRDaXR5TmFtZSk7XG4gIHNldENvbW1vbkluZm8ob2JqLmN1cnJlbnQpO1xuICBzZXREYWlseVdlYXRoZXIob2JqLmRhaWx5KVxufVxuXG5mdW5jdGlvbiBzZXREYWlseVdlYXRoZXIoYXJyYXkpIHtcbiAgY29uc3QgZGF5c0FycmF5ID0gW1xuICAgICdTdW5kYXknLCBcbiAgICAnTW9uZGF5JywgXG4gICAgJ1R1ZXNkYXknLCBcbiAgICAnV2VkbmVzZGF5JywgXG4gICAgJ1RodXJzZGF5JywgXG4gICAgJ0ZyaWRheScsIFxuICAgICdTYXR1cmRheSdcbiAgXVxuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0YWJsZSA9IGRhaWx5V2VhdGhlci5xdWVyeVNlbGVjdG9yKCd0YWJsZScpO1xuICAgIGNvbnN0IGRheUxpbmUgPSBjcmVhdGVFbGVtKHRhYmxlLCAndHInKTtcbiAgICBjcmVhdGVFbGVtKGRheUxpbmUsICd0ZCcsIGAke2RheXNBcnJheVtuZXcgRGF0ZShhcnJheVtpXS5kdCAqIDEwMDApLmdldERheSgpXX1gKTtcbiAgICBjb25zdCB3ZWF0aGVySWNvbiA9IGNyZWF0ZUVsZW0oZGF5TGluZSwgJ3RkJyk7XG4gICAgLy9jb25zb2xlLmxvZyhhcnJheVtpXS53ZWF0aGVyWzBdLmljb24pXG4gICAgd2VhdGhlckljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2FycmF5W2ldLndlYXRoZXJbMF0uaWNvbn1AMngucG5nKWBcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlRWxlbShkYXlMaW5lLCAndGQnLCAnSGVsbG8hJyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUluZm9Gcm9tVGhlU2l0ZSgpIHtcbiAgY29uc3Qgd2VhdGhlckljb25zID0gdG9kYXlXZWF0aGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy53ZWF0aGVySWNvbnMnKTtcblxuICB3ZWF0aGVySWNvbnMuZm9yRWFjaChlbGVtID0+IGVsZW0ucmVtb3ZlKCkpXG59Il0sInNvdXJjZVJvb3QiOiIifQ==