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
    __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(i, a) {
            function o(e) {
                try {
                    s(n.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function u(e) {
                try {
                    s(n.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function s(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(o, u)
            }
            s((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
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
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function u(a) {
            return function(u) {
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
                        a = t.call(e, o)
                    } catch (e) {
                        a = [6, e], n = 0
                    } finally {
                        r = i = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, u])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.verify = exports.sign = void 0;
var util = __importStar(require("../../util")),
    ecdsa = __importStar(require("../ecdsa")),
    sign = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, n, i, a, o, u;
            return __generator(this, function(s) {
                switch (s.label) {
                    case 0:
                        return [4, ecdsa.importPriKey(e)];
                    case 1:
                        return r = s.sent(), n = {
                            alg: ecdsa.JWK_ALG_ES256,
                            kid: e.kid,
                            typ: "jose+json"
                        }, i = util.bytesToBase64url(util.json2ab(n)), a = util.bytesToBase64url(t), o = util.str2ab(i + "." + a), [4, ecdsa.sign({
                            alg: n.alg,
                            key: r,
                            signingInput: o
                        })];
                    case 2:
                        return u = s.sent(), [2, {
                            protected: i,
                            payload: a,
                            signature: util.bytesToBase64url(u)
                        }]
                }
            })
        })
    };
exports.sign = sign;
var verify = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, n, i, a;
        return __generator(this, function(o) {
            switch (o.label) {
                case 0:
                    return [4, ecdsa.importPubKey(e)];
                case 1:
                    if (r = o.sent(), (n = util.decodeBytes(util.base64urlToBytes(t.protected), util.crypto.JwsHeader)).alg !== ecdsa.JWK_ALG_ES256) throw new Error("Unexpected algorithm");
                    if (n.kid !== e.kid) throw new Error("Incorrect signing key");
                    return i = util.str2ab(t.protected + "." + t.payload), a = util.base64urlToBytes(t.signature), [4, ecdsa.verify({
                        alg: n.alg,
                        key: r,
                        signingInput: i,
                        signature: a
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
exports.verify = verify;