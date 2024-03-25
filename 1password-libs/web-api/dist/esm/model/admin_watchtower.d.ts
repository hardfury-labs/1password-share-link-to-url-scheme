import * as t from "io-ts";
import { VaultAttrs } from "./vault";
export declare const WatchtowerStructureVersion = 1;
export declare const WatchtowerDataStructureV1: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
    cw: t.NumberC;
    rp: t.NumberC;
    wp: t.NumberC;
    i2fa: t.NumberC;
    exp: t.NumberC;
    tot: t.NumberC;
}>, t.PartialC<{
    uw: t.NumberC;
    vp: t.NumberC;
}>]>>;
export declare type WatchtowerDataStructureV1 = t.TypeOf<typeof WatchtowerDataStructureV1>;
export interface WatchtowerReportItem {
    uuid: string;
    vaultUuid: string;
    combinedAcl?: number;
    updatedAt: string;
    isOutdated: boolean;
    reportData: WatchtowerDataStructureV1;
    totalIssues: number;
    vaultAttrs?: VaultAttrs;
}
export interface WatchtowerReport {
    reports: WatchtowerReportItem[];
    accountVaultCount: number;
}
