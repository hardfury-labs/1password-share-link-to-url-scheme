"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, s) {
        void 0 === s && (s = r), Object.defineProperty(e, s, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, s) {
        void 0 === s && (s = r), e[s] = t[r]
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
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.updateUser = exports.reactivateUsers = exports.markBackFromTravel = exports.markAwayForTravel = exports.suspendUsers = exports.confirmUsersWithMembershipsAndVaultAccessList = exports.confirmUsersWithVaultAccessList = exports.confirmUsersWithMemberships = exports.deletePerson = exports.deleteUsers = exports.changeUserAvatar = exports.changeUserName = exports.getUserPubKeys = exports.getUser = exports.Person = exports.BasePerson = void 0;
var t = __importStar(require("io-ts")),
    shared_1 = require("../shared"),
    util = __importStar(require("../util")),
    activity_1 = require("./activity"),
    group_1 = require("./group"),
    util_1 = require("./util"),
    vault_1 = require("./vault");
exports.BasePerson = t.intersection([t.type({
    uuid: t.string,
    email: t.string,
    name: t.string,
    state: t.string,
    type: t.string,
    attrVersion: t.number,
    keysetVersion: t.number
}), t.partial({
    avatar: t.string,
    language: t.string,
    combinedPermissions: t.number,
    newsletterPrefs: t.number,
    preferences: t.number,
    externalGUID: t.string,
    createdAt: t.string,
    updatedAt: t.string,
    lastAuthAt: t.string
})], "BasePerson"), exports.Person = t.intersection([exports.BasePerson, t.partial({
    hasMFAEnabled: t.boolean,
    proposedEmail: t.string,
    pubKey: util.crypto.JwkRsaPubKey
}), t.type({
    personalItemsCount: t.union([t.number, t.null]),
    keysets: t.union([t.readonlyArray(util.crypto.KeysetCiphertext), t.null]),
    memberships: t.union([t.readonlyArray(group_1.GroupMembership.Type), t.null]),
    vaultAccess: t.union([t.readonlyArray(vault_1.VaultAccess), t.null]),
    devices: t.union([t.readonlyArray(shared_1.Device.Type), t.null]),
    activities: t.union([t.readonlyArray(activity_1.LegacyActivity), t.null])
})], "Person");
var attrMaskNames = ["pubkey", "keysets", "groups", "vault-access", "devices", "activities", "personal-items-count", "proposed-email-change"],
    getUser = function(e, t, r) {
        var s = util_1.bitMaskNames(r, attrMaskNames),
            n = s.length > 0 ? "&attrs=" + s.join(",") : "";
        return e.get("/api/v2/user/" + t + "?states=all" + n)
    };
exports.getUser = getUser;
var getUserPubKeys = function(e, t) {
    return e.get("/api/v1/user/pubkeys?uuids=" + t.join(","))
};
exports.getUserPubKeys = getUserPubKeys;
var changeUserName = function(e, t) {
    return e.post("/api/v1/person/name", t).then(function() {})
};
exports.changeUserName = changeUserName;
var changeUserAvatar = function(e, t) {
    return e.post("/api/v1/person/avatar", t).then(function() {})
};
exports.changeUserAvatar = changeUserAvatar;
var deleteUsers = function(e, t) {
    return e.delete("/api/v1/people/" + t.join(",")).then(function() {})
};
exports.deleteUsers = deleteUsers;
var deletePerson = function(e, t, r) {
    return e.delete("/api/v2/people", {
        uuid: t,
        reason: r
    })
};
exports.deletePerson = deletePerson;
var confirmUsersWithMemberships = function(e, t, r) {
    return e.put("/api/v2/people/confirm", {
        peopleUuids: t,
        groupMemberships: r
    })
};
exports.confirmUsersWithMemberships = confirmUsersWithMemberships;
var confirmUsersWithVaultAccessList = function(e, t, r) {
    return e.put("/api/v2/people/confirm", {
        peopleUuids: t,
        vaultaccess: r
    })
};
exports.confirmUsersWithVaultAccessList = confirmUsersWithVaultAccessList;
var confirmUsersWithMembershipsAndVaultAccessList = function(e, t, r, s) {
    return e.put("/api/v2/people/confirm", {
        peopleUuids: t,
        groupMemberships: r,
        vaultaccess: s
    })
};
exports.confirmUsersWithMembershipsAndVaultAccessList = confirmUsersWithMembershipsAndVaultAccessList;
var suspendUsers = function(e, t) {
    return e.put("/api/v1/people/suspend/" + t.join(",")).then(function() {})
};
exports.suspendUsers = suspendUsers;
var markAwayForTravel = function(e, t) {
    return e.put("/api/v1/people/enabletravel", {
        uuids: t
    }).then(function() {})
};
exports.markAwayForTravel = markAwayForTravel;
var markBackFromTravel = function(e, t) {
    return e.put("/api/v1/people/disabletravel", {
        uuids: t
    }).then(function() {})
};
exports.markBackFromTravel = markBackFromTravel;
var reactivateUsers = function(e, t) {
    return e.put("/api/v1/people/reactivate/" + t.join(",")).then(function() {})
};
exports.reactivateUsers = reactivateUsers;
var updateUser = function(e, t) {
    return e.post("/api/v1/user/attrs", t).then(function() {})
};
exports.updateUser = updateUser;