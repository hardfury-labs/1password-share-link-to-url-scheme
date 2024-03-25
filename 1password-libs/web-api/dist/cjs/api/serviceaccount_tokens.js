"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
        void 0 === r && (r = n), Object.defineProperty(e, r, {
            enumerable: !0,
            get: function() {
                return t[n]
            }
        })
    } : function(e, t, n, r) {
        void 0 === r && (r = n), e[r] = t[n]
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
            for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && __createBinding(t, e, n);
        return __setModuleDefault(t, e), t
    },
    __awaiter = this && this.__awaiter || function(e, t, n, r) {
        return new(n || (n = Promise))(function(o, i) {
            function c(e) {
                try {
                    a(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function u(e) {
                try {
                    a(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                    e(t)
                })).then(c, u)
            }
            a((r = r.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var n, r, o, i, c = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
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
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; c;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
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
                                c.label++, r = i[1], i = [0];
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
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
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
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ServiceAccountToken = exports.VaultClaim = exports.registerServiceAccountTokenSignature = exports.revokeAllServiceAccountTokensForAccount = exports.revokeServiceAccountToken = exports.renameServiceAccountToken = exports.registerServiceAccountToken = void 0;
var t = __importStar(require("io-ts")),
    util_1 = require("../util"),
    registerServiceAccountToken = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(n) {
                return [2, e.post("/api/v2/serviceaccounts/token", t).then(util_1.unsafeDecodeAs(RegisterServiceAccountTokenResponse))]
            })
        })
    };
exports.registerServiceAccountToken = registerServiceAccountToken;
var renameServiceAccountToken = function(e, t, n, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var o, i;
        return __generator(this, function(c) {
            switch (c.label) {
                case 0:
                    return o = encodeURI(t), i = encodeURI(n), [4, e.patch("/api/v1/serviceaccounts/" + o + "/tokens/" + i, r)];
                case 1:
                    return c.sent(), [2]
            }
        })
    })
};
exports.renameServiceAccountToken = renameServiceAccountToken;
var revokeServiceAccountToken = function(e, t, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, o;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return r = encodeURI(t), o = encodeURI(n), [4, e.delete("/api/v1/serviceaccounts/" + r + "/tokens/" + o)];
                case 1:
                    return i.sent(), [2]
            }
        })
    })
};
exports.revokeServiceAccountToken = revokeServiceAccountToken;
var revokeAllServiceAccountTokensForAccount = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
                case 0:
                    return [4, e.delete("/api/v1/serviceaccounts/tokens")];
                case 1:
                    return t.sent(), [2]
            }
        })
    })
};
exports.revokeAllServiceAccountTokensForAccount = revokeAllServiceAccountTokensForAccount;
var registerServiceAccountTokenSignature = function(e, t, n, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var o, i;
        return __generator(this, function(c) {
            switch (c.label) {
                case 0:
                    return o = encodeURI(t), i = encodeURI(n), [4, e.put("/api/v1/serviceaccounts/" + o + "/tokens/" + i + "/signaturehash", r)];
                case 1:
                    return c.sent(), [2]
            }
        })
    })
};
exports.registerServiceAccountTokenSignature = registerServiceAccountTokenSignature, exports.VaultClaim = t.type({
    u: t.string,
    a: t.number
});
var TokenInfo = t.intersection([t.type({
    jti: t.string,
    issuer: t.string,
    audience: t.string,
    features: t.readonlyArray(t.string)
}), t.partial({
    expiry: t.string,
    vaults: t.readonlyArray(exports.VaultClaim),
    signatureHash: t.string
})]);
exports.ServiceAccountToken = t.intersection([t.type({
    name: t.string,
    state: t.string,
    signedBy: t.string,
    createdAt: t.string,
    tokenInfo: TokenInfo
}), t.partial({
    expiresAt: t.string
})]);
var RegisterServiceAccountTokenRequest = t.type({
        name: t.string,
        subject: t.string,
        account_uuid: t.string,
        token_info: t.intersection([TokenInfo, t.type({
            signatureHash: t.string
        })]),
        kid: t.string
    }),
    RegisterServiceAccountTokenResponse = t.readonly(t.type({
        id: t.string
    })),
    RenameServiceAccountTokenRequest = t.type({
        name: t.string
    }),
    RegisterServiceAccountTokenSignatureRequest = t.type({
        signature_hash: t.string
    });