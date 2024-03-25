import * as t from "io-ts";
import {
    unsafeDecodeAs
} from "../util";
import {
    PartialUser
} from "./partial_user";
export var ReportDashboardOverview = t.readonly(t.type({
    deletedUsersCount: t.number,
    invitedUsersCount: t.number,
    invitedUsersToConfirm: t.array(PartialUser),
    invitedUsersToConfirmCount: t.number,
    recoveredUsersToConfirm: t.array(PartialUser),
    recoveredUsersToConfirmCount: t.number,
    recoveringUsersCount: t.number,
    suspendedUsersCount: t.number,
    travelingUsers: t.array(PartialUser),
    travelingUsersCount: t.number
}));
export var getDashboardReport = function(r) {
    return r.get("/api/v1/report/dashboard").then(function(r) {
        if (!r) throw new Error("Server response is empty");
        return unsafeDecodeAs(ReportDashboardOverview)(r)
    })
};