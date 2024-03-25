import { ItemShareAvailableTo } from "../api/item_share";
import * as api from "../api/item_share";
import { ItemShareAuditDetailsAnyone, ItemShareAuditDetailsSome, ShareSeviceAuthToken } from "../model";
import { VaultItem } from "../model/vault_item";
import { JweB } from "../util/crypto";
import { Context } from "./context";
export declare const enum ItemShareLinkExpiration {
    OneView = 0,
    OneHour = 3600,
    OneDay = 86400,
    SevenDays = 604800,
    FourteenDays = 1209600,
    ThirtyDays = 2592000
}
export { ItemShareAvailableTo };
interface ItemShareMenu<X> {
    readonly entries: readonly X[];
    readonly default: X;
}
export interface ItemShareAvailableSettings {
    readonly type: "settings";
    readonly expirationMenu: ItemShareMenu<ItemShareLinkExpiration>;
    readonly availabilityMenu: ItemShareMenu<ItemShareAvailableTo>;
    readonly maxExpiry: number;
}
export interface ItemShareError {
    readonly type: "unsupported" | "accountPolicy";
}
declare type ItemShareSettingResponse = ItemShareAvailableSettings | ItemShareError;
export interface ShareHistoryForItem {
    readonly shares: readonly ShareDetails[];
}
export declare type ShareDetails = api.ShareDetails;
/**
 * Gets the share history for a given item
 */
export declare const getShareHistoryForItem: (c: Context, item: VaultItem) => Promise<ShareHistoryForItem>;
/** Get the available settings for sharing an item externally */
export declare const getItemShareSettings: (c: Context, item: VaultItem) => Promise<ItemShareSettingResponse>;
export interface ItemShareSettings {
    readonly expiration: ItemShareLinkExpiration;
    readonly availability: ItemShareAvailableTo;
    readonly emails: readonly string[];
    readonly maxExpiry: number;
}
/** Share an item with an external user */
export declare const createItemShare: (c: Context, item: VaultItem, settings: ItemShareSettings) => Promise<string>;
/** Exported only for testing */
export declare const trimItemForSharing: (item: VaultItem) => VaultItem;
export interface ItemShare {
    readonly uuid: string;
    readonly templateUuid: string;
    readonly encOverview: JweB;
    readonly encDetails: JweB;
}
/** Decrypt a shared item given the key */
export declare const decryptItemShare: (item: ItemShare, rawKey: Uint8Array) => Promise<VaultItem>;
interface ShareSecretDerivedParts {
    readonly uuid: string;
    readonly token: string;
    readonly rawKey: Uint8Array;
}
/** Given a share secret, derive the UUID and raw 256-bit key */
export declare const derivePartsFromShareSecret: (shareSecret: string) => ShareSecretDerivedParts;
interface ShareSecrets extends ShareSecretDerivedParts {
    readonly secret: string;
}
/** Generate a new share secret and get the derived UUID and 256-bit key */
export declare const generateShareSecret: () => ShareSecrets;
/** Get details for an item share audit event */
export declare const getShareAuditDetails: (c: Context, shareUuid: string) => Promise<ItemShareAuditDetailsSome | ItemShareAuditDetailsAnyone>;
/** Get an auth token for the share service */
export declare const getShareSeviceAuthToken: (CTX: Context) => Promise<ShareSeviceAuthToken>;
/** Deletes an item share */
export declare const deleteItemShare: (c: Context, vaultUuid: string, itemUuid: string, shareUuid: string) => Promise<void>;
