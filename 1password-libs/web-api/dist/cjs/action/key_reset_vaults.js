"use strict";
var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var t, r = 1, a = arguments.length; r < a; r++)
                for (var u in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, u) && (e[u] = t[u]);
            return e
        }).apply(this, arguments)
    },
    __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, a) {
        void 0 === a && (a = r), Object.defineProperty(e, a, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, a) {
        void 0 === a && (a = r), e[a] = t[r]
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
    __awaiter = this && this.__awaiter || function(e, t, r, a) {
        return new(r || (r = Promise))(function(u, n) {
            function i(e) {
                try {
                    o(a.next(e))
                } catch (e) {
                    n(e)
                }
            }

            function s(e) {
                try {
                    o(a.throw(e))
                } catch (e) {
                    n(e)
                }
            }

            function o(e) {
                var t;
                e.done ? u(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(i, s)
            }
            o((a = a.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, a, u, n, i = {
            label: 0,
            sent: function() {
                if (1 & u[0]) throw u[1];
                return u[1]
            },
            trys: [],
            ops: []
        };
        return n = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
            return this
        }), n;

        function s(n) {
            return function(s) {
                return function(n) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (r = 1, a && (u = 2 & n[0] ? a.return : n[0] ? a.throw || ((u = a.return) && u.call(a), 0) : a.next) && !(u = u.call(a, n[1])).done) return u;
                        switch (a = 0, u && (n = [2 & n[0], u.value]), n[0]) {
                            case 0:
                            case 1:
                                u = n;
                                break;
                            case 4:
                                return i.label++, {
                                    value: n[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, a = n[1], n = [0];
                                continue;
                            case 7:
                                n = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(u = (u = i.trys).length > 0 && u[u.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === n[0] && (!u || n[1] > u[0] && n[1] < u[3])) {
                                    i.label = n[1];
                                    break
                                }
                                if (6 === n[0] && i.label < u[1]) {
                                    i.label = u[1], u = n;
                                    break
                                }
                                if (u && i.label < u[2]) {
                                    i.label = u[2], i.ops.push(n);
                                    break
                                }
                                u[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        n = t.call(e, i)
                    } catch (e) {
                        n = [6, e], a = 0
                    } finally {
                        r = u = 0
                    }
                    if (5 & n[0]) throw n[1];
                    return {
                        value: n[0] ? n[1] : void 0,
                        done: !0
                    }
                }([n, s])
            }
        }
    },
    __read = this && this.__read || function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var a, u, n = r.call(e),
            i = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(a = n.next()).done;) i.push(a.value)
        } catch (e) {
            u = {
                error: e
            }
        } finally {
            try {
                a && !a.done && (r = n.return) && r.call(n)
            } finally {
                if (u) throw u.error
            }
        }
        return i
    },
    __spread = this && this.__spread || function() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(__read(arguments[t]));
        return e
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.correctCliAffectedPrivateVault = exports.getCliPrivateVaultEffort = exports.getCliAffectedPrivateVaultStatus = exports.correctCliAffectedVaults = exports.getCliVaultEffort = void 0;
var lodash_es_1 = require("lodash-es"),
    papaparse_1 = require("papaparse"),
    api = __importStar(require("../api")),
    model = __importStar(require("../model")),
    parser = __importStar(require("../parser")),
    util = __importStar(require("../util")),
    util_1 = require("../util"),
    group_1 = require("./group"),
    provision_1 = require("./provision"),
    pub_key_1 = require("./pub_key"),
    vault_1 = require("./vault"),
    vault_access_1 = require("./vault_access"),
    vault_item_1 = require("./vault_item"),
    VaultCorrectionEffort = {
        getList: 1,
        fixOne: 50
    },
    getCliVaultEffort = function(e) {
        return 0 === e.length ? 0 : 2 * VaultCorrectionEffort.getList + VaultCorrectionEffort.fixOne * e.length
    };
exports.getCliVaultEffort = getCliVaultEffort;
var correctCliAffectedVaults = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, a, u, n, i, s, o, c, l, d, f, v, p, _;
        return __generator(this, function(h) {
            switch (h.label) {
                case 0:
                    return t(0), [4, api.getVaultsCreatedByCli(e.session)];
                case 1:
                    return 0 === (r = h.sent().vaults).length ? (t(1), [2, {
                        succeeded: {},
                        succeededCsv: void 0
                    }]) : (a = exports.getCliVaultEffort(r), u = 0, t((u += VaultCorrectionEffort.getList) / a), [4, util.batchPromiseAll(function(r) {
                        return __awaiter(void 0, void 0, void 0, function() {
                            return __generator(this, function(n) {
                                return [2, replaceVault(e, function() {
                                    t((u += VaultCorrectionEffort.fixOne) / a)
                                })(r).then(function(e) {
                                    return {
                                        type: "success",
                                        result: e
                                    }
                                }, function(t) {
                                    return __awaiter(void 0, void 0, void 0, function() {
                                        return __generator(this, function(a) {
                                            switch (a.label) {
                                                case 0:
                                                    return [4, api.unlockVault(e.session)(r.uuid)];
                                                case 1:
                                                    return a.sent(), [2, {
                                                        type: "error",
                                                        error: t
                                                    }]
                                            }
                                        })
                                    })
                                })]
                            })
                        })
                    }, 1, r)]);
                case 2:
                    if (n = h.sent(), i = __read(lodash_es_1.partition(n, function(e) {
                            return "success" === e.type
                        }), 2), s = i[0], o = i[1], c = s.reduce(function(e, t) {
                            var r, a = t.result;
                            return __assign(__assign({}, e), ((r = {})[a.oldUuid] = a.newUuid, r))
                        }, {}), l = getReplacedVaultUuidsCsv(s.map(function(e) {
                            return e.result
                        })), (d = o.map(function(e) {
                            return e.error
                        })).length > 0) return [2, {
                        succeeded: c,
                        succeededCsv: l,
                        errors: d
                    }];
                    h.label = 3;
                case 3:
                    return h.trys.push([3, 5, , 6]), [4, api.getVaultsCreatedByCli(e.session)];
                case 4:
                    if (f = h.sent(), v = f.vaults, p = f.hasVaultsInStateT, 0 !== v.length) throw new Error("[check] correctCliAffectedVaults: Some vaults have not been replaced: " + v.map(function(e) {
                        return e.uuid
                    }).join(", "));
                    if (p) throw new Error("[check] correctCliAffectedVaults: Some provisioned users' vaults have not been replaced");
                    return t(1), [3, 6];
                case 5:
                    return _ = h.sent(), [2, {
                        succeeded: c,
                        succeededCsv: l,
                        errors: [_.toString()]
                    }];
                case 6:
                    return [2, {
                        succeeded: c,
                        succeededCsv: l
                    }]
            }
        })
    })
};
exports.correctCliAffectedVaults = correctCliAffectedVaults;
var getReplacedVaultUuidsCsv = function(e) {
        if (e.length > 0) {
            var t = __spread([
                    ["Old Vault IDs", "New Vault IDs"]
                ], e.map(function(e) {
                    return [e.oldUuid, e.newUuid]
                })),
                r = papaparse_1.unparse(t, {
                    newline: "\n"
                });
            return new Blob([r], {
                type: "text/csv"
            })
        }
    },
    getCliAffectedPrivateVaultStatus = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t;
            return __generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        return "B" !== (null === (t = e.account) || void 0 === t ? void 0 : t.type) ? [2, !1] : [4, api.getCliAffectedPrivateVaultStatus(e.session)];
                    case 1:
                        return [2, r.sent().isCreatedByCli]
                }
            })
        })
    };
