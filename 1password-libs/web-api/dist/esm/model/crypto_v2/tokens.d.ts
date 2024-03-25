import * as t from "io-ts";
import * as util from "../../util";
export declare const JwtStandardClaims: t.ReadonlyC<t.PartialC<{
    iss: t.StringC;
    sub: t.StringC;
    aud: t.ReadonlyArrayC<t.StringC>;
    exp: t.Type<Date, number, unknown>;
    nbf: t.Type<Date, number, unknown>;
    iat: t.Type<Date, number, unknown>;
    jti: t.StringC;
}>>;
export declare type JwtStandardClaims = t.OutputOf<typeof JwtStandardClaims>;
/**
 * Given an ECDSA private key and a byte array, produce a JWT object
 */
export declare const createToken: <X extends Readonly<{
    iss?: string | undefined;
    sub?: string | undefined;
    aud?: readonly string[] | undefined;
    exp?: Date | undefined;
    nbf?: Date | undefined;
    iat?: Date | undefined;
    jti?: string | undefined;
}>, Y extends Readonly<{
    iss?: string | undefined;
    sub?: string | undefined;
    aud?: readonly string[] | undefined;
    exp?: number | undefined;
    nbf?: number | undefined;
    iat?: number | undefined;
    jti?: string | undefined;
}>>(senderPriKey: util.crypto.JwkEcPriKeyDeprecated, claims: X, codec: t.Type<X, Y, unknown>) => Promise<string>;
interface VerificationResult<X> {
    readonly isValid: boolean;
    readonly header: util.crypto.JwtHeader;
    readonly claims: X;
}
/**
 * Given an ECDSA public key and a JWT,
 * decode the header, verify the signature, and decode the claims.
 * Only used in tests right now.
 */
export declare const verifyToken: <X extends Readonly<{
    iss?: string | undefined;
    sub?: string | undefined;
    aud?: readonly string[] | undefined;
    exp?: Date | undefined;
    nbf?: Date | undefined;
    iat?: Date | undefined;
    jti?: string | undefined;
}>, Y extends Readonly<{
    iss?: string | undefined;
    sub?: string | undefined;
    aud?: readonly string[] | undefined;
    exp?: number | undefined;
    nbf?: number | undefined;
    iat?: number | undefined;
    jti?: string | undefined;
}>>(senderPubKey: util.crypto.JwkEcPubKey, jwt: string, codec: t.Type<X, Y, unknown>) => Promise<VerificationResult<X>>;
export {};
