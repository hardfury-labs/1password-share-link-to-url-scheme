import * as t from "io-ts";
import { Session } from "./session";
declare const VaultOverview: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
    accessVersion: t.NumberC;
    attrVersion: t.NumberC;
    contentVersion: t.NumberC;
    uuid: t.StringC;
}>, t.PartialC<{
    watchtowerReportNeedsUpdating: t.BooleanC;
}>]>>;
export declare type VaultOverview = t.TypeOf<typeof VaultOverview>;
declare const AccountOverview: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
    notifier: t.StringC;
    accountVersion: t.NumberC;
    billingVersion: t.NumberC;
    templateVersion: t.NumberC;
    userVersion: t.NumberC;
    keysetVersion: t.NumberC;
    userOverview: t.ReadonlyC<t.TypeC<{
        permissions: t.NumberC;
    }>>;
    billingOverview: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
        status: t.KeyofC<{
            A: boolean;
            C: boolean;
            F: boolean;
            L: boolean;
            T: boolean;
        }>;
        storageUsed: t.Type<number, number, unknown>;
    }>, t.PartialC<{
        accountWillFreezeAt: t.StringC;
        storageCapacity: t.NumberC;
    }>]>>;
    hasPackages: t.BooleanC;
    supportsItemUsage: t.BooleanC;
}>, t.PartialC<{
    vaults: t.ReadonlyArrayC<t.ReadonlyC<t.IntersectionC<[t.TypeC<{
        accessVersion: t.NumberC;
        attrVersion: t.NumberC;
        contentVersion: t.NumberC;
        uuid: t.StringC;
    }>, t.PartialC<{
        watchtowerReportNeedsUpdating: t.BooleanC;
    }>]>>>;
    watchtowerReportVersion: t.NumberC;
}>]>>;
export declare type AccountOverview = t.TypeOf<typeof AccountOverview>;
export declare const getAccountOverview: (s: Session) => Promise<AccountOverview>;
export {};
