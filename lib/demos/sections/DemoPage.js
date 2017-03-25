'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MtSvgLines = require('../../MtSvgLines');

var _MtSvgLines2 = _interopRequireDefault(_MtSvgLines);

var _SvgCheckmark = require('../components/SvgCheckmark');

var _SvgCheckmark2 = _interopRequireDefault(_SvgCheckmark);

var _SvgSignature = require('../components/SvgSignature');

var _SvgSignature2 = _interopRequireDefault(_SvgSignature);

var _SvgChart = require('../components/SvgChart');

var _SvgChart2 = _interopRequireDefault(_SvgChart);

var _SvgSpinner = require('../components/SvgSpinner');

var _SvgSpinner2 = _interopRequireDefault(_SvgSpinner);

var _utils = require('../../utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import MtSvgLines from '../../../dist/'  // NOTE: uncomment to test built lib

var DemoPage = function (_React$Component) {
  _inherits(DemoPage, _React$Component);

  function DemoPage(props) {
    _classCallCheck(this, DemoPage);

    var _this = _possibleConstructorReturn(this, (DemoPage.__proto__ || Object.getPrototypeOf(DemoPage)).call(this, props));

    _this.state = {
      triggerCheckAnim: 0,
      triggerSigAnim: 1000,
      triggerChartAnim: 3000,
      triggerSpinnerAnim: 6000,
      jsOnly: false,
      isIE: true
    };
    return _this;
  }

  _createClass(DemoPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ isIE: (0, _utils.isMsBrowser)() });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          triggerCheckAnim = _state.triggerCheckAnim,
          triggerSigAnim = _state.triggerSigAnim,
          triggerChartAnim = _state.triggerChartAnim,
          triggerSpinnerAnim = _state.triggerSpinnerAnim,
          jsOnly = _state.jsOnly,
          isIE = _state.isIE;


      return _react2.default.createElement(
        'div',
        { ref: function ref(c) {
            _this2._el = c;
          }, style: styles.wrapper },
        _react2.default.createElement(
          'a',
          { href: 'https://github.com/moarwick/react-mt-svg-lines', style: styles.gitHubLink },
          this._renderGithubLogo()
        ),
        _react2.default.createElement(
          'h2',
          { style: styles.title },
          'MtSvgLines'
        ),
        isIE && _react2.default.createElement(
          'div',
          { style: styles.ieMessage },
          'IE/Edge Detected - JS Fallback Mode'
        ),
        _react2.default.createElement(
          'div',
          { className: 'row', style: styles.row },
          _react2.default.createElement(
            'div',
            { className: 'column', style: styles.column },
            _react2.default.createElement(
              _MtSvgLines2.default,
              {
                animate: triggerCheckAnim,
                jsOnly: jsOnly
              },
              _react2.default.createElement(_SvgCheckmark2.default, null)
            ),
            _react2.default.createElement(
              'div',
              { style: styles.info },
              this._renderTrigger('triggerCheckAnim'),
              _react2.default.createElement(
                'p',
                { style: styles.props },
                _react2.default.createElement(
                  'em',
                  null,
                  'default props'
                ),
                _react2.default.createElement('br', null),
                'duration: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  '1000'
                ),
                _react2.default.createElement('br', null),
                'stagger: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  '0'
                ),
                _react2.default.createElement('br', null),
                'timing: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'ease'
                ),
                _react2.default.createElement('br', null),
                'playback: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'forwards'
                ),
                _react2.default.createElement('br', null),
                'fade: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'false'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'column', style: styles.column },
            _react2.default.createElement(
              _MtSvgLines2.default,
              {
                animate: triggerSigAnim,
                duration: 2000,
                stagger: 100,
                timing: 'linear',
                jsOnly: jsOnly
              },
              _react2.default.createElement(_SvgSignature2.default, null)
            ),
            _react2.default.createElement(
              'div',
              { style: styles.info },
              this._renderTrigger('triggerSigAnim'),
              _react2.default.createElement(
                'p',
                { style: styles.props },
                'duration: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  '2000'
                ),
                _react2.default.createElement('br', null),
                'stagger: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  '100'
                ),
                _react2.default.createElement('br', null),
                'timing: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'linear'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'column', style: styles.column },
            _react2.default.createElement(
              _MtSvgLines2.default,
              {
                animate: triggerChartAnim,
                duration: 3000,
                stagger: 50,
                timing: 'ease-in',
                fade: true,
                jsOnly: jsOnly
              },
              _react2.default.createElement(_SvgChart2.default, null)
            ),
            _react2.default.createElement(
              'div',
              { style: styles.info },
              this._renderTrigger('triggerChartAnim'),
              _react2.default.createElement(
                'p',
                { style: styles.props },
                'duration: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  '3000'
                ),
                _react2.default.createElement('br', null),
                'stagger: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  '50'
                ),
                _react2.default.createElement('br', null),
                'timing: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'ease-in'
                ),
                _react2.default.createElement('br', null),
                'fade: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'true'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'em',
                  null,
                  'skip path'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'column', style: styles.column },
            _react2.default.createElement(
              _MtSvgLines2.default,
              {
                animate: triggerSpinnerAnim,
                duration: 1500,
                stagger: 20,
                timing: 'linear',
                playback: '2 alternate-reverse both',
                jsOnly: jsOnly
              },
              _react2.default.createElement(_SvgSpinner2.default, null)
            ),
            _react2.default.createElement(
              'div',
              { style: styles.info },
              this._renderTrigger('triggerSpinnerAnim'),
              _react2.default.createElement(
                'p',
                { style: styles.props },
                'duration: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  '1500'
                ),
                _react2.default.createElement('br', null),
                'stagger: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  '20'
                ),
                _react2.default.createElement('br', null),
                'timing: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'linear'
                ),
                _react2.default.createElement('br', null),
                'playback: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  '2 alternate-reverse both'
                )
              )
            )
          ),
          _react2.default.createElement('div', { style: styles.clear })
        )
      );
    }
  }, {
    key: '_renderGithubLogo',
    value: function _renderGithubLogo() {
      return _react2.default.createElement(
        'svg',
        { viewBox: '0 0 54 54', width: '32', height: '32' },
        _react2.default.createElement('path', { fill: '#888', d: 'M26.9,1.9c-13.8,0-25,11.5-25,25.6c0,11.3,7.2,20.9,17.1,24.3 c1.3,0.2,1.7-0.6,1.7-1.2c0-0.6,0-2.2,0-4.4c-7,1.5-8.4-3.4-8.4-3.4c-1.1-3-2.8-3.7-2.8-3.7c-2.3-1.6,0.2-1.6,0.2-1.6 c2.5,0.2,3.8,2.6,3.8,2.6c2.2,3.9,5.9,2.8,7.3,2.1c0.2-1.7,0.9-2.8,1.6-3.4C16.8,38.2,11,36,11,26.2c0-2.8,1-5.1,2.6-6.9 c-0.3-0.6-1.1-3.3,0.2-6.8c0,0,2.1-0.7,6.9,2.6c2-0.6,4.1-0.9,6.3-0.9c2.1,0,4.3,0.3,6.3,0.9c4.8-3.3,6.9-2.6,6.9-2.6 c1.4,3.5,0.5,6.1,0.2,6.8c1.6,1.8,2.6,4.1,2.6,6.9c0,9.8-5.8,12-11.4,12.6c0.9,0.8,1.7,2.4,1.7,4.7c0,3.4,0,6.2,0,7 c0,0.7,0.5,1.5,1.7,1.2c9.9-3.4,17.1-13,17.1-24.3C51.9,13.3,40.8,1.9,26.9,1.9z'
        })
      );
    }

    // button(s) partial

  }, {
    key: '_renderTrigger',
    value: function _renderTrigger(triggerKey) {
      var buttonsJsx = [];

      if (!this.state.isIE) {
        buttonsJsx.push(_react2.default.createElement(
          'a',
          { key: 'cssTrigger', style: _extends({}, styles.animLink, styles.animLinkCss), href: '#', onClick: this._makeClickHandler(triggerKey, false) },
          'CSS \xBB'
        ));
      }

      buttonsJsx.push(_react2.default.createElement(
        'a',
        { key: 'jsTrigger', style: styles.animLink, href: '#', onClick: this._makeClickHandler(triggerKey, true) },
        'JS \xBB'
      ));

      return buttonsJsx;
    }

    // curried function to generate click handlers with the desired args

  }, {
    key: '_makeClickHandler',
    value: function _makeClickHandler(triggerKey, jsOnly) {
      var _this3 = this;

      return function (e) {
        var _this3$setState;

        e.preventDefault();

        _this3.setState((_this3$setState = {}, _defineProperty(_this3$setState, triggerKey, String(Date.now())), _defineProperty(_this3$setState, 'jsOnly', jsOnly), _this3$setState));
      };
    }
  }]);

  return DemoPage;
}(_react2.default.Component);

