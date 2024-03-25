"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
        void 0 === n && (n = r), Object.defineProperty(e, n, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, n) {
        void 0 === n && (n = r), e[n] = t[r]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        })
    } : function(e, t) {
        e.default = t
    }),
    __importStar = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && __createBinding(t, e, r);
        return __setModuleDefault(t, e), t
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Plan = exports.FrequencyCodec = exports.Frequency = void 0;
var Frequency, t = __importStar(require("io-ts")),
    validator_1 = require("../../util/validator");
! function(e) {
    e.Monthly = "M", e.Yearly = "Y", e.Daily = "D", e.ThreeYear = "3", e.FiveYear = "5", e.Other = "O"
}(Frequency = exports.Frequency || (exports.Frequency = {})), exports.FrequencyCodec = validator_1.fromStringEnum(Frequency, "Frequency"), exports.Plan = t.readonly(t.type({
    frequency: exports.FrequencyCodec,
    sortOrder: t.number,
    currency: t.string,
    display: t.readonly(t.type({
        amount: t.number,
        isPerUser: t.boolean
    }))
}), "Plan");