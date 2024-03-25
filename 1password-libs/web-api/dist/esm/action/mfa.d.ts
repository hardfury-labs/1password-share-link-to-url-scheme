import * as api from "../api";
import { EMAIL_KEY_HANDLE, MFAType, TOTP_KEY_HANDLE } from "../api/mfa";
import { Context } from "./context";
export { EMAIL_KEY_HANDLE, MFAType, TOTP_KEY_HANDLE };
export interface StandardMFAParams {
    type: MFAType;
    keyHandle: string;
    keyValue: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface MFACodeParams extends StandardMFAParams {
    digits: number;
    code: string;
}
export interface MFATOTPParams extends StandardMFAParams {
    digits?: number;
    totpClientData?: string;
}
export interface MFAWebAuthnParams extends StandardMFAParams {
    keyName?: string;
    webAuthnClientData?: string;
}
export declare type MFAParams = MFATOTPParams | MFAWebAuthnParams | MFACodeParams;
export declare const enableMFA: (c: Context, params: api.MFAParams) => Promise<api.VerifyMFAResponse | undefined>;
export declare const disableMFA: (c: Context, keyHandle: string) => Promise<void>;
export declare const sendMFACode: (c: Context, params: api.SendMFACodeParams) => Promise<api.SendMFACodeResponse>;
export declare const getMFA: (c: Context) => Promise<MFAParams[]>;
export declare const getMFAConfig: (c: Context) => Promise<api.MFAConfig>;
export declare const verifyTotp: (c: Context, code: string) => Promise<api.VerifyMFAResponse>;
export declare const generateDSecretHmac: (dSecret: string, sessionID: string) => string;
export declare const makeWebAuthnCredential: (c: Context, keyName: string, existingKeyHandles: string[], challenge: string) => Promise<api.MFAParams>;
export declare const getWebAuthnAssertion: (c: Context, keyHandles: string[], challenge: string) => Promise<api.WebAuthnRequest>;
export declare const browserSupportsWebAuthn: () => boolean;
