"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, o) {
        void 0 === o && (o = r), Object.defineProperty(e, o, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, o) {
        void 0 === o && (o = r), e[o] = t[r]
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
}), exports.userCookiesFromAPI = void 0;
var model = __importStar(require("../model")),
    userCookiesFromAPI = function(e) {
        return e.map(function(e) {
            return new model.UserCookie({
                userUuid: e.userUuid,
                userEmail: e.userEmail,
                userName: e.userName,
                userAvatarURL: e.userAvatarURL,
                usingMyDomain: !!e.usingMyDomain,
                accountUuid: e.accountUuid,
                accountType: e.accountType,
                accountName: e.accountName,
                accountDomain: e.accountDomain,
                accountAvatarURL: e.accountAvatarURL,
                hasPrioritySupport: !!e.hasPrioritySupport
            })
        })
    };
exports.userCookiesFromAPI = userCookiesFromAPI;