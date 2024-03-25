var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var r, t = 1, o = arguments.length; t < o; t++)
                for (var u in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, u) && (e[u] = r[u]);
            return e
        }).apply(this, arguments)
    },
    __awaiter = this && this.__awaiter || function(e, r, t, o) {
        return new(t || (t = Promise))(function(u, n) {
            function i(e) {
                try {
                    a(o.next(e))
                } catch (e) {
                    n(e)
                }
            }

            function s(e) {
                try {
                    a(o.throw(e))
                } catch (e) {
                    n(e)
                }
            }

            function a(e) {
                var r;
                e.done ? u(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(i, s)
            }
            a((o = o.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, o, u, n, i = {
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
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (t = 1, o && (u = 2 & n[0] ? o.return : n[0] ? o.throw || ((u = o.return) && u.call(o), 0) : o.next) && !(u = u.call(o, n[1])).done) return u;
                        switch (o = 0, u && (n = [2 & n[0], u.value]), n[0]) {
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
                                i.label++, o = n[1], n = [0];
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
                        n = r.call(e, i)
                    } catch (e) {
                        n = [6, e], o = 0
                    } finally {
                        t = u = 0
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
    __read = this && this.__read || function(e, r) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var o, u, n = t.call(e),
            i = [];
        try {
            for (;
                (void 0 === r || r-- > 0) && !(o = n.next()).done;) i.push(o.value)
        } catch (e) {
            u = {
                error: e
            }
        } finally {
            try {
                o && !o.done && (t = n.return) && t.call(n)
            } finally {
                if (u) throw u.error
            }
        }
        return i
    },
    __spread = this && this.__spread || function() {
        for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(__read(arguments[r]));
        return e
    };
import {
    cloneDeep,
    keyBy,
    omit
} from "lodash-es";
import * as api from "../api";
import * as model from "../model";
import * as parser from "../parser";
import * as util from "../util";
import {
    errorHandler as eh
} from "../util/error_handler";
import {
    debouncePromise,
    makePromise as mp
} from "../util/make_promise";
import {
    changed,
    invalidateCache
} from "./context";
import {
    findDecryptedKeyset,
    refreshKeysets,
    saveDecryptedKeysets
} from "./keyset";
import {
    getUserPubKeys
} from "./pub_key";
var codeLocation = "action/group",
    errorHandler = eh(codeLocation),
    makePromise = mp(codeLocation),
    defaultGetGroupOptions = {
        attrs: model.Group.Attr.None,
        mustReload: !1
    };
export var getGroups = function(e) {
    return makePromise("getGroups", function() {
        return e.account ? Promise.resolve(e.account.groups) : Promise.reject(new Error("Missing account"))
    })
};
export var getGroup = function(e, r, t) {
    return makePromise("getGroup", function() {
        var o = util.getValidGroupUuid(r);
        if (!o) throw new Error("Invalid group reference");
        var u = __assign(__assign({}, defaultGetGroupOptions), t),
            n = u.attrs,
            i = u.mustReload,
            s = e.account && e.account.findGroup(o);
        return s && !i && s.hasAttrMask(n) ? s : api.getGroup(e.session, o, n).then(function(r) {
            return parser.parseGroup(e, r, n, s)
        })
    })
};
export var getRecoveryGroup = function(e, r) {
    return Promise.resolve().then(function() {
        var t = e.account && e.account.recoveryGroup;
        if (!t) throw new Error("Missing recovery group");
        return getGroup(e, t, r)
    }).catch(errorHandler("getRecoveryGroup"))
};
export var getAdministratorsGroup = function(e, r) {
    return Promise.resolve().then(function() {
        var t = e.account && e.account.administratorsGroup;
        if (!t) throw new Error("Missing administrators group");
        return getGroup(e, t, r)
    }).catch(errorHandler("getAdministratorsGroup"))
};
export var getOwnersGroup = function(e, r) {
    return Promise.resolve().then(function() {
        var t = e.account && e.account.ownersGroup;
        if (!t) throw new Error("Missing owners group");
        return getGroup(e, t, r)
    }).catch(errorHandler("getOwnersGroup"))
};
export var getTeamMembersGroup = function(e, r) {
    return Promise.resolve().then(function() {
        var t = e.account && e.account.teamMembersGroup;
        if (!t) throw new Error("Missing members group");
        return getGroup(e, t, r)
    }).catch(errorHandler("getTeamMembersGroup"))
};
export var generateNewKeysetForGroup = function(e, r, t) {
    return makePromise("generateNewKeysetForGroup", function() {
        return model.Keyset.generateWithoutSigningKeys().then(function(o) {
            return saveDecryptedKeysets(e, [o]), Promise.resolve().then(function() {
                if (r.activeKeysetUuid) {
                    var t = findDecryptedKeyset(e, r.activeKeysetUuid);
                    return t ? (o.sn = t.sn + 1, t.encryptWithKey(o.symKey).then(function(e) {
                        r.archivedKeysets = __spread([e], r.archivedKeysets)
                    })) : Promise.reject(new Error("Missing current active keyset."))
                }
                return o.sn = 1, Promise.resolve()
            }).then(function() {
                return o.ekeyPair.pubKey ? (r.pubKey = o.ekeyPair.pubKey, r.activeKeysetUuid = o.uuid, r.enableKeysetRecovery(o, t)) : Promise.reject(new Error("Missing public key."))
            }).then(function() {
                return o
            })
        })
    })
};
export var createGroup = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, o, u;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return t = new model.Group(r), [4, getRecoveryGroup(e, {
                        attrs: model.Group.Attr.PubKey
                    })];
                case 1:
                    return o = n.sent(), [4, generateNewKeysetForGroup(e, t, o)];
                case 2:
                    return u = n.sent(), e.user ? [4, t.addMembership(u, e.user, {
                        role: api.GroupMembership.Role.Manager
                    })] : [2, Promise.reject(new Error("Missing user"))];
                case 3:
                    return n.sent(), [4, sendGroup(e, t)];
                case 4:
                    return [2, n.sent()]
            }
        })
    })
};
export var sendGroup = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, o;
        return __generator(this, function(u) {
            switch (u.label) {
                case 0:
                    return t = parser.groupToAPI(r, model.Group.Attr.All), [4, api.createGroup(e.session, t)];
                case 1:
                    return u.sent(), e.account && e.account.pushGroup(r), e.user && (o = r.getMembership(e.user.uuid)) && e.user.pushGroupMembership(o), [2, r]
            }
        })
    })
};
export var deleteGroup = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
                case 0:
                    return [4, api.deleteGroup(e.session, r.uuid)];
                case 1:
                    return t.sent(), invalidateCache(e), e.account && e.account.removeGroup(r), [2]
            }
        })
    })
};
export var markGroupReadyForPurging = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
                case 0:
                    return [4, api.markGroupReadyForPurging(e.session, r.uuid)];
                case 1:
                    return t.sent(), invalidateCache(e), e.account && e.account.removeGroup(r), [2]
            }
        })
    })
};
export var updateGroup = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(o) {
            switch (o.label) {
                case 0:
                    return [4, getGroup(e, r)];
                case 1:
                    return (t = o.sent()) !== r && e.account && (e.account.removeGroup(t), e.account.pushGroup(r), console.warn(new Error("Stale group reference."))), [4, api.updateGroup(e.session, parser.groupToAPI(r, model.Group.Attr.None))];
                case 2:
                    return o.sent(), r.attrVersion++, changed(e), [2]
            }
        })
    })
};
export var getRecoveryKeyset = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r;
        return __generator(this, function(t) {
            switch (t.label) {
                case 0:
                    return [4, getRecoveryGroup(e)];
                case 1:
                    if (!(r = t.sent()).activeKeysetUuid) throw new Error("Missing group's active keyset UUID.");
                    return [2, findDecryptedKeyset(e, r.activeKeysetUuid)]
            }
        })
    })
};
export var updateGroupPermissions = function(e, r, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var o;
        return __generator(this, function(u) {
            switch (u.label) {
                case 0:
                    return [4, getGroup(e, r)];
                case 1:
                    return r = u.sent(), !model.BitSet.includesAny(t, model.RecoveryKeysetPermissions) || r.recoveryKeyset ? [3, 4] : [4, getRecoveryKeyset(e)];
                case 2:
                    if (!(o = u.sent())) throw new Error("Failed to find Recovery keyset");
                    return [4, addRecoveryKeysetToGroup(e, r, o)];
                case 3:
                    u.sent(), u.label = 4;
                case 4:
                    return r.permissions = t, [4, api.updateGroupPermissions(e.session, r.uuid, t)];
                case 5:
                    return u.sent(), [2, r]
            }
        })
    })
};
export var addRecoveryKeysetToGroup = function(e, r, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var o, u;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, getGroup(e, r, {
                        attrs: model.Group.Attr.PubKey
                    })];
                case 1:
                    if (!(r = n.sent()).pubKey) throw new Error("Missing group's public key");
                    return [4, t.encryptWithKey(r.pubKey)];
                case 2:
                    return o = n.sent(), r.recoveryKeyset = o, u = parser.groupToAPI(r, model.Group.Attr.None), [4, api.addRecoveryKeysetToGroup(e.session, u)];
                case 3:
                    return n.sent(), [2, r]
            }
        })
    })
};
export var replaceGroupKeysets = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, o, u, n, i, s, a, c, p, d, l, y, v, h, f, m, g, w, K, b, G, _, k, U, P, E, M, A;
        return __generator(this, function(x) {
            switch (x.label) {
                case 0:
                    return t = util.getValidGroupUuid(r), [4, Promise.all([getGroup(e, t, {
                        attrs: model.Group.Attr.All,
                        mustReload: !0
                    }), getRecoveryGroup(e, {
                        attrs: model.Group.Attr.PubKey
                    })])];
                case 1:
                    return o = __read.apply(void 0, [x.sent(), 2]), u = o[0], n = o[1], e.account && (e.account.removeGroup(t), e.account.pushGroup(u)), [4, Promise.all([util.batchChain(getGroupMemberPubKeys(e), 10, u.memberships), model.Keyset.generateWithoutSigningKeys()])];
                case 2:
                    return i = __read.apply(void 0, [x.sent(), 2]), s = i[0], a = i[1], [4, getActiveKeysetForGroup(e, u)];
                case 3:
                    if (!(c = x.sent())) throw new Error("replaceGroupKeysets: Missing current active keyset for group " + u.uuid);
                    if (a.sn = c.sn + 1, !a.ekeyPair.pubKey) throw new Error("replaceGroupKeysets: Missing public key in new group keyset (group " + u.uuid + ")");
                    return u.pubKey = a.ekeyPair.pubKey, u.activeKeysetUuid = a.uuid, [4, u.enableKeysetRecovery(a, n)];
                case 4:
                    if (x.sent(), !(p = u.hasPermission(model.Permission.Recover) && u.recoveryKeyset)) return [3, 6];
                    if (!(null === (P = n.pubKey) || void 0 === P ? void 0 : P.uuid)) throw new Error("replaceGroupKeysets: Missing recovery public key (group " + u.uuid + ")");
                    if (p.uuid !== n.pubKey.uuid) throw new Error("replaceGroupKeysets: Recovery keyset UUIDs do not match: " + p.uuid + " !== " + n.pubKey.uuid + " (group " + u.uuid + ")");
                    if (!(d = findDecryptedKeyset(e, p.uuid))) throw new Error("replaceGroupKeysets: Missing decrypted recovery keyset " + p.uuid + " (group " + u.uuid + ")");
                    return [4, u.enableRecoverCapability(d)];
                case 5:
                    x.sent(), x.label = 6;
                case 6:
                    return l = u.vaultAccessList.slice(), [4, Promise.all(u.vaultAccessList.map(function(e) {
                        return __awaiter(void 0, void 0, void 0, function() {
                            return __generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (e.vaultKey) return [3, 2];
                                        if (!e.encVaultKey) throw new Error("Missing encrypted vault key (vault " + e.vaultUuid + ", group " + u.uuid + ")");
                                        if (c.uuid !== e.encVaultKey.kid) throw new Error("replaceGroupKeysets: Current group's keyset does not encrypt vault access: " + c.uuid + " !== " + e.encVaultKey.kid + " (vault " + e.vaultUuid + ", group " + u.uuid + ")");
                                        return [4, e.decryptVaultKey(c)];
                                    case 1:
                                        r.sent(), r.label = 2;
                                    case 2:
                                        return [4, e.encryptVaultKey(u)];
                                    case 3:
                                        return r.sent(), [2, e]
                                }
                            })
                        })
                    }))];
                case 7:
                    return y = x.sent(), u.setVaultAccessList(y), v = u.memberships.slice(), h = u, [4, Promise.all(s.map(function(e) {
                        return __awaiter(void 0, void 0, void 0, function() {
                            var r, t;
                            return __generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, model.importPubKey(e.pubKey)];
                                    case 1:
                                        return r = o.sent(), [4, a.encryptWithKey(r)];
                                    case 2:
                                        return t = o.sent(), [2, __assign(__assign({}, omit(e, "pubKey")), {
                                            keyset: t
                                        })]
                                }
                            })
                        })
                    }))];
                case 8:
                    return h.memberships = x.sent(), f = parser.groupToAPI(u, model.Group.Attr.All), [4, api.replaceGroupKeysets(e.session, f)];
                case 9:
                    return x.sent(), m = cloneDeep(u), [4, getGroup(e, t, {
                        attrs: model.Group.Attr.All,
                        mustReload: !0
                    })];
                case 10:
                    if (!(g = x.sent()).activeKeysetUuid || g.activeKeysetUuid === c.uuid) throw new Error("[check] replaceGroupKeysets: Group keyset did not change: " + g.activeKeysetUuid + " (group " + g.uuid + ")");
                    if (g.attrVersion !== m.attrVersion + 1) throw new Error("[check] replaceGroupKeysets: Group attribute version was not updated correctly: " + g.attrVersion + ", " + m.attrVersion + " (group " + g.uuid + ")");
                    if (!g.recoverableKeyset) throw new Error("[check] replaceGroupKeysets: Missing group's recoverable keyset (group " + g.uuid + ")");
                    if (g.recoverableKeyset.uuid !== g.activeKeysetUuid) throw new Error("[check] replaceGroupKeysets: Incorrect recoverable keyset UUID: " + g.recoverableKeyset.uuid + " != " + g.activeKeysetUuid + " (group " + g.uuid + ")");
                    if (g.recoverableKeyset.encryptedBy !== (null === (E = n.pubKey) || void 0 === E ? void 0 : E.uuid)) throw new Error("[check] replaceGroupKeysets: Recoverable keyset not encrypted by the recovery keyset: " + g.recoverableKeyset.encryptedBy + " != " + (null === (M = n.pubKey) || void 0 === M ? void 0 : M.uuid) + " (group " + g.uuid + ")");
                    if (p) {
                        if (!g.recoveryKeyset) throw new Error("[check] replaceGroupKeysets: Updated group is missing recovery keyset (group " + g.uuid + ")");
                        if (g.recoveryKeyset.uuid !== p.uuid) throw new Error("[check] replaceGroupKeysets: Updated group has incorrect recovery keyset UUID: " + g.recoveryKeyset.uuid + " != " + p.uuid + " (group " + g.uuid + ")");
                        if (g.recoveryKeyset.encryptedBy !== g.activeKeysetUuid) throw new Error("[check] replaceGroupKeysets: Updated group has recovery keyset encrypted by the wrong key: " + g.recoveryKeyset.encryptedBy + " != " + g.activeKeysetUuid + " (group " + g.uuid + ")")
                    } else if (g.recoveryKeyset) throw new Error("[check] replaceGroupKeysets: Updated group should not have recovery keyset (group " + g.uuid + ")");
                    if (g.permissions !== m.permissions) throw new Error("[check] replaceGroupKeysets: Updated group has incorrect permissions: " + g.permissions + " != " + m.permissions + " (group " + g.uuid + ")");
                    if (w = util.compare.strings(function(e) {
                            return e.vaultUuid
                        }), l.sort(w), K = g.vaultAccessList.slice().sort(w), l.length !== K.length) throw new Error("[check] replaceGroupKeysets: Updated group has incorrect vault access: " + K.length + " !== " + l.length + " (group " + g.uuid + ")");
                    if (l.forEach(function(e, r) {
                            var t = K[r];
                            if (void 0 === t) throw new Error("[check] replaceGroupKeysets: updatedAccess index out of range");
                            if (e.vaultUuid !== t.vaultUuid) throw new Error("[check] replaceGroupKeysets: Mismatched vault UUIDS: " + e.vaultUuid + " !== " + t.vaultUuid + " (group " + g.uuid + ")");
                            if (e.acl !== t.acl) throw new Error("[check] replaceGroupKeysets: Mismatched vault ACLs: " + e.acl + " !== " + t.acl + " (vault " + t.vaultUuid + ", group " + g.uuid + ")");
                            if (t.encryptedBy !== g.activeKeysetUuid) throw new Error("[check] replaceGroupKeysets: Access encrypted with wrong key: " + t.encryptedBy + " !== " + g.activeKeysetUuid + " (vault " + t.vaultUuid + ", group " + g.uuid + ")")
                        }), b = util.compare.strings(function(e) {
                            return e.memberUuid
                        }), v.sort(b), G = g.memberships.slice().sort(b), v.length !== G.length) throw new Error("[check] replaceGroupKeysets: Updated group has incorrect memberships: " + G.length + " !== " + v.length + " (group " + g.uuid + ")");
                    return v.forEach(function(e, r) {
                        var t = G[r];
                        if (void 0 === t) throw new Error("[check] replaceGroupKeysets: updatedMemberships index out of range");
                        if (e.memberUuid !== t.memberUuid) throw new Error("[check] replaceGroupKeysets: Mismatched member UUIDS: " + e.memberUuid + " !== " + t.memberUuid + " (group " + g.uuid + ")");
                        if (e.role !== t.role) throw new Error("[check] replaceGroupKeysets: Mismatched member roles: " + e.role + " !== " + t.role + " (user " + t.memberUuid + ", group " + g.uuid + ")")
                    }), G.find(function(r) {
                        var t;
                        return r.memberUuid === (null === (t = e.user) || void 0 === t ? void 0 : t.uuid)
                    }) ? [4, api.getKeysets(e.session)] : [3, 13];
                case 11:
                    if (_ = x.sent().keysets, !(k = null === (A = e.user) || void 0 === A ? void 0 : A.activeKeyset)) throw new Error("[check] replaceGroupKeysets: Missing current user's keyset (group " + g.uuid + ")");
                    if (!(U = _.find(function(e) {
                            return e.uuid === g.activeKeysetUuid && e.encryptedBy === k.uuid
                        }))) throw new Error("[check] replaceGroupKeysets: Missing group keyset encrypted for current user (group " + g.uuid + ")");
                    return [4, model.Keyset.decryptWithKeyset(k, U)];
                case 12:
                    x.sent(), x.label = 13;
                case 13:
                    return changed(e), [2]
            }
        })
    })
};
var getGroupMemberPubKeys = function(e) {
    return function(r) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, o;
            return __generator(this, function(u) {
                switch (u.label) {
                    case 0:
                        return [4, getUserPubKeys(e, r.map(function(e) {
                            return e.memberUuid
                        }))];
                    case 1:
                        if ((t = u.sent()).length !== r.length) throw new Error("Different number of memberships and public keys");
                        return o = keyBy(t, function(e) {
                            return e.uuid
                        }), [2, r.map(function(e) {
                            var r = o[e.memberUuid];
                            if (!r) throw new Error("No pubkey for member " + e.memberUuid);
                            return __assign(__assign({}, e), {
                                pubKey: r.pubKey
                            })
                        })]
                }
            })
        })
    }
};
export var getGroupMembersCSV = function(e, r) {
    return debouncePromise([codeLocation, "getGroupMemberCSV", e.id], function() {
        return api.getGroupMembersCSV(e.session, r.uuid)
    })
};
export var getActiveKeysetForGroup = function(e, r) {
    return makePromise("getActiveKeysetForGroup", function() {
        var t = r.activeKeysetUuid;
        if (!t) return Promise.reject(new Error("Missing group's active keyset UUID."));
        var o = findDecryptedKeyset(e, t);
        return o ? Promise.resolve(o) : refreshKeysets(e).then(function() {
            var o = findDecryptedKeyset(e, t);
            return o ? Promise.resolve(o) : getGroup(e, r, {
                attrs: model.Group.Attr.RecoverableKeyset
            }).then(function(r) {
                if (r.recoverableKeyset) {
                    var t = findDecryptedKeyset(e, r.recoverableKeyset.encryptedBy);
                    if (t) return r.decryptRecoverableKeyset(t).then(function(r) {
                        return saveDecryptedKeysets(e, [r]), r
                    })
                }
                return Promise.reject(new Error("Missing group's active keyset."))
            })
        })
    })
};