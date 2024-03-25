import { DecryptionKey, EncryptionKey, JweB, JwkRsaPriKey, JwkRsaPubKey } from "../util/crypto";
import { RSAPrivateKey } from "./rsa_private_key";
import { RSAPublicKey } from "./rsa_public_key";
export interface EncryptionKeyPairPlaintext {
    readonly pubKey: JwkRsaPubKey;
    readonly priKey: JwkRsaPriKey;
}
export interface EncryptionKeyPairCiphertext {
    readonly pubKey: JwkRsaPubKey;
    readonly encPriKey: JweB;
}
export declare class EncryptionKeyPair {
    uuid: string;
    pubKey: RSAPublicKey;
    priKey: RSAPrivateKey;
    encrypt: (plaintext: Uint8Array) => Promise<JweB>;
    decrypt: (ciphertext: JweB) => Promise<Uint8Array>;
    constructor(uuid: string, pubKey: RSAPublicKey, priKey: RSAPrivateKey);
    encryptWithKey: (key: EncryptionKey) => Promise<EncryptionKeyPairCiphertext>;
}
export declare namespace EncryptionKeyPair {
    const generate: (uuid?: string | undefined) => Promise<EncryptionKeyPair>;
    const decryptWithKey: (key: DecryptionKey, { pubKey, encPriKey }: EncryptionKeyPairCiphertext) => Promise<EncryptionKeyPair>;
}
