var __awaiter = this && this.__awaiter || function(t, e, r, a) {
        return new(r || (r = Promise))(function(n, i) {
            function o(t) {
                try {
                    c(a.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function u(t) {
                try {
                    c(a.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function c(t) {
                var e;
                t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                    t(e)
                })).then(o, u)
            }
            c((a = a.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        var r, a, n, i, o = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
                return function(i) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (r = 1, a && (n = 2 & i[0] ? a.return : i[0] ? a.throw || ((n = a.return) && n.call(a), 0) : a.next) && !(n = n.call(a, i[1])).done) return n;
                        switch (a = 0, n && (i = [2 & i[0], n.value]), i[0]) {
                            case 0:
                            case 1:
                                n = i;
                                break;
                            case 4:
                                return o.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, a = i[1], i = [0];
                                continue;
                            case 7:
                                i = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
                                    o.label = i[1];
                                    break
                                }
                                if (6 === i[0] && o.label < n[1]) {
                                    o.label = n[1], n = i;
                                    break
                                }
                                if (n && o.label < n[2]) {
                                    o.label = n[2], o.ops.push(i);
                                    break
                                }
                                n[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        i = e.call(t, o)
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
                }([i, u])
            }
        }
    };
import * as t from "io-ts";
import * as util from "../util";
import {
    unsafeDecodeAs
} from "../util/validator";
import {
    LegacyActivity
} from "./activity";
import {
    IconSet
} from "./icons";
import {
    bitMaskNames,
    dataToParamString,
    DateFilterDirection,
    getDateForVaultsFilter
} from "./util";
import {
    VaultItemTemplate
} from "./vault_item_template";
export var PreviewGroup = t.readonly(t.type({
    uuid: t.string,
    avatar: t.string,
    type: t.string
}));
export var PreviewUser = t.readonly(t.type({
    uuid: t.string,
    avatar: t.string,
    initials: t.string
}));
export var VaultAccess = t.readonly(t.type({
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
}), "VaultAccess");
export var Vault = t.readonly(t.intersection([t.type({
    uuid: t.string,
    type: t.string,
    attrVersion: t.number,
    contentVersion: t.number,
    encAttrs: util.crypto.JweB
}), t.partial({
    createdAt: t.string,
    updatedAt: t.string,
    access: t.readonlyArray(VaultAccess),
    combinedAccess: VaultAccess,
    activeItemCount: t.number,
    clientAccess: t.number,
    archivedKeys: t.readonlyArray(util.crypto.JweB),
    activities: t.readonlyArray(LegacyActivity),
    itemCategories: t.readonlyArray(VaultItemTemplate),
    previewGroups: t.readonlyArray(PreviewGroup),
    previewUsers: t.readonlyArray(PreviewUser)
})]));
var attrMaskNames = ["accessors", "archived-keys", "activities", "categories", "combined-access"];
export var getVaults = function(t, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, a;
        return __generator(this, function(n) {
            return r = [e.withAccessorPreviews ? "accessor-previews" : void 0, "combined-access"].filter(function(t) {
                return void 0 !== t
            }).join(","), a = dataToParamString({
                user: e.user,
                group: e.group,
                permission: e.permission,
                attrs: r || void 0
            }), [2, t.get("/api/v1/vaults" + a)]
        })
    })
};
export var getVaultsForAccountSplitting = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            return [2, t.get("/api/v1/vaults/account-splitting")]
        })
    })
};
export {
    getDateForVaultsFilter
};
export var DefaultByCreationParams = {
    getDateString: function(t) {
        return getDateForVaultsFilter(t, void 0).toISOString()
    },
    direction: DateFilterDirection.Older,
    limit: 25
};
export var getVaultsByCreation = function(t, e, r, a) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n, i;
        return __generator(this, function(o) {
            return n = encodeURIComponent(e || DefaultByCreationParams.getDateString(r)), i = dataToParamString({
                limit: a.limit || DefaultByCreationParams.limit
            }), [2, t.get("/api/v1/vaults/timeline/" + n + "/" + r + i)]
        })
    })
};
export var getVault = function(t, e, r) {
    var a = bitMaskNames(r, attrMaskNames),
        n = a.length > 0 ? "?attrs=" + a.join(",") : "";
    return t.get("/api/v3/vault/" + e + n)
};
export var getSystemVault = function(t) {
    return t.get("/api/v1/vault/system")
};
export var getPersonalVault = function(t) {
    return t.get("/api/v1/vault/personal")
};
export var getEveryoneVault = function(t) {
    return t.get("/api/v1/vault/everyone")
};
export var getGeneratedPasswordsVault = function(t) {
    return t.get("/api/v1/vault/generatedpasswords")
};
export var updateVault = function(t, e) {
    return t.put("/api/v1/vault/" + e.uuid + "/attrs", e).then(function() {})
};
export var updateVaultClientAccess = function(t, e, r) {
    var a = {
        UUID: e,
        clientAccess: r
    };
    return t.put("/api/v1/vault/clientaccess", a).then(function() {})
};
export var addVaultAccess = function(t, e, r) {
    var a = {
        vaultaccess: r
    };
    return t.patch("/api/v2/vault/" + e + "/vaultaccess", a).then(function() {})
};
var CreateVaultPreflight = t.readonly(t.type({
    mandatoryGroupUuids: t.readonlyArray(t.string),
    adminGroupUuids: t.readonlyArray(t.string),
    enableAdminGroupsByDefault: t.boolean,
    iconSet: IconSet
}));
export var getCreateVaultPreflight = function(t, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            return [2, t.get("/api/v1/vault/preflight/create?type=" + e).then(unsafeDecodeAs(CreateVaultPreflight))]
        })
    })
};
export var createAccountSplittingVaultPreflight = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            return [2, t.get("/api/v1/vault/preflight/account-splitting/create").then(unsafeDecodeAs(CreateVaultPreflight))]
        })
    })
};
export var createVault = function(t, e) {
    return t.post("/api/v2/vault", e).then(function() {})
};
export var createVaultForAccountSplitting = function(t, e) {
    return t.post("/api/v1/vault/account-splitting", e).then(function() {})
};
var DeleteVaultPreflight = t.readonly(t.type({
    archivedItemCount: t.number
}));
export var deleteVaultPreflight = function(t, e) {
    return t.get("/api/v1/vault/preflight/delete/" + e).then(unsafeDecodeAs(DeleteVaultPreflight))
};
export var deleteVault = function(t, e) {
    return t.delete("/api/v4/vault/" + e).then(function() {})
};
export var deleteAccessorFromVault = function(t, e, r, a) {
    var n = a ? "group" : "person";
    return t.delete("/api/v1/vault/" + e + "/" + n + "/" + r).then(function() {})
};
export var updatePersonVaultAccessPermissions = function(t, e, r, a) {
    return t.patch("/api/v1/acl/person/" + e + "/" + r + "/" + a).then(function() {})
};
export var updateGroupVaultAccessPermissions = function(t, e, r, a) {
    return t.patch("/api/v1/acl/group/" + e + "/" + r + "/" + a).then(function() {})
};
export var legacyDeleteAllArchivedItems = function(t, e) {
    return t.delete("/api/v2/vault/" + e.uuid + "/" + e.contentVersion + "/trash").then(function() {})
};
export var enableTravelSafe = function(t, e) {
    return t.put("/api/v1/vault/" + e + "/enabletravel").then(function() {})
};
export var disableTravelSafe = function(t, e) {
    return t.put("/api/v1/vault/" + e + "/disabletravel").then(function() {})
};