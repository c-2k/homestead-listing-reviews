webpackHotUpdate("main",{

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AggregateRating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AggregateRating */ \"./src/AggregateRating.jsx\");\n/* harmony import */ var _SpecificRatings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpecificRatings */ \"./src/SpecificRatings.jsx\");\n/* harmony import */ var _ReviewsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReviewsList */ \"./src/ReviewsList.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\n\n\n\nvar $ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {\n      reviews: undefined\n    };\n    _this.getReviews = _this.getReviews.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"ComponentDidMount\",\n    value: function ComponentDidMount() {\n      this.getReviews();\n    }\n  }, {\n    key: \"getReviews\",\n    value: function getReviews(num) {\n      var _this2 = this;\n\n      $.ajax({\n        url: \"/listing-reviews/\".concat(num),\n        contentType: 'application/json',\n        method: 'GET',\n        success: function success(data) {\n          console.log('SUCCESFUL GET REQ WITH --->', data);\n\n          _this2.setState({\n            reviews: data\n          });\n        },\n        error: function error(err) {\n          console.log('ERROR IN GET REQ-->', err);\n        }\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        onClick: function onClick() {\n          return _this3.getReviews(7);\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AggregateRating__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        reviews: this.state.reviews\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReviewsList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9BcHAuanN4PzE1OTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBZ2dyZWdhdGVSYXRpbmcgZnJvbSAnLi9BZ2dyZWdhdGVSYXRpbmcnO1xuaW1wb3J0IFNwZWNpZmljUmF0aW5ncyBmcm9tICcuL1NwZWNpZmljUmF0aW5ncyc7XG5pbXBvcnQgUmV2aWV3c0xpc3QgZnJvbSAnLi9SZXZpZXdzTGlzdCc7XG5cbmNvbnN0ICQgPSByZXF1aXJlICgnanF1ZXJ5Jyk7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICByZXZpZXdzOiB1bmRlZmluZWQsXG4gICAgfVxuICAgIHRoaXMuZ2V0UmV2aWV3cyA9IHRoaXMuZ2V0UmV2aWV3cy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgQ29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIHRoaXMuZ2V0UmV2aWV3cygpO1xuICB9XG5cbiAgZ2V0UmV2aWV3cyhudW0pIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBgL2xpc3RpbmctcmV2aWV3cy8ke251bX1gLFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBzdWNjZXNzOiAoIGRhdGEgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnU1VDQ0VTRlVMIEdFVCBSRVEgV0lUSCAtLS0+JyxkYXRhKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICByZXZpZXdzOiBkYXRhXG4gICAgICAgIH0pXG4gICAgICB9KSxcbiAgICAgIGVycm9yOiAoIGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBJTiBHRVQgUkVRLS0+JywgZXJyKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiAgb25DbGljaz17KCkgPT4gdGhpcy5nZXRSZXZpZXdzKDcpfT5cbiAgICAgICAgICAgIDxBZ2dyZWdhdGVSYXRpbmcgcmV2aWV3cz17dGhpcy5zdGF0ZS5yZXZpZXdzfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICA8UmV2aWV3c0xpc3QvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQTtBQU1BO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBY0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBT0E7Ozs7QUF6Q0E7QUFDQTtBQTRDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/App.jsx\n");

/***/ })

})