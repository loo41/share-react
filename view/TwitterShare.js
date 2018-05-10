'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _combinationState = require('./utils/combinationState');

var _combinationState2 = _interopRequireDefault(_combinationState);

var _createShareFactory = require('./utils/createShareFactory');

var _createShareFactory2 = _interopRequireDefault(_createShareFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TwitterLink(_ref) {
    var url = _ref.url,
        text = _ref.text,
        via = _ref.via;

    var shareUrl = 'https://twitter.com/intent/tweet';
    return shareUrl + _combinationState2.default.apply(undefined, arguments);
}

var TwitterShare = (0, _createShareFactory2.default)('twitter', function (props) {
    var data = props.data || {};
    return {
        url: data.url || '',
        text: data.text || '',
        via: data.via || ''
    };
}, TwitterLink);

exports.default = TwitterShare;