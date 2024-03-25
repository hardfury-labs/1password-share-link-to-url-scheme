import { Card, Coupon, Invoice, Plan, PurchaseOrder, StripePurchaseOrder, StripeSubscription } from "../../api/billing";
import { CustomerAddress } from "../../api/billing/customer_address";
import { Tier } from "./tier";
export interface SubscriptionOverviewAttrs {
    readonly freezesAt: string;
    readonly guests: number;
    readonly members: number;
    readonly provider: string;
    readonly status: string;
    readonly storageUsed: number;
    readonly tier: Tier | undefined;
    readonly settings: BillingSettings;
}
export interface SubscriptionDetailAttrs {
    readonly balance: number;
    readonly cards: Card[];
    readonly coupon: Coupon | undefined;
    readonly pendingCreditAmount: number;
    readonly nextInvoice: Invoice | undefined;
    readonly plan: Plan | undefined;
    readonly stripe: StripeSubscription | undefined;
    readonly purchaseOrder: PurchaseOrder | undefined;
    readonly stripePurchaseOrder: StripePurchaseOrder | undefined;
    readonly customerAddress: CustomerAddress | undefined;
}
export interface BillingSettings {
    readonly billingCompanyName: string;
    readonly billingAddress: string;
    readonly billingEmails: string;
}
export interface Subscription extends SubscriptionOverviewAttrs, SubscriptionDetailAttrs {
    readonly availableTiers: Tier[];
}
export declare function Subscription(): Subscription;
export declare namespace Subscription {
    enum Status {
        Trial = "T",
        Active = "A",
        Lapsed = "L",
        CancelAtPeriodEnd = "C",
        Frozen = "F"
    }
    const Provider: {
        Undefined: string;
        Stripe: string;
        StripePurchaseOrder: string;
        PurchaseOrder: string;
        ThirdParty: string;
        ParentAccount: string;
        AppleSubscription: string;
        PayPal: string;
        GooglePlayStore: string;
    };
    const canBillForAdditionalUsers: (sub: Subscription) => boolean;
    const isDirectlyBilled: (sub: Subscription) => boolean;
    const isDirectlyBilledPurchaseOrder: (sub: Subscription) => boolean;
    const shouldShowBilling: (sub: Subscription) => boolean;
    const canChangeAccountType: (sub: Subscription) => boolean;
    const hasFeature: (sub: Subscription) => import("./tier").TierFeatures;
    const hasPendingCredit: (s: Subscription) => boolean;
    const hasAvailableCredit: (s: Subscription) => boolean;
    const hasCoupon: (s: Subscription) => boolean;
    const hasTrialTimeLeft: (s: Subscription) => boolean;
    const getDefaultCardholderName: (s: Subscription) => string | undefined;
    const getCurrency: (s: Subscription) => string | undefined;
}
/**
 * InAppPurchaseSubscriptionInfo describes the various prices and introductory offers for
 * family and individual monthly and annual subscriptions.
 */
export interface InAppPurchaseSubscriptionInfo {
    /**
     * Localized prices for family monthly and annual subscriptions, with introductory offers.
     */
    family: InAppPurchaseSubscriptionFrequency;
    /**
     * Localized prices for individual monthly and annual subscriptions, with introductory
     * offers.
     */
    individual: InAppPurchaseSubscriptionFrequency;
    /**
     * Client-specific information shown in the fine print at the bottom of the subscription
     * purchase page. For OPI this string will contain a pricing breakdown.
     */
    subscriptionNittyGritty: string[];
}
/**
 * InAppPurchaseSubscriptionFrequency contains the localized prices offered for a specific
 * account type's subscriptions.
 *
 * Localized prices for family monthly and annual subscriptions, with introductory offers.
 *
 * Localized prices for individual monthly and annual subscriptions, with introductory
 * offers.
 */
export interface InAppPurchaseSubscriptionFrequency {
    /**
     * The localized description of the introductory offer for an annual account subscription.
     * In English this string could read '$8.99 upfront for the first 6 months.'
     */
    annualIntroductoryOfferDescription: string;
    /**
     * The localized version of the annual price for an account subscription. For example, $47.99
     */
    annualPrice: string;
    /**
     * The localized description of the introductory offer for a monthly account subscription.
     * In English this string could read '$1.99 per month for the first 6 months.'
     */
    monthlyIntroductoryOfferDescription: string;
    /**
     * The localized version of the monthly price for an account subscription. For example, $4.99
     */
    monthlyPrice: string;
}
/**
 * InAppPurchaseSubscriptionPurchasePayload contains the information required to start an
 * in-app purchase subscription purchase process. This object is sent from B5Web to the
 * native clients in an embedded web view.
 */
export interface InAppPurchaseSubscriptionPurchasePayload {
    /**
     * The in-app purchase tier selected by the user during B5Account signup. Currently
     * supported by OPI, OPA, and OPM.
     */
    inAppPurchaseSelectedSubscriptionTier?: InAppPurchaseSelectedSubscriptionTier;
    selectedSubscriptionTier: any;
}
/**
 * The in-app purchase tier selected by the user during B5Account signup. Currently
 * supported by OPI, OPA, and OPM.
 */
export declare enum InAppPurchaseSelectedSubscriptionTier {
    FamilyAnnual = "family.annual",
    FamilyMonthly = "family.monthly",
    IndividualAnnual = "individual.annual",
    IndividualMonthly = "individual.monthly"
}
