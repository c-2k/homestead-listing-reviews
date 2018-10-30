webpackHotUpdate("main",{

/***/ "./src/AggregateRating.jsx":
/*!*********************************!*\
  !*** ./src/AggregateRating.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction AggregateRating(props) {\n  if (props.reviews) {\n    var _hanldleDecimle = function _hanldleDecimle(num) {\n      return Number.parseFloat(num).toFixed(1);\n    };\n\n    var numberOfReviews = props.reviews.length;\n    var aggregateStars = props.reviews.map(function (review) {\n      var sum = 0;\n      sum += review.accuracyRating;\n      sum += review.check_In_Rating;\n      sum += review.cleanlinessRating;\n      sum += review.communicationRating;\n      sum += review.locationRating;\n      sum += review.valueRating;\n      return sum / 6;\n    }).reduce(function (totalAverage, reviewAverage) {\n      return totalAverage += reviewAverage;\n    }, 0) / numberOfReviews;\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, numberOfReviews, \" Reviews\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, hanldleDecimle(aggregateStars), \" Stars\"))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AggregateRating);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQWdncmVnYXRlUmF0aW5nLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9BZ2dyZWdhdGVSYXRpbmcuanN4PzJlZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gQWdncmVnYXRlUmF0aW5nIChwcm9wcykge1xuICBpZiAocHJvcHMucmV2aWV3cykge1xuICAgIHZhciBudW1iZXJPZlJldmlld3MgPSBwcm9wcy5yZXZpZXdzLmxlbmd0aDtcbiAgICB2YXIgYWdncmVnYXRlU3RhcnMgPSBwcm9wcy5yZXZpZXdzLm1hcCggcmV2aWV3ID0+IHtcbiAgICAgIGxldCBzdW0gPSAwXG4gICAgICBzdW0gKz0gcmV2aWV3LmFjY3VyYWN5UmF0aW5nO1xuICAgICAgc3VtICs9IHJldmlldy5jaGVja19Jbl9SYXRpbmc7XG4gICAgICBzdW0gKz0gcmV2aWV3LmNsZWFubGluZXNzUmF0aW5nO1xuICAgICAgc3VtICs9IHJldmlldy5jb21tdW5pY2F0aW9uUmF0aW5nO1xuICAgICAgc3VtICs9IHJldmlldy5sb2NhdGlvblJhdGluZztcbiAgICAgIHN1bSArPSByZXZpZXcudmFsdWVSYXRpbmc7XG4gICAgICByZXR1cm4gc3VtIC8gNjtcbiAgICB9KS5yZWR1Y2UoICh0b3RhbEF2ZXJhZ2UsIHJldmlld0F2ZXJhZ2UpID0+IHtcbiAgICAgIHJldHVybiB0b3RhbEF2ZXJhZ2UgKz0gcmV2aWV3QXZlcmFnZVxuICAgIH0sMCkvbnVtYmVyT2ZSZXZpZXdzO1xuXG4gIGZ1bmN0aW9uIGhhbmxkbGVEZWNpbWxlKG51bSkge1xuICAgIHJldHVybiBOdW1iZXIucGFyc2VGbG9hdChudW0pLnRvRml4ZWQoMSk7XG4gIH1cblxuXG4gIH1cblxucmV0dXJuIChcbiAgPGRpdj5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4+PGgyPntudW1iZXJPZlJldmlld3N9IFJldmlld3M8L2gyPjwvc3Bhbj5cbiAgICAgIDxkaXY+PHNwYW4+e2hhbmxkbGVEZWNpbWxlKGFnZ3JlZ2F0ZVN0YXJzKX0gU3RhcnM8L3NwYW4+PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFnZ3JlZ2F0ZVJhdGluZzsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFnQkE7QUFDQTtBQUNBO0FBakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/AggregateRating.jsx\n");

/***/ })

})