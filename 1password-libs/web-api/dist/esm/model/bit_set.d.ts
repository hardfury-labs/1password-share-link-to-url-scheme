export declare type BitSet = number;
export declare namespace BitSet {
    const empty: () => number;
    const equals: (a: BitSet, b: BitSet) => boolean;
    const fromHex: (hex: string) => number;
    const toHex: (v: BitSet) => string;
    const combine: (array: readonly number[]) => number;
    const disable: (a: number, b: number) => number;
    const enable: (a: number, b: number) => number;
    const includes: (a: number, b: number) => boolean;
    const includesAny: (a: number, b: number) => boolean;
    /**
     * Don't use toggle with grouped bits.
     * If not all the bits are the same, they'll continue not being the same after toggle.
     */
    const toggle: (a: number, b: number) => number;
}
