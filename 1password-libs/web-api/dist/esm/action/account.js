var _a, __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(o, a) {
            function c(e) {
                try {
                    s(n.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function i(e) {
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
                })).then(c, i)
            }
            s((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, o, a, c = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: i(0),
            throw: i(1),
            return: i(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function i(a) {
            return function(i) {
                return function(a) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; c;) try {
                        if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                        switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                            case 0:
                            case 1:
                                o = a;
                                break;
                            case 4:
                                return c.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                c.label++, n = a[1], a = [0];
                                continue;
                            case 7:
                                a = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = c.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                    c.label = a[1];
                                    break
                                }
                                if (6 === a[0] && c.label < o[1]) {
                                    c.label = o[1], o = a;
                                    break
                                }
                                if (o && c.label < o[2]) {
                                    c.label = o[2], c.ops.push(a);
                                    break
                                }
                                o[2] && c.ops.pop(), c.trys.pop();
                                continue
                        }
                        a = t.call(e, c)
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
                }([a, i])
            }
        }
    },
    __read = this && this.__read || function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, o, a = r.call(e),
            c = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(n = a.next()).done;) c.push(n.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (r = a.return) && r.call(a)
            } finally {
                if (o) throw o.error
            }
        }
        return c
    },
    __spread = this && this.__spread || function() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(__read(arguments[t]));
        return e
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
    includes
} from "lodash-es";
import * as api from "../api";
import * as model from "../model";
import * as parser from "../parser";
import * as util from "../util";
import {
    makePromise as mp
} from "../util/make_promise";
import {
    createWatchtowerPubkey
} from "./admin_watchtower";
import {
    changed,
    invalidateCache
} from "./context";
import {
    generateNewKeysetForGroup,
    getGroup,
    getRecoveryGroup
} from "./group";
import {
    refreshKeysetsIfNecessary
} from "./keyset";
import {
    createObjectData,
    createObjectDataAccess
} from "./object_access";
import {
    processIncomingPackages
} from "./package";
import {
    cancelUserRecovery,
    findCachedUser,
    setActiveUser,
    setCachedUsers
} from "./user";
var codeLocation = "action/account",
    makePromise = mp(codeLocation);
export var getAccountWithAttrs = function(e, t) {
    return makePromise("getAccountWithAttrs", function() {
        var r = !!e.account;
        return (includes(t, "me") ? refreshKeysetsIfNecessary(e) : Promise.resolve()).then(function() {
            return api.getAccountWithAttrs(e.session, t)
        }).then(function(t) {
            return parser.parseAccount(e, t, function(t) {
                return findCachedUser(e, t)
            })
        }).then(function(t) {
            var n = t.account,
                o = t.activeUser,
                a = t.users;
            return o && setActiveUser(e, o), a && setCachedUsers(e, a), e.user ? performGetAccountChecks(e, n, e.user, r).then(function() {
                return changed(e), n
            }) : Promise.reject(new Error("Missing user"))
        })
    })
};
export var getEntireAccount = function(e, t) {
    return makePromise("getEntireAccount", function() {
        return getAccountWithAttrs(e, __spread(["account-flags", "billing", "counts", "invite", "me", "me.memberships", "meta", "promotions", "settings", "tier", "user-flags"], t)).then(function(t) {
            return e.nc.emit(util.notification.UniverseReloaded), t
        })
    })
};
export var loadUniverse = function(e) {
    return makePromise("loadUniverse", function() {
        return getEntireAccount(e, ["groups", "users"])
    })
};
export var reloadUniverse = loadUniverse;
var performGetAccountChecks = function(e, t, r, n) {
        return makePromise("performGetAccountChecks", function() {
            return t.state === model.Account.StateActive && includes(["A", "P"], r.state) ? processIncomingPackages(e).then(function() {
                dispatchPackageProcessingComplete()
            }) : "1" === r.state && n ? api.signOut(e.session).catch(function() {}).then(function() {
                e.nc.emit(util.notification.RecoveryStarted)
            }) : void 0
        })
    },
    dispatchPackageProcessingComplete = function() {
        document.dispatchEvent(new CustomEvent("B5ProcessIncomingPackagesCompleted", {
            bubbles: !1,
            cancelable: !1
        }))
    };
