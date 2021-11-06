/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/MainRouter.js":
/*!******************************!*\
  !*** ./client/MainRouter.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_auth_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/auth-helper */ \"./client/helpers/auth-helper.js\");\n/* harmony import */ var _pages_auth_SignIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/auth/SignIn */ \"./client/pages/auth/SignIn.js\");\n/* harmony import */ var _pages_auth_SignUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/auth/SignUp */ \"./client/pages/auth/SignUp.js\");\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Home */ \"./client/pages/Home.js\");\n/* harmony import */ var _pages_users_EditProfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/users/EditProfile */ \"./client/pages/users/EditProfile.js\");\n/* harmony import */ var _pages_users_Profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/users/Profile */ \"./client/pages/users/Profile.js\");\n/* harmony import */ var _pages_users_Users__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/users/Users */ \"./client/pages/users/Users.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\nconst RequireAuth = ({\n  children\n}) => {\n  let location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();\n\n  if (!_helpers_auth_helper__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isAuthenticated()) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Navigate, {\n      to: \"/signin\",\n      state: {\n        from: location\n      }\n    });\n  }\n\n  return children;\n};\n\n__signature__(RequireAuth, \"useLocation{location}\", () => [react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation]);\n\nconst MainRouter = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"/\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_Home__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"users\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_users_Users__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"signup\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_auth_SignUp__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"signin\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_auth_SignIn__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    path: \"*\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RequireAuth, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n      path: \"/users/:userId\",\n      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_users_Profile__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null)\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n      path: \"/users/:userId/edit\",\n      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_users_EditProfile__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)\n    })))\n  }));\n};\n\nconst _default = MainRouter;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(RequireAuth, \"RequireAuth\", \"/home/blessed/MERN/mern-base/client/MainRouter.js\");\n  reactHotLoader.register(MainRouter, \"MainRouter\", \"/home/blessed/MERN/mern-base/client/MainRouter.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/blessed/MERN/mern-base/client/MainRouter.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-base/./client/MainRouter.js?");

/***/ }),

/***/ "./client/components/DeleteUser.js":
/*!*****************************************!*\
  !*** ./client/components/DeleteUser.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/icons-material */ \"@mui/icons-material\");\n/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers_auth_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/auth-helper */ \"./client/helpers/auth-helper.js\");\n/* harmony import */ var _services_auth_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth-api */ \"./client/services/auth-api.js\");\n/* harmony import */ var _services_user_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user-api */ \"./client/services/user-api.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\nconst DeleteUser = () => {\n  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n  const {\n    userId\n  } = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useParams)();\n  const navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();\n\n  const clickButton = () => setOpen(true);\n\n  const handleRequestClose = () => setOpen(false);\n\n  const deleteAccount = () => {\n    const jwt = _helpers_auth_helper__WEBPACK_IMPORTED_MODULE_4__[\"default\"].isAuthenticated();\n    _services_user_api__WEBPACK_IMPORTED_MODULE_6__[\"default\"].remove({\n      userId\n    }, {\n      t: jwt.token\n    }).then(data => {\n      if (data && data.error) console.log(data.error);else _helpers_auth_helper__WEBPACK_IMPORTED_MODULE_4__[\"default\"].clearJwt(() => navigate('/'));\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {\n    onClick: clickButton,\n    color: \"secondary\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_0__.Delete, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Dialog, {\n    open: open,\n    onClose: handleRequestClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.DialogTitle, null, \"Delete Account\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.DialogContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.DialogContentText, null, \"Confirm to delete your account.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.DialogActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {\n    onClick: handleRequestClose,\n    color: \"primary\"\n  }, \"Cancel\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {\n    onClick: deleteAccount,\n    color: \"secondary\",\n    autoFocus: \"autoFocus\"\n  }, \"Confirm\"))));\n};\n\n__signature__(DeleteUser, \"useState{[open, setOpen](false)}\\nuseParams{{ userId }}\\nuseNavigate{navigate}\", () => [react_router__WEBPACK_IMPORTED_MODULE_3__.useParams, react_router__WEBPACK_IMPORTED_MODULE_3__.useNavigate]);\n\nconst _default = DeleteUser;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(DeleteUser, \"DeleteUser\", \"/home/blessed/MERN/mern-base/client/components/DeleteUser.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/blessed/MERN/mern-base/client/components/DeleteUser.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-base/./client/components/DeleteUser.js?");

/***/ }),

/***/ "./client/components/NavBar.js":
/*!*************************************!*\
  !*** ./client/components/NavBar.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/icons-material */ \"@mui/icons-material\");\n/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/colors */ \"@mui/material/colors\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/system */ \"@mui/system\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _helpers_auth_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/auth-helper */ \"./client/helpers/auth-helper.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\nconst NavBar = () => {\n  const theme = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.useTheme)();\n  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useLocation)();\n  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(null);\n  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();\n\n  const handleChange = event => {\n    setAuth(event.target.checked);\n  };\n\n  const Offset = (0,_mui_system__WEBPACK_IMPORTED_MODULE_4__.styled)('div')(({\n    theme\n  }) => theme.mixins.toolbar);\n\n  const handleMenu = event => {\n    setAnchorEl(event.currentTarget);\n  };\n\n  const handleClose = () => {\n    setAnchorEl(null);\n  };\n\n  const signOut = () => {\n    _helpers_auth_helper__WEBPACK_IMPORTED_MODULE_7__[\"default\"].clearJwt(() => navigate('/'));\n    handleClose();\n  };\n\n  const goToProfile = () => {\n    handleClose();\n\n    const userId = _helpers_auth_helper__WEBPACK_IMPORTED_MODULE_7__[\"default\"].isAuthenticated().user._id;\n\n    navigate(`/users/${userId}`);\n  };\n\n  const isActive = path => {\n    if (location.pathname === path) return _mui_material_colors__WEBPACK_IMPORTED_MODULE_3__.pink[300];else return '#fff';\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.AppBar, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Toolbar, {\n    position: \"static\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n    variant: \"h6\",\n    color: \"inherit\"\n  }, \"MERN Base\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {\n    to: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.Home, {\n    sx: {\n      color: isActive('/')\n    }\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {\n    to: \"users\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    sx: {\n      color: isActive('/users')\n    }\n  }, \"Users\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n    sx: {\n      flexGrow: 1\n    }\n  }), _helpers_auth_helper__WEBPACK_IMPORTED_MODULE_7__[\"default\"].isAuthenticated() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {\n    size: \"large\",\n    \"aria-label\": \"account of current user\",\n    \"aria-controls\": \"menu-appbar\",\n    \"aria-haspopup\": \"true\",\n    onClick: handleMenu,\n    color: \"inherit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.AccountCircle, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n    id: \"menu-appbar\",\n    anchorEl: anchorEl,\n    anchorOrigin: {\n      vertical: 'top',\n      horizontal: 'right'\n    },\n    keepMounted: true,\n    transformOrigin: {\n      vertical: 'top',\n      horizontal: 'right'\n    },\n    open: Boolean(anchorEl),\n    onClose: handleClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {\n    onClick: goToProfile\n  }, \"Profile\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {\n    onClick: signOut\n  }, \"Sign Out\"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {\n    to: \"signin\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    sx: {\n      color: isActive('/signin')\n    }\n  }, \"Sign In\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {\n    to: \"signup\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    sx: {\n      color: isActive('/signup')\n    }\n  }, \"Sign Up\"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(Offset, null));\n};\n\n__signature__(NavBar, \"useTheme{theme}\\nuseLocation{location}\\nuseState{[anchorEl, setAnchorEl](null)}\\nuseNavigate{navigate}\", () => [_emotion_react__WEBPACK_IMPORTED_MODULE_0__.useTheme, react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useLocation, react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate]);\n\nconst _default = NavBar;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(NavBar, \"NavBar\", \"/home/blessed/MERN/mern-base/client/components/NavBar.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/blessed/MERN/mern-base/client/components/NavBar.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-base/./client/components/NavBar.js?");

