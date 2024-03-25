import * as api from "../api";
import { EncryptionKey } from "../util/crypto";
import { Keyset } from "./keyset";
import { SymmetricKey } from "./symmetric_key";
export declare class RecoverableVaultKey {
    vaultUuid: string;
    vaultKey: SymmetricKey;
    constructor(vaultUuid: string, vaultKey: SymmetricKey);
    encryptWithKey: (key: EncryptionKey) => Promise<api.RecoverableVaultKey>;
}
export declare class RecoverableGroupKeyset {
    groupUuid: string;
    keyset: Keyset;
    constructor(groupUuid: string, keyset: Keyset);
    encryptWithKey: (key: EncryptionKey) => Promise<api.RecoverableGroupKeyset>;
}
export declare class RecoverablePackageKey {
    packageUuid: string;
    key: SymmetricKey;
    constructor(packageUuid: string, key: SymmetricKey);
    encryptWithKey: (key: EncryptionKey) => Promise<api.RecoverablePackageKey>;
}
export declare class RecoverableKeys {
    vaultKeys: RecoverableVaultKey[];
    groupKeysets: RecoverableGroupKeyset[];
    packageKeys: RecoverablePackageKey[];
    constructor(vaultKeys: RecoverableVaultKey[], groupKeysets: RecoverableGroupKeyset[], packageKeys: RecoverablePackageKey[]);
    encryptForPerson: (user: api.UserPubKey) => Promise<api.RecoverableKeys>;
}
export declare class RecoverableKeysForPeople {
    keys: RecoverableKeys[];
    constructor(keys: RecoverableKeys[]);
    encryptForPeople: (users: readonly api.UserPubKey[]) => Promise<api.RecoverableKeysForPeople>;
}
