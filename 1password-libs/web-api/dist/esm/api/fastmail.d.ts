import * as t from "io-ts";
import { Session } from "./session";
export interface PostFastmailRefreshTokenBody {
    code: string;
    redirect: string;
    nonce: string;
}
export declare const FastmailVerifier: t.ReadonlyC<t.TypeC<{
    verifier: t.StringC;
    nonce: t.StringC;
}>>;
export declare type FastmailVerifier = t.TypeOf<typeof FastmailVerifier>;
export declare const FastmailAccountId: t.ReadonlyC<t.TypeC<{
    accountId: t.StringC;
    refreshToken: t.StringC;
}>>;
export declare type FastmailAccountId = t.TypeOf<typeof FastmailAccountId>;
/**
 * Attempts to post the Fastmail verifier and nonce to the redis database. Returns them if succeeds.
 */
export declare const postFastmailVerifier: (s: Session) => Promise<FastmailVerifier>;
/**
 * Attempts to post the Fastmail refresh token.
 */
export declare const postFastmailRefreshToken: (s: Session, body: PostFastmailRefreshTokenBody) => Promise<FastmailAccountId>;
