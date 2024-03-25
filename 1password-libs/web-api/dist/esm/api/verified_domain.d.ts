import { Session } from "./session";
export declare const enum VerifiedDomainType {
    Email = "E",
    DNS = "D"
}
export interface BeginDomainVerificationResponse {
    readonly txtRecord?: string;
}
export declare const beginDomainVerification: (s: Session, type: VerifiedDomainType, domain: string, emailMailbox: string) => Promise<BeginDomainVerificationResponse>;
export declare const completeDomainVerification: (s: Session, type: VerifiedDomainType, domain: string, token: string) => Promise<void>;
export interface GetVerifiedDomainsResponse {
    readonly verified: VerifiedDomain[];
    readonly pending: PendingVerifiedDomain[];
}
export interface VerifiedDomain {
    readonly domain: string;
    readonly aliasOf?: string;
}
export interface PendingVerifiedDomain {
    readonly domain: string;
    readonly type: string;
    readonly txtRecord?: string;
}
export declare const getVerifiedDomains: (s: Session) => Promise<GetVerifiedDomainsResponse>;
export declare const updateVerifiedDomain: (s: Session, verifiedDomain: VerifiedDomain) => Promise<void>;
export declare const deleteVerifiedDomain: (s: Session, domain: string) => Promise<void>;
