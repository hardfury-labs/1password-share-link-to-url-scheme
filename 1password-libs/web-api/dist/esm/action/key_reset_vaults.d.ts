import * as api from "../api";
import { Context } from "./context";
export declare const getCliVaultEffort: (vaults: readonly api.Vault[]) => number;
export interface VaultsResult {
    readonly succeeded: Record<string, string>;
    readonly succeededCsv: Blob | undefined;
    readonly errors?: readonly Error[];
}
/** Returns a mapping of old UUIDs to new UUIDs */
export declare const correctCliAffectedVaults: (c: Context, updateProgress: (percentage: number) => void) => Promise<VaultsResult>;
export declare const getCliAffectedPrivateVaultStatus: (c: Context) => Promise<boolean>;
export declare const getCliPrivateVaultEffort: (isAffected: boolean) => number;
export declare const correctCliAffectedPrivateVault: (c: Context, updateProgress: (percentage: number) => void) => Promise<ReplaceVaultResult | undefined>;
export interface ReplaceVaultResult {
    readonly oldUuid: string;
    readonly newUuid: string;
}
