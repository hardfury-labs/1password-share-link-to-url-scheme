import * as model from "../../../model";
import { VaultItem } from "../../../model";
import { Context } from "../../context";
/** Function to parse Apple csv files for importing logins */
export declare const parseAppleExport: (_context: Context, csv: string, vault: model.Vault) => Promise<VaultItem[]>;
