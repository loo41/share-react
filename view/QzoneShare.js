'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _combinationState = require('./utils/combinationState');

var _combinationState2 = _interopRequireDefault(_combinationState);

var _createShareFactory = require('./utils/createShareFactory');

var _createShareFactory2 = _interopRequireDefault(_createShareFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function qzoneLink(_ref) {
    var url = _ref.url,
        title = _ref.title,
        desc = _ref.desc,
        summary = _ref.summary;

    var shareUrl = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey';
    return shareUrl + _combinationState2.default.apply(undefined, arguments);
}

var QzoneShare = (0, _createShareFactory2.default)('qzone', function (props) {
    var data = props.data || {};
    return {
        url: data.url || '',
        title: data.title || '',
        desc: data.desc || '',
        summary: data.summary || ''
    };
}, qzoneLink);

exports.default = QzoneShare;