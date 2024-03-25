import * as model from "../model";
import * as util from "../util";
import { Context } from "./context";
interface AccessOptions {
    readonly byUuid?: Record<string, model.VaultAccessOptions>;
    readonly default: model.VaultAccessOptions;
}
export declare const addAccessorsToVault: (c: Context, accessors: readonly model.BasicVaultAccessor[], vault: model.Vault, options: AccessOptions) => Promise<void>;
export declare const addAccessorToVaults: (c: Context, accessor: model.BasicVaultAccessor, vaults: readonly model.Vault[], options: model.VaultAccessOptions) => Promise<void>;
export declare const updateVaultAccessPermissions: (c: Context, vaultAccess: model.PartialVaultAccess) => Promise<void>;
declare type Accessor<T extends "group" | "user"> = T extends "group" ? model.Group : model.Person;
export declare const deleteAccessorFromVault: <T extends "user" | "group">(c: Context, accessorRef: util.UuidRef, vaultRef: util.UuidRef, accessorType: T) => Promise<[model.Vault, Accessor<T>]>;
export declare const revokeVaultAccess: (c: Context, access: model.PartialVaultAccess) => Promise<[model.Vault, model.VaultAccessor]>;
export {};
