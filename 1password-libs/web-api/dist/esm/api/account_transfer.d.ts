import * as t from "io-ts";
import { Session } from "./session";
export declare const AccountTransferDetails: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
    originAccount: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
        uuid: t.StringC;
    }>, t.PartialC<{
        domain: t.StringC;
    }>]>>;
    destinationAccount: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
        uuid: t.StringC;
    }>, t.PartialC<{
        domain: t.StringC;
    }>]>>;
}>, t.PartialC<{
    userCounts: t.ReadonlyC<t.TypeC<{
        pending: t.NumberC;
        complete: t.NumberC;
        declined: t.NumberC;
    }>>;
}>]>>;
export declare type AccountTransferDetails = t.TypeOf<typeof AccountTransferDetails>;
/** getAccountTransfersDetails retrieves the active account's account splitting record if it exists. */
export declare const getAccountTransfersDetails: (s: Session) => Promise<AccountTransferDetails>;
interface PostMigratingUsersRequest {
    readonly emails: readonly string[];
}
/** postMigratingUsers adds migrating user records for the account */
export declare const postMigratingUsers: (s: Session, body: PostMigratingUsersRequest) => Promise<void>;
export declare const enum MigratingUserState {
    Pending = "P",
    Complete = "C",
    Declined = "D",
    Inactive = "I"
}
/** patchMigratingUserState updates the state on the current user's migrating user record */
export declare const patchMigratingUserState: (s: Session, state: MigratingUserState.Complete | MigratingUserState.Declined) => Promise<void>;
/** suspendMigratedUser suspends the current user on the origin account after migrating */
export declare const suspendMigratedUser: (s: Session) => Promise<void>;
export {};
