import * as t from "io-ts";
import { Device } from "../shared";
import * as util from "../util";
import { Auth } from "./auth";
import { GroupMembershipWithKeyset } from "./group";
import { Person } from "./person";
import { Session } from "./session";
import { UserRegistration } from "./signup";
import { Vault, VaultAccess } from "./vault";
export interface PostUserProvisionCreate {
    user: UserRegistration;
    keyset: util.crypto.KeysetCiphertext;
    userAuth: Auth;
    vault: Vault;
    access: PostUserProvisionCreateAccess;
}
export interface ResendProvisionData {
    readonly userUuids: readonly string[];
    readonly useToken: boolean | undefined;
}
export interface PostUserProvisionCreateAccess {
    vaults: VaultAccess[];
    groups?: GroupMembershipWithKeyset[];
}
export interface AcceptProvisionData {
    readonly accountKeyFormat: string;
    readonly accountKeyUuid: string;
    readonly device: Device.Type;
    readonly keyset: util.crypto.KeysetCiphertext;
    readonly language: string;
    readonly token: string;
    readonly userAuth: Auth;
    readonly uuid: string;
}
export interface Provision {
    uuid: string;
    accountName: string;
    accountType: string;
    domain: string;
    name: string;
    email: string;
    accountUsesNewKeysets?: boolean;
    passwordRules: string;
}
declare const ResendDetails: t.ReadonlyC<t.TypeC<{
    lastResendAt: t.UnionC<[t.StringC, t.UndefinedC]>;
    resendAllCooldown: t.NumberC;
}>>;
export declare type ResendDetails = t.TypeOf<typeof ResendDetails>;
export declare const createProvisionUser: (s: Session, signupInfo: PostUserProvisionCreate) => Promise<Person>;
export declare const startUserProvision: (s: Session, userUUID: string, options: {
    token?: boolean;
}) => Promise<void>;
export declare const resendUserProvision: (s: Session, resendData: ResendProvisionData) => Promise<void>;
export declare const resendAllUsersProvision: (s: Session) => Promise<void>;
export declare const getResendDetails: (s: Session) => Promise<ResendDetails>;
export declare const getProvisionDetails: (s: Session, userUUID: string, token: string) => Promise<Provision>;
export declare const acceptProvision: (s: Session, data: AcceptProvisionData) => Promise<void>;
export declare const getProvisionedPersonalVault: (s: Session, userUUID: string) => Promise<Vault>;
export interface ProvisionedVaultKey {
    vaultUuid: string;
    vaultKeySN: number;
    encryptedBy: string;
    encVaultKey: util.crypto.JweB;
}
export interface ProvisionedGroupKeyset {
    groupUuid: string;
    keyset: util.crypto.KeysetCiphertext;
}
export interface ProvisionCompletionRequest {
    provisionedKeys: ProvisionCompletionKeys;
    personalVault: Vault;
}
export interface ProvisionedKeys {
    keyset: util.crypto.KeysetCiphertext;
    vaultKeys: ProvisionedVaultKey[];
    groupKeysets: ProvisionedGroupKeyset[];
}
export interface ProvisionCompletionKeys {
    vaultKeys: ProvisionedVaultKey[];
    groupKeysets: ProvisionedGroupKeyset[];
}
export declare const completeUserProvision: (s: Session, userUUID: string, completionRequest: ProvisionCompletionRequest) => Promise<void>;
export declare const getUserProvisionedKeys: (s: Session, userUUID: string) => Promise<ProvisionedKeys>;
export {};
