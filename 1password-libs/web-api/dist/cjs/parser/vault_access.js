"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, a) {
        void 0 === a && (a = r), Object.defineProperty(e, a, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, a) {
        void 0 === a && (a = r), e[a] = t[r]
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
}), exports.vaultAccessToAPI = void 0;
var model = __importStar(require("../model")),
    vaultAccessToAPI = function(e) {
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
exports.vaultAccessToAPI = vaultAccessToAPI;