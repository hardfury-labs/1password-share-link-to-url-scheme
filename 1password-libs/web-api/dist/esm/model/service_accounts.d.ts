import { Auth, GroupMembershipWithKeyset, PartialUser, UserRegistration, ServiceAccountToken, ObjectDataAccessAcl, ServiceAccountBillables, ServiceAccountType } from "../api";
import { KeysetCiphertext } from "../util/crypto";
import { LegacyActivity } from "./activity";
import { BitSet } from "./bit_set";
import { PersonAttrs } from "./person";
import { VaultAccess } from "./vault_access";
export interface ServiceAccountGeneratedEmailResponse {
    email: string;
    token: string;
}
export interface CreateServiceAccountRequest {
    readonly userRegistration: UserRegistration;
    readonly emailToken: string;
    readonly keyset: KeysetCiphertext;
    readonly userAuth: Auth;
    readonly serviceAccountType: ServiceAccountType;
    readonly access?: CreateServiceAccountAccess;
    readonly serviceAccountSubtype?: string;
}
export interface CreateServiceAccountAccess {
    vaults?: VaultAccess[];
    groups?: GroupMembershipWithKeyset[];
}
export interface ServiceAccountsPartialUser extends PartialUser {
    createdAt: string;
    creatorUUID: string;
    serviceAccountType: ServiceAccountType;
    serviceAccountSubtype: string;
}
export interface ServiceAccountVaultAccess {
    totalVaults: number;
    displayable: VaultAccess[];
}
/**
 * ServiceAccount full details.
 * ServiceAccounts share attributes with a Person instance, but a
 * Person encapsulates more information like VaultAccess.
 **/
export interface ServiceAccountAttrs extends PersonAttrs {
    creatorUuid: string;
    serviceAccountType: ServiceAccountType;
    readonly serviceAccountVaultAccess?: ServiceAccountVaultAccess;
    readonly activities?: LegacyActivity[];
    readonly billables?: ServiceAccountBillables;
}
export declare class ServiceAccountUser {
    uuid: string;
    email: string;
    creatorUuid: string;
    serviceAccountType: ServiceAccountType;
    attrVersion: number;
    keysetVersion: number;
    name: string;
    state: string;
    type: string;
    avatar: string;
    language: string;
    combinedPermissions: BitSet;
    newsletterPrefs: number;
    preferences: BitSet;
    externalGUID?: string;
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
    lastAuthAt: Date | undefined;
    readonly activities: LegacyActivity[] | undefined;
    readonly billables: ServiceAccountBillables | undefined;
    private _attrMask;
    private _tokenJtiMap;
    private readonly _serviceAccountVaultAccess;
    static Attr: {
        None: number;
        Tokens: number;
        VaultAccess: number;
        Activities: number;
        Billables: number;
        All: number;
    };
    constructor(attrs: ServiceAccountAttrs);
    hasAttrMask(attrMask: BitMask): boolean;
    addAttrMask(attrMask: BitMask): void;
    static translateAttrMaskNames(attrMask: number): string[];
    get tokens(): ServiceAccountToken[];
    set tokens(tokens: ServiceAccountToken[]);
    getToken(jti: string): ServiceAccountToken | undefined;
    /**
     * A Service Account's vault access list is the intersection of:
     * (1) the active user's vault access,
     * (2) the service account's vault access.
     *
     * To get the total number of vaults the Service Account can access, use `totalAccessibleVaults`.
     */
    get displayableVaultAccess(): VaultAccess[];
    /**
     * The number of vaults the Service Account can access. This number will not match `.vaultAccess` if
     * the active user cannot access the same set of vaults as the Service Account.
     */
    get totalAccessibleVaults(): number;
}
export declare const ServiceAccountActions: {
    readonly CreateToken: ObjectDataAccessAcl.ServiceAccountTokenCreate;
    readonly RevokeToken: ObjectDataAccessAcl.ServiceAccountTokenRevoke;
    readonly EditToken: ObjectDataAccessAcl.ServiceAccountTokenEdit;
    readonly CreateServiceAccount: ObjectDataAccessAcl.ServiceAccountCreate;
    readonly EditServiceAccount: ObjectDataAccessAcl.ServiceAccountEdit;
    readonly DeleteServiceAccount: ObjectDataAccessAcl.ServiceAccountDelete;
    readonly EditVaultAccess: ObjectDataAccessAcl.ServiceAccountConnectVaultAccessEdit;
};
export declare type ServiceAccountActions = typeof ServiceAccountActions[keyof typeof ServiceAccountActions];
export declare const validServiceAccountAcl: ServiceAccountActions[];
export declare const ServiceAccountTokenState: {
    readonly Active: "A";
    readonly Revoked: "R";
};
export declare type ServiceAccountTokenState = typeof ServiceAccountTokenState[keyof typeof ServiceAccountTokenState];
