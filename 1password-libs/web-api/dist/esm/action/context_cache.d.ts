import { Keyset } from "../model";
import { Context } from "./context";
export interface CacheTypes {
    keysets: Keyset;
}
export declare type ContextCaches = {
    [K in keyof CacheTypes]: Record<string, CacheTypes[K]>;
};
export declare type ContextCache = ReturnType<typeof getContextCache>;
export declare const getContextCache: (c: Context, cacheType: keyof ContextCaches) => {
    getEntry: (key: string) => Keyset | undefined;
    saveEntry: (key: string, value: Keyset) => void;
    saveEntries: (entries: Record<string, Keyset>) => void;
};
/** Reset all caches for the given context */
export declare const resetContext: (contextId: number) => ContextCaches;
export declare const clearContextCache: () => void;
