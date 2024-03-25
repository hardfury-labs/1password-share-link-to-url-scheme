var __awaiter = this && this.__awaiter || function(t, e, n, r) {
        return new(n || (n = Promise))(function(i, o) {
            function a(t) {
                try {
                    s(r.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function u(t) {
                try {
                    s(r.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function s(t) {
                var e;
                t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                    t(e)
                })).then(a, u)
            }
            s((r = r.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        var n, r, i, o, a = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function u(o) {
            return function(u) {
                return function(o) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                        switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return a.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = o[1], o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < i[1]) {
                                    a.label = i[1], i = o;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(o);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        o = e.call(t, a)
                    } catch (t) {
                        o = [6, t], r = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, u])
            }
        }
    };
import * as t from "io-ts";
import {
    readonlyArrayOmitNullish,
    unsafeDecodeAs,
    withDefault
} from "../../util/validator";
import {
    Card
} from "./card";
import {
    Coupon
} from "./coupon";
export var OpTaxNumber = t.readonly(t.type({
    label: t.string,
    number: t.string,
    effective: t.string
}), "OpTaxNumber");
export var InvoiceLine = t.readonly(t.type({
    stripeInvoiceLineUID: t.string,
    amount: t.number,
    currency: t.string,
    description: t.string,
    periodStart: t.string,
    periodEnd: t.string,
    planUID: t.union([t.string, t.undefined]),
    quantity: withDefault(t.number, 0),
    proration: withDefault(t.boolean, !1),
    discountable: withDefault(t.boolean, !1),
    taxName: withDefault(t.string, "")
}), "InvoiceLine");
export var Charge = t.readonly(t.type({
    uid: t.string,
    amount: t.number,
    captured: t.boolean,
    created: t.string,
    currency: t.string,
    paid: t.boolean,
    refunded: t.boolean,
    amountRefunded: t.number,
    desc: t.string,
    failMsg: t.string,
    failCode: t.string,
    meta: withDefault(t.record(t.string, t.string), {}),
    email: t.string,
    statement: t.string,
    status: t.string,
    source: t.union([Card, t.null])
}), "Charge");
export var Discount = t.readonly(t.type({
    coupon: t.union([Coupon, t.null]),
    start: t.string,
    end: t.string
}), "Discount");
export var Invoice = t.readonly(t.type({
    stripeInvoiceUID: t.string,
    accountName: t.string,
    address: t.string,
    amountDue: t.number,
    attemptCount: t.number,
    attempted: t.boolean,
    billTo: t.string,
    charge: t.union([Charge, t.null]),
    closed: t.boolean,
    currency: t.string,
    date: t.string,
    description: t.string,
    discount: t.union([Discount, t.null]),
    endingBalance: t.number,
    forgiven: t.boolean,
    lines: withDefault(readonlyArrayOmitNullish(InvoiceLine), []),
    metadata: withDefault(t.record(t.string, t.string), {}),
    nextPaymentAttempt: t.string,
    willRetry: t.boolean,
    paid: t.boolean,
    periodStart: t.string,
    periodEnd: t.string,
    startingBalance: t.number,
    statementDescriptor: t.string,
    subtotal: t.number,
    tax: t.number,
    taxPercent: t.number,
    total: t.number,
    taxName: t.string,
    taxNumber: withDefault(t.string, ""),
    isTaxExempt: withDefault(t.boolean, !1),
    opTaxNumbers: t.union([t.readonlyArray(OpTaxNumber), t.null]),
    showDefaultTaxMsg: t.boolean
}), "Invoice");
export var getInvoices = function(e, n, r) {
    return void 0 === n && (n = 0), void 0 === r && (r = 20), __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(i) {
            return [2, e.get("/api/v1/invoices?page=" + n + "&limit=" + r).then(unsafeDecodeAs(t.readonlyArray(Invoice)))]
        })
    })
};
export var getInvoiceDetails = function(t, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            return [2, t.get("/api/v1/invoice/" + e).then(unsafeDecodeAs(Invoice))]
        })
    })
};
export var requestInvoiceEmail = function(t, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, t.post("/api/v1/invoice/" + e + "/email")];
                case 1:
                    return n.sent(), [2]
            }
        })
    })
};