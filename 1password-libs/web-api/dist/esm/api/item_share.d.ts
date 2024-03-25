import * as t from "io-ts";
import { JweB } from "../util/crypto";
import { Session } from "./session";
export declare enum ItemShareAvailableTo {
    AnyoneWithTheLink = "P",
    OnlySomePeople = "A"
}
declare const ItemSharePreflightResponse: t.ReadonlyC<t.TypeC<{
    allowedTypes: t.ReadonlyArrayC<t.Type<ItemShareAvailableTo, ItemShareAvailableTo, unknown>>;
    maxExpiry: t.NumberC;
    allowedEmailDomains: t.UnionC<[t.ReadonlyArrayC<t.StringC>, t.UndefinedC]>;
}>>;
export declare type ItemSharePreflightResponse = t.TypeOf<typeof ItemSharePreflightResponse>;
export declare enum ItemShareState {
    Active = "A",
    Inactive = "I"
}
declare const ShareDetails: t.ReadonlyC<t.TypeC<{
    uuid: t.StringC;
    state: t.Type<ItemShareState, ItemShareState, unknown>;
    itemVersion: t.NumberC;
    createdAt: t.Type<Date, string, unknown>;
    expiresAt: t.Type<Date, string, unknown>;
    sharedBy: t.ReadonlyC<t.TypeC<{
        uuid: t.StringC;
        name: t.UnionC<[t.StringC, t.UndefinedC]>;
    }>>;
    type: t.Type<ItemShareAvailableTo, ItemShareAvailableTo, unknown>;
    accessors: t.UnionC<[t.ReadonlyArrayC<t.StringC>, t.UndefinedC]>;
    viewCount: t.NumberC;
    maxViews: t.UnionC<[t.NumberC, t.UndefinedC]>;
    canDelete: t.BooleanC;
}>>;
export declare type ShareDetails = t.TypeOf<typeof ShareDetails>;
declare const ShareHistoryForItemResponse: t.ReadonlyC<t.TypeC<{
    shares: t.ReadonlyArrayC<t.ReadonlyC<t.TypeC<{
        uuid: t.StringC;
        state: t.Type<ItemShareState, ItemShareState, unknown>;
        itemVersion: t.NumberC;
        createdAt: t.Type<Date, string, unknown>;
        expiresAt: t.Type<Date, string, unknown>;
        sharedBy: t.ReadonlyC<t.TypeC<{
            uuid: t.StringC;
            name: t.UnionC<[t.StringC, t.UndefinedC]>;
        }>>;
        type: t.Type<ItemShareAvailableTo, ItemShareAvailableTo, unknown>;
        accessors: t.UnionC<[t.ReadonlyArrayC<t.StringC>, t.UndefinedC]>;
        viewCount: t.NumberC;
        maxViews: t.UnionC<[t.NumberC, t.UndefinedC]>;
        canDelete: t.BooleanC;
    }>>>;
}>>;
export declare type ShareHistoryForItemResponse = t.TypeOf<typeof ShareHistoryForItemResponse>;
/**
 * Retrieves the share history for a given item
 */
export declare const getShareHistoryForItem: (s: Session, vaultUuid: string, itemUuid: string) => Promise<ShareHistoryForItemResponse>;
/** Get the item sharing preflight response for the given item */
export declare const getItemSharePreflight: (s: Session, vaultUuid: string, itemUuid: string) => Promise<ItemSharePreflightResponse>;
export interface CreateItemShareRequest {
    readonly uuid: string;
    readonly token: string;
    readonly vaultUuid: string;
    readonly itemUuid: string;
    readonly itemVersion: number;
    readonly encOverview: JweB;
    readonly encDetails: JweB;
    readonly type: string;
    readonly accessors: readonly string[];
    readonly expiry: number;
    readonly maxViews: number;
}
declare const CreateItemShareResponse: t.ReadonlyC<t.TypeC<{
    url: t.StringC;
}>>;
export declare type CreateItemShareResponse = t.TypeOf<typeof CreateItemShareResponse>;
/** Share an item with external users */
export declare const createItemShare: (s: Session, request: CreateItemShareRequest) => Promise<CreateItemShareResponse>;
declare const ItemShareAuditEvent: t.ReadonlyC<t.TypeC<{
    uuid: t.StringC;
    ip: t.StringC;
    accessorEmail: t.StringC;
    timestamp: t.Type<Date, string, unknown>;
    action: t.StringC;
    location: t.UnionC<[t.ReadonlyC<t.TypeC<{
        city: t.StringC;
        country: t.StringC;
        countryCode: t.StringC;
    }>>, t.UndefinedC]>;
}>>;
export declare type ItemShareAuditEvent = t.TypeOf<typeof ItemShareAuditEvent>;
declare const ItemShareAuditDetailsResponse: t.ReadonlyC<t.TypeC<{
    createdAt: t.Type<Date, string, unknown>;
    expiresAt: t.Type<Date, string, unknown>;
    maxViews: t.UnionC<[t.NumberC, t.UndefinedC]>;
    state: t.StringC;
    accessType: t.Type<ItemShareAvailableTo, ItemShareAvailableTo, unknown>;
    sharedBy: t.StringC;
    accessorEmails: t.Type<readonly string[], readonly string[], unknown>;
    events: t.Type<readonly Readonly<{
        uuid: string;
        ip: string;
        accessorEmail: string;
        timestamp: Date;
        action: string;
        location: Readonly<{
            city: string;
            country: string;
            countryCode: string;
        }> | undefined;
    }>[], readonly Readonly<{
        uuid: string;
        ip: string;
        accessorEmail: string;
        timestamp: string;
        action: string;
        location: Readonly<{
            city: string;
            country: string;
            countryCode: string;
        }> | undefined;
    }>[], unknown>;
}>>;
export declare type ItemShareAuditDetailsResponse = t.TypeOf<typeof ItemShareAuditDetailsResponse>;
/** Get the audit details for an item share */
export declare const getItemShareAuditDetails: (s: Session, shareUuid: string) => Promise<ItemShareAuditDetailsResponse>;
declare const ShareSeviceAuthTokenResponse: t.ReadonlyC<t.TypeC<{
    token: t.StringC;
    email: t.StringC;
    expiresAt: t.Type<Date, string, unknown>;
}>>;
export declare type ShareSeviceAuthTokenResponse = t.TypeOf<typeof ShareSeviceAuthTokenResponse>;
/** Get an auth token for the share service */
export declare const getShareSeviceAuthToken: (s: Session) => Promise<ShareSeviceAuthTokenResponse>;
/** Deletes an item share */
export declare const deleteItemShare: (s: Session, vaultUuid: string, itemUuid: string, shareUuid: string) => Promise<void>;
export {};
