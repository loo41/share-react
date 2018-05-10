'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function openWindow(url, _ref, closeWindow, isExitWindows) {
    var _ref$name = _ref.name,
        name = _ref$name === undefined ? 'share' : _ref$name,
        _ref$height = _ref.height,
        height = _ref$height === undefined ? 400 : _ref$height,
        _ref$width = _ref.width,
        width = _ref$width === undefined ? 600 : _ref$width;

    // 窗口大小 && 居中
    var top = window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - height / 2;
    var left = window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - width / 2;

    // 启用多窗口
    name ? name : Math.random() * 50 + 'youngon';

    typeof url === 'String' ? String(url) : url;

    // 窗口配置
    var config = {
        height: height,
        width: width,
        left: left,
        top: top,
        location: 'no',
        toolbar: 'no',
        status: 'no',
        directories: 'no',
        menubar: 'no',
        scrollbars: 'yes',
        resizable: 'no',
        centerscreen: 'yes',
        chrome: 'yes'
    };

    var sharePop = window.open(url, name, Object.keys(config).map(function (key) {
        return key + '=' + config[key];
    }).join(', '));

    if (closeWindow) {
        window.addEventListener('close', closeWindow(sharePop), false);
    }

    if (!isExitWindows) {
        sharePop.close();
        return;
    }

    return sharePop;
}

var Share = function (_PureComponent) {
    _inherits(Share, _PureComponent);

    function Share() {
        var _ref2;

        var _temp, _this, _ret;

        _classCallCheck(this, Share);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Share.__proto__ || Object.getPrototypeOf(Share)).call.apply(_ref2, [this].concat(args))), _this), _this._onClick = function (e) {
            var _this$props = _this.props,
                customWindow = _this$props.customWindow,
                disable = _this$props.disable;


            e.preventDefault();

            if (disable) return;
            customWindow ? customWindow(_this._createUrl()) : _this._openWindow(_this._createUrl());
        }, _this._onKeyPress = function (e) {
            if (e.key === 'Enter' || e.key === 13) {
                _this._onClick(e);
            }
        }, _this._createUrl = function () {
            var _this$props2 = _this.props,
                urlState = _this$props2.urlState,
                urlFactory = _this$props2.urlFactory;


            return urlFactory(urlState);
        }, _this._openWindow = function (shareUrl) {
            var _this$props3 = _this.props,
                windowHeight = _this$props3.windowHeight,
                windowWidth = _this$props3.windowWidth,
                windowName = _this$props3.windowName,
                closeWindow = _this$props3.closeWindow,
                isExitWindows = _this$props3.isExitWindows;


            var option = {
                name: windowName,
                height: windowHeight,
                width: windowWidth,
                isExitWindows: isExitWindows
            };

            openWindow(shareUrl, option, closeWindow, isExitWindows);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Share, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                style = _props.style,
                className = _props.className,
                otherProps = _props.otherProps,
                children = _props.children;

            return _react2.default.createElement(
                'div',
                _extends({}, otherProps, {
                    onClick: this._onClick,
                    onKeyPress: this._onKeyPress,
                    style: _extends({}, style),
                    className: className
                }),
                children
            );
        }
    }]);

    return Share;
}(_react.PureComponent);

/**
 * @method customWindow         // 自定义窗口
 * @method onKeyPress
 * @method closeWindow          // 关闭窗口事件
 * @method urlFactory           // 创建url工厂函数
 * @param  {windowHeight}
 * @param  {windowWidth}
 * @param  {windowName}
 */

Share.PropTypes = {
    otherProps: _propTypes2.default.object,
    customWindow: _propTypes2.default.func,
    onKeyPress: _propTypes2.default.func,
    children: _propTypes2.default.node,
    windowHeight: _propTypes2.default.number,
    windowWidth: _propTypes2.default.number,
    windowName: _propTypes2.default.string,
    closeWindow: _propTypes2.default.func,
    urlFactory: _propTypes2.default.func,
    urlState: _propTypes2.default.object,
    disable: _propTypes2.default.bool,
    style: _propTypes2.default.object,
    className: _propTypes2.default.String,
    isExitWindows: _propTypes2.default.bool
};

Share.defaultProps = {
    isExitWindows: true
};

function createShare(className, urlparam, urlFactory, isExitWindows) {
    var shareCreate = function shareCreate(props) {
        return _react2.default.createElement(Share, _extends({}, props, {
            className: className,
            urlState: urlparam(props),
            urlFactory: urlFactory,
            isExitWindows: isExitWindows
        }));
    };

    return shareCreate;
}

exports.default = createShare;