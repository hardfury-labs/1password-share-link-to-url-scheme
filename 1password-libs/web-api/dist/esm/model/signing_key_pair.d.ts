import * as util from "../util";
import { DecryptionKey, EncryptionKey, JweB, JwkEcPriKey, JwkEcPubKey } from "../util/crypto";
import { ECDSAPrivateKey } from "./ecdsa_private_key";
import { ECDSAPublicKey } from "./ecdsa_public_key";
export interface SigningKeyPairPlaintext {
    pubKey: JwkEcPubKey;
    priKey: JwkEcPriKey;
}
export interface SigningKeyPairCiphertext {
    pubKey: JwkEcPubKey;
    encPriKey: JweB;
}
export declare class SigningKeyPair {
    uuid: string;
    pubKey: ECDSAPublicKey | undefined;
    priKey: ECDSAPrivateKey | undefined;
    constructor(uuid?: string);
    generate: (uuid?: string | undefined) => Promise<SigningKeyPair>;
    _generateNative: (uuid?: string | undefined) => Promise<SigningKeyPair>;
    _generatePolyfill: (uuid?: string | undefined) => Promise<SigningKeyPair>;
    sign: (plaintext: Uint8Array) => Promise<util.crypto.JwsB>;
    verify: (data: Uint8Array, signature: util.crypto.JwsB) => Promise<boolean>;
    export: () => Promise<SigningKeyPair>;
    import: (json: SigningKeyPairPlaintext) => Promise<SigningKeyPair>;
    plaintextJSON(): SigningKeyPairPlaintext;
    encryptWithKey: (key: EncryptionKey) => Promise<SigningKeyPairCiphertext>;
    decryptWithKey: (key: DecryptionKey, encryptedKeyPair: SigningKeyPairCiphertext) => Promise<SigningKeyPair>;
}
