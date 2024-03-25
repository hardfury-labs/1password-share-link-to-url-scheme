import { Either } from "fp-ts/es6/Either";
export declare type Result<X, Y> = Ok<X> | Err<Y>;
export interface Ok<X> {
    readonly type: "ok";
    readonly value: X;
}
export interface Err<X> {
    readonly type: "err";
    readonly value: X;
}
/** Turn an fp-ts Either struct into a Result */
export declare const fromEither: <X, Y>(e: Either<Y, X>) => Result<X, Y>;
