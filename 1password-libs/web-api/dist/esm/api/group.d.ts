import * as t from "io-ts";
import * as util from "../util";
import { LegacyActivity } from "./activity";
import { Session } from "./session";
import { VaultAccess } from "./vault";
export interface Group {
    uuid: string;
    name: string;
    type: string;
    desc: string;
    createdAt?: string;
    updatedAt?: string;
    attrVersion: number;
    avatar?: string;
    activeKeysetUuid: string;
    archivedKeysets?: util.crypto.KeysetCiphertext[];
    userMembership?: GroupMembership.Type;
    permissions: number;
    recoverableKeyset?: util.crypto.KeysetCiphertext;
    recoveryKeyset?: util.crypto.KeysetCiphertext;
    pubKey?: util.crypto.JwkRsaPubKey;
    memberships?: GroupMembership.Type[];
    vaultAccess?: VaultAccess[];
    activities?: LegacyActivity[];
}
export declare namespace GroupMembership {
    enum Role {
        Manager = "A",
        Member = "R"
    }
    enum State {
        Active = "A",
        Deleted = "D",
        Inactive = "I"
    }
    const Type: t.ReadonlyC<t.TypeC<{
        groupUuid: t.StringC;
        memberUuid: t.StringC;
        role: t.Type<Role, Role, unknown>;
        state: t.Type<State, State, unknown>;
        version: t.NumberC;
    }>>;
    type Type = t.TypeOf<typeof Type>;
}
export declare type GroupMembershipAddition = Pick<GroupMembershipWithKeyset, "memberUuid" | "role" | "keyset">;
export interface GroupMembershipChanges {
    readonly add: readonly GroupMembershipAddition[];
    readonly remove: readonly string[];
}
export declare type UserMembershipAddition = Pick<GroupMembershipWithKeyset, "groupUuid" | "role" | "keyset">;
export interface UserMembershipChanges {
    readonly add: readonly UserMembershipAddition[];
    readonly remove: readonly string[];
}
export declare const getGroup: (s: Session, uuid: string, attrMask: number) => Promise<Group>;
export interface GroupPubKey {
    readonly uuid: string;
    readonly pubKey: util.crypto.JwkRsaPubKey;
}
export declare const getGroupPubKeys: (s: Session, groupUuids: readonly string[]) => Promise<GroupPubKey[]>;
export declare const updateGroup: (s: Session, group: Group) => Promise<void>;
export declare const updateGroupPermissions: (s: Session, groupUUID: string, permissions: number) => Promise<void>;
export declare const createGroup: (s: Session, group: Group) => Promise<void>;
export declare const deleteGroup: (s: Session, groupUUID: string) => Promise<void>;
export declare const markGroupReadyForPurging: (s: Session, groupUuid: string) => Promise<void>;
export declare const deleteMemberFromGroup: (s: Session, memberUUID: string, groupUUID: string) => Promise<void>;
export declare const updateGroupMembershipRole: (s: Session, memberUUID: string, groupUUID: string, role: string) => Promise<void>;
export interface GroupMembershipWithKeyset extends GroupMembership.Type {
    readonly keyset: util.crypto.KeysetCiphertext;
}
export declare const patchGroupMemberships: (s: Session, groupUUID: string, memberships: GroupMembershipChanges) => Promise<void>;
export declare const patchUserMemberships: (s: Session, userUUID: string, memberships: UserMembershipChanges) => Promise<void>;
export declare const addRecoveryKeysetToGroup: (s: Session, group: Group) => Promise<void>;
export interface GetGroupMembersCSVResponse {
    readonly csv: string;
}
export declare const getGroupMembersCSV: (s: Session, groupUUID: string) => Promise<GetGroupMembersCSVResponse>;
