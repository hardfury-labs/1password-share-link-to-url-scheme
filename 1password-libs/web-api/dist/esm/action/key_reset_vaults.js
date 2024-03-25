var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e
        }).apply(this, arguments)
    },
    __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(a, u) {
            function i(e) {
                try {
                    o(n.next(e))
                } catch (e) {
                    u(e)
                }
            }

            function s(e) {
                try {
                    o(n.throw(e))
                } catch (e) {
                    u(e)
                }
            }

            function o(e) {
                var t;
                e.done ? a(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(i, s)
            }
            o((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, a, u, i = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return u = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
            return this
        }), u;

        function s(u) {
            return function(s) {
                return function(u) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (r = 1, n && (a = 2 & u[0] ? n.return : u[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, u[1])).done) return a;
                        switch (n = 0, a && (u = [2 & u[0], a.value]), u[0]) {
                            case 0:
                            case 1:
                                a = u;
                                break;
                            case 4:
                                return i.label++, {
                                    value: u[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, n = u[1], u = [0];
                                continue;
                            case 7:
                                u = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = i.trys).length > 0 && a[a.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === u[0] && (!a || u[1] > a[0] && u[1] < a[3])) {
                                    i.label = u[1];
                                    break
                                }
                                if (6 === u[0] && i.label < a[1]) {
                                    i.label = a[1], a = u;
                                    break
                                }
                                if (a && i.label < a[2]) {
                                    i.label = a[2], i.ops.push(u);
                                    break
                                }
                                a[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        u = t.call(e, i)
                    } catch (e) {
                        u = [6, e], n = 0
                    } finally {
                        r = a = 0
                    }
                    if (5 & u[0]) throw u[1];
                    return {
                        value: u[0] ? u[1] : void 0,
                        done: !0
                    }
                }([u, s])
            }
        }
    },
    __read = this && this.__read || function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, a, u = r.call(e),
            i = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(n = u.next()).done;) i.push(n.value)
        } catch (e) {
            a = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (r = u.return) && r.call(u)
            } finally {
                if (a) throw a.error
            }
        }
        return i
    },
    __spread = this && this.__spread || function() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(__read(arguments[t]));
        return e
    };
