import { ItemShareAuditDetailsResponse, ItemShareAuditEvent, ItemShareAvailableTo } from "../api/item_share";
export { ItemShareAuditEvent };
export interface ItemShareAuditEventsByEmail {
    readonly accessorEmail: string;
    readonly events: readonly ItemShareAuditEvent[];
}
export interface ItemShareAuditEventsByDate {
    readonly dateString: string;
    readonly events: readonly ItemShareAuditEvent[];
}
export interface ItemShareAuditDetailsSome extends ItemShareAuditDetailsResponse {
    readonly accessType: ItemShareAvailableTo.OnlySomePeople;
    readonly sortedEvents: readonly ItemShareAuditEventsByEmail[];
}
export interface ItemShareAuditDetailsAnyone extends ItemShareAuditDetailsResponse {
    readonly accessType: ItemShareAvailableTo.AnyoneWithTheLink;
    readonly sortedEvents: readonly ItemShareAuditEventsByDate[];
}
export interface ShareSeviceAuthToken {
    readonly token: string;
    readonly email: string;
    readonly expiresAt: Date | undefined;
}
