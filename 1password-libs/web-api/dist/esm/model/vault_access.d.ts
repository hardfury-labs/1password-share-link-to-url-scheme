import { VaultAccess as api } from "../api/vault";
import { JweB } from "../util/crypto";
import { Group } from "./group";
import { Keyset } from "./keyset";
import { Person } from "./person";
import { SymmetricKey } from "./symmetric_key";
import { Vault } from "./vault";
import { BasicVaultAccessor } from "./vault_accessor";
export interface VaultAccessOptions {
    acl: number;
    leaseTimeout?: number;
}
/** Represents access to a vault by an individual user or a group. */
export declare class VaultAccess implements api {
    vaultUuid: string;
    accessorType: "group" | "user";
    accessorUuid: string;
    vaultKeySN: number;
    vaultKey: SymmetricKey | undefined;
    encVaultKey: JweB | undefined;
    encryptedBy: string;
    /** Access Control List */
    acl: number;
    /** Lease timeout for apps that keep an offline copy of the vault */
    leaseTimeout: number;
    constructor(attrs: api);
    static combineACLs(accessList: Pick<VaultAccess, "acl">[]): number;
    static generate: (vault: Vault, accessor: Group | Person | Required<BasicVaultAccessor>, options: VaultAccessOptions) => Promise<VaultAccess>;
    canManageVault: (vault: Vault) => boolean;
    /**
     * Encrypts active vault key for the accessor.
     */
    encryptVaultKey: (accessor: Group | Person) => Promise<JweB>;
    /**
     * Decrypts access key
     */
    decryptVaultKey: (keyset: Keyset) => Promise<SymmetricKey>;
}
/**
 * Represents core {@link VaultAccess} data. Typically used to modify a VaultAccess record or render it in a component.
 */
export declare type PartialVaultAccess = Pick<VaultAccess, "accessorType" | "accessorUuid" | "acl" | "vaultUuid">;
/**
 * Represents a {@link PartialVaultAccess} with a user `accessorType`.
 */
export interface PartialUserVaultAccess extends PartialVaultAccess {
    accessorType: "user";
}
