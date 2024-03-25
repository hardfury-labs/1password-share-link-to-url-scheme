import { ServiceAccountsPartialUser, ServiceAccountToken, ServiceAccountType } from "../../api";
import { Device } from "../../shared";
import { ServiceAccountUser } from "../service_accounts";
import { VaultItem } from "../vault_item";
export interface GroupPreviewList {
    uuid: string;
    avatar: string;
    type: string;
}
export interface VaultPreviewList {
    uuid: string;
    avatar: string;
    type: string;
}
export interface IntegrationSummary {
    title: string;
    icon: string | undefined;
    active: number | undefined;
    tokens: ServiceAccountToken[] | undefined;
    groups: GroupPreviewList[];
    syncActivity: Date | undefined;
    createdAt: Date | undefined;
    version: string | undefined;
    buildNumber?: number;
    vaults: {
        displayable: VaultPreviewList[];
        total: number;
    };
    vaultItem?: VaultItem;
}
export interface Integration extends ServiceAccountsPartialUser {
    readonly serviceAccountType: ServiceAccountType;
    readonly summary: IntegrationSummary;
    readonly devices?: Device.Type[];
}
export interface FullIntegration extends ServiceAccountUser {
    readonly type: ServiceAccountType;
}