/***/ }),

/***/ "./client/createEmotionCache.js":
/*!**************************************!*\
  !*** ./client/createEmotionCache.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst _default = () => {\n  return _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default()({\n    key: 'css'\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/home/blessed/MERN/mern-base/client/createEmotionCache.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-base/./client/createEmotionCache.js?");

/***/ }),

/***/ "./client/helpers/auth-helper.js":
/*!***************************************!*\
  !*** ./client/helpers/auth-helper.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _services_auth_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth-api */ \"./client/services/auth-api.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst authenticate = (jwt, cb) => {\n  if (typeof window !== 'undefined') sessionStorage.setItem('jwt', JSON.stringify(jwt));\n  cb();\n};\n\nconst isAuthenticated = () => {\n  if (typeof window == 'undefined') return false;\n  let jwt = sessionStorage.getItem('jwt');\n  if (jwt) return JSON.parse(jwt);else return false;\n};\n\nconst clearJwt = cb => {\n  if (typeof window !== 'undefined') sessionStorage.removeItem('jwt');\n  cb();\n  _services_auth_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].signout().then(data => {\n    document.cookie = 't=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';\n  });\n};\n\nconst _default = {\n  authenticate,\n  isAuthenticated,\n  clearJwt\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(authenticate, \"authenticate\", \"/home/blessed/MERN/mern-base/client/helpers/auth-helper.js\");\n  reactHotLoader.register(isAuthenticated, \"isAuthenticated\", \"/home/blessed/MERN/mern-base/client/helpers/auth-helper.js\");\n  reactHotLoader.register(clearJwt, \"clearJwt\", \"/home/blessed/MERN/mern-base/client/helpers/auth-helper.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/blessed/MERN/mern-base/client/helpers/auth-helper.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-base/./client/helpers/auth-helper.js?");

/***/ }),

/***/ "./client/pages/Home.js":
/*!******************************!*\
  !*** ./client/pages/Home.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_images_unicornbike_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/unicornbike.jpg */ \"./client/assets/images/unicornbike.jpg\");\n/* harmony import */ var _helpers_auth_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/auth-helper */ \"./client/helpers/auth-helper.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nconst useStyles = () => {\n  const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.useTheme)();\n  return {\n    card: {\n      maxWidth: 600,\n      margin: 'auto',\n      marginTop: theme.spacing(5)\n    },\n    title: {\n      padding: `${theme.spacing(1.5)} ${theme.spacing(2)} ${theme.spacing(1.5)}`,\n      color: theme.palette.openTitle\n    },\n    media: {\n      minHeight: 400\n    }\n  };\n};\n\n__signature__(useStyles, \"useTheme{theme}\", () => [_mui_material__WEBPACK_IMPORTED_MODULE_0__.useTheme]);\n\nconst Home = () => {\n  const styles = useStyles();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Card, {\n    sx: styles.card\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {\n    sx: styles.title,\n    variant: \"h6\"\n  }, \"Home Page\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__.CardMedia, {\n    sx: styles.media,\n    component: \"img\",\n    image: _assets_images_unicornbike_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    title: \"Unicorn Bicycle\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__.CardContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {\n    variant: \"body2\",\n    component: \"p\"\n  }, \"Welcome to the MERN Base home page\")));\n};\n\n__signature__(Home, \"useStyles{styles}\", () => [useStyles]);\n\nconst _default = Home;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"/home/blessed/MERN/mern-base/client/pages/Home.js\");\n  reactHotLoader.register(Home, \"Home\", \"/home/blessed/MERN/mern-base/client/pages/Home.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/blessed/MERN/mern-base/client/pages/Home.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-base/./client/pages/Home.js?");

/***/ }),

