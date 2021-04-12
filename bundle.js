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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  border: solid red 1px;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\nhtml,\nbody {\n  background: #ffa500;\n}\nbody {\n  font-size: 16px;\n}\n.container {\n  border: solid green 1px;\n  padding-left: 5vmin;\n  padding-right: 5vmin;\n  display: flex;\n  flex-wrap: wrap;\n}\n.container #searchBox {\n  border: solid green 1px;\n  width: 50%;\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n}\n.container #searchBox input {\n  flex-grow: 1;\n  min-width: 0;\n  padding-left: 1vmin;\n}\n.container #searchBox button {\n  padding: 1vmin;\n}\n.container #siteHeadline {\n  width: 30vmin;\n}\n.container #units {\n  width: 10vmin;\n  display: flex;\n}\n.container #units button {\n  flex-grow: 1;\n}\n#hourlyWeather {\n  display: flex;\n  width: 70%;\n  overflow-x: scroll;\n}\n#hourlyWeather > * {\n  padding-left: 50px;\n  padding-right: 50px;\n}\n.weatherImg {\n  width: 60px;\n  height: 60px;\n  background-position: center center;\n  background-size: contain;\n}\n#commonInfo .container {\n  display: flex;\n  flex-direction: column;\n}\n#commonInfo .container > div {\n  display: flex;\n  justify-content: space-evenly;\n}\n#commonInfo .container > div > div {\n  width: 17vmin;\n}\n#dailyWeather .container table {\n  width: 100%;\n}\n#dailyWeather .container table img {\n  width: 10vmin;\n  height: 10vmin;\n}\n@media screen and (max-width: 540px) {\n  .container #units,\n  #hourlyWeather {\n    width: 100%;\n  }\n  #commonInfo .container {\n    flex-direction: row;\n    justify-content: space-evenly;\n  }\n  #commonInfo .container div {\n    flex-direction: column;\n  }\n}\n@media screen and (max-width: 300px) {\n  .container #siteHeadline,\n  .container #searchBox {\n    width: 100%;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.less"],"names":[],"mappings":"AAKA;EACE,qBAAA;EACA,sBAAA;EACA,UAAA;EACA,SAAA;AAJF;AAOA;;EACE,mBAAA;AAJF;AAOA;EACE,eAAA;AALF;AAQA;EACE,uBAAA;EACA,mBAAA;EACA,oBAAA;EACA,aAAA;EACA,eAAA;AANF;AASA;EACE,uBAAA;EACA,UAAA;EACA,aAAA;EACA,iBAAA;EACA,kBAAA;AAPF;AASE;EACE,YAAA;EACA,YAAA;EACA,mBAAA;AAPJ;AAUE;EACE,cAAA;AARJ;AAYA;EACE,aAAA;AAVF;AAaA;EACE,aAAA;EACA,aAAA;AAXF;AAaE;EACE,YAAA;AAXJ;AAeA;EACE,aAAA;EACA,UAAA;EACA,kBAAA;AAbF;AAeE;EACE,kBAAA;EACA,mBAAA;AAbJ;AAiBA;EArEE,WAAA;EACA,YAAA;EAsEA,kCAAA;EACA,wBAAA;AAdF;AAiBA;EACE,aAAA;EACA,sBAAA;AAfF;AAiBE;EACE,aAAA;EACA,6BAAA;AAfJ;AAiBI;EACE,aAAA;AAfN;AAsBE;EACE,WAAA;AApBJ;AAsBI;EA9FF,aAAA;EACA,cAAA;AA2EF;AAwBA;EACE;;IAEE,WAAA;EAtBF;EAwBA;IACE,mBAAA;IACA,6BAAA;EAtBF;EAyBE;IACE,sBAAA;EAvBJ;AACF;AA2BA;EACE;;IAEE,WAAA;EAzBF;AACF","sourcesContent":[".size(@width, @height) {\n  width: @width;\n  height: @height;\n}\n\n* {\n  border: solid red 1px;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml, body {\n  background: #ffa500;\n}\n\nbody {\n  font-size: 16px;\n}\n\n.container {\n  border: solid green 1px;\n  padding-left: 5vmin;\n  padding-right: 5vmin;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.container #searchBox {\n  border: solid green 1px;\n  width: 50%;\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n\n  & input {\n    flex-grow: 1;\n    min-width: 0;\n    padding-left: 1vmin;\n  }\n\n  & button {\n    padding: 1vmin;\n  }\n}\n\n.container #siteHeadline {\n  width: 30vmin;\n}\n\n.container #units {\n  width: 10vmin;\n  display: flex;\n\n  & button {\n    flex-grow: 1;\n  }\n}\n\n#hourlyWeather {\n  display: flex;\n  width: 70%;\n  overflow-x: scroll;\n\n  & > * {\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n}\n\n.weatherImg {\n  .size(60px, 60px);\n  background-position: center center;\n  background-size: contain;\n}\n\n#commonInfo .container {\n  display: flex;\n  flex-direction: column;\n\n  & > div {\n    display: flex;\n    justify-content: space-evenly;\n\n    & > div {\n      width: 17vmin;\n    }\n  }\n}\n\n#dailyWeather .container {\n  \n  & table {\n    width: 100%;\n\n    & img {\n      .size(10vmin, 10vmin)\n    }\n  }\n}\n\n@media screen and (max-width: 540px){\n  .container #units,\n  #hourlyWeather {\n    width: 100%;\n  }\n  #commonInfo .container {\n    flex-direction: row;\n    justify-content: space-evenly;\n\n\n    & div {\n      flex-direction: column;\n    }\n  }\n}\n\n@media screen and (max-width: 300px){\n  .container #siteHeadline,\n  .container #searchBox {\n    width: 100%;\n  }\n}"],"sourceRoot":""}]);
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

  obj.sunrise = `${new Date(obj.sunrise * 1000).getHours()}:${new Date(obj.sunrise * 1000).getMinutes()}`;
  obj.sunset = `${new Date(obj.sunset * 1000).getHours()}:${new Date(obj.sunset * 1000).getMinutes()}`;
  obj.visibility = `${obj.visibility / 1000}`;


  for (let i = 0; i < commonInfoElements.length; i++) {
    const units = commonInfoElements[i].dataset.units || '';
    const childElem = (0,create_html_node__WEBPACK_IMPORTED_MODULE_0__.default)(commonInfoElements[i], 'span', 'class: temp');
    childElem.textContent = `${obj[commonInfoElements[i].id]}`;

  }

  //console.log(obj)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setCommonInfo);

/***/ }),

