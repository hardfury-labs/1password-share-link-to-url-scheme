import * as t from "io-ts";
import { Session } from "./session";
declare const GetEmailSubscriptionsResponse: t.ReadonlyC<t.TypeC<{
    subscriptions: t.TypeC<{
        newsletter: t.BooleanC;
        events: t.BooleanC;
        content: t.BooleanC;
        announcements: t.BooleanC;
        unsubscribed: t.BooleanC;
    }>;
}>>;
export declare type GetEmailSubscriptionsResponse = t.TypeOf<typeof GetEmailSubscriptionsResponse>;
/**
 * Retrieves the current user's marketing email subscription status from Marketo
 */
export declare const getEmailSubscriptions: (s: Session) => Promise<GetEmailSubscriptionsResponse>;
/**
 * Updates the current user's marketing email subscriptions in Marketo
 */
export declare const updateEmailSubscriptions: (s: Session, subscriptions: GetEmailSubscriptionsResponse) => Promise<void>;
export {};
