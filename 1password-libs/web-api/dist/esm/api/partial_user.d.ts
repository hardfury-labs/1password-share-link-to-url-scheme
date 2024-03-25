import * as t from "io-ts";
import { crypto } from "../util";
import { ServiceAccountsPartialUser } from "./serviceaccounts";
import { Session } from "./session";
export declare const PartialUser: t.ReadonlyC<t.TypeC<{
    uuid: t.StringC;
    name: t.StringC;
    email: t.StringC;
    avatar: t.StringC;
    state: t.StringC;
    type: t.StringC;
}>>;
export declare type PartialUser = t.TypeOf<typeof PartialUser>;
export declare type PartialUserWithPubKey = PartialUser & {
    readonly pubKey: crypto.JwkRsaPubKey;
};
export interface ExtendedAttrs {
    readonly combinedPermissions: number;
}
export declare type ExtendedPartialUser<K extends keyof ExtendedAttrs> = PartialUser & Pick<ExtendedAttrs, K>;
export interface PartialUserParams<K extends keyof ExtendedAttrs> {
    readonly attrs: K[];
    readonly emails?: readonly string[];
    readonly states?: readonly string[];
    readonly types?: readonly string[];
    readonly limit?: number;
    readonly group?: string;
    readonly vault?: string;
    readonly search?: string;
}
interface GetPartialUsersResponse<K extends keyof ExtendedAttrs> {
    readonly totalCount: number;
    readonly users: readonly ExtendedPartialUser<K>[];
    readonly serviceAccounts?: readonly ServiceAccountsPartialUser[];
}
export declare const getPartialUsers: <K extends "combinedPermissions">(s: Session, partialUserParams: PartialUserParams<K>) => Promise<GetPartialUsersResponse<K>>;
export declare function getGroupUsers<K extends keyof ExtendedAttrs>(s: Session, groupUuid: string, attrs: readonly K[]): Promise<readonly ExtendedPartialUser<K>[]>;
export {};