/***/ "./src/setDailyWeatherBlock.js":
/*!*************************************!*\
  !*** ./src/setDailyWeatherBlock.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var create_html_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! create-html-node */ "./node_modules/create-html-node/createHtmlNode.js");


const dailyWeather = document.getElementById('dailyWeather');

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
    const tableLine = (0,create_html_node__WEBPACK_IMPORTED_MODULE_0__.default)(table, 'tr');
    (0,create_html_node__WEBPACK_IMPORTED_MODULE_0__.default)(tableLine, 'td', `${daysArray[new Date(array[i].dt * 1000).getDay()]}`);

    const weatherIconCeil = (0,create_html_node__WEBPACK_IMPORTED_MODULE_0__.default)(tableLine, 'td');
    const weatherIcon = (0,create_html_node__WEBPACK_IMPORTED_MODULE_0__.default)(weatherIconCeil, 'img');
    weatherIcon.src = `http://openweathermap.org/img/wn/${array[i].weather[0].icon}@2x.png`;

    (0,create_html_node__WEBPACK_IMPORTED_MODULE_0__.default)(tableLine, 'td', `${array[i].humidity} %`);

    const tempBlock = (0,create_html_node__WEBPACK_IMPORTED_MODULE_0__.default)(tableLine, 'td');
    (0,create_html_node__WEBPACK_IMPORTED_MODULE_0__.default)(tempBlock, 'div', `${array[i].temp.day}`, 'class: temp');
    (0,create_html_node__WEBPACK_IMPORTED_MODULE_0__.default)(tempBlock, 'div', `${array[i].temp.night}`, 'class: temp');
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setDailyWeather);

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
/* harmony import */ var _tuneTodayWeatherBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tuneTodayWeatherBlock */ "./src/tuneTodayWeatherBlock.js");
/* harmony import */ var _setCommonInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setCommonInfo */ "./src/setCommonInfo.js");
/* harmony import */ var _setDailyWeatherBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setDailyWeatherBlock */ "./src/setDailyWeatherBlock.js");






