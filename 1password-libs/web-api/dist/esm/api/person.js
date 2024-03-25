import * as t from "io-ts";
import {
    Device
} from "../shared";
import * as util from "../util";
import {
    LegacyActivity
} from "./activity";
import {
    GroupMembership
} from "./group";
import {
    bitMaskNames
} from "./util";
import {
    VaultAccess
} from "./vault";
export var BasePerson = t.intersection([t.type({
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
})], "BasePerson");
export var Person = t.intersection([BasePerson, t.partial({
    hasMFAEnabled: t.boolean,
    proposedEmail: t.string,
    pubKey: util.crypto.JwkRsaPubKey
}), t.type({
    personalItemsCount: t.union([t.number, t.null]),
    keysets: t.union([t.readonlyArray(util.crypto.KeysetCiphertext), t.null]),
    memberships: t.union([t.readonlyArray(GroupMembership.Type), t.null]),
    vaultAccess: t.union([t.readonlyArray(VaultAccess), t.null]),
    devices: t.union([t.readonlyArray(Device.Type), t.null]),
    activities: t.union([t.readonlyArray(LegacyActivity), t.null])
})], "Person");
var attrMaskNames = ["pubkey", "keysets", "groups", "vault-access", "devices", "activities", "personal-items-count", "proposed-email-change"];
export var getUser = function(e, t, r) {
    var n = bitMaskNames(r, attrMaskNames),
        s = n.length > 0 ? "&attrs=" + n.join(",") : "";
    return e.get("/api/v2/user/" + t + "?states=all" + s)
};
export var getUserPubKeys = function(e, t) {
    return e.get("/api/v1/user/pubkeys?uuids=" + t.join(","))
};
export var changeUserName = function(e, t) {
    return e.post("/api/v1/person/name", t).then(function() {})
};
export var changeUserAvatar = function(e, t) {
    return e.post("/api/v1/person/avatar", t).then(function() {})
};
export var deleteUsers = function(e, t) {
    return e.delete("/api/v1/people/" + t.join(",")).then(function() {})
};
export var deletePerson = function(e, t, r) {
    return e.delete("/api/v2/people", {
        uuid: t,
        reason: r
    })
};
export var confirmUsersWithMemberships = function(e, t, r) {
    return e.put("/api/v2/people/confirm", {
        peopleUuids: t,
        groupMemberships: r
    })
};
export var confirmUsersWithVaultAccessList = function(e, t, r) {
    return e.put("/api/v2/people/confirm", {
        peopleUuids: t,
        vaultaccess: r
    })
};
export var confirmUsersWithMembershipsAndVaultAccessList = function(e, t, r, n) {
    return e.put("/api/v2/people/confirm", {
        peopleUuids: t,
        groupMemberships: r,
        vaultaccess: n
    })
};
export var suspendUsers = function(e, t) {
    return e.put("/api/v1/people/suspend/" + t.join(",")).then(function() {})
};
export var markAwayForTravel = function(e, t) {
    return e.put("/api/v1/people/enabletravel", {
        uuids: t
    }).then(function() {})
};
export var markBackFromTravel = function(e, t) {
    return e.put("/api/v1/people/disabletravel", {
        uuids: t
    }).then(function() {})
};
export var reactivateUsers = function(e, t) {
    return e.put("/api/v1/people/reactivate/" + t.join(",")).then(function() {})
};
export var updateUser = function(e, t) {
    return e.post("/api/v1/user/attrs", t).then(function() {})
};