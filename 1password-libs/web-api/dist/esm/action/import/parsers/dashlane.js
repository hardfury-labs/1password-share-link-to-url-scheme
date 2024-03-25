var __awaiter = this && this.__awaiter || function(e, r, t, a) {
        return new(t || (t = Promise))(function(l, n) {
            function o(e) {
                try {
                    i(a.next(e))
                } catch (e) {
                    n(e)
                }
            }

            function u(e) {
                try {
                    i(a.throw(e))
                } catch (e) {
                    n(e)
                }
            }

            function i(e) {
                var r;
                e.done ? l(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(o, u)
            }
            i((a = a.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, a, l, n, o = {
            label: 0,
            sent: function() {
                if (1 & l[0]) throw l[1];
                return l[1]
            },
            trys: [],
            ops: []
        };
        return n = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
            return this
        }), n;

        function u(n) {
            return function(u) {
                return function(n) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (t = 1, a && (l = 2 & n[0] ? a.return : n[0] ? a.throw || ((l = a.return) && l.call(a), 0) : a.next) && !(l = l.call(a, n[1])).done) return l;
                        switch (a = 0, l && (n = [2 & n[0], l.value]), n[0]) {
                            case 0:
                            case 1:
                                l = n;
                                break;
                            case 4:
                                return o.label++, {
                                    value: n[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, a = n[1], n = [0];
                                continue;
                            case 7:
                                n = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(l = (l = o.trys).length > 0 && l[l.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === n[0] && (!l || n[1] > l[0] && n[1] < l[3])) {
                                    o.label = n[1];
                                    break
                                }
                                if (6 === n[0] && o.label < l[1]) {
                                    o.label = l[1], l = n;
                                    break
                                }
                                if (l && o.label < l[2]) {
                                    o.label = l[2], o.ops.push(n);
                                    break
                                }
                                l[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        n = r.call(e, o)
                    } catch (e) {
                        n = [6, e], a = 0
                    } finally {
                        t = l = 0
                    }
                    if (5 & n[0]) throw n[1];
                    return {
                        value: n[0] ? n[1] : void 0,
                        done: !0
                    }
                }([n, u])
            }
        }
    };
import {
    flattenDeep,
    isEmpty
} from "lodash-es";
import * as util from "../../../util";
import {
    errorHandler as eh
} from "../../../util/error_handler";
import {
    BoundCellType,
    CCHeader,
    csvToVaultItems,
    ItemKind,
    LoginHeader
} from "./csv";
var codeLocation = "action/import/dashlane",
    errorHandler = eh(codeLocation);
export var parseDashlaneExport = function(e, r, t, a) {
    return __awaiter(void 0, void 0, void 0, function() {
        var l, n, o, u, i, s;
        return __generator(this, function(c) {
            switch (c.label) {
                case 0:
                    l = {
                        AUTHENTIFIANT: [],
                        PAYMENTMEANS_CREDITCARD: []
                    };
                    try {
                        l = JSON.parse(r)
                    } catch (e) {
                        throw new util.errors.ClientError(113, "Invalid file type")
                    }
                    if (!l || isEmpty(l)) return [2, []];
                    n = [], l.AUTHENTIFIANT && (o = l.AUTHENTIFIANT.map(function(e) {
                        return createLoginBoundCells(e)
                    }), n.push(csvToVaultItems({
                        kind: ItemKind.Login,
                        rows: o
                    }, {
                        context: e,
                        vault: t,
                        translators: a
                    }))), l.PAYMENTMEANS_CREDITCARD && (u = l.PAYMENTMEANS_CREDITCARD.map(function(e) {
                        return createCsvCreditCardBoundCells(e)
                    }), n.push(csvToVaultItems({
                        kind: ItemKind.CreditCard,
                        rows: u
                    }, {
                        context: e,
                        vault: t,
                        translators: a
                    }))), c.label = 1;
                case 1:
                    return c.trys.push([1, 3, , 4]), [4, Promise.all(n)];
                case 2:
                    return i = c.sent(), [2, flattenDeep(i)];
                case 3:
                    return s = c.sent(), [2, errorHandler("parseDashlaneExport", s)];
                case 4:
                    return [2]
            }
        })
    })
};
var createCsvCreditCardBoundCells = function(e) {
        return [{
            type: BoundCellType.Template,
            headerValue: CCHeader.Title,
            cellValue: e.bank || ""
        }, {
            type: BoundCellType.Template,
            headerValue: CCHeader.CardHolder,
            cellValue: e.owner || ""
        }, {
            type: BoundCellType.Template,
            headerValue: CCHeader.CardType,
            cellValue: e.bank || ""
        }, {
            type: BoundCellType.Template,
            headerValue: CCHeader.CardNumber,
            cellValue: e.cardNumber || ""
        }]
    },
    createLoginBoundCells = function(e) {
        return [{
            type: BoundCellType.Template,
            headerValue: LoginHeader.Title,
            cellValue: e.title || ""
        }, {
            type: BoundCellType.Template,
            headerValue: LoginHeader.Username,
            cellValue: e.login || e.email || ""
        }, {
            type: BoundCellType.Custom,
            headerValue: "email",
            cellValue: e.login && e.email ? e.email : ""
        }, {
            type: BoundCellType.Template,
            headerValue: LoginHeader.Password,
            cellValue: e.password || ""
        }, {
            type: BoundCellType.Template,
            headerValue: LoginHeader.Website,
            cellValue: e.domain || ""
        }, {
            type: BoundCellType.Template,
            headerValue: LoginHeader.Notes,
            cellValue: e.note || ""
        }, {
            type: BoundCellType.Custom,
            headerValue: "secondary login",
            cellValue: e.secondaryLogin || ""
        }]
    };