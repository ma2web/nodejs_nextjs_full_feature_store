webpackHotUpdate_N_E("pages/product",{

/***/ "./src/domains/Products/useProductsStyles.ts":
/*!***************************************************!*\
  !*** ./src/domains/Products/useProductsStyles.ts ***!
  \***************************************************/
/*! exports provided: useProductsStyles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useProductsStyles\", function() { return useProductsStyles; });\n/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme */ \"./src/theme/index.ts\");\n\nvar useProductsStyles = Object(theme__WEBPACK_IMPORTED_MODULE_0__[\"makeGolStyles\"])(function (_ref) {\n  var palette = _ref.palette,\n      spacing = _ref.spacing;\n  return {\n    root: {},\n    error: {\n      color: palette.error.main\n    },\n    parent: {\n      display: \"flex\",\n      flexWrap: \"wrap\"\n    },\n    child: {\n      width: \"50%\",\n      padding: spacing(3),\n      transition: \"all ease-in-out 500\",\n      \"& li\": {\n        backgroundColor: palette.neutral[100],\n        padding: spacing(1, 3),\n        margin: spacing(1, 0),\n        cursor: \"pointer\",\n        borderRadius: 30,\n        transition: \"all ease-in-out 500\",\n        \"&:hover\": {\n          backgroundColor: \"\".concat(palette.error.main, \"50\"),\n          padding: spacing(1, 6)\n        }\n      }\n    },\n    product: {\n      \"& h3\": {\n        marginTop: spacing(3)\n      },\n      \"& li\": {\n        backgroundColor: palette.neutral[100],\n        padding: spacing(1),\n        margin: spacing(1, 0)\n      }\n    },\n    row: {\n      display: \"flex\",\n      width: \"100%\",\n      flexDirection: \"column\",\n      flexWrap: \"wrap\"\n    },\n    col: {\n      width: \"40%\"\n    }\n  };\n}, {\n  name: \"products\"\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (useProductsStyles);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2RvbWFpbnMvUHJvZHVjdHMvdXNlUHJvZHVjdHNTdHlsZXMudHM/ZDc3MyJdLCJuYW1lcyI6WyJ1c2VQcm9kdWN0c1N0eWxlcyIsIm1ha2VHb2xTdHlsZXMiLCJwYWxldHRlIiwic3BhY2luZyIsInJvb3QiLCJlcnJvciIsImNvbG9yIiwibWFpbiIsInBhcmVudCIsImRpc3BsYXkiLCJmbGV4V3JhcCIsImNoaWxkIiwid2lkdGgiLCJwYWRkaW5nIiwidHJhbnNpdGlvbiIsImJhY2tncm91bmRDb2xvciIsIm5ldXRyYWwiLCJtYXJnaW4iLCJjdXJzb3IiLCJib3JkZXJSYWRpdXMiLCJwcm9kdWN0IiwibWFyZ2luVG9wIiwicm93IiwiZmxleERpcmVjdGlvbiIsImNvbCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsaUJBQWlCLEdBQUdDLDJEQUFhLENBQzVDO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsTUFBWUMsT0FBWixRQUFZQSxPQUFaO0FBQUEsU0FBMkI7QUFDekJDLFFBQUksRUFBRSxFQURtQjtBQUV6QkMsU0FBSyxFQUFFO0FBQ0xDLFdBQUssRUFBRUosT0FBTyxDQUFDRyxLQUFSLENBQWNFO0FBRGhCLEtBRmtCO0FBS3pCQyxVQUFNLEVBQUU7QUFDTkMsYUFBTyxFQUFFLE1BREg7QUFFTkMsY0FBUSxFQUFFO0FBRkosS0FMaUI7QUFTekJDLFNBQUssRUFBRTtBQUNMQyxXQUFLLEVBQUUsS0FERjtBQUVMQyxhQUFPLEVBQUVWLE9BQU8sQ0FBQyxDQUFELENBRlg7QUFHTFcsZ0JBQVUsRUFBRSxxQkFIUDtBQUtMLGNBQVE7QUFDTkMsdUJBQWUsRUFBRWIsT0FBTyxDQUFDYyxPQUFSLENBQWdCLEdBQWhCLENBRFg7QUFFTkgsZUFBTyxFQUFFVixPQUFPLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FGVjtBQUdOYyxjQUFNLEVBQUVkLE9BQU8sQ0FBQyxDQUFELEVBQUksQ0FBSixDQUhUO0FBSU5lLGNBQU0sRUFBRSxTQUpGO0FBS05DLG9CQUFZLEVBQUUsRUFMUjtBQU1OTCxrQkFBVSxFQUFFLHFCQU5OO0FBT04sbUJBQVc7QUFDVEMseUJBQWUsWUFBS2IsT0FBTyxDQUFDRyxLQUFSLENBQWNFLElBQW5CLE9BRE47QUFFVE0saUJBQU8sRUFBRVYsT0FBTyxDQUFDLENBQUQsRUFBSSxDQUFKO0FBRlA7QUFQTDtBQUxILEtBVGtCO0FBMkJ6QmlCLFdBQU8sRUFBRTtBQUNQLGNBQVE7QUFDTkMsaUJBQVMsRUFBRWxCLE9BQU8sQ0FBQyxDQUFEO0FBRFosT0FERDtBQUlQLGNBQVE7QUFDTlksdUJBQWUsRUFBRWIsT0FBTyxDQUFDYyxPQUFSLENBQWdCLEdBQWhCLENBRFg7QUFFTkgsZUFBTyxFQUFFVixPQUFPLENBQUMsQ0FBRCxDQUZWO0FBR05jLGNBQU0sRUFBRWQsT0FBTyxDQUFDLENBQUQsRUFBSSxDQUFKO0FBSFQ7QUFKRCxLQTNCZ0I7QUFxQ3pCbUIsT0FBRyxFQUFFO0FBQ0hiLGFBQU8sRUFBRSxNQUROO0FBRUhHLFdBQUssRUFBRSxNQUZKO0FBR0hXLG1CQUFhLEVBQUUsUUFIWjtBQUlIYixjQUFRLEVBQUU7QUFKUCxLQXJDb0I7QUEyQ3pCYyxPQUFHLEVBQUU7QUFDSFosV0FBSyxFQUFFO0FBREo7QUEzQ29CLEdBQTNCO0FBQUEsQ0FENEMsRUFnRDVDO0FBQUVhLE1BQUksRUFBRTtBQUFSLENBaEQ0QyxDQUF2QztBQW1EUXpCLGdGQUFmIiwiZmlsZSI6Ii4vc3JjL2RvbWFpbnMvUHJvZHVjdHMvdXNlUHJvZHVjdHNTdHlsZXMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlR29sU3R5bGVzIH0gZnJvbSBcInRoZW1lXCI7XG5cbmV4cG9ydCBjb25zdCB1c2VQcm9kdWN0c1N0eWxlcyA9IG1ha2VHb2xTdHlsZXMoXG4gICh7IHBhbGV0dGUsIHNwYWNpbmcgfSkgPT4gKHtcbiAgICByb290OiB7fSxcbiAgICBlcnJvcjoge1xuICAgICAgY29sb3I6IHBhbGV0dGUuZXJyb3IubWFpbixcbiAgICB9LFxuICAgIHBhcmVudDoge1xuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXG4gICAgfSxcbiAgICBjaGlsZDoge1xuICAgICAgd2lkdGg6IFwiNTAlXCIsXG4gICAgICBwYWRkaW5nOiBzcGFjaW5nKDMpLFxuICAgICAgdHJhbnNpdGlvbjogXCJhbGwgZWFzZS1pbi1vdXQgNTAwXCIsXG5cbiAgICAgIFwiJiBsaVwiOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogcGFsZXR0ZS5uZXV0cmFsWzEwMF0sXG4gICAgICAgIHBhZGRpbmc6IHNwYWNpbmcoMSwgMyksXG4gICAgICAgIG1hcmdpbjogc3BhY2luZygxLCAwKSxcbiAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAzMCxcbiAgICAgICAgdHJhbnNpdGlvbjogXCJhbGwgZWFzZS1pbi1vdXQgNTAwXCIsXG4gICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHtwYWxldHRlLmVycm9yLm1haW59NTBgLFxuICAgICAgICAgIHBhZGRpbmc6IHNwYWNpbmcoMSwgNiksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgcHJvZHVjdDoge1xuICAgICAgXCImIGgzXCI6IHtcbiAgICAgICAgbWFyZ2luVG9wOiBzcGFjaW5nKDMpLFxuICAgICAgfSxcbiAgICAgIFwiJiBsaVwiOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogcGFsZXR0ZS5uZXV0cmFsWzEwMF0sXG4gICAgICAgIHBhZGRpbmc6IHNwYWNpbmcoMSksXG4gICAgICAgIG1hcmdpbjogc3BhY2luZygxLCAwKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICByb3c6IHtcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcbiAgICB9LFxuICAgIGNvbDoge1xuICAgICAgd2lkdGg6IFwiNDAlXCIsXG4gICAgfSxcbiAgfSksXG4gIHsgbmFtZTogXCJwcm9kdWN0c1wiIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVByb2R1Y3RzU3R5bGVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/domains/Products/useProductsStyles.ts\n");

/***/ })

})