import { PartialUser } from "../api";
import * as api from "../api";
import { Person } from "./person";
import { Vault } from "./vault";
import { VaultItem } from "./vault_item";
export interface ReportUser {
    readonly overview?: ReportSectionUserOverview;
    readonly itemUsage?: ReportSectionUserItemUsage;
}
export interface ReportSectionUserOverview {
    readonly user: Person;
    readonly groupCount: number;
    readonly vaultCount: number;
    readonly itemCount: number;
}
export interface ReportSectionUserItemUsage {
    readonly itemUsages: ReportUserItemUsage[];
}
export interface ReportUserItemUsage extends api.ReportUserItemUsage {
    readonly vaultItem: VaultItem;
}
export interface ReportItem {
    readonly overview: ReportSectionItemOverview;
    readonly itemUsages: ReportSectionItemUsage[];
}
export interface ReportSectionItemOverview {
    readonly item: VaultItem | undefined;
    readonly usersByUserUuid: Record<string, api.PartialUser>;
}
export interface ReportSectionItemUsage extends api.ReportItemUsage {
    readonly vaultItem: VaultItem;
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
export interface ReportVaultItemUsage extends api.ReportVaultItemUsage {
    readonly vaultItem: VaultItem;
}
export interface ReportSectionVaultItemUsage {
    readonly itemUsages: ReportVaultItemUsage[];
    readonly usersByUserUuid: Record<string, PartialUser>;
}
export interface ReportVaults {
    readonly vault: Vault;
    readonly usersCount: number;
}
export declare type ReportAccount = api.ReportAccount;
export declare type ReportSectionAccountOverview = api.ReportSectionAccountOverview;
export declare type ReportAccountUser = api.ReportAccountUser;
export declare type ReportOldDevices = api.ReportOldDevices;
