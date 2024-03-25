import {
    isLeft
} from "fp-ts/es6/Either";
import * as t from "io-ts";
import {
    isDate,
    reduce,
    reduceRight
} from "lodash-es";
import * as sjcl from "sjcl";
import {
    dateFromGolang
} from "./date";
import {
    unsafeDecodeAs
} from "./validator";
var getDecoder = function() {
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
export var ab2str = getDecoder();
export var str2ab = getEncoder();
export var decodeBytes = function(e, r) {
    return unsafeDecodeAs(r)(ab2json(e))
};
export var ab2json = function(e) {
    return JSON.parse(ab2str(e))
};
export var json2ab = function(e) {
    return str2ab(JSON.stringify(e))
};
export var isAB = function(e) {
    return "number" == typeof e.byteLength
};
export var bytesToBits = sjcl.codec.bytes.toBits.bind(sjcl.codec.bytes);
export var bytesToBase64url = function(e) {
    for (var r = "", t = void 0, n = e.length, o = 0, i = 0; i < n; i++) t = i % 3, o |= e[i] << (16 >>> t & 24), 2 !== t && n - i != 1 || (r += String.fromCharCode(getCharCodeForBase64URLIndex(o >>> 18 & 63), getCharCodeForBase64URLIndex(o >>> 12 & 63), getCharCodeForBase64URLIndex(o >>> 6 & 63), getCharCodeForBase64URLIndex(63 & o)), o = 0);
    var a = (3 - e.length % 3) % 3;
    return 0 === a ? r : r.slice(0, -a)
};
var getCharCodeForBase64URLIndex = function(e) {
    return e < 26 ? e + 65 : e < 52 ? e + 71 : e < 62 ? e - 4 : 62 === e ? 45 : 95
};
export var base64urlToBytes = function(e) {
    return e = base64ToBase64url(e), new Uint8Array(sjcl.codec.bytes.fromBits(sjcl.codec.base64url.toBits(e)))
};
export var base64ToBase64url = function(e) {
    return e.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
};
export var bytesToHex = function(e) {
    return sjcl.codec.hex.fromBits(bytesToBits(e))
};
export var hexToBytes = function(e) {
    var r = e.length % 2 == 1 ? "0" + e : e;
    return new Uint8Array(sjcl.codec.bytes.fromBits(sjcl.codec.hex.toBits(r)))
};
export var intToBytes = function(e, r) {
    var t = hexToBytes(e.toString(16)),
        n = r - t.byteLength;
    if (0 === n) return t;
    if (n < 0) return t.slice(-2);
    var o = new Uint8Array(r);
    return o.set(t, n), o
};
export var MAX_SAFE_INTEGER = 9007199254740991;
export var MIN_SAFE_INTEGER = -9007199254740991;
export var MAX_SAFE_INTEGER_BYTE_LENGTH = 6;
export var bytesToInteger = function(e, r) {
    var t;
    if (e.length <= MAX_SAFE_INTEGER_BYTE_LENGTH + 1 && (t = unsafeBytesToInteger(e, r)), void 0 === t || t > MAX_SAFE_INTEGER || t < MIN_SAFE_INTEGER) throw new Error("Result is outside the bounds of integer precision");
    return t
};
export var unsafeBytesToInteger = function(e, r) {
    return (r ? reduceRight : reduce)(e, function(e, r, t) {
        return e + r * Math.pow(256, t)
    }, 0)
};
export var RfcNumericDate = new t.Type("RfcNumericDate", function(e) {
    return isDate(e)
}, function(e, r) {
    var n = t.number.validate(e, r);
    if (isLeft(n)) return n;
    try {
        var o = new Date(1e3 * n.right);
        if (Number.isNaN(o.getTime())) throw new TypeError("Invalid Date input");
        return t.success(o)
    } catch (n) {
        return t.failure(e, r, n.message)
    }
}, function(e) {
    var r = e.getTime();
    if (Number.isNaN(r)) throw new TypeError("Invalid Date object");
    return Math.floor(r / 1e3)
});
export var IsoStringDate = new t.Type("IsoStringDate", function(e) {
    return isDate(e)
}, function(e, r) {
    var n = t.string.validate(e, r);
    if (isLeft(n)) return n;
    try {
        var o = dateFromGolang(n.right);
        if (!o) throw new TypeError("Invalid Date input");
        if (Number.isNaN(o.getTime())) throw new TypeError("Invalid Date input");
        return t.success(o)
    } catch (n) {
        return t.failure(e, r, n.message)
    }
}, function(e) {
    var r = e.getTime();
    if (Number.isNaN(r)) throw new TypeError("Invalid Date object");
    return e.toISOString()
});