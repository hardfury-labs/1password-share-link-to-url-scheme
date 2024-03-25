"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.dateToGolang = exports.dateFromGolang = void 0;
var dateFromGolang = function(o) {
    return "string" != typeof o || 0 === o.indexOf("0001") ? void 0 : new Date(o)
};
exports.dateFromGolang = dateFromGolang;
var dateToGolang = function(o) {
    return o ? o.toISOString() : ""
};
exports.dateToGolang = dateToGolang;