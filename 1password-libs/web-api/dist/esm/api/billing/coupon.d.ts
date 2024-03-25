import * as t from "io-ts";
import { Session } from "../session";
export declare const Coupon: t.ReadonlyC<t.TypeC<{
    stripeCouponUID: t.StringC;
    amountOff: t.NumberC;
    percentOff: t.NumberC;
    createdAt: t.StringC;
    currency: t.StringC;
    duration: t.StringC;
    durationInMonths: t.NumberC;
}>>;
export declare type Coupon = t.TypeOf<typeof Coupon>;
export declare const Promotion: t.ReadonlyC<t.TypeC<{
    name: t.StringC;
    description: t.StringC;
    trialDays: t.NumberC;
    addTrialDays: t.BooleanC;
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
export declare type Promotion = t.TypeOf<typeof Promotion>;
export declare const getValidPromotionFromCode: (s: Session, promoCode: string, accountType: string) => Promise<Promotion>;
