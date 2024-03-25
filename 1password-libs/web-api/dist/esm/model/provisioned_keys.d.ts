import * as api from "../api";
import { EncryptionKey } from "../util/crypto";
import { Keyset } from "./keyset";
import { Person } from "./person";
import { RSAPublicKey } from "./rsa_public_key";
import { SymmetricKey } from "./symmetric_key";
export declare class ProvisionedVaultKey {
    vaultUuid: string;
    vaultKey: SymmetricKey;
    constructor(vaultUuid: string, vaultKey: SymmetricKey);
    encryptWithKey: (key: EncryptionKey) => Promise<api.ProvisionedVaultKey>;
}
export declare class ProvisionedGroupKeyset {
    groupUuid: string;
    keyset: Keyset;
    constructor(groupUuid: string, keyset: Keyset);
    encryptWithKey: (key: EncryptionKey) => Promise<api.ProvisionedGroupKeyset>;
}
export declare class ProvisionedKeys {
    vaultKeys: ProvisionedVaultKey[];
    groupKeysets: ProvisionedGroupKeyset[];
    constructor(vaultKeys: ProvisionedVaultKey[], groupKeysets: ProvisionedGroupKeyset[]);
    encryptForPerson: (person: Person) => Promise<api.ProvisionCompletionKeys>;
    encryptWithPubKey: (pubKey: RSAPublicKey) => Promise<api.ProvisionCompletionKeys>;
}
