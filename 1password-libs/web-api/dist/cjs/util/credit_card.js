"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getObfuscatedCardNumber = void 0;
var getObfuscatedCardNumber = function(e, r) {
    return ("American Express" === r ? "•••• •••••• •" : "•••• •••• •••• ") + e.slice(-4)
};
exports.getObfuscatedCardNumber = getObfuscatedCardNumber;