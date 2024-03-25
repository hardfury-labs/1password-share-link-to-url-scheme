"use strict";
var _a, _b, __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, a) {
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
    },
    __importDefault = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.CellAttr = exports.BoundCellType = exports.SecureNoteHeader = exports.CCHeader = exports.LoginHeader = exports.ItemKind = exports.createLoginItem = exports.csvToVaultItems = void 0;
var lodash_es_1 = require("lodash-es"),
    moment_1 = __importDefault(require("moment")),
    model = __importStar(require("../../../model")),
    model_1 = require("../../../model"),
    util = __importStar(require("../../../util")),
    error_handler_1 = require("../../../util/error_handler"),
    vault_item_template_1 = require("../../vault_item_template"),
    codeLocation = "action/import/csv",
    errorHandler = error_handler_1.errorHandler(codeLocation),
    csvToVaultItems = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, a, n, i;
            return __generator(this, function(l) {
                switch (l.label) {
                    case 0:
                        return [4, vault_item_template_1.getTemplates(t.context)];
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
exports.csvToVaultItems = csvToVaultItems;
var createLoginItems = function(e, t, r) {
        return e.rows.map(function(e) {
            return exports.createLoginItem(t.vault, r, t.translators, e)
        })
    },
    createLoginItem = function(e, t, r, a) {
        var n = new model_1.VaultItem(e);
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
exports.createLoginItem = createLoginItem;
var ItemKind, LoginHeader, CCHeader, SecureNoteHeader, BoundCellType, CellAttr, createSecureNoteItems = function(e, t, r) {
        return e.rows.map(function(e) {
            var a = new model_1.VaultItem(t.vault, r),
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
        var n = new model_1.VaultItem(t, r),
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
        var d = itemFieldLocations[ItemKind.CreditCard];
        if (!d) return n;
        if (i && assignTemplateCells({
                item: n,
                template: r,
                locations: d,
                templateCells: i
            }), l) {
            var s = createCustomTemplateDetailsSection(a, l);
            n.details.sections.push(s)
        }
        return n
    },
    assignTemplateCells = function(e) {
        e.templateCells.forEach(function(t) {
            if (t.cellValue) {
                var r = e.locations[t.headerValue];
                if (r) {
                    var a = lodash_es_1.find(e.item.details.sections, function(e) {
                        return e.name === r.section
                    });
                    a && lodash_es_1.some(a.fields, function(a) {
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
        var r = lodash_es_1.map(t, function(e) {
            if (e.cellValue) return {
                k: model_1.VaultItem.FieldType.String,
                n: util.generateUUID(),
                v: e.cellValue || "",
                t: e.headerValue
            }
        });
        return {
            name: util.generateUUID(),
            title: e["Other Fields"](),
            fields: lodash_es_1.compact(r)
        }
    },
    convertFieldValue = function(e, t, r) {
        e || (e = "");
        var a = e.toLowerCase();
        switch (t) {
            case model_1.VaultItem.FieldType.MonthYear:
                var n = Number(moment_1.default(e, r).format("YYYYMM"));
                return n || (n = 0), n;
            case model_1.VaultItem.FieldType.Gender:
                return "m" === a || "male" === a ? "male" : "f" === a || "female" === a ? "female" : "";
            case model_1.VaultItem.FieldType.CreditCardType:
                return lodash_es_1.includes(a, "visa") ? "visa" : lodash_es_1.includes(a, "mastercard") || lodash_es_1.includes(a, "master card") ? "mc" : lodash_es_1.includes(a, "amex") || lodash_es_1.includes(a, "american express") ? "amex" : lodash_es_1.includes(a, "discover") ? "discover" : "";
            case model_1.VaultItem.FieldType.Menu:
                return a;
            default:
                return e
        }
    },
    getItemOverview = function(e, t, r) {
        if (e && t.n === e.attrs.subtitle) return model_1.VaultItem.getStringValue(t);
        if (r.templateUuid === model.VaultItemTemplate.CreditCardUuid && t.n === model_1.VaultItem.FieldName.CreditCard.CreditCardNumber) {
            var a = model_1.VaultItem.getStringValue(t);
            return model_1.VaultItem.getCreditCardSubtitle(a)
        }
        return ""
    };
! function(e) {
    e.Login = "login", e.CreditCard = "credit card", e.SecureNote = "secure note"
}(ItemKind = exports.ItemKind || (exports.ItemKind = {})),
function(e) {
    e.Title = "title", e.Username = "username", e.Password = "password", e.Website = "website", e.Notes = "notes"
}(LoginHeader = exports.LoginHeader || (exports.LoginHeader = {})),
function(e) {
    e.Title = "title", e.CardHolder = "cardholder", e.CardType = "type", e.CardNumber = "ccnum", e.Cvv = "cvv", e.Expiry = "expiry", e.ValidFrom = "validFrom", e.Notes = "notes"
}(CCHeader = exports.CCHeader || (exports.CCHeader = {})),
function(e) {
    e.Title = "title", e.Notes = "notes"
}(SecureNoteHeader = exports.SecureNoteHeader || (exports.SecureNoteHeader = {})),
function(e) {
    e[e.Template = 0] = "Template", e[e.Custom = 1] = "Custom"
}(BoundCellType = exports.BoundCellType || (exports.BoundCellType = {})),
function(e) {
    e.Date = "Date"
}(CellAttr = exports.CellAttr || (exports.CellAttr = {}));
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