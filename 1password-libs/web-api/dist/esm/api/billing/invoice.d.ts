import * as t from "io-ts";
import { Session } from "../session";
export declare const OpTaxNumber: t.ReadonlyC<t.TypeC<{
    label: t.StringC;
    number: t.StringC;
    effective: t.StringC;
}>>;
export declare type OpTaxNumber = t.TypeOf<typeof OpTaxNumber>;
export declare const InvoiceLine: t.ReadonlyC<t.TypeC<{
    stripeInvoiceLineUID: t.StringC;
    amount: t.NumberC;
    currency: t.StringC;
    description: t.StringC;
    periodStart: t.StringC;
    periodEnd: t.StringC;
    planUID: t.UnionC<[t.StringC, t.UndefinedC]>;
    quantity: t.Type<number, number, unknown>;
    proration: t.Type<boolean, boolean, unknown>;
    discountable: t.Type<boolean, boolean, unknown>;
    taxName: t.Type<string, string, unknown>;
}>>;
export declare type InvoiceLine = t.TypeOf<typeof InvoiceLine>;
export declare const Charge: t.ReadonlyC<t.TypeC<{
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
}>>;
export declare type Charge = t.TypeOf<typeof Charge>;
export declare const Discount: t.ReadonlyC<t.TypeC<{
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
}>>;
export declare type Discount = t.TypeOf<typeof Discount>;
export declare const Invoice: t.ReadonlyC<t.TypeC<{
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
}>>;
export declare type Invoice = t.TypeOf<typeof Invoice>;
export declare const getInvoices: (s: Session, page?: number, limit?: number) => Promise<readonly Invoice[]>;
export declare const getInvoiceDetails: (s: Session, uid: string) => Promise<Invoice>;
export declare const requestInvoiceEmail: (s: Session, uid: string) => Promise<void>;
