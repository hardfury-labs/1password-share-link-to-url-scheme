export declare const enum MasterPasswordPolicyMinLength {
    Minimum = 10,
    Medium = 12,
    Strong = 14
}
export declare const setPassphraseWordList: (list: string[] | undefined) => void;
export declare const setCommonPasswordsList: (list: string[] | undefined) => void;
export declare const hasCommonPasswordsList: () => boolean;
export declare const PASS_CHAR_SET: {
    UPPERCASE: string;
    LOWERCASE: string;
    DIGITS: string;
    SYMBOLS: string;
};
export declare const generatePassword: (chars: string, length: number) => [string, number];
export declare const generatePassphrase: (words: number) => [string[], number];
export declare const calculatePasswordStrength: (password: string, username?: string | undefined) => number;
export declare const passwordIsInDictionary: (password: string) => boolean;
