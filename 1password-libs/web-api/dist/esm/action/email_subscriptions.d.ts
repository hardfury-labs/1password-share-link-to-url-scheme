import * as api from "../api";
import { Context } from "./context";
/**
 * Retrieves the current user's marketing email subscription status from Marketo
 */
export declare const getEmailSubscriptions: (c: Context) => Promise<api.GetEmailSubscriptionsResponse>;
/**
 * Updates the current user's marketing email subscriptions
 */
export declare const updateEmailSubscriptions: (c: Context, subscriptions: api.GetEmailSubscriptionsResponse) => Promise<void>;
