import * as t from "io-ts";
import { Session } from "../session";
export declare const StripeSubscription: t.ReadonlyC<t.TypeC<{
    stripeSubscriptionUid: t.StringC;
    cancelAtPeriodEnd: t.BooleanC;
    canceledAt: t.StringC;
    currentPeriodEnd: t.StringC;
    currentPeriodStart: t.StringC;
    endedAt: t.StringC;
    quantity: t.NumberC;
    start: t.StringC;
    status: t.StringC;
    taxPercent: t.NumberC;
    effectiveTaxRate: t.NumberC;
    trialEnd: t.StringC;
    trialStart: t.StringC;
    taxNumber: t.StringC;
    isTaxExempt: t.BooleanC;
    country: t.StringC;
    provinceOrState: t.StringC;
}>>;
export declare type StripeSubscription = t.TypeOf<typeof StripeSubscription>;
export declare enum PurchaseOrderStatus {
    Paid = "P",
    Outstanding = "O",
    Special = "S"
}
export declare const PurchaseOrder: t.ReadonlyC<t.TypeC<{
    state: t.StringC;
    teamMembers: t.NumberC;
    totalPrice: t.NumberC;
    paymentStatus: t.Type<PurchaseOrderStatus, PurchaseOrderStatus, unknown>;
    startDate: t.StringC;
    endDate: t.StringC;
}>>;
export declare type PurchaseOrder = t.TypeOf<typeof PurchaseOrder>;
export declare enum StripePurchaseOrderStatus {
    Approved = "A",
    Pending = "P",
    Canceled = "C",
    Delinquent = "D"
}
export declare const StripePurchaseOrder: t.ReadonlyC<t.TypeC<{
    state: t.StringC;
    teamMembers: t.NumberC;
    memberPrice: t.NumberC;
    billingStartDate: t.StringC;
    customerPO: t.StringC;
    frequency: t.UnionC<[t.LiteralC<"Y">, t.LiteralC<"M">]>;
    secretsAutomationPrice: t.NumberC;
    vaultAccessCredits: t.NumberC;
}>>;
export declare type StripePurchaseOrder = t.TypeOf<typeof StripePurchaseOrder>;
export declare const Subscription: t.ReadonlyC<t.TypeC<{
    balance: t.NumberC;
    subscription: t.ReadonlyC<t.TypeC<{
        stripeSubscriptionUid: t.StringC;
        cancelAtPeriodEnd: t.BooleanC;
        canceledAt: t.StringC;
        currentPeriodEnd: t.StringC;
        currentPeriodStart: t.StringC;
        endedAt: t.StringC;
        quantity: t.NumberC;
        start: t.StringC;
        status: t.StringC;
        taxPercent: t.NumberC;
        effectiveTaxRate: t.NumberC;
        trialEnd: t.StringC;
        trialStart: t.StringC;
        taxNumber: t.StringC;
        isTaxExempt: t.BooleanC;
        country: t.StringC;
        provinceOrState: t.StringC;
    }>>;
    plan: t.UnionC<[t.ReadonlyC<t.TypeC<{
        frequency: t.Type<import("./plan").Frequency, import("./plan").Frequency, unknown>;
        sortOrder: t.NumberC;
        currency: t.StringC;
        display: t.ReadonlyC<t.TypeC<{
            amount: t.NumberC;
            isPerUser: t.BooleanC;
        }>>;
    }>>, t.UndefinedC]>;
    cards: t.UnionC<[t.ReadonlyArrayC<t.ReadonlyC<t.TypeC<{
        stripeCardUid: t.StringC;
        brand: t.StringC;
        country: t.StringC;
        isDefault: t.BooleanC;
        expMonth: t.NumberC;
        expYear: t.NumberC;
        name: t.StringC;
        state: t.UnionC<[t.StringC, t.UndefinedC]>;
        zip: t.UnionC<[t.StringC, t.UndefinedC]>;
        lastFour: t.Type<string, string, unknown>;
    }>>>, t.NullC]>;
    nextInvoice: t.UnionC<[t.ReadonlyC<t.TypeC<{
        stripeInvoiceUID: t.StringC;
        accountName: t.StringC;
        address: t.StringC;
        amountDue: t.NumberC;
        attemptCount: t.NumberC;
        attempted: t.BooleanC;
        billTo: t.StringC;
        charge: t.UnionC<[t.ReadonlyC<t.TypeC<{
            uid: t.StringC;
            amount: t.NumberC;
            captured: t.BooleanC;
            created: t.StringC;
            currency: t.StringC;
            paid: t.BooleanC;
            refunded: t.BooleanC;
            amountRefunded: t.NumberC;
            desc: t.StringC;
            failMsg: t.StringC;
            failCode: t.StringC;
            meta: t.Type<{
                [x: string]: string;
            }, {
                [x: string]: string;
            }, unknown>;
            email: t.StringC;
            statement: t.StringC;
            status: t.StringC;
            source: t.UnionC<[t.ReadonlyC<t.TypeC<{
                stripeCardUid: t.StringC;
                brand: t.StringC;
                country: t.StringC;
                isDefault: t.BooleanC;
                expMonth: t.NumberC;
                expYear: t.NumberC;
                name: t.StringC;
                state: t.UnionC<[t.StringC, t.UndefinedC]>;
                zip: t.UnionC<[t.StringC, t.UndefinedC]>;
                lastFour: t.Type<string, string, unknown>;
            }>>, t.NullC]>;
        }>>, t.NullC]>;
        closed: t.BooleanC;
        currency: t.StringC;
        date: t.StringC;
        description: t.StringC;
        discount: t.UnionC<[t.ReadonlyC<t.TypeC<{
            coupon: t.UnionC<[t.ReadonlyC<t.TypeC<{
                stripeCouponUID: t.StringC;
                amountOff: t.NumberC;
                percentOff: t.NumberC;
                createdAt: t.StringC;
                currency: t.StringC;
                duration: t.StringC;
                durationInMonths: t.NumberC;
            }>>, t.NullC]>;
            start: t.StringC;
            end: t.StringC;
        }>>, t.NullC]>;
        endingBalance: t.NumberC;
        forgiven: t.BooleanC;
        lines: t.Type<readonly Readonly<{
            stripeInvoiceLineUID: string;
            amount: number;
            currency: string;
            description: string;
            periodStart: string;
            periodEnd: string;
            planUID: string | undefined;
            quantity: number;
            proration: boolean;
            discountable: boolean;
            taxName: string;
        }>[], readonly Readonly<{
            stripeInvoiceLineUID: string;
            amount: number;
            currency: string;
            description: string;
            periodStart: string;
            periodEnd: string;
            planUID: string | undefined;
            quantity: number;
            proration: boolean;
            discountable: boolean;
            taxName: string;
        }>[], unknown>;
        metadata: t.Type<{
            [x: string]: string;
        }, {
            [x: string]: string;
        }, unknown>;
        nextPaymentAttempt: t.StringC;
        willRetry: t.BooleanC;
        paid: t.BooleanC;
        periodStart: t.StringC;
        periodEnd: t.StringC;
        startingBalance: t.NumberC;
        statementDescriptor: t.StringC;
        subtotal: t.NumberC;
        tax: t.NumberC;
        taxPercent: t.NumberC;
        total: t.NumberC;
        taxName: t.StringC;
        taxNumber: t.Type<string, string, unknown>;
        isTaxExempt: t.Type<boolean, boolean, unknown>;
        opTaxNumbers: t.UnionC<[t.ReadonlyArrayC<t.ReadonlyC<t.TypeC<{
            label: t.StringC;
            number: t.StringC;
            effective: t.StringC;
        }>>>, t.NullC]>;
        showDefaultTaxMsg: t.BooleanC;
    }>>, t.UndefinedC]>;
    purchaseOrder: t.UnionC<[t.ReadonlyC<t.TypeC<{
        state: t.StringC;
        teamMembers: t.NumberC;
        totalPrice: t.NumberC;
        paymentStatus: t.Type<PurchaseOrderStatus, PurchaseOrderStatus, unknown>;
        startDate: t.StringC;
        endDate: t.StringC;
    }>>, t.UndefinedC]>;
    stripePurchaseOrder: t.UnionC<[t.ReadonlyC<t.TypeC<{
        state: t.StringC;
        teamMembers: t.NumberC;
        memberPrice: t.NumberC;
        billingStartDate: t.StringC;
        customerPO: t.StringC;
        frequency: t.UnionC<[t.LiteralC<"Y">, t.LiteralC<"M">]>;
        secretsAutomationPrice: t.NumberC;
        vaultAccessCredits: t.NumberC;
    }>>, t.UndefinedC]>;
    customerAddress: t.UnionC<[t.ReadonlyC<t.TypeC<{
        country: t.StringC;
        provinceOrState: t.StringC;
        zip: t.StringC;
    }>>, t.UndefinedC]>;
    pendingCreditAmount: t.Type<number, number, unknown>;
    coupon: t.UnionC<[t.ReadonlyC<t.TypeC<{
        stripeCouponUID: t.StringC;
        amountOff: t.NumberC;
        percentOff: t.NumberC;
        createdAt: t.StringC;
        currency: t.StringC;
        duration: t.StringC;
        durationInMonths: t.NumberC;
    }>>, t.UndefinedC]>;
}>>;
export declare type Subscription = t.TypeOf<typeof Subscription>;
export declare const getSubscription: (s: Session) => Promise<Subscription>;
export interface UpdateSubscriptionRequestBody {
    tierName: string;
    frequency: string;
    taxNumber?: string;
    isTaxExempt?: boolean;
    country?: string;
    provinceOrState?: string;
}
export declare const updateStripeSubscription: (s: Session, data: UpdateSubscriptionRequestBody) => Promise<void>;
export interface SubscribeWithStripeRequestBody {
    token: string;
    tierName: string;
    frequency: string;
    country: string;
    provinceOrState?: string;
    zip?: string;
    taxNumber?: string;
    isTaxExempt?: boolean;
    giftCardCode?: string;
}
export declare const subscribeWithStripe: (s: Session, data: SubscribeWithStripeRequestBody) => Promise<void>;
export declare const cancelStripeSubscription: (s: Session) => Promise<void>;
export declare const endTrialPeriod: (s: Session) => Promise<void>;
export interface TaxAdviceParams {
    country: string;
    province?: string;
    postalCode?: string;
    price: number;
}
export declare const TaxAdvice: t.ReadonlyC<t.TypeC<{
    countryCode: t.StringC;
    provinceCode: t.StringC;
    postalCode: t.StringC;
    taxRate: t.NumberC;
    taxRateString: t.StringC;
    effectiveTaxRate: t.NumberC;
    effectiveTaxRateString: t.StringC;
    taxName: t.StringC;
    originalPrice: t.NumberC;
    totalPrice: t.NumberC;
    totalTax: t.NumberC;
    allowsExemption: t.BooleanC;
    useTaxData: t.BooleanC;
}>>;
export declare type TaxAdvice = t.TypeOf<typeof TaxAdvice>;
export declare const getTaxAdvice: (s: Session, data: TaxAdviceParams) => Promise<TaxAdvice>;
export declare const createAppleSubscription: (s: Session, data: string) => Promise<void>;
export declare const getIsValidPurchaseOrderToken: (s: Session, purchaseOrderToken: string) => Promise<any>;
export declare const getIsValidStripePurchaseOrderToken: (s: Session, stripePurchaseOrderToken: string) => Promise<any>;
