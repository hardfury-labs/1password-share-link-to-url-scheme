import * as t from "io-ts";
import * as model from "../model";
import { KeysetCiphertext } from "../util/crypto";
import { Auth } from "./auth";
import { GroupMembershipWithKeyset } from "./group";
import { RegisterServiceAccountTokenRequest } from "./serviceaccount_tokens";
import { Session } from "./session";
import { ServiceAccountUserRegistration } from "./signup";
import { VaultAccess } from "./vault";
export declare enum ServiceAccountType {
    Provisioning = "P",
    Connect = "C",
    DataStreaming = "D",
    CLI = "X",
    UserManaged = "M",
    NA = "",
    Slack = "slack",
    Duo = "duo",
    MaskedEmails = "MaskedEmails"
}
export interface CreateServiceAccountRequest {
    readonly userRegistration: ServiceAccountUserRegistration;
    readonly emailToken: string;
    readonly keyset: KeysetCiphertext;
    readonly userAuth: Auth;
    readonly serviceAccountType: ServiceAccountType;
    readonly access?: CreateServiceAccountAccess;
}
export declare type CreateServiceAccountRequestV3 = Omit<CreateServiceAccountRequest, "emailToken"> & {
    readonly preflightToken: string;
    readonly registerSAToken?: RegisterServiceAccountTokenRequest;
};
export interface CreateServiceAccountAccess {
    readonly vaults?: VaultAccess[];
    readonly groups?: GroupMembershipWithKeyset[];
}
export declare const ServiceAccountVaultAccess: t.TypeC<{
    totalVaults: t.NumberC;
    displayable: t.ArrayC<t.ReadonlyC<t.TypeC<{
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
    }>>>;
}>;
export declare type ServiceAccountVaultAccess = t.TypeOf<typeof ServiceAccountVaultAccess>;
export declare const ServiceAccountBillables: t.TypeC<{
    credits: t.NumberC;
}>;
export declare type ServiceAccountBillables = t.TypeOf<typeof ServiceAccountBillables>;
export declare const ServiceAccount: t.IntersectionC<[t.IntersectionC<[t.TypeC<{
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
}>]>, t.ReadonlyC<t.TypeC<{
    creatorUuid: t.StringC;
    serviceAccountType: t.Type<ServiceAccountType, ServiceAccountType, unknown>;
}>>, t.PartialC<{
    tokens: t.ReadonlyArrayC<t.IntersectionC<[t.TypeC<{
        name: t.StringC;
        state: t.StringC;
        signedBy: t.StringC;
        createdAt: t.StringC;
        tokenInfo: t.IntersectionC<[t.TypeC<{
            jti: t.StringC;
            issuer: t.StringC;
            audience: t.StringC;
            features: t.ReadonlyArrayC<t.StringC>;
        }>, t.PartialC<{
            expiry: t.StringC;
            vaults: t.ReadonlyArrayC<t.TypeC<{
                u: t.StringC;
                a: t.NumberC;
            }>>;
            signatureHash: t.StringC;
        }>]>;
    }>, t.PartialC<{
        expiresAt: t.StringC;
    }>]>>;
    serviceAccountVaultAccess: t.ReadonlyC<t.TypeC<{
        totalVaults: t.NumberC;
        displayable: t.ArrayC<t.ReadonlyC<t.TypeC<{
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
        }>>>;
    }>>;
    activities: t.ReadonlyArrayC<t.ReadonlyC<t.IntersectionC<[t.TypeC<{
        actorUuid: t.StringC;
        eid: t.NumberC;
        time: t.StringC;
        action: t.StringC;
    }>, t.PartialC<{
        objectType: t.StringC;
        objectUuid: t.StringC;
        auxUUID: t.StringC;
        auxInfo: t.StringC;
    }>]>>>;
    billables: t.ReadonlyC<t.TypeC<{
        credits: t.NumberC;
    }>>;
}>]>;
export declare type ServiceAccount = t.TypeOf<typeof ServiceAccount>;
export declare const ServiceAccountsPartialUser: t.IntersectionC<[t.ReadonlyC<t.TypeC<{
    uuid: t.StringC;
    name: t.StringC;
    email: t.StringC;
    avatar: t.StringC;
    state: t.StringC;
    type: t.StringC;
}>>, t.ReadonlyC<t.TypeC<{
    createdAt: t.StringC;
    creatorUuid: t.StringC;
    serviceAccountType: t.Type<ServiceAccountType, ServiceAccountType, unknown>;
}>>, t.PartialC<{
    canActiveUserViewDetails: t.BooleanC;
}>]>;
export declare type ServiceAccountsPartialUser = t.TypeOf<typeof ServiceAccountsPartialUser>;
export declare const ServiceAccountUser: t.IntersectionC<[t.ReadonlyC<t.IntersectionC<[t.TypeC<{
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
        role: t.Type<import("./group").GroupMembership.Role, import("./group").GroupMembership.Role, unknown>;
        state: t.Type<import("./group").GroupMembership.State, import("./group").GroupMembership.State, unknown>;
        version: t.NumberC;
    }>>>;
    externalGUID: t.StringC;
    csToken: t.StringC;
}>]>>, t.ReadonlyC<t.TypeC<{
    createdAt: t.StringC;
    creatorUuid: t.StringC;
    serviceAccountType: t.Type<ServiceAccountType, ServiceAccountType, unknown>;
    tokensVersion: t.NumberC;
}>>, t.PartialC<{
    tokens: t.ArrayC<t.IntersectionC<[t.TypeC<{
        name: t.StringC;
        state: t.StringC;
        signedBy: t.StringC;
        createdAt: t.StringC;
        tokenInfo: t.IntersectionC<[t.TypeC<{
            jti: t.StringC;
            issuer: t.StringC;
            audience: t.StringC;
            features: t.ReadonlyArrayC<t.StringC>;
        }>, t.PartialC<{
            expiry: t.StringC;
            vaults: t.ReadonlyArrayC<t.TypeC<{
                u: t.StringC;
                a: t.NumberC;
            }>>;
            signatureHash: t.StringC;
        }>]>;
    }>, t.PartialC<{
        expiresAt: t.StringC;
    }>]>>;
    devices: t.ArrayC<t.IntersectionC<[t.TypeC<{
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
    }>]>>;
    serviceAccountVaultAccess: t.ReadonlyC<t.TypeC<{
        totalVaults: t.NumberC;
        displayable: t.ArrayC<t.ReadonlyC<t.TypeC<{
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
        }>>>;
    }>>;
    activities: t.ReadonlyArrayC<t.ReadonlyC<t.IntersectionC<[t.TypeC<{
        actorUuid: t.StringC;
        eid: t.NumberC;
        time: t.StringC;
        action: t.StringC;
    }>, t.PartialC<{
        objectType: t.StringC;
        objectUuid: t.StringC;
        auxUUID: t.StringC;
        auxInfo: t.StringC;
    }>]>>>;
    billables: t.ReadonlyC<t.TypeC<{
        credits: t.NumberC;
    }>>;
}>]>;
export declare type ServiceAccountUser = t.TypeOf<typeof ServiceAccountUser>;
export declare const GetServiceAccountsResponse: t.ReadonlyC<t.TypeC<{
    serviceAccounts: t.ArrayC<t.IntersectionC<[t.ReadonlyC<t.TypeC<{
        uuid: t.StringC;
        name: t.StringC;
        email: t.StringC;
        avatar: t.StringC;
        state: t.StringC;
        type: t.StringC;
    }>>, t.ReadonlyC<t.TypeC<{
        createdAt: t.StringC;
        creatorUuid: t.StringC;
        serviceAccountType: t.Type<ServiceAccountType, ServiceAccountType, unknown>;
    }>>, t.PartialC<{
        canActiveUserViewDetails: t.BooleanC;
    }>]>>;
}>>;
export declare type GetServiceAccountsResponse = t.TypeOf<typeof GetServiceAccountsResponse>;
export declare const Integration: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
    serviceAccount: t.IntersectionC<[t.ReadonlyC<t.IntersectionC<[t.TypeC<{
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
            role: t.Type<import("./group").GroupMembership.Role, import("./group").GroupMembership.Role, unknown>;
            state: t.Type<import("./group").GroupMembership.State, import("./group").GroupMembership.State, unknown>;
            version: t.NumberC;
        }>>>;
        externalGUID: t.StringC;
        csToken: t.StringC;
    }>]>>, t.ReadonlyC<t.TypeC<{
        createdAt: t.StringC;
        creatorUuid: t.StringC;
        serviceAccountType: t.Type<ServiceAccountType, ServiceAccountType, unknown>;
        tokensVersion: t.NumberC;
    }>>, t.PartialC<{
        tokens: t.ArrayC<t.IntersectionC<[t.TypeC<{
            name: t.StringC;
            state: t.StringC;
            signedBy: t.StringC;
            createdAt: t.StringC;
            tokenInfo: t.IntersectionC<[t.TypeC<{
                jti: t.StringC;
                issuer: t.StringC;
                audience: t.StringC;
                features: t.ReadonlyArrayC<t.StringC>;
            }>, t.PartialC<{
                expiry: t.StringC;
                vaults: t.ReadonlyArrayC<t.TypeC<{
                    u: t.StringC;
                    a: t.NumberC;
                }>>;
                signatureHash: t.StringC;
            }>]>;
        }>, t.PartialC<{
            expiresAt: t.StringC;
        }>]>>;
        devices: t.ArrayC<t.IntersectionC<[t.TypeC<{
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
        }>]>>;
        serviceAccountVaultAccess: t.ReadonlyC<t.TypeC<{
            totalVaults: t.NumberC;
            displayable: t.ArrayC<t.ReadonlyC<t.TypeC<{
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
            }>>>;
        }>>;
        activities: t.ReadonlyArrayC<t.ReadonlyC<t.IntersectionC<[t.TypeC<{
            actorUuid: t.StringC;
            eid: t.NumberC;
            time: t.StringC;
            action: t.StringC;
        }>, t.PartialC<{
            objectType: t.StringC;
            objectUuid: t.StringC;
            auxUUID: t.StringC;
            auxInfo: t.StringC;
        }>]>>>;
        billables: t.ReadonlyC<t.TypeC<{
            credits: t.NumberC;
        }>>;
    }>]>;
}>, t.PartialC<{
    devices: t.ArrayC<t.IntersectionC<[t.TypeC<{
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
    }>]>>;
}>]>>;
export declare type Integration = t.TypeOf<typeof Integration>;
export declare const GetIntegrationsResponse: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
    integrations: t.ArrayC<t.ReadonlyC<t.IntersectionC<[t.TypeC<{
        serviceAccount: t.IntersectionC<[t.ReadonlyC<t.IntersectionC<[t.TypeC<{
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
                role: t.Type<import("./group").GroupMembership.Role, import("./group").GroupMembership.Role, unknown>;
                state: t.Type<import("./group").GroupMembership.State, import("./group").GroupMembership.State, unknown>;
                version: t.NumberC;
            }>>>;
            externalGUID: t.StringC;
            csToken: t.StringC;
        }>]>>, t.ReadonlyC<t.TypeC<{
            createdAt: t.StringC;
            creatorUuid: t.StringC;
            serviceAccountType: t.Type<ServiceAccountType, ServiceAccountType, unknown>;
            tokensVersion: t.NumberC;
        }>>, t.PartialC<{
            tokens: t.ArrayC<t.IntersectionC<[t.TypeC<{
                name: t.StringC;
                state: t.StringC;
                signedBy: t.StringC;
                createdAt: t.StringC;
                tokenInfo: t.IntersectionC<[t.TypeC<{
                    jti: t.StringC;
                    issuer: t.StringC;
                    audience: t.StringC;
                    features: t.ReadonlyArrayC<t.StringC>;
                }>, t.PartialC<{
                    expiry: t.StringC;
                    vaults: t.ReadonlyArrayC<t.TypeC<{
                        u: t.StringC;
                        a: t.NumberC;
                    }>>;
                    signatureHash: t.StringC;
                }>]>;
            }>, t.PartialC<{
                expiresAt: t.StringC;
            }>]>>;
            devices: t.ArrayC<t.IntersectionC<[t.TypeC<{
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
            }>]>>;
            serviceAccountVaultAccess: t.ReadonlyC<t.TypeC<{
                totalVaults: t.NumberC;
                displayable: t.ArrayC<t.ReadonlyC<t.TypeC<{
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
                }>>>;
            }>>;
            activities: t.ReadonlyArrayC<t.ReadonlyC<t.IntersectionC<[t.TypeC<{
                actorUuid: t.StringC;
                eid: t.NumberC;
                time: t.StringC;
                action: t.StringC;
            }>, t.PartialC<{
                objectType: t.StringC;
                objectUuid: t.StringC;
                auxUUID: t.StringC;
                auxInfo: t.StringC;
            }>]>>>;
            billables: t.ReadonlyC<t.TypeC<{
                credits: t.NumberC;
            }>>;
        }>]>;
    }>, t.PartialC<{
        devices: t.ArrayC<t.IntersectionC<[t.TypeC<{
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
        }>]>>;
    }>]>>>;
}>, t.PartialC<{
    releases: t.ReadonlyC<t.TypeC<{
        B: t.UnionC<[t.ReadonlyC<t.TypeC<{
            release: t.UnionC<[t.ReadonlyC<t.TypeC<{
                version: t.StringC;
                url: t.UnionC<[t.StringC, t.UndefinedC]>;
                buildnum: t.NumberC;
                bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>, t.UndefinedC]>;
            beta: t.UnionC<[t.ReadonlyC<t.TypeC<{
                version: t.StringC;
                url: t.UnionC<[t.StringC, t.UndefinedC]>;
                buildnum: t.NumberC;
                bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>, t.UndefinedC]>;
        }>>, t.UndefinedC]>;
        CLI: t.UnionC<[t.ReadonlyC<t.TypeC<{
            release: t.UnionC<[t.ReadonlyC<t.TypeC<{
                version: t.StringC;
                url: t.UnionC<[t.StringC, t.UndefinedC]>;
                buildnum: t.NumberC;
                bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>, t.UndefinedC]>;
            beta: t.UnionC<[t.ReadonlyC<t.TypeC<{
                version: t.StringC;
                url: t.UnionC<[t.StringC, t.UndefinedC]>;
                buildnum: t.NumberC;
                bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>, t.UndefinedC]>;
        }>>, t.UndefinedC]>;
        KNOX: t.UnionC<[t.ReadonlyC<t.TypeC<{
            release: t.UnionC<[t.ReadonlyC<t.TypeC<{
                version: t.StringC;
                url: t.UnionC<[t.StringC, t.UndefinedC]>;
                buildnum: t.NumberC;
                bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>, t.UndefinedC]>;
            beta: t.UnionC<[t.ReadonlyC<t.TypeC<{
                version: t.StringC;
                url: t.UnionC<[t.StringC, t.UndefinedC]>;
                buildnum: t.NumberC;
                bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>, t.UndefinedC]>;
        }>>, t.UndefinedC]>;
        OPA4: t.UnionC<[t.ReadonlyC<t.TypeC<{
            release: t.UnionC<[t.ReadonlyC<t.TypeC<{
                version: t.StringC;
                url: t.UnionC<[t.StringC, t.UndefinedC]>;
                buildnum: t.NumberC;
                bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>, t.UndefinedC]>;
            beta: t.UnionC<[t.ReadonlyC<t.TypeC<{
                version: t.StringC;
                url: t.UnionC<[t.StringC, t.UndefinedC]>;
                buildnum: t.NumberC;
                bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>, t.UndefinedC]>;
        }>>, t.UndefinedC]>;
        OPI4: t.UnionC<[t.ReadonlyC<t.TypeC<{
            release: t.UnionC<[t.ReadonlyC<t.TypeC<{
                version: t.StringC;
                url: t.UnionC<[t.StringC, t.UndefinedC]>;
                buildnum: t.NumberC;
                bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>, t.UndefinedC]>;
            beta: t.UnionC<[t.ReadonlyC<t.TypeC<{
                version: t.StringC;
                url: t.UnionC<[t.StringC, t.UndefinedC]>;
                buildnum: t.NumberC;
                bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>, t.UndefinedC]>;
        }>>, t.UndefinedC]>;
        OPM4: t.UnionC<[t.ReadonlyC<t.TypeC<{
            release: t.UnionC<[t.ReadonlyC<t.TypeC<{
                version: t.StringC;
                url: t.UnionC<[t.StringC, t.UndefinedC]>;
                buildnum: t.NumberC;
                bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>, t.UndefinedC]>;
            beta: t.UnionC<[t.ReadonlyC<t.TypeC<{
                version: t.StringC;
                url: t.UnionC<[t.StringC, t.UndefinedC]>;
                buildnum: t.NumberC;
                bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>, t.UndefinedC]>;
        }>>, t.UndefinedC]>;
        OPM7: t.UnionC<[t.ReadonlyC<t.TypeC<{
            release: t.UnionC<[t.ReadonlyC<t.TypeC<{
                version: t.StringC;
                url: t.UnionC<[t.StringC, t.UndefinedC]>;
                buildnum: t.NumberC;
                bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>, t.UndefinedC]>;
            beta: t.UnionC<[t.ReadonlyC<t.TypeC<{
                version: t.StringC;
                url: t.UnionC<[t.StringC, t.UndefinedC]>;
                buildnum: t.NumberC;
                bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>, t.UndefinedC]>;
        }>>, t.UndefinedC]>;
        OPM8: t.UnionC<[t.ReadonlyC<t.TypeC<{
            release: t.UnionC<[t.ReadonlyC<t.TypeC<{
                version: t.StringC;
                url: t.UnionC<[t.StringC, t.UndefinedC]>;
                buildnum: t.NumberC;
                bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>, t.UndefinedC]>;
            beta: t.UnionC<[t.ReadonlyC<t.TypeC<{
                version: t.StringC;
                url: t.UnionC<[t.StringC, t.UndefinedC]>;
                buildnum: t.NumberC;
                bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>, t.UndefinedC]>;
        }>>, t.UndefinedC]>;
        OPW4: t.UnionC<[t.ReadonlyC<t.TypeC<{
            release: t.UnionC<[t.ReadonlyC<t.TypeC<{
                version: t.StringC;
                url: t.UnionC<[t.StringC, t.UndefinedC]>;
                buildnum: t.NumberC;
                bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>, t.UndefinedC]>;
            beta: t.UnionC<[t.ReadonlyC<t.TypeC<{
                version: t.StringC;
                url: t.UnionC<[t.StringC, t.UndefinedC]>;
                buildnum: t.NumberC;
                bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>, t.UndefinedC]>;
        }>>, t.UndefinedC]>;
        OPW8: t.UnionC<[t.ReadonlyC<t.TypeC<{
            release: t.UnionC<[t.ReadonlyC<t.TypeC<{
                version: t.StringC;
                url: t.UnionC<[t.StringC, t.UndefinedC]>;
                buildnum: t.NumberC;
                bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>, t.UndefinedC]>;
            beta: t.UnionC<[t.ReadonlyC<t.TypeC<{
                version: t.StringC;
                url: t.UnionC<[t.StringC, t.UndefinedC]>;
                buildnum: t.NumberC;
                bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>, t.UndefinedC]>;
        }>>, t.UndefinedC]>;
        SCIM: t.UnionC<[t.ReadonlyC<t.TypeC<{
            release: t.UnionC<[t.ReadonlyC<t.TypeC<{
                version: t.StringC;
                url: t.UnionC<[t.StringC, t.UndefinedC]>;
                buildnum: t.NumberC;
                bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>, t.UndefinedC]>;
            beta: t.UnionC<[t.ReadonlyC<t.TypeC<{
                version: t.StringC;
                url: t.UnionC<[t.StringC, t.UndefinedC]>;
                buildnum: t.NumberC;
                bbn: t.UnionC<[t.StringC, t.UndefinedC]>;
            }>>, t.UndefinedC]>;
        }>>, t.UndefinedC]>;
    }>>;
}>]>>;
export declare type GetIntegrationsResponse = t.TypeOf<typeof GetIntegrationsResponse>;
export declare const createServiceAccountV3: (s: Session, sAccountWithOptionalToken: CreateServiceAccountRequestV3) => Promise<model.Person>;
export declare const getIntegrations: (s: Session) => Promise<GetIntegrationsResponse>;
export declare const getServiceAccounts: (s: Session) => Promise<GetServiceAccountsResponse>;
export declare const CreateServiceAccountPreflightResponse: t.ReadonlyC<t.TypeC<{
    email: t.StringC;
    token: t.StringC;
    uuid: t.StringC;
}>>;
export declare type CreateServiceAccountPreflightResponse = t.TypeOf<typeof CreateServiceAccountPreflightResponse>;
export declare const createServiceAccountPreflight: (s: Session, serviceAccountType: ServiceAccountType) => Promise<CreateServiceAccountPreflightResponse>;
export declare const getServiceAccount: (s: Session, serviceAccountUuid: string, attrs: string[]) => Promise<ServiceAccount>;
