import * as t from "io-ts";
import * as util from "../util";
import { Auth } from "./auth";
import { GroupMembership } from "./group";
import { Session } from "./session";
export declare const beginChangeEmail: (s: Session, email: string) => Promise<void>;
export interface ChangeEmailAuth {
    email: string;
    auth: Auth;
    activeKeyset: util.crypto.KeysetCiphertext;
}
export declare const completeChangeEmail: (s: Session, auth: ChangeEmailAuth, token: string) => Promise<void>;
export declare const promptConfirmChangeEmail: (s: Session) => Promise<void>;
export declare const User: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
    uuid: t.StringC;
    createdAt: t.StringC;
    lastAuthAt: t.StringC;
    email: t.StringC;
    firstName: t.StringC;
    lastName: t.StringC;
    name: t.StringC;
    attrVersion: t.NumberC;
    keysetVersion: t.NumberC;
    state: t.StringC;
    type: t.StringC;
    avatar: t.StringC;
    language: t.StringC;
    accountKeyFormat: t.StringC;
    accountKeyUuid: t.StringC;
    combinedPermissions: t.NumberC;
    newsletterPrefs: t.NumberC;
    preferences: t.NumberC;
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
    hasMFAEnabled: t.BooleanC;
}>, t.PartialC<{
    updatedAt: t.StringC;
    memberships: t.ArrayC<t.ReadonlyC<t.TypeC<{
        groupUuid: t.StringC;
        memberUuid: t.StringC;
        role: t.Type<GroupMembership.Role, GroupMembership.Role, unknown>;
        state: t.Type<GroupMembership.State, GroupMembership.State, unknown>;
        version: t.NumberC;
    }>>>;
    externalGUID: t.StringC;
    csToken: t.StringC;
}>]>>;
export declare type User = t.TypeOf<typeof User>;
