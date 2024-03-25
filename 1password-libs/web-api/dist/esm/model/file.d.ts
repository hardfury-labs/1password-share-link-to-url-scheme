import * as util from "../util";
export declare class File {
    fileId: string;
    signingKey: util.crypto.JwkSymKey;
    constructor(fileId: string, signingKey: util.crypto.JwkSymKey);
    signReference(itemUUID: string, itemVersion: number): string;
}
