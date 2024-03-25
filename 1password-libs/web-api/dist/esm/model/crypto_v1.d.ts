import * as util from "../util";
/**
 * Use a static non-secret key to lightly hide some text from plain view
 */
export declare const obfuscate: (data: string) => Promise<util.crypto.JweB>;
/**
 * Use a static non-secret key to decrypt some lightly hidden text
 */
export declare const deobfuscate: (ciphertext: util.crypto.JweB | undefined) => Promise<string>;
