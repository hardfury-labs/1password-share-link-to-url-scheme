import * as sjcl from "sjcl";
import * as util from "../util";
import { JWK_ALG_A256GCM } from "./symmetric_key_constants";
interface SymKeyNative {
    readonly type: "native";
    readonly jwk: util.crypto.JwkSymKey;
    readonly imported: CryptoKey;
}
/**
 * Generate a new AES-GCM-256 CryptoKey.
 * Lowest level wrapper around WebCrypto.
 */
export declare const _generateNative: (enc: typeof JWK_ALG_A256GCM, initUuid?: string | undefined) => Promise<SymKeyNative>;
interface SymKeySjcl {
    readonly type: "sjcl";
    readonly jwk: util.crypto.JwkSymKey;
    readonly imported: sjcl.SjclCipher;
}
/**
 * Generate a new AES-GCM-256 SJCL key.
 * Lowest level wrapper around SJCL.
 */
export declare const _generateSjcl: (enc: typeof JWK_ALG_A256GCM, initUuid?: string | undefined) => Promise<SymKeySjcl>;
interface CiphertextAndTag {
    readonly ciphertext: Uint8Array;
    readonly tag: Uint8Array;
}
/**
 * Separate the ciphertext and tag
 */
export declare const extractTag: (bytes: Uint8Array) => CiphertextAndTag;
export interface AesContentEncryptionParams {
    readonly enc: typeof JWK_ALG_A256GCM;
    readonly plaintext: Uint8Array;
    readonly additionalData: Uint8Array;
}
interface AesContentEncryptionResult extends AesEncryptionResult {
    readonly cek: Uint8Array;
}
/** Encrypt JWE content with a new key */
export declare const encryptContent: ({ enc, plaintext, additionalData, }: AesContentEncryptionParams) => Promise<AesContentEncryptionResult>;
interface AesEncryptionResult extends CiphertextAndTag {
    readonly iv: Uint8Array;
}
interface AesEncryptionNativeParams {
    readonly key: CryptoKey;
    readonly plaintext: Uint8Array;
    readonly additionalData?: Uint8Array;
}
/**
 * Encrypt plaintext with a native CryptoKey.
 * Lowest level wrapper around WebCrypto.
 */
export declare const _encryptNative: ({ key, plaintext, additionalData, }: AesEncryptionNativeParams) => Promise<AesEncryptionResult>;
interface AesEncryptionSjclParams {
    readonly cipher: sjcl.SjclCipher;
    readonly plaintext: Uint8Array;
    readonly additionalData?: Uint8Array;
}
/**
 * Encrypt plaintext with an SJCL cipher.
 * Lowest level wrapper around SJCL.
 */
export declare const _encryptSjcl: ({ cipher, plaintext, additionalData, }: AesEncryptionSjclParams) => Promise<AesEncryptionResult>;
interface AesDecryptionInput {
    readonly iv: Uint8Array;
    readonly ciphertext: Uint8Array;
    readonly additionalData?: Uint8Array;
    readonly tag: Uint8Array;
}
interface AesContentDecryptionParams extends AesDecryptionInput {
    readonly enc: string;
    readonly cek: Uint8Array;
}
/** Decrypt data with a raw key */
export declare const decryptContent: ({ enc, cek, iv, ciphertext, additionalData, tag, }: AesContentDecryptionParams) => Promise<Uint8Array>;
interface AesDecryptionNativeParams extends AesDecryptionInput {
    readonly key: CryptoKey;
}
/**
 * Decrypt ciphertext with a native CryptoKey.
 * Lowest level wrapper around WebCrypto
 */
export declare const _decryptNative: ({ key, ciphertext, tag, additionalData, iv, }: AesDecryptionNativeParams) => Promise<Uint8Array>;
interface AesDecryptionSjclParams extends AesDecryptionInput {
    readonly cipher: sjcl.SjclCipher;
}
/**
 * Decrypt ciphertext with an SJCL cipher.
 * Lowest level wrapper around SJCL
 */
export declare const _decryptSjcl: ({ cipher, ciphertext, tag, additionalData, iv, }: AesDecryptionSjclParams) => Promise<Uint8Array>;
/**
 * Import a JWK key as a native CryptoKey.
 * Lowest level wrapper around WebCrypto.
 */
export declare const _importJwkNative: (jwk: util.crypto.JwkSymKey) => Promise<CryptoKey>;
/**
 * Import a JWK key as an SJCL cipher.
 * Lowest level wrapper around SJCL.
 */
export declare const _importJwkSjcl: (jwk: util.crypto.JwkSymKey) => Promise<sjcl.SjclCipher>;
export interface RawKeyParams {
    readonly uuid: string;
    readonly enc: string;
    readonly rawKey: Uint8Array;
}
/**
 * Import a byte array as a native AES-GCM CryptoKey.
 * Lowest level wrapper around WebCrypto.
 */
export declare const _importRawKeyNative: ({ uuid, enc, rawKey, }: RawKeyParams) => Promise<SymKeyNative>;
/**
 * Import a byte array as an AES-GCM SJCL key.
 * Lowest level wrapper around SJCL.
 */
export declare const _importRawKeySjcl: ({ uuid, enc, rawKey, }: RawKeyParams) => Promise<SymKeySjcl>;
export {};
