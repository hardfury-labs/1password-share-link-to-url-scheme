import * as t from "io-ts";
import * as api from "../api";
import * as util from "../util";
import { VaultAccess } from "./vault_access";
export declare const DEFAULT_ISSUER = "com.1password.b5";
export declare enum TokenFeatures {
    AccessVaults = "vaultaccess"
}
export interface SaTokenInfo {
    readonly audience: string;
    readonly features: (TokenFeatures | string)[];
    readonly issuer?: string;
    readonly expiry?: Date;
    readonly vaultAccess?: VaultAccess[];
}
/**
 * Assembles Service Account TokenInfo from provided arguments and asserts
 * claim constraints are enforced.
 *
 * Use this when building a request to register a Service Account Token.
 */
export declare const createServiceAccountTokenInfo: ({ audience, features, ...opts }: SaTokenInfo) => CreateTokenInfo;
export declare const ServiceAccountJwtPrivateClaims: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
    "1password.com/auuid": t.StringC;
    "1password.com/fts": t.ReadonlyArrayC<t.StringC>;
}>, t.PartialC<{
    "1password.com/token": t.StringC;
    "1password.com/vts": t.ReadonlyArrayC<t.TypeC<{
        u: t.StringC;
        a: t.NumberC;
    }>>;
}>]>>;
export declare const ServiceAccountJwtClaims: t.IntersectionC<[t.ReadonlyC<t.PartialC<{
    iss: t.StringC;
    sub: t.StringC;
    aud: t.ReadonlyArrayC<t.StringC>;
    exp: t.Type<Date, number, unknown>;
    nbf: t.Type<Date, number, unknown>;
    iat: t.Type<Date, number, unknown>;
    jti: t.StringC;
}>>, t.ReadonlyC<t.IntersectionC<[t.TypeC<{
    "1password.com/auuid": t.StringC;
    "1password.com/fts": t.ReadonlyArrayC<t.StringC>;
}>, t.PartialC<{
    "1password.com/token": t.StringC;
    "1password.com/vts": t.ReadonlyArrayC<t.TypeC<{
        u: t.StringC;
        a: t.NumberC;
    }>>;
}>]>>]>;
export declare type ServiceAccountJwtClaims = t.TypeOf<typeof ServiceAccountJwtClaims>;
export interface CreateTokenInfo {
    features: string[];
    vaults?: api.VaultClaim[];
    audience: string;
    expiry?: string;
    issuer: string;
    jti: string;
}
export interface CreateServiceAccountJwtOpts {
    readonly signingKey: util.crypto.JwkEcPriKeyDeprecated;
    readonly accountUuid: string;
    readonly serviceAccountUuid: string;
    readonly createTokenInfo: CreateTokenInfo;
    readonly bearerToken?: string;
    readonly notValidBefore?: Date;
}
/**
 * Creates a signed and serialized SA-JWT with the private
 * claims specified by core-security.
 */
export declare const createServiceAccountJwt: ({ signingKey, accountUuid, serviceAccountUuid, createTokenInfo, ...opts }: CreateServiceAccountJwtOpts) => Promise<string>;
/**
 * Returns the hash of signature for a signed JWT. This is needed when registering a token.
 */
export declare const tokenSignatureHash: (signedToken: string) => Promise<string>;
