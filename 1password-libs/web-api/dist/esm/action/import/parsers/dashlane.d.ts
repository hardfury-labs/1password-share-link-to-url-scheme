import * as model from "../../../model";
import { Context } from "../../context";
import { ImportTranslators } from "../index";
export declare const parseDashlaneExport: (_context: Context, data: string, vault: model.Vault, translators: ImportTranslators) => Promise<model.VaultItem[]>;
