'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _combinationState = require('./utils/combinationState');

var _combinationState2 = _interopRequireDefault(_combinationState);

var _createShareFactory = require('./utils/createShareFactory');

var _createShareFactory2 = _interopRequireDefault(_createShareFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BaiduLink(_ref) {
    var url = _ref.url,
        title = _ref.title;

    var shareUrl = 'http://tieba.baidu.com/f/commit/share/openShareApi';
    return shareUrl + _combinationState2.default.apply(undefined, arguments);
}

var BaiduPostBarShare = (0, _createShareFactory2.default)('baidu', function (props) {
    var data = props.data || {};
    return {
        url: data.url || 'http://youngon.cn',
        title: data.title || ''
    };
}, BaiduLink);

exports.default = BaiduPostBarShare;