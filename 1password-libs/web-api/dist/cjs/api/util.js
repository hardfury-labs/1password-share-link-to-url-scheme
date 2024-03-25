"use strict";
var __importDefault = this && this.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
};
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getDateForVaultsFilter = exports.DateFilterDirection = exports.bitMaskNames = exports.dataToParamString = void 0;
var lodash_es_1 = require("lodash-es"),
    moment_1 = __importDefault(require("moment")),
    dataToParamString = function(e) {
        var t = lodash_es_1.mapValues(e, function(e) {
                return encodedValueString(e)
            }),
            r = lodash_es_1.pickBy(t, function(e) {
                return e.length > 0
            }),
            n = lodash_es_1.map(r, function(e, t) {
                return encodeURIComponent(t) + "=" + e
            });
        return n.length > 0 ? "?" + n.join("&") : ""
    };
exports.dataToParamString = dataToParamString;
var DateFilterDirection, encodedValueString = function(e) {
        return Array.isArray(e) ? e.map(function(e) {
            return encodeURIComponent(valueString(e))
        }).join(",") : encodeURIComponent(valueString(e))
    },
    valueString = function(e) {
        return void 0 === e || null === e ? "" : "string" == typeof e ? e : Array.isArray(e) ? e.map(function(e) {
            return valueString(e)
        }).join(",") : JSON.stringify(e)
    },
    bitMaskNames = function(e, t) {
        return t.slice(0, 15).filter(function(t, r) {
            return 0 != (e & 1 << r)
        })
    };
exports.bitMaskNames = bitMaskNames,
    function(e) {
        e.Older = "older", e.Newer = "newer"
    }(DateFilterDirection = exports.DateFilterDirection || (exports.DateFilterDirection = {}));
var getDateForVaultsFilter = function(e, t) {
    return e === DateFilterDirection.Newer ? moment_1.default.utc(t).startOf("day") : moment_1.default.utc(t).endOf("day")
};
exports.getDateForVaultsFilter = getDateForVaultsFilter;