import * as model from "../../../model";
import { Context } from "../../context";
import { ImportTranslators } from "../index";
export declare const parseEncryptrExport: (context: Context, data: string, vault: model.Vault, translator: ImportTranslators) => Promise<model.VaultItem[]>;
