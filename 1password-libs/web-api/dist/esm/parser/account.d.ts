import { Context } from "../action/context";
import * as api from "../api";
import * as model from "../model";
export interface ParsedAccount {
    readonly account: model.Account;
    readonly activeUser: model.Person | undefined;
    readonly users: model.Person[] | undefined;
}
export declare const parseAccount: (c: Context, json: api.Account, findCachedUser: (uuid: string) => model.Person | undefined) => Promise<ParsedAccount>;
export declare const accountToAPI: (m: model.Account) => api.Account;
