'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _combinationState = require('./utils/combinationState');

var _combinationState2 = _interopRequireDefault(_combinationState);

var _createShareFactory = require('./utils/createShareFactory');

var _createShareFactory2 = _interopRequireDefault(_createShareFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function facebookLink(_ref) {
    var url = _ref.url;

    var shareUrl = 'https://www.facebook.com/sharer/sharer.php';
    return shareUrl + _combinationState2.default.apply(undefined, arguments);
}

var FacebookShare = (0, _createShareFactory2.default)('facebook', function (props) {
    var data = props.data || {};
    return {
        u: data.url || 'http://youngon.cn'
    };
}, facebookLink);

exports.default = FacebookShare;