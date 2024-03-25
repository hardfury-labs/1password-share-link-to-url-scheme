"use strict";
var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var t, r = 1, c = arguments.length; r < c; r++)
                for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        }).apply(this, arguments)
    },
    __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, c) {
        void 0 === c && (c = r), Object.defineProperty(e, c, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, c) {
        void 0 === c && (c = r), e[c] = t[r]
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
    __awaiter = this && this.__awaiter || function(e, t, r, c) {
        return new(r || (r = Promise))(function(n, i) {
            function a(e) {
                try {
                    s(c.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function o(e) {
                try {
                    s(c.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                var t;
                e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(a, o)
            }
            s((c = c.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, c, n, i, a = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: o(0),
            throw: o(1),
            return: o(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function o(i) {
            return function(o) {
                return function(i) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (r = 1, c && (n = 2 & i[0] ? c.return : i[0] ? c.throw || ((n = c.return) && n.call(c), 0) : c.next) && !(n = n.call(c, i[1])).done) return n;
                        switch (c = 0, n && (i = [2 & i[0], n.value]), i[0]) {
                            case 0:
                            case 1:
                                n = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, c = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < n[1]) {
                                    a.label = n[1], n = i;
                                    break
                                }
                                if (n && a.label < n[2]) {
                                    a.label = n[2], a.ops.push(i);
                                    break
                                }
                                n[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = t.call(e, a)
                    } catch (e) {
                        i = [6, e], c = 0
                    } finally {
                        r = n = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, o])
            }
        }
    },
    __values = this && this.__values || function(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            r = t && e[t],
            c = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && c >= e.length && (e = void 0), {
                    value: e && e[c++],
                    done: !e
                }
            }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.clearServiceAccountCacheForContext = exports.clearServiceAccountCache = exports.changeServiceAccountAvatar = exports.changeServiceAccountName = exports.getServiceAccount = exports.getServiceAccountVaultAccesses = exports.getServiceAccountGroupMemberships = exports.getServiceAccounts = exports.getIntegrations = exports.createServiceAccountV3 = exports.prepServiceAccount = exports.createServiceAccountPreflight = void 0;
var lodash_es_1 = require("lodash-es"),
    api = __importStar(require("../api")),
    model = __importStar(require("../model")),
    parser = __importStar(require("../parser")),
    util = __importStar(require("../util")),
    make_promise_1 = require("../util/make_promise"),
    context_1 = require("./context"),
    group_membership_1 = require("./group_membership"),
    cache = __importStar(require("./request_cache")),
    serviceaccount_tokens_1 = require("./serviceaccount_tokens"),
    user_1 = require("./user"),
    codeLocation = "action/serviceaccounts",
    createServiceAccountPreflight = function(e, t) {
        return api.createServiceAccountPreflight(e.session, t)
    };
exports.createServiceAccountPreflight = createServiceAccountPreflight;
var serviceAccountCache = cache.create(),
    prepServiceAccount = function(e, t, r, c) {
        return __awaiter(void 0, void 0, void 0, function() {
            var n, i, a, o, s;
            return __generator(this, function(u) {
                switch (u.label) {
                    case 0:
                        return [4, user_1.prepProvisionUser(e, t, r, c)];
                    case 1:
                        if (n = u.sent(), i = n.user, a = n.userAuth, !i.masterKey || !i.masterKey.jwk) throw new Error("Missing master key");
                        if (!i.secretKey) throw new Error("Missing secret key");
                        return [4, i.encryptActiveKeysetWithMasterKey()];
                    case 2:
                        return o = u.sent(), s = {
                            email: i.email,
                            muk: i.masterKey.jwk,
                            secretKey: model.SecretKey.asReadableString(i.secretKey),
                            srpX: a.srpX,
                            signInAddress: e.account && e.account.urlHost(e.config.server) || "",
                            userAuth: a.params
                        }, [2, {
                            user: i,
                            encKeyset: o,
                            creds: s
                        }]
                }
            })
        })
    };
exports.prepServiceAccount = prepServiceAccount;
var createServiceAccountV3 = function(e, t, r, c, n, i, a, o, s) {
    return __awaiter(void 0, void 0, void 0, function() {
        var u, l, v, p, _;
        return __generator(this, function(h) {
            switch (h.label) {
                case 0:
                    return o ? [4, serviceaccount_tokens_1.registerServiceAccountTokenRequest(e, o.serviceAccountUuid, o.tokenName, o.tokenInfo, o.bearerToken, o.kid, o.signingKey)] : [3, 2];
                case 1:
                    if (_ = h.sent(), u = _.saJwt, (l = _.registerTokenRequest).subject !== c.uuid) throw new Error("Token subject must match Service Account UUID from preflight response.");
                    h.label = 2;
                case 2:
                    return v = r.getCredentials(), p = {
                        access: a,
                        serviceAccountType: i,
                        keyset: t,
                        preflightToken: c.token,
                        userAuth: model.Auth.getForUpload(n),
                        userRegistration: {
                            uuid: c.uuid,
                            email: c.email,
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
exports.createServiceAccountV3 = createServiceAccountV3;
var getIntegrations = function(e) {
    return api.getIntegrations(e.session)
};
exports.getIntegrations = getIntegrations;
var getServiceAccounts = function(e) {
    return api.getServiceAccounts(e.session)
};
exports.getServiceAccounts = getServiceAccounts;
var getServiceAccountGroupMemberships = function(e, t, r, c) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n, i, a, o, s, u, l, v;
        return __generator(this, function(p) {
            switch (p.label) {
                case 0:
                    c = c || getDefaultGrpMembershipOptions(), n = [], p.label = 1;
                case 1:
                    p.trys.push([1, 6, 7, 8]), i = __values(r), a = i.next(), p.label = 2;
                case 2:
                    return a.done ? [3, 5] : (o = a.value, [4, group_membership_1.createGroupMembership(e, t, o, c)]);
                case 3:
                    s = p.sent(), n.push(s), p.label = 4;
                case 4:
                    return a = i.next(), [3, 2];
                case 5:
                    return [3, 8];
                case 6:
                    return u = p.sent(), l = {
                        error: u
                    }, [3, 8];
                case 7:
                    try {
                        a && !a.done && (v = i.return) && v.call(i)
                    } finally {
                        if (l) throw l.error
                    }
                    return [7];
                case 8:
                    return [2, n]
            }
        })
    })
};
exports.getServiceAccountGroupMemberships = getServiceAccountGroupMemberships;
var getServiceAccountVaultAccesses = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var c, n, i, a, o, s, u, l, v, p;
        return __generator(this, function(_) {
            switch (_.label) {
                case 0:
                    c = __assign(__assign({}, e), {
                        accessorType: "user"
                    }), r = r || getDefaultVaultAccessOptions(), n = [], _.label = 1;
                case 1:
                    _.trys.push([1, 6, 7, 8]), i = __values(t), a = i.next(), _.label = 2;
                case 2:
                    return a.done ? [3, 5] : (o = a.value, [4, model.VaultAccess.generate(o, c, r)]);
                case 3:
                    s = _.sent(), u = parser.vaultAccessToAPI(s), n.push(u), _.label = 4;
                case 4:
                    return a = i.next(), [3, 2];
                case 5:
                    return [3, 8];
                case 6:
                    return l = _.sent(), v = {
                        error: l
                    }, [3, 8];
                case 7:
                    try {
                        a && !a.done && (p = i.return) && p.call(i)
                    } finally {
                        if (v) throw v.error
                    }
                    return [7];
                case 8:
                    return [2, n]
            }
        })
    })
};
exports.getServiceAccountVaultAccesses = getServiceAccountVaultAccesses;
var defaultGetServiceAccountOptions = {
        attrs: model.ServiceAccountUser.Attr.None,
        mustReload: !1
    },
    getServiceAccount = function(e, t, r) {
        return __awaiter(void 0, void 0, void 0, function() {
            var c, n, i, a;
            return __generator(this, function(o) {
                return c = __assign(__assign({}, defaultGetServiceAccountOptions), r), n = c.attrs, i = c.mustReload, (a = i ? void 0 : serviceAccountCache.getEntry(e.id, t, {
                    attrMask: n
                })) && a.hasAttrMask(n) ? [2, a] : [2, make_promise_1.debouncePromise([codeLocation, "getServiceAccount", e.id, t, n], function() {
                    return __awaiter(void 0, void 0, void 0, function() {
                        var r, c, i;
                        return __generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, api.getServiceAccount(e.session, t, model.ServiceAccountUser.translateAttrMaskNames(n))];
                                case 1:
                                    return r = o.sent(), [4, parser.parseServiceAccount(r, n, a)];
                                case 2:
                                    return c = o.sent(), serviceAccountCache = serviceAccountCache.withEntries(e.id, ((i = {})[t] = c, i), {
                                        attrMask: n,
                                        timestamp: Date.now()
                                    }), [2, c]
                            }
                        })
                    })
                })]
            })
        })
    };
exports.getServiceAccount = getServiceAccount;
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
    },
    changeServiceAccountName = function(e, t, r) {
        return __awaiter(void 0, void 0, void 0, function() {
            var c;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return c = __assign(__assign({
                            uuid: t.uuid
                        }, lodash_es_1.pick(t, ["type", "attrVersion", "state", "email"])), {
                            name: r
                        }), [4, api.changeUserName(e.session, c)];
                    case 1:
                        return n.sent(), context_1.invalidateCache(e), e.nc.emit(util.notification.UsersChanged), [2]
                }
            })
        })
    };
exports.changeServiceAccountName = changeServiceAccountName;
var changeServiceAccountAvatar = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var c;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return c = __assign(__assign({
                        uuid: t.uuid
                    }, lodash_es_1.pick(t, ["type", "attrVersion", "state", "email"])), {
                        imageId: r
                    }), [4, api.changeUserAvatar(e.session, c)];
                case 1:
                    return n.sent(), context_1.invalidateCache(e), e.nc.emit(util.notification.UsersChanged), [2]
            }
        })
    })
};
exports.changeServiceAccountAvatar = changeServiceAccountAvatar;
var clearServiceAccountCache = function() {
    serviceAccountCache = cache.create()
};
exports.clearServiceAccountCache = clearServiceAccountCache;
var clearServiceAccountCacheForContext = function(e) {
    serviceAccountCache = serviceAccountCache.withoutContext(e.id)
};
exports.clearServiceAccountCacheForContext = clearServiceAccountCacheForContext;