export var performSignInAccountChecks = function(e, t, r, n) {
    return makePromise("performSignInAccountChecks", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        if (t.state === model.Account.StateRegistered) return [2, setupAccount(e, n)];
                        if ("V" === r.state) return [2, setupUser(e)];
                        if ("R" === r.state) throw new util.errors.ClientError(104, "Account not verified");
                        return "1" !== r.state ? [3, 3] : [4, cancelUserRecovery(e, [r])];
                    case 1:
                        return o.sent(), [4, getAccountWithAttrs(e, ["me"])];
                    case 2:
                        o.sent(), o.label = 3;
                    case 3:
                        if (t.state === model.Account.StateActive && includes(["A", "P"], r.state)) return [2, Promise.resolve()];
                        throw new Error("Unsupported account state")
                }
            })
        })
    })
};
export var checkDomainAvailability = function(e, t, r) {
    return makePromise("checkDomainAvailability", function() {
        return api.checkDomainAvailability(e.session, t, r).catch(function(e) {
            return util.errors.isServerError(e, 100, 400) ? Promise.resolve(!1) : Promise.reject(e)
        })
    })
};
export var getDomain = function(e, t) {
    return makePromise("getDomain", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            var r;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return t ? [4, api.getSuggestedDomain(e.session, t)] : [3, 2];
                    case 1:
                        return r = n.sent(), [3, 3];
                    case 2:
                        r = model.MY_DOMAIN, n.label = 3;
                    case 3:
                        return [2, r]
                }
            })
        })
    })
};
export var updateAccount = function(e) {
    return makePromise("updateAccount", function() {
        var t = e.account;
        return t ? api.updateAccount(e.session, parser.accountToAPI(t)).then(function() {
            return t.attrVersion++, invalidateCache(e), changed(e), Promise.resolve(void 0)
        }) : Promise.reject(new Error("Missing account"))
    })
};
export var updateBillingSettings = function(e) {
    return makePromise("updateBillingSettings", function() {
        var t = e.account;
        return t ? api.updateBillingSettings(e.session, parser.accountToAPI(t)).then(function() {
            return t.attrVersion++, invalidateCache(e), changed(e), Promise.resolve(void 0)
        }) : Promise.reject(new Error("Missing account"))
    })
};
export var changeDomain = function(e, t) {
    return makePromise("changeDomain", function() {
        var r = e.account;
        return r ? api.changeDomain(e.session, t).then(function() {
            return r.attrVersion++, invalidateCache(e), changed(e), Promise.resolve(void 0)
        }) : Promise.reject(new Error("Missing account"))
    })
};
export var deleteAccount = function(e) {
    return makePromise("deleteAccount", function() {
        return e.account ? api.deleteAccount(e.session) : Promise.reject(new Error("Missing account"))
    })
};
export var verifyLockedOutAccountDeletion = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, api.verifyLockedOutAccountDeletion(e.session, t, r)];
                case 1:
                    return n.sent(), [2]
            }
        })
    })
};
export var lockedOutDeleteAccount = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, api.lockedOutDeleteAccount(e.session, t, r)];
                case 1:
                    return n.sent(), [2]
            }
        })
    })
};
export var postImage = function(e, t) {
    return api.postImage(e.session, t)
};
export var createPersonalVault = function(e) {
    return new model.Vault({
        type: model.Vault.TypePersonal,
        name: personalVaultName(e),
        desc: model.Vault.DefaultDescMarker
    })
};
export var personalVaultName = function(e) {
    return "I" === e ? "Personal" : "Private"
};
export var createSharedVault = function() {
    return new model.Vault({
        type: model.Vault.TypeEveryone,
        name: "Shared",
        desc: model.Vault.DefaultDescMarker
    })
};
export var createAdminWatchtowerKeyset = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, r;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, model.crypto2.Keyset.generate()];
                case 1:
                    return t = n.sent(), r = {
                        objectUuid: t.uuid,
                        data: {
                            ePriKey: t.encryptionKeyPair.priKey,
                            sPriKey: t.signingKeyPair.priKey
                        },
                        acl: []
                    }, [4, createObjectData(e, api.ObjectType.AdminWatchtowerKeyset, api.DataType.AdminWatchtowerKeysetPrivateKey, api.ObjectDataAccessScope.Manage, r)];
                case 2:
                    return n.sent(), [4, createWatchtowerPubkey(e, t.uuid, t.encryptionKeyPair.pubKey)];
                case 3:
                    return n.sent(), [2]
            }
        })
    })
};
export var grantGroupAccessToWatchtowerKeyset = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return t.pubKey ? [3, 2] : [4, getGroup(e, t, {
                        attrs: model.Group.Attr.PubKey,
                        mustReload: !0
                    })];
                case 1:
                    t = n.sent(), n.label = 2;
                case 2:
                    return [4, api.getObjectDataAccessPreflight(e.session, api.ObjectType.AdminWatchtowerKeyset, api.ObjectDataAccessScope.Manage)];
                case 3:
                    return r = n.sent(), [4, createObjectDataAccess(e, api.ObjectType.AdminWatchtowerKeyset, api.ObjectDataAccessScope.Manage, t, [], r)];
                case 4:
                    return n.sent(), [2]
            }
        })
    })
};
var recoveryCapableGroupTypes = ((_a = {})[model.Group.TypeRecovery] = !0, _a[model.Group.TypeOwners] = !0, _a[model.Group.TypeAdmins] = !0, _a),
    setupAccount = function(e, t) {
        return makePromise("setupAccount", function() {
            var r, n, o = e.account;
            if (!o) return Promise.reject(new Error("Missing account"));
            var a = e.user;
            if (!a) return Promise.reject(new Error("Missing user"));
            console.time("setupAccount");
            var c = new model.Group({
                    name: "Recovery",
                    type: model.Group.TypeRecovery,
                    desc: "Can reset user passwords if account recovery is enabled."
                }),
                i = new model.Group({
                    name: "Owners",
                    type: model.Group.TypeOwners,
                    desc: "Access to billing and account administration."
                }),
                s = new model.Group({
                    name: "Administrators",
                    type: model.Group.TypeAdmins,
                    desc: "Administration of users, groups, and vaults."
                }),
                u = new model.Group({
                    name: "Team Members",
                    type: model.Group.TypeTeamMembers,
                    desc: "All team members."
                }),
                l = new model.Group({
                    name: "Security",
                    type: model.Group.TypeSecurity,
                    desc: t ? t["Access to security reports and account activity."]() : "Access to security reports and account activity."
                }),
                p = [c, i, s];
            o.hasFeature.members && p.push(u), o.hasFeature.members && e.config.internalFeaturesAreEnabled && p.push(l), "backoffice" === o.domain && p.push(new model.Group({
                name: "Backoffice Users",
                type: model.Group.TypeBackofficeUsers,
                desc: ""
            }), new model.Group({
                name: "Backoffice Billing",
                type: model.Group.TypeBackofficeBilling,
                desc: ""
            }), new model.Group({
                name: "Backoffice Security",
                type: model.Group.TypeBackofficeSecurity,
                desc: ""
            }), new model.Group({
                name: "Backoffice Developers",
                type: model.Group.TypeBackofficeDevelopers,
                desc: ""
            }), new model.Group({
                name: "Backoffice Finance",
                type: model.Group.TypeBackofficeFinance,
                desc: ""
            }), new model.Group({
                name: "Backoffice Owners",
                type: model.Group.TypeBackofficeOwners,
                desc: ""
            }));
            var m = function(e, t, r) {
                    var n = [];
                    return e.type !== model.Group.TypeRecovery && n.push(e.addMembership(t, a, {
                        role: api.GroupMembership.Role.Manager
                    })), recoveryCapableGroupTypes[e.type] && n.push(e.enableRecoverCapability(r)), Promise.all(n)
                },
                d = generateNewKeysetForGroup(e, c, c).then(function(t) {
                    var r = p.slice(1);
                    return Promise.all(__spread([m(c, t, t)], r.map(function(r) {
                        return generateNewKeysetForGroup(e, r, c).then(function(e) {
                            return m(r, e, t)
                        })
                    })))
                }),
                f = createPersonalVault(o.type),
                v = createSharedVault(),
                h = [f];
            o.hasFeature.members && h.push(v);
            var y = [d];
            try {
                for (var g = __values(h), A = g.next(); !A.done; A = g.next()) {
                    var w = A.value;
                    y.push(w.generateNewKey())
                }
            } catch (e) {
                r = {
                    error: e
                }
            } finally {
                try {
                    A && !A.done && (n = g.return) && n.call(g)
                } finally {
                    if (r) throw r.error
                }
            }
            return Promise.all(y).then(function() {
                var e = [model.VaultAccess.generate(f, a, {
                        acl: model.vaultACL.RWE | model.vaultACL.Manage
                    }), model.VaultAccess.generate(f, c, {
                        acl: model.vaultACL.Recover
                    })],
                    t = o.hasFeature.members ? [model.VaultAccess.generate(v, i, {
                        acl: model.vaultACL.Manage
                    }), model.VaultAccess.generate(v, s, {
                        acl: model.vaultACL.Manage
                    }), model.VaultAccess.generate(v, c, {
                        acl: model.vaultACL.Recover
                    }), model.VaultAccess.generate(v, u, {
                        acl: model.vaultACL.ALL_READ | model.vaultACL.ALL_WRITE | model.vaultACL.ALL_EXPORT
                    })] : [];
                return Promise.all(__spread(e, t))
            }).then(function(t) {
                return activateAccount(e, h, t, p)
            }).then(function() {
                return __awaiter(void 0, void 0, void 0, function() {
                    return __generator(this, function(t) {
                        if (e.config.internalFeaturesAreEnabled) {
                            if (!i.activeKeysetUuid) throw new Error("Missing owners group");
                            return [2, createAdminWatchtowerKeyset(e)]
                        }
                        return [2]
                    })
                })
            }).then(function() {
                return console.timeEnd("setupAccount"), getEntireAccount(e, ["groups", "users"])
            }).then(function() {
                return Promise.resolve(void 0)
            })
        })
    },
    setupUser = function(e) {
        return makePromise("setupUser", function() {
            var t = e.user;
            if (!t) return Promise.reject(new Error("Missing user"));
            var r = e.account;
            if (!r) return Promise.reject(new Error("Missing account"));
            var n = createPersonalVault(r.type),
                o = getRecoveryGroup(e, {
                    attrs: model.Group.Attr.PubKey
                }),
                a = n.generateNewKey();
            return Promise.all([o, a]).then(function(e) {
                var r = e[0],
                    o = [model.VaultAccess.generate(n, t, {
                        acl: model.vaultACL.RWE | model.vaultACL.Manage
                    }), model.VaultAccess.generate(n, r, {
                        acl: model.vaultACL.Recover
                    })];
                return Promise.all(o)
            }).then(function(t) {
                return joinAccount(e, n, t)
            }).then(function() {
                return r.hasFeature.accountTransfer ? getAccountWithAttrs(e, ["user-flags"]) : void 0
            }).then(function() {
                t.state = "P"
            })
        })
    },
    activateAccount = function(e, t, r, n) {
        return makePromise("activateAccount", function() {
            return api.activateAccount(e.session, parser.vaultsToAPI(t, r), n.map(function(e) {
                return parser.groupToAPI(e, model.Group.Attr.PubKey | model.Group.Attr.Memberships)
            }))
        })
    },
    joinAccount = function(e, t, r) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, api.joinAccount(e.session, parser.vaultToAPI(t, r))];
                    case 1:
                        return n.sent(), [2]
                }
            })
        })
    };