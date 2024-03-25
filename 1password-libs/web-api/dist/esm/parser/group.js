import {
    decryptKeysets,
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
    parseAndDecryptVaultAccessList
} from "./vault";
import {
    vaultAccessToAPI
} from "./vault_access";
var codeLocation = "parser/group",
    makePromise = mp(codeLocation);
export var parseGroups = function(e, r) {
    return makePromise("parseGroups", function() {
        return Promise.all(r.map(function(r) {
            return parseGroup(e, r)
        }))
    })
};
export var parseGroup = function(e, r, t, s) {
    return makePromise("parseGroup", function() {
        var o = {
                uuid: r.uuid,
                name: r.name,
                desc: r.desc,
                type: r.type,
                activeKeysetUuid: r.activeKeysetUuid,
                createdAt: dateFromAPI(r.createdAt),
                updatedAt: dateFromAPI(r.updatedAt),
                attrVersion: r.attrVersion,
                avatar: r.avatar,
                permissions: r.permissions
            },
            a = s || new model.Group(o);
        s && a.setOverview(o), r.recoverableKeyset && (a.recoverableKeyset = r.recoverableKeyset), r.activities && (a.activities = r.activities.map(model.Activity.fromLegacyApi));
        var i, c = Promise.resolve();
        return r.pubKey && (c = (i = new model.RSAPublicKey(r.pubKey.kid, void 0, r.pubKey)).import()), c.then(function() {
            return a.clearCachedAccessInfo(), r.memberships && (a.memberships = r.memberships), i && (a.pubKey = i), t && a.addAttrMask(t), r.vaultAccess && r.vaultAccess.length > 0 ? parseAndDecryptVaultAccessList(e, r.vaultAccess).then(function(e) {
                e && a.setVaultAccessList(e)
            }).catch(function(e) {
                throw console.error("Failed to parse accessList:", e), e
            }) : Promise.resolve()
        }).then(function() {
            return r.recoveryKeyset ? (a.recoveryKeyset = r.recoveryKeyset, findDecryptedKeyset(e, r.activeKeysetUuid) && a.type !== model.Group.TypeRecovery ? decryptKeysets(e, [a.recoveryKeyset]).catch(function() {
                return Promise.resolve()
            }) : Promise.resolve()) : Promise.resolve()
        }).then(function() {
            return Promise.resolve(a)
        })
    })
};
export var groupToAPI = function(e, r) {
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
        o && o.length > 0 && (t.vaultAccess = o.map(vaultAccessToAPI))
    }
    return t
};