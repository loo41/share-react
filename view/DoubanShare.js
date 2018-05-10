'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _combinationState = require('./utils/combinationState');

var _combinationState2 = _interopRequireDefault(_combinationState);

var _createShareFactory = require('./utils/createShareFactory');

var _createShareFactory2 = _interopRequireDefault(_createShareFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DoubanLink(_ref) {
    var href = _ref.href,
        name = _ref.name,
        text = _ref.text,
        image = _ref.image,
        starid = _ref.starid,
        aid = _ref.aid,
        style = _ref.style;

    var shareUrl = 'http://shuo.douban.com/!service/share';
    return shareUrl + _combinationState2.default.apply(undefined, arguments);
}

var DoubanShare = (0, _createShareFactory2.default)('douban', function (props) {
    var data = props.data || {};
    return {
        href: data.url || '',
        name: data.name || '',
        text: data.text || '',
        image: data.image || '',
        starid: '0',
        aid: '0',
        style: '11'
    };
}, DoubanLink);

exports.default = DoubanShare;