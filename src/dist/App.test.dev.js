"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _enzyme = require("enzyme");

var _reduxMockStore = _interopRequireDefault(require("redux-mock-store"));

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Configurar o mock store do Redux
var mockStore = (0, _reduxMockStore["default"])([]);
var store = mockStore({});