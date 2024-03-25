import * as t from "io-ts";
import { KeysetCiphertextV2 } from "../../util/crypto";
import { JwkPair as EcKeyPair } from "../ecdsa";
import { Keyset as ClassicKeyset } from "../keyset";
import { KeyPair as RsaKeyPair } from "../rsa";
import { DecryptionKey, EncryptionKey } from "./encryption";
/** The plaintext encrypted in KeysetCiphertextV2.encKeyData */
export declare const KeysetEncKeyData: t.ReadonlyC<t.TypeC<{
    ePriKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
        kid: t.StringC;
        ext: t.BooleanC;
        key_ops: t.TupleC<[t.LiteralC<"decrypt">]>;
        kty: t.LiteralC<"RSA">;
        alg: t.StringC;
        e: t.StringC;
        n: t.StringC;
        d: t.StringC;
        dp: t.StringC;
        dq: t.StringC;
        p: t.StringC;
        q: t.StringC;
        qi: t.StringC;
    }>, t.PartialC<{
        use: t.LiteralC<"enc">;
    }>]>>;
    sPriKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
        kid: t.StringC;
        ext: t.BooleanC;
        kty: t.LiteralC<"EC">;
        key_ops: t.TupleC<[t.LiteralC<"sign">]>;
        crv: t.UnionC<[t.LiteralC<"P-256">, t.LiteralC<"P-384">]>;
        x: t.StringC;
        y: t.StringC;
        d: t.StringC;
    }>, t.PartialC<{
        use: t.LiteralC<"sig">;
    }>]>>;
}>>;
export declare type KeysetEncKeyData = t.TypeOf<typeof KeysetEncKeyData>;
export interface Keyset {
    /** Equal to the `kid` in individual JWK objects held herein */
    readonly uuid: string;
    /**
     * The serial number is a spot we've reserved for the inevitability of key
     * rolling. In other words, if we need to update the keyset for an entity,
     * we'll increment the serial number to help keep track.
     */
    readonly sn: number;
    /**
     * `spec: 2` differentiates this interface from v1, even though it
     * doesn't have a `spec` field, and more importantly, provides a space
     * for us to put a `3` in the future.
     */
    readonly spec: 2;
    readonly encryptionKeyPair: RsaKeyPair;
    readonly signingKeyPair: EcKeyPair;
}
export declare namespace Keyset {
    /** Convert a classic Keyset object to a Keyset interface */
    const fromClassicKeyset: (keyset: ClassicKeyset) => Keyset;
    /** Generate a keyset */
    const generate: () => Promise<Keyset>;
    /** Using an RSA public key, encrypt the keyset as KeysetCiphertextV2 */
    const encryptKeyset: (key: EncryptionKey, keyset: Keyset) => Promise<KeysetCiphertextV2>;
    /** Using an RSA private key, decrypt the keyset */
    const decryptKeyset: (key: DecryptionKey, keyset: KeysetCiphertextV2) => Promise<Keyset>;
}
