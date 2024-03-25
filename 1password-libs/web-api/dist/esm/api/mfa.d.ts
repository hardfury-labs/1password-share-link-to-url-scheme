import { SendMFACodeResponse, VerifyMFAResponse } from "./auth";
import { Session } from "./session";
export declare const TOTP_KEY_HANDLE = "totp";
export declare const EMAIL_KEY_HANDLE = "email";
export declare enum MFAType {
    TOTP = "T",
    Duo = "D",
    DSecret = "S",
    DSecretProxy = "P",
    WebAuthn = "W",
    Email = "E"
}
export interface StandardMFAParams {
    readonly type: MFAType;
    readonly keyHandle: string;
    readonly keyValue: string;
    readonly createdAt?: string;
    readonly updatedAt?: string;
}
export interface MFACodeParams extends StandardMFAParams {
    readonly digits: number;
    readonly code: string;
}
export interface MFATOTPParams extends StandardMFAParams {
    readonly digits?: number;
    readonly totpClientData?: string;
}
export interface MFAWebAuthnParams extends StandardMFAParams {
    readonly keyName?: string;
    readonly webAuthnClientData?: string;
}
export declare type MFAParams = MFATOTPParams | MFAWebAuthnParams | MFACodeParams;
export interface SendMFACodeParams {
    method: string;
}
export interface MFAWebAuthnChallenge {
    challenge: string;
}
export interface MFAConfig {
    readonly allowedTypes: MFAType[];
    readonly canDisableAll: boolean;
    readonly enforced: boolean;
    readonly hasMFA: boolean;
}
export declare const enableMFA: (s: Session, mfaParams: MFAParams) => Promise<VerifyMFAResponse | null>;
export declare const disableMFA: (s: Session, keyHandle: string) => Promise<void>;
export declare const sendMFACode: (s: Session, params: SendMFACodeParams) => Promise<SendMFACodeResponse>;
export declare const getMFA: (s: Session) => Promise<MFAParams[]>;
export declare const getMFAConfig: (s: Session) => Promise<MFAConfig>;
export declare const verifyTotp: (s: Session, code: string) => Promise<VerifyMFAResponse>;
export declare const getWebAuthnChallenge: (s: Session) => Promise<string>;
