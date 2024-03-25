import * as util from "../util";
import { Session } from "./session";
export interface RolledUserKeysetData {
    readonly keys: RolledUserKeysetKeys;
    readonly keyset: util.crypto.KeysetCiphertext;
}
export interface RolledUserKeysetKeys {
    readonly vaultKeys: EncryptedVaultKeyData[];
    readonly groupKeysets: EncryptedGroupKeysetData[];
}
export interface EncryptedVaultKeyData {
    readonly vaultUuid: string;
    readonly vaultKeySN: number;
    readonly encryptedBy: string;
    readonly encVaultKey: util.crypto.JweB;
}
export interface EncryptedGroupKeysetData {
    readonly groupUuid: string;
    readonly keyset: util.crypto.KeysetCiphertext;
}
export declare const rollUserKeyset: (s: Session, data: RolledUserKeysetData) => Promise<void>;
