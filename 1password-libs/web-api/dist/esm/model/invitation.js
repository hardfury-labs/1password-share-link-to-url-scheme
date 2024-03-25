import moment from "moment";
import {
    dateFromGolang
} from "../util/date";
export var EmailProviderDomains = ["126.com", "163.com", "aim.com", "airmail.com", "aol.com", "att.net", "bellsouth.net", "charter.net", "comcast.net", "cox.net", "earthlink.net", "facebook.com", "fastmail.com", "fastmail.fm", "gmail.com", "guerrillamail.com", "hotmail.com", "hushmail.com", "icloud.com", "inbox.ru", "juno.com", "live.com", "mac.com", "mail.ru", "mailinator.com", "me.com", "msn.com", "outlook.com", "protonmail.com", "qq.com", "sbcglobal.net", "snkmail.com", "tempmail.us", "thrma.com", "trbvm.com", "verizon.net", "yahoo.com", "yandex.com", "yandex.ru", "yp.ycare.de", "zoho.com"];
var Invitation = function() {
    function t(t) {
        this.uuid = t.uuid, this.email = t.email || "", this.accountName = t.accountName || "", this.accountType = t.accountType || "", this.language = t.language, this.state = t.state || "", this.type = t.type || "", this.sentAt = dateFromGolang(t.sentAt), this.timeout = t.timeout || 0, this.revokedAt = dateFromGolang(t.revokedAt), this.acceptedAt = dateFromGolang(t.acceptedAt)
    }
    return Object.defineProperty(t.prototype, "expiresAt", {
        get: function() {
            return moment(this.sentAt).add(this.timeout, "hours").toDate()
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "isExpired", {
        get: function() {
            return Date.now() - this.expiresAt.valueOf() > 0
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "joined", {
        get: function() {},
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "lastAuthAt", {
        get: function() {},
        enumerable: !1,
        configurable: !0
    }), t.prototype.travelModeIsEnabled = function() {
        return !1
    }, t.StatePending = "P", t.StateAccepted = "A", t.StateRevoked = "R", t.TypeRegular = "R", t.TypeGuest = "G", t
}();
export {
    Invitation
};
var InviteVault = function() {
    return function(t) {
        this.acl = t.acl, this.uuid = t.uuid
    }
}();
export {
    InviteVault
};
var InviteVaultList = function() {
    return function(t) {
        this.shouldConfirm = t.shouldConfirm, this.vaults = t.vaults
    }
}();
export {
    InviteVaultList
};