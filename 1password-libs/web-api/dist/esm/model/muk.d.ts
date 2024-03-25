import { RawKeyParams } from "./aes_gcm";
import { SecretKey } from "./secret_key";
export interface SignInCredentials {
    readonly email: string;
    readonly password: string;
    readonly secretKey: SecretKey;
}
export interface KeyDerivationInfo {
    readonly alg: string;
    readonly iterations: number;
    readonly salt: string;
    readonly enc: string;
}
/**
 * Derive the Master Unlock Key from a user's sign-in credentials.
 */
export declare const deriveRawMasterKey: (derivationInfo: KeyDerivationInfo, credentials: SignInCredentials) => Promise<RawKeyParams>;
