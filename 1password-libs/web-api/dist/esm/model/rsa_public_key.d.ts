import { JweB, JwkRsaPubKey } from "../util/crypto";
export declare const getImportedPubKey: (key: RSAPublicKey | JwkRsaPubKey) => Promise<RSAPublicKey>;
export declare const importPubKey: (jwk: JwkRsaPubKey) => Promise<RSAPublicKey>;
export declare class RSAPublicKey {
    uuid: string;
    key: CryptoKey | undefined;
    jwk: JwkRsaPubKey | undefined;
    constructor(uuid: string, key?: CryptoKey, jwk?: JwkRsaPubKey);
    static CONTENT_TYPE: string;
    static JWK_ALG_RSA_OAEP_256: string;
    static WC_ALG_RSA_OAEP_256: {
        name: string;
        modulusLength: number;
        publicExponent: Uint8Array;
        hash: {
            name: string;
        };
    };
    static JWK_ALG_RSA_OAEP: string;
    static WC_ALG_RSA_OAEP: {
        name: string;
        modulusLength: number;
        publicExponent: Uint8Array;
        hash: {
            name: string;
        };
    };
    static DEFAULT_ALG: {
        name: string;
        modulusLength: number;
        publicExponent: Uint8Array;
        hash: {
            name: string;
        };
    };
    encrypt: (plaintext: Uint8Array) => Promise<JweB>;
    import: (jwk?: Readonly<{
        kid: string;
        ext: boolean;
        key_ops: ["encrypt"];
        kty: "RSA";
        alg: string;
        e: string;
        n: string;
    } & {
        use?: "enc" | undefined;
    }> | undefined) => Promise<RSAPublicKey>;
    exportKey: () => Promise<JwkRsaPubKey>;
}
