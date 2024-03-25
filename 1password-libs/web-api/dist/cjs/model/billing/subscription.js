"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.InAppPurchaseSelectedSubscriptionTier = exports.Subscription = void 0;
var InAppPurchaseSelectedSubscriptionTier, lodash_es_1 = require("lodash-es"),
    date_1 = require("../../util/date"),
    tier_1 = require("./tier");

function Subscription() {
    return {
        freezesAt: "2100-01-01T00:00:00.000Z",
        guests: 0,
        members: 0,
        provider: "",
        status: "",
        storageUsed: 0,
        tier: void 0,
        settings: {
            billingCompanyName: "",
            billingAddress: "",
            billingEmails: ""
        },
        balance: 0,
        cards: [],
        coupon: void 0,
        pendingCreditAmount: 0,
        nextInvoice: void 0,
        plan: void 0,
        stripe: void 0,
        purchaseOrder: void 0,
        stripePurchaseOrder: void 0,
        customerAddress: void 0,
        availableTiers: []
    }
}
exports.Subscription = Subscription,
    function(e) {
        ! function(e) {
            e.Trial = "T", e.Active = "A", e.Lapsed = "L", e.CancelAtPeriodEnd = "C", e.Frozen = "F"
        }(e.Status || (e.Status = {})), e.Provider = {
            Undefined: "U",
            Stripe: "S",
            StripePurchaseOrder: "C",
            PurchaseOrder: "O",
            ThirdParty: "T",
            ParentAccount: "R",
            AppleSubscription: "A",
            PayPal: "P",
            GooglePlayStore: "G"
        }, e.canBillForAdditionalUsers = function(r) {
            return !lodash_es_1.includes([e.Provider.AppleSubscription, e.Provider.GooglePlayStore], r.provider)
        }, e.isDirectlyBilled = function(r) {
            return lodash_es_1.includes([e.Provider.Stripe, e.Provider.StripePurchaseOrder, e.Provider.Undefined], r.provider)
        }, e.isDirectlyBilledPurchaseOrder = function(r) {
            return r.provider === e.Provider.StripePurchaseOrder
        }, e.shouldShowBilling = function(r) {
            return lodash_es_1.includes([e.Provider.Undefined, e.Provider.Stripe, e.Provider.StripePurchaseOrder, e.Provider.AppleSubscription, e.Provider.GooglePlayStore, e.Provider.ParentAccount, e.Provider.PurchaseOrder, e.Provider.ThirdParty], r.provider)
        }, e.canChangeAccountType = function(r) {
            return !lodash_es_1.includes([e.Provider.AppleSubscription, e.Provider.GooglePlayStore, e.Provider.PurchaseOrder, e.Provider.ThirdParty], r.provider)
        }, e.hasFeature = function(e) {
            return e.tier ? e.tier.hasFeature : tier_1.getBlankTier().hasFeature
        }, e.hasPendingCredit = function(e) {
            return "number" == typeof e.pendingCreditAmount && e.pendingCreditAmount > 0
        }, e.hasAvailableCredit = function(e) {
            return -1 * e.balance + e.pendingCreditAmount > 0
        }, e.hasCoupon = function(e) {
            return void 0 !== e.coupon && "" !== e.coupon.stripeCouponUID && 0 !== (e.coupon.amountOff || e.coupon.percentOff)
        }, e.hasTrialTimeLeft = function(e) {
            if (void 0 === e.stripe) return !1;
            var r = date_1.dateFromGolang(e.stripe.trialEnd);
            return "trialing" === e.stripe.status && !!r && r.getTime() > Date.now()
        }, e.getDefaultCardholderName = function(e) {
            var r = lodash_es_1.find(e.cards, function(e) {
                return e.isDefault
            });
            return r ? r.name : void 0
        }, e.getCurrency = function(e) {
            return e.plan ? e.plan.currency : e.availableTiers && e.availableTiers[0] && e.availableTiers[0].plans && e.availableTiers[0].plans[0] ? e.availableTiers[0].plans[0].currency : void 0
        }
    }(Subscription = exports.Subscription || (exports.Subscription = {})),
    function(e) {
        e.FamilyAnnual = "family.annual", e.FamilyMonthly = "family.monthly", e.IndividualAnnual = "individual.annual", e.IndividualMonthly = "individual.monthly"
    }(InAppPurchaseSelectedSubscriptionTier = exports.InAppPurchaseSelectedSubscriptionTier || (exports.InAppPurchaseSelectedSubscriptionTier = {}));