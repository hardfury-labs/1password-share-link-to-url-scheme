import * as t from "io-ts";
import * as sjcl from "sjcl";
export declare const ab2str: (buf: Uint8Array | ArrayBuffer) => string;
export declare const str2ab: (str: string) => Uint8Array;
/** Meant to replace the very loose ab2json function over time */
export declare const decodeBytes: <A, O>(bytes: Uint8Array, codec: t.Type<A, O, unknown>) => A;
export declare const ab2json: (buf: Uint8Array | ArrayBuffer) => {};
export declare const json2ab: (obj: {}) => Uint8Array;
export declare const isAB: (thing: any) => thing is ArrayBuffer;
/**
 * Alias for sjcl.codec.bytes.toBits that enforces Uint8Array
 */
export declare const bytesToBits: (bytes: Uint8Array) => sjcl.BitArray;
export declare const bytesToBase64url: (bytes: Uint8Array) => string;
export declare const base64urlToBytes: (s: string) => Uint8Array;
export declare const base64ToBase64url: (s: string) => string;
export declare const bytesToHex: (bytes: Uint8Array) => string;
export declare const hexToBytes: (hex: string) => Uint8Array;
export declare const intToBytes: (int: number, leftPad: number) => Uint8Array;
export declare const MAX_SAFE_INTEGER = 9007199254740991;
export declare const MIN_SAFE_INTEGER = -9007199254740991;
export declare const MAX_SAFE_INTEGER_BYTE_LENGTH = 6;
/**
 * Reduce a byte array into a single integer. Throw an error if the resulting
 * integer is outside the bounds of precision (53 bits) in JavaScript.
 */
export declare const bytesToInteger: (bytes: Uint8Array, bigEndian?: boolean | undefined) => number;
/**
 * Reduce a byte array into a single integer, ignoring any loss of precision
 */
export declare const unsafeBytesToInteger: (bytes: Uint8Array, bigEndian?: boolean | undefined) => number;
/**
 * Codec for a Date object serialized as the number of seconds since the epoch.
 * See `NumericDate` in https://tools.ietf.org/html/rfc7519#section-2 for more.
 */
export declare const RfcNumericDate: t.Type<Date, number, unknown>;
/**
 * Codec for a Date object serialized as an ISO string.
 */
export declare const IsoStringDate: t.Type<Date, string, unknown>;
