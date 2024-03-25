import { MukSrpXCredentials } from "../action/auth";
import { JweB } from "../util/crypto";
import { AuthParams } from "./auth";
import { SymmetricKey } from "./symmetric_key";
export interface LocalAuth {
    readonly verifier: LocalAuthVerifier;
    readonly encCredentials: JweB;
}
export interface LocalAuthCredentials extends MukSrpXCredentials {
    readonly signInAddress: string;
    readonly userAuth: AuthParams;
}
export interface DecryptedLocalAuth {
    readonly localAuth: LocalAuth;
    readonly credentials: LocalAuthCredentials;
    readonly bearerToken: string;
}
export declare namespace LocalAuth {
    const generate: (creds: LocalAuthCredentials) => Promise<DecryptedLocalAuth>;
    const decryptCredentials: (localAuth: LocalAuth, token: string) => Promise<LocalAuthCredentials>;
    const generateVerifierAndToken: () => Promise<LocalAuthVerifierAndToken>;
}
export interface LocalAuthVerifier {
    readonly salt: string;
    readonly localHash: string;
}
export interface LocalAuthVerifierAndToken extends LocalAuthVerifier {
    readonly bearerToken: string;
}
export declare namespace LocalAuthVerifier {
    const deriveKey: (verifier: LocalAuthVerifier, token: string) => Promise<SymmetricKey>;
}
