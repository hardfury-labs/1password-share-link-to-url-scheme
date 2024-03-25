"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, r, t, o) {
        void 0 === o && (o = t), Object.defineProperty(e, o, {
            enumerable: !0,
            get: function() {
                return r[t]
            }
        })
    } : function(e, r, t, o) {
        void 0 === o && (o = t), e[o] = r[t]
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
    },
    __read = this && this.__read || function(e, r) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var o, i, s = t.call(e),
            n = [];
        try {
            for (;
                (void 0 === r || r-- > 0) && !(o = s.next()).done;) n.push(o.value)
        } catch (e) {
            i = {
                error: e
            }
        } finally {
            try {
                o && !o.done && (t = s.return) && t.call(s)
            } finally {
                if (i) throw i.error
            }
        }
        return n
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.parseProvisionedKeys = exports.parseProvisionedGroupKeyset = exports.parseProvisionedVaultKey = void 0;
var lodash_es_1 = require("lodash-es"),
    keyset_1 = require("../action/keyset"),
    model = __importStar(require("../model")),
    make_promise_1 = require("../util/make_promise"),
    codeLocation = "parser/provisioned_keys",
    makePromise = make_promise_1.makePromise(codeLocation),
    parseProvisionedVaultKey = function(e, r) {
        return makePromise("parseProvisionedVaultKey", function() {
            return model.createSymmetricKey().decryptWithKeyset(r, e.encVaultKey).then(function(r) {
                return r.sn = e.vaultKeySN, new model.ProvisionedVaultKey(e.vaultUuid, r)
            })
        })
    };
exports.parseProvisionedVaultKey = parseProvisionedVaultKey;
var parseProvisionedGroupKeyset = function(e, r) {
    return makePromise("parseProvisionedGroupKeyset", function() {
        return model.Keyset.decryptWithKeyset(r, e.keyset).then(function(r) {
            return new model.ProvisionedGroupKeyset(e.groupUuid, r)
        })
    })
};
exports.parseProvisionedGroupKeyset = parseProvisionedGroupKeyset;
var parseProvisionedKeys = function(e, r) {
    return makePromise("parseProvisionedKeys", function() {
        var t = keyset_1.findDecryptedKeyset(e, r.keyset.encryptedBy);
        return t ? model.Keyset.decryptWithKeyset(t, r.keyset).then(function(e) {
            var t = Promise.all(lodash_es_1.map(r.vaultKeys, function(r) {
                    return exports.parseProvisionedVaultKey(r, e)
                })),
                o = Promise.all(lodash_es_1.map(r.groupKeysets, function(r) {
                    return exports.parseProvisionedGroupKeyset(r, e)
                }));
            return Promise.all([t, o])
        }).then(function(e) {
            var r = __read(e, 2),
                t = r[0],
                o = r[1];
            return new model.ProvisionedKeys(t, o)
        }) : Promise.reject(new Error("Missing keyset for decrypting provisioned user keyset"))
    })
};
exports.parseProvisionedKeys = parseProvisionedKeys;