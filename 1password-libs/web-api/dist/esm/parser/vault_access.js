import * as model from "../model";
export var vaultAccessToAPI = function(e) {
    if (!e.acl || model.vaultACL.isEffectivelyZero(e.acl)) throw new Error("invalid vault acl");
    if (!e.encVaultKey) throw new Error("missing vault access key");
    return {
        vaultUuid: e.vaultUuid,
        accessorType: e.accessorType,
        accessorUuid: e.accessorUuid,
        acl: e.acl,
        leaseTimeout: e.leaseTimeout,
        vaultKeySN: e.vaultKeySN,
        encryptedBy: e.encVaultKey.kid,
        encVaultKey: e.encVaultKey
    }
};