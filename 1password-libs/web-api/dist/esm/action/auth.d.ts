import * as api from "../api";
import { MFAResponse, DSecretResponse, DSecretProxyResponse, TOTPResponse, WebAuthnResponse, MustEnableResponse, CodeResponse, WebAuthnRequest, DuoResponse } from "../api/auth";
import * as model from "../model";
import * as util from "../util";
import { SetupAccountTranslators } from "./account";
import { Context } from "./context";
import { AuthDomainChanged, AuthEmailChanged, AuthMfaRequired, AuthVerifiedSession, DuoProof, DuoV4Proof, EmailProof, TOTPProof } from "./session";
export { AuthDomainChanged, AuthEmailChanged, AuthMfaRequired, AuthVerifiedSession, MFAResponse, DuoResponse, DSecretResponse, DSecretProxyResponse, TOTPResponse, WebAuthnResponse, CodeResponse, MustEnableResponse, WebAuthnRequest, };
export interface SignInSucceededEvent {
    accountKey: string;
    accountUuid: string;
    domain: string;
    email: string;
    masterPassword: string;
    userUuid: string;
    dSecret?: string;
    authOnly?: boolean;
    deviceIsPublic?: "true" | "false";
}
/** Used only in tests */
export declare const getOpxSupportsSignInEvent: () => boolean;
/** Tell API to fire the sign-in event. */
export declare const setOpxSupportsSignInEvent: (truth: boolean) => void;
export declare type ProvisionManagerCredentials = MpCredentials | model.LocalAuthCredentials;
export interface MpCredentials {
    email: string;
    password: string;
    secretKey: model.SecretKey;
    uuid?: string;
}
export interface MukSrpXCredentials {
    readonly email: string;
    readonly muk: util.crypto.JwkSymKey;
    readonly secretKey: string;
    /** Hex string */
    readonly srpX: string;
}
export interface SignInOptions {
    shouldLoadUniverse?: boolean;
    authOnly?: boolean;
    allowReauthorization?: boolean;
    suppressClientNotifications?: boolean;
    translators?: SetupAccountTranslators;
    isDesignatedAsPublic: boolean;
}
export interface AuthVerifiedContext {
    type: "verified_context";
    context: Context;
}
export declare const signIn: (c: Context, credentials: MpCredentials | MukSrpXCredentials, options: SignInOptions) => Promise<AuthMfaRequired | AuthDomainChanged | AuthVerifiedContext>;
export declare const signInWithEmailAndPasswordGetUniverse: (c: Context, credentials: MpCredentials, options: SignInOptions) => Promise<AuthMfaRequired | AuthDomainChanged | AuthVerifiedContext>;
export declare const completeMFASignInWithTOTP: (c: Context, code: string, type: EmailProof["type"] | TOTPProof["type"], options: SignInOptions) => Promise<void>;
export declare const completeMFASignInWithDSecretProxy: (c: Context, dshmac: string, deviceUuid: string, options: SignInOptions) => Promise<void>;
export declare const completeMFASignInWithWebAuthn: (c: Context, webAuthnData: api.WebAuthnRequest, options: SignInOptions) => Promise<void>;
export declare const completeMFASignInWithDSecret: (c: Context, dSecret: string, options: SignInOptions) => Promise<void>;
export declare const completeMFASignInWithDuo: (c: Context, proof: DuoProof | DuoV4Proof, options: SignInOptions) => Promise<void>;
export declare const completeMFASignInWithEnable: (c: Context, mfa: api.MFAParams, options: SignInOptions) => Promise<void>;
export declare const signOut: (c: Context) => Promise<void>;
export interface ContextInitialization {
    accountKey: string;
    email: string;
    masterKey: util.crypto.JwkSymKey;
    requestID: number;
    serverConfig: api.VerifyAuthResponse;
    sessionKey: util.crypto.JwkSymKey;
}
/**
 * Initialize app with an existing session, bypassing normal sign-in.
 * This allows a native client to host the app in a web view and use the
 * client's session instead of requiring the user to sign in again.
 */
export declare const initialize: (c: Context, version: number, details: ContextInitialization) => Promise<Context>;
export declare const getInitializationExportFromNewContext: (existingContext: Context) => Promise<ContextInitialization>;
export declare const createNewContext: (existingContext: Context) => Promise<Context>;
export declare const getMukSrpXCredentials: (c: Context) => MukSrpXCredentials | undefined;
interface OldAuthInfo {
    readonly oldSecretKey: model.SecretKey;
    readonly oldMasterKey?: model.SymmetricKey;
    readonly oldActiveKeyset?: model.Keyset;
    readonly oldUserAuth?: model.Auth;
}
interface CredentialsUpdate {
    readonly currentPassword: string;
    readonly newPassword: string;
    readonly generateNewSecretKey?: boolean;
    readonly generateNewKeyset?: boolean;
}
export declare const updateLocalCredentials: (c: Context, { currentPassword, newPassword, generateNewSecretKey, generateNewKeyset, }: CredentialsUpdate) => Promise<[model.KeysetCiphertext, OldAuthInfo]>;
export declare const changeMasterPassword: (c: Context, credentials: CredentialsUpdate) => Promise<void>;
export declare const postUpdatedCredentials: (c: Context, encryptedActiveKeyset: model.KeysetCiphertext, oldAuthInfo: OldAuthInfo) => Promise<void>;
export declare const verifyMasterPassword: (c: Context, password: string) => Promise<void>;
export declare const beginChangeEmail: (c: Context, email: string) => Promise<void>;
export declare const promptConfirmChangeEmail: (c: Context) => Promise<void>;
export declare const completeChangeEmail: (c: Context, email: string, password: string, token: string) => Promise<void>;
export declare const deleteDevice: (c: Context, device: {
    uuid: string;
}, userUUID?: string | undefined) => Promise<void>;
/**
 * Deletes devices that have last authed more than 60 days ago
 */
export declare const deleteInactiveDevices: (c: Context) => Promise<void>;
export declare const clearDeviceDSecret: (c: Context, device: {
    uuid: string;
}) => Promise<void>;
