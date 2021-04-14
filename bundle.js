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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\nbody {\n  font-size: 16px;\n}\n.container {\n  padding: 3vmin 5vmin;\n  display: flex;\n  flex-wrap: wrap;\n}\nheader {\n  background: hsl(0, 0%, 12%);\n  color: white;\n}\nheader .container {\n  justify-content: space-between;\n}\nheader .container #searchBox {\n  width: 50%;\n  display: flex;\n}\nheader .container #searchBox input {\n  flex-grow: 1;\n  min-width: 0;\n  padding-left: 1vmin;\n}\nheader .container #searchBox button {\n  padding: 1vmin;\n}\nheader .container #siteHeadline {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 30vmin;\n  font-weight: 900;\n  font-size: 3vmin;\n}\nheader .container #units {\n  width: 10vmin;\n  display: flex;\n}\nheader .container #units button {\n  flex-grow: 1;\n}\n#todayWeather .container {\n  justify-content: space-between;\n}\n#todayWeather .container #currentWeather {\n  padding-left: 3vmin;\n  padding-right: 3vmin;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n#todayWeather .container #currentWeather > * {\n  margin-bottom: 2vmin;\n}\n#todayWeather .container #currentWeather #mainWeather,\n#todayWeather .container #currentWeather .temp {\n  font-size: 1.4em;\n}\n#todayWeather .container #hourlyWeather {\n  display: flex;\n  width: 70%;\n  overflow-x: scroll;\n  padding-top: 2vmin;\n  padding-bottom: 2vmin;\n}\n#todayWeather .container #hourlyWeather > * {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n#todayWeather .container #hourlyWeather .weatherIcons > * {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#todayWeather .container #hourlyWeather .weatherIcons .weatherImg {\n  width: 60px;\n  height: 60px;\n  background: hsl(0, 0%, 80%);\n  background-position: center center;\n  background-size: contain;\n  margin-top: 3vmin;\n  margin-bottom: 3vmin;\n}\n#commonInfo .container {\n  display: flex;\n  flex-direction: column;\n  background: hsl(0, 0%, 12%);\n  color: white;\n}\n#commonInfo .container > div {\n  display: flex;\n  justify-content: space-between;\n}\n#commonInfo .container > div > div {\n  width: 17vmin;\n  display: flex;\n  flex-direction: column;\n}\n#commonInfo .container > div > div > * {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n}\n#commonInfo .container > div > div h4 {\n  margin-bottom: 1vmin;\n}\n#commonInfo .container > div > div span {\n  margin-top: auto;\n}\n#commonInfo .container > div:first-of-type {\n  margin-bottom: 2vmin;\n}\n#dailyWeather .container table {\n  width: 100%;\n  text-align: center;\n}\n#dailyWeather .container table img {\n  width: 10vmin;\n  height: 10vmin;\n  background: hsl(0, 0%, 80%);\n}\n@media screen and (max-width: 580px) {\n  header .container #units {\n    width: 100%;\n    margin-top: 2vmin;\n  }\n  header .container #units button {\n    padding: 1vmin;\n  }\n  header .container #hourlyWeather {\n    width: 100%;\n  }\n  header .container #searchBox {\n    width: 60%;\n  }\n  header .container #siteHeadline {\n    font-size: 3.5vmin;\n  }\n  #todayWeather .container #currentWeather {\n    width: 100%;\n  }\n  #todayWeather .container #hourlyWeather {\n    width: 100%;\n  }\n  #commonInfo .container {\n    flex-direction: row;\n    justify-content: space-evenly;\n  }\n  #commonInfo .container div {\n    flex-direction: column;\n  }\n  #commonInfo .container div > div {\n    width: 25vmin;\n  }\n  #commonInfo .container div > div:not(:last-of-type) {\n    margin-bottom: 2vmin;\n  }\n  #commonInfo .container > div:first-of-type {\n    margin-bottom: 0;\n  }\n}\n@media screen and (max-width: 450px) {\n  header .container #siteHeadline {\n    width: 100%;\n  }\n  header .container #searchBox {\n    margin-top: 2vmin;\n    width: 100%;\n  }\n  header .container #siteHeadline {\n    font-size: 4vmin;\n  }\n  #commonInfo .container div > div {\n    width: 35vmin;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.less"],"names":[],"mappings":"AAKA;EAEE,sBAAA;EACA,UAAA;EACA,SAAA;AALF;AAQA;EACE,eAAA;AANF;AASA;EAEE,oBAAA;EACA,aAAA;EACA,eAAA;AARF;AAWA;EACE,2BAAA;EACA,YAAA;AATF;AAWE;EACE,8BAAA;AATJ;AAWI;EACE,UAAA;EACA,aAAA;AATN;AAWM;EACE,YAAA;EACA,YAAA;EACA,mBAAA;AATR;AAYM;EACE,cAAA;AAVR;AAcI;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;EACA,gBAAA;EACA,gBAAA;AAZN;AAeI;EACE,aAAA;EACA,aAAA;AAbN;AAeM;EACE,YAAA;AAbR;AAmBA;EACE,8BAAA;AAjBF;AAmBE;EACE,mBAAA;EACA,oBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;AAjBJ;AAmBI;EACE,oBAAA;AAjBN;AAoBI;;EAEE,gBAAA;AAlBN;AAsBE;EACE,aAAA;EACA,UAAA;EACA,kBAAA;EACA,kBAAA;EACA,qBAAA;AApBJ;AAsBI;EACE,kBAAA;EACA,mBAAA;AApBN;AAyBM;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;AAvBR;AA0BM;EAzGJ,WAAA;EACA,YAAA;EA0GM,2BAAA;EACA,kCAAA;EACA,wBAAA;EACA,iBAAA;EACA,oBAAA;AAvBR;AA6BA;EACE,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,YAAA;AA3BF;AA6BE;EACE,aAAA;EACA,8BAAA;AA3BJ;AA6BI;EACE,aAAA;EACA,aAAA;EACA,sBAAA;AA3BN;AA6BM;EACE,aAAA;EACA,uBAAA;EACA,kBAAA;AA3BR;AA8BM;EACE,oBAAA;AA5BR;AA+BM;EACE,gBAAA;AA7BR;AAmCE;EACE,oBAAA;AAjCJ;AAuCE;EACE,WAAA;EACA,kBAAA;AArCJ;AAuCI;EAhKF,aAAA;EACA,cAAA;EAiKI,2BAAA;AApCN;AAyCA;EAEI;IACE,WAAA;IACA,iBAAA;EAxCJ;EA0CI;IACE,cAAA;EAxCN;EA4CE;IACE,WAAA;EA1CJ;EA6CE;IACE,UAAA;EA3CJ;EA8CE;IACE,kBAAA;EA5CJ;EAkDE;IACE,WAAA;EAhDJ;EAmDE;IACE,WAAA;EAjDJ;EAqDA;IACE,mBAAA;IACA,6BAAA;EAnDF;EAqDE;IACE,sBAAA;EAnDJ;EAqDI;IACE,aAAA;EAnDN;EAsDI;IACE,oBAAA;EApDN;EAwDE;IACE,gBAAA;EAtDJ;AACF;AA4DA;EAEI;IACE,WAAA;EA3DJ;EA8DE;IACE,iBAAA;IACA,WAAA;EA5DJ;EA+DE;IACE,gBAAA;EA7DJ;EAqEI;IACE,aAAA;EAnEN;AACF","sourcesContent":[".size(@width, @height) {\n  width: @width;\n  height: @height;\n}\n\n* {\n  //border: solid red 1px;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-size: 16px;\n}\n\n.container {\n  //border: solid green 1px;\n  padding: 3vmin 5vmin;\n  display: flex;\n  flex-wrap: wrap;\n}\n\nheader {\n  background: hsl(0, 0%, 12%);\n  color: white;\n\n  & .container {\n    justify-content: space-between;\n    \n    & #searchBox {\n      width: 50%;\n      display: flex;\n    \n      & input {\n        flex-grow: 1;\n        min-width: 0;\n        padding-left: 1vmin;\n      }\n    \n      & button {\n        padding: 1vmin;\n      }\n    }\n\n    & #siteHeadline {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: 30vmin;\n      font-weight: 900;\n      font-size: 3vmin;\n    }\n\n    & #units {\n      width: 10vmin;\n      display: flex;\n    \n      & button {\n        flex-grow: 1;\n      }\n    }\n  }\n}\n\n#todayWeather .container {\n  justify-content: space-between;\n\n  & #currentWeather {\n    padding-left: 3vmin;\n    padding-right: 3vmin;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    & > * {\n      margin-bottom: 2vmin;\n    }\n\n    & #mainWeather,\n    & .temp {\n      font-size: 1.4em\n    }\n  }\n\n  & #hourlyWeather {\n    display: flex;\n    width: 70%;\n    overflow-x: scroll;\n    padding-top: 2vmin;\n    padding-bottom: 2vmin;\n  \n    & > * {\n      padding-left: 30px;\n      padding-right: 30px;\n    }\n\n    & .weatherIcons {\n\n      & > * {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      & .weatherImg {\n        .size(60px, 60px);\n        background: hsl(0, 0%, 80%);\n        background-position: center center;\n        background-size: contain;\n        margin-top: 3vmin;\n        margin-bottom: 3vmin;\n      }\n    }\n  }\n}\n\n#commonInfo .container {\n  display: flex;\n  flex-direction: column;\n  background: hsl(0, 0%, 12%);\n  color: white;\n\n  & > div {\n    display: flex;\n    justify-content: space-between;\n\n    & > div {\n      width: 17vmin;\n      display: flex;\n      flex-direction: column;\n\n      & > * {\n        display: flex;\n        justify-content: center;\n        text-align: center;\n      }\n\n      & h4 {\n        margin-bottom: 1vmin;\n      }\n\n      & span {\n        margin-top: auto;\n      }\n\n    }\n  }\n\n  & > div:first-of-type {\n    margin-bottom: 2vmin;\n  }\n}\n\n#dailyWeather .container {\n  \n  & table {\n    width: 100%;\n    text-align: center;\n\n    & img {\n      .size(10vmin, 10vmin);\n      background: hsl(0, 0%, 80%);\n    }\n  }\n}\n\n@media screen and (max-width: 580px){\n  header .container {\n    & #units {\n      width: 100%;\n      margin-top: 2vmin;\n\n      & button {\n        padding: 1vmin;\n      }\n    }\n\n    & #hourlyWeather {\n      width: 100%;\n    }\n\n    & #searchBox {\n      width: 60%;\n    }\n\n    & #siteHeadline {\n      font-size: 3.5vmin;\n    }\n  }\n\n  #todayWeather .container {\n\n    & #currentWeather {\n      width: 100%;\n    }\n\n    & #hourlyWeather {\n      width: 100%;\n    }\n  }\n\n  #commonInfo .container {\n    flex-direction: row;\n    justify-content: space-evenly;\n\n    & div {\n      flex-direction: column;\n\n      & > div {\n        width: 25vmin;\n      }\n\n      & > div:not(:last-of-type) {\n        margin-bottom: 2vmin;\n      }\n    }\n\n    & > div:first-of-type {\n      margin-bottom: 0;\n    }\n\n\n  }\n}\n\n@media screen and (max-width: 450px){\n  header .container {\n    & #siteHeadline {\n      width: 100%;\n    }\n\n    & #searchBox {\n      margin-top: 2vmin;\n      width: 100%;\n    }\n\n    & #siteHeadline {\n      font-size: 4vmin;\n    }\n  }\n\n  #commonInfo .container {\n    \n    & div {\n\n      & > div {\n        width: 35vmin;\n      }\n    }\n  }\n}"],"sourceRoot":""}]);
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

  for (let i = 0; i < commonInfoElements.length; i++) {
    let objElem = obj[commonInfoElements[i].id];

    const childElem = (0,create_html_node__WEBPACK_IMPORTED_MODULE_0__.default)(commonInfoElements[i], 'span', 'class:commonWeatherInfo');
    childElem.textContent = `${objElem}`;

    if (typeof objElem == 'string' && objElem.includes('K')) {
      childElem.classList.add('temp')
    }
  }
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
    const tableLine = (0,create_html_node__WEBPACK_IMPORTED_MODULE_0__.default)(table, 'tr', 'class:tableLine');
    (0,create_html_node__WEBPACK_IMPORTED_MODULE_0__.default)(tableLine, 'td', `${daysArray[new Date(array[i].dt * 1000).getDay()]}`);

    const weatherIconCeil = (0,create_html_node__WEBPACK_IMPORTED_MODULE_0__.default)(tableLine, 'td');
    const weatherIcon = (0,create_html_node__WEBPACK_IMPORTED_MODULE_0__.default)(weatherIconCeil, 'img');
    weatherIcon.src = `http://openweathermap.org/img/wn/${array[i].weather[0].icon}@2x.png`;

    (0,create_html_node__WEBPACK_IMPORTED_MODULE_0__.default)(tableLine, 'td', `${array[i].humidity}`);

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
const mainWeather = document.getElementById('mainWeather')

