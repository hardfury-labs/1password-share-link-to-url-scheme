import * as api from "../api";
import * as model from "../model";
import { Context } from "./context";
import AccountAttrs = api.AccountAttrs;
export { AccountAttrs };
export declare const getAccountWithAttrs: (c: Context, attrs: AccountAttrs[]) => Promise<model.Account>;
export declare const getEntireAccount: (c: Context, extraAttrs: AccountAttrs[]) => Promise<model.Account>;
export declare const loadUniverse: (c: Context) => Promise<model.Account>;
export declare const reloadUniverse: (c: Context) => Promise<model.Account>;
export declare const performSignInAccountChecks: (c: Context, account: model.Account, user: model.OldUser, translators?: SetupAccountTranslators | undefined) => Promise<void>;
export declare const checkDomainAvailability: (c: Context, domain: string, email: string) => Promise<boolean>;
export declare const getDomain: (c: Context, accountName?: string | undefined) => Promise<string>;
export declare const updateAccount: (c: Context) => Promise<void>;
export declare const updateBillingSettings: (c: Context) => Promise<void>;
export declare const changeDomain: (c: Context, domain: string) => Promise<void>;
export declare const deleteAccount: (c: Context) => Promise<void>;
export declare const verifyLockedOutAccountDeletion: (c: Context, accountUUID: string, token: string) => Promise<void>;
export declare const lockedOutDeleteAccount: (c: Context, accountUUID: string, token: string) => Promise<void>;
export declare const postImage: (c: Context, data: ArrayBuffer) => Promise<string>;
export declare const createPersonalVault: (accountType: string) => model.Vault;
export declare const personalVaultName: (accountType: string) => string;
export declare const createSharedVault: () => model.Vault;
export declare const createAdminWatchtowerKeyset: (c: Context) => Promise<void>;
/** grantGroupAccessToWatchtowerKeyset creates an ODA for given group to the Watchtower Keyset **/
export declare const grantGroupAccessToWatchtowerKeyset: (c: Context, group: model.Group) => Promise<void>;
export interface SetupAccountTranslators {
    "Access to security reports and account activity.": () => string;
}
