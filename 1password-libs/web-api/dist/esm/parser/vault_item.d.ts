import { Context } from "../action/context";
import * as api from "../api";
import * as model from "../model";
import { VaultItem } from "../model";
export declare const reportSectionItemUsageFromApi: (c: Context, report: api.ReportItem) => Promise<model.ReportSectionItemUsage[]>;
export declare const vaultItemsFromAPI: (apiVaultItems: readonly api.VaultItem[], vault: model.Vault) => Promise<VaultItem[]>;
export declare const vaultItemFromAPI: (json: api.VaultItem, vaultOrItem: model.Vault | VaultItem) => Promise<VaultItem>;
export declare const vaultItemToApi: (item: VaultItem) => Promise<api.VaultItem>;
