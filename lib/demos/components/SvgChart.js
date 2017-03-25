"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgChart = function SvgChart() {
  return _react2.default.createElement(
    "svg",
    { viewBox: "0 0 100 100" },
    _react2.default.createElement(
      "g",
      { strokeMiterlimit: "10" },
      _react2.default.createElement("path", { fill: "none", stroke: "#A6C3C9", d: "M22.5 4v90" }),
      _react2.default.createElement("path", { fill: "none", stroke: "#A6C3C9", d: "M5 22.5h90" }),
      _react2.default.createElement("path", { fill: "none", stroke: "#A6C3C9", d: "M40.5 4v90" }),
      _react2.default.createElement("path", { fill: "none", stroke: "#A6C3C9", d: "M5 40.5h90" }),
      _react2.default.createElement("path", { fill: "none", stroke: "#A6C3C9", d: "M58.5 4v90" }),
      _react2.default.createElement("path", { fill: "none", stroke: "#A6C3C9", d: "M5 58.5h90" }),
      _react2.default.createElement("path", { fill: "none", stroke: "#A6C3C9", d: "M76.5 4v90" }),
      _react2.default.createElement("path", { fill: "none", stroke: "#A6C3C9", d: "M5 76.5h90" }),
      _react2.default.createElement("path", { "data-mt": "skip", fill: "none", stroke: "#4B699A", strokeWidth: "2", d: "M4.5 4.5h90v90h-90z" }),
      _react2.default.createElement("path", { fill: "#FBB03A", stroke: "#8E542D", d: "M15.5 52.5h12v33h-12z" }),
      _react2.default.createElement("path", { fill: "#FBB03A", stroke: "#8E542D", d: "M34.5 34.5h12v51h-12z" }),
      _react2.default.createElement("path", { fill: "#FBB03A", stroke: "#8E542D", d: "M51.5 38.5h12v47h-12z" }),
      _react2.default.createElement("path", { fill: "#FBB03A", stroke: "#8E542D", d: "M70.5 17.5h12v68h-12z" }),
      _react2.default.createElement("path", { fill: "none", stroke: "#009245", strokeWidth: "5", strokeLinecap: "round", d: "M10.2 78.6c6.9-12.5 23.1-21.3 37.2-25.5 17.4-5.1 33.8-9.8 40.2-30.2" })
    )
  );
};

exports.default = SvgChart;