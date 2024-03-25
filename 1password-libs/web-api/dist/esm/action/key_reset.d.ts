import { FileCreatedByCli, PartialGroup } from "../api/key_reset";
import { PartialUser } from "../api/partial_user";
import { Vault as apiVault } from "../api/vault";
import { Group } from "../model/group";
import { Context } from "./context";
import { CorrectProvisionedUsersResult, ProvisionedUsersInfo } from "./key_reset_prov";
import { ReplaceVaultResult, VaultsResult } from "./key_reset_vaults";
export declare type CliAffectedStatus = CliNotAffected | CliOwnerNeedsProvGroupAccess | CliAffectedOwner | CliAffectedUser | CliOthersAffected | CliFamilyMaybeAffected;
interface CliNotAffected {
    readonly type: "not_affected";
}
interface AffectedOwnerInfo {
    readonly provInfo: ProvisionedUsersInfo;
    readonly groups: readonly PartialGroup[];
    readonly vaults: readonly apiVault[];
    readonly files: readonly FileCreatedByCli[];
}
export interface CliAffectedOwner extends AffectedOwnerInfo {
    readonly type: "affected_owner";
}
export interface CliOwnerNeedsProvGroupAccess {
    readonly type: "needs_prov_group_access";
    readonly group: Group;
}
interface AffectedUserInfo {
    readonly privateVaultAffected: boolean;
    readonly files: readonly FileCreatedByCli[];
}
export interface CliAffectedUser extends AffectedUserInfo {
    readonly type: "affected_user";
}
export interface CliOthersAffected {
    readonly type: "others_affected";
    readonly list: readonly PartialUser[];
    readonly affectedProvisionManager: PartialUser | undefined;
}
export interface CliFamilyMaybeAffected {
    readonly type: "family_maybe_affected";
    readonly list: readonly PartialUser[];
}
export declare const getCliAffectedStatus: (c: Context) => Promise<CliAffectedStatus>;
export declare type CliProgressCategory = "prov" | "groups" | "vaults" | "files" | "p_vault" | "done";
declare type CliProgressUpdateFunction = (percentage: number, category: CliProgressCategory) => void;
export declare const updateAllCliAffectedData: (c: Context, status: CliAffectedOwner | CliAffectedUser, updateProgress: CliProgressUpdateFunction) => Promise<CliAffectedOwnerResult | CliAffectedUserResult>;
export interface CliAffectedOwnerResult {
    readonly type: "affected_owner_result";
    readonly provResult?: CorrectProvisionedUsersResult;
    readonly vaultsResult?: VaultsResult;
    readonly error?: CliAffectedOwnerError;
}
export declare type CliAffectedOwnerError = MustCompleteProvisioningError | MustCompleteRecoveryError | UnwriteableFileVaultsError;
interface VaultId {
    readonly name: string;
    readonly uuid: string;
}
interface UnwriteableFileVaultsError {
    readonly type: "unwriteable_file_vaults";
    readonly vaults: readonly VaultId[];
    readonly csv: Blob;
}
interface MustCompleteProvisioningError {
    readonly type: "must_complete_provisioning";
    readonly count: number;
}
interface MustCompleteRecoveryError {
    readonly type: "must_complete_recovery";
    readonly count: number;
}
export interface CliAffectedUserResult {
    readonly type: "affected_user_result";
    readonly privateVaultResult: ReplaceVaultResult | undefined;
}
export declare const getCveReportCsv: (c: Context, status: CliAffectedOwner) => Promise<Blob>;
export {};
