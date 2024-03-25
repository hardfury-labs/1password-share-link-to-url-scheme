import * as api from "../api";
import { DeleteVaultPreflight } from "../api";
import { DateFilterDirection } from "../api/util";
import { DefaultByCreationParams, getDateForVaultsFilter } from "../api/vault";
import * as model from "../model";
import * as util from "../util";
import { Context } from "./context";
export interface GetVaultOptions {
    attrs: BitMask;
    mustReload: boolean;
}
export interface GetVaultsOptions {
    mustReload: boolean;
    withAccessorPreviews: boolean;
}
export interface VaultParams extends api.BaseVaultParams {
    readonly types?: readonly string[];
    readonly hasClientAccess?: boolean;
    readonly permissions?: BitMask;
    readonly attrs?: BitMask;
    readonly cacheAllowanceMs?: number;
}
export declare const getVaultsV2: (c: Context, options: VaultParams) => Promise<readonly model.Vault[]>;
export interface LimitedVaultsResponse {
    readonly vaults: readonly model.Vault[];
    readonly hasMoreData: boolean;
}
export { DefaultByCreationParams, DateFilterDirection, getDateForVaultsFilter };
/**
 * Please be careful about using this endpoint, especially when setting a low vault limit.
 * This does not support any form of pagination, and therefore the return values may not be as expected when requesting vaults.
 * If an X number of vaults have the same createdAt value where X > lim, the first lim vaults will be returned
 * and the final X - lim vaults cannot be consistently fetched. In other words, given our current server limit of 25 vaults
 * if 28 vaults are created at the same time, a random selection of 3 of them won't be returned by the server.
 *
 * Alternatively, consider the following params: limit = 1, direction = newer vaults, date: 1 second before createdAt
 * of Private and Shared vault will only return either the Private vault, or the Shared vault. There is no way to
 * fetch the other vault.
 *
 * @param c Context
 * @param date ISO date string to start searching by, exclusive
 */
export declare const getVaultsByCreation: (c: Context, date: string, direction: DateFilterDirection, options?: api.LimitedVaultParams | undefined) => Promise<LimitedVaultsResponse>;
/** Get all vaults with or without the accessor previews */
export declare const getVaults: (c: Context, options?: Partial<GetVaultsOptions> | undefined) => Promise<model.Vault[]>;
/**
 * Get a vault with the given UUID or object reference.
 * If we have a local copy with the specified attributes, return it.
 * Otherwise, request the vault and attrs from the server.
 */
export declare const getVault: (c: Context, vaultRef: util.UuidRef, options?: Partial<GetVaultOptions> | undefined) => Promise<model.Vault>;
export declare const getSpecialVault: (c: Context, vaultType: string, options?: Partial<GetVaultOptions> | undefined) => Promise<model.Vault | undefined>;
/**
 * Get the everyone vault.
 * If it's not already downloaded, download it.
 * If it doesn't exist on the server, resolve with undefined.
 */
export declare const getEveryoneVault: (c: Context, options?: Partial<GetVaultOptions> | undefined) => Promise<model.Vault | undefined>;
/**
 * Get the personal vault for the current user.
 * If it's not already downloaded, download it.
 * If it doesn't exist on the server, resolve with undefined.
 */
export declare const getPersonalVault: (c: Context, options?: Partial<GetVaultOptions> | undefined) => Promise<model.Vault | undefined>;
/** Get vaults that qualify for migration */
export declare const getVaultsForAccountSplitting: (c: Context) => Promise<model.Vault[]>;
/**
 * Get the Personal vault for the current user only if it is cached, otherwise return undefined.
 */
export declare const getPersonalVaultOnlyIfCached: (c: Context) => model.Vault | undefined;
/**
 * Get the system vault for the current user.
 * If it's not already downloaded, download it.
 * If it doesn't exist on the server, resolve with undefined.
 */
export declare const getSystemVault: (c: Context) => Promise<model.Vault | undefined>;
/**
 * Create a system vault for the current user if one does not already exist.
 * Do not use this unless support has been added to the app for System vaults.
 */
export declare const createSystemVault: (c: Context) => Promise<model.Vault>;
/**
 * Get the generated passwords vault for the current user.
 * If it's not already downloaded, download it.
 * If it doesn't exist on the server, resolve with undefined.
 */
export declare const getGeneratedPasswordsVault: (c: Context) => Promise<model.Vault | undefined>;
/**
 * Create a generated passwords vault for the current user if one does not already exist.
 */
export declare const createGeneratedPasswordsVault: (c: Context) => Promise<model.Vault>;
export declare const getCreateVaultPreflight: (c: Context, vaultType: string) => Promise<api.CreateVaultPreflight>;
export declare const createAccountSplittingVaultPreflight: (c: Context) => Promise<api.CreateVaultPreflight>;
export declare const createVault: (c: Context, vaultAttrs: model.VaultAttrs, systemGroupUuids: string[]) => Promise<model.Vault>;
export declare const createVaultForAccountSplitting: (c: Context, vaultAttrs: model.VaultAttrs, systemGroupUuids: readonly string[]) => Promise<model.Vault>;
export declare const sendVault: (c: Context, vault: model.Vault, access: readonly model.VaultAccess[]) => Promise<model.Vault>;
export declare const deleteVaultPreflight: (c: Context, vault: model.Vault) => Promise<DeleteVaultPreflight>;
export declare const deleteVault: (c: Context, vault: model.Vault) => Promise<void>;
export declare const updateVault: (c: Context, vault: model.Vault) => Promise<void>;
export declare const updateVaultClientAccess: (c: Context, vaultUUID: string, clientAccess: model.BitSet) => Promise<void>;
export declare const enableTravelSafe: (c: Context, vault: model.Vault) => Promise<void>;
export declare const disableTravelSafe: (c: Context, vault: model.Vault) => Promise<void>;
export declare const replaceVaultInCache: (c: Context, oldVault: model.Vault, newVault: model.Vault) => void;
export declare const clearVaultCache: () => void;
export declare const clearVaultCacheForContext: (c: Context) => void;
export declare const clearVaultWithPreviewsCache: () => void;
export declare const clearVaultWithPreviewsCacheForContext: (c: Context) => void;
