export var subscriptionDetailAttrsFromAPI = function(e) {
    var r = e.cards && e.cards.length > 0 ? e.cards.slice().sort(compareStripeCards) : [];
    return {
        balance: e.balance || 0,
        cards: r,
        pendingCreditAmount: e.pendingCreditAmount || 0,
        plan: e.plan,
        coupon: e.coupon,
        nextInvoice: e.nextInvoice,
        stripe: e.subscription,
        purchaseOrder: e.purchaseOrder,
        stripePurchaseOrder: e.stripePurchaseOrder,
        customerAddress: e.customerAddress
    }
};
var compareStripeCards = function(e, r) {
    return e.expYear !== r.expYear ? r.expYear - e.expYear : e.expMonth !== r.expMonth ? r.expMonth - e.expMonth : e.name !== r.name ? e.name.localeCompare(r.name) : e.stripeCardUid.localeCompare(r.stripeCardUid)
};