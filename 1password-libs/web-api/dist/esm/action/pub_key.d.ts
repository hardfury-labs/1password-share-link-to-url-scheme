import * as api from "../api";
import * as util from "../util";
import { crypto, UuidRef } from "../util";
import { Context } from "./context";
export declare const mergeInPubKeys: <T extends {
    readonly uuid: string;
}>(accessors: readonly T[], accessorPubKeys: readonly api.GroupPubKey[]) => readonly (T & {
    readonly pubKey: crypto.JwkRsaPubKey;
})[];
export declare const getUserPubKeys: (c: Context, userRefs: readonly UuidRef[]) => Promise<readonly api.UserPubKey[]>;
export declare const getGroupPubKeys: (c: Context, groupRefs: readonly util.UuidRef[]) => Promise<readonly api.GroupPubKey[]>;
