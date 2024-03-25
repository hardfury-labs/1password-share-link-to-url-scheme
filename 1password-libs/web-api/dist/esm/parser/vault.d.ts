import { Context } from "../action/context";
import * as api from "../api";
import * as model from "../model";
export declare const parseVaults: (c: Context, serverVaults: readonly api.Vault[]) => Promise<model.Vault[]>;
export declare const parseAndDecryptVaultAccessList: (c: Context, accessList: readonly api.VaultAccess[] | null) => Promise<model.VaultAccess[] | undefined>;
export declare const parseVault: (c: Context, json: api.Vault, attrMask?: number | undefined, currentVault?: model.Vault | undefined) => Promise<model.Vault>;
export declare const vaultsToAPI: (vaults: readonly model.Vault[], access?: readonly model.VaultAccess[] | undefined) => readonly api.Vault[];
export declare const vaultToAPI: (m: model.Vault, access?: readonly model.VaultAccess[] | undefined) => api.Vault;
