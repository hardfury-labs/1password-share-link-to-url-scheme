import * as t from "io-ts";
import { Result } from "./result";
/** Decode an unknown value given a codec from io-ts */
export declare const decodeAs: <X>(codec: t.Type<X, X, unknown>) => (value: unknown) => Result<X, string>;
/**
 * "Unsafe" because if decoding fails, it throws an error.
 * We should aim to return errors.
 */
export declare const unsafeDecodeAs: <X, Y>(codec: t.Type<X, Y, unknown>) => (value: unknown) => X;
export declare const withDefault: <X, Y>(type: t.Type<X, Y, unknown>, defaultValue: X) => t.Type<X, Y, unknown>;
export declare const fromStringEnum: <EnumType extends string>(theEnum: Record<string, EnumType>, enumName: string) => t.Type<EnumType, EnumType, unknown>;
/**
 * Produce a readonly array that contains no `null` or `undefined` values,
 * even if the input array does.
 */
export declare const readonlyArrayOmitNullish: <X>(type: t.Type<X, X, unknown>) => t.Type<readonly X[], readonly X[], unknown>;
