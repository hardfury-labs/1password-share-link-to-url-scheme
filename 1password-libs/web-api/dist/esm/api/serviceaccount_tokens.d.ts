import * as t from "io-ts";
import { Session } from "./session";
/**
 * Registers a new Service Account Token (SA-JWT) with B5,
 * associating it with the caller's account.
 */
export declare const registerServiceAccountToken: (s: Session, tokenRegistration: RegisterServiceAccountTokenRequest) => Promise<RegisterServiceAccountTokenResponse>;
/**
 * Renames a token.
 */
export declare const renameServiceAccountToken: (s: Session, serviceAccountUuid: string, tokenJti: string, newName: RenameServiceAccountTokenRequest) => Promise<void>;
/**
 * Revokes any access granted to a token, effectively making it invalid.
 */
export declare const revokeServiceAccountToken: (s: Session, serviceAccountUuid: string, tokenJti: string) => Promise<void>;
/**
 * Revokes all Service Account tokens issued to the caller's Account,
 * regardless of the service account it was issued to.
 */
export declare const revokeAllServiceAccountTokensForAccount: (s: Session) => Promise<void>;
/**
 * Saves a hash of the SA-JWT signature on the server.
 * Hash is the SHA256 hash of base64-encoded value.
 */
export declare const registerServiceAccountTokenSignature: (s: Session, serviceAccountUuid: string, tokenJti: string, signature: RegisterServiceAccountTokenSignatureRequest) => Promise<void>;
export declare const VaultClaim: t.TypeC<{
    u: t.StringC;
    a: t.NumberC;
}>;
declare const TokenInfo: t.IntersectionC<[t.TypeC<{
    jti: t.StringC;
    issuer: t.StringC;
    audience: t.StringC;
    features: t.ReadonlyArrayC<t.StringC>;
}>, t.PartialC<{
    expiry: t.StringC;
    vaults: t.ReadonlyArrayC<t.TypeC<{
        u: t.StringC;
        a: t.NumberC;
    }>>;
    signatureHash: t.StringC;
}>]>;
export declare const ServiceAccountToken: t.IntersectionC<[t.TypeC<{
    name: t.StringC;
    state: t.StringC;
    signedBy: t.StringC;
    createdAt: t.StringC;
    tokenInfo: t.IntersectionC<[t.TypeC<{
        jti: t.StringC;
        issuer: t.StringC;
        audience: t.StringC;
        features: t.ReadonlyArrayC<t.StringC>;
    }>, t.PartialC<{
        expiry: t.StringC;
        vaults: t.ReadonlyArrayC<t.TypeC<{
            u: t.StringC;
            a: t.NumberC;
        }>>;
        signatureHash: t.StringC;
    }>]>;
}>, t.PartialC<{
    expiresAt: t.StringC;
}>]>;
export declare type ServiceAccountToken = t.TypeOf<typeof ServiceAccountToken>;
export declare type TokenInfo = t.TypeOf<typeof TokenInfo>;
export declare type VaultClaim = t.TypeOf<typeof VaultClaim>;
declare const RegisterServiceAccountTokenRequest: t.TypeC<{
    name: t.StringC;
    subject: t.StringC;
    account_uuid: t.StringC;
    token_info: t.IntersectionC<[t.IntersectionC<[t.TypeC<{
        jti: t.StringC;
        issuer: t.StringC;
        audience: t.StringC;
        features: t.ReadonlyArrayC<t.StringC>;
    }>, t.PartialC<{
        expiry: t.StringC;
        vaults: t.ReadonlyArrayC<t.TypeC<{
            u: t.StringC;
            a: t.NumberC;
        }>>;
        signatureHash: t.StringC;
    }>]>, t.TypeC<{
        signatureHash: t.StringC;
    }>]>;
    kid: t.StringC;
}>;
export declare type RegisterServiceAccountTokenRequest = t.TypeOf<typeof RegisterServiceAccountTokenRequest>;
declare const RegisterServiceAccountTokenResponse: t.ReadonlyC<t.TypeC<{
    id: t.StringC;
}>>;
export declare type RegisterServiceAccountTokenResponse = t.TypeOf<typeof RegisterServiceAccountTokenResponse>;
declare const RenameServiceAccountTokenRequest: t.TypeC<{
    name: t.StringC;
}>;
export declare type RenameServiceAccountTokenRequest = t.TypeOf<typeof RenameServiceAccountTokenRequest>;
declare const RegisterServiceAccountTokenSignatureRequest: t.TypeC<{
    signature_hash: t.StringC;
}>;
export declare type RegisterServiceAccountTokenSignatureRequest = t.TypeOf<typeof RegisterServiceAccountTokenSignatureRequest>;
export {};
