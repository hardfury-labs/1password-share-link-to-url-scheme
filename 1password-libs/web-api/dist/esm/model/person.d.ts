import * as api from "../api";
import { Device } from "../shared";
import { LegacyActivity } from "./activity";
import { BitSet } from "./bit_set";
import { Group } from "./group";
import { Keyset, KeysetCiphertext } from "./keyset";
import { RSAPublicKey } from "./rsa_public_key";
import { SymmetricKey } from "./symmetric_key";
import { Vault } from "./vault";
import { VaultAccess } from "./vault_access";
export interface PersonAttrs {
    uuid?: string;
    name?: string;
    state?: string;
    type?: string;
    attrVersion?: number;
    keysetVersion?: number;
    avatar?: string;
    language?: string;
    combinedPermissions?: BitSet;
    newsletterPrefs?: number;
    preferences?: BitSet;
    externalGUID?: string;
    hasMFAEnabled?: boolean;
    proposedEmail?: string;
    email?: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    lastAuthAt?: Date | undefined;
    csToken?: string | undefined;
}
/**
 * {Person} represents other users in the system, unlike the {OldUser} object that represents the current user.
 */
export declare class Person {
    static UUIDNewlyCreatedProvisionUser: string;
    static UUIDNewlyCreatedServiceAccount: string;
    uuid: string;
    email: string;
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
    lastAuthAt: Date | undefined;
    attrVersion: number;
    keysetVersion: number;
    name: string;
    state: string;
    type: string;
    avatar: string;
    language: string;
    combinedPermissions: BitSet;
    newsletterPrefs: number;
    preferences: BitSet;
    externalGUID?: string;
    hasMFAEnabled?: boolean;
    proposedEmail?: string;
    csToken?: string;
    pubKey: RSAPublicKey | undefined;
    activeKeyset: Keyset | undefined;
    archivedKeysets: KeysetCiphertext[];
    masterKey: SymmetricKey | undefined;
    private _groupMemberships;
    private _directVaultAccessMap;
    private _groupVaultAccessMap;
    private _fullVaultAccessList;
    private _combinedVaultACLs;
    devices: readonly Device.Type[];
    activities: LegacyActivity[];
    personalItemsCount?: number;
    private _attrMask;
    private _initials;
    readonly accessorType: "user";
    static Attr: {
        None: number;
        PubKey: number;
        Keysets: number;
        Groups: number;
        VaultAccess: number;
        Devices: number;
        Activities: number;
        PersonalItemsCount: number;
        ProposedEmailChange: number;
        All: number;
    };
    constructor(attrs: PersonAttrs);
    hasAttrMask(attrMask: BitMask): boolean;
    addAttrMask(attrMask: BitMask): void;
    isOwner(): boolean;
    setAttrs(attrs: PersonAttrs): this;
    setActiveKeyset(keyset: Keyset | undefined): void;
    hasPermission(...permissions: BitSet[]): boolean;
    hasPreference(...preferences: BitSet[]): boolean;
    generateNewKeyset(): Promise<Person>;
    get joined(): Date | undefined;
    get initials(): string;
    clearCachedInitials(): void;
    travelModeIsEnabled(): boolean;
    getAccessorVaultUuids(): Record<string, boolean>;
    getVaultUuids(): Record<string, boolean>;
    getVaultACLs(): Record<string, BitMask>;
    hasVaultACL(vault: Vault, acl: BitMask, accountIsFrozen?: boolean): boolean;
    getGroupUuids(): Record<string, boolean>;
    getGroupMembership(group: Group): api.GroupMembership.Type | undefined;
    setState(state: string): void;
    /**
     * isActive indicates a Person is capable of performing actions
     * without administrator intervention.
     */
    get isActive(): boolean;
    /**
     * isEnrolled indicates a Person has completed the registration
     * process and been confirmed and has not been deleted. isActive
     * may or may not be true. Enrolled members are counted towards
     * the billing quantity for their account's subscription plan
     * unless they are suspended.
     */
    get isEnrolled(): boolean;
    /**
     * isMember indicates whether the person is a regular
     * account member (as opposed to a guest)
     */
    get isMember(): boolean;
    /**
     * isGuest indicates whether the person is a guest
     * account member
     */
    get isGuest(): boolean;
    vaultAccessForVault(vault: Vault): VaultAccess[];
    getDirectVaultAccessMap(): Record<string, VaultAccess>;
    getGroupVaultAccessMap(): Record<string, Record<string, VaultAccess>>;
    /**
     * Used only in parser, since it already performs the checks in vaultAccessList().
     */
    getUnsafeVaultAccessList(): VaultAccess[];
    /** Throws error if the list of vault accesses has not been loaded */
    get vaultAccessList(): VaultAccess[];
    set vaultAccessList(vaultAccessList: VaultAccess[]);
    setVaultAccess(vaultAccess: VaultAccess): void;
    removeVaultAccess(vault: Vault): void;
    /**
     * Used only in parser to avoid cloning the private array.
     */
    get unsafeGroupMemberships(): readonly api.GroupMembership.Type[];
    get groupMemberships(): readonly api.GroupMembership.Type[];
    set groupMemberships(groupMemberships: readonly api.GroupMembership.Type[]);
    pushGroupMembership(groupMembership: api.GroupMembership.Type): void;
    /**
     * Mimics the server's datastore operations to avoid
     * an extra request.
     */
    markTraveling(isTraveling: boolean): void;
    compare(p: Person): number;
    toString(): string;
}