function setTodayWeather(currentWeather, hourlyWeather, currentCityName) {
  const cityName = todayWeather.querySelector('h1');
  const temp = todayWeather.querySelector('.temp');
  const hourlyWeatherBlock = document.getElementById('hourlyWeather');

  cityName.textContent = currentCityName;
  mainWeather.textContent = currentWeather.weather[0].main;
  temp.textContent = currentWeather.temp;

  createWeatherCell(hourlyWeatherBlock, 'Now', currentWeather, currentWeather.temp)

  for (let i = 1; i < 25; i++) {
    let hour = new Date(hourlyWeather[i].dt * 1000).getHours();

    if (hour < 10) {
      hour = `0${hour}`
    }
    hour += `:00`

    const temp = hourlyWeather[i].temp;
    createWeatherCell(hourlyWeatherBlock, hour, hourlyWeather[i], temp)
  }
}

function createWeatherCell(parentElem, hour, array, temp) {
  const elem = (0,create_html_node__WEBPACK_IMPORTED_MODULE_0__.default)(parentElem, 'div', 'class:weatherIcons');
  (0,create_html_node__WEBPACK_IMPORTED_MODULE_0__.default)(elem, 'div').textContent = `${hour}`;
  
  const weatherImg = (0,create_html_node__WEBPACK_IMPORTED_MODULE_0__.default)(elem, 'div', 'class:weatherImg');
  weatherImg.style.backgroundImage = `url(http://openweathermap.org/img/wn/${array.weather[0].icon}@2x.png)`
  ;(0,create_html_node__WEBPACK_IMPORTED_MODULE_0__.default)(elem, 'div', `${temp}`, 'class:temp');
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
const searchBtn = document.getElementById('searchBtn');

const input = document.querySelector('input');
const btnUnits = units.querySelector('button');

let mainObj = {
  currentUnit: 'Kelvin',
  tempArrKeys: ['temp', 'feels_like', 'dew_point'],
  percentArrKeys: ['clouds', 'humidity'],
  pressureArrKeys: ['pressure'],
  visibilityArrKeys: ['visibility'],
};

mainObj.cnangeUnit = function (arr) {
  if (this.currentUnit == 'Kelvin') {
    this.currentUnit = 'Celsius';
    this.calcValue(arr);
  } else {
    this.currentUnit = 'Kelvin';
    this.calcValue(arr);
  }
}

mainObj.calcValue = function (arr) {
  if (this.currentUnit !== 'Kelvin') {
    arr.forEach(elem => {
      let splitedString = elem.textContent.split(' ');
      elem.textContent =  Math.round(+splitedString[0] - 273,15) + ' °С';
    })
  } else {
    arr.forEach(elem => {
      let splitedString = elem.textContent.split(' ');
      elem.textContent =  Math.round(+splitedString[0] + 273,15) + ' K';
    })
  }
}

mainObj.changeFormatValues = function () {
  let that = this.modifiedObj.current;

  that.sunrise = `${new Date(that.sunrise * 1000).getHours()}:${new Date(that.sunrise * 1000).getMinutes()}`;
  that.sunset = `${new Date(that.sunset * 1000).getHours()}:${new Date(that.sunset * 1000).getMinutes()}`;
  that.visibility = `${that.visibility / 1000}`;
}

searchBtn.addEventListener('mousedown', () => processingRequest(input.value))

window.onload = () => processingRequest('London');

function processingRequest(currentCityName) {
  returnCityCoord(currentCityName)
    .then(response => {
      return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${response.lat}&lon=${response.lon}&appid=7583fd4c80f1f8e75fe03f14d121ece0`, {mode: 'cors'})
    })
    .then(response => response.json())
    .then(response => {
      mainObj.modifiedObj = response;

      mainObj.changeFormatValues()

      rec(mainObj.modifiedObj, mainObj.tempArrKeys, 'K');
      rec(mainObj.modifiedObj, mainObj.percentArrKeys, '%');
      rec(mainObj.modifiedObj, mainObj.pressureArrKeys, 'hPa');
      rec(mainObj.modifiedObj, mainObj.visibilityArrKeys, 'km');

      deleteInfoFromTheSite()
      addInfoIntoTheSite(mainObj.modifiedObj, currentCityName);

      if (mainObj.currentUnit !== 'Kelvin') {
        const tempArr = document.querySelectorAll('.temp');
        mainObj.calcValue(tempArr);
      }
    })
}

function rec(obj, conditionArray, unit) {
  for (const key in obj) {
    if (conditionArray.includes(key)) {
      if (typeof obj[key] != 'object') {
        obj[key] = Math.round(+obj[key]) + ` ${unit}`;
      } else {
        for (const prop in obj[key]) {
          obj[key][prop] = Math.round(+obj[key][prop]) + ` ${unit}`;
        }
      }
      
    } else if (Array.isArray(obj[key])) {
      for (const iterator of obj[key]) {
        rec(iterator, conditionArray, unit);
      }

    } else if(typeof obj[key] == 'object') {
      rec(obj[key], conditionArray, unit);
    }
  }
}

function returnCityCoord(currentCityName) {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCityName}&appid=7583fd4c80f1f8e75fe03f14d121ece0`, {mode: 'cors'})
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
  const commonWeatherInfo = document.querySelectorAll('.commonWeatherInfo');
  const tableLines = document.querySelectorAll('.tableLine');

  weatherIcons.forEach(elem => elem.remove());
  commonWeatherInfo.forEach(elem => elem.remove());
  tableLines.forEach(elem => elem.remove());
}

btnUnits.addEventListener('mousedown', () => {
  btnUnits.textContent = (mainObj.currentUnit == 'Kelvin') ? '°С' : 'K';
  const tempArr = document.querySelectorAll('.temp');
  mainObj.cnangeUnit(tempArr)
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2NyZWF0ZS1odG1sLW5vZGUvY3JlYXRlSHRtbE5vZGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9zdHlsZS5sZXNzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3N0eWxlLmxlc3M/ZWE2OCIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvc2V0Q29tbW9uSW5mby5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3NldERhaWx5V2VhdGhlckJsb2NrLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvdHVuZVRvZGF5V2VhdGhlckJsb2NrLmpzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7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OztBQUVBLG9CQUFvQix5Q0FBeUMsR0FBRywyQ0FBMkM7QUFDM0csbUJBQW1CLHdDQUF3QyxHQUFHLDBDQUEwQztBQUN4Ryx1QkFBdUIsdUJBQXVCO0FBQzlDOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSxhQUFhLE9BQU8sYUFBYSwyQ0FBMkMsYUFBYTtBQUNuSyxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsS0FBSztBQUNwRCxPQUFPO0FBQ1A7QUFDQSw2REFBNkQsS0FBSztBQUNsRTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0VBQW9FLGdCQUFnQiwyQ0FBMkMsYUFBYTtBQUM1STtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLCtEQUFlO0FBQ2pCLEVBQUUsdURBQWE7QUFDZixFQUFFLDhEQUFlO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUVMZW0ocGFyZW50RWxlbSwgY3VycmVudEVsZW0sIC4uLmFycmF5QXR0cikge1xuICBsZXQgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoY3VycmVudEVsZW0pO1x0XG4gIHBhcmVudEVsZW0uYXBwZW5kQ2hpbGQoZWxlbSk7XHRcbiAgYXJyYXlBdHRyID0gYXJyYXlBdHRyLm1hcChpdGVtID0+IGl0ZW0uc3BsaXQoJzonKSlcbiAgYXJyYXlBdHRyLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaWYgKGl0ZW0ubGVuZ3RoID09IDEpIHtcbiAgICAgIGVsZW0udGV4dENvbnRlbnQgPSBgJHtpdGVtfWBcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoYCR7aXRlbVswXX1gLCBgJHtpdGVtWzFdfWApO1xuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGVsZW07XG59XG5cbmV4cG9ydCB7Y3JlYXRlRUxlbSBhcyBkZWZhdWx0fSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuYm9keSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5jb250YWluZXIge1xcbiAgcGFkZGluZzogM3ZtaW4gNXZtaW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogaHNsKDAsIDAlLCAxMiUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5oZWFkZXIgLmNvbnRhaW5lciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbmhlYWRlciAuY29udGFpbmVyICNzZWFyY2hCb3gge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbmhlYWRlciAuY29udGFpbmVyICNzZWFyY2hCb3ggaW5wdXQge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgbWluLXdpZHRoOiAwO1xcbiAgcGFkZGluZy1sZWZ0OiAxdm1pbjtcXG59XFxuaGVhZGVyIC5jb250YWluZXIgI3NlYXJjaEJveCBidXR0b24ge1xcbiAgcGFkZGluZzogMXZtaW47XFxufVxcbmhlYWRlciAuY29udGFpbmVyICNzaXRlSGVhZGxpbmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAzMHZtaW47XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zaXplOiAzdm1pbjtcXG59XFxuaGVhZGVyIC5jb250YWluZXIgI3VuaXRzIHtcXG4gIHdpZHRoOiAxMHZtaW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5oZWFkZXIgLmNvbnRhaW5lciAjdW5pdHMgYnV0dG9uIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuI3RvZGF5V2VhdGhlciAuY29udGFpbmVyIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuI3RvZGF5V2VhdGhlciAuY29udGFpbmVyICNjdXJyZW50V2VhdGhlciB7XFxuICBwYWRkaW5nLWxlZnQ6IDN2bWluO1xcbiAgcGFkZGluZy1yaWdodDogM3ZtaW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuI3RvZGF5V2VhdGhlciAuY29udGFpbmVyICNjdXJyZW50V2VhdGhlciA+ICoge1xcbiAgbWFyZ2luLWJvdHRvbTogMnZtaW47XFxufVxcbiN0b2RheVdlYXRoZXIgLmNvbnRhaW5lciAjY3VycmVudFdlYXRoZXIgI21haW5XZWF0aGVyLFxcbiN0b2RheVdlYXRoZXIgLmNvbnRhaW5lciAjY3VycmVudFdlYXRoZXIgLnRlbXAge1xcbiAgZm9udC1zaXplOiAxLjRlbTtcXG59XFxuI3RvZGF5V2VhdGhlciAuY29udGFpbmVyICNob3VybHlXZWF0aGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNzAlO1xcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgcGFkZGluZy10b3A6IDJ2bWluO1xcbiAgcGFkZGluZy1ib3R0b206IDJ2bWluO1xcbn1cXG4jdG9kYXlXZWF0aGVyIC5jb250YWluZXIgI2hvdXJseVdlYXRoZXIgPiAqIHtcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxufVxcbiN0b2RheVdlYXRoZXIgLmNvbnRhaW5lciAjaG91cmx5V2VhdGhlciAud2VhdGhlckljb25zID4gKiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jdG9kYXlXZWF0aGVyIC5jb250YWluZXIgI2hvdXJseVdlYXRoZXIgLndlYXRoZXJJY29ucyAud2VhdGhlckltZyB7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIGJhY2tncm91bmQ6IGhzbCgwLCAwJSwgODAlKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBtYXJnaW4tdG9wOiAzdm1pbjtcXG4gIG1hcmdpbi1ib3R0b206IDN2bWluO1xcbn1cXG4jY29tbW9uSW5mbyAuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZDogaHNsKDAsIDAlLCAxMiUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4jY29tbW9uSW5mbyAuY29udGFpbmVyID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbiNjb21tb25JbmZvIC5jb250YWluZXIgPiBkaXYgPiBkaXYge1xcbiAgd2lkdGg6IDE3dm1pbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4jY29tbW9uSW5mbyAuY29udGFpbmVyID4gZGl2ID4gZGl2ID4gKiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNjb21tb25JbmZvIC5jb250YWluZXIgPiBkaXYgPiBkaXYgaDQge1xcbiAgbWFyZ2luLWJvdHRvbTogMXZtaW47XFxufVxcbiNjb21tb25JbmZvIC5jb250YWluZXIgPiBkaXYgPiBkaXYgc3BhbiB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG4jY29tbW9uSW5mbyAuY29udGFpbmVyID4gZGl2OmZpcnN0LW9mLXR5cGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMnZtaW47XFxufVxcbiNkYWlseVdlYXRoZXIgLmNvbnRhaW5lciB0YWJsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2RhaWx5V2VhdGhlciAuY29udGFpbmVyIHRhYmxlIGltZyB7XFxuICB3aWR0aDogMTB2bWluO1xcbiAgaGVpZ2h0OiAxMHZtaW47XFxuICBiYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDgwJSk7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XFxuICBoZWFkZXIgLmNvbnRhaW5lciAjdW5pdHMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLXRvcDogMnZtaW47XFxuICB9XFxuICBoZWFkZXIgLmNvbnRhaW5lciAjdW5pdHMgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMXZtaW47XFxuICB9XFxuICBoZWFkZXIgLmNvbnRhaW5lciAjaG91cmx5V2VhdGhlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgaGVhZGVyIC5jb250YWluZXIgI3NlYXJjaEJveCB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICB9XFxuICBoZWFkZXIgLmNvbnRhaW5lciAjc2l0ZUhlYWRsaW5lIHtcXG4gICAgZm9udC1zaXplOiAzLjV2bWluO1xcbiAgfVxcbiAgI3RvZGF5V2VhdGhlciAuY29udGFpbmVyICNjdXJyZW50V2VhdGhlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgI3RvZGF5V2VhdGhlciAuY29udGFpbmVyICNob3VybHlXZWF0aGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAjY29tbW9uSW5mbyAuY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB9XFxuICAjY29tbW9uSW5mbyAuY29udGFpbmVyIGRpdiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAjY29tbW9uSW5mbyAuY29udGFpbmVyIGRpdiA+IGRpdiB7XFxuICAgIHdpZHRoOiAyNXZtaW47XFxuICB9XFxuICAjY29tbW9uSW5mbyAuY29udGFpbmVyIGRpdiA+IGRpdjpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgICBtYXJnaW4tYm90dG9tOiAydm1pbjtcXG4gIH1cXG4gICNjb21tb25JbmZvIC5jb250YWluZXIgPiBkaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XFxuICBoZWFkZXIgLmNvbnRhaW5lciAjc2l0ZUhlYWRsaW5lIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICBoZWFkZXIgLmNvbnRhaW5lciAjc2VhcmNoQm94IHtcXG4gICAgbWFyZ2luLXRvcDogMnZtaW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgaGVhZGVyIC5jb250YWluZXIgI3NpdGVIZWFkbGluZSB7XFxuICAgIGZvbnQtc2l6ZTogNHZtaW47XFxuICB9XFxuICAjY29tbW9uSW5mbyAuY29udGFpbmVyIGRpdiA+IGRpdiB7XFxuICAgIHdpZHRoOiAzNXZtaW47XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5sZXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUtBO0VBRUUsc0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUxGO0FBUUE7RUFDRSxlQUFBO0FBTkY7QUFTQTtFQUVFLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFSRjtBQVdBO0VBQ0UsMkJBQUE7RUFDQSxZQUFBO0FBVEY7QUFXRTtFQUNFLDhCQUFBO0FBVEo7QUFXSTtFQUNFLFVBQUE7RUFDQSxhQUFBO0FBVE47QUFXTTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFUUjtBQVlNO0VBQ0UsY0FBQTtBQVZSO0FBY0k7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBWk47QUFlSTtFQUNFLGFBQUE7RUFDQSxhQUFBO0FBYk47QUFlTTtFQUNFLFlBQUE7QUFiUjtBQW1CQTtFQUNFLDhCQUFBO0FBakJGO0FBbUJFO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFqQko7QUFtQkk7RUFDRSxvQkFBQTtBQWpCTjtBQW9CSTs7RUFFRSxnQkFBQTtBQWxCTjtBQXNCRTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBcEJKO0FBc0JJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQXBCTjtBQXlCTTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBdkJSO0FBMEJNO0VBekdKLFdBQUE7RUFDQSxZQUFBO0VBMEdNLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUF2QlI7QUE2QkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUEzQkY7QUE2QkU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUEzQko7QUE2Qkk7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBM0JOO0FBNkJNO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUEzQlI7QUE4Qk07RUFDRSxvQkFBQTtBQTVCUjtBQStCTTtFQUNFLGdCQUFBO0FBN0JSO0FBbUNFO0VBQ0Usb0JBQUE7QUFqQ0o7QUF1Q0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFyQ0o7QUF1Q0k7RUFoS0YsYUFBQTtFQUNBLGNBQUE7RUFpS0ksMkJBQUE7QUFwQ047QUF5Q0E7RUFFSTtJQUNFLFdBQUE7SUFDQSxpQkFBQTtFQXhDSjtFQTBDSTtJQUNFLGNBQUE7RUF4Q047RUE0Q0U7SUFDRSxXQUFBO0VBMUNKO0VBNkNFO0lBQ0UsVUFBQTtFQTNDSjtFQThDRTtJQUNFLGtCQUFBO0VBNUNKO0VBa0RFO0lBQ0UsV0FBQTtFQWhESjtFQW1ERTtJQUNFLFdBQUE7RUFqREo7RUFxREE7SUFDRSxtQkFBQTtJQUNBLDZCQUFBO0VBbkRGO0VBcURFO0lBQ0Usc0JBQUE7RUFuREo7RUFxREk7SUFDRSxhQUFBO0VBbkROO0VBc0RJO0lBQ0Usb0JBQUE7RUFwRE47RUF3REU7SUFDRSxnQkFBQTtFQXRESjtBQUNGO0FBNERBO0VBRUk7SUFDRSxXQUFBO0VBM0RKO0VBOERFO0lBQ0UsaUJBQUE7SUFDQSxXQUFBO0VBNURKO0VBK0RFO0lBQ0UsZ0JBQUE7RUE3REo7RUFxRUk7SUFDRSxhQUFBO0VBbkVOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNpemUoQHdpZHRoLCBAaGVpZ2h0KSB7XFxuICB3aWR0aDogQHdpZHRoO1xcbiAgaGVpZ2h0OiBAaGVpZ2h0O1xcbn1cXG5cXG4qIHtcXG4gIC8vYm9yZGVyOiBzb2xpZCByZWQgMXB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIC8vYm9yZGVyOiBzb2xpZCBncmVlbiAxcHg7XFxuICBwYWRkaW5nOiAzdm1pbiA1dm1pbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDEyJSk7XFxuICBjb2xvcjogd2hpdGU7XFxuXFxuICAmIC5jb250YWluZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIFxcbiAgICAmICNzZWFyY2hCb3gge1xcbiAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgXFxuICAgICAgJiBpbnB1dCB7XFxuICAgICAgICBmbGV4LWdyb3c6IDE7XFxuICAgICAgICBtaW4td2lkdGg6IDA7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDF2bWluO1xcbiAgICAgIH1cXG4gICAgXFxuICAgICAgJiBidXR0b24ge1xcbiAgICAgICAgcGFkZGluZzogMXZtaW47XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgICYgI3NpdGVIZWFkbGluZSB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIHdpZHRoOiAzMHZtaW47XFxuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgICBmb250LXNpemU6IDN2bWluO1xcbiAgICB9XFxuXFxuICAgICYgI3VuaXRzIHtcXG4gICAgICB3aWR0aDogMTB2bWluO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIFxcbiAgICAgICYgYnV0dG9uIHtcXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuI3RvZGF5V2VhdGhlciAuY29udGFpbmVyIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICYgI2N1cnJlbnRXZWF0aGVyIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAzdm1pbjtcXG4gICAgcGFkZGluZy1yaWdodDogM3ZtaW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICAmID4gKiB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMnZtaW47XFxuICAgIH1cXG5cXG4gICAgJiAjbWFpbldlYXRoZXIsXFxuICAgICYgLnRlbXAge1xcbiAgICAgIGZvbnQtc2l6ZTogMS40ZW1cXG4gICAgfVxcbiAgfVxcblxcbiAgJiAjaG91cmx5V2VhdGhlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gICAgcGFkZGluZy10b3A6IDJ2bWluO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnZtaW47XFxuICBcXG4gICAgJiA+ICoge1xcbiAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbiAgICB9XFxuXFxuICAgICYgLndlYXRoZXJJY29ucyB7XFxuXFxuICAgICAgJiA+ICoge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICB9XFxuXFxuICAgICAgJiAud2VhdGhlckltZyB7XFxuICAgICAgICAuc2l6ZSg2MHB4LCA2MHB4KTtcXG4gICAgICAgIGJhY2tncm91bmQ6IGhzbCgwLCAwJSwgODAlKTtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgICAgICBtYXJnaW4tdG9wOiAzdm1pbjtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDN2bWluO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4jY29tbW9uSW5mbyAuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZDogaHNsKDAsIDAlLCAxMiUpO1xcbiAgY29sb3I6IHdoaXRlO1xcblxcbiAgJiA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgJiA+IGRpdiB7XFxuICAgICAgd2lkdGg6IDE3dm1pbjtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgICAgJiA+ICoge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIH1cXG5cXG4gICAgICAmIGg0IHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDF2bWluO1xcbiAgICAgIH1cXG5cXG4gICAgICAmIHNwYW4ge1xcbiAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgICB9XFxuXFxuICAgIH1cXG4gIH1cXG5cXG4gICYgPiBkaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDJ2bWluO1xcbiAgfVxcbn1cXG5cXG4jZGFpbHlXZWF0aGVyIC5jb250YWluZXIge1xcbiAgXFxuICAmIHRhYmxlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgJiBpbWcge1xcbiAgICAgIC5zaXplKDEwdm1pbiwgMTB2bWluKTtcXG4gICAgICBiYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDgwJSk7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpe1xcbiAgaGVhZGVyIC5jb250YWluZXIge1xcbiAgICAmICN1bml0cyB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgbWFyZ2luLXRvcDogMnZtaW47XFxuXFxuICAgICAgJiBidXR0b24ge1xcbiAgICAgICAgcGFkZGluZzogMXZtaW47XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgICYgI2hvdXJseVdlYXRoZXIge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgICYgI3NlYXJjaEJveCB7XFxuICAgICAgd2lkdGg6IDYwJTtcXG4gICAgfVxcblxcbiAgICAmICNzaXRlSGVhZGxpbmUge1xcbiAgICAgIGZvbnQtc2l6ZTogMy41dm1pbjtcXG4gICAgfVxcbiAgfVxcblxcbiAgI3RvZGF5V2VhdGhlciAuY29udGFpbmVyIHtcXG5cXG4gICAgJiAjY3VycmVudFdlYXRoZXIge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgICYgI2hvdXJseVdlYXRoZXIge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICB9XFxuXFxuICAjY29tbW9uSW5mbyAuY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFxuICAgICYgZGl2IHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICAgICYgPiBkaXYge1xcbiAgICAgICAgd2lkdGg6IDI1dm1pbjtcXG4gICAgICB9XFxuXFxuICAgICAgJiA+IGRpdjpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnZtaW47XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgICYgPiBkaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgfVxcblxcblxcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCl7XFxuICBoZWFkZXIgLmNvbnRhaW5lciB7XFxuICAgICYgI3NpdGVIZWFkbGluZSB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgJiAjc2VhcmNoQm94IHtcXG4gICAgICBtYXJnaW4tdG9wOiAydm1pbjtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAmICNzaXRlSGVhZGxpbmUge1xcbiAgICAgIGZvbnQtc2l6ZTogNHZtaW47XFxuICAgIH1cXG4gIH1cXG5cXG4gICNjb21tb25JbmZvIC5jb250YWluZXIge1xcbiAgICBcXG4gICAgJiBkaXYge1xcblxcbiAgICAgICYgPiBkaXYge1xcbiAgICAgICAgd2lkdGg6IDM1dm1pbjtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmxlc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCBjcmVhdGVFbGVtIGZyb20gJ2NyZWF0ZS1odG1sLW5vZGUnXG5cbmNvbnN0IGNvbW1vbkluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbW9uSW5mbycpO1xuXG5mdW5jdGlvbiBzZXRDb21tb25JbmZvKG9iaikge1xuICBjb25zdCBjb21tb25JbmZvRWxlbWVudHMgPSBjb21tb25JbmZvLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tb25JbmZvRWxlbWVudCcpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29tbW9uSW5mb0VsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IG9iakVsZW0gPSBvYmpbY29tbW9uSW5mb0VsZW1lbnRzW2ldLmlkXTtcblxuICAgIGNvbnN0IGNoaWxkRWxlbSA9IGNyZWF0ZUVsZW0oY29tbW9uSW5mb0VsZW1lbnRzW2ldLCAnc3BhbicsICdjbGFzczpjb21tb25XZWF0aGVySW5mbycpO1xuICAgIGNoaWxkRWxlbS50ZXh0Q29udGVudCA9IGAke29iakVsZW19YDtcblxuICAgIGlmICh0eXBlb2Ygb2JqRWxlbSA9PSAnc3RyaW5nJyAmJiBvYmpFbGVtLmluY2x1ZGVzKCdLJykpIHtcbiAgICAgIGNoaWxkRWxlbS5jbGFzc0xpc3QuYWRkKCd0ZW1wJylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2V0Q29tbW9uSW5mbyIsImltcG9ydCBjcmVhdGVFbGVtIGZyb20gJ2NyZWF0ZS1odG1sLW5vZGUnXG5cbmNvbnN0IGRhaWx5V2VhdGhlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYWlseVdlYXRoZXInKTtcblxuZnVuY3Rpb24gc2V0RGFpbHlXZWF0aGVyKGFycmF5KSB7XG4gIGNvbnN0IGRheXNBcnJheSA9IFtcbiAgICAnU3VuZGF5JywgXG4gICAgJ01vbmRheScsIFxuICAgICdUdWVzZGF5JywgXG4gICAgJ1dlZG5lc2RheScsIFxuICAgICdUaHVyc2RheScsIFxuICAgICdGcmlkYXknLCBcbiAgICAnU2F0dXJkYXknXG4gIF1cblxuICBmb3IgKGxldCBpID0gMTsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdGFibGUgPSBkYWlseVdlYXRoZXIucXVlcnlTZWxlY3RvcigndGFibGUnKTtcbiAgICBjb25zdCB0YWJsZUxpbmUgPSBjcmVhdGVFbGVtKHRhYmxlLCAndHInLCAnY2xhc3M6dGFibGVMaW5lJyk7XG4gICAgY3JlYXRlRWxlbSh0YWJsZUxpbmUsICd0ZCcsIGAke2RheXNBcnJheVtuZXcgRGF0ZShhcnJheVtpXS5kdCAqIDEwMDApLmdldERheSgpXX1gKTtcblxuICAgIGNvbnN0IHdlYXRoZXJJY29uQ2VpbCA9IGNyZWF0ZUVsZW0odGFibGVMaW5lLCAndGQnKTtcbiAgICBjb25zdCB3ZWF0aGVySWNvbiA9IGNyZWF0ZUVsZW0od2VhdGhlckljb25DZWlsLCAnaW1nJyk7XG4gICAgd2VhdGhlckljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7YXJyYXlbaV0ud2VhdGhlclswXS5pY29ufUAyeC5wbmdgO1xuXG4gICAgY3JlYXRlRWxlbSh0YWJsZUxpbmUsICd0ZCcsIGAke2FycmF5W2ldLmh1bWlkaXR5fWApO1xuXG4gICAgY29uc3QgdGVtcEJsb2NrID0gY3JlYXRlRWxlbSh0YWJsZUxpbmUsICd0ZCcpO1xuICAgIGNyZWF0ZUVsZW0odGVtcEJsb2NrLCAnZGl2JywgYCR7YXJyYXlbaV0udGVtcC5kYXl9YCwgJ2NsYXNzOiB0ZW1wJyk7XG4gICAgY3JlYXRlRWxlbSh0ZW1wQmxvY2ssICdkaXYnLCBgJHthcnJheVtpXS50ZW1wLm5pZ2h0fWAsICdjbGFzczogdGVtcCcpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNldERhaWx5V2VhdGhlciIsImltcG9ydCBjcmVhdGVFbGVtIGZyb20gJ2NyZWF0ZS1odG1sLW5vZGUnXG5cbmNvbnN0IHRvZGF5V2VhdGhlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheVdlYXRoZXInKTtcbmNvbnN0IG1haW5XZWF0aGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5XZWF0aGVyJylcblxuZnVuY3Rpb24gc2V0VG9kYXlXZWF0aGVyKGN1cnJlbnRXZWF0aGVyLCBob3VybHlXZWF0aGVyLCBjdXJyZW50Q2l0eU5hbWUpIHtcbiAgY29uc3QgY2l0eU5hbWUgPSB0b2RheVdlYXRoZXIucXVlcnlTZWxlY3RvcignaDEnKTtcbiAgY29uc3QgdGVtcCA9IHRvZGF5V2VhdGhlci5xdWVyeVNlbGVjdG9yKCcudGVtcCcpO1xuICBjb25zdCBob3VybHlXZWF0aGVyQmxvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG91cmx5V2VhdGhlcicpO1xuXG4gIGNpdHlOYW1lLnRleHRDb250ZW50ID0gY3VycmVudENpdHlOYW1lO1xuICBtYWluV2VhdGhlci50ZXh0Q29udGVudCA9IGN1cnJlbnRXZWF0aGVyLndlYXRoZXJbMF0ubWFpbjtcbiAgdGVtcC50ZXh0Q29udGVudCA9IGN1cnJlbnRXZWF0aGVyLnRlbXA7XG5cbiAgY3JlYXRlV2VhdGhlckNlbGwoaG91cmx5V2VhdGhlckJsb2NrLCAnTm93JywgY3VycmVudFdlYXRoZXIsIGN1cnJlbnRXZWF0aGVyLnRlbXApXG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCAyNTsgaSsrKSB7XG4gICAgbGV0IGhvdXIgPSBuZXcgRGF0ZShob3VybHlXZWF0aGVyW2ldLmR0ICogMTAwMCkuZ2V0SG91cnMoKTtcblxuICAgIGlmIChob3VyIDwgMTApIHtcbiAgICAgIGhvdXIgPSBgMCR7aG91cn1gXG4gICAgfVxuICAgIGhvdXIgKz0gYDowMGBcblxuICAgIGNvbnN0IHRlbXAgPSBob3VybHlXZWF0aGVyW2ldLnRlbXA7XG4gICAgY3JlYXRlV2VhdGhlckNlbGwoaG91cmx5V2VhdGhlckJsb2NrLCBob3VyLCBob3VybHlXZWF0aGVyW2ldLCB0ZW1wKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVdlYXRoZXJDZWxsKHBhcmVudEVsZW0sIGhvdXIsIGFycmF5LCB0ZW1wKSB7XG4gIGNvbnN0IGVsZW0gPSBjcmVhdGVFbGVtKHBhcmVudEVsZW0sICdkaXYnLCAnY2xhc3M6d2VhdGhlckljb25zJyk7XG4gIGNyZWF0ZUVsZW0oZWxlbSwgJ2RpdicpLnRleHRDb250ZW50ID0gYCR7aG91cn1gO1xuICBcbiAgY29uc3Qgd2VhdGhlckltZyA9IGNyZWF0ZUVsZW0oZWxlbSwgJ2RpdicsICdjbGFzczp3ZWF0aGVySW1nJyk7XG4gIHdlYXRoZXJJbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2FycmF5LndlYXRoZXJbMF0uaWNvbn1AMngucG5nKWBcbiAgY3JlYXRlRWxlbShlbGVtLCAnZGl2JywgYCR7dGVtcH1gLCAnY2xhc3M6dGVtcCcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzZXRUb2RheVdlYXRoZXIiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmxlc3MnO1xuaW1wb3J0IHNldFRvZGF5V2VhdGhlciBmcm9tICcuL3R1bmVUb2RheVdlYXRoZXJCbG9jaydcbmltcG9ydCBzZXRDb21tb25JbmZvIGZyb20gJy4vc2V0Q29tbW9uSW5mbydcbmltcG9ydCBzZXREYWlseVdlYXRoZXIgZnJvbSAnLi9zZXREYWlseVdlYXRoZXJCbG9jaydcblxuY29uc3QgdG9kYXlXZWF0aGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5V2VhdGhlcicpO1xuY29uc3QgdW5pdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdHMnKTtcbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hCdG4nKTtcblxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuY29uc3QgYnRuVW5pdHMgPSB1bml0cy5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcblxubGV0IG1haW5PYmogPSB7XG4gIGN1cnJlbnRVbml0OiAnS2VsdmluJyxcbiAgdGVtcEFycktleXM6IFsndGVtcCcsICdmZWVsc19saWtlJywgJ2Rld19wb2ludCddLFxuICBwZXJjZW50QXJyS2V5czogWydjbG91ZHMnLCAnaHVtaWRpdHknXSxcbiAgcHJlc3N1cmVBcnJLZXlzOiBbJ3ByZXNzdXJlJ10sXG4gIHZpc2liaWxpdHlBcnJLZXlzOiBbJ3Zpc2liaWxpdHknXSxcbn07XG5cbm1haW5PYmouY25hbmdlVW5pdCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgaWYgKHRoaXMuY3VycmVudFVuaXQgPT0gJ0tlbHZpbicpIHtcbiAgICB0aGlzLmN1cnJlbnRVbml0ID0gJ0NlbHNpdXMnO1xuICAgIHRoaXMuY2FsY1ZhbHVlKGFycik7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5jdXJyZW50VW5pdCA9ICdLZWx2aW4nO1xuICAgIHRoaXMuY2FsY1ZhbHVlKGFycik7XG4gIH1cbn1cblxubWFpbk9iai5jYWxjVmFsdWUgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGlmICh0aGlzLmN1cnJlbnRVbml0ICE9PSAnS2VsdmluJykge1xuICAgIGFyci5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgbGV0IHNwbGl0ZWRTdHJpbmcgPSBlbGVtLnRleHRDb250ZW50LnNwbGl0KCcgJyk7XG4gICAgICBlbGVtLnRleHRDb250ZW50ID0gIE1hdGgucm91bmQoK3NwbGl0ZWRTdHJpbmdbMF0gLSAyNzMsMTUpICsgJyDCsNChJztcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGFyci5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgbGV0IHNwbGl0ZWRTdHJpbmcgPSBlbGVtLnRleHRDb250ZW50LnNwbGl0KCcgJyk7XG4gICAgICBlbGVtLnRleHRDb250ZW50ID0gIE1hdGgucm91bmQoK3NwbGl0ZWRTdHJpbmdbMF0gKyAyNzMsMTUpICsgJyBLJztcbiAgICB9KVxuICB9XG59XG5cbm1haW5PYmouY2hhbmdlRm9ybWF0VmFsdWVzID0gZnVuY3Rpb24gKCkge1xuICBsZXQgdGhhdCA9IHRoaXMubW9kaWZpZWRPYmouY3VycmVudDtcblxuICB0aGF0LnN1bnJpc2UgPSBgJHtuZXcgRGF0ZSh0aGF0LnN1bnJpc2UgKiAxMDAwKS5nZXRIb3VycygpfToke25ldyBEYXRlKHRoYXQuc3VucmlzZSAqIDEwMDApLmdldE1pbnV0ZXMoKX1gO1xuICB0aGF0LnN1bnNldCA9IGAke25ldyBEYXRlKHRoYXQuc3Vuc2V0ICogMTAwMCkuZ2V0SG91cnMoKX06JHtuZXcgRGF0ZSh0aGF0LnN1bnNldCAqIDEwMDApLmdldE1pbnV0ZXMoKX1gO1xuICB0aGF0LnZpc2liaWxpdHkgPSBgJHt0aGF0LnZpc2liaWxpdHkgLyAxMDAwfWA7XG59XG5cbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiBwcm9jZXNzaW5nUmVxdWVzdChpbnB1dC52YWx1ZSkpXG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiBwcm9jZXNzaW5nUmVxdWVzdCgnTG9uZG9uJyk7XG5cbmZ1bmN0aW9uIHByb2Nlc3NpbmdSZXF1ZXN0KGN1cnJlbnRDaXR5TmFtZSkge1xuICByZXR1cm5DaXR5Q29vcmQoY3VycmVudENpdHlOYW1lKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7cmVzcG9uc2UubGF0fSZsb249JHtyZXNwb25zZS5sb259JmFwcGlkPTc1ODNmZDRjODBmMWY4ZTc1ZmUwM2YxNGQxMjFlY2UwYCwge21vZGU6ICdjb3JzJ30pXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgbWFpbk9iai5tb2RpZmllZE9iaiA9IHJlc3BvbnNlO1xuXG4gICAgICBtYWluT2JqLmNoYW5nZUZvcm1hdFZhbHVlcygpXG5cbiAgICAgIHJlYyhtYWluT2JqLm1vZGlmaWVkT2JqLCBtYWluT2JqLnRlbXBBcnJLZXlzLCAnSycpO1xuICAgICAgcmVjKG1haW5PYmoubW9kaWZpZWRPYmosIG1haW5PYmoucGVyY2VudEFycktleXMsICclJyk7XG4gICAgICByZWMobWFpbk9iai5tb2RpZmllZE9iaiwgbWFpbk9iai5wcmVzc3VyZUFycktleXMsICdoUGEnKTtcbiAgICAgIHJlYyhtYWluT2JqLm1vZGlmaWVkT2JqLCBtYWluT2JqLnZpc2liaWxpdHlBcnJLZXlzLCAna20nKTtcblxuICAgICAgZGVsZXRlSW5mb0Zyb21UaGVTaXRlKClcbiAgICAgIGFkZEluZm9JbnRvVGhlU2l0ZShtYWluT2JqLm1vZGlmaWVkT2JqLCBjdXJyZW50Q2l0eU5hbWUpO1xuXG4gICAgICBpZiAobWFpbk9iai5jdXJyZW50VW5pdCAhPT0gJ0tlbHZpbicpIHtcbiAgICAgICAgY29uc3QgdGVtcEFyciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZW1wJyk7XG4gICAgICAgIG1haW5PYmouY2FsY1ZhbHVlKHRlbXBBcnIpO1xuICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHJlYyhvYmosIGNvbmRpdGlvbkFycmF5LCB1bml0KSB7XG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgIGlmIChjb25kaXRpb25BcnJheS5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBpZiAodHlwZW9mIG9ialtrZXldICE9ICdvYmplY3QnKSB7XG4gICAgICAgIG9ialtrZXldID0gTWF0aC5yb3VuZCgrb2JqW2tleV0pICsgYCAke3VuaXR9YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBvYmpba2V5XSkge1xuICAgICAgICAgIG9ialtrZXldW3Byb3BdID0gTWF0aC5yb3VuZCgrb2JqW2tleV1bcHJvcF0pICsgYCAke3VuaXR9YDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG9ialtrZXldKSkge1xuICAgICAgZm9yIChjb25zdCBpdGVyYXRvciBvZiBvYmpba2V5XSkge1xuICAgICAgICByZWMoaXRlcmF0b3IsIGNvbmRpdGlvbkFycmF5LCB1bml0KTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSBpZih0eXBlb2Ygb2JqW2tleV0gPT0gJ29iamVjdCcpIHtcbiAgICAgIHJlYyhvYmpba2V5XSwgY29uZGl0aW9uQXJyYXksIHVuaXQpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZXR1cm5DaXR5Q29vcmQoY3VycmVudENpdHlOYW1lKSB7XG4gIHJldHVybiBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2N1cnJlbnRDaXR5TmFtZX0mYXBwaWQ9NzU4M2ZkNGM4MGYxZjhlNzVmZTAzZjE0ZDEyMWVjZTBgLCB7bW9kZTogJ2NvcnMnfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuY29vcmQpXG59XG5cbmZ1bmN0aW9uIGFkZEluZm9JbnRvVGhlU2l0ZShvYmosIGN1cnJlbnRDaXR5TmFtZSkge1xuICBzZXRUb2RheVdlYXRoZXIob2JqLmN1cnJlbnQsIG9iai5ob3VybHksIGN1cnJlbnRDaXR5TmFtZSk7XG4gIHNldENvbW1vbkluZm8ob2JqLmN1cnJlbnQpO1xuICBzZXREYWlseVdlYXRoZXIob2JqLmRhaWx5KVxufVxuXG5mdW5jdGlvbiBkZWxldGVJbmZvRnJvbVRoZVNpdGUoKSB7XG4gIGNvbnN0IHdlYXRoZXJJY29ucyA9IHRvZGF5V2VhdGhlci5xdWVyeVNlbGVjdG9yQWxsKCcud2VhdGhlckljb25zJyk7XG4gIGNvbnN0IGNvbW1vbldlYXRoZXJJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1vbldlYXRoZXJJbmZvJyk7XG4gIGNvbnN0IHRhYmxlTGluZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGVMaW5lJyk7XG5cbiAgd2VhdGhlckljb25zLmZvckVhY2goZWxlbSA9PiBlbGVtLnJlbW92ZSgpKTtcbiAgY29tbW9uV2VhdGhlckluZm8uZm9yRWFjaChlbGVtID0+IGVsZW0ucmVtb3ZlKCkpO1xuICB0YWJsZUxpbmVzLmZvckVhY2goZWxlbSA9PiBlbGVtLnJlbW92ZSgpKTtcbn1cblxuYnRuVW5pdHMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuICBidG5Vbml0cy50ZXh0Q29udGVudCA9IChtYWluT2JqLmN1cnJlbnRVbml0ID09ICdLZWx2aW4nKSA/ICfCsNChJyA6ICdLJztcbiAgY29uc3QgdGVtcEFyciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZW1wJyk7XG4gIG1haW5PYmouY25hbmdlVW5pdCh0ZW1wQXJyKVxufSkiXSwic291cmNlUm9vdCI6IiJ9