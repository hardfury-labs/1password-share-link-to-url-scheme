var __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(o, a) {
            function i(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function c(e) {
                try {
                    u(n.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function u(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(i, c)
            }
            u((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, o, a, i = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: c(0),
            throw: c(1),
            return: c(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function c(a) {
            return function(c) {
                return function(a) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                        switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                            case 0:
                            case 1:
                                o = a;
                                break;
                            case 4:
                                return i.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, n = a[1], a = [0];
                                continue;
                            case 7:
                                a = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                    i.label = a[1];
                                    break
                                }
                                if (6 === a[0] && i.label < o[1]) {
                                    i.label = o[1], o = a;
                                    break
                                }
                                if (o && i.label < o[2]) {
                                    i.label = o[2], i.ops.push(a);
                                    break
                                }
                                o[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        a = t.call(e, i)
                    } catch (e) {
                        a = [6, e], n = 0
                    } finally {
                        r = o = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, c])
            }
        }
    };
import * as model from "../../../../model";
import {
    dateFromGolang
} from "../../../../util";
import {
    getServiceAccount
} from "../../../serviceaccounts";
export var getDataStreamingSummaryInfo = function(e) {
    var t = e.CTX,
        r = e.sa;
    return __awaiter(void 0, void 0, void 0, function() {
        var e, n, o, a;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return i.trys.push([0, 2, , 3]), [4, getServiceAccount(t, r.uuid, {
                        attrs: model.ServiceAccountUser.Attr.Tokens,
                        mustReload: !0
                    })];
                case 1:
                    return o = i.sent(), e = getActiveTokens(o.tokens), n = e.length, [3, 3];
                case 2:
                    return a = i.sent(), console.error("Could not get tokens for " + r.uuid, a), [3, 3];
                case 3:
                    return [2, {
                        title: r.name,
                        icon: r.avatar,
                        groups: [],
                        active: n,
                        tokens: e,
                        createdAt: dateFromGolang(r.createdAt),
                        syncActivity: void 0,
                        version: "",
                        vaults: {
                            displayable: [],
                            total: 0
                        }
                    }]
            }
        })
    })
};
var getActiveTokens = function(e) {
    var t = new Date;
    return e.filter(function(e) {
        var r = e.expiresAt && new Date(e.expiresAt) < t;
        return "A" === e.state && !r
    })
};