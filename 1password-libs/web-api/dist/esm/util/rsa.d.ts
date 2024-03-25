import { JwkRsaPriKey } from "./crypto";
/** Return true if p is less than q in the given private key */
export declare const primesAreReversed: (key: JwkRsaPriKey) => boolean;
/** Swap p and q in a private RSA key if p < q */
export declare const swapPrimesIfNeeded: (key: JwkRsaPriKey) => JwkRsaPriKey;
/** Swap p and q in a private RSA key */
export declare const swapPrimes: (key: JwkRsaPriKey) => JwkRsaPriKey;
