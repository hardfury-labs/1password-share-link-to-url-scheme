export declare type Context<T> = Readonly<{
    entries: Record<string, Entry<T>>;
    timestamp: number;
}>;
export declare type Entry<T> = Readonly<{
    attrMask: number;
    timestamp: number;
    value: T;
}>;
export declare type GetEntryOptions = Readonly<{
    attrMask: number;
}>;
export interface WithEntriesOptions extends GetEntryOptions, Readonly<{
    timestamp: number;
}> {
}
export declare type Cache<T> = Readonly<{
    contexts: Record<string, Context<T>>;
    getAllEntries: (contextId: number) => T[] | undefined;
    getEntry: (contextId: number, key: string, options?: Partial<GetEntryOptions>) => T | undefined;
    withEntries: (contextId: number, entries: Record<string, T>, options?: Partial<WithEntriesOptions>) => Cache<T>;
    withOnlyEntries: (contextId: number, entries: Record<string, T>, options?: Partial<WithEntriesOptions>) => Cache<T>;
    withoutEntries: (contextId: number, keys: string[]) => Cache<T>;
    withoutContext: (contextId: number) => Cache<T>;
}>;
export declare const create: <T>() => Readonly<{
    contexts: Record<string, Readonly<{
        entries: Record<string, Readonly<{
            attrMask: number;
            timestamp: number;
            value: T;
        }>>;
        timestamp: number;
    }>>;
    getAllEntries: (contextId: number) => T[] | undefined;
    getEntry: (contextId: number, key: string, options?: Partial<Readonly<{
        attrMask: number;
    }>> | undefined) => T | undefined;
    withEntries: (contextId: number, entries: Record<string, T>, options?: Partial<WithEntriesOptions> | undefined) => Readonly<any>;
    withOnlyEntries: (contextId: number, entries: Record<string, T>, options?: Partial<WithEntriesOptions> | undefined) => Readonly<any>;
    withoutEntries: (contextId: number, keys: string[]) => Readonly<any>;
    withoutContext: (contextId: number) => Readonly<any>;
}>;
export declare const saveServerChangedForContext: (contextId: number) => void;
