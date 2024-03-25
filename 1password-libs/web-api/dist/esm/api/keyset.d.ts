import { KeysetCiphertext } from "../util/crypto";
import { Session } from "./session";
export interface UserKeysets {
    version: number;
    keysets: KeysetCiphertext[];
}
export declare const getKeysets: (s: Session) => Promise<UserKeysets>;
