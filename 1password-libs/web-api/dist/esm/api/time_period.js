import {
    reduce
} from "lodash-es";
import moment from "moment";
export var timePeriodToDate = function(t) {
    if (0 === t) return new Date(0);
    var e = t < 30 ? {
        days: t
    } : {
        months: t / 30
    };
    return moment().subtract(e).toDate()
};
export var Durations = [7, 30, 60, 90, 180, 365, 0];
export var findFirstDateOfDuration = function(t) {
    return function(e) {
        return 0 === e ? 0 : moment(t).subtract(e, "days").valueOf()
    }
};
export var findOldestUsageDate = function(t) {
    return function(e) {
        return reduce(e, function(t, e) {
            return moment(e.lastUsedAt).isSameOrBefore(t) ? moment(e.lastUsedAt) : t
        }, moment(t)).valueOf()
    }
};