import * as api from "../api";
import { Context } from "./context";
/**
 * getVaultManagers returns the vault managers for a given vault
 */
export declare const getVaultManagers: (c: Context, vaultUuid: string) => Promise<api.VaultManagers>;
