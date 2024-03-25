import * as util from "../util";
import { LegacyActivity } from "./activity";
import { BitSet } from "./bit_set";
import { Group } from "./group";
import { Person } from "./person";
import { SymmetricKey } from "./symmetric_key";
import { VaultAccess } from "./vault_access";
import { VaultItemTemplate } from "./vault_item_template";
export interface VaultAttrs {
    uuid?: string;
    name: string;
    type: string;
    desc: string;
    avatar?: string;
    defaultAcl?: number;
}
export interface PreviewUser {
    uuid: string;
    avatar: string;
    initials: string;
}
export interface PreviewGroup {
    uuid: string;
    avatar: string;
    type: string;
}
export declare class Vault {
    name: string;
    type: string;
    uuid: string;
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
    attrVersion: number;
    contentVersion: number;
    activeItemCount: number;
    clientAccess: BitSet;
    desc: string;
    defaultAcl?: number;
    avatar: string;
    encAttrs?: util.crypto.JweB;
    leaseTimeout: number;
    keys: SymmetricKey[];
    activeKey?: SymmetricKey;
    accessList: VaultAccess[];
    activities: LegacyActivity[];
    itemTemplates: VaultItemTemplate[];
    previewGroups: PreviewGroup[];
    previewUsers: PreviewUser[];
    /**
     * Set and used only by clients with a local database, such as b5x.
     */
    localId?: number;
    private _attrMask;
    private _combinedAcl;
    private _userUuidMap;
    private _groupUuidMap;
    constructor(attrs: VaultAttrs);
    static TypePersonal: string;
    static TypeEveryone: string;
    static TypeUserCreated: string;
    static TypeProvision: string;
    static TypeSystem: string;
    static TypeGeneratedPasswords: string;
    static TypeReplacement: string;
    static TypeClientPlaceholder: string;
    /**
     * This is used as the default description for special vaults
     * so that we can tell when a custom description has been set.
     * It is random instead of a real default so that no one picks
     * it accidentally. [robyoder 2017.03.31]
     */
    static DefaultDescMarker: string;
    static Attr: {
        None: number;
        Accessors: number;
        ArchivedKeys: number;
        Activities: number;
        ItemCategories: number;
        CombinedAccess: number;
        All: number;
    };
    hasAttrMask(attrMask: BitMask): boolean;
    addAttrMask(attrMask: BitMask): void;
    get isPersonal(): boolean;
    get isSystem(): boolean;
    get isGeneratedPasswords(): boolean;
    hasClientAccess(...clientAccess: BitSet[]): boolean;
    getPeopleUuids(): Record<string, boolean>;
    getGroupUuids(): Record<string, boolean>;
    clearCachedAccessInfo(): void;
    setCombinedAcl(acl: number): void;
    getCombinedAcl(): number | undefined;
    setAccessList(accessList: VaultAccess[]): void;
    generateNewKey: () => Promise<Vault>;
    revokeAccess: (accessor: Group | Person) => Promise<void>;
    clearAccessList(): void;
    getAttrs: () => VaultAttrs;
    encryptAttrs: () => Promise<Vault>;
    encrypt: (plaintext: Uint8Array) => Promise<util.crypto.JweB>;
    decrypt: (ciphertext: util.crypto.JweB) => Promise<ArrayBuffer>;
    private convertAttrToString;
    decryptAttrs: (encAttrs: util.crypto.JweB) => Promise<Vault>;
    toString(): string;
}
export declare namespace Vault {
    const compare: util.Comparator<Vault>;
    const activeUserHasAcl: (vault: Vault, acl: number) => boolean;
}
