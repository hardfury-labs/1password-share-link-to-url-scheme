export declare const JWK_ALG_A256GCM = "A256GCM";
/**
 * Determines if an algorithm is valid for symmetric key encryption
 */
export declare const isSymKeyAlg: (enc: string) => boolean;
export declare const KID_MASTER_PASSWORD = "mp";
export declare const WC_ALG_A256GCM: AesKeyAlgorithm;
/**
 * Given a JWK algorithm, yields the corresponding native WebCrypto algorithm
 */
export declare const getNativeKeyAlg: (enc: string) => AesKeyGenParams;
