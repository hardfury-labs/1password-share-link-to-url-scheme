import { JweB, JwkRsaPriKey, JwkRsaPubKey } from "../util/crypto";
import { EncryptionKeyPairPlaintext } from "./encryption_key_pair";
export declare const JWK_ALG_RSA_OAEP_256 = "RSA-OAEP-256";
export declare const WC_KEY_GEN_RSA_OAEP_256: RsaHashedKeyGenParams;
export declare const JWK_ALG_RSA_OAEP = "RSA-OAEP";
export declare const WC_KEY_GEN_RSA_OAEP: RsaHashedKeyGenParams;
export declare const DEFAULT_PARAMS: RsaHashedKeyGenParams;
export declare type KeyPair = EncryptionKeyPairPlaintext;
export declare const generateKeyPair: (uuid?: string | undefined) => Promise<KeyPair>;
export declare const decryptJweB: (jwk: JwkRsaPriKey, encrypted: JweB) => Promise<Uint8Array>;
export declare const encryptJweB: (jwk: JwkRsaPubKey, data: Uint8Array) => Promise<JweB>;
export declare const encrypt: (recipientPubKey: JwkRsaPubKey, data: Uint8Array) => Promise<Uint8Array>;
export declare const decrypt: (recipientPriKey: JwkRsaPriKey, data: Uint8Array) => Promise<Uint8Array>;
/** Lowest level wrapper around WebCrypto */
export declare const _importPriKey: (key: JwkRsaPriKey) => Promise<CryptoKey>;
/** Lowest level wrapper around WebCrypto */
export declare const _importPubKey: (key: JwkRsaPubKey) => Promise<CryptoKey>;
/** Lowest level wrapper around WebCrypto */
export declare const _decrypt: (key: CryptoKey, ciphertext: Uint8Array) => Promise<Uint8Array>;
/** Lowest level wrapper around WebCrypto */
export declare const _encrypt: (key: CryptoKey, bytes: Uint8Array) => Promise<Uint8Array>;
export declare const getFingerprint: (jwk: JwkRsaPubKey, formatVersion?: number) => Promise<Uint8Array>;
