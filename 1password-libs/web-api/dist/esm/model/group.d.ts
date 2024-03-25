import * as api from "../api";
import { LegacyActivity } from "./activity";
import { BitSet } from "./bit_set";
import { GroupMembershipWithKeyset } from "./group_membership";
import { Keyset, KeysetCiphertext } from "./keyset";
import { Person } from "./person";
import { RSAPublicKey } from "./rsa_public_key";
import { Vault } from "./vault";
import { VaultAccess } from "./vault_access";
export interface GroupMembershipOptions {
    role: api.GroupMembership.Role;
    state?: api.GroupMembership.State;
}
export interface GroupOverviewAttrs {
    uuid?: string;
    name: string;
    type: string;
    desc: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    activeKeysetUuid?: string;
    attrVersion?: number;
    avatar?: string;
    pubKey?: RSAPublicKey;
    userMembership?: api.GroupMembership.Type;
    permissions?: BitSet;
}
export declare class Group {
    uuid: string;
    name: string;
    type: string;
    desc: string;
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
    avatar: string;
    activeKeysetUuid: string | undefined;
    attrVersion: number;
    permissions: BitSet;
    private _attrMask;
    private _pubKey;
    private _memberships;
    private _vaultAccessMap;
    private _vaultACLs;
    archivedKeysets: KeysetCiphertext[];
    recoverableKeyset: KeysetCiphertext | undefined;
    recoveryKeyset: KeysetCiphertext | undefined;
    activities: LegacyActivity[];
    readonly accessorType: "group";
    static TypeOwners: string;
    static TypeAdmins: string;
    static TypeRecovery: string;
    static TypeTeamMembers: string;
    static TypeUserDefined: string;
    static TypeSecurity: string;
    static TypeReplacement: string;
    static TypeBackofficeUsers: string;
    static TypeBackofficeBilling: string;
    static TypeBackofficeSecurity: string;
    static TypeBackofficeDevelopers: string;
    static TypeBackofficeFinance: string;
    static TypeBackofficeOwners: string;
    static Attr: {
        None: number;
        PubKey: number;
        Memberships: number;
        VaultAccess: number;
        Activities: number;
        RecoverableKeyset: number;
        All: number;
    };
    constructor(overview: GroupOverviewAttrs);
    hasAttrMask(attrMask: BitMask): boolean;
    addAttrMask(attrMask: BitMask): void;
    get isTypeUserDefined(): boolean;
    get isTypeTeamMembers(): boolean;
    get isTypeOwners(): boolean;
    get isTypeAdmins(): boolean;
    get isTypeSecurity(): boolean;
    setOverview(overview: GroupOverviewAttrs): void;
    /** Throws error if the list of vault accesses has not been loaded */
    private _getLoadedVaultAccessMap;
    getAccessorVaultUuids(): Record<string, boolean>;
    getVaultUuids(): Record<string, boolean>;
    getVaultAccessMap(): Record<string, VaultAccess>;
    getVaultACLs(): Record<string, BitMask>;
    hasVaultACL(vault: Vault, acl: BitMask, accountIsFrozen?: boolean): boolean;
    hasPermission(...permissions: BitSet[]): boolean;
    getPeopleUuids(): Record<string, boolean>;
    get pubKey(): RSAPublicKey | undefined;
    set pubKey(pubKey: RSAPublicKey | undefined);
    getMembership(memberUuid: string): api.GroupMembership.Type | undefined;
    get memberships(): api.GroupMembership.Type[];
    set memberships(memberships: api.GroupMembership.Type[]);
    decryptRecoverableKeyset: (recoveryKeyset: Keyset) => Promise<Keyset>;
    /** Creates a GroupMembership object but does not actually attach it to the group */
    createMembership: (groupActiveKeyset: Keyset, member: Person | api.UserPubKey, options: GroupMembershipOptions) => Promise<api.GroupMembershipWithKeyset>;
    /** Creates a GroupMembership object and attaches it to the group */
    addMembership: (groupActiveKeyset: Keyset, member: Person | api.UserPubKey, options: GroupMembershipOptions) => Promise<api.GroupMembershipWithKeyset>;
    removeMember(member: Person): void;
    get vaultAccessList(): VaultAccess[];
    /**
     * Used only in the parser, which already performs the checks in _getLoadedVaultAccessMap().
     */
    getUnsafeVaultAccessList(): VaultAccess[];
    setVaultAccessList: (vaultAccessList: VaultAccess[]) => void;
    setVaultAccess(vaultAccess: VaultAccess): void;
    removeVaultAccess(vault: Vault): void;
    enableKeysetRecovery: (activeKeyset: Keyset, recoveryGroup: Group) => Promise<Group>;
    enableRecoverCapability: (recoveryKeyset: Keyset) => Promise<Group>;
    clearCachedAccessInfo(): void;
    compare(g: Group): number;
    toString(): string;
}
