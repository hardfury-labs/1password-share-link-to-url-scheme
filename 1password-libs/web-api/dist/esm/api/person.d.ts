import * as t from "io-ts";
import * as util from "../util";
import { GroupMembership, GroupMembershipWithKeyset } from "./group";
import { Session } from "./session";
import { VaultAccess } from "./vault";
export declare const BasePerson: t.IntersectionC<[t.TypeC<{
    uuid: t.StringC;
    email: t.StringC;
    name: t.StringC;
    state: t.StringC;
    type: t.StringC;
    attrVersion: t.NumberC;
    keysetVersion: t.NumberC;
}>, t.PartialC<{
    avatar: t.StringC;
    language: t.StringC;
    combinedPermissions: t.NumberC;
    newsletterPrefs: t.NumberC;
    preferences: t.NumberC;
    externalGUID: t.StringC;
    createdAt: t.StringC;
    updatedAt: t.StringC;
    lastAuthAt: t.StringC;
}>]>;
export declare type BasePerson = t.TypeOf<typeof BasePerson>;
export declare const Person: t.IntersectionC<[t.IntersectionC<[t.TypeC<{
    uuid: t.StringC;
    email: t.StringC;
    name: t.StringC;
    state: t.StringC;
    type: t.StringC;
    attrVersion: t.NumberC;
    keysetVersion: t.NumberC;
}>, t.PartialC<{
    avatar: t.StringC;
    language: t.StringC;
    combinedPermissions: t.NumberC;
    newsletterPrefs: t.NumberC;
    preferences: t.NumberC;
    externalGUID: t.StringC;
    createdAt: t.StringC;
    updatedAt: t.StringC;
    lastAuthAt: t.StringC;
}>]>, t.PartialC<{
    hasMFAEnabled: t.BooleanC;
    proposedEmail: t.StringC;
    pubKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
        kid: t.StringC;
        ext: t.BooleanC;
        key_ops: t.TupleC<[t.LiteralC<"encrypt">]>;
        kty: t.LiteralC<"RSA">;
        alg: t.StringC;
        e: t.StringC;
        n: t.StringC;
    }>, t.PartialC<{
        use: t.LiteralC<"enc">;
    }>]>>;
}>, t.TypeC<{
    personalItemsCount: t.UnionC<[t.NumberC, t.NullC]>;
    keysets: t.UnionC<[t.ReadonlyArrayC<t.ReadonlyC<t.IntersectionC<[t.TypeC<{
        uuid: t.StringC;
        sn: t.NumberC;
        encryptedBy: t.StringC;
        encSymKey: t.IntersectionC<[t.TypeC<{
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
        pubKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
            kid: t.StringC;
            ext: t.BooleanC;
            key_ops: t.TupleC<[t.LiteralC<"encrypt">]>;
            kty: t.LiteralC<"RSA">;
            alg: t.StringC;
            e: t.StringC;
            n: t.StringC;
        }>, t.PartialC<{
            use: t.LiteralC<"enc">;
        }>]>>;
        encPriKey: t.IntersectionC<[t.TypeC<{
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
        spubKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
            kid: t.StringC;
            ext: t.BooleanC;
            kty: t.LiteralC<"EC">;
            key_ops: t.TupleC<[t.LiteralC<"verify">]>;
            crv: t.UnionC<[t.LiteralC<"P-256">, t.LiteralC<"P-384">]>;
            x: t.StringC;
            y: t.StringC;
        }>, t.PartialC<{
            use: t.LiteralC<"sig">;
        }>]>>;
        encSPriKey: t.IntersectionC<[t.TypeC<{
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
    }>]>>>, t.NullC]>;
    memberships: t.UnionC<[t.ReadonlyArrayC<t.ReadonlyC<t.TypeC<{
        groupUuid: t.StringC;
        memberUuid: t.StringC;
        role: t.Type<GroupMembership.Role, GroupMembership.Role, unknown>;
        state: t.Type<GroupMembership.State, GroupMembership.State, unknown>;
        version: t.NumberC;
    }>>>, t.NullC]>;
    vaultAccess: t.UnionC<[t.ReadonlyArrayC<t.ReadonlyC<t.TypeC<{
        vaultUuid: t.StringC;
        accessorType: t.KeyofC<{
            group: boolean;
            user: boolean;
        }>;
        accessorUuid: t.StringC;
        vaultKeySN: t.NumberC;
        encVaultKey: t.UnionC<[t.IntersectionC<[t.TypeC<{
            kid: t.StringC;
            enc: t.StringC;
            cty: t.StringC;
            data: t.StringC;
        }>, t.PartialC<{
            iv: t.StringC;
            alg: t.StringC;
            p2c: t.NumberC;
            p2s: t.StringC;
        }>]>, t.UndefinedC]>;
        encryptedBy: t.StringC;
        acl: t.NumberC;
        leaseTimeout: t.NumberC;
    }>>>, t.NullC]>;
    devices: t.UnionC<[t.ReadonlyArrayC<t.IntersectionC<[t.TypeC<{
        uuid: t.StringC;
        clientName: t.StringC;
        clientVersion: t.StringC;
    }>, t.PartialC<{
        name: t.StringC;
        model: t.StringC;
        osName: t.StringC;
        osVersion: t.StringC;
        userAgent: t.StringC;
        lastAuthIP: t.StringC;
        avatar: t.StringC;
        locationCity: t.StringC;
        locationCountry: t.StringC;
        locationCountryCode: t.StringC;
        state: t.StringC;
        createdAt: t.StringC;
        updatedAt: t.StringC;
        lastAuthAt: t.StringC;
        fromDeviceInit: t.BooleanC;
    }>]>>, t.NullC]>;
    activities: t.UnionC<[t.ReadonlyArrayC<t.ReadonlyC<t.IntersectionC<[t.TypeC<{
        actorUuid: t.StringC;
        eid: t.NumberC;
        time: t.StringC;
        action: t.StringC;
    }>, t.PartialC<{
        objectType: t.StringC;
        objectUuid: t.StringC;
        auxUUID: t.StringC;
        auxInfo: t.StringC;
    }>]>>>, t.NullC]>;
}>]>;
export declare type Person = t.TypeOf<typeof Person>;
export declare const getUser: (s: Session, userUuid: string, attrMask: number) => Promise<Person>;
export interface UserPubKey {
    readonly uuid: string;
    readonly pubKey: util.crypto.JwkRsaPubKey;
}
export declare const getUserPubKeys: (s: Session, userUuids: readonly string[]) => Promise<UserPubKey[]>;
export declare const changeUserName: (s: Session, user: {
    uuid: string;
    name: string;
}) => Promise<void>;
export declare const changeUserAvatar: (s: Session, user: {
    uuid: string;
    imageId: string;
}) => Promise<void>;
export declare const deleteUsers: (s: Session, uuids: readonly string[]) => Promise<void>;
export declare const deletePerson: (s: Session, uuid: string, reason: string) => Promise<void>;
export declare const confirmUsersWithMemberships: (s: Session, uuids: string[], groupMemberships: GroupMembershipWithKeyset[]) => Promise<void>;
export declare const confirmUsersWithVaultAccessList: (s: Session, uuids: string[], accessList: VaultAccess[]) => Promise<void>;
export declare const confirmUsersWithMembershipsAndVaultAccessList: (s: Session, uuids: string[], groupMemberships: GroupMembershipWithKeyset[], accessList: VaultAccess[]) => Promise<void>;
export declare const suspendUsers: (s: Session, uuids: readonly string[]) => Promise<void>;
export declare const markAwayForTravel: (s: Session, uuids: string[]) => Promise<void>;
export declare const markBackFromTravel: (s: Session, uuids: string[]) => Promise<void>;
export declare const reactivateUsers: (s: Session, uuids: readonly string[]) => Promise<void>;
export declare const updateUser: (s: Session, user: Person) => Promise<void>;
