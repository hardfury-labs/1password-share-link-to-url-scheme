var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var r, o = 1, t = arguments.length; o < t; o++)
                for (var i in r = arguments[o]) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            return e
        }).apply(this, arguments)
    },
    __awaiter = this && this.__awaiter || function(e, r, o, t) {
        return new(o || (o = Promise))(function(i, n) {
            function s(e) {
                try {
                    u(t.next(e))
                } catch (e) {
                    n(e)
                }
            }

            function c(e) {
                try {
                    u(t.throw(e))
                } catch (e) {
                    n(e)
                }
            }

            function u(e) {
                var r;
                e.done ? i(e.value) : (r = e.value, r instanceof o ? r : new o(function(e) {
                    e(r)
                })).then(s, c)
            }
            u((t = t.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var o, t, i, n, s = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return n = {
            next: c(0),
            throw: c(1),
            return: c(2)
        }, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
            return this
        }), n;

        function c(n) {
            return function(c) {
                return function(n) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (o = 1, t && (i = 2 & n[0] ? t.return : n[0] ? t.throw || ((i = t.return) && i.call(t), 0) : t.next) && !(i = i.call(t, n[1])).done) return i;
                        switch (t = 0, i && (n = [2 & n[0], i.value]), n[0]) {
                            case 0:
                            case 1:
                                i = n;
                                break;
                            case 4:
                                return s.label++, {
                                    value: n[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, t = n[1], n = [0];
                                continue;
                            case 7:
                                n = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === n[0] && (!i || n[1] > i[0] && n[1] < i[3])) {
                                    s.label = n[1];
                                    break
                                }
                                if (6 === n[0] && s.label < i[1]) {
                                    s.label = i[1], i = n;
                                    break
                                }
                                if (i && s.label < i[2]) {
                                    s.label = i[2], s.ops.push(n);
                                    break
                                }
                                i[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        n = r.call(e, s)
                    } catch (e) {
                        n = [6, e], t = 0
                    } finally {
                        o = i = 0
                    }
                    if (5 & n[0]) throw n[1];
                    return {
                        value: n[0] ? n[1] : void 0,
                        done: !0
                    }
                }([n, c])
            }
        }
    },
    __read = this && this.__read || function(e, r) {
        var o = "function" == typeof Symbol && e[Symbol.iterator];
        if (!o) return e;
        var t, i, n = o.call(e),
            s = [];
        try {
            for (;
                (void 0 === r || r-- > 0) && !(t = n.next()).done;) s.push(t.value)
        } catch (e) {
            i = {
                error: e
            }
        } finally {
            try {
                t && !t.done && (o = n.return) && o.call(n)
            } finally {
                if (i) throw i.error
            }
        }
        return s
    };
import {
    keyBy
} from "lodash-es";
import * as api from "../api";
import * as model from "../model";
import * as parser from "../parser";
import * as util from "../util";
import {
    updateAccount
} from "./account";
import {
    generateNewKeysetForGroup,
    getGroup,
    getRecoveryGroup,
    sendGroup
} from "./group";
import {
    findDecryptedKeyset
} from "./keyset";
import {
    getPartialUsersV2
} from "./partial_user";
import {
    replaceProvisionedUserKeyset
} from "./provision";
import {
    getUserPubKeys
} from "./pub_key";
var ProvisionPeople = model.Permission.ProvisionPeople;
export var getCliAffectedProvisionedUsersInfo = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var o, t, i, n, s, c, u, a, d, l;
        return __generator(this, function(p) {
            switch (p.label) {
                case 0:
                    return [4, Promise.all([null !== r && void 0 !== r ? r : api.getProvisionedUsersCreatedByCli(e.session), api.getGroupsCreatedByCli(e.session)])];
                case 1:
                    if (o = __read.apply(void 0, [p.sent(), 2]), t = o[0], i = t.provisionedUsers, n = t.provisionManagersGroupUuid, s = o[1].groups, c = s.filter(function(e) {
                            return model.BitSet.includes(e.permissions, ProvisionPeople)
                        }), !n) {
                        if (c.length > 0) throw new Error("getCliAffectedProvisionedUsersInfo: Expected no groups with provisioning permission but found: " + c.map(function(e) {
                            return e.uuid
                        }).join(", "));
                        if (i.length > 0) throw new Error("getCliAffectedProvisionedUsersInfo: Unexpected provisioned users affected (" + i.length + ") but no provision managers group");
                        return [2, {
                            type: "not_affected",
                            groupUuid: void 0
                        }]
                    }
                    if (!(u = s.find(function(e) {
                            return e.uuid === n
                        }))) return [3, 3];
                    if (1 !== c.length) throw new Error("getCliAffectedProvisionedUsersInfo: Expected one group with provisioning permission but found: " + c.map(function(e) {
                        return e.uuid
                    }).join(", "));
                    if (!model.BitSet.includes(u.permissions, ProvisionPeople)) throw new Error("getCliAffectedProvisionedUsersInfo: Affected provisioning group does not have provisioning permission");
                    return [4, getPartialUsersV2(e, {
                        states: ["T", "3"],
                        limit: 5e3
                    })];
                case 2:
                    if (a = p.sent(), d = a.users, (l = a.totalCount) > d.length) throw new Error("getCliAffectedProvisionedUsersInfo: Too many users: " + l);
                    return [2, {
                        type: "affected_prov_group",
                        users: d,
                        groupUuid: u.uuid,
                        groupName: u.name
                    }];
                case 3:
                    if (c.length > 0) throw new Error("getCliAffectedProvisionedUsersInfo: Expected no groups with provisioning permission but found: " + c.map(function(e) {
                        return e.uuid
                    }).join(", "));
                    return i.length > 0 ? [2, {
                        type: "affected_prov_users",
                        users: i,
                        groupUuid: n
                    }] : [2, {
                        type: "not_affected",
                        groupUuid: n
                    }]
            }
        })
    })
};
var ProvCorrectionEffort = {
    getList: 3,
    fixUser: 3,
    startGroup: 6,
    completeGroup: 5
};
export var getCliProvEffort = function(e) {
    switch (e.type) {
        case "not_affected":
            return 0;
        case "affected_prov_group":
            return 2 * ProvCorrectionEffort.getList + ProvCorrectionEffort.startGroup + ProvCorrectionEffort.fixUser * e.users.length + ProvCorrectionEffort.completeGroup;
        case "affected_prov_users":
            return 2 * ProvCorrectionEffort.getList + ProvCorrectionEffort.fixUser * e.users.length
    }
};
export var correctCliAffectedProvisionedUsers = function(e, r, o) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, i, n, s, c, u, a, d, l, p, f, v, y, h, g, m, w, U, _, P, b, E;
        return __generator(this, function(K) {
            switch (K.label) {
                case 0:
                    return o(0), [4, disableProvisioning(e)];
                case 1:
                    return t = K.sent(), [4, getCliAffectedProvisionedUsersInfo(e)];
                case 2:
                    return "not_affected" !== (i = K.sent()).type ? [3, 5] : t ? [4, reenableProvisioning(e)] : [3, 4];
                case 3:
                    K.sent(), K.label = 4;
                case 4:
                    return o(1), [2, {
                        groupUuid: r.groupUuid,
                        usersToDeprovision: []
                    }];
                case 5:
                    return [4, getGroup(e, i.groupUuid, {
                        attrs: model.Group.Attr.All,
                        mustReload: !0
                    })];
                case 6:
                    return n = K.sent(), s = getCliProvEffort(i), c = 0, o((c += ProvCorrectionEffort.getList) / s), a = function() {
                        o((c += ProvCorrectionEffort.fixUser) / s)
                    }, "affected_prov_group" !== i.type ? [3, 10] : [4, startProvGroupReplacement(e, n)];
                case 7:
                    return d = K.sent(), o((c += ProvCorrectionEffort.startGroup) / s), [4, replaceProvisionedUsersKeysets(e, i.users, d, a)];
                case 8:
                    return l = K.sent().usersToDeprovision, u = {
                        oldGroupUuid: n.uuid,
                        groupUuid: d.uuid,
                        usersToDeprovision: l
                    }, [4, completeProvGroupReplacement(e, n, d)];
                case 9:
                    return K.sent(), o((c += ProvCorrectionEffort.completeGroup) / s), [3, 12];
                case 10:
                    return [4, replaceProvisionedUsersKeysets(e, i.users, n, a)];
                case 11:
                    l = K.sent().usersToDeprovision, u = {
                        groupUuid: n.uuid,
                        usersToDeprovision: l
                    }, K.label = 12;
                case 12:
                    return [4, getCliAffectedProvisionedUsersInfo(e)];
                case 13:
                    if ("affected_prov_group" === (p = K.sent()).type || "affected_prov_users" === p.type && p.users.length !== u.usersToDeprovision.length) throw new Error("correctCliAffectedProvisionedUsers: Work was not completed: " + p.type + ", users: " + p.users.length);
                    return t ? [4, reenableProvisioning(e)] : [3, 15];
                case 14:
                    K.sent(), K.label = 15;
                case 15:
                    if ("affected_prov_group" !== i.type) return [3, 19];
                    if (!u.oldGroupUuid) throw new Error("[check] correctCliAffectedProvisionedUsers: Missing provision managers group result");
                    return [4, getGroup(e, i.groupUuid, {
                        attrs: model.Group.Attr.None,
                        mustReload: !0
                    }).then(function() {
                        throw new Error("[check] correctCliAffectedProvisionedUsers: Old provisioning managers group should be gone (" + i.groupUuid + ").")
                    }, function() {})];
                case 16:
                    return K.sent(), null === (_ = e.account) || void 0 === _ || _.removeGroup(u.groupUuid), [4, getGroup(e, u.groupUuid, {
                        attrs: model.Group.Attr.All,
                        mustReload: !0
                    })];
                case 17:
                    if (f = K.sent(), null === (P = e.account) || void 0 === P || P.pushGroup(f), !f.hasPermission(model.Permission.ProvisionPeople)) throw new Error("[check] correctCliAffectedProvisionedUsers: New provision managers group cannot provision people: " + hex(f.permissions));
                    if (f.permissions !== n.permissions) throw new Error("[check] correctCliAffectedProvisionedUsers: New provision managers group has different permissions: " + hex(n.permissions) + " != " + hex(f.permissions));
                    if (!f.activeKeysetUuid || f.activeKeysetUuid === n.activeKeysetUuid) throw new Error("[check] correctCliAffectedProvisionedUsers: Group keyset did not change: " + f.activeKeysetUuid);
                    if (2 !== f.attrVersion) throw new Error("[check] correctCliAffectedProvisionedUsers: New provision managers group should have attribute version 2, has: " + f.attrVersion + ".");
                    if (!f.recoverableKeyset) throw new Error("[check] correctCliAffectedProvisionedUsers: Missing group's recoverable keyset");
                    if (f.recoverableKeyset.uuid !== f.activeKeysetUuid) throw new Error("[check] correctCliAffectedProvisionedUsers: Incorrect recoverable keyset UUID " + f.recoverableKeyset.uuid + ", expected " + f.activeKeysetUuid);
                    return [4, getRecoveryGroup(e, {
                        attrs: model.Group.Attr.All,
                        mustReload: !0
                    })];
                case 18:
                    if (v = K.sent(), f.recoverableKeyset.encryptedBy !== (null === (b = v.pubKey) || void 0 === b ? void 0 : b.uuid)) throw new Error("[check] correctCliAffectedProvisionedUsers: Recoverable keyset not encrypted by the recovery keyset; " + f.recoverableKeyset.encryptedBy + " != " + (null === (E = v.pubKey) || void 0 === E ? void 0 : E.uuid));
                    if (n.recoveryKeyset) {
                        if (!f.recoveryKeyset) throw new Error("[check] correctCliAffectedProvisionedUsers: Updated group is missing recovery keyset");
                        if (f.recoveryKeyset.uuid !== n.recoveryKeyset.uuid) throw new Error("[check] correctCliAffectedProvisionedUsers: Updated group has incorrect recovery keyset UUID " + f.recoveryKeyset.uuid + ", originally " + n.recoveryKeyset.uuid);
                        if (f.recoveryKeyset.encryptedBy !== f.activeKeysetUuid) throw new Error("[check] correctCliAffectedProvisionedUsers: Updated group has recovery keyset encrypted by the wrong key; " + f.recoveryKeyset.encryptedBy + " != " + f.activeKeysetUuid)
                    } else if (f.recoveryKeyset) throw new Error("[check] correctCliAffectedProvisionedUsers: Updated group should not have recovery keyset");
                    if (y = util.compare.strings(function(e) {
                            return e.vaultUuid
                        }), h = n.vaultAccessList.slice().sort(y), g = f.vaultAccessList.slice().sort(y), h.length !== g.length) throw new Error("[check] correctCliAffectedProvisionedUsers: New provision managers group has incorrect vault access: " + g.length + " != " + h.length);
                    if (h.forEach(function(e, r) {
                            var o = g[r];
                            if (void 0 === o) throw new Error("[check] correctCliAffectedProvisionedUsers: updatedAccess index out of range");
                            if (e.vaultUuid !== o.vaultUuid) throw new Error("[check] correctCliAffectedProvisionedUsers: Mismatched vault UUIDS: " + e.vaultUuid + " !== " + o.vaultUuid);
                            if (e.acl !== o.acl) throw new Error("[check] correctCliAffectedProvisionedUsers: Mismatched vault ACLs: " + e.acl + " !== " + o.acl);
                            if (o.encryptedBy !== f.activeKeysetUuid) throw new Error("[check] correctCliAffectedProvisionedUsers: Access encrypted with wrong key: " + o.encryptedBy + " != " + f.activeKeysetUuid)
                        }), m = util.compare.strings(function(e) {
                            return e.memberUuid
                        }), w = n.memberships.slice().sort(m), U = f.memberships.slice().sort(m), w.length !== U.length) throw new Error("[check] correctCliAffectedProvisionedUsers: New provision managers group has incorrect memberships: " + U.map(function(e) {
                        return e.memberUuid
                    }).join(", ") + " != " + w.map(function(e) {
                        return e.memberUuid
                    }).join(", "));
                    w.forEach(function(e, r) {
                        var o = U[r];
                        if (void 0 === o) throw new Error("[check] correctCliAffectedProvisionedUsers: updatedMemberships index out of range");
                        if (e.memberUuid !== o.memberUuid) throw new Error("[check] correctCliAffectedProvisionedUsers: Mismatched member UUIDS: " + e.memberUuid + " !== " + o.memberUuid);
                        if (e.role !== o.role) throw new Error("[check] correctCliAffectedProvisionedUsers: Mismatched member roles: " + e.role + " !== " + o.role)
                    }), K.label = 19;
                case 19:
                    return o(1), [2, u]
            }
        })
    })
};
var disableProvisioning = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, o, t;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        if (!e.account) throw new Error("disableProvisioning: Missing account");
                        return r = e.account.settings.provisioning, (o = null !== (t = null === r || void 0 === r ? void 0 : r.isEnabled) && void 0 !== t && t) ? (e.account.settings.provisioning = __assign(__assign({}, r), {
                            isEnabled: !1
                        }), [4, updateAccount(e)]) : [3, 2];
                    case 1:
                        i.sent(), i.label = 2;
                    case 2:
                        return [2, o]
                }
            })
        })
    },
    reenableProvisioning = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        if (!e.account) throw new Error("reenableProvisioning: Missing account");
                        return r = e.account.settings.provisioning, e.account.settings.provisioning = __assign(__assign({}, r), {
                            isEnabled: !0
                        }), [4, updateAccount(e)];
                    case 1:
                        return o.sent(), [2]
                }
            })
        })
    },
    replaceProvisionedUsersKeysets = function(e, r, o, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var i;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return i = function(r) {
                            return replaceProvisionedUserKeyset(e, r, o).then(function(e) {
                                return t(), __assign(__assign({}, e), {
                                    user: r
                                })
                            })
                        }, [4, util.batchPromiseAll(i, 5, r)];
                    case 1:
                        return [2, {
                            usersToDeprovision: n.sent().filter(function(e) {
                                return "cannot_decrypt" === e.type
                            }).map(function(e) {
                                return e.user
                            })
                        }]
                }
            })
        })
    },
    startProvGroupReplacement = function(e, r) {
        return __awaiter(void 0, void 0, void 0, function() {
            var o, t, i, n, s;
            return __generator(this, function(c) {
                switch (c.label) {
                    case 0:
                        if (!e.user) throw new Error("startProvGroupReplacement: Missing current user");
                        if (!r.hasPermission(ProvisionPeople)) throw new Error("startProvGroupReplacement: Existing provisioning group does not have permission to provision people: " + hex(r.permissions));
                        return o = new model.Group({
                            name: r.name,
                            type: model.Group.TypeReplacement,
                            desc: r.desc,
                            avatar: r.avatar
                        }), [4, Promise.all([__awaiter(void 0, void 0, void 0, function() {
                            var r;
                            return __generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, getRecoveryGroup(e, {
                                            attrs: model.Group.Attr.PubKey
                                        })];
                                    case 1:
                                        return r = t.sent(), [2, generateNewKeysetForGroup(e, o, r)]
                                }
                            })
                        }), __awaiter(void 0, void 0, void 0, function() {
                            var o, t;
                            return __generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return o = r.memberships.map(function(e) {
                                            return e.memberUuid
                                        }), t = keyBy, [4, getUserPubKeys(e, o)];
                                    case 1:
                                        return [2, t.apply(void 0, [i.sent(), "uuid"])]
                                }
                            })
                        })])];
                    case 1:
                        return t = __read.apply(void 0, [c.sent(), 2]), i = t[0], n = t[1], [4, copyOverRecoveryKeyset(e, r, o)];
                    case 2:
                        return c.sent(), [4, Promise.all(r.memberships.map(function(e) {
                            return __awaiter(void 0, void 0, void 0, function() {
                                var r;
                                return __generator(this, function(t) {
                                    if (!(r = n[e.memberUuid])) throw new Error("startProvGroupReplacement: Missing public key for user " + e.memberUuid);
                                    return [2, o.addMembership(i, r, {
                                        role: e.role
                                    })]
                                })
                            })
                        }))];
                    case 3:
                        return c.sent(), [4, sendGroup(e, o)];
                    case 4:
                        return s = c.sent(), [4, copyVaultAccessToGroup(e, s, r.vaultAccessList)];
                    case 5:
                        return c.sent(), [2, getGroup(e, s, {
                            attrs: model.Group.Attr.All,
                            mustReload: !0
                        })]
                }
            })
        })
    },
    copyOverRecoveryKeyset = function(e, r, o) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, i;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        if (!r.recoveryKeyset) return [2];
                        if (r.recoveryKeyset.encSymKey.kid !== r.activeKeysetUuid) throw new Error("copyOverRecoveryKeyset: Recovery keyset not encrypted by current provisioning manager group's active keyset: " + r.recoveryKeyset.encSymKey.kid + " != " + r.activeKeysetUuid);
                        if (!(t = findDecryptedKeyset(e, r.activeKeysetUuid))) throw new Error("copyOverRecoveryKeyset: Missing existing provisioning manager group key set");
                        return [4, model.Keyset.decryptWithKeyset(t, r.recoveryKeyset)];
                    case 1:
                        return i = n.sent(), [4, o.enableRecoverCapability(i)];
                    case 2:
                        return n.sent(), [2]
                }
            })
        })
    },
    completeProvGroupReplacement = function(e, r, o) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        if (!r.hasPermission(ProvisionPeople)) throw new Error("completeProvGroupReplacement: Existing provisioning group does not have permission to provision people: " + hex(r.permissions));
                        if (o.hasPermission(ProvisionPeople)) throw new Error("completeProvGroupReplacement: New provisioning group already has permission to provision people: " + hex(o.permissions));
                        return [4, api.replaceGroup(e.session, {
                            oldUuid: r.uuid,
                            newUuid: o.uuid
                        })];
                    case 1:
                        return i.sent(), null === (t = e.account) || void 0 === t || t.removeGroup(r.uuid), [2]
                }
            })
        })
    },
    copyVaultAccessToGroup = function(e, r, o) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, i;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        if (!r.pubKey) throw new Error("copyVaultAccessToGroup: Missing pubKey for group " + r.uuid);
                        return t = r.pubKey, i = function(o) {
                            return __awaiter(void 0, void 0, void 0, function() {
                                var i, n, s;
                                return __generator(this, function(c) {
                                    switch (c.label) {
                                        case 0:
                                            if (!o.vaultKey) throw new Error("copyVaultAccessToGroup: Missing vault key for vault " + o.vaultUuid);
                                            return [4, o.vaultKey.encryptWithKey(t)];
                                        case 1:
                                            return i = c.sent(), (n = new model.VaultAccess({
                                                vaultUuid: o.vaultUuid,
                                                accessorType: "group",
                                                accessorUuid: r.uuid,
                                                vaultKeySN: o.vaultKeySN,
                                                encVaultKey: i,
                                                encryptedBy: i.kid,
                                                acl: o.acl,
                                                leaseTimeout: o.leaseTimeout
                                            })).vaultKey = o.vaultKey, s = parser.vaultAccessToAPI(n), [2, api.addVaultAccess(e.session, s.vaultUuid, [s])]
                                    }
                                })
                            })
                        }, [4, util.batchPromiseAll(i, 5, o)];
                    case 1:
                        return n.sent(), [2]
                }
            })
        })
    },
    hex = function(e) {
        return "0x" + e.toString(16)
    };