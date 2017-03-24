(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(2);

	var _tween = __webpack_require__(3);

	var _tween2 = _interopRequireDefault(_tween);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EASING = {
	  'ease': _tween2.default.Easing.Quadratic.InOut,
	  'ease-in': _tween2.default.Easing.Cubic.In,
	  'ease-out': _tween2.default.Easing.Cubic.Out,
	  'ease-in-out': _tween2.default.Easing.Cubic.InOut,
	  'linear': _tween2.default.Easing.Linear.None,
	  'step-start': _tween2.default.Easing.Bounce.In, // not quite the same thing ;)
	  'step-end': _tween2.default.Easing.Bounce.Out // not quite the same thing ;)
	};

	var MtSvgLines = function (_React$Component) {
	  _inherits(MtSvgLines, _React$Component);

	  function MtSvgLines(props) {
	    _classCallCheck(this, MtSvgLines);

	    var _this = _possibleConstructorReturn(this, (MtSvgLines.__proto__ || Object.getPrototypeOf(MtSvgLines)).call(this, props));

	    _this._onTweenUpdate = function () {
	      _this._setStrokeDashoffset(_this._pathElems, _this._tweenData);
	      _this._animate(); // go again..
	    };

	    _this._onAnimComplete = function () {
	      _this.props.callback();
	      _this._animStart = 0;
	    };

	    _this.state = {
	      classKey: '', // unique class name for the wrapper, an internal "trigger" (re-gen each time anim is to run)
	      css: '', // generated CSS
	      tweenElapsed: 0, // tween duration so far (ms)
	      tweenProgress: 0 // tween completion (pct)
	    };

	    _this._lastAnimate = '';
	    _this._lastClassKey = '';

	    _this._animStart = 0; // anim start timestamp

	    _this._pathElems = [];
	    _this._pathDataFrom = {};
	    _this._pathDataTo = {};
	    _this._tweenData = {};
	    return _this;
	  }

	  // defaults


	  _createClass(MtSvgLines, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this._setClassKey(this.props.animate);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this._setClassKey(nextProps.animate);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      // destruct all component-specific props, so '...rest' can be applied to wrapper <span>
	      // eslint-disable-next-line no-unused-vars
	      var _props = this.props,
	          className = _props.className,
	          animate = _props.animate,
	          duration = _props.duration,
	          stagger = _props.stagger,
	          timing = _props.timing,
	          playback = _props.playback,
	          fade = _props.fade,
	          jsOnly = _props.jsOnly,
	          children = _props.children,
	          callback = _props.callback,
	          rest = _objectWithoutProperties(_props, ['className', 'animate', 'duration', 'stagger', 'timing', 'playback', 'fade', 'jsOnly', 'children', 'callback']);

	      var _state = this.state,
	          classKey = _state.classKey,
	          css = _state.css;

	      var isHidden = animate === 'hide';

	      return _react2.default.createElement(
	        'span',
	        _extends({
	          ref: function ref(c) {
	            _this2._svgWrapper = c;
	          },
	          className: className + ' ' + classKey,
	          style: { opacity: isHidden ? 0.01 : 1 }
	        }, rest),
	        _react2.default.createElement(
	          'style',
	          null,
	          css
	        ),
	        children
	      );
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._animate();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this._animate();
	    }

	    // ------------------------------------------------------

	    /*
	     * Main animate handler, called after each render update
	     */

	  }, {
	    key: '_animate',
	    value: function _animate() {
	      var _this3 = this;

	      if (typeof window === 'undefined') {
	        return;
	      }

	      var _props2 = this.props,
	          animate = _props2.animate,
	          duration = _props2.duration,
	          stagger = _props2.stagger,
	          timing = _props2.timing,
	          playback = _props2.playback,
	          jsOnly = _props2.jsOnly;
	      var classKey = this.state.classKey;


	      var isStartNewAnim = animate !== false && classKey !== this._lastClassKey;
	      var isAnimJS = (0, _utils.isMsBrowser)() || jsOnly;

	      // >>> STARTING NEW ANIMATION...
	      if (isStartNewAnim) {
	        // set flags
	        this._animStart = Date.now();
	        this._lastClassKey = classKey;

	        // parse out vars common for both modes
	        var startDelay = typeof animate === 'number' ? animate : 0; // if numeric, treat as delay (ms)
	        var numOfRepeats = parseInt(playback, 10) || 0;

	        /* ----- JS MODE ----- */
	        if (isAnimJS) {
	          // parse props for use with Tween.js
	          if (numOfRepeats > 0) {
	            numOfRepeats = numOfRepeats - 1;
	          }
	          if ((0, _utils.contains)(playback, 'infinite')) {
	            numOfRepeats = Infinity;
	          }
	          var isYoYo = (0, _utils.contains)(playback, 'alternate');

	          // acquire path elems and generate to/from data sets
	          this._pathElems = this._selectPathElems();
	          var pathData = this._getPathData(this._pathElems);
	          this._pathDataFrom = pathData.from;
	          this._pathDataTo = pathData.to;

	          // TODO: if ( contains( playback, 'reverse' ) ) { ... };

	          // init tweener object
	          this._tweenData = _extends({}, this._pathDataFrom);

	          // set paths' offsets to start positions
	          this._setStrokeDasharray(this._pathElems, this._pathDataFrom);
	          this._setStrokeDashoffset(this._pathElems, this._tweenData);

	          // init the tweener..
	          var tween = new _tween2.default.Tween(this._tweenData).to(this._pathDataTo, duration).easing(EASING[timing]).repeat(numOfRepeats).yoyo(isYoYo).onUpdate(this._onTweenUpdate).onComplete(this._onAnimComplete);

	          // kick off JS tweening..
	          var t = setTimeout(function () {
	            tween.start();
	            _tween2.default.update();
	            clearTimeout(t);
	          }, Math.max(1, startDelay));

	          /* ----- CSS MODE ----- */
	        } else {
	          var css = '';

	          // 1) determine number of path elems in svg
	          var pathLenghts = this._getPathLengths();
	          var pathQty = pathLenghts.length || 1;

	          // 2) calc all timing values
	          var staggerMult = (0, _utils.clamp)(stagger, 0, 100) / 100; // convert pct to 0-1
	          var pathStaggerDelay = stagger > 0 ? duration / pathQty * staggerMult : 0;
	          var pathDrawDuration = stagger > 0 ? duration - pathStaggerDelay * (pathQty - 1) * (2 - staggerMult) : duration;

	          // 3) concat generated CSS, one path at a time..
	          pathLenghts.forEach(function (length, index) {
	            css += _this3._getPathCSS(index, length, startDelay, pathStaggerDelay, pathDrawDuration);
	          });

	          // set up on-complete timer
	          var _t = setTimeout(function () {
	            clearTimeout(_t);
	            _this3._onAnimComplete();
	          }, startDelay + duration * numOfRepeats);

	          // set state (re-render)
	          this.setState({ css: css });
	        }

	        // >>> ONGOING ANIMATION...
	      } else if (this._animStart) {
	        /* ----- JS MODE ----- */
	        if (isAnimJS) {
	          window.requestAnimationFrame(_tween2.default.update);

	          /* ----- CSS MODE ----- */
	        } else {
	            // NOTE: nothing to do, browser does its thing...
	          }
	      }
	    }

	    /*
	     * On each Tween update, set dash offsets to newly tweened values
	     */


	    /*
	     * When animation completes, run callback (if any), clear start timestamp
	     */

	  }, {
	    key: '_selectPathElems',


	    /*
	     * Acquire selection of SVG 'path' elems contained within
	     */
	    value: function _selectPathElems() {
	      var svgEl = this._svgWrapper.getElementsByTagName('svg')[0];
	      return svgEl ? svgEl.querySelectorAll('path') : [];
	    }

	    /*
	     * Generate an object containing 'from' and 'to' sub-objects
	     * Each object contains same set of indexed keys, per the path selection
	     * The 'from' object values are the paths' lengths
	     * The 'to' object values are 0 (unless 'skip' attr is present, then equal path's length)
	     */

	  }, {
	    key: '_getPathData',
	    value: function _getPathData(pathElems) {
	      var _this4 = this;

	      var pathData = { from: {}, to: {} };

	      [].forEach.call(pathElems, function (pathEl, i) {
	        if (!_this4._hasSkipAttr(pathEl.attributes)) {
	          var pathLengh = (0, _utils.trimFloat)(pathEl.getTotalLength());
	          pathData.to[i] = 0;
	          pathData.from[i] = pathLengh;
	        }
	      });

	      return pathData;
	    }

	    /*
	     * Check path's attributes for data-mt="skip"
	     */

	  }, {
	    key: '_hasSkipAttr',
	    value: function _hasSkipAttr(attributes) {
	      var result = false;

	      // path.attributes is an obj with indexed keys, so we must iterate over them
	      // { '0': { name: 'd', value: 'M37.063' }, '1': { name: 'data-mt', value: 'skip' }, ... }
	      for (var key in attributes) {
	        var _attributes$key = attributes[key],
	            name = _attributes$key.name,
	            value = _attributes$key.value;

	        if (!result && name === 'data-mt' && value === 'skip') {
	          result = true;
	          break;
	        }
	      }

	      return result;
	    }

	    /*
	     * Set style.strokeDasharray on all paths in selection, from the provided key-val object
	     */

	  }, {
	    key: '_setStrokeDasharray',
	    value: function _setStrokeDasharray(pathElems, pathData) {
	      [].forEach.call(pathElems, function (pathEl, i) {
	        if (pathData[i]) {
	          pathEl.style.strokeDasharray = pathData[i];
	        }
	      });
	    }

	    /*
	     * Set style.strokeDashoffset on all paths in selection, from the provided key-val object
	     */

	  }, {
	    key: '_setStrokeDashoffset',
	    value: function _setStrokeDashoffset(pathElems, pathData) {
	      [].forEach.call(pathElems, function (pathEl, i) {
	        if (pathData[i]) {
	          pathEl.style.strokeDashoffset = pathData[i];
	        }
	      });
	    }

	    /*
	     * Return an array containing lengths of all path elems inside the SVG
	     */

	  }, {
	    key: '_getPathLengths',
	    value: function _getPathLengths() {
	      var _this5 = this;

	      var pathElems = this._selectPathElems();
	      return [].map.call(pathElems, function (pathEl) {
	        return _this5._hasSkipAttr(pathEl.attributes) ? 0 : (0, _utils.trimFloat)(pathEl.getTotalLength());
	      });
	    }

	    /*
	     * Return CSS for a single path elem (using classKey and path index as the CSS selector)
	     */

	  }, {
	    key: '_getPathCSS',
	    value: function _getPathCSS(index, length, startDelay, staggerDelay, duration) {
	      var classKey = this.state.classKey;
	      var _props3 = this.props,
	          timing = _props3.timing,
	          playback = _props3.playback,
	          fade = _props3.fade;


	      var keysId = classKey + '-' + (index + 1);
	      var totalDelay = length ? (0, _utils.trimFloat)((startDelay + staggerDelay * index) / 1000) : 0;
	      var startOpacity = fade ? 0.01 : 1;

	      duration = duration ? (0, _utils.trimFloat)(duration / 1000) : 0;

	      return '\n      @-webkit-keyframes ' + keysId + ' {\n        0%   { stroke-dashoffset: ' + length + '; opacity: ' + startOpacity + '; }\n        100% { stroke-dashoffset: 0; opacity: 1; }\n      }\n      @keyframes ' + keysId + ' {\n        0%   { stroke-dashoffset: ' + length + '; opacity: ' + startOpacity + '; }\n        100% { stroke-dashoffset: 0; opacity: 1; }\n      }\n      .' + classKey + ' path:nth-of-type( ' + (index + 1) + ' ) {\n        opacity:                 0.01;\n        stroke-dasharray:        ' + length + ';\n        stroke-dashoffset:       ' + length + ';\n        -webkit-animation:       ' + keysId + ' ' + duration + 's ' + timing + ' ' + playback + ';\n        animation:               ' + keysId + ' ' + duration + 's ' + timing + ' ' + playback + ';\n        -webkit-animation-delay: ' + totalDelay + 's;\n        animation-delay:         ' + totalDelay + 's;\n      }\n    ';
	    }

	    /*
	     * Check if animate flag is new, and if true, set a new classKey into state (trigger anim)
	     */

	  }, {
	    key: '_setClassKey',
	    value: function _setClassKey(animate) {
	      if (animate !== this._lastAnimate) {
	        this._lastAnimate = animate;
	        this.setState({ classKey: 'mt-' + (0, _utils.shortUID)() });
	      }
	    }
	  }]);

	  return MtSvgLines;
	}(_react2.default.Component);

	MtSvgLines.propTypes = {
	  className: _react.PropTypes.string, // custom CSS class (applied to svg elem)
	  animate: _react.PropTypes.oneOfType([// external animation trigger
	  _react.PropTypes.string, // - pass a unique string or true to (re)start animation
	  _react.PropTypes.number, // - pass a number to specify delay before the animation begins (ms)
	  _react.PropTypes.bool // - pass false (or omit) to draw static SVG (no animation)
	  ]),
	  duration: _react.PropTypes.number, // total anim duration (ms)
	  stagger: _react.PropTypes.number, // delay between start times of each path (percentage)
	  timing: _react2.default.PropTypes.oneOf([// easing type
	  'ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear', 'step-start', 'step-end']),
	  playback: _react.PropTypes.string, // iteration-count || direction || fill-mode (perhaps even play-state)
	  fade: _react.PropTypes.bool, // apply a fade-in to each path
	  callback: _react.PropTypes.func, // callback fn to run when when anim completes
	  jsOnly: _react.PropTypes.bool, // apply JS animation, regardless of browser
	  children: _react.PropTypes.node
	};
	MtSvgLines.defaultProps = {
	  className: 'mt-svg',
	  animate: false,
	  duration: 1000,
	  stagger: 0,
	  timing: 'ease',
	  playback: 'forwards',
	  fade: false,
	  callback: function callback() {},
	  jsOnly: false
	};
	exports.default = MtSvgLines;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.clamp = clamp;
	exports.trimFloat = trimFloat;
	exports.shortUID = shortUID;
	exports.isMsBrowser = isMsBrowser;
	exports.contains = contains;
	/*
	 * Clamp a number within the specified min-max range
	 */
	function clamp(value, min, max) {
	  return Math.min(Math.max(value, min), max);
	}

	/*
	 * Round a float to 2 decimal places
	 */
	function trimFloat(value) {
	  return Math.round(value * 100) / 100;
	}

	/*
	 * Generate a short UID (4 chars)
	 * http://stackoverflow.com/questions/6248666/how-to-generate-short-uid-like-ax4j9z-in-js
	 */
	function shortUID() {
	  return ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
	}

	/*
	 * Determine if Microsoft browser (IE8+ or Edge)
	 */
	function isMsBrowser() {
	  return Boolean(document.documentMode || /Edge/.test(navigator.userAgent));
	}

	/*
	 * Determine if value is present in array (or string), return bool
	 */
	function contains(arrayOrString, value) {
	  return arrayOrString.indexOf(value) > -1;
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Tween.js - Licensed under the MIT license
	 * https://github.com/tweenjs/tween.js
	 * ----------------------------------------------
	 *
	 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
	 * Thank you all, you're awesome!
	 */

	var TWEEN = TWEEN || function () {

		var _tweens = [];

		return {

			getAll: function getAll() {

				return _tweens;
			},

			removeAll: function removeAll() {

				_tweens = [];
			},

			add: function add(tween) {

				_tweens.push(tween);
			},

			remove: function remove(tween) {

				var i = _tweens.indexOf(tween);

				if (i !== -1) {
					_tweens.splice(i, 1);
				}
			},

			update: function update(time, preserve) {

				if (_tweens.length === 0) {
					return false;
				}

				var i = 0;

				time = time !== undefined ? time : TWEEN.now();

				while (i < _tweens.length) {

					if (_tweens[i].update(time) || preserve) {
						i++;
					} else {
						_tweens.splice(i, 1);
					}
				}

				return true;
			}
		};
	}();

	// Include a performance.now polyfill.
	// In node.js, use process.hrtime.
	if (typeof window === 'undefined' && typeof process !== 'undefined') {
		TWEEN.now = function () {
			var time = process.hrtime();

			// Convert [seconds, nanoseconds] to milliseconds.
			return time[0] * 1000 + time[1] / 1000000;
		};
	}
	// In a browser, use window.performance.now if it is available.
	else if (typeof window !== 'undefined' && window.performance !== undefined && window.performance.now !== undefined) {
			// This must be bound, because directly assigning this function
			// leads to an invocation exception in Chrome.
			TWEEN.now = window.performance.now.bind(window.performance);
		}
		// Use Date.now if it is available.
		else if (Date.now !== undefined) {
				TWEEN.now = Date.now;
			}
			// Otherwise, use 'new Date().getTime()'.
			else {
					TWEEN.now = function () {
						return new Date().getTime();
					};
				}

	TWEEN.Tween = function (object) {

		var _object = object;
		var _valuesStart = {};
		var _valuesEnd = {};
		var _valuesStartRepeat = {};
		var _duration = 1000;
		var _repeat = 0;
		var _repeatDelayTime;
		var _yoyo = false;
		var _isPlaying = false;
		var _reversed = false;
		var _delayTime = 0;
		var _startTime = null;
		var _easingFunction = TWEEN.Easing.Linear.None;
		var _interpolationFunction = TWEEN.Interpolation.Linear;
		var _chainedTweens = [];
		var _onStartCallback = null;
		var _onStartCallbackFired = false;
		var _onUpdateCallback = null;
		var _onCompleteCallback = null;
		var _onStopCallback = null;

		this.to = function (properties, duration) {

			_valuesEnd = properties;

			if (duration !== undefined) {
				_duration = duration;
			}

			return this;
		};

		this.start = function (time) {

			TWEEN.add(this);

			_isPlaying = true;

			_onStartCallbackFired = false;

			_startTime = time !== undefined ? time : TWEEN.now();
			_startTime += _delayTime;

			for (var property in _valuesEnd) {

				// Check if an Array was provided as property value
				if (_valuesEnd[property] instanceof Array) {

					if (_valuesEnd[property].length === 0) {
						continue;
					}

					// Create a local copy of the Array with the start value at the front
					_valuesEnd[property] = [_object[property]].concat(_valuesEnd[property]);
				}

				// If `to()` specifies a property that doesn't exist in the source object,
				// we should not set that property in the object
				if (_object[property] === undefined) {
					continue;
				}

				// Save the starting value.
				_valuesStart[property] = _object[property];

				if (_valuesStart[property] instanceof Array === false) {
					_valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
				}

				_valuesStartRepeat[property] = _valuesStart[property] || 0;
			}

			return this;
		};

		this.stop = function () {

			if (!_isPlaying) {
				return this;
			}

			TWEEN.remove(this);
			_isPlaying = false;

			if (_onStopCallback !== null) {
				_onStopCallback.call(_object, _object);
			}

			this.stopChainedTweens();
			return this;
		};

		this.end = function () {

			this.update(_startTime + _duration);
			return this;
		};

		this.stopChainedTweens = function () {

			for (var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++) {
				_chainedTweens[i].stop();
			}
		};

		this.delay = function (amount) {

			_delayTime = amount;
			return this;
		};

		this.repeat = function (times) {

			_repeat = times;
			return this;
		};

		this.repeatDelay = function (amount) {

			_repeatDelayTime = amount;
			return this;
		};

		this.yoyo = function (yoyo) {

			_yoyo = yoyo;
			return this;
		};

		this.easing = function (easing) {

			_easingFunction = easing;
			return this;
		};

		this.interpolation = function (interpolation) {

			_interpolationFunction = interpolation;
			return this;
		};

		this.chain = function () {

			_chainedTweens = arguments;
			return this;
		};

		this.onStart = function (callback) {

			_onStartCallback = callback;
			return this;
		};

		this.onUpdate = function (callback) {

			_onUpdateCallback = callback;
			return this;
		};

		this.onComplete = function (callback) {

			_onCompleteCallback = callback;
			return this;
		};

		this.onStop = function (callback) {

			_onStopCallback = callback;
			return this;
		};

		this.update = function (time) {

			var property;
			var elapsed;
			var value;

			if (time < _startTime) {
				return true;
			}

			if (_onStartCallbackFired === false) {

				if (_onStartCallback !== null) {
					_onStartCallback.call(_object, _object);
				}

				_onStartCallbackFired = true;
			}

			elapsed = (time - _startTime) / _duration;
			elapsed = elapsed > 1 ? 1 : elapsed;

			value = _easingFunction(elapsed);

			for (property in _valuesEnd) {

				// Don't update properties that do not exist in the source object
				if (_valuesStart[property] === undefined) {
					continue;
				}

				var start = _valuesStart[property] || 0;
				var end = _valuesEnd[property];

				if (end instanceof Array) {

					_object[property] = _interpolationFunction(end, value);
				} else {

					// Parses relative end values with start as base (e.g.: +10, -3)
					if (typeof end === 'string') {

						if (end.charAt(0) === '+' || end.charAt(0) === '-') {
							end = start + parseFloat(end);
						} else {
							end = parseFloat(end);
						}
					}

					// Protect against non numeric properties.
					if (typeof end === 'number') {
						_object[property] = start + (end - start) * value;
					}
				}
			}

			if (_onUpdateCallback !== null) {
				_onUpdateCallback.call(_object, value);
			}

			if (elapsed === 1) {

				if (_repeat > 0) {

					if (isFinite(_repeat)) {
						_repeat--;
					}

					// Reassign starting values, restart by making startTime = now
					for (property in _valuesStartRepeat) {

						if (typeof _valuesEnd[property] === 'string') {
							_valuesStartRepeat[property] = _valuesStartRepeat[property] + parseFloat(_valuesEnd[property]);
						}

						if (_yoyo) {
							var tmp = _valuesStartRepeat[property];

							_valuesStartRepeat[property] = _valuesEnd[property];
							_valuesEnd[property] = tmp;
						}

						_valuesStart[property] = _valuesStartRepeat[property];
					}

					if (_yoyo) {
						_reversed = !_reversed;
					}

					if (_repeatDelayTime !== undefined) {
						_startTime = time + _repeatDelayTime;
					} else {
						_startTime = time + _delayTime;
					}

					return true;
				} else {

					if (_onCompleteCallback !== null) {

						_onCompleteCallback.call(_object, _object);
					}

					for (var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++) {
						// Make the chained tweens start exactly at the time they should,
						// even if the `update()` method was called way past the duration of the tween
						_chainedTweens[i].start(_startTime + _duration);
					}

					return false;
				}
			}

			return true;
		};
	};

	TWEEN.Easing = {

		Linear: {

			None: function None(k) {

				return k;
			}

		},

		Quadratic: {

			In: function In(k) {

				return k * k;
			},

			Out: function Out(k) {

				return k * (2 - k);
			},

			InOut: function InOut(k) {

				if ((k *= 2) < 1) {
					return 0.5 * k * k;
				}

				return -0.5 * (--k * (k - 2) - 1);
			}

		},

		Cubic: {

			In: function In(k) {

				return k * k * k;
			},

			Out: function Out(k) {

				return --k * k * k + 1;
			},

			InOut: function InOut(k) {

				if ((k *= 2) < 1) {
					return 0.5 * k * k * k;
				}

				return 0.5 * ((k -= 2) * k * k + 2);
			}

		},

		Quartic: {

			In: function In(k) {

				return k * k * k * k;
			},

			Out: function Out(k) {

				return 1 - --k * k * k * k;
			},

			InOut: function InOut(k) {

				if ((k *= 2) < 1) {
					return 0.5 * k * k * k * k;
				}

				return -0.5 * ((k -= 2) * k * k * k - 2);
			}

		},

		Quintic: {

			In: function In(k) {

				return k * k * k * k * k;
			},

			Out: function Out(k) {

				return --k * k * k * k * k + 1;
			},

			InOut: function InOut(k) {

				if ((k *= 2) < 1) {
					return 0.5 * k * k * k * k * k;
				}

				return 0.5 * ((k -= 2) * k * k * k * k + 2);
			}

		},

		Sinusoidal: {

			In: function In(k) {

				return 1 - Math.cos(k * Math.PI / 2);
			},

			Out: function Out(k) {

				return Math.sin(k * Math.PI / 2);
			},

			InOut: function InOut(k) {

				return 0.5 * (1 - Math.cos(Math.PI * k));
			}

		},

		Exponential: {

			In: function In(k) {

				return k === 0 ? 0 : Math.pow(1024, k - 1);
			},

			Out: function Out(k) {

				return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
			},

			InOut: function InOut(k) {

				if (k === 0) {
					return 0;
				}

				if (k === 1) {
					return 1;
				}

				if ((k *= 2) < 1) {
					return 0.5 * Math.pow(1024, k - 1);
				}

				return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
			}

		},

		Circular: {

			In: function In(k) {

				return 1 - Math.sqrt(1 - k * k);
			},

			Out: function Out(k) {

				return Math.sqrt(1 - --k * k);
			},

			InOut: function InOut(k) {

				if ((k *= 2) < 1) {
					return -0.5 * (Math.sqrt(1 - k * k) - 1);
				}

				return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
			}

		},

		Elastic: {

			In: function In(k) {

				if (k === 0) {
					return 0;
				}

				if (k === 1) {
					return 1;
				}

				return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
			},

			Out: function Out(k) {

				if (k === 0) {
					return 0;
				}

				if (k === 1) {
					return 1;
				}

				return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;
			},

			InOut: function InOut(k) {

				if (k === 0) {
					return 0;
				}

				if (k === 1) {
					return 1;
				}

				k *= 2;

				if (k < 1) {
					return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
				}

				return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;
			}

		},

		Back: {

			In: function In(k) {

				var s = 1.70158;

				return k * k * ((s + 1) * k - s);
			},

			Out: function Out(k) {

				var s = 1.70158;

				return --k * k * ((s + 1) * k + s) + 1;
			},

			InOut: function InOut(k) {

				var s = 1.70158 * 1.525;

				if ((k *= 2) < 1) {
					return 0.5 * (k * k * ((s + 1) * k - s));
				}

				return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
			}

		},

		Bounce: {

			In: function In(k) {

				return 1 - TWEEN.Easing.Bounce.Out(1 - k);
			},

			Out: function Out(k) {

				if (k < 1 / 2.75) {
					return 7.5625 * k * k;
				} else if (k < 2 / 2.75) {
					return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
				} else if (k < 2.5 / 2.75) {
					return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
				} else {
					return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
				}
			},

			InOut: function InOut(k) {

				if (k < 0.5) {
					return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
				}

				return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;
			}

		}

	};

	TWEEN.Interpolation = {

		Linear: function Linear(v, k) {

			var m = v.length - 1;
			var f = m * k;
			var i = Math.floor(f);
			var fn = TWEEN.Interpolation.Utils.Linear;

			if (k < 0) {
				return fn(v[0], v[1], f);
			}

			if (k > 1) {
				return fn(v[m], v[m - 1], m - f);
			}

			return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
		},

		Bezier: function Bezier(v, k) {

			var b = 0;
			var n = v.length - 1;
			var pw = Math.pow;
			var bn = TWEEN.Interpolation.Utils.Bernstein;

			for (var i = 0; i <= n; i++) {
				b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
			}

			return b;
		},

		CatmullRom: function CatmullRom(v, k) {

			var m = v.length - 1;
			var f = m * k;
			var i = Math.floor(f);
			var fn = TWEEN.Interpolation.Utils.CatmullRom;

			if (v[0] === v[m]) {

				if (k < 0) {
					i = Math.floor(f = m * (1 + k));
				}

				return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
			} else {

				if (k < 0) {
					return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
				}

				if (k > 1) {
					return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
				}

				return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
			}
		},

		Utils: {

			Linear: function Linear(p0, p1, t) {

				return (p1 - p0) * t + p0;
			},

			Bernstein: function Bernstein(n, i) {

				var fc = TWEEN.Interpolation.Utils.Factorial;

				return fc(n) / fc(i) / fc(n - i);
			},

			Factorial: function () {

				var a = [1];

				return function (n) {

					var s = 1;

					if (a[n]) {
						return a[n];
					}

					for (var i = n; i > 1; i--) {
						s *= i;
					}

					a[n] = s;
					return s;
				};
			}(),

			CatmullRom: function CatmullRom(p0, p1, p2, p3, t) {

				var v0 = (p2 - p0) * 0.5;
				var v1 = (p3 - p1) * 0.5;
				var t2 = t * t;
				var t3 = t * t2;

				return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
			}

		}

	};

	// UMD (Universal Module Definition)
	(function (root) {

		if (true) {

			// AMD
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return TWEEN;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {

			// Node.js
			module.exports = TWEEN;
		} else if (root !== undefined) {

			// Global variable
			root.TWEEN = TWEEN;
		}
	})(undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ }
/******/ ])
});
;