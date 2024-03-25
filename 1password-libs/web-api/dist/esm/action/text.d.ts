import { Context } from "./context";
/**
 * checkPwnedPasswords uses Troy Hunt's Pwned Passwords V2 API to
 * determine whether the given password is included in a repository of
 * breached passwords.
 */
export declare const checkPwnedPasswords: (password: string) => Promise<boolean>;
/**
 * _checkPwnedPasswords uses a given API function to determine whether
 * the given password is included in a list of breached passwords.
 */
export declare const _checkPwnedPasswords: (password: string, apiFunc: (prefix: string) => Promise<string[]>) => Promise<boolean>;
export declare const getWatchtowerData: () => Record<string, number>;
export declare const getTwoFactorSitesList: () => Record<string, string>;
export declare const loadPassphraseWordList: (c: Context) => Promise<void>;
export declare const unloadPassphraseWordList: () => void;
export declare const loadCommonPasswordsList: (c: Context) => Promise<string[]>;
export declare const unloadCommonPasswordsList: () => void;
export declare const loadWatchtowerData: () => Promise<void>;
export declare const unloadWatchtowerData: () => void;
export declare const loadTwoFactorSitesList: () => Promise<void>;
export declare const unloadTwoFactorSitesList: () => void;
