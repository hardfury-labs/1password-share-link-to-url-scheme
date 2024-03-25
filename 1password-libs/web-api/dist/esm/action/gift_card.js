import * as api from "../api";
import {
    GiftCard
} from "../model/billing/gift_card";
import {
    makePromise as mp
} from "../util/make_promise";
var codeLocation = "action/gift_card",
    makePromise = mp(codeLocation);
export var getGiftCards = function(i) {
    return makePromise("getGiftCards", function() {
        return api.billing.getGiftCards(i.session).then(function(i) {
            return i.map(GiftCard)
        })
    })
};
export var redeemGiftCard = function(i, r) {
    return makePromise("redeemGiftCard", function() {
        return api.billing.redeemGiftCard(i.session, r)
    })
};
export var checkGiftCard = function(i, r) {
    return api.billing.checkGiftCard(i.session, r)
};