/***/ "./client/pages/auth/SignIn.js":
/*!*************************************!*\
  !*** ./client/pages/auth/SignIn.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers_auth_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/auth-helper */ \"./client/helpers/auth-helper.js\");\n/* harmony import */ var _services_auth_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth-api */ \"./client/services/auth-api.js\");\n/* harmony import */ var _services_user_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user-api */ \"./client/services/user-api.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\nconst useStyles = () => {\n  const theme = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.useTheme)();\n  return {\n    card: {\n      maxWidth: 600,\n      margin: 'auto',\n      textAlign: 'center',\n      marginTop: theme.spacing(5),\n      paddingBottom: theme.spacing(2)\n    },\n    title: {\n      marginTop: theme.spacing(2),\n      color: theme.palette.openTitle\n    },\n    textField: {\n      marginLeft: 1,\n      marginRight: 1,\n      width: 300\n    },\n    error: {\n      fontSize: 13\n    },\n    submit: {\n      margin: 'auto',\n      marginBottom: theme.spacing(2)\n    }\n  };\n};\n\n__signature__(useStyles, \"useTheme{theme}\", () => [_emotion_react__WEBPACK_IMPORTED_MODULE_0__.useTheme]);\n\nconst SignIn = () => {\n  var _location$state, _location$state$from;\n\n  const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    password: '',\n    email: ''\n  });\n  const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n  let navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();\n  let location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)();\n  let from = ((_location$state = location.state) === null || _location$state === void 0 ? void 0 : (_location$state$from = _location$state.from) === null || _location$state$from === void 0 ? void 0 : _location$state$from.pathname) || '/';\n\n  const handleChange = name => event => {\n    setValues({ ...values,\n      [name]: event.target.value\n    });\n  };\n\n  const clickSubmit = () => {\n    const {\n      email,\n      password\n    } = values;\n    const user = {\n      email,\n      password\n    };\n    _services_auth_api__WEBPACK_IMPORTED_MODULE_5__[\"default\"].signin(user).then(data => {\n      if (data.error) {\n        if (typeof data.error === 'string') setError(data.error);\n        if (typeof data === 'object') setErrors(data.error);\n      } else _helpers_auth_helper__WEBPACK_IMPORTED_MODULE_4__[\"default\"].authenticate(data, () => navigate(from, {\n        replace: true\n      }));\n    });\n  };\n\n  const styles = useStyles();\n\n  const renderError = err => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {\n    key: err,\n    sx: styles.error,\n    component: \"p\",\n    color: \"error\"\n  }, err);\n\n  const displayErrors = (field = '') => {\n    if (field === '') {\n      return error && renderError(error);\n    }\n\n    return errors[field] && errors[field].map(err => renderError(err));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Card, {\n    sx: styles.card\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {\n    variant: \"h6\",\n    sx: styles.title\n  }, \"Sign In\"), displayErrors(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n    id: \"email\",\n    label: \"Email\",\n    type: \"email\",\n    sx: styles.textField,\n    value: values.email,\n    onChange: handleChange('email'),\n    margin: \"normal\"\n  }), displayErrors('email'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n    id: \"password\",\n    label: \"Password\",\n    type: \"password\",\n    sx: styles.textField,\n    value: values.password,\n    onChange: handleChange('password'),\n    margin: \"normal\"\n  }), displayErrors('password')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {\n    color: \"primary\",\n    variant: \"contained\",\n    type: \"submit\",\n    onClick: clickSubmit,\n    sx: styles.submit\n  }, \"Submit\")));\n};\n\n__signature__(SignIn, \"useState{[values, setValues]({\\n    password: '',\\n    email: '',\\n  })}\\nuseState{[errors, setErrors]({})}\\nuseState{[error, setError]('')}\\nuseNavigate{navigate}\\nuseLocation{location}\\nuseStyles{styles}\", () => [react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate, react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation, useStyles]);\n\nconst _default = SignIn;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"/home/blessed/MERN/mern-base/client/pages/auth/SignIn.js\");\n  reactHotLoader.register(SignIn, \"SignIn\", \"/home/blessed/MERN/mern-base/client/pages/auth/SignIn.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/blessed/MERN/mern-base/client/pages/auth/SignIn.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-base/./client/pages/auth/SignIn.js?");

/***/ }),

/***/ "./client/pages/auth/SignUp.js":
/*!*************************************!*\
  !*** ./client/pages/auth/SignUp.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_user_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user-api */ \"./client/services/user-api.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nconst useStyles = () => {\n  const theme = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.useTheme)();\n  return {\n    card: {\n      maxWidth: 600,\n      margin: 'auto',\n      textAlign: 'center',\n      marginTop: theme.spacing(5),\n      paddingBottom: theme.spacing(2)\n    },\n    title: {\n      marginTop: theme.spacing(2),\n      color: theme.palette.openTitle\n    },\n    textField: {\n      marginLeft: 1,\n      marginRight: 1,\n      width: 300\n    },\n    error: {\n      fontSize: 13\n    },\n    submit: {\n      margin: 'auto',\n      marginBottom: theme.spacing(2)\n    }\n  };\n};\n\n__signature__(useStyles, \"useTheme{theme}\", () => [_emotion_react__WEBPACK_IMPORTED_MODULE_0__.useTheme]);\n\nconst SignUp = () => {\n  const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    name: '',\n    password: '',\n    email: ''\n  });\n  const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n  const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n\n  const handleChange = name => event => {\n    setValues({ ...values,\n      [name]: event.target.value\n    });\n  };\n\n  const clickSubmit = () => {\n    const {\n      name,\n      email,\n      password\n    } = values;\n    const user = {\n      name,\n      email,\n      password\n    };\n    _services_user_api__WEBPACK_IMPORTED_MODULE_4__[\"default\"].create(user).then(data => {\n      if (data.error) setErrors(data.error);else {\n        setMessage(data.message);\n        setOpen(true);\n      }\n    });\n  };\n\n  const styles = useStyles();\n\n  const displayErrors = field => {\n    return errors[field] && errors[field].map(err => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {\n      sx: styles.error,\n      component: \"p\",\n      color: \"error\"\n    }, err));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Card, {\n    sx: styles.card\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {\n    variant: \"h6\",\n    sx: styles.title\n  }, \"Sign Up\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n    id: \"name\",\n    label: \"Name\",\n    sx: styles.textField,\n    value: values.name,\n    onChange: handleChange('name'),\n    margin: \"normal\"\n  }), displayErrors('name'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n    id: \"email\",\n    label: \"Email\",\n    type: \"email\",\n    sx: styles.textField,\n    value: values.email,\n    onChange: handleChange('email'),\n    margin: \"normal\"\n  }), displayErrors('email'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n    id: \"password\",\n    label: \"Password\",\n    type: \"password\",\n    sx: styles.textField,\n    value: values.password,\n    onChange: handleChange('password'),\n    margin: \"normal\"\n  }), displayErrors('password')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {\n    color: \"primary\",\n    variant: \"contained\",\n    type: \"submit\",\n    onClick: clickSubmit,\n    sx: styles.submit\n  }, \"Submit\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Dialog, {\n    open: open,\n    disableBaackdropClick: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.DialogTitle, null, \"New Account\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.DialogContent, null, message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.DialogActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n    to: \"/signin\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {\n    color: \"primary\",\n    autoFocus: \"autoFocus\",\n    variant: \"contained\"\n  }, \"Sign In\")))));\n};\n\n__signature__(SignUp, \"useState{[values, setValues]({\\n    name: '',\\n    password: '',\\n    email: '',\\n  })}\\nuseState{[errors, setErrors]({})}\\nuseState{[open, setOpen](false)}\\nuseState{[message, setMessage]('')}\\nuseStyles{styles}\", () => [useStyles]);\n\nconst _default = SignUp;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"/home/blessed/MERN/mern-base/client/pages/auth/SignUp.js\");\n  reactHotLoader.register(SignUp, \"SignUp\", \"/home/blessed/MERN/mern-base/client/pages/auth/SignUp.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/blessed/MERN/mern-base/client/pages/auth/SignUp.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-base/./client/pages/auth/SignUp.js?");

/***/ }),

