"use strict";
var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var r, t = 1, i = arguments.length; t < i; t++)
                for (var n in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            return e
        }).apply(this, arguments)
    },
    __createBinding = this && this.__createBinding || (Object.create ? function(e, r, t, i) {
        void 0 === i && (i = t), Object.defineProperty(e, i, {
            enumerable: !0,
            get: function() {
                return r[t]
            }
        })
    } : function(e, r, t, i) {
        void 0 === i && (i = t), e[i] = r[t]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(e, r) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: r
        })
    } : function(e, r) {
        e.default = r
    }),
    __importStar = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var r = {};
        if (null != e)
            for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && __createBinding(r, e, t);
        return __setModuleDefault(r, e), r
    },
    __awaiter = this && this.__awaiter || function(e, r, t, i) {
        return new(t || (t = Promise))(function(n, o) {
            function a(e) {
                try {
                    u(i.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function s(e) {
                try {
                    u(i.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                var r;
                e.done ? n(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(a, s)
            }
            u((i = i.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
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
                        o = r.call(e, a)
                    } catch (e) {
                        o = [6, e], i = 0
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
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createAppleSubscription = exports.getTaxAdvice = exports.endTrialPeriod = exports.cancelStripeSubscription = exports.subscribeWithStripe = exports.getUpgradeTiers = exports.getAvailableTiers = exports.changeDefaultCard = exports.getCard = exports.deleteCard = exports.updateCard = exports.addCard = exports.requestInvoiceEmail = exports.getIsValidStripePurchaseOrderToken = exports.getIsValidPurchaseOrderToken = exports.getValidPromotionFromCode = exports.updateSubscription = exports.getInvoiceDetails = exports.getInvoices = exports.getSubscription = void 0;
var lodash_es_1 = require("lodash-es"),
    api = __importStar(require("../api")),
    parser = __importStar(require("../parser")),
    util = __importStar(require("../util")),
    make_promise_1 = require("../util/make_promise"),
    account_1 = require("./account"),
    context_1 = require("./context"),
    codeLocation = "action/billing",
    makePromise = make_promise_1.makePromise(codeLocation),
    getSubscription = function(e) {
        return makePromise("getSubscription", function() {
            var r = e.account;
            return r ? api.billing.getSubscription(e.session).then(function(e) {
                var t = parser.billing.subscriptionDetailAttrsFromAPI(e);
                return r.subscription = __assign(__assign({}, r.subscription), t), r.subscription
            }) : Promise.reject(new Error("Missing account"))
        })
    };
exports.getSubscription = getSubscription;
var getInvoices = function(e, r, t) {
    return void 0 === r && (r = 0), void 0 === t && (t = 20), __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(i) {
            return [2, api.billing.getInvoices(e.session, r, t)]
        })
    })
};
exports.getInvoices = getInvoices;
var getInvoiceDetails = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [2, api.billing.getInvoiceDetails(e.session, r)]
        })
    })
};
exports.getInvoiceDetails = getInvoiceDetails;
var updateSubscription = function(e, r, t, i) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            return [2, makePromise("updateSubscription", function() {
                var n = e.account;
                if (!n) return Promise.reject(new Error("Missing account"));
                var o = r || n.subscription.tier,
                    a = t || n.subscription.plan;
                if (!o) return Promise.reject(new Error("Missing tier"));
                if (!a) return Promise.reject(new Error("Missing plan"));
                var s = {
                    frequency: a.frequency,
                    tierName: o.name
                };
                return i && (s.taxNumber = i.taxNumber ? i.taxNumber : "", s.isTaxExempt = i.isTaxExempt, s.country = i.country ? i.country : "", s.provinceOrState = i.provinceOrState ? i.provinceOrState : ""), api.billing.updateStripeSubscription(e.session, s).then(function() {
                    return n.subscription = __assign(__assign({}, n.subscription), {
                        tier: o,
                        plan: a
                    }), account_1.getAccountWithAttrs(e, [])
                }).then(function() {
                    return exports.getSubscription(e)
                }).then(function(r) {
                    return context_1.changed(e), r
                })
            })]
        })
    })
};
exports.updateSubscription = updateSubscription;
var getValidPromotionFromCode = function(e, r, t) {
    return makePromise("getValidPromotionFromCode", function() {
        return util.isValidPromoCodeFormat(r) ? api.billing.getValidPromotionFromCode(e.session, r, t) : Promise.reject(new Error("Promo code format is invalid."))
    })
};
exports.getValidPromotionFromCode = getValidPromotionFromCode;
var getIsValidPurchaseOrderToken = function(e, r) {
    return makePromise("getIsValidPurchaseOrderToken", function() {
        return util.isValidPurchaseOrderTokenFormat(r) ? api.billing.getIsValidPurchaseOrderToken(e.session, r) : Promise.reject(new Error("Purchase order token format is invalid."))
    })
};
exports.getIsValidPurchaseOrderToken = getIsValidPurchaseOrderToken;
var getIsValidStripePurchaseOrderToken = function(e, r) {
    return makePromise("getIsValidStripePurchaseOrderToken", function() {
        return util.isValidPurchaseOrderTokenFormat(r) ? api.billing.getIsValidStripePurchaseOrderToken(e.session, r) : Promise.reject(new Error("Stripe purchase order token format is invalid."))
    })
};
exports.getIsValidStripePurchaseOrderToken = getIsValidStripePurchaseOrderToken;
var requestInvoiceEmail = function(e, r) {
    return api.billing.requestInvoiceEmail(e.session, r)
};
exports.requestInvoiceEmail = requestInvoiceEmail;
var hasDefaultCard = function(e) {
        return lodash_es_1.some(e.cards, function(e) {
            return e.isDefault
        })
    },
    addCard = function(e, r) {
        return api.billing.addCard(e.session, r).then(function() {
            return exports.getSubscription(e)
        }).then(function(r) {
            var t = r.cards[0];
            return void 0 === t || hasDefaultCard(r) ? r : exports.changeDefaultCard(e, t)
        })
    };
