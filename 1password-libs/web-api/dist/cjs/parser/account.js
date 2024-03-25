"use strict";
var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var t, r = 1, i = arguments.length; r < i; r++)
                for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        }).apply(this, arguments)
    },
    __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, i) {
        void 0 === i && (i = r), Object.defineProperty(e, i, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, i) {
        void 0 === i && (i = r), e[i] = t[r]
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
}), exports.accountToAPI = exports.parseAccount = void 0;
var model = __importStar(require("../model")),
    util = __importStar(require("../util")),
    make_promise_1 = require("../util/make_promise"),
    billing = __importStar(require("./billing")),
    date_1 = require("./date"),
    group_1 = require("./group"),
    person_1 = require("./person"),
    codeLocation = "parser/account",
    makePromise = make_promise_1.makePromise(codeLocation),
    parseAccount = function(e, t, r) {
        return makePromise("parseAccount", function() {
            if (!t) return Promise.reject(new Error("Server JSON is empty"));
            e.account ? e.account.setAttrs(t) : e.account = new model.Account(t);
            var i = e.account;
            if (e.account.createdAt = date_1.dateFromAPI(t.createdAt), t.me && e.setUserUUID(t.me.uuid), t.billing) {
                e.account.trialStartedAt = date_1.dateFromAPI(t.billing.trialStartedAt), e.account.trialDays = t.billing.trialDays;
                var n = t.tier ? billing.tierFromAPI(t.tier, e.account.subscription.tier) : e.account.subscription.tier;
                e.account.subscription = __assign(__assign({}, e.account.subscription), {
                    freezesAt: t.billing.freezesAt,
                    guests: t.billing.guests,
                    members: t.billing.members,
                    provider: t.billing.provider,
                    status: t.billing.status,
                    storageUsed: t.storageUsed || 0,
                    tier: n,
                    settings: __assign(__assign({}, {
                        billingCompanyName: "",
                        billingAddress: "",
                        billingEmails: ""
                    }), t.billing.settings)
                })
            }
            t.meta && (e.account.meta = t.meta), t.promotions && (e.account.promotions = t.promotions), t.counts && (e.account.counts = t.counts);
            var o, s, a = Promise.resolve();
            if (!e.user) return Promise.reject(new Error("Missing user"));
            if (t.users) {
                var u = t.users;
                a = a.then(function() {
                    return person_1.parsePeople(e, u, r)
                }).then(function(e) {
                    o = e
                })
            }
            if (t.groups) {
                var c = t.groups;
                a = a.then(function() {
                    return group_1.parseGroups(e, c)
                }).then(function(e) {
                    i.setGroups(e)
                })
            }
            if (t.me) {
                var l = t.me;
                a = a.then(function() {
                    var t = model.Person.Attr.PubKey | model.Person.Attr.Groups | model.Person.Attr.VaultAccess;
                    return person_1.parsePerson(e, l, t, e.user)
                }).then(function(t) {
                    return e.config.inWebView || (e.session.setLanguage(t.language), e.nc.emit(util.notification.LanguageRefreshed)), s = t, Promise.resolve([])
                })
            }
            return a.then(function() {
                return e.account ? Promise.resolve({
                    account: e.account,
                    activeUser: s,
                    users: o
                }) : Promise.reject(new Error("Missing account"))
            })
        })
    };
exports.parseAccount = parseAccount;
var accountToAPI = function(e) {
    if (!e.uuid) throw new Error("Account missing uuid");
    if (!e.type) throw new Error("Account missing type");
    return {
        uuid: e.uuid,
        type: e.type,
        attrVersion: e.attrVersion,
        avatar: e.avatar,
        createdAt: date_1.dateToAPI(e.createdAt),
        domain: e.domain,
        invite: {
            inviteEmailDomains: e.inviteEmail,
            inviteSecret: e.inviteSecret
        },
        name: e.name,
        state: e.state,
        trialStartedAt: date_1.dateToAPI(e.trialStartedAt),
        trialDays: e.trialDays,
        settings: e.settings,
        billingSettings: e.subscription.settings
    }
};
exports.accountToAPI = accountToAPI;