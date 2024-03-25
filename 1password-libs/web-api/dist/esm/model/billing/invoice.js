import {
    filter,
    reduce
} from "lodash-es";
export var Invoice;
! function(n) {
    n.getSubscriptionLineItems = function(n) {
        return filter(n.lines, function(n) {
            return n.quantity > 0
        })
    }, n.getAdjustmentLineItems = function(n) {
        return filter(n.lines, function(n) {
            return !n.quantity
        })
    }, n.getDiscountAmount = function(n) {
        if (n.discount && n.discount.coupon) {
            var t = reduce(n.lines, function(n, t) {
                return t.discountable ? n + t.amount : n
            }, 0);
            return n.discount.coupon.amountOff || t * n.discount.coupon.percentOff / 100
        }
        return 0
    }
}(Invoice || (Invoice = {}));