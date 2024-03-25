import * as t from "io-ts";
export declare enum Frequency {
    Monthly = "M",
    Yearly = "Y",
    Daily = "D",
    ThreeYear = "3",
    FiveYear = "5",
    Other = "O"
}
export declare const FrequencyCodec: t.Type<Frequency, Frequency, unknown>;
export declare const Plan: t.ReadonlyC<t.TypeC<{
    frequency: t.Type<Frequency, Frequency, unknown>;
    sortOrder: t.NumberC;
    currency: t.StringC;
    display: t.ReadonlyC<t.TypeC<{
        amount: t.NumberC;
        isPerUser: t.BooleanC;
    }>>;
}>>;
export declare type Plan = t.TypeOf<typeof Plan>;
