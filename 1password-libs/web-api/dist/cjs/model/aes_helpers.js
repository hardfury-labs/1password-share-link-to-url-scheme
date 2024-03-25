"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getIv = void 0;
var crypto_1 = require("../util/crypto"),
    getIv = function() {
        return crypto_1.getRandomBytes(12)
    };
exports.getIv = getIv;