exports.getCliAffectedPrivateVaultStatus = getCliAffectedPrivateVaultStatus;
var getCliPrivateVaultEffort = function(e) {
    return e ? 2 * VaultCorrectionEffort.getList + VaultCorrectionEffort.fixOne : 0
};
exports.getCliPrivateVaultEffort = getCliPrivateVaultEffort;
var correctCliAffectedPrivateVault = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, a, u, n, i;
        return __generator(this, function(s) {
            switch (s.label) {
                case 0:
                    return t(0), [4, api.getCliAffectedPrivateVaultStatus(e.session)];
                case 1:
                    return (r = s.sent().isCreatedByCli) ? (a = exports.getCliPrivateVaultEffort(r), u = 0, t((u += VaultCorrectionEffort.getList) / a), [4, vault_1.getPersonalVault(e)]) : (t(1), [2, void 0]);
                case 2:
                    if (!(n = s.sent())) throw new Error("correctCliAffectedPrivateVault: Missing private vault");
                    return [4, replaceVault(e, function() {
                        t((u += VaultCorrectionEffort.fixOne) / a)
                    })(n).catch(function(t) {
                        return __awaiter(void 0, void 0, void 0, function() {
                            return __generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, api.unlockVault(e.session)(n.uuid)];
                                    case 1:
                                        throw r.sent(), t
                                }
                            })
                        })
                    })];
                case 3:
                    return i = s.sent(), [4, api.getCliAffectedPrivateVaultStatus(e.session)];
                case 4:
                    if (s.sent().isCreatedByCli) throw new Error("correctCliAffectedPrivateVault: Private vault is still affected");
                    return t(1), [2, i]
            }
        })
    })
};
exports.correctCliAffectedPrivateVault = correctCliAffectedPrivateVault;
var replaceVault = function(e, t) {
        return function(r) {
            return __awaiter(void 0, void 0, void 0, function() {
                var a, u, n, i, s, o, c, l, d, f, v, p, _, h, g, w, m, V, y, A;
                return __generator(this, function(C) {
                    switch (C.label) {
                        case 0:
                            return a = util.getValidVaultUuid(r), [4, api.lockVault(e.session)(a)];
                        case 1:
                            return C.sent(), [4, vault_1.getVault(e, a, {
                                attrs: model.Vault.Attr.All,
                                mustReload: !0
                            })];
                        case 2:
                            return u = C.sent(), (n = u.accessList.filter(function(e) {
                                return model.vaultACL.isEffectivelyZero(e.acl)
                            }).map(function(e) {
                                return {
                                    uuid: e.accessorUuid,
                                    accessorType: e.accessorType
                                }
                            })).length > 0 ? [4, api.unlockVault(e.session)(a)] : [3, 7];
                        case 3:
                            return C.sent(), [4, util.batchPromiseAll(function(t) {
                                return api.deleteAccessorFromVault(e.session, a, t.uuid, "group" === t.accessorType)
                            }, 5, n)];
                        case 4:
                            return C.sent(), [4, api.lockVault(e.session)(a)];
                        case 5:
                            return C.sent(), [4, vault_1.getVault(e, a, {
                                attrs: model.Vault.Attr.All,
                                mustReload: !0
                            })];
                        case 6:
                            u = C.sent(), C.label = 7;
                        case 7:
                            return i = u.getAttrs(), s = u.activeItemCount, o = __read(getSortedAccessLists(u), 2), c = o[0], l = o[1], [4, vault_item_1.getVaultItems(e, u)];
                        case 8:
                            return d = C.sent(), [4, duplicateVault(e, u)];
                        case 9:
                            return f = C.sent(), v = null === (V = f.activeKey) || void 0 === V ? void 0 : V.uuid, [4, copyItemsToVault(e, f, d)];
                        case 10:
                            return C.sent(), f.type = u.type, [4, f.encryptAttrs()];
                        case 11:
                            return C.sent(), p = parser.vaultToAPI(f), [4, api.replaceVault(e.session, {
                                oldUuid: a,
                                newVault: p
                            })];
                        case 12:
                            return C.sent(), vault_1.replaceVaultInCache(e, u, f), [4, vault_1.getVault(e, a, {
                                mustReload: !0
                            }).then(function() {
                                throw new Error("[check] replaceVault: Old vault should be gone")
                            }, function() {})];
                        case 13:
                            return C.sent(), [4, vault_1.getVault(e, p.uuid, {
                                attrs: model.Vault.Attr.Accessors,
                                mustReload: !0
                            }).catch(function() {
                                throw new Error("[check] replaceVault: Should have new vault")
                            })];
                        case 14:
                            if (_ = C.sent(), !lodash_es_1.isEqual(lodash_es_1.omit(i, "uuid"), lodash_es_1.omit(_.getAttrs(), "uuid"))) throw new Error("[check] replaceVault: New vault attrs are not the same (" + i.uuid + " and " + _.uuid + ")");
                            if (2 !== _.attrVersion) throw new Error("[check] replaceVault: New vault's attr version should be 2, was: " + _.attrVersion);
                            if (s !== _.activeItemCount) throw new Error("[check] replaceVault: New vault has incorrect item count: " + s + " !== " + _.activeItemCount);
                            if ((null === (y = _.activeKey) || void 0 === y ? void 0 : y.uuid) !== v) throw new Error("[check] replaceVault: New vault has wrong active key: " + (null === (A = _.activeKey) || void 0 === A ? void 0 : A.uuid) + " !== " + v);
                            return [4, api.lockVault(e.session)(_.uuid)];
                        case 15:
                            return C.sent(), [4, api.getVaultItems(e.session, _.uuid, 0)];
                        case 16:
                            return h = C.sent().items, [4, api.unlockVault(e.session)(_.uuid)];
                        case 17:
                            if (C.sent(), _.activeItemCount > 0 && (!h || 0 === h.length)) throw new Error("[check] replaceVault: Missing vault items: " + _.activeItemCount + " in " + _.uuid);
                            return h ? [4, Promise.all(h.map(function(e) {
                                return __awaiter(void 0, void 0, void 0, function() {
                                    var t, r;
                                    return __generator(this, function(a) {
                                        if (e.encOverview.kid !== v) throw new Error("[check] replaceVault: Overview encrypted with wrong key: " + e.encOverview.kid + " !== " + v + " (" + _.uuid + "/" + e.uuid + ")");
                                        if ((null === (t = e.encDetails) || void 0 === t ? void 0 : t.kid) !== v) throw new Error("[check] replaceVault: Details encrypted with wrong key: " + (null === (r = e.encDetails) || void 0 === r ? void 0 : r.kid) + " !== " + v + " (" + _.uuid + "/" + e.uuid + ")");
                                        return [2, parser.vaultItemFromAPI(e, _)]
                                    })
                                })
                            }))] : [3, 19];
                        case 18:
                            C.sent(), C.label = 19;
                        case 19:
                            if (g = __read(getSortedAccessLists(_), 2), w = g[0], m = g[1], c.length !== w.length) throw new Error("[check] replaceVault: New vault has incorrect group vault access: " + c.length + " !== " + w.length + " (" + _.uuid + ")");
                            if (c.forEach(function(e, t) {
                                    var r = w[t];
                                    if (void 0 === r) throw new Error("[check] replaceVault: newGroupAccess index out of range");
                                    if (e.accessorUuid !== r.accessorUuid) throw new Error("[check] replaceVault: Mismatched group UUIDS: " + e.accessorUuid + " !== " + r.accessorUuid + " (" + _.uuid + ")");
                                    if (e.acl !== r.acl) throw new Error("[check] replaceVault: Mismatched vault ACLs: " + e.acl + " !== " + r.acl + " (" + _.uuid + ", " + e.accessorUuid + ")")
                                }), l.length !== m.length) throw new Error("[check] replaceVault: New vault has incorrect user vault access: " + l.length + " !== " + m.length + " (" + _.uuid + ")");
                            return l.forEach(function(e, t) {
                                var r = m[t];
                                if (void 0 === r) throw new Error("[check] replaceVault: newUserAccess index out of range");
                                if (e.accessorUuid !== r.accessorUuid) throw new Error("[check] replaceVault: Mismatched user UUIDS: " + e.accessorUuid + " !== " + r.accessorUuid + " (" + _.uuid + ")");
                                if (e.acl !== r.acl) throw new Error("[check] replaceVault: Mismatched vault ACLs: " + e.acl + " !== " + r.acl + " (" + _.uuid + ", " + e.accessorUuid + ")")
                            }), t(), [2, {
                                oldUuid: a,
                                newUuid: p.uuid
                            }]
                    }
                })
            })
        }
    },
    getSortedAccessLists = function(e) {
        var t = util.compare.strings(function(e) {
                return e.accessorUuid
            }),
            r = __read(lodash_es_1.partition(e.accessList, function(e) {
                return "group" === e.accessorType
            }), 2),
            a = r[0],
            u = r[1];
        return a.sort(t), u.sort(t), [a, u]
    },
    duplicateVault = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, a, u, n, i, s, o, c;
            return __generator(this, function(l) {
                switch (l.label) {
                    case 0:
                        return [4, (r = new model.Vault({
                            name: t.name,
                            type: model.Vault.TypeReplacement,
                            desc: t.desc,
                            avatar: t.avatar,
                            defaultAcl: t.defaultAcl
                        })).generateNewKey()];
                    case 1:
                        return l.sent(), [4, copyVaultAccess(e, r, t.accessList)];
                    case 2:
                        return a = l.sent(), [4, partitionMinimumVaultAccess(e, t.type, a)];
                    case 3:
                        return u = l.sent(), n = u.minimumAccess, i = u.remainingAccess, [4, vault_1.sendVault(e, r, n)];
                    case 4:
                        return l.sent(), (s = i.map(parser.vaultAccessToAPI)).length > 0 ? (o = function(t) {
                            return __awaiter(void 0, void 0, void 0, function() {
                                return __generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return [4, api.addVaultAccess(e.session, r.uuid, t)];
                                        case 1:
                                            return a.sent(), [2, []]
                                    }
                                })
                            })
                        }, [4, util_1.batchChain(o, 100, s)]) : [3, 6];
                    case 5:
                        l.sent(), l.label = 6;
                    case 6:
                        return null !== (c = e.account) && void 0 !== c && c.hasFeature.clientVaultAccess && t.type !== model.Vault.TypePersonal ? [4, vault_1.updateVaultClientAccess(e, r.uuid, t.clientAccess)] : [3, 8];
                    case 7:
                        return l.sent(), [3, 10];
                    case 8:
                        return model.BitSet.includes(t.clientAccess, model.VaultClientAccess.Travel) ? [4, api.enableTravelSafe(e.session, r.uuid)] : [3, 10];
                    case 9:
                        l.sent(), l.label = 10;
                    case 10:
                        return [2, r]
                }
            })
        })
    },
    copyVaultAccess = function(e, t, r) {
        return __awaiter(void 0, void 0, void 0, function() {
            var a, u, n, i, s, o, c;
            return __generator(this, function(l) {
                switch (l.label) {
                    case 0:
                        if (a = __read(lodash_es_1.partition(r, function(e) {
                                return "group" === e.accessorType
                            }).map(function(e) {
                                return e.map(function(e) {
                                    return e.accessorUuid
                                })
                            }), 2), u = a[0], n = a[1], void 0 === u || void 0 === n) throw new Error("copyVaultAccess: groupUuids or userUuids undefined");
                        return [4, Promise.all([pub_key_1.getGroupPubKeys(e, u), pub_key_1.getUserPubKeys(e, n)])];
                    case 1:
                        if (i = __read.apply(void 0, [l.sent().map(function(e) {
                                return lodash_es_1.keyBy(e, "uuid")
                            }), 2]), s = i[0], o = i[1], void 0 === s || void 0 === o) throw new Error("copyVaultAccess: groupsByUuid or usersByUuid undefined");
                        return c = r.map(function(e) {
                            return __awaiter(void 0, void 0, void 0, function() {
                                var r;
                                return __generator(this, function(a) {
                                    if (void 0 === (r = "group" === e.accessorType ? s[e.accessorUuid] : o[e.accessorUuid])) throw new Error("accessor not found");
                                    return [2, model.VaultAccess.generate(t, __assign(__assign({}, r), {
                                        accessorType: e.accessorType
                                    }), {
                                        acl: e.acl,
                                        leaseTimeout: e.leaseTimeout
                                    })]
                                })
                            })
                        }), [2, Promise.all(c)]
                }
            })
        })
    },
    partitionMinimumVaultAccess = function(e, t, r) {
        return __awaiter(void 0, void 0, void 0, function() {
            var a, u, n, i, s, o, c, l;
            return __generator(this, function(d) {
                switch (d.label) {
                    case 0:
                        return [4, group_1.getRecoveryGroup(e)];
                    case 1:
                        switch (a = [d.sent()], t) {
                            case model.Vault.TypeProvision:
                                return [3, 2];
                            case model.Vault.TypePersonal:
                                return [3, 4]
                        }
                        return [3, 5];
                    case 2:
                        return n = (u = a).push, [4, provision_1.getProvisionManagersGroup(e).then(function(e) {
                            if (!e) throw new Error("partitionMinimumVaultAccess: Missing provision managers group");
                            return e
                        })];
                    case 3:
                        return n.apply(u, [d.sent()]), [3, 7];
                    case 4:
                        return [3, 7];
                    case 5:
                        return s = (i = a).push, [4, group_1.getOwnersGroup(e)];
                    case 6:
                        return s.apply(i, [d.sent()]), [3, 7];
                    case 7:
                        if (o = [], c = [], r.forEach(function(e) {
                                "group" === e.accessorType && lodash_es_1.some(a, function(t) {
                                    return t && e.accessorUuid === t.uuid
                                }) ? o.push(e) : "user" === e.accessorType && t === model.Vault.TypePersonal ? o.push(e) : c.push(e)
                            }), 2 !== o.length) throw new Error("partitionMinimumVaultAccess: Should have 2 access records, found " + o.map(function(e) {
                            return e.accessorUuid
                        }).join(", ") + " (" + (null === (l = r[0]) || void 0 === l ? void 0 : l.vaultUuid) + ")");
                        return [2, {
                            minimumAccess: o,
                            remainingAccess: c
                        }]
                }
            })
        })
    },
    copyItemsToVault = function(e, t, r) {
        return __awaiter(void 0, void 0, void 0, function() {
            var a;
            return __generator(this, function(u) {
                switch (u.label) {
                    case 0:
                        return [4, tempAllowCreateItem(e, t)];
                    case 1:
                        return a = u.sent(), r.forEach(function(e) {
                            return e.vault = t
                        }), [4, vault_item_1.patchVaultItems(e, r.slice(), t)];
                    case 2:
                        return u.sent(), [4, revertTempAllowCreateItem(e, a)];
                    case 3:
                        return u.sent(), [2]
                }
            })
        })
    },
    tempAllowCreateItem = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, a, u, n;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        if (!(r = e.user)) throw new Error("tempAllowCreateItem: Missing user");
                        return [4, vault_1.getVault(e, t.uuid, {
                            attrs: model.Vault.Attr.All,
                            mustReload: !0
                        })];
                    case 1:
                        return a = i.sent(), ((null !== (n = a.getCombinedAcl()) && void 0 !== n ? n : 0) & model.vaultACL.CreateItem) === model.vaultACL.CreateItem ? [2, {
                            type: "nothing"
                        }] : (u = a.accessList.find(function(e) {
                            return "user" === e.accessorType && e.accessorUuid === r.uuid
                        })) ? [4, api.updatePersonVaultAccessPermissions(e.session, a.uuid, r.uuid, u.acl | model.vaultACL.CreateItem)] : [3, 3];
                    case 2:
                        return i.sent(), [2, {
                            type: "change_user_acl",
                            vaultUuid: a.uuid,
                            userUuid: r.uuid,
                            acl: u.acl
                        }];
                    case 3:
                        return [4, vault_access_1.addAccessorToVaults(e, {
                            accessorType: "user",
                            uuid: r.uuid
                        }, [a], {
                            acl: model.vaultACL.CreateItem
                        })];
                    case 4:
                        return i.sent(), [2, {
                            type: "remove_user",
                            vaultUuid: a.uuid,
                            userUuid: r.uuid
                        }]
                }
            })
        })
    },
    revertTempAllowCreateItem = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(r) {
                switch (t.type) {
                    case "nothing":
                        return [2, void 0];
                    case "change_user_acl":
                        return [2, api.updatePersonVaultAccessPermissions(e.session, t.vaultUuid, t.userUuid, t.acl)];
                    case "remove_user":
                        return [2, api.deleteAccessorFromVault(e.session, t.vaultUuid, t.userUuid, !1)]
                }
                return [2]
            })
        })
    };