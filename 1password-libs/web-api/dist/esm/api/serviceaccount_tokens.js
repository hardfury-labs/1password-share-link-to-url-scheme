var __awaiter = this && this.__awaiter || function(e, t, n, r) {
        return new(n || (n = Promise))(function(i, o) {
            function a(e) {
                try {
                    s(r.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                try {
                    s(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function s(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                    e(t)
                })).then(a, c)
            }
            s((r = r.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var n, r, i, o, a = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: c(0),
            throw: c(1),
            return: c(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function c(o) {
            return function(c) {
                return function(o) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                        switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return a.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = o[1], o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < i[1]) {
                                    a.label = i[1], i = o;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(o);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        o = t.call(e, a)
                    } catch (e) {
                        o = [6, e], r = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, c])
            }
        }
    };
import * as t from "io-ts";
import {
    unsafeDecodeAs
} from "../util";
export var registerServiceAccountToken = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            return [2, e.post("/api/v2/serviceaccounts/token", t).then(unsafeDecodeAs(RegisterServiceAccountTokenResponse))]
        })
    })
};
export var renameServiceAccountToken = function(e, t, n, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var i, o;
        return __generator(this, function(a) {
            switch (a.label) {
                case 0:
                    return i = encodeURI(t), o = encodeURI(n), [4, e.patch("/api/v1/serviceaccounts/" + i + "/tokens/" + o, r)];
                case 1:
                    return a.sent(), [2]
            }
        })
    })
};
export var revokeServiceAccountToken = function(e, t, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, i;
        return __generator(this, function(o) {
            switch (o.label) {
                case 0:
                    return r = encodeURI(t), i = encodeURI(n), [4, e.delete("/api/v1/serviceaccounts/" + r + "/tokens/" + i)];
                case 1:
                    return o.sent(), [2]
            }
        })
    })
};
export var revokeAllServiceAccountTokensForAccount = function(e) {
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
export var registerServiceAccountTokenSignature = function(e, t, n, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var i, o;
        return __generator(this, function(a) {
            switch (a.label) {
                case 0:
                    return i = encodeURI(t), o = encodeURI(n), [4, e.put("/api/v1/serviceaccounts/" + i + "/tokens/" + o + "/signaturehash", r)];
                case 1:
                    return a.sent(), [2]
            }
        })
    })
};
export var VaultClaim = t.type({
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
    vaults: t.readonlyArray(VaultClaim),
    signatureHash: t.string
})]);
export var ServiceAccountToken = t.intersection([t.type({
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