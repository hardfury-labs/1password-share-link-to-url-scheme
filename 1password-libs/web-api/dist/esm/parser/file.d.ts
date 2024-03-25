import { VaultItem } from "../model";
export interface EncryptedFile {
    data: ArrayBuffer;
    attributes: VaultItem.FileAttributes;
}
export declare const decryptFile: (fileAttributes: VaultItem.FileAttributes, response: ArrayBuffer) => Promise<Uint8Array>;
export declare const encryptFile: (data: ArrayBuffer) => Promise<EncryptedFile>;
