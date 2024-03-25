"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(t, e, r, a) {
        void 0 === a && (a = r), Object.defineProperty(t, a, {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    } : function(t, e, r, a) {
        void 0 === a && (a = r), t[a] = e[r]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(t, e) {
        Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        })
    } : function(t, e) {
        t.default = e
    }),
    __importStar = this && this.__importStar || function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var r in t) "default" !== r && Object.prototype.hasOwnProperty.call(t, r) && __createBinding(e, t, r);
        return __setModuleDefault(e, t), e
    },
    __awaiter = this && this.__awaiter || function(t, e, r, a) {
        return new(r || (r = Promise))(function(n, i) {
            function u(t) {
                try {
                    l(a.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function o(t) {
                try {
                    l(a.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function l(t) {
                var e;
                t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                    t(e)
                })).then(u, o)
            }
            l((a = a.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        var r, a, n, i, u = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: o(0),
            throw: o(1),
            return: o(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function o(i) {
            return function(o) {
                return function(i) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (r = 1, a && (n = 2 & i[0] ? a.return : i[0] ? a.throw || ((n = a.return) && n.call(a), 0) : a.next) && !(n = n.call(a, i[1])).done) return n;
                        switch (a = 0, n && (i = [2 & i[0], n.value]), i[0]) {
                            case 0:
                            case 1:
                                n = i;
                                break;
                            case 4:
                                return u.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                u.label++, a = i[1], i = [0];
                                continue;
                            case 7:
                                i = u.ops.pop(), u.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = u.trys).length > 0 && n[n.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
                                    u.label = i[1];
                                    break
                                }
                                if (6 === i[0] && u.label < n[1]) {
                                    u.label = n[1], n = i;
                                    break
                                }
                                if (n && u.label < n[2]) {
                                    u.label = n[2], u.ops.push(i);
                                    break
                                }
                                n[2] && u.ops.pop(), u.trys.pop();
                                continue
                        }
                        i = e.call(t, u)
                    } catch (t) {
                        i = [6, t], a = 0
                    } finally {
                        r = n = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, o])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.disableTravelSafe = exports.enableTravelSafe = exports.legacyDeleteAllArchivedItems = exports.updateGroupVaultAccessPermissions = exports.updatePersonVaultAccessPermissions = exports.deleteAccessorFromVault = exports.deleteVault = exports.deleteVaultPreflight = exports.createVaultForAccountSplitting = exports.createVault = exports.createAccountSplittingVaultPreflight = exports.getCreateVaultPreflight = exports.addVaultAccess = exports.updateVaultClientAccess = exports.updateVault = exports.getGeneratedPasswordsVault = exports.getEveryoneVault = exports.getPersonalVault = exports.getSystemVault = exports.getVault = exports.getVaultsByCreation = exports.DefaultByCreationParams = exports.getDateForVaultsFilter = exports.getVaultsForAccountSplitting = exports.getVaults = exports.Vault = exports.VaultAccess = exports.PreviewUser = exports.PreviewGroup = void 0;
var t = __importStar(require("io-ts")),
    util = __importStar(require("../util")),
    validator_1 = require("../util/validator"),
    activity_1 = require("./activity"),
    icons_1 = require("./icons"),
    util_1 = require("./util");
Object.defineProperty(exports, "getDateForVaultsFilter", {
    enumerable: !0,
    get: function() {
        return util_1.getDateForVaultsFilter
    }
});
var vault_item_template_1 = require("./vault_item_template");
exports.PreviewGroup = t.readonly(t.type({
    uuid: t.string,
    avatar: t.string,
    type: t.string
})), exports.PreviewUser = t.readonly(t.type({
    uuid: t.string,
    avatar: t.string,
    initials: t.string
})), exports.VaultAccess = t.readonly(t.type({
    vaultUuid: t.string,
    accessorType: t.keyof({
        group: !0,
        user: !0
    }),
    accessorUuid: t.string,
    vaultKeySN: t.number,
    encVaultKey: t.union([util.crypto.JweB, t.undefined]),
    encryptedBy: t.string,
    acl: t.number,
    leaseTimeout: t.number
}), "VaultAccess"), exports.Vault = t.readonly(t.intersection([t.type({
    uuid: t.string,
    type: t.string,
    attrVersion: t.number,
    contentVersion: t.number,
    encAttrs: util.crypto.JweB
}), t.partial({
    createdAt: t.string,
    updatedAt: t.string,
    access: t.readonlyArray(exports.VaultAccess),
    combinedAccess: exports.VaultAccess,
    activeItemCount: t.number,
    clientAccess: t.number,
    archivedKeys: t.readonlyArray(util.crypto.JweB),
    activities: t.readonlyArray(activity_1.LegacyActivity),
    itemCategories: t.readonlyArray(vault_item_template_1.VaultItemTemplate),
    previewGroups: t.readonlyArray(exports.PreviewGroup),
    previewUsers: t.readonlyArray(exports.PreviewUser)
})]));
var attrMaskNames = ["accessors", "archived-keys", "activities", "categories", "combined-access"],
    getVaults = function(t, e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, a;
            return __generator(this, function(n) {
                return r = [e.withAccessorPreviews ? "accessor-previews" : void 0, "combined-access"].filter(function(t) {
                    return void 0 !== t
                }).join(","), a = util_1.dataToParamString({
                    user: e.user,
                    group: e.group,
                    permission: e.permission,
                    attrs: r || void 0
                }), [2, t.get("/api/v1/vaults" + a)]
            })
        })
    };
exports.getVaults = getVaults;
var getVaultsForAccountSplitting = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            return [2, t.get("/api/v1/vaults/account-splitting")]
        })
    })
};
exports.getVaultsForAccountSplitting = getVaultsForAccountSplitting, exports.DefaultByCreationParams = {
    getDateString: function(t) {
        return util_1.getDateForVaultsFilter(t, void 0).toISOString()
    },
    direction: util_1.DateFilterDirection.Older,
    limit: 25
};
var getVaultsByCreation = function(t, e, r, a) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n, i;
        return __generator(this, function(u) {
            return n = encodeURIComponent(e || exports.DefaultByCreationParams.getDateString(r)), i = util_1.dataToParamString({
                limit: a.limit || exports.DefaultByCreationParams.limit
            }), [2, t.get("/api/v1/vaults/timeline/" + n + "/" + r + i)]
        })
    })
};
exports.getVaultsByCreation = getVaultsByCreation;
var getVault = function(t, e, r) {
    var a = util_1.bitMaskNames(r, attrMaskNames),
        n = a.length > 0 ? "?attrs=" + a.join(",") : "";
    return t.get("/api/v3/vault/" + e + n)
};
exports.getVault = getVault;
var getSystemVault = function(t) {
    return t.get("/api/v1/vault/system")
};
exports.getSystemVault = getSystemVault;
var getPersonalVault = function(t) {
    return t.get("/api/v1/vault/personal")
};
exports.getPersonalVault = getPersonalVault;
var getEveryoneVault = function(t) {
    return t.get("/api/v1/vault/everyone")
};
exports.getEveryoneVault = getEveryoneVault;
var getGeneratedPasswordsVault = function(t) {
    return t.get("/api/v1/vault/generatedpasswords")
};
exports.getGeneratedPasswordsVault = getGeneratedPasswordsVault;
var updateVault = function(t, e) {
    return t.put("/api/v1/vault/" + e.uuid + "/attrs", e).then(function() {})
};
exports.updateVault = updateVault;
var updateVaultClientAccess = function(t, e, r) {
    var a = {
        UUID: e,
        clientAccess: r
    };
    return t.put("/api/v1/vault/clientaccess", a).then(function() {})
};
exports.updateVaultClientAccess = updateVaultClientAccess;
var addVaultAccess = function(t, e, r) {
    var a = {
        vaultaccess: r
    };
    return t.patch("/api/v2/vault/" + e + "/vaultaccess", a).then(function() {})
};
exports.addVaultAccess = addVaultAccess;
var CreateVaultPreflight = t.readonly(t.type({
        mandatoryGroupUuids: t.readonlyArray(t.string),
        adminGroupUuids: t.readonlyArray(t.string),
        enableAdminGroupsByDefault: t.boolean,
        iconSet: icons_1.IconSet
    })),
    getCreateVaultPreflight = function(t, e) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(r) {
                return [2, t.get("/api/v1/vault/preflight/create?type=" + e).then(validator_1.unsafeDecodeAs(CreateVaultPreflight))]
            })
        })
    };
