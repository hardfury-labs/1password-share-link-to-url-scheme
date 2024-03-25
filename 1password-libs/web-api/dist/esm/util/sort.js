import {
    reduceRight
} from "lodash-es";
import moment from "moment";
export var combineComparators = function() {
    for (var o = [], r = 0; r < arguments.length; r++) o[r] = arguments[r];
    return reduceRight(o, function(o, r) {
        return function(e, t) {
            return r(e, t) || o(e, t)
        }
    }, function(o, r) {
        return 0
    })
};
export var composeComparator = function(o) {
    return function(r) {
        return function(e, t) {
            return o(r(e), r(t))
        }
    }
};
export var getOrderedComparator = function(o, r) {
    return void 0 === r && (r = !0), r ? o : reverse(o)
};
var reverse = function(o) {
        return function(r, e) {
            return o(e, r)
        }
    },
    compareNumbers = function(o, r) {
        return void 0 === o && (o = 0), void 0 === r && (r = 0), o - r
    },
    compareBooleans = function(o, r) {
        return void 0 === o && (o = !1), void 0 === r && (r = !1), o === r ? 0 : o ? 1 : -1
    };
export var compareStrings = function(o, r) {
    return void 0 === o && (o = ""), void 0 === r && (r = ""), o.localeCompare(r)
};
var NEVER = "0001-01-01T00:00:00Z";
export var compareDates = function(o, r) {
    return void 0 === o && (o = new Date(NEVER)), void 0 === r && (r = new Date(NEVER)), o.getTime() - r.getTime()
};
var compareMoments = function(o, r) {
        return void 0 === o && (o = NEVER), void 0 === r && (r = NEVER), getValidMoment(o).diff(getValidMoment(r))
    },
    getValidMoment = function(o) {
        void 0 === o && (o = NEVER);
        var r = moment(o);
        return r.isValid() ? r : moment(NEVER)
    };
export var compare = {
    booleans: composeComparator(compareBooleans),
    dates: composeComparator(compareDates),
    moments: composeComparator(compareMoments),
    numbers: composeComparator(compareNumbers),
    strings: composeComparator(compareStrings),
    desc: {
        booleans: composeComparator(reverse(compareBooleans)),
        dates: composeComparator(reverse(compareDates)),
        moments: composeComparator(reverse(compareMoments)),
        numbers: composeComparator(reverse(compareNumbers)),
        strings: composeComparator(reverse(compareStrings))
    }
};