"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
        void 0 === n && (n = r), Object.defineProperty(e, n, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, n) {
        void 0 === n && (n = r), e[n] = t[r]
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
    },
    __values = this && this.__values || function(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            r = t && e[t],
            n = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && n >= e.length && (e = void 0), {
                    value: e && e[n++],
                    done: !e
                }
            }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    },
    __read = this && this.__read || function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, i, o = r.call(e),
            a = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(n = o.next()).done;) a.push(n.value)
        } catch (e) {
            i = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (r = o.return) && r.call(o)
            } finally {
                if (i) throw i.error
            }
        }
        return a
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.SecretKey = void 0;
var SecretKey, util_1 = require("../util"),
    kdf = __importStar(require("./kdf")),
    SECRET_KEY_FORMAT_VERSION = "A3",
    SECRET_KEY_LENGTH_IN_CHARS = 26,
    SECRET_KEY_CHARS = "23456789ABCDEFGHJKLMNPQRSTVWXYZ";
! function(e) {
    e.generate = function() {
        return {
            format: SECRET_KEY_FORMAT_VERSION,
            id: util_1.generatePassword(SECRET_KEY_CHARS, 6)[0],
            key: util_1.generatePassword(SECRET_KEY_CHARS, SECRET_KEY_LENGTH_IN_CHARS)[0]
        }
    }, e.validKeyFromInput = function(e) {
        var t = new RegExp("[^" + SECRET_KEY_CHARS + "]", "gmi");
        if (0 === (e = e.toUpperCase().replace(t, "")).indexOf("A2")) {
            if (33 !== e.length) return;
            return {
                format: "A2",
                id: e.slice(2, 8),
                key: e.slice(8)
            }
        }
        if (0 === e.indexOf("A3")) {
            if (34 !== e.length) return;
            return {
                format: "A3",
                id: e.slice(2, 8),
                key: e.slice(8)
            }
        }
        if (34 === e.length) return {
            format: e.slice(0, 2),
            id: e.slice(2, 8),
            key: e.slice(8)
        }
    }, e.combineWithBytes = function(e, t) {
        var r, n, i = util_1.str2ab(t.key),
            o = util_1.str2ab(t.format),
            a = util_1.str2ab(t.id),
            l = kdf.HKDF("sha256", i, o, a, e.length),
            u = new Uint8Array(e.length);
        try {
            for (var f = __values(e.entries()), c = f.next(); !c.done; c = f.next()) {
                var _ = __read(c.value, 2),
                    s = _[0],
                    d = _[1],
                    y = l[s];
                if (void 0 === y) throw new Error("combineWithBytes: personalByte undefined");
                u[s] = d ^ y
            }
        } catch (e) {
            r = {
                error: e
            }
        } finally {
            try {
                c && !c.done && (n = f.return) && n.call(f)
            } finally {
                if (r) throw r.error
            }
        }
        return u
    }, e.asIdentifier = function(e) {
        return e.format + "-" + e.id
    }, e.asMaskedString = function(t) {
        return e.asIdentifier(t) + " •••••• ••••• ••••• ••••• •••••"
    }, e.asReadableString = function(e) {
        var t = e.format,
            r = e.id,
            n = e.key;
        switch (t) {
            case "A2":
                var i = n.match(/.{5}/g);
                if (!i || 5 !== i.length) throw new Error("Invalid key");
                return ["A2", r].concat(i).join("-");
            default:
                var o = n.slice(6).match(/.{5}/g);
                if (!o || 4 !== o.length) throw new Error("Invalid key");
                return [t, r, n.slice(0, 6)].concat(o).join("-")
        }
    }
}(SecretKey = exports.SecretKey || (exports.SecretKey = {}));