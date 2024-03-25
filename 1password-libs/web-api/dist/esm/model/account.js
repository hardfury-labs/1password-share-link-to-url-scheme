import {
    defaults
} from "lodash-es";
import {
    MFAType
} from "../action/mfa";
import {
    Promotion
} from "../api/billing/coupon";
import * as util from "../util";
import {
    Cache
} from "../util/cache";
import * as billing from "./billing";
export {
    Promotion
};
export var MY_DOMAIN = "my";
export var GENERATED_FAMILY_DOMAIN_PREFIX = "pg8-;";
var Account = function() {
    function t(e) {
        var i;
        this.uuid = e.uuid, this.type = e.type, this.avatar = e.avatar || "", this.domain = e.domain || "", this.inviteEmail = e.invite && e.invite.inviteEmailDomains || "", this.inviteSecret = e.invite && e.invite.inviteSecret || "", this.name = e.name || "", this.state = e.state, this.attrVersion = e.attrVersion, this.baseAvatarURL = e.baseAvatarURL, this.baseAttachmentURL = e.baseAttachmentURL, this.settings = e.settings ? defaults({}, e.settings, t.defaultSettings) : t.defaultSettings, this.hasNativeClient = !!e.userFlags && e.userFlags.hasNativeClient, this.hasNonSafariClient = !!e.userFlags && e.userFlags.hasNonSafariClient, this.hasPackages = !!e.userFlags && e.userFlags.hasPackages, this.mustShowIntegrations = !!e.userFlags && e.userFlags.mustShowIntegrations, this.mustMigrate = !!e.userFlags && e.userFlags.mustMigrate, this.hasRecoveryMembers = !!e.accountFlags && e.accountFlags.hasRecoveryMembers, this.activities = [], this.promotions = [], this.meta = {
            companySize: void 0
        }, this.counts = {
            groups: 0,
            invitations: 0,
            users: 0,
            vaults: 0
        }, this.subscription = billing.Subscription(), this.trialDays = (null === (i = e.billing) || void 0 === i ? void 0 : i.trialDays) || 0, this._cache = new Cache
    }
    return t.isValidType = function(t) {
        return "F" === t || "I" === t || "B" === t
    }, t.prototype.setAttrs = function(e) {
        this.uuid = e.uuid, this.type = e.type, this.avatar = e.avatar || "", this.domain = e.domain || "", e.invite && (this.inviteEmail = e.invite.inviteEmailDomains || "", this.inviteSecret = e.invite.inviteSecret || ""), this.name = e.name || "", this.state = e.state, this.attrVersion = e.attrVersion, this.baseAvatarURL = e.baseAvatarURL, this.baseAttachmentURL = e.baseAttachmentURL, e.settings ? this.settings = defaults({}, e.settings, t.defaultSettings) : this.settings = defaults({}, this.settings, t.defaultSettings), e.userFlags && (this.hasNativeClient = e.userFlags.hasNativeClient, this.hasNonSafariClient = e.userFlags.hasNonSafariClient, this.hasPackages = e.userFlags.hasPackages, this.mustShowIntegrations = e.userFlags.mustShowIntegrations, this.mustMigrate = e.userFlags.mustMigrate), e.accountFlags && (this.hasRecoveryMembers = e.accountFlags.hasRecoveryMembers), e.billing && (this.trialDays = e.billing.trialDays)
    }, Object.defineProperty(t.prototype, "hasFeature", {
        get: function() {
            return billing.Subscription.hasFeature(this.subscription)
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "isFamily", {
        get: function() {
            return "F" === this.type
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "isIndividual", {
        get: function() {
            return "I" === this.type
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "isBusiness", {
        get: function() {
            return "B" === this.type
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "isBackoffice", {
        get: function() {
            return "backoffice" === this.domain
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.urlHost = function(t) {
        return (this.isIndividual ? MY_DOMAIN : this.domain) + "." + t
    }, t.prototype.urlOrigin = function(t) {
        return "https://" + this.urlHost(t)
    }, t.prototype.supportsBetaFeatures = function() {
        var t = this.hasFeature;
        return t.mfaDuo || t.customTemplates || t.itemSharing || t.reports
    }, Object.defineProperty(t.prototype, "administratorsGroup", {
        get: function() {
            return this._cache.administratorsGroup
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "ownersGroup", {
        get: function() {
            return this._cache.ownersGroup
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "recoveryGroup", {
        get: function() {
            return this._cache.recoveryGroup
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "teamMembersGroup", {
        get: function() {
            return this._cache.teamMembersGroup
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "securityGroup", {
        get: function() {
            return this._cache.securityGroup
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "groups", {
        get: function() {
            return this._cache.getGroupsWithoutRecovery()
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.findGroup = function(t) {
        return this._cache.getGroup(t)
    }, t.prototype.setGroups = function(t) {
        this._cache.setGroups(t)
    }, t.prototype.pushGroup = function(t) {
        this._cache.groupsByUuid[t.uuid] = t, t.isTypeSecurity && (this._cache.securityGroup = t)
    }, t.prototype.removeGroup = function(t) {
        var e = util.getValidGroupUuid(t);
        delete this._cache.groupsByUuid[e]
    }, t.StateRegistered = "R", t.StateActive = "A", t.StateSuspended = "S", t.StateDeleted = "D", t.defaultMfaTypes = [MFAType.TOTP, MFAType.WebAuthn], t.defaultSettings = {
        slackURLs: {
            alerts: "",
            notifications: ""
        },
        betaIsEnabled: !1,
        richIconsAreDisabled: !1,
        duo: {
            isEnabled: !1,
            rememberDays: 30,
            integrationKey: "",
            secretKey: "",
            host: ""
        },
        support: {
            url: ""
        },
        provisioning: {
            isEnabled: !1,
            lastBridgeAuth: void 0,
            notificationEmails: "",
            monitoringEnabled: !1,
            monitoringDomain: "",
            deploymentOption: "",
            identityProvider: "",
            replyToEmail: {
                address: "",
                verified: !1
            }
        },
        masterPasswordPolicy: {
            type: "",
            customString: ""
        },
        twoFactor: {
            enforced: !1
        },
        clientRestrictions: {
            requireModernApps: !1
        }
    }, t
}();
export {
    Account
};
! function(t) {
    t.isProvisioningEnabled = function(t) {
        return !!t && t.settings.provisioning.isEnabled
    }, t.isInExtendedPromotionalTrial = function(t) {
        return (null === t || void 0 === t ? void 0 : t.trialDays) >= 60
    }
}(Account || (Account = {}));