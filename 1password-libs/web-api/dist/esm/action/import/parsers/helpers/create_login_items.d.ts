import * as model from "../../../../model";
import { VaultItem } from "../../../../model";
import { Context } from "../../../context";
/** Function to parse login only csv records */
export declare const createLoginItems: (_context: Context, records: string[][], vault: model.Vault) => Promise<VaultItem[]>;
