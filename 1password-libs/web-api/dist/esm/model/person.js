var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(t) {
            for (var e, s = 1, i = arguments.length; s < i; s++)
                for (var r in e = arguments[s]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t
        }).apply(this, arguments)
    },
    __values = this && this.__values || function(t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
            s = e && t[e],
            i = 0;
        if (s) return s.call(t);
        if (t && "number" == typeof t.length) return {
            next: function() {
                return t && i >= t.length && (t = void 0), {
                    value: t && t[i++],
                    done: !t
                }
            }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
    },
    __read = this && this.__read || function(t, e) {
        var s = "function" == typeof Symbol && t[Symbol.iterator];
        if (!s) return t;
        var i, r, n = s.call(t),
            o = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(i = n.next()).done;) o.push(i.value)
        } catch (t) {
            r = {
                error: t
            }
        } finally {
            try {
                i && !i.done && (s = n.return) && s.call(n)
            } finally {
                if (r) throw r.error
            }
        }
        return o
    },
    __spread = this && this.__spread || function() {
        for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(__read(arguments[e]));
        return t
    };
import {
    clone,
    find,
    flatMap as _flatMap,
    get,
    keyBy,
    keys,
    mapValues,
    omit,
    partition,
    union,
    values as _values
} from "lodash-es";
import {
    BitSet
} from "./bit_set";
import {
    Named
} from "./fully_named";
import {
    Permission
} from "./permission";
import {
    Preference
} from "./preference";
import * as vaultACL from "./vault_acl";
var values = _values,
    flatMap = _flatMap,
    Person = function() {
        function t(t) {
            this.accessorType = "user", this.uuid = t.uuid || "", this.name = t.name || "", this.state = t.state || "", this.type = t.type || "", this.attrVersion = t.attrVersion || 0, this.keysetVersion = t.keysetVersion || 0, this.avatar = t.avatar || "", this.language = t.language || "en", this.combinedPermissions = t.combinedPermissions || BitSet.empty(), this.newsletterPrefs = t.newsletterPrefs || 0, this.preferences = t.preferences || BitSet.empty(), this.externalGUID = t.externalGUID, this.hasMFAEnabled = t.hasMFAEnabled, this.proposedEmail = t.proposedEmail, this.email = t.email || "", this.createdAt = t.createdAt, this.updatedAt = t.updatedAt, this.lastAuthAt = t.lastAuthAt, this.csToken = t.csToken, this.pubKey = void 0, this.activeKeyset = void 0, this.archivedKeysets = [], this._groupMemberships = [], this._directVaultAccessMap = {}, this._groupVaultAccessMap = {}, this._fullVaultAccessList = void 0, this._combinedVaultACLs = void 0, this._attrMask = 0, this.devices = [], this.activities = [], this.personalItemsCount = void 0
        }
        return t.prototype.hasAttrMask = function(t) {
            return (this._attrMask & t) === t
        }, t.prototype.addAttrMask = function(t) {
            this._attrMask |= t
        }, t.prototype.isOwner = function() {
            return this.hasPermission(Permission.BelongsToOwnersGroup)
        }, t.prototype.setAttrs = function(t) {
            return this.name = t.name || "", this.state = t.state || "", this.type = t.type || "", this.attrVersion = t.attrVersion || 0, this.keysetVersion = t.keysetVersion || 0, this.avatar = t.avatar || "", this.language = t.language || "en", this.combinedPermissions = t.combinedPermissions || BitSet.empty(), this.newsletterPrefs = t.newsletterPrefs || 0, this.preferences = t.preferences || BitSet.empty(), this.externalGUID = t.externalGUID, this.hasMFAEnabled = t.hasMFAEnabled, this.proposedEmail = t.proposedEmail, this.email = t.email || "", this.createdAt = t.createdAt, this.updatedAt = t.updatedAt, this.lastAuthAt = t.lastAuthAt, this.csToken = t.csToken, this
        }, t.prototype.setActiveKeyset = function(t) {
            t ? (this.activeKeyset = t, this.pubKey = t.ekeyPair.pubKey) : (this.activeKeyset = void 0, this.pubKey = void 0)
        }, t.prototype.hasPermission = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return BitSet.includes(this.combinedPermissions, BitSet.combine(t))
        }, t.prototype.hasPreference = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return !!this.preferences && BitSet.includes(this.preferences, BitSet.combine(t))
        }, t.prototype.generateNewKeyset = function() {
            return Promise.reject(new Error("Not supported"))
        }, Object.defineProperty(t.prototype, "joined", {
            get: function() {
                return this.createdAt
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "initials", {
            get: function() {
                return this._initials || (this._initials = Named.getInitials(this)), this._initials
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.clearCachedInitials = function() {
            this._initials = ""
        }, t.prototype.travelModeIsEnabled = function() {
            return void 0 !== this.preferences && BitSet.includes(this.preferences, Preference.TravelMode)
        }, t.prototype.getAccessorVaultUuids = function() {
            return mapValues(this._directVaultAccessMap, function() {
                return !0
            })
        }, t.prototype.getVaultUuids = function() {
            var t = {};
            return union(keys(this._directVaultAccessMap), keys(this._groupVaultAccessMap)).forEach(function(e) {
                t[e] = !0
            }), t
        }, t.prototype.getVaultACLs = function() {
            var t = this;
            if (!this._combinedVaultACLs) {
                var e = {};
                union(keys(this._directVaultAccessMap), keys(this._groupVaultAccessMap)).forEach(function(s) {
                    var i = t._directVaultAccessMap[s],
                        r = i ? i.acl : 0,
                        n = values(t._groupVaultAccessMap[s] || {}).reduce(function(t, e) {
                            return t | e.acl
                        }, r);
                    e[s] = n
                }), this._combinedVaultACLs = e
            }
            return this._combinedVaultACLs
        }, t.prototype.hasVaultACL = function(t, e, s) {
            return (!s || !vaultACL.includesFrozenACL(e)) && ((this.getVaultACLs()[t.uuid] || 0) & e) === e
        }, t.prototype.getGroupUuids = function() {
            var t, e, s = {};
            try {
                for (var i = __values(this._groupMemberships), r = i.next(); !r.done; r = i.next()) {
                    s[r.value.groupUuid] = !0
                }
            } catch (e) {
                t = {
                    error: e
                }
            } finally {
                try {
                    r && !r.done && (e = i.return) && e.call(i)
                } finally {
                    if (t) throw t.error
                }
            }
            return s
        }, t.prototype.getGroupMembership = function(t) {
            return find(this._groupMemberships, function(e) {
                return e.groupUuid === t.uuid
            })
        }, t.prototype.setState = function(t) {
            this.state = t
        }, Object.defineProperty(t.prototype, "isActive", {
            get: function() {
                return "A" === this.state
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "isEnrolled", {
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
        }), Object.defineProperty(t.prototype, "isMember", {
            get: function() {
                return "R" === this.type
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "isGuest", {
            get: function() {
                return "G" === this.type
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.vaultAccessForVault = function(t) {
            var e = get(this._directVaultAccessMap, t.uuid, void 0),
                s = values(this._groupVaultAccessMap[t.uuid] || {}),
                i = e ? __spread([e], s) : s;
            if (!i || 0 === i.length) throw new Error("Vault access for this vault has not been loaded.");
            return i
        }, t.prototype.getDirectVaultAccessMap = function() {
            return clone(this._directVaultAccessMap)
        }, t.prototype.getGroupVaultAccessMap = function() {
            return clone(this._groupVaultAccessMap)
        }, t.prototype.getUnsafeVaultAccessList = function() {
            if (!this._fullVaultAccessList) {
                var t = values(this._directVaultAccessMap),
                    e = flatMap(this._groupVaultAccessMap, function(t) {
                        return values(t)
                    });
                this._fullVaultAccessList = t.concat(e)
            }
            return this._fullVaultAccessList
        }, Object.defineProperty(t.prototype, "vaultAccessList", {
            get: function() {
                if (!this.hasAttrMask(t.Attr.VaultAccess)) throw new Error("Vault access list has not been loaded");
                return clone(this.getUnsafeVaultAccessList())
            },
            set: function(t) {
                var e = __read(partition(t, function(t) {
                        return "group" === t.accessorType
                    }), 2),
                    s = e[0],
                    i = e[1];
                this._directVaultAccessMap = keyBy(i, function(t) {
                    return t.vaultUuid
                }), this._groupVaultAccessMap = _generateGroupAccessMap(s), this._fullVaultAccessList = void 0, this._combinedVaultACLs = void 0
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.setVaultAccess = function(t) {
            var e;
            "group" === t.accessorType ? this._groupVaultAccessMap = _setGroupAccessInefficient(this._groupVaultAccessMap, t) : this._directVaultAccessMap = __assign(__assign({}, this._directVaultAccessMap), ((e = {})[t.vaultUuid] = t, e)), this._fullVaultAccessList = void 0, this._combinedVaultACLs = void 0
        }, t.prototype.removeVaultAccess = function(t) {
            this._directVaultAccessMap = omit(this._directVaultAccessMap, t.uuid), this._groupVaultAccessMap = omit(this._groupVaultAccessMap, t.uuid), this._fullVaultAccessList = void 0, this._combinedVaultACLs = void 0
        }, Object.defineProperty(t.prototype, "unsafeGroupMemberships", {
            get: function() {
                return this._groupMemberships
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "groupMemberships", {
            get: function() {
                return clone(this._groupMemberships)
            },
            set: function(t) {
                this._groupMemberships = t.slice(), this._fullVaultAccessList = void 0, this._combinedVaultACLs = void 0
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.pushGroupMembership = function(t) {
            this._groupMemberships.push(t), this._fullVaultAccessList = void 0, this._combinedVaultACLs = void 0
        }, t.prototype.markTraveling = function(t) {
            this.preferences = t ? BitSet.enable(this.preferences, Preference.TravelMode) : BitSet.disable(this.preferences, Preference.TravelMode), this.updatedAt = new Date, this.attrVersion++
        }, t.prototype.compare = function(t) {
            return this.name.localeCompare(t.name)
        }, t.prototype.toString = function() {
            return "[object Person]"
        }, t.UUIDNewlyCreatedProvisionUser = "ANEWLYCREATEDTRANSFERUSER2", t.UUIDNewlyCreatedServiceAccount = "NEWLYCREATEDSERVICEACCOUNT", t.Attr = {
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
        }, t
    }();
export {
    Person
};
var _setGroupAccessInefficient = function(t, e) {
        var s, i, r = e.vaultUuid,
            n = e.accessorUuid;
        return __assign(__assign({}, t), ((s = {})[r] = __assign(__assign({}, t[r]), ((i = {})[n] = e, i)), s))
    },
    _generateGroupAccessMap = function(t) {
        var e = {};
        return t.forEach(function(t) {
            var s = t.vaultUuid,
                i = t.accessorUuid,
                r = e[s] || {};
            e[s] = r, r[i] = t
        }), e
    };