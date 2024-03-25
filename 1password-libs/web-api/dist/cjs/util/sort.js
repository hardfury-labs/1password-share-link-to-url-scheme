"use strict";
var __importDefault = this && this.__importDefault || function(o) {
    return o && o.__esModule ? o : {
        default: o
    }
};
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.compare = exports.compareDates = exports.compareStrings = exports.getOrderedComparator = exports.composeComparator = exports.combineComparators = void 0;
var lodash_es_1 = require("lodash-es"),
    moment_1 = __importDefault(require("moment")),
    combineComparators = function() {
        for (var o = [], e = 0; e < arguments.length; e++) o[e] = arguments[e];
        return lodash_es_1.reduceRight(o, function(o, e) {
            return function(r, t) {
                return e(r, t) || o(r, t)
            }
        }, function(o, e) {
            return 0
        })
    };
exports.combineComparators = combineComparators;
var composeComparator = function(o) {
    return function(e) {
        return function(r, t) {
            return o(e(r), e(t))
        }
    }
};
exports.composeComparator = composeComparator;
var getOrderedComparator = function(o, e) {
    return void 0 === e && (e = !0), e ? o : reverse(o)
};
exports.getOrderedComparator = getOrderedComparator;
var reverse = function(o) {
        return function(e, r) {
            return o(r, e)
        }
    },
    compareNumbers = function(o, e) {
        return void 0 === o && (o = 0), void 0 === e && (e = 0), o - e
    },
    compareBooleans = function(o, e) {
        return void 0 === o && (o = !1), void 0 === e && (e = !1), o === e ? 0 : o ? 1 : -1
    },
    compareStrings = function(o, e) {
        return void 0 === o && (o = ""), void 0 === e && (e = ""), o.localeCompare(e)
    };
exports.compareStrings = compareStrings;
var NEVER = "0001-01-01T00:00:00Z",
    compareDates = function(o, e) {
        return void 0 === o && (o = new Date(NEVER)), void 0 === e && (e = new Date(NEVER)), o.getTime() - e.getTime()
    };
exports.compareDates = compareDates;
var compareMoments = function(o, e) {
        return void 0 === o && (o = NEVER), void 0 === e && (e = NEVER), getValidMoment(o).diff(getValidMoment(e))
    },
    getValidMoment = function(o) {
        void 0 === o && (o = NEVER);
        var e = moment_1.default(o);
        return e.isValid() ? e : moment_1.default(NEVER)
    };
exports.compare = {
    booleans: exports.composeComparator(compareBooleans),
    dates: exports.composeComparator(exports.compareDates),
    moments: exports.composeComparator(compareMoments),
    numbers: exports.composeComparator(compareNumbers),
    strings: exports.composeComparator(exports.compareStrings),
    desc: {
        booleans: exports.composeComparator(reverse(compareBooleans)),
        dates: exports.composeComparator(reverse(exports.compareDates)),
        moments: exports.composeComparator(reverse(compareMoments)),
        numbers: exports.composeComparator(reverse(compareNumbers)),
        strings: exports.composeComparator(reverse(exports.compareStrings))
    }
};