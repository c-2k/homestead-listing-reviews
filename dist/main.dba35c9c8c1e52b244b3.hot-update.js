webpackHotUpdate("main",{

/***/ "./src/SpecificRatings.jsx":
/*!*********************************!*\
  !*** ./src/SpecificRatings.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/philkessel/homestead-listing-reviews/src/SpecificRatings.jsx: Unexpected token, expected \\\"{\\\" (6:4)\\n\\n\\u001b[0m \\u001b[90m 4 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 5 | \\u001b[39m  \\u001b[36mfunction\\u001b[39m getAverageRating (ratingName)\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 6 | \\u001b[39m    \\u001b[36mvar\\u001b[39m aggregateStars \\u001b[33m=\\u001b[39m \\u001b[33mNumber\\u001b[39m\\u001b[33m.\\u001b[39mparseFloat(props\\u001b[33m.\\u001b[39mreviews\\u001b[33m.\\u001b[39mreduce( (averageReview\\u001b[33m,\\u001b[39m review) \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m   | \\u001b[39m    \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 7 | \\u001b[39m      \\u001b[36mreturn\\u001b[39m averageReview \\u001b[33m+=\\u001b[39m review[ratingName]\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 8 | \\u001b[39m  }\\u001b[33m,\\u001b[39m\\u001b[35m0\\u001b[39m)\\u001b[33m/\\u001b[39mprops\\u001b[33m.\\u001b[39mreviews\\u001b[33m.\\u001b[39mlength)\\u001b[33m.\\u001b[39mtoFixed(\\u001b[35m1\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 9 | \\u001b[39m\\u001b[0m\\n    at _class.raise (/Users/philkessel/homestead-listing-reviews/node_modules/@babel/parser/lib/index.js:3939:15)\\n    at _class.unexpected (/Users/philkessel/homestead-listing-reviews/node_modules/@babel/parser/lib/index.js:5248:16)\\n    at _class.expect (/Users/philkessel/homestead-listing-reviews/node_modules/@babel/parser/lib/index.js:5236:28)\\n    at _class.parseBlock (/Users/philkessel/homestead-listing-reviews/node_modules/@babel/parser/lib/index.js:7682:10)\\n    at _class.parseFunctionBody (/Users/philkessel/homestead-listing-reviews/node_modules/@babel/parser/lib/index.js:6933:24)\\n    at _class.parseFunctionBodyAndFinish (/Users/philkessel/homestead-listing-reviews/node_modules/@babel/parser/lib/index.js:6913:10)\\n    at _class.parseFunction (/Users/philkessel/homestead-listing-reviews/node_modules/@babel/parser/lib/index.js:7832:10)\\n    at _class.parseFunctionStatement (/Users/philkessel/homestead-listing-reviews/node_modules/@babel/parser/lib/index.js:7487:17)\\n    at _class.parseStatementContent (/Users/philkessel/homestead-listing-reviews/node_modules/@babel/parser/lib/index.js:7177:21)\\n    at _class.parseStatement (/Users/philkessel/homestead-listing-reviews/node_modules/@babel/parser/lib/index.js:7153:17)\\n    at _class.parseBlockOrModuleBlockBody (/Users/philkessel/homestead-listing-reviews/node_modules/@babel/parser/lib/index.js:7707:23)\\n    at _class.parseBlockBody (/Users/philkessel/homestead-listing-reviews/node_modules/@babel/parser/lib/index.js:7694:10)\\n    at _class.parseBlock (/Users/philkessel/homestead-listing-reviews/node_modules/@babel/parser/lib/index.js:7683:10)\\n    at _class.parseFunctionBody (/Users/philkessel/homestead-listing-reviews/node_modules/@babel/parser/lib/index.js:6933:24)\\n    at _class.parseFunctionBodyAndFinish (/Users/philkessel/homestead-listing-reviews/node_modules/@babel/parser/lib/index.js:6913:10)\\n    at _class.parseFunction (/Users/philkessel/homestead-listing-reviews/node_modules/@babel/parser/lib/index.js:7832:10)\\n    at _class.parseFunctionStatement (/Users/philkessel/homestead-listing-reviews/node_modules/@babel/parser/lib/index.js:7487:17)\\n    at _class.parseStatementContent (/Users/philkessel/homestead-listing-reviews/node_modules/@babel/parser/lib/index.js:7177:21)\\n    at _class.parseStatement (/Users/philkessel/homestead-listing-reviews/node_modules/@babel/parser/lib/index.js:7153:17)\\n    at _class.parseBlockOrModuleBlockBody (/Users/philkessel/homestead-listing-reviews/node_modules/@babel/parser/lib/index.js:7707:23)\\n    at _class.parseBlockBody (/Users/philkessel/homestead-listing-reviews/node_modules/@babel/parser/lib/index.js:7694:10)\\n    at _class.parseTopLevel (/Users/philkessel/homestead-listing-reviews/node_modules/@babel/parser/lib/index.js:7118:10)\\n    at _class.parse (/Users/philkessel/homestead-listing-reviews/node_modules/@babel/parser/lib/index.js:8521:17)\\n    at parse (/Users/philkessel/homestead-listing-reviews/node_modules/@babel/parser/lib/index.js:10513:38)\\n    at parser (/Users/philkessel/homestead-listing-reviews/node_modules/@babel/core/lib/transformation/normalize-file.js:170:34)\\n    at normalizeFile (/Users/philkessel/homestead-listing-reviews/node_modules/@babel/core/lib/transformation/normalize-file.js:138:11)\\n    at runSync (/Users/philkessel/homestead-listing-reviews/node_modules/@babel/core/lib/transformation/index.js:44:43)\\n    at runAsync (/Users/philkessel/homestead-listing-reviews/node_modules/@babel/core/lib/transformation/index.js:35:14)\\n    at process.nextTick (/Users/philkessel/homestead-listing-reviews/node_modules/@babel/core/lib/transform.js:34:34)\\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU3BlY2lmaWNSYXRpbmdzLmpzeC5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/SpecificRatings.jsx\n");

/***/ })

})