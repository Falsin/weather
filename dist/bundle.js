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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  border: solid red 1px;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\nbody {\n  font-size: 16px;\n}\n.container {\n  border: solid green 1px;\n  padding: 3vmin 5vmin;\n  display: flex;\n  flex-wrap: wrap;\n}\nheader {\n  background: hsl(0, 0%, 12%);\n  color: white;\n}\nheader .container {\n  justify-content: space-between;\n}\nheader .container #searchBox {\n  width: 50%;\n  display: flex;\n}\nheader .container #searchBox input {\n  flex-grow: 1;\n  min-width: 0;\n  padding-left: 1vmin;\n}\nheader .container #searchBox button {\n  padding: 1vmin;\n}\nheader .container #siteHeadline {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 30vmin;\n  font-weight: 900;\n  font-size: 3vmin;\n}\nheader .container #units {\n  width: 10vmin;\n  display: flex;\n}\nheader .container #units button {\n  flex-grow: 1;\n}\n#todayWeather .container {\n  justify-content: space-between;\n}\n#todayWeather .container #currentWeather {\n  padding-left: 3vmin;\n  padding-right: 3vmin;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n#todayWeather .container #currentWeather > * {\n  margin-bottom: 2vmin;\n}\n#todayWeather .container #currentWeather #mainWeather,\n#todayWeather .container #currentWeather .temp {\n  font-size: 1.4em;\n}\n#todayWeather .container #hourlyWeather {\n  display: flex;\n  width: 70%;\n  overflow-x: scroll;\n  padding-top: 2vmin;\n  padding-bottom: 2vmin;\n}\n#todayWeather .container #hourlyWeather > * {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n#todayWeather .container #hourlyWeather .weatherIcons > * {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#todayWeather .container #hourlyWeather .weatherIcons .weatherImg {\n  width: 60px;\n  height: 60px;\n  background: hsl(0, 0%, 80%);\n  background-position: center center;\n  background-size: contain;\n  margin-top: 3vmin;\n  margin-bottom: 3vmin;\n}\n#commonInfo .container {\n  display: flex;\n  flex-direction: column;\n  background: hsl(0, 0%, 12%);\n  color: white;\n}\n#commonInfo .container > div {\n  display: flex;\n  justify-content: space-between;\n}\n#commonInfo .container > div > div {\n  width: 17vmin;\n  display: flex;\n  flex-direction: column;\n}\n#commonInfo .container > div > div > * {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n}\n#commonInfo .container > div > div h4 {\n  margin-bottom: 1vmin;\n}\n#commonInfo .container > div > div span {\n  margin-top: auto;\n}\n#commonInfo .container > div:first-of-type {\n  margin-bottom: 2vmin;\n}\n#dailyWeather .container table {\n  width: 100%;\n  text-align: center;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n#dailyWeather .container table img {\n  width: 10vmin;\n  height: 10vmin;\n  background: hsl(0, 0%, 80%);\n  margin-top: 1.5vmin;\n  margin-bottom: 1vmin;\n}\n#dailyWeather .container table td,\n#dailyWeather .container table th {\n  border-bottom: gray solid 1px;\n}\n@media screen and (max-width: 580px) {\n  header .container #units {\n    width: 100%;\n    margin-top: 2vmin;\n  }\n  header .container #units button {\n    padding: 1vmin;\n  }\n  header .container #hourlyWeather {\n    width: 100%;\n  }\n  header .container #searchBox {\n    width: 60%;\n  }\n  header .container #siteHeadline {\n    font-size: 3.5vmin;\n  }\n  #todayWeather .container #currentWeather {\n    width: 100%;\n  }\n  #todayWeather .container #hourlyWeather {\n    width: 100%;\n  }\n  #commonInfo .container {\n    flex-direction: row;\n    justify-content: space-evenly;\n  }\n  #commonInfo .container div {\n    flex-direction: column;\n  }\n  #commonInfo .container div > div {\n    width: 25vmin;\n  }\n  #commonInfo .container div > div:not(:last-of-type) {\n    margin-bottom: 2vmin;\n  }\n  #commonInfo .container > div:first-of-type {\n    margin-bottom: 0;\n  }\n}\n@media screen and (max-width: 450px) {\n  header .container #siteHeadline {\n    width: 100%;\n  }\n  header .container #searchBox {\n    margin-top: 2vmin;\n    width: 100%;\n  }\n  header .container #siteHeadline {\n    font-size: 4vmin;\n  }\n  #commonInfo .container div > div {\n    width: 35vmin;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.less"],"names":[],"mappings":"AAKA;EACE,qBAAA;EACA,sBAAA;EACA,UAAA;EACA,SAAA;AAJF;AAOA;EACE,eAAA;AALF;AAQA;EACE,uBAAA;EACA,oBAAA;EACA,aAAA;EACA,eAAA;AANF;AASA;EACE,2BAAA;EACA,YAAA;AAPF;AASE;EACE,8BAAA;AAPJ;AASI;EACE,UAAA;EACA,aAAA;AAPN;AASM;EACE,YAAA;EACA,YAAA;EACA,mBAAA;AAPR;AAUM;EACE,cAAA;AARR;AAYI;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;EACA,gBAAA;EACA,gBAAA;AAVN;AAaI;EACE,aAAA;EACA,aAAA;AAXN;AAaM;EACE,YAAA;AAXR;AAiBA;EACE,8BAAA;AAfF;AAiBE;EACE,mBAAA;EACA,oBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;AAfJ;AAiBI;EACE,oBAAA;AAfN;AAkBI;;EAEE,gBAAA;AAhBN;AAoBE;EACE,aAAA;EACA,UAAA;EACA,kBAAA;EACA,kBAAA;EACA,qBAAA;AAlBJ;AAoBI;EACE,kBAAA;EACA,mBAAA;AAlBN;AAuBM;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;AArBR;AAwBM;EAzGJ,WAAA;EACA,YAAA;EA0GM,2BAAA;EACA,kCAAA;EACA,wBAAA;EACA,iBAAA;EACA,oBAAA;AArBR;AA2BA;EACE,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,YAAA;AAzBF;AA2BE;EACE,aAAA;EACA,8BAAA;AAzBJ;AA2BI;EACE,aAAA;EACA,aAAA;EACA,sBAAA;AAzBN;AA2BM;EACE,aAAA;EACA,uBAAA;EACA,kBAAA;AAzBR;AA4BM;EACE,oBAAA;AA1BR;AA6BM;EACE,gBAAA;AA3BR;AAiCE;EACE,oBAAA;AA/BJ;AAqCE;EACE,WAAA;EACA,kBAAA;EACA,yBAAA;EACA,iBAAA;AAnCJ;AAqCI;EAlKF,aAAA;EACA,cAAA;EAmKI,2BAAA;EACA,mBAAA;EACA,oBAAA;AAlCN;AAqCI;;EAEE,6BAAA;AAnCN;AAwCA;EAEI;IACE,WAAA;IACA,iBAAA;EAvCJ;EAyCI;IACE,cAAA;EAvCN;EA2CE;IACE,WAAA;EAzCJ;EA4CE;IACE,UAAA;EA1CJ;EA6CE;IACE,kBAAA;EA3CJ;EAiDE;IACE,WAAA;EA/CJ;EAkDE;IACE,WAAA;EAhDJ;EAoDA;IACE,mBAAA;IACA,6BAAA;EAlDF;EAoDE;IACE,sBAAA;EAlDJ;EAoDI;IACE,aAAA;EAlDN;EAqDI;IACE,oBAAA;EAnDN;EAuDE;IACE,gBAAA;EArDJ;AACF;AA2DA;EAEI;IACE,WAAA;EA1DJ;EA6DE;IACE,iBAAA;IACA,WAAA;EA3DJ;EA8DE;IACE,gBAAA;EA5DJ;EAoEI;IACE,aAAA;EAlEN;AACF","sourcesContent":[".size(@width, @height) {\n  width: @width;\n  height: @height;\n}\n\n* {\n  border: solid red 1px;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-size: 16px;\n}\n\n.container {\n  border: solid green 1px;\n  padding: 3vmin 5vmin;\n  display: flex;\n  flex-wrap: wrap;\n}\n\nheader {\n  background: hsl(0, 0%, 12%);\n  color: white;\n\n  & .container {\n    justify-content: space-between;\n    \n    & #searchBox {\n      width: 50%;\n      display: flex;\n    \n      & input {\n        flex-grow: 1;\n        min-width: 0;\n        padding-left: 1vmin;\n      }\n    \n      & button {\n        padding: 1vmin;\n      }\n    }\n\n    & #siteHeadline {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: 30vmin;\n      font-weight: 900;\n      font-size: 3vmin;\n    }\n\n    & #units {\n      width: 10vmin;\n      display: flex;\n    \n      & button {\n        flex-grow: 1;\n      }\n    }\n  }\n}\n\n#todayWeather .container {\n  justify-content: space-between;\n\n  & #currentWeather {\n    padding-left: 3vmin;\n    padding-right: 3vmin;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    & > * {\n      margin-bottom: 2vmin;\n    }\n\n    & #mainWeather,\n    & .temp {\n      font-size: 1.4em\n    }\n  }\n\n  & #hourlyWeather {\n    display: flex;\n    width: 70%;\n    overflow-x: scroll;\n    padding-top: 2vmin;\n    padding-bottom: 2vmin;\n  \n    & > * {\n      padding-left: 30px;\n      padding-right: 30px;\n    }\n\n    & .weatherIcons {\n\n      & > * {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      & .weatherImg {\n        .size(60px, 60px);\n        background: hsl(0, 0%, 80%);\n        background-position: center center;\n        background-size: contain;\n        margin-top: 3vmin;\n        margin-bottom: 3vmin;\n      }\n    }\n  }\n}\n\n#commonInfo .container {\n  display: flex;\n  flex-direction: column;\n  background: hsl(0, 0%, 12%);\n  color: white;\n\n  & > div {\n    display: flex;\n    justify-content: space-between;\n\n    & > div {\n      width: 17vmin;\n      display: flex;\n      flex-direction: column;\n\n      & > * {\n        display: flex;\n        justify-content: center;\n        text-align: center;\n      }\n\n      & h4 {\n        margin-bottom: 1vmin;\n      }\n\n      & span {\n        margin-top: auto;\n      }\n\n    }\n  }\n\n  & > div:first-of-type {\n    margin-bottom: 2vmin;\n  }\n}\n\n#dailyWeather .container {\n  \n  & table {\n    width: 100%;\n    text-align: center;\n    border-collapse: collapse;\n    border-spacing: 0;\n\n    & img {\n      .size(10vmin, 10vmin);\n      background: hsl(0, 0%, 80%);\n      margin-top: 1.5vmin;\n      margin-bottom: 1vmin;\n    }\n\n    & td,\n    & th {\n      border-bottom: gray solid 1px;\n    }\n  }\n}\n\n@media screen and (max-width: 580px){\n  header .container {\n    & #units {\n      width: 100%;\n      margin-top: 2vmin;\n\n      & button {\n        padding: 1vmin;\n      }\n    }\n\n    & #hourlyWeather {\n      width: 100%;\n    }\n\n    & #searchBox {\n      width: 60%;\n    }\n\n    & #siteHeadline {\n      font-size: 3.5vmin;\n    }\n  }\n\n  #todayWeather .container {\n\n    & #currentWeather {\n      width: 100%;\n    }\n\n    & #hourlyWeather {\n      width: 100%;\n    }\n  }\n\n  #commonInfo .container {\n    flex-direction: row;\n    justify-content: space-evenly;\n\n    & div {\n      flex-direction: column;\n\n      & > div {\n        width: 25vmin;\n      }\n\n      & > div:not(:last-of-type) {\n        margin-bottom: 2vmin;\n      }\n    }\n\n    & > div:first-of-type {\n      margin-bottom: 0;\n    }\n\n\n  }\n}\n\n@media screen and (max-width: 450px){\n  header .container {\n    & #siteHeadline {\n      width: 100%;\n    }\n\n    & #searchBox {\n      margin-top: 2vmin;\n      width: 100%;\n    }\n\n    & #siteHeadline {\n      font-size: 4vmin;\n    }\n  }\n\n  #commonInfo .container {\n    \n    & div {\n\n      & > div {\n        width: 35vmin;\n      }\n    }\n  }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2NyZWF0ZS1odG1sLW5vZGUvY3JlYXRlSHRtbE5vZGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9zdHlsZS5sZXNzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3N0eWxlLmxlc3M/ZWE2OCIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvc2V0Q29tbW9uSW5mby5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3NldERhaWx5V2VhdGhlckJsb2NrLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvdHVuZVRvZGF5V2VhdGhlckJsb2NrLmpzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQix5Q0FBeUMsR0FBRywyQ0FBMkM7QUFDM0csbUJBQW1CLHdDQUF3QyxHQUFHLDBDQUEwQztBQUN4Ryx1QkFBdUIsdUJBQXVCO0FBQzlDOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSxhQUFhLE9BQU8sYUFBYSwyQ0FBMkMsYUFBYTtBQUNuSyxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsS0FBSztBQUNwRCxPQUFPO0FBQ1A7QUFDQSw2REFBNkQsS0FBSztBQUNsRTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0VBQW9FLGdCQUFnQiwyQ0FBMkMsYUFBYTtBQUM1STtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLCtEQUFlO0FBQ2pCLEVBQUUsdURBQWE7QUFDZixFQUFFLDhEQUFlO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUVMZW0ocGFyZW50RWxlbSwgY3VycmVudEVsZW0sIC4uLmFycmF5QXR0cikge1xuICBsZXQgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoY3VycmVudEVsZW0pO1x0XG4gIHBhcmVudEVsZW0uYXBwZW5kQ2hpbGQoZWxlbSk7XHRcbiAgYXJyYXlBdHRyID0gYXJyYXlBdHRyLm1hcChpdGVtID0+IGl0ZW0uc3BsaXQoJzonKSlcbiAgYXJyYXlBdHRyLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaWYgKGl0ZW0ubGVuZ3RoID09IDEpIHtcbiAgICAgIGVsZW0udGV4dENvbnRlbnQgPSBgJHtpdGVtfWBcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoYCR7aXRlbVswXX1gLCBgJHtpdGVtWzFdfWApO1xuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGVsZW07XG59XG5cbmV4cG9ydCB7Y3JlYXRlRUxlbSBhcyBkZWZhdWx0fSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3JkZXI6IHNvbGlkIHJlZCAxcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuYm9keSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5jb250YWluZXIge1xcbiAgYm9yZGVyOiBzb2xpZCBncmVlbiAxcHg7XFxuICBwYWRkaW5nOiAzdm1pbiA1dm1pbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDEyJSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbmhlYWRlciAuY29udGFpbmVyIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuaGVhZGVyIC5jb250YWluZXIgI3NlYXJjaEJveCB7XFxuICB3aWR0aDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuaGVhZGVyIC5jb250YWluZXIgI3NlYXJjaEJveCBpbnB1dCB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBtaW4td2lkdGg6IDA7XFxuICBwYWRkaW5nLWxlZnQ6IDF2bWluO1xcbn1cXG5oZWFkZXIgLmNvbnRhaW5lciAjc2VhcmNoQm94IGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxdm1pbjtcXG59XFxuaGVhZGVyIC5jb250YWluZXIgI3NpdGVIZWFkbGluZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDMwdm1pbjtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LXNpemU6IDN2bWluO1xcbn1cXG5oZWFkZXIgLmNvbnRhaW5lciAjdW5pdHMge1xcbiAgd2lkdGg6IDEwdm1pbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbmhlYWRlciAuY29udGFpbmVyICN1bml0cyBidXR0b24ge1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG4jdG9kYXlXZWF0aGVyIC5jb250YWluZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4jdG9kYXlXZWF0aGVyIC5jb250YWluZXIgI2N1cnJlbnRXZWF0aGVyIHtcXG4gIHBhZGRpbmctbGVmdDogM3ZtaW47XFxuICBwYWRkaW5nLXJpZ2h0OiAzdm1pbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4jdG9kYXlXZWF0aGVyIC5jb250YWluZXIgI2N1cnJlbnRXZWF0aGVyID4gKiB7XFxuICBtYXJnaW4tYm90dG9tOiAydm1pbjtcXG59XFxuI3RvZGF5V2VhdGhlciAuY29udGFpbmVyICNjdXJyZW50V2VhdGhlciAjbWFpbldlYXRoZXIsXFxuI3RvZGF5V2VhdGhlciAuY29udGFpbmVyICNjdXJyZW50V2VhdGhlciAudGVtcCB7XFxuICBmb250LXNpemU6IDEuNGVtO1xcbn1cXG4jdG9kYXlXZWF0aGVyIC5jb250YWluZXIgI2hvdXJseVdlYXRoZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA3MCU7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICBwYWRkaW5nLXRvcDogMnZtaW47XFxuICBwYWRkaW5nLWJvdHRvbTogMnZtaW47XFxufVxcbiN0b2RheVdlYXRoZXIgLmNvbnRhaW5lciAjaG91cmx5V2VhdGhlciA+ICoge1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMzBweDtcXG59XFxuI3RvZGF5V2VhdGhlciAuY29udGFpbmVyICNob3VybHlXZWF0aGVyIC53ZWF0aGVySWNvbnMgPiAqIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiN0b2RheVdlYXRoZXIgLmNvbnRhaW5lciAjaG91cmx5V2VhdGhlciAud2VhdGhlckljb25zIC53ZWF0aGVySW1nIHtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYmFja2dyb3VuZDogaHNsKDAsIDAlLCA4MCUpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIG1hcmdpbi10b3A6IDN2bWluO1xcbiAgbWFyZ2luLWJvdHRvbTogM3ZtaW47XFxufVxcbiNjb21tb25JbmZvIC5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDEyJSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbiNjb21tb25JbmZvIC5jb250YWluZXIgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuI2NvbW1vbkluZm8gLmNvbnRhaW5lciA+IGRpdiA+IGRpdiB7XFxuICB3aWR0aDogMTd2bWluO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbiNjb21tb25JbmZvIC5jb250YWluZXIgPiBkaXYgPiBkaXYgPiAqIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2NvbW1vbkluZm8gLmNvbnRhaW5lciA+IGRpdiA+IGRpdiBoNCB7XFxuICBtYXJnaW4tYm90dG9tOiAxdm1pbjtcXG59XFxuI2NvbW1vbkluZm8gLmNvbnRhaW5lciA+IGRpdiA+IGRpdiBzcGFuIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxufVxcbiNjb21tb25JbmZvIC5jb250YWluZXIgPiBkaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuICBtYXJnaW4tYm90dG9tOiAydm1pbjtcXG59XFxuI2RhaWx5V2VhdGhlciAuY29udGFpbmVyIHRhYmxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG4jZGFpbHlXZWF0aGVyIC5jb250YWluZXIgdGFibGUgaW1nIHtcXG4gIHdpZHRoOiAxMHZtaW47XFxuICBoZWlnaHQ6IDEwdm1pbjtcXG4gIGJhY2tncm91bmQ6IGhzbCgwLCAwJSwgODAlKTtcXG4gIG1hcmdpbi10b3A6IDEuNXZtaW47XFxuICBtYXJnaW4tYm90dG9tOiAxdm1pbjtcXG59XFxuI2RhaWx5V2VhdGhlciAuY29udGFpbmVyIHRhYmxlIHRkLFxcbiNkYWlseVdlYXRoZXIgLmNvbnRhaW5lciB0YWJsZSB0aCB7XFxuICBib3JkZXItYm90dG9tOiBncmF5IHNvbGlkIDFweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcXG4gIGhlYWRlciAuY29udGFpbmVyICN1bml0cyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiAydm1pbjtcXG4gIH1cXG4gIGhlYWRlciAuY29udGFpbmVyICN1bml0cyBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAxdm1pbjtcXG4gIH1cXG4gIGhlYWRlciAuY29udGFpbmVyICNob3VybHlXZWF0aGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICBoZWFkZXIgLmNvbnRhaW5lciAjc2VhcmNoQm94IHtcXG4gICAgd2lkdGg6IDYwJTtcXG4gIH1cXG4gIGhlYWRlciAuY29udGFpbmVyICNzaXRlSGVhZGxpbmUge1xcbiAgICBmb250LXNpemU6IDMuNXZtaW47XFxuICB9XFxuICAjdG9kYXlXZWF0aGVyIC5jb250YWluZXIgI2N1cnJlbnRXZWF0aGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAjdG9kYXlXZWF0aGVyIC5jb250YWluZXIgI2hvdXJseVdlYXRoZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gICNjb21tb25JbmZvIC5jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIH1cXG4gICNjb21tb25JbmZvIC5jb250YWluZXIgZGl2IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gICNjb21tb25JbmZvIC5jb250YWluZXIgZGl2ID4gZGl2IHtcXG4gICAgd2lkdGg6IDI1dm1pbjtcXG4gIH1cXG4gICNjb21tb25JbmZvIC5jb250YWluZXIgZGl2ID4gZGl2Om5vdCg6bGFzdC1vZi10eXBlKSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDJ2bWluO1xcbiAgfVxcbiAgI2NvbW1vbkluZm8gLmNvbnRhaW5lciA+IGRpdjpmaXJzdC1vZi10eXBlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcXG4gIGhlYWRlciAuY29udGFpbmVyICNzaXRlSGVhZGxpbmUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIGhlYWRlciAuY29udGFpbmVyICNzZWFyY2hCb3gge1xcbiAgICBtYXJnaW4tdG9wOiAydm1pbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICBoZWFkZXIgLmNvbnRhaW5lciAjc2l0ZUhlYWRsaW5lIHtcXG4gICAgZm9udC1zaXplOiA0dm1pbjtcXG4gIH1cXG4gICNjb21tb25JbmZvIC5jb250YWluZXIgZGl2ID4gZGl2IHtcXG4gICAgd2lkdGg6IDM1dm1pbjtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmxlc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBS0E7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFKRjtBQU9BO0VBQ0UsZUFBQTtBQUxGO0FBUUE7RUFDRSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFORjtBQVNBO0VBQ0UsMkJBQUE7RUFDQSxZQUFBO0FBUEY7QUFTRTtFQUNFLDhCQUFBO0FBUEo7QUFTSTtFQUNFLFVBQUE7RUFDQSxhQUFBO0FBUE47QUFTTTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFQUjtBQVVNO0VBQ0UsY0FBQTtBQVJSO0FBWUk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBVk47QUFhSTtFQUNFLGFBQUE7RUFDQSxhQUFBO0FBWE47QUFhTTtFQUNFLFlBQUE7QUFYUjtBQWlCQTtFQUNFLDhCQUFBO0FBZkY7QUFpQkU7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWZKO0FBaUJJO0VBQ0Usb0JBQUE7QUFmTjtBQWtCSTs7RUFFRSxnQkFBQTtBQWhCTjtBQW9CRTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBbEJKO0FBb0JJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQWxCTjtBQXVCTTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBckJSO0FBd0JNO0VBekdKLFdBQUE7RUFDQSxZQUFBO0VBMEdNLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFyQlI7QUEyQkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUF6QkY7QUEyQkU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUF6Qko7QUEyQkk7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBekJOO0FBMkJNO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUF6QlI7QUE0Qk07RUFDRSxvQkFBQTtBQTFCUjtBQTZCTTtFQUNFLGdCQUFBO0FBM0JSO0FBaUNFO0VBQ0Usb0JBQUE7QUEvQko7QUFxQ0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBbkNKO0FBcUNJO0VBbEtGLGFBQUE7RUFDQSxjQUFBO0VBbUtJLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQWxDTjtBQXFDSTs7RUFFRSw2QkFBQTtBQW5DTjtBQXdDQTtFQUVJO0lBQ0UsV0FBQTtJQUNBLGlCQUFBO0VBdkNKO0VBeUNJO0lBQ0UsY0FBQTtFQXZDTjtFQTJDRTtJQUNFLFdBQUE7RUF6Q0o7RUE0Q0U7SUFDRSxVQUFBO0VBMUNKO0VBNkNFO0lBQ0Usa0JBQUE7RUEzQ0o7RUFpREU7SUFDRSxXQUFBO0VBL0NKO0VBa0RFO0lBQ0UsV0FBQTtFQWhESjtFQW9EQTtJQUNFLG1CQUFBO0lBQ0EsNkJBQUE7RUFsREY7RUFvREU7SUFDRSxzQkFBQTtFQWxESjtFQW9ESTtJQUNFLGFBQUE7RUFsRE47RUFxREk7SUFDRSxvQkFBQTtFQW5ETjtFQXVERTtJQUNFLGdCQUFBO0VBckRKO0FBQ0Y7QUEyREE7RUFFSTtJQUNFLFdBQUE7RUExREo7RUE2REU7SUFDRSxpQkFBQTtJQUNBLFdBQUE7RUEzREo7RUE4REU7SUFDRSxnQkFBQTtFQTVESjtFQW9FSTtJQUNFLGFBQUE7RUFsRU47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2l6ZShAd2lkdGgsIEBoZWlnaHQpIHtcXG4gIHdpZHRoOiBAd2lkdGg7XFxuICBoZWlnaHQ6IEBoZWlnaHQ7XFxufVxcblxcbioge1xcbiAgYm9yZGVyOiBzb2xpZCByZWQgMXB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGJvcmRlcjogc29saWQgZ3JlZW4gMXB4O1xcbiAgcGFkZGluZzogM3ZtaW4gNXZtaW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogaHNsKDAsIDAlLCAxMiUpO1xcbiAgY29sb3I6IHdoaXRlO1xcblxcbiAgJiAuY29udGFpbmVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBcXG4gICAgJiAjc2VhcmNoQm94IHtcXG4gICAgICB3aWR0aDogNTAlO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIFxcbiAgICAgICYgaW5wdXQge1xcbiAgICAgICAgZmxleC1ncm93OiAxO1xcbiAgICAgICAgbWluLXdpZHRoOiAwO1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxdm1pbjtcXG4gICAgICB9XFxuICAgIFxcbiAgICAgICYgYnV0dG9uIHtcXG4gICAgICAgIHBhZGRpbmc6IDF2bWluO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmICNzaXRlSGVhZGxpbmUge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICB3aWR0aDogMzB2bWluO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgICAgZm9udC1zaXplOiAzdm1pbjtcXG4gICAgfVxcblxcbiAgICAmICN1bml0cyB7XFxuICAgICAgd2lkdGg6IDEwdm1pbjtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBcXG4gICAgICAmIGJ1dHRvbiB7XFxuICAgICAgICBmbGV4LWdyb3c6IDE7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbiN0b2RheVdlYXRoZXIgLmNvbnRhaW5lciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAmICNjdXJyZW50V2VhdGhlciB7XFxuICAgIHBhZGRpbmctbGVmdDogM3ZtaW47XFxuICAgIHBhZGRpbmctcmlnaHQ6IDN2bWluO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgJiA+ICoge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDJ2bWluO1xcbiAgICB9XFxuXFxuICAgICYgI21haW5XZWF0aGVyLFxcbiAgICAmIC50ZW1wIHtcXG4gICAgICBmb250LXNpemU6IDEuNGVtXFxuICAgIH1cXG4gIH1cXG5cXG4gICYgI2hvdXJseVdlYXRoZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICAgIHBhZGRpbmctdG9wOiAydm1pbjtcXG4gICAgcGFkZGluZy1ib3R0b206IDJ2bWluO1xcbiAgXFxuICAgICYgPiAqIHtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcXG4gICAgfVxcblxcbiAgICAmIC53ZWF0aGVySWNvbnMge1xcblxcbiAgICAgICYgPiAqIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgfVxcblxcbiAgICAgICYgLndlYXRoZXJJbWcge1xcbiAgICAgICAgLnNpemUoNjBweCwgNjBweCk7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDgwJSk7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICAgICAgbWFyZ2luLXRvcDogM3ZtaW47XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzdm1pbjtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuI2NvbW1vbkluZm8gLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQ6IGhzbCgwLCAwJSwgMTIlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG5cXG4gICYgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgICYgPiBkaXYge1xcbiAgICAgIHdpZHRoOiAxN3ZtaW47XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICAgICYgPiAqIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICB9XFxuXFxuICAgICAgJiBoNCB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxdm1pbjtcXG4gICAgICB9XFxuXFxuICAgICAgJiBzcGFuIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgICAgfVxcblxcbiAgICB9XFxuICB9XFxuXFxuICAmID4gZGl2OmZpcnN0LW9mLXR5cGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAydm1pbjtcXG4gIH1cXG59XFxuXFxuI2RhaWx5V2VhdGhlciAuY29udGFpbmVyIHtcXG4gIFxcbiAgJiB0YWJsZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xcblxcbiAgICAmIGltZyB7XFxuICAgICAgLnNpemUoMTB2bWluLCAxMHZtaW4pO1xcbiAgICAgIGJhY2tncm91bmQ6IGhzbCgwLCAwJSwgODAlKTtcXG4gICAgICBtYXJnaW4tdG9wOiAxLjV2bWluO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDF2bWluO1xcbiAgICB9XFxuXFxuICAgICYgdGQsXFxuICAgICYgdGgge1xcbiAgICAgIGJvcmRlci1ib3R0b206IGdyYXkgc29saWQgMXB4O1xcbiAgICB9XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KXtcXG4gIGhlYWRlciAuY29udGFpbmVyIHtcXG4gICAgJiAjdW5pdHMge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIG1hcmdpbi10b3A6IDJ2bWluO1xcblxcbiAgICAgICYgYnV0dG9uIHtcXG4gICAgICAgIHBhZGRpbmc6IDF2bWluO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmICNob3VybHlXZWF0aGVyIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAmICNzZWFyY2hCb3gge1xcbiAgICAgIHdpZHRoOiA2MCU7XFxuICAgIH1cXG5cXG4gICAgJiAjc2l0ZUhlYWRsaW5lIHtcXG4gICAgICBmb250LXNpemU6IDMuNXZtaW47XFxuICAgIH1cXG4gIH1cXG5cXG4gICN0b2RheVdlYXRoZXIgLmNvbnRhaW5lciB7XFxuXFxuICAgICYgI2N1cnJlbnRXZWF0aGVyIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAmICNob3VybHlXZWF0aGVyIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgfVxcblxcbiAgI2NvbW1vbkluZm8gLmNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcbiAgICAmIGRpdiB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgICAmID4gZGl2IHtcXG4gICAgICAgIHdpZHRoOiAyNXZtaW47XFxuICAgICAgfVxcblxcbiAgICAgICYgPiBkaXY6bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJ2bWluO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmID4gZGl2OmZpcnN0LW9mLXR5cGUge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIH1cXG5cXG5cXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpe1xcbiAgaGVhZGVyIC5jb250YWluZXIge1xcbiAgICAmICNzaXRlSGVhZGxpbmUge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgICYgI3NlYXJjaEJveCB7XFxuICAgICAgbWFyZ2luLXRvcDogMnZtaW47XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgJiAjc2l0ZUhlYWRsaW5lIHtcXG4gICAgICBmb250LXNpemU6IDR2bWluO1xcbiAgICB9XFxuICB9XFxuXFxuICAjY29tbW9uSW5mbyAuY29udGFpbmVyIHtcXG4gICAgXFxuICAgICYgZGl2IHtcXG5cXG4gICAgICAmID4gZGl2IHtcXG4gICAgICAgIHdpZHRoOiAzNXZtaW47XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5sZXNzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgY3JlYXRlRWxlbSBmcm9tICdjcmVhdGUtaHRtbC1ub2RlJ1xuXG5jb25zdCBjb21tb25JbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1vbkluZm8nKTtcblxuZnVuY3Rpb24gc2V0Q29tbW9uSW5mbyhvYmopIHtcbiAgY29uc3QgY29tbW9uSW5mb0VsZW1lbnRzID0gY29tbW9uSW5mby5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbW9uSW5mb0VsZW1lbnQnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbW1vbkluZm9FbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBvYmpFbGVtID0gb2JqW2NvbW1vbkluZm9FbGVtZW50c1tpXS5pZF07XG5cbiAgICBjb25zdCBjaGlsZEVsZW0gPSBjcmVhdGVFbGVtKGNvbW1vbkluZm9FbGVtZW50c1tpXSwgJ3NwYW4nLCAnY2xhc3M6Y29tbW9uV2VhdGhlckluZm8nKTtcbiAgICBjaGlsZEVsZW0udGV4dENvbnRlbnQgPSBgJHtvYmpFbGVtfWA7XG5cbiAgICBpZiAodHlwZW9mIG9iakVsZW0gPT0gJ3N0cmluZycgJiYgb2JqRWxlbS5pbmNsdWRlcygnSycpKSB7XG4gICAgICBjaGlsZEVsZW0uY2xhc3NMaXN0LmFkZCgndGVtcCcpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNldENvbW1vbkluZm8iLCJpbXBvcnQgY3JlYXRlRWxlbSBmcm9tICdjcmVhdGUtaHRtbC1ub2RlJ1xuXG5jb25zdCBkYWlseVdlYXRoZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFpbHlXZWF0aGVyJyk7XG5cbmZ1bmN0aW9uIHNldERhaWx5V2VhdGhlcihhcnJheSkge1xuICBjb25zdCBkYXlzQXJyYXkgPSBbXG4gICAgJ1N1bmRheScsIFxuICAgICdNb25kYXknLCBcbiAgICAnVHVlc2RheScsIFxuICAgICdXZWRuZXNkYXknLCBcbiAgICAnVGh1cnNkYXknLCBcbiAgICAnRnJpZGF5JywgXG4gICAgJ1NhdHVyZGF5J1xuICBdXG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHRhYmxlID0gZGFpbHlXZWF0aGVyLnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJyk7XG4gICAgY29uc3QgdGFibGVMaW5lID0gY3JlYXRlRWxlbSh0YWJsZSwgJ3RyJywgJ2NsYXNzOnRhYmxlTGluZScpO1xuICAgIGNyZWF0ZUVsZW0odGFibGVMaW5lLCAndGQnLCBgJHtkYXlzQXJyYXlbbmV3IERhdGUoYXJyYXlbaV0uZHQgKiAxMDAwKS5nZXREYXkoKV19YCk7XG5cbiAgICBjb25zdCB3ZWF0aGVySWNvbkNlaWwgPSBjcmVhdGVFbGVtKHRhYmxlTGluZSwgJ3RkJyk7XG4gICAgY29uc3Qgd2VhdGhlckljb24gPSBjcmVhdGVFbGVtKHdlYXRoZXJJY29uQ2VpbCwgJ2ltZycpO1xuICAgIHdlYXRoZXJJY29uLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2FycmF5W2ldLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYDtcblxuICAgIGNyZWF0ZUVsZW0odGFibGVMaW5lLCAndGQnLCBgJHthcnJheVtpXS5odW1pZGl0eX1gKTtcblxuICAgIGNvbnN0IHRlbXBCbG9jayA9IGNyZWF0ZUVsZW0odGFibGVMaW5lLCAndGQnKTtcbiAgICBjcmVhdGVFbGVtKHRlbXBCbG9jaywgJ2RpdicsIGAke2FycmF5W2ldLnRlbXAuZGF5fWAsICdjbGFzczogdGVtcCcpO1xuICAgIGNyZWF0ZUVsZW0odGVtcEJsb2NrLCAnZGl2JywgYCR7YXJyYXlbaV0udGVtcC5uaWdodH1gLCAnY2xhc3M6IHRlbXAnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzZXREYWlseVdlYXRoZXIiLCJpbXBvcnQgY3JlYXRlRWxlbSBmcm9tICdjcmVhdGUtaHRtbC1ub2RlJ1xuXG5jb25zdCB0b2RheVdlYXRoZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXlXZWF0aGVyJyk7XG5jb25zdCBtYWluV2VhdGhlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluV2VhdGhlcicpXG5cbmZ1bmN0aW9uIHNldFRvZGF5V2VhdGhlcihjdXJyZW50V2VhdGhlciwgaG91cmx5V2VhdGhlciwgY3VycmVudENpdHlOYW1lKSB7XG4gIGNvbnN0IGNpdHlOYW1lID0gdG9kYXlXZWF0aGVyLnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XG4gIGNvbnN0IHRlbXAgPSB0b2RheVdlYXRoZXIucXVlcnlTZWxlY3RvcignLnRlbXAnKTtcbiAgY29uc3QgaG91cmx5V2VhdGhlckJsb2NrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvdXJseVdlYXRoZXInKTtcblxuICBjaXR5TmFtZS50ZXh0Q29udGVudCA9IGN1cnJlbnRDaXR5TmFtZTtcbiAgbWFpbldlYXRoZXIudGV4dENvbnRlbnQgPSBjdXJyZW50V2VhdGhlci53ZWF0aGVyWzBdLm1haW47XG4gIHRlbXAudGV4dENvbnRlbnQgPSBjdXJyZW50V2VhdGhlci50ZW1wO1xuXG4gIGNyZWF0ZVdlYXRoZXJDZWxsKGhvdXJseVdlYXRoZXJCbG9jaywgJ05vdycsIGN1cnJlbnRXZWF0aGVyLCBjdXJyZW50V2VhdGhlci50ZW1wKVxuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgMjU7IGkrKykge1xuICAgIGxldCBob3VyID0gbmV3IERhdGUoaG91cmx5V2VhdGhlcltpXS5kdCAqIDEwMDApLmdldEhvdXJzKCk7XG5cbiAgICBpZiAoaG91ciA8IDEwKSB7XG4gICAgICBob3VyID0gYDAke2hvdXJ9YFxuICAgIH1cbiAgICBob3VyICs9IGA6MDBgXG5cbiAgICBjb25zdCB0ZW1wID0gaG91cmx5V2VhdGhlcltpXS50ZW1wO1xuICAgIGNyZWF0ZVdlYXRoZXJDZWxsKGhvdXJseVdlYXRoZXJCbG9jaywgaG91ciwgaG91cmx5V2VhdGhlcltpXSwgdGVtcClcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVXZWF0aGVyQ2VsbChwYXJlbnRFbGVtLCBob3VyLCBhcnJheSwgdGVtcCkge1xuICBjb25zdCBlbGVtID0gY3JlYXRlRWxlbShwYXJlbnRFbGVtLCAnZGl2JywgJ2NsYXNzOndlYXRoZXJJY29ucycpO1xuICBjcmVhdGVFbGVtKGVsZW0sICdkaXYnKS50ZXh0Q29udGVudCA9IGAke2hvdXJ9YDtcbiAgXG4gIGNvbnN0IHdlYXRoZXJJbWcgPSBjcmVhdGVFbGVtKGVsZW0sICdkaXYnLCAnY2xhc3M6d2VhdGhlckltZycpO1xuICB3ZWF0aGVySW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHthcnJheS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZylgXG4gIGNyZWF0ZUVsZW0oZWxlbSwgJ2RpdicsIGAke3RlbXB9YCwgJ2NsYXNzOnRlbXAnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2V0VG9kYXlXZWF0aGVyIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5sZXNzJztcbmltcG9ydCBzZXRUb2RheVdlYXRoZXIgZnJvbSAnLi90dW5lVG9kYXlXZWF0aGVyQmxvY2snXG5pbXBvcnQgc2V0Q29tbW9uSW5mbyBmcm9tICcuL3NldENvbW1vbkluZm8nXG5pbXBvcnQgc2V0RGFpbHlXZWF0aGVyIGZyb20gJy4vc2V0RGFpbHlXZWF0aGVyQmxvY2snXG5cbmNvbnN0IHRvZGF5V2VhdGhlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheVdlYXRoZXInKTtcbmNvbnN0IHVuaXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXRzJyk7XG5jb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoQnRuJyk7XG5cbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbmNvbnN0IGJ0blVuaXRzID0gdW5pdHMucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG5cbmxldCBtYWluT2JqID0ge1xuICBjdXJyZW50VW5pdDogJ0tlbHZpbicsXG4gIHRlbXBBcnJLZXlzOiBbJ3RlbXAnLCAnZmVlbHNfbGlrZScsICdkZXdfcG9pbnQnXSxcbiAgcGVyY2VudEFycktleXM6IFsnY2xvdWRzJywgJ2h1bWlkaXR5J10sXG4gIHByZXNzdXJlQXJyS2V5czogWydwcmVzc3VyZSddLFxuICB2aXNpYmlsaXR5QXJyS2V5czogWyd2aXNpYmlsaXR5J10sXG59O1xuXG5tYWluT2JqLmNuYW5nZVVuaXQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGlmICh0aGlzLmN1cnJlbnRVbml0ID09ICdLZWx2aW4nKSB7XG4gICAgdGhpcy5jdXJyZW50VW5pdCA9ICdDZWxzaXVzJztcbiAgICB0aGlzLmNhbGNWYWx1ZShhcnIpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuY3VycmVudFVuaXQgPSAnS2VsdmluJztcbiAgICB0aGlzLmNhbGNWYWx1ZShhcnIpO1xuICB9XG59XG5cbm1haW5PYmouY2FsY1ZhbHVlID0gZnVuY3Rpb24gKGFycikge1xuICBpZiAodGhpcy5jdXJyZW50VW5pdCAhPT0gJ0tlbHZpbicpIHtcbiAgICBhcnIuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgIGxldCBzcGxpdGVkU3RyaW5nID0gZWxlbS50ZXh0Q29udGVudC5zcGxpdCgnICcpO1xuICAgICAgZWxlbS50ZXh0Q29udGVudCA9ICBNYXRoLnJvdW5kKCtzcGxpdGVkU3RyaW5nWzBdIC0gMjczLDE1KSArICcgwrDQoSc7XG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBhcnIuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgIGxldCBzcGxpdGVkU3RyaW5nID0gZWxlbS50ZXh0Q29udGVudC5zcGxpdCgnICcpO1xuICAgICAgZWxlbS50ZXh0Q29udGVudCA9ICBNYXRoLnJvdW5kKCtzcGxpdGVkU3RyaW5nWzBdICsgMjczLDE1KSArICcgSyc7XG4gICAgfSlcbiAgfVxufVxuXG5tYWluT2JqLmNoYW5nZUZvcm1hdFZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IHRoYXQgPSB0aGlzLm1vZGlmaWVkT2JqLmN1cnJlbnQ7XG5cbiAgdGhhdC5zdW5yaXNlID0gYCR7bmV3IERhdGUodGhhdC5zdW5yaXNlICogMTAwMCkuZ2V0SG91cnMoKX06JHtuZXcgRGF0ZSh0aGF0LnN1bnJpc2UgKiAxMDAwKS5nZXRNaW51dGVzKCl9YDtcbiAgdGhhdC5zdW5zZXQgPSBgJHtuZXcgRGF0ZSh0aGF0LnN1bnNldCAqIDEwMDApLmdldEhvdXJzKCl9OiR7bmV3IERhdGUodGhhdC5zdW5zZXQgKiAxMDAwKS5nZXRNaW51dGVzKCl9YDtcbiAgdGhhdC52aXNpYmlsaXR5ID0gYCR7dGhhdC52aXNpYmlsaXR5IC8gMTAwMH1gO1xufVxuXG5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4gcHJvY2Vzc2luZ1JlcXVlc3QoaW5wdXQudmFsdWUpKVxuXG53aW5kb3cub25sb2FkID0gKCkgPT4gcHJvY2Vzc2luZ1JlcXVlc3QoJ0xvbmRvbicpO1xuXG5mdW5jdGlvbiBwcm9jZXNzaW5nUmVxdWVzdChjdXJyZW50Q2l0eU5hbWUpIHtcbiAgcmV0dXJuQ2l0eUNvb3JkKGN1cnJlbnRDaXR5TmFtZSlcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke3Jlc3BvbnNlLmxhdH0mbG9uPSR7cmVzcG9uc2UubG9ufSZhcHBpZD03NTgzZmQ0YzgwZjFmOGU3NWZlMDNmMTRkMTIxZWNlMGAsIHttb2RlOiAnY29ycyd9KVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIG1haW5PYmoubW9kaWZpZWRPYmogPSByZXNwb25zZTtcblxuICAgICAgbWFpbk9iai5jaGFuZ2VGb3JtYXRWYWx1ZXMoKVxuXG4gICAgICByZWMobWFpbk9iai5tb2RpZmllZE9iaiwgbWFpbk9iai50ZW1wQXJyS2V5cywgJ0snKTtcbiAgICAgIHJlYyhtYWluT2JqLm1vZGlmaWVkT2JqLCBtYWluT2JqLnBlcmNlbnRBcnJLZXlzLCAnJScpO1xuICAgICAgcmVjKG1haW5PYmoubW9kaWZpZWRPYmosIG1haW5PYmoucHJlc3N1cmVBcnJLZXlzLCAnaFBhJyk7XG4gICAgICByZWMobWFpbk9iai5tb2RpZmllZE9iaiwgbWFpbk9iai52aXNpYmlsaXR5QXJyS2V5cywgJ2ttJyk7XG5cbiAgICAgIGRlbGV0ZUluZm9Gcm9tVGhlU2l0ZSgpXG4gICAgICBhZGRJbmZvSW50b1RoZVNpdGUobWFpbk9iai5tb2RpZmllZE9iaiwgY3VycmVudENpdHlOYW1lKTtcblxuICAgICAgaWYgKG1haW5PYmouY3VycmVudFVuaXQgIT09ICdLZWx2aW4nKSB7XG4gICAgICAgIGNvbnN0IHRlbXBBcnIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGVtcCcpO1xuICAgICAgICBtYWluT2JqLmNhbGNWYWx1ZSh0ZW1wQXJyKTtcbiAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiByZWMob2JqLCBjb25kaXRpb25BcnJheSwgdW5pdCkge1xuICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcbiAgICBpZiAoY29uZGl0aW9uQXJyYXkuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgaWYgKHR5cGVvZiBvYmpba2V5XSAhPSAnb2JqZWN0Jykge1xuICAgICAgICBvYmpba2V5XSA9IE1hdGgucm91bmQoK29ialtrZXldKSArIGAgJHt1bml0fWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gb2JqW2tleV0pIHtcbiAgICAgICAgICBvYmpba2V5XVtwcm9wXSA9IE1hdGgucm91bmQoK29ialtrZXldW3Byb3BdKSArIGAgJHt1bml0fWA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvYmpba2V5XSkpIHtcbiAgICAgIGZvciAoY29uc3QgaXRlcmF0b3Igb2Ygb2JqW2tleV0pIHtcbiAgICAgICAgcmVjKGl0ZXJhdG9yLCBjb25kaXRpb25BcnJheSwgdW5pdCk7XG4gICAgICB9XG5cbiAgICB9IGVsc2UgaWYodHlwZW9mIG9ialtrZXldID09ICdvYmplY3QnKSB7XG4gICAgICByZWMob2JqW2tleV0sIGNvbmRpdGlvbkFycmF5LCB1bml0KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmV0dXJuQ2l0eUNvb3JkKGN1cnJlbnRDaXR5TmFtZSkge1xuICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjdXJyZW50Q2l0eU5hbWV9JmFwcGlkPTc1ODNmZDRjODBmMWY4ZTc1ZmUwM2YxNGQxMjFlY2UwYCwge21vZGU6ICdjb3JzJ30pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmNvb3JkKVxufVxuXG5mdW5jdGlvbiBhZGRJbmZvSW50b1RoZVNpdGUob2JqLCBjdXJyZW50Q2l0eU5hbWUpIHtcbiAgc2V0VG9kYXlXZWF0aGVyKG9iai5jdXJyZW50LCBvYmouaG91cmx5LCBjdXJyZW50Q2l0eU5hbWUpO1xuICBzZXRDb21tb25JbmZvKG9iai5jdXJyZW50KTtcbiAgc2V0RGFpbHlXZWF0aGVyKG9iai5kYWlseSlcbn1cblxuZnVuY3Rpb24gZGVsZXRlSW5mb0Zyb21UaGVTaXRlKCkge1xuICBjb25zdCB3ZWF0aGVySWNvbnMgPSB0b2RheVdlYXRoZXIucXVlcnlTZWxlY3RvckFsbCgnLndlYXRoZXJJY29ucycpO1xuICBjb25zdCBjb21tb25XZWF0aGVySW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tb25XZWF0aGVySW5mbycpO1xuICBjb25zdCB0YWJsZUxpbmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYmxlTGluZScpO1xuXG4gIHdlYXRoZXJJY29ucy5mb3JFYWNoKGVsZW0gPT4gZWxlbS5yZW1vdmUoKSk7XG4gIGNvbW1vbldlYXRoZXJJbmZvLmZvckVhY2goZWxlbSA9PiBlbGVtLnJlbW92ZSgpKTtcbiAgdGFibGVMaW5lcy5mb3JFYWNoKGVsZW0gPT4gZWxlbS5yZW1vdmUoKSk7XG59XG5cbmJ0blVuaXRzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcbiAgYnRuVW5pdHMudGV4dENvbnRlbnQgPSAobWFpbk9iai5jdXJyZW50VW5pdCA9PSAnS2VsdmluJykgPyAnwrDQoScgOiAnSyc7XG4gIGNvbnN0IHRlbXBBcnIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGVtcCcpO1xuICBtYWluT2JqLmNuYW5nZVVuaXQodGVtcEFycilcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==