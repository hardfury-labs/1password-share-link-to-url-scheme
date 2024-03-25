var __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(i, o) {
            function a(e) {
                try {
                    s(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                try {
                    s(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function s(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(a, u)
            }
            s((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, i, o, a = {
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
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                        switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
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
                                a.label++, n = o[1], o = [0];
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
                        o = t.call(e, a)
                    } catch (e) {
                        o = [6, e], n = 0
                    } finally {
                        r = i = 0
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
    unsafeDecodeAs,
    withDefault
} from "../util/validator";
var VaultOverview = t.readonly(t.intersection([t.type({
        accessVersion: t.number,
        attrVersion: t.number,
        contentVersion: t.number,
        uuid: t.string
    }), t.partial({
        watchtowerReportNeedsUpdating: t.boolean
    })])),
    UserOverview = t.readonly(t.type({
        permissions: t.number
    })),
    BillingOverview = t.readonly(t.intersection([t.type({
        status: t.keyof({
            A: !0,
            C: !0,
            F: !0,
            L: !0,
            T: !0
        }),
        storageUsed: withDefault(t.number, 0)
    }), t.partial({
        accountWillFreezeAt: t.string,
        storageCapacity: t.number
    })])),
    AccountOverview = t.readonly(t.intersection([t.type({
        notifier: t.string,
        accountVersion: t.number,
        billingVersion: t.number,
        templateVersion: t.number,
        userVersion: t.number,
        keysetVersion: t.number,
        userOverview: UserOverview,
        billingOverview: BillingOverview,
        hasPackages: t.boolean,
        supportsItemUsage: t.boolean
    }), t.partial({
        vaults: t.readonlyArray(VaultOverview),
        watchtowerReportVersion: t.number
    })]));
export var getAccountOverview = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [2, e.get("/api/v2/overview").then(unsafeDecodeAs(AccountOverview))]
        })
    })
};