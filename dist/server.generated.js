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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../template */ \"./template.js\");\n/* harmony import */ var _routes_user_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/user.routes */ \"./server/routes/user.routes.js\");\n/* harmony import */ var _routes_auth_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/auth.routes */ \"./server/routes/auth.routes.js\");\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_1___default()();\n_devBundle__WEBPACK_IMPORTED_MODULE_9__[\"default\"].compile(app);\nconst CURRENT_WORKING_DIR = process.cwd();\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default().json());\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default().urlencoded({\n  extended: true\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(compression__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(helmet__WEBPACK_IMPORTED_MODULE_5___default()());\napp.use(cors__WEBPACK_IMPORTED_MODULE_4___default()());\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_1___default()[\"static\"](path__WEBPACK_IMPORTED_MODULE_0___default().join(CURRENT_WORKING_DIR, 'dist')));\napp.get('/', (req, res) => {\n  res.send((0,_template__WEBPACK_IMPORTED_MODULE_6__[\"default\"])());\n});\napp.use('/api/users', _routes_user_routes__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\napp.use('/api/auth', _routes_auth_routes__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\napp.use((err, req, res, next) => {\n  if (err.name === 'UnauthorizedError') {\n    return res.status(401).json({\n      error: err.name + ': ' + err.message\n    });\n  } else if (err) {\n    return res.status(400).json({\n      error: err.name + ': ' + err.message\n    });\n  }\n});\nconst _default = app;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(app, \"app\", \"/home/blessed/MERN/mern-base/server/main.js\");\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/home/blessed/MERN/mern-base/server/main.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/blessed/MERN/mern-base/server/main.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-base/./server/main.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"userCreationValidations\": () => (/* binding */ userCreationValidations),\n/* harmony export */   \"userUpdateValidations\": () => (/* binding */ userUpdateValidations)\n/* harmony export */ });\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst {\n  body,\n  check\n} = __webpack_require__(/*! express-validator */ \"express-validator\");\n\n\n\nconst uniqueEmail = value => {\n  return _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n    email: value\n  }).then(user => {\n    if (user) return Promise.reject('E-mail already in use');\n  });\n};\n\nconst userCreationValidations = [check('name').notEmpty().withMessage('Name is required').isLength({\n  min: 3\n}).withMessage('Name must be at least 3 characters'), check('email').isEmail().withMessage('Valid email address is required').custom(uniqueEmail), check('password').isLength({\n  min: 6\n}).withMessage('Password must be at least 6 characters long')];\nconst userUpdateValidations = [check('name').optional().isLength({\n  min: 3\n}).withMessage('Name must be at least 3 characters'), check('email').optional().isEmail().withMessage('Email is invalid').custom(uniqueEmail), check('password').optional().isLength({\n  min: 6\n}).withMessage('Password must be at least 6 characters long')];\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(uniqueEmail, \"uniqueEmail\", \"/home/blessed/MERN/mern-base/server/validations/user.validation.js\");\n  reactHotLoader.register(userCreationValidations, \"userCreationValidations\", \"/home/blessed/MERN/mern-base/server/validations/user.validation.js\");\n  reactHotLoader.register(userUpdateValidations, \"userUpdateValidations\", \"/home/blessed/MERN/mern-base/server/validations/user.validation.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-base/./server/validations/user.validation.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst _default = () => {\n  return `\n  <!DOCTYPE html>\n  <html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>MERN Base</title>\n\n    <link\n      rel=\"stylesheet\"\n      href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap\"\n    />\n  </head>\n  <body>\n    <div id=\"root\"></div>\n    <script type=\"text/javascript\" src=\"/dist/bundle.js\"></script>\n  </body>\n  </html>\n  `;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/home/blessed/MERN/mern-base/template.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-base/./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nconst CURRENT_WORKING_DIR = process.cwd();\nconst config = {\n  name: 'browser',\n  mode: 'development',\n  devtool: 'cheap-module-source-map',\n  entry: ['webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/main.js')],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, '/dist'),\n    filename: 'bundle.js',\n    publicPath: '/dist/'\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: ['babel-loader']\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],\n  resolve: {\n    alias: {\n      'react-dom': '@hot-loader/react-dom'\n    }\n  }\n};\nmodule.exports = config;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/home/blessed/MERN/mern-base/webpack.config.client.js\");\n  reactHotLoader.register(config, \"config\", \"/home/blessed/MERN/mern-base/webpack.config.client.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://mern-base/./webpack.config.client.js?");

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