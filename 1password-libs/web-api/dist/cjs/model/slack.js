"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, a) {
        void 0 === a && (a = r), Object.defineProperty(e, a, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, a) {
        void 0 === a && (a = r), e[a] = t[r]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        })
    } : function(e, t) {
        e.default = t
    }),
    __importStar = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && __createBinding(t, e, r);
        return __setModuleDefault(t, e), t
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createEmptySlackApp = exports.isSlackGridApp = exports.slackAppIsActive = exports.slackAppHasScope = exports.getSlackUserInitials = exports.compareSlackUsers = void 0;
var fully_named_1 = require("../model/fully_named"),
    util = __importStar(require("../util")),
    compareSlackUsers = function() {
        util.combineComparators(function(e, t) {
            return e.hasTeamUser && !t.hasTeamUser ? 1 : !e.hasTeamUser && t.hasTeamUser ? -1 : 0
        }, function(e, t) {
            return e.hasPendingInvite && !t.hasPendingInvite ? 1 : !e.hasPendingInvite && t.hasPendingInvite ? -1 : 0
        }, util.compare.strings(function(e) {
            return e.name
        }), util.compare.strings(function(e) {
            return e.email
        }))
    };
exports.compareSlackUsers = compareSlackUsers, exports.getSlackUserInitials = fully_named_1.Named.getInitials;
var slackAppHasScope = function(e, t) {
    return !(null === e || void 0 === e || !e.scope) && e.scope.split(",").some(function(e) {
        return e === t
    })
};
exports.slackAppHasScope = slackAppHasScope;
var slackAppIsActive = function(e) {
    return "A" === e
};
exports.slackAppIsActive = slackAppIsActive;
var isSlackGridApp = function(e) {
    return !!(null === e || void 0 === e ? void 0 : e.enterpriseUid) && !!e.isGranular
};
exports.isSlackGridApp = isSlackGridApp;
var createEmptySlackApp = function(e) {
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
exports.createEmptySlackApp = createEmptySlackApp;