/***/ "./client/pages/users/EditProfile.js":
/*!*******************************************!*\
  !*** ./client/pages/users/EditProfile.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers_auth_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/auth-helper */ \"./client/helpers/auth-helper.js\");\n/* harmony import */ var _services_user_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user-api */ \"./client/services/user-api.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\nconst useStyles = () => {\n  const theme = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.useTheme)();\n  return {\n    card: {\n      maxWidth: 600,\n      margin: 'auto',\n      textAlign: 'center',\n      marginTop: theme.spacing(5),\n      paddingBottom: theme.spacing(2)\n    },\n    title: {\n      marginTop: theme.spacing(2),\n      color: theme.palette.openTitle\n    },\n    textField: {\n      marginLeft: 1,\n      marginRight: 1,\n      width: 300\n    },\n    error: {\n      fontSize: 13\n    },\n    submit: {\n      margin: 'auto',\n      marginBottom: theme.spacing(2)\n    }\n  };\n};\n\n__signature__(useStyles, \"useTheme{theme}\", () => [_emotion_react__WEBPACK_IMPORTED_MODULE_0__.useTheme]);\n\nconst EditProfile = () => {\n  const [values, setValues] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    name: '',\n    password: '',\n    email: ''\n  });\n  const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n  const {\n    userId\n  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams)();\n  let navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    const abortController = new AbortController();\n    const {\n      signal\n    } = abortController;\n    const jwt = _helpers_auth_helper__WEBPACK_IMPORTED_MODULE_4__[\"default\"].isAuthenticated();\n    _services_user_api__WEBPACK_IMPORTED_MODULE_5__[\"default\"].read({\n      userId\n    }, {\n      t: jwt.token\n    }, signal).then(data => setValues({ ...values,\n      name: data.name,\n      email: data.email\n    }));\n    return () => abortController.abort();\n  }, [userId]);\n\n  const handleChange = name => event => {\n    setValues({ ...values,\n      [name]: event.target.value\n    });\n  };\n\n  const clickSubmit = () => {\n    const {\n      name,\n      email,\n      password\n    } = values;\n    const user = {\n      name,\n      email,\n      password: password || undefined\n    };\n    const jwt = _helpers_auth_helper__WEBPACK_IMPORTED_MODULE_4__[\"default\"].isAuthenticated();\n    _services_user_api__WEBPACK_IMPORTED_MODULE_5__[\"default\"].update({\n      userId\n    }, {\n      t: jwt.token\n    }, user).then(data => {\n      if (data.error) setErrors(data.error);else navigate(`/users/${userId}`);\n    });\n  };\n\n  const styles = useStyles();\n\n  const displayErrors = field => {\n    return errors[field] && errors[field].map(err => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {\n      sx: styles.error,\n      component: \"p\",\n      color: \"error\"\n    }, err));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Card, {\n    sx: styles.card\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {\n    variant: \"h6\",\n    sx: styles.title\n  }, \"Edit Profile\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n    id: \"name\",\n    label: \"Name\",\n    sx: styles.textField,\n    value: values.name,\n    onChange: handleChange('name'),\n    margin: \"normal\"\n  }), displayErrors('name'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n    id: \"email\",\n    label: \"Email\",\n    type: \"email\",\n    sx: styles.textField,\n    value: values.email,\n    onChange: handleChange('email'),\n    margin: \"normal\"\n  }), displayErrors('email'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n    id: \"password\",\n    label: \"Password\",\n    type: \"password\",\n    sx: styles.textField,\n    value: values.password,\n    onChange: handleChange('password'),\n    margin: \"normal\"\n  }), displayErrors('password')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardActions, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {\n    color: \"primary\",\n    variant: \"contained\",\n    type: \"submit\",\n    onClick: clickSubmit,\n    sx: styles.submit\n  }, \"Submit\"))));\n};\n\n__signature__(EditProfile, \"useState{[values, setValues]({\\n    name: '',\\n    password: '',\\n    email: '',\\n  })}\\nuseState{[errors, setErrors]({})}\\nuseParams{{ userId }}\\nuseNavigate{navigate}\\nuseEffect{}\\nuseStyles{styles}\", () => [react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useParams, react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate, useStyles]);\n\nconst _default = EditProfile;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"/home/blessed/MERN/mern-base/client/pages/users/EditProfile.js\");\n  reactHotLoader.register(EditProfile, \"EditProfile\", \"/home/blessed/MERN/mern-base/client/pages/users/EditProfile.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/blessed/MERN/mern-base/client/pages/users/EditProfile.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-base/./client/pages/users/EditProfile.js?");

/***/ }),

/***/ "./client/pages/users/Profile.js":
/*!***************************************!*\
  !*** ./client/pages/users/Profile.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/icons-material */ \"@mui/icons-material\");\n/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_DeleteUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/DeleteUser */ \"./client/components/DeleteUser.js\");\n/* harmony import */ var _helpers_auth_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/auth-helper */ \"./client/helpers/auth-helper.js\");\n/* harmony import */ var _services_user_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/user-api */ \"./client/services/user-api.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\nconst useStyles = () => {\n  const theme = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.useTheme)();\n  return {\n    root: {\n      maxWidth: 600,\n      margin: 'auto',\n      p: 2,\n      marginTop: theme.spacing(2)\n    },\n    title: {\n      marginTop: theme.spacing(1),\n      color: theme.palette.protectedTitle\n    }\n  };\n};\n\n__signature__(useStyles, \"useTheme{theme}\", () => [_emotion_react__WEBPACK_IMPORTED_MODULE_0__.useTheme]);\n\nconst Profile = () => {\n  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});\n  const {\n    userId\n  } = (0,react_router__WEBPACK_IMPORTED_MODULE_4__.useParams)();\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {\n    const abortController = new AbortController();\n    const {\n      signal\n    } = abortController;\n    const jwt = _helpers_auth_helper__WEBPACK_IMPORTED_MODULE_7__[\"default\"].isAuthenticated();\n    _services_user_api__WEBPACK_IMPORTED_MODULE_8__[\"default\"].read({\n      userId\n    }, {\n      t: jwt.token\n    }, signal).then(data => setUser(data));\n    return () => abortController.abort();\n  }, [userId]);\n  const styles = useStyles();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Paper, {\n    sx: styles.root,\n    elevation: 4\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n    variant: \"h6\",\n    sx: styles.title\n  }, \"Profile\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.List, {\n    dense: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItemAvatar, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Avatar, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.Person, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItemText, {\n    primary: user.name,\n    secondary: user.email\n  }), _helpers_auth_helper__WEBPACK_IMPORTED_MODULE_7__[\"default\"].isAuthenticated() && _helpers_auth_helper__WEBPACK_IMPORTED_MODULE_7__[\"default\"].isAuthenticated().user._id == user._id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItemSecondaryAction, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {\n    to: `/users/${user._id}/edit`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {\n    color: \"primary\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.Edit, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_components_DeleteUser__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItemText, {\n    primary: `Joined: ${new Date(user.createdAt).toDateString()}`\n  }))));\n};\n\n__signature__(Profile, \"useState{[user, setUser]({})}\\nuseParams{{ userId }}\\nuseEffect{}\\nuseStyles{styles}\", () => [react_router__WEBPACK_IMPORTED_MODULE_4__.useParams, useStyles]);\n\nconst _default = Profile;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"/home/blessed/MERN/mern-base/client/pages/users/Profile.js\");\n  reactHotLoader.register(Profile, \"Profile\", \"/home/blessed/MERN/mern-base/client/pages/users/Profile.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/blessed/MERN/mern-base/client/pages/users/Profile.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-base/./client/pages/users/Profile.js?");

