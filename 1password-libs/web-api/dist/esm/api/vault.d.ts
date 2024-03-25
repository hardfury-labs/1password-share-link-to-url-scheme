import * as t from "io-ts";
import { Session } from "./session";
import { DateFilterDirection, getDateForVaultsFilter } from "./util";
export declare const PreviewGroup: t.ReadonlyC<t.TypeC<{
    uuid: t.StringC;
    avatar: t.StringC;
    type: t.StringC;
}>>;
export declare type PreviewGroup = t.TypeOf<typeof PreviewGroup>;
export declare const PreviewUser: t.ReadonlyC<t.TypeC<{
    uuid: t.StringC;
    avatar: t.StringC;
    initials: t.StringC;
}>>;
export declare type PreviewUser = t.TypeOf<typeof PreviewUser>;
export declare const VaultAccess: t.ReadonlyC<t.TypeC<{
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
export declare type VaultAccess = t.TypeOf<typeof VaultAccess>;
export declare const Vault: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
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
}>]>>;
export declare type Vault = t.TypeOf<typeof Vault>;
export interface BaseVaultParams {
    readonly withAccessorPreviews?: boolean;
    readonly user?: string;
    readonly group?: string;
}
export interface VaultParams extends BaseVaultParams {
    readonly permission?: string;
}
export interface GetVaultsResponse {
    readonly vaults: Vault[];
    readonly totalCount: number;
}
export declare const getVaults: (s: Session, vaultParams: VaultParams) => Promise<Vault[]>;
export declare const getVaultsForAccountSplitting: (s: Session) => Promise<Vault[]>;
export interface LimitedVaultParams {
    readonly limit: number;
}
export { getDateForVaultsFilter };
export declare const DefaultByCreationParams: {
    getDateString: (direction: DateFilterDirection) => string;
    direction: DateFilterDirection;
    limit: number;
};
export interface LimitedVaultsResponse {
    readonly vaults: Vault[];
    readonly hasMoreData: boolean;
}
export declare const getVaultsByCreation: (s: Session, date: string, direction: DateFilterDirection, options: Partial<LimitedVaultParams>) => Promise<LimitedVaultsResponse>;
export declare const getVault: (s: Session, uuid: string, attrMask: BitMask) => Promise<Vault>;
export declare const getSystemVault: (s: Session) => Promise<Vault>;
export declare const getPersonalVault: (s: Session) => Promise<Vault>;
export declare const getEveryoneVault: (s: Session) => Promise<Vault>;
export declare const getGeneratedPasswordsVault: (s: Session) => Promise<Vault>;
export declare const updateVault: (s: Session, vault: Vault) => Promise<void>;
export declare const updateVaultClientAccess: (s: Session, vaultUUID: string, clientAccess: number) => Promise<void>;
export declare const addVaultAccess: (s: Session, vaultUUID: string, vaultaccess: readonly VaultAccess[]) => Promise<void>;
declare const CreateVaultPreflight: t.ReadonlyC<t.TypeC<{
    mandatoryGroupUuids: t.ReadonlyArrayC<t.StringC>;
    adminGroupUuids: t.ReadonlyArrayC<t.StringC>;
    enableAdminGroupsByDefault: t.BooleanC;
    iconSet: t.ReadonlyC<t.TypeC<{
        version: t.StringC;
        icons: t.ReadonlyArrayC<t.TypeC<{
            url: t.StringC;
            description: t.StringC;
        }>>;
    }>>;
}>>;
export declare type CreateVaultPreflight = t.TypeOf<typeof CreateVaultPreflight>;
export declare const getCreateVaultPreflight: (s: Session, vaultType: string) => Promise<CreateVaultPreflight>;
export declare const createAccountSplittingVaultPreflight: (s: Session) => Promise<CreateVaultPreflight>;
export declare const createVault: (s: Session, vault: Vault) => Promise<void>;
export declare const createVaultForAccountSplitting: (s: Session, vault: Vault) => Promise<void>;
declare const DeleteVaultPreflight: t.ReadonlyC<t.TypeC<{
    archivedItemCount: t.NumberC;
}>>;
export declare type DeleteVaultPreflight = t.TypeOf<typeof DeleteVaultPreflight>;
export declare const deleteVaultPreflight: (s: Session, vaultUuid: string) => Promise<DeleteVaultPreflight>;
export declare const deleteVault: (s: Session, vaultUUID: string) => Promise<void>;
export declare const deleteAccessorFromVault: (s: Session, vaultUUID: string, accessorUUID: string, isGroup: boolean) => Promise<void>;
export declare const updatePersonVaultAccessPermissions: (s: Session, vaultUUID: string, accessorUUID: string, acl: BitMask) => Promise<void>;
export declare const updateGroupVaultAccessPermissions: (s: Session, vaultUUID: string, accessorUUID: string, acl: BitMask) => Promise<void>;
export declare const legacyDeleteAllArchivedItems: (s: Session, vault: {
    uuid: string;
    contentVersion: number;
}) => Promise<void>;
export declare const enableTravelSafe: (s: Session, vaultUUID: string) => Promise<void>;
export declare const disableTravelSafe: (s: Session, vaultUUID: string) => Promise<void>;
