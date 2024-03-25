import * as t from "io-ts";
import { PartialUser } from "./partial_user";
import { Session } from "./session";
import { TimePeriod } from "./time_period";
import { Vault } from "./vault";
import { VaultItem } from "./vault_item";
export declare const enum ReportSections {
    Overview = "overview",
    ExtendedOverview = "extended",
    ItemUsage = "itemusage",
    Users = "users"
}
export declare const enum VaultsReportTypes {
    NoManager = "nomanager",
    HighPopulation = "highlyshared"
}
export declare const enum VaultsReportAttributes {
    usersCount = "userscount"
}
export interface ReportDateFilters {
    date: Date;
    toDate: TimePeriod;
    limit: number;
}
export declare const ReportSectionUserOverview: t.ReadonlyC<t.TypeC<{
    user: t.IntersectionC<[t.IntersectionC<[t.TypeC<{
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
            role: t.Type<import("./group").GroupMembership.Role, import("./group").GroupMembership.Role, unknown>;
            state: t.Type<import("./group").GroupMembership.State, import("./group").GroupMembership.State, unknown>;
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
    groupCount: t.NumberC;
    vaultCount: t.NumberC;
    itemCount: t.NumberC;
}>>;
export declare type ReportSectionUserOverview = t.TypeOf<typeof ReportSectionUserOverview>;
export declare const ReportUserItemUsage: t.ReadonlyC<t.TypeC<{
    vaultUuid: t.StringC;
    itemUuid: t.StringC;
    lastUsedAt: t.StringC;
    lastUsedVersion: t.NumberC;
}>>;
export declare type ReportUserItemUsage = t.TypeOf<typeof ReportUserItemUsage>;
export declare const ReportSectionUserItemUsage: t.ReadonlyC<t.TypeC<{
    itemUsages: t.ReadonlyArrayC<t.ReadonlyC<t.TypeC<{
        vaultUuid: t.StringC;
        itemUuid: t.StringC;
        lastUsedAt: t.StringC;
        lastUsedVersion: t.NumberC;
    }>>>;
    vaults: t.ReadonlyArrayC<t.ReadonlyC<t.IntersectionC<[t.TypeC<{
        uuid: t.StringC;
        type: t.StringC;
        attrVersion: t.NumberC;
        contentVersion: t.NumberC;
        encAttrs: t.IntersectionC<[t.TypeC<{
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
        createdAt: t.StringC;
        updatedAt: t.StringC;
        access: t.ReadonlyArrayC<t.ReadonlyC<t.TypeC<{
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
        combinedAccess: t.ReadonlyC<t.TypeC<{
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
        }>>;
        activeItemCount: t.NumberC;
        clientAccess: t.NumberC;
        archivedKeys: t.ReadonlyArrayC<t.IntersectionC<[t.TypeC<{
            kid: t.StringC;
            enc: t.StringC;
            cty: t.StringC;
            data: t.StringC;
        }>, t.PartialC<{
            iv: t.StringC;
            alg: t.StringC;
            p2c: t.NumberC;
            p2s: t.StringC;
        }>]>>;
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
        itemCategories: t.ReadonlyArrayC<t.IntersectionC<[t.TypeC<{
            uuid: t.StringC;
            singularName: t.StringC;
            pluralName: t.StringC;
            icon: t.StringC;
            sourceIcon: t.StringC;
        }>, t.PartialC<{
            templateUuid: t.StringC;
            createdAt: t.StringC;
            updatedAt: t.StringC;
            state: t.StringC;
            version: t.NumberC;
            activeItemCount: t.NumberC;
            attrs: t.AnyC;
        }>]>>;
        previewGroups: t.ReadonlyArrayC<t.ReadonlyC<t.TypeC<{
            uuid: t.StringC;
            avatar: t.StringC;
            type: t.StringC;
        }>>>;
        previewUsers: t.ReadonlyArrayC<t.ReadonlyC<t.TypeC<{
            uuid: t.StringC;
            avatar: t.StringC;
            initials: t.StringC;
        }>>>;
    }>]>>>;
    vaultItemsByVault: t.RecordC<t.StringC, t.ReadonlyArrayC<t.IntersectionC<[t.TypeC<{
        uuid: t.StringC;
        templateUuid: t.StringC;
        itemVersion: t.NumberC;
        encryptedBy: t.StringC;
        encOverview: t.IntersectionC<[t.TypeC<{
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
        faveIndex: t.NumberC;
        trashed: t.StringC;
        createdAt: t.StringC;
        updatedAt: t.StringC;
        changerUuid: t.StringC;
        packageUuid: t.StringC;
        encDetails: t.IntersectionC<[t.TypeC<{
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
        fileReferences: t.ReadonlyArrayC<t.ReadonlyC<t.TypeC<{
            fileId: t.StringC;
            signature: t.StringC;
        }>>>;
    }>]>>>;
}>>;
export declare type ReportSectionUserItemUsage = t.TypeOf<typeof ReportSectionUserItemUsage>;
export declare const ReportUser: t.ReadonlyC<t.PartialC<{
    overview: t.ReadonlyC<t.TypeC<{
        user: t.IntersectionC<[t.IntersectionC<[t.TypeC<{
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
                role: t.Type<import("./group").GroupMembership.Role, import("./group").GroupMembership.Role, unknown>;
                state: t.Type<import("./group").GroupMembership.State, import("./group").GroupMembership.State, unknown>;
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
        groupCount: t.NumberC;
        vaultCount: t.NumberC;
        itemCount: t.NumberC;
    }>>;
    itemUsage: t.ReadonlyC<t.TypeC<{
        itemUsages: t.ReadonlyArrayC<t.ReadonlyC<t.TypeC<{
            vaultUuid: t.StringC;
            itemUuid: t.StringC;
            lastUsedAt: t.StringC;
            lastUsedVersion: t.NumberC;
        }>>>;
        vaults: t.ReadonlyArrayC<t.ReadonlyC<t.IntersectionC<[t.TypeC<{
            uuid: t.StringC;
            type: t.StringC;
            attrVersion: t.NumberC;
            contentVersion: t.NumberC;
            encAttrs: t.IntersectionC<[t.TypeC<{
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
            createdAt: t.StringC;
            updatedAt: t.StringC;
            access: t.ReadonlyArrayC<t.ReadonlyC<t.TypeC<{
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
            combinedAccess: t.ReadonlyC<t.TypeC<{
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
            }>>;
            activeItemCount: t.NumberC;
            clientAccess: t.NumberC;
            archivedKeys: t.ReadonlyArrayC<t.IntersectionC<[t.TypeC<{
                kid: t.StringC;
                enc: t.StringC;
                cty: t.StringC;
                data: t.StringC;
            }>, t.PartialC<{
                iv: t.StringC;
                alg: t.StringC;
                p2c: t.NumberC;
                p2s: t.StringC;
            }>]>>;
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
            itemCategories: t.ReadonlyArrayC<t.IntersectionC<[t.TypeC<{
                uuid: t.StringC;
                singularName: t.StringC;
                pluralName: t.StringC;
                icon: t.StringC;
                sourceIcon: t.StringC;
            }>, t.PartialC<{
                templateUuid: t.StringC;
                createdAt: t.StringC;
                updatedAt: t.StringC;
                state: t.StringC;
                version: t.NumberC;
                activeItemCount: t.NumberC;
                attrs: t.AnyC;
            }>]>>;
            previewGroups: t.ReadonlyArrayC<t.ReadonlyC<t.TypeC<{
                uuid: t.StringC;
                avatar: t.StringC;
                type: t.StringC;
            }>>>;
            previewUsers: t.ReadonlyArrayC<t.ReadonlyC<t.TypeC<{
                uuid: t.StringC;
                avatar: t.StringC;
                initials: t.StringC;
            }>>>;
        }>]>>>;
        vaultItemsByVault: t.RecordC<t.StringC, t.ReadonlyArrayC<t.IntersectionC<[t.TypeC<{
            uuid: t.StringC;
            templateUuid: t.StringC;
            itemVersion: t.NumberC;
            encryptedBy: t.StringC;
            encOverview: t.IntersectionC<[t.TypeC<{
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
            faveIndex: t.NumberC;
            trashed: t.StringC;
            createdAt: t.StringC;
            updatedAt: t.StringC;
            changerUuid: t.StringC;
            packageUuid: t.StringC;
            encDetails: t.IntersectionC<[t.TypeC<{
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
            fileReferences: t.ReadonlyArrayC<t.ReadonlyC<t.TypeC<{
                fileId: t.StringC;
                signature: t.StringC;
            }>>>;
        }>]>>>;
    }>>;
}>>;
export declare type ReportUser = t.TypeOf<typeof ReportUser>;
export interface ReportItem {
    readonly cursors: ReportCursors;
    readonly itemUsages: ReportItemUsage[];
    readonly vaults: Record<string, Vault>;
    readonly vaultItems: Record<string, VaultItem>;
    readonly partialUsers: Record<string, PartialUser>;
    readonly hasMore: boolean;
}
export interface ReportCursors {
    readonly current: string;
    readonly later?: string;
    readonly earlier?: string;
}
export interface ReportItemUsage {
    readonly vaultUuid: string;
    readonly userUuid: string;
    readonly itemUuid: string;
    readonly usedAt: string;
    readonly usedVersion: number;
}
export interface ReportVault {
    readonly overview?: ReportSectionVaultOverview;
    readonly itemUsage?: ReportSectionVaultItemUsage;
}
export interface ReportSectionVaultOverview {
    readonly vault: Vault;
    readonly userCount: number;
    readonly groupCount: number;
    readonly currentUserUuids: string[];
}
export interface ReportSectionVaultItemUsage {
    readonly itemUsages: ReportVaultItemUsage[];
    readonly vault: Vault;
    readonly vaultItems: VaultItem[];
    readonly usersByUserUuid: Record<string, PartialUser>;
}
export interface ReportVaultItemUsage {
    readonly userUuid: string;
    readonly itemUuid: string;
    readonly lastUsedAt: string;
    readonly lastUsedVersion: number;
}
interface ReportVaultsItem {
    readonly usersCount: number;
    readonly vault: Vault;
}
export interface ReportVaults {
    readonly items: ReportVaultsItem[];
}
export interface ReportAccount {
    readonly overview?: ReportSectionAccountOverview;
    readonly users?: ReportAccountUser[];
}
export interface ReportSectionAccountOverview {
    readonly userCount: number;
    readonly groupCount: number;
    readonly vaultCount: number;
}
export interface ReportOverview {
    readonly extended: ReportSectionExtendedAccountOverview;
}
export interface ReportSectionExtendedAccountOverview {
    readonly userActiveCount: number;
    readonly userSuspendedCount: number;
    readonly userPendingCount: number;
    readonly userInRecoveryCount: number;
    readonly userGuestCount: number;
    readonly invitesPendingCount: number;
    readonly groupCount: number;
    readonly vaultCount: number;
    readonly vaultSharedCount: number;
    readonly itemCount: number;
    readonly itemSharedCount: number;
    readonly deviceCount: number;
    readonly fileCount: number;
    readonly fileSize: number;
}
export interface ReportAccountUser {
    readonly deviceCount: number;
    readonly hasMFAEnabled: boolean;
    readonly hasLinkedAccount: boolean;
    readonly lastAuthAt: string;
    readonly createdAt: string;
    readonly personalItemCount: number;
    readonly personalVaultContentVersion: number;
    readonly user: PartialUser;
}
export interface ReportOldDevices {
    readonly overview: ReportOldDevicesOverview;
    readonly devices: ReportOldDevice[];
}
export interface ReportOldDevicesOverview {
    readonly clients: ReportOldDevicesOverviewClient[];
}
export interface ReportOldDevicesOverviewClient {
    readonly clientName: string;
    readonly count: number;
    readonly modernCount: number;
}
export interface ReportOldDevice {
    readonly device: ReportOldDeviceDevice;
    readonly user: PartialUser;
}
export interface ReportOldDeviceDevice {
    readonly uuid: string;
    readonly name: string;
    readonly clientName: string;
    readonly osName: string;
    readonly osVersion: string;
    readonly lastAuthAt: string;
}
export declare type ReportTypeParams = UserReportParams | VaultReportParams | ItemReportParams | (UserReportParams & VaultReportParams) | (UserReportParams & ItemReportParams);
interface UserReportParams {
    readonly userUuid: string;
}
interface VaultReportParams {
    readonly vaultUuid: string;
}
interface ItemReportParams {
    readonly vaultUuid: string;
    readonly itemUuid: string;
}
export declare const isValidReportParams: (reportParams: ReportTypeParams) => boolean;
export declare const getUserReport: (s: Session, userUUID: string, sections: ReportSections[]) => Promise<ReportUser>;
export declare const getItemReportWithCursors: (s: Session, reportParams: ReportTypeParams, cursors: ReportCursors) => Promise<ReportItem>;
export declare const getItemReportWithFilters: (s: Session, reportParams: ReportTypeParams, filters: ReportDateFilters) => Promise<ReportItem>;
export declare const getVaultReport: (s: Session, vaultUUID: string, sections: ReportSections[]) => Promise<ReportVault>;
export declare const getVaultsReport: (s: Session, type: VaultsReportTypes, attrs: VaultsReportAttributes[]) => Promise<ReportVaults>;
export declare const getAccountReport: (s: Session, sections: ReportSections[]) => Promise<ReportAccount>;
export declare const getOverviewReport: (s: Session, sections: ReportSections[]) => Promise<ReportOverview>;
export declare const getOldDevicesReport: (s: Session) => Promise<ReportOldDevices>;
export interface GetAccountReportCSVResponse {
    readonly csv: string;
}
export declare const getAccountReportCSV: (s: Session) => Promise<GetAccountReportCSVResponse>;
export {};
