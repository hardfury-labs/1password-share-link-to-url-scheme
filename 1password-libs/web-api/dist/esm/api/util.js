import {
    map,
    mapValues,
    pickBy
} from "lodash-es";
import moment from "moment";
export var dataToParamString = function(e) {
    var n = mapValues(e, function(e) {
            return encodedValueString(e)
        }),
        r = pickBy(n, function(e) {
            return e.length > 0
        }),
        t = map(r, function(e, n) {
            return encodeURIComponent(n) + "=" + e
        });
    return t.length > 0 ? "?" + t.join("&") : ""
};
var encodedValueString = function(e) {
        return Array.isArray(e) ? e.map(function(e) {
            return encodeURIComponent(valueString(e))
        }).join(",") : encodeURIComponent(valueString(e))
    },
    valueString = function(e) {
        return void 0 === e || null === e ? "" : "string" == typeof e ? e : Array.isArray(e) ? e.map(function(e) {
            return valueString(e)
        }).join(",") : JSON.stringify(e)
    };
export var bitMaskNames = function(e, n) {
    return n.slice(0, 15).filter(function(n, r) {
        return 0 != (e & 1 << r)
    })
};
export var DateFilterDirection;
! function(e) {
    e.Older = "older", e.Newer = "newer"
}(DateFilterDirection || (DateFilterDirection = {}));
export var getDateForVaultsFilter = function(e, n) {
    return e === DateFilterDirection.Newer ? moment.utc(n).startOf("day") : moment.utc(n).endOf("day")
};