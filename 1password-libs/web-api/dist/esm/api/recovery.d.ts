import { Device } from "../shared";
import * as util from "../util";
import { Auth } from "./auth";
import { Session } from "./session";
export interface Recovery {
    uuid: string;
    accountName: string;
    accountType: string;
    domain: string;
    name: string;
    email: string;
    accountUsesNewKeysets?: boolean;
    passwordRules: string;
}
export interface ContinueRecoveryData {
    readonly accountKeyFormat: string;
    readonly accountKeyUuid: string;
    readonly device: Device.Type;
    readonly keyset: util.crypto.KeysetCiphertext;
    readonly language: string;
    readonly token: string;
    readonly userAuth: Auth;
    readonly uuid: string;
}
export declare const getRecoveryDetails: (s: Session, uuid: string, token: string) => Promise<Recovery>;
export declare const beginRecovery: (s: Session, uuids: readonly string[]) => Promise<void>;
export declare const continueRecovery: (s: Session, data: ContinueRecoveryData) => Promise<void>;
export declare const cancelRecovery: (s: Session, uuids: readonly string[]) => Promise<void>;
export interface RecoverableVaultKey {
    vaultUuid: string;
    vaultKeySN: number;
    encryptedBy: string;
    encVaultKey: util.crypto.JweB;
}
export interface RecoverableGroupKeyset {
    groupUuid: string;
    keyset: util.crypto.KeysetCiphertext;
}
export interface RecoverablePackageKey {
    packageUuid: string;
    key: util.crypto.JweB;
}
export interface RecoverableKeys {
    vaultKeys: RecoverableVaultKey[];
    groupKeysets: RecoverableGroupKeyset[];
    packageKeys: RecoverablePackageKey[];
}
export interface RecoverableKeysForPeople {
    keys: RecoverableKeys[];
}
export declare const completeRecovery: (s: Session, uuids: readonly string[], jsonKeysArray: RecoverableKeysForPeople) => Promise<void>;
export declare const getRecoverableKeysForPeople: (s: Session, uuids: readonly string[]) => Promise<RecoverableKeysForPeople>;
