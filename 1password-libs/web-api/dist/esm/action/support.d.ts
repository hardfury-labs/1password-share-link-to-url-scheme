import * as api from "../api/support";
import { Context } from "./context";
export declare const requestSupportEmail: (c: Context, email: string) => Promise<void>;
export declare const getSupportAccountsList: (c: Context, email: string, token: string) => Promise<api.SupportInfo[]>;
export declare const requestAccountDeletion: (c: Context, accountUuid: string, email: string, token: string) => Promise<void>;
