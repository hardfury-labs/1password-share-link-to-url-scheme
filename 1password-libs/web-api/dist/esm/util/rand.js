import {
    MAX_SAFE_INTEGER,
    MAX_SAFE_INTEGER_BYTE_LENGTH,
    MIN_SAFE_INTEGER,
    unsafeBytesToInteger
} from "./codec";
import {
    getRandomBytes
} from "./crypto";
import {
    bytesAsClientUuid
} from "./misc";
export var generateRandomID = function(e) {
    var r = getRandomBytes(e || 4);
    return bytesAsClientUuid(r)
};
export var selectRandomElement = function(e) {
    if (0 === e.length) throw new Error("selectRandomElement: Cannot select element of empty array");
    return e[getRandomValueFromRange(0, e.length - 1)]
};
export var getRandomValueFromRange = function(e, r) {
    if ("number" != typeof r || "number" != typeof e) throw new TypeError("Boundaries must be defined");
    if (r < e) throw new Error("Upper boundary cannot be less than lower boundary");
    if (r === e) return e;
    var t = r - e + 1,
        o = Math.ceil(Math.log(t) / Math.log(2) / 8);
    if (o > MAX_SAFE_INTEGER_BYTE_LENGTH || r > MAX_SAFE_INTEGER || e < MIN_SAFE_INTEGER) throw new Error("Boundaries are too large for JavaScript");
    var n, a = Math.pow(256, o),
        E = a - a % t,
        m = new Uint8Array(o);
    do {
        n = unsafeBytesToInteger(crypto.getRandomValues(m))
    } while (n >= E);
    var i = n % t + e;
    if (i < e || r < i) throw new Error("Somehow managed to generate a result out of range");
    return i
};
export var getRandomNumberWithByteLength = function(e) {
    if (e > MAX_SAFE_INTEGER_BYTE_LENGTH || e < 1) throw new Error("Byte length must be in [1, 6]");
    return unsafeBytesToInteger(getRandomBytes(e))
};