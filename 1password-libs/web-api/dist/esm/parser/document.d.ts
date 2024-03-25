import { VaultItem } from "../model";
export interface EncryptedDocument {
    data: ArrayBuffer;
    attributes: VaultItem.DocumentAttributes;
}
export declare const decryptDocument: (documentAttributes: VaultItem.DocumentAttributes, response: ArrayBuffer) => Promise<Uint8Array>;
export declare const encryptDocument: (plaintextData: ArrayBuffer, fileName: string) => Promise<EncryptedDocument>;
