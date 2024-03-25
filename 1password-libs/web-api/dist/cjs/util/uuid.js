"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, i, t, r) {
        void 0 === r && (r = t), Object.defineProperty(e, r, {
            enumerable: !0,
            get: function() {
                return i[t]
            }
        })
    } : function(e, i, t, r) {
        void 0 === r && (r = t), e[r] = i[t]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(e, i) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: i
        })
    } : function(e, i) {
        e.default = i
    }),
    __importStar = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var i = {};
        if (null != e)
            for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && __createBinding(i, e, t);
        return __setModuleDefault(i, e), i
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getValidGroupUuid = exports.getValidVaultUuid = exports.getValidUserUuid = exports.getUuidModulo = exports.isValidAccessorUuid = exports.isValidTemplateUuid = exports.isValidGroupUuid = exports.isValidVaultUuid = exports.isValidItemUuid = exports.isValidInvitationUuid = exports.isValidUserUuid = exports.isValidAccountUuid = exports.generateUUID = void 0;
var sjcl = __importStar(require("sjcl")),
    rand_1 = require("./rand"),
    generateUUID = function() {
        return rand_1.generateRandomID(16)
    };
exports.generateUUID = generateUUID;
var isValidServerUuid = function(e) {
        return /^[2-7A-Z]{26}$/.test(e)
    },
    isValidClientUuid = function(e) {
        return /^[\da-z]{26}$/.test(e)
    };
exports.isValidAccountUuid = isValidServerUuid, exports.isValidUserUuid = isValidServerUuid, exports.isValidInvitationUuid = isValidServerUuid, exports.isValidItemUuid = isValidClientUuid, exports.isValidVaultUuid = isValidClientUuid, exports.isValidGroupUuid = isValidClientUuid, exports.isValidTemplateUuid = isValidClientUuid;
var isValidAccessorUuid = function(e) {
    return "group" === e ? exports.isValidGroupUuid : exports.isValidUserUuid
};
exports.isValidAccessorUuid = isValidAccessorUuid;
var getValidUuidFromReference = function(e) {
        return function(i) {
            return "string" == typeof i ? e(i) ? i : "" : i && i.uuid && e(i.uuid) ? i.uuid : ""
        }
    },
    getUuidModulo = function(e, i) {
        var t = e.slice(0, 8);
        try {
            var r = sjcl.codec.base32.toBits(t);
            return sjcl.bitArray.extract(r, 0, sjcl.bitArray.bitLength(r)) % i
        } catch (e) {
            return 0
        }
    };
exports.getUuidModulo = getUuidModulo, exports.getValidUserUuid = getValidUuidFromReference(exports.isValidUserUuid), exports.getValidVaultUuid = getValidUuidFromReference(exports.isValidVaultUuid), exports.getValidGroupUuid = getValidUuidFromReference(exports.isValidGroupUuid);