var __read = this && this.__read || function(e, r) {
    var o = "function" == typeof Symbol && e[Symbol.iterator];
    if (!o) return e;
    var t, n, i = o.call(e),
        s = [];
    try {
        for (;
            (void 0 === r || r-- > 0) && !(t = i.next()).done;) s.push(t.value)
    } catch (e) {
        n = {
            error: e
        }
    } finally {
        try {
            t && !t.done && (o = i.return) && o.call(i)
        } finally {
            if (n) throw n.error
        }
    }
    return s
};
import {
    map
} from "lodash-es";
import {
    findDecryptedKeyset
} from "../action/keyset";
import * as model from "../model";
import {
    makePromise as mp
} from "../util/make_promise";
var codeLocation = "parser/provisioned_keys",
    makePromise = mp(codeLocation);
export var parseProvisionedVaultKey = function(e, r) {
    return makePromise("parseProvisionedVaultKey", function() {
        return model.createSymmetricKey().decryptWithKeyset(r, e.encVaultKey).then(function(r) {
            return r.sn = e.vaultKeySN, new model.ProvisionedVaultKey(e.vaultUuid, r)
        })
    })
};
export var parseProvisionedGroupKeyset = function(e, r) {
    return makePromise("parseProvisionedGroupKeyset", function() {
        return model.Keyset.decryptWithKeyset(r, e.keyset).then(function(r) {
            return new model.ProvisionedGroupKeyset(e.groupUuid, r)
        })
    })
};
export var parseProvisionedKeys = function(e, r) {
    return makePromise("parseProvisionedKeys", function() {
        var o = findDecryptedKeyset(e, r.keyset.encryptedBy);
        return o ? model.Keyset.decryptWithKeyset(o, r.keyset).then(function(e) {
            var o = Promise.all(map(r.vaultKeys, function(r) {
                    return parseProvisionedVaultKey(r, e)
                })),
                t = Promise.all(map(r.groupKeysets, function(r) {
                    return parseProvisionedGroupKeyset(r, e)
                }));
            return Promise.all([o, t])
        }).then(function(e) {
            var r = __read(e, 2),
                o = r[0],
                t = r[1];
            return new model.ProvisionedKeys(o, t)
        }) : Promise.reject(new Error("Missing keyset for decrypting provisioned user keyset"))
    })
};