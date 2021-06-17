webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/layout/CI/LanguageSelector/LanguageSelector.styles.ts":
false,

/***/ "./src/layout/CI/LanguageSelector/LanguageSelector.tsx":
false,

/***/ "./src/layout/CI/LanguageSelector/index.ts":
false,

/***/ "./src/layout/CI/Layout/components/desk/Desk.tsx":
/*!*******************************************************!*\
  !*** ./src/layout/CI/Layout/components/desk/Desk.tsx ***!
  \*******************************************************/
/*! exports provided: Desk, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Desk\", function() { return Desk; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/index.js\");\n/* harmony import */ var _useDeskStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useDeskStyles */ \"./src/layout/CI/Layout/components/desk/useDeskStyles.ts\");\n/* harmony import */ var _Desk_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Desk.message */ \"./src/layout/CI/Layout/components/desk/Desk.message.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/home/mohammad/projects/dorreh/Multi/client/src/layout/CI/Layout/components/desk/Desk.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Desk = function Desk() {\n  _s();\n\n  var classes = Object(_useDeskStyles__WEBPACK_IMPORTED_MODULE_3__[\"useDeskStyles\"])();\n\n  var _useIntl = Object(react_intl__WEBPACK_IMPORTED_MODULE_2__[\"useIntl\"])(),\n      formatMessage = _useIntl.formatMessage;\n\n  var tabs = [{\n    name: \"\".concat(formatMessage(_Desk_message__WEBPACK_IMPORTED_MODULE_4__[\"default\"].categories)),\n    route: \"/categories\"\n  }, {\n    name: \"\".concat(formatMessage(_Desk_message__WEBPACK_IMPORTED_MODULE_4__[\"default\"].products)),\n    route: \"/products\"\n  }, {\n    name: \"\".concat(formatMessage(_Desk_message__WEBPACK_IMPORTED_MODULE_4__[\"default\"].orders)),\n    route: \"/orders\"\n  }];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: classes.root,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: classes.tabs,\n      children: tabs === null || tabs === void 0 ? void 0 : tabs.map(function (tab) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          href: tab === null || tab === void 0 ? void 0 : tab.route,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: classes.tab,\n            children: tab === null || tab === void 0 ? void 0 : tab.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Desk, \"dtQM0GVrmDvfDYpDaIt26OENO60=\", false, function () {\n  return [_useDeskStyles__WEBPACK_IMPORTED_MODULE_3__[\"useDeskStyles\"], react_intl__WEBPACK_IMPORTED_MODULE_2__[\"useIntl\"]];\n});\n\n_c = Desk;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Desk);\n\nvar _c;\n\n$RefreshReg$(_c, \"Desk\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dC9DSS9MYXlvdXQvY29tcG9uZW50cy9kZXNrL0Rlc2sudHN4PzcxNDMiXSwibmFtZXMiOlsiRGVzayIsImNsYXNzZXMiLCJ1c2VEZXNrU3R5bGVzIiwidXNlSW50bCIsImZvcm1hdE1lc3NhZ2UiLCJ0YWJzIiwibmFtZSIsIkRlc2tNZXNzYWdlcyIsImNhdGVnb3JpZXMiLCJyb3V0ZSIsInByb2R1Y3RzIiwib3JkZXJzIiwicm9vdCIsIm1hcCIsInRhYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUN4QixNQUFNQyxPQUFPLEdBQUdDLG9FQUFhLEVBQTdCOztBQUR3QixpQkFFRUMsMERBQU8sRUFGVDtBQUFBLE1BRWhCQyxhQUZnQixZQUVoQkEsYUFGZ0I7O0FBSXhCLE1BQU1DLElBQUksR0FBRyxDQUNYO0FBQ0VDLFFBQUksWUFBS0YsYUFBYSxDQUFDRyxxREFBWSxDQUFDQyxVQUFkLENBQWxCLENBRE47QUFFRUMsU0FBSyxFQUFFO0FBRlQsR0FEVyxFQUtYO0FBQ0VILFFBQUksWUFBS0YsYUFBYSxDQUFDRyxxREFBWSxDQUFDRyxRQUFkLENBQWxCLENBRE47QUFFRUQsU0FBSyxFQUFFO0FBRlQsR0FMVyxFQVNYO0FBQ0VILFFBQUksWUFBS0YsYUFBYSxDQUFDRyxxREFBWSxDQUFDSSxNQUFkLENBQWxCLENBRE47QUFFRUYsU0FBSyxFQUFFO0FBRlQsR0FUVyxDQUFiO0FBZUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVSLE9BQU8sQ0FBQ1csSUFBeEI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRVgsT0FBTyxDQUFDSSxJQUF4QjtBQUFBLGdCQUNHQSxJQURILGFBQ0dBLElBREgsdUJBQ0dBLElBQUksQ0FBRVEsR0FBTixDQUFVLFVBQUNDLEdBQUQsRUFBUztBQUNsQiw0QkFDRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBRUEsR0FBRixhQUFFQSxHQUFGLHVCQUFFQSxHQUFHLENBQUVMLEtBQWpCO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFFUixPQUFPLENBQUNhLEdBQXhCO0FBQUEsc0JBQThCQSxHQUE5QixhQUE4QkEsR0FBOUIsdUJBQThCQSxHQUFHLENBQUVSO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBS0QsT0FOQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFhRCxDQWhDTTs7R0FBTU4sSTtVQUNLRSw0RCxFQUNVQyxrRDs7O0tBRmZILEk7QUFrQ0VBLG1FQUFmIiwiZmlsZSI6Ii4vc3JjL2xheW91dC9DSS9MYXlvdXQvY29tcG9uZW50cy9kZXNrL0Rlc2sudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VJbnRsIH0gZnJvbSBcInJlYWN0LWludGxcIjtcbmltcG9ydCB7IHVzZURlc2tTdHlsZXMgfSBmcm9tIFwiLi91c2VEZXNrU3R5bGVzXCI7XG5pbXBvcnQgRGVza01lc3NhZ2VzIGZyb20gXCIuL0Rlc2subWVzc2FnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgY29uc3QgRGVzayA9ICgpID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZURlc2tTdHlsZXMoKTtcbiAgY29uc3QgeyBmb3JtYXRNZXNzYWdlIH0gPSB1c2VJbnRsKCk7XG5cbiAgY29uc3QgdGFicyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBgJHtmb3JtYXRNZXNzYWdlKERlc2tNZXNzYWdlcy5jYXRlZ29yaWVzKX1gLFxuICAgICAgcm91dGU6IFwiL2NhdGVnb3JpZXNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IGAke2Zvcm1hdE1lc3NhZ2UoRGVza01lc3NhZ2VzLnByb2R1Y3RzKX1gLFxuICAgICAgcm91dGU6IFwiL3Byb2R1Y3RzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBgJHtmb3JtYXRNZXNzYWdlKERlc2tNZXNzYWdlcy5vcmRlcnMpfWAsXG4gICAgICByb3V0ZTogXCIvb3JkZXJzXCIsXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGFic30+XG4gICAgICAgIHt0YWJzPy5tYXAoKHRhYikgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGluayBocmVmPXt0YWI/LnJvdXRlfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGFifT57dGFiPy5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXNrO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/layout/CI/Layout/components/desk/Desk.tsx\n");

/***/ })

})