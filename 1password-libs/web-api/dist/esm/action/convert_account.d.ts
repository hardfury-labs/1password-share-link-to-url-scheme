import { Context } from "./context";
export declare const convertToIndividual: (c: Context) => Promise<void>;
export declare const convertToFamily: (c: Context, accountName: string, childAccountCode?: string | undefined) => Promise<void>;
export declare const convertToBusiness: (c: Context, accountName: string) => Promise<void>;
