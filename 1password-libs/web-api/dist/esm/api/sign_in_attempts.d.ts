import { Session } from "./session";
export declare const enum SignInAttemptReasons {
    Reported = "report_firewall_rule",
    Blocked = "firewall_rule",
    Credentials = "credentials",
    MFA = "mfa",
    AppVersion = "app_version"
}
export declare const enum SignInAuxInfoTypes {
    Country = "country",
    Continent = "continent",
    IP = "ip",
    Anonymous = "anonymous",
    All = "all"
}
export interface SignInAttempt {
    readonly auxInfo?: {
        type: SignInAuxInfoTypes;
        value: string;
    };
    readonly country: string;
    readonly date: string;
    readonly deviceUuid: string;
    readonly email: string;
    readonly ip: string;
    readonly location: string;
    readonly osName: string;
    readonly clientName: string;
    readonly point: {
        readonly lat: number;
        readonly lon: number;
    };
    readonly reason: SignInAttemptReasons;
    readonly userUuid: string;
    readonly uuid: string;
}
interface GetSignInAttemptsResponse {
    readonly attempts: readonly SignInAttempt[];
}
export declare const getSignInAttempts: (s: Session) => Promise<GetSignInAttemptsResponse>;
export {};
