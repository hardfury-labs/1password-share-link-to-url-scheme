/**
 * Wraps a function in a Promise, with built-in error handling
 */
export declare const makePromise: (filePath: string) => <T>(functionName: string, func: () => T | Promise<T>) => Promise<T>;
/**
 * Prevents the same function from being called again if the first call
 * is still running.
 */
export declare const debouncePromise: <T>(keys: {
    toString(): string;
}[], func: () => T | Promise<T>, cacheAllowanceMs?: number) => Promise<T>;
