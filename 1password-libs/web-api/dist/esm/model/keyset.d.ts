import { DecryptionKey, EncryptionKey, JweB, JwsB, KeysetCiphertext } from "../util/crypto";
import { EncryptionKeyPair } from "./encryption_key_pair";
import { SigningKeyPair } from "./signing_key_pair";
import { SymmetricKey } from "./symmetric_key";
export { KeysetCiphertext };
export declare class Keyset {
    uuid: string;
    symKey: SymmetricKey;
    ekeyPair: EncryptionKeyPair;
    skeyPair?: SigningKeyPair | undefined;
    sn: number;
    constructor(uuid: string, symKey: SymmetricKey, ekeyPair: EncryptionKeyPair, skeyPair?: SigningKeyPair | undefined, sn?: number);
    hasSigningKeys(): boolean;
    generateSigningKeys: () => Promise<SigningKeyPair>;
    sign: (plaintext: Uint8Array) => Promise<JwsB>;
    verify: (data: Uint8Array, signature: JwsB) => Promise<boolean>;
    encrypt: (plaintext: Uint8Array) => Promise<JweB>;
    decrypt: (ciphertext: JweB) => Promise<ArrayBuffer>;
    encryptWithKey: (key: EncryptionKey) => Promise<KeysetCiphertext>;
}
export declare namespace Keyset {
    const generateWithSigningKeys: () => Promise<Keyset>;
    const generateWithoutSigningKeys: () => Promise<Keyset>;
    const decryptWithKeyset: (keyset: Keyset, encryptedKeyset: KeysetCiphertext) => Promise<Keyset>;
    const decryptWithKey: (key: DecryptionKey, encryptedKeyset: KeysetCiphertext) => Promise<Keyset>;
}
