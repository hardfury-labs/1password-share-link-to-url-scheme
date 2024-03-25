"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, a) {
        void 0 === a && (a = r), Object.defineProperty(e, a, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, a) {
        void 0 === a && (a = r), e[a] = t[r]
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
    },
    __awaiter = this && this.__awaiter || function(e, t, r, a) {
        return new(r || (r = Promise))(function(n, l) {
            function o(e) {
                try {
                    u(a.next(e))
                } catch (e) {
                    l(e)
                }
            }

            function i(e) {
                try {
                    u(a.throw(e))
                } catch (e) {
                    l(e)
                }
            }

            function u(e) {
                var t;
                e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(o, i)
            }
            u((a = a.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, a, n, l, o = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return l = {
            next: i(0),
            throw: i(1),
            return: i(2)
        }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
            return this
        }), l;

        function i(l) {
            return function(i) {
                return function(l) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (r = 1, a && (n = 2 & l[0] ? a.return : l[0] ? a.throw || ((n = a.return) && n.call(a), 0) : a.next) && !(n = n.call(a, l[1])).done) return n;
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
                        l = t.call(e, o)
                    } catch (e) {
                        l = [6, e], a = 0
                    } finally {
                        r = n = 0
                    }
                    if (5 & l[0]) throw l[1];
                    return {
                        value: l[0] ? l[1] : void 0,
                        done: !0
                    }
                }([l, i])
            }
        }
    },
    __importDefault = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.parseEncryptrExport = void 0;
var HeaderField, ItemType, lodash_es_1 = require("lodash-es"),
    moment_1 = __importDefault(require("moment")),
    model = __importStar(require("../../../model")),
    util = __importStar(require("../../../util")),
    vault_item_template_1 = require("../../vault_item_template"),
    csv_1 = require("./csv"),
    parser_helpers_1 = require("./helpers/parser_helpers");
! function(e) {
    e.ItemType = "Entry Type", e.Title = "Label", e.Username = "Username", e.Password = "Password", e.URL = "Site URL", e.Notes = "Notes", e.Text = "Text", e.CardType = "Type", e.NameOnCard = "Name on card", e.CardNumber = "Card Number", e.CVV = "CVV", e.Expiry = "Expiry"
}(HeaderField || (HeaderField = {})),
function(e) {
    e.Login = "Password", e.SecureNote = "General", e.CreditCard = "Credit Card"
}(ItemType || (ItemType = {}));
var parseEncryptrExport = function(e, t, r, a) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n, l, o, i;
        return __generator(this, function(u) {
            switch (u.label) {
                case 0:
                    return n = parser_helpers_1.parseWithHeaders(t), [4, vault_item_template_1.getTemplates(e)];
                case 1:
                    return l = u.sent(), o = l.find(function(e) {
                        return e.uuid === model.VaultItemTemplate.LoginUuid
                    }), i = l.find(function(e) {
                        return e.uuid === model.VaultItemTemplate.CreditCardUuid
                    }), [2, n.map(function(e) {
                        switch (e[HeaderField.ItemType]) {
                            case ItemType.Login:
                                return handleLogin(r, e, o, a);
                            case ItemType.SecureNote:
                                return handleNote(r, e);
                            case ItemType.CreditCard:
                                return handleCreditCard(r, e, i);
                            default:
                                return handleUnknownItem(r, e, a)
                        }
                    })]
            }
        })
    })
};
exports.parseEncryptrExport = parseEncryptrExport;
var getValueFromRecord = function(e, t) {
        var r;
        return null !== (r = e[t]) && void 0 !== r ? r : ""
    },
    handleLogin = function(e, t, r, a) {
        var n = bindRecordToHeaders(t);
        return csv_1.createLoginItem(e, r, a, n)
    },
    bindRecordToHeaders = function(e) {
        return [{
            type: csv_1.BoundCellType.Template,
            headerValue: csv_1.LoginHeader.Title,
            cellValue: e[HeaderField.Title] || ""
        }, {
            type: csv_1.BoundCellType.Template,
            headerValue: csv_1.LoginHeader.Username,
            cellValue: e[HeaderField.Username] || ""
        }, {
            type: csv_1.BoundCellType.Template,
            headerValue: csv_1.LoginHeader.Password,
            cellValue: e[HeaderField.Password] || ""
        }, {
            type: csv_1.BoundCellType.Template,
            headerValue: csv_1.LoginHeader.Website,
            cellValue: e[HeaderField.URL] || ""
        }, {
            type: csv_1.BoundCellType.Template,
            headerValue: csv_1.LoginHeader.Notes,
            cellValue: e[HeaderField.Notes] || ""
        }]
    },
    handleNote = function(e, t) {
        var r = new model.VaultItem(e);
        r.templateUuid = model.VaultItemTemplate.SecureNoteUuid, r.title = getValueFromRecord(t, HeaderField.Title), r.notes = getValueFromRecord(t, HeaderField.Text);
        var a = getValueFromRecord(t, HeaderField.Notes);
        return "" !== a && (r.notes += "\n\n" + a), r
    },
    handleCreditCard = function(e, t, r) {
        var a, n = new model.VaultItem(e, r);
        return n.title = getValueFromRecord(t, HeaderField.Title), n.notes = getValueFromRecord(t, HeaderField.Notes), null === (a = n.details.sections.find(function(e) {
            return "" === e.name
        }).fields) || void 0 === a || a.forEach(function(e) {
            switch (e.n) {
                case "cardholder":
                    e.v = getValueFromRecord(t, HeaderField.NameOnCard);
                    break;
                case "type":
                    e.v = getValueFromRecord(t, HeaderField.CardType);
                    break;
                case "ccnum":
                    var r = getValueFromRecord(t, HeaderField.CardNumber);
                    n.overview.ainfo = model.VaultItem.getCreditCardSubtitle(r), e.v = r;
                    break;
                case "cvv":
                    e.v = getValueFromRecord(t, HeaderField.CVV);
                    break;
                case "expiry":
                    var a = getValueFromRecord(t, HeaderField.Expiry),
                        l = Number(moment_1.default(a, "MMYY").format("YYYYMM"));
                    l || (l = 0), e.v = l
            }
        }), n
    },
    handleUnknownItem = function(e, t, r) {
        var a = new model.VaultItem(e);
        a.templateUuid = model.VaultItemTemplate.SecureNoteUuid, a.title = getValueFromRecord(t, HeaderField.Title), a.notes = getValueFromRecord(t, HeaderField.Text);
        var n = lodash_es_1.map(t, function(e, t) {
                return {
                    k: model.VaultItem.FieldType.String,
                    n: util.generateUUID(),
                    v: e,
                    t: t
                }
            }),
            l = {
                name: util.generateUUID(),
                title: r["Other Fields"](),
                fields: n
            };
        return a.details.sections = [l], a
    };