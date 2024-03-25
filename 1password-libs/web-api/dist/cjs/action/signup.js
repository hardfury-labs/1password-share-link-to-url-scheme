"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
        void 0 === n && (n = r), Object.defineProperty(e, n, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, n) {
        void 0 === n && (n = r), e[n] = t[r]
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
    },
    __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(i, a) {
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
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(o, u)
            }
            s((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, i, a, o = {
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
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
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
                        a = t.call(e, o)
                    } catch (e) {
                        a = [6, e], n = 0
                    } finally {
                        r = i = 0
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
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.resendVerificationEmail = exports.completeUserSignup = exports.beginUserSignup = exports.completeAccountRegistration = exports.beginAccountRegistration = exports.registerAccount = exports.updateServerSignup = exports.getSignupDetails = exports.signUpAccount = exports.legacySignUpAccount = exports.signUpAndGetInfo = exports.getRegisterURL = void 0;
var api = __importStar(require("../api")),
    model = __importStar(require("../model")),
    parser = __importStar(require("../parser")),
    util = __importStar(require("../util")),
    util_1 = require("../util"),
    account_1 = require("./account"),
    billing_1 = require("./billing"),
    getRegisterURL = function(e, t, r, n) {
        return api.getSignupDetails(e.session, t + "?email=" + encodeURIComponent(r)).then(function(t) {
            var r = "B" === t.type ? t.domain : model.MY_DOMAIN;
            return n.set("l", t.language), "https://" + r + "." + e.config.server + "/register-account/" + t.uuid + "?" + n
        })
    };
exports.getRegisterURL = getRegisterURL;
var signUpAndGetInfo = function(e, t, r, n) {
    return api.signUpAndGetInfo(e.session, t, r, n).then(function(t) {
        var r = t.defaultBillingFrequency || api.billing.Frequency.Yearly,
            n = t.availablePlans.find(function(e) {
                return e.frequency === r
            }),
            i = {
                uuid: t.uuid,
                domain: t.domain,
                plan: n,
                tierName: t.tierName,
                trialEndsAt: util_1.dateFromGolang(t.trialEndsAt),
                taxAdvice: void 0,
                features: t.features,
                duplicateAccounts: t.duplicateAccounts || [],
                promoCode: t.promoCode
            };
        return billing_1.getTaxAdvice(e, n.display.amount, "").then(function(e) {
            return i.taxAdvice = e, i
        }).catch(function() {
            return i
        })
    })
};
exports.signUpAndGetInfo = signUpAndGetInfo;
var legacySignUpAccount = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, n, i;
        return __generator(this, function(a) {
            switch (a.label) {
                case 0:
                    return r = {
                        email: t.email,
                        domain: t.domain,
                        name: t.accountName,
                        type: t.accountType,
                        language: t.language,
                        promoCode: t.promoCode,
                        referrer: t.referrer,
                        source: t.source || "B",
                        stepUuid: t.stepUuid,
                        tierName: t.tierName
                    }, "B" !== t.accountType ? [3, 2] : [4, account_1.getDomain(e, t.accountName)];
                case 1:
                    return i = a.sent(), [3, 3];
                case 2:
                    i = model.MY_DOMAIN, a.label = 3;
                case 3:
                    return n = i, r.domain = n, "I" === t.accountType && (r.name = r.email), [4, api.legacySignUpAccount(e.session, r)];
                case 4:
                    return a.sent(), [2]
            }
        })
    })
};
exports.legacySignUpAccount = legacySignUpAccount;
var signUpAccount = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, n, i, a, o;
        return __generator(this, function(u) {
            switch (u.label) {
                case 0:
                    return r = {
                        email: t.email,
                        domain: "",
                        name: t.accountName || t.userName,
                        type: t.accountType,
                        language: t.language,
                        promoCode: t.promoCode,
                        purchaseOrderToken: t.purchaseOrderToken,
                        stripePurchaseOrderToken: t.stripePurchaseOrderToken,
                        referrer: t.referrer,
                        source: t.source || "B",
                        stepUuid: t.stepUuid,
                        tierName: t.tierName,
                        companySize: t.companySize
                    }, "B" !== t.accountType ? [3, 2] : [4, account_1.getDomain(e, t.accountName)];
                case 1:
                    return i = u.sent(), [3, 3];
                case 2:
                    i = model.MY_DOMAIN, u.label = 3;
                case 3:
                    return n = i, r.domain !== model.MY_DOMAIN && (r.domain = n), [4, api.signUpAccount(e.session, r)];
                case 4:
                    return a = u.sent(), o = a.emailResendToken || void 0, [2, {
                        domain: n,
                        emailResendToken: o
                    }]
            }
        })
    })
};
exports.signUpAccount = signUpAccount;
var getSignupDetails = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, api.getSignupDetails(e.session, t)];
                case 1:
                    return r = n.sent(), [2, parser.signupFromAPI(r)]
            }
        })
    })
};
exports.getSignupDetails = getSignupDetails;
var updateServerSignup = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            try {
                return [2, api.updateSignupAccountType(e.session, t, r)]
            } catch (e) {
                throw console.error("[updateServerSignup] Failed to update signup details:", e), e
            }
            return [2]
        })
    })
};
exports.updateServerSignup = updateServerSignup;
var signupUUIDByContext = {},
    registerAccount = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, exports.beginAccountRegistration(e, t)];
                    case 1:
                        return r.sent(), [2, exports.completeAccountRegistration(e)]
                }
            })
        })
    };
