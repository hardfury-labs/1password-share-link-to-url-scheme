import { DecryptionKey, JweB, JwkSymKey } from "../util/crypto";
import { KeyDerivationInfo, SignInCredentials } from "./muk";
import { SymmetricKey } from "./symmetric_key";
import { JWK_ALG_A256GCM } from "./symmetric_key_constants";
/**
 * Create a SymmetricKey object, using the polyfill version if necessary
 */
export declare const createSymmetricKey: (uuid?: string | undefined) => SymmetricKey;
/**
 * Given derivation information and a user's sign-in credentials, derive the
 * Master Unlock Key (MUK).
 */
export declare const deriveMasterKey: (derivationInfo: KeyDerivationInfo, credentials: SignInCredentials) => Promise<SymmetricKey>;
/**
 * Used by native apps to transfer their already-derived MUK to the web app
 */
export declare const importMasterKey: (enc: string, rawKey: Uint8Array) => Promise<SymmetricKey>;
/**
 * A polyfill version of `SymmetricKey`, powered by SJCL
 */
export declare class SymmetricKeyPf extends SymmetricKey {
    cipher: sjcl.SjclCipher | undefined;
    constructor(uuid?: string);
    generate: (enc: typeof JWK_ALG_A256GCM, uuid?: string | undefined) => Promise<JwkSymKey>;
    importRawKey: (enc: string, rawKey: Uint8Array) => Promise<JwkSymKey>;
    derive: (derivationInfo: KeyDerivationInfo, credentials: SignInCredentials) => Promise<JwkSymKey>;
    encrypt: (plaintext: Uint8Array) => Promise<JweB>;
    decrypt: (json: JweB) => Promise<Uint8Array>;
    decryptWithKey: (key: DecryptionKey, encryptedKey: JweB) => Promise<SymmetricKey>;
}
