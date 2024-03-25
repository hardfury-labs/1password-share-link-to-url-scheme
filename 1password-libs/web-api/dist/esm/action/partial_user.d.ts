import { ExtendedPartialUserAttrs, PartialUser, ServiceAccountsPartialUser } from "../api";
import * as api from "../api";
import { Context } from "./context";
export interface PartialUserOptionScopes {
    readonly vaultUuid?: string;
    readonly groupUuid?: string;
}
export interface PartialUserOptionsV2 {
    readonly limit: number;
    readonly emails?: readonly string[];
    readonly states?: readonly string[];
    readonly types?: readonly string[];
    readonly search?: string;
    readonly attrs?: (keyof ExtendedPartialUserAttrs)[];
    readonly scopes?: PartialUserOptionScopes;
}
export interface PartialUserResponseV2 {
    readonly totalCount: number;
    readonly users: readonly PartialUser[];
    readonly serviceAccounts: readonly ServiceAccountsPartialUser[];
}
/**
 * Finds PartialUsers and ServiceAccountsPartialUsers that meet the provided lookup criteria.
 *  	- limit: maximum number of records to return. 0 means no limit.
 *  	- scopes:
 *  	vaultUuid: users that have direct access to vault with matching UUID
 *  	groupUuid: users that belong to the group with matching UUID
 *
 * 		- attrs: Array of optional attributes included with the PartialUser records.
 *  	- emails: limits results to users with matching emails
 *  	- states: filters results by the provided array of user states
 *  	- types: filters results by the provided array of user types
 * 		- search: search query
 */
export declare const getPartialUsersV2: (c: Context, { scopes, attrs, ...options }: PartialUserOptionsV2) => Promise<PartialUserResponseV2>;
export interface PartialUserFilters {
    readonly emails?: string[];
    readonly state?: string;
    readonly type?: string;
    readonly search?: string;
}
export interface PartialUserOptions {
    readonly limit?: number;
    readonly mustReload?: boolean;
}
export declare function getPartialUsers(c: Context, filters?: PartialUserFilters, options?: PartialUserOptions): Promise<readonly PartialUser[]>;
export interface GroupUsersWithPermissionsResponse {
    users: readonly api.ExtendedPartialUser<"combinedPermissions">[];
    serviceAccounts: readonly ServiceAccountsPartialUser[];
}
/**
 * Get PartialUser data including combinedPermissions for each member
 * of the provided groupUUID.
 */
export declare function getGroupUsersWithPermissions(c: Context, groupUuid: string): Promise<GroupUsersWithPermissionsResponse>;
export declare const clearPartialUserCache: () => void;
export declare const clearPartialUserCacheForContext: (c: Context) => void;
