var _a, __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var t, r = 1, a = arguments.length; r < a; r++)
                for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        }).apply(this, arguments)
    },
    __awaiter = this && this.__awaiter || function(e, t, r, a) {
        return new(r || (r = Promise))(function(n, i) {
            function o(e) {
                try {
                    s(a.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function u(e) {
                try {
                    s(a.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                var t;
                e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(o, u)
            }
            s((a = a.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, a, n, i, o = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
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
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (r = 1, a && (n = 2 & i[0] ? a.return : i[0] ? a.throw || ((n = a.return) && n.call(a), 0) : a.next) && !(n = n.call(a, i[1])).done) return n;
                        switch (a = 0, n && (i = [2 & i[0], n.value]), i[0]) {
                            case 0:
                            case 1:
                                n = i;
                                break;
                            case 4:
                                return o.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, a = i[1], i = [0];
                                continue;
                            case 7:
                                i = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
                                    o.label = i[1];
                                    break
                                }
                                if (6 === i[0] && o.label < n[1]) {
                                    o.label = n[1], n = i;
                                    break
                                }
                                if (n && o.label < n[2]) {
                                    o.label = n[2], o.ops.push(i);
                                    break
                                }
                                n[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        i = t.call(e, o)
                    } catch (e) {
                        i = [6, e], a = 0
                    } finally {
                        r = n = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    },
    __read = this && this.__read || function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var a, n, i = r.call(e),
            o = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(a = i.next()).done;) o.push(a.value)
        } catch (e) {
            n = {
                error: e
            }
        } finally {
            try {
                a && !a.done && (r = i.return) && r.call(i)
            } finally {
                if (n) throw n.error
            }
        }
        return o
    },
    __spread = this && this.__spread || function() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(__read(arguments[t]));
        return e
    };
import {
    keyBy,
    pick
} from "lodash-es";
import * as api from "../api";
import {
    DateFilterDirection
} from "../api/util";
import {
    DefaultByCreationParams,
    getDateForVaultsFilter
} from "../api/vault";
import * as model from "../model";
import * as parser from "../parser";
import * as util from "../util";
import {
    debouncePromise,
    makePromise as mp
} from "../util/make_promise";
import {
    invalidateCache
} from "./context";
import {
    getGroup
} from "./group";
import * as cache from "./request_cache";
var codeLocation = "action/vault",
    makePromise = mp(codeLocation),
    defaultGetVaultOptions = {
        attrs: model.Vault.Attr.None,
        mustReload: !1
    },
    defaultGetVaultsOptions = {
        mustReload: !1,
        withAccessorPreviews: !1
    },
    vaultCache = cache.create(),
    vaultWithPreviewsCache = cache.create();
export var getVaultsV2 = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, a, n, i, o, u;
        return __generator(this, function(s) {
            switch (s.label) {
                case 0:
                    return r = t.hasClientAccess, a = t.permissions, n = t.types, i = a && model.BitSet.includes(a, model.vaultACL.ReadItem), o = pick(__assign(__assign(__assign({}, defaultGetVaultOptions), t), {
                        permission: i ? "read" : void 0
                    }), "user", "withAccessorPreviews", "group", "permission"), [4, debouncePromise([codeLocation, "getVaultsV2", e.id, JSON.stringify(o)], function() {
                        return __awaiter(void 0, void 0, void 0, function() {
                            var t;
                            return __generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, api.getVaults(e.session, o)];
                                    case 1:
                                        return t = r.sent(), [4, parser.parseVaults(e, t)];
                                    case 2:
                                        return [2, r.sent()]
                                }
                            })
                        })
                    }, t.cacheAllowanceMs)];
                case 1:
                    return u = s.sent(), [2, u.filter(function(e) {
                        return (!r || e.hasClientAccess(model.VaultClientAccess.Web)) && (!n || n.includes(e.type)) && (!a || model.Vault.activeUserHasAcl(e, a))
                    })]
            }
        })
    })
};
export {
    DefaultByCreationParams,
    DateFilterDirection,
    getDateForVaultsFilter
};
export var getVaultsByCreation = function(e, t, r, a) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            return [2, debouncePromise([codeLocation, "getVaultsV2", e.id, JSON.stringify(__assign(__assign({}, a), {
                date: t,
                direction: r
            }))], function() {
                return __awaiter(void 0, void 0, void 0, function() {
                    var n, i, o, u;
                    return __generator(this, function(s) {
                        switch (s.label) {
                            case 0:
                                return [4, api.getVaultsByCreation(e.session, t, r, a || {})];
                            case 1:
                                return n = s.sent(), i = n.vaults, o = n.hasMoreData, [4, parser.parseVaults(e, i)];
                            case 2:
                                return u = s.sent(), [2, {
                                    hasMoreData: o,
                                    vaults: u
                                }]
                        }
                    })
                })
            })]
        })
    })
};
export var getVaults = function(e, t) {
    return makePromise("getVaults", function() {
        var r = __assign(__assign({}, defaultGetVaultsOptions), t),
            a = r.mustReload,
            n = r.withAccessorPreviews;
        if (!a) {
            var i = n ? vaultWithPreviewsCache.getAllEntries(e.id) : vaultCache.getAllEntries(e.id) || vaultWithPreviewsCache.getAllEntries(e.id);
            if (i) return i
        }
        return debouncePromise([codeLocation, "getVaults", e.id], function() {
            return api.getVaults(e.session, {
                withAccessorPreviews: n
            }).then(function(t) {
                return Promise.all([parser.parseVaults(e, t), Date.now()])
            }).then(function(t) {
                var r = __read(t, 2),
                    a = r[0],
                    i = r[1],
                    o = keyBy(a, "uuid");
                return n ? vaultWithPreviewsCache = vaultWithPreviewsCache.withOnlyEntries(e.id, o, {
                    timestamp: i
                }) : vaultCache = vaultCache.withOnlyEntries(e.id, o, {
                    timestamp: i
                }), a
            })
        })
    })
};
export var getVault = function(e, t, r) {
    return makePromise("getVault", function() {
        var a = util.getValidVaultUuid(t);
        if (!a) throw new Error("Invalid vault reference");
        var n = __assign(__assign({}, defaultGetVaultOptions), r),
            i = n.attrs,
            o = n.mustReload ? void 0 : vaultCache.getEntry(e.id, a, {
                attrMask: i
            });
        return o && o.hasAttrMask(i) ? o : debouncePromise([codeLocation, "getVault", e.id, a], function() {
            return api.getVault(e.session, a, i).then(function(t) {
                return Promise.all([parser.parseVault(e, t, i, o), Date.now()])
            }).then(function(t) {
                var r, n = __read(t, 2),
                    o = n[0],
                    u = n[1];
                return vaultCache = vaultCache.withEntries(e.id, ((r = {})[a] = o, r), {
                    attrMask: i,
                    timestamp: u
                }), o
            })
        })
    })
};
var specialVaultCache = cache.create();
export var getSpecialVault = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var a, n, i, o, u;
        return __generator(this, function(s) {
            switch (s.label) {
                case 0:
                    if (!(a = t === model.Vault.TypePersonal ? api.getPersonalVault : t === model.Vault.TypeEveryone ? api.getEveryoneVault : t === model.Vault.TypeSystem ? api.getSystemVault : t === model.Vault.TypeGeneratedPasswords ? api.getGeneratedPasswordsVault : void 0)) throw new Error("Unsupported vault type.");
                    return r && r.mustReload || !(n = specialVaultCache.getEntry(e.id, t)) ? [4, a(e.session)] : [2, n];
                case 1:
                    return (i = s.sent()) ? [4, parser.parseVault(e, i)] : [2, void 0];
                case 2:
                    return o = s.sent(), specialVaultCache = specialVaultCache.withEntries(e.id, ((u = {})[t] = o, u)), [2, o]
            }
        })
    })
};
export var getEveryoneVault = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            return [2, getSpecialVault(e, model.Vault.TypeEveryone, t)]
        })
    })
};
export var getPersonalVault = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            return [2, getSpecialVault(e, model.Vault.TypePersonal, t)]
        })
    })
};
export var getVaultsForAccountSplitting = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [2, debouncePromise([codeLocation, "getVaultsForAccountSplitting", e.id], function() {
                return __awaiter(void 0, void 0, void 0, function() {
                    var t;
                    return __generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, api.getVaultsForAccountSplitting(e.session)];
                            case 1:
                                return t = r.sent(), [2, parser.parseVaults(e, t)]
                        }
                    })
                })
            })]
        })
    })
};
export var getPersonalVaultOnlyIfCached = function(e) {
    return specialVaultCache.getEntry(e.id, model.Vault.TypePersonal)
};
export var getSystemVault = function(e) {
    return getSpecialVault(e, model.Vault.TypeSystem)
};
export var createSystemVault = function(e) {
    return makePromise("createSystemVault", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, r, a, n, i, o;
            return __generator(this, function(u) {
                switch (u.label) {
                    case 0:
                        if (!e.user) throw new Error("Missing user");
                        return [4, getCreateVaultPreflight(e, model.Vault.TypeSystem)];
                    case 1:
                        return t = u.sent().mandatoryGroupUuids, [4, (r = new model.Vault({
                            desc: model.Vault.DefaultDescMarker,
                            name: "System",
                            type: model.Vault.TypeSystem
                        })).generateNewKey()];
                    case 2:
                        return u.sent(), [4, generateVaultAccessesInternalVaults(e, r, t)];
                    case 3:
                        return a = u.sent(), [4, sendVault(e, r, a)];
                    case 4:
                        return n = u.sent().uuid, [4, getVault(e, n, {
                            attrs: model.Vault.Attr.All,
                            mustReload: !0
                        })];
                    case 5:
                        return i = u.sent(), specialVaultCache = specialVaultCache.withEntries(e.id, ((o = {})[model.Vault.TypeSystem] = i, o)), [2, i]
                }
            })
        })
    })
};
export var getGeneratedPasswordsVault = function(e) {
    return getSpecialVault(e, model.Vault.TypeGeneratedPasswords)
};
export var createGeneratedPasswordsVault = function(e) {
    return makePromise("createGeneratedPasswordsVault", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, r, a, n, i;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        if (!e.user) throw new Error("Missing user");
                        return [4, getCreateVaultPreflight(e, model.Vault.TypeGeneratedPasswords)];
                    case 1:
                        return t = o.sent().mandatoryGroupUuids, [4, (r = new model.Vault({
                            desc: model.Vault.DefaultDescMarker,
                            name: "Generated Passwords",
                            type: model.Vault.TypeGeneratedPasswords
                        })).generateNewKey()];
                    case 2:
                        return o.sent(), [4, generateVaultAccessesInternalVaults(e, r, t)];
                    case 3:
                        return a = o.sent(), [4, sendVault(e, r, a)];
                    case 4:
                        return n = o.sent(), specialVaultCache = specialVaultCache.withEntries(e.id, ((i = {})[model.Vault.TypeGeneratedPasswords] = n, i)), [2, n]
                }
            })
        })
    })
};
var generateVaultAccessesInternalVaults = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(a) {
            if (!e.user) throw new Error("Missing user");
            return [2, Promise.all(__spread([model.VaultAccess.generate(t, e.user, {
                acl: model.vaultACL.DEFAULT_VAULT_ACL
            })], r.map(generateSystemGroupVaultAccess(e, t))))]
        })
    })
};
export var getCreateVaultPreflight = function(e, t) {
    return makePromise("getCreateVaultPreflight", function() {
        return api.getCreateVaultPreflight(e.session, t)
    })
};
export var createAccountSplittingVaultPreflight = function(e) {
    return api.createAccountSplittingVaultPreflight(e.session)
};
export var createVault = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var a, n;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return [4, (a = new model.Vault(t)).generateNewKey()];
                case 1:
                    if (i.sent(), !e.user) throw new Error("Missing user");
                    return [4, Promise.all(__spread([model.VaultAccess.generate(a, e.user, {
                        acl: model.vaultACL.ALL
                    })], r.map(generateSystemGroupVaultAccess(e, a))))];
                case 2:
                    return n = i.sent(), [2, sendVault(e, a, n)]
            }
        })
    })
};
export var createVaultForAccountSplitting = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var a, n, i;
        return __generator(this, function(o) {
            switch (o.label) {
                case 0:
                    return a = __assign(__assign({}, t), {
                        type: model.Vault.TypeUserCreated
                    }), [4, (n = new model.Vault(a)).generateNewKey()];
                case 1:
                    if (o.sent(), !e.user) throw new Error("Missing user");
                    return [4, Promise.all(__spread([model.VaultAccess.generate(n, e.user, {
                        acl: model.vaultACL.ALL
                    })], r.map(generateSystemGroupVaultAccess(e, n))))];
                case 2:
                    return i = o.sent(), [2, sendAccountSplittingVault(e, n, i)]
            }
        })
    })
};
var systemGroupACLs = ((_a = {})[model.Group.TypeRecovery] = model.vaultACL.Recover, _a[model.Group.TypeOwners] = model.vaultACL.Manage, _a[model.Group.TypeAdmins] = model.vaultACL.Manage, _a),
    generateSystemGroupVaultAccess = function(e, t) {
        return function(r) {
            return __awaiter(void 0, void 0, void 0, function() {
                var a, n;
                return __generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return [4, getGroup(e, r, {
                                attrs: model.Group.Attr.PubKey
                            })];
                        case 1:
                            if (a = i.sent(), "number" != typeof(n = systemGroupACLs[a.type]) || 0 === n) throw new Error("System group ACL is not defined for this group");
                            return [2, model.VaultAccess.generate(t, a, {
                                acl: n
                            })]
                    }
                })
            })
        }
    },
    encryptVaultForAPI = function(e, t, r) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        return [4, t.encryptAttrs()];
                    case 1:
                        if (a.sent(), !e.user) throw new Error("Missing user");
                        if (!e.user.activeKeyset) throw new Error("Missing user");
                        if (!t.activeKey) throw new Error("Missing active key");
                        return [4, t.activeKey.encryptWithKey(e.user.activeKeyset.ekeyPair)];
                    case 2:
                        return a.sent(), [2, parser.vaultToAPI(t, r)]
                }
            })
        })
    },
    combineACL = function(e, t) {
        void 0 === e.getCombinedAcl() && e.setCombinedAcl(t.reduce(function(e, t) {
            return e | t.acl
        }, 0))
    };
