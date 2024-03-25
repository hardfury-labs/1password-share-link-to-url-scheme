"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, r, t, s) {
        void 0 === s && (s = t), Object.defineProperty(e, s, {
            enumerable: !0,
            get: function() {
                return r[t]
            }
        })
    } : function(e, r, t, s) {
        void 0 === s && (s = t), e[s] = r[t]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(e, r) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: r
        })
    } : function(e, r) {
        e.default = r
    }),
    __importStar = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var r = {};
        if (null != e)
            for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && __createBinding(r, e, t);
        return __setModuleDefault(r, e), r
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.groupToAPI = exports.parseGroup = exports.parseGroups = void 0;
var keyset_1 = require("../action/keyset"),
    model = __importStar(require("../model")),
    make_promise_1 = require("../util/make_promise"),
    date_1 = require("./date"),
    vault_1 = require("./vault"),
    vault_access_1 = require("./vault_access"),
    codeLocation = "parser/group",
    makePromise = make_promise_1.makePromise(codeLocation),
    parseGroups = function(e, r) {
        return makePromise("parseGroups", function() {
            return Promise.all(r.map(function(r) {
                return exports.parseGroup(e, r)
            }))
        })
    };
exports.parseGroups = parseGroups;
var parseGroup = function(e, r, t, s) {
    return makePromise("parseGroup", function() {
        var o = {
                uuid: r.uuid,
                name: r.name,
                desc: r.desc,
                type: r.type,
                activeKeysetUuid: r.activeKeysetUuid,
                createdAt: date_1.dateFromAPI(r.createdAt),
                updatedAt: date_1.dateFromAPI(r.updatedAt),
                attrVersion: r.attrVersion,
                avatar: r.avatar,
                permissions: r.permissions
            },
            a = s || new model.Group(o);
        s && a.setOverview(o), r.recoverableKeyset && (a.recoverableKeyset = r.recoverableKeyset), r.activities && (a.activities = r.activities.map(model.Activity.fromLegacyApi));
        var i, u = Promise.resolve();
        return r.pubKey && (u = (i = new model.RSAPublicKey(r.pubKey.kid, void 0, r.pubKey)).import()), u.then(function() {
            return a.clearCachedAccessInfo(), r.memberships && (a.memberships = r.memberships), i && (a.pubKey = i), t && a.addAttrMask(t), r.vaultAccess && r.vaultAccess.length > 0 ? vault_1.parseAndDecryptVaultAccessList(e, r.vaultAccess).then(function(e) {
                e && a.setVaultAccessList(e)
            }).catch(function(e) {
                throw console.error("Failed to parse accessList:", e), e
            }) : Promise.resolve()
        }).then(function() {
            return r.recoveryKeyset ? (a.recoveryKeyset = r.recoveryKeyset, keyset_1.findDecryptedKeyset(e, r.activeKeysetUuid) && a.type !== model.Group.TypeRecovery ? keyset_1.decryptKeysets(e, [a.recoveryKeyset]).catch(function() {
                return Promise.resolve()
            }) : Promise.resolve()) : Promise.resolve()
        }).then(function() {
            return Promise.resolve(a)
        })
    })
};
exports.parseGroup = parseGroup;
var groupToAPI = function(e, r) {
    var t = {
        uuid: e.uuid,
        name: e.name,
        type: e.type,
        desc: e.desc,
        activeKeysetUuid: e.activeKeysetUuid || "",
        attrVersion: e.attrVersion,
        recoverableKeyset: e.recoverableKeyset,
        recoveryKeyset: e.recoveryKeyset,
        avatar: e.avatar,
        permissions: e.permissions
    };
    if (e.archivedKeysets.length > 0 && (t.archivedKeysets = e.archivedKeysets), 0 != (r & model.Group.Attr.PubKey) && e.pubKey && (t.pubKey = e.pubKey.jwk), 0 != (r & model.Group.Attr.Memberships)) {
        if (e.type !== model.Group.TypeRecovery && 0 === e.memberships.length) {
            var s = new Error("Non-Recovery Group must have at least one member");
            throw console.error("[groupToAPI]", s), s
        }
        t.memberships = e.memberships
    }
    if (0 != (r & model.Group.Attr.VaultAccess)) {
        var o = e.getUnsafeVaultAccessList();
        o && o.length > 0 && (t.vaultAccess = o.map(vault_access_1.vaultAccessToAPI))
    }
    return t
};
exports.groupToAPI = groupToAPI;