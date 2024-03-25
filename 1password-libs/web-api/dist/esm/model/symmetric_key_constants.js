export var JWK_ALG_A256GCM = "A256GCM";
var JWK_ALG_A128GCM = "A128GCM";
export var isSymKeyAlg = function(A) {
    return A === JWK_ALG_A256GCM || A === JWK_ALG_A128GCM
};
export var KID_MASTER_PASSWORD = "mp";
export var WC_ALG_A256GCM = {
    name: "AES-GCM",
    length: 256
};
var WC_ALG_A128GCM = {
    name: "AES-GCM",
    length: 128
};
export var getNativeKeyAlg = function(A) {
    switch (A) {
        case JWK_ALG_A128GCM:
            return WC_ALG_A128GCM;
        case JWK_ALG_A256GCM:
            return WC_ALG_A256GCM;
        default:
            throw new Error("Unexpected enc")
    }
};