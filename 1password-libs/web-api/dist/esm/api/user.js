import * as t from "io-ts";
import * as util from "../util";
import {
    GroupMembership
} from "./group";
import {
    VaultAccess
} from "./vault";
export var beginChangeEmail = function(t, e) {
    return t.post("/api/v1/emailchange/begin", {
        email: e
    }).then(function() {})
};
export var completeChangeEmail = function(t, e, r) {
    return t.post("/api/v1/emailchange/complete", {
        auth: e,
        token: r
    }).then(function() {})
};
export var promptConfirmChangeEmail = function(t) {
    return t.post("/api/v1/emailchange/propose/verify").then(function() {})
};
export var User = t.readonly(t.intersection([t.type({
    uuid: t.string,
    createdAt: t.string,
    lastAuthAt: t.string,
    email: t.string,
    firstName: t.string,
    lastName: t.string,
    name: t.string,
    attrVersion: t.number,
    keysetVersion: t.number,
    state: t.string,
    type: t.string,
    avatar: t.string,
    language: t.string,
    accountKeyFormat: t.string,
    accountKeyUuid: t.string,
    combinedPermissions: t.number,
    newsletterPrefs: t.number,
    preferences: t.number,
    keysets: t.union([t.readonlyArray(util.crypto.KeysetCiphertext), t.null]),
    vaultAccess: t.union([t.readonlyArray(VaultAccess), t.null]),
    hasMFAEnabled: t.boolean
}), t.partial({
    updatedAt: t.string,
    memberships: t.array(GroupMembership.Type),
    externalGUID: t.string,
    csToken: t.string
})]));