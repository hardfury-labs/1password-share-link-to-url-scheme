import { AccountOverview } from "../api";
import { Context } from "./context";
/** getAccountOverview returns a promise containing the account overview from /api/v2/overview **/
export declare const getAccountOverview: (c: Context) => Promise<AccountOverview>;
