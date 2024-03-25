"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Invoice = void 0;
var Invoice, lodash_es_1 = require("lodash-es");
! function(e) {
    e.getSubscriptionLineItems = function(e) {
        return lodash_es_1.filter(e.lines, function(e) {
            return e.quantity > 0
        })
    }, e.getAdjustmentLineItems = function(e) {
        return lodash_es_1.filter(e.lines, function(e) {
            return !e.quantity
        })
    }, e.getDiscountAmount = function(e) {
        if (e.discount && e.discount.coupon) {
            var n = lodash_es_1.reduce(e.lines, function(e, n) {
                return n.discountable ? e + n.amount : e
            }, 0);
            return e.discount.coupon.amountOff || n * e.discount.coupon.percentOff / 100
        }
        return 0
    }
}(Invoice = exports.Invoice || (exports.Invoice = {}));