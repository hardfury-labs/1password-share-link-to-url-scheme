export declare const generateRandomID: (length?: number | undefined) => string;
export declare const selectRandomElement: <T>(a: readonly T[]) => T;
/**
 * Produce a random integer within a specified range of integers.
 */
export declare const getRandomValueFromRange: (lower: number, upper: number) => number;
/**
 * Produce a random integer made from a specified number of bytes.
 */
export declare const getRandomNumberWithByteLength: (byteLength: number) => number;
