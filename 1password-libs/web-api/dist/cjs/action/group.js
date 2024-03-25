"use strict";
var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var r, t = 1, o = arguments.length; t < o; t++)
                for (var u in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, u) && (e[u] = r[u]);
            return e
        }).apply(this, arguments)
    },
    __createBinding = this && this.__createBinding || (Object.create ? function(e, r, t, o) {
        void 0 === o && (o = t), Object.defineProperty(e, o, {
            enumerable: !0,
            get: function() {
                return r[t]
            }
        })
    } : function(e, r, t, o) {
        void 0 === o && (o = t), e[o] = r[t]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(e, r) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: r
        })
    } : function(e, r) {
        e.default = r
    }),
    __importStar = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var r = {};
        if (null != e)
            for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && __createBinding(r, e, t);
        return __setModuleDefault(r, e), r
    },
    __awaiter = this && this.__awaiter || function(e, r, t, o) {
        return new(t || (t = Promise))(function(u, s) {
            function n(e) {
                try {
                    a(o.next(e))
                } catch (e) {
                    s(e)
                }
            }

            function i(e) {
                try {
                    a(o.throw(e))
                } catch (e) {
                    s(e)
                }
            }

            function a(e) {
                var r;
                e.done ? u(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(n, i)
            }
            a((o = o.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, o, u, s, n = {
            label: 0,
            sent: function() {
                if (1 & u[0]) throw u[1];
                return u[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: i(0),
            throw: i(1),
            return: i(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s;

        function i(s) {
            return function(i) {
                return function(s) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; n;) try {
                        if (t = 1, o && (u = 2 & s[0] ? o.return : s[0] ? o.throw || ((u = o.return) && u.call(o), 0) : o.next) && !(u = u.call(o, s[1])).done) return u;
                        switch (o = 0, u && (s = [2 & s[0], u.value]), s[0]) {
                            case 0:
                            case 1:
                                u = s;
                                break;
                            case 4:
                                return n.label++, {
                                    value: s[1],
                                    done: !1
                                };
                            case 5:
                                n.label++, o = s[1], s = [0];
                                continue;
                            case 7:
                                s = n.ops.pop(), n.trys.pop();
                                continue;
                            default:
                                if (!(u = (u = n.trys).length > 0 && u[u.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                    n = 0;
                                    continue
                                }
                                if (3 === s[0] && (!u || s[1] > u[0] && s[1] < u[3])) {
                                    n.label = s[1];
                                    break
                                }
                                if (6 === s[0] && n.label < u[1]) {
                                    n.label = u[1], u = s;
                                    break
                                }
                                if (u && n.label < u[2]) {
                                    n.label = u[2], n.ops.push(s);
                                    break
                                }
                                u[2] && n.ops.pop(), n.trys.pop();
                                continue
                        }
                        s = r.call(e, n)
                    } catch (e) {
                        s = [6, e], o = 0
                    } finally {
                        t = u = 0
                    }
                    if (5 & s[0]) throw s[1];
                    return {
                        value: s[0] ? s[1] : void 0,
                        done: !0
                    }
                }([s, i])
            }
        }
    },
    __read = this && this.__read || function(e, r) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var o, u, s = t.call(e),
            n = [];
        try {
            for (;
                (void 0 === r || r-- > 0) && !(o = s.next()).done;) n.push(o.value)
        } catch (e) {
            u = {
                error: e
            }
        } finally {
            try {
                o && !o.done && (t = s.return) && t.call(s)
            } finally {
                if (u) throw u.error
            }
        }
        return n
    },
    __spread = this && this.__spread || function() {
        for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(__read(arguments[r]));
        return e
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getActiveKeysetForGroup = exports.getGroupMembersCSV = exports.replaceGroupKeysets = exports.addRecoveryKeysetToGroup = exports.updateGroupPermissions = exports.getRecoveryKeyset = exports.updateGroup = exports.markGroupReadyForPurging = exports.deleteGroup = exports.sendGroup = exports.createGroup = exports.generateNewKeysetForGroup = exports.getTeamMembersGroup = exports.getOwnersGroup = exports.getAdministratorsGroup = exports.getRecoveryGroup = exports.getGroup = exports.getGroups = void 0;
var lodash_es_1 = require("lodash-es"),
    api = __importStar(require("../api")),
    model = __importStar(require("../model")),
    parser = __importStar(require("../parser")),
    util = __importStar(require("../util")),
    error_handler_1 = require("../util/error_handler"),
    make_promise_1 = require("../util/make_promise"),
    context_1 = require("./context"),
    keyset_1 = require("./keyset"),
    pub_key_1 = require("./pub_key"),
    codeLocation = "action/group",
    errorHandler = error_handler_1.errorHandler(codeLocation),
    makePromise = make_promise_1.makePromise(codeLocation),
    defaultGetGroupOptions = {
        attrs: model.Group.Attr.None,
        mustReload: !1
    },
    getGroups = function(e) {
        return makePromise("getGroups", function() {
            return e.account ? Promise.resolve(e.account.groups) : Promise.reject(new Error("Missing account"))
        })
    };
exports.getGroups = getGroups;
var getGroup = function(e, r, t) {
    return makePromise("getGroup", function() {
        var o = util.getValidGroupUuid(r);
        if (!o) throw new Error("Invalid group reference");
        var u = __assign(__assign({}, defaultGetGroupOptions), t),
            s = u.attrs,
            n = u.mustReload,
            i = e.account && e.account.findGroup(o);
        return i && !n && i.hasAttrMask(s) ? i : api.getGroup(e.session, o, s).then(function(r) {
            return parser.parseGroup(e, r, s, i)
        })
    })
};
exports.getGroup = getGroup;
var getRecoveryGroup = function(e, r) {
    return Promise.resolve().then(function() {
        var t = e.account && e.account.recoveryGroup;
        if (!t) throw new Error("Missing recovery group");
        return exports.getGroup(e, t, r)
    }).catch(errorHandler("getRecoveryGroup"))
};
exports.getRecoveryGroup = getRecoveryGroup;
var getAdministratorsGroup = function(e, r) {
    return Promise.resolve().then(function() {
        var t = e.account && e.account.administratorsGroup;
        if (!t) throw new Error("Missing administrators group");
        return exports.getGroup(e, t, r)
    }).catch(errorHandler("getAdministratorsGroup"))
};
exports.getAdministratorsGroup = getAdministratorsGroup;
var getOwnersGroup = function(e, r) {
    return Promise.resolve().then(function() {
        var t = e.account && e.account.ownersGroup;
        if (!t) throw new Error("Missing owners group");
        return exports.getGroup(e, t, r)
    }).catch(errorHandler("getOwnersGroup"))
};
exports.getOwnersGroup = getOwnersGroup;
var getTeamMembersGroup = function(e, r) {
    return Promise.resolve().then(function() {
        var t = e.account && e.account.teamMembersGroup;
        if (!t) throw new Error("Missing members group");
        return exports.getGroup(e, t, r)
    }).catch(errorHandler("getTeamMembersGroup"))
};
exports.getTeamMembersGroup = getTeamMembersGroup;
var generateNewKeysetForGroup = function(e, r, t) {
    return makePromise("generateNewKeysetForGroup", function() {
        return model.Keyset.generateWithoutSigningKeys().then(function(o) {
            return keyset_1.saveDecryptedKeysets(e, [o]), Promise.resolve().then(function() {
                if (r.activeKeysetUuid) {
                    var t = keyset_1.findDecryptedKeyset(e, r.activeKeysetUuid);
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
exports.generateNewKeysetForGroup = generateNewKeysetForGroup;
var createGroup = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, o, u;
        return __generator(this, function(s) {
            switch (s.label) {
                case 0:
                    return t = new model.Group(r), [4, exports.getRecoveryGroup(e, {
                        attrs: model.Group.Attr.PubKey
                    })];
                case 1:
                    return o = s.sent(), [4, exports.generateNewKeysetForGroup(e, t, o)];
                case 2:
                    return u = s.sent(), e.user ? [4, t.addMembership(u, e.user, {
                        role: api.GroupMembership.Role.Manager
                    })] : [2, Promise.reject(new Error("Missing user"))];
                case 3:
                    return s.sent(), [4, exports.sendGroup(e, t)];
                case 4:
                    return [2, s.sent()]
            }
        })
    })
};
exports.createGroup = createGroup;
var sendGroup = function(e, r) {
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
exports.sendGroup = sendGroup;
var deleteGroup = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
                case 0:
                    return [4, api.deleteGroup(e.session, r.uuid)];
                case 1:
                    return t.sent(), context_1.invalidateCache(e), e.account && e.account.removeGroup(r), [2]
            }
        })
    })
};
exports.deleteGroup = deleteGroup;
var markGroupReadyForPurging = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
                case 0:
                    return [4, api.markGroupReadyForPurging(e.session, r.uuid)];
                case 1:
                    return t.sent(), context_1.invalidateCache(e), e.account && e.account.removeGroup(r), [2]
            }
        })
    })
};
exports.markGroupReadyForPurging = markGroupReadyForPurging;
var updateGroup = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(o) {
            switch (o.label) {
                case 0:
                    return [4, exports.getGroup(e, r)];
                case 1:
                    return (t = o.sent()) !== r && e.account && (e.account.removeGroup(t), e.account.pushGroup(r), console.warn(new Error("Stale group reference."))), [4, api.updateGroup(e.session, parser.groupToAPI(r, model.Group.Attr.None))];
                case 2:
                    return o.sent(), r.attrVersion++, context_1.changed(e), [2]
            }
        })
    })
};
exports.updateGroup = updateGroup;
var getRecoveryKeyset = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r;
        return __generator(this, function(t) {
            switch (t.label) {
                case 0:
                    return [4, exports.getRecoveryGroup(e)];
                case 1:
                    if (!(r = t.sent()).activeKeysetUuid) throw new Error("Missing group's active keyset UUID.");
                    return [2, keyset_1.findDecryptedKeyset(e, r.activeKeysetUuid)]
            }
        })
    })
};
exports.getRecoveryKeyset = getRecoveryKeyset;
var updateGroupPermissions = function(e, r, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var o;
        return __generator(this, function(u) {
            switch (u.label) {
                case 0:
                    return [4, exports.getGroup(e, r)];
                case 1:
                    return r = u.sent(), !model.BitSet.includesAny(t, model.RecoveryKeysetPermissions) || r.recoveryKeyset ? [3, 4] : [4, exports.getRecoveryKeyset(e)];
                case 2:
                    if (!(o = u.sent())) throw new Error("Failed to find Recovery keyset");
                    return [4, exports.addRecoveryKeysetToGroup(e, r, o)];
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
exports.updateGroupPermissions = updateGroupPermissions;
var addRecoveryKeysetToGroup = function(e, r, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var o, u;
        return __generator(this, function(s) {
            switch (s.label) {
                case 0:
                    return [4, exports.getGroup(e, r, {
                        attrs: model.Group.Attr.PubKey
                    })];
                case 1:
                    if (!(r = s.sent()).pubKey) throw new Error("Missing group's public key");
                    return [4, t.encryptWithKey(r.pubKey)];
                case 2:
                    return o = s.sent(), r.recoveryKeyset = o, u = parser.groupToAPI(r, model.Group.Attr.None), [4, api.addRecoveryKeysetToGroup(e.session, u)];
                case 3:
                    return s.sent(), [2, r]
            }
        })
    })
};
exports.addRecoveryKeysetToGroup = addRecoveryKeysetToGroup;
var replaceGroupKeysets = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, o, u, s, n, i, a, c, p, d, y, l, v, g, h, f, m, G, _, K, w, b, k, x, P, U, M, E;
        return __generator(this, function(A) {
            switch (A.label) {
                case 0:
                    return t = util.getValidGroupUuid(r), [4, Promise.all([exports.getGroup(e, t, {
                        attrs: model.Group.Attr.All,
                        mustReload: !0
                    }), exports.getRecoveryGroup(e, {
                        attrs: model.Group.Attr.PubKey
                    })])];
                case 1:
                    return o = __read.apply(void 0, [A.sent(), 2]), u = o[0], s = o[1], e.account && (e.account.removeGroup(t), e.account.pushGroup(u)), [4, Promise.all([util.batchChain(getGroupMemberPubKeys(e), 10, u.memberships), model.Keyset.generateWithoutSigningKeys()])];
                case 2:
                    return n = __read.apply(void 0, [A.sent(), 2]), i = n[0], a = n[1], [4, exports.getActiveKeysetForGroup(e, u)];
                case 3:
                    if (!(c = A.sent())) throw new Error("replaceGroupKeysets: Missing current active keyset for group " + u.uuid);
                    if (a.sn = c.sn + 1, !a.ekeyPair.pubKey) throw new Error("replaceGroupKeysets: Missing public key in new group keyset (group " + u.uuid + ")");
                    return u.pubKey = a.ekeyPair.pubKey, u.activeKeysetUuid = a.uuid, [4, u.enableKeysetRecovery(a, s)];
                case 4:
                    if (A.sent(), !(p = u.hasPermission(model.Permission.Recover) && u.recoveryKeyset)) return [3, 6];
                    if (!(null === (P = s.pubKey) || void 0 === P ? void 0 : P.uuid)) throw new Error("replaceGroupKeysets: Missing recovery public key (group " + u.uuid + ")");
                    if (p.uuid !== s.pubKey.uuid) throw new Error("replaceGroupKeysets: Recovery keyset UUIDs do not match: " + p.uuid + " !== " + s.pubKey.uuid + " (group " + u.uuid + ")");
                    if (!(d = keyset_1.findDecryptedKeyset(e, p.uuid))) throw new Error("replaceGroupKeysets: Missing decrypted recovery keyset " + p.uuid + " (group " + u.uuid + ")");
                    return [4, u.enableRecoverCapability(d)];
                case 5:
                    A.sent(), A.label = 6;
                case 6:
                    return y = u.vaultAccessList.slice(), [4, Promise.all(u.vaultAccessList.map(function(e) {
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
                    return l = A.sent(), u.setVaultAccessList(l), v = u.memberships.slice(), g = u, [4, Promise.all(i.map(function(e) {
                        return __awaiter(void 0, void 0, void 0, function() {
                            var r, t;
                            return __generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, model.importPubKey(e.pubKey)];
                                    case 1:
                                        return r = o.sent(), [4, a.encryptWithKey(r)];
                                    case 2:
                                        return t = o.sent(), [2, __assign(__assign({}, lodash_es_1.omit(e, "pubKey")), {
                                            keyset: t
                                        })]
                                }
                            })
                        })
                    }))];
                case 8:
                    return g.memberships = A.sent(), h = parser.groupToAPI(u, model.Group.Attr.All), [4, api.replaceGroupKeysets(e.session, h)];
                case 9:
                    return A.sent(), f = lodash_es_1.cloneDeep(u), [4, exports.getGroup(e, t, {
                        attrs: model.Group.Attr.All,
                        mustReload: !0
                    })];
                case 10:
                    if (!(m = A.sent()).activeKeysetUuid || m.activeKeysetUuid === c.uuid) throw new Error("[check] replaceGroupKeysets: Group keyset did not change: " + m.activeKeysetUuid + " (group " + m.uuid + ")");
                    if (m.attrVersion !== f.attrVersion + 1) throw new Error("[check] replaceGroupKeysets: Group attribute version was not updated correctly: " + m.attrVersion + ", " + f.attrVersion + " (group " + m.uuid + ")");
                    if (!m.recoverableKeyset) throw new Error("[check] replaceGroupKeysets: Missing group's recoverable keyset (group " + m.uuid + ")");
                    if (m.recoverableKeyset.uuid !== m.activeKeysetUuid) throw new Error("[check] replaceGroupKeysets: Incorrect recoverable keyset UUID: " + m.recoverableKeyset.uuid + " != " + m.activeKeysetUuid + " (group " + m.uuid + ")");
                    if (m.recoverableKeyset.encryptedBy !== (null === (U = s.pubKey) || void 0 === U ? void 0 : U.uuid)) throw new Error("[check] replaceGroupKeysets: Recoverable keyset not encrypted by the recovery keyset: " + m.recoverableKeyset.encryptedBy + " != " + (null === (M = s.pubKey) || void 0 === M ? void 0 : M.uuid) + " (group " + m.uuid + ")");
                    if (p) {
                        if (!m.recoveryKeyset) throw new Error("[check] replaceGroupKeysets: Updated group is missing recovery keyset (group " + m.uuid + ")");
                        if (m.recoveryKeyset.uuid !== p.uuid) throw new Error("[check] replaceGroupKeysets: Updated group has incorrect recovery keyset UUID: " + m.recoveryKeyset.uuid + " != " + p.uuid + " (group " + m.uuid + ")");
                        if (m.recoveryKeyset.encryptedBy !== m.activeKeysetUuid) throw new Error("[check] replaceGroupKeysets: Updated group has recovery keyset encrypted by the wrong key: " + m.recoveryKeyset.encryptedBy + " != " + m.activeKeysetUuid + " (group " + m.uuid + ")")
                    } else if (m.recoveryKeyset) throw new Error("[check] replaceGroupKeysets: Updated group should not have recovery keyset (group " + m.uuid + ")");
                    if (m.permissions !== f.permissions) throw new Error("[check] replaceGroupKeysets: Updated group has incorrect permissions: " + m.permissions + " != " + f.permissions + " (group " + m.uuid + ")");
                    if (G = util.compare.strings(function(e) {
                            return e.vaultUuid
                        }), y.sort(G), _ = m.vaultAccessList.slice().sort(G), y.length !== _.length) throw new Error("[check] replaceGroupKeysets: Updated group has incorrect vault access: " + _.length + " !== " + y.length + " (group " + m.uuid + ")");
                    if (y.forEach(function(e, r) {
                            var t = _[r];
                            if (void 0 === t) throw new Error("[check] replaceGroupKeysets: updatedAccess index out of range");
                            if (e.vaultUuid !== t.vaultUuid) throw new Error("[check] replaceGroupKeysets: Mismatched vault UUIDS: " + e.vaultUuid + " !== " + t.vaultUuid + " (group " + m.uuid + ")");
                            if (e.acl !== t.acl) throw new Error("[check] replaceGroupKeysets: Mismatched vault ACLs: " + e.acl + " !== " + t.acl + " (vault " + t.vaultUuid + ", group " + m.uuid + ")");
                            if (t.encryptedBy !== m.activeKeysetUuid) throw new Error("[check] replaceGroupKeysets: Access encrypted with wrong key: " + t.encryptedBy + " !== " + m.activeKeysetUuid + " (vault " + t.vaultUuid + ", group " + m.uuid + ")")
                        }), K = util.compare.strings(function(e) {
                            return e.memberUuid
                        }), v.sort(K), w = m.memberships.slice().sort(K), v.length !== w.length) throw new Error("[check] replaceGroupKeysets: Updated group has incorrect memberships: " + w.length + " !== " + v.length + " (group " + m.uuid + ")");
                    return v.forEach(function(e, r) {
                        var t = w[r];
                        if (void 0 === t) throw new Error("[check] replaceGroupKeysets: updatedMemberships index out of range");
                        if (e.memberUuid !== t.memberUuid) throw new Error("[check] replaceGroupKeysets: Mismatched member UUIDS: " + e.memberUuid + " !== " + t.memberUuid + " (group " + m.uuid + ")");
                        if (e.role !== t.role) throw new Error("[check] replaceGroupKeysets: Mismatched member roles: " + e.role + " !== " + t.role + " (user " + t.memberUuid + ", group " + m.uuid + ")")
                    }), w.find(function(r) {
                        var t;
                        return r.memberUuid === (null === (t = e.user) || void 0 === t ? void 0 : t.uuid)
                    }) ? [4, api.getKeysets(e.session)] : [3, 13];
                case 11:
                    if (b = A.sent().keysets, !(k = null === (E = e.user) || void 0 === E ? void 0 : E.activeKeyset)) throw new Error("[check] replaceGroupKeysets: Missing current user's keyset (group " + m.uuid + ")");
                    if (!(x = b.find(function(e) {
                            return e.uuid === m.activeKeysetUuid && e.encryptedBy === k.uuid
                        }))) throw new Error("[check] replaceGroupKeysets: Missing group keyset encrypted for current user (group " + m.uuid + ")");
                    return [4, model.Keyset.decryptWithKeyset(k, x)];
                case 12:
                    A.sent(), A.label = 13;
                case 13:
                    return context_1.changed(e), [2]
            }
        })
    })
};
exports.replaceGroupKeysets = replaceGroupKeysets;
var getGroupMemberPubKeys = function(e) {
        return function(r) {
            return __awaiter(void 0, void 0, void 0, function() {
                var t, o;
                return __generator(this, function(u) {
                    switch (u.label) {
                        case 0:
                            return [4, pub_key_1.getUserPubKeys(e, r.map(function(e) {
                                return e.memberUuid
                            }))];
                        case 1:
                            if ((t = u.sent()).length !== r.length) throw new Error("Different number of memberships and public keys");
                            return o = lodash_es_1.keyBy(t, function(e) {
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
    },
    getGroupMembersCSV = function(e, r) {
        return make_promise_1.debouncePromise([codeLocation, "getGroupMemberCSV", e.id], function() {
            return api.getGroupMembersCSV(e.session, r.uuid)
        })
    };
exports.getGroupMembersCSV = getGroupMembersCSV;
var getActiveKeysetForGroup = function(e, r) {
    return makePromise("getActiveKeysetForGroup", function() {
        var t = r.activeKeysetUuid;
        if (!t) return Promise.reject(new Error("Missing group's active keyset UUID."));
        var o = keyset_1.findDecryptedKeyset(e, t);
        return o ? Promise.resolve(o) : keyset_1.refreshKeysets(e).then(function() {
            var o = keyset_1.findDecryptedKeyset(e, t);
            return o ? Promise.resolve(o) : exports.getGroup(e, r, {
                attrs: model.Group.Attr.RecoverableKeyset
            }).then(function(r) {
                if (r.recoverableKeyset) {
                    var t = keyset_1.findDecryptedKeyset(e, r.recoverableKeyset.encryptedBy);
                    if (t) return r.decryptRecoverableKeyset(t).then(function(r) {
                        return keyset_1.saveDecryptedKeysets(e, [r]), r
                    })
                }
                return Promise.reject(new Error("Missing group's active keyset."))
            })
        })
    })
};
exports.getActiveKeysetForGroup = getActiveKeysetForGroup;