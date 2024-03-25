import * as sjcl from "sjcl";
import { SignupSource } from "../action";
import { CountryAddressFormat } from "./large_constants";
export declare const ACCOUNT_NAME_MAX_LENGTH = 60;
export declare const SERVICE_ACCOUNT_NAME_MAX_LENGTH = 64;
export declare const SERVICE_ACCOUNT_TOKEN_NAME_MAX_LENGTH = 64;
export declare const URL_MAX_LENGTH = 100;
export declare const DOMAIN_MAX_LENGTH = 32;
export declare const DOMAIN_MIN_LENGTH = 5;
export declare const SHORT_DOMAIN_MIN_LENGTH = 3;
export declare const DOMAIN_INVALID_CHARS: RegExp;
export declare const VAULT_AND_GROUP_NAME_MAX_LENGTH = 60;
export declare const VAULT_AND_GROUP_DESC_MAX_LENGTH = 255;
export declare const UUID_LENGTH = 26;
export declare const DEBUG = false;
/**
 * Stringify data, including `undefined`
 */
export declare const stringify: (data: any) => string;
export declare const compact: <T>(array: (T | undefined | null | 0 | "" | false)[]) => T[];
export declare const compactFilter: <T>(objects: readonly (false | "" | 0 | T | null | undefined)[], filter: (o: T) => any) => readonly T[];
/**
 * A helper function to make object/map construction from arrays a little bit easier.
 * Takes in two generator functions that dictate how keys and values are generated based
 * on an element in the input collection.
 *
 * @param makeKey A function that returns a key used in the new map.
 * @param makeValue A function that returns a value used in the new map.
 * @param source An array
 */
export declare const mapObject: <T, U>(makeKey: (value: T, index: number) => string, makeValue: (value: T, index: number) => U, source: readonly T[]) => Record<string, U>;
/** joinPath creates URL out of individual components adding "/" separators as necessary */
export declare const joinPath: (...parts: string[]) => string;
export declare const moveArrayItem: <T>(array: readonly T[], currentIndex: number, newIndex: number) => T[];
export declare const normalizeUTF8: (password: string) => string;
export declare const prehash: (password: string) => string;
export declare const blobToBase64DataURI: (blob: Blob) => Promise<string>;
export declare const concatUint8Arrays: (arr: readonly Uint8Array[]) => Uint8Array;
export declare const ep: (email: string, password: string) => string;
/**
 * hmacSha256Hex takes a key and data, both encoded in hexadecimal,
 * and returns the result of HMAC-SHA-256(key, data), also encoded
 * in hexadecimal.
 */
export declare const hmacSha256Hex: (hexKey: string, hexData: string) => string;
/**
 * deriveHmacSha256 takes a base64url key and a UTF-8 string
 * and derives a new key, returning an object that can perform
 * HMAC-SHA-256(newKey, data).
 */
export declare const deriveHmacSha256: (base64UrlKey: string, utf8String: string) => sjcl.SjclHmac;
/** Create an HMAC from a 256-bit key and some string data */
export declare const hmacWithSecretAndData: (secret: Uint8Array, data: string) => Uint8Array;
/**
 * bitsAsClientUuid takes a bit array and converts it to a client UUID
 * format – 26 characters of lowercase unpadded base32.
 */
export declare const bitsAsClientUuid: (bitArray: sjcl.BitArray) => string;
/**
 * bytesAsClientUuid takes a byte array and converts it to a client UUID
 * format – 26 characters of lowercase unpadded base32.
 */
export declare const bytesAsClientUuid: (bytes: Uint8Array) => string;
export declare const generateUUIDStyleHash: (s: string) => string;
export declare const isValidNumber: (candidate: unknown) => candidate is number;
export declare const isValidEmail: (email: string) => boolean;
export declare const isValidDomain: (domain: string) => boolean;
export declare const isValidInviteDomain: (domain: string) => boolean;
export declare const isValidServerToken: (token: string) => boolean;
export declare const PROMO_CODE_MAX_LENGTH = 20;
export declare const isValidPromoCodeFormat: (promoCode: string) => boolean;
export declare const isValidPurchaseOrderTokenFormat: (token: string) => boolean;
export declare const isValidSignupSource: (source: string) => source is SignupSource;
export declare const isNonWebSignupSource: (source: SignupSource) => boolean;
export declare const isValidSignupVerificationCode: (code: string) => boolean;
export declare const wait: (milliseconds: number) => Promise<void>;
interface CallbackPromise<X> {
    /** Returns a message if the promise was already resolved or rejected */
    readonly resolve: (x: X) => string | undefined;
    /** Returns a message if the promise was already resolved or rejected */
    readonly reject: (e: Error) => string | undefined;
    readonly promise: Promise<X>;
}
export declare const getCallbackPromise: <X>() => CallbackPromise<X>;
export declare const batchChain: <X, T>(func: (batch: readonly X[]) => Promise<readonly T[]>, batchSize: number, items: readonly X[]) => Promise<readonly T[]>;
export declare const batchPromiseAll: <X, Y>(func: (x: X) => Promise<Y>, batchSize: number, xs: readonly X[]) => Promise<readonly Y[]>;
export declare const chainPromises: <X>(func: () => Promise<X>, times: number) => Promise<readonly X[]>;
export declare const commaSeparatedListToArray: (commaList: string) => string[];
export declare const formatCommaSeparatedList: (commaList: string, withSpaces?: boolean | undefined) => string;
export declare const clean: (s: string) => string;
export declare const getTime: (d: Date | string | undefined) => number;
export declare const getAddressConfigForCountryCode: (countryCode: string) => CountryAddressFormat;
export declare const getAllCountryCodes: () => string[];
export declare const getCountryNameForCode: (countryCode: string) => string;
export declare const COUNTRIES_SORTED_BY_NAME: readonly {
    code: string;
    name: string;
}[];
export declare const BILLING_COUNTRIES_SORTED_BY_NAME: readonly {
    code: string;
    name: string;
}[];
export declare const getModifierKey: () => string;
export declare const getFileExtension: (fileName: string) => string;
export declare const getSanitizedName: (name: string) => string;
export declare const readFile: (file: File) => Promise<ArrayBuffer>;
export declare const asValidDomain: (value: string) => string;
export declare const asValidAccountName: (name: string) => string;
export declare const filterCharacters: (str: string, characterSet: string) => string;
export declare const addProtocolToUrlIfNeeded: (url: string) => string;
export declare const getServerDomainFromAccountDomain: (accountDomain: string) => string;
export declare const enum CountryCode {
    US = "us",
    CA = "ca",
    EU = "eu"
}
export declare const usTerritories: string[];
export declare const getCountryCodeFromDomain: (domain: string) => CountryCode;
export declare const inBetween: (value: number, exclusiveMin: number, inclusiveMax: number) => boolean;
export {};
