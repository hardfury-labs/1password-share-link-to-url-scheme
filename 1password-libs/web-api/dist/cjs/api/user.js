"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(t, e, r, n) {
        void 0 === n && (n = r), Object.defineProperty(t, n, {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    } : function(t, e, r, n) {
        void 0 === n && (n = r), t[n] = e[r]
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
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.User = exports.promptConfirmChangeEmail = exports.completeChangeEmail = exports.beginChangeEmail = void 0;
var t = __importStar(require("io-ts")),
    util = __importStar(require("../util")),
    group_1 = require("./group"),
    vault_1 = require("./vault"),
    beginChangeEmail = function(t, e) {
        return t.post("/api/v1/emailchange/begin", {
            email: e
        }).then(function() {})
    };
exports.beginChangeEmail = beginChangeEmail;
var completeChangeEmail = function(t, e, r) {
    return t.post("/api/v1/emailchange/complete", {
        auth: e,
        token: r
    }).then(function() {})
};
exports.completeChangeEmail = completeChangeEmail;
var promptConfirmChangeEmail = function(t) {
    return t.post("/api/v1/emailchange/propose/verify").then(function() {})
};
exports.promptConfirmChangeEmail = promptConfirmChangeEmail, exports.User = t.readonly(t.intersection([t.type({
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
    vaultAccess: t.union([t.readonlyArray(vault_1.VaultAccess), t.null]),
    hasMFAEnabled: t.boolean
}), t.partial({
    updatedAt: t.string,
    memberships: t.array(group_1.GroupMembership.Type),
    externalGUID: t.string,
    csToken: t.string
})]));