exports.getCreateVaultPreflight = getCreateVaultPreflight;
var createAccountSplittingVaultPreflight = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            return [2, t.get("/api/v1/vault/preflight/account-splitting/create").then(validator_1.unsafeDecodeAs(CreateVaultPreflight))]
        })
    })
};
exports.createAccountSplittingVaultPreflight = createAccountSplittingVaultPreflight;
var createVault = function(t, e) {
    return t.post("/api/v2/vault", e).then(function() {})
};
exports.createVault = createVault;
var createVaultForAccountSplitting = function(t, e) {
    return t.post("/api/v1/vault/account-splitting", e).then(function() {})
};
exports.createVaultForAccountSplitting = createVaultForAccountSplitting;
var DeleteVaultPreflight = t.readonly(t.type({
        archivedItemCount: t.number
    })),
    deleteVaultPreflight = function(t, e) {
        return t.get("/api/v1/vault/preflight/delete/" + e).then(validator_1.unsafeDecodeAs(DeleteVaultPreflight))
    };
exports.deleteVaultPreflight = deleteVaultPreflight;
var deleteVault = function(t, e) {
    return t.delete("/api/v4/vault/" + e).then(function() {})
};
exports.deleteVault = deleteVault;
var deleteAccessorFromVault = function(t, e, r, a) {
    var n = a ? "group" : "person";
    return t.delete("/api/v1/vault/" + e + "/" + n + "/" + r).then(function() {})
};
exports.deleteAccessorFromVault = deleteAccessorFromVault;
var updatePersonVaultAccessPermissions = function(t, e, r, a) {
    return t.patch("/api/v1/acl/person/" + e + "/" + r + "/" + a).then(function() {})
};
exports.updatePersonVaultAccessPermissions = updatePersonVaultAccessPermissions;
var updateGroupVaultAccessPermissions = function(t, e, r, a) {
    return t.patch("/api/v1/acl/group/" + e + "/" + r + "/" + a).then(function() {})
};
exports.updateGroupVaultAccessPermissions = updateGroupVaultAccessPermissions;
var legacyDeleteAllArchivedItems = function(t, e) {
    return t.delete("/api/v2/vault/" + e.uuid + "/" + e.contentVersion + "/trash").then(function() {})
};
exports.legacyDeleteAllArchivedItems = legacyDeleteAllArchivedItems;
var enableTravelSafe = function(t, e) {
    return t.put("/api/v1/vault/" + e + "/enabletravel").then(function() {})
};
exports.enableTravelSafe = enableTravelSafe;
var disableTravelSafe = function(t, e) {
    return t.put("/api/v1/vault/" + e + "/disabletravel").then(function() {})
};
exports.disableTravelSafe = disableTravelSafe;