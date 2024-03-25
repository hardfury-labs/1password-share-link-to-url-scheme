"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, o) {
        void 0 === o && (o = r), Object.defineProperty(e, o, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, o) {
        void 0 === o && (o = r), e[o] = t[r]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        })
    } : function(e, t) {
        e.default = t
    }),
    __importStar = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && __createBinding(t, e, r);
        return __setModuleDefault(t, e), t
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.IsoStringDate = exports.RfcNumericDate = exports.unsafeBytesToInteger = exports.bytesToInteger = exports.MAX_SAFE_INTEGER_BYTE_LENGTH = exports.MIN_SAFE_INTEGER = exports.MAX_SAFE_INTEGER = exports.intToBytes = exports.hexToBytes = exports.bytesToHex = exports.base64ToBase64url = exports.base64urlToBytes = exports.bytesToBase64url = exports.bytesToBits = exports.isAB = exports.json2ab = exports.ab2json = exports.decodeBytes = exports.str2ab = exports.ab2str = void 0;
var Either_1 = require("fp-ts/es6/Either"),
    t = __importStar(require("io-ts")),
    lodash_es_1 = require("lodash-es"),
    sjcl = __importStar(require("sjcl")),
    date_1 = require("./date"),
    validator_1 = require("./validator"),
    getDecoder = function() {
        if ("undefined" == typeof TextDecoder) return function(e) {
            return sjcl.codec.utf8String.fromBits(sjcl.codec.bytes.toBits(new Uint8Array(e)))
        };
        var e = new TextDecoder;
        return e.decode.bind(e)
    },
    getEncoder = function() {
        if ("undefined" == typeof TextEncoder) return function(e) {
            return new Uint8Array(sjcl.codec.bytes.fromBits(sjcl.codec.utf8String.toBits(e)))
        };
        var e = new TextEncoder;
        return e.encode.bind(e)
    };
exports.ab2str = getDecoder(), exports.str2ab = getEncoder();
var decodeBytes = function(e, t) {
    return validator_1.unsafeDecodeAs(t)(exports.ab2json(e))
};
exports.decodeBytes = decodeBytes;
var ab2json = function(e) {
    return JSON.parse(exports.ab2str(e))
};
exports.ab2json = ab2json;
var json2ab = function(e) {
    return exports.str2ab(JSON.stringify(e))
};
exports.json2ab = json2ab;
var isAB = function(e) {
    return "number" == typeof e.byteLength
};
exports.isAB = isAB, exports.bytesToBits = sjcl.codec.bytes.toBits.bind(sjcl.codec.bytes);
var bytesToBase64url = function(e) {
    for (var t = "", r = void 0, o = e.length, s = 0, n = 0; n < o; n++) r = n % 3, s |= e[n] << (16 >>> r & 24), 2 !== r && o - n != 1 || (t += String.fromCharCode(getCharCodeForBase64URLIndex(s >>> 18 & 63), getCharCodeForBase64URLIndex(s >>> 12 & 63), getCharCodeForBase64URLIndex(s >>> 6 & 63), getCharCodeForBase64URLIndex(63 & s)), s = 0);
    var a = (3 - e.length % 3) % 3;
    return 0 === a ? t : t.slice(0, -a)
};
exports.bytesToBase64url = bytesToBase64url;
var getCharCodeForBase64URLIndex = function(e) {
        return e < 26 ? e + 65 : e < 52 ? e + 71 : e < 62 ? e - 4 : 62 === e ? 45 : 95
    },
    base64urlToBytes = function(e) {
        return e = exports.base64ToBase64url(e), new Uint8Array(sjcl.codec.bytes.fromBits(sjcl.codec.base64url.toBits(e)))
    };
exports.base64urlToBytes = base64urlToBytes;
var base64ToBase64url = function(e) {
    return e.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
};
exports.base64ToBase64url = base64ToBase64url;
var bytesToHex = function(e) {
    return sjcl.codec.hex.fromBits(exports.bytesToBits(e))
};
exports.bytesToHex = bytesToHex;
var hexToBytes = function(e) {
    var t = e.length % 2 == 1 ? "0" + e : e;
    return new Uint8Array(sjcl.codec.bytes.fromBits(sjcl.codec.hex.toBits(t)))
};
exports.hexToBytes = hexToBytes;
var intToBytes = function(e, t) {
    var r = exports.hexToBytes(e.toString(16)),
        o = t - r.byteLength;
    if (0 === o) return r;
    if (o < 0) return r.slice(-2);
    var s = new Uint8Array(t);
    return s.set(r, o), s
};
exports.intToBytes = intToBytes, exports.MAX_SAFE_INTEGER = 9007199254740991, exports.MIN_SAFE_INTEGER = -9007199254740991, exports.MAX_SAFE_INTEGER_BYTE_LENGTH = 6;
var bytesToInteger = function(e, t) {
    var r;
    if (e.length <= exports.MAX_SAFE_INTEGER_BYTE_LENGTH + 1 && (r = exports.unsafeBytesToInteger(e, t)), void 0 === r || r > exports.MAX_SAFE_INTEGER || r < exports.MIN_SAFE_INTEGER) throw new Error("Result is outside the bounds of integer precision");
    return r
};
exports.bytesToInteger = bytesToInteger;
var unsafeBytesToInteger = function(e, t) {
    return (t ? lodash_es_1.reduceRight : lodash_es_1.reduce)(e, function(e, t, r) {
        return e + t * Math.pow(256, r)
    }, 0)
};
exports.unsafeBytesToInteger = unsafeBytesToInteger, exports.RfcNumericDate = new t.Type("RfcNumericDate", function(e) {
    return lodash_es_1.isDate(e)
}, function(e, r) {
    var o = t.number.validate(e, r);
    if (Either_1.isLeft(o)) return o;
    try {
        var s = new Date(1e3 * o.right);
        if (Number.isNaN(s.getTime())) throw new TypeError("Invalid Date input");
        return t.success(s)
    } catch (o) {
        return t.failure(e, r, o.message)
    }
}, function(e) {
    var t = e.getTime();
    if (Number.isNaN(t)) throw new TypeError("Invalid Date object");
    return Math.floor(t / 1e3)
}), exports.IsoStringDate = new t.Type("IsoStringDate", function(e) {
    return lodash_es_1.isDate(e)
}, function(e, r) {
    var o = t.string.validate(e, r);
    if (Either_1.isLeft(o)) return o;
    try {
        var s = date_1.dateFromGolang(o.right);
        if (!s) throw new TypeError("Invalid Date input");
        if (Number.isNaN(s.getTime())) throw new TypeError("Invalid Date input");
        return t.success(s)
    } catch (o) {
        return t.failure(e, r, o.message)
    }
}, function(e) {
    var t = e.getTime();
    if (Number.isNaN(t)) throw new TypeError("Invalid Date object");
    return e.toISOString()
});