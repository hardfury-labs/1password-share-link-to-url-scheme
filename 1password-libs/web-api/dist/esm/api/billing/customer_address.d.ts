import * as t from "io-ts";
export declare const CustomerAddress: t.ReadonlyC<t.TypeC<{
    country: t.StringC;
    provinceOrState: t.StringC;
    zip: t.StringC;
}>>;
export declare type CustomerAddress = t.TypeOf<typeof CustomerAddress>;