/***/ }),

/***/ "./client/pages/users/Users.js":
/*!*************************************!*\
  !*** ./client/pages/users/Users.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_user_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user-api */ \"./client/services/user-api.js\");\n/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material */ \"@mui/icons-material\");\n/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\nconst useStyles = () => {\n  const theme = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.useTheme)();\n  return {\n    root: {\n      p: 1,\n      m: 3\n    },\n    title: {\n      m: `${theme.spacing(1)} ${theme.spacing(1)} ${theme.spacing(0)}`,\n      color: theme.palette.openTitle\n    }\n  };\n};\n\n__signature__(useStyles, \"useTheme{theme}\", () => [_emotion_react__WEBPACK_IMPORTED_MODULE_0__.useTheme]);\n\nconst Users = () => {\n  const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    const abortController = new AbortController();\n    const signal = abortController.signal;\n    _services_user_api__WEBPACK_IMPORTED_MODULE_4__[\"default\"].list(signal).then(data => {\n      if (data && data.error) console.log(data.error);else setUsers(data);\n    });\n    return () => abortController.abort();\n  }, []);\n  const styles = useStyles();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Paper, {\n    sx: styles.root,\n    elevation: 2\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {\n    sx: styles.title,\n    variant: \"h6\"\n  }, \"All Users\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.List, {\n    dense: true\n  }, users.map((user, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n    to: `/users/${user._id}`,\n    key: i\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemAvatar, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Avatar, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_5__.Person, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemText, {\n    primary: user.name\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemSecondaryAction, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_5__.ArrowForward, null))))))));\n};\n\n__signature__(Users, \"useState{[users, setUsers]([])}\\nuseEffect{}\\nuseStyles{styles}\", () => [useStyles]);\n\nconst _default = Users;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"/home/blessed/MERN/mern-base/client/pages/users/Users.js\");\n  reactHotLoader.register(Users, \"Users\", \"/home/blessed/MERN/mern-base/client/pages/users/Users.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/blessed/MERN/mern-base/client/pages/users/Users.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-base/./client/pages/users/Users.js?");

/***/ }),

/***/ "./client/services/auth-api.js":
/*!*************************************!*\
  !*** ./client/services/auth-api.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _json_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json-headers */ \"./client/services/json-headers.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\nconst BASE_URL = '/api/auth';\n\nconst signin = async user => {\n  try {\n    let response = await fetch(`${BASE_URL}/signin`, {\n      method: 'POST',\n      headers: _json_headers__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n      body: JSON.stringify(user)\n    });\n    return await response.json();\n  } catch (error) {\n    console.log(error);\n  }\n};\n\nconst signout = async () => {\n  try {\n    let response = await fetch(`${BASE_URL}/signout`, {\n      method: 'GET',\n      headers: _json_headers__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n    });\n    return await response.json();\n  } catch (error) {\n    console.log(error);\n  }\n};\n\nconst _default = {\n  signin,\n  signout\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(BASE_URL, \"BASE_URL\", \"/home/blessed/MERN/mern-base/client/services/auth-api.js\");\n  reactHotLoader.register(signin, \"signin\", \"/home/blessed/MERN/mern-base/client/services/auth-api.js\");\n  reactHotLoader.register(signout, \"signout\", \"/home/blessed/MERN/mern-base/client/services/auth-api.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/blessed/MERN/mern-base/client/services/auth-api.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-base/./client/services/auth-api.js?");

/***/ }),

/***/ "./client/services/json-headers.js":
/*!*****************************************!*\
  !*** ./client/services/json-headers.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst jsonHeaders = {\n  Accept: 'application/json',\n  'Content-Type': 'application/json'\n};\nconst _default = jsonHeaders;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(jsonHeaders, \"jsonHeaders\", \"/home/blessed/MERN/mern-base/client/services/json-headers.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/blessed/MERN/mern-base/client/services/json-headers.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-base/./client/services/json-headers.js?");

/***/ }),

/***/ "./client/services/user-api.js":
/*!*************************************!*\
  !*** ./client/services/user-api.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _json_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json-headers */ \"./client/services/json-headers.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\nconst BASE_URL = '/api/users';\n\nconst create = async user => {\n  try {\n    let response = await fetch(`${BASE_URL}`, {\n      method: 'POST',\n      headers: _json_headers__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n      body: JSON.stringify(user)\n    });\n    return await response.json();\n  } catch (error) {\n    console.log(error);\n  }\n};\n\nconst list = async signal => {\n  try {\n    let response = await fetch(`${BASE_URL}`, {\n      method: 'GET',\n      signal,\n      headers: _json_headers__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n    });\n    return await response.json();\n  } catch (error) {\n    console.log(error);\n  }\n};\n\nconst read = async (params, credentials, signal) => {\n  try {\n    let response = await fetch(`${BASE_URL}/${params.userId}`, {\n      method: 'GET',\n      signal,\n      headers: { ..._json_headers__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        Authorization: `Bearer ${credentials.t}`\n      }\n    });\n    return await response.json();\n  } catch (error) {\n    console.log(error);\n  }\n};\n\nconst update = async (params, credentials, user) => {\n  try {\n    let response = await fetch(`${BASE_URL}/${params.userId}`, {\n      method: 'PUT',\n      headers: { ..._json_headers__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        Authorization: `Bearer ${credentials.t}`\n      },\n      body: JSON.stringify(user)\n    });\n    return await response.json();\n  } catch (error) {\n    console.log(error);\n  }\n};\n\nconst remove = async (params, credentials) => {\n  try {\n    let response = await fetch(`${BASE_URL}/${params.userId}`, {\n      method: 'DELETE',\n      headers: { ..._json_headers__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        Authorization: `Bearer ${credentials.t}`\n      }\n    });\n    return await response.json();\n  } catch (error) {\n    console.log(error);\n  }\n};\n\nconst _default = {\n  create,\n  list,\n  read,\n  update,\n  remove\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(BASE_URL, \"BASE_URL\", \"/home/blessed/MERN/mern-base/client/services/user-api.js\");\n  reactHotLoader.register(create, \"create\", \"/home/blessed/MERN/mern-base/client/services/user-api.js\");\n  reactHotLoader.register(list, \"list\", \"/home/blessed/MERN/mern-base/client/services/user-api.js\");\n  reactHotLoader.register(read, \"read\", \"/home/blessed/MERN/mern-base/client/services/user-api.js\");\n  reactHotLoader.register(update, \"update\", \"/home/blessed/MERN/mern-base/client/services/user-api.js\");\n  reactHotLoader.register(remove, \"remove\", \"/home/blessed/MERN/mern-base/client/services/user-api.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/blessed/MERN/mern-base/client/services/user-api.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-base/./client/services/user-api.js?");

