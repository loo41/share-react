'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _combinationState = require('./utils/combinationState');

var _combinationState2 = _interopRequireDefault(_combinationState);

var _createShareFactory = require('./utils/createShareFactory');

var _createShareFactory2 = _interopRequireDefault(_createShareFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TencentLink(_ref) {
    var href = _ref.href,
        name = _ref.name,
        text = _ref.text,
        image = _ref.image,
        starid = _ref.starid,
        aid = _ref.aid,
        style = _ref.style;

    var shareUrl = 'http://share.v.t.qq.com/index.php';
    return shareUrl + _combinationState2.default.apply(undefined, arguments);
}

var TencentShare = (0, _createShareFactory2.default)('tencent', function (props) {
    var data = props.data || {};
    return {
        c: data.c || 'share',
        a: data.a || 'index',
        title: data.title || '',
        url: data.url || '',
        pic: data.pic || ''
    };
}, TencentLink);

exports.default = TencentShare;