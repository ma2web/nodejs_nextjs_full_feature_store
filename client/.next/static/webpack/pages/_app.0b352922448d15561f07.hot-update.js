webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/layout/CI/Layout/components/chat/Messanger.tsx":
/*!************************************************************!*\
  !*** ./src/layout/CI/Layout/components/chat/Messanger.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_mohammad_projects_dorreh_market_multi_client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var assets_images_icons_Arrows_Big_Down_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/images/icons/Arrows/Big/Down.svg */ \"./src/assets/images/icons/Arrows/Big/Down.svg\");\n/* harmony import */ var assets_images_icons_Arrows_Big_up_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/images/icons/Arrows/Big/up.svg */ \"./src/assets/images/icons/Arrows/Big/up.svg\");\n/* harmony import */ var assets_images_icons_Commiunication_Send_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/images/icons/Commiunication/Send.svg */ \"./src/assets/images/icons/Commiunication/Send.svg\");\n/* harmony import */ var assets_images_icons_UI_Search_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/images/icons/UI/Search.svg */ \"./src/assets/images/icons/UI/Search.svg\");\n/* harmony import */ var components_GolTextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/GolTextField */ \"./src/components/GolTextField/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/index.js\");\n/* harmony import */ var _Messanger_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Messanger.message */ \"./src/layout/CI/Layout/components/chat/Messanger.message.ts\");\n/* harmony import */ var _PrivateChat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrivateChat */ \"./src/layout/CI/Layout/components/chat/PrivateChat/index.ts\");\n/* harmony import */ var _useMessangerStyle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./useMessangerStyle */ \"./src/layout/CI/Layout/components/chat/useMessangerStyle.ts\");\n/* harmony import */ var utils_socket__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! utils/socket */ \"./src/utils/socket.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var domains_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! domains/api */ \"./src/domains/api.js\");\n\n\n\nvar _jsxFileName = \"/home/mohammad/projects/dorreh/market multi/client/src/layout/CI/Layout/components/chat/Messanger.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_mohammad_projects_dorreh_market_multi_client_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Messanger = function Messanger(_ref) {\n  _s();\n\n  var openChat = _ref.openChat,\n      setOpenChat = _ref.setOpenChat;\n  var styles = Object(_useMessangerStyle__WEBPACK_IMPORTED_MODULE_11__[\"useMessangerStyle\"])();\n\n  var _useIntl = Object(react_intl__WEBPACK_IMPORTED_MODULE_8__[\"useIntl\"])(),\n      formatMessage = _useIntl.formatMessage;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__[\"useState\"])(false),\n      privateMessage = _useState[0],\n      setPrivate = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__[\"useState\"])(null),\n      selectedContact = _useState2[0],\n      setSelectedContact = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_7__[\"useState\"])([]),\n      messages = _useState3[0],\n      setMessages = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_7__[\"useState\"])([]),\n      orders = _useState4[0],\n      setOrders = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_7__[\"useEffect\"])(function () {\n    var _localStorage;\n\n    axios__WEBPACK_IMPORTED_MODULE_13___default.a.get(\"\".concat(domains_api__WEBPACK_IMPORTED_MODULE_14__[\"api\"], \"/api/order\"), {\n      headers: {\n        \"x-auth-token\": (_localStorage = localStorage) === null || _localStorage === void 0 ? void 0 : _localStorage.token\n      }\n    }).then(function (res) {\n      return setOrders(res === null || res === void 0 ? void 0 : res.data);\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    children: [privateMessage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_PrivateChat__WEBPACK_IMPORTED_MODULE_10__[\"default\"], _objectSpread({}, {\n      selectedContact: selectedContact,\n      setPrivate: setPrivate,\n      messages: messages,\n      setMessages: setMessages,\n      socket: utils_socket__WEBPACK_IMPORTED_MODULE_12__[\"socket\"]\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: styles.root,\n      style: openChat ? {\n        bottom: 0\n      } : {\n        bottom: -372\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: styles.header,\n        onClick: function onClick() {\n          return setOpenChat(!openChat);\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          children: formatMessage(_Messanger_message__WEBPACK_IMPORTED_MODULE_9__[\"default\"].messaging)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: styles.spaceBetween,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(assets_images_icons_Commiunication_Send_svg__WEBPACK_IMPORTED_MODULE_4__[\"ReactComponent\"], {\n              className: styles.sendSvg\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: styles.toggle,\n            onClick: function onClick() {\n              return setOpenChat(!openChat);\n            },\n            children: openChat ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(assets_images_icons_Arrows_Big_Down_svg__WEBPACK_IMPORTED_MODULE_2__[\"ReactComponent\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 27\n            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(assets_images_icons_Arrows_Big_up_svg__WEBPACK_IMPORTED_MODULE_3__[\"ReactComponent\"], {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 43\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: styles.body,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: styles.search,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: styles.messageSearch,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(components_GolTextField__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              className: styles.searchInput,\n              label: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {\n                className: styles.textFieldLabel,\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(assets_images_icons_UI_Search_svg__WEBPACK_IMPORTED_MODULE_5__[\"ReactComponent\"], {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 73,\n                  columnNumber: 21\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {\n                  children: \"Search\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 74,\n                  columnNumber: 21\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 72,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 13\n          }, _this), orders !== null && orders !== void 0 && orders.length ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: styles.messages,\n            children: orders === null || orders === void 0 ? void 0 : orders.map(function (item) {\n              if (item !== null && item !== void 0 && item.customer) {\n                var _item$customer = item.customer,\n                    avatar = _item$customer.avatar,\n                    firstName = _item$customer.firstName,\n                    lastName = _item$customer.lastName,\n                    email = _item$customer.email,\n                    countryCode = _item$customer.countryCode,\n                    phoneNumber = _item$customer.phoneNumber,\n                    status = item.status,\n                    date = item.createdAt;\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                  className: styles.message,\n                  onClick: function onClick() {\n                    setSelectedContact(item);\n                    setPrivate(true);\n                  },\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                    className: styles.avatar\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 104,\n                    columnNumber: 25\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                    className: styles.content,\n                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                      className: styles.name,\n                      children: \"\".concat(firstName, \" \").concat(lastName)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 106,\n                      columnNumber: 27\n                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                      className: styles.text,\n                      children: [\"order status: \", status]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 109,\n                      columnNumber: 27\n                    }, _this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 105,\n                    columnNumber: 25\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                    className: styles.date,\n                    children: date\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 113,\n                    columnNumber: 25\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 97,\n                  columnNumber: 23\n                }, _this);\n              } else {\n                return null;\n              }\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 15\n          }, _this) : \"No Orders\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Messanger, \"oSpG/EjcnNfxlSw/Y8ZFThzv9i0=\", false, function () {\n  return [_useMessangerStyle__WEBPACK_IMPORTED_MODULE_11__[\"useMessangerStyle\"], react_intl__WEBPACK_IMPORTED_MODULE_8__[\"useIntl\"]];\n});\n\n_c = Messanger;\nvar messagesList = [{\n  avatar: \"\",\n  firstName: \"Order\",\n  lastName: \"1\",\n  body: \"Order1: its my honor to see you around\",\n  date: \"29 julay\"\n}, {\n  avatar: \"\",\n  firstName: \"Order\",\n  lastName: \"2\",\n  body: \"Order2: its my honor to see you around\",\n  date: \"29 julay\"\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Messanger);\n\nvar _c;\n\n$RefreshReg$(_c, \"Messanger\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dC9DSS9MYXlvdXQvY29tcG9uZW50cy9jaGF0L01lc3Nhbmdlci50c3g/MDk5OSJdLCJuYW1lcyI6WyJNZXNzYW5nZXIiLCJvcGVuQ2hhdCIsInNldE9wZW5DaGF0Iiwic3R5bGVzIiwidXNlTWVzc2FuZ2VyU3R5bGUiLCJ1c2VJbnRsIiwiZm9ybWF0TWVzc2FnZSIsInVzZVN0YXRlIiwicHJpdmF0ZU1lc3NhZ2UiLCJzZXRQcml2YXRlIiwic2VsZWN0ZWRDb250YWN0Iiwic2V0U2VsZWN0ZWRDb250YWN0IiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsIm9yZGVycyIsInNldE9yZGVycyIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwiYXBpIiwiaGVhZGVycyIsImxvY2FsU3RvcmFnZSIsInRva2VuIiwidGhlbiIsInJlcyIsImRhdGEiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwic29ja2V0Iiwicm9vdCIsImJvdHRvbSIsImhlYWRlciIsIk1lc3Nhbmdlck1lc3NhZ2VzIiwibWVzc2FnaW5nIiwic3BhY2VCZXR3ZWVuIiwic2VuZFN2ZyIsInRvZ2dsZSIsImJvZHkiLCJzZWFyY2giLCJtZXNzYWdlU2VhcmNoIiwic2VhcmNoSW5wdXQiLCJ0ZXh0RmllbGRMYWJlbCIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJjdXN0b21lciIsImF2YXRhciIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJjb3VudHJ5Q29kZSIsInBob25lTnVtYmVyIiwic3RhdHVzIiwiZGF0ZSIsImNyZWF0ZWRBdCIsIm1lc3NhZ2UiLCJjb250ZW50IiwibmFtZSIsInRleHQiLCJtZXNzYWdlc0xpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMs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QUFNNEQsWUFBWSxHQUFHLENBQ25CO0FBQ0ViLFFBQU0sRUFBRSxFQURWO0FBRUVDLFdBQVMsRUFBRSxPQUZiO0FBR0VDLFVBQVEsRUFBRSxHQUhaO0FBSUVYLE1BQUksRUFBRSx3Q0FKUjtBQUtFZ0IsTUFBSSxFQUFFO0FBTFIsQ0FEbUIsRUFRbkI7QUFDRVAsUUFBTSxFQUFFLEVBRFY7QUFFRUMsV0FBUyxFQUFFLE9BRmI7QUFHRUMsVUFBUSxFQUFFLEdBSFo7QUFJRVgsTUFBSSxFQUFFLHdDQUpSO0FBS0VnQixNQUFJLEVBQUU7QUFMUixDQVJtQixDQUFyQjtBQWlCZXRELHdFQUFmIiwiZmlsZSI6Ii4vc3JjL2xheW91dC9DSS9MYXlvdXQvY29tcG9uZW50cy9jaGF0L01lc3Nhbmdlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdENvbXBvbmVudCBhcyBBcnJvd0Rvd24gfSBmcm9tIFwiYXNzZXRzL2ltYWdlcy9pY29ucy9BcnJvd3MvQmlnL0Rvd24uc3ZnXCI7XG5pbXBvcnQgeyBSZWFjdENvbXBvbmVudCBhcyBBcnJvd1VwIH0gZnJvbSBcImFzc2V0cy9pbWFnZXMvaWNvbnMvQXJyb3dzL0JpZy91cC5zdmdcIjtcbmltcG9ydCB7IFJlYWN0Q29tcG9uZW50IGFzIFNlbmRTdmcgfSBmcm9tIFwiYXNzZXRzL2ltYWdlcy9pY29ucy9Db21taXVuaWNhdGlvbi9TZW5kLnN2Z1wiO1xuaW1wb3J0IHsgUmVhY3RDb21wb25lbnQgYXMgU2VhcmNoU3ZnIH0gZnJvbSBcImFzc2V0cy9pbWFnZXMvaWNvbnMvVUkvU2VhcmNoLnN2Z1wiO1xuaW1wb3J0IEdvbFRleHRGaWVsZCBmcm9tIFwiY29tcG9uZW50cy9Hb2xUZXh0RmllbGRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VJbnRsIH0gZnJvbSBcInJlYWN0LWludGxcIjtcbmltcG9ydCBNZXNzYW5nZXJNZXNzYWdlcyBmcm9tIFwiLi9NZXNzYW5nZXIubWVzc2FnZVwiO1xuaW1wb3J0IFByaXZhdGVDaGF0IGZyb20gXCIuL1ByaXZhdGVDaGF0XCI7XG5pbXBvcnQgeyB1c2VNZXNzYW5nZXJTdHlsZSB9IGZyb20gXCIuL3VzZU1lc3NhbmdlclN0eWxlXCI7XG5pbXBvcnQgeyBzb2NrZXQgfSBmcm9tIFwidXRpbHMvc29ja2V0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiZG9tYWlucy9hcGlcIjtcblxuY29uc3QgTWVzc2FuZ2VyID0gKHsgb3BlbkNoYXQsIHNldE9wZW5DaGF0IH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlTWVzc2FuZ2VyU3R5bGUoKTtcbiAgY29uc3QgeyBmb3JtYXRNZXNzYWdlIH0gPSB1c2VJbnRsKCk7XG4gIGNvbnN0IFtwcml2YXRlTWVzc2FnZSwgc2V0UHJpdmF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWxlY3RlZENvbnRhY3QsIHNldFNlbGVjdGVkQ29udGFjdF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtvcmRlcnMsIHNldE9yZGVyc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLmdldChgJHthcGl9L2FwaS9vcmRlcmAsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwieC1hdXRoLXRva2VuXCI6IGxvY2FsU3RvcmFnZT8udG9rZW4sXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4gc2V0T3JkZXJzKHJlcz8uZGF0YSkpXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7cHJpdmF0ZU1lc3NhZ2UgJiYgKFxuICAgICAgICA8UHJpdmF0ZUNoYXRcbiAgICAgICAgICB7Li4ue1xuICAgICAgICAgICAgc2VsZWN0ZWRDb250YWN0LFxuICAgICAgICAgICAgc2V0UHJpdmF0ZSxcbiAgICAgICAgICAgIG1lc3NhZ2VzLFxuICAgICAgICAgICAgc2V0TWVzc2FnZXMsXG4gICAgICAgICAgICBzb2NrZXQsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnJvb3R9XG4gICAgICAgIHN0eWxlPXtvcGVuQ2hhdCA/IHsgYm90dG9tOiAwIH0gOiB7IGJvdHRvbTogLTM3MiB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0gb25DbGljaz17KCkgPT4gc2V0T3BlbkNoYXQoIW9wZW5DaGF0KX0+XG4gICAgICAgICAgPGRpdj57Zm9ybWF0TWVzc2FnZShNZXNzYW5nZXJNZXNzYWdlcy5tZXNzYWdpbmcpfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3BhY2VCZXR3ZWVufT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxTZW5kU3ZnIGNsYXNzTmFtZT17c3R5bGVzLnNlbmRTdmd9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudG9nZ2xlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuQ2hhdCghb3BlbkNoYXQpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7b3BlbkNoYXQgPyA8QXJyb3dEb3duIC8+IDogPEFycm93VXAgLz59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2VTZWFyY2h9PlxuICAgICAgICAgICAgICA8R29sVGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoSW5wdXR9XG4gICAgICAgICAgICAgICAgbGFiZWw9e1xuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGV4dEZpZWxkTGFiZWx9PlxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoU3ZnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlNlYXJjaDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge29yZGVycz8ubGVuZ3RoID8gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2VzfT5cbiAgICAgICAgICAgICAgICB7b3JkZXJzPy5tYXAoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0/LmN1c3RvbWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB7XG4gICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudHJ5Q29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgfSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRDb250YWN0KGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQcml2YXRlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPntgJHtmaXJzdE5hbWV9ICR7bGFzdE5hbWV9YH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlciBzdGF0dXM6IHtzdGF0dXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9PntkYXRlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgXCJObyBPcmRlcnNcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IG1lc3NhZ2VzTGlzdCA9IFtcbiAge1xuICAgIGF2YXRhcjogXCJcIixcbiAgICBmaXJzdE5hbWU6IFwiT3JkZXJcIixcbiAgICBsYXN0TmFtZTogXCIxXCIsXG4gICAgYm9keTogXCJPcmRlcjE6IGl0cyBteSBob25vciB0byBzZWUgeW91IGFyb3VuZFwiLFxuICAgIGRhdGU6IFwiMjkganVsYXlcIixcbiAgfSxcbiAge1xuICAgIGF2YXRhcjogXCJcIixcbiAgICBmaXJzdE5hbWU6IFwiT3JkZXJcIixcbiAgICBsYXN0TmFtZTogXCIyXCIsXG4gICAgYm9keTogXCJPcmRlcjI6IGl0cyBteSBob25vciB0byBzZWUgeW91IGFyb3VuZFwiLFxuICAgIGRhdGU6IFwiMjkganVsYXlcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhbmdlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/layout/CI/Layout/components/chat/Messanger.tsx\n");

/***/ })

})