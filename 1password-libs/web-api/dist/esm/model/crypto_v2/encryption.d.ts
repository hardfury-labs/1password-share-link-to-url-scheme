import * as util from "../../util";
import * as rsa from "../rsa";
export declare type EncryptionKey = util.crypto.JwkRsaPubKey | {
    readonly jwk: util.crypto.JwkRsaPubKey | undefined;
} | {
    readonly encryptionKeyPair: rsa.KeyPair;
};
export declare type DecryptionKey = util.crypto.JwkRsaPriKey | {
    readonly jwk: util.crypto.JwkRsaPriKey | undefined;
} | {
    readonly encryptionKeyPair: rsa.KeyPair;
};
/** Using an RSA public key, encrypt the payload */
export declare const encrypt: (key: EncryptionKey, payload: Uint8Array) => Promise<util.crypto.Jwe>;
/** Using an RSA private key, decrypt the JWE */
export declare const decrypt: (key: DecryptionKey, jwe: util.crypto.Jwe) => Promise<DecryptionResult>;
interface DecryptionResult {
    readonly header: util.crypto.JweHeader;
    readonly content: Uint8Array;
}
export {};