const todayWeather = document.getElementById('todayWeather');
const units = document.getElementById('units');

const input = document.querySelector('input');
const btn = document.querySelector('button');
const btnUnits = units.querySelector('button');

let modifiedObj;



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
      modifiedObj = response;
      modifiedObj.currentUnit = 'Kelvin';
/*       modifiedObj.changeUnit = () => {

      } */

      rec(modifiedObj);
      deleteInfoFromTheSite()
      addInfoIntoTheSite(modifiedObj, currentCityName);
    })
}

function rec(obj) {
  for (const key in obj) {
    if (key == 'temp' || key  == 'feels_like' || key == 'dew_point') {
      if (typeof obj[key] != 'object') {
        obj[key] = obj[key] + ' K';
      } else {
        for (const prop in obj[key]) {
          obj[key][prop] = obj[key][prop] + ' K';
        }
      }
      
    } else if (Array.isArray(obj[key])) {
      for (const iterator of obj[key]) {
        rec(iterator);
      }

    } else if(typeof obj[key] == 'object') {
      rec(obj[key]);
    }
  }
}

function returnCityCoord(currentCityName) {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${currentCityName}&appid=7583fd4c80f1f8e75fe03f14d121ece0`, {mode: 'cors'})
    .then(response => response.json())
    .then(response => response.coord)
}

function addInfoIntoTheSite(obj, currentCityName) {
  (0,_tuneTodayWeatherBlock__WEBPACK_IMPORTED_MODULE_1__.default)(obj.current, obj.hourly, currentCityName);
  (0,_setCommonInfo__WEBPACK_IMPORTED_MODULE_2__.default)(obj.current);
  (0,_setDailyWeatherBlock__WEBPACK_IMPORTED_MODULE_3__.default)(obj.daily)
}

function deleteInfoFromTheSite() {
  const weatherIcons = todayWeather.querySelectorAll('.weatherIcons');

  weatherIcons.forEach(elem => elem.remove())
}

btnUnits.addEventListener('mousedown', () => {
  const tempArr = document.querySelectorAll('.temp');
  
  console.log(tempArr)

  if (modifiedObj.currentUnit == 'Kelvin') {
    
  }
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2NyZWF0ZS1odG1sLW5vZGUvY3JlYXRlSHRtbE5vZGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9zdHlsZS5sZXNzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3N0eWxlLmxlc3M/ZWE2OCIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvc2V0Q29tbW9uSW5mby5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3NldERhaWx5V2VhdGhlckJsb2NrLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvdHVuZVRvZGF5V2VhdGhlckJsb2NrLmpzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7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QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLGFBQWEsT0FBTyxhQUFhLDJDQUEyQyxhQUFhO0FBQ25LLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtRUFBbUUsZ0JBQWdCLDJDQUEyQyxhQUFhO0FBQzNJO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsK0RBQWU7QUFDakIsRUFBRSx1REFBYTtBQUNmLEVBQUUsOERBQWU7QUFDakI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxDQUFDLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlRUxlbShwYXJlbnRFbGVtLCBjdXJyZW50RWxlbSwgLi4uYXJyYXlBdHRyKSB7XG4gIGxldCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChjdXJyZW50RWxlbSk7XHRcbiAgcGFyZW50RWxlbS5hcHBlbmRDaGlsZChlbGVtKTtcdFxuICBhcnJheUF0dHIgPSBhcnJheUF0dHIubWFwKGl0ZW0gPT4gaXRlbS5zcGxpdCgnOicpKVxuICBhcnJheUF0dHIuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpZiAoaXRlbS5sZW5ndGggPT0gMSkge1xuICAgICAgZWxlbS50ZXh0Q29udGVudCA9IGAke2l0ZW19YFxuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtLnNldEF0dHJpYnV0ZShgJHtpdGVtWzBdfWAsIGAke2l0ZW1bMV19YCk7XG4gICAgfVxuICB9KVxuICByZXR1cm4gZWxlbTtcbn1cblxuZXhwb3J0IHtjcmVhdGVFTGVtIGFzIGRlZmF1bHR9IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJvcmRlcjogc29saWQgcmVkIDFweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5odG1sLFxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogI2ZmYTUwMDtcXG59XFxuYm9keSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5jb250YWluZXIge1xcbiAgYm9yZGVyOiBzb2xpZCBncmVlbiAxcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDV2bWluO1xcbiAgcGFkZGluZy1yaWdodDogNXZtaW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4uY29udGFpbmVyICNzZWFyY2hCb3gge1xcbiAgYm9yZGVyOiBzb2xpZCBncmVlbiAxcHg7XFxuICB3aWR0aDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG4uY29udGFpbmVyICNzZWFyY2hCb3ggaW5wdXQge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgbWluLXdpZHRoOiAwO1xcbiAgcGFkZGluZy1sZWZ0OiAxdm1pbjtcXG59XFxuLmNvbnRhaW5lciAjc2VhcmNoQm94IGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxdm1pbjtcXG59XFxuLmNvbnRhaW5lciAjc2l0ZUhlYWRsaW5lIHtcXG4gIHdpZHRoOiAzMHZtaW47XFxufVxcbi5jb250YWluZXIgI3VuaXRzIHtcXG4gIHdpZHRoOiAxMHZtaW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uY29udGFpbmVyICN1bml0cyBidXR0b24ge1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG4jaG91cmx5V2VhdGhlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDcwJTtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG59XFxuI2hvdXJseVdlYXRoZXIgPiAqIHtcXG4gIHBhZGRpbmctbGVmdDogNTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxufVxcbi53ZWF0aGVySW1nIHtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG59XFxuI2NvbW1vbkluZm8gLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuI2NvbW1vbkluZm8gLmNvbnRhaW5lciA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcbiNjb21tb25JbmZvIC5jb250YWluZXIgPiBkaXYgPiBkaXYge1xcbiAgd2lkdGg6IDE3dm1pbjtcXG59XFxuI2RhaWx5V2VhdGhlciAuY29udGFpbmVyIHRhYmxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4jZGFpbHlXZWF0aGVyIC5jb250YWluZXIgdGFibGUgaW1nIHtcXG4gIHdpZHRoOiAxMHZtaW47XFxuICBoZWlnaHQ6IDEwdm1pbjtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTQwcHgpIHtcXG4gIC5jb250YWluZXIgI3VuaXRzLFxcbiAgI2hvdXJseVdlYXRoZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gICNjb21tb25JbmZvIC5jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIH1cXG4gICNjb21tb25JbmZvIC5jb250YWluZXIgZGl2IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcXG4gIC5jb250YWluZXIgI3NpdGVIZWFkbGluZSxcXG4gIC5jb250YWluZXIgI3NlYXJjaEJveCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUubGVzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFLQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUpGO0FBT0E7O0VBQ0UsbUJBQUE7QUFKRjtBQU9BO0VBQ0UsZUFBQTtBQUxGO0FBUUE7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQU5GO0FBU0E7RUFDRSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVBGO0FBU0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBUEo7QUFVRTtFQUNFLGNBQUE7QUFSSjtBQVlBO0VBQ0UsYUFBQTtBQVZGO0FBYUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtBQVhGO0FBYUU7RUFDRSxZQUFBO0FBWEo7QUFlQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFiRjtBQWVFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQWJKO0FBaUJBO0VBckVFLFdBQUE7RUFDQSxZQUFBO0VBc0VBLGtDQUFBO0VBQ0Esd0JBQUE7QUFkRjtBQWlCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQWZGO0FBaUJFO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBZko7QUFpQkk7RUFDRSxhQUFBO0FBZk47QUFzQkU7RUFDRSxXQUFBO0FBcEJKO0FBc0JJO0VBOUZGLGFBQUE7RUFDQSxjQUFBO0FBMkVGO0FBd0JBO0VBQ0U7O0lBRUUsV0FBQTtFQXRCRjtFQXdCQTtJQUNFLG1CQUFBO0lBQ0EsNkJBQUE7RUF0QkY7RUF5QkU7SUFDRSxzQkFBQTtFQXZCSjtBQUNGO0FBMkJBO0VBQ0U7O0lBRUUsV0FBQTtFQXpCRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zaXplKEB3aWR0aCwgQGhlaWdodCkge1xcbiAgd2lkdGg6IEB3aWR0aDtcXG4gIGhlaWdodDogQGhlaWdodDtcXG59XFxuXFxuKiB7XFxuICBib3JkZXI6IHNvbGlkIHJlZCAxcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZhNTAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBib3JkZXI6IHNvbGlkIGdyZWVuIDFweDtcXG4gIHBhZGRpbmctbGVmdDogNXZtaW47XFxuICBwYWRkaW5nLXJpZ2h0OiA1dm1pbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5jb250YWluZXIgI3NlYXJjaEJveCB7XFxuICBib3JkZXI6IHNvbGlkIGdyZWVuIDFweDtcXG4gIHdpZHRoOiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuXFxuICAmIGlucHV0IHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBtaW4td2lkdGg6IDA7XFxuICAgIHBhZGRpbmctbGVmdDogMXZtaW47XFxuICB9XFxuXFxuICAmIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDF2bWluO1xcbiAgfVxcbn1cXG5cXG4uY29udGFpbmVyICNzaXRlSGVhZGxpbmUge1xcbiAgd2lkdGg6IDMwdm1pbjtcXG59XFxuXFxuLmNvbnRhaW5lciAjdW5pdHMge1xcbiAgd2lkdGg6IDEwdm1pbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAmIGJ1dHRvbiB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gIH1cXG59XFxuXFxuI2hvdXJseVdlYXRoZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA3MCU7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuXFxuICAmID4gKiB7XFxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcXG4gIH1cXG59XFxuXFxuLndlYXRoZXJJbWcge1xcbiAgLnNpemUoNjBweCwgNjBweCk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbn1cXG5cXG4jY29tbW9uSW5mbyAuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgJiA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcbiAgICAmID4gZGl2IHtcXG4gICAgICB3aWR0aDogMTd2bWluO1xcbiAgICB9XFxuICB9XFxufVxcblxcbiNkYWlseVdlYXRoZXIgLmNvbnRhaW5lciB7XFxuICBcXG4gICYgdGFibGUge1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgJiBpbWcge1xcbiAgICAgIC5zaXplKDEwdm1pbiwgMTB2bWluKVxcbiAgICB9XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0MHB4KXtcXG4gIC5jb250YWluZXIgI3VuaXRzLFxcbiAgI2hvdXJseVdlYXRoZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gICNjb21tb25JbmZvIC5jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXG5cXG4gICAgJiBkaXYge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpe1xcbiAgLmNvbnRhaW5lciAjc2l0ZUhlYWRsaW5lLFxcbiAgLmNvbnRhaW5lciAjc2VhcmNoQm94IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5sZXNzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgY3JlYXRlRWxlbSBmcm9tICdjcmVhdGUtaHRtbC1ub2RlJ1xuXG5jb25zdCBjb21tb25JbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1vbkluZm8nKTtcblxuZnVuY3Rpb24gc2V0Q29tbW9uSW5mbyhvYmopIHtcbiAgY29uc3QgY29tbW9uSW5mb0VsZW1lbnRzID0gY29tbW9uSW5mby5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbW9uSW5mb0VsZW1lbnQnKTtcblxuICBvYmouc3VucmlzZSA9IGAke25ldyBEYXRlKG9iai5zdW5yaXNlICogMTAwMCkuZ2V0SG91cnMoKX06JHtuZXcgRGF0ZShvYmouc3VucmlzZSAqIDEwMDApLmdldE1pbnV0ZXMoKX1gO1xuICBvYmouc3Vuc2V0ID0gYCR7bmV3IERhdGUob2JqLnN1bnNldCAqIDEwMDApLmdldEhvdXJzKCl9OiR7bmV3IERhdGUob2JqLnN1bnNldCAqIDEwMDApLmdldE1pbnV0ZXMoKX1gO1xuICBvYmoudmlzaWJpbGl0eSA9IGAke29iai52aXNpYmlsaXR5IC8gMTAwMH1gO1xuXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21tb25JbmZvRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB1bml0cyA9IGNvbW1vbkluZm9FbGVtZW50c1tpXS5kYXRhc2V0LnVuaXRzIHx8ICcnO1xuICAgIGNvbnN0IGNoaWxkRWxlbSA9IGNyZWF0ZUVsZW0oY29tbW9uSW5mb0VsZW1lbnRzW2ldLCAnc3BhbicsICdjbGFzczogdGVtcCcpO1xuICAgIGNoaWxkRWxlbS50ZXh0Q29udGVudCA9IGAke29ialtjb21tb25JbmZvRWxlbWVudHNbaV0uaWRdfWA7XG5cbiAgfVxuXG4gIC8vY29uc29sZS5sb2cob2JqKVxufVxuXG5leHBvcnQgZGVmYXVsdCBzZXRDb21tb25JbmZvIiwiaW1wb3J0IGNyZWF0ZUVsZW0gZnJvbSAnY3JlYXRlLWh0bWwtbm9kZSdcblxuY29uc3QgZGFpbHlXZWF0aGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhaWx5V2VhdGhlcicpO1xuXG5mdW5jdGlvbiBzZXREYWlseVdlYXRoZXIoYXJyYXkpIHtcbiAgY29uc3QgZGF5c0FycmF5ID0gW1xuICAgICdTdW5kYXknLCBcbiAgICAnTW9uZGF5JywgXG4gICAgJ1R1ZXNkYXknLCBcbiAgICAnV2VkbmVzZGF5JywgXG4gICAgJ1RodXJzZGF5JywgXG4gICAgJ0ZyaWRheScsIFxuICAgICdTYXR1cmRheSdcbiAgXVxuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0YWJsZSA9IGRhaWx5V2VhdGhlci5xdWVyeVNlbGVjdG9yKCd0YWJsZScpO1xuICAgIGNvbnN0IHRhYmxlTGluZSA9IGNyZWF0ZUVsZW0odGFibGUsICd0cicpO1xuICAgIGNyZWF0ZUVsZW0odGFibGVMaW5lLCAndGQnLCBgJHtkYXlzQXJyYXlbbmV3IERhdGUoYXJyYXlbaV0uZHQgKiAxMDAwKS5nZXREYXkoKV19YCk7XG5cbiAgICBjb25zdCB3ZWF0aGVySWNvbkNlaWwgPSBjcmVhdGVFbGVtKHRhYmxlTGluZSwgJ3RkJyk7XG4gICAgY29uc3Qgd2VhdGhlckljb24gPSBjcmVhdGVFbGVtKHdlYXRoZXJJY29uQ2VpbCwgJ2ltZycpO1xuICAgIHdlYXRoZXJJY29uLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2FycmF5W2ldLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYDtcblxuICAgIGNyZWF0ZUVsZW0odGFibGVMaW5lLCAndGQnLCBgJHthcnJheVtpXS5odW1pZGl0eX0gJWApO1xuXG4gICAgY29uc3QgdGVtcEJsb2NrID0gY3JlYXRlRWxlbSh0YWJsZUxpbmUsICd0ZCcpO1xuICAgIGNyZWF0ZUVsZW0odGVtcEJsb2NrLCAnZGl2JywgYCR7YXJyYXlbaV0udGVtcC5kYXl9YCwgJ2NsYXNzOiB0ZW1wJyk7XG4gICAgY3JlYXRlRWxlbSh0ZW1wQmxvY2ssICdkaXYnLCBgJHthcnJheVtpXS50ZW1wLm5pZ2h0fWAsICdjbGFzczogdGVtcCcpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNldERhaWx5V2VhdGhlciIsImltcG9ydCBjcmVhdGVFbGVtIGZyb20gJ2NyZWF0ZS1odG1sLW5vZGUnXG5cbmNvbnN0IHRvZGF5V2VhdGhlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheVdlYXRoZXInKTtcblxuZnVuY3Rpb24gc2V0VG9kYXlXZWF0aGVyKGN1cnJlbnRXZWF0aGVyLCBob3VybHlXZWF0aGVyLCBjdXJyZW50Q2l0eU5hbWUpIHtcbiAgY29uc3QgY2l0eU5hbWUgPSB0b2RheVdlYXRoZXIucXVlcnlTZWxlY3RvcignaDInKTtcbiAgY29uc3QgdGVtcCA9IHRvZGF5V2VhdGhlci5xdWVyeVNlbGVjdG9yKCcudGVtcCcpO1xuICBjb25zdCBob3VybHlXZWF0aGVyQmxvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG91cmx5V2VhdGhlcicpO1xuXG4gIGNpdHlOYW1lLnRleHRDb250ZW50ID0gY3VycmVudENpdHlOYW1lO1xuICBtYWluV2VhdGhlci50ZXh0Q29udGVudCA9IGN1cnJlbnRXZWF0aGVyLndlYXRoZXJbMF0ubWFpbjtcbiAgdGVtcC50ZXh0Q29udGVudCA9IGN1cnJlbnRXZWF0aGVyLnRlbXA7XG5cbiAgY3JlYXRlV2VhdGhlckNlbGwoaG91cmx5V2VhdGhlckJsb2NrLCAnTm93JywgY3VycmVudFdlYXRoZXIsIGN1cnJlbnRXZWF0aGVyLnRlbXApXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG4gICAgY29uc3QgaG91ciA9IG5ldyBEYXRlKGhvdXJseVdlYXRoZXJbaV0uZHQgKiAxMDAwKS5nZXRIb3VycygpO1xuICAgIGNvbnN0IHRlbXAgPSBob3VybHlXZWF0aGVyW2ldLnRlbXA7XG4gICAgY3JlYXRlV2VhdGhlckNlbGwoaG91cmx5V2VhdGhlckJsb2NrLCBob3VyLCBob3VybHlXZWF0aGVyW2ldLCBob3VybHlXZWF0aGVyW2ldLnRlbXApXG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlV2VhdGhlckNlbGwocGFyZW50RWxlbSwgaG91ciwgYXJyYXksIHRlbXApIHtcbiAgY29uc3QgZWxlbSA9IGNyZWF0ZUVsZW0ocGFyZW50RWxlbSwgJ2RpdicsICdjbGFzczp3ZWF0aGVySWNvbnMnKTtcbiAgY3JlYXRlRWxlbShlbGVtLCAnZGl2JywgYCR7aG91cn1gKTtcbiAgY29uc3Qgd2VhdGhlckltZyA9IGNyZWF0ZUVsZW0oZWxlbSwgJ2RpdicsICdjbGFzczp3ZWF0aGVySW1nJyk7XG4gIHdlYXRoZXJJbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2FycmF5LndlYXRoZXJbMF0uaWNvbn1AMngucG5nKWBcbiAgY3JlYXRlRWxlbShlbGVtLCAnZGl2JywgYCR7dGVtcH1gKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2V0VG9kYXlXZWF0aGVyIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5sZXNzJztcbmltcG9ydCBzZXRUb2RheVdlYXRoZXIgZnJvbSAnLi90dW5lVG9kYXlXZWF0aGVyQmxvY2snXG5pbXBvcnQgc2V0Q29tbW9uSW5mbyBmcm9tICcuL3NldENvbW1vbkluZm8nXG5pbXBvcnQgc2V0RGFpbHlXZWF0aGVyIGZyb20gJy4vc2V0RGFpbHlXZWF0aGVyQmxvY2snXG5cblxuY29uc3QgdG9kYXlXZWF0aGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5V2VhdGhlcicpO1xuY29uc3QgdW5pdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdHMnKTtcblxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG5jb25zdCBidG5Vbml0cyA9IHVuaXRzLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuXG5sZXQgbW9kaWZpZWRPYmo7XG5cblxuXG5idG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuICBwcm9jZXNzaW5nUmVxdWVzdChpbnB1dC52YWx1ZSk7XG59KVxuXG53aW5kb3cub25sb2FkID0gKCkgPT4gcHJvY2Vzc2luZ1JlcXVlc3QoJ0xvbmRvbicpO1xuXG5mdW5jdGlvbiBwcm9jZXNzaW5nUmVxdWVzdChjdXJyZW50Q2l0eU5hbWUpIHtcbiAgcmV0dXJuQ2l0eUNvb3JkKGN1cnJlbnRDaXR5TmFtZSlcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke3Jlc3BvbnNlLmxhdH0mbG9uPSR7cmVzcG9uc2UubG9ufSZhcHBpZD03NTgzZmQ0YzgwZjFmOGU3NWZlMDNmMTRkMTIxZWNlMGAsIHttb2RlOiAnY29ycyd9KVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIG1vZGlmaWVkT2JqID0gcmVzcG9uc2U7XG4gICAgICBtb2RpZmllZE9iai5jdXJyZW50VW5pdCA9ICdLZWx2aW4nO1xuLyogICAgICAgbW9kaWZpZWRPYmouY2hhbmdlVW5pdCA9ICgpID0+IHtcblxuICAgICAgfSAqL1xuXG4gICAgICByZWMobW9kaWZpZWRPYmopO1xuICAgICAgZGVsZXRlSW5mb0Zyb21UaGVTaXRlKClcbiAgICAgIGFkZEluZm9JbnRvVGhlU2l0ZShtb2RpZmllZE9iaiwgY3VycmVudENpdHlOYW1lKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiByZWMob2JqKSB7XG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgIGlmIChrZXkgPT0gJ3RlbXAnIHx8IGtleSAgPT0gJ2ZlZWxzX2xpa2UnIHx8IGtleSA9PSAnZGV3X3BvaW50Jykge1xuICAgICAgaWYgKHR5cGVvZiBvYmpba2V5XSAhPSAnb2JqZWN0Jykge1xuICAgICAgICBvYmpba2V5XSA9IG9ialtrZXldICsgJyBLJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBvYmpba2V5XSkge1xuICAgICAgICAgIG9ialtrZXldW3Byb3BdID0gb2JqW2tleV1bcHJvcF0gKyAnIEsnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob2JqW2tleV0pKSB7XG4gICAgICBmb3IgKGNvbnN0IGl0ZXJhdG9yIG9mIG9ialtrZXldKSB7XG4gICAgICAgIHJlYyhpdGVyYXRvcik7XG4gICAgICB9XG5cbiAgICB9IGVsc2UgaWYodHlwZW9mIG9ialtrZXldID09ICdvYmplY3QnKSB7XG4gICAgICByZWMob2JqW2tleV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZXR1cm5DaXR5Q29vcmQoY3VycmVudENpdHlOYW1lKSB7XG4gIHJldHVybiBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y3VycmVudENpdHlOYW1lfSZhcHBpZD03NTgzZmQ0YzgwZjFmOGU3NWZlMDNmMTRkMTIxZWNlMGAsIHttb2RlOiAnY29ycyd9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5jb29yZClcbn1cblxuZnVuY3Rpb24gYWRkSW5mb0ludG9UaGVTaXRlKG9iaiwgY3VycmVudENpdHlOYW1lKSB7XG4gIHNldFRvZGF5V2VhdGhlcihvYmouY3VycmVudCwgb2JqLmhvdXJseSwgY3VycmVudENpdHlOYW1lKTtcbiAgc2V0Q29tbW9uSW5mbyhvYmouY3VycmVudCk7XG4gIHNldERhaWx5V2VhdGhlcihvYmouZGFpbHkpXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUluZm9Gcm9tVGhlU2l0ZSgpIHtcbiAgY29uc3Qgd2VhdGhlckljb25zID0gdG9kYXlXZWF0aGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy53ZWF0aGVySWNvbnMnKTtcblxuICB3ZWF0aGVySWNvbnMuZm9yRWFjaChlbGVtID0+IGVsZW0ucmVtb3ZlKCkpXG59XG5cbmJ0blVuaXRzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcbiAgY29uc3QgdGVtcEFyciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZW1wJyk7XG4gIFxuICBjb25zb2xlLmxvZyh0ZW1wQXJyKVxuXG4gIGlmIChtb2RpZmllZE9iai5jdXJyZW50VW5pdCA9PSAnS2VsdmluJykge1xuICAgIFxuICB9XG59KSJdLCJzb3VyY2VSb290IjoiIn0=