"use strict";
var __awaiter = this && this.__awaiter || function(e, r, t, n) {
        return new(t || (t = Promise))(function(o, a) {
            function s(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function i(e) {
                try {
                    u(n.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function u(e) {
                var r;
                e.done ? o(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(s, i)
            }
            u((n = n.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, n, o, a, s = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: i(0),
            throw: i(1),
            return: i(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function i(a) {
            return function(i) {
                return function(a) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (t = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                        switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                            case 0:
                            case 1:
                                o = a;
                                break;
                            case 4:
                                return s.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, n = a[1], a = [0];
                                continue;
                            case 7:
                                a = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                    s.label = a[1];
                                    break
                                }
                                if (6 === a[0] && s.label < o[1]) {
                                    s.label = o[1], o = a;
                                    break
                                }
                                if (o && s.label < o[2]) {
                                    s.label = o[2], s.ops.push(a);
                                    break
                                }
                                o[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        a = r.call(e, s)
                    } catch (e) {
                        a = [6, e], n = 0
                    } finally {
                        t = o = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, i])
            }
        }
    },
    __values = this && this.__values || function(e) {
        var r = "function" == typeof Symbol && Symbol.iterator,
            t = r && e[r],
            n = 0;
        if (t) return t.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && n >= e.length && (e = void 0), {
                    value: e && e[n++],
                    done: !e
                }
            }
        };
        throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.")
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.importVaultItems = exports.importData = exports.findLongestRowLength = exports.removeEmptyColumns = exports.parse = exports.SecureNoteHeader = exports.LoginHeader = exports.ItemKind = exports.CCHeader = exports.BoundCellType = exports.CellAttr = exports.csvToVaultItems = void 0;
var model_1 = require("../../model"),
    make_promise_1 = require("../../util/make_promise"),
    context_1 = require("../context"),
    vault_item_1 = require("../vault_item"),
    apple_1 = require("./parsers/apple"),
    chrome_1 = require("./parsers/chrome"),
    dashlane_1 = require("./parsers/dashlane"),
    encryptr_1 = require("./parsers/encryptr"),
    lastpass_1 = require("./parsers/lastpass"),
    roboform_1 = require("./parsers/roboform"),
    codeLocation = "action/import/index",
    makePromise = make_promise_1.makePromise(codeLocation),
    csv_1 = require("./parsers/csv");
Object.defineProperty(exports, "csvToVaultItems", {
    enumerable: !0,
    get: function() {
        return csv_1.csvToVaultItems
    }
}), Object.defineProperty(exports, "CellAttr", {
    enumerable: !0,
    get: function() {
        return csv_1.CellAttr
    }
}), Object.defineProperty(exports, "BoundCellType", {
    enumerable: !0,
    get: function() {
        return csv_1.BoundCellType
    }
}), Object.defineProperty(exports, "CCHeader", {
    enumerable: !0,
    get: function() {
        return csv_1.CCHeader
    }
}), Object.defineProperty(exports, "ItemKind", {
    enumerable: !0,
    get: function() {
        return csv_1.ItemKind
    }
}), Object.defineProperty(exports, "LoginHeader", {
    enumerable: !0,
    get: function() {
        return csv_1.LoginHeader
    }
}), Object.defineProperty(exports, "SecureNoteHeader", {
    enumerable: !0,
    get: function() {
        return csv_1.SecureNoteHeader
    }
});
var parser_helpers_1 = require("./parsers/helpers/parser_helpers");
Object.defineProperty(exports, "parse", {
    enumerable: !0,
    get: function() {
        return parser_helpers_1.parse
    }
}), Object.defineProperty(exports, "removeEmptyColumns", {
    enumerable: !0,
    get: function() {
        return parser_helpers_1.removeEmptyColumns
    }
}), Object.defineProperty(exports, "findLongestRowLength", {
    enumerable: !0,
    get: function() {
        return parser_helpers_1.findLongestRowLength
    }
});
var importData = function(e, r, t, n, o) {
    return makePromise("importData", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            var a;
            return __generator(this, function(s) {
                switch (s.label) {
                    case 0:
                        return [4, getParserForFormat(r)(e, t, n, o)];
                    case 1:
                        return a = s.sent(), [4, exports.importVaultItems(e, n, a)];
                    case 2:
                        return [2, s.sent()]
                }
            })
        })
    })
};
exports.importData = importData;
var importVaultItems = function(e, r, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n, o, a, s, i, u, l;
        return __generator(this, function(p) {
            switch (p.label) {
                case 0:
                    n = [];
                    try {
                        for (o = __values(t), a = o.next(); !a.done; a = o.next()) s = a.value, isValidItem(s) && n.push(s)
                    } catch (e) {
                        u = {
                            error: e
                        }
                    } finally {
                        try {
                            a && !a.done && (l = o.return) && l.call(o)
                        } finally {
                            if (u) throw u.error
                        }
                    }
                    if (0 === n.length) throw new Error("No importable items were found in the selected file.");
                    return [4, vault_item_1.patchVaultItems(e, n, r)];
                case 1:
                    return i = p.sent(), context_1.invalidateCache(e), [2, i.updatedItems]
            }
        })
    })
};
exports.importVaultItems = importVaultItems;
var getParserForFormat = function(e) {
        switch (e) {
            case "lastpass":
                return lastpass_1.parseLastPassExport;
            case "dashlane":
                return dashlane_1.parseDashlaneExport;
            case "roboform":
                return roboform_1.parseRoboFormExport;
            case "chrome":
                return chrome_1.parseChromeExport;
            case "encryptr":
                return encryptr_1.parseEncryptrExport;
            case "apple":
                return apple_1.parseAppleExport;
            default:
                throw new Error("Invalid import format.")
        }
    },
    isValidItem = function(e) {
        var r = JSON.stringify(e.overview);
        if (r && r.length > model_1.VaultItem.MaxOverviewSize) return !1;
        var t = JSON.stringify(e.details);
        return !(t && t.length > model_1.VaultItem.MaxDetailSize)
    };