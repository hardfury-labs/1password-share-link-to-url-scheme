import * as t from "io-ts";
import { Session } from "./session";
export declare const FileReference: t.ReadonlyC<t.TypeC<{
    fileId: t.StringC;
    signature: t.StringC;
}>>;
export declare type FileReference = t.TypeOf<typeof FileReference>;
export declare const VaultItem: t.IntersectionC<[t.TypeC<{
    uuid: t.StringC;
    templateUuid: t.StringC;
    itemVersion: t.NumberC;
    encryptedBy: t.StringC;
    encOverview: t.IntersectionC<[t.TypeC<{
        kid: t.StringC;
        enc: t.StringC;
        cty: t.StringC;
        data: t.StringC;
    }>, t.PartialC<{
        iv: t.StringC;
        alg: t.StringC;
        p2c: t.NumberC;
        p2s: t.StringC;
    }>]>;
}>, t.PartialC<{
    faveIndex: t.NumberC;
    trashed: t.StringC;
    createdAt: t.StringC;
    updatedAt: t.StringC;
    changerUuid: t.StringC;
    packageUuid: t.StringC;
    encDetails: t.IntersectionC<[t.TypeC<{
        kid: t.StringC;
        enc: t.StringC;
        cty: t.StringC;
        data: t.StringC;
    }>, t.PartialC<{
        iv: t.StringC;
        alg: t.StringC;
        p2c: t.NumberC;
        p2s: t.StringC;
    }>]>;
    fileReferences: t.ReadonlyArrayC<t.ReadonlyC<t.TypeC<{
        fileId: t.StringC;
        signature: t.StringC;
    }>>>;
}>]>;
export declare type VaultItem = t.TypeOf<typeof VaultItem>;
export interface ItemsResponse {
    readonly items?: readonly VaultItem[];
    readonly contentVersion: number;
    readonly deletedItemUuids?: readonly string[];
    readonly batchComplete: boolean;
}
export declare const getVaultItemsOverviews: (s: Session, vaultUUID: string) => Promise<readonly VaultItem[]>;
export declare const getVaultItems: (s: Session, vaultUUID: string, modifiedSinceContentVersion: number) => Promise<ItemsResponse>;
export declare const getVaultItemDetails: (s: Session, vaultUUID: string, itemUUID: string) => Promise<VaultItem>;
export declare const getVaultItemVersion: (s: Session, vaultUUID: string, itemUUID: string) => Promise<number>;
export interface ItemHistoryMetadata {
    changerUUID: string;
    changerFullName: string;
    changerEmail: string;
    changerAvatar: string;
    updatedAt: string;
    itemVersion: number;
}
export interface ItemHistoryResponse {
    history: ItemHistoryMetadata[];
}
export declare const getVaultItemHistory: (s: Session, vaultUUID: string, itemUUID: string) => Promise<ItemHistoryResponse>;
export declare const getPreviousVersionOfItem: (s: Session, vaultUUID: string, itemUUID: string, itemVersion: number) => Promise<VaultItem>;
export declare const getDeletedVaultItems: (s: Session, vaultUUID: string) => Promise<VaultItem[]>;
export declare const postPurgeDeletedVaultItems: (s: Session, vaultUUID: string, itemUUIDs: string[]) => Promise<void>;
export declare const deleteVaultItemHistory: (s: Session, vaultUuid: string, itemUuid: string) => Promise<void>;
export interface PatchVaultItemsResponse {
    contentVersion: number;
    updatedItems: Record<string, number>;
    failedItems: Record<string, number>;
}
export declare const patchVaultItems: (s: Session, vaultUUID: string, contentVersion: number, items: VaultItem[]) => Promise<PatchVaultItemsResponse>;
