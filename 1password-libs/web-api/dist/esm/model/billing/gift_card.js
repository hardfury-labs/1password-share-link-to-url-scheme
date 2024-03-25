var __assign = this && this.__assign || function() {
    return (__assign = Object.assign || function(r) {
        for (var t, e = 1, n = arguments.length; e < n; e++)
            for (var i in t = arguments[e]) Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
        return r
    }).apply(this, arguments)
};
export function GiftCard(r) {
    return Object.freeze(__assign({
        code: "",
        redeemedAt: "",
        amount: 0,
        description: "",
        purchaserEmail: ""
    }, r))
};
! function(r) {
    r.CodePrefix = "GC"
}(GiftCard || (GiftCard = {}));