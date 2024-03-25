import * as model from "../../../model";
import { VaultItem } from "../../../model";
import { Context } from "../../context";
import { ImportTranslators } from "../index";
export declare const parseLastPassExport: (context: Context, data: string, vault: model.Vault, translators: ImportTranslators) => Promise<VaultItem[]>;
