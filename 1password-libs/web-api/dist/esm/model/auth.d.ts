import * as t from "io-ts";
import * as api from "../api";
import { SignInCredentials } from "./muk";
export declare const AuthParams: t.ReadonlyC<t.TypeC<{
    method: t.StringC;
    alg: t.StringC;
    iterations: t.NumberC;
    salt: t.StringC;
}>>;
export declare type AuthParams = t.TypeOf<typeof AuthParams>;
export interface Auth {
    readonly params: AuthParams;
    readonly srpX: string;
}
export declare namespace Auth {
    export const generate: (credentials: SignInCredentials) => Promise<Auth>;
    export const generateWithParams: (credentials: SignInCredentials, params: AuthParams) => Promise<Auth>;
    export const getForUpload: (auth: Auth) => api.Auth;
    export const generateA: (auth: Auth) => {
        readonly bigA: string;
        readonly littleA: string;
    };
    interface ComputeRawKeyParams {
        readonly auth: Auth;
        readonly littleA: string;
        readonly bigA: string;
        readonly bigB: string;
        readonly sessionId: string;
    }
    export const computeRawKey: ({ auth, littleA, bigA, bigB, sessionId, }: ComputeRawKeyParams) => Uint8Array;
    export {};
}
