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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\nbody {\n  font-size: 16px;\n}\n.container {\n  padding: 3vmin 5vmin;\n  display: flex;\n  flex-wrap: wrap;\n}\nheader {\n  background: hsl(0, 0%, 12%);\n  color: white;\n}\nheader .container {\n  justify-content: space-between;\n}\nheader .container #searchBox {\n  width: 50%;\n  display: flex;\n}\nheader .container #searchBox input {\n  flex-grow: 1;\n  min-width: 0;\n  padding-left: 1vmin;\n}\nheader .container #searchBox button {\n  padding: 1vmin;\n}\nheader .container #siteHeadline {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 30vmin;\n  font-weight: 900;\n  font-size: 3vmin;\n}\nheader .container #units {\n  width: 10vmin;\n  display: flex;\n}\nheader .container #units button {\n  flex-grow: 1;\n}\n#todayWeather .container {\n  justify-content: space-between;\n}\n#todayWeather .container #currentWeather {\n  padding-left: 3vmin;\n  padding-right: 3vmin;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n#todayWeather .container #currentWeather > * {\n  margin-bottom: 2vmin;\n}\n#todayWeather .container #currentWeather #mainWeather,\n#todayWeather .container #currentWeather .temp {\n  font-size: 1.4em;\n}\n#todayWeather .container #hourlyWeather {\n  display: flex;\n  width: 70%;\n  overflow-x: scroll;\n  padding-top: 2vmin;\n  padding-bottom: 2vmin;\n}\n#todayWeather .container #hourlyWeather > * {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n#todayWeather .container #hourlyWeather .weatherIcons > * {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#todayWeather .container #hourlyWeather .weatherIcons .weatherImg {\n  width: 60px;\n  height: 60px;\n  background: hsl(0, 0%, 80%);\n  background-position: center center;\n  background-size: contain;\n  margin-top: 3vmin;\n  margin-bottom: 3vmin;\n}\n#commonInfo .container {\n  display: flex;\n  flex-direction: column;\n  background: hsl(0, 0%, 12%);\n  color: white;\n}\n#commonInfo .container > div {\n  display: flex;\n  justify-content: space-between;\n}\n#commonInfo .container > div > div {\n  width: 17vmin;\n  display: flex;\n  flex-direction: column;\n}\n#commonInfo .container > div > div > * {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n}\n#commonInfo .container > div > div h4 {\n  margin-bottom: 1vmin;\n}\n#commonInfo .container > div > div span {\n  margin-top: auto;\n}\n#commonInfo .container > div:first-of-type {\n  margin-bottom: 2vmin;\n}\n#dailyWeather .container table {\n  width: 100%;\n  text-align: center;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n#dailyWeather .container table img {\n  width: 10vmin;\n  height: 10vmin;\n  background: hsl(0, 0%, 80%);\n  margin-top: 1.5vmin;\n  margin-bottom: 1vmin;\n}\n#dailyWeather .container table tr:not(:last-of-type) td,\n#dailyWeather .container table tr:not(:last-of-type) th {\n  border-bottom: gray solid 1px;\n}\nfooter .container {\n  background: hsl(0, 0%, 12%);\n  justify-content: center;\n}\nfooter .container a {\n  color: white;\n  text-decoration: none;\n}\n@media screen and (max-width: 580px) {\n  header .container #units {\n    width: 100%;\n    margin-top: 2vmin;\n  }\n  header .container #units button {\n    padding: 1vmin;\n  }\n  header .container #hourlyWeather {\n    width: 100%;\n  }\n  header .container #searchBox {\n    width: 60%;\n  }\n  header .container #siteHeadline {\n    font-size: 3.5vmin;\n  }\n  #todayWeather .container #currentWeather {\n    width: 100%;\n  }\n  #todayWeather .container #hourlyWeather {\n    width: 100%;\n  }\n  #commonInfo .container {\n    flex-direction: row;\n    justify-content: space-evenly;\n  }\n  #commonInfo .container div {\n    flex-direction: column;\n  }\n  #commonInfo .container div > div {\n    width: 25vmin;\n  }\n  #commonInfo .container div > div:not(:last-of-type) {\n    margin-bottom: 2vmin;\n  }\n  #commonInfo .container > div:first-of-type {\n    margin-bottom: 0;\n  }\n}\n@media screen and (max-width: 450px) {\n  header .container #siteHeadline {\n    width: 100%;\n  }\n  header .container #searchBox {\n    margin-top: 2vmin;\n    width: 100%;\n  }\n  header .container #siteHeadline {\n    font-size: 4vmin;\n  }\n  #commonInfo .container div > div {\n    width: 35vmin;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.less"],"names":[],"mappings":"AAKA;EACE,sBAAA;EACA,UAAA;EACA,SAAA;AAJF;AAOA;EACE,eAAA;AALF;AAQA;EACE,oBAAA;EACA,aAAA;EACA,eAAA;AANF;AASA;EACE,2BAAA;EACA,YAAA;AAPF;AASE;EACE,8BAAA;AAPJ;AASI;EACE,UAAA;EACA,aAAA;AAPN;AASM;EACE,YAAA;EACA,YAAA;EACA,mBAAA;AAPR;AAUM;EACE,cAAA;AARR;AAYI;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;EACA,gBAAA;EACA,gBAAA;AAVN;AAaI;EACE,aAAA;EACA,aAAA;AAXN;AAaM;EACE,YAAA;AAXR;AAiBA;EACE,8BAAA;AAfF;AAiBE;EACE,mBAAA;EACA,oBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;AAfJ;AAiBI;EACE,oBAAA;AAfN;AAkBI;;EAEE,gBAAA;AAhBN;AAoBE;EACE,aAAA;EACA,UAAA;EACA,kBAAA;EACA,kBAAA;EACA,qBAAA;AAlBJ;AAoBI;EACE,kBAAA;EACA,mBAAA;AAlBN;AAuBM;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;AArBR;AAwBM;EAvGJ,WAAA;EACA,YAAA;EAwGM,2BAAA;EACA,kCAAA;EACA,wBAAA;EACA,iBAAA;EACA,oBAAA;AArBR;AA2BA;EACE,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,YAAA;AAzBF;AA2BE;EACE,aAAA;EACA,8BAAA;AAzBJ;AA2BI;EACE,aAAA;EACA,aAAA;EACA,sBAAA;AAzBN;AA2BM;EACE,aAAA;EACA,uBAAA;EACA,kBAAA;AAzBR;AA4BM;EACE,oBAAA;AA1BR;AA6BM;EACE,gBAAA;AA3BR;AAiCE;EACE,oBAAA;AA/BJ;AAqCE;EACE,WAAA;EACA,kBAAA;EACA,yBAAA;EACA,iBAAA;AAnCJ;AAqCI;EAhKF,aAAA;EACA,cAAA;EAiKI,2BAAA;EACA,mBAAA;EACA,oBAAA;AAlCN;AAsCM;;EAEA,6BAAA;AApCN;AA0CA;EACE,2BAAA;EACA,uBAAA;AAxCF;AA0CE;EACE,YAAA;EACA,qBAAA;AAxCJ;AA4CA;EAEI;IACE,WAAA;IACA,iBAAA;EA3CJ;EA6CI;IACE,cAAA;EA3CN;EA+CE;IACE,WAAA;EA7CJ;EAgDE;IACE,UAAA;EA9CJ;EAiDE;IACE,kBAAA;EA/CJ;EAqDE;IACE,WAAA;EAnDJ;EAsDE;IACE,WAAA;EApDJ;EAwDA;IACE,mBAAA;IACA,6BAAA;EAtDF;EAwDE;IACE,sBAAA;EAtDJ;EAwDI;IACE,aAAA;EAtDN;EAyDI;IACE,oBAAA;EAvDN;EA2DE;IACE,gBAAA;EAzDJ;AACF;AA+DA;EAEI;IACE,WAAA;EA9DJ;EAiEE;IACE,iBAAA;IACA,WAAA;EA/DJ;EAkEE;IACE,gBAAA;EAhEJ;EAwEI;IACE,aAAA;EAtEN;AACF","sourcesContent":[".size(@width, @height) {\n  width: @width;\n  height: @height;\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-size: 16px;\n}\n\n.container {\n  padding: 3vmin 5vmin;\n  display: flex;\n  flex-wrap: wrap;\n}\n\nheader {\n  background: hsl(0, 0%, 12%);\n  color: white;\n\n  & .container {\n    justify-content: space-between;\n    \n    & #searchBox {\n      width: 50%;\n      display: flex;\n    \n      & input {\n        flex-grow: 1;\n        min-width: 0;\n        padding-left: 1vmin;\n      }\n    \n      & button {\n        padding: 1vmin;\n      }\n    }\n\n    & #siteHeadline {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: 30vmin;\n      font-weight: 900;\n      font-size: 3vmin;\n    }\n\n    & #units {\n      width: 10vmin;\n      display: flex;\n    \n      & button {\n        flex-grow: 1;\n      }\n    }\n  }\n}\n\n#todayWeather .container {\n  justify-content: space-between;\n\n  & #currentWeather {\n    padding-left: 3vmin;\n    padding-right: 3vmin;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    & > * {\n      margin-bottom: 2vmin;\n    }\n\n    & #mainWeather,\n    & .temp {\n      font-size: 1.4em\n    }\n  }\n\n  & #hourlyWeather {\n    display: flex;\n    width: 70%;\n    overflow-x: scroll;\n    padding-top: 2vmin;\n    padding-bottom: 2vmin;\n  \n    & > * {\n      padding-left: 30px;\n      padding-right: 30px;\n    }\n\n    & .weatherIcons {\n\n      & > * {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      & .weatherImg {\n        .size(60px, 60px);\n        background: hsl(0, 0%, 80%);\n        background-position: center center;\n        background-size: contain;\n        margin-top: 3vmin;\n        margin-bottom: 3vmin;\n      }\n    }\n  }\n}\n\n#commonInfo .container {\n  display: flex;\n  flex-direction: column;\n  background: hsl(0, 0%, 12%);\n  color: white;\n\n  & > div {\n    display: flex;\n    justify-content: space-between;\n\n    & > div {\n      width: 17vmin;\n      display: flex;\n      flex-direction: column;\n\n      & > * {\n        display: flex;\n        justify-content: center;\n        text-align: center;\n      }\n\n      & h4 {\n        margin-bottom: 1vmin;\n      }\n\n      & span {\n        margin-top: auto;\n      }\n\n    }\n  }\n\n  & > div:first-of-type {\n    margin-bottom: 2vmin;\n  }\n}\n\n#dailyWeather .container {\n  \n  & table {\n    width: 100%;\n    text-align: center;\n    border-collapse: collapse;\n    border-spacing: 0;\n\n    & img {\n      .size(10vmin, 10vmin);\n      background: hsl(0, 0%, 80%);\n      margin-top: 1.5vmin;\n      margin-bottom: 1vmin;\n    }\n\n    & tr:not(:last-of-type) {\n      & td,\n      & th {\n      border-bottom: gray solid 1px;\n    }\n    }\n  }\n}\n\nfooter .container {\n  background: hsl(0, 0%, 12%);\n  justify-content: center;\n\n  & a {\n    color: white;\n    text-decoration: none;\n  }\n}\n\n@media screen and (max-width: 580px){\n  header .container {\n    & #units {\n      width: 100%;\n      margin-top: 2vmin;\n\n      & button {\n        padding: 1vmin;\n      }\n    }\n\n    & #hourlyWeather {\n      width: 100%;\n    }\n\n    & #searchBox {\n      width: 60%;\n    }\n\n    & #siteHeadline {\n      font-size: 3.5vmin;\n    }\n  }\n\n  #todayWeather .container {\n\n    & #currentWeather {\n      width: 100%;\n    }\n\n    & #hourlyWeather {\n      width: 100%;\n    }\n  }\n\n  #commonInfo .container {\n    flex-direction: row;\n    justify-content: space-evenly;\n\n    & div {\n      flex-direction: column;\n\n      & > div {\n        width: 25vmin;\n      }\n\n      & > div:not(:last-of-type) {\n        margin-bottom: 2vmin;\n      }\n    }\n\n    & > div:first-of-type {\n      margin-bottom: 0;\n    }\n\n\n  }\n}\n\n@media screen and (max-width: 450px){\n  header .container {\n    & #siteHeadline {\n      width: 100%;\n    }\n\n    & #searchBox {\n      margin-top: 2vmin;\n      width: 100%;\n    }\n\n    & #siteHeadline {\n      font-size: 4vmin;\n    }\n  }\n\n  #commonInfo .container {\n    \n    & div {\n\n      & > div {\n        width: 35vmin;\n      }\n    }\n  }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2NyZWF0ZS1odG1sLW5vZGUvY3JlYXRlSHRtbE5vZGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9zdHlsZS5sZXNzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3N0eWxlLmxlc3M/ZWE2OCIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvc2V0Q29tbW9uSW5mby5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3NldERhaWx5V2VhdGhlckJsb2NrLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvdHVuZVRvZGF5V2VhdGhlckJsb2NrLmpzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7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b24gY3JlYXRlRUxlbShwYXJlbnRFbGVtLCBjdXJyZW50RWxlbSwgLi4uYXJyYXlBdHRyKSB7XG4gIGxldCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChjdXJyZW50RWxlbSk7XHRcbiAgcGFyZW50RWxlbS5hcHBlbmRDaGlsZChlbGVtKTtcdFxuICBhcnJheUF0dHIgPSBhcnJheUF0dHIubWFwKGl0ZW0gPT4gaXRlbS5zcGxpdCgnOicpKVxuICBhcnJheUF0dHIuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpZiAoaXRlbS5sZW5ndGggPT0gMSkge1xuICAgICAgZWxlbS50ZXh0Q29udGVudCA9IGAke2l0ZW19YFxuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtLnNldEF0dHJpYnV0ZShgJHtpdGVtWzBdfWAsIGAke2l0ZW1bMV19YCk7XG4gICAgfVxuICB9KVxuICByZXR1cm4gZWxlbTtcbn1cblxuZXhwb3J0IHtjcmVhdGVFTGVtIGFzIGRlZmF1bHR9IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLmNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAzdm1pbiA1dm1pbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDEyJSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbmhlYWRlciAuY29udGFpbmVyIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuaGVhZGVyIC5jb250YWluZXIgI3NlYXJjaEJveCB7XFxuICB3aWR0aDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuaGVhZGVyIC5jb250YWluZXIgI3NlYXJjaEJveCBpbnB1dCB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBtaW4td2lkdGg6IDA7XFxuICBwYWRkaW5nLWxlZnQ6IDF2bWluO1xcbn1cXG5oZWFkZXIgLmNvbnRhaW5lciAjc2VhcmNoQm94IGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxdm1pbjtcXG59XFxuaGVhZGVyIC5jb250YWluZXIgI3NpdGVIZWFkbGluZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDMwdm1pbjtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LXNpemU6IDN2bWluO1xcbn1cXG5oZWFkZXIgLmNvbnRhaW5lciAjdW5pdHMge1xcbiAgd2lkdGg6IDEwdm1pbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbmhlYWRlciAuY29udGFpbmVyICN1bml0cyBidXR0b24ge1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG4jdG9kYXlXZWF0aGVyIC5jb250YWluZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4jdG9kYXlXZWF0aGVyIC5jb250YWluZXIgI2N1cnJlbnRXZWF0aGVyIHtcXG4gIHBhZGRpbmctbGVmdDogM3ZtaW47XFxuICBwYWRkaW5nLXJpZ2h0OiAzdm1pbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4jdG9kYXlXZWF0aGVyIC5jb250YWluZXIgI2N1cnJlbnRXZWF0aGVyID4gKiB7XFxuICBtYXJnaW4tYm90dG9tOiAydm1pbjtcXG59XFxuI3RvZGF5V2VhdGhlciAuY29udGFpbmVyICNjdXJyZW50V2VhdGhlciAjbWFpbldlYXRoZXIsXFxuI3RvZGF5V2VhdGhlciAuY29udGFpbmVyICNjdXJyZW50V2VhdGhlciAudGVtcCB7XFxuICBmb250LXNpemU6IDEuNGVtO1xcbn1cXG4jdG9kYXlXZWF0aGVyIC5jb250YWluZXIgI2hvdXJseVdlYXRoZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA3MCU7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICBwYWRkaW5nLXRvcDogMnZtaW47XFxuICBwYWRkaW5nLWJvdHRvbTogMnZtaW47XFxufVxcbiN0b2RheVdlYXRoZXIgLmNvbnRhaW5lciAjaG91cmx5V2VhdGhlciA+ICoge1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMzBweDtcXG59XFxuI3RvZGF5V2VhdGhlciAuY29udGFpbmVyICNob3VybHlXZWF0aGVyIC53ZWF0aGVySWNvbnMgPiAqIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiN0b2RheVdlYXRoZXIgLmNvbnRhaW5lciAjaG91cmx5V2VhdGhlciAud2VhdGhlckljb25zIC53ZWF0aGVySW1nIHtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYmFja2dyb3VuZDogaHNsKDAsIDAlLCA4MCUpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIG1hcmdpbi10b3A6IDN2bWluO1xcbiAgbWFyZ2luLWJvdHRvbTogM3ZtaW47XFxufVxcbiNjb21tb25JbmZvIC5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDEyJSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbiNjb21tb25JbmZvIC5jb250YWluZXIgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuI2NvbW1vbkluZm8gLmNvbnRhaW5lciA+IGRpdiA+IGRpdiB7XFxuICB3aWR0aDogMTd2bWluO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbiNjb21tb25JbmZvIC5jb250YWluZXIgPiBkaXYgPiBkaXYgPiAqIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2NvbW1vbkluZm8gLmNvbnRhaW5lciA+IGRpdiA+IGRpdiBoNCB7XFxuICBtYXJnaW4tYm90dG9tOiAxdm1pbjtcXG59XFxuI2NvbW1vbkluZm8gLmNvbnRhaW5lciA+IGRpdiA+IGRpdiBzcGFuIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxufVxcbiNjb21tb25JbmZvIC5jb250YWluZXIgPiBkaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuICBtYXJnaW4tYm90dG9tOiAydm1pbjtcXG59XFxuI2RhaWx5V2VhdGhlciAuY29udGFpbmVyIHRhYmxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG4jZGFpbHlXZWF0aGVyIC5jb250YWluZXIgdGFibGUgaW1nIHtcXG4gIHdpZHRoOiAxMHZtaW47XFxuICBoZWlnaHQ6IDEwdm1pbjtcXG4gIGJhY2tncm91bmQ6IGhzbCgwLCAwJSwgODAlKTtcXG4gIG1hcmdpbi10b3A6IDEuNXZtaW47XFxuICBtYXJnaW4tYm90dG9tOiAxdm1pbjtcXG59XFxuI2RhaWx5V2VhdGhlciAuY29udGFpbmVyIHRhYmxlIHRyOm5vdCg6bGFzdC1vZi10eXBlKSB0ZCxcXG4jZGFpbHlXZWF0aGVyIC5jb250YWluZXIgdGFibGUgdHI6bm90KDpsYXN0LW9mLXR5cGUpIHRoIHtcXG4gIGJvcmRlci1ib3R0b206IGdyYXkgc29saWQgMXB4O1xcbn1cXG5mb290ZXIgLmNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDEyJSk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuZm9vdGVyIC5jb250YWluZXIgYSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XFxuICBoZWFkZXIgLmNvbnRhaW5lciAjdW5pdHMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLXRvcDogMnZtaW47XFxuICB9XFxuICBoZWFkZXIgLmNvbnRhaW5lciAjdW5pdHMgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMXZtaW47XFxuICB9XFxuICBoZWFkZXIgLmNvbnRhaW5lciAjaG91cmx5V2VhdGhlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgaGVhZGVyIC5jb250YWluZXIgI3NlYXJjaEJveCB7XFxuICAgIHdpZHRoOiA2MCU7XFxuICB9XFxuICBoZWFkZXIgLmNvbnRhaW5lciAjc2l0ZUhlYWRsaW5lIHtcXG4gICAgZm9udC1zaXplOiAzLjV2bWluO1xcbiAgfVxcbiAgI3RvZGF5V2VhdGhlciAuY29udGFpbmVyICNjdXJyZW50V2VhdGhlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgI3RvZGF5V2VhdGhlciAuY29udGFpbmVyICNob3VybHlXZWF0aGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAjY29tbW9uSW5mbyAuY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICB9XFxuICAjY29tbW9uSW5mbyAuY29udGFpbmVyIGRpdiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAjY29tbW9uSW5mbyAuY29udGFpbmVyIGRpdiA+IGRpdiB7XFxuICAgIHdpZHRoOiAyNXZtaW47XFxuICB9XFxuICAjY29tbW9uSW5mbyAuY29udGFpbmVyIGRpdiA+IGRpdjpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgICBtYXJnaW4tYm90dG9tOiAydm1pbjtcXG4gIH1cXG4gICNjb21tb25JbmZvIC5jb250YWluZXIgPiBkaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XFxuICBoZWFkZXIgLmNvbnRhaW5lciAjc2l0ZUhlYWRsaW5lIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICBoZWFkZXIgLmNvbnRhaW5lciAjc2VhcmNoQm94IHtcXG4gICAgbWFyZ2luLXRvcDogMnZtaW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgaGVhZGVyIC5jb250YWluZXIgI3NpdGVIZWFkbGluZSB7XFxuICAgIGZvbnQtc2l6ZTogNHZtaW47XFxuICB9XFxuICAjY29tbW9uSW5mbyAuY29udGFpbmVyIGRpdiA+IGRpdiB7XFxuICAgIHdpZHRoOiAzNXZtaW47XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5sZXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUtBO0VBQ0Usc0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUpGO0FBT0E7RUFDRSxlQUFBO0FBTEY7QUFRQTtFQUNFLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFORjtBQVNBO0VBQ0UsMkJBQUE7RUFDQSxZQUFBO0FBUEY7QUFTRTtFQUNFLDhCQUFBO0FBUEo7QUFTSTtFQUNFLFVBQUE7RUFDQSxhQUFBO0FBUE47QUFTTTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFQUjtBQVVNO0VBQ0UsY0FBQTtBQVJSO0FBWUk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBVk47QUFhSTtFQUNFLGFBQUE7RUFDQSxhQUFBO0FBWE47QUFhTTtFQUNFLFlBQUE7QUFYUjtBQWlCQTtFQUNFLDhCQUFBO0FBZkY7QUFpQkU7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWZKO0FBaUJJO0VBQ0Usb0JBQUE7QUFmTjtBQWtCSTs7RUFFRSxnQkFBQTtBQWhCTjtBQW9CRTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBbEJKO0FBb0JJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQWxCTjtBQXVCTTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBckJSO0FBd0JNO0VBdkdKLFdBQUE7RUFDQSxZQUFBO0VBd0dNLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFyQlI7QUEyQkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUF6QkY7QUEyQkU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUF6Qko7QUEyQkk7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBekJOO0FBMkJNO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUF6QlI7QUE0Qk07RUFDRSxvQkFBQTtBQTFCUjtBQTZCTTtFQUNFLGdCQUFBO0FBM0JSO0FBaUNFO0VBQ0Usb0JBQUE7QUEvQko7QUFxQ0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBbkNKO0FBcUNJO0VBaEtGLGFBQUE7RUFDQSxjQUFBO0VBaUtJLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQWxDTjtBQXNDTTs7RUFFQSw2QkFBQTtBQXBDTjtBQTBDQTtFQUNFLDJCQUFBO0VBQ0EsdUJBQUE7QUF4Q0Y7QUEwQ0U7RUFDRSxZQUFBO0VBQ0EscUJBQUE7QUF4Q0o7QUE0Q0E7RUFFSTtJQUNFLFdBQUE7SUFDQSxpQkFBQTtFQTNDSjtFQTZDSTtJQUNFLGNBQUE7RUEzQ047RUErQ0U7SUFDRSxXQUFBO0VBN0NKO0VBZ0RFO0lBQ0UsVUFBQTtFQTlDSjtFQWlERTtJQUNFLGtCQUFBO0VBL0NKO0VBcURFO0lBQ0UsV0FBQTtFQW5ESjtFQXNERTtJQUNFLFdBQUE7RUFwREo7RUF3REE7SUFDRSxtQkFBQTtJQUNBLDZCQUFBO0VBdERGO0VBd0RFO0lBQ0Usc0JBQUE7RUF0REo7RUF3REk7SUFDRSxhQUFBO0VBdEROO0VBeURJO0lBQ0Usb0JBQUE7RUF2RE47RUEyREU7SUFDRSxnQkFBQTtFQXpESjtBQUNGO0FBK0RBO0VBRUk7SUFDRSxXQUFBO0VBOURKO0VBaUVFO0lBQ0UsaUJBQUE7SUFDQSxXQUFBO0VBL0RKO0VBa0VFO0lBQ0UsZ0JBQUE7RUFoRUo7RUF3RUk7SUFDRSxhQUFBO0VBdEVOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNpemUoQHdpZHRoLCBAaGVpZ2h0KSB7XFxuICB3aWR0aDogQHdpZHRoO1xcbiAgaGVpZ2h0OiBAaGVpZ2h0O1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAzdm1pbiA1dm1pbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDEyJSk7XFxuICBjb2xvcjogd2hpdGU7XFxuXFxuICAmIC5jb250YWluZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIFxcbiAgICAmICNzZWFyY2hCb3gge1xcbiAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgXFxuICAgICAgJiBpbnB1dCB7XFxuICAgICAgICBmbGV4LWdyb3c6IDE7XFxuICAgICAgICBtaW4td2lkdGg6IDA7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDF2bWluO1xcbiAgICAgIH1cXG4gICAgXFxuICAgICAgJiBidXR0b24ge1xcbiAgICAgICAgcGFkZGluZzogMXZtaW47XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgICYgI3NpdGVIZWFkbGluZSB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIHdpZHRoOiAzMHZtaW47XFxuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgICBmb250LXNpemU6IDN2bWluO1xcbiAgICB9XFxuXFxuICAgICYgI3VuaXRzIHtcXG4gICAgICB3aWR0aDogMTB2bWluO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIFxcbiAgICAgICYgYnV0dG9uIHtcXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuI3RvZGF5V2VhdGhlciAuY29udGFpbmVyIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICYgI2N1cnJlbnRXZWF0aGVyIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAzdm1pbjtcXG4gICAgcGFkZGluZy1yaWdodDogM3ZtaW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICAmID4gKiB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMnZtaW47XFxuICAgIH1cXG5cXG4gICAgJiAjbWFpbldlYXRoZXIsXFxuICAgICYgLnRlbXAge1xcbiAgICAgIGZvbnQtc2l6ZTogMS40ZW1cXG4gICAgfVxcbiAgfVxcblxcbiAgJiAjaG91cmx5V2VhdGhlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gICAgcGFkZGluZy10b3A6IDJ2bWluO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnZtaW47XFxuICBcXG4gICAgJiA+ICoge1xcbiAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbiAgICB9XFxuXFxuICAgICYgLndlYXRoZXJJY29ucyB7XFxuXFxuICAgICAgJiA+ICoge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICB9XFxuXFxuICAgICAgJiAud2VhdGhlckltZyB7XFxuICAgICAgICAuc2l6ZSg2MHB4LCA2MHB4KTtcXG4gICAgICAgIGJhY2tncm91bmQ6IGhzbCgwLCAwJSwgODAlKTtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgICAgICBtYXJnaW4tdG9wOiAzdm1pbjtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDN2bWluO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4jY29tbW9uSW5mbyAuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZDogaHNsKDAsIDAlLCAxMiUpO1xcbiAgY29sb3I6IHdoaXRlO1xcblxcbiAgJiA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgJiA+IGRpdiB7XFxuICAgICAgd2lkdGg6IDE3dm1pbjtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgICAgJiA+ICoge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIH1cXG5cXG4gICAgICAmIGg0IHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDF2bWluO1xcbiAgICAgIH1cXG5cXG4gICAgICAmIHNwYW4ge1xcbiAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgICB9XFxuXFxuICAgIH1cXG4gIH1cXG5cXG4gICYgPiBkaXY6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDJ2bWluO1xcbiAgfVxcbn1cXG5cXG4jZGFpbHlXZWF0aGVyIC5jb250YWluZXIge1xcbiAgXFxuICAmIHRhYmxlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxuXFxuICAgICYgaW1nIHtcXG4gICAgICAuc2l6ZSgxMHZtaW4sIDEwdm1pbik7XFxuICAgICAgYmFja2dyb3VuZDogaHNsKDAsIDAlLCA4MCUpO1xcbiAgICAgIG1hcmdpbi10b3A6IDEuNXZtaW47XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMXZtaW47XFxuICAgIH1cXG5cXG4gICAgJiB0cjpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgICAgICYgdGQsXFxuICAgICAgJiB0aCB7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogZ3JheSBzb2xpZCAxcHg7XFxuICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5mb290ZXIgLmNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDEyJSk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICYgYSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCl7XFxuICBoZWFkZXIgLmNvbnRhaW5lciB7XFxuICAgICYgI3VuaXRzIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBtYXJnaW4tdG9wOiAydm1pbjtcXG5cXG4gICAgICAmIGJ1dHRvbiB7XFxuICAgICAgICBwYWRkaW5nOiAxdm1pbjtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgJiAjaG91cmx5V2VhdGhlciB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgJiAjc2VhcmNoQm94IHtcXG4gICAgICB3aWR0aDogNjAlO1xcbiAgICB9XFxuXFxuICAgICYgI3NpdGVIZWFkbGluZSB7XFxuICAgICAgZm9udC1zaXplOiAzLjV2bWluO1xcbiAgICB9XFxuICB9XFxuXFxuICAjdG9kYXlXZWF0aGVyIC5jb250YWluZXIge1xcblxcbiAgICAmICNjdXJyZW50V2VhdGhlciB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgJiAjaG91cmx5V2VhdGhlciB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG4gIH1cXG5cXG4gICNjb21tb25JbmZvIC5jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXG4gICAgJiBkaXYge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgICAgJiA+IGRpdiB7XFxuICAgICAgICB3aWR0aDogMjV2bWluO1xcbiAgICAgIH1cXG5cXG4gICAgICAmID4gZGl2Om5vdCg6bGFzdC1vZi10eXBlKSB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAydm1pbjtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgJiA+IGRpdjpmaXJzdC1vZi10eXBlIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICB9XFxuXFxuXFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KXtcXG4gIGhlYWRlciAuY29udGFpbmVyIHtcXG4gICAgJiAjc2l0ZUhlYWRsaW5lIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAmICNzZWFyY2hCb3gge1xcbiAgICAgIG1hcmdpbi10b3A6IDJ2bWluO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgICYgI3NpdGVIZWFkbGluZSB7XFxuICAgICAgZm9udC1zaXplOiA0dm1pbjtcXG4gICAgfVxcbiAgfVxcblxcbiAgI2NvbW1vbkluZm8gLmNvbnRhaW5lciB7XFxuICAgIFxcbiAgICAmIGRpdiB7XFxuXFxuICAgICAgJiA+IGRpdiB7XFxuICAgICAgICB3aWR0aDogMzV2bWluO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUubGVzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IGNyZWF0ZUVsZW0gZnJvbSAnY3JlYXRlLWh0bWwtbm9kZSdcblxuY29uc3QgY29tbW9uSW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tb25JbmZvJyk7XG5cbmZ1bmN0aW9uIHNldENvbW1vbkluZm8ob2JqKSB7XG4gIGNvbnN0IGNvbW1vbkluZm9FbGVtZW50cyA9IGNvbW1vbkluZm8ucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1vbkluZm9FbGVtZW50Jyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21tb25JbmZvRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgb2JqRWxlbSA9IG9ialtjb21tb25JbmZvRWxlbWVudHNbaV0uaWRdO1xuXG4gICAgY29uc3QgY2hpbGRFbGVtID0gY3JlYXRlRWxlbShjb21tb25JbmZvRWxlbWVudHNbaV0sICdzcGFuJywgJ2NsYXNzOmNvbW1vbldlYXRoZXJJbmZvJyk7XG4gICAgY2hpbGRFbGVtLnRleHRDb250ZW50ID0gYCR7b2JqRWxlbX1gO1xuXG4gICAgaWYgKHR5cGVvZiBvYmpFbGVtID09ICdzdHJpbmcnICYmIG9iakVsZW0uaW5jbHVkZXMoJ0snKSkge1xuICAgICAgY2hpbGRFbGVtLmNsYXNzTGlzdC5hZGQoJ3RlbXAnKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzZXRDb21tb25JbmZvIiwiaW1wb3J0IGNyZWF0ZUVsZW0gZnJvbSAnY3JlYXRlLWh0bWwtbm9kZSdcblxuY29uc3QgZGFpbHlXZWF0aGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhaWx5V2VhdGhlcicpO1xuXG5mdW5jdGlvbiBzZXREYWlseVdlYXRoZXIoYXJyYXkpIHtcbiAgY29uc3QgZGF5c0FycmF5ID0gW1xuICAgICdTdW5kYXknLCBcbiAgICAnTW9uZGF5JywgXG4gICAgJ1R1ZXNkYXknLCBcbiAgICAnV2VkbmVzZGF5JywgXG4gICAgJ1RodXJzZGF5JywgXG4gICAgJ0ZyaWRheScsIFxuICAgICdTYXR1cmRheSdcbiAgXVxuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0YWJsZSA9IGRhaWx5V2VhdGhlci5xdWVyeVNlbGVjdG9yKCd0YWJsZScpO1xuICAgIGNvbnN0IHRhYmxlTGluZSA9IGNyZWF0ZUVsZW0odGFibGUsICd0cicsICdjbGFzczp0YWJsZUxpbmUnKTtcbiAgICBjcmVhdGVFbGVtKHRhYmxlTGluZSwgJ3RkJywgYCR7ZGF5c0FycmF5W25ldyBEYXRlKGFycmF5W2ldLmR0ICogMTAwMCkuZ2V0RGF5KCldfWApO1xuXG4gICAgY29uc3Qgd2VhdGhlckljb25DZWlsID0gY3JlYXRlRWxlbSh0YWJsZUxpbmUsICd0ZCcpO1xuICAgIGNvbnN0IHdlYXRoZXJJY29uID0gY3JlYXRlRWxlbSh3ZWF0aGVySWNvbkNlaWwsICdpbWcnKTtcbiAgICB3ZWF0aGVySWNvbi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHthcnJheVtpXS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2A7XG5cbiAgICBjcmVhdGVFbGVtKHRhYmxlTGluZSwgJ3RkJywgYCR7YXJyYXlbaV0uaHVtaWRpdHl9YCk7XG5cbiAgICBjb25zdCB0ZW1wQmxvY2sgPSBjcmVhdGVFbGVtKHRhYmxlTGluZSwgJ3RkJyk7XG4gICAgY3JlYXRlRWxlbSh0ZW1wQmxvY2ssICdkaXYnLCBgJHthcnJheVtpXS50ZW1wLmRheX1gLCAnY2xhc3M6IHRlbXAnKTtcbiAgICBjcmVhdGVFbGVtKHRlbXBCbG9jaywgJ2RpdicsIGAke2FycmF5W2ldLnRlbXAubmlnaHR9YCwgJ2NsYXNzOiB0ZW1wJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2V0RGFpbHlXZWF0aGVyIiwiaW1wb3J0IGNyZWF0ZUVsZW0gZnJvbSAnY3JlYXRlLWh0bWwtbm9kZSdcblxuY29uc3QgdG9kYXlXZWF0aGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5V2VhdGhlcicpO1xuY29uc3QgbWFpbldlYXRoZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbldlYXRoZXInKVxuXG5mdW5jdGlvbiBzZXRUb2RheVdlYXRoZXIoY3VycmVudFdlYXRoZXIsIGhvdXJseVdlYXRoZXIsIGN1cnJlbnRDaXR5TmFtZSkge1xuICBjb25zdCBjaXR5TmFtZSA9IHRvZGF5V2VhdGhlci5xdWVyeVNlbGVjdG9yKCdoMScpO1xuICBjb25zdCB0ZW1wID0gdG9kYXlXZWF0aGVyLnF1ZXJ5U2VsZWN0b3IoJy50ZW1wJyk7XG4gIGNvbnN0IGhvdXJseVdlYXRoZXJCbG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob3VybHlXZWF0aGVyJyk7XG5cbiAgY2l0eU5hbWUudGV4dENvbnRlbnQgPSBjdXJyZW50Q2l0eU5hbWU7XG4gIG1haW5XZWF0aGVyLnRleHRDb250ZW50ID0gY3VycmVudFdlYXRoZXIud2VhdGhlclswXS5tYWluO1xuICB0ZW1wLnRleHRDb250ZW50ID0gY3VycmVudFdlYXRoZXIudGVtcDtcblxuICBjcmVhdGVXZWF0aGVyQ2VsbChob3VybHlXZWF0aGVyQmxvY2ssICdOb3cnLCBjdXJyZW50V2VhdGhlciwgY3VycmVudFdlYXRoZXIudGVtcClcblxuICBmb3IgKGxldCBpID0gMTsgaSA8IDI1OyBpKyspIHtcbiAgICBsZXQgaG91ciA9IG5ldyBEYXRlKGhvdXJseVdlYXRoZXJbaV0uZHQgKiAxMDAwKS5nZXRIb3VycygpO1xuXG4gICAgaWYgKGhvdXIgPCAxMCkge1xuICAgICAgaG91ciA9IGAwJHtob3VyfWBcbiAgICB9XG4gICAgaG91ciArPSBgOjAwYFxuXG4gICAgY29uc3QgdGVtcCA9IGhvdXJseVdlYXRoZXJbaV0udGVtcDtcbiAgICBjcmVhdGVXZWF0aGVyQ2VsbChob3VybHlXZWF0aGVyQmxvY2ssIGhvdXIsIGhvdXJseVdlYXRoZXJbaV0sIHRlbXApXG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlV2VhdGhlckNlbGwocGFyZW50RWxlbSwgaG91ciwgYXJyYXksIHRlbXApIHtcbiAgY29uc3QgZWxlbSA9IGNyZWF0ZUVsZW0ocGFyZW50RWxlbSwgJ2RpdicsICdjbGFzczp3ZWF0aGVySWNvbnMnKTtcbiAgY3JlYXRlRWxlbShlbGVtLCAnZGl2JykudGV4dENvbnRlbnQgPSBgJHtob3VyfWA7XG4gIFxuICBjb25zdCB3ZWF0aGVySW1nID0gY3JlYXRlRWxlbShlbGVtLCAnZGl2JywgJ2NsYXNzOndlYXRoZXJJbWcnKTtcbiAgd2VhdGhlckltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7YXJyYXkud2VhdGhlclswXS5pY29ufUAyeC5wbmcpYFxuICBjcmVhdGVFbGVtKGVsZW0sICdkaXYnLCBgJHt0ZW1wfWAsICdjbGFzczp0ZW1wJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNldFRvZGF5V2VhdGhlciIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUubGVzcyc7XG5pbXBvcnQgc2V0VG9kYXlXZWF0aGVyIGZyb20gJy4vdHVuZVRvZGF5V2VhdGhlckJsb2NrJ1xuaW1wb3J0IHNldENvbW1vbkluZm8gZnJvbSAnLi9zZXRDb21tb25JbmZvJ1xuaW1wb3J0IHNldERhaWx5V2VhdGhlciBmcm9tICcuL3NldERhaWx5V2VhdGhlckJsb2NrJ1xuXG5jb25zdCB0b2RheVdlYXRoZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXlXZWF0aGVyJyk7XG5jb25zdCB1bml0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bml0cycpO1xuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaEJ0bicpO1xuXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG5jb25zdCBidG5Vbml0cyA9IHVuaXRzLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuXG5sZXQgbWFpbk9iaiA9IHtcbiAgY3VycmVudFVuaXQ6ICdLZWx2aW4nLFxuICB0ZW1wQXJyS2V5czogWyd0ZW1wJywgJ2ZlZWxzX2xpa2UnLCAnZGV3X3BvaW50J10sXG4gIHBlcmNlbnRBcnJLZXlzOiBbJ2Nsb3VkcycsICdodW1pZGl0eSddLFxuICBwcmVzc3VyZUFycktleXM6IFsncHJlc3N1cmUnXSxcbiAgdmlzaWJpbGl0eUFycktleXM6IFsndmlzaWJpbGl0eSddLFxufTtcblxubWFpbk9iai5jbmFuZ2VVbml0ID0gZnVuY3Rpb24gKGFycikge1xuICBpZiAodGhpcy5jdXJyZW50VW5pdCA9PSAnS2VsdmluJykge1xuICAgIHRoaXMuY3VycmVudFVuaXQgPSAnQ2Vsc2l1cyc7XG4gICAgdGhpcy5jYWxjVmFsdWUoYXJyKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmN1cnJlbnRVbml0ID0gJ0tlbHZpbic7XG4gICAgdGhpcy5jYWxjVmFsdWUoYXJyKTtcbiAgfVxufVxuXG5tYWluT2JqLmNhbGNWYWx1ZSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgaWYgKHRoaXMuY3VycmVudFVuaXQgIT09ICdLZWx2aW4nKSB7XG4gICAgYXJyLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICBsZXQgc3BsaXRlZFN0cmluZyA9IGVsZW0udGV4dENvbnRlbnQuc3BsaXQoJyAnKTtcbiAgICAgIGVsZW0udGV4dENvbnRlbnQgPSAgTWF0aC5yb3VuZCgrc3BsaXRlZFN0cmluZ1swXSAtIDI3MywxNSkgKyAnIMKw0KEnO1xuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgYXJyLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICBsZXQgc3BsaXRlZFN0cmluZyA9IGVsZW0udGV4dENvbnRlbnQuc3BsaXQoJyAnKTtcbiAgICAgIGVsZW0udGV4dENvbnRlbnQgPSAgTWF0aC5yb3VuZCgrc3BsaXRlZFN0cmluZ1swXSArIDI3MywxNSkgKyAnIEsnO1xuICAgIH0pXG4gIH1cbn1cblxubWFpbk9iai5jaGFuZ2VGb3JtYXRWYWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCB0aGF0ID0gdGhpcy5tb2RpZmllZE9iai5jdXJyZW50O1xuXG4gIHRoYXQuc3VucmlzZSA9IGAke25ldyBEYXRlKHRoYXQuc3VucmlzZSAqIDEwMDApLmdldEhvdXJzKCl9OiR7bmV3IERhdGUodGhhdC5zdW5yaXNlICogMTAwMCkuZ2V0TWludXRlcygpfWA7XG4gIHRoYXQuc3Vuc2V0ID0gYCR7bmV3IERhdGUodGhhdC5zdW5zZXQgKiAxMDAwKS5nZXRIb3VycygpfToke25ldyBEYXRlKHRoYXQuc3Vuc2V0ICogMTAwMCkuZ2V0TWludXRlcygpfWA7XG4gIHRoYXQudmlzaWJpbGl0eSA9IGAke3RoYXQudmlzaWJpbGl0eSAvIDEwMDB9YDtcbn1cblxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHByb2Nlc3NpbmdSZXF1ZXN0KGlucHV0LnZhbHVlKSlcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHByb2Nlc3NpbmdSZXF1ZXN0KCdMb25kb24nKTtcblxuZnVuY3Rpb24gcHJvY2Vzc2luZ1JlcXVlc3QoY3VycmVudENpdHlOYW1lKSB7XG4gIHJldHVybkNpdHlDb29yZChjdXJyZW50Q2l0eU5hbWUpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuIGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtyZXNwb25zZS5sYXR9Jmxvbj0ke3Jlc3BvbnNlLmxvbn0mYXBwaWQ9NzU4M2ZkNGM4MGYxZjhlNzVmZTAzZjE0ZDEyMWVjZTBgLCB7bW9kZTogJ2NvcnMnfSlcbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBtYWluT2JqLm1vZGlmaWVkT2JqID0gcmVzcG9uc2U7XG5cbiAgICAgIG1haW5PYmouY2hhbmdlRm9ybWF0VmFsdWVzKClcblxuICAgICAgcmVjKG1haW5PYmoubW9kaWZpZWRPYmosIG1haW5PYmoudGVtcEFycktleXMsICdLJyk7XG4gICAgICByZWMobWFpbk9iai5tb2RpZmllZE9iaiwgbWFpbk9iai5wZXJjZW50QXJyS2V5cywgJyUnKTtcbiAgICAgIHJlYyhtYWluT2JqLm1vZGlmaWVkT2JqLCBtYWluT2JqLnByZXNzdXJlQXJyS2V5cywgJ2hQYScpO1xuICAgICAgcmVjKG1haW5PYmoubW9kaWZpZWRPYmosIG1haW5PYmoudmlzaWJpbGl0eUFycktleXMsICdrbScpO1xuXG4gICAgICBkZWxldGVJbmZvRnJvbVRoZVNpdGUoKVxuICAgICAgYWRkSW5mb0ludG9UaGVTaXRlKG1haW5PYmoubW9kaWZpZWRPYmosIGN1cnJlbnRDaXR5TmFtZSk7XG5cbiAgICAgIGlmIChtYWluT2JqLmN1cnJlbnRVbml0ICE9PSAnS2VsdmluJykge1xuICAgICAgICBjb25zdCB0ZW1wQXJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRlbXAnKTtcbiAgICAgICAgbWFpbk9iai5jYWxjVmFsdWUodGVtcEFycik7XG4gICAgICB9XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcmVjKG9iaiwgY29uZGl0aW9uQXJyYXksIHVuaXQpIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKGNvbmRpdGlvbkFycmF5LmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGlmICh0eXBlb2Ygb2JqW2tleV0gIT0gJ29iamVjdCcpIHtcbiAgICAgICAgb2JqW2tleV0gPSBNYXRoLnJvdW5kKCtvYmpba2V5XSkgKyBgICR7dW5pdH1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIG9ialtrZXldKSB7XG4gICAgICAgICAgb2JqW2tleV1bcHJvcF0gPSBNYXRoLnJvdW5kKCtvYmpba2V5XVtwcm9wXSkgKyBgICR7dW5pdH1gO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob2JqW2tleV0pKSB7XG4gICAgICBmb3IgKGNvbnN0IGl0ZXJhdG9yIG9mIG9ialtrZXldKSB7XG4gICAgICAgIHJlYyhpdGVyYXRvciwgY29uZGl0aW9uQXJyYXksIHVuaXQpO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIGlmKHR5cGVvZiBvYmpba2V5XSA9PSAnb2JqZWN0Jykge1xuICAgICAgcmVjKG9ialtrZXldLCBjb25kaXRpb25BcnJheSwgdW5pdCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJldHVybkNpdHlDb29yZChjdXJyZW50Q2l0eU5hbWUpIHtcbiAgcmV0dXJuIGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y3VycmVudENpdHlOYW1lfSZhcHBpZD03NTgzZmQ0YzgwZjFmOGU3NWZlMDNmMTRkMTIxZWNlMGAsIHttb2RlOiAnY29ycyd9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5jb29yZClcbn1cblxuZnVuY3Rpb24gYWRkSW5mb0ludG9UaGVTaXRlKG9iaiwgY3VycmVudENpdHlOYW1lKSB7XG4gIHNldFRvZGF5V2VhdGhlcihvYmouY3VycmVudCwgb2JqLmhvdXJseSwgY3VycmVudENpdHlOYW1lKTtcbiAgc2V0Q29tbW9uSW5mbyhvYmouY3VycmVudCk7XG4gIHNldERhaWx5V2VhdGhlcihvYmouZGFpbHkpXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUluZm9Gcm9tVGhlU2l0ZSgpIHtcbiAgY29uc3Qgd2VhdGhlckljb25zID0gdG9kYXlXZWF0aGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy53ZWF0aGVySWNvbnMnKTtcbiAgY29uc3QgY29tbW9uV2VhdGhlckluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbW9uV2VhdGhlckluZm8nKTtcbiAgY29uc3QgdGFibGVMaW5lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJsZUxpbmUnKTtcblxuICB3ZWF0aGVySWNvbnMuZm9yRWFjaChlbGVtID0+IGVsZW0ucmVtb3ZlKCkpO1xuICBjb21tb25XZWF0aGVySW5mby5mb3JFYWNoKGVsZW0gPT4gZWxlbS5yZW1vdmUoKSk7XG4gIHRhYmxlTGluZXMuZm9yRWFjaChlbGVtID0+IGVsZW0ucmVtb3ZlKCkpO1xufVxuXG5idG5Vbml0cy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB7XG4gIGJ0blVuaXRzLnRleHRDb250ZW50ID0gKG1haW5PYmouY3VycmVudFVuaXQgPT0gJ0tlbHZpbicpID8gJ8Kw0KEnIDogJ0snO1xuICBjb25zdCB0ZW1wQXJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRlbXAnKTtcbiAgbWFpbk9iai5jbmFuZ2VVbml0KHRlbXBBcnIpXG59KSJdLCJzb3VyY2VSb290IjoiIn0=