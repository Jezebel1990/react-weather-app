"use strict";

var _enzyme = _interopRequireDefault(require("enzyme"));

var _enzymeAdapterReact = _interopRequireDefault(require("@wojtekmaj/enzyme-adapter-react-17"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_enzyme["default"].configure({
  adapter: new _enzymeAdapterReact["default"]()
});