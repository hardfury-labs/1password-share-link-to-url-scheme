import * as api from "../api";
import { GetIntegrationsResponse, GetServiceAccountsResponse } from "../api";
import * as model from "../model";
import * as util from "../util";
import { KeysetCiphertext } from "../util/crypto";
import { Context } from "./context";
export declare const createServiceAccountPreflight: (c: Context, t: api.ServiceAccountType) => Promise<api.CreateServiceAccountPreflightResponse>;
export declare const prepServiceAccount: (c: Context, email: string, name: string, serviceAccountUuid?: string | undefined) => Promise<{
    user: model.OldUser;
    encKeyset: KeysetCiphertext;
    creds: model.LocalAuthCredentials;
}>;
/**
 * Creates a Service Account using the preflight token and generated user information.
 *
 * The details for a Service Account Token can be optionally provided. If they are provided, a token will be generated,
 * registered and returned as a result of this function.
 */
export declare const createServiceAccountV3: (c: Context, encKeyset: KeysetCiphertext, user: model.OldUser, preflightResponse: api.CreateServiceAccountPreflightResponse, userAuth: model.Auth, serviceAccountType: api.ServiceAccountType, access?: api.CreateServiceAccountAccess | undefined, serviceAccountToken?: {
    serviceAccountUuid: string;
    tokenName: string;
    tokenInfo: model.CreateTokenInfo;
    kid: string;
    signingKey: util.crypto.JwkEcPriKeyDeprecated;
    bearerToken?: string | undefined;
} | undefined, serviceAccountAvatar?: string | undefined) => Promise<{
    person: model.Person;
    saJwt?: string | undefined;
}>;
export declare const getIntegrations: (c: Context) => Promise<GetIntegrationsResponse>;
export declare const getServiceAccounts: (c: Context) => Promise<GetServiceAccountsResponse>;
export declare const getServiceAccountGroupMemberships: (c: Context, userPubKey: api.UserPubKey, groups: model.Group[], grpMembershipOptions?: model.GroupMembershipOptions | undefined) => Promise<api.GroupMembershipWithKeyset[]>;
export declare const getServiceAccountVaultAccesses: (userPubKey: api.UserPubKey, vaults: model.Vault[], vaultAccessOptions?: model.VaultAccessOptions | undefined) => Promise<api.VaultAccess[]>;
export interface GetServiceAccountOptions {
    attrs: BitMask;
    mustReload: boolean;
}
/**
 * Get details about a specific Service Account.
 */
export declare const getServiceAccount: (c: Context, serviceAccountUuid: string, options: Partial<GetServiceAccountOptions>) => Promise<model.ServiceAccountUser>;
export declare const changeServiceAccountName: (c: Context, serviceAccountUser: api.ServiceAccountsPartialUser, name: string) => Promise<void>;
export declare const changeServiceAccountAvatar: (c: Context, serviceAccountUser: api.ServiceAccountsPartialUser, avatar: string) => Promise<void>;
export declare const clearServiceAccountCache: () => void;
export declare const clearServiceAccountCacheForContext: (c: Context) => void;