/***/ }),

/***/ "./client/theme.js":
/*!*************************!*\
  !*** ./client/theme.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/colors */ \"@mui/material/colors\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n  palette: {\n    primary: {\n      main: '#556cd6'\n    },\n    secondary: {\n      main: '#19857b'\n    },\n    error: {\n      main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.red.A400\n    },\n    openTitle: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.blue[700],\n    protectedTitle: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.pink[400]\n  }\n});\nconst _default = theme;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(theme, \"theme\", \"/home/blessed/MERN/mern-base/client/theme.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/blessed/MERN/mern-base/client/theme.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-base/./client/theme.js?");

/***/ }),

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst config = {\n  env: \"development\" || 0,\n  port: process.env.PORT || 3000,\n  jwtSecret: process.env.JWT_SECRET || 'my-$uper-$3cr3t',\n  mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST || 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017') + '/mern-base'\n};\nconst _default = config;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(config, \"config\", \"/home/blessed/MERN/mern-base/config/index.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/blessed/MERN/mern-base/config/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-base/./config/index.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ \"./config/index.js\");\n/* harmony import */ var _webpack_config_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../webpack.config.client */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nconst compile = app => {\n  if (_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].env === 'development') {\n    const compiler = webpack__WEBPACK_IMPORTED_MODULE_0___default()((_webpack_config_client__WEBPACK_IMPORTED_MODULE_4___default()));\n    const middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default()(compiler, {\n      publicPath: (_webpack_config_client__WEBPACK_IMPORTED_MODULE_4___default().output.publicPath)\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler));\n  }\n};\n\nconst _default = {\n  compile\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, \"compile\", \"/home/blessed/MERN/mern-base/server/devBundle.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/blessed/MERN/mern-base/server/devBundle.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-base/./server/devBundle.js?");

/***/ }),

/***/ "./server/helpers/auth.js":
/*!********************************!*\
  !*** ./server/helpers/auth.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express_jwt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ \"./config/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst requireSignIn = express_jwt__WEBPACK_IMPORTED_MODULE_0___default()({\n  secret: _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].jwtSecret,\n  algorithms: ['HS256'],\n  userProperty: 'auth'\n});\n\nconst hasAuthorization = (req, res, next) => {\n  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;\n  if (!authorized) return res.status(403).json({\n    error: 'User is not authorized'\n  });\n  next();\n};\n\nconst _default = {\n  requireSignIn,\n  hasAuthorization\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(requireSignIn, \"requireSignIn\", \"/home/blessed/MERN/mern-base/server/helpers/auth.js\");\n  reactHotLoader.register(hasAuthorization, \"hasAuthorization\", \"/home/blessed/MERN/mern-base/server/helpers/auth.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/blessed/MERN/mern-base/server/helpers/auth.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-base/./server/helpers/auth.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./config/index.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ \"./server/main.js\");\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n(mongoose__WEBPACK_IMPORTED_MODULE_0___default().Promise) = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mongoUri);\nmongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.on('error', () => {\n  throw new Error(`Unable to connect to database: ${_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mongoUri}`);\n});\n_main__WEBPACK_IMPORTED_MODULE_2__[\"default\"].listen(_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].port, err => {\n  if (err) console.log(err);\n  console.info(`Server started on port ${_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].port}`);\n});\n\n//# sourceURL=webpack://mern-base/./server/index.js?");

/***/ }),

/***/ "./server/main.js":
/*!************************!*\
  !*** ./server/main.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"@mui/material/CssBaseline\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/server/create-instance */ \"@emotion/server/create-instance\");\n/* harmony import */ var _emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _client_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../client/theme */ \"./client/theme.js\");\n/* harmony import */ var _client_MainRouter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../client/MainRouter */ \"./client/MainRouter.js\");\n/* harmony import */ var _client_components_NavBar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../client/components/NavBar */ \"./client/components/NavBar.js\");\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../template */ \"./template.js\");\n/* harmony import */ var _routes_user_routes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./routes/user.routes */ \"./server/routes/user.routes.js\");\n/* harmony import */ var _routes_auth_routes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./routes/auth.routes */ \"./server/routes/auth.routes.js\");\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n/* harmony import */ var _client_createEmotionCache__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../client/createEmotionCache */ \"./client/createEmotionCache.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_1___default()();\n_devBundle__WEBPACK_IMPORTED_MODULE_19__[\"default\"].compile(app);\nconst CURRENT_WORKING_DIR = process.cwd();\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default().json());\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default().urlencoded({\n  extended: true\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(compression__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(helmet__WEBPACK_IMPORTED_MODULE_5___default()());\napp.use(cors__WEBPACK_IMPORTED_MODULE_4___default()());\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_1___default()[\"static\"](path__WEBPACK_IMPORTED_MODULE_0___default().join(CURRENT_WORKING_DIR, 'dist')));\napp.use('/api/users', _routes_user_routes__WEBPACK_IMPORTED_MODULE_17__[\"default\"]);\napp.use('/api/auth', _routes_auth_routes__WEBPACK_IMPORTED_MODULE_18__[\"default\"]);\napp.get('*', (req, res) => {\n  const cache = (0,_client_createEmotionCache__WEBPACK_IMPORTED_MODULE_20__[\"default\"])();\n  const {\n    extractCriticalToChunks,\n    constructStyleTagsFromChunks\n  } = _emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_9___default()(cache);\n  const context = {};\n  const html = react_dom_server__WEBPACK_IMPORTED_MODULE_10___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_emotion_react__WEBPACK_IMPORTED_MODULE_11__.CacheProvider, {\n    value: cache\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_8__.StaticRouter, {\n    location: req.url,\n    context: context\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.ThemeProvider, {\n    theme: _client_theme__WEBPACK_IMPORTED_MODULE_13__[\"default\"]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_7___default()), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_client_components_NavBar__WEBPACK_IMPORTED_MODULE_15__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default().createElement(_client_MainRouter__WEBPACK_IMPORTED_MODULE_14__[\"default\"], null)))));\n  const emotionChunks = extractCriticalToChunks(html);\n  const emotionCss = constructStyleTagsFromChunks(emotionChunks);\n  res.send((0,_template__WEBPACK_IMPORTED_MODULE_16__[\"default\"])({\n    markup: html,\n    css: emotionCss\n  }));\n});\napp.use((err, req, res, next) => {\n  if (err.name === 'UnauthorizedError') {\n    return res.status(401).json({\n      error: err.name + ': ' + err.message\n    });\n  } else if (err) {\n    return res.status(400).json({\n      error: err.name + ': ' + err.message\n    });\n  }\n});\nconst _default = app;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(app, \"app\", \"/home/blessed/MERN/mern-base/server/main.js\");\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/home/blessed/MERN/mern-base/server/main.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/blessed/MERN/mern-base/server/main.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-base/./server/main.js?");

