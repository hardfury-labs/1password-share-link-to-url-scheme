"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getNativeKeyAlg = exports.WC_ALG_A256GCM = exports.KID_MASTER_PASSWORD = exports.isSymKeyAlg = exports.JWK_ALG_A256GCM = void 0, exports.JWK_ALG_A256GCM = "A256GCM";
var JWK_ALG_A128GCM = "A128GCM",
    isSymKeyAlg = function(e) {
        return e === exports.JWK_ALG_A256GCM || e === JWK_ALG_A128GCM
    };
exports.isSymKeyAlg = isSymKeyAlg, exports.KID_MASTER_PASSWORD = "mp", exports.WC_ALG_A256GCM = {
    name: "AES-GCM",
    length: 256
};
var WC_ALG_A128GCM = {
        name: "AES-GCM",
        length: 128
    },
    getNativeKeyAlg = function(e) {
        switch (e) {
            case JWK_ALG_A128GCM:
                return WC_ALG_A128GCM;
            case exports.JWK_ALG_A256GCM:
                return exports.WC_ALG_A256GCM;
            default:
                throw new Error("Unexpected enc")
        }
    };
exports.getNativeKeyAlg = getNativeKeyAlg;