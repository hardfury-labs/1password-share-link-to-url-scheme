import * as sjcl from "sjcl";
import * as util from "../util";
export declare const JWK_ALG_ES256 = "ES256";
export declare const JWK_CRV_ES256 = "P-256";
export declare const WC_IMPORT_ALG_ES256: {
    name: string;
    namedCurve: string;
};
export declare const WC_SIGN_ALG_ES256: {
    name: string;
    hash: {
        name: string;
    };
};
export declare const DEFAULT_KEY_ALG: {
    name: string;
    namedCurve: string;
};
export declare const DEFAULT_SIGN_ALG: {
    name: string;
    hash: {
        name: string;
    };
};
export interface JwkPair {
    readonly priKey: util.crypto.JwkEcPriKey;
    readonly pubKey: util.crypto.JwkEcPubKey;
}
export interface KeyPair {
    readonly uuid: string;
    readonly priKey: PriKey;
    readonly pubKey: PubKey;
}
export declare type PriKey = PriKeyNative | PriKeySjcl;
interface PriKeyNative {
    readonly type: "native";
    readonly jwk: util.crypto.JwkEcPriKey;
    readonly imported: CryptoKey;
}
interface PriKeySjcl {
    readonly type: "sjcl";
    readonly jwk: util.crypto.JwkEcPriKey;
    readonly imported: sjcl.SjclEcdsaSecretKey;
}
export declare type PubKey = PubKeyNative | PubKeySjcl;
export interface PubKeyNative {
    readonly type: "native";
    readonly jwk: util.crypto.JwkEcPubKey;
    readonly imported: CryptoKey;
}
export interface PubKeySjcl {
    readonly type: "sjcl";
    readonly jwk: util.crypto.JwkEcPubKey;
    readonly imported: sjcl.SjclEcdsaPublicKey;
}
export declare const generateJwkPair: (uuid?: string | undefined) => Promise<JwkPair>;
export declare const generateKeyPair: (uuid?: string | undefined) => Promise<KeyPair>;
export declare const importPriKey: (key: util.crypto.JwkEcPriKey | PriKey) => Promise<PriKey>;
export declare const importPubKey: (key: util.crypto.JwkEcPubKey | PubKey) => Promise<PubKey>;
interface SignParams {
    readonly alg: string;
    readonly key: PriKey;
    readonly signingInput: Uint8Array;
}
export declare const sign: ({ alg, key, signingInput, }: SignParams) => Promise<Uint8Array>;
interface VerifyParams {
    readonly alg: string;
    readonly key: PubKey;
    readonly signingInput: Uint8Array;
    readonly signature: Uint8Array;
}
export declare const verify: ({ alg, key, signingInput, signature, }: VerifyParams) => Promise<boolean>;
export declare const _importPriKeyNative: (jwk: util.crypto.JwkEcPriKey) => Promise<PriKeyNative>;
export declare const _importPubKeyNative: (jwk: util.crypto.JwkEcPubKey) => Promise<PubKeyNative>;
interface SignNativeParams {
    readonly alg: string;
    readonly key: CryptoKey;
    readonly signingInput: Uint8Array;
}
export declare const _signNative: ({ alg, key, signingInput, }: SignNativeParams) => Promise<Uint8Array>;
interface VerifyNativeParams extends SignNativeParams {
    readonly signature: Uint8Array;
}
export declare const _verifyNative: ({ alg, key, signingInput, signature, }: VerifyNativeParams) => Promise<boolean>;
export declare const _importPriKeySjcl: (jwk: util.crypto.JwkEcPriKey) => Promise<PriKeySjcl>;
export declare const _importPubKeySjcl: (jwk: util.crypto.JwkEcPubKey) => Promise<PubKeySjcl>;
interface SignSjclParams {
    readonly alg: string;
    readonly key: sjcl.SjclEcdsaSecretKey;
    readonly signingInput: Uint8Array;
}
export declare const _signSjcl: ({ alg, key, signingInput, }: SignSjclParams) => Promise<Uint8Array>;
interface VerifySjclParams {
    readonly alg: string;
    readonly key: sjcl.SjclEcdsaPublicKey;
    readonly signingInput: Uint8Array;
    readonly signature: Uint8Array;
}
export declare const _verifySjcl: ({ alg, key, signingInput, signature, }: VerifySjclParams) => Promise<boolean>;
export declare const getFingerprint: (jwk: util.crypto.JwkEcPubKey, formatVersion?: number) => Promise<Uint8Array>;
export {};
