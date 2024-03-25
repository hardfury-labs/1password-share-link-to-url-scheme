import { KeysetCiphertext } from "./keyset";
import { KeyDerivationInfo, SignInCredentials } from "./muk";
import { Person, PersonAttrs } from "./person";
import { SecretKey } from "./secret_key";
import { SymmetricKey } from "./symmetric_key";
import { Vault } from "./vault";
export declare const BasicNewsletter = 1;
export interface UserAttrs extends PersonAttrs {
    password?: string;
    secretKey?: SecretKey;
}
/**
 * Represents the active user object.
 * Called `OldUser` because we want to move toward simpler structures with pure
 * functions, like those in model/user.ts
 */
export declare class OldUser extends Person {
    password: string | undefined;
    secretKey: SecretKey | undefined;
    dSecret: string | undefined;
    constructor(attrs: UserAttrs);
    deriveMasterKey: (derInfo?: KeyDerivationInfo | undefined, credentials?: SignInCredentials | undefined) => Promise<SymmetricKey>;
    /**
     * Used by native apps to transfer their already-derived MUK to the web app
     */
    importMasterKey: (enc: string, rawKey: Uint8Array) => Promise<SymmetricKey>;
    generateNewKeyset: () => Promise<OldUser>;
    encryptActiveKeysetWithMasterKey: () => Promise<KeysetCiphertext>;
    getCredentials: () => SignInCredentials;
    canManageVault: (vault: Vault) => boolean;
}
