webpackHotUpdate("main",{

/***/ "./src/SpecificRatings.jsx":
/*!*********************************!*\
  !*** ./src/SpecificRatings.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction SpecificRatings(props) {\n  if (props.reviews) {\n    var _getAverageRating = function _getAverageRating(ratingName) {\n      var aggregateStars = Number.parseFloat(reviews.reduce(function (averageReview, review) {\n        return averageReview += review[ratingName];\n      }, 0) / props.reviews.length).toFixed(1);\n    };\n  }\n\n  if (props.reviews) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Accuracy: \", getAverageRating('accuracyRating')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"A rating will go here\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"A rating will go here\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"A rating will go here\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"A rating will go here\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"A rating will go here\"));\n  } else {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"NOTHING TO SHOW HERE!\");\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpecificRatings); // sum += review.accuracyRating;\n//      sum += review.check_In_Rating;\n//      sum += review.cleanlinessRating;\n//      sum += review.communicationRating;\n//      sum += review.locationRating;\n//      sum += review.valueRating;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU3BlY2lmaWNSYXRpbmdzLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9TcGVjaWZpY1JhdGluZ3MuanN4P2UxMDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gU3BlY2lmaWNSYXRpbmdzIChwcm9wcykge1xuICBpZiAocHJvcHMucmV2aWV3cykge1xuICAgIGZ1bmN0aW9uIGdldEF2ZXJhZ2VSYXRpbmcgKHJhdGluZ05hbWUpIHtcbiAgICAgIHZhciBhZ2dyZWdhdGVTdGFycyA9IE51bWJlci5wYXJzZUZsb2F0KHJldmlld3MucmVkdWNlKCAoYXZlcmFnZVJldmlldywgcmV2aWV3KSA9PiB7XG4gICAgICAgIHJldHVybiBhdmVyYWdlUmV2aWV3ICs9IHJldmlld1tyYXRpbmdOYW1lXTtcbiAgICAgIH0sMCkvcHJvcHMucmV2aWV3cy5sZW5ndGgpLnRvRml4ZWQoMSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHByb3BzLnJldmlld3MpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBBY2N1cmFjeToge2dldEF2ZXJhZ2VSYXRpbmcoJ2FjY3VyYWN5UmF0aW5nJyl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIEEgcmF0aW5nIHdpbGwgZ28gaGVyZVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBBIHJhdGluZyB3aWxsIGdvIGhlcmVcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgQSByYXRpbmcgd2lsbCBnbyBoZXJlXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIEEgcmF0aW5nIHdpbGwgZ28gaGVyZVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBBIHJhdGluZyB3aWxsIGdvIGhlcmVcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5OT1RISU5HIFRPIFNIT1cgSEVSRSE8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BlY2lmaWNSYXRpbmdzO1xuXG5cbiAvLyBzdW0gKz0gcmV2aWV3LmFjY3VyYWN5UmF0aW5nO1xuIC8vICAgICAgc3VtICs9IHJldmlldy5jaGVja19Jbl9SYXRpbmc7XG4gLy8gICAgICBzdW0gKz0gcmV2aWV3LmNsZWFubGluZXNzUmF0aW5nO1xuIC8vICAgICAgc3VtICs9IHJldmlldy5jb21tdW5pY2F0aW9uUmF0aW5nO1xuIC8vICAgICAgc3VtICs9IHJldmlldy5sb2NhdGlvblJhdGluZztcbiAvLyAgICAgIHN1bSArPSByZXZpZXcudmFsdWVSYXRpbmc7XG5cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFzQkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/SpecificRatings.jsx\n");

/***/ })

})