"use strict";
var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var t, r = 1, a = arguments.length; r < a; r++)
                for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
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
        return new(r || (r = Promise))(function(n, s) {
            function i(e) {
                try {
                    u(a.next(e))
                } catch (e) {
                    s(e)
                }
            }

            function o(e) {
                try {
                    u(a.throw(e))
                } catch (e) {
                    s(e)
                }
            }

            function u(e) {
                var t;
                e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(i, o)
            }
            u((a = a.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, a, n, s, i = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: o(0),
            throw: o(1),
            return: o(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s;

        function o(s) {
            return function(o) {
                return function(s) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (r = 1, a && (n = 2 & s[0] ? a.return : s[0] ? a.throw || ((n = a.return) && n.call(a), 0) : a.next) && !(n = n.call(a, s[1])).done) return n;
                        switch (a = 0, n && (s = [2 & s[0], n.value]), s[0]) {
                            case 0:
                            case 1:
                                n = s;
                                break;
                            case 4:
                                return i.label++, {
                                    value: s[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, a = s[1], s = [0];
                                continue;
                            case 7:
                                s = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = i.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                                    i.label = s[1];
                                    break
                                }
                                if (6 === s[0] && i.label < n[1]) {
                                    i.label = n[1], n = s;
                                    break
                                }
                                if (n && i.label < n[2]) {
                                    i.label = n[2], i.ops.push(s);
                                    break
                                }
                                n[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        s = t.call(e, i)
                    } catch (e) {
                        s = [6, e], a = 0
                    } finally {
                        r = n = 0
                    }
                    if (5 & s[0]) throw s[1];
                    return {
                        value: s[0] ? s[1] : void 0,
                        done: !0
                    }
                }([s, o])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.vaultToAPI = exports.vaultsToAPI = exports.parseVault = exports.parseAndDecryptVaultAccessList = exports.parseVaults = void 0;
var lodash_es_1 = require("lodash-es"),
    keyset_1 = require("../action/keyset"),
    model = __importStar(require("../model")),
    make_promise_1 = require("../util/make_promise"),
    date_1 = require("./date"),
    vault_access_1 = require("./vault_access"),
    vault_item_template_1 = require("./vault_item_template"),
    codeLocation = "parser/vault",
    makePromise = make_promise_1.makePromise(codeLocation),
    parseVaults = function(e, t) {
        return makePromise("parseVaults", function() {
            return t ? Promise.all(t.map(function(t) {
                return exports.parseVault(e, t)
            })) : []
        })
    };
exports.parseVaults = parseVaults;
var parseAndDecryptVaultAccessRecord = function(e, t, r) {
        return makePromise("parseAndDecryptVaultAccessRecord", function() {
            var a = new model.VaultAccess(__assign(__assign({}, r), {
                vaultUuid: t.uuid
            }));
            if (!a.encVaultKey) return a;
            var n = keyset_1.findDecryptedKeyset(e, a.encVaultKey.kid);
            return n ? a.decryptVaultKey(n).then(function(e) {
                return t.activeKey || (t.activeKey = e), a
            }).catch(function(e) {
                return console.error("parser/vault#parseAndDecryptVaultAccessRecord", e), a
            }) : a
        })
    },
    createPlaceholderVault = function(e) {
        return new model.Vault({
            uuid: e,
            name: "",
            type: model.Vault.TypeClientPlaceholder,
            desc: ""
        })
    },
    parseAndDecryptVaultAccessList = function(e, t) {
        return makePromise("parseAndDecryptVaultAccessList", function() {
            if (!t) return Promise.resolve(void 0);
            if (0 === t.length) return Promise.resolve([]);
            var r = lodash_es_1.map(t, function(t) {
                return parseAndDecryptVaultAccessRecord(e, createPlaceholderVault(t.vaultUuid), t)
            });
            return Promise.all(r)
        })
    };
exports.parseAndDecryptVaultAccessList = parseAndDecryptVaultAccessList;
var parseVault = function(e, t, r, a) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n, s, i;
        return __generator(this, function(o) {
            switch (o.label) {
                case 0:
                    if ((n = a || new model.Vault({
                            uuid: t.uuid,
                            name: "",
                            type: t.type,
                            desc: ""
                        })).createdAt = date_1.dateFromAPI(t.createdAt), n.updatedAt = date_1.dateFromAPI(t.updatedAt), n.attrVersion = t.attrVersion, n.contentVersion = t.contentVersion, n.activeItemCount = t.activeItemCount || 0, n.clientAccess = t.clientAccess || model.BitSet.empty(), t.previewUsers && (n.previewUsers = t.previewUsers.slice()), t.previewGroups && (n.previewGroups = t.previewGroups.slice()), t.activities && (n.activities = t.activities.map(model.Activity.fromLegacyApi)), t.itemCategories && (n.itemTemplates = vault_item_template_1.vaultItemTemplatesFromAPI(t.itemCategories.slice())), t.combinedAccess && n.setCombinedAcl(t.combinedAccess.acl), !t.access) throw new Error("Missing vault access information: " + t.uuid);
                    return s = t.access.map(function(t) {
                        return parseAndDecryptVaultAccessRecord(e, n, t)
                    }), [4, Promise.all(s)];
                case 1:
                    return i = o.sent(), n.setAccessList(i), [4, n.decryptAttrs(t.encAttrs)];
                case 2:
                    return o.sent(), r && n.addAttrMask(r), [2, n]
            }
        })
    })
};
exports.parseVault = parseVault;
var vaultsToAPI = function(e, t) {
    var r = t ? lodash_es_1.groupBy(t, "vaultUuid") : {};
    return e.map(function(e) {
        return exports.vaultToAPI(e, r[e.uuid])
    })
};
exports.vaultsToAPI = vaultsToAPI;
var vaultToAPI = function(e, t) {
    if (!e.uuid) throw new Error("Vault missing uuid");
    if (!e.encAttrs) throw new Error("Vault missing EncAttrs");
    if (!e.type) throw new Error("Vault missing type");
    return {
        uuid: e.uuid,
        type: e.type,
        attrVersion: e.attrVersion,
        contentVersion: e.contentVersion,
        encAttrs: e.encAttrs,
        access: t && t.length > 0 ? t.map(vault_access_1.vaultAccessToAPI) : void 0
    }
};
exports.vaultToAPI = vaultToAPI;