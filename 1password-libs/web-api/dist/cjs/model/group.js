"use strict";
var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var t, r = 1, i = arguments.length; r < i; r++)
                for (var s in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
            return e
        }).apply(this, arguments)
    },
    __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, i) {
        void 0 === i && (i = r), Object.defineProperty(e, i, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, i) {
        void 0 === i && (i = r), e[i] = t[r]
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
    __awaiter = this && this.__awaiter || function(e, t, r, i) {
        return new(r || (r = Promise))(function(s, n) {
            function o(e) {
                try {
                    a(i.next(e))
                } catch (e) {
                    n(e)
                }
            }

            function u(e) {
                try {
                    a(i.throw(e))
                } catch (e) {
                    n(e)
                }
            }

            function a(e) {
                var t;
                e.done ? s(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(o, u)
            }
            a((i = i.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, i, s, n, o = {
            label: 0,
            sent: function() {
                if (1 & s[0]) throw s[1];
                return s[1]
            },
            trys: [],
            ops: []
        };
        return n = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
            return this
        }), n;

        function u(n) {
            return function(u) {
                return function(n) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (r = 1, i && (s = 2 & n[0] ? i.return : n[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, n[1])).done) return s;
                        switch (i = 0, s && (n = [2 & n[0], s.value]), n[0]) {
                            case 0:
                            case 1:
                                s = n;
                                break;
                            case 4:
                                return o.label++, {
                                    value: n[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, i = n[1], n = [0];
                                continue;
                            case 7:
                                n = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(s = (s = o.trys).length > 0 && s[s.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === n[0] && (!s || n[1] > s[0] && n[1] < s[3])) {
                                    o.label = n[1];
                                    break
                                }
                                if (6 === n[0] && o.label < s[1]) {
                                    o.label = s[1], s = n;
                                    break
                                }
                                if (s && o.label < s[2]) {
                                    o.label = s[2], o.ops.push(n);
                                    break
                                }
                                s[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        n = t.call(e, o)
                    } catch (e) {
                        n = [6, e], i = 0
                    } finally {
                        r = s = 0
                    }
                    if (5 & n[0]) throw n[1];
                    return {
                        value: n[0] ? n[1] : void 0,
                        done: !0
                    }
                }([n, u])
            }
        }
    },
    __values = this && this.__values || function(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            r = t && e[t],
            i = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && i >= e.length && (e = void 0), {
                    value: e && e[i++],
                    done: !e
                }
            }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Group = void 0;
var lodash_es_1 = require("lodash-es"),
    util = __importStar(require("../util")),
    make_promise_1 = require("../util/make_promise"),
    bit_set_1 = require("./bit_set"),
    group_membership_1 = require("./group_membership"),
    keyset_1 = require("./keyset"),
    rsa_public_key_1 = require("./rsa_public_key"),
    vaultACL = __importStar(require("./vault_acl")),
    mapValues = lodash_es_1.mapValues,
    codeLocation = "model/group",
    makePromise = make_promise_1.makePromise(codeLocation),
    Group = function() {
        function e(e) {
            var t = this;
            this.accessorType = "group", this.decryptRecoverableKeyset = function(e) {
                return makePromise("decryptRecoverableKeyset", function() {
                    return t.recoverableKeyset ? e.uuid !== t.recoverableKeyset.encryptedBy ? Promise.reject(new Error("Cannot decrypt the group's keyset. It is not encrypted by the given keyset.")) : keyset_1.Keyset.decryptWithKeyset(e, t.recoverableKeyset) : Promise.reject(new Error("Missing recoverable keyset."))
                })
            }, this.createMembership = function(e, r, i) {
                return makePromise("createMembership", function() {
                    return __awaiter(t, void 0, void 0, function() {
                        var t, s;
                        return __generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    if (!r.pubKey) throw new Error("Missing member's public key.");
                                    if (!e) throw new Error("Missing group's active keyset.");
                                    return [4, rsa_public_key_1.getImportedPubKey(r.pubKey)];
                                case 1:
                                    return t = n.sent(), [4, e.encryptWithKey(t)];
                                case 2:
                                    return s = n.sent(), [2, group_membership_1.GroupMembershipWithKeyset(__assign({
                                        keyset: s,
                                        groupUuid: this.uuid,
                                        memberUuid: r.uuid
                                    }, i))]
                            }
                        })
                    })
                })
            }, this.addMembership = function(e, r, i) {
                return makePromise("addMembership", function() {
                    return t.createMembership(e, r, i).then(function(e) {
                        return t._memberships[e.memberUuid] = e, e
                    })
                })
            }, this.setVaultAccessList = function(e) {
                t._vaultACLs = void 0, t._vaultAccessMap = lodash_es_1.keyBy(e, function(e) {
                    return e.vaultUuid
                })
            }, this.enableKeysetRecovery = function(e, r) {
                return __awaiter(t, void 0, void 0, function() {
                    var t;
                    return __generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (!r.pubKey) throw new Error("Missing recovery group's public key");
                                return t = this, [4, e.encryptWithKey(r.pubKey)];
                            case 1:
                                return t.recoverableKeyset = i.sent(), [2, this]
                        }
                    })
                })
            }, this.enableRecoverCapability = function(e) {
                return __awaiter(t, void 0, void 0, function() {
                    var t;
                    return __generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                if (!e) throw new Error("Missing recovery keyset.");
                                if (!this.pubKey) throw new Error("Missing public key");
                                return [4, e.encryptWithKey(this.pubKey)];
                            case 1:
                                return t = r.sent(), this.recoveryKeyset = t, [2, this]
                        }
                    })
                })
            }, this.uuid = e.uuid ? e.uuid : util.generateUUID(), this.name = e.name, this.type = e.type, this.desc = e.desc, this.activeKeysetUuid = e.activeKeysetUuid, this.createdAt = e.createdAt, this.updatedAt = e.updatedAt, this.attrVersion = e.attrVersion || 0, this.avatar = e.avatar || "", this.permissions = e.permissions || bit_set_1.BitSet.empty(), this.activities = [], this.archivedKeysets = [], this._memberships = {}, this._vaultAccessMap = {}, this._vaultACLs = void 0, this._attrMask = 0
        }
        return e.prototype.hasAttrMask = function(e) {
            return (this._attrMask & e) === e
        }, e.prototype.addAttrMask = function(e) {
            this._attrMask |= e
        }, Object.defineProperty(e.prototype, "isTypeUserDefined", {
            get: function() {
                return this.type === e.TypeUserDefined
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "isTypeTeamMembers", {
            get: function() {
                return this.type === e.TypeTeamMembers
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "isTypeOwners", {
            get: function() {
                return this.type === e.TypeOwners
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "isTypeAdmins", {
            get: function() {
                return this.type === e.TypeAdmins
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "isTypeSecurity", {
            get: function() {
                return this.type === e.TypeSecurity
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.setOverview = function(e) {
            this.uuid = e.uuid ? e.uuid : util.generateUUID(), this.name = e.name, this.type = e.type, this.desc = e.desc, this.activeKeysetUuid = e.activeKeysetUuid, this.createdAt = e.createdAt, this.updatedAt = e.updatedAt, this.attrVersion = e.attrVersion || 0, this.avatar = e.avatar || "", this.permissions = e.permissions || bit_set_1.BitSet.empty()
        }, e.prototype._getLoadedVaultAccessMap = function() {
            if (!this.hasAttrMask(e.Attr.VaultAccess)) throw new Error("Vault access list has not been loaded");
            return this._vaultAccessMap
        }, e.prototype.getAccessorVaultUuids = function() {
            return this.getVaultUuids()
        }, e.prototype.getVaultUuids = function() {
            return mapValues(this._getLoadedVaultAccessMap(), function() {
                return !0
            })
        }, e.prototype.getVaultAccessMap = function() {
            return this._getLoadedVaultAccessMap()
        }, e.prototype.getVaultACLs = function() {
            return this._vaultACLs || (this._vaultACLs = mapValues(this._getLoadedVaultAccessMap(), function(e) {
                return e.acl
            })), this._vaultACLs
        }, e.prototype.hasVaultACL = function(e, t, r) {
            return (!r || !vaultACL.includesFrozenACL(t)) && ((this.getVaultACLs()[e.uuid] || 0) & t) === t
        }, e.prototype.hasPermission = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return bit_set_1.BitSet.includes(this.permissions, bit_set_1.BitSet.combine(e))
        }, e.prototype.getPeopleUuids = function() {
            return mapValues(this._memberships, function() {
                return !0
            })
        }, Object.defineProperty(e.prototype, "pubKey", {
            get: function() {
                return this._pubKey
            },
            set: function(t) {
                t && (this._pubKey = t, this.addAttrMask(e.Attr.PubKey))
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.getMembership = function(e) {
            return this._memberships[e]
        }, Object.defineProperty(e.prototype, "memberships", {
            get: function() {
                return lodash_es_1.compact(lodash_es_1.values(this._memberships))
            },
            set: function(t) {
                var r, i;
                if (this._memberships = {}, t) {
                    try {
                        for (var s = __values(t), n = s.next(); !n.done; n = s.next()) {
                            var o = n.value;
                            this._memberships[o.memberUuid] = o
                        }
                    } catch (e) {
                        r = {
                            error: e
                        }
                    } finally {
                        try {
                            n && !n.done && (i = s.return) && i.call(s)
                        } finally {
                            if (r) throw r.error
                        }
                    }
                    this.addAttrMask(e.Attr.Memberships)
                }
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.removeMember = function(e) {
            this._memberships = lodash_es_1.omit(this._memberships, e.uuid)
        }, Object.defineProperty(e.prototype, "vaultAccessList", {
            get: function() {
                return lodash_es_1.compact(lodash_es_1.values(this._getLoadedVaultAccessMap()))
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.getUnsafeVaultAccessList = function() {
            return lodash_es_1.compact(lodash_es_1.values(this._vaultAccessMap))
        }, e.prototype.setVaultAccess = function(e) {
            var t;
            this._vaultACLs = void 0, this._vaultAccessMap = __assign(__assign({}, this._vaultAccessMap), ((t = {})[e.vaultUuid] = e, t))
        }, e.prototype.removeVaultAccess = function(e) {
            this._vaultAccessMap = lodash_es_1.omit(this._vaultAccessMap, e.uuid)
        }, e.prototype.clearCachedAccessInfo = function() {
            this._memberships = {}, this._vaultAccessMap = {}, this._vaultACLs = void 0, this.recoveryKeyset = void 0
        }, e.prototype.compare = function(e) {
            return getSortOrderForGroupType(this) - getSortOrderForGroupType(e) || this.name.localeCompare(e.name)
        }, e.prototype.toString = function() {
            return "[object Group]"
        }, e.TypeOwners = "O", e.TypeAdmins = "A", e.TypeRecovery = "R", e.TypeTeamMembers = "M", e.TypeUserDefined = "U", e.TypeSecurity = "S", e.TypeReplacement = "P", e.TypeBackofficeUsers = "X", e.TypeBackofficeBilling = "Y", e.TypeBackofficeSecurity = "W", e.TypeBackofficeDevelopers = "V", e.TypeBackofficeFinance = "F", e.TypeBackofficeOwners = "Z", e.Attr = {
            None: 0,
            PubKey: 1,
            Memberships: 2,
            VaultAccess: 4,
            Activities: 8,
            RecoverableKeyset: 16,
            All: 255
        }, e
    }();
exports.Group = Group;
var getSortOrderForGroupType = function(e) {
        return groupTypeSortOrderMap[e.type] || 0
    },
    groupTypeSortOrderMap = [Group.TypeOwners, Group.TypeAdmins, Group.TypeRecovery, Group.TypeSecurity, Group.TypeTeamMembers, Group.TypeBackofficeOwners, Group.TypeBackofficeSecurity, Group.TypeBackofficeDevelopers, Group.TypeBackofficeBilling, Group.TypeBackofficeUsers, Group.TypeUserDefined].reduce(function(e, t, r) {
        var i;
        return __assign(__assign({}, e), ((i = {})[t] = r, i))
    }, {});