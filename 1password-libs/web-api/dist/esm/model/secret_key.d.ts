export interface SecretKey {
    readonly format: string;
    readonly id: string;
    readonly key: string;
}
export declare namespace SecretKey {
    const generate: () => SecretKey;
    const validKeyFromInput: (keyString: string) => SecretKey | undefined;
    const combineWithBytes: (bytes: Uint8Array, secretKey: SecretKey) => Uint8Array;
    const asIdentifier: ({ format, id }: SecretKey) => string;
    const asMaskedString: (sk: SecretKey) => string;
    const asReadableString: ({ format, id, key, }: SecretKey) => string;
}
