"use strict";
var __values = this && this.__values || function(r) {
    var s = "function" == typeof Symbol && Symbol.iterator,
        e = s && r[s],
        t = 0;
    if (e) return e.call(r);
    if (r && "number" == typeof r.length) return {
        next: function() {
            return r && t >= r.length && (r = void 0), {
                value: r && r[t++],
                done: !r
            }
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.")
};
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.passwordIsInDictionary = exports.calculatePasswordStrength = exports.generatePassphrase = exports.generatePassword = exports.PASS_CHAR_SET = exports.hasCommonPasswordsList = exports.setCommonPasswordsList = exports.setPassphraseWordList = void 0;
var passphraseWordList, commonPasswordsList, lodash_es_1 = require("lodash-es"),
    rand_1 = require("./rand"),
    setPassphraseWordList = function(r) {
        passphraseWordList = r
    };
exports.setPassphraseWordList = setPassphraseWordList;
var setCommonPasswordsList = function(r) {
    commonPasswordsList = r
};
exports.setCommonPasswordsList = setCommonPasswordsList;
var hasCommonPasswordsList = function() {
    return !!commonPasswordsList
};
exports.hasCommonPasswordsList = hasCommonPasswordsList, exports.PASS_CHAR_SET = {
    UPPERCASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    LOWERCASE: "abcdefghijklmnopqrstuvwxyz",
    DIGITS: "0123456789",
    SYMBOLS: "#$%&()*+,.;<=>?@[]^{}"
};
var generatePassword = function(r, s) {
    for (var e = "", t = 0; t < s; ++t) {
        e += r[rand_1.getRandomValueFromRange(0, r.length - 1)]
    }
    return [e, s * Math.log(r.length) / Math.log(2)]
};
exports.generatePassword = generatePassword;
var generatePassphrase = function(r) {
    if (!passphraseWordList) throw new Error("Word list is not loaded");
    r = Math.max(1, Math.min(20, Math.ceil(r)));
    for (var s = [], e = 1; e <= r; e++) {
        var t = passphraseWordList[rand_1.getRandomValueFromRange(0, passphraseWordList.length - 1)];
        void 0 !== t && s.push(t)
    }
    return [s, r * Math.log(passphraseWordList.length) / Math.log(2)]
};
exports.generatePassphrase = generatePassphrase;
var calculatePasswordStrength = function(r, s) {
    var e, t;
    if (!r) return 0;
    var o = r.toArray().length;
    "string" == typeof s && s.length > 0 && r.toLowerCase().includes(s.toLowerCase()) && (o -= s.toArray().length + 1, o = Math.max(0, o));
    var a = entropyForPasswordLength(o);
    if (a *= 2, commonPasswordsList && commonPasswordsList.includes(r.toLowerCase())) return 1;
    var n = r.toLowerCase();
    n = (n = (n = (n = (n = (n = n.replace(/0/g, "o")).replace(/1/g, "l")).replace(/3/g, "e")).replace(/4/g, "a")).replace(/5/g, "s")).replace(/7/g, "t"), commonPasswordsList && commonPasswordsList.includes(n) && (a = 4);
    var i = [exports.PASS_CHAR_SET.LOWERCASE, exports.PASS_CHAR_SET.UPPERCASE, exports.PASS_CHAR_SET.DIGITS, " ", ".?!,;:-\"'()", "`~@#$%^&*[]{}+=_|\\/<>"],
        l = 0;
    try {
        for (var d = __values(i), p = d.next(); !p.done; p = d.next()) {
            var c = p.value;
            stringContainsCharacterFromSet(r, c) && (l += 1)
        }
    } catch (r) {
        e = {
            error: r
        }
    } finally {
        try {
            p && !p.done && (t = d.return) && t.call(d)
        } finally {
            if (e) throw e.error
        }
    }
    return a += 6 * (l - 1), Math.min(100, Math.round(a))
};
exports.calculatePasswordStrength = calculatePasswordStrength;
var stringContainsCharacterFromSet = function(r, s) {
        if (!r) return !1;
        var e = s.toArray();
        return r.toArray().some(function(r) {
            return e.includes(r)
        })
    },
    entropyForPasswordLength = function(r) {
        var s, e = 0;
        return r > 20 && (e += r - 20, r = 20), r > 10 && (e += 1.5 * (r - 10), r = 10), e += null !== (s = [0, 4, 6, 8, 10, 12, 14, 16, 18, 20, 21][r]) && void 0 !== s ? s : 0
    },
    passwordIsInDictionary = function(r) {
        var s = r.toLowerCase(),
            e = leet2English(s);
        return !!commonPasswordsList && lodash_es_1.some(commonPasswordsList, function(r) {
            return !(r.length < 10) && (r === s || e.test(r))
        })
    };
exports.passwordIsInDictionary = passwordIsInDictionary;
var leet2English = function(r) {
        var s, e, t = {
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
            o = "",
            a = "",
            n = r.toArray();
        try {
            for (var i = __values(n), l = i.next(); !l.done; l = i.next()) {
                var d = l.value;
                t[d] ? (o += escapeRegExp(a) + t[d], a = "") : a += d
            }
        } catch (r) {
            s = {
                error: r
            }
        } finally {
            try {
                l && !l.done && (e = i.return) && e.call(i)
            } finally {
                if (s) throw s.error
            }
        }
        return o += escapeRegExp(a), new RegExp("^" + o + "$")
    },
    escapeRegExp = function(r) {
        return r ? lodash_es_1.escapeRegExp(r) : ""
    };