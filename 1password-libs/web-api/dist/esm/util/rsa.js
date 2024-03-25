var __assign = this && this.__assign || function() {
    return (__assign = Object.assign || function(e) {
        for (var r, s = 1, n = arguments.length; s < n; s++)
            for (var t in r = arguments[s]) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
        return e
    }).apply(this, arguments)
};
import {
    BigInteger
} from "jsbn";
import * as sjcl from "sjcl";
export var primesAreReversed = function(e) {
    return base64ToBn(e.p).compareTo(base64ToBn(e.q)) < 0
};
export var swapPrimesIfNeeded = function(e) {
    return primesAreReversed(e) ? swapPrimes(e) : e
};
export var swapPrimes = function(e) {
    return __assign(__assign({}, e), {
        p: e.q,
        q: e.p,
        dp: e.dq,
        dq: e.dp,
        qi: calculateQi(e.q, e.p)
    })
};
var base64ToBn = function(e) {
        var r = sjcl.codec.hex.fromBits(sjcl.codec.base64url.toBits(e));
        return new BigInteger(r, 16)
    },
    bnToBase64 = function(e) {
        var r = e.toString(16),
            s = r.length % 2 == 1 ? "0" + r : r;
        return sjcl.codec.base64url.fromBits(sjcl.codec.hex.toBits(s))
    },
    calculateQi = function(e, r) {
        return bnToBase64(base64ToBn(r).modInverse(base64ToBn(e)))
    };