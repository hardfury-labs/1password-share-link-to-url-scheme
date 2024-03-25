"use strict";
var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var r, t = 1, s = arguments.length; t < s; t++)
                for (var n in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            return e
        }).apply(this, arguments)
    },
    __createBinding = this && this.__createBinding || (Object.create ? function(e, r, t, s) {
        void 0 === s && (s = t), Object.defineProperty(e, s, {
            enumerable: !0,
            get: function() {
                return r[t]
            }
        })
    } : function(e, r, t, s) {
        void 0 === s && (s = t), e[s] = r[t]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(e, r) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: r
        })
    } : function(e, r) {
        e.default = r
    }),
    __importStar = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var r = {};
        if (null != e)
            for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && __createBinding(r, e, t);
        return __setModuleDefault(r, e), r
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.swapPrimes = exports.swapPrimesIfNeeded = exports.primesAreReversed = void 0;
var jsbn_1 = require("jsbn"),
    sjcl = __importStar(require("sjcl")),
    primesAreReversed = function(e) {
        return base64ToBn(e.p).compareTo(base64ToBn(e.q)) < 0
    };
exports.primesAreReversed = primesAreReversed;
var swapPrimesIfNeeded = function(e) {
    return exports.primesAreReversed(e) ? exports.swapPrimes(e) : e
};
exports.swapPrimesIfNeeded = swapPrimesIfNeeded;
var swapPrimes = function(e) {
    return __assign(__assign({}, e), {
        p: e.q,
        q: e.p,
        dp: e.dq,
        dq: e.dp,
        qi: calculateQi(e.q, e.p)
    })
};
exports.swapPrimes = swapPrimes;
var base64ToBn = function(e) {
        var r = sjcl.codec.hex.fromBits(sjcl.codec.base64url.toBits(e));
        return new jsbn_1.BigInteger(r, 16)
    },
    bnToBase64 = function(e) {
        var r = e.toString(16),
            t = r.length % 2 == 1 ? "0" + r : r;
        return sjcl.codec.base64url.fromBits(sjcl.codec.hex.toBits(t))
    },
    calculateQi = function(e, r) {
        return bnToBase64(base64ToBn(r).modInverse(base64ToBn(e)))
    };