import { DecryptionKey, EncryptionKey, JweB, JwkSymKey } from "../util/crypto";
import { Keyset } from "./keyset";
import { KeyDerivationInfo, SignInCredentials } from "./muk";
import { JWK_ALG_A256GCM } from "./symmetric_key_constants";
export declare const CONTENT_TYPE = "b5+jwk+json";
/**
 * Given an encrypted blob in JWE-B format that is encrypted by a MUK,
 * extract the MUK derivation params.
 */
export declare const extractDerivationInfo: (jweB: JweB) => KeyDerivationInfo;
/**
 * An AES-GCM-256 key with associated methods
 */
export declare class SymmetricKey {
    uuid: string;
    key: CryptoKey | undefined;
    jwk: JwkSymKey | undefined;
    sn: number | undefined;
    derivation: KeyDerivationInfo | undefined;
    constructor(uuid?: string);
    generate: (enc: typeof JWK_ALG_A256GCM, uuid?: string | undefined) => Promise<JwkSymKey>;
    derive: (derivationInfo: KeyDerivationInfo, credentials: SignInCredentials) => Promise<JwkSymKey>;
    importRawKey: (enc: string, rawKey: Uint8Array) => Promise<JwkSymKey>;
    encrypt: (plaintext: Uint8Array) => Promise<JweB>;
    decrypt: (json: JweB) => Promise<Uint8Array>;
    decryptWithKeyset: (keyset: Keyset, encryptedKey: JweB) => Promise<SymmetricKey>;
    decryptWithKey: (key: DecryptionKey, encryptedKey: JweB) => Promise<SymmetricKey>;
    encryptWithKey: (key: EncryptionKey) => Promise<JweB>;
}
