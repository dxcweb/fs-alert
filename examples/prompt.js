webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(38);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _fsAlert = __webpack_require__(185);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by dxc on 2016/11/18.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var Simple = function (_Component) {
	  _inherits(Simple, _Component);
	
	  function Simple() {
	    _classCallCheck(this, Simple);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  Simple.prototype.show1 = function show1() {
	    (0, _fsAlert.prompt)("输入123关闭", [{
	      text: "关闭"
	    }, {
	      text: "确定",
	      onClick: function onClick(value, close) {
	        if (value == "123") {
	          close();
	        }
	      }
	    }]);
	  };
	
	  Simple.prototype.render = function render() {
	    return _react2.default.createElement(
	      "div",
	      { style: { height: 300, padding: 20 } },
	      _react2.default.createElement(
	        "div",
	        { onClick: this.show1.bind(this, true) },
	        "\u70B9\u51FB\u663E\u793A"
	      )
	    );
	  };
	
	  return Simple;
	}(_react.Component);
	
	_reactDom2.default.render(_react2.default.createElement(Simple, null), document.getElementById("__react-content"));

/***/ })
]);
//# sourceMappingURL=prompt.js.map