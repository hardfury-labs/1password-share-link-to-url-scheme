var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var n, t = 1, r = arguments.length; t < r; t++)
                for (var o in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            return e
        }).apply(this, arguments)
    },
    __awaiter = this && this.__awaiter || function(e, n, t, r) {
        return new(t || (t = Promise))(function(o, i) {
            function a(e) {
                try {
                    u(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function c(e) {
                try {
                    u(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function u(e) {
                var n;
                e.done ? o(e.value) : (n = e.value, n instanceof t ? n : new t(function(e) {
                    e(n)
                })).then(a, c)
            }
            u((r = r.apply(e, n || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, n) {
        var t, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function c(i) {
            return function(c) {
                return function(i) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = n.call(e, a)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        t = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, c])
            }
        }
    };
import * as api from "../api";
import * as model from "../model";
export var revokeServiceAccountToken = function(e, n, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            return [2, api.revokeServiceAccountToken(e.session, n, t)]
        })
    })
};
export var renameServiceAccountToken = function(e, n, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var o;
        return __generator(this, function(i) {
            return o = {
                name: r
            }, [2, api.renameServiceAccountToken(e.session, n, t, o)]
        })
    })
};
export var revokeAllServiceAccountTokensForAccount = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            return [2, api.revokeAllServiceAccountTokensForAccount(e.session)]
        })
    })
};
export var createConnectToken = function(e, n, t, r, o) {
    return __awaiter(void 0, void 0, void 0, function() {
        var i, a, c;
        return __generator(this, function(u) {
            switch (u.label) {
                case 0:
                    return [4, registerServiceAccountTokenRequest(e, n, r, o, t.token, t.sPriKey.kid, t.sPriKey)];
                case 1:
                    return i = u.sent(), a = i.saJwt, c = i.registerTokenRequest, [4, api.registerServiceAccountToken(e.session, c)];
                case 2:
                    return u.sent(), [2, a]
            }
        })
    })
};
export var createDataStreamingToken = function(e, n, t, r, o) {
    return __awaiter(void 0, void 0, void 0, function() {
        var i, a, c;
        return __generator(this, function(u) {
            switch (u.label) {
                case 0:
                    return [4, registerServiceAccountTokenRequest(e, n, r, o, void 0, t.signingKey.kid, t.signingKey)];
                case 1:
                    return i = u.sent(), a = i.saJwt, c = i.registerTokenRequest, [4, api.registerServiceAccountToken(e.session, c)];
                case 2:
                    return u.sent(), [2, a]
            }
        })
    })
};
export var registerServiceAccountTokenRequest = function(e, n, t, r, o, i, a) {
    return __awaiter(void 0, void 0, void 0, function() {
        var c, u, s;
        return __generator(this, function(v) {
            switch (v.label) {
                case 0:
                    if (!e.account) throw new Error("Cannot register token without Account information");
                    return [4, model.createServiceAccountJwt({
                        signingKey: a,
                        accountUuid: e.account.uuid,
                        serviceAccountUuid: n,
                        createTokenInfo: r,
                        bearerToken: o
                    })];
                case 1:
                    return c = v.sent(), [4, model.tokenSignatureHash(c)];
                case 2:
                    return u = v.sent(), s = {
                        kid: i,
                        subject: n,
                        name: t,
                        account_uuid: e.account.uuid,
                        token_info: __assign(__assign({}, r), {
                            signatureHash: u
                        })
                    }, [2, {
                        saJwt: c,
                        registerTokenRequest: s
                    }]
            }
        })
    })
};
export var registerServiceAccountTokenSignature = function(e, n, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var o, i;
        return __generator(this, function(a) {
            switch (a.label) {
                case 0:
                    return [4, model.tokenSignatureHash(r)];
                case 1:
                    return o = a.sent(), i = {
                        signature_hash: o
                    }, [2, api.registerServiceAccountTokenSignature(e.session, n, t, i)]
            }
        })
    })
};