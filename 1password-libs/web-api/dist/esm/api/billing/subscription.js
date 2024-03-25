var __awaiter = this && this.__awaiter || function(t, r, e, n) {
        return new(e || (e = Promise))(function(i, a) {
            function o(t) {
                try {
                    s(n.next(t))
                } catch (t) {
                    a(t)
                }
            }

            function u(t) {
                try {
                    s(n.throw(t))
                } catch (t) {
                    a(t)
                }
            }

            function s(t) {
                var r;
                t.done ? i(t.value) : (r = t.value, r instanceof e ? r : new e(function(t) {
                    t(r)
                })).then(o, u)
            }
            s((n = n.apply(t, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, r) {
        var e, n, i, a, o = {
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
                    if (e) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (e = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
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
                        a = r.call(t, o)
                    } catch (t) {
                        a = [6, t], n = 0
                    } finally {
                        e = i = 0
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
import * as t from "io-ts";
import {
    fromStringEnum,
    unsafeDecodeAs,
    withDefault
} from "../../util/validator";
import {
    Card
} from "./card";
import {
    Coupon
} from "./coupon";
import {
    CustomerAddress
} from "./customer_address";
import {
    Invoice
} from "./invoice";
import {
    Plan
} from "./plan";
export var StripeSubscription = t.readonly(t.type({
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
}), "StripeSubscription");
export var PurchaseOrderStatus;
! function(t) {
    t.Paid = "P", t.Outstanding = "O", t.Special = "S"
}(PurchaseOrderStatus || (PurchaseOrderStatus = {}));
export var PurchaseOrder = t.readonly(t.type({
    state: t.string,
    teamMembers: t.number,
    totalPrice: t.number,
    paymentStatus: fromStringEnum(PurchaseOrderStatus, "PurchaseOrderStatus"),
    startDate: t.string,
    endDate: t.string
}), "PurchaseOrder");
export var StripePurchaseOrderStatus;
! function(t) {
    t.Approved = "A", t.Pending = "P", t.Canceled = "C", t.Delinquent = "D"
}(StripePurchaseOrderStatus || (StripePurchaseOrderStatus = {}));
export var StripePurchaseOrder = t.readonly(t.type({
    state: t.string,
    teamMembers: t.number,
    memberPrice: t.number,
    billingStartDate: t.string,
    customerPO: t.string,
    frequency: t.union([t.literal("Y"), t.literal("M")]),
    secretsAutomationPrice: t.number,
    vaultAccessCredits: t.number
}), "StripePurchaseOrder");
export var Subscription = t.readonly(t.type({
    balance: t.number,
    subscription: StripeSubscription,
    plan: t.union([Plan, t.undefined]),
    cards: t.union([t.readonlyArray(Card), t.null]),
    nextInvoice: t.union([Invoice, t.undefined]),
    purchaseOrder: t.union([PurchaseOrder, t.undefined]),
    stripePurchaseOrder: t.union([StripePurchaseOrder, t.undefined]),
    customerAddress: t.union([CustomerAddress, t.undefined]),
    pendingCreditAmount: withDefault(t.number, 0),
    coupon: t.union([Coupon, t.undefined])
}), "Subscription");
export var getSubscription = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            return [2, t.get("/api/v2/billing").then(unsafeDecodeAs(Subscription))]
        })
    })
};
export var updateStripeSubscription = function(t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            switch (e.label) {
                case 0:
                    return [4, t.post("/api/v2/subscription", r)];
                case 1:
                    return e.sent(), [2]
            }
        })
    })
};
export var subscribeWithStripe = function(t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            switch (e.label) {
                case 0:
                    return [4, t.post("/api/v2/subscription", r)];
                case 1:
                    return e.sent(), [2]
            }
        })
    })
};
export var cancelStripeSubscription = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, t.delete("/api/v1/subscription")];
                case 1:
                    return r.sent(), [2]
            }
        })
    })
};
export var endTrialPeriod = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, t.delete("/api/v1/subscription/trial")];
                case 1:
                    return r.sent(), [2]
            }
        })
    })
};
export var TaxAdvice = t.readonly(t.type({
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
export var getTaxAdvice = function(t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            return [2, t.postUnencrypted("/api/v2/taxadvice", r).then(unsafeDecodeAs(TaxAdvice))]
        })
    })
};
export var createAppleSubscription = function(t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            switch (e.label) {
                case 0:
                    return [4, t.post("/api/v2/subscriptions/apple", r)];
                case 1:
                    return e.sent(), [2]
            }
        })
    })
};
export var getIsValidPurchaseOrderToken = function(t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            return [2, t.get("/api/v1/purchase_order/" + r + "/check")]
        })
    })
};
export var getIsValidStripePurchaseOrderToken = function(t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            return [2, t.get("/api/v1/stripe_purchase_order/" + r + "/check")]
        })
    })
};