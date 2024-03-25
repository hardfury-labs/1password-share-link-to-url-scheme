"use strict";
var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var t, s = 1, r = arguments.length; s < r; s++)
                for (var i in t = arguments[s]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }).apply(this, arguments)
    },
    __createBinding = this && this.__createBinding || (Object.create ? function(e, t, s, r) {
        void 0 === r && (r = s), Object.defineProperty(e, r, {
            enumerable: !0,
            get: function() {
                return t[s]
            }
        })
    } : function(e, t, s, r) {
        void 0 === r && (r = s), e[r] = t[s]
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
            for (var s in e) "default" !== s && Object.prototype.hasOwnProperty.call(e, s) && __createBinding(t, e, s);
        return __setModuleDefault(t, e), t
    },
    __values = this && this.__values || function(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            s = t && e[t],
            r = 0;
        if (s) return s.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && r >= e.length && (e = void 0), {
                    value: e && e[r++],
                    done: !e
                }
            }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    },
    __read = this && this.__read || function(e, t) {
        var s = "function" == typeof Symbol && e[Symbol.iterator];
        if (!s) return e;
        var r, i, n = s.call(e),
            o = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(r = n.next()).done;) o.push(r.value)
        } catch (e) {
            i = {
                error: e
            }
        } finally {
            try {
                r && !r.done && (s = n.return) && s.call(n)
            } finally {
                if (i) throw i.error
            }
        }
        return o
    },
    __spread = this && this.__spread || function() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(__read(arguments[t]));
        return e
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Person = void 0;
var lodash_es_1 = require("lodash-es"),
    bit_set_1 = require("./bit_set"),
    fully_named_1 = require("./fully_named"),
    permission_1 = require("./permission"),
    preference_1 = require("./preference"),
    vaultACL = __importStar(require("./vault_acl")),
    values = lodash_es_1.values,
    flatMap = lodash_es_1.flatMap,
    Person = function() {
        function e(e) {
            this.accessorType = "user", this.uuid = e.uuid || "", this.name = e.name || "", this.state = e.state || "", this.type = e.type || "", this.attrVersion = e.attrVersion || 0, this.keysetVersion = e.keysetVersion || 0, this.avatar = e.avatar || "", this.language = e.language || "en", this.combinedPermissions = e.combinedPermissions || bit_set_1.BitSet.empty(), this.newsletterPrefs = e.newsletterPrefs || 0, this.preferences = e.preferences || bit_set_1.BitSet.empty(), this.externalGUID = e.externalGUID, this.hasMFAEnabled = e.hasMFAEnabled, this.proposedEmail = e.proposedEmail, this.email = e.email || "", this.createdAt = e.createdAt, this.updatedAt = e.updatedAt, this.lastAuthAt = e.lastAuthAt, this.csToken = e.csToken, this.pubKey = void 0, this.activeKeyset = void 0, this.archivedKeysets = [], this._groupMemberships = [], this._directVaultAccessMap = {}, this._groupVaultAccessMap = {}, this._fullVaultAccessList = void 0, this._combinedVaultACLs = void 0, this._attrMask = 0, this.devices = [], this.activities = [], this.personalItemsCount = void 0
        }
        return e.prototype.hasAttrMask = function(e) {
            return (this._attrMask & e) === e
        }, e.prototype.addAttrMask = function(e) {
            this._attrMask |= e
        }, e.prototype.isOwner = function() {
            return this.hasPermission(permission_1.Permission.BelongsToOwnersGroup)
        }, e.prototype.setAttrs = function(e) {
            return this.name = e.name || "", this.state = e.state || "", this.type = e.type || "", this.attrVersion = e.attrVersion || 0, this.keysetVersion = e.keysetVersion || 0, this.avatar = e.avatar || "", this.language = e.language || "en", this.combinedPermissions = e.combinedPermissions || bit_set_1.BitSet.empty(), this.newsletterPrefs = e.newsletterPrefs || 0, this.preferences = e.preferences || bit_set_1.BitSet.empty(), this.externalGUID = e.externalGUID, this.hasMFAEnabled = e.hasMFAEnabled, this.proposedEmail = e.proposedEmail, this.email = e.email || "", this.createdAt = e.createdAt, this.updatedAt = e.updatedAt, this.lastAuthAt = e.lastAuthAt, this.csToken = e.csToken, this
        }, e.prototype.setActiveKeyset = function(e) {
            e ? (this.activeKeyset = e, this.pubKey = e.ekeyPair.pubKey) : (this.activeKeyset = void 0, this.pubKey = void 0)
        }, e.prototype.hasPermission = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return bit_set_1.BitSet.includes(this.combinedPermissions, bit_set_1.BitSet.combine(e))
        }, e.prototype.hasPreference = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return !!this.preferences && bit_set_1.BitSet.includes(this.preferences, bit_set_1.BitSet.combine(e))
        }, e.prototype.generateNewKeyset = function() {
            return Promise.reject(new Error("Not supported"))
        }, Object.defineProperty(e.prototype, "joined", {
            get: function() {
                return this.createdAt
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "initials", {
            get: function() {
                return this._initials || (this._initials = fully_named_1.Named.getInitials(this)), this._initials
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.clearCachedInitials = function() {
            this._initials = ""
        }, e.prototype.travelModeIsEnabled = function() {
            return void 0 !== this.preferences && bit_set_1.BitSet.includes(this.preferences, preference_1.Preference.TravelMode)
        }, e.prototype.getAccessorVaultUuids = function() {
            return lodash_es_1.mapValues(this._directVaultAccessMap, function() {
                return !0
            })
        }, e.prototype.getVaultUuids = function() {
            var e = {};
            return lodash_es_1.union(lodash_es_1.keys(this._directVaultAccessMap), lodash_es_1.keys(this._groupVaultAccessMap)).forEach(function(t) {
                e[t] = !0
            }), e
        }, e.prototype.getVaultACLs = function() {
            var e = this;
            if (!this._combinedVaultACLs) {
                var t = {};
                lodash_es_1.union(lodash_es_1.keys(this._directVaultAccessMap), lodash_es_1.keys(this._groupVaultAccessMap)).forEach(function(s) {
                    var r = e._directVaultAccessMap[s],
                        i = r ? r.acl : 0,
                        n = values(e._groupVaultAccessMap[s] || {}).reduce(function(e, t) {
                            return e | t.acl
                        }, i);
                    t[s] = n
                }), this._combinedVaultACLs = t
            }
            return this._combinedVaultACLs
        }, e.prototype.hasVaultACL = function(e, t, s) {
            return (!s || !vaultACL.includesFrozenACL(t)) && ((this.getVaultACLs()[e.uuid] || 0) & t) === t
        }, e.prototype.getGroupUuids = function() {
            var e, t, s = {};
            try {
                for (var r = __values(this._groupMemberships), i = r.next(); !i.done; i = r.next()) {
                    s[i.value.groupUuid] = !0
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    i && !i.done && (t = r.return) && t.call(r)
                } finally {
                    if (e) throw e.error
                }
            }
            return s
        }, e.prototype.getGroupMembership = function(e) {
            return lodash_es_1.find(this._groupMemberships, function(t) {
                return t.groupUuid === e.uuid
            })
        }, e.prototype.setState = function(e) {
            this.state = e
        }, Object.defineProperty(e.prototype, "isActive", {
            get: function() {
                return "A" === this.state
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "isEnrolled", {
            get: function() {
                switch (this.state) {
                    case "A":
                    case "2":
                    case "1":
                    case "S":
                        return !0;
                    default:
                        return !1
                }
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "isMember", {
            get: function() {
                return "R" === this.type
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "isGuest", {
            get: function() {
                return "G" === this.type
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.vaultAccessForVault = function(e) {
            var t = lodash_es_1.get(this._directVaultAccessMap, e.uuid, void 0),
                s = values(this._groupVaultAccessMap[e.uuid] || {}),
                r = t ? __spread([t], s) : s;
            if (!r || 0 === r.length) throw new Error("Vault access for this vault has not been loaded.");
            return r
        }, e.prototype.getDirectVaultAccessMap = function() {
            return lodash_es_1.clone(this._directVaultAccessMap)
        }, e.prototype.getGroupVaultAccessMap = function() {
            return lodash_es_1.clone(this._groupVaultAccessMap)
        }, e.prototype.getUnsafeVaultAccessList = function() {
            if (!this._fullVaultAccessList) {
                var e = values(this._directVaultAccessMap),
                    t = flatMap(this._groupVaultAccessMap, function(e) {
                        return values(e)
                    });
                this._fullVaultAccessList = e.concat(t)
            }
            return this._fullVaultAccessList
        }, Object.defineProperty(e.prototype, "vaultAccessList", {
            get: function() {
                if (!this.hasAttrMask(e.Attr.VaultAccess)) throw new Error("Vault access list has not been loaded");
                return lodash_es_1.clone(this.getUnsafeVaultAccessList())
            },
            set: function(e) {
                var t = __read(lodash_es_1.partition(e, function(e) {
                        return "group" === e.accessorType
                    }), 2),
                    s = t[0],
                    r = t[1];
                this._directVaultAccessMap = lodash_es_1.keyBy(r, function(e) {
                    return e.vaultUuid
                }), this._groupVaultAccessMap = _generateGroupAccessMap(s), this._fullVaultAccessList = void 0, this._combinedVaultACLs = void 0
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.setVaultAccess = function(e) {
            var t;
            "group" === e.accessorType ? this._groupVaultAccessMap = _setGroupAccessInefficient(this._groupVaultAccessMap, e) : this._directVaultAccessMap = __assign(__assign({}, this._directVaultAccessMap), ((t = {})[e.vaultUuid] = e, t)), this._fullVaultAccessList = void 0, this._combinedVaultACLs = void 0
        }, e.prototype.removeVaultAccess = function(e) {
            this._directVaultAccessMap = lodash_es_1.omit(this._directVaultAccessMap, e.uuid), this._groupVaultAccessMap = lodash_es_1.omit(this._groupVaultAccessMap, e.uuid), this._fullVaultAccessList = void 0, this._combinedVaultACLs = void 0
        }, Object.defineProperty(e.prototype, "unsafeGroupMemberships", {
            get: function() {
                return this._groupMemberships
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "groupMemberships", {
            get: function() {
                return lodash_es_1.clone(this._groupMemberships)
            },
            set: function(e) {
                this._groupMemberships = e.slice(), this._fullVaultAccessList = void 0, this._combinedVaultACLs = void 0
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.pushGroupMembership = function(e) {
            this._groupMemberships.push(e), this._fullVaultAccessList = void 0, this._combinedVaultACLs = void 0
        }, e.prototype.markTraveling = function(e) {
            this.preferences = e ? bit_set_1.BitSet.enable(this.preferences, preference_1.Preference.TravelMode) : bit_set_1.BitSet.disable(this.preferences, preference_1.Preference.TravelMode), this.updatedAt = new Date, this.attrVersion++
        }, e.prototype.compare = function(e) {
            return this.name.localeCompare(e.name)
        }, e.prototype.toString = function() {
            return "[object Person]"
        }, e.UUIDNewlyCreatedProvisionUser = "ANEWLYCREATEDTRANSFERUSER2", e.UUIDNewlyCreatedServiceAccount = "NEWLYCREATEDSERVICEACCOUNT", e.Attr = {
            None: 0,
            PubKey: 1,
            Keysets: 2,
            Groups: 4,
            VaultAccess: 8,
            Devices: 16,
            Activities: 32,
            PersonalItemsCount: 64,
            ProposedEmailChange: 128,
            All: 255
        }, e
    }();
exports.Person = Person;
var _setGroupAccessInefficient = function(e, t) {
        var s, r, i = t.vaultUuid,
            n = t.accessorUuid;
        return __assign(__assign({}, e), ((s = {})[i] = __assign(__assign({}, e[i]), ((r = {})[n] = t, r)), s))
    },
    _generateGroupAccessMap = function(e) {
        var t = {};
        return e.forEach(function(e) {
            var s = e.vaultUuid,
                r = e.accessorUuid,
                i = t[s] || {};
            t[s] = i, i[r] = e
        }), t
    };