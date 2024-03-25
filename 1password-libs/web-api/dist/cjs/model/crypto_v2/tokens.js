"use strict";
var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }).apply(this, arguments)
    },
    __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
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
                    u(n.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function s(e) {
                try {
                    u(n.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function u(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(o, s)
            }
            u((n = n.apply(e, t || [])).next())
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
                }([a, s])
            }
        }
    },
    __read = this && this.__read || function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, i, a = r.call(e),
            o = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(n = a.next()).done;) o.push(n.value)
        } catch (e) {
            i = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (r = a.return) && r.call(a)
            } finally {
                if (i) throw i.error
            }
        }
        return o
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.verifyToken = exports.createToken = exports.JwtStandardClaims = void 0;
var t = __importStar(require("io-ts")),
    util = __importStar(require("../../util")),
    ecdsa = __importStar(require("../ecdsa"));
exports.JwtStandardClaims = t.readonly(t.partial({
    iss: t.string,
    sub: t.string,
    aud: t.readonlyArray(t.string),
    exp: util.RfcNumericDate,
    nbf: util.RfcNumericDate,
    iat: util.RfcNumericDate,
    jti: t.string
}), "JwtStandardClaims");
var createToken = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n, i, a, o, s, u, l;
        return __generator(this, function(c) {
            switch (c.label) {
                case 0:
                    return n = {
                        alg: ecdsa.JWK_ALG_ES256,
                        kid: e.kid,
                        typ: "JWT"
                    }, i = util.bytesToBase64url(util.json2ab(n)), a = util.bytesToBase64url(util.json2ab(r.encode(t))), o = util.str2ab(i + "." + a), s = __assign(__assign({}, e), {
                        key_ops: ["sign"]
                    }), [4, ecdsa.importPriKey(s)];
                case 1:
                    return u = c.sent(), [4, ecdsa.sign({
                        alg: n.alg,
                        key: u,
                        signingInput: o
                    })];
                case 2:
                    return l = c.sent(), [2, i + "." + a + "." + util.bytesToBase64url(l)]
            }
        })
    })
};
exports.createToken = createToken;
var verifyToken = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n, i, a, o, s, u, l, c, f, d;
        return __generator(this, function(_) {
            switch (_.label) {
                case 0:
                    if (n = t.split("."), i = __read(n, 3), a = i[0], o = i[1], s = i[2], void 0 === a || void 0 === o || void 0 === s || 3 !== n.length) throw new Error("Invalid JWT: parts.length == " + n.length);
                    if ("string" == typeof(u = util.decodeBytes(util.base64urlToBytes(a), util.crypto.JwtHeader)).kid && u.kid !== e.kid) throw new Error("Incorrect signing key");
                    return l = util.str2ab(a + "." + o), [4, ecdsa.importPubKey(e)];
                case 1:
                    return c = _.sent(), [4, ecdsa.verify({
                        alg: u.alg,
                        key: c,
                        signingInput: l,
                        signature: util.base64urlToBytes(s)
                    })];
                case 2:
                    return f = _.sent(), d = util.decodeBytes(util.base64urlToBytes(o), r), [2, {
                        isValid: f,
                        header: u,
                        claims: d
                    }]
            }
        })
    })
};
exports.verifyToken = verifyToken;