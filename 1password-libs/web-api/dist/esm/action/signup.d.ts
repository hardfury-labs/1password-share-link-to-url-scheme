import * as api from "../api";
import * as model from "../model";
import { TaxAdvice } from "./billing";
import { Context } from "./context";
export declare const enum UserSignupType {
    Invite = 1,
    Recovery = 2,
    Provision = 3
}
export declare const enum SignupSource {
    Web = "B",
    iOS = "I",
    Android = "A",
    Windows = "W",
    Mac = "M",
    CLI = "C",
    API = "P",
    ThirdParty = "T",
    MobileWeb = "O"
}
export interface UserSignupInfo {
    source: UserSignupType;
    uuid: string;
    token: string;
    name: string;
    email: string;
    language: string;
    password: string;
    avatar?: string;
    newsletterPrefs?: number;
    secretKey?: model.SecretKey;
}
export interface LegacyAccountSignupInfo {
    domain: string;
    email: string;
    accountType: string;
    accountName: string;
    language: string;
    promoCode?: string;
    referrer?: string;
    source: SignupSource;
    stepUuid?: string;
    tierName: string;
}
export interface AccountSignupInfo {
    email: string;
    accountType: string;
    accountName?: string;
    companySize?: string;
    userName: string;
    language: string;
    promoCode?: string;
    purchaseOrderToken?: string;
    stripePurchaseOrderToken?: string;
    referrer?: string;
    source: SignupSource;
    stepUuid?: string;
    tierName?: string;
}
export interface TeamRegistrationInfo {
    secretKey?: model.SecretKey;
    domain: string;
    email: string;
    password: string;
    language: string;
    name: string;
    newsletterPrefs?: number;
    avatar?: string;
    accountType: string;
    accountName: string;
    accountAvatar?: string;
    signupUuid: string;
}
export interface SignupResponse {
    uuid: string;
    domain: string;
    plan: api.billing.Plan;
    tierName: string;
    trialEndsAt?: Date;
    taxAdvice?: TaxAdvice;
    features?: api.SignupFeatures;
    promoCode?: string;
    duplicateAccounts: api.AccountInfo[];
}
export declare const getRegisterURL: (c: Context, token: string, email: string, search: URLSearchParams) => Promise<string>;
export declare const signUpAndGetInfo: (c: Context, code: string, email: string, accountType: string) => Promise<SignupResponse>;
export declare const legacySignUpAccount: (c: Context, signupInfo: LegacyAccountSignupInfo) => Promise<void>;
export declare const signUpAccount: (c: Context, signupInfo: AccountSignupInfo) => Promise<{
    domain: string;
    emailResendToken?: string | undefined;
}>;
export declare const getSignupDetails: (c: Context, uuid: string) => Promise<model.Signup>;
export declare const updateServerSignup: (c: Context, uuid: string, signup: Partial<api.PostSignup>) => Promise<api.Signup>;
export declare const registerAccount: (c: Context, reg: TeamRegistrationInfo) => Promise<api.AccountRegistrationResponse>;
export declare const beginAccountRegistration: (c: Context, reg: TeamRegistrationInfo) => Promise<void>;
export declare const completeAccountRegistration: (c: Context) => Promise<api.AccountRegistrationResponse>;
export declare const beginUserSignup: (c: Context, signup: UserSignupInfo) => Promise<void>;
export declare const completeUserSignup: (c: Context) => Promise<api.UserRegistrationResponse | void>;
export declare const resendVerificationEmail: (context: Context, emailResendToken: string) => Promise<any>;