exports.registerAccount = registerAccount;
var beginAccountRegistration = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, n;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    if (signupUUIDByContext[e.id] = t.signupUuid, e.account = new model.Account({
                            uuid: "",
                            type: t.accountType,
                            state: model.Account.StateRegistered,
                            name: t.accountName,
                            domain: t.domain,
                            avatar: t.accountAvatar || "",
                            attrVersion: 1,
                            createdAt: util.dateToGolang(new Date)
                        }), !t.name) throw new Error("Name is missing");
                    if (!e.account) throw new Error("Unexpected error, missing account.");
                    return r = t.secretKey || model.SecretKey.generate(), e.user = new model.OldUser({
                        email: t.email,
                        password: t.password,
                        language: t.language,
                        name: t.name,
                        newsletterPrefs: t.newsletterPrefs,
                        secretKey: r,
                        avatar: t.avatar
                    }), n = e, [4, model.Auth.generate({
                        email: t.email,
                        password: t.password,
                        secretKey: r
                    })];
                case 1:
                    return n.userAuth = i.sent(), [4, Promise.all([e.user.deriveMasterKey(), e.user.generateNewKeyset()])];
                case 2:
                    return i.sent(), [2]
            }
        })
    })
};
exports.beginAccountRegistration = beginAccountRegistration;
var completeAccountRegistration = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, r, n, i, a, o, u;
        return __generator(this, function(s) {
            switch (s.label) {
                case 0:
                    if (!util.config.device) throw new Error("Missing device identifier");
                    if (t = util.config.device, !(r = e.user)) throw new Error("Missing user.");
                    if (!r.secretKey) throw new Error("Missing Secret Key.");
                    return [4, r.encryptActiveKeysetWithMasterKey()];
                case 1:
                    if (n = s.sent(), !(i = e.userAuth)) throw new Error("Missing auth for user.");
                    if (!(a = e.account)) throw new Error("Missing account.");
                    if (!(o = signupUUIDByContext[e.id])) throw new Error("Missing signup identifier.");
                    if (!(u = {
                            signupUuid: o,
                            user: {
                                email: r.email,
                                language: r.language,
                                name: r.name,
                                newsletterPrefs: r.newsletterPrefs,
                                accountKeyFormat: r.secretKey.format,
                                accountKeyUuid: r.secretKey.id,
                                avatar: r.avatar
                            },
                            account: {
                                name: a.name,
                                domain: a.domain,
                                type: a.type,
                                avatar: a.avatar
                            },
                            device: t,
                            keyset: n,
                            userAuth: model.Auth.getForUpload(i)
                        }).user.name) throw new Error("Name is missing");
                    return [2, api.postAccount(e.session, u)]
            }
        })
    })
};
exports.completeAccountRegistration = completeAccountRegistration;
var signupByContext = {},
    beginUserSignup = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, n;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return signupByContext[e.id] = t, r = t.secretKey || model.SecretKey.generate(), e.user = new model.OldUser({
                            email: t.email,
                            password: t.password,
                            language: t.language,
                            name: t.name,
                            secretKey: r,
                            avatar: t.avatar,
                            newsletterPrefs: t.newsletterPrefs
                        }), n = e, [4, model.Auth.generate({
                            email: t.email,
                            password: t.password,
                            secretKey: r
                        })];
                    case 1:
                        return n.userAuth = i.sent(), [4, Promise.all([e.user.deriveMasterKey(), e.user.generateNewKeyset()])];
                    case 2:
                        return i.sent(), [2]
                }
            })
        })
    };
exports.beginUserSignup = beginUserSignup;
var completeUserSignup = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, r, n, i, a;
        return __generator(this, function(o) {
            switch (o.label) {
                case 0:
                    if (!util.config.device) throw new Error("Missing device identifier");
                    if (!(t = e.user)) throw new Error("Missing user.");
                    if (!t.secretKey) throw new Error("Missing Secret Key.");
                    return [4, t.encryptActiveKeysetWithMasterKey()];
                case 1:
                    if (r = o.sent(), !(n = e.userAuth)) throw new Error("Missing auth for user.");
                    if (!(i = signupByContext[e.id])) throw new Error("Missing signup.");
                    if (1 === i.source) return a = {
                        invite: {
                            uuid: i.uuid,
                            token: i.token
                        },
                        user: {
                            email: t.email,
                            language: t.language,
                            name: t.name,
                            newsletterPrefs: t.newsletterPrefs,
                            accountKeyFormat: t.secretKey.format,
                            accountKeyUuid: t.secretKey.id,
                            avatar: t.avatar
                        },
                        device: util.config.device,
                        keyset: r,
                        userAuth: model.Auth.getForUpload(n)
                    }, [2, api.signUpUser(e.session, a)];
                    if (2 === i.source) return a = {
                        accountKeyFormat: t.secretKey.format,
                        accountKeyUuid: t.secretKey.id,
                        device: util.config.device,
                        keyset: r,
                        language: t.language,
                        token: i.token,
                        userAuth: model.Auth.getForUpload(n),
                        uuid: i.uuid
                    }, [2, api.continueRecovery(e.session, a)];
                    if (3 === i.source) return a = {
                        accountKeyFormat: t.secretKey.format,
                        accountKeyUuid: t.secretKey.id,
                        device: util.config.device,
                        keyset: r,
                        language: t.language,
                        token: i.token,
                        userAuth: model.Auth.getForUpload(n),
                        uuid: i.uuid
                    }, [2, api.acceptProvision(e.session, a)];
                    throw new Error("Invalid signup source")
            }
        })
    })
};
exports.completeUserSignup = completeUserSignup;
var resendVerificationEmail = function(e, t) {
    return api.resendVerificationEmail(e.session, t)
};
exports.resendVerificationEmail = resendVerificationEmail;