export var sendVault = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var a;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, encryptVaultForAPI(e, t, r)];
                case 1:
                    return a = n.sent(), [4, api.createVault(e.session, a)];
                case 2:
                    return n.sent(), combineACL(t, r), [2, t]
            }
        })
    })
};
var sendAccountSplittingVault = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var a;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, encryptVaultForAPI(e, t, r)];
                case 1:
                    return a = n.sent(), [4, api.createVaultForAccountSplitting(e.session, a)];
                case 2:
                    return n.sent(), combineACL(t, r), [2, t]
            }
        })
    })
};
export var deleteVaultPreflight = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            return [2, api.deleteVaultPreflight(e.session, t.uuid)]
        })
    })
};
export var deleteVault = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, api.deleteVault(e.session, t.uuid)];
                case 1:
                    return r.sent(), vaultCache = vaultCache.withoutEntries(e.id, [t.uuid]), [2]
            }
        })
    })
};
export var updateVault = function(e, t) {
    return makePromise("updateVault", function() {
        return t.encryptAttrs().then(function(t) {
            return api.updateVault(e.session, parser.vaultToAPI(t))
        })
    })
};
export var updateVaultClientAccess = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(a) {
            switch (a.label) {
                case 0:
                    return [4, api.updateVaultClientAccess(e.session, t, r)];
                case 1:
                    return a.sent(), [2]
            }
        })
    })
};
export var enableTravelSafe = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, api.enableTravelSafe(e.session, t.uuid)];
                case 1:
                    return r.sent(), invalidateCache(e), [2]
            }
        })
    })
};
export var disableTravelSafe = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, api.disableTravelSafe(e.session, t.uuid)];
                case 1:
                    return r.sent(), invalidateCache(e), [2]
            }
        })
    })
};
export var replaceVaultInCache = function(e, t, r) {
    var a;
    specialVaultCache.getEntry(e.id, r.type) && (specialVaultCache = specialVaultCache.withEntries(e.id, ((a = {})[r.type] = r, a))), vaultCache = vaultCache.withoutEntries(e.id, [t.uuid])
};
export var clearVaultCache = function() {
    vaultCache = cache.create()
};
export var clearVaultCacheForContext = function(e) {
    vaultCache = vaultCache.withoutContext(e.id)
};
export var clearVaultWithPreviewsCache = function() {
    vaultWithPreviewsCache = cache.create()
};
export var clearVaultWithPreviewsCacheForContext = function(e) {
    vaultWithPreviewsCache = vaultWithPreviewsCache.withoutContext(e.id)
};