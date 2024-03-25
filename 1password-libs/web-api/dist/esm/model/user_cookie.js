import * as util from "../util";
import {
    MY_DOMAIN
} from "./account";
var UserCookie = function() {
    function a(a) {
        var t = this;
        this.setDomainBasedInfo = function() {
            t.countryCode = util.getCountryCodeFromDomain(t.accountDomain), t.server = util.getServerDomainFromAccountDomain(t.accountDomain)
        }, this.getSignInDomain = function() {
            return t.usingMyDomain ? MY_DOMAIN + "." + t.server : t.accountDomain
        }, this.update = function(a) {
            var o = !1;
            return t.userUuid !== a.userUuid && (t.userUuid = a.userUuid, o = !0), t.userEmail !== a.userEmail && (t.userEmail = a.userEmail, o = !0), t.userName !== a.userName && (t.userName = a.userName, o = !0), t.userAvatarURL !== a.userAvatarURL && (t.userAvatarURL = a.userAvatarURL, o = !0), t.usingMyDomain !== a.usingMyDomain && (t.usingMyDomain = a.usingMyDomain, o = !0), t.accountType !== a.accountType && (t.accountType = a.accountType, o = !0), t.accountName !== a.accountName && (t.accountName = a.accountName, o = !0), t.accountDomain !== a.accountDomain && (t.accountDomain = a.accountDomain, t.setDomainBasedInfo(), o = !0), t.accountAvatarURL !== a.accountAvatarURL && (t.accountAvatarURL = a.accountAvatarURL, o = !0), t.hasPrioritySupport !== a.hasPrioritySupport && (t.hasPrioritySupport = a.hasPrioritySupport, o = !0), o
        }, this.userUuid = a.userUuid, this.userEmail = a.userEmail, this.userName = a.userName, this.userAvatarURL = a.userAvatarURL, this.usingMyDomain = a.usingMyDomain, this.accountUuid = a.accountUuid, this.accountType = a.accountType, this.accountName = a.accountName, this.accountDomain = a.accountDomain, this.accountAvatarURL = a.accountAvatarURL, this.hasPrioritySupport = a.hasPrioritySupport, this.countryCode = util.getCountryCodeFromDomain(this.accountDomain), this.server = util.getServerDomainFromAccountDomain(this.accountDomain)
    }
    return a.prototype.toString = function() {
        return "[object UserCookie]"
    }, a
}();
export {
    UserCookie
};