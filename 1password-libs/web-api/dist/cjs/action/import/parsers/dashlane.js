"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, r, t, a) {
        void 0 === a && (a = t), Object.defineProperty(e, a, {
            enumerable: !0,
            get: function() {
                return r[t]
            }
        })
    } : function(e, r, t, a) {
        void 0 === a && (a = t), e[a] = r[t]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(e, r) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: r
        })
    } : function(e, r) {
        e.default = r
    }),
    __importStar = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var r = {};
        if (null != e)
            for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && __createBinding(r, e, t);
        return __setModuleDefault(r, e), r
    },
    __awaiter = this && this.__awaiter || function(e, r, t, a) {
        return new(t || (t = Promise))(function(n, l) {
            function o(e) {
                try {
                    i(a.next(e))
                } catch (e) {
                    l(e)
                }
            }

            function u(e) {
                try {
                    i(a.throw(e))
                } catch (e) {
                    l(e)
                }
            }

            function i(e) {
                var r;
                e.done ? n(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(o, u)
            }
            i((a = a.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, a, n, l, o = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return l = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
            return this
        }), l;

        function u(l) {
            return function(u) {
                return function(l) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (t = 1, a && (n = 2 & l[0] ? a.return : l[0] ? a.throw || ((n = a.return) && n.call(a), 0) : a.next) && !(n = n.call(a, l[1])).done) return n;
                        switch (a = 0, n && (l = [2 & l[0], n.value]), l[0]) {
                            case 0:
                            case 1:
                                n = l;
                                break;
                            case 4:
                                return o.label++, {
                                    value: l[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, a = l[1], l = [0];
                                continue;
                            case 7:
                                l = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === l[0] && (!n || l[1] > n[0] && l[1] < n[3])) {
                                    o.label = l[1];
                                    break
                                }
                                if (6 === l[0] && o.label < n[1]) {
                                    o.label = n[1], n = l;
                                    break
                                }
                                if (n && o.label < n[2]) {
                                    o.label = n[2], o.ops.push(l);
                                    break
                                }
                                n[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        l = r.call(e, o)
                    } catch (e) {
                        l = [6, e], a = 0
                    } finally {
                        t = n = 0
                    }
                    if (5 & l[0]) throw l[1];
                    return {
                        value: l[0] ? l[1] : void 0,
                        done: !0
                    }
                }([l, u])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.parseDashlaneExport = void 0;
var lodash_es_1 = require("lodash-es"),
    util = __importStar(require("../../../util")),
    error_handler_1 = require("../../../util/error_handler"),
    csv_1 = require("./csv"),
    codeLocation = "action/import/dashlane",
    errorHandler = error_handler_1.errorHandler(codeLocation),
    parseDashlaneExport = function(e, r, t, a) {
        return __awaiter(void 0, void 0, void 0, function() {
            var n, l, o, u, i, s;
            return __generator(this, function(c) {
                switch (c.label) {
                    case 0:
                        n = {
                            AUTHENTIFIANT: [],
                            PAYMENTMEANS_CREDITCARD: []
                        };
                        try {
                            n = JSON.parse(r)
                        } catch (e) {
                            throw new util.errors.ClientError(113, "Invalid file type")
                        }
                        if (!n || lodash_es_1.isEmpty(n)) return [2, []];
                        l = [], n.AUTHENTIFIANT && (o = n.AUTHENTIFIANT.map(function(e) {
                            return createLoginBoundCells(e)
                        }), l.push(csv_1.csvToVaultItems({
                            kind: csv_1.ItemKind.Login,
                            rows: o
                        }, {
                            context: e,
                            vault: t,
                            translators: a
                        }))), n.PAYMENTMEANS_CREDITCARD && (u = n.PAYMENTMEANS_CREDITCARD.map(function(e) {
                            return createCsvCreditCardBoundCells(e)
                        }), l.push(csv_1.csvToVaultItems({
                            kind: csv_1.ItemKind.CreditCard,
                            rows: u
                        }, {
                            context: e,
                            vault: t,
                            translators: a
                        }))), c.label = 1;
                    case 1:
                        return c.trys.push([1, 3, , 4]), [4, Promise.all(l)];
                    case 2:
                        return i = c.sent(), [2, lodash_es_1.flattenDeep(i)];
                    case 3:
                        return s = c.sent(), [2, errorHandler("parseDashlaneExport", s)];
                    case 4:
                        return [2]
                }
            })
        })
    };
exports.parseDashlaneExport = parseDashlaneExport;
var createCsvCreditCardBoundCells = function(e) {
        return [{
            type: csv_1.BoundCellType.Template,
            headerValue: csv_1.CCHeader.Title,
            cellValue: e.bank || ""
        }, {
            type: csv_1.BoundCellType.Template,
            headerValue: csv_1.CCHeader.CardHolder,
            cellValue: e.owner || ""
        }, {
            type: csv_1.BoundCellType.Template,
            headerValue: csv_1.CCHeader.CardType,
            cellValue: e.bank || ""
        }, {
            type: csv_1.BoundCellType.Template,
            headerValue: csv_1.CCHeader.CardNumber,
            cellValue: e.cardNumber || ""
        }]
    },
    createLoginBoundCells = function(e) {
        return [{
            type: csv_1.BoundCellType.Template,
            headerValue: csv_1.LoginHeader.Title,
            cellValue: e.title || ""
        }, {
            type: csv_1.BoundCellType.Template,
            headerValue: csv_1.LoginHeader.Username,
            cellValue: e.login || e.email || ""
        }, {
            type: csv_1.BoundCellType.Custom,
            headerValue: "email",
            cellValue: e.login && e.email ? e.email : ""
        }, {
            type: csv_1.BoundCellType.Template,
            headerValue: csv_1.LoginHeader.Password,
            cellValue: e.password || ""
        }, {
            type: csv_1.BoundCellType.Template,
            headerValue: csv_1.LoginHeader.Website,
            cellValue: e.domain || ""
        }, {
            type: csv_1.BoundCellType.Template,
            headerValue: csv_1.LoginHeader.Notes,
            cellValue: e.note || ""
        }, {
            type: csv_1.BoundCellType.Custom,
            headerValue: "secondary login",
            cellValue: e.secondaryLogin || ""
        }]
    };