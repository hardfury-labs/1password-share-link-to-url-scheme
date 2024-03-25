var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e
        }).apply(this, arguments)
    },
    __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(a, i) {
            function o(e) {
                try {
                    s(n.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function c(e) {
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
                })).then(o, c)
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
                }([i, c])
            }
        }
    },
    __values = this && this.__values || function(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            r = t && e[t],
            n = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && n >= e.length && (e = void 0), {
                    value: e && e[n++],
                    done: !e
                }
            }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    };
import {
    pick
} from "lodash-es";
import * as api from "../api";
import * as model from "../model";
import * as parser from "../parser";
import * as util from "../util";
import {
    debouncePromise
} from "../util/make_promise";
import {
    invalidateCache
} from "./context";
import {
    createGroupMembership
} from "./group_membership";
import * as cache from "./request_cache";
import {
    registerServiceAccountTokenRequest
} from "./serviceaccount_tokens";
import {
    prepProvisionUser
} from "./user";
var codeLocation = "action/serviceaccounts";
export var createServiceAccountPreflight = function(e, t) {
    return api.createServiceAccountPreflight(e.session, t)
};
var serviceAccountCache = cache.create();
export var prepServiceAccount = function(e, t, r, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        var a, i, o, c, s;
        return __generator(this, function(u) {
            switch (u.label) {
                case 0:
                    return [4, prepProvisionUser(e, t, r, n)];
                case 1:
                    if (a = u.sent(), i = a.user, o = a.userAuth, !i.masterKey || !i.masterKey.jwk) throw new Error("Missing master key");
                    if (!i.secretKey) throw new Error("Missing secret key");
                    return [4, i.encryptActiveKeysetWithMasterKey()];
                case 2:
                    return c = u.sent(), s = {
                        email: i.email,
                        muk: i.masterKey.jwk,
                        secretKey: model.SecretKey.asReadableString(i.secretKey),
                        srpX: o.srpX,
                        signInAddress: e.account && e.account.urlHost(e.config.server) || "",
                        userAuth: o.params
                    }, [2, {
                        user: i,
                        encKeyset: c,
                        creds: s
                    }]
            }
        })
    })
};
export var createServiceAccountV3 = function(e, t, r, n, a, i, o, c, s) {
    return __awaiter(void 0, void 0, void 0, function() {
        var u, l, v, p, f;
        return __generator(this, function(h) {
            switch (h.label) {
                case 0:
                    return c ? [4, registerServiceAccountTokenRequest(e, c.serviceAccountUuid, c.tokenName, c.tokenInfo, c.bearerToken, c.kid, c.signingKey)] : [3, 2];
                case 1:
                    if (f = h.sent(), u = f.saJwt, (l = f.registerTokenRequest).subject !== n.uuid) throw new Error("Token subject must match Service Account UUID from preflight response.");
                    h.label = 2;
                case 2:
                    return v = r.getCredentials(), p = {
                        access: o,
                        serviceAccountType: i,
                        keyset: t,
                        preflightToken: n.token,
                        userAuth: model.Auth.getForUpload(a),
                        userRegistration: {
                            uuid: n.uuid,
                            email: n.email,
                            name: r.name,
                            avatar: s,
                            accountKeyFormat: v.secretKey.format,
                            accountKeyUuid: v.secretKey.id,
                            newsletterPrefs: 0,
                            language: r.language
                        },
                        registerSAToken: l
                    }, [4, api.createServiceAccountV3(e.session, p)];
                case 3:
                    return [2, {
                        person: h.sent(),
                        saJwt: u
                    }]
            }
        })
    })
};
export var getIntegrations = function(e) {
    return api.getIntegrations(e.session)
};
export var getServiceAccounts = function(e) {
    return api.getServiceAccounts(e.session)
};
export var getServiceAccountGroupMemberships = function(e, t, r, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        var a, i, o, c, s, u, l, v;
        return __generator(this, function(p) {
            switch (p.label) {
                case 0:
                    n = n || getDefaultGrpMembershipOptions(), a = [], p.label = 1;
                case 1:
                    p.trys.push([1, 6, 7, 8]), i = __values(r), o = i.next(), p.label = 2;
                case 2:
                    return o.done ? [3, 5] : (c = o.value, [4, createGroupMembership(e, t, c, n)]);
                case 3:
                    s = p.sent(), a.push(s), p.label = 4;
                case 4:
                    return o = i.next(), [3, 2];
                case 5:
                    return [3, 8];
                case 6:
                    return u = p.sent(), l = {
                        error: u
                    }, [3, 8];
                case 7:
                    try {
                        o && !o.done && (v = i.return) && v.call(i)
                    } finally {
                        if (l) throw l.error
                    }
                    return [7];
                case 8:
                    return [2, a]
            }
        })
    })
};
export var getServiceAccountVaultAccesses = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n, a, i, o, c, s, u, l, v, p;
        return __generator(this, function(f) {
            switch (f.label) {
                case 0:
                    n = __assign(__assign({}, e), {
                        accessorType: "user"
                    }), r = r || getDefaultVaultAccessOptions(), a = [], f.label = 1;
                case 1:
                    f.trys.push([1, 6, 7, 8]), i = __values(t), o = i.next(), f.label = 2;
                case 2:
                    return o.done ? [3, 5] : (c = o.value, [4, model.VaultAccess.generate(c, n, r)]);
                case 3:
                    s = f.sent(), u = parser.vaultAccessToAPI(s), a.push(u), f.label = 4;
                case 4:
                    return o = i.next(), [3, 2];
                case 5:
                    return [3, 8];
                case 6:
                    return l = f.sent(), v = {
                        error: l
                    }, [3, 8];
                case 7:
                    try {
                        o && !o.done && (p = i.return) && p.call(i)
                    } finally {
                        if (v) throw v.error
                    }
                    return [7];
                case 8:
                    return [2, a]
            }
        })
    })
};
var defaultGetServiceAccountOptions = {
    attrs: model.ServiceAccountUser.Attr.None,
    mustReload: !1
};
export var getServiceAccount = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n, a, i, o;
        return __generator(this, function(c) {
            return n = __assign(__assign({}, defaultGetServiceAccountOptions), r), a = n.attrs, i = n.mustReload, (o = i ? void 0 : serviceAccountCache.getEntry(e.id, t, {
                attrMask: a
            })) && o.hasAttrMask(a) ? [2, o] : [2, debouncePromise([codeLocation, "getServiceAccount", e.id, t, a], function() {
                return __awaiter(void 0, void 0, void 0, function() {
                    var r, n, i;
                    return __generator(this, function(c) {
                        switch (c.label) {
                            case 0:
                                return [4, api.getServiceAccount(e.session, t, model.ServiceAccountUser.translateAttrMaskNames(a))];
                            case 1:
                                return r = c.sent(), [4, parser.parseServiceAccount(r, a, o)];
                            case 2:
                                return n = c.sent(), serviceAccountCache = serviceAccountCache.withEntries(e.id, ((i = {})[t] = n, i), {
                                    attrMask: a,
                                    timestamp: Date.now()
                                }), [2, n]
                        }
                    })
                })
            })]
        })
    })
};
var getDefaultGrpMembershipOptions = function() {
        return {
            role: api.GroupMembership.Role.Member,
            state: api.GroupMembership.State.Active
        }
    },
    getDefaultVaultAccessOptions = function() {
        return {
            acl: model.vaultACL.RWE,
            leaseTimeout: 0
        }
    };
export var changeServiceAccountName = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n;
        return __generator(this, function(a) {
            switch (a.label) {
                case 0:
                    return n = __assign(__assign({
                        uuid: t.uuid
                    }, pick(t, ["type", "attrVersion", "state", "email"])), {
                        name: r
                    }), [4, api.changeUserName(e.session, n)];
                case 1:
                    return a.sent(), invalidateCache(e), e.nc.emit(util.notification.UsersChanged), [2]
            }
        })
    })
};
export var changeServiceAccountAvatar = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n;
        return __generator(this, function(a) {
            switch (a.label) {
                case 0:
                    return n = __assign(__assign({
                        uuid: t.uuid
                    }, pick(t, ["type", "attrVersion", "state", "email"])), {
                        imageId: r
                    }), [4, api.changeUserAvatar(e.session, n)];
                case 1:
                    return a.sent(), invalidateCache(e), e.nc.emit(util.notification.UsersChanged), [2]
            }
        })
    })
};
export var clearServiceAccountCache = function() {
    serviceAccountCache = cache.create()
};
export var clearServiceAccountCacheForContext = function(e) {
    serviceAccountCache = serviceAccountCache.withoutContext(e.id)
};