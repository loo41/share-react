'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _combinationState = require('./utils/combinationState');

var _combinationState2 = _interopRequireDefault(_combinationState);

var _createShareFactory = require('./utils/createShareFactory');

var _createShareFactory2 = _interopRequireDefault(_createShareFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function weiboLink(_ref) {
    var url = _ref.url,
        title = _ref.title,
        pics = _ref.pics,
        appkey = _ref.appkey;

    var shareUrl = 'https://service.weibo.com/share/share.php';
    return shareUrl + _combinationState2.default.apply(undefined, arguments);
}

var WeiboShare = (0, _createShareFactory2.default)('weibo', function (props) {
    var data = props.data || {};
    return {
        url: data.url || '',
        title: data.title || '',
        pics: data.pics || '',
        appkey: data.appkey || ''
    };
}, weiboLink);

exports.default = WeiboShare;