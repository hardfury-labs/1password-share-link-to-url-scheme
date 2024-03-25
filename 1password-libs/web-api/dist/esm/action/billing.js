var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(r) {
            for (var e, t = 1, i = arguments.length; t < i; t++)
                for (var n in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
            return r
        }).apply(this, arguments)
    },
    __awaiter = this && this.__awaiter || function(r, e, t, i) {
        return new(t || (t = Promise))(function(n, o) {
            function a(r) {
                try {
                    u(i.next(r))
                } catch (r) {
                    o(r)
                }
            }

            function s(r) {
                try {
                    u(i.throw(r))
                } catch (r) {
                    o(r)
                }
            }

            function u(r) {
                var e;
                r.done ? n(r.value) : (e = r.value, e instanceof t ? e : new t(function(r) {
                    r(e)
                })).then(a, s)
            }
            u((i = i.apply(r, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(r, e) {
        var t, i, n, o, a = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function s(o) {
            return function(s) {
                return function(o) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (t = 1, i && (n = 2 & o[0] ? i.return : o[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, o[1])).done) return n;
                        switch (i = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                            case 0:
                            case 1:
                                n = o;
                                break;
                            case 4:
                                return a.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, i = o[1], o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < n[1]) {
                                    a.label = n[1], n = o;
                                    break
                                }
                                if (n && a.label < n[2]) {
                                    a.label = n[2], a.ops.push(o);
                                    break
                                }
                                n[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        o = e.call(r, a)
                    } catch (r) {
                        o = [6, r], i = 0
                    } finally {
                        t = n = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, s])
            }
        }
    };
import {
    some
} from "lodash-es";
import * as api from "../api";
import * as parser from "../parser";
import * as util from "../util";
import {
    makePromise as mp
} from "../util/make_promise";
import {
    getAccountWithAttrs
} from "./account";
import {
    changed
} from "./context";
var codeLocation = "action/billing",
    makePromise = mp(codeLocation);
export var getSubscription = function(r) {
    return makePromise("getSubscription", function() {
        var e = r.account;
        return e ? api.billing.getSubscription(r.session).then(function(r) {
            var t = parser.billing.subscriptionDetailAttrsFromAPI(r);
            return e.subscription = __assign(__assign({}, e.subscription), t), e.subscription
        }) : Promise.reject(new Error("Missing account"))
    })
};
export var getInvoices = function(r, e, t) {
    return void 0 === e && (e = 0), void 0 === t && (t = 20), __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(i) {
            return [2, api.billing.getInvoices(r.session, e, t)]
        })
    })
};
export var getInvoiceDetails = function(r, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [2, api.billing.getInvoiceDetails(r.session, e)]
        })
    })
};
export var updateSubscription = function(r, e, t, i) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            return [2, makePromise("updateSubscription", function() {
                var n = r.account;
                if (!n) return Promise.reject(new Error("Missing account"));
                var o = e || n.subscription.tier,
                    a = t || n.subscription.plan;
                if (!o) return Promise.reject(new Error("Missing tier"));
                if (!a) return Promise.reject(new Error("Missing plan"));
                var s = {
                    frequency: a.frequency,
                    tierName: o.name
                };
                return i && (s.taxNumber = i.taxNumber ? i.taxNumber : "", s.isTaxExempt = i.isTaxExempt, s.country = i.country ? i.country : "", s.provinceOrState = i.provinceOrState ? i.provinceOrState : ""), api.billing.updateStripeSubscription(r.session, s).then(function() {
                    return n.subscription = __assign(__assign({}, n.subscription), {
                        tier: o,
                        plan: a
                    }), getAccountWithAttrs(r, [])
                }).then(function() {
                    return getSubscription(r)
                }).then(function(e) {
                    return changed(r), e
                })
            })]
        })
    })
};
export var getValidPromotionFromCode = function(r, e, t) {
    return makePromise("getValidPromotionFromCode", function() {
        return util.isValidPromoCodeFormat(e) ? api.billing.getValidPromotionFromCode(r.session, e, t) : Promise.reject(new Error("Promo code format is invalid."))
    })
};
export var getIsValidPurchaseOrderToken = function(r, e) {
    return makePromise("getIsValidPurchaseOrderToken", function() {
        return util.isValidPurchaseOrderTokenFormat(e) ? api.billing.getIsValidPurchaseOrderToken(r.session, e) : Promise.reject(new Error("Purchase order token format is invalid."))
    })
};
export var getIsValidStripePurchaseOrderToken = function(r, e) {
    return makePromise("getIsValidStripePurchaseOrderToken", function() {
        return util.isValidPurchaseOrderTokenFormat(e) ? api.billing.getIsValidStripePurchaseOrderToken(r.session, e) : Promise.reject(new Error("Stripe purchase order token format is invalid."))
    })
};
export var requestInvoiceEmail = function(r, e) {
    return api.billing.requestInvoiceEmail(r.session, e)
};
var hasDefaultCard = function(r) {
    return some(r.cards, function(r) {
        return r.isDefault
    })
};
export var addCard = function(r, e) {
    return api.billing.addCard(r.session, e).then(function() {
        return getSubscription(r)
    }).then(function(e) {
        var t = e.cards[0];
        return void 0 === t || hasDefaultCard(e) ? e : changeDefaultCard(r, t)
    })
};
export var updateCard = function(r, e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(i) {
            return [2, api.billing.updateCard(r.session, e, t).then(function() {
                return getSubscription(r)
            })]
        })
    })
};
export var deleteCard = function(r, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [2, api.billing.deleteCard(r.session, e).then(function() {
                return getSubscription(r)
            }).then(function(e) {
                var t = e.cards[0];
                return void 0 === t || hasDefaultCard(e) ? e : changeDefaultCard(r, t)
            })]
        })
    })
};
export var getCard = function(r, e) {
    return api.billing.getCard(r.session, e)
};
export var changeDefaultCard = function(r, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [2, api.billing.changeDefaultCard(r.session, e).then(function() {
                return getSubscription(r)
            })]
        })
    })
};
export var getAvailableTiers = function(r) {
    return makePromise("getAvailableTiers", function() {
        var e = r.account;
        return e ? api.billing.getAvailableTiers(r.session).then(function(r) {
            var t = parser.billing.parseAvailableTiersFromAPI(r, e.subscription);
            return e.subscription = __assign(__assign({}, e.subscription), {
                availableTiers: t
            }), e.subscription
        }) : Promise.reject(new Error("Missing account"))
    })
};
export var getUpgradeTiers = function(r) {
    return api.billing.getUpgradeTiers(r.session).then(function(r) {
        return parser.billing.parseTiersFromAPI(r)
    }).catch(function(r) {
        throw console.error("getUpgradeTiers failed:", r), r
    })
};
export var subscribeWithStripe = function(r, e) {
    return makePromise("subscribeWithStripe", function() {
        var t = r.account;
        return t ? api.billing.subscribeWithStripe(r.session, {
            token: e.token,
            tierName: e.tier ? e.tier.name : "",
            frequency: e.plan ? e.plan.frequency : "",
            country: e.country,
            provinceOrState: e.provinceOrState,
            zip: e.zip,
            taxNumber: e.taxNumber,
            isTaxExempt: e.isTaxExempt,
            giftCardCode: e.giftCardCode
        }).then(function() {
            return t.subscription = __assign(__assign({}, t.subscription), {
                tier: e.tier
            }), getAccountWithAttrs(r, ["billing"])
        }).then(function() {
            return getSubscription(r)
        }).then(function(e) {
            return changed(r), e
        }) : Promise.reject(new Error("Missing account"))
    })
};
export var cancelStripeSubscription = function(r) {
    return api.billing.cancelStripeSubscription(r.session).then(function() {
        return getAccountWithAttrs(r, ["billing"])
    }).then(function() {
        return getSubscription(r)
    }).then(function(e) {
        return changed(r), e
    })
};
export var endTrialPeriod = function(r) {
    return api.billing.endTrialPeriod(r.session)
};
export var getTaxAdvice = function(r, e, t, i, n) {
    return api.billing.getTaxAdvice(r.session, {
        country: t,
        province: i,
        postalCode: n,
        price: e
    }).then(function(r) {
        return {
            countryCode: r.countryCode.toLowerCase(),
            provinceOrStateCode: r.provinceCode ? r.provinceCode.toLowerCase() : "",
            postalCode: r.postalCode,
            taxRate: r.taxRate,
            taxRateString: r.taxRateString,
            effectiveTaxRate: r.effectiveTaxRate,
            effectiveTaxRateString: r.effectiveTaxRateString,
            taxName: r.taxName,
            allowsExemption: r.allowsExemption,
            isTaxed: 0 === r.originalPrice && r.taxRate > 0 || r.totalTax > 0,
            totalPrice: r.totalPrice,
            originalPrice: r.originalPrice,
            useTaxData: r.useTaxData
        }
    })
};
export var createAppleSubscription = function(r, e) {
    var t = r.session;
    return api.billing.createAppleSubscription(t, e)
};