"use strict";
var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
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
        return new(r || (r = Promise))(function(o, i) {
            function c(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    u(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function u(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(c, a)
            }
            u((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, o, i, c = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function a(i) {
            return function(a) {
                return function(i) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; c;) try {
                        if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                        switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return c.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                c.label++, n = i[1], i = [0];
                                continue;
                            case 7:
                                i = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = c.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    c.label = i[1];
                                    break
                                }
                                if (6 === i[0] && c.label < o[1]) {
                                    c.label = o[1], o = i;
                                    break
                                }
                                if (o && c.label < o[2]) {
                                    c.label = o[2], c.ops.push(i);
                                    break
                                }
                                o[2] && c.ops.pop(), c.trys.pop();
                                continue
                        }
                        i = t.call(e, c)
                    } catch (e) {
                        i = [6, e], n = 0
                    } finally {
                        r = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, a])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.registerServiceAccountTokenSignature = exports.registerServiceAccountTokenRequest = exports.createDataStreamingToken = exports.createConnectToken = exports.revokeAllServiceAccountTokensForAccount = exports.renameServiceAccountToken = exports.revokeServiceAccountToken = void 0;
var api = __importStar(require("../api")),
    model = __importStar(require("../model")),
    revokeServiceAccountToken = function(e, t, r) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(n) {
                return [2, api.revokeServiceAccountToken(e.session, t, r)]
            })
        })
    };
exports.revokeServiceAccountToken = revokeServiceAccountToken;
var renameServiceAccountToken = function(e, t, r, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        var o;
        return __generator(this, function(i) {
            return o = {
                name: n
            }, [2, api.renameServiceAccountToken(e.session, t, r, o)]
        })
    })
};
exports.renameServiceAccountToken = renameServiceAccountToken;
var revokeAllServiceAccountTokensForAccount = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [2, api.revokeAllServiceAccountTokensForAccount(e.session)]
        })
    })
};
exports.revokeAllServiceAccountTokensForAccount = revokeAllServiceAccountTokensForAccount;
var createConnectToken = function(e, t, r, n, o) {
    return __awaiter(void 0, void 0, void 0, function() {
        var i, c, a;
        return __generator(this, function(u) {
            switch (u.label) {
                case 0:
                    return [4, exports.registerServiceAccountTokenRequest(e, t, n, o, r.token, r.sPriKey.kid, r.sPriKey)];
                case 1:
                    return i = u.sent(), c = i.saJwt, a = i.registerTokenRequest, [4, api.registerServiceAccountToken(e.session, a)];
                case 2:
                    return u.sent(), [2, c]
            }
        })
    })
};
exports.createConnectToken = createConnectToken;
var createDataStreamingToken = function(e, t, r, n, o) {
    return __awaiter(void 0, void 0, void 0, function() {
        var i, c, a;
        return __generator(this, function(u) {
            switch (u.label) {
                case 0:
                    return [4, exports.registerServiceAccountTokenRequest(e, t, n, o, void 0, r.signingKey.kid, r.signingKey)];
                case 1:
                    return i = u.sent(), c = i.saJwt, a = i.registerTokenRequest, [4, api.registerServiceAccountToken(e.session, a)];
                case 2:
                    return u.sent(), [2, c]
            }
        })
    })
};
exports.createDataStreamingToken = createDataStreamingToken;
var registerServiceAccountTokenRequest = function(e, t, r, n, o, i, c) {
    return __awaiter(void 0, void 0, void 0, function() {
        var a, u, s;
        return __generator(this, function(v) {
            switch (v.label) {
                case 0:
                    if (!e.account) throw new Error("Cannot register token without Account information");
                    return [4, model.createServiceAccountJwt({
                        signingKey: c,
                        accountUuid: e.account.uuid,
                        serviceAccountUuid: t,
                        createTokenInfo: n,
                        bearerToken: o
                    })];
                case 1:
                    return a = v.sent(), [4, model.tokenSignatureHash(a)];
                case 2:
                    return u = v.sent(), s = {
                        kid: i,
                        subject: t,
                        name: r,
                        account_uuid: e.account.uuid,
                        token_info: __assign(__assign({}, n), {
                            signatureHash: u
                        })
                    }, [2, {
                        saJwt: a,
                        registerTokenRequest: s
                    }]
            }
        })
    })
};
exports.registerServiceAccountTokenRequest = registerServiceAccountTokenRequest;
var registerServiceAccountTokenSignature = function(e, t, r, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        var o, i;
        return __generator(this, function(c) {
            switch (c.label) {
                case 0:
                    return [4, model.tokenSignatureHash(n)];
                case 1:
                    return o = c.sent(), i = {
                        signature_hash: o
                    }, [2, api.registerServiceAccountTokenSignature(e.session, t, r, i)]
            }
        })
    })
};
exports.registerServiceAccountTokenSignature = registerServiceAccountTokenSignature;