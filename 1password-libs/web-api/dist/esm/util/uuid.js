import * as sjcl from "sjcl";
import {
    generateRandomID
} from "./rand";
export var generateUUID = function() {
    return generateRandomID(16)
};
var isValidServerUuid = function(i) {
        return /^[2-7A-Z]{26}$/.test(i)
    },
    isValidClientUuid = function(i) {
        return /^[\da-z]{26}$/.test(i)
    };
export var isValidAccountUuid = isValidServerUuid;
export var isValidUserUuid = isValidServerUuid;
export var isValidInvitationUuid = isValidServerUuid;
export var isValidItemUuid = isValidClientUuid;
export var isValidVaultUuid = isValidClientUuid;
export var isValidGroupUuid = isValidClientUuid;
export var isValidTemplateUuid = isValidClientUuid;
export var isValidAccessorUuid = function(i) {
    return "group" === i ? isValidGroupUuid : isValidUserUuid
};
var getValidUuidFromReference = function(i) {
    return function(r) {
        return "string" == typeof r ? i(r) ? r : "" : r && r.uuid && i(r.uuid) ? r.uuid : ""
    }
};
export var getUuidModulo = function(i, r) {
    var e = i.slice(0, 8);
    try {
        var t = sjcl.codec.base32.toBits(e);
        return sjcl.bitArray.extract(t, 0, sjcl.bitArray.bitLength(t)) % r
    } catch (i) {
        return 0
    }
};
export var getValidUserUuid = getValidUuidFromReference(isValidUserUuid);
export var getValidVaultUuid = getValidUuidFromReference(isValidVaultUuid);
export var getValidGroupUuid = getValidUuidFromReference(isValidGroupUuid);