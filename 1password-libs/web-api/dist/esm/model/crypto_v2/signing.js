var __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(a, i) {
            function o(e) {
                try {
                    s(n.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function u(e) {
                try {
                    s(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                var t;
                e.done ? a(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(o, u)
            }
            s((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, a, i, o = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
                return function(i) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (r = 1, n && (a = 2 & i[0] ? n.return : i[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, i[1])).done) return a;
                        switch (n = 0, a && (i = [2 & i[0], a.value]), i[0]) {
                            case 0:
                            case 1:
                                a = i;
                                break;
                            case 4:
                                return o.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, n = i[1], i = [0];
                                continue;
                            case 7:
                                i = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = o.trys).length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                    o.label = i[1];
                                    break
                                }
                                if (6 === i[0] && o.label < a[1]) {
                                    o.label = a[1], a = i;
                                    break
                                }
                                if (a && o.label < a[2]) {
                                    o.label = a[2], o.ops.push(i);
                                    break
                                }
                                a[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        i = t.call(e, o)
                    } catch (e) {
                        i = [6, e], n = 0
                    } finally {
                        r = a = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    };
import * as util from "../../util";
import * as ecdsa from "../ecdsa";
export var sign = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, n, a, i, o, u;
        return __generator(this, function(s) {
            switch (s.label) {
                case 0:
                    return [4, ecdsa.importPriKey(e)];
                case 1:
                    return r = s.sent(), n = {
                        alg: ecdsa.JWK_ALG_ES256,
                        kid: e.kid,
                        typ: "jose+json"
                    }, a = util.bytesToBase64url(util.json2ab(n)), i = util.bytesToBase64url(t), o = util.str2ab(a + "." + i), [4, ecdsa.sign({
                        alg: n.alg,
                        key: r,
                        signingInput: o
                    })];
                case 2:
                    return u = s.sent(), [2, {
                        protected: a,
                        payload: i,
                        signature: util.bytesToBase64url(u)
                    }]
            }
        })
    })
};
export var verify = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, n, a, i;
        return __generator(this, function(o) {
            switch (o.label) {
                case 0:
                    return [4, ecdsa.importPubKey(e)];
                case 1:
                    if (r = o.sent(), (n = util.decodeBytes(util.base64urlToBytes(t.protected), util.crypto.JwsHeader)).alg !== ecdsa.JWK_ALG_ES256) throw new Error("Unexpected algorithm");
                    if (n.kid !== e.kid) throw new Error("Incorrect signing key");
                    return a = util.str2ab(t.protected + "." + t.payload), i = util.base64urlToBytes(t.signature), [4, ecdsa.verify({
                        alg: n.alg,
                        key: r,
                        signingInput: a,
                        signature: i
                    })];
                case 2:
                    return [2, {
                        isValid: o.sent(),
                        header: n
                    }]
            }
        })
    })
};