'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _combinationState = require('./utils/combinationState');

var _combinationState2 = _interopRequireDefault(_combinationState);

var _createShareFactory = require('./utils/createShareFactory');

var _createShareFactory2 = _interopRequireDefault(_createShareFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function qqLink(_ref) {
    var url = _ref.url,
        title = _ref.title,
        desc = _ref.desc,
        source = _ref.source,
        summary = _ref.summary,
        pics = _ref.pics;

    var shareUrl = 'http://connect.qq.com/widget/shareqq/index.html';
    return shareUrl + _combinationState2.default.apply(undefined, arguments);
}

var QqShare = (0, _createShareFactory2.default)('qq', function (props) {
    var data = props.data || {};
    return {
        url: data.url || 'http://youngon.cn',
        title: data.title || '',
        desc: data.desc || '',
        source: data.source || '',
        summary: data.summary || '',
        pics: data.pics || ''
    };
}, qqLink);

exports.default = QqShare;