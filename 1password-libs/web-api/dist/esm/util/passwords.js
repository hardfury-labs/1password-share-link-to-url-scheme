var passphraseWordList, commonPasswordsList, __values = this && this.__values || function(r) {
    var e = "function" == typeof Symbol && Symbol.iterator,
        t = e && r[e],
        o = 0;
    if (t) return t.call(r);
    if (r && "number" == typeof r.length) return {
        next: function() {
            return r && o >= r.length && (r = void 0), {
                value: r && r[o++],
                done: !r
            }
        }
    };
    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
};
import {
    escapeRegExp as _escapeRegExp,
    some
} from "lodash-es";
import {
    getRandomValueFromRange
} from "./rand";
export var setPassphraseWordList = function(r) {
    passphraseWordList = r
};
export var setCommonPasswordsList = function(r) {
    commonPasswordsList = r
};
export var hasCommonPasswordsList = function() {
    return !!commonPasswordsList
};
export var PASS_CHAR_SET = {
    UPPERCASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    LOWERCASE: "abcdefghijklmnopqrstuvwxyz",
    DIGITS: "0123456789",
    SYMBOLS: "#$%&()*+,.;<=>?@[]^{}"
};
export var generatePassword = function(r, e) {
    for (var t = "", o = 0; o < e; ++o) {
        t += r[getRandomValueFromRange(0, r.length - 1)]
    }
    return [t, e * Math.log(r.length) / Math.log(2)]
};
export var generatePassphrase = function(r) {
    if (!passphraseWordList) throw new Error("Word list is not loaded");
    r = Math.max(1, Math.min(20, Math.ceil(r)));
    for (var e = [], t = 1; t <= r; t++) {
        var o = passphraseWordList[getRandomValueFromRange(0, passphraseWordList.length - 1)];
        void 0 !== o && e.push(o)
    }
    return [e, r * Math.log(passphraseWordList.length) / Math.log(2)]
};
export var calculatePasswordStrength = function(r, e) {
    var t, o;
    if (!r) return 0;
    var a = r.toArray().length;
    "string" == typeof e && e.length > 0 && r.toLowerCase().includes(e.toLowerCase()) && (a -= e.toArray().length + 1, a = Math.max(0, a));
    var s = entropyForPasswordLength(a);
    if (s *= 2, commonPasswordsList && commonPasswordsList.includes(r.toLowerCase())) return 1;
    var n = r.toLowerCase();
    n = (n = (n = (n = (n = (n = n.replace(/0/g, "o")).replace(/1/g, "l")).replace(/3/g, "e")).replace(/4/g, "a")).replace(/5/g, "s")).replace(/7/g, "t"), commonPasswordsList && commonPasswordsList.includes(n) && (s = 4);
    var i = [PASS_CHAR_SET.LOWERCASE, PASS_CHAR_SET.UPPERCASE, PASS_CHAR_SET.DIGITS, " ", ".?!,;:-\"'()", "`~@#$%^&*[]{}+=_|\\/<>"],
        l = 0;
    try {
        for (var c = __values(i), u = c.next(); !u.done; u = c.next()) {
            var p = u.value;
            stringContainsCharacterFromSet(r, p) && (l += 1)
        }
    } catch (r) {
        t = {
            error: r
        }
    } finally {
        try {
            u && !u.done && (o = c.return) && o.call(c)
        } finally {
            if (t) throw t.error
        }
    }
    return s += 6 * (l - 1), Math.min(100, Math.round(s))
};
var stringContainsCharacterFromSet = function(r, e) {
        if (!r) return !1;
        var t = e.toArray();
        return r.toArray().some(function(r) {
            return t.includes(r)
        })
    },
    entropyForPasswordLength = function(r) {
        var e, t = 0;
        return r > 20 && (t += r - 20, r = 20), r > 10 && (t += 1.5 * (r - 10), r = 10), t += null !== (e = [0, 4, 6, 8, 10, 12, 14, 16, 18, 20, 21][r]) && void 0 !== e ? e : 0
    };
export var passwordIsInDictionary = function(r) {
    var e = r.toLowerCase(),
        t = leet2English(e);
    return !!commonPasswordsList && some(commonPasswordsList, function(r) {
        return !(r.length < 10) && (r === e || t.test(r))
    })
};
var leet2English = function(r) {
        var e, t, o = {
                0: "o",
                1: "[li]",
                2: "too?",
                3: "e",
                4: "(a|for)",
                5: "s",
                7: "t",
                8: "a(te?)?",
                "@": "at?",
                $: "s",
                x: "(c?ks|x)",
                z: "[sz]"
            },
            a = "",
            s = "",
            n = r.toArray();
        try {
            for (var i = __values(n), l = i.next(); !l.done; l = i.next()) {
                var c = l.value;
                o[c] ? (a += escapeRegExp(s) + o[c], s = "") : s += c
            }
        } catch (r) {
            e = {
                error: r
            }
        } finally {
            try {
                l && !l.done && (t = i.return) && t.call(i)
            } finally {
                if (e) throw e.error
            }
        }
        return a += escapeRegExp(s), new RegExp("^" + a + "$")
    },
    escapeRegExp = function(r) {
        return r ? _escapeRegExp(r) : ""
    };