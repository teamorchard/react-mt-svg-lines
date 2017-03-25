"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgCheckmark = function SvgCheckmark() {
  return _react2.default.createElement(
    "svg",
    { viewBox: "0 0 100 100" },
    _react2.default.createElement(
      "g",
      { fill: "none", strokeMiterlimit: "1" },
      _react2.default.createElement("circle", { fill: "#3EB735", cx: "50", cy: "50", r: "45" }),
      _react2.default.createElement("path", { stroke: "#FFF", strokeWidth: "8", d: "M20.8,51c0,0,20.8,18.2,21.5,18.2c0.6,0,33.3-38.5,33.3-38.5" })
    )
  );
};

exports.default = SvgCheckmark;