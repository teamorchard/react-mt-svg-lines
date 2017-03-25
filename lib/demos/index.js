'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _DemoPage = require('./sections/DemoPage');

var _DemoPage2 = _interopRequireDefault(_DemoPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./stylesheet.scss');

_reactDom2.default.render(_react2.default.createElement(_DemoPage2.default, null), document.getElementById('component'));