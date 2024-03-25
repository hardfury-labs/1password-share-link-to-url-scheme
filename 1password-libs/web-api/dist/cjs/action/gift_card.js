"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, i) {
        void 0 === i && (i = r), Object.defineProperty(e, i, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, i) {
        void 0 === i && (i = r), e[i] = t[r]
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
}), exports.checkGiftCard = exports.redeemGiftCard = exports.getGiftCards = void 0;
var api = __importStar(require("../api")),
    gift_card_1 = require("../model/billing/gift_card"),
    make_promise_1 = require("../util/make_promise"),
    codeLocation = "action/gift_card",
    makePromise = make_promise_1.makePromise(codeLocation),
    getGiftCards = function(e) {
        return makePromise("getGiftCards", function() {
            return api.billing.getGiftCards(e.session).then(function(e) {
                return e.map(gift_card_1.GiftCard)
            })
        })
    };
exports.getGiftCards = getGiftCards;
var redeemGiftCard = function(e, t) {
    return makePromise("redeemGiftCard", function() {
        return api.billing.redeemGiftCard(e.session, t)
    })
};
exports.redeemGiftCard = redeemGiftCard;
var checkGiftCard = function(e, t) {
    return api.billing.checkGiftCard(e.session, t)
};
exports.checkGiftCard = checkGiftCard;