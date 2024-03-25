var HeaderField, ItemType, __awaiter = this && this.__awaiter || function(e, t, r, a) {
        return new(r || (r = Promise))(function(n, o) {
            function l(e) {
                try {
                    d(a.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function i(e) {
                try {
                    d(a.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function d(e) {
                var t;
                e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(l, i)
            }
            d((a = a.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, a, n, o, l = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: i(0),
            throw: i(1),
            return: i(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function i(o) {
            return function(i) {
                return function(o) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; l;) try {
                        if (r = 1, a && (n = 2 & o[0] ? a.return : o[0] ? a.throw || ((n = a.return) && n.call(a), 0) : a.next) && !(n = n.call(a, o[1])).done) return n;
                        switch (a = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                            case 0:
                            case 1:
                                n = o;
                                break;
                            case 4:
                                return l.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                l.label++, a = o[1], o = [0];
                                continue;
                            case 7:
                                o = l.ops.pop(), l.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = l.trys).length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    l = 0;
                                    continue
                                }
                                if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                                    l.label = o[1];
                                    break
                                }
                                if (6 === o[0] && l.label < n[1]) {
                                    l.label = n[1], n = o;
                                    break
                                }
                                if (n && l.label < n[2]) {
                                    l.label = n[2], l.ops.push(o);
                                    break
                                }
                                n[2] && l.ops.pop(), l.trys.pop();
                                continue
                        }
                        o = t.call(e, l)
                    } catch (e) {
                        o = [6, e], a = 0
                    } finally {
                        r = n = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, i])
            }
        }
    };
import {
    map
} from "lodash-es";
import moment from "moment";
import * as model from "../../../model";
import * as util from "../../../util";
import {
    getTemplates
} from "../../vault_item_template";
import {
    BoundCellType,
    createLoginItem,
    LoginHeader
} from "./csv";
import {
    parseWithHeaders
} from "./helpers/parser_helpers";
! function(e) {
    e.ItemType = "Entry Type", e.Title = "Label", e.Username = "Username", e.Password = "Password", e.URL = "Site URL", e.Notes = "Notes", e.Text = "Text", e.CardType = "Type", e.NameOnCard = "Name on card", e.CardNumber = "Card Number", e.CVV = "CVV", e.Expiry = "Expiry"
}(HeaderField || (HeaderField = {})),
function(e) {
    e.Login = "Password", e.SecureNote = "General", e.CreditCard = "Credit Card"
}(ItemType || (ItemType = {}));
export var parseEncryptrExport = function(e, t, r, a) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n, o, l, i;
        return __generator(this, function(d) {
            switch (d.label) {
                case 0:
                    return n = parseWithHeaders(t), [4, getTemplates(e)];
                case 1:
                    return o = d.sent(), l = o.find(function(e) {
                        return e.uuid === model.VaultItemTemplate.LoginUuid
                    }), i = o.find(function(e) {
                        return e.uuid === model.VaultItemTemplate.CreditCardUuid
                    }), [2, n.map(function(e) {
                        switch (e[HeaderField.ItemType]) {
                            case ItemType.Login:
                                return handleLogin(r, e, l, a);
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
var getValueFromRecord = function(e, t) {
        var r;
        return null !== (r = e[t]) && void 0 !== r ? r : ""
    },
    handleLogin = function(e, t, r, a) {
        var n = bindRecordToHeaders(t);
        return createLoginItem(e, r, a, n)
    },
    bindRecordToHeaders = function(e) {
        return [{
            type: BoundCellType.Template,
            headerValue: LoginHeader.Title,
            cellValue: e[HeaderField.Title] || ""
        }, {
            type: BoundCellType.Template,
            headerValue: LoginHeader.Username,
            cellValue: e[HeaderField.Username] || ""
        }, {
            type: BoundCellType.Template,
            headerValue: LoginHeader.Password,
            cellValue: e[HeaderField.Password] || ""
        }, {
            type: BoundCellType.Template,
            headerValue: LoginHeader.Website,
            cellValue: e[HeaderField.URL] || ""
        }, {
            type: BoundCellType.Template,
            headerValue: LoginHeader.Notes,
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
                        o = Number(moment(a, "MMYY").format("YYYYMM"));
                    o || (o = 0), e.v = o
            }
        }), n
    },
    handleUnknownItem = function(e, t, r) {
        var a = new model.VaultItem(e);
        a.templateUuid = model.VaultItemTemplate.SecureNoteUuid, a.title = getValueFromRecord(t, HeaderField.Title), a.notes = getValueFromRecord(t, HeaderField.Text);
        var n = map(t, function(e, t) {
                return {
                    k: model.VaultItem.FieldType.String,
                    n: util.generateUUID(),
                    v: e,
                    t: t
                }
            }),
            o = {
                name: util.generateUUID(),
                title: r["Other Fields"](),
                fields: n
            };
        return a.details.sections = [o], a
    };