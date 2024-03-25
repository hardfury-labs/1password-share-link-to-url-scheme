"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, r, t, o) {
        void 0 === o && (o = t), Object.defineProperty(e, o, {
            enumerable: !0,
            get: function() {
                return r[t]
            }
        })
    } : function(e, r, t, o) {
        void 0 === o && (o = t), e[o] = r[t]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(e, r) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: r
        })
    } : function(e, r) {
        e.default = r
    }),
    __importStar = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var r = {};
        if (null != e)
            for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && __createBinding(r, e, t);
        return __setModuleDefault(r, e), r
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getDashboardReport = exports.ReportDashboardOverview = void 0;
var t = __importStar(require("io-ts")),
    util_1 = require("../util"),
    partial_user_1 = require("./partial_user");
exports.ReportDashboardOverview = t.readonly(t.type({
    deletedUsersCount: t.number,
    invitedUsersCount: t.number,
    invitedUsersToConfirm: t.array(partial_user_1.PartialUser),
    invitedUsersToConfirmCount: t.number,
    recoveredUsersToConfirm: t.array(partial_user_1.PartialUser),
    recoveredUsersToConfirmCount: t.number,
    recoveringUsersCount: t.number,
    suspendedUsersCount: t.number,
    travelingUsers: t.array(partial_user_1.PartialUser),
    travelingUsersCount: t.number
}));
var getDashboardReport = function(e) {
    return e.get("/api/v1/report/dashboard").then(function(e) {
        if (!e) throw new Error("Server response is empty");
        return util_1.unsafeDecodeAs(exports.ReportDashboardOverview)(e)
    })
};
exports.getDashboardReport = getDashboardReport;