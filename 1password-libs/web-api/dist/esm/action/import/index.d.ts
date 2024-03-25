import * as model from "../../model";
import { VaultItem } from "../../model";
import { Context } from "../context";
export { csvToVaultItems, BoundCustomCell, BoundTemplateCell, CellAttr, BoundCellType, CCHeader, HeaderType, ItemKind, ItemParsingKey, ItemHeader, LoginHeader, LoginItemParsingKey, SecureNoteHeader, TableHeaderOption, } from "./parsers/csv";
export { parse, removeEmptyColumns, findLongestRowLength, } from "./parsers/helpers/parser_helpers";
export declare const enum ImportFormat {
    OnePassword = "1pif",
    LastPass = "lastpass",
    Dashlane = "dashlane",
    SplashID = "splashid",
    RoboForm = "roboform",
    Encryptr = "encryptr",
    Chrome = "chrome",
    KeePassX = "keepassx",
    Apple = "apple",
    CSV = "csv"
}
export interface ImportTranslators {
    "Additional Logins": () => string;
    field: () => string;
    "Original Values": () => string;
    "Other Fields": () => string;
    "what's this?": () => string;
    "secondary login": () => string;
    email: () => string;
    "Form Fill importing is not supported. Please use a normal LastPass export file.": () => string;
}
export declare const importData: (context: Context, format: ImportFormat, data: string, vault: model.Vault, translators: ImportTranslators) => Promise<Record<string, number>>;
export declare const importVaultItems: (context: Context, vault: model.Vault, items: model.VaultItem[]) => Promise<Record<string, number>>;
