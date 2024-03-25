/**
 * getPwnedHashList sends a 5-char prefix of a hex-encoded SHA-1 to
 * Troy Hunt's Pwned Passwords V2 API and returns a list of full
 * hashes of pwned passwords that begin with that prefix.
 */
export declare const getPwnedHashList: (prefix: string) => Promise<string[]>;
/**
 * convertPwnedApiResponseToHashes takes a 5-char prefix of a
 * hex-encoded SHA-1 and a response from Troy Hunt's Pwned Passwords
 * V2 API and returns a list of full SHA-1 hashes.
 */
export declare const convertPwnedApiResponseToHashes: (prefix: string) => (responseBody: string) => string[];
export declare const getPassphraseWordList: (txtBase: string) => Promise<string[]>;
export declare const getCommonPasswordsList: (txtBase: string) => Promise<string[]>;
export declare const getWatchtowerData: () => Promise<Record<string, number>>;
export declare const getTwoFactorSitesList: () => Promise<Record<string, string>>;
