var __values = this && this.__values || function(e) {
        var r = "function" == typeof Symbol && Symbol.iterator,
            t = r && e[r],
            n = 0;
        if (t) return t.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && n >= e.length && (e = void 0), {
                    value: e && e[n++],
                    done: !e
                }
            }
        };
        throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.")
    },
    __read = this && this.__read || function(e, r) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var n, i, a = t.call(e),
            o = [];
        try {
            for (;
                (void 0 === r || r-- > 0) && !(n = a.next()).done;) o.push(n.value)
        } catch (e) {
            i = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (t = a.return) && t.call(a)
            } finally {
                if (i) throw i.error
            }
        }
        return o
    };
import {
    generatePassword,
    str2ab
} from "../util";
import * as kdf from "./kdf";
var SECRET_KEY_FORMAT_VERSION = "A3",
    SECRET_KEY_LENGTH_IN_CHARS = 26,
    SECRET_KEY_CHARS = "23456789ABCDEFGHJKLMNPQRSTVWXYZ";
export var SecretKey;
! function(e) {
    e.generate = function() {
        return {
            format: SECRET_KEY_FORMAT_VERSION,
            id: generatePassword(SECRET_KEY_CHARS, 6)[0],
            key: generatePassword(SECRET_KEY_CHARS, SECRET_KEY_LENGTH_IN_CHARS)[0]
        }
    }, e.validKeyFromInput = function(e) {
        var r = new RegExp("[^" + SECRET_KEY_CHARS + "]", "gmi");
        if (0 === (e = e.toUpperCase().replace(r, "")).indexOf("A2")) {
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
    }, e.combineWithBytes = function(e, r) {
        var t, n, i = str2ab(r.key),
            a = str2ab(r.format),
            o = str2ab(r.id),
            l = kdf.HKDF("sha256", i, a, o, e.length),
            f = new Uint8Array(e.length);
        try {
            for (var c = __values(e.entries()), s = c.next(); !s.done; s = c.next()) {
                var u = __read(s.value, 2),
                    d = u[0],
                    E = u[1],
                    _ = l[d];
                if (void 0 === _) throw new Error("combineWithBytes: personalByte undefined");
                f[d] = E ^ _
            }
        } catch (e) {
            t = {
                error: e
            }
        } finally {
            try {
                s && !s.done && (n = c.return) && n.call(c)
            } finally {
                if (t) throw t.error
            }
        }
        return f
    }, e.asIdentifier = function(e) {
        return e.format + "-" + e.id
    }, e.asMaskedString = function(r) {
        return e.asIdentifier(r) + " •••••• ••••• ••••• ••••• •••••"
    }, e.asReadableString = function(e) {
        var r = e.format,
            t = e.id,
            n = e.key;
        switch (r) {
            case "A2":
                var i = n.match(/.{5}/g);
                if (!i || 5 !== i.length) throw new Error("Invalid key");
                return ["A2", t].concat(i).join("-");
            default:
                var a = n.slice(6).match(/.{5}/g);
                if (!a || 4 !== a.length) throw new Error("Invalid key");
                return [r, t, n.slice(0, 6)].concat(a).join("-")
        }
    }
}(SecretKey || (SecretKey = {}));