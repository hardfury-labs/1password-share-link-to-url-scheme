import * as api from "../api";
import * as model from "../model";
import * as util from "../util";
import { Context } from "./context";
interface GroupMembershipChangeRequest {
    readonly group: util.UuidRef;
    readonly add: readonly {
        uuid: string;
        role?: api.GroupMembership.Role;
    }[];
    readonly remove: readonly util.UuidRef[];
}
interface UserMembershipChangeRequest {
    readonly user: util.UuidRef;
    readonly add: readonly {
        uuid: string;
        role?: api.GroupMembership.Role;
    }[];
    readonly remove: readonly util.UuidRef[];
}
export declare const deleteMemberFromGroup: (c: Context, member: util.UuidRef, group: util.UuidRef) => Promise<void>;
export declare const deleteGroupMembership: (c: Context, membership: api.GroupMembership.Type) => Promise<void>;
/** Simply creates a group membership but does not add it to the group object */
export declare const createGroupMembership: (c: Context, member: model.Person | api.UserPubKey, group: model.Group, options: model.GroupMembershipOptions) => Promise<api.GroupMembershipWithKeyset>;
export declare const updateGroupMembershipRole: (c: Context, membership: api.GroupMembership.Type) => Promise<void>;
export declare const updateGroupMemberships: (c: Context, changes: GroupMembershipChangeRequest) => Promise<void>;
export declare const updateUserMemberships: (c: Context, changes: UserMembershipChangeRequest) => Promise<void>;
export {};
