import { DecryptionKey, EncryptionKey, JweB, JwkEcPriKey, JwsB } from "../util/crypto";
export declare class ECDSAPrivateKey {
    uuid: string;
    key: CryptoKey | undefined;
    jwk: JwkEcPriKey | undefined;
    constructor(uuid?: string, key?: CryptoKey, jwk?: JwkEcPriKey);
    sign: (data: Uint8Array) => Promise<JwsB>;
    import: (jwk?: Readonly<{
        kid: string;
        ext: boolean;
        kty: "EC";
        key_ops: ["sign"];
        crv: "P-256" | "P-384";
        x: string;
        y: string;
        d: string;
    } & {
        use?: "sig" | undefined;
    }> | undefined) => Promise<ECDSAPrivateKey>;
    exportKey: () => Promise<JwkEcPriKey>;
    encryptWithKey: (key: EncryptionKey) => Promise<JweB>;
    decryptWithKey: (key: DecryptionKey, encryptedKey: JweB) => Promise<ECDSAPrivateKey>;
}