/***/ }),

/***/ "./server/models/user.model.js":
/*!*************************************!*\
  !*** ./server/models/user.model.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_1__.Schema({\n  name: {\n    type: String,\n    trim: true,\n    required: true\n  },\n  email: {\n    type: String,\n    trim: true,\n    unique: true,\n    match: [/.+\\@.+\\..+/, 'Please fill a valid email address'],\n    required: true\n  },\n  hashedPassword: {\n    type: String,\n    required: true\n  },\n  salt: String\n}, {\n  timestamps: true\n});\nuserSchema.virtual('password').set(function (password) {\n  this._password = password;\n  this.salt = this.makeSalt();\n  this.hashedPassword = this.encryptPassword(password);\n}).get(function () {\n  return this._password;\n});\nuserSchema.virtual('data').get(function () {\n  this.hashedPassword = undefined;\n  this.salt = undefined;\n  return this;\n});\nuserSchema.methods = {\n  makeSalt: function () {\n    return Math.round(new Date().valueOf() * Math.random()).toString();\n  },\n  encryptPassword: function (password) {\n    try {\n      return crypto__WEBPACK_IMPORTED_MODULE_0___default().createHmac('sha1', this.salt).update(password).digest('hex');\n    } catch (err) {\n      return '';\n    }\n  },\n  authenticate: function (plainText) {\n    return this.encryptPassword(plainText) === this.hashedPassword;\n  }\n};\n\nconst _default = (0,mongoose__WEBPACK_IMPORTED_MODULE_1__.model)('User', userSchema);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(userSchema, \"userSchema\", \"/home/blessed/MERN/mern-base/server/models/user.model.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/blessed/MERN/mern-base/server/models/user.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-base/./server/models/user.model.js?");

/***/ }),

/***/ "./server/routes/auth.routes.js":
/*!**************************************!*\
  !*** ./server/routes/auth.routes.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config */ \"./config/index.js\");\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var _validations_auth_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../validations/auth.validation */ \"./server/validations/auth.validation.js\");\n/* harmony import */ var _validations_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../validations/validator */ \"./server/validations/validator.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouter.post('/signin', ..._validations_auth_validation__WEBPACK_IMPORTED_MODULE_4__.signInValidation, async (req, res) => {\n  try {\n    (0,_validations_validator__WEBPACK_IMPORTED_MODULE_5__.handleValidationErrors)(req);\n    let user = await _models_user_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n      email: req.body.email\n    });\n    if (!user) return res.status(404).json({\n      error: 'User not found'\n    });\n\n    if (!user.authenticate(req.body.password)) {\n      return res.status(401).json({\n        error: \"Email and password don't match\"\n      });\n    }\n\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({\n      _id: user._id\n    }, _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].jwtSecret);\n    res.cookie('t', token, {\n      expire: new Date() + 9999\n    });\n    const {\n      _id,\n      email,\n      name\n    } = user;\n    return res.json({\n      token,\n      user: {\n        _id,\n        name,\n        email\n      }\n    });\n  } catch (error) {\n    return res.status(400).json({\n      error\n    });\n  }\n});\nrouter.get('/signout', (req, res) => {\n  res.clearCookie('t');\n  return res.json({\n    message: 'Signed out'\n  });\n});\nconst _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"/home/blessed/MERN/mern-base/server/routes/auth.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/blessed/MERN/mern-base/server/routes/auth.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-base/./server/routes/auth.routes.js?");

/***/ }),

/***/ "./server/routes/user.routes.js":
/*!**************************************!*\
  !*** ./server/routes/user.routes.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _validations_user_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validations/user.validation */ \"./server/validations/user.validation.js\");\n/* harmony import */ var _validations_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validations/validator */ \"./server/validations/validator.js\");\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/auth */ \"./server/helpers/auth.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nconst router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouter.route('/').get(async (req, res) => {\n  try {\n    let users = await _models_user_model__WEBPACK_IMPORTED_MODULE_4__[\"default\"].find().select('name email createdAt updatedAt');\n    return res.json(users);\n  } catch (error) {\n    return res.status(500).json({\n      error\n    });\n  }\n}).post(..._validations_user_validation__WEBPACK_IMPORTED_MODULE_2__.userCreationValidations, async (req, res) => {\n  try {\n    (0,_validations_validator__WEBPACK_IMPORTED_MODULE_3__.handleValidationErrors)(req);\n    const user = new _models_user_model__WEBPACK_IMPORTED_MODULE_4__[\"default\"](req.body);\n    await user.save();\n    return res.json({\n      message: 'Successfully signed up!',\n      user: user.data\n    });\n  } catch (error) {\n    return res.status(400).json({\n      error\n    });\n  }\n});\nrouter.param('userId', async (req, res, next, id) => {\n  try {\n    let user = await _models_user_model__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findById(id);\n\n    if (!user) {\n      return res.status(404).json({\n        error: 'User not found'\n      });\n    }\n\n    req.profile = user;\n    next();\n  } catch (error) {\n    return res.status(400).json({\n      error: 'Could not retrieve user'\n    });\n  }\n});\nrouter.route('/:userId').get(_helpers_auth__WEBPACK_IMPORTED_MODULE_5__[\"default\"].requireSignIn, async (req, res) => {\n  return res.json(req.profile.data);\n}).put(_helpers_auth__WEBPACK_IMPORTED_MODULE_5__[\"default\"].requireSignIn, _helpers_auth__WEBPACK_IMPORTED_MODULE_5__[\"default\"].hasAuthorization, ..._validations_user_validation__WEBPACK_IMPORTED_MODULE_2__.userUpdateValidations, async (req, res) => {\n  try {\n    (0,_validations_validator__WEBPACK_IMPORTED_MODULE_3__.handleValidationErrors)(req);\n    let user = req.profile;\n    user = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.extend)(user, req.body);\n    await user.save();\n    return res.json(user.data);\n  } catch (error) {\n    return res.status(400).json({\n      error\n    });\n  }\n}).delete(_helpers_auth__WEBPACK_IMPORTED_MODULE_5__[\"default\"].requireSignIn, _helpers_auth__WEBPACK_IMPORTED_MODULE_5__[\"default\"].hasAuthorization, async (req, res) => {\n  try {\n    let user = req.profile;\n    let deletedUser = await user.remove();\n    return res.json({\n      user: deletedUser.data,\n      message: 'User deleted successfully'\n    });\n  } catch (error) {\n    return res.status(400).json({\n      error\n    });\n  }\n});\nconst _default = router;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"/home/blessed/MERN/mern-base/server/routes/user.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/blessed/MERN/mern-base/server/routes/user.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-base/./server/routes/user.routes.js?");

