import * as t from "io-ts";
import { Device } from "../shared";
import * as util from "../util";
import { Auth } from "./auth";
import * as billing from "./billing";
import { Session } from "./session";
export interface PostSignup {
    domain: string;
    name: string;
    type: string;
    email: string;
    language: string;
    promoCode?: string;
    purchaseOrderToken?: string;
    stripePurchaseOrderToken?: string;
    referrer?: string;
    source: string;
    stepUuid?: string;
    tierName?: string;
    companySize?: string;
}
export declare type PostExistingSignup = PostSignup & {
    uuid: string;
    domain?: string;
    language?: string;
    promoCode?: string;
    referrer?: string;
    source?: string;
    stepUuid?: string;
    tierName?: string;
};
export interface PostUserSignup {
    invite: {
        uuid: string;
        token: string;
    };
    user: UserRegistration;
    device: Device.Type;
    keyset: util.crypto.KeysetCiphertext;
    userAuth: Auth;
}
export declare const SignupFeatureCreditCardForm: t.ReadonlyC<t.TypeC<{
    isEnabled: t.BooleanC;
    isRequired: t.BooleanC;
}>>;
export declare type SignupFeatureCreditCardForm = t.TypeOf<typeof SignupFeatureCreditCardForm>;
export declare const SignupFeatures: t.ReadonlyC<t.TypeC<{
    creditCardForm: t.ReadonlyC<t.TypeC<{
        isEnabled: t.BooleanC;
        isRequired: t.BooleanC;
    }>>;
}>>;
export declare type SignupFeatures = t.TypeOf<typeof SignupFeatures>;
export declare const AccountInfo: t.ReadonlyC<t.TypeC<{
    accountUuid: t.StringC;
    accountName: t.StringC;
    domain: t.StringC;
    avatar: t.StringC;
    type: t.StringC;
    userAvatar: t.StringC;
    accountKeyFormat: t.StringC;
    accountKeyUuid: t.StringC;
    lastAuthAt: t.StringC;
    createdAt: t.StringC;
}>>;
export declare type AccountInfo = t.TypeOf<typeof AccountInfo>;
export declare const Signup: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
    uuid: t.StringC;
    domain: t.StringC;
    state: t.StringC;
    createdAt: t.StringC;
    completedAt: t.StringC;
    expiresAt: t.StringC;
    name: t.StringC;
    type: t.StringC;
    source: t.StringC;
    email: t.StringC;
    language: t.StringC;
    availablePlans: t.ArrayC<t.ReadonlyC<t.TypeC<{
        frequency: t.Type<billing.Frequency, billing.Frequency, unknown>;
        sortOrder: t.NumberC;
        currency: t.StringC;
        display: t.ReadonlyC<t.TypeC<{
            amount: t.NumberC;
            isPerUser: t.BooleanC;
        }>>;
    }>>>;
    tierName: t.StringC;
    trialEndsAt: t.StringC;
    features: t.ReadonlyC<t.TypeC<{
        creditCardForm: t.ReadonlyC<t.TypeC<{
            isEnabled: t.BooleanC;
            isRequired: t.BooleanC;
        }>>;
    }>>;
}>, t.PartialC<{
    stepUuid: t.StringC;
    promoCode: t.StringC;
    flowServiceUuid: t.StringC;
    defaultBillingFrequency: t.Type<billing.Frequency, billing.Frequency, unknown>;
    duplicateAccounts: t.ArrayC<t.ReadonlyC<t.TypeC<{
        accountUuid: t.StringC;
        accountName: t.StringC;
        domain: t.StringC;
        avatar: t.StringC;
        type: t.StringC;
        userAvatar: t.StringC;
        accountKeyFormat: t.StringC;
        accountKeyUuid: t.StringC;
        lastAuthAt: t.StringC;
        createdAt: t.StringC;
    }>>>;
}>]>>;
export declare type Signup = t.TypeOf<typeof Signup>;
export interface RegistrationRequest {
    signupUuid: string;
    user: UserRegistration;
    account: AccountRegistration;
    device: Device.Type;
    keyset: util.crypto.KeysetCiphertext;
    userAuth: Auth;
}
export interface UserRegistration {
    accountKeyFormat: string;
    accountKeyUuid: string;
    avatar?: string;
    email: string;
    language: string;
    name: string;
    newsletterPrefs: number;
    externalGUID?: string;
}
export interface ServiceAccountUserRegistration extends UserRegistration {
    uuid?: string;
}
export interface AccountRegistration {
    type: string;
    domain: string;
    name: string;
    avatar?: string;
}
declare const AccountSignUp: t.ReadonlyC<t.TypeC<{
    emailResendToken: t.StringC;
}>>;
export declare type AccountSignUp = t.TypeOf<typeof AccountSignUp>;
export declare const legacySignUpAccount: (s: Session, signupInfo: PostSignup) => Promise<void>;
export declare const signUpAccount: (s: Session, signupInfo: PostSignup) => Promise<AccountSignUp>;
export interface UserRegistrationResponse {
    readonly userUuid: string;
}
export declare const signUpUser: (s: Session, signupInfo: PostUserSignup) => Promise<UserRegistrationResponse>;
export declare const getSignupDetails: (s: Session, uuid: string) => Promise<Signup>;
export declare const updateSignupAccountType: (s: Session, uuid: string, signup: Partial<PostExistingSignup>) => Promise<Signup>;
export declare const signUpAndGetInfo: (s: Session, code: string, email: string, accountType: string) => Promise<Signup>;
export interface AccountRegistrationResponse {
    readonly accountUuid: string;
    readonly userUuid: string;
}
export declare const postAccount: (s: Session, data: RegistrationRequest) => Promise<AccountRegistrationResponse>;
export declare const resendVerificationEmail: (s: Session, emailResendToken: string) => Promise<any>;
export {};
