import * as api from "../api";
import * as model from "../model";
import { Context } from "./context";
export declare const getCliAffectedFiles: (c: Context, vault?: model.Vault | undefined) => Promise<readonly api.FileCreatedByCli[]>;
export declare const getCliFileEffort: (files: readonly api.FileCreatedByCli[]) => number;
export declare const getVaultUuidsForFiles: (files: readonly api.FileCreatedByCli[]) => string[];
export declare const getUnwriteableFileVaults: (c: Context, files: readonly api.FileCreatedByCli[]) => Promise<model.Vault[]>;
export declare const correctCliAffectedFiles: (c: Context, updateProgress: (percentage: number) => void, vault?: model.Vault | undefined) => Promise<void>;
export declare const getCliAffectedPrivateFiles: (c: Context) => Promise<readonly api.FileCreatedByCli[]>;
export declare const correctCliAffectedPrivateFiles: (c: Context, updateProgress: (percentage: number) => void) => Promise<void>;
interface IconRef {
    type: "icon";
    attrs: model.VaultItem.FileAttributes;
    item: model.VaultItem;
}
interface DocRef {
    type: "document";
    attrs: model.VaultItem.DocumentAttributes;
    item: model.VaultItem;
}
export declare const getHydratedRef: (c: Context, fileId: string) => ({ vaultUuid, itemUuid, }: api.FileCreatedByCliReference) => Promise<IconRef | DocRef>;
export {};
