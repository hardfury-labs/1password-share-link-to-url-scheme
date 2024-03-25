interface ParsedResult {
    parsedData: string[][];
    hasErrors: boolean;
}
export declare const parse: (csv: string) => ParsedResult;
export declare const parseWithHeaders: (csv: string) => Record<string, string>[];
export declare const unparse: (twoDArray: string[][]) => string;
export declare const removeEmptyColumns: (rows: string[][]) => string[][];
export declare const findLongestRowLength: (rows: string[][]) => number;
export {};
