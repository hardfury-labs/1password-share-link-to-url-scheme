import * as model from "../model";
import { Context } from "./context";
export declare const getUserCookies: (c: Context) => Promise<model.UserCookie[]>;
export declare const setUserCookie: (c: Context) => Promise<void>;
export declare const deleteAccountCookie: (c: Context, uuid: string) => Promise<void>;
export declare const deleteUserCookie: (c: Context, uuid: string) => Promise<void>;
