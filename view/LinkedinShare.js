'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _combinationState = require('./utils/combinationState');

var _combinationState2 = _interopRequireDefault(_combinationState);

var _createShareFactory = require('./utils/createShareFactory');

var _createShareFactory2 = _interopRequireDefault(_createShareFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function linkdinLink(_ref) {
    var url = _ref.url,
        title = _ref.title,
        desc = _ref.desc,
        summary = _ref.summary;

    var shareUrl = 'http://www.linkedin.com/shareArticle';
    return shareUrl + _combinationState2.default.apply(undefined, arguments);
}

var LinkdinShare = (0, _createShareFactory2.default)('linkin', function (props) {
    var data = props.data || {};
    return {
        mini: data.mini || true,
        ro: data.ro || true,
        title: data.title || 'youngon',
        url: data.url || 'http://youngon.cn',
        summary: data.summary || '',
        source: data.source || '',
        armin: data.armin || ''
    };
}, linkdinLink);

exports.default = LinkdinShare;