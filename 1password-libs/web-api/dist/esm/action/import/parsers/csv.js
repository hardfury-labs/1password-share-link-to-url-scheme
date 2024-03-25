var _a, _b, __awaiter = this && this.__awaiter || function(e, t, r, a) {
        return new(r || (r = Promise))(function(n, i) {
            function l(e) {
                try {
                    u(a.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function o(e) {
                try {
                    u(a.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function u(e) {
                var t;
                e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(l, o)
            }
            u((a = a.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, a, n, i, l = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: o(0),
            throw: o(1),
            return: o(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function o(i) {
            return function(o) {
                return function(i) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; l;) try {
                        if (r = 1, a && (n = 2 & i[0] ? a.return : i[0] ? a.throw || ((n = a.return) && n.call(a), 0) : a.next) && !(n = n.call(a, i[1])).done) return n;
                        switch (a = 0, n && (i = [2 & i[0], n.value]), i[0]) {
                            case 0:
                            case 1:
                                n = i;
                                break;
                            case 4:
                                return l.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                l.label++, a = i[1], i = [0];
                                continue;
                            case 7:
                                i = l.ops.pop(), l.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = l.trys).length > 0 && n[n.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    l = 0;
                                    continue
                                }
                                if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
                                    l.label = i[1];
                                    break
                                }
                                if (6 === i[0] && l.label < n[1]) {
                                    l.label = n[1], n = i;
                                    break
                                }
                                if (n && l.label < n[2]) {
                                    l.label = n[2], l.ops.push(i);
                                    break
                                }
                                n[2] && l.ops.pop(), l.trys.pop();
                                continue
                        }
                        i = t.call(e, l)
                    } catch (e) {
                        i = [6, e], a = 0
                    } finally {
                        r = n = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, o])
            }
        }
    };
import {
    compact,
    find,
    includes,
    map,
    some
} from "lodash-es";
import moment from "moment";
import * as model from "../../../model";
import {
    VaultItem
} from "../../../model";
import * as util from "../../../util";
import {
    errorHandler as eh
} from "../../../util/error_handler";
import {
    getTemplates
} from "../../vault_item_template";
var codeLocation = "action/import/csv",
    errorHandler = eh(codeLocation);
export var csvToVaultItems = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, a, n, i;
        return __generator(this, function(l) {
            switch (l.label) {
                case 0:
                    return [4, getTemplates(t.context)];
                case 1:
                    r = l.sent();
                    try {
                        switch (e.kind) {
                            case ItemKind.Login:
                                return a = r.find(function(e) {
                                    return e.uuid === model.VaultItemTemplate.LoginUuid
                                }), [2, createLoginItems(e, t, a)];
                            case ItemKind.CreditCard:
                                return n = r.find(function(e) {
                                    return e.uuid === model.VaultItemTemplate.CreditCardUuid
                                }), [2, createCreditCardItems(e, t, n)];
                            case ItemKind.SecureNote:
                                return i = r.find(function(e) {
                                    return e.uuid === model.VaultItemTemplate.SecureNoteUuid
                                }), [2, createSecureNoteItems(e, t, i)]
                        }
                    } catch (e) {
                        return [2, errorHandler("csvToVaultItems", e)]
                    }
                    return [2]
            }
        })
    })
};
var createLoginItems = function(e, t, r) {
    return e.rows.map(function(e) {
        return createLoginItem(t.vault, r, t.translators, e)
    })
};
export var createLoginItem = function(e, t, r, a) {
    var n = new VaultItem(e);
    n.templateUuid = t.uuid;
    var i = a.filter(function(e) {
            return e.type === BoundCellType.Template
        }),
        l = a.filter(function(e) {
            return e.type === BoundCellType.Custom
        });
    if (null === i || void 0 === i || i.forEach(function(e) {
            var r = e.cellValue;
            switch (e.headerValue) {
                case LoginHeader.Title:
                    n.title = r || t.singularName;
                    break;
                case LoginHeader.Username:
                    n.setUsername(r);
                    break;
                case LoginHeader.Password:
                    r.length > 0 && n.setPassword(r);
                    break;
                case LoginHeader.Website:
                    r.length > 0 && (n.url = r);
                    break;
                case LoginHeader.Notes:
                    r.length > 0 && (n.notes = r)
            }
        }), l) {
        var o = createCustomTemplateDetailsSection(r, l);
        n.details.sections.push(o)
    }
    return n
};
var createSecureNoteItems = function(e, t, r) {
        return e.rows.map(function(e) {
            var a = new VaultItem(t.vault, r),
                n = e.filter(function(e) {
                    return e.type === BoundCellType.Template
                }),
                i = e.filter(function(e) {
                    return e.type === BoundCellType.Custom
                }),
                l = n.find(function(e) {
                    return e.headerValue === SecureNoteHeader.Title
                });
            a.title = (null === l || void 0 === l ? void 0 : l.cellValue) || r.singularName;
            var o = n.find(function(e) {
                return e.headerValue === SecureNoteHeader.Notes
            });
            if (o && (a.notes = o.cellValue), i) {
                var u = createCustomTemplateDetailsSection(t.translators, i);
                a.details.sections.push(u)
            }
            return a
        })
    },
    createCreditCardItems = function(e, t, r) {
        return e.rows.map(function(e) {
            return createCreditCardItem(e, t.vault, r, t.translators)
        })
    },
    createCreditCardItem = function(e, t, r, a) {
        var n = new VaultItem(t, r),
            i = e.filter(function(e) {
                return e.type === BoundCellType.Template
            }),
            l = e.filter(function(e) {
                return e.type === BoundCellType.Custom
            }),
            o = i.find(function(e) {
                return e.headerValue === CCHeader.Title
            });
        n.title = (null === o || void 0 === o ? void 0 : o.cellValue) || r.singularName;
        var u = i.find(function(e) {
            return e.headerValue === CCHeader.Notes
        });
        u && (n.notes = u.cellValue);
        var c = itemFieldLocations[ItemKind.CreditCard];
        if (!c) return n;
        if (i && assignTemplateCells({
                item: n,
                template: r,
                locations: c,
                templateCells: i
            }), l) {
            var d = createCustomTemplateDetailsSection(a, l);
            n.details.sections.push(d)
        }
        return n
    },
    assignTemplateCells = function(e) {
        e.templateCells.forEach(function(t) {
            if (t.cellValue) {
                var r = e.locations[t.headerValue];
                if (r) {
                    var a = find(e.item.details.sections, function(e) {
                        return e.name === r.section
                    });
                    a && some(a.fields, function(a) {
                        var n;
                        if (a.n === r.field) {
                            a.v = r.v ? r.v(a, t.cellValue) : convertFieldValue(t.cellValue, a.k, (null === (n = t.cellAttrs) || void 0 === n ? void 0 : n[CellAttr.Date]) || "");
                            var i = getItemOverview(e.template, a, e.item);
                            return i && (e.item.overview.ainfo = i), !0
                        }
                        return !1
                    })
                }
            }
        })
    },
    createCustomTemplateDetailsSection = function(e, t) {
        var r = map(t, function(e) {
            if (e.cellValue) return {
                k: VaultItem.FieldType.String,
                n: util.generateUUID(),
                v: e.cellValue || "",
                t: e.headerValue
            }
        });
        return {
            name: util.generateUUID(),
            title: e["Other Fields"](),
            fields: compact(r)
        }
    },
    convertFieldValue = function(e, t, r) {
        e || (e = "");
        var a = e.toLowerCase();
        switch (t) {
            case VaultItem.FieldType.MonthYear:
                var n = Number(moment(e, r).format("YYYYMM"));
                return n || (n = 0), n;
            case VaultItem.FieldType.Gender:
                return "m" === a || "male" === a ? "male" : "f" === a || "female" === a ? "female" : "";
            case VaultItem.FieldType.CreditCardType:
                return includes(a, "visa") ? "visa" : includes(a, "mastercard") || includes(a, "master card") ? "mc" : includes(a, "amex") || includes(a, "american express") ? "amex" : includes(a, "discover") ? "discover" : "";
            case VaultItem.FieldType.Menu:
                return a;
            default:
                return e
        }
    },
    getItemOverview = function(e, t, r) {
        if (e && t.n === e.attrs.subtitle) return VaultItem.getStringValue(t);
        if (r.templateUuid === model.VaultItemTemplate.CreditCardUuid && t.n === VaultItem.FieldName.CreditCard.CreditCardNumber) {
            var a = VaultItem.getStringValue(t);
            return VaultItem.getCreditCardSubtitle(a)
        }
        return ""
    };
export var ItemKind;
! function(e) {
    e.Login = "login", e.CreditCard = "credit card", e.SecureNote = "secure note"
}(ItemKind || (ItemKind = {}));
export var LoginHeader;
! function(e) {
    e.Title = "title", e.Username = "username", e.Password = "password", e.Website = "website", e.Notes = "notes"
}(LoginHeader || (LoginHeader = {}));
export var CCHeader;
! function(e) {
    e.Title = "title", e.CardHolder = "cardholder", e.CardType = "type", e.CardNumber = "ccnum", e.Cvv = "cvv", e.Expiry = "expiry", e.ValidFrom = "validFrom", e.Notes = "notes"
}(CCHeader || (CCHeader = {}));
export var SecureNoteHeader;
! function(e) {
    e.Title = "title", e.Notes = "notes"
}(SecureNoteHeader || (SecureNoteHeader = {}));
export var BoundCellType;
! function(e) {
    e[e.Template = 0] = "Template", e[e.Custom = 1] = "Custom"
}(BoundCellType || (BoundCellType = {}));
export var CellAttr;
! function(e) {
    e.Date = "Date"
}(CellAttr || (CellAttr = {}));
var itemFieldLocations = ((_a = {})[ItemKind.Login] = {}, _a[ItemKind.SecureNote] = {}, _a[ItemKind.CreditCard] = ((_b = {})[CCHeader.CardHolder] = {
    field: "cardholder",
    section: ""
}, _b[CCHeader.CardType] = {
    field: "type",
    section: ""
}, _b[CCHeader.CardNumber] = {
    field: "ccnum",
    section: ""
}, _b[CCHeader.Cvv] = {
    field: "cvv",
    section: ""
}, _b[CCHeader.ValidFrom] = {
    field: "validFrom",
    section: ""
}, _b[CCHeader.Expiry] = {
    field: "expiry",
    section: ""
}, _b), _a);