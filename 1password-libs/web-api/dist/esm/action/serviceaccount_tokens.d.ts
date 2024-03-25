import * as api from "../api";
import * as model from "../model";
import * as util from "../util";
import { Context } from "./context";
/**
 * Revokes a Service Account token's authorization, making it invalid
 */
export declare const revokeServiceAccountToken: (c: Context, serviceAccountUuid: string, tokenJti: string) => Promise<void>;
/**
 * Rename a Service Account token
 */
export declare const renameServiceAccountToken: (c: Context, serviceAccountUuid: string, tokenJti: string, newName: string) => Promise<void>;
/**
 * Voids all issued Service Account tokens.
 */
export declare const revokeAllServiceAccountTokensForAccount: (c: Context) => Promise<void>;
/**
 * Creates a and associates the token with the caller's 1Password Account
 */
export declare const createConnectToken: (c: Context, serviceAccountUuid: string, serviceAccountObjectData: model.ServiceAccountConnectObjectDataValue, tokenName: string, tokenInfo: model.CreateTokenInfo) => Promise<string>;
/**
 * Creates a and associates the token with the caller's 1Password Account
 */
export declare const createDataStreamingToken: (c: Context, serviceAccountUuid: string, serviceAccountObjectData: model.ServiceAccountStreamingObjectDataValue, tokenName: string, tokenInfo: model.CreateTokenInfo) => Promise<string>;
/**
 * Builds a service account token and returns the request that can be used to register it.
 */
export declare const registerServiceAccountTokenRequest: (c: Context, serviceAccountUuid: string, tokenName: string, tokenInfo: model.CreateTokenInfo, bearerToken: string | undefined, kid: string, signingKey: util.crypto.JwkEcPriKeyDeprecated) => Promise<{
    saJwt: string;
    registerTokenRequest: api.RegisterServiceAccountTokenRequest;
}>;
/**
 * Saves a hash of the SAJWT signature to the server for later verification.
 */
export declare const registerServiceAccountTokenSignature: (c: Context, serviceAccountUuid: string, jti: string, jwt: string) => Promise<void>;
