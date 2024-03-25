import { DecryptionKey, EncryptionKey, JweB, JwkRsaPriKey } from "../util/crypto";
export declare class RSAPrivateKey {
    uuid: string;
    key: CryptoKey | undefined;
    jwk: JwkRsaPriKey | undefined;
    constructor(uuid: string, key?: CryptoKey, jwk?: JwkRsaPriKey);
    decrypt: (json: JweB | string) => Promise<Uint8Array>;
    import: (jwk?: Readonly<{
        kid: string;
        ext: boolean;
        key_ops: ["decrypt"];
        kty: "RSA";
        alg: string;
        e: string;
        n: string;
        d: string;
        dp: string;
        dq: string;
        p: string;
        q: string;
        qi: string;
    } & {
        use?: "enc" | undefined;
    }> | undefined) => Promise<RSAPrivateKey>;
    exportKey: () => Promise<JwkRsaPriKey>;
    encryptWithKey: (key: EncryptionKey) => Promise<JweB>;
    decryptWithKey: (key: DecryptionKey, encryptedKey: JweB) => Promise<RSAPrivateKey>;
}
