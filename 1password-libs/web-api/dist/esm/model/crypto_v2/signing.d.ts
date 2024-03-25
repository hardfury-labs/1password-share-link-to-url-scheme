import * as util from "../../util";
/**
 * Given an ECDSA private key and a byte array, produce a JWS object
 */
export declare const sign: (senderPriKey: util.crypto.JwkEcPriKey, payload: Uint8Array) => Promise<util.crypto.Jws>;
interface VerificationResult {
    readonly isValid: boolean;
    readonly header: util.crypto.JwsHeader;
}
/**
 * Given an ECDSA public key and a JWS object,
 * verify the signature and parse the header.
 */
export declare const verify: (senderPubKey: util.crypto.JwkEcPubKey, jws: util.crypto.Jws) => Promise<VerificationResult>;
export {};
