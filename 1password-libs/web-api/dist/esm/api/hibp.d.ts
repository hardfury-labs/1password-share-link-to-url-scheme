import { PartialUser } from "./partial_user";
import { Session } from "./session";
export interface HibpBreach {
    readonly name: string;
    readonly domain: string;
    readonly title: string;
    readonly date: string;
    readonly addedDate: string;
    readonly count: number;
    readonly description: string;
    readonly dataClasses: string[];
    readonly isSpamList?: boolean;
    readonly notifiedDate?: string;
}
export interface HibpUser {
    readonly email: string;
    readonly aliases?: string[];
    readonly user?: PartialUser;
    readonly invitePending?: boolean;
    readonly breachNames: string[];
}
export interface HibpDomainReport {
    readonly domains: string[];
    readonly users: HibpUser[];
    readonly breaches: HibpBreach[];
    readonly lastRunAt?: string;
}
export interface HibpDomainReportCSV {
    readonly csv: string;
}
export interface HibpDomainReportNotifyRequest {
    readonly users: HibpDomainReportNotifyUser[];
    readonly invites: HibpDomainReportNotifyInvite[];
    readonly message: string;
}
export interface HibpDomainReportNotifyUser {
    readonly uuid: string;
    readonly breachNames: string[];
}
export interface HibpDomainReportNotifyInvite {
    readonly email: string;
    readonly breachNames: string[];
}
export declare const getHibpReport: (s: Session) => Promise<HibpBreach[]>;
export declare const getHibpDomainReport: (s: Session) => Promise<HibpDomainReport>;
export declare const getHibpDomainReportCSV: (s: Session) => Promise<HibpDomainReportCSV>;
export declare const postHibpDomainReportNotify: (s: Session, body: HibpDomainReportNotifyRequest) => Promise<void>;
