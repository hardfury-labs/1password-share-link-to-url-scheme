import {
    find,
    includes
} from "lodash-es";
import {
    dateFromGolang
} from "../../util/date";
import {
    getBlankTier
} from "./tier";
export function Subscription() {
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
};
! function(r) {
    ! function(r) {
        r.Trial = "T", r.Active = "A", r.Lapsed = "L", r.CancelAtPeriodEnd = "C", r.Frozen = "F"
    }(r.Status || (r.Status = {})), r.Provider = {
        Undefined: "U",
        Stripe: "S",
        StripePurchaseOrder: "C",
        PurchaseOrder: "O",
        ThirdParty: "T",
        ParentAccount: "R",
        AppleSubscription: "A",
        PayPal: "P",
        GooglePlayStore: "G"
    }, r.canBillForAdditionalUsers = function(e) {
        return !includes([r.Provider.AppleSubscription, r.Provider.GooglePlayStore], e.provider)
    }, r.isDirectlyBilled = function(e) {
        return includes([r.Provider.Stripe, r.Provider.StripePurchaseOrder, r.Provider.Undefined], e.provider)
    }, r.isDirectlyBilledPurchaseOrder = function(e) {
        return e.provider === r.Provider.StripePurchaseOrder
    }, r.shouldShowBilling = function(e) {
        return includes([r.Provider.Undefined, r.Provider.Stripe, r.Provider.StripePurchaseOrder, r.Provider.AppleSubscription, r.Provider.GooglePlayStore, r.Provider.ParentAccount, r.Provider.PurchaseOrder, r.Provider.ThirdParty], e.provider)
    }, r.canChangeAccountType = function(e) {
        return !includes([r.Provider.AppleSubscription, r.Provider.GooglePlayStore, r.Provider.PurchaseOrder, r.Provider.ThirdParty], e.provider)
    }, r.hasFeature = function(r) {
        return r.tier ? r.tier.hasFeature : getBlankTier().hasFeature
    }, r.hasPendingCredit = function(r) {
        return "number" == typeof r.pendingCreditAmount && r.pendingCreditAmount > 0
    }, r.hasAvailableCredit = function(r) {
        return -1 * r.balance + r.pendingCreditAmount > 0
    }, r.hasCoupon = function(r) {
        return void 0 !== r.coupon && "" !== r.coupon.stripeCouponUID && 0 !== (r.coupon.amountOff || r.coupon.percentOff)
    }, r.hasTrialTimeLeft = function(r) {
        if (void 0 === r.stripe) return !1;
        var e = dateFromGolang(r.stripe.trialEnd);
        return "trialing" === r.stripe.status && !!e && e.getTime() > Date.now()
    }, r.getDefaultCardholderName = function(r) {
        var e = find(r.cards, function(r) {
            return r.isDefault
        });
        return e ? e.name : void 0
    }, r.getCurrency = function(r) {
        return r.plan ? r.plan.currency : r.availableTiers && r.availableTiers[0] && r.availableTiers[0].plans && r.availableTiers[0].plans[0] ? r.availableTiers[0].plans[0].currency : void 0
    }
}(Subscription || (Subscription = {}));
export var InAppPurchaseSelectedSubscriptionTier;
! function(r) {
    r.FamilyAnnual = "family.annual", r.FamilyMonthly = "family.monthly", r.IndividualAnnual = "individual.annual", r.IndividualMonthly = "individual.monthly"
}(InAppPurchaseSelectedSubscriptionTier || (InAppPurchaseSelectedSubscriptionTier = {}));