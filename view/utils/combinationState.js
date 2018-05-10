'use strict';

Object.defineProperty(exports, "__esModule", {
                value: true
});
exports.default = combination;
function combination(stateObject) {
                return '?' + Object.keys(stateObject).filter(function (key) {
                                return !!stateObject[key];
                }).map(function (key) {
                                return key + '=' + encodeURIComponent(stateObject[key]);
                }).join('&');
}