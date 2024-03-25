import * as sjcl from "sjcl";
import { JwkEcPubKey, JwsB } from "../util/crypto";
import { ECDSAPublicKey } from "./ecdsa_public_key";
export declare class ECDSAPublicKeyPF extends ECDSAPublicKey {
    sjclKey: sjcl.SjclEcdsaPublicKey | undefined;
    constructor(uuid?: string, sjclKey?: sjcl.SjclEcdsaPublicKey, jwk?: JwkEcPubKey);
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
