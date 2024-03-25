import * as model from "../../../model";
import { VaultItem } from "../../../model";
import { Context } from "../../context";
export declare const parseRoboFormExport: (_context: Context, data: string, vault: model.Vault) => Promise<VaultItem[]>;
