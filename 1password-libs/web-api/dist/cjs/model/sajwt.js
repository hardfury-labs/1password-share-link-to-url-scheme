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
        return new(r || (r = Promise))(function(o, i) {
            function a(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function c(e) {
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
                })).then(a, c)
            }
            u((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, o, i, a = {
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
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                        switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
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
                                a.label++, n = i[1], i = [0];
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
                        i = t.call(e, a)
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
                }([i, c])
            }
        }
    },
    __rest = this && this.__rest || function(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
        }
        return r
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.tokenSignatureHash = exports.createServiceAccountJwt = exports.ServiceAccountJwtClaims = exports.ServiceAccountJwtPrivateClaims = exports.createServiceAccountTokenInfo = exports.TokenFeatures = exports.DEFAULT_ISSUER = void 0;
var TokenFeatures, t = __importStar(require("io-ts")),
    api = __importStar(require("../api")),
    util_1 = require("../util"),
    util = __importStar(require("../util")),
    crypto_v2_1 = require("./crypto_v2"),
    tokens_1 = require("./crypto_v2/tokens");
exports.DEFAULT_ISSUER = "com.1password.b5",
    function(e) {
        e.AccessVaults = "vaultaccess"
    }(TokenFeatures = exports.TokenFeatures || (exports.TokenFeatures = {}));
var createServiceAccountTokenInfo = function(e) {
    var t = e.audience,
        r = e.features,
        n = __rest(e, ["audience", "features"]),
        o = {
            audience: t,
            features: r,
            jti: util_1.generateUUID(),
            issuer: n.issuer || exports.DEFAULT_ISSUER,
            vaults: n.vaultAccess ? vaultAccessToClaim(n.vaultAccess) : void 0,
            expiry: n.expiry ? n.expiry.toISOString() : void 0
        };
    return validateTokenInfo(o), o
};
exports.createServiceAccountTokenInfo = createServiceAccountTokenInfo, exports.ServiceAccountJwtPrivateClaims = t.readonly(t.intersection([t.type({
    "1password.com/auuid": t.string,
    "1password.com/fts": t.readonlyArray(t.string)
}), t.partial({
    "1password.com/token": t.string,
    "1password.com/vts": t.readonlyArray(api.VaultClaim)
})]), "ServiceAccountJwtPrivateClaims"), exports.ServiceAccountJwtClaims = t.intersection([tokens_1.JwtStandardClaims, exports.ServiceAccountJwtPrivateClaims], "ServiceAccountJwtClaims");
var createServiceAccountJwt = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, r = e.signingKey,
            n = e.accountUuid,
            o = e.serviceAccountUuid,
            i = e.createTokenInfo,
            a = __rest(e, ["signingKey", "accountUuid", "serviceAccountUuid", "createTokenInfo"]);
        return __generator(this, function(e) {
            switch (e.label) {
                case 0:
                    if (!o) throw new Error("SAJWT subject claim not provided.");
                    return validateTokenInfo(i), t = {
                        "1password.com/auuid": n,
                        "1password.com/token": a.bearerToken,
                        "1password.com/fts": i.features,
                        "1password.com/vts": i.vaults,
                        aud: [i.audience],
                        sub: o,
                        exp: i.expiry ? new Date(i.expiry) : void 0,
                        iat: new Date,
                        nbf: a.notValidBefore,
                        iss: i.issuer || exports.DEFAULT_ISSUER,
                        jti: i.jti
                    }, [4, crypto_v2_1.createToken(r, t, exports.ServiceAccountJwtClaims)];
                case 1:
                    return [2, e.sent()]
            }
        })
    })
};
exports.createServiceAccountJwt = createServiceAccountJwt;
var validateTokenInfo = function(e) {
        var t, r;
        if (!e.audience) throw new Error("Audience claim is required.");
        if (0 === e.features.length) throw new Error("Token 'features' claim not provided");
        if ((null === (t = e.vaults) || void 0 === t ? void 0 : t.length) && (null === (r = e.vaults) || void 0 === r ? void 0 : r.length) > 0 && !e.features.includes(TokenFeatures.AccessVaults)) throw new Error("Feature " + TokenFeatures.AccessVaults + " is required if including Vault claims.")
    },
    vaultAccessToClaim = function(e) {
        return e.map(function(e) {
            return {
                u: e.vaultUuid,
                a: e.acl
            }
        })
    },
    tokenSignatureHash = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, r;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        if (!(t = e.split(".")[2])) throw new Error("corrupted token");
                        return [4, util.crypto.sha256(util.str2ab(t))];
                    case 1:
                        return r = n.sent(), [2, util.bytesToHex(r)]
                }
            })
        })
    };
exports.tokenSignatureHash = tokenSignatureHash;