import * as api from "../api";
import { Context } from "./context";
export declare type FastmailError = FastmailVerifierError | FastmailUnknownError;
export interface FastmailVerifierError {
    type: "error";
    error: Error;
}
export interface FastmailUnknownError {
    type: "unknown-error";
    error: unknown;
}
/**
 * postFastmailVerifier posts the Fastmail verifier, and a nonce. When the server exchanges
 * the access token for the refresh token, both are needed to authenticate the request
 */
export declare const postFastmailVerifier: (c: Context) => Promise<api.FastmailVerifier>;
/**
 * postFastmailRefreshToken exchanges the access token for the refresh token. If the nonce does not
 * match the one we have in the Redis db, the request will fail. Similarly, if the redirect, nonce,
 * or clientid are improper parameters when the https://api.fastmail.com/oauth/refresh request is made,
 * the request will also fail.
 */
export declare const postFastmailRefreshToken: (c: Context, body: api.PostFastmailRefreshTokenBody) => Promise<api.FastmailAccountId>;
