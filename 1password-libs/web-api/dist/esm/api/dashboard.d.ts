import * as t from "io-ts";
import { Session } from "./session";
export declare const ReportDashboardOverview: t.ReadonlyC<t.TypeC<{
    deletedUsersCount: t.NumberC;
    invitedUsersCount: t.NumberC;
    invitedUsersToConfirm: t.ArrayC<t.ReadonlyC<t.TypeC<{
        uuid: t.StringC;
        name: t.StringC;
        email: t.StringC;
        avatar: t.StringC;
        state: t.StringC;
        type: t.StringC;
    }>>>;
    invitedUsersToConfirmCount: t.NumberC;
    recoveredUsersToConfirm: t.ArrayC<t.ReadonlyC<t.TypeC<{
        uuid: t.StringC;
        name: t.StringC;
        email: t.StringC;
        avatar: t.StringC;
        state: t.StringC;
        type: t.StringC;
    }>>>;
    recoveredUsersToConfirmCount: t.NumberC;
    recoveringUsersCount: t.NumberC;
    suspendedUsersCount: t.NumberC;
    travelingUsers: t.ArrayC<t.ReadonlyC<t.TypeC<{
        uuid: t.StringC;
        name: t.StringC;
        email: t.StringC;
        avatar: t.StringC;
        state: t.StringC;
        type: t.StringC;
    }>>>;
    travelingUsersCount: t.NumberC;
}>>;
export declare type ReportDashboardOverview = t.TypeOf<typeof ReportDashboardOverview>;
export declare const getDashboardReport: (s: Session) => Promise<ReportDashboardOverview>;