exports.addCard = addCard;
var updateCard = function(e, r, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(i) {
            return [2, api.billing.updateCard(e.session, r, t).then(function() {
                return exports.getSubscription(e)
            })]
        })
    })
};
exports.updateCard = updateCard;
var deleteCard = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [2, api.billing.deleteCard(e.session, r).then(function() {
                return exports.getSubscription(e)
            }).then(function(r) {
                var t = r.cards[0];
                return void 0 === t || hasDefaultCard(r) ? r : exports.changeDefaultCard(e, t)
            })]
        })
    })
};
exports.deleteCard = deleteCard;
var getCard = function(e, r) {
    return api.billing.getCard(e.session, r)
};
exports.getCard = getCard;
var changeDefaultCard = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [2, api.billing.changeDefaultCard(e.session, r).then(function() {
                return exports.getSubscription(e)
            })]
        })
    })
};
exports.changeDefaultCard = changeDefaultCard;
var getAvailableTiers = function(e) {
    return makePromise("getAvailableTiers", function() {
        var r = e.account;
        return r ? api.billing.getAvailableTiers(e.session).then(function(e) {
            var t = parser.billing.parseAvailableTiersFromAPI(e, r.subscription);
            return r.subscription = __assign(__assign({}, r.subscription), {
                availableTiers: t
            }), r.subscription
        }) : Promise.reject(new Error("Missing account"))
    })
};
exports.getAvailableTiers = getAvailableTiers;
var getUpgradeTiers = function(e) {
    return api.billing.getUpgradeTiers(e.session).then(function(e) {
        return parser.billing.parseTiersFromAPI(e)
    }).catch(function(e) {
        throw console.error("getUpgradeTiers failed:", e), e
    })
};
exports.getUpgradeTiers = getUpgradeTiers;
var subscribeWithStripe = function(e, r) {
    return makePromise("subscribeWithStripe", function() {
        var t = e.account;
        return t ? api.billing.subscribeWithStripe(e.session, {
            token: r.token,
            tierName: r.tier ? r.tier.name : "",
            frequency: r.plan ? r.plan.frequency : "",
            country: r.country,
            provinceOrState: r.provinceOrState,
            zip: r.zip,
            taxNumber: r.taxNumber,
            isTaxExempt: r.isTaxExempt,
            giftCardCode: r.giftCardCode
        }).then(function() {
            return t.subscription = __assign(__assign({}, t.subscription), {
                tier: r.tier
            }), account_1.getAccountWithAttrs(e, ["billing"])
        }).then(function() {
            return exports.getSubscription(e)
        }).then(function(r) {
            return context_1.changed(e), r
        }) : Promise.reject(new Error("Missing account"))
    })
};
exports.subscribeWithStripe = subscribeWithStripe;
var cancelStripeSubscription = function(e) {
    return api.billing.cancelStripeSubscription(e.session).then(function() {
        return account_1.getAccountWithAttrs(e, ["billing"])
    }).then(function() {
        return exports.getSubscription(e)
    }).then(function(r) {
        return context_1.changed(e), r
    })
};
exports.cancelStripeSubscription = cancelStripeSubscription;
var endTrialPeriod = function(e) {
    return api.billing.endTrialPeriod(e.session)
};
exports.endTrialPeriod = endTrialPeriod;
var getTaxAdvice = function(e, r, t, i, n) {
    return api.billing.getTaxAdvice(e.session, {
        country: t,
        province: i,
        postalCode: n,
        price: r
    }).then(function(e) {
        return {
            countryCode: e.countryCode.toLowerCase(),
            provinceOrStateCode: e.provinceCode ? e.provinceCode.toLowerCase() : "",
            postalCode: e.postalCode,
            taxRate: e.taxRate,
            taxRateString: e.taxRateString,
            effectiveTaxRate: e.effectiveTaxRate,
            effectiveTaxRateString: e.effectiveTaxRateString,
            taxName: e.taxName,
            allowsExemption: e.allowsExemption,
            isTaxed: 0 === e.originalPrice && e.taxRate > 0 || e.totalTax > 0,
            totalPrice: e.totalPrice,
            originalPrice: e.originalPrice,
            useTaxData: e.useTaxData
        }
    })
};
exports.getTaxAdvice = getTaxAdvice;
var createAppleSubscription = function(e, r) {
    var t = e.session;
    return api.billing.createAppleSubscription(t, r)
};
exports.createAppleSubscription = createAppleSubscription;