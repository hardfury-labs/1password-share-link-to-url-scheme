"use strict";
var __assign = this && this.__assign || function() {
    return (__assign = Object.assign || function(e) {
        for (var r, s = 1, o = arguments.length; s < o; s++)
            for (var t in r = arguments[s]) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
        return e
    }).apply(this, arguments)
};

function ReportDashboardOverview(e) {
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
}
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ReportDashboardOverview = void 0, exports.ReportDashboardOverview = ReportDashboardOverview;