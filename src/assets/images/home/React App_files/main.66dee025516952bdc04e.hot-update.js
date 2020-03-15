webpackHotUpdate("main",{

/***/ "./src/routes/home/components/memberships/table.js":
/*!*********************************************************!*\
  !*** ./src/routes/home/components/memberships/table.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _memberships_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./memberships.css */ "./src/routes/home/components/memberships/memberships.css");
/* harmony import */ var _memberships_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_memberships_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/johndesjardins/Documents/GitHub/ca.484rideau/src/routes/home/components/memberships/table.js";



class Info {
  constructor(WIFM, Membership, Standalone) {
    this.WIFM = WIFM;
    this.Membership = Membership;
    this.Standalone = Standalone;
  }

  getKeys() {
    return ["WIFM", "Membership", "Standalone"];
  }

}

const TABLE_INFO = [new Info("Legal Business Address", true, "$600-$4000/mo"), new Info("Unlimited High-Speed Wifi", true, "$100/mo"), new Info("Meditative Space", true, "$65/mo"), new Info("Video Production Equipment", true, "$6,000-$15,000"), new Info("Video Ready Workspaces", true, "$200/hr"), new Info("Podcast Equipment", true, "$3,000-$10,000/mo"), new Info("Networking Oppertunities", true, "Priceless"), new Info("Advertising & Exposure", true, "$75-$500/mo"), new Info("Training Space ( Yoga, dance, etc. )", true, "$50/mo"), new Info("Workshops", true, "$50+"), new Info("Free Coffee", true, "$60/mo"), new Info("Time Bank Skill Sharing Network", true, "$25/hr"), new Info("Amazing Secret Future", true, "Priceless"), new Info("Total", false, "$10,000+")];

function Table() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table text-light table-striped table-dark table-bordered m-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }));
}

function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: "thead-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, TABLE_INFO[0].getKeys().map((element, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    key: index,
    scope: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, element)))));
}

function Body() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, TABLE_INFO.map((element, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    key: index,
    className: index !== TABLE_INFO.length - 1 ? "" : "thead-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, element.WIFM)), index !== TABLE_INFO.length - 1 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, element.Membership ? "Included" : "$200/mo")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, element.Standalone))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, element.Membership ? "Included" : "$200/mo")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, element.Standalone))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ })

})
//# sourceMappingURL=main.66dee025516952bdc04e.hot-update.js.map