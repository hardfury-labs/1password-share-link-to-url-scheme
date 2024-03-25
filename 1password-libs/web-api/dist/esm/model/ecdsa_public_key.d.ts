import { JwkEcPubKey, JwsB } from "../util/crypto";
export declare class ECDSAPublicKey {
    uuid: string;
    key: CryptoKey | undefined;
    jwk: JwkEcPubKey | undefined;
    constructor(uuid?: string, key?: CryptoKey, jwk?: JwkEcPubKey);
    static KEY_ALG_ES256: {
        name: string;
        namedCurve: string;
    };
    static SIGN_ALG_ES256: {
        name: string;
        hash: {
            name: string;
        };
        jwkAlgorithmIdentifier: string;
    };
    static DEFAULT_KEY_ALG: {
        name: string;
        namedCurve: string;
    };
    static DEFAULT_SIGN_ALG: {
        name: string;
        hash: {
            name: string;
        };
        jwkAlgorithmIdentifier: string;
    };
    verify: (data: Uint8Array, signature: JwsB) => Promise<boolean>;
    import: (jwk?: Readonly<{
        kid: string;
        ext: boolean;
        kty: "EC";
        key_ops: ["verify"];
        crv: "P-256" | "P-384";
        x: string;
        y: string;
    } & {
        use?: "sig" | undefined;
    }> | undefined) => Promise<ECDSAPublicKey>;
    exportKey: () => Promise<JwkEcPubKey>;
}
