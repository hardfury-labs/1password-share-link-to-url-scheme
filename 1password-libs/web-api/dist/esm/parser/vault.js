var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e
        }).apply(this, arguments)
    },
    __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(a, i) {
            function o(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function c(e) {
                var t;
                e.done ? a(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(o, s)
            }
            c((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, a, i, o = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function s(i) {
            return function(s) {
                return function(i) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (r = 1, n && (a = 2 & i[0] ? n.return : i[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, i[1])).done) return a;
                        switch (n = 0, a && (i = [2 & i[0], a.value]), i[0]) {
                            case 0:
                            case 1:
                                a = i;
                                break;
                            case 4:
                                return o.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, n = i[1], i = [0];
                                continue;
                            case 7:
                                i = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = o.trys).length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                    o.label = i[1];
                                    break
                                }
                                if (6 === i[0] && o.label < a[1]) {
                                    o.label = a[1], a = i;
                                    break
                                }
                                if (a && o.label < a[2]) {
                                    o.label = a[2], o.ops.push(i);
                                    break
                                }
                                a[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        i = t.call(e, o)
                    } catch (e) {
                        i = [6, e], n = 0
                    } finally {
                        r = a = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    };
import {
    groupBy,
    map
} from "lodash-es";
import {
    findDecryptedKeyset
} from "../action/keyset";
import * as model from "../model";
import {
    makePromise as mp
} from "../util/make_promise";
import {
    dateFromAPI
} from "./date";
import {
    vaultAccessToAPI
} from "./vault_access";
import {
    vaultItemTemplatesFromAPI
} from "./vault_item_template";
var codeLocation = "parser/vault",
    makePromise = mp(codeLocation);
export var parseVaults = function(e, t) {
    return makePromise("parseVaults", function() {
        return t ? Promise.all(t.map(function(t) {
            return parseVault(e, t)
        })) : []
    })
};
var parseAndDecryptVaultAccessRecord = function(e, t, r) {
        return makePromise("parseAndDecryptVaultAccessRecord", function() {
            var n = new model.VaultAccess(__assign(__assign({}, r), {
                vaultUuid: t.uuid
            }));
            if (!n.encVaultKey) return n;
            var a = findDecryptedKeyset(e, n.encVaultKey.kid);
            return a ? n.decryptVaultKey(a).then(function(e) {
                return t.activeKey || (t.activeKey = e), n
            }).catch(function(e) {
                return console.error("parser/vault#parseAndDecryptVaultAccessRecord", e), n
            }) : n
        })
    },
    createPlaceholderVault = function(e) {
        return new model.Vault({
            uuid: e,
            name: "",
            type: model.Vault.TypeClientPlaceholder,
            desc: ""
        })
    };
export var parseAndDecryptVaultAccessList = function(e, t) {
    return makePromise("parseAndDecryptVaultAccessList", function() {
        if (!t) return Promise.resolve(void 0);
        if (0 === t.length) return Promise.resolve([]);
        var r = map(t, function(t) {
            return parseAndDecryptVaultAccessRecord(e, createPlaceholderVault(t.vaultUuid), t)
        });
        return Promise.all(r)
    })
};
export var parseVault = function(e, t, r, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        var a, i, o;
        return __generator(this, function(s) {
            switch (s.label) {
                case 0:
                    if ((a = n || new model.Vault({
                            uuid: t.uuid,
                            name: "",
                            type: t.type,
                            desc: ""
                        })).createdAt = dateFromAPI(t.createdAt), a.updatedAt = dateFromAPI(t.updatedAt), a.attrVersion = t.attrVersion, a.contentVersion = t.contentVersion, a.activeItemCount = t.activeItemCount || 0, a.clientAccess = t.clientAccess || model.BitSet.empty(), t.previewUsers && (a.previewUsers = t.previewUsers.slice()), t.previewGroups && (a.previewGroups = t.previewGroups.slice()), t.activities && (a.activities = t.activities.map(model.Activity.fromLegacyApi)), t.itemCategories && (a.itemTemplates = vaultItemTemplatesFromAPI(t.itemCategories.slice())), t.combinedAccess && a.setCombinedAcl(t.combinedAccess.acl), !t.access) throw new Error("Missing vault access information: " + t.uuid);
                    return i = t.access.map(function(t) {
                        return parseAndDecryptVaultAccessRecord(e, a, t)
                    }), [4, Promise.all(i)];
                case 1:
                    return o = s.sent(), a.setAccessList(o), [4, a.decryptAttrs(t.encAttrs)];
                case 2:
                    return s.sent(), r && a.addAttrMask(r), [2, a]
            }
        })
    })
};
export var vaultsToAPI = function(e, t) {
    var r = t ? groupBy(t, "vaultUuid") : {};
    return e.map(function(e) {
        return vaultToAPI(e, r[e.uuid])
    })
};
export var vaultToAPI = function(e, t) {
    if (!e.uuid) throw new Error("Vault missing uuid");
    if (!e.encAttrs) throw new Error("Vault missing EncAttrs");
    if (!e.type) throw new Error("Vault missing type");
    return {
        uuid: e.uuid,
        type: e.type,
        attrVersion: e.attrVersion,
        contentVersion: e.contentVersion,
        encAttrs: e.encAttrs,
        access: t && t.length > 0 ? t.map(vaultAccessToAPI) : void 0
    }
};