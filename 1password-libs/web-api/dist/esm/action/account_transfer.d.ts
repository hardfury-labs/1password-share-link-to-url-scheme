import * as t from "io-ts";
import * as api from "../api";
import { MigratingUserState } from "../api";
import { Context } from "./context";
export declare type AccountTransferDetails = api.AccountTransferDetails;
/**
 * getAccountTransfersDetails fetches the origin account UUID from the server if it exists.
 */
export declare const getAccountTransfersDetails: (c: Context) => Promise<AccountTransferDetails>;
/**
 * addMigratingUsers adds migrating user records for the account
 */
export declare const addMigratingUsers: (c: Context, emails: readonly string[]) => Promise<void>;
export declare const MigratingUserEmails: t.ReadonlyC<t.ArrayC<t.StringC>>;
export declare type MigratingUserEmails = t.TypeOf<typeof MigratingUserEmails>;
/**
 * addMigratingUsers takes a CSV value and parses/validates it returning migrating user emails.
 */
export declare const parseMigratingUsersCsv: (csv: string) => readonly string[];
export { MigratingUserState };
/**
 * updateMigratingUserState updates the state on the current user's migrating user record
 */
export declare const updateMigratingUserState: (c: Context, state: MigratingUserState.Complete | MigratingUserState.Declined) => Promise<void>;
/** suspendMigratedUser suspends the current user on the origin account after migrating */
export declare const suspendMigratedUser: (c: Context) => Promise<void>;
