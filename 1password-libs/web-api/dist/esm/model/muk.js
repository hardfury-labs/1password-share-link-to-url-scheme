var __awaiter = this && this.__awaiter || function(t, e, r, n) {
        return new(r || (r = Promise))(function(i, a) {
            function o(t) {
                try {
                    u(n.next(t))
                } catch (t) {
                    a(t)
                }
            }

            function s(t) {
                try {
                    u(n.throw(t))
                } catch (t) {
                    a(t)
                }
            }

            function u(t) {
                var e;
                t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                    t(e)
                })).then(o, s)
            }
            u((n = n.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        var r, n, i, a, o = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function s(a) {
            return function(s) {
                return function(a) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                        switch (n = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                            case 0:
                            case 1:
                                i = a;
                                break;
                            case 4:
                                return o.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, n = a[1], a = [0];
                                continue;
                            case 7:
                                a = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                    o.label = a[1];
                                    break
                                }
                                if (6 === a[0] && o.label < i[1]) {
                                    o.label = i[1], i = a;
                                    break
                                }
                                if (i && o.label < i[2]) {
                                    o.label = i[2], o.ops.push(a);
                                    break
                                }
                                i[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        a = e.call(t, o)
                    } catch (t) {
                        a = [6, t], n = 0
                    } finally {
                        r = i = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, s])
            }
        }
    };
import {
    startsWith
} from "lodash-es";
import * as util from "../util";
import * as kdf from "./kdf";
import {
    SecretKey
} from "./secret_key";
import {
    KID_MASTER_PASSWORD
} from "./symmetric_key_constants";
export var deriveRawMasterKey = function(t, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, n, i, a;
        return __generator(this, function(o) {
            switch (o.label) {
                case 0:
                    return r = e.secretKey, n = t.enc, [4, getDerivedBits(t, e)];
                case 1:
                    return i = o.sent(), a = SecretKey.combineWithBytes(i, r), [2, {
                        uuid: KID_MASTER_PASSWORD,
                        enc: n,
                        rawKey: a
                    }]
            }
        })
    })
};
var getDerivedBits = function(t, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, n, i, a, o, s, u, c, l, f, h;
        return __generator(this, function(p) {
            switch (p.label) {
                case 0:
                    return r = e.email, n = e.password, i = t.alg, a = t.iterations, o = t.salt, s = r.trim().toLowerCase(), u = util.normalizeUTF8(n), startsWith(i, "PBES2-") ? (c = util.prehash(u), [4, kdf.PBES2(i, util.ep(s, c), util.base64urlToBytes(o), a)]) : [3, 2];
                case 1:
                    return [2, p.sent()];
                case 2:
                    return startsWith(i, "PBES2g-") ? (l = util.str2ab(s), f = util.str2ab(i), h = kdf.HKDF("sha256", util.base64urlToBytes(o), f, l, 32), [4, kdf.PBES2(i, u, h, a)]) : [3, 4];
                case 3:
                    return [2, p.sent()];
                case 4:
                    throw new Error("Unknown derivation alg")
            }
        })
    })
};