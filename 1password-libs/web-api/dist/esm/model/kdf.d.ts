export declare const PBES2_ALG_256 = "PBES2-HS256";
export declare const PBES2_ALG_512 = "PBES2-HS512";
export declare const PBES2_ALG_256_G = "PBES2g-HS256";
export declare const PBES2_ALG_512_G = "PBES2g-HS512";
export declare const DEFAULT_ALG = "PBES2g-HS256";
export declare const DEFAULT_ITERATIONS = 100000;
/**
 * Uses native crypto implementation of PBKDF2. If it fails, we should fall back to SJCL.
 */
export declare const nativePBES2: (password: string, salt: Uint8Array, iterations: number, hashName: string, lengthInBits: number) => Promise<Uint8Array>;
export declare const PBES2: (alg: string, password: string, salt: Uint8Array, iterations: number) => Promise<Uint8Array>;
/**
 * hkdf - The HMAC-based Key Derivation Function
 * based on http://mozilla.github.io/fxa-js-client/files/client_lib_hkdf.js.html
 *
 * @class hkdf
 * @param hashName Hash function ("SHA256" or "SHA512")
 * @param ikm Initial keying material
 * @param info Key derivation data
 * @param salt Salt
 * @param length Length of the derived key in bytes
 * @returns key data
 */
export declare const HKDF: (hashName: "sha256" | "sha512", ikm: Uint8Array, info: Uint8Array, salt: Uint8Array, length: number) => Uint8Array;
