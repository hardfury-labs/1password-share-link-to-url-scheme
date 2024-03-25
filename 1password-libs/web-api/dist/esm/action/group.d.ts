import * as api from "../api";
import * as model from "../model";
import * as util from "../util";
import { Context } from "./context";
export interface GetGroupOptions {
    attrs: BitMask;
    mustReload: boolean;
}
export declare const getGroups: (c: Context) => Promise<model.Group[]>;
/**
 * Get a group with the given UUID or object reference.
 * If we have a local copy with the specified attributes, return it.
 * Otherwise, request the person and attrs from the server.
 */
export declare const getGroup: (c: Context, groupRef: util.UuidRef, options?: Partial<GetGroupOptions> | undefined) => Promise<model.Group>;
export declare const getRecoveryGroup: (c: Context, options?: Partial<GetGroupOptions> | undefined) => Promise<model.Group>;
export declare const getAdministratorsGroup: (c: Context, options?: Partial<GetGroupOptions> | undefined) => Promise<model.Group>;
export declare const getOwnersGroup: (c: Context, options?: Partial<GetGroupOptions> | undefined) => Promise<model.Group>;
export declare const getTeamMembersGroup: (c: Context, options?: Partial<GetGroupOptions> | undefined) => Promise<model.Group>;
export declare const generateNewKeysetForGroup: (c: Context, group: model.Group, recoveryGroup: model.Group) => Promise<model.Keyset>;
export declare const createGroup: (c: Context, groupAttributes: model.GroupOverviewAttrs) => Promise<model.Group>;
export declare const sendGroup: (c: Context, group: model.Group) => Promise<model.Group>;
export declare const deleteGroup: (c: Context, group: model.Group) => Promise<void>;
export declare const markGroupReadyForPurging: (c: Context, group: model.Group) => Promise<void>;
export declare const updateGroup: (c: Context, group: model.Group) => Promise<void>;
/** Get the active keyset for the Recovery Group */
export declare const getRecoveryKeyset: (c: Context) => Promise<model.Keyset | undefined>;
export declare const updateGroupPermissions: (c: Context, group: model.Group, permissions: model.BitSet) => Promise<model.Group>;
export declare const addRecoveryKeysetToGroup: (c: Context, group: model.Group, recoveryKeyset: model.Keyset) => Promise<model.Group>;
export declare const replaceGroupKeysets: (c: Context, groupRef: util.UuidRef) => Promise<void>;
export declare const getGroupMembersCSV: (c: Context, group: model.Group) => Promise<api.GetGroupMembersCSVResponse>;
export declare const getActiveKeysetForGroup: (c: Context, group: model.Group) => Promise<model.Keyset>;
