"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
        void 0 === n && (n = r), Object.defineProperty(e, n, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, n) {
        void 0 === n && (n = r), e[n] = t[r]
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
    __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(i, s) {
            function o(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    s(e)
                }
            }

            function a(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    s(e)
                }
            }

            function c(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(o, a)
            }
            c((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, i, s, o = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s;

        function a(s) {
            return function(a) {
                return function(s) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (r = 1, n && (i = 2 & s[0] ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, s[1])).done) return i;
                        switch (n = 0, i && (s = [2 & s[0], i.value]), s[0]) {
                            case 0:
                            case 1:
                                i = s;
                                break;
                            case 4:
                                return o.label++, {
                                    value: s[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, n = s[1], s = [0];
                                continue;
                            case 7:
                                s = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                                    o.label = s[1];
                                    break
                                }
                                if (6 === s[0] && o.label < i[1]) {
                                    o.label = i[1], i = s;
                                    break
                                }
                                if (i && o.label < i[2]) {
                                    o.label = i[2], o.ops.push(s);
                                    break
                                }
                                i[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        s = t.call(e, o)
                    } catch (e) {
                        s = [6, e], n = 0
                    } finally {
                        r = i = 0
                    }
                    if (5 & s[0]) throw s[1];
                    return {
                        value: s[0] ? s[1] : void 0,
                        done: !0
                    }
                }([s, a])
            }
        }
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
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Vault = void 0;
var lodash_es_1 = require("lodash-es"),
    util = __importStar(require("../util")),
    error_handler_1 = require("../util/error_handler"),
    bit_set_1 = require("./bit_set"),
    symmetric_key_constants_1 = require("./symmetric_key_constants"),
    symmetric_key_pf_1 = require("./symmetric_key_pf"),
    vault_client_access_1 = require("./vault_client_access"),
    codeLocation = "model/vault",
    errorHandler = error_handler_1.errorHandler(codeLocation),
    Vault = function() {
        function e(e) {
            var t = this;
            this.generateNewKey = function() {
                return __awaiter(t, void 0, void 0, function() {
                    var e, t;
                    return __generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return this.uuid || (this.uuid = util.generateUUID()), e = this.activeKey, [4, (t = symmetric_key_pf_1.createSymmetricKey()).generate(symmetric_key_constants_1.JWK_ALG_A256GCM)];
                            case 1:
                                return r.sent(), t.sn = e ? (e.sn || 1) + 1 : 1, this.activeKey = t, this.keys.unshift(t), [4, this.encryptAttrs()];
                            case 2:
                                return r.sent(), [2, this]
                        }
                    })
                })
            }, this.revokeAccess = function(e) {
                return Promise.resolve().then(function() {
                    t.clearCachedAccessInfo(), t.accessList = lodash_es_1.filter(t.accessList, function(t) {
                        return t.accessorUuid !== e.uuid
                    }), "user" === e.accessorType ? t.previewUsers = lodash_es_1.filter(t.previewUsers, function(t) {
                        return t.uuid !== e.uuid
                    }) : t.previewGroups = lodash_es_1.filter(t.previewGroups, function(t) {
                        return t.uuid !== e.uuid
                    }), e.removeVaultAccess(t)
                })
            }, this.getAttrs = function() {
                return {
                    uuid: t.uuid,
                    name: t.name,
                    type: t.type,
                    desc: t.desc,
                    avatar: t.avatar,
                    defaultAcl: t.defaultAcl
                }
            }, this.encryptAttrs = function() {
                return Promise.resolve().then(function() {
                    if (!t.activeKey) throw new Error("Missing active key");
                    return t.uuid || (t.uuid = util.generateUUID()), t.activeKey.encrypt(util.json2ab(t.getAttrs())).then(function(e) {
                        return t.encAttrs = e, t
                    })
                }).catch(errorHandler("encryptAttrs"))
            }, this.encrypt = function(e) {
                return Promise.resolve().then(function() {
                    if (!t.activeKey) throw new Error("Missing active key");
                    return t.activeKey.encrypt(e)
                }).catch(errorHandler("encrypt"))
            }, this.decrypt = function(e) {
                return Promise.resolve().then(function() {
                    if (!t.activeKey) throw new Error("Missing active key");
                    return t.activeKey.decrypt(e)
                }).catch(errorHandler("decrypt"))
            }, this.convertAttrToString = function(e, t, r) {
                if (void 0 === r && (r = !1), "string" == typeof t) return t;
                var n = typeof t,
                    i = "Unexpected vault attr type. Expected " + e + " to be string, received " + n + ".";
                return r || "number" !== n && "boolean" !== n ? (console.warn(i + " Setting " + e + " to empty string."), "") : (console.warn(i + " Converting " + e + " to string."), String(t))
            }, this.decryptAttrs = function(e) {
                return Promise.resolve().then(function() {
                    if (!e) throw new Error("Cannot decrypt vault attributes, missing encrypted data");
                    if (!t.activeKey) throw new Error("Missing active key");
                    return t.activeKey.decrypt(e).then(function(e) {
                        var r;
                        try {
                            r = JSON.parse(util.ab2str(e))
                        } catch (e) {
                            r = {
                                name: "Corrupted vault",
                                type: "",
                                desc: "Corrupted vault"
                            }
                        }
                        return r && r.uuid || (r = r = {
                            name: "Corrupted vault",
                            type: "",
                            desc: "Corrupted vault"
                        }), t.uuid = t.convertAttrToString("uuid", r.uuid), t.name = t.convertAttrToString("name", r.name), t.desc = t.convertAttrToString("desc", r.desc), t.type = t.convertAttrToString("type", r.type), t.avatar = t.convertAttrToString("avatar", r.avatar, !0), "number" == typeof r.defaultAcl ? t.defaultAcl = r.defaultAcl : (console.warn("Unexpected vault attr type. Expected defaultAcl to be number, received " + typeof r.defaultAcl + ". Setting defaultAcl to undefined."), t.defaultAcl = void 0), t
                    })
                }).catch(errorHandler("decryptAttrs"))
            }, this.uuid = e.uuid ? e.uuid : util.generateUUID(), this.name = "string" == typeof e.name ? e.name : "", this.type = e.type, this.desc = "string" == typeof e.desc ? e.desc : "", this.defaultAcl = e.defaultAcl, this.avatar = e.avatar || "", this.leaseTimeout = 0, this.clientAccess = vault_client_access_1.VaultClientAccess.All, this.createdAt = new Date, this.contentVersion = 1, this.activeItemCount = 0, this.keys = [], this.accessList = [], this.activities = [], this.itemTemplates = [], this.previewGroups = [], this.previewUsers = [], this._attrMask = 0, this.attrVersion = 1
        }
        return e.prototype.hasAttrMask = function(e) {
            return (this._attrMask & e) === e
        }, e.prototype.addAttrMask = function(e) {
            this._attrMask |= e
        }, Object.defineProperty(e.prototype, "isPersonal", {
            get: function() {
                return this.type === e.TypePersonal
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "isSystem", {
            get: function() {
                return this.type === e.TypeSystem
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "isGeneratedPasswords", {
            get: function() {
                return this.type === e.TypeGeneratedPasswords
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.hasClientAccess = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return !!this.clientAccess && bit_set_1.BitSet.includes(this.clientAccess, bit_set_1.BitSet.combine(e))
        }, e.prototype.getPeopleUuids = function() {
            var e, t;
            if (!this._userUuidMap) {
                var r = {};
                try {
                    for (var n = __values(this.accessList), i = n.next(); !i.done; i = n.next()) {
                        var s = i.value;
                        "group" !== s.accessorType && (r[s.accessorUuid] = !0)
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        i && !i.done && (t = n.return) && t.call(n)
                    } finally {
                        if (e) throw e.error
                    }
                }
                this._userUuidMap = r
            }
            return this._userUuidMap
        }, e.prototype.getGroupUuids = function() {
            var e, t;
            if (!this._groupUuidMap) {
                var r = {};
                try {
                    for (var n = __values(this.accessList), i = n.next(); !i.done; i = n.next()) {
                        var s = i.value;
                        "group" === s.accessorType && (r[s.accessorUuid] = !0)
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        i && !i.done && (t = n.return) && t.call(n)
                    } finally {
                        if (e) throw e.error
                    }
                }
                this._groupUuidMap = r
            }
            return this._groupUuidMap
        }, e.prototype.clearCachedAccessInfo = function() {
            this._userUuidMap = void 0, this._groupUuidMap = void 0
        }, e.prototype.setCombinedAcl = function(t) {
            this._combinedAcl = t, this.addAttrMask(e.Attr.CombinedAccess)
        }, e.prototype.getCombinedAcl = function() {
            return this._combinedAcl
        }, e.prototype.setAccessList = function(e) {
            var t, r;
            this.accessList = e, this.clearCachedAccessInfo();
            var n = [];
            try {
                for (var i = __values(e), s = i.next(); !s.done; s = i.next()) {
                    var o = s.value;
                    o.vaultKey && (o.vaultKey.sn = o.vaultKeySN, n.push(o.vaultKey))
                }
            } catch (e) {
                t = {
                    error: e
                }
            } finally {
                try {
                    s && !s.done && (r = i.return) && r.call(i)
                } finally {
                    if (t) throw t.error
                }
            }
            if (0 !== n.length) {
                var a = n.sort(function(e, t) {
                    return void 0 === e.sn ? 1 : void 0 === t.sn ? -1 : t.sn - e.sn
                });
                this.activeKey = a[0]
            } else console.warn("No vault keys in access list.")
        }, e.prototype.clearAccessList = function() {
            this.accessList = [], this.clearCachedAccessInfo()
        }, e.prototype.toString = function() {
            return "[object Vault]"
        }, e.TypePersonal = "P", e.TypeEveryone = "E", e.TypeUserCreated = "U", e.TypeProvision = "T", e.TypeSystem = "S", e.TypeGeneratedPasswords = "G", e.TypeReplacement = "R", e.TypeClientPlaceholder = "-", e.DefaultDescMarker = "GYkuBJsjEZmMUuiP", e.Attr = {
            None: 0,
            Accessors: 1,
            ArchivedKeys: 2,
            Activities: 4,
            ItemCategories: 8,
            CombinedAccess: 16,
            All: 255
        }, e
    }();
exports.Vault = Vault,
    function(e) {
        e.compare = util.combineComparators(function(t, r) {
            return t.type === e.TypePersonal ? -1 : r.type === e.TypePersonal ? 1 : t.type === e.TypeEveryone ? 1 : r.type === e.TypeEveryone ? -1 : 0
        }, util.compare.strings(function(e) {
            return e.name
        }), util.compare.dates(function(e) {
            return e.createdAt
        }), util.compare.strings(function(e) {
            return e.uuid
        })), e.activeUserHasAcl = function(e, t) {
            var r = e.getCombinedAcl();
            if (void 0 === r) throw new TypeError("combinedPermissions not found on vault");
            return (r & t) === t
        }
    }(Vault = exports.Vault || (exports.Vault = {})), exports.Vault = Vault;