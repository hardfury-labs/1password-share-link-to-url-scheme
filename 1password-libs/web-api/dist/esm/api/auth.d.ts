import * as t from "io-ts";
import { Device } from "../shared";
import * as util from "../util";
import { MFAParams, MFAType } from "./mfa";
import { Session } from "./session";
export interface Auth {
    method: string;
    alg: string;
    iterations: number;
    salt: string;
    v: string;
}
export declare const AuthParams: t.TypeC<{
    method: t.StringC;
    alg: t.StringC;
    iterations: t.NumberC;
    salt: t.StringC;
}>;
export declare type AuthParams = t.TypeOf<typeof AuthParams>;
export declare const StartAuthResponse: t.IntersectionC<[t.TypeC<{
    status: t.StringC;
}>, t.PartialC<{
    sessionID: t.StringC;
    accountKeyFormat: t.StringC;
    accountKeyUuid: t.StringC;
    userAuth: t.TypeC<{
        method: t.StringC;
        alg: t.StringC;
        iterations: t.NumberC;
        salt: t.StringC;
    }>;
    newDomain: t.StringC;
    newHost: t.StringC;
    newEmail: t.StringC;
}>]>;
export declare type StartAuthResponse = t.TypeOf<typeof StartAuthResponse>;
export declare const startAuth: (s: Session, data: StartAuthRequest) => Promise<StartAuthResponse>;
export declare const SRPResponse: t.TypeC<{
    sessionID: t.StringC;
    userB: t.StringC;
}>;
export declare type SRPResponse = t.TypeOf<typeof SRPResponse>;
export declare const postAuth: (s: Session, sessionID: string, userA: string) => Promise<SRPResponse>;
export interface StartAuthRequest {
    email: string;
    skFormat: string;
    skid: string;
    deviceUuid: string;
    userUuid?: string;
}
export interface VerifyAuthRequest {
    sessionID: string;
    clientVerifyHash: string;
    client: string;
    device?: Device.Type;
}
export declare const DSecretResponse: t.TypeC<{
    enabled: t.BooleanC;
}>;
export declare type DSecretResponse = t.TypeOf<typeof DSecretResponse>;
export declare const DSecretProxyResponse: t.TypeC<{
    enabled: t.BooleanC;
}>;
export declare type DSecretProxyResponse = t.TypeOf<typeof DSecretResponse>;
export declare const TOTPResponse: t.TypeC<{
    enabled: t.BooleanC;
    digits: t.NumberC;
}>;
export declare type TOTPResponse = t.TypeOf<typeof TOTPResponse>;
export declare const DuoResponse: t.IntersectionC<[t.TypeC<{
    enabled: t.BooleanC;
    host: t.StringC;
    sigRequest: t.StringC;
}>, t.PartialC<{
    authURL: t.StringC;
}>]>;
export declare type DuoResponse = t.TypeOf<typeof DuoResponse>;
export declare const WebAuthnResponse: t.TypeC<{
    enabled: t.BooleanC;
    keyHandles: t.ArrayC<t.StringC>;
    challenge: t.StringC;
}>;
export declare type WebAuthnResponse = t.TypeOf<typeof WebAuthnResponse>;
export declare const MustEnableResponse: t.IntersectionC<[t.TypeC<{
    enabled: t.BooleanC;
    availableTypes: t.Type<MFAType[], MFAType[], unknown>;
}>, t.PartialC<{
    webAuthnChallenge: t.StringC;
}>]>;
export declare type MustEnableResponse = t.TypeOf<typeof MustEnableResponse>;
export declare const CodeResponse: t.ReadonlyC<t.TypeC<{
    enabled: t.BooleanC;
    digits: t.Type<number, number, unknown>;
    methods: t.ArrayC<t.StringC>;
}>>;
export declare type CodeResponse = t.TypeOf<typeof CodeResponse>;
export declare const MFAResponse: t.PartialC<{
    dsecret: t.TypeC<{
        enabled: t.BooleanC;
    }>;
    dsecretProxy: t.TypeC<{
        enabled: t.BooleanC;
    }>;
    totp: t.TypeC<{
        enabled: t.BooleanC;
        digits: t.NumberC;
    }>;
    duo: t.IntersectionC<[t.TypeC<{
        enabled: t.BooleanC;
        host: t.StringC;
        sigRequest: t.StringC;
    }>, t.PartialC<{
        authURL: t.StringC;
    }>]>;
    webAuthn: t.TypeC<{
        enabled: t.BooleanC;
        keyHandles: t.ArrayC<t.StringC>;
        challenge: t.StringC;
    }>;
    mustEnable: t.IntersectionC<[t.TypeC<{
        enabled: t.BooleanC;
        availableTypes: t.Type<MFAType[], MFAType[], unknown>;
    }>, t.PartialC<{
        webAuthnChallenge: t.StringC;
    }>]>;
    code: t.ReadonlyC<t.TypeC<{
        enabled: t.BooleanC;
        digits: t.Type<number, number, unknown>;
        methods: t.ArrayC<t.StringC>;
    }>>;
}>;
export declare type MFAResponse = t.TypeOf<typeof MFAResponse>;
export declare const VerifyAuthResponse: t.IntersectionC<[t.TypeC<{
    notifier: t.StringC;
}>, t.PartialC<{
    accountUuid: t.StringC;
    userUuid: t.StringC;
    serverVerifyHash: t.StringC;
    mfa: t.PartialC<{
        dsecret: t.TypeC<{
            enabled: t.BooleanC;
        }>;
        dsecretProxy: t.TypeC<{
            enabled: t.BooleanC;
        }>;
        totp: t.TypeC<{
            enabled: t.BooleanC;
            digits: t.NumberC;
        }>;
        duo: t.IntersectionC<[t.TypeC<{
            enabled: t.BooleanC;
            host: t.StringC;
            sigRequest: t.StringC;
        }>, t.PartialC<{
            authURL: t.StringC;
        }>]>;
        webAuthn: t.TypeC<{
            enabled: t.BooleanC;
            keyHandles: t.ArrayC<t.StringC>;
            challenge: t.StringC;
        }>;
        mustEnable: t.IntersectionC<[t.TypeC<{
            enabled: t.BooleanC;
            availableTypes: t.Type<MFAType[], MFAType[], unknown>;
        }>, t.PartialC<{
            webAuthnChallenge: t.StringC;
        }>]>;
        code: t.ReadonlyC<t.TypeC<{
            enabled: t.BooleanC;
            digits: t.Type<number, number, unknown>;
            methods: t.ArrayC<t.StringC>;
        }>>;
    }>;
}>]>;
export declare type VerifyAuthResponse = t.TypeOf<typeof VerifyAuthResponse>;
export declare const verifyAuth: (s: Session, data: VerifyAuthRequest) => Promise<VerifyAuthResponse>;
export interface VerifyMFARequest {
    dsecret?: DSecretRequest;
    dsecretProxy?: DSecretProxyRequest;
    totp?: TOTPRequest;
    code?: CodeRequest;
    duo?: DuoRequest;
    duov4?: DuoV4Request;
    webAuthn?: WebAuthnRequest;
    sessionID: string;
    client: string;
}
export interface DSecretRequest {
    dshmac: string;
}
export interface DSecretProxyRequest {
    deviceUuid: string;
    dshmac: string;
}
export interface TOTPRequest {
    code: string;
}
export interface CodeRequest {
    readonly code: string;
}
export interface WebAuthnRequest {
    keyHandle: string;
    signature: string;
    authData: string;
    clientData: string;
}
export interface DuoRequest {
    sigResponse: string;
}
export interface DuoV4Request {
    code: string;
}
export declare const VerifyMFAResponse: t.PartialC<{
    dsecret: t.StringC;
}>;
export declare type VerifyMFAResponse = t.TypeOf<typeof VerifyMFAResponse>;
export interface SendMFACodeResponse {
    readonly length: number;
    readonly method: string;
}
export interface EnableMFAWithAuthRequest {
    mfa: MFAParams;
    sessionID: string;
    client: string;
}
export declare const verifyMFA: (s: Session, data: VerifyMFARequest) => Promise<VerifyMFAResponse>;
export declare const enableMFAWithAuth: (s: Session, data: EnableMFAWithAuthRequest) => Promise<VerifyMFAResponse>;
export interface ChangeUserAuthRequest {
    email: string;
    auth: Auth;
    activeKeyset: util.crypto.KeysetCiphertext;
    archivedKeyset?: util.crypto.KeysetCiphertext;
    accountKeyFormat?: string;
    accountKeyUuid?: string;
}
export declare const submitNewUserAuth: (s: Session, data: ChangeUserAuthRequest) => Promise<void>;
/** Ping the server to keep the session alive */
export declare const extendSession: (s: Session) => Promise<void>;
/** End the server's session */
export declare const signOut: (s: Session) => Promise<void>;
