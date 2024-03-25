import * as model from "../../../model";
import { VaultItem } from "../../../model";
import { Context } from "../../context";
export declare const parseChromeExport: (_context: Context, csv: string, vault: model.Vault) => Promise<VaultItem[]>;
