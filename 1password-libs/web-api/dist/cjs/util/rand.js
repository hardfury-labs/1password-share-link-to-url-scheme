"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getRandomNumberWithByteLength = exports.getRandomValueFromRange = exports.selectRandomElement = exports.generateRandomID = void 0;
var codec_1 = require("./codec"),
    crypto_1 = require("./crypto"),
    misc_1 = require("./misc"),
    generateRandomID = function(e) {
        var t = crypto_1.getRandomBytes(e || 4);
        return misc_1.bytesAsClientUuid(t)
    };
exports.generateRandomID = generateRandomID;
var selectRandomElement = function(e) {
    if (0 === e.length) throw new Error("selectRandomElement: Cannot select element of empty array");
    return e[exports.getRandomValueFromRange(0, e.length - 1)]
};
exports.selectRandomElement = selectRandomElement;
var getRandomValueFromRange = function(e, t) {
    if ("number" != typeof t || "number" != typeof e) throw new TypeError("Boundaries must be defined");
    if (t < e) throw new Error("Upper boundary cannot be less than lower boundary");
    if (t === e) return e;
    var r = t - e + 1,
        o = Math.ceil(Math.log(r) / Math.log(2) / 8);
    if (o > codec_1.MAX_SAFE_INTEGER_BYTE_LENGTH || t > codec_1.MAX_SAFE_INTEGER || e < codec_1.MIN_SAFE_INTEGER) throw new Error("Boundaries are too large for JavaScript");
    var n, a = Math.pow(256, o),
        m = a - a % r,
        d = new Uint8Array(o);
    do {
        n = codec_1.unsafeBytesToInteger(crypto.getRandomValues(d))
    } while (n >= m);
    var c = n % r + e;
    if (c < e || t < c) throw new Error("Somehow managed to generate a result out of range");
    return c
};
exports.getRandomValueFromRange = getRandomValueFromRange;
var getRandomNumberWithByteLength = function(e) {
    if (e > codec_1.MAX_SAFE_INTEGER_BYTE_LENGTH || e < 1) throw new Error("Byte length must be in [1, 6]");
    return codec_1.unsafeBytesToInteger(crypto_1.getRandomBytes(e))
};
exports.getRandomNumberWithByteLength = getRandomNumberWithByteLength;