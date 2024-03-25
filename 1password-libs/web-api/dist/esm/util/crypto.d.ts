import * as t from "io-ts";
export interface SealedBox {
    readonly payload: {
        readonly encPayload: JweB;
        readonly encSymKey: JweB;
    };
    readonly signature: JwsB;
}
export interface EncryptionKey {
    readonly encrypt: (plaintext: Uint8Array) => Promise<JweB>;
}
export interface DecryptionKey {
    readonly decrypt: (ciphertext: JweB) => Promise<Uint8Array>;
}
export declare const correctJwkNumber: (n: string, expectedLength: number, leadingZeroBehavior: "pad" | "trim") => string;
export declare const correctJwkRsaPubKeyIfNeeded: (key: JwkRsaPubKey) => JwkRsaPubKey;
export declare const correctJwkRsaPriKeyIfNeeded: (key: JwkRsaPriKey) => JwkRsaPriKey;
export declare const correctJwkEcPriKey: (jwk: JwkEcPriKey) => JwkEcPriKey;
export declare const correctJwkEcPubKey: (jwk: JwkEcPubKey) => JwkEcPubKey;
export declare const keyOpsToBitMask: (ops: readonly KeyUsage[]) => number;
export declare const sha256: (data: Uint8Array) => Promise<Uint8Array>;
/**
 * unsafeHashStringSha1UpperHex creates a simple SHA-1 hash of a
 * string, encoded in uppercase hexadecimal.
 * It is labeled "unsafe" because it should not be used as a safe
 * password hashing method.
 */
export declare const unsafeHashStringSha1UpperHex: (str: string) => Promise<string>;
export declare const getSalt: (bitLength: number) => string;
declare type Jwk = JwkSymKey | JwkRsaPriKey | JwkRsaPubKey | JwkEcPriKey | JwkEcPubKey;
export declare const exportUnvalidatedKey: <T extends Jwk>(uuid: string, key: CryptoKey) => Promise<T>;
export declare const exportKey: <A extends {
    readonly kid: string;
}>(uuid: string, key: CryptoKey, codec: t.Type<A, A, unknown>) => Promise<A>;
export declare const JwkSymKey: t.ReadonlyC<t.TypeC<{
    kid: t.StringC;
    ext: t.BooleanC;
    kty: t.LiteralC<"oct">;
    key_ops: t.UnionC<[t.TupleC<[t.LiteralC<"encrypt">, t.LiteralC<"decrypt">]>, t.TupleC<[t.LiteralC<"decrypt">, t.LiteralC<"encrypt">]>]>;
    alg: t.StringC;
    k: t.StringC;
}>>;
export declare type JwkSymKey = t.TypeOf<typeof JwkSymKey>;
export declare const JwkRsaPubKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
    kid: t.StringC;
    ext: t.BooleanC;
    key_ops: t.TupleC<[t.LiteralC<"encrypt">]>;
    kty: t.LiteralC<"RSA">;
    alg: t.StringC;
    e: t.StringC;
    n: t.StringC;
}>, t.PartialC<{
    use: t.LiteralC<"enc">;
}>]>>;
export declare type JwkRsaPubKey = t.TypeOf<typeof JwkRsaPubKey>;
export declare const JwkRsaPriKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
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
export declare type JwkRsaPriKey = t.TypeOf<typeof JwkRsaPriKey>;
export declare const JwkEcPubKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
    kid: t.StringC;
    ext: t.BooleanC;
    kty: t.LiteralC<"EC">;
    key_ops: t.TupleC<[t.LiteralC<"verify">]>;
    crv: t.UnionC<[t.LiteralC<"P-256">, t.LiteralC<"P-384">]>;
    x: t.StringC;
    y: t.StringC;
}>, t.PartialC<{
    use: t.LiteralC<"sig">;
}>]>>;
export declare type JwkEcPubKey = t.TypeOf<typeof JwkEcPubKey>;
export declare const JwkEcPriKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
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
export declare type JwkEcPriKey = t.TypeOf<typeof JwkEcPriKey>;
/**
 * @deprecated
 * Used only to decode keys created by some versions of the CLI.
 * A private key is not actually supposed to contain "verify" in the `key_ops`.
 */
