var __assign = this && this.__assign || function() {
    return (__assign = Object.assign || function(t) {
        for (var e, r = 1, i = arguments.length; r < i; r++)
            for (var n in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t
    }).apply(this, arguments)
};
import * as model from "../model";
import * as util from "../util";
import {
    makePromise as mp
} from "../util/make_promise";
import * as billing from "./billing";
import {
    dateFromAPI,
    dateToAPI
} from "./date";
import {
    parseGroups
} from "./group";
import {
    parsePeople,
    parsePerson
} from "./person";
var codeLocation = "parser/account",
    makePromise = mp(codeLocation);
export var parseAccount = function(t, e, r) {
    return makePromise("parseAccount", function() {
        if (!e) return Promise.reject(new Error("Server JSON is empty"));
        t.account ? t.account.setAttrs(e) : t.account = new model.Account(e);
        var i = t.account;
        if (t.account.createdAt = dateFromAPI(e.createdAt), e.me && t.setUserUUID(e.me.uuid), e.billing) {
            t.account.trialStartedAt = dateFromAPI(e.billing.trialStartedAt), t.account.trialDays = e.billing.trialDays;
            var n = e.tier ? billing.tierFromAPI(e.tier, t.account.subscription.tier) : t.account.subscription.tier;
            t.account.subscription = __assign(__assign({}, t.account.subscription), {
                freezesAt: e.billing.freezesAt,
                guests: e.billing.guests,
                members: e.billing.members,
                provider: e.billing.provider,
                status: e.billing.status,
                storageUsed: e.storageUsed || 0,
                tier: n,
                settings: __assign(__assign({}, {
                    billingCompanyName: "",
                    billingAddress: "",
                    billingEmails: ""
                }), e.billing.settings)
            })
        }
        e.meta && (t.account.meta = e.meta), e.promotions && (t.account.promotions = e.promotions), e.counts && (t.account.counts = e.counts);
        var o, s, a = Promise.resolve();
        if (!t.user) return Promise.reject(new Error("Missing user"));
        if (e.users) {
            var u = e.users;
            a = a.then(function() {
                return parsePeople(t, u, r)
            }).then(function(t) {
                o = t
            })
        }
        if (e.groups) {
            var c = e.groups;
            a = a.then(function() {
                return parseGroups(t, c)
            }).then(function(t) {
                i.setGroups(t)
            })
        }
        if (e.me) {
            var m = e.me;
            a = a.then(function() {
                var e = model.Person.Attr.PubKey | model.Person.Attr.Groups | model.Person.Attr.VaultAccess;
                return parsePerson(t, m, e, t.user)
            }).then(function(e) {
                return t.config.inWebView || (t.session.setLanguage(e.language), t.nc.emit(util.notification.LanguageRefreshed)), s = e, Promise.resolve([])
            })
        }
        return a.then(function() {
            return t.account ? Promise.resolve({
                account: t.account,
                activeUser: s,
                users: o
            }) : Promise.reject(new Error("Missing account"))
        })
    })
};
export var accountToAPI = function(t) {
    if (!t.uuid) throw new Error("Account missing uuid");
    if (!t.type) throw new Error("Account missing type");
    return {
        uuid: t.uuid,
        type: t.type,
        attrVersion: t.attrVersion,
        avatar: t.avatar,
        createdAt: dateToAPI(t.createdAt),
        domain: t.domain,
        invite: {
            inviteEmailDomains: t.inviteEmail,
            inviteSecret: t.inviteSecret
        },
        name: t.name,
        state: t.state,
        trialStartedAt: dateToAPI(t.trialStartedAt),
        trialDays: t.trialDays,
        settings: t.settings,
        billingSettings: t.subscription.settings
    }
};