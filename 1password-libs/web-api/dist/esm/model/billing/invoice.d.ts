import { Charge as apiCharge, Discount as apiDiscount, Invoice as apiInvoice, InvoiceLine } from "../../api/billing";
export declare type Charge = apiCharge;
export declare type Invoice = apiInvoice;
export declare type Discount = apiDiscount;
export declare namespace Invoice {
    const getSubscriptionLineItems: (i: Invoice) => InvoiceLine[];
    const getAdjustmentLineItems: (i: Invoice) => InvoiceLine[];
    const getDiscountAmount: (i: Invoice) => number;
}