export declare const JwkEcPriKeyDeprecated: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
    kid: t.StringC;
    ext: t.BooleanC;
    kty: t.LiteralC<"EC">;
    key_ops: t.UnionC<[t.TupleC<[t.LiteralC<"sign">, t.LiteralC<"verify">]>, t.TupleC<[t.LiteralC<"verify">, t.LiteralC<"sign">]>, t.TupleC<[t.LiteralC<"sign">]>]>;
    crv: t.UnionC<[t.LiteralC<"P-256">, t.LiteralC<"P-384">]>;
    x: t.StringC;
    y: t.StringC;
    d: t.StringC;
}>, t.PartialC<{
    use: t.LiteralC<"sig">;
}>]>>;
export declare type JwkEcPriKeyDeprecated = t.TypeOf<typeof JwkEcPriKeyDeprecated>;
/**
 * Contrary to common belief, this is not a standard interface.
 * It is loosely based on https://tools.ietf.org/html/rfc7515
 * The "B" stands for "B5 variant"
 */
export interface JwsB {
    kid: string;
    alg: string;
    s: string;
}
/**
 * Contrary to common belief, this is not a standard interface.
 * It is loosely based on https://tools.ietf.org/html/rfc7516
 * The "B" stands for "B5 variant"
 */
export declare const JweB: t.IntersectionC<[t.TypeC<{
    kid: t.StringC;
    enc: t.StringC;
    cty: t.StringC;
    data: t.StringC;
}>, t.PartialC<{
    iv: t.StringC;
    alg: t.StringC;
    p2c: t.NumberC;
    p2s: t.StringC;
}>]>;
export declare type JweB = t.TypeOf<typeof JweB>;
export declare const Jwe: t.ReadonlyC<t.TypeC<{
    protected: t.StringC;
    encrypted_key: t.StringC;
    iv: t.StringC;
    ciphertext: t.StringC;
    tag: t.StringC;
}>>;
export declare type Jwe = t.TypeOf<typeof Jwe>;
export declare const JweHeader: t.ReadonlyC<t.TypeC<{
    typ: t.LiteralC<"jose+json">;
    alg: t.StringC;
    enc: t.LiteralC<"A256GCM">;
    kid: t.StringC;
}>>;
export declare type JweHeader = t.TypeOf<typeof JweHeader>;
export declare const Jws: t.ReadonlyC<t.TypeC<{
    protected: t.StringC;
    payload: t.StringC;
    signature: t.StringC;
}>>;
export declare type Jws = t.TypeOf<typeof Jws>;
export declare const JwsHeader: t.ReadonlyC<t.TypeC<{
    typ: t.LiteralC<"jose+json">;
    alg: t.StringC;
    kid: t.StringC;
}>>;
export declare type JwsHeader = t.TypeOf<typeof JwsHeader>;
export declare const JwtHeader: t.ReadonlyC<t.TypeC<{
    typ: t.LiteralC<"JWT">;
    kid: t.UnionC<[t.StringC, t.UndefinedC]>;
    alg: t.LiteralC<"ES256">;
}>>;
export declare type JwtHeader = t.TypeOf<typeof JwtHeader>;
export declare const KeysetCiphertext: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
    uuid: t.StringC;
    sn: t.NumberC;
    encryptedBy: t.StringC;
    encSymKey: t.IntersectionC<[t.TypeC<{
        kid: t.StringC;
        enc: t.StringC;
        cty: t.StringC;
        data: t.StringC;
    }>, t.PartialC<{
        iv: t.StringC;
        alg: t.StringC;
        p2c: t.NumberC;
        p2s: t.StringC;
    }>]>;
    pubKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
        kid: t.StringC;
        ext: t.BooleanC;
        key_ops: t.TupleC<[t.LiteralC<"encrypt">]>;
        kty: t.LiteralC<"RSA">;
        alg: t.StringC;
        e: t.StringC;
        n: t.StringC;
    }>, t.PartialC<{
        use: t.LiteralC<"enc">;
    }>]>>;
    encPriKey: t.IntersectionC<[t.TypeC<{
        kid: t.StringC;
        enc: t.StringC;
        cty: t.StringC;
        data: t.StringC;
    }>, t.PartialC<{
        iv: t.StringC;
        alg: t.StringC;
        p2c: t.NumberC;
        p2s: t.StringC;
    }>]>;
}>, t.PartialC<{
    spubKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
        kid: t.StringC;
        ext: t.BooleanC;
        kty: t.LiteralC<"EC">;
        key_ops: t.TupleC<[t.LiteralC<"verify">]>;
        crv: t.UnionC<[t.LiteralC<"P-256">, t.LiteralC<"P-384">]>;
        x: t.StringC;
        y: t.StringC;
    }>, t.PartialC<{
        use: t.LiteralC<"sig">;
    }>]>>;
    encSPriKey: t.IntersectionC<[t.TypeC<{
        kid: t.StringC;
        enc: t.StringC;
        cty: t.StringC;
        data: t.StringC;
    }>, t.PartialC<{
        iv: t.StringC;
        alg: t.StringC;
        p2c: t.NumberC;
        p2s: t.StringC;
    }>]>;
}>]>>;
export declare type KeysetCiphertext = t.TypeOf<typeof KeysetCiphertext>;
export declare const KeysetCiphertextV2: t.ReadonlyC<t.TypeC<{
    uuid: t.StringC;
    sn: t.NumberC;
    /**
     * `spec: 2` differentiates this interface from v1, even though it
     * doesn't have a `spec` field, and more importantly, provides a space
     * for us to put a `3` in the future.
     */
    spec: t.LiteralC<2>;
    ePubKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
        kid: t.StringC;
        ext: t.BooleanC;
        key_ops: t.TupleC<[t.LiteralC<"encrypt">]>;
        kty: t.LiteralC<"RSA">;
        alg: t.StringC;
        e: t.StringC;
        n: t.StringC;
    }>, t.PartialC<{
        use: t.LiteralC<"enc">;
    }>]>>;
    sPubKey: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
        kid: t.StringC;
        ext: t.BooleanC;
        kty: t.LiteralC<"EC">;
        key_ops: t.TupleC<[t.LiteralC<"verify">]>;
        crv: t.UnionC<[t.LiteralC<"P-256">, t.LiteralC<"P-384">]>;
        x: t.StringC;
        y: t.StringC;
    }>, t.PartialC<{
        use: t.LiteralC<"sig">;
    }>]>>;
    encKeyData: t.ReadonlyC<t.TypeC<{
        protected: t.StringC;
        encrypted_key: t.StringC;
        iv: t.StringC;
        ciphertext: t.StringC;
        tag: t.StringC;
    }>>;
}>>;
export declare type KeysetCiphertextV2 = t.TypeOf<typeof KeysetCiphertextV2>;
export interface CryptoImplementation {
    readonly getRandomValues: (array: Uint8Array) => Uint8Array;
    readonly subtle: SubtleCrypto;
    readonly webkitSubtle?: SubtleCrypto;
}
/**
 * A cryptographically strong pseudo-random number generator seeded with
 * truly random values. The buffer passed in is modified, and a reference to
 * argument is returned for convenience.
 */
