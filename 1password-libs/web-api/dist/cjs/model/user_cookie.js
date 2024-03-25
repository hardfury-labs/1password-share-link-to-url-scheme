"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(t, e, a, o) {
        void 0 === o && (o = a), Object.defineProperty(t, o, {
            enumerable: !0,
            get: function() {
                return e[a]
            }
        })
    } : function(t, e, a, o) {
        void 0 === o && (o = a), t[o] = e[a]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(t, e) {
        Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        })
    } : function(t, e) {
        t.default = e
    }),
    __importStar = this && this.__importStar || function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var a in t) "default" !== a && Object.prototype.hasOwnProperty.call(t, a) && __createBinding(e, t, a);
        return __setModuleDefault(e, t), e
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.UserCookie = void 0;
var util = __importStar(require("../util")),
    account_1 = require("./account"),
    UserCookie = function() {
        function t(t) {
            var e = this;
            this.setDomainBasedInfo = function() {
                e.countryCode = util.getCountryCodeFromDomain(e.accountDomain), e.server = util.getServerDomainFromAccountDomain(e.accountDomain)
            }, this.getSignInDomain = function() {
                return e.usingMyDomain ? account_1.MY_DOMAIN + "." + e.server : e.accountDomain
            }, this.update = function(t) {
                var a = !1;
                return e.userUuid !== t.userUuid && (e.userUuid = t.userUuid, a = !0), e.userEmail !== t.userEmail && (e.userEmail = t.userEmail, a = !0), e.userName !== t.userName && (e.userName = t.userName, a = !0), e.userAvatarURL !== t.userAvatarURL && (e.userAvatarURL = t.userAvatarURL, a = !0), e.usingMyDomain !== t.usingMyDomain && (e.usingMyDomain = t.usingMyDomain, a = !0), e.accountType !== t.accountType && (e.accountType = t.accountType, a = !0), e.accountName !== t.accountName && (e.accountName = t.accountName, a = !0), e.accountDomain !== t.accountDomain && (e.accountDomain = t.accountDomain, e.setDomainBasedInfo(), a = !0), e.accountAvatarURL !== t.accountAvatarURL && (e.accountAvatarURL = t.accountAvatarURL, a = !0), e.hasPrioritySupport !== t.hasPrioritySupport && (e.hasPrioritySupport = t.hasPrioritySupport, a = !0), a
            }, this.userUuid = t.userUuid, this.userEmail = t.userEmail, this.userName = t.userName, this.userAvatarURL = t.userAvatarURL, this.usingMyDomain = t.usingMyDomain, this.accountUuid = t.accountUuid, this.accountType = t.accountType, this.accountName = t.accountName, this.accountDomain = t.accountDomain, this.accountAvatarURL = t.accountAvatarURL, this.hasPrioritySupport = t.hasPrioritySupport, this.countryCode = util.getCountryCodeFromDomain(this.accountDomain), this.server = util.getServerDomainFromAccountDomain(this.accountDomain)
        }
        return t.prototype.toString = function() {
            return "[object UserCookie]"
        }, t
    }();
exports.UserCookie = UserCookie;