/***/ }),

/***/ "./server/validations/auth.validation.js":
/*!***********************************************!*\
  !*** ./server/validations/auth.validation.js ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signInValidation\": () => (/* binding */ signInValidation)\n/* harmony export */ });\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst {\n  check\n} = __webpack_require__(/*! express-validator */ \"express-validator\");\n\n\nconst signInValidation = [check('email').isEmail().withMessage('Valid Email address is required'), check('password').notEmpty().withMessage('Password is required')];\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(signInValidation, \"signInValidation\", \"/home/blessed/MERN/mern-base/server/validations/auth.validation.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-base/./server/validations/auth.validation.js?");

/***/ }),

/***/ "./server/validations/user.validation.js":
/*!***********************************************!*\
  !*** ./server/validations/user.validation.js ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"userCreationValidations\": () => (/* binding */ userCreationValidations),\n/* harmony export */   \"userUpdateValidations\": () => (/* binding */ userUpdateValidations)\n/* harmony export */ });\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst {\n  body,\n  check\n} = __webpack_require__(/*! express-validator */ \"express-validator\");\n\n\n\nconst uniqueEmail = value => {\n  return _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n    email: value\n  }).then(user => {\n    if (user) return Promise.reject('E-mail already in use');\n  });\n};\n\nconst userCreationValidations = [check('name').notEmpty().withMessage('Name is required').isLength({\n  min: 3\n}).withMessage('Name must be at least 3 characters'), check('email').isEmail().withMessage('Valid email address is required').custom(uniqueEmail), check('password').isLength({\n  min: 6\n}).withMessage('Password must be at least 6 characters long')];\nconst userUpdateValidations = [check('name').optional().isLength({\n  min: 3\n}).withMessage('Name must be at least 3 characters'), check('email').optional().isEmail().withMessage('Email is invalid'), check('password').optional().isLength({\n  min: 6\n}).withMessage('Password must be at least 6 characters long')];\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(uniqueEmail, \"uniqueEmail\", \"/home/blessed/MERN/mern-base/server/validations/user.validation.js\");\n  reactHotLoader.register(userCreationValidations, \"userCreationValidations\", \"/home/blessed/MERN/mern-base/server/validations/user.validation.js\");\n  reactHotLoader.register(userUpdateValidations, \"userUpdateValidations\", \"/home/blessed/MERN/mern-base/server/validations/user.validation.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-base/./server/validations/user.validation.js?");

/***/ }),

/***/ "./server/validations/validator.js":
/*!*****************************************!*\
  !*** ./server/validations/validator.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleValidationErrors\": () => (/* binding */ handleValidationErrors)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst {\n  validationResult\n} = __webpack_require__(/*! express-validator */ \"express-validator\");\n\nconst validationErrors = req => {\n  const errors = validationResult(req);\n  let fields = [];\n  errors.array().forEach(e => {\n    let param = e.param;\n    if (!fields.includes(param)) fields.push(param);\n  });\n  let result = {};\n  fields.forEach(f => result[f] = []);\n  let errorsArr = errors.array();\n\n  if (fields.length > 0) {\n    errorsArr.forEach(e => {\n      result[e.param].push(e.msg);\n    });\n  }\n\n  if (!errors.isEmpty()) {\n    return result;\n  }\n\n  return null;\n};\n\nconst handleValidationErrors = req => {\n  const errors = validationErrors(req);\n\n  if (errors) {\n    throw errors;\n  }\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(validationErrors, \"validationErrors\", \"/home/blessed/MERN/mern-base/server/validations/validator.js\");\n  reactHotLoader.register(handleValidationErrors, \"handleValidationErrors\", \"/home/blessed/MERN/mern-base/server/validations/validator.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-base/./server/validations/validator.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst _default = ({\n  markup,\n  css\n}) => {\n  return `\n  <!DOCTYPE html>\n  <html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>MERN Base</title>\n\n    ${css}\n\n    <link\n      rel=\"stylesheet\"\n      href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap\"\n    />\n\n    <style>\n      a{\n        text-decoration: none;\n        color: #061d95\n      }\n    </style>\n  </head>\n  <body>\n    <div id=\"root\">${markup}</div>\n    <script type=\"text/javascript\" src=\"/dist/bundle.js\"></script>\n  </body>\n  </html>\n  `;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/home/blessed/MERN/mern-base/template.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-base/./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nconst CURRENT_WORKING_DIR = process.cwd();\nconst config = {\n  name: 'browser',\n  mode: 'development',\n  devtool: 'cheap-module-source-map',\n  entry: ['webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/main.js')],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, '/dist'),\n    filename: 'bundle.js',\n    publicPath: '/dist/'\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: ['babel-loader']\n    }, {\n      test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n      use: 'file-loader'\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],\n  resolve: {\n    alias: {\n      'react-dom': '@hot-loader/react-dom'\n    }\n  }\n};\nmodule.exports = config;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/home/blessed/MERN/mern-base/webpack.config.client.js\");\n  reactHotLoader.register(config, \"config\", \"/home/blessed/MERN/mern-base/webpack.config.client.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-base/./webpack.config.client.js?");

/***/ }),

/***/ "./client/assets/images/unicornbike.jpg":
/*!**********************************************!*\
  !*** ./client/assets/images/unicornbike.jpg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"08179a3b58e30f3c8c4fed34a9a3e2f8.jpg\");\n\n//# sourceURL=webpack://mern-base/./client/assets/images/unicornbike.jpg?");

/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/cache");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react");

/***/ }),

/***/ "@emotion/server/create-instance":
/*!**************************************************!*\
  !*** external "@emotion/server/create-instance" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/server/create-instance");

/***/ }),

/***/ "@mui/icons-material":
/*!**************************************!*\
  !*** external "@mui/icons-material" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ "@mui/material/CssBaseline":
/*!********************************************!*\
  !*** external "@mui/material/CssBaseline" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ "@mui/material/colors":
/*!***************************************!*\
  !*** external "@mui/material/colors" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/colors");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("compression");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("express-jwt");

/***/ }),

/***/ "express-validator":
/*!************************************!*\
  !*** external "express-validator" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("express-validator");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("helmet");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom/server");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-dev-middleware");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-hot-middleware");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/dist/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;