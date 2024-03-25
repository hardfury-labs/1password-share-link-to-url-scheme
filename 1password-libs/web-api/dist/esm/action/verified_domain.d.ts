import { BeginDomainVerificationResponse, GetVerifiedDomainsResponse, PendingVerifiedDomain, VerifiedDomain, VerifiedDomainType } from "../api/verified_domain";
import { Context } from "./context";
export { VerifiedDomainType, BeginDomainVerificationResponse, GetVerifiedDomainsResponse, VerifiedDomain, PendingVerifiedDomain, };
export declare const beginDomainVerification: (c: Context, type: VerifiedDomainType, domain: string, emailMailbox?: string | undefined) => Promise<BeginDomainVerificationResponse>;
export declare const completeDomainVerification: (c: Context, type: VerifiedDomainType, domain: string, token: string) => Promise<void>;
export declare const getVerifiedDomains: (c: Context) => Promise<GetVerifiedDomainsResponse>;
export declare const updateVerifiedDomain: (c: Context, verifiedDomain: VerifiedDomain) => Promise<void>;
export declare const deleteVerifiedDomain: (c: Context, domain: string) => Promise<void>;
