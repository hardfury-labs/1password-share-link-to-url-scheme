/// <reference types="qwest" />
import * as sjcl from "sjcl";
import * as api from "../api";
import * as model from "../model";
import * as util from "../util";
import { MFAResponse, WebAuthnRequest } from "./auth";
export interface AuthSuccess {
    type: "auth_success";
    sessionID: string;
    secretKey: model.SecretKey;
    authParams: model.AuthParams;
}
export interface AuthEmailChanged {
    type: "email_changed";
    newEmail: string;
}
export interface AuthDomainChanged {
    type: "domain_changed";
    newHost: string;
}
export interface AuthMfaRequired {
    type: "mfa_required";
    details: MFAResponse;
}
export interface AuthVerifiedSession {
    type: "verified_session";
    session: Session;
}
export interface SessionInitialization {
    rawSessionKey: Uint8Array;
    requestID: number;
    serverConfig: api.VerifyAuthResponse;
    sessionID: string;
}
export interface WebAuthProof {
    readonly type: "webAuthn";
    readonly data: WebAuthnRequest;
}
interface DSecretProxyProof {
    readonly type: "dSecretProxy";
    readonly dshmac: string;
    readonly deviceUuid: string;
}
interface DSecretProof {
    readonly type: "dSecret";
    readonly dshmac: string;
}
export interface TOTPProof {
    readonly type: "totp";
    readonly code: string;
}
export interface EmailProof {
    readonly type: "email";
    readonly code: string;
}
export interface DuoProof {
    readonly type: "duo";
    readonly sigResponse: string;
}
export interface DuoV4Proof {
    readonly type: "duov4";
    readonly code: string;
}
declare type MFAProof = WebAuthProof | DSecretProxyProof | DSecretProof | TOTPProof | DuoProof | DuoV4Proof | EmailProof;
export declare class Session {
    private _options;
    private _auth;
    private _isVerified;
    private _host;
    private _lastRequest;
    private _requestId;
    private _serverConfig;
    private _sessionHMAC;
    private _sessionID;
    private _sessionKey;
    private _secretKeyId;
    nc: util.events.EventEmitter;
    constructor(host: string, lang: string);
    get auth(): model.Auth | undefined;
    get requestID(): number;
    /** Currently only used in tests */
    get sessionID(): string;
    /** Currently only used in tests */
    get sessionKey(): model.SymmetricKey | undefined;
    /** Currently only used in tests */
    get serverConfig(): api.VerifyAuthResponse | undefined;
    /**
     * Remove the sessionKey
     * This should only be used in the tests.
     */
    clearSessionKey: () => void;
    /**
     * Ping the server to keep the session alive if the app is unlocked
     * and the session is close to expiration
     */
    refreshSession: () => void;
    /**
     * setSessionID sets the _sessionID property of the object
     */
    private setSessionID;
    /**
     * Set the language for all requests in this session.
     */
    setLanguage: (lang: string) => void;
    /**
     * importSessionKey takes a raw byte array and imports it as the session key,
     * a SymmetricKey, and computes the HMAC function for authenticated requests
     */
    importSessionKey: (rawKey: Uint8Array) => Promise<void>;
    /**
     * calculateClientVerifyHash returns the client verify hash as defined by : base64url of H(H(secretKeyId) || H(sessionID)), where "H" is SHA-256 and "||" is concatenation.
     */
    calculateClientVerifyHash: (secretKeyId: string, sessionID: string) => string;
    clientVerifyHash: () => string;
    /**
     * calculateServerVerifyHash returns the server verify hash as defined by : base64url of H(H(SessionID) || H(clientVerifyHash)), "H" is SHA-256 and "||" is concatenation.
     */
    calculateServerVerifyHash: (clientVerifyHash: string, sessionID: string) => string;
    serverVerifyHash: () => string;
    /**
     * createMACHeaderValueForRequest uses info from the instantiated Session object
     * to create the X-AgileBits-MAC header for a given request.
     * It is in charge of incrementing the request ID, so no two calls to this
     * method should return the same result.
     */
    createMACHeaderValueForRequest: (httpMethod: string, urlString: string) => Promise<[string, number]>;
    /**
     * createSessionHMAC uses the session key to create an HMAC function.
     * This should be computed only once per session.
     */
    static createSessionHMAC: (rawSessionKey: string) => sjcl.SjclHmac;
    /**
     * getMACMessage returns the message that will be encrypted using the
     * session HMAC function to create the URI MAC.
     */
    static getMACMessage: (sessionID: string, httpMethod: string, urlString: string, requestID: number) => string;
    /**
     * createMACHeaderValue returns the X-AgileBits-MAC header value given a message
     */
    static createMACHeaderValue: (message: string, requestID: number, sessionHMAC: sjcl.SjclHmac) => Promise<string>;
    private _request;
    encrypt: (data: any) => Promise<util.crypto.JweB>;
    private _handleQwestResponse;
    private _handleQwestError;
    private _startAuth;
    private _handleStartAuthResponse;
    private _performSrpExchange;
    get isSignedIn(): boolean;
    /**
     * Initialize with an existing session, bypassing normal sign-in.
     * This allows a native client to host the app in a web view and use the
     * client's session instead of requiring the user to sign in again.
     */
    initialize: (details: SessionInitialization) => Promise<void>;
    signin: (user: model.OldUser, allowReauthorization?: boolean | undefined, srpX?: string | undefined) => Promise<AuthMfaRequired | AuthDomainChanged | AuthEmailChanged | AuthVerifiedSession>;
    private verify;
    verifyMFA: (proof: MFAProof) => Promise<api.VerifyMFAResponse>;
    enableMFAWithAuth: (mfa: api.MFAParams) => Promise<api.VerifyMFAResponse>;
    get: (url: string, data?: any, options?: Qwest.Options | undefined) => Promise<any>;
    post: (url: string, data?: any, options?: Qwest.Options | undefined) => Promise<any>;
    postUnencrypted: (url: string, data?: any, options?: Qwest.Options | undefined) => Promise<any>;
    put: (url: string, data?: any, options?: Qwest.Options | undefined) => Promise<any>;
    patch: (url: string, data?: any, options?: Qwest.Options | undefined) => Promise<any>;
    delete: (url: string, data?: any, options?: Qwest.Options | undefined) => Promise<any>;
}
export {};
