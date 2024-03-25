import {
    Named
} from "../model/fully_named";
import * as util from "../util";
export var compareSlackUsers = function() {
    util.combineComparators(function(e, r) {
        return e.hasTeamUser && !r.hasTeamUser ? 1 : !e.hasTeamUser && r.hasTeamUser ? -1 : 0
    }, function(e, r) {
        return e.hasPendingInvite && !r.hasPendingInvite ? 1 : !e.hasPendingInvite && r.hasPendingInvite ? -1 : 0
    }, util.compare.strings(function(e) {
        return e.name
    }), util.compare.strings(function(e) {
        return e.email
    }))
};
export var getSlackUserInitials = Named.getInitials;
export var slackAppHasScope = function(e, r) {
    return !(null === e || void 0 === e || !e.scope) && e.scope.split(",").some(function(e) {
        return e === r
    })
};
export var slackAppIsActive = function(e) {
    return "A" === e
};
export var isSlackGridApp = function(e) {
    return !!(null === e || void 0 === e ? void 0 : e.enterpriseUid) && !!e.isGranular
};
export var createEmptySlackApp = function(e) {
    return void 0 === e && (e = "N"), {
        state: e,
        notifChannelUid: "",
        alertChannelUid: "",
        scope: "",
        teamName: "",
        alertNotifTeamUid: "",
        enterpriseUid: "",
        enterpriseName: "",
        enterpriseUrl: "",
        enterpriseTeams: [],
        isGranular: !1
    }
};