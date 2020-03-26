(function(modules) {
    function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var moreModules = data[1];
        var executeModules = data[2];
        var moduleId, chunkId, i = 0, resolves = [];
        for (;i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) resolves.push(installedChunks[chunkId][0]);
            installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) modules[moduleId] = moreModules[moduleId];
        if (parentJsonpFunction) parentJsonpFunction(data);
        while (resolves.length) resolves.shift()();
        deferredModules.push.apply(deferredModules, executeModules || []);
        return checkDeferredModules();
    }
    function checkDeferredModules() {
        var result;
        for (var i = 0; i < deferredModules.length; i++) {
            var deferredModule = deferredModules[i];
            var fulfilled = true;
            for (var j = 1; j < deferredModule.length; j++) {
                var depId = deferredModule[j];
                if (0 !== installedChunks[depId]) fulfilled = false;
            }
            if (fulfilled) {
                deferredModules.splice(i--, 1);
                result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
            }
        }
        return result;
    }
    var installedModules = {};
    var installedChunks = {
        BooksApp: 0
    };
    var deferredModules = [];
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
    deferredModules.push([ "./assets/js/index.js", "vendors~BooksApp" ]);
    return checkDeferredModules();
})({
    "./assets/js/actions/allActions.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* unused harmony export addBook */\n/* unused harmony export removeBook */\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return openBookInfo; });\n/* unused harmony export closeBookInfo */\n/* unused harmony export openMyList */\n/* unused harmony export closeMyList */\nconst addBook = book => {\n  return {\n    type: 'addBook',\n    payload: book\n  };\n};\nconst removeBook = book => {\n  return {\n    type: 'removeBook',\n    payload: book\n  };\n};\nconst openBookInfo = book => {\n  return {\n    type: 'openBookInfo',\n    payload: book\n  };\n};\nconst closeBookInfo = book => {\n  return {\n    type: 'closeBookInfo',\n    payload: book\n  };\n};\nconst openMyList = () => {\n  return {\n    type: 'openMyList'\n  };\n};\nconst closeMyList = () => {\n  return {\n    type: 'closeMyList'\n  };\n};\n\n//# sourceURL=webpack:///./assets/js/actions/allActions.js?");
    },
    "./assets/js/components/AllBooks.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");\n/* harmony import */ var _actions_allActions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/allActions.js */ "./assets/js/actions/allActions.js");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\n\n\n\n\nclass AllBooks extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n\n    this.clickedBtn = () => {};\n\n    this.state = {\n      name: \'Joe\'\n    };\n  }\n\n  test() {\n    return _asyncToGenerator(function* () {})();\n  }\n\n  render() {\n    console.log(this.props);\n    return (// =====================ALLBOOKS============================\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n        className: "allBooks"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "bookContainer"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        onClick: this.props.openBookInfo,\n        className: "book",\n        style: {\n          background: "url(\'img/subterraneanBook.jpg\') center center no-repeat",\n          backgroundSize: "contain"\n        }\n      }))) // =====================ALLBOOKS============================\n\n    );\n  }\n\n}\n\nconst mapStateToProps = state => {\n  console.log(state);\n  return state;\n};\n\n/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[/* connect */ "b"])(mapStateToProps, {\n  openBookInfo: _actions_allActions_js__WEBPACK_IMPORTED_MODULE_2__[/* openBookInfo */ "a"]\n})(AllBooks));\n\n//# sourceURL=webpack:///./assets/js/components/AllBooks.js?');
    },
    "./assets/js/components/App.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AllBooks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllBooks.js */ "./assets/js/components/AllBooks.js");\n/* harmony import */ var _MyList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyList.js */ "./assets/js/components/MyList.js");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n\n    this.clickedBtn = () => {};\n\n    this.state = {\n      name: \'Michael\'\n    };\n  }\n\n  test() {\n    return _asyncToGenerator(function* () {})();\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      id: "appRoot"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "container"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "openList"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fas fa-bars"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AllBooks_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MyList_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/components/App.js?');
    },
    "./assets/js/components/Modal.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\n\n\n\nclass Modal extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n\n    this.clickedBtn = () => {};\n\n    this.state = {\n      name: \'Joe\'\n    };\n  }\n\n  test() {\n    return _asyncToGenerator(function* () {})();\n  }\n\n  render() {\n    return (// =======================MODAL============================\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n        id: "modal",\n        className: this.props.globalState.popupOpen == true ? \'active\' : \'\'\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "modalContainer"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "closeModal"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n        className: "far fa-times-circle"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "modalGrid"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "images"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "cover",\n        style: {\n          background: "url(\'img/subterraneanBook.jpg\') center center no-repeat",\n          backgroundSize: "contain"\n        }\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "info"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Subterranean"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "infoLine"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n        className: "bold"\n      }, "Author: "), "James Rollins"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "infoLine"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n        className: "bold"\n      }, "Category: "), "Novel, Thriller, Suspense, Adventure Fiction"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "infoLine"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n        className: "bold"\n      }, "Published: "), "1999"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n        className: "review"\n      }, "Subterranean is a novel by James Rollins. Beneath the ice at the bottom of the Earth is a magnificent subterranean labyrinth, a place of breathtaking wonders \\u2013 and terrors beyond imagining."))))) //=======================MODAL============================\n\n    );\n  }\n\n}\n\nconst mapStateToProps = state => {\n  console.log(state);\n  return state;\n};\n\n/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[/* connect */ "b"])(mapStateToProps)(Modal));\n\n//# sourceURL=webpack:///./assets/js/components/Modal.js?');
    },
    "./assets/js/components/MyList.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\n\n\nclass MyList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n\n    this.clickedBtn = () => {};\n\n    this.state = {\n      name: \'Joe\'\n    };\n  }\n\n  test() {\n    return _asyncToGenerator(function* () {})();\n  }\n\n  render() {\n    return (// =======================MYLIST============================\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n        id: "myList"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "My List of Books"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Subterranean", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n        className: "deleteBtn"\n      }, "Delete"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        className: "closeList"\n      }, "Close List")) // =======================MYLIST============================\n\n    );\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/components/MyList.js?');
    },
    "./assets/js/index.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");\n/* harmony import */ var _components_App_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/App.js */ "./assets/js/components/App.js");\n/* harmony import */ var _components_Modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Modal.js */ "./assets/js/components/Modal.js");\n/* harmony import */ var _reducers_allReducers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers/allReducers.js */ "./assets/js/reducers/allReducers.js");\n\n\n\n\n\n\n\nconst store = Object(redux__WEBPACK_IMPORTED_MODULE_3__[/* createStore */ "c"])(_reducers_allReducers_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]);\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__[/* Provider */ "a"], {\n  store: store\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null)), document.getElementById(\'app\'));\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__[/* Provider */ "a"], {\n  store: store\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modal_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null)), document.getElementById(\'modalRoot\'));\n\n//# sourceURL=webpack:///./assets/js/index.js?');
    },
    "./assets/js/reducers/allReducers.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");\n/* harmony import */ var _appStateReducer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appStateReducer.js */ "./assets/js/reducers/appStateReducer.js");\n/* harmony import */ var _booksDataReducer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booksDataReducer.js */ "./assets/js/reducers/booksDataReducer.js");\n\n\n\n/* harmony default export */ __webpack_exports__["a"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[/* combineReducers */ "b"])({\n  globalState: _appStateReducer_js__WEBPACK_IMPORTED_MODULE_1__[/* appStateReducer */ "a"],\n  booksData: _booksDataReducer_js__WEBPACK_IMPORTED_MODULE_2__[/* booksDataReducer */ "a"]\n}));\n\n//# sourceURL=webpack:///./assets/js/reducers/allReducers.js?');
    },
    "./assets/js/reducers/appStateReducer.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return appStateReducer; });\nconst initialState = {\n  myList: [],\n  openBookInfo: {},\n  popupOpen: false,\n  listOpen: false\n};\nlet newState;\nconst appStateReducer = function appStateReducer() {\n  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  let action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'addBook':\n      var myList = [...state.myList, action.payload];\n      newState = Object.assign({}, state, {\n        myList: myList\n      });\n      return newState;\n      break;\n\n    case 'removeBook':\n      var myList = state.myList.filter(item => item.id !== action.payload);\n      newState = Object.assign({}, state, {\n        myList: myList\n      });\n      return newState;\n      break;\n\n    case 'openBookInfo':\n      newState = Object.assign({}, state, {\n        popupOpen: true\n      });\n      console.log('============NEW STATE');\n      console.log('newState');\n      return newState;\n      break;\n\n    case 'closeBookInfo':\n      newState = Object.assign({}, state, {\n        popupOpen: false\n      });\n      return newState;\n      break;\n\n    case 'openMyList':\n      newState = Object.assign({}, state, {\n        listOpen: true\n      });\n      return newState;\n      break;\n\n    case 'closeMyList':\n      newState = Object.assign({}, state, {\n        listOpen: false\n      });\n      return newState;\n      break;\n\n    default:\n      return state;\n      break;\n  }\n};\n\n//# sourceURL=webpack:///./assets/js/reducers/appStateReducer.js?");
    },
    "./assets/js/reducers/booksDataReducer.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return booksDataReducer; });\nconst booksDataReducer = () => {\n  return [// ====== 1 ==========\n  {\n    id: '',\n    title: 'Subterranean',\n    author: 'James Rollins',\n    category: 'Novel, Thriller, Suspense, Adventure Fiction',\n    published: '1999',\n    coverURL: 'img/subterraneanBook.jpg',\n    review: 'Subterranean is a novel by James Rollins. Beneath the ice at the bottom of the Earth is a magnificent subterranean labyrinth, a place of breathtaking wonders – and terrors beyond imagining.'\n  }, // ====== 2 ==========\n  {\n    id: '',\n    title: 'The Crucible',\n    author: 'James Rollins',\n    category: 'Novel, Thriller, Suspense, Adventure Fiction',\n    published: '2019',\n    coverURL: 'https://img.thriftbooks.com/api/images/l/ecdf8bf5d7cec2fa44d4913e1aba0423feb9bd49.jpg',\n    review: 'Arriving home, Commander Gray Pierce discovers his house ransacked, his pregnant lover missing, and his best friends wife, Kat, unconscious on the kitchen floor. His one hope to find the woman he loves and his unborn child is Kat, the only witness to what happened. But the injured woman is in a semi-comatose state and cannot speak.'\n  }, // ====== 3 ==========\n  {\n    id: '',\n    title: 'Halo: The Fall of Reach',\n    author: 'Eric Nylund',\n    category: 'Novel, Science Fiction, Military science fiction',\n    published: '2001',\n    coverURL: 'https://images-na.ssl-images-amazon.com/images/I/51buAJmt%2B0L._SX320_BO1,204,203,200_.jpg',\n    review: 'Halo: The Fall of Reach is a military science fiction novel by Eric Nylund, set in the Halo universe, and acts as a prequel to Halo: Combat Evolved, the first game in the series. The book was released in October 2001 and is the first Halo novel. It takes place in the 26th century across several planets and locations. The novel details the events which led up to the game and explains the origins of the SPARTAN II super soldiers, narrating the story of the series protagonist, the Master Chief.'\n  }, // ====== 4 ==========\n  {\n    id: '',\n    title: 'Halo: The Flood',\n    author: 'Eric Nylund',\n    category: 'Novel, Science Fiction, Adventure fiction, Military science fiction',\n    published: '2003',\n    coverURL: 'https://images-na.ssl-images-amazon.com/images/I/51QKBcLl95L._SX310_BO1,204,203,200_.jpg',\n    review: 'Halo: The Flood is a military science fiction novel by William C. Dietz, based on the Halo series of video games and based specifically on the 2001 video game Halo: Combat Evolved, the first game in the series. The book was released in April 2003 and is the second Halo novel.'\n  }, // ====== 5 ==========\n  {\n    id: '',\n    title: 'Clean Code: A Handbook of Agile Software Craftsmanship',\n    author: 'Robert C. Martin',\n    category: 'education, information',\n    published: '2008',\n    coverURL: 'https://images-na.ssl-images-amazon.com/images/I/41jEbK-jG%2BL._SX374_BO1,204,203,200_.jpg',\n    review: 'Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn’t have to be that way.'\n  }, // ====== 6 ==========\n  {\n    id: '',\n    title: 'The Great Gatsby',\n    author: 'F. Scott Fitzgerald',\n    category: 'Novel, Comics, Tragedy, Psychological Fiction',\n    published: '1925',\n    coverURL: 'https://images-na.ssl-images-amazon.com/images/I/41iers%2BHLSL._SL300_.jpg',\n    review: 'The Great Gatsby is a 1925 novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional towns of West Egg and East Egg on prosperous Long Island in the summer of 1922.'\n  }];\n};\n\n//# sourceURL=webpack:///./assets/js/reducers/booksDataReducer.js?");
    }
});