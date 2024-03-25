import * as t from "io-ts";
export var CustomerAddress = t.readonly(t.type({
    country: t.string,
    provinceOrState: t.string,
    zip: t.string
}), "CustomerAddress");