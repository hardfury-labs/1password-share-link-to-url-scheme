"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(t, e, r, i) {
        void 0 === i && (i = r), Object.defineProperty(t, i, {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    } : function(t, e, r, i) {
        void 0 === i && (i = r), t[i] = e[r]
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
            for (var r in t) "default" !== r && Object.prototype.hasOwnProperty.call(t, r) && __createBinding(e, t, r);
        return __setModuleDefault(e, t), e
    },
    __awaiter = this && this.__awaiter || function(t, e, r, i) {
        return new(r || (r = Promise))(function(n, a) {
            function o(t) {
                try {
                    u(i.next(t))
                } catch (t) {
                    a(t)
                }
            }

            function s(t) {
                try {
                    u(i.throw(t))
                } catch (t) {
                    a(t)
                }
            }

            function u(t) {
                var e;
                t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                    t(e)
                })).then(o, s)
            }
            u((i = i.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        var r, i, n, a, o = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function s(a) {
            return function(s) {
                return function(a) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (r = 1, i && (n = 2 & a[0] ? i.return : a[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, a[1])).done) return n;
                        switch (i = 0, n && (a = [2 & a[0], n.value]), a[0]) {
                            case 0:
                            case 1:
                                n = a;
                                break;
                            case 4:
                                return o.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, i = a[1], a = [0];
                                continue;
                            case 7:
                                a = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
                                    o.label = a[1];
                                    break
                                }
                                if (6 === a[0] && o.label < n[1]) {
                                    o.label = n[1], n = a;
                                    break
                                }
                                if (n && o.label < n[2]) {
                                    o.label = n[2], o.ops.push(a);
                                    break
                                }
                                n[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        a = e.call(t, o)
                    } catch (t) {
                        a = [6, t], i = 0
                    } finally {
                        r = n = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, s])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getIsValidStripePurchaseOrderToken = exports.getIsValidPurchaseOrderToken = exports.createAppleSubscription = exports.getTaxAdvice = exports.TaxAdvice = exports.endTrialPeriod = exports.cancelStripeSubscription = exports.subscribeWithStripe = exports.updateStripeSubscription = exports.getSubscription = exports.Subscription = exports.StripePurchaseOrder = exports.StripePurchaseOrderStatus = exports.PurchaseOrder = exports.PurchaseOrderStatus = exports.StripeSubscription = void 0;
var PurchaseOrderStatus, StripePurchaseOrderStatus, t = __importStar(require("io-ts")),
    validator_1 = require("../../util/validator"),
    card_1 = require("./card"),
    coupon_1 = require("./coupon"),
    customer_address_1 = require("./customer_address"),
    invoice_1 = require("./invoice"),
    plan_1 = require("./plan");
exports.StripeSubscription = t.readonly(t.type({
        stripeSubscriptionUid: t.string,
        cancelAtPeriodEnd: t.boolean,
        canceledAt: t.string,
        currentPeriodEnd: t.string,
        currentPeriodStart: t.string,
        endedAt: t.string,
        quantity: t.number,
        start: t.string,
        status: t.string,
        taxPercent: t.number,
        effectiveTaxRate: t.number,
        trialEnd: t.string,
        trialStart: t.string,
        taxNumber: t.string,
        isTaxExempt: t.boolean,
        country: t.string,
        provinceOrState: t.string
    }), "StripeSubscription"),
    function(t) {
        t.Paid = "P", t.Outstanding = "O", t.Special = "S"
    }(PurchaseOrderStatus = exports.PurchaseOrderStatus || (exports.PurchaseOrderStatus = {})), exports.PurchaseOrder = t.readonly(t.type({
        state: t.string,
        teamMembers: t.number,
        totalPrice: t.number,
        paymentStatus: validator_1.fromStringEnum(PurchaseOrderStatus, "PurchaseOrderStatus"),
        startDate: t.string,
        endDate: t.string
    }), "PurchaseOrder"),
    function(t) {
        t.Approved = "A", t.Pending = "P", t.Canceled = "C", t.Delinquent = "D"
    }(StripePurchaseOrderStatus = exports.StripePurchaseOrderStatus || (exports.StripePurchaseOrderStatus = {})), exports.StripePurchaseOrder = t.readonly(t.type({
        state: t.string,
        teamMembers: t.number,
        memberPrice: t.number,
        billingStartDate: t.string,
        customerPO: t.string,
        frequency: t.union([t.literal("Y"), t.literal("M")]),
        secretsAutomationPrice: t.number,
        vaultAccessCredits: t.number
    }), "StripePurchaseOrder"), exports.Subscription = t.readonly(t.type({
        balance: t.number,
        subscription: exports.StripeSubscription,
        plan: t.union([plan_1.Plan, t.undefined]),
        cards: t.union([t.readonlyArray(card_1.Card), t.null]),
        nextInvoice: t.union([invoice_1.Invoice, t.undefined]),
        purchaseOrder: t.union([exports.PurchaseOrder, t.undefined]),
        stripePurchaseOrder: t.union([exports.StripePurchaseOrder, t.undefined]),
        customerAddress: t.union([customer_address_1.CustomerAddress, t.undefined]),
        pendingCreditAmount: validator_1.withDefault(t.number, 0),
        coupon: t.union([coupon_1.Coupon, t.undefined])
    }), "Subscription");
var getSubscription = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            return [2, t.get("/api/v2/billing").then(validator_1.unsafeDecodeAs(exports.Subscription))]
        })
    })
};
exports.getSubscription = getSubscription;
var updateStripeSubscription = function(t, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, t.post("/api/v2/subscription", e)];
                case 1:
                    return r.sent(), [2]
            }
        })
    })
};
exports.updateStripeSubscription = updateStripeSubscription;
var subscribeWithStripe = function(t, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, t.post("/api/v2/subscription", e)];
                case 1:
                    return r.sent(), [2]
            }
        })
    })
};
exports.subscribeWithStripe = subscribeWithStripe;
var cancelStripeSubscription = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            switch (e.label) {
                case 0:
                    return [4, t.delete("/api/v1/subscription")];
                case 1:
                    return e.sent(), [2]
            }
        })
    })
};
exports.cancelStripeSubscription = cancelStripeSubscription;
var endTrialPeriod = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            switch (e.label) {
                case 0:
                    return [4, t.delete("/api/v1/subscription/trial")];
                case 1:
                    return e.sent(), [2]
            }
        })
    })
};
exports.endTrialPeriod = endTrialPeriod, exports.TaxAdvice = t.readonly(t.type({
    countryCode: t.string,
    provinceCode: t.string,
    postalCode: t.string,
    taxRate: t.number,
    taxRateString: t.string,
    effectiveTaxRate: t.number,
    effectiveTaxRateString: t.string,
    taxName: t.string,
    originalPrice: t.number,
    totalPrice: t.number,
    totalTax: t.number,
    allowsExemption: t.boolean,
    useTaxData: t.boolean
}), "TaxAdvice");
var getTaxAdvice = function(t, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            return [2, t.postUnencrypted("/api/v2/taxadvice", e).then(validator_1.unsafeDecodeAs(exports.TaxAdvice))]
        })
    })
};
exports.getTaxAdvice = getTaxAdvice;
var createAppleSubscription = function(t, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, t.post("/api/v2/subscriptions/apple", e)];
                case 1:
                    return r.sent(), [2]
            }
        })
    })
};
exports.createAppleSubscription = createAppleSubscription;
var getIsValidPurchaseOrderToken = function(t, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            return [2, t.get("/api/v1/purchase_order/" + e + "/check")]
        })
    })
};
exports.getIsValidPurchaseOrderToken = getIsValidPurchaseOrderToken;
var getIsValidStripePurchaseOrderToken = function(t, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            return [2, t.get("/api/v1/stripe_purchase_order/" + e + "/check")]
        })
    })
};
exports.getIsValidStripePurchaseOrderToken = getIsValidStripePurchaseOrderToken;