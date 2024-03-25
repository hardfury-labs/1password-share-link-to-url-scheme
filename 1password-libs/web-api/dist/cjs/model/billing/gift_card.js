"use strict";
var __assign = this && this.__assign || function() {
    return (__assign = Object.assign || function(t) {
        for (var r, e = 1, i = arguments.length; e < i; e++)
            for (var s in r = arguments[e]) Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
        return t
    }).apply(this, arguments)
};

function GiftCard(t) {
    return Object.freeze(__assign({
        code: "",
        redeemedAt: "",
        amount: 0,
        description: "",
        purchaserEmail: ""
    }, t))
}
Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.GiftCard = void 0, exports.GiftCard = GiftCard,
    function(t) {
        t.CodePrefix = "GC"
    }(GiftCard = exports.GiftCard || (exports.GiftCard = {}));