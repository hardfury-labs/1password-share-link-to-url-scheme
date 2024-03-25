var __assign = this && this.__assign || function() {
    return (__assign = Object.assign || function(e) {
        for (var r, s = 1, n = arguments.length; s < n; s++)
            for (var t in r = arguments[s]) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
        return e
    }).apply(this, arguments)
};
export function ReportDashboardOverview(e) {
    return __assign({
        deletedUsersCount: 0,
        invitedUsersCount: 0,
        invitedUsersToConfirm: [],
        invitedUsersToConfirmCount: 0,
        recoveredUsersToConfirm: [],
        recoveredUsersToConfirmCount: 0,
        recoveringUsersCount: 0,
        suspendedUsersCount: 0,
        travelingUsers: [],
        travelingUsersCount: 0
    }, e)
};