import {
    isEqual,
    keyBy,
    omit,
    partition,
    some
} from "lodash-es";
import {
    unparse
} from "papaparse";
import * as api from "../api";
import * as model from "../model";
import * as parser from "../parser";
import * as util from "../util";
import {
    batchChain
} from "../util";
import {
    getOwnersGroup,
    getRecoveryGroup
} from "./group";
import {
    getProvisionManagersGroup
} from "./provision";
import {
    getGroupPubKeys,
    getUserPubKeys
} from "./pub_key";
import {
    getPersonalVault,
    getVault,
    replaceVaultInCache,
    sendVault,
    updateVaultClientAccess
} from "./vault";
import {
    addAccessorToVaults
} from "./vault_access";
import {
    getVaultItems,
    patchVaultItems
} from "./vault_item";
var VaultCorrectionEffort = {
    getList: 1,
    fixOne: 50
};
export var getCliVaultEffort = function(e) {
    return 0 === e.length ? 0 : 2 * VaultCorrectionEffort.getList + VaultCorrectionEffort.fixOne * e.length
};
export var correctCliAffectedVaults = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, n, a, u, i, s, o, c, l, d, f, p, v, h;
        return __generator(this, function(m) {
            switch (m.label) {
                case 0:
                    return t(0), [4, api.getVaultsCreatedByCli(e.session)];
                case 1:
                    return 0 === (r = m.sent().vaults).length ? (t(1), [2, {
                        succeeded: {},
                        succeededCsv: void 0
                    }]) : (n = getCliVaultEffort(r), a = 0, t((a += VaultCorrectionEffort.getList) / n), [4, util.batchPromiseAll(function(r) {
                        return __awaiter(void 0, void 0, void 0, function() {
                            return __generator(this, function(u) {
                                return [2, replaceVault(e, function() {
                                    t((a += VaultCorrectionEffort.fixOne) / n)
                                })(r).then(function(e) {
                                    return {
                                        type: "success",
                                        result: e
                                    }
                                }, function(t) {
                                    return __awaiter(void 0, void 0, void 0, function() {
                                        return __generator(this, function(n) {
                                            switch (n.label) {
                                                case 0:
                                                    return [4, api.unlockVault(e.session)(r.uuid)];
                                                case 1:
                                                    return n.sent(), [2, {
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
                    if (u = m.sent(), i = __read(partition(u, function(e) {
                            return "success" === e.type
                        }), 2), s = i[0], o = i[1], c = s.reduce(function(e, t) {
                            var r, n = t.result;
                            return __assign(__assign({}, e), ((r = {})[n.oldUuid] = n.newUuid, r))
                        }, {}), l = getReplacedVaultUuidsCsv(s.map(function(e) {
                            return e.result
                        })), (d = o.map(function(e) {
                            return e.error
                        })).length > 0) return [2, {
                        succeeded: c,
                        succeededCsv: l,
                        errors: d
                    }];
                    m.label = 3;
                case 3:
                    return m.trys.push([3, 5, , 6]), [4, api.getVaultsCreatedByCli(e.session)];
                case 4:
                    if (f = m.sent(), p = f.vaults, v = f.hasVaultsInStateT, 0 !== p.length) throw new Error("[check] correctCliAffectedVaults: Some vaults have not been replaced: " + p.map(function(e) {
                        return e.uuid
                    }).join(", "));
                    if (v) throw new Error("[check] correctCliAffectedVaults: Some provisioned users' vaults have not been replaced");
                    return t(1), [3, 6];
                case 5:
                    return h = m.sent(), [2, {
                        succeeded: c,
                        succeededCsv: l,
                        errors: [h.toString()]
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
var getReplacedVaultUuidsCsv = function(e) {
    if (e.length > 0) {
        var t = __spread([
                ["Old Vault IDs", "New Vault IDs"]
            ], e.map(function(e) {
                return [e.oldUuid, e.newUuid]
            })),
            r = unparse(t, {
                newline: "\n"
            });
        return new Blob([r], {
            type: "text/csv"
        })
    }
};
export var getCliAffectedPrivateVaultStatus = function(e) {
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
export var getCliPrivateVaultEffort = function(e) {
    return e ? 2 * VaultCorrectionEffort.getList + VaultCorrectionEffort.fixOne : 0
};
export var correctCliAffectedPrivateVault = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, n, a, u, i;
        return __generator(this, function(s) {
            switch (s.label) {
                case 0:
                    return t(0), [4, api.getCliAffectedPrivateVaultStatus(e.session)];
                case 1:
                    return (r = s.sent().isCreatedByCli) ? (n = getCliPrivateVaultEffort(r), a = 0, t((a += VaultCorrectionEffort.getList) / n), [4, getPersonalVault(e)]) : (t(1), [2, void 0]);
                case 2:
                    if (!(u = s.sent())) throw new Error("correctCliAffectedPrivateVault: Missing private vault");
                    return [4, replaceVault(e, function() {
                        t((a += VaultCorrectionEffort.fixOne) / n)
                    })(u).catch(function(t) {
                        return __awaiter(void 0, void 0, void 0, function() {
                            return __generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, api.unlockVault(e.session)(u.uuid)];
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
var replaceVault = function(e, t) {
        return function(r) {
            return __awaiter(void 0, void 0, void 0, function() {
                var n, a, u, i, s, o, c, l, d, f, p, v, h, m, w, g, _, V, y, A;
                return __generator(this, function(C) {
                    switch (C.label) {
                        case 0:
                            return n = util.getValidVaultUuid(r), [4, api.lockVault(e.session)(n)];
                        case 1:
                            return C.sent(), [4, getVault(e, n, {
                                attrs: model.Vault.Attr.All,
                                mustReload: !0
                            })];
                        case 2:
                            return a = C.sent(), (u = a.accessList.filter(function(e) {
                                return model.vaultACL.isEffectivelyZero(e.acl)
                            }).map(function(e) {
                                return {
                                    uuid: e.accessorUuid,
                                    accessorType: e.accessorType
                                }
                            })).length > 0 ? [4, api.unlockVault(e.session)(n)] : [3, 7];
                        case 3:
                            return C.sent(), [4, util.batchPromiseAll(function(t) {
                                return api.deleteAccessorFromVault(e.session, n, t.uuid, "group" === t.accessorType)
                            }, 5, u)];
                        case 4:
                            return C.sent(), [4, api.lockVault(e.session)(n)];
                        case 5:
                            return C.sent(), [4, getVault(e, n, {
                                attrs: model.Vault.Attr.All,
                                mustReload: !0
                            })];
                        case 6:
                            a = C.sent(), C.label = 7;
                        case 7:
                            return i = a.getAttrs(), s = a.activeItemCount, o = __read(getSortedAccessLists(a), 2), c = o[0], l = o[1], [4, getVaultItems(e, a)];
                        case 8:
                            return d = C.sent(), [4, duplicateVault(e, a)];
                        case 9:
                            return f = C.sent(), p = null === (V = f.activeKey) || void 0 === V ? void 0 : V.uuid, [4, copyItemsToVault(e, f, d)];
                        case 10:
                            return C.sent(), f.type = a.type, [4, f.encryptAttrs()];
                        case 11:
                            return C.sent(), v = parser.vaultToAPI(f), [4, api.replaceVault(e.session, {
                                oldUuid: n,
                                newVault: v
                            })];
                        case 12:
                            return C.sent(), replaceVaultInCache(e, a, f), [4, getVault(e, n, {
                                mustReload: !0
                            }).then(function() {
                                throw new Error("[check] replaceVault: Old vault should be gone")
                            }, function() {})];
                        case 13:
                            return C.sent(), [4, getVault(e, v.uuid, {
                                attrs: model.Vault.Attr.Accessors,
                                mustReload: !0
                            }).catch(function() {
                                throw new Error("[check] replaceVault: Should have new vault")
                            })];
                        case 14:
                            if (h = C.sent(), !isEqual(omit(i, "uuid"), omit(h.getAttrs(), "uuid"))) throw new Error("[check] replaceVault: New vault attrs are not the same (" + i.uuid + " and " + h.uuid + ")");
                            if (2 !== h.attrVersion) throw new Error("[check] replaceVault: New vault's attr version should be 2, was: " + h.attrVersion);
                            if (s !== h.activeItemCount) throw new Error("[check] replaceVault: New vault has incorrect item count: " + s + " !== " + h.activeItemCount);
                            if ((null === (y = h.activeKey) || void 0 === y ? void 0 : y.uuid) !== p) throw new Error("[check] replaceVault: New vault has wrong active key: " + (null === (A = h.activeKey) || void 0 === A ? void 0 : A.uuid) + " !== " + p);
                            return [4, api.lockVault(e.session)(h.uuid)];
                        case 15:
                            return C.sent(), [4, api.getVaultItems(e.session, h.uuid, 0)];
                        case 16:
                            return m = C.sent().items, [4, api.unlockVault(e.session)(h.uuid)];
                        case 17:
                            if (C.sent(), h.activeItemCount > 0 && (!m || 0 === m.length)) throw new Error("[check] replaceVault: Missing vault items: " + h.activeItemCount + " in " + h.uuid);
                            return m ? [4, Promise.all(m.map(function(e) {
                                return __awaiter(void 0, void 0, void 0, function() {
                                    var t, r;
                                    return __generator(this, function(n) {
                                        if (e.encOverview.kid !== p) throw new Error("[check] replaceVault: Overview encrypted with wrong key: " + e.encOverview.kid + " !== " + p + " (" + h.uuid + "/" + e.uuid + ")");
                                        if ((null === (t = e.encDetails) || void 0 === t ? void 0 : t.kid) !== p) throw new Error("[check] replaceVault: Details encrypted with wrong key: " + (null === (r = e.encDetails) || void 0 === r ? void 0 : r.kid) + " !== " + p + " (" + h.uuid + "/" + e.uuid + ")");
                                        return [2, parser.vaultItemFromAPI(e, h)]
                                    })
                                })
                            }))] : [3, 19];
                        case 18:
                            C.sent(), C.label = 19;
                        case 19:
                            if (w = __read(getSortedAccessLists(h), 2), g = w[0], _ = w[1], c.length !== g.length) throw new Error("[check] replaceVault: New vault has incorrect group vault access: " + c.length + " !== " + g.length + " (" + h.uuid + ")");
                            if (c.forEach(function(e, t) {
                                    var r = g[t];
                                    if (void 0 === r) throw new Error("[check] replaceVault: newGroupAccess index out of range");
                                    if (e.accessorUuid !== r.accessorUuid) throw new Error("[check] replaceVault: Mismatched group UUIDS: " + e.accessorUuid + " !== " + r.accessorUuid + " (" + h.uuid + ")");
                                    if (e.acl !== r.acl) throw new Error("[check] replaceVault: Mismatched vault ACLs: " + e.acl + " !== " + r.acl + " (" + h.uuid + ", " + e.accessorUuid + ")")
                                }), l.length !== _.length) throw new Error("[check] replaceVault: New vault has incorrect user vault access: " + l.length + " !== " + _.length + " (" + h.uuid + ")");
                            return l.forEach(function(e, t) {
                                var r = _[t];
                                if (void 0 === r) throw new Error("[check] replaceVault: newUserAccess index out of range");
                                if (e.accessorUuid !== r.accessorUuid) throw new Error("[check] replaceVault: Mismatched user UUIDS: " + e.accessorUuid + " !== " + r.accessorUuid + " (" + h.uuid + ")");
                                if (e.acl !== r.acl) throw new Error("[check] replaceVault: Mismatched vault ACLs: " + e.acl + " !== " + r.acl + " (" + h.uuid + ", " + e.accessorUuid + ")")
                            }), t(), [2, {
                                oldUuid: n,
                                newUuid: v.uuid
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
            r = __read(partition(e.accessList, function(e) {
                return "group" === e.accessorType
            }), 2),
            n = r[0],
            a = r[1];
        return n.sort(t), a.sort(t), [n, a]
    },
    duplicateVault = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, n, a, u, i, s, o;
            return __generator(this, function(c) {
                switch (c.label) {
                    case 0:
                        return [4, (r = new model.Vault({
                            name: t.name,
                            type: model.Vault.TypeReplacement,
                            desc: t.desc,
                            avatar: t.avatar,
                            defaultAcl: t.defaultAcl
                        })).generateNewKey()];
                    case 1:
                        return c.sent(), [4, copyVaultAccess(e, r, t.accessList)];
                    case 2:
                        return n = c.sent(), [4, partitionMinimumVaultAccess(e, t.type, n)];
                    case 3:
                        return a = c.sent(), u = a.minimumAccess, i = a.remainingAccess, [4, sendVault(e, r, u)];
                    case 4:
                        return c.sent(), (s = i.map(parser.vaultAccessToAPI)).length > 0 ? [4, batchChain(function(t) {
                            return __awaiter(void 0, void 0, void 0, function() {
                                return __generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, api.addVaultAccess(e.session, r.uuid, t)];
                                        case 1:
                                            return n.sent(), [2, []]
                                    }
                                })
                            })
                        }, 100, s)] : [3, 6];
                    case 5:
                        c.sent(), c.label = 6;
                    case 6:
                        return null !== (o = e.account) && void 0 !== o && o.hasFeature.clientVaultAccess && t.type !== model.Vault.TypePersonal ? [4, updateVaultClientAccess(e, r.uuid, t.clientAccess)] : [3, 8];
                    case 7:
                        return c.sent(), [3, 10];
                    case 8:
                        return model.BitSet.includes(t.clientAccess, model.VaultClientAccess.Travel) ? [4, api.enableTravelSafe(e.session, r.uuid)] : [3, 10];
                    case 9:
                        c.sent(), c.label = 10;
                    case 10:
                        return [2, r]
                }
            })
        })
    },
    copyVaultAccess = function(e, t, r) {
        return __awaiter(void 0, void 0, void 0, function() {
            var n, a, u, i, s, o, c;
            return __generator(this, function(l) {
                switch (l.label) {
                    case 0:
                        if (n = __read(partition(r, function(e) {
                                return "group" === e.accessorType
                            }).map(function(e) {
                                return e.map(function(e) {
                                    return e.accessorUuid
                                })
                            }), 2), a = n[0], u = n[1], void 0 === a || void 0 === u) throw new Error("copyVaultAccess: groupUuids or userUuids undefined");
                        return [4, Promise.all([getGroupPubKeys(e, a), getUserPubKeys(e, u)])];
                    case 1:
                        if (i = __read.apply(void 0, [l.sent().map(function(e) {
                                return keyBy(e, "uuid")
                            }), 2]), s = i[0], o = i[1], void 0 === s || void 0 === o) throw new Error("copyVaultAccess: groupsByUuid or usersByUuid undefined");
                        return c = r.map(function(e) {
                            return __awaiter(void 0, void 0, void 0, function() {
                                var r;
                                return __generator(this, function(n) {
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
            var n, a, u, i, s, o, c, l;
            return __generator(this, function(d) {
                switch (d.label) {
                    case 0:
                        return [4, getRecoveryGroup(e)];
                    case 1:
                        switch (n = [d.sent()], t) {
                            case model.Vault.TypeProvision:
                                return [3, 2];
                            case model.Vault.TypePersonal:
                                return [3, 4]
                        }
                        return [3, 5];
                    case 2:
                        return u = (a = n).push, [4, getProvisionManagersGroup(e).then(function(e) {
                            if (!e) throw new Error("partitionMinimumVaultAccess: Missing provision managers group");
                            return e
                        })];
                    case 3:
                        return u.apply(a, [d.sent()]), [3, 7];
                    case 4:
                        return [3, 7];
                    case 5:
                        return s = (i = n).push, [4, getOwnersGroup(e)];
                    case 6:
                        return s.apply(i, [d.sent()]), [3, 7];
                    case 7:
                        if (o = [], c = [], r.forEach(function(e) {
                                "group" === e.accessorType && some(n, function(t) {
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
            var n;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        return [4, tempAllowCreateItem(e, t)];
                    case 1:
                        return n = a.sent(), r.forEach(function(e) {
                            return e.vault = t
                        }), [4, patchVaultItems(e, r.slice(), t)];
                    case 2:
                        return a.sent(), [4, revertTempAllowCreateItem(e, n)];
                    case 3:
                        return a.sent(), [2]
                }
            })
        })
    },
    tempAllowCreateItem = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, n, a, u;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        if (!(r = e.user)) throw new Error("tempAllowCreateItem: Missing user");
                        return [4, getVault(e, t.uuid, {
                            attrs: model.Vault.Attr.All,
                            mustReload: !0
                        })];
                    case 1:
                        return n = i.sent(), ((null !== (u = n.getCombinedAcl()) && void 0 !== u ? u : 0) & model.vaultACL.CreateItem) === model.vaultACL.CreateItem ? [2, {
                            type: "nothing"
                        }] : (a = n.accessList.find(function(e) {
                            return "user" === e.accessorType && e.accessorUuid === r.uuid
                        })) ? [4, api.updatePersonVaultAccessPermissions(e.session, n.uuid, r.uuid, a.acl | model.vaultACL.CreateItem)] : [3, 3];
                    case 2:
                        return i.sent(), [2, {
                            type: "change_user_acl",
                            vaultUuid: n.uuid,
                            userUuid: r.uuid,
                            acl: a.acl
                        }];
                    case 3:
                        return [4, addAccessorToVaults(e, {
                            accessorType: "user",
                            uuid: r.uuid
                        }, [n], {
                            acl: model.vaultACL.CreateItem
                        })];
                    case 4:
                        return i.sent(), [2, {
                            type: "remove_user",
                            vaultUuid: n.uuid,
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