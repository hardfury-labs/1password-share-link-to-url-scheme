import { VaultItem } from "../model";
import { HibpReport } from "./hibp";
export interface WatchtowerReport {
    compromisedDomain?: string;
    hibpReport?: HibpReport;
    vulnerablePassword?: boolean;
    passwordStrength?: number;
    reusedPassword?: boolean;
    unsecuredWebsite?: boolean;
    inactiveTwoFactor?: string;
    expiringSoon?: boolean;
    expired?: boolean;
}
export declare const generateWatchtowerReportForItem: (item: VaultItem, shouldCheckPwnedPasswords: boolean, cachedPasswordValues?: string[] | undefined) => Promise<WatchtowerReport>;
export declare const generateWatchtowerReportForItems: (items: readonly VaultItem[], shouldCheckPwnedPasswords: boolean) => Promise<Record<string, WatchtowerReport>>;
