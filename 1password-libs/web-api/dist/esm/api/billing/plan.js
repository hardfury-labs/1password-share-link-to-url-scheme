import * as t from "io-ts";
import {
    fromStringEnum
} from "../../util/validator";
export var Frequency;
! function(r) {
    r.Monthly = "M", r.Yearly = "Y", r.Daily = "D", r.ThreeYear = "3", r.FiveYear = "5", r.Other = "O"
}(Frequency || (Frequency = {}));
export var FrequencyCodec = fromStringEnum(Frequency, "Frequency");
export var Plan = t.readonly(t.type({
    frequency: FrequencyCodec,
    sortOrder: t.number,
    currency: t.string,
    display: t.readonly(t.type({
        amount: t.number,
        isPerUser: t.boolean
    }))
}), "Plan");