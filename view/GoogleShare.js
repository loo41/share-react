'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _combinationState = require('./utils/combinationState');

var _combinationState2 = _interopRequireDefault(_combinationState);

var _createShareFactory = require('./utils/createShareFactory');

var _createShareFactory2 = _interopRequireDefault(_createShareFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function googleLink(_ref) {
    var url = _ref.url;

    var shareUrl = 'https://plus.google.com/share';
    return shareUrl + _combinationState2.default.apply(undefined, arguments);
}

var GoogleShare = (0, _createShareFactory2.default)('google', function (props) {
    var data = props.data || {};
    return {
        url: data.url || 'http://youngon.cn'
    };
}, googleLink);

exports.default = GoogleShare;