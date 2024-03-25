import { Context } from "./context";
export declare const createSignupStep: (c: Context, pageName: string, source: string, accountType: string) => Promise<string>;
export declare const updateSignupStep: (c: Context, pageName: string, uuid: string) => Promise<void>;
