'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _combinationState = require('./utils/combinationState');

var _combinationState2 = _interopRequireDefault(_combinationState);

var _createShareFactory = require('./utils/createShareFactory');

var _createShareFactory2 = _interopRequireDefault(_createShareFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function EmailLink(_ref) {
    var subject = _ref.subject,
        body = _ref.body;

    var shareUrl = 'mailto:';
    return shareUrl + _combinationState2.default.apply(undefined, arguments);
}

var EmailShare = (0, _createShareFactory2.default)('email', function (props) {
    var data = props.data || {};
    return {
        subject: data.Subject || '',
        body: data.body || ''
    };
}, EmailLink, false);

exports.default = EmailShare;