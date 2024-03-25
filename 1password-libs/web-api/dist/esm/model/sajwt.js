var __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(o, a) {
            function i(e) {
                try {
                    s(n.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function c(e) {
                try {
                    s(n.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function s(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(i, c)
            }
            s((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, o, a, i = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: c(0),
            throw: c(1),
            return: c(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function c(a) {
            return function(c) {
                return function(a) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                        switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                            case 0:
                            case 1:
                                o = a;
                                break;
                            case 4:
                                return i.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, n = a[1], a = [0];
                                continue;
                            case 7:
                                a = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                    i.label = a[1];
                                    break
                                }
                                if (6 === a[0] && i.label < o[1]) {
                                    i.label = o[1], o = a;
                                    break
                                }
                                if (o && i.label < o[2]) {
                                    i.label = o[2], i.ops.push(a);
                                    break
                                }
                                o[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        a = t.call(e, i)
                    } catch (e) {
                        a = [6, e], n = 0
                    } finally {
                        r = o = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, c])
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
import * as t from "io-ts";
import * as api from "../api";
import {
    generateUUID
} from "../util";
import * as util from "../util";
import {
    createToken
} from "./crypto_v2";
import {
    JwtStandardClaims
} from "./crypto_v2/tokens";
export var DEFAULT_ISSUER = "com.1password.b5";
export var TokenFeatures;
! function(e) {
    e.AccessVaults = "vaultaccess"
}(TokenFeatures || (TokenFeatures = {}));
export var createServiceAccountTokenInfo = function(e) {
    var t = e.audience,
        r = e.features,
        n = __rest(e, ["audience", "features"]),
        o = {
            audience: t,
            features: r,
            jti: generateUUID(),
            issuer: n.issuer || DEFAULT_ISSUER,
            vaults: n.vaultAccess ? vaultAccessToClaim(n.vaultAccess) : void 0,
            expiry: n.expiry ? n.expiry.toISOString() : void 0
        };
    return validateTokenInfo(o), o
};
export var ServiceAccountJwtPrivateClaims = t.readonly(t.intersection([t.type({
    "1password.com/auuid": t.string,
    "1password.com/fts": t.readonlyArray(t.string)
}), t.partial({
    "1password.com/token": t.string,
    "1password.com/vts": t.readonlyArray(api.VaultClaim)
})]), "ServiceAccountJwtPrivateClaims");
export var ServiceAccountJwtClaims = t.intersection([JwtStandardClaims, ServiceAccountJwtPrivateClaims], "ServiceAccountJwtClaims");
export var createServiceAccountJwt = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, r = e.signingKey,
            n = e.accountUuid,
            o = e.serviceAccountUuid,
            a = e.createTokenInfo,
            i = __rest(e, ["signingKey", "accountUuid", "serviceAccountUuid", "createTokenInfo"]);
        return __generator(this, function(e) {
            switch (e.label) {
                case 0:
                    if (!o) throw new Error("SAJWT subject claim not provided.");
                    return validateTokenInfo(a), t = {
                        "1password.com/auuid": n,
                        "1password.com/token": i.bearerToken,
                        "1password.com/fts": a.features,
                        "1password.com/vts": a.vaults,
                        aud: [a.audience],
                        sub: o,
                        exp: a.expiry ? new Date(a.expiry) : void 0,
                        iat: new Date,
                        nbf: i.notValidBefore,
                        iss: a.issuer || DEFAULT_ISSUER,
                        jti: a.jti
                    }, [4, createToken(r, t, ServiceAccountJwtClaims)];
                case 1:
                    return [2, e.sent()]
            }
        })
    })
};
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
    };
export var tokenSignatureHash = function(e) {
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