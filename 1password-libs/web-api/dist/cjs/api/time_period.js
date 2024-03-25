"use strict";
var __importDefault = this && this.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    }
};
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.findOldestUsageDate = exports.findFirstDateOfDuration = exports.Durations = exports.timePeriodToDate = void 0;
var lodash_es_1 = require("lodash-es"),
    moment_1 = __importDefault(require("moment")),
    timePeriodToDate = function(t) {
        if (0 === t) return new Date(0);
        var e = t < 30 ? {
            days: t
        } : {
            months: t / 30
        };
        return moment_1.default().subtract(e).toDate()
    };
exports.timePeriodToDate = timePeriodToDate, exports.Durations = [7, 30, 60, 90, 180, 365, 0];
var findFirstDateOfDuration = function(t) {
    return function(e) {
        return 0 === e ? 0 : moment_1.default(t).subtract(e, "days").valueOf()
    }
};
exports.findFirstDateOfDuration = findFirstDateOfDuration;
var findOldestUsageDate = function(t) {
    return function(e) {
        return lodash_es_1.reduce(e, function(t, e) {
            return moment_1.default(e.lastUsedAt).isSameOrBefore(t) ? moment_1.default(e.lastUsedAt) : t
        }, moment_1.default(t)).valueOf()
    }
};
exports.findOldestUsageDate = findOldestUsageDate;