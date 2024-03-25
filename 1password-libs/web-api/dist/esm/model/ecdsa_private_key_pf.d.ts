import * as sjcl from "sjcl";
import { JwkEcPriKey, JwsB } from "../util/crypto";
import { ECDSAPrivateKey } from "./ecdsa_private_key";
import { ECDSAPublicKeyPF } from "./ecdsa_public_key_pf";
export declare class ECDSAPrivateKeyPF extends ECDSAPrivateKey {
    sjclKey: sjcl.SjclEcdsaSecretKey | undefined;
    pubKey: ECDSAPublicKeyPF | undefined;
    constructor(uuid?: string, pubKey?: ECDSAPublicKeyPF, sjclKey?: sjcl.SjclEcdsaSecretKey, jwk?: JwkEcPriKey);
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
}
