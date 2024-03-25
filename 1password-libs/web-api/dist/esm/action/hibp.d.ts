import { HibpDomainReportCSV, HibpDomainReportNotifyInvite, HibpDomainReportNotifyRequest, HibpDomainReportNotifyUser, HibpUser } from "../api/hibp";
import { Context } from "./context";
export interface HibpBreach {
    readonly name: string;
    readonly domain: string;
    readonly title: string;
    readonly date: string;
    readonly addedDate: Date | undefined;
    readonly count: number;
    readonly description: string;
    readonly dataClasses: string[];
    readonly isSpamList?: boolean;
    readonly notifiedDate?: Date;
}
export declare type HibpReport = HibpBreach;
export interface HibpDomainReport {
    readonly domains: string[];
    readonly users: HibpUser[];
    readonly breaches: HibpBreach[];
    readonly lastRunAt?: Date;
}
export declare const enum HIBPDataClass {
    Passwords = "Passwords"
}
export { HibpUser, HibpDomainReportNotifyRequest, HibpDomainReportNotifyUser, HibpDomainReportNotifyInvite, };
export declare const postHibpDomainReportNotify: (c: Context, body: HibpDomainReportNotifyRequest) => Promise<void>;
export declare const getHibpDomainReport: (c: Context) => Promise<HibpDomainReport>;
export declare const getHibpDomainReportCSV: (c: Context) => Promise<HibpDomainReportCSV>;
export declare const getHibpReport: () => Record<string, HibpReport> | undefined;
export declare const loadHibpReport: (c: Context) => Promise<void>;