exports.default = DemoPage;


var styles = {
  wrapper: {
    position: 'relative',
    maxWidth: '800px',
    margin: '20px auto 0 auto'
  },
  gitHubLink: {
    float: 'right'
  },
  title: {
    width: '100%',
    color: '#888',
    fontWeight: 200
  },
  row: {
    borderTop: '1px solid #888',
    width: '100%', // for IE
    paddingTop: 20
  },
  ieMessage: {
    color: '#FFF',
    backgroundColor: '#888',
    fontSize: 14,
    textAlign: 'center'
    // marginBottom:    10
  },
  column: {
    width: '25%',
    float: 'left',
    textAlign: 'center'
  },
  clear: { clear: 'both' },
  shortColumn: {
    paddingBottom: 15
  },
  info: {
    padding: '10px 0 0 4%'
  },
  animLink: {
    display: 'inline-block',
    minWidth: 40,
    padding: '0 3px 2px',
    color: '#E52029',
    border: '1px solid #E52029',
    borderRadius: 3,
    marginRight: 5,
    textDecoration: 'none',
    textAlign: 'center'
  },
  animLinkCss: {
    color: '#FFF',
    backgroundColor: '#E52029'
  },
  props: {
    fontSize: '12px',
    color: '#4C6A98'
  }
};