export declare let getRandomValues: (array: Uint8Array) => Uint8Array;
export declare const getRandomBytes: (bytes: number) => Uint8Array;
export declare let subtle: SubtleCrypto;
export declare let webkitSubtle: SubtleCrypto | undefined;
export declare let isUsingWebkitSubtle: boolean;
/**
 * This Promise resolves when our crypto has been initialized.
 * Add it to a Promise chain that uses crypto functions.
 */
export declare let waitForInit: Promise<void>;
/**
 * This Promise resolves when our crypto has been initialized
 * and all the special support cases tested. Add it to a
 * Promise chain that requires crypto support tests to be
 * completed.
 */
export declare let waitForTests: Promise<void>;
export declare let testsComplete: () => void;
export declare let testsError: (error: Error) => void;
/**
 * Initialize the crypto module with an object that matches the
 * WebCrypto API. Browsers will use window.crypto. Other consumers
 * will need to find their own library. See 2969e9fe for example
 */
export declare const init: (crypto?: CryptoImplementation) => void;
export declare let supports: {
    rsaOaep256: boolean;
    nativeAesGcm: boolean;
    nativePbes2: boolean;
    nativeEcdsa: boolean;
    jwkImport: boolean;
};
export declare const setSupport: (val: Partial<typeof supports>) => void;
export {};
