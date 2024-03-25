var __awaiter = this && this.__awaiter || function(e, r, t, n) {
        return new(t || (t = Promise))(function(i, a) {
            function o(e) {
                try {
                    s(n.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function u(e) {
                try {
                    s(n.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function s(e) {
                var r;
                e.done ? i(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(o, u)
            }
            s((n = n.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, n, i, a, o = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function u(a) {
            return function(u) {
                return function(a) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (t = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                        switch (n = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                            case 0:
                            case 1:
                                i = a;
                                break;
                            case 4:
                                return o.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, n = a[1], a = [0];
                                continue;
                            case 7:
                                a = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                    o.label = a[1];
                                    break
                                }
                                if (6 === a[0] && o.label < i[1]) {
                                    o.label = i[1], i = a;
                                    break
                                }
                                if (i && o.label < i[2]) {
                                    o.label = i[2], o.ops.push(a);
                                    break
                                }
                                i[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        a = r.call(e, o)
                    } catch (e) {
                        a = [6, e], n = 0
                    } finally {
                        t = i = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, u])
            }
        }
    };
import * as api from "../api";
import * as model from "../model";
import * as parser from "../parser";
import * as util from "../util";
import {
    dateFromGolang
} from "../util";
import {
    getDomain
} from "./account";
import {
    getTaxAdvice
} from "./billing";
export var getRegisterURL = function(e, r, t, n) {
    return api.getSignupDetails(e.session, r + "?email=" + encodeURIComponent(t)).then(function(r) {
        var t = "B" === r.type ? r.domain : model.MY_DOMAIN;
        return n.set("l", r.language), "https://" + t + "." + e.config.server + "/register-account/" + r.uuid + "?" + n
    })
};
export var signUpAndGetInfo = function(e, r, t, n) {
    return api.signUpAndGetInfo(e.session, r, t, n).then(function(r) {
        var t = r.defaultBillingFrequency || api.billing.Frequency.Yearly,
            n = r.availablePlans.find(function(e) {
                return e.frequency === t
            }),
            i = {
                uuid: r.uuid,
                domain: r.domain,
                plan: n,
                tierName: r.tierName,
                trialEndsAt: dateFromGolang(r.trialEndsAt),
                taxAdvice: void 0,
                features: r.features,
                duplicateAccounts: r.duplicateAccounts || [],
                promoCode: r.promoCode
            };
        return getTaxAdvice(e, n.display.amount, "").then(function(e) {
            return i.taxAdvice = e, i
        }).catch(function() {
            return i
        })
    })
};
export var legacySignUpAccount = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, n, i;
        return __generator(this, function(a) {
            switch (a.label) {
                case 0:
                    return t = {
                        email: r.email,
                        domain: r.domain,
                        name: r.accountName,
                        type: r.accountType,
                        language: r.language,
                        promoCode: r.promoCode,
                        referrer: r.referrer,
                        source: r.source || "B",
                        stepUuid: r.stepUuid,
                        tierName: r.tierName
                    }, "B" !== r.accountType ? [3, 2] : [4, getDomain(e, r.accountName)];
                case 1:
                    return i = a.sent(), [3, 3];
                case 2:
                    i = model.MY_DOMAIN, a.label = 3;
                case 3:
                    return n = i, t.domain = n, "I" === r.accountType && (t.name = t.email), [4, api.legacySignUpAccount(e.session, t)];
                case 4:
                    return a.sent(), [2]
            }
        })
    })
};
export var signUpAccount = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, n, i, a, o;
        return __generator(this, function(u) {
            switch (u.label) {
                case 0:
                    return t = {
                        email: r.email,
                        domain: "",
                        name: r.accountName || r.userName,
                        type: r.accountType,
                        language: r.language,
                        promoCode: r.promoCode,
                        purchaseOrderToken: r.purchaseOrderToken,
                        stripePurchaseOrderToken: r.stripePurchaseOrderToken,
                        referrer: r.referrer,
                        source: r.source || "B",
                        stepUuid: r.stepUuid,
                        tierName: r.tierName,
                        companySize: r.companySize
                    }, "B" !== r.accountType ? [3, 2] : [4, getDomain(e, r.accountName)];
                case 1:
                    return i = u.sent(), [3, 3];
                case 2:
                    i = model.MY_DOMAIN, u.label = 3;
                case 3:
                    return n = i, t.domain !== model.MY_DOMAIN && (t.domain = n), [4, api.signUpAccount(e.session, t)];
                case 4:
                    return a = u.sent(), o = a.emailResendToken || void 0, [2, {
                        domain: n,
                        emailResendToken: o
                    }]
            }
        })
    })
};
export var getSignupDetails = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, api.getSignupDetails(e.session, r)];
                case 1:
                    return t = n.sent(), [2, parser.signupFromAPI(t)]
            }
        })
    })
};
export var updateServerSignup = function(e, r, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            try {
                return [2, api.updateSignupAccountType(e.session, r, t)]
            } catch (e) {
                throw console.error("[updateServerSignup] Failed to update signup details:", e), e
            }
            return [2]
        })
    })
};
var signupUUIDByContext = {};
export var registerAccount = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
                case 0:
                    return [4, beginAccountRegistration(e, r)];
                case 1:
                    return t.sent(), [2, completeAccountRegistration(e)]
            }
        })
    })
};
export var beginAccountRegistration = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, n;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    if (signupUUIDByContext[e.id] = r.signupUuid, e.account = new model.Account({
                            uuid: "",
                            type: r.accountType,
                            state: model.Account.StateRegistered,
                            name: r.accountName,
                            domain: r.domain,
                            avatar: r.accountAvatar || "",
                            attrVersion: 1,
                            createdAt: util.dateToGolang(new Date)
                        }), !r.name) throw new Error("Name is missing");
                    if (!e.account) throw new Error("Unexpected error, missing account.");
                    return t = r.secretKey || model.SecretKey.generate(), e.user = new model.OldUser({
                        email: r.email,
                        password: r.password,
                        language: r.language,
                        name: r.name,
                        newsletterPrefs: r.newsletterPrefs,
                        secretKey: t,
                        avatar: r.avatar
                    }), n = e, [4, model.Auth.generate({
                        email: r.email,
                        password: r.password,
                        secretKey: t
                    })];
                case 1:
                    return n.userAuth = i.sent(), [4, Promise.all([e.user.deriveMasterKey(), e.user.generateNewKeyset()])];
                case 2:
                    return i.sent(), [2]
            }
        })
    })
};
export var completeAccountRegistration = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, t, n, i, a, o, u;
        return __generator(this, function(s) {
            switch (s.label) {
                case 0:
                    if (!util.config.device) throw new Error("Missing device identifier");
                    if (r = util.config.device, !(t = e.user)) throw new Error("Missing user.");
                    if (!t.secretKey) throw new Error("Missing Secret Key.");
                    return [4, t.encryptActiveKeysetWithMasterKey()];
                case 1:
                    if (n = s.sent(), !(i = e.userAuth)) throw new Error("Missing auth for user.");
                    if (!(a = e.account)) throw new Error("Missing account.");
                    if (!(o = signupUUIDByContext[e.id])) throw new Error("Missing signup identifier.");
                    if (!(u = {
                            signupUuid: o,
                            user: {
                                email: t.email,
                                language: t.language,
                                name: t.name,
                                newsletterPrefs: t.newsletterPrefs,
                                accountKeyFormat: t.secretKey.format,
                                accountKeyUuid: t.secretKey.id,
                                avatar: t.avatar
                            },
                            account: {
                                name: a.name,
                                domain: a.domain,
                                type: a.type,
                                avatar: a.avatar
                            },
                            device: r,
                            keyset: n,
                            userAuth: model.Auth.getForUpload(i)
                        }).user.name) throw new Error("Name is missing");
                    return [2, api.postAccount(e.session, u)]
            }
        })
    })
};
var signupByContext = {};
export var beginUserSignup = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, n;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return signupByContext[e.id] = r, t = r.secretKey || model.SecretKey.generate(), e.user = new model.OldUser({
                        email: r.email,
                        password: r.password,
                        language: r.language,
                        name: r.name,
                        secretKey: t,
                        avatar: r.avatar,
                        newsletterPrefs: r.newsletterPrefs
                    }), n = e, [4, model.Auth.generate({
                        email: r.email,
                        password: r.password,
                        secretKey: t
                    })];
                case 1:
                    return n.userAuth = i.sent(), [4, Promise.all([e.user.deriveMasterKey(), e.user.generateNewKeyset()])];
                case 2:
                    return i.sent(), [2]
            }
        })
    })
};
export var completeUserSignup = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, t, n, i, a;
        return __generator(this, function(o) {
            switch (o.label) {
                case 0:
                    if (!util.config.device) throw new Error("Missing device identifier");
                    if (!(r = e.user)) throw new Error("Missing user.");
                    if (!r.secretKey) throw new Error("Missing Secret Key.");
                    return [4, r.encryptActiveKeysetWithMasterKey()];
                case 1:
                    if (t = o.sent(), !(n = e.userAuth)) throw new Error("Missing auth for user.");
                    if (!(i = signupByContext[e.id])) throw new Error("Missing signup.");
                    if (1 === i.source) return a = {
                        invite: {
                            uuid: i.uuid,
                            token: i.token
                        },
                        user: {
                            email: r.email,
                            language: r.language,
                            name: r.name,
                            newsletterPrefs: r.newsletterPrefs,
                            accountKeyFormat: r.secretKey.format,
                            accountKeyUuid: r.secretKey.id,
                            avatar: r.avatar
                        },
                        device: util.config.device,
                        keyset: t,
                        userAuth: model.Auth.getForUpload(n)
                    }, [2, api.signUpUser(e.session, a)];
                    if (2 === i.source) return a = {
                        accountKeyFormat: r.secretKey.format,
                        accountKeyUuid: r.secretKey.id,
                        device: util.config.device,
                        keyset: t,
                        language: r.language,
                        token: i.token,
                        userAuth: model.Auth.getForUpload(n),
                        uuid: i.uuid
                    }, [2, api.continueRecovery(e.session, a)];
                    if (3 === i.source) return a = {
                        accountKeyFormat: r.secretKey.format,
                        accountKeyUuid: r.secretKey.id,
                        device: util.config.device,
                        keyset: t,
                        language: r.language,
                        token: i.token,
                        userAuth: model.Auth.getForUpload(n),
                        uuid: i.uuid
                    }, [2, api.acceptProvision(e.session, a)];
                    throw new Error("Invalid signup source")
            }
        })
    })
};
export var resendVerificationEmail = function(e, r) {
    return api.resendVerificationEmail(e.session, r)
};