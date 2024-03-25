import * as t from "io-ts";
import { Group } from "./group";
import { RolledUserKeysetData } from "./roll_user_keyset";
import { Session } from "./session";
import { Vault } from "./vault";
export declare const getAccountHasUsedCli: (s: Session) => Promise<boolean>;
declare const CliProvisionedUsers: t.ReadonlyC<t.TypeC<{
    provisionedUsers: t.ReadonlyArrayC<t.ReadonlyC<t.TypeC<{
        uuid: t.StringC;
        name: t.StringC;
        email: t.StringC;
        avatar: t.StringC;
        state: t.StringC;
        type: t.StringC;
    }>>>;
    provisionManagersGroupUuid: t.StringC;
}>>;
export declare type CliProvisionedUsers = t.TypeOf<typeof CliProvisionedUsers>;
export declare const getProvisionedUsersCreatedByCli: (s: Session) => Promise<CliProvisionedUsers>;
declare const PartialGroup: t.ReadonlyC<t.TypeC<{
    uuid: t.StringC;
    name: t.StringC;
    avatar: t.StringC;
    permissions: t.NumberC;
}>>;
export declare type PartialGroup = t.TypeOf<typeof PartialGroup>;
declare const CliGroups: t.ReadonlyC<t.TypeC<{
    groups: t.ReadonlyArrayC<t.ReadonlyC<t.TypeC<{
        uuid: t.StringC;
        name: t.StringC;
        avatar: t.StringC;
        permissions: t.NumberC;
    }>>>;
}>>;
export declare type CliGroups = t.TypeOf<typeof CliGroups>;
export declare const getGroupsCreatedByCli: (s: Session) => Promise<CliGroups>;
declare const CliVaults: t.ReadonlyC<t.TypeC<{
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
    hasVaultsInStateT: t.BooleanC;
}>>;
export declare type CliVaults = t.TypeOf<typeof CliVaults>;
export declare const getVaultsCreatedByCli: (s: Session) => Promise<CliVaults>;
declare const CliPrivateVault: t.ReadonlyC<t.TypeC<{
    isCreatedByCli: t.BooleanC;
}>>;
export declare type CliPrivateVault = t.TypeOf<typeof CliPrivateVault>;
export declare const getCliAffectedPrivateVaultStatus: (s: Session) => Promise<CliPrivateVault>;
declare const FileCreatedByCliReference: t.ReadonlyC<t.TypeC<{
    vaultUuid: t.StringC;
    itemUuid: t.StringC;
}>>;
export declare type FileCreatedByCliReference = t.TypeOf<typeof FileCreatedByCliReference>;
declare const FileCreatedByCli: t.ReadonlyC<t.TypeC<{
    fileId: t.StringC;
    references: t.ReadonlyArrayC<t.ReadonlyC<t.TypeC<{
        vaultUuid: t.StringC;
        itemUuid: t.StringC;
    }>>>;
}>>;
export declare type FileCreatedByCli = t.TypeOf<typeof FileCreatedByCli>;
declare const CliFiles: t.ReadonlyC<t.TypeC<{
    files: t.ReadonlyArrayC<t.ReadonlyC<t.TypeC<{
        fileId: t.StringC;
        references: t.ReadonlyArrayC<t.ReadonlyC<t.TypeC<{
            vaultUuid: t.StringC;
            itemUuid: t.StringC;
        }>>>;
    }>>>;
}>>;
export declare type CliFiles = t.TypeOf<typeof CliFiles>;
export declare const getFilesCreatedByCli: (s: Session, vaultUuid?: string | undefined) => Promise<CliFiles>;
export declare const lockVault: (s: Session) => (vaultUuid: string) => Promise<void>;
export declare const unlockVault: (s: Session) => (vaultUuid: string) => Promise<void>;
export declare const replaceVault: (s: Session, data: {
    readonly oldUuid: string;
    readonly newVault: Vault;
}) => Promise<void>;
export declare const replaceGroup: (s: Session, data: {
    readonly oldUuid: string;
    readonly newUuid: string;
}) => Promise<void>;
export declare const replaceGroupKeysets: (s: Session, group: Group) => Promise<void>;
export declare const replaceKeysetForProvisionedUser: (s: Session, userUuid: string, data: RolledUserKeysetData) => Promise<void>;
declare const CliUsers: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
    totalCount: t.NumberC;
    users: t.ReadonlyArrayC<t.ReadonlyC<t.TypeC<{
        uuid: t.StringC;
        name: t.StringC;
        email: t.StringC;
        avatar: t.StringC;
        state: t.StringC;
        type: t.StringC;
    }>>>;
}>, t.PartialC<{
    affectedProvisionManager: t.ReadonlyC<t.TypeC<{
        uuid: t.StringC;
        name: t.StringC;
        email: t.StringC;
        avatar: t.StringC;
        state: t.StringC;
        type: t.StringC;
    }>>;
}>]>>;
export declare type CliUsers = t.TypeOf<typeof CliUsers>;
export declare const getUsersWithCliAffectedData: (s: Session) => Promise<CliUsers>;
export {};
